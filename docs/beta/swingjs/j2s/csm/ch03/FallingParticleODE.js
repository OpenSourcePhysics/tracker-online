(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FallingParticleODE", null, null, 'org.opensourcephysics.numerics.ODE');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=Clazz.array(Double.TYPE, [3]);
},1);

C$.$fields$=[['O',['state','double[]']]]

Clazz.newMeth(C$, 'c$$D$D',  function (y, v) {
;C$.$init$.apply(this);
this.state[0]=y;
this.state[1]=v;
this.state[2]=0;
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
rate[0]=state[1];
rate[1]=-9.8;
rate[2]=1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
