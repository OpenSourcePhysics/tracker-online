(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.display2d.GridPointData',['org.opensourcephysics.display2d.GridPointData','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridPointData", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display2d.GridData');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dx=0;
this.dy=0;
this.cellData=false;
},1);

C$.$fields$=[['Z',['cellData'],'D',['left','right','bottom','top','dx','dy'],'O',['data','double[][][]','names','String[]']]]

Clazz.newMeth(C$, 'c$$I$I$I',  function (ix, iy, ncomponents) {
;C$.$init$.apply(this);
if ((iy < 1) || (ix < 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of dataset rows and columns must be positive. Your row=" + iy + "  col=" + ix ]);
}if ((ncomponents < 1)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of 2d data components must be positive. Your ncomponents=" + ncomponents]);
}this.data=Clazz.array(Double.TYPE, [ix, iy, ncomponents + 2]);
this.setScale$D$D$D$D(0, ix, 0, iy);
this.names=Clazz.array(String, [ncomponents]);
for (var i=0; i < ncomponents; i++) {
this.names[i]="Component_" + i;
}
}, 1);

Clazz.newMeth(C$, 'createGridPointData$I',  function (ncomponents) {
var data2d=Clazz.new_(C$.c$$I$I$I,[this.data.length, this.data[0].length, ncomponents + 2]);
data2d.setScale$D$D$D$D(this.left, this.right, this.bottom, this.top);
return data2d;
});

Clazz.newMeth(C$, 'setComponentName$I$S',  function (i, name) {
this.names[i]=name;
});

Clazz.newMeth(C$, 'getComponentName$I',  function (i) {
return this.names[i];
});

Clazz.newMeth(C$, 'getComponentCount$',  function () {
return this.data[0][0].length - 2;
});

Clazz.newMeth(C$, 'setScale$D$D$D$D',  function (_left, _right, _bottom, _top) {
this.cellData=false;
this.left=_left;
this.right=_right;
this.bottom=_bottom;
this.top=_top;
var ix=this.data.length;
var iy=this.data[0].length;
this.dx=0;
if (ix > 1) {
this.dx=(this.right - this.left) / (ix - 1);
}this.dy=0;
if (iy > 1) {
this.dy=(this.bottom - this.top) / (iy - 1);
}var x=this.left;
for (var i=0; i < ix; i++) {
var y=this.top;
for (var j=0; j < iy; j++) {
this.data[i][j][0]=x;
this.data[i][j][1]=y;
y+=this.dy;
}
x+=this.dx;
}
});

Clazz.newMeth(C$, 'setCellScale$D$D$D$D',  function (_left, _right, _bottom, _top) {
this.cellData=true;
var nx=this.data.length;
var ny=this.data[0].length;
this.dx=0;
if (nx > 1) {
this.dx=(_right - _left) / (nx);
}this.dy=0;
if (ny > 1) {
this.dy=(_bottom - _top) / (ny);
}var x=_left + this.dx / 2;
for (var i=0; i < nx; i++) {
var y=_top + this.dy / 2;
for (var j=0; j < ny; j++) {
this.data[i][j][0]=x;
this.data[i][j][1]=y;
y+=this.dy;
}
x+=this.dx;
}
this.left=_left + this.dx / 2;
this.right=_right - this.dx / 2;
this.bottom=_bottom - this.dy / 2;
this.top=_top + this.dy / 2;
});

Clazz.newMeth(C$, 'setCenteredCellScale$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
var nx=this.data.length;
var ny=this.data[0].length;
var delta=(nx > 1) ? (xmax - xmin) / (nx - 1) / 2  : 0;
xmin-=delta;
xmax+=delta;
delta=(ny > 1) ? (ymax - ymin) / (ny - 1) / 2  : 0;
ymin-=delta;
ymax+=delta;
this.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'isCellData$',  function () {
return this.cellData;
});

Clazz.newMeth(C$, 'getValue$I$I$I',  function (ix, iy, component) {
return this.data[ix][iy][component + 2];
});

Clazz.newMeth(C$, 'setValue$I$I$I$D',  function (ix, iy, component, value) {
this.data[ix][iy][component + 2]=value;
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.data.length;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.data[0].length;
});

Clazz.newMeth(C$, 'getZRange$I',  function (n) {
return this.getZRange$I$DA(n, Clazz.array(Double.TYPE, [2]));
});

Clazz.newMeth(C$, 'getZRange$I$DA',  function (n, minmax) {
var index=2 + n;
var zmin=this.data[0][0][index];
var zmax=zmin;
for (var i=0, mx=this.data.length; i < mx; i++) {
for (var j=0, my=this.data[0].length; j < my; j++) {
var v=this.data[i][j][index];
if (v > zmax ) {
zmax=v;
} else if (v < zmin ) {
zmin=v;
}}
}
minmax[0]=zmin;
minmax[1]=zmax;
return minmax;
});

Clazz.newMeth(C$, 'getVertex$D$D',  function (x, y) {
var nx=(Math.floor((x - this.left) / this.dx)|0);
nx=Math.max(0, nx);
nx=Math.min(nx, this.data.length - 1);
var ny=(Math.floor(-(this.top - y) / this.dy)|0);
ny=Math.max(0, ny);
ny=Math.min(ny, this.data[0].length - 1);
return this.data[nx][ny];
});

Clazz.newMeth(C$, 'interpolate$D$D$I',  function (x, y, index) {
var ix=(((x - this.data[0][0][0]) / this.dx)|0);
ix=Math.max(0, ix);
ix=Math.min(this.data.length - 2, ix);
var iy=(((y - this.data[0][0][1]) / this.dy)|0);
iy=Math.max(0, iy);
iy=Math.min(this.data[0].length - 2, iy);
var t=(x - this.data[ix][iy][0]) / this.dx;
var u=(y - this.data[ix][iy][1]) / this.dy;
index+=2;
return (1 - t) * (1 - u) * this.data[ix][iy][index]  + t * (1 - u) * this.data[ix + 1][iy][index]  + t * u * this.data[ix + 1][iy + 1][index]  + (1 - t) * u * this.data[ix][iy + 1][index] ;
});

Clazz.newMeth(C$, 'interpolate$D$D$IA$DA',  function (x, y, indexes, values) {
var ix=(((x - this.data[0][0][0]) / this.dx)|0);
ix=Math.max(0, ix);
ix=Math.min(this.data.length - 2, ix);
var iy=(((y - this.data[0][0][1]) / this.dy)|0);
iy=Math.max(0, iy);
iy=Math.min(this.data[0].length - 2, iy);
var t=(x - this.data[ix][iy][0]) / this.dx;
var u=(y - this.data[ix][iy][1]) / this.dy;
for (var i=0, n=indexes.length; i < n; i++) {
var index=indexes[i] + 2;
values[i]=(1 - t) * (1 - u) * this.data[ix][iy][index]  + t * (1 - u) * this.data[ix + 1][iy][index]  + t * u * this.data[ix + 1][iy + 1][index]  + (1 - t) * u * this.data[ix][iy + 1][index] ;
}
return values;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'setData$DAAA',  function (newdata) {
this.data=newdata;
var nx=this.data.length - 1;
var ny=this.data[0].length - 1;
this.left=this.data[0][0][0];
this.right=this.data[nx][ny][0];
this.top=this.data[0][0][1];
this.bottom=this.data[nx][ny][1];
this.dx=(this.right - this.left) / nx;
this.dy=(this.bottom - this.top) / ny;
this.cellData=false;
});

Clazz.newMeth(C$, 'getLeft$',  function () {
return this.left;
});

Clazz.newMeth(C$, 'getRight$',  function () {
return this.right;
});

Clazz.newMeth(C$, 'getTop$',  function () {
return this.top;
});

Clazz.newMeth(C$, 'getBottom$',  function () {
return this.bottom;
});

Clazz.newMeth(C$, 'getDx$',  function () {
return this.dx;
});

Clazz.newMeth(C$, 'getDy$',  function () {
return this.dy;
});

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
return ((this.data == null ) || (i >= this.data.length) ) ? NaN : this.data[i][0][0];
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
return ((this.data == null ) || (i >= this.data[0].length) ) ? NaN : this.data[0][i][1];
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
if (this.data == null ) {
return 0;
}var nx=this.getNx$();
var dx=(this.right - this.left) / nx;
var i=(((x - this.left) / dx)|0);
if (i < 0) {
return 0;
}if (i >= nx) {
return nx - 1;
}return i;
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
if (this.data == null ) {
return 0;
}var ny=this.getNy$();
var dy=(this.top - this.bottom) / ny;
var i=(((this.top - y) / dy)|0);
if (i < 0) {
return 0;
}if (i >= ny) {
return ny - 1;
}return i;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GridPointData, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var gpd=obj;
control.setValue$S$D("left", gpd.left);
control.setValue$S$D("right", gpd.right);
control.setValue$S$D("bottom", gpd.bottom);
control.setValue$S$D("top", gpd.top);
control.setValue$S$D("dx", gpd.dx);
control.setValue$S$D("dy", gpd.dy);
control.setValue$S$Z("is cell data", gpd.cellData);
control.setValue$S$O("data", gpd.data);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$I$I$I,[1, 1, 1]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var gpd=obj;
var data=control.getObject$S("data");
gpd.data=data;
gpd.left=control.getDouble$S("left");
gpd.right=control.getDouble$S("right");
gpd.bottom=control.getDouble$S("bottom");
gpd.top=control.getDouble$S("top");
gpd.dx=control.getDouble$S("dx");
gpd.dy=control.getDouble$S("dy");
gpd.cellData=control.getBoolean$S("is cell data");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
