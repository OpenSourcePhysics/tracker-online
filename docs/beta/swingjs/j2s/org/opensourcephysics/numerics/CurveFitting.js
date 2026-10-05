(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CurveFitting");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'linearRegression$DA$DA',  function (xpoints, ypoints) {
var xBar_yBar=0;
var xBar=0;
var yBar=0;
var x2Bar=0;
var x=0;
var y=0;
for (var i=0; i < xpoints.length; i++) {
x=xpoints[i];
y=ypoints[i];
xBar_yBar+=x * y;
xBar+=x;
yBar+=y;
x2Bar+=x * x;
}
var n=xpoints.length;
xBar_yBar=xBar_yBar / n;
xBar=xBar / n;
yBar=yBar / n;
x2Bar=x2Bar / n;
var deltaX2=x2Bar - xBar * xBar;
var m=(xBar_yBar - xBar * yBar) / deltaX2;
var b=yBar - m * xBar;
return ((P$.CurveFitting$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CurveFitting$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.$finals$.m * x + this.$finals$.b;
});

Clazz.newMeth(C$, 'toString',  function () {
return "linear regression: y(x) = " + new Double(this.$finals$.m).toString() + "x + " + new Double(this.$finals$.b).toString() ;
});
})()
), Clazz.new_(P$.CurveFitting$1.$init$,[this, {m:m,b:b}]));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
