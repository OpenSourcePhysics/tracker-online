(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "CashKarp45", null, null, 'org.opensourcephysics.numerics.ODEAdaptiveSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.error_code=0;
this.stepSize=0.01;
this.numEqn=0;
this.tol=1.0E-6;
this.enableExceptions=false;
},1);

C$.$fields$=[['Z',['enableExceptions'],'D',['stepSize','truncErr','tol'],'I',['error_code','numEqn'],'O',['+temp_state','k','double[][]','ode','org.opensourcephysics.numerics.ODE']]
,['O',['a','double[][]','b5','double[]','+er']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (_ode) {
;C$.$init$.apply(this);
this.ode=_ode;
this.initialize$D(this.stepSize);
}, 1);

Clazz.newMeth(C$, 'initialize$D',  function (_stepSize) {
this.stepSize=_stepSize;
var state=this.ode.getState$();
if (state == null ) {
return;
}if (this.numEqn != state.length) {
this.numEqn=state.length;
this.temp_state=Clazz.array(Double.TYPE, [this.numEqn]);
this.k=Clazz.array(Double.TYPE, [6, this.numEqn]);
}});

Clazz.newMeth(C$, 'step$',  function () {
this.error_code=0;
var iterations=10;
var currentStep=this.stepSize;
var error=0;
var state=this.ode.getState$();
this.ode.getRate$DA$DA(state, this.k[0]);
do {
--iterations;
currentStep=this.stepSize;
for (var s=1; s < 6; s++) {
for (var i=0; i < this.numEqn; i++) {
this.temp_state[i]=state[i];
for (var j=0; j < s; j++) {
this.temp_state[i]=this.temp_state[i] + this.stepSize * C$.a[s - 1][j] * this.k[j][i] ;
}
}
this.ode.getRate$DA$DA(this.temp_state, this.k[s]);
}
error=0;
for (var i=0; i < this.numEqn; i++) {
this.truncErr=0;
for (var s=0; s < 6; s++) {
this.truncErr=this.truncErr + this.stepSize * C$.er[s] * this.k[s][i] ;
}
error=Math.max(error, Math.abs(this.truncErr));
}
if (error <= 1.4E-45 ) {
error=this.tol / 100000.0;
}if (error > this.tol ) {
var fac=0.9 * Math.pow(error / this.tol, -0.25);
this.stepSize=this.stepSize * Math.max(fac, 0.1);
} else if (error < this.tol / 10.0 ) {
var fac=0.9 * Math.pow(error / this.tol, -0.2);
if (fac > 1 ) {
this.stepSize=this.stepSize * Math.min(fac, 10);
}}} while ((error > this.tol ) && (iterations > 0) );
for (var i=0; i < this.numEqn; i++) {
for (var s=0; s < 6; s++) {
state[i]+=currentStep * C$.b5[s] * this.k[s][i] ;
}
}
if (iterations == 0) {
this.error_code=1;
if (this.enableExceptions) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ODESolverException').c$$S,["CashKarp45 ODE solver did not converge."]);
}}return currentStep;
});

Clazz.newMeth(C$, 'enableRuntimeExpecptions$Z',  function (enable) {
this.enableExceptions=enable;
});

Clazz.newMeth(C$, 'setStepSize$D',  function (stepSize) {
this.stepSize=stepSize;
});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.stepSize;
});

Clazz.newMeth(C$, 'setTolerance$D',  function (_tol) {
this.tol=Math.abs(_tol);
if (this.tol < 1.0E-12 ) {
var err_msg="Error: CashKarp ODE solver tolerance cannot be smaller than 1.0e-12.";
if (this.enableExceptions) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ODESolverException').c$$S,[err_msg]);
}System.err.println$S(err_msg);
}});

Clazz.newMeth(C$, 'getTolerance$',  function () {
return this.tol;
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.error_code;
});

C$.$static$=function(){C$.$static$=0;
C$.a=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [0.2]), Clazz.array(Double.TYPE, -1, [0.075, 0.225]), Clazz.array(Double.TYPE, -1, [0.3, -0.9, 1.2]), Clazz.array(Double.TYPE, -1, [-0.2037037037037037, 2.5, -2.5925925925925926, 1.2962962962962963]), Clazz.array(Double.TYPE, -1, [0.029495804398148147, 0.341796875, 0.041594328703703706, 0.40034541377314814, 0.061767578125])]);
C$.b5=Clazz.array(Double.TYPE, -1, [0.09788359788359788, 0.0, 0.4025764895330113, 0.21043771043771045, 0.0, 0.2891022021456804]);
C$.er=Clazz.array(Double.TYPE, -1, [0.004293774801587302, 0.0, -0.018668586093857832, 0.03415502683080808, 0.019321986607142856, -0.03910220214568041]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
