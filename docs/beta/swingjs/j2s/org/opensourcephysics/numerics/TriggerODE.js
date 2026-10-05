(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TriggerODE", null, null, 'org.opensourcephysics.numerics.ODE');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['ode','org.opensourcephysics.numerics.ODE','odestate','double[]','+state']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_ODE',  function (_ode) {
;C$.$init$.apply(this);
this.ode=_ode;
this.odestate=this.ode.getState$();
this.size=this.odestate.length;
this.state=Clazz.array(Double.TYPE, [this.size]);
System.arraycopy$O$I$O$I$I(this.odestate, 0, this.state, 0, this.size);
}, 1);

Clazz.newMeth(C$, 'setState$DA',  function (newstate) {
System.arraycopy$O$I$O$I$I(newstate, 0, this.state, 0, this.size);
});

Clazz.newMeth(C$, 'readRealState$',  function () {
this.odestate=this.ode.getState$();
System.arraycopy$O$I$O$I$I(this.odestate, 0, this.state, 0, this.size);
});

Clazz.newMeth(C$, 'updateRealState$',  function () {
System.arraycopy$O$I$O$I$I(this.state, 0, this.odestate, 0, this.size);
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (_state, _rate) {
this.ode.getRate$DA$DA(_state, _rate);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
