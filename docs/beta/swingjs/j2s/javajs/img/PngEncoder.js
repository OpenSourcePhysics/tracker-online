(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','javajs.img.PngEncoder',['javajs.img.PngEncoder','.Chunk'],'javajs.img.CRCEncoder',['javajs.img.PngEncoder','.PNG'],'java.util.zip.Deflater','java.io.ByteArrayOutputStream','java.util.zip.DeflaterOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PngEncoder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javajs.img.CRCEncoder');
C$.$classes$=[['PNG',2],['Chunk',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filter=0;
},1);

C$.$fields$=[['Z',['encodeAlpha'],'I',['filter','bytesPerPixel','compressionLevel','byteWidth'],'S',['comment'],'O',['png','javajs.img.PngEncoder.PNG','transparentColor','Integer','scanLines','byte[]']]
,['O',['pngIdBytes','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParams$java_util_Map',  function (params) {
if (this.quality < 0) {
this.quality=(params.containsKey$O("qualityPNG") ? (params.get$O("qualityPNG")).intValue$() : 2);
} else if (this.quality > 9 && this.quality < 90 ) {
this.quality=9;
}this.dpi=300;
if (this.quality >= 90) {
this.dpi=this.quality;
this.quality=2;
}this.encodeAlpha=false;
this.filter=0;
this.compressionLevel=this.quality;
this.transparentColor=params.get$O("transparentColor");
this.comment=params.get$O("comment");
var type=(params.get$O("type") + "0000").substring$I$I(0, 4);
var appPrefix=params.get$O("pngAppPrefix");
this.png=Clazz.new_($I$(5,1).c$$S$S,[this, null, type, appPrefix]);
this.png.bytes=params.get$O("pngImgData");
this.png.appData=params.get$O("pngAppData");
});

Clazz.newMeth(C$, 'generate$',  function () {
var ok;
try {
ok=(this.png.bytes == null  ? p$2.pngEncode.apply(this, []) : this.png.readDataFromBytes$() > 0);
if (ok) {
this.writeBytes$BA(C$.pngIdBytes);
this.png.writePNGData$();
var b=this.getBytes$();
this.out.write$BA$I$I(b, 0, b.length);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
ok=false;
} else {
throw e;
}
}
if (!ok) {
this.out.cancel$();
}});

Clazz.newMeth(C$, 'pngEncode',  function () {
p$2.addHeader.apply(this, []);
p$2.addText$S.apply(this, ["Software\u0000" + this.comment]);
p$2.addText$S.apply(this, ["Creation Time\u0000" + this.date]);
if (this.dpi > 0) p$2.addPhysicalSize.apply(this, []);
if (!this.encodeAlpha && this.transparentColor != null  ) p$2.addTransparentColor$I.apply(this, [this.transparentColor.intValue$()]);
if (!p$2.addImageData.apply(this, [])) return false;
p$2.addEnd.apply(this, []);
return true;
}, p$2);

Clazz.newMeth(C$, 'addHeader',  function () {
var c=Clazz.new_([this, null, "IHDR", Clazz.array(Byte.TYPE, [13])],$I$(3,1).c$$S$BA);
c.addInt4$I(this.width);
c.addInt4$I(this.height);
c.addByte$I(8);
c.addByte$I(this.encodeAlpha ? 6 : 2);
c.addByte$I(0);
c.addByte$I(0);
c.addByte$I(0);
this.png.addChunk$javajs_img_PngEncoder_Chunk(c);
}, p$2);

Clazz.newMeth(C$, 'addText$S',  function (msg) {
this.png.addChunk$javajs_img_PngEncoder_Chunk(Clazz.new_($I$(3,1).c$$S$S,[this, null, "tEXt", msg]));
}, p$2);

Clazz.newMeth(C$, 'addTransparentColor$I',  function (icolor) {
var c=Clazz.new_([this, null, "tRNS", Clazz.array(Byte.TYPE, [6])],$I$(3,1).c$$S$BA);
c.addInt2$I((icolor >> 16) & 255);
c.addInt2$I((icolor >> 8) & 255);
c.addInt2$I(icolor & 255);
this.png.addChunk$javajs_img_PngEncoder_Chunk(c);
}, p$2);

Clazz.newMeth(C$, 'addPhysicalSize',  function () {
var c=Clazz.new_([this, null, "pHYs", Clazz.array(Byte.TYPE, [9])],$I$(3,1).c$$S$BA);
var ppm=Long.$ival(Math.round$D(39.3700787 * this.dpi));
c.addInt4$I(ppm);
c.addInt4$I(ppm);
c.addByte$I(0);
this.png.addChunk$javajs_img_PngEncoder_Chunk(c);
}, p$2);

Clazz.newMeth(C$, 'addImageData',  function () {
this.bytesPerPixel=(this.encodeAlpha ? 4 : 3);
this.byteWidth=this.width * this.bytesPerPixel;
var scanWidth=this.byteWidth + 1;
var rowsLeft=this.height;
var nRows;
var scanPos;
var deflater=Clazz.new_($I$(6,1).c$$I,[this.compressionLevel]);
var outBytes=Clazz.new_($I$(7,1).c$$I,[1024]);
var compBytes=Clazz.new_($I$(8,1).c$$java_io_ByteArrayOutputStream$java_util_zip_Deflater,[outBytes, deflater]);
var pt=0;
try {
while (rowsLeft > 0){
nRows=Math.max(1, Math.min((32767/scanWidth|0), rowsLeft));
this.scanLines=Clazz.array(Byte.TYPE, [scanWidth * nRows]);
var nPixels=this.width * nRows;
scanPos=0;
for (var i=0; i < nPixels; i++, pt++) {
if (i % this.width == 0) {
this.scanLines[scanPos++]=(this.filter|0);
}this.scanLines[scanPos++]=(((this.pixels[pt] >> 16) & 255)|0);
this.scanLines[scanPos++]=(((this.pixels[pt] >> 8) & 255)|0);
this.scanLines[scanPos++]=(((this.pixels[pt]) & 255)|0);
if (this.encodeAlpha) {
this.scanLines[scanPos++]=(((this.pixels[pt] >> 24) & 255)|0);
}}
compBytes.write$BA$I$I(this.scanLines, 0, scanPos);
rowsLeft-=nRows;
}
compBytes.close$();
var compressedLines=outBytes.toByteArray$();
deflater.finish$();
this.png.addChunk$javajs_img_PngEncoder_Chunk(Clazz.new_($I$(3,1).c$$S$BA,[this, null, "IDAT", compressedLines]));
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.toString());
return false;
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$, 'addEnd',  function () {
this.png.addChunk$javajs_img_PngEncoder_Chunk(Clazz.new_([this, null, "IEND", Clazz.array(Byte.TYPE, [0])],$I$(3,1).c$$S$BA));
}, p$2);

C$.$static$=function(){C$.$static$=0;
C$.pngIdBytes=Clazz.array(Byte.TYPE, -1, [-119, 80, 78, 71, 13, 10, 26, 10]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PngEncoder, "PNG", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.data=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['isValid'],'I',['dataPt','textPt'],'S',['type','appPrefix'],'O',['appData','byte[]','+bytes','data','java.util.List']]]

Clazz.newMeth(C$, 'c$$S$S',  function (type, appPrefix) {
;C$.$init$.apply(this);
this.type=type;
if (appPrefix == null ) appPrefix="#SwingJS.";
if (appPrefix.length$() < 9) appPrefix=(appPrefix + ".........");
if (appPrefix.length$() > 9) appPrefix=appPrefix.substring$I$I(0, 9);
this.appPrefix=appPrefix;
}, 1);

Clazz.newMeth(C$, 'addChunk$javajs_img_PngEncoder_Chunk',  function (c) {
if (this.textPt <= 0 && c.name.equals$O("tEXt") ) this.textPt=this.data.size$();
if (!this.isValid && c.name.equals$O("IDAT") ) this.isValid=true;
this.data.add$O(c);
});

Clazz.newMeth(C$, 'writePNGData$',  function () {
if (this.appData != null ) {
p$1.setJmolTypeText$I$I.apply(this, [0, 0]);
this.dataPt=$I$(2).pngIdBytes.length;
var last=this.data.get$I(this.data.size$() - 1);
if (last.name == null ) this.data.remove$I(this.data.size$() - 1);
for (var i=0, n=this.data.size$(); i < n; i++) {
this.dataPt+=this.data.get$I(i).getWritelength$();
}
this.data.add$O(Clazz.new_($I$(3,1).c$$S$BA,[this, null, null, this.appData]));
p$1.setJmolTypeText$I$I.apply(this, [this.dataPt, this.appData.length]);
}for (var i=0, n=this.data.size$(); i < n; i++) {
this.data.get$I(i).write$();
}
});

Clazz.newMeth(C$, 'getApplicationText$I$I',  function (nPNG, nData) {
var sPNG="000000000" + nPNG;
sPNG=sPNG.substring$I(sPNG.length$() - 9);
var sData="000000000" + nData;
sData=sData.substring$I(sData.length$() - 9);
return this.appPrefix + "\u0000" + this.type + sPNG + "+" + sData ;
});

Clazz.newMeth(C$, 'setJmolTypeText$I$I',  function (nPNG, nState) {
var s=this.getApplicationText$I$I(nPNG, nState);
var test=this.appPrefix.getBytes$();
var c=Clazz.new_($I$(3,1).c$$S$S,[this, null, "tEXt", s]);
if (this.textPt == 1 && this.data.get$I(1).startsWith$BA(test) ) {
this.data.remove$I(1);
}this.data.add$I$O(1, c);
this.textPt=1;
}, p$1);

Clazz.newMeth(C$, 'readDataFromBytes$',  function () {
for (var i=$I$(2).pngIdBytes.length; --i >= 0; ) if (this.bytes[i] != $I$(2).pngIdBytes[i]) return -1;

this.dataPt=$I$(2).pngIdBytes.length;
while (this.dataPt < this.bytes.length){
if (!p$1.readDataChunk.apply(this, [])) break;
}
if (!this.isValid) return -1;
if (this.dataPt < this.bytes.length) {
var extra=Clazz.array(Byte.TYPE, [this.bytes.length - this.dataPt]);
System.arraycopy$O$I$O$I$I(this.bytes, this.dataPt, extra, 0, extra.length);
this.data.add$O(Clazz.new_($I$(3,1).c$$S$BA,[this, null, null, extra]));
}return this.bytes.length;
});

Clazz.newMeth(C$, 'readDataChunk',  function () {
var n=p$1.readInt4.apply(this, []);
var b=Clazz.array(Byte.TYPE, [n]);
var name= String.instantialize(p$1.readBytes$BA.apply(this, [this.b$['javajs.img.PngEncoder'].int4]));
p$1.readBytes$BA.apply(this, [b]);
this.addChunk$javajs_img_PngEncoder_Chunk(Clazz.new_($I$(3,1).c$$S$BA,[this, null, name, b]));
this.dataPt+=4;
return (n > 0 || !name.equals$O("IEND") );
}, p$1);

Clazz.newMeth(C$, 'readInt4',  function () {
var j=this.dataPt;
var n=(this.bytes[j + 3] & 255) | (this.bytes[j + 2] & 255) << 8 | (this.bytes[j + 1] & 255) << 16 | (this.bytes[j] & 255) << 24;
this.dataPt+=4;
return n | 0;
}, p$1);

Clazz.newMeth(C$, 'readBytes$BA',  function (b) {
System.arraycopy$O$I$O$I$I(this.bytes, this.dataPt, b, 0, b.length);
this.dataPt+=b.length;
return b;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PngEncoder, "Chunk", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['len','pt'],'S',['name','text'],'O',['bytes','byte[]']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, text) {
C$.c$$S$BA.apply(this, [name, text.getBytes$()]);
this.text=text;
}, 1);

Clazz.newMeth(C$, 'c$$S$BA',  function (name, bytes) {
;C$.$init$.apply(this);
this.name=name;
this.bytes=bytes;
this.len=bytes.length;
}, 1);

Clazz.newMeth(C$, 'write$',  function () {
if (this.name == null ) {
this.b$['javajs.img.CRCEncoder'].writeBytes$BA.apply(this.b$['javajs.img.CRCEncoder'], [this.bytes]);
} else {
this.b$['javajs.img.CRCEncoder'].writeInt4$I.apply(this.b$['javajs.img.CRCEncoder'], [this.len]);
this.b$['javajs.img.PngEncoder'].startPos=this.b$['javajs.img.PngEncoder'].bytePos;
this.b$['javajs.img.CRCEncoder'].writeString$S.apply(this.b$['javajs.img.CRCEncoder'], [this.name]);
this.b$['javajs.img.CRCEncoder'].writeBytes$BA.apply(this.b$['javajs.img.CRCEncoder'], [this.bytes]);
this.b$['javajs.img.CRCEncoder'].writeCRC$.apply(this.b$['javajs.img.CRCEncoder'], []);
}return this.len;
});

Clazz.newMeth(C$, 'addByte$I',  function (i) {
this.bytes[this.pt++]=(i|0);
});

Clazz.newMeth(C$, 'addInt2$I',  function (n) {
$I$(4).getInt2$I$BA$I(n, this.bytes, this.pt);
this.pt+=2;
});

Clazz.newMeth(C$, 'addInt4$I',  function (n) {
$I$(4).getInt4$I$BA$I(n, this.bytes, this.pt);
this.pt+=4;
});

Clazz.newMeth(C$, 'getWritelength$',  function () {
return this.len + 12;
});

Clazz.newMeth(C$, 'startsWith$BA',  function (test) {
if (this.bytes.length < test.length) return false;
for (var i=test.length; --i >= 0; ) if (this.bytes[i] != test[i]) {
return false;
}
return true;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[Chunk " + this.name + " " + this.len + " " + (this.text == null  ? "" : this.text) + "]" ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-23 15:01:48 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
