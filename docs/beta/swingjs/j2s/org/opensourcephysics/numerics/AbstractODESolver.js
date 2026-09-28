(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractODESolver", null, null, 'org.opensourcephysics.numerics.ODESolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stepSize=0.1;
this.numEqn=0;
},1);

C$.$fields$=[['D',['stepSize'],'I',['numEqn'],'O',['ode','org.opensourcephysics.numerics.ODE']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (_ode) {
;C$.$init$.apply(this);
this.ode=_ode;
this.initialize$D(0.1);
}, 1);

Clazz.newMeth(C$, 'setStepSize$D',  function (_stepSize) {
this.stepSize=_stepSize;
});

Clazz.newMeth(C$, 'initialize$D',  function (_stepSize) {
this.stepSize=_stepSize;
var state=this.ode.getState$();
if (state == null ) {
this.numEqn=0;
} else {
this.numEqn=state.length;
}});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.stepSize;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
