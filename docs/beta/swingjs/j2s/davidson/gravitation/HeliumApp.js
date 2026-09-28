(function(){var P$=Clazz.newPackage("davidson.gravitation"),I$=[[0,'org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DrawingFrame','davidson.gravitation.Helium','org.opensourcephysics.controls.AnimationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HeliumApp", null, 'org.opensourcephysics.controls.AbstractAnimation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.plottingPanel=Clazz.new_($I$(1,1).c$$S$S$S,["x", "y", "Planetary Orbits"]);
this.drawingFrame=Clazz.new_($I$(2,1).c$$S$org_opensourcephysics_display_DrawingPanel,["Planet App", this.plottingPanel]);
this.trajectory=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['plottingPanel','org.opensourcephysics.display.PlottingPanel','drawingFrame','org.opensourcephysics.display.DrawingFrame','trajectory','davidson.gravitation.Helium']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.trajectory);
this.plottingPanel.setSquareAspect$Z(true);
this.drawingFrame.setSize$I$I(450, 450);
this.drawingFrame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'doStep$',  function () {
this.trajectory.stepTime$();
this.plottingPanel.setMessage$S("t=" + this.sciFormat.format$D(this.trajectory.state[4]));
});

Clazz.newMeth(C$, 'resetAnimation$',  function () {
C$.superclazz.prototype.resetAnimation$.apply(this, []);
this.control.setValue$S$I("x1_init", 3);
this.control.setValue$S$D("vy1_init", 0.4);
this.control.setValue$S$I("x2_init", 1);
this.control.setValue$S$I("vy2_init", -1);
this.control.setValue$S$D("dt", 0.2);
this.initializeAnimation$();
});

Clazz.newMeth(C$, 'initializeAnimation$',  function () {
C$.superclazz.prototype.initializeAnimation$.apply(this, []);
var x1=this.control.getDouble$S("x1_init");
var vy1=this.control.getDouble$S("vy1_init");
var x2=this.control.getDouble$S("x2_init");
var vy2=this.control.getDouble$S("vy2_init");
this.trajectory.ode_solver.setStepSize$D(this.control.getDouble$S("dt"));
this.trajectory.initialize$D$D$D$D(x1, vy1, x2, vy2);
this.plottingPanel.setPreferredMinMax$D$D$D$D(-4, 4, -4, 4);
this.plottingPanel.repaint$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(4,"createApp$org_opensourcephysics_controls_Animation$SA",[Clazz.new_(C$), args]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
