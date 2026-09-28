(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.media.core.VideoClip','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.XML','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.display.OSPRuntime','javajs.async.AsyncDialog','org.opensourcephysics.media.core.ClipInspector',['org.opensourcephysics.media.core.VideoClip','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoClip", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported'], 'java.beans.PropertyChangeListener');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.video=null;
this.startFrame=0;
this.stepSize=1;
this.stepCount=10;
this.nullVideoFrameCount=this.stepCount;
this.maxFrameCount=500001;
this.startTime=0;
this.isDefaultStartTime=true;
this.playAllSteps=true;
this.isAdjusting=false;
this.startTimeIsSaved=false;
this.extraFrames=0;
},1);

C$.$fields$=[['Z',['changeEngine','invalid','isDefaultStartTime','playAllSteps','isDefaultState','isAdjusting','startTimeIsSaved'],'D',['startTime','savedStartTime'],'I',['startFrame','stepSize','stepCount','nullVideoFrameCount','maxFrameCount','endFrame','extraFrames','frameShift'],'S',['readoutType','videoPath'],'O',['video','org.opensourcephysics.media.core.Video','inspector','org.opensourcephysics.media.core.ClipInspector','stepFrames','int[]','loader','org.opensourcephysics.media.core.VideoIO.FinalizableLoader']]]

Clazz.newMeth(C$, 'addListener$java_beans_PropertyChangeListener',  function (c) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("adjusting", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("framecount", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("startframe", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("starttime", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepcount", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepsize", c);
});

Clazz.newMeth(C$, 'removeListener$java_beans_PropertyChangeListener',  function (c) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("adjusting", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("framecount", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("startframe", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("starttime", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepcount", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepsize", c);
});

Clazz.newMeth(C$, 'isValid$',  function () {
return !this.invalid;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_Video',  function (video) {
Clazz.super_(C$, this);
this.video=video;
if (video != null ) {
video.setProperty$S$O("videoclip", this);
if (video.getFrameCount$() == 0 && Clazz.instanceOf(video, "org.opensourcephysics.media.core.AsyncVideoI") ) {
video.addPropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoHaveFrames", this);
return;
}p$2.initVideo.apply(this, []);
}p$2.updateArray.apply(this, []);
this.isDefaultState=true;
}, 1);

Clazz.newMeth(C$, 'initVideo',  function () {
this.setStartFrameNumber$I(this.video.getStartFrameNumber$());
if (this.video.getFrameCount$() > 1) {
this.setStepCount$I(this.video.getEndFrameNumber$() - this.startFrame + 1);
}if (Clazz.instanceOf(this.video, "org.opensourcephysics.media.core.ImageVideo")) this.video.addPropertyChangeListener$S$java_beans_PropertyChangeListener("endframe", this);
}, p$2);

Clazz.newMeth(C$, 'getVideo$',  function () {
return this.video;
});

Clazz.newMeth(C$, 'getVideoPath$',  function () {
if (this.video != null ) return this.video.getProperty$S("absolutePath");
return this.videoPath;
});

Clazz.newMeth(C$, 'setStartFrameNumber$I',  function (start) {
return this.setStartFrameNumber$I$I(start, this.getLastFrameNumber$());
});

Clazz.newMeth(C$, 'setStartFrameNumber$I$I',  function (start, maxStart) {
var prevStart=this.getStartFrameNumber$();
var prevEnd=this.getEndFrameNumber$();
start=Math.max(start, this.getFirstFrameNumber$());
start=Math.min(start, maxStart);
if (this.video != null  && this.video.getFrameCount$() > 1 ) {
this.video.setEndFrameNumber$I(this.video.getFrameCount$() - 1);
var vidStart=Math.max(0, start);
this.video.setStartFrameNumber$I(vidStart);
this.startFrame=Math.max(0, this.video.getStartFrameNumber$());
} else {
this.startFrame=start;
p$2.updateArray.apply(this, []);
}start=this.getStartFrameNumber$();
this.setEndFrameNumber$I(prevEnd);
if (prevStart != start) {
this.isDefaultState=false;
this.firePropertyChange$S$O$O("startframe", null, Integer.valueOf$I(start));
}return prevStart != start;
});

Clazz.newMeth(C$, 'getStartFrameNumber$',  function () {
return this.startFrame;
});

Clazz.newMeth(C$, 'setStepSize$I',  function (size) {
this.isDefaultState=false;
if (size == 0) {
return false;
}size=Math.abs(size);
if (this.video != null  && this.video.getFrameCount$() > 1 ) {
var maxSize=Math.max(this.video.getFrameCount$() - this.startFrame - 1  + this.extraFrames, 1);
size=Math.min(size, maxSize);
}if (this.stepSize == size) {
return false;
}var endFrame=this.getEndFrameNumber$();
this.stepSize=size;
this.stepCount=1 + ((endFrame - this.getStartFrameNumber$())/this.stepSize|0);
p$2.updateArray.apply(this, []);
this.firePropertyChange$S$O$O("stepsize", null, Integer.valueOf$I(size));
this.setEndFrameNumber$I(endFrame);
return true;
});

Clazz.newMeth(C$, 'getStepSize$',  function () {
return this.stepSize;
});

Clazz.newMeth(C$, 'setStepCount$I',  function (count) {
if (count == 0) {
return;
}count=Math.abs(count);
if (this.video != null ) {
if (this.video.getFrameCount$() > 1) {
var end=this.video.getFrameCount$() - 1 + this.extraFrames;
var maxCount=1 + (((end - this.startFrame) / (1.0 * this.stepSize))|0);
count=Math.min(count, maxCount);
}var end=this.startFrame + (count - 1) * this.stepSize;
if (end != this.video.getEndFrameNumber$()) {
this.video.setEndFrameNumber$I(end);
}} else {
count=Math.min(count, this.frameToStep$I(this.maxFrameCount - 1) + 1);
}count=Math.max(count, 1);
if (this.stepCount == count) {
p$2.updateArray.apply(this, []);
return;
}var prev=Integer.valueOf$I(this.stepCount);
this.stepCount=count;
p$2.updateArray.apply(this, []);
this.firePropertyChange$S$O$O("stepcount", prev, Integer.valueOf$I(this.stepCount));
});

Clazz.newMeth(C$, 'getStepCount$',  function () {
return this.stepCount;
});

Clazz.newMeth(C$, 'setExtraFrames$I',  function (extras) {
var prev=this.extraFrames;
this.extraFrames=Math.max(extras, 0);
if (prev != this.extraFrames) {
$I$(5).finest$S("set extra frames to " + this.extraFrames);
this.setStepCount$I(this.stepCount);
}});

Clazz.newMeth(C$, 'getExtraFrames$',  function () {
return this.extraFrames;
});

Clazz.newMeth(C$, 'getFrameCount$',  function () {
if (this.video != null  && this.video.getFrameCount$() > 1 ) {
return Math.max(1, this.video.getFrameCount$() + this.extraFrames);
}var frames=this.getEndFrameNumber$() - this.getStartFrameNumber$() + 1;
return this.nullVideoFrameCount=Math.min(Math.max(this.nullVideoFrameCount, frames), this.maxFrameCount - 1);
});

Clazz.newMeth(C$, 'setStartTime$D',  function (t0) {
this.isDefaultState=false;
if (this.startTime == t0  || (this.isDefaultStartTime && Double.isNaN$D(t0) ) ) {
return;
}this.isDefaultStartTime=Double.isNaN$D(t0);
this.startTime=Double.isNaN$D(t0) ? 0.0 : t0;
this.firePropertyChange$S$O$O("starttime", null, Double.valueOf$D(this.startTime));
});

Clazz.newMeth(C$, 'getStartTime$',  function () {
return this.startTime;
});

Clazz.newMeth(C$, 'getEndFrameNumber$',  function () {
this.endFrame=Math.max(this.startFrame, this.startFrame + this.stepSize * (this.stepCount - 1));
return this.endFrame;
});

Clazz.newMeth(C$, 'setEndFrameNumber$I',  function (end) {
return p$2.setEndFrameNumber$I$I$Z.apply(this, [end, this.maxFrameCount - 1, true]);
});

Clazz.newMeth(C$, 'extendEndFrameNumber$I',  function (end) {
if (this.video != null  && this.getFrameCount$() <= end ) {
this.setExtraFrames$I(end + 1 - this.getFrameCount$() + this.extraFrames);
}return this.setEndFrameNumber$I(end);
});

Clazz.newMeth(C$, 'setEndFrameNumber$I$I$Z',  function (end, max, onlyIfChanged) {
var prev=this.getEndFrameNumber$();
if (prev == end && onlyIfChanged ) return false;
this.isDefaultState=false;
end=Math.max(end, this.startFrame);
var rem=(end - this.startFrame) % this.stepSize;
var count=((end - this.startFrame)/this.stepSize|0);
if (rem * 1.0 / this.stepSize > 0.5 ) {
++count;
}while (this.stepToFrame$I(count) > max){
--count;
}
this.setStepCount$I(count + 1);
end=this.getEndFrameNumber$();
if (end != this.startFrame) {
var maxStepSize=Math.max(end - this.startFrame, 1);
if (maxStepSize < this.stepSize) {
this.stepSize=maxStepSize;
}}return prev != end;
}, p$2);

Clazz.newMeth(C$, 'stepToFrame$I',  function (stepNumber) {
return Math.max(0, this.startFrame + stepNumber * this.stepSize);
});

Clazz.newMeth(C$, 'frameToStep$I',  function (n) {
return (((n - this.startFrame) / (1.0 * this.stepSize))|0);
});

Clazz.newMeth(C$, 'includesFrame$I',  function (n) {
for (var i=0; i < this.stepCount; i++) {
if (this.stepFrames[i] == n) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getClipInspector$',  function () {
return this.inspector;
});

Clazz.newMeth(C$, 'getClipInspector$org_opensourcephysics_media_core_ClipControl$java_awt_Frame',  function (control, frame) {
if (this.inspector == null ) {
this.inspector=Clazz.new_($I$(9,1).c$$java_awt_Frame$org_opensourcephysics_media_core_VideoClip$org_opensourcephysics_media_core_ClipControl,[frame, this, control]);
}return this.inspector;
});

Clazz.newMeth(C$, 'hideClipInspector$',  function () {
if (this.inspector != null ) {
this.inspector.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'isDefaultState$',  function () {
return this.isDefaultState && this.inspector == null  ;
});

Clazz.newMeth(C$, 'setAdjusting$Z',  function (adjusting) {
if (this.isAdjusting == adjusting ) return;
this.isAdjusting=adjusting;
this.firePropertyChange$S$O$O("adjusting", this, Boolean.valueOf$Z(adjusting));
});

Clazz.newMeth(C$, 'isAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'setPlayAllSteps$Z',  function (all) {
this.playAllSteps=all;
});

Clazz.newMeth(C$, 'isPlayAllSteps$',  function () {
return this.playAllSteps;
});

Clazz.newMeth(C$, 'trimFrameCount$',  function () {
if (this.video == null  || this.video.getFrameCount$() == 1 ) {
this.nullVideoFrameCount=this.getEndFrameNumber$() + 1;
this.firePropertyChange$S$O$O("framecount", null, Integer.valueOf$I(this.nullVideoFrameCount));
}});

Clazz.newMeth(C$, 'updateArray',  function () {
if (this.stepFrames == null  || this.stepFrames.length < this.stepCount ) this.stepFrames=Clazz.array(Integer.TYPE, [this.stepCount]);
for (var i=0; i < this.stepCount; i++) {
this.stepFrames[i]=this.stepToFrame$I(i);
}
}, p$2);

Clazz.newMeth(C$, 'getFirstFrameNumber$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getLastFrameNumber$',  function () {
return (this.video == null  || this.video.getFrameCount$() == 1  ? this.getEndFrameNumber$() : Math.max(0, this.video.getFrameCount$() - 1 + this.extraFrames));
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
switch (evt.getPropertyName$()) {
case "asyncVideoHaveFrames":
p$2.initVideo.apply(this, []);
p$2.updateArray.apply(this, []);
break;
case "endframe":
this.setEndFrameNumber$I(this.video.getEndFrameNumber$());
break;
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.inspector != null ) {
this.inspector.dispose$();
this.inspector=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(5).finalized$O(this);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoClip, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader'], ['org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.media.core.VideoIO.FinalizableLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['playAllSteps','initialized','finalized'],'D',['dt','startTime'],'I',['start','stepSize','stepCount','frameCount'],'S',['base','path','readoutType'],'O',['loadedVideo','org.opensourcephysics.media.core.Video','loadedClip','org.opensourcephysics.media.core.VideoClip','loadedFilters','java.util.Collection']]]

Clazz.newMeth(C$, 'finalize$',  function () {
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var clip=obj;
var video=clip.getVideo$();
if (video != null ) {
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")) {
var vid=video;
if (vid.isFileBased$()) {
control.setValue$S$O("video", video);
}control.setValue$S$I("video_framecount", clip.getFrameCount$());
} else {
control.setValue$S$O("video", video);
control.setValue$S$I("video_framecount", video.getFrameCount$());
}}control.setValue$S$I("startframe", clip.getStartFrameNumber$());
control.setValue$S$I("stepsize", clip.getStepSize$());
control.setValue$S$I("stepcount", clip.getStepCount$());
control.setValue$S$D("starttime", clip.startTimeIsSaved ? clip.savedStartTime : clip.getStartTime$());
control.setValue$S$O("readout", clip.readoutType);
control.setValue$S$Z("playallsteps", clip.playAllSteps);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_media_core_Video,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
this.base=control.getString$S("basepath");
this.loadedClip=obj;
this.loadedVideo=this.loadedClip.getVideo$();
var ivideo=(this.loadedVideo == null  || !(Clazz.instanceOf(this.loadedVideo, "org.opensourcephysics.media.core.IncrementallyLoadable"))  ? null : this.loadedVideo);
if (ivideo != null  && !ivideo.isFullyLoaded$() ) {
return this.loadedClip;
}if (!this.initialized) {
this.initialized=true;
this.start=control.getInt$S("startframe");
this.stepSize=control.getInt$S("stepsize");
this.stepCount=control.getInt$S("stepcount");
this.startTime=control.getDouble$S("starttime");
this.readoutType=control.getString$S("readout");
this.playAllSteps=true;
if (control.getPropertyNamesRaw$().contains$O("playallsteps")) {
this.playAllSteps=control.getBoolean$S("playallsteps");
}this.frameCount=-1;
if (control.getPropertyNamesRaw$().contains$O("video_framecount")) {
this.frameCount=control.getInt$S("video_framecount");
} else if (this.start != -2147483648 && this.stepSize != -2147483648  && this.stepCount != -2147483648 ) {
this.frameCount=this.start + this.stepCount * this.stepSize;
}var frameShift=control.getInt$S("frameshift");
if (frameShift != -2147483648) {
this.loadedClip.frameShift=frameShift;
this.start-=frameShift;
this.frameCount-=frameShift;
}}var getVideo=(ivideo == null  && control.getPropertyNamesRaw$().contains$O("video") );
if (!getVideo) {
this.finalizeLoading$();
(control).dispose$();
return obj;
}$I$(2).addSearchPath$S(this.base);
var child=control.getChildControl$S("video");
this.loadedFilters=child.getObject$S("filters");
this.dt=child.getDouble$S("delta_t");
var childPath=child.getString$S("path");
if (childPath == null ) {
var paths=child.getObject$S("paths");
if (paths != null ) {
childPath=paths[0];
} else this.path="";
}if (child.getPropertyNamesRaw$().contains$O("absolutePath")) {
this.path=child.getString$S("absolutePath");
this.base=null;
} else {
this.path=$I$(3).getResolvedPath$S$S(childPath, this.base);
}var fullPath=this.path;
if (this.base != null  && this.base.endsWith$S("!") ) {
this.path=childPath;
} else if (fullPath.equals$O($I$(3).getResolvedPath$S$S(childPath, this.base))) {
this.path=childPath;
} else {
this.base=$I$(3).getDirectoryPath$S(this.path);
this.path=$I$(3).getName$S(this.path);
}var types=$I$(4).getVideoTypesForPath$S(this.path);
switch (types.size$()) {
case 0:
break;
case 1:
this.loadedVideo=$I$(4,"getVideo$S$S$org_opensourcephysics_media_core_VideoType$org_opensourcephysics_controls_XMLControl",[this.path, this.base, types.get$I(0), child]);
break;
default:
this.loadedVideo=$I$(4).getVideo$S$S$org_opensourcephysics_media_core_VideoType$org_opensourcephysics_controls_XMLControl(this.path, this.base, null, child);
break;
}
if (this.loadedVideo == null  && !$I$(4).isCanceled$() ) {
var res=$I$(2,"getResource$S",[$I$(3).getResolvedPath$S$S(this.path, this.base)]);
var exists=(res != null );
var supported=(types.size$() > 0);
$I$(5).info$S("\"" + fullPath + "\" could not be opened. Found? " + exists + " Supported? " + supported );
if (!supported || exists ) {
var codec=(res == null  ? null : $I$(4,"getVideoCodec$S",[res.getAbsolutePath$()]));
var reason=(exists ? "VideoClip null video" : "VideoClip not supported");
$I$(4,"handleUnsupportedVideo$S$S$S$org_opensourcephysics_media_core_VideoPanel$S",[this.base + "/" + this.path , $I$(3).getExtension$S(this.path), codec, null, reason]);
} else {
var message="\"" + fullPath + "\" " + $I$(6).getString$S("VideoClip.Dialog.VideoNotFound.Message") ;
if ($I$(7).isJS) {
Clazz.new_($I$(8,1)).showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, message, $I$(6).getString$S("VideoClip.Dialog.VideoNotFound.Title"), 2, (P$.VideoClip$Loader$lambda1$||(P$.VideoClip$Loader$lambda1$=(((P$.VideoClip$Loader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoClip$Loader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
});
})()
), Clazz.new_(P$.VideoClip$Loader$lambda1.$init$,[this, null]))))));
} else 
{}
}}if (this.loadedVideo != null ) {
if (this.loadedFilters != null ) {
this.loadedVideo.getFilterStack$().clear$();
var it=this.loadedFilters.iterator$();
while (it.hasNext$()){
var filter=it.next$();
this.loadedVideo.getFilterStack$().addFilter$org_opensourcephysics_media_core_Filter(filter);
}
}if (Clazz.instanceOf(this.loadedVideo, "org.opensourcephysics.media.core.ImageVideo")) {
if (!Double.isNaN$D(this.dt)) {
(this.loadedVideo).setFrameDuration$D(this.dt);
}}}var frameShift=this.loadedClip.frameShift;
this.loadedClip=Clazz.new_($I$(1,1).c$$org_opensourcephysics_media_core_Video,[this.loadedVideo]);
this.loadedClip.frameShift=frameShift;
if (this.path != null ) {
if (!this.path.startsWith$S("/") && this.path.indexOf$S(":") == -1 ) {
this.path=$I$(3).getResolvedPath$S$S(this.path, this.base);
}this.loadedClip.videoPath=this.path;
}if (Clazz.instanceOf(this.loadedVideo, "org.opensourcephysics.media.core.AsyncVideoI")) {
this.loadedClip.loader=this;
return this.loadedClip;
}if ((Clazz.instanceOf(this.loadedVideo, "org.opensourcephysics.media.core.IncrementallyLoadable"))) {
return this.loadedClip;
}var c=this.loadedClip;
this.finalizeLoading$();
return c;
});

Clazz.newMeth(C$, 'finalizeLoading$',  function () {
this.loadedClip.loader=null;
if (this.frameCount == -1) this.frameCount=this.loadedClip.getFrameCount$();
this.loadedClip.setStepCount$I(this.frameCount);
if (this.start != -2147483648) {
this.loadedClip.setStartFrameNumber$I(this.start);
}if (this.stepSize != -2147483648) {
this.loadedClip.setStepSize$I(this.stepSize);
}if (this.stepCount != -2147483648) {
this.loadedClip.setStepCount$I(this.stepCount);
}if (!Double.isNaN$D(this.startTime)) {
this.loadedClip.startTime=this.startTime;
}this.loadedClip.readoutType=this.readoutType;
this.loadedClip.playAllSteps=this.playAllSteps;
p$1.dispose.apply(this, []);
});

Clazz.newMeth(C$, 'dispose',  function () {
this.loadedClip=null;
this.loadedVideo=null;
this.loadedFilters=null;
this.finalized=true;
}, p$1);

Clazz.newMeth(C$, 'isFinalized$',  function () {
return this.finalized;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
