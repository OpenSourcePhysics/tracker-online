(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.OSPRuntime','java.io.File','java.nio.charset.Charset','java.util.ArrayList','java.util.Hashtable','java.util.TreeMap','java.util.TreeSet','Thread','java.util.HashMap','org.opensourcephysics.tools.Resource','StringBuffer','org.opensourcephysics.controls.OSPLog','javax.swing.ImageIcon','org.opensourcephysics.display.ResizableIcon','java.awt.Toolkit','javax.swing.JFileChooser','org.opensourcephysics.tools.ToolsRes','javax.swing.filechooser.FileFilter','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.controls.XML',['org.opensourcephysics.tools.LibraryBrowser','.XMLFilter'],'java.net.URL','javax.swing.JOptionPane','java.io.FileWriter','java.util.zip.ZipEntry','java.io.ByteArrayInputStream','java.util.LinkedHashMap','java.util.zip.ZipInputStream','java.util.HashSet','java.io.FileOutputStream','java.nio.file.Files','java.nio.file.CopyOption','java.nio.file.StandardCopyOption','java.net.URLClassLoader','java.io.FileInputStream','java.io.BufferedInputStream','java.util.Locale','javajs.async.Assets','java.util.Properties',['org.opensourcephysics.tools.ResourceLoader','.Bundle'],'java.util.ResourceBundle',['java.util.ResourceBundle','.Control'],'javax.swing.JDialog',['org.opensourcephysics.tools.ResourceLoader','.OverwriteValue'],'java.awt.event.MouseAdapter','javax.swing.JButton','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel','org.opensourcephysics.display.DisplayRes','javax.swing.border.EmptyBorder','java.awt.BorderLayout','java.awt.event.WindowAdapter','java.util.Arrays','java.nio.file.attribute.FileAttribute','java.nio.file.OpenOption','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResourceLoader", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Bundle',9],['OverwriteValue',10],['RemoteFile',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['cacheEnabled','canceled','warningShown','webConnected','ignoreMissingWebConnection'],'I',['maxPaths'],'S',['downloadURL','localeChars'],'O',['tempDirFile','java.io.File','defaultCharset','java.nio.charset.Charset','searchPaths','java.util.ArrayList','+appletSearchPaths','resources','java.util.Hashtable','zipLoaders','java.util.Map','xsetZipLoader','java.net.URLClassLoader','extractExtensions','java.util.Set','pathsNotFound','java.util.ArrayList','ospCache','java.io.File','OSP_CACHE_FILTER','java.io.FileFilter','webTestOK','Boolean','defaultOSPCache','java.io.File','htZipContents','java.util.Map','openPDFs','java.util.List','bundleCache','java.util.Map','+langMap','myLocale','java.util.Locale']]]

Clazz.newMeth(C$, 'clearWebTest$',  function () {
C$.webTestOK=null;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getResource$S',  function (name) {
return C$.getResource$S$Z$Z(name, true, false);
}, 1);

Clazz.newMeth(C$, 'getResourceZipURLsOK$S',  function (name) {
return C$.getResource$S$Z$Z(name, true, true);
}, 1);

Clazz.newMeth(C$, 'getResource$S$Class',  function (name, type) {
return C$.findResource$S$Class$Z$Z(name, type, false, false);
}, 1);

Clazz.newMeth(C$, 'getTextURL$S$Class',  function (name, type) {
var res=C$.getResource$S$Class$Z$Z(name, type, true, false);
return (res == null  ? null : res.getURL$());
}, 1);

Clazz.newMeth(C$, 'getResource$S$Z$Z',  function (name, searchFiles, zipURLsOK) {
return C$.getResource$S$Class$Z$Z(name, Clazz.getClass($I$(11)), searchFiles, zipURLsOK);
}, 1);

Clazz.newMeth(C$, 'getResource$S$Class$Z$Z',  function (name, type, searchFiles, zipURLsOK) {
if ((name == null ) || name.equals$O("") ) {
return null;
}C$.pathsNotFound.clear$();
if (name.startsWith$S("\"")) {
name=name.substring$I(1);
}if (name.endsWith$S("\"")) {
name=name.substring$I$I(0, name.length$() - 1);
}while (name.startsWith$S("./")){
name=name.substring$I(2);
}
var res=C$.findResource$S$Class$Z$Z(name, type, searchFiles, zipURLsOK);
if (res != null ) {
return res;
}C$.pathsNotFound.add$O(name);
var err=Clazz.new_($I$(12,1).c$$S,["Not found: " + name]);
err.append$S(" [searched " + name);
for (var next, $next = C$.searchPaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var path=C$.getPath$S$S(next, name);
if (C$.pathsNotFound.contains$O(path)) continue;
res=C$.findResource$S$Class$Z$Z(path, type, searchFiles, zipURLsOK);
if (res != null ) {
return res;
}C$.pathsNotFound.add$O(path);
err.append$S(";" + path);
}
err.append$S("]");
$I$(13,"fine$S",[err.toString()]);
return null;
}, 1);

Clazz.newMeth(C$, 'getText$S$S$Class$Z',  function (basePath, name, type, searchFiles) {
if (name.startsWith$S("./")) {
name=name.substring$I(2);
}C$.pathsNotFound.clear$();
var path=C$.getPath$S$S(basePath, name);
var res=C$.findResource$S$Class$Z$Z(path, type, searchFiles, false);
if (res != null ) {
return res.toString();
}if (basePath.startsWith$S("/") || (basePath.indexOf$S(":/") > -1) ) {
return null;
}C$.pathsNotFound.add$O(path);
var err=Clazz.new_($I$(12,1).c$$S,["Not found: " + path]);
err.append$S(" [searched " + path);
for (var it=C$.searchPaths.iterator$(); it.hasNext$(); ) {
path=C$.getPath$S$S(C$.getPath$S$S(it.next$(), basePath), name);
if (C$.pathsNotFound.contains$O(path)) continue;
res=C$.findResource$S$Class$Z$Z(path, type, searchFiles, false);
if (res != null ) {
return res.toString();
}C$.pathsNotFound.add$O(path);
err.append$S(";" + path);
}
err.append$S("]");
$I$(13,"fine$S",[err.toString()]);
return null;
}, 1);

Clazz.newMeth(C$, 'addSearchPath$S',  function (base) {
if ((base == null ) || base.equals$O("") || (C$.maxPaths < 1)  ) {
return;
}{
if (C$.searchPaths.contains$O(base)) {
C$.searchPaths.remove$O(base);
} else {
$I$(13).fine$S("Added path: " + base);
}C$.searchPaths.add$I$O(0, base);
while (C$.searchPaths.size$() > Math.max(C$.maxPaths, 0)){
base=C$.searchPaths.get$I(C$.searchPaths.size$() - 1);
$I$(13).fine$S("Removed path: " + base);
C$.searchPaths.remove$O(base);
}
}}, 1);

Clazz.newMeth(C$, 'removeSearchPath$S',  function (base) {
if ((base == null ) || base.equals$O("") ) {
return;
}{
if (C$.searchPaths.contains$O(base)) {
$I$(13).fine$S("Removed path: " + base);
C$.searchPaths.remove$O(base);
}}}, 1);

Clazz.newMeth(C$, 'addAppletSearchPath$S',  function (base) {
if ((base == null ) || (C$.maxPaths < 1) ) {
return;
}base=base.trim$();
if (!base.endsWith$S("/")) base=base + "/";
{
if (C$.appletSearchPaths.contains$O(base)) {
C$.appletSearchPaths.remove$O(base);
} else {
$I$(13).fine$S("Applet search path added: " + base);
}C$.appletSearchPaths.add$I$O(0, base);
while (C$.appletSearchPaths.size$() > Math.max(C$.maxPaths, 0)){
base=C$.appletSearchPaths.get$I(C$.appletSearchPaths.size$() - 1);
$I$(13).fine$S("Removed path: " + base);
C$.appletSearchPaths.remove$O(base);
}
}}, 1);

Clazz.newMeth(C$, 'removeAppletSearchPath$S',  function (base) {
if ((base == null ) || base.equals$O("") ) {
return;
}{
if (C$.appletSearchPaths.contains$O(base)) {
$I$(13).fine$S("Applet search path removed: " + base);
C$.appletSearchPaths.remove$O(base);
}}}, 1);

Clazz.newMeth(C$, 'setCacheEnabled$Z',  function (enabled) {
C$.cacheEnabled=enabled;
}, 1);

Clazz.newMeth(C$, 'isCacheEnabled$',  function () {
return C$.cacheEnabled;
}, 1);

Clazz.newMeth(C$, 'addExtractExtension$S',  function (extension) {
if ((extension == null ) || extension.equals$O("") ) {
return;
}if (!extension.startsWith$S(".")) {
extension="." + extension;
}{
C$.extractExtensions.add$O(extension);
}}, 1);

Clazz.newMeth(C$, 'setCanceled$Z',  function (cancel) {
C$.canceled=cancel;
}, 1);

Clazz.newMeth(C$, 'isCanceled$',  function () {
return C$.canceled;
}, 1);

Clazz.newMeth(C$, 'openInputStream$S',  function (path) {
var res=C$.getResource$S(path);
return (res == null ) ? null : res.openInputStream$();
}, 1);

Clazz.newMeth(C$, 'openReader$S',  function (path) {
var res=C$.getResource$S(path);
return (res == null ) ? null : res.openReader$();
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (path) {
var res=C$.getResource$S(path);
return (res == null ) ? null : res.getString$();
}, 1);

Clazz.newMeth(C$, 'getIcon$S',  function (path) {
return C$.getImageIcon$S(path);
}, 1);

Clazz.newMeth(C$, 'getImageIcon$S',  function (path) {
var icon=null;
var url=C$.getAssetURL$S(path);
try {
icon=(url == null  ? Clazz.new_($I$(14,1).c$$S,[path]) : Clazz.new_($I$(14,1).c$$java_net_URL,[url]));
return icon.getIconWidth$() > 0 ? icon : null;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(13).warning$S("ResourceLoader could not find " + url + "\nEclipse not pointing to correct project?" );
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getResizableIcon$S',  function (path) {
var icon=C$.getImageIcon$S(path);
return icon == null  ? null : Clazz.new_($I$(15,1).c$$javax_swing_Icon,[icon]);
}, 1);

Clazz.newMeth(C$, 'getBufferedImage$S',  function (path) {
var res=C$.getResource$S(path);
return (res == null ) ? null : res.getBufferedImage$();
}, 1);

Clazz.newMeth(C$, 'getBufferedImage$S$I',  function (path, bufferedImageType) {
var res=C$.getResource$S(path);
return (res == null ) ? null : res.getBufferedImage$I(bufferedImageType);
}, 1);

Clazz.newMeth(C$, 'getAudioClip$S',  function (path) {
var res=C$.getResource$S(path);
return (res == null ) ? null : res.getAudioClip$();
}, 1);

Clazz.newMeth(C$, 'setOSPCache$S',  function (cachePath) {
C$.setOSPCache$java_io_File(cachePath == null  || cachePath.trim$().equals$O("")  ? C$.getDefaultOSPCache$() : Clazz.new_($I$(3,1).c$$S,[cachePath]));
}, 1);

Clazz.newMeth(C$, 'setOSPCache$java_io_File',  function (newCache) {
if (newCache != null  && !newCache.equals$O(C$.ospCache) ) {
if (C$.ospCache != null  && newCache.getAbsolutePath$().contains$CharSequence(C$.ospCache.getAbsolutePath$()) ) {
$I$(16).getDefaultToolkit$().beep$();
$I$(13,"finer$S",["cache cannot be a subfolder of " + C$.ospCache.getAbsolutePath$()]);
return;
}if (!newCache.exists$() || !newCache.isDirectory$() ) {
if (!newCache.mkdirs$()) {
$I$(16).getDefaultToolkit$().beep$();
$I$(13).finer$S("unable to create cache at " + newCache);
return;
}}if (!newCache.canWrite$()) {
$I$(16).getDefaultToolkit$().beep$();
$I$(13).finer$S("unable to write to cache at " + newCache);
return;
}if (C$.ospCache != null ) {
var hostDirectories=C$.ospCache.listFiles$java_io_FileFilter(C$.OSP_CACHE_FILTER);
for (var host, $host = 0, $$host = hostDirectories; $host<$$host.length&&((host=($$host[$host])),1);$host++) {
var hostname=host.getName$();
var newHost=Clazz.new_($I$(3,1).c$$java_io_File$S,[newCache, hostname]);
C$.copyAllFiles$java_io_File$O(host, newHost);
}
var searchCache=Clazz.new_($I$(3,1).c$$java_io_File$S,[C$.ospCache, "Search"]);
var newSearchCache=Clazz.new_($I$(3,1).c$$java_io_File$S,[newCache, "Search"]);
C$.copyAllFiles$java_io_File$O(searchCache, newSearchCache);
C$.clearOSPCache$java_io_File$Z(C$.ospCache, true);
var files=C$.ospCache.listFiles$();
if (files != null  && files.length == 0 ) {
C$.ospCache.delete$();
}}C$.ospCache=newCache;
}}, 1);

Clazz.newMeth(C$, 'getOSPCache$',  function () {
return C$.ospCache;
}, 1);

Clazz.newMeth(C$, 'getDefaultOSPCache$',  function () {
if (C$.defaultOSPCache == null ) {
var cacheDir=null;
var userHome=($I$(2).isJS ? null : $I$(2).getUserHome$());
if (userHome != null ) {
userHome+="/";
if ($I$(2).isMac$()) {
cacheDir=userHome + "/Library/Caches/OSP";
} else if ($I$(2).isLinux$()) {
cacheDir=userHome + "/.config/OSP/Cache";
} else if ($I$(2).isWindows$()) {
var os=System.getProperty$S$S("os.name", "").toLowerCase$();
if (os.indexOf$S("xp") > -1) cacheDir=userHome + "/Local Settings/Application Data/OSP/Cache";
 else cacheDir=userHome + "/AppData/Local/OSP/Cache";
}}C$.defaultOSPCache=Clazz.new_([cacheDir == null  ? $I$(2).tempDir : cacheDir],$I$(3,1).c$$S);
}return C$.defaultOSPCache;
}, 1);

Clazz.newMeth(C$, 'chooseOSPCache$java_awt_Component',  function (parent) {
var chooser=Clazz.new_($I$(17,1).c$$java_io_File,[C$.ospCache]);
if ($I$(2).isMac$()) chooser.setFileSelectionMode$I(2);
 else chooser.setFileSelectionMode$I(1);
var folderFilter=((P$.ResourceLoader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResourceLoader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
return f.isDirectory$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(18).getString$S("LibraryTreePanel.FolderFileFilter.Description");
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.ResourceLoader$2));
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(folderFilter);
var text=$I$(18).getString$S("ResourceLoader.FileChooser.Cache");
chooser.setDialogTitle$S(text);
$I$(20,"setFonts$O$I",[chooser, $I$(20).getLevel$()]);
var result=chooser.showDialog$java_awt_Component$S(parent, text);
if (result == 0) {
return chooser.getSelectedFile$();
}return null;
}, 1);

Clazz.newMeth(C$, 'isOSPCachePath$S',  function (path) {
var dir=(C$.ospCache == null  ? C$.tempDirFile : C$.ospCache);
var cachePath=$I$(21,"forwardSlash$S",[dir.getAbsolutePath$()]) + "/osp-";
return ($I$(21).forwardSlash$S(path).contains$CharSequence(cachePath));
}, 1);

Clazz.newMeth(C$, 'getOSPCacheFile$S',  function (urlPath) {
return C$.getOSPCacheFile$S$S(urlPath, null);
}, 1);

Clazz.newMeth(C$, 'getOSPCacheFile$S$S',  function (urlPath, name) {
var cacheDir=C$.getOSPCache$();
return C$.getCacheFile$java_io_File$S$S(cacheDir == null  ? C$.tempDirFile : cacheDir, urlPath, name);
}, 1);

Clazz.newMeth(C$, 'isSearchPath$S',  function (path) {
var spath=C$.getSearchCache$();
return (spath != null  && $I$(21).forwardSlash$S(path).startsWith$S($I$(21,"forwardSlash$S",[spath.getPath$()])) );
}, 1);

Clazz.newMeth(C$, 'getSearchFileList$',  function () {
return C$.getFiles$java_io_File$java_io_FileFilter(C$.getSearchCache$(), Clazz.new_($I$(22,1)));
}, 1);

Clazz.newMeth(C$, 'getSearchCache$',  function () {
var ospCache=C$.getOSPCache$();
if (ospCache == null  && (ospCache=C$.getDefaultOSPCache$()) == null  ) return null;
var searchCache=Clazz.new_($I$(3,1).c$$java_io_File$S,[ospCache, "Search"]);
searchCache.mkdirs$();
return searchCache;
}, 1);

Clazz.newMeth(C$, 'getSearchCacheFile$S',  function (urlPath) {
var filename=$I$(21).getName$S(urlPath);
var basename=$I$(21).stripExtension$S(filename);
var ext=$I$(21).getExtension$S(filename);
if (ext != null ) basename+="_" + ext;
filename=C$.getNonURIPath$S(basename).replace$C$C("=", "_") + ".xml";
return C$.getCacheFile$java_io_File$S$S(C$.getSearchCache$(), urlPath, filename);
}, 1);

Clazz.newMeth(C$, 'getCacheFile$java_io_File$S$S',  function (cacheFile, urlPath, name) {
var cachePath=(cacheFile == null  ? "./" : $I$(21,"forwardSlash$S",[cacheFile.getAbsolutePath$()]));
urlPath=C$.getURIPath$S(urlPath);
var host="";
var path="";
var filename="";
try {
var url=Clazz.new_($I$(23,1).c$$S,[urlPath]);
host=url.getHost$().replace$C$C(".", "_");
path=C$.getNonURIPath$S(url.getPath$());
var n=path.indexOf$S(cachePath);
if (n >= 0) {
if ($I$(2).isJS && path.indexOf$S("!/") < 0 ) {
return Clazz.new_($I$(3,1).c$$S,[path]);
}path=path.substring$I(n + cachePath.length$());
}n=path.lastIndexOf$S(":");
if (n >= 0) {
path=path.substring$I(n + 1);
}while (path.startsWith$S("/")){
path=path.substring$I(1);
}
var pathname=$I$(21).getName$S(path);
if (!"".equals$O(pathname)) {
path=$I$(21).getDirectoryPath$S(path);
}path=path.replace$C$C(".", "_").replace$CharSequence$CharSequence("!", "");
filename=(name == null  ? pathname : name);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
if ("".equals$O(host)) host="local_machine";
if (!path.startsWith$S("osp-")) cacheFile=Clazz.new_($I$(3,1).c$$java_io_File$S,[cacheFile, "osp-" + host]);
if (!"".equals$O(path)) cacheFile=Clazz.new_($I$(3,1).c$$java_io_File$S,[cacheFile, path]);
if (!"".equals$O(filename)) cacheFile=Clazz.new_($I$(3,1).c$$java_io_File$S,[cacheFile, filename]);
return cacheFile;
}, 1);

Clazz.newMeth(C$, 'downloadToOSPCache$S$S$Z',  function (urlPath, fileName, alwaysOverwrite) {
if (fileName == null ) return null;
var target=C$.getOSPCacheFile$S$S(urlPath, fileName);
var file=C$.download$S$java_io_File$Z(urlPath, target, alwaysOverwrite);
if (file == null  && C$.webConnected ) {
C$.clearWebTest$();
C$.webConnected=C$.isWebConnected$();
if (!C$.webConnected) {
if (C$.showWebConnectionDialog$() == 1) {
return C$.downloadToOSPCache$S$S$Z(urlPath, fileName, alwaysOverwrite);
}} else if (!C$.warningShown) {
C$.warningShown=true;
var message=$I$(18).getString$S("ResourceLoader.Dialog.FailedToDownload.Message1") + "\n" + $I$(18).getString$S("ResourceLoader.Dialog.FailedToDownload.Message2") + "\n" + $I$(18).getString$S("ResourceLoader.Dialog.FailedToDownload.Message3") ;
message+="\n\n" + $I$(18).getString$S("LibraryResource.Description.Resource") + ": " + urlPath ;
$I$(24,"showMessageDialog$java_awt_Component$O$S$I",[null, message, $I$(18).getString$S("ResourceLoader.Dialog.FailedToDownload.Title"), 0]);
}}return file;
}, 1);

Clazz.newMeth(C$, 'getHTMLCode$S',  function (path) {
var res=C$.getResourceZipURLsOK$S(path);
if (res == null ) return null;
var html=res.getString$();
if (html != null  && html.trim$().startsWith$S("<!DOCTYPE html") ) return html;
return null;
}, 1);

Clazz.newMeth(C$, 'getHTMLCodeAsync$S$java_util_function_Function',  function (path, whenDone) {
C$.getResourceZipURLsOKAsync$S$java_util_function_Function(path, ((P$.ResourceLoader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResourceLoader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$org_opensourcephysics_tools_Resource','apply$O'],  function (res) {
if (res == null ) {
this.$finals$.whenDone.apply$O(null);
} else {
var html=res.getString$();
this.$finals$.whenDone.apply$O(html != null  && html.trim$().startsWith$S("<!DOCTYPE html")  ? html : null);
}return null;
});
})()
), Clazz.new_(P$.ResourceLoader$3.$init$,[this, {whenDone:whenDone}])));
}, 1);

Clazz.newMeth(C$, 'getResourceZipURLsOKAsync$S$java_util_function_Function',  function (path, whenDone) {
whenDone.apply$O(C$.getResourceZipURLsOK$S(path));
}, 1);

Clazz.newMeth(C$, 'getTitleFromHTMLCode$S',  function (code) {
if (code == null ) return null;
var parts=code.split$S("<title>");
if (parts.length > 1) {
parts=parts[1].split$S("</title>");
if (parts.length > 1) {
return parts[0].trim$();
}}return null;
}, 1);

Clazz.newMeth(C$, 'getStyleSheetFromHTMLCode$S',  function (code) {
if (code == null ) return null;
var parts=code.split$S("<head>");
if (parts.length > 1) {
parts=parts[1].split$S("</head>");
if (parts.length > 1) {
parts=parts[0].split$S("<link");
if (parts.length > 1) {
for (var i=1; i < parts.length; i++) {
if (parts[i].contains$CharSequence("\"stylesheet\"")) {
parts=parts[i].split$S("href");
if (parts.length > 1) {
parts=parts[1].split$S("\"");
if (parts.length > 1) return parts[1];
}}}
}}}return null;
}, 1);

Clazz.newMeth(C$, 'copyHTMLToOSPCache$S',  function (htmlPath) {
if (htmlPath == null ) return null;
var htmlCode=null;
var res=C$.getResourceZipURLsOK$S(htmlPath);
if (res != null ) {
if (res.getFile$() != null  && C$.isOSPCachePath$S(htmlPath) ) {
return res.getFile$();
}htmlCode=res.getString$();
}if (htmlCode != null ) {
var htmlBasePath=$I$(21).getDirectoryPath$S(htmlPath);
var htmlTarget=C$.getOSPCacheFile$S(htmlPath);
var targetDirectory=htmlTarget.getParentFile$();
targetDirectory.mkdirs$();
var imageDir=Clazz.new_($I$(3,1).c$$java_io_File$S,[targetDirectory, "images"]);
var img="<img ";
var pre="src=\"";
var post="\"";
var temp=htmlCode;
var j=temp.indexOf$S(img);
if (j > -1) imageDir.mkdirs$();
while (j > -1){
temp=temp.substring$I(j + img.length$());
j=temp.indexOf$S(pre);
temp=temp.substring$I(j + pre.length$());
j=temp.indexOf$S(post);
if (j > -1) {
var next=temp.substring$I$I(0, j);
var path=$I$(21).getResolvedPath$S$S(next, htmlBasePath);
res=C$.getResourceZipURLsOK$S(path);
if (res != null ) {
var filename=$I$(21).getName$S(next);
var imageTarget=C$.download$S$java_io_File$Z(path, Clazz.new_($I$(3,1).c$$java_io_File$S,[imageDir, filename]), false);
if (imageTarget != null ) {
path=$I$(21,"getPathRelativeTo$S$S",[imageTarget.getAbsolutePath$(), targetDirectory.getAbsolutePath$()]);
if (!next.equals$O(path)) {
htmlCode=htmlCode.replace$CharSequence$CharSequence(pre + next + post , pre + path + post );
}}}}j=temp.indexOf$S(img);
}
var css=C$.getStyleSheetFromHTMLCode$S(htmlCode);
if (css != null  && !C$.isHTTP$S(css) ) {
res=C$.getResourceZipURLsOK$S($I$(21).getResolvedPath$S$S(css, htmlBasePath));
if (res != null ) {
var cssName=$I$(21).getName$S(css);
var cssTarget=Clazz.new_($I$(3,1).c$$java_io_File$S,[targetDirectory, cssName]);
cssTarget=C$.download$S$java_io_File$Z(res.getAbsolutePath$(), cssTarget, false);
if (cssTarget != null  && !cssName.equals$O(css) ) {
htmlCode=htmlCode.replace$CharSequence$CharSequence(css, cssName);
}}}try {
var fout=Clazz.new_($I$(25,1).c$$java_io_File,[htmlTarget]);
fout.write$S(htmlCode);
fout.close$();
return htmlTarget;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'copyAllFiles$java_io_File$O',  function (inFile, fileOrZipStream) {
var zos=(Clazz.instanceOf(fileOrZipStream, "java.util.zip.ZipOutputStream") ? fileOrZipStream : null);
var outFile=(zos == null  ? fileOrZipStream : null);
if (inFile.isDirectory$()) {
if (outFile != null ) outFile.mkdir$();
var success=true;
for (var $in, $$in = 0, $$$in = inFile.listFiles$(); $$in<$$$in.length&&(($in=($$$in[$$in])),1);$$in++) {
success=C$.copyAllFiles$java_io_File$O($in, zos == null  ? Clazz.new_([outFile, $in.getName$()],$I$(3,1).c$$java_io_File$S) : zos);
if (!success) return false;
}
return success;
}var path=C$.toUnix$S(inFile.getPath$());
if (C$.isZipEntry$S$Z(path, false) >= 0) {
try {
if (zos != null ) {
var bytes=C$.getZipEntryBytes$S$java_io_File(path, null);
var e=Clazz.new_([inFile.getName$()],$I$(26,1).c$$S);
zos.putNextEntry$java_util_zip_ZipEntry(e);
zos.write$BA(bytes);
zos.closeEntry$();
zos.close$();
} else if (outFile != null ) {
if ($I$(2).isJS) {
C$.copyURLtoFile$S$S(path, outFile.getAbsolutePath$());
} else {
C$.getZipEntryBytes$S$java_io_File(path, outFile);
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
return true;
}if (zos != null ) {
try {
zos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}return C$.copyFile$java_io_File$java_io_File(inFile, outFile);
}, 1);

Clazz.newMeth(C$, 'toUnix$S',  function (path) {
return path.replace$C$C("\\", "/");
}, 1);

Clazz.newMeth(C$, 'clearOSPCache$java_io_File$Z',  function (cache, clearSearchCache) {
if (cache == null ) cache=C$.ospCache;
if (cache == null  || !cache.canWrite$() ) return false;
var success=true;
var files=cache.listFiles$java_io_FileFilter(C$.OSP_CACHE_FILTER);
if (files == null ) return true;
for (var next, $next = 0, $$next = files; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
success=success && C$.deleteFile$java_io_File(next) ;
}
if (clearSearchCache) {
success=success && C$.deleteFile$java_io_File(Clazz.new_($I$(3,1).c$$java_io_File$S,[cache, "Search"])) ;
}if (!success) {
$I$(24,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(18).getString$S("ResourceLoader.Dialog.UnableToClearCache.Message1") + "\n" + $I$(18).getString$S("ResourceLoader.Dialog.UnableToClearCache.Message2") , $I$(18).getString$S("ResourceLoader.Dialog.UnableToClearCache.Title"), 2]);
}return success;
}, 1);

Clazz.newMeth(C$, 'clearOSPCacheHost$java_io_File',  function (hostDir) {
if (hostDir == null  || !hostDir.canWrite$() ) return true;
if (!C$.OSP_CACHE_FILTER.accept$java_io_File(hostDir)) return false;
var success=C$.deleteFile$java_io_File(hostDir);
if (!success) {
$I$(24,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(18).getString$S("ResourceLoader.Dialog.UnableToClearCache.Message1") + "\n" + $I$(18).getString$S("ResourceLoader.Dialog.UnableToClearCache.Message2") , $I$(18).getString$S("ResourceLoader.Dialog.UnableToClearCache.Title"), 2]);
}return success;
}, 1);

Clazz.newMeth(C$, 'deleteFile$java_io_File',  function (file) {
if (file.isDirectory$()) {
var files=file.listFiles$();
for (var next, $next = 0, $$next = files; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
C$.deleteFile$java_io_File(next);
}
}return file.delete$();
}, 1);

Clazz.newMeth(C$, 'getFiles$java_io_File$java_io_FileFilter',  function (directory, filter) {
var results=Clazz.new_($I$(5,1));
if (directory == null ) return results;
if (directory.isFile$()) {
results.add$O(directory);
return results;
}var contents=directory.listFiles$java_io_FileFilter(filter);
for (var file, $file = 0, $$file = contents; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
if (file.isDirectory$()) {
var deeperList=C$.getFiles$java_io_File$java_io_FileFilter(file, filter);
results.addAll$java_util_Collection(deeperList);
} else {
results.add$O(file);
}}
return results;
}, 1);

Clazz.newMeth(C$, 'clearZipCache$',  function () {
C$.htZipContents.clear$();
}, 1);

Clazz.newMeth(C$, 'removeFromZipCache$S',  function (zipPath) {
var url=C$.getURLWithCachedBytes$S(zipPath);
C$.htZipContents.remove$O(url.toString());
}, 1);

Clazz.newMeth(C$, 'checkExists$S',  function (path) {
var parts=C$.getJarURLParts$S(path);
if (parts != null ) {
var map=C$.getZipContents$S$Z(parts[0], true);
return (map != null  && map.containsKey$O(parts[1]) );
}return C$.getResource$S(path) != null ;
}, 1);

Clazz.newMeth(C$, 'findZipEntry$S$S$Z',  function (zipFile, fileName, isContains) {
var contents=C$.getZipContents$S$Z(zipFile, true);
if (contents == null ) return null;
if (!isContains) {
if (fileName.indexOf$S("!/") >= 0) fileName=C$.getJarURLParts$S(fileName)[1];
return contents.get$O(fileName);
}var isLCExt=fileName.startsWith$S(".");
for (var entry, $entry = contents.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
if ((isLCExt ? key.toLowerCase$() : key).indexOf$S(fileName) >= 0) return entry.getValue$();
}
return null;
}, 1);

Clazz.newMeth(C$, 'findZipEntryAsync$S$S$Z$java_util_function_Function',  function (zipFile, fileName, isContains, whenDone) {
C$.getZipContentsAsync$S$java_util_function_Function(zipFile, ((P$.ResourceLoader$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResourceLoader$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_util_Map','apply$O'],  function (map) {
if (!this.$finals$.isContains) {
this.$finals$.whenDone.apply$O(map.get$O(this.$finals$.fileName));
} else {
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getKey$().indexOf$S(this.$finals$.fileName) >= 0) {
this.$finals$.whenDone.apply$O(entry.getValue$());
return null;
}}
this.$finals$.whenDone.apply$O(null);
}return null;
});
})()
), Clazz.new_(P$.ResourceLoader$4.$init$,[this, {isContains:isContains,fileName:fileName,whenDone:whenDone}])));
}, 1);

Clazz.newMeth(C$, 'getZipContentsAsync$S$java_util_function_Function',  function (zipPath, whenDone) {
var url=C$.getURLWithCachedBytes$S(zipPath);
var fnames=C$.htZipContents.get$O(url.toString());
if (fnames != null ) {
whenDone.apply$O(fnames);
return;
}C$.getURLContentsAsync$java_net_URL$java_util_function_Function(url, ((P$.ResourceLoader$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ResourceLoader$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (bytes) /*block*/{
var contents=null;
try {
contents=$I$(1,"readZipContents$java_io_InputStream$java_net_URL",[Clazz.new_($I$(27,1).c$$BA,[bytes]), this.$finals$.url]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.$finals$.whenDone.apply$O(contents);
return null;
});
})()
), Clazz.new_(P$.ResourceLoader$lambda2.$init$,[this, {url:url,whenDone:whenDone}])));
}, 1);

Clazz.newMeth(C$, 'getZipContents$S$Z',  function (zipPath, useCached) {
var url=C$.getURLWithCachedBytes$S(zipPath);
if (useCached) {
var fileNames=C$.htZipContents.get$O(url.toString());
if (fileNames != null ) return fileNames;
}try {
var cacheConnection=C$.isHTTP$S(url.getPath$());
return C$.readZipContents$java_io_InputStream$java_net_URL(C$.openInputStreamAndCache$java_net_URL$Z(url, cacheConnection), url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'openInputStreamAndCache$java_net_URL$Z',  function (url, cacheConnection) {
var c=url.openConnection$();
c.setUseCaches$Z(cacheConnection);
return c.getInputStream$();
}, 1);

Clazz.newMeth(C$, 'readZipContents$java_io_InputStream$java_net_URL',  function (is, url) {
var fileNames=Clazz.new_($I$(28,1));
if ($I$(2).doCacheZipContents) C$.htZipContents.put$O$O(url.toString(), fileNames);
var input=Clazz.new_($I$(29,1).c$$java_io_InputStream,[is]);
var zipEntry=null;
var n=0;
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$() || Long.$eq(zipEntry.getSize$(),0 ) ) continue;
++n;
var fileName=zipEntry.getName$();
fileNames.put$O$O(fileName, zipEntry);
}
input.close$();
$I$(13).finest$S("ResourceLoader: " + n + " zip entries found in " + url );
return fileNames;
}, 1);

Clazz.newMeth(C$, 'getURLWithCachedBytes$S',  function (path) {
var url=null;
try {
url=Clazz.new_([C$.getURIPath$S(path)],$I$(23,1).c$$S);
$I$(2).addJSCachedBytes$O(url);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
e.printStackTrace$();
} else {
throw e;
}
}
return url;
}, 1);

Clazz.newMeth(C$, 'unzip$S',  function (zipPath) {
var targetDir=C$.tempDirFile;
var alwaysOverwrite=true;
if (targetDir == null ) targetDir=C$.tempDirFile;
$I$(13).finer$S("unzipping " + zipPath + " to " + targetDir );
try {
var url=C$.getURLWithCachedBytes$S(zipPath);
var input=Clazz.new_([C$.openStream$java_net_URL(url)],$I$(29,1).c$$java_io_InputStream);
var zipEntry=null;
var fileSet=Clazz.new_($I$(30,1));
var buffer=Clazz.array(Byte.TYPE, [1024]);
C$.setCanceled$Z(false);
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$()) continue;
if (C$.isCanceled$()) {
input.close$();
return null;
}var filename=zipEntry.getName$();
var file=Clazz.new_($I$(3,1).c$$java_io_File$S,[targetDir, filename]);
var fullName=null;
if (!alwaysOverwrite && file.exists$() ) {
fileSet.add$O(file);
continue;
}file.getParentFile$().mkdirs$();
var isPDF=(filename.endsWith$S(".pdf"));
if (isPDF) {
fullName=file.toURL$().toString();
C$.openPDFs.remove$O(fullName);
}try {
if ($I$(2).isJS) {
$I$(2).jsutil.streamToFile$java_io_InputStream$java_io_File(input, file);
} else {
var output=Clazz.new_($I$(31,1).c$$java_io_File,[file]);
var bytesRead;
while ((bytesRead=input.read$BA(buffer)) != -1)output.write$BA$I$I(buffer, 0, bytesRead);

output.close$();
}} catch (e) {
if (isPDF) {
if (C$.openPDFs.indexOf$O(fullName) < 0) C$.openPDFs.add$O(fullName);
} else {
$I$(13).debug$S("ResourceLoader.unzip could not open for write " + filename);
file=null;
}} finally {
if (file != null ) fileSet.add$O(file);
input.closeEntry$();
}
}
input.close$();
return fileSet;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'wasPDFOpen$S',  function (filename) {
return (C$.openPDFs.contains$O(filename));
}, 1);

Clazz.newMeth(C$, 'downloadResourceFromDialog$S$java_io_File',  function (urlPath, file) {
var filePath=file.getAbsolutePath$();
try {
file=C$.copyURLtoFile$S$S(urlPath, filePath);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
urlPath+=" " + e1.getMessage$();
} else {
throw e1;
}
}
if (file == null ) $I$(13).warning$S("Failed to download " + urlPath + " to " + filePath );
return file;
}, 1);

Clazz.newMeth(C$, 'download$S$java_io_File$Z',  function (urlPath, target, alwaysOverwrite) {
if (target == null ) target=C$.getOSPCacheFile$S(urlPath);
if (target.getParentFile$() == null ) return null;
if (target.exists$() && !alwaysOverwrite ) {
return target;
}if (!C$.webConnected || C$.downloadURL.equals$O(urlPath) ) {
if (C$.webConnected) return null;
C$.clearWebTest$();
C$.webConnected=C$.isWebConnected$();
}if (!C$.webConnected) {
if (C$.showWebConnectionDialog$() == 1) {
C$.clearWebTest$();
return C$.download$S$java_io_File$Z(urlPath, target, alwaysOverwrite);
}return null;
}urlPath=C$.getURIPath$S(urlPath);
target.getParentFile$().mkdirs$();
if (alwaysOverwrite || !target.exists$() ) {
$I$(13).finer$S("downloading " + urlPath + " to " + target );
C$.downloadURL=urlPath;
var is=null;
try {
var res=C$.getResourceZipURLsOK$S(urlPath);
is=(res == null  ? C$.openStream$java_net_URL(Clazz.new_($I$(23,1).c$$S,[urlPath])) : res.openInputStream$());
if ($I$(2).isJS) {
$I$(2).jsutil.streamToFile$java_io_InputStream$java_io_File(is, target);
if (res != null  && C$.cacheEnabled ) {
C$.resources.put$O$O(C$.getNonURIPath$S(target.toString()), res);
}} else {
$I$(32,"copy$java_io_InputStream$java_nio_file_Path$java_nio_file_CopyOptionA",[is, target.toPath$(), Clazz.array($I$(33), -1, [$I$(34).REPLACE_EXISTING])]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
target=null;
} else {
throw ex;
}
}
if (is != null ) try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
C$.downloadURL="";
}if (target != null  && target.exists$() ) {
return target;
}return null;
}, 1);

Clazz.newMeth(C$, 'extractFileFromZIP$S$java_io_File$Z',  function (source, target, alwaysOverwrite) {
return C$.extractFileFromZIP$S$java_io_File$Z$Z(source, target, alwaysOverwrite, true);
}, 1);

Clazz.newMeth(C$, 'extractFileFromZIP$S$java_io_File$Z$Z',  function (source, target, alwaysOverwrite, forceFileCreation) {
if (!alwaysOverwrite && target.exists$() ) return target;
try {
C$.getZipEntryBytes$S$java_io_File(source, target);
return target;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getZipEntryBytes$S$java_io_File',  function (jarSource, target) {
var parts=C$.getJarURLParts$S(jarSource);
return (parts == null  ? null : C$.getZipEntryBytes$S$S$java_io_File(parts[0], parts[1], target));
}, 1);

Clazz.newMeth(C$, 'getZipEntryBytesAsync$S$java_io_File$java_util_function_Function',  function (source, target, whenDone) {
var parts=C$.getJarURLParts$S(source);
if (parts == null ) whenDone.apply$O(null);
 else if ($I$(2).isJS) C$.getZipEntryBytesJSAsync$S$S$java_io_File$java_util_function_Function(parts[0], parts[1], target, whenDone);
 else {
try {
whenDone.apply$O(C$.getZipEntryBytes$S$S$java_io_File(parts[0], parts[1], target));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
whenDone.apply$O(null);
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'getZipEntryBytesJSAsync$S$S$java_io_File$java_util_function_Function',  function (zipFile, entryPath, target, whenDone) {
var isContains=entryPath.startsWith$S("*");
if (isContains) {
entryPath=entryPath.substring$I(1);
}C$.findZipEntryAsync$S$S$Z$java_util_function_Function(zipFile, entryPath, isContains, ((P$.ResourceLoader$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ResourceLoader$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_zip_ZipEntry','apply$O'],  function (ze) /*block*/{
if (ze == null ) {
this.$finals$.whenDone.apply$O(null);
} else {
var bytes=$I$(2).jsutil.getZipBytes$java_util_zip_ZipEntry.apply($I$(2).jsutil, [ze]);
if (bytes != null  && this.$finals$.target != null  ) {
$I$(2).jsutil.setFileBytes$java_io_File$O.apply($I$(2).jsutil, [this.$finals$.target, bytes]);
}this.$finals$.whenDone.apply$O(bytes);
}return null;
});
})()
), Clazz.new_(P$.ResourceLoader$lambda3.$init$,[this, {whenDone:whenDone,target:target}])));
}, 1);

Clazz.newMeth(C$, 'getZipEntryBytes$S$S$java_io_File',  function (zipFile, entryPath, target) {
var bytes=null;
var isContains=entryPath.startsWith$S("*");
if (isContains) {
entryPath=entryPath.substring$I(1);
}if ($I$(2).isJS) {
var ze=C$.findZipEntry$S$S$Z(zipFile, entryPath, isContains);
if (ze == null ) return null;
bytes=$I$(2).jsutil.getZipBytes$java_util_zip_ZipEntry(ze);
if (bytes != null  && target != null  ) {
$I$(2).jsutil.setFileBytes$java_io_File$O(target, bytes);
}} else 
{}
if (bytes == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No bytes were found for " + zipFile + "!/" + entryPath ]);
return bytes;
}, 1);

Clazz.newMeth(C$, 'getJarURLParts$S',  function (source) {
var n=source.indexOf$S("!/");
if (n < 0) return null;
var jarfile=source.substring$I$I(0, n).replace$CharSequence$CharSequence("jar:", "").replace$CharSequence$CharSequence("file:", "");
while (jarfile.startsWith$S("//"))jarfile=jarfile.substring$I(1);

return Clazz.array(String, -1, [jarfile, (n == source.length$() - 2 ? null : source.substring$I(n + 2))]);
}, 1);

Clazz.newMeth(C$, 'isWebConnected$',  function () {
if ($I$(2).isJS) {
var onlineStr="not set";

onlineStr=window.navigator.onLine;
;return onlineStr.toString().equalsIgnoreCase$S("true");
}return C$.isURLAvailable$S("https://opensourcephysics.github.io/tracker-website/css/library.css");
}, 1);

Clazz.newMeth(C$, 'isURLAvailable$S',  function (urlPath) {
var isWebTest=(urlPath == "https://opensourcephysics.github.io/tracker-website/css/library.css");
if (C$.webTestOK === Boolean.FALSE  || isWebTest && C$.webTestOK === Boolean.TRUE   ) {
return C$.webTestOK.booleanValue$();
}var url=null;
var urlConnect=null;
try {
url=Clazz.new_($I$(23,1).c$$S,[urlPath]);
urlConnect=url.openConnection$();
urlConnect.setConnectTimeout$I(1000);
urlConnect.getContent$();
if (isWebTest) C$.webTestOK=Boolean.TRUE;
urlConnect.disconnect$();
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(13).debug$S("ResourceLoader failed to read " + url + " " + ex );
if (isWebTest) C$.webTestOK=Boolean.FALSE;
if (urlConnect != null ) urlConnect.disconnect$();
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'showWebConnectionDialog$',  function () {
if (C$.ignoreMissingWebConnection) return 0;
var buttonTitles=Clazz.array(java.lang.Object, -1, [$I$(18).getString$S("Button.OK"), $I$(18).getString$S("LibraryBrowser.WebConnectionDialog.Button.Retry"), $I$(18).getString$S("LibraryBrowser.WebConnectionDialog.Button.Ignore")]);
var ret=$I$(24,"showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[null, $I$(18).getString$S("LibraryBrowser.Dialog.ServerUnavailable.Message"), $I$(18).getString$S("LibraryBrowser.Dialog.ServerUnavailable.Title"), 1, 2, null, buttonTitles, buttonTitles[0]]);
if (ret == 2) {
C$.ignoreMissingWebConnection=true;
}return ret;
}, 1);

Clazz.newMeth(C$, 'getNonURIPath$S',  function (uriPath) {
if (uriPath == null ) return null;
var path=uriPath;
if (path.startsWith$S("jar:")) {
path=path.substring$I(4);
}if (path.startsWith$S("file:")) {
path=path.substring$I(5);
}if (path.startsWith$S("/") && path.indexOf$S(":") > -1 ) {
path=path.substring$I(1);
}return path.replaceAll$S$S("%20", " ").replace$C$C("&", "_").replace$C$C("?", "_");
}, 1);

Clazz.newMeth(C$, 'getURIPath$S',  function (path) {
if (path == null ) return null;
path=$I$(21,"forwardSlash$S",[path.trim$()]);
if (!path.equals$O("") && $I$(21).getExtension$S(path) == null   && !path.endsWith$S("/") ) path+="/";
if (C$.isHTTP$S(path) && path.indexOf$S(" ") >= 0 ) path=path.replaceAll$S$S(" ", "%20");
if (path.startsWith$S("/")) return "file:" + path;
if (!path.equals$O("") && !C$.isHTTP$S(path) && !path.startsWith$S("jar:") && !path.startsWith$S("file:/")  ) {
var protocol=$I$(2).isWindows$() ? "file:/" : "file://";
path=protocol + path;
}return path;
}, 1);

Clazz.newMeth(C$, 'createFileResource$S',  function (path) {
return (C$.isHTTP$S(path) || C$.isJarZipTrz$S$Z(path, true)  ? null : C$.createFileResource$java_io_File(Clazz.new_($I$(3,1).c$$S,[path])));
}, 1);

Clazz.newMeth(C$, 'createFileResource$java_io_File',  function (file) {
try {
if (file.exists$() && file.canRead$() ) {
var res=Clazz.new_($I$(11,1).c$$java_io_File,[file]);
if (file.getName$().endsWith$S("xset")) {
C$.xsetZipLoader=null;
}return res;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'createURLResource$S$Z',  function (path, zipURLsOK) {
if (!zipURLsOK && C$.isJarZipTrz$S$Z(path, true) ) {
return null;
}var res=null;
if (path.indexOf$S(":/") > -1) {
try {
var url=C$.getURLWithCachedBytes$S(path);
res=C$.createResource$java_net_URL(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}if (res != null ) {
if (path.endsWith$S(".xset")) {
C$.xsetZipLoader=null;
}}return res;
}, 1);

Clazz.newMeth(C$, 'createZipResource$S',  function (path) {
path=C$.getNonURIPath$S(path);
var base=null;
var fileName=path;
var i=C$.isZipEntry$S$Z(path, true);
if (i >= 0) {
base=path.substring$I$I(0, i);
fileName=path.substring$I(i + 2);
}if (base == null ) {
if (C$.isZipEntry$S$Z(path + "!/", true) >= 0) {
base=path;
fileName=$I$(21,"stripExtension$S",[$I$(21).getName$S(path)]) + ".xset";
} else if (path.endsWith$S(".xset")) {
base=path.substring$I$I(0, path.length$() - 4) + "zip";
}}var isZip=(base != null  && C$.isJarZipTrz$S$Z(base, false) );
var deleteOnExit=C$.ospCache == null ;
if (isZip && C$.isHTTP$S(path) ) {
var zipFileName=$I$(21).getName$S(base);
var zipFile=C$.downloadToOSPCache$S$S$Z(base, zipFileName, false);
if (zipFile != null ) {
if (deleteOnExit) zipFile.deleteOnExit$();
base=zipFile.getAbsolutePath$();
path=base + "!/" + fileName ;
}}var url=null;
var ze=null;
if (base != null ) {
ze=C$.findZipEntry$S$S$Z(base, fileName, false);
if (ze != null ) {
url=C$.getJarURLForFile$S(path);
}if (url == null  && C$.zipLoaders != null  ) {
var zipLoader=C$.zipLoaders.get$O(base);
if (zipLoader != null ) {
url=zipLoader.findResource$S(fileName);
} else {
url=C$.findInJarPath$S$S(base, fileName);
}}}if ((url == null ) && C$.zipLoaders != null   && (C$.xsetZipLoader != null ) ) {
url=C$.xsetZipLoader.findResource$S(fileName);
if (url != null ) {
var it=C$.zipLoaders.keySet$().iterator$();
while (it.hasNext$()){
var key=it.next$();
if (C$.zipLoaders.get$O(key) === C$.xsetZipLoader ) {
base=key;
break;
}}
}}var launchJarPath;
if ((url == null ) && C$.zipLoaders != null   && ((launchJarPath=$I$(2).getLaunchJarPath$()) != null ) ) {
var zipLoader=C$.zipLoaders.get$O(launchJarPath);
if (zipLoader != null ) {
url=zipLoader.findResource$S(fileName);
} else {
url=C$.findInJarPath$S$S(launchJarPath, fileName);
}if (url != null ) {
base=launchJarPath;
}}if (url != null ) {
var ext="." + $I$(21,"getExtension$S",[url.toString()]);
if (C$.extractExtensions.contains$O(ext.toLowerCase$())) {
var targetPath=fileName;
var zip=Clazz.new_($I$(3,1).c$$S,[base]);
var parent=zip.getParent$();
if (parent != null  && !targetPath.startsWith$S("/")  && fileName.indexOf$S(":/") == -1 ) {
targetPath=$I$(21).getResolvedPath$S$S(fileName, parent);
}var target=Clazz.new_($I$(3,1).c$$S,[targetPath]);
if (!target.exists$()) {
if ($I$(2).isJS && ze != null  ) {
$I$(2).jsutil.setFileBytes$java_io_File$O(target, $I$(2).jsutil.getZipBytes$java_util_zip_ZipEntry(ze));
} else {
target=C$.extract2$java_io_File$S$java_io_File(zip, fileName, target);
if (deleteOnExit) target.deleteOnExit$();
}}return C$.createFileResource$java_io_File(target);
}try {
var res=C$.createResource$java_net_URL(url);
if ((res == null ) || (res.getAbsolutePath$().indexOf$S(path) == -1) ) {
return null;
}return res;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'getJarURLForFile$S',  function (fileName) {
try {
return Clazz.new_(["jar", null, Clazz.new_($I$(23,1).c$$S$S$S,["file", null, fileName]).toString()],$I$(23,1).c$$S$S$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'findInJarPath$S$S',  function (launchJarPath, fileName) {
try {
var urls=Clazz.array($I$(23), -1, [Clazz.new_($I$(23,1).c$$S$S$S,["file", null, launchJarPath])]);
var zipLoader=Clazz.new_($I$(35,1).c$$java_net_URLA,[urls]);
var url=zipLoader.findResource$S(fileName);
if (url == null ) {
var classURL=Clazz.getClass($I$(11)).getResource$S("/" + launchJarPath);
if (classURL != null ) {
urls=Clazz.array($I$(23), -1, [classURL]);
zipLoader=Clazz.new_($I$(35,1).c$$java_net_URLA,[urls]);
url=zipLoader.findResource$S(fileName);
}}if (url != null ) {
C$.zipLoaders.put$O$O(launchJarPath, zipLoader);
if (fileName.endsWith$S("xset")) {
C$.xsetZipLoader=zipLoader;
}}return url;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'createClassResource$S$Class',  function (name, type) {
if (name.indexOf$S(":/") != -1) {
return null;
}var originalName=name;
var i=name.indexOf$S("jar!/");
if (i == -1) {
i=name.indexOf$S("exe!/");
}if (i != -1) {
name=name.substring$I(i + 5);
}var res=null;
if (!name.startsWith$S("/")) {
try {
var url=C$.getTypeResource$Class$S(type, "/" + name);
res=C$.createResource$java_net_URL(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}if (res == null ) {
try {
var url=C$.getTypeResource$Class$S(type, name);
res=C$.createResource$java_net_URL(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}if (res != null ) {
var path=C$.getNonURIPath$S($I$(21,"forwardSlash$S",[res.getAbsolutePath$()]));
if ((path.indexOf$S("/jre") > -1) && (path.indexOf$S("/lib") > -1) ) {
return null;
}if (!path.contains$CharSequence(originalName)) {
return null;
}if (name.endsWith$S("xset")) {
C$.xsetZipLoader=null;
}$I$(2).setLaunchJarPath$S(path);
}return res;
}, 1);

Clazz.newMeth(C$, 'getTypeResource$Class$S',  function (type, path) {
var bytes=$I$(2).getCachedBytes$S(path);
if (bytes != null ) {
return C$.getURLWithCachedBytes$S(path);
}return type.getResource$S(path);
}, 1);

Clazz.newMeth(C$, 'createResource$java_net_URL',  function (url) {
if (url == null ) {
return null;
}var working=url;
var path=url.toExternalForm$();
var entryPath=null;
var n;
if (C$.isHTTP$S(path) && (n=C$.isZipEntry$S$Z(path, true)) >= 0 ) {
entryPath=path.substring$I(n + 2);
working=Clazz.new_([path.substring$I$I(0, n)],$I$(23,1).c$$S);
}return (C$.streamExists$java_net_URL(working) ? Clazz.new_($I$(11,1).c$$java_net_URL$S,[working, entryPath]) : null);
}, 1);

Clazz.newMeth(C$, 'streamExists$java_net_URL',  function (working) {
try {
var stream=C$.openStream$java_net_URL(working);
try {
return (stream.read$() > -1);

}finally{/*res*/stream&&stream.close$&&stream.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'findResource$S$Class$Z$Z',  function (path, type, searchFiles, zipURLsOK) {
var isHTTP=C$.isHTTP$S(path);
if (!isHTTP) {
path=path.replaceAll$S$S("/\\./", "/");
}if (type == null ) {
type=Clazz.getClass($I$(11));
}var res=null;
if (C$.cacheEnabled) {
res=C$.resources.get$O(path);
if (res == null  && !isHTTP ) res=C$.resources.get$O(C$.getNonURIPath$S(path));
if ((res != null ) && (searchFiles || (res.getFile$() == null ) ) ) {
$I$(13).finest$S("Found in cache: " + path);
return res;
}}if ((searchFiles && (res=C$.createFileResource$S(path)) != null  ) || (res=C$.createURLResource$S$Z(path, zipURLsOK)) != null   || (res=C$.createZipResource$S(path)) != null   || (res=C$.createClassResource$S$Class(path, type)) != null  ) {
}if (res != null  && C$.cacheEnabled ) {
C$.resources.put$O$O(path, res);
}return res;
}, 1);

Clazz.newMeth(C$, 'getPath$S$S',  function (base, name) {
if (base == null ) {
base="";
}if (C$.isJarZipTrz$S$Z(base, false)) {
base+="!";
}var path=$I$(21).getResolvedPath$S$S(name, base);
if ($I$(2).isMac$() && path.startsWith$S("file:/") && !path.startsWith$S("file:///")  ) {
path=path.substring$I(6);
while (path.startsWith$S("/")){
path=path.substring$I(1);
}
path="file:///" + path;
}return path;
}, 1);

Clazz.newMeth(C$, 'isJarZipTrz$S$Z',  function (path, asEntry) {
return (path == null  ? false : asEntry ? path.indexOf$S("!/") >= 0 : path.endsWith$S(".jar") || path.endsWith$S(".zip") || path.endsWith$S(".trz")  );
}, 1);

Clazz.newMeth(C$, 'fixHTTPS$S$java_net_URL',  function (htmlStr, url) {
if (url != null ) {
var dir=url.getPath$();
dir=dir.substring$I$I(0, dir.lastIndexOf$S("/") + 1);
var base="https://" + url.getHost$() + "/" + dir ;
htmlStr=htmlStr.replace$CharSequence$CharSequence("src=\"http", "#SH#");
htmlStr=htmlStr.replace$CharSequence$CharSequence("src=\"", "src=\"" + base);
htmlStr=htmlStr.replace$CharSequence$CharSequence("#SH#", "src=\"http");
}htmlStr=htmlStr.replace$CharSequence$CharSequence("http://physlets", "https://physlets");
return htmlStr;
}, 1);

Clazz.newMeth(C$, 'extractFiles$S$java_io_File$java_util_List$java_io_File',  function (modelPath, sourceDir, finalList, destinationDirectory) {
destinationDirectory.mkdirs$();
var policy=1;
for (var it=finalList.iterator$(); it.hasNext$(); ) {
var resource=it.next$();
var targetFile=resource.startsWith$S("./") ? Clazz.new_([destinationDirectory, resource.substring$I(2)],$I$(3,1).c$$java_io_File$S) : Clazz.new_($I$(3,1).c$$java_io_File$S,[sourceDir, resource]);
if (targetFile.exists$()) {
switch (policy) {
case 3:
continue;
case 2:
break;
default:
switch (policy=C$.confirmOverwrite$S(resource)) {
case 3:
case 1:
continue;
default:
}
}
}var originalName=resource.startsWith$S("./") ? modelPath + resource.substring$I(2) : resource;
var result=C$.extract$S$java_io_File(originalName, targetFile);
if (result == null ) return originalName;
}
return null;
}, 1);

Clazz.newMeth(C$, 'extract2$java_io_File$S$java_io_File',  function (source, fileName, target) {
var targetName=target.toString();
var flen=(fileName.endsWith$S("/") ? fileName.length$() : 0);
var fos=null;
try {
var fis=Clazz.new_($I$(36,1).c$$java_io_File,[source]);
var zis=Clazz.new_($I$(29,1).c$$java_io_InputStream,[fis]);
try {
var ze;
while ((ze=zis.getNextEntry$()) != null  && flen >= 0 ){
var name=ze.getName$();
if (flen == 0 && name.equals$O(fileName) ) {
flen=-1;
} else if (flen > 0 && name.startsWith$S(fileName) ) {
target=Clazz.new_([targetName + name.substring$I(flen)],$I$(3,1).c$$S);
} else {
continue;
}var parent=target.getParentFile$();
if (parent != null ) {
parent.mkdirs$();
}fos=Clazz.new_($I$(31,1).c$$java_io_File,[target]);
C$.getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z(zis, ze.getSize$(), fos, false);
fos.close$();
System.out.println$S("RL extracted " + targetName + " " + Long.$s(target.length$()) );
}

}finally{/*res*/zis&&zis.close$&&zis.close$();fis&&fis.close$&&fis.close$();}
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
return null;
} else {
throw e2;
}
}
return target;
}, 1);

Clazz.newMeth(C$, 'extract$S$java_io_File',  function (filename, target) {
if ((filename == null ) || (filename.trim$().length$() <= 0) || (target == null )  ) {
return null;
}try {
var inputStream=null;
var isZip=(C$.isZipEntry$S$Z(filename, true) >= 0);
if ($I$(2).isJS) {
if (isZip) {
return C$.extractFileFromZIP$S$java_io_File$Z$Z(filename, target, false, true);
}} else if (C$.isHTTP$S(filename)) {
return (isZip ? C$.extractFileFromZIP$S$java_io_File$Z$Z(filename, target, false, true) : null);
}var res=C$.getResource$S$Z$Z(filename, false, false);
inputStream=(res == null  ? null : res.openInputStream$());
if (inputStream == null ) {
return null;
}var input=Clazz.new_($I$(37,1).c$$java_io_InputStream,[inputStream]);
target.getParentFile$().mkdirs$();
var bytesRead;
var buffer=Clazz.array(Byte.TYPE, [1024]);
var output=Clazz.new_($I$(31,1).c$$java_io_File,[target]);
while ((bytesRead=input.read$BA(buffer)) != -1){
output.write$BA$I$I(buffer, 0, bytesRead);
}
output.close$();
input.close$();
return target;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
System.err.println$S("JarTool extract resource error.  Filename=" + filename);
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'isZipEntry$S$Z',  function (filename, checkExt) {
var n=filename.indexOf$S("!/");
return (n >= 4 && (!checkExt || filename.indexOf$S("_TrackerSet=") >= 0  || ".exe.zip.jar.trz".indexOf$S(filename.substring$I$I(n - 4, n)) >= 0 )  ? n : -1);
}, 1);

Clazz.newMeth(C$, 'confirmOverwrite$S',  function (filename) {
return C$.confirmOverwrite$S$Z(filename, false);
}, 1);

Clazz.newMeth(C$, 'getBundle$S$java_util_Locale',  function (bundleName, resourceLocale) {
if (bundleName == null ) bundleName="org.opensourcephysics.resources.tools.tools";
if (resourceLocale == null ) resourceLocale=$I$(38).getDefault$();
var name=bundleName.replaceAll$S$S("\\.", "/") + ".properties";
var key=name + "/" + resourceLocale ;
var b=C$.bundleCache.get$O(key);
if (b != null ) return b;
if (resourceLocale.getLanguage$() === "en"  && !$I$(39).notFound$S(name) ) {
var p=Clazz.new_($I$(40,1));
try {
p.load$java_io_InputStream(C$.getAssetStream$S(name));
$I$(13,"debug$S",["ResourceLoader found " + p.size$() + " properties in\n" + C$.getAssetURL$S(name).toString() ]);
b=Clazz.new_($I$(41,1).c$$java_util_Properties,[p]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(13).debug$S("Asset not found for resource " + name);
$I$(13).warning$S("Asset not found for resource " + name);
$I$(39).setNotFound$S(name);
} else {
throw e;
}
}
}if (b == null ) b=Clazz.new_([$I$(42,"getBundle$S$java_util_Locale$java_util_ResourceBundle_Control",[bundleName, resourceLocale, $I$(43,"getControl$java_util_List",[$I$(43).FORMAT_PROPERTIES])])],$I$(41,1).c$$java_util_ResourceBundle);
C$.bundleCache.put$O$O(key, b);
return b;
}, 1);

Clazz.newMeth(C$, 'getAssetStream$S',  function (name) {
return ($I$(2).useZipAssets ? $I$(39).getAssetStream$S(name) : C$.openStream$java_net_URL(C$.getAssetURL$S(name)));
}, 1);

Clazz.newMeth(C$, 'fixLang$S',  function (ret) {
if (ret != null  && C$.localeChars != null  ) {
if (C$.langMap == null ) C$.langMap=Clazz.new_($I$(10,1));
var s=C$.langMap.get$O(ret);
if (s != null ) return s;
s=ret;
for (var i=0, n=C$.localeChars.length$(); i < n; i++) {
ret=ret.replace$C$C(C$.localeChars.charAt$I(i), C$.localeChars.charAt$I(++i));
}
C$.langMap.put$O$O(s, ret);
}return ret;
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
if (locale.toString().indexOf$S("es") == 0) {
C$.localeChars="\u00e1\u00e1\u00c1\u00c1\u00e9\u00e9\u00c9\u00c9\u00ed\u00ed\u00cd\u00cd\u00f3\u00f3\u00d3\u00d3\u00fa\u00fa\u00da\u00da\u00f1\u00f1\u00d1\u00d1\u00fc\u00fc\u00dc\u00dc\u00a1\u00a1\u00bf\u00bf";
} else {
C$.localeChars=null;
}C$.myLocale=locale;
C$.langMap=null;
}, 1);

Clazz.newMeth(C$, 'confirmOverwrite$S$Z',  function (filename, canCancel) {
var dialog=Clazz.new_($I$(44,1));
var returnValue=Clazz.new_($I$(45,1).c$$I,[1]);
var mouseListener=((P$.ResourceLoader$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResourceLoader$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var button=(evt.getSource$());
var aCmd=button.getActionCommand$();
if (aCmd.equals$O("yes")) {
this.$finals$.returnValue.value=0;
} else if (aCmd.equals$O("no")) {
this.$finals$.returnValue.value=1;
} else if (aCmd.equals$O("yesToAll")) {
this.$finals$.returnValue.value=2;
} else if (aCmd.equals$O("noToAll")) {
this.$finals$.returnValue.value=3;
} else if (aCmd.equals$O("cancel")) {
this.$finals$.returnValue.value=4;
}this.$finals$.dialog.setVisible$Z(false);
});
})()
), Clazz.new_($I$(46,1),[this, {returnValue:returnValue,dialog:dialog}],P$.ResourceLoader$5));
var bundle=C$.getBundle$S$java_util_Locale(null, C$.myLocale);
var yesButton=Clazz.new_([bundle.getString$S("JarTool.Yes")],$I$(47,1).c$$S);
yesButton.setActionCommand$S("yes");
yesButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var noButton=Clazz.new_([bundle.getString$S("JarTool.No")],$I$(47,1).c$$S);
noButton.setActionCommand$S("no");
noButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var yesToAllButton=Clazz.new_([bundle.getString$S("JarTool.YesToAll")],$I$(47,1).c$$S);
yesToAllButton.setActionCommand$S("yesToAll");
yesToAllButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var noToAllButton=Clazz.new_([bundle.getString$S("JarTool.NoToAll")],$I$(47,1).c$$S);
noToAllButton.setActionCommand$S("noToAll");
noToAllButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var cancelButton=Clazz.new_([bundle.getString$S("JarTreeDialog.Button.Cancel")],$I$(47,1).c$$S);
cancelButton.setActionCommand$S("cancel");
cancelButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var buttonPanel=Clazz.new_([Clazz.new_($I$(49,1).c$$I,[1])],$I$(48,1).c$$java_awt_LayoutManager);
buttonPanel.add$java_awt_Component(yesButton);
buttonPanel.add$java_awt_Component(yesToAllButton);
buttonPanel.add$java_awt_Component(noButton);
buttonPanel.add$java_awt_Component(noToAllButton);
if (canCancel) buttonPanel.add$java_awt_Component(cancelButton);
var label=Clazz.new_([$I$(51).getString$S("DrawingFrame.ReplaceExisting_message") + " " + filename + $I$(51).getString$S("DrawingFrame.QuestionMark") ],$I$(50,1).c$$S);
label.setHorizontalAlignment$I(0);
label.setBorder$javax_swing_border_Border(Clazz.new_($I$(52,1).c$$I$I$I$I,[10, 10, 10, 10]));
dialog.setTitle$S($I$(51).getString$S("DrawingFrame.ReplaceFile_option_title"));
dialog.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(53,1).c$$I$I,[5, 0]));
dialog.getContentPane$().add$java_awt_Component$O(label, "Center");
dialog.getContentPane$().add$java_awt_Component$O(buttonPanel, "South");
dialog.addWindowListener$java_awt_event_WindowListener(((P$.ResourceLoader$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResourceLoader$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (event) {
this.$finals$.returnValue.value=1;
});
})()
), Clazz.new_($I$(54,1),[this, {returnValue:returnValue}],P$.ResourceLoader$6)));
dialog.validate$();
dialog.pack$();
dialog.setLocationRelativeTo$java_awt_Component(null);
dialog.setModal$Z(true);
dialog.setVisible$Z(true);
return returnValue.value;
}, 1);

Clazz.newMeth(C$, 'isHTTP$S',  function (path) {
var tf=path.startsWith$S("http:") || path.startsWith$S("https:") ;
return tf;
}, 1);

Clazz.newMeth(C$, 'openZipEntryStream$java_net_URL$java_net_URL',  function (url, zipURL) {
if ($I$(2).isJS) {
var bytes=$I$(2).jsutil.getURLBytes$java_net_URL(url);
if (bytes == null ) {
bytes=C$.getZipEntryBytes$S$java_io_File(url.toString(), null);
$I$(2).jsutil.setURLBytes$java_net_URL$O(url, bytes);
}return (bytes == null  ? null : Clazz.new_($I$(27,1).c$$BA,[bytes]));
}if (url.getProtocol$() !== "jar" ) url=Clazz.new_(["jar", null, url.toString()],$I$(23,1).c$$S$S$S);
var entryPath=url.toString();
var n=entryPath.indexOf$S("!/");
if (n > -1) {
var toOpen=(zipURL == null  ? Clazz.new_([entryPath.substring$I$I(4, n)],$I$(23,1).c$$S) : zipURL);
entryPath=entryPath.substring$I(n + 2);
var input=Clazz.new_([C$.openStream$java_net_URL(toOpen)],$I$(29,1).c$$java_io_InputStream);
var zipEntry=null;
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$()) continue;
var filename=zipEntry.getName$();
if (entryPath.contains$CharSequence(filename)) {
return input;
}}
}return null;
}, 1);

Clazz.newMeth(C$, 'openStream$java_net_URL',  function (url) {
var cacheConnection=C$.isHTTP$S(url.getPath$());
return C$.openInputStreamAndCache$java_net_URL$Z(url, cacheConnection);
}, 1);

Clazz.newMeth(C$, 'getImage$S',  function (path) {
var icon=C$.getImageIcon$S(path);
if (icon != null ) return icon.getImage$();
var res=C$.getResource$S(path);
return (res == null ) ? null : res.getImage$();
}, 1);

Clazz.newMeth(C$, 'getAssetURL$S',  function (path) {
if (path.indexOf$S("resources") == 0) {
path="org/opensourcephysics/" + path;
}if (path.startsWith$S("/org")) path=path.substring$I(1);
return ($I$(2).useZipAssets || path.indexOf$S("/resources/") < 0  ? $I$(39).getURLFromPath$S(path) : Clazz.getClass(C$).getClassLoader$().getResource$S(path));
}, 1);

Clazz.newMeth(C$, 'getURLContents$java_net_URL',  function (url) {
return C$.getURLContents$java_net_URL$Z(url, true);
}, 1);

Clazz.newMeth(C$, 'getURLContents$java_net_URL$Z',  function (url, showErr) {
try {
if ($I$(2).isJS) {
return $I$(2).jsutil.readAllBytes$java_io_InputStream(C$.openStream$java_net_URL(url));
}return C$.getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z(C$.openStream$java_net_URL(url), -1, null, true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (showErr) e.printStackTrace$();
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getURLBytes$S',  function (url) {
return (url.indexOf$S("!/") >= 0 ? C$.getZipEntryBytes$S$java_io_File(url, null) : $I$(2).getCachedBytes$S(url));
}, 1);

Clazz.newMeth(C$, 'getURLContentsAsync$java_net_URL$java_util_function_Function',  function (url, whenDone) {
try {
if ($I$(2).isJS) {
$I$(2).getURLBytesAsync$java_net_URL$java_util_function_Function(url, whenDone);
return;
}whenDone.apply$O(C$.getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z(C$.openStream$java_net_URL(url), -1, null, true));
return;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
whenDone.apply$O(null);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'readAllAsString$java_io_InputStream',  function (is) {
return  String.instantialize(C$.getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z(is, -1, null, true));
}, 1);

Clazz.newMeth(C$, 'getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z',  function (is, n, out, andCloseInput) {
var toOut=(out != null );
var buflen=(Long.$gt(n,0 ) && Long.$lt(n,1024 )  ? Long.$ival(n) : 1024);
var buf=Clazz.array(Byte.TYPE, [buflen]);
var bytes=(out == null  ? Clazz.array(Byte.TYPE, [Long.$lt(n,0 ) ? 4096 : Long.$ival(n)]) : null);
var len=0;
var totalLen=0;
if (Long.$lt(n,0 )) n=2147483647;
while (Long.$lt(totalLen,n ) && (len=is.read$BA$I$I(buf, 0, buflen)) > 0 ){
totalLen+=len;
if (toOut) {
out.write$BA$I$I(buf, 0, len);
} else {
if (bytes != null  && totalLen > bytes.length ) bytes=$I$(55).copyOf$BA$I(bytes, totalLen * 2);
System.arraycopy$O$I$O$I$I(buf, 0, bytes, totalLen - len, len);
if (bytes != null  && Long.$ne(n,2147483647 )  && totalLen + buflen > bytes.length ) buflen=bytes.length - totalLen;
}}
if (andCloseInput) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}if (toOut) return null;
if (bytes != null  && totalLen == bytes.length ) return bytes;
buf=Clazz.array(Byte.TYPE, [totalLen]);
System.arraycopy$O$I$O$I$I(bytes, 0, buf, 0, totalLen);
return buf;
}, 1);

Clazz.newMeth(C$, 'copyURLtoFile$S$S',  function (urlPath, filePath) {
var f=Clazz.new_($I$(3,1).c$$S,[filePath]);
var is=null;
if ($I$(2).isJS) {
var isjar=C$.isJarZipTrz$S$Z(urlPath, true);
var bytes=(isjar ? C$.getZipEntryBytes$S$java_io_File(urlPath, null) : null);
is=(isjar ? Clazz.new_($I$(27,1).c$$BA,[bytes]) : C$.isHTTP$S(urlPath) ? C$.openStream$java_net_URL(Clazz.new_($I$(23,1).c$$S,[urlPath])) : Clazz.new_($I$(36,1).c$$S,[urlPath]));
var fos=Clazz.new_($I$(31,1).c$$java_io_File,[f]);
$I$(2).jsutil.transferTo$java_io_InputStream$java_io_OutputStream(is, fos);
fos.close$();
} else {
try {
is=C$.openStream$java_net_URL(Clazz.new_($I$(23,1).c$$S,[urlPath]));
var path=f.toPath$();
$I$(32,"createDirectories$java_nio_file_Path$java_nio_file_attribute_FileAttributeA",[path.getParent$(), Clazz.array($I$(56), -1, [])]);
$I$(32,"copy$java_io_InputStream$java_nio_file_Path$java_nio_file_CopyOptionA",[is, Clazz.new_($I$(3,1).c$$S,[filePath]).toPath$(), Clazz.array($I$(33), -1, [$I$(34).REPLACE_EXISTING])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
f=null;
try {
if (is != null ) is.close$();
} catch (ee) {
if (Clazz.exceptionOf(ee,"java.io.IOException")){
} else {
throw ee;
}
}
} else {
throw e;
}
}
}return f;
}, 1);

Clazz.newMeth(C$, 'copyURLtoFileAsync$S$S$java_util_function_Function',  function (webPath, filePath, whenDone) {
var f=Clazz.new_($I$(3,1).c$$S,[filePath]);
try {
if ($I$(2).isJS) {
C$.getURLContentsAsync$java_net_URL$java_util_function_Function(Clazz.new_($I$(23,1).c$$S,[webPath]), ((P$.ResourceLoader$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ResourceLoader$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (bytes) /*block*/{
var fos;
try {
fos=Clazz.new_($I$(31,1).c$$java_io_File,[this.$finals$.f]);
$I$(2).jsutil.transferTo$java_io_InputStream$java_io_OutputStream.apply($I$(2).jsutil, [Clazz.new_($I$(27,1).c$$BA,[bytes]), fos]);
fos.close$.apply(fos, []);
this.$finals$.whenDone.apply$O(this.$finals$.f);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return null;
});
})()
), Clazz.new_(P$.ResourceLoader$lambda4.$init$,[this, {f:f,whenDone:whenDone}])));
return;
}var path=f.toPath$();
$I$(32,"createDirectories$java_nio_file_Path$java_nio_file_attribute_FileAttributeA",[path.getParent$(), Clazz.array($I$(56), -1, [])]);
var bytes=C$.getURLContents$java_net_URL$Z(Clazz.new_([C$.getURIPath$S(webPath)],$I$(23,1).c$$S), false);
if (bytes == null ) return;
$I$(32,"write$java_nio_file_Path$BA$java_nio_file_OpenOptionA",[path, bytes, Clazz.array($I$(57), -1, [])]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
whenDone.apply$O(f);
}, 1);

Clazz.newMeth(C$, 'readerForStream$java_io_InputStream$S',  function (stream, encoding) {
if (encoding == null ) encoding="UTF-8";
try {
return (stream == null  ? null : Clazz.new_([Clazz.new_($I$(59,1).c$$java_io_InputStream$S,[stream, encoding])],$I$(58,1).c$$java_io_Reader));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getVideoImage$S',  function (path) {
var res=null;
if ($I$(2).isJS && C$.isZipEntry$S$Z(path, false) >= 0 ) {
res=C$.resources.get$O(path);
if (res == null ) {
try {
var bytes=C$.getZipEntryBytes$S$java_io_File(path, null);
if (bytes != null ) res=$I$(11).newImageResource$BA(bytes);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (res != null ) {
C$.resources.put$O$O(path, res);
}}}return (res == null  ? C$.getImage$S(path) : res.getImage$());
}, 1);

Clazz.newMeth(C$, 'getClassResource$S$Class',  function (path, cl) {
var url=C$.getAssetURL$S(path);
return (url == null  ? cl.getClassLoader$().getResource$S(path) : url);
}, 1);

Clazz.newMeth(C$, 'copyFile$java_io_File$java_io_File',  function (inFile, outFile) {
return C$.copyFile$java_io_File$java_io_File$I(inFile, outFile, 16384);
}, 1);

Clazz.newMeth(C$, 'copyFile$java_io_File$java_io_File$I',  function (inFile, outFile, bufLen) {
try {
var buffer;
var out=Clazz.new_($I$(31,1).c$$java_io_File,[outFile]);
if ($I$(2).isJS) {
inFile.exists$();
buffer=$I$(2).jsutil.getBytes$java_io_File(inFile);
out.write$BA$I$I(buffer, 0, buffer.length);
} else {
buffer=Clazz.array(Byte.TYPE, [bufLen]);
var $in=Clazz.new_($I$(36,1).c$$java_io_File,[inFile]);
while (true){
{
var amountRead=$in.read$BA(buffer);
if (amountRead == -1) {
break;
}out.write$BA$I$I(buffer, 0, amountRead);
}}
$in.close$();
}out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
return false;
} else {
throw ex;
}
}
outFile.setLastModified$J(inFile.lastModified$());
return true;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
if ($I$(2).isJS) {
}};
C$.tempDirFile=Clazz.new_([$I$(2).tempDir],$I$(3,1).c$$S);
C$.defaultCharset=$I$(4).forName$S("UTF-8");
C$.searchPaths=Clazz.new_($I$(5,1));
C$.appletSearchPaths=Clazz.new_($I$(5,1));
C$.maxPaths=20;
C$.resources=Clazz.new_($I$(6,1));
C$.cacheEnabled=$I$(2).resCacheEnabled;
C$.canceled=false;
C$.zipLoaders=($I$(2).checkZipLoaders ? Clazz.new_($I$(7,1)) : null);
C$.extractExtensions=Clazz.new_($I$(8,1));
C$.pathsNotFound=Clazz.new_($I$(5,1));
C$.warningShown=false;
{
C$.OSP_CACHE_FILTER=((P$.ResourceLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResourceLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FileFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File',  function (file) {
return file.isDirectory$() && file.getName$().startsWith$S("osp-") ;
});
})()
), Clazz.new_(P$.ResourceLoader$1.$init$,[this, null]));
};
C$.ignoreMissingWebConnection=false;
C$.downloadURL="";
{
{
Clazz.new_([(P$.ResourceLoader$lambda1$||(P$.ResourceLoader$lambda1$=(((P$.ResourceLoader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ResourceLoader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(1).webConnected=$I$(2).isJS ? true : $I$(1).isWebConnected$();
});
})()
), Clazz.new_(P$.ResourceLoader$lambda1.$init$,[this, null]))))), "ResourceLoader.isWebConnected"],$I$(9,1).c$$Runnable$S).start$();
}};
C$.htZipContents=Clazz.new_($I$(10,1));
C$.openPDFs=Clazz.new_($I$(5,1));
C$.bundleCache=Clazz.new_($I$(6,1));
C$.myLocale=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ResourceLoader, "Bundle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['res','java.util.ResourceBundle','props','java.util.Properties']]]

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle',  function (res) {
;C$.$init$.apply(this);
this.res=res;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Properties',  function (props) {
;C$.$init$.apply(this);
this.props=props;
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (key) {
var ret=(this.props == null  ? this.res.getString$S(key) : this.props.getProperty$S(key));
if (ret == null ) {
var cname=(this.res == null  ? this.props : this.res).getClass$().getName$();
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Can't find resource for bundle " + cname + ", key " + key , cname, key]);
}return ret;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ResourceLoader, "OverwriteValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.value=1;
},1);

C$.$fields$=[['I',['value']]]

Clazz.newMeth(C$, 'c$$I',  function (val) {
;C$.$init$.apply(this);
this.value=val;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ResourceLoader, "RemoteFile", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.File');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['remotePath']]]

Clazz.newMeth(C$, 'c$$S',  function (path) {
;C$.superclazz.c$$S.apply(this,[path]);C$.$init$.apply(this);
this.remotePath=($I$(1).isHTTP$S(path) ? path : null);
}, 1);

Clazz.newMeth(C$, 'getAbsolutePath$',  function () {
return this.remotePath == null  ? C$.superclazz.prototype.getAbsolutePath$.apply(this, []) : this.remotePath;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
