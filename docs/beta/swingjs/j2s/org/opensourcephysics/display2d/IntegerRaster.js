(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Dimension','java.awt.image.ComponentColorModel','java.awt.color.ColorSpace','java.awt.image.BandedSampleModel','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntegerRaster", null, 'org.opensourcephysics.display.MeasuredImage', 'org.opensourcephysics.display.Dimensioned');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$visible=true;
this.scaleFactor=1;
},1);

C$.$fields$=[['Z',['$visible'],'D',['scaleFactor'],'I',['nrow','ncol'],'O',['raster','java.awt.image.WritableRaster','rgbData','byte[][]','dimension','java.awt.Dimension']]
,['I',['WHITE']]]

Clazz.newMeth(C$, 'c$$I$I',  function (_nrow, _ncol) {
Clazz.super_(C$, this);
this.nrow=_nrow;
this.ncol=_ncol;
this.dimension=Clazz.new_($I$(1,1).c$$I$I,[this.ncol, this.nrow]);
var size=this.nrow * this.ncol;
var ccm=Clazz.new_([$I$(3).getInstance$I(1000), Clazz.array(Integer.TYPE, -1, [8, 8, 8]), false, false, 1, 0],$I$(2,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I);
var csm=Clazz.new_([0, this.ncol, this.nrow, this.ncol, Clazz.array(Integer.TYPE, -1, [0, 1, 2]), Clazz.array(Integer.TYPE, -1, [0, 0, 0])],$I$(4,1).c$$I$I$I$I$IA$IA);
this.rgbData=Clazz.array(Byte.TYPE, [3, size]);
var databuffer=Clazz.new_($I$(5,1).c$$BAA$I,[this.rgbData, size]);
var raster=$I$(6,"createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point",[csm, databuffer, Clazz.new_($I$(7,1).c$$I$I,[0, 0])]);
this.image=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[ccm, raster, false, null]);
this.xmin=0;
this.xmax=this.ncol;
this.ymin=this.nrow;
this.ymax=0;
}, 1);

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (row_offset, col_offset, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in integer raster setBlock."]);
}if ((col_offset < 0) || (col_offset + val[0].length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in integer raster setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
for (var cindex=col_offset, nc=val[0].length + col_offset; cindex < nc; cindex++) {
var index=rindex * this.ncol + cindex;
var pixval=val[rindex - row_offset][cindex - col_offset];
this.rgbData[0][index]=(((pixval >> 16) & 255)|0);
this.rgbData[1][index]=(((pixval >> 8) & 255)|0);
this.rgbData[2][index]=(((pixval >> 0) & 255)|0);
}
}
});

Clazz.newMeth(C$, 'setRow$I$I$IA',  function (row, col_offset, val) {
if ((row < 0) || (row >= this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in integer raster setBlock."]);
}if ((col_offset < 0) || (col_offset + val.length > this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in integer raster setBlock."]);
}for (var cindex=col_offset, nc=val.length + col_offset; cindex < nc; cindex++) {
var index=row * this.ncol + cindex;
var pixval=val[cindex - col_offset];
this.rgbData[0][index]=(((pixval >> 16) & 255)|0);
this.rgbData[1][index]=(((pixval >> 8) & 255)|0);
this.rgbData[2][index]=(((pixval >> 0) & 255)|0);
}
});

Clazz.newMeth(C$, 'setCol$I$I$IA',  function (row_offset, col, val) {
if ((row_offset < 0) || (row_offset + val.length > this.nrow) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range in integer raster setBlock."]);
}if ((col < 0) || (col >= this.ncol) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range in integer raster setBlock."]);
}for (var rindex=row_offset, nr=val.length + row_offset; rindex < nr; rindex++) {
var index=rindex * this.ncol + col;
var pixval=val[rindex - row_offset];
this.rgbData[0][index]=(((pixval >> 16) & 255)|0);
this.rgbData[1][index]=(((pixval >> 8) & 255)|0);
this.rgbData[2][index]=(((pixval >> 0) & 255)|0);
}
});

Clazz.newMeth(C$, 'setCell$I$I$I',  function (_row, _col, val) {
var index=_row * this.ncol + _col;
this.rgbData[0][index]=(((val >> 16) & 255)|0);
this.rgbData[1][index]=(((val >> 8) & 255)|0);
this.rgbData[2][index]=(((val >> 0) & 255)|0);
});

Clazz.newMeth(C$, 'getCell$I$I',  function (_row, _col) {
var index=_row * this.ncol + _col;
return ((this.rgbData[0][index] & 255) << 16) | ((this.rgbData[1][index] & 255) << 8) | ((this.rgbData[2][index] & 255) << 0) ;
});

Clazz.newMeth(C$, 'getInterior$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var availableWidth=panel.getWidth$() - panel.getLeftGutter$() - panel.getRightGutter$() - 1 ;
var availableHeight=panel.getHeight$() - panel.getTopGutter$() - panel.getBottomGutter$() - 1 ;
this.scaleFactor=Math.min(availableWidth / this.dimension.width, availableHeight / this.dimension.height);
if (this.scaleFactor > 1 ) {
this.scaleFactor=1;
return this.dimension;
}return Clazz.new_([((this.scaleFactor * this.ncol)|0), ((this.scaleFactor * this.nrow)|0)],$I$(1,1).c$$I$I);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.scaleFactor < 1 ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image.getScaledInstance$I$I$I(((this.scaleFactor * this.image.getWidth$())|0), ((this.scaleFactor * this.image.getHeight$())|0), 8), panel.getLeftGutter$(), panel.getTopGutter$(), panel);
} else {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, panel.getLeftGutter$(), panel.getTopGutter$(), panel);
}});

C$.$static$=function(){C$.$static$=0;
C$.WHITE=16777215;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
