(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "Adams6", null, 'org.opensourcephysics.numerics.Fehlberg8');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
},1);

C$.$fields$=[['I',['counter'],'O',['fn','double[]','+fn1','+fn2','+fn3','+fn4','+fn5','+temp_state','+temp_rate']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.fn=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn1=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn2=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn3=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn4=Clazz.array(Double.TYPE, [this.numEqn]);
this.fn5=Clazz.array(Double.TYPE, [this.numEqn]);
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
if (this.counter < 5) {
this.stepSize=C$.superclazz.prototype.step$.apply(this, []);
++this.counter;
} else {
for (var i=0; i < this.numEqn; i++) {
this.temp_state[i]=state[i] + this.stepSize * (4277 * this.fn[i] - 7923 * this.fn1[i] + 9982 * this.fn2[i] - 7298 * this.fn3[i] + 2877 * this.fn4[i] - 475 * this.fn5[i]) / 720;
}
this.ode.getRate$DA$DA(this.temp_state, this.temp_rate);
for (var i=0; i < this.numEqn; i++) {
state[i]=state[i] + this.stepSize * (475 * this.temp_rate[i] + 1427 * this.fn[i] - 798 * this.fn1[i] + 482 * this.fn2[i] - 173 * this.fn3[i] + 27 * this.fn4[i]) / 1440;
}
}System.arraycopy$O$I$O$I$I(this.fn4, 0, this.fn5, 0, this.numEqn);
System.arraycopy$O$I$O$I$I(this.fn3, 0, this.fn4, 0, this.numEqn);
System.arraycopy$O$I$O$I$I(this.fn2, 0, this.fn3, 0, this.numEqn);
System.arraycopy$O$I$O$I$I(this.fn1, 0, this.fn2, 0, this.numEqn);
System.arraycopy$O$I$O$I$I(this.fn, 0, this.fn1, 0, this.numEqn);
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
