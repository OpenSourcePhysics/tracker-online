(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Color','java.util.Random','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TriangularBinaryLattice", null, null, 'org.opensourcephysics.display.Measurable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.zeroColor=$I$(1).red;
this.oneColor=$I$(1).blue;
},1);

C$.$fields$=[['Z',['visible'],'D',['xmin','ymin','xmax','ymax','xminLattice','yminLattice','xmaxLattice','ymaxLattice'],'I',['nrow','ncol'],'O',['packedData','byte[]','zeroColor','java.awt.Color','+oneColor']]
,['D',['SQRT3_OVER2']]]

Clazz.newMeth(C$, 'c$$I$I',  function (_nrow, _ncol) {
;C$.$init$.apply(this);
this.nrow=_nrow;
this.ncol=_ncol;
var len=(((this.ncol + (7))/8|0)) * this.nrow;
this.packedData=Clazz.array(Byte.TYPE, [len]);
this.xminLattice=this.xmin=0;
this.xmaxLattice=this.xmax=this.ncol - 0.5;
this.ymin=this.nrow * C$.SQRT3_OVER2 - C$.SQRT3_OVER2;
if (this.ymin == 0 ) {
this.ymin=C$.SQRT3_OVER2;
}this.yminLattice=this.ymin;
this.ymaxLattice=this.ymax=0;
}, 1);

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (_nrow, _ncol) {
this.nrow=_nrow;
this.ncol=_ncol;
var len=(((this.ncol + (7))/8|0)) * this.nrow;
this.packedData=Clazz.array(Byte.TYPE, [len]);
this.xminLattice=this.xmin=0;
this.xmaxLattice=this.xmax=this.ncol - 0.5;
this.ymin=this.nrow * C$.SQRT3_OVER2 - C$.SQRT3_OVER2;
if (this.ymin == 0 ) {
this.ymin=C$.SQRT3_OVER2;
}this.yminLattice=this.ymin;
this.ymaxLattice=this.ymax=0;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (_vis) {
this.visible=_vis;
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

Clazz.newMeth(C$, 'randomize$',  function () {
var random=Clazz.new_($I$(2,1));
random.nextBytes$BA(this.packedData);
});

Clazz.newMeth(C$, 'randomize$D',  function (probability) {
if ((probability < 0 ) || (probability > 1 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Probability must be between 0 and 1"]);
}var random=Clazz.new_($I$(2,1));
for (var i=0, size=this.packedData.length; i < size; i++) {
var packedcell=($b$[0] = 0, $b$[0]);
for (var j=8; j > 0; j--) {
var mask=128 >>> (j - 1);
var d=random.nextDouble$();
if (d >= probability ) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}}
this.packedData[i]=packedcell;
}
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}g=g.create$();
var xScale=(this.xmax - this.xmin) / (this.xmaxLattice - this.xminLattice);
var yScale=-(this.ymax - this.ymin) / (this.ymaxLattice - this.yminLattice);
var row=0;
var column=0;
for (var i=0, size=this.packedData.length; i < size; i++) {
var packedCell=this.packedData[i];
for (var j=8; (j > 0) && (column < this.ncol) ; j--) {
var val=($b$[0] = (packedCell >>> (j - 1)), $b$[0]);
var one_or_zero=(val & 1);
if (one_or_zero == 0) {
g.setColor$java_awt_Color(this.zeroColor);
} else {
g.setColor$java_awt_Color(this.oneColor);
}if ((row % 2) == 1) {
var x=(column + 0.5) * xScale + this.xmin;
var y=row * C$.SQRT3_OVER2 * yScale  + this.ymin;
g.fillOval$I$I$I$I(panel.xToPix$D(x) - 3, panel.yToPix$D(y) - 3, 6, 6);
} else {
var x=column * xScale + this.xmin;
var y=row * C$.SQRT3_OVER2 * yScale  + this.ymin;
g.fillOval$I$I$I$I(panel.xToPix$D(x) - 3, panel.yToPix$D(y) - 3, 6, 6);
}if (column == (this.ncol - 1)) {
column=0;
++row;
break;
}++column;
}
}
g.dispose$();
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
this.xmin=xmin;
this.xmax=xmax;
this.ymin=ymin;
this.ymax=ymax;
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (row_offset, col_offset, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((col_offset < 0) || (col_offset + val[0].length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
for (var cindex=col_offset, nc=val[0].length + col_offset; cindex < nc; cindex++) {
var arrayIndex=rindex * (((this.ncol + 7)/8|0)) + (cindex/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (cindex % 8);
if (val[rindex - row_offset][cindex - col_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
}
});

Clazz.newMeth(C$, 'setBlock$I$I$BAA',  function (row_offset, col_offset, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setBlock."]);
}if ((col_offset < 0) || (col_offset + val[0].length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
for (var cindex=col_offset, nc=val[0].length + col_offset; cindex < nc; cindex++) {
var arrayIndex=rindex * (((this.ncol + 7)/8|0)) + (cindex/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (cindex % 8);
if (val[rindex - row_offset][cindex - col_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
}
});

Clazz.newMeth(C$, 'setCol$I$I$IA',  function (row_offset, col, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setCol."]);
}if ((col < 0) || (col >= this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setCol."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
var arrayIndex=rindex * (((this.ncol + 7)/8|0)) + (col/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (col % 8);
if (val[rindex - row_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (row_offset, col, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setCol."]);
}if ((col < 0) || (col >= this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setCol."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
var arrayIndex=rindex * (((this.ncol + 7)/8|0)) + (col/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (col % 8);
if (val[rindex - row_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setRow$I$I$IA',  function (row, col_offset, val) {
if ((row < 0) || (row >= this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setRow."]);
}if ((col_offset < 0) || (col_offset + val.length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setRow."]);
}for (var cindex=col_offset, nc=val.length + col_offset; cindex < nc; cindex++) {
var arrayIndex=row * (((this.ncol + 7)/8|0)) + (cindex/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (cindex % 8);
if (val[cindex - col_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (row, col_offset, val) {
if ((row < 0) || (row >= this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in binary lattice setRow."]);
}if ((col_offset < 0) || (col_offset + val.length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in binary lattice setRow."]);
}for (var cindex=col_offset, nc=val.length + col_offset; cindex < nc; cindex++) {
var arrayIndex=row * (((this.ncol + 7)/8|0)) + (cindex/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (cindex % 8);
if (val[cindex - col_offset] <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
}
});

Clazz.newMeth(C$, 'setCell$I$I$I',  function (_row, _col, val) {
if ((_row < 0) || (_row >= this.nrow) || (_col < 0) || (_col >= this.ncol)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cell row or column index out of range.  row=" + _row + "  col=" + _col ]);
}var arrayIndex=_row * (((this.ncol + 7)/8|0)) + (_col/8|0);
var packedcell=this.packedData[arrayIndex];
var mask=128 >>> (_col % 8);
if (val <= 0) {
packedcell=($b$[0] = (packedcell & ~mask), $b$[0]);
} else {
packedcell=($b$[0] = (packedcell | mask), $b$[0]);
}this.packedData[arrayIndex]=packedcell;
});

Clazz.newMeth(C$, 'getCell$I$I',  function (_row, _col) {
var packedcell=this.packedData[_row * (((this.ncol + 7)/8|0)) + (_col/8|0)];
var mask=128 >>> (_col % 8);
if ((packedcell & mask) > 0) {
return $b$[0] = 1, $b$[0];
}return $b$[0] = 0, $b$[0];
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
if (colors.length != 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array must have length of 2"]);
}this.zeroColor=colors[0];
this.oneColor=colors[1];
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
if (i == 0) {
this.zeroColor=color;
} else {
this.oneColor=color;
}});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(3,1).c$$I,[this.nrow * this.ncol + this.nrow]);
var column=0;
for (var i=0, size=this.packedData.length; i < size; i++) {
var packedCell=this.packedData[i];
for (var j=8; (j > 0) && (column < this.ncol) ; j--) {
var val=($b$[0] = (packedCell >>> (j - 1)), $b$[0]);
var one_or_zero=(val & 1);
if (one_or_zero == 0) {
sb.append$S("0");
} else {
sb.append$S("1");
}if (column == (this.ncol - 1)) {
if (i != (size - 1)) {
sb.append$S("\n");
}column=0;
break;
}++column;
}
}
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.SQRT3_OVER2=Math.sqrt(3) / 2.0;
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
