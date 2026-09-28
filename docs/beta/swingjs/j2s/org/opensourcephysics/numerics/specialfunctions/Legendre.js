(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'org.opensourcephysics.numerics.specialfunctions.Legendre','org.opensourcephysics.numerics.specialfunctions.Factorials','java.util.HashMap','java.util.ArrayList','org.opensourcephysics.numerics.Polynomial','org.opensourcephysics.numerics.specialfunctions.Messages','org.opensourcephysics.numerics.specialfunctions.QNKey',['org.opensourcephysics.numerics.specialfunctions.Legendre','.AssociatedLegendreFunction']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Legendre", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AssociatedLegendreFunction',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['legendreList','java.util.ArrayList','associatedMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPolynomial$I',  function (el) {
if (el < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("Legendre.neg_degree")]);
}if (el < C$.legendreList.size$()) {
return C$.legendreList.get$I(el);
}var pk=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, (2.0 * el - 1.0) / el])],$I$(5,1).c$$DA);
var p1=C$.getPolynomial$I(el - 1).multiply$org_opensourcephysics_numerics_Polynomial(pk);
var p2=C$.getPolynomial$I(el - 2).multiply$D((1.0 - el) / el);
var p=p1.add$org_opensourcephysics_numerics_Polynomial(p2);
C$.legendreList.add$O(p);
return p;
}, 1);

Clazz.newMeth(C$, 'getAssociatedFunction$I$I',  function (el, m) {
if (m * m > el * el) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("Legendre.out_of_range_m")]);
}var key=Clazz.new_($I$(7,1).c$$I$I,[el, m]);
var f=C$.associatedMap.get$O(key);
if (f != null ) {
return f;
}f=Clazz.new_($I$(8,1).c$$I$I,[el, m]);
C$.associatedMap.put$O$O(key, f);
return f;
}, 1);

Clazz.newMeth(C$, 'evaluate$I$D',  function (el, x) {
return C$.getPolynomial$I(el).evaluate$D(x);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.associatedMap=Clazz.new_($I$(3,1));
{
C$.legendreList=Clazz.new_($I$(4,1));
var p0=Clazz.new_([Clazz.array(Double.TYPE, -1, [1.0])],$I$(5,1).c$$DA);
C$.legendreList.add$O(p0);
var p1=Clazz.new_([Clazz.array(Double.TYPE, -1, [0, 1.0])],$I$(5,1).c$$DA);
C$.legendreList.add$O(p1);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Legendre, "AssociatedLegendreFunction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['oddPower','positiveM'],'I',['n','m'],'O',['p','org.opensourcephysics.numerics.Polynomial']]]

Clazz.newMeth(C$, 'c$$I$I',  function (el, m) {
;C$.$init$.apply(this);
this.n=el;
this.positiveM=(m > 0);
m=Math.abs(m);
this.m=m;
this.oddPower=(m % 2 == 1);
this.p=$I$(1).getPolynomial$I(this.n);
for (var i=0; i < m; i++) {
this.p=this.p.derivative$();
}
if (this.positiveM && this.oddPower ) {
this.p=this.p.multiply$D(-1);
}if (!this.positiveM) {
this.p=this.p.multiply$D($I$(2).factorial$I(this.n - m) / $I$(2).factorial$I(this.n + m));
}}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
var val=Math.pow((1 - x * x), (this.m/2|0)) * this.p.evaluate$D(x);
return this.oddPower ? val * Math.sqrt(1 - x * x) : val;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
