(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.core.interaction.InteractionEvent','java.awt.Cursor','org.opensourcephysics.display3d.simple3d.DrawingPanel3D','java.awt.Color','java.util.ArrayList',['org.opensourcephysics.display3d.simple3d.Object3D','.Comparator3D'],'org.opensourcephysics.display3d.simple3d.ElementSegment','org.opensourcephysics.display3d.simple3d.InteractionTarget','java.awt.image.BufferedImage','javax.swing.Timer','org.opensourcephysics.display.MessageDrawable','java.awt.Rectangle','org.opensourcephysics.display3d.simple3d.Resolution','org.opensourcephysics.display3d.simple3d.ElementArrow','org.opensourcephysics.display3d.simple3d.ElementText','java.awt.Font','java.awt.BorderLayout','java.awt.Dimension','org.opensourcephysics.display3d.simple3d.VisualizationHints','org.opensourcephysics.display3d.simple3d.Camera','java.awt.event.ComponentAdapter',['org.opensourcephysics.display3d.simple3d.DrawingPanel3D','.IADMouseController'],'java.awt.event.KeyAdapter','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display3d.simple3d.Object3D','java.util.Arrays',['org.opensourcephysics.display3d.simple3d.DrawingPanel3D','.DrawingPanel3DLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingPanel3D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['org.opensourcephysics.display.Renderable', 'org.opensourcephysics.display3d.core.DrawingPanel3D', 'java.awt.print.Printable', 'java.awt.event.ActionListener']);
C$.$classes$=[['IADMouseController',2],['DrawingPanel3DLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visHints=null;
this.camera=null;
this.imageFile=null;
this.quickRedrawOn=false;
this.squareAspect=true;
this.list3D=Clazz.new_($I$(5,1));
this.decorationList=Clazz.new_($I$(5,1));
this.elementList=Clazz.new_($I$(5,1));
this.comparator=Clazz.new_($I$(6,1));
this.boxSides=Clazz.array($I$(7), [12]);
this.myTarget=Clazz.new_($I$(8,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[null, 0]);
this.keyPressed=-1;
this.lastX=0;
this.lastY=0;
this.targetHit=null;
this.targetEntered=null;
this.trackerPoint=null;
this.listeners=Clazz.new_($I$(5,1));
this.trackerLines=null;
this.dirtyImage=true;
this.offscreenImage=Clazz.new_($I$(9,1).c$$I$I$I,[1, 1, 2]);
this.workingImage=this.offscreenImage;
this.updateTimer=Clazz.new_($I$(10,1).c$$I$java_awt_event_ActionListener,[100, this]);
this.needResize=true;
this.needsToRecompute=true;
this.viewRect=null;
this.messages=Clazz.new_($I$(11,1));
this.factorX=1.0;
this.factorY=1.0;
this.factorZ=1.0;
this.visibleRect=Clazz.new_($I$(12,1));
this.doNow=((P$.DrawingPanel3D$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel3D$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JComponent'].computeVisibleRect$java_awt_Rectangle.apply(this.b$['javax.swing.JComponent'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].visibleRect]);
this.b$['javax.swing.JComponent'].paintImmediately$java_awt_Rectangle.apply(this.b$['javax.swing.JComponent'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].visibleRect]);
});
})()
), Clazz.new_(P$.DrawingPanel3D$1.$init$,[this, null]));
this.firstPoint=Clazz.array(Double.TYPE, [3]);
this.secondPoint=Clazz.array(Double.TYPE, [3]);
},1);

C$.$fields$=[['Z',['quickRedrawOn','squareAspect','dirtyImage','needResize','needsToRecompute'],'D',['xmin','xmax','ymin','ymax','zmin','zmax','centerX','centerY','centerZ','maximumSize','aconstant','bconstant','factorX','factorY','factorZ'],'I',['acenter','bcenter','trackersVisible','keyPressed','lastX','lastY'],'S',['imageFile'],'O',['visHints','org.opensourcephysics.display3d.simple3d.VisualizationHints','camera','org.opensourcephysics.display3d.simple3d.Camera','list3D','java.util.ArrayList','+decorationList','+elementList','comparator','org.opensourcephysics.display3d.simple3d.Object3D.Comparator3D','xAxis','org.opensourcephysics.display3d.simple3d.ElementArrow','+yAxis','+zAxis','xText','org.opensourcephysics.display3d.simple3d.ElementText','+yText','+zText','boxSides','org.opensourcephysics.display3d.simple3d.ElementSegment[]','myTarget','org.opensourcephysics.display3d.simple3d.InteractionTarget','+targetHit','+targetEntered','trackerPoint','double[]','listeners','java.util.ArrayList','trackerLines','org.opensourcephysics.display3d.simple3d.ElementSegment[]','offscreenImage','java.awt.image.BufferedImage','+workingImage','updateTimer','javax.swing.Timer','viewRect','java.awt.Rectangle','messages','org.opensourcephysics.display.MessageDrawable','vidCap','org.opensourcephysics.tools.VideoTool','visibleRect','java.awt.Rectangle','doNow','Runnable','firstPoint','double[]','+secondPoint']]
,['I',['axisMode'],'O',['bgColor','java.awt.Color']]]

Clazz.newMeth(C$, 'BuildAxesPanel$I',  function (mode) {
if ((C$.axisMode == mode) && (this.xAxis != null ) ) {
return;
}C$.axisMode=mode;
if (this.xAxis == null ) {
var axesRes=Clazz.new_($I$(13,1).c$$I$I$I,[10, 1, 1]);
for (var i=0, n=this.boxSides.length; i < n; i++) {
this.boxSides[i]=Clazz.new_($I$(7,1));
this.boxSides[i].getRealStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(axesRes);
this.boxSides[i].setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.boxSides[i]);
}
this.boxSides[0].getStyle$().setLineColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[128, 0, 0]));
this.boxSides[3].getStyle$().setLineColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[0, 128, 0]));
this.boxSides[8].getStyle$().setLineColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[0, 0, 255]));
var axesLabels=this.visHints.getAxesLabels$();
this.xAxis=Clazz.new_($I$(14,1));
this.xAxis.getRealStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(axesRes);
this.xAxis.getStyle$().setFillColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[128, 0, 0]));
this.xAxis.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.xAxis);
this.xText=Clazz.new_($I$(15,1));
this.xText.setText$S(axesLabels[0]);
this.xText.setJustification$I(0);
this.xText.getRealStyle$().setLineColor$java_awt_Color($I$(4).BLACK);
this.xText.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Dialog", 0, 12]));
this.xText.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.xText);
this.yAxis=Clazz.new_($I$(14,1));
this.yAxis.getRealStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(axesRes);
this.yAxis.getStyle$().setFillColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[0, 128, 0]));
this.yAxis.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.yAxis);
this.yText=Clazz.new_($I$(15,1));
this.yText.setText$S(axesLabels[1]);
this.yText.setJustification$I(0);
this.yText.getRealStyle$().setLineColor$java_awt_Color($I$(4).BLACK);
this.yText.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Dialog", 0, 12]));
this.yText.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.yText);
this.zAxis=Clazz.new_($I$(14,1));
this.zAxis.getRealStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(axesRes);
this.zAxis.getStyle$().setFillColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[0, 0, 255]));
this.zAxis.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.zAxis);
this.zText=Clazz.new_($I$(15,1));
this.zText.setText$S(axesLabels[2]);
this.zText.setJustification$I(0);
this.zText.getRealStyle$().setLineColor$java_awt_Color($I$(4).BLACK);
this.zText.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Dialog", 0, 12]));
this.zText.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.zText);
this.trackerLines=Clazz.array($I$(7), [9]);
for (var i=0, n=this.trackerLines.length; i < n; i++) {
this.trackerLines[i]=Clazz.new_($I$(7,1));
this.trackerLines[i].getRealStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(axesRes);
this.trackerLines[i].setVisible$Z(false);
this.trackerLines[i].setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.decorationList.add$O(this.trackerLines[i]);
}
p$1.setCursorMode.apply(this, []);
} else {
p$1.resetDecoration$D$D$D.apply(this, [this.xmax - this.xmin, this.ymax - this.ymin, this.zmax - this.zmin]);
}}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(17,1))]);
this.setBackground$java_awt_Color(C$.bgColor);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[300, 300]));
this.visHints=Clazz.new_($I$(19,1).c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D,[this]);
this.camera=Clazz.new_($I$(20,1).c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D,[this]);
this.addComponentListener$java_awt_event_ComponentListener(((P$.DrawingPanel3D$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel3D$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].needResize=true;
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].dirtyImage=true;
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.DrawingPanel3D$2)));
var mouseController=Clazz.new_($I$(22,1),[this, null]);
this.addMouseListener$java_awt_event_MouseListener(mouseController);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(mouseController);
this.addKeyListener$java_awt_event_KeyListener(((P$.DrawingPanel3D$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel3D$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (_e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].keyPressed=_e.getKeyCode$();
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (_e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].keyPressed=-1;
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.DrawingPanel3D$3)));
this.setFocusable$Z(true);
p$1.BuildAxesPanel$I.apply(this, [C$.axisMode]);
if (this.camera.is3dMode$()) {
this.visHints.setDecorationType$I(2);
this.visHints.setUseColorDepth$Z(true);
} else {
this.visHints.setDecorationType$I(0);
this.visHints.setUseColorDepth$Z(false);
}this.setPreferredMinMax$D$D$D$D$D$D(-1, 1, -1, 1, -1, 1);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (this.dirtyImage || p$1.needsUpdate.apply(this, []) ) {
this.render$();
}});

Clazz.newMeth(C$, 'updatePanel',  function () {
if (this.getIgnoreRepaint$()) {
return;
}this.updateTimer.setRepeats$Z(false);
this.updateTimer.setCoalesce$Z(true);
this.updateTimer.start$();
}, p$1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.viewRect=null;
var c=this.getParent$();
while (c != null ){
if (Clazz.instanceOf(c, "javax.swing.JViewport")) {
this.viewRect=(c).getViewRect$();
break;
}c=c.getParent$();
}
var xoff=((this.getWidth$() - this.offscreenImage.getWidth$())/2|0);
var yoff=((this.getHeight$() - this.offscreenImage.getHeight$())/2|0);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offscreenImage, xoff, yoff, null);
if (this.dirtyImage || p$1.needsUpdate.apply(this, []) ) {
p$1.updatePanel.apply(this, []);
}});

Clazz.newMeth(C$, 'invalidate$',  function () {
this.needResize=true;
C$.superclazz.prototype.invalidate$.apply(this, []);
});

Clazz.newMeth(C$, 'render$java_awt_image_BufferedImage',  function (image) {
var g=image.getGraphics$();
p$1.paintEverything$java_awt_Graphics$I$I.apply(this, [g, image.getWidth$java_awt_image_ImageObserver(null), image.getHeight$java_awt_image_ImageObserver(null)]);
var viewRect=this.viewRect;
g.dispose$();
return image;
});

Clazz.newMeth(C$, 'render$',  function () {
if (!this.isShowing$() || p$1.isIconified.apply(this, []) ) {
this.needsToRecompute=true;
return null;
}var workingImage=p$1.checkImageSize$java_awt_image_BufferedImage.apply(this, [this.workingImage]);
if (workingImage == null ) return workingImage;
{
if (this.needResize) {
p$1.computeConstants$I$I.apply(this, [workingImage.getWidth$(), workingImage.getHeight$()]);
this.needResize=false;
}this.render$java_awt_image_BufferedImage(workingImage);
this.workingImage=this.offscreenImage;
this.offscreenImage=workingImage;
this.dirtyImage=false;
}$I$(24).dispatchEventWait$Runnable(this.doNow);
if ((this.vidCap != null ) && (this.offscreenImage != null ) && this.vidCap.isRecording$()  ) {
this.vidCap.addFrame$java_awt_image_BufferedImage(this.offscreenImage);
}return workingImage;
});

Clazz.newMeth(C$, 'needsUpdate',  function () {
for (var i=this.elementList.size$(); --i >= 0; ) {
if (this.elementList.get$I(i).getElementChanged$()) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'checkImageSize$java_awt_image_BufferedImage',  function (image) {
var width=this.getWidth$();
var height=this.getHeight$();
if ((width <= 2) || (height <= 2) ) {
return Clazz.new_($I$(9,1).c$$I$I$I,[1, 1, 2]);
}if ((image == null ) || (width != image.getWidth$()) || (height != image.getHeight$())  ) {
image=this.getGraphicsConfiguration$().createCompatibleImage$I$I(width, height);
return image;
}return image;
}, p$1);

Clazz.newMeth(C$, 'isIconified',  function () {
var c=this.getTopLevelAncestor$();
if (Clazz.instanceOf(c, "java.awt.Frame")) {
return ((c).getExtendedState$() & 1) == 1;
}return false;
}, p$1);

Clazz.newMeth(C$, 'getComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'setBackgroundImage$S',  function (_imageFile) {
this.imageFile=_imageFile;
});

Clazz.newMeth(C$, 'getBackgroundImage$',  function () {
return this.imageFile;
});

Clazz.newMeth(C$, 'setPreferredMinMax$D$D$D$D$D$D',  function (minX, maxX, minY, maxY, minZ, maxZ) {
this.xmin=minX;
this.xmax=maxX;
this.ymin=minY;
this.ymax=maxY;
this.zmin=minZ;
this.zmax=maxZ;
this.centerX=(this.xmax + this.xmin) / 2.0;
this.centerY=(this.ymax + this.ymin) / 2.0;
this.centerZ=(this.zmax + this.zmin) / 2.0;
this.maximumSize=this.getMaximum3DSize$();
p$1.resetDecoration$D$D$D.apply(this, [this.xmax - this.xmin, this.ymax - this.ymin, this.zmax - this.zmin]);
this.camera.reset$();
this.needsToRecompute=true;
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'getPreferredMinX$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getPreferredMaxX$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getPreferredMinY$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getPreferredMaxY$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'getPreferredMinZ$',  function () {
return this.zmin;
});

Clazz.newMeth(C$, 'getPreferredMaxZ$',  function () {
return this.zmax;
});

Clazz.newMeth(C$, 'getCenter$',  function () {
return Clazz.array(Double.TYPE, -1, [this.centerX, this.centerY, this.centerZ]);
});

Clazz.newMeth(C$, 'getMaximum3DSize$',  function () {
var dx=this.xmax - this.xmin;
var dy=this.ymax - this.ymin;
var dz=this.zmax - this.zmin;
switch (this.camera.getProjectionMode$()) {
case 0:
return Math.max(dx, dy);
case 1:
return Math.max(dx, dz);
case 2:
return Math.max(dy, dz);
default:
return Math.max(Math.max(dx, dy), dz);
}
});

Clazz.newMeth(C$, 'zoomToFit$',  function () {
var minX=Infinity;
var maxX=-Infinity;
var minY=Infinity;
var maxY=-Infinity;
var minZ=Infinity;
var maxZ=-Infinity;
var e=this.getElements$();
for (var i=e.size$(); --i >= 0; ) {
(e.get$I(i)).getExtrema$DA$DA(this.firstPoint, this.secondPoint);
minX=Math.min(Math.min(minX, this.firstPoint[0]), this.secondPoint[0]);
maxX=Math.max(Math.max(maxX, this.firstPoint[0]), this.secondPoint[0]);
minY=Math.min(Math.min(minY, this.firstPoint[1]), this.secondPoint[1]);
maxY=Math.max(Math.max(maxY, this.firstPoint[1]), this.secondPoint[1]);
minZ=Math.min(Math.min(minZ, this.firstPoint[2]), this.secondPoint[2]);
maxZ=Math.max(Math.max(maxZ, this.firstPoint[2]), this.secondPoint[2]);
}
var max=Math.max(Math.max(maxX - minX, maxY - minY), maxZ - minZ);
if (max == 0.0 ) {
max=2;
}if (minX >= maxX ) {
minX=maxX - max / 2;
maxX=minX + max;
}if (minY >= maxY ) {
minY=maxY - max / 2;
maxY=minY + max;
}if (minZ >= maxZ ) {
minZ=maxZ - max / 2;
maxZ=minZ + max;
}this.setPreferredMinMax$D$D$D$D$D$D(minX, maxX, minY, maxY, minZ, maxZ);
});

Clazz.newMeth(C$, 'setSquareAspect$Z',  function (square) {
if (this.squareAspect != square ) {
this.needsToRecompute=true;
p$1.updatePanel.apply(this, []);
}this.squareAspect=square;
});

Clazz.newMeth(C$, 'isSquareAspect$',  function () {
return this.squareAspect;
});

Clazz.newMeth(C$, 'getVisualizationHints$',  function () {
return this.visHints;
});

Clazz.newMeth(C$, 'getCamera$',  function () {
return this.camera;
});

Clazz.newMeth(C$, 'getVideoTool$',  function () {
return this.vidCap;
});

Clazz.newMeth(C$, 'setVideoTool$org_opensourcephysics_tools_VideoTool',  function (videoCap) {
if (this.vidCap != null ) {
this.vidCap.setVisible$Z(false);
}this.vidCap=videoCap;
});

Clazz.newMeth(C$, 'addElement$org_opensourcephysics_display3d_core_Element',  function (element) {
if (!(Clazz.instanceOf(element, "org.opensourcephysics.display3d.simple3d.Element"))) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Can\'t add element to panel (incorrect implementation)"]);
}if (!this.elementList.contains$O(element)) {
this.elementList.add$O(element);
}switch (C$.axisMode) {
case 2:
(element).setSizeX$D((element).getSizeX$() * this.factorX);
(element).setSizeZ$D((element).getSizeY$() * this.factorZ);
(element).setSizeY$D((element).getSizeZ$() * this.factorY);
(element).setX$D((element).getX$() * this.factorX);
(element).setZ$D((element).getY$() * this.factorZ);
(element).setY$D((element).getZ$() * this.factorY);
break;
case 1:
(element).setSizeY$D((element).getSizeX$() * this.factorY);
(element).setSizeX$D((element).getSizeY$() * this.factorX);
(element).setSizeZ$D((element).getSizeZ$() * this.factorZ);
(element).setY$D((element).getX$() * this.factorY);
(element).setX$D((element).getY$() * this.factorX);
(element).setZ$D((element).getZ$() * this.factorZ);
break;
case 3:
(element).setSizeZ$D((element).getSizeX$() * this.factorZ);
(element).setSizeX$D((element).getSizeY$() * this.factorX);
(element).setSizeY$D((element).getSizeZ$() * this.factorY);
(element).setZ$D((element).getX$() * this.factorZ);
(element).setX$D((element).getY$() * this.factorX);
(element).setY$D((element).getZ$() * this.factorY);
break;
case 5:
(element).setSizeY$D((element).getSizeX$() * this.factorY);
(element).setSizeZ$D((element).getSizeY$() * this.factorZ);
(element).setSizeX$D((element).getSizeZ$() * this.factorX);
(element).setY$D((element).getX$() * this.factorY);
(element).setZ$D((element).getY$() * this.factorZ);
(element).setX$D((element).getZ$() * this.factorX);
break;
case 4:
(element).setSizeZ$D((element).getSizeX$() * this.factorZ);
(element).setSizeY$D((element).getSizeY$() * this.factorY);
(element).setSizeX$D((element).getSizeZ$() * this.factorX);
(element).setZ$D((element).getX$() * this.factorZ);
(element).setY$D((element).getY$() * this.factorY);
(element).setX$D((element).getZ$() * this.factorX);
break;
default:
(element).setSizeX$D((element).getSizeX$() * this.factorX);
(element).setSizeY$D((element).getSizeY$() * this.factorY);
(element).setSizeZ$D((element).getSizeZ$() * this.factorZ);
(element).setX$D((element).getX$() * this.factorX);
(element).setY$D((element).getY$() * this.factorY);
(element).setZ$D((element).getZ$() * this.factorZ);
}
(element).setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(this);
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'removeElement$org_opensourcephysics_display3d_core_Element',  function (element) {
this.elementList.remove$O(element);
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'removeAllElements$',  function () {
this.elementList.clear$();
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'getElements$',  function () {
return Clazz.new_($I$(5,1).c$$java_util_Collection,[this.elementList]);
});

Clazz.newMeth(C$, 'setScaleFactor$D$D$D',  function (factorX, factorY, factorZ) {
this.factorX=factorX;
this.factorY=factorY;
this.factorZ=factorZ;
});

Clazz.newMeth(C$, 'getScaleFactorX$',  function () {
return this.factorX;
});

Clazz.newMeth(C$, 'getScaleFactorY$',  function () {
return this.factorY;
});

Clazz.newMeth(C$, 'getScaleFactorZ$',  function () {
return this.factorZ;
});

Clazz.newMeth(C$, 'setAxesMode$I',  function (mode) {
p$1.BuildAxesPanel$I.apply(this, [mode]);
for (var i=0; i < this.elementList.size$(); i++) {
var el=this.elementList.get$I(i);
el.setXYZ$D$D$D(el.getX$(), el.getY$(), el.getZ$());
el.setSizeXYZ$D$D$D(el.getSizeX$(), el.getSizeY$(), el.getSizeZ$());
}
});

Clazz.newMeth(C$, 'getAxesMode$',  function () {
return C$.axisMode;
});

Clazz.newMeth(C$, 'setMessage$S',  function (msg) {
this.messages.setMessage$org_opensourcephysics_display_DrawingPanel$S$I(null, msg, 1);
});

Clazz.newMeth(C$, 'setMessage$S$I',  function (msg, location) {
switch (location) {
case 0:
this.messages.setMessage$org_opensourcephysics_display_DrawingPanel$S$I(null, msg, 0);
break;
default:
case 1:
this.messages.setMessage$org_opensourcephysics_display_DrawingPanel$S$I(null, msg, 1);
break;
case 2:
this.messages.setMessage$org_opensourcephysics_display_DrawingPanel$S$I(null, msg, 2);
break;
case 3:
this.messages.setMessage$org_opensourcephysics_display_DrawingPanel$S$I(null, msg, 3);
break;
}
});

Clazz.newMeth(C$, 'getInteractionTarget$I',  function (target) {
return this.myTarget;
});

Clazz.newMeth(C$, 'addInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener',  function (listener) {
if ((listener == null ) || this.listeners.contains$O(listener) ) {
return;
}this.listeners.add$O(listener);
});

Clazz.newMeth(C$, 'removeInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener',  function (listener) {
this.listeners.remove$O(listener);
});

Clazz.newMeth(C$, 'invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent',  function (event) {
var it=this.listeners.iterator$();
while (it.hasNext$()){
it.next$().interactionPerformed$org_opensourcephysics_display3d_core_interaction_InteractionEvent(event);
}
}, p$1);

Clazz.newMeth(C$, 'paintEverything$java_awt_Graphics$I$I',  function (g, width, height) {
if (this.needsToRecompute || (width != this.getWidth$()) || (height != this.getHeight$())  ) {
p$1.computeConstants$I$I.apply(this, [width, height]);
}var tempList=this.getElements$();
tempList.addAll$java_util_Collection(this.decorationList);
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, width, height);
p$1.paintDrawableList$java_awt_Graphics$java_util_List.apply(this, [g, tempList]);
}, p$1);

Clazz.newMeth(C$, 'paintDrawableList$java_awt_Graphics$java_util_List',  function (g, tempList) {
var g2=g;
if (this.quickRedrawOn || !this.visHints.isRemoveHiddenLines$() ) {
for (var i=0, n=tempList.size$(); i < n; i++) {
(tempList.get$I(i)).drawQuickly$java_awt_Graphics2D(g2);
}
return;
}this.list3D.clear$();
for (var ii=0, nn=tempList.size$(); ii < nn; ii++) {
var objects=(tempList.get$I(ii)).getObjects3D$();
if (objects == null ) {
continue;
}for (var i=0, n=objects.length; i < n; i++) {
if (!Double.isNaN$D(objects[i].getDistance$())) {
this.list3D.add$O(objects[i]);
}}
}
if (this.list3D.size$() <= 0) {
return;
}var objects=this.list3D.toArray$OA(Clazz.array($I$(25), [0]));
$I$(26).sort$OA$java_util_Comparator(objects, this.comparator);
for (var i=0, n=objects.length; i < n; i++) {
var obj=objects[i];
obj.getElement$().draw$java_awt_Graphics2D$I(g2, obj.getIndex$());
}
this.messages.drawOn3D$java_awt_Component$java_awt_Graphics(this, g2);
}, p$1);

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I',  function (g, pageFormat, pageIndex) {
if (pageIndex >= 1) {
return 1;
}if (g == null ) {
return 1;
}var g2=g;
var scalex=pageFormat.getImageableWidth$() / this.getWidth$();
var scaley=pageFormat.getImageableHeight$() / this.getHeight$();
var scale=Math.min(scalex, scaley);
g2.translate$I$I((pageFormat.getImageableX$()|0), (pageFormat.getImageableY$()|0));
g2.scale$D$D(scale, scale);
p$1.paintEverything$java_awt_Graphics$I$I.apply(this, [g2, this.getWidth$(), this.getHeight$()]);
return 0;
});

Clazz.newMeth(C$, 'hintChanged$I',  function (hintThatChanged) {
switch (hintThatChanged) {
case 7:
{
var labels=this.visHints.getAxesLabels$();
this.xText.setText$S(labels[0]);
this.yText.setText$S(labels[1]);
this.zText.setText$S(labels[2]);
p$1.setCursorMode.apply(this, []);
}case 0:
switch (this.visHints.getDecorationType$()) {
case 0:
for (var i=0, n=this.boxSides.length; i < n; i++) {
this.boxSides[i].setVisible$Z(false);
}
this.xAxis.setVisible$Z(false);
this.yAxis.setVisible$Z(false);
this.zAxis.setVisible$Z(false);
this.xText.setVisible$Z(false);
this.yText.setVisible$Z(false);
this.zText.setVisible$Z(false);
break;
case 2:
for (var i=0, n=this.boxSides.length; i < n; i++) {
this.boxSides[i].setVisible$Z(true);
}
this.xAxis.setVisible$Z(false);
this.yAxis.setVisible$Z(false);
this.zAxis.setVisible$Z(false);
this.xText.setVisible$Z(false);
this.yText.setVisible$Z(false);
this.zText.setVisible$Z(false);
break;
case 1:
for (var i=0, n=this.boxSides.length; i < n; i++) {
this.boxSides[i].setVisible$Z(false);
}
this.xAxis.setVisible$Z(true);
this.yAxis.setVisible$Z(true);
this.zAxis.setVisible$Z(true);
this.xText.setVisible$Z(true);
this.yText.setVisible$Z(true);
this.zText.setVisible$Z(true);
break;
}
break;
case 6:
var labels=this.visHints.getAxesLabels$();
this.xText.setText$S(labels[0]);
this.yText.setText$S(labels[1]);
this.zText.setText$S(labels[2]);
break;
case 4:
p$1.setCursorMode.apply(this, []);
break;
case 5:
break;
}
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'cameraChanged$I',  function (howItChanged) {
switch (howItChanged) {
case 1:
var dx=this.xmax - this.xmin;
var dy=this.ymax - this.ymin;
var dz=this.zmax - this.zmin;
this.maximumSize=this.getMaximum3DSize$();
p$1.resetDecoration$D$D$D.apply(this, [dx, dy, dz]);
this.needsToRecompute=true;
p$1.updatePanel.apply(this, []);
break;
}
p$1.reportTheNeedToProject.apply(this, []);
this.dirtyImage=true;
});

Clazz.newMeth(C$, 'project$DA$DA',  function (p, pixel) {
var projected=this.camera.getTransformation$().direct$DA(p.clone$());
var factor=1.8;
switch (this.camera.getProjectionMode$()) {
case 10:
case 3:
factor=1.3;
break;
case 11:
case 4:
factor=1;
break;
}
pixel[0]=this.acenter + projected[0] * factor * this.aconstant ;
pixel[1]=this.bcenter - projected[1] * factor * this.bconstant ;
pixel[2]=projected[2];
return pixel;
});

Clazz.newMeth(C$, 'projectSize$DA$DA$DA',  function (p, size, pixelSize) {
this.camera.projectSize$DA$DA$DA(p, size, pixelSize);
var factor=1.8;
switch (this.camera.getProjectionMode$()) {
case 10:
case 3:
factor=1.3;
break;
case 11:
case 4:
factor=1;
break;
}
pixelSize[0]*=factor * this.aconstant;
pixelSize[1]*=factor * this.bconstant;
return pixelSize;
});

Clazz.newMeth(C$, 'projectColor$java_awt_Color$D',  function (_aColor, _depth) {
if (!this.visHints.isUseColorDepth$()) {
return _aColor;
}var crc=Clazz.array(Float.TYPE, [4]);
try {
_aColor.getRGBComponents$FA(crc);
for (var i=0; i < 3; i++) {
crc[i]/=_depth;
crc[i]=Math.max(Math.min(crc[i], 1.0), 0.0);
}
return Clazz.new_($I$(4,1).c$$F$F$F$F,[crc[0], crc[1], crc[2], crc[3]]);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
return _aColor;
} else {
throw _exc;
}
}
});

Clazz.newMeth(C$, 'worldPoint$I$I',  function (a, b) {
var factor=1.8;
switch (this.camera.getProjectionMode$()) {
case 0:
return Clazz.array(Double.TYPE, -1, [this.centerX + (a - this.acenter) / (factor * this.aconstant), this.centerY + (this.bcenter - b) / (factor * this.bconstant), this.zmax]);
case 1:
return Clazz.array(Double.TYPE, -1, [this.centerX + (a - this.acenter) / (factor * this.aconstant), this.ymax, this.centerZ + (this.bcenter - b) / (factor * this.bconstant)]);
case 2:
return Clazz.array(Double.TYPE, -1, [this.xmax, this.centerY + (a - this.acenter) / (factor * this.aconstant), this.centerZ + (this.bcenter - b) / (factor * this.bconstant)]);
default:
return Clazz.array(Double.TYPE, -1, [this.centerX, this.centerY, this.centerZ]);
}
}, p$1);

Clazz.newMeth(C$, 'worldDistance$I$I',  function (dx, dy) {
var factor=1.8;
switch (this.camera.getProjectionMode$()) {
case 0:
return Clazz.array(Double.TYPE, -1, [dx / (factor * this.aconstant), -dy / (factor * this.bconstant), 0.0]);
case 1:
return Clazz.array(Double.TYPE, -1, [dx / (factor * this.aconstant), 0.0, -dy / (factor * this.bconstant)]);
case 2:
return Clazz.array(Double.TYPE, -1, [0.0, dx / (factor * this.aconstant), -dy / (factor * this.bconstant)]);
default:
return Clazz.array(Double.TYPE, -1, [dx / (1.3 * this.aconstant), dy / (1.3 * this.bconstant), 0.0]);
}
}, p$1);

Clazz.newMeth(C$, 'computeConstants$I$I',  function (width, height) {
this.acenter=(width/2|0);
this.bcenter=(height/2|0);
if (this.squareAspect) {
width=height=Math.min(width, height);
}this.aconstant=0.5 * width / this.maximumSize;
this.bconstant=0.5 * height / this.maximumSize;
p$1.reportTheNeedToProject.apply(this, []);
this.needsToRecompute=false;
}, p$1);

Clazz.newMeth(C$, 'reportTheNeedToProject',  function () {
p$1.setToProject$java_util_List.apply(this, [this.getElements$()]);
p$1.setToProject$java_util_List.apply(this, [this.decorationList]);
}, p$1);

Clazz.newMeth(C$, 'setToProject$java_util_List',  function (elements) {
for (var i=elements.size$(); --i >= 0; ) (elements.get$I(i)).setNeedToProject$Z(true);

}, p$1);

Clazz.newMeth(C$, 'resetDecoration$D$D$D',  function (_dx, _dy, _dz) {
this.boxSides[0].setXYZ$D$D$D(this.xmin, this.ymin, this.zmin);
this.boxSides[0].setSizeXYZ$D$D$D(_dx, 0.0, 0.0);
this.boxSides[1].setXYZ$D$D$D(this.xmax, this.ymin, this.zmin);
this.boxSides[1].setSizeXYZ$D$D$D(0.0, _dy, 0.0);
this.boxSides[2].setXYZ$D$D$D(this.xmin, this.ymax, this.zmin);
this.boxSides[2].setSizeXYZ$D$D$D(_dx, 0.0, 0.0);
this.boxSides[3].setXYZ$D$D$D(this.xmin, this.ymin, this.zmin);
this.boxSides[3].setSizeXYZ$D$D$D(0.0, _dy, 0.0);
this.boxSides[4].setXYZ$D$D$D(this.xmin, this.ymin, this.zmax);
this.boxSides[4].setSizeXYZ$D$D$D(_dx, 0.0, 0.0);
this.boxSides[5].setXYZ$D$D$D(this.xmax, this.ymin, this.zmax);
this.boxSides[5].setSizeXYZ$D$D$D(0.0, _dy, 0.0);
this.boxSides[6].setXYZ$D$D$D(this.xmin, this.ymax, this.zmax);
this.boxSides[6].setSizeXYZ$D$D$D(_dx, 0.0, 0.0);
this.boxSides[7].setXYZ$D$D$D(this.xmin, this.ymin, this.zmax);
this.boxSides[7].setSizeXYZ$D$D$D(0.0, _dy, 0.0);
this.boxSides[8].setXYZ$D$D$D(this.xmin, this.ymin, this.zmin);
this.boxSides[8].setSizeXYZ$D$D$D(0.0, 0.0, _dz);
this.boxSides[9].setXYZ$D$D$D(this.xmax, this.ymin, this.zmin);
this.boxSides[9].setSizeXYZ$D$D$D(0.0, 0.0, _dz);
this.boxSides[10].setXYZ$D$D$D(this.xmax, this.ymax, this.zmin);
this.boxSides[10].setSizeXYZ$D$D$D(0.0, 0.0, _dz);
this.boxSides[11].setXYZ$D$D$D(this.xmin, this.ymax, this.zmin);
this.boxSides[11].setSizeXYZ$D$D$D(0.0, 0.0, _dz);
this.xAxis.setXYZ$D$D$D(this.xmin, this.ymin, this.zmin);
this.xAxis.setSizeXYZ$D$D$D(_dx, 0.0, 0.0);
this.xText.setXYZ$D$D$D(this.xmax + _dx * 0.02, this.ymin, this.zmin);
this.yAxis.setXYZ$D$D$D(this.xmin, this.ymin, this.zmin);
this.yAxis.setSizeXYZ$D$D$D(0.0, _dy, 0.0);
this.yText.setXYZ$D$D$D(this.xmin, this.ymax + _dy * 0.02, this.zmin);
this.zAxis.setXYZ$D$D$D(this.xmin, this.ymin, this.zmin);
this.zAxis.setSizeXYZ$D$D$D(0.0, 0.0, _dz);
this.zText.setXYZ$D$D$D(this.xmin, this.ymin, this.zmax + _dz * 0.02);
}, p$1);

Clazz.newMeth(C$, 'setCursorMode',  function () {
switch (this.visHints.getCursorType$()) {
case 0:
this.trackersVisible=0;
break;
case 2:
this.trackersVisible=9;
break;
default:
case 1:
this.trackersVisible=3;
break;
case 3:
this.trackersVisible=3;
break;
}
}, p$1);

Clazz.newMeth(C$, 'showTrackers$Z',  function (value) {
for (var i=0, n=this.trackerLines.length; i < n; i++) {
if (i < this.trackersVisible) {
this.trackerLines[i].setVisible$Z(value);
} else {
this.trackerLines[i].setVisible$Z(false);
}}
}, p$1);

Clazz.newMeth(C$, 'positionTrackers',  function () {
switch (this.visHints.getCursorType$()) {
case 0:
return;
default:
case 1:
this.trackerLines[0].setXYZ$D$D$D(this.trackerPoint[0], this.ymin, this.zmin);
this.trackerLines[0].setSizeXYZ$D$D$D(0, this.trackerPoint[1] - this.ymin, 0);
this.trackerLines[1].setXYZ$D$D$D(this.xmin, this.trackerPoint[1], this.zmin);
this.trackerLines[1].setSizeXYZ$D$D$D(this.trackerPoint[0] - this.xmin, 0, 0);
this.trackerLines[2].setXYZ$D$D$D(this.trackerPoint[0], this.trackerPoint[1], this.zmin);
this.trackerLines[2].setSizeXYZ$D$D$D(0, 0, this.trackerPoint[2] - this.zmin);
break;
case 2:
this.trackerLines[0].setXYZ$D$D$D(this.xmin, this.trackerPoint[1], this.trackerPoint[2]);
this.trackerLines[0].setSizeXYZ$D$D$D(this.trackerPoint[0] - this.xmin, 0, 0);
this.trackerLines[1].setXYZ$D$D$D(this.trackerPoint[0], this.ymin, this.trackerPoint[2]);
this.trackerLines[1].setSizeXYZ$D$D$D(0, this.trackerPoint[1] - this.ymin, 0);
this.trackerLines[2].setXYZ$D$D$D(this.trackerPoint[0], this.trackerPoint[1], this.zmin);
this.trackerLines[2].setSizeXYZ$D$D$D(0, 0, this.trackerPoint[2] - this.zmin);
this.trackerLines[3].setXYZ$D$D$D(this.trackerPoint[0], this.ymin, this.zmin);
this.trackerLines[3].setSizeXYZ$D$D$D(0, this.trackerPoint[1] - this.ymin, 0);
this.trackerLines[4].setXYZ$D$D$D(this.xmin, this.trackerPoint[1], this.zmin);
this.trackerLines[4].setSizeXYZ$D$D$D(this.trackerPoint[0] - this.xmin, 0, 0);
this.trackerLines[5].setXYZ$D$D$D(this.trackerPoint[0], this.ymin, this.zmin);
this.trackerLines[5].setSizeXYZ$D$D$D(0, 0, this.trackerPoint[2] - this.zmin);
this.trackerLines[6].setXYZ$D$D$D(this.xmin, this.ymin, this.trackerPoint[2]);
this.trackerLines[6].setSizeXYZ$D$D$D(this.trackerPoint[0] - this.xmin, 0, 0);
this.trackerLines[7].setXYZ$D$D$D(this.xmin, this.trackerPoint[1], this.zmin);
this.trackerLines[7].setSizeXYZ$D$D$D(0, 0, this.trackerPoint[2] - this.zmin);
this.trackerLines[8].setXYZ$D$D$D(this.xmin, this.ymin, this.trackerPoint[2]);
this.trackerLines[8].setSizeXYZ$D$D$D(0, this.trackerPoint[1] - this.ymin, 0);
break;
case 3:
this.trackerLines[0].setXYZ$D$D$D(this.xmin, this.trackerPoint[1], this.trackerPoint[2]);
this.trackerLines[0].setSizeXYZ$D$D$D(this.xmax - this.xmin, 0.0, 0.0);
this.trackerLines[1].setXYZ$D$D$D(this.trackerPoint[0], this.ymin, this.trackerPoint[2]);
this.trackerLines[1].setSizeXYZ$D$D$D(0.0, this.ymax - this.ymin, 0.0);
this.trackerLines[2].setXYZ$D$D$D(this.trackerPoint[0], this.trackerPoint[1], this.zmin);
this.trackerLines[2].setSizeXYZ$D$D$D(0.0, 0.0, this.zmax - this.zmin);
break;
}
}, p$1);

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
var e=this.getElements$();
for (var i=0, n=e.size$(); i < n; i++) {
var target=(e.get$I(i)).getTargetHit$I$I(x, y);
if (target != null ) {
return target;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'setMouseCursor$java_awt_Cursor',  function (cursor) {
var c=this.getTopLevelAncestor$();
this.setCursor$java_awt_Cursor(cursor);
if (c != null ) {
c.setCursor$java_awt_Cursor(cursor);
}}, p$1);

Clazz.newMeth(C$, 'displayPosition$DA',  function (_point) {
this.visHints.displayPosition$I$DA(this.camera.getProjectionMode$(), _point);
}, p$1);

Clazz.newMeth(C$, 'mouseDraggedComputations$java_awt_event_MouseEvent',  function (e) {
if (e.isControlDown$()) {
if (this.camera.is3dMode$()) {
var fx=this.camera.getFocusX$();
var fy=this.camera.getFocusY$();
var fz=this.camera.getFocusZ$();
var dx=(e.getX$() - this.lastX) * this.maximumSize * 0.01 ;
var dy=(e.getY$() - this.lastY) * this.maximumSize * 0.01 ;
switch (this.keyPressed) {
case 88:
if ((this.camera.cosAlpha >= 0 ) && (Math.abs(this.camera.sinAlpha) < this.camera.cosAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx + dy, fy, fz);
} else if ((this.camera.sinAlpha >= 0 ) && (Math.abs(this.camera.cosAlpha) < this.camera.sinAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx + dx, fy, fz);
} else if ((this.camera.cosAlpha < 0 ) && (Math.abs(this.camera.sinAlpha) < -this.camera.cosAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx - dy, fy, fz);
} else {
this.camera.setFocusXYZ$D$D$D(fx - dx, fy, fz);
}break;
case 89:
if ((this.camera.cosAlpha >= 0 ) && (Math.abs(this.camera.sinAlpha) < this.camera.cosAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx, fy - dx, fz);
} else if ((this.camera.sinAlpha >= 0 ) && (Math.abs(this.camera.cosAlpha) < this.camera.sinAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx, fy + dy, fz);
} else if ((this.camera.cosAlpha < 0 ) && (Math.abs(this.camera.sinAlpha) < -this.camera.cosAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx, fy + dx, fz);
} else {
this.camera.setFocusXYZ$D$D$D(fx, fy - dy, fz);
}break;
case 90:
if (this.camera.cosBeta >= 0 ) {
this.camera.setFocusXYZ$D$D$D(fx, fy, fz + dy);
} else {
this.camera.setFocusXYZ$D$D$D(fx, fy, fz - dy);
}break;
default:
if (this.camera.cosBeta < 0 ) {
dy=-dy;
}if ((this.camera.cosAlpha >= 0 ) && (Math.abs(this.camera.sinAlpha) < this.camera.cosAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx, fy - dx, fz + dy);
} else if ((this.camera.sinAlpha >= 0 ) && (Math.abs(this.camera.cosAlpha) < this.camera.sinAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx + dx, fy, fz + dy);
} else if ((this.camera.cosAlpha < 0 ) && (Math.abs(this.camera.sinAlpha) < -this.camera.cosAlpha ) ) {
this.camera.setFocusXYZ$D$D$D(fx, fy + dx, fz - dy);
} else {
this.camera.setFocusXYZ$D$D$D(fx - dx, fy, fz - dy);
}break;
}
}return false;
}if (e.isShiftDown$()) {
this.camera.setDistanceToScreen$D(this.camera.getDistanceToScreen$() - (e.getY$() - this.lastY) * this.maximumSize * 0.01 );
return false;
}if (this.camera.is3dMode$() && (this.targetHit == null ) && !e.isAltDown$()  ) {
this.camera.setAzimuthAndAltitude$D$D(this.camera.getAzimuth$() - (e.getX$() - this.lastX) * 0.01, this.camera.getAltitude$() + (e.getY$() - this.lastY) * 0.005);
return false;
}if (this.trackerPoint == null ) {
return true;
}var point=p$1.worldDistance$I$I.apply(this, [e.getX$() - this.lastX, e.getY$() - this.lastY]);
if (!this.camera.is3dMode$()) {
switch (this.keyPressed) {
case 88:
this.trackerPoint[0]+=point[0];
break;
case 89:
this.trackerPoint[1]+=point[1];
break;
case 90:
this.trackerPoint[2]+=point[2];
break;
default:
this.trackerPoint[0]+=point[0];
this.trackerPoint[1]+=point[1];
this.trackerPoint[2]+=point[2];
break;
}
} else {
switch (this.keyPressed) {
case 88:
if ((this.camera.cosAlpha >= 0 ) && (Math.abs(this.camera.sinAlpha) < this.camera.cosAlpha ) ) {
this.trackerPoint[0]+=point[1];
} else if ((this.camera.sinAlpha >= 0 ) && (Math.abs(this.camera.cosAlpha) < this.camera.sinAlpha ) ) {
this.trackerPoint[0]-=point[0];
} else if ((this.camera.cosAlpha < 0 ) && (Math.abs(this.camera.sinAlpha) < -this.camera.cosAlpha ) ) {
this.trackerPoint[0]-=point[1];
} else {
this.trackerPoint[0]+=point[0];
}break;
case 89:
if ((this.camera.cosAlpha >= 0 ) && (Math.abs(this.camera.sinAlpha) < this.camera.cosAlpha ) ) {
this.trackerPoint[1]+=point[0];
} else if ((this.camera.sinAlpha >= 0 ) && (Math.abs(this.camera.cosAlpha) < this.camera.sinAlpha ) ) {
this.trackerPoint[1]+=point[1];
} else if ((this.camera.cosAlpha < 0 ) && (Math.abs(this.camera.sinAlpha) < -this.camera.cosAlpha ) ) {
this.trackerPoint[1]-=point[0];
} else {
this.trackerPoint[1]-=point[1];
}break;
case 90:
if (this.camera.cosBeta >= 0 ) {
this.trackerPoint[2]-=point[1];
} else {
this.trackerPoint[2]-=point[2];
}break;
default:
if (this.camera.cosBeta >= 0 ) {
this.trackerPoint[2]-=point[1];
} else {
this.trackerPoint[2]+=point[1];
}if ((this.camera.cosAlpha >= 0 ) && (Math.abs(this.camera.sinAlpha) < this.camera.cosAlpha ) ) {
this.trackerPoint[1]+=point[0];
} else if ((this.camera.sinAlpha >= 0 ) && (Math.abs(this.camera.cosAlpha) < this.camera.sinAlpha ) ) {
this.trackerPoint[0]-=point[0];
} else if ((this.camera.cosAlpha < 0 ) && (Math.abs(this.camera.sinAlpha) < -this.camera.cosAlpha ) ) {
this.trackerPoint[1]-=point[0];
} else {
this.trackerPoint[0]+=point[0];
}break;
}
}return true;
}, p$1);

Clazz.newMeth(C$, 'resetInteraction',  function () {
this.targetHit=null;
p$1.showTrackers$Z.apply(this, [false]);
p$1.displayPosition$DA.apply(this, [null]);
this.dirtyImage=true;
p$1.updatePanel.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setLightEnabled$Z$I',  function (_state, nlight) {
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(27,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.bgColor=Clazz.new_($I$(4,1).c$$I$I$I,[239, 239, 255]);
C$.axisMode=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel3D, "IADMouseController", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.event.MouseInputAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (_evt) {
this.b$['javax.swing.JComponent'].requestFocus$.apply(this.b$['javax.swing.JComponent'], []);
if (_evt.isPopupTrigger$() || (_evt.getModifiers$() == 4) ) {
return;
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].lastX=_evt.getX$();
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].lastY=_evt.getY$();
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit=p$1.getTargetHit$I$I.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].lastX, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].lastY]);
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit != null ) {
var el=this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit.getElement$();
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint=el.getHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit);
el.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent(Clazz.new_([el, 2000, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent));
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint=el.getHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit);
} else if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.isEnabled$()) {
if ((!this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].camera.is3dMode$()) || _evt.isAltDown$() ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint=p$1.worldPoint$I$I.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [_evt.getX$(), _evt.getY$()]);
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2000, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
} else {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2000, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), null, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
p$1.resetInteraction.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
return;
}} else {
p$1.resetInteraction.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
return;
}p$1.displayPosition$DA.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint]);
p$1.positionTrackers.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
p$1.showTrackers$Z.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [true]);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].dirtyImage=true;
p$1.updatePanel.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (_evt) {
if (_evt.isPopupTrigger$() || (_evt.getModifiers$() == 4) ) {
return;
}if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit != null ) {
var el=this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit.getElement$();
el.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent(Clazz.new_([el, 2002, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent));
} else if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.isEnabled$()) {
if ((!this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].camera.is3dMode$()) || _evt.isAltDown$() ) {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2002, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
} else {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2002, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), null, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
}}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].quickRedrawOn=false;
p$1.resetInteraction.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (_evt) {
if (_evt.isPopupTrigger$() || (_evt.getModifiers$() == 4) ) {
return;
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].quickRedrawOn=this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].visHints.isAllowQuickRedraw$() && (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].keyPressed != 83) ;
var trackerMoved=p$1.mouseDraggedComputations$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [_evt]);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].lastX=_evt.getX$();
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].lastY=_evt.getY$();
if (!trackerMoved) {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2001, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), null, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
p$1.resetInteraction.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
return;
}if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit != null ) {
var el=this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit.getElement$();
el.updateHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget$DA(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint);
el.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent(Clazz.new_([el, 2001, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent));
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint=el.getHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit);
p$1.displayPosition$DA.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint]);
p$1.positionTrackers.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
p$1.showTrackers$Z.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [true]);
} else if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.isEnabled$()) {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2001, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
p$1.displayPosition$DA.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].trackerPoint]);
p$1.positionTrackers.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
p$1.showTrackers$Z.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [true]);
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].dirtyImage=true;
p$1.updatePanel.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], []);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (_evt) {
p$1.setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [$I$(2).getPredefinedCursor$I(1)]);
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.isEnabled$()) {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2003, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), null, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit=this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered=null;
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (_evt) {
p$1.setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [$I$(2).getPredefinedCursor$I(0)]);
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.isEnabled$()) {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2004, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), null, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetHit=this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered=null;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (_evt) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (_evt) {
var target=p$1.getTargetHit$I$I.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [_evt.getX$(), _evt.getY$()]);
if (target != null ) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered == null ) {
target.getElement$().invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent(Clazz.new_([target.getElement$(), 2003, target.getActionCommand$(), target, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent));
}p$1.setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [$I$(2).getPredefinedCursor$I(12)]);
} else {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered.getElement$().invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent(Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered.getElement$(), 2004, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered.getActionCommand$(), this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent));
} else if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.isEnabled$()) {
p$1.invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [Clazz.new_([this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], 2005, this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].myTarget.getActionCommand$(), null, _evt],$I$(1,1).c$$O$I$S$O$java_awt_event_MouseEvent)]);
}p$1.setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'], [$I$(2).getPredefinedCursor$I(1)]);
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingPanel3D'].targetEntered=target;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel3D, "DrawingPanel3DLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.DrawingPanel3D','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var panel=obj;
var hints=control.getObject$S("visualization hints");
hints.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(panel);
panel.visHints=hints;
panel.hintChanged$I(0);
var cam=control.getObject$S("camera");
cam.setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D(panel);
panel.camera=cam;
panel.cameraChanged$I(0);
panel.needsToRecompute=true;
panel.dirtyImage=true;
p$1.updatePanel.apply(panel, []);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
