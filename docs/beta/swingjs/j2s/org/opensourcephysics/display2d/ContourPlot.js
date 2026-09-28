(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'java.awt.Color','org.opensourcephysics.display2d.ContourAccumulator','org.opensourcephysics.display2d.ColorMapper','org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display2d.ContourPlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ContourPlot", null, null, 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineColor=Clazz.new_($I$(1,1).c$$I$I$I,[0, 64, 0]);
this.visible=true;
this.contour_lines=12;
this.showContourLines=true;
this.showColoredLevels=true;
this.xpoints=Clazz.array(Integer.TYPE, [8]);
this.ypoints=Clazz.array(Integer.TYPE, [8]);
this.contour_x=Clazz.array(Integer.TYPE, [8]);
this.contour_y=Clazz.array(Integer.TYPE, [8]);
this.delta=Clazz.array(Double.TYPE, [4]);
this.intersection=Clazz.array(Double.TYPE, [4]);
this.contour_vertex=Clazz.array(Double.TYPE, [4, 3]);
this.accumulator=Clazz.new_($I$(2,1));
this.zmin=0;
this.zmax=1.0;
this.autoscaleZ=true;
this.symmetricZ=false;
this.zMap=null;
this.colorMap=Clazz.new_($I$(3,1).c$$I$D$D$I,[this.contour_lines, this.zmin, this.zmax, 0]);
this.contourColors=Clazz.array($I$(1), [this.contour_lines + 2]);
this.internalData=Clazz.array(Double.TYPE, [1, 1]);
this.ampIndex=0;
this.nx=0;
this.ny=0;
this.maxGridSize=48;
this.interpolateLargeGrids=true;
this.minmax=Clazz.array(Double.TYPE, [2]);
},1);

C$.$fields$=[['Z',['visible','showContourLines','showColoredLevels','autoscaleZ','symmetricZ','interpolateLargeGrids'],'D',['contour_stepz','zmin','zmax'],'I',['contour_lines','ampIndex','nx','ny','maxGridSize'],'O',['griddata','org.opensourcephysics.display2d.GridData','lineColor','java.awt.Color','xpoints','int[]','+ypoints','+contour_x','+contour_y','delta','double[]','+intersection','contour_vertex','double[][]','accumulator','org.opensourcephysics.display2d.ContourAccumulator','zMap','org.opensourcephysics.display2d.ZExpansion','colorMap','org.opensourcephysics.display2d.ColorMapper','contourColors','java.awt.Color[]','internalData','double[][]','minmax','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (_griddata) {
;C$.$init$.apply(this);
this.griddata=_griddata;
if (this.griddata == null ) {
return;
}this.nx=(this.interpolateLargeGrids && (this.griddata.getNx$() > this.maxGridSize) ) ? 32 : this.griddata.getNx$();
this.ny=(this.interpolateLargeGrids && (this.griddata.getNy$() > this.maxGridSize) ) ? 32 : this.griddata.getNy$();
this.internalData=Clazz.array(Double.TYPE, [this.nx, this.ny]);
this.update$();
}, 1);

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

Clazz.newMeth(C$, 'getGridData$',  function () {
return this.griddata;
});

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (_griddata) {
this.griddata=_griddata;
if (this.griddata == null ) {
return;
}this.nx=(this.interpolateLargeGrids && (this.griddata.getNx$() > this.maxGridSize) ) ? 32 : this.griddata.getNx$();
this.ny=(this.interpolateLargeGrids && (this.griddata.getNy$() > this.maxGridSize) ) ? 32 : this.griddata.getNy$();
this.internalData=Clazz.array(Double.TYPE, [this.nx, this.ny]);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$org_opensourcephysics_display2d_ZExpansion(this.zMap);
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showLines) {
this.showContourLines=showLines;
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (color) {
this.lineColor=color;
});

Clazz.newMeth(C$, 'setShowColorLevels$Z',  function (show) {
this.showColoredLevels=show;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || (this.griddata == null ) ) {
return;
}if (!this.autoscaleZ && this.showColoredLevels ) {
g.setColor$java_awt_Color(this.colorMap.getFloorColor$());
var w=panel.getWidth$() - panel.getLeftGutter$() - panel.getRightGutter$() ;
var h=panel.getHeight$() - panel.getTopGutter$() - panel.getBottomGutter$() ;
g.fillRect$I$I$I$I(panel.getLeftGutter$(), panel.getTopGutter$(), Math.max(w, 0), Math.max(h, 0));
}this.accumulator.clearAccumulator$();
this.contour_stepz=(this.zmax - this.zmin) / (this.contour_lines + 1);
var z=this.zmin;
for (var c=0; c < this.contourColors.length; c++) {
if (!this.autoscaleZ && (c == this.contourColors.length - 1) ) {
this.contourColors[c]=this.colorMap.getCeilColor$();
} else {
this.contourColors[c]=this.colorMap.doubleToColor$D(z);
}z+=this.contour_stepz;
}
var x=this.griddata.getLeft$();
var dx=(this.griddata.getRight$() - this.griddata.getLeft$()) / (this.nx - 1);
var y=this.griddata.getTop$();
var dy=-(this.griddata.getTop$() - this.griddata.getBottom$()) / (this.ny - 1);
for (var i=0, mx=this.internalData.length - 1; i < mx; i++) {
y=this.griddata.getTop$();
for (var j=0, my=this.internalData[0].length - 1; j < my; j++) {
this.contour_vertex[0][0]=x;
this.contour_vertex[0][1]=y;
this.contour_vertex[0][2]=this.internalData[i][j];
this.contour_vertex[1][0]=x;
this.contour_vertex[1][1]=y + dy;
this.contour_vertex[1][2]=this.internalData[i][j + 1];
this.contour_vertex[2][0]=x + dx;
this.contour_vertex[2][1]=y + dy;
this.contour_vertex[2][2]=this.internalData[i + 1][j + 1];
this.contour_vertex[3][0]=x + dx;
this.contour_vertex[3][1]=y;
this.contour_vertex[3][2]=this.internalData[i + 1][j];
p$1.createContour$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
y+=dy;
}
x+=dx;
}
if (this.showContourLines) {
g.setColor$java_awt_Color(this.lineColor);
this.accumulator.drawAll$java_awt_Graphics(g);
var lpix=panel.xToPix$D(this.griddata.getLeft$());
var tpix=panel.yToPix$D(this.griddata.getTop$());
var rpix=panel.xToPix$D(this.griddata.getRight$());
var bpix=panel.yToPix$D(this.griddata.getBottom$());
g.drawRect$I$I$I$I(Math.min(lpix, rpix), Math.min(tpix, bpix), Math.abs(lpix - rpix), Math.abs(tpix - bpix));
}});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.autoscaleZ=isAutoscale;
if (this.autoscaleZ) {
this.update$();
} else {
this.zmax=ceil;
this.zmin=floor;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
}this.colorMap.setScale$D$D(this.zmin, this.zmax);
}});

Clazz.newMeth(C$, 'setSymmetricZ$Z',  function (symmetric) {
this.symmetricZ=symmetric;
});

Clazz.newMeth(C$, 'isSymmetricZ$',  function () {
return this.symmetricZ;
});

Clazz.newMeth(C$, 'setInterpolateLargeGrids$Z',  function (interpolate) {
this.interpolateLargeGrids=interpolate;
});

Clazz.newMeth(C$, 'isInterpolateLargeGrids$',  function () {
return this.interpolateLargeGrids;
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
this.zMap=Clazz.new_($I$(5,1).c$$D,[expansionFactor]);
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
} else {
this.zMap=null;
}});

Clazz.newMeth(C$, 'isAutoscaleZ$',  function () {
return this.autoscaleZ;
});

Clazz.newMeth(C$, 'getFloor$',  function () {
return this.colorMap.getFloor$();
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.colorMap.getCeil$();
});

Clazz.newMeth(C$, 'update$',  function () {
if (this.griddata == null ) {
return;
}if ((this.interpolateLargeGrids && (this.nx != this.griddata.getNx$()) ) || (this.ny != this.griddata.getNy$()) ) {
this.updateInterpolated$org_opensourcephysics_display2d_GridData(this.griddata);
} else {
this.updateDirect$org_opensourcephysics_display2d_GridData(this.griddata);
}this.colorMap.updateLegend$org_opensourcephysics_display2d_ZExpansion(this.zMap);
});

Clazz.newMeth(C$, 'updateInterpolated$org_opensourcephysics_display2d_GridData',  function (griddata) {
if (this.autoscaleZ) {
griddata.getZRange$I$DA(this.ampIndex, this.minmax);
if (this.symmetricZ) {
this.zmax=Math.max(Math.abs(this.minmax[1]), Math.abs(this.minmax[0]));
this.zmin=-this.zmax;
} else {
this.zmax=this.minmax[1];
this.zmin=this.minmax[0];
}if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
}this.colorMap.setScale$D$D(this.zmin, this.zmax);
}var x=griddata.getLeft$();
var dx=(griddata.getRight$() - griddata.getLeft$()) / (this.nx - 1);
var y=griddata.getTop$();
var dy=-(griddata.getTop$() - griddata.getBottom$()) / (this.ny - 1);
for (var i=0; i < this.nx; i++) {
y=griddata.getTop$();
for (var j=0; j < this.ny; j++) {
this.internalData[i][j]=griddata.interpolate$D$D$I(x, y, this.ampIndex);
if (this.zMap != null ) {
this.internalData[i][j]=this.zMap.evaluate$D(this.internalData[i][j]);
}y+=dy;
}
x+=dx;
}
});

Clazz.newMeth(C$, 'updateDirect$org_opensourcephysics_display2d_GridData',  function (griddata) {
if (griddata == null ) {
return;
}if (this.autoscaleZ) {
griddata.getZRange$I$DA(this.ampIndex, this.minmax);
if (this.symmetricZ) {
this.zmax=Math.max(Math.abs(this.minmax[1]), Math.abs(this.minmax[0]));
this.zmin=-this.zmax;
} else {
this.zmax=this.minmax[1];
this.zmin=this.minmax[0];
}if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
}this.colorMap.setScale$D$D(this.zmin, this.zmax);
}if (Clazz.instanceOf(griddata, "org.opensourcephysics.display2d.ArrayData")) {
var arrayData=griddata.getData$()[this.ampIndex];
for (var i=0; i < this.nx; i++) {
System.arraycopy$O$I$O$I$I(arrayData[i], 0, this.internalData[i], 0, this.ny);
if (this.zMap != null ) {
for (var j=0; j < this.ny; j++) {
this.internalData[i][j]=this.zMap.evaluate$D(this.internalData[i][j]);
}
}}
} else if (Clazz.instanceOf(griddata, "org.opensourcephysics.display2d.GridPointData")) {
var ptdata=griddata.getData$();
for (var i=0, nx=ptdata.length; i < nx; i++) {
for (var j=0, ny=ptdata[0].length; j < ny; j++) {
this.internalData[i][j]=ptdata[i][j][2 + this.ampIndex];
if (this.zMap != null ) {
this.internalData[i][j]=this.zMap.evaluate$D(this.internalData[i][j]);
}}
}
}});

Clazz.newMeth(C$, 'createContour$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var z=this.zmin;
this.xpoints[0]=panel.xToPix$D(this.contour_vertex[0][0]) + 1;
this.xpoints[2]=panel.xToPix$D(this.contour_vertex[1][0]) + 1;
this.xpoints[4]=panel.xToPix$D(this.contour_vertex[2][0]) + 1;
this.xpoints[6]=panel.xToPix$D(this.contour_vertex[3][0]) + 1;
this.xpoints[1]=this.xpoints[3]=this.xpoints[5]=this.xpoints[7]=-1;
this.ypoints[0]=panel.yToPix$D(this.contour_vertex[0][1]) + 1;
this.ypoints[4]=panel.yToPix$D(this.contour_vertex[2][1]) + 1;
this.ypoints[2]=this.ypoints[3]=panel.yToPix$D(this.contour_vertex[1][1]) + 1;
this.ypoints[6]=this.ypoints[7]=panel.yToPix$D(this.contour_vertex[3][1]) + 1;
var xmin=this.xpoints[0];
var xmax=this.xpoints[4];
for (var counter=0; counter <= this.contour_lines + 1; counter++) {
for (var edge=0; edge < 4; edge++) {
var index=(edge << 1) + 1;
var nextedge=(edge + 1) & 3;
if (z > this.contour_vertex[edge][2] ) {
this.xpoints[index - 1]=-2;
if (z > this.contour_vertex[nextedge][2] ) {
this.xpoints[(index + 1) & 7]=-2;
this.xpoints[index]=-2;
}} else if (z > this.contour_vertex[nextedge][2] ) {
this.xpoints[(index + 1) & 7]=-2;
}if (this.xpoints[index] != -2) {
if (this.xpoints[index] != -1) {
this.intersection[edge]+=this.delta[edge];
if ((index == 1) || (index == 5) ) {
this.ypoints[index]=panel.yToPix$D(this.intersection[edge]) + 1;
} else {
this.xpoints[index]=panel.xToPix$D(this.intersection[edge]) + 1;
}} else {
if ((z > this.contour_vertex[edge][2] ) || (z > this.contour_vertex[nextedge][2] ) ) {
switch (index) {
case 1:
this.delta[edge]=(this.contour_vertex[nextedge][1] - this.contour_vertex[edge][1]) * this.contour_stepz / (this.contour_vertex[nextedge][2] - this.contour_vertex[edge][2]);
this.intersection[edge]=(this.contour_vertex[nextedge][1] * (z - this.contour_vertex[edge][2]) + this.contour_vertex[edge][1] * (this.contour_vertex[nextedge][2] - z)) / (this.contour_vertex[nextedge][2] - this.contour_vertex[edge][2]);
this.xpoints[index]=xmin;
this.ypoints[index]=panel.yToPix$D(this.intersection[edge]) + 1;
break;
case 3:
this.delta[edge]=(this.contour_vertex[nextedge][0] - this.contour_vertex[edge][0]) * this.contour_stepz / (this.contour_vertex[nextedge][2] - this.contour_vertex[edge][2]);
this.intersection[edge]=(this.contour_vertex[nextedge][0] * (z - this.contour_vertex[edge][2]) + this.contour_vertex[edge][0] * (this.contour_vertex[nextedge][2] - z)) / (this.contour_vertex[nextedge][2] - this.contour_vertex[edge][2]);
this.xpoints[index]=panel.xToPix$D(this.intersection[edge]) + 1;
break;
case 5:
this.delta[edge]=(this.contour_vertex[edge][1] - this.contour_vertex[nextedge][1]) * this.contour_stepz / (this.contour_vertex[edge][2] - this.contour_vertex[nextedge][2]);
this.intersection[edge]=(this.contour_vertex[edge][1] * (z - this.contour_vertex[nextedge][2]) + this.contour_vertex[nextedge][1] * (this.contour_vertex[edge][2] - z)) / (this.contour_vertex[edge][2] - this.contour_vertex[nextedge][2]);
this.xpoints[index]=xmax;
this.ypoints[index]=panel.yToPix$D(this.intersection[edge]) + 1;
break;
case 7:
this.delta[edge]=(this.contour_vertex[edge][0] - this.contour_vertex[nextedge][0]) * this.contour_stepz / (this.contour_vertex[edge][2] - this.contour_vertex[nextedge][2]);
this.intersection[edge]=(this.contour_vertex[edge][0] * (z - this.contour_vertex[nextedge][2]) + this.contour_vertex[nextedge][0] * (this.contour_vertex[edge][2] - z)) / (this.contour_vertex[edge][2] - this.contour_vertex[nextedge][2]);
this.xpoints[index]=panel.xToPix$D(this.intersection[edge]) + 1;
break;
}
}}}}
var contour_n=0;
for (var index=0; index < 8; index++) {
if (this.xpoints[index] >= 0) {
this.contour_x[contour_n]=this.xpoints[index];
this.contour_y[contour_n]=this.ypoints[index];
++contour_n;
}}
if (this.showColoredLevels && (this.colorMap.getPaletteType$() != 7) ) {
g.setColor$java_awt_Color(this.contourColors[counter]);
if (contour_n > 0) {
g.fillPolygon$IA$IA$I(this.contour_x, this.contour_y, contour_n);
}}if (this.showContourLines) {
var x=-1;
var y=-1;
for (var index=1; index < 8; index+=2) {
if (this.xpoints[index] >= 0) {
if (x != -1) {
this.accumulator.addLine$I$I$I$I(x, y, this.xpoints[index], this.ypoints[index]);
}x=this.xpoints[index];
y=this.ypoints[index];
}}
if ((this.xpoints[1] > 0) && (x != -1) ) {
this.accumulator.addLine$I$I$I$I(x, y, this.xpoints[1], this.ypoints[1]);
}}if (contour_n < 3) {
break;
}z+=this.contour_stepz;
}
}, p$1);

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
this.colorMap.setColorPalette$java_awt_ColorA(colors);
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (mode) {
this.colorMap.setPaletteType$I(mode);
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
this.colorMap.setFloorCeilColor$java_awt_Color$java_awt_Color(floorColor, ceilColor);
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
});

Clazz.newMeth(C$, 'setNumberOfLevels$I',  function (n) {
this.contour_lines=n;
this.colorMap.setNumberOfColors$I(n);
this.contourColors=Clazz.array($I$(1), [this.contour_lines + 2]);
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.griddata.getLeft$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.griddata.getRight$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.griddata.getBottom$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.griddata.getTop$();
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.griddata != null ;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.ContourPlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContourPlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var plot=obj;
control.setValue$S$O("line color", plot.lineColor);
control.setValue$S$O("color map", plot.colorMap);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(6,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var plot=obj;
plot.lineColor=control.getObject$S("line color");
plot.colorMap=control.getObject$S("color map");
return plot;
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.ContourPlot$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
