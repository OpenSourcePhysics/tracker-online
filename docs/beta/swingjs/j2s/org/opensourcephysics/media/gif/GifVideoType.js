(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[[0,'org.opensourcephysics.media.core.VideoFileFilter','org.opensourcephysics.media.gif.GifVideo','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.media.gif.GifVideoRecorder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GifVideoType", null, null, 'org.opensourcephysics.media.core.VideoType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['gifFilter','org.opensourcephysics.media.core.VideoFileFilter']]]

Clazz.newMeth(C$, 'getVideo$S$S$org_opensourcephysics_controls_XMLControl',  function (name, basePath, control) {
var video;
try {
video=Clazz.new_([$I$(3).getResolvedPath$S$S(name, basePath)],$I$(2,1).c$$S);
video.setProperty$S$O("video_type", this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(4,"fine$S",[ex.getMessage$()]);
video=null;
} else {
throw ex;
}
}
return video;
});

Clazz.newMeth(C$, 'getRecorder$',  function () {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'canRecord$',  function () {
return true;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return C$.gifFilter.getDescription$();
});

Clazz.newMeth(C$, 'getDefaultExtension$',  function () {
return C$.gifFilter.getDefaultExtension$();
});

Clazz.newMeth(C$, 'getFileFilters$',  function () {
return Clazz.array($I$(1), -1, [C$.gifFilter]);
});

Clazz.newMeth(C$, 'getDefaultFileFilter$',  function () {
return C$.gifFilter;
});

Clazz.newMeth(C$, 'isType$org_opensourcephysics_media_core_Video',  function (video) {
return Clazz.instanceOf(video, "org.opensourcephysics.media.gif.GifVideo");
});

Clazz.newMeth(C$, 'getTypeName$',  function () {
return "Gif";
});

C$.$static$=function(){C$.$static$=0;
C$.gifFilter=Clazz.new_(["gif", Clazz.array(String, -1, ["gif"])],$I$(1,1).c$$S$SA);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
