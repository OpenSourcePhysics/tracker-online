(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.VideoFileFilter','org.opensourcephysics.media.core.ImageVideo','org.opensourcephysics.controls.XML','java.io.File','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.media.core.ImageVideoRecorder','org.opensourcephysics.media.core.VideoIO','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageVideoType", null, null, 'org.opensourcephysics.media.core.VideoType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fileFilters','org.opensourcephysics.media.core.VideoFileFilter[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoFileFilter',  function (filter) {
C$.c$.apply(this, []);
if (filter != null ) {
this.fileFilters=Clazz.array($I$(1), -1, [filter]);
}}, 1);

Clazz.newMeth(C$, 'getVideo$java_io_File',  function (file) {
try {
var video=Clazz.new_([file.getAbsolutePath$(), null, true],$I$(2,1).c$$S$S$Z);
video.setProperty$S$O("video_type", this);
return video;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getVideo$S$S$org_opensourcephysics_controls_XMLControl',  function (name, basePath, control) {
var video=null;
if (control == null ) {
var xmlName=$I$(3,"stripExtension$S",[basePath == null  ? name : basePath + $I$(4).separator + name ]) + ".xml";
control=Clazz.new_([Clazz.new_($I$(4,1).c$$S,[xmlName])],$I$(5,1).c$$java_io_File);
}control.setBasepath$S(basePath == null  ? $I$(3).getDirectoryPath$S(name) : basePath);
if (!control.failedToRead$() && control.getObjectClass$() === Clazz.getClass($I$(2))  ) {
try {
video=control.loadObject$O(null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}if (video == null ) {
try {
video=Clazz.new_($I$(2,1).c$$S$S$Z,[name, basePath, true]);
video.setProperty$S$O("video_type", this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
return video;
}var paths=video.getValidPaths$();
var absolutePath=video.getProperty$S("absolutePath");
var absInvalid=absolutePath == null  || (!absolutePath.startsWith$S("/") && absolutePath.indexOf$S(":") == -1 ) ;
var theName=video.getProperty$S("name");
if (theName == null ) theName=name;
if (absInvalid) {
video.setProperty$S$O("absolutePath", $I$(3).getResolvedPath$S$S(theName, basePath));
}var baseInvalid=video.baseDir == null  || (!video.baseDir.startsWith$S("/") && video.baseDir.indexOf$S(":") == -1 ) ;
if (baseInvalid && basePath != null   && paths.length > 0 ) {
absolutePath=video.getProperty$S("absolutePath");
var n=absolutePath.indexOf$S(paths[0]);
if (n > -1) {
video.baseDir=absolutePath.substring$I$I(0, n);
} else {
video.baseDir=basePath;
}}return video;
});

Clazz.newMeth(C$, 'getRecorder$',  function () {
return Clazz.new_($I$(6,1).c$$org_opensourcephysics_media_core_ImageVideoType,[this]);
});

Clazz.newMeth(C$, 'canRecord$',  function () {
return true;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.getFileFilters$()[0].getDescription$();
});

Clazz.newMeth(C$, 'getDefaultExtension$',  function () {
return this.getFileFilters$()[0].getDefaultExtension$();
});

Clazz.newMeth(C$, 'getFileFilters$',  function () {
if (this.fileFilters == null ) {
var types=$I$(7).getVideoTypes$Z(true);
var filters=Clazz.new_($I$(8,1));
for (var next, $next = types.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.media.core.ImageVideoType") && next !== this  ) {
var imageType=next;
filters.add$O(imageType.getDefaultFileFilter$());
}}
this.fileFilters=filters.toArray$OA(Clazz.array($I$(1), [filters.size$()]));
}return this.fileFilters;
});

Clazz.newMeth(C$, 'getDefaultFileFilter$',  function () {
return this.getFileFilters$()[0];
});

Clazz.newMeth(C$, 'isType$org_opensourcephysics_media_core_Video',  function (video) {
return Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo");
});

Clazz.newMeth(C$, 'getTypeName$',  function () {
return "Image";
});

Clazz.newMeth(C$, 'toString',  function () {
return this._toString$();
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
