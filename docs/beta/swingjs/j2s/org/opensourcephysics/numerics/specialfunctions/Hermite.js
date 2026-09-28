(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'org.opensourcephysics.numerics.Polynomial','java.util.ArrayList','org.opensourcephysics.numerics.specialfunctions.Messages']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Hermite");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['hermiteList','java.util.ArrayList','twoX','org.opensourcephysics.numerics.Polynomial']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPolynomial$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).getString$S("Hermite.neg_degree")]);
}if (n < C$.hermiteList.size$()) {
return C$.hermiteList.get$I(n);
}var p1=C$.getPolynomial$I(n - 1).multiply$org_opensourcephysics_numerics_Polynomial(C$.twoX);
var p2=C$.getPolynomial$I(n - 2).multiply$D(2 * (n - 1));
var p=p1.subtract$org_opensourcephysics_numerics_Polynomial(p2);
C$.hermiteList.add$O(p);
return p;
}, 1);

Clazz.newMeth(C$, 'evaluate$I$D',  function (n, x) {
return C$.getPolynomial$I(n).evaluate$D(x);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.twoX=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, 2.0])],$I$(1,1).c$$DA);
{
C$.hermiteList=Clazz.new_($I$(2,1));
var p=Clazz.new_([Clazz.array(Double.TYPE, -1, [1.0])],$I$(1,1).c$$DA);
C$.hermiteList.add$O(p);
p=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, 2.0])],$I$(1,1).c$$DA);
C$.hermiteList.add$O(p);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
