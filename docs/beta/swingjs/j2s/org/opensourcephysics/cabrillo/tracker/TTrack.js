(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.display.DrawableTextLine','javax.swing.JLabel','org.opensourcephysics.display.TeXParser','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','org.opensourcephysics.display.GUIUtils','java.awt.event.WindowAdapter','javax.swing.JTextField','javax.swing.JToolBar','javax.swing.JPanel','java.awt.BorderLayout','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.util.ArrayList','org.opensourcephysics.display.DataFunction','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TToolBar','java.util.HashMap','java.util.TreeMap','org.opensourcephysics.cabrillo.tracker.Footprint','java.awt.Color',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],['java.awt.geom.Point2D','.Double'],'java.awt.Font','java.util.TreeSet','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.controls.OSPLog','javax.swing.BorderFactory',['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackDecimalField'],'javax.swing.SpinnerNumberModel','javax.swing.JSpinner',['javax.swing.JSpinner','.NumberEditor'],'javax.swing.Box','java.awt.Dimension','java.awt.event.MouseAdapter',['org.opensourcephysics.cabrillo.tracker.TTrack','.TextLineLabel'],['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackNumberField'],'org.opensourcephysics.media.core.NumberField','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.TrackProperties','org.opensourcephysics.cabrillo.tracker.Undo','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.cabrillo.tracker.NumberFormatDialog','javax.swing.JMenu','org.opensourcephysics.display.DatasetManager','org.opensourcephysics.tools.DataTool','org.opensourcephysics.cabrillo.tracker.Calibration','org.opensourcephysics.cabrillo.tracker.CircleFitter','org.opensourcephysics.cabrillo.tracker.CoordAxes','org.opensourcephysics.cabrillo.tracker.LineProfile','org.opensourcephysics.cabrillo.tracker.OffsetOrigin','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.Protractor','org.opensourcephysics.cabrillo.tracker.RGBRegion','org.opensourcephysics.cabrillo.tracker.TapeMeasure','org.opensourcephysics.cabrillo.tracker.Vector','org.opensourcephysics.cabrillo.tracker.TMenuBar','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.TMouseHandler','org.opensourcephysics.cabrillo.tracker.AutoTracker','javax.swing.JDialog','org.opensourcephysics.cabrillo.tracker.TTrack','javax.swing.JTextPane','javax.swing.JCheckBox','javax.swing.JButton','java.awt.Toolkit','org.opensourcephysics.display.Dataset',['org.opensourcephysics.cabrillo.tracker.TTrack','.Loader'],['org.opensourcephysics.cabrillo.tracker.TTrack','.NameDialog']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TTrack", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported'], ['org.opensourcephysics.display.Interactive', 'org.opensourcephysics.media.core.Trackable', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['StepArray',4],['TrackNumberField',4],['TrackDecimalField',4],['TextLineLabel',12],['NameDialog',4],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.name=$I$(14).getString$S("TTrack.Name.None");
this.description="";
this.visible=true;
this.trailVisible=false;
this.trailLength=0;
this.locked=false;
this.enabled=true;
this.viewable=true;
this.footprints=Clazz.array($I$(21), [0]);
this.defaultColors=Clazz.array($I$(22), -1, [$I$(22).red]);
this.steps=Clazz.new_($I$(23,1),[this, null]);
this.properties=Clazz.new_($I$(19,1));
this.points=Clazz.array($I$(24), -1, [Clazz.new_($I$(24,1))]);
this.toolbarTrackComponents=Clazz.new_($I$(15,1));
this.toolbarPointComponents=Clazz.new_($I$(15,1));
this.numberFields=Clazz.new_($I$(20,1));
this.markByDefault=false;
this.isMarking=false;
this.undoEnabled=true;
this.labelFont=Clazz.new_($I$(25,1).c$$S$I$I,["arial", 0, 12]);
this.initialized=true;
this.dataFrames=Clazz.new_($I$(15,1));
this.keyFrames=Clazz.new_($I$(26,1));
this.textColumnEntries=Clazz.new_($I$(20,1));
this.textColumnNames=Clazz.new_($I$(15,1));
},1);

C$.$fields$=[['Z',['visible','trailVisible','locked','enabled','viewable','autoAdvance','markByDefault','isMarking','undoEnabled','initialized','dataValid','refreshDataLater','autoTrackerMarking'],'I',['ttype','trailLength','stepSizeWhenFirstMarked','targetIndex','ID'],'S',['name','description','partName','hint'],'O',['footprints','org.opensourcephysics.cabrillo.tracker.Footprint[]','footprint','org.opensourcephysics.cabrillo.tracker.Footprint','+defaultFootprint','defaultColors','java.awt.Color[]','steps','org.opensourcephysics.cabrillo.tracker.TTrack.StepArray','properties','java.util.HashMap','datasetManager','org.opensourcephysics.display.DatasetManager','points','java.awt.geom.Point2D.Double[]','toolbarTrackComponents','java.util.ArrayList','+toolbarPointComponents','numberFields','java.util.Map','xLabel','org.opensourcephysics.cabrillo.tracker.TTrack.TextLineLabel','+yLabel','+magLabel','+angleLabel','footprintListener','java.awt.event.ActionListener','+circleFootprintListener','labelFont','java.awt.Font','tp','org.opensourcephysics.cabrillo.tracker.TrackerPanel','tframe','org.opensourcephysics.cabrillo.tracker.TFrame','dataProp','org.opensourcephysics.controls.XMLProperty','constantsLoadedFromXML','Object[][]','dataDescriptions','String[]','preferredColumnOrder','int[]','dataFrames','java.util.ArrayList','keyFrames','java.util.TreeSet','attachments','org.opensourcephysics.cabrillo.tracker.TTrack[]','attachmentNames','String[]','textColumnEntries','java.util.Map','textColumnNames','java.util.ArrayList','formatMouseListener','java.awt.event.MouseAdapter','+formatAngleMouseListener','customNumberFormats','String[]','tLabel','javax.swing.JLabel','+stepLabel','+tValueLabel','+stepValueLabel','tField','org.opensourcephysics.media.core.NumberField','+xField','+yField','+magField','angleField','org.opensourcephysics.media.core.DecimalField','positionFields','org.opensourcephysics.media.core.NumberField[]','fieldBorder','javax.swing.border.Border','xSpinner','javax.swing.JSpinner','+ySpinner','footprintMenu','javax.swing.JMenu','tSeparator','java.awt.Component','+xSeparator','+ySeparator','+magSeparator','+angleSeparator','+stepSeparator','visibleItem','javax.swing.JCheckBoxMenuItem','+trailVisibleItem','+markByDefaultItem','+autoAdvanceItem','+lockedItem','+fixedItem','nameItem','javax.swing.JMenuItem','+colorItem','+deleteTrackItem','+deleteStepItem','+clearStepsItem','+descriptionItem','+dataBuilderItem']]
,['I',['nextID'],'O',['HINT_STEP_ADDED_OR_REMOVED','Integer','+HINT_STEPS_SELECTED','panelEventsTTrack','String[]','panelActiveTracks','java.util.HashMap','skippedStepWarningDialog','javax.swing.JDialog','skippedStepWarningTextpane','javax.swing.JTextPane','skippedStepWarningCheckbox','javax.swing.JCheckBox','closeButton','javax.swing.JButton','nameDialog','org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog','baseTrackTypes','String[]','defaultFormatPatterns','java.util.TreeMap[]','+prevDefaultPatterns','NOMAP','java.util.Map','+NOMAPS','NOVARS','String[]','NOVARA','java.util.ArrayList']]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=e.getSource$();
switch (e.getPropertyName$()) {
case "radian_angles":
this.setAnglesInRadians$Z((e.getNewValue$()).valueOf());
break;
case "magnification":
this.erase$();
break;
case "adjusting":
case "stepnumber":
break;
case "data":
this.dataValid=false;
break;
case "imagespace":
this.erase$Integer(trackerPanel.getID$());
break;
case "transform":
case "coords":
if (this.ttype != 5) {
this.dataValid=false;
}this.erase$();
$I$(27).repaintT$java_awt_Component(trackerPanel);
break;
}
} else {
System.out.println$S("??? TTRack " + e);
}});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.removePanelEvents$SA(C$.panelEventsTTrack);
}if (panel == null ) {
this.tp=null;
this.tframe=null;
} else {
this.tp=panel.ref$O(this);
this.tframe=panel.getTFrame$();
this.addPanelEvents$SA(C$.panelEventsTTrack);
}});

Clazz.newMeth(C$, 'addPanelEvents$SA',  function (events) {
for (var i=events.length; --i >= 0; ) this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener(events[i], this);

});

Clazz.newMeth(C$, 'removePanelEvents$SA',  function (events) {
for (var i=events.length; --i >= 0; ) this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener(events[i], this);

});

Clazz.newMeth(C$, 'addListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("format", panel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("mass", panel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("model_end", panel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("model_start", panel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("name", panel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("footprint", panel);
this.addStepListener$java_beans_PropertyChangeListener(panel);
});

Clazz.newMeth(C$, 'removeListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("format", panel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", panel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("model_end", panel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("model_start", panel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("name", panel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("footprint", panel);
this.removeStepListener$java_beans_PropertyChangeListener(panel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", panel);
});

Clazz.newMeth(C$, 'addListenerNCF$java_beans_PropertyChangeListener',  function (l) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("name", l);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("color", l);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("footprint", l);
});

Clazz.newMeth(C$, 'removeListenerNCF$java_beans_PropertyChangeListener',  function (l) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("name", l);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("color", l);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("footprint", l);
});

Clazz.newMeth(C$, 'addStepListener$java_beans_PropertyChangeListener',  function (c) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("step", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("steps", c);
});

Clazz.newMeth(C$, 'removeStepListener$java_beans_PropertyChangeListener',  function (c) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("step", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("steps", c);
});

Clazz.newMeth(C$, 'updateListenerVisible$java_beans_PropertyChangeListener',  function (l) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", l);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("visible", l);
});

Clazz.newMeth(C$, 'getBaseTrackName$I',  function (ttype) {
return (ttype >= 0 ? C$.baseTrackTypes[ttype] : null);
}, 1);

Clazz.newMeth(C$, 'getDefaultFormatPatterns$',  function () {
return C$.defaultFormatPatterns;
}, 1);

Clazz.newMeth(C$, 'savePatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
for (var ttype=C$.baseTrackTypes.length; --ttype >= 0; ) {
var prevPatterns=Clazz.new_($I$(20,1));
prevPatterns.putAll$java_util_Map(panel.getFormatPatterns$I(ttype));
C$.prevDefaultPatterns[ttype]=prevPatterns;
}
}, 1);

Clazz.newMeth(C$, 'restorePatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var patterns=panel.formatPatterns;
for (var ttype=C$.baseTrackTypes.length; --ttype >= 0; ) {
patterns[ttype]=C$.prevDefaultPatterns[ttype];
}
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (ttype) {
Clazz.super_(C$, this);
this.ttype=ttype;
$I$(28).notify$O$S(this, "<init>");
this.ID=C$.nextID++;
this.stepLabel=Clazz.new_($I$(3,1));
this.stepLabel.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.stepValueLabel=Clazz.new_($I$(3,1));
this.stepValueLabel.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.tLabel=Clazz.new_($I$(3,1));
this.tLabel.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.tValueLabel=Clazz.new_($I$(3,1));
this.tValueLabel.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.tField=((P$.TTrack$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackDecimalField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setValue$D',  function (value) {
C$.superclazz.prototype.setValue$D.apply(this, [value]);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tValueLabel.setText$S("(" + this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tField.getText$() + ")" );
});
})()
), Clazz.new_($I$(30,1).c$$I,[this, null, 3],P$.TTrack$1));
this.tField.setUnits$S("s");
var model=Clazz.new_($I$(31,1).c$$D$D$D$D,[0, -100, 100, 0.1]);
this.xSpinner=Clazz.new_($I$(32,1).c$$javax_swing_SpinnerModel,[model]);
var editor=Clazz.new_($I$(33,1).c$$javax_swing_JSpinner$S,[this.xSpinner, "0.00"]);
editor.getTextField$().setHorizontalAlignment$I(2);
this.xSpinner.setEditor$javax_swing_JComponent(editor);
model=Clazz.new_($I$(31,1).c$$D$D$D$D,[0, -100, 100, 0.1]);
this.ySpinner=Clazz.new_($I$(32,1).c$$javax_swing_SpinnerModel,[model]);
editor=Clazz.new_($I$(33,1).c$$javax_swing_JSpinner$S,[this.ySpinner, "0.00"]);
editor.getTextField$().setHorizontalAlignment$I(2);
this.ySpinner.setEditor$javax_swing_JComponent(editor);
this.stepSeparator=$I$(34,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(35,1).c$$I$I,[4, 4])]);
this.tSeparator=$I$(34,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(35,1).c$$I$I,[6, 4])]);
this.xSeparator=$I$(34,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(35,1).c$$I$I,[6, 4])]);
this.ySeparator=$I$(34,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(35,1).c$$I$I,[6, 4])]);
this.magSeparator=$I$(34,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(35,1).c$$I$I,[6, 4])]);
this.angleSeparator=$I$(34,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(35,1).c$$I$I,[6, 4])]);
this.formatMouseListener=((P$.TTrack$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(5).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].showFormatPopup$org_opensourcephysics_media_core_NumberField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [e.getSource$()]);
}});
})()
), Clazz.new_($I$(36,1),[this, null],P$.TTrack$2));
this.formatAngleMouseListener=((P$.TTrack$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e == null  || $I$(5).isPopupTrigger$java_awt_event_InputEvent(e) ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].showAnglePopup$org_opensourcephysics_media_core_NumberField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [e == null  ? this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].angleField : e.getSource$()]);
}});
})()
), Clazz.new_($I$(36,1),[this, null],P$.TTrack$3));
this.xLabel=Clazz.new_($I$(37,1));
this.yLabel=Clazz.new_($I$(37,1));
this.magLabel=Clazz.new_($I$(37,1));
this.angleLabel=Clazz.new_($I$(37,1));
this.xField=Clazz.new_($I$(38,1),[this, null]);
this.yField=Clazz.new_($I$(38,1),[this, null]);
this.magField=Clazz.new_($I$(38,1),[this, null]);
this.magField.setMinValue$D(0);
this.xField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.yField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.magField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.angleField=Clazz.new_($I$(30,1).c$$I,[this, null, 1]);
this.angleField.addMouseListener$java_awt_event_MouseListener(this.formatAngleMouseListener);
var empty=$I$(29).createEmptyBorder$I$I$I$I(0, 3, 0, 3);
var grey=Clazz.new_($I$(22,1).c$$I$I$I,[102, 102, 102]);
var etch=$I$(29,"createEtchedBorder$java_awt_Color$java_awt_Color",[$I$(22).white, grey]);
this.fieldBorder=$I$(29).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etch, empty);
this.tField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.xField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.yField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.magField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.angleField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.positionFields=Clazz.array($I$(39), -1, [this.xField, this.yField, this.magField, this.angleField]);
this.footprintListener=((P$.TTrack$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var footprintName=e.getActionCommand$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []).getName$().equals$O(footprintName)) return;
var control=Clazz.new_([Clazz.new_($I$(41,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this.b$['org.opensourcephysics.cabrillo.tracker.TTrack']])],$I$(40,1).c$$O);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setFootprint$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [footprintName]);
$I$(42).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], control);
});
})()
), Clazz.new_(P$.TTrack$4.$init$,[this, null]));
this.circleFootprintListener=((P$.TTrack$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].footprintListener.actionPerformed$java_awt_event_ActionEvent(e);
var cfp=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
cfp.showProperties$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack']);
});
})()
), Clazz.new_(P$.TTrack$5.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'showAnglePopup$org_opensourcephysics_media_core_NumberField',  function (field) {
var popup=Clazz.new_($I$(43,1));
var item=Clazz.new_($I$(44,1));
var radians=field.getConversionFactor$() == 1 ;
item.addActionListener$java_awt_event_ActionListener(((P$.TTrack$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.anglesInRadians=!this.$finals$.radians;
});
})()
), Clazz.new_(P$.TTrack$6.$init$,[this, {radians:radians}])));
item.setText$S(radians ? $I$(14).getString$S("TTrack.AngleField.Popup.Degrees") : $I$(14).getString$S("TTrack.AngleField.Popup.Radians"));
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
if (this.tp.isEnabled$S("number.formats")) {
item=Clazz.new_($I$(44,1));
var selected=Clazz.array(String, -1, [p$2.getNumberFieldName0$org_opensourcephysics_media_core_NumberField.apply(this, [field])]);
item.addActionListener$java_awt_event_ActionListener(((P$.TTrack$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(45).getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp, this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], this.$finals$.selected).setVisible$Z(true);
});
})()
), Clazz.new_(P$.TTrack$7.$init$,[this, {selected:selected}])));
item.setText$S($I$(14).getString$S("TTrack.MenuItem.NumberFormat"));
popup.add$javax_swing_JMenuItem(item);
}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
popup.show$java_awt_Component$I$I(field, 0, this.angleField.getHeight$());
});

Clazz.newMeth(C$, 'showFormatPopup$org_opensourcephysics_media_core_NumberField',  function (field) {
var fieldName=null;
var hasUnits=false;
var name=p$2.getNumberFieldName0$org_opensourcephysics_media_core_NumberField.apply(this, [field]);
if (name != null ) {
fieldName=Clazz.array(String, -1, [name]);
var s=C$.getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, name);
hasUnits=s.contains$CharSequence("L") || s.contains$CharSequence("M") || s.contains$CharSequence("T")  ;
}var popup=Clazz.new_($I$(43,1));
if (this.tp.isEnabled$S("number.formats") || this.tp.isEnabled$S("number.units") ) {
var numberMenu=Clazz.new_([$I$(14).getString$S("Popup.Menu.Numbers")],$I$(46,1).c$$S);
popup.add$javax_swing_JMenuItem(numberMenu);
if (this.tp.isEnabled$S("number.formats")) {
var item=Clazz.new_($I$(44,1));
var selected=fieldName;
item.addActionListener$java_awt_event_ActionListener(((P$.TTrack$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(45).getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp, this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], this.$finals$.selected).setVisible$Z(true);
});
})()
), Clazz.new_(P$.TTrack$8.$init$,[this, {selected:selected}])));
item.setText$S($I$(14).getString$S("Popup.MenuItem.Formats") + "...");
numberMenu.add$javax_swing_JMenuItem(item);
}if (hasUnits && this.tp.isEnabled$S("number.units") ) {
var item=Clazz.new_($I$(44,1));
item.addActionListener$java_awt_event_ActionListener(((P$.TTrack$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getUnitsDialog$();
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TTrack$9.$init$,[this, null])));
item.setText$S($I$(14).getString$S("Popup.MenuItem.Units") + "...");
numberMenu.add$javax_swing_JMenuItem(item);
}}var hasLengthUnit=this.tp.lengthUnit != null ;
var hasMassUnit=this.tp.massUnit != null ;
if (hasLengthUnit && hasMassUnit ) {
var item=Clazz.new_($I$(44,1));
var vis=this.tp.isUnitsVisible$();
item.addActionListener$java_awt_event_ActionListener(((P$.TTrack$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.setUnitsVisible$Z(!this.$finals$.vis);
});
})()
), Clazz.new_(P$.TTrack$10.$init$,[this, {vis:vis}])));
item.setText$S(vis ? $I$(14).getString$S("TTrack.MenuItem.HideUnits") : $I$(14).getString$S("TTrack.MenuItem.ShowUnits"));
if (popup.getComponentCount$() > 0) popup.addSeparator$();
popup.add$javax_swing_JMenuItem(item);
}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
popup.show$java_awt_Component$I$I(field, 0, field.getHeight$());
});

Clazz.newMeth(C$, 'getNumberFieldName0$org_opensourcephysics_media_core_NumberField',  function (field) {
for (var name, $name = this.getNumberFields$().keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (this.numberFields.get$O(name)[0] === field ) {
return name;
}}
return null;
}, p$2);

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
var prev=Boolean.valueOf$Z(this.visible);
this.visible=visible;
this.firePropertyChange$S$O$O("visible", prev, Boolean.valueOf$Z(visible));
if (this.tp != null ) $I$(27).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'delete$',  function () {
this.delete$Z(true);
});

Clazz.newMeth(C$, 'delete$Z',  function (postEdit) {
if (this.isLocked$() && !this.isDependent$() ) return;
if (this.tp != null ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.tp.selectedSteps.clear$();
var coords=this.tp.getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && (coords).getOriginTrack$() === this  ) {
coords=(coords).getCoords$();
this.tp.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(coords);
}}if (postEdit) {
$I$(42).postTrackDelete$org_opensourcephysics_cabrillo_tracker_TTrack(this);
}this.erase$();
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panel=this.panel$Integer(this.tp.andWorld.get$I(j));
panel.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
}
this.dispose$();
});

Clazz.newMeth(C$, 'panel$Integer',  function (panelID) {
return this.tframe.getTrackerPanelForID$Integer(panelID);
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
this.trailVisible=visible;
});

Clazz.newMeth(C$, 'isTrailVisible$',  function () {
return this.trailVisible;
});

Clazz.newMeth(C$, 'setTrailLength$I',  function (steps) {
this.trailLength=Math.max(0, steps);
});

Clazz.newMeth(C$, 'getTrailLength$',  function () {
if (this.isMarking) return 1;
return this.trailLength;
});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
this.locked=locked;
this.firePropertyChange$S$O$O("locked", null, Boolean.valueOf$Z(locked));
});

Clazz.newMeth(C$, 'isLocked$',  function () {
return this.locked;
});

Clazz.newMeth(C$, 'setAutoAdvance$Z',  function (auto) {
this.autoAdvance=auto;
});

Clazz.newMeth(C$, 'isAutoAdvance$',  function () {
return this.autoAdvance;
});

Clazz.newMeth(C$, 'setMarkByDefault$Z',  function (mark) {
this.markByDefault=mark;
});

Clazz.newMeth(C$, 'isMarkByDefault$',  function () {
return this.markByDefault;
});

Clazz.newMeth(C$, 'getColor$',  function () {
if (this.footprint == null ) return this.defaultColors[0];
return this.footprint.getColor$();
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
if (color == null ) color=this.defaultColors[0];
for (var i=0; i < this.footprints.length; i++) this.footprints[i].setColor$java_awt_Color(color);

this.erase$();
if (this.tp != null ) {
this.tp.changed=true;
if (this.tp.modelBuilder != null ) {
this.tp.modelBuilder.refreshDropdown$S(null);
}if (this.tp.dataBuilder != null ) {
var panel=this.tp.dataBuilder.getPanel$S(this.getName$());
if (panel != null ) {
panel.setIcon$javax_swing_Icon(this.getIcon$I$I$S(21, 16, "track"));
this.tp.dataBuilder.refreshDropdown$S(null);
}}}this.firePropertyChange$S$O$O("color", null, color);
});

Clazz.newMeth(C$, 'setColorToDefault$I',  function (index) {
this.setColor$java_awt_Color(this.defaultColors[index % this.defaultColors.length]);
});

Clazz.newMeth(C$, 'setDefaultNameAndColor$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S',  function (trackerPanel, connector) {
var name=trackerPanel.getNextName$S$S(this.getName$(), connector);
this.setName$S(name);
this.setColorToDefault$I(name.charAt$I(name.length$() - 1).$c() - 65);
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.ID;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getName$S',  function (context) {
return this.getName$();
});

Clazz.newMeth(C$, 'setName$S',  function (newName) {
if (newName != null  && !newName.trim$().equals$O("") ) {
var prevName=this.name;
this.name=newName;
this.repaint$();
if (this.tp != null ) {
this.tp.changed=true;
if (this.tp.dataBuilder != null ) {
this.tp.dataBuilder.renamePanel$S$S(prevName, newName);
}if (this.tp.modelBuilder != null ) {
this.tp.modelBuilder.refreshBoosterDropdown$();
}}this.firePropertyChange$S$O$O("name", prevName, this.name);
}});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
if (desc == null ) desc="";
this.description=desc;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getSimpleName$() + " " + this.name + " " + this.ID ;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(28).finalized$O(this);
});

Clazz.newMeth(C$, 'getMessage$',  function () {
var s=this.getName$();
if (this.partName != null ) s+=" " + this.partName;
if (this.isLocked$() && !$I$(14).getString$S("PointMass.Position.Locked.Hint").equals$O(this.hint) ) {
this.hint=$I$(14).getString$S("TTrack.Locked.Hint");
}if ($I$(17).showHints && this.hint != null  ) s+=" (" + this.hint + ")" ;
return s;
});

Clazz.newMeth(C$, 'setViewable$Z',  function (viewable) {
this.viewable=viewable;
});

Clazz.newMeth(C$, 'isViewable$',  function () {
return this.viewable;
});

Clazz.newMeth(C$, 'isDependent$',  function () {
return false;
});

Clazz.newMeth(C$, 'setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA',  function (choices) {
var valid=Clazz.new_($I$(15,1));
for (var i=0; i < choices.length; i++) {
if (choices[i] != null  && choices[i].getLength$() <= this.getFootprintLength$() ) {
if (this.getFootprint$() != null ) choices[i].setColor$java_awt_Color(this.getColor$());
valid.add$O(choices[i]);
}}
if (valid.size$() > 0) {
this.footprints=valid.toArray$OA(Clazz.array($I$(21), [0]));
this.setFootprint$S(this.footprints[0].getName$());
}});

Clazz.newMeth(C$, 'setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA$org_opensourcephysics_cabrillo_tracker_Step',  function (choices, step) {
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(choices);
});

Clazz.newMeth(C$, 'getFootprints$',  function () {
return this.footprints;
});

Clazz.newMeth(C$, 'getFootprints$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return this.footprints;
});

Clazz.newMeth(C$, 'addFootprint$org_opensourcephysics_cabrillo_tracker_Footprint',  function (footprint) {
if (footprint.getLength$() == this.getFootprintLength$()) {
var prints=Clazz.array($I$(21), [this.footprints.length + 1]);
System.arraycopy$O$I$O$I$I(this.footprints, 0, prints, 0, this.footprints.length);
prints[this.footprints.length]=footprint;
this.footprints=prints;
}});

Clazz.newMeth(C$, 'setFootprint$S',  function (name) {
if (name == null ) return;
var props=null;
var n=name.indexOf$S("#");
if (n > -1) {
props=name.substring$I(n + 1);
name=name.substring$I$I(0, n);
}for (var i=0; i < this.footprints.length; i++) {
if (name.equals$O(this.footprints[i].getName$())) {
this.footprint=this.footprints[i];
if (Clazz.instanceOf(this.footprint, "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
(this.footprint).setProperties$S(props);
}var stepArray=this.steps.array;
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.footprint);

this.repaint$();
if (this.tp != null ) {
this.tp.changed=true;
if (this.tp.modelBuilder != null ) {
this.tp.modelBuilder.refreshDropdown$S(null);
}if (this.tp.dataBuilder != null ) {
var panel=this.tp.dataBuilder.getPanel$S(this.getName$());
if (panel != null ) {
panel.setIcon$javax_swing_Icon(this.getIcon$I$I$S(21, 16, "track"));
this.tp.dataBuilder.refreshDropdown$S(null);
}}}this.firePropertyChange$S$O$O("footprint", null, this.footprint);
return;
}}
});

Clazz.newMeth(C$, 'getFootprintName$',  function () {
var fp=this.getFootprint$();
var s=fp.getName$();
if (Clazz.instanceOf(fp, "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
var cfp=fp;
s+="#" + cfp.getProperties$();
}return s;
});

Clazz.newMeth(C$, 'getFootprint$',  function () {
return this.footprint;
});

Clazz.newMeth(C$, 'setFootprint$S$org_opensourcephysics_cabrillo_tracker_Step',  function (name, step) {
this.setFootprint$S(name);
});

Clazz.newMeth(C$, 'getFootprint$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return this.getFootprint$();
});

Clazz.newMeth(C$, 'getIcon$I$I$S',  function (w, h, context) {
return this.getFootprint$().getIcon$I$I(w, h);
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
if (this.locked) return null;
var step=this.steps.getStep$I(n);
if (step != null ) {
var control=Clazz.new_($I$(40,1).c$$O,[this]);
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
for (var columnName, $columnName = this.textColumnNames.iterator$(); $columnName.hasNext$()&&((columnName=($columnName.next$())),1);) {
var entries=this.textColumnEntries.get$O(columnName);
if (entries.length > n) {
entries[n]=null;
}}
if (!this.isDependent$()) $I$(42).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.firePropertyChange$S$O$O("step", C$.HINT_STEP_ADDED_OR_REMOVED,  new Integer(n));
}return step;
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
return this.steps.getStep$I(n);
});

Clazz.newMeth(C$, 'getNextVisibleStep$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (step, panel) {
var steps=this.getSteps$();
var found=false;
for (var i=0; i < steps.length; i++) {
if (found && steps[i] != null   && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(steps[i], panel) ) return steps[i];
if (steps[i] === step ) found=true;
}
if (found) {
for (var i=0; i < steps.length; i++) {
if (steps[i] != null  && steps[i] !== step   && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(steps[i], panel) ) return steps[i];
}
}return null;
});

Clazz.newMeth(C$, 'getPreviousVisibleStep$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (step, trackerPanel) {
var steps=this.getSteps$();
var found=false;
for (var i=steps.length - 1; i > -1; i--) {
if (found && steps[i] != null   && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(steps[i], trackerPanel) ) return steps[i];
if (steps[i] === step ) found=true;
}
if (found) {
for (var i=steps.length - 1; i > -1; i--) {
if (steps[i] != null  && steps[i] !== step   && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(steps[i], trackerPanel) ) return steps[i];
}
}return null;
});

Clazz.newMeth(C$, 'getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (point, trackerPanel) {
if (point == null ) return null;
var stepArray=this.steps.array;
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) {
var points=stepArray[j].getPoints$();
for (var i=0; i < points.length; i++) if (points[i] === point ) return stepArray[j];

}
return null;
});

Clazz.newMeth(C$, 'getSteps$',  function () {
return this.steps != null  ? this.steps.array : Clazz.array($I$(1), [0]);
});

Clazz.newMeth(C$, 'isStepComplete$I',  function (n) {
if (this.isMarkByDefault$()) {
var step=this.getStep$I(n);
if (step != null ) {
var points=step.getPoints$();
for (var i=0; i < points.length; i++) {
if (points[i] == null ) return false;
}
return true;
}}return false;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
this.createStep$I$D$D(n, x, y);
return this.getMarkedPoint$I$I(n, this.getTargetIndex$());
});

Clazz.newMeth(C$, 'getMarkedPoint$I$I',  function (n, index) {
var step=this.getStep$I(n);
if (step == null ) return null;
return step.getPoints$()[index];
});

Clazz.newMeth(C$, 'getTargetIndex$',  function () {
return this.targetIndex;
});

Clazz.newMeth(C$, 'setTargetIndex$I',  function (index) {
if (this.isAutoTrackable$I(index)) this.targetIndex=index;
});

Clazz.newMeth(C$, 'setTargetIndex$S',  function (description) {
for (var i=0; i < this.getStepLength$(); i++) {
if (description.equals$O(this.getTargetDescription$I(i))) {
this.setTargetIndex$I(i);
break;
}}
});

Clazz.newMeth(C$, 'setTargetIndex$org_opensourcephysics_media_core_TPoint',  function (p) {
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this.tp);
if (step != null ) this.setTargetIndex$I(step.getPointIndex$org_opensourcephysics_media_core_TPoint(p));
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
return null;
});

Clazz.newMeth(C$, 'isAutoTrackable$I',  function (pointIndex) {
return true;
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return false;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
var array=this.steps.array;
for (var n=0; n < array.length; n++) if (array[n] != null ) return false;

return true;
});

Clazz.newMeth(C$, 'getNumberFieldsForStep$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return this.positionFields;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.tLabel, this.xLabel, this.yLabel, this.magLabel, this.angleLabel, this.stepLabel, this.tValueLabel, this.stepValueLabel, this.tField, this.xField, this.yField, this.magField, this.angleField]);
$I$(13).setFonts$OA(objectsToSize);
this.erase$();
});

Clazz.newMeth(C$, 'getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.datasetManager == null ) {
this.datasetManager=Clazz.new_($I$(47,1).c$$Z,[true]);
this.datasetManager.setSorted$Z(true);
var b=this.refreshDataLater;
this.refreshDataLater=false;
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.datasetManager, panel);
this.refreshDataLater=b;
return this.datasetManager;
}if (this.refreshDataLater || this.dataValid ) return this.datasetManager;
this.dataValid=true;
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.datasetManager, panel);
if (this.constantsLoadedFromXML != null ) {
for (var i=0; i < this.constantsLoadedFromXML.length; i++) {
var name=this.constantsLoadedFromXML[i][0];
var val=(this.constantsLoadedFromXML[i][1]).valueOf();
var expression=this.constantsLoadedFromXML[i][2];
var desc=this.constantsLoadedFromXML[i].length < 4 ? null : this.constantsLoadedFromXML[i][3];
this.datasetManager.setConstant$S$D$S$S(name, val, expression, desc);
}
this.constantsLoadedFromXML=null;
}if (this.dataProp != null ) {
var children=this.dataProp.getChildControls$();
 outer : for (var i=0; i < children.length; i++) {
var name=children[i].getString$S("function_name");
for (var next, $next = this.datasetManager.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.display.DataFunction") && next.getYColumnName$().equals$O(name) ) {
continue outer;
}}
var f=Clazz.new_($I$(16,1).c$$org_opensourcephysics_display_DatasetManager,[this.datasetManager]);
children[i].loadObject$O(f);
f.setXColumnVisible$Z(false);
this.datasetManager.addDataset$org_opensourcephysics_display_Dataset(f);
}
this.dataProp=null;
}var datasets=this.datasetManager.getDatasetsRaw$();
for (var i=0; i < datasets.size$(); i++) {
if (Clazz.instanceOf(datasets.get$I(i), "org.opensourcephysics.display.DataFunction")) {
(datasets.get$I(i)).refreshFunctionData$();
}}
var tool=$I$(48).getTool$Z(false);
if (panel != null  && tool != null   && tool.isVisible$()  && tool.getSelectedTab$() != null   && tool.getSelectedTab$().isInterestedIn$org_opensourcephysics_display_Data(this.datasetManager) ) {
tool.getSelectedTab$().refreshData$();
}return this.datasetManager;
});

Clazz.newMeth(C$, 'getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (panel, datasetIndex) {
return this.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, panel) {
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I',  function (data, trackerPanel, startFrame, stepCount) {
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(data, trackerPanel);
});

Clazz.newMeth(C$, 'getDataName$I',  function (index) {
if (index == 0) {
return this.datasetManager.getDataset$I(0).getXColumnName$();
}if (index < this.datasetManager.getDatasetsRaw$().size$() + 1) {
return this.datasetManager.getDataset$I(index - 1).getYColumnName$();
}return null;
});

Clazz.newMeth(C$, 'getDataDescription$I',  function (index) {
if (this.dataDescriptions == null ) return "";
if (index >= this.dataDescriptions.length) {
var datasets=this.datasetManager.getDatasetsRaw$();
--index;
if (index < datasets.size$() && Clazz.instanceOf(datasets.get$I(index), "org.opensourcephysics.display.DataFunction") ) {
var desc=datasets.get$I(index).getYColumnDescription$();
if (desc == null ) desc="";
return desc;
}return "";
}return this.dataDescriptions[index];
});

Clazz.newMeth(C$, 'getPreferredDataOrder$',  function () {
var orderedData=Clazz.new_($I$(15,1));
var n=this.datasetManager.getDatasetsRaw$().size$();
if (this.preferredColumnOrder != null ) {
for (var i=0; i < this.preferredColumnOrder.length; i++) {
if (!orderedData.contains$O(Integer.valueOf$I(this.preferredColumnOrder[i])) && this.preferredColumnOrder[i] < n ) orderedData.add$O(Integer.valueOf$I(this.preferredColumnOrder[i]));
}
}for (var i=0; i < n; i++) {
if (!orderedData.contains$O(Integer.valueOf$I(i))) {
orderedData.add$O(Integer.valueOf$I(i));
}}
return orderedData;
});

Clazz.newMeth(C$, 'getFrameForData$S$S$DA',  function (xVar, yVar, xyValues) {
if (this.dataFrames.isEmpty$() || this.datasetManager.getDatasetsRaw$().isEmpty$() ) return -1;
var dataset=this.datasetManager.getDataset$I(0);
var x=xyValues[0];
if (xVar.equals$O(dataset.getXColumnName$())) {
var nf=this.dataFrames.size$();
var vals=dataset.getXPointsRaw$();
for (var i=0, n=dataset.getIndex$(); i < n; i++) {
if (x == vals[i] ) {
return (i < nf ? this.dataFrames.get$I(i).intValue$() : -1);
}}
return -1;
}var index=this.datasetManager.getDatasetIndex$S(xVar);
if (index < 0) {
return -1;
}dataset=this.datasetManager.getDataset$I(index);
var xVals=dataset.getYPointsRaw$();
var yVals=null;
var y=(yVar == null  ? NaN : xyValues[1]);
for (var i=0, n=dataset.getIndex$(); i < n; i++) {
if (x == xVals[i] ) {
var frame=(i < this.dataFrames.size$() ? this.dataFrames.get$I(i).intValue$() : -1);
if (yVar != null ) {
if (yVals == null ) {
yVals=this.datasetManager.getDataset$I(this.datasetManager.getDatasetIndex$S(yVar)).getYPoints$();
}if (y != yVals[i] ) {
continue;
}}return frame;
}}
return -1;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
for (var key, $key = this.numberFields.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var fields=this.numberFields.get$O(key);
for (var i=0; i < fields.length; i++) {
fields[i].refreshDecimalSeparators$Z(true);
}
}
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
return this.numberFields;
});

Clazz.newMeth(C$, 'getAllVariables$I',  function (ttype) {
switch (ttype) {
case 0:
return $I$(49).allVariables;
case 1:
return $I$(50).allVariables;
case 2:
return $I$(51).allVariables;
case 3:
return $I$(52).allVariables;
case 4:
return $I$(53).allVariables;
case 5:
return $I$(54).allVariables;
case 6:
return $I$(55).allVariables;
case 7:
return $I$(56).allVariables;
case 8:
return $I$(57).allVariables;
case 9:
return $I$(58).allVariables;
default:
case 10:
return C$.NOVARA;
}
}, 1);

Clazz.newMeth(C$, 'getBaseTypeInt$S',  function (type) {
type=type.substring$I(type.lastIndexOf$S(".") + 1);
for (var i=C$.baseTrackTypes.length; --i >= 0; ) if (C$.baseTrackTypes[i].equals$O(type)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'createAllVariables$SA$SA',  function (datavars, fieldvars) {
var list=Clazz.new_($I$(15,1));
if (datavars != null ) for (var next, $next = 0, $$next = datavars; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
list.add$O(next);
}
if (fieldvars != null ) for (var next, $next = 0, $$next = fieldvars; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (!list.contains$O(next)) {
list.add$O(next);
}}
return list;
}, 1);

Clazz.newMeth(C$, 'getVariablesFromFormatterDisplayName$S',  function (name) {
return this.getFormatMap$().get$O(name);
});

Clazz.newMeth(C$, 'getTextColumnNames$',  function () {
return this.textColumnNames;
});

Clazz.newMeth(C$, 'addTextColumn$S',  function (name) {
if (name == null  || name.trim$().equals$O("") ) return false;
name=name.trim$();
for (var next, $next = this.textColumnNames.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(name)) return false;
}
var control=Clazz.new_($I$(40,1).c$$O,[this]);
control.setValue$S$Z("isTextColumn", true);
this.textColumnNames.add$O(name);
this.textColumnEntries.put$O$O(name, Clazz.array(String, [0]));
$I$(42).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.tp.changed=true;
this.firePropertyChange$S$O$O("text_column", null, name);
return true;
});

Clazz.newMeth(C$, 'removeTextColumn$S',  function (name) {
if (name == null ) return false;
name=name.trim$();
for (var next, $next = this.textColumnNames.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(name)) {
var control=Clazz.new_($I$(40,1).c$$O,[this]);
this.textColumnEntries.remove$O(name);
this.textColumnNames.remove$O(name);
$I$(42).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.tp.changed=true;
this.firePropertyChange$S$O$O("text_column", name, null);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'renameTextColumn$S$S',  function (name, newName) {
if (name == null ) return false;
name=name.trim$();
if (newName == null  || newName.trim$().equals$O("") ) return false;
newName=newName.trim$();
for (var next, $next = this.textColumnNames.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(newName)) return false;
}
for (var i=0; i < this.textColumnNames.size$(); i++) {
var next=this.textColumnNames.get$I(i);
if (name.equals$O(next)) {
var control=Clazz.new_($I$(40,1).c$$O,[this]);
this.textColumnNames.remove$O(name);
this.textColumnNames.add$I$O(i, newName);
var entries=this.textColumnEntries.remove$O(name);
this.textColumnEntries.put$O$O(newName, entries);
$I$(42).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
}}
this.tp.changed=true;
this.firePropertyChange$S$O$O("text_column", name, newName);
return true;
});

Clazz.newMeth(C$, 'getTextColumnEntry$S$I',  function (columnName, frameNumber) {
if (frameNumber < 0) return null;
var entries=this.textColumnEntries.get$O(columnName);
if (entries == null ) return null;
if (frameNumber > entries.length - 1) return null;
return entries[frameNumber];
});

Clazz.newMeth(C$, 'setTextColumnEntry$S$I$S',  function (columnName, frameNumber, text) {
if (this.isLocked$()) return false;
if (frameNumber < 0) return false;
var entries=this.textColumnEntries.get$O(columnName);
if (entries == null ) return false;
if (text.trim$().equals$O("")) text=null;
 else text=text.trim$();
var control=Clazz.new_($I$(40,1).c$$O,[this]);
if (frameNumber > entries.length - 1) {
var newEntries=Clazz.array(String, [frameNumber + 1]);
System.arraycopy$O$I$O$I$I(entries, 0, newEntries, 0, entries.length);
entries=newEntries;
this.textColumnEntries.put$O$O(columnName, entries);
}var prev=entries[frameNumber];
if (prev == text || (prev != null  && prev.equals$O(text) ) ) return false;
entries[frameNumber]=text;
$I$(42).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.tp.changed=true;
this.firePropertyChange$S$O$O("text_column", null, null);
return true;
});

Clazz.newMeth(C$, 'getAttachmentLength$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getAttachments$',  function () {
var n=this.getAttachmentLength$();
if (n > 0) {
if (this.attachments == null ) {
this.attachments=Clazz.array(C$, [n]);
}if (this.attachments.length < n) {
var newAttachments=Clazz.array(C$, [n]);
System.arraycopy$O$I$O$I$I(this.attachments, 0, newAttachments, 0, this.attachments.length);
this.attachments=newAttachments;
}}return this.attachments;
});

Clazz.newMeth(C$, 'getAttachmentDescription$I',  function (n) {
return $I$(14).getString$S("AttachmentInspector.Label.End") + " " + (n + 1) ;
});

Clazz.newMeth(C$, 'loadAttachmentsFromNames$Z',  function (refresh) {
var n;
if (this.attachmentNames == null  || (n=this.attachmentNames.length) == 0 ) return false;
var foundAll=true;
var temp=Clazz.array(C$, [n]);
var tracks=this.tp.getTracksTemp$();
for (var i=0; i < n; i++) {
var name=this.attachmentNames[i];
if (name == null ) continue;
var track=this.tp.getTrack$S$java_util_ArrayList(name, tracks);
if (track == null ) {
foundAll=false;
break;
}temp[i]=track;
}
tracks.clear$();
if (foundAll) {
this.attachments=temp;
this.attachmentNames=null;
if (refresh) this.refreshAttachmentsLater$();
}return foundAll;
});

Clazz.newMeth(C$, 'refreshAttachmentsLater$',  function () {
$I$(5,"trigger$I$java_awt_event_ActionListener",[2000, ((P$.TTrack$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TTrack$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var changed=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null  && this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.changed ;
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].refreshAttachments$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.changed=changed;
}});
})()
), Clazz.new_(P$.TTrack$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'isFullyAttached$',  function () {
var n=this.getAttachmentLength$();
if (n > 0) {
var attached=this.getAttachments$();
for (var i=0; i < n; i++) {
if (attached[i] == null ) return false;
}
}return true;
});

Clazz.newMeth(C$, 'isAttached$',  function () {
var attachments=this.getAttachments$();
for (var i=0; i < attachments.length; i++) {
if (attachments[i] != null ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'refreshAttachments$',  function () {
if (this.attachments == null  || this.getAttachmentLength$() == 0 ) return;
if (this.isAttached$()) this.setFixedPosition$Z(false);
var clip=this.tp.getPlayer$().getVideoClip$();
for (var i=0; i < this.attachments.length; i++) {
var targetTrack=this.attachments[i];
if (targetTrack != null ) {
targetTrack.removeStepListener$java_beans_PropertyChangeListener(this);
targetTrack.addStepListener$java_beans_PropertyChangeListener(this);
for (var n=clip.getStartFrameNumber$(); n <= clip.getEndFrameNumber$(); n++) {
var targetStep=targetTrack.getStep$I(n);
var step=this.getStep$I(n);
if (step == null ) continue;
var p=p$2.getPoint$org_opensourcephysics_cabrillo_tracker_Step$I.apply(this, [step, i]);
if (targetStep == null ) {
if (p != null ) {
p.detach$();
}} else if (p != null ) {
var target=targetStep.getPoints$()[0];
p.attachTo$org_opensourcephysics_media_core_TPoint(target);
}}
} else {
for (var n=clip.getStartFrameNumber$(); n <= clip.getEndFrameNumber$(); n++) {
var step=this.getStep$I(n);
if (step == null ) continue;
var p=p$2.getPoint$org_opensourcephysics_cabrillo_tracker_Step$I.apply(this, [step, i]);
if (p != null ) {
p.detach$();
}}
}}
this.tp.refreshTrackBar$();
});

Clazz.newMeth(C$, 'getPoint$org_opensourcephysics_cabrillo_tracker_Step$I',  function (step, i) {
var pts=step.points;
return (pts == null  || i >= pts.length  ? null : pts[i]);
}, p$2);

Clazz.newMeth(C$, 'setFixedPosition$Z',  function (b) {
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu) {
if (menu == null ) {
var menu0=Clazz.new_($I$(46,1));
menu0.setText$S(this.getName$S("track"));
menu0.setIcon$javax_swing_Icon(this.getFootprint$().getIcon$I$I(21, 16));
menu0.addMenuListener$javax_swing_event_MenuListener(((P$.TTrack$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
this.$finals$.menu0.removeAll$();
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.$finals$.trackerPanel, this.$finals$.menu0]);
$I$(13).setMenuFonts$javax_swing_JMenu(this.$finals$.menu0);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.TTrack$11.$init$,[this, {menu0:menu0,trackerPanel:trackerPanel}])));
return menu0;
}menu.setText$S(this.getName$S("track"));
menu.setIcon$javax_swing_Icon(this.getFootprint$().getIcon$I$I(21, 16));
this.getMenuItems$();
this.visibleItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Visible"));
this.trailVisibleItem.setText$S($I$(14).getString$S("TTrack.MenuItem.TrailVisible"));
this.autoAdvanceItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Autostep"));
this.markByDefaultItem.setText$S($I$(14).getString$S("TTrack.MenuItem.MarkByDefault"));
this.lockedItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Locked"));
this.deleteTrackItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Delete"));
this.deleteStepItem.setText$S($I$(14).getString$S("TTrack.MenuItem.DeletePoint"));
this.clearStepsItem.setText$S($I$(14).getString$S("TTrack.MenuItem.ClearSteps"));
this.colorItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Color"));
this.nameItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Name"));
this.footprintMenu.setText$S($I$(14).getString$S("TTrack.MenuItem.Footprint"));
this.descriptionItem.setText$S($I$(14).getString$S("TTrack.MenuItem.Description"));
this.dataBuilderItem.setText$S($I$(14).getString$S("TView.Menuitem.Define"));
this.visibleItem.setSelected$Z(this.isVisible$());
this.lockedItem.setSelected$Z(this.isLocked$());
this.trailVisibleItem.setSelected$Z(this.isTrailVisible$());
this.markByDefaultItem.setSelected$Z(this.isMarkByDefault$());
this.autoAdvanceItem.setSelected$Z(this.isAutoAdvance$());
this.lockedItem.setEnabled$Z(true);
var cantDeleteSteps=this.isLocked$() || this.isDependent$() ;
var p=trackerPanel.getSelectedPoint$();
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, trackerPanel);
this.deleteStepItem.setEnabled$Z(!cantDeleteSteps && step != null  );
this.clearStepsItem.setEnabled$Z(!cantDeleteSteps);
this.deleteTrackItem.setEnabled$Z(!(this.isLocked$() && !this.isDependent$() ));
this.nameItem.setEnabled$Z(!(this.isLocked$() && !this.isDependent$() ));
this.footprintMenu.removeAll$();
var fp=this.getFootprints$();
var item;
for (var i=0; i < fp.length; i++) {
item=Clazz.new_([fp[i].getDisplayName$(), fp[i].getIcon$I$I(21, 16)],$I$(44,1).c$$S$javax_swing_Icon);
item.setActionCommand$S(fp[i].getName$());
if (Clazz.instanceOf(fp[i], "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
item.setText$S(fp[i].getDisplayName$() + "...");
item.addActionListener$java_awt_event_ActionListener(this.circleFootprintListener);
} else {
item.addActionListener$java_awt_event_ActionListener(this.footprintListener);
}if (fp[i] === this.footprint ) {
item.setBorder$javax_swing_border_Border($I$(29,"createLineBorder$java_awt_Color",[item.getBackground$().darker$()]));
}this.footprintMenu.add$javax_swing_JMenuItem(item);
}
if (trackerPanel.isEnabled$S("track.name") || trackerPanel.isEnabled$S("track.description") ) {
$I$(59).checkAddMenuSep$javax_swing_JMenu(menu);
if (trackerPanel.isEnabled$S("track.name")) menu.add$javax_swing_JMenuItem(this.nameItem);
if (trackerPanel.isEnabled$S("track.description")) menu.add$javax_swing_JMenuItem(this.descriptionItem);
}if (trackerPanel.isEnabled$S("track.color") || trackerPanel.isEnabled$S("track.footprint") ) {
$I$(59).checkAddMenuSep$javax_swing_JMenu(menu);
if (trackerPanel.isEnabled$S("track.color")) menu.add$javax_swing_JMenuItem(this.colorItem);
if (trackerPanel.isEnabled$S("track.footprint")) menu.add$javax_swing_JMenuItem(this.footprintMenu);
}if (trackerPanel.isEnabled$S("track.visible") || trackerPanel.isEnabled$S("track.locked") ) {
$I$(59).checkAddMenuSep$javax_swing_JMenu(menu);
if (trackerPanel.isEnabled$S("track.visible")) menu.add$javax_swing_JMenuItem(this.visibleItem);
if (trackerPanel.isEnabled$S("track.locked")) menu.add$javax_swing_JMenuItem(this.lockedItem);
}if (this.isViewable$() && trackerPanel.isEnabled$S("data.builder") ) {
$I$(59).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.dataBuilderItem);
}if (trackerPanel.isEnabled$S("track.delete")) {
$I$(59).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
}return menu;
});

Clazz.newMeth(C$, 'getMenuItems$',  function () {
if (this.visibleItem != null ) return;
this.visibleItem=Clazz.new_($I$(60,1));
this.trailVisibleItem=Clazz.new_($I$(60,1));
this.autoAdvanceItem=Clazz.new_($I$(60,1));
this.markByDefaultItem=Clazz.new_($I$(60,1));
this.lockedItem=Clazz.new_($I$(60,1));
this.deleteTrackItem=Clazz.new_($I$(44,1));
this.deleteStepItem=Clazz.new_($I$(44,1));
this.clearStepsItem=Clazz.new_($I$(44,1));
this.colorItem=Clazz.new_($I$(44,1));
this.colorItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var color=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getColor$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
$I$(5,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[color, $I$(14).getString$S("TTrack.Dialog.Color.Title"), ((P$.TTrack$12$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TTrack$12$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor !== this.$finals$.color ) {
var control=Clazz.new_([Clazz.new_($I$(41,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this.b$['org.opensourcephysics.cabrillo.tracker.TTrack']])],$I$(40,1).c$$O);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [newColor]);
$I$(42).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], control);
}});
})()
), Clazz.new_(P$.TTrack$12$lambda2.$init$,[this, {color:color}]))]);
});
})()
), Clazz.new_(P$.TTrack$12.$init$,[this, null])));
this.nameItem=Clazz.new_($I$(44,1));
this.nameItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getNameDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []).setVisible$Z(true);
});
})()
), Clazz.new_(P$.TTrack$13.$init$,[this, null])));
this.footprintMenu=Clazz.new_($I$(46,1));
this.descriptionItem=Clazz.new_($I$(44,1));
this.descriptionItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null  && this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tframe != null  ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tframe.notesVisible$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tframe.getNotesDialog$().setVisible$Z(true);
} else this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getToolBar$Z(true).doNotesAction$();
}});
})()
), Clazz.new_(P$.TTrack$14.$init$,[this, null])));
this.dataBuilderItem=Clazz.new_($I$(44,1));
this.dataBuilderItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getDataBuilder$().setSelectedPanel$S(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []));
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getDataBuilder$().setVisible$Z(true);
}});
})()
), Clazz.new_(P$.TTrack$15.$init$,[this, null])));
this.visibleItem.addItemListener$java_awt_event_ItemListener(((P$.TTrack$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].visibleItem.isSelected$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
});
})()
), Clazz.new_(P$.TTrack$16.$init$,[this, null])));
this.trailVisibleItem.addItemListener$java_awt_event_ItemListener(((P$.TTrack$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setTrailVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].trailVisibleItem.isSelected$()]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].isTrailVisible$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [])) {
for (var j=0; j < this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.andWorld.size$(); j++) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].panel$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.andWorld.get$I(j)]);
var step=panel.getSelectedStep$();
if (step != null  && step.getTrack$() === this.b$['org.opensourcephysics.cabrillo.tracker.TTrack']  ) {
if (!(step.getFrameNumber$() == panel.getFrameNumber$())) {
panel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
panel.selectedSteps.clear$();
}}}
}this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
});
})()
), Clazz.new_(P$.TTrack$17.$init$,[this, null])));
this.markByDefaultItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setMarkByDefault$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].markByDefaultItem.isSelected$()]);
});
})()
), Clazz.new_(P$.TTrack$18.$init$,[this, null])));
this.autoAdvanceItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setAutoAdvance$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].autoAdvanceItem.isSelected$()]);
});
})()
), Clazz.new_(P$.TTrack$19.$init$,[this, null])));
this.lockedItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].setLocked$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].lockedItem.isSelected$()]);
});
})()
), Clazz.new_(P$.TTrack$20.$init$,[this, null])));
this.deleteTrackItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].delete$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
});
})()
), Clazz.new_(P$.TTrack$21.$init$,[this, null])));
this.deleteStepItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.deletePoint$org_opensourcephysics_media_core_TPoint(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getSelectedPoint$());
});
})()
), Clazz.new_(P$.TTrack$22.$init$,[this, null])));
this.clearStepsItem.addActionListener$java_awt_event_ActionListener(((P$.TTrack$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].isLocked$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [])) return;
var control=Clazz.new_($I$(40,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.TTrack']]);
for (var n=0; n < this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getSteps$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []).length; n++) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
}
for (var columnName, $columnName = this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].textColumnNames.iterator$(); $columnName.hasNext$()&&((columnName=($columnName.next$())),1);) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].textColumnEntries.put$O$O(columnName, Clazz.array(String, [0]));
}
$I$(42).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], control);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].ttype == 5) {
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'];
p.updateDerivatives$();
}var autoTracker=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getAutoTracker$Z(false);
if (autoTracker != null ) {
if (autoTracker.getTrack$() === this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'] ) autoTracker.reset$();
autoTracker.getWizard$().setVisible$Z(false);
}this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].fireStepsChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
$I$(27).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp);
});
})()
), Clazz.new_(P$.TTrack$23.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var tooltip=$I$(14).getString$S("TTrack.NumberField.Format.Tooltip");
if ($I$(5).isMac$()) {
tooltip=$I$(14).getString$S("TTrack.NumberField.Format.Tooltip.OSX");
}for (var fields, $fields = this.getNumberFields$().values$().iterator$(); $fields.hasNext$()&&((fields=($fields.next$())),1);) {
for (var i=0; i < fields.length; i++) {
fields[i].setToolTipText$S(tooltip);
}
}
this.tField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, "t"));
this.toolbarTrackComponents.clear$();
return this.toolbarTrackComponents;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
this.toolbarPointComponents.clear$();
this.stepLabel.setText$S($I$(14).getString$S("TTrack.Label.Step"));
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(point, trackerPanel);
var clip=trackerPanel.getPlayer$().getVideoClip$();
if (step != null  && clip.includesFrame$I(step.getFrameNumber$()) ) {
var n=clip.frameToStep$I(step.getFrameNumber$());
this.stepValueLabel.setText$S(n + ":");
var t=trackerPanel.getPlayer$().getStepTime$I(n) / 1000;
if (t >= 0 ) {
this.tField.setValue$D(t);
}}this.angleField.setToolTipText$S(this.angleField.getConversionFactor$() == 1  ? $I$(14).getString$S("TTrack.AngleField.Radians.Tooltip") : $I$(14).getString$S("TTrack.AngleField.Degrees.Tooltip"));
return this.toolbarPointComponents;
});

Clazz.newMeth(C$, 'erase$',  function () {
var stepArray=this.steps.array;
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].erase$();

if (this.tp != null  && this.tp.autoTracker != null  ) {
var autoTracker=this.tp.getAutoTracker$Z(false);
if (autoTracker != null  && autoTracker.getWizard$().isVisible$()  && autoTracker.getTrack$() === this  ) {
autoTracker.erase$();
}}});

Clazz.newMeth(C$, 'remark$',  function () {
var stepArray=this.steps.array;
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].remark$();

});

Clazz.newMeth(C$, 'repaint$',  function () {
if (this.tp == null  || !this.tp.isPaintable$() ) return;
this.remark$();
for (var i=0; i < this.tp.andWorld.size$(); i++) {
this.panel$Integer(this.tp.andWorld.get$I(i)).repaintDirtyRegion$();
}
});

Clazz.newMeth(C$, 'repaintAll$',  function () {
if (this.tp != null ) for (var i=0; i < this.tp.andWorld.size$(); i++) {
this.panel$Integer(this.tp.andWorld.get$I(i)).repaint$();
}
});

Clazz.newMeth(C$, 'erase$Integer',  function (panelID) {
var stepArray=this.steps.array;
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].erase$Integer(panelID);

var panel=this.panel$Integer(panelID);
var autoTracker=panel.autoTracker;
if (autoTracker != null ) {
if (autoTracker.getWizard$().isVisible$() && autoTracker.getTrack$() === this  ) {
autoTracker.erase$();
}}});

Clazz.newMeth(C$, 'remark$Integer',  function (panelID) {
var stepArray=this.steps.array;
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].remark$Integer(panelID);

});

Clazz.newMeth(C$, 'repaint$Integer',  function (panelID) {
this.remark$Integer(panelID);
this.panel$Integer(panelID).repaintDirtyRegion$();
});

Clazz.newMeth(C$, 'repaintStep$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
for (var j=0; j < this.tp.andWorld.size$(); j++) {
step.repaint$Integer(this.tp.andWorld.get$I(j));
}
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
this.loadAttachmentsFromNames$Z(true);
if (!this.visible || !(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) ) return;
var trackerPanel=panel;
var g=_g;
var n=trackerPanel.getFrameNumber$();
var stepSize=trackerPanel.getPlayer$().getVideoClip$().getStepSize$();
if (this.trailVisible) {
var shortTrail=this.getTrailLength$() > 0;
var stepArray=this.steps.array;
for (var frame=0; frame < stepArray.length; frame++) {
if (shortTrail && (n - frame > (this.getTrailLength$() - 1) * stepSize || frame > n ) ) continue;
if (stepArray[frame] != null  && trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(frame) ) stepArray[frame].draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(trackerPanel, g);
}
} else {
var step=this.getStep$I(n);
if (step != null ) step.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(trackerPanel, g);
}});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.visible ) return null;
var trackerPanel=panel;
var iad=null;
var n=trackerPanel.getFrameNumber$();
var stepSize=trackerPanel.getPlayer$().getVideoClip$().getStepSize$();
if (this.trailVisible) {
var shortTrail=this.getTrailLength$() > 0;
var stepArray=this.steps.array;
for (var frame=0; frame < stepArray.length; frame++) {
if (shortTrail && (n - frame > (this.getTrailLength$() - 1) * stepSize || frame > n ) ) continue;
if (stepArray[frame] != null  && trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(frame) ) {
iad=stepArray[frame].findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (iad != null ) return iad;
}}
} else {
var step=this.getStep$I(n);
if (step != null  && trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n) ) {
iad=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (iad != null ) return iad;
}}return null;
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
this.enabled=enabled;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return !this.isEmpty$();
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.getX$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.getX$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.getY$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.getY$();
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
this.properties.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.properties.get$O(name);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.properties.keySet$();
});

Clazz.newMeth(C$, 'isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (step, trackerPanel) {
if (!this.isVisible$()) return false;
var n=step.getFrameNumber$();
if (!trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n)) return false;
var frame=trackerPanel.getFrameNumber$();
if (n == frame) return true;
if (!this.trailVisible) return false;
if (this.getTrailLength$() == 0) return true;
var stepSize=trackerPanel.getPlayer$().getVideoClip$().getStepSize$();
return (frame - n) > -1 && (frame - n) < this.getTrailLength$() * stepSize ;
});

Clazz.newMeth(C$, 'setAnglesInRadians$Z',  function (radians) {
this.angleField.setUnits$S(radians ? null : "\u00b0");
this.angleField.setDecimalPlaces$I(radians ? 3 : 1);
this.angleField.setConversionFactor$D(radians ? 1.0 : 57.29577951308232);
this.angleField.setToolTipText$S(radians ? $I$(14).getString$S("TTrack.AngleField.Radians.Tooltip") : $I$(14).getString$S("TTrack.AngleField.Degrees.Tooltip"));
});

Clazz.newMeth(C$, 'dispose$',  function () {
$I$(28).notify$O$S(this, "disposing");
this.properties.clear$();
this.datasetManager=null;
if (this.attachments != null ) {
for (var i=0; i < this.attachments.length; i++) {
var targetTrack=this.attachments[i];
if (targetTrack != null ) {
targetTrack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
targetTrack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("steps", this);
}this.attachments[i]=null;
}
this.refreshAttachments$();
}this.attachments=null;
this.attachmentNames=null;
for (var step, $step = 0, $$step = this.steps.array; $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step != null ) {
step.dispose$();
}}
this.steps=null;
this.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(null);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'setMarking$Z',  function (marking) {
this.isMarking=marking;
});

Clazz.newMeth(C$, 'isMarking$',  function () {
return this.isMarking;
});

Clazz.newMeth(C$, 'getMarkingCursor$java_awt_event_InputEvent',  function (e) {
switch (this.getMarkingCursorType$java_awt_event_InputEvent(e)) {
case 2:
return $I$(61).autoTrackCursor;
case 3:
return $I$(61).autoTrackMarkCursor;
case 1:
default:
return $I$(61).markPointCursor;
}
});

Clazz.newMeth(C$, 'getMarkingCursorType$java_awt_event_InputEvent',  function (e) {
var autotrackEneabled=this.tp.isEnabled$S("track.autotrack");
if (autotrackEneabled && e != null   && $I$(62).isAutoTrackTrigger$java_awt_event_InputEvent(e)  && this.tp.getVideo$() != null   && this.isAutoTrackable$I(this.getTargetIndex$()) ) {
var step=this.getStep$I(this.tp.getFrameNumber$());
var pts=(step == null  ? null : step.getPoints$());
if (pts == null  || pts[pts.length - 1] == null  ) {
return 3;
}switch (this.ttype) {
case 2:
case 10:
case 8:
case 6:
var autoTracker=this.tp.getAutoTracker$Z(true);
if (autoTracker.getTrack$() == null  || autoTracker.getTrack$() === this  ) {
var n=this.tp.getFrameNumber$();
if (autoTracker.getOrCreateFrameData$I(n).getKeyFrameData$() == null ) return 3;
}break;
}
return 2;
}return 1;
});

Clazz.newMeth(C$, 'createWarningDialog$',  function () {
if (C$.skippedStepWarningDialog == null  && this.tp != null   && this.tframe != null  ) {
C$.skippedStepWarningDialog=Clazz.new_($I$(63,1).c$$java_awt_Frame$Z,[this.tframe, true]);
C$.skippedStepWarningDialog.addWindowListener$java_awt_event_WindowListener(((P$.TTrack$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
$I$(17).warnSkippedStep=!$I$(64).skippedStepWarningCheckbox.isSelected$();
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TTrack$24)));
var contentPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(11,1).c$$java_awt_LayoutManager);
C$.skippedStepWarningDialog.setContentPane$java_awt_Container(contentPane);
C$.skippedStepWarningTextpane=Clazz.new_($I$(65,1));
C$.skippedStepWarningTextpane.setEditable$Z(false);
C$.skippedStepWarningTextpane.setOpaque$Z(false);
C$.skippedStepWarningTextpane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(35,1).c$$I$I,[400, 120]));
C$.skippedStepWarningTextpane.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(12, 12, 0, 12));
C$.skippedStepWarningTextpane.setContentType$S("text");
C$.skippedStepWarningTextpane.setFont$java_awt_Font(Clazz.new_($I$(3,1)).getFont$());
contentPane.add$java_awt_Component$O(C$.skippedStepWarningTextpane, "Center");
C$.skippedStepWarningCheckbox=Clazz.new_($I$(66,1));
C$.skippedStepWarningCheckbox.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(0, 0, 0, 30));
C$.closeButton=Clazz.new_($I$(67,1));
C$.closeButton.addActionListener$java_awt_event_ActionListener(((P$.TTrack$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(17).warnSkippedStep=!$I$(64).skippedStepWarningCheckbox.isSelected$();
$I$(64).skippedStepWarningDialog.setVisible$Z(false);
});
})()
), Clazz.new_(P$.TTrack$25.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(11,1));
buttonbar.add$java_awt_Component(C$.skippedStepWarningCheckbox);
buttonbar.add$java_awt_Component(C$.closeButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
}});

Clazz.newMeth(C$, 'getStepSizeWarningDialog$',  function () {
this.createWarningDialog$();
if (C$.skippedStepWarningDialog == null ) return null;
C$.skippedStepWarningDialog.setTitle$S($I$(14).getString$S("TTrack.Dialog.StepSizeWarning.Title"));
var m1=$I$(14).getString$S("TTrack.Dialog.StepSizeWarning.Message1");
var m2=$I$(14).getString$S("TTrack.Dialog.StepSizeWarning.Message2");
var m3=$I$(14).getString$S("TTrack.Dialog.StepSizeWarning.Message3");
C$.skippedStepWarningTextpane.setText$S(m1 + "  " + m2 + "  " + m3 );
C$.skippedStepWarningCheckbox.setText$S($I$(14).getString$S("TTrack.Dialog.SkippedStepWarning.Checkbox"));
C$.closeButton.setText$S($I$(14).getString$S("Dialog.Button.Close"));
C$.skippedStepWarningDialog.pack$();
var dim=$I$(68).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.skippedStepWarningDialog.getBounds$().width)/2|0);
var y=((dim.height - C$.skippedStepWarningDialog.getBounds$().height)/2|0);
C$.skippedStepWarningDialog.setLocation$I$I(x, y);
return C$.skippedStepWarningDialog;
});

Clazz.newMeth(C$, 'getSkippedStepWarningDialog$',  function () {
this.createWarningDialog$();
if (C$.skippedStepWarningDialog == null ) return null;
C$.skippedStepWarningDialog.setTitle$S($I$(14).getString$S("TTrack.Dialog.SkippedStepWarning.Title"));
var m1=$I$(14).getString$S("TTrack.Dialog.SkippedStepWarning.Message1");
var m3=$I$(14).getString$S("TTrack.Dialog.StepSizeWarning.Message3");
C$.skippedStepWarningTextpane.setText$S(m1 + "  " + m3 );
C$.skippedStepWarningCheckbox.setText$S($I$(14).getString$S("TTrack.Dialog.SkippedStepWarning.Checkbox"));
C$.closeButton.setText$S($I$(14).getString$S("Dialog.Button.Close"));
$I$(13,"setFonts$O$I",[C$.skippedStepWarningDialog, $I$(13).getLevel$()]);
C$.skippedStepWarningDialog.pack$();
var dim=$I$(68).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.skippedStepWarningDialog.getBounds$().width)/2|0);
var y=((dim.height - C$.skippedStepWarningDialog.getBounds$().height)/2|0);
C$.skippedStepWarningDialog.setLocation$I$I(x, y);
return C$.skippedStepWarningDialog;
});

Clazz.newMeth(C$, 'convertTextToDataColumn$S',  function (textColumnName) {
if (textColumnName == null  || this.tp == null  ) return null;
var entries=this.textColumnEntries.get$O(textColumnName);
if (entries != null  && entries.length > 0 ) {
var data=this.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
var x=data.getDataset$I(0).getXPoints$();
var len=data.getDataset$I(0).getIndex$();
var datasets=data.getDatasetsRaw$();
var isFrames=this.getClass$() !== Clazz.getClass($I$(52)) ;
var frameIndex=isFrames ? -1 : 0;
for (var i=0; i < datasets.size$(); i++) {
if (datasets.get$I(i).getYColumnName$().equals$O("frame")) {
frameIndex=i;
break;
}}
var values=Clazz.array(Double.TYPE, [len]);
for (var i=0; i < values.length; i++) {
var frame=frameIndex < 0 ? i : (datasets.get$I(frameIndex).getY$I(i)|0);
if (entries.length > frame) {
if (entries[frame] == null ) {
values[i]=NaN;
} else try {
values[i]=Double.parseDouble$S(entries[frame]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return null;
} else {
throw ex;
}
}
} else values[i]=NaN;
}
var dataset=Clazz.new_($I$(69,1));
dataset.append$DA$DA(x, values);
dataset.setXYColumnNames$S$S$S(data.getDataset$I(0).getXColumnName$(), textColumnName, this.getName$());
dataset.setMarkerColor$java_awt_Color(this.getColor$());
return dataset;
}return null;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(70,1));
}, 1);

Clazz.newMeth(C$, 'getNameDialog$',  function () {
if (C$.nameDialog == null ) {
C$.nameDialog=Clazz.new_($I$(71,1),[this, null]);
var dim=$I$(68).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.nameDialog.getBounds$().width)/2|0);
var y=((dim.height - C$.nameDialog.getBounds$().height)/2|0);
C$.nameDialog.setLocation$I$I(x, y);
}C$.nameDialog.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
return C$.nameDialog;
});

Clazz.newMeth(C$, 'setActive$',  function () {
C$.panelActiveTracks.put$O$O(Integer.valueOf$I(this.ID), this);
});

Clazz.newMeth(C$, 'getTrack$I',  function (ID) {
return C$.panelActiveTracks.get$O(Integer.valueOf$I(ID));
}, 1);

Clazz.newMeth(C$, 'removeActiveTrack$I',  function (id) {
C$.panelActiveTracks.remove$O(Integer.valueOf$I(id));
}, 1);

Clazz.newMeth(C$, 'getValues$',  function () {
return C$.panelActiveTracks.values$();
}, 1);

Clazz.newMeth(C$, 'invalidateData$O',  function (newValue) {
this.dataValid=false;
if (newValue !== Boolean.FALSE ) this.firePropertyChange$S$O$O("data", null, newValue === Boolean.TRUE  ? null : newValue);
});

Clazz.newMeth(C$, 'isDataValid$',  function () {
return this.dataValid;
});

Clazz.newMeth(C$, 'initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
});

Clazz.newMeth(C$, 'fireStepsChanged$',  function () {
this.firePropertyChange$S$O$O("steps", null, null);
});

Clazz.newMeth(C$, 'getDataTable',  function () {
var tableViews=this.getTableViews$();
var view;
return (tableViews.isEmpty$() || (view=tableViews.get$I(0)) == null   ? null : view.getDataTable$());
}, p$2);

Clazz.newMeth(C$, 'getCustomFormatPatterns$',  function () {
if (this.tp == null ) return Clazz.array(String, [0]);
var patterns=this.getFormatPatterns$();
var defaultPatterns=this.tp.getFormatPatterns$I(this.ttype);
var customPatterns=Clazz.new_($I$(15,1));
for (var i=0; i < patterns.length - 1; i=i + 2) {
var name=patterns[i];
var pattern=defaultPatterns.get$O(name) == null  ? "" : defaultPatterns.get$O(name);
if (!pattern.equals$O(patterns[i + 1])) {
customPatterns.add$O(name);
customPatterns.add$O(patterns[i + 1]);
}}
return customPatterns.toArray$OA(Clazz.array(String, [customPatterns.size$()]));
});

Clazz.newMeth(C$, 'getTableViews$',  function () {
var tableTrackViews=Clazz.new_($I$(15,1));
if (this.tp == null  || this.tframe == null  ) {
return tableTrackViews;
}var choosers=this.tframe.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null ) continue;
var tableView=choosers[i].getView$I(1);
if (tableView != null ) {
tableTrackViews.add$O(tableView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this));
}}
return tableTrackViews;
});

Clazz.newMeth(C$, 'getPlotViews$',  function () {
var plotTrackViews=Clazz.new_($I$(15,1));
if (this.tp == null  || this.tframe == null  ) {
return plotTrackViews;
}var choosers=this.tframe.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null ) continue;
var plotView=choosers[i].getView$I(0);
if (plotView != null ) {
plotTrackViews.add$O(plotView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this));
}}
return plotTrackViews;
});

Clazz.newMeth(C$, 'getFormatPatterns$',  function () {
var patterns=Clazz.new_($I$(15,1));
for (var name, $name = C$.getAllVariables$I(this.ttype).iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
patterns.add$O(name);
patterns.add$O(this.getVarFormatPattern$S(name));
}
return patterns.toArray$OA(Clazz.array(String, [patterns.size$()]));
});

Clazz.newMeth(C$, 'setFormatPattern$S$S',  function (name, pattern) {
var changed=false;
var vars=this.getVariablesFromFormatterDisplayName$S(name);
if (vars != null ) {
for (var $var, $$var = 0, $$$var = vars; $$var<$$$var.length&&(($var=($$$var[$$var])),1);$$var++) {
changed=p$2.setFormatPatternForVariable$S$S.apply(this, [$var, pattern]) || changed ;
}
return changed;
} else return p$2.setFormatPatternForVariable$S$S.apply(this, [name, pattern]);
});

Clazz.newMeth(C$, 'setFormatPatternForVariable$S$S',  function ($var, pattern) {
var changed=false;
var found=false;
if (this.isViewable$()) {
found=true;
var tableViews=this.getTableViews$();
for (var view, $view = tableViews.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (view == null ) continue;
var table=view.getDataTable$();
if (!table.getFormatPattern$S($var).equals$O(pattern)) {
table.setFormatPattern$S$S($var, pattern);
changed=true;
}}
}var fieldMap=this.getNumberFields$();
var fields=fieldMap.get$O($var);
if (fields != null ) {
found=true;
for (var field, $field = 0, $$field = fields; $field<$$field.length&&((field=($$field[$field])),1);$field++) {
if (!field.getFixedPattern$().equals$O(pattern)) {
field.setFixedPattern$S(pattern);
changed=true;
}}
}if (!found) {
if (!pattern.equals$O(this.getProperty$S($var))) {
this.setProperty$S$O($var, pattern);
changed=true;
}}if (changed && ($var.equals$O("x") || $var.equals$O("y") ) && this.tp != null    && this.tp.getSelectedTrack$() === this  ) {
this.tp.coordStringBuilder.setUnitsAndPatterns$org_opensourcephysics_cabrillo_tracker_TTrack$S$S(this, "x", "y");
if (this.tp.getSelectedPoint$() != null ) {
this.tp.getSelectedPoint$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.tp);
}}return changed;
}, p$2);

Clazz.newMeth(C$, 'getVarFormatPattern$S',  function (name) {
var val;
if (!C$.getAllVariables$I(this.ttype).contains$O(name)) {
var vars=this.getVariablesFromFormatterDisplayName$S(name);
if (vars != null  && vars.length > 0 ) {
name=vars[0];
}}var fields=this.getNumberFields$().get$O(name);
if (fields != null  && fields.length > 0 ) {
return fields[0].getFixedPattern$();
}var table=p$2.getDataTable.apply(this, []);
if (table != null  && (val=table.getFormatPattern$S(name)) != null   && !"".equals$O(val.trim$()) ) {
return val;
}if ((val=this.getProperty$S(name)) != null ) {
return val;
}var patterns=this.tp.getFormatPatterns$I(this.ttype);
if ((val=patterns.get$O(name)) != null ) {
return val;
}patterns=C$.getDefaultFormatPatterns$I(this.ttype);
if (patterns != null  && (val=patterns.get$O(name)) != null  ) {
return val;
}return "";
});

Clazz.newMeth(C$, 'getDefaultFormatPatterns$I',  function (ttype) {
var patterns=C$.defaultFormatPatterns[ttype];
if (patterns != null ) return patterns;
patterns=Clazz.new_($I$(20,1));
C$.defaultFormatPatterns[ttype]=patterns;
switch (ttype) {
case 1:
patterns.put$O$O($I$(14).getString$S("CircleFitter.Data.PointCount"), "0");
case 6:
patterns.put$O$O($I$(17).THETA, "0.0");
case 5:
case 7:
case 8:
case 9:
patterns.put$O$O("t", "0.000");
patterns.put$O$O("step", "0");
patterns.put$O$O("frame", "0");
break;
}
switch (ttype) {
case 3:
patterns.put$O$O("n", "0");
case 7:
patterns.put$O$O("pixels", "0");
patterns.put$O$O("R", "0.0");
patterns.put$O$O("G", "0.0");
patterns.put$O$O("B", "0.0");
patterns.put$O$O("luma", "0.0");
break;
}
return patterns;
}, 1);

Clazz.newMeth(C$, 'getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S',  function (track, variable) {
if (variable.startsWith$S($I$(17).THETA)) {
return "A";
}if (variable.equals$O("t")) {
return "T";
}return track.getVarDimsImpl$S(variable);
}, 1);

Clazz.newMeth(C$, 'setInitialFormatPatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var patterns=trackerPanel.getFormatPatterns$I(this.ttype);
for (var name, $name = patterns.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
this.setFormatPattern$S$S(name, patterns.get$O(name));
}
if (this.customNumberFormats != null ) {
this.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
for (var i=0; i < this.customNumberFormats.length - 1; i=i + 2) {
var name=this.customNumberFormats[i];
var pattern=this.customNumberFormats[i + 1];
this.setFormatPattern$S$S(name, pattern);
}
this.customNumberFormats=null;
}});

Clazz.newMeth(C$, 'clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I',  function (data, count, dataVariables, desc, validData, len) {
var v0=(dataVariables == null  ? null : dataVariables[0]);
if (v0 == null  || data.getDataset$I(0).getColumnName$I(0).equals$O(v0) ) {
for (var i=0; i < count; i++) {
data.getDataset$I(i).clear$();
}
} else if (dataVariables != null ) {
for (var i=0; i < count; i++) data.setXYColumnNames$I$S$S(i, v0, dataVariables[i + 1]);

}this.dataDescriptions=Clazz.array(String, [count + 1]);
if (desc != null ) {
for (var i=0; i <= count; i++) {
this.dataDescriptions[i]=$I$(14).getString$S(desc + i);
}
}if (validData != null ) {
var t=validData[count];
for (var i=0; i < count; i++) {
data.getDataset$I(i).append$DA$DA$I(t, validData[i], len);
}
}});

Clazz.newMeth(C$, 'addFixedItem$javax_swing_JMenu',  function (menu) {
for (var i=menu.getItemCount$(); --i >= 0; ) {
if (menu.getItem$I(i) === this.lockedItem ) {
menu.insert$javax_swing_JMenuItem$I(this.fixedItem, i + 1);
break;
}}
});

Clazz.newMeth(C$, 'assembleMenu$javax_swing_JMenu$javax_swing_JMenuItem',  function (menu, topItem) {
menu.remove$javax_swing_JMenuItem(this.lockedItem);
menu.remove$javax_swing_JMenuItem(this.autoAdvanceItem);
menu.remove$javax_swing_JMenuItem(this.markByDefaultItem);
menu.insert$javax_swing_JMenuItem$I(topItem, 0);
if (menu.getItemCount$() > 1) menu.insertSeparator$I(1);
var prevItem=topItem;
for (var j=menu.getItemCount$(); --j >= 0; ) {
var item=menu.getItem$I(j);
if (item == null  && prevItem == null  ) {
menu.remove$I(j);
} else {
prevItem=item;
}}
return menu;
});

Clazz.newMeth(C$, 'removeDeleteTrackItem$javax_swing_JMenu',  function (menu) {
var n=menu.getItemCount$();
if (n > 0 && menu.getItem$I(n - 1) === this.deleteTrackItem  ) {
menu.remove$I(--n);
if (n > 0 && menu.getItem$I(n - 1) == null  ) {
menu.remove$I(n - 1);
}}});

C$.$static$=function(){C$.$static$=0;
C$.HINT_STEP_ADDED_OR_REMOVED=Integer.valueOf$I(-2);
C$.HINT_STEPS_SELECTED=Integer.valueOf$I(-3);
C$.panelEventsTTrack=Clazz.array(String, -1, ["radian_angles", "magnification", "stepnumber", "data", "coords", "transform", "imagespace"]);
C$.panelActiveTracks=Clazz.new_($I$(19,1));
C$.nextID=1;
C$.baseTrackTypes=Clazz.array(String, -1, ["Calibaration", "CircleFitter", "CoordAxes", "LineProfile", "OffsetOrigin", "PointMass", "Protractor", "RGBRegion", "TapeMeasure", "Vector", "Perspective"]);
C$.defaultFormatPatterns=Clazz.array($I$(20), [C$.baseTrackTypes.length]);
C$.prevDefaultPatterns=Clazz.array($I$(20), [C$.baseTrackTypes.length]);
C$.NOMAP=Clazz.new_($I$(19,1));
C$.NOMAPS=Clazz.new_($I$(19,1));
C$.NOVARS=Clazz.array(String, [0]);
C$.NOVARA=Clazz.new_($I$(15,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TTrack, "StepArray", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.delta=10;
this.array=Clazz.array($I$(1), [this.delta]);
this.autofill=false;
},1);

C$.$fields$=[['Z',['autofill'],'I',['delta'],'O',['array','org.opensourcephysics.cabrillo.tracker.Step[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
;C$.$init$.apply(this);
this.autofill=true;
step.n=0;
this.array[0]=step;
p$1.fill$org_opensourcephysics_cabrillo_tracker_StepA$org_opensourcephysics_cabrillo_tracker_Step.apply(this, [this.array, step]);
}, 1);

Clazz.newMeth(C$, 'getStep$I',  function (n) {
if (n >= this.array.length) {
var len=Math.max(n + this.delta, n - this.array.length + 1);
this.setLength$I(len);
}return this.array[n];
});

Clazz.newMeth(C$, 'setStep$I$org_opensourcephysics_cabrillo_tracker_Step',  function (n, step) {
if (this.autofill && step == null  ) return;
if (n >= this.array.length) {
var len=Math.max(n + this.delta, n - this.array.length + 1);
this.setLength$I(len);
}{
this.array[n]=step;
}});

Clazz.newMeth(C$, 'contains$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
{
for (var i=0; i < this.array.length; i++) if (this.array[i] === step ) return true;

}return false;
});

Clazz.newMeth(C$, 'setLength$I',  function (len) {
var newArray=Clazz.array($I$(1), [len]);
System.arraycopy$O$I$O$I$I(this.array, 0, newArray, 0, Math.min(len, this.array.length));
if (len > this.array.length && this.autofill ) {
var step=this.array[this.array.length - 1];
p$1.fill$org_opensourcephysics_cabrillo_tracker_StepA$org_opensourcephysics_cabrillo_tracker_Step.apply(this, [newArray, step]);
}this.array=newArray;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
{
for (var i=0; i < this.array.length; i++) if (this.array[i] != null ) return false;

}return true;
});

Clazz.newMeth(C$, 'isPreceded$I',  function (n) {
{
var k=Math.min(n, this.array.length);
for (var i=0; i < k; i++) if (this.array[i] != null ) return true;

}return false;
});

Clazz.newMeth(C$, 'isAutofill$',  function () {
return this.autofill;
});

Clazz.newMeth(C$, 'fill$org_opensourcephysics_cabrillo_tracker_StepA$org_opensourcephysics_cabrillo_tracker_Step',  function (array, step) {
for (var n=0; n < array.length; n++) {
if (array[n] == null ) {
var clone=step.clone$();
clone.n=n;
array[n]=clone;
}}
}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TTrack, "TrackNumberField", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.NumberField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (t) {
C$.superclazz.prototype.setText$S.apply(this, [t]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getTrackBar$Z(true).resizeField$org_opensourcephysics_media_core_NumberField(this);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TTrack, "TrackDecimalField", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.DecimalField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (places) {
;C$.superclazz.c$$I$I.apply(this,[0, places]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (t) {
C$.superclazz.prototype.setText$S.apply(this, [t]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null ) {
var tbar=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.getTrackBar$Z(false);
if (tbar != null ) tbar.resizeField$org_opensourcephysics_media_core_NumberField(this);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TTrack, "TextLineLabel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.display.DrawingPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['w'],'O',['textLine','org.opensourcephysics.display.DrawableTextLine','label','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.textLine=Clazz.new_($I$(2,1).c$$S$D$D,["", 0, -4.3]);
this.textLine.setJustification$I(0);
this.addDrawable$org_opensourcephysics_display_Drawable(this.textLine);
this.label=Clazz.new_($I$(3,1));
this.textLine.setFont$java_awt_Font(this.label.getFont$());
this.textLine.setColor$java_awt_Color(this.label.getForeground$());
this.setShowCoordinates$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$.apply(this, []);
this.setText$S(text);
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (text) {
if (text == null ) text="";
if (text.equals$O(this.textLine.getText$())) return;
this.w=-1;
this.textLine.setText$S(text);
this.setToolTipText$S(text);
if (text.contains$CharSequence("_{")) {
text=$I$(4).removeSubscripting$S(text);
}this.label.setText$S(text);
var dim=this.label.getPreferredSize$();
dim.width+=4;
this.setPreferredSize$java_awt_Dimension(dim);
});

Clazz.newMeth(C$, 'getFont$',  function () {
if (this.textLine != null ) return this.textLine.getFont$();
return C$.superclazz.prototype.getFont$.apply(this, []);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
if (this.textLine != null ) {
this.textLine.setFont$java_awt_Font(font);
this.w=-1;
} else C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.setPixelScale$();
if ($I$(5).setRenderingHints) (g).setRenderingHint$java_awt_RenderingHints_Key$O($I$(6).KEY_TEXT_ANTIALIASING, $I$(6).VALUE_TEXT_ANTIALIAS_ON);
this.textLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(this, g);
if (this.w == -1) {
this.w=this.textLine.getWidth$java_awt_Graphics(g);
var dim=this.getPreferredSize$();
if (dim.width > this.w + 4 || dim.width < this.w + 4 ) {
dim.width=this.w + 4;
this.setPreferredSize$java_awt_Dimension(dim);
var c=$I$(7).getParentToolBar$java_awt_Container(this);
if (c != null ) (c).refresh$();
}}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TTrack, "NameDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nameLabel','javax.swing.JLabel','nameField','javax.swing.JTextField','target','org.opensourcephysics.cabrillo.tracker.TTrack']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tframe, null, true]);C$.$init$.apply(this);
this.setDefaultCloseOperation$I(0);
this.addWindowListener$java_awt_event_WindowListener(((P$.TTrack$NameDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$NameDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
var newName=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog'].nameField.getText$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog'].target != null  && this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp != null  ) this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.setTrackName$org_opensourcephysics_cabrillo_tracker_TTrack$S$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog'].target, newName, true);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TTrack$NameDialog$1)));
this.nameField=Clazz.new_($I$(9,1).c$$I,[20]);
this.nameField.addActionListener$java_awt_event_ActionListener(((P$.TTrack$NameDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrack$NameDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var newName=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog'].nameField.getText$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog'].target != null ) this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].tp.setTrackName$org_opensourcephysics_cabrillo_tracker_TTrack$S$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack.NameDialog'].target, newName, true);
});
})()
), Clazz.new_(P$.TTrack$NameDialog$2.$init$,[this, null])));
this.nameLabel=Clazz.new_($I$(3,1));
var bar=Clazz.new_($I$(10,1));
bar.setFloatable$Z(false);
bar.add$java_awt_Component(this.nameLabel);
bar.add$java_awt_Component(this.nameField);
var contentPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(11,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(bar, "Center");
this.setContentPane$java_awt_Container(contentPane);
}, 1);

Clazz.newMeth(C$, 'setTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
this.target=track;
$I$(13,"setFonts$O$I",[this, $I$(13).getLevel$()]);
this.setTitle$S($I$(14).getString$S("TTrack.Dialog.Name.Title"));
this.nameLabel.setText$S($I$(14).getString$S("TTrack.Dialog.Name.Label"));
this.nameField.setText$S(track.getName$());
this.nameField.selectAll$();
this.pack$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TTrack, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var track=obj;
control.setValue$S$O("name", track.getName$());
if (!track.description.equals$O("")) control.setValue$S$O("description", track.description);
control.setValue$S$O("color", track.getColor$());
control.setValue$S$O("footprint", track.getFootprintName$());
control.setValue$S$Z("visible", track.isVisible$());
control.setValue$S$Z("trail", track.isTrailVisible$());
if (track.isLocked$()) control.setValue$S$Z("locked", track.isLocked$());
var customPatterns=track.getCustomFormatPatterns$();
if (customPatterns.length > 0) {
control.setValue$S$O("number_formats", customPatterns);
}if (!track.getTextColumnNames$().isEmpty$()) {
var names=track.getTextColumnNames$().toArray$OA(Clazz.array(String, [0]));
control.setValue$S$O("text_column_names", names);
var entries=Clazz.array(String, [names.length, null]);
for (var i=0; i < names.length; i++) {
entries[i]=track.textColumnEntries.get$O(names[i]);
}
control.setValue$S$O("text_column_entries", entries);
}if (track.tp != null ) {
var list=Clazz.new_($I$(15,1));
track.refreshDataLater=true;
var data=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(track.tp);
track.refreshDataLater=false;
var datasets=data.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var dataset=datasets.get$I(i);
if (Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction")) {
list.add$O(dataset);
}}
if (!list.isEmpty$()) {
var names=data.getConstantNames$();
var n=names.size$();
if (n > 0) {
var paramArray=Clazz.array(java.lang.Object, [n, 4]);
var i=0;
for (var key, $key = names.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
paramArray[i][0]=key;
paramArray[i][1]=data.getConstantValue$S(key);
paramArray[i][2]=data.getConstantExpression$S(key);
paramArray[i][3]=data.getConstantDescription$S(key);
++i;
}
control.setValue$S$O("constants", paramArray);
}var f=list.toArray$OA(Clazz.array($I$(16), [0]));
control.setValue$S$O("data_functions", f);
}}var att=track.attachments;
if (att != null  && att.length > 0 ) {
var names=Clazz.array(String, [att.length]);
var notNull=false;
for (var i=0; i < att.length; i++) {
var next=att[i];
names[i]=next == null  ? null : next.getName$();
notNull=notNull || names[i] != null  ;
}
if (notNull) {
control.setValue$S$O("attachments", names);
}}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var track=obj;
var locked=track.isLocked$();
track.setLocked$Z(false);
track.setName$S(control.getString$S("name"));
track.setDescription$S(control.getString$S("description"));
track.setColor$java_awt_Color(control.getObject$S("color"));
var s=control.getString$S("footprint");
if (s != null ) track.setFootprint$S(s.trim$());
track.setVisible$Z(control.getBoolean$S("visible"));
var index=$I$(17).preferredTrailLengthIndex;
if (track.tp != null  && track.tp.getTFrame$() != null  ) {
var toolbar=track.tp.getTFrame$().getToolBar$Integer$Z(track.tp.getID$(), false);
index=toolbar.trailLengthIndex;
}track.setTrailLength$I($I$(18).trailLengths[index]);
track.setTrailVisible$Z(control.getBoolean$S("trail"));
track.customNumberFormats=control.getObject$S("number_formats");
track.textColumnNames.clear$();
track.textColumnEntries.clear$();
var columnNames=control.getObject$S("text_column_names");
if (columnNames != null ) {
var columnEntries=control.getObject$S("text_column_entries");
if (columnEntries != null ) {
for (var i=0; i < columnNames.length; i++) {
track.textColumnNames.add$O(columnNames[i]);
track.textColumnEntries.put$O$O(columnNames[i], columnEntries[i]);
}
}}track.constantsLoadedFromXML=control.getObject$S("constants");
var it=control.getPropsRaw$().iterator$();
while (it.hasNext$()){
var prop=it.next$();
if (prop.getPropertyName$().equals$O("data_functions")) {
track.dataProp=prop;
}}
var names=control.getObject$S("attachments");
if (names != null ) {
track.attachmentNames=names;
}track.setLocked$Z(locked || control.getBoolean$S("locked") );
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
