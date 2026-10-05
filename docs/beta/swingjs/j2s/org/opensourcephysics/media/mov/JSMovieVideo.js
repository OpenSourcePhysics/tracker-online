(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.mov"),p$1={},I$=[[0,['javajs.async.SwingJSUtils','.StateHelper'],'swingjs.api.js.HTML5Video','swingjs.api.js.DOMNode','java.util.ArrayList','org.opensourcephysics.media.mov.JSMovieVideo','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.controls.OSPLog',['org.opensourcephysics.media.mov.JSMovieVideo','.State'],'javax.swing.SwingUtilities','org.opensourcephysics.media.core.ImageCoordSystem','org.opensourcephysics.media.core.DoubleArray','javax.swing.JOptionPane',['org.opensourcephysics.media.mov.JSMovieVideo','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSMovieVideo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.mov.MovieVideo', 'org.opensourcephysics.media.core.AsyncVideoI');
C$.$classes$=[['State',10],['Loader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debugHTMLVideo=false;
},1);

C$.$fields$=[['Z',['debugHTMLVideo'],'I',['frame','progress'],'S',['err'],'O',['state','org.opensourcephysics.media.mov.JSMovieVideo.State','jsvideo','swingjs.api.js.HTML5Video','videoDialog','javax.swing.JDialog','mediaInfo','java.util.Map']]
,['Z',['useMediaInfo']]]

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return C$.superclazz.prototype.getProperty$S.apply(this, [name]);
});

Clazz.newMeth(C$, 'c$$S$S$org_opensourcephysics_controls_XMLControl',  function (fileName, basePath, control) {
;C$.superclazz.c$$S$S$org_opensourcephysics_controls_XMLControl.apply(this,[fileName, basePath, control]);C$.$init$.apply(this);
$I$(9).finest$S("JSMovieVideo loading " + this.path + " local?: " + this.isLocal );
if (!$I$(8).checkMP4$S$org_opensourcephysics_tools_LibraryBrowser$org_opensourcephysics_media_core_VideoPanel(this.path, null, null)) {
this.frameNumber=-2147483648;
return;
}if (this.isExport) {
return;
}this.firePropertyChange$S$O$O("progress", fileName, Integer.valueOf$I(0));
if (this.state == null ) this.state=Clazz.new_($I$(10,1).c$$org_opensourcephysics_media_mov_JSMovieVideo$org_opensourcephysics_controls_XMLControl,[this, this.allowControlData ? control : null]);
this.state.load$S(this.path);
}, 1);

Clazz.newMeth(C$, 'play$',  function () {
if (this.getFrameCount$() == 1) {
return;
}var n=this.getFrameNumber$() + 1;
this.playing=true;
this.firePropertyChange$S$O$O("playing", null, Boolean.TRUE);
this.setFrameNumber$I(n);
});

Clazz.newMeth(C$, 'stop$',  function () {
this.playing=false;
this.firePropertyChange$S$O$O("playing", null, Boolean.FALSE);
});

Clazz.newMeth(C$, 'getImage$',  function () {
return (this.rawImage == null  ? null : C$.superclazz.prototype.getImage$.apply(this, []));
});

Clazz.newMeth(C$, 'setFrameNumber$I',  function (n) {
if (n < 0) {
this.frameNumber=n;
n=0;
}C$.superclazz.prototype.setFrameNumber$I.apply(this, [n]);
this.state.getImage$I(this.getFrameNumber$());
});

Clazz.newMeth(C$, 'setFrameNumberContinued$I$D',  function (n, t) {
var bi=$I$(2).getImage(this.jsvideo, 1);
if (bi == null ) return;
this.rawImage=bi;
this.invalidateVideoAndFilter$();
this.notifyFrame$I$Z(n, false);
this.firePropertyChange$S$O$O("asyncImageReady", null, Integer.valueOf$I(n));
if (this.isPlaying$()) {
$I$(11,"invokeLater$Runnable",[((P$.JSMovieVideo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "JSMovieVideo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.mov.JSMovieVideo'].continuePlaying$.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo'], []);
});
})()
), Clazz.new_(P$.JSMovieVideo$lambda1.$init$,[this, null]))]);
}});

Clazz.newMeth(C$, 'getFrameCountDurationMS$',  function () {
return this.jsvideo == null  ? -1 : $I$(2).getDuration(this.jsvideo) * 1000;
});

Clazz.newMeth(C$, 'setRate$D',  function (rate) {
C$.superclazz.prototype.setRate$D.apply(this, [rate]);
if (this.isPlaying$()) {
this.setFrameNumber$I(this.getFrameNumber$());
}});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
$I$(3).dispose(this.jsvideo);
this.videoDialog.dispose$();
});

Clazz.newMeth(C$, 'continuePlaying$',  function () {
var n=this.getFrameNumber$();
if (n < this.getEndFrameNumber$()) {
this.setFrameNumber$I(++n);
} else if (this.looping) {
this.setFrameNumber$I(this.getStartFrameNumber$());
} else {
this.stop$();
}});

Clazz.newMeth(C$, 'getTypeName$',  function () {
return "JS";
});

Clazz.newMeth(C$, 'setFrameCount$I',  function (n) {
C$.superclazz.prototype.setFrameCount$I.apply(this, [n]);
this.coords=Clazz.new_($I$(12,1).c$$I$org_opensourcephysics_media_core_Video,[this.frameCount, this]);
this.aspects=Clazz.new_($I$(13,1).c$$I$D,[this.frameCount, 1]);
});

Clazz.newMeth(C$, 'finalizeLoading$',  function () {
this.videoDialog.setVisible$Z(false);
if (this.startTimesMS == null ) {
if (this.frameTimes.size$() == 0) {
this.firePropertyChange$S$O$O("progress", this.fileName, Integer.valueOf$I(this.frame));
this.dispose$();
this.err="no frames";
}this.setFrameCount$I(this.frameTimes.size$());
}$I$(9,"debug$S",["JSMovieVideo " + this.size + "\n duration:" + new Double(this.rawDuration).toString() + " act. frameCount:" + this.frameCount ]);
this.startFrameNumber=0;
this.endFrameNumber=this.frameCount - 1;
this.setStartTimes$();
this.firePropertyChange$S$O$O("progress", this.fileName, Integer.valueOf$I(this.frame));
this.frameNumber=-1;
this.firePropertyChange$S$O$O("asyncVideoHaveFrames", null, this);
this.firePropertyChange$S$O$O("asyncVideoReady", this.fileName, this);
this.setFrameNumber$I(-99);
});

Clazz.newMeth(C$, 'cantRead$',  function () {
$I$(14).showMessageDialog$java_awt_Component$O(null, "Video file format or compression method could not be read.");
$I$(8).setCanceled$Z(true);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(15,1));
}, 1);

Clazz.newMeth(C$, 'createThumbnailFile$java_awt_Dimension$S$S',  function (defaultThumbnailDimension, sourcePath, thumbPath) {
return null;
}, 1);

Clazz.newMeth(C$, 'getProgress$',  function () {
return this.progress;
});

Clazz.newMeth(C$, 'getLoadedFrameCount$',  function () {
return this.frame;
});

Clazz.newMeth(C$, 'seekMS$D',  function (timeMS) {
$I$(2).setCurrentTime(this.jsvideo, timeMS / 1000);
return true;
});

Clazz.newMeth(C$, 'getImageForMSTimePoint$D',  function (timeMS) {
this.seekMS$D(timeMS);
var bi=$I$(2).getImage(this.jsvideo, 1);
if (bi != null ) this.rawImage=bi;
return bi;
});

Clazz.newMeth(C$, 'getPlatform$',  function () {
var engine=(C$.useMediaInfo ? "MediaInfo - " : "");
return engine + (navigator.userAgent ||"?");
});

C$.$static$=function(){C$.$static$=0;
C$.useMediaInfo=true;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSMovieVideo, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.lastT=-1;
this.onevent=((P$.JSMovieVideo$State$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].helper.getState$()) {
case 2:
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].helper.setState$I(3);
break;
case 41:
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].helper.setState$I(42);
break;
}
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].next$I.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'], [-2147483648]);
});
})()
), Clazz.new_(P$.JSMovieVideo$State$1.$init$,[this, null]));
this.thisFrame=-1;
this.canSeek=true;
this.playThroughOrSeeked="canplaythrough";
},1);

C$.$fields$=[['Z',['canSeek'],'D',['t','offset','lastT'],'I',['thisFrame'],'S',['playThroughOrSeeked'],'O',['helper','javajs.async.SwingJSUtils.StateHelper','onevent','java.awt.event.ActionListener','readyListener','Object[]','+debugListeners','control','org.opensourcephysics.controls.XMLControl','v','org.opensourcephysics.media.mov.JSMovieVideo']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_mov_JSMovieVideo$org_opensourcephysics_controls_XMLControl',  function (v, control) {
;C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.control=control;
this.v=v;
}, 1);

Clazz.newMeth(C$, 'load$S',  function (path) {
this.helper.next$I(10);
});

Clazz.newMeth(C$, 'next$I',  function (stateNext) {
this.helper.delayedState$I$I(10, stateNext);
});

Clazz.newMeth(C$, 'getImage$I',  function (n) {
if (this.thisFrame == n) return;
this.thisFrame=n;
this.t=this.v.getFrameTime$I(n) / 1000.0;
this.next$I(20);
});

Clazz.newMeth(C$, 'dispose',  function () {
p$1.removeReadyListener.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'seekToNextFrame',  function () {
try {
var next=((P$.JSMovieVideo$State$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].next$I.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'], [3]);
});
})()
), Clazz.new_(P$.JSMovieVideo$State$2.$init$,[this, null]));
var f=function() {next.run$()} ||null;
this.v.jsvideo.seekToNextFrame().then(f, null);
} catch (e) {
this.v.err="JSMovieVideo cannot seek to next Frame";
e.printStackTrace$();
}
}, p$1);

Clazz.newMeth(C$, 'setReadyListener$S',  function (event) {
if (this.readyListener != null ) return;
this.readyListener=$I$(2).addActionListener(this.v.jsvideo, this.onevent, [event]);
if (this.v.debugHTMLVideo) {
this.debugListeners=$I$(2,"addActionListener",[this.v.jsvideo, ((P$.JSMovieVideo$State$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var o=e.getSource$();
var jsEvent=o[1];
var target=jsEvent.target.currentTime ||null;
System.out.println$S("JSMovieVideo.debugging.actionPerformed " + e.getActionCommand$() + " " + target );
});
})()
), Clazz.new_(P$.JSMovieVideo$State$3.$init$,[this, null])), []]);
for (var i=0; i < this.debugListeners.length; i+=2) {
}
}}, p$1);

Clazz.newMeth(C$, 'removeReadyListener',  function () {
$I$(2).removeActionListener(this.v.jsvideo, this.readyListener);
this.readyListener=null;
if (this.v.debugHTMLVideo) {
$I$(2).removeActionListener(this.v.jsvideo, this.debugListeners);
this.debugListeners=null;
}}, p$1);

Clazz.newMeth(C$, 'stateLoop$',  function () {
while (this.helper.isAlive$()){
switch (this.v.err == null  ? this.helper.getState$() : -99) {
case -1:
return false;
case 10:
this.v.videoDialog=$I$(2,"createDialog",[null, this.v.url, 500, false, ((P$.JSMovieVideo$State$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$swingjs_api_js_HTML5Video','apply$O'],  function (video) {
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].v.jsvideo=video;
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].canSeek=($I$(3).getAttr(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].v.jsvideo, "seekToNextFrame") != null );
if (!this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].canSeek) {
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].playThroughOrSeeked="seeked";
}this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].next$I.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'], [12]);
return null;
});
})()
), Clazz.new_(P$.JSMovieVideo$State$4.$init$,[this, null]))]);
return true;
case 12:
this.v.videoDialog.setVisible$Z(true);
var d=$I$(2).getSize(this.v.jsvideo);
this.v.size.width=d.width;
this.v.size.height=d.height;
this.v.rawDuration=$I$(2).getDuration(this.v.jsvideo);
this.v.frameTimes=Clazz.new_($I$(4,1));
if (this.v.size.width == 0) {
this.v.cantRead$();
this.helper.next$I(3);
} else {
if (this.control != null ) this.control=this.v.setFromControl$org_opensourcephysics_controls_XMLControl(this.control);
this.helper.next$I(this.control != null  ? 30 : $I$(5).useMediaInfo ? 4 : this.canSeek ? 0 : 40);
this.control=null;
}return true;
case 4:
this.v.videoDialog.setVisible$Z(false);
var failed=((P$.JSMovieVideo$State$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$S','accept$O'],  function (err) {
System.err.println$S("JSMovieVideo MediaInfo Error: " + err);
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].control=null;
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].helper.next$I(12);
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].stateLoop$.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'], []);
});
})()
), Clazz.new_(P$.JSMovieVideo$State$5.$init$,[this, null]));
var t1=System.currentTimeMillis$();
var bytes=null;
try {
bytes=$I$(6,"getURLBytes$S",[this.v.url.toString()]);
if (bytes == null ) {
bytes=$I$(6,"getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z",[this.v.url.openStream$(), -1, null, true]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
if (bytes == null ) {
failed.accept$O("no byte[] for " + this.v.url);
} else {
var t2=System.currentTimeMillis$();
var b=bytes;
$I$(7).jsutil.getMediaInfoAsync$BA$S$S$java_util_function_Consumer$java_util_function_Consumer(bytes, "Video", "/core/ES6/mediainfo.js", ((P$.JSMovieVideo$State$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_Map','accept$O'],  function (info) {
var err=this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].v.setFromMediaTrackInfo$java_util_Map(info);
if (err == null ) {
System.out.println$S("JSMovieVideo reading " + this.$finals$.b.length + " bytes " + Long.$s((Long.$sub(this.$finals$.t2,this.$finals$.t1))) + " ms; MediaInfo analysis " + Long.$s((Long.$sub(System.currentTimeMillis$(),this.$finals$.t2))) + " ms" );
for (var e, $e = info.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
System.out.println$S(e.getKey$() + "=" + e.getValue$() );
}
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].helper.setState$I(5);
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].stateLoop$.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'], []);
} else {
this.$finals$.failed.accept$O("MediaInfo not usable: " + err);
}});
})()
), Clazz.new_(P$.JSMovieVideo$State$6.$init$,[this, {t1:t1,b:b,t2:t2,failed:failed}])), failed);
}return true;
case 40:
$I$(2,"requestVideoFrameCallback",[this.v.jsvideo, ((P$.JSMovieVideo$State$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSMovieVideo$State$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$O',  function (metadata) {
this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'].processVideoFrameCallback$O.apply(this.b$['org.opensourcephysics.media.mov.JSMovieVideo.State'], [metadata]);
});
})()
), Clazz.new_(P$.JSMovieVideo$State$7.$init$,[this, null]))]);
this.helper.next$I(41);
continue;
case 41:
p$1.setReadyListener$S.apply(this, ["ended"]);
$I$(2).startVideo(this.v.jsvideo);
return false;
case 42:
p$1.removeReadyListener.apply(this, []);
this.helper.setState$I(0);
continue;
case 0:
this.v.err=null;
if (this.v.rawDuration == 0 ) this.v.rawDuration=$I$(2).getDuration(this.v.jsvideo);
this.lastT=this.t=0.0;
if (this.canSeek) {
this.v.frameTimes.add$O(Double.valueOf$D(this.t));
this.v.seekMS$D(0);
p$1.setReadyListener$S.apply(this, [this.playThroughOrSeeked]);
this.helper.setState$I(1);
continue;
}$I$(2).cancelVideoFrameCallback(this.v.jsvideo);
this.helper.setState$I(9);
continue;
case 1:
if (this.t >= this.v.rawDuration ) {
this.helper.setState$I(9);
continue;
}this.helper.setState$I(2);
p$1.seekToNextFrame.apply(this, []);
return false;
case 2:
return false;
case 3:
if ($I$(8).isCanceled$()) {
this.v.firePropertyChange$S$O$O("progress", this.v.fileName, null);
p$1.dispose.apply(this, []);
this.v.err="Canceled by user";
this.v.progress=-999;
return false;
}this.t=$I$(2).getCurrentTime(this.v.jsvideo);
if (this.t > this.lastT  && this.t < this.v.rawDuration  ) {
this.lastT=this.t;
this.v.frameTimes.add$O(Double.valueOf$D(this.t));
this.v.firePropertyChange$S$O$O("progress", this.v.fileName, Integer.valueOf$I(this.v.frame++));
this.v.progress=$I$(8).progressForFraction$D$D(this.v.frame, this.v.frameCount);
}this.helper.setState$I(1);
continue;
case 5:
case 30:
this.offset=0.5 / this.v.nominalFrameRate;
case 9:
this.helper.setState$I(-1);
this.v.finalizeLoading$();
this.v.frameTimes=null;
this.thisFrame=-1;
this.v.progress=80;
continue;
case 20:
this.helper.setState$I(22);
p$1.setReadyListener$S.apply(this, [this.playThroughOrSeeked]);
this.v.seekMS$D((this.offset + this.t) * 1000);
return true;
case 22:
this.v.setFrameNumberContinued$I$D(this.thisFrame, this.t);
return false;
}
return false;
}
return false;
});

Clazz.newMeth(C$, 'processVideoFrameCallback$O',  function (metadata) {
var t=metadata.mediaTime ||0;
this.v.frameTimes.add$O(Double.valueOf$D(t));
++this.v.frame;
this.v.firePropertyChange$S$O$O("progress", this.v.fileName, Integer.valueOf$I(this.v.frame++));
this.v.progress=$I$(8).progressForFraction$D$D(this.v.frame, this.v.frameCount);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSMovieVideo, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.media.mov.MovieVideo','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createVideo$org_opensourcephysics_controls_XMLControl$S',  function (control, path) {
var video=Clazz.new_($I$(5,1).c$$S$S$org_opensourcephysics_controls_XMLControl,[path, null, control]);
if (video.getFrameNumber$() < 0) return null;
this.setVideo$S$org_opensourcephysics_media_mov_MovieVideo$S(path, video, "JS");
return video;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
