(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Color','java.awt.Dimension','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.BufferedImage','java.util.Random','java.awt.image.IndexColorModel','org.opensourcephysics.display.InteractivePanel','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.axes.XAxis']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteRaster", null, 'org.opensourcephysics.display.MeasuredImage', ['org.opensourcephysics.display.Dimensioned', 'org.opensourcephysics.display2d.ByteLattice']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowRescale=false;
this.scaleFactor=1;
this.gridColor=$I$(1).lightGray;
this.showGrid=false;
this.reds=Clazz.array(Byte.TYPE, [256]);
this.greens=Clazz.array(Byte.TYPE, [256]);
this.blues=Clazz.array(Byte.TYPE, [256]);
this.isUnderEjs=false;
},1);

C$.$fields$=[['Z',['allowRescale','showGrid','isUnderEjs'],'D',['scaleFactor'],'I',['ny','nx'],'O',['raster','java.awt.image.WritableRaster','colorModel','java.awt.image.ColorModel','packedData','byte[]','dimension','java.awt.Dimension','gridColor','java.awt.Color','reds','byte[]','+greens','+blues','legendFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$I$I',  function (_nx, _ny) {
Clazz.super_(C$, this);
this.ny=_ny;
this.nx=_nx;
this.dimension=Clazz.new_($I$(2,1).c$$I$I,[this.nx - 1, this.ny - 1]);
var len=this.nx * this.ny;
this.packedData=Clazz.array(Byte.TYPE, [len]);
var databuffer=Clazz.new_($I$(3,1).c$$BA$I,[this.packedData, len]);
this.raster=$I$(4).createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(databuffer, this.nx, this.ny, 8, null);
this.colorModel=this.createColorModel$();
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster, false, null]);
this.xmin=0;
this.xmax=this.nx;
this.ymin=0;
this.ymax=this.ny;
}, 1);

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (nx, ny) {
this.resizeRaster$I$I(nx, ny);
this.xmin=0;
this.xmax=nx;
this.ymin=0;
this.ymax=ny;
});

Clazz.newMeth(C$, 'setUnderEjs$Z',  function (underEjs) {
this.isUnderEjs=underEjs;
});

Clazz.newMeth(C$, 'resizeRaster$I$I',  function (_nx, _ny) {
this.ny=_ny;
this.nx=_nx;
this.dimension=Clazz.new_($I$(2,1).c$$I$I,[this.nx - 1, this.ny - 1]);
var len=this.nx * this.ny;
this.packedData=Clazz.array(Byte.TYPE, [len]);
var databuffer=Clazz.new_($I$(3,1).c$$BA$I,[this.packedData, len]);
this.raster=$I$(4).createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(databuffer, this.nx, this.ny, 8, null);
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster, false, null]);
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.nx;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.ny;
});

Clazz.newMeth(C$, 'randomize$',  function () {
var random=Clazz.new_($I$(6,1));
random.nextBytes$BA(this.packedData);
});

Clazz.newMeth(C$, 'getInterior$org_opensourcephysics_display_DrawingPanel',  function (panel) {
if (this.allowRescale) return null;
var availableWidth=panel.getWidth$() - panel.getLeftGutter$() - panel.getRightGutter$() - 1 ;
var availableHeight=panel.getHeight$() - panel.getTopGutter$() - panel.getBottomGutter$() - 1 ;
this.scaleFactor=Math.min(availableWidth / this.dimension.width, availableHeight / this.dimension.height);
if (this.scaleFactor > 1 ) {
this.scaleFactor=1;
return this.dimension;
}return Clazz.new_([((this.scaleFactor * (this.nx - 0.5))|0), ((this.scaleFactor * (this.ny - 0.5))|0)],$I$(2,1).c$$I$I);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (this.allowRescale) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
} else {
if ((this.scaleFactor < 1 ) && !this.isUnderEjs ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image.getScaledInstance$I$I$I(((this.scaleFactor * this.image.getWidth$())|0), ((this.scaleFactor * this.image.getHeight$())|0), 8), panel.getLeftGutter$(), panel.getTopGutter$(), panel);
} else {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, panel.getLeftGutter$(), panel.getTopGutter$(), panel);
}}if (this.showGrid) {
g.setColor$java_awt_Color(this.gridColor);
g.drawRect$I$I$I$I(panel.getLeftGutter$(), panel.getTopGutter$(), (this.dimension.getWidth$()|0), (this.dimension.getHeight$()|0));
}});

Clazz.newMeth(C$, 'setAllowRescale$Z',  function (allow) {
this.allowRescale=allow;
});

Clazz.newMeth(C$, 'getAllowRescale$',  function () {
return this.allowRescale;
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
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in byte raster setBlock."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in byte raster setBlock."]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.packedData[(this.ny - iy - 1 ) * this.nx + ix]=val[ix - ix_offset][iy - iy_offset];
}
}
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (ix_offset, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val[0].length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in byte raster setBlock."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in byte raster setBlock."]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.packedData[(this.ny - iy - 1 ) * this.nx + ix]=(val[ix - ix_offset][iy - iy_offset]|0);
}
}
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (ix, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val.length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in byte raster setCol."]);
}if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in byte raster setCol."]);
}for (var iy=iy_offset, my=val.length + iy_offset; iy < my; iy++) {
this.packedData[(this.ny - iy - 1 ) * this.nx + ix]=val[iy - iy_offset];
}
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (iy, ix_offset, val) {
if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setRow."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setRow."]);
}for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.packedData[(this.ny - iy - 1 ) * this.nx + ix]=val[ix - ix_offset];
}
});

Clazz.newMeth(C$, 'setValue$I$I$B',  function (ix, iy, val) {
this.packedData[(this.ny - iy - 1 ) * this.nx + ix]=val;
});

Clazz.newMeth(C$, 'getValue$I$I',  function (ix, iy) {
return this.packedData[(this.ny - iy - 1 ) * this.nx + ix];
});

Clazz.newMeth(C$, 'setBWPalette$',  function () {
var bwPalette=Clazz.array($I$(1), [256]);
for (var i=0; i < 256; i++) {
bwPalette[i]=Clazz.new_($I$(1,1).c$$I$I$I,[i, i, i]);
}
this.setColorPalette$java_awt_ColorA(bwPalette);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
var numColors=colors.length;
this.reds=Clazz.array(Byte.TYPE, [numColors]);
this.greens=Clazz.array(Byte.TYPE, [numColors]);
this.blues=Clazz.array(Byte.TYPE, [numColors]);
for (var i=0; i < numColors; i++) {
this.reds[i]=(colors[i].getRed$()|0);
this.greens[i]=(colors[i].getGreen$()|0);
this.blues[i]=(colors[i].getBlue$()|0);
}
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[8, numColors, this.reds, this.greens, this.blues]);
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster, false, null]);
});

Clazz.newMeth(C$, 'getColorPalette$',  function () {
var palette=Clazz.array(Byte.TYPE, [3, null]);
palette[0]=this.reds;
palette[1]=this.greens;
palette[2]=this.blues;
return palette;
});

Clazz.newMeth(C$, 'createDefaultColors$',  function () {
this.colorModel=this.createColorModel$();
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster, false, null]);
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
i=(i + 256) % this.reds.length;
this.reds[i]=(color.getRed$()|0);
this.greens[i]=(color.getGreen$()|0);
this.blues[i]=(color.getBlue$()|0);
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[8, 256, this.reds, this.greens, this.blues]);
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster, false, null]);
});

Clazz.newMeth(C$, 'showLegend$',  function () {
var dp=Clazz.new_($I$(8,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[300, 80]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(10).getString$S("GUIUtils.Legend")],$I$(9,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(false);
this.legendFrame.setContentPane$java_awt_Container(dp);
var byteRaster=Clazz.new_(C$.c$$I$I,[256, 20]);
byteRaster.setMinMax$D$D$D$D(-128, 127, 0, 1);
var data=Clazz.array(Byte.TYPE, [256, 20]);
for (var i=0; i < 256; i++) {
for (var j=0; j < 20; j++) {
data[i][j]=((-128 + i)|0);
}
}
byteRaster.setBlock$I$I$BAA(0, 0, data);
var colors=Clazz.array($I$(1), [256]);
for (var i=0; i < 256; i++) {
colors[(128 + i) % 256]=Clazz.new_([(256 + this.reds[i]) % 256, (256 + this.greens[i]) % 256, (256 + this.blues[i]) % 256],$I$(1,1).c$$I$I$I);
}
byteRaster.setColorPalette$java_awt_ColorA(colors);
dp.addDrawable$org_opensourcephysics_display_Drawable(byteRaster);
var xaxis=Clazz.new_($I$(11,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGridLines) {
this.showGrid=showGridLines;
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.gridColor=c;
});

Clazz.newMeth(C$, 'createColorModel$',  function () {
this.reds=Clazz.array(Byte.TYPE, [256]);
this.greens=Clazz.array(Byte.TYPE, [256]);
this.blues=Clazz.array(Byte.TYPE, [256]);
for (var i=0; i < 256; i++) {
var x=(i < 128) ? (i - 100) / 255.0 : -1;
var val=Math.exp(-x * x * 8 );
this.reds[i]=((255 * val)|0);
x=(i < 128) ? i / 255.0 : (255 - i) / 255.0;
val=Math.exp(-x * x * 8 );
this.greens[i]=((255 * val)|0);
x=(i < 128) ? -1 : (i - 156) / 255.0;
val=Math.exp(-x * x * 8 );
this.blues[i]=((255 * val)|0);
}
var colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[8, 256, this.reds, this.greens, this.blues]);
return colorModel;
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

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
var xMin=this.getXMin$();
var xMax=this.getXMax$();
return xMin + i * (xMax - xMin) / this.getNx$();
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

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
var yMin=this.getYMin$();
var yMax=this.getYMax$();
return yMin + i * (yMax - yMin) / this.getNy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
