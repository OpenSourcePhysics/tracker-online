(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[[0,'java.io.BufferedOutputStream','java.io.FileOutputStream','org.opensourcephysics.media.gif.NeuQuant','java.awt.image.BufferedImage','org.opensourcephysics.media.gif.LZWEncoder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnimatedGifEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transparent=null;
this.repeat=-1;
this.delay=0;
this.started=false;
this.usedEntry=Clazz.array(Boolean.TYPE, [256]);
this.palSize=7;
this.dispose=-1;
this.closeStream=false;
this.firstFrame=true;
this.sizeSet=false;
this.sample=10;
},1);

C$.$fields$=[['Z',['started','closeStream','firstFrame','sizeSet'],'I',['width','height','transIndex','repeat','delay','colorDepth','palSize','dispose','sample'],'O',['transparent','java.awt.Color','out','java.io.OutputStream','image','java.awt.image.BufferedImage','pixels','byte[]','+indexedPixels','+colorTab','usedEntry','boolean[]']]]

Clazz.newMeth(C$, 'setDelay$I',  function (ms) {
this.delay=Math.round(ms / 10.0);
});

Clazz.newMeth(C$, 'setDispose$I',  function (code) {
if (code >= 0) {
this.dispose=code;
}});

Clazz.newMeth(C$, 'setRepeat$I',  function (iter) {
if (iter >= 0) {
this.repeat=iter;
}});

Clazz.newMeth(C$, 'setTransparent$java_awt_Color',  function (c) {
this.transparent=c;
});

Clazz.newMeth(C$, 'addFrame$java_awt_image_BufferedImage',  function (im) {
if ((im == null ) || !this.started ) {
return false;
}try {
if (!this.sizeSet) {
this.setSize$I$I(im.getWidth$(), im.getHeight$());
}this.image=im;
this.getImagePixels$();
this.analyzePixels$();
if (this.firstFrame) {
this.writeLSD$();
this.writePalette$();
if (this.repeat >= 0) {
this.writeNetscapeExt$();
}}this.writeGraphicCtrlExt$();
this.writeImageDesc$();
if (!this.firstFrame) {
this.writePalette$();
}this.writePixels$();
this.firstFrame=false;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'finish$',  function () {
if (!this.started) {
return false;
}var ok=true;
this.started=false;
try {
this.out.write$I(59);
this.out.flush$();
if (this.closeStream) {
this.out.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
ok=false;
} else {
throw e;
}
}
this.transIndex=0;
this.out=null;
this.image=null;
this.pixels=null;
this.indexedPixels=null;
this.colorTab=null;
this.closeStream=false;
this.firstFrame=true;
return ok;
});

Clazz.newMeth(C$, 'setFrameRate$F',  function (fps) {
if (fps != 0.0 ) {
this.delay=Math.round(100.0 / fps);
}});

Clazz.newMeth(C$, 'setQuality$I',  function (quality) {
if (quality < 1) {
quality=1;
}this.sample=quality;
});

Clazz.newMeth(C$, 'setSize$I$I',  function (w, h) {
if (this.started && !this.firstFrame ) {
return;
}this.width=w;
this.height=h;
if (this.width < 1) {
this.width=320;
}if (this.height < 1) {
this.height=240;
}this.sizeSet=true;
});

Clazz.newMeth(C$, 'start$java_io_OutputStream',  function (os) {
if (os == null ) {
return false;
}var ok=true;
this.closeStream=false;
this.out=os;
try {
this.writeString$S("GIF89a");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
ok=false;
} else {
throw e;
}
}
return this.started=ok;
});

Clazz.newMeth(C$, 'start$S',  function (file) {
var ok=true;
try {
this.out=Clazz.new_([Clazz.new_($I$(2,1).c$$S,[file])],$I$(1,1).c$$java_io_OutputStream);
ok=this.start$java_io_OutputStream(this.out);
this.closeStream=true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
ok=false;
} else {
throw e;
}
}
return this.started=ok;
});

Clazz.newMeth(C$, 'analyzePixels$',  function () {
var len=this.pixels.length;
var nPix=(len/3|0);
this.indexedPixels=Clazz.array(Byte.TYPE, [nPix]);
var nq=Clazz.new_($I$(3,1).c$$BA$I$I,[this.pixels, len, this.sample]);
this.colorTab=nq.process$();
for (var i=0; i < this.colorTab.length; i+=3) {
var temp=this.colorTab[i];
this.colorTab[i]=this.colorTab[i + 2];
this.colorTab[i + 2]=temp;
this.usedEntry[(i/3|0)]=false;
}
var k=0;
for (var i=0; i < nPix; i++) {
var index=nq.map$I$I$I(this.pixels[k++] & 255, this.pixels[k++] & 255, this.pixels[k++] & 255);
this.usedEntry[index]=true;
this.indexedPixels[i]=(index|0);
}
this.pixels=null;
this.colorDepth=8;
this.palSize=7;
if (this.transparent != null ) {
this.transIndex=this.findClosest$java_awt_Color(this.transparent);
}});

Clazz.newMeth(C$, 'findClosest$java_awt_Color',  function (c) {
if (this.colorTab == null ) {
return -1;
}var r=c.getRed$();
var g=c.getGreen$();
var b=c.getBlue$();
var minpos=0;
var dmin=16777216;
var len=this.colorTab.length;
for (var i=0; i < len; ) {
var dr=r - (this.colorTab[i++] & 255);
var dg=g - (this.colorTab[i++] & 255);
var db=b - (this.colorTab[i] & 255);
var d=dr * dr + dg * dg + db * db;
var index=(i/3|0);
if (this.usedEntry[index] && (d < dmin) ) {
dmin=d;
minpos=index;
}++i;
}
return minpos;
});

Clazz.newMeth(C$, 'getImagePixels$',  function () {
var w=this.image.getWidth$();
var h=this.image.getHeight$();
var type=this.image.getType$();
if ((w != this.width) || (h != this.height) || (type != 5)  ) {
var temp=Clazz.new_($I$(4,1).c$$I$I$I,[this.width, this.height, 5]);
var g=temp.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, null);
g.dispose$();
this.image=temp;
}this.pixels=(this.image.getRaster$().getDataBuffer$()).getData$();
this.image.flush$();
});

Clazz.newMeth(C$, 'writeGraphicCtrlExt$',  function () {
this.out.write$I(33);
this.out.write$I(249);
this.out.write$I(4);
var transp;
var disp;
if (this.transparent == null ) {
transp=0;
disp=0;
} else {
transp=1;
disp=2;
}if (this.dispose >= 0) {
disp=this.dispose & 7;
}disp<<=2;
this.out.write$I(0 | disp | 0 | transp );
this.writeShort$I(this.delay);
this.out.write$I(this.transIndex);
this.out.write$I(0);
});

Clazz.newMeth(C$, 'writeImageDesc$',  function () {
this.out.write$I(44);
this.writeShort$I(0);
this.writeShort$I(0);
this.writeShort$I(this.width);
this.writeShort$I(this.height);
if (this.firstFrame) {
this.out.write$I(0);
} else {
this.out.write$I(128 | 0 | 0 | 0 | this.palSize );
}});

Clazz.newMeth(C$, 'writeLSD$',  function () {
this.writeShort$I(this.width);
this.writeShort$I(this.height);
this.out.write$I((128 | 112 | 0 | this.palSize ));
this.out.write$I(0);
this.out.write$I(0);
});

Clazz.newMeth(C$, 'writeNetscapeExt$',  function () {
this.out.write$I(33);
this.out.write$I(255);
this.out.write$I(11);
this.writeString$S("NETSCAPE2.0");
this.out.write$I(3);
this.out.write$I(1);
this.writeShort$I(this.repeat);
this.out.write$I(0);
});

Clazz.newMeth(C$, 'writePalette$',  function () {
this.out.write$BA$I$I(this.colorTab, 0, this.colorTab.length);
var n=(768) - this.colorTab.length;
for (var i=0; i < n; i++) {
this.out.write$I(0);
}
});

Clazz.newMeth(C$, 'writePixels$',  function () {
var encoder=Clazz.new_($I$(5,1).c$$I$I$BA$I,[this.width, this.height, this.indexedPixels, this.colorDepth]);
encoder.encode$java_io_OutputStream(this.out);
});

Clazz.newMeth(C$, 'writeShort$I',  function (value) {
this.out.write$I(value & 255);
this.out.write$I((value >> 8) & 255);
});

Clazz.newMeth(C$, 'writeString$S',  function (s) {
var b=s.getBytes$();
this.out.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
