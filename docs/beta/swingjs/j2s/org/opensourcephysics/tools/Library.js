(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.Library','java.util.ArrayList','java.util.HashMap','java.util.TreeSet','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ToolsRes',['org.opensourcephysics.tools.Library','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Library", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pathList=Clazz.new_($I$(4,1));
this.pathToNameMap=Clazz.new_($I$(5,1));
this.comPADREPathList=Clazz.new_($I$(4,1));
this.comPADREPathToNameMap=Clazz.new_($I$(5,1));
this.ospLibraryPathList=Clazz.new_($I$(4,1));
this.ospPathToLibraryMap=Clazz.new_($I$(5,1));
this.importedPathList=Clazz.new_($I$(4,1));
this.importedPathToLibraryMap=Clazz.new_($I$(5,1));
this.subPathList=Clazz.new_($I$(4,1));
this.subPathToLibraryMap=Clazz.new_($I$(5,1));
this.allPathsToNameMap=Clazz.new_($I$(5,1));
this.noSearchSet=Clazz.new_($I$(6,1));
this.recentTabs=Clazz.new_($I$(4,1));
this.maxRecentTabCount=6;
},1);

C$.$fields$=[['I',['maxRecentTabCount'],'S',['name','chooserDir'],'O',['pathList','java.util.ArrayList','pathToNameMap','java.util.HashMap','comPADREPathList','java.util.ArrayList','comPADREPathToNameMap','java.util.HashMap','ospLibraryPathList','java.util.ArrayList','ospPathToLibraryMap','java.util.HashMap','importedPathList','java.util.ArrayList','importedPathToLibraryMap','java.util.HashMap','subPathList','java.util.ArrayList','subPathToLibraryMap','java.util.HashMap','+allPathsToNameMap','noSearchSet','java.util.Set','openTabPaths','String[]','recentTabs','java.util.ArrayList','browser','org.opensourcephysics.tools.LibraryBrowser']]]

Clazz.newMeth(C$, 'addOSPLibrary$S',  function (path) {
if (this.ospLibraryPathList.contains$O(path)) return false;
{
var control=Clazz.new_($I$(7,1).c$$S,[path]);
if (control.failedToRead$() || control.getObjectClass$() !== Clazz.getClass(C$)  ) {
return false;
}var library=Clazz.new_(C$);
control.loadObject$O(library);
library.browser=this.browser;
this.ospLibraryPathList.add$O(path);
this.ospPathToLibraryMap.put$O$O(path, library);
}return true;
});

Clazz.newMeth(C$, 'importLibrary$S',  function (path) {
if (this.importedPathList.contains$O(path)) return false;
var control=Clazz.new_($I$(7,1).c$$S,[path]);
if (control.failedToRead$() || control.getObjectClass$() !== Clazz.getClass(C$)  ) return false;
var library=Clazz.new_(C$);
library.browser=this.browser;
control.loadObject$O(library);
return this.importLibrary$S$org_opensourcephysics_tools_Library(path, library);
});

Clazz.newMeth(C$, 'addComPADRECollection$S$S',  function (path, name) {
path=path.trim$();
if (this.comPADREPathList.contains$O(path)) return false;
this.comPADREPathList.add$O(path);
this.comPADREPathToNameMap.put$O$O(path, name.trim$());
return true;
});

Clazz.newMeth(C$, 'addSubLibrary$S',  function (path) {
if (this.subPathList.contains$O(path)) return false;
{
var control=Clazz.new_($I$(7,1).c$$S,[path]);
if (control.failedToRead$() || control.getObjectClass$() !== Clazz.getClass(C$)  ) return false;
var library=Clazz.new_(C$);
library.browser=this.browser;
control.loadObject$O(library);
this.subPathList.add$O(path);
this.subPathToLibraryMap.put$O$O(path, library);
}return true;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getName$();
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
if (name == null ) {
name=$I$(8).getUserHome$().replace$C$C("\\", "/");
if (name.endsWith$S("/")) {
name=name.substring$I$I(0, name.length$() - 1);
}name=$I$(1).getName$S(name) + " " + $I$(9).getString$S("Library.Name") ;
}this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'save$S',  function (path) {
if (path != null ) Clazz.new_($I$(7,1).c$$O,[this]).write$S(path);
});

Clazz.newMeth(C$, 'load$S',  function (path) {
if (path != null ) Clazz.new_($I$(7,1).c$$S,[path]).loadObject$O(this);
});

Clazz.newMeth(C$, 'getNames$',  function () {
return this.pathToNameMap.values$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.pathList.isEmpty$();
});

Clazz.newMeth(C$, 'containsPath$S$Z',  function (path, allLists) {
path=path.trim$();
var n=path.indexOf$S("&OSPPrimary=Subject");
if (n >= 0) path=path.substring$I$I(0, n);
return this.pathList.contains$O(path) || (allLists && (this.comPADREPathList.contains$O(path) || this.ospLibraryPathList.contains$O(path) ) ) ;
});

Clazz.newMeth(C$, 'addCollection$S$S',  function (path, name) {
path=path.trim$();
if (this.pathList.contains$O(path)) return;
this.pathList.add$O(path);
this.pathToNameMap.put$O$O(path, name.trim$());
this.allPathsToNameMap.put$O$O(path, name.trim$());
});

Clazz.newMeth(C$, 'renameCollection$S$S',  function (path, newName) {
path=path.trim$();
if (!this.pathList.contains$O(path)) return;
this.pathToNameMap.put$O$O(path, newName.trim$());
this.allPathsToNameMap.put$O$O(path, newName.trim$());
});

Clazz.newMeth(C$, 'getAllPaths$',  function () {
var paths=Clazz.new_($I$(6,1));
paths.addAll$java_util_Collection(this.pathList);
paths.addAll$java_util_Collection(this.comPADREPathList);
if (!this.subPathList.isEmpty$()) {
for (var path, $path = this.subPathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var library=this.subPathToLibraryMap.get$O(path);
paths.addAll$java_util_Collection(library.getAllPaths$());
}
}for (var path, $path = this.ospLibraryPathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var library=this.ospPathToLibraryMap.get$O(path);
paths.addAll$java_util_Collection(library.getAllPaths$());
}
return paths;
});

Clazz.newMeth(C$, 'getNameMap$',  function () {
return this.allPathsToNameMap;
});

Clazz.newMeth(C$, 'getCloneForExport$',  function () {
var lib=Clazz.new_(C$);
lib.pathList=this.pathList;
lib.pathToNameMap=this.pathToNameMap;
lib.name=this.name;
return lib;
});

Clazz.newMeth(C$, 'importLibrary$S$org_opensourcephysics_tools_Library',  function (path, library) {
if (this.importedPathList.contains$O(path)) return false;
this.importedPathList.add$O(path);
this.importedPathToLibraryMap.put$O$O(path, library);
return true;
});

Clazz.newMeth(C$, 'addRecent$S$Z',  function (filename, atEnd) {
if (filename == null ) return;
{
while (this.recentTabs.contains$O(filename))this.recentTabs.remove$O(filename);

if (atEnd) this.recentTabs.add$O(filename);
 else this.recentTabs.add$I$O(0, filename);
while (this.recentTabs.size$() > this.maxRecentTabCount){
this.recentTabs.remove$I(this.recentTabs.size$() - 1);
}
}});

Clazz.newMeth(C$, 'removeRecent$S',  function (filename) {
if (filename == null ) return;
{
while (this.recentTabs.contains$O(filename))this.recentTabs.remove$O(filename);

}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Library, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var library=obj;
control.setValue$S$O("name", library.getName$());
if (!library.pathList.isEmpty$()) {
var paths=library.pathList.toArray$OA(Clazz.array(String, [0]));
control.setValue$S$O("collection_paths", paths);
var names=Clazz.array(String, [paths.length]);
for (var i=0; i < paths.length; i++) {
names[i]=library.pathToNameMap.get$O(paths[i]);
}
control.setValue$S$O("collection_names", names);
}if (!library.subPathList.isEmpty$()) {
var paths=library.subPathList.toArray$OA(Clazz.array(String, [0]));
control.setValue$S$O("sublibrary_paths", paths);
}if (!library.importedPathList.isEmpty$()) {
var paths=library.importedPathList.toArray$OA(Clazz.array(String, [0]));
control.setValue$S$O("imported_library_paths", paths);
}control.setValue$S$O("open_tabs", library.openTabPaths);
control.setValue$S$O("chooser_directory", library.chooserDir);
if (!library.recentTabs.isEmpty$()) {
var paths=library.recentTabs.toArray$OA(Clazz.array(String, [0]));
control.setValue$S$O("recently_opened", paths);
var names=Clazz.array(String, [paths.length]);
for (var i=0; i < names.length; i++) {
names[i]=library.getNameMap$().get$O(paths[i]);
if (names[i] == null ) names[i]=$I$(1).getName$S(paths[i]);
}
control.setValue$S$O("recently_opened_names", names);
}if (!library.noSearchSet.isEmpty$()) {
var paths=library.noSearchSet.toArray$OA(Clazz.array(String, [0]));
control.setValue$S$O("no_search_paths", paths);
}var cache=$I$(2).getOSPCache$();
if (cache != null ) {
control.setValue$S$O("cache", cache.getPath$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var library=obj;
library.setName$S(control.getString$S("name"));
var paths=control.getObject$S("collection_paths");
if (paths != null ) {
var names=control.getObject$S("collection_names");
library.pathList.clear$();
library.pathToNameMap.clear$();
for (var i=0; i < paths.length; i++) {
if (paths[i] == null  || names[i] == null  ) continue;
library.pathList.add$O(paths[i]);
library.pathToNameMap.put$O$O(paths[i], names[i]);
library.allPathsToNameMap.put$O$O(paths[i], names[i]);
}
}paths=control.getObject$S("sublibrary_paths");
if (paths != null ) {
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
library.addSubLibrary$S(path);
}
}paths=control.getObject$S("imported_library_paths");
if (paths != null ) {
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
library.importLibrary$S(path);
}
}paths=control.getObject$S("recently_opened");
var names=control.getObject$S("recently_opened_names");
if (paths != null ) {
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
library.addRecent$S$Z(path, true);
}
if (names != null ) {
for (var i=0; i < names.length; i++) {
library.getNameMap$().put$O$O(paths[i], names[i]);
}
}}paths=control.getObject$S("no_search_paths");
if (paths != null ) {
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
library.noSearchSet.add$O(path);
}
}library.openTabPaths=control.getObject$S("open_tabs");
library.chooserDir=control.getString$S("chooser_directory");
if ($I$(2).getOSPCache$() == null ) {
$I$(2,"setOSPCache$S",[control.getString$S("cache")]);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
