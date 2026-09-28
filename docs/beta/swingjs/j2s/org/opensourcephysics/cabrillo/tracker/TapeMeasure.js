(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack',['org.opensourcephysics.cabrillo.tracker.TapeMeasure','.FrameData'],'org.opensourcephysics.cabrillo.tracker.TapeMeasure','org.opensourcephysics.cabrillo.tracker.Tracker','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.util.TreeSet','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.LineFootprint',['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackNumberField'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo',['org.opensourcephysics.cabrillo.tracker.TTrack','.TextLineLabel'],'javax.swing.Box','java.awt.Dimension','javax.swing.JLabel','java.awt.event.FocusAdapter','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.TapeStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'java.awt.EventQueue','javax.swing.JCheckBoxMenuItem','javax.swing.JMenuItem','javax.swing.JOptionPane','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.core.NumberField','javax.swing.JPopupMenu','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.NumberFormatDialog','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.WorldRuler',['org.opensourcephysics.cabrillo.tracker.TapeMeasure','.FrameDataLoader'],['org.opensourcephysics.cabrillo.tracker.TapeMeasure','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TapeMeasure", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.InputTrack', 'org.opensourcephysics.cabrillo.tracker.MarkingRequired');
C$.$classes$=[['Loader',8],['FrameData',9],['FrameDataLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedLength=true;
this.notYetShown=true;
this.lengthKeyFrames=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['Z',['fixedLength','readOnly','stickMode','isStepChangingScale','notYetShown','isIncomplete','isCalibrator'],'O',['end1Label','javax.swing.JLabel','+end2Label','+lengthLabel','tapeFootprints','org.opensourcephysics.cabrillo.tracker.Footprint[]','+stickFootprints','lengthKeyFrames','java.util.TreeSet','attachmentItem','javax.swing.JMenuItem','pixelLengthField','org.opensourcephysics.media.core.NumberField','pixelLengthLabel','org.opensourcephysics.cabrillo.tracker.TTrack.TextLineLabel','pixelLengthSeparator','java.awt.Component','calibrationLength','Double']]
,['O',['BROKEN_LINE','float[]','dataVariables','String[]','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList','panelEventsTapeMeasure','String[]']]]

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
return "TapeMeasure";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (names[1].equals$O(variable) || names[3].equals$O(variable) ) {
return "L";
}if (vars[3].equals$O(variable) || vars[4].equals$O(variable) ) {
return "I";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[8]);C$.$init$.apply(this);
this.setName$S($I$(7).getString$S("TapeMeasure.New.Name"));
this.defaultColors=Clazz.array($I$(9), -1, [Clazz.new_($I$(9,1).c$$I$I$I,[204, 0, 0])]);
this.setProperty$S$O("xVarPlot0", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot0", C$.dataVariables[1]);
this.setProperty$S$O("xVarPlot1", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot1", C$.dataVariables[2]);
this.setProperty$S$O("tableVar0", "0");
this.setProperty$S$O("tableVar1", "1");
this.tapeFootprints=Clazz.array($I$(10), -1, [$I$(11).getFootprint$S("Footprint.DoubleArrow"), $I$(11).getFootprint$S("Footprint.BoldDoubleArrow"), $I$(11).getFootprint$S("Footprint.Line"), $I$(11).getFootprint$S("Footprint.BoldLine")]);
this.stickFootprints=Clazz.array($I$(10), -1, [$I$(11).getFootprint$S("Footprint.BoldDoubleTarget"), $I$(11).getFootprint$S("Footprint.DoubleTarget")]);
this.setViewable$Z(false);
this.setStickMode$Z(false);
this.setReadOnly$Z(false);
this.setColor$java_awt_Color(this.defaultColors[0]);
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("TapeMeasure.Hint");
this.pixelLengthField=Clazz.new_($I$(12,1),[this, null]);
this.pixelLengthField.setMinValue$D(0);
this.pixelLengthField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.pixelLengthField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.pixelLengthField.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var pixelLength=this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].pixelLengthField.getValue$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getFrameNumber$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getCoords$().getScaleX$I(n) != 1 / pixelLength ) {
var trackControl=Clazz.new_($I$(13,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure']]);
var coordsControl=Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getCoords$()],$I$(13,1).c$$O);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getCoords$().setScaleXY$I$D$D(n, 1 / pixelLength, 1 / pixelLength);
$I$(14).postTrackAndCoordsEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], trackControl, coordsControl);
}this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].pixelLengthField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.TapeMeasure$1.$init$,[this, null])));
this.pixelLengthLabel=Clazz.new_($I$(15,1));
this.pixelLengthSeparator=$I$(16,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(17,1).c$$I$I,[6, 4])]);
this.magField.setMinValue$D(NaN);
this.end1Label=Clazz.new_($I$(18,1));
this.end2Label=Clazz.new_($I$(18,1));
this.lengthLabel=Clazz.new_($I$(18,1));
this.end1Label.setBorder$javax_swing_border_Border(this.xLabel.getBorder$());
this.end2Label.setBorder$javax_swing_border_Border(this.xLabel.getBorder$());
this.lengthLabel.setBorder$javax_swing_border_Border(this.xLabel.getBorder$());
this.keyFrames.add$O(Integer.valueOf$I(0));
this.lengthKeyFrames.add$O(Integer.valueOf$I(0));
var magFocusListener=((P$.TapeMeasure$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.commitMagField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], []);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.TapeMeasure$2));
this.magField.addFocusListener$java_awt_event_FocusListener(magFocusListener);
this.magField.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.commitMagField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].magField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.TapeMeasure$3.$init$,[this, null])));
var angleFocusListener=((P$.TapeMeasure$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.commitAngleField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], []);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.TapeMeasure$4));
this.angleField.addFocusListener$java_awt_event_FocusListener(angleFocusListener);
this.angleField.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.commitAngleField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].angleField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.TapeMeasure$5.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'commitMagField',  function () {
if (this.tp == null ) return;
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null ) return;
var newLength=this.magField.getValue$();
step=this.getKeyStep$org_opensourcephysics_cabrillo_tracker_Step(step);
var currentLength=step.calcTapeLength$Z(!this.isStickMode$());
if (Double.isNaN$D(newLength) || newLength <= 0  ) {
this.magField.setValue$D(currentLength);
this.magField.setBackground$java_awt_Color($I$(9).white);
return;
}var isYellow=this.magField.getBackground$() === $I$(9).yellow  || $I$(9).yellow.equals$O(this.magField.getBackground$()) ;
if (isYellow || Math.abs(newLength - currentLength) > 1.0E-10  ) {
if (!this.isFixedPosition$()) this.keyFrames.add$O(Integer.valueOf$I(n));
var rawText=this.magField.getText$();
if (!this.isReadOnly$()) {
p$1.checkLengthUnits$S.apply(this, [rawText]);
}step.setTapeLength$D(newLength);
this.inputField.setValue$D(newLength);
this.magField.setValue$D(newLength);
this.magField.setBackground$java_awt_Color($I$(9).white);
this.invalidateData$O(null);
this.erase$();
this.repaint$();
if (this.isFixedPosition$()) this.fireStepsChanged$();
 else this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(n));
if (Clazz.instanceOf(this.tp.getSelectedPoint$(), "org.opensourcephysics.cabrillo.tracker.TapeStep.Rotator")) this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
$I$(20).repaintT$java_awt_Component(this.tp);
this.tp.refreshTrackBar$();
} else {
this.magField.setBackground$java_awt_Color($I$(9).white);
}}, p$1);

Clazz.newMeth(C$, 'commitAngleField',  function () {
if (this.tp == null ) return;
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null ) return;
var newAngle=this.angleField.getValue$();
step=this.getKeyStep$org_opensourcephysics_cabrillo_tracker_Step(step);
step.getTapeLength$Z(!this.isStickMode$());
var currentAngle=step.getTapeAngle$();
if (Double.isNaN$D(newAngle)) {
this.angleField.setValue$D(currentAngle);
this.angleField.setBackground$java_awt_Color($I$(9).white);
return;
}var isYellow=this.angleField.getBackground$() === $I$(9).yellow  || $I$(9).yellow.equals$O(this.angleField.getBackground$()) ;
if (isYellow || Math.abs(newAngle - currentAngle) > 1.0E-10  ) {
if (!this.isFixedPosition$()) this.keyFrames.add$O(Integer.valueOf$I(n));
step.setTapeAngle$D(newAngle);
this.angleField.setValue$D(newAngle);
this.angleField.setBackground$java_awt_Color($I$(9).white);
this.invalidateData$O(null);
this.erase$();
this.repaint$();
if (this.isFixedPosition$()) this.fireStepsChanged$();
 else this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(n));
if (!this.isReadOnly$()) this.tp.getAxes$().setVisible$Z(true);
$I$(20).repaintT$java_awt_Component(this.tp);
this.tp.refreshTrackBar$();
} else {
this.angleField.setBackground$java_awt_Color($I$(9).white);
}}, p$1);

Clazz.newMeth(C$, 'setFixedLength$Z',  function (fixed) {
if (this.fixedLength == fixed ) return;
var control=Clazz.new_($I$(13,1).c$$O,[this]);
if (this.tp != null ) {
var n=this.tp.getFrameNumber$();
this.tp.changed=true;
var keyStep=this.getStep$I(n);
for (var i=0; i < this.steps.array.length; i++) {
var step=this.steps.getStep$I(i);
if (step == null  || keyStep == null  ) continue;
step.worldLength=keyStep.worldLength;
}
$I$(20).repaintT$java_awt_Component(this.tp);
}if (fixed) {
this.lengthKeyFrames.clear$();
this.lengthKeyFrames.add$O(Integer.valueOf$I(0));
}this.fixedLength=fixed;
$I$(14).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
});

Clazz.newMeth(C$, 'isFixedLength$',  function () {
return this.fixedLength;
});

Clazz.newMeth(C$, 'setReadOnly$Z',  function (readOnly) {
this.readOnly=readOnly;
for (var footprint, $footprint = 0, $$footprint = this.getFootprints$(); $footprint<$$footprint.length&&((footprint=($$footprint[$footprint])),1);$footprint++) {
if (Clazz.instanceOf(footprint, "org.opensourcephysics.cabrillo.tracker.DoubleArrowFootprint")) {
var line=footprint;
line.setSolidHead$Z(this.isReadOnly$() ? false : true);
}}
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return this.readOnly;
});

Clazz.newMeth(C$, 'setStickMode$Z',  function (stick) {
this.stickMode=stick;
if (this.isStickMode$()) {
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(this.stickFootprints);
} else {
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(this.tapeFootprints);
}this.defaultFootprint=this.getFootprint$();
if (this.ruler != null ) {
this.ruler.setStrokeWidth$F(this.defaultFootprint.getStroke$().getLineWidth$());
}for (var step, $step = 0, $$step = this.getSteps$(); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step != null ) {
var tapeStep=step;
tapeStep.end1.setCoordsEditTrigger$Z(this.isStickMode$());
tapeStep.end2.setCoordsEditTrigger$Z(this.isStickMode$());
}}
this.repaint$();
});

Clazz.newMeth(C$, 'isStickMode$',  function () {
return this.stickMode;
});

Clazz.newMeth(C$, 'setCalibrator$Double',  function (worldLength) {
this.isCalibrator=true;
this.calibrationLength=worldLength;
});

Clazz.newMeth(C$, 'isMarkByDefault$',  function () {
return this.requiresMarking$() || C$.superclazz.prototype.isMarkByDefault$.apply(this, []) ;
});

Clazz.newMeth(C$, 'requiresMarking$',  function () {
var incomplete=this.getStep$I(0) == null  || this.isIncomplete ;
return this.isCalibrator && incomplete ;
});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
C$.superclazz.prototype.setLocked$Z.apply(this, [locked]);
var enabled=this.isFieldsEnabled$();
this.magField.setEnabled$Z(enabled);
this.angleField.setEnabled$Z(enabled);
this.pixelLengthField.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "transform":
if (this.isStickMode$() && !this.isStepChangingScale ) {
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) step.adjustTipsToLength$();
if (!this.isFixedPosition$()) {
this.keyFrames.add$O(Integer.valueOf$I(n));
}}this.repaint$();
break;
case "adjusting":
if (Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
this.refreshDataLater=(e.getNewValue$()).valueOf();
if (!this.refreshDataLater) {
this.firePropertyChange$S$O$O("data", null, null);
}}break;
case "stepnumber":
if (this.tp.getSelectedTrack$() === this ) {
var step=this.getStep$I(this.tp.getFrameNumber$());
if (step != null ) step.getTapeLength$Z(!this.isStickMode$());
var enabled=this.isFieldsEnabled$();
this.magField.setEnabled$Z(enabled);
this.angleField.setEnabled$Z(enabled);
this.stepValueLabel.setText$S(e.getNewValue$() + ":");
}break;
case "locked":
var enabled=this.isFieldsEnabled$();
this.magField.setEnabled$Z(enabled);
this.angleField.setEnabled$Z(enabled);
break;
case "fixed_scale":
if (this.isStickMode$() && e.getNewValue$() === Boolean.FALSE  ) {
this.setFixedPosition$Z(false);
}break;
case "step":
case "steps":
this.refreshAttachments$();
break;
case "selectedtrack":
this.repaint$();
break;
case "selectedpoint":
var step=this.getStep$I(this.tp.getFrameNumber$());
step.rotatorDrawShapes[0]=null;
step.rotatorDrawShapes[1]=null;
default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
}
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
if (visible) this.notYetShown=false;
});

Clazz.newMeth(C$, 'isLocked$',  function () {
var locked=C$.superclazz.prototype.isLocked$.apply(this, []);
if (!this.readOnly && this.tp != null   && !(Clazz.instanceOf(this.tp.getSelectedPoint$(), "org.opensourcephysics.cabrillo.tracker.TapeStep.Handle")) ) {
locked=locked || this.tp.getCoords$().isLocked$() ;
}return locked;
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
var step=this.getStep$I(n);
this.isIncomplete=false;
if (step == null ) {
this.isIncomplete=true;
step=Clazz.new_($I$(21,1).c$$org_opensourcephysics_cabrillo_tracker_TapeMeasure$I$D$D$D$D,[this, n, x, y, x, y]);
step.worldLength=0;
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
step=this.getStep$I(n);
} else if (step.worldLength == 0 ) {
var step0=this.getStep$I(0);
var targetStep=this.tp.getCoords$().isFixedScale$() ? step0 : this.getStep$I(n);
targetStep.getEnd2$().setLocation$D$D(x, y);
step0.getEnd2$().setLocation$D$D(x, y);
var worldLen=targetStep.getTapeLength$Z(true);
step0.worldLength=worldLen;
if (this.calibrationLength != null ) {
targetStep.setTapeLength$D((this.calibrationLength).valueOf());
this.calibrationLength=null;
}$I$(23,"invokeLater$Runnable",[((P$.TapeMeasure$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
});
})()
), Clazz.new_(P$.TapeMeasure$6.$init$,[this, null]))]);
} else {
var pts=step.getPoints$();
var p=this.tp == null  ? null : this.tp.getSelectedPoint$();
if (p == null ) {
p=pts[0];
}if (p === pts[0]  || p === pts[1]  ) {
p.setXY$D$D(x, y);
if (this.tp != null ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(p);
}}}return step;
});

Clazz.newMeth(C$, 'createStep$I$D$D$D$D',  function (n, x1, y1, x2, y2) {
var step=this.steps.getStep$I(n);
if (step == null ) {
step=Clazz.new_($I$(21,1).c$$org_opensourcephysics_cabrillo_tracker_TapeMeasure$I$D$D$D$D,[this, n, x1, y1, x2, y2]);
step.worldLength=step.getTapeLength$Z(true);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
if (this.calibrationLength != null ) {
step.setTapeLength$D((this.calibrationLength).valueOf());
this.calibrationLength=null;
}} else {
if (this.isIncomplete) {
step.getEnd2$().setLocation$D$D(x2, y2);
this.repaint$();
} else {
step.getEnd1$().setLocation$D$D(x1, y1);
step.getEnd2$().setLocation$D$D(x2, y2);
}}this.keyFrames.add$O(Integer.valueOf$I(n));
return step;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
var step=this.getStep$I(n);
if (step == null  || step.worldLength == 0  ) {
return null;
}var index=this.getTargetIndex$();
var p=step.getPoints$()[index];
if (p == null ) return null;
this.setFixedPosition$Z(false);
if (this.isStickMode$()) {
var coords=this.tp.getCoords$();
coords.setFixedScale$Z(false);
}p.setAdjusting$Z$java_awt_event_MouseEvent(true, null);
p.setXY$D$D(x, y);
p.setAdjusting$Z$java_awt_event_MouseEvent(false, null);
return p;
});

Clazz.newMeth(C$, 'isStepComplete$I',  function (n) {
if (this.isIncomplete) {
return false;
}return C$.superclazz.prototype.isStepComplete$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(21).getLength$();
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getFormattedLength$D',  function (length) {
this.inputField.setFormatFor$D(length);
return this.inputField.format$D(length);
});

Clazz.newMeth(C$, 'isViewable$',  function () {
return this.isReadOnly$() && !this.isStickMode$() ;
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
var step=this.getStep$I(this.tp.getFrameNumber$());
if (step == null  || step.worldLength == 0  ) return false;
return true;
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
var s=$I$(7).getString$S("Calibration.Point.Name");
return s + " " + (pointIndex + 1) ;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.getMenuItems$();
this.lockedItem.setEnabled$Z(!trackerPanel.getCoords$().isLocked$());
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
var step=this.steps.getStep$I(0);
var fixedScale=trackerPanel.getCoords$().isFixedScale$();
var canBeFixed=!this.lockedItem.isSelected$() && (fixedScale || !this.isStickMode$() ) ;
this.fixedItem.setEnabled$Z(canBeFixed && step != null   && step.worldLength > 0   && !this.isAttached$() );
this.fixedItem.setText$S($I$(7).getString$S("TapeMeasure.MenuItem.Fixed"));
this.fixedItem.setSelected$Z(this.isFixedPosition$() && (fixedScale || !this.isStickMode$() ) );
this.addFixedItem$javax_swing_JMenu(menu);
this.attachmentItem.setEnabled$Z(step != null  && step.worldLength > 0  );
this.attachmentItem.setText$S($I$(7).getString$S("TapeMeasure.MenuItem.Attach"));
menu.insert$javax_swing_JMenuItem$I(this.attachmentItem, 0);
menu.insertSeparator$I(1);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
return menu;
});

Clazz.newMeth(C$, 'getMenuItems$',  function () {
if (this.fixedItem != null ) return;
C$.superclazz.prototype.getMenuItems$.apply(this, []);
this.fixedItem=Clazz.new_([$I$(7).getString$S("TapeMeasure.MenuItem.Fixed")],$I$(24,1).c$$S);
this.fixedItem.addItemListener$java_awt_event_ItemListener(((P$.TapeMeasure$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].setFixedPosition$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].fixedItem.isSelected$()]);
});
})()
), Clazz.new_(P$.TapeMeasure$7.$init$,[this, null])));
this.attachmentItem=Clazz.new_([$I$(7).getString$S("TapeMeasure.MenuItem.Attach")],$I$(25,1).c$$S);
this.attachmentItem.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getCoords$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].isStickMode$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], []) && coords.isFixedScale$() ) {
var result=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tframe, $I$(7).getString$S("TapeMeasure.Alert.UnfixScale.Message1") + "\n" + $I$(7).getString$S("TapeMeasure.Alert.UnfixScale.Message2") , $I$(7).getString$S("TapeMeasure.Alert.UnfixScale.Title"), 0, 3]);
if (result != 0) return;
coords.setFixedScale$Z(false);
}var control=this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getAttachmentDialog$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure']);
control.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TapeMeasure$8.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
this.magLabel.setText$S($I$(7).getString$S("TapeMeasure.Label.Length"));
this.magField.setToolTipText$S($I$(7).getString$S("TapeMeasure.Field.Magnitude.Tooltip"));
this.magField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
this.stepLabel.setText$S($I$(7).getString$S("TTrack.Label.Step"));
var clip=trackerPanel.getPlayer$().getVideoClip$();
var n=clip.frameToStep$I(trackerPanel.getFrameNumber$());
this.stepValueLabel.setText$S(n + ":");
list.add$O(this.stepSeparator);
n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) {
step.getTapeLength$Z(!this.isStickMode$());
}var exists=(step != null );
var complete=(step != null  && step.worldLength > 0  );
var unmarked=this.isStickMode$() ? $I$(7).getString$S("TapeMeasure.Label.UnmarkedStick") : $I$(7).getString$S("TapeMeasure.Label.UnmarkedTape");
if (!exists && !$I$(5).centerCalibrationStick ) {
this.end1Label.setText$S(unmarked);
this.end1Label.setForeground$java_awt_Color($I$(9).red.darker$());
list.add$O(this.end1Label);
} else if (!complete && !$I$(5).centerCalibrationStick ) {
this.end1Label.setText$S(unmarked);
this.end1Label.setForeground$java_awt_Color($I$(9).red.darker$());
list.add$O(this.end1Label);
} else {
this.rulerCheckbox.setText$S($I$(7).getString$S("InputTrack.Checkbox.Ruler"));
this.rulerCheckbox.setToolTipText$S($I$(7).getString$S("InputTrack.Checkbox.Ruler.Tooltip"));
this.rulerCheckbox.setSelected$Z(this.ruler != null  && this.ruler.isVisible$() );
list.add$O(this.rulerCheckbox);
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
list.add$O(this.magLabel);
list.add$O(this.magField);
this.angleLabel.setText$S($I$(7).getString$S("TapeMeasure.Label.TapeAngle"));
this.angleField.setToolTipText$S($I$(7).getString$S("TapeMeasure.Field.TapeAngle.Tooltip"));
list.add$O(this.magSeparator);
list.add$O(this.angleLabel);
list.add$O(this.angleField);
if (this.isCalibrator) {
this.pixelLengthField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
this.pixelLengthLabel.setText$S($I$(7).getString$S("TapeMeasure.Label.PixelLength"));
this.pixelLengthLabel.setToolTipText$S($I$(7).getString$S("TapeMeasure.Description.PixelLength"));
this.pixelLengthField.setToolTipText$S($I$(7).getString$S("TapeMeasure.Field.PixelLength.Tooltip"));
list.add$O(this.pixelLengthSeparator);
list.add$O(this.pixelLengthLabel);
list.add$O(this.pixelLengthField);
}var enabled=this.isFieldsEnabled$();
this.magField.setEnabled$Z(enabled);
this.angleField.setEnabled$Z(enabled);
}return list;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.isVisible$() || !(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) ) return null;
var trackerPanel=panel;
var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null ) {
this.partName=null;
this.hint=$I$(7).getString$S("TapeMeasure.MarkEnd.Hint") + " 1";
return null;
}if (trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n)) {
var pts=step.points;
var p=trackerPanel.getSelectedPoint$();
var ia=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (this.ruler != null  && this.ruler.isVisible$() ) {
var b=(ia === this.ruler.getHandle$()  || p === this.ruler.getHandle$()  );
if (this.ruler.hitShapeVisible != b ) {
this.ruler.setHitShapeVisible$Z(b);
if ($I$(27).isJS) $I$(20).repaintT$java_awt_Component(trackerPanel);
}}if (step.worldLength == 0 ) {
if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.TapeStep.Tip") || Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.TapeStep.Handle") ) {
ia=step.handle;
this.partName=$I$(7).getString$S("TapeMeasure.End.Name") + " 1";
this.hint=$I$(7).getString$S("TapeMeasure.Handle.Hint");
} else {
this.partName=null;
this.hint=$I$(7).getString$S("TapeMeasure.MarkEnd.Hint") + " 2";
}} else if (ia == null ) {
if (p === pts[0]  || p === pts[1]  ) {
this.partName=$I$(7).getString$S("TapeMeasure.End.Name");
if (this.isStickMode$() && !this.isReadOnly$() ) this.hint=$I$(7).getString$S("CalibrationStick.End.Hint");
 else this.hint=$I$(7).getString$S("TapeMeasure.End.Hint");
} else {
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
if (!this.isReadOnly$()) this.hint=$I$(7).getString$S("CalibrationTapeMeasure.Hint");
 else this.hint=$I$(7).getString$S("TapeMeasure.Hint");
}return null;
} else if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.TapeStep.Tip")) {
this.partName=$I$(7).getString$S("TapeMeasure.End.Name");
if (this.isStickMode$() && !this.isReadOnly$() ) this.hint=$I$(7).getString$S("CalibrationStick.End.Hint");
 else this.hint=$I$(7).getString$S("TapeMeasure.End.Hint");
} else if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.TapeStep.Handle")) {
this.partName=$I$(7).getString$S("TapeMeasure.Handle.Name");
this.hint=$I$(7).getString$S("TapeMeasure.Handle.Hint");
} else if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.TapeStep.Rotator")) {
this.partName=$I$(7).getString$S("TapeMeasure.Rotator.Name");
this.hint=$I$(7).getString$S("TapeMeasure.Rotator.Hint");
if ($I$(27).isJS) $I$(20).repaintT$java_awt_Component(trackerPanel);
} else if (this.ruler != null  && ia === this.ruler.getHandle$()  ) {
this.partName=$I$(7).getString$S("TapeMeasure.Ruler.Name");
this.hint=$I$(7).getString$S("TapeMeasure.Ruler.Hint");
} else if (ia === this ) {
this.partName=$I$(7).getString$S("TapeMeasure.Readout.Magnitude.Name");
if (!this.isReadOnly$()) this.hint=$I$(7).getString$S("CalibrationTapeMeasure.Readout.Magnitude.Hint");
 else this.hint=$I$(7).getString$S("TapeMeasure.Readout.Magnitude.Hint");
}return this.isLocked$() ? null : ia;
}return null;
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
if (this.isStickMode$() && this.tp != null  ) {
var frameCount=this.tp.getPlayer$().getVideoClip$().getFrameCount$();
if (this.getSteps$().length < frameCount) {
this.steps.setLength$I(frameCount);
}}return C$.superclazz.prototype.getStep$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var frameCount=panel.getPlayer$().getVideoClip$().getFrameCount$();
if (this.getSteps$().length < frameCount) {
this.steps.setLength$I(frameCount);
this.dataValid=false;
}return C$.superclazz.prototype.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
if (this.refreshDataLater || trackerPanel == null   || data == null  ) return;
var count=4;
var player=trackerPanel.getPlayer$();
var clip=player.getVideoClip$();
var len=clip.getStepCount$();
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
this.dataFrames.clear$();
for (var i=0; i < len; i++) {
var frame=clip.stepToFrame$I(i);
var step=this.getStep$I(frame);
if (step == null ) continue;
step.dataVisible=true;
var t=player.getStepTime$I(i) / 1000.0;
validData[0][i]=step.getTapeLength$Z(true);
validData[1][i]=step.getTapeAngle$();
validData[2][i]=i;
validData[3][i]=frame;
validData[4][i]=t;
this.dataFrames.add$O(Integer.valueOf$I(frame));
}
this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.dataVariables, "TapeMeasure.Data.Description.", validData, len);
});

Clazz.newMeth(C$, 'remark$Integer',  function (panelID) {
C$.superclazz.prototype.remark$Integer.apply(this, [panelID]);
p$1.displayState.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(7).getString$S("TapeMeasure.Name");
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
if (this.numberFields.isEmpty$()) {
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(28), -1, [this.tField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(28), -1, [this.magField, this.inputField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(28), -1, [this.angleField]));
this.numberFields.put$O$O(C$.formatVariables[3], Clazz.array($I$(28), -1, [this.pixelLengthField]));
}return this.numberFields;
});

Clazz.newMeth(C$, 'getInputFieldPopup$',  function () {
var popup=Clazz.new_($I$(29,1));
if (this.tp.isEnabled$S("number.formats") || this.tp.isEnabled$S("number.units") ) {
var numberMenu=Clazz.new_([$I$(7).getString$S("Popup.Menu.Numbers")],$I$(30,1).c$$S);
popup.add$javax_swing_JMenuItem(numberMenu);
if (this.tp.isEnabled$S("number.formats")) {
var item=Clazz.new_($I$(25,1));
var selected=Clazz.array(String, -1, [C$.dataVariables[1]]);
item.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(31).getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp, this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], this.$finals$.selected).setVisible$Z(true);
});
})()
), Clazz.new_(P$.TapeMeasure$9.$init$,[this, {selected:selected}])));
item.setText$S($I$(7).getString$S("Popup.MenuItem.Formats") + "...");
numberMenu.add$javax_swing_JMenuItem(item);
}if (this.tp.isEnabled$S("number.units")) {
var item=Clazz.new_($I$(25,1));
item.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getUnitsDialog$();
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TapeMeasure$10.$init$,[this, null])));
item.setText$S($I$(7).getString$S("Popup.MenuItem.Units") + "...");
numberMenu.add$javax_swing_JMenuItem(item);
}popup.addSeparator$();
}var hasLengthUnit=this.tp.lengthUnit != null ;
var hasMassUnit=this.tp.massUnit != null ;
if (hasLengthUnit && hasMassUnit ) {
var item=Clazz.new_($I$(25,1));
var vis=this.tp.isUnitsVisible$();
item.addActionListener$java_awt_event_ActionListener(((P$.TapeMeasure$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.setUnitsVisible$Z(!this.$finals$.vis);
this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.refreshTrackBar$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'], [this.b$['org.opensourcephysics.cabrillo.tracker.TapeMeasure'].tp.getFrameNumber$()]);
step.repaint$();
});
})()
), Clazz.new_(P$.TapeMeasure$11.$init$,[this, {vis:vis}])));
item.setText$S(vis ? $I$(7).getString$S("TTrack.MenuItem.HideUnits") : $I$(7).getString$S("TTrack.MenuItem.ShowUnits"));
popup.add$javax_swing_JMenuItem(item);
}return popup;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.end1Label, this.end2Label, this.lengthLabel, this.pixelLengthLabel]);
$I$(32).setFonts$OA(objectsToSize);
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) this.removePanelEvents$SA(C$.panelEventsTapeMeasure);
C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.addPanelEvents$SA(C$.panelEventsTapeMeasure);
var canBeFixed=!this.isStickMode$() || this.tp.getCoords$().isFixedScale$() ;
this.setFixedPosition$Z(this.isFixedPosition$() && canBeFixed );
}});

Clazz.newMeth(C$, 'refreshWorldLengths$',  function () {
for (var i=0; i < this.getSteps$().length; i++) {
var step=this.getSteps$()[i];
if (step != null ) {
this.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(step);
step.worldLength=step.getTapeLength$Z(true);
}}
});

Clazz.newMeth(C$, 'checkLengthUnits$S',  function (rawText) {
var split=rawText.split$S(" ");
if (split.length > 1) {
for (var i=1; i < split.length; i++) {
if (!"".equals$O(split[i])) {
if (split[i].equals$O(this.tp.getLengthUnit$())) {
this.tp.setUnitsVisible$Z(true);
} else {
var response=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I",[this.tframe, $I$(7).getString$S("TapeMeasure.Dialog.ChangeLengthUnit.Message") + " \"" + split[i] + "\" ?" , $I$(7).getString$S("TapeMeasure.Dialog.ChangeLengthUnit.Title"), 0]);
if (response == 0) {
this.tp.setLengthUnit$S$Z(split[i], true);
this.tp.setUnitsVisible$Z(true);
}}break;
}}
}}, p$1);

Clazz.newMeth(C$, 'displayState',  function () {
var n=this.tp == null  ? 0 : this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) {
step.getTapeLength$Z(!this.isStickMode$());
}}, p$1);

Clazz.newMeth(C$, 'isFieldsEnabled$',  function () {
if (this.isLocked$()) return false;
if (!this.isReadOnly$() && this.tp != null   && this.tp.getCoords$().isLocked$() ) return false;
var n=this.tp == null  ? 0 : this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null  && step.end1.isAttached$()  && step.end2.isAttached$() ) return false;
return true;
});

Clazz.newMeth(C$, 'getRuler$',  function () {
if (this.ruler == null ) this.ruler=Clazz.new_($I$(33,1).c$$org_opensourcephysics_cabrillo_tracker_TapeMeasure,[this]);
return this.ruler;
});

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
if (step == null  || this.isIncomplete ) return;
var positionKey=0;
var lengthKey=0;
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) positionKey=i;
}
for (var i, $i = this.lengthKeyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) lengthKey=i;
}
var different=false;
var changed=false;
var t=step;
var k=this.steps.getStep$I(this.isFixedPosition$() ? 0 : positionKey);
if (k !== t ) {
different=((1000000 * k.getEnd1$().x)|0) != ((1000000 * t.getEnd1$().x)|0) || ((1000000 * k.getEnd1$().y)|0) != ((1000000 * t.getEnd1$().y)|0)  || ((1000000 * k.getEnd2$().x)|0) != ((1000000 * t.getEnd2$().x)|0)  || ((1000000 * k.getEnd2$().y)|0) != ((1000000 * t.getEnd2$().y)|0) ;
if (different) {
t.getEnd1$().setLocation$java_awt_geom_Point2D(k.getEnd1$());
t.getEnd2$().setLocation$java_awt_geom_Point2D(k.getEnd2$());
changed=true;
}}if (this.isStickMode$() || this.isFixedPosition$() || t.worldLength == 0   ) {
k=this.steps.getStep$I(this.isFixedLength$() || this.isFixedPosition$()  ? 0 : lengthKey);
different=k.worldLength != t.worldLength ;
if (different) {
t.worldLength=k.worldLength;
changed=true;
}}if (changed) {
t.erase$();
}});

Clazz.newMeth(C$, 'createInputField$',  function () {
return ((P$.TapeMeasure$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TapeMeasure$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackNumberField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setFixedPattern$S',  function (pattern) {
C$.superclazz.prototype.setFixedPattern$S.apply(this, [pattern]);
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].setMagValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], []);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.TapeMeasure$12));
});

Clazz.newMeth(C$, 'getLayoutBounds$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return (step).panelLayoutBounds.get$O(this.tp.getID$());
});

Clazz.newMeth(C$, 'checkKeyFrame$',  function () {
return (!this.editing && (this.readOnly || this.isStickMode$() ) );
});

Clazz.newMeth(C$, 'endEditing$org_opensourcephysics_cabrillo_tracker_Step$S',  function (step, rawText) {
var t=step;
t.drawLayoutBounds=false;
if (!this.isReadOnly$()) {
p$1.checkLengthUnits$S.apply(this, [rawText]);
}var val=this.inputField.getValue$();
if (!Double.isNaN$D(val) && val > 0  ) {
t.setTapeLength$D(val);
}this.magField.setValue$D(t.getTapeLength$Z(!this.isStickMode$()));
this.magField.setBackground$java_awt_Color($I$(9).white);
t.erase$();
t.repaint$();
this.inputField.setSigFigs$I(4);
});

Clazz.newMeth(C$, 'setInputValue$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
this.inputField.setValue$D((step).getTapeLength$Z(!this.isStickMode$()));
this.inputField.setUnits$S(this.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
});

Clazz.newMeth(C$, 'getLoader$',  function () {
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(3)), Clazz.new_($I$(34,1))]);
return Clazz.new_($I$(35,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.BROKEN_LINE=Clazz.array(Float.TYPE, -1, [10, 1]);
{
C$.dataVariables=Clazz.array(String, -1, ["t", "L", $I$(5).THETA, "step", "frame"]);
C$.formatVariables=Clazz.array(String, -1, ["t", "L", $I$(5).THETA, "Lpixel"]);
C$.formatMap=Clazz.new_($I$(6,1));
C$.formatMap.put$O$O("t", Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O("L", Clazz.array(String, -1, ["L"]));
C$.formatMap.put$O$O("pix", Clazz.array(String, -1, ["pixel length"]));
C$.formatMap.put$O$O($I$(5).THETA, Clazz.array(String, -1, [$I$(5).THETA]));
C$.formatDescriptionMap=Clazz.new_($I$(6,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(7).getString$S("PointMass.Data.Description.0"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(7).getString$S("TapeMeasure.Label.Length"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[2], $I$(7).getString$S("TapeMeasure.Label.TapeAngle"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[3], $I$(7).getString$S("TapeMeasure.Description.PixelLength"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, C$.formatVariables);
C$.panelEventsTapeMeasure=Clazz.array(String, -1, ["fixed_scale", "transform", "selectedpoint", "selectedtrack", "locked"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeMeasure, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tape=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$Z("fixedtape", tape.isFixedPosition$());
control.setValue$S$Z("fixedlength", tape.isFixedLength$());
control.setValue$S$Z("readonly", tape.isReadOnly$());
control.setValue$S$Z("stickmode", tape.isStickMode$());
var steps=tape.getSteps$();
var count=tape.isFixedPosition$() ? 1 : steps.length;
var data=Clazz.array($I$(3), [count]);
for (var n=0; n < count; n++) {
if (steps[n] == null  || !tape.keyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
data[n]=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_TapeStep,[steps[n]]);
}
control.setValue$S$O("framedata", data);
count=tape.isFixedLength$() ? 1 : steps.length;
var lengths=Clazz.array(Double, [count]);
for (var n=0; n < count; n++) {
if (steps[n] == null  || !tape.lengthKeyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
lengths[n]=Double.valueOf$D((steps[n]).worldLength);
}
control.setValue$S$O("worldlengths", lengths);
if (tape.ruler != null  && tape.ruler.isVisible$() ) {
control.setValue$S$D("rulersize", tape.ruler.getRulerSize$());
control.setValue$S$D("rulerspacing", tape.ruler.getLineSpacing$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tape=obj;
tape.notYetShown=false;
var locked=tape.isLocked$();
tape.setLocked$Z(false);
tape.setStickMode$Z(control.getBoolean$S("stickmode"));
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
tape.keyFrames.clear$();
var data=control.getObject$S("framedata");
if (data != null ) {
for (var n=0; n < data.length; n++) {
if (data[n] == null ) continue;
tape.createStep$I$D$D$D$D(n, data[n].data[0], data[n].data[1], data[n].data[2], data[n].data[3]);
}
}tape.lengthKeyFrames.clear$();
var lengths=control.getObject$S("worldlengths");
if (lengths != null ) {
for (var n=0; n < lengths.length; n++) {
if (lengths[n] == null ) continue;
var step=tape.steps.getStep$I(n);
step.worldLength=(lengths[n]).valueOf();
tape.lengthKeyFrames.add$O(Integer.valueOf$I(n));
}
}tape.fixedPosition=control.getBoolean$S("fixedtape");
if (control.getPropertyNamesRaw$().contains$O("fixedlength")) tape.fixedLength=control.getBoolean$S("fixedlength");
if (control.getPropertyNamesRaw$().contains$O("rulersize")) {
tape.getRuler$().setVisible$Z(true);
tape.ruler.setRulerSize$D(control.getDouble$S("rulersize"));
tape.ruler.setLineSpacing$D(control.getDouble$S("rulerspacing"));
}tape.setReadOnly$Z(control.getBoolean$S("readonly"));
tape.setLocked$Z(locked);
p$1.displayState.apply(tape, []);
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeMeasure, "FrameData", function(){
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

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TapeStep',  function (step) {
;C$.$init$.apply(this);
this.data[0]=step.getEnd1$().x;
this.data[1]=step.getEnd1$().y;
this.data[2]=step.getEnd2$().x;
this.data[3]=step.getEnd2$().y;
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TapeMeasure, "FrameDataLoader", function(){
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
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
