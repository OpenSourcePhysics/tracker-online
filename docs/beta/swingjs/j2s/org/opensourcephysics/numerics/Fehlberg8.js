(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "Fehlberg8", null, 'org.opensourcephysics.numerics.AbstractODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rate1','double[]','+rate2','+rate3','+rate4','+rate5','+rate6','+rate7','+rate8','+rate9','+rate10','+rate11','+rate12','+rate13','+estimated_state']]]

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
this.rate7=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate8=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate9=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate10=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate11=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate12=Clazz.array(Double.TYPE, [this.numEqn]);
this.rate13=Clazz.array(Double.TYPE, [this.numEqn]);
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
this.estimated_state[i]=state[i] + this.stepSize * 2.0 / 27.0 * this.rate1[i];
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate2);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (this.rate1[i] + 3 * this.rate2[i]) / 36;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate3);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (this.rate1[i] + 3 * this.rate3[i]) / 24;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate4);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (0.4166666666666667 * this.rate1[i] - 1.5625 * this.rate3[i] + 1.5625 * this.rate4[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate5);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (this.rate1[i] + 5 * this.rate4[i] + 4 * this.rate5[i]) / 20;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate6);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (-25 * this.rate1[i] + 125 * this.rate4[i] - 260 * this.rate5[i] + 250 * this.rate6[i]) / 108;
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate7);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (0.10333333333333333 * this.rate1[i] + 0.27111111111111114 * this.rate5[i] - 0.2222222222222222 * this.rate6[i] + 0.014444444444444444 * this.rate7[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate8);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (2 * this.rate1[i] - 8.833333333333334 * this.rate4[i] + 15.644444444444444 * this.rate5[i] - 11.88888888888889 * this.rate6[i] + 0.7444444444444445 * this.rate7[i] + 3 * this.rate8[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate9);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (-0.8425925925925926 * this.rate1[i] + 0.21296296296296297 * this.rate4[i] - 7.229629629629629 * this.rate5[i] + 5.7592592592592595 * this.rate6[i] - 0.31666666666666665 * this.rate7[i] + 2.8333333333333335 * this.rate8[i] - this.rate9[i] / 12.0);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate10);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (0.5812195121951219 * this.rate1[i] - 2.0792682926829267 * this.rate4[i] + 4.3863414634146345 * this.rate5[i] - 3.6707317073170733 * this.rate6[i] + 0.5202439024390244 * this.rate7[i] + 0.5487804878048781 * this.rate8[i] + 0.27439024390243905 * this.rate9[i] + 0.43902439024390244 * this.rate10[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate11);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (0.014634146341463415 * this.rate1[i] - 0.14634146341463414 * this.rate6[i] - 0.014634146341463415 * this.rate7[i] - 0.07317073170731707 * this.rate8[i] + 0.07317073170731707 * this.rate9[i] + 0.14634146341463414 * this.rate10[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate12);
for (var i=0; i < this.numEqn; i++) {
this.estimated_state[i]=state[i] + this.stepSize * (-0.43341463414634146 * this.rate1[i] - 2.0792682926829267 * this.rate4[i] + 4.3863414634146345 * this.rate5[i] - 3.524390243902439 * this.rate6[i] + 0.5348780487804878 * this.rate7[i] + 0.6219512195121951 * this.rate8[i] + 0.20121951219512196 * this.rate9[i] + 0.2926829268292683 * this.rate10[i] + this.rate12[i]);
}
this.ode.getRate$DA$DA(this.estimated_state, this.rate13);
for (var i=0; i < this.numEqn; i++) {
state[i]=state[i] + this.stepSize * (0.3238095238095238 * this.rate6[i] + 0.2571428571428571 * this.rate7[i] + 0.2571428571428571 * this.rate8[i] + 0.03214285714285714 * this.rate9[i] + 0.03214285714285714 * this.rate10[i] + 0.04880952380952381 * this.rate12[i] + 0.04880952380952381 * this.rate13[i]);
}
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
