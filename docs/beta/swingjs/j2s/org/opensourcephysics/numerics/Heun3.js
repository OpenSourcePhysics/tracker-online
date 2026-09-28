(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "Heun3", null, 'org.opensourcephysics.numerics.AbstractODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rate1','double[]','+rate2','+rate3','+estimated_state']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.rate1=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate2=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate3=Clazz.array(Double.TYPE, [this.numEqn]);
this.estimated_state=Clazz.array(Double.TYPE, [this.numEqn]);
});

Clazz.newMeth(C$, 'step$',  function () {
var state=this.ode.getState$();
if (state.length != this.numEqn) {
this.initialize$D(this.stepSize);
}this.ode.getRate$DA$DA(state, this.rate1);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * this.rate1[i] / 3;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate2);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + 2 * this.stepSize * this.rate2[i]  / 3;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate3);
for (var i=0; i < this.numEqn; i++) {
state[i]=state[i] + this.stepSize * (this.rate1[i] + 3.0 * this.rate3[i]) / 4.0;
}
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
