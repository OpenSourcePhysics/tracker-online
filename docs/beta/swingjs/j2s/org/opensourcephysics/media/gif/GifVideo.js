(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),p$1={},I$=[[0,'org.opensourcephysics.media.gif.GifVideo','org.opensourcephysics.media.core.VideoIO','java.util.HashSet','org.opensourcephysics.media.gif.GifDecoder','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.media.core.ImageCoordSystem','org.opensourcephysics.media.core.DoubleArray','javax.swing.Timer',['org.opensourcephysics.media.gif.GifVideo','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GifVideo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.VideoAdapter');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panels=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['decoder','org.opensourcephysics.media.gif.GifDecoder','timer','javax.swing.Timer','panels','java.util.HashSet']]]

Clazz.newMeth(C$, 'c$$S',  function (gifName) {
Clazz.super_(C$, this);
this.load$S(gifName);
p$1.createTimer.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.panels.add$O(panel);
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
});

Clazz.newMeth(C$, 'play$',  function () {
if (this.getFrameCount$() == 1) {
return;
}if (!this.timer.isRunning$()) {
if (this.getFrameNumber$() >= this.getEndFrameNumber$()) {
this.setFrameNumber$I(this.getStartFrameNumber$());
}this.timer.restart$();
this.firePropertyChange$S$O$O("playing", null, Boolean.TRUE);
}});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.timer.isRunning$()) {
this.timer.stop$();
this.firePropertyChange$S$O$O("playing", null, Boolean.FALSE);
}});

Clazz.newMeth(C$, 'setFrameNumber$I',  function (n) {
C$.superclazz.prototype.setFrameNumber$I.apply(this, [n]);
n=this.getFrameNumber$();
var index=Math.min(n, this.decoder.getFrameCount$() - 1);
this.rawImage=this.decoder.getFrame$I(index);
this.invalidateVideoAndFilter$();
this.notifyFrame$I$Z(n, false);
var it=this.panels.iterator$();
while (it.hasNext$()){
var panel=it.next$();
panel.repaint$();
}
});

Clazz.newMeth(C$, 'getEndTime$',  function () {
var n=this.getEndFrameNumber$();
return this.getFrameTime$I(n) + this.decoder.getDelay$I(n);
});

Clazz.newMeth(C$, 'getFrameCountDurationMS$',  function () {
var n=this.getFrameCount$() - 1;
return this.getFrameTime$I(n) + this.decoder.getDelay$I(n);
});

Clazz.newMeth(C$, 'load$S',  function (gifName) {
this.decoder=Clazz.new_($I$(4,1));
var status=this.decoder.read$S(gifName);
if (status == 2) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Gif " + gifName + " not found" ]);
} else if (status == 1) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["File format error"]);
}this.setProperty$S$O("name", gifName);
if (gifName.indexOf$S(":") == -1) {
this.setProperty$S$O("path", $I$(5).forwardSlash$S(gifName));
var res=$I$(6).getResource$S(gifName);
if (res != null ) this.setProperty$S$O("absolutePath", res.getAbsolutePath$());
} else {
this.setProperty$S$O("path", $I$(5).getRelativePath$S(gifName));
this.setProperty$S$O("absolutePath", gifName);
}this.setFrameCount$I(this.decoder.getFrameCount$());
this.startFrameNumber=0;
this.endFrameNumber=this.frameCount - 1;
this.setStartTimes$();
p$1.setImage$java_awt_image_BufferedImage.apply(this, [this.decoder.getFrame$I(0)]);
});

Clazz.newMeth(C$, 'setStartTimes$',  function () {
this.startTimesMS=Clazz.array(Double.TYPE, [this.frameCount]);
this.startTimesMS[0]=0;
for (var i=1; i < this.startTimesMS.length; i++) {
this.startTimesMS[i]=this.startTimesMS[i - 1] + this.decoder.getDelay$I(i - 1);
}
});

Clazz.newMeth(C$, 'setImage$java_awt_image_BufferedImage',  function (image) {
this.rawImage=image;
this.size.width=image.getWidth$();
this.size.height=image.getHeight$();
this.refreshBufferedImage$();
this.coords=Clazz.new_($I$(7,1).c$$I$org_opensourcephysics_media_core_Video,[this.frameCount, this]);
this.aspects=Clazz.new_($I$(8,1).c$$I$D,[this.frameCount, 1]);
}, p$1);

Clazz.newMeth(C$, 'createTimer',  function () {
var delay=this.decoder.getDelay$I(0);
this.timer=Clazz.new_([delay, ((P$.GifVideo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GifVideo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.VideoAdapter'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], []) < this.b$['org.opensourcephysics.media.core.VideoAdapter'].getEndFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], [])) {
var delay=this.b$['org.opensourcephysics.media.gif.GifVideo'].decoder.getDelay$I(this.b$['org.opensourcephysics.media.core.VideoAdapter'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], []) + 1);
this.b$['org.opensourcephysics.media.gif.GifVideo'].timer.setDelay$I(((delay / this.b$['org.opensourcephysics.media.core.VideoAdapter'].getRate$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], []))|0));
this.b$['org.opensourcephysics.media.gif.GifVideo'].setFrameNumber$I.apply(this.b$['org.opensourcephysics.media.gif.GifVideo'], [this.b$['org.opensourcephysics.media.core.VideoAdapter'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], []) + 1]);
} else if (this.b$['org.opensourcephysics.media.gif.GifVideo'].looping) {
var delay=this.b$['org.opensourcephysics.media.gif.GifVideo'].decoder.getDelay$I(this.b$['org.opensourcephysics.media.core.VideoAdapter'].getStartFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], []));
this.b$['org.opensourcephysics.media.gif.GifVideo'].timer.setDelay$I(((delay / this.b$['org.opensourcephysics.media.core.VideoAdapter'].getRate$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], []))|0));
this.b$['org.opensourcephysics.media.gif.GifVideo'].setFrameNumber$I.apply(this.b$['org.opensourcephysics.media.gif.GifVideo'], [this.b$['org.opensourcephysics.media.core.VideoAdapter'].getStartFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoAdapter'], [])]);
} else {
this.b$['org.opensourcephysics.media.gif.GifVideo'].stop$.apply(this.b$['org.opensourcephysics.media.gif.GifVideo'], []);
}});
})()
), Clazz.new_(P$.GifVideo$1.$init$,[this, null]))],$I$(9,1).c$$I$java_awt_event_ActionListener);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);

Clazz.newMeth(C$, 'getTypeName$',  function () {
return "Gif";
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.GifVideo, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.media.core.VideoAdapter','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createVideo$S',  function (path) {
var video=Clazz.new_($I$(1,1).c$$S,[path]);
var gifType=$I$(2).getVideoType$S$S("Gif", null);
if (gifType != null ) video.setProperty$S$O("video_type", gifType);
return video;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
