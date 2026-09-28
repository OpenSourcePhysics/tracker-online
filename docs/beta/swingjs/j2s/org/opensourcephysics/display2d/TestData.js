(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TestData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'dipole$D$D',  function (x, y) {
var r1=Math.sqrt((x - 1) * (x - 1) + y * y);
var r2=Math.sqrt((x + 1) * (x + 1) + y * y);
if ((r1 == 0 ) || (r2 == 0 ) ) {
return 0.0;
}return 1 / r1 - 1 / r2;
}, 1);

Clazz.newMeth(C$, 'gaussian$D$D$D',  function (x, y, sigma) {
var rSqr=x * x + y * y;
return Math.exp(-rSqr / sigma / sigma / 2 );
}, 1);

Clazz.newMeth(C$, 'saddle$D$D',  function (x, y) {
var rSqr=x * x - y * y;
return Math.exp(rSqr);
}, 1);

Clazz.newMeth(C$, 'dipoleScalarField$org_opensourcephysics_display2d_GridPointData',  function (pointdata) {
var data=pointdata.getData$();
for (var i=0, mx=data.length; i < mx; i++) {
for (var j=0, my=data[0].length; j < my; j++) {
data[i][j][2]=C$.dipole$D$D(data[i][j][0], data[i][j][1]);
}
}
return data;
}, 1);

Clazz.newMeth(C$, 'gaussianScalarField$org_opensourcephysics_display2d_GridPointData',  function (pointdata) {
var data=pointdata.getData$();
for (var i=0, mx=data.length; i < mx; i++) {
for (var j=0, my=data[0].length; j < my; j++) {
data[i][j][2]=C$.gaussian$D$D$D(data[i][j][0], data[i][j][1], 1);
}
}
return data;
}, 1);

Clazz.newMeth(C$, 'randomScalarField$org_opensourcephysics_display2d_GridPointData',  function (pointdata) {
var data=pointdata.getData$();
for (var i=0, mx=data.length; i < mx; i++) {
for (var j=0, my=data[0].length; j < my; j++) {
data[i][j][2]=Math.random();
}
}
}, 1);

Clazz.newMeth(C$, 'dipoleVector$D$D',  function (x, y) {
var vec=Clazz.array(Double.TYPE, [2]);
var r1=Math.sqrt((x - 1) * (x - 1) + y * y);
var r2=Math.sqrt((x + 1) * (x + 1) + y * y);
if ((r1 == 0 ) || (r2 == 0 ) ) {
return vec;
}vec[0]=(x - 1) / r1 / r1  - (x + 1) / r2 / r2 ;
vec[1]=y / r1 / r1  - y / r2 / r2 ;
return vec;
}, 1);

Clazz.newMeth(C$, 'circulatingVectorField$I$I',  function (nx, ny) {
var data=Clazz.array(Double.TYPE, [nx, ny, 5]);
var xmin=-10;
var xmax=10;
var ymin=-10;
var ymax=10;
var x=xmin;
var y=ymin;
var stepx=(xmax - xmin) / (nx - 1);
var stepy=(ymax - ymin) / (ny - 1);
for (var i=0; i < nx; i++) {
for (var j=0; j < ny; j++) {
data[i][j][0]=x;
data[i][j][1]=y;
var r=Math.sqrt(x * x + y * y);
data[i][j][2]=-y / r;
data[i][j][3]=x / r;
data[i][j][4]=r;
y+=stepy;
}
y=ymin;
x+=stepx;
}
return data;
}, 1);

Clazz.newMeth(C$, 'dipoleVectorField$I$I$D$D$D$D',  function (nx, ny, xmin, xmax, ymin, ymax) {
var data=Clazz.array(Double.TYPE, [nx, ny, 5]);
var x=xmin;
var y=ymin;
var stepx=(xmax - xmin) / (nx - 1);
var stepy=(ymax - ymin) / (ny - 1);
for (var i=0; i < nx; i++) {
for (var j=0; j < ny; j++) {
data[i][j][0]=x;
data[i][j][1]=y;
var vec=C$.dipoleVector$D$D(x, y);
var mag=Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
data[i][j][2]=vec[0] / mag;
data[i][j][3]=vec[1] / mag;
data[i][j][4]=mag;
y+=stepy;
}
y=ymin;
x+=stepx;
}
return data;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
