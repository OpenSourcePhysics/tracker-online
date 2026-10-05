(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.AnalyticParticle','org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.ParticleModel',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.cabrillo.tracker.AnalyticFunctionPanel','org.opensourcephysics.tools.UserFunction','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.PositionStep',['org.opensourcephysics.cabrillo.tracker.AnalyticParticle','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnalyticParticle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.ParticleModel');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['functions','org.opensourcephysics.tools.UserFunction[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.$points=Clazz.array($I$(4), -1, [Clazz.new_($I$(4,1))]);
}, 1);

Clazz.newMeth(C$, 'initializeFunctionPanel$',  function () {
this.functionEditor=Clazz.new_($I$(5,1));
this.functionPanel=Clazz.new_($I$(6,1).c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_AnalyticParticle,[this.functionEditor, this]);
this.createMassAndTimeParameters$();
var t=Clazz.array(String, -1, ["t"]);
var ff=Clazz.array($I$(7), [2]);
ff[0]=Clazz.new_(["x", t, $I$(8).getString$S("AnalyticParticle.PositionFunction.X.Description")],$I$(7,1).c$$S$SA$S);
ff[1]=Clazz.new_(["y", t, $I$(8).getString$S("AnalyticParticle.PositionFunction.Y.Description")],$I$(7,1).c$$S$SA$S);
this.functionEditor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(ff);
});

Clazz.newMeth(C$, 'getNextTracePositions$',  function () {
var x=this.functions[0].evaluate$D(this.time);
var y=this.functions[1].evaluate$D(this.time);
this.$points[this.myPoint].setLocation$D$D(x, y);
return true;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.t0=this.getInitialValues$()[0];
this.functions=this.getFunctionEditor$().getMainFunctions$();
if (this.tp != null ) {
this.erase$();
this.dt=this.tp.getPlayer$().getMeanStepDuration$() / (1000 * $I$(3).tracePtsPerStep);
var clip=this.tp.getPlayer$().getVideoClip$();
var end=Math.min(this.getEndFrame$(), clip.getLastFrameNumber$());
while (end > this.getStartFrame$() && !clip.includesFrame$I(end) ){
--end;
}
if (end == this.getStartFrame$() && !clip.includesFrame$I(this.getStartFrame$()) ) {
this.steps.setLength$I(1);
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(0, null);
for (var i=0; i < this.tp.andWorld.size$(); i++) {
var panelID=this.tp.andWorld.get$I(i);
this.getVArray$Integer(panelID).setLength$I(0);
this.getAArray$Integer(panelID).setLength$I(0);
}
this.traceX=Clazz.array(Double.TYPE, [0]);
this.traceY=Clazz.array(Double.TYPE, [0]);
this.fireStepsChanged$();
return;
}var firstFrameInClip=this.getStartFrame$();
while (firstFrameInClip < end && !clip.includesFrame$I(firstFrameInClip) ){
++firstFrameInClip;
}
this.steps.setLength$I(firstFrameInClip + 1);
var step=this.getStep$I(firstFrameInClip);
for (var i=0; i < this.steps.array.length; i++) {
if (i < firstFrameInClip) this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(i, null);
 else if (step == null ) {
step=Clazz.new_($I$(9,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[this, firstFrameInClip, 0, 0]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(firstFrameInClip, step);
}}
this.getVArray$Integer(this.tp.getID$()).setLength$I(0);
this.getAArray$Integer(this.tp.getID$()).setLength$I(0);
var coords=this.tp.getCoords$();
var useDefault=this.isUseDefaultReferenceFrame$();
while (useDefault && Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") ){
coords=(coords).getCoords$();
}
var transform=coords.getToImageTransform$I(firstFrameInClip);
var functions=this.getFunctionEditor$().getMainFunctions$();
this.time=this.tp.getPlayer$().getFrameTime$I(firstFrameInClip) / 1000;
var x=functions[0].evaluate$D(this.time);
var y=functions[1].evaluate$D(this.time);
var point=this.$points[this.myPoint];
point.setLocation$D$D(x, y);
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(point, point);
this.traceX=Clazz.array(Double.TYPE, -1, [point.x]);
this.traceY=Clazz.array(Double.TYPE, -1, [point.y]);
step.getPosition$().setPosition$java_awt_geom_Point2D_Double(point);
this.setLastValidFrame$I(firstFrameInClip);
this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(firstFrameInClip));
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnalyticParticle, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.cabrillo.tracker.ParticleModel','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
try {
$I$(2,"getLoader$Class",[Clazz.getClass($I$(3))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
var p=obj;
var t=control.getString$S("t0");
p.getInitEditor$().setExpression$S$S$Z("t", t, false);
var x=control.getString$S("x");
p.getFunctionEditor$().setExpression$S$S$Z("x", x, false);
var y=control.getString$S("y");
p.getFunctionEditor$().setExpression$S$S$Z("y", y, false);
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
