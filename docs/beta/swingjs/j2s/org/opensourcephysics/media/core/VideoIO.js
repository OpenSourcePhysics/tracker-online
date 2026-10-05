(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.VideoIO',['org.opensourcephysics.media.core.VideoIO','.ZipImageVideoType'],'org.opensourcephysics.media.core.VideoFileFilter','org.opensourcephysics.media.core.MediaRes','java.io.File','org.opensourcephysics.controls.XML',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','javax.swing.JLabel','StringBuffer','java.util.TreeMap','java.util.ArrayList','java.util.TreeSet','org.opensourcephysics.media.mov.MovieFactory','org.opensourcephysics.media.gif.GifVideoType','org.opensourcephysics.media.core.ImageVideoType',['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter'],'java.util.HashSet','java.util.HashMap','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.OSPRuntime','javajs.async.AsyncFileChooser','org.opensourcephysics.tools.FontSizer','javajs.util.VideoReader','org.opensourcephysics.controls.OSPLog','javajs.async.AsyncDialog',['org.opensourcephysics.media.core.VideoIO','.EditorPaneMessage'],'org.opensourcephysics.media.core.ImageVideo','org.opensourcephysics.controls.XMLControlElement','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.media.core.VideoPanel','javax.imageio.ImageIO']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoIO", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FinalizableLoader',9],['SingleExtFileFilter',9],['ZipImageVideoType',9],['StreamPiper',9],['EditorPaneMessage',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['dataCopiedToClipboard','canceled','loadIncrementally'],'I',['incrementToLoad'],'S',['defaultDelimiter','delimiter','defaultXMLExt','preferredExportExtension'],'O',['KNOWN_VIDEO_EXTENSIONS','String[]','delimiters','java.util.Map','+customDelimiters','zipFileFilter','org.opensourcephysics.media.core.VideoIO.SingleExtFileFilter','+trkFileFilter','+trzFileFilter','+videoAndTrkFileFilter','+txtFileFilter','+jarFileFilter','+delimitedTextFileFilter','filenamesToReload','java.util.ArrayList','chooser','javajs.async.AsyncFileChooser','imageFileFilter','org.opensourcephysics.media.core.VideoIO.SingleExtFileFilter','+jpgFileFilter','videoTypes','java.util.ArrayList','videoFileFilter','org.opensourcephysics.media.core.VideoFileFilter','singleVideoTypeFilters','java.util.Collection','loader','javajs.async.AsyncSwingWorker','unsupportedPaths','java.util.HashSet','codecMap','java.util.Map']]]

Clazz.newMeth(C$, 'checkVideoFilter$org_opensourcephysics_media_core_VideoType$S',  function (mtype, extension) {
var filters=mtype.getFileFilters$();
for (var filter, $filter = 0, $$filter = filters; $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if (filter.extensions != null ) {
for (var s, $s = 0, $$s = filter.extensions; $s<$$s.length&&((s=($$s[$s])),1);$s++) if (s.indexOf$S(extension) > -1) return mtype;

}}
return null;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getExtension$java_io_File',  function (file) {
return $I$(6,"getExtension$S",[file.getName$()]);
}, 1);

Clazz.newMeth(C$, 'getZippedImagePaths$S',  function (zipPath) {
if (zipPath == null ) return null;
var n=zipPath.indexOf$S("!");
if (n > 0) {
zipPath=zipPath.substring$I$I(0, n);
if (zipPath.startsWith$S("jar:")) {
zipPath=zipPath.substring$I$I(4, zipPath.length$());
}}if (C$.zipFileFilter != null  && !C$.zipFileFilter.accept$java_io_File(Clazz.new_($I$(5,1).c$$S,[zipPath])) ) return null;
var name=$I$(6).getName$S(zipPath);
var useCache=!C$.filenamesToReload.remove$O(name);
var map=$I$(20).getZipContents$S$Z(zipPath, useCache);
if (map == null ) return null;
var imagePaths=null;
for (var next, $next = map.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.contains$CharSequence("/") || next.contains$CharSequence("\\") || !C$.imageFileFilter.accept$java_io_File(Clazz.new_($I$(5,1).c$$S,[next]))  ) continue;
var imagePath=zipPath + "!/" + next ;
imagePaths=C$.getImageSequencePaths$S$java_util_Set(imagePath, map.keySet$());
if (imagePaths != null  && imagePaths.length > 1 ) break;
}
var ret=imagePaths != null  && imagePaths.length > 1 ;
return ret ? imagePaths : null;
}, 1);

Clazz.newMeth(C$, 'getDelimiter$',  function () {
return C$.delimiter;
}, 1);

Clazz.newMeth(C$, 'setDelimiter$S',  function (d) {
if (d != null ) C$.delimiter=d;
}, 1);

Clazz.newMeth(C$, 'getDelimiters$',  function () {
if (C$.delimiters.isEmpty$()) {
C$.delimiters.put$O$O($I$(4).getString$S("VideoIO.Delimiter.Tab"), "\t");
C$.delimiters.put$O$O($I$(4).getString$S("VideoIO.Delimiter.Space"), " ");
C$.delimiters.put$O$O($I$(4).getString$S("VideoIO.Delimiter.Comma"), ",");
C$.delimiters.put$O$O($I$(4).getString$S("VideoIO.Delimiter.Semicolon"), ";");
}return C$.delimiters;
}, 1);

Clazz.newMeth(C$, 'getChooser$',  function () {
if (C$.chooser == null ) {
var dir=($I$(21).chooserDir == null ) ? Clazz.new_([$I$(21).getUserHome$()],$I$(5,1).c$$S) : Clazz.new_([$I$(21).chooserDir],$I$(5,1).c$$S);
C$.chooser=Clazz.new_($I$(22,1).c$$java_io_File,[dir]);
}$I$(23).setFonts$java_awt_Container(C$.chooser);
return C$.chooser;
}, 1);

Clazz.newMeth(C$, 'setDefaultXMLExtension$S',  function (ext) {
C$.defaultXMLExt=ext;
}, 1);

Clazz.newMeth(C$, 'getRelativePath$S',  function (absolutePath) {
if ((absolutePath.indexOf$S("/") == -1) && (absolutePath.indexOf$S("\\") == -1) ) {
return absolutePath;
}if ($I$(20).isHTTP$S(absolutePath)) {
return absolutePath;
}var path=absolutePath;
var relativePath="";
var validPath=false;
var base=System.getProperty$S("user.dir");
if (base == null ) {
return path;
}for (var j=0; j < 3; j++) {
if (j > 0) {
var k=base.lastIndexOf$S("\\");
if (k == -1) {
k=base.lastIndexOf$S("/");
}if (k != -1) {
base=base.substring$I$I(0, k);
relativePath+="../";
} else {
break;
}}if (path.startsWith$S(base)) {
path=path.substring$I(base.length$() + 1);
var i=path.indexOf$S("\\");
while (i != -1){
path=path.substring$I$I(0, i) + "/" + path.substring$I(i + 1) ;
i=path.indexOf$S("\\");
}
relativePath+=path;
validPath=true;
break;
}}
if (validPath) {
return relativePath;
}return path;
}, 1);

Clazz.newMeth(C$, 'testExec$',  function () {
}, 1);

Clazz.newMeth(C$, 'getVideoExtensions$',  function () {
return C$.videoFileFilter.getExtensions$();
}, 1);

Clazz.newMeth(C$, 'getPreferredExportExtension$',  function () {
return C$.preferredExportExtension;
}, 1);

Clazz.newMeth(C$, 'setPreferredExportExtension$S',  function (extension) {
if (extension != null  && extension.length$() > 1 ) C$.preferredExportExtension=extension;
}, 1);

Clazz.newMeth(C$, 'addVideoType$org_opensourcephysics_media_core_VideoType',  function (type) {
if (type == null ) return;
var hasType=false;
for (var next, $next = C$.videoTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getDescription$().equals$O(type.getDescription$()) && next.getClass$() === type.getClass$()  ) {
hasType=true;
}}
if (!hasType) {
C$.videoTypes.add$O(type);
var filter=type.getDefaultFileFilter$();
if (filter != null  && filter.extensions != null  ) {
C$.singleVideoTypeFilters.add$O(filter);
}}}, 1);

Clazz.newMeth(C$, 'getMovieType$S',  function (extension) {
if (!$I$(14).hasVideoEngine$()) return null;
var mtype=null;
{
for (var next, $next = C$.videoTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.media.mov.MovieVideo")) {
mtype=next;
break;
}}
if (extension == null  || mtype == null  ) {
return mtype;
}var id=mtype.getDefaultExtension$();
if (id != null  && id.indexOf$S(extension) > -1 ) return mtype;
return C$.checkVideoFilter$org_opensourcephysics_media_core_VideoType$S(mtype, extension);
}}, 1);

Clazz.newMeth(C$, 'getVideoType$S$S',  function (typeName, extension) {
if (typeName == null  && extension == null  ) return null;
if ("JS" == typeName) return C$.getMovieType$S(extension);
var candidates=Clazz.new_($I$(12,1));
{
if (typeName == null ) {
candidates.addAll$java_util_Collection(C$.videoTypes);
} else {
for (var next, $next = C$.videoTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getTypeName$() == typeName) candidates.add$O(next);
}
}if (extension == null ) {
if (candidates.isEmpty$()) return null;
return candidates.get$I(0);
}extension=extension.toLowerCase$();
for (var next, $next = candidates.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var id=next.getDefaultExtension$();
if (id != null  && id.indexOf$S(extension) > -1 ) return next;
}
for (var next, $next = candidates.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (C$.checkVideoFilter$org_opensourcephysics_media_core_VideoType$S(next, extension) != null ) return next;
}
}return null;
}, 1);

Clazz.newMeth(C$, 'getVideoTypesForPath$S',  function (path) {
var ext=(path.indexOf$S(".") >= 0 ? $I$(6).getExtension$S(path) : path).toLowerCase$();
var found=Clazz.new_($I$(12,1));
var vidTypes=C$.getVideoTypes$Z(false);
for (var next, $next = vidTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var id=next.getDefaultExtension$();
if (id != null  && id.indexOf$S(ext) > -1 ) found.add$O(next);
}
for (var next, $next = vidTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var filters=next.getFileFilters$();
for (var filter, $filter = 0, $$filter = filters; $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if (filter.extensions != null ) {
for (var s, $s = 0, $$s = filter.extensions; $s<$$s.length&&((s=($$s[$s])),1);$s++) if (s.indexOf$S(ext) > -1 && !found.contains$O(next) ) found.add$O(next);

}}
}
return found;
}, 1);

Clazz.newMeth(C$, 'getVideoTypes$Z',  function (mustBeWritable) {
var available=Clazz.new_($I$(12,1));
for (var next, $next = C$.videoTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!mustBeWritable || next.canRecord$() ) available.add$O(next);
}
return available;
}, 1);

Clazz.newMeth(C$, 'requiresReload$S',  function (zipPath) {
C$.filenamesToReload.add$O($I$(6).getName$S(zipPath));
}, 1);

Clazz.newMeth(C$, 'setCanceled$Z',  function (cancel) {
if (C$.canceled == cancel ) return;
C$.canceled=cancel;
if (C$.loader != null  && cancel ) {
C$.loader.cancelAsync$();
C$.loader=null;
}}, 1);

Clazz.newMeth(C$, 'isCanceled$',  function () {
return C$.canceled;
}, 1);

Clazz.newMeth(C$, 'isKnownVideoExtension$S',  function (path) {
var ext=$I$(6,"getExtension$S",[path.toLowerCase$()]);
if (ext == null ) return false;
for (var i=0; i < C$.KNOWN_VIDEO_EXTENSIONS.length; i++) {
if (ext.equals$O(C$.KNOWN_VIDEO_EXTENSIONS[i])) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'getVideoCodec$S',  function (path0) {
if (C$.codecMap.containsKey$O(path0)) {
return C$.codecMap.get$O(path0);
}var path=path0;
var codec=null;
var localFile=$I$(20).download$S$java_io_File$Z(path, null, false);
if (localFile != null ) path=localFile.getAbsolutePath$();
if (C$.codecMap.containsKey$O(path)) {
return C$.codecMap.get$O(path);
}try {
var vr=Clazz.new_($I$(24,1).c$$S,[path]);
var contents=vr.getContents$Z(false);
codec=(vr.getCodec$() == null  ? "unknown" : vr.getCodec$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
C$.codecMap.put$O$O(path, codec);
C$.codecMap.put$O$O(path0, codec);
return codec;
}, 1);

Clazz.newMeth(C$, 'handleUnsupportedVideo$S$S$S$org_opensourcephysics_media_core_VideoPanel$S',  function (path0, ext, codec, vidPanel, why) {
var path=(path0.startsWith$S("jar:file:/") ? path0.substring$I(9) : path0);
if (C$.unsupportedPaths.contains$O(path)) return;
C$.unsupportedPaths.add$O(path);
$I$(25).warning$S("VideoIO.handleUnsupportedVideo " + path + " from " + why );
var message=(codec != null  ? $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.VideoCodec1") + " " + ext.toUpperCase$() + " " + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.VideoCodec2") + " \"" + codec + "\"."  : $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.VideoType") + " \"" + ext + "\"." );
if (codec == null  && $I$(14).xuggleNeeds32bitVM  && vidPanel != null  ) {
vidPanel.offerReloadVM$S$S(ext, message);
return;
}var helpLink=$I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.MoreInfo") + "<br>" + "<a href=\"" + "https://opensourcephysics.github.io/tracker-website/converting_videos.html" + "\">" + "https://opensourcephysics.github.io/tracker-website/converting_videos.html" + "</a>" ;
message+="<br><br>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.Fix") + ":" ;
message+="<ol>";
if ($I$(20).isHTTP$S(path) || $I$(21).isJSTemp$S(path) ) {
message+="<li>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.Download") + "</li>" ;
message+="<li>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.ConvertDownload") + "</li>" ;
message+="<li>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.Import") + "</li></ol>" ;
message+=helpLink;
message+="<br><br>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.DownloadNow");
Clazz.new_($I$(26,1)).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, Clazz.new_($I$(27,1).c$$S,[message]), $I$(4).getString$S("VideoIO.Dialog.UnsupportedVideo.Title"), 0, ((P$.VideoIO$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
var sel=ev.getID$.apply(ev, []);
switch (sel) {
case 0:
var name=$I$(6).getName$S(this.$finals$.path);
$I$(1,"getChooserFilesAsync$S$java_util_function_Function",["save video " + name, ((P$.VideoIO$lambda1$2||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) /*block*/{
if ($I$(1).getChooser$().getSelectedOption$.apply($I$(1).getChooser$(), []) == 0 && files != null  ) {
$I$(20).downloadResourceFromDialog$S$java_io_File(this.$finals$.path, files[0]);
}return null;
});
})()
), Clazz.new_(P$.VideoIO$lambda1$2.$init$,[this, {path:this.$finals$.path}]))]);
}
});
})()
), Clazz.new_(P$.VideoIO$lambda1.$init$,[this, {path:path}])));
} else {
message+="<li>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.Convert") + "</li>" ;
message+="<li>" + $I$(4).getString$S("VideoIO.Dialog.ConvertVideo.Message.Import") + "</li></ol>" ;
message+=helpLink;
Clazz.new_($I$(26,1)).showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, Clazz.new_($I$(27,1).c$$S,[message]), $I$(4).getString$S("VideoIO.Dialog.UnsupportedVideo.Title"), 1, (P$.VideoIO$lambda2$||(P$.VideoIO$lambda2$=(((P$.VideoIO$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
});
})()
), Clazz.new_(P$.VideoIO$lambda2.$init$,[this, null]))))));
}}, 1);

Clazz.newMeth(C$, 'getVideo$S$org_opensourcephysics_media_core_VideoType',  function (path, vidType) {
return C$.getVideo$S$S$org_opensourcephysics_media_core_VideoType$org_opensourcephysics_controls_XMLControl(path, null, vidType, null);
}, 1);

Clazz.newMeth(C$, 'getVideo$S$S$org_opensourcephysics_media_core_VideoType$org_opensourcephysics_controls_XMLControl',  function (path, basePath, vidType, control) {
path=C$.fixVideoPath$S(path);
var fullPath=$I$(6).getResolvedPath$S$S(path, basePath);
$I$(25,"fine$S",["Path: " + fullPath + "    Type: " + (vidType == null  ? null : vidType.getTypeName$()) ]);
if (vidType != null  && "Xuggle".equals$O(vidType.getTypeName$())  && $I$(20).isHTTP$S(fullPath) ) {
var localFile=$I$(20).download$S$java_io_File$Z(fullPath, null, false);
if (localFile != null ) {
fullPath=localFile.getAbsolutePath$();
path=$I$(6).getName$S(fullPath);
basePath=$I$(6).getDirectoryPath$S(fullPath);
}}var video=null;
C$.setCanceled$Z(false);
if (vidType != null ) {
$I$(25,"finest$S",["preferred type " + vidType.getClass$().getSimpleName$() + " " + vidType.getDescription$() ]);
video=vidType.getVideo$S$S$org_opensourcephysics_controls_XMLControl(path, basePath, control);
if (video != null ) return video;
}if (C$.isCanceled$()) return null;
var allTypes=C$.getVideoTypesForPath$S(path);
for (var next, $next = allTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
video=next.getVideo$S$S$org_opensourcephysics_controls_XMLControl(path, basePath, control);
if (C$.isCanceled$()) return null;
if (video != null ) {
var n=fullPath.indexOf$S("zip!");
n=n > 0 ? n : fullPath.indexOf$S("trz!");
if (n > 0) {
fullPath=fullPath.substring$I$I(0, n + 3);
}if (fullPath.endsWith$S(".zip") || fullPath.endsWith$S(".trz") ) {
if (!(Clazz.instanceOf(next, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType"))) {
var types=C$.getVideoTypesForPath$S(fullPath);
for (var i=0; i < types.size$(); i++) {
if (Clazz.instanceOf(types.get$I(i), "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType")) {
var zipType=types.get$I(i);
if (zipType.getImageVideoType$().getDefaultExtension$().equals$O(next.getDefaultExtension$())) {
video.setProperty$S$O("video_type", types.get$I(i));
break;
}}}
}}return video;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'fixVideoPath$S',  function (path) {
return (path.startsWith$S("file:") ? $I$(20).getNonURIPath$S(path) : path);
}, 1);

Clazz.newMeth(C$, 'clone$org_opensourcephysics_media_core_Video',  function (video) {
if (video == null ) {
return null;
}if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")) {
return Clazz.new_($I$(28,1).c$$org_opensourcephysics_media_core_ImageVideo,[video]);
}var control=Clazz.new_($I$(29,1).c$$O,[video]);
return Clazz.new_($I$(29,1).c$$org_opensourcephysics_controls_XMLControl,[control]).loadObject$O(null);
}, 1);

Clazz.newMeth(C$, 'canWrite$java_io_File',  function (file) {
if ($I$(21).isJS) return true;
if (file.getName$().contains$CharSequence("&")) {
Clazz.new_($I$(26,1)).showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, $I$(4).getString$S("VideoIO.Dialog.BadFileName.Message") + " \n\"&\"", $I$(4).getString$S("VideoIO.Dialog.BadFileName.Title"), 2, (P$.VideoIO$lambda3$||(P$.VideoIO$lambda3$=(((P$.VideoIO$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
});
})()
), Clazz.new_(P$.VideoIO$lambda3.$init$,[this, null]))))));
return false;
}if (file.exists$() && !file.canWrite$() ) {
$I$(30,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(31).getString$S("Dialog.ReadOnly.Message"), $I$(31).getString$S("Dialog.ReadOnly.Title"), -1]);
return false;
}if (file.exists$()) {
var selected=$I$(30,"showConfirmDialog$java_awt_Component$O$S$I",[null, "\"" + file.getName$() + "\" " + $I$(4).getString$S("VideoIO.Dialog.FileExists.Message") , $I$(4).getString$S("VideoIO.Dialog.FileExists.Title"), 0]);
if (selected != 0) {
return false;
}}return true;
}, 1);

Clazz.newMeth(C$, 'getChooserFilesAsync$S$java_util_function_Function',  function (type, processFiles) {
var chooser=C$.getChooser$();
chooser.setMultiSelectionEnabled$Z(false);
chooser.setAcceptAllFileFilterUsed$Z(true);
chooser.setAccessory$javax_swing_JComponent(null);
var resetChooser=((P$.VideoIO$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.chooser.resetChoosableFileFilters$.apply(this.$finals$.chooser, []);
if (this.$finals$.processFiles != null ) this.$finals$.chooser.setSelectedFile$java_io_File.apply(this.$finals$.chooser, [null]);
});
})()
), Clazz.new_(P$.VideoIO$lambda4.$init$,[this, {processFiles:processFiles,chooser:chooser}]));
var okOpen=((P$.VideoIO$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var file=this.$finals$.chooser.getSelectedFile$.apply(this.$finals$.chooser, []);
this.$finals$.resetChooser.run$();
if (this.$finals$.chooser.getSelectedOption$.apply(this.$finals$.chooser, []) != 0) return;
if (this.$finals$.processFiles != null ) this.$finals$.processFiles.apply$O.apply(this.$finals$.processFiles, [Clazz.array($I$(5), -1, [file])]);
});
})()
), Clazz.new_(P$.VideoIO$lambda5.$init$,[this, {resetChooser:resetChooser,processFiles:processFiles,chooser:chooser}]));
var okSave=((P$.VideoIO$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoIO$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var file=this.$finals$.chooser.getSelectedFile$.apply(this.$finals$.chooser, []);
this.$finals$.resetChooser.run$();
if (this.$finals$.chooser.getSelectedOption$.apply(this.$finals$.chooser, []) != 0) return;
if (this.$finals$.processFiles != null  && $I$(1).canWrite$java_io_File(file) ) this.$finals$.processFiles.apply$O.apply(this.$finals$.processFiles, [Clazz.array($I$(5), -1, [file])]);
});
})()
), Clazz.new_(P$.VideoIO$lambda6.$init$,[this, {resetChooser:resetChooser,processFiles:processFiles,chooser:chooser}]));
var originalFileName="";
var saveVideo="save video";
if (type.startsWith$S(saveVideo + " ")) {
originalFileName=type.substring$I(saveVideo.length$() + 1);
type=saveVideo;
}var saveResource="save resource";
if (type.startsWith$S(saveResource + " ")) {
originalFileName=type.substring$I(saveResource.length$() + 1);
type=saveResource;
}switch (type.toLowerCase$()) {
case "open":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.videoFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter(chooser.getAcceptAllFileFilter$());
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "open image":
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.resetChoosableFileFilters$();
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.imageFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter(C$.imageFileFilter);
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "save video":
chooser.resetChoosableFileFilters$();
chooser.setDialogTitle$S($I$(4).getString$S("VideoIO.Dialog.SaveVideoAs.Title"));
chooser.setFileFilter$javax_swing_filechooser_FileFilter(chooser.getAcceptAllFileFilter$());
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(5,1).c$$S,[originalFileName]));
chooser.showSaveDialog$java_awt_Component$Runnable$Runnable(null, okSave, resetChooser);
break;
case "save image":
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.resetChoosableFileFilters$();
chooser.setDialogTitle$S($I$(4).getString$S("VideoIO.Dialog.SaveAs.Title"));
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.jpgFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter(C$.jpgFileFilter);
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(5,1).c$$S,[originalFileName]));
chooser.showSaveDialog$java_awt_Component$Runnable$Runnable(null, okSave, resetChooser);
break;
case "save resource":
chooser.resetChoosableFileFilters$();
chooser.setDialogTitle$S($I$(4).getString$S("VideoIO.Dialog.SaveAs.Title"));
chooser.setFileFilter$javax_swing_filechooser_FileFilter(chooser.getAcceptAllFileFilter$());
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(5,1).c$$S,[originalFileName]));
chooser.showSaveDialog$java_awt_Component$Runnable$Runnable(null, okSave, resetChooser);
break;
default:
return null;
}
var ret=C$.processChoose$javajs_async_AsyncFileChooser$java_io_File$Z(chooser, null, processFiles != null );
return (ret == null  ? null : Clazz.array($I$(5), -1, [ret]));
}, 1);

Clazz.newMeth(C$, 'processChoose$javajs_async_AsyncFileChooser$java_io_File$Z',  function (chooser, ret, isAsync) {
if (isAsync) return null;
if (ret == null  && chooser.getSelectedOption$() == 0 ) ret=chooser.getSelectedFile$();
chooser.setSelectedFile$java_io_File(null);
return ret;
}, 1);

Clazz.newMeth(C$, 'openVideoPanelFileAsync$java_io_File$org_opensourcephysics_media_core_VideoPanel',  function (file, vidPanel) {
if (file != null ) {
C$.openVideoPanelFileSync$java_io_File$org_opensourcephysics_media_core_VideoPanel(file, vidPanel);
return;
}C$.getChooserFilesAsync$S$java_util_function_Function("open", ((P$.VideoIO$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoIO$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) {
var file=(files == null  ? null : files[0]);
if (file != null ) {
$I$(1).openVideoPanelFileSync$java_io_File$org_opensourcephysics_media_core_VideoPanel(file, this.$finals$.vidPanel);
}return null;
});
})()
), Clazz.new_(P$.VideoIO$3.$init$,[this, {vidPanel:vidPanel}])));
}, 1);

Clazz.newMeth(C$, 'openVideoPanelFileSync$java_io_File$org_opensourcephysics_media_core_VideoPanel',  function (file, vidPanel) {
var path=file.getAbsolutePath$();
if ($I$(20).isJarZipTrz$S$Z(path, false)) {
var p=C$.getEmbeddedMovie$S(path);
if (p != null ) {
file=Clazz.new_([path=p],$I$(5,1).c$$S);
}}if (C$.videoFileFilter.accept$java_io_File$Z(file, true)) {
var types=C$.getVideoTypes$Z(false);
var video=null;
for (var i=0; i < types.size$(); i++) {
var type=types.get$I(i);
if (type.accepts$java_io_File(file)) {
video=type.getVideo$S(path);
if (video != null ) {
$I$(25,"info$S",[file.getName$() + " opened as type " + type.getDescription$() ]);
break;
}$I$(25,"info$S",[file.getName$() + " failed as type " + type.getDescription$() ]);
}}
if (video == null ) {
$I$(30,"showMessageDialog$java_awt_Component$O",[vidPanel, $I$(4).getString$S("VideoIO.Dialog.BadVideo.Message") + $I$(20,"getNonURIPath$S",[$I$(6).getAbsolutePath$java_io_File(file)])]);
return;
}vidPanel.setVideo$org_opensourcephysics_media_core_Video(video);
vidPanel.repaint$();
} else {
var control=Clazz.new_($I$(29,1));
control.read$S(path);
var type=control.getObjectClass$();
if (Clazz.getClass($I$(32)).isAssignableFrom$Class(type)) {
vidPanel.setDataFile$java_io_File(file);
control.loadObject$O(vidPanel);
} else if (control.failedToRead$()) {
$I$(30,"showMessageDialog$java_awt_Component$O",[vidPanel, $I$(4).getString$S("VideoIO.Dialog.BadFile.Message") + $I$(20,"getNonURIPath$S",[$I$(6).getAbsolutePath$java_io_File(file)])]);
} else {
$I$(30,"showMessageDialog$java_awt_Component$O$S$I",[vidPanel, "\"" + file.getName$() + "\" " + $I$(4).getString$S("VideoIO.Dialog.XMLMismatch.Message") , $I$(4).getString$S("VideoIO.Dialog.XMLMismatch.Title"), 2]);
return;
}vidPanel.changed=false;
}}, 1);

Clazz.newMeth(C$, 'getEmbeddedMovie$S',  function (path) {
var map=$I$(20).getZipContents$S$Z(path, true);
for (var key, $key = map.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (C$.videoFileFilter.accept$java_io_File$Z(Clazz.new_($I$(5,1).c$$S,[key]), true)) {
return path + "!/" + key ;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'save$java_io_File$org_opensourcephysics_media_core_VideoPanel',  function (file, vidPanel) {
return C$.save$java_io_File$org_opensourcephysics_media_core_VideoPanel$S(file, vidPanel, $I$(4).getString$S("VideoIO.Dialog.SaveAs.Title"));
}, 1);

Clazz.newMeth(C$, 'save$java_io_File$org_opensourcephysics_media_core_VideoPanel$S',  function (file, vidPanel, chooserTitle) {
if (file == null ) {
var video=vidPanel.getVideo$();
var chooser=C$.getChooser$();
chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.videoFileFilter);
chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.imageFileFilter);
chooser.setDialogTitle$S(chooserTitle);
var filename=$I$(4).getString$S("VideoIO.FileName.Untitled");
if (vidPanel.getFilePath$() != null ) {
filename=$I$(6,"stripExtension$S",[vidPanel.getFilePath$()]);
} else if ((video != null ) && (video.getProperty$S("name") != null ) ) {
filename=video.getProperty$S("name");
var i=filename.lastIndexOf$S(".");
if (i > 0) {
filename=filename.substring$I$I(0, i);
}}file=Clazz.new_($I$(5,1).c$$S,[filename + "." + C$.defaultXMLExt ]);
var parent=$I$(6).getDirectoryPath$S(filename);
if (!parent.equals$O("")) {
$I$(6).createFolders$S(parent);
chooser.setCurrentDirectory$java_io_File(Clazz.new_($I$(5,1).c$$S,[parent]));
}chooser.setSelectedFile$java_io_File(file);
var result=chooser.showSaveDialog$java_awt_Component(vidPanel);
if (result == 0) {
file=chooser.getSelectedFile$();
if (!C$.defaultXMLExt.equals$O(C$.getExtension$java_io_File(file))) {
filename=$I$(6,"stripExtension$S",[file.getPath$()]);
file=Clazz.new_($I$(5,1).c$$S,[filename + "." + C$.defaultXMLExt ]);
}if (!C$.canWrite$java_io_File(file)) return null;
vidPanel.setDataFile$java_io_File(file);
} else {
return null;
}}var video=vidPanel.getVideo$();
if (video != null ) {
video.setProperty$S$O("base", $I$(6,"getDirectoryPath$S",[$I$(6).getAbsolutePath$java_io_File(file)]));
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")) {
(video).saveInvalidImages$();
}}var xmlControl=Clazz.new_($I$(29,1).c$$O,[vidPanel]);
xmlControl.write$S(file.getAbsolutePath$());
vidPanel.changed=false;
return file;
}, 1);

Clazz.newMeth(C$, 'writeImageFile$java_awt_image_BufferedImage$S',  function (image, filePath) {
if (image == null ) return null;
var file=Clazz.new_($I$(5,1).c$$S,[filePath]);
var parent=file.getParentFile$();
if (!parent.exists$()) {
parent.mkdirs$();
}var ext=$I$(6).getExtension$S(filePath);
try {
if ($I$(33).write$java_awt_image_RenderedImage$S$java_io_File(image, ext, file)) return file;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(25,"finer$S",[ex.toString()]);
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getImageSequencePaths$S$java_util_Set',  function (imagePath, names) {
var imagePaths=Clazz.new_($I$(12,1));
var originalPath=imagePath;
var extension="";
var i=imagePath.lastIndexOf$I(".");
if (i > 0 && i < imagePath.length$() - 1 ) {
extension=imagePath.substring$I(i).toLowerCase$();
imagePath=imagePath.substring$I$I(0, i);
}var len=imagePath.length$();
var digits=0;
while (digits <= 4 && --len >= 0  && Character.isDigit$C(imagePath.charAt$I(len)) ){
++digits;
}
if (digits == 0) return Clazz.array(String, -1, [originalPath]);
var limit=(Math.pow(10, digits)|0);
var root=imagePath.substring$I$I(0, ++len);
var name=$I$(6).getName$S(root);
root=$I$(6).getDirectoryPath$S(root) + "/";
var startNumber=imagePath.substring$I(len);
var n=Integer.parseInt$S(startNumber) - 1;
try {
while (++n < limit){
var num="000" + n;
var imageName=name + (num.substring$I(num.length$() - digits)) + extension ;
if (names.contains$O(imageName)) {
imagePaths.add$O(root + imageName);
continue;
}break;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return imagePaths.toArray$OA(Clazz.array(String, [imagePaths.size$()]));
}, 1);

Clazz.newMeth(C$, 'checkMP4$S$org_opensourcephysics_tools_LibraryBrowser$org_opensourcephysics_media_core_VideoPanel',  function (path, libraryBrowser, panel) {
var ext=$I$(6).getExtension$S(path);
if (!"mp4".equals$O(ext) && !"mov".equals$O(ext) ) return true;
var codec=C$.getVideoCodec$S(path);
$I$(25,"fine$S",["VideoIO: " + ext + " codec = " + codec ]);
if (!$I$(21).isJS || codec != null  && codec.contains$CharSequence("avc1")  ) return true;
C$.handleUnsupportedVideo$S$S$S$org_opensourcephysics_media_core_VideoPanel$S(path, ext, codec, panel, "VideoIO");
return false;
}, 1);

Clazz.newMeth(C$, 'progressForFraction$D$D',  function (iFrame, nFrames) {
return (Math.min(20 + (iFrame / nFrames % 1.00001) * (60), 79)|0);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.KNOWN_VIDEO_EXTENSIONS=Clazz.array(String, -1, ["mov", "flv", "mp4", "wmv", "avi", "mts", "m2ts", "mpg", "mod", "ogg", "dv"]);
C$.defaultDelimiter="\t";
C$.delimiters=Clazz.new_($I$(11,1));
C$.delimiter=C$.defaultDelimiter;
C$.customDelimiters=Clazz.new_($I$(11,1));
C$.filenamesToReload=Clazz.new_($I$(12,1));
C$.singleVideoTypeFilters=Clazz.new_($I$(13,1));
C$.defaultXMLExt="xml";
C$.preferredExportExtension="mp4";
C$.incrementToLoad=10;
{
C$.videoTypes=Clazz.new_($I$(12,1));
C$.videoFileFilter=Clazz.new_($I$(3,1));
$I$(14).hasVideoEngine$();
C$.addVideoType$org_opensourcephysics_media_core_VideoType(Clazz.new_($I$(15,1)));
var filter=Clazz.new_(["jpg", Clazz.array(String, -1, ["jpg", "jpeg"])],$I$(3,1).c$$S$SA);
var vidType=Clazz.new_($I$(16,1).c$$org_opensourcephysics_media_core_VideoFileFilter,[filter]);
C$.addVideoType$org_opensourcephysics_media_core_VideoType(vidType);
C$.addVideoType$org_opensourcephysics_media_core_VideoType(Clazz.new_($I$(2,1).c$$org_opensourcephysics_media_core_ImageVideoType,[vidType]));
filter=Clazz.new_(["png", Clazz.array(String, -1, ["png"])],$I$(3,1).c$$S$SA);
vidType=Clazz.new_($I$(16,1).c$$org_opensourcephysics_media_core_VideoFileFilter,[filter]);
C$.addVideoType$org_opensourcephysics_media_core_VideoType(vidType);
C$.addVideoType$org_opensourcephysics_media_core_VideoType(Clazz.new_($I$(2,1).c$$org_opensourcephysics_media_core_ImageVideoType,[vidType]));
C$.imageFileFilter=((P$.VideoIO$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoIO$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkDir) {
var ext=$I$(1).getExtension$java_io_File(f);
return (checkDir && f.isDirectory$()  || "jpg".equalsIgnoreCase$S(ext)  || "jpeg".equalsIgnoreCase$S(ext)  || "png".equalsIgnoreCase$S(ext)  || "gif".equalsIgnoreCase$S(ext) );
});
})()
), Clazz.new_([this, null, null, $I$(4).getString$S("VideoIO.ImageFileFilter.Description")],$I$(17,1).c$$S$S,P$.VideoIO$1));
C$.jpgFileFilter=((P$.VideoIO$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoIO$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkDir) {
var ext=$I$(1).getExtension$java_io_File(f);
return (checkDir && f.isDirectory$()  || "jpeg".equalsIgnoreCase$S(ext)  || "jpg".equalsIgnoreCase$S(ext) );
});
})()
), Clazz.new_([this, null, null, $I$(4).getString$S("ImageVideoType.JPGFileFilter.Description")],$I$(17,1).c$$S$S,P$.VideoIO$2));
};
C$.unsupportedPaths=Clazz.new_($I$(18,1));
C$.codecMap=Clazz.new_($I$(19,1));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.VideoIO, "FinalizableLoader", function(){
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.NonStaticLoader']]);

C$.$clinit$=2;
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoIO, "SingleExtFileFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['ext','desc']]]

Clazz.newMeth(C$, 'c$$S$S',  function (ext, desc) {
Clazz.super_(C$, this);
this.ext=ext;
this.desc=desc;
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
return (f != null  && this.accept$java_io_File$Z(f, true) );
});

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkIfDir) {
return (checkIfDir && f.isDirectory$()  || (this.ext != null  && this.ext.equalsIgnoreCase$S($I$(1).getExtension$java_io_File(f)) ) );
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.desc;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoIO, "ZipImageVideoType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.media.core.ImageVideoType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['imageVideoType','org.opensourcephysics.media.core.ImageVideoType']]
,['Z',['checkZipContents']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_ImageVideoType',  function (type) {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoFileFilter.apply(this,[((P$.VideoIO$ZipImageVideoType$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoIO$ZipImageVideoType$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.media.core.VideoFileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkIfDir) {
if (!C$.superclazz.prototype.accept$java_io_File$Z.apply(this, [f, checkIfDir])) return false;
if (f.isDirectory$() || !$I$(2).checkZipContents ) return true;
var imagePaths=$I$(1,"getZippedImagePaths$S",[f.getAbsolutePath$()]);
return imagePaths != null ;
});
})()
), Clazz.new_([this, null, "zip", Clazz.array(String, -1, ["zip"])],$I$(3,1).c$$S$SA,P$.VideoIO$ZipImageVideoType$1))]);C$.$init$.apply(this);
this.imageVideoType=type;
}, 1);

Clazz.newMeth(C$, 'getDescription$',  function () {
var zipped=$I$(4).getString$S("ZipImageVideoType.Description.Zipped");
var desc=zipped + " " + this.imageVideoType.getDescription$() ;
desc=desc.substring$I$I(0, desc.indexOf$S("(") + 1) + "." + "zip" + ")" ;
return desc;
});

Clazz.newMeth(C$, 'getVideo$S$S$org_opensourcephysics_controls_XMLControl',  function (name, basePath, control) {
var fullPath=basePath == null  ? name : basePath + "/" + name ;
if ($I$(1).zipFileFilter.accept$java_io_File(Clazz.new_($I$(5,1).c$$S,[fullPath]))) {
var imagePaths=$I$(1).getZippedImagePaths$S(fullPath);
if (imagePaths == null ) {
return null;
}name=imagePaths[0];
if (!this.getImageVideoType$().accepts$java_io_File(Clazz.new_([$I$(6).getName$S(name)],$I$(5,1).c$$S))) {
return null;
}basePath=null;
var video=C$.superclazz.prototype.getVideo$S$S$org_opensourcephysics_controls_XMLControl.apply(this, [name, basePath, control]);
if (video != null ) video.setProperty$S$O("video_type", this);
return video;
}return null;
});

Clazz.newMeth(C$, 'getImageExtension$',  function () {
return this.imageVideoType.getDefaultExtension$();
});

Clazz.newMeth(C$, 'getImageVideoType$',  function () {
return this.imageVideoType;
});

C$.$static$=function(){C$.$static$=0;
C$.checkZipContents=true;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoIO, "StreamPiper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['input','java.io.InputStream','output','java.io.OutputStream']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_io_OutputStream',  function ($in, out) {
;C$.$init$.apply(this);
this.input=$in;
this.output=out;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var buffer=Clazz.array(Byte.TYPE, [1024]);
for (var count=0; (count=this.input.read$BA(buffer)) >= 0; ) {
this.output.write$BA$I$I(buffer, 0, count);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoIO, "EditorPaneMessage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JEditorPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (htmlBody) {
;C$.superclazz.c$$S$S.apply(this,["text/html", "<html><body style=\"" + C$.getLabelStyle$() + "\">" + htmlBody + "</body></html>" ]);C$.$init$.apply(this);
this.addHyperlinkListener$javax_swing_event_HyperlinkListener(((P$.VideoIO$EditorPaneMessage$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoIO$EditorPaneMessage$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$().equals$O($I$(7).ACTIVATED)) {
$I$(8,"displayURL$S",[e.getURL$().toString()]);
}});
})()
), Clazz.new_(P$.VideoIO$EditorPaneMessage$1.$init$,[this, null])));
this.setEditable$Z(false);
this.setBorder$javax_swing_border_Border(null);
}, 1);

Clazz.newMeth(C$, 'getLabelStyle$',  function () {
var label=Clazz.new_($I$(9,1));
var font=label.getFont$();
var color=label.getBackground$();
var style=Clazz.new_(["font-family:" + font.getFamily$() + ";" ],$I$(10,1).c$$S);
style.append$S("font-weight:" + (font.isBold$() ? "bold" : "normal") + ";" );
style.append$S("font-size:" + font.getSize$() + "pt;" );
style.append$S("background-color: rgb(" + color.getRed$() + "," + color.getGreen$() + "," + color.getBlue$() + ");" );
return style;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
