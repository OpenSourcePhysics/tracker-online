(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.awt.Cursor','java.awt.Color','java.awt.Rectangle','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.dialogs.ScaleInspector','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.KeyboardFocusManager','org.opensourcephysics.display.DrawingPanel','java.util.Collection','java.awt.geom.AffineTransform','java.util.ArrayList','java.awt.image.BufferedImage','org.opensourcephysics.numerics.Util',['org.opensourcephysics.display.DrawingPanel','.ZoomBox'],'org.opensourcephysics.display.axes.CoordinateStringBuilder','javax.swing.Timer','org.opensourcephysics.tools.ToolsRes',['org.opensourcephysics.display.OSPRuntime','.Supported'],'java.awt.Dimension','java.awt.event.ComponentAdapter','java.text.NumberFormat',['org.opensourcephysics.display.DrawingPanel','.CMController'],'javax.swing.JPopupMenu',['org.opensourcephysics.display.DrawingPanel','.PopupmenuListener'],'javax.swing.JMenuItem','javax.swing.SwingUtilities','org.opensourcephysics.controls.OSPLog',['javajs.async.SwingJSUtils','.Performance'],'java.awt.RenderingHints','org.opensourcephysics.display.MeasuredImage','org.opensourcephysics.display.dialogs.XMLDrawingPanelInspector','org.opensourcephysics.display.dialogs.DrawingPanelInspector',['java.awt.geom.Rectangle2D','.Double'],['org.opensourcephysics.display.DrawingPanel','.OptionController'],'org.opensourcephysics.display.MessageDrawable',['org.opensourcephysics.display.DrawingPanel','.DrawingPanelLoader'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.display.Dataset']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', [['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable'], 'java.awt.event.ActionListener', 'org.opensourcephysics.display.Renderable']);
C$.$classes$=[['CMController',2],['ZoomBox',1],['PopupmenuListener',1],['OptionController',0],['DrawingPanelLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.leftGutter=0;
this.topGutter=0;
this.rightGutter=0;
this.bottomGutter=0;
this.leftGutterPreferred=0;
this.topGutterPreferred=0;
this.rightGutterPreferred=0;
this.bottomGutterPreferred=0;
this.clipAtGutter=true;
this.adjustableGutter=false;
this.bgColor=Clazz.new_($I$(2,1).c$$I$I$I,[239, 239, 255]);
this.antialiasTextOn=false;
this.antialiasShapeOn=false;
this.squareAspect=false;
this.autoscaleX=true;
this.autoscaleY=true;
this.autoscaleXMin=true;
this.autoscaleXMax=true;
this.autoscaleYMin=true;
this.autoscaleYMax=true;
this.autoscaleMargin=0.0;
this.xminPreferred=-10.0;
this.xmaxPreferred=10.0;
this.yminPreferred=-10.0;
this.ymaxPreferred=10.0;
this.xfloor=NaN;
this.xceil=NaN;
this.yfloor=NaN;
this.yceil=NaN;
this.xmin=this.xminPreferred;
this.xmax=this.xmaxPreferred;
this.ymin=this.yminPreferred;
this.ymax=this.xmaxPreferred;
this.fixedPixelPerUnit=false;
this.xPixPerUnit=1;
this.yPixPerUnit=1;
this.pixelTransform=Clazz.new_($I$(11,1));
this.pixelMatrix=Clazz.array(Double.TYPE, [6]);
this.drawableList=Clazz.new_($I$(12,1));
this.validImage=false;
this.offscreenImage=Clazz.new_($I$(13,1).c$$I$I$I,[1, 1, 1]);
this.workingImage=this.offscreenImage;
this.buffered=false;
this.scientificFormat=$I$(14).newDecimalFormat$S("0.###E0");
this.decimalFormat=$I$(14).newDecimalFormat$S("0.00");
this.showCoordinates=false;
this.zoomBox=Clazz.new_($I$(15,1),[this, null]);
this.enableZoom=true;
this.fixedScale=false;
this.dimensionSetter=null;
this.viewRect=null;
this.coordinateStrBuilder=$I$(16).createCartesian$();
this.refreshDelay=100;
this.refreshTimer=Clazz.new_($I$(17,1).c$$I$java_awt_event_ActionListener,[this.refreshDelay, this]);
this.imageRatio=1.0;
this.xLeftMarginPercentage=0.0;
this.xRightMarginPercentage=0.0;
this.yTopMarginPercentage=0.0;
this.yBottomMarginPercentage=0.0;
this.logScaleX=false;
this.logScaleY=false;
this.zoomDelay=40;
this.runImageCheck=((P$.DrawingPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
p$1.workingImage.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});
})()
), Clazz.new_(P$.DrawingPanel$1.$init$,[this, null]));
this.visibleRect=Clazz.new_($I$(3,1));
this.popupmenuIsEnabled=true;
this.paintDrawables=true;
this.lastMessage=Clazz.array(String, [4]);
},1);

C$.$fields$=[['Z',['isInteractive','isDisposed','clipAtGutter','adjustableGutter','antialiasTextOn','antialiasShapeOn','squareAspect','autoscaleX','autoscaleY','autoscaleXMin','autoscaleXMax','autoscaleYMin','autoscaleYMax','fixedPixelPerUnit','validImage','buffered','showCoordinates','enableZoom','fixedScale','logScaleX','logScaleY','popupmenuIsEnabled','paintDrawables','displayCoordsOnMouseMoved'],'D',['autoscaleMargin','xminPreferred','xmaxPreferred','yminPreferred','ymaxPreferred','xfloor','xceil','yfloor','yceil','xmin','xmax','ymin','ymax','xPixPerUnit','yPixPerUnit','imageRatio','xLeftMarginPercentage','xRightMarginPercentage','yTopMarginPercentage','yBottomMarginPercentage','dxmin','dxmax','dymin','dymax'],'I',['leftGutter','topGutter','rightGutter','bottomGutter','leftGutterPreferred','topGutterPreferred','rightGutterPreferred','bottomGutterPreferred','lastWidth','lastHeight','refreshDelay','zoomDelay','zoomCount','myFontLevel'],'J',['currentTime'],'O',['glassPane','javax.swing.JPanel','popupmenu','javax.swing.JPopupMenu','propertiesItem','javax.swing.JMenuItem','+autoscaleItem','+scaleItem','+zoomInItem','+zoomOutItem','+snapshotItem','bgColor','java.awt.Color','pixelTransform','java.awt.geom.AffineTransform','pixelMatrix','double[]','drawableList','java.util.ArrayList','offscreenImage','java.awt.image.BufferedImage','+workingImage','messages','org.opensourcephysics.display.MessageDrawable','scientificFormat','java.text.DecimalFormat','+decimalFormat','mouseController','javax.swing.event.MouseInputAdapter','+optionController','zoomBox','org.opensourcephysics.display.DrawingPanel.ZoomBox','customInspector','java.awt.Window','dimensionSetter','org.opensourcephysics.display.Dimensioned','viewRect','java.awt.Rectangle','coordinateStrBuilder','org.opensourcephysics.display.axes.CoordinateStringBuilder','refreshTimer','javax.swing.Timer','vidCap','org.opensourcephysics.tools.VideoTool','zoomTimer','javax.swing.Timer','guiChangeListener','java.beans.PropertyChangeListener','runImageCheck','Runnable','visibleRect','java.awt.Rectangle','lastMessage','String[]']]
,['Z',['RECORD_PAINT_TIMES'],'I',['ntest']]]

Clazz.newMeth(C$, 'getGlassPane$',  function () {
return (this.glassPane == null  ? this : this.glassPane);
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.zoomTimer != null ) {
this.zoomTimer.stop$();
this.zoomTimer=null;
}if (this.refreshTimer != null ) {
this.refreshTimer.stop$();
this.refreshTimer=null;
}if (this.messages != null ) {
this.messages.dispose$org_opensourcephysics_display_DrawingPanel(this);
this.messages=null;
}$I$(18).removePropertyChangeListener$S$java_beans_PropertyChangeListener("locale", this.guiChangeListener);
$I$(19).dispose$java_awt_Component(this);
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[null]);C$.$init$.apply(this);
this.setName$S("DrawingPanel");
this.setBackground$java_awt_Color(this.bgColor);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(20,1).c$$I$I,[300, 300]));
this.showCoordinates=true;
this.setMouseListeners$();
this.addComponentListener$java_awt_event_ComponentListener(((P$.DrawingPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].invalidateImage$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.DrawingPanel$2)));
this.refreshTimer.setRepeats$Z(false);
this.refreshTimer.setCoalesce$Z(true);
this.zoomTimer=Clazz.new_([this.zoomDelay, ((P$.DrawingPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.xlast=this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.xstop=this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.xstart=0;
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.ylast=this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.ystop=this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.ystart=0;
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.visible=this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.dragged=false;
var steps=4;
if (this.b$['org.opensourcephysics.display.DrawingPanel'].zoomCount < steps) {
++this.b$['org.opensourcephysics.display.DrawingPanel'].zoomCount;
var xmin=this.b$['org.opensourcephysics.display.DrawingPanel'].getXMin$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) + this.b$['org.opensourcephysics.display.DrawingPanel'].dxmin / steps;
var xmax=this.b$['org.opensourcephysics.display.DrawingPanel'].getXMax$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) + this.b$['org.opensourcephysics.display.DrawingPanel'].dxmax / steps;
var ymin=this.b$['org.opensourcephysics.display.DrawingPanel'].getYMin$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) + this.b$['org.opensourcephysics.display.DrawingPanel'].dymin / steps;
var ymax=this.b$['org.opensourcephysics.display.DrawingPanel'].getYMax$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) + this.b$['org.opensourcephysics.display.DrawingPanel'].dymax / steps;
this.b$['org.opensourcephysics.display.DrawingPanel'].setPreferredMinMax$D$D$D$D.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [xmin, xmax, ymin, ymax]);
} else {
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomTimer.stop$();
this.b$['org.opensourcephysics.display.DrawingPanel'].invalidateImage$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}this.b$['org.opensourcephysics.display.DrawingPanel'].repaintForZoom$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});
})()
), Clazz.new_(P$.DrawingPanel$3.$init$,[this, null]))],$I$(17,1).c$$I$java_awt_event_ActionListener);
this.zoomTimer.setInitialDelay$I(0);
this.guiChangeListener=((P$.DrawingPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("level")) {
var level=(e.getNewValue$()).intValue$();
this.b$['org.opensourcephysics.display.DrawingPanel'].setFontLevel$I.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [level]);
} else if (e.getPropertyName$().equals$O("locale")) {
var locale=e.getNewValue$();
var format=$I$(22).getInstance$java_util_Locale(locale);
$I$(7,"setDefaultDecimalSeparator$C",[format.getDecimalFormatSymbols$().getDecimalSeparator$()]);
this.b$['org.opensourcephysics.display.DrawingPanel'].refreshDecimalSeparators$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
this.b$['org.opensourcephysics.display.DrawingPanel'].refreshGUI$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}});
})()
), Clazz.new_(P$.DrawingPanel$4.$init$,[this, null]));
$I$(18).addPropertyChangeListener$S$java_beans_PropertyChangeListener("locale", this.guiChangeListener);
}, 1);

Clazz.newMeth(C$, 'setMouseListeners$',  function () {
this.mouseController=Clazz.new_($I$(23,1),[this, null]);
this.addMouseListener$java_awt_event_MouseListener(this.mouseController);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
this.addOptionController$();
});

Clazz.newMeth(C$, 'addMessageLabel$javax_swing_JLabel',  function (l) {
if (this.glassPane == null ) this.add$java_awt_Component(l);
 else this.glassPane.add$java_awt_Component(l);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (level == this.myFontLevel) return;
this.myFontLevel=level;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setFontFactor$D',  function (factor) {
this.invalidateImage$();
this.repaint$();
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.popupmenu=null;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
this.scientificFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(7).getDecimalFormatSymbols$());
this.decimalFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(7).getDecimalFormatSymbols$());
});

Clazz.newMeth(C$, 'buildPopupMenu$',  function () {
if (this.popupmenu == null ) {
this.popupmenu=Clazz.new_($I$(24,1));
} else {
this.popupmenu.removeAll$();
}var listener=Clazz.new_($I$(25,1),[this, null]);
if (this.isZoom$()) {
this.zoomInItem=Clazz.new_([$I$(4).getString$S("DisplayPanel.Zoom_in_menu_item")],$I$(26,1).c$$S);
this.zoomInItem.addActionListener$java_awt_event_ActionListener(listener);
this.popupmenu.add$javax_swing_JMenuItem(this.zoomInItem);
this.zoomOutItem=Clazz.new_([$I$(4).getString$S("DisplayPanel.Zoom_out_menu_item")],$I$(26,1).c$$S);
this.zoomOutItem.addActionListener$java_awt_event_ActionListener(listener);
this.popupmenu.add$javax_swing_JMenuItem(this.zoomOutItem);
}if (!this.isFixedScale$()) {
this.autoscaleItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Autoscale_menu_item")],$I$(26,1).c$$S);
this.autoscaleItem.addActionListener$java_awt_event_ActionListener(listener);
this.popupmenu.add$javax_swing_JMenuItem(this.autoscaleItem);
this.scaleItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Scale_menu_item")],$I$(26,1).c$$S);
this.scaleItem.addActionListener$java_awt_event_ActionListener(listener);
this.popupmenu.add$javax_swing_JMenuItem(this.scaleItem);
this.popupmenu.addSeparator$();
}this.popupmenu.add$javax_swing_JMenuItem(this.getSnapshotItem$java_awt_event_ActionListener(listener));
this.popupmenu.addSeparator$();
this.propertiesItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.InspectMenuItem")],$I$(26,1).c$$S);
this.propertiesItem.addActionListener$java_awt_event_ActionListener(listener);
this.popupmenu.add$javax_swing_JMenuItem(this.propertiesItem);
});

Clazz.newMeth(C$, 'getSnapshotItem$java_awt_event_ActionListener',  function (listener) {
var s=$I$(4).getString$S("DisplayPanel.Snapshot_menu_item");
this.snapshotItem=Clazz.new_($I$(26,1).c$$S,[s]);
if (listener != null ) this.snapshotItem.addActionListener$java_awt_event_ActionListener(listener);
return this.snapshotItem;
});

Clazz.newMeth(C$, 'setAutoscaleMargin$D',  function (_autoscaleMargin) {
if (this.autoscaleMargin == _autoscaleMargin ) {
return;
}this.autoscaleMargin=_autoscaleMargin;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setXMarginPercentage$D',  function (_percentage) {
if ((this.xLeftMarginPercentage == _percentage ) && (this.xRightMarginPercentage == _percentage ) ) {
return;
}this.xLeftMarginPercentage=this.xRightMarginPercentage=_percentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setXMarginPercentage$D$D',  function (_leftPercentage, _rightPercentage) {
if ((this.xLeftMarginPercentage == _leftPercentage ) && (this.xRightMarginPercentage == _rightPercentage ) ) {
return;
}this.xLeftMarginPercentage=_leftPercentage;
this.xRightMarginPercentage=_rightPercentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setXLeftMarginPercentage$D',  function (_percentage) {
if (this.xLeftMarginPercentage == _percentage ) {
return;
}this.xLeftMarginPercentage=_percentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setXRightMarginPercentage$D',  function (_percentage) {
if (this.xRightMarginPercentage == _percentage ) {
return;
}this.xRightMarginPercentage=_percentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setYMarginPercentage$D',  function (_percentage) {
if ((this.yTopMarginPercentage == _percentage ) && (this.yBottomMarginPercentage == _percentage ) ) {
return;
}this.yTopMarginPercentage=this.yBottomMarginPercentage=_percentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setYMarginPercentage$D$D',  function (_bottomPercentage, _topPercentage) {
if ((this.yBottomMarginPercentage == _bottomPercentage ) && (this.yTopMarginPercentage == _topPercentage ) ) {
return;
}this.yTopMarginPercentage=_topPercentage;
this.yBottomMarginPercentage=_bottomPercentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setYTopMarginPercentage$D',  function (_percentage) {
if (this.yTopMarginPercentage == _percentage ) {
return;
}this.yTopMarginPercentage=_percentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setYBottomMarginPercentage$D',  function (_percentage) {
if (this.yBottomMarginPercentage == _percentage ) {
return;
}this.yBottomMarginPercentage=_percentage;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setClipAtGutter$Z',  function (clip) {
if (this.clipAtGutter == clip ) {
return;
}this.clipAtGutter=clip;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'isClipAtGutter$',  function () {
return this.clipAtGutter;
});

Clazz.newMeth(C$, 'setAdjustableGutter$Z',  function (adjustable) {
if (this.adjustableGutter == adjustable ) {
return;
}this.adjustableGutter=adjustable;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'isAdjustableGutter$',  function () {
return this.adjustableGutter;
});

Clazz.newMeth(C$, 'setMouseCursor$java_awt_Cursor',  function (cursor) {
var c=this.getTopLevelAncestor$();
this.setCursor$java_awt_Cursor(cursor);
if (c != null ) {
c.setCursor$java_awt_Cursor(cursor);
}});

Clazz.newMeth(C$, 'checkWorkingImage$',  function () {
if ($I$(7).isJS || $I$(27).isEventDispatchThread$() ) {
return p$1.workingImage.apply(this, []);
}try {
$I$(27).invokeAndWait$Runnable(this.runImageCheck);
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(28,"finest$S",["Exception in Check Working Image:" + ex.toString()]);
return false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'workingImage',  function () {
var r=this.getBounds$();
var width=(r.getWidth$()|0);
var height=(r.getHeight$()|0);
if ((width <= 2) || (height <= 2) ) {
return false;
}if ((this.workingImage == null ) || (width != this.workingImage.getWidth$()) || (height != this.workingImage.getHeight$())  ) {
this.workingImage=this.getGraphicsConfiguration$().createCompatibleImage$I$I(width, height);
this.invalidateImage$();
}if (this.workingImage == null ) {
this.invalidateImage$();
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (!this.isValidImage$()) {
this.render$();
}});

Clazz.newMeth(C$, 'isIconified$',  function () {
var c=this.getTopLevelAncestor$();
if (Clazz.instanceOf(c, "java.awt.Frame")) {
return ((c).getExtendedState$() & 1) == 1;
}return false;
});

Clazz.newMeth(C$, 'render$',  function () {
if (!this.isShowing$() || this.isIconified$() ) {
return this.offscreenImage;
}if (this.buffered && this.checkWorkingImage$() ) {
this.validImage=true;
this.render$java_awt_image_BufferedImage(this.workingImage);
var temp=this.offscreenImage;
this.offscreenImage=this.workingImage;
this.workingImage=temp;
}$I$(7,"dispatchEventWait$Runnable",[((P$.DrawingPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JComponent'].computeVisibleRect$java_awt_Rectangle.apply(this.b$['javax.swing.JComponent'], [this.b$['org.opensourcephysics.display.DrawingPanel'].visibleRect]);
this.b$['javax.swing.JComponent'].paintImmediately$java_awt_Rectangle.apply(this.b$['javax.swing.JComponent'], [this.b$['org.opensourcephysics.display.DrawingPanel'].visibleRect]);
});
})()
), Clazz.new_(P$.DrawingPanel$5.$init$,[this, null]))]);
if (this.vidCap != null ) {
if (this.buffered) {
this.vidCap.addFrame$java_awt_image_BufferedImage(this.offscreenImage);
} else {
if (this.vidCap.isRecording$()) {
this.vidCap.addFrame$java_awt_image_BufferedImage(this.render$());
}}}return this.offscreenImage;
});

Clazz.newMeth(C$, 'render$java_awt_image_BufferedImage',  function (image) {
var osg=image.getGraphics$();
this.imageRatio=(this.getWidth$() <= 0 ) ? 1 : image.getWidth$() / this.getWidth$();
if (osg != null ) {
this.paintEverything$java_awt_Graphics(osg);
if (image === this.workingImage ) {
this.zoomBox.paint$java_awt_Graphics(osg);
}osg.dispose$();
}this.imageRatio=1.0;
return image;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return ((this.imageRatio * C$.superclazz.prototype.getWidth$.apply(this, []))|0);
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return ((this.imageRatio * C$.superclazz.prototype.getHeight$.apply(this, []))|0);
});

Clazz.newMeth(C$, 'getImageRatio$',  function () {
return this.imageRatio;
});

Clazz.newMeth(C$, 'invalidateImage$',  function () {
this.validImage=false;
});

Clazz.newMeth(C$, 'validateImage$',  function () {
this.validImage=true;
});

Clazz.newMeth(C$, 'isValidImage$',  function () {
return this.validImage;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
var resetBuffered=this.buffered;
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
this.buffered=resetBuffered;
});

Clazz.newMeth(C$, 'setPaintDrawables$Z',  function (b) {
this.paintDrawables=b;
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.viewRect=this.findViewRect$();
if (!this.paintDrawables) {
this.paintDrawables=true;
} else {
if ($I$(7).disableAllDrawing) {
g.setColor$java_awt_Color(this.bgColor);
g.setColor$java_awt_Color($I$(2).RED);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
return;
}if (this.buffered) {
var isResized=(this.getWidth$() != this.offscreenImage.getWidth$() || this.getHeight$() != this.offscreenImage.getHeight$() );
if (this.validImage && !isResized ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offscreenImage, 0, 0, null);
} else {
if (isResized) {
g.setColor$java_awt_Color($I$(2).WHITE);
g.setColor$java_awt_Color($I$(2).CYAN);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
} else {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offscreenImage, 0, 0, null);
}this.refreshTimer.start$();
}} else {
this.validImage=true;
this.paintEverything$java_awt_Graphics(g);
}this.zoomBox.paint$java_awt_Graphics(g);
}C$.superclazz.prototype.paintComponents$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'getViewRect$',  function () {
return this.viewRect;
});

Clazz.newMeth(C$, 'findViewRect$',  function () {
return (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport") ? (this.getParent$()).getViewRect$() : Clazz.new_([0, 0, this.getWidth$(), this.getHeight$()],$I$(3,1).c$$I$I$I$I));
});

Clazz.newMeth(C$, 'computeGutters$',  function () {
if (this.dimensionSetter != null ) {
var interiorDimension=this.dimensionSetter.getInterior$org_opensourcephysics_display_DrawingPanel(this);
if (interiorDimension != null ) {
this.squareAspect=false;
var gx=(Math.max(0, this.getWidth$() - interiorDimension.width)/2|0);
var gy=(Math.max(0, this.getHeight$() - interiorDimension.height)/2|0);
this.setGutters$I$I$I$I(gx, gy, gx, gy);
}}});

Clazz.newMeth(C$, 'paintFirst$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setColor$java_awt_Color($I$(2).black);
});

Clazz.newMeth(C$, 'paintLast$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'paintEverything$java_awt_Graphics',  function (g) {
C$.RECORD_PAINT_TIMES=false;
++C$.ntest;
if (C$.RECORD_PAINT_TIMES) {
System.out.println$S("DrawingPanel elapsed time(s)=" + (new Double($I$(29).now$J(this.currentTime) / 1000.0).toString()));
this.currentTime=$I$(29).now$J(0);
}this.computeGutters$();
var tempList=this.getDrawablesNoClone$();
this.scale$java_util_ArrayList(this.getDrawablesNoClone$());
this.setPixelScale$();
if ($I$(7).setRenderingHints) {
if (this.antialiasTextOn) {
(g).setRenderingHint$java_awt_RenderingHints_Key$O($I$(30).KEY_TEXT_ANTIALIASING, $I$(30).VALUE_TEXT_ANTIALIAS_ON);
} else {
(g).setRenderingHint$java_awt_RenderingHints_Key$O($I$(30).KEY_TEXT_ANTIALIASING, $I$(30).VALUE_TEXT_ANTIALIAS_OFF);
}if (this.antialiasShapeOn) {
(g).setRenderingHint$java_awt_RenderingHints_Key$O($I$(30).KEY_ANTIALIASING, $I$(30).VALUE_ANTIALIAS_ON);
} else {
(g).setRenderingHint$java_awt_RenderingHints_Key$O($I$(30).KEY_ANTIALIASING, $I$(30).VALUE_ANTIALIAS_OFF);
}}if (!this.validImage) {
return;
}this.paintFirst$java_awt_Graphics(g);
if (!this.validImage) {
return;
}this.paintDrawableList$java_awt_Graphics$java_util_ArrayList(g, tempList);
if (!this.validImage) {
return;
}this.paintLast$java_awt_Graphics(g);
if (C$.RECORD_PAINT_TIMES) {
System.out.println$S("DrawingPanel paint time (ms)=" + Long.$ival((Long.$sub(System.currentTimeMillis$(),this.currentTime))) + '\n' );
}});

Clazz.newMeth(C$, 'setAutoscaleX$Z',  function (autoscale) {
if ((this.autoscaleX == autoscale ) && (this.autoscaleXMax == autoscale ) && (this.autoscaleXMin == autoscale )  ) {
return;
}this.autoscaleX=this.autoscaleXMax=this.autoscaleXMin=autoscale;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'isAutoscaleX$',  function () {
return this.autoscaleX;
});

Clazz.newMeth(C$, 'isAutoscaleXMax$',  function () {
return this.autoscaleXMax;
});

Clazz.newMeth(C$, 'isAutoscaleXMin$',  function () {
return this.autoscaleXMin;
});

Clazz.newMeth(C$, 'setAutoscaleY$Z',  function (autoscale) {
if ((this.autoscaleY == autoscale ) && (this.autoscaleYMax == autoscale ) && (this.autoscaleYMin == autoscale )  ) {
return;
}this.autoscaleY=this.autoscaleYMax=this.autoscaleYMin=autoscale;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'isAutoscaleY$',  function () {
return this.autoscaleY;
});

Clazz.newMeth(C$, 'isAutoscaleYMax$',  function () {
return this.autoscaleYMax;
});

Clazz.newMeth(C$, 'isAutoscaleYMin$',  function () {
return this.autoscaleYMin;
});

Clazz.newMeth(C$, 'isLogScaleX$',  function () {
return this.logScaleX;
});

Clazz.newMeth(C$, 'isLogScaleY$',  function () {
return this.logScaleY;
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I',  function (x, y, width, height) {
if (this.getX$() == x && this.getY$() == y  && this.getWidth$() == width  && this.getHeight$() == height ) {
return;
}C$.superclazz.prototype.setBounds$I$I$I$I.apply(this, [x, y, width, height]);
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setBounds$java_awt_Rectangle',  function (r) {
if (this.getBounds$().equals$O(r)) {
return;
}C$.superclazz.prototype.setBounds$java_awt_Rectangle.apply(this, [r]);
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setBuffered$Z',  function (_buffered) {
if (this.buffered == _buffered ) {
return;
}this.buffered=_buffered;
if (this.buffered) {
this.setDoubleBuffered$Z(false);
} else {
this.workingImage=Clazz.new_($I$(13,1).c$$I$I$I,[1, 1, 1]);
this.offscreenImage=this.workingImage;
this.setDoubleBuffered$Z(true);
}this.invalidateImage$();
});

Clazz.newMeth(C$, 'isBuffered$',  function () {
return this.buffered;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (this.isVisible$() == vis ) {
return;
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.invalidateImage$();
});

Clazz.newMeth(C$, 'limitAutoscaleX$D$D',  function (floor, ceil) {
if (ceil - floor < 1.4E-45 ) {
floor=0.9 * floor - 1.4E-45;
ceil=1.1 * ceil + 1.4E-45;
}this.xfloor=floor;
this.xceil=ceil;
});

Clazz.newMeth(C$, 'limitAutoscaleY$D$D',  function (floor, ceil) {
if (ceil - floor < 1.4E-45 ) {
floor=0.9 * floor - 1.4E-45;
ceil=1.1 * ceil + 1.4E-45;
}this.yfloor=floor;
this.yceil=ceil;
});

Clazz.newMeth(C$, 'setPixelsPerUnit$Z$D$D',  function (enable, xPixPerUnit, yPixPerUnit) {
if ((this.fixedPixelPerUnit == enable ) && (this.xPixPerUnit == xPixPerUnit ) && (this.yPixPerUnit == yPixPerUnit )  ) {
return;
}this.fixedPixelPerUnit=enable;
this.xPixPerUnit=xPixPerUnit;
this.yPixPerUnit=yPixPerUnit;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setPreferredMinMax$D$D$D$D$Z',  function (xmin, xmax, ymin, ymax, invalidateImage) {
this.autoscaleX=this.autoscaleXMin=this.autoscaleXMax=false;
this.autoscaleY=this.autoscaleYMin=this.autoscaleYMax=false;
if ((this.xminPreferred == xmin ) && (this.xmaxPreferred == xmax ) && (this.yminPreferred == ymin ) && (this.ymaxPreferred == ymax )  ) {
return;
}if (Double.isNaN$D(xmin)) {
this.autoscaleXMin=true;
xmin=this.xminPreferred;
}if (Double.isNaN$D(xmax)) {
this.autoscaleXMax=true;
xmax=this.xmaxPreferred;
}this.autoscaleX=this.autoscaleXMin || this.autoscaleXMax ;
if (xmin == xmax ) {
xmin=0.9 * xmin - 0.5;
xmax=1.1 * xmax + 0.5;
}this.xminPreferred=xmin;
this.xmaxPreferred=xmax;
if (Double.isNaN$D(ymin)) {
this.autoscaleYMin=true;
ymin=this.yminPreferred;
}if (Double.isNaN$D(ymax)) {
this.autoscaleYMax=true;
ymax=this.ymaxPreferred;
}this.autoscaleY=this.autoscaleYMin || this.autoscaleYMax ;
if (ymin == ymax ) {
ymin=0.9 * ymin - 0.5;
ymax=1.1 * ymax + 0.5;
}this.yminPreferred=ymin;
this.ymaxPreferred=ymax;
if (invalidateImage) {
this.invalidateImage$();
}});

Clazz.newMeth(C$, 'setPreferredMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
this.setPreferredMinMax$D$D$D$D$Z(xmin, xmax, ymin, ymax, false);
});

Clazz.newMeth(C$, 'setPreferredMinMaxX$D$D',  function (xmin, xmax) {
this.autoscaleX=this.autoscaleXMin=this.autoscaleXMax=false;
if ((this.xminPreferred == xmin ) && (this.xmaxPreferred == xmax ) ) {
return;
}if (Double.isNaN$D(xmin)) {
this.autoscaleXMin=true;
xmin=this.xminPreferred;
}if (Double.isNaN$D(xmax)) {
this.autoscaleXMax=true;
xmax=this.xmaxPreferred;
}this.autoscaleX=this.autoscaleXMin || this.autoscaleXMax ;
if (xmin == xmax ) {
xmin=0.9 * xmin - 0.5;
xmax=1.1 * xmax + 0.5;
}this.xminPreferred=xmin;
this.xmaxPreferred=xmax;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setPreferredMinMaxY$D$D',  function (ymin, ymax) {
this.autoscaleY=this.autoscaleYMin=this.autoscaleYMax=false;
if ((this.yminPreferred == ymin ) && (this.ymaxPreferred == ymax ) ) {
return;
}if (Double.isNaN$D(ymin)) {
this.autoscaleYMin=true;
ymin=this.yminPreferred;
}if (Double.isNaN$D(ymax)) {
this.autoscaleYMax=true;
ymax=this.ymaxPreferred;
}this.autoscaleY=this.autoscaleYMin || this.autoscaleYMax ;
if (ymin == ymax ) {
ymin=0.9 * ymin - 0.5;
ymax=1.1 * ymax + 0.5;
}this.yminPreferred=ymin;
this.ymaxPreferred=ymax;
this.invalidateImage$();
});

Clazz.newMeth(C$, 'setSquareAspect$Z',  function (val) {
if (this.squareAspect == val ) {
return;
}this.squareAspect=val;
this.invalidateImage$();
this.repaint$();
});

Clazz.newMeth(C$, 'isSquareAspect$',  function () {
return this.squareAspect;
});

Clazz.newMeth(C$, 'setAntialiasTextOn$Z',  function (on) {
this.antialiasTextOn=on;
});

Clazz.newMeth(C$, 'isAntialiasTextOn$',  function () {
return this.antialiasTextOn;
});

Clazz.newMeth(C$, 'setAntialiasShapeOn$Z',  function (on) {
this.antialiasShapeOn=on;
});

Clazz.newMeth(C$, 'isAntialiasShapeOn$',  function () {
return this.antialiasShapeOn;
});

Clazz.newMeth(C$, 'isPointInside$D$D',  function (x, y) {
if (this.xmin < this.xmax ) {
if (x < this.xmin ) {
return false;
}if (x > this.xmax ) {
return false;
}} else {
if (x > this.xmin ) {
return false;
}if (x < this.xmax ) {
return false;
}}if (this.ymin < this.ymax ) {
if (y < this.ymin ) {
return false;
}if (y > this.ymax ) {
return false;
}} else {
if (y > this.ymin ) {
return false;
}if (y < this.ymax ) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'isFixedScale$',  function () {
return this.fixedScale;
});

Clazz.newMeth(C$, 'setFixedScale$Z',  function (fixed) {
if (this.fixedScale == fixed ) {
return;
}this.fixedScale=fixed;
this.popupmenu=null;
});

Clazz.newMeth(C$, 'isZoom$',  function () {
return this.enableZoom && !this.isFixedScale$() ;
});

Clazz.newMeth(C$, 'setZoom$Z',  function (_enableZoom) {
if (this.enableZoom == _enableZoom ) {
return;
}this.enableZoom=_enableZoom;
this.popupmenu=null;
});

Clazz.newMeth(C$, 'zoomOut$',  function () {
var xPix=((this.zoomBox.xstart + this.zoomBox.xstop)/2|0);
var yPix=((this.zoomBox.ystart + this.zoomBox.ystop)/2|0);
var xCenter=this.pixToX$I(xPix);
var yCenter=this.pixToY$I(yPix);
var dx=Math.abs(this.xmax - this.xmin);
var dy=Math.abs(this.ymax - this.ymin);
this.dxmin=xCenter - dx - this.getXMin$() ;
this.dxmax=xCenter + dx - this.getXMax$();
this.dymin=yCenter - dy - this.getYMin$() ;
this.dymax=yCenter + dy - this.getYMax$();
this.zoomCount=0;
this.zoomTimer.start$();
});

Clazz.newMeth(C$, 'getZoomBox$',  function () {
return this.zoomBox;
});

Clazz.newMeth(C$, 'zoomIn$',  function () {
this.dxmin=this.pixToX$I(Math.min(this.zoomBox.xstart, this.zoomBox.xstop)) - this.getXMin$();
this.dxmax=this.pixToX$I(Math.max(this.zoomBox.xstart, this.zoomBox.xstop)) - this.getXMax$();
this.dymin=this.pixToY$I(Math.max(this.zoomBox.ystart, this.zoomBox.ystop)) - this.getYMin$();
this.dymax=this.pixToY$I(Math.min(this.zoomBox.ystart, this.zoomBox.ystop)) - this.getYMax$();
this.zoomCount=0;
this.zoomTimer.start$();
});

Clazz.newMeth(C$, 'snapshot$',  function () {
var w=(this.isVisible$()) ? this.getWidth$() : this.getPreferredSize$().width;
var h=(this.isVisible$()) ? this.getHeight$() : this.getPreferredSize$().height;
if ((w == 0) || (h == 0) ) {
return;
}var image=Clazz.new_($I$(13,1).c$$I$I$I,[w, h, 2]);
this.render$java_awt_image_BufferedImage(image);
var mi=Clazz.new_([image, this.pixToX$I(0), this.pixToX$I(w), this.pixToY$I(h), this.pixToY$I(0)],$I$(31,1).c$$java_awt_image_BufferedImage$D$D$D$D);
var frame=null;
try {
var c=Clazz.forName("org.opensourcephysics.frames.ImageFrame");
var constructors=c.getConstructors$();
for (var i=0; i < constructors.length; i++) {
var parameters=constructors[i].getParameterTypes$();
if (parameters.length == 1 && parameters[0] === Clazz.getClass($I$(31))  ) {
frame=constructors[i].newInstance$OA(Clazz.array(java.lang.Object, -1, [mi]));
break;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (frame == null ) return;
frame.setTitle$S($I$(4).getString$S("Snapshot.Title"));
frame.setDefaultCloseOperation$I(2);
frame.setKeepHidden$Z(false);
$I$(6,"setFonts$O$I",[frame, $I$(6).getLevel$()]);
frame.pack$();
frame.setVisible$Z(true);
});

Clazz.newMeth(C$, 'hasInspector$',  function () {
return this.popupmenu != null  && this.popupmenuIsEnabled ;
});

Clazz.newMeth(C$, 'enableInspector$Z',  function (isEnabled) {
this.popupmenuIsEnabled=isEnabled;
});

Clazz.newMeth(C$, 'getPopupMenu$',  function () {
if (!this.popupmenuIsEnabled) return null;
if (this.popupmenu == null ) {
this.buildPopupMenu$();
}return this.popupmenu;
});

Clazz.newMeth(C$, 'setPopupMenu$javax_swing_JPopupMenu',  function (menu) {
this.popupmenu=menu;
});

Clazz.newMeth(C$, 'showInspector$',  function () {
if (this.customInspector == null ) {
$I$(32).getInspector$org_opensourcephysics_display_DrawingPanel(this);
} else {
this.customInspector.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'hideInspector$',  function () {
if (this.customInspector == null ) {
$I$(33).hideInspector$();
} else {
this.customInspector.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'setCustomInspector$java_awt_Window',  function (w) {
if (this.customInspector != null ) {
this.customInspector.setVisible$Z(false);
}this.customInspector=w;
});

Clazz.newMeth(C$, 'setVideoTool$org_opensourcephysics_tools_VideoTool',  function (videoCap) {
if (this.vidCap != null ) {
this.vidCap.setVisible$Z(false);
}this.vidCap=videoCap;
if (this.vidCap != null ) {
this.setBuffered$Z(true);
}});

Clazz.newMeth(C$, 'getVideoTool$',  function () {
return this.vidCap;
});

Clazz.newMeth(C$, 'getAspectRatio$',  function () {
return (this.pixelMatrix[3] == 1 ) ? 1 : Math.abs(this.pixelMatrix[0] / this.pixelMatrix[3]);
});

Clazz.newMeth(C$, 'getXPixPerUnit$',  function () {
return this.pixelMatrix[0];
});

Clazz.newMeth(C$, 'getYPixPerUnit$',  function () {
return -this.pixelMatrix[3];
});

Clazz.newMeth(C$, 'getMaxPixPerUnit$',  function () {
return Math.max(Math.abs(this.pixelMatrix[0]), Math.abs(this.pixelMatrix[3]));
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getPreferredXMin$',  function () {
return this.xminPreferred;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getPreferredXMax$',  function () {
return this.xmaxPreferred;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'getPreferredYMax$',  function () {
return this.ymaxPreferred;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getPreferredYMin$',  function () {
return this.yminPreferred;
});

Clazz.newMeth(C$, 'getCoordinateStringBuilder$',  function () {
return this.coordinateStrBuilder;
});

Clazz.newMeth(C$, 'setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder',  function (builder) {
this.coordinateStrBuilder=builder;
});

Clazz.newMeth(C$, 'getScale$',  function () {
this.setPixelScale$();
return Clazz.new_($I$(34,1).c$$D$D$D$D,[this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin]);
});

Clazz.newMeth(C$, 'getMeasure$',  function () {
var xmin=1.7976931348623157E308;
var xmax=-1.7976931348623157E308;
var ymin=1.7976931348623157E308;
var ymax=-1.7976931348623157E308;
var measurableFound=false;
var tempList=this.getDrawablesNoClone$();
for (var i=0, n=tempList.size$(); i < n; i++) {
var obj=tempList.get$I(i);
if (!(Clazz.instanceOf(obj, "org.opensourcephysics.display.Measurable")) || !(obj).isMeasured$() ) {
continue;
}var measurable=obj;
var gxmax=measurable.getXMax$();
var gxmin=measurable.getXMin$();
if (this.logScaleX && (Clazz.instanceOf(measurable, "org.opensourcephysics.display.LogMeasurable")) ) {
gxmax=(measurable).getXMaxLogscale$();
gxmin=(measurable).getXMinLogscale$();
}var gymax=measurable.getYMax$();
var gymin=measurable.getYMin$();
if (this.logScaleY && (Clazz.instanceOf(measurable, "org.opensourcephysics.display.LogMeasurable")) ) {
gymax=(measurable).getYMaxLogscale$();
gymin=(measurable).getYMinLogscale$();
}if (!Double.isNaN$D(gxmax) && !Double.isNaN$D(gxmin) && !Double.isNaN$D(gymax) && !Double.isNaN$D(gymin)  ) {
xmin=Math.min(xmin, gxmin);
xmax=Math.max(xmax, gxmax);
ymin=Math.min(ymin, gymin);
ymax=Math.max(ymax, gymax);
measurableFound=true;
}}
if (measurableFound) {
return Clazz.new_($I$(34,1).c$$D$D$D$D,[xmin, ymin, xmax - xmin, ymax - ymin]);
}return Clazz.new_($I$(34,1).c$$D$D$D$D,[0, 0, 0, 0]);
});

Clazz.newMeth(C$, 'getPixelTransform$',  function () {
return this.pixelTransform;
});

Clazz.newMeth(C$, 'getPixelTransform$java_awt_geom_AffineTransform',  function (tr) {
tr.setTransform$java_awt_geom_AffineTransform(this.pixelTransform);
return tr;
});

Clazz.newMeth(C$, 'getPixelMatrix$',  function () {
return this.pixelMatrix;
});

Clazz.newMeth(C$, 'setPixelScale$',  function () {
this.xmin=this.xminPreferred;
this.xmax=this.xmaxPreferred;
this.ymin=this.yminPreferred;
this.ymax=this.ymaxPreferred;
this.resetGutters$();
this.lastWidth=this.getWidth$();
this.lastHeight=this.getHeight$();
if (this.fixedPixelPerUnit) {
this.xmin=(this.xmaxPreferred + this.xminPreferred) / 2 - Math.max(this.lastWidth - this.leftGutter - this.rightGutter - 1 , 1) / this.xPixPerUnit / 2 ;
this.xmax=(this.xmaxPreferred + this.xminPreferred) / 2 + Math.max(this.lastWidth - this.leftGutter - this.rightGutter - 1 , 1) / this.xPixPerUnit / 2 ;
this.ymin=(this.ymaxPreferred + this.yminPreferred) / 2 - Math.max(this.lastHeight - this.bottomGutter - this.topGutter - 1 , 1) / this.yPixPerUnit / 2 ;
this.ymax=(this.ymaxPreferred + this.yminPreferred) / 2 + Math.max(this.lastHeight - this.bottomGutter - this.topGutter - 1 , 1) / this.yPixPerUnit / 2 ;
} else {
this.xPixPerUnit=Math.max(this.lastWidth - this.leftGutter - this.rightGutter , 1) / (this.xmax - this.xmin);
this.yPixPerUnit=Math.max(this.lastHeight - this.bottomGutter - this.topGutter , 1) / (this.ymax - this.ymin);
if (this.squareAspect) {
var stretch=Math.abs(this.xPixPerUnit / this.yPixPerUnit);
if (stretch >= 1 ) {
stretch=Math.min(stretch, this.lastWidth);
this.xmin=this.xminPreferred - (this.xmaxPreferred - this.xminPreferred) * (stretch - 1) / 2.0;
this.xmax=this.xmaxPreferred + (this.xmaxPreferred - this.xminPreferred) * (stretch - 1) / 2.0;
this.xPixPerUnit=Math.max(this.lastWidth - this.leftGutter - this.rightGutter , 1) / (this.xmax - this.xmin);
} else {
stretch=Math.max(stretch, 1.0 / this.lastHeight);
this.ymin=this.yminPreferred - (this.ymaxPreferred - this.yminPreferred) * (1.0 / stretch - 1) / 2.0;
this.ymax=this.ymaxPreferred + (this.ymaxPreferred - this.yminPreferred) * (1.0 / stretch - 1) / 2.0;
this.yPixPerUnit=Math.max(this.lastHeight - this.bottomGutter - this.topGutter , 1) / (this.ymax - this.ymin);
}}}var y=this.ymax * this.yPixPerUnit + this.topGutter;
this.pixelTransform.setTransform$D$D$D$D$D$D(this.xPixPerUnit, 0, 0, -this.yPixPerUnit, -this.xmin * this.xPixPerUnit + this.leftGutter, y);
this.pixelTransform.getMatrix$DA(this.pixelMatrix);
});

Clazz.newMeth(C$, 'recomputeTransform$',  function () {
this.setPixelScale$();
});

Clazz.newMeth(C$, 'project$DA$DA',  function (coordinate, pixel) {
switch (coordinate.length) {
case 2:
case 3:
pixel[0]=this.xToGraphics$D(coordinate[0]);
pixel[1]=this.yToGraphics$D(coordinate[1]);
break;
case 4:
pixel[0]=this.xToGraphics$D(coordinate[0]);
pixel[1]=this.yToGraphics$D(coordinate[1]);
pixel[2]=this.xPixPerUnit * coordinate[2];
pixel[3]=this.yPixPerUnit * coordinate[3];
break;
case 6:
pixel[0]=this.xToGraphics$D(coordinate[0]);
pixel[1]=this.yToGraphics$D(coordinate[1]);
pixel[2]=this.xPixPerUnit * coordinate[3];
pixel[3]=this.yPixPerUnit * coordinate[4];
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Method project not supported for this length."]);
}
return pixel;
});

Clazz.newMeth(C$, 'pixToX$I',  function (pix) {
return this.xmin + (pix - this.leftGutter) / this.xPixPerUnit;
});

Clazz.newMeth(C$, 'xToPix$D',  function (x) {
var pix=this.pixelMatrix[0] * x + this.pixelMatrix[4];
if (pix > 2147483647 ) {
return 2147483647;
}if (pix < -2147483648 ) {
return -2147483648;
}return (Math.floor(pix)|0);
});

Clazz.newMeth(C$, 'xToGraphics$D',  function (x) {
var pix=(this.pixelMatrix[0] * x + this.pixelMatrix[4]);
if (pix > 2147483647 ) {
return 2147483647;
}if (pix < -2147483648 ) {
return -2147483648;
}return pix;
});

Clazz.newMeth(C$, 'pixToY$I',  function (pix) {
return this.ymax - (pix - this.topGutter) / this.yPixPerUnit;
});

Clazz.newMeth(C$, 'yToPix$D',  function (y) {
var pix=this.pixelMatrix[3] * y + this.pixelMatrix[5];
if (pix > 2147483647 ) {
return 2147483647;
}if (pix < -2147483648 ) {
return -2147483648;
}return (Math.floor(pix)|0);
});

Clazz.newMeth(C$, 'yToGraphics$D',  function (y) {
var pix=(this.pixelMatrix[3] * y + this.pixelMatrix[5]);
if (pix > 2147483647 ) {
return 2147483647;
}if (pix < -2147483648 ) {
return -2147483648;
}return pix;
});

Clazz.newMeth(C$, 'scale$',  function () {
this.scale$java_util_ArrayList(this.getDrawablesNoClone$());
});

Clazz.newMeth(C$, 'scale$java_util_ArrayList',  function (tempList) {
if (this.autoscaleX) {
this.scaleX$java_util_ArrayList(tempList);
}if (this.autoscaleY) {
this.scaleY$java_util_ArrayList(tempList);
}});

Clazz.newMeth(C$, 'measure$',  function () {
var tempList=this.getDrawablesNoClone$();
this.scaleX$java_util_ArrayList(tempList);
this.scaleY$java_util_ArrayList(tempList);
this.setPixelScale$();
this.invalidateImage$();
});

Clazz.newMeth(C$, 'scaleX$',  function () {
this.scaleX$java_util_ArrayList(this.getDrawablesNoClone$());
});

Clazz.newMeth(C$, 'scaleX$java_util_ArrayList',  function (tempList) {
var newXMin=1.7976931348623157E308;
var newXMax=-1.7976931348623157E308;
var measurableFound=false;
for (var i=0, n=tempList.size$(); i < n; i++) {
var obj=tempList.get$I(i);
if (!(Clazz.instanceOf(obj, "org.opensourcephysics.display.Measurable"))) {
continue;
}var measurable=obj;
if (!measurable.isMeasured$()) {
continue;
}var xmi=measurable.getXMin$();
var xma=measurable.getXMax$();
if (this.logScaleX && (Clazz.instanceOf(measurable, "org.opensourcephysics.display.LogMeasurable")) ) {
xmi=(measurable).getXMinLogscale$();
xma=(measurable).getXMaxLogscale$();
}if (!Double.isNaN$D(xmi) && !Double.isNaN$D(xma) ) {
newXMin=Math.min(newXMin, xmi);
newXMin=Math.min(newXMin, xma);
newXMax=Math.max(newXMax, xma);
newXMax=Math.max(newXMax, xmi);
measurableFound=true;
}}
if (measurableFound) {
if (this.logScaleX && ((this.xLeftMarginPercentage > 0.0 ) || (this.xRightMarginPercentage > 0.0 ) ) ) {
newXMax*=1 + this.xRightMarginPercentage / 100.0;
newXMin/=1 + this.xLeftMarginPercentage / 100.0;
} else if (!this.logScaleX && ((this.xLeftMarginPercentage > 0.0 ) || (this.xRightMarginPercentage > 0.0 ) ) ) {
var xMed=(newXMin + newXMax) / 2;
var xLen=(newXMax - newXMin) / 2;
newXMax=xMed + xLen * (1.0 + this.xRightMarginPercentage / 100.0);
newXMin=xMed - xLen * (1.0 + this.xLeftMarginPercentage / 100.0);
}if (newXMax - newXMin < 1.4E-45 ) {
if (Double.isNaN$D(this.xfloor)) {
newXMin=0.9 * newXMin - 0.5;
} else {
newXMin=Math.min(newXMin, this.xfloor);
}if (Double.isNaN$D(this.xceil)) {
newXMax=1.1 * newXMax + 0.5;
} else {
newXMax=Math.max(newXMax, this.xceil);
}}var range=Math.max(newXMax - newXMin, 1.4E-45);
while (Math.abs((newXMax + range) / range) > 100000.0 ){
range*=2;
newXMin-=range;
newXMax+=range;
}
if (this.autoscaleXMin) {
this.xminPreferred=newXMin - this.autoscaleMargin * range;
}if (this.autoscaleXMax) {
this.xmaxPreferred=newXMax + this.autoscaleMargin * range;
}} else {
if (!Double.isNaN$D(this.xfloor) && this.autoscaleXMin ) {
this.xminPreferred=this.xfloor;
}if (!Double.isNaN$D(this.xceil) && this.autoscaleXMax ) {
this.xmaxPreferred=this.xceil;
}}if (!Double.isNaN$D(this.xfloor)) {
this.xminPreferred=Math.min(this.xfloor, this.xminPreferred);
}if (!Double.isNaN$D(this.xceil)) {
this.xmaxPreferred=Math.max(this.xceil, this.xmaxPreferred);
}if (Math.abs(this.xmaxPreferred - this.xminPreferred) < 1.4E-45 ) {
this.xminPreferred=0.9 * this.xmaxPreferred - 1.4E-45;
this.xmaxPreferred=1.1 * this.xmaxPreferred + 1.4E-45;
}});

Clazz.newMeth(C$, 'scaleY$',  function () {
this.scaleY$java_util_ArrayList(this.getDrawablesNoClone$());
});

Clazz.newMeth(C$, 'scaleY$java_util_ArrayList',  function (tempList) {
var newYMin=1.7976931348623157E308;
var newYMax=-1.7976931348623157E308;
var measurableFound=false;
for (var i=0, n=tempList.size$(); i < n; i++) {
var obj=tempList.get$I(i);
if (!(Clazz.instanceOf(obj, "org.opensourcephysics.display.Measurable"))) {
continue;
}var measurable=obj;
if (!measurable.isMeasured$()) {
continue;
}var ymi=measurable.getYMin$();
var yma=measurable.getYMax$();
if (this.logScaleY && (Clazz.instanceOf(measurable, "org.opensourcephysics.display.LogMeasurable")) ) {
yma=(measurable).getYMaxLogscale$();
ymi=(measurable).getYMinLogscale$();
}if (!Double.isNaN$D(ymi) && !Double.isNaN$D(yma) ) {
newYMin=Math.min(newYMin, ymi);
newYMin=Math.min(newYMin, yma);
newYMax=Math.max(newYMax, yma);
newYMax=Math.max(newYMax, ymi);
measurableFound=true;
}}
if (measurableFound) {
if (this.logScaleY && ((this.yTopMarginPercentage > 0.0 ) || (this.yBottomMarginPercentage > 0.0 ) ) ) {
newYMax*=1.0 + this.yTopMarginPercentage / 100.0;
newYMin/=1.0 + this.yBottomMarginPercentage / 100.0;
} else if (!this.logScaleY && ((this.yTopMarginPercentage > 0.0 ) || (this.yBottomMarginPercentage > 0.0 ) ) ) {
var yMed=(newYMin + newYMax) / 2;
var yLen=(newYMax - newYMin) / 2;
newYMax=yMed + yLen * (1.0 + this.yTopMarginPercentage / 100.0);
newYMin=yMed - yLen * (1.0 + this.yBottomMarginPercentage / 100.0);
}if (newYMax - newYMin < 1.4E-45 ) {
if (Double.isNaN$D(this.yfloor)) {
newYMin=0.9 * newYMin - 0.5;
} else {
newYMin=Math.min(newYMin, this.yfloor);
}if (Double.isNaN$D(this.yceil)) {
newYMax=1.1 * newYMax + 0.5;
} else {
newYMax=Math.max(newYMax, this.yceil);
}}var range=Math.max(newYMax - newYMin, 1.4E-45);
while (Math.abs((newYMax + range) / range) > 100000.0 ){
range*=2;
newYMin-=range;
newYMax+=range;
}
if (this.autoscaleYMin) {
this.yminPreferred=newYMin - this.autoscaleMargin * range;
}if (this.autoscaleYMax) {
this.ymaxPreferred=newYMax + this.autoscaleMargin * range;
}} else {
if (!Double.isNaN$D(this.yfloor) && this.autoscaleYMin ) {
this.yminPreferred=this.yfloor;
}if (!Double.isNaN$D(this.yceil) && this.autoscaleYMax ) {
this.ymaxPreferred=this.yceil;
}}if (!Double.isNaN$D(this.yfloor)) {
this.yminPreferred=Math.min(this.yfloor, this.yminPreferred);
}if (!Double.isNaN$D(this.yceil)) {
this.ymaxPreferred=Math.max(this.yceil, this.ymaxPreferred);
}if (Math.abs(this.ymaxPreferred - this.yminPreferred) < 1.4E-45 ) {
this.yminPreferred=0.9 * this.ymaxPreferred - 1.4E-45;
this.ymaxPreferred=1.1 * this.ymaxPreferred + 1.4E-45;
}});

Clazz.newMeth(C$, 'paintDrawableList$java_awt_Graphics$java_util_ArrayList',  function (g, tempList) {
if (tempList == null ) {
return;
}var w=this.getWidth$() - this.leftGutter - this.rightGutter ;
var h=this.getHeight$() - this.bottomGutter - this.topGutter ;
if ((w < 0) || (h < 0) ) {
return;
}var g2=g.create$();
if (this.clipAtGutter) {
g2.clipRect$I$I$I$I(this.leftGutter, this.topGutter, w, h);
}if (!tempList.isEmpty$() && (Clazz.instanceOf(tempList.get$I(0), "org.opensourcephysics.display.False3D")) ) {
tempList.get$I(0).draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(this, g2);
} else {
for (var i=0, n=tempList.size$(); i < n; i++) {
if (!this.validImage) {
break;
}var d=tempList.get$I(i);
d.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(this, g2);
}
}if (!true) p$1.getMessages.apply(this, []).draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(this, g2);
g2.dispose$();
});

Clazz.newMeth(C$, 'getDimensionSetter$',  function () {
return this.dimensionSetter;
});

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
{
if ((drawable != null ) && !this.drawableList.contains$O(drawable) ) {
this.drawableList.add$O(drawable);
this.invalidateImage$();
}}if (Clazz.instanceOf(drawable, "org.opensourcephysics.display.Dimensioned")) {
this.dimensionSetter=(drawable);
}});

Clazz.newMeth(C$, 'addDrawables$java_util_Collection',  function (drawables) {
{
var it=drawables.iterator$();
while (it.hasNext$()){
var obj=it.next$();
if (Clazz.instanceOf(obj, "org.opensourcephysics.display.Drawable")) {
this.addDrawable$org_opensourcephysics_display_Drawable(obj);
}}
}});

Clazz.newMeth(C$, 'addDrawableAtIndex$I$org_opensourcephysics_display_Drawable',  function (index, drawable) {
{
if ((drawable != null ) && !this.drawableList.contains$O(drawable) ) {
this.drawableList.add$I$O(index, drawable);
this.invalidateImage$();
}}if (Clazz.instanceOf(drawable, "org.opensourcephysics.display.Dimensioned")) {
this.dimensionSetter=(drawable);
}});

Clazz.newMeth(C$, 'replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable',  function (oldDrawable, newDrawable) {
{
if ((oldDrawable != null ) && this.drawableList.contains$O(oldDrawable) ) {
var i=this.drawableList.indexOf$O(oldDrawable);
this.drawableList.set$I$O(i, newDrawable);
if (Clazz.instanceOf(newDrawable, "org.opensourcephysics.display.Dimensioned")) {
this.dimensionSetter=(newDrawable);
}} else {
this.addDrawable$org_opensourcephysics_display_Drawable(newDrawable);
}}});

Clazz.newMeth(C$, 'removeDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
{
this.drawableList.remove$O(drawable);
}if (Clazz.instanceOf(drawable, "org.opensourcephysics.display.Dimensioned")) {
this.dimensionSetter=null;
}});

Clazz.newMeth(C$, 'removeObjectsOfClass$Class',  function (c) {
{
var it=this.drawableList.iterator$();
while (it.hasNext$()){
var element=it.next$();
if (element.getClass$() === c ) {
it.remove$();
if (Clazz.instanceOf(element, "org.opensourcephysics.display.Dimensioned")) {
this.dimensionSetter=null;
}}}
}});

Clazz.newMeth(C$, 'removeDrawables$Class',  function (c) {
{
var it=this.drawableList.iterator$();
while (it.hasNext$()){
var element=it.next$();
if (c.isInstance$O(element)) {
it.remove$();
if (Clazz.instanceOf(element, "org.opensourcephysics.display.Dimensioned")) {
this.dimensionSetter=null;
}}}
}});

Clazz.newMeth(C$, 'removeOptionController$',  function () {
this.removeMouseListener$java_awt_event_MouseListener(this.optionController);
this.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.optionController);
});

Clazz.newMeth(C$, 'addOptionController$',  function () {
this.optionController=((P$.DrawingPanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.display.DrawingPanel','.OptionController']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mousePressed$java_awt_event_MouseEvent.apply(this, [e]);
this.b$['javax.swing.JComponent'].requestFocus$.apply(this.b$['javax.swing.JComponent'], []);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.DrawingPanel$6));
this.addMouseListener$java_awt_event_MouseListener(this.optionController);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.optionController);
});

Clazz.newMeth(C$, 'clear$',  function () {
{
this.drawableList.clear$();
}this.dimensionSetter=null;
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
{
return Clazz.new_($I$(12,1).c$$java_util_Collection,[this.drawableList]);
}});

Clazz.newMeth(C$, 'getDrawablesNoClone$',  function () {
return this.drawableList;
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (type) {
return this.getDrawables$Class$Z$org_opensourcephysics_display_Drawable$java_util_ArrayList(type, true, null, null);
});

Clazz.newMeth(C$, 'getFirstDrawable$Class',  function (type) {
var ret=null;
{
for (var i=0, n=this.drawableList.size$(); i < n; i++) {
var d=this.drawableList.get$I(i);
if (type == null  || type.isInstance$O(d) ) {
ret=d;
break;
}}
}return ret;
});

Clazz.newMeth(C$, 'getDrawablesExcept$Class$org_opensourcephysics_display_Drawable',  function (type, except) {
return this.getDrawables$Class$Z$org_opensourcephysics_display_Drawable$java_util_ArrayList(type, true, except, null);
});

Clazz.newMeth(C$, 'getObjectOfClass$Class',  function (type) {
return this.getDrawables$Class$Z$org_opensourcephysics_display_Drawable$java_util_ArrayList(type, false, null, null);
});

Clazz.newMeth(C$, 'getDrawablesExcept$Class',  function (type) {
{
var objects=Clazz.new_($I$(12,1));
for (var i=0, n=this.drawableList.size$(); i < n; i++) {
var d=this.drawableList.get$I(i);
if (!type.isInstance$O(d)) {
objects.add$O(d);
}}
return objects;
}});

Clazz.newMeth(C$, 'getDrawables$Class$Z$org_opensourcephysics_display_Drawable$java_util_ArrayList',  function (type, allowSubtypes, except, ret) {
{
var objects=(ret == null  ? Clazz.new_($I$(12,1)) : ret);
for (var i=0, n=this.drawableList.size$(); i < n; i++) {
var d=this.drawableList.get$I(i);
if (allowSubtypes ? ((except == null  || d !== except  ) && (type == null  || type.isInstance$O(d) ) ) : d.getClass$() === type ) {
objects.add$O(d);
}}
return objects;
}});

Clazz.newMeth(C$, 'getGutters$',  function () {
return Clazz.array(Integer.TYPE, -1, [this.leftGutter, this.topGutter, this.rightGutter, this.bottomGutter]);
});

Clazz.newMeth(C$, 'setGutters$IA',  function (gutters) {
this.setGutters$I$I$I$I(gutters[0], gutters[1], gutters[2], gutters[3]);
});

Clazz.newMeth(C$, 'setGutters$I$I$I$I',  function (left, top, right, bottom) {
this.leftGutter=left;
this.topGutter=top;
this.rightGutter=right;
this.bottomGutter=bottom;
});

Clazz.newMeth(C$, 'setPreferredGutters$I$I$I$I',  function (left, top, right, bottom) {
this.setGutters$I$I$I$I(this.leftGutterPreferred=left, this.topGutterPreferred=top, this.rightGutterPreferred=right, this.bottomGutterPreferred=bottom);
});

Clazz.newMeth(C$, 'resetGutters$',  function () {
this.setGutters$I$I$I$I(this.leftGutterPreferred, this.topGutterPreferred, this.rightGutterPreferred, this.bottomGutterPreferred);
});

Clazz.newMeth(C$, 'getBottomGutter$',  function () {
return this.bottomGutter;
});

Clazz.newMeth(C$, 'getTopGutter$',  function () {
return this.topGutter;
});

Clazz.newMeth(C$, 'getLeftGutter$',  function () {
return this.leftGutter;
});

Clazz.newMeth(C$, 'getRightGutter$',  function () {
return this.rightGutter;
});

Clazz.newMeth(C$, 'setMessage$S',  function (msg) {
this.setMessage$S$I(msg, 1);
});

Clazz.newMeth(C$, 'setMessage$S$I',  function (msg, location) {
if (msg != null  && msg.length$() == 0 ) msg=null;
p$1.getMessages.apply(this, []).setMessage$org_opensourcephysics_display_DrawingPanel$S$I(this, msg, location);
if (msg == null  ? this.lastMessage[location] == null  : msg.equals$O(this.lastMessage[location])) {
return false;
}this.lastMessage[location]=msg;
return true;
});

Clazz.newMeth(C$, 'getMessages',  function () {
return (this.messages == null  ? (this.messages=Clazz.new_($I$(36,1).c$$org_opensourcephysics_display_DrawingPanel,[true ? this : null])) : this.messages);
}, p$1);

Clazz.newMeth(C$, 'setShowCoordinates$Z',  function (show) {
show=false;
if (this.showCoordinates && !show ) {
this.removeMouseListener$java_awt_event_MouseListener(this.mouseController);
this.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
} else if (!this.showCoordinates && show ) {
this.addMouseListener$java_awt_event_MouseListener(this.mouseController);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
}this.showCoordinates=show;
});

Clazz.newMeth(C$, 'isZoomEvent$java_awt_event_MouseEvent',  function (e) {
return $I$(7).isPopupTrigger$java_awt_event_InputEvent(e);
});

Clazz.newMeth(C$, 'repaint$I$I$I$I',  function (x, y, w, h) {
if ($I$(7).isJS) {
this.repaintIfNecessary$();
return;
}this.setPaintDrawables$Z(true);
C$.superclazz.prototype.repaint$I$I$I$I.apply(this, [x, y, w, h]);
});

Clazz.newMeth(C$, 'repaint$',  function () {
this.setPaintDrawables$Z(true);
var top=this.getTopLevelAncestor$();
if (C$.superclazz.prototype.getHeight$.apply(this, []) <= 0 || top == null   || !top.isVisible$()  || top.getIgnoreRepaint$() ) {
} else {
C$.superclazz.prototype.repaint$.apply(this, []);
}});

Clazz.newMeth(C$, 'repaintIfNecessary$',  function () {
if (!$I$(7).isJS || !true ) p$1.repaintGlassPane.apply(this, []);
});

Clazz.newMeth(C$, 'repaintGlassPane',  function () {
if (this.glassPane == null ) this.repaint$();
 else this.glassPane.repaint$();
}, p$1);

Clazz.newMeth(C$, 'isShowCoordinates$',  function () {
return this.showCoordinates;
});

Clazz.newMeth(C$, 'displayCoordinates$java_awt_event_MouseEvent',  function (e) {
if (this.isShowCoordinates$()) {
var s=(e == null  ? null : this.coordinateStrBuilder.getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent(this, e));
this.setMessage$S$I(s, 0);
this.repaintIfNecessary$();
}});

Clazz.newMeth(C$, 'repaintForZoom$',  function () {
this.repaint$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(37,1));
}, 1);

Clazz.newMeth(C$, 'transformPath$java_awt_geom_GeneralPath',  function (s) {
return this.pixelTransform.createTransformedShape$java_awt_Shape(s);
});

Clazz.newMeth(C$, 'transformShape$java_awt_Shape',  function (s) {
return this.pixelTransform.createTransformedShape$java_awt_Shape(s);
});

Clazz.newMeth(C$, 'dref$O',  function (o) {
return this;
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (this.isDisposed) {
}C$.superclazz.prototype.firePropertyChange$S$O$O.apply(this, [propertyName, oldValue, newValue]);
});

Clazz.newMeth(C$, 'receiveToolReply$org_opensourcephysics_tools_Job',  function (job) {
var control=Clazz.new_($I$(38,1));
control.readXML$S(job.getXML$());
$I$(39,"loadDatasets$java_util_ArrayList$java_util_Iterator",[this.getObjectOfClass$Class(Clazz.getClass($I$(39))), control.getObjects$Class(Clazz.getClass($I$(39))).iterator$()]);
});

C$.$static$=function(){C$.$static$=0;
C$.RECORD_PAINT_TIMES=false;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel, "CMController", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.event.MouseInputAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var s=this.b$['org.opensourcephysics.display.DrawingPanel'].coordinateStrBuilder.getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent(this.b$['org.opensourcephysics.display.DrawingPanel'], e);
this.b$['org.opensourcephysics.display.DrawingPanel'].invalidateImage$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
this.b$['org.opensourcephysics.display.DrawingPanel'].setMessage$S$I.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [s, 0]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setMessage$S$I.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [null, 0]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.display.DrawingPanel'].showCoordinates) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [$I$(1).getPredefinedCursor$I(1)]);
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [$I$(1).getPredefinedCursor$I(0)]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].displayCoordinates$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel, "ZoomBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=false;
this.dragged=false;
this.showUndraggedBox=true;
},1);

C$.$fields$=[['Z',['visible','dragged','showUndraggedBox'],'I',['xstart','ystart','xstop','ystop','xlast','ylast']]]

Clazz.newMeth(C$, 'startZoom$I$I',  function (xpix, ypix) {
if (!this.b$['org.opensourcephysics.display.DrawingPanel'].isZoom$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [])) {
return;
}this.visible=true;
this.dragged=false;
this.xlast=this.xstop=this.xstart=xpix;
this.ylast=this.ystop=this.ystart=ypix;
this.b$['org.opensourcephysics.display.DrawingPanel'].repaint$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});

Clazz.newMeth(C$, 'hide$',  function () {
this.visible=false;
this.b$['org.opensourcephysics.display.DrawingPanel'].repaint$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});

Clazz.newMeth(C$, 'setShowUndraggedBox$Z',  function (show) {
this.showUndraggedBox=show;
});

Clazz.newMeth(C$, 'drag$I$I',  function (xpix, ypix) {
if (!this.visible) {
return;
}this.dragged=true;
this.xstop=xpix;
this.ystop=ypix;
var g=this.b$['javax.swing.JComponent'].getGraphics$.apply(this.b$['javax.swing.JComponent'], []);
if (g == null ) {
return;
}g.setXORMode$java_awt_Color($I$(2).green);
g.drawRect$I$I$I$I(Math.min(this.xstart, this.xlast), Math.min(this.ystart, this.ylast), Math.abs(this.xlast - this.xstart), Math.abs(this.ylast - this.ystart));
this.xlast=this.xstop;
this.ylast=this.ystop;
g.drawRect$I$I$I$I(Math.min(this.xstart, this.xlast), Math.min(this.ystart, this.ylast), Math.abs(this.xlast - this.xstart), Math.abs(this.ylast - this.ystart));
g.setPaintMode$();
g.dispose$();
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!this.visible) {
return;
}if ((this.xstop == this.xstart) || (this.ystop == this.ystart) ) {
return;
}g.setColor$java_awt_Color($I$(2).magenta);
g.drawRect$I$I$I$I(Math.min(this.xstart, this.xstop), Math.min(this.ystart, this.ystop), Math.abs(this.xstop - this.xstart), Math.abs(this.ystop - this.ystart));
});

Clazz.newMeth(C$, 'isDragged$',  function () {
return this.dragged && (this.xstop != this.xstart) && (this.ystop != this.ystart)  ;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
this.visible=vis;
});

Clazz.newMeth(C$, 'reportZoom$',  function () {
var xmin=Math.min(this.xstart, this.xstop);
var xmax=Math.max(this.xstart, this.xstop);
var ymin=Math.min(this.ystart, this.ystop);
var ymax=Math.max(this.ystart, this.ystop);
return Clazz.new_($I$(3,1).c$$I$I$I$I,[xmin, ymin, xmax - xmin, ymax - ymin]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel, "PopupmenuListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.visible=false;
var cmd=evt.getActionCommand$();
if (cmd.equals$O($I$(4).getString$S("DrawingFrame.InspectMenuItem"))) {
this.b$['org.opensourcephysics.display.DrawingPanel'].showInspector$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else if (cmd.equals$O($I$(4).getString$S("DisplayPanel.Snapshot_menu_item"))) {
this.b$['org.opensourcephysics.display.DrawingPanel'].snapshot$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else if (cmd.equals$O($I$(4).getString$S("DisplayPanel.Zoom_in_menu_item"))) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setAutoscaleX$Z.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [false]);
this.b$['org.opensourcephysics.display.DrawingPanel'].setAutoscaleY$Z.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [false]);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomIn$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else if (cmd.equals$O($I$(4).getString$S("DisplayPanel.Zoom_out_menu_item"))) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setAutoscaleX$Z.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [false]);
this.b$['org.opensourcephysics.display.DrawingPanel'].setAutoscaleY$Z.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [false]);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomOut$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else if (cmd.equals$O($I$(4).getString$S("DrawingFrame.Autoscale_menu_item"))) {
var nan=NaN;
this.b$['org.opensourcephysics.display.DrawingPanel'].setPreferredMinMax$D$D$D$D.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [nan, nan, nan, nan]);
this.b$['org.opensourcephysics.display.DrawingPanel'].repaint$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else if (cmd.equals$O($I$(4).getString$S("DrawingFrame.Scale_menu_item"))) {
var plotInspector=Clazz.new_($I$(5,1).c$$org_opensourcephysics_display_DrawingPanel,[this.b$['org.opensourcephysics.display.DrawingPanel']]);
plotInspector.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingPanel']);
plotInspector.updateDisplay$();
$I$(6,"setFonts$O$I",[plotInspector, $I$(6).getLevel$()]);
plotInspector.pack$();
plotInspector.setVisible$Z(true);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel, "OptionController", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.event.MouseInputAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.display.DrawingPanel'].isZoomEvent$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [e])) {
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.startZoom$I$I(e.getX$(), e.getY$());
} else if (this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.isVisible$()) {
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.visible=false;
this.b$['org.opensourcephysics.display.DrawingPanel'].repaint$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.drag$I$I(e.getX$(), e.getY$());
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.display.DrawingPanel'].isZoomEvent$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [e]) && this.b$['org.opensourcephysics.display.DrawingPanel'].popupmenuIsEnabled ) {
if (this.b$['org.opensourcephysics.display.DrawingPanel'].isZoom$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) && !this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.isDragged$() && this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.showUndraggedBox  ) {
var dim=this.b$['org.opensourcephysics.display.DrawingPanel'].viewRect.getSize$();
dim.width-=this.b$['org.opensourcephysics.display.DrawingPanel'].getLeftGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) + this.b$['org.opensourcephysics.display.DrawingPanel'].getRightGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
dim.height-=this.b$['org.opensourcephysics.display.DrawingPanel'].getTopGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) + this.b$['org.opensourcephysics.display.DrawingPanel'].getBottomGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.xstart=e.getX$() - (dim.width/4|0);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.xstop=e.getX$() + (dim.width/4|0);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.ystart=e.getY$() - (dim.height/4|0);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.ystop=e.getY$() + (dim.height/4|0);
this.b$['org.opensourcephysics.display.DrawingPanel'].zoomBox.visible=true;
this.b$['org.opensourcephysics.display.DrawingPanel'].repaintForZoom$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}var popup=this.b$['org.opensourcephysics.display.DrawingPanel'].getPopupMenu$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
if (popup != null ) popup.show$java_awt_Component$I$I(e.getComponent$(), e.getX$(), e.getY$());
return;
} else if ($I$(7).isPopupTrigger$java_awt_event_InputEvent(e) && !this.b$['org.opensourcephysics.display.DrawingPanel'].popupmenuIsEnabled && (this.b$['org.opensourcephysics.display.DrawingPanel'].customInspector != null )  ) {
this.b$['org.opensourcephysics.display.DrawingPanel'].customInspector.setVisible$Z(true);
return;
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var focuser=$I$(8).getCurrentKeyboardFocusManager$();
var focusOwner=focuser.getFocusOwner$();
if (focusOwner != null  && !(Clazz.instanceOf(focusOwner, "javax.swing.text.JTextComponent")) ) {
this.b$['javax.swing.JComponent'].requestFocusInWindow$.apply(this.b$['javax.swing.JComponent'], []);
}if (this.b$['org.opensourcephysics.display.DrawingPanel'].displayCoordsOnMouseMoved) this.b$['org.opensourcephysics.display.DrawingPanel'].displayCoordinates$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel, "DrawingPanelLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
control.setValue$S$D("preferred x min", panel.getPreferredXMin$());
control.setValue$S$D("preferred x max", panel.getPreferredXMax$());
control.setValue$S$D("preferred y min", panel.getPreferredYMin$());
control.setValue$S$D("preferred y max", panel.getPreferredYMax$());
control.setValue$S$Z("autoscale x", panel.isAutoscaleX$());
control.setValue$S$Z("autoscale y", panel.isAutoscaleY$());
control.setValue$S$Z("square aspect", panel.isSquareAspect$());
control.setValue$S$O("drawables", panel.getDrawables$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var panel=Clazz.new_($I$(9,1));
var xmin=control.getDouble$S("preferred x min");
var xmax=control.getDouble$S("preferred x max");
var ymin=control.getDouble$S("preferred y min");
var ymax=control.getDouble$S("preferred y max");
panel.setPreferredMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
if (control.getBoolean$S("autoscale x")) {
panel.setAutoscaleX$Z(true);
}if (control.getBoolean$S("autoscale y")) {
panel.setAutoscaleY$Z(true);
}return panel;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
var xmin=control.getDouble$S("preferred x min");
var xmax=control.getDouble$S("preferred x max");
var ymin=control.getDouble$S("preferred y min");
var ymax=control.getDouble$S("preferred y max");
panel.setPreferredMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
panel.squareAspect=control.getBoolean$S("square aspect");
if (control.getBoolean$S("autoscale x")) {
panel.setAutoscaleX$Z(true);
}if (control.getBoolean$S("autoscale y")) {
panel.setAutoscaleY$Z(true);
}var drawables=Clazz.getClass($I$(10),['add$O','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$OA','toArray$java_util_function_IntFunction']).cast$O(control.getObject$S("drawables"));
if (drawables != null ) {
panel.clear$();
var it=drawables.iterator$();
while (it.hasNext$()){
panel.addDrawable$org_opensourcephysics_display_Drawable(it.next$());
}
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
