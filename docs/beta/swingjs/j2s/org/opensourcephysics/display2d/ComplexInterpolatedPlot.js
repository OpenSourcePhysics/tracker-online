(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ComplexColorMapper','org.opensourcephysics.display.Grid','java.awt.Color','org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display.OSPRuntime','java.awt.image.BufferedImage','org.opensourcephysics.display2d.ComplexInterpolatedPlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexInterpolatedPlot", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoscaleZ=true;
this.ampIndex=0;
this.reIndex=1;
this.imIndex=2;
this.indexes=Clazz.array(Integer.TYPE, -1, [this.ampIndex, this.reIndex, this.imIndex]);
this.samples=Clazz.array(Double.TYPE, [3]);
this.tempRGB=Clazz.array(Byte.TYPE, [3]);
},1);

C$.$fields$=[['Z',['autoscaleZ'],'D',['top','left','bottom','right'],'I',['ampIndex','reIndex','imIndex','leftPix','rightPix','topPix','bottomPix','ixsize','iysize','imageType'],'O',['griddata','org.opensourcephysics.display2d.GridData','pixelData','byte[]','grid','org.opensourcephysics.display.Grid','colorMap','org.opensourcephysics.display2d.ComplexColorMapper','indexes','int[]','samples','double[]','tempRGB','byte[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (_griddata) {
Clazz.super_(C$, this);
this.griddata=_griddata;
this.colorMap=Clazz.new_($I$(1,1).c$$D,[1]);
if (this.griddata == null ) {
this.grid=Clazz.new_($I$(2,1).c$$I$I$D$D$D$D,[1, 1, this.xmin, this.xmax, this.ymin, this.ymax]);
} else {
this.grid=Clazz.new_([this.griddata.getNx$(), this.griddata.getNy$(), this.xmin, this.xmax, this.ymin, this.ymax],$I$(2,1).c$$I$I$D$D$D$D);
}this.grid.setColor$java_awt_Color($I$(3).lightGray);
this.grid.setVisible$Z(false);
this.update$();
}, 1);

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
this.griddata=Clazz.new_($I$(4,1).c$$I$I$I,[vals[0].length, vals[0][0].length, 3]);
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

Clazz.newMeth(C$, 'getGridData$',  function () {
return this.griddata;
});

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (_griddata) {
this.griddata=_griddata;
if (this.griddata == null ) {
return;
}var newgrid=Clazz.new_([this.griddata.getNx$(), this.griddata.getNy$()],$I$(2,1).c$$I$I);
newgrid.setColor$java_awt_Color($I$(3).lightGray);
if (this.grid != null ) {
newgrid.setColor$java_awt_Color(this.grid.getColor$());
newgrid.setVisible$Z(this.grid.isVisible$());
} else {
newgrid.setColor$java_awt_Color($I$(3).lightGray);
}this.grid=newgrid;
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
this.reIndex=indexes[1];
this.imIndex=indexes[2];
indexes=Clazz.array(Integer.TYPE, -1, [this.ampIndex, this.reIndex, this.imIndex]);
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D',  function (isAutoscale, ceil) {
this.autoscaleZ=isAutoscale;
if (this.autoscaleZ) {
this.update$();
} else {
this.colorMap.setScale$D(ceil);
}});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.setAutoscaleZ$Z$D(isAutoscale, ceil);
});

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
this.grid.setVisible$Z(showGrid);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.grid.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'update$',  function () {
if (this.autoscaleZ && (this.griddata != null ) ) {
this.griddata.getZRange$I$DA(this.ampIndex, this.minmax);
this.colorMap.setScale$D(this.minmax[1]);
}this.recolorImage$();
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
var zMap=Clazz.new_($I$(5,1).c$$D,[expansionFactor]);
this.colorMap.setZMap$org_opensourcephysics_display2d_ZExpansion(zMap);
} else {
this.colorMap.setZMap$org_opensourcephysics_display2d_ZExpansion(null);
}});

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
var haveImage=(this.image != null ) && (this.image.getWidth$() == width) && (this.image.getHeight$() == height)  ;
if (haveImage && (this.left == panel.pixToX$I(this.leftPix) ) && (this.top == panel.pixToY$I(this.topPix) ) && (this.bottom == panel.pixToX$I(this.bottomPix) ) && (this.right == panel.pixToY$I(this.rightPix) )  ) {
return;
}this.left=panel.pixToX$I(this.leftPix);
this.top=panel.pixToY$I(this.topPix);
this.bottom=panel.pixToX$I(this.bottomPix);
this.right=panel.pixToY$I(this.rightPix);
if (haveImage) {
this.recolorImage$();
return;
}var size=height * width;
if (size < 4) {
this.image=null;
return;
}this.imageType=($I$(6).isJS ? -6 : 6);
this.image=Clazz.new_($I$(7,1).c$$I$I$I,[width, height, this.imageType]);
this.pixelData=(this.image.getRaster$().getDataBuffer$()).getData$();
this.update$();
});

Clazz.newMeth(C$, 'recolorImage$',  function () {
var griddata=this.griddata;
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
for (var j=0; j < height; j++, y+=dy) {
var x=this.left;
for (var i=0; i < width; i++, x+=dx) {
var pt=((dy < 0 ) ? j * width + i : (height - j - 1 ) * width + i) << 2;
var ret=this.colorMap.sampleToPixel$DA$BA(this.griddata.interpolate$D$D$IA$DA(x, y, this.indexes, this.samples), this.tempRGB);
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

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$();
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
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
return ((P$.ComplexInterpolatedPlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexInterpolatedPlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(8,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.ComplexInterpolatedPlot$1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
