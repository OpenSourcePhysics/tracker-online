(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[[0,'org.opensourcephysics.media.gif.AnimatedGifEncoder','org.opensourcephysics.media.gif.GifVideoType','java.awt.Dimension','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GifVideoRecorder", null, 'org.opensourcephysics.media.core.ScratchVideoRecorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.encoder=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['encoder','org.opensourcephysics.media.gif.AnimatedGifEncoder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoType.apply(this,[Clazz.new_($I$(2,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setFrameDuration$D',  function (millis) {
C$.superclazz.prototype.setFrameDuration$D.apply(this, [millis]);
this.encoder.setDelay$I((this.frameDuration|0));
});

Clazz.newMeth(C$, 'getGifEncoder$',  function () {
return this.encoder;
});

Clazz.newMeth(C$, 'saveScratch$',  function () {
this.encoder.finish$();
});

Clazz.newMeth(C$, 'startRecording$',  function () {
if ((this.dim == null ) && (this.frameImage != null ) ) {
this.dim=Clazz.new_([this.frameImage.getWidth$java_awt_image_ImageObserver(null), this.frameImage.getHeight$java_awt_image_ImageObserver(null)],$I$(3,1).c$$I$I);
}if (this.dim != null ) {
this.encoder.setSize$I$I(this.dim.width, this.dim.height);
}this.encoder.setRepeat$I(0);
return this.encoder.start$S(this.scratchFile.getAbsolutePath$());
});

Clazz.newMeth(C$, 'append$java_awt_Image',  function (image) {
var bi;
if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) {
bi=image;
} else {
if (this.dim == null ) {
return false;
}bi=Clazz.new_($I$(4,1).c$$I$I$I,[this.dim.width, this.dim.height, 1]);
var g=bi.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, null);
g.dispose$();
}this.encoder.addFrame$java_awt_image_BufferedImage(bi);
return true;
});

Clazz.newMeth(C$, 'getCodec$',  function () {
return null;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
