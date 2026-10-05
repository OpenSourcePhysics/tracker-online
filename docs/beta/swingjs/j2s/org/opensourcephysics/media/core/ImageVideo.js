(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.core.ImageVideo','org.opensourcephysics.media.core.VideoIO','java.io.File','java.util.ArrayList','javax.swing.JOptionPane','org.opensourcephysics.media.core.MediaRes','javax.swing.JPanel','java.awt.Image','java.awt.Dimension','org.opensourcephysics.media.core.ImageVideoRecorder','java.awt.image.BufferedImage','org.opensourcephysics.tools.ResourceLoader','javajs.async.AsyncDialog','org.opensourcephysics.media.core.ImageCoordSystem','org.opensourcephysics.media.core.DoubleArray','java.awt.Color',['org.opensourcephysics.media.core.ImageVideo','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageVideo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.VideoAdapter');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.observer=Clazz.new_($I$(9,1));
this.images=Clazz.array($I$(10), [0]);
this.paths=Clazz.array(String, [0]);
this.deltaT=100;
this.rgbSize=Clazz.new_($I$(11,1));
},1);

C$.$fields$=[['Z',['readOnly'],'D',['deltaT'],'O',['observer','java.awt.Component','images','java.awt.Image[]','rgbImage','java.awt.image.BufferedImage','paths','String[]','rgbSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$$S$S$Z',  function (imageName, basePath, sequence) {
Clazz.super_(C$, this);
this.readOnly=true;
if (basePath == null ) {
basePath=$I$(1).getDirectoryPath$S(imageName);
}if (basePath != null ) {
this.baseDir=basePath;
this.setProperty$S$O("absolutePath", (imageName.startsWith$S(basePath) ? imageName : basePath + "/" + imageName ));
}this.append$S$Z(imageName, sequence);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (imageName) {
Clazz.super_(C$, this);
this.readOnly=true;
this.insert$S$I(imageName, 0);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (clipBoardImage) {
Clazz.super_(C$, this);
this.readOnly=false;
if (clipBoardImage != null ) {
this.insert$java_awt_ImageA$I$SA(Clazz.array($I$(10), -1, [clipBoardImage]), 0, null);
}}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_ImageVideo',  function (video) {
Clazz.super_(C$, this);
this.readOnly=false;
var images=video.images;
if (images == null ) return;
if (images.length > 0 && images[0] != null  ) {
this.insert$java_awt_ImageA$I$SA(images, 0, null);
}this.rawImage=images[0];
this.filterStack.addFilters$org_opensourcephysics_media_core_FilterStack(video.filterStack);
}, 1);

Clazz.newMeth(C$, 'play$',  function () {
this.playing=true;
});

Clazz.newMeth(C$, 'stop$',  function () {
this.playing=false;
});

Clazz.newMeth(C$, 'setFrameNumber$I',  function (n) {
C$.superclazz.prototype.setFrameNumber$I.apply(this, [n]);
this.rawImage=p$1.getImageAtFrame$I$java_awt_Image.apply(this, [this.getFrameNumber$(), this.rawImage]);
this.updateBufferedImage$();
this.invalidateVideoAndFilter$();
this.notifyFrame$I$Z(n, false);
});

Clazz.newMeth(C$, 'setFrameDuration$D',  function (millis) {
this.deltaT=millis;
});

Clazz.newMeth(C$, 'getEndTime$',  function () {
return this.getFrameCountDurationMS$();
});

Clazz.newMeth(C$, 'setEndTime$D',  function (millis) {
});

Clazz.newMeth(C$, 'getFrameCountDurationMS$',  function () {
return p$1.length.apply(this, []) * this.deltaT;
});

Clazz.newMeth(C$, 'getFrameTime$I',  function (n) {
return n * this.deltaT;
});

Clazz.newMeth(C$, 'getImages$',  function () {
return this.images;
});

Clazz.newMeth(C$, 'append$S',  function (imageName) {
this.insert$S$I(imageName, p$1.length.apply(this, []));
});

Clazz.newMeth(C$, 'append$S$Z',  function (imageName, sequence) {
this.insert$S$I$Z(imageName, p$1.length.apply(this, []), sequence);
});

Clazz.newMeth(C$, 'insert$S$I',  function (imageName, index) {
p$1.loadImages$S$Z$java_util_function_Function.apply(this, [imageName, false, ((P$.ImageVideo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageVideo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$OA','apply$O'],  function (array) {
if (array != null ) {
var images=array[0];
if (images == null  || images.length > 0 ) {
var paths=array[1];
this.b$['org.opensourcephysics.media.core.ImageVideo'].insert$java_awt_ImageA$I$SA.apply(this.b$['org.opensourcephysics.media.core.ImageVideo'], [images, this.$finals$.index, paths]);
}}return null;
});
})()
), Clazz.new_(P$.ImageVideo$1.$init$,[this, {index:index}]))]);
});

Clazz.newMeth(C$, 'insert$S$I$Z',  function (imageName, index, sequence) {
var images_paths=p$1.loadImages$S$Z$java_util_function_Function.apply(this, [imageName, sequence, null]);
var images=images_paths[0];
if (images == null  || images.length > 0 ) {
var paths=images_paths[1];
this.insert$java_awt_ImageA$I$SA(images, index, paths);
if (paths.length > 1) this.size=p$1.getMaximumSize.apply(this, []);
}});

Clazz.newMeth(C$, 'insert$java_awt_Image$I',  function (image, index) {
if (image == null ) {
return;
}this.insert$java_awt_ImageA$I$SA(Clazz.array($I$(10), -1, [image]), index, null);
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
if (this.readOnly) return null;
var len=this.images.length;
if ((len == 1) || (len <= index) ) {
return null;
}var removed=this.paths[index];
var newArray=Clazz.array($I$(10), [len - 1]);
System.arraycopy$O$I$O$I$I(this.images, 0, newArray, 0, index);
System.arraycopy$O$I$O$I$I(this.images, index + 1, newArray, index, len - 1 - index );
this.images=newArray;
var newPaths=Clazz.array(String, [len - 1]);
System.arraycopy$O$I$O$I$I(this.paths, 0, newPaths, 0, index);
System.arraycopy$O$I$O$I$I(this.paths, index + 1, newPaths, index, len - 1 - index );
this.paths=newPaths;
if (index < len - 1) {
this.rawImage=p$1.getImageAtFrame$I$java_awt_Image.apply(this, [index, this.rawImage]);
} else {
this.rawImage=p$1.getImageAtFrame$I$java_awt_Image.apply(this, [index - 1, this.rawImage]);
}this.setFrameCount$I(this.images.length);
this.endFrameNumber=this.frameCount - 1;
this.size=p$1.getMaximumSize.apply(this, []);
return removed;
});

Clazz.newMeth(C$, 'getMaximumSize',  function () {
var w=this.images[0].getWidth$java_awt_image_ImageObserver(this.observer);
var h=this.images[0].getHeight$java_awt_image_ImageObserver(this.observer);
for (var i=1; i < this.paths.length; i++) {
var img=p$1.getImageAtFrame$I$java_awt_Image.apply(this, [i, null]);
if (img == null ) continue;
w=Math.max(w, img.getWidth$java_awt_image_ImageObserver(this.observer));
h=Math.max(h, img.getHeight$java_awt_image_ImageObserver(this.observer));
}
return Clazz.new_($I$(11,1).c$$I$I,[w, h]);
}, p$1);

Clazz.newMeth(C$, 'getRGBSize$',  function () {
return this.rgbSize;
});

Clazz.newMeth(C$, 'isFileBased$',  function () {
return this.getValidPaths$().length == this.paths.length;
});

Clazz.newMeth(C$, 'isEditable$',  function () {
return !this.readOnly;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (edit) {
if (edit && this.isEditable$() ) return;
if (!edit && !this.isEditable$() ) return;
if (!edit) {
this.saveInvalidImages$();
}this.readOnly=!edit;
var thePaths=this.paths;
this.paths=Clazz.array(String, [0]);
this.images=Clazz.array($I$(10), [0]);
System.gc$();
for (var i=0; i < thePaths.length; i++) {
if (thePaths[i] != null  && thePaths[i].trim$().length$() > 0 ) this.append$S$Z(thePaths[i], false);
}
if (this.frameCount < thePaths.length) {
this.setEndFrameNumber$I(this.endFrameNumber + 1);
}});

Clazz.newMeth(C$, 'saveInvalidImages$',  function () {
var pathList=Clazz.new_($I$(6,1));
var imageList=Clazz.new_($I$(6,1));
for (var i=0; i < this.paths.length; i++) {
if (this.paths[i].equals$O("")) {
pathList.add$O(this.paths[i]);
imageList.add$O(this.images[i]);
}}
if (pathList.isEmpty$()) {
return true;
}var approved=$I$(7,"showConfirmDialog$java_awt_Component$O$S$I$I",[null, $I$(8).getString$S("ImageVideo.Dialog.UnsavedImages.Message1") + $I$(1).NEW_LINE + $I$(8).getString$S("ImageVideo.Dialog.UnsavedImages.Message2") , $I$(8).getString$S("ImageVideo.Dialog.UnsavedImages.Title"), 0, 2]);
if (approved == 0) {
try {
var recorder=Clazz.new_($I$(12,1));
recorder.setExpectedFrameCount$I(imageList.size$());
var file=recorder.selectFile$();
if (file == null ) {
return false;
}var filePath=file.getAbsolutePath$();
var imagesToSave=imageList.toArray$OA(Clazz.array($I$(13), [0]));
var pathArray=$I$(12).saveImages$S$java_awt_image_BufferedImageA(filePath, imagesToSave);
var j=0;
for (var i=0; i < this.paths.length; i++) {
if (this.paths[i].equals$O("")) {
var relativePath=$I$(1).getPathRelativeTo$S$S(pathArray[j++], this.baseDir);
this.paths[i]=$I$(1).forwardSlash$S(relativePath);
}}
if (this.getProperty$S("name") == null ) {
this.setProperty$S$O("name", $I$(1).getName$S(filePath));
this.setProperty$S$O("path", filePath);
this.setProperty$S$O("absolutePath", filePath);
}return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return false;
});

Clazz.newMeth(C$, 'getImageAtFrame$I$java_awt_Image',  function (frameNumber, defaultImage) {
if (this.readOnly && frameNumber < this.paths.length ) {
if (frameNumber < this.images.length && this.images[frameNumber] != null  ) {
return this.images[frameNumber];
}if (!this.paths[frameNumber].equals$O("")) {
var image=$I$(14,"getVideoImage$S",[this.getAbsolutePath$S(this.paths[frameNumber])]);
if (image != null ) {
return image;
}}} else if (frameNumber < this.images.length && this.images[frameNumber] != null  ) {
return this.images[frameNumber];
}return defaultImage;
}, p$1);

Clazz.newMeth(C$, 'length',  function () {
if (this.readOnly) return this.paths.length;
return this.images.length;
}, p$1);

Clazz.newMeth(C$, 'loadImages$S$Z$java_util_function_Function',  function (imagePath, sequence, whenDone) {
var zipPaths=$I$(4).getZippedImagePaths$S(imagePath);
if (zipPaths != null  && zipPaths[0].equals$O(imagePath) ) {
return p$1.loadImages$SA$Z$java_util_function_Function.apply(this, [zipPaths, sequence, whenDone]);
}var path0=imagePath;
var res=$I$(14,"getResource$S",[this.getAbsolutePath$S(imagePath)]);
if (res == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Image " + imagePath + " not found" ]);
}var image=res.getImage$();
if (image == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["\"" + imagePath + "\" is not an image" ]);
}if (this.getProperty$S("name") == null ) {
this.setProperty$S$O("name", $I$(1).getName$S(imagePath));
this.setProperty$S$O("path", imagePath);
this.setProperty$S$O("absolutePath", res.getAbsolutePath$());
}if (whenDone == null  && !sequence ) {
var imges=this.readOnly && this.images.length > 0  ? null : Clazz.array($I$(10), -1, [image]);
var paths=Clazz.array(String, -1, [imagePath]);
return Clazz.array(java.lang.Object, -1, [imges, paths]);
}var pathList=Clazz.new_($I$(6,1));
pathList.add$O(imagePath);
var name=$I$(1).getName$S(imagePath);
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
var limit;
switch (digits) {
case 0:
var imges=this.readOnly && this.images.length > 0  ? null : Clazz.array($I$(10), -1, [image]);
var paths=Clazz.array(String, -1, [imagePath + extension]);
var ret=Clazz.array(java.lang.Object, -1, [imges, paths]);
if (whenDone != null ) whenDone.apply$O(ret);
return ret;
default:
limit=(Math.pow(10, digits)|0);
}
var imageList=Clazz.new_($I$(6,1));
imageList.add$O(image);
if (!sequence && whenDone != null  ) {
Clazz.new_($I$(15,1)).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(null, "\"" + name + "\" " + $I$(8).getString$S("ImageVideo.Dialog.LoadSequence.Message") + $I$(1).NEW_LINE + $I$(8).getString$S("ImageVideo.Dialog.LoadSequence.Query") , $I$(8).getString$S("ImageVideo.Dialog.LoadSequence.Title"), 0, 3, null, Clazz.array(String, -1, [$I$(8).getString$S("ImageVideo.Dialog.LoadSequence.Button.SingleImage"), $I$(8).getString$S("ImageVideo.Dialog.LoadSequence.Button.AllImages")]), $I$(8).getString$S("ImageVideo.Dialog.LoadSequence.Button.AllImages"), ((P$.ImageVideo$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageVideo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var sel=(e.getSource$()).getOption$();
switch (sel) {
case 0:
var imges=this.b$['org.opensourcephysics.media.core.ImageVideo'].readOnly && this.b$['org.opensourcephysics.media.core.ImageVideo'].images.length > 0  ? null : this.$finals$.imageList.toArray$OA(Clazz.array($I$(10), [0]));
var paths=this.$finals$.pathList.toArray$OA(Clazz.array(String, [0]));
this.$finals$.whenDone.apply$O(Clazz.array(java.lang.Object, -1, [imges, paths]));
return;
case 2:
this.$finals$.whenDone.apply$O(Clazz.array(java.lang.Object, -1, [Clazz.array($I$(10), [0]), Clazz.array(String, [0])]));
return;
case 1:
try {
p$1.loadImages$S$Z$java_util_function_Function.apply(this.b$['org.opensourcephysics.media.core.ImageVideo'], [this.$finals$.path0, true, this.$finals$.whenDone]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
this.$finals$.whenDone.apply$O(null);
} else {
throw e1;
}
}
return;
}
});
})()
), Clazz.new_(P$.ImageVideo$2.$init$,[this, {whenDone:whenDone,imageList:imageList,pathList:pathList,path0:path0}])));
return null;
}var root=imagePath.substring$I$I(0, ++len);
var n=Integer.parseInt$S(imagePath.substring$I(len));
try {
while (++n < limit){
var precacheImage=(!this.readOnly || imageList.isEmpty$() );
var num="000" + n;
imagePath=root + (num.substring$I(num.length$() - digits)) + extension ;
if (precacheImage) {
image=$I$(14,"getImage$S",[this.getAbsolutePath$S(imagePath)]);
if (image == null ) {
break;
}} else if (!$I$(14,"checkExists$S",[this.getAbsolutePath$S(imagePath)])) {
break;
}if (precacheImage) {
imageList.add$O(image);
}pathList.add$O(imagePath);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
var imges=this.readOnly && this.images.length > 0  ? null : imageList.toArray$OA(Clazz.array($I$(10), [0]));
var paths=pathList.toArray$OA(Clazz.array(String, [0]));
var ret=Clazz.array(java.lang.Object, -1, [imges, paths]);
if (whenDone != null ) whenDone.apply$O(ret);
return ret;
}, p$1);

Clazz.newMeth(C$, 'loadImages$SA$Z$java_util_function_Function',  function (imagePaths, sequence, whenDone) {
var path0=imagePaths[0];
var res=$I$(14,"getResource$S",[this.getAbsolutePath$S(path0)]);
if (res == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Image " + path0 + " not found" ]);
}var image=res.getImage$();
if (image == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["\"" + path0 + "\" is not an image" ]);
}if (this.getProperty$S("name") == null ) {
var n=path0.indexOf$S("!/");
var path=n > 0 ? path0.substring$I$I(0, n) : path0;
this.setProperty$S$O("ext", $I$(1).getExtension$S(path0));
this.setProperty$S$O("name", $I$(1).getName$S(path));
this.setProperty$S$O("path", path);
this.setProperty$S$O("absolutePath", n > 0 ? path : res.getAbsolutePath$());
}var imageList=Clazz.new_($I$(6,1));
imageList.add$O(image);
var precacheImage=!this.readOnly && false ;
if (precacheImage) {
for (var i=0; i < imagePaths.length; i++) {
image=$I$(14,"getImage$S",[this.getAbsolutePath$S(imagePaths[i])]);
if (image != null ) {
imageList.add$O(image);
}}
}var images=imageList.toArray$OA(Clazz.array($I$(10), [imageList.size$()]));
var ret=Clazz.array(java.lang.Object, -1, [images, imagePaths]);
if (whenDone != null ) whenDone.apply$O(ret);
return ret;
}, p$1);

Clazz.newMeth(C$, 'getValidPaths$',  function () {
var pathList=Clazz.new_($I$(6,1));
for (var i=0; i < this.paths.length; i++) {
if (!this.paths[i].equals$O("")) {
pathList.add$O(this.paths[i]);
}}
return pathList.toArray$OA(Clazz.array(String, [0]));
});

Clazz.newMeth(C$, 'getValidPathsRelativeTo$S',  function (base) {
var pathList=Clazz.new_($I$(6,1));
for (var i=0; i < this.paths.length; i++) {
if (!this.paths[i].equals$O("")) {
var absolutePath=this.getAbsolutePath$S(this.paths[i]);
pathList.add$O($I$(1).getPathRelativeTo$S$S(absolutePath, base));
}}
return pathList.toArray$OA(Clazz.array(String, [0]));
});

Clazz.newMeth(C$, 'insert$java_awt_ImageA$I$SA',  function (newImages, index, imagePaths) {
if (imagePaths == null  && (this.readOnly || newImages == null  ) ) return;
var len=p$1.length.apply(this, []);
index=Math.min(index, len);
var n=this.readOnly ? imagePaths.length : newImages.length;
if (newImages != null ) {
var buf=Clazz.array($I$(13), [n]);
for (var i=0; i < newImages.length; i++) {
var im=newImages[i];
if (Clazz.instanceOf(im, "java.awt.image.BufferedImage")) {
buf[i]=im;
} else {
var w=im.getWidth$java_awt_image_ImageObserver(null);
var h=im.getHeight$java_awt_image_ImageObserver(null);
buf[i]=Clazz.new_($I$(13,1).c$$I$I$I,[w, h, 1]);
var g=buf[i].createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(im, 0, 0, null);
g.dispose$();
}this.size.width=Math.max(this.size.width, buf[i].getWidth$());
this.size.height=Math.max(this.size.height, buf[i].getHeight$());
}
var newArray=Clazz.array($I$(10), [len + n]);
System.arraycopy$O$I$O$I$I(this.images, 0, newArray, 0, index);
System.arraycopy$O$I$O$I$I(buf, 0, newArray, index, n);
System.arraycopy$O$I$O$I$I(this.images, index, newArray, index + n, len - index);
this.images=newArray;
}if (imagePaths == null ) {
imagePaths=Clazz.array(String, [newImages.length]);
for (var i=0; i < imagePaths.length; i++) {
imagePaths[i]="";
}
}n=imagePaths.length;
var newPaths=Clazz.array(String, [len + n]);
System.arraycopy$O$I$O$I$I(this.paths, 0, newPaths, 0, index);
System.arraycopy$O$I$O$I$I(imagePaths, 0, newPaths, index, n);
System.arraycopy$O$I$O$I$I(this.paths, index, newPaths, index + n, len - index);
this.paths=newPaths;
this.rawImage=p$1.getImageAtFrame$I$java_awt_Image.apply(this, [index, this.rawImage]);
this.setFrameCount$I(p$1.length.apply(this, []));
this.endFrameNumber=this.frameCount - 1;
if (this.coords == null ) {
this.size.width=this.rawImage.getWidth$java_awt_image_ImageObserver(this.observer);
this.size.height=this.rawImage.getHeight$java_awt_image_ImageObserver(this.observer);
this.refreshBufferedImage$();
this.coords=Clazz.new_($I$(16,1).c$$I$org_opensourcephysics_media_core_Video,[this.frameCount, this]);
this.aspects=Clazz.new_($I$(17,1).c$$I$D,[this.frameCount, 1]);
} else {
this.size.width=Math.max(this.size.width, this.rawImage.getWidth$java_awt_image_ImageObserver(this.observer));
this.size.height=Math.max(this.size.height, this.rawImage.getHeight$java_awt_image_ImageObserver(this.observer));
this.coords.setLength$I(this.frameCount);
this.aspects.setLength$I(this.frameCount);
}});

Clazz.newMeth(C$, 'updateBufferedImage$',  function () {
this.refreshBufferedImage$();
if (!this.isValidImage) {
this.isValidImage=true;
var g=this.bufferedImage.createGraphics$();
if (this.rawImage.getWidth$java_awt_image_ImageObserver(null) < this.bufferedImage.getWidth$() || this.rawImage.getHeight$java_awt_image_ImageObserver(null) < this.bufferedImage.getHeight$() ) {
g.setColor$java_awt_Color(Clazz.new_($I$(18,1).c$$I$I$I$I,[255, 255, 255, 255]));
g.fillRect$I$I$I$I(0, 0, this.bufferedImage.getWidth$(), this.bufferedImage.getHeight$());
this.rgbSize.width=this.rawImage.getWidth$java_awt_image_ImageObserver(null);
this.rgbSize.height=this.rawImage.getHeight$java_awt_image_ImageObserver(null);
} else {
this.rgbSize.width=this.bufferedImage.getWidth$();
this.rgbSize.height=this.bufferedImage.getHeight$();
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.rawImage, 0, 0, null);
g.dispose$();
}});

Clazz.newMeth(C$, 'getImage$',  function () {
this.updateBufferedImage$();
if (this.filterStack.isEmpty$() || !this.filterStack.isEnabled$() ) {
return this.bufferedImage;
} else if (!this.isValidFilteredImage) {
this.isValidFilteredImage=true;
if (this.rgbSize.width == this.bufferedImage.getWidth$() && this.rgbSize.height == this.bufferedImage.getHeight$() ) {
this.filteredImage=this.filterStack.getFilteredImage$java_awt_image_BufferedImage(this.bufferedImage);
} else {
if (this.rgbImage == null  || this.rgbImage.getWidth$() != this.rgbSize.width  || this.rgbImage.getHeight$() != this.rgbSize.height ) this.rgbImage=Clazz.new_($I$(13,1).c$$I$I$I,[this.rgbSize.width, this.rgbSize.height, 1]);
var g=this.rgbImage.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.rawImage, 0, 0, null);
this.rgbImage=this.filterStack.getFilteredImage$java_awt_image_BufferedImage(this.rgbImage);
if (this.filteredImage == null  || this.filteredImage.getWidth$() != this.bufferedImage.getWidth$()  || this.filteredImage.getHeight$() != this.bufferedImage.getHeight$() ) this.filteredImage=Clazz.new_($I$(13,1).c$$I$I$I,[this.size.width, this.size.height, 1]);
g=this.filteredImage.createGraphics$();
g.setColor$java_awt_Color(Clazz.new_($I$(18,1).c$$I$I$I$I,[255, 255, 255, 255]));
g.fillRect$I$I$I$I(0, 0, this.filteredImage.getWidth$(), this.filteredImage.getHeight$());
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.rgbImage, 0, 0, null);
}}return this.filteredImage;
});

Clazz.newMeth(C$, 'getNextImagePathInSequence$S',  function (imagePath) {
var ext=$I$(1).getExtension$S(imagePath);
ext=ext == null  ? "" : "." + ext;
var raw=$I$(1).stripExtension$S(imagePath);
var len=raw.length$();
if (len == 0) return imagePath;
if (Character.isDigit$C(raw.charAt$I(len - 1))) {
var i=Integer.parseInt$S(raw.substring$I(len - 1));
if (i < 9) {
return raw.substring$I$I(0, len - 1) + ++i + ext ;
}var sub=C$.getNextImagePathInSequence$S(raw.substring$I$I(0, len - 1));
return sub + "0" + ext ;
}return imagePath;
}, 1);

Clazz.newMeth(C$, 'getStackPaths$S',  function (imagePath) {
return C$.getStackPaths$S$I(imagePath, -1);
}, 1);

Clazz.newMeth(C$, 'getStackPaths$S$I',  function (imagePath, limit) {
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
var imagePaths=Clazz.new_($I$(6,1));
if (digits == 0) {
imagePaths.add$O(imagePath + extension);
return imagePaths;
}if (limit < 0) {
limit=(Math.pow(10, digits)|0);
}var root=imagePath.substring$I$I(0, ++len);
var n=Integer.parseInt$S(imagePath.substring$I(len));
try {
imagePaths.add$O(imagePath + extension);
while (++n < limit){
var num="000" + n;
imagePath=root + (num.substring$I(num.length$() - digits)) + extension ;
imagePaths.add$O(imagePath);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return imagePaths;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(19,1));
}, 1);

Clazz.newMeth(C$, 'getTypeName$',  function () {
return "Image";
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getTypeName$() + " " + this.frameCount ;
});

Clazz.newMeth(C$, 'setStartTimes$',  function () {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageVideo, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var video=obj;
var vidBase=video.baseDir;
var trkBase=video.getProperty$S("base");
if (trkBase == null ) {
trkBase=vidBase;
}var paths=video.getValidPathsRelativeTo$S(trkBase);
var path=null;
if (vidBase != null  && vidBase.endsWith$S("zip!") ) {
var s=vidBase.substring$I$I(0, vidBase.indexOf$S("!"));
s=$I$(1).getPathRelativeTo$S$S(s, trkBase);
path=s;
} else if (paths.length > 0) {
path=paths[0];
}if (paths.length > 0) {
control.setValue$S$O("paths", paths);
control.setValue$S$O("path", path);
control.setBasepath$S(trkBase);
}if (!video.filterStack.isEmpty$()) {
control.setValue$S$O("filters", video.filterStack.getFilters$());
}control.setValue$S$D("delta_t", video.deltaT);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var paths=control.getObject$S("paths");
if (paths == null ) {
try {
var path=control.getString$S("path");
if (path != null ) {
var basepath=control.getBasepath$();
if ($I$(2).checkTempDirCache && basepath == null  ) path=$I$(2).tempDir + path;
var known=control.getPropertyNamesRaw$().contains$O("sequence");
var seq=control.getBoolean$S("sequence") || !known ;
return Clazz.new_($I$(3,1).c$$S$S$Z,[path, basepath, seq]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
return null;
} else {
throw ex;
}
}
}var sequences=control.getObject$S("sequences");
if (sequences != null  && paths != null  ) {
try {
var vid=Clazz.new_($I$(3,1).c$$S$S$Z,[paths[0], null, sequences[0]]);
for (var i=1; i < paths.length; i++) {
vid.append$S$Z(paths[i], sequences[i]);
}
return vid;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}if (paths == null  || paths.length == 0 ) {
return null;
}var vid=null;
var sequenceLoaded=false;
if (control.getPropertyNamesRaw$().contains$O("absolutePath")) {
try {
var path=control.getString$S("absolutePath");
if ($I$(4).zipFileFilter.accept$java_io_File(Clazz.new_($I$(5,1).c$$S,[path]))) {
var imagePaths=$I$(4).getZippedImagePaths$S(path);
if (imagePaths != null  && imagePaths.length > 0 ) {
vid=Clazz.new_($I$(3,1).c$$S$S$Z,[imagePaths[0], null, true]);
sequenceLoaded=true;
}} else {
vid=Clazz.new_($I$(3,1).c$$S$S$Z,[path, null, false]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}var badPaths=null;
for (var i=0; i < paths.length; i++) {
if (paths[i].toLowerCase$().endsWith$S(".zip") || paths[i].toLowerCase$().contains$CharSequence(".zip!") ) break;
try {
if (vid == null ) {
vid=Clazz.new_([paths[i], control.getBasepath$(), false],$I$(3,1).c$$S$S$Z);
} else if (!sequenceLoaded) {
vid.append$S$Z(paths[i], false);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (badPaths == null ) {
badPaths=Clazz.new_($I$(6,1));
}badPaths.add$O("\"" + paths[i] + "\"" );
} else {
throw ex;
}
}
}
if (vid == null ) {
try {
var path=control.getString$S("path");
if (path != null  && !path.toLowerCase$().endsWith$S(".zip")  && !path.toLowerCase$().contains$CharSequence(".zip!") ) {
if ($I$(2).checkTempDirCache) path=$I$(2).tempDir + path;
return Clazz.new_($I$(3,1).c$$S$S$Z,[path, null, true]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}if (vid == null  && badPaths != null  ) {
var s=badPaths.get$I(0);
var len=s.length$();
for (var i=1; i < badPaths.size$(); i++) {
s+=", " + badPaths.get$I(i);
}
var maxLen=len + 100;
if (s.length$() > maxLen) {
s=s.substring$I$I(0, len) + " ...";
}$I$(7,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(8).getString$S("ImageVideo.Dialog.MissingImages.Message") + ":\n" + s , $I$(8).getString$S("ImageVideo.Dialog.MissingImages.Title"), 2]);
}if (vid == null ) {
return null;
}vid.rawImage=vid.images[0];
vid.filterStack.addFilters$java_util_Collection(control.getObject$S("filters"));
var path=paths[0];
var ext=$I$(1).getExtension$S(path);
var type=$I$(4).getVideoType$S$S("Image", ext);
if (type != null ) vid.setProperty$S$O("video_type", type);
vid.deltaT=control.getDouble$S("delta_t");
return vid;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
