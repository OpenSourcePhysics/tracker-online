(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Interpolation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'linear$D$D$D$D$D',  function (x, x0, x1, y0, y1) {
if ((x1 - x0) == 0 ) {
return (y0 + y1) / 2;
}return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
}, 1);

Clazz.newMeth(C$, 'lagrange$D$DA$DA',  function (x, xd, yd) {
if (xd.length != yd.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Arrays must be of equal length."]);
}var sum=0;
for (var i=0, n=xd.length; i < n; i++) {
if (x - xd[i] == 0 ) {
return yd[i];
}var product=yd[i];
for (var j=0; j < n; j++) {
if ((i == j) || (xd[i] - xd[j] == 0 ) ) {
continue;
}product*=(x - xd[i]) / (xd[i] - xd[j]);
}
sum+=product;
}
return sum;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
