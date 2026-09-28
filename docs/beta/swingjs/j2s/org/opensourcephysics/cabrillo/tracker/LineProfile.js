(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack',['org.opensourcephysics.cabrillo.tracker.LineProfile','.FrameData'],'org.opensourcephysics.cabrillo.tracker.LineProfile','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.LineFootprint','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.media.core.IntegerField','java.awt.event.FocusAdapter','javax.swing.JCheckBoxMenuItem','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.Undo','javajs.async.AsyncDialog',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'org.opensourcephysics.cabrillo.tracker.LineProfileStep','javax.swing.SwingUtilities','org.opensourcephysics.display.Dataset','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.tools.FontSizer',['org.opensourcephysics.cabrillo.tracker.LineProfile','.FrameDataLoader'],['org.opensourcephysics.cabrillo.tracker.LineProfile','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LineProfile", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack', 'org.opensourcephysics.cabrillo.tracker.MarkingRequired');
C$.$classes$=[['Loader',8],['FrameData',10],['FrameDataLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedLine=true;
this.spread=0;
this.isHorizontal=true;
this.showTimeData=false;
this.datasetIndex=-1;
},1);

C$.$fields$=[['Z',['fixedLine','isHorizontal','loading','showTimeData','updating'],'I',['spread','datasetIndex'],'O',['fixedLineItem','javax.swing.JCheckBoxMenuItem','orientationMenu','javax.swing.JMenu','horizOrientationItem','javax.swing.JMenuItem','+xaxisOrientationItem','spreadLabel','javax.swing.JLabel','spreadField','org.opensourcephysics.media.core.IntegerField','unmarkedLabel','javax.swing.JLabel']]
,['O',['dataVariables','String[]','+fieldVariables','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getFormatVariables$',  function () {
return C$.formatVariables;
});

Clazz.newMeth(C$, 'getFormatMap$',  function () {
return C$.formatMap;
});

Clazz.newMeth(C$, 'getFormatDescMap$',  function () {
return C$.formatDescriptionMap;
});

Clazz.newMeth(C$, 'getBaseType$',  function () {
return "LineProfile";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (vars[0].equals$O(variable) || vars[7].equals$O(variable) ) {
return "I";
}if (names[0].equals$O(variable) || vars[1].equals$O(variable) || vars[2].equals$O(variable)  ) {
return "L";
}if (names[1].equals$O(variable) || names[2].equals$O(variable) || vars[3].equals$O(variable) || vars[4].equals$O(variable) || vars[5].equals$O(variable) || vars[6].equals$O(variable)  ) {
return "C";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[3]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(7), -1, [$I$(7).magenta]);
this.setName$S($I$(6).getString$S("LineProfile.New.Name"));
this.setProperty$S$O("highlights", "false");
this.setProperty$S$O("xVarPlot0", C$.dataVariables[1]);
this.setProperty$S$O("yVarPlot0", C$.dataVariables[6]);
this.setProperty$S$O("pointsPlot0", "false");
this.setProperty$S$O("yMinPlot0", Double.valueOf$D(0.0));
this.setProperty$S$O("yMaxPlot0", Double.valueOf$D(255.0));
this.setProperty$S$O("tableVar0", "0");
this.setProperty$S$O("tableVar1", "1");
this.setProperty$S$O("tableVar2", "5");
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(8), -1, [$I$(9).getFootprint$S("Footprint.Outline"), $I$(9).getFootprint$S("Footprint.BoldOutline")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.partName=$I$(6).getString$S("TTrack.Selected.Hint");
this.hint=$I$(6).getString$S("LineProfile.Unmarked.Hint");
this.spreadLabel=Clazz.new_($I$(10,1));
var empty=$I$(11).createEmptyBorder$I$I$I$I(0, 4, 0, 2);
this.spreadLabel.setBorder$javax_swing_border_Border(empty);
this.spreadField=Clazz.new_($I$(12,1).c$$I,[3]);
this.spreadField.addActionListener$java_awt_event_ActionListener(((P$.LineProfile$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LineProfile$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].setSpread$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], [this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.getIntValue$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.setIntValue$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].getSpread$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], []));
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.selectAll$();
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.requestFocusInWindow$();
this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["data", null, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile']]);
});
})()
), Clazz.new_(P$.LineProfile$1.$init$,[this, null])));
this.spreadField.addFocusListener$java_awt_event_FocusListener(((P$.LineProfile$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LineProfile$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].setSpread$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], [this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.getIntValue$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].spreadField.setIntValue$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].getSpread$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], []));
this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["data", null, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile']]);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.LineProfile$2)));
this.spreadField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.spreadField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.fixedLineItem=Clazz.new_([$I$(6).getString$S("LineProfile.MenuItem.Fixed")],$I$(14,1).c$$S);
this.fixedLineItem.addItemListener$java_awt_event_ItemListener(((P$.LineProfile$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LineProfile$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].setFixed$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], [this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].fixedLineItem.isSelected$()]);
});
})()
), Clazz.new_(P$.LineProfile$3.$init$,[this, null])));
this.orientationMenu=Clazz.new_([$I$(6).getString$S("LineProfile.Menu.Orientation")],$I$(15,1).c$$S);
var group=Clazz.new_($I$(16,1));
this.horizOrientationItem=Clazz.new_([$I$(6).getString$S("LineProfile.MenuItem.Horizontal")],$I$(17,1).c$$S);
this.horizOrientationItem.setSelected$Z(true);
this.horizOrientationItem.addItemListener$java_awt_event_ItemListener(((P$.LineProfile$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LineProfile$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].tp == null ) return;
var control=Clazz.new_($I$(18,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile']]);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].isHorizontal=this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].horizOrientationItem.isSelected$();
if (!this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].steps.isEmpty$()) {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].steps.getStep$I(n);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].refreshStep$org_opensourcephysics_cabrillo_tracker_LineProfileStep.apply(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], [step]);
$I$(19).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].tp);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].loading) $I$(20).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'], control);
}this.b$['org.opensourcephysics.cabrillo.tracker.LineProfile'].tp.getToolBar$Z(true).refresh$S("LineProfile");
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].invalidateData$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [null]);
});
})()
), Clazz.new_(P$.LineProfile$4.$init$,[this, null])));
this.orientationMenu.add$javax_swing_JMenuItem(this.horizOrientationItem);
group.add$javax_swing_AbstractButton(this.horizOrientationItem);
this.xaxisOrientationItem=Clazz.new_([$I$(6).getString$S("LineProfile.MenuItem.XAxis")],$I$(17,1).c$$S);
this.orientationMenu.add$javax_swing_JMenuItem(this.xaxisOrientationItem);
group.add$javax_swing_AbstractButton(this.xaxisOrientationItem);
this.unmarkedLabel=Clazz.new_($I$(10,1));
this.unmarkedLabel.setForeground$java_awt_Color($I$(7).red.darker$());
}, 1);

Clazz.newMeth(C$, 'setFixed$Z',  function (fixed) {
if (fixed == this.fixedLine ) return;
var tableViews=this.getTableViews$();
if (this.fixedLine && !fixed ) {
var hasTimeView=false;
for (var i=0; i < tableViews.size$(); i++) {
hasTimeView=hasTimeView || tableViews.get$I(i).myDatasetIndex > -1 ;
}
if (hasTimeView) {
var ok=Clazz.array(Boolean.TYPE, -1, [true]);
Clazz.new_($I$(21,1)).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, $I$(6).getString$S("TableTrackView.Dialog.TimeDataUnsupported.Message1") + "\n" + $I$(6).getString$S("TableTrackView.Dialog.TimeDataUnsupported.Message2") , $I$(6).getString$S("TableTrackView.Dialog.TimeDataUnsupported.Title"), 0, ((P$.LineProfile$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LineProfile$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
var sel=ev.getID$.apply(ev, []);
switch (sel) {
case 0:
for (var i=0; i < this.$finals$.tableViews.size$.apply(this.$finals$.tableViews, []); i++) {
if (this.$finals$.tableViews.get$I.apply(this.$finals$.tableViews, [i]).myDatasetIndex > -1) this.$finals$.tableViews.get$I.apply(this.$finals$.tableViews, [i]).multiframeCheckbox.doClick$I.apply(this.$finals$.tableViews.get$I.apply(this.$finals$.tableViews, [i]).multiframeCheckbox, [0]);
}
break;
case 1:
this.$finals$.ok[0]=false;
}
});
})()
), Clazz.new_(P$.LineProfile$lambda1.$init$,[this, {tableViews:tableViews,ok:ok}])));
if (!ok[0]) return;
}}if (this.steps.isEmpty$()) {
this.fixedLine=fixed;
} else {
var control=Clazz.new_($I$(18,1).c$$O,[this]);
this.fixedLine=fixed;
if (this.tp != null ) {
this.tp.changed=true;
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) {
this.steps=Clazz.new_([this, null, this.getStep$I(n)],$I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_Step);
$I$(19).repaintT$java_awt_Component(this.tp);
}}if (fixed) {
this.keyFrames.clear$();
this.keyFrames.add$O(Integer.valueOf$I(0));
}if (!this.loading) $I$(20).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.repaint$();
}for (var i=0; i < tableViews.size$(); i++) {
tableViews.get$I(i).refreshGUI$();
}
});

Clazz.newMeth(C$, 'isFixed$',  function () {
return this.fixedLine;
});

Clazz.newMeth(C$, 'setSpread$I',  function (spread) {
if (this.isLocked$() || this.spread == spread ) return;
var control=Clazz.new_($I$(18,1).c$$O,[this]);
spread=Math.max(spread, 0);
this.spread=Math.min(spread, 100);
if (!this.loading) $I$(20).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.clearStepData$();
this.repaint$();
this.invalidateData$O(Boolean.FALSE);
if (this.tp != null ) this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(this.tp.getFrameNumber$()));
});

Clazz.newMeth(C$, 'getSpread$',  function () {
return this.spread;
});

Clazz.newMeth(C$, 'isMarkByDefault$',  function () {
return this.requiresMarking$() || C$.superclazz.prototype.isMarkByDefault$.apply(this, []) ;
});

Clazz.newMeth(C$, 'requiresMarking$',  function () {
return this.getStep$I(0) == null ;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
return this.createStep$I$D$D$D$D(n, x, y, x, y);
});

Clazz.newMeth(C$, 'createStep$I$D$D$D$D',  function (n, x1, y1, x2, y2) {
if (this.isLocked$()) return null;
var frame=this.isFixed$() ? 0 : n;
var step=this.steps.getStep$I(frame);
if (step == null ) {
this.keyFrames.add$O(Integer.valueOf$I(0));
var xx=x2;
var yy=y2;
if (x1 == x2  && y1 == y2  ) {
if (this.tp != null ) {
var theta=-this.tp.getCoords$().getAngle$I(n);
if (this.isHorizontal) theta=0;
xx=x1 + 50 * Math.cos(theta);
yy=y1 + 50 * Math.sin(theta);
} else xx=x1 + 50;
}step=Clazz.new_($I$(23,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfile$I$D$D$D$D,[this, 0, x1, y1, xx, yy]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
if (x1 == x2  && y1 == y2  ) {
step=this.getStep$I(frame);
step.getLineEnd1$().setLocation$D$D(x2, y2);
if (this.tp != null ) {
step=this.getStep$I(n);
step.getLineEnd0$().setTrackEditTrigger$Z(false);
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(step.getDefaultPoint$());
}}} else {
this.keyFrames.add$O(Integer.valueOf$I(frame));
step.getLineEnd0$().setLocation$D$D(x1, y1);
step.getLineEnd1$().setLocation$D$D(x2, y2);
}return this.getStep$I(n);
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
var step=this.steps.getStep$I(n);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_LineProfileStep(step);
return step;
});

Clazz.newMeth(C$, 'isStepComplete$I',  function (n) {
return this.getStep$I(n) != null ;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(23).getLength$();
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 2;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.isVisible$() || this.isLocked$()  ) return null;
var trackerPanel=panel;
var ia=null;
var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null  && trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n) ) ia=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (ia == null ) {
this.partName=$I$(6).getString$S("TTrack.Selected.Hint");
if (step == null ) {
this.hint=$I$(6).getString$S("LineProfile.Unmarked.Hint");
} else this.hint=$I$(6).getString$S("LineProfile.Hint");
if (trackerPanel.getVideo$() == null ) {
this.hint+=", " + $I$(6).getString$S("TTrack.ImportVideo.Hint");
}return null;
}if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.LineEnd")) {
this.partName=$I$(6).getString$S("LineProfile.End.Name");
this.hint=$I$(6).getString$S("LineProfile.End.Hint");
} else if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.Handle")) {
this.partName=$I$(6).getString$S("LineProfile.Handle.Name");
this.hint=$I$(6).getString$S("LineProfile.Handle.Hint");
}return ia;
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
if (this.refreshDataLater || trackerPanel == null   || data == null  ) return;
if (this.isMultipleFrames$()) {
p$1.refreshMultiFrameData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [data, trackerPanel]);
return;
}var count=7;
var validData;
var video=trackerPanel.getVideo$();
if (video == null  || !video.isVisible$() ) {
validData=Clazz.array(Double.TYPE, [count + 1, 0]);
} else {
var step=this.getStep$I(trackerPanel.getPlayer$().getFrameNumber$());
if (step == null  || (validData=step.getProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel)) == null  ) {
if (step != null ) {
C$.delayedUpdate$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_LineProfile$org_opensourcephysics_media_core_Video(trackerPanel, this, video);
}validData=Clazz.array(Double.TYPE, [count + 1, 0]);
}}this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.dataVariables, "LineProfile.Data.Description.", validData, validData[0].length);
});

Clazz.newMeth(C$, 'delayedUpdate$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_LineProfile$org_opensourcephysics_media_core_Video',  function (panel, profile, video) {
if (!profile.updating) {
profile.updating=true;
$I$(24,"invokeLater$Runnable",[((P$.LineProfile$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LineProfile$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.video.invalidateVideoAndFilter$.apply(this.$finals$.video, []);
this.$finals$.profile.invalidateData$O.apply(this.$finals$.profile, [null]);
this.$finals$.panel.refreshTrackData$I.apply(this.$finals$.panel, [0]);
this.$finals$.profile.updating=false;
});
})()
), Clazz.new_(P$.LineProfile$lambda2.$init$,[this, {panel:panel,video:video,profile:profile}]))]);
}}, 1);

Clazz.newMeth(C$, 'clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I',  function (data, count, dataVariables, desc, validData, len) {
var v0=dataVariables[0];
if (data.getDataset$I(0).getColumnName$I(0).equals$O(v0) && data.getDataset$I(0).getColumnName$I(1).equals$O(dataVariables[1]) && data.getDatasetsRaw$().size$() == count  ) {
for (var i=0; i < count; i++) {
data.clear$I(i);
}
} else {
var n=data.getDatasetsRaw$().size$();
for (var i=n - 1; i >= count; i--) {
if (data.getDataset$I(i).getClass$() === Clazz.getClass($I$(25)) ) data.removeDataset$I(i);
}
for (var i=0; i < count; i++) {
data.clear$I(i);
if (data.getDataset$I(i).getClass$() === Clazz.getClass($I$(25)) ) data.setXYColumnNames$I$S$S(i, v0, dataVariables[i + 1]);
}
}this.dataDescriptions=Clazz.array(String, [count + 1]);
if (this.isMultipleFrames$()) {
this.dataDescriptions[0]=$I$(6).getString$S(desc + "0");
for (var i=1; i <= count; i++) {
this.dataDescriptions[i]=$I$(6,"getString$S",[desc + (this.datasetIndex + 1)]);
}
} else {
for (var i=0; i <= count; i++) {
this.dataDescriptions[i]=$I$(6).getString$S(desc + i);
}
}if (validData != null ) {
var t=validData[count];
for (var i=0; i < count; i++) {
data.getDataset$I(i).append$DA$DA$I(t, validData[i], len);
}
}});

Clazz.newMeth(C$, 'refreshMultiFrameData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
var count=0;
var collectedData=Clazz.new_($I$(26,1));
var times=Clazz.new_($I$(26,1));
var frames=Clazz.new_($I$(26,1));
var validData;
var varNames=Clazz.array(String, -1, ["n", "empty"]);
if (trackerPanel.getVideo$() == null  || !trackerPanel.getVideo$().isVisible$() ) {
validData=Clazz.array(Double.TYPE, [count + 1, 0]);
} else {
var player=trackerPanel.getPlayer$();
var clip=player.getVideoClip$();
var stepArray=this.getSteps$();
if (stepArray.length < trackerPanel.getFrameNumber$()) {
this.steps.setLength$I(trackerPanel.getFrameNumber$() + 1);
stepArray=this.getSteps$();
}var k=0;
for (var i=0; i < stepArray.length; i++) {
var step=stepArray[i];
if (step != null  && clip.includesFrame$I(step.n) ) {
var next=step.getProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (next != null  && next.length > this.datasetIndex ) {
collectedData.add$O(next[this.datasetIndex]);
if (k == 0) {
k=next[0].length;
count=next[this.datasetIndex].length;
} else {
count=Math.max(count, next[this.datasetIndex].length);
}var stepNumber=clip.frameToStep$I(i);
var t=player.getStepTime$I(stepNumber) / 1000.0;
times.add$O(Double.valueOf$D(t));
frames.add$O(Integer.valueOf$I(i));
}}}
if (collectedData.size$() > 0) {
var orig=collectedData.toArray$OA(Clazz.array(Double.TYPE, [collectedData.size$(), count]));
var rows=count;
var cols=orig.length;
validData=Clazz.array(Double.TYPE, [cols + 1, rows]);
varNames=Clazz.array(String, [cols + 1]);
varNames[0]="n";
for (var col=0; col < cols; col++) {
varNames[col + 1]=C$.dataVariables[this.datasetIndex + 1] + "_{ " + frames.get$I(col) + "}" ;
for (var row=0; row < rows; row++) {
validData[col][row]=row < orig[col].length ? orig[col][row] : NaN;
if (col == 0) validData[cols][row]=row;
}
}
count=cols;
} else validData=Clazz.array(Double.TYPE, [count + 1, 0]);
}this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, varNames, "LineProfile.Data.Description.", validData, validData[0].length);
}, p$1);

Clazz.newMeth(C$, 'getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (panel, datasetIndex) {
this.setDatasetIndex$I(datasetIndex);
return this.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
});

Clazz.newMeth(C$, 'setDatasetIndex$I',  function (index) {
if (index == this.datasetIndex) return;
this.datasetIndex=index;
this.invalidateData$O(Boolean.FALSE);
});

Clazz.newMeth(C$, 'isMultipleFrames$',  function () {
return (this.datasetIndex >= 0);
});

Clazz.newMeth(C$, 'clearStepData$',  function () {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) {
step.clearData$();
}}
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.fixedLineItem.setText$S($I$(6).getString$S("LineProfile.MenuItem.Fixed"));
this.fixedLineItem.setSelected$Z(this.isFixed$());
menu.remove$javax_swing_JMenuItem(this.deleteTrackItem);
$I$(27).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.orientationMenu);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.fixedLineItem);
if (trackerPanel.isEnabled$S("track.delete")) {
$I$(27).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
}return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
this.spreadLabel.setText$S($I$(6).getString$S("LineProfile.Label.Spread"));
list.add$O(this.spreadLabel);
this.spreadField.setIntValue$I(this.getSpread$());
this.spreadField.setEnabled$Z(!this.isLocked$());
list.add$O(this.spreadField);
if (this.getStep$I(0) == null ) {
list.add$O(this.stepSeparator);
this.unmarkedLabel.setText$S($I$(6).getString$S("LineProfile.Unmarked.Hint"));
list.add$O(this.unmarkedLabel);
}return list;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.unmarkedLabel, this.spreadLabel]);
$I$(28).setFonts$O$I(objectsToSize, level);
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.tp != null ) {
switch (e.getPropertyName$()) {
case "stepnumber":
this.invalidateData$O(Boolean.FALSE);
break;
case "image":
this.clearStepData$();
this.invalidateData$O(Boolean.FALSE);
this.firePropertyChange$java_beans_PropertyChangeEvent(e);
break;
case "transform":
if (!this.steps.isEmpty$()) {
var n=this.tp.getFrameNumber$();
var step=this.steps.getStep$I(n);
if (e.getNewValue$() == null ) {
for (var i=0; i < this.getSteps$().length; i++) {
if (this.getSteps$()[i] != null ) (this.getSteps$()[i]).clearData$();
}
} else step.clearData$();
this.refreshStep$org_opensourcephysics_cabrillo_tracker_LineProfileStep(step);
}break;
}
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(6).getString$S("LineProfile.Name");
});

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_LineProfileStep',  function (step) {
if (step == null ) return;
var key=0;
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) key=i;
}
var keyStep=this.steps.getStep$I(key);
var different=keyStep.getLineEnd0$().getX$() != step.getLineEnd0$().getX$()  || keyStep.getLineEnd0$().getY$() != step.getLineEnd0$().getY$()   || keyStep.getLineEnd1$().getX$() != step.getLineEnd1$().getX$()   || keyStep.getLineEnd1$().getY$() != step.getLineEnd1$().getY$()  ;
if (different) {
step.getLineEnd0$().setLocation$java_awt_geom_Point2D(keyStep.getLineEnd0$());
step.getLineEnd1$().setLocation$java_awt_geom_Point2D(keyStep.getLineEnd1$());
step.getHandle$().setLocation$java_awt_geom_Point2D(keyStep.getHandle$());
step.erase$();
}step.getLineEnd0$().setTrackEditTrigger$Z(true);
step.rotate$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(3)), Clazz.new_($I$(29,1))]);
return Clazz.new_($I$(30,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.dataVariables=Clazz.array(String, -1, ["n", "x", "y", "R", "G", "B", "luma", "pixels"]);
C$.fieldVariables=Clazz.array(String, [0]);
C$.formatVariables=Clazz.array(String, -1, ["t", "xy", "RGB", "luma"]);
C$.formatMap=Clazz.new_($I$(5,1));
C$.formatMap.put$O$O("t", Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O("xy", Clazz.array(String, -1, ["x", "y"]));
C$.formatMap.put$O$O("RGB", Clazz.array(String, -1, ["R", "G", "B"]));
C$.formatMap.put$O$O("luma", Clazz.array(String, -1, ["luma"]));
C$.formatDescriptionMap=Clazz.new_($I$(5,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(6).getString$S("PointMass.Data.Description.0"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(6).getString$S("PointMass.Position.Name"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[2], $I$(6).getString$S("LineProfile.Description.RGB"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[3], $I$(6).getString$S("LineProfile.Data.Brightness"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfile, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var profile=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$I("spread", profile.getSpread$());
control.setValue$S$Z("fixed", profile.isFixed$());
var steps=profile.getSteps$();
var count=steps.length;
if (profile.isFixed$()) count=1;
var data=Clazz.array($I$(3), [count]);
for (var n=0; n < count; n++) {
if (steps[n] == null  || !profile.keyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
data[n]=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep,[steps[n]]);
}
control.setValue$S$O("framedata", data);
control.setValue$S$Z("horizontal", profile.isHorizontal);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var profile=Clazz.new_($I$(4,1));
return profile;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var profile=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=profile.isLocked$();
profile.setLocked$Z(false);
profile.loading=true;
if (control.getPropertyNamesRaw$().contains$O("horizontal")) profile.isHorizontal=control.getBoolean$S("horizontal");
 else profile.isHorizontal=!control.getBoolean$S("rotates");
if (profile.isHorizontal) profile.horizOrientationItem.setSelected$Z(true);
 else profile.xaxisOrientationItem.setSelected$Z(true);
var i=control.getInt$S("spread");
if (i != -2147483648) {
profile.setSpread$I(i);
}if (control.getPropertyNamesRaw$().contains$O("fixed")) profile.fixedLine=control.getBoolean$S("fixed");
profile.keyFrames.clear$();
var data=control.getObject$S("framedata");
if (data != null  && data.length > 0 ) {
if (profile.fixedLine && data[0] != null  ) {
profile.createStep$I$D$D$D$D(0, data[0].data[0], data[0].data[1], data[0].data[2], data[0].data[3]);
} else for (var n=0; n < data.length; n++) {
if (data[n] != null ) {
profile.createStep$I$D$D$D$D(n, data[n].data[0], data[n].data[1], data[n].data[2], data[n].data[3]);
}}
}profile.spreadField.setIntValue$I(profile.getSpread$());
profile.setLocked$Z(locked);
profile.loading=false;
profile.repaint$();
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfile, "FrameData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.data=Clazz.array(Double.TYPE, [4]);
},1);

C$.$fields$=[['O',['data','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep',  function (step) {
;C$.$init$.apply(this);
this.data[0]=step.getLineEnd0$().x;
this.data[1]=step.getLineEnd0$().y;
this.data[2]=step.getLineEnd1$().x;
this.data[3]=step.getLineEnd1$().y;
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfile, "FrameDataLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$D("x1", data.data[0]);
control.setValue$S$D("y1", data.data[1]);
control.setValue$S$D("x2", data.data[2]);
control.setValue$S$D("y2", data.data[3]);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
if (control.getPropertyNamesRaw$().contains$O("x1")) {
data.data[0]=control.getDouble$S("x1");
data.data[1]=control.getDouble$S("y1");
data.data[2]=control.getDouble$S("x2");
data.data[3]=control.getDouble$S("y2");
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
