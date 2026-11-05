const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../swingjs/swingjs2.js'), 'utf8');
const start = source.indexOf('\tvar getTapControl = function');
const end = source.indexOf("\n\tJ2S.$bind('body'", start);
const upStart = source.indexOf('\tvar mouseUp = function');
const upEnd = source.indexOf('\tvar mouseClick = function', upStart);
assert(start >= 0 && end > start, 'Touch bridge must be present');
function gesture(type = 'pointer') {
  let now = 0, timerId = 0, popup = false;
  const timers = new Map(), events = [];
  const target = {closest(){return null;}, getAttribute(){return null;}};
  const context = {console, document:{documentElement:{}}, window:{},
    Date:{now:()=>now},
    setTimeout(fn,ms){timers.set(++timerId,{fn,time:now+ms});return timerId;},
    clearTimeout(id){timers.delete(id);},
    getXY(who,event){return [event.pageX,event.pageY,event.button];},
    J2S:{setMouseOwner(){},Swing:{hideMenus(){popup=false;}}}};
  context.self = context;
  vm.createContext(context);
  vm.runInContext(source.slice(start,end) + source.slice(upStart,upEnd) + '\nself.bridge={prepare:prepareTouchContext,finish:finishTouchContext,up:mouseUp};',context);
  const who = {applet:{_processEvent(id,xy,event){events.push({id,button:event.button});if(id===501&&event.button===2)popup=true;}}};
  function event(action) {
    const e={type:type+action,target,pageX:100,pageY:120,preventDefault(){},stopPropagation(){}};
    if(type==='pointer'){e.pointerType='touch';e.pointerId=7;}
    else {e.touches=action==='start'?[{pageX:100,pageY:120}]:[];e.changedTouches=[{pageX:100,pageY:120}];}
    return e;
  }
  function advance(ms) {
    const until=now+ms;
    while(true){const next=[...timers.entries()].filter(([id,t])=>t.time<=until).sort((a,b)=>a[1].time-b[1].time)[0];if(!next)break;now=next[1].time;timers.delete(next[0]);next[1].fn();}
    now=until;
  }
  const down=()=>event(type==='pointer'?'down':'start');
  const up=()=>event(type==='pointer'?'up':'end');
  context.bridge.prepare(who,down());
  return {context,who,events,advance,down,up,get popup(){return popup;}};
}
for(const type of ['pointer','touch']) {
  const hold=gesture(type);hold.advance(4500);
  assert(hold.popup,'Hold opens the marker context menu');
  const release=hold.up();
  assert(hold.context.bridge.finish(hold.who,release),'The original release must remain owned by the context gesture even after a long hold');
  const eventCount=hold.events.length;
  hold.context.bridge.up(hold.who,release);
  assert.equal(hold.events.length,eventCount,'A second listener for the same native release must not generate a Java click');
  assert(hold.popup,'Lifting the finger must leave the popup visible');
  assert.equal(hold.context.J2S._lastTouchContextMenu.time,4500,'Suppress the compatibility click from release time, not menu-open time');
  for(const duplicate of ['touchend','mouseup']) {
    let prevented=false, stopped=false;
    hold.context.bridge.up(hold.who,{type:duplicate,target:{},originalEvent:{},preventDefault(){prevented=true;},stopPropagation(){stopped=true;}});
    assert(prevented&&stopped,'Duplicate '+duplicate+' must not reach document-level menu dismissal');
  }
  hold.advance(3000);assert(hold.popup,'The open popup has no dismissal timer');
  hold.context.bridge.prepare(hold.who,hold.down());
  assert(!hold.popup,'The next contact in the video dismisses the popup');
  const cancelled=gesture(type);cancelled.advance(2500);
  const cancel=cancelled.up();cancel.type=type+'cancel';
  assert(cancelled.context.bridge.finish(cancelled.who,cancel),'Browser cancellation remains part of the long press');
  cancelled.advance(2000);
  assert(cancelled.context.bridge.finish(cancelled.who,cancelled.up()),'A delayed lift after cancellation must not become a click');
  assert(cancelled.popup,'Cancellation and release must leave the popup visible');
  const lostRelease=gesture(type);lostRelease.advance(5000);
  lostRelease.context.bridge.prepare(lostRelease.who,lostRelease.down());
  assert(!lostRelease.popup,'A new video press dismisses a popup even if Safari omitted the prior release');
  const tap=gesture(type);tap.advance(100);
  assert.equal(tap.context.bridge.finish(tap.who,tap.up()),false,'An ordinary tap still follows the normal release/click path');
}
console.log('PASS: long pointer/touch holds survive release, suppress only the originating click, stay open, and dismiss on the next video press; ordinary taps preserved');
