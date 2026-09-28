(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.mov"),I$=[[0,'java.util.TreeSet','org.opensourcephysics.media.mov.MovieFactory','org.opensourcephysics.media.core.VideoFileFilter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MovieVideoType", null, null, 'org.opensourcephysics.media.core.VideoType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.recordable=true;
},1);

C$.$fields$=[['Z',['recordable'],'O',['singleTypeFilter','org.opensourcephysics.media.core.VideoFileFilter']]
,['O',['movieFileFilters','java.util.TreeSet']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoFileFilter',  function (filter) {
C$.c$.apply(this, []);
if (filter != null ) {
this.singleTypeFilter=filter;
C$.movieFileFilters.add$O(filter);
}}, 1);

Clazz.newMeth(C$, 'canRecord$',  function () {
return this.recordable;
});

Clazz.newMeth(C$, 'setRecordable$Z',  function (recordable) {
this.recordable=recordable;
});

Clazz.newMeth(C$, 'getFileFilters$',  function () {
if (this.singleTypeFilter != null ) return Clazz.array($I$(3), -1, [this.singleTypeFilter]);
return C$.movieFileFilters.toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'getDefaultFileFilter$',  function () {
if (this.singleTypeFilter != null ) return this.singleTypeFilter;
return null;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return (this.singleTypeFilter == null  ? null : this.singleTypeFilter.getDescription$());
});

Clazz.newMeth(C$, 'getDefaultExtension$',  function () {
if (this.singleTypeFilter != null ) {
return this.singleTypeFilter.getDefaultExtension$();
}return null;
});

C$.$static$=function(){C$.$static$=0;
C$.movieFileFilters=Clazz.new_($I$(1,1));
{
$I$(2).startMovieThumbnailTool$();
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
