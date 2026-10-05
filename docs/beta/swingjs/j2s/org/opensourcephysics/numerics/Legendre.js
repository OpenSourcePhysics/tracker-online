(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.numerics.Polynomial']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Legendre");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['legendreList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPolynomial$I',  function (n) {
if (n < C$.legendreList.size$()) {
return C$.legendreList.get$I(n);
}var part1=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, (2 * (n - 1) + 1)])],$I$(2,1).c$$DA);
var p1=C$.getPolynomial$I(n - 1).multiply$org_opensourcephysics_numerics_Polynomial(part1);
var p2=C$.getPolynomial$I(n - 2).multiply$D(n - 1);
var p=p1.subtract$org_opensourcephysics_numerics_Polynomial(p2).multiply$D(1.0 / n);
C$.legendreList.add$O(p);
return p;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.legendreList=Clazz.new_($I$(1,1));
var p=Clazz.new_([Clazz.array(Double.TYPE, -1, [1.0])],$I$(2,1).c$$DA);
C$.legendreList.add$O(p);
p=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, 1.0])],$I$(2,1).c$$DA);
C$.legendreList.add$O(p);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
