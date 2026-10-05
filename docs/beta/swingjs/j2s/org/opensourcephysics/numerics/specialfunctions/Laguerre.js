(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'java.util.HashMap','java.util.ArrayList','org.opensourcephysics.numerics.Polynomial','org.opensourcephysics.numerics.specialfunctions.Messages','org.opensourcephysics.numerics.specialfunctions.QNKey']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Laguerre");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['laguerreList','java.util.ArrayList','associatedLaguerreMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPolynomial$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(4).getString$S("Laguerre.neg_degree")]);
}if (n < C$.laguerreList.size$()) {
return C$.laguerreList.get$I(n);
}var pk=Clazz.new_([Clazz.array(Double.TYPE, -1, [(2.0 * n - 1.0) / n, -1.0 / n])],$I$(3,1).c$$DA);
var p1=C$.getPolynomial$I(n - 1).multiply$org_opensourcephysics_numerics_Polynomial(pk);
var p2=C$.getPolynomial$I(n - 2).multiply$D((1.0 - n) / n);
var p=p1.add$org_opensourcephysics_numerics_Polynomial(p2);
C$.laguerreList.add$O(p);
return p;
}, 1);

Clazz.newMeth(C$, 'getPolynomial$I$I',  function (n, k) {
if (k < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(4).getString$S("Laguerre.neg_k")]);
}var key=Clazz.new_($I$(5,1).c$$I$I,[n, k]);
var p=C$.associatedLaguerreMap.get$O(key);
if (p != null ) {
return p;
}p=C$.getPolynomial$I(n + k);
var sign=1;
for (var i=0; i < k; i++) {
sign*=-1;
p=p.derivative$();
}
if (sign == -1) {
p=p.multiply$D(sign);
}C$.associatedLaguerreMap.put$O$O(key, p);
return p;
}, 1);

Clazz.newMeth(C$, 'evaluate$I$D',  function (n, x) {
return C$.getPolynomial$I(n).evaluate$D(x);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.associatedLaguerreMap=Clazz.new_($I$(1,1));
{
C$.laguerreList=Clazz.new_($I$(2,1));
var p0=Clazz.new_([Clazz.array(Double.TYPE, -1, [1.0])],$I$(3,1).c$$DA);
C$.laguerreList.add$O(p0);
var p1=Clazz.new_([Clazz.array(Double.TYPE, -1, [1, -1])],$I$(3,1).c$$DA);
C$.laguerreList.add$O(p1);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
