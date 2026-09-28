(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Util2D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'laplacian$org_opensourcephysics_display2d_GridPointData$D',  function (input, multiplier) {
return null;
}, 1);

Clazz.newMeth(C$, 'divergence$org_opensourcephysics_display2d_GridPointData$D',  function (input, multiplier) {
var indata=input.getData$();
var nx=indata.length;
var ny=indata[0].length;
var output=input.createGridPointData$I(1);
output.left=input.left;
output.right=input.right;
output.top=input.top;
output.bottom=input.bottom;
output.dx=input.dx;
output.dy=input.dy;
var outdata=output.getData$();
var dx2=2 * input.dx / multiplier;
var dy2=2 * input.dy / multiplier;
var dudx;
var dudy;
for (var i=1; i < nx - 1; i++) {
for (var j=1; j < ny - 1; j++) {
dudx=(indata[i + 1][j][2] - indata[i - 1][j][2]) / dx2;
dudy=(indata[i][j + 1][2] - indata[i][j - 1][2]) / dy2;
outdata[i][j][0]=indata[i][j][0];
outdata[i][j][1]=indata[i][j][1];
outdata[i][j][2]=dudx + dudy;
}
}
for (var i=1; i < nx - 1; i++) {
dudx=(indata[i + 1][0][2] - indata[i - 1][0][2]) / dx2;
dudy=(-3 * indata[i][0][2] + 4 * indata[i][1][2] - indata[i][2][2]) / dy2;
outdata[i][0][2]=dudx + dudy;
}
var my=ny - 1;
for (var i=1; i < nx - 1; i++) {
dudx=(indata[i + 1][my][2] - indata[i - 1][my][2]) / dx2;
dudy=(3 * indata[i][my][2] - 4 * indata[i][my - 1][2] + indata[i][my - 2][2]) / dy2;
outdata[i][my][2]=dudx + dudy;
}
for (var j=1; j < ny - 1; j++) {
dudx=(-3 * indata[0][j][2] + 4 * indata[1][j][2] - indata[2][j][2]) / dx2;
dudy=(indata[0][j + 1][2] - indata[0][j - 1][2]) / dy2;
outdata[0][j][2]=dudx + dudy;
}
var mx=nx - 1;
for (var j=1; j < ny - 1; j++) {
dudx=(3 * indata[mx][j][2] - 4 * indata[mx - 1][j][2] + indata[mx - 2][j][2]) / dx2;
dudy=(indata[mx][j + 1][2] - indata[mx][j - 1][2]) / dy2;
outdata[mx][j][2]=dudx + dudy;
}
dudx=(outdata[1][0][2] * outdata[1][0][3] + outdata[0][1][2] * outdata[0][1][3]) / 2;
dudy=(outdata[1][0][2] * outdata[1][0][4] + outdata[0][1][2] * outdata[0][1][4]) / 2;
outdata[0][0][2]=dudx + dudy;
dudx=(outdata[0][my - 1][2] * outdata[0][my - 1][3] + outdata[1][my][2] * outdata[1][my][3]) / 2;
dudy=(outdata[0][my - 1][2] * outdata[0][my - 1][4] + outdata[1][my][2] * outdata[1][my][4]) / 2;
outdata[0][my][2]=dudx + dudy;
dudx=(outdata[mx][1][2] * outdata[mx][1][3] + outdata[mx - 1][0][2] * outdata[mx - 1][0][3]) / 2;
dudy=(outdata[mx][1][2] * outdata[mx][1][4] + outdata[mx - 1][0][2] * outdata[mx - 1][0][4]) / 2;
outdata[mx][0][2]=dudx + dudy;
dudx=(outdata[mx][my - 1][2] * outdata[mx][my - 1][3] + outdata[mx - 1][my][2] * outdata[mx - 1][my][3]) / 2;
dudy=(outdata[mx][my - 1][2] * outdata[mx][my - 1][4] + outdata[mx - 1][my][2] * outdata[mx - 1][my][4]) / 2;
outdata[mx][my][2]=dudx + dudy;
return output;
}, 1);

Clazz.newMeth(C$, 'gradient$org_opensourcephysics_display2d_GridPointData$D',  function (input, multiplier) {
var indata=input.getData$();
var nx=indata.length;
var ny=indata[0].length;
var output=input.createGridPointData$I(3);
output.left=input.left;
output.right=input.right;
output.top=input.top;
output.bottom=input.bottom;
output.dx=input.dx;
output.dy=input.dy;
var outdata=output.getData$();
var dx2=2 * input.dx / multiplier;
var dy2=2 * input.dy / multiplier;
var dudx;
var dudy;
var mag;
for (var i=1; i < nx - 1; i++) {
for (var j=1; j < ny - 1; j++) {
dudx=(indata[i + 1][j][2] - indata[i - 1][j][2]) / dx2;
dudy=(indata[i][j + 1][2] - indata[i][j - 1][2]) / dy2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[i][j][0]=indata[i][j][0];
outdata[i][j][1]=indata[i][j][1];
outdata[i][j][2]=mag;
outdata[i][j][3]=dudx / mag;
outdata[i][j][4]=dudy / mag;
}
}
for (var i=1; i < nx - 1; i++) {
dudx=(indata[i + 1][0][2] - indata[i - 1][0][2]) / dx2;
dudy=(-3 * indata[i][0][2] + 4 * indata[i][1][2] - indata[i][2][2]) / dy2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[i][0][2]=mag;
outdata[i][0][3]=dudx / mag;
outdata[i][0][4]=dudy / mag;
}
var my=ny - 1;
for (var i=1; i < nx - 1; i++) {
dudx=(indata[i + 1][my][2] - indata[i - 1][my][2]) / dx2;
dudy=(3 * indata[i][my][2] - 4 * indata[i][my - 1][2] + indata[i][my - 2][2]) / dy2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[i][my][2]=mag;
outdata[i][my][3]=dudx / mag;
outdata[i][my][4]=dudy / mag;
}
for (var j=1; j < ny - 1; j++) {
dudx=(-3 * indata[0][j][2] + 4 * indata[1][j][2] - indata[2][j][2]) / dx2;
dudy=(indata[0][j + 1][2] - indata[0][j - 1][2]) / dy2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[0][j][2]=mag;
outdata[0][j][3]=dudx / mag;
outdata[0][j][4]=dudy / mag;
}
var mx=nx - 1;
for (var j=1; j < ny - 1; j++) {
dudx=(3 * indata[mx][j][2] - 4 * indata[mx - 1][j][2] + indata[mx - 2][j][2]) / dx2;
dudy=(indata[mx][j + 1][2] - indata[mx][j - 1][2]) / dy2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[mx][j][2]=mag;
outdata[mx][j][3]=dudx / mag;
outdata[mx][j][4]=dudy / mag;
}
dudx=(outdata[1][0][2] * outdata[1][0][3] + outdata[0][1][2] * outdata[0][1][3]) / 2;
dudy=(outdata[1][0][2] * outdata[1][0][4] + outdata[0][1][2] * outdata[0][1][4]) / 2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[0][0][2]=mag;
outdata[0][0][3]=dudx / mag;
outdata[0][0][4]=dudy / mag;
dudx=(outdata[0][my - 1][2] * outdata[0][my - 1][3] + outdata[1][my][2] * outdata[1][my][3]) / 2;
dudy=(outdata[0][my - 1][2] * outdata[0][my - 1][4] + outdata[1][my][2] * outdata[1][my][4]) / 2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[0][my][2]=mag;
outdata[0][my][3]=dudx / mag;
outdata[0][my][4]=dudy / mag;
dudx=(outdata[mx][1][2] * outdata[mx][1][3] + outdata[mx - 1][0][2] * outdata[mx - 1][0][3]) / 2;
dudy=(outdata[mx][1][2] * outdata[mx][1][4] + outdata[mx - 1][0][2] * outdata[mx - 1][0][4]) / 2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[mx][0][2]=mag;
outdata[mx][0][3]=dudx / mag;
outdata[mx][0][4]=dudy / mag;
dudx=(outdata[mx][my - 1][2] * outdata[mx][my - 1][3] + outdata[mx - 1][my][2] * outdata[mx - 1][my][3]) / 2;
dudy=(outdata[mx][my - 1][2] * outdata[mx][my - 1][4] + outdata[mx - 1][my][2] * outdata[mx - 1][my][4]) / 2;
mag=Math.sqrt(dudx * dudx + dudy * dudy);
outdata[mx][my][2]=mag;
outdata[mx][my][3]=dudx / mag;
outdata[mx][my][4]=dudy / mag;
return output;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
