(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.display2d.ArrayData',['org.opensourcephysics.display2d.ArrayData','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayData", function(){
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

Clazz.newMeth(C$, 'c$$I$I$I',  function (nx, ny, nsamples) {
;C$.$init$.apply(this);
if ((ny < 1) || (nx < 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of dataset rows and columns must be positive. Your row=" + ny + "  col=" + nx ]);
}if ((nsamples < 1)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of 2d data components must be positive. Your ncomponents=" + nsamples]);
}this.data=Clazz.array(Double.TYPE, [nsamples, nx, ny]);
this.setScale$D$D$D$D(0, nx, 0, ny);
this.names=Clazz.array(String, [nsamples]);
for (var i=0; i < nsamples; i++) {
this.names[i]="Component_" + i;
}
}, 1);

Clazz.newMeth(C$, 'setComponentName$I$S',  function (i, name) {
this.names[i]=name;
});

Clazz.newMeth(C$, 'getComponentName$I',  function (i) {
return this.names[i];
});

Clazz.newMeth(C$, 'getComponentCount$',  function () {
return this.data.length;
});

Clazz.newMeth(C$, 'setScale$D$D$D$D',  function (_left, _right, _bottom, _top) {
this.cellData=false;
this.left=_left;
this.right=_right;
this.bottom=_bottom;
this.top=_top;
var ix=this.data[0].length;
var iy=this.data[0][0].length;
this.dx=0;
if (ix > 1) {
this.dx=(this.right - this.left) / (ix - 1);
}this.dy=0;
if (iy > 1) {
this.dy=(this.bottom - this.top) / (iy - 1);
}if (this.dx == 0 ) {
this.left-=0.5;
this.right+=0.5;
}if (this.dy == 0 ) {
this.bottom-=0.5;
this.top+=0.5;
}});

Clazz.newMeth(C$, 'isCellData$',  function () {
return this.cellData;
});

Clazz.newMeth(C$, 'getValue$I$I$I',  function (ix, iy, component) {
return this.data[component][ix][iy];
});

Clazz.newMeth(C$, 'setValue$I$I$I$D',  function (ix, iy, component, value) {
this.data[component][ix][iy]=value;
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.data[0].length;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.data[0][0].length;
});

Clazz.newMeth(C$, 'setCellScale$D$D$D$D',  function (_left, _right, _bottom, _top) {
this.cellData=true;
var nx=this.data[0].length;
var ny=this.data[0][0].length;
this.dx=0;
if (nx > 1) {
this.dx=(_right - _left) / nx;
}this.dy=0;
if (ny > 1) {
this.dy=(_bottom - _top) / ny;
}this.left=_left + this.dx / 2;
this.right=_right - this.dx / 2;
this.bottom=_bottom - this.dy / 2;
this.top=_top + this.dy / 2;
});

Clazz.newMeth(C$, 'setCenteredCellScale$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
var nx=this.data[0].length;
var ny=this.data[0][0].length;
var delta=(nx > 1) ? (xmax - xmin) / (nx - 1) / 2  : 0;
xmin-=delta;
xmax+=delta;
delta=(ny > 1) ? (ymax - ymin) / (ny - 1) / 2  : 0;
ymin-=delta;
ymax+=delta;
this.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'interpolate$D$D$I',  function (x, y, index) {
var ix=(((x - this.left) / this.dx)|0);
ix=Math.max(0, ix);
ix=Math.min(this.data[0].length - 2, ix);
var iy=-(((this.top - y) / this.dy)|0);
iy=Math.max(0, iy);
iy=Math.min(this.data[0][0].length - 2, iy);
var t=(x - this.left) / this.dx - ix;
var u=-(this.top - y) / this.dy - iy;
if (ix < 0) {
return (1 - u) * this.data[index][0][iy] + u * this.data[index][0][iy + 1];
} else if (iy < 0) {
return (1 - t) * this.data[index][ix][0] + t * this.data[index][ix + 1][0];
} else {
return (1 - t) * (1 - u) * this.data[index][ix][iy]  + t * (1 - u) * this.data[index][ix + 1][iy]  + t * u * this.data[index][ix + 1][iy + 1]  + (1 - t) * u * this.data[index][ix][iy + 1] ;
}});

Clazz.newMeth(C$, 'interpolate$D$D$IA$DA',  function (x, y, indexes, values) {
var ix=(((x - this.left) / this.dx)|0);
ix=Math.max(0, ix);
ix=Math.min(this.data[0].length - 2, ix);
var iy=-(((this.top - y) / this.dy)|0);
iy=Math.max(0, iy);
iy=Math.min(this.data[0][0].length - 2, iy);
if ((ix < 0) && (iy < 0) ) {
for (var i=0, n=indexes.length; i < n; i++) {
values[i]=this.data[indexes[i]][0][0];
}
return values;
} else if (ix < 0) {
var u=-(this.top - y) / this.dy - iy;
for (var i=0, n=indexes.length; i < n; i++) {
values[i]=(1 - u) * this.data[indexes[i]][0][iy] + u * this.data[indexes[i]][0][iy + 1];
}
return values;
} else if (iy < 0) {
var t=(x - this.left) / this.dx - ix;
for (var i=0, n=indexes.length; i < n; i++) {
values[i]=(1 - t) * this.data[indexes[i]][ix][0] + t * this.data[indexes[i]][ix + 1][0];
}
return values;
}var t=(x - this.left) / this.dx - ix;
var u=-(this.top - y) / this.dy - iy;
for (var i=0, n=indexes.length; i < n; i++) {
var index=indexes[i];
values[i]=(1 - t) * (1 - u) * this.data[index][ix][iy]  + t * (1 - u) * this.data[index][ix + 1][iy]  + t * u * this.data[index][ix + 1][iy + 1]  + (1 - t) * u * this.data[index][ix][iy + 1] ;
}
return values;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getZRange$I',  function (n) {
return this.getZRange$I$DA(n, Clazz.array(Double.TYPE, [2]));
});

Clazz.newMeth(C$, 'getZRange$I$DA',  function (n, minmax) {
var zmin=this.data[n][0][0];
var zmax=zmin;
for (var i=0, mx=this.data[0].length; i < mx; i++) {
for (var j=0, my=this.data[0][0].length; j < my; j++) {
var v=this.data[n][i][j];
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
return (this.data == null ) ? NaN : this.left + this.dx * i;
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
return (this.data == null ) ? NaN : this.top + this.dy * i;
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
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayData, "Loader", function(){
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
