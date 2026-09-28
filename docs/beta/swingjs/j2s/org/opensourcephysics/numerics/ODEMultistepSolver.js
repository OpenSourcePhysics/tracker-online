(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'org.opensourcephysics.numerics.DormandPrince45',['org.opensourcephysics.numerics.ODEMultistepSolver','.InternalODE'],'org.opensourcephysics.numerics.RK45']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ODEMultistepSolver", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.numerics.ODEAdaptiveSolver');
C$.$classes$=[['InternalODE',20]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.err_code=0;
this.maxIterations=200;
this.enableExceptions=false;
this.err_msg="";
this.fixedStepSize=0.1;
},1);

C$.$fields$=[['Z',['enableExceptions'],'D',['fixedStepSize'],'I',['err_code','maxIterations'],'S',['err_msg'],'O',['odeEngine','org.opensourcephysics.numerics.ODEAdaptiveSolver','internalODE','org.opensourcephysics.numerics.ODEMultistepSolver.InternalODE']]
,['I',['maxMessages']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.$init$.apply(this);
this.odeEngine=Clazz.new_([this.setODE$org_opensourcephysics_numerics_ODE(ode)],$I$(1,1).c$$org_opensourcephysics_numerics_ODE);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setODE$org_opensourcephysics_numerics_ODE',  function (ode) {
this.internalODE=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_ODE,[this, null, ode]);
return this.internalODE;
});

Clazz.newMeth(C$, 'MultistepRK45$org_opensourcephysics_numerics_ODE',  function (ode) {
var multistepSolver=Clazz.new_(C$);
multistepSolver.odeEngine=Clazz.new_([multistepSolver.setODE$org_opensourcephysics_numerics_ODE(ode)],$I$(3,1).c$$org_opensourcephysics_numerics_ODE);
return multistepSolver;
}, 1);

Clazz.newMeth(C$, 'enableRuntimeExpecptions$Z',  function (enable) {
this.enableExceptions=enable;
});

Clazz.newMeth(C$, 'setMaxIterations$I',  function (n) {
this.maxIterations=Math.max(1, n);
});

Clazz.newMeth(C$, 'setTolerance$D',  function (tol) {
tol=Math.abs(tol);
this.odeEngine.setTolerance$D(tol);
});

Clazz.newMeth(C$, 'getTolerance$',  function () {
return this.odeEngine.getTolerance$();
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.err_code;
});

Clazz.newMeth(C$, 'step$',  function () {
this.err_code=0;
this.internalODE.setInitialConditions$();
var remainder=0;
if (this.fixedStepSize > 0 ) {
remainder=p$1.plus.apply(this, []);
} else {
remainder=p$1.minus.apply(this, []);
}this.internalODE.update$();
return this.fixedStepSize - remainder;
});

Clazz.newMeth(C$, 'plus',  function () {
var tol=this.odeEngine.getTolerance$();
var remainder=this.fixedStepSize;
if ((this.odeEngine.getStepSize$() <= 0 ) || (this.odeEngine.getStepSize$() > this.fixedStepSize ) || (this.fixedStepSize - this.odeEngine.getStepSize$() == this.fixedStepSize )  ) {
this.odeEngine.setStepSize$D(this.fixedStepSize);
}var counter=0;
while (remainder > tol * this.fixedStepSize ){
++counter;
var oldRemainder=remainder;
if (remainder < this.odeEngine.getStepSize$() ) {
var tempStep=this.odeEngine.getStepSize$();
this.odeEngine.setStepSize$D(remainder);
var delta=this.odeEngine.step$();
remainder-=delta;
this.odeEngine.setStepSize$D(tempStep);
} else {
remainder-=this.odeEngine.step$();
}if ((this.odeEngine.getErrorCode$() != 0) || (Math.abs(oldRemainder - remainder) <= 1.4E-45 ) || (tol * this.fixedStepSize / 10.0 > this.odeEngine.getStepSize$() ) || (counter > this.maxIterations)  ) {
this.err_msg="ODEMultiStep did not converge. Remainder=" + new Double(remainder).toString();
this.err_code=1;
if (this.enableExceptions) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ODESolverException').c$$S,[this.err_msg]);
}if (C$.maxMessages > 0) {
--C$.maxMessages;
System.out.println$S("ODEMultistepSolver " + this.err_msg);
}break;
}}
return remainder;
}, p$1);

Clazz.newMeth(C$, 'minus',  function () {
var tol=this.odeEngine.getTolerance$();
var remainder=this.fixedStepSize;
if ((this.odeEngine.getStepSize$() >= 0 ) || (this.odeEngine.getStepSize$() < this.fixedStepSize ) || (this.fixedStepSize - this.odeEngine.getStepSize$() == this.fixedStepSize )  ) {
this.odeEngine.setStepSize$D(this.fixedStepSize);
}var counter=0;
while (remainder < tol * this.fixedStepSize ){
++counter;
var oldRemainder=remainder;
if (remainder > this.odeEngine.getStepSize$() ) {
var tempStep=this.odeEngine.getStepSize$();
this.odeEngine.setStepSize$D(remainder);
var delta=this.odeEngine.step$();
remainder-=delta;
this.odeEngine.setStepSize$D(tempStep);
} else {
remainder-=this.odeEngine.step$();
}if ((this.odeEngine.getErrorCode$() != 0) || (Math.abs(oldRemainder - remainder) <= 1.4E-45 ) || (tol * this.fixedStepSize / 10.0 < this.odeEngine.getStepSize$() ) || (counter > this.maxIterations)  ) {
this.err_msg="ODEMultiStep did not converge. Remainder=" + new Double(remainder).toString();
this.err_code=1;
if (this.enableExceptions) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ODESolverException').c$$S,[this.err_msg]);
}if (C$.maxMessages > 0) {
--C$.maxMessages;
System.out.println$S("ODEMultistepSolver " + this.err_msg);
}}}
return remainder;
}, p$1);

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
C$.maxMessages=4;
this.err_msg="";
this.err_code=0;
this.fixedStepSize=stepSize;
this.internalODE.setInitialConditions$();
this.odeEngine.initialize$D(stepSize);
});

Clazz.newMeth(C$, 'setStepSize$D',  function (stepSize) {
C$.maxMessages=4;
this.fixedStepSize=stepSize;
if (stepSize < 0 ) {
this.odeEngine.setStepSize$D(Math.max(-Math.abs(this.odeEngine.getStepSize$()), stepSize));
} else {
this.odeEngine.setStepSize$D(Math.min(this.odeEngine.getStepSize$(), stepSize));
}});

Clazz.newMeth(C$, 'setMaximumNumberOfErrorMessages$I',  function (n) {
C$.maxMessages=n;
});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.fixedStepSize;
});

C$.$static$=function(){C$.$static$=0;
C$.maxMessages=3;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ODEMultistepSolver, "InternalODE", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.ODE');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.engineState=Clazz.array(Double.TYPE, [0]);
},1);

C$.$fields$=[['O',['ode','org.opensourcephysics.numerics.ODE','engineState','double[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (ode) {
;C$.$init$.apply(this);
this.ode=ode;
this.setInitialConditions$();
}, 1);

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
this.ode.getRate$DA$DA(state, rate);
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.engineState;
});

Clazz.newMeth(C$, 'setInitialConditions$',  function () {
var state=this.ode.getState$();
if (state == null ) {
return;
}if ((this.engineState == null ) || (this.engineState.length != state.length) ) {
this.engineState=Clazz.array(Double.TYPE, [state.length]);
}System.arraycopy$O$I$O$I$I(state, 0, this.engineState, 0, state.length);
});

Clazz.newMeth(C$, 'update$',  function () {
System.arraycopy$O$I$O$I$I(this.engineState, 0, this.ode.getState$(), 0, this.engineState.length);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
