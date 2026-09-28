(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'java.awt.image.BufferedImage','org.opensourcephysics.display.Grid','java.awt.Color','org.opensourcephysics.display2d.SiteLattice','java.util.Random','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display2d.CellLattice','org.opensourcephysics.display.axes.XAxis']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CellLatticePC", null, 'org.opensourcephysics.display.MeasuredImage', [['org.opensourcephysics.display2d.CellLattice','org.opensourcephysics.display2d.CellLattice.OSLattice']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rgb=Clazz.array(Integer.TYPE, [256]);
},1);

C$.$fields$=[['I',['ny','nx'],'O',['rasterData','int[]','grid','org.opensourcephysics.display.Grid','rgb','int[]','data','byte[][]','legendFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$I$I',  function (_nx, _ny) {
Clazz.super_(C$, this);
this.createDefaultColors$();
p$1.init$I$I.apply(this, [_nx, _ny]);
}, 1);

Clazz.newMeth(C$, 'init$I$I',  function (_nx, _ny) {
this.ny=_ny;
this.nx=_nx;
this.data=Clazz.array(Byte.TYPE, [this.nx, this.ny]);
this.image=Clazz.new_($I$(1,1).c$$I$I$I,[this.nx, this.ny, 1]);
this.rasterData=(this.image.getRaster$().getDataBuffer$()).getData$();
this.xmin=0;
this.xmax=this.nx;
this.ymin=0;
this.ymax=this.ny;
var oldGrid=this.grid;
this.grid=Clazz.new_($I$(2,1).c$$I$I$D$D$D$D,[this.nx, this.ny, this.xmin, this.xmax, this.ymin, this.ymax]);
if (oldGrid == null ) {
this.grid.setColor$java_awt_Color($I$(3).lightGray);
} else {
this.grid.setColor$java_awt_Color(oldGrid.getColor$());
this.grid.setVisible$Z(oldGrid.isVisible$());
}var color=this.rgb[0];
for (var i=this.rasterData.length; --i >= 0; ) this.rasterData[i]=color;

}, p$1);

Clazz.newMeth(C$, 'createSiteLattice$',  function () {
var lattice=Clazz.new_($I$(4,1).c$$I$I,[this.nx, this.ny]);
lattice.setBlock$BAA(this.data);
lattice.setMinMax$D$D$D$D(this.getXMin$(), this.getXMax$(), this.getYMin$(), this.getYMax$());
var colors=Clazz.array($I$(3), [this.rgb.length]);
for (var i=0; i < colors.length; i++) {
colors[i]=Clazz.new_($I$(3,1).c$$I,[this.rgb[i]]);
}
lattice.setColorPalette$java_awt_ColorA(colors);
return lattice;
});

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (_nx, _ny) {
p$1.init$I$I.apply(this, [_nx, _ny]);
});

Clazz.newMeth(C$, 'setXMin$D',  function (_value) {
C$.superclazz.prototype.setXMin$D.apply(this, [_value]);
this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'setXMax$D',  function (_value) {
C$.superclazz.prototype.setXMax$D.apply(this, [_value]);
this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'setYMin$D',  function (_value) {
C$.superclazz.prototype.setYMin$D.apply(this, [_value]);
this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'setYMax$D',  function (_value) {
C$.superclazz.prototype.setYMax$D.apply(this, [_value]);
this.grid.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.nx;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.ny;
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
C$.superclazz.prototype.setMinMax$D$D$D$D.apply(this, [xmin, xmax, ymin, ymax]);
this.grid.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
this.grid.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'setAll$BAA',  function (val) {
if ((this.getNx$() != val.length) || (this.getNy$() != val[0].length) ) {
this.resizeLattice$I$I(val.length, val[0].length);
}this.setBlock$I$I$BAA(0, 0, val);
});

Clazz.newMeth(C$, 'setAll$BAA$D$D$D$D',  function (val, xmin, xmax, ymin, ymax) {
this.setAll$BAA(val);
this.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setBlock$BAA',  function (val) {
this.setBlock$I$I$BAA(0, 0, val);
});

Clazz.newMeth(C$, 'setBlock$I$I$BAA',  function (ix_offset, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val[0].length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Y index out of range in byte lattice setSiteBlock."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["X index out of range in byte lattice setSiteBlock."]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.data[ix][iy]=val[ix - ix_offset][iy - iy_offset];
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
}
}
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (ix_offset, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val[0].length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Y index out of range in byte lattice setSiteBlock."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["X index out of range in byte lattice setSiteBlock."]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.data[ix][iy]=(val[ix - ix_offset][iy - iy_offset]|0);
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
}
}
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (ix, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val.length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Y offset out of range in binary lattice setCol."]);
}if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["X index out of range in binary lattice setCol."]);
}for (var iy=iy_offset, my=val.length + iy_offset; iy < my; iy++) {
var v=val[iy - iy_offset];
this.data[ix][iy]=v;
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
}
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (iy, ix_offset, val) {
if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Y index out of range in binary lattice setRow."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["X offset out of range in binary lattice setRow."]);
}for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.data[ix][iy]=val[ix - ix_offset];
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
}
});

Clazz.newMeth(C$, 'setValue$I$I$B',  function (ix, iy, val) {
this.data[ix][iy]=val;
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
});

Clazz.newMeth(C$, 'getValue$I$I',  function (ix, iy) {
return this.data[ix][iy];
});

Clazz.newMeth(C$, 'indexFromPoint$D$D',  function (x, y) {
var nx=this.getNx$();
var ny=this.getNy$();
var xMin=this.getXMin$();
var xMax=this.getXMax$();
var yMin=this.getYMin$();
var yMax=this.getYMax$();
var deltaX=(x - xMin) / (xMax - xMin);
var deltaY=(y - yMin) / (yMax - yMin);
var ix=((deltaX * nx)|0);
var iy=((deltaY * ny)|0);
if ((ix < 0) || (iy < 0) || (ix >= nx) || (iy >= ny)  ) {
return -1;
}return iy * nx + ix;
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
var nx=this.getNx$();
var xMin=this.getXMin$();
var xMax=this.getXMax$();
var deltaX=(x - xMin) / (xMax - xMin);
var ix=((deltaX * nx)|0);
if (ix < 0) {
return 0;
}if (ix >= nx) {
return nx - 1;
}return ix;
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
var ny=this.getNy$();
var yMin=this.getYMin$();
var yMax=this.getYMax$();
var deltaY=(y - yMin) / (yMax - yMin);
var iy=((deltaY * ny)|0);
if (iy < 0) {
return 0;
}if (iy >= ny) {
return ny - 1;
}return iy;
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGridLines) {
this.grid.setVisible$Z(showGridLines);
});

Clazz.newMeth(C$, 'randomize$',  function () {
var random=Clazz.new_($I$(5,1));
for (var iy=0; iy < this.ny; iy++) {
for (var ix=0; ix < this.nx; ix++) {
this.data[ix][iy]=(random.nextInt$I(256)|0);
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
}
}
});

Clazz.newMeth(C$, 'showLegend$',  function () {
var dp=Clazz.new_($I$(6,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(9).getString$S("GUIUtils.Legend")],$I$(8,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(false);
this.legendFrame.setContentPane$java_awt_Container(dp);
var lattice=Clazz.new_($I$(10,1).c$$I$I,[256, 1]);
lattice.setMinMax$D$D$D$D(-128, 127, 0, 1);
var data=Clazz.array(Byte.TYPE, [256, 1]);
for (var i=0; i < 256; i++) {
data[i][0]=((-128 + i)|0);
}
lattice.setBlock$I$I$BAA(0, 0, data);
var colors=Clazz.array($I$(3), [256]);
for (var i=0; i < 256; i++) {
colors[i]=Clazz.new_($I$(3,1).c$$I,[this.rgb[i]]);
}
lattice.setColorPalette$java_awt_ColorA(colors);
dp.addDrawable$org_opensourcephysics_display_Drawable(lattice);
var xaxis=Clazz.new_($I$(11,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
for (var i=0, n=Math.min(256, colors.length); i < n; i++) {
this.rgb[i]=colors[i].getRGB$();
}
for (var i=colors.length; i < 256; i++) {
this.rgb[i]=0;
}
p$1.setRasterData.apply(this, []);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (color) {
this.grid.setColor$java_awt_Color(color);
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
i=(i + 256) % this.rgb.length;
this.rgb[i]=color.getRGB$();
p$1.setRasterData.apply(this, []);
});

Clazz.newMeth(C$, 'setRasterData',  function () {
for (var ix=0; ix < this.nx; ix++) {
for (var iy=0; iy < this.ny; iy++) {
var pt=(this.ny - iy - 1 ) * this.nx + ix;
this.rasterData[pt]=this.rgb[this.data[ix][iy] & 255];
}
}
}, p$1);

Clazz.newMeth(C$, 'createDefaultColors$',  function () {
for (var i=0; i < 256; i++) {
var x=(i < 128 ? (i - 100) / 255.0 : -1);
var val=Math.exp(-x * x * 8 );
var r=((255 * val)|0);
x=(i < 128 ? i / 255.0 : (255 - i) / 255.0);
val=Math.exp(-x * x * 8 );
var g=((255 * val)|0);
x=(i < 128 ? -1 : (i - 156) / 255.0);
val=Math.exp(-x * x * 8 );
var b=((255 * val)|0);
this.rgb[i]=-16777216 | ((b & 255) << 16) | ((g & 255) << 8) | (r & 255) ;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
