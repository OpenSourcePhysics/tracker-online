(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','org.opensourcephysics.display.OSPRuntime','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.cabrillo.tracker.ShapeIcon',['org.opensourcephysics.cabrillo.tracker.AttachmentDialog','.AttachmentCellRenderer'],['org.opensourcephysics.cabrillo.tracker.AttachmentDialog','.TTrackRenderer'],'javax.swing.JOptionPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JComboBox','org.opensourcephysics.cabrillo.tracker.PointMass',['org.opensourcephysics.cabrillo.tracker.AttachmentDialog','.AttachmentComboBoxModel'],'org.opensourcephysics.tools.FontSizer','java.awt.Dimension','javax.swing.JTable',['org.opensourcephysics.cabrillo.tracker.AttachmentDialog','.AttachmentTableModel'],['org.opensourcephysics.cabrillo.tracker.AttachmentDialog','.AttachmentCellEditor'],'javax.swing.JScrollPane','java.awt.GridLayout','javax.swing.JRadioButton','javax.swing.AbstractAction','javax.swing.ButtonGroup','javax.swing.JCheckBox','org.opensourcephysics.cabrillo.tracker.TFrame','java.awt.event.FocusAdapter','org.opensourcephysics.media.core.IntegerField','javax.swing.JButton','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.RGBRegion','org.opensourcephysics.cabrillo.tracker.ParticleModel','java.util.Vector','javax.swing.DefaultComboBoxModel']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AttachmentDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');
C$.$classes$=[['AttachmentTableModel',0],['AttachmentCellRenderer',0],['AttachmentCellEditor',0],['TTrackRenderer',0],['AttachmentComboBoxModel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cellheight=28;
this.dummyIcon=Clazz.new_($I$(8,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[null, 21, 16]);
this.attachmentCellRenderer=Clazz.new_($I$(9,1),[this, null]);
this.trackCellRenderer=Clazz.new_($I$(10,1),[this, null]);
this.trackEditorRenderer=Clazz.new_($I$(10,1),[this, null]);
this.toolRenderer=Clazz.new_($I$(10,1),[this, null]);
},1);

C$.$fields$=[['Z',['isVisible','refreshing'],'I',['trackID','cellheight'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','closeButton','javax.swing.JButton','+helpButton','attachableTracks','java.util.ArrayList','table','javax.swing.JTable','rendererDropdown','javax.swing.JComboBox','+editorDropdown','+measuringToolDropdown','dummyMass','org.opensourcephysics.cabrillo.tracker.TTrack','dummyIcon','javax.swing.Icon','scrollPane','javax.swing.JScrollPane','attachmentCellRenderer','org.opensourcephysics.cabrillo.tracker.AttachmentDialog.AttachmentCellRenderer','trackCellRenderer','org.opensourcephysics.cabrillo.tracker.AttachmentDialog.TTrackRenderer','+trackEditorRenderer','+toolRenderer','attachmentsPanel','javax.swing.JPanel','+circleFitterPanel','+circleFitterStartStopPanel','stepsButton','javax.swing.JRadioButton','+tracksButton','relativeCheckbox','javax.swing.JCheckBox','startField','org.opensourcephysics.media.core.IntegerField','+countField','startLabel','javax.swing.JLabel','+countLabel','myFollower','java.awt.event.ComponentListener']]
,['O',['panelProps','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(11).getFrameForComponent$java_awt_Component(track.tp), false]);C$.$init$.apply(this);
this.panelID=track.tp.getID$();
this.frame=track.tframe;
p$1.createGUI.apply(this, []);
this.setMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.refreshDropdowns$();
track.tp.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.myFollower=this.frame.addFollower$java_awt_Component$java_awt_Point(this, null);
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.refreshGUI$();
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "tab":
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (!this.frame.isRemovingAll$() && this.panelID != null   && e.getNewValue$() === trackerPanel  ) {
this.setVisible$Z(this.isVisible);
} else {
var vis=this.isVisible;
this.setVisible$Z(false);
this.isVisible=vis;
}break;
case "track":
var deleted=e.getOldValue$();
if (deleted != null ) {
deleted.removeListenerNCF$java_beans_PropertyChangeListener(this);
var measuringTool=$I$(1).getTrack$I(this.trackID);
if (measuringTool != null ) {
if (measuringTool !== deleted ) {
var attachments=measuringTool.getAttachments$();
for (var i=0; i < attachments.length; i++) {
if (deleted === attachments[i]  || deleted === measuringTool  ) {
attachments[i]=null;
}}
measuringTool.refreshAttachments$();
} else {
this.trackID=0;
}}}this.refreshDropdowns$();
this.refreshGUI$();
break;
case "selectedtrack":
if (e.getNewValue$() != null ) {
var track=e.getNewValue$();
for (var i=0; i < this.measuringToolDropdown.getItemCount$(); i++) {
if (track === this.measuringToolDropdown.getItemAt$I(i) ) {
this.measuringToolDropdown.setSelectedIndex$I(i);
break;
}}
}break;
case "clear":
for (var t, $t = $I$(1).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
this.refreshDropdowns$();
this.refreshGUI$();
break;
case "dataPoint":
var measuringTool=$I$(1).getTrack$I(this.trackID);
measuringTool.refreshAttachments$();
var dm=this.table.getModel$();
dm.fireTableDataChanged$();
break;
default:
this.refreshGUI$();
break;
}
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.isVisible=vis;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
for (var p, $p = this.attachableTracks.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
this.attachableTracks.clear$();
this.dummyMass.delete$();
this.dummyMass=null;
var measuringTool=$I$(1).getTrack$I(this.trackID);
if (measuringTool.ttype == 1) {
measuringTool.removePropertyChangeListener$S$java_beans_PropertyChangeListener("dataPoint", this);
}if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.frame.removeComponentListener$java_awt_event_ComponentListener(this.myFollower);
this.myFollower=null;
}trackerPanel.attachmentDialog=null;
this.panelID=null;
this.frame=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.attachmentsPanel=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(this.attachmentsPanel, "Center");
var north=Clazz.new_($I$(12,1));
north.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(4, 0, 0, 0));
this.measuringToolDropdown=Clazz.new_($I$(14,1));
this.measuringToolDropdown.setRenderer$javax_swing_ListCellRenderer(this.toolRenderer);
this.measuringToolDropdown.addActionListener$java_awt_event_ActionListener(((P$.AttachmentDialog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AttachmentDialog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tool=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].measuringToolDropdown.getSelectedItem$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].measuringToolDropdown, []);
var measuringTool=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
if (tool === measuringTool ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].setMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], [tool]);
});
})()
), Clazz.new_(P$.AttachmentDialog$lambda1.$init$,[this, null])));
north.add$java_awt_Component(this.measuringToolDropdown);
this.attachmentsPanel.add$java_awt_Component$O(north, "North");
this.dummyMass=Clazz.new_($I$(15,1));
this.rendererDropdown=Clazz.new_([Clazz.new_($I$(16,1),[this, null])],$I$(14,1).c$$javax_swing_ComboBoxModel);
this.rendererDropdown.setRenderer$javax_swing_ListCellRenderer(this.trackCellRenderer);
this.editorDropdown=Clazz.new_([Clazz.new_($I$(16,1),[this, null])],$I$(14,1).c$$javax_swing_ComboBoxModel);
this.editorDropdown.setRenderer$javax_swing_ListCellRenderer(this.trackCellRenderer);
this.table=((P$.AttachmentDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AttachmentDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTable'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].cellheight=font.getSize$() + 16;
this.setRowHeight$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].cellheight);
var w=((60 * (1 + $I$(17).getLevel$() * 0.3))|0);
this.getColumnModel$().getColumn$I(0).setPreferredWidth$I(w);
this.getColumnModel$().getColumn$I(1).setPreferredWidth$I(2 * w);
this.getTableHeader$().setPreferredSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[w, this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].cellheight]));
});
})()
), Clazz.new_([this, null, Clazz.new_($I$(20,1),[this, null])],$I$(19,1).c$$javax_swing_table_TableModel,P$.AttachmentDialog$1));
this.attachmentCellRenderer=Clazz.new_($I$(9,1),[this, null]);
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(1)), this.attachmentCellRenderer);
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(String), this.attachmentCellRenderer);
this.table.setRowHeight$I(this.cellheight);
var editor=Clazz.new_($I$(21,1),[this, null]);
this.table.getColumnModel$().getColumn$I(1).setCellEditor$javax_swing_table_TableCellEditor(editor);
this.scrollPane=((P$.AttachmentDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AttachmentDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var cellCount=Math.max(4, this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].table.getRowCount$() + 1);
cellCount=Math.min(10, cellCount);
dim.height=cellCount * this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].cellheight + 8;
dim.width=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].table.getPreferredSize$().width + 20;
return dim;
});
})()
), Clazz.new_($I$(22,1).c$$java_awt_Component,[this, null, this.table],P$.AttachmentDialog$2));
var center=Clazz.new_([Clazz.new_($I$(23,1).c$$I$I,[1, 1])],$I$(12,1).c$$java_awt_LayoutManager);
this.attachmentsPanel.add$java_awt_Component$O(center, "Center");
center.add$java_awt_Component(this.scrollPane);
center.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(4, 4, 4, 4));
this.stepsButton=Clazz.new_($I$(24,1));
this.tracksButton=Clazz.new_($I$(24,1));
var tracksOrStepsAction=((P$.AttachmentDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AttachmentDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshing) return;
var fitter=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
fitter.attachToSteps=!this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].tracksButton.isSelected$();
fitter.refreshAttachments$();
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], []);
var dm=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].table.getModel$();
dm.fireTableDataChanged$();
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.AttachmentDialog$3));
this.stepsButton.addActionListener$java_awt_event_ActionListener(tracksOrStepsAction);
this.tracksButton.addActionListener$java_awt_event_ActionListener(tracksOrStepsAction);
var group=Clazz.new_($I$(26,1));
group.add$javax_swing_AbstractButton(this.stepsButton);
group.add$javax_swing_AbstractButton(this.tracksButton);
this.tracksButton.setSelected$Z(true);
this.relativeCheckbox=Clazz.new_($I$(27,1));
this.relativeCheckbox.setSelected$Z(false);
this.relativeCheckbox.addActionListener$java_awt_event_ActionListener(((P$.AttachmentDialog$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AttachmentDialog$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshing) return;
var fitter=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
fitter.isRelativeFrameNumbers=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].relativeCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].relativeCheckbox, []);
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshFieldsAndButtons$org_opensourcephysics_cabrillo_tracker_CircleFitter.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], [fitter]);
fitter.refreshAttachments$.apply(fitter, []);
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], []);
});
})()
), Clazz.new_(P$.AttachmentDialog$lambda2.$init$,[this, null])));
var frameRangeAction=((P$.AttachmentDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AttachmentDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fitter=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
fitter.setAttachmentStartFrame$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].startField.getIntValue$());
fitter.setAttachmentFrameCount$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].countField.getIntValue$());
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshFieldsAndButtons$org_opensourcephysics_cabrillo_tracker_CircleFitter.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], [fitter]);
fitter.refreshAttachments$();
var dm=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].table.getModel$();
dm.fireTableDataChanged$();
$I$(28).repaintT$java_awt_Component(fitter.tp);
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.AttachmentDialog$4));
var frameRangeFocusListener=((P$.AttachmentDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AttachmentDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].startField  && this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].startField.getBackground$() !== $I$(3).yellow  ) return;
if (e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].countField  && this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].countField.getBackground$() !== $I$(3).yellow  ) return;
this.$finals$.frameRangeAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(29,1),[this, {frameRangeAction:frameRangeAction}],P$.AttachmentDialog$5));
this.startField=Clazz.new_($I$(30,1).c$$I,[3]);
this.startField.addActionListener$java_awt_event_ActionListener(frameRangeAction);
this.startField.addFocusListener$java_awt_event_FocusListener(frameRangeFocusListener);
this.countField=Clazz.new_($I$(30,1).c$$I,[2]);
this.countField.addActionListener$java_awt_event_ActionListener(frameRangeAction);
this.countField.addFocusListener$java_awt_event_FocusListener(frameRangeFocusListener);
this.startLabel=Clazz.new_($I$(5,1));
this.startLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.countLabel=Clazz.new_($I$(5,1));
this.countLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.circleFitterPanel=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.circleFitterPanel.setBorder$javax_swing_border_Border($I$(6).createTitledBorder$S(""));
var buttonbar=Clazz.new_($I$(12,1));
this.circleFitterPanel.add$java_awt_Component$O(buttonbar, "North");
buttonbar.add$java_awt_Component(this.stepsButton);
buttonbar.add$java_awt_Component(this.tracksButton);
this.circleFitterStartStopPanel=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
var empty=$I$(6).createEmptyBorder$I$I$I$I(0, 4, 0, 4);
var etched=$I$(6).createEtchedBorder$();
this.circleFitterStartStopPanel.setBorder$javax_swing_border_Border($I$(6).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etched));
buttonbar=Clazz.new_($I$(12,1));
buttonbar.add$java_awt_Component(this.startLabel);
buttonbar.add$java_awt_Component(this.startField);
buttonbar.add$java_awt_Component(this.countLabel);
buttonbar.add$java_awt_Component(this.countField);
this.circleFitterStartStopPanel.add$java_awt_Component$O(buttonbar, "Center");
buttonbar=Clazz.new_($I$(12,1));
this.circleFitterStartStopPanel.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.relativeCheckbox);
this.helpButton=Clazz.new_($I$(31,1));
this.helpButton.setForeground$java_awt_Color(Clazz.new_($I$(3,1).c$$I$I$I,[0, 0, 102]));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.AttachmentDialog$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AttachmentDialog$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var measuringTool=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
var keyword=measuringTool == null  ? "circle" : measuringTool.ttype == 6 ? "protractor" : measuringTool.ttype == 8 ? "tape" : "circle";
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].frame.showHelp$S$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].frame, [keyword + "#attach", 0]);
});
})()
), Clazz.new_(P$.AttachmentDialog$lambda3.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(31,1));
this.closeButton.setForeground$java_awt_Color(Clazz.new_($I$(3,1).c$$I$I$I,[0, 0, 102]));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.AttachmentDialog$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AttachmentDialog$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], [false]);
});
})()
), Clazz.new_(P$.AttachmentDialog$lambda4.$init$,[this, null])));
buttonbar=Clazz.new_($I$(12,1));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.helpButton);
buttonbar.add$java_awt_Component(this.closeButton);
}, p$1);

Clazz.newMeth(C$, 'setMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack',  function (tool) {
var measuringTool=$I$(1).getTrack$I(this.trackID);
if (measuringTool != null  && measuringTool.ttype == 1 ) {
measuringTool.removePropertyChangeListener$S$java_beans_PropertyChangeListener("dataPoint", this);
}measuringTool=tool;
this.trackID=measuringTool.getID$();
if (tool.ttype == 1) measuringTool.addPropertyChangeListener$S$java_beans_PropertyChangeListener("dataPoint", this);
measuringTool.refreshAttachments$();
this.refreshDropdowns$();
if (measuringTool.ttype == 1) {
var fitter=measuringTool;
this.refreshFieldsAndButtons$org_opensourcephysics_cabrillo_tracker_CircleFitter(fitter);
}var dm=this.table.getModel$();
dm.fireTableDataChanged$();
this.refreshGUI$();
});

Clazz.newMeth(C$, 'refreshDropdowns$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (this.attachableTracks == null ) this.attachableTracks=Clazz.new_($I$(32,1));
 else this.attachableTracks.clear$();
this.attachableTracks.addAll$java_util_Collection(trackerPanel.getDrawables$Class(Clazz.getClass($I$(15))));
this.attachableTracks.addAll$java_util_Collection(trackerPanel.getDrawables$Class(Clazz.getClass($I$(33))));
for (var p, $p = this.attachableTracks.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
var measuringTool=$I$(1).getTrack$I(this.trackID);
if (measuringTool != null  && measuringTool.ttype == 8 ) {
var tape=measuringTool;
if (tape.isStickMode$()) {
this.attachableTracks.removeAll$java_util_Collection(trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(34))));
}}for (var p, $p = this.attachableTracks.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.addListenerNCF$java_beans_PropertyChangeListener(this);
}
$I$(17,"setFonts$O$I",[this.rendererDropdown, $I$(17).getLevel$()]);
this.rendererDropdown.setModel$javax_swing_ComboBoxModel(Clazz.new_($I$(16,1),[this, null]));
$I$(17,"setFonts$O$I",[this.editorDropdown, $I$(17).getLevel$()]);
this.editorDropdown.setModel$javax_swing_ComboBoxModel(Clazz.new_($I$(16,1),[this, null]));
$I$(17,"setFonts$O$I",[this.measuringToolDropdown, $I$(17).getLevel$()]);
var tools=Clazz.new_($I$(35,1));
for (var track, $track = trackerPanel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
switch (track.ttype) {
case 8:
case 6:
case 1:
tools.add$O(track);
break;
}
}
trackerPanel.clearTemp$();
for (var p, $p = tools.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.removeListenerNCF$java_beans_PropertyChangeListener(this);
p.addListenerNCF$java_beans_PropertyChangeListener(this);
}
this.measuringToolDropdown.setModel$javax_swing_ComboBoxModel(Clazz.new_($I$(36,1).c$$java_util_Vector,[tools]));
if (!tools.isEmpty$() && measuringTool != null  ) {
this.measuringToolDropdown.setSelectedItem$O(measuringTool);
} else {
for (var next, $next = tools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.setMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack(next);
break;
}
}});

Clazz.newMeth(C$, 'refreshFieldsAndButtons$org_opensourcephysics_cabrillo_tracker_CircleFitter',  function (fitter) {
if (fitter.attachToSteps && fitter.isRelativeFrameNumbers ) {
this.startField.applyPattern$S("+#;-#");
} else {
this.startField.applyPattern$S("#;-#");
}var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var min=fitter.isRelativeFrameNumbers ? 1 - trackerPanel.getPlayer$().getVideoClip$().getFrameCount$() : trackerPanel.getPlayer$().getVideoClip$().getFirstFrameNumber$();
var max=trackerPanel.getPlayer$().getVideoClip$().getLastFrameNumber$();
this.startField.setMaxValue$D(max);
this.startField.setMinValue$D(min);
this.startField.setIntValue$I(fitter.isRelativeFrameNumbers ? fitter.relativeStart : fitter.absoluteStart);
this.countField.setMaxValue$D(50);
this.countField.setMinValue$D(1);
this.countField.setIntValue$I(fitter.getAttachmentFrameCount$());
this.refreshing=true;
this.stepsButton.setSelected$Z(fitter.attachToSteps);
this.relativeCheckbox.setSelected$Z(fitter.isRelativeFrameNumbers);
this.refreshing=false;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(2).getString$S("AttachmentInspector.Title"));
this.helpButton.setText$S($I$(2).getString$S("Dialog.Button.Help"));
this.closeButton.setText$S($I$(2).getString$S("Dialog.Button.Close"));
this.dummyMass.setName$S($I$(2).getString$S("DynamicSystemInspector.ParticleName.None"));
this.startLabel.setText$S($I$(2).getString$S("AttachmentInspector.Label.StartFrame"));
this.countLabel.setText$S($I$(2).getString$S("AttachmentInspector.Label.FrameCount"));
this.stepsButton.setText$S($I$(2).getString$S("AttachmentInspector.Button.Steps"));
this.tracksButton.setText$S($I$(2).getString$S("AttachmentInspector.Button.Tracks"));
this.relativeCheckbox.setText$S($I$(2).getString$S("AttachmentInspector.Checkbox.Relative"));
this.stepsButton.setToolTipText$S($I$(2).getString$S("AttachmentInspector.Button.Steps.Tooltip"));
this.tracksButton.setToolTipText$S($I$(2).getString$S("AttachmentInspector.Button.Tracks.Tooltip"));
this.relativeCheckbox.setToolTipText$S($I$(2).getString$S("AttachmentInspector.Checkbox.Relative.Tooltip"));
var border=this.circleFitterPanel.getBorder$();
border.setTitle$S($I$(2).getString$S("AttachmentInspector.Border.Title.AttachTo"));
var hasCircleFitterPanel=this.attachmentsPanel.getComponentCount$() > 2;
var hasStartStopPanel=this.circleFitterPanel.getComponentCount$() > 1;
var changedLayout=false;
var measuringTool=$I$(1).getTrack$I(this.trackID);
if (measuringTool.ttype == 1) {
changedLayout=!hasCircleFitterPanel;
this.attachmentsPanel.add$java_awt_Component$O(this.circleFitterPanel, "South");
var fitter=measuringTool;
if (!fitter.attachToSteps) {
changedLayout=changedLayout || hasStartStopPanel ;
this.circleFitterPanel.remove$java_awt_Component(this.circleFitterStartStopPanel);
} else {
if (fitter.isRelativeFrameNumbers) {
}changedLayout=changedLayout || !hasStartStopPanel ;
this.circleFitterPanel.add$java_awt_Component$O(this.circleFitterStartStopPanel, "Center");
}} else {
this.attachmentsPanel.remove$java_awt_Component(this.circleFitterPanel);
changedLayout=hasCircleFitterPanel;
}if (changedLayout) {
this.pack$();
}$I$(28).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(17).setFonts$O$I(this, level);
$I$(17).setFonts$O$I(this.attachmentCellRenderer, level);
$I$(17).setFonts$O$I(this.table, level);
$I$(17).setFonts$O$I(this.circleFitterPanel, level);
$I$(17).setFonts$O$I(this.circleFitterStartStopPanel, level);
this.refreshDropdowns$();
this.pack$();
});

C$.$static$=function(){C$.$static$=0;
C$.panelProps=Clazz.array(String, -1, ["track", "selectedtrack", "clear"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttachmentDialog, "AttachmentTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getRowCount$',  function () {
var measuringTool=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
if (measuringTool == null ) return 0;
if (measuringTool.ttype == 1) {
var fitter=measuringTool;
if (fitter.attachToSteps) {
return 1;
}}var attachments=measuringTool.getAttachments$();
return attachments == null  ? 0 : attachments.length;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
var measuringTool=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
if (col == 0) {
return measuringTool.getAttachmentDescription$I(row);
}return measuringTool.getAttachments$()[row];
});

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return col == 0 ? $I$(2).getString$S("AttachmentInspector.Header.PointName") : $I$(2).getString$S("AttachmentInspector.Header.AttachedTo");
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
return col == 1;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (col) {
return col == 0 ? Clazz.getClass(String) : Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (val, row, col) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttachmentDialog, "AttachmentCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setHorizontalAlignment$I(0);
this.setBackground$java_awt_Color($I$(3).white);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, val, selected, hasFocus, row, col) {
if (col == 0) {
this.setText$S(val);
this.validate$();
return this;
}if (val == null ) val=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass;
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].rendererDropdown.setSelectedItem$O(val == null  ? this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass : val);
if ($I$(4).isJS) {
return this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackCellRenderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(null, val, -1, selected, hasFocus);
}return this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].rendererDropdown;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttachmentDialog, "AttachmentCellEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.DefaultCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_JComboBox.apply(this,[this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].editorDropdown]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].editorDropdown.setSelectedItem$O(value == null  ? this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass : value);
return C$.superclazz.prototype.getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I.apply(this, [table, value, isSelected, row, column]);
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
var obj=C$.superclazz.prototype.getCellEditorValue$.apply(this, []);
var row=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].table.getSelectedRow$();
if (row < 0) return null;
var measuringTool=$I$(1).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].trackID);
var attachments=measuringTool.getAttachments$();
if (attachments[row] != null ) {
attachments[row].removeStepListener$java_beans_PropertyChangeListener(measuringTool);
}attachments[row]=obj === this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass  ? null : obj;
measuringTool.refreshAttachments$();
this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'], []);
var dm=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].table.getModel$();
dm.fireTableDataChanged$();
return obj;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttachmentDialog, "TTrackRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, val, index, selected, hasFocus) {
var label=Clazz.new_($I$(5,1));
label.setOpaque$Z(true);
label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(3, 4, 3, 0));
if (list != null ) {
if (selected) {
label.setBackground$java_awt_Color(list.getSelectionBackground$());
label.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
label.setBackground$java_awt_Color(list.getBackground$());
label.setForeground$java_awt_Color(list.getForeground$());
}}if (val != null ) {
var track=val;
label.setText$S(track.getName$());
label.setIcon$javax_swing_Icon(track === this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass  ? Clazz.new_($I$(7,1).c$$javax_swing_Icon,[this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyIcon]) : track.getFootprint$().getIcon$I$I(21, 16));
}return label;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttachmentDialog, "AttachmentComboBoxModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.DefaultComboBoxModel', 'javax.swing.ComboBoxModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selected=this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass;
},1);

C$.$fields$=[['O',['selected','java.lang.Object']]]

Clazz.newMeth(C$, 'getSize$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].attachableTracks == null  ? 1 : this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].attachableTracks.size$() + 1;
});

Clazz.newMeth(C$, 'getElementAt$I',  function (index) {
return index == 0 ? this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass : this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].attachableTracks.get$I(index - 1);
});

Clazz.newMeth(C$, 'setSelectedItem$O',  function (anItem) {
this.selected=anItem;
});

Clazz.newMeth(C$, 'getSelectedItem$',  function () {
return this.selected == null  ? this.b$['org.opensourcephysics.cabrillo.tracker.AttachmentDialog'].dummyMass : this.selected;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
