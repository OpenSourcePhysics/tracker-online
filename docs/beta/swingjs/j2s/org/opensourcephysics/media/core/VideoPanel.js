(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.media.core.VideoPanel','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.OSPLog',['java.awt.geom.Point2D','.Double'],'java.util.TreeMap','org.opensourcephysics.media.core.VidCartesianCoordinateStringBuilder','org.opensourcephysics.media.core.ImageCoordSystem','org.opensourcephysics.media.core.VideoPlayer','java.awt.Dimension','org.opensourcephysics.media.core.VideoClip','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XML','javax.swing.SwingUtilities','org.opensourcephysics.media.core.Trackable','org.opensourcephysics.media.core.Filter','java.awt.image.BufferedImage','org.opensourcephysics.media.core.TPoint',['org.opensourcephysics.media.core.VideoPanel','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractivePanel', 'java.beans.PropertyChangeListener');
C$.$classes$=[['Loader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changed=false;
this.video=null;
this.playerVisible=true;
this.drawingInImageSpace=false;
this.pt=Clazz.new_($I$(5,1));
this.timeUnit="s";
this.filterClasses=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['Z',['changed','playerVisible','drawingInImageSpace'],'D',['imageWidth','imageHeight','xOffset','yOffset','imageBorder'],'I',['progress','framesLoaded'],'S',['defaultFileName','timeUnit'],'O',['player','org.opensourcephysics.media.core.VideoPlayer','video','org.opensourcephysics.media.core.Video','coords','org.opensourcephysics.media.core.ImageCoordSystem','pt','java.awt.geom.Point2D','dataFile','java.io.File','filterClasses','java.util.Map','loader','org.opensourcephysics.media.core.VideoIO.FinalizableLoader','videoLoading','org.opensourcephysics.media.core.Video']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_media_core_Video.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_Video',  function (video) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setName$S("VideoPanel");
this.squareAspect=true;
this.addVideoPlayer$();
this.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder(Clazz.new_($I$(7,1)));
this.coords=Clazz.new_($I$(8,1));
this.setVideo$org_opensourcephysics_media_core_Video(video);
p$1.setImageSize$org_opensourcephysics_media_core_Video$Z.apply(this, [video, true]);
}, 1);

Clazz.newMeth(C$, 'addVideoPlayer$',  function () {
this.player=Clazz.new_($I$(9,1).c$$org_opensourcephysics_media_core_VideoPanel,[this]);
this.player.addFrameListener$java_beans_PropertyChangeListener(this);
this.add$java_awt_Component$O(this.player, "South");
var clip=this.player.getVideoClip$();
clip.addListener$java_beans_PropertyChangeListener(this);
});

Clazz.newMeth(C$, 'setImageSize$org_opensourcephysics_media_core_Video$Z',  function (video, isConstructor) {
var d;
if (video != null  && (d=video.getImageSize$Z(false)).width > 0 ) {
this.setImageWidth$D(d.width);
this.setImageHeight$D(d.height);
} else {
this.setImageWidth$D(640);
this.setImageHeight$D(480);
}if (!isConstructor) this.coords.setAllOriginsXY$D$D(0, 0);
if (isConstructor) {
var w=(this.getImageWidth$()|0);
var h=(this.getImageHeight$()|0);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[w, h + this.player.$height]));
this.coords.setAllOriginsXY$D$D(this.imageWidth / 2, this.imageHeight / 2);
} else {
this.coords.setAllOriginsXY$D$D(this.imageWidth / 2, this.imageHeight / 2);
if (video != null ) video.setProperty$S$O("measure", "invalidate");
}}, p$1);

Clazz.newMeth(C$, 'setVideo$org_opensourcephysics_media_core_Video$Z',  function (newVideo, playAllSteps) {
if (newVideo === this.video ) {
return;
}if (this.videoLoading != null  && this.videoLoading === newVideo  ) this.videoLoading=null;
p$1.initializePlayer$org_opensourcephysics_media_core_Video$org_opensourcephysics_media_core_Video$Z.apply(this, [this.video, newVideo, playAllSteps]);
});

Clazz.newMeth(C$, 'setVideo$org_opensourcephysics_media_core_Video',  function (newVideo) {
this.setVideo$org_opensourcephysics_media_core_Video$Z(newVideo, false);
});

Clazz.newMeth(C$, 'getVideo$',  function () {
return this.video;
});

Clazz.newMeth(C$, 'initializePlayer$org_opensourcephysics_media_core_Video$org_opensourcephysics_media_core_Video$Z',  function (prev, newVideo, playAllSteps) {
if (prev != null ) {
prev.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncImageReady", this);
prev.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this);
}if (newVideo != null ) {
newVideo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncImageReady", this);
newVideo.addPropertyChangeListener$S$java_beans_PropertyChangeListener("asyncImageReady", this);
newVideo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this);
newVideo.addPropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this);
}var prevClip=this.getPlayer$().getVideoClip$();
var newClip=Clazz.new_($I$(11,1).c$$org_opensourcephysics_media_core_Video,[newVideo]);
if (newVideo == null  && prevClip != null  ) {
var control=Clazz.new_($I$(12,1).c$$O,[prevClip]);
control.setValue$S$O("video", null);
control.loadObject$O(newClip);
}newClip.setPlayAllSteps$Z(playAllSteps);
this.getPlayer$().setVideoClip$org_opensourcephysics_media_core_VideoClip(newClip);
if (prev != null ) {
prev.dispose$();
}}, p$1);

Clazz.newMeth(C$, 'getImageWidth$',  function () {
return this.imageWidth;
});

Clazz.newMeth(C$, 'setImageWidth$D',  function (w) {
if (this.video != null ) {
var vidImage=this.video.getImage$();
if (vidImage != null ) {
w=Math.max(w, vidImage.getWidth$());
}}this.imageWidth=w;
});

Clazz.newMeth(C$, 'getImageHeight$',  function () {
return this.imageHeight;
});

Clazz.newMeth(C$, 'setImageHeight$D',  function (h) {
if (this.video != null ) {
var vidImage=this.video.getImage$();
if (vidImage != null ) {
h=Math.max(h, vidImage.getHeight$());
}}this.imageHeight=h;
});

Clazz.newMeth(C$, 'getImageBorder$',  function () {
return this.imageBorder;
});

Clazz.newMeth(C$, 'setImageBorder$D',  function (borderFraction) {
this.imageBorder=borderFraction;
});

Clazz.newMeth(C$, 'getTimeUnit$',  function () {
return this.timeUnit;
});

Clazz.newMeth(C$, 'setTimeUnit$S',  function (unit) {
if ("".equals$O(unit)) unit=null;
if (unit == null ) return false;
unit=unit.trim$();
if (this.timeUnit.equals$O(unit)) return false;
for (var c, $c = 0, $$c = unit.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (Character.isDigit$C(c)) {
return false;
}}
this.timeUnit=unit;
return true;
});

Clazz.newMeth(C$, 'setCoords$org_opensourcephysics_media_core_ImageCoordSystem',  function (newCoords) {
if (this.video != null ) {
this.video.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(newCoords);
} else {
this.coords=newCoords;
}});

Clazz.newMeth(C$, 'getCoords$',  function () {
return this.coords;
});

Clazz.newMeth(C$, 'setDataFile$java_io_File',  function (file) {
var prev=this.dataFile;
this.dataFile=file;
if (file != null ) {
this.defaultFileName=$I$(13,"forwardSlash$S",[file.getName$()]);
}this.firePropertyChange$S$O$O("datafile", prev, this.dataFile);
$I$(4).fine$S("Data file: " + file);
});

Clazz.newMeth(C$, 'getDataFile$',  function () {
return this.dataFile;
});

Clazz.newMeth(C$, 'getFilePath$',  function () {
return this.defaultFileName;
});

Clazz.newMeth(C$, 'setDrawingInImageSpace$Z',  function (imagespace) {
this.drawingInImageSpace=imagespace;
if (imagespace) {
this.setAutoscaleX$Z(false);
this.setAutoscaleY$Z(false);
} else {
this.setAutoscaleX$Z(true);
this.setAutoscaleY$Z(true);
}this.firePropertyChange$S$O$O("imagespace", null, Boolean.valueOf$Z(imagespace));
this.repaint$();
});

Clazz.newMeth(C$, 'isDrawingInImageSpace$',  function () {
return this.drawingInImageSpace;
});

Clazz.newMeth(C$, 'getPlayer$',  function () {
return this.player;
});

Clazz.newMeth(C$, 'setPlayerVisible$Z',  function (visible) {
if (visible == this.playerVisible ) {
return;
}var setPlayerVis=((P$.VideoPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.media.core.VideoPanel'].playerVisible=this.$finals$.visible;
if (this.b$['org.opensourcephysics.media.core.VideoPanel'].playerVisible) {
this.b$['java.awt.Container'].add$java_awt_Component$O.apply(this.b$['java.awt.Container'], [this.b$['org.opensourcephysics.media.core.VideoPanel'].player, "South"]);
} else {
this.b$['java.awt.Container'].remove$java_awt_Component.apply(this.b$['java.awt.Container'], [this.b$['org.opensourcephysics.media.core.VideoPanel'].player]);
}this.b$['org.opensourcephysics.display.DrawingPanel'].repaint$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});
})()
), Clazz.new_(P$.VideoPanel$1.$init$,[this, {visible:visible}]));
if ($I$(3).isJS) setPlayerVis.run$();
 else $I$(14).invokeLater$Runnable(setPlayerVis);
});

Clazz.newMeth(C$, 'isPlayerVisible$',  function () {
return this.playerVisible;
});

Clazz.newMeth(C$, 'getStepNumber$',  function () {
return this.getPlayer$().getStepNumber$();
});

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return this.getPlayer$().getFrameNumber$();
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
var list=C$.superclazz.prototype.getDrawables$.apply(this, []);
if (this.isDrawingInImageSpace$()) {
for (var d, $d = list.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
if (!Clazz.getClass($I$(15),[]).isInstance$O(d)) {
list.remove$O(d);
}}
}return list;
});

Clazz.newMeth(C$, 'getDrawablesNoClone$',  function () {
return this.getDrawables$();
});

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (drawable == null ) {
return;
}if (Clazz.instanceOf(drawable, "org.opensourcephysics.media.core.Video")) {
this.setVideo$org_opensourcephysics_media_core_Video(drawable);
} else {
C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [drawable]);
}this.repaint$();
});

Clazz.newMeth(C$, 'removeDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (drawable === this.video ) {
this.setVideo$org_opensourcephysics_media_core_Video(null);
} else {
C$.superclazz.prototype.removeDrawable$org_opensourcephysics_display_Drawable.apply(this, [drawable]);
}});

Clazz.newMeth(C$, 'removeObjectsOfClass$Class',  function (c) {
if (this.video.getClass$() === c ) {
this.setVideo$org_opensourcephysics_media_core_Video(null);
} else {
C$.superclazz.prototype.removeObjectsOfClass$Class.apply(this, [c]);
}});

Clazz.newMeth(C$, 'clear$',  function () {
C$.superclazz.prototype.clear$.apply(this, []);
if (this.video != null ) {
C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [this.video]);
}});

Clazz.newMeth(C$, 'addFilter$Class',  function (filterClass) {
if (Clazz.getClass($I$(16)).isAssignableFrom$Class(filterClass)) {
this.filterClasses.put$O$O(filterClass.getName$(), filterClass);
}});

Clazz.newMeth(C$, 'removeFilter$Class',  function (filterClass) {
if (Clazz.getClass($I$(16)).isAssignableFrom$Class(filterClass)) {
this.filterClasses.remove$O(filterClass.getName$());
}});

Clazz.newMeth(C$, 'clearFilters$',  function () {
this.filterClasses.clear$();
});

Clazz.newMeth(C$, 'getFilters$',  function () {
return this.filterClasses;
});

Clazz.newMeth(C$, 'hideMouseBox$',  function () {
this.setMessage$S$I(null, 0);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var name=e.getPropertyName$();
switch (name) {
case "size":
var dim=e.getNewValue$();
this.setImageWidth$D(dim.width);
this.setImageHeight$D(dim.height);
break;
case "coords":
this.coords=this.video.getCoords$();
break;
case "asyncImageReady":
break;
case "image":
case "videoVisible":
this.repaint$();
break;
case "asyncVideoReady":
var newVideo=e.getNewValue$();
newVideo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this);
if (this.loader == null ) {
p$1.setImageSize$org_opensourcephysics_media_core_Video$Z.apply(this, [newVideo, false]);
this.coords=newVideo.getCoords$();
} else {
this.loader.finalizeLoading$();
}this.repaint$();
break;
case "stepnumber":
this.repaint$();
break;
case "videoclip":
(e.getOldValue$()).removeListener$java_beans_PropertyChangeListener(this);
var clip=e.getNewValue$();
clip.addListener$java_beans_PropertyChangeListener(this);
if (this.video != null ) {
this.video.removeListener$java_beans_PropertyChangeListener(this);
C$.superclazz.prototype.removeDrawable$org_opensourcephysics_display_Drawable.apply(this, [this.video]);
}this.video=clip.getVideo$();
if (this.video != null ) {
this.videoLoading=null;
this.video.addListener$java_beans_PropertyChangeListener(this);
if (this.video.isMeasured$()) {
this.coords=this.video.getCoords$();
} else {
this.video.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(this.coords);
}{
this.drawableList.add$I$O(0, this.video);
}var d=this.video.getImageSize$Z(true);
if (d.width > 0) {
this.setImageWidth$D(d.width);
this.setImageHeight$D(d.height);
}break;
}this.repaint$();
}
});

Clazz.newMeth(C$, 'importData$org_opensourcephysics_display_Data$O',  function (data, source) {
return null;
});

Clazz.newMeth(C$, 'paintEverything$java_awt_Graphics',  function (g) {
if (this.playerVisible) {
this.bottomGutter+=this.player.$height;
}C$.superclazz.prototype.paintEverything$java_awt_Graphics.apply(this, [g]);
if (this.playerVisible) {
this.bottomGutter-=this.player.$height;
}});

Clazz.newMeth(C$, 'scale$java_util_ArrayList',  function (drawables) {
if (this.drawingInImageSpace) {
this.xminPreferred=-this.imageBorder * this.imageWidth + this.xOffset;
this.xmaxPreferred=this.imageWidth + this.imageBorder * this.imageWidth + this.xOffset;
this.yminPreferred=this.imageHeight + this.imageBorder * this.imageHeight + this.yOffset;
this.ymaxPreferred=-this.imageBorder * this.imageHeight + this.yOffset;
}C$.superclazz.prototype.scale$java_util_ArrayList.apply(this, [drawables]);
});

Clazz.newMeth(C$, 'checkImage$',  function () {
var d=this.getSize$();
if (this.playerVisible) {
d.height-=this.player.$height;
}if ((d.width <= 2) || (d.height <= 2) ) {
return false;
}if ((this.offscreenImage == null ) || (d.width != this.offscreenImage.getWidth$()) || (d.height != this.offscreenImage.getHeight$())  ) {
this.offscreenImage=Clazz.new_($I$(17,1).c$$I$I$I,[d.width, d.height, 1]);
}if (this.offscreenImage == null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getWorldMousePoint$',  function () {
this.pt.setLocation$D$D(this.getMouseX$(), this.getMouseY$());
if (this.isDrawingInImageSpace$()) {
var n=this.getFrameNumber$();
var toWorld=this.getCoords$().getToWorldTransform$I(n);
toWorld.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.pt, this.pt);
}return this.pt;
});

Clazz.newMeth(C$, 'getXYCoordinateStringBuilder$org_opensourcephysics_media_core_TPoint',  function (point) {
return $I$(18).xyStringBuilder;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(19,1));
}, 1);

Clazz.newMeth(C$, 'setLoader$org_opensourcephysics_media_core_VideoIO_FinalizableLoader',  function (loader) {
this.loader=loader;
});

Clazz.newMeth(C$, 'setResourceLoading$org_opensourcephysics_media_core_Video',  function (video) {
this.videoLoading=video;
});

Clazz.newMeth(C$, 'setProgress$I',  function (p) {
this.progress=p;
});

Clazz.newMeth(C$, 'getProgress$',  function () {
return this.progress;
});

Clazz.newMeth(C$, 'releaseResources$',  function () {
if (this.videoLoading != null  && this.videoLoading !== this.video  ) this.videoLoading.dispose$();
if (this.video != null ) this.video.dispose$();
this.videoLoading=this.video=null;
});

Clazz.newMeth(C$, 'offerReloadVM$S$S',  function (ext, message) {
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.video != null ) {
this.video.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncImageReady", this);
this.video.removePropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this);
}this.video=null;
if (this.coords != null ) this.coords.dispose$();
this.coords=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoPanel, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader'], ['org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.media.core.VideoIO.FinalizableLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['finalized'],'O',['control','org.opensourcephysics.controls.XMLControlElement','clip','org.opensourcephysics.media.core.VideoClip','videoPanel','org.opensourcephysics.media.core.VideoPanel']]]

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
this.control=control;
this.videoPanel=obj;
if (this.videoPanel.progress >= 80 || this.getClip$org_opensourcephysics_controls_XMLControl(control) ) {
this.finalizeLoading$();
}return this.videoPanel;
});

Clazz.newMeth(C$, 'getClip$org_opensourcephysics_controls_XMLControl',  function (control) {
if (!control.getPropertyNamesRaw$().contains$O("videoclip")) {
this.videoPanel.progress=80;
return true;
}if (this.clip == null ) this.clip=control.getObject$S("videoclip");
if (this.clip != null ) {
var video=this.clip.getVideo$();
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.IncrementallyLoadable")) {
var iVideo=this.clip.getVideo$();
if (iVideo.getLoadableFrameCount$() <= 1) {
var child=control.getChildControl$S("videoclip");
if (child != null  && child.getPropertyNamesRaw$().contains$O("video_framecount") ) {
var frameCount=child.getInt$S("video_framecount");
iVideo.setLoadableFrameCount$I(frameCount);
}}try {
if (iVideo.loadMoreFrames$I($I$(2).incrementToLoad)) {
this.videoPanel.setResourceLoading$org_opensourcephysics_media_core_Video(this.clip.getVideo$());
this.videoPanel.framesLoaded=iVideo.getLoadedFrameCount$();
this.videoPanel.progress=$I$(2,"progressForFraction$D$D",[iVideo.getLoadedFrameCount$(), iVideo.getLoadableFrameCount$()]);
return false;
}if ($I$(2).loadIncrementally) {
control.getObject$S("videoclip");
}this.videoPanel.progress=80;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
} else if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.AsyncVideoI")) {
this.videoPanel.framesLoaded=(video).getLoadedFrameCount$();
this.videoPanel.progress=(video).getProgress$();
} else {
this.videoPanel.progress=80;
}}var child=control.getChildControl$S("videoclip");
if (child != null ) {
if (!$I$(3).unzipFiles) {
child.setBasepath$S(control.getBasepath$());
}}if (this.clip != null ) {
var video=this.clip.getVideo$();
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.AsyncVideoI")) {
this.videoPanel.setLoader$org_opensourcephysics_media_core_VideoIO_FinalizableLoader(this);
video.addPropertyChangeListener$S$java_beans_PropertyChangeListener("asyncVideoReady", this.videoPanel);
return false;
}}return true;
});

Clazz.newMeth(C$, 'finalizeClip$',  function () {
var video=(this.clip == null  ? null : this.clip.getVideo$());
if (this.clip != null ) {
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.AsyncVideoI")) {
this.clip.loader.finalizeLoading$();
}this.videoPanel.getPlayer$().setVideoClip$org_opensourcephysics_media_core_VideoClip(this.clip);
}return video;
});

Clazz.newMeth(C$, 'finalizeLoading$',  function () {
this.videoPanel.setLoader$org_opensourcephysics_media_core_VideoIO_FinalizableLoader(null);
this.finalizeClip$();
this.videoPanel.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(this.control.getObject$S("coords"));
var drawables=this.control.getObject$S("drawables");
if (drawables != null ) {
var it=drawables.iterator$();
while (it.hasNext$()){
this.videoPanel.addDrawable$org_opensourcephysics_display_Drawable(it.next$());
}
}});

Clazz.newMeth(C$, 'isFinalized$',  function () {
return this.finalized;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(4).finalized$O(this);
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var vidPanel=obj;
control.setValue$S$O("videoclip", vidPanel.getPlayer$().getVideoClip$());
control.setValue$S$O("coords", vidPanel.getCoords$());
var list=vidPanel.getDrawables$();
list.remove$O(vidPanel.getVideo$());
if (!list.isEmpty$()) {
control.setValue$S$O("drawables", list);
}});

Clazz.newMeth(C$, 'dispose$',  function () {
this.control.dispose$();
this.control=null;
this.videoPanel=null;
this.finalized=true;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
