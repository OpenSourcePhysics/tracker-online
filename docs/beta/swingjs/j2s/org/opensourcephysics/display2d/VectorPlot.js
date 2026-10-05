(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.display2d.VectorColorMapper','org.opensourcephysics.display.Grid','java.awt.Color','org.opensourcephysics.display2d.ArrayData','java.awt.geom.AffineTransform','java.awt.geom.GeneralPath','org.opensourcephysics.display2d.VectorPlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorPlot", null, null, 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.arrowType=0;
this.visible=true;
this.autoscaleZ=true;
this.scaleArrowToGrid=true;
this.ampIndex=0;
this.aIndex=1;
this.bIndex=2;
this.minmax=Clazz.array(Double.TYPE, [2]);
},1);

C$.$fields$=[['Z',['visible','autoscaleZ','scaleArrowToGrid'],'D',['xmin','xmax','ymin','ymax'],'I',['arrowType','ampIndex','aIndex','bIndex'],'O',['vectorpath','java.awt.geom.GeneralPath','griddata','org.opensourcephysics.display2d.GridData','colorMap','org.opensourcephysics.display2d.VectorColorMapper','grid','org.opensourcephysics.display.Grid','minmax','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_display2d_GridData.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (_griddata) {
;C$.$init$.apply(this);
this.griddata=_griddata;
this.colorMap=Clazz.new_($I$(1,1).c$$I$D,[256, 1.0]);
if (this.griddata == null ) {
return;
}this.grid=(this.griddata.isCellData$()) ? Clazz.new_([this.griddata.getNx$(), this.griddata.getNy$()],$I$(2,1).c$$I$I) : Clazz.new_([this.griddata.getNx$() - 1, this.griddata.getNy$() - 1],$I$(2,1).c$$I$I);
this.grid.setColor$java_awt_Color($I$(3).lightGray);
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
p$1.copyVecData$DAAA.apply(this, [val]);
this.update$();
});

Clazz.newMeth(C$, 'setAll$O$D$D$D$D',  function (obj, xmin, xmax, ymin, ymax) {
var val=obj;
p$1.copyVecData$DAAA.apply(this, [val]);
if (this.griddata.isCellData$()) {
this.griddata.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
} else {
this.griddata.setScale$D$D$D$D(xmin, xmax, ymin, ymax);
}this.update$();
});

Clazz.newMeth(C$, 'copyVecData$DAAA',  function (vals) {
if ((this.griddata != null ) && !(Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["SetAll only supports ArrayData for data storage."]);
}if ((this.griddata == null ) || (this.griddata.getNx$() != vals[0].length) || (this.griddata.getNy$() != vals[0][0].length)  ) {
this.griddata=Clazz.new_($I$(4,1).c$$I$I$I,[vals[0].length, vals[0][0].length, 3]);
this.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
}var colorValue=this.griddata.getData$()[0];
var xComp=this.griddata.getData$()[1];
var yComp=this.griddata.getData$()[2];
var ny=vals[0][0].length;
for (var i=0, nx=vals[0].length; i < nx; i++) {
for (var j=0; j < ny; j++) {
colorValue[i][j]=Math.sqrt(vals[0][i][j] * vals[0][i][j] + vals[1][i][j] * vals[1][i][j]);
xComp[i][j]=(colorValue[i][j] == 0 ) ? 0 : vals[0][i][j] / colorValue[i][j];
yComp[i][j]=(colorValue[i][j] == 0 ) ? 0 : vals[1][i][j] / colorValue[i][j];
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
}var newgrid=(this.griddata.isCellData$()) ? Clazz.new_([this.griddata.getNx$(), this.griddata.getNy$()],$I$(2,1).c$$I$I) : Clazz.new_([this.griddata.getNx$() - 1, this.griddata.getNy$() - 1],$I$(2,1).c$$I$I);
newgrid.setColor$java_awt_Color($I$(3).lightGray);
newgrid.setVisible$Z(false);
if (this.grid != null ) {
newgrid.setColor$java_awt_Color(this.grid.getColor$());
newgrid.setVisible$Z(this.grid.isVisible$());
}this.grid=newgrid;
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
this.aIndex=indexes[1];
this.bIndex=indexes[2];
});

Clazz.newMeth(C$, 'setArrowType$I',  function (type) {
this.arrowType=type;
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (mode) {
this.colorMap.setPaletteType$I(mode);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
this.visible=vis;
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGrid) {
if (this.grid == null ) {
this.grid=Clazz.new_($I$(2,1).c$$I,[0]);
}this.grid.setVisible$Z(showGrid);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.grid.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || (this.griddata == null ) ) {
return;
}if (this.grid.isVisible$()) {
this.grid.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}this.colorMap.checkPallet$java_awt_Color(panel.getBackground$());
var griddata=this.griddata;
var data=griddata.getData$();
var dx=griddata.getDx$();
var dy=griddata.getDy$();
var left=griddata.getLeft$();
var top=griddata.getTop$();
var aspectRatio=panel.getAspectRatio$();
var arrowLength=Math.abs(panel.getYPixPerUnit$());
if (this.scaleArrowToGrid) {
arrowLength=Math.max(1, panel.getSize$().width / data.length / aspectRatio  - 1);
arrowLength=Math.min(18, arrowLength * 0.72);
}switch (this.arrowType) {
case 0:
this.vectorpath=C$.createVectorPath$F(arrowLength);
break;
case 1:
this.vectorpath=C$.createFilledVectorPath$F(arrowLength);
break;
default:
this.vectorpath=C$.createVectorPath$F(arrowLength);
}
var sgnx=(panel.getXPixPerUnit$() < 0 ) ? sgnx=-1 : 1;
var sgny=(panel.getYPixPerUnit$() < 0 ) ? sgny=-1 : 1;
var amp=0;
var a=0;
var b=0;
var x=0;
var y=0;
var background=panel.getBackground$();
for (var i=0, nx=griddata.getNx$(); i < nx; i++) {
for (var j=0, ny=griddata.getNy$(); j < ny; j++) {
if (Clazz.instanceOf(griddata, "org.opensourcephysics.display2d.GridPointData")) {
x=data[i][j][0];
y=data[i][j][1];
amp=data[i][j][this.ampIndex + 2];
a=data[i][j][this.aIndex + 2];
b=data[i][j][this.bIndex + 2];
} else if (Clazz.instanceOf(griddata, "org.opensourcephysics.display2d.ArrayData")) {
x=left + i * dx;
y=top + j * dy;
amp=data[this.ampIndex][i][j];
a=data[this.aIndex][i][j];
b=data[this.bIndex][i][j];
}var g2=g;
var c=this.colorMap.doubleToColor$D(amp);
if (background === c ) {
continue;
}g2.setColor$java_awt_Color(this.colorMap.doubleToColor$D(amp));
var at=Clazz.new_([sgnx * aspectRatio * a , -sgny * b, sgnx * aspectRatio * b , sgny * a, panel.xToPix$D(x), panel.yToPix$D(y)],$I$(5,1).c$$D$D$D$D$D$D);
var s=this.vectorpath.createTransformedShape$java_awt_geom_AffineTransform(at);
switch (this.arrowType) {
case 0:
g2.draw$java_awt_Shape(s);
break;
case 1:
g2.fill$java_awt_Shape(s);
break;
default:
g2.draw$java_awt_Shape(s);
}
}
}
});

Clazz.newMeth(C$, 'scaleArrowLenghToGrid$Z',  function (scaleToGrid) {
this.scaleArrowToGrid=scaleToGrid;
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
return this.colorMap.getCeiling$();
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$();
});

Clazz.newMeth(C$, 'update$',  function () {
if (this.griddata == null ) {
return;
}if (this.autoscaleZ) {
this.griddata.getZRange$I$DA(this.ampIndex, this.minmax);
this.colorMap.setScale$D(this.minmax[1]);
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
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
});

Clazz.newMeth(C$, 'createVectorPath$F',  function (size) {
var head=Math.min(15, 1 + size / 5);
var path=Clazz.new_($I$(6,1));
path.moveTo$F$F(-size / 2, 0);
path.lineTo$F$F(size / 2, 0);
path.lineTo$F$F(size / 2 - head, 2.0 * head / 3);
path.lineTo$F$F(size / 2, 0);
path.lineTo$F$F(size / 2 - head, -2.0 * head / 3);
return path;
}, 1);

Clazz.newMeth(C$, 'createFilledVectorPath$F',  function (size) {
var head=Math.min(15, 1 + size / 5);
var path=Clazz.new_($I$(6,1));
path.moveTo$F$F(-size / 2, 1);
path.lineTo$F$F(size / 2 - head, 1);
path.lineTo$F$F(size / 2 - head, 2 * head / 3);
path.lineTo$F$F(size / 2, 0);
path.lineTo$F$F(size / 2 - head, -2 * head / 3);
path.lineTo$F$F(size / 2 - head, -1);
path.moveTo$F$F(-size / 2, -1);
return path;
}, 1);

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.griddata != null ;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.VectorPlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorPlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(7,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.VectorPlot$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
