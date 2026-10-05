(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.PencilCaption','java.awt.Color','java.awt.Font','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.display.GUIUtils','java.awt.Point','org.opensourcephysics.controls.XML','java.awt.geom.AffineTransform','org.opensourcephysics.cabrillo.tracker.PencilDrawer','org.opensourcephysics.cabrillo.tracker.TFrame',['org.opensourcephysics.cabrillo.tracker.PencilCaption','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PencilCaption", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractiveTextLine');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transform=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['Z',['isSelected'],'D',['offsetX','offsetY','xMax','xMin','yMax','yMin'],'O',['transform','java.awt.geom.AffineTransform','bounds','java.awt.geom.Rectangle2D','graphics','java.awt.Graphics']]
,['O',['handCursor','java.awt.Cursor','baseFont','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$S$D$D$java_awt_Font',  function (text, x, y, font) {
;C$.superclazz.c$$S$D$D.apply(this,[text, x, y]);C$.$init$.apply(this);
this.setFont$java_awt_Font(font);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var refreshed=(this.graphics == null );
if (refreshed) p$1.refreshBounds$java_awt_Graphics.apply(this, [this.graphics=g]);
if (this.getText$() == null  || this.getText$().trim$().equals$O("") ) return;
var g2=g.create$();
var mag;
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=panel;
if (!trackerPanel.isDrawingInImageSpace$()) return;
if (!refreshed) p$1.refreshBounds$java_awt_Graphics.apply(this, [g]);
mag=trackerPanel.getMagnification$();
} else {
mag=panel.getXPixPerUnit$();
}g2.setColor$java_awt_Color(this.color);
this.getPixelPt$org_opensourcephysics_display_DrawingPanel(panel);
g2.translate$D$D(this.pixelPt.x, this.pixelPt.y);
g2.scale$D$D(mag, mag);
this.textLine.drawText$java_awt_Graphics$I$I(g2, 0, 0);
g2.dispose$();
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.isEnabled$() || !(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) ) return null;
if ("".equals$O(this.getText$().trim$())) return null;
if (this.bounds == null ) return null;
var trackerPanel=panel;
if (!$I$(9).isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel)) return null;
var mag=trackerPanel.getMagnification$();
this.transform.setToTranslation$D$D(panel.xToPix$D(this.x - this.bounds.getWidth$() / 2), panel.yToPix$D(this.y - this.bounds.getHeight$()));
this.transform.scale$D$D(mag, mag);
var s=this.transform.createTransformedShape$java_awt_Shape(this.bounds);
if (s.contains$D$D(xpix, ypix)) {
return this;
}return null;
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
C$.superclazz.prototype.setText$S.apply(this, [text]);
p$1.refreshBounds$java_awt_Graphics.apply(this, [this.graphics]);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
p$1.refreshBounds$java_awt_Graphics.apply(this, [this.graphics]);
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return !"".equals$O(this.getText$());
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xMin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xMax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.yMin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.yMax;
});

Clazz.newMeth(C$, 'handleMouseAction$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (e, trackerPanel) {
trackerPanel.setMouseCursor$java_awt_Cursor(C$.handCursor);
switch (trackerPanel.getMouseAction$()) {
case 7:
break;
case 1:
this.isSelected=true;
this.offsetX=trackerPanel.getMouseX$() - this.x;
this.offsetY=trackerPanel.getMouseY$() - this.y;
var drawer=$I$(9).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var scene=drawer.getSceneWithCaption$org_opensourcephysics_cabrillo_tracker_PencilCaption(this);
drawer.drawingControl.setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene(scene);
break;
case 3:
if (this.isSelected) {
this.setXY$D$D(trackerPanel.getMouseX$() - this.offsetX, trackerPanel.getMouseY$() - this.offsetY);
$I$(10).repaintT$java_awt_Component(trackerPanel);
}break;
case 2:
this.isSelected=false;
return true;
case 5:
this.isSelected=false;
break;
case 6:
this.isSelected=false;
break;
case 4:
this.isSelected=false;
break;
}
return false;
});

Clazz.newMeth(C$, 'refreshBounds$java_awt_Graphics',  function (g) {
if (g == null ) return;
this.bounds=this.textLine.getStringBounds$java_awt_Graphics(g);
this.xMax=this.x + this.bounds.getWidth$() / 2;
this.xMin=this.x - this.bounds.getWidth$() / 2;
this.yMax=this.y + this.bounds.getHeight$() / 2;
this.yMin=this.y - this.bounds.getHeight$();
this.bounds.setRect$D$D$D$D(this.bounds.getX$(), this.bounds.getY$(), this.bounds.getWidth$(), this.bounds.getHeight$() * 0.4);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(11,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.baseFont=Clazz.new_($I$(3,1).c$$S$I$I,["SansSerif", 0, 32]);
{
var icon=$I$(4).getResourceIcon$S$Z("hand_cursor.gif", false);
C$.handCursor=$I$(5,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[icon.getImage$(), Clazz.new_($I$(6,1).c$$I$I,[5, 0]), "Hand", 0]);
$I$(7,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass(C$), C$.getLoader$()]);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilCaption, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var caption=obj;
control.setValue$S$O("text", caption.getText$());
control.setValue$S$I("font_size", caption.getFont$().getSize$());
control.setValue$S$I("colorRGB", caption.color.getRGB$());
var loc=Clazz.array(Double.TYPE, -1, [caption.getX$(), caption.getY$()]);
control.setValue$S$O("position", loc);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var text=control.getString$S("text");
var loc=control.getObject$S("position");
var size=control.getInt$S("font_size");
var fontSize=size;
var font=$I$(1).baseFont.deriveFont$F(fontSize);
return Clazz.new_($I$(1,1).c$$S$D$D$java_awt_Font,[text, loc[0], loc[1], font]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var caption=obj;
caption.color=Clazz.new_([control.getInt$S("colorRGB")],$I$(2,1).c$$I);
return caption;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
