(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.StepperClipControl','org.opensourcephysics.media.core.VideoClipControl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClipControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported'], 'java.beans.PropertyChangeListener');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stepNumber=0;
this.videoFrameNumber=0;
this.rate=1;
this.looping=false;
this.timeStretch=1;
this.videoVisible=true;
this.loadedStepNumber=-1;
},1);

C$.$fields$=[['Z',['looping','videoVisible'],'D',['rate','timeStretch','savedFrameDuration'],'I',['stepNumber','videoFrameNumber','loadedStepNumber'],'O',['clip','org.opensourcephysics.media.core.VideoClip','video','org.opensourcephysics.media.core.Video','timeSource','org.opensourcephysics.media.core.DataTrack']]]

Clazz.newMeth(C$, 'getControl$org_opensourcephysics_media_core_VideoClip',  function (clip) {
var video=clip.getVideo$();
return (clip.isPlayAllSteps$() || video == null   || Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")  ? Clazz.new_($I$(1,1).c$$org_opensourcephysics_media_core_VideoClip,[clip]) : Clazz.new_($I$(2,1).c$$org_opensourcephysics_media_core_VideoClip,[clip]));
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoClip',  function (videoClip) {
Clazz.super_(C$, this);
this.clip=videoClip;
this.video=this.clip.getVideo$();
if (this.video != null ) this.video.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
}, 1);

Clazz.newMeth(C$, 'getVideoClip$',  function () {
return this.clip;
});

Clazz.newMeth(C$, 'play$',  function () {
});

Clazz.newMeth(C$, 'stop$',  function () {
});

Clazz.newMeth(C$, 'step$',  function () {
});

Clazz.newMeth(C$, 'back$',  function () {
});

Clazz.newMeth(C$, 'setFrameNumber$I',  function (n) {
if (this.clip.includesFrame$I(n)) {
this.stepNumber=this.clip.frameToStep$I(n);
this.videoFrameNumber=n;
}});

Clazz.newMeth(C$, 'setStepNumber$I',  function (n) {
this.stepNumber=n;
n=Math.max(0, this.clip.stepToFrame$I(n));
this.videoFrameNumber=n;
});

Clazz.newMeth(C$, 'getStepNumber$',  function () {
return this.stepNumber;
});

Clazz.newMeth(C$, 'setRate$D',  function (newRate) {
this.rate=newRate;
});

Clazz.newMeth(C$, 'getRate$',  function () {
return this.rate;
});

Clazz.newMeth(C$, 'getMeasuredRate$',  function () {
return this.rate;
});

Clazz.newMeth(C$, 'setLooping$Z',  function (loops) {
this.looping=loops;
});

Clazz.newMeth(C$, 'isLooping$',  function () {
return this.looping;
});

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return Math.max(0, this.videoFrameNumber);
});

Clazz.newMeth(C$, 'getTimeSource$',  function () {
return this.timeSource;
});

Clazz.newMeth(C$, 'setTimeSource$org_opensourcephysics_media_core_DataTrack',  function (source) {
var prev=this.timeSource;
this.timeSource=source;
if (prev == null  && this.timeSource != null  ) {
this.clip.savedStartTime=this.clip.isDefaultStartTime ? NaN : this.clip.getStartTime$();
this.clip.startTimeIsSaved=true;
this.savedFrameDuration=this.getMeanFrameDuration$();
} else if (prev != null  && this.timeSource == null  ) {
this.clip.setStartTime$D(this.clip.savedStartTime);
this.clip.startTimeIsSaved=false;
this.setFrameDuration$D(this.savedFrameDuration);
}if (this.timeSource != null  && this.timeSource.isTimeDataAvailable$() ) {
this.clip.setStartTime$D(this.timeSource.getVideoStartTime$() * 1000);
this.setFrameDuration$D(this.timeSource.getFrameDuration$() * 1000);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "startframe":
this.stepNumber=this.clip.frameToStep$I(this.getFrameNumber$());
break;
case "framenumber":
var n=(e.getNewValue$()).intValue$();
if (n != this.videoFrameNumber) {
this.setFrameNumber$I(n);
this.firePropertyChange$S$O$O("stepnumber", null, Integer.valueOf$I(this.stepNumber));
}break;
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.clip != null ) this.clip.dispose$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'isTimeSource$org_opensourcephysics_media_core_DataTrack',  function (track) {
if (track.getVideoPanel$() == null ) return false;
return track === track.getVideoPanel$().getPlayer$().getClipControl$().getTimeSource$() ;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClipControl, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var clipControl=obj;
control.setValue$S$D("rate", clipControl.getRate$());
control.setValue$S$D("delta_t", clipControl.getTimeSource$() != null  ? clipControl.savedFrameDuration : clipControl.getMeanFrameDuration$());
if (clipControl.isLooping$()) {
control.setValue$S$Z("looping", true);
}control.setValue$S$I("frame", clipControl.getFrameNumber$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var clipControl=obj;
var rate=control.getDouble$S("rate");
if (rate != NaN ) {
clipControl.setRate$D(rate);
}var dt=control.getDouble$S("delta_t");
if (dt != NaN ) {
clipControl.setFrameDuration$D(dt);
}clipControl.setLooping$Z(control.getBoolean$S("looping"));
if (control.getPropertyNamesRaw$().contains$O("frame")) {
var n=control.getInt$S("frame");
var vclip=clipControl.getVideoClip$();
n=vclip.frameToStep$I(n - vclip.frameShift);
clipControl.setStepNumber$I(n);
clipControl.loadedStepNumber=n;
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
