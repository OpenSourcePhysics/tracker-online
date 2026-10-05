(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "EulerRichardson", null, 'org.opensourcephysics.numerics.AbstractODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rate','double[]','+midstate']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.rate=Clazz.array(Double.TYPE, [this.numEqn]);
this.midstate=Clazz.array(Double.TYPE, [this.numEqn]);
});

Clazz.newMeth(C$, 'step$',  function () {
var state=this.ode.getState$();
this.ode.getRate$DA$DA(state, this.rate);
var dt2=this.stepSize / 2;
for (var i=0; i < this.numEqn; i++) {
this.midstate[i]=state[i] + this.rate[i] * dt2;
}
this.ode.getRate$DA$DA(this.midstate, this.rate);
for (var i=0; i < this.numEqn; i++) {
state[i]=state[i] + this.stepSize * this.rate[i];
}
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
