(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.RK4','org.opensourcephysics.numerics.ODEMultistepSolver','org.opensourcephysics.numerics.Adams4','org.opensourcephysics.numerics.Adams5','org.opensourcephysics.numerics.Adams6','org.opensourcephysics.numerics.Butcher5','org.opensourcephysics.numerics.CashKarp45','org.opensourcephysics.numerics.DormandPrince45','org.opensourcephysics.numerics.EulerRichardson','org.opensourcephysics.numerics.Euler','org.opensourcephysics.numerics.Fehlberg8','org.opensourcephysics.numerics.Heun3','org.opensourcephysics.numerics.Ralston2','org.opensourcephysics.numerics.Verlet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ODESolverFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createODESolver$org_opensourcephysics_numerics_ODE$S',  function (ode, solverName) {
solverName=solverName.trim$().toLowerCase$();
if (solverName.equals$O("rk4")) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("multistep")) {
return Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("adams4")) {
return Clazz.new_($I$(3,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("adams5")) {
return Clazz.new_($I$(4,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("adams6")) {
return Clazz.new_($I$(5,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("butcher5")) {
return Clazz.new_($I$(6,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("cashkarp45")) {
return Clazz.new_($I$(7,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("dormandprince45")) {
return Clazz.new_($I$(8,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("eulerrichardson")) {
return Clazz.new_($I$(9,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("euler")) {
return Clazz.new_($I$(10,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("fehlberg8")) {
return Clazz.new_($I$(11,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("heun3")) {
return Clazz.new_($I$(12,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("ralston2")) {
return Clazz.new_($I$(13,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else if (solverName.equals$O("verlet")) {
return Clazz.new_($I$(14,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
} else {
return null;
}}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
