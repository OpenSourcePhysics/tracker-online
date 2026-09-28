(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','java.util.TreeSet','java.io.File','java.util.TreeMap','Thread','StringBuffer','org.opensourcephysics.controls.OSPLog',['org.opensourcephysics.tools.JREFinder','.JavaFile'],['org.opensourcephysics.tools.JREFinder','.JavaFilter']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JREFinder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['JavaFilter',10],['JavaFile',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['javaFilter','org.opensourcephysics.tools.JREFinder.JavaFilter']]
,['Z',['isReady','isSearching'],'O',['JRE_FINDER','org.opensourcephysics.tools.JREFinder','allJREs','java.util.TreeSet','+searchedAndFoundJRE']]]

Clazz.newMeth(C$, 'getFinder$',  function () {
return C$.JRE_FINDER;
}, 1);

Clazz.newMeth(C$, 'isReady$',  function () {
return C$.isReady;
}, 1);

Clazz.newMeth(C$, 'is32BitVM$S',  function (jrePath) {
if (jrePath == null ) return false;
if ($I$(1).isWindows$()) {
if (jrePath.contains$CharSequence("64")) return false;
var x86=System.getenv$S("ProgramFiles(x86)");
if (x86 != null ) {
return jrePath.contains$CharSequence(x86) ? true : false;
}return true;
}if ($I$(1).isMac$()) {
return false;
}return $I$(1).getVMBitness$() == 32;
});

Clazz.newMeth(C$, 'getJREs$I',  function (vmBitness) {
var results=p$1.findJREs.apply(this, []);
for (var it=results.iterator$(); it.hasNext$(); ) {
var path=it.next$().getPath$();
if (vmBitness == 32 && !this.is32BitVM$S(path) ) {
it.remove$();
} else if (vmBitness != 32 && this.is32BitVM$S(path) ) {
it.remove$();
}}
return results;
});

Clazz.newMeth(C$, 'getDefaultJRE$I$S$Z$S',  function (vmBitness, path, searchAll, prefix) {
if (path != null ) {
var dir=Clazz.new_($I$(3,1).c$$S,[path]);
if (dir.exists$()) {
var result=Clazz.new_($I$(2,1));
result=p$1.findJREsInDirectory$java_io_File$java_util_Set.apply(this, [dir, result]);
if (!result.isEmpty$()) {
var map=Clazz.new_($I$(4,1));
for (var f, $f = result.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (vmBitness == 32 && this.is32BitVM$S(f.getPath$()) ) map.put$O$O(f.getName$(), f);
 else if (vmBitness == 64 && !this.is32BitVM$S(f.getPath$()) ) map.put$O$O(f.getName$(), f);
}
if (!map.isEmpty$()) {
if (prefix != null ) {
var s=null;
var it=map.keySet$().iterator$();
while (it.hasNext$()){
var next=it.next$();
if (next.startsWith$S(prefix)) s=next;
}
if (s != null ) return map.get$O(s);
}var s=map.keySet$().iterator$().next$();
return map.get$O(s);
}}}}if (!searchAll) return null;
var JRE=null;
var jreDirs=p$1.getPublicJREs$I.apply(this, [vmBitness]);
for (var next, $next = jreDirs.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (JRE == null ) JRE=next;
}
if (JRE == null ) {
jreDirs=this.getJREs$I(vmBitness);
for (var next, $next = jreDirs.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (JRE == null ) JRE=next;
}
}return JRE;
});

Clazz.newMeth(C$, 'findJREs',  function () {
while (C$.isSearching){
try {
$I$(5).sleep$J(200);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
if (!C$.isReady) {
C$.allJREs.clear$();
C$.isSearching=true;
var searchPaths=Clazz.new_($I$(2,1));
try {
var trackerhome=System.getenv$S("TRACKER_HOME");
if (trackerhome == null ) {
trackerhome=$I$(1).getPreference$S("TRACKER_HOME");
}if (trackerhome != null ) {
var file=Clazz.new_($I$(3,1).c$$S,[trackerhome]);
if (file.exists$()) {
if ($I$(1).isMac$()) {
var path=file.getParent$() + "/runtime";
searchPaths.add$O(Clazz.new_($I$(3,1).c$$S,[path]));
} else {
searchPaths.add$O(file);
}}}if ($I$(1).isWindows$()) {
var progfiles=System.getenv$S("ProgramFiles");
var w6432=System.getenv$S("ProgramW6432");
var x86=System.getenv$S("ProgramFiles(x86)");
if (progfiles != null ) {
var file=Clazz.new_($I$(3,1).c$$S$S,[progfiles, "Java"]);
if (file.exists$()) searchPaths.add$O(file);
}if (w6432 != null ) {
var file=Clazz.new_($I$(3,1).c$$S$S,[w6432, "Java"]);
if (file.exists$()) searchPaths.add$O(file);
}if (x86 != null ) {
var file=Clazz.new_($I$(3,1).c$$S$S,[x86, "Java"]);
if (file.exists$()) searchPaths.add$O(file);
}} else if ($I$(1).isMac$()) {
if (trackerhome != null ) {
var file=Clazz.new_($I$(3,1).c$$S,[trackerhome]);
if (file.exists$()) searchPaths.add$O(file.getParentFile$());
}var file=Clazz.new_($I$(3,1).c$$S,["/System/Library/Java"]);
if (file.exists$()) searchPaths.add$O(file);
file=Clazz.new_($I$(3,1).c$$S,["/Library/Java"]);
if (file.exists$()) searchPaths.add$O(file);
file=Clazz.new_($I$(3,1).c$$S,["/Library/Internet Plug-Ins"]);
if (file.exists$()) searchPaths.add$O(file);
} else if ($I$(1).isLinux$()) {
var file=Clazz.new_($I$(3,1).c$$S,["/usr/lib/jvm"]);
if (file.exists$()) searchPaths.add$O(file);
}for (var next, $next = searchPaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
p$1.findJREsInDirectory$java_io_File$java_util_Set.apply(this, [next, C$.allJREs]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
C$.isReady=true;
C$.isSearching=false;
var buf=Clazz.new_($I$(6,1).c$$S,["JREs found: "]);
for (var next, $next = C$.allJREs.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
buf.append$S(next.getAbsolutePath$() + ", ");
}
$I$(7,"fine$S",[buf.toString()]);
}return Clazz.new_($I$(2,1).c$$java_util_SortedSet,[C$.allJREs]);
}, p$1);

Clazz.newMeth(C$, 'findJREsInDirectory$java_io_File$java_util_Set',  function (dir, jreSet) {
if (dir == null  || !dir.isDirectory$() ) return jreSet;
try {
if (!dir.getCanonicalPath$().equals$O(dir.getAbsolutePath$())) {
return jreSet;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if ($I$(1).isMac$()) {
var javaFile=Clazz.new_($I$(3,1).c$$java_io_File$S,[dir, "jre/bin/java"]);
if (javaFile.exists$()) {
jreSet.add$O(Clazz.new_([Clazz.new_($I$(3,1).c$$java_io_File$S,[dir, "jre"])],$I$(8,1).c$$java_io_File));
return jreSet;
}javaFile=Clazz.new_($I$(3,1).c$$java_io_File$S,[dir, "bin/java"]);
if (javaFile.exists$()) {
jreSet.add$O(Clazz.new_($I$(8,1).c$$java_io_File,[dir]));
return jreSet;
}if (dir.getName$().contains$CharSequence(".plugin") || dir.getName$().contains$CharSequence(".runtime") ) {
var child=Clazz.new_($I$(3,1).c$$java_io_File$S,[dir, "Contents"]);
if (child.exists$()) {
p$1.findJREsInDirectory$java_io_File$java_util_Set.apply(this, [Clazz.new_($I$(3,1).c$$java_io_File$S,[child, "Home"]), jreSet]);
}return jreSet;
}}var parent=dir.getParentFile$();
var fileNames=dir.list$();
if (fileNames != null  && fileNames.length > 0 ) {
for (var next, $next = 0, $$next = fileNames; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (this.javaFilter.accept$java_io_File$S(dir, next)) {
{
jreSet.add$O(Clazz.new_($I$(8,1).c$$java_io_File,[parent]));
if (parent.getParent$().contains$CharSequence("jdk")) {
C$.searchedAndFoundJRE.add$O(parent.getParentFile$());
} else C$.searchedAndFoundJRE.add$O(parent);
}break;
} else if (!C$.searchedAndFoundJRE.contains$O(parent)) {
p$1.findJREsInDirectory$java_io_File$java_util_Set.apply(this, [Clazz.new_($I$(3,1).c$$java_io_File$S,[dir, next]), jreSet]);
}}
}return jreSet;
}, p$1);

Clazz.newMeth(C$, 'getPublicJREs$I',  function (vmBitness) {
var jreDirs=this.getJREs$I(vmBitness);
if ($I$(1).isWindows$()) {
for (var it=jreDirs.iterator$(); it.hasNext$(); ) {
var next=it.next$();
if (next.getPath$().indexOf$S("jdk") > -1) {
it.remove$();
}}
}return jreDirs;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.javaFilter=Clazz.new_($I$(9,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.JRE_FINDER=Clazz.new_(C$);
C$.isReady=false;
C$.isSearching=false;
C$.allJREs=Clazz.new_($I$(2,1));
C$.searchedAndFoundJRE=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JREFinder, "JavaFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.FilenameFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S',  function (dir, name) {
if (!dir.getPath$().endsWith$S("bin")) return false;
if (!$I$(1).isMac$() && !dir.getParent$().contains$CharSequence("jre") ) return false;
if (dir.getPath$().contains$CharSequence("1.7.") || dir.getPath$().contains$CharSequence("jre7") || dir.getPath$().contains$CharSequence("1.6.") || dir.getPath$().contains$CharSequence("jre6") || dir.getPath$().contains$CharSequence("1.5.") || dir.getPath$().contains$CharSequence("-5-") || dir.getPath$().contains$CharSequence("1.4.") || dir.getPath$().contains$CharSequence("1.3.") || dir.getPath$().contains$CharSequence("1.2.")  ) return false;
if (name.equals$O("java.exe")) return true;
if (name.equals$O("java")) return true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JREFinder, "JavaFile", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.File');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
;C$.superclazz.c$$S.apply(this,[file.getPath$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compareTo$java_io_File','compareTo$O'],  function (other) {
var path=this.getPath$();
var otherPath=other.getPath$();
if (!path.contains$CharSequence("jdk") && otherPath.contains$CharSequence("jdk") ) {
return -1;
}if (path.contains$CharSequence("jdk") && !otherPath.contains$CharSequence("jdk") ) {
return 1;
}var comp=C$.superclazz.prototype.compareTo$java_io_File.apply(this, [other]);
comp=comp > 0 ? -1 : comp < 0 ? 1 : 0;
if ($I$(1).isWindows$()) {
if (path.contains$CharSequence("1.") && otherPath.contains$CharSequence("1.") ) {
return comp;
}if (path.contains$CharSequence("jre6")) {
if (otherPath.contains$CharSequence("jre7") || otherPath.contains$CharSequence("1.8") || otherPath.contains$CharSequence("jre-9")  ) {
return 1;
}return comp;
}if (otherPath.contains$CharSequence("jre6")) {
if (path.contains$CharSequence("jre7") || path.contains$CharSequence("1.8") || path.contains$CharSequence("jre-9")  ) {
return -1;
}return comp;
}if (path.contains$CharSequence("jre7")) {
if (otherPath.contains$CharSequence("jre6")) {
return -1;
}if (otherPath.contains$CharSequence("1.8") || otherPath.contains$CharSequence("jre-9") ) {
return 1;
}return comp;
}if (otherPath.contains$CharSequence("jre7")) {
if (path.contains$CharSequence("jre6")) {
return 1;
}if (path.contains$CharSequence("1.8") || path.contains$CharSequence("jre-9") ) {
return -1;
}return comp;
}if (path.contains$CharSequence("jre-9")) {
if (otherPath.contains$CharSequence("jre6") || otherPath.contains$CharSequence("jre7") || otherPath.contains$CharSequence("1.8")  ) {
return -1;
}return comp;
}if (otherPath.contains$CharSequence("jre-9")) {
if (path.contains$CharSequence("jre6") || path.contains$CharSequence("jre7") || path.contains$CharSequence("1.8")  ) {
return 1;
}return comp;
}}return comp;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
