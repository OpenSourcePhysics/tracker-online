(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.VidCartesianCoordinateStringBuilder','java.awt.geom.AffineTransform','java.awt.Point',['java.awt.geom.Point2D','.Double'],['org.opensourcephysics.media.core.TPoint','.Follower'],'javax.swing.event.SwingPropertyChangeSupport']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TPoint", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['java.awt.geom.Point2D','.Double'], ['org.opensourcephysics.display.Interactive', 'org.opensourcephysics.media.core.Trackable']);
C$.$classes$=[['Follower',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
this.trackEditTrigger=false;
this.coordsEditTrigger=false;
this.stepEditTrigger=false;
this.isAdjusting=false;
this.prevX=NaN;
this.prevY=NaN;
},1);

C$.$fields$=[['Z',['enabled','trackEditTrigger','coordsEditTrigger','stepEditTrigger','isAdjusting'],'D',['prevX','prevY'],'O',['screenPt','java.awt.Point','worldPt','java.awt.geom.Point2D.Double','support','java.beans.PropertyChangeSupport','attachedTo','org.opensourcephysics.media.core.TPoint','toScreen','java.awt.geom.AffineTransform']]
,['Z',['coordsVisibleInMouseBox'],'O',['xyStringBuilder','org.opensourcephysics.media.core.XYCoordinateStringBuilder']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double',  function (point) {
C$.c$$D$D.apply(this, [point.x, point.y]);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
return null;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.setXY$D$D(x, this.y);
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.setXY$D$D(this.x, y);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.setLocation$D$D(x, y);
});

Clazz.newMeth(C$, 'setLocation$D$D',  function (x, y) {
if ((this.getX$() == x ) && (this.getY$() == y ) ) {
return;
}C$.superclazz.prototype.setLocation$D$D.apply(this, [x, y]);
if (this.support != null ) {
this.support.firePropertyChange$S$O$O("location", null, this);
}});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return vidPanel.getFrameNumber$();
});

Clazz.newMeth(C$, 'getScreenPosition$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
if (this.screenPt == null ) {
this.toScreen=Clazz.new_($I$(2,1));
this.screenPt=Clazz.new_($I$(3,1));
}this.toScreen.setTransform$java_awt_geom_AffineTransform(vidPanel.getPixelTransform$());
if (!vidPanel.isDrawingInImageSpace$()) {
var n=this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.toScreen.concatenate$java_awt_geom_AffineTransform(vidPanel.getCoords$().getToWorldTransform$I(n));
}this.toScreen.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this, this.screenPt);
return this.screenPt;
});

Clazz.newMeth(C$, 'setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel',  function (x, y, vidPanel) {
if (this.screenPt == null ) {
this.screenPt=Clazz.new_($I$(3,1));
this.toScreen=Clazz.new_($I$(2,1));
}if (this.worldPt == null ) {
this.worldPt=Clazz.new_($I$(4,1));
}this.screenPt.setLocation$I$I(x, y);
this.toScreen.setTransform$java_awt_geom_AffineTransform(vidPanel.getPixelTransform$());
if (!vidPanel.isDrawingInImageSpace$()) {
var n=this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.toScreen.concatenate$java_awt_geom_AffineTransform(vidPanel.getCoords$().getToWorldTransform$I(n));
}try {
this.toScreen.inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.screenPt, this.worldPt);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.setXY$D$D(this.worldPt.x, this.worldPt.y);
});

Clazz.newMeth(C$, 'setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent',  function (x, y, vidPanel, e) {
this.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(x, y, vidPanel);
});

Clazz.newMeth(C$, 'getWorldPosition$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
var at=vidPanel.getCoords$().getToWorldTransform$I(this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(vidPanel));
if (this.worldPt == null ) {
this.worldPt=Clazz.new_($I$(4,1));
}return at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this, this.worldPt);
});

Clazz.newMeth(C$, 'setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel',  function (x, y, vidPanel) {
var n=this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel$I(x, y, vidPanel, n);
});

Clazz.newMeth(C$, 'setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel$I',  function (x, y, vidPanel, n) {
var at=vidPanel.getCoords$().getToWorldTransform$I(n);
if (this.worldPt == null ) {
this.worldPt=Clazz.new_($I$(4,1));
}this.worldPt.setLocation$D$D(x, y);
try {
at.inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.worldPt, this.worldPt);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.setXY$D$D(this.worldPt.x, this.worldPt.y);
});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
if (C$.coordsVisibleInMouseBox) {
this.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var builder=vidPanel.getXYCoordinateStringBuilder$org_opensourcephysics_media_core_TPoint(this);
var s=builder.getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D(vidPanel, this.worldPt.x, this.worldPt.y);
vidPanel.setMessage$S$I(s, 0);
}});

Clazz.newMeth(C$, 'attachTo$org_opensourcephysics_media_core_TPoint',  function (p) {
if (p == null  || p === this  ) return false;
if (p === this.attachedTo  && p.x == this.x   && p.y == this.y  ) return false;
this.detach$();
this.attachedTo=p;
p.addPropertyChangeListener$S$java_beans_PropertyChangeListener("location", Clazz.new_($I$(5,1),[this, null]));
this.setXY$D$D(p.x, p.y);
return true;
});

Clazz.newMeth(C$, 'detach$',  function () {
if (this.attachedTo != null ) {
var listeners=this.attachedTo.support.getPropertyChangeListeners$S("location");
for (var next, $next = 0, $$next = listeners; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (Clazz.instanceOf(next, "org.opensourcephysics.media.core.TPoint.Follower")) {
var follower=next;
if (follower.getTarget$() === this ) this.attachedTo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("location", next);
}}
this.attachedTo=null;
}});

Clazz.newMeth(C$, 'isAttached$',  function () {
return this.attachedTo != null ;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
this.enabled=enabled;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setTrackEditTrigger$Z',  function (edit) {
this.trackEditTrigger=edit;
});

Clazz.newMeth(C$, 'isTrackEditTrigger$',  function () {
return this.trackEditTrigger;
});

Clazz.newMeth(C$, 'setCoordsEditTrigger$Z',  function (edit) {
this.coordsEditTrigger=edit;
});

Clazz.newMeth(C$, 'isCoordsEditTrigger$',  function () {
return this.coordsEditTrigger;
});

Clazz.newMeth(C$, 'setStepEditTrigger$Z',  function (stepEditTrigger) {
this.stepEditTrigger=stepEditTrigger;
});

Clazz.newMeth(C$, 'isStepEditTrigger$',  function () {
return this.stepEditTrigger;
});

Clazz.newMeth(C$, 'getBounds$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return null;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'angle$D$D',  function (x, y) {
return Math.atan2(y - this.getY$(), x - this.getX$());
});

Clazz.newMeth(C$, 'angle$java_awt_geom_Point2D_Double',  function (pt) {
return Math.atan2(pt.y - this.y, pt.x - this.x);
});

Clazz.newMeth(C$, 'sin$D$D',  function (x, y) {
return (this.getY$() - y) / this.distance$D$D(x, y);
});

Clazz.newMeth(C$, 'sin$java_awt_geom_Point2D_Double',  function (pt) {
return (this.y - pt.y) / this.distance$java_awt_geom_Point2D(pt);
});

Clazz.newMeth(C$, 'cos$D$D',  function (x, y) {
return (x - this.getX$()) / this.distance$D$D(x, y);
});

Clazz.newMeth(C$, 'cos$java_awt_geom_Point2D_Double',  function (pt) {
return (pt.x - this.x) / this.distance$java_awt_geom_Point2D(pt);
});

Clazz.newMeth(C$, 'center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double',  function (pt1, pt2) {
var x=(pt1.x + pt2.x) / 2.0;
var y=(pt1.y + pt2.y) / 2.0;
this.setLocation$D$D(x, y);
});

Clazz.newMeth(C$, 'translate$D$D',  function (dx, dy) {
this.setXY$D$D(this.x + dx, this.y + dy);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
if (!this.isAdjusting && adjusting ) {
this.prevX=this.x;
this.prevY=this.y;
}this.isAdjusting=adjusting;
});

Clazz.newMeth(C$, 'isAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.support == null ) {
this.support=Clazz.new_($I$(6,1).c$$O,[this]);
}this.support.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
if (this.support == null ) {
this.support=Clazz.new_($I$(6,1).c$$O,[this]);
}this.support.addPropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.support != null ) {
this.support.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
this.support.removePropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
});

Clazz.newMeth(C$, 'toString',  function () {
return "TPoint [" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + "]" ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) return true;
if ((obj == null ) || (obj.getClass$() !== this.getClass$() ) ) return false;
var p=obj;
return p.x == this.x  && p.y == this.y   && p.screenPt === this.screenPt   && p.worldPt === this.worldPt  ;
});

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint',  function (xScreen, yScreen, vidPanel, end1, end2) {
if (this.screenPt == null ) {
this.screenPt=Clazz.new_($I$(3,1));
this.toScreen=Clazz.new_($I$(2,1));
}if (this.worldPt == null ) {
this.worldPt=Clazz.new_($I$(4,1));
}this.screenPt.setLocation$I$I(xScreen, yScreen);
this.toScreen.setTransform$java_awt_geom_AffineTransform(vidPanel.getPixelTransform$());
if (!vidPanel.isDrawingInImageSpace$()) {
var n=this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.toScreen.concatenate$java_awt_geom_AffineTransform(vidPanel.getCoords$().getToWorldTransform$I(n));
}try {
this.toScreen.inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.screenPt, this.worldPt);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
var dx=end2.x - end1.x;
var dy=end2.y - end1.y;
var u=((this.worldPt.x - end1.x) * dx + (this.worldPt.y - end1.y) * dy) / end1.distanceSq$java_awt_geom_Point2D(end2);
if (java.lang.Double.isNaN$D(u)) {
u=0;
}var xLine=end1.x + u * dx;
var yLine=end1.y + u * dy;
this.setLocation$D$D(xLine, yLine);
});

C$.$static$=function(){C$.$static$=0;
C$.coordsVisibleInMouseBox=true;
C$.xyStringBuilder=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TPoint, "Follower", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var p=e.getSource$();
this.b$['org.opensourcephysics.media.core.TPoint'].setXY$D$D.apply(this.b$['org.opensourcephysics.media.core.TPoint'], [p.x, p.y]);
});

Clazz.newMeth(C$, 'getTarget$',  function () {
return this.b$['org.opensourcephysics.media.core.TPoint'];
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
