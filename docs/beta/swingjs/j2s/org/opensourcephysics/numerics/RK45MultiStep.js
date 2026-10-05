(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "RK45MultiStep", null, 'org.opensourcephysics.numerics.RK45');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedStepSize=0.1;
this.maxIterations=200;
},1);

C$.$fields$=[['D',['fixedStepSize'],'I',['maxIterations']]
,['I',['maxMessages']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (_ode) {
;C$.superclazz.c$$org_opensourcephysics_numerics_ODE.apply(this,[_ode]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'step$',  function () {
this.error_code=0;
if (this.fixedStepSize > 0 ) {
return this.fixedStepSize - p$1.plus.apply(this, []);
}return this.fixedStepSize - p$1.minus.apply(this, []);
});

Clazz.newMeth(C$, 'setMaxIterations$I',  function (n) {
this.maxIterations=Math.max(1, n);
});

Clazz.newMeth(C$, 'plus',  function () {
var remainder=this.fixedStepSize;
if ((C$.superclazz.prototype.getStepSize$.apply(this, []) <= 0 ) || (C$.superclazz.prototype.getStepSize$.apply(this, []) > this.fixedStepSize ) || (this.fixedStepSize - C$.superclazz.prototype.getStepSize$.apply(this, []) == this.fixedStepSize )  ) {
C$.superclazz.prototype.setStepSize$D.apply(this, [this.fixedStepSize]);
}var counter=0;
while (remainder > this.tol * this.fixedStepSize ){
++counter;
var oldRemainder=remainder;
if (remainder < C$.superclazz.prototype.getStepSize$.apply(this, []) ) {
var tempStep=C$.superclazz.prototype.getStepSize$.apply(this, []);
C$.superclazz.prototype.setStepSize$D.apply(this, [remainder]);
var delta=C$.superclazz.prototype.step$.apply(this, []);
remainder-=delta;
C$.superclazz.prototype.setStepSize$D.apply(this, [tempStep]);
} else {
remainder-=C$.superclazz.prototype.step$.apply(this, []);
}if ((this.error_code != 0) || (Math.abs(oldRemainder - remainder) <= 1.4E-45 ) || (this.tol * this.fixedStepSize / 10.0 > C$.superclazz.prototype.getStepSize$.apply(this, []) ) || (counter > this.maxIterations)  ) {
this.error_code=1;
if (this.enableExceptions) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ODESolverException').c$$S,["RK45 ODE solver did not converge."]);
}--C$.maxMessages;
System.err.println$S("Warning: RK45MultiStep did not converge. Remainder=" + new Double(remainder).toString());
if (C$.maxMessages == 0) {
System.err.println$S("RK45 ODE solver did not converge. Further warnings suppressed.");
}break;
}}
return remainder;
}, p$1);

Clazz.newMeth(C$, 'minus',  function () {
var remainder=this.fixedStepSize;
if ((C$.superclazz.prototype.getStepSize$.apply(this, []) >= 0 ) || (C$.superclazz.prototype.getStepSize$.apply(this, []) < this.fixedStepSize ) || (this.fixedStepSize - C$.superclazz.prototype.getStepSize$.apply(this, []) == this.fixedStepSize )  ) {
C$.superclazz.prototype.setStepSize$D.apply(this, [this.fixedStepSize]);
}var counter=0;
while (remainder < this.tol * this.fixedStepSize ){
++counter;
var oldRemainder=remainder;
if (remainder > C$.superclazz.prototype.getStepSize$.apply(this, []) ) {
var tempStep=C$.superclazz.prototype.getStepSize$.apply(this, []);
C$.superclazz.prototype.setStepSize$D.apply(this, [remainder]);
var delta=C$.superclazz.prototype.step$.apply(this, []);
remainder-=delta;
C$.superclazz.prototype.setStepSize$D.apply(this, [tempStep]);
} else {
remainder-=C$.superclazz.prototype.step$.apply(this, []);
}if ((this.error_code != 0) || (Math.abs(oldRemainder - remainder) <= 1.4E-45 ) || (this.tol * this.fixedStepSize / 10.0 < C$.superclazz.prototype.getStepSize$.apply(this, []) ) || (counter > this.maxIterations)  ) {
this.error_code=1;
if (this.enableExceptions) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ODESolverException').c$$S,["RK45 ODE solver did not converge."]);
}if (C$.maxMessages <= 0) {
break;
}--C$.maxMessages;
System.err.println$S("Warning: RK45MultiStep did not converge. Remainder=" + new Double(remainder).toString());
if (C$.maxMessages == 0) {
System.err.println$S("Further warnings surppressed.");
}break;
}}
return remainder;
}, p$1);

Clazz.newMeth(C$, 'setMaximumNumberOfErrorMessages$I',  function (n) {
C$.maxMessages=n;
});

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
this.fixedStepSize=stepSize;
C$.superclazz.prototype.initialize$D.apply(this, [stepSize / 2]);
});

Clazz.newMeth(C$, 'setStepSize$D',  function (stepSize) {
C$.maxMessages=4;
this.fixedStepSize=stepSize;
if (stepSize < 0 ) {
C$.superclazz.prototype.setStepSize$D.apply(this, [Math.max(-Math.abs(C$.superclazz.prototype.getStepSize$.apply(this, [])), stepSize)]);
} else {
C$.superclazz.prototype.setStepSize$D.apply(this, [Math.min(C$.superclazz.prototype.getStepSize$.apply(this, []), stepSize)]);
}C$.superclazz.prototype.setStepSize$D.apply(this, [stepSize]);
});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.fixedStepSize;
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.error_code;
});

C$.$static$=function(){C$.$static$=0;
C$.maxMessages=3;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
