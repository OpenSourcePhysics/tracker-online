(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "Verlet", null, 'org.opensourcephysics.numerics.AbstractODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rateCounter=-1;
},1);

C$.$fields$=[['I',['rateCounter'],'O',['rate1','double[]','+rate2']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.rate1=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate2=Clazz.array(Double.TYPE, [this.numEqn]);
this.rateCounter=-1;
});

Clazz.newMeth(C$, 'getRateCounter$',  function () {
return this.rateCounter;
});

Clazz.newMeth(C$, 'step$',  function () {
var state=this.ode.getState$();
if (state.length != this.numEqn) {
this.initialize$D(this.stepSize);
}this.rateCounter=0;
this.ode.getRate$DA$DA(state, this.rate1);
var dt2=this.stepSize * this.stepSize;
for (var i=0; i < this.numEqn - 1; i+=2) {
state[i]+=this.stepSize * this.rate1[i] + dt2 * this.rate1[i + 1] / 2;
}
this.rateCounter=1;
this.ode.getRate$DA$DA(state, this.rate2);
this.rateCounter=2;
for (var i=1; i < this.numEqn; i+=2) {
state[i]+=this.stepSize * (this.rate1[i] + this.rate2[i]) / 2.0;
}
if (this.numEqn % 2 == 1) {
state[this.numEqn - 1]+=this.stepSize * this.rate1[this.numEqn - 1];
}return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
