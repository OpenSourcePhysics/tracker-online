(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.Timer','javax.swing.SwingUtilities',['org.opensourcephysics.media.core.ClipControl','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StepperClipControl", null, 'org.opensourcephysics.media.core.ClipControl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frameDuration=100;
this.playing=false;
this.readyToStep=true;
this.stepDisplayed=true;
this.minDelay=0;
this.maxDelay=2000;
this.processingTime=10;
},1);

C$.$fields$=[['Z',['playing','readyToStep','stepDisplayed'],'D',['frameDuration','stepDuration','processingTime','playDuration'],'I',['minDelay','maxDelay','timerDelay','playStepCount'],'J',['startTime'],'O',['timer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoClip',  function (videoClip) {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoClip.apply(this,[videoClip]);C$.$init$.apply(this);
videoClip.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
if (this.video != null ) {
if (this.video.getFrameCount$() > 1 && this.video.isValid$() ) {
this.frameDuration=this.video.getAverageFrameDuration$Z(true);
} else if (Clazz.instanceOf(this.video, "org.opensourcephysics.media.core.ImageVideo")) {
this.frameDuration=(this.video).getFrameDuration$I(0);
}}this.timer=Clazz.new_([p$1.getTimerDelay.apply(this, []), ((P$.StepperClipControl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StepperClipControl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.StepperClipControl'].readyToStep=true;
this.b$['org.opensourcephysics.media.core.StepperClipControl'].step$.apply(this.b$['org.opensourcephysics.media.core.StepperClipControl'], []);
});
})()
), Clazz.new_(P$.StepperClipControl$1.$init$,[this, null]))],$I$(1,1).c$$I$java_awt_event_ActionListener);
this.timer.setRepeats$Z(false);
this.timer.setCoalesce$Z(false);
}, 1);

Clazz.newMeth(C$, 'play$',  function () {
if (this.clip.getStepCount$() == 1) {
return;
}this.startTime=System.currentTimeMillis$();
this.playDuration=0;
this.playStepCount=0;
this.playing=true;
this.readyToStep=true;
if (this.stepNumber == this.clip.getStepCount$() - 1) {
this.setStepNumber$I(0);
} else {
this.timer.restart$();
}$I$(2,"invokeLater$Runnable",[((P$.StepperClipControl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StepperClipControl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["playing", null, Boolean.TRUE]);
});
})()
), Clazz.new_(P$.StepperClipControl$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'stop$',  function () {
this.timer.stop$();
this.readyToStep=true;
this.stepDisplayed=true;
this.playing=false;
this.firePropertyChange$S$O$O("playing", null, Boolean.FALSE);
});

Clazz.newMeth(C$, 'step$',  function () {
if ((this.stepNumber >= this.clip.getStepCount$() - 1) && !this.looping ) {
this.stop$();
} else if (this.stepDisplayed && (!this.playing || this.readyToStep ) ) {
this.stepDisplayed=false;
if (this.stepNumber < this.clip.getStepCount$() - 1) {
this.setStepNumber$I(this.stepNumber + 1);
} else if (this.looping) {
this.setStepNumber$I(0);
}if (this.playing) {
var dt=Long.$sub(System.currentTimeMillis$(),this.startTime);
this.playDuration+=Long.valueOf$J(dt).doubleValue$();
++this.playStepCount;
(this.startTime=Long.$add(this.startTime,(dt)));
this.timerDelay-=Math.round(Long.$fval(Math.round$D((dt - this.stepDuration) / 5.0)));
this.timerDelay=Math.min(this.maxDelay, Math.max(this.minDelay, this.timerDelay));
this.timer.setInitialDelay$I(this.timerDelay);
this.processingTime=this.stepDuration - this.timerDelay;
this.readyToStep=false;
this.timer.restart$();
}}});

Clazz.newMeth(C$, 'back$',  function () {
if (this.stepDisplayed && (this.stepNumber > 0) ) {
this.stepDisplayed=false;
this.setStepNumber$I(this.stepNumber - 1);
}});

Clazz.newMeth(C$, 'setStepNumber$I',  function (n0) {
var step=Math.min(Math.max(0, n0), this.clip.getStepCount$() - 1);
if (step == this.stepNumber && this.clip.stepToFrame$I(step) == this.getFrameNumber$() ) {
return;
}if (this.video == null ) {
C$.superclazz.prototype.setStepNumber$I.apply(this, [step]);
this.stepDisplayed=true;
this.firePropertyChange$S$O$O("stepnumber", null, Integer.valueOf$I(step));
} else {
var frame=this.clip.stepToFrame$I(step);
if (frame > this.video.getEndFrameNumber$()) {
C$.superclazz.prototype.setStepNumber$I.apply(this, [step]);
this.video.setVisible$Z(false);
this.stepDisplayed=true;
this.firePropertyChange$S$O$O("stepnumber", null, Integer.valueOf$I(step));
} else {
this.video.setVisible$Z(this.videoVisible);
$I$(2,"invokeLater$Runnable",[((P$.StepperClipControl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StepperClipControl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.StepperClipControl'].setStepNumberLater$I$I.apply(this.b$['org.opensourcephysics.media.core.StepperClipControl'], [this.$finals$.frame, this.$finals$.step]);
});
})()
), Clazz.new_(P$.StepperClipControl$lambda2.$init$,[this, {frame:frame,step:step}]))]);
}}});

Clazz.newMeth(C$, 'setStepNumberLater$I$I',  function (frame, step) {
if (this.videoFrameNumber == frame) {
this.stepDisplayed=true;
} else if (this.video.getFrameNumber$() == frame) {
C$.superclazz.prototype.setStepNumber$I.apply(this, [step]);
this.stepDisplayed=true;
this.firePropertyChange$S$O$O("stepnumber", null, Integer.valueOf$I(step));
} else {
this.video.setFrameNumber$I(frame);
}});

Clazz.newMeth(C$, 'setRate$D',  function (newRate) {
if ((newRate == 0 ) || (newRate == this.rate ) ) {
return;
}this.rate=Math.abs(newRate);
this.timer.setInitialDelay$I(p$1.getTimerDelay.apply(this, []));
this.playDuration=0;
this.playStepCount=0;
this.firePropertyChange$S$O$O("rate", null, Double.valueOf$D(this.rate));
});

Clazz.newMeth(C$, 'getMeanFrameDuration$',  function () {
if (this.video != null  && this.video.isValid$() ) {
return this.timeStretch * this.video.getAverageFrameDuration$Z(true);
}return this.frameDuration;
});

Clazz.newMeth(C$, 'setFrameDuration$D',  function (duration) {
duration=Math.abs(duration);
if (duration == 0  || duration == this.getMeanFrameDuration$()  ) {
return;
}if (Clazz.instanceOf(this.video, "org.opensourcephysics.media.core.ImageVideo")) {
var iVideo=this.video;
iVideo.setFrameDuration$D(duration);
this.frameDuration=duration;
this.timer.setInitialDelay$I(p$1.getTimerDelay.apply(this, []));
} else if (this.video != null  && this.video.isValid$() ) {
var ave=this.video.getAverageFrameDuration$Z(false);
if (ave > 0 ) {
this.timeStretch=duration / ave;
}} else {
this.frameDuration=duration;
this.timer.setInitialDelay$I(p$1.getTimerDelay.apply(this, []));
}this.firePropertyChange$S$O$O("frameduration", null, Double.valueOf$D(duration));
});

Clazz.newMeth(C$, 'setLooping$Z',  function (loops) {
if (loops == this.looping ) {
return;
}this.looping=loops;
this.firePropertyChange$S$O$O("looping", null, Boolean.valueOf$Z(loops));
});

Clazz.newMeth(C$, 'isPlaying$',  function () {
return this.playing;
});

Clazz.newMeth(C$, 'getTime$',  function () {
if (this.video != null  && this.video.isValid$() ) {
var n=this.video.getFrameNumber$();
var videoTime=this.video.getFrameTime$I(n);
var m=this.clip.stepToFrame$I(this.getStepNumber$());
if (m > this.video.getFrameCount$() - 1) {
var extra=m - this.video.getFrameCount$() + 1;
videoTime=this.video.getFrameTime$I(this.video.getFrameCount$() - 1) + extra * this.frameDuration;
}return (videoTime - this.video.getStartTime$()) * this.timeStretch;
}return this.stepNumber * this.frameDuration * this.clip.getStepSize$() ;
});

Clazz.newMeth(C$, 'getStepTime$I',  function (stepNumber) {
if (this.video != null  && this.video.isValid$() ) {
var n=this.clip.stepToFrame$I(stepNumber);
var videoTime=this.video.getFrameTime$I(n);
var nframes=this.video.getFrameCount$();
if (n > nframes - 1) {
var extra=n - nframes + 1;
videoTime=this.video.getFrameTime$I(nframes - 1) + extra * this.frameDuration;
}return (videoTime - this.video.getStartTime$()) * this.timeStretch;
}return stepNumber * this.frameDuration * this.clip.getStepSize$() ;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var name=e.getPropertyName$();
switch (name) {
case "stepsize":
this.timer.setInitialDelay$I(p$1.getTimerDelay.apply(this, []));
return;
case "framenumber":
this.stepDisplayed=true;
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (this.playing) {
this.step$();
}return;
default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
break;
}
});

Clazz.newMeth(C$, 'getTimerDelay',  function () {
var duration=this.frameDuration;
if (this.video != null  && this.video.isValid$() ) {
duration=this.video.getAverageFrameDuration$Z(true);
}this.stepDuration=duration * this.clip.getStepSize$() / this.rate;
var delay=Math.round(Long.$fval(Math.round$D(this.stepDuration - this.processingTime)));
delay=Math.max(this.minDelay, Math.min(delay, this.maxDelay));
this.timerDelay=delay;
return this.timerDelay;
}, p$1);

Clazz.newMeth(C$, 'getMeasuredRate$',  function () {
if (this.playStepCount > 0) {
var measuredStepDuration=this.playDuration / this.playStepCount;
return this.rate * this.stepDuration / measuredStepDuration;
}return this.rate;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.clip != null ) {
this.clip.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.clip.dispose$();
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
