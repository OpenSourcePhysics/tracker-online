(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ComplexColorMapper','org.opensourcephysics.display2d.ArrayData','java.awt.image.BufferedImage','org.opensourcephysics.display.Grid','java.awt.Color','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display2d.ComplexGridPlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexGridPlot", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoscaleZ=true;
this.ampIndex=0;
this.reIndex=1;
this.imIndex=2;
this.samples=Clazz.array(Double.TYPE, [3]);
},1);

C$.$fields$=[['Z',['autoscaleZ'],'I',['ampIndex','reIndex','imIndex'],'O',['griddata','org.opensourcephysics.display2d.GridData','rgbData','int[]','grid','org.opensourcephysics.display.Grid','colorMap','org.opensourcephysics.display2d.ComplexColorMapper','samples','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_display2d_GridData.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (_griddata) {
Clazz.super_(C$, this);
this.griddata=_griddata;
this.colorMap=Clazz.new_($I$(1,1).c$$D,[1]);
if (this.griddata == null ) {
return;
}this.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
}, 1);

Clazz.newMeth(C$, 'getGridData$',  function () {
return this.griddata;
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
return this.griddata.xToIndex$D(x);
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
return this.griddata.yToIndex$D(y);
});

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
return this.griddata.indexToX$I(i);
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
return this.griddata.indexToY$I(i);
});

Clazz.newMeth(C$, 'setAll$O',  function (obj) {
var val=obj;
p$1.copyComplexData$DAAA.apply(this, [val]);
this.update$();
});

Clazz.newMeth(C$, 'setAll$O$D$D$D$D',  function (obj, xmin, xmax, ymin, ymax) {
var val=obj;
p$1.copyComplexData$DAAA.apply(this, [val]);
if (this.griddata.isCellData$()) {
this.griddata.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
} else {
this.griddata.setScale$D$D$D$D(xmin, xmax, ymin, ymax);
}this.update$();
});

Clazz.newMeth(C$, 'copyComplexData$DAAA',  function (vals) {
if ((this.griddata != null ) && !(Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["SetAll only supports ArrayData for data storage."]);
}if ((this.griddata == null ) || (this.griddata.getNx$() != vals[0].length) || (this.griddata.getNy$() != vals[0][0].length)  ) {
this.griddata=Clazz.new_($I$(2,1).c$$I$I$I,[vals[0].length, vals[0][0].length, 3]);
this.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
}var mag=this.griddata.getData$()[0];
var reData=this.griddata.getData$()[1];
var imData=this.griddata.getData$()[2];
var ny=vals[0][0].length;
for (var i=0, nx=vals[0].length; i < nx; i++) {
System.arraycopy$O$I$O$I$I(vals[0][i], 0, reData[i], 0, ny);
System.arraycopy$O$I$O$I$I(vals[1][i], 0, imData[i], 0, ny);
for (var j=0; j < ny; j++) {
mag[i][j]=Math.sqrt(vals[0][i][j] * vals[0][i][j] + vals[1][i][j] * vals[1][i][j]);
}
}
}, p$1);

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (_griddata) {
this.griddata=_griddata;
var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
this.rgbData=Clazz.array(Integer.TYPE, [nx * ny]);
this.image=Clazz.new_($I$(3,1).c$$I$I$I,[nx, ny, 2]);
var newgrid=Clazz.new_($I$(4,1).c$$I$I,[nx, ny]);
if (this.grid != null ) {
newgrid.setColor$java_awt_Color(this.grid.getColor$());
newgrid.setVisible$Z(this.grid.isVisible$());
} else {
newgrid.setColor$java_awt_Color($I$(5).lightGray);
}this.grid=newgrid;
this.update$();
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$();
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.autoscaleZ=isAutoscale;
if (this.autoscaleZ) {
this.update$();
} else {
this.colorMap.setScale$D(ceil);
}});

Clazz.newMeth(C$, 'setSymmetricZ$Z',  function (symmetric) {
});

Clazz.newMeth(C$, 'isSymmetricZ$',  function () {
return false;
});

Clazz.newMeth(C$, 'isAutoscaleZ$',  function () {
return this.autoscaleZ;
});

Clazz.newMeth(C$, 'getFloor$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.colorMap.getCeil$();
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
this.colorMap.setCeilColor$java_awt_Color(ceilColor);
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGrid) {
if (this.grid == null ) {
this.grid=Clazz.new_($I$(4,1).c$$I$I,[1, 1]);
}this.grid.setVisible$Z(showGrid);
});

Clazz.newMeth(C$, 'update$',  function () {
if (this.autoscaleZ) {
this.griddata.getZRange$I$DA(this.ampIndex, this.minmax);
this.colorMap.setScale$D(this.minmax[1]);
}this.recolorImage$();
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
var zMap=Clazz.new_($I$(6,1).c$$D,[expansionFactor]);
this.colorMap.setZMap$org_opensourcephysics_display2d_ZExpansion(zMap);
} else {
this.colorMap.setZMap$org_opensourcephysics_display2d_ZExpansion(null);
}});

Clazz.newMeth(C$, 'recolorImage$',  function () {
if (this.griddata == null ) {
return;
}if (this.griddata.isCellData$()) {
var dx=this.griddata.getDx$();
var dy=this.griddata.getDy$();
this.xmin=this.griddata.getLeft$() - dx / 2;
this.xmax=this.griddata.getRight$() + dx / 2;
this.ymin=this.griddata.getBottom$() + dy / 2;
this.ymax=this.griddata.getTop$() - dy / 2;
} else {
this.xmin=this.griddata.getLeft$();
this.xmax=this.griddata.getRight$();
this.ymin=this.griddata.getBottom$();
this.ymax=this.griddata.getTop$();
}this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
var data=this.griddata.getData$();
var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.GridPointData")) {
var ampIndex=this.ampIndex + 2;
var reIndex=this.reIndex + 2;
var imIndex=this.imIndex + 2;
for (var iy=0, count=0; iy < ny; iy++) {
for (var ix=0; ix < nx; ix++) {
this.samples[0]=data[ix][iy][ampIndex];
this.samples[1]=data[ix][iy][reIndex];
this.samples[2]=data[ix][iy][imIndex];
this.rgbData[count]=this.colorMap.samplesToColor$DA(this.samples).getRGB$();
++count;
}
}
} else if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) {
for (var iy=0, count=0; iy < ny; iy++) {
for (var ix=0; ix < nx; ix++) {
this.samples[0]=data[this.ampIndex][ix][iy];
this.samples[1]=data[this.reIndex][ix][iy];
this.samples[2]=data[this.imIndex][ix][iy];
this.rgbData[count]=this.colorMap.samplesToColor$DA(this.samples).getRGB$();
++count;
}
}
}this.image.setRGB$I$I$I$I$IA$I$I(0, 0, nx, ny, this.rgbData, 0, nx);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || (this.griddata == null ) ) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
this.grid.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
if (this.grid == null ) {
this.grid=Clazz.new_($I$(4,1).c$$I$I,[1, 1]);
}this.grid.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
this.reIndex=indexes[1];
this.imIndex=indexes[2];
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.ComplexGridPlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexGridPlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(7,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.ComplexGridPlot$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
