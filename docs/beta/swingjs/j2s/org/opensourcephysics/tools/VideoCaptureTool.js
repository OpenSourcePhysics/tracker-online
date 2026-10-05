(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.media.core.VideoGrabber']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoCaptureTool", null, null, ['org.opensourcephysics.tools.Tool', 'org.opensourcephysics.tools.VideoTool']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mediaCap','org.opensourcephysics.tools.VideoCaptureTool']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (ignored) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addFrame$java_awt_image_BufferedImage',  function (image) {
return p$1.getGrabber.apply(this, []).addFrame$java_awt_image_BufferedImage(image);
});

Clazz.newMeth(C$, 'clear$',  function () {
p$1.getGrabber.apply(this, []).clear$();
});

Clazz.newMeth(C$, 'setRecording$Z',  function (record) {
p$1.getGrabber.apply(this, []).setRecording$Z(record);
});

Clazz.newMeth(C$, 'isRecording$',  function () {
return p$1.getGrabber.apply(this, []).isRecording$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
p$1.getGrabber.apply(this, []).setVisible$Z(visible);
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return p$1.getGrabber.apply(this, []).isVisible$();
});

Clazz.newMeth(C$, 'canCapture$',  function () {
return p$1.getGrabber.apply(this, []) != null ;
});

Clazz.newMeth(C$, 'setVideoType$org_opensourcephysics_media_core_VideoType',  function (type) {
p$1.getGrabber.apply(this, []).setVideoType$org_opensourcephysics_media_core_VideoType(type);
});

Clazz.newMeth(C$, 'setFrameRate$D',  function (fps) {
p$1.getGrabber.apply(this, []).setFrameRate$D(fps);
});

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, noReply) {
if (job == null ) {
return;
}var path=Clazz.new_([job.getXML$()],$I$(1,1).c$$S).getString$S("imagepath");
if (path != null ) {
var image=$I$(2).getBufferedImage$S(path);
if (image != null ) {
this.addFrame$java_awt_image_BufferedImage(image);
}}});

Clazz.newMeth(C$, 'getTool$',  function () {
return $I$(3).getTool$();
}, 1);

Clazz.newMeth(C$, 'getGrabber',  function () {
if (this.mediaCap == null ) {
this.mediaCap=Clazz.new_($I$(3,1));
}return this.mediaCap;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
