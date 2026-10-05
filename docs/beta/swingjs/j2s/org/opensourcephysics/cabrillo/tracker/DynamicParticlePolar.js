(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.ParticleModel','org.opensourcephysics.cabrillo.tracker.DynamicParticlePolar','org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.cabrillo.tracker.DynamicFunctionPanel','org.opensourcephysics.tools.UserFunction','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.Parameter',['org.opensourcephysics.cabrillo.tracker.DynamicParticlePolar','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DynamicParticlePolar", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.DynamicParticle');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['polarVars','String[]']]]

Clazz.newMeth(C$, 'getBoostVars$',  function () {
return C$.polarVars;
});

Clazz.newMeth(C$, 'getInitialState$',  function () {
var polar=this.getInitialValues$();
var cos=Math.cos(polar[2]);
var sin=Math.sin(polar[2]);
if (Math.abs(cos) < 1.0E-7 ) cos=0;
if (Math.abs(sin) < 1.0E-7 ) sin=0;
var romega=polar[1] * polar[4];
this.initialState[0]=polar[1] * cos;
this.initialState[1]=polar[3] * cos - romega * sin;
this.initialState[2]=polar[1] * sin;
this.initialState[3]=polar[3] * sin + romega * cos;
this.initialState[4]=polar[0];
return this.initialState;
});

Clazz.newMeth(C$, 'getXYForces$DA$DA',  function (cartesianState, ret) {
var f=this.getFunctionEditor$().getMainFunctions$();
ret=this.getPolarState$DA$DA(cartesianState, ret);
var fr=f[0].evaluate$DA(ret);
var ftheta=f[1].evaluate$DA(ret);
var cos=Math.cos(ret[2]);
var sin=Math.sin(ret[2]);
ret[0]=(fr * cos - ftheta * sin);
ret[1]=(fr * sin + ftheta * cos);
});

Clazz.newMeth(C$, 'initializeFunctionPanel$',  function () {
this.functionEditor=Clazz.new_($I$(5,1));
this.functionPanel=Clazz.new_($I$(6,1).c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_DynamicParticle,[this.functionEditor, this]);
var uf=Clazz.array($I$(7), [2]);
uf[0]=Clazz.new_(["fr", C$.polarVars, $I$(8).getString$S("DynamicParticle.ForceFunction.R.Description")],$I$(7,1).c$$S$SA$S);
uf[1]=Clazz.new_(["f" + $I$(4).THETA, C$.polarVars, $I$(8).getString$S("DynamicParticle.ForceFunction.Theta.Description")],$I$(7,1).c$$S$SA$S);
this.functionEditor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(uf);
this.createMassAndTimeParameters$();
});

Clazz.newMeth(C$, 'initializeInitEditor$',  function () {
var t=this.getInitEditor$().getObject$S("t");
var r=Clazz.new_($I$(9,1).c$$S$S,["r", "0.0"]);
r.setNameEditable$Z(false);
r.setDescription$S($I$(8).getString$S("DynamicParticle.Parameter.InitialR.Description"));
var th=Clazz.new_([$I$(4).THETA, "0.0"],$I$(9,1).c$$S$S);
th.setNameEditable$Z(false);
th.setDescription$S($I$(8).getString$S("DynamicParticle.Parameter.InitialTheta.Description"));
var v=Clazz.new_($I$(9,1).c$$S$S,["vr", "0.0"]);
v.setNameEditable$Z(false);
v.setDescription$S($I$(8).getString$S("DynamicParticle.Parameter.InitialVelocityR.Description"));
var w=Clazz.new_([$I$(4).OMEGA, "0.0"],$I$(9,1).c$$S$S);
w.setNameEditable$Z(false);
w.setDescription$S($I$(8).getString$S("DynamicParticle.Parameter.InitialOmega.Description"));
this.getInitEditor$().setParameters$org_opensourcephysics_tools_ParameterA(Clazz.array($I$(9), -1, [t, r, th, v, w]));
});

Clazz.newMeth(C$, 'getPolarState$DA$DA',  function (state, ret) {
if (state == null ) return null;
var dx=state[0];
var dy=state[2];
var vx=state[1];
var vy=state[3];
var r=Math.sqrt(dx * dx + dy * dy);
var v=Math.sqrt(vx * vx + vy * vy);
var rang=Math.atan2(dy, dx);
var vang=Math.atan2(vy, vx);
var dang=vang - rang;
ret[0]=r;
ret[1]=r == 0  ? v : v * Math.cos(dang);
ret[2]=r == 0  ? vang : rang;
ret[3]=r == 0  ? 0 : v * Math.sin(dang) / r;
ret[4]=state[4];
return ret;
});

Clazz.newMeth(C$, 'getBoostState$org_opensourcephysics_cabrillo_tracker_PointMass$I',  function (target, frameNumber) {
return this.getPolarState$DA$DA(C$.superclazz.prototype.getBoostState$org_opensourcephysics_cabrillo_tracker_PointMass$I.apply(this, [target, frameNumber]), this.temp);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.polarVars=Clazz.array(String, -1, ["r", "vr", $I$(4).THETA, $I$(4).OMEGA, "t"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DynamicParticlePolar, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
if (p.system != null ) control.setValue$S$Z("in_system", true);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
p.inSystem=control.getBoolean$S("in_system");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
