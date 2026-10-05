(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d.utils"),I$=[[0,'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConeUtils", null, 'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createStandardCone$I$I$I$D$D$Z$Z$Z$Z$D',  function (nr, nu, nz, angle1, angle2, top, bottom, left, right, height) {
var totalN=nu * nz;
if (bottom) {
totalN+=nr * nu;
}if (!Double.isNaN$D(height) && top ) {
totalN+=nr * nu;
}if (Math.abs(angle2 - angle1) < 360 ) {
if (left) {
totalN+=nr * nz;
}if (right) {
totalN+=nr * nz;
}}var data=Clazz.array(Double.TYPE, [totalN, 4, 3]);
var cosu=Clazz.array(Double.TYPE, [nu + 1]);
var sinu=Clazz.array(Double.TYPE, [nu + 1]);
for (var u=0; u <= nu; u++) {
var angle=((nu - u) * angle1 + u * angle2) * 0.017453292519943295 / nu;
cosu[u]=Math.cos(angle) / 2;
sinu[u]=Math.sin(angle) / 2;
}
var tile=0;
var center=Clazz.array(Double.TYPE, -1, [-$I$(1).vectorz[0] / 2, -$I$(1).vectorz[1] / 2, -$I$(1).vectorz[2] / 2]);
{
var N;
if (Double.isNaN$D(height)) {
N=nz;
} else if (height == 0 ) {
N=2147483647;
} else {
N=nz / height;
}var aux=1.0 / N;
for (var j=0; j < nz; j++) {
for (var u=0; u < nu; u++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=center[k] + (cosu[u] * $I$(1).vectorx[k] + sinu[u] * $I$(1).vectory[k]) * (N - j) / N + j * aux * $I$(1).vectorz[k] ;
data[tile][1][k]=center[k] + (cosu[u + 1] * $I$(1).vectorx[k] + sinu[u + 1] * $I$(1).vectory[k]) * (N - j) / N + j * aux * $I$(1).vectorz[k] ;
data[tile][2][k]=center[k] + (cosu[u + 1] * $I$(1).vectorx[k] + sinu[u + 1] * $I$(1).vectory[k]) * (N - j - 1 ) / N + (j + 1) * aux * $I$(1).vectorz[k] ;
data[tile][3][k]=center[k] + (cosu[u] * $I$(1).vectorx[k] + sinu[u] * $I$(1).vectory[k]) * (N - j - 1 ) / N + (j + 1) * aux * $I$(1).vectorz[k] ;
}
}
}
}if (bottom) {
for (var u=0; u < nu; u++) {
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[u][0][k]) / nr;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[u][0][k]) / nr;
data[tile][2][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[u][1][k]) / nr;
data[tile][3][k]=((nr - i) * center[k] + i * data[u][1][k]) / nr;
}
}
}
}if (!Double.isNaN$D(height) && top ) {
var ref=nu * (nz - 1);
center[0]=$I$(1).vectorz[0];
center[1]=$I$(1).vectorz[1];
if (Double.isNaN$D(height)) {
center[2]=$I$(1).vectorz[2] - 0.5;
} else {
center[2]=height * $I$(1).vectorz[2] - 0.5;
}for (var u=0; u < nu; u++) {
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[ref + u][3][k]) / nr;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref + u][3][k]) / nr;
data[tile][2][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref + u][2][k]) / nr;
data[tile][3][k]=((nr - i) * center[k] + i * data[ref + u][2][k]) / nr;
}
}
}
}if (Math.abs(angle2 - angle1) < 360 ) {
center[0]=-$I$(1).vectorz[0] / 2;
center[1]=-$I$(1).vectorz[1] / 2;
center[2]=-$I$(1).vectorz[2] / 2;
if (right) {
var ref=0;
var N;
var nextCenter=Clazz.array(Double.TYPE, [3]);
if (Double.isNaN$D(height)) {
N=nz;
} else if (height == 0 ) {
N=2147483647;
} else {
N=nz / height;
}var aux=1.0 / N;
for (var j=0; j < nz; j++, ref+=nu) {
center[0]=j * aux * $I$(1).vectorz[0] ;
center[1]=j * aux * $I$(1).vectorz[1] ;
center[2]=j * aux * $I$(1).vectorz[2]  - 0.5;
nextCenter[0]=(j + 1) * aux * $I$(1).vectorz[0] ;
nextCenter[1]=(j + 1) * aux * $I$(1).vectorz[1] ;
nextCenter[2]=(j + 1) * aux * $I$(1).vectorz[2]  - 0.5;
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[ref][0][k]) / nr;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref][0][k]) / nr;
data[tile][2][k]=((nr - i - 1 ) * nextCenter[k] + (i + 1) * data[ref][3][k]) / nr;
data[tile][3][k]=((nr - i) * nextCenter[k] + i * data[ref][3][k]) / nr;
}
}
}
}if (left) {
var ref=nu - 1;
var N;
var nextCenter=Clazz.array(Double.TYPE, [3]);
if (Double.isNaN$D(height)) {
N=nz;
} else if (height == 0 ) {
N=2147483647;
} else {
N=nz / height;
}var aux=1.0 / N;
for (var j=0; j < nz; j++, ref+=nu) {
center[0]=j * aux * $I$(1).vectorz[0] ;
center[1]=j * aux * $I$(1).vectorz[1] ;
center[2]=j * aux * $I$(1).vectorz[2]  - 0.5;
nextCenter[0]=(j + 1) * aux * $I$(1).vectorz[0] ;
nextCenter[1]=(j + 1) * aux * $I$(1).vectorz[1] ;
nextCenter[2]=(j + 1) * aux * $I$(1).vectorz[2]  - 0.5;
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[ref][1][k]) / nr;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref][1][k]) / nr;
data[tile][2][k]=((nr - i - 1 ) * nextCenter[k] + (i + 1) * data[ref][2][k]) / nr;
data[tile][3][k]=((nr - i) * nextCenter[k] + i * data[ref][2][k]) / nr;
}
}
}
}}return data;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
