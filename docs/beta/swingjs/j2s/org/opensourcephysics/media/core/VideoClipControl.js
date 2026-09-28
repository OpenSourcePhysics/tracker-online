(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'javax.swing.SwingUtilities',['org.opensourcephysics.media.core.ClipControl','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoClipControl", null, 'org.opensourcephysics.media.core.ClipControl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoClip',  function (videoClip) {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoClip.apply(this,[videoClip]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'play$',  function () {
this.video.play$();
});

Clazz.newMeth(C$, 'stop$',  function () {
this.video.stop$();
});

Clazz.newMeth(C$, 'step$',  function () {
this.video.stop$();
this.setStepNumber$I(this.stepNumber + 1);
});

Clazz.newMeth(C$, 'back$',  function () {
this.video.stop$();
this.setStepNumber$I(this.stepNumber - 1);
});

Clazz.newMeth(C$, 'setStepNumber$I',  function (n) {
if (n == this.stepNumber && this.clip.stepToFrame$I(n) == this.getFrameNumber$() ) {
return;
}n=Math.max(0, n);
var stepNum=Math.min(this.clip.getStepCount$() - 1, n);
$I$(1,"invokeLater$Runnable",[((P$.VideoClipControl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoClipControl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.VideoClipControl'].video.setFrameNumber$I.apply(this.b$['org.opensourcephysics.media.core.VideoClipControl'].video, [this.b$['org.opensourcephysics.media.core.VideoClipControl'].clip.stepToFrame$I.apply(this.b$['org.opensourcephysics.media.core.VideoClipControl'].clip, [this.$finals$.stepNum])]);
});
})()
), Clazz.new_(P$.VideoClipControl$lambda1.$init$,[this, {stepNum:stepNum}]))]);
});

Clazz.newMeth(C$, 'getStepNumber$',  function () {
return this.clip.frameToStep$I(this.video.getFrameNumber$());
});

Clazz.newMeth(C$, 'setRate$D',  function (newRate) {
if ((newRate == 0 ) || (newRate == this.rate ) ) {
return;
}this.rate=Math.abs(newRate);
this.video.setRate$D(this.rate);
});

Clazz.newMeth(C$, 'getRate$',  function () {
return this.video.getRate$();
});

Clazz.newMeth(C$, 'setLooping$Z',  function (loops) {
if (loops == this.isLooping$() ) {
return;
}this.video.setLooping$Z(loops);
});

Clazz.newMeth(C$, 'isLooping$',  function () {
return this.video.isLooping$();
});

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
var n=this.video.getFrameNumber$();
n=Math.max(0, n);
return n;
});

Clazz.newMeth(C$, 'isPlaying$',  function () {
return this.video.isPlaying$();
});

Clazz.newMeth(C$, 'getTime$',  function () {
var n=this.video.getFrameNumber$();
return (this.video.getFrameTime$I(n) - this.video.getStartTime$()) * this.timeStretch;
});

Clazz.newMeth(C$, 'getStepTime$I',  function (stepNumber) {
var n=this.clip.stepToFrame$I(stepNumber);
return (this.video.getFrameTime$I(n) - this.video.getStartTime$()) * this.timeStretch;
});

Clazz.newMeth(C$, 'setFrameDuration$D',  function (duration) {
if (duration == 0 ) {
return;
}duration=Math.abs(duration);
var t=this.video.getAverageFrameDuration$Z(false);
if (t != 0 ) {
this.timeStretch=duration / t;
this.firePropertyChange$S$O$O("frameduration", null, Double.valueOf$D(duration));
}});

Clazz.newMeth(C$, 'getMeanFrameDuration$',  function () {
return this.timeStretch * this.video.getAverageFrameDuration$Z(true);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "rate":
case "playing":
case "looping":
this.firePropertyChange$java_beans_PropertyChangeEvent(e);
break;
default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
break;
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.video.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
