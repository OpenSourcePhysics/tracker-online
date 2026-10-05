(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.media.core.MediaRes','java.util.TreeSet','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoFileFilter", null, ['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter'], 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type="Video";
},1);

C$.$fields$=[['S',['type'],'O',['extensions','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S.apply(this,[null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA',  function (containerType, extensions) {
C$.c$.apply(this, []);
if (containerType != null  && extensions != null   && extensions.length > 0 ) {
this.type=containerType;
this.extensions=extensions;
}}, 1);

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkIfDir) {
if (checkIfDir && f.isDirectory$() ) {
return true;
}if (this.extensions != null ) {
var extension=$I$(1).getExtension$java_io_File(f);
if (extension != null ) {
for (var i=0, n=this.extensions.length; i < n; i++) {
var next=this.extensions[i];
if (extension.equalsIgnoreCase$S(next)) return true;
}
}} else {
for (var next, $next = $I$(1).singleVideoTypeFilters.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.accept$java_io_File$Z(f, false)) return true;
}
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
if (this.desc != null ) return this.desc;
var desc=$I$(2,"getString$S",[this.type.toUpperCase$() + "FileFilter.Description"]);
var exts=this.getExtensions$();
if (exts != null ) {
desc+=" (";
for (var i=0; i < exts.length; i++) {
if (i > 0) desc+=", ";
desc+="." + exts[i];
}
desc+=")";
}return this.desc=desc;
});

Clazz.newMeth(C$, 'getDefaultExtension$',  function () {
var exts=this.getExtensions$();
if (exts != null ) return exts[0];
for (var next, $next = $I$(1).singleVideoTypeFilters.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var ext=next.getDefaultExtension$();
if (ext != null ) return ext;
}
return null;
});

Clazz.newMeth(C$, 'getExtensions$',  function () {
if (this.extensions != null ) return this.extensions;
var set=Clazz.new_($I$(3,1));
for (var next, $next = $I$(1).singleVideoTypeFilters.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var exts=next.getExtensions$();
for (var ext, $ext = 0, $$ext = exts; $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) set.add$O(ext);

}
return set.toArray$OA(Clazz.array(String, [set.size$()]));
});

Clazz.newMeth(C$, 'getContainerType$',  function () {
return this.type;
});

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_media_core_VideoFileFilter','compareTo$O'],  function (filter) {
return this.getDescription$().compareTo$S(filter.getDescription$());
});

Clazz.newMeth(C$, 'toString',  function () {
var s=$I$(4).toString$OA(this.extensions);
return s.substring$I$I(1, s.length$() - 1);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
