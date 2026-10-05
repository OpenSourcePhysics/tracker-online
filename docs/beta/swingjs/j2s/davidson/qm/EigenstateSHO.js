(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.numerics.specialfunctions.Hermite','org.opensourcephysics.numerics.specialfunctions.Factorials']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EigenstateSHO", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n'],'O',['hermite','org.opensourcephysics.numerics.Polynomial']]
,['D',['PISQRT']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.hermite=$I$(1).getPolynomial$I(n);
this.n=n;
var norm=Math.sqrt(Math.pow(2, n) * $I$(2).factorial$I(n) * C$.PISQRT );
this.hermite=this.hermite.divide$D(norm);
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return Math.exp(-x * x / 2) * this.hermite.evaluate$D(x);
});

Clazz.newMeth(C$, 'toString',  function () {
return "exp(-x*x)*(" + this.hermite.toString() + ")" ;
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
for (var i=1; i < 75; i++) {
var phi=Clazz.new_(C$.c$$I,[i]);
System.err.println$S("i=" + i + " eigenstate= " + phi + "\nphi(1)=" + new Double(phi.evaluate$D(1)).toString() );
}
System.err.println$S("\nHermite polynomials");
for (var i=1; i < 20; i++) {
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PISQRT=Math.sqrt(3.141592653589793);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
