(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.mov"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.Resource','java.net.URL','java.io.File','java.awt.Frame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MovieVideo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.VideoAdapter');
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['allowControlData','isLocal','isExport','isVariableFrameRate'],'D',['rawDuration','frameRateMinimum','frameRateMaximum'],'I',['nominalFrameRate','rawFrameCount'],'S',['fileName','sourcePlatform','path'],'O',['url','java.net.URL','frameTimes','java.util.ArrayList','control','org.opensourcephysics.controls.XMLControl']]]

Clazz.newMeth(C$, 'c$$S$S$org_opensourcephysics_controls_XMLControl',  function (fileName, basePath, control) {
Clazz.super_(C$, this);
this.fileName=fileName;
var isJava=(this.getPlatform$() == "Java");
this.allowControlData=true;
p$1.addFramePropertyListeners.apply(this, []);
this.isExport=(control != null  && !"video".equals$O(control.getPropertyName$()) );
this.baseDir=basePath;
this.path=this.getAbsolutePath$S(fileName);
var res=(isJava ? $I$(5).getResource$S(fileName) : $I$(5).isHTTP$S(this.path) ? Clazz.new_([Clazz.new_($I$(7,1).c$$S,[this.path])],$I$(6,1).c$$java_net_URL) : Clazz.new_([Clazz.new_($I$(8,1).c$$S,[this.path])],$I$(6,1).c$$java_io_File));
if (res == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unable to create resource for " + fileName]);
this.url=res.getURL$();
this.isLocal=(this.url.getProtocol$().toLowerCase$().indexOf$S("file") >= 0);
this.path=this.isLocal ? res.getAbsolutePath$() : this.url.toExternalForm$();
this.setProperty$S$O("name", $I$(1).getName$S(fileName));
this.setProperty$S$O("absolutePath", res.getAbsolutePath$());
if (fileName.indexOf$S(":") < 0) {
this.setProperty$S$O("path", $I$(1).forwardSlash$S(fileName));
} else if (!isJava) {
this.setProperty$S$O("path", $I$(1).getRelativePath$S(fileName));
} else if (fileName.contains$CharSequence("!/")) {
var dir=fileName.substring$I$I(0, fileName.indexOf$S("!/"));
dir=$I$(1).getDirectoryPath$S(dir);
this.setProperty$S$O("path", $I$(1).getPathRelativeTo$S$S(fileName, dir));
} else {
this.setProperty$S$O("path", res.getAbsolutePath$());
}}, 1);

Clazz.newMeth(C$, 'setStartTimes$',  function () {
if (this.startTimesMS == null ) {
this.startTimesMS=Clazz.array(Double.TYPE, [this.frameCount]);
this.startTimesMS[0]=0;
for (var i=1; i < this.startTimesMS.length; i++) {
this.startTimesMS[i]=(this.frameTimes.get$I(i)).$c() * 1000;
}
}});

Clazz.newMeth(C$, 'addFramePropertyListeners',  function () {
var frames=$I$(9).getFrames$();
for (var i=0, n=frames.length; i < n; i++) {
if (frames[i].getName$().equals$O("Tracker")) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("progress", frames[i]);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stalled", frames[i]);
break;
}}
}, p$1);

Clazz.newMeth(C$, 'getFrameNumberBefore$D',  function (time) {
time+=0.1;
for (var i=0; i < this.startTimesMS.length; i++) {
if (time < this.startTimesMS[i] ) {
return i - 1;
}}
return (time < this.rawDuration * 1000  ? this.startTimesMS.length - 1 : -1);
});

Clazz.newMeth(C$, 'setFromControl$org_opensourcephysics_controls_XMLControl',  function (control) {
var count=control.getInt$S("frame_count");
if (count == -2147483648) return null;
var platform=control.getString$S("platform");
if (!$I$(3).isJS && platform.equals$O("Java") ) {
return null;
}this.sourcePlatform=(platform == null  ? "unknown" : platform);
this.frameCount=count;
this.startTimesMS=control.getObject$S("start_times");
this.rawDuration=control.getDouble$S("duration");
this.nominalFrameRate=control.getInt$S("frame_rate");
return control;
});

Clazz.newMeth(C$, 'setFromMediaTrackInfo$java_util_Map',  function (info) {
var key=null;
try {
var duration=Double.parseDouble$S(info.get$O(key="Duration"));
var precisionFrameRate=Double.parseDouble$S(info.get$O(key="FrameRate"));
var frameRateMode=info.get$O(key="FrameRate_Mode");
if ("VFR".equals$O(frameRateMode)) {
this.isVariableFrameRate=true;
this.frameRateMinimum=Double.parseDouble$S(info.get$O(key="FrameRate_Minimum"));
this.frameRateMaximum=Double.parseDouble$S(info.get$O(key="FrameRate_Maximum"));
}this.frameCount=Integer.parseInt$S(info.get$O(key="FrameCount"));
this.nominalFrameRate=Long.$ival(Math.round$D(precisionFrameRate));
this.rawDuration=duration;
this.startTimesMS=Clazz.array(Double.TYPE, [this.frameCount]);
for (var i=0; i < this.frameCount; i++) {
this.startTimesMS[i]=i * 1000 / precisionFrameRate;
}
System.out.println$S("MovieVideo: found " + frameRateMode + " FrameRate " + new Double(precisionFrameRate).toString() + " FrameCount " + this.frameCount + " Duration " + new Double(this.rawDuration).toString() + " (" + new Double((precisionFrameRate * this.frameCount)).toString() + " calc)" );
if (this.isVariableFrameRate) System.out.println$S("MovieVideo: Variable frame rate " + new Double(this.frameRateMinimum).toString() + " - " + new Double(this.frameRateMaximum).toString() );
return null;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return "MovieVideo MediaInfo parse error for " + key + ": " + e.getMessage$() ;
} else {
throw e;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MovieVideo, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.media.core.VideoAdapter','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var vid=obj;
if (vid.startTimesMS != null ) control.setValue$S$DA$I("start_times", vid.startTimesMS, 3);
var rawDuration=vid.rawDuration;
control.setValue$S$D("duration", rawDuration);
var fc=vid.frameCount;
control.setValue$S$I("frame_count", fc);
var fps=Long.$ival(Math.round$D(fc / rawDuration));
control.setValue$S$I("frame_rate", fps);
var platform=(vid.sourcePlatform == null  ? vid.getPlatform$() : vid.sourcePlatform);
control.setValue$S$O("platform", platform);
});

Clazz.newMeth(C$, 'setVideo$S$org_opensourcephysics_media_mov_MovieVideo$S',  function (path, video, engine) {
var ext=$I$(1).getExtension$S(path);
var type=$I$(2).getVideoType$S$S(engine, ext);
if (type != null ) video.setProperty$S$O("video_type", type);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
try {
var fullpath=control.getString$S("absolutePath");
if (fullpath != null ) return this.createVideo$org_opensourcephysics_controls_XMLControl$S(control, fullpath);
var path=control.getString$S("path");
if ($I$(3).checkTempDirCache) path=$I$(3).tempDir + path;
return this.createVideo$org_opensourcephysics_controls_XMLControl$S(control, path);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(4,"fine$S",[ex.getMessage$()]);
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'createVideo$S',  function (path) {
return null;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
