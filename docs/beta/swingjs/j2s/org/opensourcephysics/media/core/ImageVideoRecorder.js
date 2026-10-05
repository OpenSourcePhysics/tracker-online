(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.media.core.ImageVideoType','org.opensourcephysics.media.core.ImageVideo','org.opensourcephysics.media.core.ScratchVideoRecorder','java.io.File','org.opensourcephysics.tools.ResourceLoader','javax.imageio.ImageIO','java.io.BufferedOutputStream','java.io.FileOutputStream','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XML','java.util.zip.ZipOutputStream','java.util.zip.ZipEntry','java.io.FileInputStream','java.awt.Dimension','java.awt.image.BufferedImage','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageVideoRecorder", null, 'org.opensourcephysics.media.core.ScratchVideoRecorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$tempFileType="png";
},1);

C$.$fields$=[['I',['$frameCount'],'S',['$tempFileBasePath','$tempFileType'],'O',['savedFilePaths','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoType.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_ImageVideoType',  function (type) {
;C$.superclazz.c$$org_opensourcephysics_media_core_VideoType.apply(this,[type]);C$.$init$.apply(this);
var ext=type.getDefaultExtension$();
if (Clazz.instanceOf(this.videoType, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType")) {
ext=(this.videoType).getImageExtension$();
}if (ext != null ) this.$tempFileType=ext;
}, 1);

Clazz.newMeth(C$, 'getVideo$',  function () {
if (this.saveFile != null ) {
if (!this.isSaved) this.saveScratch$();
if (this.savedFilePaths != null  && this.savedFilePaths.length > 0 ) {
var video=Clazz.new_($I$(2,1).c$$S$S$Z,[this.savedFilePaths[0], null, this.savedFilePaths.length > 1]);
video.setFrameDuration$D(this.frameDuration);
return video;
}}return null;
});

Clazz.newMeth(C$, 'saveVideo$S',  function (fileName) {
if (fileName == null ) {
return this.saveVideoAs$();
}this.setFileName$S(fileName);
if (this.saveFile == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Read-only file"]);
}this.saveScratch$();
return (this.savedFilePaths == null  || this.savedFilePaths.length == 0 ) ? null : this.savedFilePaths[0];
});

Clazz.newMeth(C$, 'setExpectedFrameCount$I',  function (n) {
this.$frameCount=n;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.$frameCount=0;
this.deleteTempFiles$();
C$.superclazz.prototype.reset$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
this.reset$();
});

Clazz.newMeth(C$, 'saveScratch$',  function () {
if (!this.hasContent) return;
if (this.chosenExtension != null  && !(Clazz.instanceOf($I$(3).chooser.getFileFilter$(), "org.opensourcephysics.media.core.VideoFileFilter")) ) return;
var isZipType=Clazz.instanceOf(this.videoType, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType");
{
if (isZipType) {
p$1.saveZipImages.apply(this, []);
} else {
var fileName=this.saveFile.getAbsolutePath$();
this.savedFilePaths=C$.getFileNames$S$I$S(fileName, this.tempFiles.size$(), null);
for (var i=0; i < this.tempFiles.size$(); i++) {
var path=this.savedFilePaths[i];
var tempFile=this.tempFiles.get$I(i);
if (!tempFile.exists$()) {
this.savedFilePaths=null;
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["temp image file not found"]);
}if ($I$(3).ext == this.$tempFileType) {
var targetFile=Clazz.new_($I$(4,1).c$$S,[path]);
$I$(5).copyFile$java_io_File$java_io_File$I(tempFile, targetFile, 100000);
} else {
var image=$I$(5,"getBufferedImage$S",[tempFile.getAbsolutePath$()]);
if (image == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unable to load temp image file"]);
}$I$(6,"write$java_awt_image_RenderedImage$S$java_io_OutputStream",[image, $I$(3).ext, Clazz.new_([Clazz.new_($I$(8,1).c$$S,[path])],$I$(7,1).c$$java_io_OutputStream)]);
}}
}}this.deleteTempFiles$();
this.isSaved=true;
this.hasContent=false;
this.canRecord=false;
if (!isZipType && this.savedFilePaths != null   && this.savedFilePaths.length > 0 ) {
var control=Clazz.new_([Clazz.getClass($I$(2))],$I$(9,1).c$$Class);
var basePath=$I$(10).getDirectoryPath$S(this.savedFilePaths[0]);
var paths=Clazz.array(String, [this.savedFilePaths.length]);
for (var i=0; i < paths.length; i++) {
paths[i]=$I$(10).getPathRelativeTo$S$S(this.savedFilePaths[i], basePath);
}
control.setValue$S$O("paths", paths);
control.setValue$S$O("path", paths[0]);
control.setValue$S$D("delta_t", this.frameDuration);
control.setBasepath$S(basePath);
var fileName=this.savedFilePaths[0];
fileName=$I$(10).stripExtension$S(fileName) + ".xml";
control.write$S(fileName);
}});

Clazz.newMeth(C$, 'saveZipImages',  function () {
if (this.tempFiles.isEmpty$()) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No image frames to export"]);
var imageName=$I$(10,"stripExtension$S",[this.saveFile.getName$()]) + "." + this.$tempFileType ;
var entryNames=C$.getFileNames$S$I$S(imageName, this.tempFiles.size$(), this.$tempFileType);
var archive=Clazz.new_([$I$(10,"stripExtension$S",[this.scratchFile.getAbsolutePath$()]) + "_images.zip"],$I$(4,1).c$$S);
try {
try {
var output=Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_File,[archive])],$I$(11,1).c$$java_io_OutputStream);
try {
var buffer=Clazz.array(Byte.TYPE, [8192]);
for (var i=0; i < this.tempFiles.size$(); i++) {
var image=this.tempFiles.get$I(i);
if (!image.exists$() || Long.$eq(image.length$(),0 ) ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Temp image file missing or empty: " + image]);
output.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(12,1).c$$S,[entryNames[i]]));
try {
var input=Clazz.new_($I$(13,1).c$$java_io_File,[image]);
try {
var count;
while ((count=input.read$BA(buffer)) != -1)output.write$BA$I$I(buffer, 0, count);


}finally{/*res*/input&&input.close$&&input.close$();}
}finally{}
output.closeEntry$();
}

}finally{/*res*/output&&output.close$&&output.close$();}
}finally{}
if (!$I$(5).copyFile$java_io_File$java_io_File$I(archive, this.saveFile, 100000)) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unable to save image archive"]);
this.savedFilePaths=Clazz.array(String, -1, [this.saveFile.getAbsolutePath$()]);
} finally {
archive.delete$();
}
}, p$1);

Clazz.newMeth(C$, 'startRecording$',  function () {
if (this.dim == null ) {
if (this.frameImage != null ) {
this.dim=Clazz.new_([this.frameImage.getWidth$java_awt_image_ImageObserver(null), this.frameImage.getHeight$java_awt_image_ImageObserver(null)],$I$(14,1).c$$I$I);
} else {
return false;
}}try {
this.$tempFileBasePath=$I$(10,"stripExtension$S",[this.scratchFile.getAbsolutePath$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'append$java_awt_Image',  function (image) {
var w=image.getWidth$java_awt_image_ImageObserver(null);
var h=image.getHeight$java_awt_image_ImageObserver(null);
if (this.dim == null ) {
this.dim=Clazz.new_($I$(14,1).c$$I$I,[w, h]);
}if (this.dim.width != w || this.dim.height != h ) return false;
if (!(Clazz.instanceOf(image, "java.awt.image.BufferedImage"))) {
var img=Clazz.new_($I$(15,1).c$$I$I$I,[w, h, 1]);
img.getGraphics$().drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, null);
image=img;
}var source=image;
var fileName=this.$tempFileBasePath + "_" + this.tempFiles.size$() + ".tmp" ;
try {
$I$(6,"write$java_awt_image_RenderedImage$S$java_io_OutputStream",[source, this.$tempFileType, Clazz.new_([Clazz.new_($I$(8,1).c$$S,[fileName])],$I$(7,1).c$$java_io_OutputStream)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
var imageFile=Clazz.new_($I$(4,1).c$$S,[fileName]);
if (imageFile.exists$()) {
{
this.tempFiles.add$O(imageFile);
}imageFile.deleteOnExit$();
}return true;
});

Clazz.newMeth(C$, 'getFileToBeSaved$java_io_File',  function (file) {
if (Clazz.instanceOf(this.videoType, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType")) {
var path=$I$(10,"stripExtension$S",[file.getAbsolutePath$()]);
return Clazz.new_($I$(4,1).c$$S,[path + ".zip"]);
}var n=this.$frameCount > 0 ? this.$frameCount : this.tempFiles.size$();
if (n <= 1) {
return file;
}var fileName=file.getAbsolutePath$();
var i=C$.getAppendedNumber$S(fileName);
var base=C$.getBase$S(fileName);
if (i > 0) {
fileName=base + ((n + i < 10) ? String.valueOf$I(i) : ((n + i < 100) && (i < 10) ) ? "0" + i : (n + i < 100) ? String.valueOf$I(i) : ((n + i < 1000) && (i < 10) ) ? "00" + i : ((n + i < 1000) && (i < 100) ) ? "0" + i : (n + i < 1000) ? String.valueOf$I(i) : (i < 10) ? "000" + i : (i < 100) ? "00" + i : (i < 1000) ? "0" + i : String.valueOf$I(i));
} else {
fileName=base + ((n < 10) ? "0" : (n < 100) ? "00" : (n < 1000) ? "000" : "0000");
}if ($I$(3).ext != null ) fileName+="." + $I$(3).ext;
return Clazz.new_($I$(4,1).c$$S,[fileName]);
});

Clazz.newMeth(C$, 'saveImages$S$java_awt_image_BufferedImageA',  function (fileName, images) {
var fileNames=C$.getFileNames$S$I$S(fileName, images.length, null);
for (var i=0; i < images.length; i++) {
var next=fileNames[i];
$I$(6,"write$java_awt_image_RenderedImage$S$java_io_OutputStream",[images[i], $I$(3).ext, Clazz.new_([Clazz.new_($I$(8,1).c$$S,[next])],$I$(7,1).c$$java_io_OutputStream)]);
}
return fileNames;
}, 1);

Clazz.newMeth(C$, 'getFileNames$S$I$S',  function (fileName, length, ext) {
if (length == 1) return Clazz.array(String, -1, [fileName]);
if (ext == null ) ext=$I$(3).ext;
var k=C$.getAppendedNumber$S(fileName);
var paths=Clazz.new_($I$(16,1));
var digits=(length + k < 10) ? 1 : (length + k < 100) ? 2 : (length + k < 1000) ? 3 : 4;
var base=C$.getBase$S(fileName);
for (var i=0; i < length; i++) {
var num=String.valueOf$I(i + k);
if ((digits == 2) && (i + k < 10) ) {
num="0" + num;
} else if ((digits == 3) && (i + k < 10) ) {
num="00" + num;
} else if ((digits == 3) && (i + k < 100) ) {
num="0" + num;
} else if ((digits == 4) && (i + k < 10) ) {
num="000" + num;
} else if ((digits == 4) && (i + k < 100) ) {
num="00" + num;
} else if ((digits == 4) && (i + k < 1000) ) {
num="0" + num;
}fileName=base + num + "." + ext ;
paths.add$O(fileName);
}
return paths.toArray$OA(Clazz.array(String, [0]));
}, 1);

Clazz.newMeth(C$, 'getBase$S',  function (path) {
var base=$I$(10).stripExtension$S(path);
var len=base.length$();
var digits=1;
for (; digits < len; digits++) {
try {
Integer.parseInt$S(base.substring$I(len - digits));
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
break;
} else {
throw ex;
}
}
}
--digits;
if (digits == 0) {
return base;
}return base.substring$I$I(0, len - digits);
}, 1);

Clazz.newMeth(C$, 'getAppendedNumber$S',  function (path) {
var base=$I$(10).stripExtension$S(path);
var len=base.length$();
var digits=1;
var n=0;
for (; digits < len; digits++) {
try {
n=Integer.parseInt$S(base.substring$I(len - digits));
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
break;
} else {
throw ex;
}
}
}
return n;
}, 1);

Clazz.newMeth(C$, 'getCodec$',  function () {
return null;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
