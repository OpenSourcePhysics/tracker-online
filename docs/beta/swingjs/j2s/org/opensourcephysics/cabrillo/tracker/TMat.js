(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.Color','java.awt.geom.AffineTransform','java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.TrackerPanel','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TMat", null, null, ['org.opensourcephysics.display.Measurable', 'org.opensourcephysics.media.core.Trackable', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paint=$I$(1).white;
this.visible=true;
this.isValidMeasure=false;
this.trTM=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['visible','isValidMeasure','haveVideo'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','mat','java.awt.Rectangle','worldBounds','java.awt.geom.Rectangle2D','paint','java.awt.Paint','coords','org.opensourcephysics.media.core.ImageCoordSystem','drawnBounds','java.awt.geom.Rectangle2D','trTM','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.$init$.apply(this);
this.mat=Clazz.new_($I$(3,1));
this.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
this.refresh$();
}, 1);

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (panel == null  || this.panelID === panel.getID$()  ) return;
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
panel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("coords", this);
p$1.refreshCoords$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel")) || !this.isVisible$() ) return;
var vidPanel=panel;
var g2=g.create$();
g2.transform$java_awt_geom_AffineTransform(vidPanel.getPixelTransform$java_awt_geom_AffineTransform(this.trTM));
if (!vidPanel.isDrawingInImageSpace$()) {
var coords=vidPanel.getCoords$();
var n=vidPanel.getFrameNumber$();
g2.transform$java_awt_geom_AffineTransform(coords.getToWorldTransform$I(n));
}g2.setPaint$java_awt_Paint(this.paint);
g2.fill$java_awt_Shape(this.mat);
this.drawnBounds=vidPanel.transformShape$java_awt_Shape(this.mat).getBounds2D$();
g2.dispose$();
});

Clazz.newMeth(C$, 'getDrawingBounds$',  function () {
return this.drawnBounds;
});

Clazz.newMeth(C$, 'getPaint$',  function () {
return this.paint;
});

Clazz.newMeth(C$, 'setPaint$java_awt_Paint',  function (paint) {
this.paint=paint;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.visible=visible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
if (!this.isValidMeasure) p$1.getWorldBounds.apply(this, []);
return this.worldBounds.getMinX$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
if (!this.isValidMeasure) p$1.getWorldBounds.apply(this, []);
return this.worldBounds.getMaxX$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
if (!this.isValidMeasure) p$1.getWorldBounds.apply(this, []);
return this.worldBounds.getMinY$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
if (!this.isValidMeasure) p$1.getWorldBounds.apply(this, []);
return this.worldBounds.getMaxY$();
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.isVisible$();
});

Clazz.newMeth(C$, 'refresh$',  function () {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
p$1.refreshCoords$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
p$1.refreshMat$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'refreshCoords$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.coords != null ) this.coords.removePropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
this.coords=panel.getCoords$();
this.coords.addPropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
}, p$1);

Clazz.newMeth(C$, 'refreshMat$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mat0=Clazz.new_($I$(3,1).c$$java_awt_Rectangle,[this.mat]);
this.mat.width=(trackerPanel.getImageWidth$()|0);
this.mat.height=(trackerPanel.getImageHeight$()|0);
var w=($I$(4).getDefaultImageWidth$()|0);
var h=($I$(4).getDefaultImageHeight$()|0);
var video=trackerPanel.getVideo$();
if (video != null ) {
var useRaw=Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo") && video.getFilterStack$().isEmpty$() ;
var d=video.getImageSize$Z(!useRaw);
if (d.width > 0) {
this.haveVideo=true;
w=d.width;
h=d.height;
}}this.mat.x=Math.min(((w - this.mat.width)/2|0), 0);
this.mat.y=Math.min(((h - this.mat.height)/2|0), 0);
if (!mat0.equals$O(this.mat)) {
this.invalidate$();
trackerPanel.scale$();
}}, p$1);

Clazz.newMeth(C$, 'checkVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (!this.haveVideo && panel.getVideo$() != null  ) p$1.refreshMat$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "transform":
this.invalidate$();
break;
case "coords":
this.refresh$();
break;
}
});

Clazz.newMeth(C$, 'cleanup$',  function () {
if (this.frame != null ) {
this.frame.getTrackerPanelForID$Integer(this.panelID).removePropertyChangeListener$S$java_beans_PropertyChangeListener("coords", this);
this.coords.removePropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
this.panelID=null;
this.frame=null;
}});

Clazz.newMeth(C$, 'getWorldBounds',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var coords=trackerPanel.getCoords$();
var clip=trackerPanel.getPlayer$().getVideoClip$();
var stepCount=clip.getStepCount$();
var at=coords.getToWorldTransform$I(clip.stepToFrame$I(0));
this.worldBounds=at.createTransformedShape$java_awt_Shape(this.mat).getBounds2D$();
for (var n=0; n < stepCount; n++) {
at=coords.getToWorldTransform$I(clip.stepToFrame$I(n));
this.worldBounds.add$java_awt_geom_Rectangle2D(at.createTransformedShape$java_awt_Shape(this.mat).getBounds2D$());
}
this.isValidMeasure=true;
}, p$1);

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(5).finalized$O(this);
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.mat;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
this.isValidMeasure=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
