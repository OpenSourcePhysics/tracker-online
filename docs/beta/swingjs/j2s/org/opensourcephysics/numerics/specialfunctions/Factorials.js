(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'org.opensourcephysics.numerics.specialfunctions.Messages']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Factorials");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cof','double[]','+fac']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'gammaln$D',  function (x) {
var y=x;
var tmp=x + 5.5;
tmp-=(x + 0.5) * Math.log(tmp);
var sum=1.000000000190015;
for (var j=0; j <= 5; j++) {
sum+=C$.cof[j] / ++y;
}
return -tmp + Math.log(2.5066282746310007 * sum / x);
}, 1);

Clazz.newMeth(C$, 'factorial$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("Factorials.neg_val")]);
}return (n >= 100 ? Math.exp(C$.gammaln$D(n + 1.0)) : C$.fac[n] == 0  ? (C$.fac[n]=Math.exp(C$.gammaln$D(n + 1.0))) : C$.fac[n]);
}, 1);

Clazz.newMeth(C$, 'logFactorial$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("Factorials.log_neg_val")]);
}return C$.gammaln$D(n + 1.0);
}, 1);

Clazz.newMeth(C$, 'poisson$D$I',  function (nu, n) {
return Math.exp(n * Math.log(nu) - nu - C$.logFactorial$I(n));
}, 1);

Clazz.newMeth(C$, 'logChoose$I$I',  function (n, k) {
return C$.logFactorial$I(n) - C$.logFactorial$I(k) - C$.logFactorial$I(n - k) ;
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
for (var i=10; i < 25; i++) {
System.out.println$S("i= " + i + "  fact(i)= " + new Double(C$.factorial$I(i)).toString() );
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cof=Clazz.array(Double.TYPE, -1, [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -5.395239384953E-6]);
C$.fac=Clazz.array(Double.TYPE, [100]);
{
C$.fac[0]=1;
var l=1;
for (var i=1; i < 21; i++) {
(l=Long.$mul(l,(i)));
C$.fac[i]=Long.$dval(l);
}
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
