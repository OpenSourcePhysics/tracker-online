(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.ParticleModel','org.opensourcephysics.cabrillo.tracker.DynamicParticle',['org.opensourcephysics.cabrillo.tracker.DynamicParticle','.ModelBooster'],'org.opensourcephysics.numerics.RK4','java.util.HashMap',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.PositionStep','org.opensourcephysics.numerics.ODE','org.opensourcephysics.tools.Parameter','org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.cabrillo.tracker.DynamicFunctionPanel','org.opensourcephysics.tools.UserFunction','org.opensourcephysics.media.core.NumberField',['org.opensourcephysics.cabrillo.tracker.DynamicParticle','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DynamicParticle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.ParticleModel', 'org.opensourcephysics.numerics.ODE');
C$.$classes$=[['ModelBooster',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modelBooster=Clazz.new_($I$(4,1),[this, null]);
this.state=Clazz.array(Double.TYPE, [5]);
this.initialState=Clazz.array(Double.TYPE, [5]);
this.solver=Clazz.new_($I$(5,1).c$$org_opensourcephysics_numerics_ODE,[this]);
this.iterationsPerStep=10;
this.frameStates=Clazz.new_($I$(6,1));
this.temp=Clazz.array(Double.TYPE, [5]);
},1);

C$.$fields$=[['Z',['inSystem'],'I',['iterationsPerStep'],'S',['boosterName'],'O',['modelBooster','org.opensourcephysics.cabrillo.tracker.DynamicParticle.ModelBooster','cellNumberField','org.opensourcephysics.media.core.NumberField','state','double[]','+initialState','solver','org.opensourcephysics.numerics.ODESolver','system','org.opensourcephysics.cabrillo.tracker.DynamicSystem','frameStates','java.util.HashMap','temp','double[]']]
,['O',['cartVars','String[]']]]

Clazz.newMeth(C$, 'getBoostVars$',  function () {
return C$.cartVars;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.initializeInitEditor$();
this.$points=Clazz.array($I$(7), -1, [Clazz.new_($I$(7,1))]);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (this.boosterName != null  && Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel") ) {
var m=(panel).getTrackByName$Class$S(Clazz.getClass($I$(8)), this.boosterName);
if (m != null ) {
this.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(m);
this.boosterName=null;
}}if (this.system == null  && !this.inSystem ) C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
var s=this.getName$();
if (this.system == null ) return s;
var $in=$I$(9).getString$S("DynamicParticle.System.In");
return s + " (" + $in + " " + this.system.getName$() + ")" ;
});

Clazz.newMeth(C$, 'delete$',  function () {
if (this.system != null ) {
var message=$I$(9).getString$S("DynamicParticle.Dialog.Delete.Message");
var response=$I$(10,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.tframe, message, $I$(9).getString$S("DynamicParticle.Dialog.Delete.Title"), 2, 2]);
if (response == 0) {
this.system.removeParticle$org_opensourcephysics_cabrillo_tracker_DynamicParticle(this);
} else return;
}C$.superclazz.prototype.delete$.apply(this, []);
});

Clazz.newMeth(C$, 'refreshSteps$S',  function (why) {
if (this.system == null ) C$.superclazz.prototype.refreshSteps$S.apply(this, [why]);
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.system != null ) return;
this.resetState$();
var state=this.getState$();
this.t0=state[state.length - 1];
this.setTracePositions$DA(state);
if (this.tp != null ) {
this.erase$();
this.dt=this.tp.getPlayer$().getMeanStepDuration$() / (1000 * $I$(2).tracePtsPerStep);
this.dt/=this.iterationsPerStep;
this.solver.initialize$D(this.dt);
var models=this.getModels$();
var clip=this.tp.getPlayer$().getVideoClip$();
var end=Math.min(this.getEndFrame$(), clip.getLastFrameNumber$());
while (end > this.getStartFrame$() && !clip.includesFrame$I(end) ){
--end;
}
var emptySystem=false;
if (Clazz.instanceOf(this, "org.opensourcephysics.cabrillo.tracker.DynamicSystem")) {
var system=this;
emptySystem=system.particles.length == 0;
}if (emptySystem || (end == this.getStartFrame$() && !clip.includesFrame$I(this.getStartFrame$()) ) ) {
for (var i=0; i < models.length; i++) {
models[i].steps.setLength$I(1);
models[i].steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(0, null);
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panelID=this.tp.andWorld.get$I(j);
models[i].getVArray$Integer(panelID).setLength$I(0);
models[i].getAArray$Integer(panelID).setLength$I(0);
}
models[i].traceX=Clazz.array(Double.TYPE, [0]);
models[i].traceY=Clazz.array(Double.TYPE, [0]);
}
this.fireStepsChanged$();
return;
}var firstFrameInClip=this.getStartFrame$();
while (firstFrameInClip < end && !clip.includesFrame$I(firstFrameInClip) ){
++firstFrameInClip;
}
var coords=this.tp.getCoords$();
var useDefault=this.isUseDefaultReferenceFrame$();
while (useDefault && Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") ){
coords=(coords).getCoords$();
}
var count=((firstFrameInClip - this.getStartFrame$()) * $I$(2).tracePtsPerStep * this.iterationsPerStep /clip.getStepSize$()|0);
for (var i=0; i < count; i++) {
this.solver.step$();
}
this.setTracePositions$DA(this.getState$());
var transform=coords.getToImageTransform$I(firstFrameInClip);
for (var i=0; i < models.length; i++) {
models[i].setLastValidFrame$I(firstFrameInClip);
models[i].steps.setLength$I(firstFrameInClip + 1);
var step=models[i].getStep$I(firstFrameInClip);
for (var j=0; j < models[i].steps.array.length; j++) {
if (j < firstFrameInClip) models[i].steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(j, null);
 else if (step == null ) {
step=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[models[i], firstFrameInClip, 0, 0]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(models[i].getFootprint$());
models[i].steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(firstFrameInClip, step);
}}
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panelID=this.tp.andWorld.get$I(j);
models[i].getVArray$Integer(panelID).setLength$I(0);
models[i].getAArray$Integer(panelID).setLength$I(0);
}
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.$points[i], this.$points[i]);
models[i].traceX=Clazz.array(Double.TYPE, -1, [this.$points[i].getX$()]);
models[i].traceY=Clazz.array(Double.TYPE, -1, [this.$points[i].getY$()]);
step.getPosition$().setPosition$java_awt_geom_Point2D_Double(this.$points[i]);
models[i].firePropertyChange$S$O$O("step", null, Integer.valueOf$I(firstFrameInClip));
}
}});

Clazz.newMeth(C$, 'getState$',  function () {
if (this.system != null ) {
return this.system.getState$org_opensourcephysics_cabrillo_tracker_DynamicParticle(this);
}return this.state;
});

Clazz.newMeth(C$, 'saveState$I',  function (frameNumber) {
this.frameStates.put$O$O(Integer.valueOf$I(frameNumber), this.getState$().clone$());
});

Clazz.newMeth(C$, 'restoreState$I',  function (frameNumber) {
var savedState=this.frameStates.get$O(Integer.valueOf$I(frameNumber));
if (savedState != null ) {
System.arraycopy$O$I$O$I$I(savedState, 0, this.state, 0, this.state.length);
return true;
}return false;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
this.getXYForces$DA$DA(state, this.temp);
rate[0]=state[1];
rate[1]=this.temp[0] / this.getMass$();
rate[2]=state[3];
rate[3]=this.temp[1] / this.getMass$();
rate[4]=1;
});

Clazz.newMeth(C$, 'setSolver$Class',  function (solverClass) {
var c=Clazz.array(Class, -1, [Clazz.getClass($I$(12),['getRate$DA$DA','getState$'])]);
var o=Clazz.array(java.lang.Object, -1, [this]);
try {
var constructor=solverClass.getDeclaredConstructor$ClassA(c);
this.solver=constructor.newInstance$OA(o);
this.reset$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getInitialState$',  function () {
var init=this.getInitialValues$();
this.initialState[0]=init[1];
this.initialState[1]=init[3];
this.initialState[2]=init[2];
this.initialState[3]=init[4];
this.initialState[4]=init[0];
return this.initialState;
});

Clazz.newMeth(C$, 'getStartFrame$',  function () {
return (this.system == null  ? this.startFrame : this.system.getStartFrame$());
});

Clazz.newMeth(C$, 'setStartFrame$I',  function (n) {
if (this.system != null ) {
this.system.setStartFrame$I(n);
this.system.refreshSystemParameters$();
} else {
C$.superclazz.prototype.setStartFrame$I.apply(this, [n]);
if (this.modelBooster != null ) {
this.modelBooster.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(this.modelBooster.booster);
}}});

Clazz.newMeth(C$, 'getEndFrame$',  function () {
if (this.system != null ) return this.system.getEndFrame$();
return this.endFrame;
});

Clazz.newMeth(C$, 'setEndFrame$I',  function (n) {
if (this.system != null ) this.system.setEndFrame$I(n);
 else C$.superclazz.prototype.setEndFrame$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (e.getPropertyName$().equals$O("transform")) this.boost$();
});

Clazz.newMeth(C$, 'getXYForces$DA$DA',  function (cartesianState, ret) {
var f=this.getFunctionEditor$().getMainFunctions$();
f[0].clear$();
f[1].clear$();
ret[0]=f[0].evaluateMyVal$DA(cartesianState);
ret[1]=f[1].evaluateMyVal$DA(cartesianState);
f[0].clear$();
f[1].clear$();
$I$(2).nCalc+=2;
});

Clazz.newMeth(C$, 'resetState$',  function () {
if (this.system != null ) this.system.resetState$();
 else System.arraycopy$O$I$O$I$I(this.getInitialState$(), 0, this.state, 0, this.state.length);
});

Clazz.newMeth(C$, 'initializeInitEditor$',  function () {
var t=this.getInitEditor$().getObject$S("t");
var x=Clazz.new_($I$(13,1).c$$S$S,["x", "0.0"]);
x.setNameEditable$Z(false);
x.setDescription$S($I$(9).getString$S("DynamicParticle.Parameter.InitialX.Description"));
var y=Clazz.new_($I$(13,1).c$$S$S,["y", "0.0"]);
y.setNameEditable$Z(false);
y.setDescription$S($I$(9).getString$S("DynamicParticle.Parameter.InitialY.Description"));
var vx=Clazz.new_($I$(13,1).c$$S$S,["vx", "0.0"]);
vx.setNameEditable$Z(false);
vx.setDescription$S($I$(9).getString$S("DynamicParticle.Parameter.InitialVelocityX.Description"));
var vy=Clazz.new_($I$(13,1).c$$S$S,["vy", "0.0"]);
vy.setNameEditable$Z(false);
vy.setDescription$S($I$(9).getString$S("DynamicParticle.Parameter.InitialVelocityY.Description"));
this.getInitEditor$().setParameters$org_opensourcephysics_tools_ParameterA(Clazz.array($I$(13), -1, [t, x, y, vx, vy]));
});

Clazz.newMeth(C$, 'initializeFunctionPanel$',  function () {
this.functionEditor=Clazz.new_($I$(14,1));
this.functionPanel=Clazz.new_($I$(15,1).c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_DynamicParticle,[this.functionEditor, this]);
var funcVars=Clazz.array(String, -1, ["x", "vx", "y", "vy", "t"]);
var uf=Clazz.array($I$(16), [2]);
uf[0]=Clazz.new_(["fx", funcVars, $I$(9).getString$S("DynamicParticle.ForceFunction.X.Description")],$I$(16,1).c$$S$SA$S);
uf[1]=Clazz.new_(["fy", funcVars, $I$(9).getString$S("DynamicParticle.ForceFunction.Y.Description")],$I$(16,1).c$$S$SA$S);
this.functionEditor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(uf);
this.createMassAndTimeParameters$();
});

Clazz.newMeth(C$, 'getNextTracePositions$',  function () {
for (var i=0; i < this.iterationsPerStep; i++) {
this.solver.step$();
}
this.setTracePositions$DA(this.getState$());
return true;
});

Clazz.newMeth(C$, 'setTracePositions$DA',  function (state) {
this.$points[0].setLocation$D$D(state[0], state[2]);
});

Clazz.newMeth(C$, 'getBoostState$org_opensourcephysics_cabrillo_tracker_PointMass$I',  function (target, frameNumber) {
var data=target.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
var ds=data.getFrameDataset$();
var frames=ds.getYPoints$();
for (var i=0, n=frames.length; i < n; i++) {
if (frames[i] == frameNumber ) {
this.temp[0]=data.get$S$I$I("x", i, 1);
this.temp[1]=data.get$S$I$I("v_{x}", i, 1);
this.temp[2]=data.get$S$I$I("y", i, 1);
this.temp[3]=data.get$S$I$I("v_{y}", i, 1);
this.temp[4]=data.getValueAt$I$I(i, 0);
return this.temp;
}}
return null;
});

Clazz.newMeth(C$, 'getBooster$',  function () {
return this.modelBooster.booster;
});

Clazz.newMeth(C$, 'setBooster$org_opensourcephysics_cabrillo_tracker_PointMass',  function (booster) {
this.modelBooster.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(booster);
});

Clazz.newMeth(C$, 'isBoostedBy$org_opensourcephysics_cabrillo_tracker_PointMass',  function (target) {
if (this.modelBooster == null  || this.modelBooster.booster == null  ) return false;
if (this.modelBooster.booster === target ) return true;
if (Clazz.instanceOf(this.modelBooster.booster, "org.opensourcephysics.cabrillo.tracker.DynamicParticle")) {
var dp=this.modelBooster.booster;
return dp.isBoostedBy$org_opensourcephysics_cabrillo_tracker_PointMass(target);
}return false;
});

Clazz.newMeth(C$, 'boost$',  function () {
if (this.modelBooster == null  || this.modelBooster.booster == null  ) return;
var state=this.getBoostState$org_opensourcephysics_cabrillo_tracker_PointMass$I(this.modelBooster.booster, this.getStartFrame$());
if (state == null ) return;
var params=this.getInitEditor$().getParameters$();
var boostVars=this.getBoostVars$();
for (var i=0; i < params.length; i++) {
var param=params[i];
var name=param.getName$();
for (var j=0; j < 4; j++) {
if (name.equals$O(boostVars[j])) {
var value=state[j];
if (!Double.isNaN$D(value)) {
if (this.cellNumberField == null ) this.cellNumberField=Clazz.new_($I$(17,1).c$$I,[0]);
this.cellNumberField.setFormatFor$D(value);
var val=this.cellNumberField.format$D(value);
var newParam=params[i]=Clazz.new_($I$(13,1).c$$S$S,[name, val]);
newParam.setDescription$S(param.getDescription$());
newParam.setNameEditable$Z(false);
}break;
}}
}
this.getInitEditor$().setParameters$org_opensourcephysics_tools_ParameterA(params);
if (this.system != null ) {
this.system.refreshSystemParameters$();
this.system.setLastValidFrame$I(-1);
this.system.refreshSteps$S("DP boost");
} else {
this.reset$();
}this.repaint$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(18,1));
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(null);
this.modelBooster=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.cartVars=Clazz.array(String, -1, ["x", "vx", "y", "vy", "t"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DynamicParticle, "ModelBooster", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
},1);

C$.$fields$=[['Z',['adjusting'],'O',['booster','org.opensourcephysics.cabrillo.tracker.PointMass']]]

Clazz.newMeth(C$, 'setBooster$org_opensourcephysics_cabrillo_tracker_PointMass',  function (pm) {
if (this.booster != null ) {
this.booster.removeStepListener$java_beans_PropertyChangeListener(this);
}this.booster=pm;
if (this.booster != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicParticle'].boost$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicParticle'], []);
this.booster.addStepListener$java_beans_PropertyChangeListener(this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.booster == null ) return;
var name=e.getPropertyName$();
if (name.equals$O("adjusting")) {
this.adjusting=(e.getNewValue$()).valueOf();
name="steps";
}if (this.adjusting) {
return;
}switch (name) {
case "step":
case "data":
break;
case "steps":
if (Clazz.instanceOf(this.booster, "org.opensourcephysics.cabrillo.tracker.ParticleModel")) {
var data=this.booster.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicParticle'].tp);
this.booster.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(data, this.b$['org.opensourcephysics.cabrillo.tracker.DynamicParticle'].tp);
}break;
default:
return;
}
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicParticle'].boost$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicParticle'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DynamicParticle, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
if (p.system != null ) control.setValue$S$Z("in_system", true);
if (p.modelBooster != null  && p.modelBooster.booster != null  ) {
control.setValue$S$O("booster", p.modelBooster.booster.getName$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
try {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
p.inSystem=control.getBoolean$S("in_system");
p.boosterName=control.getString$S("booster");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
var solver=control.getString$S("solver");
if (solver != null ) {
try {
var solverClass=Clazz.forName(solver);
p.setSolver$Class(solverClass);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"Exception")){
} else {
throw ex2;
}
}
}var t=control.getString$S("t0");
p.getInitEditor$().setExpression$S$S$Z("t", t, false);
var x=control.getString$S("x");
p.getInitEditor$().setExpression$S$S$Z("x", x, false);
var y=control.getString$S("y");
p.getInitEditor$().setExpression$S$S$Z("y", y, false);
var vx=control.getString$S("vx");
p.getInitEditor$().setExpression$S$S$Z("vx", vx, false);
var vy=control.getString$S("vy");
p.getInitEditor$().setExpression$S$S$Z("vy", vy, false);
var fx=control.getString$S("force x");
p.getFunctionEditor$().setExpression$S$S$Z("fx", fx, false);
var fy=control.getString$S("force y");
p.getFunctionEditor$().setExpression$S$S$Z("fy", fy, false);
p.reset$();
} else {
throw ex;
}
}
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
