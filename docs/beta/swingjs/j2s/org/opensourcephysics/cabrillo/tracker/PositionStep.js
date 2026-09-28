(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Point','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.CircleFootprint',['org.opensourcephysics.cabrillo.tracker.PositionStep','.Position'],'org.opensourcephysics.media.core.TPoint','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints',['org.opensourcephysics.display.OSPRuntime','.TextLayout'],'java.awt.Rectangle',['org.opensourcephysics.cabrillo.tracker.PositionStep','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PositionStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Position',4],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panelTextLayouts=Clazz.new_($I$(2,1));
this.panelLayoutBounds=Clazz.new_($I$(2,1));
this.innerCircleFootprint=Clazz.new_($I$(3,1).c$$S$I,["CircleFootprint.Circle", 2]);
},1);

C$.$fields$=[['Z',['labelVisible','rolloverVisible'],'O',['p','org.opensourcephysics.cabrillo.tracker.PositionStep.Position','panelTextLayouts','java.util.Map','+panelLayoutBounds','innerCircleFootprint','org.opensourcephysics.cabrillo.tracker.CircleFootprint']]
,['O',['twoPoints','java.awt.Point[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D',  function (track, n, x, y) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.p=Clazz.new_($I$(4,1).c$$D$D,[this, null, x, y]);
this.p.setTrackEditTrigger$Z(true);
this.points=Clazz.array($I$(5), -1, [this.p]);
this.screenPoints=Clazz.array($I$(1), [$I$(6).getLength$()]);
this.setLabelVisible$Z(track.labelsVisible);
this.setRolloverVisible$Z(!track.labelsVisible);
}, 1);

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.p;
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

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
var track=this.getTrack$();
if (track.tp === panel ) {
var autoTracker=track.tp.getAutoTracker$Z(false);
if (autoTracker != null  && autoTracker.isInteracting$org_opensourcephysics_cabrillo_tracker_TTrack(track) ) return;
}if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=panel;
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [trackerPanel, _g]);
var g=_g;
if (this.isLabelVisible$()) {
var layout=this.panelTextLayouts.get$O(trackerPanel.getID$());
if (layout == null ) return;
var p=this.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var gpaint=g.getPaint$();
var gfont=g.getFont$();
g.setPaint$java_awt_Paint(this.footprint.getColor$());
g.setFont$java_awt_Font($I$(7).textLayoutFont);
layout.draw$java_awt_Graphics$F$F(g, p.x, p.y);
g.setPaint$java_awt_Paint(gpaint);
g.setFont$java_awt_Font(gfont);
}}});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (this.rolloverVisible) {
if (ia != null  && !this.labelVisible ) {
this.labelVisible=true;
this.repaint$();
}if (ia == null  && this.labelVisible ) {
this.labelVisible=false;
this.repaint$();
}}return ia;
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
var selection=null;
if (mark == null ) {
selection=trackerPanel.getSelectedPoint$();
var p=null;
this.valid=true;
for (var n=0; n < this.points.length; n++) {
if (!this.valid) continue;
this.valid=this.valid && !Double.isNaN$D(this.points[n].getX$()) && !Double.isNaN$D(this.points[n].getY$())  ;
this.screenPoints[n]=this.points[n].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (this.valid && (selection === this.points[n]  || trackerPanel.selectedSteps.contains$O(this) ) ) {
p=this.screenPoints[n];
}}
if (p == null ) {
if (Clazz.instanceOf(this.footprint, "org.opensourcephysics.cabrillo.tracker.PositionVectorFootprint")) {
C$.twoPoints[0]=this.screenPoints[0];
C$.twoPoints[1]=trackerPanel.getSnapPoint$().getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
mark=this.footprint.getMark$java_awt_PointA(C$.twoPoints);
} else mark=this.footprint.getMark$java_awt_PointA(this.screenPoints);
} else {
$I$(6).transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(8).getIntegerFactor$();
if (scale > 1) {
$I$(6).transform.scale$D$D(scale, scale);
}var color=this.footprint.getColor$();
var selectedShape=$I$(6).transform.createTransformedShape$java_awt_Shape($I$(6).selectionShape);
mark=((P$.PositionStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PositionStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
if ($I$(9).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_ANTIALIASING, $I$(10).VALUE_ANTIALIAS_ON);
var gpaint=g.getPaint$();
var gstroke=g.getStroke$();
g.setPaint$java_awt_Paint(this.$finals$.color);
g.setStroke$java_awt_Stroke($I$(6).selectionStroke);
g.draw$java_awt_Shape(this.$finals$.selectedShape);
g.setPaint$java_awt_Paint(gpaint);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.PositionStep$1.$init$,[this, {selectedShape:selectedShape,color:color}]));
}if (!this.getTrack$().keyFrames.contains$O(Integer.valueOf$I(this.n))) {
this.innerCircleFootprint.setColor$java_awt_Color(this.footprint.getColor$());
var autofillMark=this.innerCircleFootprint.getMark$java_awt_PointA(this.screenPoints);
var normalMark=mark;
var m=this.getTrack$();
mark=((P$.PositionStep$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PositionStep$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
this.$finals$.normalMark.draw$java_awt_Graphics2D$Z(g, highlighted);
if (this.$finals$.m.showfilledSteps) {
this.$finals$.autofillMark.draw$java_awt_Graphics2D$Z(g, false);
}});
})()
), Clazz.new_(P$.PositionStep$2.$init$,[this, {autofillMark:autofillMark,normalMark:normalMark,m:m}]));
}var theMark=mark;
mark=((P$.PositionStep$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PositionStep$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].valid) {
return;
}this.$finals$.theMark.draw$java_awt_Graphics2D$Z(g, highlighted);
});
})()
), Clazz.new_(P$.PositionStep$3.$init$,[this, {theMark:theMark}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
var s="";
var clip=trackerPanel.getPlayer$().getVideoClip$();
if (clip.getStepCount$() != 1) {
s+=clip.frameToStep$I(this.getFrameNumber$());
}if (s.length$() == 0) s=" ";
var layout=Clazz.new_([s, $I$(7).textLayoutFont],$I$(11,1).c$$S$java_awt_Font);
this.panelTextLayouts.put$O$O(trackerPanel.getID$(), layout);
p=this.getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var bounds=this.panelLayoutBounds.get$O(trackerPanel.getID$());
if (bounds == null ) {
bounds=Clazz.new_($I$(12,1));
this.panelLayoutBounds.put$O$O(trackerPanel.getID$(), bounds);
}var rect=layout.getBounds$();
bounds.setRect$D$D$D$D(p.x, p.y - rect.getHeight$(), rect.getWidth$(), rect.getHeight$());
}return mark;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.points[0]=step.p=Clazz.new_([step, null, this.p.getX$(), this.p.getY$()],$I$(4,1).c$$D$D);
step.panelTextLayouts=Clazz.new_($I$(2,1));
step.panelLayoutBounds=Clazz.new_($I$(2,1));
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "PositionStep " + this.n + " [" + $I$(6).format.format$D(this.p.x) + ", " + $I$(6).format.format$D(this.p.y) + "]" ;
});

Clazz.newMeth(C$, 'getLayoutPosition$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var pt=this.p.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
pt.setLocation$I$I(pt.x - 4 - $I$(7).textLayoutFont.getSize$() , pt.y - 6);
return pt;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(13,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.twoPoints=Clazz.array($I$(1), [2]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PositionStep, "Position", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track.isLocked$() || track.isDependent$() ) return;
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].n));
if (!this.isAdjusting$()) {
if (track.isAutofill$()) {
track.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$Z(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'], true);
}track.updateDerivatives$I(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].n);
track.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].n));
}});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
var p=this.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
track.xField.setValue$D(p.getX$());
track.yField.setValue$D(p.getY$());
track.magField.setValue$D(p.distance$D$D(0, 0));
var theta=Math.atan2(p.getY$(), p.getX$());
track.angleField.setValue$D(theta);
C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].n;
});

Clazz.newMeth(C$, 'setPosition$java_awt_geom_Point2D_Double',  function (point) {
this.x=point.x;
this.y=point.y;
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
if (!adjusting && !this.isAdjusting$() ) return;
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
var m=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (m.isAutofill$()) {
m.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$Z(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'], !adjusting);
}if (!adjusting) {
m.updateDerivatives$I(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].n);
m.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PositionStep'].n));
}m.firePropertyChange$S$O$O("adjusting", m, Boolean.valueOf$Z(adjusting));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PositionStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
control.setValue$S$D("x", step.p.x);
control.setValue$S$D("y", step.p.y);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
step.p.setXY$D$D(x, y);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
