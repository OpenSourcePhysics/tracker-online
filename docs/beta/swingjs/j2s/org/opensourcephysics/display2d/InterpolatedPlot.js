(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ColorMapper','org.opensourcephysics.display.Grid','java.awt.Color','org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display.OSPRuntime','java.awt.image.BufferedImage','org.opensourcephysics.display2d.InterpolatedPlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InterpolatedPlot", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoscaleZ=true;
this.symmetricZ=false;
this.ampIndex=0;
},1);

C$.$fields$=[['Z',['autoscaleZ','symmetricZ'],'D',['top','left','bottom','right'],'I',['ampIndex','leftPix','rightPix','topPix','bottomPix','ixsize','iysize','imageType'],'O',['griddata','org.opensourcephysics.display2d.GridData','grid','org.opensourcephysics.display.Grid','colorMap','org.opensourcephysics.display2d.ColorMapper','pixelData','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_display2d_GridData.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (_griddata) {
Clazz.super_(C$, this);
this.griddata=_griddata;
this.colorMap=Clazz.new_($I$(1,1).c$$I$D$D$I,[100, -1, 1, 0]);
if (this.griddata == null ) {
this.grid=Clazz.new_($I$(2,1).c$$I$I$D$D$D$D,[1, 1, this.xmin, this.xmax, this.ymin, this.ymax]);
} else {
this.grid=Clazz.new_([this.griddata.getNx$(), this.griddata.getNy$(), this.xmin, this.xmax, this.ymin, this.ymax],$I$(2,1).c$$I$I$D$D$D$D);
}this.grid.setColor$java_awt_Color($I$(3).lightGray);
this.grid.setVisible$Z(false);
this.update$();
}, 1);

Clazz.newMeth(C$, 'getGridData$',  function () {
return this.griddata;
});

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
}this.update$();
});

Clazz.newMeth(C$, 'copyData$DAA',  function (val) {
if ((this.griddata != null ) && !(Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["SetAll only supports ArrayData for data storage."]);
}if ((this.griddata == null ) || (this.griddata.getNx$() != val.length) || (this.griddata.getNy$() != val[0].length)  ) {
this.griddata=Clazz.new_($I$(4,1).c$$I$I$I,[val.length, val[0].length, 1]);
this.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
}var data=this.griddata.getData$()[0];
var ny=data[0].length;
for (var i=0, nx=data.length; i < nx; i++) {
System.arraycopy$O$I$O$I$I(val[i], 0, data[i], 0, ny);
}
}, p$1);

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (_griddata) {
this.griddata=_griddata;
if (this.griddata == null ) {
return;
}var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
var newGrid=Clazz.new_($I$(2,1).c$$I$I$D$D$D$D,[nx, ny, this.xmin, this.xmax, this.ymin, this.ymax]);
if (this.grid != null ) {
newGrid.setColor$java_awt_Color(this.grid.getColor$());
newGrid.setVisible$Z(this.grid.isVisible$());
}this.grid=newGrid;
this.update$();
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.autoscaleZ=isAutoscale;
if (!this.autoscaleZ) {
this.colorMap.setScale$D$D(floor, ceil);
}this.update$();
});

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

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGrid) {
this.grid.setVisible$Z(showGrid);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.grid.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
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

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
var zMap=Clazz.new_($I$(5,1).c$$D,[expansionFactor]);
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
ceil=Math.max(Math.abs(this.minmax[1]), Math.abs(this.minmax[0]));
floor=-ceil;
}this.colorMap.setScale$D$D(floor, ceil);
}this.recolorImage$();
this.colorMap.updateLegend$org_opensourcephysics_display2d_ZExpansion(null);
});

Clazz.newMeth(C$, 'checkImage$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var lPix;
var rPix;
var bPix;
var tPix;
if (this.griddata.isCellData$()) {
var dx=this.griddata.getDx$();
var dy=this.griddata.getDy$();
lPix=panel.xToPix$D(this.griddata.getLeft$() - dx / 2);
rPix=panel.xToPix$D(this.griddata.getRight$() + dx / 2);
bPix=panel.yToPix$D(this.griddata.getBottom$() + dy / 2);
tPix=panel.yToPix$D(this.griddata.getTop$() - dy / 2);
} else {
lPix=panel.xToPix$D(this.griddata.getLeft$());
rPix=panel.xToPix$D(this.griddata.getRight$());
bPix=panel.yToPix$D(this.griddata.getBottom$());
tPix=panel.yToPix$D(this.griddata.getTop$());
}this.leftPix=Math.min(lPix, rPix);
this.rightPix=Math.max(lPix, rPix);
this.bottomPix=Math.max(bPix, tPix);
this.topPix=Math.min(bPix, tPix);
this.ixsize=this.rightPix - this.leftPix + 1;
this.iysize=this.bottomPix - this.topPix + 1;
this.leftPix=Math.max(0, this.leftPix);
this.rightPix=Math.min(this.rightPix, panel.getWidth$());
this.topPix=Math.max(0, this.topPix);
this.bottomPix=Math.min(this.bottomPix, panel.getHeight$());
var height=this.bottomPix - this.topPix + 1;
var width=this.rightPix - this.leftPix + 1;
if ((this.image != null ) && (this.image.getWidth$() == width) && (this.image.getHeight$() == height) && (this.left == panel.pixToX$I(this.leftPix) ) && (this.top == panel.pixToY$I(this.topPix) ) && (this.bottom == panel.pixToX$I(this.bottomPix) ) && (this.right == panel.pixToY$I(this.rightPix) )  ) {
return;
}this.left=panel.pixToX$I(this.leftPix);
this.top=panel.pixToY$I(this.topPix);
this.bottom=panel.pixToX$I(this.bottomPix);
this.right=panel.pixToY$I(this.rightPix);
if ((this.image != null ) && (this.image.getWidth$() == width) && (this.image.getHeight$() == height)  ) {
this.recolorImage$();
return;
}var size=height * width;
if ((size < 4) || (height > 4000) || (width > 4000)  ) {
this.image=null;
return;
}this.imageType=($I$(6).isJS ? -6 : 6);
this.image=Clazz.new_($I$(7,1).c$$I$I$I,[width, height, this.imageType]);
this.pixelData=(this.image.getRaster$().getDataBuffer$()).getData$();
this.recolorImage$();
});

Clazz.newMeth(C$, 'recolorImage$',  function () {
if (!this.visible) {
return;
}var griddata=this.griddata;
var image=this.image;
if (griddata == null ) {
return;
}if (griddata.isCellData$()) {
var dx=griddata.getDx$();
var dy=griddata.getDy$();
this.xmin=griddata.getLeft$() - dx / 2;
this.xmax=griddata.getRight$() + dx / 2;
this.ymin=griddata.getBottom$() + dy / 2;
this.ymax=griddata.getTop$() - dy / 2;
} else {
this.xmin=griddata.getLeft$();
this.xmax=griddata.getRight$();
this.ymin=griddata.getBottom$();
this.ymax=griddata.getTop$();
}this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
if (image == null ) {
return;
}if (this.pixelData.length != image.getWidth$() * image.getHeight$() * 4 ) {
return;
}var y=this.top;
var dx=(this.xmax - this.xmin) / (this.ixsize - 1);
var dy=(this.ymin - this.ymax) / (this.iysize - 1);
if (griddata.getDx$() < 0 ) {
dx=-dx;
}if (griddata.getDy$() > 0 ) {
dy=-dy;
}this.writeToRaster$D$D$D$D(this.left, y, dx, dy);
});

Clazz.newMeth(C$, 'writeToRaster$D$D$D$D',  function (x0, y, dx, dy) {
var width=this.image.getWidth$();
var height=this.image.getHeight$();
var pixels=this.pixelData;
var isABGR=(this.imageType == 6);
for (var i=0; i < height; i++, y+=dy) {
var x=x0;
for (var j=0; j < width; j++, x+=dx) {
var ret=this.colorMap.doubleToComponents$D(this.griddata.interpolate$D$D$I(x, y, this.ampIndex));
var pt=(i * width + j) << 2;
if (isABGR) {
pixels[pt++]=(-1|0);
pixels[pt++]=ret[2];
pixels[pt++]=ret[1];
pixels[pt++]=ret[0];
} else {
pixels[pt++]=ret[0];
pixels[pt++]=ret[1];
pixels[pt++]=ret[2];
pixels[pt++]=(-1|0);
}}
}
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$();
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.griddata != null ;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || (this.griddata == null ) ) {
return;
}this.checkImage$org_opensourcephysics_display_DrawingPanel(panel);
if (this.image != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, this.leftPix, this.topPix, panel);
}this.grid.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.InterpolatedPlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "InterpolatedPlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(8,1).c$$org_opensourcephysics_display2d_GridData,[null]);
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
), Clazz.new_($I$(9,1),[this, null],P$.InterpolatedPlot$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
