(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.HashMap','org.opensourcephysics.media.core.TPoint',['org.opensourcephysics.cabrillo.tracker.VectorStep','.Handle'],['org.opensourcephysics.cabrillo.tracker.VectorStep','.Tip'],['org.opensourcephysics.cabrillo.tracker.VectorStep','.VisibleTip'],'java.awt.Point','org.opensourcephysics.cabrillo.tracker.VectorChain','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.cabrillo.tracker.TrackerRes',['org.opensourcephysics.display.OSPRuntime','.TextLayout'],'java.awt.Rectangle','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke',['org.opensourcephysics.cabrillo.tracker.VectorStep','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step', 'java.beans.PropertyChangeListener');
C$.$classes$=[['Handle',0],['Tip',0],['VisibleTip',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tipPoint=Clazz.new_($I$(2,1));
this.tailPoint=Clazz.new_($I$(2,1));
this.tipEnabled=true;
this.tipShapes=Clazz.new_($I$(1,1));
this.shaftShapes=Clazz.new_($I$(1,1));
this.brandNew=true;
this.firePropertyChangeEvents=false;
this.labelVisible=true;
this.rolloverVisible=false;
this.textLayouts=Clazz.new_($I$(1,1));
this.layoutBounds=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['tipEnabled','brandNew','firePropertyChangeEvents','labelVisible','rolloverVisible','$valid'],'I',['dx','dy'],'O',['tipPoint','org.opensourcephysics.media.core.TPoint','+tailPoint','+tail','+tip','+middle','handle','org.opensourcephysics.cabrillo.tracker.VectorStep.Handle','visibleTip','org.opensourcephysics.cabrillo.tracker.VectorStep.VisibleTip','tipShapes','java.util.Map','+shaftShapes','attachmentPoint','org.opensourcephysics.media.core.TPoint','chain','org.opensourcephysics.cabrillo.tracker.VectorChain','textLayouts','java.util.Map','+layoutBounds']]
,['Z',['pointSnapEnabled','vectorSnapEnabled'],'D',['snapDistance'],'O',['vectors','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$I$D$D$D$D',  function (track, n, x, y, xc, yc) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I$D$D$D$D$I.apply(this, [track, n, x, y, xc, yc, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$I$D$D$D$D$I',  function (track, n, x, y, xc, yc, type) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.type=type;
this.tail=Clazz.new_($I$(3,1).c$$D$D,[this, null, x, y]);
this.middle=((P$.VectorStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.media.core.TPoint'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n;
});
})()
), Clazz.new_($I$(2,1).c$$D$D,[this, null, x, y],P$.VectorStep$1));
this.tip=Clazz.new_($I$(4,1).c$$D$D,[this, null, x, y]);
this.handle=Clazz.new_($I$(3,1).c$$D$D,[this, null, x, y]);
this.handle.setStepEditTrigger$Z(true);
this.visibleTip=Clazz.new_($I$(5,1).c$$D$D,[this, null, x, y]);
this.points=Clazz.array($I$(2), -1, [this.tip, this.tail, this.handle, this.visibleTip, this.middle]);
this.screenPoints=Clazz.array($I$(6), [C$.getLength$()]);
this.tip.setLocation$D$D(x + xc, y + yc);
}, 1);

Clazz.newMeth(C$, 'getTip$',  function () {
return this.tip;
});

Clazz.newMeth(C$, 'getTail$',  function () {
return this.tail;
});

Clazz.newMeth(C$, 'getHandle$',  function () {
return this.handle;
});

Clazz.newMeth(C$, 'getVisibleTip$',  function () {
return this.visibleTip;
});

Clazz.newMeth(C$, 'setXComponent$D',  function (x) {
this.tip.setX$D(this.tail.getX$() + x);
});

Clazz.newMeth(C$, 'setYComponent$D',  function (y) {
this.tip.setY$D(this.tail.getY$() + y);
});

Clazz.newMeth(C$, 'setXYComponents$D$D',  function (x, y) {
this.tip.setXY$D$D(this.tail.getX$() + x, this.tail.getY$() + y);
});

Clazz.newMeth(C$, 'getXComponent$',  function () {
return this.tip.getX$() - this.tail.getX$();
});

Clazz.newMeth(C$, 'getYComponent$',  function () {
return this.tip.getY$() - this.tail.getY$();
});

Clazz.newMeth(C$, 'isLabelVisible$',  function () {
return this.labelVisible;
});

Clazz.newMeth(C$, 'setLabelVisible$Z',  function (visible) {
this.labelVisible=visible;
});

Clazz.newMeth(C$, 'isRolloverVisible$',  function () {
return this.rolloverVisible;
});

Clazz.newMeth(C$, 'setRolloverVisible$Z',  function (visible) {
this.rolloverVisible=visible;
});

Clazz.newMeth(C$, 'setPointSnapEnabled$Z',  function (enabled) {
C$.pointSnapEnabled=enabled;
}, 1);

Clazz.newMeth(C$, 'isPointSnapEnabled$',  function () {
return C$.pointSnapEnabled;
}, 1);

Clazz.newMeth(C$, 'setVectorSnapEnabled$Z',  function (enabled) {
C$.vectorSnapEnabled=enabled;
}, 1);

Clazz.newMeth(C$, 'isVectorSnapEnabled$',  function () {
return C$.vectorSnapEnabled;
}, 1);

Clazz.newMeth(C$, 'snap$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var p=null;
if (C$.pointSnapEnabled) {
var track=this.getTrack$();
if (track.ttype == 5) {
p=(track.getStep$I(this.n)).getPosition$();
if (p.distance$java_awt_geom_Point2D(this.tail) < C$.snapDistance ) {
this.attach$org_opensourcephysics_media_core_TPoint(p);
return;
}}p=trackerPanel.getSnapPoint$();
var axes=trackerPanel.getAxes$();
if (this.brandNew || (axes != null  && axes.isVisible$() ) ) {
if (p.distance$java_awt_geom_Point2D(this.tail) < C$.snapDistance ) {
this.attach$org_opensourcephysics_media_core_TPoint(p);
return;
}}}if (C$.vectorSnapEnabled) {
if (Clazz.instanceOf(this.getTrack$(), "org.opensourcephysics.cabrillo.tracker.VectorSum")) return;
var c=C$.vectors.get$O(trackerPanel.getID$());
if (c != null ) {
for (var i=0, n=c.size$(); i < n; i++) {
var vec=c.get$I(i);
if (!vec.$valid || vec === this  ) continue;
if (!this.getTrack$().isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(vec, trackerPanel)) continue;
p=vec.getVisibleTip$();
if (p.distance$java_awt_geom_Point2D(this.tail) > C$.snapDistance ) continue;
var chain=vec.getChain$();
if (chain == null ) {
chain=Clazz.new_($I$(7,1).c$$org_opensourcephysics_cabrillo_tracker_VectorStep,[vec]);
chain.add$org_opensourcephysics_cabrillo_tracker_VectorStep(this);
break;
} else if (chain.getEnd$() === vec ) {
chain.add$org_opensourcephysics_cabrillo_tracker_VectorStep(this);
break;
}}
}}});

Clazz.newMeth(C$, 'getChain$',  function () {
return this.chain;
});

Clazz.newMeth(C$, 'attach$org_opensourcephysics_media_core_TPoint',  function (pt) {
if (this.attachmentPoint != null ) this.attachmentPoint.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.attachmentPoint=pt;
if (pt != null ) {
pt.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
if (pt.getX$() != this.tail.getX$()  || pt.getY$() != this.tail.getY$()  ) {
this.tail.setXY$D$D(pt.getX$(), pt.getY$());
}}});

Clazz.newMeth(C$, 'getAttachmentPoint$',  function () {
return this.attachmentPoint;
});

Clazz.newMeth(C$, 'setTipEnabled$Z',  function (enabled) {
this.tipEnabled=enabled;
});

Clazz.newMeth(C$, 'isTipEnabled$',  function () {
return this.tipEnabled;
});

Clazz.newMeth(C$, 'setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint',  function (footprint) {
if (footprint.getLength$() >= 2) C$.superclazz.prototype.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint.apply(this, [footprint]);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=panel;
var g=_g;
if (this.brandNew && !(trackerPanel.isWorldPanel$()) ) {
this.snap$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
this.brandNew=false;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [trackerPanel, g]);
var c=C$.vectors.get$O(trackerPanel.getID$());
if (c == null ) {
C$.vectors.put$O$O(trackerPanel.getID$(), c=Clazz.new_($I$(8,1)));
}if (!c.contains$O(this)) c.add$O(this);
if (this.labelVisible) {
var layout=this.textLayouts.get$O(trackerPanel.getID$());
var p=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout.apply(this, [trackerPanel, layout]);
var gpaint=g.getPaint$();
var gfont=g.getFont$();
g.setPaint$java_awt_Paint(this.footprint.getColor$());
g.setFont$java_awt_Font($I$(9).textLayoutFont);
layout.draw$java_awt_Graphics$F$F(g, p.x, p.y);
g.setPaint$java_awt_Paint(gpaint);
g.setFont$java_awt_Font(gfont);
}}});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
var origin=trackerPanel.getSnapPoint$().getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if ($I$(10).hitRect.contains$java_awt_Point(origin)) return null;
var hitShape=this.shaftShapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(10).hitRect) ) {
if (this.rolloverVisible && !this.labelVisible ) {
this.labelVisible=true;
this.repaint$();
}if (!trackerPanel.getMouseEvent$().isAltDown$() && !trackerPanel.getMouseEvent$().isShiftDown$() ) return this.handle;
}if (this.tipEnabled) {
hitShape=this.tipShapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(10).hitRect) ) {
return this.visibleTip;
}}if (this.rolloverVisible && this.labelVisible ) {
this.labelVisible=false;
this.repaint$();
}return null;
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
var selection=null;
if (mark == null ) {
this.tip.setLocation$D$D(this.tip.getX$(), this.tip.getY$());
this.middle.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.visibleTip, this.tail);
selection=trackerPanel.getSelectedPoint$();
var p=null;
this.$valid=true;
for (var n=0; n < this.points.length; n++) {
this.$valid=this.$valid && !Double.isNaN$D(this.points[n].getX$()) && !Double.isNaN$D(this.points[n].getY$())  ;
this.screenPoints[n]=this.points[n].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[n] ) p=this.screenPoints[n];
}
if (trackerPanel.isWorldPanel$()) {
var world=trackerPanel;
if (this.attachmentPoint === world.getSnapPoint$() ) {
var origin=world.getSnapPoint$().getScreenPosition$org_opensourcephysics_media_core_VideoPanel(world);
this.dx=origin.x - this.screenPoints[1].x;
this.dy=origin.y - this.screenPoints[1].y;
for (var n=0; n < this.screenPoints.length; n++) {
this.screenPoints[n].x+=this.dx;
this.screenPoints[n].y+=this.dy;
}
if (p != null ) {
p.x+=this.dx;
p.y+=this.dy;
}}}var panel=trackerPanel.getMainPanel$();
var xMass=panel.getToolBar$Z(true).xMassButton.isSelected$();
var track=this.getTrack$();
var s=track.getName$() + " ";
if (track.ttype == 5) {
var m=track;
if (m.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(this)) {
s=xMass ? $I$(11).getString$S("VectorStep.Label.Momentum") + " " : $I$(11).getString$S("VectorStep.Label.Velocity") + " ";
} else if (m.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(this)) {
s=xMass ? $I$(11).getString$S("VectorStep.Label.NetForce") + " " : $I$(11).getString$S("VectorStep.Label.Acceleration") + " ";
}}var clip=trackerPanel.getPlayer$().getVideoClip$();
if (clip.getStepCount$() != 1) {
s+=clip.frameToStep$I(this.getFrameNumber$());
}var layout=Clazz.new_([s, $I$(9).textLayoutFont],$I$(12,1).c$$S$java_awt_Font);
this.textLayouts.put$O$O(trackerPanel.getID$(), layout);
var lp=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout.apply(this, [trackerPanel, layout]);
var bounds=this.layoutBounds.get$O(trackerPanel.getID$());
if (bounds == null ) {
bounds=Clazz.new_($I$(13,1));
this.layoutBounds.put$O$O(trackerPanel.getID$(), bounds);
}var rect=layout.getBounds$();
bounds.setRect$D$D$D$D(lp.x, lp.y - rect.getHeight$(), rect.getWidth$(), rect.getHeight$());
mark=this.footprint.getMark$java_awt_PointA(this.screenPoints);
if (p != null ) {
$I$(10).transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(14).getIntegerFactor$();
if (scale > 1) {
$I$(10).transform.scale$D$D(scale, scale);
}var color=this.footprint.getColor$();
var stepMark=mark;
var selectedShape=Clazz.new_([Clazz.array($I$(16), -1, [$I$(10).transform.createTransformedShape$java_awt_Shape($I$(10).selectionShape)])],$I$(15,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(17), -1, [$I$(10).selectionStroke]));
mark=((P$.VectorStep$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorStep$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
this.$finals$.stepMark.draw$java_awt_Graphics2D$Z(g, highlighted);
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.$finals$.color);
this.$finals$.selectedShape.draw$java_awt_Graphics2D(g);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.VectorStep$2.$init$,[this, {selectedShape:selectedShape,color:color,stepMark:stepMark}]));
}var theMark=mark;
mark=((P$.VectorStep$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorStep$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].$valid) return;
this.$finals$.theMark.draw$java_awt_Graphics2D$Z(g, highlighted);
});
})()
), Clazz.new_(P$.VectorStep$3.$init$,[this, {theMark:theMark}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
if (this.$valid) {
var shapes=this.footprint.getHitShapes$();
this.tipShapes.put$O$O(trackerPanel.getID$(), shapes[0]);
this.shaftShapes.put$O$O(trackerPanel.getID$(), shapes[2]);
}}return mark;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getSource$() === this.attachmentPoint ) this.tail.setXY$D$D(this.attachmentPoint.getX$(), this.attachmentPoint.getY$());
});

Clazz.newMeth(C$, 'setFirePropertyChangeEvents$Z',  function (fireEvents) {
this.firePropertyChangeEvents=fireEvents;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.points[0]=step.tip=Clazz.new_([step, null, this.tip.getX$(), this.tip.getY$()],$I$(4,1).c$$D$D);
step.points[1]=step.tail=Clazz.new_([step, null, this.tail.getX$(), this.tail.getY$()],$I$(3,1).c$$D$D);
step.points[2]=step.handle=Clazz.new_([step, null, this.handle.getX$(), this.handle.getY$()],$I$(3,1).c$$D$D);
step.points[3]=step.visibleTip=Clazz.new_([step, null, this.visibleTip.getX$(), this.visibleTip.getY$()],$I$(5,1).c$$D$D);
step.points[4]=step.middle=((P$.VectorStep$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorStep$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.media.core.TPoint'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n;
});
})()
), Clazz.new_([this, null, this.middle.getX$(), this.middle.getY$()],$I$(2,1).c$$D$D,P$.VectorStep$4));
step.tipShapes=Clazz.new_($I$(1,1));
step.shaftShapes=Clazz.new_($I$(1,1));
step.textLayouts=Clazz.new_($I$(1,1));
step.layoutBounds=Clazz.new_($I$(1,1));
step.setFirePropertyChangeEvents$Z(this.firePropertyChangeEvents);
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "VectorStep " + this.n + " [" + $I$(10).format.format$D(this.tail.x) + ", " + $I$(10).format.format$D(this.tail.y) + ", " + $I$(10).format.format$D(this.getXComponent$()) + ", " + $I$(10).format.format$D(this.getYComponent$()) + "]" ;
});

Clazz.newMeth(C$, 'getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout',  function (trackerPanel, layout) {
var p=this.middle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (trackerPanel.isWorldPanel$() && this.attachmentPoint === (trackerPanel).getSnapPoint$()  ) {
p.x+=this.dx;
p.y+=this.dy;
}var bounds=layout.getBounds$();
var w=bounds.getWidth$();
var h=bounds.getHeight$();
this.tipPoint.setLocation$java_awt_geom_Point2D(this.tip);
this.tailPoint.setLocation$java_awt_geom_Point2D(this.tail);
if (!trackerPanel.isDrawingInImageSpace$()) {
var at=trackerPanel.getCoords$().getToWorldTransform$I(this.n);
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.tipPoint, this.tipPoint);
this.tipPoint.y=-this.tipPoint.y;
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.tailPoint, this.tailPoint);
this.tailPoint.y=-this.tailPoint.y;
}var cos=this.tailPoint.cos$java_awt_geom_Point2D_Double(this.tipPoint);
var sin=this.tailPoint.sin$java_awt_geom_Point2D_Double(this.tipPoint);
var d=4 + Math.abs(w * sin / 2) + Math.abs(h * cos / 2) ;
if (cos >= 0 ) p.setLocation$I$I(((p.x - d * sin - w / 2)|0), ((p.y - d * cos + h / 2)|0));
 else p.setLocation$I$I(((p.x + d * sin - w / 2)|0), ((p.y + d * cos + h / 2)|0));
return p;
}, p$1);

Clazz.newMeth(C$, 'getLength$',  function () {
return 5;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(18,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.pointSnapEnabled=true;
C$.vectorSnapEnabled=true;
C$.snapDistance=8;
C$.vectors=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VectorStep, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Step','.Handle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setStepEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var dx=x - this.getX$();
var dy=y - this.getY$();
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tail.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tail.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tail.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.getY$() + dy);
this.setLocation$D$D(x, y);
if (this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].attachmentPoint != null  && this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].attachmentPoint.distance$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tail) > 1  ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].chain != null  && Clazz.instanceOf(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].attachmentPoint, "org.opensourcephysics.cabrillo.tracker.VectorStep.VisibleTip") ) {
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].chain.breakAt$org_opensourcephysics_cabrillo_tracker_VectorStep(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep']);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].attach$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], [null]);
}}if (this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].firePropertyChangeEvents) this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n));
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n;
});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.showCoordinates$org_opensourcephysics_media_core_VideoPanel(vidPanel);
C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'snap$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].snap$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], [trackerPanel]);
});

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xScreen, yScreen, trackerPanel) {
this.setPositionOnLine$I$I$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(xScreen, yScreen, trackerPanel, this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].visibleTip, this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tail);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'isShort$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.distanceSq$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tail) < 25 ;
});

Clazz.newMeth(C$, 'isStepEditTrigger$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).ttype == 5) return false;
return C$.superclazz.prototype.isStepEditTrigger$.apply(this, []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VectorStep, "Tip", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLocation$D$D',  function (x, y) {
C$.superclazz.prototype.setLocation$D$D.apply(this, [x, y]);
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].visibleTip.setVisibleTipLocation$();
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track == null  || track.isLocked$() ) return;
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].firePropertyChangeEvents) track.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n));
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
vidPanel.hideMouseBox$();
var coords=vidPanel.getCoords$();
var x=coords.imageToWorldXComponent$I$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n, this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getXComponent$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []), this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getYComponent$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []));
var y=coords.imageToWorldYComponent$I$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n, this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getXComponent$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []), this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getYComponent$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []));
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track.ttype == 5) {
var trackerPanel=vidPanel;
var m=track;
if (m.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'])) {
var dt=vidPanel.getPlayer$().getStepTime$I(1) / 1000;
x=x / dt;
y=y / dt;
} else if (m.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'])) {
var dt=vidPanel.getPlayer$().getStepTime$I(1) / 1000;
x=x / (dt * dt);
y=y / (dt * dt);
}if (trackerPanel.getToolBar$Z(true).xMassButton.isSelected$()) {
x=m.getMass$() * x;
y=m.getMass$() * y;
}}var fields=track.getNumberFieldsForStep$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep']);
fields[0].setValue$D(x);
fields[1].setValue$D(y);
fields[2].setValue$D(Math.sqrt(x * x + y * y));
var theta=Math.atan2(y, x);
fields[3].setValue$D(theta);
C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VectorStep, "VisibleTip", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setStepEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.showCoordinates$org_opensourcephysics_media_core_VideoPanel(vidPanel);
C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'getStep$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'];
});

Clazz.newMeth(C$, 'setVisibleTipLocation$',  function () {
var stretch=1;
if (Clazz.instanceOf(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].footprint, "org.opensourcephysics.cabrillo.tracker.ArrowFootprint")) {
var arrow=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].footprint;
stretch=arrow.getStretch$();
}var x=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getX$() + stretch * (this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getX$() - this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getX$());
var y=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getY$() + stretch * (this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getY$() - this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getY$());
this.setLocation$D$D(x, y);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var stretch=1;
if (Clazz.instanceOf(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].footprint, "org.opensourcephysics.cabrillo.tracker.ArrowFootprint")) {
var arrow=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].footprint;
stretch=arrow.getStretch$();
}var xx=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getX$() + (x - this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getX$()) / stretch;
var yy=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getY$() + (y - this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].getTail$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'], []).getY$()) / stretch;
this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].tip.setXY$D$D(xx, yy);
});

Clazz.newMeth(C$, 'setLocation$D$D',  function (x, y) {
C$.superclazz.prototype.setLocation$D$D.apply(this, [x, y]);
var chain=this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].chain;
if (chain != null ) {
var i=chain.indexOf$O(this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep']);
if (i < chain.size$() - 1) {
var vec=chain.get$I(i + 1);
vec.getTail$().setXY$D$D(x, y);
return;
}}});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.VectorStep'].n;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VectorStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var snap=(step.attachmentPoint != null );
if (snap) control.setValue$S$Z("snap", snap);
control.setValue$S$D("xtail", step.getTail$().x);
control.setValue$S$D("ytail", step.getTail$().y);
var track=step.getTrack$();
if (track.ttype != 5 && !track.isDependent$() ) {
control.setValue$S$D("xtip", step.getTip$().x);
control.setValue$S$D("ytip", step.getTip$().y);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var x=control.getDouble$S("xtail");
var y=control.getDouble$S("ytail");
step.getTail$().setXY$D$D(x, y);
var track=step.getTrack$();
if (track.ttype != 5 && !track.isDependent$() ) {
x=control.getDouble$S("xtip");
y=control.getDouble$S("ytip");
step.getTip$().setXY$D$D(x, y);
}if (control.getBoolean$S("snap")) step.snap$org_opensourcephysics_cabrillo_tracker_TrackerPanel(step.getTrack$().tp);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
