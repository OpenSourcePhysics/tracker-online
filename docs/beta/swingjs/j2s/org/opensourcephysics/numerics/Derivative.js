(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Util']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Derivative");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getFirst$org_opensourcephysics_numerics_Function$D',  function (f, h) {
return ((P$.Derivative$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Derivative$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return (this.$finals$.f.evaluate$D(x + this.$finals$.h) - this.$finals$.f.evaluate$D(x - this.$finals$.h)) / this.$finals$.h / 2.0 ;
});
})()
), Clazz.new_(P$.Derivative$1.$init$,[this, {f:f,h:h}]));
}, 1);

Clazz.newMeth(C$, 'getSecond$org_opensourcephysics_numerics_Function$D',  function (f, h) {
return ((P$.Derivative$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Derivative$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return (this.$finals$.f.evaluate$D(x + this.$finals$.h) - 2 * this.$finals$.f.evaluate$D(x) + this.$finals$.f.evaluate$D(x - this.$finals$.h)) / this.$finals$.h / this.$finals$.h ;
});
})()
), Clazz.new_(P$.Derivative$2.$init$,[this, {h:h,f:f}]));
}, 1);

Clazz.newMeth(C$, 'romberg$org_opensourcephysics_numerics_Function$D$D$D$DA',  function (f, x0, h, tol, d6) {
var n=6;
var d=(d6 != null  && d6.length >= 6  ? d6 : Clazz.array(Double.TYPE, [6]));
d[0]=(f.evaluate$D(x0 + h) - f.evaluate$D(x0 - h)) / h / 2.0 ;
var error_code=1;
for (var j=1; j <= n - 1; j++) {
d[j]=0.0;
var d1=d[0];
var h2=h;
h*=0.5;
if (h < $I$(1).defaultNumericalPrecision ) {
error_code=2;
break;
}d[0]=(f.evaluate$D(x0 + h) - f.evaluate$D(x0 - h)) / h2;
for (var m=4, i=1; i <= j; i++, m*=4) {
var d2=d[i];
d[i]=(m * d[i - 1] - d1) / (m - 1);
d1=d2;
}
if (Math.abs(d[j] - d[j - 1]) < tol ) {
return d[j];
}}
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.NumericMethodException').c$$S$I$D,["Derivative did not converge.", error_code, d[0]]);
}, 1);

Clazz.newMeth(C$, 'first$org_opensourcephysics_numerics_Function$D$D',  function (f, x, h) {
return (f.evaluate$D(x + h) - f.evaluate$D(x - h)) / h / 2.0 ;
}, 1);

Clazz.newMeth(C$, 'centered$org_opensourcephysics_numerics_Function$D$D',  function (f, x, h) {
return (f.evaluate$D(x + h) - f.evaluate$D(x - h)) / h / 2.0 ;
}, 1);

Clazz.newMeth(C$, 'backward$org_opensourcephysics_numerics_Function$D$D',  function (f, x, h) {
return (f.evaluate$D(x - 2 * h) - 4 * f.evaluate$D(x - h) + 3 * f.evaluate$D(x)) / h / 2.0 ;
}, 1);

Clazz.newMeth(C$, 'forward$org_opensourcephysics_numerics_Function$D$D',  function (f, x, h) {
return (-f.evaluate$D(x + 2 * h) + 4 * f.evaluate$D(x + h) - 3 * f.evaluate$D(x)) / h / 2.0 ;
}, 1);

Clazz.newMeth(C$, 'firstPartial$org_opensourcephysics_numerics_MultiVarFunction$DA$I$D',  function (f, x, n, h) {
var n0=x[n];
x[n]=n0 + h;
var d=f.evaluate$DA(x);
x[n]=n0 - h;
d=(d - f.evaluate$DA(x)) / 2.0 / h ;
x[n]=n0;
return d;
}, 1);

Clazz.newMeth(C$, 'second$org_opensourcephysics_numerics_Function$D$D',  function (f, x, h) {
return (f.evaluate$D(x + h) - 2 * f.evaluate$D(x) + f.evaluate$D(x - h)) / h / h ;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
