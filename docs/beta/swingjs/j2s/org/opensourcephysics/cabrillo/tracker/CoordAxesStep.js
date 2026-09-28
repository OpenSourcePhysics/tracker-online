(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.media.core.TPoint','java.util.HashMap','java.awt.geom.GeneralPath',['org.opensourcephysics.cabrillo.tracker.CoordAxesStep','.Origin'],['org.opensourcephysics.cabrillo.tracker.CoordAxesStep','.Handle'],'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoordAxesStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Origin',0],['Handle',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.originEnabled=true;
this.handleEnabled=true;
this.panelHandleShapes=Clazz.new_($I$(3,1));
this.path=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['originEnabled','handleEnabled'],'O',['origin','org.opensourcephysics.cabrillo.tracker.CoordAxesStep.Origin','handle','org.opensourcephysics.cabrillo.tracker.CoordAxesStep.Handle','panelHandleShapes','java.util.Map','path','java.awt.geom.GeneralPath']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_CoordAxes$I',  function (track, n) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.origin=Clazz.new_($I$(5,1),[this, null]);
this.origin.setCoordsEditTrigger$Z(true);
this.handle=Clazz.new_($I$(6,1),[this, null]);
this.handle.setCoordsEditTrigger$Z(true);
this.points=Clazz.array($I$(2), -1, [this.origin, this.handle]);
this.screenPoints=Clazz.array($I$(7), [1]);
}, 1);

Clazz.newMeth(C$, 'getOrigin$',  function () {
return this.origin;
});

Clazz.newMeth(C$, 'getHandle$',  function () {
return this.handle;
});

Clazz.newMeth(C$, 'setOriginEnabled$Z',  function (enabled) {
this.originEnabled=enabled;
});

Clazz.newMeth(C$, 'isOriginEnabled$',  function () {
return this.originEnabled;
});

Clazz.newMeth(C$, 'setHandleEnabled$Z',  function (enabled) {
this.handleEnabled=enabled;
});

Clazz.newMeth(C$, 'isHandleEnabled$',  function () {
return this.handleEnabled;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
var track=this.getTrack$();
var autoTracker=(track.tp == null  ? null : track.tp.getAutoTracker$Z(false));
if (this.handleEnabled) {
var hitShape=this.panelHandleShapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) ) {
this.handle.setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(xpix, ypix, trackerPanel);
return (autoTracker != null  && autoTracker.getTrack$() === track   && track.getTargetIndex$() == 1  && autoTracker.isOnKeyFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel(track.tp)  ? null : this.handle);
}}if (this.originEnabled && !track.isLocked$() && C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]) === this.origin   ) {
return (autoTracker != null  && autoTracker.getTrack$() === track   && track.getTargetIndex$() == 0  && autoTracker.isOnKeyFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel(track.tp)  ? null : this.origin);
}return null;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
var track=this.getTrack$();
if (track.tp === panel ) {
var autoTracker=track.tp.getAutoTracker$Z(false);
if (autoTracker != null  && autoTracker.isInteracting$org_opensourcephysics_cabrillo_tracker_TTrack(track) ) return;
}var trackerPanel=panel;
var g=_g;
this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).draw$java_awt_Graphics2D$Z(g, false);
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
if (mark == null ) {
var selection=trackerPanel.getSelectedPoint$();
var coords=trackerPanel.getCoords$();
var n=trackerPanel.getFrameNumber$();
var track=this.getTrack$();
if (track.tp != null ) n=track.tp.getFrameNumber$();
var x=coords.getOriginX$I(n);
var y=coords.getOriginY$I(n);
if (Double.isNaN$D(x) || Double.isNaN$D(y) ) {
x=trackerPanel.getImageWidth$() / 2;
y=trackerPanel.getImageHeight$() / 2;
coords.setOriginXY$I$D$D(n, x, y);
}this.origin.setLocation$D$D(x, y);
var p0=this.screenPoints[0]=this.origin.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var axesShape=this.footprint.getShape$java_awt_PointA$I(this.screenPoints, $I$(9).getIntegerFactor$());
this.path.reset$();
this.path.moveTo$F$F(p0.x + 25, p0.y);
this.path.lineTo$F$F(p0.x + 500, p0.y);
var hitShape=this.path;
if (trackerPanel.isDrawingInImageSpace$()) {
var angle=coords.getAngle$I(n);
$I$(8).transform.setToRotation$D$D$D(-angle, p0.x, p0.y);
axesShape=axesShape.transform$java_awt_geom_AffineTransform($I$(8).transform);
hitShape=$I$(8).transform.createTransformedShape$java_awt_Shape(hitShape);
}this.panelHandleShapes.put$O$O(trackerPanel.getID$(), hitShape);
var scale=$I$(9).getIntegerFactor$();
var selectedShape=null;
if (selection === this.origin ) {
$I$(8).transform.setToTranslation$D$D(p0.x, p0.y);
if (scale > 1) {
$I$(8).transform.scale$D$D(scale, scale);
}selectedShape=$I$(8).transform.createTransformedShape$java_awt_Shape($I$(8).selectionShape);
} else if (selection === this.handle ) {
var p1=this.handle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
$I$(8).transform.setToTranslation$D$D(p1.x, p1.y);
if (scale > 1) {
$I$(8).transform.scale$D$D(scale, scale);
}selectedShape=$I$(8).transform.createTransformedShape$java_awt_Shape($I$(8).selectionShape);
}var color=this.footprint.getColor$();
var shape=selectedShape == null  ? Clazz.new_([Clazz.array($I$(11), -1, [axesShape])],$I$(10,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true])) : Clazz.new_([Clazz.array($I$(11), -1, [axesShape, selectedShape])],$I$(10,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true])).andStroke$java_awt_StrokeA(Clazz.array($I$(12), -1, [null, $I$(8).selectionStroke]));
var axes=track;
var gridMark=axes.grid.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
mark=((P$.CoordAxesStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxesStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var g2=g.create$();
g2.setPaint$java_awt_Paint(this.$finals$.color);
if ($I$(13).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(14).KEY_ANTIALIASING, $I$(14).VALUE_ANTIALIAS_ON);
if (this.$finals$.axes.gridVisible) {
this.$finals$.gridMark.draw$java_awt_Graphics2D$Z(g2, false);
}this.$finals$.shape.draw$java_awt_Graphics2D(g2);
g2.dispose$();
});
})()
), Clazz.new_(P$.CoordAxesStep$1.$init$,[this, {color:color,gridMark:gridMark,axes:axes,shape:shape}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
}return mark;
});

Clazz.newMeth(C$, 'getPointIndex$org_opensourcephysics_media_core_TPoint',  function (p) {
var i=C$.superclazz.prototype.getPointIndex$org_opensourcephysics_media_core_TPoint.apply(this, [p]);
if (i == -1) {
if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.CoordAxes.OriginPoint")) return 0;
if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.CoordAxes.AnglePoint")) return 1;
}return i;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.panelHandleShapes=Clazz.new_($I$(3,1));
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "CoordAxesStep " + this.n;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 2;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.panelHandleShapes.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoordAxesStep, "Origin", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var axes=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (axes.isLocked$()) return;
if (this.isAdjusting$()) {
this.prevX=x;
this.prevY=y;
}C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var panel=axes.tp;
if (panel != null ) {
var coords=panel.getCoords$();
coords.setAdjusting$Z(this.isAdjusting$());
var n=panel.getFrameNumber$();
coords.setOriginXY$I$D$D(n, x, y);
axes.xField.setValue$D(coords.getOriginX$I(n));
axes.yField.setValue$D(coords.getOriginY$I(n));
}if (this.isAdjusting$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
}});

Clazz.newMeth(C$, 'getX$',  function () {
return C$.superclazz.prototype.getX$.apply(this, []);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
var wasAdjusting=this.isAdjusting$();
if (wasAdjusting == adjusting ) return;
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (!wasAdjusting) {
this.prevX=this.x;
this.prevY=this.y;
} else if (!java.lang.Double.isNaN$D(this.prevX)) {
this.setXY$D$D(this.prevX, this.prevY);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
track.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(track.tp.getFrameNumber$()));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoordAxesStep, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.angleIncrement=0;
this.p=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['D',['angleIncrement'],'O',['p','java.awt.geom.Point2D.Double']]]

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track.isLocked$()) return;
var coordAxes=track;
if (coordAxes.tp == null ) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
return;
}if (this.angleIncrement >= 0.017453292519943295 ) {
this.p.setLocation$D$D(x, y);
var d=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.distance$java_awt_geom_Point2D(this.p);
var theta=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.angle$java_awt_geom_Point2D_Double(this.p);
var i=Math.round((theta / this.angleIncrement));
theta=i * this.angleIncrement;
x=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.getX$() + d * Math.cos(theta);
y=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.getY$() + d * Math.sin(theta);
}if (this.isAdjusting$()) {
this.prevX=x;
this.prevY=y;
}C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var cos=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.cos$java_awt_geom_Point2D_Double(this);
var sin=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.sin$java_awt_geom_Point2D_Double(this);
var coords=coordAxes.tp.getCoords$();
coords.setAdjusting$Z(this.isAdjusting$());
var n=coordAxes.tp.getFrameNumber$();
coords.setCosineSine$I$D$D(n, cos, sin);
coordAxes.angleField.setValue$D(coords.getAngle$I(n));
this.angleIncrement=0;
if (this.isAdjusting$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
}});

Clazz.newMeth(C$, 'setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent',  function (x, y, vidPanel, e) {
if (e == null ) {
this.angleIncrement=0;
} else if (e.isShiftDown$()) {
this.angleIncrement=0.08726646259971647;
} else {
this.angleIncrement=0;
}this.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(x, y, vidPanel);
});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
if (Clazz.instanceOf(vidPanel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=vidPanel;
if (!(this === trackerPanel.getSelectedPoint$() )) {
this.setLocation$D$D(vidPanel.getMouseX$(), vidPanel.getMouseY$());
var p=this.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
p.setLocation$D$D(p.getX$(), 0);
var n=vidPanel.getFrameNumber$();
var toImage=vidPanel.getCoords$().getToImageTransform$I(n);
toImage.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(p, p);
this.setLocation$java_awt_geom_Point2D(p);
}}C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
var wasAdjusting=this.isAdjusting$();
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (wasAdjusting && !adjusting && !java.lang.Double.isNaN$D(this.prevX)  ) {
if (e != null  && e.getID$() != 502 ) {
if (this.prevX == 0  && this.prevY == 0  ) {
this.angleIncrement=0.3490658503988659;
this.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(e.getX$(), e.getY$(), this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'], []).tp);
}} else {
this.setXY$D$D(this.prevX, this.prevY);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
track.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(track.tp.getFrameNumber$()));
}}});

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xScreen, yScreen, trackerPanel) {
var d=100;
var theta=trackerPanel.getCoords$().getAngle$I(trackerPanel.getFrameNumber$());
this.p.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.x + d * Math.cos(theta), this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin.y - d * Math.sin(theta));
var endPt=Clazz.new_($I$(2,1).c$$java_awt_geom_Point2D_Double,[this.p]);
this.setPositionOnLine$I$I$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(xScreen, yScreen, trackerPanel, this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxesStep'].origin, endPt);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
