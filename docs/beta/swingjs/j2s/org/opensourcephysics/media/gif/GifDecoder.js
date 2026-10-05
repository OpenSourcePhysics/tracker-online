(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[[0,'java.awt.Color','java.awt.AlphaComposite','java.awt.Dimension','java.io.BufferedInputStream','org.opensourcephysics.tools.ResourceLoader','java.util.ArrayList','java.awt.image.BufferedImage',['org.opensourcephysics.media.gif.GifDecoder','.GifFrame'],'java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GifDecoder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['GifFrame',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.loopCount=1;
this.block=Clazz.array(Byte.TYPE, [256]);
this.blockSize=0;
this.dispose=0;
this.lastDispose=0;
this.transparency=false;
this.delay=0;
},1);

C$.$fields$=[['Z',['gctFlag','lctFlag','interlace','transparency'],'I',['status','width','height','gctSize','loopCount','bgIndex','bgColor','lastBgColor','pixelAspect','lctSize','ix','iy','iw','ih','blockSize','dispose','lastDispose','delay','transIndex','frameCount'],'O',['$in','java.io.BufferedInputStream','gct','int[]','+lct','+act','lastRect','java.awt.Rectangle','image','java.awt.image.BufferedImage','+lastImage','block','byte[]','prefix','short[]','suffix','byte[]','+pixelStack','+pixels','frames','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getDelay$I',  function (n) {
this.delay=-1;
if ((n >= 0) && (n < this.frameCount) ) {
this.delay=this.frames.get$I(n).delay;
}return this.delay;
});

Clazz.newMeth(C$, 'getFrameCount$',  function () {
return this.frameCount;
});

Clazz.newMeth(C$, 'getImage$',  function () {
return this.getFrame$I(0);
});

Clazz.newMeth(C$, 'getLoopCount$',  function () {
return this.loopCount;
});

Clazz.newMeth(C$, 'setPixels$',  function () {
var dest=(this.image.getRaster$().getDataBuffer$()).getData$();
if (this.lastDispose > 0) {
if (this.lastDispose == 3) {
var n=this.frameCount - 2;
if (n > 0) {
this.lastImage=this.getFrame$I(n - 1);
} else {
this.lastImage=null;
}}if (this.lastImage != null ) {
var prev=(this.lastImage.getRaster$().getDataBuffer$()).getData$();
System.arraycopy$O$I$O$I$I(prev, 0, dest, 0, this.width * this.height);
if (this.lastDispose == 2) {
var g=this.image.createGraphics$();
var c=null;
if (this.transparency) {
c=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
} else {
c=Clazz.new_($I$(1,1).c$$I,[this.lastBgColor]);
}g.setColor$java_awt_Color(c);
g.setComposite$java_awt_Composite($I$(2).Src);
g.fill$java_awt_Shape(this.lastRect);
g.dispose$();
}}}var pass=1;
var inc=8;
var iline=0;
for (var i=0; i < this.ih; i++) {
var line=i;
if (this.interlace) {
if (iline >= this.ih) {
++pass;
switch (pass) {
case 2:
iline=4;
break;
case 3:
iline=2;
inc=4;
break;
case 4:
iline=1;
inc=2;
}
}line=iline;
iline+=inc;
}line+=this.iy;
if (line < this.height) {
var k=line * this.width;
var dx=k + this.ix;
var dlim=dx + this.iw;
if ((k + this.width) < dlim) {
dlim=k + this.width;
}var sx=i * this.iw;
while (dx < dlim){
var index=this.pixels[sx++] & 255;
var c=this.act[index];
if (c != 0) {
dest[dx]=c;
}++dx;
}
}}
});

Clazz.newMeth(C$, 'getFrame$I',  function (n) {
var im=null;
if ((n >= 0) && (n < this.frameCount) ) {
im=this.frames.get$I(n).image;
}return im;
});

Clazz.newMeth(C$, 'getFrameSize$',  function () {
return Clazz.new_($I$(3,1).c$$I$I,[this.width, this.height]);
});

Clazz.newMeth(C$, 'read$java_io_BufferedInputStream',  function (input) {
this.init$();
if (input != null ) {
this.$in=input;
this.readHeader$();
if (!this.err$()) {
this.readContents$();
if (this.frameCount < 0) {
this.status=1;
}}try {
input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
} else {
this.status=2;
}return this.status;
});

Clazz.newMeth(C$, 'read$S',  function (name) {
this.status=0;
try {
this.$in=Clazz.new_([$I$(5).openInputStream$S(name)],$I$(4,1).c$$java_io_InputStream);
this.status=this.read$java_io_BufferedInputStream(this.$in);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.status=2;
} else {
throw e;
}
}
return this.status;
});

Clazz.newMeth(C$, 'decodeImageData$',  function () {
var NullCode=-1;
var npix=this.iw * this.ih;
var available;
var clear;
var code_mask;
var code_size;
var end_of_information;
var in_code;
var old_code;
var bits;
var code;
var count;
var i;
var datum;
var data_size;
var first;
var top;
var bi;
var pi;
if ((this.pixels == null ) || (this.pixels.length < npix) ) {
this.pixels=Clazz.array(Byte.TYPE, [npix]);
}if (this.prefix == null ) {
this.prefix=Clazz.array(Short.TYPE, [4096]);
}if (this.suffix == null ) {
this.suffix=Clazz.array(Byte.TYPE, [4096]);
}if (this.pixelStack == null ) {
this.pixelStack=Clazz.array(Byte.TYPE, [4097]);
}data_size=this.read$();
clear=1 << data_size;
end_of_information=clear + 1;
available=clear + 2;
old_code=NullCode;
code_size=data_size + 1;
code_mask=(1 << code_size) - 1;
for (code=0; code < clear; code++) {
this.prefix[code]=(0|0);
this.suffix[code]=(code|0);
}
datum=bits=count=first=top=pi=bi=0;
for (i=0; i < npix; ) {
if (top == 0) {
if (bits < code_size) {
if (count == 0) {
count=this.readBlock$();
if (count <= 0) {
break;
}bi=0;
}datum+=(this.block[bi] & 255) << bits;
bits+=8;
++bi;
--count;
continue;
}code=datum & code_mask;
datum>>=code_size;
bits-=code_size;
if ((code > available) || (code == end_of_information) ) {
break;
}if (code == clear) {
code_size=data_size + 1;
code_mask=(1 << code_size) - 1;
available=clear + 2;
old_code=NullCode;
continue;
}if (old_code == NullCode) {
this.pixelStack[top++]=this.suffix[code];
old_code=code;
first=code;
continue;
}in_code=code;
if (code == available) {
this.pixelStack[top++]=(first|0);
code=old_code;
}while (code > clear){
this.pixelStack[top++]=this.suffix[code];
code=this.prefix[code];
}
first=this.suffix[code] & 255;
if (available >= 4096) {
break;
}this.pixelStack[top++]=(first|0);
this.prefix[available]=(old_code|0);
this.suffix[available]=(first|0);
++available;
if (((available & code_mask) == 0) && (available < 4096) ) {
++code_size;
code_mask+=available;
}old_code=in_code;
}--top;
this.pixels[pi++]=this.pixelStack[top];
++i;
}
for (i=pi; i < npix; i++) {
this.pixels[i]=(0|0);
}
});

Clazz.newMeth(C$, 'err$',  function () {
return this.status != 0;
});

Clazz.newMeth(C$, 'init$',  function () {
this.status=0;
this.frameCount=0;
this.frames=Clazz.new_($I$(6,1));
this.gct=null;
this.lct=null;
});

Clazz.newMeth(C$, 'read$',  function () {
var curByte=0;
try {
curByte=this.$in.read$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.status=1;
} else {
throw e;
}
}
return curByte;
});

Clazz.newMeth(C$, 'readBlock$',  function () {
this.blockSize=this.read$();
var n=0;
if (this.blockSize > 0) {
try {
var count=0;
while (n < this.blockSize){
count=this.$in.read$BA$I$I(this.block, n, this.blockSize - n);
if (count == -1) {
break;
}n+=count;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
if (n < this.blockSize) {
this.status=1;
}}return n;
});

Clazz.newMeth(C$, 'readColorTable$I',  function (ncolors) {
var nbytes=3 * ncolors;
var tab=null;
var c=Clazz.array(Byte.TYPE, [nbytes]);
var n=0;
try {
n=this.$in.read$BA(c);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
if (n < nbytes) {
this.status=1;
} else {
tab=Clazz.array(Integer.TYPE, [256]);
var i=0;
var j=0;
while (i < ncolors){
var r=c[j++] & 255;
var g=c[j++] & 255;
var b=c[j++] & 255;
tab[i++]=-16777216 | (r << 16) | (g << 8) | b ;
}
}return tab;
});

Clazz.newMeth(C$, 'readContents$',  function () {
var done=false;
while (!(done || this.err$() )){
var code=this.read$();
switch (code) {
case 44:
this.readImage$();
break;
case 33:
code=this.read$();
switch (code) {
case 249:
this.readGraphicControlExt$();
break;
case 255:
this.readBlock$();
var app="";
for (var i=0; i < 11; i++) {
app+=String.fromCharCode(this.block[i]);
}
if (app.equals$O("NETSCAPE2.0")) {
this.readNetscapeExt$();
} else {
this.skip$();
}break;
default:
this.skip$();
}
break;
case 59:
done=true;
break;
case 0:
break;
default:
this.status=1;
}
}
});

Clazz.newMeth(C$, 'readGraphicControlExt$',  function () {
this.read$();
var packed=this.read$();
this.dispose=(packed & 28) >> 2;
if (this.dispose == 0) {
this.dispose=1;
}this.transparency=(packed & 1) != 0;
this.delay=this.readShort$() * 10;
this.transIndex=this.read$();
this.read$();
});

Clazz.newMeth(C$, 'readHeader$',  function () {
var id="";
for (var i=0; i < 6; i++) {
id+=String.fromCharCode(this.read$());
}
if (!id.startsWith$S("GIF")) {
this.status=1;
return;
}this.readLSD$();
if (this.gctFlag && !this.err$() ) {
this.gct=this.readColorTable$I(this.gctSize);
this.bgColor=this.gct[this.bgIndex];
}});

Clazz.newMeth(C$, 'readImage$',  function () {
this.ix=this.readShort$();
this.iy=this.readShort$();
this.iw=this.readShort$();
this.ih=this.readShort$();
var packed=this.read$();
this.lctFlag=(packed & 128) != 0;
this.interlace=(packed & 64) != 0;
this.lctSize=2 << (packed & 7);
if (this.lctFlag) {
this.lct=this.readColorTable$I(this.lctSize);
this.act=this.lct;
} else {
this.act=this.gct;
if (this.bgIndex == this.transIndex) {
this.bgColor=0;
}}var save=0;
if (this.transparency) {
save=this.act[this.transIndex];
this.act[this.transIndex]=0;
}if (this.act == null ) {
this.status=1;
}if (this.err$()) {
return;
}this.decodeImageData$();
this.skip$();
if (this.err$()) {
return;
}++this.frameCount;
this.image=Clazz.new_($I$(7,1).c$$I$I$I,[this.width, this.height, 3]);
this.setPixels$();
this.frames.add$O(Clazz.new_($I$(8,1).c$$java_awt_image_BufferedImage$I,[this.image, this.delay]));
if (this.transparency) {
this.act[this.transIndex]=save;
}this.resetFrame$();
});

Clazz.newMeth(C$, 'readLSD$',  function () {
this.width=this.readShort$();
this.height=this.readShort$();
var packed=this.read$();
this.gctFlag=(packed & 128) != 0;
this.gctSize=2 << (packed & 7);
this.bgIndex=this.read$();
this.pixelAspect=this.read$();
});

Clazz.newMeth(C$, 'readNetscapeExt$',  function () {
do {
this.readBlock$();
if (this.block[0] == 1) {
var b1=this.block[1] & 255;
var b2=this.block[2] & 255;
this.loopCount=(b2 << 8) | b1;
}} while ((this.blockSize > 0) && !this.err$() );
});

Clazz.newMeth(C$, 'readShort$',  function () {
return this.read$() | (this.read$() << 8);
});

Clazz.newMeth(C$, 'resetFrame$',  function () {
this.lastDispose=this.dispose;
this.lastRect=Clazz.new_($I$(9,1).c$$I$I$I$I,[this.ix, this.iy, this.iw, this.ih]);
this.lastImage=this.image;
this.lastBgColor=this.bgColor;
this.lct=null;
});

Clazz.newMeth(C$, 'skip$',  function () {
do {
this.readBlock$();
} while ((this.blockSize > 0) && !this.err$() );
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.GifDecoder, "GifFrame", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['delay'],'O',['image','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage$I',  function (im, del) {
;C$.$init$.apply(this);
this.image=im;
this.delay=del;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
