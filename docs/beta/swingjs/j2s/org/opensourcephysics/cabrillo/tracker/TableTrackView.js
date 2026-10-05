(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTextField','javax.swing.BorderFactory','java.awt.Color','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter',['org.opensourcephysics.media.core.NumberField','.NumberFormatter'],'javax.swing.table.DefaultTableCellRenderer','org.opensourcephysics.cabrillo.tracker.Tracker',['org.opensourcephysics.cabrillo.tracker.TableTrackView','.NumberRenderer'],['org.opensourcephysics.cabrillo.tracker.TableTrackView','.SkippedFramesRenderer'],['org.opensourcephysics.cabrillo.tracker.TableTrackView','.HeaderUnitsRenderer'],'java.awt.GridLayout','javax.swing.JScrollPane','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JPopupMenu','org.opensourcephysics.tools.FontSizer','javax.swing.JLabel','javax.swing.JToggleButton','javax.swing.JRadioButton','javax.swing.JCheckBox','org.opensourcephysics.display.TeXParser','java.util.BitSet','java.awt.Point','java.util.HashMap','java.util.ArrayList','java.util.TreeSet',['org.opensourcephysics.cabrillo.tracker.TableTrackView','.TextColumnTableModel'],['org.opensourcephysics.cabrillo.tracker.TableTrackView','.TextColumnEditor'],['org.opensourcephysics.cabrillo.tracker.TableTrackView','.TrackDataTable'],'org.opensourcephysics.display.DatasetManager','java.awt.Dimension','java.awt.event.MouseAdapter','javax.swing.SwingUtilities','org.opensourcephysics.tools.ToolsRes','java.util.LinkedHashMap','org.opensourcephysics.display.Dataset','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.cabrillo.tracker.TTrack',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.ComponentImage'],'org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.display.MeasuredImage','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.display.OSPRuntime','javax.swing.KeyStroke','org.opensourcephysics.cabrillo.tracker.TrackerIO','javax.swing.AbstractAction','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.DataTool','org.opensourcephysics.tools.DataRefreshTool','org.opensourcephysics.tools.LocalJob','javax.swing.JMenuItem','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.NumberFormatDialog','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.display.GUIUtils','javajs.async.AsyncDialog',['org.opensourcephysics.cabrillo.tracker.TableTrackView','.ColumnsDialog']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableTrackView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TrackView');
C$.$classes$=[['TextColumnTableModel',2],['TextColumnEditor',0],['NumberRenderer',0],['SkippedFramesRenderer',0],['TrackDataTable',0],['HeaderUnitsRenderer',1],['ColumnsDialog',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bsCheckBoxes=Clazz.new_($I$(25,1));
this.refreshing=true;
this.refreshed=false;
this.$font=Clazz.new_($I$(3,1)).getFont$();
this.degreeRenderers=Clazz.new_($I$(27,1));
this.textColumnNames=Clazz.new_($I$(28,1));
this.bsTextColumnsVisible=Clazz.new_($I$(25,1));
this.selectedIndepVarValues=Clazz.new_($I$(29,1));
},1);

C$.$fields$=[['Z',['dialogLastVisible','showAllColumns','refreshing','refreshed','haveMenuItems'],'I',['colCount','datasetCount','varCount','leadCol'],'O',['trackDataManager','org.opensourcephysics.display.DatasetManager','+dataTableManager','bsCheckBoxes','java.util.BitSet','htNames','java.util.Map','aNames','String[]','$font','java.awt.Font','degreeRenderers','java.util.Map','textColumnNames','java.util.ArrayList','bsTextColumnsVisible','java.util.BitSet','selectedIndepVarValues','java.util.TreeSet','dataTable','org.opensourcephysics.cabrillo.tracker.TableTrackView.TrackDataTable','textColumnEditor','org.opensourcephysics.cabrillo.tracker.TableTrackView.TextColumnEditor','textColumnModel','org.opensourcephysics.cabrillo.tracker.TableTrackView.TextColumnTableModel','columnsDialogButton','javax.swing.JButton','+gapsButton','+multipleFramesButton','multiframeCheckbox','javax.swing.JCheckBox','columnsDialog','org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog','popup','javax.swing.JPopupMenu','textColumnMenu','javax.swing.JMenu','+deleteTextColumnMenu','+renameTextColumnMenu','createTextColumnItem','javax.swing.JMenuItem','+dataToolItem','+dataBuilderItem','+deleteDataFunctionItem','numberMenu','javax.swing.JMenu','goToFrameItem','javax.swing.JMenuItem','+formatDialogItem','+setUnitsItem','+showUnitsItem','copyDataMenu','javax.swing.JMenu','copyDataRawItem','javax.swing.JMenuItem','+copyDataFormattedItem','setDelimiterMenu','javax.swing.JMenu','includeHeadersItem','javax.swing.JMenuItem','+copyImageItem','+snapshotItem','+printItem','+helpItem']]
,['O',['SKIPS_ON_ICON','javax.swing.Icon','+SKIPS_OFF_ICON']]]

Clazz.newMeth(C$, 'setRefreshing$Z',  function (b) {
this.refreshing=b;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TableTView',  function (track, panel, view) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackChooserTView$I.apply(this,[track, panel, view, 1]);C$.$init$.apply(this);
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("text_column", this);
this.textColumnNames.addAll$java_util_Collection(track.getTextColumnNames$());
this.textColumnModel=Clazz.new_($I$(30,1),[this, null]);
this.textColumnEditor=Clazz.new_($I$(31,1),[this, null]);
this.dataTable=Clazz.new_($I$(32,1),[this, null]);
this.trackDataManager=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(panel, this.myDatasetIndex);
this.dataTableManager=Clazz.new_($I$(33,1));
this.dataTableManager.setXPointsLinked$Z(true);
this.dataTable.add$javax_swing_table_TableModel(this.dataTableManager.model);
this.dataTable.add$javax_swing_table_TableModel(this.textColumnModel);
this.setViewportView$java_awt_Component(this.dataTable);
this.dataTable.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(34,1).c$$I$I,[160, 200]));
this.addMouseListener$java_awt_event_MouseListener(((P$.TableTrackView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.clearSelection$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.requestFocusInWindow$();
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TableTrackView$1)));
this.dataTable.addMouseListener$java_awt_event_MouseListener(((P$.TableTrackView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.requestFocusInWindow$();
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TableTrackView$2)));
this.dataTable.addKeyListener$java_awt_event_KeyListener(((P$.TableTrackView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 32) {
var row=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.getSelectedRow$();
var col=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.getSelectedColumn$();
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.editCellAt$I$I(row, col);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].textColumnEditor.field.selectAll$();
var runner=((P$.TableTrackView$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].textColumnEditor.field.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.TableTrackView$3$1.$init$,[this, null]));
$I$(36).invokeLater$Runnable(runner);
}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.TableTrackView$3)));
var selectionModel=this.dataTable.getSelectionModel$();
selectionModel.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.TableTrackView$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].selectedIndepVarValues.clear$();
var rows=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.getSelectedRows$();
for (var i=0; i < rows.length; i++) {
var val=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getIndepVarValueAtRow$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [rows[i]]);
if (!Double.isNaN$D(val)) this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].selectedIndepVarValues.add$O(Double.valueOf$D(val));
}
});
})()
), Clazz.new_(P$.TableTrackView$4.$init$,[this, null])));
this.setToolTipText$S($I$(37).getString$S("DataToolTab.Scroller.Tooltip"));
this.highlightVisible=(track.ttype != 3);
this.refreshNameMaps$();
this.createGUI$();
var useDefault=true;
for (var i=0; i < 4; i++) {
var col=track.getProperty$S("tableVar" + i);
if (col != null ) {
this.setVisible$I$Z(Integer.parseInt$S(col), true);
useDefault=false;
}}
if (useDefault) {
this.setVisible$I$Z(0, true);
this.setVisible$I$Z(1, true);
}var patterns=panel.getFormatPatterns$I(track.ttype);
var table=this.getDataTable$();
for (var e, $e = patterns.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
table.setFormatPattern$S$S(e.getKey$(), e.getValue$());
}
this.prevDatasetIndex=5;
}, 1);

Clazz.newMeth(C$, 'refreshNameMaps$',  function () {
if (this.myDatasetIndex > -1) return;
this.htNames=Clazz.new_($I$(38,1));
var sets=this.trackDataManager.getDatasetsRaw$();
var textSet=this.textColumnNames;
this.datasetCount=sets.size$();
this.colCount=this.datasetCount + textSet.size$();
this.aNames=Clazz.array(String, [this.colCount]);
this.varCount=0;
for (var i=0; i < this.datasetCount; i++) {
var next=sets.get$I(i);
var name=next.getYColumnName$();
this.aNames[i]=name;
this.htNames.put$O$O(name, Integer.valueOf$I(i));
if (next.getClass$() === Clazz.getClass($I$(39)) ) ++this.varCount;
}
for (var i=0, n=textSet.size$(); i < n; i++) {
var name=textSet.get$I(i);
this.aNames[this.datasetCount + i]=name;
this.htNames.put$O$O(name, Integer.valueOf$I(this.datasetCount + i));
}
});

Clazz.newMeth(C$, 'refresh$I$I',  function (frameNumber, mode) {
this.forceRefresh=false;
if (!this.forceRefresh && !this.isRefreshEnabled$()  || !this.viewParent.isViewPaneVisible$() ) return;
this.forceRefresh=false;
if (mode == 6400) {
$I$(19).setFonts$java_awt_Container(this.columnsDialogButton);
$I$(19).setFonts$java_awt_Container(this.gapsButton);
$I$(19).setFonts$java_awt_Container(this.multipleFramesButton);
$I$(19).setFonts$java_awt_Container(this.multiframeCheckbox);
}if (this.isClipAdjusting$()) return;
if (mode == 7168 && Clazz.instanceOf(this.getTrack$(), "org.opensourcephysics.cabrillo.tracker.PointMass") ) {
var chooser=this.getOwner$();
if (chooser != null ) {
chooser.refreshToolbar$();
}}if ($I$(10).timeLogEnabled) $I$(10,"logTime$S",[this.getClass$().getSimpleName$() + this.hashCode$() + " refresh " + frameNumber ]);
this.dataTable.clearSelection$();
var track=this.getTrack$();
var highlightCol=-1;
try {
var tp=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.trackDataManager=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(tp, this.myDatasetIndex);
if (this.datasetCount != this.trackDataManager.getDatasetsRaw$().size$()) this.refreshNameMaps$();
var datasets=this.trackDataManager.getDatasetsRaw$();
var count=datasets.size$();
if (count > 0) this.dataTable.setUnits$S$S$S(datasets.get$I(0).getXColumnName$(), "", track.getDataDescription$I(0));
var degrees=!tp.isAnglesInRadians$();
this.dataTableManager.clear$();
var colCount=0;
for (var i=0; i < count; i++) {
if (!this.showAllColumns && !this.bsCheckBoxes.get$I(i) ) continue;
var ds=datasets.get$I(i);
var xTitle=ds.getXColumnName$();
var yTitle=ds.getYColumnName$();
var yVarName=yTitle;
if (this.myDatasetIndex > -1) {
var k=yVarName.indexOf$S("_{ ");
if (k > 0) {
if (highlightCol == -1) try {
var num=yVarName.substring$I$I(k + 3, yVarName.indexOf$S("}"));
if (frameNumber == Integer.parseInt$S(num)) {
highlightCol=i + 1;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
yVarName=yVarName.substring$I$I(0, k);
}}var yPoints=ds.getYPoints$();
var refreshUnits=this.myDatasetIndex == -1 || i < 2 ;
if (refreshUnits && p$2.setUnitsAndTooltip$S$S$Z.apply(this, [yVarName, track.getDataDescription$I(i + 1), degrees]) ) {
for (var k=0; k < yPoints.length; k++) {
if (!Double.isNaN$D(yPoints[k])) {
yPoints[k]*=57.29577951308232;
}}
}var local=this.dataTableManager.getDataset$I(colCount++);
local.append$DA$DA$I(ds.getXPointsRaw$(), yPoints, ds.getIndex$());
local.setXYColumnNames$S$S(xTitle, yTitle);
local.setYColumnVisible$Z(true);
}
for (var i=colCount; i < this.dataTableManager.getDatasetsRaw$().size$(); i++) {
this.dataTableManager.setYColumnVisible$I$Z(i, false);
}
if (colCount == 0 && count > 0 ) {
var $in=datasets.get$I(0);
var xTitle=$in.getXColumnName$();
var local=this.dataTableManager.getDataset$I(colCount++);
var x=$in.getXPointsRaw$();
local.append$DA$DA$I(x, x, $in.getIndex$());
local.setXYColumnNames$S$S(xTitle, xTitle);
local.setYColumnVisible$Z(false);
++colCount;
}this.dataTable.refreshColumnModel$();
if (this.isRefreshEnabled$()) this.dataTable.refreshTable$I(mode);
this.refreshed=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(40).debug$S("TableTrackView exception " + e);
e.printStackTrace$();
} else {
throw e;
}
}
this.highlightFrames$I(frameNumber);
if (this.getTrack$().getClass$().getSimpleName$().equals$O("LineProfile")) {
this.dataTable.getTableHeader$().repaint$();
var lp=this.getTrack$();
if (lp.isMultipleFrames$()) {
p$2.highlightColumnForFrame$I.apply(this, [highlightCol]);
return;
}}p$2.highlightRowForFrame$I.apply(this, [frameNumber]);
});

Clazz.newMeth(C$, 'setUnitsAndTooltip$S$S$Z',  function (yTitle, root, degrees) {
var yIsAngle=yTitle.startsWith$S($I$(10).THETA) || yTitle.startsWith$S($I$(10).OMEGA) || yTitle.startsWith$S($I$(10).ALPHA)  ;
var tooltip=root + " ";
var units="";
if (yIsAngle) {
var t=this.frame.getTrackerPanelForID$Integer(this.panelID).getTimeUnit$();
if (degrees) {
tooltip+=$I$(17).getString$S("TableTrackView.Degrees.Tooltip");
} else {
tooltip+=$I$(17).getString$S("TableTrackView.Radians.Tooltip");
}if (yTitle.startsWith$S($I$(10).THETA)) {
if (degrees) {
units="\u00b0";
}} else if (yTitle.startsWith$S($I$(10).OMEGA)) {
tooltip+="/" + t;
} else if (yTitle.startsWith$S($I$(10).ALPHA)) {
tooltip+="/" + t + "^2" ;
}var precisionRenderer=this.dataTable.getPrecisionRenderer$S(yTitle);
if (degrees) {
if (precisionRenderer == null ) {
this.dataTable.setFormatPattern$S$S(yTitle, "0.0");
this.degreeRenderers.put$O$O(yTitle, this.dataTable.getPrecisionRenderer$S(yTitle));
}} else if (precisionRenderer != null ) {
if (precisionRenderer === this.degreeRenderers.get$O(yTitle) ) {
this.dataTable.setFormatPattern$S$S(yTitle, null);
this.degreeRenderers.remove$O(yTitle);
}}}if ("".equals$O(tooltip.trim$())) tooltip="";
this.dataTable.setUnits$S$S$S(yTitle, units, tooltip);
return yIsAngle && degrees ;
}, p$2);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
var track=this.getTrack$();
this.columnsDialogButton.setText$S($I$(17).getString$S("TableTrackView.Button.SelectTableData"));
this.columnsDialogButton.setToolTipText$S($I$(17).getString$S("TableTrackView.Button.SelectTableData.ToolTip"));
this.gapsButton.setToolTipText$S($I$(17).getString$S("TableTrackView.Button.SkippedFrames.ToolTip"));
this.multiframeCheckbox.setSelected$Z(this.myDatasetIndex > -1 ? true : false);
this.multiframeCheckbox.setText$S($I$(17).getString$S("TableTrackView.Checkbox.Multiframe"));
this.multiframeCheckbox.setToolTipText$S($I$(17).getString$S("TableTrackView.Button.SwitchTo.Tooltip"));
if (track.ttype == 3) {
var lp=track;
this.multiframeCheckbox.setEnabled$Z(lp.isFixed$());
}var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.trackDataManager=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, this.myDatasetIndex);
this.refresh$I$I(trackerPanel.getFrameNumber$(), 4352);
if (this.columnsDialog == null  || !this.columnsDialog.isVisible$() ) return;
p$1.refreshGUI.apply(this.columnsDialog, []);
});

Clazz.newMeth(C$, 'refreshGapsButton',  function () {
var track=this.getTrack$();
if (track.ttype == 5) {
var p=track;
var hasGaps=p.hasGaps$();
var hasSkips=p.skippedSteps.size$() > 0;
this.gapsButton.setIcon$javax_swing_Icon(!hasGaps ? null : this.gapsButton.isSelected$() ? C$.SKIPS_ON_ICON : C$.SKIPS_OFF_ICON);
this.gapsButton.setEnabled$Z(hasGaps || hasSkips );
}}, p$2);

Clazz.newMeth(C$, 'getDataTable$',  function () {
return this.dataTable;
});

Clazz.newMeth(C$, 'getToolBarComponents$',  function () {
this.toolbarComponents.clear$();
switch (this.getTrack$().ttype) {
case 5:
this.toolbarComponents.add$O(this.gapsButton);
p$2.refreshGapsButton.apply(this, []);
break;
case 3:
this.multiframeCheckbox.setSelected$Z(this.myDatasetIndex > -1 ? true : false);
this.toolbarComponents.add$O(this.multiframeCheckbox);
break;
}
return this.toolbarComponents;
});

Clazz.newMeth(C$, 'getViewButton$',  function () {
return this.columnsDialogButton;
});

Clazz.newMeth(C$, 'isCustomState$',  function () {
if (!this.refreshed) {
this.forceRefresh=true;
this.refresh$I$I(this.frame.getTrackerPanelForID$Integer(this.panelID).getFrameNumber$(), 4352);
}if (!this.bsCheckBoxes.get$I(0) || !this.bsCheckBoxes.get$I(1) || this.bsCheckBoxes.cardinality$() > 2  ) {
return true;
}if (this.myDatasetIndex > -1) return true;
var model=this.dataTable.getColumnModel$();
var count=model.getColumnCount$();
if (count == 0) {
return false;
}for (var i=0, prev=-1; i < count; i++) {
var mi=model.getTableColumn$I(i).getModelIndex$();
if (mi < prev) {
return true;
}prev=mi;
}
return false;
});

Clazz.newMeth(C$, 'setVisible$I$Z',  function (index, visible) {
this.bsCheckBoxes.set$I$Z(index, visible);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.refresh$I$I(trackerPanel.getFrameNumber$(), 5888);
});

Clazz.newMeth(C$, 'setVisible$S$Z',  function (name, visible) {
var i=this.htNames.get$O(name);
if (i == null ) return;
var index=i.intValue$();
if (index >= this.trackDataManager.getDatasetsRaw$().size$()) {
var names=this.getTrack$().getTextColumnNames$();
for (var j=0; j < names.size$(); j++) {
var next=names.get$I(j);
if (next.equals$O(name)) {
this.bsTextColumnsVisible.set$I$Z(j, visible);
break;
}}
}this.setVisible$I$Z(index, visible);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.trackDataManager=null;
this.getTrack$().removePropertyChangeListener$S$java_beans_PropertyChangeListener("text_column", this);
this.setViewportView$java_awt_Component(null);
if (this.columnsDialog != null ) {
this.columnsDialog.setVisible$Z(false);
this.columnsDialog.dispose$();
this.columnsDialog=null;
}this.dataTableManager.clear$();
this.dataTableManager=null;
this.dataTable.dispose$();
this.dataTable=null;
this.viewParent=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'highlightRowForFrame$I',  function (frameNumber) {
this.highlightRows.clear$();
if (!this.highlightVisible || this.dataTable.getRowCount$() == 0 ) return;
var frames=this.trackDataManager.getFrameDataset$();
if (frames != null ) {
var vals=frames.getYPoints$();
for (var j=vals.length; --j >= 0; ) {
if (this.highlightFrames.get$I((vals[j]|0))) this.highlightRows.set$I(this.dataTable.getSortedRow$I(j));
}
}this.dataTable.clearSelection$();
if (this.highlightRows.isEmpty$() || !this.isRefreshEnabled$() ) {
return;
}try {
this.dataTable.selectTableRowsBS$java_util_BitSet$I(this.highlightRows, 0);
if (this.highlightRows.cardinality$() == 1) {
this.dataTable.scrollRowToVisible$I(this.highlightRows.nextSetBit$I(0));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
var cols=this.dataTable.getColumnCount$();
this.dataTable.setColumnSelectionInterval$I$I(0, cols - 1);
}, p$2);

Clazz.newMeth(C$, 'highlightColumnForFrame$I',  function (highlightCol) {
this.highlightRows.clear$();
if (highlightCol < 0) return;
this.highlightRows.set$I(highlightCol);
this.dataTable.clearSelection$();
if (this.highlightRows.isEmpty$() || !this.isRefreshEnabled$() ) {
return;
}try {
this.dataTable.selectTableColsBS$java_util_BitSet(this.highlightRows);
if (this.highlightRows.cardinality$() == 1) {
this.dataTable.scrollColumnToVisible$I(this.highlightRows.nextSetBit$I(0));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
var rows=this.dataTable.getRowCount$();
this.dataTable.setRowSelectionInterval$I$I(0, rows - 1);
}, p$2);

Clazz.newMeth(C$, 'getVisibleColumns$',  function () {
var list=Clazz.new_($I$(28,1));
for (var e, $e = this.htNames.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (this.bsCheckBoxes.get$I((e.getValue$()).$c())) list.add$O(e.getKey$());
}
return list.toArray$OA(Clazz.array(String, [list.size$()]));
});

Clazz.newMeth(C$, 'getOrderedVisibleColumns$',  function () {
var model=this.dataTable.getColumnModel$();
var modelIndexes=Clazz.array(Integer, [model.getColumnCount$()]);
for (var i=0; i < modelIndexes.length; i++) {
modelIndexes[i]=Integer.valueOf$I(model.getTableColumn$I(i).getModelIndex$());
}
var dependentVars=this.getVisibleColumns$();
var columnNames=Clazz.array(String, [dependentVars.length + 1]);
var track=this.getTrack$();
columnNames[0]=track.getDataName$I(0);
System.arraycopy$O$I$O$I$I(dependentVars, 0, columnNames, 1, dependentVars.length);
var ordered=Clazz.array(String, [columnNames.length]);
if (columnNames.length == 1) {
ordered[0]=columnNames[0];
} else for (var i=0; i < ordered.length; i++) {
if (i >= modelIndexes.length || (modelIndexes[i]).$c() >= columnNames.length  ) continue;
ordered[i]=columnNames[(modelIndexes[i]).$c()];
}
return ordered;
});

Clazz.newMeth(C$, 'getColumnFormats$',  function () {
var colNames=this.dataTable.getFormattedColumnNames$();
var colFormats=Clazz.array(String, [colNames.length, 2]);
for (var i=0; i < colNames.length; i++) {
colFormats[i][0]=colNames[i];
colFormats[i][1]=this.dataTable.getFormatPattern$S(colNames[i]);
}
return colFormats;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var track=this.getTrack$();
var refreshGapButton=false;
switch (e.getPropertyName$()) {
case "loaded":
case "track":
if (this.columnsDialog != null ) {
this.setDialogAsLastVisible$Z(e.getNewValue$() === track );
}break;
case "text_column":
var added=null;
for (var name, $name = track.getTextColumnNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (!this.textColumnNames.contains$O(name)) added=name;
}
var removed=null;
for (var name, $name = this.textColumnNames.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (!track.getTextColumnNames$().contains$O(name)) removed=name;
}
if (added == null  && removed == null  ) {
return;
}this.textColumnNames.clear$();
this.textColumnNames.addAll$java_util_Collection(track.getTextColumnNames$());
if (removed != null  && added == null  ) {
this.setVisible$S$Z(removed, false);
}this.refreshNameMaps$();
if (added != null  && removed != null  ) {
} else if (added != null ) {
this.setVisible$S$Z(added, true);
}this.dataTable.refreshTable$I(16640);
if (this.viewParent.getViewType$() == 1) {
var view=this.getParent$();
view.refreshColumnsDialog$org_opensourcephysics_cabrillo_tracker_TTrack$Z(track, true);
}this.buildForNewFunction$();
return;
case "units":
this.dataTable.getTableHeader$().repaint$();
return;
case "step":
case "steps":
if ($I$(41).HINT_STEP_ADDED_OR_REMOVED === e.getOldValue$() ) {
refreshGapButton=true;
}default:
break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (refreshGapButton) p$2.refreshGapsButton.apply(this, []);
if (this.columnsDialog != null  && this.columnsDialog.isVisible$() ) p$1.refreshCheckboxes.apply(this.columnsDialog, []);
});

Clazz.newMeth(C$, 'snapshot$',  function () {
var image=Clazz.new_([$I$(43).getChooserParent$java_awt_Container(this)],$I$(42,1).c$$java_awt_Component).getImage$();
var w=image.getWidth$();
var h=image.getHeight$();
if ((w == 0) || (h == 0) ) {
return;
}var mi=Clazz.new_($I$(44,1).c$$java_awt_image_BufferedImage$D$D$D$D,[image, 0, w, h, 0]);
var frame=null;
try {
var type=Clazz.forName("org.opensourcephysics.frames.ImageFrame");
var constructors=type.getConstructors$();
for (var i=0; i < constructors.length; i++) {
var parameters=constructors[i].getParameterTypes$();
if (parameters.length == 1 && parameters[0] === Clazz.getClass($I$(44))  ) {
frame=constructors[i].newInstance$OA(Clazz.array(java.lang.Object, -1, [mi]));
break;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (frame == null ) return;
frame.setTitle$S($I$(45).getString$S("Snapshot.Title"));
frame.setDefaultCloseOperation$I(2);
frame.setKeepHidden$Z(false);
$I$(19,"setFonts$O$I",[frame, $I$(19).getLevel$()]);
frame.pack$();
frame.setVisible$Z(true);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.dataTable != null ) {
this.dataTable.setRowHeight$I(font.getSize$() + 4);
this.dataTable.getTableHeader$().setFont$java_awt_Font(font);
}});

Clazz.newMeth(C$, 'setHorizontalScrolling$Z',  function (horzScroll) {
this.dataTable.setAutoResizeMode$I(horzScroll ? 0 : 2);
});

Clazz.newMeth(C$, 'setDatasetIndex$I',  function (index) {
if (this.myDatasetIndex == index) return;
var refresh=index == -1 || this.myDatasetIndex == -1 ;
if (index == -1) this.prevDatasetIndex=this.myDatasetIndex;
this.myDatasetIndex=index;
if (refresh && this.columnsDialog != null  ) {
this.columnsDialog.checkBoxes=null;
p$1.refreshCheckboxes.apply(this.columnsDialog, []);
if (this.columnsDialog.isVisible$()) {
this.columnsDialog.pack$();
this.columnsDialog.repaint$();
}}this.showAllColumns$Z(this.myDatasetIndex > -1 ? true : false);
this.setHorizontalScrolling$Z(this.myDatasetIndex > -1 ? true : false);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.refresh$I$I(trackerPanel.getFrameNumber$(), 4608);
this.getDataTable$().getTableHeader$().repaint$();
});

Clazz.newMeth(C$, 'showAllColumns$Z',  function (all) {
this.showAllColumns=all;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.refresh$I$I(trackerPanel.getFrameNumber$(), 4608);
});

Clazz.newMeth(C$, 'getFrameAtRow$I',  function (row) {
var val=this.getIndepVarValueAtRow$I(row);
var track=this.getTrack$();
var xVar=track.datasetManager.getDataset$I(0).getXColumnName$();
var frameNum=track.getFrameForData$S$S$DA(xVar, null, Clazz.array(Double.TYPE, -1, [val]));
return frameNum;
});

Clazz.newMeth(C$, 'getIndepVarValueAtRow$I',  function (row) {
var col=this.dataTable.convertColumnIndexToView$I(0);
var val=null;
try {
val=this.dataTable.getValueAt$I$I(row, col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return val == null  ? NaN : (val).valueOf();
});

Clazz.newMeth(C$, 'getRowFromIndepVarValue$D',  function (indepVarValue) {
var col=this.dataTable.convertColumnIndexToView$I(0);
for (var i=0; i < this.dataTable.getRowCount$(); i++) {
if (indepVarValue == (this.dataTable.getValueAt$I$I(i, col)).$c() ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'getSelectedIndepVarValues$',  function () {
var d=this.selectedIndepVarValues.toArray$OA(Clazz.array(Double, [0]));
var vals=Clazz.array(Double.TYPE, [d.length]);
for (var i=0; i < d.length; i++) {
vals[i]=(d[i]).valueOf();
}
return vals;
});

Clazz.newMeth(C$, 'setSelectedIndepVarValues$DA',  function (vals) {
if (this.dataTable.getRowCount$() < 1) {
return;
}this.dataTable.removeRowSelectionInterval$I$I(0, this.dataTable.getRowCount$() - 1);
for (var i=0; i < vals.length; i++) {
var row=this.getRowFromIndepVarValue$D(vals[i]);
if (row > -1) {
this.dataTable.addRowSelectionInterval$I$I(row, row);
}}
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.columnsDialogButton=((P$.TableTrackView$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return $I$(43,"getButtonMaxSize$java_awt_Container$java_awt_Dimension$I",[this, C$.superclazz.prototype.getMaximumSize$.apply(this, []), this.getMinimumSize$().height]);
});
})()
), Clazz.new_($I$(46,1),[this, null],P$.TableTrackView$5));
this.columnsDialogButton.setIcon$javax_swing_Icon($I$(43).DOWN_ARROW_ICON);
this.columnsDialogButton.setHorizontalTextPosition$I(10);
this.columnsDialogButton.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$2.getOrCreateColumnsDialog$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], [])]).showOrHideDialog$();
});
})()
), Clazz.new_(P$.TableTrackView$6.$init$,[this, null])));
this.gapsButton=((P$.TableTrackView$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return $I$(43,"getButtonMaxSize$java_awt_Container$java_awt_Dimension$I",[this, C$.superclazz.prototype.getMaximumSize$.apply(this, []), this.getMinimumSize$().height]);
});

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(18,1));
var item=Clazz.new_([$I$(17).getString$S("TableTrackView.MenuItem.Gaps.GapsVisible")],$I$(47,1).c$$S);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.isSelected$());
item.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.setSelected$Z(!this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.skippedFramesRenderer.setVisible$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.isSelected$());
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.resetSort$();
}p$2.refreshGapsButton.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.repaint$();
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.getTableHeader$().resizeAndRepaint$();
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
p.showfilledSteps=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.isSelected$();
p.repaint$();
});
})()
), Clazz.new_(P$.TableTrackView$7$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
if ($I$(10).enableAutofill) {
item=Clazz.new_([$I$(17).getString$S("TableTrackView.MenuItem.Gaps.AutoFill")],$I$(47,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$7$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$7$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
p.setAutoFill$Z(!p.isAutofill);
p.repaint$();
});
})()
), Clazz.new_(P$.TableTrackView$7$2.$init$,[this, null])));
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
item.setSelected$Z(p.isAutofill);
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(item);
}$I$(19,"setFonts$O$I",[popup, $I$(19).getLevel$()]);
return popup;
});
})()
), Clazz.new_($I$(46,1),[this, null],P$.TableTrackView$7));
this.gapsButton.setSelected$Z($I$(10).showGaps);
this.multipleFramesButton=Clazz.new_($I$(46,1));
this.multipleFramesButton.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var multipleFrames=!this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].multipleFramesButton.isSelected$();
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].multipleFramesButton.setSelected$Z(multipleFrames);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].setDatasetIndex$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [multipleFrames ? this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].prevDatasetIndex : -1]);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].multipleFramesButton.setText$S(multipleFrames ? $I$(17).getString$S("TableTrackView.Button.SwitchTo.MultipleFrames") : $I$(17).getString$S("TableTrackView.Button.SwitchTo.SingleFrame"));
});
})()
), Clazz.new_(P$.TableTrackView$8.$init$,[this, null])));
this.multiframeCheckbox=Clazz.new_($I$(23,1));
this.multiframeCheckbox.setOpaque$Z(false);
this.multiframeCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var multiframe=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].multiframeCheckbox.isSelected$();
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].setDatasetIndex$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [multiframe ? this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].prevDatasetIndex : -1]);
});
})()
), Clazz.new_(P$.TableTrackView$9.$init$,[this, null])));
this.popup=Clazz.new_($I$(18,1));
this.dataTable.setSelectionMode$I(2);
this.dataTable.getTableHeader$().setToolTipText$S($I$(17).getString$S("TableTrackView.Header.Tooltip"));
this.dataTable.getTableHeader$().addMouseListener$java_awt_event_MouseListener(((P$.TableTrackView$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].tableHeaderMousePressed$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [e]);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2 || $I$(48).isPopupTrigger$java_awt_event_InputEvent(e) ) return;
var vals=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getSelectedIndepVarValues$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].setSelectedIndepVarValues$DA.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [vals]);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TableTrackView$10)));
this.dataTable.addMouseListener$java_awt_event_MouseListener(((P$.TableTrackView$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].tableMousePressed$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [e]);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TableTrackView$11)));
var im=this.dataTable.getInputMap$I(1);
var k=$I$(49).getKeyStroke$I$I(67, 128);
var newAction=((P$.TableTrackView$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
$I$(50,"copyTable$org_opensourcephysics_display_DataTable$Z$S",[this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable, false, "\t" + track.getName$()]);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$12));
var am=this.dataTable.getActionMap$();
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "copy", am, newAction);
k=$I$(49).getKeyStroke$I$I(33, 0);
newAction=((P$.TableTrackView$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
trackerPanel.getPlayer$().back$();
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$13));
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "scrollUpChangeSelection", am, newAction);
am.put$O$javax_swing_Action(im.get$javax_swing_KeyStroke(k), newAction);
k=$I$(49).getKeyStroke$I$I(33, 64);
newAction=((P$.TableTrackView$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
var n=trackerPanel.getPlayer$().getStepNumber$() - 5;
trackerPanel.getPlayer$().setStepNumber$I(n);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$14));
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "scrollUpExtendSelection", am, newAction);
k=$I$(49).getKeyStroke$I$I(34, 0);
newAction=((P$.TableTrackView$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
trackerPanel.getPlayer$().step$();
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$15));
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "scrollDownChangeSelection", am, newAction);
k=$I$(49).getKeyStroke$I$I(34, 64);
newAction=((P$.TableTrackView$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
var n=trackerPanel.getPlayer$().getStepNumber$() + 5;
trackerPanel.getPlayer$().setStepNumber$I(n);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$16));
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "scrollDownExtendSelection", am, newAction);
k=$I$(49).getKeyStroke$I$I(36, 0);
newAction=((P$.TableTrackView$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
trackerPanel.getPlayer$().setStepNumber$I(0);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$17));
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "selectFirstColumn", am, newAction);
k=$I$(49).getKeyStroke$I$I(35, 0);
newAction=((P$.TableTrackView$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
var clip=trackerPanel.getPlayer$().getVideoClip$();
trackerPanel.getPlayer$().setStepNumber$I(clip.getStepCount$() - 1);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$18));
$I$(48).setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action(im, k, "selectLastColumn", am, newAction);
$I$(19).setFont$javax_swing_AbstractButton(this.columnsDialogButton);
});

Clazz.newMeth(C$, 'dataToolAction$',  function () {
var track=this.getTrack$();
var toSend=Clazz.new_($I$(33,1));
toSend.setID$I(this.trackDataManager.getID$());
toSend.setName$S(track.getName$());
toSend.setXPointsLinked$Z(true);
var colCount=0;
var datasets=this.trackDataManager.getDatasetsRaw$();
var next=datasets.get$I(0);
var control=Clazz.new_($I$(52,1).c$$O,[next]);
next=toSend.getDataset$I(colCount++);
control.loadObject$O$Z$Z(next, true, true);
next.setYColumnVisible$Z(false);
next.setConnected$Z(false);
next.setMarkerShape$I(0);
var bs=this.bsCheckBoxes;
var max=this.datasetCount;
var lp=(track.ttype == 3 ? track : null);
if (lp != null  && lp.isMultipleFrames$() ) {
bs=Clazz.new_($I$(25,1));
max=datasets.size$();
for (var i=0; i < max; i++) {
bs.set$I(i);
}
}for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (i >= max) {
next=track.convertTextToDataColumn$S(this.aNames[i]);
if (next == null ) continue;
} else {
next=datasets.get$I(i);
}control=Clazz.new_($I$(52,1).c$$O,[next]);
next=toSend.getDataset$I(colCount++);
control.loadObject$O$Z$Z(next, true, true);
next.setMarkerColor$java_awt_Color(track.getColor$());
next.setConnected$Z(true);
next.setXColumnVisible$Z(false);
}
var tool=$I$(53).getTool$Z(true);
tool.setUseChooser$Z(false);
tool.setSaveChangesOnClose$Z(false);
var refresher=$I$(54).getTool$org_opensourcephysics_display_Data(this.trackDataManager);
tool.send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(Clazz.new_($I$(55,1).c$$O,[toSend]), refresher);
tool.setVisible$Z(true);
});

Clazz.newMeth(C$, 'tableMousePressed$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2) {
this.dataTable.selectAll$();
}if (!$I$(48).isPopupTrigger$java_awt_event_InputEvent(e)) return;
p$2.getMenuItems.apply(this, []);
var mousePt=e.getPoint$();
var col=this.dataTable.columnAtPoint$java_awt_Point(mousePt);
this.deleteDataFunctionItem.setActionCommand$S("");
var colName=this.dataTable.getColumnName$I(col);
var index=this.trackDataManager.getDatasetIndex$S(colName);
if (index > -1) {
var dataset=this.trackDataManager.getDataset$I(index);
if (Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction")) {
this.deleteDataFunctionItem.setActionCommand$S(String.valueOf$I(index));
var s=$I$(17).getString$S("TableTrackView.MenuItem.DeleteDataFunction");
this.deleteDataFunctionItem.setText$S(s + " \"" + colName + "\"" );
}}var row=this.dataTable.rowAtPoint$java_awt_Point(mousePt);
this.goToFrameItem.setEnabled$Z(row > -1);
if (this.goToFrameItem.isEnabled$()) {
this.goToFrameItem.setActionCommand$S(String.valueOf$I(row));
var s=$I$(17).getString$S("TableTrackView.Popup.Menuitem.GoToStep");
var frameNum=this.getFrameAtRow$I(row);
var clip=this.frame.getTrackerPanelForID$Integer(this.panelID).getPlayer$().getVideoClip$();
var stepNum=clip.frameToStep$I(frameNum);
s+=" " + stepNum;
this.goToFrameItem.setText$S(s);
}this.getPopup$().show$java_awt_Component$I$I(this.dataTable, e.getX$() + 4, e.getY$());
});

Clazz.newMeth(C$, 'tableHeaderMousePressed$java_awt_event_MouseEvent',  function (e) {
var col=this.dataTable.columnAtPoint$java_awt_Point(e.getPoint$());
if ($I$(48).isPopupTrigger$java_awt_event_InputEvent(e)) {
p$2.getMenuItems.apply(this, []);
if (this.dataTable.getRowCount$() > 0 && this.dataTable.getSelectedRowCount$() == 0 ) {
this.dataTable.setColumnSelectionInterval$I$I(col, col);
this.dataTable.setRowSelectionInterval$I$I(0, this.dataTable.getRowCount$() - 1);
}this.deleteDataFunctionItem.setActionCommand$S("");
var colName=this.dataTable.getColumnName$I(col);
var index=this.trackDataManager.getDatasetIndex$S(colName);
if (index > -1) {
var dataset=this.trackDataManager.getDataset$I(index);
if (Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction")) {
this.deleteDataFunctionItem.setActionCommand$S(String.valueOf$I(index));
var s=$I$(17).getString$S("TableTrackView.MenuItem.DeleteDataFunction");
this.deleteDataFunctionItem.setText$S(s + " \"" + colName + "\"" );
}}this.goToFrameItem.setEnabled$Z(false);
this.getPopup$().show$java_awt_Component$I$I(this.dataTable.getTableHeader$(), e.getX$(), e.getY$() + 8);
} else {
if (e.getClickCount$() == 2) {
this.dataTable.setRowSelectionInterval$I$I(0, this.dataTable.getRowCount$() - 1);
this.dataTable.setColumnSelectionInterval$I$I(col, col);
this.leadCol=col;
this.dataTable.sort$I(0);
} else if (e.isControlDown$()) {
if (this.dataTable.isColumnSelected$I(col)) {
this.dataTable.removeColumnSelectionInterval$I$I(col, col);
} else {
this.dataTable.addColumnSelectionInterval$I$I(col, col);
if (this.dataTable.getSelectedColumns$().length == 1) {
this.leadCol=col;
}}} else if (e.isShiftDown$() && this.dataTable.getSelectedRows$().length > 0 ) {
if (this.leadCol < this.dataTable.getColumnCount$()) {
this.dataTable.setColumnSelectionInterval$I$I(col, this.leadCol);
}}}});

Clazz.newMeth(C$, 'getMenuItems',  function () {
if (this.haveMenuItems) return;
this.haveMenuItems=true;
this.deleteDataFunctionItem=Clazz.new_($I$(56,1));
this.deleteDataFunctionItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var index=Integer.parseInt$S(e.getActionCommand$());
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
var tool=trackerPanel.getDataBuilder$();
var panel=tool.getPanel$S(track.getName$());
var dataset=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].trackDataManager.getDataset$I(index);
if (Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction")) panel.getFunctionEditor$().removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(dataset, true);
});
})()
), Clazz.new_(P$.TableTrackView$19.$init$,[this, null])));
this.goToFrameItem=Clazz.new_($I$(56,1));
this.goToFrameItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
var row=Integer.parseInt$S(e.getActionCommand$());
var frameNum=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getFrameAtRow$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [row]);
if (frameNum > -1) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
var clip=trackerPanel.getPlayer$().getVideoClip$();
var stepNum=clip.frameToStep$I(frameNum);
trackerPanel.getPlayer$().setStepNumber$I(stepNum);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.TableTrackView$20.$init$,[this, null])));
this.numberMenu=Clazz.new_($I$(57,1));
this.formatDialogItem=Clazz.new_($I$(56,1));
this.formatDialogItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var selected=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.getSelectedColumns$();
var selectedNames=Clazz.array(String, [selected.length]);
for (var i=0; i < selectedNames.length; i++) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.getColumnName$I(selected[i]);
selectedNames[i]=name;
}
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
$I$(58,"getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA",[trackerPanel, this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []), selectedNames]).setVisible$Z(true);
});
})()
), Clazz.new_(P$.TableTrackView$21.$init$,[this, null])));
this.showUnitsItem=Clazz.new_($I$(56,1));
this.showUnitsItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
trackerPanel.setUnitsVisible$Z(!trackerPanel.isUnitsVisible$());
});
})()
), Clazz.new_(P$.TableTrackView$22.$init$,[this, null])));
this.setUnitsItem=Clazz.new_($I$(56,1));
this.setUnitsItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
var dialog=trackerPanel.getUnitsDialog$();
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TableTrackView$23.$init$,[this, null])));
this.copyDataMenu=Clazz.new_($I$(57,1));
this.copyDataRawItem=Clazz.new_([((P$.TableTrackView$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
$I$(50,"copyTable$org_opensourcephysics_display_DataTable$Z$S",[this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable, false, "\t" + track.getName$()]);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$24))],$I$(56,1).c$$javax_swing_Action);
this.copyDataFormattedItem=Clazz.new_([((P$.TableTrackView$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
$I$(50,"copyTable$org_opensourcephysics_display_DataTable$Z$S",[this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable, true, "\t" + track.getName$()]);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$25))],$I$(56,1).c$$javax_swing_Action);
var setDelimiterAction=((P$.TableTrackView$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(59,"setDelimiter$S",[e.getActionCommand$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$26));
this.setDelimiterMenu=Clazz.new_($I$(57,1).c$$javax_swing_Action,[setDelimiterAction]);
$I$(60,"addMenuListener$javax_swing_JMenu$Runnable",[this.setDelimiterMenu, ((P$.TableTrackView$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].setupDelimiterMenu$javax_swing_Action.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [this.$finals$.setDelimiterAction]);
});
})()
), Clazz.new_(P$.TableTrackView$27.$init$,[this, {setDelimiterAction:setDelimiterAction}]))]);
this.includeHeadersItem=Clazz.new_([((P$.TableTrackView$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.includeHeadersInCopiedData=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].includeHeadersItem.isSelected$();
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$28))],$I$(47,1).c$$javax_swing_Action);
this.includeHeadersItem.setSelected$Z(this.dataTable.includeHeadersInCopiedData);
var copyImageAction=((P$.TableTrackView$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getOwner$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
if (chooser != null ) {
Clazz.new_($I$(42,1).c$$java_awt_Component,[chooser]).copyToClipboard$();
}});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$29));
this.copyImageItem=Clazz.new_($I$(56,1).c$$javax_swing_Action,[copyImageAction]);
var snapshotAction=((P$.TableTrackView$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].snapshot$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$30));
this.snapshotItem=Clazz.new_($I$(56,1).c$$javax_swing_Action,[snapshotAction]);
this.createTextColumnItem=Clazz.new_($I$(56,1));
this.createTextColumnItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getUniqueColumnName$S$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [null, false]);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
track.addTextColumn$S(name);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.refreshTable$I(16640);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].viewParent.getViewType$() == 1) {
(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].viewParent).refreshColumnsDialog$org_opensourcephysics_cabrillo_tracker_TTrack$Z(track, true);
}});
})()
), Clazz.new_(P$.TableTrackView$31.$init$,[this, null])));
this.textColumnMenu=Clazz.new_($I$(57,1));
this.deleteTextColumnMenu=Clazz.new_($I$(57,1));
this.renameTextColumnMenu=Clazz.new_($I$(57,1));
this.dataBuilderItem=Clazz.new_($I$(56,1));
this.dataBuilderItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
trackerPanel.getDataBuilder$().setSelectedPanel$S(track.getName$());
trackerPanel.getDataBuilder$().setVisible$Z(true);
});
})()
), Clazz.new_(P$.TableTrackView$32.$init$,[this, null])));
this.dataToolItem=Clazz.new_($I$(56,1));
this.dataToolItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataToolAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
});
})()
), Clazz.new_(P$.TableTrackView$33.$init$,[this, null])));
this.printItem=Clazz.new_($I$(56,1));
this.printItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getOwner$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
if (chooser != null ) {
Clazz.new_($I$(42,1).c$$java_awt_Component,[chooser]).print$();
}});
})()
), Clazz.new_(P$.TableTrackView$34.$init$,[this, null])));
this.helpItem=Clazz.new_($I$(56,1));
this.helpItem.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.showHelp$S$I("datatable", 0);
}});
})()
), Clazz.new_(P$.TableTrackView$35.$init$,[this, null])));
}, p$2);

Clazz.newMeth(C$, 'setupDelimiterMenu$javax_swing_Action',  function (setDelimiterAction) {
var delimiterButtonGroup=Clazz.new_($I$(61,1));
for (var key, $key = $I$(50).getDelimiters$().keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var delimiter=$I$(50).getDelimiters$().get$O(key);
var item=Clazz.new_($I$(62,1).c$$S,[key]);
item.setActionCommand$S(delimiter);
item.addActionListener$java_awt_event_ActionListener(setDelimiterAction);
delimiterButtonGroup.add$javax_swing_AbstractButton(item);
}
var addDelimiterAction=((P$.TableTrackView$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var delimiter=$I$(59).getDelimiter$();
var response=$I$(63,"showInputDialog$java_awt_Component$S$S$I$S",[this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], $I$(17).getString$S("TableTrackView.Dialog.CustomDelimiter.Message"), $I$(17).getString$S("TableTrackView.Dialog.CustomDelimiter.Title"), -1, delimiter]);
if (response != null ) {
var s=response;
$I$(59).setDelimiter$S(s);
$I$(50).addCustomDelimiter$S(s);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
}});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$36));
var addDelimiterItem=Clazz.new_($I$(56,1).c$$javax_swing_Action,[addDelimiterAction]);
var removeDelimiterAction=((P$.TableTrackView$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var choices=$I$(59).customDelimiters.values$().toArray$OA(Clazz.array(String, [1]));
Clazz.new_($I$(64,1)).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], $I$(17).getString$S("TableTrackView.Dialog.RemoveDelimiter.Message"), $I$(17).getString$S("TableTrackView.Dialog.RemoveDelimiter.Title"), -1, null, choices, null, ((P$.TableTrackView$37$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TableTrackView$37$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ee) /*block*/{
var response=ee.getActionCommand$.apply(ee, []);
if (response != null ) {
var s=response.toString.apply(response, []);
$I$(50).removeCustomDelimiter$S(s);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
}});
})()
), Clazz.new_(P$.TableTrackView$37$lambda1.$init$,[this, null])));
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$37));
var removeDelimiterItem=Clazz.new_($I$(56,1).c$$javax_swing_Action,[removeDelimiterAction]);
addDelimiterItem.setText$S($I$(17).getString$S("TableTrackView.MenuItem.AddDelimiter"));
removeDelimiterItem.setText$S($I$(17).getString$S("TableTrackView.MenuItem.RemoveDelimiter"));
this.setDelimiterMenu.removeAll$();
var delimiter=$I$(59).getDelimiter$();
var en=delimiterButtonGroup.getElements$();
for (; en.hasMoreElements$(); ) {
var item=en.nextElement$();
var delim=item.getActionCommand$();
if (!$I$(50).getDelimiters$().containsValue$O(delim)) delimiterButtonGroup.remove$javax_swing_AbstractButton(item);
}
en=delimiterButtonGroup.getElements$();
for (; en.hasMoreElements$(); ) {
var item=en.nextElement$();
this.setDelimiterMenu.add$javax_swing_JMenuItem(item);
if (delimiter.equals$O(item.getActionCommand$())) item.setSelected$Z(true);
}
var hasCustom=!$I$(59).customDelimiters.isEmpty$();
if (hasCustom) {
this.setDelimiterMenu.addSeparator$();
for (var key, $key = $I$(59).customDelimiters.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var item=Clazz.new_($I$(62,1).c$$S,[key]);
item.setActionCommand$S($I$(59).customDelimiters.get$O(key));
item.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(59,"setDelimiter$S",[e.getActionCommand$()]);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.TableTrackView$38)));
delimiterButtonGroup.add$javax_swing_AbstractButton(item);
this.setDelimiterMenu.add$javax_swing_JMenuItem(item);
if (delimiter.equals$O(item.getActionCommand$())) item.setSelected$Z(true);
}
}this.setDelimiterMenu.addSeparator$();
this.setDelimiterMenu.add$javax_swing_JMenuItem(addDelimiterItem);
if (hasCustom) this.setDelimiterMenu.add$javax_swing_JMenuItem(removeDelimiterItem);
});

Clazz.newMeth(C$, 'getPopup$',  function () {
p$2.getMenuItems.apply(this, []);
this.numberMenu.setText$S($I$(17).getString$S("Popup.Menu.Numbers"));
this.formatDialogItem.setText$S($I$(17).getString$S("Popup.MenuItem.Formats") + "...");
this.setUnitsItem.setText$S($I$(17).getString$S("Popup.MenuItem.Units") + "...");
this.copyImageItem.setText$S($I$(17).getString$S("TMenuBar.Menu.CopyImage"));
this.snapshotItem.setText$S($I$(45).getString$S("DisplayPanel.Snapshot_menu_item"));
this.printItem.setText$S($I$(17).getString$S("TActions.Action.Print"));
this.helpItem.setText$S($I$(17).getString$S("Tracker.Popup.MenuItem.Help"));
this.createTextColumnItem.setText$S($I$(17).getString$S("TableTrackView.Action.CreateTextColumn.Text"));
this.textColumnMenu.setText$S($I$(17).getString$S("TableTrackView.Menu.TextColumn.Text"));
this.deleteTextColumnMenu.setText$S($I$(17).getString$S("TableTrackView.Action.DeleteTextColumn.Text"));
this.renameTextColumnMenu.setText$S($I$(17).getString$S("TableTrackView.Action.RenameTextColumn.Text"));
this.dataBuilderItem.setText$S($I$(17).getString$S("TView.Menuitem.Define"));
this.dataToolItem.setText$S($I$(17).getString$S("TableTrackView.Popup.MenuItem.Analyze"));
this.refreshCopyDataMenu$javax_swing_JMenu(this.copyDataMenu);
this.popup.removeAll$();
if (this.goToFrameItem.isEnabled$()) {
this.popup.add$javax_swing_JMenuItem(this.goToFrameItem);
}var track=this.getTrack$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (track == null ) {
if (trackerPanel.isEnabled$S("number.formats") || trackerPanel.isEnabled$S("number.units") ) {
if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.numberMenu);
this.numberMenu.removeAll$();
if (trackerPanel.isEnabled$S("number.formats")) this.numberMenu.add$javax_swing_JMenuItem(this.formatDialogItem);
if (trackerPanel.isEnabled$S("number.units")) this.numberMenu.add$javax_swing_JMenuItem(this.setUnitsItem);
}return this.popup;
}if (track.tp != null  && track.tp.isEnabled$S("edit.copyData") ) {
if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.copyDataMenu);
}if (trackerPanel.isEnabled$S("number.formats") || trackerPanel.isEnabled$S("number.units") && track.tp != null   ) {
if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.numberMenu);
this.numberMenu.removeAll$();
if (trackerPanel.isEnabled$S("number.formats")) this.numberMenu.add$javax_swing_JMenuItem(this.formatDialogItem);
if (trackerPanel.isEnabled$S("number.units")) this.numberMenu.add$javax_swing_JMenuItem(this.setUnitsItem);
}if (trackerPanel.isEnabled$S("text.columns")) {
this.textColumnMenu.removeAll$();
this.deleteTextColumnMenu.removeAll$();
this.renameTextColumnMenu.removeAll$();
if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.textColumnMenu);
this.textColumnMenu.add$javax_swing_JMenuItem(this.createTextColumnItem);
if (track.getTextColumnNames$().size$() > 0) {
this.textColumnMenu.add$javax_swing_JMenuItem(this.deleteTextColumnMenu);
for (var next, $next = track.getTextColumnNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var item=Clazz.new_($I$(56,1).c$$S,[next]);
this.deleteTextColumnMenu.add$javax_swing_JMenuItem(item);
item.setActionCommand$S(next);
item.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
track.removeTextColumn$S(e.getActionCommand$());
});
})()
), Clazz.new_(P$.TableTrackView$39.$init$,[this, null])));
}
this.textColumnMenu.add$javax_swing_JMenuItem(this.renameTextColumnMenu);
for (var next, $next = track.getTextColumnNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var item=Clazz.new_($I$(56,1).c$$S,[next]);
this.renameTextColumnMenu.add$javax_swing_JMenuItem(item);
item.setActionCommand$S(next);
item.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prev=e.getActionCommand$();
var name=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getUniqueColumnName$S$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [prev, false]);
if (name != null  && !name.equals$O("")  && !name.equals$O(prev) ) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
track.renameTextColumn$S$S(prev, name);
}});
})()
), Clazz.new_(P$.TableTrackView$40.$init$,[this, null])));
}
}}this.textColumnMenu.setEnabled$Z(!track.isLocked$());
if (!"".equals$O(this.deleteDataFunctionItem.getActionCommand$())) {
this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.deleteDataFunctionItem);
}if (track.tp != null  && track.tp.isEnabled$S("edit.copyImage") ) {
this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.copyImageItem);
this.popup.add$javax_swing_JMenuItem(this.snapshotItem);
}if (track.tp != null  && (track.tp.isEnabled$S("data.builder") || track.tp.isEnabled$S("data.tool") ) ) {
this.popup.addSeparator$();
if (track.tp.isEnabled$S("data.builder")) this.popup.add$javax_swing_JMenuItem(this.dataBuilderItem);
if (track.tp.isEnabled$S("data.tool")) this.popup.add$javax_swing_JMenuItem(this.dataToolItem);
}if (track.tp != null  && track.tp.isEnabled$S("file.print") ) {
this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.printItem);
}if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(this.helpItem);
$I$(19,"setFonts$O$I",[this.popup, $I$(19).getLevel$()]);
return this.popup;
});

Clazz.newMeth(C$, 'getUniqueColumnName$S$Z',  function (previous, tryAgain) {
if (previous == null ) previous="";
var input=null;
var track=this.getTrack$();
if (tryAgain) {
input=$I$(63,"showInputDialog$java_awt_Component$S$S$I$S",[this.frame, $I$(17).getString$S("TableTrackView.Dialog.NameColumn.TryAgain") + "\n" + $I$(17).getString$S("TableTrackView.Dialog.NameColumn.Message") , $I$(17).getString$S("TableTrackView.Dialog.NameColumn.Title"), 2, previous]);
} else {
input=$I$(63,"showInputDialog$java_awt_Component$S$S$I$S",[this.frame, $I$(17).getString$S("TableTrackView.Dialog.NameColumn.Message"), $I$(17).getString$S("TableTrackView.Dialog.NameColumn.Title"), 3, previous]);
}if (input == null ) {
return null;
}var name=input.trim$();
if (name.equals$O(previous)) return name;
var unique=true;
for (var next, $next = 0, $$next = this.getDataColumnNames$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next.equals$O(name)) {
unique=false;
break;
}}
if (unique) {
for (var next, $next = track.getTextColumnNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(name)) {
unique=false;
break;
}}
}if (!unique) return this.getUniqueColumnName$S$Z(previous, true);
return name;
});

Clazz.newMeth(C$, 'refreshCopyDataMenu$javax_swing_JMenu',  function (menu) {
p$2.getMenuItems.apply(this, []);
menu.removeAll$();
menu.add$javax_swing_JMenuItem(this.copyDataRawItem);
menu.add$javax_swing_JMenuItem(this.copyDataFormattedItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.setDelimiterMenu);
menu.add$javax_swing_JMenuItem(this.includeHeadersItem);
if (this.dataTable.getSelectedRowCount$() == 0) menu.setText$S($I$(17).getString$S("TableTrackView.Action.CopyData"));
 else menu.setText$S($I$(17).getString$S("TableTrackView.MenuItem.CopySelectedData"));
this.copyDataRawItem.setText$S($I$(17).getString$S("TableTrackView.MenuItem.Unformatted"));
this.copyDataFormattedItem.setText$S($I$(17).getString$S("TableTrackView.MenuItem.Formatted"));
this.setDelimiterMenu.setText$S($I$(17).getString$S("TableTrackView.Menu.SetDelimiter"));
this.includeHeadersItem.setText$S($I$(17).getString$S("TableTrackView.MenuItem.IncludeHeaders"));
return menu;
});

Clazz.newMeth(C$, 'refreshToolbarPopup$javax_swing_JPopupMenu',  function (popup) {
});

Clazz.newMeth(C$, 'getDataColumnNames$',  function () {
var names=Clazz.new_($I$(28,1));
var dataset=this.trackDataManager.getDataset$I(0);
var name=dataset.getXColumnName$();
names.add$O(name);
var track=this.getTrack$();
var dataOrder=track.getPreferredDataOrder$();
var added=Clazz.new_($I$(25,1));
for (var i=0; i < dataOrder.size$(); i++) {
var oi=dataOrder.get$I(i).intValue$();
dataset=this.trackDataManager.getDataset$I(oi);
name=dataset.getYColumnName$();
names.add$O(name);
added.set$I(oi);
}
for (var i=0; i < this.trackDataManager.getDatasetsRaw$().size$(); i++) {
if (!added.get$I(i)) {
dataset=this.trackDataManager.getDataset$I(i);
name=dataset.getYColumnName$();
names.add$O(name);
}}
return names.toArray$OA(Clazz.array(String, [0]));
});

Clazz.newMeth(C$, 'refreshToolbar$',  function () {
if ($I$(48).isJS) return;
if (this.frame != null ) {
var owner=this.getOwner$();
if (owner != null ) {
owner.refreshToolbar$();
}}});

Clazz.newMeth(C$, 'addColumnItems$javax_swing_JPopupMenu',  function (popup) {
this.getPopup$();
popup.add$javax_swing_JMenuItem(this.createTextColumnItem);
if (this.deleteTextColumnMenu.getItemCount$() > 0) {
popup.add$javax_swing_JMenuItem(this.deleteTextColumnMenu);
popup.add$javax_swing_JMenuItem(this.renameTextColumnMenu);
}});

Clazz.newMeth(C$, 'getOrCreateColumnsDialog$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.frame != null ) {
if (this.columnsDialog == null ) this.columnsDialog=Clazz.new_($I$(65,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_cabrillo_tracker_TTrack,[this, null, this.frame, track]);
 else if (this.columnsDialog.track !== track ) p$1.rebuild$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.columnsDialog, [track]);
 else p$1.refreshButtonPanel.apply(this.columnsDialog, []);
}return this.columnsDialog;
}, p$2);

Clazz.newMeth(C$, 'refreshColumnDialog$org_opensourcephysics_cabrillo_tracker_TTrack$Z',  function (track, onlyIfVisible) {
if (track == null ) {
if (this.columnsDialog != null ) {
this.columnsDialog.getContentPane$().removeAll$();
this.columnsDialog.setVisible$Z(false);
}return;
}if (onlyIfVisible && this.columnsDialog == null   || !this.columnsDialog.isVisible$() ) return;
p$2.getOrCreateColumnsDialog$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this, [track]);
});

Clazz.newMeth(C$, 'setDialogAsLastVisible$Z',  function (vis) {
if (this.columnsDialog != null ) {
if (vis && this.dialogLastVisible ) {
this.columnsDialog.setVisible$Z(true);
} else {
vis=this.columnsDialog.isVisible$();
if (vis) {
var b=this.dialogLastVisible;
this.columnsDialog.setVisible$Z(false);
this.dialogLastVisible=b;
}}}});

Clazz.newMeth(C$, 'buildForNewFunction$',  function () {
if (this.columnsDialog != null ) {
p$1.refreshCheckboxes.apply(this.columnsDialog, []);
p$1.setPortPosition.apply(this.columnsDialog, []);
this.columnsDialog.revalidate$();
this.columnsDialog.repaint$();
}});

Clazz.newMeth(C$, 'isRefreshEnabled$',  function () {
return C$.superclazz.prototype.isRefreshEnabled$.apply(this, []) && $I$(10).allowTableRefresh ;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(40).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.SKIPS_ON_ICON=$I$(10).getResourceIcon$S$Z("skips_on.gif", true);
C$.SKIPS_OFF_ICON=$I$(10).getResourceIcon$S$Z("skips_off.gif", true);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "TextColumnTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataTable','.OSPTableModel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
var result="unknown";
var n=-1;
for (var j=0; j <= col; j++) {
n=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsTextColumnsVisible.nextSetBit$I(n + 1);
if (n == 2147483647) {
break;
}}
var names=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []).getTextColumnNames$();
if (n >= 0 && names.size$() > n ) {
result=names.get$I(n);
}return result;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTableManager.getRowCount$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex > -1 ? 0 : this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsTextColumnsVisible.cardinality$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
var columnName=this.getColumnName$I(col);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
var frameSet=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].trackDataManager.getFrameDataset$();
if (frameSet != null ) {
var frame=frameSet.getYPoints$()[row];
return track.getTextColumnEntry$S$I(columnName, (frame|0));
}return track.getTextColumnEntry$S$I(columnName, row);
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
var columnName=this.getColumnName$I(col);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
var frameSet=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].trackDataManager.getFrameDataset$();
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (frameSet != null ) {
var frame=frameSet.getYPoints$()[row];
if (track.setTextColumnEntry$S$I$S(columnName, (frame|0), value)) {
trackerPanel.changed=true;
}return;
}if (track.setTextColumnEntry$S$I$S(columnName, row, value)) {
trackerPanel.changed=true;
}});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
return !this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []).isLocked$();
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (col) {
return Clazz.getClass(String);
});

Clazz.newMeth(C$, 'toString',  function () {
return "TableTrackView.TextColumnTableModel n=" + this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].textColumnNames.size$() + " vis=" + this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsTextColumnsVisible.cardinality$() ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "TextColumnEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
this.field=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['defaultEditingColor','java.awt.Color','panel','javax.swing.JPanel','field','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.defaultEditingColor=this.field.getSelectionColor$();
this.panel.add$java_awt_Component$O(this.field, "Center");
this.panel.setOpaque$Z(false);
this.field.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 1, 1, 0));
this.field.addKeyListener$java_awt_event_KeyListener(((P$.TableTrackView$TextColumnEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$TextColumnEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.TextColumnEditor'].field.isEnabled$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.TextColumnEditor'].field.setBackground$java_awt_Color($I$(5).yellow);
}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.TableTrackView$TextColumnEditor$1)));
this.field.addFocusListener$java_awt_event_FocusListener(((P$.TableTrackView$TextColumnEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$TextColumnEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.TextColumnEditor'].field.requestFocusInWindow$();
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.TableTrackView$TextColumnEditor$2)));
}, 1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.field.setBackground$java_awt_Color($I$(5).white);
this.field.setSelectionColor$java_awt_Color(this.defaultEditingColor);
this.field.setEditable$Z(true);
if (value == null ) value="";
this.field.setText$S(value.toString());
return this.panel;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
if (e == null  || Clazz.instanceOf(e, "java.awt.event.MouseEvent") ) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
return !track.isLocked$();
}return false;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dataTable.requestFocusInWindow$();
if (this.field.getBackground$() !== $I$(5).white ) {
this.field.setBackground$java_awt_Color($I$(5).white);
}return this.field.getText$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "NumberRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nf=Clazz.new_($I$(8,1).c$$Z,[false]);
},1);

C$.$fields$=[['O',['defaultRenderer','javax.swing.table.DefaultTableCellRenderer','nf','org.opensourcephysics.media.core.NumberField.NumberFormatter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.defaultRenderer=Clazz.new_($I$(9,1));
this.defaultRenderer.setHorizontalAlignment$I(4);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
var c=this.defaultRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, isSelected, hasFocus, row, column);
if (Clazz.instanceOf(value, "java.lang.Double") && Clazz.instanceOf(c, "javax.swing.JLabel") ) {
(c).setText$S(this.nf.getText$D((value).doubleValue$()));
}return c;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "SkippedFramesRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=$I$(10).showGaps;
},1);

C$.$fields$=[['Z',['visible'],'O',['baseRenderer','javax.swing.table.TableCellRenderer','belowBorder','javax.swing.border.Border','+aboveBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.belowBorder=$I$(4,"createMatteBorder$I$I$I$I$java_awt_Color",[0, 0, 1, 0, $I$(5).red]);
var space=$I$(4).createEmptyBorder$I$I$I$I(0, 1, 0, 1);
this.belowBorder=$I$(4).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(this.belowBorder, space);
this.aboveBorder=$I$(4,"createMatteBorder$I$I$I$I$java_awt_Color",[1, 0, 0, 0, $I$(5).red]);
space=$I$(4).createEmptyBorder$I$I$I$I(0, 1, 1, 1);
this.aboveBorder=$I$(4).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(this.aboveBorder, space);
}, 1);

Clazz.newMeth(C$, 'setBaseRenderer$javax_swing_table_TableCellRenderer',  function (renderer) {
this.baseRenderer=renderer;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
this.visible=vis;
});

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
var c=this.baseRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, isSelected, hasFocus, row, column);
if (this.visible) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
if (track.ttype == 5) {
var p=track;
if (p.tp != null ) {
var clip=p.tp.getPlayer$().getVideoClip$();
var frameNum=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getFrameAtRow$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [row]);
var stepNum=clip.frameToStep$I(frameNum);
for (var i, $i = p.skippedSteps.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (stepNum + 1 == i) {
(c).setBorder$javax_swing_border_Border(this.belowBorder);
} else if (stepNum - 1 == i) {
(c).setBorder$javax_swing_border_Border(this.aboveBorder);
}}
}}}return c;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "TrackDataTable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.DataTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numberFieldRenderer=Clazz.new_($I$(11,1),[this, null]);
this.skippedFramesRenderer=Clazz.new_($I$(12,1),[this, null]);
},1);

C$.$fields$=[['O',['numberFieldRenderer','org.opensourcephysics.cabrillo.tracker.TableTrackView.NumberRenderer','skippedFramesRenderer','org.opensourcephysics.cabrillo.tracker.TableTrackView.SkippedFramesRenderer']]]

Clazz.newMeth(C$, 'findLastAddedModelIndex$StringBuffer',  function (names) {
if (names == null ) return -1;
if (names.length$() < 2) {
names.append$S("t").append$S(",");
return 0;
}var bs=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsCheckBoxes;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var key="," + this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].aNames[i] + "," ;
if (names.indexOf$S(key) < 0) {
names.append$S(key);
return this.dataTableModel.findColumn$S(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].aNames[i]);
}}
return -1;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
var renderer=this.getTableHeader$().getDefaultRenderer$();
if (Clazz.instanceOf(renderer, "org.opensourcephysics.display.DataTable.HeaderRenderer")) {
renderer=(renderer).getBaseRenderer$();
}var headerRenderer=Clazz.new_($I$(13,1).c$$org_opensourcephysics_display_DataTable$javax_swing_table_TableCellRenderer,[this, null, this, renderer]);
this.getTableHeader$().setDefaultRenderer$javax_swing_table_TableCellRenderer(headerRenderer);
}, 1);

Clazz.newMeth(C$, 'refreshTable$I',  function (mode) {
C$.superclazz.prototype.refreshTable$I$Z.apply(this, [mode, true]);
if (mode == 5376) this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refreshToolbar$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []);
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, column) {
return this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].textColumnEditor;
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
return this.dataTableModel.getColumnClass$I(this.convertColumnIndexToModel$I(col)).equals$O(Clazz.getClass(String));
});

Clazz.newMeth(C$, 'getDefaultRenderer$Class',  function (type) {
return (type === Clazz.getClass(Double)  || type === Clazz.getClass(Number)   || type === Clazz.getClass(java.lang.Object)   ? this.numberFieldRenderer : C$.superclazz.prototype.getDefaultRenderer$Class.apply(this, [type]));
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var renderer=C$.superclazz.prototype.getCellRenderer$I$I.apply(this, [row, column]);
this.skippedFramesRenderer.setBaseRenderer$javax_swing_table_TableCellRenderer(renderer);
return this.skippedFramesRenderer;
});

Clazz.newMeth(C$, 'sort$I',  function (col) {
if (col > 0 && this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.isSelected$() ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].gapsButton.doClick$I(0);
}C$.superclazz.prototype.sort$I.apply(this, [col]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "HeaderUnitsRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataTable','.HeaderRenderer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DataTable$javax_swing_table_TableCellRenderer',  function (table, renderer) {
;Clazz.super_(C$,this,table);C$.superclazz.c$$javax_swing_table_TableCellRenderer.apply(this,[renderer]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []);
if (track.tp != null  && Clazz.instanceOf(value, "java.lang.String") ) {
var $var=value;
var varName=$var;
var k=varName.indexOf$S("_{ ");
if (k > 0) {
varName=varName.substring$I$I(0, k);
}var units=track.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, varName);
if (units.length$() > 0) {
value=$var + " (" + units.trim$() + ")" ;
}}return C$.superclazz.prototype.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I.apply(this, [table, value, isSelected, hasFocus, row, col]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableTrackView, "ColumnsDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cbActionListener=((P$.TableTrackView$ColumnsDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$ColumnsDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.doCheckBoxAction$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'], [Integer.parseInt$S((e.getSource$()).getActionCommand$())]);
});
})()
), Clazz.new_(P$.TableTrackView$ColumnsDialog$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['isPositioned','haveGUI'],'O',['columnsScroller','javax.swing.JScrollPane','checkBoxes','javax.swing.JToggleButton[]','columnsPanel','javax.swing.JPanel','trackLabel','javax.swing.JLabel','defineButton','javax.swing.JButton','+closeButton','+textColumnButton','buttonPanel','javax.swing.JPanel','track','org.opensourcephysics.cabrillo.tracker.TTrack','cbActionListener','java.awt.event.ActionListener','myFollower','java.awt.event.ComponentListener']]]

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
p$1.refreshCheckboxes.apply(this, []);
this.pack$();
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dialogLastVisible=false;
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_cabrillo_tracker_TTrack',  function (frame, track) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[frame, false]);C$.$init$.apply(this);
this.track=track;
p$1.rebuild$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this, [track]);
}, 1);

Clazz.newMeth(C$, 'doCheckBoxAction$I',  function (i) {
if (Clazz.instanceOf(this.checkBoxes[i], "javax.swing.JRadioButton")) {
this.checkBoxes[i].setSelected$Z(true);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex > -1 && this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex != i ) this.checkBoxes[this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex].setSelected$Z(false);
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex=i;
} else {
var add=this.checkBoxes[i].isSelected$();
var name=this.checkBoxes[i].getText$();
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsCheckBoxes.set$I$Z(i, add);
var names=this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], []).getTextColumnNames$();
for (var j=0; j < names.size$(); j++) {
var next=names.get$I(j);
if (next.equals$O(name)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsTextColumnsVisible.set$I$Z(j, add);
break;
}}
}var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
trackerPanel.changed=true;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refreshing) this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refresh$I$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [trackerPanel.getFrameNumber$(), 4608]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex > -1) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].getDataTable$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], []).getTableHeader$().repaint$();
}}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.myFollower=(this.getOwner$()).addFollower$java_awt_Component$java_awt_Point(this, null);
this.haveGUI=true;
this.columnsPanel=Clazz.new_($I$(1,1));
this.columnsPanel.setBackground$java_awt_Color($I$(5).WHITE);
this.columnsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$I$I,[0, 4]));
this.columnsScroller=Clazz.new_($I$(15,1).c$$java_awt_Component,[this.columnsPanel]);
var empty=$I$(4).createEmptyBorder$I$I$I$I(0, 3, 0, 2);
var etched=$I$(4).createEtchedBorder$();
this.columnsScroller.setBorder$javax_swing_border_Border($I$(4).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etched));
var contentPane=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.closeButton=Clazz.new_([$I$(17).getString$S("Dialog.Button.Close")],$I$(16,1).c$$S);
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$ColumnsDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$ColumnsDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'], [false]);
});
})()
), Clazz.new_(P$.TableTrackView$ColumnsDialog$2.$init$,[this, null])));
this.defineButton=Clazz.new_([$I$(17).getString$S("TView.Menuitem.Define")],$I$(16,1).c$$S);
this.defineButton.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$ColumnsDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$ColumnsDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'].track != null ) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
trackerPanel.getDataBuilder$().setSelectedPanel$S(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'].track.getName$());
trackerPanel.getDataBuilder$().setVisible$Z(true);
}});
})()
), Clazz.new_(P$.TableTrackView$ColumnsDialog$3.$init$,[this, null])));
this.defineButton.setToolTipText$S($I$(17).getString$S("Button.Define.Tooltip"));
this.textColumnButton=Clazz.new_([$I$(17).getString$S("TableTrackView.Menu.TextColumn.Text")],$I$(16,1).c$$S);
this.textColumnButton.setToolTipText$S($I$(17).getString$S("TableTrackView.Menu.TextColumn.Tooltip"));
this.textColumnButton.addActionListener$java_awt_event_ActionListener(((P$.TableTrackView$ColumnsDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableTrackView$ColumnsDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var popup=Clazz.new_($I$(18,1));
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].addColumnItems$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [popup]);
$I$(19,"setFonts$O$I",[popup, $I$(19).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'].textColumnButton, 0, this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView.ColumnsDialog'].textColumnButton.getHeight$());
});
})()
), Clazz.new_(P$.TableTrackView$ColumnsDialog$4.$init$,[this, null])));
this.buttonPanel=Clazz.new_($I$(1,1));
this.trackLabel=Clazz.new_($I$(20,1));
this.trackLabel.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(7, 0, 7, 0));
this.trackLabel.setHorizontalAlignment$I(0);
}, p$1);

Clazz.newMeth(C$, 'refreshButtonPanel',  function () {
this.buttonPanel.removeAll$();
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex < 0 && trackerPanel.isEnabled$S("data.builder") ) this.buttonPanel.add$java_awt_Component(this.defineButton);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex < 0 && trackerPanel.isEnabled$S("text.columns") ) this.buttonPanel.add$java_awt_Component(this.textColumnButton);
this.buttonPanel.add$java_awt_Component(this.closeButton);
}, p$1);

Clazz.newMeth(C$, 'refreshGUI',  function () {
if (!this.haveGUI) return;
$I$(19).setFonts$java_awt_Container(this.buttonPanel);
$I$(19).setFonts$java_awt_Container(this.columnsPanel);
$I$(19).setFonts$java_awt_Container(this.trackLabel);
this.closeButton.setText$S($I$(17).getString$S("Dialog.Button.Close"));
this.defineButton.setText$S($I$(17).getString$S("TView.Menuitem.Define"));
this.defineButton.setToolTipText$S($I$(17).getString$S("Button.Define.Tooltip"));
this.setTitle$S($I$(17).getString$S("TableTView.Dialog.TableColumns.Title"));
this.textColumnButton.setText$S($I$(17).getString$S("TableTrackView.Menu.TextColumn.Text"));
this.textColumnButton.setToolTipText$S($I$(17).getString$S("TableTrackView.Menu.TextColumn.Tooltip"));
}, p$1);

Clazz.newMeth(C$, 'refreshCheckboxes',  function () {
if (!this.haveGUI) p$1.createGUI.apply(this, []);
p$1.refreshButtonPanel.apply(this, []);
var boxCount=p$1.getCheckBoxCount.apply(this, []);
if (this.checkBoxes == null  || boxCount > this.checkBoxes.length ) this.checkBoxes=Clazz.array($I$(21), [boxCount]);
for (var i=0; i < boxCount; i++) {
var name=i < this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].aNames.length ? this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].aNames[i] : i < this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].datasetCount ? this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].trackDataManager.getDataset$I(i).getYColumnName$() : this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].textColumnNames.get$I(i - this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].datasetCount);
if (this.checkBoxes[i] == null ) {
this.checkBoxes[i]=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex > -1 ? Clazz.new_($I$(22,1)) : Clazz.new_($I$(23,1));
this.checkBoxes[i].setBackground$java_awt_Color($I$(5).white);
this.checkBoxes[i].setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(1, 5, 1, 0));
this.checkBoxes[i].setActionCommand$S("" + i);
this.checkBoxes[i].setToolTipText$S(this.track.getDataDescription$I(i + 1));
this.checkBoxes[i].addActionListener$java_awt_event_ActionListener(this.cbActionListener);
this.checkBoxes[i].setOpaque$Z(false);
this.checkBoxes[i].setFont$java_awt_Font(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].$font);
}this.checkBoxes[i].setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex > -1 ? i == this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex : this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].bsCheckBoxes.get$I(i));
this.checkBoxes[i].setName$S(name);
this.checkBoxes[i].setText$S($I$(24).removeSubscripting$S(name));
}
this.columnsPanel.removeAll$();
var dataOrder=this.track.getPreferredDataOrder$();
var bsMissed=Clazz.new_($I$(25,1));
bsMissed.set$I$I(0, boxCount);
for (var i=0, n=dataOrder.size$(); i < n; i++) {
var pt=(dataOrder.get$I(i)).$c();
if (pt < this.checkBoxes.length) this.columnsPanel.add$java_awt_Component(this.checkBoxes[pt]);
bsMissed.clear$I(pt);
}
for (var i=bsMissed.nextSetBit$I(0); i >= 0; i=bsMissed.nextSetBit$I(i + 1)) {
if (i < this.checkBoxes.length) this.columnsPanel.add$java_awt_Component(this.checkBoxes[i]);
}
p$1.refreshGUI.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setPortPosition',  function () {
var port=this.columnsScroller.getViewport$();
var dim=port.getViewSize$();
var offset=port.getExtentSize$().height;
port.setViewPosition$java_awt_Point(Clazz.new_($I$(26,1).c$$I$I,[0, dim.height - offset]));
}, p$1);

Clazz.newMeth(C$, 'rebuild$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
$I$(19).setFonts$java_awt_Container(this);
this.track=track;
this.setResizable$Z(true);
this.getContentPane$().removeAll$();
p$1.refreshCheckboxes.apply(this, []);
this.trackLabel.setIcon$javax_swing_Icon(track.getFootprint$().getIcon$I$I(21, 16));
this.trackLabel.setText$S(track.getName$());
this.textColumnButton.setEnabled$Z(!track.isLocked$());
this.add$java_awt_Component$O(this.trackLabel, "North");
this.add$java_awt_Component$O(this.columnsScroller, "Center");
this.add$java_awt_Component$O(this.buttonPanel, "South");
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'showOrHideDialog$',  function () {
var vis=!this.isVisible$();
if (!this.isPositioned) {
this.isPositioned=true;
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].columnsDialogButton.getLocationOnScreen$();
var w=this.getWidth$();
this.setLocation$I$I(p.x - w, p.y);
if (vis) {
this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].refresh$I$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'], [this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].panelID).getFrameNumber$(), 4608]);
}}this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].dialogLastVisible=vis;
this.setVisible$Z(vis);
});

Clazz.newMeth(C$, 'getCheckBoxCount',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].myDatasetIndex > -1 ? this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].varCount : this.b$['org.opensourcephysics.cabrillo.tracker.TableTrackView'].colCount;
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.columnsPanel.removeAll$();
(this.getOwner$()).removeComponentListener$java_awt_event_ComponentListener(this.myFollower);
this.myFollower=null;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
