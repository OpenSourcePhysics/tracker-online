(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.image.ComponentColorModel','java.awt.color.ColorSpace','java.awt.image.IndexColorModel','java.awt.image.ColorModel','java.awt.image.MemoryImageSource','java.awt.Toolkit','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntegerImage", null, null, 'org.opensourcephysics.display.Measurable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.dirtyImage=true;
},1);

C$.$fields$=[['Z',['visible','dirtyImage'],'D',['xmin','xmax','ymin','ymax'],'I',['nrow','ncol'],'O',['imagePixels','int[]','imageSource','java.awt.image.MemoryImageSource','image','java.awt.Image']]]

Clazz.newMeth(C$, 'getGrayscaleImage$IAA',  function (data) {
var ccm=Clazz.new_([$I$(2).getInstance$I(1003), Clazz.array(Integer.TYPE, -1, [16]), false, false, 1, 1],$I$(1,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I);
return Clazz.new_(C$.c$$java_awt_image_ColorModel$IAA,[ccm, data]);
}, 1);

Clazz.newMeth(C$, 'getBinaryImage$IAA',  function (data) {
var colorModel=Clazz.new_([1, 2, Clazz.array(Byte.TYPE, -1, [-1, 0]), Clazz.array(Byte.TYPE, -1, [0, 0]), Clazz.array(Byte.TYPE, -1, [0, -1])],$I$(3,1).c$$I$I$BA$BA$BA);
return Clazz.new_(C$.c$$java_awt_image_ColorModel$IAA,[colorModel, data]);
}, 1);

Clazz.newMeth(C$, 'get256ColorImage$IAA',  function (data) {
var reds=Clazz.array(Byte.TYPE, [256]);
var greens=Clazz.array(Byte.TYPE, [256]);
var blues=Clazz.array(Byte.TYPE, [256]);
for (var i=0; i < 256; i++) {
var x=(i < 128) ? (i - 100) / 255.0 : -1;
var val=Math.exp(-x * x * 8 );
reds[i]=((255 * val)|0);
x=(i < 128) ? i / 255.0 : (255 - i) / 255.0;
val=Math.exp(-x * x * 8 );
greens[i]=((255 * val)|0);
x=(i < 128) ? -1 : (i - 156) / 255.0;
val=Math.exp(-x * x * 8 );
blues[i]=((255 * val)|0);
}
var colorModel=Clazz.new_($I$(3,1).c$$I$I$BA$BA$BA,[8, 256, reds, greens, blues]);
return Clazz.new_(C$.c$$java_awt_image_ColorModel$IAA,[colorModel, data]);
}, 1);

Clazz.newMeth(C$, 'getColorImage$java_awt_ColorA$IAA',  function (colors, data) {
var n=colors.length;
var reds=Clazz.array(Byte.TYPE, [n]);
var greens=Clazz.array(Byte.TYPE, [n]);
var blues=Clazz.array(Byte.TYPE, [n]);
for (var i=0; i < n; i++) {
reds[i]=((colors[i].getRed$())|0);
greens[i]=((colors[i].getGreen$())|0);
blues[i]=((colors[i].getBlue$())|0);
}
var colorModel=Clazz.new_($I$(3,1).c$$I$I$BA$BA$BA,[8, n, reds, greens, blues]);
return Clazz.new_(C$.c$$java_awt_image_ColorModel$IAA,[colorModel, data]);
}, 1);

Clazz.newMeth(C$, 'c$$IAA',  function (data) {
C$.c$$java_awt_image_ColorModel$IAA.apply(this, [null, data]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$IAA',  function (colorModel, data) {
;C$.$init$.apply(this);
if (colorModel == null ) colorModel=$I$(4).getRGBdefault$();
this.nrow=data.length;
this.ncol=data[0].length;
this.imagePixels=Clazz.array(Integer.TYPE, [this.nrow * this.ncol]);
for (var i=0; i < this.nrow; i++) {
var row=data[i];
System.arraycopy$O$I$O$I$I(row, 0, this.imagePixels, i * this.ncol, this.ncol);
}
this.imageSource=Clazz.new_($I$(5,1).c$$I$I$java_awt_image_ColorModel$IA$I$I,[this.ncol, this.nrow, colorModel, this.imagePixels, 0, this.ncol]);
this.imageSource.setAnimated$Z(true);
this.image=$I$(6).getDefaultToolkit$().createImage$java_awt_image_ImageProducer(this.imageSource);
this.dirtyImage=false;
this.xmin=0;
this.xmax=this.ncol;
this.ymin=this.nrow;
this.ymax=0;
}, 1);

Clazz.newMeth(C$, 'updateImage$IAA',  function (val) {
for (var i=0; i < this.nrow; i++) {
var row=val[i];
System.arraycopy$O$I$O$I$I(row, 0, this.imagePixels, i * this.ncol, this.ncol);
}
this.imageSource.newPixels$I$I$I$I(0, 0, this.ncol, this.nrow);
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (row_offset, col_offset, val) {
if (val == null ) return;
var block_nrow=val.length;
var block_ncol=val[0].length;
if ((row_offset < 0) || (row_offset + block_nrow > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in IntegerImage setBlock."]);
}if ((col_offset < 0) || (col_offset + block_ncol > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in IntegerImage setBlock."]);
}for (var ir=0; ir < block_nrow; ir++) {
var row=val[ir];
var index=(ir + row_offset) * this.ncol + col_offset;
System.arraycopy$O$I$O$I$I(row, 0, this.imagePixels, index, block_ncol);
}
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'setRow$I$IA',  function (row, val) {
if (val == null ) return;
if ((row < 0) || (row >= this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in IntegerImage setRow."]);
}if (val.length > this.ncol) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in IntegerImage setRow."]);
}System.arraycopy$O$I$O$I$I(val, 0, this.imagePixels, row * this.ncol, val.length);
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'setCol$I$IA',  function (col, val) {
if (val == null ) return;
if (val.length > this.nrow) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in IntegerImage setCol."]);
}if ((col < 0) || (col >= this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in IntegerImage setCol."]);
}for (var rindex=0, nr=val.length; rindex < nr; rindex++) {
this.imagePixels[rindex * this.ncol + col]=val[rindex];
}
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'setCell$I$I$I',  function (row, col, val) {
this.imagePixels[row * this.ncol + col]=val;
this.imageSource.newPixels$I$I$I$I(row, col, 1, 1);
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (this.dirtyImage) {
this.image=$I$(6).getDefaultToolkit$().createImage$java_awt_image_ImageProducer(this.imageSource);
}if (this.image == null ) {
panel.setMessage$S($I$(7).getString$S("Null Image"));
return;
}var g2=g;
var gat=g2.getTransform$();
var hints=null;
if ($I$(8).setRenderingHints) {
hints=g2.getRenderingHints$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_DITHERING, $I$(9).VALUE_DITHER_DISABLE);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_ANTIALIASING, $I$(9).VALUE_ANTIALIAS_OFF);
}var sx=(this.xmax - this.xmin) * panel.xPixPerUnit / this.ncol;
var sy=(this.ymax - this.ymin) * panel.yPixPerUnit / this.nrow;
g2.transform$java_awt_geom_AffineTransform($I$(10,"getTranslateInstance$D$D",[panel.leftGutter + panel.xPixPerUnit * (this.xmin - panel.xmin), panel.topGutter + panel.yPixPerUnit * (panel.ymax - this.ymax)]));
g2.transform$java_awt_geom_AffineTransform($I$(10).getScaleInstance$D$D(sx, sy));
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, panel);
g2.setTransform$java_awt_geom_AffineTransform(gat);
if (hints != null ) g2.setRenderingHints$java_util_Map(hints);
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
if (this.image == null ) {
return false;
}return true;
});

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

Clazz.newMeth(C$, 'setXMin$D',  function (_xmin) {
this.xmin=_xmin;
});

Clazz.newMeth(C$, 'setXMax$D',  function (_xmax) {
this.xmax=_xmax;
});

Clazz.newMeth(C$, 'setYMin$D',  function (_ymin) {
this.ymin=_ymin;
});

Clazz.newMeth(C$, 'setYMax$D',  function (_ymax) {
this.ymax=_ymax;
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (_xmin, _xmax, _ymin, _ymax) {
this.xmin=_xmin;
this.xmax=_xmax;
this.ymin=_ymin;
this.ymax=_ymax;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
