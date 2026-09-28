(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.ProtractorFootprint','org.opensourcephysics.media.core.TPoint','org.opensourcephysics.cabrillo.tracker.ProtractorStep','java.awt.geom.AffineTransform','org.opensourcephysics.media.core.NumberField','java.util.HashMap',['org.opensourcephysics.cabrillo.tracker.ProtractorStep','.Tip'],['org.opensourcephysics.cabrillo.tracker.ProtractorStep','.Handle'],['org.opensourcephysics.cabrillo.tracker.ProtractorStep','.Rotator'],'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.FontSizer',['org.opensourcephysics.display.OSPRuntime','.TextLayout'],'java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.Protractor','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProtractorStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Handle',0],['Tip',0],['Rotator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.endsEnabled=true;
this.panelVertexShapes=Clazz.new_($I$(6,1));
this.panelEnd1Shapes=Clazz.new_($I$(6,1));
this.panelEnd2Shapes=Clazz.new_($I$(6,1));
this.panelLine1Shapes=Clazz.new_($I$(6,1));
this.panelLine2Shapes=Clazz.new_($I$(6,1));
this.panelRotatorShapes=Clazz.new_($I$(6,1));
this.panelTextLayouts=Clazz.new_($I$(6,1));
this.panelLayoutBounds=Clazz.new_($I$(6,1));
this.panelTextLayouts1=Clazz.new_($I$(6,1));
this.panelLayout1Bounds=Clazz.new_($I$(6,1));
this.panelTextLayouts2=Clazz.new_($I$(6,1));
this.panelLayout2Bounds=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['Z',['endsEnabled','drawArcCircle','drawLayoutBounds','drawLayout1','drawLayout2','drawLayoutAngle'],'D',['line1Angle','line2Angle'],'O',['protractor','org.opensourcephysics.cabrillo.tracker.Protractor','vertex','org.opensourcephysics.media.core.TPoint','+end1','+end2','handle','org.opensourcephysics.cabrillo.tracker.ProtractorStep.Handle','rotator','org.opensourcephysics.cabrillo.tracker.ProtractorStep.Rotator','vertexCircle','org.opensourcephysics.cabrillo.tracker.MultiShape','panelVertexShapes','java.util.Map','+panelEnd1Shapes','+panelEnd2Shapes','+panelLine1Shapes','+panelLine2Shapes','+panelRotatorShapes','+panelTextLayouts','+panelLayoutBounds','+panelTextLayouts1','+panelLayout1Bounds','+panelTextLayouts2','+panelLayout2Bounds','selectedShape','java.awt.Shape']]
,['O',['$transform','java.awt.geom.AffineTransform','endPoint1','org.opensourcephysics.media.core.TPoint','+endPoint2','+middle','formatField','org.opensourcephysics.media.core.NumberField']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Protractor$I$D$D$D$D',  function (track, n, x1, y1, x2, y2) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.protractor=track;
this.vertex=Clazz.new_($I$(7,1).c$$D$D,[this, null, x1, y1]);
this.end1=Clazz.new_($I$(7,1).c$$D$D,[this, null, x2, y2]);
var x=(x1 + x2) / 2;
var y=y1 - (x2 - x1) * Math.sin(1.0471975511965976);
this.end2=Clazz.new_($I$(7,1).c$$D$D,[this, null, x, y]);
this.handle=Clazz.new_([this, null, (x1 + x2) / 2, (y1 + y2) / 2],$I$(8,1).c$$D$D);
this.rotator=Clazz.new_($I$(9,1),[this, null]);
this.points=Clazz.array($I$(2), -1, [this.vertex, this.end1, this.end2, this.handle, this.rotator]);
this.screenPoints=Clazz.array($I$(10), [C$.getLength$()]);
}, 1);

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
var isWorldView=Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel");
this.setHitRectCenter$I$I(xpix, ypix);
var hitShape;
var hit=null;
var footprint=null;
this.drawLayoutAngle=this.drawLayoutBounds=this.drawLayout1=this.drawLayout2=false;
if (this.protractor.getFootprint$() != null  && Clazz.instanceOf(this.protractor.getFootprint$(), "org.opensourcephysics.cabrillo.tracker.ProtractorFootprint") ) {
footprint=this.protractor.getFootprint$();
}if (this.endsEnabled) {
hitShape=this.panelVertexShapes.get$O(trackerPanel.getID$());
if (!this.vertex.isAttached$() && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.vertex;
this.drawLayoutAngle=true;
if (this.vertexCircle == null  && footprint != null  ) {
this.vertexCircle=footprint.getCircleShape$java_awt_Point(this.vertex.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
}}if (hit == null  && this.vertexCircle != null  ) {
this.vertexCircle=null;
}hitShape=this.panelEnd1Shapes.get$O(trackerPanel.getID$());
if (hit == null  && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.end1;
this.drawLayout1=true;
this.drawLayoutAngle=true;
}hitShape=this.panelEnd2Shapes.get$O(trackerPanel.getID$());
if (hit == null  && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.end2;
this.drawLayout2=true;
this.drawLayoutAngle=true;
}}hitShape=this.panelRotatorShapes.get$O(trackerPanel.getID$());
if (!this.end1.isAttached$() && !this.end2.isAttached$() && hit == null    && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.rotator;
}if (hit == null  && trackerPanel.getSelectedPoint$() === this.rotator   && this.selectedShape != null   && this.selectedShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.rotator;
}if (hit === this.rotator  && trackerPanel.getSelectedPoint$() !== this.rotator   && !isWorldView ) {
this.rotator.setScreenCoords$I$I(xpix, ypix);
}this.drawArcCircle=hit === this.rotator  || trackerPanel.getSelectedPoint$() === this.rotator  ;
hitShape=this.panelLine1Shapes.get$O(trackerPanel.getID$());
if (hit == null  && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.handle;
this.handle.setHandleEnd$org_opensourcephysics_media_core_TPoint(this.end1);
this.drawLayout1=true;
this.drawLayoutAngle=true;
}hitShape=this.panelLine2Shapes.get$O(trackerPanel.getID$());
if (hit == null  && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
hit=this.handle;
this.handle.setHandleEnd$org_opensourcephysics_media_core_TPoint(this.end2);
this.drawLayout2=true;
this.drawLayoutAngle=true;
}if (hit == null  && this.protractor.ruler != null   && this.protractor.ruler.isVisible$() ) {
hit=this.protractor.ruler.findInteractive$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_Rectangle(trackerPanel, $I$(11).hitRect);
}var layoutRect=this.panelLayoutBounds.get$O(trackerPanel.getID$());
if (hit == null  && layoutRect != null   && layoutRect.intersects$java_awt_Rectangle($I$(11).hitRect) ) {
this.drawLayoutBounds=true;
this.drawLayoutAngle=true;
hit=this.protractor;
}if (this.end1.isAttached$() && (hit === this.end1  || hit === this.rotator  ) ) return null;
if (this.end2.isAttached$() && (hit === this.end2  || hit === this.rotator  ) ) return null;
if (this.vertex.isAttached$() && (hit === this.vertex ) ) return null;
return hit;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
var trackerPanel=panel;
var isWorldView=trackerPanel.isWorldPanel$();
var g=_g;
this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).draw$java_awt_Graphics2D$Z(g, false);
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.footprint.getColor$());
var gfont=g.getFont$();
g.setFont$java_awt_Font($I$(12).textLayoutFont);
if (!this.protractor.editing && !isWorldView ) {
if (this.drawLayoutAngle || trackerPanel.getSelectedTrack$() === this.protractor  ) {
var layout=this.panelTextLayouts.get$O(trackerPanel.getID$());
var bounds=this.panelLayoutBounds.get$O(trackerPanel.getID$());
g.setFont$java_awt_Font($I$(12).textLayoutFont);
layout.draw$java_awt_Graphics$F$F(g, bounds.x, bounds.y + bounds.height);
g.setFont$java_awt_Font(gfont);
if (this.drawLayoutBounds) {
g.drawRect$I$I$I$I(bounds.x - 2, bounds.y - 3, bounds.width + 6, bounds.height + 5);
}}}if (trackerPanel.getSelectedPoint$() === this.vertex ) this.vertexCircle=null;
if (this.vertexCircle != null  && !isWorldView ) {
this.vertexCircle.draw$java_awt_Graphics2D(g);
}if (this.drawLayout1 && !isWorldView ) {
var layout=this.panelTextLayouts1.get$O(trackerPanel.getID$());
var p=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, layout, this.end1]);
layout.draw$java_awt_Graphics$F$F(g, p.x, p.y);
}if (this.drawLayout2 && !isWorldView ) {
var layout=this.panelTextLayouts2.get$O(trackerPanel.getID$());
var p=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, layout, this.end2]);
layout.draw$java_awt_Graphics$F$F(g, p.x, p.y);
}g.setFont$java_awt_Font(gfont);
g.setPaint$java_awt_Paint(gpaint);
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
if (mark == null ) {
this.getProtractorAngle$Z(true);
var pFootprint=this.footprint;
var selection=trackerPanel.getSelectedPoint$();
var isWorldView=trackerPanel.isWorldPanel$();
var p=null;
for (var i=0; i < this.points.length; i++) {
this.screenPoints[i]=this.points[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[i] ) p=this.screenPoints[i];
}
var rulerMark=this.protractor.ruler != null  && this.protractor.ruler.isVisible$()  ? this.protractor.ruler.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, this.n) : null;
pFootprint.setArcVisible$Z(!isWorldView);
var stepMark=pFootprint.getMark$java_awt_PointA(this.screenPoints);
var arcCircle=isWorldView ? null : selection === this.rotator  ? pFootprint.getArcAdjustShape$java_awt_Point$java_awt_Point(this.screenPoints[0], this.screenPoints[4]) : pFootprint.getArcAdjustShape$java_awt_Point$java_awt_Point(this.screenPoints[0], null);
if (!isWorldView) {
if (p != null ) {
C$.$transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(13).getIntegerFactor$();
if (scale > 1) {
C$.$transform.scale$D$D(scale, scale);
}this.selectedShape=C$.$transform.createTransformedShape$java_awt_Shape($I$(11).selectionShape);
} else this.selectedShape=null;
}mark=((P$.ProtractorStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProtractorStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
this.$finals$.stepMark.draw$java_awt_Graphics2D$Z(g, false);
var gpaint=g.getPaint$();
var gstroke=g.getStroke$();
g.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].footprint.getColor$());
if (this.$finals$.rulerMark != null ) {
this.$finals$.rulerMark.draw$java_awt_Graphics2D$Z(g, false);
}if (this.$finals$.arcCircle != null  && this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].drawArcCircle ) {
this.$finals$.arcCircle.draw$java_awt_Graphics2D(g);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].selectedShape != null  && !this.$finals$.isWorldView ) {
g.setStroke$java_awt_Stroke($I$(11).selectionStroke);
g.draw$java_awt_Shape(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].selectedShape);
}g.setPaint$java_awt_Paint(gpaint);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.ProtractorStep$1.$init$,[this, {isWorldView:isWorldView,stepMark:stepMark,rulerMark:rulerMark,arcCircle:arcCircle}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
var shapes=this.footprint.getHitShapes$();
this.panelVertexShapes.put$O$O(trackerPanel.getID$(), shapes[0]);
this.panelEnd1Shapes.put$O$O(trackerPanel.getID$(), shapes[1]);
this.panelEnd2Shapes.put$O$O(trackerPanel.getID$(), shapes[2]);
this.panelLine1Shapes.put$O$O(trackerPanel.getID$(), shapes[3]);
this.panelLine2Shapes.put$O$O(trackerPanel.getID$(), shapes[4]);
this.panelRotatorShapes.put$O$O(trackerPanel.getID$(), shapes[5]);
var s=this.protractor.angleField.getText$();
var layout=Clazz.new_([s, $I$(12).textLayoutFont],$I$(14,1).c$$S$java_awt_Font);
this.panelTextLayouts.put$O$O(trackerPanel.getID$(), layout);
p=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, layout, this.vertex]);
var bounds=this.panelLayoutBounds.get$O(trackerPanel.getID$());
if (bounds == null ) {
bounds=Clazz.new_($I$(15,1));
this.panelLayoutBounds.put$O$O(trackerPanel.getID$(), bounds);
}var rect=layout.getBounds$();
bounds.setRect$D$D$D$D(p.x, p.y - rect.getHeight$(), rect.getWidth$(), rect.getHeight$());
for (var k=0; k < 2; k++) {
var end=k == 0 ? this.end1 : this.end2;
var layouts=k == 0 ? this.panelTextLayouts1 : this.panelTextLayouts2;
var lBounds=k == 0 ? this.panelLayout1Bounds : this.panelLayout2Bounds;
s=this.getFormattedLength$org_opensourcephysics_media_core_TPoint(end);
s+=trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this.protractor, $I$(16).dataVariables[2 + k]);
layout=Clazz.new_([s, $I$(12).textLayoutFont],$I$(14,1).c$$S$java_awt_Font);
layouts.put$O$O(trackerPanel.getID$(), layout);
p=p$1.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, layout, end]);
bounds=lBounds.get$O(trackerPanel.getID$());
if (bounds == null ) {
bounds=Clazz.new_($I$(15,1));
lBounds.put$O$O(trackerPanel.getID$(), bounds);
}rect=layout.getBounds$();
bounds.setRect$D$D$D$D(p.x, p.y - rect.getHeight$(), rect.getWidth$(), rect.getHeight$());
}
}return mark;
});

Clazz.newMeth(C$, 'getFormattedLength$org_opensourcephysics_media_core_TPoint',  function (end) {
var length=this.getArmLength$org_opensourcephysics_media_core_TPoint(end);
if (this.protractor.tp.getFrameNumber$() == this.n) {
var field=end === this.end1  ? this.getTrack$().xField : this.getTrack$().yField;
field.setValue$D(length);
return field.format$D(length);
}C$.formatField.setFixedPattern$S(this.getTrack$().xField.getFixedPattern$());
C$.formatField.setFormatFor$D(length);
return C$.formatField.format$D(length);
});

Clazz.newMeth(C$, 'getProtractorAngle$Z',  function (refreshField) {
this.line1Angle=-this.vertex.angle$java_awt_geom_Point2D_Double(this.end1);
this.line2Angle=-this.vertex.angle$java_awt_geom_Point2D_Double(this.end2);
var theta=this.line2Angle - this.line1Angle;
if (theta > 3.141592653589793 ) theta-=6.283185307179586;
if (theta < -3.141592653589793 ) theta+=6.283185307179586;
if (refreshField && this.protractor.tp.getFrameNumber$() == this.n ) {
this.protractor.angleField.setValue$D(theta);
}return theta;
});

Clazz.newMeth(C$, 'setProtractorAngle$D',  function (theta) {
if (this.protractor.isLocked$() || this.protractor.tp == null  ) return;
var state=Clazz.new_($I$(17,1).c$$O,[this.protractor]);
theta+=this.line1Angle;
var d=this.end2.distance$java_awt_geom_Point2D(this.vertex);
var dx=d * Math.cos(theta);
var dy=-d * Math.sin(theta);
this.end2.setLocation$D$D(this.vertex.x + dx, this.vertex.y + dy);
this.repaint$();
$I$(18).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.protractor, state);
this.protractor.firePropertyChange$S$O$O("steps", null, null);
});

Clazz.newMeth(C$, 'getArmLength$org_opensourcephysics_media_core_TPoint',  function (end) {
if (this.protractor.tp == null ) return 1.0;
var scaleX=this.protractor.tp.getCoords$().getScaleX$I(this.n);
var scaleY=this.protractor.tp.getCoords$().getScaleY$I(this.n);
var dx=(this.vertex.getX$() - end.getX$()) / scaleX;
var dy=(end.getY$() - this.vertex.getY$()) / scaleY;
return Math.sqrt(dx * dx + dy * dy);
});

Clazz.newMeth(C$, 'setArmLength$org_opensourcephysics_media_core_TPoint$D',  function (end, length) {
if (this.protractor.isLocked$() || this.protractor.tp == null  ) return;
var state=Clazz.new_($I$(17,1).c$$O,[this.protractor]);
var scaleX=this.protractor.tp.getCoords$().getScaleX$I(this.n);
var scaleY=this.protractor.tp.getCoords$().getScaleY$I(this.n);
var dx=length * this.vertex.cos$java_awt_geom_Point2D_Double(end) * scaleX ;
var dy=-length * this.vertex.sin$java_awt_geom_Point2D_Double(end) * scaleY ;
end.setXY$D$D(this.vertex.x + dx, this.vertex.y + dy);
this.repaint$();
$I$(18).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.protractor, state);
});

Clazz.newMeth(C$, 'moveVertexTo$D$D',  function (x, y) {
if (this.protractor.isLocked$() || this.protractor.tp == null  ) return;
var dx=x - this.vertex.x;
var dy=y - this.vertex.y;
this.handle.setXY$D$D(this.handle.x + dx, this.handle.y + dy);
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.points[0]=step.vertex=Clazz.new_([step, null, this.vertex.getX$(), this.vertex.getY$()],$I$(7,1).c$$D$D);
step.points[1]=step.end1=Clazz.new_([step, null, this.end1.getX$(), this.end1.getY$()],$I$(7,1).c$$D$D);
step.points[2]=step.end2=Clazz.new_([step, null, this.end2.getX$(), this.end2.getY$()],$I$(7,1).c$$D$D);
step.points[3]=step.handle=Clazz.new_([step, null, this.handle.getX$(), this.handle.getY$()],$I$(8,1).c$$D$D);
step.points[4]=step.rotator=Clazz.new_($I$(9,1),[step, null]);
step.vertex.setTrackEditTrigger$Z(true);
step.end1.setTrackEditTrigger$Z(true);
step.end2.setTrackEditTrigger$Z(true);
step.handle.setTrackEditTrigger$Z(true);
step.panelVertexShapes=Clazz.new_($I$(6,1));
step.panelEnd1Shapes=Clazz.new_($I$(6,1));
step.panelEnd2Shapes=Clazz.new_($I$(6,1));
step.panelLine1Shapes=Clazz.new_($I$(6,1));
step.panelLine2Shapes=Clazz.new_($I$(6,1));
step.panelRotatorShapes=Clazz.new_($I$(6,1));
step.panelTextLayouts=Clazz.new_($I$(6,1));
step.panelLayoutBounds=Clazz.new_($I$(6,1));
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "ProtractorStep";
});

Clazz.newMeth(C$, 'n$',  function () {
if (this.protractor.isFixedPosition$() && this.protractor.tp != null  ) return this.protractor.tp.getFrameNumber$();
return this.n;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 5;
}, 1);

Clazz.newMeth(C$, 'getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_display_OSPRuntime_TextLayout$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, layout, end) {
var scale=$I$(13).getFactor$();
var bounds=layout.getBounds$();
var w=bounds.getWidth$();
var h=bounds.getHeight$();
if (end === this.vertex ) {
var p=this.vertex.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var angle=this.line1Angle - 1.5707963267948966;
var sin=Math.sin(angle);
var cos=Math.cos(angle);
var halfhsin=h * sin / 2;
var halfwcos=w * cos / 2;
var d=Math.sqrt((halfhsin * halfhsin) + (halfwcos * halfwcos)) + 8;
if (this.getProtractorAngle$Z(false) < 0 ) p.setLocation$I$I(((p.x - d * cos - w / 2)|0), ((p.y + d * sin + h / 2)|0));
 else p.setLocation$I$I(((p.x + d * cos - w / 2)|0), ((p.y - d * sin + h / 2)|0));
return p;
}C$.middle.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(end, this.vertex);
var p=C$.middle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
C$.endPoint1.setLocation$java_awt_geom_Point2D(end);
C$.endPoint2.setLocation$java_awt_geom_Point2D(this.vertex);
var cos=C$.endPoint2.cos$java_awt_geom_Point2D_Double(C$.endPoint1);
var sin=C$.endPoint2.sin$java_awt_geom_Point2D_Double(C$.endPoint1);
var d=scale * 6 + Math.abs(w * sin / 2) + Math.abs(h * cos / 2);
if (cos >= 0 ) {
p.setLocation$I$I(((p.x - d * sin - w / 2)|0), ((p.y - d * cos + h / 2)|0));
} else {
p.setLocation$I$I(((p.x + d * sin - w / 2)|0), ((p.y + d * cos + h / 2)|0));
}return p;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$transform=Clazz.new_($I$(4,1));
C$.endPoint1=Clazz.new_($I$(2,1));
C$.endPoint2=Clazz.new_($I$(2,1));
C$.middle=Clazz.new_($I$(2,1));
C$.formatField=Clazz.new_($I$(5,1).c$$I,[1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProtractorStep, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Step','.Handle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['end','org.opensourcephysics.media.core.TPoint']]]

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setTrackEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1.isAttached$() || this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2.isAttached$() || this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.isAttached$()  ) return;
var dx=x - this.getX$();
var dy=y - this.getY$();
this.setLocation$D$D(x, y);
if (this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.steps.getStep$I(0);
step.vertex.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getY$() + dy);
step.end2.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2.getY$() + dy);
step.end1.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1.getY$() + dy);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep']);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'], []);
});

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xScreen, yScreen, trackerPanel) {
this.setPositionOnLine$I$I$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(xScreen, yScreen, trackerPanel, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex, this.end);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$, 'setHandleEnd$org_opensourcephysics_media_core_TPoint',  function (end) {
this.end=end;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProtractorStep, "Tip", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setTrackEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
if (this !== this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex ) {
var d=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.distance$D$D(x, y);
if (d > 0.01 ) {
var r=$I$(1).arcRadius;
if (d < 2 * r ) {
x=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getX$() + 2 * r * (x - this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getX$())  / d;
y=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getY$() + 2 * r * (y - this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.getY$())  / d;
}}}if (this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.steps.getStep$I(0);
var target=this === this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1  ? step.end1 : this === this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2  ? step.end2 : step.vertex;
target.setLocation$D$D(x, y);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep']);
} else {
this.setLocation$D$D(x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.invalidateData$O(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'], []);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
if (!adjusting && !this.isAdjusting$() ) return;
if (this.isAdjusting && this.prevX == this.x   && this.prevY == this.y  ) return;
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (!adjusting) {
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'], [])));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProtractorStep, "Rotator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pt=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['pt','org.opensourcephysics.media.core.TPoint']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setTrackEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var theta=-this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.angle$java_awt_geom_Point2D_Double(this);
var arc=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].line2Angle - this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].line1Angle;
if (arc > 3.141592653589793 ) arc-=6.283185307179586;
if (arc < -3.141592653589793 ) arc+=6.283185307179586;
var midline=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].line1Angle + arc / 2;
$I$(3).$transform.setToRotation$D$D$D(midline - theta, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.x, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].vertex.y);
if (this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.steps.getStep$I(0);
$I$(3).$transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(step.end1, step.end1);
$I$(3).$transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(step.end2, step.end2);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep']);
} else {
$I$(3).$transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end1);
$I$(3).$transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].end2);
this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).getStep$I(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n).repaint$();
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].n$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'], []);
});

Clazz.newMeth(C$, 'setScreenCoords$I$I',  function (x, y) {
this.pt.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(x, y, this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorStep'].protractor.tp);
this.setLocation$java_awt_geom_Point2D(this.pt);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
