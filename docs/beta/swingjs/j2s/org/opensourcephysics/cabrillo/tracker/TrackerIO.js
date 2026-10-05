(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.image.BufferedImage','org.opensourcephysics.cabrillo.tracker.TrackerIO','java.awt.print.PrinterJob','java.awt.print.PageFormat','java.awt.print.Book','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.util.ArrayList','java.util.HashSet','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','javajs.async.AsyncDialog','org.opensourcephysics.media.core.VideoIO','java.io.File',['org.opensourcephysics.tools.ResourceLoader','.RemoteFile'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.TrackerPanel','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.LibraryCollection','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TToolBar','java.util.HashMap','Thread','org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.tools.LibraryBrowser','javax.swing.SwingUtilities','java.awt.Cursor','java.util.Arrays','java.awt.datatransfer.DataFlavor',['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter'],'java.util.TreeSet','javax.swing.filechooser.FileFilter',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.AsyncLoader'],'org.opensourcephysics.media.core.ImageVideoRecorder','java.util.zip.ZipOutputStream','java.io.FileOutputStream','java.util.zip.ZipEntry','java.util.BitSet','java.text.NumberFormat','org.opensourcephysics.cabrillo.tracker.Undo','java.io.FileWriter','org.opensourcephysics.controls.ListChooser','java.awt.datatransfer.StringSelection','java.awt.Toolkit',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.TransferImage'],'StringBuffer','java.text.DateFormat','org.opensourcephysics.media.core.ImageVideoType','org.opensourcephysics.media.core.VideoFileFilter','java.io.ByteArrayOutputStream','javax.imageio.ImageIO']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerIO", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.VideoIO');
C$.$classes$=[['TrackerMonitor',9],['ComponentImage',8],['AsyncLoader',8],['TransferImage',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isffmpegError','loadInSeparateThread','$dataCopiedToClipboard'],'D',['defaultBadFrameTolerance'],'S',['selectedVideoFormat'],'O',['XUGGLE_VIDEO_EXTENSIONS','String[]','NULL_RUNNABLE','Runnable','theFrame','org.opensourcephysics.cabrillo.tracker.TFrame','ffmpegListener','java.beans.PropertyChangeListener','monitors','java.util.Set','videoFormatDescriptions','java.util.TreeSet','videoFormats','java.util.HashMap','imageFilters','javax.swing.filechooser.FileFilter[]','videoFilter','javax.swing.filechooser.FileFilter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getDelimiters$',  function () {
if ($I$(14).delimiters.isEmpty$()) {
$I$(14).delimiters.put$O$O($I$(7).getString$S("TrackerIO.Delimiter.Tab"), "\t");
$I$(14).delimiters.put$O$O($I$(7).getString$S("TrackerIO.Delimiter.Space"), " ");
$I$(14).delimiters.put$O$O($I$(7).getString$S("TrackerIO.Delimiter.Comma"), ",");
$I$(14).delimiters.put$O$O($I$(7).getString$S("TrackerIO.Delimiter.Semicolon"), ";");
}return $I$(14).delimiters;
}, 1);

Clazz.newMeth(C$, 'save$java_io_File$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (file, trackerPanel) {
trackerPanel.restoreViews$();
$I$(14).getChooser$().setAcceptAllFileFilterUsed$Z(false);
$I$(14).chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
$I$(14).chooser.setAccessory$javax_swing_JComponent(null);
if (file == null  && trackerPanel.getDataFile$() == null  ) {
var clip=trackerPanel.getPlayer$().getVideoClip$();
if (clip.getVideoPath$() != null ) {
var dir=Clazz.new_([clip.getVideoPath$()],$I$(15,1).c$$S).getParentFile$();
$I$(14).chooser.setCurrentDirectory$java_io_File(dir);
}}var isNew=file == null ;
file=$I$(14,"save$java_io_File$org_opensourcephysics_media_core_VideoPanel$S",[file, trackerPanel, $I$(7).getString$S("TrackerIO.Dialog.SaveTab.Title")]);
$I$(14).chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
$I$(14).chooser.setAcceptAllFileFilterUsed$Z(true);
if (isNew && file != null  ) {
$I$(23,"addRecent$S$Z",[$I$(11).getAbsolutePath$java_io_File(file), false]);
trackerPanel.refreshMenus$S("TrackerIO.save");
}return file;
}, 1);

Clazz.newMeth(C$, 'saveTabset$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame',  function (file, frame) {
var n=0;
for (var i=0; i < frame.getTabCount$(); i++) {
var trackerPanel=frame.getTrackerPanelForTab$I(i);
if (trackerPanel.getDataFile$() != null ) {
++n;
continue;
}var video=trackerPanel.getVideo$();
if (!trackerPanel.changed && video != null  ) {
var path=video.getProperty$S("absolutePath");
if (path != null ) {
++n;
continue;
}}var selected=$I$(6,"showConfirmDialog$java_awt_Component$O$S$I",[frame, $I$(7).getString$S("TrackerIO.Dialog.TabMustBeSaved.Message1") + " " + i + " (\"" + frame.getTabTitle$I(i) + "\") " + $I$(7).getString$S("TrackerIO.Dialog.TabMustBeSaved.Message2") + $I$(11).NEW_LINE + $I$(7).getString$S("TrackerIO.Dialog.TabMustBeSaved.Message3") , $I$(7).getString$S("TrackerIO.Dialog.TabMustBeSaved.Title"), 1]);
if (selected == 2) {
return null;
} else if (selected != 0) {
continue;
}$I$(14).getChooser$().setAccessory$javax_swing_JComponent(null);
var newFile=$I$(14,"save$java_io_File$org_opensourcephysics_media_core_VideoPanel$S",[null, trackerPanel, $I$(7).getString$S("TrackerIO.Dialog.SaveTab.Title")]);
if (newFile == null ) {
return null;
}$I$(23,"addRecent$S$Z",[$I$(11).getAbsolutePath$java_io_File(newFile), false]);
++n;
}
if (n == 0) {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[frame, $I$(7).getString$S("TrackerIO.Dialog.NoTabs.Message"), $I$(7).getString$S("TrackerIO.Dialog.NoTabs.Title"), 2]);
return null;
}if (file == null ) {
var files=C$.getChooserFiles$S("save tabset");
if (files == null  || files.length == 0 ) return null;
file=files[0];
}frame.tabsetFile=file;
var xmlControl=Clazz.new_($I$(17,1).c$$O,[frame]);
xmlControl.write$S($I$(11).getAbsolutePath$java_io_File(file));
$I$(23,"addRecent$S$Z",[$I$(11).getAbsolutePath$java_io_File(file), false]);
frame.getSelectedPanel$().refreshMenus$S("TrackerIO.saveTabset");
return file;
}, 1);

Clazz.newMeth(C$, 'getChooserFiles$S',  function (type) {
return C$.getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(null, type, null);
}, 1);

Clazz.newMeth(C$, 'getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function',  function (frame, type, processFiles) {
var chooser=$I$(14).getChooser$();
chooser.setMultiSelectionEnabled$Z(false);
chooser.setAcceptAllFileFilterUsed$Z(true);
chooser.setAccessory$javax_swing_JComponent(null);
var resetChooser=((P$.TrackerIO$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.$finals$.frame != null ) this.$finals$.frame.setCursor$java_awt_Cursor.apply(this.$finals$.frame, [$I$(30).getDefaultCursor$()]);
this.$finals$.chooser.resetChoosableFileFilters$.apply(this.$finals$.chooser, []);
this.$finals$.chooser.setSelectedFile$java_io_File.apply(this.$finals$.chooser, [null]);
});
})()
), Clazz.new_(P$.TrackerIO$lambda2.$init$,[this, {chooser:chooser,frame:frame}]));
var okOpen=((P$.TrackerIO$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.$finals$.frame != null ) this.$finals$.frame.setCursor$java_awt_Cursor.apply(this.$finals$.frame, [$I$(30).getDefaultCursor$()]);
if (this.$finals$.processFiles != null ) {
var files=this.$finals$.chooser.getSelectedFiles$.apply(this.$finals$.chooser, []);
var file=this.$finals$.chooser.getSelectedFile$.apply(this.$finals$.chooser, []);
this.$finals$.resetChooser.run$();
this.$finals$.processFiles.apply$O.apply(this.$finals$.processFiles, [files != null  && files.length > 0  ? files : file != null  ? Clazz.array($I$(15), -1, [file]) : null]);
}});
})()
), Clazz.new_(P$.TrackerIO$lambda3.$init$,[this, {chooser:chooser,processFiles:processFiles,resetChooser:resetChooser,frame:frame}]));
var okSave=((P$.TrackerIO$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var file=this.$finals$.chooser.getSelectedFile$.apply(this.$finals$.chooser, []);
this.$finals$.resetChooser.run$();
if ($I$(14).canWrite$java_io_File(file)) this.$finals$.processFiles.apply$O.apply(this.$finals$.processFiles, [Clazz.array($I$(15), -1, [file])]);
});
})()
), Clazz.new_(P$.TrackerIO$lambda4.$init$,[this, {chooser:chooser,processFiles:processFiles,resetChooser:resetChooser}]));
var ret=null;
var isSave=false;
switch (type.toLowerCase$()) {
case "open":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).videoAndTrkFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(14).videoAndTrkFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.Open.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "open trk":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.Open.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "open any":
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.Open.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "open video":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).videoFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(14).videoFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.Open.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "open data":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).txtFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.OpenData.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "open ejs":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).jarFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.OpenEJS.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "insert images":
chooser.setMultiSelectionEnabled$Z(true);
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).imageFileFilter);
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(15,1).c$$S,[""]));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "import file":
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.Import.Title"));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, okOpen, resetChooser);
break;
case "export file":
isSave=true;
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.Export.Title"));
chooser.showSaveDialog$java_awt_Component$Runnable$Runnable(null, okSave, resetChooser);
break;
case "save thumbnail":
isSave=true;
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.setDialogTitle$S($I$(7).getString$S("ThumbnailDialog.Chooser.SaveThumbnail.Title"));
if (chooser.showSaveDialog$java_awt_Component(null) != 0) return null;
var f=chooser.getSelectedFile$();
return (f == null  ? null : Clazz.array($I$(15), -1, [f]));
case "save data":
isSave=true;
chooser.resetChoosableFileFilters$();
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).txtFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("ExportDataDialog.Chooser.SaveData.Title"));
if (chooser.showSaveDialog$java_awt_Component(null) != 0) return null;
f=chooser.getSelectedFile$();
return (f == null  ? null : Clazz.array($I$(15), -1, [f]));
case "save tabset":
isSave=true;
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(14).trkFileFilter);
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.SaveTabset.Title"));
var filename="";
var theFile=Clazz.array($I$(15), -1, [Clazz.new_([filename + "." + $I$(14).defaultXMLExt ],$I$(15,1).c$$S)]);
var parent=$I$(11).getDirectoryPath$S(filename);
if (!parent.equals$O("")) {
$I$(11).createFolders$S(parent);
chooser.setCurrentDirectory$java_io_File(Clazz.new_($I$(15,1).c$$S,[parent]));
}chooser.setSelectedFile$java_io_File(theFile[0]);
chooser.showSaveDialog$java_awt_Component$Runnable$Runnable(null, ((P$.TrackerIO$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.theFile[0]=this.$finals$.chooser.getSelectedFile$.apply(this.$finals$.chooser, []);
this.$finals$.resetChooser.run$();
if (this.$finals$.processFiles != null ) {
this.$finals$.processFiles.apply$O.apply(this.$finals$.processFiles, [Clazz.array($I$(15), -1, [$I$(2).fixXML$java_io_File(this.$finals$.theFile[0])])]);
}});
})()
), Clazz.new_(P$.TrackerIO$lambda5.$init$,[this, {chooser:chooser,theFile:theFile,processFiles:processFiles,resetChooser:resetChooser}])), resetChooser);
ret=(processFiles != null  || chooser.getSelectedOption$() != 0  ? null : C$.fixXML$java_io_File(theFile[0]));
break;
case "save document":
isSave=true;
chooser.resetChoosableFileFilters$();
chooser.setAcceptAllFileFilterUsed$Z(true);
chooser.setDialogTitle$S($I$(7).getString$S("TMenuBar.Menu.Save"));
chooser.showSaveDialog$java_awt_Component$Runnable$Runnable(null, ((P$.TrackerIO$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var fil=this.$finals$.chooser.getSelectedFile$.apply(this.$finals$.chooser, []);
this.$finals$.resetChooser.run$();
if (this.$finals$.processFiles != null ) {
this.$finals$.processFiles.apply$O.apply(this.$finals$.processFiles, [Clazz.array($I$(15), -1, [fil])]);
}});
})()
), Clazz.new_(P$.TrackerIO$lambda6.$init$,[this, {chooser:chooser,processFiles:processFiles,resetChooser:resetChooser}])), resetChooser);
f=chooser.getSelectedFile$();
return (f == null  ? null : Clazz.array($I$(15), -1, [f]));
default:
return C$.getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(frame, "save document", processFiles);
}
ret=$I$(14,"processChoose$javajs_async_AsyncFileChooser$java_io_File$Z",[chooser, ret, processFiles != null ]);
if (processFiles == null ) {
resetChooser.run$();
}return (ret == null  || isSave && !$I$(14).canWrite$java_io_File(ret)   ? null : Clazz.array($I$(15), -1, [ret]));
}, 1);

Clazz.newMeth(C$, 'fixXML$java_io_File',  function (file) {
if (file == null ) return null;
if (!$I$(14).defaultXMLExt.equals$O($I$(14).getExtension$java_io_File(file))) {
var filename=$I$(11,"stripExtension$S",[file.getPath$()]);
var f=Clazz.new_([filename + "." + $I$(14).defaultXMLExt ],$I$(15,1).c$$S);
if ($I$(22).isJS) {
$I$(22).jsutil.setFileBytes$java_io_File$O(f, $I$(22).jsutil.getBytes$java_io_File(file));
$I$(22).cacheJSFile$java_io_File$Z(f, true);
}file=f;
}return file;
}, 1);

Clazz.newMeth(C$, 'getChooserFileForName$S',  function (name) {
var extension=$I$(11).getExtension$S(name);
if (extension != null  && !extension.trim$().equals$O("") ) {
extension=extension.trim$().toLowerCase$();
} else {
extension=null;
}var ext=extension;
$I$(14).getChooser$().setDialogTitle$S($I$(21).getString$S("VideoIO.Dialog.SaveVideoAs.Title"));
$I$(14).chooser.setSelectedFile$java_io_File(Clazz.new_($I$(15,1).c$$S,[name]));
$I$(14).chooser.resetChoosableFileFilters$();
$I$(14).chooser.setAccessory$javax_swing_JComponent(null);
$I$(14).chooser.setMultiSelectionEnabled$Z(false);
$I$(14).chooser.setAcceptAllFileFilterUsed$Z(ext != null );
if (ext != null ) {
var fileFilter=((P$.TrackerIO$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
if (f.isDirectory$()) return true;
if (this.$finals$.ext.equals$O($I$(14).getExtension$java_io_File(f))) return true;
return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
var file=$I$(7).getString$S("TMenuBar.Menu.File").toLowerCase$();
return this.$finals$.ext.toUpperCase$() + " " + file + " (." + this.$finals$.ext + ")" ;
});
})()
), Clazz.new_($I$(35,1),[this, {ext:ext}],P$.TrackerIO$5));
$I$(14).chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(fileFilter);
$I$(14).chooser.setFileFilter$javax_swing_filechooser_FileFilter(fileFilter);
}var result=$I$(14).chooser.showSaveDialog$java_awt_Component(null);
var file=$I$(14).chooser.getSelectedFile$();
$I$(14).chooser.resetChoosableFileFilters$();
$I$(14).chooser.setSelectedFile$java_io_File(Clazz.new_($I$(15,1).c$$S,[""]));
if (file == null ) return null;
if (result == 0) {
if (ext != null  && !ext.equals$O($I$(11,"getExtension$S",[file.getName$()])) ) {
var path=file.getAbsolutePath$();
path=$I$(11).stripExtension$S(path) + "." + ext ;
file=Clazz.new_($I$(15,1).c$$S,[path]);
}if (!$I$(14).canWrite$java_io_File(file)) {
return null;
}return file;
}return null;
}, 1);

Clazz.newMeth(C$, 'loadFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (frame, fileList, targetPanel) {
var list=Clazz.new_($I$(8,1));
try {
var frameNumber=-1;
var nf=fileList.size$();
var haveOneVideo=nf == 1 && C$.isVideo$java_io_File(fileList.get$I(0)) ;
var haveOneData=nf == 1 && $I$(14).delimitedTextFileFilter.accept$java_io_File$Z(fileList.get$I(0), false) ;
for (var j=0; j < nf; j++) {
var file=fileList.get$I(j);
$I$(22).cacheJSFile$java_io_File$Z(file, true);
if (!haveOneVideo && !haveOneData ) {
list.add$O($I$(11).getAbsolutePath$java_io_File(file));
} else if (targetPanel == null ) {
list.add$O($I$(11).getAbsolutePath$java_io_File(file));
} else if (haveOneData) {
targetPanel.importDataAsync$S$O$Runnable($I$(11).getAbsolutePath$java_io_File(file), null, null);
} else {
var addFramesAllowed=false;
if (addFramesAllowed && Clazz.instanceOf(targetPanel.getVideo$(), "org.opensourcephysics.media.core.ImageVideo") && C$.isImageFile$java_io_File(file)  ) {
if (frameNumber < 0) {
frameNumber=0;
targetPanel.setMouseCursor$java_awt_Cursor($I$(30).getPredefinedCursor$I(3));
frame.setCursor$java_awt_Cursor($I$(30).getPredefinedCursor$I(3));
if (targetPanel.getVideo$() != null ) {
frameNumber=targetPanel.getVideo$().getFrameNumber$();
}}var added=C$.insertImagesIntoVideo$java_io_FileA$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(Clazz.array($I$(15), -1, [file]), targetPanel, frameNumber + 1);
frameNumber+=added.length;
} else {
var runner=((P$.TrackerIO$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2,"importVideo$S$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Runnable",[this.$finals$.file.getAbsolutePath$(), this.$finals$.targetPanel, null]);
});
})()
), Clazz.new_(P$.TrackerIO$6.$init$,[this, {targetPanel:targetPanel,file:file}]));
C$.run$S$Runnable("TFrame.loadFiles", runner);
}}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
} finally {
if (list.isEmpty$()) {
frame.setCursor$java_awt_Cursor($I$(30).getDefaultCursor$());
} else {
C$.openFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$Runnable(frame, list, ((P$.TrackerIO$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.frame.setCursor$java_awt_Cursor.apply(this.$finals$.frame, [$I$(30).getDefaultCursor$()]);
});
})()
), Clazz.new_(P$.TrackerIO$lambda7.$init$,[this, {frame:frame}])));
}}
return true;
}, 1);

Clazz.newMeth(C$, 'openFileFromDialog$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable',  function (file, frame, whenDone) {
if (file == null ) {
C$.getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(frame, "open", ((P$.TrackerIO$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) /*block*/{
var f=null;
if (files != null ) {
f=files[0];
}if (f == null ) {
this.$finals$.frame.setCursor$java_awt_Cursor.apply(this.$finals$.frame, [$I$(30).getPredefinedCursor$I(0)]);
$I$(10).finer$S("no file to open");
} else {
$I$(2,"openFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$Runnable",[this.$finals$.frame, $I$(2).listOf$java_io_File(f), this.$finals$.whenDone]);
}return null;
});
})()
), Clazz.new_(P$.TrackerIO$lambda8.$init$,[this, {whenDone:whenDone,frame:frame}])));
} else {
C$.openFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$Runnable(frame, C$.listOf$java_io_File(file), whenDone);
}}, 1);

Clazz.newMeth(C$, 'openFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$Runnable',  function (frame, files, whenDone) {
frame.loadedFiles.clear$();
var paths=Clazz.new_($I$(8,1));
for (var i=0; i < files.size$(); i++) {
var next=files.get$I(i);
if (next != null  && !next.contains$CharSequence("/OSP/Cache/")  && $I$(14).trzFileFilter.accept$java_io_File$Z(Clazz.new_($I$(15,1).c$$S,[next]), false) ) paths.add$O(next);
}
C$.startLoading$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable(files, null, frame, null, ((P$.TrackerIO$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
for (var i=0; i < this.$finals$.paths.size$.apply(this.$finals$.paths, []); i++) {
$I$(2,"addToLibrary$org_opensourcephysics_cabrillo_tracker_TFrame$S",[this.$finals$.frame, this.$finals$.paths.get$I.apply(this.$finals$.paths, [i])]);
}
});
})()
), Clazz.new_(P$.TrackerIO$lambda9.$init$,[this, {frame:frame,paths:paths}])));
}, 1);

Clazz.newMeth(C$, 'startLoading$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable',  function (paths, existingPanel, frame, libraryBrowser, whenDone) {
$I$(14).loadIncrementally=true;
var loader=Clazz.new_($I$(36,1).c$$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable,[paths, existingPanel, frame, libraryBrowser, whenDone]);
if (frame == null ) loader.executeSynchronously$();
 else loader.execute$();
return loader;
}, 1);

Clazz.newMeth(C$, 'run$S$Runnable',  function (name, r) {
if (C$.loadInSeparateThread) {
var t=Clazz.new_($I$(26,1).c$$Runnable,[r]);
t.setName$S(name);
t.setPriority$I(5);
t.setDaemon$Z(true);
t.start$();
} else {
r.run$();
}}, 1);

Clazz.newMeth(C$, 'openURL$S$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable',  function (path, frame, whenDone) {
if (frame != null ) frame.loadedFiles.clear$();
return C$.startLoading$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable(C$.listOf$S(path), null, frame, null, ((P$.TrackerIO$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.$finals$.frame != null  && $I$(14).trzFileFilter.accept$java_io_File$Z.apply($I$(14).trzFileFilter, [Clazz.new_($I$(15,1).c$$S,[this.$finals$.path]), false])  && !$I$(12).isHTTP$S(this.$finals$.path)  && !this.$finals$.path.contains$CharSequence.apply(this.$finals$.path, ["/OSP/Cache/"]) ) {
$I$(2).addToLibrary$org_opensourcephysics_cabrillo_tracker_TFrame$S(this.$finals$.frame, this.$finals$.path);
}if (this.$finals$.whenDone != null ) this.$finals$.whenDone.run$();
});
})()
), Clazz.new_(P$.TrackerIO$lambda10.$init$,[this, {path:path,frame:frame,whenDone:whenDone}])));
}, 1);

Clazz.newMeth(C$, 'openFromLibrary$java_util_List$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable',  function (uriPaths, frame, whenDone) {
if (uriPaths == null  || uriPaths.isEmpty$() ) {
return null;
}frame.loadedFiles.clear$();
return C$.startLoading$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable(uriPaths, null, frame, frame.libraryBrowser, whenDone);
}, 1);

Clazz.newMeth(C$, 'addToLibrary$org_opensourcephysics_cabrillo_tracker_TFrame$S',  function (frame, path) {
if (!$I$(22).autoAddLibrary) {
return;
}C$.run$S$Runnable("addToLibrary", ((P$.TrackerIO$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.frame.getLibraryBrowser$.apply(this.$finals$.frame, []).open$S.apply(this.$finals$.frame.getLibraryBrowser$.apply(this.$finals$.frame, []), [this.$finals$.path]);
$I$(22,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.TrackerIO$lambda11$12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda11$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var treePanel=this.$finals$.frame.getLibraryBrowser$.apply(this.$finals$.frame, []).getSelectedTreePanel$.apply(this.$finals$.frame.getLibraryBrowser$.apply(this.$finals$.frame, []), []);
if (treePanel != null ) {
treePanel.refreshSelectedNode$.apply(treePanel, []);
}});
})()
), Clazz.new_(P$.TrackerIO$lambda11$12.$init$,[this, {frame:this.$finals$.frame}]))]);
});
})()
), Clazz.new_(P$.TrackerIO$lambda11.$init$,[this, {path:path,frame:frame}])));
}, 1);

Clazz.newMeth(C$, 'importFile$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var frame=trackerPanel.getTFrame$();
C$.getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(frame, "import file", ((P$.TrackerIO$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) {
if (files != null ) $I$(2).importXMLAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_io_File(this.$finals$.trackerPanel, files[0]);
return null;
});
})()
), Clazz.new_(P$.TrackerIO$7.$init$,[this, {trackerPanel:trackerPanel}])));
}, 1);

Clazz.newMeth(C$, 'importXMLAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_io_File',  function (trackerPanel, file) {
if ($I$(14).trzFileFilter.accept$java_io_File(file) || $I$(14).zipFileFilter.accept$java_io_File(file) ) {
var path=file.getAbsolutePath$();
var contents=$I$(12).getZipContents$S$Z(path, true);
if (contents != null ) {
for (var key, $key = contents.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var entry=contents.get$O(key);
var name=entry.getName$();
if (name != null  && name.toLowerCase$().endsWith$S(".trk") ) {
name=file.getAbsolutePath$() + "!/" + name ;
file=Clazz.new_($I$(15,1).c$$S,[name]);
break;
}}
}}$I$(10).fine$S("importing from " + file);
var control=Clazz.new_([file.getAbsolutePath$()],$I$(17,1).c$$S);
var type=control.getObjectClass$();
if (Clazz.getClass($I$(18)).equals$O(type)) {
C$.choose$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl$Z$Runnable(trackerPanel, control, false, ((P$.TrackerIO$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.trackerPanel.changed=true;
var vidClip=this.$finals$.control.getObject$S.apply(this.$finals$.control, ["videoclip"]);
if (vidClip != null ) {
this.$finals$.trackerPanel.getPlayer$.apply(this.$finals$.trackerPanel, []).setVideoClip$org_opensourcephysics_media_core_VideoClip.apply(this.$finals$.trackerPanel.getPlayer$.apply(this.$finals$.trackerPanel, []), [vidClip]);
}var coords=this.$finals$.control.getObject$S.apply(this.$finals$.control, ["coords"]);
if (coords != null ) this.$finals$.trackerPanel.setCoords$org_opensourcephysics_media_core_ImageCoordSystem.apply(this.$finals$.trackerPanel, [coords]);
var tracks=Clazz.getClass($I$(8)).cast$O.apply(Clazz.getClass($I$(8)), [this.$finals$.control.getObject$S.apply(this.$finals$.control, ["tracks"])]);
if (tracks != null ) {
for (var i=0, n=tracks.size$.apply(tracks, []); i < n; i++) {
this.$finals$.trackerPanel.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.$finals$.trackerPanel, [tracks.get$I.apply(tracks, [i])]);
}
}this.$finals$.trackerPanel.refreshTrackData$I.apply(this.$finals$.trackerPanel, [134217728]);
$I$(24).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.trackerPanel);
});
})()
), Clazz.new_(P$.TrackerIO$lambda12.$init$,[this, {trackerPanel:trackerPanel,control:control}])));
} else {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[trackerPanel.getTFrame$(), $I$(7).getString$S("TrackerPanel.Dialog.LoadFailed.Message") + " " + $I$(11,"getName$S",[$I$(11).getAbsolutePath$java_io_File(file)]) , $I$(7).getString$S("TrackerPanel.Dialog.LoadFailed.Title"), 2]);
}}, 1);

Clazz.newMeth(C$, 'saveVideo$java_io_File$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z',  function (file, trackerPanel, asZipFile, notify) {
var video=trackerPanel.getVideo$();
if (video == null ) return null;
var isImageVideo=Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo");
if (isImageVideo) {
asZipFile=!!(asZipFile|($I$(22).isJS));
var saved=(video).saveInvalidImages$();
if (!saved) return null;
}var source=video.getProperty$S("absolutePath");
var name=$I$(11).getName$S(source);
if (asZipFile) {
var pt=name.indexOf$S("00.");
if (pt > 0) name=name.substring$I$I(0, pt);
}if (file == null  && (file=C$.getChooserFileForName$S(name)) == null  ) {
return null;
}if (asZipFile && !file.getName$().endsWith$S(".zip") ) file=Clazz.new_([file.getAbsolutePath$() + ".zip"],$I$(15,1).c$$S);
var success=true;
var isZipSource=source.endsWith$S(".zip");
if (!isZipSource && (isImageVideo || asZipFile ) ) {
var targetDir=$I$(11,"forwardSlash$S",[file.getParent$()]);
var paths=(isImageVideo ? (video).getValidPaths$() : Clazz.array(String, [video.getFrameCount$()]));
name=file.getName$();
var targets=$I$(37,"getFileNames$S$I$S",[name, paths.length, isImageVideo ? $I$(11).getExtension$S(name) : "png"]);
var jarURLParts=$I$(12).getJarURLParts$S(source);
var srcDir;
if (jarURLParts == null ) {
srcDir=($I$(11).forwardSlash$S(source).contains$CharSequence(":/") ? "" : $I$(11).getDirectoryPath$S(source) + "/");
} else {
srcDir=$I$(11).getDirectoryPath$S(source) + "/";
}var zos=null;
if (asZipFile) {
try {
zos=Clazz.new_([Clazz.new_($I$(39,1).c$$java_io_File,[file])],$I$(38,1).c$$java_io_OutputStream);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
return null;
} else {
throw e;
}
}
}for (var i=0; i < paths.length; i++) {
var $in=(paths[i] == null  ? null : Clazz.new_($I$(15,1).c$$S,[srcDir + paths[i]]));
var out=(zos == null  ? Clazz.new_($I$(15,1).c$$S$S,[targetDir, targets[i]]) : null);
if ($in == null ) {
if (zos == null ) {
success=false;
break;
}try {
zos.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(40,1).c$$S,[targets[i]]));
zos.write$BA(C$.getImageBytes$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, i));
zos.closeEntry$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
success=false;
} else {
throw e;
}
}
} else {
success=$I$(12,"copyAllFiles$java_io_File$O",[$in, zos == null  ? out : zos]);
}if (!success) break;
}
if (zos != null ) {
try {
zos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}if (success && !$I$(22).isJS ) {
var msg=targets.length + " files were saved in " + (asZipFile ? file : targetDir) ;
if (notify) $I$(6).showMessageDialog$java_awt_Component$O$S$I(null, msg, "", 1);
 else System.out.println$S(msg);
}} else {
success=$I$(12,"copyAllFiles$java_io_File$O",[Clazz.new_([$I$(12).getNonURIPath$S(source)],$I$(15,1).c$$S), file]);
}if (!success) return null;
if (notify && !$I$(22).isJS ) {
$I$(23,"addRecent$S$Z",[$I$(11).getAbsolutePath$java_io_File(file), false]);
trackerPanel.getTFrame$().refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(trackerPanel, "TrackerIO.saveVideoOK");
}return file;
}, 1);

Clazz.newMeth(C$, 'importVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Runnable',  function (trackerPanel, whenDone) {
var chooser=$I$(14).getChooser$();
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.ImportVideo.Title"));
var frame=trackerPanel.getTFrame$();
C$.getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(frame, "open video", ((P$.TrackerIO$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) {
var file=(files == null  ? null : files[0]);
if (file != null ) {
$I$(22).cacheJSFile$java_io_File$Z(file, true);
$I$(2,"run$S$Runnable",["importVideo", ((P$.TrackerIO$8$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$8$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(2,"importVideo$S$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Runnable",[this.$finals$.file.getAbsolutePath$.apply(this.$finals$.file, []), this.$finals$.trackerPanel, this.$finals$.whenDone]);
});
})()
), Clazz.new_(P$.TrackerIO$8$lambda13.$init$,[this, {trackerPanel:this.$finals$.trackerPanel,whenDone:this.$finals$.whenDone,file:file}]))]);
}return null;
});
})()
), Clazz.new_(P$.TrackerIO$8.$init$,[this, {trackerPanel:trackerPanel,whenDone:whenDone}])));
}, 1);

Clazz.newMeth(C$, 'importVideo$S$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Runnable',  function (path, trackerPanel, whenDone) {
var frame=trackerPanel.getTFrame$();
frame.loadedFiles.clear$();
$I$(14).loader=C$.startLoading$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable(C$.listOf$S(path), trackerPanel, frame, frame.libraryBrowser, whenDone);
}, 1);

Clazz.newMeth(C$, 'listOf$S',  function (path) {
var list=Clazz.new_($I$(8,1));
list.add$O(path);
return list;
}, 1);

Clazz.newMeth(C$, 'listOf$java_io_File',  function (f) {
var list=Clazz.new_($I$(8,1));
list.add$O($I$(11).getAbsolutePath$java_io_File(f));
return list;
}, 1);

Clazz.newMeth(C$, 'findBadVideoFrames$org_opensourcephysics_cabrillo_tracker_TrackerPanel$D$Z$Z$Z',  function (trackerPanel, tolerance, showDialog, onlyIfFound, showSetDefaultButton) {
var video=trackerPanel.getVideo$();
if (video == null ) return Clazz.new_($I$(41,1));
var outliers=video.getOutliers$D(tolerance);
if (!showDialog || outliers.isEmpty$() && onlyIfFound  ) {
return outliers;
}var format=$I$(42).getInstance$();
var message=$I$(7).getString$S("TrackerIO.Dialog.DurationIsConstant.Message");
var messageType=1;
if (!outliers.isEmpty$()) {
messageType=2;
var last=outliers.length$() - 1;
var maxClear=-1;
var start=0;
var end=0;
var prevBadFrame=-1;
for (var i=outliers.nextSetBit$I(0); i >= 0; i=outliers.nextSetBit$I(i + 1)) {
var clear=i - prevBadFrame - 2 ;
if (clear > maxClear) {
start=prevBadFrame + 1;
end=i - 1;
maxClear=clear;
prevBadFrame=i;
}}
var clip=trackerPanel.getPlayer$().getVideoClip$();
if (clip.getEndFrameNumber$() - last - 1  > maxClear) {
start=last + 1;
end=clip.getEndFrameNumber$();
}format.setMaximumFractionDigits$I(2);
format.setMinimumFractionDigits$I(2);
message=$I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Message1");
message+=" " + ((tolerance * 100)|0) + "%." ;
message+="\n" + $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Message2");
message+="\n" + $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Message3");
message+="\n\n" + $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Message4");
var count=2;
for (var i=outliers.nextSetBit$I(0); i >= 0; i=outliers.nextSetBit$I(i + 1)) {
++count;
message+=" " + i + " (" + format.format$D(video.getFrameDuration$I(i)) + "ms)" ;
if (i < last) message+=",";
if (count % 6 == 0) message+="\n";
}
message+="\n\n" + $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Recommended") + ":  " + $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Start") + " " + start + ",  " + $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.End") + " " + end + "\n " ;
} else {
format.setMaximumFractionDigits$I(2);
format.setMinimumFractionDigits$I(2);
var frameDur=trackerPanel.getPlayer$().getClipControl$().getMeanFrameDuration$();
message+=": " + format.format$D(frameDur) + "ms" ;
}var close=$I$(7).getString$S("Dialog.Button.OK");
var dontShow=$I$(7).getString$S("Tracker.Dialog.NoVideoEngine.Checkbox");
var buttons=showSetDefaultButton ? Clazz.array(String, -1, [dontShow, close]) : Clazz.array(String, -1, [close]);
Clazz.new_($I$(13,1)).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(C$.theFrame, message, $I$(7).getString$S("TrackerIO.Dialog.DurationVaries.Title"), 0, messageType, null, buttons, close, ((P$.TrackerIO$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var response=e.getID$.apply(e, []);
if (response >= 0 && response < this.$finals$.buttons.length  && this.$finals$.buttons[response].equals$O.apply(this.$finals$.buttons[response], [this.$finals$.dontShow]) ) {
$I$(23).warnVariableDuration=false;
}});
})()
), Clazz.new_(P$.TrackerIO$lambda13.$init$,[this, {dontShow:dontShow,buttons:buttons}])));
return null;
}, 1);

Clazz.newMeth(C$, 'insertImagesIntoVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (trackerPanel, startIndex) {
var chooser=$I$(14).getChooser$();
var frame=trackerPanel.getTFrame$();
chooser.setDialogTitle$S($I$(7).getString$S("TrackerIO.Dialog.AddImage.Title"));
C$.getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(frame, "insert images", ((P$.TrackerIO$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) {
if (files == null  || files.length == 0 ) return null;
var paths=Clazz.array(String, [files.length]);
for (var i=0; i < paths.length; i++) {
paths[i]=files[i].getPath$();
}
$I$(43,"postImageVideoEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$SA$I$I$Z",[this.$finals$.trackerPanel, paths, this.$finals$.startIndex, this.$finals$.trackerPanel.getPlayer$().getStepNumber$(), true]);
$I$(2).insertImagesIntoVideo$java_io_FileA$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(files, this.$finals$.trackerPanel, this.$finals$.startIndex);
return null;
});
})()
), Clazz.new_(P$.TrackerIO$9.$init$,[this, {trackerPanel:trackerPanel,startIndex:startIndex}])));
}, 1);

Clazz.newMeth(C$, 'insertImagesIntoVideo$java_io_FileA$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (files, trackerPanel, startIndex) {
if (files == null ) {
return null;
}for (var i=0; i < files.length; i++) {
var file=files[i];
if ($I$(14).imageFileFilter.accept$java_io_File(file)) {
try {
var imageVid=trackerPanel.getVideo$();
imageVid.insert$S$I$Z(file.getAbsolutePath$(), startIndex, files.length == 1);
var clip=trackerPanel.getPlayer$().getVideoClip$();
clip.setStepCount$I(imageVid.getFrameCount$());
trackerPanel.getPlayer$().setStepNumber$I(clip.frameToStep$I(startIndex++));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
} else {
var s=$I$(7).getString$S("TrackerIO.Dialog.NotAnImage.Message1");
if (i < files.length - 1) {
s+=$I$(11).NEW_LINE + $I$(7).getString$S("TrackerIO.Dialog.NotAnImage.Message2");
var result=$I$(6,"showConfirmDialog$java_awt_Component$O$S$I",[trackerPanel, "\"" + file + "\" " + s , $I$(7).getString$S("TrackerIO.Dialog.NotAnImage.Title"), 2]);
if (result != 0) {
if (i == 0) return null;
var inserted=Clazz.array($I$(15), [i]);
System.arraycopy$O$I$O$I$I(files, 0, inserted, 0, i);
$I$(24).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return inserted;
}} else {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[trackerPanel.getTFrame$(), "\"" + file + "\" " + s , $I$(7).getString$S("TrackerIO.Dialog.NotAnImage.Title"), 2]);
if (i == 0) return null;
var inserted=Clazz.array($I$(15), [i]);
System.arraycopy$O$I$O$I$I(files, 0, inserted, 0, i);
$I$(24).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return inserted;
}}}
$I$(24).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return files;
}, 1);

Clazz.newMeth(C$, 'exportXMLFile$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var control=Clazz.new_($I$(17,1).c$$O,[trackerPanel]);
C$.choose$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl$Z$Runnable(trackerPanel, control, true, ((P$.TrackerIO$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(14).getChooser$().setSelectedFile$java_io_File.apply($I$(14).getChooser$(), [Clazz.new_([$I$(21).getString$S("VideoIO.FileName.Untitled") + "." + $I$(14).defaultXMLExt ],$I$(15,1).c$$S)]);
var frame=this.$finals$.trackerPanel.getTFrame$.apply(this.$finals$.trackerPanel, []);
$I$(2,"getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function",[frame, "export file", ((P$.TrackerIO$lambda14$15||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda14$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) /*block*/{
if (files == null ) {
return null;
}var file=files[0];
if (!$I$(14).defaultXMLExt.equals$O.apply($I$(14).defaultXMLExt, [$I$(14).getExtension$java_io_File(file)])) {
var filename=$I$(11,"stripExtension$S",[file.getPath$.apply(file, [])]);
file=Clazz.new_([filename + "." + $I$(14).defaultXMLExt ],$I$(15,1).c$$S);
}if ($I$(14).canWrite$java_io_File(file)) try {
this.$finals$.control.write$java_io_Writer.apply(this.$finals$.control, [Clazz.new_($I$(44,1).c$$java_io_File,[file])]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$.apply(ex, []);
} else {
throw ex;
}
}
return null;
});
})()
), Clazz.new_(P$.TrackerIO$lambda14$15.$init$,[this, {control:this.$finals$.control}]))]);
});
})()
), Clazz.new_(P$.TrackerIO$lambda14.$init$,[this, {control:control,trackerPanel:trackerPanel}])));
}, 1);

Clazz.newMeth(C$, 'choose$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl$Z$Runnable',  function (trackerPanel, control, isExport, ok) {
control.setValue$S$O("clipcontrol", null);
control.setValue$S$O("toolbar", null);
var choices=Clazz.new_($I$(8,1));
var names=Clazz.new_($I$(8,1));
var originals=Clazz.new_($I$(8,1));
var primitives=Clazz.new_($I$(8,1));
var children=control.getChildControls$();
for (var i=0; i < children.length; i++) {
var name=children[i].getPropertyName$();
if (name.equals$O("coords")) {
name=$I$(7).getString$S("TMenuBar.MenuItem.Coords");
} else if (name.equals$O("videoclip")) {
if (children[i].getChildControl$S("video") == null  || $I$(22).isJS ) {
control.setValue$S$O("videoclip", null);
continue;
}name=$I$(7).getString$S("TMenuBar.MenuItem.VideoClip");
}originals.add$O(children[i]);
choices.add$O(children[i]);
names.add$O(name);
}
var it=control.getPropsRaw$().iterator$();
while (it.hasNext$()){
var prop=it.next$();
if ("tracks".indexOf$S(prop.getPropertyName$()) != -1) {
children=prop.getChildControls$();
for (var i=0; i < children.length; i++) {
choices.add$O(children[i]);
names.add$O(children[i].getString$S("name"));
originals.add$O(children[i]);
}
} else if (prop.getPropertyType$() != 6) {
primitives.add$O(prop);
}}
var listener=((P$.TrackerIO$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() != 1001) {
return;
}for (var prop, $prop = this.$finals$.primitives.iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
this.$finals$.control.setValue$S$O(prop.getPropertyName$(), null);
}
this.$finals$.control.getPropertyContent$().removeAll$java_util_Collection(this.$finals$.primitives);
for (var next, $next = this.$finals$.originals.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!this.$finals$.choices.contains$O(next)) {
var prop=next.getParentProperty$();
var parent=prop.getParentProperty$();
if (parent === this.$finals$.control ) {
this.$finals$.control.setValue$S$O(prop.getPropertyName$(), null);
}parent.getPropertyContent$().remove$O(prop);
}}
var deleteTracks=true;
for (var next, $next = this.$finals$.control.getPropertyContent$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var prop=next;
if ("tracks".indexOf$S(prop.getPropertyName$()) > -1) {
deleteTracks=prop.getChildControls$().length == 0;
}}
if (deleteTracks) {
this.$finals$.control.setValue$S$O("tracks", null);
}this.$finals$.ok.run$();
});
})()
), Clazz.new_(P$.TrackerIO$10.$init$,[this, {choices:choices,primitives:primitives,control:control,ok:ok,originals:originals}]));
var dialog=(isExport ? Clazz.new_([$I$(7).getString$S("TrackerIO.Dialog.Export.Title"), $I$(7).getString$S("TrackerIO.Dialog.Export.Message"), trackerPanel, listener],$I$(45,1).c$$S$S$java_awt_Component$java_awt_event_ActionListener) : Clazz.new_([$I$(7).getString$S("TrackerIO.Dialog.Import.Title"), $I$(7).getString$S("TrackerIO.Dialog.Import.Message"), trackerPanel, listener],$I$(45,1).c$$S$S$java_awt_Component$java_awt_event_ActionListener));
dialog.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(choices, names, null, null, null, null);
}, 1);

Clazz.newMeth(C$, 'copyXML$O',  function (obj) {
var control=Clazz.new_($I$(17,1).c$$O,[obj]);
var data=Clazz.new_([control.toXML$()],$I$(46,1).c$$S);
var clipboard=$I$(47).getDefaultToolkit$().getSystemClipboard$();
clipboard.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(data, data);
}, 1);

Clazz.newMeth(C$, 'copyTable$org_opensourcephysics_display_DataTable$Z$S',  function (table, asFormatted, header) {
table.copyTable$Z$S(asFormatted, header);
C$.$dataCopiedToClipboard=true;
}, 1);

Clazz.newMeth(C$, 'copyImage$java_awt_Image',  function (image) {
$I$(47).getDefaultToolkit$().getSystemClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(Clazz.new_($I$(48,1).c$$java_awt_Image,[image]), null);
}, 1);

Clazz.newMeth(C$, 'getClipboardImage$',  function () {
var t=$I$(47).getDefaultToolkit$().getSystemClipboard$().getContents$O(null);
try {
if (t != null  && t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(32).imageFlavor) ) {
var image=t.getTransferData$java_awt_datatransfer_DataFlavor($I$(32).imageFlavor);
return image;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getData$org_opensourcephysics_display_DataTable$Z',  function (table, asFormatted) {
var buf=Clazz.new_($I$(49,1));
var selectedRows=table.getSelectedRows$();
var selectedColumns=table.getSelectedColumns$();
var restoreRows=null;
var restoreColumns=null;
if (selectedRows.length == 0) {
table.selectAll$();
restoreRows=selectedRows;
restoreColumns=selectedColumns;
selectedRows=table.getSelectedRows$();
selectedColumns=table.getSelectedColumns$();
}for (var j=0; j < selectedColumns.length; j++) {
if (table.isRowNumberVisible$() && selectedColumns[j] == 0 ) continue;
buf.append$S(table.getColumnName$I(selectedColumns[j]));
if (j < selectedColumns.length - 1) buf.append$S($I$(14).delimiter);
}
buf.append$S($I$(11).NEW_LINE);
var nf=$I$(42).getInstance$();
nf.applyPattern$S("0.000000000E0");
nf.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(22).getDecimalFormatSymbols$());
var df=$I$(50).getInstance$();
for (var i=0; i < selectedRows.length; i++) {
for (var j=0; j < selectedColumns.length; j++) {
var temp=table.convertColumnIndexToModel$I(selectedColumns[j]);
if (table.isRowNumberVisible$()) {
if (temp == 0) {
continue;
}}var value=null;
if (asFormatted) {
value=table.getFormattedValueAt$I$I(selectedRows[i], selectedColumns[j]);
} else {
value=table.getValueAt$I$I(selectedRows[i], selectedColumns[j]);
if (value != null ) {
if (Clazz.instanceOf(value, "java.lang.Number")) {
value=nf.format$O(value);
} else if (Clazz.instanceOf(value, "java.util.Date")) {
value=df.format$O(value);
}}}if (value != null ) {
buf.append$O(value);
}if (j < selectedColumns.length - 1) buf.append$S($I$(14).delimiter);
}
buf.append$S($I$(11).NEW_LINE);
}
if (restoreRows != null  && restoreColumns != null  ) {
table.clearSelection$();
for (var row, $row = 0, $$row = restoreRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) table.addRowSelectionInterval$I$I(row, row);

for (var col, $col = 0, $$col = restoreColumns; $col<$$col.length&&((col=($$col[$col])),1);$col++) table.addColumnSelectionInterval$I$I(col, col);

}return buf;
}, 1);

Clazz.newMeth(C$, 'addCustomDelimiter$S',  function (custom) {
if (!C$.getDelimiters$().values$().contains$O(custom)) {
$I$(14).customDelimiters.put$O$O(custom, custom);
}}, 1);

Clazz.newMeth(C$, 'removeCustomDelimiter$S',  function (custom) {
if ($I$(14).getDelimiter$().equals$O(custom)) $I$(14,"setDelimiter$S",[$I$(14).defaultDelimiter]);
var selected=null;
for (var key, $key = $I$(14).customDelimiters.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if ($I$(14).customDelimiters.get$O(key).equals$O(custom)) selected=key;
}
if (selected != null ) $I$(14).customDelimiters.remove$O(selected);
}, 1);

Clazz.newMeth(C$, 'findPageViewFiles$org_opensourcephysics_controls_XMLControl$java_util_Map$S',  function (control, pageViewFiles, trkPath) {
var xml=control.toXML$();
var token="PageTView$TabView";
var j=xml.indexOf$S(token);
while (j > -1){
xml=xml.substring$I(j + token.length$());
token="<property name=\"text\" type=\"string\">";
j=xml.indexOf$S(token);
var path=xml.substring$I(j + token.length$());
j=path.indexOf$S("</property>");
path=path.substring$I$I(0, j);
if (path.endsWith$S(".html") || path.endsWith$S(".htm") ) {
var base=$I$(11).getDirectoryPath$S(trkPath);
var res="".equals$O(base) ? $I$(12).getResource$S(path) : $I$(12).getResource$S(base + "/" + path );
if (res != null ) {
var urlPath=res.getURL$().toExternalForm$();
if ($I$(22).unzipFiles) {
var zipPath=$I$(12,"getNonURIPath$S",[res.getAbsolutePath$()]);
var n=zipPath.indexOf$S("!/");
if (n > 0) {
$I$(12,"unzip$S",[zipPath.substring$I$I(0, n)]);
var target=Clazz.new_([$I$(12).tempDirFile, path],$I$(15,1).c$$java_io_File$S);
if (target.exists$()) {
res=$I$(12,"getResource$S",[target.getAbsolutePath$()]);
urlPath=res.getURL$().toExternalForm$();
} else {
path=null;
}}}if (path != null ) {
pageViewFiles.put$O$O(path, urlPath);
}}}token="PageTView$TabView";
j=xml.indexOf$S(token);
}
}, 1);

Clazz.newMeth(C$, 'closeMonitor$S',  function (fileName) {
for (var monitor, $monitor = C$.monitors.iterator$(); $monitor.hasNext$()&&((monitor=($monitor.next$())),1);) {
if (fileName == null ) {
monitor.close$();
} else if ($I$(11,"forwardSlash$S",[monitor.getName$()]).endsWith$S($I$(11).forwardSlash$S(fileName))) {
monitor.close$();
C$.monitors.remove$O(monitor);
return;
}}
C$.monitors.clear$();
}, 1);

Clazz.newMeth(C$, 'setProgress$S$S$I',  function (name, string, framesLoaded) {
for (var monitor, $monitor = C$.monitors.iterator$(); $monitor.hasNext$()&&((monitor=($monitor.next$())),1);) {
var monitorName=$I$(11,"forwardSlash$S",[monitor.getName$()]);
if (monitorName.endsWith$S(name)) {
var progress;
if (monitor.getFrameCount$() > 0) {
progress=20 + ((framesLoaded * 60.0 / monitor.getFrameCount$())|0);
} else {
progress=20 + (((framesLoaded/20|0)) % 60);
}monitor.setProgressAsync$I(progress);
monitor.setTitle$S($I$(7).getString$S("TFrame.ProgressDialog.Title.FramesLoaded") + ": " + framesLoaded );
break;
}}
}, 1);

Clazz.newMeth(C$, 'getVideoFormats$',  function () {
return C$.videoFormatDescriptions.toArray$();
}, 1);

Clazz.newMeth(C$, 'refreshVideoFormats$',  function () {
C$.videoFormats.clear$();
C$.videoFormatDescriptions.clear$();
for (var next, $next = $I$(14).getVideoTypes$Z(true).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var desc=next.getDescription$();
C$.videoFormats.put$O$O(desc, next);
C$.videoFormatDescriptions.add$O(desc);
}
}, 1);

Clazz.newMeth(C$, 'getVideoFormat$S',  function (preferredExtension) {
var extensions=preferredExtension.split$S(" ");
var selected=C$.selectedVideoFormat;
var hasSelected=false;
var preferred=null;
for (var format, $format = C$.videoFormatDescriptions.iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
if (format.equals$O(selected)) hasSelected=true;
if (preferred == null  && format.contains$CharSequence("." + extensions[0]) ) {
if (extensions.length > 1) {
var type=C$.videoFormats.get$O(format);
if (!type.getImageExtension$().equals$O(extensions[1])) continue;
}preferred=format;
}}
return (preferred == null  && hasSelected  ? selected : preferred);
}, 1);

Clazz.newMeth(C$, 'isImageFile$java_io_File',  function (file) {
if (C$.imageFilters == null ) C$.imageFilters=Clazz.new_($I$(51,1)).getFileFilters$();
for (var i=0; i < C$.imageFilters.length; i++) {
if (C$.imageFilters[i].accept$java_io_File(file)) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'isVideo$java_io_File',  function (f) {
if (C$.videoFilter == null ) C$.videoFilter=Clazz.new_($I$(52,1));
return C$.videoFilter.accept$java_io_File(f);
}, 1);

Clazz.newMeth(C$, 'exportVideoImages$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S',  function (panel, exportVideoName) {
if (panel != null ) C$.saveVideo$java_io_File$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z(Clazz.new_($I$(15,1).c$$S,[exportVideoName]), panel, true, false);
}, 1);

Clazz.newMeth(C$, 'getImageBytes$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (panel, i) {
var video=panel.getVideo$();
video.setNotify$Z(false);
video.setFrameNumber$I(i);
video.setNotify$Z(true);
var img=video.getRawBufferedImage$();
var bos=Clazz.new_($I$(53,1));
$I$(54).write$java_awt_image_RenderedImage$S$java_io_OutputStream(img, "png", bos);
return bos.toByteArray$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.XUGGLE_VIDEO_EXTENSIONS=Clazz.array(String, -1, ["mov", "flv", "mp4", "wmv", "avi"]);
C$.NULL_RUNNABLE=(P$.TrackerIO$lambda1$||(P$.TrackerIO$lambda1$=(((P$.TrackerIO$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
});
})()
), Clazz.new_(P$.TrackerIO$lambda1.$init$,[this, null])))));
C$.isffmpegError=false;
C$.loadInSeparateThread=true;
C$.monitors=Clazz.new_($I$(9,1));
C$.defaultBadFrameTolerance=0.2;
{

{}
$I$(14).zipFileFilter=Clazz.new_(["zip", $I$(7).getString$S("TrackerIO.ZipFileFilter.Description")],$I$(33,1).c$$S$S);
$I$(14).trzFileFilter=Clazz.new_(["trz", $I$(7).getString$S("TrackerIO.ZIPResourceFilter.Description")],$I$(33,1).c$$S$S);
$I$(14).txtFileFilter=Clazz.new_(["txt", $I$(7).getString$S("TrackerIO.TextFileFilter.Description")],$I$(33,1).c$$S$S);
$I$(14).jarFileFilter=Clazz.new_(["jar", $I$(7).getString$S("TrackerIO.JarFileFilter.Description")],$I$(33,1).c$$S$S);
$I$(14).trkFileFilter=((P$.TrackerIO$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkDir) {
return (checkDir && f.isDirectory$()  || $I$(14).zipFileFilter.accept$java_io_File$Z(f, false)  || $I$(14).trzFileFilter.accept$java_io_File$Z(f, false)  || C$.superclazz.prototype.accept$java_io_File$Z.apply(this, [f, false]) );
});
})()
), Clazz.new_([this, null, "trk", $I$(7).getString$S("TrackerIO.DataFileFilter.Description")],$I$(33,1).c$$S$S,P$.TrackerIO$2));
$I$(14).videoAndTrkFileFilter=((P$.TrackerIO$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkDir) {
return (checkDir && f.isDirectory$()  || $I$(14).trkFileFilter.accept$java_io_File$Z(f, false)  || $I$(14).videoFileFilter.accept$java_io_File$Z(f, false)  || C$.superclazz.prototype.accept$java_io_File$Z.apply(this, [f, false]) );
});
})()
), Clazz.new_([this, null, null, $I$(7).getString$S("TrackerIO.VideoAndDataFileFilter.Description")],$I$(33,1).c$$S$S,P$.TrackerIO$3));
$I$(14).delimitedTextFileFilter=((P$.TrackerIO$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File$Z',  function (f, checkDir) {
var ext=$I$(14).getExtension$java_io_File(f);
return (checkDir && f.isDirectory$()  || "txt".equalsIgnoreCase$S(ext)  || "csv".equalsIgnoreCase$S(ext) );
});
})()
), Clazz.new_($I$(33,1).c$$S$S,[this, null, null, "Delimited Text Files"],P$.TrackerIO$4));
};
C$.videoFormatDescriptions=Clazz.new_($I$(34,1));
C$.videoFormats=Clazz.new_($I$(25,1));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.TrackerIO, "TrackerMonitor", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackerIO, "ComponentImage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.print.Printable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.image.BufferedImage','c','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (comp) {
;C$.$init$.apply(this);
this.c=comp;
if (Clazz.instanceOf(comp, "javax.swing.JFrame")) comp=(comp).getContentPane$();
 else if (Clazz.instanceOf(comp, "javax.swing.JDialog")) comp=(comp).getContentPane$();
var w=(comp.isVisible$()) ? comp.getWidth$() : comp.getPreferredSize$().width;
var h=(comp.isVisible$()) ? comp.getHeight$() : comp.getPreferredSize$().height;
this.image=Clazz.new_($I$(1,1).c$$I$I$I,[w, h, 5]);
if (Clazz.instanceOf(comp, "org.opensourcephysics.display.Renderable")) this.image=(comp).render$java_awt_image_BufferedImage(this.image);
 else {
var g=this.image.getGraphics$();
comp.paint$java_awt_Graphics(g);
g.dispose$();
}}, 1);

Clazz.newMeth(C$, 'getImage$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'copyToClipboard$',  function () {
$I$(2).copyImage$java_awt_Image(this.image);
});

Clazz.newMeth(C$, 'print$',  function () {
var printerJob=$I$(3).getPrinterJob$();
var format=Clazz.new_($I$(4,1));
var book=Clazz.new_($I$(5,1));
book.append$java_awt_print_Printable$java_awt_print_PageFormat(this, format);
printerJob.setPageable$java_awt_print_Pageable(book);
if (printerJob.printDialog$()) {
try {
printerJob.print$();
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.awt.print.PrinterException")){
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[this.c, $I$(7).getString$S("TActions.Dialog.PrintError.Message"), $I$(7).getString$S("TActions.Dialog.PrintError.Title"), 0]);
} else {
throw pe;
}
}
}});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I',  function (g, pageFormat, pageIndex) {
if (pageIndex >= 1) {
return 1;
}if (g == null ) {
return 1;
}var g2=g;
var scalex=pageFormat.getImageableWidth$() / this.image.getWidth$();
var scaley=pageFormat.getImageableHeight$() / this.image.getHeight$();
var scale=Math.min(scalex, scaley);
scale=Math.min(scale, 1.0);
g2.translate$I$I((pageFormat.getImageableX$()|0), (pageFormat.getImageableY$()|0));
g2.scale$D$D(scale, scale);
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, null);
return 0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackerIO, "AsyncLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javajs.async.AsyncSwingWorker', [['org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.cabrillo.tracker.TrackerIO.TrackerMonitor'], ['org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XMLControlElement.FrameDataAdjusterI']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.desktopFiles=Clazz.new_($I$(8,1));
this.type=0;
this.panelList=Clazz.new_($I$(9,1));
},1);

C$.$fields$=[['Z',['panelChanged','ignoreLowMemory'],'I',['type','frameCount','videoCount'],'S',['rawPath','nonURIPath','path','path0','name','xmlPath','xmlPath0'],'O',['paths','java.util.List','existingPanelID','Integer','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','desktopFiles','java.util.ArrayList','video','org.opensourcephysics.media.core.Video','control','org.opensourcephysics.controls.XMLControlElement','whenDone','Runnable','panelList','java.util.Set','libraryBrowser','org.opensourcephysics.tools.LibraryBrowser','loader','org.opensourcephysics.cabrillo.tracker.TrackerPanel.Loader','panel','org.opensourcephysics.cabrillo.tracker.TrackerPanel']]]

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(10).finalized$O(this);
});

Clazz.newMeth(C$, 'c$$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_tools_LibraryBrowser$Runnable',  function (paths, existingPanel, frame, libraryBrowser, whenDone) {
;C$.superclazz.c$$java_awt_Component$S$I$I$I.apply(this,[frame, "Loading " + $I$(11,"getName$S",[paths.get$I(0)]), (frame == null  || whenDone == null   ? 0 : 10), 0, 100]);C$.$init$.apply(this);
if (whenDone != null  && frame != null  ) {
frame.setFrameBlocker$Z$org_opensourcephysics_cabrillo_tracker_TrackerPanel(true, null);
}this.path=this.path0=this.name=paths.remove$I(0);
this.paths=paths;
this.isAsync=(this.delayMillis > 0);
this.existingPanelID=(existingPanel == null  ? null : existingPanel.getID$());
this.frame=frame;
this.libraryBrowser=libraryBrowser;
this.whenDone=whenDone;
$I$(2).monitors.add$O(this);
}, 1);

Clazz.newMeth(C$, 'initAsync$',  function () {
p$1.setupLoader.apply(this, []);
});

Clazz.newMeth(C$, 'setupLoader',  function () {
this.ignoreLowMemory=false;
this.xmlPath=null;
this.panelID=null;
this.panelChanged=false;
this.nonURIPath=null;
this.frameCount=0;
this.control=null;
this.rawPath=this.path;
this.path=$I$(12).getURIPath$S(this.path);
$I$(2).isffmpegError=false;
$I$(2).theFrame=this.frame;
this.nonURIPath=$I$(12).getNonURIPath$S(this.path);
if (this.rawPath.startsWith$S("//") && this.nonURIPath.startsWith$S("/") && !this.nonURIPath.startsWith$S("//")  ) this.nonURIPath="/" + this.nonURIPath;
if (this.frame != null  && this.frame.loadedFiles.contains$O(this.nonURIPath) ) {
return false;
}if (this.frame != null ) this.frame.loadedFiles.add$O(this.nonURIPath);
if (!$I$(12).isHTTP$S(this.path)) {
if (this.path.contains$CharSequence("&")) {
Clazz.new_($I$(13,1)).showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, $I$(7).getString$S("ZipResourceDialog.Dialog.BadFileName.Message") + " \n\"&\"", $I$(7).getString$S("ZipResourceDialog.Dialog.BadFileName.Title"), 2, (P$.TrackerIO$AsyncLoader$lambda1$||(P$.TrackerIO$AsyncLoader$lambda1$=(((P$.TrackerIO$AsyncLoader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$AsyncLoader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
});
})()
), Clazz.new_(P$.TrackerIO$AsyncLoader$lambda1.$init$,[this, null]))))));
$I$(14).setCanceled$Z(true);
return false;
}this.path=this.nonURIPath;
}$I$(14).setCanceled$Z(false);
var paths=$I$(14).getZippedImagePaths$S(this.path);
if ($I$(14).zipFileFilter.accept$java_io_File(Clazz.new_($I$(15,1).c$$S,[this.path])) && paths != null  ) {
this.type=4;
if (!$I$(12).isHTTP$S(this.path)) this.path=paths[0];
p$1.newPanel.apply(this, []);
return true;
}var testFile=Clazz.new_($I$(16,1).c$$S,[this.path]);
if ($I$(14).videoFileFilter.accept$java_io_File$Z(testFile, false)) {
this.type=4;
p$1.newPanel.apply(this, []);
return true;
}var isTRZ=$I$(12).isJarZipTrz$S$Z(this.path, false);
if (isTRZ || this.path.indexOf$S("&TrackerSet=") >= 0 ) {
this.type=1;
if (this.frame != null ) this.frame.holdPainting$Z(true);
return true;
}for (var ext, $ext = 0, $$ext = $I$(14).KNOWN_VIDEO_EXTENSIONS; $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
if (this.path.endsWith$S("." + ext)) {
this.type=5;
return true;
}}
if ($I$(14).delimitedTextFileFilter.accept$java_io_File$Z(testFile, false)) {
this.type=6;
p$1.newPanel.apply(this, []);
return true;
}this.control=Clazz.new_($I$(17,1));
this.xmlPath=this.control.read$S(this.path);
if (this.path.equals$O(this.path0)) this.xmlPath0=this.xmlPath;
if ($I$(14).isCanceled$()) {
this.cancelAsync$();
return false;
}var ctype=this.control.getObjectClass$();
if (Clazz.getClass($I$(18)).isAssignableFrom$Class(ctype)) {
this.type=2;
if (this.panelID == null ) this.panelID=(this.frame == null  ? (this.panel=Clazz.new_($I$(18,1).c$$Z,[false])).getID$() : this.frame.getCleanTrackerPanel$().getID$());
return true;
}if (Clazz.getClass($I$(19)).isAssignableFrom$Class(ctype)) {
this.type=3;
return true;
}if (Clazz.getClass($I$(20)).isAssignableFrom$Class(ctype)) {
this.type=7;
return true;
}if (this.frame == null ) return !this.control.failedToRead$();
if (this.control.failedToRead$()) {
$I$(6,"showMessageDialog$java_awt_Component$O",[this.frame, $I$(21).getString$S("VideoIO.Dialog.BadFile.Message") + $I$(12).getNonURIPath$S(this.path)]);
} else {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, "\"" + $I$(11).getName$S(this.path) + "\" " + $I$(21).getString$S("VideoIO.Dialog.XMLMismatch.Message") , $I$(21).getString$S("VideoIO.Dialog.XMLMismatch.Title"), 2]);
}$I$(14).setCanceled$Z(true);
this.cancelAsync$();
return false;
}, p$1);

Clazz.newMeth(C$, 'newPanel',  function () {
this.panelID=(this.existingPanelID == null  ? this.frame.getCleanTrackerPanel$().getID$() : this.existingPanelID);
this.panelChanged=this.panel$().changed;
}, p$1);

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (progress) {
if ($I$(14).isCanceled$()) {
this.cancelAsync$();
return 100;
}switch (this.type) {
case 3:
progress=p$1.loadFrame$I.apply(this, [progress]);
break;
case 1:
progress=p$1.loadTRZ$I.apply(this, [progress]);
break;
case 2:
progress=p$1.loadTRK$I.apply(this, [progress]);
break;
case 4:
++this.videoCount;
progress=p$1.loadVideo$I.apply(this, [progress]);
break;
case 5:
$I$(14,"handleUnsupportedVideo$S$S$S$org_opensourcephysics_media_core_VideoPanel$S",[this.path, $I$(11).getExtension$S(this.path), null, this.panel$(), "TrackerIO.unsupp video-asyncLoad"]);
return 100;
case 6:
progress=p$1.loadData$I.apply(this, [progress]);
break;
case 7:
progress=p$1.loadCollection$I.apply(this, [progress]);
break;
default:
return 100;
}
if (progress == 100) {
if (this.paths.size$() > 0) {
this.path=this.paths.remove$I(0);
if (p$1.setupLoader.apply(this, [])) progress=0;
} else if (this.frame != null ) {
this.frame.removeEmptyTabIfTabCountGreaterThan$I(1);
}} else if (!$I$(22).isJS) {
switch ($I$(23).checkMemory$org_opensourcephysics_cabrillo_tracker_TFrame$Z(this.frame, this.ignoreLowMemory)) {
case 0:
break;
case 1:
this.ignoreLowMemory=true;
$I$(24,"refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]);
break;
case 2:
case 3:
$I$(14).setCanceled$Z(true);
this.cancelAsync$();
$I$(24,"refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]);
break;
case 4:
$I$(14).setCanceled$Z(true);
this.cancelAsync$();
$I$(23).askToSetMemory$org_opensourcephysics_cabrillo_tracker_TFrame(this.frame);
break;
}
}return progress;
});

Clazz.newMeth(C$, 'panel$',  function () {
return (this.frame == null  ? this.panel : this.frame.getTrackerPanelForID$Integer(this.panelID));
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
if (this.path.equals$O(this.path0)) {
p$1.doneLoading.apply(this, []);
}});

Clazz.newMeth(C$, 'loadFrame$I',  function (progress) {
if (this.frame != null ) this.frame.whenObjectLoadingComplete=((P$.TrackerIO$AsyncLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$AsyncLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_util_List','apply$O'],  function (files) {
if (files.size$() > 0) {
var dataFile=Clazz.new_([files.remove$I(0)],$I$(15,1).c$$S);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].paths.addAll$java_util_Collection(files);
var done=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].whenDone;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].whenDone=((P$.TrackerIO$AsyncLoader$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$AsyncLoader$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].frame.setSelectedTab$java_io_File(this.$finals$.dataFile);
if (this.$finals$.done != null ) this.$finals$.done.run$();
});
})()
), Clazz.new_(P$.TrackerIO$AsyncLoader$1$1.$init$,[this, {dataFile:dataFile,done:done}]));
}return null;
});
})()
), Clazz.new_(P$.TrackerIO$AsyncLoader$1.$init$,[this, null]));
this.control.loadObject$O(this.frame);
return 100;
}, p$1);

Clazz.newMeth(C$, 'loadTRZ$I',  function (progress) {
var pageViewTabs=Clazz.new_($I$(25,1));
var name=$I$(11,"getName$S",[$I$(12).getNonURIPath$S(this.path)]);
var isWebPath=$I$(12).isHTTP$S(this.path);
if (isWebPath) {
var localFile=$I$(12).downloadToOSPCache$S$S$Z(this.path, name, false);
if (localFile == null ) {
this.path=null;
} else {
this.path=$I$(12,"getURIPath$S",[localFile.getAbsolutePath$()]);
$I$(10).debug$S("TrackerIO downloaded zip file: " + this.path);
}}var contents=(this.path == null  ? null : $I$(12).getZipContents$S$Z(this.path, true));
if (contents == null ) {
if (this.frame != null ) this.frame.sayFileNotFound$S(this.path == null  ? name : this.path);
this.cancelAsync$();
return 100;
}var trkFiles=Clazz.new_($I$(8,1));
var htmlFiles=Clazz.new_($I$(8,1));
var pdfFiles=Clazz.new_($I$(8,1));
var otherFiles=Clazz.new_($I$(8,1));
var tempFiles=Clazz.new_($I$(8,1));
var trkForTFrame=null;
var baseName=$I$(11).stripExtension$S(name);
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.indexOf$S("_thumbnail") > -1) {
var thumb=$I$(11).getName$S(next);
baseName=thumb.substring$I$I(0, thumb.indexOf$S("_thumbnail"));
break;
}}
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.endsWith$S(".trk")) {
var s=$I$(12).getURIPath$S(this.path + "!/" + next );
trkFiles.add$O(s);
} else if (next.endsWith$S(".pdf")) {
pdfFiles.add$O(next);
} else if (next.endsWith$S(".html") || next.endsWith$S(".htm") ) {
var nextName=$I$(11).getName$S(next);
if ($I$(11).stripExtension$S(nextName).equals$O(baseName + "_info")) {
continue;
}htmlFiles.add$O(next);
} else if (next.indexOf$S("thumbnail") == -1 && next.indexOf$S("/") == -1  && !$I$(14).isKnownVideoExtension$S(next) ) {
otherFiles.add$O(next);
}}
contents=null;
if (this.frame != null  && trkFiles.isEmpty$() ) {
var s=$I$(7).getString$S("TrackerIO.Dialog.NotATrackerFile.Message");
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, s + " \"" + name + "\"." , $I$(7).getString$S("TFrame.Dialog.LibraryError.Title"), 2]);
return 100;
}var haveHTML=!htmlFiles.isEmpty$();
if (!trkFiles.isEmpty$()) {
var trkNames=Clazz.new_($I$(8,1));
for (var next, $next = trkFiles.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
trkNames.add$O($I$(11,"stripExtension$S",[$I$(11).getName$S(next)]));
try {
var data= String.instantialize($I$(12).getZipEntryBytes$S$S$java_io_File(this.path, next, null));
var className=$I$(17).getClassName$S(data);
if (className.endsWith$S("TrackerPanel")) {
if (haveHTML) $I$(2,"findPageViewFiles$org_opensourcephysics_controls_XMLControl$java_util_Map$S",[Clazz.new_($I$(17,1).c$$S,[data]), pageViewTabs, next]);
} else if (trkForTFrame == null  && className.endsWith$S("TFrame") ) {
trkForTFrame=next;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
if (!htmlFiles.isEmpty$()) {
var paths=htmlFiles.toArray$OA(Clazz.array(String, [htmlFiles.size$()]));
for (var htmlPath, $htmlPath = 0, $$htmlPath = paths; $htmlPath<$$htmlPath.length&&((htmlPath=($$htmlPath[$htmlPath])),1);$htmlPath++) {
var isPageView=false;
for (var page, $page = pageViewTabs.keySet$().iterator$(); $page.hasNext$()&&((page=($page.next$())),1);) {
isPageView=isPageView || htmlPath.endsWith$S(page) ;
}
if (isPageView) {
htmlFiles.remove$O(htmlPath);
}for (var trkName, $trkName = trkNames.iterator$(); $trkName.hasNext$()&&((trkName=($trkName.next$())),1);) {
if (htmlPath.contains$CharSequence(trkName + "_info.")) {
htmlFiles.remove$O(htmlPath);
}}
}
}if (trkForTFrame != null ) {
trkFiles.clear$();
trkFiles.add$O(trkForTFrame);
}}if (!htmlFiles.isEmpty$() || !pdfFiles.isEmpty$() || !otherFiles.isEmpty$()  ) {
if ($I$(22).unzipFiles) {
for (var next, $next = $I$(12).unzip$S(this.path).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.deleteOnExit$();
var relPath=$I$(11,"getPathRelativeTo$S$S",[next.getPath$(), $I$(12).tempDirFile.getPath$()]);
if (pdfFiles.contains$O(relPath) || htmlFiles.contains$O(relPath) || otherFiles.contains$O(relPath)  ) {
var tempPath=$I$(12,"getURIPath$S",[next.getAbsolutePath$()]);
tempFiles.add$O(tempPath);
}}
} else {
tempFiles.addAll$java_util_Collection(htmlFiles);
tempFiles.addAll$java_util_Collection(pdfFiles);
tempFiles.addAll$java_util_Collection(otherFiles);
}if (!$I$(22).getSkipDisplayOfPDF$()) {
var displayURLOpener=Clazz.new_([((P$.TrackerIO$AsyncLoader$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$AsyncLoader$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
for (var relpath, $relpath = this.$finals$.tempFiles.iterator$(); $relpath.hasNext$()&&((relpath=($relpath.next$())),1);) {
if (!$I$(12).wasPDFOpen$S(relpath)) $I$(27,"displayURL$S",[$I$(22).unzipFiles ? relpath : this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].path + "!/" + relpath ]);
}
});
})()
), Clazz.new_(P$.TrackerIO$AsyncLoader$lambda2.$init$,[this, {tempFiles:tempFiles}]))],$I$(26,1).c$$Runnable);
displayURLOpener.setName$S("displayURLOpener");
displayURLOpener.start$();
} else if (!tempFiles.isEmpty$()) {
for (var relpath, $relpath = tempFiles.iterator$(); $relpath.hasNext$()&&((relpath=($relpath.next$())),1);) {
var s=$I$(22).unzipFiles ? relpath : this.path + "!/" + relpath ;
$I$(6).showMessageDialog$java_awt_Component$O$S$I(null, s, "Cannot show supplemental files.", 1);
}
}}if (!$I$(14).isCanceled$()) {
if (this.path.equals$O(this.nonURIPath)) $I$(23).addRecent$S$Z(this.nonURIPath, false);
this.paths.addAll$java_util_Collection(trkFiles);
if ($I$(22).unzipFiles) {
this.desktopFiles.addAll$java_util_Collection(tempFiles);
} else {
for (var f, $f = tempFiles.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.desktopFiles.add$O(this.path + "!/" + f );
}
}}return 100;
}, p$1);

Clazz.newMeth(C$, 'loadTRK$I',  function (progress) {
this.panelList.add$O(this.panelID);
var trackerPanel=this.panel$();
if (this.loader != null  && this.loader.control === this.control  ) {
this.loader.loadObject$org_opensourcephysics_controls_XMLControl$O(this.control, trackerPanel);
} else {
this.control.loadObject$O$O(trackerPanel, this);
}var p=trackerPanel.getProgress$();
if (p < 100) {
if (p == 10) ++this.videoCount;
return p;
}trackerPanel.setIgnoreRepaint$Z(true);
$I$(2).findPageViewFiles$org_opensourcephysics_controls_XMLControl$java_util_Map$S(this.control, trackerPanel.pageViewFilePaths, this.path);
while (this.desktopFiles.size$() > 0){
trackerPanel.supplementalFilePaths.add$O(this.desktopFiles.remove$I(0));
}
if ($I$(12).isJarZipTrz$S$Z(this.xmlPath, true)) {
var parent=this.xmlPath.substring$I$I(0, this.xmlPath.indexOf$S("!"));
parent=$I$(12).getNonURIPath$S(parent);
var parentName=$I$(11,"stripExtension$S",[$I$(11).getName$S(parent)]);
var tabName=$I$(11,"stripExtension$S",[$I$(11).getName$S(this.xmlPath)]);
if (tabName.startsWith$S(parentName) && parentName.length$() + 1 < tabName.length$() ) {
tabName=tabName.substring$I$I(parentName.length$() + 1, tabName.length$());
}trackerPanel.openedFromPath=parent;
trackerPanel.defaultFileName=tabName;
var html=$I$(12).getString$S(parent + "!/html/" + parentName + "_info.html" );
if (html != null ) {
var metadata=$I$(28).getMetadataFromHTML$S(html);
for (var i=0; i < metadata.size$(); i++) {
var meta=metadata.get$I(i);
var key=meta[0];
var value=meta[1];
if (trackerPanel.author == null  && "Author".toLowerCase$().contains$CharSequence(key.toLowerCase$()) ) {
trackerPanel.author=value;
} else if (trackerPanel.contact == null  && "Contact".toLowerCase$().contains$CharSequence(key.toLowerCase$()) ) {
trackerPanel.contact=value;
}}
}} else {
trackerPanel.defaultFileName=$I$(11).getName$S(this.path);
trackerPanel.openedFromPath=this.path;
trackerPanel.setDataFile$java_io_File(Clazz.new_([$I$(12).getNonURIPath$S(this.path)],$I$(15,1).c$$S));
}if ($I$(14).isCanceled$()) {
this.cancelAsync$();
return 100;
}if (this.frame != null ) this.frame.addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable(trackerPanel, 1, null);
trackerPanel.setIgnoreRepaint$Z(false);
if (this.control.failedToRead$()) {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[trackerPanel.getTFrame$(), "\"" + $I$(11).getName$S(this.path) + "\" " + $I$(7).getString$S("TrackerIO.Dialog.ReadFailed.Message") , $I$(7).getString$S("TrackerIO.Dialog.ReadFailed.Title"), 2]);
}this.checkDone$Z(false);
this.control=null;
this.libraryBrowser=null;
this.loader=null;
if (this.path.equals$O(this.nonURIPath) && !this.path.contains$CharSequence("!/") ) $I$(23).addRecent$S$Z(this.nonURIPath, false);
return 100;
}, p$1);

Clazz.newMeth(C$, 'loadCollection$I',  function (progress) {
if (this.frame != null ) {
var browser=this.frame.getLibraryBrowser$();
browser.setVisible$Z(true);
browser.open$S(this.path);
}return 100;
}, p$1);

Clazz.newMeth(C$, 'checkDone$Z',  function (b) {
if (this.panelList.size$() == 0 && this.paths.size$() == 0 ) p$1.doneLoading.apply(this, []);
});

Clazz.newMeth(C$, 'loadData$I',  function (progress) {
if (this.frame != null ) this.frame.addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable(this.panel$(), 1, null);
this.panel$().importDataAsync$S$O$Runnable(this.path, null, null);
return 100;
}, p$1);

Clazz.newMeth(C$, 'loadVideo$I',  function (progress) {
var logConsole=$I$(10).isConsoleMessagesLogged$();
if (progress == 0) {
if (!$I$(14,"checkMP4$S$org_opensourcephysics_tools_LibraryBrowser$org_opensourcephysics_media_core_VideoPanel",[this.path, this.libraryBrowser, this.panel$()])) return 100;
if ($I$(12).isHTTP$S(this.path)) {
var name=$I$(12,"getNonURIPath$S",[$I$(11).getName$S(this.path)]);
var localFile=$I$(12).downloadToOSPCache$S$S$Z(this.path, name, false);
if (localFile != null ) {
this.path=$I$(12,"getURIPath$S",[localFile.getAbsolutePath$()]);
}}if (!$I$(23).warnXuggleError) $I$(10).setConsoleMessagesLogged$Z(false);
this.video=$I$(14).getVideo$S$org_opensourcephysics_media_core_VideoType(this.path, null);
}if (this.video != null  && Clazz.instanceOf(this.video, "org.opensourcephysics.media.core.IncrementallyLoadable")  && $I$(14).loadIncrementally ) {
var iVideo=this.video;
try {
if (iVideo.loadMoreFrames$I($I$(14).incrementToLoad)) {
this.setFrameCount$I(iVideo.getLoadedFrameCount$());
progress=(this.getFrameCount$()/$I$(14).incrementToLoad|0);
progress=1 + (progress % 95);
return progress;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}$I$(10).setConsoleMessagesLogged$Z(logConsole);
if ($I$(14).isCanceled$()) {
this.cancelAsync$();
return 100;
}if (this.video == null ) {
if (this.frame != null  && this.frame.libraryBrowser != null  ) this.frame.libraryBrowser.setMessage$S$java_awt_Color(null, null);
var codec=$I$(14).getVideoCodec$S(this.path);
$I$(14,"handleUnsupportedVideo$S$S$S$org_opensourcephysics_media_core_VideoPanel$S",[this.path, $I$(11).getExtension$S(this.path), codec, this.panel$(), "OpenTabPathVideo null video"]);
this.cancelAsync$();
return 100;
}if (Clazz.instanceOf(this.video, "org.opensourcephysics.media.core.AsyncVideoI")) {
this.video.addPropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", ((P$.TrackerIO$AsyncLoader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerIO$AsyncLoader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].video.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this);
p$1.finalizeVideoLoading$org_opensourcephysics_media_core_Video.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].video]);
});
})()
), Clazz.new_(P$.TrackerIO$AsyncLoader$2.$init$,[this, null])));
} else {
p$1.finalizeVideoLoading$org_opensourcephysics_media_core_Video.apply(this, [this.video]);
}var thePath=$I$(11).forwardSlash$S(this.path);
var n=thePath.indexOf$S("!/");
if (n > 0) thePath=thePath.substring$I$I(0, n);
$I$(23,"addRecent$S$Z",[$I$(12).getNonURIPath$S(thePath), false]);
return 100;
}, p$1);

Clazz.newMeth(C$, 'finalizeVideoLoading$org_opensourcephysics_media_core_Video',  function (video) {
var trackerPanel=this.panel$();
if (this.frame != null ) {
var panelID=trackerPanel.getID$();
var tab=this.frame.getTab$Integer(panelID);
if (tab < 0) this.frame.addTabFromLoader$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}trackerPanel.setVideo$org_opensourcephysics_media_core_Video(video);
this.panelChanged=(trackerPanel.getID$() === this.existingPanelID );
if (video.getFrameCount$() == 1) {
trackerPanel.getPlayer$().getVideoClip$().setStepCount$I(10);
}if (this.existingPanelID == null ) {
var coords=trackerPanel.getCoords$();
coords.setAllOriginsXY$D$D(video.getWidth$() / 2, video.getHeight$() / 2);
}if (this.frame != null ) {
$I$(19).repaintT$java_awt_Component(trackerPanel);
this.frame.setSelectedTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}if ($I$(23).warnVariableDuration) $I$(2,"findBadVideoFrames$org_opensourcephysics_cabrillo_tracker_TrackerPanel$D$Z$Z$Z",[trackerPanel, $I$(2).defaultBadFrameTolerance, true, true, true]);
this.checkDone$Z(false);
}, p$1);

Clazz.newMeth(C$, 'finalized$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
this.panelList.remove$O(trackerPanel.getID$());
});

Clazz.newMeth(C$, 'doneLoading',  function () {
if (this.frame != null ) {
var trackerPanel=this.panel$();
this.frame.setFrameBlocker$Z$org_opensourcephysics_cabrillo_tracker_TrackerPanel(false, trackerPanel);
if (this.xmlPath0 != null  && !$I$(12).isJarZipTrz$S$Z(this.xmlPath0, true) ) {
$I$(23,"addRecent$S$Z",[$I$(12,"getNonURIPath$S",[$I$(11).forwardSlash$S(this.xmlPath0)]), false]);
}$I$(24).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
switch (this.type) {
case 4:
trackerPanel.changed=this.panelChanged;
case 2:
this.frame.clearHoldPainting$();
trackerPanel.notifyLoadingComplete$();
this.frame.refresh$();
}
}if (this.whenDone == null ) {
} else {
$I$(29,"invokeLater$Runnable",[((P$.TrackerIO$AsyncLoader$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerIO$AsyncLoader$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader'].whenDone.run$();
});
})()
), Clazz.new_(P$.TrackerIO$AsyncLoader$lambda3.$init$,[this, null]))]);
}}, p$1);

Clazz.newMeth(C$, 'setFrameCount$I',  function (count) {
this.frameCount=count;
});

Clazz.newMeth(C$, 'close$',  function () {
this.cancelAsync$();
this.setProgress$I(100);
});

Clazz.newMeth(C$, 'cancelAsync$',  function () {
C$.superclazz.prototype.cancelAsync$.apply(this, []);
if (this.frame == null ) return;
var trackerPanel=this.panel$();
this.frame.clearHoldPainting$();
this.frame.setFrameBlocker$Z$org_opensourcephysics_cabrillo_tracker_TrackerPanel(false, trackerPanel);
this.frame.setCursor$java_awt_Cursor($I$(30).getDefaultCursor$());
if (this.libraryBrowser != null ) {
this.libraryBrowser.cancelLoading$();
}if (trackerPanel != null ) trackerPanel.releaseResources$();
if (this.type == 4) {
if (this.existingPanelID != null ) {
var tab=this.frame.getRemovableTabNumber$Integer(this.existingPanelID);
if (tab > -1) this.frame.removeTabNow$I(tab);
}}this.frame.removeEmptyTabIfTabCountGreaterThan$I(1);
$I$(14).setCanceled$Z(true);
if (!$I$(22).isJS) this.frame.doTabStateChanged$();
});

Clazz.newMeth(C$, 'getFrameCount$',  function () {
return this.frameCount;
});

Clazz.newMeth(C$, 'restart$',  function () {
this.setProgress$I(0);
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
});

Clazz.newMeth(C$, 'getFrame$',  function () {
return this.frame;
});

Clazz.newMeth(C$, 'getNote$I',  function (progress) {
switch (this.type) {
case 4:
return "Video frames loaded: " + this.getFrameCount$();
case 2:
if (this.type == 2 && progress > 20  && progress < 80 ) return "Video " + this.videoCount + ": frames loaded " + this.panel$().framesLoaded ;
default:
return String.format$S$OA("Completed %d%%.\n", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.progressPercent)]));
}
});

Clazz.newMeth(C$, 'setLoader$org_opensourcephysics_cabrillo_tracker_TrackerPanel_Loader',  function (loader) {
this.loader=loader;
});

Clazz.newMeth(C$, 'adjustFrameData$OA',  function (data) {
var arrayOffset=this.panel$().getPlayer$().getVideoClip$().frameShift;
if (arrayOffset > 0) {
if (arrayOffset >= data.length) return null;
data=$I$(31).copyOfRange$OA$I$I(data, arrayOffset, data.length);
}return data;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackerIO, "TransferImage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (image) {
;C$.$init$.apply(this);
this.image=image;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
return Clazz.array($I$(32), -1, [$I$(32).imageFlavor]);
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
return $I$(32).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor)) throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
return this.image;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
