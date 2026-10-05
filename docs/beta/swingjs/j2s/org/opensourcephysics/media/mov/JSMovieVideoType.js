(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.mov"),I$=[[0,'org.opensourcephysics.media.core.VideoFileFilter','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.media.mov.JSMovieVideo','java.io.File','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSMovieVideoType", null, 'org.opensourcephysics.media.mov.MovieVideoType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['registered']]]

Clazz.newMeth(C$, 'register$',  function () {
var JS_VIDEO_EXTENSIONS=Clazz.array(String, -1, ["mov", "mp4", "ogg"]);
for (var ext, $ext = 0, $$ext = JS_VIDEO_EXTENSIONS; $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
var filter=Clazz.new_([ext, Clazz.array(String, -1, [ext])],$I$(1,1).c$$S$SA);
$I$(2,"addVideoType$org_opensourcephysics_media_core_VideoType",[Clazz.new_(C$.c$$org_opensourcephysics_media_core_VideoFileFilter,[filter])]);
$I$(3).addExtractExtension$S(ext);
}
C$.registered=true;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoFileFilter',  function (filter) {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoFileFilter.apply(this,[filter]);C$.$init$.apply(this);
this.setRecordable$Z(false);
}, 1);

Clazz.newMeth(C$, 'getDescription$',  function () {
if (this.singleTypeFilter != null ) return this.singleTypeFilter.getDescription$();
return $I$(4).getString$S("JSVideoType.Description");
});

Clazz.newMeth(C$, 'isType$org_opensourcephysics_media_core_Video',  function (video) {
if (!(video.getClass$() === Clazz.getClass($I$(5)) )) return false;
if (this.singleTypeFilter == null ) return true;
var name=video.getProperty$S("name");
return this.singleTypeFilter.accept$java_io_File(Clazz.new_($I$(6,1).c$$S,[name]));
});

Clazz.newMeth(C$, 'getVideo$S$S$org_opensourcephysics_controls_XMLControl',  function (name, basePath, control) {
var video=null;
try {
video=Clazz.new_($I$(5,1).c$$S$S$org_opensourcephysics_controls_XMLControl,[name, basePath, control]);
if (video.getFrameNumber$() == -2147483648) {
video=null;
} else {
video.setProperty$S$O("video_type", this);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (name != null ) {
$I$(7,"fine$S",[this.getDescription$() + ": " + e.getMessage$() ]);
video=null;
}e.printStackTrace$();
} else {
throw e;
}
}
return video;
});

Clazz.newMeth(C$, 'getRecorder$',  function () {
$I$(7).warning$S("JSMovieVideoType unable to record");
return null;
});

Clazz.newMeth(C$, 'getTypeName$',  function () {
return "JS";
});

C$.$static$=function(){C$.$static$=0;
{
C$.register$();
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
