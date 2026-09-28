(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Color','java.util.Random','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.axes.XAxis']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TriangularByteLattice", null, null, 'org.opensourcephysics.display.Measurable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.colors=Clazz.array($I$(1), [256]);
},1);

C$.$fields$=[['Z',['visible'],'D',['xmin','ymin','xmax','ymax','xminLattice','yminLattice','xmaxLattice','ymaxLattice'],'I',['nrow','ncol'],'O',['data','byte[][]','colors','java.awt.Color[]','legendFrame','javax.swing.JFrame']]
,['D',['SQRT3_OVER2']]]

Clazz.newMeth(C$, 'c$$I$I',  function (_row, _col) {
;C$.$init$.apply(this);
this.nrow=_row;
this.ncol=_col;
this.createDefaultColors$();
this.data=Clazz.array(Byte.TYPE, [this.nrow, this.ncol]);
this.xminLattice=this.xmin=0;
this.xmaxLattice=this.xmax=this.ncol - 0.5;
this.ymin=(this.nrow - 1) * C$.SQRT3_OVER2;
if (this.ymin == 0 ) {
this.ymin=C$.SQRT3_OVER2;
}this.yminLattice=this.ymin;
this.ymaxLattice=this.ymax=0;
}, 1);

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (_row, _col) {
this.nrow=_row;
this.ncol=_col;
this.data=Clazz.array(Byte.TYPE, [this.nrow, this.ncol]);
this.xminLattice=this.xmin=0;
this.xmaxLattice=this.xmax=this.ncol - 0.5;
this.ymin=(this.nrow - 1) * C$.SQRT3_OVER2;
if (this.ymin == 0 ) {
this.ymin=C$.SQRT3_OVER2;
}this.yminLattice=this.ymin;
this.ymaxLattice=this.ymax=0;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (_vis) {
this.visible=_vis;
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
this.xmin=xmin;
this.xmax=xmax;
this.ymin=ymin;
this.ymax=ymax;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}g=g.create$();
var xScale=(this.xmax - this.xmin) / (this.xmaxLattice - this.xminLattice);
var yScale=-(this.ymax - this.ymin) / (this.ymaxLattice - this.yminLattice);
for (var yi=0; yi < this.nrow; yi++) {
for (var xi=0; xi < this.ncol; xi++) {
var val=this.data[yi][xi];
g.setColor$java_awt_Color(this.colors[val & 255]);
if ((yi % 2) == 1) {
var x=(xi + 0.5) * xScale + this.xmin;
var y=yi * C$.SQRT3_OVER2 * yScale  + this.ymin;
g.fillOval$I$I$I$I(panel.xToPix$D(x) - 3, panel.yToPix$D(y) - 3, 6, 6);
} else {
var x=xi * xScale + this.xmin;
var y=yi * C$.SQRT3_OVER2 * yScale  + this.ymin;
g.fillOval$I$I$I$I(panel.xToPix$D(x) - 3, panel.yToPix$D(y) - 3, 6, 6);
}}
}
g.dispose$();
});

Clazz.newMeth(C$, 'setBlock$I$I$BAA',  function (row_offset, col_offset, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((col_offset < 0) || (col_offset + val[0].length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
for (var cindex=col_offset, nc=val[0].length + col_offset; cindex < nc; cindex++) {
this.data[rindex][cindex]=val[rindex - row_offset][cindex - col_offset];
}
}
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (row_offset, col_offset, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((col_offset < 0) || (col_offset + val[0].length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
for (var cindex=col_offset, nc=val[0].length + col_offset; cindex < nc; cindex++) {
this.data[rindex][cindex]=(val[rindex - row_offset][cindex - col_offset]|0);
}
}
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (row_offset, col, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((col < 0) || (col >= this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
this.data[rindex][col]=val[rindex - row_offset];
}
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (row, col_offset, val) {
if ((row < 0) || (row >= this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((col_offset < 0) || (col_offset + val.length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var cindex=col_offset, nc=val.length + col_offset; cindex < nc; cindex++) {
this.data[row][cindex]=val[cindex - col_offset];
}
});

Clazz.newMeth(C$, 'setCell$I$I$B',  function (row, col, val) {
this.data[row][col]=val;
});

Clazz.newMeth(C$, 'getCell$I$I',  function (row, col) {
return this.data[row][col];
});

Clazz.newMeth(C$, 'randomize$',  function () {
var random=Clazz.new_($I$(2,1));
for (var rindex=0, nr=this.data.length; rindex < nr; rindex++) {
for (var cindex=0, nc=this.data[0].length; cindex < nc; cindex++) {
this.data[rindex][cindex]=(random.nextInt$I(256)|0);
}
}
});

Clazz.newMeth(C$, 'showLegend$',  function () {
var dp=Clazz.new_($I$(3,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(6).getString$S("GUIUtils.Legend")],$I$(5,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(false);
this.legendFrame.setContentPane$java_awt_Container(dp);
var lattice=Clazz.new_(C$.c$$I$I,[1, 256]);
lattice.setMinMax$D$D$D$D(-128, 127, 0, 1);
var data=Clazz.array(Byte.TYPE, [1, 256]);
for (var i=0; i < 256; i++) {
data[0][i]=(i|0);
}
lattice.setBlock$I$I$BAA(0, 0, data);
dp.addDrawable$org_opensourcephysics_display_Drawable(lattice);
var xaxis=Clazz.new_($I$(7,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
for (var i=0, n=colors.length; i < n; i++) {
this.colors[i]=colors[i];
}
for (var i=colors.length; i < 256; i++) {
this.colors[i]=$I$(1).black;
}
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
i=(i + 256) % this.colors.length;
this.colors[i]=color;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'createDefaultColors$',  function () {
for (var i=0; i < 256; i++) {
var c=$I$(1,"getHSBColor$F$F$F",[(-0.07 + 0.8 * i / 255.0) % 1, 1, 1]);
this.colors[i]=c;
}
});

C$.$static$=function(){C$.$static$=0;
C$.SQRT3_OVER2=Math.sqrt(3) / 2.0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
