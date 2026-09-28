(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},p$3={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.cabrillo.tracker.ExportDataDialog','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TTrack','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.CenterOfMass','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.JScrollPane','javax.swing.JCheckBox','org.opensourcephysics.display.TeXParser','java.io.File','java.util.ArrayList',['org.opensourcephysics.media.core.NumberField','.NumberFormatter'],'java.awt.Toolkit','javax.swing.JPopupMenu','javax.swing.Box',['org.opensourcephysics.cabrillo.tracker.ExportDataDialog','.MyButton'],'org.opensourcephysics.display.OSPRuntime','java.util.HashMap','java.util.BitSet','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.cabrillo.tracker.TrackerIO','javajs.async.AsyncDialog',['org.opensourcephysics.cabrillo.tracker.ExportDataDialog','.TracksDialog'],['org.opensourcephysics.cabrillo.tracker.ExportDataDialog','.ColumnsDialog'],'org.opensourcephysics.cabrillo.tracker.DynamicSystem','org.opensourcephysics.cabrillo.tracker.Vector','org.opensourcephysics.controls.XML','StringBuffer','org.opensourcephysics.cabrillo.tracker.LineProfile','org.opensourcephysics.cabrillo.tracker.Tracker','java.text.NumberFormat','java.util.Arrays','javax.swing.JMenuItem','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','java.io.FileOutputStream','java.nio.charset.Charset','java.io.BufferedWriter','java.io.OutputStreamWriter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExportDataDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['MyButton',0],['TracksDialog',1],['ColumnsDialog',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allTracks=Clazz.new_($I$(20,1));
this.asFormatted=true;
this.firstTextColumnIndex=-1;
this.firstSelectedTextColumnIndex=-1;
this.checkboxListener=((P$.ExportDataDialog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.showColumnsDialogAction$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [Integer.parseInt$S(e.getActionCommand$.apply(e, []))]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['asFormatted'],'I',['firstTextColumnIndex','firstSelectedTextColumnIndex'],'O',['panelID','Integer','allTracks','java.util.ArrayList','frame','org.opensourcephysics.cabrillo.tracker.TFrame','saveAsButton','javax.swing.JButton','+closeButton','+copyButton','tracksPanel','javax.swing.JComponent','+columnsPanel','+delimiterPanel','+formatPanel','tracksButton','org.opensourcephysics.cabrillo.tracker.ExportDataDialog.MyButton','+columnsButton','+delimiterButton','+formatButton','tracksDialog','org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog','columnsDialog','org.opensourcephysics.cabrillo.tracker.ExportDataDialog.ColumnsDialog','popup','javax.swing.JPopupMenu','defaultFormatter','org.opensourcephysics.media.core.NumberField.NumberFormatter','trackType','Class','checkboxListener','java.awt.event.ActionListener']]
,['S',['fullPrecisionPattern'],'O',['dataExporter','org.opensourcephysics.cabrillo.tracker.ExportDataDialog','lastSaved','java.io.File','buttonColor','java.awt.Color','selectedTracksBSMap','java.util.HashMap','+allColumnsMap','+selectedColumnsBSMap','+userHasSetDataMap']]]

Clazz.newMeth(C$, 'getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (C$.dataExporter == null ) {
C$.dataExporter=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
} else {
p$2.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(C$.dataExporter, [panel]);
p$2.refreshGUI.apply(C$.dataExporter, []);
}return C$.dataExporter;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.setResizable$Z(false);
this.defaultFormatter=Clazz.new_($I$(21,1).c$$Z,[false]);
this.defaultFormatter.setSigFigs$I(4);
p$2.createGUI.apply(this, []);
p$2.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
p$2.refreshGUI.apply(this, []);
var dim=$I$(22).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.popup=Clazz.new_($I$(23,1));
var contentPane=Clazz.new_([Clazz.new_($I$(6,1))],$I$(5,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var settingsPanel=$I$(24).createVerticalBox$();
contentPane.add$java_awt_Component$O(settingsPanel, "Center");
var upper=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[1, 2])],$I$(5,1).c$$java_awt_LayoutManager);
var lower=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[1, 2])],$I$(5,1).c$$java_awt_LayoutManager);
this.tracksPanel=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[0, 1])],$I$(5,1).c$$java_awt_LayoutManager);
this.tracksButton=Clazz.new_($I$(25,1),[this, null]);
this.tracksButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.showTracksDialogAction.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda2.$init$,[this, null])));
this.tracksPanel.add$java_awt_Component(this.tracksButton);
this.delimiterPanel=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[0, 1])],$I$(5,1).c$$java_awt_LayoutManager);
this.delimiterButton=((P$.ExportDataDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.ExportDataDialog','.MyButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return p$2.getDelimiterMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.ExportDataDialog$1));
this.delimiterPanel.add$java_awt_Component(this.delimiterButton);
this.columnsPanel=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[0, 1])],$I$(5,1).c$$java_awt_LayoutManager);
this.columnsButton=Clazz.new_($I$(25,1),[this, null]);
this.columnsButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.showColumnsDialogAction$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [-1]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda3.$init$,[this, null])));
this.columnsPanel.add$java_awt_Component(this.columnsButton);
this.formatPanel=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[0, 1])],$I$(5,1).c$$java_awt_LayoutManager);
this.formatButton=((P$.ExportDataDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.ExportDataDialog','.MyButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return p$2.getFormatMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.ExportDataDialog$2));
this.formatPanel.add$java_awt_Component(this.formatButton);
settingsPanel.add$java_awt_Component(upper);
settingsPanel.add$java_awt_Component(lower);
upper.add$java_awt_Component(this.tracksPanel);
upper.add$java_awt_Component(this.columnsPanel);
lower.add$java_awt_Component(this.formatPanel);
lower.add$java_awt_Component(this.delimiterPanel);
this.saveAsButton=Clazz.new_($I$(9,1));
this.saveAsButton.setForeground$java_awt_Color(Clazz.new_($I$(11,1).c$$I$I$I,[0, 0, 102]));
this.saveAsButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.saveAsAction.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda4.$init$,[this, null])));
this.copyButton=Clazz.new_($I$(9,1));
this.copyButton.setForeground$java_awt_Color(Clazz.new_($I$(11,1).c$$I$I$I,[0, 0, 102]));
this.copyButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var data=p$2.getDataString.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
if (data == null ) {
$I$(22).getDefaultToolkit$().beep$.apply($I$(22).getDefaultToolkit$(), []);
return;
}$I$(26).copy$S$java_awt_datatransfer_ClipboardOwner(data, null);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda5.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(9,1));
this.closeButton.setForeground$java_awt_Color(Clazz.new_($I$(11,1).c$$I$I$I,[0, 0, 102]));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks.clear$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks, []);
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda6.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(5,1));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.saveAsButton);
buttonbar.add$java_awt_Component(this.copyButton);
buttonbar.add$java_awt_Component(this.closeButton);
C$.allColumnsMap=Clazz.new_($I$(27,1));
C$.userHasSetDataMap=Clazz.new_($I$(27,1));
}, p$2);

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var newTracks=panel.getExportableTracks$();
if (newTracks.isEmpty$()) {
$I$(22).getDefaultToolkit$().beep$();
return;
}this.allTracks.clear$();
for (var i=0; i < newTracks.size$(); i++) {
var next=newTracks.get$I(i);
this.allTracks.add$O(Integer.valueOf$I(next.getID$()));
var type=p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this, [next]);
var allColumns=C$.allColumnsMap.get$O(type);
if (allColumns == null ) {
allColumns=Clazz.new_($I$(20,1));
C$.allColumnsMap.put$O$O(type, allColumns);
var sets=next.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).getDatasetsRaw$();
for (var j=0; j < sets.size$(); j++) {
var dataset=sets.get$I(j);
allColumns.add$O(dataset.getYColumnName$());
}
}var textColNames=next.getTextColumnNames$();
for (var m=0; m < textColNames.size$(); m++) {
if (!allColumns.contains$O(textColNames.get$I(m))) {
if (this.firstTextColumnIndex == -1) this.firstTextColumnIndex=allColumns.size$();
allColumns.add$O(textColNames.get$I(m));
}}
}
if (panel.getID$() !== this.panelID ) {
this.panelID=panel.getID$();
if (!C$.userHasSetDataMap.containsKey$O(this.panelID)) {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this, [this.panelID]);
selectedTracksBS.clear$();
p$2.selectTrack$org_opensourcephysics_cabrillo_tracker_TTrack$Z.apply(this, [$I$(4,"getTrack$I",[(this.allTracks.get$I(0)).$c()]), true]);
}}if (!C$.userHasSetDataMap.containsKey$O(this.panelID)) C$.userHasSetDataMap.put$O$O(this.panelID, Boolean.valueOf$Z(false));
if ((!((C$.userHasSetDataMap.get$O(this.panelID)).$c()))) {
p$2.selectDefaultColumns$Z.apply(this, [true]);
}}, p$2);

Clazz.newMeth(C$, 'selectTrack$org_opensourcephysics_cabrillo_tracker_TTrack$Z',  function (track, selected) {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this, [this.panelID]);
selectedTracksBS.set$I$Z(track.getID$(), selected);
if (selectedTracksBS.isEmpty$()) {
this.trackType=null;
} else if (selectedTracksBS.cardinality$() == 1) {
track=$I$(4,"getTrack$I",[selectedTracksBS.nextSetBit$I(0)]);
this.trackType=p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this, [track]);
} else {
if (this.trackType === Clazz.getClass($I$(13)) ) {
this.trackType=p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this, [track]);
}}}, p$2);

Clazz.newMeth(C$, 'selectDefaultColumns$Z',  function (selectTrack) {
var choosers=this.frame.getVisibleChoosers$Integer(this.panelID);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null ) continue;
var view=choosers[i].getSelectedView$();
if (view.getViewType$() == 1) {
var tView=view;
var track=tView.getSelectedTrack$();
if (track != null  && p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this, [track]) === this.trackType  ) {
if (selectTrack) {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this, [this.panelID]);
selectedTracksBS.clear$();
p$2.selectTrack$org_opensourcephysics_cabrillo_tracker_TTrack$Z.apply(this, [track, true]);
}var tableView=tView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var cols=tableView.getVisibleColumns$();
var selectedColsBS=p$2.getSelectedColumnsBitSet$Class.apply(this, [this.trackType]);
selectedColsBS.clear$();
var allColumnNames=C$.allColumnsMap.get$O(this.trackType);
for (var j=0; j < cols.length; j++) {
var $var=cols[j];
for (var k=0; k < allColumnNames.size$(); k++) {
if (allColumnNames.get$I(k).equals$O($var)) {
selectedColsBS.set$I(k);
break;
}}
}
break;
}}}
}, p$2);

Clazz.newMeth(C$, 'getSelectedTracksBitSet$Integer',  function (panelID) {
if (C$.selectedTracksBSMap == null ) C$.selectedTracksBSMap=Clazz.new_($I$(27,1));
var selected=C$.selectedTracksBSMap.get$O(panelID);
if (selected == null ) {
selected=Clazz.new_($I$(28,1));
C$.selectedTracksBSMap.put$O$O(panelID, selected);
}return selected;
}, p$2);

Clazz.newMeth(C$, 'getSelectedColumnsBitSet$Class',  function (type) {
if (C$.selectedColumnsBSMap == null ) C$.selectedColumnsBSMap=Clazz.new_($I$(27,1));
var namesBS=C$.selectedColumnsBSMap.get$O(type);
if (namesBS == null ) {
namesBS=Clazz.new_($I$(28,1));
C$.selectedColumnsBSMap.put$O$O(type, namesBS);
}return namesBS;
}, p$2);

Clazz.newMeth(C$, 'getFirstSelectedTrack',  function () {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this, [this.panelID]);
return selectedTracksBS.isEmpty$() ? null : $I$(4,"getTrack$I",[selectedTracksBS.nextSetBit$I(0)]);
}, p$2);

Clazz.newMeth(C$, 'setDelimiterAction$S',  function (delimName) {
var isAdd=delimName.equals$O($I$(10).getString$S("ExportDataDialog.Delimiter.Add"));
var isRemove=delimName.equals$O($I$(10).getString$S("ExportDataDialog.Delimiter.Remove"));
var delimiter=$I$(29).getDelimiter$();
if (isAdd) {
var response=$I$(30,"showInputDialog$java_awt_Component$S$S$I$S",[this, $I$(10).getString$S("TableTrackView.Dialog.CustomDelimiter.Message"), $I$(10).getString$S("TableTrackView.Dialog.CustomDelimiter.Title"), -1, delimiter]);
if (response != null  && !"".equals$O(response.toString()) ) {
var s=response.toString();
$I$(29).setDelimiter$S(s);
$I$(31).addCustomDelimiter$S(s);
}} else if (isRemove) {
var choices=$I$(29).customDelimiters.values$().toArray$OA(Clazz.array(String, [1]));
Clazz.new_($I$(32,1)).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(this, $I$(10).getString$S("TableTrackView.Dialog.RemoveDelimiter.Message"), $I$(10).getString$S("TableTrackView.Dialog.RemoveDelimiter.Title"), -1, null, choices, null, ((P$.ExportDataDialog$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var s=e.getActionCommand$.apply(e, []);
if (s != null ) {
$I$(31).removeCustomDelimiter$S(s);
}});
})()
), Clazz.new_(P$.ExportDataDialog$lambda7.$init$,[this, null])));
} else {
if ($I$(31).getDelimiters$().keySet$().contains$O(delimName)) $I$(29,"setDelimiter$S",[$I$(31).getDelimiters$().get$O(delimName)]);
 else if ($I$(29).customDelimiters.keySet$().contains$O(delimName)) $I$(29,"setDelimiter$S",[$I$(29).customDelimiters.get$O(delimName)]);
}p$2.refreshGUI.apply(this, []);
});

Clazz.newMeth(C$, 'setFormatAction$S',  function (format) {
this.asFormatted=format.equals$O($I$(10).getString$S("TableTrackView.MenuItem.Formatted"));
p$2.refreshGUI.apply(this, []);
}, p$2);

Clazz.newMeth(C$, 'getPatternFromTable$S',  function ($var) {
var choosers=this.frame.getVisibleChoosers$Integer(this.panelID);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null ) continue;
var view=choosers[i].getSelectedView$();
if (view.getViewType$() == 1) {
var tableTView=view;
var track=tableTView.getSelectedTrack$();
if (track != null ) {
var trackView=tableTView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
return trackView.getDataTable$().getFormatPattern$S($var);
}}}
return null;
}, p$2);

Clazz.newMeth(C$, 'showTracksDialogAction',  function () {
if (this.tracksDialog == null ) this.tracksDialog=Clazz.new_($I$(33,1),[this, null]);
this.tracksDialog.refreshDisplay$();
$I$(3,"setFonts$O$I",[this.tracksDialog, $I$(3).getLevel$()]);
this.tracksDialog.pack$();
var p=this.tracksButton.getLocationOnScreen$();
p.x-=this.tracksButton.getLocation$().x;
p.y+=this.tracksButton.getHeight$();
this.tracksDialog.setLocation$java_awt_Point(p);
this.tracksDialog.setVisible$Z(true);
}, p$2);

Clazz.newMeth(C$, 'showColumnsDialogAction$I',  function (num) {
if (num < 0) {
if (this.columnsDialog == null ) this.columnsDialog=Clazz.new_($I$(34,1),[this, null]);
p$3.rebuild.apply(this.columnsDialog, []);
$I$(3,"setFonts$O$I",[this.columnsDialog, $I$(3).getLevel$()]);
this.columnsDialog.pack$();
var p=this.columnsButton.getLocationOnScreen$();
p.x-=this.columnsButton.getLocation$().x;
p.y+=this.columnsButton.getHeight$();
this.columnsDialog.setLocation$java_awt_Point(p);
this.columnsDialog.setVisible$Z(true);
} else {
var add=this.columnsDialog.checkBoxes[num].isSelected$();
var namesBS=p$2.getSelectedColumnsBitSet$Class.apply(this, [this.trackType]);
namesBS.set$I$Z(num, add);
C$.userHasSetDataMap.put$O$O(this.panelID, Boolean.valueOf$Z(true));
p$2.refreshGUI.apply(this, []);
}}, p$2);

Clazz.newMeth(C$, 'getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
return Clazz.getClass($I$(14)).isAssignableFrom$Class(track.getClass$()) ? track.getClass$() === Clazz.getClass($I$(13))  || track.getClass$() === Clazz.getClass($I$(35))   ? Clazz.getClass($I$(13)) : Clazz.getClass($I$(14)) : Clazz.getClass($I$(36)).isAssignableFrom$Class(track.getClass$()) ? Clazz.getClass($I$(36)) : track.getClass$();
}, p$2);

Clazz.newMeth(C$, 'saveAsAction',  function () {
var chooser=$I$(29).getChooser$();
chooser.setSelectedFile$java_io_File(C$.lastSaved);
var files=$I$(31).getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(this.frame, "save data", null);
if (files == null  || files.length == 0 ) return;
var file=files[0];
if ($I$(37,"getExtension$S",[file.getName$()]) == null ) {
file=Clazz.new_([file.getAbsolutePath$() + ".txt"],$I$(19,1).c$$S);
}if (!$I$(29).canWrite$java_io_File(file)) return;
var output=p$2.getDataString.apply(this, []);
if (output == null ) return;
p$2.write$java_io_File$S.apply(this, [file, output]);
C$.lastSaved=file;
}, p$2);

Clazz.newMeth(C$, 'getDataString',  function () {
var buf=Clazz.new_($I$(38,1));
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this, [this.panelID]);
if (selectedTracksBS.isEmpty$()) return null;
var selectedTracks=Clazz.array($I$(4), [selectedTracksBS.cardinality$()]);
var n=0;
for (var k=selectedTracksBS.nextSetBit$I(0); k >= 0; k=selectedTracksBS.nextSetBit$I(k + 1)) {
selectedTracks[n++]=$I$(4).getTrack$I(k);
}
var allColumnNames=C$.allColumnsMap.get$O(this.trackType);
var datasetCount=allColumnNames.size$();
var namesBS=p$2.getSelectedColumnsBitSet$Class.apply(this, [this.trackType]);
var selectedColumnNames=Clazz.array(String, [namesBS.cardinality$()]);
n=0;
this.firstSelectedTextColumnIndex=-1;
for (var k=namesBS.nextSetBit$I(0); k >= 0; k=namesBS.nextSetBit$I(k + 1)) {
selectedColumnNames[n++]=allColumnNames.get$I(k);
if (this.firstTextColumnIndex > -1 && k >= this.firstTextColumnIndex  && this.firstSelectedTextColumnIndex == -1 ) {
this.firstSelectedTextColumnIndex=n - 1;
}}
var xVar=null;
var selectedTrackCount=selectedTracks.length;
var selectedTrackData=Clazz.array($I$(20), [selectedTrackCount]);
n=0;
for (var i=0; i < selectedTracks.length; i++) {
var track=selectedTracks[i];
selectedTrackData[i]=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).getDatasetsRaw$();
if (xVar == null ) xVar=selectedTrackData[i].get$I(0).getXColumnName$();
}
var isFrames=this.trackType !== Clazz.getClass($I$(39)) ;
var frameIndex=isFrames ? -1 : 0;
for (var i=0; i < datasetCount; i++) {
if (allColumnNames.get$I(i).equals$O("frame")) {
frameIndex=i;
break;
}}
if (frameIndex == -1) return null;
var colsPerTrack=selectedColumnNames.length;
var dataValues=Clazz.array(Double.TYPE, [selectedTrackCount, colsPerTrack, null]);
var textValues=Clazz.array(String, [selectedTrackCount, colsPerTrack, null]);
var frameNumbers=Clazz.array(Double.TYPE, [selectedTrackCount, null]);
for (var i=0; i < selectedTrackCount; i++) {
var track=selectedTracks[i];
var datasets=selectedTrackData[i];
var dataset=datasets.get$I(frameIndex);
frameNumbers[i]=p$2.getPoints$org_opensourcephysics_display_Dataset$Z.apply(this, [dataset, isFrames]);
 outer : for (var k=0; k < selectedColumnNames.length; k++) {
var colName=selectedColumnNames[k];
for (var j=0; j < datasetCount; j++) {
if (datasets.size$() <= j) break;
dataset=datasets.get$I(j);
if (dataset.getYColumnName$().equals$O(colName)) {
dataValues[i][k]=p$2.getPoints$org_opensourcephysics_display_Dataset$Z.apply(this, [dataset, true]);
if (!panel.isAnglesInRadians$() && (colName.startsWith$S($I$(40).THETA) || colName.startsWith$S($I$(40).OMEGA) || colName.startsWith$S($I$(40).ALPHA)  ) ) {
var angles=dataValues[i][k];
for (var m=0; m < angles.length; m++) {
angles[m]*=(57.29577951308232);
}
}continue outer;
}}
var textColNames=track.getTextColumnNames$();
for (var m=0; m < textColNames.size$(); m++) {
if (textColNames.get$I(m).equals$O(colName)) {
textValues[i][k]=Clazz.array(String, [frameNumbers[i].length]);
for (var a=0; a < frameNumbers[i].length; a++) {
textValues[i][k][a]=track.getTextColumnEntry$S$I(colName, (frameNumbers[i][a]|0));
}
}}
}
}
var min=2147483647;
var max=-1;
for (var i=0; i < selectedTrackCount; i++) {
if (frameNumbers[i].length == 0) continue;
min=(Math.min(min, frameNumbers[i][0])|0);
max=(Math.max(max, frameNumbers[i][frameNumbers[i].length - 1])|0);
}
var hasData=max >= 0;
var frameCount=hasData ? (max - min + 1) : 0;
var indices=Clazz.array(Integer.TYPE, [selectedTrackCount, frameCount]);
var timePattern=null;
var patterns=Clazz.array(String, [selectedTrackCount, colsPerTrack]);
var nf=$I$(41).getInstance$();
nf.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(26).getDecimalFormatSymbols$());
if (hasData) {
for (var i=0; i < selectedTrackCount; i++) {
$I$(42).fill$IA$I(indices[i], -1);
n=0;
for (var j=min; j <= max; j++) {
if (frameNumbers[i].length > 0 && frameNumbers[i][n] == j  ) {
indices[i][j - min]=n;
++n;
if (n >= frameNumbers[i].length) break;
}}
}
var track=null;
for (var i=0; i < selectedTracks.length; i++) {
if (selectedTracks[i].getClass$() === this.trackType ) {
track=selectedTracks[i];
break;
}}
if (track == null ) track=selectedTracks[0];
var defaultPatternMap=$I$(4).getDefaultFormatPatterns$I(track.ttype);
if (this.asFormatted) {
for (var i=0; i < selectedTrackCount; i++) {
track=selectedTracks[i];
var fieldMap=track.getNumberFields$();
var fields=fieldMap.get$O(xVar);
timePattern=fields != null  && fields.length > 0  ? fields[0].getFixedPattern$() : p$2.getPatternFromTable$S.apply(this, [xVar]);
for (var j=0; j < colsPerTrack; j++) {
var $var=selectedColumnNames[j];
var pattern=null;
if ($var != null ) {
fields=fieldMap.get$O($var);
pattern=fields != null  && fields.length > 0  ? fields[0].getFixedPattern$() : p$2.getPatternFromTable$S.apply(this, [$var]);
if (pattern == null ) {
pattern=defaultPatternMap.get$O($var);
}}patterns[i][j]=pattern;
}
}
} else {
timePattern=isFrames ? C$.fullPrecisionPattern : "0";
for (var i=0; i < selectedTrackCount; i++) {
for (var j=0; j < colsPerTrack; j++) {
var $var=selectedColumnNames[j];
var pattern=defaultPatternMap.get$O($var);
patterns[i][j]="0".equals$O(pattern) ? pattern : "0.000000E0";
}
}
}}if (selectedTrackCount > 1) {
buf.append$S("#multi:");
buf.append$S($I$(37).NEW_LINE);
}buf.append$S($I$(29).getDelimiter$());
for (var i=0; i < selectedTrackCount; i++) {
var track=selectedTracks[i];
buf.append$S(track.getName$());
for (var j=0; j < colsPerTrack; j++) {
if (p$2.isUndefinedTextColumn$I$SA.apply(this, [j, textValues[i][j]])) continue;
buf.append$S($I$(29).getDelimiter$());
}
}
buf.append$S($I$(37).NEW_LINE);
buf.append$S(xVar);
buf.append$S($I$(29).getDelimiter$());
for (var i=0; i < selectedTrackCount; i++) {
for (var j=0; j < colsPerTrack; j++) {
if (selectedColumnNames[j] == null ) {
buf.append$S($I$(29).getDelimiter$());
continue;
}if (p$2.isUndefinedTextColumn$I$SA.apply(this, [j, textValues[i][j]])) continue;
buf.append$S($I$(18).removeSubscripting$S(selectedColumnNames[j]));
buf.append$S($I$(29).getDelimiter$());
}
}
buf.append$S($I$(37).NEW_LINE);
if (hasData) {
var player=panel.getPlayer$();
for (var i=min; i <= max; i++) {
var value=isFrames ? player.getFrameTime$I(i) / 1000 : i;
if (timePattern != null  && !"".equals$O(timePattern) ) {
nf.applyPattern$S(timePattern);
buf.append$S(nf.format$D(value));
} else {
buf.append$S(this.defaultFormatter.getText$D(value));
}for (var j=0; j < selectedTrackCount; j++) {
var data=dataValues[j];
for (var k=0; k < colsPerTrack; k++) {
if (p$2.isUndefinedTextColumn$I$SA.apply(this, [k, textValues[j][k]])) continue;
buf.append$S($I$(29).getDelimiter$());
if (indices[j][i - min] > -1) {
if (data[k] == null ) {
var text=textValues[j];
if (text[k] != null ) {
var s=text[k][indices[j][i - min]];
if (s != null  && !s.equals$O("null") ) buf.append$S(s);
}continue;
}value=data[k][indices[j][i - min]];
if (!Double.isNaN$D(value)) {
var pattern=patterns[j][k];
if (pattern != null  && !"".equals$O(pattern) ) {
nf.applyPattern$S(pattern);
buf.append$S(nf.format$D(value));
} else {
buf.append$S(this.defaultFormatter.getText$D(value));
}}}}
}
buf.append$S($I$(37).NEW_LINE);
}
}return buf.toString();
}, p$2);

Clazz.newMeth(C$, 'isUndefinedTextColumn$I$SA',  function (col, textEntries) {
if (this.firstSelectedTextColumnIndex > -1 && col >= this.firstSelectedTextColumnIndex ) {
return textEntries == null ;
}return false;
}, p$2);

Clazz.newMeth(C$, 'getPoints$org_opensourcephysics_display_Dataset$Z',  function (dataset, isY) {
var p=isY ? dataset.getYPointsRaw$() : dataset.getXPointsRaw$();
return $I$(42,"copyOf$DA$I",[p, dataset.getIndex$()]);
}, p$2);

Clazz.newMeth(C$, 'getDelimiterMenu',  function () {
this.popup.removeAll$();
for (var key, $key = $I$(31).getDelimiters$().keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var item=Clazz.new_($I$(43,1).c$$S,[key]);
item.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].setDelimiterAction$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.$finals$.key]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda8.$init$,[this, {key:key}])));
this.popup.add$javax_swing_JMenuItem(item);
}
var hasCustom=!$I$(29).customDelimiters.isEmpty$();
if (hasCustom) {
this.popup.addSeparator$();
for (var key, $key = $I$(29).customDelimiters.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var item=Clazz.new_($I$(43,1).c$$S,[key]);
item.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].setDelimiterAction$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.$finals$.key]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda9.$init$,[this, {key:key}])));
this.popup.add$javax_swing_JMenuItem(item);
}
}this.popup.addSeparator$();
var add=$I$(10).getString$S("ExportDataDialog.Delimiter.Add");
var item=Clazz.new_($I$(43,1).c$$S,[add]);
item.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].setDelimiterAction$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.$finals$.add]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda10.$init$,[this, {add:add}])));
this.popup.add$javax_swing_JMenuItem(item);
if (hasCustom) {
var rem=$I$(10).getString$S("ExportDataDialog.Delimiter.Remove");
item=Clazz.new_($I$(43,1).c$$S,[rem]);
item.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].setDelimiterAction$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.$finals$.rem]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda11.$init$,[this, {rem:rem}])));
this.popup.add$javax_swing_JMenuItem(item);
}$I$(3,"setFonts$O$I",[this.popup, $I$(3).getLevel$()]);
return this.popup;
}, p$2);

Clazz.newMeth(C$, 'getFormatMenu',  function () {
this.popup.removeAll$();
var form=$I$(10).getString$S("TableTrackView.MenuItem.Formatted");
var unform=$I$(10).getString$S("TableTrackView.MenuItem.Unformatted");
var item=Clazz.new_($I$(43,1).c$$S,[form]);
item.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.setFormatAction$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.$finals$.form]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda12.$init$,[this, {form:form}])));
this.popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_($I$(43,1).c$$S,[unform]);
item.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.setFormatAction$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.$finals$.unform]);
});
})()
), Clazz.new_(P$.ExportDataDialog$lambda13.$init$,[this, {unform:unform}])));
this.popup.add$javax_swing_JMenuItem(item);
$I$(3,"setFonts$O$I",[this.popup, $I$(3).getLevel$()]);
return this.popup;
}, p$2);

Clazz.newMeth(C$, 'refreshGUI',  function () {
var title=$I$(10).getString$S("ExportDataDialog.Title");
this.setTitle$S(title);
title=$I$(10).getString$S("Undo.Description.Tracks");
var space=$I$(8).createEmptyBorder$I$I$I$I(0, 4, 6, 4);
var titled=$I$(8).createTitledBorder$S(title);
$I$(3,"setFonts$O$I",[titled, $I$(3).getLevel$()]);
this.tracksPanel.setBorder$javax_swing_border_Border($I$(8).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(10).getString$S("ExportDataDialog.Subtitle.Delimiter");
titled=$I$(8).createTitledBorder$S(title);
$I$(3,"setFonts$O$I",[titled, $I$(3).getLevel$()]);
this.delimiterPanel.setBorder$javax_swing_border_Border($I$(8).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(10).getString$S("TableTrackView.Button.SelectTableData");
titled=$I$(8).createTitledBorder$S(title);
$I$(3,"setFonts$O$I",[titled, $I$(3).getLevel$()]);
this.columnsPanel.setBorder$javax_swing_border_Border($I$(8).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(10).getString$S("ExportDataDialog.Subtitle.Format");
titled=$I$(8).createTitledBorder$S(title);
$I$(3,"setFonts$O$I",[titled, $I$(3).getLevel$()]);
this.formatPanel.setBorder$javax_swing_border_Border($I$(8).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
this.saveAsButton.setText$S($I$(10).getString$S("ExportVideoDialog.Button.SaveAs"));
this.copyButton.setText$S($I$(10).getString$S("CircleFitter.MenuItem.CopyToClipboard.Text"));
this.closeButton.setText$S($I$(10).getString$S("Dialog.Button.Close"));
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this, [this.panelID]);
var track=p$2.getFirstSelectedTrack.apply(this, []);
var s=track == null  ? "" : track.getName$();
if (selectedTracksBS.cardinality$() > 1) s+=" + " + (selectedTracksBS.cardinality$() - 1);
this.tracksButton.setText$S(s);
s="";
for (var k=selectedTracksBS.nextSetBit$I(0); k >= 0; k=selectedTracksBS.nextSetBit$I(k + 1)) {
s+=$I$(4).getTrack$I(k).getName$() + ", ";
}
var end=Math.min(s.length$() - 2, 300);
this.tracksButton.setToolTipText$S(s.length$() > 1 ? s.substring$I$I(0, end) : null);
var delim=$I$(29).getDelimiter$();
for (var key, $key = $I$(31).getDelimiters$().keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (delim.equals$O($I$(31).getDelimiters$().get$O(key))) this.delimiterButton.setText$S(key);
}
for (var key, $key = $I$(29).customDelimiters.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (delim.equals$O($I$(29).customDelimiters.get$O(key))) this.delimiterButton.setText$S(key);
}
this.delimiterButton.setToolTipText$S(this.delimiterButton.getText$());
var form=$I$(10).getString$S("TableTrackView.MenuItem.Formatted");
var unform=$I$(10).getString$S("TableTrackView.MenuItem.Unformatted");
this.formatButton.setText$S(this.asFormatted ? form : unform);
this.formatButton.setToolTipText$S(this.formatButton.getText$());
s="";
if (track != null ) {
var allColumnNames=C$.allColumnsMap.get$O(this.trackType);
var xVar=s=track.getClass$().getSimpleName$().contains$CharSequence("LineProfile") ? "n" : "t";
var selectedColsBS=p$2.getSelectedColumnsBitSet$Class.apply(this, [this.trackType]);
var count=0;
var max=2;
for (var i=0; i < allColumnNames.size$(); i++) {
var name=allColumnNames.get$I(i);
if (selectedColsBS.get$I(i)) {
++count;
if (count <= max) s+=", " + $I$(18).removeSubscripting$S(name);
}}
if (count > max) s+=" + " + (count - max);
var tooltip=xVar;
for (var k=selectedColsBS.nextSetBit$I(0); k >= 0; k=selectedColsBS.nextSetBit$I(k + 1)) {
tooltip+=", " + allColumnNames.get$I(k);
}
this.columnsButton.setToolTipText$S(tooltip);
}this.columnsButton.setText$S(s);
$I$(3,"setFonts$O$I",[this, $I$(3).getLevel$()]);
this.pack$();
}, p$2);

Clazz.newMeth(C$, 'write$java_io_File$S',  function (file, content) {
if (file.exists$() && !file.canWrite$() ) {
$I$(44,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(45).getString$S("Dialog.ReadOnly.Message"), $I$(45).getString$S("Dialog.ReadOnly.Title"), -1]);
return null;
}try {
var stream=Clazz.new_($I$(46,1).c$$java_io_File,[file]);
var charset=$I$(47).forName$S("UTF-8");
var out=Clazz.new_([Clazz.new_($I$(49,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset])],$I$(48,1).c$$java_io_Writer);
out.write$S(content);
out.flush$();
out.close$();
if (file.exists$()) {
return $I$(37).getAbsolutePath$java_io_File(file);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}, p$2);

Clazz.newMeth(C$, 'clear$',  function () {
this.frame=null;
this.panelID=null;
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.fullPrecisionPattern="0.000000E0";
C$.lastSaved=Clazz.new_($I$(19,1).c$$S,[""]);
C$.buttonColor=$I$(11).WHITE;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportDataDialog, "MyButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setIcon$javax_swing_Icon($I$(1).DOWN_ARROW_ICON);
this.setHorizontalTextPosition$I(10);
this.alwaysShowBorder$Z(true);
this.setBackground$java_awt_Color($I$(2).buttonColor);
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var w=(($I$(3).getFactor$() * 100)|0);
dim.width=Math.max(w, dim.width);
return dim;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportDataDialog, "TracksDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['allTracksSelected'],'O',['okButton','javax.swing.JButton','+selectAllButton','+selectNoneButton','checkboxPanel','javax.swing.JPanel','checkboxListener','java.awt.event.ActionListener','instructions','javax.swing.border.TitledBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].frame, true]);C$.$init$.apply(this);
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.refreshDisplay$();
this.pack$();
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].panelID]);
if (vis) this.refreshDisplay$();
 else if (selectedTracksBS.isEmpty$()) {
p$2.selectTrack$org_opensourcephysics_cabrillo_tracker_TTrack$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [$I$(4,"getTrack$I",[(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks.get$I(0)).$c()]), true]);
p$2.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var inspectorPanel=Clazz.new_([Clazz.new_($I$(6,1))],$I$(5,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(inspectorPanel);
this.checkboxPanel=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I,[0, 2])],$I$(5,1).c$$java_awt_LayoutManager);
var etched=$I$(8).createEtchedBorder$();
this.instructions=$I$(8).createTitledBorder$javax_swing_border_Border$S(etched, "");
this.checkboxPanel.setBorder$javax_swing_border_Border(this.instructions);
inspectorPanel.add$java_awt_Component$O(this.checkboxPanel, "Center");
this.checkboxListener=((P$.ExportDataDialog$TracksDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$TracksDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var id=Integer.parseInt$S(e.getActionCommand$());
var track=$I$(4).getTrack$I(id);
var checkbox=e.getSource$();
p$2.selectTrack$org_opensourcephysics_cabrillo_tracker_TTrack$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [track, checkbox.isSelected$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'].refreshDisplay$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'], []);
$I$(2).userHasSetDataMap.put$O$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].panelID, Boolean.valueOf$Z(true));
});
})()
), Clazz.new_(P$.ExportDataDialog$TracksDialog$1.$init$,[this, null]));
this.okButton=Clazz.new_([$I$(10).getString$S("Dialog.Button.OK")],$I$(9,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(11,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$TracksDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$TracksDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'], [false]);
});
})()
), Clazz.new_(P$.ExportDataDialog$TracksDialog$2.$init$,[this, null])));
this.selectAllButton=Clazz.new_([$I$(10).getString$S("PlotGuestDialog.Button.SelectAll.Text")],$I$(9,1).c$$S);
this.selectAllButton.setForeground$java_awt_Color(Clazz.new_($I$(11,1).c$$I$I$I,[0, 0, 102]));
this.selectAllButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$TracksDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$TracksDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].panelID]);
for (var id, $id = this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks.iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var track=$I$(4,"getTrack$I",[(id).$c()]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType.isAssignableFrom$Class(p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [track])) || p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [track]).isAssignableFrom$Class(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType) ) {
selectedTracksBS.set$I((id).$c());
}}
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'].refreshDisplay$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'], []);
});
})()
), Clazz.new_(P$.ExportDataDialog$TracksDialog$3.$init$,[this, null])));
this.selectNoneButton=Clazz.new_([$I$(10).getString$S("PlotGuestDialog.Button.SelectNone.Text")],$I$(9,1).c$$S);
this.selectNoneButton.setForeground$java_awt_Color(Clazz.new_($I$(11,1).c$$I$I$I,[0, 0, 102]));
this.selectNoneButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$TracksDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$TracksDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].panelID]);
selectedTracksBS.clear$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType=null;
this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'].refreshDisplay$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog.TracksDialog'], []);
});
})()
), Clazz.new_(P$.ExportDataDialog$TracksDialog$4.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(5,1));
buttonbar.setBorder$javax_swing_border_Border($I$(8).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
inspectorPanel.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.selectAllButton);
buttonbar.add$java_awt_Component(this.selectNoneButton);
buttonbar.add$java_awt_Component(this.okButton);
}, p$1);

Clazz.newMeth(C$, 'refreshDisplay$',  function () {
this.setTitle$S($I$(10).getString$S("ExportDataDialog.TracksDialog.Title"));
this.instructions.setTitle$S($I$(10).getString$S("ExportDataDialog.TracksDialog.Instructions"));
var tracksPerRow=3;
var rows=1 + (this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks.size$()/tracksPerRow|0);
this.checkboxPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I$I,[rows, 0]));
this.checkboxPanel.removeAll$();
var selectedTracksBS=p$2.getSelectedTracksBitSet$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].panelID]);
this.allTracksSelected=!selectedTracksBS.isEmpty$();
for (var i=0; i < this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks.size$(); i++) {
var next=$I$(4,"getTrack$I",[(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].allTracks.get$I(i)).$c()]);
var checkbox=Clazz.new_([next.getName$(), next.getFootprint$().getIcon$I$I(21, 16)],$I$(12,1).c$$S$javax_swing_Icon);
checkbox.setBorderPainted$Z(false);
var selected=selectedTracksBS.get$I(next.getID$());
checkbox.setSelected$Z(selected);
checkbox.setEnabled$Z(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType == null  || this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType.isAssignableFrom$Class(p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [next]))  || p$2.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [next]).isAssignableFrom$Class(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType) );
if (checkbox.isEnabled$()) {
this.allTracksSelected=this.allTracksSelected && selected ;
}checkbox.setActionCommand$S(String.valueOf$I(next.getID$()));
checkbox.addActionListener$java_awt_event_ActionListener(this.checkboxListener);
this.checkboxPanel.add$java_awt_Component(checkbox);
}
this.okButton.setText$S($I$(10).getString$S("Dialog.Button.OK"));
this.okButton.setEnabled$Z(!selectedTracksBS.isEmpty$());
var isEnabled=!selectedTracksBS.isEmpty$() && !this.allTracksSelected ;
var type=this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType === Clazz.getClass($I$(13))  ? Clazz.getClass($I$(14)) : this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType;
this.selectAllButton.setText$S($I$(10).getString$S("PlotGuestDialog.Button.SelectAll.Text") + (this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType != null  ? " " + type.getSimpleName$() : ""));
this.selectAllButton.setEnabled$Z(isEnabled);
this.selectNoneButton.setText$S($I$(10).getString$S("PlotGuestDialog.Button.SelectNone.Text"));
this.selectNoneButton.setEnabled$Z(!selectedTracksBS.isEmpty$());
$I$(3,"setFonts$O$I",[this.checkboxPanel, $I$(3).getLevel$()]);
this.pack$();
$I$(15).repaintT$java_awt_Component(this);
p$2.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportDataDialog, "ColumnsDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['contentPane','javax.swing.JPanel','checkBoxes','javax.swing.JCheckBox[]','columnsPanel','javax.swing.JPanel','okButton','javax.swing.JButton','instructions','javax.swing.border.TitledBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].frame, true]);C$.$init$.apply(this);
p$3.createGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.columnsPanel=Clazz.new_($I$(5,1));
this.columnsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I$I,[0, 4]));
this.columnsPanel.setBorder$javax_swing_border_Border($I$(8).createEmptyBorder$I$I$I$I(0, 1, 0, 4));
var columnsScroller=Clazz.new_($I$(16,1).c$$java_awt_Component,[this.columnsPanel]);
var etched=$I$(8).createEtchedBorder$();
this.instructions=$I$(8).createTitledBorder$javax_swing_border_Border$S(etched, "");
columnsScroller.setBorder$javax_swing_border_Border(this.instructions);
this.okButton=Clazz.new_($I$(9,1));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.ExportDataDialog$ColumnsDialog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportDataDialog$ColumnsDialog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.ExportDataDialog$ColumnsDialog$lambda1.$init$,[this, null])));
var buttonPanel=Clazz.new_($I$(5,1));
buttonPanel.add$java_awt_Component(this.okButton);
this.contentPane=((P$.ExportDataDialog$ColumnsDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportDataDialog$ColumnsDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height=((dim.height * 1.1)|0);
return dim;
});
})()
), Clazz.new_([this, null, Clazz.new_($I$(6,1))],$I$(5,1).c$$java_awt_LayoutManager,P$.ExportDataDialog$ColumnsDialog$1));
this.setContentPane$java_awt_Container(this.contentPane);
this.contentPane.add$java_awt_Component$O(columnsScroller, "Center");
this.contentPane.add$java_awt_Component$O(buttonPanel, "South");
}, p$3);

Clazz.newMeth(C$, 'refreshDisplay',  function () {
this.okButton.setText$S($I$(10).getString$S("Dialog.Button.OK"));
this.setTitle$S($I$(10).getString$S("ExportDataDialog.ColumnsDialog.Title"));
this.instructions.setTitle$S($I$(10).getString$S("ExportDataDialog.TracksDialog.Instructions"));
p$2.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], []);
}, p$3);

Clazz.newMeth(C$, 'refreshCheckboxes',  function () {
var allColumnNames=$I$(2).allColumnsMap.get$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType);
if (this.checkBoxes == null  || allColumnNames.size$() != this.checkBoxes.length ) this.checkBoxes=Clazz.array($I$(17), [allColumnNames.size$()]);
var namesBS=p$2.getSelectedColumnsBitSet$Class.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].trackType]);
this.columnsPanel.removeAll$();
for (var i=0; i < allColumnNames.size$(); i++) {
var name=allColumnNames.get$I(i);
if (this.checkBoxes[i] == null ) {
this.checkBoxes[i]=Clazz.new_($I$(17,1));
this.checkBoxes[i].setBackground$java_awt_Color($I$(11).white);
this.checkBoxes[i].setBorder$javax_swing_border_Border($I$(8).createEmptyBorder$I$I$I$I(1, 5, 1, 0));
this.checkBoxes[i].setActionCommand$S("" + i);
this.checkBoxes[i].addActionListener$java_awt_event_ActionListener(this.b$['org.opensourcephysics.cabrillo.tracker.ExportDataDialog'].checkboxListener);
this.checkBoxes[i].setOpaque$Z(false);
}this.checkBoxes[i].setSelected$Z(namesBS.get$I(i));
this.checkBoxes[i].setName$S(name);
this.checkBoxes[i].setText$S($I$(18).removeSubscripting$S(name));
this.columnsPanel.add$java_awt_Component(this.checkBoxes[i]);
}
p$3.refreshDisplay.apply(this, []);
}, p$3);

Clazz.newMeth(C$, 'rebuild',  function () {
$I$(3).setFonts$java_awt_Container(this);
this.setResizable$Z(true);
p$3.refreshCheckboxes.apply(this, []);
this.pack$();
}, p$3);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
