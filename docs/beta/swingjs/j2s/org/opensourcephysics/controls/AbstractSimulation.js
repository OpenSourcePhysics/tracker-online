(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,['org.opensourcephysics.controls.AbstractSimulation','.ShadowControl'],'org.opensourcephysics.display.GUIUtils',['javajs.async.SwingJSUtils','.StateHelper'],['org.opensourcephysics.controls.AbstractSimulation','.OSPSimulationLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractSimulation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.AbstractAnimation', ['org.opensourcephysics.controls.Simulation', ['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);
C$.$classes$=[['ShadowControl',2],['OSPSimulationLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showStepsPerDisplay=false;
this.stepsPerDisplay=1;
this.stepCounter=0;
},1);

C$.$fields$=[['Z',['showStepsPerDisplay'],'I',['stepsPerDisplay','stepCounter'],'O',['$control','org.opensourcephysics.controls.SimControl','$stateHelper','javajs.async.SwingJSUtils.StateHelper']]]

Clazz.newMeth(C$, 'setControl$org_opensourcephysics_controls_Control',  function (control) {
if (Clazz.instanceOf(control, "org.opensourcephysics.controls.SimControl")) {
this.$control=control;
} else {
this.$control=Clazz.new_($I$(1,1).c$$org_opensourcephysics_controls_Control,[this, null, control]);
}this.control=control;
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

Clazz.newMeth(C$, 'getControl$',  function () {
return this.$control;
});

Clazz.newMeth(C$, 'startRunning$',  function () {
});

Clazz.newMeth(C$, 'stopRunning$',  function () {
});

Clazz.newMeth(C$, 'startAnimation$',  function () {
if (this.showStepsPerDisplay) {
this.stepsPerDisplay=this.$control.getInt$S("steps per display");
}this.start$();
this.startRunning$();
C$.superclazz.prototype.startAnimation$.apply(this, []);
});

Clazz.newMeth(C$, 'startSimulation$',  function () {
this.startAnimation$();
});

Clazz.newMeth(C$, 'start$',  function () {
});

Clazz.newMeth(C$, 'stopAnimation$',  function () {
C$.superclazz.prototype.stopAnimation$.apply(this, []);
this.stopRunning$();
this.stop$();
});

Clazz.newMeth(C$, 'stopSimulation$',  function () {
this.stopAnimation$();
});

Clazz.newMeth(C$, 'stop$',  function () {
});

Clazz.newMeth(C$, 'stepAnimation$',  function () {
if (this.showStepsPerDisplay) {
this.stepsPerDisplay=this.$control.getInt$S("steps per display");
}this.startRunning$();
C$.superclazz.prototype.stepAnimation$.apply(this, []);
++this.stepCounter;
this.stopRunning$();
$I$(2).repaintAnimatedFrames$();
});

Clazz.newMeth(C$, 'initializeAnimation$',  function () {
if (this.$control == null ) {
return;
}C$.superclazz.prototype.initializeAnimation$.apply(this, []);
this.initialize$();
this.stepCounter=0;
});

Clazz.newMeth(C$, 'getStepCounter$',  function () {
return this.stepCounter;
});

Clazz.newMeth(C$, 'initialize$',  function () {
});

Clazz.newMeth(C$, 'resetAnimation$',  function () {
if (this.$control == null ) {
return;
}C$.superclazz.prototype.resetAnimation$.apply(this, []);
this.stepsPerDisplay=1;
if (this.showStepsPerDisplay) {
this.$control.setAdjustableValue$S$I("steps per display", this.stepsPerDisplay);
}this.reset$();
});

Clazz.newMeth(C$, 'enableStepsPerDisplay$Z',  function (enable) {
this.showStepsPerDisplay=enable;
if (this.showStepsPerDisplay) {
this.$control.setAdjustableValue$S$I("steps per display", this.stepsPerDisplay);
} else {
this.$control.removeParameter$S("steps per display");
}});

Clazz.newMeth(C$, 'setStepsPerDisplay$I',  function (num) {
this.stepsPerDisplay=Math.max(num, 1);
if (this.showStepsPerDisplay) {
this.$control.setAdjustableValue$S$I("steps per display", this.stepsPerDisplay);
}});

Clazz.newMeth(C$, 'getStepsPerDisplay$',  function () {
return this.stepsPerDisplay;
});

Clazz.newMeth(C$, 'reset$',  function () {
});

Clazz.newMeth(C$, 'stateLoop$',  function () {
while (this.animationThread != null  && !this.animationThread.isInterrupted$()  && this.$stateHelper.isAlive$() ){
switch (this.$stateHelper.getState$()) {
default:
case 0:
$I$(2).setAnimatedFrameIgnoreRepaint$Z(true);
this.$stateHelper.setState$I(1);
this.$stateHelper.sleep$I(this.delayTime);
return true;
case 1:
var currentTime=System.currentTimeMillis$();
for (var i=0; i < this.stepsPerDisplay; i++) this.doStep$();

var sleepTime=Long.$ival(Math.max$J$J(10, Long.$sub(this.delayTime,(Long.$sub(System.currentTimeMillis$(),currentTime)))));
$I$(2).renderAnimatedFrames$();
this.$stateHelper.sleep$I(sleepTime);
return true;
case 2:
$I$(2).setAnimatedFrameIgnoreRepaint$Z(false);
return false;
}
}
return false;
});

Clazz.newMeth(C$, 'run$',  function () {
this.$stateHelper=Clazz.new_($I$(3,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.$stateHelper.setState$I(0);
this.$stateHelper.sleep$I(0);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractSimulation, "ShadowControl", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.controls.SimControl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['control','org.opensourcephysics.controls.Control']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Control',  function (control) {
;C$.$init$.apply(this);
this.control=control;
}, 1);

Clazz.newMeth(C$, 'setAdjustableValue$S$Z',  function (name, val) {
this.control.setValue$S$Z(name, val);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$D',  function (name, val) {
this.control.setValue$S$D(name, val);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$I',  function (name, val) {
this.control.setValue$S$I(name, val);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$O',  function (name, val) {
this.control.setValue$S$O(name, val);
});

Clazz.newMeth(C$, 'removeParameter$S',  function (name) {
});

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
this.control.setLockValues$Z(lock);
});

Clazz.newMeth(C$, 'setValue$S$O',  function (name, val) {
this.control.setValue$S$O(name, val);
});

Clazz.newMeth(C$, 'setValue$S$D',  function (name, val) {
this.control.setValue$S$D(name, val);
});

Clazz.newMeth(C$, 'setValue$S$I',  function (name, val) {
this.control.setValue$S$I(name, val);
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (name, val) {
this.control.setValue$S$Z(name, val);
});

Clazz.newMeth(C$, 'getInt$S',  function (name) {
return this.control.getInt$S(name);
});

Clazz.newMeth(C$, 'getDouble$S',  function (name) {
return this.control.getDouble$S(name);
});

Clazz.newMeth(C$, 'getObject$S',  function (name) {
return this.control.getObject$S(name);
});

Clazz.newMeth(C$, 'getString$S',  function (name) {
return this.control.getString$S(name);
});

Clazz.newMeth(C$, 'getBoolean$S',  function (name) {
return this.control.getBoolean$S(name);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.control.getPropertyNames$();
});

Clazz.newMeth(C$, 'getPropertyNamesRaw$',  function () {
return this.control.getPropertyNamesRaw$();
});

Clazz.newMeth(C$, 'println$S',  function (s) {
this.control.println$S(s);
});

Clazz.newMeth(C$, 'println$',  function () {
this.control.println$();
});

Clazz.newMeth(C$, 'print$S',  function (s) {
this.control.print$S(s);
});

Clazz.newMeth(C$, 'clearMessages$',  function () {
this.control.clearMessages$();
});

Clazz.newMeth(C$, 'clearValues$',  function () {
this.control.clearValues$();
});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
this.control.calculationDone$S(message);
});

Clazz.newMeth(C$, 'setParameterToFixed$S$Z',  function (name, fixed) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractSimulation, "OSPSimulationLoader", function(){
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
