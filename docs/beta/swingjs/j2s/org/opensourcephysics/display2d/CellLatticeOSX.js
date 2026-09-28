(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'java.awt.Color','org.opensourcephysics.display2d.SiteLattice','java.awt.Rectangle','java.util.Random','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display2d.CellLattice','org.opensourcephysics.display.axes.XAxis']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CellLatticeOSX", null, 'org.opensourcephysics.display.Grid', ['org.opensourcephysics.display.Measurable', ['org.opensourcephysics.display2d.CellLattice','org.opensourcephysics.display2d.CellLattice.OSLattice']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$visible=true;
this.colors=Clazz.array($I$(1), [256]);
},1);

C$.$fields$=[['Z',['$visible'],'O',['colors','java.awt.Color[]','data','byte[][]','legendFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$I$I',  function (nx, ny) {
;C$.superclazz.c$$I$I.apply(this,[nx, ny]);C$.$init$.apply(this);
this.createDefaultColors$();
this.data=Clazz.array(Byte.TYPE, [nx, ny]);
this.color=$I$(1).lightGray;
}, 1);

Clazz.newMeth(C$, 'createSiteLattice$',  function () {
var lattice=Clazz.new_($I$(2,1).c$$I$I,[this.nx, this.ny]);
lattice.setBlock$BAA(this.data);
lattice.setMinMax$D$D$D$D(this.getXMin$(), this.getXMax$(), this.getYMin$(), this.getYMax$());
lattice.setColorPalette$java_awt_ColorA(this.colors);
return lattice;
});

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (_nx, _ny) {
this.nx=_nx;
this.ny=_ny;
this.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
this.data=Clazz.array(Byte.TYPE, [this.nx, this.ny]);
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.nx;
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.ny;
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

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.$visible=isVisible;
});

Clazz.newMeth(C$, 'getBounds$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var x1=panel.xToPix$D(this.xmin);
var x2=panel.xToPix$D(this.xmax);
var y1=panel.yToPix$D(this.ymin);
var y2=panel.yToPix$D(this.ymax);
return Clazz.new_([Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1)],$I$(3,1).c$$I$I$I$I);
}, p$1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.$visible) {
return;
}var ymax=this.ymax;
var xmin=this.xmin;
if (panel.getXMax$() < panel.getXMin$() ) {
xmin=(this.dx < 0 ) ? this.xmin - this.dx : this.xmin + this.dx;
}if (panel.getYMax$() < panel.getYMin$() ) {
ymax=(this.dy < 0 ) ? this.ymax + this.dy : this.ymax - this.dy;
}var x=(this.dx < 0 ) ? xmin + this.dx : xmin;
var y=(this.dy < 0 ) ? ymax - this.dy : ymax;
var x1pix=panel.xToPix$D(x);
var y1pix=panel.yToPix$D(y);
var x2pix;
var y2pix;
var r=p$1.getBounds$org_opensourcephysics_display_DrawingPanel.apply(this, [panel]);
var g2=g.create$();
g2.clipRect$I$I$I$I(r.x, r.y, r.width, r.height);
for (var ix=0; ix < this.nx; ix++) {
x+=this.dx;
x2pix=panel.xToPix$D(x);
for (var iy=this.ny - 1; iy >= 0; iy--) {
y-=this.dy;
y2pix=panel.yToPix$D(y);
var val=this.data[ix][iy] & 255;
g2.setColor$java_awt_Color(this.colors[val]);
g2.fillRect$I$I$I$I(x1pix, y1pix, Math.abs(x2pix - x1pix) + 1, Math.abs(y1pix - y2pix) + 1);
y1pix=y2pix;
}
x1pix=x2pix;
y=(this.dy < 0 ) ? ymax - this.dy : ymax;
y1pix=panel.yToPix$D(y);
}
g2.dispose$();
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
});

Clazz.newMeth(C$, 'setBlock$I$I$BAA',  function (ix_offset, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val[0].length - 1 > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row offset " + iy_offset + " out of range." ]);
}if ((ix_offset < 0) || (ix_offset + val.length - 1 > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column offset " + ix_offset + " out of range." ]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.data[ix][iy]=val[ix - ix_offset][iy - iy_offset];
}
}
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

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (ix_offset, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val[0].length - 1 > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row offset " + iy_offset + " out of range." ]);
}if ((ix_offset < 0) || (ix_offset + val.length - 1 > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column offset " + ix_offset + " out of range." ]);
}for (var iy=iy_offset, my=val[0].length + iy_offset; iy < my; iy++) {
for (var ix=ix_offset, mx=val.length + ix_offset; ix < mx; ix++) {
this.data[ix][iy]=(val[ix - ix_offset][iy - iy_offset]|0);
}
}
});

Clazz.newMeth(C$, 'setBlock$BAA',  function (val) {
this.setBlock$I$I$BAA(0, 0, val);
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (ix, iy_offset, val) {
if ((iy_offset < 0) || (iy_offset + val.length > this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row offset " + iy_offset + " out of range." ]);
}if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index " + ix + " out of range." ]);
}for (var iy=iy_offset, my=val.length + iy_offset; iy < my; iy++) {
this.data[ix][iy]=val[iy - iy_offset];
}
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (iy, ix_offset, val) {
if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Y index out of range in binary lattice setRow."]);
}if ((ix_offset < 0) || (ix_offset + val.length > this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["X offset out of range in binary lattice setRow."]);
}for (var xindex=ix_offset, mx=val.length + ix_offset; xindex < mx; xindex++) {
this.data[xindex][iy]=val[xindex - ix_offset];
}
});

Clazz.newMeth(C$, 'setValue$I$I$B',  function (ix, iy, val) {
if ((iy < 0) || (iy >= this.ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index " + iy + " out of range." ]);
}if ((ix < 0) || (ix >= this.nx) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index " + ix + " out of range." ]);
}this.data[ix][iy]=val;
});

Clazz.newMeth(C$, 'getValue$I$I',  function (col, row) {
return this.data[col][row];
});

Clazz.newMeth(C$, 'setShowVisible$Z',  function (isVisible) {
this.$visible=isVisible;
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGridLines) {
this.visible=showGridLines;
});

Clazz.newMeth(C$, 'randomize$',  function () {
var random=Clazz.new_($I$(4,1));
for (var rindex=0, nr=this.data[0].length; rindex < nr; rindex++) {
for (var cindex=0, nc=this.data.length; cindex < nc; cindex++) {
this.data[cindex][rindex]=(random.nextInt$I(256)|0);
}
}
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
var lattice=Clazz.new_($I$(9,1).c$$I$I,[256, 1]);
lattice.setMinMax$D$D$D$D(-128, 127, 0, 1);
var data=Clazz.array(Byte.TYPE, [256, 1]);
for (var i=0; i < 256; i++) {
data[i][0]=((-128 + i)|0);
}
lattice.setBlock$I$I$BAA(0, 0, data);
dp.addDrawable$org_opensourcephysics_display_Drawable(lattice);
var xaxis=Clazz.new_($I$(10,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (_colors) {
var n=Math.min(256, _colors.length);
for (var i=0; i < n; i++) {
this.colors[i]=_colors[i];
}
for (var i=n; i < 256; i++) {
this.colors[i]=$I$(1).black;
}
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (_color) {
this.color=_color;
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
i=(i + 256) % this.colors.length;
this.colors[i]=color;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
});

Clazz.newMeth(C$, 'setXMin$D',  function (_value) {
this.xmin=_value;
this.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'setXMax$D',  function (_value) {
this.xmax=_value;
this.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'setYMin$D',  function (_value) {
this.ymin=_value;
this.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'setYMax$D',  function (_value) {
this.ymax=_value;
this.setMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
});

Clazz.newMeth(C$, 'createDefaultColors$',  function () {
for (var i=0; i < 256; i++) {
var x=(i < 128) ? (i - 100) / 255.0 : -1;
var val=Math.exp(-x * x * 8 );
var red=((255 * val)|0);
x=(i < 128) ? i / 255.0 : (255 - i) / 255.0;
val=Math.exp(-x * x * 8 );
var green=((255 * val)|0);
x=(i < 128) ? -1 : (i - 156) / 255.0;
val=Math.exp(-x * x * 8 );
var blue=((255 * val)|0);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[red, green, blue]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
