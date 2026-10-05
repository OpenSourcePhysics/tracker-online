(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d.utils"),I$=[[0,'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CylinderUtils", null, 'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createStandardCylinder$I$I$I$D$D$Z$Z$Z$Z',  function (nr, nu, nz, angle1, angle2, top, bottom, left, right) {
var totalN=nu * nz;
if (bottom) {
totalN+=nr * nu;
}if (top) {
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
var aux=1.0 / nz;
for (var j=0; j < nz; j++) {
for (var u=0; u < nu; u++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=center[k] + cosu[u] * $I$(1).vectorx[k] + sinu[u] * $I$(1).vectory[k] + j * aux * $I$(1).vectorz[k] ;
data[tile][1][k]=center[k] + cosu[u + 1] * $I$(1).vectorx[k] + sinu[u + 1] * $I$(1).vectory[k] + j * aux * $I$(1).vectorz[k] ;
data[tile][2][k]=center[k] + cosu[u + 1] * $I$(1).vectorx[k] + sinu[u + 1] * $I$(1).vectory[k] + (j + 1) * aux * $I$(1).vectorz[k] ;
data[tile][3][k]=center[k] + cosu[u] * $I$(1).vectorx[k] + sinu[u] * $I$(1).vectory[k] + (j + 1) * aux * $I$(1).vectorz[k] ;
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
}if (top) {
var ref=nu * (nz - 1);
center[0]=$I$(1).vectorz[0];
center[1]=$I$(1).vectorz[1];
center[2]=$I$(1).vectorz[2] - 0.5;
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
}if (Math.abs(angle2 - angle1) < 360 ) {
center[0]=-$I$(1).vectorz[0] / 2;
center[1]=-$I$(1).vectorz[1] / 2;
center[2]=-$I$(1).vectorz[2] / 2;
if (right) {
var aux=1.0 / nz;
for (var j=0; j < nz; j++) {
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[0][0][k]) / nr + j * aux * $I$(1).vectorz[k] ;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[0][0][k]) / nr + j * aux * $I$(1).vectorz[k] ;
data[tile][2][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[0][0][k]) / nr + (j + 1) * aux * $I$(1).vectorz[k] ;
data[tile][3][k]=((nr - i) * center[k] + i * data[0][0][k]) / nr + (j + 1) * aux * $I$(1).vectorz[k] ;
}
}
}
}if (left) {
var aux=1.0 / nz;
var ref=nu - 1;
for (var j=0; j < nz; j++) {
for (var i=0; i < nr; i++, tile++) {
for (var k=0; k < 3; k++) {
data[tile][0][k]=((nr - i) * center[k] + i * data[ref][1][k]) / nr + j * aux * $I$(1).vectorz[k] ;
data[tile][1][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref][1][k]) / nr + j * aux * $I$(1).vectorz[k] ;
data[tile][2][k]=((nr - i - 1 ) * center[k] + (i + 1) * data[ref][1][k]) / nr + (j + 1) * aux * $I$(1).vectorz[k] ;
data[tile][3][k]=((nr - i) * center[k] + i * data[ref][1][k]) / nr + (j + 1) * aux * $I$(1).vectorz[k] ;
}
}
}
}}return data;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
