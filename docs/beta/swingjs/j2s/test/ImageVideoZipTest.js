(function(){var P$=Clazz.newPackage("test"),I$=[[0,['org.opensourcephysics.media.core.VideoIO','.ZipImageVideoType'],'org.opensourcephysics.media.core.ImageVideoType','org.opensourcephysics.media.core.VideoFileFilter','java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.io.File',['test.ImageVideoZipTest','.Recorder'],'org.opensourcephysics.media.BrowserZipExport','AssertionError','java.awt.image.BufferedImage','java.awt.Color','java.util.zip.ZipFile','org.opensourcephysics.media.core.ImageVideoRecorder','java.util.HashSet','javax.imageio.ImageIO']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageVideoZipTest", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Recorder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var directory=$I$(4,"createTempDirectory$S$java_nio_file_attribute_FileAttributeA",["tracker-zip-test-", Clazz.array($I$(5), -1, [])]).toFile$();
for (var count, $count = 0, $$count = Clazz.array(Integer.TYPE, -1, [1, 3, 12]); $count<$$count.length&&((count=($$count[$count])),1);$count++) {
C$.checkArchive$java_io_File$S$I(directory, "jpg", count);
}
C$.checkArchive$java_io_File$S$I(directory, "png", 3);
var failed=Clazz.new_($I$(6,1).c$$java_io_File$S,[directory, "missing.zip"]);
var recorder=Clazz.new_($I$(7,1).c$$S,["jpg"]);
recorder.createVideo$S(failed.getAbsolutePath$());
recorder.addFrame$java_awt_Image(C$.frame$I(0));
recorder.removeFirstFrame$();
try {
$I$(8).saveVideo$org_opensourcephysics_media_core_VideoRecorder(recorder);
throw Clazz.new_($I$(9,1).c$$O,["Missing frame was not reported"]);
} catch (expected) {
if (Clazz.exceptionOf(expected,"java.io.IOException")){
if (failed.exists$()) throw Clazz.new_($I$(9,1).c$$O,["Failed export produced a download"]);
} else {
throw expected;
}
} finally {
recorder.reset$();
}
System.out.println$S("PASS: JPEG/PNG entries, single and multiple frames, ordering, dimensions, no loose images, missing-frame failure");
}, 1);

Clazz.newMeth(C$, 'frame$I',  function (index) {
var image=Clazz.new_($I$(10,1).c$$I$I$I,[32, 24, 1]);
var graphics=image.createGraphics$();
graphics.setColor$java_awt_Color(index % 2 == 0 ? $I$(11).RED : $I$(11).BLUE);
graphics.fillRect$I$I$I$I(0, 0, image.getWidth$(), image.getHeight$());
graphics.dispose$();
return image;
}, 1);

Clazz.newMeth(C$, 'checkArchive$java_io_File$S$I',  function (root, extension, count) {
var directory=Clazz.new_($I$(6,1).c$$java_io_File$S,[root, extension + count]);
directory.mkdir$();
var target=Clazz.new_($I$(6,1).c$$java_io_File$S,[directory, "clip.zip"]);
var recorder=Clazz.new_($I$(7,1).c$$S,[extension]);
recorder.createVideo$S(target.getAbsolutePath$());
for (var i=0; i < count; i++) recorder.addFrame$java_awt_Image(C$.frame$I(i));

var saved=$I$(8).saveVideo$org_opensourcephysics_media_core_VideoRecorder(recorder);
if (!target.getAbsolutePath$().equals$O(saved)) throw Clazz.new_($I$(9,1).c$$O,["Wrong saved path: " + saved]);
if (directory.list$().length != 1) throw Clazz.new_($I$(9,1).c$$O,["Loose files beside archive"]);
try {
var archive=Clazz.new_($I$(12,1).c$$java_io_File,[target]);
try {
if (archive.size$() != count) throw Clazz.new_($I$(9,1).c$$O,["Wrong frame count"]);
var names=$I$(13).getFileNames$S$I$S("clip." + extension, count, extension);
var seen=Clazz.new_($I$(14,1));
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
var entry=archive.getEntry$S(name);
if (entry == null  || !seen.add$O(name) ) throw Clazz.new_($I$(9,1).c$$O,["Missing/duplicate frame " + name]);
var image=$I$(15,"read$java_io_InputStream",[archive.getInputStream$java_util_zip_ZipEntry(entry)]);
if (image == null  || image.getWidth$() != 32  || image.getHeight$() != 24 ) throw Clazz.new_($I$(9,1).c$$O,["Invalid frame " + name]);
}

}finally{/*res*/archive&&archive.close$&&archive.close$();}
} finally {
recorder.reset$();
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageVideoZipTest, "Recorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.media.core.ImageVideoRecorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (extension) {
;C$.superclazz.c$$org_opensourcephysics_media_core_ImageVideoType.apply(this,[Clazz.new_([Clazz.new_([Clazz.new_([extension, Clazz.array(String, -1, [extension])],$I$(3,1).c$$S$SA)],$I$(2,1).c$$org_opensourcephysics_media_core_VideoFileFilter)],$I$(1,1).c$$org_opensourcephysics_media_core_ImageVideoType)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'removeFirstFrame$',  function () {
this.tempFiles.get$I(0).delete$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
