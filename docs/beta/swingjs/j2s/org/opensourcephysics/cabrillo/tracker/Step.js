(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.Rectangle','java.awt.geom.AffineTransform','java.text.NumberFormat','java.util.Locale','java.awt.BasicStroke','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke','org.opensourcephysics.media.core.TPoint','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Step", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['Handle',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panelMarks=Clazz.new_($I$(6,1));
this.defaultIndex=0;
this.dataVisible=true;
this.type=0;
},1);

C$.$fields$=[['Z',['valid','dataVisible'],'I',['trackID','n','defaultIndex','type'],'O',['footprint','org.opensourcephysics.cabrillo.tracker.Footprint','points','org.opensourcephysics.media.core.TPoint[]','screenPoints','java.awt.Point[]','panelMarks','java.util.Map']]
,['O',['hitRect','java.awt.Rectangle','selectionShape','java.awt.Shape','selectionStroke','java.awt.Stroke','transform','java.awt.geom.AffineTransform','format','java.text.NumberFormat']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$I',  function (track, n) {
;C$.$init$.apply(this);
this.trackID=track.getID$();
this.n=n;
}, 1);

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint',  function (footprint) {
this.footprint=footprint;
});

Clazz.newMeth(C$, 'getTrack$',  function () {
return $I$(7).getTrack$I(this.trackID);
});

Clazz.newMeth(C$, 'getPoints$',  function () {
return this.points;
});

Clazz.newMeth(C$, 'getPointIndex$org_opensourcephysics_media_core_TPoint',  function (p) {
for (var i=0; i < this.points.length; i++) {
if (this.points[i] === p ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'getDefaultPoint$',  function () {
return this.points[this.defaultIndex];
});

Clazz.newMeth(C$, 'setDefaultPointIndex$I',  function (index) {
index=Math.min(index, this.points.length - 1);
this.defaultIndex=Math.max(0, index);
});

Clazz.newMeth(C$, 'erase$Integer',  function (panelID) {
if (this.panelMarks.get$O(panelID) == null  || p$1.panel$Integer.apply(this, [panelID]) == null  ) return;
p$1.panel$Integer.apply(this, [panelID]).addDirtyRegion$java_awt_Rectangle(null);
this.panelMarks.put$O$O(panelID, null);
});

Clazz.newMeth(C$, 'remark$Integer',  function (panelID) {
if (p$1.panel$Integer.apply(this, [panelID]) == null ) return;
this.erase$Integer(panelID);
p$1.panel$Integer.apply(this, [panelID]).addDirtyRegion$java_awt_Rectangle(null);
});

Clazz.newMeth(C$, 'repaint$Integer',  function (panelID) {
if (p$1.panel$Integer.apply(this, [panelID]) == null ) return;
this.remark$Integer(panelID);
p$1.panel$Integer.apply(this, [panelID]).repaintDirtyRegion$();
});

Clazz.newMeth(C$, 'erase$',  function () {
if (this.panelMarks.isEmpty$()) return;
var panelIDs=this.panelMarks.keySet$().iterator$();
while (panelIDs.hasNext$())this.erase$Integer(panelIDs.next$());

});

Clazz.newMeth(C$, 'remark$',  function () {
if (this.panelMarks.isEmpty$()) return;
var panelIDs=this.panelMarks.keySet$().iterator$();
while (panelIDs.hasNext$())this.remark$Integer(panelIDs.next$());

});

Clazz.newMeth(C$, 'repaint$',  function () {
var panelIDs=this.panelMarks.keySet$().iterator$();
while (panelIDs.hasNext$())this.repaint$Integer(panelIDs.next$());

});

Clazz.newMeth(C$, 'panel$Integer',  function (panelID) {
if (this.getTrack$() == null ) {
System.out.println$S("OHOH");
return null;
}return this.getTrack$().panel$Integer(panelID);
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.panelMarks.clear$();
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var track=this.getTrack$();
var t;
if (track.tp === panel  && (t=track.tp.getAutoTracker$Z(false)) != null   && t.isInteracting$org_opensourcephysics_cabrillo_tracker_TTrack(track) ) {
return;
}var trackerPanel=panel;
var highlighted=(trackerPanel.getFrameNumber$() == this.n);
if (trackerPanel.autoTracker != null  && trackerPanel.autoTracker.getWizard$().isVisible$()  && trackerPanel.autoTracker.getTrack$() === track  ) {
highlighted=false;
}this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).draw$java_awt_Graphics2D$Z(g, highlighted);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var track=this.getTrack$();
var highlighted=track.tp.getFrameNumber$() == this.getFrameNumber$();
var autoTracker=track.tp.getAutoTracker$Z(false);
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
for (var i=0; i < this.points.length; i++) {
if (this.points[i] == null  || Double.isNaN$D(this.points[i].getX$()) ) continue;
if (C$.hitRect.contains$java_awt_Point(this.points[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel))) {
if (highlighted && autoTracker != null   && autoTracker.isDrawingKeyFrameFor$org_opensourcephysics_cabrillo_tracker_TTrack$I(track, i) ) return null;
return this.points[i];
}}
return null;
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
if (this.valid && selection === this.points[n]  ) p=this.screenPoints[n];
}
mark=this.footprint.getMark$java_awt_PointA(this.screenPoints);
if (p != null ) {
C$.transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(8).getIntegerFactor$();
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var color=this.footprint.getColor$();
var stepMark=mark;
var selectedShape=Clazz.new_([Clazz.array($I$(10), -1, [C$.transform.createTransformedShape$java_awt_Shape(C$.selectionShape)])],$I$(9,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(11), -1, [C$.selectionStroke]));
mark=((P$.Step$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Step$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
this.$finals$.stepMark.draw$java_awt_Graphics2D$Z(g, false);
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.$finals$.color);
this.$finals$.selectedShape.draw$java_awt_Graphics2D(g);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.Step$1.$init$,[this, {color:color,stepMark:stepMark,selectedShape:selectedShape}]));
}var theMark=mark;
mark=((P$.Step$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Step$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.Step'].valid) return;
this.$finals$.theMark.draw$java_awt_Graphics2D$Z(g, false);
});
})()
), Clazz.new_(P$.Step$2.$init$,[this, {theMark:theMark}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
}return mark;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Step " + this.n;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var step=Clazz.clone(this);
step.points=Clazz.array($I$(12), [this.points.length]);
step.screenPoints=Clazz.array($I$(13), [this.points.length]);
step.panelMarks=Clazz.new_($I$(6,1));
return step;
} catch (ex) {
if (Clazz.exceptionOf(ex,"CloneNotSupportedException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'setHitRectCenter$I$I',  function (xpix, ypix) {
C$.hitRect.setLocation$I$I(xpix - (C$.hitRect.width/2|0), ypix - (C$.hitRect.height/2|0));
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 1;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.hitRect=Clazz.new_($I$(1,1).c$$I$I$I$I,[-12, -12, 24, 24]);
C$.transform=Clazz.new_($I$(2,1));
C$.format=$I$(3,"getNumberInstance$java_util_Locale",[$I$(4).US]);
{
C$.selectionStroke=Clazz.new_($I$(5,1).c$$F,[2]);
C$.selectionShape=C$.hitRect.clone$();
C$.format.setMinimumIntegerDigits$I(1);
C$.format.setMinimumFractionDigits$I(1);
C$.format.setMaximumFractionDigits$I(2);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Step, "Handle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xScreen, yScreen, trackerPanel) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
