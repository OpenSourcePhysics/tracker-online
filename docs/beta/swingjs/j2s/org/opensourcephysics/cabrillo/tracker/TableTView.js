(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.SwingUtilities','java.util.Arrays','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.TableTrackView','org.opensourcephysics.tools.FontSizer',['org.opensourcephysics.cabrillo.tracker.TableTView','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableTView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TrackChooserTView');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['TABLEVIEW_ICON','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
if (this.panelID != null  && this.frame != null  ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}C$.superclazz.prototype.removeNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'getViewName$',  function () {
return $I$(5).getString$S("TFrame.View.Table");
});

Clazz.newMeth(C$, 'getViewIcon$',  function () {
return C$.TABLEVIEW_ICON;
});

Clazz.newMeth(C$, 'getViewType$',  function () {
return 1;
});

Clazz.newMeth(C$, 'refreshPopup$javax_swing_JPopupMenu',  function (popup) {
var trackview=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this.selectedTrack);
if (trackview != null ) {
trackview.refreshToolbarPopup$javax_swing_JPopupMenu(popup);
}});

Clazz.newMeth(C$, 'createTrackView$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var trackView=Clazz.new_([track, this.getPanel$(), this],$I$(6,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TableTView);
$I$(7).setFonts$java_awt_Container(trackView);
return trackView;
});

Clazz.newMeth(C$, 'refreshColumnsDialog$org_opensourcephysics_cabrillo_tracker_TTrack$Z',  function (track, onlyIfVisible) {
var tableView=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (tableView != null ) tableView.refreshColumnDialog$org_opensourcephysics_cabrillo_tracker_TTrack$Z(track, onlyIfVisible);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var panel=this.getPanel$();
switch (e.getPropertyName$()) {
case "format":
var view=null;
var track=this.getSelectedTrack$();
if (track != null  && (view=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track)) != null  ) {
var frameNo=panel.getFrameNumber$();
view.refresh$I$I(frameNo, 4352);
}break;
case "tab":
if (e.getNewValue$() != null  && !this.frame.isRemovingAll$() ) {
var trackview=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this.selectedTrack);
if (trackview != null ) {
trackview.setDialogAsLastVisible$Z(e.getNewValue$() === panel  && this.isVisible$() );
}}break;
case "function":
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (this.trackViews != null ) {
for (var next, $next = this.trackViews.values$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var trackView=next;
trackView.refreshNameMaps$();
trackView.buildForNewFunction$();
}
}break;
default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
}
});

Clazz.newMeth(C$, 'cleanup$',  function () {
C$.superclazz.prototype.cleanup$.apply(this, []);
if (this.panelID != null  && this.frame != null  ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(8,1));
}, 1);

Clazz.newMeth(C$, 'refreshMenus$',  function () {
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
C$.superclazz.prototype.dispose$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.TABLEVIEW_ICON=$I$(4).getResourceIcon$S$Z("datatable.gif", true);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTView, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tableTrackView','org.opensourcephysics.cabrillo.tracker.TableTrackView','track','org.opensourcephysics.cabrillo.tracker.TTrack','view','org.opensourcephysics.cabrillo.tracker.TableTView','trackViews','java.util.Map']]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
var selectedTrack=view.getSelectedTrack$();
if (selectedTrack != null ) {
control.setValue$S$O("selected_track", selectedTrack.getName$());
var customized=Clazz.new_($I$(1,1));
var views=view.trackViews;
for (var next, $next = views.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (views.get$O(next).isCustomState$()) {
customized.add$O(next);
}}
if (!customized.isEmpty$()) {
var formattedColumns=Clazz.new_($I$(1,1));
var data=Clazz.array(String, [customized.size$(), null]);
var datasetIndices=Clazz.new_($I$(1,1));
for (var i=0, n=customized.size$(); i < n; i++) {
var track=customized.get$I(i);
var name=track.getName$();
var trackView=view.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var columns=trackView.getOrderedVisibleColumns$();
data[i]=Clazz.array(String, [columns.length + 1]);
data[i][0]=name;
System.arraycopy$O$I$O$I$I(columns, 0, data[i], 1, columns.length);
var formats=trackView.getColumnFormats$();
if (formats.length > 0) {
var withName=Clazz.array(String, [formats.length, 3]);
for (var j=0; j < formats.length; j++) {
withName[j][0]=name;
withName[j][1]=formats[j][0];
withName[j][2]=formats[j][1];
}
formattedColumns.add$O(withName);
}if (trackView.myDatasetIndex > -1) {
datasetIndices.add$O(Clazz.array(String, -1, [name, Integer.toString$I(trackView.myDatasetIndex)]));
}}
control.setValue$S$O("track_columns", data);
if (!formattedColumns.isEmpty$()) {
var patterns=formattedColumns.toArray$OA(Clazz.array(String, [formattedColumns.size$(), null, null]));
control.setValue$S$O("column_formats", patterns);
}if (!datasetIndices.isEmpty$()) {
var indices=datasetIndices.toArray$OA(Clazz.array(String, [datasetIndices.size$(), null]));
control.setValue$S$O("dataset_indices", indices);
}}}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
this.view=obj;
this.trackViews=this.view.trackViews;
var data=control.getObject$S("track_columns");
if (data != null  && this.trackViews == null  ) {
this.view.refresh$();
this.trackViews=this.view.trackViews;
}if (this.trackViews != null  && data != null  ) {
for (var i=0; i < data.length; i++) {
var columns=data[i];
if (columns != null  && p$1.setTrackAndTableView$S.apply(this, [columns[0]]) ) {
this.tableTrackView.setRefreshing$Z(false);
this.tableTrackView.bsCheckBoxes.clear$();
this.tableTrackView.bsTextColumnsVisible.clear$();
columns=C$.fixColumnList$SA$org_opensourcephysics_cabrillo_tracker_TTrack(columns, this.track);
for (var j=1; j < columns.length; j++) {
this.tableTrackView.setVisible$S$Z(columns[j]=C$.fixColumnName$S$org_opensourcephysics_cabrillo_tracker_TTrack(columns[j], this.track), true);
}
p$1.setColumnOrder$org_opensourcephysics_cabrillo_tracker_TableTrackView$org_opensourcephysics_cabrillo_tracker_TTrack$SA.apply(this, [this.tableTrackView, this.track, columns]);
this.tableTrackView.setRefreshing$Z(true);
}}
var formats=control.getObject$S("column_formats");
if (formats != null ) {
for (var i=0; i < formats.length; i++) {
var patterns=formats[i];
if (p$1.setTrackAndTableView$S.apply(this, [patterns[0][0]])) {
this.tableTrackView.setRefreshing$Z(false);
for (var j=0; j < patterns.length; j++) {
this.tableTrackView.dataTable.setFormatPattern$S$S(patterns[j][1], patterns[j][2]);
}
this.tableTrackView.setRefreshing$Z(true);
}}
}var datasetIndices=control.getObject$S("dataset_indices");
if (datasetIndices != null ) {
for (var i=0; i < datasetIndices.length; i++) {
var indices=datasetIndices[i];
if (p$1.setTrackAndTableView$S.apply(this, [indices[0]])) {
this.tableTrackView.setRefreshing$Z(false);
this.tableTrackView.setDatasetIndex$I(Integer.parseInt$S(indices[1]));
this.tableTrackView.setRefreshing$Z(true);
}}
}}var selectedTrack=this.view.getTrack$S(control.getString$S("selected_track"));
if (selectedTrack != null ) {
this.view.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(selectedTrack);
var visibleColumns=control.getObject$S("visible_columns");
if (visibleColumns != null ) {
this.tableTrackView=this.view.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(selectedTrack);
this.tableTrackView.setRefreshing$Z(false);
this.tableTrackView.bsCheckBoxes.clear$();
for (var i=0; i < visibleColumns.length; i++) {
this.tableTrackView.setVisible$S$Z(C$.fixColumnName$S$org_opensourcephysics_cabrillo_tracker_TTrack(visibleColumns[i], selectedTrack), true);
}
this.tableTrackView.setRefreshing$Z(true);
this.tableTrackView.refresh$I$I(this.view.getPanel$().getFrameNumber$(), 6144);
}}this.tableTrackView=null;
this.view=null;
this.trackViews=null;
return obj;
});

Clazz.newMeth(C$, 'setTrackAndTableView$S',  function (name) {
for (var track, $track = this.trackViews.keySet$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if ((this.tableTrackView=this.view.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track)) != null  && name.equals$O(track.getName$()) ) {
this.track=track;
return true;
}}
this.tableTrackView=null;
return false;
}, p$1);

Clazz.newMeth(C$, 'fixColumnName$S$org_opensourcephysics_cabrillo_tracker_TTrack',  function (name, track) {
switch (name) {
case "theta":
return (track.ttype == 5 ? "\u03b8r" : "\u03b8");
case "theta_v":
return "\u03b8v";
case "theta_a":
return "\u03b8a";
case "theta_p":
return "\u03b8p";
case "n":
return (track.ttype == 5 ? "step" : name);
case "KE":
return "K";
case "x-comp":
return "x";
case "y-comp":
return "y";
case "x_tail":
return "xtail";
case "y_tail":
return "ytail";
case "vx":
case "vy":
case "ax":
case "ay":
case "px":
case "py":
case "pixelx":
case "pixely":
return name.substring$I$I(0, name.length$() - 1) + "_{" + name.charAt$I(name.length$() - 1) + "}" ;
}
return name;
}, 1);

Clazz.newMeth(C$, 'fixColumnList$SA$org_opensourcephysics_cabrillo_tracker_TTrack',  function (columns, track) {
var indepVar=track.getDataName$I(0);
if (columns.length < 2 || indepVar.equals$O(columns[1]) ) return columns;
var newCols=Clazz.array(String, [columns.length + 1]);
newCols[0]=columns[0];
newCols[1]=indepVar;
for (var i=1; i < columns.length; i++) {
newCols[i + 1]=columns[i];
}
return newCols;
}, 1);

Clazz.newMeth(C$, 'setColumnOrder$org_opensourcephysics_cabrillo_tracker_TableTrackView$org_opensourcephysics_cabrillo_tracker_TTrack$SA',  function (tableView, track, columns) {
var checkedBoxes=tableView.getVisibleColumns$();
if (checkedBoxes.length == 0) return;
var visibleColumns=Clazz.array(String, [checkedBoxes.length + 1]);
visibleColumns[0]=track.getDataName$I(0);
System.arraycopy$O$I$O$I$I(checkedBoxes, 0, visibleColumns, 1, checkedBoxes.length);
var desiredOrder=Clazz.array(String, [columns.length - 1]);
System.arraycopy$O$I$O$I$I(columns, 1, desiredOrder, 0, desiredOrder.length);
var desiredIndexes=Clazz.array(Integer.TYPE, [desiredOrder.length]);
for (var k=0; k < desiredOrder.length; k++) {
var name=desiredOrder[k];
for (var g=0; g < visibleColumns.length; g++) {
if (visibleColumns[g].equals$O(name)) {
desiredIndexes[k]=g;
}}
}
$I$(2,"invokeLater$Runnable",[((P$.TableTView$Loader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TableTView$Loader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
this.$finals$.tableView.dataTable.setModelColumnOrder$IA.apply(this.$finals$.tableView.dataTable, [this.$finals$.desiredIndexes]);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
System.err.println$S.apply(System.err, ["TableTView.Loader invokelater exception " + $I$(3).toString$IA(this.$finals$.desiredIndexes)]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.TableTView$Loader$lambda1.$init$,[this, {desiredIndexes:desiredIndexes,tableView:tableView}]))]);
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
