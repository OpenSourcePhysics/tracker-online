(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.media.core.TPoint',['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep','.Position'],'org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OffsetOriginStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Position',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['worldX','worldY'],'O',['offset','org.opensourcephysics.cabrillo.tracker.OffsetOrigin','p','org.opensourcephysics.cabrillo.tracker.OffsetOriginStep.Position']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_OffsetOrigin$I$D$D',  function (track, n, x, y) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.offset=track;
this.screenPoints=Clazz.array($I$(1), [$I$(2).getLength$()]);
this.points=Clazz.array($I$(3), [$I$(2).getLength$()]);
this.p=Clazz.new_($I$(4,1).c$$D$D,[this, null, x, y]);
this.points[0]=this.p;
}, 1);

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.p;
});

Clazz.newMeth(C$, 'setWorldXY$D$D',  function (x, y) {
if (this.getTrack$().isLocked$()) return;
if (this.offset.isFixedCoordinates$()) {
var step=this.offset.steps.getStep$I(0);
step.worldX=x;
step.worldY=y;
step.erase$();
this.offset.refreshStep$org_opensourcephysics_cabrillo_tracker_OffsetOriginStep(this);
} else {
this.worldX=x;
this.worldY=y;
this.offset.keyFrames.add$O(Integer.valueOf$I(this.n));
}if (this.offset.tp == null ) return;
var coords=this.offset.tp.getCoords$();
var n=this.offset.tp.getFrameNumber$();
var x0=coords.getOriginX$I(n);
var y0=coords.getOriginY$I(n);
var x1=coords.worldToImageX$I$D$D(n, x, y);
var y1=coords.worldToImageY$I$D$D(n, x, y);
coords.setOriginXY$I$D$D(n, x0 + this.p.x - x1, y0 + this.p.y - y1);
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
var selection=null;
if (mark == null ) {
var coords=trackerPanel.getCoords$();
var n=trackerPanel.getFrameNumber$();
var x=coords.worldToImageX$I$D$D(n, this.worldX, this.worldY);
var y=coords.worldToImageY$I$D$D(n, this.worldX, this.worldY);
this.p.setLocation$D$D(x, y);
var shape;
selection=trackerPanel.getSelectedPoint$();
var pt=this.points[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[0] ) {
$I$(2).transform.setToTranslation$D$D(pt.x, pt.y);
var scale=$I$(5).getIntegerFactor$();
if (scale > 1) {
$I$(2).transform.scale$D$D(scale, scale);
}shape=Clazz.new_([Clazz.array($I$(7), -1, [$I$(2).transform.createTransformedShape$java_awt_Shape($I$(2).selectionShape)])],$I$(6,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(8), -1, [$I$(2).selectionStroke]));
} else {
shape=this.footprint.getShape$java_awt_PointA$I(Clazz.array($I$(1), -1, [pt]), $I$(5).getIntegerFactor$());
}var color=this.footprint.getColor$();
mark=((P$.OffsetOriginStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OffsetOriginStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
if ($I$(9).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_ANTIALIASING, $I$(10).VALUE_ANTIALIAS_ON);
g.setPaint$java_awt_Paint(this.$finals$.color);
this.$finals$.shape.draw$java_awt_Graphics2D(g);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.OffsetOriginStep$1.$init$,[this, {color:color,shape:shape}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
}return mark;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
step.points[0]=step.p=Clazz.new_($I$(4,1).c$$D$D,[step, null, this.p.x, this.p.y]);
return step;
});

Clazz.newMeth(C$, 'toString',  function () {
var s="Offset Origin Step " + this.n + " [" + $I$(2).format.format$D(this.worldX) + ", " + $I$(2).format.format$D(this.worldY) + "]" ;
return s;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.OffsetOriginStep, "Position", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
Clazz.super_(C$, this);
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
this.setCoordsEditTrigger$Z(true);
if (this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.tp == null ) return;
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.tp.getCoords$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.tp.getFrameNumber$();
this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].worldX=coords.imageToWorldX$I$D$D(n, x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].worldY=coords.imageToWorldY$I$D$D(n, x, y);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).isLocked$()) return;
if (this.isAdjusting$()) {
this.prevX=x;
this.prevY=y;
}var dx=x - this.getX$();
var dy=y - this.getY$();
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.tp == null ) return;
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.tp.getCoords$();
coords.setAdjusting$Z(this.isAdjusting$());
var n=this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.tp.getFrameNumber$();
var x0=coords.getOriginX$I(n);
var y0=coords.getOriginY$I(n);
coords.setOriginXY$I$D$D(n, x0 + dx, y0 + dy);
if (this.isAdjusting$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
}});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
var wasAdjusting=this.isAdjusting$();
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (wasAdjusting && !adjusting && !java.lang.Double.isNaN$D(this.prevX)  ) {
this.setXY$D$D(this.prevX, this.prevY);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).firePropertyChange$S$O$O("step", null, Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].n));
}});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.xField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].worldX);
this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].offset.yField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOriginStep'].worldY);
C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
