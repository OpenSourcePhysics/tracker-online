(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'javax.swing.BorderFactory','java.awt.Color','org.opensourcephysics.cabrillo.tracker.deploy.TrackerJarFilter','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.deploy.TrackerStarter','java.io.File','org.opensourcephysics.cabrillo.tracker.Tracker','java.util.TreeSet','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.FontSizer','javax.swing.border.TitledBorder','javax.swing.JComboBox','javax.swing.DefaultComboBoxModel','org.opensourcephysics.cabrillo.tracker.Footprint',['org.opensourcephysics.display.OSPRuntime','.Version'],'javax.swing.JTabbedPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JButton','java.awt.GridLayout','javax.swing.JCheckBoxMenuItem','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.Box','java.util.Locale','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.JCheckBox','javax.swing.AbstractAction','org.opensourcephysics.cabrillo.tracker.PrefsDialog','org.opensourcephysics.controls.XML','java.awt.event.MouseAdapter','javax.swing.JLabel','org.opensourcephysics.media.core.IntegerField','java.awt.event.FocusAdapter','java.util.ArrayList','javax.swing.JSpinner','javax.swing.SpinnerNumberModel',['javax.swing.JSpinner','.NumberEditor'],'javax.swing.JTextField','java.awt.event.KeyAdapter','org.opensourcephysics.cabrillo.tracker.TButton','org.opensourcephysics.media.mov.MovieFactory','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.cabrillo.tracker.TFrame',['org.opensourcephysics.cabrillo.tracker.PrefsDialog','.FootprintRenderer'],'org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.CircleFootprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','org.opensourcephysics.tools.ResourceLoader','java.awt.Desktop','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.controls.OSPLog','javax.swing.JOptionPane','org.opensourcephysics.tools.JREFinder','Thread','javax.swing.SwingUtilities','javax.swing.JFileChooser','javax.swing.filechooser.FileFilter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrefsDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['FootprintRenderer',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.memorySize=$I$(7).requestedMemorySize;
this.prevEnabled=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['Z',['relaunching','refreshing','prevHints','prevRadians','prevFastXuggle','prevCenterCalibrationStick','prevWarnVariableDuration','prevWarnNoVideoEngine','prevWarnXuggleError','prevWarnXuggleVersion','prevShowGaps','prevMarkAtCurrentFrame','prevClearCacheOnExit','prevUse32BitVM','prevWarnCopyFailed','prevZoomMouseWheel','prevAutofill'],'I',['memorySize','prevMemory','prevRecentCount','prevUpgradeInterval','prevFontLevel','prevFontLevelPlus','prevTrailLengthIndex'],'S',['prevLookFeel','prevLocaleName','prevJRE','prevTrackerJar','prevEngine','prevDecimalSeparator','prevPointmassFootprint'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','okButton','javax.swing.JButton','+cancelButton','+allButton','+noneButton','+applyButton','+saveButton','+relaunchButton','+clearRecentButton','+checkForUpgradeButton','+clearHostButton','+browseCacheButton','+clearCacheButton','+setCacheButton','+setRunButton','cacheField','javax.swing.JTextField','+runField','checkPanel','javax.swing.JPanel','+mainButtonBar','tabbedPane','javax.swing.JTabbedPane','configPanel','javax.swing.JPanel','+runtimePanel','+videoPanel','+generalPanel','+actionsPanel','+displayPanel','checkPanelBorder','javax.swing.border.TitledBorder','+lfSubPanelBorder','+langSubPanelBorder','+hintsSubPanelBorder','+unitsSubPanelBorder','+versionSubPanelBorder','+jreSubPanelBorder','+memorySubPanelBorder','+runSubPanelBorder','+videoTypeSubPanelBorder','+xuggleSpeedSubPanelBorder','+warningsSubPanelBorder','+recentSubPanelBorder','+cacheSubPanelBorder','+logLevelSubPanelBorder','+upgradeSubPanelBorder','+fontSubPanelBorder','+resetToStep0SubPanelBorder','+decimalSeparatorBorder','+mouseWheelSubPanelBorder','+calibrationStickSubPanelBorder','+dataGapSubPanelBorder','+trailLengthSubPanelBorder','+pointmassFootprintSubPanelBorder','memoryField','org.opensourcephysics.media.core.IntegerField','memoryLabel','javax.swing.JLabel','+recentSizeLabel','+lookFeelLabel','+cacheLabel','+versionLabel','+runLabel','defaultMemoryCheckbox','javax.swing.JCheckBox','+hintsCheckbox','+vidWarningCheckbox','+showGapsCheckbox','+xuggleErrorCheckbox','+variableDurationCheckBox','+resetToStep0Checkbox','+autofillCheckbox','+skippedStepsCheckbox','recentSizeSpinner','javax.swing.JSpinner','+runSpinner','lookFeelDropdown','javax.swing.JComboBox','+languageDropdown','+jreDropdown','+trailLengthDropdown','+checkForUpgradeDropdown','+versionDropdown','+logLevelDropdown','+fontSizeDropdown','+footprintDropdown','vm32Button','javax.swing.JRadioButton','+vm64Button','+movieEngineButton','+noEngineButton','+radiansButton','+degreesButton','+scrubButton','+zoomButton','+markStickEndsButton','+centerStickButton','+xuggleFastButton','+xuggleSlowButton','+defaultDecimalButton','+periodDecimalButton','+commaDecimalButton','trackerVersions','org.opensourcephysics.display.OSPRuntime.Version[]','prevEnabled','java.util.Set','prevCache','java.io.File','prevExecutables','String[]','prevLogLevel','java.util.logging.Level']]
,['Z',['webStartWarningShown'],'S',['userHome','javaHome'],'O',['MEDIUM_RED','java.awt.Color','trackerJarFilter','java.io.FilenameFilter','codeBaseDir','java.io.File']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame',  function (panel, frame) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel == null  ? null : panel.getTFrame$(), false]);C$.$init$.apply(this);
this.panelID=panel == null  ? null : panel.getID$();
this.frame=frame;
this.setTitle$S($I$(9).getString$S("ConfigInspector.Title"));
p$1.findTrackerJars.apply(this, []);
p$1.createGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (vis) {
p$1.savePrevious.apply(this, []);
p$1.findTrackerJars.apply(this, []);
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(10).setFonts$O$I(this, level);
var borders=Clazz.array($I$(11), -1, [this.checkPanelBorder, this.lfSubPanelBorder, this.langSubPanelBorder, this.hintsSubPanelBorder, this.unitsSubPanelBorder, this.versionSubPanelBorder, this.jreSubPanelBorder, this.memorySubPanelBorder, this.runSubPanelBorder, this.videoTypeSubPanelBorder, this.xuggleSpeedSubPanelBorder, this.warningsSubPanelBorder, this.recentSubPanelBorder, this.cacheSubPanelBorder, this.logLevelSubPanelBorder, this.upgradeSubPanelBorder, this.fontSubPanelBorder, this.resetToStep0SubPanelBorder, this.decimalSeparatorBorder, this.mouseWheelSubPanelBorder, this.calibrationStickSubPanelBorder, this.dataGapSubPanelBorder, this.trailLengthSubPanelBorder, this.pointmassFootprintSubPanelBorder]);
$I$(10).setFonts$O$I(borders, level);
var dropdowns=Clazz.array($I$(12), -1, [this.lookFeelDropdown, this.languageDropdown, this.fontSizeDropdown, this.jreDropdown, this.checkForUpgradeDropdown, this.versionDropdown, this.logLevelDropdown]);
for (var next, $next = 0, $$next = dropdowns; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next == null ) continue;
var n=next.getSelectedIndex$();
var items=Clazz.array(String, [next.getItemCount$()]);
for (var i=0; i < items.length; i++) {
items[i]=next.getItemAt$I(i);
}
var model=Clazz.new_($I$(13,1).c$$OA,[items]);
next.setModel$javax_swing_ComboBoxModel(model);
next.setSelectedItem$O(Integer.valueOf$I(n));
}
if (this.footprintDropdown != null ) {
var n=this.footprintDropdown.getSelectedIndex$();
var items=Clazz.array($I$(14), [this.footprintDropdown.getItemCount$()]);
for (var i=0; i < items.length; i++) {
items[i]=this.footprintDropdown.getItemAt$I(i);
}
var model=Clazz.new_($I$(13,1).c$$OA,[items]);
this.footprintDropdown.setModel$javax_swing_ComboBoxModel(model);
this.footprintDropdown.setSelectedItem$O(Integer.valueOf$I(n));
}});

Clazz.newMeth(C$, 'findTrackerJars',  function () {
this.trackerVersions=Clazz.array($I$(15), -1, [Clazz.new_($I$(15,1).c$$S,["0"])]);
if ($I$(7).trackerHome == null  || C$.codeBaseDir == null  ) {
return;
}var jarHome=$I$(4).isMac$() ? C$.codeBaseDir.getAbsolutePath$() : $I$(7).trackerHome;
var dir=Clazz.new_($I$(6,1).c$$S,[jarHome]);
var fileNames=dir.list$java_io_FilenameFilter(C$.trackerJarFilter);
if (fileNames != null  && fileNames.length > 0 ) {
var versions=Clazz.new_($I$(8,1));
for (var i=0; i < fileNames.length; i++) {
if ("tracker.jar".equals$O(fileNames[i].toLowerCase$())) {
versions.add$O(Clazz.new_($I$(15,1).c$$S,["0"]));
} else {
versions.add$O(Clazz.new_([fileNames[i].substring$I$I(8, fileNames[i].length$() - 4)],$I$(15,1).c$$S));
}}
this.trackerVersions=versions.toArray$OA(Clazz.array($I$(15), [versions.size$()]));
}}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.tabbedPane=Clazz.new_($I$(16,1));
var contentPane=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
this.okButton=Clazz.new_($I$(19,1));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.applyPrefs.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [false]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame != null ) this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.refresh$();
});
})()
), Clazz.new_(P$.PrefsDialog$1.$init$,[this, null])));
this.cancelButton=Clazz.new_($I$(19,1));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.revert.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [false]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame != null ) this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.refresh$();
});
})()
), Clazz.new_(P$.PrefsDialog$2.$init$,[this, null])));
this.relaunchButton=Clazz.new_($I$(19,1));
this.relaunchButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.applyPrefs.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.relaunchCurrentTabs$();
});
})()
), Clazz.new_(P$.PrefsDialog$3.$init$,[this, null])));
var color=$I$(2).WHITE;
if (!$I$(4).isJS) {
this.configPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
var n=1 + ($I$(7).getFullConfig$().size$()/2|0);
this.checkPanel=Clazz.new_([Clazz.new_($I$(20,1).c$$I$I,[n, 2])],$I$(17,1).c$$java_awt_LayoutManager);
this.checkPanel.setBackground$java_awt_Color(color);
this.checkPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("ConfigInspector.Border.Title")]);
this.checkPanel.setBorder$javax_swing_border_Border(this.checkPanelBorder);
var it=$I$(7).getFullConfig$().iterator$();
while (it.hasNext$()){
var item=it.next$();
var checkbox=Clazz.new_($I$(21,1).c$$S,[item]);
checkbox.setOpaque$Z(false);
this.checkPanel.add$java_awt_Component(checkbox);
}
var scroller=Clazz.new_($I$(22,1).c$$java_awt_Component,[this.checkPanel]);
scroller.getVerticalScrollBar$().setUnitIncrement$I(16);
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(23,1).c$$I$I,[450, 200]));
this.configPanel.add$java_awt_Component$O(scroller, "Center");
this.applyButton=Clazz.new_($I$(19,1));
this.applyButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.updateConfig.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.refresh$();
});
})()
), Clazz.new_(P$.PrefsDialog$4.$init$,[this, null])));
this.allButton=Clazz.new_($I$(19,1));
this.allButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var checkboxes=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].checkPanel.getComponents$();
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
checkbox.setSelected$Z(true);
}
});
})()
), Clazz.new_(P$.PrefsDialog$5.$init$,[this, null])));
this.noneButton=Clazz.new_($I$(19,1));
this.noneButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var checkboxes=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].checkPanel.getComponents$();
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
checkbox.setSelected$Z(false);
}
});
})()
), Clazz.new_(P$.PrefsDialog$6.$init$,[this, null])));
this.saveButton=Clazz.new_($I$(19,1));
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.saveConfigAsDefault.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
});
})()
), Clazz.new_(P$.PrefsDialog$7.$init$,[this, null])));
var configButtonBar=Clazz.new_($I$(17,1));
configButtonBar.add$java_awt_Component(this.allButton);
configButtonBar.add$java_awt_Component(this.noneButton);
configButtonBar.add$java_awt_Component(this.applyButton);
configButtonBar.add$java_awt_Component(this.saveButton);
this.configPanel.add$java_awt_Component$O(configButtonBar, "North");
}var etched=$I$(1).createEtchedBorder$();
this.displayPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
var box=$I$(24).createVerticalBox$();
this.displayPanel.add$java_awt_Component$O(box, "Center");
var horz=$I$(24).createHorizontalBox$();
box.add$java_awt_Component(horz);
if (!$I$(4).isJS) {
var langSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(langSubPanel);
langSubPanel.setBackground$java_awt_Color(color);
this.langSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Language.BorderTitle")]);
langSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.langSubPanelBorder));
this.languageDropdown=Clazz.new_($I$(12,1));
this.languageDropdown.addItem$O($I$(9).getString$S("PrefsDialog.Language.Default"));
var index=0;
var selectedIndex=0;
for (var next, $next = 0, $$next = $I$(7).getLocales$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
++index;
var s=$I$(4).getDisplayLanguage$java_util_Locale(next);
if (next.getLanguage$().equals$O("pt")) {
s+=" (" + next.getCountry$() + ")" ;
}this.languageDropdown.addItem$O(s);
if (next.equals$O($I$(25).getDefault$()) && next.toString().equals$O($I$(7).preferredLocale) ) {
selectedIndex=index;
}}
this.languageDropdown.setSelectedIndex$I(selectedIndex);
this.languageDropdown.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var index=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].languageDropdown.getSelectedIndex$();
if (index == 0) $I$(7).setPreferredLocale$S(null);
 else {
$I$(7,"setPreferredLocale$S",[$I$(7).getLocales$()[index - 1].toString()]);
}});
})()
), Clazz.new_(P$.PrefsDialog$8.$init$,[this, null])));
langSubPanel.add$java_awt_Component(this.languageDropdown);
var fontSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(fontSubPanel);
fontSubPanel.setBackground$java_awt_Color(color);
this.fontSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.FontSize.BorderTitle")]);
fontSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.fontSubPanelBorder));
this.fontSizeDropdown=Clazz.new_($I$(12,1));
var defaultLevel=$I$(9).getString$S("TMenuBar.MenuItem.DefaultFontSize");
this.fontSizeDropdown.addItem$O(defaultLevel);
var preferredLevel=$I$(7).preferredFontLevel + $I$(7).preferredFontLevelPlus;
var maxLevel=Math.max(preferredLevel, $I$(7).maxFontLevel);
for (var i=1; i <= maxLevel; i++) {
var s="+" + i;
this.fontSizeDropdown.addItem$O(s);
}
this.fontSizeDropdown.setSelectedIndex$I(preferredLevel);
this.fontSizeDropdown.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var preferredLevel=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].fontSizeDropdown.getSelectedIndex$();
$I$(7).preferredFontLevel=Math.min(preferredLevel, 3);
$I$(7).preferredFontLevelPlus=preferredLevel - $I$(7).preferredFontLevel;
});
})()
), Clazz.new_(P$.PrefsDialog$9.$init$,[this, null])));
fontSubPanel.add$java_awt_Component(this.fontSizeDropdown);
}horz=$I$(24).createHorizontalBox$();
box.add$java_awt_Component(horz);
var unitsSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(unitsSubPanel);
unitsSubPanel.setBackground$java_awt_Color(color);
this.unitsSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("TMenuBar.Menu.AngleUnits")]);
unitsSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.unitsSubPanelBorder));
var buttonGroup=Clazz.new_($I$(26,1));
this.radiansButton=Clazz.new_($I$(27,1));
this.radiansButton.setOpaque$Z(false);
this.radiansButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.radiansButton.setSelected$Z($I$(7).isRadians);
buttonGroup.add$javax_swing_AbstractButton(this.radiansButton);
this.degreesButton=Clazz.new_($I$(27,1));
this.degreesButton.setOpaque$Z(false);
this.degreesButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.degreesButton.setSelected$Z(!$I$(7).isRadians);
buttonGroup.add$javax_swing_AbstractButton(this.degreesButton);
unitsSubPanel.add$java_awt_Component(this.radiansButton);
unitsSubPanel.add$java_awt_Component(this.degreesButton);
if (!$I$(4).isJS) {
this.hintsCheckbox=Clazz.new_($I$(28,1));
this.hintsCheckbox.setOpaque$Z(false);
this.hintsCheckbox.setSelected$Z($I$(7).showHintsByDefault);
this.hintsCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).showHintsByDefault=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].hintsCheckbox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$10.$init$,[this, null])));
var hintsSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(hintsSubPanel);
hintsSubPanel.setBackground$java_awt_Color(color);
this.hintsSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Hints.BorderTitle")]);
hintsSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.hintsSubPanelBorder));
hintsSubPanel.add$java_awt_Component(this.hintsCheckbox);
}horz=$I$(24).createHorizontalBox$();
box.add$java_awt_Component(horz);
var decimalSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(decimalSubPanel);
decimalSubPanel.setBackground$java_awt_Color(color);
this.decimalSeparatorBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("NumberFormatSetter.TitledBorder.DecimalSeparator.Text")]);
decimalSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.decimalSeparatorBorder));
var decimalSeparatorAction=((P$.PrefsDialog$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).preferredDecimalSeparator=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].periodDecimalButton.isSelected$() ? "." : this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].commaDecimalButton.isSelected$() ? "," : null;
$I$(4,"setPreferredDecimalSeparator$S",[$I$(7).preferredDecimalSeparator]);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.PrefsDialog$11));
this.defaultDecimalButton=Clazz.new_($I$(27,1));
this.defaultDecimalButton.setOpaque$Z(false);
this.defaultDecimalButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.defaultDecimalButton.addActionListener$java_awt_event_ActionListener(decimalSeparatorAction);
this.periodDecimalButton=Clazz.new_($I$(27,1));
this.periodDecimalButton.setOpaque$Z(false);
this.periodDecimalButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.periodDecimalButton.addActionListener$java_awt_event_ActionListener(decimalSeparatorAction);
this.commaDecimalButton=Clazz.new_($I$(27,1));
this.commaDecimalButton.setOpaque$Z(false);
this.commaDecimalButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.commaDecimalButton.addActionListener$java_awt_event_ActionListener(decimalSeparatorAction);
var group=Clazz.new_($I$(26,1));
group.add$javax_swing_AbstractButton(this.defaultDecimalButton);
group.add$javax_swing_AbstractButton(this.periodDecimalButton);
group.add$javax_swing_AbstractButton(this.commaDecimalButton);
decimalSubPanel.add$java_awt_Component(this.defaultDecimalButton);
decimalSubPanel.add$java_awt_Component(this.periodDecimalButton);
decimalSubPanel.add$java_awt_Component(this.commaDecimalButton);
var buttonBorder=$I$(1).createEtchedBorder$();
var space=$I$(1).createEmptyBorder$I$I$I$I(2, 2, 2, 2);
buttonBorder=$I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(buttonBorder, space);
var openFileIcon=$I$(7).getResourceIcon$S$Z("open.gif", true);
if (!$I$(4).isJS) {
this.runtimePanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
box=$I$(24).createVerticalBox$();
this.runtimePanel.add$java_awt_Component$O(box, "Center");
var versionSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(versionSubPanel);
versionSubPanel.setBackground$java_awt_Color(color);
this.versionSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Version.BorderTitle")]);
versionSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.versionSubPanelBorder));
var preferred=0;
this.versionDropdown=Clazz.new_($I$(12,1));
for (var i=0; i < this.trackerVersions.length; i++) {
var next=this.trackerVersions[i].toString();
if (next.equals$O("0")) {
var s=$I$(9).getString$S("PrefsDialog.Version.Default");
this.versionDropdown.addItem$O(s);
} else this.versionDropdown.addItem$O(next);
if ($I$(7).preferredTrackerJar != null  && $I$(7).preferredTrackerJar.indexOf$S("tracker-") > -1  && $I$(7).preferredTrackerJar.indexOf$S(next) > -1 ) {
preferred=i;
}}
this.versionDropdown.setSelectedIndex$I(preferred);
this.versionDropdown.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var ver=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].versionDropdown.getSelectedItem$();
var jar=null;
if (ver != null  && !$I$(9).getString$S("PrefsDialog.Version.Default").equals$O(ver) ) {
jar="tracker-" + ver + ".jar" ;
}if (jar == null  && $I$(7).preferredTrackerJar != null  ) {
$I$(7).preferredTrackerJar=null;
} else if (jar != null  && !jar.equals$O($I$(7).preferredTrackerJar) ) {
$I$(7).preferredTrackerJar=jar;
}var jarName=jar == null  ? "tracker.jar" : jar;
var jarHome=$I$(4).isMac$() ? $I$(30).codeBaseDir.getAbsolutePath$() : $I$(7).trackerHome;
var jarPath=$I$(31,"forwardSlash$S",[Clazz.new_($I$(6,1).c$$S$S,[jarHome, jarName]).getPath$()]);
var usesServer=$I$(5).usesXuggleServer$S(jarPath);
var bitness=usesServer ? 64 : $I$(4).isWindows$() ? 32 : 64;
p$1.refreshJREDropdown$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [bitness]);
});
})()
), Clazz.new_(P$.PrefsDialog$12.$init$,[this, null])));
versionSubPanel.add$java_awt_Component(this.versionDropdown);
var jreSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(jreSubPanel);
jreSubPanel.setBackground$java_awt_Color(color);
this.jreSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.JRE.BorderTitle")]);
jreSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.jreSubPanelBorder));
var jreNorthPanel=Clazz.new_($I$(17,1));
jreNorthPanel.setBackground$java_awt_Color(color);
var jreSouthPanel=Clazz.new_($I$(17,1));
jreSouthPanel.setBackground$java_awt_Color(color);
var vmBitness=$I$(4).getVMBitness$();
this.vm32Button=Clazz.new_($I$(27,1));
this.vm32Button.setOpaque$Z(false);
this.vm32Button.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.vm32Button.setSelected$Z(vmBitness == 32);
this.vm32Button.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].vm32Button.isSelected$()) return;
if ($I$(4).isWindows$()) {
p$1.refreshJREDropdown$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [32]);
}});
})()
), Clazz.new_(P$.PrefsDialog$13.$init$,[this, null])));
jreNorthPanel.add$java_awt_Component(this.vm32Button);
this.vm64Button=Clazz.new_($I$(27,1));
this.vm64Button.setOpaque$Z(false);
this.vm64Button.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 10, 2, 0));
this.vm64Button.setSelected$Z(vmBitness == 64);
this.vm64Button.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].vm64Button.isSelected$()) return;
p$1.refreshJREDropdown$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [64]);
});
})()
), Clazz.new_(P$.PrefsDialog$14.$init$,[this, null])));
this.jreDropdown=Clazz.new_($I$(12,1));
jreSubPanel.add$java_awt_Component(this.jreDropdown);
p$1.refreshJREDropdown$I.apply(this, [vmBitness]);
var memorySubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(memorySubPanel);
memorySubPanel.setBackground$java_awt_Color(color);
this.memorySubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Memory.BorderTitle")]);
memorySubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.memorySubPanelBorder));
memorySubPanel.addMouseListener$java_awt_event_MouseListener(((P$.PrefsDialog$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['java.awt.Component'].requestFocusInWindow$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_($I$(32,1),[this, null],P$.PrefsDialog$15)));
this.defaultMemoryCheckbox=Clazz.new_($I$(28,1));
this.defaultMemoryCheckbox.setOpaque$Z(false);
this.memoryLabel=Clazz.new_($I$(33,1).c$$S,["MB"]);
this.memoryField=Clazz.new_($I$(34,1).c$$I,[4]);
this.memoryField.setMinValue$D(64);
this.memoryField.addFocusListener$java_awt_event_FocusListener(((P$.PrefsDialog$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memorySize != this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.getIntValue$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memorySize=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.getIntValue$();
}});
})()
), Clazz.new_($I$(35,1),[this, null],P$.PrefsDialog$16)));
this.memoryField.addMouseListener$java_awt_event_MouseListener(((P$.PrefsDialog$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].defaultMemoryCheckbox.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].defaultMemoryCheckbox.doClick$I(0);
}});
})()
), Clazz.new_($I$(32,1),[this, null],P$.PrefsDialog$17)));
this.memoryField.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memorySize=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.getIntValue$();
});
})()
), Clazz.new_(P$.PrefsDialog$18.$init$,[this, null])));
this.defaultMemoryCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var selected=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].defaultMemoryCheckbox.isSelected$();
if (selected) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.setEnabled$Z(false);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryLabel.setEnabled$Z(false);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.setText$S(null);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.setEnabled$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryLabel.setEnabled$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memorySize);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.requestFocusInWindow$();
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].memoryField.selectAll$();
}});
})()
), Clazz.new_(P$.PrefsDialog$19.$init$,[this, null])));
if ($I$(7).preferredMemorySize > -1) this.memoryField.setValue$D($I$(7).preferredMemorySize);
 else {
this.defaultMemoryCheckbox.setSelected$Z(true);
this.memoryField.setEnabled$Z(false);
this.memoryLabel.setEnabled$Z(false);
this.memoryField.setText$S(null);
}memorySubPanel.add$java_awt_Component(this.defaultMemoryCheckbox);
memorySubPanel.add$java_awt_Component($I$(24,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(23,1).c$$I$I,[40, 1])]));
memorySubPanel.add$java_awt_Component(this.memoryField);
memorySubPanel.add$java_awt_Component(this.memoryLabel);
var runSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(runSubPanel);
runSubPanel.setBackground$java_awt_Color(color);
this.runSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Run.BorderTitle")]);
runSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.runSubPanelBorder));
var setRunAction=((P$.PrefsDialog$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var path=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runField.getText$();
var n=(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runSpinner.getValue$()).$c();
var paths=Clazz.new_($I$(36,1));
if ($I$(7).prelaunchExecutables.length > n) {
if (path.equals$O($I$(7).prelaunchExecutables[n])) return;
if ("".equals$O(path)) {
$I$(7).prelaunchExecutables[n]=path;
path=null;
} else {
$I$(7).prelaunchExecutables[n]=path;
path=null;
}}for (var next, $next = 0, $$next = $I$(7).prelaunchExecutables; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next != null  && !"".equals$O(next)  && !paths.contains$O(next) ) paths.add$O(next);
}
if (path != null  && !"".equals$O(path)  && !paths.contains$O(path) ) paths.add$O(path);
$I$(7).prelaunchExecutables=paths.toArray$OA(Clazz.array(String, [0]));
for (var i=0; i < $I$(7).prelaunchExecutables.length; i++) {
if ($I$(7).prelaunchExecutables[i].equals$O(path)) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runSpinner.setValue$O(Integer.valueOf$I(i));
break;
}}
p$1.refreshTextFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.PrefsDialog$20));
this.runSpinner=Clazz.new_([Clazz.new_($I$(38,1).c$$I$I$I$I,[0, 0, 6, 1])],$I$(37,1).c$$javax_swing_SpinnerModel);
var editor=Clazz.new_($I$(39,1).c$$javax_swing_JSpinner,[this.runSpinner]);
this.runSpinner.setEditor$javax_swing_JComponent(editor);
this.runSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.PrefsDialog$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runField.getBackground$() === $I$(2).yellow ) {
this.$finals$.setRunAction.actionPerformed$java_awt_event_ActionEvent(null);
} else {
p$1.refreshTextFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
}});
})()
), Clazz.new_(P$.PrefsDialog$21.$init$,[this, {setRunAction:setRunAction}])));
runSubPanel.add$java_awt_Component(this.runSpinner);
this.runField=Clazz.new_($I$(40,1).c$$I,[27]);
runSubPanel.add$java_awt_Component(this.runField);
this.runField.addKeyListener$java_awt_event_KeyListener(((P$.PrefsDialog$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runField.setBackground$java_awt_Color($I$(2).yellow);
});
})()
), Clazz.new_($I$(41,1),[this, null],P$.PrefsDialog$22)));
this.runField.addFocusListener$java_awt_event_FocusListener(((P$.PrefsDialog$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runField.getBackground$() === $I$(2).yellow ) this.$finals$.setRunAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(35,1),[this, {setRunAction:setRunAction}],P$.PrefsDialog$23)));
this.runField.addActionListener$java_awt_event_ActionListener(setRunAction);
this.setRunButton=Clazz.new_($I$(42,1).c$$javax_swing_Icon,[openFileIcon]);
this.setRunButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var result=1;
var f=$I$(7).trackerHome == null  ? Clazz.new_($I$(6,1).c$$S,["."]) : Clazz.new_([$I$(7).trackerHome],$I$(6,1).c$$S);
var chooser=$I$(30).getFileChooser$java_io_File$Z(f, false);
chooser.setDialogTitle$S($I$(9).getString$S("PrefsDialog.FileChooser.Title.Run"));
result=chooser.showOpenDialog$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog']);
if (result == 0) {
var file=chooser.getSelectedFile$();
if (file != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runField.setText$S(file.getPath$());
this.$finals$.setRunAction.actionPerformed$java_awt_event_ActionEvent(null);
}}});
})()
), Clazz.new_(P$.PrefsDialog$24.$init$,[this, {setRunAction:setRunAction}])));
this.setRunButton.setBorder$javax_swing_border_Border(buttonBorder);
this.setRunButton.setContentAreaFilled$Z(false);
runSubPanel.add$java_awt_Component(this.setRunButton);
}this.videoPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
box=$I$(24).createVerticalBox$();
this.videoPanel.add$java_awt_Component$O(box, "Center");
var movieEngineInstalled=$I$(43).hasVideoEngine$();
var mouseWheelSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(mouseWheelSubPanel);
mouseWheelSubPanel.setBackground$java_awt_Color(color);
this.mouseWheelSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Mousewheel.BorderTitle")]);
mouseWheelSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.mouseWheelSubPanelBorder));
this.zoomButton=Clazz.new_($I$(27,1));
this.zoomButton.setOpaque$Z(false);
this.zoomButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
buttonGroup=Clazz.new_($I$(26,1));
buttonGroup.add$javax_swing_AbstractButton(this.zoomButton);
this.scrubButton=Clazz.new_($I$(27,1));
this.scrubButton.setOpaque$Z(false);
this.scrubButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
buttonGroup.add$javax_swing_AbstractButton(this.scrubButton);
if ($I$(7).scrubMouseWheel) this.scrubButton.setSelected$Z(true);
 else this.zoomButton.setSelected$Z(true);
mouseWheelSubPanel.add$java_awt_Component(this.zoomButton);
mouseWheelSubPanel.add$java_awt_Component(this.scrubButton);
var mouseWheelAction=((P$.PrefsDialog$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).scrubMouseWheel=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].scrubButton.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$25.$init$,[this, null]));
this.zoomButton.addActionListener$java_awt_event_ActionListener(mouseWheelAction);
this.scrubButton.addActionListener$java_awt_event_ActionListener(mouseWheelAction);
this.movieEngineButton=Clazz.new_($I$(27,1));
this.movieEngineButton.setOpaque$Z(false);
this.movieEngineButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.movieEngineButton.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].xuggleFastButton.setEnabled$Z(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].movieEngineButton.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].xuggleSlowButton.setEnabled$Z(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].movieEngineButton.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].xuggleErrorCheckbox.setEnabled$Z(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].movieEngineButton.isSelected$());
});
})()
), Clazz.new_(P$.PrefsDialog$26.$init$,[this, null])));
this.movieEngineButton.setEnabled$Z(movieEngineInstalled);
this.noEngineButton=Clazz.new_($I$(27,1));
this.noEngineButton.setOpaque$Z(false);
this.noEngineButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 10, 2, 0));
this.noEngineButton.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].noEngineButton.isSelected$()) return;
});
})()
), Clazz.new_(P$.PrefsDialog$27.$init$,[this, null])));
if (!$I$(4).isJS) {
var xuggleSpeedSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(xuggleSpeedSubPanel);
xuggleSpeedSubPanel.setBackground$java_awt_Color(color);
this.xuggleSpeedSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Xuggle.Speed.BorderTitle")]);
if (!movieEngineInstalled) this.xuggleSpeedSubPanelBorder.setTitleColor$java_awt_Color($I$(44).getDisabledTextColor$());
xuggleSpeedSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.xuggleSpeedSubPanelBorder));
buttonGroup=Clazz.new_($I$(26,1));
this.xuggleFastButton=Clazz.new_($I$(27,1));
this.xuggleFastButton.setOpaque$Z(false);
this.xuggleFastButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
this.xuggleFastButton.setSelected$Z(movieEngineInstalled && $I$(7).isXuggleFast );
buttonGroup.add$javax_swing_AbstractButton(this.xuggleFastButton);
this.xuggleSlowButton=Clazz.new_($I$(27,1));
this.xuggleSlowButton.setOpaque$Z(false);
this.xuggleSlowButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 10, 2, 0));
this.xuggleSlowButton.setSelected$Z(movieEngineInstalled && !$I$(7).isXuggleFast );
buttonGroup.add$javax_swing_AbstractButton(this.xuggleSlowButton);
xuggleSpeedSubPanel.add$java_awt_Component(this.xuggleFastButton);
xuggleSpeedSubPanel.add$java_awt_Component(this.xuggleSlowButton);
}var warningsSubPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
box.add$java_awt_Component(warningsSubPanel);
warningsSubPanel.setBackground$java_awt_Color(color);
this.warningsSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.NoVideoWarning.BorderTitle")]);
warningsSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.warningsSubPanelBorder));
var warningsNorthPanel=Clazz.new_($I$(17,1));
warningsNorthPanel.setBackground$java_awt_Color(color);
warningsSubPanel.add$java_awt_Component$O(warningsNorthPanel, "North");
var warningsCenterPanel=Clazz.new_($I$(17,1));
warningsCenterPanel.setBackground$java_awt_Color(color);
var warningsSouthPanel=Clazz.new_($I$(17,1));
warningsSouthPanel.setBackground$java_awt_Color(color);
var centerSouthPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
centerSouthPanel.add$java_awt_Component$O(warningsCenterPanel, "North");
centerSouthPanel.add$java_awt_Component$O(warningsSouthPanel, "Center");
warningsSubPanel.add$java_awt_Component$O(centerSouthPanel, "Center");
if (!$I$(4).isJS) {
this.vidWarningCheckbox=Clazz.new_($I$(28,1));
this.vidWarningCheckbox.setOpaque$Z(false);
this.vidWarningCheckbox.setSelected$Z($I$(7).warnNoVideoEngine);
this.vidWarningCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).warnNoVideoEngine=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].vidWarningCheckbox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$28.$init$,[this, null])));
this.xuggleErrorCheckbox=Clazz.new_($I$(28,1));
this.xuggleErrorCheckbox.setOpaque$Z(false);
this.xuggleErrorCheckbox.setSelected$Z($I$(7).warnXuggleError);
this.xuggleErrorCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).warnXuggleError=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].xuggleErrorCheckbox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$29.$init$,[this, null])));
warningsNorthPanel.add$java_awt_Component(this.vidWarningCheckbox);
warningsCenterPanel.add$java_awt_Component(this.xuggleErrorCheckbox);
}this.variableDurationCheckBox=Clazz.new_($I$(28,1));
this.variableDurationCheckBox.setOpaque$Z(false);
this.variableDurationCheckBox.setSelected$Z($I$(7).warnVariableDuration);
this.variableDurationCheckBox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).warnVariableDuration=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].variableDurationCheckBox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$30.$init$,[this, null])));
warningsNorthPanel.add$java_awt_Component(this.variableDurationCheckBox);
this.actionsPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
box=$I$(24).createVerticalBox$();
this.actionsPanel.add$java_awt_Component$O(box, "Center");
horz=$I$(24).createHorizontalBox$();
box.add$java_awt_Component(horz);
var markingSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(markingSubPanel);
markingSubPanel.setBackground$java_awt_Color(color);
this.resetToStep0SubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Marking.BorderTitle")]);
markingSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.resetToStep0SubPanelBorder));
this.resetToStep0Checkbox=Clazz.new_($I$(28,1));
this.resetToStep0Checkbox.setOpaque$Z(false);
this.resetToStep0Checkbox.setSelected$Z(!$I$(7).markAtCurrentFrame);
this.resetToStep0Checkbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).markAtCurrentFrame=!this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].resetToStep0Checkbox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$31.$init$,[this, null])));
markingSubPanel.add$java_awt_Component(this.resetToStep0Checkbox);
var calibrationStickSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(calibrationStickSubPanel);
calibrationStickSubPanel.setBackground$java_awt_Color(color);
this.calibrationStickSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.CalibrationStick.BorderTitle")]);
calibrationStickSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.calibrationStickSubPanelBorder));
this.markStickEndsButton=Clazz.new_($I$(27,1));
this.markStickEndsButton.setOpaque$Z(false);
this.markStickEndsButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
buttonGroup=Clazz.new_($I$(26,1));
buttonGroup.add$javax_swing_AbstractButton(this.markStickEndsButton);
this.centerStickButton=Clazz.new_($I$(27,1));
this.centerStickButton.setOpaque$Z(false);
this.centerStickButton.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 0, 2, 10));
buttonGroup.add$javax_swing_AbstractButton(this.centerStickButton);
if ($I$(7).centerCalibrationStick) this.centerStickButton.setSelected$Z(true);
 else this.markStickEndsButton.setSelected$Z(true);
calibrationStickSubPanel.add$java_awt_Component(this.markStickEndsButton);
calibrationStickSubPanel.add$java_awt_Component(this.centerStickButton);
var calStickAction=((P$.PrefsDialog$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).centerCalibrationStick=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].centerStickButton.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$32.$init$,[this, null]));
this.markStickEndsButton.addActionListener$java_awt_event_ActionListener(calStickAction);
this.centerStickButton.addActionListener$java_awt_event_ActionListener(calStickAction);
var dataGapSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(dataGapSubPanel);
dataGapSubPanel.setBackground$java_awt_Color(color);
this.dataGapSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.DataGap.BorderTitle")]);
dataGapSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.dataGapSubPanelBorder));
this.showGapsCheckbox=Clazz.new_($I$(28,1));
this.showGapsCheckbox.setOpaque$Z(false);
this.showGapsCheckbox.setSelected$Z($I$(7).showGaps);
this.showGapsCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).showGaps=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].showGapsCheckbox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$33.$init$,[this, null])));
dataGapSubPanel.add$java_awt_Component(this.showGapsCheckbox);
this.autofillCheckbox=Clazz.new_($I$(28,1));
this.autofillCheckbox.setOpaque$Z(false);
this.autofillCheckbox.setSelected$Z($I$(7).enableAutofill);
this.autofillCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).enableAutofill=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].autofillCheckbox.isSelected$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].panelID != null ) {
$I$(45,"repaintT$java_awt_Component",[this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].panelID)]);
}});
})()
), Clazz.new_(P$.PrefsDialog$34.$init$,[this, null])));
dataGapSubPanel.add$java_awt_Component(this.autofillCheckbox);
this.skippedStepsCheckbox=Clazz.new_($I$(28,1));
this.skippedStepsCheckbox.setOpaque$Z(false);
this.skippedStepsCheckbox.setSelected$Z($I$(7).warnSkippedStep);
this.skippedStepsCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).warnSkippedStep=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].skippedStepsCheckbox.isSelected$();
});
})()
), Clazz.new_(P$.PrefsDialog$35.$init$,[this, null])));
dataGapSubPanel.add$java_awt_Component(this.skippedStepsCheckbox);
horz=$I$(24).createHorizontalBox$();
box.add$java_awt_Component(horz);
var footprintSubPanel=Clazz.new_($I$(17,1));
horz.add$java_awt_Component(footprintSubPanel);
footprintSubPanel.setBackground$java_awt_Color(color);
this.pointmassFootprintSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.PointMassFootprint.BorderTitle")]);
footprintSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.pointmassFootprintSubPanelBorder));
this.footprintDropdown=Clazz.new_($I$(12,1));
this.footprintDropdown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(46,1),[this, null]));
var footprints=Clazz.array($I$(14), [$I$(47).footprintNames.length]);
for (var i=0; i < footprints.length; i++) {
var name=$I$(47).footprintNames[i];
if (name.equals$O("CircleFootprint.Circle")) {
footprints[i]=$I$(48).getFootprint$S(name);
} else {
footprints[i]=$I$(49).getFootprint$S(name);
}}
for (var i=0; i < footprints.length; i++) {
this.footprintDropdown.addItem$O(footprints[i]);
}
footprintSubPanel.add$java_awt_Component(this.footprintDropdown);
var al=((P$.PrefsDialog$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].footprintDropdown.repaint$();
});
})()
), Clazz.new_(P$.PrefsDialog$36.$init$,[this, null]));
this.footprintDropdown.setAction$javax_swing_Action(((P$.PrefsDialog$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].refreshing) return;
var footprint=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].footprintDropdown.getSelectedItem$();
if (Clazz.instanceOf(footprint, "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
var cfp=footprint;
cfp.showProperties$org_opensourcephysics_cabrillo_tracker_TFrame$java_awt_event_ActionListener(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame, this.$finals$.al);
$I$(7).preferredPointMassFootprint=footprint.getName$() + "#" + cfp.getProperties$() ;
} else $I$(7).preferredPointMassFootprint=footprint.getName$();
});
})()
), Clazz.new_($I$(29,1),[this, {al:al}],P$.PrefsDialog$37)));
var trailLengthSubPanel=Clazz.new_($I$(17,1));
trailLengthSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.trailLengthSubPanelBorder));
horz.add$java_awt_Component(trailLengthSubPanel);
trailLengthSubPanel.setBackground$java_awt_Color(color);
this.trailLengthSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Trails.BorderTitle")]);
trailLengthSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.trailLengthSubPanelBorder));
this.trailLengthDropdown=Clazz.new_($I$(12,1));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.NoTrail"));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.ShortTrail"));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.LongTrail"));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.FullTrail"));
trailLengthSubPanel.add$java_awt_Component(this.trailLengthDropdown);
this.generalPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
box=$I$(24).createVerticalBox$();
this.generalPanel.add$java_awt_Component$O(box, "Center");
if (!$I$(4).isJS) {
var recentSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(recentSubPanel);
recentSubPanel.setBackground$java_awt_Color(color);
this.recentSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.RecentFiles.BorderTitle")]);
recentSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.recentSubPanelBorder));
this.clearRecentButton=Clazz.new_($I$(19,1));
this.clearRecentButton.setEnabled$Z(!$I$(7).recentFiles.isEmpty$());
this.clearRecentButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).recentFiles.clear$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].panelID != null ) this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].panelID), "PrefsDialog.clearRecent");
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].clearRecentButton.setEnabled$Z(false);
});
})()
), Clazz.new_(P$.PrefsDialog$38.$init$,[this, null])));
recentSubPanel.add$java_awt_Component(this.clearRecentButton);
var spinnerPanel=Clazz.new_($I$(17,1));
spinnerPanel.setOpaque$Z(false);
spinnerPanel.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(0, 20, 0, 0));
var model=Clazz.new_([$I$(7).recentFilesSize, 0, 12, 1],$I$(38,1).c$$I$I$I$I);
this.recentSizeSpinner=Clazz.new_($I$(37,1).c$$javax_swing_SpinnerModel,[model]);
var editor=Clazz.new_($I$(39,1).c$$javax_swing_JSpinner$S,[this.recentSizeSpinner, "0"]);
editor.getTextField$().setHorizontalAlignment$I(2);
this.recentSizeSpinner.setEditor$javax_swing_JComponent(editor);
spinnerPanel.add$java_awt_Component(this.recentSizeSpinner);
this.recentSizeLabel=Clazz.new_($I$(33,1));
spinnerPanel.add$java_awt_Component(this.recentSizeLabel);
recentSubPanel.add$java_awt_Component(spinnerPanel);
}if (!$I$(4).isJS) {
var cacheSubPanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_LayoutManager);
box.add$java_awt_Component(cacheSubPanel);
cacheSubPanel.setBackground$java_awt_Color(color);
this.cacheSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.CacheFiles.BorderTitle")]);
cacheSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.cacheSubPanelBorder));
var cacheNorthPanel=Clazz.new_($I$(17,1));
cacheNorthPanel.setBackground$java_awt_Color(color);
this.cacheLabel=Clazz.new_($I$(33,1));
cacheNorthPanel.add$java_awt_Component(this.cacheLabel);
this.cacheField=Clazz.new_($I$(40,1).c$$I,[27]);
cacheNorthPanel.add$java_awt_Component(this.cacheField);
this.cacheField.addKeyListener$java_awt_event_KeyListener(((P$.PrefsDialog$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].cacheField.setBackground$java_awt_Color($I$(2).yellow);
});
})()
), Clazz.new_($I$(41,1),[this, null],P$.PrefsDialog$39)));
this.cacheField.addFocusListener$java_awt_event_FocusListener(((P$.PrefsDialog$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].cacheField.getBackground$() === $I$(2).yellow ) this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].setCache$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [null]);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.PrefsDialog$40)));
this.cacheField.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PrefsDialog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].setCache$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [null]);
});
})()
), Clazz.new_(P$.PrefsDialog$lambda1.$init$,[this, null])));
this.browseCacheButton=Clazz.new_($I$(42,1).c$$javax_swing_Icon,[openFileIcon]);
this.browseCacheButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cache=$I$(50).getOSPCache$();
var desktop=$I$(51).getDesktop$();
try {
desktop.open$java_io_File(cache);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.PrefsDialog$41.$init$,[this, null])));
this.browseCacheButton.setBorder$javax_swing_border_Border(buttonBorder);
this.browseCacheButton.setContentAreaFilled$Z(false);
cacheNorthPanel.add$java_awt_Component(this.browseCacheButton);
cacheSubPanel.add$java_awt_Component$O(cacheNorthPanel, "North");
var cacheSouthPanel=Clazz.new_($I$(17,1));
cacheSouthPanel.setBackground$java_awt_Color(color);
this.clearHostButton=Clazz.new_($I$(19,1));
this.clearHostButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cache=$I$(50).getOSPCache$();
if (cache == null ) return;
var hosts=cache.listFiles$java_io_FileFilter($I$(50).OSP_CACHE_FILTER);
var popup=Clazz.new_($I$(52,1));
var clearAction=((P$.PrefsDialog$42$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$42$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var host, $host = 0, $$host = this.$finals$.hosts; $host<$$host.length&&((host=($$host[$host])),1);$host++) {
if (host.getAbsolutePath$().equals$O(e.getActionCommand$())) {
$I$(50).clearOSPCacheHost$java_io_File(host);
p$1.refreshTextFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
return;
}}
});
})()
), Clazz.new_(P$.PrefsDialog$42$1.$init$,[this, {hosts:hosts}]));
for (var next, $next = 0, $$next = hosts; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var host=next.getName$().substring$I(4).replace$C$C("_", ".");
var bytes=p$1.getFileSize$java_io_File.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [next]);
var size=Long.$div(bytes,(1048576));
if (Long.$gt(bytes,0 )) {
if (Long.$gt(size,0 )) host+=" (" + Long.$s(size) + " MB)" ;
 else host+=" (" + Long.$s(Long.$div(bytes,1024)) + " kB)";
}var item=Clazz.new_($I$(53,1).c$$S,[host]);
item.setActionCommand$S(next.getAbsolutePath$());
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(clearAction);
}
$I$(10,"setFonts$O$I",[popup, $I$(10).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].clearHostButton, 0, this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].clearHostButton.getHeight$());
});
})()
), Clazz.new_(P$.PrefsDialog$42.$init$,[this, null])));
cacheSouthPanel.add$java_awt_Component(this.clearHostButton);
this.clearCacheButton=Clazz.new_($I$(19,1));
this.clearCacheButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cache=$I$(50).getOSPCache$();
$I$(50).clearOSPCache$java_io_File$Z(cache, false);
p$1.refreshTextFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], []);
});
})()
), Clazz.new_(P$.PrefsDialog$43.$init$,[this, null])));
cacheSouthPanel.add$java_awt_Component(this.clearCacheButton);
this.setCacheButton=Clazz.new_($I$(19,1));
this.setCacheButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$44||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var newCache=$I$(50).chooseOSPCache$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame);
if (newCache != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].setCache$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], [newCache.getPath$()]);
}});
})()
), Clazz.new_(P$.PrefsDialog$44.$init$,[this, null])));
cacheSouthPanel.add$java_awt_Component(this.setCacheButton);
cacheSubPanel.add$java_awt_Component$O(cacheSouthPanel, "South");
}this.logLevelDropdown=Clazz.new_($I$(12,1));
var defaultLevel=$I$(9).getString$S("PrefsDialog.Version.Default").toUpperCase$();
defaultLevel+=" (" + $I$(7).DEFAULT_LOG_LEVEL.toString().toLowerCase$() + ")" ;
var selected=defaultLevel;
this.logLevelDropdown.addItem$O(defaultLevel);
for (var i=$I$(54).levels.length - 1; i >= 0; i--) {
var s=$I$(54).levels[i].toString();
this.logLevelDropdown.addItem$O(s);
if ($I$(54).levels[i].equals$O($I$(7).preferredLogLevel) && !$I$(7).preferredLogLevel.equals$O($I$(7).DEFAULT_LOG_LEVEL) ) {
selected=s;
}}
this.logLevelDropdown.setSelectedItem$O(selected);
this.logLevelDropdown.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$45||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var s=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].logLevelDropdown.getSelectedItem$().toString();
var level=$I$(54).parseLevel$S(s);
if (level == null ) level=$I$(7).DEFAULT_LOG_LEVEL;
$I$(7).preferredLogLevel=level;
});
})()
), Clazz.new_(P$.PrefsDialog$45.$init$,[this, null])));
var logLevelSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(logLevelSubPanel);
logLevelSubPanel.setBackground$java_awt_Color(color);
this.logLevelSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.LogLevel.BorderTitle")]);
logLevelSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.logLevelSubPanelBorder));
logLevelSubPanel.add$java_awt_Component(this.logLevelDropdown);
if (!$I$(4).isJS) {
this.checkForUpgradeButton=Clazz.new_($I$(19,1));
this.checkForUpgradeButton.addActionListener$java_awt_event_ActionListener(((P$.PrefsDialog$46||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7,"showUpgradeStatus$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].panelID)]);
});
})()
), Clazz.new_(P$.PrefsDialog$46.$init$,[this, null])));
this.checkForUpgradeDropdown=Clazz.new_($I$(12,1));
selected=null;
for (var next, $next = $I$(7).checkForUpgradeChoices.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var s=$I$(9).getString$S(next);
this.checkForUpgradeDropdown.addItem$O(s);
if ($I$(7).checkForUpgradeIntervals.get$O(next).equals$O(Integer.valueOf$I($I$(7).checkForUpgradeInterval))) {
selected=s;
}}
this.checkForUpgradeDropdown.setSelectedItem$O(selected);
this.checkForUpgradeDropdown.addItemListener$java_awt_event_ItemListener(((P$.PrefsDialog$47||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var s=this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].checkForUpgradeDropdown.getSelectedItem$().toString();
for (var next, $next = $I$(7).checkForUpgradeChoices.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (s.equals$O($I$(9).getString$S(next))) {
$I$(7).checkForUpgradeInterval=($I$(7).checkForUpgradeIntervals.get$O(next)).$c();
break;
}}
});
})()
), Clazz.new_(P$.PrefsDialog$47.$init$,[this, null])));
var dropdownPanel=Clazz.new_($I$(17,1));
dropdownPanel.setOpaque$Z(false);
dropdownPanel.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(0, 20, 0, 0));
var upgradeSubPanel=Clazz.new_($I$(17,1));
box.add$java_awt_Component(upgradeSubPanel);
upgradeSubPanel.setBackground$java_awt_Color(color);
this.upgradeSubPanelBorder=$I$(1,"createTitledBorder$S",[$I$(9).getString$S("PrefsDialog.Upgrades.BorderTitle")]);
upgradeSubPanel.setBorder$javax_swing_border_Border($I$(1).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, this.upgradeSubPanelBorder));
upgradeSubPanel.add$java_awt_Component(this.checkForUpgradeButton);
dropdownPanel.add$java_awt_Component(this.checkForUpgradeDropdown);
upgradeSubPanel.add$java_awt_Component(dropdownPanel);
}if (!$I$(4).isJS) {
this.tabbedPane.addTab$S$java_awt_Component(null, this.runtimePanel);
}this.tabbedPane.addTab$S$java_awt_Component(null, this.displayPanel);
this.tabbedPane.addTab$S$java_awt_Component(null, this.videoPanel);
this.tabbedPane.addTab$S$java_awt_Component(null, this.actionsPanel);
if (!$I$(4).isJS) {
this.tabbedPane.addTab$S$java_awt_Component(null, this.generalPanel);
this.tabbedPane.addTab$S$java_awt_Component(null, this.configPanel);
}this.mainButtonBar=Clazz.new_($I$(17,1));
this.mainButtonBar.add$java_awt_Component(this.relaunchButton);
this.mainButtonBar.add$java_awt_Component(this.okButton);
this.mainButtonBar.add$java_awt_Component(this.cancelButton);
contentPane.add$java_awt_Component$O(this.mainButtonBar, "South");
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.PrefsDialog$48||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].runtimePanel ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].defaultMemoryCheckbox.setEnabled$Z(!$I$(4).isWebStart$());
if ($I$(4).isWebStart$() && !$I$(30).webStartWarningShown ) {
$I$(30).webStartWarningShown=true;
$I$(55,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'], $I$(9).getString$S("PrefsDialog.Dialog.WebStart.Message"), $I$(9).getString$S("PrefsDialog.Dialog.WebStart.Title"), 1]);
}}});
})()
), Clazz.new_(P$.PrefsDialog$48.$init$,[this, null])));
buttonGroup=Clazz.new_($I$(26,1));
buttonGroup.add$javax_swing_AbstractButton(this.vm32Button);
buttonGroup.add$javax_swing_AbstractButton(this.vm64Button);
if (!$I$(4).isJS) {
buttonGroup=Clazz.new_($I$(26,1));
buttonGroup.add$javax_swing_AbstractButton(this.movieEngineButton);
buttonGroup.add$javax_swing_AbstractButton(this.noEngineButton);
this.xuggleFastButton.setEnabled$Z(this.movieEngineButton.isSelected$());
this.xuggleSlowButton.setEnabled$Z(this.movieEngineButton.isSelected$());
this.xuggleErrorCheckbox.setEnabled$Z(this.movieEngineButton.isSelected$());
if ($I$(4).isWindows$()) {
var runner=((P$.PrefsDialog$49||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].vm32Button.setEnabled$Z(!$I$(56).getFinder$().getJREs$I(32).isEmpty$());
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].vm64Button.setEnabled$Z(!$I$(56).getFinder$().getJREs$I(64).isEmpty$());
});
})()
), Clazz.new_(P$.PrefsDialog$49.$init$,[this, null]));
Clazz.new_($I$(57,1).c$$Runnable,[runner]).start$();
} else if ($I$(4).isLinux$()) {
var bitness=$I$(4).getVMBitness$();
this.vm32Button.setEnabled$Z(bitness == 32);
this.vm64Button.setEnabled$Z(bitness == 64);
} else if ($I$(4).isMac$()) {
this.vm32Button.setEnabled$Z(false);
this.vm64Button.setEnabled$Z(true);
}}this.refreshGUI$();
}, p$1);

Clazz.newMeth(C$, 'setCache$S',  function (path) {
if (path == null ) {
path=this.cacheField.getText$();
} else {
this.cacheField.setText$S(path);
}$I$(50,"setOSPCache$S",[$I$(31).stripExtension$S(path)]);
p$1.refreshTextFields.apply(this, []);
});

Clazz.newMeth(C$, 'savePrevious',  function () {
this.prevEnabled.clear$();
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.prevEnabled.addAll$java_util_Collection(trackerPanel.getEnabled$());
trackerPanel.taintEnabled$();
}this.prevLogLevel=$I$(7).preferredLogLevel;
this.prevMemory=$I$(7).preferredMemorySize;
this.prevLookFeel=$I$(7).lookAndFeel;
this.prevRecentCount=$I$(7).recentFilesSize;
this.prevLocaleName=$I$(7).preferredLocale;
this.prevFontLevel=$I$(7).preferredFontLevel;
this.prevFontLevelPlus=$I$(7).preferredFontLevelPlus;
this.prevHints=$I$(7).showHintsByDefault;
this.prevRadians=$I$(7).isRadians;
this.prevDecimalSeparator=$I$(7).preferredDecimalSeparator;
this.prevFastXuggle=$I$(7).isXuggleFast;
this.prevJRE=$I$(7).preferredJRE;
this.prevTrackerJar=$I$(7).preferredTrackerJar;
this.prevExecutables=$I$(7).prelaunchExecutables;
this.prevWarnNoVideoEngine=$I$(7).warnNoVideoEngine;
this.prevWarnXuggleError=$I$(7).warnXuggleError;
this.prevWarnVariableDuration=$I$(7).warnVariableDuration;
this.prevMarkAtCurrentFrame=$I$(7).markAtCurrentFrame;
this.prevCache=$I$(50).getOSPCache$();
this.prevUpgradeInterval=$I$(7).checkForUpgradeInterval;
this.prevEngine=$I$(43).getMovieEngineName$Z(false);
this.prevZoomMouseWheel=$I$(7).scrubMouseWheel;
this.prevCenterCalibrationStick=$I$(7).centerCalibrationStick;
this.prevAutofill=$I$(7).enableAutofill;
this.prevShowGaps=$I$(7).showGaps;
this.prevTrailLengthIndex=$I$(7).preferredTrailLengthIndex;
this.prevPointmassFootprint=$I$(7).preferredPointMassFootprint;
}, p$1);

Clazz.newMeth(C$, 'revert',  function () {
if (this.panelID != null ) this.frame.getTrackerPanelForID$Integer(this.panelID).setEnabled$java_util_Set(this.prevEnabled);
$I$(7).preferredPointMassFootprint=this.prevPointmassFootprint;
$I$(7).preferredMemorySize=this.prevMemory;
$I$(7).lookAndFeel=this.prevLookFeel;
$I$(7).recentFilesSize=this.prevRecentCount;
$I$(7).preferredLogLevel=this.prevLogLevel;
$I$(7).setPreferredLocale$S(this.prevLocaleName);
$I$(7).preferredFontLevel=this.prevFontLevel;
$I$(7).preferredFontLevelPlus=this.prevFontLevelPlus;
$I$(7).showHintsByDefault=this.prevHints;
$I$(7).isRadians=this.prevRadians;
$I$(7).preferredDecimalSeparator=this.prevDecimalSeparator;
$I$(7).isXuggleFast=this.prevFastXuggle;
$I$(7).preferredJRE=this.prevJRE;
$I$(7).preferredTrackerJar=this.prevTrackerJar;
$I$(7).prelaunchExecutables=this.prevExecutables;
$I$(7).warnNoVideoEngine=this.prevWarnNoVideoEngine;
$I$(7).warnXuggleError=this.prevWarnXuggleError;
$I$(7).warnVariableDuration=this.prevWarnVariableDuration;
$I$(7).scrubMouseWheel=this.prevZoomMouseWheel;
$I$(7).markAtCurrentFrame=this.prevMarkAtCurrentFrame;
$I$(7).centerCalibrationStick=this.prevCenterCalibrationStick;
$I$(7).enableAutofill=this.prevAutofill;
$I$(7).showGaps=this.prevShowGaps;
$I$(7).preferredTrailLengthIndex=this.prevTrailLengthIndex;
$I$(50).setOSPCache$java_io_File(this.prevCache);
$I$(7).checkForUpgradeInterval=this.prevUpgradeInterval;
if (!$I$(4).isJS) {
var vmBitness=$I$(4).getVMBitness$();
if (vmBitness == 32) {
this.vm32Button.setSelected$Z(true);
} else {
this.vm64Button.setSelected$Z(true);
}}}, p$1);

Clazz.newMeth(C$, 'updateConfig',  function () {
if (this.panelID == null ) return;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var checkboxes=this.checkPanel.getComponents$();
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
if (checkbox.isSelected$()) trackerPanel.getEnabled$().add$O(checkbox.getText$());
 else trackerPanel.getEnabled$().remove$O(checkbox.getText$());
trackerPanel.taintEnabled$();
}
}, p$1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.unitsSubPanelBorder.setTitle$S($I$(9).getString$S("TMenuBar.Menu.AngleUnits"));
this.resetToStep0SubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Marking.BorderTitle"));
this.dataGapSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.DataGap.BorderTitle"));
this.trailLengthSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Trails.BorderTitle"));
this.decimalSeparatorBorder.setTitle$S($I$(9).getString$S("NumberFormatSetter.TitledBorder.DecimalSeparator.Text"));
this.defaultDecimalButton.setText$S($I$(9).getString$S("NumberFormatSetter.Button.DecimalSeparator.Default"));
this.periodDecimalButton.setText$S($I$(9).getString$S("NumberFormatSetter.Button.DecimalSeparator.Period"));
this.commaDecimalButton.setText$S($I$(9).getString$S("NumberFormatSetter.Button.DecimalSeparator.Comma"));
this.defaultDecimalButton.setSelected$Z($I$(4).getPreferredDecimalSeparator$() == null );
this.periodDecimalButton.setSelected$Z(".".equals$O($I$(4).getPreferredDecimalSeparator$()));
this.commaDecimalButton.setSelected$Z(",".equals$O($I$(4).getPreferredDecimalSeparator$()));
this.cancelButton.setText$S($I$(9).getString$S("Dialog.Button.Cancel"));
this.okButton.setText$S($I$(9).getString$S("Dialog.Button.OK"));
this.relaunchButton.setText$S($I$(9).getString$S("PrefsDialog.Button.Relaunch"));
this.resetToStep0Checkbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.ResetToZero.Text"));
this.autofillCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.Autofill.Text"));
this.showGapsCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.ShowGaps.Text"));
this.radiansButton.setText$S($I$(9).getString$S("TMenuBar.MenuItem.Radians"));
this.degreesButton.setText$S($I$(9).getString$S("TMenuBar.MenuItem.Degrees"));
this.markStickEndsButton.setText$S($I$(9).getString$S("PrefsDialog.Button.MarkEnds"));
this.centerStickButton.setText$S($I$(9).getString$S("PrefsDialog.Button.Center"));
this.scrubButton.setText$S($I$(9).getString$S("PrefsDialog.Button.Scrub"));
this.zoomButton.setText$S($I$(9).getString$S("PrefsDialog.Button.Zoom"));
this.mouseWheelSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Mousewheel.BorderTitle"));
this.variableDurationCheckBox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.WarnVariableDuration"));
p$1.setTabTitle$javax_swing_JPanel$S.apply(this, [this.displayPanel, $I$(9).getString$S("PrefsDialog.Tab.Display.Title")]);
p$1.setTabTitle$javax_swing_JPanel$S.apply(this, [this.actionsPanel, $I$(9).getString$S("PrefsDialog.Tab.Tracking.Title")]);
p$1.setTabTitle$javax_swing_JPanel$S.apply(this, [this.videoPanel, $I$(9).getString$S("PrefsDialog.Tab.Video.Title")]);
if (!$I$(4).isJS) {
p$1.setTabTitle$javax_swing_JPanel$S.apply(this, [this.generalPanel, $I$(9).getString$S("PrefsDialog.Tab.General.Title")]);
this.hintsCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.HintsOn"));
this.logLevelSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.LogLevel.BorderTitle"));
this.fontSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.FontSize.BorderTitle"));
this.langSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Language.BorderTitle"));
this.hintsSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Hints.BorderTitle"));
this.checkPanelBorder.setTitle$S($I$(9).getString$S("ConfigInspector.Border.Title"));
this.versionSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Version.BorderTitle"));
this.jreSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.JRE.BorderTitle"));
this.memorySubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Memory.BorderTitle"));
this.recentSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.RecentFiles.BorderTitle"));
this.defaultMemoryCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.DefaultSize"));
this.applyButton.setText$S($I$(9).getString$S("Dialog.Button.Apply"));
this.applyButton.setEnabled$Z(this.panelID != null );
this.allButton.setText$S($I$(9).getString$S("Dialog.Button.All"));
this.noneButton.setText$S($I$(9).getString$S("Dialog.Button.None"));
this.cacheLabel.setText$S($I$(9).getString$S("PrefsDialog.Label.Path") + ":");
this.clearCacheButton.setToolTipText$S($I$(9).getString$S("PrefsDialog.Button.ClearCache.Tooltip"));
this.clearHostButton.setText$S($I$(9).getString$S("PrefsDialog.Button.ClearHost"));
this.clearHostButton.setToolTipText$S($I$(9).getString$S("PrefsDialog.Button.ClearHost.Tooltip"));
this.setCacheButton.setText$S($I$(9).getString$S("PrefsDialog.Button.SetCache"));
this.saveButton.setText$S($I$(9).getString$S("ConfigInspector.Button.SaveAsDefault"));
this.checkForUpgradeButton.setText$S($I$(9).getString$S("PrefsDialog.Button.CheckForUpgrade"));
this.vm32Button.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.32BitVM"));
this.vm64Button.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.64BitVM"));
this.movieEngineButton.setText$S($I$(9).getString$S("PrefsDialog.Button.Xuggle"));
this.noEngineButton.setText$S($I$(9).getString$S("PrefsDialog.Button.NoEngine"));
this.xuggleFastButton.setText$S($I$(9).getString$S("PrefsDialog.Xuggle.Fast"));
this.xuggleSlowButton.setText$S($I$(9).getString$S("PrefsDialog.Xuggle.Slow"));
this.vidWarningCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.WarnIfNoEngine"));
this.skippedStepsCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.WarnSkippedSteps"));
this.xuggleErrorCheckbox.setText$S($I$(9).getString$S("PrefsDialog.Checkbox.WarnIfXuggleError"));
this.xuggleSpeedSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Xuggle.Speed.BorderTitle"));
this.warningsSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.NoVideoWarning.BorderTitle"));
this.cacheSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.CacheFiles.BorderTitle"));
this.upgradeSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Upgrades.BorderTitle"));
this.runSubPanelBorder.setTitle$S($I$(9).getString$S("PrefsDialog.Run.BorderTitle"));
this.clearRecentButton.setText$S($I$(9).getString$S("PrefsDialog.Button.ClearRecent"));
this.recentSizeLabel.setText$S($I$(9).getString$S("PrefsDialog.Label.RecentSize"));
p$1.setTabTitle$javax_swing_JPanel$S.apply(this, [this.configPanel, $I$(9).getString$S("PrefsDialog.Tab.Configuration.Title")]);
p$1.setTabTitle$javax_swing_JPanel$S.apply(this, [this.runtimePanel, $I$(9).getString$S("PrefsDialog.Tab.Runtime.Title")]);
p$1.refreshTextFields.apply(this, []);
}this.setFontLevel$I($I$(10).getLevel$());
if (this.trailLengthDropdown != null ) {
this.trailLengthDropdown.removeAllItems$();
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.NoTrail"));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.ShortTrail"));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.LongTrail"));
this.trailLengthDropdown.addItem$O($I$(9).getString$S("TrackControl.TrailMenu.FullTrail"));
}this.pack$();
this.updateDisplay$();
});

Clazz.newMeth(C$, 'refreshJREDropdown$I',  function (vmBitness) {
if (String.valueOf$I(vmBitness).equals$O(this.jreDropdown.getName$())) return;
this.jreDropdown.setName$S(String.valueOf$I(vmBitness));
var runner=((P$.PrefsDialog$50||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
while (!$I$(56).isReady$()){
try {
$I$(57).sleep$J(200);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
var refresher=((P$.PrefsDialog$50$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$50$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].jreDropdown.removeAllItems$();
var jreFinder=$I$(56).getFinder$();
var availableJREs=jreFinder.getJREs$I(this.$finals$.vmBitness);
var availableJREPaths=Clazz.new_($I$(36,1));
var path=$I$(7).trackerHome;
if ($I$(4).isMac$()) {
path=Clazz.new_([$I$(7).trackerHome],$I$(6,1).c$$S).getParent$() + "/runtime";
}var bundledVMs=$I$(5).findBundledVMs$();
var bundledVM=this.$finals$.vmBitness == 32 && $I$(4).isWindows$()  ? bundledVMs[1] : bundledVMs[0];
var defaultVM=jreFinder.getDefaultJRE$I$S$Z$S(this.$finals$.vmBitness, path, true, null);
for (var next, $next = availableJREs.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var jrePath=next.getPath$();
if (bundledVM != null  && jrePath.equals$O(bundledVM) ) {
availableJREPaths.add$O(jrePath);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].jreDropdown.insertItemAt$O$I($I$(9).getString$S("PrefsDialog.JREDropdown.BundledJRE") + " " + jrePath , 0);
} else if (defaultVM != null  && jrePath.equals$O(defaultVM.getPath$())  && bundledVM == null  ) {
availableJREPaths.add$O(jrePath);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].jreDropdown.insertItemAt$O$I($I$(9).getString$S("PrefsDialog.JREDropdown.LatestJRE"), 0);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].jreDropdown.addItem$O(jrePath);
} else {
availableJREPaths.add$O(jrePath);
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].jreDropdown.addItem$O(jrePath);
}}
var selectedItem=$I$(7).preferredJRE;
if (selectedItem == null  || !availableJREPaths.contains$O(selectedItem) ) {
if (bundledVM != null ) {
selectedItem=$I$(9).getString$S("PrefsDialog.JREDropdown.BundledJRE") + " " + bundledVM ;
} else {
selectedItem=$I$(9).getString$S("PrefsDialog.JREDropdown.LatestJRE");
}}this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].jreDropdown.setSelectedItem$O(selectedItem);
if (this.$finals$.vmBitness == 32 && this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].relaunching ) {
if (!"cancel".equals$O(this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].vm32Button.getName$())) {
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].relaunching=false;
this.b$['org.opensourcephysics.cabrillo.tracker.PrefsDialog'].relaunchButton.doClick$I(0);
}}});
})()
), Clazz.new_(P$.PrefsDialog$50$1.$init$,[this, {vmBitness:this.$finals$.vmBitness}]));
$I$(58).invokeLater$Runnable(refresher);
});
})()
), Clazz.new_(P$.PrefsDialog$50.$init$,[this, {vmBitness:vmBitness}]));
Clazz.new_($I$(57,1).c$$Runnable,[runner]).start$();
}, p$1);

Clazz.newMeth(C$, 'refreshTextFields',  function () {
var n=(this.runSpinner.getValue$()).$c();
if ($I$(7).prelaunchExecutables.length > n && $I$(7).prelaunchExecutables[n] != null  ) {
this.runField.setText$S($I$(7).prelaunchExecutables[n]);
this.runField.setToolTipText$S($I$(7).prelaunchExecutables[n]);
this.runField.setBackground$java_awt_Color(Clazz.new_([$I$(7).prelaunchExecutables[n]],$I$(6,1).c$$S).exists$() ? $I$(2).white : C$.MEDIUM_RED);
} else {
this.runField.setText$S(null);
this.runField.setToolTipText$S(null);
this.runField.setBackground$java_awt_Color($I$(2).white);
}var s=$I$(9).getString$S("PrefsDialog.Button.ClearCache");
var cache=$I$(50).getOSPCache$();
if (cache != null ) {
this.cacheField.setText$S(cache.getPath$());
this.cacheField.setToolTipText$S(cache.getAbsolutePath$());
this.cacheField.setBackground$java_awt_Color(cache.canWrite$() ? $I$(2).white : C$.MEDIUM_RED);
var bytes=p$1.getFileSize$java_io_File.apply(this, [cache]);
var size=Long.$div(bytes,(1048576));
if (Long.$gt(bytes,0 )) {
if (Long.$gt(size,0 )) s+=" (" + Long.$s(size) + " MB)" ;
 else s+=" (" + Long.$s(Long.$div(bytes,1024)) + " kB)";
}} else {
this.cacheField.setText$S("");
this.cacheField.setToolTipText$S("");
this.cacheField.setBackground$java_awt_Color(C$.MEDIUM_RED);
}this.clearCacheButton.setText$S(s);
var isEmpty=cache == null  || !cache.exists$()  || cache.listFiles$java_io_FileFilter($I$(50).OSP_CACHE_FILTER).length == 0 ;
this.clearCacheButton.setEnabled$Z(!isEmpty);
this.clearHostButton.setEnabled$Z(!isEmpty);
}, p$1);

Clazz.newMeth(C$, 'applyPrefs',  function () {
var trackerPanel=this.panelID == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID);
$I$(7).showGaps=this.showGapsCheckbox.isSelected$();
if (this.trailLengthDropdown != null ) {
var index=this.trailLengthDropdown.getSelectedIndex$();
if (index != $I$(7).preferredTrailLengthIndex) {
$I$(7).preferredTrailLengthIndex=index;
if (trackerPanel != null ) {
var toolbar=trackerPanel.getToolBar$Z(true);
toolbar.trailLengthIndex=$I$(7).preferredTrailLengthIndex;
toolbar.trailButton.setSelected$Z(toolbar.trailLengthIndex != 0);
toolbar.refresh$S("PrefsDialog");
}}}$I$(7).isRadians=this.radiansButton.isSelected$();
if (!$I$(4).isJS) {
var val=this.recentSizeSpinner.getValue$();
$I$(7,"setRecentSize$I",[(val).$c()]);
if (trackerPanel != null ) trackerPanel.refreshMenus$S("PrefsDialog.applyPrefs");
p$1.updateConfig.apply(this, []);
$I$(7).isXuggleFast=this.xuggleFastButton.isSelected$();
if (this.defaultMemoryCheckbox.isSelected$()) $I$(7).preferredMemorySize=-1;
 else $I$(7).preferredMemorySize=this.memoryField.getIntValue$();
var selected=this.jreDropdown.getSelectedItem$();
if (selected != null  && !selected.equals$O($I$(7).preferredJRE) ) {
if (selected.toString().startsWith$S($I$(9).getString$S("PrefsDialog.JREDropdown.BundledJRE"))) {
$I$(7).preferredJRE=null;
} else if (selected.equals$O($I$(9).getString$S("PrefsDialog.JREDropdown.LatestJRE"))) {
$I$(7).preferredJRE=null;
} else {
$I$(7).preferredJRE=selected.toString();
}}}var path=$I$(7).savePreferences$();
if (path != null ) $I$(54,"info$S",["saved tracker preferences in " + $I$(31,"getAbsolutePath$java_io_File",[Clazz.new_($I$(6,1).c$$S,[path])])]);
}, p$1);

Clazz.newMeth(C$, 'saveConfigAsDefault',  function () {
var checkboxes=this.checkPanel.getComponents$();
var enabled=Clazz.new_($I$(8,1));
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
if (checkbox.isSelected$()) enabled.add$O(checkbox.getText$());
}
$I$(7).setDefaultConfig$java_util_Set(enabled);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.refreshing=true;
if (this.footprintDropdown != null ) {
var selected=0;
for (var i=0; i < this.footprintDropdown.getItemCount$(); i++) {
var footprint=this.footprintDropdown.getItemAt$I(i);
if ($I$(7).preferredPointMassFootprint != null  && $I$(7).preferredPointMassFootprint.startsWith$S(footprint.getName$()) ) {
selected=i;
if (Clazz.instanceOf(footprint, "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
var cfp=footprint;
var n=$I$(7).preferredPointMassFootprint.indexOf$S("#");
if (n > -1) {
cfp.setProperties$S($I$(7).preferredPointMassFootprint.substring$I(n + 1));
}}break;
}}
if (this.footprintDropdown.getItemCount$() > selected) {
this.footprintDropdown.setSelectedIndex$I(selected);
}}var preferredLevel=$I$(7).preferredFontLevel + $I$(7).preferredFontLevelPlus;
this.fontSizeDropdown.setSelectedIndex$I(preferredLevel);
if (this.trailLengthDropdown != null ) this.trailLengthDropdown.setSelectedIndex$I($I$(7).preferredTrailLengthIndex);
this.showGapsCheckbox.setSelected$Z($I$(7).showGaps);
this.autofillCheckbox.setSelected$Z($I$(7).enableAutofill);
this.radiansButton.setSelected$Z($I$(7).isRadians);
this.degreesButton.setSelected$Z(!$I$(7).isRadians);
this.resetToStep0Checkbox.setSelected$Z(!$I$(7).markAtCurrentFrame);
if ($I$(7).scrubMouseWheel) this.scrubButton.setSelected$Z(true);
 else this.zoomButton.setSelected$Z(true);
if ($I$(7).centerCalibrationStick) this.centerStickButton.setSelected$Z(true);
 else this.markStickEndsButton.setSelected$Z(true);
if (!$I$(4).isJS) {
this.hintsCheckbox.setSelected$Z($I$(7).showHintsByDefault);
var index=0;
var locales=$I$(7).getLocales$();
for (var i=0; i < locales.length; i++) {
var next=locales[i];
if (next.equals$O($I$(25).getDefault$())) {
index=i + 1;
break;
}}
this.languageDropdown.setSelectedIndex$I(index);
var selected=0;
if (!$I$(7).preferredLogLevel.equals$O($I$(7).DEFAULT_LOG_LEVEL)) {
for (var i=1, count=this.logLevelDropdown.getItemCount$(); i < count; i++) {
var next=this.logLevelDropdown.getItemAt$I(i).toString();
if ($I$(7).preferredLogLevel.toString().equals$O(next)) {
selected=i;
break;
}}
}if (this.logLevelDropdown.getItemCount$() > selected) {
this.logLevelDropdown.setSelectedIndex$I(selected);
}this.recentSizeSpinner.setValue$O(Integer.valueOf$I($I$(7).recentFilesSize));
var checkboxes=this.checkPanel.getComponents$();
var enabled=(this.panelID == null  ? $I$(7).getDefaultConfig$() : this.frame.getTrackerPanelForID$Integer(this.panelID).getEnabled$());
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
checkbox.setSelected$Z(enabled.contains$O(checkbox.getText$()));
}
this.vidWarningCheckbox.setSelected$Z($I$(7).warnNoVideoEngine);
this.variableDurationCheckBox.setSelected$Z($I$(7).warnVariableDuration);
this.xuggleErrorCheckbox.setSelected$Z($I$(7).warnXuggleError);
this.skippedStepsCheckbox.setSelected$Z($I$(7).warnSkippedStep);
this.defaultMemoryCheckbox.setSelected$Z($I$(7).preferredMemorySize < 0);
this.memoryField.setEnabled$Z($I$(7).preferredMemorySize >= 0);
this.memoryLabel.setEnabled$Z($I$(7).preferredMemorySize >= 0);
if ($I$(7).preferredMemorySize >= 0) this.memoryField.setValue$D($I$(7).preferredMemorySize);
 else {
this.memoryField.setText$S(null);
}selected=0;
for (var i=0, count=this.versionDropdown.getItemCount$(); i < count; i++) {
var next=this.versionDropdown.getItemAt$I(i).toString();
if ($I$(7).preferredTrackerJar != null  && $I$(7).preferredTrackerJar.indexOf$S(next) > -1  && ($I$(7).preferredTrackerJar.indexOf$S(".jar") - $I$(7).preferredTrackerJar.indexOf$S(next)) == next.length$() ) {
selected=i;
break;
}}
if (this.versionDropdown.getItemCount$() > selected) {
this.versionDropdown.setSelectedIndex$I(selected);
}selected=0;
for (var i=0, count=this.jreDropdown.getItemCount$(); i < count; i++) {
var next=this.jreDropdown.getItemAt$I(i).toString();
if (next.equals$O($I$(7).preferredJRE)) {
selected=i;
break;
}}
if (this.jreDropdown.getItemCount$() > selected) {
this.jreDropdown.setSelectedIndex$I(selected);
}if ($I$(43).hasVideoEngine$()) {
this.movieEngineButton.setSelected$Z(true);
}selected=0;
for (var i=1, count=$I$(7).checkForUpgradeChoices.size$(); i < count; i++) {
var next=$I$(7).checkForUpgradeChoices.get$I(i);
if (($I$(7).checkForUpgradeIntervals.get$O(next)).$c() === $I$(7).checkForUpgradeInterval ) {
selected=i;
break;
}}
if (this.checkForUpgradeDropdown.getItemCount$() > selected) {
this.checkForUpgradeDropdown.setSelectedIndex$I(selected);
}}$I$(45).repaintT$java_awt_Component(this);
this.refreshing=false;
});

Clazz.newMeth(C$, 'setTabTitle$javax_swing_JPanel$S',  function (tab, title) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
if (this.tabbedPane.getComponentAt$I(i) === tab ) this.tabbedPane.setTitleAt$I$S(i, title);
}
}, p$1);

Clazz.newMeth(C$, 'relaunch64Bit$',  function () {
this.relaunching=true;
this.vm64Button.setSelected$Z(true);
});

Clazz.newMeth(C$, 'getFileSize$java_io_File',  function (folder) {
if (folder == null ) return 0;
var foldersize=0;
var cache=$I$(50).getOSPCache$();
var files=folder.equals$O(cache) ? folder.listFiles$java_io_FileFilter($I$(50).OSP_CACHE_FILTER) : folder.listFiles$();
if (files == null ) return 0;
for (var i=0; i < files.length; i++) {
if (files[i].isDirectory$()) {
(foldersize=Long.$add(foldersize,(p$1.getFileSize$java_io_File.apply(this, [files[i]]))));
} else {
(foldersize=Long.$add(foldersize,(files[i].length$())));
}}
return foldersize;
}, p$1);

Clazz.newMeth(C$, 'getFileChooser$java_io_File$Z',  function (file, useJREFilter) {
var chooser=Clazz.new_($I$(59,1).c$$java_io_File,[file]);
if (useJREFilter) {
var folderFilter=((P$.PrefsDialog$51||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrefsDialog$51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
if (f.isDirectory$()) return true;
if (f.getPath$().indexOf$S("jre") > -1) return true;
if (f.getPath$().indexOf$S("jdk") > -1) return true;
return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(9).getString$S("PrefsDialog.FileFilter.JRE");
});
})()
), Clazz.new_($I$(60,1),[this, null],P$.PrefsDialog$51));
if ($I$(4).isMac$()) chooser.setFileSelectionMode$I(2);
 else chooser.setFileSelectionMode$I(1);
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(folderFilter);
}$I$(10,"setFonts$O$I",[chooser, $I$(10).getLevel$()]);
return chooser;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MEDIUM_RED=Clazz.new_($I$(2,1).c$$I$I$I,[255, 120, 140]);
{
C$.trackerJarFilter=Clazz.new_($I$(3,1));
try {
C$.userHome=$I$(4).getUserHome$();
C$.javaHome=System.getProperty$S("java.home");
var url=Clazz.getClass($I$(5)).getProtectionDomain$().getCodeSource$().getLocation$();
var jarFile=Clazz.new_([url.toURI$()],$I$(6,1).c$$java_net_URI);
C$.codeBaseDir=jarFile.getParentFile$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PrefsDialog, "FootprintRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(1, 3, 1, 0));
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$org_opensourcephysics_cabrillo_tracker_Footprint$I$Z$Z','getListCellRendererComponent$javax_swing_JList$O$I$Z$Z'],  function (list, val, index, selected, hasFocus) {
if (selected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}if (val != null ) {
var fp=val;
var name=fp.getDisplayName$();
if (Clazz.instanceOf(fp, "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
var cfp=fp;
var props=cfp.getProperties$().split$S(" ");
name+=" r=" + props[0];
}this.setText$S(name);
this.setIcon$javax_swing_Icon(fp.getIcon$I$I(21, 16));
}return this;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
