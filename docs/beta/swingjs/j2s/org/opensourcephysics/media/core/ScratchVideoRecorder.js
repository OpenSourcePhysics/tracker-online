(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'java.util.ArrayList','java.text.SimpleDateFormat',['org.opensourcephysics.media.core.ScratchVideoRecorder','.ShutdownHook'],'Runtime','javax.swing.JFileChooser','java.io.File','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.core.ScratchVideoRecorder','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.media.core.MediaRes','javax.swing.JOptionPane','org.opensourcephysics.controls.XML','java.io.FileInputStream','java.io.BufferedInputStream','java.io.FileOutputStream','java.io.BufferedOutputStream','javax.swing.SwingUtilities',['org.opensourcephysics.media.core.VideoIO','.ZipImageVideoType'],'org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.controls.ControlsRes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScratchVideoRecorder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.media.core.VideoRecorder');
C$.$classes$=[['ShutdownHook',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frameDuration=100;
this.scratchNumber=0;
this.saveFile=null;
this.saveChanges=false;
this.tempFileType="png";
this.tempFiles=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['canRecord','hasContent','isSaved','saveChanges'],'D',['frameDuration'],'I',['frameCount','scratchNumber'],'S',['scratchName','tempFileBasePath','tempFileType','suggestedFileName','chosenExtension','baseDir'],'O',['videoType','org.opensourcephysics.media.core.VideoType','dim','java.awt.Dimension','frameImage','java.awt.Image','scratchFile','java.io.File','+saveFile','tempFiles','java.util.ArrayList']]
,['Z',['ignoreChooser'],'S',['ext','tempDirectory','tempFilePrefix'],'O',['chooser','javax.swing.JFileChooser','chooserField','javax.swing.text.JTextComponent']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoType',  function (vidType) {
;C$.$init$.apply(this);
this.videoType=vidType;
C$.ext=this.videoType.getDefaultExtension$();
var formatter=Clazz.new_($I$(2,1).c$$S,["ssSSS"]);
this.scratchName=C$.tempFilePrefix + formatter.format$java_util_Date(Clazz.new_(java.util.Date));
var shutdownHook=Clazz.new_($I$(3,1),[this, null]);
$I$(4).getRuntime$().addShutdownHook$Thread(shutdownHook);
try {
this.createScratch$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (C$.chooser == null ) {
C$.chooser=Clazz.new_([Clazz.new_([$I$(7).chooserDir],$I$(6,1).c$$S)],$I$(5,1).c$$java_io_File);
C$.chooser.addPropertyChangeListener$S$java_beans_PropertyChangeListener("fileFilterChanged", ((P$.ScratchVideoRecorder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScratchVideoRecorder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (!$I$(8).ignoreChooser) {
var filter=e.getNewValue$();
if (Clazz.instanceOf(filter, "org.opensourcephysics.media.core.VideoFileFilter")) {
var vidFilter=filter;
var ext=vidFilter.getDefaultExtension$();
if (ext != null ) $I$(8).setChooserExtension$S(ext);
}}});
})()
), Clazz.new_(P$.ScratchVideoRecorder$1.$init$,[this, null])));
var temp="untitled.tmp";
C$.chooser.setSelectedFile$java_io_File(Clazz.new_($I$(6,1).c$$S,[temp]));
C$.chooserField=p$1.getTextComponent$java_awt_Container$S.apply(this, [C$.chooser, temp]);
}}, 1);

Clazz.newMeth(C$, 'createVideo$',  function () {
if (this.scratchFile == null ) {
this.createScratch$();
if (this.scratchFile == null ) {
$I$(9).severe$S("No scratch file");
return;
}}if (this.scratchFile != null  && this.hasContent ) {
if (this.saveChanges && !this.isSaved ) {
var query=$I$(10).getString$S("ScratchVideoRecorder.Dialog.SaveVideo.Message");
var n=$I$(11,"showConfirmDialog$java_awt_Component$O$S$I",[null, query, $I$(10).getString$S("ScratchVideoRecorder.Dialog.SaveVideo.Title"), 0]);
if (n == 0) {
this.saveVideo$();
}}this.createScratch$();
this.saveFile=null;
this.dim=null;
}});

Clazz.newMeth(C$, 'createVideo$S',  function (fileName) {
this.createVideo$S$S(fileName, null);
});

Clazz.newMeth(C$, 'createVideo$S$S',  function (fileName, trkPath) {
var file=null;
if (fileName == null ) {
file=this.selectFile$();
if (file == null ) return;
fileName=file.getAbsolutePath$();
} else {
file=Clazz.new_($I$(6,1).c$$S,[fileName]);
}this.baseDir=$I$(12).getDirectoryPath$S(fileName);
this.createVideo$();
this.saveFile=file;
});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (dimension) {
this.dim=dimension;
});

Clazz.newMeth(C$, 'setFrameDuration$D',  function (millis) {
this.frameDuration=millis;
});

Clazz.newMeth(C$, 'addFrame$java_awt_Image',  function (image) {
if (image == null ) {
return;
}this.frameImage=image;
if ((this.scratchFile == null ) || (this.hasContent && this.isSaved ) ) {
this.createVideo$();
}if (this.scratchFile == null ) {
return;
}if (!this.canRecord) {
this.canRecord=this.startRecording$();
this.isSaved=false;
this.hasContent=false;
}if (this.canRecord && this.append$java_awt_Image(image) ) {
this.hasContent=true;
++this.frameCount;
}});

Clazz.newMeth(C$, 'getVideoType$',  function () {
return this.videoType;
});

Clazz.newMeth(C$, 'getVideo$',  function () {
if (this.isSaved && this.saveFile != null  ) {
return this.videoType.getVideo$S(this.saveFile.getAbsolutePath$());
}this.saveScratch$();
return this.videoType.getVideo$S(this.scratchFile.getAbsolutePath$());
});

Clazz.newMeth(C$, 'saveVideo$',  function () {
if (this.saveFile != null ) {
return this.saveVideo$S(this.saveFile.getAbsolutePath$());
}return this.saveVideoAs$();
});

Clazz.newMeth(C$, 'saveVideo$S',  function (fileName) {
if (this.scratchFile == null ) {
return null;
}if (fileName == null ) {
return this.saveVideoAs$();
}this.setFileName$S(fileName);
if (this.saveFile == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["could not write to read-only file"]);
}this.saveScratch$();
var buffer=8192;
var data=Clazz.array(Byte.TYPE, [buffer]);
var count=0;
var total=0;
var fin=Clazz.new_($I$(13,1).c$$java_io_File,[this.scratchFile]);
var $in=Clazz.new_($I$(14,1).c$$java_io_InputStream,[fin]);
var fout=Clazz.new_($I$(15,1).c$$java_io_File,[this.saveFile]);
var out=Clazz.new_($I$(16,1).c$$java_io_OutputStream,[fout]);
while ((count=$in.read$BA$I$I(data, 0, buffer)) != -1){
out.write$BA$I$I(data, 0, count);
total+=count;
}
out.flush$();
out.close$();
$in.close$();
this.isSaved=true;
$I$(9,"fine$S",["copied " + total + " bytes from " + this.scratchFile.getName$() + " to " + this.saveFile.getAbsolutePath$() ]);
this.scratchFile.delete$();
return this.saveFile.getAbsolutePath$();
});

Clazz.newMeth(C$, 'saveVideoAs$',  function () {
var file=this.selectFile$();
if (file != null ) {
return this.saveVideo$S(file.getAbsolutePath$());
}return null;
});

Clazz.newMeth(C$, 'getFileName$',  function () {
return (this.saveFile == null ) ? null : this.saveFile.getAbsolutePath$();
});

Clazz.newMeth(C$, 'setFileName$S',  function (path) {
if (this.saveFile != null  && this.saveFile.getAbsolutePath$().equals$O(path) ) {
return;
}var file=Clazz.new_($I$(6,1).c$$S,[path]);
if (file.exists$() && !file.canWrite$() ) {
this.saveFile=null;
} else {
this.saveFile=file;
}});

Clazz.newMeth(C$, 'suggestFileName$S',  function (name) {
this.suggestedFileName=name;
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.scratchFile != null ) {
try {
this.saveScratch$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.scratchFile.delete$();
}this.hasContent=false;
});

Clazz.newMeth(C$, 'setChooserExtension$S',  function (extension) {
if (extension != null ) {
C$.ext=extension;
}if (C$.ext != null  && C$.chooser != null   && C$.chooser.isVisible$() ) {
var name=(C$.chooserField == null ) ? "*." + C$.ext : $I$(12,"stripExtension$S",[C$.chooserField.getText$()]) + "." + C$.ext ;
var runner=((P$.ScratchVideoRecorder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScratchVideoRecorder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var dir=$I$(8).chooser.getCurrentDirectory$();
var path=$I$(12,"getResolvedPath$S$S",[this.$finals$.name, dir.getAbsolutePath$()]);
$I$(8).chooser.setSelectedFile$java_io_File(Clazz.new_($I$(6,1).c$$S,[path]));
if ($I$(8).chooserField != null ) {
$I$(8).chooserField.setText$S(this.$finals$.name);
}});
})()
), Clazz.new_(P$.ScratchVideoRecorder$2.$init$,[this, {name:name}]));
$I$(17).invokeLater$Runnable(runner);
}}, 1);

Clazz.newMeth(C$, 'createScratch$',  function () {
if (this.hasContent || this.scratchFile == null  ) {
var fileName=this.scratchName;
if (this.hasContent) {
fileName+="-" + this.scratchNumber++;
}this.reset$();
fileName=$I$(7).tempDir + "/" + fileName + this.getScratchExtension$() ;
this.scratchFile=Clazz.new_($I$(6,1).c$$S,[fileName]);
this.hasContent=false;
this.canRecord=false;
$I$(9,"finest$S",[this.scratchFile.getAbsolutePath$()]);
}});

Clazz.newMeth(C$, 'getScratchExtension$',  function () {
return ".tmp";
});

Clazz.newMeth(C$, 'selectFile$',  function () {
C$.ignoreChooser=true;
var file=null;
var chooserExt=null;
C$.chooser.setDialogTitle$S($I$(10).getString$S("VideoIO.Dialog.SaveVideoAs.Title"));
C$.chooser.resetChoosableFileFilters$();
var filters=this.videoType.getFileFilters$();
var isZipType=Clazz.instanceOf(this.videoType, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType");
if (filters != null  && filters.length > 0 ) {
var preferred=this.videoType.getDefaultFileFilter$();
if (preferred == null ) preferred=filters[0];
C$.ext=preferred.getDefaultExtension$();
chooserExt=C$.ext;
if (isZipType) {
var z=this.videoType;
C$.ext=z.getImageExtension$();
$I$(18).checkZipContents=false;
}C$.chooser.setAcceptAllFileFilterUsed$Z(false);
for (var i=0; i < filters.length; i++) {
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(filters[i]);
}
C$.chooser.setFileFilter$javax_swing_filechooser_FileFilter(preferred);
} else {
C$.chooser.setAcceptAllFileFilterUsed$Z(true);
}var filename=this.suggestedFileName;
if (filename == null ) filename=$I$(10).getString$S("VideoIO.FileName.Untitled");
if (chooserExt != null ) {
filename+="." + chooserExt;
}C$.chooser.setSelectedFile$java_io_File(Clazz.new_($I$(6,1).c$$S,[filename]));
if (C$.chooserField != null ) C$.chooserField.setText$S(filename);
C$.ignoreChooser=false;
var result=C$.chooser.showSaveDialog$java_awt_Component(null);
$I$(18).checkZipContents=true;
if (result == 0) {
file=C$.chooser.getSelectedFile$();
file=this.getFileToBeSaved$java_io_File(file);
this.chosenExtension=$I$(12,"getExtension$S",[file.getName$()]);
if (file.exists$()) {
if (file.canWrite$()) {
var selected=$I$(11,"showConfirmDialog$java_awt_Component$O$S$I",[null, " \"" + file.getName$() + "\" " + $I$(10).getString$S("VideoIO.Dialog.FileExists.Message") , $I$(10).getString$S("VideoIO.Dialog.FileExists.Title"), 1]);
if (selected != 0) {
file=null;
} else {
$I$(19,"requiresReload$S",[file.getPath$()]);
}} else {
$I$(11,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(20).getString$S("Dialog.ReadOnly.Message"), $I$(20).getString$S("Dialog.ReadOnly.Title"), -1]);
file=null;
}}}return file;
});

Clazz.newMeth(C$, 'getFileToBeSaved$java_io_File',  function (file) {
return file;
});

Clazz.newMeth(C$, 'finalize$',  function () {
this.deleteTempFiles$();
});

Clazz.newMeth(C$, 'deleteTempFiles$',  function () {
this.deleteFiles$java_util_ArrayList(this.tempFiles);
});

Clazz.newMeth(C$, 'deleteFiles$java_util_ArrayList',  function (files) {
if (files == null ) return;
{
for (var next, $next = files.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.delete$();
}
files.clear$();
}});

Clazz.newMeth(C$, 'getTextComponent$java_awt_Container$S',  function (c, toMatch) {
var comps=c.getComponents$();
for (var i=0; i < comps.length; i++) {
if ((Clazz.instanceOf(comps[i], "javax.swing.text.JTextComponent")) && toMatch.equals$O((comps[i]).getText$()) ) {
return comps[i];
}if (Clazz.instanceOf(comps[i], "java.awt.Container")) {
var tc=p$1.getTextComponent$java_awt_Container$S.apply(this, [comps[i], toMatch]);
if (tc != null ) {
return tc;
}}}
return null;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.tempFilePrefix="osp_";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScratchVideoRecorder, "ShutdownHook", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['org.opensourcephysics.media.core.ScratchVideoRecorder'].scratchFile != null ) {
try {
this.b$['org.opensourcephysics.media.core.ScratchVideoRecorder'].saveScratch$.apply(this.b$['org.opensourcephysics.media.core.ScratchVideoRecorder'], []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.b$['org.opensourcephysics.media.core.ScratchVideoRecorder'].scratchFile.delete$();
}this.b$['org.opensourcephysics.media.core.ScratchVideoRecorder'].deleteTempFiles$.apply(this.b$['org.opensourcephysics.media.core.ScratchVideoRecorder'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
