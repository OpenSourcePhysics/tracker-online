(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.HashMap','org.opensourcephysics.cabrillo.tracker.CircleFootprint','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.cabrillo.tracker.PerspectiveStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],['org.opensourcephysics.display.OSPRuntime','.Supported'],'org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.controls.XMLControlElement','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.TTrack']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PerspectiveTrack", null, 'org.opensourcephysics.cabrillo.tracker.TTrack');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['filterState'],'O',['filter','org.opensourcephysics.media.core.PerspectiveFilter']]
,['I',['n'],'O',['filterProps','String[]','filterMap','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_PerspectiveFilter',  function (filter) {
;C$.superclazz.c$$I.apply(this,[10]);C$.$init$.apply(this);
this.filter=filter;
C$.filterMap.put$O$O(filter, this);
this.viewable=false;
var c=$I$(2).getFootprint$S("CircleFootprint.Circle");
c.setColor$java_awt_Color(filter.getColor$());
c.setSpotShown$Z(false);
c.setAlpha$I(0);
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(3), -1, [c]));
this.setName$S($I$(4).getString$S("Filter.Perspective.Title").toLowerCase$() + " " + String.valueOf$C(String.fromCharCode((65 + C$.n))) );
var step=Clazz.new_($I$(5,1).c$$org_opensourcephysics_cabrillo_tracker_PerspectiveTrack$I$D$D,[this, 0, 0, 0]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(6,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
$I$(7).addListeners$org_opensourcephysics_display_OSPRuntime_Supported$SA$java_beans_PropertyChangeListener(filter, C$.filterProps, this);
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
C$.filterMap.remove$O(this.filter);
$I$(7).removeListeners$org_opensourcephysics_display_OSPRuntime_Supported$SA$java_beans_PropertyChangeListener(this.filter, C$.filterProps, this);
this.filter=null;
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("selectedpoint", this);
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("selectedtrack", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("selectedpoint", this);
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("selectedtrack", this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "filter_color":
this.setColor$java_awt_Color(e.getNewValue$());
break;
case "enabled":
case "tab":
case "filter_visible":
if (this.tp.getSelectedTrack$() === this ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.tp.selectedSteps.clear$();
}var visible=this.filter.hasInspector$() && this.filter.getInspector$().isVisible$() ;
if (visible) {
this.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
} else {
this.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}break;
case "fixed":
$I$(8,"postFilterEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter$org_opensourcephysics_controls_XMLControl",[this.tp, this.filter, Clazz.new_([e.getOldValue$()],$I$(9,1).c$$S)]);
break;
case "cornerlocation":
var filtercorner=e.getNewValue$();
var i=this.filter.getCornerIndex$org_opensourcephysics_media_core_PerspectiveFilter_Corner(filtercorner);
var n=this.tp.getFrameNumber$();
if (this.filter.isInputEnabled$() && i < 4 ) {
this.getStep$I(n).points[i].setXY$D$D(filtercorner.getX$(), filtercorner.getY$());
}break;
case "selectedtrack":
if (e.getNewValue$() === this ) {
if (this.filter.hasInspector$() && !this.filter.getInspector$().isVisible$() ) {
this.filter.getInspector$().setVisible$Z(true);
}}break;
case "selectedpoint":
if (e.getOldValue$() != null  && this.filterState != null  ) {
var p=e.getOldValue$();
if (Clazz.instanceOf(p, "org.opensourcephysics.media.core.PerspectiveFilter.Corner")) {
$I$(8,"postFilterEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter$org_opensourcephysics_controls_XMLControl",[this.tp, this.filter, Clazz.new_($I$(9,1).c$$S,[this.filterState])]);
this.filterState=null;
}}if (e.getNewValue$() != null ) {
if (Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.media.core.PerspectiveFilter.Corner") && this.filterState == null  ) {
this.filterState=Clazz.new_($I$(9,1).c$$O,[this.filter]).toXML$();
}}break;
}
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
this.partName=null;
this.hint=null;
return null;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu) {
if (menu == null ) menu=Clazz.new_($I$(10,1));
menu.setText$S(this.getName$S("track"));
menu.setIcon$javax_swing_Icon(this.getFootprint$().getIcon$I$I(21, 16));
return menu;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
var s=$I$(4).getString$S("Filter.Perspective.Title").toLowerCase$();
if (this.partName != null ) s+=" " + this.partName;
if (this.isLocked$()) {
this.hint=$I$(11).getString$S("TTrack.Locked.Hint");
}if ($I$(12).showHints && this.hint != null  ) s+=" (" + this.hint + ")" ;
return s;
});

Clazz.newMeth(C$, 'getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (p, trackerPanel) {
if (Clazz.instanceOf(p, "org.opensourcephysics.media.core.PerspectiveFilter.Corner")) {
var corner=p;
var i=this.filter.getCornerIndex$org_opensourcephysics_media_core_PerspectiveFilter_Corner(corner);
if (i > -1) {
this.partName=this.getTargetDescription$I(i);
this.hint=$I$(11).getString$S("PerspectiveTrack.Corner.Hint");
return this.getStep$I(trackerPanel.getFrameNumber$());
}}return C$.superclazz.prototype.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [p, trackerPanel]);
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
if (this.locked) return null;
var p=this.tp.getSelectedPoint$();
if (Clazz.instanceOf(p, "org.opensourcephysics.media.core.PerspectiveFilter.Corner")) {
var corner=p;
this.filter.deleteKeyFrame$I$org_opensourcephysics_media_core_PerspectiveFilter_Corner(n, corner);
$I$(13).repaintT$java_awt_Component(this.tp);
}var step=this.getStep$I(n);
return step;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
var index=this.getTargetIndex$();
var step=this.getStep$I(n);
step.points[index].setXY$D$D(x, y);
this.filter.setCornerLocation$I$I$D$D(n, index, x, y);
return this.getMarkedPoint$I$I(n, index);
});

Clazz.newMeth(C$, 'getMarkedPoint$I$I',  function (n, index) {
var step=this.getStep$I(n);
return step.points[index];
});

Clazz.newMeth(C$, 'setTargetIndex$org_opensourcephysics_media_core_TPoint',  function (p) {
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this.tp);
if (step != null ) this.setTargetIndex$I(step.getPointIndex$org_opensourcephysics_media_core_TPoint(p));
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
if (pointIndex < 4) {
return $I$(11).getString$S("PerspectiveTrack.Corner.Input") + " " + pointIndex ;
}return $I$(11).getString$S("PerspectiveTrack.Corner.Output") + " " + (pointIndex - 4) ;
});

Clazz.newMeth(C$, 'isAutoTrackable$I',  function (pointIndex) {
return pointIndex < 4;
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return 4;
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
this.autoMarkAt$I$D$D(n, x, y);
return this.getStep$I(n);
});

Clazz.newMeth(C$, 'remark$Integer',  function (panelID) {
});

Clazz.newMeth(C$, 'getFormatMap$',  function () {
return $I$(14).NOMAP;
});

Clazz.newMeth(C$, 'getFormatDescMap$',  function () {
return $I$(14).NOMAPS;
});

Clazz.newMeth(C$, 'getFormatVariables$',  function () {
return $I$(14).NOVARS;
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
return null;
});

Clazz.newMeth(C$, 'getBaseType$',  function () {
return "PerspectiveTrack";
});

C$.$static$=function(){C$.$static$=0;
C$.filterProps=Clazz.array(String, -1, ["filter_color", "filter_visible", "enabled", "tab", "cornerlocation", "fixed"]);
C$.n=0;
C$.filterMap=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
