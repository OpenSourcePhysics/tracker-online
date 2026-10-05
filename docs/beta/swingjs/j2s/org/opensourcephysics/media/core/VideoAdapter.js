(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.OSPLog',['java.awt.geom.Point2D','.Double'],'java.awt.Dimension','java.util.HashMap','org.opensourcephysics.media.core.FilterStack','javax.swing.SwingUtilities','java.awt.image.BufferedImage','org.opensourcephysics.tools.ResourceLoader','java.io.File']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported'], 'org.opensourcephysics.media.core.Video');
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=Clazz.new_($I$(5,1));
this.displayedSize=Clazz.new_($I$(5,1));
this.frameCount=0;
this.frameNumber=0;
this.rate=1;
this.playing=false;
this.looping=false;
this.mouseEnabled=false;
this.visible=true;
this.isMeasured=false;
this.isValidMeasure=false;
this.widthDominates=true;
this.isValidImage=false;
this.isValidFilteredImage=false;
this.properties=Clazz.new_($I$(6,1));
this.filterStack=Clazz.new_($I$(7,1));
this.doNotify=true;
},1);

C$.$fields$=[['Z',['playing','looping','mouseEnabled','visible','isMeasured','isValidMeasure','widthDominates','isValidImage','isValidFilteredImage','doNotify'],'D',['rate','minX','maxX','minY','maxY'],'I',['frameCount','frameNumber','startFrameNumber','endFrameNumber'],'S',['baseDir'],'O',['rawImage','java.awt.Image','size','java.awt.Dimension','+displayedSize','bufferedImage','java.awt.image.BufferedImage','+filteredImage','coords','org.opensourcephysics.media.core.ImageCoordSystem','aspects','org.opensourcephysics.media.core.DoubleArray','properties','java.util.HashMap','filterStack','org.opensourcephysics.media.core.FilterStack','clearRaster','java.awt.image.DataBufferInt','startTimesMS','double[]']]
,['I',['ntest','ntest1','ntest2'],'O',['corner','java.awt.geom.Point2D.Double']]]

Clazz.newMeth(C$, 'setNotify$Z',  function (b) {
this.doNotify=b;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.initialize$();
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.rawImage == null  || !this.visible  || this.filterStack == null  ) {
return;
}var xoffset=0;
var yoffset=0;
var g2=null;
if (((Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel")) && (panel).isDrawingInImageSpace$() ) || this.isMeasured ) {
g2=g.create$();
var at=panel.getPixelTransform$();
g2.transform$java_awt_geom_AffineTransform(at);
var coords=null;
if (Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel")) {
var vidPanel=panel;
if (!vidPanel.isDrawingInImageSpace$()) {
coords=vidPanel.getCoords$();
}} else {
coords=this.coords;
}if (coords != null ) {
at=coords.getToWorldTransform$I(this.frameNumber);
g2.transform$java_awt_geom_AffineTransform(at);
}g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.filterStack.isEmpty$() || !this.filterStack.isEnabled$()  ? this.rawImage : this.getImage$(), xoffset, yoffset, panel);
g2.dispose$();
} else {
var centerX=(panel.getXMax$() + panel.getXMin$()) / 2;
var centerY=(panel.getYMax$() + panel.getYMin$()) / 2;
xoffset=panel.xToPix$D(centerX) - (this.size.width/2|0);
yoffset=panel.yToPix$D(centerY) - (this.size.height/2|0);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.filterStack.isEmpty$() || !this.filterStack.isEnabled$()  ? this.rawImage : this.getImage$(), xoffset, yoffset, panel);
}});

Clazz.newMeth(C$, 'invalidateVideoAndFilter$',  function () {
this.isValidImage=this.isValidFilteredImage=false;
});

Clazz.newMeth(C$, 'notifyFrame$I$Z',  function (n, isAsync) {
if (!this.doNotify) return;
var r=((P$.VideoAdapter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoAdapter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["framenumber", null, Integer.valueOf$I(this.$finals$.n)]);
});
})()
), Clazz.new_(P$.VideoAdapter$1.$init$,[this, {n:n}]));
if (isAsync) $I$(8).invokeLater$Runnable(r);
 else r.run$();
});

Clazz.newMeth(C$, 'getStartFrameNumber$',  function () {
return this.startFrameNumber;
});

Clazz.newMeth(C$, 'setStartFrameNumber$I',  function (n) {
if (n == this.startFrameNumber) {
return;
}n=Math.max(0, n);
this.startFrameNumber=Math.min(this.endFrameNumber, n);
this.firePropertyChange$S$O$O("startframe", null, Integer.valueOf$I(this.startFrameNumber));
});

Clazz.newMeth(C$, 'getEndFrameNumber$',  function () {
return this.endFrameNumber;
});

Clazz.newMeth(C$, 'setEndFrameNumber$I',  function (n) {
if (n == this.endFrameNumber) {
return;
}if (this.frameCount > 1) {
n=Math.min(this.frameCount - 1, n);
}this.endFrameNumber=Math.max(this.startFrameNumber, n);
this.firePropertyChange$S$O$O("endframe", null, Integer.valueOf$I(this.endFrameNumber));
});

Clazz.newMeth(C$, 'reset$',  function () {
this.stop$();
this.setFrameNumber$I(this.startFrameNumber);
});

Clazz.newMeth(C$, 'goToStart$',  function () {
this.setFrameNumber$I(this.startFrameNumber);
});

Clazz.newMeth(C$, 'goToEnd$',  function () {
this.setFrameNumber$I(this.endFrameNumber);
});

Clazz.newMeth(C$, 'setPlaying$Z',  function (playing) {
if (playing) {
this.play$();
} else {
this.stop$();
}});

Clazz.newMeth(C$, 'isPlaying$',  function () {
return this.playing;
});

Clazz.newMeth(C$, 'setLooping$Z',  function (loops) {
if (this.looping == loops ) {
return;
}this.looping=loops;
this.firePropertyChange$S$O$O("looping", null, Boolean.valueOf$Z(this.looping));
});

Clazz.newMeth(C$, 'isLooping$',  function () {
return this.looping;
});

Clazz.newMeth(C$, 'getRate$',  function () {
return this.rate;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.visible=visible;
this.firePropertyChange$S$O$O("videoVisible", null, Boolean.valueOf$Z(visible));
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
if (!this.isValidMeasure) {
this.findMinMaxValues$();
}return this.minX;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
if (!this.isValidMeasure) {
this.findMinMaxValues$();
}return this.maxX;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
if (!this.isValidMeasure) {
this.findMinMaxValues$();
}return this.minY;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
if (!this.isValidMeasure) {
this.findMinMaxValues$();
}return this.maxY;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.isMeasured;
});

Clazz.newMeth(C$, 'getRawBufferedImage$',  function () {
this.updateBufferedImage$();
return this.bufferedImage;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
return (this.mouseEnabled ? this : null);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
this.mouseEnabled=enabled;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.mouseEnabled;
});

Clazz.newMeth(C$, 'setFrameX$I$D',  function (n, x) {
this.setFrameXY$I$D$D(n, x, this.coords.imageToWorldY$I$D$D(n, 0, 0));
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameX$I$D(n, x);
}
});

Clazz.newMeth(C$, 'setFrameY$I$D',  function (n, y) {
this.setFrameXY$I$D$D(n, this.coords.imageToWorldX$I$D$D(n, 0, 0), y);
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameY$I$D(n, y);
}
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.coords.imageToWorldX$I$D$D(this.frameNumber, 0, 0);
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.coords.imageToWorldY$I$D$D(this.frameNumber, 0, 0);
});

Clazz.newMeth(C$, 'setFrameXY$I$D$D',  function (n, x, y) {
var sin=this.coords.getSine$I(n);
var cos=this.coords.getCosine$I(n);
var tx=this.coords.getScaleX$I(n) * (y * sin - x * cos);
var ty=this.coords.getScaleY$I(n) * (y * cos + x * sin);
this.coords.setOriginXY$I$D$D(n, tx, ty);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameXY$I$D$D(n, x, y);
}
});

Clazz.newMeth(C$, 'setFrameRelativeAspect$I$D',  function (n, relativeAspect) {
if ((relativeAspect < 0.001 ) || (relativeAspect > 1000 ) ) {
return;
}this.aspects.set$I$D(n, Math.abs(relativeAspect));
if (this.isMeasured) {
if (this.widthDominates) {
this.setFrameWidth$I$D(n, this.size.width / this.coords.getScaleX$I(n));
} else {
this.setFrameHeight$I$D(n, this.size.height / this.coords.getScaleY$I(n));
}}});

Clazz.newMeth(C$, 'setRelativeAspect$D',  function (relativeAspect) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameRelativeAspect$I$D(n, relativeAspect);
}
});

Clazz.newMeth(C$, 'getRelativeAspect$',  function () {
return this.aspects.get$I(this.frameNumber);
});

Clazz.newMeth(C$, 'setFrameWidth$I$D',  function (n, width) {
if (width == 0 ) {
return;
}width=Math.abs(width);
var x=this.coords.imageToWorldX$I$D$D(n, 0, 0);
var y=this.coords.imageToWorldY$I$D$D(n, 0, 0);
var scaleX=this.size.width / width;
this.coords.setScaleX$I$D(n, scaleX);
this.coords.setScaleY$I$D(n, scaleX * this.aspects.get$I(n));
this.widthDominates=true;
this.setFrameXY$I$D$D(n, x, y);
});

Clazz.newMeth(C$, 'setWidth$D',  function (width) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameWidth$I$D(n, width);
}
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.size.width / this.coords.getScaleX$I(this.frameNumber);
});

Clazz.newMeth(C$, 'setFrameHeight$I$D',  function (n, height) {
if (height == 0 ) {
return;
}height=Math.abs(height);
var x=this.coords.imageToWorldX$I$D$D(n, 0, 0);
var y=this.coords.imageToWorldY$I$D$D(n, 0, 0);
var scaleY=this.size.height / height;
this.coords.setScaleY$I$D(n, scaleY);
this.coords.setScaleX$I$D(n, scaleY / this.aspects.get$I(n));
this.widthDominates=false;
this.setFrameXY$I$D$D(n, x, y);
});

Clazz.newMeth(C$, 'setHeight$D',  function (height) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameHeight$I$D(n, height);
}
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.size.height / this.coords.getScaleY$I(this.frameNumber);
});

Clazz.newMeth(C$, 'getImageSize$Z',  function (withFilters) {
if (withFilters) {
var img=this.getImage$();
if (img != null ) {
this.displayedSize.setSize$I$I(img.getWidth$(), img.getHeight$());
return this.displayedSize;
}}return this.size;
});

Clazz.newMeth(C$, 'setFrameAngle$I$D',  function (n, theta) {
var x=this.coords.imageToWorldX$I$D$D(n, 0, 0);
var y=this.coords.imageToWorldY$I$D$D(n, 0, 0);
var cos=Math.cos(theta);
var sin=Math.sin(theta);
this.coords.setCosineSine$I$D$D(n, cos, -sin);
this.setFrameXY$I$D$D(n, x, y);
});

Clazz.newMeth(C$, 'setAngle$D',  function (theta) {
for (var n=0; n < this.frameCount; n++) {
this.setFrameAngle$I$D(n, theta);
}
});

Clazz.newMeth(C$, 'getAngle$',  function () {
return -this.coords.getAngle$I(this.frameNumber);
});

Clazz.newMeth(C$, 'step$',  function () {
this.stop$();
this.setFrameNumber$I(this.frameNumber + 1);
});

Clazz.newMeth(C$, 'back$',  function () {
this.stop$();
this.setFrameNumber$I(this.frameNumber - 1);
});

Clazz.newMeth(C$, 'getFrameCount$',  function () {
return this.frameCount;
});

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return this.frameNumber;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(3).finalized$O(this);
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.filterStack.addPropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
this.filterStack.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
});

Clazz.newMeth(C$, 'refreshBufferedImage$',  function () {
if (this.bufferedImage != null  && this.bufferedImage.getWidth$() == this.size.width  && this.bufferedImage.getHeight$() == this.size.height ) return;
this.bufferedImage=Clazz.new_($I$(9,1).c$$I$I$I,[this.size.width, this.size.height, 1]);
this.isValidImage=false;
});

Clazz.newMeth(C$, 'findMinMaxValues$',  function () {
var clip=this.getProperty$S("videoclip");
var at=this.coords.getToWorldTransform$I(clip == null  ? 0 : clip.getStartFrameNumber$());
this.minX=this.minY=1.7976931348623157E308;
this.maxX=this.maxY=-1.7976931348623157E308;
p$1.addMinMax$java_awt_geom_AffineTransform$I$I.apply(this, [at, 0, 0]);
var w=this.size.width;
var h=this.size.height;
for (var i=(clip == null  ? this.frameCount : clip.getStepCount$()); --i >= 0; ) {
at=this.coords.getToWorldTransform$I(clip == null  ? i : clip.stepToFrame$I(i));
p$1.addMinMax$java_awt_geom_AffineTransform$I$I.apply(this, [at, 0, 0]);
p$1.addMinMax$java_awt_geom_AffineTransform$I$I.apply(this, [at, w, 0]);
p$1.addMinMax$java_awt_geom_AffineTransform$I$I.apply(this, [at, w, h]);
p$1.addMinMax$java_awt_geom_AffineTransform$I$I.apply(this, [at, 0, h]);
}
this.isValidMeasure=true;
});

Clazz.newMeth(C$, 'addMinMax$java_awt_geom_AffineTransform$I$I',  function (at, x, y) {
C$.corner.setLocation$D$D(x, y);
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(C$.corner, C$.corner);
this.minX=Math.min(C$.corner.x, this.minX);
this.maxX=Math.max(C$.corner.x, this.maxX);
this.minY=Math.min(C$.corner.y, this.minY);
this.maxY=Math.max(C$.corner.y, this.maxY);
}, p$1);

Clazz.newMeth(C$, 'getAbsolutePath$S',  function (path) {
if (this.baseDir == null ) this.baseDir=$I$(1,"getDirectoryPath$S",[this.getProperty$S("absolutePath")]);
var base=this.baseDir;
var n=base.indexOf$S("file:");
if (n > -1) {
base=base.substring$I$I(n + 5, base.length$());
if ($I$(2).isWindows$() && base.startsWith$S("/") ) base=base.substring$I$I(1, base.length$());
}if (base !== ""  && !path.replace$C$C("\\", "/").startsWith$S(base) ) {
path=base + "/" + path ;
if (!$I$(10).isHTTP$S(base)) path=$I$(1,"getAbsolutePath$java_io_File",[Clazz.new_($I$(11,1).c$$S,[path])]);
}return path;
});

Clazz.newMeth(C$, 'notifySize$java_awt_Dimension',  function (newDim) {
if (!this.doNotify) return;
if ((newDim.height != this.size.height) || (newDim.width != this.size.width) ) {
var oldSize=Clazz.new_($I$(5,1).c$$java_awt_Dimension,[this.size]);
this.size.width=newDim.width;
this.size.height=newDim.height;
this.refreshBufferedImage$();
this.firePropertyChange$S$O$O("size", oldSize, this.size);
}});

Clazz.newMeth(C$, 'setFrameNumber$I',  function (n) {
if (n == this.frameNumber) {
return;
}this.frameNumber=Math.min(Math.max(n, this.startFrameNumber), this.endFrameNumber);
if (this.doNotify) this.firePropertyChange$S$O$O("nextframe", null, Integer.valueOf$I(this.frameNumber));
});

Clazz.newMeth(C$, 'getFrameTime$I',  function (i) {
if ((i >= this.startTimesMS.length) || (i < 0) ) {
return -1;
}return this.startTimesMS[i];
});

Clazz.newMeth(C$, 'getFrameDuration$I',  function (n) {
if (this.frameCount == 1) {
return this.getFrameCountDurationMS$();
}if (n == this.frameCount - 1) {
return this.getFrameCountDurationMS$() - this.getFrameTime$I(n);
}return this.getFrameTime$I(n + 1) - this.getFrameTime$I(n);
});

Clazz.newMeth(C$, 'getStartTime$',  function () {
return this.getFrameTime$I(this.getStartFrameNumber$());
});

Clazz.newMeth(C$, 'setStartTime$D',  function (millis) {
millis=Math.abs(millis);
for (var i=0; i < this.startTimesMS.length; i++) {
var t=this.startTimesMS[i];
if (millis < t ) {
this.setStartFrameNumber$I(i - 1);
break;
}}
});

Clazz.newMeth(C$, 'getEndTime$',  function () {
var n=this.getEndFrameNumber$();
if (n < this.getFrameCount$() - 1) return this.getFrameTime$I(n + 1);
return this.getFrameCountDurationMS$();
});

Clazz.newMeth(C$, 'setEndTime$D',  function (millis) {
millis=Math.abs(millis);
millis=Math.min(this.getFrameCountDurationMS$(), millis);
for (var i=0; i < this.startTimesMS.length; i++) {
var t=this.startTimesMS[i];
if (millis < t ) {
this.setEndFrameNumber$I(i - 1);
break;
}}
});

Clazz.newMeth(C$, 'setRate$D',  function (rate) {
rate=Math.abs(rate);
if ((rate == this.rate ) || (rate == 0 ) ) {
return;
}this.rate=rate;
});

Clazz.newMeth(C$, 'getImage$',  function () {
this.updateBufferedImage$();
if (this.filterStack.isEmpty$() || !this.filterStack.isEnabled$() ) {
return this.bufferedImage;
} else if (!this.isValidFilteredImage) {
this.isValidFilteredImage=true;
this.filteredImage=this.filterStack.getFilteredImage$java_awt_image_BufferedImage(this.bufferedImage);
}return this.filteredImage;
});

Clazz.newMeth(C$, 'updateBufferedImage$',  function () {
this.refreshBufferedImage$();
if (!this.isValidImage) {
this.isValidImage=true;
var g=this.bufferedImage.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.rawImage, 0, 0, null);
g.dispose$();
}});

Clazz.newMeth(C$, 'setFrameCount$I',  function (n) {
this.frameCount=n;
});

Clazz.newMeth(C$, 'setCoords$org_opensourcephysics_media_core_ImageCoordSystem',  function (newCoords) {
if (newCoords === this.coords ) {
return;
}if (this.coords != null ) {
this.coords.removePropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
}this.coords=newCoords;
this.coords.addPropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
this.isMeasured=true;
this.isValidMeasure=false;
this.firePropertyChange$S$O$O("coords", null, newCoords);
});

Clazz.newMeth(C$, 'getCoords$',  function () {
return this.coords;
});

Clazz.newMeth(C$, 'setFilterStack$org_opensourcephysics_media_core_FilterStack',  function (stack) {
if (stack === this.filterStack ) return;
if (this.filterStack != null ) {
this.filterStack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
this.filterStack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}this.filterStack=stack;
this.filterStack.addPropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
this.filterStack.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
});

Clazz.newMeth(C$, 'getFilterStack$',  function () {
return this.filterStack;
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
if (name.equals$O("measure")) {
this.isValidMeasure=false;
} else {
this.properties.put$O$O(name, value);
}});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.properties.get$O(name);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.properties.keySet$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.coords != null ) this.coords.removePropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
this.coords=null;
if (this.filterStack != null ) {
this.filterStack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
this.filterStack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.filterStack.setInspectorsVisible$Z(false);
this.filterStack=null;
}this.bufferedImage=this.filteredImage=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "transform":
this.isMeasured=true;
this.isValidMeasure=false;
break;
case "image":
case "tab":
this.isValidFilteredImage=false;
this.firePropertyChange$java_beans_PropertyChangeEvent(e);
break;
}
});

C$.$static$=function(){C$.$static$=0;
C$.corner=Clazz.new_($I$(4,1).c$$D$D,[0, 0]);
C$.ntest=0;
C$.ntest1=0;
C$.ntest2=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoAdapter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var video=obj;
var base=video.getProperty$S("base");
var absPath=video.getProperty$S("absolutePath");
if (base != null  && absPath != null  ) control.setValue$S$O("path", $I$(1).getPathRelativeTo$S$S(absPath, base));
 else {
var path=video.getProperty$S("path");
control.setValue$S$O("path", path);
}if (!video.getFilterStack$().isEmpty$()) {
control.setValue$S$O("filters", video.getFilterStack$().getFilters$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
try {
var fullpath=control.getString$S("absolutePath");
if (fullpath != null ) return this.createVideo$S(fullpath);
var path=control.getString$S("path");
if ($I$(2).checkTempDirCache) path=$I$(2).tempDir + path;
return this.createVideo$S(path);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(3,"fine$S",[ex.getMessage$()]);
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var video=obj;
var filters=control.getObject$S("filters");
if (filters != null ) {
video.getFilterStack$().clear$();
var it=filters.iterator$();
while (it.hasNext$()){
var filter=it.next$();
video.getFilterStack$().addFilter$org_opensourcephysics_media_core_Filter(filter);
}
}return obj;
});
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
