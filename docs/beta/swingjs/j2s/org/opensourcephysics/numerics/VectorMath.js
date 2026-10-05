(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics");
/*c*/var C$=Clazz.newClass(P$, "VectorMath");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'plus$DA$DA$D',  function (a, b, c) {
var aLength=a.length;
if (aLength != b.length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Vectors must be of equal length to add."]);
}for (var i=0; i < aLength; i++) {
a[i]+=c * b[i];
}
return a;
}, 1);

Clazz.newMeth(C$, 'plus$DA$DA',  function (a, b) {
var aLength=a.length;
if (aLength != b.length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Vectors must be of equal length to add."]);
}for (var i=0; i < aLength; i++) {
a[i]+=b[i];
}
return a;
}, 1);

Clazz.newMeth(C$, 'normalize$DA',  function (a) {
var mag=C$.magnitude$DA(a);
if (mag == 0 ) {
a[0]=1;
return a;
}a[0]/=mag;
a[1]/=mag;
a[2]/=mag;
return a;
}, 1);

Clazz.newMeth(C$, 'dot$DA$DA',  function (a, b) {
var aLength=a.length;
if (aLength != b.length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Vectors must be of equal dimension in dot product."]);
}var sum=0;
for (var i=0; i < aLength; i++) {
sum+=a[i] * b[i];
}
return sum;
}, 1);

Clazz.newMeth(C$, 'project$DA$DA',  function (a, b) {
var aLength=a.length;
if (aLength != b.length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Vectors must be of equal dimension to compute projection."]);
}var result=b.clone$();
var asquared=0;
var dot=0;
for (var i=0; i < aLength; i++) {
dot+=a[i] * b[i];
asquared+=a[i] * a[i];
}
dot/=asquared;
for (var i=0; i < aLength; i++) {
result[i]/=dot;
}
return result;
}, 1);

Clazz.newMeth(C$, 'perp$DA$DA',  function (a, b) {
var aLength=a.length;
if (aLength != b.length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Vectors must be of equal dimension to find the perpendicular component."]);
}var result=b.clone$();
var asquared=0;
var dot=0;
for (var i=0; i < aLength; i++) {
dot+=a[i] * b[i];
asquared+=a[i] * a[i];
}
dot/=asquared;
for (var i=0; i < aLength; i++) {
result[i]=a[i] - b[i] / dot;
}
return result;
}, 1);

Clazz.newMeth(C$, 'magnitudeSquared$DA',  function (a) {
var aLength=a.length;
var sum=0;
for (var i=0; i < aLength; i++) {
sum+=a[i] * a[i];
}
return sum;
}, 1);

Clazz.newMeth(C$, 'magnitude$DA',  function (a) {
var sum=0;
for (var i=0, n=a.length; i < n; i++) {
sum+=a[i] * a[i];
}
return Math.sqrt(sum);
}, 1);

Clazz.newMeth(C$, 'cross3D$DA$DA',  function (v1, v2) {
var v=Clazz.array(Double.TYPE, [3]);
v[0]=v1[1] * v2[2] - v1[2] * v2[1];
v[1]=v2[0] * v1[2] - v2[2] * v1[0];
v[2]=v1[0] * v2[1] - v1[1] * v2[0];
return v;
}, 1);

Clazz.newMeth(C$, 'cross2D$DA$D',  function (v, b) {
if (v.length != 2) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Cross2D product requires 2 component array."]);
}var temp=v[0];
v[0]=v[1] * b;
v[1]=-temp * b;
return v;
}, 1);

Clazz.newMeth(C$, 'cross2D$DA$DA',  function (a, b) {
if ((a.length != 2) || (b.length != 2) ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["ERROR: Cross2D product requires 2 component arrays."]);
}return a[0] * b[1] - a[1] * b[0];
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
