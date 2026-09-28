(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,['javajs.async.SwingJSUtils','.StateHelper'],'Thread',['demoJS.ProgressBarSimpleDemo','.State'],'javax.swing.JProgressBar','javax.swing.JFrame','java.awt.BorderLayout','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel','javax.swing.JButton','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProgressBarSimpleDemo", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['State',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.min=0;
this.max=10;
this.count=0;
this.delaySynchronous=1000;
this.counting=((P$.ProgressBarSimpleDemo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressBarSimpleDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
while (!this.b$['demoJS.ProgressBarSimpleDemo'].isDone$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], [])){
try {
$I$(2).sleep$J(this.b$['demoJS.ProgressBarSimpleDemo'].delaySynchronous);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
System.err.println$S("Thread interrupted.");
} else {
throw ie;
}
}
this.b$['demoJS.ProgressBarSimpleDemo'].onProgress$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], []);
}
this.b$['demoJS.ProgressBarSimpleDemo'].onDone$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], []);
});
})()
), Clazz.new_(P$.ProgressBarSimpleDemo$1.$init$,[this, null]));
},1);

C$.$fields$=[['I',['min','max','count'],'J',['delaySynchronous'],'O',['progressBar','javax.swing.JProgressBar','state','demoJS.ProgressBarSimpleDemo.State','counting','Runnable']]]

Clazz.newMeth(C$, 'c$$I$I$Z',  function (min, max, asynchronous) {
;C$.$init$.apply(this);
this.min=min;
this.max=max;
this.state=(asynchronous ? Clazz.new_($I$(3,1),[this, null]) : null);
this.progressBar=Clazz.new_($I$(4,1).c$$I$I,[min, max]);
this.progressBar.setString$S("Not running");
this.progressBar.setStringPainted$Z(true);
var frame=Clazz.new_($I$(5,1).c$$S,["Progress Bar with Thread"]);
frame.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
var panel=Clazz.new_($I$(7,1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
var label=Clazz.new_($I$(9,1).c$$S,["Progress Bar Test"]);
var button=Clazz.new_($I$(10,1));
button.setText$S("Count");
button.addActionListener$java_awt_event_ActionListener(((P$.ProgressBarSimpleDemo$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressBarSimpleDemo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['demoJS.ProgressBarSimpleDemo'].count$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], []);
});
})()
), Clazz.new_(P$.ProgressBarSimpleDemo$2.$init$,[this, null])));
panel.add$java_awt_Component(label);
panel.add$java_awt_Component(button);
var sliderPanel=Clazz.new_($I$(7,1));
sliderPanel.setBackground$java_awt_Color($I$(11).GREEN);
sliderPanel.setSize$I$I(300, 50);
sliderPanel.add$java_awt_Component(this.progressBar);
frame.setSize$I$I(300, 300);
frame.add$java_awt_Component$O(panel, "North");
frame.add$java_awt_Component$O(sliderPanel, "South");
frame.setLocationRelativeTo$java_awt_Component(null);
frame.setDefaultCloseOperation$I(3);
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'count$',  function () {
this.count=0;
this.progressBar.setString$S("Running");
System.out.println$S("\nCounting");
this.longJob$();
this.progressBar.setValue$I(this.count);
});

Clazz.newMeth(C$, 'persists$',  function () {
return this.state.persists;
});

Clazz.newMeth(C$, 'setPersists$Z',  function (persists) {
this.state.persists=persists;
});

Clazz.newMeth(C$, 'getDelayMillis$',  function () {
return this.state.delayMillis;
});

Clazz.newMeth(C$, 'setDelayMillis$I',  function (delayMillis) {
this.state.delayMillis=delayMillis;
});

Clazz.newMeth(C$, 'getOnExit$',  function () {
return this.state.onExit;
});

Clazz.newMeth(C$, 'setOnExit$java_util_function_Function',  function (onExit) {
this.state.onExit=onExit;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state.helper.getState$();
});

Clazz.newMeth(C$, 'setState$I',  function (newState) {
this.state.helper.setState$I(newState);
});

Clazz.newMeth(C$, 'getNextState$',  function () {
return this.state.helper.getNextState$();
});

Clazz.newMeth(C$, 'setNextState$I',  function (newState) {
this.state.helper.setNextState$I(newState);
});

Clazz.newMeth(C$, 'delayedState$I$I',  function (nextState, startDelayMillis) {
this.state.helper.delayedState$I$I(startDelayMillis, nextState);
});

Clazz.newMeth(C$, 'done$',  function () {
this.state.helper.setState$I(99);
});

Clazz.newMeth(C$, 'kill$',  function () {
this.state.helper.setState$I(-99);
this.state.helper.interrupt$();
});

Clazz.newMeth(C$, 'longJob$',  function () {
System.out.println$S("Start long job.");
if (this.state != null ) {
this.state.start$();
} else {
Clazz.new_($I$(2,1).c$$Runnable,[this.counting]).start$();
}});

Clazz.newMeth(C$, 'isDone$',  function () {
return (this.count >= this.max);
});

Clazz.newMeth(C$, 'onIdle$',  function () {
this.progressBar.setValue$I(this.min);
});

Clazz.newMeth(C$, 'onProgress$',  function () {
this.progressBar.setValue$I(++this.count);
});

Clazz.newMeth(C$, 'onDone$',  function () {
this.progressBar.setValue$I(this.count);
System.out.println$S("Done long job.\n");
this.progressBar.setString$S("Done");
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$.c$$I$I$Z,[0, 10, true]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProgressBarSimpleDemo, "State", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.delayMillis=1000;
this.persists=false;
},1);

C$.$fields$=[['Z',['persists'],'I',['delayMillis'],'O',['helper','javajs.async.SwingJSUtils.StateHelper','onExit','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.helper.setState$I(-1);
}, 1);

Clazz.newMeth(C$, 'start$',  function () {
switch (this.helper.getState$()) {
case -1:
case 99:
case -99:
this.helper.restart$();
this.helper.next$I(0);
break;
default:
this.helper.setNextState$I(0);
break;
}
});

Clazz.newMeth(C$, 'stateLoop$',  function () {
 out : while (this.helper.isAlive$()){
switch (this.helper.getState$()) {
case -99:
break out;
case -1:
this.helper.delayedState$I$I(this.delayMillis, -2147483648);
return true;
case 0:
this.helper.setState$I(1);
this.helper.delayedState$I$I(this.delayMillis, -2147483648);
return true;
case 1:
if (!this.b$['demoJS.ProgressBarSimpleDemo'].isDone$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], [])) {
this.b$['demoJS.ProgressBarSimpleDemo'].onProgress$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], []);
this.helper.delayedState$I$I(this.delayMillis, -2147483648);
} else {
this.helper.next$I(this.persists ? -1 : 99);
}return true;
case 99:
this.b$['demoJS.ProgressBarSimpleDemo'].onDone$.apply(this.b$['demoJS.ProgressBarSimpleDemo'], []);
break out;
}
}
if (this.onExit != null ) {
this.onExit.apply$O(Integer.valueOf$I(this.helper.getState$()));
}return false;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
