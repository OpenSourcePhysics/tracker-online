(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ErrorFunction", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return C$.errf$D(x);
});

Clazz.newMeth(C$, 'errf$D',  function (x) {
if (x > 26.0 ) {
return 1.0;
} else if (x < -5.5 ) {
return -1.0;
} else {
var absx;
var c;
var p;
var q;
absx=Math.abs(x);
if (absx <= 0.5 ) {
c=x * x;
p=((-0.0356098437018154 * c + 6.99638348861914) * c + 21.9792616182942) * c + 242.667955230532;
q=((c + 15.0827976304078) * c + 91.1649054045149) * c + 215.058875869861;
return x * p / q;
}if (x < 0.0 ) {
return -(1.0 - Math.exp(-x * x) * C$.nonexperfc$D(absx));
}return 1.0 - Math.exp(-x * x) * C$.nonexperfc$D(absx);
}}, 1);

Clazz.newMeth(C$, 'nonexperfc$D',  function (x) {
var absx;
var c;
var p;
var q;
absx=Math.abs(x);
if (absx <= 0.5 ) {
return Math.exp(x * x) * C$.errf$D(x);
} else if (absx < 4.0 ) {
c=absx;
p=((((((-1.36864857382717E-7 * c + 0.564195517478974) * c + 7.21175825088309) * c + 43.1622272220567) * c + 152.98928504694) * c + 339.320816734344) * c + 451.918953711873) * c + 300.459261020162;
q=((((((c + 12.7827273196294) * c + 77.0001529352295) * c + 277.585444743988) * c + 638.980264465631) * c + 931.35409485061) * c + 790.950925327898) * c + 300.459260956983;
return ((x > 0.0 ) ? p / q : Math.exp(x * x) * 2.0 - p / q);
} else {
c=1.0 / x / x ;
p=(((0.0223192459734185 * c + 0.278661308609648) * c + 0.226956593539687) * c + 0.0494730910623251) * c + 0.00299610707703542;
q=(((c + 1.98733201817135) * c + 1.05167510706793) * c + 0.19130892610783) * c + 0.0106209230528468;
c=(c * (-p) / q + 0.564189583547756) / absx;
return ((x > 0.0 ) ? c : Math.exp(x * x) * 2.0 - c);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
