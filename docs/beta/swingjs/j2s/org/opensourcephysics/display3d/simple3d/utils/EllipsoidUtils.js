(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d.utils"),I$=[[0,'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EllipsoidUtils", null, 'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createStandardEllipsoid$I$I$I$D$D$D$D$Z$Z$Z$Z',  function (nr, nu, nv, angleu1, angleu2, anglev1, anglev2, top, bottom, left, right) {
var totalN=nu * nv;
if (Math.abs(anglev2 - anglev1) < 180 ) {
if (bottom) {
totalN+=nr * nu;
}if (top) {
totalN+=nr * nu;
}}if (Math.abs(angleu2 - angleu1) < 360 ) {
if (left) {
totalN+=nr * nv;
}if (right) {
totalN+=nr * nv;
}}var data=Clazz.array(Double.TYPE, [totalN, 4, 3]);
var cosu=Clazz.array(Double.TYPE, [nu + 1]);
var sinu=Clazz.array(Double.TYPE, [nu + 1]);
var cosv=Clazz.array(Double.TYPE, [nv + 1]);
var sinv=Clazz.array(Double.TYPE, [nv + 1]);
for (var u=0; u <= nu; u++) {
var angle=((nu - u) * angleu1 + u * angleu2) * 0.017453292519943295 / nu;
cosu[u]=Math.cos(angle);
sinu[u]=Math.sin(angle);
}
for (var v=0; v <= nv; v++) {
var angle=((nv - v) * anglev1 + v * anglev2) * 0.017453292519943295 / nv;
cosv[v]=Math.cos(angle) / 2;
sinv[v]=Math.sin(angle) / 2;
}
var tile=0;
var center=Clazz.array(Double.TYPE, -1, [0, 0, 0]);
{
for (var v=0; v < nv; v++) {
for (var u=0; u < nu; u++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=(cosu[u] * $I$(1).vectorx[k] + sinu[u] * $I$(1).vectory[k]) * cosv[v] + sinv[v] * $I$(1).vectorz[k];
data[tile][1][k]=(cosu[u + 1] * $I$(1).vectorx[k] + sinu[u + 1] * $I$(1).vectory[k]) * cosv[v] + sinv[v] * $I$(1).vectorz[k];
data[tile][2][k]=(cosu[u + 1] * $I$(1).vectorx[k] + sinu[u + 1] * $I$(1).vectory[k]) * cosv[v + 1] + sinv[v + 1] * $I$(1).vectorz[k];
data[tile][3][k]=(cosu[u] * $I$(1).vectorx[k] + sinu[u] * $I$(1).vectory[k]) * cosv[v + 1] + sinv[v + 1] * $I$(1).vectorz[k];
}
}
}
}if (Math.abs(anglev2 - anglev1) < 180 ) {
if (bottom) {
center[2]=sinv[0];
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
}if (top) {
center[2]=sinv[nv];
var ref=nu * (nv - 1);
for (var u=0; u < nu; u++) {
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[ref + u][3][k]) / nr;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref + u][3][k]) / nr;
data[tile][2][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref + u][2][k]) / nr;
data[tile][3][k]=((nr - i) * center[k] + i * data[ref + u][2][k]) / nr;
}
}
}
}}if (Math.abs(angleu2 - angleu1) < 360 ) {
var nextCenter=Clazz.array(Double.TYPE, -1, [0, 0, 0]);
if (right) {
var ref=0;
for (var j=0; j < nv; j++, ref+=nu) {
center[2]=sinv[j];
nextCenter[2]=sinv[j + 1];
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
for (var j=0; j < nv; j++, ref+=nu) {
center[2]=sinv[j];
nextCenter[2]=sinv[j + 1];
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
