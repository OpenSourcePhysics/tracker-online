(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'java.util.Vector','org.opensourcephysics.numerics.TriggerODE','org.opensourcephysics.numerics.ODE','org.opensourcephysics.numerics.RK4']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ODEBisectionEventSolver", null, null, ['org.opensourcephysics.numerics.ODEEventSolver', 'org.opensourcephysics.numerics.ODEAdaptiveSolver']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.eventList=Clazz.new_($I$(1,1));
this.happened=Clazz.new_($I$(1,1));
this.errorCode=0;
this.eventHappened=false;
},1);

C$.$fields$=[['Z',['eventHappened'],'I',['size','errorCode'],'O',['statea','double[]','solver','org.opensourcephysics.numerics.ODESolver','triggerOde','org.opensourcephysics.numerics.TriggerODE','eventList','java.util.Vector','+happened']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE$Class',  function (ode, solverClass) {
;C$.$init$.apply(this);
this.triggerOde=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
try {
var c=Clazz.array(Class, -1, [Clazz.getClass($I$(3),['getRate$DA$DA','getState$'])]);
var o=Clazz.array(java.lang.Object, -1, [this.triggerOde]);
var constructor=solverClass.getDeclaredConstructor$ClassA(c);
this.solver=constructor.newInstance$OA(o);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
_exc.printStackTrace$();
System.err.println$S("BisectionEventSolver: Solver class " + solverClass + " not found!" );
System.err.println$S("  I will use RK4 as default solver.");
this.solver=Clazz.new_($I$(4,1).c$$org_opensourcephysics_numerics_ODE,[this.triggerOde]);
} else {
throw _exc;
}
}
}, 1);

Clazz.newMeth(C$, 'addEvent$org_opensourcephysics_numerics_StateEvent',  function (event) {
this.eventList.add$O(event);
});

Clazz.newMeth(C$, 'removeEvent$org_opensourcephysics_numerics_StateEvent',  function (event) {
this.eventList.remove$O(event);
});

Clazz.newMeth(C$, 'initialize$D',  function (stepSize) {
this.triggerOde.readRealState$();
this.size=this.triggerOde.getState$().length;
this.statea=Clazz.array(Double.TYPE, [this.size]);
this.solver.initialize$D(stepSize);
});

Clazz.newMeth(C$, 'setStepSize$D',  function (stepSize) {
this.solver.setStepSize$D(stepSize);
});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.solver.getStepSize$();
});

Clazz.newMeth(C$, 'setTolerance$D',  function (tol) {
if (Clazz.instanceOf(this.solver, "org.opensourcephysics.numerics.ODEAdaptiveSolver")) {
(this.solver).setTolerance$D(tol);
}});

Clazz.newMeth(C$, 'getTolerance$',  function () {
if (Clazz.instanceOf(this.solver, "org.opensourcephysics.numerics.ODEAdaptiveSolver")) {
return (this.solver).getTolerance$();
}return 0.0;
});

Clazz.newMeth(C$, 'getEventHappened$',  function () {
return this.eventHappened;
});

Clazz.newMeth(C$, 'step$',  function () {
this.errorCode=0;
this.eventHappened=false;
var t=0;
var origDt=this.solver.getStepSize$();
do {
this.triggerOde.readRealState$();
System.arraycopy$O$I$O$I$I(this.triggerOde.getState$(), 0, this.statea, 0, this.size);
var dt=this.solver.step$();
var state=this.triggerOde.getState$();
this.happened.clear$();
for (var e=this.eventList.elements$(); e.hasMoreElements$(); ) {
var evt=e.nextElement$();
if (evt.evaluate$DA(state) <= -evt.getTolerance$() ) {
this.happened.add$O(evt);
}}
if (this.happened.size$() == 0) {
this.triggerOde.updateRealState$();
this.solver.setStepSize$D(origDt);
return dt;
}this.eventHappened=true;
this.triggerOde.setState$DA(this.statea);
var eventFound=null;
for (var e=this.happened.elements$(); e.hasMoreElements$(); ) {
var evt=e.nextElement$();
if (Math.abs(evt.evaluate$DA(this.statea)) < evt.getTolerance$() ) {
eventFound=evt;
break;
}}
if (eventFound == null ) {
if (Clazz.instanceOf(this.solver, "org.opensourcephysics.numerics.ODEInterpolationSolver")) {
this.solver.initialize$D(this.solver.getStepSize$());
}for (var i=0; i < 50; i++) {
this.solver.setStepSize$D(dt*=0.5);
var c=this.solver.step$();
state=this.triggerOde.getState$();
var previousFound=null;
for (var e=this.happened.elements$(); e.hasMoreElements$(); ) {
var evt=e.nextElement$();
var f_i=evt.evaluate$DA(state);
if (f_i <= -evt.getTolerance$() ) {
previousFound=evt;
break;
}if (f_i < evt.getTolerance$() ) {
eventFound=evt;
}}
if (previousFound != null ) {
for (var e=this.happened.elements$(); e.hasMoreElements$(); ) {
var evt=e.nextElement$();
if ((evt !== previousFound ) && (evt.evaluate$DA(state) > -evt.getTolerance$() ) ) {
this.happened.remove$O(evt);
}}
this.triggerOde.setState$DA(this.statea);
if (Clazz.instanceOf(this.solver, "org.opensourcephysics.numerics.ODEInterpolationSolver")) {
this.solver.initialize$D(this.solver.getStepSize$());
}} else {
t=t + c;
System.arraycopy$O$I$O$I$I(state, 0, this.statea, 0, this.size);
if (eventFound != null ) {
break;
}}}
if (eventFound == null ) {
eventFound=this.happened.elementAt$I(0);
System.err.println$S("BisectionEventSolver Warning : Event not found after 50 subdivisions.");
System.err.println$S("  Event = " + eventFound);
System.err.println$S("  Please check your event algorithm or decrease the initial stepTime.");
this.errorCode=2;
}}this.triggerOde.updateRealState$();
if (eventFound.action$()) {
if (Clazz.instanceOf(this.solver, "org.opensourcephysics.numerics.ODEInterpolationSolver")) {
this.triggerOde.readRealState$();
this.solver.initialize$D(origDt);
} else {
this.solver.setStepSize$D(origDt);
}return t;
}if (Clazz.instanceOf(this.solver, "org.opensourcephysics.numerics.ODEInterpolationSolver")) {
this.triggerOde.readRealState$();
this.solver.initialize$D(origDt - t);
} else {
this.solver.setStepSize$D(origDt - t);
}} while (t < origDt );
this.solver.setStepSize$D(origDt);
return t;
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.errorCode;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
