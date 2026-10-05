(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,['javajs.async.SwingJSUtils','.StateHelper'],'Thread','org.opensourcephysics.controls.CalculationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StateMachineTestApp", null, 'org.opensourcephysics.controls.AbstractCalculation', ['Runnable', ['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
this.t0=0;
this.t1=0;
this.dt=0;
this.delay=(100 ||100);
},1);

C$.$fields$=[['D',['dt'],'I',['counter','delay'],'J',['t0','t1'],'O',['animationThread','Thread','stateHelper','javajs.async.SwingJSUtils.StateHelper']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);

debugger;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.stateHelper=Clazz.new_($I$(1,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.stateHelper.setState$I(0);
this.stateHelper.sleep$I(0);
});

Clazz.newMeth(C$, 'stateLoop$',  function () {
while (this.animationThread != null  && !this.animationThread.isInterrupted$()  && this.stateHelper.isAlive$() ){
switch (this.stateHelper.getState$()) {
default:
case 0:
this.control.println$S("Starting");
this.t1=(performance.now() ||System.currentTimeMillis$());
this.dt=(Long.$sub(this.t1,this.t0)) / 1000.0;
this.stateHelper.setState$I(1);
this.stateHelper.sleep$I(this.delay);
return true;
case 1:
this.control.println$S("Running counter=" + this.counter);
this.t1=(performance.now() ||System.currentTimeMillis$());
this.dt=(Long.$sub(this.t1,this.t0)) / 1000.0;
++this.counter;
this.stateHelper.sleep$I(this.delay);
return true;
case 2:
this.control.println$S("Ending");
return false;
}
}
return false;
});

Clazz.newMeth(C$, 'calculate$',  function () {

debugger;
this.control.println$S("Calculate pressed");
this.control.setValue$S$I("counter", this.counter);
this.control.setValue$S$D("dt", this.dt);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.counter=0;
this.dt=0;
this.animationThread=null;
this.control.setValue$S$I("counter", this.counter);
this.control.setValue$S$D("dt", this.dt);
});

Clazz.newMeth(C$, 'startHelper$',  function () {
this.control.println$S("Start pressed");
if (this.animationThread != null ) return;
this.animationThread=Clazz.new_($I$(2,1).c$$Runnable,[this]);
this.t0=(performance.now() ||System.currentTimeMillis$());
this.animationThread.start$();
});

Clazz.newMeth(C$, 'stopHelper$',  function () {
this.control.println$S("Stop pressed");
this.stateHelper.setState$I(2);
this.animationThread=null;
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var control=$I$(3,"createApp$org_opensourcephysics_controls_Calculation",[Clazz.new_(C$)]);
control.addButton$S$S("startHelper", "Start");
control.addButton$S$S("stopHelper", "Stop");
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
