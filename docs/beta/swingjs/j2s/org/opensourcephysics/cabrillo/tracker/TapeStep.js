(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.media.core.TPoint','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.MultiShape',['org.opensourcephysics.cabrillo.tracker.TapeStep','.Tip'],['org.opensourcephysics.cabrillo.tracker.TapeStep','.Rotator'],['org.opensourcephysics.cabrillo.tracker.TapeStep','.Handle'],'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.FontSizer','java.awt.Shape','org.opensourcephysics.cabrillo.tracker.TapeMeasure',['org.opensourcephysics.display.OSPRuntime','.TextLayout'],'java.awt.Rectangle','org.opensourcephysics.controls.XMLControlElement','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Undo',['org.opensourcephysics.cabrillo.tracker.TapeStep','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TapeStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Handle',0],['Tip',0],['Rotator',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.endsEnabled=true;
this.panelEnd1Shapes=Clazz.new_($I$(2,1));
this.panelEnd2Shapes=Clazz.new_($I$(2,1));
this.panelShaftShapes=Clazz.new_($I$(2,1));
this.panelRotatorShapes=Clazz.new_($I$(2,1));
this.panelTextLayouts=Clazz.new_($I$(2,1));
this.panelLayoutBounds=Clazz.new_($I$(2,1));
this.rotatorDrawShapes=Clazz.array($I$(3), [2]);
},1);

C$.$fields$=[['Z',['endsEnabled','drawLayout','drawLayoutBounds','adjustingTips'],'D',['worldLength','xAxisToTapeAngle','tapeAngle'],'O',['tape','org.opensourcephysics.cabrillo.tracker.TapeMeasure','end1','org.opensourcephysics.media.core.TPoint','+end2','+middle','handle','org.opensourcephysics.cabrillo.tracker.TapeStep.Handle','rotator1','org.opensourcephysics.cabrillo.tracker.TapeStep.Rotator','+rotator2','panelEnd1Shapes','java.util.Map','+panelEnd2Shapes','+panelShaftShapes','+panelRotatorShapes','+panelTextLayouts','+panelLayoutBounds','rotatorDrawShapes','org.opensourcephysics.cabrillo.tracker.MultiShape[]','selectedShape','java.awt.Shape']]
,['O',['endPoint1','org.opensourcephysics.media.core.TPoint','+endPoint2']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TapeMeasure$I$D$D$D$D',  function (track, n, x1, y1, x2, y2) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.tape=track;
this.end1=Clazz.new_($I$(4,1).c$$D$D,[this, null, x1, y1]);
this.end1.setTrackEditTrigger$Z(true);
this.end2=Clazz.new_($I$(4,1).c$$D$D,[this, null, x2, y2]);
this.end2.setTrackEditTrigger$Z(true);
this.middle=Clazz.new_($I$(1,1).c$$D$D,[x1, y1]);
this.rotator1=Clazz.new_($I$(5,1),[this, null]);
this.rotator2=Clazz.new_($I$(5,1),[this, null]);
this.handle=Clazz.new_([this, null, (x1 + x2) / 2, (y1 + y2) / 2],$I$(6,1).c$$D$D);
this.handle.setTrackEditTrigger$Z(true);
this.points=Clazz.array($I$(1), -1, [this.end1, this.end2, this.handle, this.middle, this.rotator1, this.rotator2]);
this.screenPoints=Clazz.array($I$(7), [C$.getLength$()]);
}, 1);

Clazz.newMeth(C$, 'getEnd1$',  function () {
return this.end1;
});

Clazz.newMeth(C$, 'getEnd2$',  function () {
return this.end2;
});

Clazz.newMeth(C$, 'getHandle$',  function () {
return this.handle;
});

Clazz.newMeth(C$, 'setEndsEnabled$Z',  function (enabled) {
this.endsEnabled=enabled;
});

Clazz.newMeth(C$, 'isEndsEnabled$',  function () {
return this.endsEnabled;
});

Clazz.newMeth(C$, 'setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint',  function (footprint) {
if (footprint.getLength$() >= 2) C$.superclazz.prototype.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint.apply(this, [footprint]);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
var drawOutline=false;
this.drawLayout=false;
var hitShape;
var hit=null;
if (this.endsEnabled) {
hitShape=this.panelEnd1Shapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) ) hit=this.end1;
hitShape=this.panelEnd2Shapes.get$O(trackerPanel.getID$());
if (hit == null  && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) ) hit=this.end2;
}hitShape=this.panelShaftShapes.get$O(trackerPanel.getID$());
if (hit == null  && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) ) {
hit=this.handle;
this.drawLayout=true;
}var rotatorHitShapes=this.panelRotatorShapes.get$O(trackerPanel.getID$());
if (hit == null  && rotatorHitShapes != null  ) {
if (rotatorHitShapes[0].intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) && !this.end1.isAttached$() ) {
hit=this.rotator1;
} else if (rotatorHitShapes[1].intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) && !this.end2.isAttached$() ) {
hit=this.rotator2;
}}if (hit == null  && this.selectedShape != null   && this.selectedShape.intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) ) {
if (trackerPanel.getSelectedPoint$() === this.rotator1  && !this.end1.isAttached$() ) hit=this.rotator1;
 else if (trackerPanel.getSelectedPoint$() === this.rotator2  && !this.end2.isAttached$() ) hit=this.rotator2;
}if (hit == null ) {
if (this.rotatorDrawShapes[0] != null  && trackerPanel.getSelectedPoint$() !== this.rotator1  ) {
this.rotatorDrawShapes[0]=null;
}if (this.rotatorDrawShapes[1] != null  && trackerPanel.getSelectedPoint$() !== this.rotator2  ) {
this.rotatorDrawShapes[1]=null;
}var layoutRect=this.panelLayoutBounds.get$O(trackerPanel.getID$());
if (layoutRect != null  && layoutRect.intersects$java_awt_Rectangle($I$(8).hitRect) ) {
drawOutline=true;
hit=this.tape;
this.drawLayout=true;
}if (hit == null  && this.tape.ruler != null   && this.tape.ruler.isVisible$() ) {
hit=this.tape.ruler.findInteractive$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_Rectangle(trackerPanel, $I$(8).hitRect);
}} else if ((hit === this.rotator1  || hit === this.rotator2  ) && trackerPanel.getSelectedPoint$() !== hit   && this.footprint != null  ) {
(hit).setScreenCoords$I$I(xpix, ypix);
var index=(hit === this.rotator1  ? 0 : 1);
this.rotatorDrawShapes[index]=(this.footprint).getRotatorShape$java_awt_Point$java_awt_Point$java_awt_Point(this.middle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel), p$1.getRotatorLocation$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [index, trackerPanel]), null);
}if (drawOutline != this.drawLayoutBounds ) {
this.drawLayoutBounds=drawOutline;
}if (this.end1.isAttached$() && (hit === this.end1  || hit === this.rotator1  )  || this.end2.isAttached$() && (hit === this.end2  || hit === this.rotator2  )  ) return null;
return hit;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
var trackerPanel=panel;
var g=_g;
this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).draw$java_awt_Graphics2D$Z(g, false);
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.footprint.getColor$());
if (!this.tape.editing) {
if (this.drawLayout || trackerPanel.getSelectedTrack$() === this.tape  ) {
var layout=this.panelTextLayouts.get$O(trackerPanel.getID$());
var bounds=this.panelLayoutBounds.get$O(trackerPanel.getID$());
var gfont=g.getFont$();
g.setFont$java_awt_Font($I$(9).textLayoutFont);
if (layout != null  && bounds != null  ) {
layout.draw$java_awt_Graphics$F$F(g, bounds.x, bounds.y + bounds.height);
}g.setFont$java_awt_Font(gfont);
if (this.drawLayoutBounds && this.tape.isFieldsEnabled$() && bounds != null   ) {
g.drawRect$I$I$I$I(bounds.x - 2, bounds.y - 3, bounds.width + 6, bounds.height + 5);
}}}g.setPaint$java_awt_Paint(gpaint);
});

Clazz.newMeth(C$, 'getDefaultPoint$',  function () {
if (this.tape.isIncomplete) return this.points[1];
var p=this.tape.tp.getSelectedPoint$();
if (p === this.points[0] ) return this.points[0];
if (p === this.points[1] ) return this.points[1];
return this.points[this.defaultIndex];
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
if (mark == null ) {
var isWorldView=trackerPanel.isWorldPanel$();
if (this.tape.isStickMode$() && !this.tape.isIncomplete ) {
this.adjustTipsToLength$();
}var selection=trackerPanel.getSelectedPoint$();
var rulerMark=this.tape.ruler != null  && this.tape.ruler.isVisible$()  ? this.tape.ruler.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, this.n) : null;
var p=null;
for (var i=0; i < this.points.length; i++) {
this.screenPoints[i]=this.points[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[i] ) p=this.screenPoints[i];
}
if (p == null  && this.tape.ruler != null   && selection === this.tape.ruler.getHandle$()  ) {
p=selection.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
}if (selection === this.rotator1  || selection === this.rotator2  ) {
var index=selection === this.rotator1  ? 0 : 1;
this.rotatorDrawShapes[index]=(this.footprint).getRotatorShape$java_awt_Point$java_awt_Point$java_awt_Point(this.screenPoints[3], this.screenPoints[index], this.screenPoints[4 + index]);
}var tapeMark=this.footprint.getMark$java_awt_PointA(this.screenPoints);
if (!isWorldView) {
if (p != null ) {
$I$(8).transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(10).getIntegerFactor$();
if (scale > 1) {
$I$(8).transform.scale$D$D(scale, scale);
}this.selectedShape=$I$(8).transform.createTransformedShape$java_awt_Shape($I$(8).selectionShape);
} else this.selectedShape=null;
}mark=((P$.TapeStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
var gstroke=g.getStroke$();
this.$finals$.tapeMark.draw$java_awt_Graphics2D$Z(g, false);
if (this.$finals$.rulerMark != null ) {
this.$finals$.rulerMark.draw$java_awt_Graphics2D$Z(g, false);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].selectedShape != null ) {
g.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].footprint.getColor$());
g.setStroke$java_awt_Stroke($I$(8).selectionStroke);
g.draw$java_awt_Shape(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].selectedShape);
}for (var i=0; i < this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotatorDrawShapes.length; i++) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotatorDrawShapes[i] != null  && !this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isLocked$() ) {
g.setColor$java_awt_Color(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.getColor$());
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotatorDrawShapes[i].draw$java_awt_Graphics2D(g);
}}
g.setStroke$java_awt_Stroke(gstroke);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.TapeStep$1.$init$,[this, {tapeMark:tapeMark,rulerMark:rulerMark}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
var shapes=this.footprint.getHitShapes$();
this.panelEnd1Shapes.put$O$O(trackerPanel.getID$(), shapes[0]);
this.panelEnd2Shapes.put$O$O(trackerPanel.getID$(), shapes[1]);
this.panelShaftShapes.put$O$O(trackerPanel.getID$(), shapes[2]);
if (shapes.length > 4 && shapes[3] != null   && shapes[4] != null  ) {
this.panelRotatorShapes.put$O$O(trackerPanel.getID$(), Clazz.array($I$(11), -1, [shapes[3], shapes[4]]));
}var tapeLength=this.getTapeLength$Z(!this.tape.isStickMode$() || this.tape.isIncomplete );
if (this.tape.calibrationLength != null ) {
tapeLength=(this.tape.calibrationLength).valueOf();
}var s=this.tape.getFormattedLength$D(tapeLength);
s+=trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this.tape, $I$(12).dataVariables[1]);
var layout=Clazz.new_([s, $I$(9).textLayoutFont],$I$(13,1).c$$S$java_awt_Font);
this.panelTextLayouts.put$O$O(trackerPanel.getID$(), layout);
var rect=layout.getBounds$();
p=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_geom_Rectangle2D.apply(this, [trackerPanel, rect]);
var bounds=this.panelLayoutBounds.get$O(trackerPanel.getID$());
if (bounds == null ) {
bounds=Clazz.new_($I$(14,1));
this.panelLayoutBounds.put$O$O(trackerPanel.getID$(), bounds);
}bounds.setRect$D$D$D$D(p.x, p.y - rect.getHeight$(), rect.getWidth$(), rect.getHeight$());
}return mark;
});

Clazz.newMeth(C$, 'calcTapeLength$Z',  function (fromEnds) {
var scaleX=1;
var scaleY=1;
if (this.tape.tp != null ) {
scaleX=this.tape.tp.getCoords$().getScaleX$I(this.n);
scaleY=this.tape.tp.getCoords$().getScaleY$I(this.n);
}var dx=(this.end2.getX$() - this.end1.getX$()) / scaleX;
var dy=(this.end1.getY$() - this.end2.getY$()) / scaleY;
return fromEnds ? Math.sqrt(dx * dx + dy * dy) : this.worldLength;
});

Clazz.newMeth(C$, 'getTapeLength$Z',  function (fromEnds) {
var scaleX=1;
var scaleY=1;
var axisTiltAngle=0;
if (this.tape.tp != null ) {
scaleX=this.tape.tp.getCoords$().getScaleX$I(this.n);
scaleY=this.tape.tp.getCoords$().getScaleY$I(this.n);
axisTiltAngle=this.tape.tp.getCoords$().getAngle$I(this.n);
}var dx=(this.end2.getX$() - this.end1.getX$()) / scaleX;
var dy=(this.end1.getY$() - this.end2.getY$()) / scaleY;
this.tapeAngle=Math.atan2(dy, dx);
this.xAxisToTapeAngle=this.tapeAngle - axisTiltAngle;
if (Double.isNaN$D(this.xAxisToTapeAngle)) {
this.xAxisToTapeAngle=0;
}if (this.tape.angleField != null  && !this.tape.angleField.hasFocus$() ) {
this.tape.angleField.setValue$D(this.xAxisToTapeAngle);
}var length=fromEnds ? Math.sqrt(dx * dx + dy * dy) : this.worldLength;
if (length == 0  && (this.end1.getX$() != this.end2.getX$()  || this.end1.getY$() != this.end2.getY$()  ) ) {
length=Math.sqrt(dx * dx + dy * dy);
if (this.worldLength == 0 ) {
this.worldLength=length;
}}if (this.tape.magField != null  && !this.tape.magField.hasFocus$() ) {
this.tape.magField.setValue$D(length);
}this.tape.pixelLengthField.setValue$D(1 / scaleX);
return length;
});

Clazz.newMeth(C$, 'getTapeAngle$',  function () {
return this.xAxisToTapeAngle;
});

Clazz.newMeth(C$, 'setTapeLength$D',  function (length) {
if (this.tape.isLocked$() || this.tape.tp == null  ) return;
length=Math.abs(length);
length=Math.max(length, 1.0E-30);
var factor=this.calcTapeLength$Z(!this.tape.isStickMode$()) / length;
if (factor == 1  || factor == 0   || Double.isInfinite$D(factor)  || Double.isNaN$D(factor) ) return;
var trackControl=Clazz.new_($I$(15,1).c$$O,[this.tape]);
if (this.tape.isReadOnly$()) {
this.worldLength=length;
this.adjustTipsToLength$();
if (this.tape.isFixedPosition$()) {
for (var i=0; i < this.tape.steps.array.length; i++) {
var ts=this.tape.steps.array[i];
if (ts != null ) {
ts.end1.setLocation$java_awt_geom_Point2D(this.end1);
ts.end2.setLocation$java_awt_geom_Point2D(this.end2);
ts.worldLength=length;
ts.erase$();
}}
}this.erase$();
this.tape.magField.setValue$D(this.worldLength);
this.tape.magField.setBackground$java_awt_Color($I$(16).white);
this.tape.inputField.setValue$D(this.worldLength);
this.tape.repaint$();
$I$(17).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.tape, trackControl);
return;
}if (this.tape.isStickMode$()) {
if (this.tape.isFixedLength$()) {
var step=this.tape.steps.getStep$I(0);
step.worldLength=length;
} else {
this.tape.lengthKeyFrames.add$O(Integer.valueOf$I(this.n));
this.worldLength=length;
}}var coords=this.tape.tp.getCoords$();
var scaleX=factor * coords.getScaleX$I(this.n);
var scaleY=factor * coords.getScaleY$I(this.n);
var coordsControl=Clazz.new_([this.tape.tp.getCoords$()],$I$(15,1).c$$O);
this.tape.isStepChangingScale=true;
coords.setScaleXY$I$D$D(this.n, scaleX, scaleY);
this.tape.isStepChangingScale=false;
if (this.tape.isStickMode$()) {
$I$(17).postTrackAndCoordsEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_XMLControl(this.tape, trackControl, coordsControl);
} else {
$I$(17).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this.tape.tp, coordsControl);
}this.erase$();
});

Clazz.newMeth(C$, 'setTapeAngle$D',  function (theta) {
if (this.tape.isLocked$() || this.tape.tp == null  ) return;
if (this.tape.isReadOnly$()) {
var trackControl=Clazz.new_($I$(15,1).c$$O,[this.tape]);
this.xAxisToTapeAngle=theta;
this.adjustTipsToAngle$org_opensourcephysics_media_core_TPoint(null);
if (this.tape.isFixedPosition$()) {
for (var i=0; i < this.tape.steps.array.length; i++) {
var ts=this.tape.steps.array[i];
if (ts != null ) {
ts.xAxisToTapeAngle=theta;
ts.end1.setLocation$java_awt_geom_Point2D(this.end1);
ts.end2.setLocation$java_awt_geom_Point2D(this.end2);
ts.erase$();
}}
}this.erase$();
this.tape.angleField.setValue$D(theta);
this.tape.angleField.setBackground$java_awt_Color($I$(16).white);
this.tape.repaint$();
$I$(17).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.tape, trackControl);
return;
}var dTheta=theta - this.xAxisToTapeAngle;
var coords=this.tape.tp.getCoords$();
var state=Clazz.new_($I$(15,1).c$$O,[coords]);
var angle=coords.getAngle$I(this.n);
coords.setAngle$I$D(this.n, angle - dTheta);
$I$(17).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this.tape.tp, state);
this.xAxisToTapeAngle=theta;
});

Clazz.newMeth(C$, 'setTapeAngle$D$org_opensourcephysics_media_core_TPoint',  function (theta, p) {
if (this.tape.isLocked$() || this.tape.tp == null  ) return;
this.xAxisToTapeAngle=theta;
this.adjustTipsToAngle$org_opensourcephysics_media_core_TPoint(p);
this.tape.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(this);
return;
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.points[0]=step.end1=Clazz.new_([step, null, this.end1.getX$(), this.end1.getY$()],$I$(4,1).c$$D$D);
step.points[1]=step.end2=Clazz.new_([step, null, this.end2.getX$(), this.end2.getY$()],$I$(4,1).c$$D$D);
step.points[2]=step.handle=Clazz.new_([step, null, this.handle.getX$(), this.handle.getY$()],$I$(6,1).c$$D$D);
step.points[3]=step.middle=Clazz.new_([this.middle.getX$(), this.middle.getY$()],$I$(1,1).c$$D$D);
step.points[4]=step.rotator1=Clazz.new_($I$(5,1),[step, null]);
step.points[5]=step.rotator2=Clazz.new_($I$(5,1),[step, null]);
step.end1.setTrackEditTrigger$Z(true);
step.end2.setTrackEditTrigger$Z(true);
step.handle.setTrackEditTrigger$Z(true);
step.panelEnd1Shapes=Clazz.new_($I$(2,1));
step.panelEnd2Shapes=Clazz.new_($I$(2,1));
step.panelShaftShapes=Clazz.new_($I$(2,1));
step.panelRotatorShapes=Clazz.new_($I$(2,1));
step.panelTextLayouts=Clazz.new_($I$(2,1));
step.panelLayoutBounds=Clazz.new_($I$(2,1));
step.worldLength=this.worldLength;
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "TapeStep " + this.n + " [" + $I$(8).format.format$D(this.end1.x) + ", " + $I$(8).format.format$D(this.end1.y) + ", " + $I$(8).format.format$D(this.end2.x) + ", " + $I$(8).format.format$D(this.end2.y) + "]" ;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 6;
}, 1);

Clazz.newMeth(C$, 'adjustTipsToLength$',  function () {
if (this.adjustingTips) return;
this.adjustingTips=true;
var sin=this.end1.sin$java_awt_geom_Point2D_Double(this.end2);
var cos=this.end1.cos$java_awt_geom_Point2D_Double(this.end2);
var d=this.end1.distance$java_awt_geom_Point2D(this.end2);
var factor=this.worldLength / this.calcTapeLength$Z(true);
if (d == 0 ) {
sin=0;
cos=1;
d=1;
var scaleX=this.tape.tp.getCoords$().getScaleX$I(this.n);
factor=this.worldLength * scaleX;
}var p=this.tape.tp.getSelectedPoint$();
if (this.end1.isAttached$()) p=this.end1;
 else if (this.end2.isAttached$()) p=this.end2;
if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.TapeStep.Tip")) {
if (p === this.end1 ) {
var x=this.end1.getX$() + cos * d * factor ;
var y=this.end1.getY$() - sin * d * factor ;
this.end2.setLocation$D$D(x, y);
} else {
var x=this.end2.getX$() - cos * d * factor ;
var y=this.end2.getY$() + sin * d * factor ;
this.end1.setLocation$D$D(x, y);
}} else if (p === this.handle ) {
var screenPt=this.handle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this.tape.tp);
this.handle.setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(screenPt.x, screenPt.y, this.tape.tp);
d=this.handle.distance$java_awt_geom_Point2D(this.end1);
if (d == 0 ) d=0.5;
var x=this.handle.getX$() - cos * d * factor ;
var y=this.handle.getY$() + sin * d * factor ;
this.end1.setLocation$D$D(x, y);
d=this.handle.distance$java_awt_geom_Point2D(this.end2);
if (d == 0 ) d=0.5;
x=this.handle.getX$() + cos * d * factor ;
y=this.handle.getY$() - sin * d * factor ;
this.end2.setLocation$D$D(x, y);
} else {
this.middle.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.end1, this.end2);
var x1=this.middle.getX$() - cos * d * factor  / 2;
var y1=this.middle.getY$() + sin * d * factor  / 2;
var x2=this.middle.getX$() + cos * d * factor  / 2;
var y2=this.middle.getY$() - sin * d * factor  / 2;
this.end1.setLocation$D$D(x1, y1);
this.end2.setLocation$D$D(x2, y2);
}if (this.tape.isFixedPosition$()) {
var ts=this.tape.getSteps$()[0];
ts.end1.setLocation$java_awt_geom_Point2D(this.end1);
ts.end2.setLocation$java_awt_geom_Point2D(this.end2);
}this.adjustingTips=false;
});

Clazz.newMeth(C$, 'adjustTipsToAngle$org_opensourcephysics_media_core_TPoint',  function (p) {
if (this.adjustingTips) return;
if (this.end1.isAttached$() && this.end2.isAttached$() ) return;
this.adjustingTips=true;
if (this.end1.isAttached$()) p=this.end1;
if (this.end2.isAttached$()) p=this.end2;
if (p == null ) p=this.tape.tp.getSelectedPoint$();
var axisTiltAngle=this.tape.tp.getCoords$().getAngle$I(this.n);
this.tapeAngle=this.xAxisToTapeAngle + axisTiltAngle;
var sin=Math.sin(this.tapeAngle);
var cos=Math.cos(this.tapeAngle);
var d=this.end1.distance$java_awt_geom_Point2D(this.end2);
if (p === this.end1 ) {
var x=this.end1.getX$() + cos * d;
var y=this.end1.getY$() - sin * d;
this.end2.setLocation$D$D(x, y);
this.repaint$();
} else if (p === this.end2 ) {
var x=this.end2.getX$() - cos * d;
var y=this.end2.getY$() + sin * d;
this.end1.setLocation$D$D(x, y);
} else if (p === this.handle  || p === this.rotator1   || p === this.rotator2  ) {
var d1=p.distance$java_awt_geom_Point2D(this.end1);
var d2=p.distance$java_awt_geom_Point2D(this.end2);
if (d1 <= d  && d2 <= d  ) {
this.end1.setLocation$D$D(p.getX$() - cos * d1, p.getY$() + sin * d1);
this.end2.setLocation$D$D(p.getX$() + cos * d2, p.getY$() - sin * d2);
} else if (d1 > d ) {
this.end1.setLocation$D$D(p.getX$() - cos * d1, p.getY$() + sin * d1);
this.end2.setLocation$D$D(p.getX$() - cos * d2, p.getY$() + sin * d2);
} else {
this.end1.setLocation$D$D(p.getX$() + cos * d1, p.getY$() - sin * d1);
this.end2.setLocation$D$D(p.getX$() + cos * d2, p.getY$() - sin * d2);
}} else {
this.middle.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.end1, this.end2);
var x1=this.middle.getX$() - cos * d / 2;
var y1=this.middle.getY$() + sin * d / 2;
var x2=this.middle.getX$() + cos * d / 2;
var y2=this.middle.getY$() - sin * d / 2;
this.end1.setLocation$D$D(x1, y1);
this.end2.setLocation$D$D(x2, y2);
}if (this.tape.isFixedPosition$()) {
for (var i=0; i < this.tape.steps.array.length; i++) {
var ts=this.tape.steps.array[i];
if (ts != null ) {
ts.end1.setLocation$java_awt_geom_Point2D(this.end1);
ts.end2.setLocation$java_awt_geom_Point2D(this.end2);
}}
}this.adjustingTips=false;
});

Clazz.newMeth(C$, 'getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_geom_Rectangle2D',  function (trackerPanel, bounds) {
var w=bounds.getWidth$();
var h=bounds.getHeight$();
C$.endPoint1.setLocation$java_awt_geom_Point2D(this.end1);
C$.endPoint2.setLocation$java_awt_geom_Point2D(this.end2);
if (!trackerPanel.isDrawingInImageSpace$()) {
var at=trackerPanel.getCoords$().getToWorldTransform$I(this.n);
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(C$.endPoint1, C$.endPoint1);
C$.endPoint1.y=-C$.endPoint1.y;
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(C$.endPoint2, C$.endPoint2);
C$.endPoint2.y=-C$.endPoint2.y;
}var cos=C$.endPoint1.cos$java_awt_geom_Point2D_Double(C$.endPoint2);
var sin=C$.endPoint1.sin$java_awt_geom_Point2D_Double(C$.endPoint2);
var halfwsin=w * sin / 2;
var halfhcos=h * cos / 2;
var d=Math.sqrt((halfwsin * halfwsin) + (halfhcos * halfhcos)) + 8;
this.middle.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.end1, this.end2);
var p=this.middle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (this.tape.ruler != null  && this.tape.ruler.isVisible$()  && this.tape.ruler.getRulerSize$() > 0  ) p.setLocation$I$I(((p.x + d * sin - w / 2)|0), ((p.y + d * cos + h / 2)|0));
 else p.setLocation$I$I(((p.x - d * sin - w / 2)|0), ((p.y - d * cos + h / 2)|0));
return p;
}, p$1);

Clazz.newMeth(C$, 'getRotatorLocation$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (i, trackerPanel) {
var rotatorHitShapes=this.panelRotatorShapes.get$O(trackerPanel.getID$());
var bounds=rotatorHitShapes[i].getBounds$();
return Clazz.new_([(bounds.getCenterX$()|0), (bounds.getCenterY$()|0)],$I$(7,1).c$$I$I);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(18,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.endPoint1=Clazz.new_($I$(1,1));
C$.endPoint2=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeStep, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Step','.Handle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.isAttached$() || this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2.isAttached$() ) return;
var dx=x - this.getX$();
var dy=y - this.getY$();
this.setLocation$D$D(x, y);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.steps.getStep$I(0);
step.end1.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.getY$() + dy);
step.end2.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2.getY$() + dy);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep']);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n;
});

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xScreen, yScreen, trackerPanel) {
this.setPositionOnLine$I$I$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(xScreen, yScreen, trackerPanel, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeStep, "Tip", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
if (x == this.prevX  && y == this.prevY  ) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isStickMode$() && this.isAdjusting$() ) {
this.prevX=x;
this.prevY=y;
}if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.steps.getStep$I(0);
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1 ) {
step.end1.setLocation$D$D(x, y);
step.end2.setLocation$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2);
} else {
step.end2.setLocation$D$D(x, y);
step.end1.setLocation$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1);
}step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep']);
} else {
this.setLocation$D$D(x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n));
}if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isStickMode$() && this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].worldLength > 0  ) {
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.tp.getCoords$();
coords.setAdjusting$Z(this.isAdjusting$());
var newLength=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].getTapeLength$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'], [true]);
var factor=newLength / this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].getTapeLength$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'], [false]);
var scaleX=factor * coords.getScaleX$I(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n);
var scaleY=factor * coords.getScaleY$I(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isStepChangingScale=true;
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.tp.getCoords$().setScaleXY$I$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n, scaleX, scaleY);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isStepChangingScale=false;
}this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.invalidateData$O(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n;
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
var wasAdjusting=this.isAdjusting$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isStickMode$()) {
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (wasAdjusting && !adjusting && !java.lang.Double.isNaN$D(this.prevX)  ) {
this.setXY$D$D(this.prevX, this.prevY);
}var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.tp.getCoords$();
coords.setAdjusting$Z(this.isAdjusting$());
} else C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (wasAdjusting && !adjusting ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isFixedPosition$()) this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.fireStepsChanged$();
 else this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n));
}});

Clazz.newMeth(C$, 'isCoordsEditTrigger$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isStickMode$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeStep, "Rotator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pt=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['pt','org.opensourcephysics.media.core.TPoint']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setTrackEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
this.setLocation$D$D(x, y);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.steps.getStep$I(0);
var rotator=this === this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotator1  ? step.rotator1 : step.rotator2;
rotator.setLocation$D$D(x, y);
var theta=this === this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotator1  ? rotator.angle$java_awt_geom_Point2D_Double(step.end2) : step.end1.angle$java_awt_geom_Point2D_Double(rotator);
theta+=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.tp.getCoords$().getAngle$I(0);
p$1.setTapeAngle$D$org_opensourcephysics_media_core_TPoint.apply(step, [-theta, this === this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotator1  ? step.end2 : step.end1]);
step.erase$();
} else {
var theta=this === this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotator1  ? this.angle$java_awt_geom_Point2D_Double(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2) : this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1.angle$java_awt_geom_Point2D_Double(this);
theta+=this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.tp.getCoords$().getAngle$I(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n);
p$1.setTapeAngle$D$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'], [-theta, this === this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].rotator1  ? this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end2 : this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].end1]);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.Step'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.invalidateData$O(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n;
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
var wasAdjusting=this.isAdjusting$();
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (wasAdjusting && !adjusting ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.isFixedPosition$()) this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.fireStepsChanged$();
 else this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].n));
}});

Clazz.newMeth(C$, 'setScreenCoords$I$I',  function (x, y) {
this.pt.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(x, y, this.b$['org.opensourcephysics.cabrillo.tracker.TapeStep'].tape.tp);
this.setLocation$java_awt_geom_Point2D(this.pt);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var data=Clazz.array(Double.TYPE, -1, [step.getEnd1$().x, step.getEnd1$().y, step.getEnd2$().x, step.getEnd2$().y]);
control.setValue$S$O("end_positions", data);
control.setValue$S$D("worldlength", step.worldLength);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var data=control.getObject$S("end_positions");
step.getEnd1$().setLocation$D$D(data[0], data[1]);
step.getEnd2$().setLocation$D$D(data[2], data[3]);
step.worldLength=control.getDouble$S("worldlength");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
