(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'java.awt.Color','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.BorderFactory','java.util.ArrayList',['org.opensourcephysics.cabrillo.tracker.UnitsDialog','.ControlPanel','.UnitField'],'javax.swing.JRadioButton','org.opensourcephysics.cabrillo.tracker.Tracker','javax.swing.AbstractAction','javax.swing.ButtonGroup','javax.swing.JCheckBox','javax.swing.Box','javax.swing.JPanel','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JOptionPane','javax.swing.JTabbedPane',['org.opensourcephysics.cabrillo.tracker.UnitsDialog','.ControlPanel'],'javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.FontSizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnitsDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['ControlPanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['prevTabRadians','prevDefRadians'],'S',['prevTabL','prevTabM','prevTabT','prevDefL','prevDefM','prevDefT'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','tabPanel','org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel','+prefsPanel','tabbedPane','javax.swing.JTabbedPane','acceptButton','javax.swing.JButton','+revertButton','+unitsSIButton']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(17).getFrameForComponent$java_awt_Component(trackerPanel), true]);C$.$init$.apply(this);
this.panelID=trackerPanel.getID$();
this.frame=trackerPanel.getTFrame$();
p$2.createGUI.apply(this, []);
this.refreshGUI$();
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(4,1))],$I$(15,1).c$$java_awt_LayoutManager);
contentPane.setBorder$javax_swing_border_Border($I$(6).createEtchedBorder$());
this.setContentPane$java_awt_Container(contentPane);
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.prevTabL=panel.getLengthUnit$();
this.prevTabM=panel.getMassUnit$();
this.prevTabT=panel.getTimeUnit$();
this.prevTabRadians=panel.isAnglesInRadians$();
this.prevDefL=$I$(10).preferredLengthUnit;
this.prevDefM=$I$(10).preferredMassUnit;
this.prevDefT=$I$(10).preferredTimeUnit;
this.prevDefRadians=$I$(10).isRadians;
this.tabbedPane=Clazz.new_($I$(18,1).c$$I,[1]);
this.tabbedPane.setTabLayoutPolicy$I(1);
this.tabPanel=Clazz.new_($I$(19,1),[this, null]);
this.prefsPanel=Clazz.new_($I$(19,1),[this, null]);
this.tabbedPane.addTab$S$java_awt_Component("", this.tabPanel);
this.tabbedPane.addTab$S$java_awt_Component("", this.prefsPanel);
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.UnitsDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'], []);
});
})()
), Clazz.new_(P$.UnitsDialog$1.$init$,[this, null])));
this.tabbedPane.setSelectedComponent$java_awt_Component(this.tabPanel);
contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
this.acceptButton=Clazz.new_($I$(20,1));
this.acceptButton.addActionListener$java_awt_event_ActionListener(((P$.UnitsDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.UnitsDialog$2.$init$,[this, null])));
this.revertButton=Clazz.new_($I$(20,1));
this.revertButton.addActionListener$java_awt_event_ActionListener(((P$.UnitsDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabPanel === this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabbedPane.getSelectedComponent$() ) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID);
panel.setLengthUnit$S$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevTabL, true);
panel.setMassUnit$S$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevTabM, true);
panel.setTimeUnit$S$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevTabT, true);
panel.setAnglesInRadians$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevTabRadians);
} else {
$I$(10).preferredLengthUnit=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevDefL;
$I$(10).preferredMassUnit=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevDefM;
$I$(10).preferredTimeUnit=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevDefT;
$I$(10).isRadians=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].prevDefRadians;
}this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'], []);
});
})()
), Clazz.new_(P$.UnitsDialog$3.$init$,[this, null])));
this.unitsSIButton=Clazz.new_($I$(20,1));
this.unitsSIButton.addActionListener$java_awt_event_ActionListener(((P$.UnitsDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabPanel === this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabbedPane.getSelectedComponent$() ) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID);
panel.setLengthUnit$S$Z("m", true);
panel.setMassUnit$S$Z("kg", true);
panel.setTimeUnit$S$Z("s", true);
panel.anglesInRadians=true;
} else {
$I$(10).preferredLengthUnit="m";
$I$(10).preferredMassUnit="kg";
$I$(10).preferredTimeUnit="s";
$I$(10).isRadians=true;
}this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'], []);
});
})()
), Clazz.new_(P$.UnitsDialog$4.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(15,1));
buttonbar.add$java_awt_Component(this.unitsSIButton);
buttonbar.add$java_awt_Component(this.revertButton);
buttonbar.add$java_awt_Component(this.acceptButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
}, p$2);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(16).getString$S("UnitsDialog.Title"));
this.acceptButton.setText$S($I$(16).getString$S("Dialog.Button.OK"));
this.revertButton.setText$S($I$(16).getString$S("UnitsDialog.Button.Revert.Text"));
this.unitsSIButton.setText$S($I$(16).getString$S("UnitsDialog.Button.SI.Text"));
this.tabbedPane.setTitleAt$I$S(0, $I$(16).getString$S("UnitsDialog.Tab.Tab"));
this.tabbedPane.setTitleAt$I$S(1, $I$(16).getString$S("UnitsDialog.Tab.Preferred"));
if (this.tabPanel === this.tabbedPane.getSelectedComponent$() ) {
this.tabPanel.refreshGUI$();
} else {
this.prefsPanel.refreshGUI$();
}var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var unchanged=this.tabPanel === this.tabbedPane.getSelectedComponent$()  ? this.prevTabL.equals$O(panel.getLengthUnit$()) && this.prevTabM.equals$O(panel.getMassUnit$()) && this.prevTabT.equals$O(panel.getTimeUnit$()) && this.prevTabRadians == panel.isAnglesInRadians$()    : $I$(10).preferredLengthUnit.equals$O(this.prevDefL) && $I$(10).preferredMassUnit.equals$O(this.prevDefM) && $I$(10).preferredTimeUnit.equals$O(this.prevDefT) && $I$(10).isRadians == this.prevDefRadians   ;
this.revertButton.setEnabled$Z(!unchanged);
var isSI=this.tabPanel === this.tabbedPane.getSelectedComponent$()  ? "m".equals$O(panel.getLengthUnit$()) && "kg".equals$O(panel.getMassUnit$()) && "s".equals$O(panel.getTimeUnit$()) && panel.isAnglesInRadians$() == true    : $I$(10).preferredLengthUnit.equals$O("m") && $I$(10).preferredMassUnit.equals$O("kg") && $I$(10).preferredTimeUnit.equals$O("s") && $I$(10).isRadians == true   ;
this.unitsSIButton.setEnabled$Z(!isSI);
this.pack$();
$I$(21).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(22).setFonts$O$I(this, level);
this.refreshGUI$();
this.pack$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.UnitsDialog, "ControlPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['UnitField',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lengthLabel','javax.swing.JLabel','+massLabel','+timeLabel','labels','java.util.ArrayList','degreesButton','javax.swing.JRadioButton','+radiansButton','visibleCheckbox','javax.swing.JCheckBox','lengthUnitField','javax.swing.JTextField','+massUnitField','+timeUnitField','unitsBorder','javax.swing.border.TitledBorder','+angleBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(4,1))]);C$.$init$.apply(this);
p$1.createGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var tp=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID);
this.lengthLabel=Clazz.new_($I$(5,1));
this.lengthLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.lengthLabel.setHorizontalAlignment$I(11);
this.massLabel=Clazz.new_($I$(5,1));
this.massLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.massLabel.setHorizontalAlignment$I(11);
this.timeLabel=Clazz.new_($I$(5,1));
this.timeLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.timeLabel.setHorizontalAlignment$I(11);
this.labels=Clazz.new_($I$(7,1));
this.labels.add$O(this.lengthLabel);
this.labels.add$O(this.massLabel);
this.labels.add$O(this.timeLabel);
this.lengthUnitField=Clazz.new_($I$(8,1).c$$I,[this, null, 5]);
this.massUnitField=Clazz.new_($I$(8,1).c$$I,[this, null, 5]);
this.timeUnitField=Clazz.new_($I$(8,1).c$$I,[this, null, 5]);
this.degreesButton=Clazz.new_($I$(9,1));
this.radiansButton=Clazz.new_($I$(9,1));
var angleUnitAction=((P$.UnitsDialog$ControlPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$ControlPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'] === this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabPanel ) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID);
if (panel.anglesInRadians == this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'].radiansButton.isSelected$() ) return;
panel.setAnglesInRadians$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'].radiansButton.isSelected$());
} else {
$I$(10).isRadians=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'].radiansButton.isSelected$();
}this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'], []);
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.UnitsDialog$ControlPanel$1));
this.degreesButton.setAction$javax_swing_Action(angleUnitAction);
this.radiansButton.setAction$javax_swing_Action(angleUnitAction);
var group=Clazz.new_($I$(12,1));
group.add$javax_swing_AbstractButton(this.degreesButton);
group.add$javax_swing_AbstractButton(this.radiansButton);
this.degreesButton.setSelected$Z(!tp.isAnglesInRadians$());
this.radiansButton.setSelected$Z(tp.isAnglesInRadians$());
this.visibleCheckbox=Clazz.new_($I$(13,1));
this.visibleCheckbox.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID).isUnitsVisible$());
this.visibleCheckbox.setAction$javax_swing_Action(((P$.UnitsDialog$ControlPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$ControlPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID).setUnitsVisible$Z(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'].visibleCheckbox.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'], []);
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.UnitsDialog$ControlPanel$2)));
this.unitsBorder=$I$(6).createTitledBorder$S("");
this.angleBorder=$I$(6).createTitledBorder$S("");
var box=$I$(14).createVerticalBox$();
box.setBorder$javax_swing_border_Border(this.unitsBorder);
this.add$java_awt_Component$O(box, "North");
var panel=Clazz.new_($I$(15,1));
panel.add$java_awt_Component(this.lengthLabel);
panel.add$java_awt_Component(this.lengthUnitField);
box.add$java_awt_Component(panel);
panel=Clazz.new_($I$(15,1));
panel.add$java_awt_Component(this.massLabel);
panel.add$java_awt_Component(this.massUnitField);
box.add$java_awt_Component(panel);
panel=Clazz.new_($I$(15,1));
panel.add$java_awt_Component(this.timeLabel);
panel.add$java_awt_Component(this.timeUnitField);
box.add$java_awt_Component(panel);
panel=Clazz.new_($I$(15,1));
panel.add$java_awt_Component(this.visibleCheckbox);
box.add$java_awt_Component(panel);
panel=Clazz.new_($I$(15,1));
panel.setBorder$javax_swing_border_Border(this.angleBorder);
panel.add$java_awt_Component(this.degreesButton);
panel.add$java_awt_Component(this.radiansButton);
this.add$java_awt_Component$O(panel, "Center");
}, p$1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabPanel ) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID);
this.lengthUnitField.setText$S(panel.lengthUnit);
this.massUnitField.setText$S(panel.massUnit);
this.timeUnitField.setText$S(panel.getTimeUnit$());
this.visibleCheckbox.setSelected$Z(panel.isUnitsVisible$());
this.degreesButton.setSelected$Z(!panel.isAnglesInRadians$());
this.radiansButton.setSelected$Z(panel.isAnglesInRadians$());
} else {
this.lengthUnitField.setText$S($I$(10).preferredLengthUnit);
this.massUnitField.setText$S($I$(10).preferredMassUnit);
this.timeUnitField.setText$S($I$(10).preferredTimeUnit);
this.degreesButton.setSelected$Z(!$I$(10).isRadians);
this.radiansButton.setSelected$Z($I$(10).isRadians);
}this.b$['java.awt.Dialog'].setTitle$S.apply(this.b$['java.awt.Dialog'], [$I$(16).getString$S("UnitsDialog.Title")]);
this.lengthLabel.setText$S($I$(16).getString$S("NumberFormatSetter.Help.Dimensions.2"));
this.massLabel.setText$S($I$(16).getString$S("NumberFormatSetter.Help.Dimensions.4"));
this.timeLabel.setText$S($I$(16).getString$S("NumberFormatSetter.Help.Dimensions.3"));
this.degreesButton.setText$S($I$(16).getString$S("TMenuBar.MenuItem.Degrees"));
this.radiansButton.setText$S($I$(16).getString$S("TMenuBar.MenuItem.Radians"));
this.unitsBorder.setTitle$S($I$(16).getString$S("UnitsDialog.Border.LMT.Text"));
this.angleBorder.setTitle$S($I$(16).getString$S("NumberFormatSetter.TitledBorder.Units.Text"));
this.visibleCheckbox.setText$S($I$(16).getString$S("UnitsDialog.Checkbox.Visible.Text"));
this.visibleCheckbox.setToolTipText$S($I$(16).getString$S("UnitsDialog.Checkbox.Visible.Tooltip"));
this.timeUnitField.setBackground$java_awt_Color($I$(1).WHITE);
this.massUnitField.setBackground$java_awt_Color($I$(1).WHITE);
this.lengthUnitField.setBackground$java_awt_Color($I$(1).WHITE);
this.labels.add$O(this.lengthLabel);
this.labels.add$O(this.massLabel);
this.labels.add$O(this.timeLabel);
var w=0;
for (var next, $next = this.labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setPreferredSize$java_awt_Dimension(null);
w=Math.max(w, next.getPreferredSize$().width + 1);
}
var labelSize=this.lengthLabel.getPreferredSize$();
labelSize.width=w;
for (var next, $next = this.labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setPreferredSize$java_awt_Dimension(labelSize);
}
});

Clazz.newMeth(C$, 'setUnit$org_opensourcephysics_cabrillo_tracker_UnitsDialog_ControlPanel_UnitField',  function (field) {
var s=field.getText$();
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].panelID);
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].tabPanel ) {
if (field === this.lengthUnitField ) {
trackerPanel.setLengthUnit$S$Z(s, true);
} else if (field === this.massUnitField ) {
trackerPanel.setMassUnit$S$Z(s, true);
} else if (field === this.timeUnitField ) {
trackerPanel.setTimeUnit$S$Z(s, true);
}} else {
if (field === this.lengthUnitField ) {
var prev=trackerPanel.getLengthUnit$();
trackerPanel.setLengthUnit$S$Z(s, false);
$I$(10).preferredLengthUnit=trackerPanel.getLengthUnit$();
trackerPanel.setLengthUnit$S$Z(prev, false);
} else if (field === this.massUnitField ) {
var prev=trackerPanel.getMassUnit$();
trackerPanel.setMassUnit$S$Z(s, false);
$I$(10).preferredMassUnit=trackerPanel.getMassUnit$();
trackerPanel.setMassUnit$S$Z(prev, false);
} else if (field === this.timeUnitField ) {
var prev=trackerPanel.getTimeUnit$();
trackerPanel.setTimeUnit$S$Z(s, false);
$I$(10).preferredTimeUnit=trackerPanel.getTimeUnit$();
trackerPanel.setTimeUnit$S$Z(prev, false);
}}this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog'], []);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.UnitsDialog.ControlPanel, "UnitField", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (len) {
;C$.superclazz.c$$I.apply(this,[len]);C$.$init$.apply(this);
this.addKeyListener$java_awt_event_KeyListener(((P$.UnitsDialog$ControlPanel$UnitField$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$ControlPanel$UnitField$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
p$1.setUnit$org_opensourcephysics_cabrillo_tracker_UnitsDialog_ControlPanel_UnitField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel.UnitField']]);
} else {
this.b$['javax.swing.JComponent'].setBackground$java_awt_Color.apply(this.b$['javax.swing.JComponent'], [$I$(1).yellow]);
}});
})()
), Clazz.new_($I$(2,1),[this, null],P$.UnitsDialog$ControlPanel$UnitField$1)));
this.addFocusListener$java_awt_event_FocusListener(((P$.UnitsDialog$ControlPanel$UnitField$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitsDialog$ControlPanel$UnitField$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['java.awt.Component'].getBackground$.apply(this.b$['java.awt.Component'], []) === $I$(1).yellow ) {
p$1.setUnit$org_opensourcephysics_cabrillo_tracker_UnitsDialog_ControlPanel_UnitField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.UnitsDialog.ControlPanel.UnitField']]);
}});
})()
), Clazz.new_($I$(3,1),[this, null],P$.UnitsDialog$ControlPanel$UnitField$2)));
}, 1);

Clazz.newMeth(C$);
})()
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
