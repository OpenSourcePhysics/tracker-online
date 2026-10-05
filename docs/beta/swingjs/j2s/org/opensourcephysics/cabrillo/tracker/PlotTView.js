(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.PlotTrackView',['org.opensourcephysics.cabrillo.tracker.PlotTView','.Loader'],'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlotTView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TrackChooserTView');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['PLOTVIEW_ICON','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getViewName$',  function () {
return $I$(3).getString$S("TFrame.View.Plot");
});

Clazz.newMeth(C$, 'getViewIcon$',  function () {
return C$.PLOTVIEW_ICON;
});

Clazz.newMeth(C$, 'getViewType$',  function () {
return 0;
});

Clazz.newMeth(C$, 'createTrackView$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
return Clazz.new_([track, this.getPanel$(), this],$I$(4,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_PlotTView);
});

Clazz.newMeth(C$, 'refreshMenus$',  function () {
if (this.trackViews == null ) return;
for (var next, $next = this.trackViews.values$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var plots=next;
for (var panel, $panel = 0, $$panel = plots.plots; $panel<$$panel.length&&((panel=($$panel[$panel])),1);$panel++) {
panel.clearPopup$();
}
}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'addTrackView$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var v=this.createTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (this.trackViews == null ) this.trackViews=Clazz.new_($I$(6,1));
this.trackViews.put$O$O(track, v);
return v;
});

C$.$static$=function(){C$.$static$=0;
C$.PLOTVIEW_ICON=$I$(2).getResourceIcon$S$Z("plot.gif", true);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlotTView, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
var track=view.getSelectedTrack$();
if (track != null ) {
control.setValue$S$O("selected_track", track.getName$());
var list=Clazz.new_($I$(1,1));
for (var next, $next = view.trackViews.values$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.isCustomState$()) list.add$O(next);
}
if (!list.isEmpty$()) control.setValue$S$O("track_views", list);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
var trackViewsProp=null;
var props=control.getPropsRaw$();
for (var i=0, n=props.size$(); i < n; i++) {
var prop=props.get$I(i);
if (prop.getPropertyName$().equals$O("track_views")) {
trackViewsProp=prop;
break;
}}
var track=view.getTrack$S(control.getString$S("selected_track"));
if (track != null ) {
view.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (trackViewsProp == null ) {
var trackView=view.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (trackView != null ) {
var plots=trackView.plots;
for (var i=0; i < plots.length; i++) {
var child=control.getChildControl$S("plot" + i);
if (child != null ) {
child.loadObject$O(plots[i]);
} else {
trackView.setPlotCount$I(Math.max(1, i));
break;
}}
}}}if (trackViewsProp != null ) {
var controls=trackViewsProp.getChildControls$();
for (var j=0; j < controls.length; j++) {
var trackName=controls[j].getString$S("track");
track=view.getTrack$S(trackName);
if (track != null ) {
var v=view.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (v == null ) v=view.addTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
controls[j].loadObject$O(v);
}}
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
