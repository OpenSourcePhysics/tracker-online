(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.display2d.FlatData',['org.opensourcephysics.display2d.FlatData','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FlatData", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display2d.GridData');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dx=0;
this.dy=0;
this.cellData=false;
this.data3=Clazz.array(Double.TYPE, [1, 1, null]);
},1);

C$.$fields$=[['Z',['cellData'],'D',['left','right','bottom','top','dx','dy'],'I',['nx','ny','stride'],'O',['data','double[]','names','String[]','data3','double[][][]']]]

Clazz.newMeth(C$, 'c$$I$I$I',  function (ix, iy, ncomponents) {
;C$.$init$.apply(this);
if ((iy < 1) || (ix < 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of dataset rows and columns must be positive. Your row=" + iy + "  col=" + ix ]);
}if ((ncomponents < 1)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of 2d data components must be positive. Your ncomponents=" + ncomponents]);
}this.nx=ix;
this.ny=iy;
this.stride=ncomponents;
this.data=Clazz.array(Double.TYPE, [ncomponents * ix * iy ]);
this.setScale$D$D$D$D(0, ix, 0, iy);
this.names=Clazz.array(String, [ncomponents]);
for (var i=0; i < ncomponents; i++) {
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
return this.stride;
});

Clazz.newMeth(C$, 'setScale$D$D$D$D',  function (_left, _right, _bottom, _top) {
this.cellData=false;
this.left=_left;
this.right=_right;
this.bottom=_bottom;
this.top=_top;
var ix=this.nx;
var iy=this.ny;
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
if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["x index out of range in getValue"]);
}if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["y index out of range in getValue"]);
}return this.data[(iy * this.nx + ix) * this.stride + component];
});

Clazz.newMeth(C$, 'setValue$I$I$I$D',  function (ix, iy, component, value) {
if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["x index out of range in getValue"]);
}if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["y index out of range in getValue"]);
}this.data[(iy * this.nx + ix) * this.stride + component]=value;
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.nx;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.ny;
});

Clazz.newMeth(C$, 'setCellScale$D$D$D$D',  function (_left, _right, _bottom, _top) {
this.cellData=true;
var ix=this.nx;
var iy=this.ny;
this.dx=0;
if (ix > 1) {
this.dx=(_right - _left) / ix;
}this.dy=0;
if (iy > 1) {
this.dy=(_bottom - _top) / iy;
}this.left=_left + this.dx / 2;
this.right=_right - this.dx / 2;
this.bottom=_bottom - this.dy / 2;
this.top=_top + this.dy / 2;
});

Clazz.newMeth(C$, 'setCenteredCellScale$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
var delta=(this.nx > 1) ? (xmax - xmin) / (this.nx - 1) / 2  : 0;
xmin-=delta;
xmax+=delta;
delta=(this.ny > 1) ? (ymax - ymin) / (this.ny - 1) / 2  : 0;
ymin-=delta;
ymax+=delta;
this.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'interpolate$D$D$I',  function (x, y, index) {
var ix=(((x - this.left) / this.dx)|0);
ix=Math.max(0, ix);
ix=Math.min(this.nx - 2, ix);
var iy=-(((this.top - y) / this.dy)|0);
iy=Math.max(0, iy);
iy=Math.min(this.ny - 2, iy);
var t=(x - this.left) / this.dx - ix;
var u=-(this.top - y) / this.dy - iy;
if (ix < 0) {
var i=this.nx * iy * this.stride  + index;
return (1 - u) * this.data[i] + u * this.data[i + this.nx * this.stride];
} else if (iy < 0) {
var i=ix * this.stride + index;
return (1 - t) * this.data[i] + t * this.data[i + this.stride];
} else {
var i=this.nx * iy * this.stride  + ix * this.stride + index;
return (1 - t) * (1 - u) * this.data[i]  + t * (1 - u) * this.data[i + this.stride]  + t * u * this.data[i + this.nx * this.stride + this.stride]  + (1 - t) * u * this.data[i + this.nx * this.stride] ;
}});

Clazz.newMeth(C$, 'interpolate$D$D$IA$DA',  function (x, y, indexes, values) {
var ix=(((x - this.left) / this.dx)|0);
ix=Math.max(0, ix);
ix=Math.min(this.nx - 2, ix);
var iy=-(((this.top - y) / this.dy)|0);
iy=Math.max(0, iy);
iy=Math.min(this.ny - 2, iy);
if ((ix < 0) && (iy < 0) ) {
for (var i=0, n=indexes.length; i < n; i++) {
values[i]=this.data[indexes[i]];
}
return values;
} else if (ix < 0) {
var u=-(this.top - y) / this.dy - iy;
for (var i=0, n=indexes.length; i < n; i++) {
var ii=this.nx * iy * this.stride  + indexes[i];
values[i]=(1 - u) * this.data[ii] + u * this.data[ii + this.stride];
}
return values;
} else if (iy < 0) {
var t=(x - this.left) / this.dx - ix;
for (var i=0, n=indexes.length; i < n; i++) {
var ii=ix * this.stride + indexes[i];
values[i]=(1 - t) * this.data[ii] + t * this.data[ii + this.stride];
}
return values;
}var t=(x - this.left) / this.dx - ix;
var u=-(this.top - y) / this.dy - iy;
for (var i=0, n=indexes.length; i < n; i++) {
var index=indexes[i];
var ii=this.nx * iy * this.stride  + ix * this.stride + index;
values[i]=(1 - t) * (1 - u) * this.data[ii]  + t * (1 - u) * this.data[ii + this.stride]  + t * u * this.data[ii + this.nx * this.stride + this.stride]  + (1 - t) * u * this.data[ii + this.nx * this.stride] ;
}
return values;
});

Clazz.newMeth(C$, 'getData$',  function () {
this.data3[0][0]=this.data;
return this.data3;
});

Clazz.newMeth(C$, 'getZRange$I',  function (n) {
return this.getZRange$I$DA(n, Clazz.array(Double.TYPE, [2]));
});

Clazz.newMeth(C$, 'getZRange$I$DA',  function (n, minmax) {
var zmin=this.data[n];
var zmax=zmin;
for (var j=0; j < this.ny; j++) {
var index=j * this.nx + n;
for (var i=0; n < this.nx; i++) {
var v=this.data[index + i];
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
(function(){/*c*/var C$=Clazz.newClass(P$.FlatData, "Loader", function(){
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
