(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "Butcher5", null, 'org.opensourcephysics.numerics.AbstractODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rate1','double[]','+rate2','+rate3','+rate4','+rate5','+rate6','+estimated_state']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.rate1=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate2=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate3=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate4=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate5=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate6=Clazz.array(Double.TYPE, [this.numEqn]);
this.estimated_state=Clazz.array(Double.TYPE, [this.numEqn]);
});

Clazz.newMeth(C$, 'step$',  function () {
var state=this.ode.getState$();
if (state == null ) {
return this.stepSize;
}if (state.length != this.numEqn) {
this.initialize$D(this.stepSize);
}this.ode.getRate$DA$DA(state, this.rate1);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * this.rate1[i] / 4;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate2);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (this.rate1[i] + this.rate2[i]) / 8;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate3);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (-0.5 * this.rate2[i] + this.rate3[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate4);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (3 * this.rate1[i] + 9 * this.rate4[i]) / 16;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate5);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (-3 * this.rate1[i] + 2 * this.rate2[i] + 12 * this.rate3[i] - 12 * this.rate4[i] + 8 * this.rate5[i]) / 7;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate6);
for (var i=0; i < this.numEqn; i++) {
state[i]=state[i] + this.stepSize * (7 * this.rate1[i] + 32 * this.rate3[i] + 12 * this.rate4[i] + 32 * this.rate5[i] + 7 * this.rate6[i]) / 90.0;
}
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
