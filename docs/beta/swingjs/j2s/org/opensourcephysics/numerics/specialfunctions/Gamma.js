(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Gamma", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return C$.gamma$D(x);
});

Clazz.newMeth(C$, 'gamma$D',  function (x) {
var sgngam;
var q;
var z;
var y;
var p1;
var q1;
var ip;
var p;
var pp=Clazz.array(Double.TYPE, -1, [1.6011952247675185E-4, 0.0011913514700658638, 0.010421379756176158, 0.04763678004571372, 0.20744822764843598, 0.4942148268014971, 1.0]);
var qq=Clazz.array(Double.TYPE, -1, [-2.3158187332412014E-5, 5.396055804933034E-4, -0.004456419138517973, 0.011813978522206043, 0.035823639860549865, -0.23459179571824335, 0.0714304917030273, 1.0]);
sgngam=1;
q=Math.abs(x);
if (q > 33.0 ) {
if (x < 0.0 ) {
p=(Math.floor(q)|0);
ip=Math.round(p);
if (ip % 2 == 0) {
sgngam=-1;
}z=q - p;
if (z > 0.5 ) {
p=p + 1;
z=q - p;
}z=q * Math.sin(3.141592653589793 * z);
z=Math.abs(z);
z=3.141592653589793 / (z * C$.gammastirf$D(q));
} else {
z=C$.gammastirf$D(x);
}y=sgngam * z;
return y;
}z=1;
while (x >= 3 ){
x=x - 1;
z=z * x;
}
while (x < 0 ){
if (x > -1.0E-9 ) {
y=z / ((1 + 0.5772156649015329 * x) * x);
return y;
}z=z / x;
x=x + 1;
}
while (x < 2 ){
if (x < 1.0E-9 ) {
y=z / ((1 + 0.5772156649015329 * x) * x);
return y;
}z=z / x;
x=x + 1.0;
}
if (x == 2 ) {
y=z;
return y;
}x=x - 2.0;
p1=pp[0];
for (var i=1; i < 7; i++) {
p1=pp[i] + p1 * x;
}
q1=qq[0];
for (var i=1; i < 8; i++) {
q1=qq[i] + q1 * x;
}
return z * p1 / q1;
}, 1);

Clazz.newMeth(C$, 'gammastirf$D',  function (x) {
var p1;
var w;
var y;
var v;
w=1 / x;
var pp=Clazz.array(Double.TYPE, -1, [7.873113957930937E-4, -2.2954996161337813E-4, -0.0026813261780578124, 0.0034722222160545866, 0.08333333333334822]);
p1=pp[0];
for (var i=1; i < 5; i++) {
p1=pp[i] + p1 * x;
}
w=1 + w * p1;
y=Math.exp(x);
if (x > 143.01608 ) {
v=Math.pow(x, 0.5 * x - 0.25);
y=v * (v / y);
} else {
y=Math.pow(x, x - 0.5) / y;
}return 2.5066282746310007 * y * w ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
