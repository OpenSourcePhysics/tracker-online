(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ColorMapper','org.opensourcephysics.display.Grid','java.awt.Color','java.awt.image.BufferedImage','org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display2d.GridPlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridPlot", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoscaleZ=true;
this.symmetricZ=false;
this.ampIndex=0;
},1);

C$.$fields$=[['Z',['autoscaleZ','symmetricZ'],'I',['ampIndex'],'O',['griddata','org.opensourcephysics.display2d.GridData','rgbData','int[]','grid','org.opensourcephysics.display.Grid','colorMap','org.opensourcephysics.display2d.ColorMapper']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (griddata) {
Clazz.super_(C$, this);
this.setGridData$org_opensourcephysics_display2d_GridData(griddata);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
});

Clazz.newMeth(C$, 'getGridData$',  function () {
return this.griddata;
});

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (_griddata) {
this.griddata=_griddata;
if (this.colorMap == null ) {
this.colorMap=Clazz.new_($I$(1,1).c$$I$D$D$I,[100, -1, 1, 0]);
}if (this.griddata == null ) {
return;
}var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
p$1.setImage$I$I.apply(this, [nx, ny]);
var newgrid=Clazz.new_($I$(2,1).c$$I$I,[nx, ny]);
newgrid.setColor$java_awt_Color($I$(3).lightGray);
if (this.grid != null ) {
newgrid.setColor$java_awt_Color(this.grid.getColor$());
newgrid.setVisible$Z(this.grid.isVisible$());
} else {
newgrid.setColor$java_awt_Color($I$(3).lightGray);
}this.grid=newgrid;
this.update$();
});

Clazz.newMeth(C$, 'setImage$I$I',  function (nx, ny) {
this.image=Clazz.new_($I$(4,1).c$$I$I$I,[nx, ny, 2]);
this.rgbData=(this.image.getRaster$().getDataBuffer$()).getData$();
}, p$1);

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
return this.griddata.indexToX$I(i);
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
return this.griddata.indexToY$I(i);
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
return this.griddata.xToIndex$D(x);
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
return this.griddata.yToIndex$D(y);
});

Clazz.newMeth(C$, 'setAll$O',  function (obj) {
var val=obj;
p$1.copyData$DAA.apply(this, [val]);
this.update$();
});

Clazz.newMeth(C$, 'setAll$O$D$D$D$D',  function (obj, xmin, xmax, ymin, ymax) {
var val=obj;
p$1.copyData$DAA.apply(this, [val]);
if (this.griddata.isCellData$()) {
this.griddata.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
} else {
this.griddata.setScale$D$D$D$D(xmin, xmax, ymin, ymax);
}this.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
this.update$();
});

Clazz.newMeth(C$, 'copyData$DAA',  function (val) {
if ((this.griddata != null ) && !(Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["SetAll only supports ArrayData for data storage."]);
}if ((this.griddata == null ) || (this.griddata.getNx$() != val.length) || (this.griddata.getNy$() != val[0].length)  ) {
this.griddata=Clazz.new_($I$(5,1).c$$I$I$I,[val.length, val[0].length, 1]);
this.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
}var data=this.griddata.getData$()[0];
var ny=data[0].length;
for (var i=0, nx=data.length; i < nx; i++) {
System.arraycopy$O$I$O$I$I(val[i], 0, data[i], 0, ny);
}
}, p$1);

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$();
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.autoscaleZ=isAutoscale;
if (this.autoscaleZ) {
this.update$();
} else {
this.colorMap.setScale$D$D(floor, ceil);
}});

Clazz.newMeth(C$, 'setSymmetricZ$Z',  function (symmetric) {
this.symmetricZ=symmetric;
});

Clazz.newMeth(C$, 'isSymmetricZ$',  function () {
return this.symmetricZ;
});

Clazz.newMeth(C$, 'isAutoscaleZ$',  function () {
return this.autoscaleZ;
});

Clazz.newMeth(C$, 'getFloor$',  function () {
return this.colorMap.getFloor$();
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.colorMap.getCeil$();
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
this.colorMap.setPaletteType$I(type);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
this.colorMap.setColorPalette$java_awt_ColorA(colors);
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
this.colorMap.setFloorCeilColor$java_awt_Color$java_awt_Color(floorColor, ceilColor);
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGrid) {
if (this.grid != null ) {
this.grid.setVisible$Z(showGrid);
}});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
if (this.grid != null ) {
this.grid.setColor$java_awt_Color(c);
}});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
var zMap=Clazz.new_($I$(6,1).c$$D,[expansionFactor]);
this.colorMap.setZMap$org_opensourcephysics_display2d_ZExpansion(zMap);
} else {
this.colorMap.setZMap$org_opensourcephysics_display2d_ZExpansion(null);
}});

Clazz.newMeth(C$, 'update$',  function () {
if (this.griddata == null ) {
return;
}if (this.autoscaleZ) {
this.griddata.getZRange$I$DA(this.ampIndex, this.minmax);
var ceil=this.minmax[1];
var floor=this.minmax[0];
if (this.symmetricZ) {
ceil=Math.max(Math.abs(ceil), Math.abs(floor));
floor=-ceil;
}this.colorMap.setScale$D$D(floor, ceil);
}this.recolorImage$();
this.colorMap.updateLegend$org_opensourcephysics_display2d_ZExpansion(null);
});

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
}if (this.grid != null ) {
this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
}var data=this.griddata.getData$();
var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.GridPointData")) {
var index=this.ampIndex + 2;
for (var j=0, pt=0; j < ny; j++) {
for (var i=0; i < nx; i++, pt++) {
this.rgbData[pt]=this.colorMap.doubleToColor$D(data[i][j][index]).getRGB$();
}
}
} else if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) {
for (var j=0, pt=0; j < ny; j++) {
for (var i=0; i < nx; i++, pt++) {
this.rgbData[pt]=this.colorMap.doubleToColor$D(data[this.ampIndex][i][j]).getRGB$();
}
}
} else if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.FlatData")) {
var stride=(data[0][0].length/(nx * ny)|0);
for (var j=0, pt=0; j < ny; j++) {
var offset=j * nx * stride ;
for (var i=0; i < nx; i++, pt++) {
this.rgbData[pt]=this.colorMap.doubleToColor$D(data[0][0][offset + i * stride + this.ampIndex]).getRGB$();
}
}
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || (this.griddata == null ) ) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
this.grid.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.GridPlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GridPlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(7,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var plot=obj;
control.setValue$S$O("color map", plot.colorMap);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var plot=obj;
plot.colorMap=control.getObject$S("color map");
return plot;
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.GridPlot$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
