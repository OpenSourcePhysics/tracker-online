(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.PlotFrame','csm.ch03.Projectile','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProjectileApp", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.plotFrame=Clazz.new_($I$(1,1).c$$S$S$S,["Time", "x,y", "Position versus time"]);
this.projectile=Clazz.new_($I$(2,1));
this.animationFrame=Clazz.new_($I$(1,1).c$$S$S$S,["x", "y", "Trajectory"]);
},1);

C$.$fields$=[['O',['plotFrame','org.opensourcephysics.frames.PlotFrame','projectile','csm.ch03.Projectile','animationFrame','org.opensourcephysics.frames.PlotFrame']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.animationFrame.addDrawable$org_opensourcephysics_display_Drawable(this.projectile);
this.plotFrame.setXYColumnNames$I$S$S(0, "t", "x");
this.plotFrame.setXYColumnNames$I$S$S(1, "t", "y");
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
var dt=this.$control.getDouble$S("dt");
var x=this.$control.getDouble$S("initial x");
var vx=this.$control.getDouble$S("initial vx");
var y=this.$control.getDouble$S("initial y");
var vy=this.$control.getDouble$S("initial vy");
this.projectile.setState$D$D$D$D(x, vx, y, vy);
this.projectile.setStepSize$D(dt);
var size=(vx * vx + vy * vy) / 10;
this.animationFrame.setPreferredMinMax$D$D$D$D(-1, size, -1, size);
});

Clazz.newMeth(C$, 'doStep$',  function () {
this.plotFrame.append$I$D$D(0, this.projectile.state[4], this.projectile.state[0]);
this.plotFrame.append$I$D$D(1, this.projectile.state[4], this.projectile.state[2]);
this.animationFrame.append$I$D$D(0, this.projectile.state[0], this.projectile.state[2]);
this.projectile.step$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.$control.setValue$S$I("initial x", 0);
this.$control.setValue$S$I("initial vx", 10);
this.$control.setValue$S$I("initial y", 0);
this.$control.setValue$S$I("initial vy", 10);
this.$control.setValue$S$D("dt", 0.01);
this.enableStepsPerDisplay$Z(true);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(3,"createApp$org_opensourcephysics_controls_Simulation",[Clazz.new_(C$)]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
