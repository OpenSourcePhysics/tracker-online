(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'davidson.gr.ClassicalTrajectory','org.opensourcephysics.numerics.RK45MultiStep','org.opensourcephysics.controls.OSPTableInspector','davidson.gr.Trajectory',['davidson.gr.ClassicalTrajectory','.ClassicalTrajectoryLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClassicalTrajectory", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'davidson.gr.AbstractTrajectory');
C$.$classes$=[['ClassicalTrajectoryLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.state=Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0, 1.0, 0.0]);
this.stateInitial=Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0, 1.0, 0.0]);
this.ode_solver=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_ODE,[this]);
this.pixRadius=4;
this.setXY$D$D(1, 0);
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
var r=state[0];
rate[0]=state[1];
rate[1]=r * state[3] * state[3]  - 1.0 / r / r ;
rate[2]=state[3];
rate[3]=-2 * state[3] * state[1]  / r;
rate[4]=1;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
this.state[0]=Math.sqrt(x * x + y * y);
this.state[2]=Math.atan2(y, x);
this.initialize$DA(this.state);
});

Clazz.newMeth(C$, 'initialize$DA',  function (newState) {
if (newState !== this.state ) System.arraycopy$O$I$O$I$I(newState, 0, this.state, 0, newState.length);
System.arraycopy$O$I$O$I$I(newState, 0, this.stateInitial, 0, newState.length);
this.x=this.state[0] * Math.cos(this.state[2]);
this.y=this.state[0] * Math.sin(this.state[2]);
this.trail.clear$();
this.trail.moveToPoint$D$D(this.x, this.y);
});

Clazz.newMeth(C$, 'resetInitial$',  function () {
this.initialize$DA(this.stateInitial);
});

Clazz.newMeth(C$, 'edit$',  function () {
var inspector=Clazz.new_($I$(3,1).c$$Z$Z,[true, true]);
var control=inspector.getControl$();
inspector.setTitle$S("Classical Particle");
inspector.setDefaultCloseOperation$I(2);
var r=1;
var phi=0;
control.setValue$S$D("r", r);
control.setValue$S$D("dr/dt", phi);
control.setValue$S$I($I$(4).PHI, 0);
control.setValue$S$I($I$(4).PHIRATE, 1);
control.setValue$S$Z("draggable state", true);
control.setValue$S$I("track points", 0);
control.setValue$S$O("label", "");
this.x=r * Math.cos(phi);
this.y=r * Math.sin(phi);
inspector.setSize$I$I(160, 170);
return inspector;
});

Clazz.newMeth(C$, 'stepTime$',  function () {
this.ode_solver.step$();
this.x=this.state[0] * Math.cos(this.state[2]);
this.y=this.state[0] * Math.sin(this.state[2]);
this.trail.addPoint$D$D(this.x, this.y);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.trail.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassicalTrajectory, "ClassicalTrajectoryLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['davidson.gr.AbstractTrajectory','.AbstractTrajectoryLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
