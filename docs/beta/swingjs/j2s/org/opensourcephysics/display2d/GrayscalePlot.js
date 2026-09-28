(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display.Grid','java.awt.Color','java.awt.image.BufferedImage','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display2d.GridPointData','org.opensourcephysics.display.axes.XAxis','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display2d.GrayscalePlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GrayscalePlot", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display2d.Plot2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoscaleZ=true;
this.symmetricZ=false;
this.zMap=null;
this.ampIndex=0;
},1);

C$.$fields$=[['Z',['autoscaleZ','symmetricZ'],'D',['floor','ceil'],'I',['ampIndex'],'O',['griddata','org.opensourcephysics.display2d.GridData','bwData','short[]','grid','org.opensourcephysics.display.Grid','zMap','org.opensourcephysics.display2d.ZExpansion','legendFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (griddata) {
Clazz.super_(C$, this);
this.setGridData$org_opensourcephysics_display2d_GridData(griddata);
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
}this.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
this.update$();
});

Clazz.newMeth(C$, 'copyData$DAA',  function (val) {
if ((this.griddata != null ) && !(Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["SetAll only supports ArrayData for data storage."]);
}if ((this.griddata == null ) || (this.griddata.getNx$() != val.length) || (this.griddata.getNy$() != val[0].length)  ) {
this.griddata=Clazz.new_($I$(1,1).c$$I$I$I,[val.length, val[0].length, 1]);
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
}var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
var newgrid=Clazz.new_($I$(2,1).c$$I$I$D$D$D$D,[nx, ny, this.xmin, this.xmax, this.ymin, this.ymax]);
if (this.grid != null ) {
newgrid.setColor$java_awt_Color(this.grid.getColor$());
newgrid.setVisible$Z(this.grid.isVisible$());
} else {
newgrid.setColor$java_awt_Color($I$(3).pink);
}this.grid=newgrid;
this.image=Clazz.new_($I$(4,1).c$$I$I$I,[ny, nx, 11]);
this.bwData=(this.image.getRaster$().getDataBuffer$()).getData$();
this.xmin=this.griddata.getLeft$();
this.xmax=this.griddata.getRight$();
this.ymin=this.griddata.getBottom$();
this.ymax=this.griddata.getTop$();
});

Clazz.newMeth(C$, 'showLegend$',  function () {
var dp=Clazz.new_($I$(5,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(8).getString$S("GUIUtils.Legend")],$I$(7,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(false);
this.legendFrame.setContentPane$java_awt_Container(dp);
var numColors=256;
var pointdata=Clazz.new_($I$(9,1).c$$I$I$I,[numColors, 1, 1]);
var data=pointdata.getData$();
var delta=(this.ceil - this.floor) / (numColors);
var cval=this.floor - delta / 2;
for (var i=0, n=data.length; i < n; i++) {
var c=cval;
if (this.zMap != null ) {
c=this.zMap.evaluate$D(c);
}data[i][0][2]=c;
cval+=delta;
}
pointdata.setScale$D$D$D$D(this.floor - delta, this.ceil + delta, 0, 1);
var cb=Clazz.new_(C$.c$$org_opensourcephysics_display2d_GridData,[pointdata]);
cb.setShowGridLines$Z(false);
cb.setAutoscaleZ$Z$D$D(false, this.floor, this.ceil);
cb.update$();
dp.addDrawable$org_opensourcephysics_display_Drawable(cb);
var xaxis=Clazz.new_($I$(10,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, _floor, _ceil) {
this.autoscaleZ=isAutoscale;
if (this.autoscaleZ) {
this.update$();
} else {
this.floor=_floor;
this.ceil=_ceil;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.floor, this.ceil);
}}});

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
return this.floor;
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.ceil;
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGrid) {
this.grid.setVisible$Z(showGrid);
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
this.zMap=Clazz.new_($I$(11,1).c$$D,[expansionFactor]);
this.zMap.setMinMax$D$D(this.floor, this.ceil);
} else {
this.zMap=null;
}});

Clazz.newMeth(C$, 'update$',  function () {
if (this.griddata == null ) {
return;
}if (this.autoscaleZ) {
this.griddata.getZRange$I$DA(this.ampIndex, this.minmax);
if (this.symmetricZ) {
this.ceil=Math.max(Math.abs(this.minmax[1]), Math.abs(this.minmax[0]));
this.floor=-this.ceil;
} else {
this.ceil=this.minmax[1];
this.floor=this.minmax[0];
}if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.floor, this.ceil);
}}this.recolorImage$();
if ((this.legendFrame != null ) && this.legendFrame.isDisplayable$() ) {
this.showLegend$();
}});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
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
}this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
var data=this.griddata.getData$();
var nx=this.griddata.getNx$();
var ny=this.griddata.getNy$();
var zscale=65534 / (this.ceil - this.floor);
if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.GridPointData")) {
var index=this.ampIndex + 2;
for (var iy=0, pt=0; iy < ny; iy++) {
for (var ix=0; ix < nx; ix++, pt++) {
var val=data[ix][iy][index];
if (this.zMap != null ) {
val=this.zMap.evaluate$D(val);
}val=zscale * (val - this.floor);
if (val < 0 ) {
this.bwData[pt]=(0|0);
} else if (val > 65534 ) {
this.bwData[pt]=(-1|0);
} else {
this.bwData[pt]=(val|0);
}}
}
} else if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) {
for (var iy=0, pt=0; iy < ny; iy++) {
for (var ix=0; ix < nx; ix++, pt++) {
var val=data[this.ampIndex][ix][iy];
if (this.zMap != null ) {
val=this.zMap.evaluate$D(val);
}val=zscale * (val - this.floor);
if (val < 0 ) {
this.bwData[pt]=(0|0);
} else if (val > 65534 ) {
this.bwData[pt]=(-1|0);
} else {
this.bwData[pt]=(val|0);
}}
}
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.griddata == null ) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
this.grid.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.grid.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.GrayscalePlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GrayscalePlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(12,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.GrayscalePlot$1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
