(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'csm.ch03.FallingParticleODE','org.opensourcephysics.numerics.Euler','org.opensourcephysics.controls.CalculationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FallingParticleODEApp", null, 'org.opensourcephysics.controls.AbstractCalculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'calculate$',  function () {
var y0=this.control.getDouble$S("Initial y");
var v0=this.control.getDouble$S("Initial v");
var ball=Clazz.new_($I$(1,1).c$$D$D,[y0, v0]);
var solver=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_ODE,[ball]);
solver.setStepSize$D(this.control.getDouble$S("dt"));
while (ball.state[0] > 0 ){
solver.step$();
}
this.control.println$S("final time = " + new Double(ball.state[2]).toString());
this.control.println$S("y = " + new Double(ball.state[0]).toString() + " v = " + new Double(ball.state[1]).toString() );
});

Clazz.newMeth(C$, 'reset$',  function () {
this.control.setValue$S$I("Initial y", 10);
this.control.setValue$S$I("Initial v", 0);
this.control.setValue$S$D("dt", 0.01);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(3,"createApp$org_opensourcephysics_controls_Calculation",[Clazz.new_(C$)]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
