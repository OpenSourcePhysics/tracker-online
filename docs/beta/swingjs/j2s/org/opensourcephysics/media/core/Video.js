(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.util.BitSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Video", null, null, ['org.opensourcephysics.media.core.InteractiveImage', 'org.opensourcephysics.media.core.Trackable', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'removeListener$java_beans_PropertyChangeListener',  function (c) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("coords", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("filterChanged", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("image", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("size", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("videoVisible", c);
});

Clazz.newMeth(C$, 'addListener$java_beans_PropertyChangeListener',  function (c) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("coords", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("filterChanged", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("image", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("size", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("videoVisible", c);
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.getFrameCountDurationMS$() > 0 ;
});

Clazz.newMeth(C$, 'getAverageFrameDuration$Z',  function (allowOneFrame) {
var lastFrame=this.getEndFrameNumber$();
var firstFrame=this.getStartFrameNumber$();
var count=lastFrame - firstFrame;
if (count == 0) return allowOneFrame ? 1 / this.getAverageFrameRate$() : 0;
var ti=this.getFrameTime$I(firstFrame);
var tf=this.getFrameTime$I(lastFrame);
return (tf - ti) / count;
});

Clazz.newMeth(C$, 'getAverageFrameRate$',  function () {
return this.getFrameCount$() / this.getFrameCountDurationMS$();
});

Clazz.newMeth(C$, 'getOutliers$D',  function (tolerance) {
var outliers=Clazz.new_($I$(1,1));
var videoDurMS=this.getFrameCountDurationMS$();
var frameDur=0;
var nFrames=this.getFrameCount$();
for (var i=0; i < nFrames; i++) {
if (i == 0) frameDur=videoDurMS / (nFrames - outliers.cardinality$());
if (outliers.get$I(i)) continue;
var durMS=this.getFrameDuration$I(i);
var err=Math.abs(frameDur - durMS) / frameDur;
if (err > tolerance ) {
videoDurMS-=durMS;
outliers.set$I(i);
i=-1;
}}
outliers.clear$I(nFrames - 1);
return outliers;
});
};})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
