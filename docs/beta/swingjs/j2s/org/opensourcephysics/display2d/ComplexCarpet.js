(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d");
/*c*/var C$=Clazz.newClass(P$, "ComplexCarpet", null, 'org.opensourcephysics.display2d.ComplexInterpolatedPlot', 'org.opensourcephysics.display2d.ICarpet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (griddata) {
;C$.superclazz.c$$org_opensourcephysics_display2d_GridData.apply(this,[griddata]);C$.$init$.apply(this);
this.setShowGridLines$Z(false);
}, 1);

Clazz.newMeth(C$, 'clearData$',  function () {
if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) {
var data=this.griddata.getData$();
for (var ix=0, nx=this.griddata.getNx$(); ix < nx; ix++) {
for (var iy=0, ny=this.griddata.getNy$(); iy < ny; iy++) {
data[0][ix][iy]=0;
data[1][ix][iy]=0;
data[2][ix][iy]=0;
}
}
} else {
var data=this.griddata.getData$();
for (var ix=0, nx=this.griddata.getNx$(); ix < nx; ix++) {
for (var iy=0, ny=this.griddata.getNy$(); iy < ny; iy++) {
data[nx][ny][2]=0;
data[nx][ny][3]=0;
data[nx][ny][4]=0;
}
}
}this.update$();
});

Clazz.newMeth(C$, 'setTopRow$DAA',  function (line) {
if (this.image == null ) {
return;
}if (this.pixelData.length != this.image.getWidth$() * this.image.getHeight$() * 4 ) {
return;
}if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) {
for (var c=0; c < line.length; c++) {
var data=this.griddata.getData$()[c];
var len=data[0].length - 1;
for (var ix=0, nx=data.length; ix < nx; ix++) {
System.arraycopy$O$I$O$I$I(data[ix], 0, data[ix], 1, len);
data[ix][0]=line[c][ix];
}
}
} else {
var data=this.griddata.getData$();
for (var ix=0, nx=data.length; ix < nx; ix++) {
var len=line.length;
for (var ny=data[0].length - 1, iy=ny; iy > 0; iy--) {
System.arraycopy$O$I$O$I$I(data[ix][iy - 1], 2, data[ix][iy], 2, len);
}
for (var c=0; c < len; c++) {
data[ix][0][2 + c]=line[c][ix];
}
}
}var imageWidth=this.image.getWidth$();
var imageHeight=this.image.getHeight$();
var x0=this.griddata.getLeft$();
var y=this.griddata.getTop$();
var dx=(this.griddata.getRight$() - x0) / (imageWidth - 1);
var dy=(this.griddata.getBottom$() - y) / (imageWidth - 1);
var nr=1 + (Math.abs(this.griddata.getDy$() / dy)|0);
var offset=nr * imageWidth * 4 ;
var length=(imageWidth * imageHeight) * 4 - offset;
System.arraycopy$O$I$O$I$I(this.pixelData, 0, this.pixelData, offset, length);
this.writeToRaster$D$D$D$D(x0, y, dx, dy);
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.setAutoscaleZ$Z$D(isAutoscale, ceil);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
