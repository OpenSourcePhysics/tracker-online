(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Verlet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LeapFrog", null, 'org.opensourcephysics.numerics.AbstractODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rate','double[]','+priorState','+currentState']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.superclazz.prototype.initialize$D.apply(this, [stepSize]);
this.rate=Clazz.array(Double.TYPE, [this.numEqn]);
this.priorState=Clazz.array(Double.TYPE, [this.numEqn]);
this.currentState=Clazz.array(Double.TYPE, [this.numEqn]);
this.estimatePreviousState$();
});

Clazz.newMeth(C$, 'setStepSize$D',  function (stepSize) {
this.initialize$D(stepSize);
});

Clazz.newMeth(C$, 'estimatePreviousState$',  function () {
var state=(this.ode == null ) ? null : this.ode.getState$();
if (state == null ) {
return;
}System.arraycopy$O$I$O$I$I(state, 0, this.currentState, 0, state.length);
var verlet=Clazz.new_($I$(1,1).c$$org_opensourcephysics_numerics_ODE,[this.ode]);
verlet.setStepSize$D(-this.stepSize);
verlet.step$();
System.arraycopy$O$I$O$I$I(state, 0, this.priorState, 0, state.length);
System.arraycopy$O$I$O$I$I(this.currentState, 0, state, 0, state.length);
verlet=null;
});

Clazz.newMeth(C$, 'step$',  function () {
var state=this.ode.getState$();
if (state.length != this.numEqn) {
this.initialize$D(this.stepSize);
}System.arraycopy$O$I$O$I$I(state, 0, this.currentState, 0, this.numEqn);
this.ode.getRate$DA$DA(state, this.rate);
var dtSquared=this.stepSize * this.stepSize;
var dt2=2 * this.stepSize;
for (var i=0; i < this.numEqn - 1; i+=2) {
state[i]+=state[i] - this.priorState[i] + dtSquared * this.rate[i + 1];
state[i + 1]=(state[i] - this.priorState[i]) / dt2 + this.rate[i + 1] * this.stepSize;
}
if (this.numEqn % 2 == 1) {
state[this.numEqn - 1]+=this.stepSize * this.rate[this.numEqn - 1];
}System.arraycopy$O$I$O$I$I(this.currentState, 0, this.priorState, 0, this.numEqn);
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
