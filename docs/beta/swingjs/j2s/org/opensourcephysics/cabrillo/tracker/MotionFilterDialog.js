(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.ButtonGroup','javax.swing.AbstractAction',['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog','.MySpinner'],'javax.swing.SpinnerNumberModel','javax.swing.JLabel','org.opensourcephysics.media.core.NumberField','javax.swing.JTextPane',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','javax.swing.JScrollPane','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JButton','java.awt.Color','javax.swing.JRadioButton','javax.swing.Box','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MovingAverageFilter','org.opensourcephysics.cabrillo.tracker.ButterworthFilter','org.opensourcephysics.cabrillo.tracker.SavitzkyGolayFilter','org.opensourcephysics.cabrillo.tracker.TTrack','java.awt.Toolkit','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MotionFilterDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['MySpinner',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.urlButterworth="https://en.wikipedia.org/wiki/Butterworth_filter";
this.urlSG="https://en.wikipedia.org/wiki/Savitzky%E2%80%93Golay_filter";
this.urlZeroPhase="https://community.sw.siemens.com/s/article/butterworth-filter-regular-and-zero-phase";
this.htmlFontSize=14;
this.targetMasses=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['updating'],'I',['htmlFontSize'],'S',['urlButterworth','urlSG','urlZeroPhase'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','targetMasses','java.util.ArrayList','noneButton','javax.swing.JRadioButton','+maButton','+butterButton','+sgButton','choiceBorder','javax.swing.border.TitledBorder','+paramsBorder','infoPane','javax.swing.JTextPane','rmsField','org.opensourcephysics.media.core.NumberField','choices','javax.swing.JPanel','+params','+upper','+rmsReadout','maWindowSpinner','javax.swing.JSpinner','+butterOrderSpinner','+butterCutoffSpinner','butterRateLabel','javax.swing.JLabel','+rmsLabel','sgWindowSpinner','javax.swing.JSpinner','+sgPolySpinner','okButton','javax.swing.JButton','+cancelButton','prevFilter','org.opensourcephysics.cabrillo.tracker.MotionFilter']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
p$1.createGUI.apply(this, []);
this.pack$();
this.okButton.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'setTargetMass$org_opensourcephysics_cabrillo_tracker_FilteredPointMass',  function (mass) {
this.targetMasses.clear$();
this.targetMasses.add$O(mass);
p$1.refreshGUI.apply(this, []);
});

Clazz.newMeth(C$, 'setTargetMasses$java_util_ArrayList',  function (masses) {
this.targetMasses.clear$();
this.targetMasses.addAll$java_util_Collection(masses);
p$1.refreshGUI.apply(this, []);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.choices=Clazz.new_([Clazz.new_($I$(4,1).c$$I$I$I$I,[4, 1, 0, 0])],$I$(2,1).c$$java_awt_LayoutManager);
this.params=Clazz.new_([Clazz.new_($I$(4,1).c$$I$I$I$I,[4, 1, 0, 0])],$I$(2,1).c$$java_awt_LayoutManager);
this.upper=Clazz.new_([Clazz.new_($I$(4,1).c$$I$I$I$I,[1, 2, 0, 0])],$I$(2,1).c$$java_awt_LayoutManager);
this.upper.add$java_awt_Component(this.choices);
this.upper.add$java_awt_Component(this.params);
contentPane.add$java_awt_Component$O(this.upper, "North");
this.choiceBorder=$I$(5).createTitledBorder$S("");
var empty=$I$(5).createEmptyBorder$I$I$I$I(3, 2, 3, 2);
this.choices.setBorder$javax_swing_border_Border($I$(5).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, this.choiceBorder));
this.paramsBorder=$I$(5).createTitledBorder$S("");
this.params.setBorder$javax_swing_border_Border($I$(5).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, this.paramsBorder));
var group=Clazz.new_($I$(6,1));
var chooser=((P$.MotionFilterDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MotionFilterDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].updating) return;
p$1.refreshParams$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], [e.getActionCommand$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].upper.revalidate$();
p$1.applyCurrent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], []);
p$1.refreshInfo.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], []);
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.MotionFilterDialog$1));
this.noneButton=p$1.makeRadio$javax_swing_ButtonGroup$javax_swing_Action$S.apply(this, [group, chooser, "none"]);
this.maButton=p$1.makeRadio$javax_swing_ButtonGroup$javax_swing_Action$S.apply(this, [group, chooser, "ma"]);
this.butterButton=p$1.makeRadio$javax_swing_ButtonGroup$javax_swing_Action$S.apply(this, [group, chooser, "butter"]);
this.sgButton=p$1.makeRadio$javax_swing_ButtonGroup$javax_swing_Action$S.apply(this, [group, chooser, "sg"]);
this.choices.add$java_awt_Component(this.noneButton);
this.choices.add$java_awt_Component(this.maButton);
this.choices.add$java_awt_Component(this.sgButton);
this.choices.add$java_awt_Component(this.butterButton);
this.maWindowSpinner=Clazz.new_([this, null, Clazz.new_($I$(9,1).c$$I$I$I$I,[5, 3, 99, 2])],$I$(8,1).c$$javax_swing_SpinnerNumberModel);
this.maWindowSpinner.addChangeListener$javax_swing_event_ChangeListener(p$1.applyOnChange.apply(this, []));
this.sgWindowSpinner=Clazz.new_([this, null, Clazz.new_($I$(9,1).c$$I$I$I$I,[7, 5, 99, 2])],$I$(8,1).c$$javax_swing_SpinnerNumberModel);
this.sgWindowSpinner.addChangeListener$javax_swing_event_ChangeListener(p$1.applyOnChange.apply(this, []));
this.sgPolySpinner=Clazz.new_([this, null, Clazz.new_($I$(9,1).c$$I$I$I$I,[2, 1, 6, 1])],$I$(8,1).c$$javax_swing_SpinnerNumberModel);
this.sgPolySpinner.addChangeListener$javax_swing_event_ChangeListener(p$1.applyOnChange.apply(this, []));
this.butterOrderSpinner=Clazz.new_([this, null, Clazz.new_($I$(9,1).c$$I$I$I$I,[4, 1, 8, 1])],$I$(8,1).c$$javax_swing_SpinnerNumberModel);
this.butterOrderSpinner.addChangeListener$javax_swing_event_ChangeListener(p$1.applyOnChange.apply(this, []));
this.butterCutoffSpinner=Clazz.new_([this, null, Clazz.new_($I$(9,1).c$$D$D$D$D,[6.0, 0.1, 1000.0, 0.5])],$I$(8,1).c$$javax_swing_SpinnerNumberModel);
this.butterCutoffSpinner.addChangeListener$javax_swing_event_ChangeListener(p$1.applyOnChange.apply(this, []));
this.butterRateLabel=Clazz.new_($I$(10,1).c$$S,["--"]);
this.rmsField=Clazz.new_($I$(11,1).c$$I$I,[0, 3]);
this.infoPane=Clazz.new_($I$(12,1));
this.infoPane.setEditable$Z(false);
this.infoPane.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(6, 8, 6, 8));
this.infoPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(((P$.MotionFilterDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MotionFilterDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(13).ACTIVATED ) {
$I$(14,"browse$S",[e.getURL$().toString()]);
} else if (e.getEventType$() === $I$(13).ENTERED ) {
this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].infoPane.setToolTipText$S(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].butterButton.isSelected$() ? e.getURL$().toString() : this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].sgButton.isSelected$() ? this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].urlSG : null);
} else if (e.getEventType$() === $I$(13).EXITED ) {
this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].infoPane.setToolTipText$S(null);
}});
})()
), Clazz.new_(P$.MotionFilterDialog$2.$init$,[this, null])));
var infoScroll=Clazz.new_($I$(15,1).c$$java_awt_Component,[this.infoPane]);
this.infoPane.setText$S($I$(16).getString$S("FilterDialog.SavitzkyGolay.Description"));
contentPane.add$java_awt_Component$O(infoScroll, "Center");
this.okButton=Clazz.new_($I$(17,1));
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(18,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.MotionFilterDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MotionFilterDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], [false]);
});
})()
), Clazz.new_(P$.MotionFilterDialog$3.$init$,[this, null])));
this.cancelButton=Clazz.new_($I$(17,1));
this.cancelButton.setForeground$java_awt_Color(Clazz.new_($I$(18,1).c$$I$I$I,[0, 0, 102]));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.MotionFilterDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MotionFilterDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.revert.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], [false]);
});
})()
), Clazz.new_(P$.MotionFilterDialog$4.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(2,1));
buttonbar.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
buttonbar.add$java_awt_Component(this.okButton);
buttonbar.add$java_awt_Component(this.cancelButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
p$1.refreshGUI.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'makeRadio$javax_swing_ButtonGroup$javax_swing_Action$S',  function (g, a, cmd) {
var b=Clazz.new_($I$(19,1));
b.setActionCommand$S(cmd);
b.addActionListener$java_awt_event_ActionListener(a);
g.add$javax_swing_AbstractButton(b);
return b;
}, p$1);

Clazz.newMeth(C$, 'getRMSReadout',  function () {
if (this.rmsReadout == null ) {
this.rmsReadout=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
var label=Clazz.new_([$I$(16).getString$S("FilterDialog.Readout.RMS")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
this.rmsLabel=Clazz.new_($I$(10,1));
box.add$java_awt_Component(this.rmsLabel);
this.rmsReadout.add$java_awt_Component$O(box, "Center");
}return this.rmsReadout;
}, p$1);

Clazz.newMeth(C$, 'getMovingAveragePanel',  function () {
var box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
var label=Clazz.new_([$I$(16).getString$S("FilterDialog.Param.Window")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
box.add$java_awt_Component(this.maWindowSpinner);
var p=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
p.add$java_awt_Component$O(box, "Center");
$I$(21).setFont$java_awt_Component(p);
return p;
}, p$1);

Clazz.newMeth(C$, 'getButterworthPanels',  function () {
var p1=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
var label=Clazz.new_([$I$(16).getString$S("FilterDialog.Param.Order")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
box.add$java_awt_Component(this.butterOrderSpinner);
p1.add$java_awt_Component$O(box, "Center");
var p2=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
label=Clazz.new_([$I$(16).getString$S("FilterDialog.Param.Cutoff")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
box.add$java_awt_Component(this.butterCutoffSpinner);
p2.add$java_awt_Component$O(box, "Center");
var p3=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
label=Clazz.new_([$I$(16).getString$S("FilterDialog.Param.SampleRate")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
box.add$java_awt_Component(this.butterRateLabel);
p3.add$java_awt_Component$O(box, "Center");
return Clazz.array($I$(2), -1, [p1, p2, p3]);
}, p$1);

Clazz.newMeth(C$, 'getSavitzkyGolayPanels',  function () {
var p1=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
var label=Clazz.new_([$I$(16).getString$S("FilterDialog.Param.Window")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
box.add$java_awt_Component(this.sgWindowSpinner);
p1.add$java_awt_Component$O(box, "Center");
$I$(21).setFont$java_awt_Component(p1);
var p2=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
box=$I$(20).createHorizontalBox$();
box.add$java_awt_Component($I$(20).createHorizontalGlue$());
label=Clazz.new_([$I$(16).getString$S("FilterDialog.Param.PolyOrder")],$I$(10,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 8));
box.add$java_awt_Component(label);
box.add$java_awt_Component(this.sgPolySpinner);
p2.add$java_awt_Component$O(box, "Center");
$I$(21).setFont$java_awt_Component(p2);
return Clazz.array($I$(2), -1, [p1, p2]);
}, p$1);

Clazz.newMeth(C$, 'applyOnChange',  function () {
return ((P$.MotionFilterDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "MotionFilterDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].updating) return;
p$1.applyCurrent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], []);
p$1.refreshInfo.apply(this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'], []);
});
})()
), Clazz.new_(P$.MotionFilterDialog$5.$init$,[this, null]));
}, p$1);

Clazz.newMeth(C$, 'estimateSampleRateHz',  function () {
try {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var player=panel.getPlayer$();
var meanMs=player.getMeanStepDuration$();
if (meanMs > 0 ) return 1000.0 / meanMs;
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"Exception")){
} else {
throw ignored;
}
}
return 30.0;
}, p$1);

Clazz.newMeth(C$, 'applyCurrent',  function () {
if (this.targetMasses.isEmpty$()) return;
var f=p$1.buildFilterFromUI.apply(this, []);
for (var m, $m = this.targetMasses.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
m.getFormatMap$();
m.setMotionFilter$org_opensourcephysics_cabrillo_tracker_MotionFilter(f == null  ? null : f.copy$());
this.rmsField.setValue$D(m.getRMSDev$());
this.rmsLabel.setText$S(this.rmsField.getText$());
}
}, p$1);

Clazz.newMeth(C$, 'buildFilterFromUI',  function () {
if (this.maButton.isSelected$()) {
var w=(this.maWindowSpinner.getValue$()).$c();
return Clazz.new_($I$(22,1).c$$I,[w]);
} else if (this.butterButton.isSelected$()) {
var order=(this.butterOrderSpinner.getValue$()).$c();
var cutoff=(this.butterCutoffSpinner.getValue$()).doubleValue$();
var fs=p$1.estimateSampleRateHz.apply(this, []);
return Clazz.new_($I$(23,1).c$$I$D$D,[order, cutoff, fs]);
} else if (this.sgButton.isSelected$()) {
var w=(this.sgWindowSpinner.getValue$()).$c();
var p=(this.sgPolySpinner.getValue$()).$c();
return Clazz.new_($I$(24,1).c$$I$I,[w, p]);
}return null;
}, p$1);

Clazz.newMeth(C$, 'refreshParams$S',  function (filterName) {
if (filterName == null ) filterName="none";
this.params.removeAll$();
switch (filterName) {
case "none":
this.params.add$java_awt_Component(Clazz.new_($I$(2,1)));
this.params.add$java_awt_Component(Clazz.new_($I$(2,1)));
this.params.add$java_awt_Component(Clazz.new_($I$(2,1)));
this.params.add$java_awt_Component(p$1.getRMSReadout.apply(this, []));
break;
case "ma":
this.params.add$java_awt_Component(p$1.getMovingAveragePanel.apply(this, []));
this.params.add$java_awt_Component(Clazz.new_($I$(2,1)));
this.params.add$java_awt_Component(Clazz.new_($I$(2,1)));
this.params.add$java_awt_Component(p$1.getRMSReadout.apply(this, []));
break;
case "butter":
var panels=p$1.getButterworthPanels.apply(this, []);
this.params.add$java_awt_Component(panels[0]);
this.params.add$java_awt_Component(panels[1]);
this.params.add$java_awt_Component(panels[2]);
this.params.add$java_awt_Component(p$1.getRMSReadout.apply(this, []));
break;
case "sg":
panels=p$1.getSavitzkyGolayPanels.apply(this, []);
this.params.add$java_awt_Component(panels[0]);
this.params.add$java_awt_Component(panels[1]);
this.params.add$java_awt_Component(Clazz.new_($I$(2,1)));
this.params.add$java_awt_Component(p$1.getRMSReadout.apply(this, []));
}
$I$(21,"setFonts$O$I",[this.params, $I$(21).getLevel$()]);
}, p$1);

Clazz.newMeth(C$, 'refreshGUI',  function () {
if (this.targetMasses.size$() == 0) return;
var title=$I$(16).getString$S("FilterDialog.Title.Text");
var source=$I$(25,"getTrack$I",[this.targetMasses.get$I(0).sourceID]);
this.setTitle$S(title + " \"" + source.getName$() + "\"" );
this.choiceBorder.setTitle$S($I$(16).getString$S("FilterDialog.TitledBorder.Choose") + ":");
this.paramsBorder.setTitle$S($I$(16).getString$S("FilterDialog.TitledBorder.Params") + ":");
this.okButton.setText$S($I$(16).getString$S("Dialog.Button.OK"));
this.cancelButton.setText$S($I$(16).getString$S("Dialog.Button.Cancel"));
this.noneButton.setText$S($I$(16).getString$S("FilterDialog.None.Name"));
this.maButton.setText$S($I$(16).getString$S("FilterDialog.MovingAverage.Name"));
this.butterButton.setText$S($I$(16).getString$S("FilterDialog.Butterworth.Name"));
this.sgButton.setText$S($I$(16).getString$S("FilterDialog.SavitzkyGolay.Name"));
if (this.butterRateLabel != null ) {
this.butterRateLabel.setText$S(String.format$S$OA("%.2f Hz", Clazz.array(java.lang.Object, -1, [Double.valueOf$D(p$1.estimateSampleRateHz.apply(this, []))])));
}}, p$1);

Clazz.newMeth(C$, 'refreshInfo',  function () {
this.infoPane.setContentType$S("text/html");
var fontSize=Math.round(Long.$fval(Math.round$D($I$(21).getFactor$() * this.htmlFontSize)));
var s="<html><body style='font-family: Arial; font-size: " + fontSize + "pt;'>" ;
if (this.noneButton.isSelected$()) {
s+=$I$(16).getString$S("FilterDialog.None.Description");
} else if (this.maButton.isSelected$()) {
s+=$I$(16).getString$S("FilterDialog.MovingAverage.Description");
} else if (this.butterButton.isSelected$()) {
s+=$I$(16).getString$S("FilterDialog.Butterworth.Description");
s+=" For more, see <a href='" + this.urlButterworth + "'>Wikipedia</a>" ;
s+=" or <a href='" + this.urlZeroPhase + "'>Zero-phase</a>" ;
} else if (this.sgButton.isSelected$()) {
s+=$I$(16).getString$S("FilterDialog.SavitzkyGolay.Description");
s+=" For more, see <a href='" + this.urlSG + "'>Wikipedia</a>" ;
}s+="</body></html>";
this.infoPane.setText$S(s);
}, p$1);

Clazz.newMeth(C$, 'initialize',  function () {
this.updating=true;
try {
var fpm=this.targetMasses.isEmpty$() ? null : this.targetMasses.get$I(0);
var current=fpm == null  ? null : fpm.getMotionFilter$();
this.prevFilter=current == null  ? null : current.copy$();
p$1.loadParamsForFilter$org_opensourcephysics_cabrillo_tracker_MotionFilter.apply(this, [current]);
if (fpm != null ) {
this.rmsField.setValue$D(fpm.getRMSDev$());
this.rmsLabel.setText$S(this.rmsField.getText$());
}} finally {
this.updating=false;
}
p$1.refreshInfo.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'loadParamsForFilter$org_opensourcephysics_cabrillo_tracker_MotionFilter',  function (f) {
if (f == null ) {
this.noneButton.setSelected$Z(true);
p$1.refreshParams$S.apply(this, ["none"]);
} else if (Clazz.instanceOf(f, "org.opensourcephysics.cabrillo.tracker.MovingAverageFilter")) {
var ma=f;
this.maWindowSpinner.setValue$O(Integer.valueOf$I(ma.getWindow$()));
this.maButton.setSelected$Z(true);
p$1.refreshParams$S.apply(this, ["ma"]);
} else if (Clazz.instanceOf(f, "org.opensourcephysics.cabrillo.tracker.ButterworthFilter")) {
var bw=f;
this.butterOrderSpinner.setValue$O(Integer.valueOf$I(bw.getOrder$()));
this.butterCutoffSpinner.setValue$O(Double.valueOf$D(bw.getCutoffHz$()));
if (this.butterRateLabel != null ) this.butterRateLabel.setText$S(String.format$S$OA("%.2f Hz", Clazz.array(java.lang.Object, -1, [Double.valueOf$D(bw.getSampleRateHz$())])));
this.butterButton.setSelected$Z(true);
p$1.refreshParams$S.apply(this, ["butter"]);
} else if (Clazz.instanceOf(f, "org.opensourcephysics.cabrillo.tracker.SavitzkyGolayFilter")) {
var sg=f;
this.sgWindowSpinner.setValue$O(Integer.valueOf$I(sg.getWindow$()));
this.sgPolySpinner.setValue$O(Integer.valueOf$I(sg.getPolyOrder$()));
this.sgButton.setSelected$Z(true);
p$1.refreshParams$S.apply(this, ["sg"]);
}}, p$1);

Clazz.newMeth(C$, 'revert',  function () {
for (var m, $m = this.targetMasses.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
m.setMotionFilter$org_opensourcephysics_cabrillo_tracker_MotionFilter(this.prevFilter == null  ? null : this.prevFilter.copy$());
}
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) p$1.initialize.apply(this, []);
if (this.getLocation$().x == 0) {
var dim=$I$(26).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(21).setFonts$O$I(this, level);
$I$(21).setFonts$O$I(this.maWindowSpinner, level);
$I$(21).setFonts$O$I(this.butterOrderSpinner, level);
$I$(21).setFonts$O$I(this.butterCutoffSpinner, level);
$I$(21).setFonts$O$I(this.butterRateLabel, level);
$I$(21).setFonts$O$I(this.sgWindowSpinner, level);
$I$(21).setFonts$O$I(this.sgPolySpinner, level);
$I$(21).setFonts$O$I(this.choiceBorder, level);
$I$(21).setFonts$O$I(this.paramsBorder, level);
var w=((320 * (1 + level * 0.35))|0);
var h=((140 * (1 + level * 0.35))|0);
this.infoPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(27,1).c$$I$I,[w, h]));
this.pack$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.panelID=null;
this.frame=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MotionFilterDialog, "MySpinner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JSpinner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerNumberModel',  function (model) {
;C$.superclazz.c$$javax_swing_SpinnerModel.apply(this,[model]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].maWindowSpinner ) return this.getMinimumSize$();
return this.b$['org.opensourcephysics.cabrillo.tracker.MotionFilterDialog'].maWindowSpinner.getMinimumSize$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
