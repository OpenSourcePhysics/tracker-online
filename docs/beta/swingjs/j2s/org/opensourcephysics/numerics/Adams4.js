(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "Adams4", null, 'org.opensourcephysics.numerics.RK4');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
},1);

C$.$fields$=[['I',['counter'],'O',['fn','double[]','+fn1','+fn2','+fn3','+temp_state','+temp_rate']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.fn=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn1=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn2=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn3=Clazz.array(Double.TYPE, [this.numEqn]);
this.temp_state=Clazz.array(Double.TYPE, [this.numEqn]);
this.temp_rate=Clazz.array(Double.TYPE, [this.numEqn]);
this.counter=0;
});

Clazz.newMeth(C$, 'step$',  function () {
var state=this.ode.getState$();
if (state == null ) {
return this.stepSize;
}if (state.length != this.numEqn) {
this.initialize$D(this.stepSize);
}this.ode.getRate$DA$DA(state, this.fn);
if (this.counter < 3) {
this.stepSize=C$.superclazz.prototype.step$.apply(this, []);
++this.counter;
} else {
for (var i=0; i < this.numEqn; i++) {
this.temp_state[i]=state[i] + this.stepSize * (55 * this.fn[i] - 59 * this.fn1[i] + 37 * this.fn2[i] - 9 * this.fn3[i]) / 24;
}
this.ode.getRate$DA$DA(this.temp_state, this.temp_rate);
for (var i=0; i < this.numEqn; i++) {
state[i]=state[i] + this.stepSize * (9 * this.temp_rate[i] + 19 * this.fn[i] - 5 * this.fn1[i] + this.fn2[i]) / 24;
}
}System.arraycopy$O$I$O$I$I(this.fn2, 0, this.fn3, 0, this.numEqn);
System.arraycopy$O$I$O$I$I(this.fn1, 0, this.fn2, 0, this.numEqn);
System.arraycopy$O$I$O$I$I(this.fn, 0, this.fn1, 0, this.numEqn);
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
