(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Color','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.IndexColorModel','java.awt.image.BufferedImage','org.opensourcephysics.display.Grid','java.util.Random','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BinaryLattice", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display2d.ByteLattice');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$visible=true;
this.zeroColor=$I$(1).red;
this.oneColor=$I$(1).blue;
},1);

C$.$fields$=[['Z',['$visible'],'I',['ny','nx'],'O',['raster','java.awt.image.WritableRaster','grid','org.opensourcephysics.display.Grid','packedData','byte[]','zeroColor','java.awt.Color','+oneColor']]]

Clazz.newMeth(C$, 'c$$I$I',  function (_nx, _ny) {
Clazz.super_(C$, this);
this.ny=_ny;
this.nx=_nx;
var len=(((this.nx + 7)/8|0)) * this.ny;
this.packedData=Clazz.array(Byte.TYPE, [len]);
var databuffer=Clazz.new_($I$(2,1).c$$BA$I,[this.packedData, len]);
this.raster=$I$(3).createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(databuffer, this.nx, this.ny, 1, null);
var colorModel=Clazz.new_([1, 2, Clazz.array(Byte.TYPE, -1, [-1, 0]), Clazz.array(Byte.TYPE, -1, [0, 0]), Clazz.array(Byte.TYPE, -1, [0, -1])],$I$(4,1).c$$I$I$BA$BA$BA);
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, this.raster, false, null]);
this.xmin=0;
this.xmax=this.nx;
this.ymin=0;
this.ymax=this.ny;
this.grid=Clazz.new_($I$(6,1).c$$I$I$D$D$D$D,[this.nx, this.ny, this.xmin, this.xmax, this.ymin, this.ymax]);
this.grid.setColor$java_awt_Color($I$(1).lightGray);
}, 1);

Clazz.newMeth(C$, 'createDefaultColors$',  function () {
this.zeroColor=$I$(1).red;
this.oneColor=$I$(1).blue;
});

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (_nx, _ny) {
this.ny=_ny;
this.nx=_nx;
var len=(((this.nx + 7)/8|0)) * this.ny;
this.packedData=Clazz.array(Byte.TYPE, [len]);
var databuffer=Clazz.new_($I$(2,1).c$$BA$I,[this.packedData, len]);
this.raster=$I$(3).createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(databuffer, this.nx, this.ny, 1, null);
var colorModel=this.image.getColorModel$();
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, this.raster, false, null]);
var color=this.grid.getColor$();
this.grid=Clazz.new_($I$(6,1).c$$I$I$D$D$D$D,[this.nx, this.ny, this.xmin, this.xmax, this.ymin, this.ymax]);
this.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
this.grid.setColor$java_awt_Color(color);
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

Clazz.newMeth(C$, 'randomize$',  function () {
var random=Clazz.new_($I$(7,1));
random.nextBytes$BA(this.packedData);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.$visible) {
return;
}if ($I$(8).setRenderingHints) {
var g2=(g);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_RENDERING, $I$(9).VALUE_RENDER_SPEED);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_ANTIALIASING, $I$(9).VALUE_ANTIALIAS_OFF);
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

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
C$.superclazz.prototype.setMinMax$D$D$D$D.apply(this, [xmin, xmax, ymin, ymax]);
this.grid.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (x_offset, y_offset, val) {
if ((y_offset < 0) || (y_offset + val[0].length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((x_offset < 0) || (x_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var iy=y_offset, my=val[0].length + y_offset; iy < my; iy++) {
for (var ix=x_offset, mx=val.length + x_offset; ix < mx; ix++) {
var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val[ix - x_offset][iy - y_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
}
});

Clazz.newMeth(C$, 'setBlock$I$I$BAA',  function (ix_offset, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val[0].length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val[ix - ix_offset][iy - iy_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
}
});

Clazz.newMeth(C$, 'setBlock$BAA',  function (val) {
this.setBlock$I$I$BAA(0, 0, val);
});

Clazz.newMeth(C$, 'setCol$I$I$IA',  function (ix, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val.length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setCol."]);
}if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setCol."]);
}for (var iy=iy_offset, nr=val.length + iy_offset; iy < nr; iy++) {
var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val[iy - iy_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (ix, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val.length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setCol."]);
}if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setCol."]);
}for (var iy=iy_offset, nr=val.length + iy_offset; iy < nr; iy++) {
var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val[iy - iy_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setRow$I$I$IA',  function (iy, ix_offset, val) {
if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setRow."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setRow."]);
}for (var ix=ix_offset, nc=val.length + ix_offset; ix < nc; ix++) {
var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val[ix - ix_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (iy, ix_offset, val) {
if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setRow."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setRow."]);
}for (var ix=ix_offset, nc=val.length + ix_offset; ix < nc; ix++) {
var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val[ix - ix_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setValue$I$I$I',  function (ix, iy, val) {
if ((iy < 0) || (iy >= this.ny) || (ix < 0) || (ix >= this.nx)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cell row or column index out of range.  row=" + iy + "  col=" + ix ]);
}var arrayIndex=(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (ix % 8);
if (val <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
});

Clazz.newMeth(C$, 'setValue$I$I$B',  function (ix, iy, val) {
this.setValue$I$I$I(ix, iy, (val|0));
});

Clazz.newMeth(C$, 'getValue$I$I',  function (ix, iy) {
var packedcell=this.packedData[(this.ny - iy - 1 ) * (((this.nx + 7)/8|0)) + (ix/8|0)];
var mask=128 >>> (ix % 8);
if ((packedcell & mask) > 0) {
return $b$[0] = 1, $b$[0];
}return $b$[0] = 0, $b$[0];
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.nx;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.ny;
});

Clazz.newMeth(C$, 'setShowGrid$Z',  function (showGrid) {
this.grid.setVisible$Z(showGrid);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
this.zeroColor=colors[0];
this.oneColor=colors[1];
var colorModel=Clazz.new_([1, 2, Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getRed$(), $b$[0]), ($b$[0] = this.oneColor.getRed$(), $b$[0])]), Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getGreen$(), $b$[0]), ($b$[0] = this.oneColor.getGreen$(), $b$[0])]), Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getBlue$(), $b$[0]), ($b$[0] = this.oneColor.getBlue$(), $b$[0])]), Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getAlpha$(), $b$[0]), ($b$[0] = this.oneColor.getAlpha$(), $b$[0])])],$I$(4,1).c$$I$I$BA$BA$BA$BA);
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, this.raster, false, null]);
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
if (i == 0) {
this.zeroColor=color;
} else {
this.oneColor=color;
}var colorModel=Clazz.new_([1, 2, Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getRed$(), $b$[0]), ($b$[0] = this.oneColor.getRed$(), $b$[0])]), Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getGreen$(), $b$[0]), ($b$[0] = this.oneColor.getGreen$(), $b$[0])]), Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getBlue$(), $b$[0]), ($b$[0] = this.oneColor.getBlue$(), $b$[0])]), Clazz.array(Byte.TYPE, -1, [($b$[0] = this.zeroColor.getAlpha$(), $b$[0]), ($b$[0] = this.oneColor.getAlpha$(), $b$[0])])],$I$(4,1).c$$I$I$BA$BA$BA$BA);
this.image=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, this.raster, false, null]);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (color) {
this.grid.setColor$java_awt_Color(color);
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGridLines) {
this.grid.setVisible$Z(showGridLines);
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

Clazz.newMeth(C$, 'showLegend$',  function () {
return null;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
