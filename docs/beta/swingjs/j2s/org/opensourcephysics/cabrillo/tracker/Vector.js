(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack',['org.opensourcephysics.cabrillo.tracker.Vector','.FrameData'],'org.opensourcephysics.cabrillo.tracker.Vector','org.opensourcephysics.cabrillo.tracker.Tracker','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JMenuItem','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.LineFootprint','javax.swing.AbstractAction','java.awt.event.FocusAdapter','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.VectorStep','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.media.core.NumberField',['org.opensourcephysics.cabrillo.tracker.Vector','.FrameDataLoader'],['org.opensourcephysics.cabrillo.tracker.Vector','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Vector", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack');
C$.$classes$=[['Loader',8],['FrameData',9],['FrameDataLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tailsToOriginItem=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['O',['tailsToOriginItem','javax.swing.JMenuItem','labelsVisibleItem','javax.swing.JCheckBoxMenuItem']]
,['O',['dataVariables','String[]','+formatVariables','+fieldVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList','visMap','java.util.Map']]]

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
return "Vector";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (vars[1].equals$O(variable) || vars[2].equals$O(variable) || vars[3].equals$O(variable) || vars[5].equals$O(variable) || vars[6].equals$O(variable) || names[1].equals$O(variable)  ) {
return "L";
}if (vars[7].equals$O(variable) || vars[8].equals$O(variable) ) {
return "I";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[9]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(9), -1, [$I$(9).magenta, $I$(9).cyan, $I$(9).blue, $I$(9).red]);
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(10), -1, [$I$(11).getFootprint$S("Footprint.BoldArrow"), $I$(11).getFootprint$S("Footprint.Arrow"), $I$(11).getFootprint$S("Footprint.BigArrow")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.setTrailVisible$Z(true);
this.setAutoAdvance$Z(true);
this.setName$S($I$(7).getString$S("Vector.New.Name"));
this.setProperty$S$O("xVarPlot0", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot0", C$.dataVariables[1]);
this.setProperty$S$O("xVarPlot1", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot1", C$.dataVariables[2]);
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("Vector.Unmarked.Hint");
this.magLabel.setText$S("mag");
var xyAction=((P$.Vector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setXYComponents.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Vector'], []);
(e.getSource$()).requestFocusInWindow$();
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.Vector$1));
var xyFocusListener=((P$.Vector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setXYComponents.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Vector'], []);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.Vector$2));
var magAngleAction=((P$.Vector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setMagnitudeAngle.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Vector'], []);
(e.getSource$()).requestFocusInWindow$();
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.Vector$3));
var magAngleFocusListener=((P$.Vector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setMagnitudeAngle.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Vector'], []);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.Vector$4));
this.xField.addActionListener$java_awt_event_ActionListener(xyAction);
this.yField.addActionListener$java_awt_event_ActionListener(xyAction);
this.xField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.yField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.magField.addActionListener$java_awt_event_ActionListener(magAngleAction);
this.angleField.addActionListener$java_awt_event_ActionListener(magAngleAction);
this.magField.addFocusListener$java_awt_event_FocusListener(magAngleFocusListener);
this.angleField.addFocusListener$java_awt_event_FocusListener(magAngleFocusListener);
this.tailsToOriginItem.addActionListener$java_awt_event_ActionListener(((P$.Vector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p=this.b$['org.opensourcephysics.cabrillo.tracker.Vector'].tp.getSnapPoint$();
var steps=this.b$['org.opensourcephysics.cabrillo.tracker.Vector'].getSteps$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Vector'], []);
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) {
var v=steps[i];
if (v.chain != null ) v.chain.clear$();
v.attach$org_opensourcephysics_media_core_TPoint(null);
v.attach$org_opensourcephysics_media_core_TPoint(p);
}}
this.b$['org.opensourcephysics.cabrillo.tracker.Vector'].tp.repaint$();
});
})()
), Clazz.new_(P$.Vector$5.$init$,[this, null])));
this.labelsVisibleItem=Clazz.new_([$I$(7).getString$S("Vector.MenuItem.Label")],$I$(14,1).c$$S);
this.labelsVisibleItem.setSelected$Z(true);
this.labelsVisibleItem.addItemListener$java_awt_event_ItemListener(((P$.Vector$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var steps=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getSteps$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) {
var step=steps[i];
step.setLabelVisible$Z(this.b$['org.opensourcephysics.cabrillo.tracker.Vector'].labelsVisibleItem.isSelected$());
step.erase$();
}}
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
});
})()
), Clazz.new_(P$.Vector$6.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
var step=this.getStep$I(n);
if (step == null ) return this.createStep$I$D$D$D$D(n, x, y, 0, 0);
var state=Clazz.new_($I$(15,1).c$$O,[step]);
step.tip.setXY$D$D(x, y);
$I$(16).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(step, state);
return step;
});

Clazz.newMeth(C$, 'createStep$I$D$D$D$D',  function (n, x, y, xc, yc) {
if (this.locked) return null;
var step=this.getStep$I(n);
step=Clazz.new_($I$(17,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$I$D$D$D$D$I,[this, n, x, y, xc, yc, 0]);
step.setFirePropertyChangeEvents$Z(true);
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, step);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.firePropertyChange$S$O$O("step", $I$(2).HINT_STEP_ADDED_OR_REMOVED,  new Integer(n));
return step;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(17).getLength$();
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 2;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
if (!this.isVectorsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel)) return;
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
}});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
C$.superclazz.prototype.setLocked$Z.apply(this, [locked]);
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) step.setTipEnabled$Z(!this.isLocked$());
}
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "adjusting":
this.refreshDataLater=(e.getNewValue$()).valueOf();
if (!this.refreshDataLater) {
this.firePropertyChange$S$O$O("data", null, null);
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setMarking$Z',  function (marking) {
C$.superclazz.prototype.setMarking$Z.apply(this, [marking]);
this.repaint$Integer(this.tp.getID$());
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
if (this.refreshDataLater || trackerPanel == null   || data == null  ) return;
this.dataFrames.clear$();
var player=trackerPanel.getPlayer$();
var clip=player.getVideoClip$();
var coords=trackerPanel.getCoords$();
var count=8;
var stepArray=this.getSteps$();
var len=stepArray.length;
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
var pt=0;
for (var i=0; i < len; i++) {
var frame;
var stepNumber;
var step=stepArray[i];
if (step == null  || !clip.includesFrame$I(frame=step.getFrameNumber$())  || player.getStepTime$I(stepNumber=clip.frameToStep$I(frame)) < 0  ) continue;
var t=player.getStepTime$I(stepNumber) / 1000.0;
if (t < 0 ) continue;
var xcomp=step.getXComponent$();
var ycomp=step.getYComponent$();
var wxc=coords.imageToWorldXComponent$I$D$D(frame, xcomp, ycomp);
var wyc=coords.imageToWorldYComponent$I$D$D(frame, xcomp, ycomp);
var tailPosition=step.getTail$().getWorldPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
validData[0][pt]=wxc;
validData[1][pt]=wyc;
validData[2][pt]=Math.sqrt(wxc * wxc + wyc * wyc);
validData[3][pt]=Math.atan2(wyc, wxc);
validData[4][pt]=tailPosition.getX$();
validData[5][pt]=tailPosition.getY$();
validData[6][pt]=stepNumber;
validData[7][pt]=frame;
validData[8][pt]=t;
this.dataFrames.add$O(Integer.valueOf$I(frame));
++pt;
}
this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.dataVariables, "Vector.Data.Description.", validData, pt);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (ia == null ) {
var p=this.tp.getSelectedPoint$();
if (p != null ) {
if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.VectorStep.Handle")) {
this.partName=$I$(7).getString$S("Vector.Handle.Name");
this.partName+=" " + $I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("Vector.HandleSelected.Hint");
} else {
this.partName=$I$(7).getString$S("Vector.Tip.Name");
this.partName+=" " + $I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("Vector.TipSelected.Hint");
}} else {
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
if (this.getStep$I(this.tp.getFrameNumber$()) == null ) this.hint=$I$(7).getString$S("Vector.Unmarked.Hint");
 else {
this.hint=$I$(7).getString$S("Vector.Remark.Hint");
}}return null;
}if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.VectorStep.Handle")) {
var handle=ia;
this.partName=$I$(7).getString$S("Vector.Handle.Name");
this.hint=handle.isShort$() ? $I$(7).getString$S("Vector.ShortHandle.Hint") : $I$(7).getString$S("Vector.Handle.Hint");
} else {
this.partName=$I$(7).getString$S("Vector.Tip.Name");
this.hint=$I$(7).getString$S("Vector.Tip.Hint");
}return ia;
});

Clazz.newMeth(C$, 'setLabelsVisible$Z',  function (visible) {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) {
step.setLabelVisible$Z(visible);
step.setRolloverVisible$Z(!visible);
}}
});

Clazz.newMeth(C$, 'isLabelsVisible$',  function () {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) return step.isLabelVisible$();
}
return false;
});

Clazz.newMeth(C$, 'setVectorsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (panel, visible) {
if (visible == this.isVectorsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel) ) return;
C$.visMap.put$O$O(panel.getID$(), Boolean.valueOf$Z(visible));
if (!visible) {
var step=panel.getSelectedStep$();
if (step != null  && step === this.getStep$I(step.getFrameNumber$())  ) {
panel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
panel.selectedSteps.clear$();
}}});

Clazz.newMeth(C$, 'isVectorsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
trackerPanel=trackerPanel.getMainPanel$();
var vis=C$.visMap.get$O(trackerPanel.getID$());
if (vis == null ) {
C$.visMap.put$O$O(trackerPanel.getID$(), vis=Boolean.TRUE);
}return vis.booleanValue$();
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
if (trackerPanel.isEnabled$S("track.delete")) {
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
}if (trackerPanel.isEnabled$S("track.autoAdvance") || trackerPanel.isEnabled$S("track.markByDefault") ) {
$I$(18).checkAddMenuSep$javax_swing_JMenu(menu);
if (trackerPanel.isEnabled$S("track.autoAdvance")) menu.add$javax_swing_JMenuItem(this.autoAdvanceItem);
if (trackerPanel.isEnabled$S("track.markByDefault")) menu.add$javax_swing_JMenuItem(this.markByDefaultItem);
}$I$(18).checkAddMenuSep$javax_swing_JMenu(menu);
this.tailsToOriginItem.setText$S($I$(7).getString$S("Vector.MenuItem.ToOrigin"));
menu.add$javax_swing_JMenuItem(this.tailsToOriginItem);
if (trackerPanel.isEnabled$S("track.delete")) {
$I$(18).checkAddMenuSep$javax_swing_JMenu(menu);
var p=trackerPanel.getSelectedPoint$();
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, trackerPanel);
this.deleteStepItem.setEnabled$Z(step != null );
menu.add$javax_swing_JMenuItem(this.deleteStepItem);
menu.add$javax_swing_JMenuItem(this.clearStepsItem);
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
}return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
return list;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
this.xLabel.setText$S(C$.dataVariables[1]);
this.yLabel.setText$S(C$.dataVariables[2]);
this.magLabel.setText$S(C$.dataVariables[3]);
this.angleLabel.setText$S(C$.dataVariables[4]);
this.xField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
this.yField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[2]));
this.magField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[3]));
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, point]);
list.add$O(this.stepSeparator);
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.xSeparator);
list.add$O(this.yLabel);
list.add$O(this.yField);
list.add$O(this.ySeparator);
list.add$O(this.magLabel);
list.add$O(this.magField);
list.add$O(this.magSeparator);
list.add$O(this.angleLabel);
list.add$O(this.angleField);
list.add$O(this.angleSeparator);
this.xField.setEnabled$Z(!this.isLocked$());
this.yField.setEnabled$Z(!this.isLocked$());
this.magField.setEnabled$Z(!this.isLocked$());
this.angleField.setEnabled$Z(!this.isLocked$());
return list;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(7).getString$S("Vector.Name") + " \"" + this.name + "\"" ;
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
if (this.numberFields.isEmpty$()) {
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(19), -1, [this.tField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(19), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(19), -1, [this.yField]));
this.numberFields.put$O$O(C$.dataVariables[3], Clazz.array($I$(19), -1, [this.magField]));
this.numberFields.put$O$O(C$.dataVariables[4], Clazz.array($I$(19), -1, [this.angleField]));
}return this.numberFields;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(3)), Clazz.new_($I$(20,1))]);
return Clazz.new_($I$(21,1));
}, 1);

Clazz.newMeth(C$, 'setXYComponents',  function () {
var p=this.tp.getSelectedPoint$();
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this.tp);
if (step != null ) {
var coords=this.tp.getCoords$();
var n=this.tp.getFrameNumber$();
var x=coords.worldToImageXComponent$I$D$D(n, this.xField.getValue$(), this.yField.getValue$());
var y=coords.worldToImageYComponent$I$D$D(n, this.xField.getValue$(), this.yField.getValue$());
step.setXYComponents$D$D(x, y);
x=coords.imageToWorldXComponent$I$D$D(n, step.getXComponent$(), step.getYComponent$());
y=coords.imageToWorldYComponent$I$D$D(n, step.getXComponent$(), step.getYComponent$());
this.xField.setValue$D(x);
this.yField.setValue$D(y);
this.magField.setValue$D(Math.sqrt(x * x + y * y));
var theta=Math.atan2(y, x);
this.angleField.setValue$D(theta);
p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.tp);
}}, p$1);

Clazz.newMeth(C$, 'setMagnitudeAngle',  function () {
var theta=this.angleField.getValue$();
var xval=this.magField.getValue$() * Math.cos(theta);
var yval=this.magField.getValue$() * Math.sin(theta);
var p=this.tp.getSelectedPoint$();
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this.tp);
if (step != null ) {
var coords=this.tp.getCoords$();
var n=this.tp.getFrameNumber$();
var x=coords.worldToImageXComponent$I$D$D(n, xval, yval);
var y=coords.worldToImageYComponent$I$D$D(n, xval, yval);
step.setXYComponents$D$D(x, y);
x=coords.imageToWorldXComponent$I$D$D(n, step.getXComponent$(), step.getYComponent$());
y=coords.imageToWorldYComponent$I$D$D(n, step.getXComponent$(), step.getYComponent$());
this.xField.setValue$D(x);
this.yField.setValue$D(y);
this.magField.setValue$D(Math.sqrt(x * x + y * y));
theta=Math.atan2(y, x);
this.angleField.setValue$D(theta);
p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.tp);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.dataVariables=Clazz.array(String, -1, ["t", "x", "y", "mag", $I$(5).THETA, "x_{tail}", "y_{tail}", "step", "frame"]);
C$.formatVariables=Clazz.array(String, -1, ["t", "xy", $I$(5).THETA]);
C$.fieldVariables=Clazz.array(String, -1, ["t", "x", "y", "mag", $I$(5).THETA]);
{
C$.formatMap=Clazz.new_($I$(6,1));
C$.formatMap.put$O$O("t", Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O("xy", Clazz.array(String, -1, ["x", "y", "mag", "x_{tail}", "y_{tail}"]));
C$.formatMap.put$O$O($I$(5).THETA, Clazz.array(String, -1, [$I$(5).THETA]));
C$.formatDescriptionMap=Clazz.new_($I$(6,1));
C$.formatDescriptionMap.put$O$O("t", $I$(7).getString$S("Vector.Data.Description.0"));
C$.formatDescriptionMap.put$O$O("xy", $I$(7).getString$S("Vector.Description.Magnitudes"));
C$.formatDescriptionMap.put$O$O($I$(5).THETA, $I$(7).getString$S("Vector.Data.Description.4"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
C$.visMap=Clazz.new_($I$(6,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Vector, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var vec=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var steps=vec.getSteps$();
var data=Clazz.array($I$(3), [steps.length]);
for (var n=0; n < steps.length; n++) {
if (steps[n] == null ) continue;
var v=steps[n];
data[n]=Clazz.new_([v, vec.isDependent$()],$I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_VectorStep$Z);
}
control.setValue$S$O("framedata", data);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var vec=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var data=control.getObject$S("framedata");
if (data != null ) {
var locked=vec.isLocked$();
vec.setLocked$Z(false);
for (var n=0; n < data.length; n++) {
if (data[n] == null ) {
vec.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
continue;
}vec.createStep$I$D$D$D$D(n, data[n].x, data[n].y, data[n].xc, data[n].yc);
}
vec.setLocked$Z(locked);
}return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Vector, "FrameData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['independent'],'D',['x','y','xc','yc']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_VectorStep$Z',  function (v, dependent) {
;C$.$init$.apply(this);
this.x=v.getTail$().getX$();
this.y=v.getTail$().getY$();
this.xc=v.getXComponent$();
this.yc=v.getYComponent$();
this.independent=!dependent;
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Vector, "FrameDataLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$D("xtail", data.x);
control.setValue$S$D("ytail", data.y);
if (data.independent) {
control.setValue$S$D("xcomponent", data.xc);
control.setValue$S$D("ycomponent", data.yc);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
var x=control.getDouble$S("xcomponent");
if (!Double.isNaN$D(x)) {
data.xc=x;
data.yc=control.getDouble$S("ycomponent");
}data.x=control.getDouble$S("xtail");
data.y=control.getDouble$S("ytail");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
