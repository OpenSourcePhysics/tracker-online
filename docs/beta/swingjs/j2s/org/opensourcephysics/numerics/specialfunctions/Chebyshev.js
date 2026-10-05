(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.numerics.Polynomial','org.opensourcephysics.numerics.specialfunctions.Messages']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Chebyshev");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['chebyshevTList','java.util.ArrayList','+chebyshevUList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPolynomialT$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).getString$S("Chebyshev.neg_degree")]);
}if (n < C$.chebyshevTList.size$()) {
return C$.chebyshevTList.get$I(n);
}var part1=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, (2.0)])],$I$(2,1).c$$DA);
var p=part1.multiply$org_opensourcephysics_numerics_Polynomial(C$.getPolynomialT$I(n - 1)).subtract$org_opensourcephysics_numerics_Polynomial(C$.getPolynomialT$I(n - 2));
C$.chebyshevTList.add$O(p);
return p;
}, 1);

Clazz.newMeth(C$, 'getPolynomialU$I',  function (n) {
if (n < C$.chebyshevUList.size$()) {
return C$.chebyshevUList.get$I(n);
}var part1=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, (2.0)])],$I$(2,1).c$$DA);
var p=part1.multiply$org_opensourcephysics_numerics_Polynomial(C$.getPolynomialU$I(n - 1)).subtract$org_opensourcephysics_numerics_Polynomial(C$.getPolynomialU$I(n - 2));
C$.chebyshevUList.add$O(p);
return p;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.chebyshevTList=Clazz.new_($I$(1,1));
C$.chebyshevUList=Clazz.new_($I$(1,1));
var p=Clazz.new_([Clazz.array(Double.TYPE, -1, [1.0])],$I$(2,1).c$$DA);
C$.chebyshevTList.add$O(p);
C$.chebyshevUList.add$O(p);
p=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, 1.0])],$I$(2,1).c$$DA);
C$.chebyshevTList.add$O(p);
p=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, 2.0])],$I$(2,1).c$$DA);
C$.chebyshevUList.add$O(p);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
