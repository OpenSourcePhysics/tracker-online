(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.numerics.Util','Thread','org.opensourcephysics.display.OSPRuntime',['javajs.async.SwingJSUtils','.StateHelper'],['org.opensourcephysics.controls.AbstractAnimation','.OSPAnimationLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractAnimation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.opensourcephysics.controls.Animation', 'Runnable', ['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);
C$.$classes$=[['OSPAnimationLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.delayTime=100;
this.t0=System.currentTimeMillis$();
this.sciFormat=$I$(1).newDecimalFormat$S("0.00E0");
this.decimalFormat=this.sciFormat;
},1);

C$.$fields$=[['I',['delayTime'],'J',['t0'],'O',['mainFrame','org.opensourcephysics.display.OSPFrame','control','org.opensourcephysics.controls.Control','animationThread','Thread','sciFormat','java.text.DecimalFormat','+decimalFormat','stateHelper','javajs.async.SwingJSUtils.StateHelper']]]

Clazz.newMeth(C$, 'setControl$org_opensourcephysics_controls_Control',  function (control) {
this.control=control;
this.mainFrame=null;
if (control != null ) {
if (Clazz.instanceOf(control, "org.opensourcephysics.controls.MainFrame")) {
this.mainFrame=(control).getMainFrame$();
}control.setLockValues$Z(true);
this.resetAnimation$();
control.setLockValues$Z(false);
if (Clazz.instanceOf(control, "java.awt.Frame")) {
(control).pack$();
}}});

Clazz.newMeth(C$, 'setDelayTime$I',  function (delay) {
this.delayTime=delay;
});

Clazz.newMeth(C$, 'getDelayTime$',  function () {
return this.delayTime;
});

Clazz.newMeth(C$, ['getMainFrame$','getMainFrame'],  function () {
return this.mainFrame;
});

Clazz.newMeth(C$, ['getMainFrameSize$','getMainFrameSize'],  function () {
var d=this.mainFrame.getSize$();
return Clazz.array(Integer.TYPE, -1, [d.width, d.height]);
});

Clazz.newMeth(C$, 'getOSPApp$',  function () {
if (Clazz.instanceOf(this.control, "org.opensourcephysics.controls.MainFrame")) {
return (this.control).getOSPApp$();
}return null;
});

Clazz.newMeth(C$, 'addChildFrame$javax_swing_JFrame',  function (frame) {
if ((this.mainFrame == null ) || (frame == null ) ) {
return;
}this.mainFrame.addChildFrame$javax_swing_JFrame(frame);
});

Clazz.newMeth(C$, 'clearChildFrames$',  function () {
if (this.mainFrame == null ) {
return;
}this.mainFrame.clearChildFrames$();
});

Clazz.newMeth(C$, 'getChildFrames$',  function () {
return this.mainFrame.getChildFrames$();
});

Clazz.newMeth(C$, 'getControl$',  function () {
return this.control;
});

Clazz.newMeth(C$, 'initializeAnimation$',  function () {
this.control.clearMessages$();
});

Clazz.newMeth(C$, 'stopAnimation$',  function () {
if (this.stateHelper != null ) this.stateHelper.setState$I(2);
if (this.animationThread == null ) {
return;
}var tempThread=this.animationThread;
this.animationThread=null;
if (this.stateHelper != null ) this.stateHelper.setState$I(2);
if ($I$(2).currentThread$() === tempThread ) {
return;
}try {
tempThread.interrupt$();
if (!$I$(3).isJS) tempThread.join$J(1000);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isRunning$',  function () {
return this.animationThread != null ;
});

Clazz.newMeth(C$, 'stepAnimation$',  function () {
if (this.animationThread != null ) {
this.stopAnimation$();
return;
}this.doStep$();
});

Clazz.newMeth(C$, 'startAnimation$',  function () {
if (this.animationThread != null ) {
return;
}this.animationThread=Clazz.new_($I$(2,1).c$$Runnable,[this]);
this.animationThread.setPriority$I(5);
this.animationThread.setDaemon$Z(true);
this.animationThread.start$();
});

Clazz.newMeth(C$, 'resetAnimation$',  function () {
if (this.animationThread != null ) {
this.stopAnimation$();
}this.control.clearMessages$();
});

Clazz.newMeth(C$, 'stateLoop$',  function () {
while (this.animationThread != null  && !this.animationThread.isInterrupted$()  && this.stateHelper.isAlive$() ){
switch (this.stateHelper.getState$()) {
default:
case 0:
this.stateHelper.setState$I(1);
this.stateHelper.sleep$I(this.delayTime);
return true;
case 1:
var currentTime=System.currentTimeMillis$();
this.doStep$();
var sleepTime=Long.$ival(Math.max$J$J(10, Long.$sub(this.delayTime,(Long.$sub(System.currentTimeMillis$(),currentTime)))));
this.stateHelper.sleep$I(sleepTime);
return true;
case 2:
return false;
}
}
return false;
});

Clazz.newMeth(C$, 'run$',  function () {
this.stateHelper=Clazz.new_($I$(4,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.stateHelper.setState$I(0);
this.stateHelper.sleep$I(0);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractAnimation, "OSPAnimationLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
(obj).initializeAnimation$();
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
