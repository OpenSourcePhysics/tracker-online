(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Dimension','java.util.HashMap','javax.swing.JList','java.util.TreeMap','org.opensourcephysics.tools.FontSizer','java.awt.Toolkit','java.util.HashSet','org.opensourcephysics.controls.OSPLog','java.util.TreeSet','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.display.TeXParser','java.awt.event.MouseAdapter','org.opensourcephysics.cabrillo.tracker.TTrack','java.util.ArrayList','org.opensourcephysics.display.OSPRuntime','java.util.BitSet','java.awt.BorderLayout','java.text.NumberFormat','javax.swing.JButton','javax.swing.AbstractAction','javax.swing.JOptionPane','org.opensourcephysics.display.DisplayRes','javax.swing.JComboBox','org.opensourcephysics.cabrillo.tracker.TrackRenderer','javax.swing.JLabel','javax.swing.JTextField','java.awt.Color','javax.swing.SwingUtilities','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','org.opensourcephysics.media.core.NumberField','javax.swing.JScrollPane','javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.BorderFactory','javax.swing.JPanel','java.awt.GridLayout','javax.swing.Box']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumberFormatDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.trackID=-1;
this.displayedNames=Clazz.array(String, [0]);
this.realNames=Clazz.new_($I$(3,1));
this.prevTrackPatterns=Clazz.new_($I$(3,1));
this.variableList=Clazz.new_($I$(4,1));
this.trackSelectedVariables=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['formatsChanged','prevAnglesInRadians'],'I',['trackID'],'S',['prevPattern','prevDecimalSeparator'],'O',['panelID','Integer','frame','org.opensourcephysics.cabrillo.tracker.TFrame','closeButton','javax.swing.JButton','+helpButton','+revertButton','trackDropdown','javax.swing.JComboBox','patternLabel','javax.swing.JLabel','+sampleLabel','patternField','javax.swing.JTextField','sampleField','org.opensourcephysics.media.core.NumberField','testFormat','java.text.DecimalFormat','displayedNames','String[]','realNames','java.util.Map','+prevTrackPatterns','variablePanel','javax.swing.JPanel','+applyToPanel','+unitsPanel','+decimalSeparatorPanel','variableList','javax.swing.JList','variableScroller','javax.swing.JScrollPane','trackOnlyButton','javax.swing.JRadioButton','+trackTypeButton','+dimensionButton','+defaultDecimalButton','+periodDecimalButton','+commaDecimalButton','variablesBorder','javax.swing.border.TitledBorder','+applyToBorder','+decimalSeparatorBorder','trackSelectedVariables','java.util.Map']]
,['S',['noPattern','mixedPattern'],'O',['scrollerDimension','java.awt.Dimension']]]

Clazz.newMeth(C$, 'getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA',  function (trackerPanel, track, selectedNames) {
var dialog=trackerPanel.numberFormatDialog;
if (dialog == null ) {
trackerPanel.numberFormatDialog=dialog=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$Integer,[trackerPanel.getTFrame$(), trackerPanel.getID$()]);
p$1.setFontLevel$I.apply(dialog, [$I$(6).getLevel$()]);
var dim=$I$(7).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - dialog.getBounds$().width)/2|0);
var y=((dim.height - dialog.getBounds$().height)/2|0);
dialog.setLocation$I$I(x, y);
}p$1.savePrevious.apply(dialog, []);
if (selectedNames != null ) {
var namesToSelect=Clazz.new_($I$(8,1));
var displayNames=C$.getDisplayNames$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var map=track.getFormatMap$();
for (var $var, $$var = 0, $$$var = selectedNames; $$var<$$$var.length&&(($var=($$$var[$$var])),1);$$var++) {
var k=$var.indexOf$S("_{ ");
if (k > 0) {
$var=$var.substring$I$I(0, k);
}namesToSelect.add$O(C$.getDisplayName$S$java_util_ArrayList$java_util_Map($var, displayNames, map));
}
selectedNames=namesToSelect.toArray$OA(Clazz.array(String, [0]));
}if (track == null ) {
var tracks=trackerPanel.getUserTracks$();
if (tracks.size$() > 0) {
track=tracks.get$I(0);
} else {
tracks=trackerPanel.getTracksTemp$();
if (tracks.size$() > 0) {
track=tracks.get$I(0);
}trackerPanel.clearTemp$();
}}if (track != null ) {
dialog.trackSelectedVariables.put$O$O(Integer.valueOf$I(track.getID$()), selectedNames);
}p$1.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(dialog, [track]);
p$1.setFontLevel$I.apply(dialog, [$I$(6).getLevel$()]);
return dialog;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$Integer',  function (frame, panelID) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[frame, true]);C$.$init$.apply(this);
this.frame=frame;
this.panelID=panelID;
p$1.createGUI.apply(this, []);
p$1.refreshGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(9).finalized$O(this);
});

Clazz.newMeth(C$, 'setVariables$org_opensourcephysics_cabrillo_tracker_TTrack$java_util_ArrayList$SA',  function (track, names, selected) {
if (selected != null ) {
var select=Clazz.new_($I$(10,1));
for (var next, $next = 0, $$next = selected; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next != null  && next.startsWith$S($I$(11).THETA) ) {
next=$I$(11).THETA;
}select.add$O(next);
}
selected=select.toArray$OA(Clazz.array(String, [select.size$()]));
}this.displayedNames=Clazz.array(String, [names.size$()]);
this.realNames.clear$();
var len=5;
for (var s, $s = names.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
s=$I$(12).removeSubscripting$S(s);
len=Math.max(len, s.length$());
}
for (var i=0; i < names.size$(); i++) {
var s=$I$(12,"removeSubscripting$S",[names.get$I(i)]);
this.displayedNames[i]="   " + s;
for (var j=0; j < len + 1 - s.length$(); j++) {
this.displayedNames[i]+=" ";
}
this.realNames.put$O$O(this.displayedNames[i], names.get$I(i));
if (selected != null ) {
for (var j=0; j < selected.length; j++) {
if (selected[j] != null  && selected[j].equals$O(names.get$I(i)) ) {
selected[j]=this.displayedNames[i];
}}
}}
this.variableList=Clazz.new_($I$(4,1).c$$OA,[this.displayedNames]);
this.variableList.setLayoutOrientation$I(2);
this.variableList.setVisibleRowCount$I(-1);
this.variableList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.NumberFormatDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (!e.getValueIsAdjusting$()) {
var indices=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.getSelectedIndices$();
p$1.showNumberFormatAndSample$IA.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [indices]);
var vars=p$1.getSelectedVariables$IA.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [indices]);
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].trackSelectedVariables.put$O$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].trackID), vars);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], []);
}});
})()
), Clazz.new_(P$.NumberFormatDialog$1.$init$,[this, null])));
this.variableList.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.NumberFormatDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var index=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.locationToIndex$java_awt_Point(e.getPoint$());
if (index == -1) return;
var displayedName=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.getModel$().getElementAt$I(index);
var name=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].realNames.get$O(displayedName);
var desc=this.$finals$.track.getFormatDescMap$().get$O(name);
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.setToolTipText$S(desc == null  ? name : desc);
});
})()
), Clazz.new_($I$(13,1),[this, {track:track}],P$.NumberFormatDialog$2)));
this.variableScroller.setViewportView$java_awt_Component(this.variableList);
$I$(6,"setFonts$O$I",[this.variableList, $I$(6).getLevel$()]);
var indices=null;
if (selected != null ) {
indices=Clazz.array(Integer.TYPE, [selected.length]);
for (var j=0; j < indices.length; j++) {
 inner : for (var i=0; i < this.displayedNames.length; i++) {
if (this.displayedNames[i].equals$O(selected[j])) {
indices[j]=i;
break inner;
}}
}
this.variableList.setSelectedIndices$IA(indices);
} else {
p$1.showNumberFormatAndSample$IA.apply(this, [indices]);
}p$1.refreshGUI.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'applyPattern$S',  function (pattern) {
if (pattern.equals$O(this.prevPattern)) return;
if (pattern.indexOf$S(C$.noPattern) > -1) pattern="";
pattern=pattern.replaceAll$S$S(",", ".");
if (pattern.length$() > 1 && (C$.noPattern.startsWith$S(pattern) || C$.mixedPattern.startsWith$S(pattern) ) ) {
pattern="";
}pattern=pattern.replaceAll$S$S("e", "E");
if (pattern.indexOf$S("E") != pattern.lastIndexOf$S("E")) {
pattern=pattern.substring$I$I(0, pattern.length$() - 1);
}if (pattern.equals$O("E")) {
pattern="0E0";
} else if (pattern.equals$O("0E") || pattern.equals$O("E0") ) {
if (this.prevPattern.length$() > pattern.length$()) {
pattern="0";
} else {
pattern="0E0";
}} else if (pattern.contains$CharSequence("0.E")) {
if (this.prevPattern.length$() > pattern.length$()) {
pattern=pattern.replaceAll$S$S("0.E", "0E");
} else {
pattern=pattern.replaceAll$S$S("0.E", "0.0E");
}}if (pattern.contains$CharSequence("E") && pattern.endsWith$S("0.") ) {
pattern=pattern.substring$I$I(0, pattern.length$() - 1);
}if (pattern.endsWith$S("0E")) {
if (this.prevPattern.length$() > pattern.length$()) {
pattern=pattern.substring$I$I(0, pattern.length$() - 1);
} else {
pattern=pattern.substring$I$I(0, pattern.length$() - 1) + "E0";
}}var validPattern=true;
try {
pattern=pattern.replaceAll$S$S("0E", "0e");
pattern=pattern.replaceAll$S$S("E0", "e0");
this.testFormat.applyPattern$S(pattern);
pattern=pattern.replaceAll$S$S("0e", "0E");
pattern=pattern.replaceAll$S$S("e0", "E0");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
validPattern=false;
} else {
throw ex;
}
}
if (validPattern) {
try {
var indices=this.variableList.getSelectedIndices$();
var selected=Clazz.array(java.lang.Object, [indices.length]);
for (var j=0; j < indices.length; j++) {
selected[j]=this.displayedNames[indices[j]];
}
for (var displayedName, $displayedName = 0, $$displayedName = selected; $displayedName<$$displayedName.length&&((displayedName=($$displayedName[$displayedName])),1);$displayedName++) {
var name=this.realNames.get$O(displayedName.toString());
p$1.setFormatPattern$S$S.apply(this, [name, pattern]);
}
this.patternField.setText$S(pattern);
this.prevPattern=pattern;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.patternField.setText$S(this.prevPattern);
} else {
throw ex;
}
}
} else {
this.patternField.setText$S(this.prevPattern);
}var track=$I$(14).getTrack$I(this.trackID);
if (track == null ) {
p$1.showNumberFormatAndSample$S$Z.apply(this, [pattern, false]);
} else p$1.showNumberFormatAndSample$IA.apply(this, [this.variableList.getSelectedIndices$()]);
}, p$1);

Clazz.newMeth(C$, 'getCurrentDimensions',  function () {
var track=$I$(14).getTrack$I(this.trackID);
if (track == null ) return Clazz.array(String, [0]);
var dimensions=Clazz.new_($I$(10,1));
var indices=this.variableList.getSelectedIndices$();
var selected=Clazz.array(java.lang.Object, [indices.length]);
for (var j=0; j < indices.length; j++) {
selected[j]=this.displayedNames[indices[j]];
}
for (var displayedName, $displayedName = 0, $$displayedName = selected; $displayedName<$$displayedName.length&&((displayedName=($$displayedName[$displayedName])),1);$displayedName++) {
var name=this.realNames.get$O(displayedName.toString());
var dim=$I$(14).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, name);
if (dim != null ) {
dimensions.add$O(dim);
}}
return dimensions.toArray$OA(Clazz.array(String, [dimensions.size$()]));
}, p$1);

Clazz.newMeth(C$, 'getDisplayNames$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (track == null  || track.tp == null  ) return Clazz.new_($I$(15,1));
var names=Clazz.new_($I$(15,1));
var vars=track.getFormatVariables$();
if (vars.length > 0) {
for (var name, $name = 0, $$name = vars; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (!"I".equals$O($I$(14).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, name))) {
names.add$O(name);
}}
var data=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(track.tp);
for (var i=0, n=data.getDatasetsRaw$().size$(); i < n; i++) {
var dataset=data.getDataset$I(i);
if (!(Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction"))) continue;
names.add$O(dataset.getYColumnName$());
}
}return names;
}, 1);

Clazz.newMeth(C$, 'getDisplayName$S$java_util_ArrayList$java_util_Map',  function ($var, displayNames, map) {
if (displayNames.contains$O($var)) return $var;
for (var name, $name = map.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var vars=map.get$O(name);
if (C$.has$SA$S(vars, $var)) return name;
}
return $var;
}, 1);

Clazz.newMeth(C$, 'has$SA$S',  function (a, v) {
for (var i=a.length; --i >= 0; ) if (a[i].equals$O(v)) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'setTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (track == null ) {
p$1.showNumberFormatAndSample$S$Z.apply(this, ["", false]);
p$1.refreshGUI.apply(this, []);
return;
}this.trackID=track.getID$();
var names=C$.getDisplayNames$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var selected=this.trackSelectedVariables.get$O(Integer.valueOf$I(this.trackID));
p$1.setVariables$org_opensourcephysics_cabrillo_tracker_TTrack$java_util_ArrayList$SA.apply(this, [track, names, selected == null  ? Clazz.array(String, [0]) : selected]);
}, p$1);

Clazz.newMeth(C$, 'savePrevious',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
$I$(14).savePatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
this.prevTrackPatterns.clear$();
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
for (var next, $next = panel.getTracksTemp$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var patterns=Clazz.new_($I$(5,1));
for (var name, $name = $I$(14).getAllVariables$I(next.ttype).iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
patterns.put$O$O(name, next.getVarFormatPattern$S(name));
}
this.prevTrackPatterns.put$O$O(next, patterns);
}
panel.clearTemp$();
this.prevAnglesInRadians=trackerPanel.isAnglesInRadians$();
this.prevDecimalSeparator=$I$(16).getPreferredDecimalSeparator$();
this.formatsChanged=false;
}, p$1);

Clazz.newMeth(C$, 'setFormatPattern$S$S',  function (displayName, pattern) {
var wasChanged=this.formatsChanged;
var track=$I$(14).getTrack$I(this.trackID);
if (this.dimensionButton.isSelected$()) {
var dimensions=$I$(14).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, displayName);
var known=Clazz.new_($I$(17,1));
if (dimensions != null ) {
var tracks=track.tp.getTracksTemp$();
for (var t, $t = tracks.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if (known.get$I(t.ttype)) continue;
known.set$I(t.ttype);
var patterns=track.tp.getFormatPatterns$I(t.ttype);
for (var nextName, $nextName = patterns.keySet$().iterator$(); $nextName.hasNext$()&&((nextName=($nextName.next$())),1);) {
if (dimensions.equals$O($I$(14).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(t, nextName))) {
if (!pattern.equals$O(patterns.get$O(nextName))) {
patterns.put$O$O(nextName, pattern);
this.formatsChanged=true;
}}}
}
for (var t, $t = tracks.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
var trackChanged=false;
for (var nextDisplayName, $nextDisplayName = C$.getDisplayNames$org_opensourcephysics_cabrillo_tracker_TTrack(track).iterator$(); $nextDisplayName.hasNext$()&&((nextDisplayName=($nextDisplayName.next$())),1);) {
if (dimensions.equals$O($I$(14).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, nextDisplayName))) {
if (t.setFormatPattern$S$S(nextDisplayName, pattern)) {
trackChanged=true;
}}}
if (trackChanged) {
this.formatsChanged=true;
}}
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.clearTemp$();
} else {
if (track.setFormatPattern$S$S(displayName, pattern)) {
this.formatsChanged=true;
}var tracks=track.tp.getTracks$();
for (var t, $t = tracks.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
for (var $var, $$var = C$.getDisplayNames$org_opensourcephysics_cabrillo_tracker_TTrack(t).iterator$(); $$var.hasNext$()&&(($var=($$var.next$())),1);) {
if ($var.equals$O(displayName) && $I$(14).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(t, displayName) == null  ) {
if (t.setFormatPattern$S$S(displayName, pattern)) {
this.formatsChanged=true;
}}}
}
}} else if (this.trackTypeButton.isSelected$()) {
var trackType=track.getBaseType$();
var tracks=track.tp.getTracks$();
for (var t, $t = tracks.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if (t.getBaseType$() != trackType) continue;
if (t.setFormatPattern$S$S(displayName, pattern)) {
this.formatsChanged=true;
}}
var patterns=track.tp.getFormatPatterns$I(track.ttype);
patterns.put$O$O(displayName, pattern);
} else if (track.setFormatPattern$S$S(displayName, pattern)) {
this.formatsChanged=true;
}if (!wasChanged && this.formatsChanged ) {
p$1.refreshGUI.apply(this, []);
}if (this.formatsChanged) track.firePropertyChange$S$O$O("format", null, null);
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(6,"setFonts$O$I",[this, $I$(6).getLevel$()]);
var f=$I$(6).getFactor$();
var dim=Clazz.new_([((C$.scrollerDimension.width * f)|0), ((C$.scrollerDimension.height * f)|0)],$I$(2,1).c$$I$I);
this.variableScroller.setPreferredSize$java_awt_Dimension(dim);
p$1.refreshDropdown.apply(this, []);
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18,1)));
this.testFormat=$I$(19).getNumberInstance$();
this.closeButton=Clazz.new_($I$(20,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.NumberFormatDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [false]);
});
})()
), Clazz.new_(P$.NumberFormatDialog$3.$init$,[this, null])));
this.revertButton=Clazz.new_($I$(20,1));
var resetAction=((P$.NumberFormatDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=$I$(14).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].trackID);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].panelID);
$I$(14).restorePatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var tracks=track.tp.getTracks$();
for (var next, $next = tracks.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var patterns=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevTrackPatterns.get$O(next);
if (patterns != null ) {
var fireEvent=false;
var names=$I$(14).getAllVariables$I(next.ttype);
for (var name, $name = names.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
fireEvent=next.setFormatPattern$S$S(name, patterns.get$O(name)) || fireEvent ;
if (fireEvent) {
next.firePropertyChange$S$O$O("data", null, null);
}}
}}
$I$(16).setPreferredDecimalSeparator$S(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevDecimalSeparator);
track.tp.anglesInRadians=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevAnglesInRadians;
p$1.showNumberFormatAndSample$IA.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.getSelectedIndices$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevPattern="";
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].formatsChanged=false;
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], []);
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.NumberFormatDialog$4));
this.revertButton.addActionListener$java_awt_event_ActionListener(resetAction);
this.helpButton=Clazz.new_($I$(20,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.NumberFormatDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab="      ";
var nl=System.getProperty$S$S("line.separator", "/n");
$I$(22,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], $I$(23).getString$S("DataTable.NumberFormat.Help.Message1") + nl + tab + $I$(23).getString$S("DataTable.NumberFormat.Help.Message2") + nl + tab + $I$(23).getString$S("DataTable.NumberFormat.Help.Message3") + nl + tab + $I$(23).getString$S("DataTable.NumberFormat.Help.Message4") + nl + tab + $I$(23).getString$S("DataTable.NumberFormat.Help.Message5") + nl + nl + $I$(23).getString$S("DataTable.NumberFormat.Help.Message6") + " PI." + nl + nl + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.1") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.2") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.3") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.4") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.5") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.6") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.7") + nl + tab + $I$(1).getString$S("NumberFormatSetter.Help.Dimensions.8") + nl , $I$(23).getString$S("DataTable.NumberFormat.Help.Title"), 1]);
});
})()
), Clazz.new_(P$.NumberFormatDialog$5.$init$,[this, null])));
this.trackDropdown=((P$.NumberFormatDialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height-=1;
return dim;
});
})()
), Clazz.new_($I$(24,1),[this, null],P$.NumberFormatDialog$6));
this.trackDropdown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(25,1)));
this.trackDropdown.addActionListener$java_awt_event_ActionListener(((P$.NumberFormatDialog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ("refresh".equals$O(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].trackDropdown.getName$())) return;
var item=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].trackDropdown.getSelectedItem$();
if (item != null ) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].panelID);
var t=trackerPanel.getTrackByName$Class$S(Clazz.getClass($I$(14)), item[1]);
if (t != null ) {
p$1.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [t]);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], []);
}}});
})()
), Clazz.new_(P$.NumberFormatDialog$7.$init$,[this, null])));
this.patternLabel=Clazz.new_($I$(26,1));
this.sampleLabel=Clazz.new_($I$(26,1));
this.patternField=Clazz.new_($I$(27,1).c$$I,[6]);
this.patternField.setAction$javax_swing_Action(((P$.NumberFormatDialog$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.applyPattern$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.getText$()]);
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.NumberFormatDialog$8)));
this.patternField.addKeyListener$java_awt_event_KeyListener(((P$.NumberFormatDialog$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var revert=e.getKeyCode$() != 10 && e.getKeyCode$() != 48  && e.getKeyCode$() != 69  && e.getKeyCode$() != 39  && e.getKeyCode$() != 37  && e.getKeyCode$() != 8  && e.getKeyCode$() != 127  && e.getKeyCode$() != 46  && e.getKeyCode$() != 44 ;
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.setBackground$java_awt_Color($I$(28).white);
if ($I$(14).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].trackID) != null ) {
p$1.showNumberFormatAndSample$IA.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.getSelectedIndices$()]);
} else {
p$1.showNumberFormatAndSample$S$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.getText$(), false]);
}} else {
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.setBackground$java_awt_Color($I$(28).yellow);
var runner=((P$.NumberFormatDialog$9$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$9$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.revert) this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.setText$S(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevPattern);
p$1.applyPattern$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.getText$()]);
});
})()
), Clazz.new_(P$.NumberFormatDialog$9$1.$init$,[this, {revert:revert}]));
$I$(29).invokeLater$Runnable(runner);
}});
})()
), Clazz.new_($I$(30,1),[this, null],P$.NumberFormatDialog$9)));
this.patternField.addFocusListener$java_awt_event_FocusListener(((P$.NumberFormatDialog$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.getBackground$() === $I$(28).yellow ) {
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.setBackground$java_awt_Color($I$(28).white);
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].patternField.getAction$().actionPerformed$java_awt_event_ActionEvent(null);
}});
})()
), Clazz.new_($I$(31,1),[this, null],P$.NumberFormatDialog$10)));
this.sampleField=Clazz.new_($I$(32,1).c$$I,[6]);
this.sampleField.setEditable$Z(false);
this.variableScroller=Clazz.new_($I$(33,1));
this.variableScroller.setPreferredSize$java_awt_Dimension(C$.scrollerDimension);
this.trackOnlyButton=Clazz.new_($I$(34,1));
this.trackTypeButton=Clazz.new_($I$(34,1));
this.dimensionButton=Clazz.new_($I$(34,1));
var group=Clazz.new_($I$(35,1));
group.add$javax_swing_AbstractButton(this.trackOnlyButton);
group.add$javax_swing_AbstractButton(this.trackTypeButton);
group.add$javax_swing_AbstractButton(this.dimensionButton);
this.trackOnlyButton.setSelected$Z(true);
var decimalSeparatorAction=((P$.NumberFormatDialog$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberFormatDialog$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var separator;
if (this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].periodDecimalButton.isSelected$()) {
separator=String.valueOf$C(".");
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].commaDecimalButton.isSelected$()) {
separator=String.valueOf$C(",");
} else {
separator=null;
}$I$(16).setPreferredDecimalSeparator$S(separator);
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].sampleField.refreshDecimalSeparators$Z(true);
p$1.showNumberFormatAndSample$IA.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], [this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].variableList.getSelectedIndices$()]);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].panelID);
trackerPanel.refreshDecimalSeparators$();
if ((this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevDecimalSeparator != null  && !this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevDecimalSeparator.equals$O(separator) ) || (separator != null  && !separator.equals$O(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].prevDecimalSeparator) ) ) {
this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'].formatsChanged=true;
}p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.NumberFormatDialog'], []);
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.NumberFormatDialog$11));
this.defaultDecimalButton=Clazz.new_($I$(34,1));
this.defaultDecimalButton.addActionListener$java_awt_event_ActionListener(decimalSeparatorAction);
this.periodDecimalButton=Clazz.new_($I$(34,1));
this.periodDecimalButton.addActionListener$java_awt_event_ActionListener(decimalSeparatorAction);
this.commaDecimalButton=Clazz.new_($I$(34,1));
this.commaDecimalButton.addActionListener$java_awt_event_ActionListener(decimalSeparatorAction);
group=Clazz.new_($I$(35,1));
group.add$javax_swing_AbstractButton(this.defaultDecimalButton);
group.add$javax_swing_AbstractButton(this.periodDecimalButton);
group.add$javax_swing_AbstractButton(this.commaDecimalButton);
this.variablesBorder=$I$(36,"createTitledBorder$S",[$I$(1).getString$S("NumberFormatSetter.ApplyToVariables.Text")]);
this.applyToBorder=$I$(36,"createTitledBorder$S",[$I$(1).getString$S("NumberFormatSetter.TitledBorder.ApplyTo.Text")]);
this.decimalSeparatorBorder=$I$(36,"createTitledBorder$S",[$I$(1).getString$S("NumberFormatSetter.TitledBorder.DecimalSeparator.Text")]);
var formatPanel=Clazz.new_([Clazz.new_($I$(38,1))],$I$(37,1).c$$java_awt_LayoutManager);
var patternPanel=Clazz.new_($I$(37,1));
patternPanel.add$java_awt_Component(this.patternLabel);
patternPanel.add$java_awt_Component(this.patternField);
formatPanel.add$java_awt_Component(patternPanel);
var samplePanel=Clazz.new_($I$(37,1));
samplePanel.add$java_awt_Component(this.sampleLabel);
samplePanel.add$java_awt_Component(this.sampleField);
formatPanel.add$java_awt_Component(samplePanel);
this.add$java_awt_Component$O(formatPanel, "North");
this.variablePanel=Clazz.new_([Clazz.new_($I$(18,1))],$I$(37,1).c$$java_awt_LayoutManager);
this.variablePanel.setBorder$javax_swing_border_Border(this.variablesBorder);
var dropdownPanel=Clazz.new_($I$(37,1));
dropdownPanel.add$java_awt_Component(this.trackDropdown);
this.variablePanel.add$java_awt_Component$O(dropdownPanel, "North");
this.variablePanel.add$java_awt_Component$O(this.variableScroller, "Center");
this.add$java_awt_Component$O(this.variablePanel, "Center");
var south=Clazz.new_([Clazz.new_($I$(18,1))],$I$(37,1).c$$java_awt_LayoutManager);
this.add$java_awt_Component$O(south, "South");
this.applyToPanel=Clazz.new_($I$(37,1));
this.applyToPanel.setBorder$javax_swing_border_Border(this.applyToBorder);
var box=$I$(39).createVerticalBox$();
box.add$java_awt_Component(this.trackOnlyButton);
box.add$java_awt_Component(this.trackTypeButton);
box.add$java_awt_Component(this.dimensionButton);
this.applyToPanel.add$java_awt_Component(box);
south.add$java_awt_Component$O(this.applyToPanel, "North");
this.decimalSeparatorPanel=Clazz.new_($I$(37,1));
this.decimalSeparatorPanel.setBorder$javax_swing_border_Border(this.decimalSeparatorBorder);
this.decimalSeparatorPanel.add$java_awt_Component(this.defaultDecimalButton);
this.decimalSeparatorPanel.add$java_awt_Component(this.commaDecimalButton);
this.decimalSeparatorPanel.add$java_awt_Component(this.periodDecimalButton);
south.add$java_awt_Component$O(this.decimalSeparatorPanel, "Center");
var buttonPanel=Clazz.new_($I$(37,1));
buttonPanel.add$java_awt_Component(this.helpButton);
buttonPanel.add$java_awt_Component(this.revertButton);
buttonPanel.add$java_awt_Component(this.closeButton);
south.add$java_awt_Component$O(buttonPanel, "South");
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'refreshGUI',  function () {
this.setTitle$S($I$(1).getString$S("NumberFormatSetter.Title"));
C$.noPattern=$I$(1).getString$S("NumberFormatSetter.NoPattern");
C$.mixedPattern=$I$(1).getString$S("NumberFormatSetter.MixedPattern");
this.closeButton.setText$S($I$(23).getString$S("GUIUtils.Ok"));
this.revertButton.setText$S($I$(1).getString$S("NumberFormatSetter.Button.Revert"));
this.revertButton.setEnabled$Z(this.formatsChanged);
this.helpButton.setText$S($I$(23).getString$S("GUIUtils.Help"));
this.patternLabel.setText$S($I$(23).getString$S("DataTable.NumberFormat.Dialog.Label.Format"));
this.sampleLabel.setText$S($I$(23).getString$S("DataTable.NumberFormat.Dialog.Label.Sample"));
this.defaultDecimalButton.setText$S($I$(1).getString$S("NumberFormatSetter.Button.DecimalSeparator.Default"));
this.periodDecimalButton.setText$S($I$(1).getString$S("NumberFormatSetter.Button.DecimalSeparator.Period"));
this.commaDecimalButton.setText$S($I$(1).getString$S("NumberFormatSetter.Button.DecimalSeparator.Comma"));
this.defaultDecimalButton.setSelected$Z($I$(16).getPreferredDecimalSeparator$() == null );
this.periodDecimalButton.setSelected$Z(String.valueOf$C(".").equals$O($I$(16).getPreferredDecimalSeparator$()));
this.commaDecimalButton.setSelected$Z(String.valueOf$C(",").equals$O($I$(16).getPreferredDecimalSeparator$()));
var track=$I$(14).getTrack$I(this.trackID);
p$1.refreshDropdown.apply(this, []);
var trackName=track == null  ? "" : track.getName$();
var trackType=track == null  ? null : C$.getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var trackTypeName=trackType == null  ? "" : trackType;
var s=$I$(1).getString$S("NumberFormatSetter.Button.ApplyToTrackOnly.Text");
this.trackOnlyButton.setText$S(s + (track == null  ? "" : " (" + trackName + ")" ));
s=$I$(1).getString$S("NumberFormatSetter.Button.ApplyToTrackType.Text");
this.trackTypeButton.setText$S(s + " " + trackTypeName );
s=$I$(1).getString$S("NumberFormatSetter.Button.ApplyToDimension.Text");
var dimensions=p$1.getCurrentDimensions.apply(this, []);
if (dimensions.length == 0) {
this.dimensionButton.setText$S(s);
} else if (dimensions.length == 1 && !"".equals$O(dimensions[0]) ) {
this.dimensionButton.setText$S(s + " \"" + dimensions[0] + "\"" );
} else {
var dim=dimensions[0];
for (var i=1; i < dimensions.length; i++) {
if ((dim + ", " + dimensions[i] ).length$() > 7) {
dim+=", " + $I$(1).getString$S("NumberFormatSetter.DimensionList.More");
break;
}dim+=", " + dimensions[i];
}
this.dimensionButton.setText$S(s + " " + dim );
}this.trackOnlyButton.setEnabled$Z(track != null );
this.trackTypeButton.setEnabled$Z(track != null );
this.dimensionButton.setEnabled$Z(track != null );
this.variablesBorder.setTitle$S($I$(1).getString$S("NumberFormatSetter.ApplyToVariables.Text"));
this.applyToBorder.setTitle$S($I$(1).getString$S("NumberFormatSetter.TitledBorder.ApplyTo.Text"));
this.decimalSeparatorBorder.setTitle$S($I$(1).getString$S("NumberFormatSetter.TitledBorder.DecimalSeparator.Text"));
var dim=this.getSize$();
if (dim.width > this.getMinimumSize$().width) {
this.setSize$java_awt_Dimension(dim);
} else {
this.pack$();
}}, p$1);

Clazz.newMeth(C$, 'refreshDropdown',  function () {
var toSelect=null;
this.trackDropdown.setName$S("refresh");
this.trackDropdown.removeAllItems$();
var track=$I$(14).getTrack$I(this.trackID);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
for (var next, $next = trackerPanel.getTracksTemp$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var icon=next.getFootprint$().getIcon$I$I(21, 16);
var item=Clazz.array(java.lang.Object, -1, [icon, next.getName$()]);
this.trackDropdown.addItem$O(item);
if (next === track ) {
toSelect=item;
}}
trackerPanel.clearTemp$();
if (toSelect == null ) {
var emptyItem=Clazz.array(java.lang.Object, -1, [null, "           "]);
this.trackDropdown.insertItemAt$O$I(emptyItem, 0);
toSelect=emptyItem;
}this.trackDropdown.setSelectedItem$O(toSelect);
this.trackDropdown.setName$S(null);
}, p$1);

Clazz.newMeth(C$, 'showNumberFormatAndSample$IA',  function (selectedIndices) {
var track=$I$(14).getTrack$I(this.trackID);
if (selectedIndices == null  || selectedIndices.length == 0 ) {
p$1.showNumberFormatAndSample$S$Z.apply(this, ["", false]);
} else if (selectedIndices.length == 1) {
var name=this.realNames.get$O(this.displayedNames[selectedIndices[0]]);
var pattern=track.getVarFormatPattern$S(name);
var degrees=name.startsWith$S($I$(11).THETA) && !track.tp.isAnglesInRadians$() ;
p$1.showNumberFormatAndSample$S$Z.apply(this, [pattern, degrees]);
} else {
var name=this.realNames.get$O(this.displayedNames[selectedIndices[0]]);
var degrees=name.startsWith$S($I$(11).THETA) && !track.tp.isAnglesInRadians$() ;
var pattern=track.getVarFormatPattern$S(name);
if (degrees && (pattern == null  || "".equals$O(pattern) ) ) {
pattern="0.0";
}for (var i=1; i < selectedIndices.length; i++) {
name=this.realNames.get$O(this.displayedNames[selectedIndices[i]]);
degrees=degrees && name.startsWith$S($I$(11).THETA) ;
var selectedPattern=track.getVarFormatPattern$S(name);
if (degrees && (selectedPattern == null  || "".equals$O(selectedPattern) ) ) {
selectedPattern="0.0";
}if (!pattern.equals$O(selectedPattern)) {
pattern=null;
break;
}}
if (degrees && "0.0".equals$O(pattern) ) {
pattern="";
}p$1.showNumberFormatAndSample$S$Z.apply(this, [pattern, degrees]);
}}, p$1);

Clazz.newMeth(C$, 'getSelectedVariables$IA',  function (selectedIndices) {
if (selectedIndices == null ) {
return Clazz.array(String, [0]);
}var selectedNames=Clazz.array(String, [selectedIndices.length]);
for (var i=0; i < selectedIndices.length; i++) {
selectedNames[i]=this.realNames.get$O(this.displayedNames[selectedIndices[i]]);
}
return selectedNames;
}, p$1);

Clazz.newMeth(C$, 'showNumberFormatAndSample$S$Z',  function (pattern, degrees) {
if (pattern == null ) {
this.sampleField.setText$S("");
this.patternField.setText$S(C$.mixedPattern);
return;
}var none=pattern.equals$O("") || pattern.equals$O(C$.noPattern) ;
this.sampleField.setFixedPattern$S(!none ? pattern : degrees ? "0.0" : null);
this.sampleField.setUnits$S(degrees ? "\u00b0" : null);
this.sampleField.setValue$D(degrees ? 180 : 3.141592653589793);
if (this.patternField.getBackground$().equals$O($I$(28).WHITE)) {
this.patternField.setText$S(none ? C$.noPattern : pattern);
}}, p$1);

Clazz.newMeth(C$, 'getTrackType$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
return track.getBaseType$();
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.setVisible$Z(false);
this.frame=null;
this.panelID=null;
});

C$.$static$=function(){C$.$static$=0;
C$.noPattern=$I$(1).getString$S("NumberFormatSetter.NoPattern");
C$.mixedPattern=$I$(1).getString$S("NumberFormatSetter.MixedPattern");
C$.scrollerDimension=Clazz.new_($I$(2,1).c$$I$I,[200, 60]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
