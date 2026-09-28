(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack',['org.opensourcephysics.cabrillo.tracker.PointMass','.FrameData'],'org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.FirstDerivative','org.opensourcephysics.cabrillo.tracker.SecondDerivative','org.opensourcephysics.cabrillo.tracker.BounceDerivatives','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.display.TeXParser','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.LineFootprint','java.util.ArrayList','java.util.IdentityHashMap','java.util.TreeSet','java.awt.geom.GeneralPath','java.awt.BasicStroke','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.CircleFootprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','org.opensourcephysics.cabrillo.tracker.PositionStep','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.AutoTracker','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.cabrillo.tracker.CenterOfMass','org.opensourcephysics.cabrillo.tracker.DynamicSystem','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','org.opensourcephysics.cabrillo.tracker.VectorStep','javax.swing.JMenuItem','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.media.core.NumberField',['org.opensourcephysics.cabrillo.tracker.PointMass','.FrameDataLoader'],['org.opensourcephysics.cabrillo.tracker.PointMass','.Loader'],'javax.swing.JLabel',['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackNumberField'],'java.awt.event.FocusAdapter',['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackDecimalField'],'javax.swing.AbstractAction','javax.swing.Box','java.awt.Dimension','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.JMenu','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.FilteredPointMass',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'javax.swing.JOptionPane']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PointMass", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack');
C$.$classes$=[['Loader',8],['FrameData',9],['FrameDataLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vFootprint=$I$(12).getFootprint$S("Footprint.Arrow");
this.aFootprint=$I$(12).getFootprint$S("Footprint.Arrow");
this.tList=Clazz.new_($I$(13,1));
this.panelVMap=Clazz.new_($I$(14,1));
this.panelAMap=Clazz.new_($I$(14,1));
this.xvis=true;
this.vvis=false;
this.avis=false;
this.xVisibleOnAll=false;
this.vVisibleOnAll=false;
this.aVisibleOnAll=false;
this.labelsVisible=!$I$(8).hideLabels;
this.algorithm=0;
this.vDerivSpill=1;
this.aDerivSpill=2;
this.bounceDerivsSpill=3;
this.params=Clazz.array(Integer.TYPE, [4]);
this.xData=Clazz.array(Double.TYPE, [5]);
this.yData=Clazz.array(Double.TYPE, [5]);
this.validData=Clazz.array(Boolean.TYPE, [5]);
this.derivData=Clazz.array(java.lang.Object, -1, [this.params, this.xData, this.yData, this.validData]);
this.skippedSteps=Clazz.new_($I$(15,1));
this.isAutofill=false;
this.showfilledSteps=$I$(8).showGaps;
this.traceVisible=false;
this.trace=Clazz.new_($I$(16,1));
this.traceStroke=Clazz.new_($I$(17,1).c$$F,[1]);
this.filteredPM=null;
},1);

C$.$fields$=[['Z',['xvis','vvis','avis','xVisibleOnAll','vVisibleOnAll','aVisibleOnAll','labelsVisible','isAutofill','showfilledSteps','vAtOrigin','aAtOrigin','traceVisible','drawsTrace','loading','filteredOpen'],'D',['mass'],'I',['algorithm','vDerivSpill','aDerivSpill','bounceDerivsSpill','filteredColor'],'S',['filteredFootprintName'],'O',['vFootprints','org.opensourcephysics.cabrillo.tracker.Footprint[]','vFootprint','org.opensourcephysics.cabrillo.tracker.Footprint','aFootprints','org.opensourcephysics.cabrillo.tracker.Footprint[]','aFootprint','org.opensourcephysics.cabrillo.tracker.Footprint','tList','java.util.ArrayList','panelVMap','java.util.Map','+panelAMap','params','int[]','xData','double[]','+yData','validData','boolean[]','derivData','Object[]','skippedSteps','java.util.TreeSet','vectorFields','org.opensourcephysics.media.core.NumberField[][]','massLabel','javax.swing.JLabel','massField','org.opensourcephysics.media.core.NumberField','mSeparator','java.awt.Component','velocityMenu','javax.swing.JMenu','+accelerationMenu','vColorItem','javax.swing.JMenuItem','+aColorItem','vFootprintMenu','javax.swing.JMenu','+aFootprintMenu','vTailsToOriginItem','javax.swing.JMenuItem','+vTailsToPositionItem','+aTailsToOriginItem','+aTailsToPositionItem','+autotrackItem','vVisibleItem','javax.swing.JCheckBoxMenuItem','+aVisibleItem','+showFilteredItem','trace','java.awt.geom.GeneralPath','traceStroke','java.awt.Stroke','filteredPM','org.opensourcephysics.cabrillo.tracker.FilteredPointMass','filter','org.opensourcephysics.cabrillo.tracker.MotionFilter']]
,['Z',['isAutoKeyDown'],'O',['vDeriv','org.opensourcephysics.cabrillo.tracker.Derivative','+aDeriv','bounceDerivs','org.opensourcephysics.cabrillo.tracker.BounceDerivatives','dataVariables','String[]','+fieldVariables','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','footprintNames','String[]','allVariables','java.util.ArrayList']]]

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
return "PointMass";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (v) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (vars[26].equals$O(v)) {
return "M";
}if (vars[1].equals$O(v) || vars[2].equals$O(v) || vars[3].equals$O(v) || vars[24].equals$O(v) || names[2].equals$O(v)  ) {
return "L";
}if (vars[5].equals$O(v) || vars[6].equals$O(v) || vars[7].equals$O(v)  ) {
return "L/T";
}if (vars[9].equals$O(v) || vars[10].equals$O(v) || vars[11].equals$O(v)  ) {
return "L/TT";
}if (vars[14].equals$O(v)) {
return "A/T";
}if (vars[15].equals$O(v)) {
return "A/TT";
}if (vars[16].equals$O(v) || vars[17].equals$O(v) ) {
return "I";
}if (vars[18].equals$O(v) || vars[19].equals$O(v) || vars[20].equals$O(v)  ) {
return "ML/T";
}if (vars[22].equals$O(v) || vars[23].equals$O(v) || names[10].equals$O(v)  ) {
return "P";
}if (vars[25].equals$O(v)) {
return "MLL/TT";
}if (names[6].equals$O(v) || (vars=this.getVariablesFromFormatterDisplayName$S(names[6]))[0].equals$O(v) || vars[1].equals$O(v) || vars[2].equals$O(v) || names[6].equals$O(v)  ) {
return "ML/TT";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (mass) {
;C$.superclazz.c$$I.apply(this,[5]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(18), -1, [$I$(18).red, $I$(18).cyan, $I$(18).magenta, Clazz.new_($I$(18,1).c$$I$I$I,[153, 153, 255])]);
var fp=Clazz.array($I$(19), [C$.footprintNames.length]);
for (var i=0; i < fp.length; i++) {
var name=C$.footprintNames[i];
if (name.equals$O("CircleFootprint.Circle")) {
fp[i]=$I$(20).getFootprint$S(name);
} else {
fp[i]=$I$(21).getFootprint$S(name);
}}
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(fp);
if ($I$(8).preferredPointMassFootprint != null ) {
this.setFootprint$S($I$(8).preferredPointMassFootprint);
}this.defaultFootprint=this.getFootprint$();
this.setVelocityFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(19), -1, [$I$(12).getFootprint$S("Footprint.Arrow"), $I$(12).getFootprint$S("Footprint.BoldArrow"), $I$(12).getFootprint$S("Footprint.BigArrow")]));
this.setAccelerationFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(19), -1, [$I$(12).getFootprint$S("Footprint.Arrow"), $I$(12).getFootprint$S("Footprint.BoldArrow"), $I$(12).getFootprint$S("Footprint.BigArrow")]));
this.setName$S($I$(11).getString$S("PointMass.New.Name"));
this.setProperty$S$O("xVarPlot0", "t");
this.setProperty$S$O("yVarPlot0", "x");
this.setProperty$S$O("xVarPlot1", "t");
this.setProperty$S$O("yVarPlot1", "y");
this.mass=Math.abs(mass);
this.setTrailVisible$Z(true);
this.setAutoAdvance$Z(true);
this.hint=$I$(11).getString$S("PointMass.Hint") + $I$(11).getString$S("PointMass.Unmarked.Hint");
this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.setVelocityColor$java_awt_Color(color);
this.setAccelerationColor$java_awt_Color(color);
C$.superclazz.prototype.setColor$java_awt_Color.apply(this, [color]);
});

Clazz.newMeth(C$, 'setVelocityColor$java_awt_Color',  function (color) {
for (var i=0; i < this.vFootprints.length; i++) {
this.vFootprints[i].setColor$java_awt_Color(color);
}
});

Clazz.newMeth(C$, 'setAccelerationColor$java_awt_Color',  function (color) {
for (var i=0; i < this.aFootprints.length; i++) {
this.aFootprints[i].setColor$java_awt_Color(color);
}
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
if (this.isLocked$()) return null;
var firstStep=this.steps.isEmpty$();
if (firstStep && this.tp != null  ) {
this.stepSizeWhenFirstMarked=this.tp.getPlayer$().getVideoClip$().getStepSize$();
}var step=this.getStep$I(n);
if (step == null ) {
step=Clazz.new_($I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[this, n, x, y]);
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, step);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
if (!this.loading && this.isAutofill$() ) {
this.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$Z(step, true);
}} else if (x != step.getPosition$().x  || y != step.getPosition$().y  ) {
var state=Clazz.new_($I$(23,1).c$$O,[step]);
step.getPosition$().setLocation$D$D(x, y);
if (this.undoEnabled) {
$I$(24).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(step, state);
}step.erase$();
}step.valid=true;
if (!this.loading) {
if (!this.autoTrackerMarking && this.tp != null   && this.tp.isAutoRefresh$() ) {
this.updateDerivatives$I(n);
}this.firePropertyChange$S$O$O("step", $I$(2).HINT_STEP_ADDED_OR_REMOVED,  new Integer(n));
if ($I$(8).warnSkippedStep && this.steps.isPreceded$I(n) && this.tp != null    && !this.isDependent$()  && !$I$(25).mayLeaveGaps$() ) {
var clip=this.tp.getPlayer$().getVideoClip$();
var stepNumber=clip.frameToStep$I(n);
if (stepNumber > 0) {
var prev=this.getStep$I(clip.stepToFrame$I(stepNumber - 1));
if (prev == null ) {
var warning=this.getSkippedStepWarningDialog$();
if (warning != null ) warning.setVisible$Z(true);
}}}}return step;
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
var step=C$.superclazz.prototype.deleteStep$I.apply(this, [n]);
this.keyFrames.remove$O(Integer.valueOf$I(n));
if (step != null ) this.updateDerivatives$I(n);
this.deleteAutoTrackerStep$I(n);
return step;
});

Clazz.newMeth(C$, 'deleteAutoTrackerStep$I',  function (n) {
var autoTracker=this.tp.getAutoTracker$Z(false);
if (autoTracker != null  && autoTracker.getTrack$() === this  ) autoTracker.delete$I(n);
});

Clazz.newMeth(C$, 'delete$',  function () {
if (this.filteredPM != null ) {
this.filteredPM.delete$();
}C$.superclazz.prototype.delete$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'delete$Z',  function (postEdit) {
if (this.filteredPM != null ) {
this.filteredPM.delete$();
}C$.superclazz.prototype.delete$Z.apply(this, [postEdit]);
});

Clazz.newMeth(C$, 'getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (point, panel) {
if (point == null ) return null;
var stepArray=null;
var panelID=panel.getID$();
for (var n=0; n < 3; n++) {
switch (n) {
case 0:
stepArray=this.steps.array;
break;
case 1:
stepArray=this.getVelocities$Integer(panelID);
break;
case 2:
default:
stepArray=this.getAccelerations$Integer(panelID);
break;
}
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) {
var points=stepArray[j].getPoints$();
for (var i=0; i < points.length; i++) if (points[i] === point ) return stepArray[j];

}
}
return null;
});

Clazz.newMeth(C$, 'getNextVisibleStep$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (step, panel) {
var panelID=panel.getID$();
var steps=this.getSteps$();
if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step)) steps=this.getVelocities$Integer(panelID);
if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step)) steps=this.getAccelerations$Integer(panelID);
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

Clazz.newMeth(C$, 'getPreviousVisibleStep$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (step, panel) {
var steps=this.getSteps$();
var panelID=panel.getID$();
if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step)) steps=this.getVelocities$Integer(panelID);
if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step)) steps=this.getAccelerations$Integer(panelID);
var found=false;
for (var i=steps.length - 1; i > -1; i--) {
if (found && steps[i] != null   && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(steps[i], panel) ) return steps[i];
if (steps[i] === step ) found=true;
}
if (found) {
for (var i=steps.length - 1; i > -1; i--) {
if (steps[i] != null  && steps[i] !== step   && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(steps[i], panel) ) return steps[i];
}
}return null;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(26).getLength$();
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
var p=C$.superclazz.prototype.autoMarkAt$I$D$D.apply(this, [n, x, y]);
this.keyFrames.add$O(Integer.valueOf$I(n));
return p;
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getVelocityFootprints$',  function () {
return this.vFootprints;
});

Clazz.newMeth(C$, 'setVelocityFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA',  function (choices) {
var valid=Clazz.new_($I$(13,1));
for (var i=0; i < choices.length; i++) {
if (choices[i] != null  && choices[i].getLength$() == this.vFootprint.getLength$() ) {
choices[i].setColor$java_awt_Color(this.vFootprint.getColor$());
valid.add$O(choices[i]);
}}
if (valid.size$() > 0) {
this.vFootprints=valid.toArray$OA(Clazz.array($I$(19), [0]));
this.setVelocityFootprint$S(this.vFootprints[0].getName$());
}});

Clazz.newMeth(C$, 'getVelocityFootprint$',  function () {
return this.vFootprint;
});

Clazz.newMeth(C$, 'setVelocityFootprint$S',  function (name) {
for (var i=0; i < this.vFootprints.length; i++) if (name.equals$O(this.vFootprints[i].getName$())) {
this.vFootprint=this.vFootprints[i];
if (this.tp == null ) return;
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panelID=this.tp.andWorld.get$I(j);
var stepArray=this.getVArray$Integer(panelID).array;
for (var k=0; k < stepArray.length; k++) if (stepArray[k] != null ) stepArray[k].setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.vFootprint);

}
this.firePropertyChange$S$O$O("footprint", null, this.vFootprint);
this.repaint$();
return;
}
});

Clazz.newMeth(C$, 'getAccelerationFootprints$',  function () {
return this.aFootprints;
});

Clazz.newMeth(C$, 'setAccelerationFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA',  function (choices) {
var valid=Clazz.new_($I$(13,1));
for (var i=0; i < choices.length; i++) {
if (choices[i] != null  && choices[i].getLength$() == this.aFootprint.getLength$() ) {
choices[i].setColor$java_awt_Color(this.aFootprint.getColor$());
valid.add$O(choices[i]);
}}
if (valid.size$() > 0) {
this.aFootprints=valid.toArray$OA(Clazz.array($I$(19), [0]));
this.setAccelerationFootprint$S(this.aFootprints[0].getName$());
}});

Clazz.newMeth(C$, 'getAccelerationFootprint$',  function () {
return this.aFootprint;
});

Clazz.newMeth(C$, 'setAccelerationFootprint$S',  function (name) {
for (var i=0; i < this.aFootprints.length; i++) if (name.equals$O(this.aFootprints[i].getName$())) {
this.aFootprint=this.aFootprints[i];
if (this.tp == null ) return;
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panelID=this.tp.andWorld.get$I(j);
var stepArray=this.getAArray$Integer(panelID).array;
for (var k=0; k < stepArray.length; k++) if (stepArray[k] != null ) stepArray[k].setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.aFootprint);

}
this.repaint$();
this.firePropertyChange$S$O$O("footprint", null, this.aFootprint);
return;
}
});

Clazz.newMeth(C$, 'getFootprints$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
if (step == null ) return this.getFootprints$();
 else if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step)) return this.getVelocityFootprints$();
 else if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step)) return this.getAccelerationFootprints$();
return this.getFootprints$();
});

Clazz.newMeth(C$, 'setFootprint$S$org_opensourcephysics_cabrillo_tracker_Step',  function (name, step) {
if (step == null ) this.setFootprint$S(name);
 else if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step)) this.setVelocityFootprint$S(name);
 else if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step)) this.setAccelerationFootprint$S(name);
 else this.setFootprint$S(name);
});

Clazz.newMeth(C$, 'getFootprint$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
if (step != null ) return step.footprint;
return this.getFootprint$();
});

Clazz.newMeth(C$, 'setMarking$Z',  function (marking) {
C$.superclazz.prototype.setMarking$Z.apply(this, [marking]);
this.repaint$Integer(this.tp.getID$());
});

Clazz.newMeth(C$, 'getMass$',  function () {
return this.mass;
});

Clazz.newMeth(C$, 'setMass$D',  function (mass) {
if (mass == this.mass ) return;
mass=Math.abs(mass);
mass=Math.max(mass, 1.0E-30);
this.mass=mass;
this.firePropertyChange$S$O$O("mass", null, Double.valueOf$D(mass));
this.invalidateData$O(this);
if (this.datasetManager != null ) {
var m=Double.valueOf$D(this.getMass$());
var desc=$I$(11).getString$S("ParticleModel.Parameter.Mass.Description");
this.datasetManager.setConstant$S$D$S$S("m", (m).valueOf(), m.toString(), desc);
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
$I$(27).setFont$java_awt_Component(this.massLabel);
$I$(27).setFont$java_awt_Component(this.massField);
});

Clazz.newMeth(C$, 'getWorldPosition$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (n, panel) {
var step=this.getStep$I(n);
if (step != null ) {
return step.getPosition$().getWorldPosition$org_opensourcephysics_media_core_VideoPanel(panel);
}return null;
});

Clazz.newMeth(C$, 'getWorldVelocity$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (n, panel) {
var coords=panel.getCoords$();
var dt=panel.getPlayer$().getMeanStepDuration$() / 1000.0;
var veloc=this.getVelocity$I$Integer(n, panel.getID$());
if (veloc != null ) {
var imageX=veloc.getXComponent$();
var imageY=veloc.getYComponent$();
var worldX=coords.imageToWorldXComponent$I$D$D(n, imageX, imageY) / dt;
var worldY=coords.imageToWorldYComponent$I$D$D(n, imageX, imageY) / dt;
return Clazz.new_($I$(28,1).c$$D$D,[worldX, worldY]);
}return null;
});

Clazz.newMeth(C$, 'getWorldAcceleration$I$Integer',  function (n, panelID) {
var panel=this.panel$Integer(panelID);
var coords=panel.getCoords$();
var dt=panel.getPlayer$().getMeanStepDuration$() / 1000.0;
var accel=this.getAcceleration$I$Integer(n, panelID);
if (accel != null ) {
var imageX=accel.getXComponent$();
var imageY=accel.getYComponent$();
var worldX=coords.imageToWorldXComponent$I$D$D(n, imageX, imageY) / (dt * dt);
var worldY=coords.imageToWorldYComponent$I$D$D(n, imageX, imageY) / (dt * dt);
return Clazz.new_($I$(28,1).c$$D$D,[worldX, worldY]);
}return null;
});

Clazz.newMeth(C$, 'setAlgorithm$I',  function (type) {
if (type == this.algorithm) return;
if (type == 0 || type == 1  || type == 2 ) {
this.algorithm=type;
this.refreshDataLater=false;
this.updateDerivatives$();
this.fireStepsChanged$();
}});

Clazz.newMeth(C$, 'isAutofill$',  function () {
return $I$(8).enableAutofill && this.isAutofill ;
});

Clazz.newMeth(C$, 'setAutoFill$Z',  function (autofill) {
this.isAutofill=autofill;
this.markAllInterpolatedSteps$();
});

Clazz.newMeth(C$, 'hasGaps$',  function () {
if (this.tp == null ) return false;
var clip=this.tp.getPlayer$().getVideoClip$();
var prev=-1;
if (this.keyFrames.isEmpty$() && !this.steps.isEmpty$() ) {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) {
if (!clip.includesFrame$I(i)) continue;
if (prev == -1) prev=i;
 else {
if (i - prev > clip.getStepSize$()) return true;
prev=i;
}}}
}for (var n, $n = this.keyFrames.iterator$(); $n.hasNext$()&&((n=($n.next$()).intValue$()),1);) {
if (!clip.includesFrame$I(n)) continue;
if (prev == -1) prev=n;
 else {
if (n - prev > clip.getStepSize$()) return true;
prev=n;
}}
return false;
});

Clazz.newMeth(C$, 'getUnfilledGapCount$Z',  function (emptyGapsOnly) {
var prev=-1;
var gapCount=0;
for (var n, $n = this.keyFrames.iterator$(); $n.hasNext$()&&((n=($n.next$()).intValue$()),1);) {
if (prev == -1) prev=n;
 else {
if (n - prev > 1) {
var filled=true;
var empty=true;
for (var i=prev + 1; i < n; i++) {
if (this.skippedSteps.contains$O(Integer.valueOf$I(i))) {
filled=false;
} else {
empty=false;
}}
if (!emptyGapsOnly && !filled ) ++gapCount;
 else if (emptyGapsOnly && empty ) ++gapCount;
}prev=n;
}}
return gapCount;
});

Clazz.newMeth(C$, 'markAllInterpolatedSteps$',  function () {
if (this.isLocked$()) return;
var control=Clazz.new_($I$(23,1).c$$O,[this]);
var changed=false;
var player=this.tp.getPlayer$();
var clip=player.getVideoClip$();
var stepArray=this.getSteps$();
var curStep=null;
var prevNonNullStep=null;
for (var n=0; n < stepArray.length; n++) {
var inFrame=clip.includesFrame$I(n);
if (!inFrame) continue;
curStep=stepArray[n];
if (curStep != null  && this.keyFrames.contains$O(Integer.valueOf$I(n)) ) {
if (prevNonNullStep != null ) {
changed=this.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$org_opensourcephysics_cabrillo_tracker_PositionStep(prevNonNullStep, curStep) || changed ;
}prevNonNullStep=curStep;
}}
this.refreshDataLater=false;
this.updateDerivatives$();
this.fireStepsChanged$();
if (changed) {
$I$(24).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
}});

Clazz.newMeth(C$, 'markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$Z',  function (step, refreshData) {
if (this.isLocked$() || this.tp == null  ) return;
if (!this.keyFrames.contains$O(Integer.valueOf$I(step.n))) return;
var control=Clazz.new_($I$(23,1).c$$O,[this]);
var changed=false;
var clip=this.tp.getPlayer$().getVideoClip$();
var earlier=-1;
var later=-1;
for (var keyframe, $keyframe = this.keyFrames.iterator$(); $keyframe.hasNext$()&&((keyframe=($keyframe.next$()).intValue$()),1);) {
var inFrame=clip.includesFrame$I(keyframe);
if (!inFrame || keyframe == step.n ) continue;
if (keyframe < step.n) {
earlier=keyframe;
}if (later == -1 && keyframe > step.n ) {
later=keyframe;
}}
var stepArray=this.getSteps$();
var firstStep=clip.frameToStep$I(step.n);
var lastStep=firstStep;
if (earlier > -1) {
var start=stepArray[earlier];
if (start != null ) {
changed=this.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$org_opensourcephysics_cabrillo_tracker_PositionStep(start, step);
firstStep=clip.frameToStep$I(earlier);
}}if (later > -1) {
var end=stepArray[later];
if (end != null ) {
changed=this.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$org_opensourcephysics_cabrillo_tracker_PositionStep(step, end) || changed ;
lastStep=clip.frameToStep$I(later);
}}this.refreshDataLater=!refreshData;
if (refreshData) this.updateDerivatives$I$I(firstStep, lastStep - firstStep);
this.fireStepsChanged$();
if (changed) {
$I$(24).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
}});

Clazz.newMeth(C$, 'markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$org_opensourcephysics_cabrillo_tracker_PositionStep',  function (startStep, endStep) {
if (this.isLocked$()) return false;
var clip=this.tp.getPlayer$().getVideoClip$();
var startStepNum=clip.frameToStep$I(startStep.n);
var endStepNum=clip.frameToStep$I(endStep.n);
var range=endStepNum - startStepNum;
if (range < 2) return false;
var stepArray=this.getSteps$();
var changed=false;
for (var i=startStepNum + 1; i < endStepNum; i++) {
var x1=startStep.getPosition$().getX$();
var y1=startStep.getPosition$().getY$();
var x2=endStep.getPosition$().getX$();
var y2=endStep.getPosition$().getY$();
var x=x1 + (x2 - x1) * (i - startStepNum) / range;
var y=y1 + (y2 - y1) * (i - startStepNum) / range;
var frameNum=clip.stepToFrame$I(i);
var step=stepArray[frameNum];
if (this.isAutofill$()) {
if (step == null ) {
changed=true;
step=Clazz.new_($I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[this, frameNum, x, y]);
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(frameNum, step);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
} else {
step.getPosition$().setLocation$D$D(x, y);
step.erase$();
}step.valid=true;
} else if (step != null ) {
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(step.n, null);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.tp != null ) {
this.tp.removePointMassListeners$org_opensourcephysics_cabrillo_tracker_PointMass(this);
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
return $I$(11).getString$S("PointMass.Position.Name");
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, panel) {
if (this.refreshDataLater || panel == null   || data == null  ) return;
var panelID=panel.getID$();
var count=24;
if (!this.getClass$().equals$O(Clazz.getClass($I$(29))) && !this.getClass$().equals$O(Clazz.getClass($I$(30))) ) {
count=25;
}if (this.preferredColumnOrder == null ) {
if (count == 24) this.preferredColumnOrder=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 12, 13, 14]);
 else this.preferredColumnOrder=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 12, 13, 14, 24]);
}var rotationData=this.getRotationData$();
var theta_data=rotationData[0];
var omega_data=rotationData[1];
var alpha_data=rotationData[2];
this.dataFrames.clear$();
this.skippedSteps.clear$();
var player=panel.getPlayer$();
var clip=player.getVideoClip$();
var coords=panel.getCoords$();
var stepArray=this.getSteps$();
var curStep=null;
var prevNonNullStep=null;
var len=stepArray.length;
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
var pt=0;
var ke=NaN;
var prevPt=null;
var pathlength=0;
for (var i=0; i < len; i++) {
curStep=stepArray[i];
if (curStep == null ) {
this.keyFrames.remove$O(Integer.valueOf$I(i));
continue;
}var p=(curStep).getPosition$();
var wp=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(panel);
var x=wp.getX$();
var y=wp.getY$();
if (Double.isNaN$D(x) || Double.isNaN$D(y) ) {
stepArray[i]=null;
this.keyFrames.remove$O(Integer.valueOf$I(i));
continue;
}var inFrame=clip.includesFrame$I(i);
if (!inFrame) continue;
var curStepNum=clip.frameToStep$I(i);
if (prevNonNullStep != null ) {
var prevStepNum=clip.frameToStep$I(prevNonNullStep.n);
for (var j=prevStepNum + 1; j < curStepNum; j++) {
this.skippedSteps.add$O(Integer.valueOf$I(j));
}
}prevNonNullStep=curStep;
var stepNumber=clip.frameToStep$I(i);
var t=player.getStepTime$I(stepNumber) / 1000.0;
var tf=player.getStepTime$I(stepNumber + this.vDerivSpill) / 1000.0;
var to=player.getStepTime$I(stepNumber - this.vDerivSpill) / 1000.0;
var dt_v=(tf - to) / (2 * this.vDerivSpill);
tf=player.getStepTime$I(stepNumber + this.aDerivSpill) / 1000.0;
to=player.getStepTime$I(stepNumber - this.aDerivSpill) / 1000.0;
var dt_a2=(tf - to) * (tf - to) / (4 * this.aDerivSpill * this.aDerivSpill );
validData[0][pt]=x;
validData[1][pt]=y;
var r=validData[2][pt]=Math.sqrt(x * x + y * y);
var slope=validData[3][pt]=Math.atan2(y, x);
validData[12][pt]=theta_data[i];
validData[13][pt]=omega_data[i] / dt_v;
validData[14][pt]=alpha_data[i] / dt_a2;
validData[15][pt]=stepNumber;
validData[16][pt]=i;
var veloc=this.getVelocity$I$Integer(i, panelID);
if (veloc == null ) {
validData[4][pt]=NaN;
validData[5][pt]=NaN;
validData[6][pt]=NaN;
validData[7][pt]=NaN;
validData[17][pt]=NaN;
validData[18][pt]=NaN;
validData[19][pt]=NaN;
validData[20][pt]=NaN;
ke=NaN;
} else {
var imageX=veloc.getXComponent$();
var imageY=veloc.getYComponent$();
x=validData[4][pt]=coords.imageToWorldXComponent$I$D$D(i, imageX, imageY) / dt_v;
y=validData[5][pt]=coords.imageToWorldYComponent$I$D$D(i, imageX, imageY) / dt_v;
var v2=x * x + y * y;
r=validData[6][pt]=Math.sqrt(v2);
slope=validData[7][pt]=Math.atan2(y, x);
var mass=this.getMass$();
validData[17][pt]=mass * x;
validData[18][pt]=mass * y;
validData[19][pt]=mass * r;
validData[20][pt]=mass * slope;
ke=0.5 * mass * v2 ;
}var accel=this.getAcceleration$I$Integer(i, panel.getID$());
if (accel == null ) {
validData[8][pt]=NaN;
validData[9][pt]=NaN;
validData[10][pt]=NaN;
validData[11][pt]=NaN;
} else {
var imageX=accel.getXComponent$();
var imageY=accel.getYComponent$();
x=validData[8][pt]=coords.imageToWorldXComponent$I$D$D(i, imageX, imageY) / dt_a2;
y=validData[9][pt]=coords.imageToWorldYComponent$I$D$D(i, imageX, imageY) / dt_a2;
validData[10][pt]=Math.sqrt(x * x + y * y);
validData[11][pt]=Math.atan2(y, x);
}validData[21][pt]=p.x;
validData[22][pt]=p.y;
if (prevPt != null ) {
pathlength+=prevPt.distance$java_awt_geom_Point2D(wp);
}prevPt=wp;
validData[23][pt]=pathlength;
if (count == 25) validData[24][pt]=ke;
validData[count][pt]=t;
this.dataFrames.add$O(Integer.valueOf$I(i));
++pt;
}
this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.dataVariables, null, validData, pt);
for (var i=count + 1; --i >= 0; ) {
var s;
switch (i) {
default:
s="PointMass.Data.Description." + i;
break;
case 22:
s="PointMass.Data.Description.PixelX";
break;
case 23:
s="PointMass.Data.Description.PixelY";
break;
case 24:
s="PointMass.Data.Description.PathLength";
break;
case 25:
s="PointMass.Data.Description.22";
break;
}
this.dataDescriptions[i]=$I$(11).getString$S(s);
}
var m=Double.valueOf$D(this.getMass$());
var desc=$I$(11).getString$S("ParticleModel.Parameter.Mass.Description");
data.setConstant$S$D$S$S("m", (m).valueOf(), m.toString(), desc);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (dp, _g) {
if (!(Clazz.instanceOf(dp, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.visible ) return;
var panel=dp;
var g=_g;
var clip=panel.getPlayer$().getVideoClip$();
var n=panel.getFrameNumber$();
var panelID=panel.getID$();
var stepSize=clip.getStepSize$();
if (this.trailVisible) {
var shortTrail=this.getTrailLength$() > 0;
var stepArray=this.steps.array;
var i0=(shortTrail ? Math.max(n - (this.getTrailLength$() - 1) * stepSize, 0) : 0);
n=(shortTrail ? Math.min(n + 1, stepArray.length) : stepArray.length);
for (var i=i0; i < n; i++) {
if (stepArray[i] != null ) {
if (this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(stepArray[i], panel)) {
stepArray[i].draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}var v=this.getVelocity$I$Integer(i, panelID);
if (v != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(v, panel) ) {
v.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}var a=this.getAcceleration$I$Integer(i, panelID);
if (a != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(a, panel) ) {
a.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}}}
} else {
var step=this.getStep$I(n);
if (step != null ) {
if (this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(step, panel)) {
step.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}var v=this.getVelocity$I$Integer(n, panelID);
if (v != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(v, panel) ) {
v.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}var a=this.getAcceleration$I$Integer(n, panelID);
if (a != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(a, panel) ) {
a.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}}}if (!this.drawsTrace && this.isTraceVisible$() ) {
var c=g.getColor$();
var s=g.getStroke$();
g.setColor$java_awt_Color(this.getColor$());
g.setStroke$java_awt_Stroke(this.traceStroke);
if ($I$(31).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(32).KEY_ANTIALIASING, $I$(32).VALUE_ANTIALIAS_OFF);
this.trace.reset$();
var startFrame=clip.getStartFrameNumber$();
var endFrame=clip.getEndFrameNumber$();
var reset=true;
for (var i=startFrame; i <= endFrame; i+=stepSize) {
var step=this.getStep$I(i);
if (step == null ) {
g.draw$java_awt_Shape(this.trace);
reset=true;
continue;
}var p=step.getPosition$().getScreenPosition$org_opensourcephysics_media_core_VideoPanel(panel);
if (reset) {
this.trace.reset$();
this.trace.moveTo$F$F(p.getX$(), p.getY$());
reset=false;
} else this.trace.lineTo$F$F(p.getX$(), p.getY$());
}
g.draw$java_awt_Shape(this.trace);
g.setColor$java_awt_Color(c);
g.setStroke$java_awt_Stroke(s);
}});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (dp, xpix, ypix) {
if (!(Clazz.instanceOf(dp, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.visible ) return null;
var panel=dp;
var panelID=panel.getID$();
var iad=null;
var n=panel.getFrameNumber$();
var stepSize=panel.getPlayer$().getVideoClip$().getStepSize$();
if (this.trailVisible) {
var shortTrail=this.getTrailLength$() > 0;
var stepArray=this.steps.array;
for (var i=0; i < stepArray.length; i++) {
if (shortTrail && (n - i > (this.getTrailLength$() - 1) * stepSize || i > n ) ) continue;
if (stepArray[i] != null ) {
if (this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(stepArray[i], panel)) {
iad=stepArray[i].findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (iad != null ) {
this.partName=$I$(11).getString$S("PointMass.Position.Name");
this.hint=$I$(11).getString$S("PointMass.Position.Hint");
return iad;
}}var v=this.getVelocity$I$Integer(i, panelID);
if (v != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(v, panel) ) {
iad=v.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (iad != null ) {
this.partName=$I$(11).getString$S("PointMass.Velocity.Name");
this.hint=$I$(11).getString$S("PointMass.Vector.Hint");
return iad;
}}var a=this.getAcceleration$I$Integer(i, panelID);
if (a != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(a, panel) ) {
iad=a.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (iad != null ) {
this.partName=$I$(11).getString$S("PointMass.Acceleration.Name");
this.hint=$I$(11).getString$S("PointMass.Vector.Hint");
return iad;
}}}}
} else {
var step=this.getStep$I(n);
if (step != null ) {
if (this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(step, panel)) {
iad=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (iad != null ) {
this.partName=$I$(11).getString$S("PointMass.Position.Name");
this.hint=$I$(11).getString$S("PointMass.Position.Hint");
return iad;
}}var v=this.getVelocity$I$Integer(n, panelID);
if (v != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(v, panel) ) {
iad=v.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (iad != null ) {
this.partName=$I$(11).getString$S("PointMass.Velocity.Name");
this.hint=$I$(11).getString$S("PointMass.Vector.Hint");
return iad;
}}var a=this.getAcceleration$I$Integer(n, panelID);
if (a != null  && this.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(a, panel) ) {
iad=a.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (iad != null ) {
this.partName=$I$(11).getString$S("PointMass.Acceleration.Name");
this.hint=$I$(11).getString$S("PointMass.Vector.Hint");
return iad;
}}}}var selectedStep=panel.getSelectedStep$();
if (selectedStep != null ) {
if (Clazz.instanceOf(selectedStep, "org.opensourcephysics.cabrillo.tracker.PositionStep")) {
this.partName=$I$(11).getString$S("PointMass.Position.Name");
this.partName+=" " + $I$(11).getString$S("TTrack.Selected.Hint");
this.hint=$I$(11).getString$S("PointMass.PositionSelected.Hint");
} else if (Clazz.instanceOf(selectedStep, "org.opensourcephysics.cabrillo.tracker.VectorStep")) {
if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(selectedStep)) this.partName=$I$(11).getString$S("PointMass.Velocity.Name");
 else this.partName=$I$(11).getString$S("PointMass.Acceleration.Name");
this.partName+=" " + $I$(11).getString$S("TTrack.Selected.Hint");
this.hint=$I$(11).getString$S("PointMass.VectorSelected.Hint");
}} else {
this.partName=$I$(11).getString$S("TTrack.Selected.Hint");
this.hint=$I$(11).getString$S("PointMass.Hint");
if (this.getStep$I(panel.getFrameNumber$()) == null ) this.hint+=$I$(11).getString$S("PointMass.Unmarked.Hint");
 else this.hint+=$I$(11).getString$S("PointMass.Remark.Hint");
}return null;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
if (!visible) {
for (var step, $step = 0, $$step = this.getSteps$(); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step != null  && this.tp != null  ) {
this.tp.selectedSteps.remove$O(step);
}}
}C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
});

Clazz.newMeth(C$, 'isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (step, panel) {
if (this.isPosition$org_opensourcephysics_cabrillo_tracker_Step(step) && !this.isPositionVisible$() ) return false;
if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step) && !this.isVVisible$() ) return false;
if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step) && !this.isAVisible$() ) return false;
return C$.superclazz.prototype.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [step, panel]);
});

Clazz.newMeth(C$, 'setVVisibleOnAll$Z',  function (visible) {
this.vVisibleOnAll=visible;
});

Clazz.newMeth(C$, 'setVVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (panel, visible) {
if (visible == this.isVVisible$() ) return;
this.vvis=visible;
if (!visible) {
var step=panel.getSelectedStep$();
if (step != null  && this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step) ) {
panel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
panel.selectedSteps.clear$();
}}});

Clazz.newMeth(C$, 'isVVisible$',  function () {
return (this.vVisibleOnAll || this.vvis );
});

Clazz.newMeth(C$, 'setPositionVisibleOnAll$Z',  function (visible) {
this.xVisibleOnAll=visible;
});

Clazz.newMeth(C$, 'setTraceVisible$Z',  function (visible) {
this.traceVisible=visible;
});

Clazz.newMeth(C$, 'isTraceVisible$',  function () {
return this.traceVisible;
});

Clazz.newMeth(C$, 'isPosition$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return Clazz.instanceOf(step, "org.opensourcephysics.cabrillo.tracker.PositionStep");
});

Clazz.newMeth(C$, 'setPositionVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (panel, visible) {
this.xvis=visible;
if (!visible) {
var step=panel.getSelectedStep$();
if (step != null  && step === this.getStep$I(step.getFrameNumber$())  ) {
panel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
panel.selectedSteps.clear$();
}}});

Clazz.newMeth(C$, 'isPositionVisible$',  function () {
return (this.xVisibleOnAll || this.xvis );
});

Clazz.newMeth(C$, 'getVelocity$I$Integer',  function (n, panelID) {
return this.getVArray$Integer(panelID).getStep$I(n);
});

Clazz.newMeth(C$, 'getVelocities$Integer',  function (panelID) {
return this.getVArray$Integer(panelID).array;
});

Clazz.newMeth(C$, 'isVelocity$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return (step.type == 1 && step.getTrack$() === this  );
});

Clazz.newMeth(C$, 'setAVisibleOnAll$Z',  function (visible) {
this.aVisibleOnAll=visible;
});

Clazz.newMeth(C$, 'setAVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (panel, visible) {
if (visible == this.isAVisible$() ) return;
this.avis=visible;
if (!visible) {
var step=panel.getSelectedStep$();
if (step != null  && this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step) ) {
panel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
panel.selectedSteps.clear$();
}}});

Clazz.newMeth(C$, 'isAVisible$',  function () {
if (this.aVisibleOnAll) return true;
return this.avis;
});

Clazz.newMeth(C$, 'getAcceleration$I$Integer',  function (n, panelID) {
return this.getAArray$Integer(panelID).getStep$I(n);
});

Clazz.newMeth(C$, 'getAccelerations$Integer',  function (panelID) {
return this.getAArray$Integer(panelID).array;
});

Clazz.newMeth(C$, 'isAcceleration$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return (step.type == 2 && step.getTrack$() === this  );
});

Clazz.newMeth(C$, 'setLabelsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (panel, visible) {
this.labelsVisible=visible;
var panelID=panel.getID$();
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) {
step.setLabelVisible$Z(visible);
step.setRolloverVisible$Z(!visible);
}}
steps=this.getVelocities$Integer(panelID);
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) {
step.setLabelVisible$Z(visible);
step.setRolloverVisible$Z(!visible);
}}
steps=this.getAccelerations$Integer(panelID);
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) {
step.setLabelVisible$Z(visible);
step.setRolloverVisible$Z(!visible);
}}
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var next=this.panel$Integer(this.tp.andWorld.get$I(j));
if (next.isWorldPanel$()) {
var view=next;
if (view.getMainPanel$() === panel ) {
this.setLabelsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(view, visible);
}}}
});

Clazz.newMeth(C$, 'isLabelsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
var step=steps[i];
if (step != null ) return step.isLabelVisible$();
}
return false;
});

Clazz.newMeth(C$, 'getNumberFieldsForStep$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
var fields;
var $var;
var xMass=this.tp.getToolBar$Z(true).xMassButton.isSelected$();
if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step)) {
fields=xMass ? this.vectorFields[2] : this.vectorFields[0];
$var=xMass ? C$.formatVariables[5] : C$.formatVariables[3];
} else if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step)) {
fields=xMass ? this.vectorFields[3] : this.vectorFields[1];
$var=xMass ? C$.formatVariables[6] : C$.formatVariables[4];
} else {
fields=C$.superclazz.prototype.getNumberFieldsForStep$org_opensourcephysics_cabrillo_tracker_Step.apply(this, [step]);
$var=C$.formatVariables[2];
}for (var i=0; i < 3; i++) {
fields[i].setUnits$S(this.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, $var));
}
return fields;
});

Clazz.newMeth(C$, 'setAnglesInRadians$Z',  function (radians) {
C$.superclazz.prototype.setAnglesInRadians$Z.apply(this, [radians]);
for (var i=0; i < 4; i++) {
this.vectorFields[i][3].setUnits$S(radians ? null : "\u00b0");
(this.vectorFields[i][3]).setDecimalPlaces$I(radians ? 3 : 1);
this.vectorFields[i][3].setConversionFactor$D(radians ? 1.0 : 57.29577951308232);
this.vectorFields[i][3].setToolTipText$S(radians ? $I$(11).getString$S("TTrack.AngleField.Radians.Tooltip") : $I$(11).getString$S("TTrack.AngleField.Degrees.Tooltip"));
}
});

Clazz.newMeth(C$, 'updateDerivatives$',  function () {
if (this.isEmpty$() || this.refreshDataLater ) return;
for (var i=this.tList.size$(); --i >= 0; ) {
var tp=this.panel$Integer(this.tList.get$I(i));
p$1.updatePanelDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [tp]);
}
});

Clazz.newMeth(C$, 'updateDerivatives$I$I',  function (startFrame, stepCount) {
if (this.isEmpty$() || this.refreshDataLater ) return;
if ($I$(8).timeLogEnabled) $I$(8,"logTime$S",[this.getClass$().getSimpleName$() + this.hashCode$() + " update derivatives " + startFrame + " steps " + stepCount ]);
for (var i=this.tList.size$(); --i >= 0; ) {
var tp=this.panel$Integer(this.tList.get$I(i));
this.updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I(tp, startFrame, stepCount);
}
});

Clazz.newMeth(C$, 'updateDerivatives$I',  function (frameNumber) {
if (this.isEmpty$() || this.refreshDataLater ) return;
for (var i=this.tList.size$(); --i >= 0; ) {
var tp=this.panel$Integer(this.tList.get$I(i));
this.updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(tp, frameNumber);
}
});

Clazz.newMeth(C$, 'updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (panel, frameNumber) {
var clip=panel.getPlayer$().getVideoClip$();
var startFrame=Math.max(frameNumber - 2 * clip.getStepSize$(), clip.getStartFrameNumber$());
this.updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I(panel, startFrame, 5);
});

Clazz.newMeth(C$, 'updatePanelDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.refreshDataLater) return;
var clip=panel.getPlayer$().getVideoClip$();
this.updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I(panel, clip.getStartFrameNumber$(), clip.getStepCount$());
}, p$1);

Clazz.newMeth(C$, 'updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I',  function (panel, startFrame, stepCount) {
if (panel.isWorldPanel$() && !(panel).isActive$() ) {
return;
}var clip=panel.getPlayer$().getVideoClip$();
if (this.derivData[2] == null ) this.derivData[2]=this.yData;
if (this.xData.length < this.steps.array.length) {
this.derivData[1]=this.xData=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.derivData[2]=this.yData=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.derivData[3]=this.validData=Clazz.array(Boolean.TYPE, [this.steps.array.length + 5]);
}this.params[1]=startFrame;
this.params[2]=clip.getStepSize$();
this.params[3]=stepCount;
for (var i=0; i < this.validData.length; i++) this.validData[i]=false;

var stepArray=this.steps.array;
for (var n=0; n < stepArray.length; n++) {
if (stepArray[n] != null  && clip.includesFrame$I(n) ) {
var step=stepArray[n];
var p=step.getPosition$().getWorldPosition$org_opensourcephysics_media_core_VideoPanel(panel);
this.xData[n]=p.getX$();
this.yData[n]=p.getY$();
this.validData[n]=true;
}}
var isLocked=this.locked;
this.locked=false;
var labelsVisible=this.isLabelsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
var xDeriv1;
var yDeriv1;
var xDeriv2;
var yDeriv2;
if (this.algorithm == 1) {
this.params[0]=this.bounceDerivsSpill;
var result=C$.bounceDerivs.evaluate$OA(this.derivData);
xDeriv1=result[0];
yDeriv1=result[1];
xDeriv2=result[2];
yDeriv2=result[3];
} else {
this.params[0]=this.algorithm == 2 ? 2 : this.vDerivSpill;
var result=C$.vDeriv.evaluate$OA(this.derivData);
xDeriv1=result[0];
yDeriv1=result[1];
this.params[0]=this.aDerivSpill;
result=C$.aDeriv.evaluate$OA(this.derivData);
xDeriv2=result[2];
yDeriv2=result[3];
}var array=this.panelVMap.get$O(panel.getID$());
var endFrame=startFrame + (stepCount - 1) * clip.getStepSize$();
var end=Math.min(endFrame, xDeriv1.length - 1);
for (var n=startFrame; n <= end; n++) {
var v=array.getStep$I(n);
if ((Double.isNaN$D(xDeriv1[n]) || !this.validData[n] ) && v == null  ) continue;
if (!Double.isNaN$D(xDeriv1[n]) && this.validData[n] ) {
var x=panel.getCoords$().worldToImageXComponent$I$D$D(n, xDeriv1[n], yDeriv1[n]);
var y=panel.getCoords$().worldToImageYComponent$I$D$D(n, xDeriv1[n], yDeriv1[n]);
if (v == null ) {
var p=(this.getStep$I(n)).getPosition$();
v=Clazz.new_([this, n, p.getX$(), p.getY$(), x, y, 1],$I$(33,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$I$D$D$D$D$I);
v.setTipEnabled$Z(false);
v.getHandle$().setStepEditTrigger$Z(true);
v.setDefaultPointIndex$I(2);
v.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.vFootprint);
v.setLabelVisible$Z(labelsVisible);
v.setRolloverVisible$Z(!labelsVisible);
v.attach$org_opensourcephysics_media_core_TPoint(p);
array.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, v);
panel.addDirtyRegion$java_awt_Rectangle(null);
} else if (((100 * v.getXComponent$())|0) != ((100 * x)|0) || ((100 * v.getYComponent$())|0) != ((100 * y)|0) ) {
panel.addDirtyRegion$java_awt_Rectangle(null);
v.attach$org_opensourcephysics_media_core_TPoint(v.getAttachmentPoint$());
v.setXYComponents$D$D(x, y);
panel.addDirtyRegion$java_awt_Rectangle(null);
} else v.attach$org_opensourcephysics_media_core_TPoint(v.getAttachmentPoint$());
} else {
array.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
panel.addDirtyRegion$java_awt_Rectangle(null);
}}
array=this.panelAMap.get$O(panel.getID$());
end=Math.min(endFrame, xDeriv2.length - 1);
for (var n=startFrame; n <= end; n++) {
var a=array.getStep$I(n);
if ((Double.isNaN$D(xDeriv2[n]) || !this.validData[n] ) && a == null  ) continue;
if (!Double.isNaN$D(xDeriv2[n]) && this.validData[n] ) {
var x=panel.getCoords$().worldToImageXComponent$I$D$D(n, xDeriv2[n], yDeriv2[n]);
var y=panel.getCoords$().worldToImageYComponent$I$D$D(n, xDeriv2[n], yDeriv2[n]);
if (a == null ) {
var p=(this.getStep$I(n)).getPosition$();
a=Clazz.new_([this, n, p.getX$(), p.getY$(), x, y, 2],$I$(33,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$I$D$D$D$D$I);
a.getHandle$().setStepEditTrigger$Z(true);
a.setTipEnabled$Z(false);
a.setDefaultPointIndex$I(2);
a.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.aFootprint);
a.setLabelVisible$Z(labelsVisible);
a.setRolloverVisible$Z(!labelsVisible);
a.attach$org_opensourcephysics_media_core_TPoint(p);
array.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, a);
panel.addDirtyRegion$java_awt_Rectangle(null);
} else if (((100 * a.getXComponent$())|0) != ((100 * x)|0) || ((100 * a.getYComponent$())|0) != ((100 * y)|0) ) {
panel.addDirtyRegion$java_awt_Rectangle(null);
a.attach$org_opensourcephysics_media_core_TPoint(a.getAttachmentPoint$());
a.setXYComponents$D$D(x, y);
panel.addDirtyRegion$java_awt_Rectangle(null);
} else a.attach$org_opensourcephysics_media_core_TPoint(a.getAttachmentPoint$());
} else {
array.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
panel.addDirtyRegion$java_awt_Rectangle(null);
}}
this.locked=isLocked;
panel.repaintDirtyRegion$();
});

Clazz.newMeth(C$, 'getRotationData$',  function () {
this.derivData[2]=null;
if (this.xData.length < this.steps.array.length) {
this.derivData[1]=this.xData=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.yData=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.derivData[3]=this.validData=Clazz.array(Boolean.TYPE, [this.steps.array.length + 5]);
}for (var i=0; i < this.steps.array.length; i++) this.validData[i]=false;

var clip=this.tp.getPlayer$().getVideoClip$();
this.params[1]=clip.getStartFrameNumber$();
this.params[2]=clip.getStepSize$();
this.params[3]=clip.getStepCount$();
var stepArray=this.steps.array;
var rotation=0;
var prevAngle=0;
for (var n=0; n < stepArray.length; n++) {
if (stepArray[n] != null  && clip.includesFrame$I(n) ) {
var step=stepArray[n];
var p=step.getPosition$().getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
var angle=Math.atan2(p.getY$(), p.getX$());
var delta=angle - prevAngle;
if (delta < -3.141592653589793 ) delta+=6.283185307179586;
 else if (delta > 3.141592653589793 ) delta-=6.283185307179586;
rotation+=delta;
prevAngle=angle;
this.xData[n]=rotation;
this.validData[n]=true;
} else this.xData[n]=NaN;
}
var isLocked=this.locked;
this.locked=false;
this.params[0]=this.vDerivSpill;
var result=C$.vDeriv.evaluate$OA(this.derivData);
var omega=result[0];
this.params[0]=this.aDerivSpill;
result=C$.aDeriv.evaluate$OA(this.derivData);
var alpha=result[2];
this.locked=isLocked;
return Clazz.array(java.lang.Object, -1, [this.xData, omega, alpha]);
});

Clazz.newMeth(C$, 'getRotationData$I$I',  function (startFrame, stepCount) {
if (this.xData.length < this.steps.array.length) {
this.derivData[1]=this.xData=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.derivData[2]=this.yData=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.derivData[3]=this.validData=Clazz.array(Boolean.TYPE, [this.steps.array.length + 5]);
}for (var i=0; i < this.steps.array.length; i++) this.validData[i]=false;

var clip=this.tp.getPlayer$().getVideoClip$();
this.params[1]=startFrame;
this.params[2]=clip.getStepSize$();
this.params[3]=stepCount;
var stepArray=this.steps.array;
var rotation=0;
var prevAngle=0;
for (var n=0; n < stepArray.length; n++) {
if (stepArray[n] != null  && clip.includesFrame$I(n) ) {
var step=stepArray[n];
var p=step.getPosition$().getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
var angle=Math.atan2(p.getY$(), p.getX$());
var delta=angle - prevAngle;
if (delta < -3.141592653589793 ) delta+=6.283185307179586;
 else if (delta > 3.141592653589793 ) delta-=6.283185307179586;
rotation+=delta;
prevAngle=angle;
this.xData[n]=rotation;
this.validData[n]=true;
} else this.xData[n]=NaN;
}
var isLocked=this.locked;
this.locked=false;
this.params[0]=this.vDerivSpill;
var result=C$.vDeriv.evaluate$OA(this.derivData);
var omega=result[0];
var validDeriv=result[2];
for (var i=0; i < omega.length; i++) {
if (!validDeriv[i]) omega[i]=NaN;
}
this.params[0]=this.aDerivSpill;
result=C$.aDeriv.evaluate$OA(this.derivData);
var alpha=result[2];
this.locked=isLocked;
return Clazz.array(java.lang.Object, -1, [this.xData, omega, alpha]);
});

Clazz.newMeth(C$, 'erase$',  function () {
if (this.tp == null ) return;
C$.superclazz.prototype.erase$.apply(this, []);
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panelID=this.tp.andWorld.get$I(j);
if (this.panelVMap.get$O(panelID) != null ) {
var stepArray=this.getVelocities$Integer(panelID);
for (var i=0; i < stepArray.length; i++) if (stepArray[i] != null ) stepArray[i].erase$Integer(panelID);

stepArray=this.getAccelerations$Integer(panelID);
for (var i=0; i < stepArray.length; i++) if (stepArray[i] != null ) stepArray[i].erase$Integer(panelID);

}}
});

Clazz.newMeth(C$, 'remark$',  function () {
C$.superclazz.prototype.remark$.apply(this, []);
for (var j=0; j < this.tp.andWorld.size$(); j++) {
var panelID=this.tp.andWorld.get$I(j);
var stepArray=this.getVelocities$Integer(panelID);
for (var i=0; i < stepArray.length; i++) if (stepArray[i] != null ) {
stepArray[i].remark$Integer(panelID);
}
stepArray=this.getAccelerations$Integer(panelID);
for (var i=0; i < stepArray.length; i++) if (stepArray[i] != null ) stepArray[i].remark$Integer(panelID);

}
});

Clazz.newMeth(C$, 'erase$Integer',  function (panelID) {
C$.superclazz.prototype.erase$Integer.apply(this, [panelID]);
var stepArray=this.getVelocities$Integer(panelID);
for (var i=0; i < stepArray.length; i++) if (stepArray[i] != null ) stepArray[i].erase$Integer(panelID);

stepArray=this.getAccelerations$Integer(panelID);
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].erase$Integer(panelID);

});

Clazz.newMeth(C$, 'remark$Integer',  function (panelID) {
C$.superclazz.prototype.remark$Integer.apply(this, [panelID]);
var stepArray=this.getVelocities$Integer(panelID);
for (var i=0; i < stepArray.length; i++) if (stepArray[i] != null ) {
stepArray[i].remark$Integer(panelID);
}
stepArray=this.getAccelerations$Integer(panelID);
for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) stepArray[j].remark$Integer(panelID);

});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepsize", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepsize", this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
switch (e.getPropertyName$()) {
case "coords":
this.invalidateData$O(Boolean.FALSE);
this.updateDerivatives$();
break;
case "transform":
this.invalidateData$O(Boolean.FALSE);
break;
case "stepsize":
this.updateDerivatives$();
this.invalidateData$O(null);
var stepSize=this.tp.getPlayer$().getVideoClip$().getStepSize$();
if ($I$(8).warnSkippedStep && this.stepSizeWhenFirstMarked > 1  && stepSize != this.stepSizeWhenFirstMarked ) {
var warning=this.getStepSizeWarningDialog$();
if (warning != null ) warning.setVisible$Z(true);
}break;
case "adjusting":
this.refreshDataLater=(e.getNewValue$()).valueOf();
if (!this.refreshDataLater) {
this.updateDerivatives$();
p$1.fireDataButDontInvalidateIt.apply(this, []);
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
}});

Clazz.newMeth(C$, 'fireDataButDontInvalidateIt',  function () {
this.firePropertyChange$S$O$O("data", null, null);
}, p$1);

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (panel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [panel, menu0]);
if (menu0 == null ) return menu;
this.createMenuIfNecessary$();
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
this.vFootprintMenu.setText$S($I$(11).getString$S("TTrack.MenuItem.Footprint"));
this.aFootprintMenu.setText$S($I$(11).getString$S("TTrack.MenuItem.Footprint"));
this.vFootprintMenu.removeAll$();
var vFootprintListener=((P$.PointMass$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var footprintName=e.getActionCommand$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getVelocityFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []).getName$().equals$O(footprintName)) return;
var control=Clazz.new_($I$(23,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.PointMass']]);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].setVelocityFootprint$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [footprintName]);
$I$(24).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], control);
});
})()
), Clazz.new_(P$.PointMass$1.$init$,[this, null]));
var fp=this.getVelocityFootprints$();
var item;
for (var i=0; i < fp.length; i++) {
var stroke=fp[i].getStroke$();
fp[i].setStroke$java_awt_BasicStroke(Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, null, 0],$I$(17,1).c$$F$I$I$F$FA$F));
item=Clazz.new_([fp[i].getDisplayName$(), fp[i].getIcon$I$I(21, 16)],$I$(34,1).c$$S$javax_swing_Icon);
if (fp[i] === this.vFootprint ) {
item.setBorder$javax_swing_border_Border($I$(35,"createLineBorder$java_awt_Color",[item.getBackground$().darker$()]));
}item.setActionCommand$S(fp[i].getName$());
item.addActionListener$java_awt_event_ActionListener(vFootprintListener);
this.vFootprintMenu.add$javax_swing_JMenuItem(item);
fp[i].setStroke$java_awt_BasicStroke(stroke);
}
this.aFootprintMenu.removeAll$();
var aFootprintListener=((P$.PointMass$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var footprintName=e.getActionCommand$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getAccelerationFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []).getName$().equals$O(footprintName)) return;
var control=Clazz.new_($I$(23,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.PointMass']]);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].setAccelerationFootprint$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [footprintName]);
$I$(24).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], control);
});
})()
), Clazz.new_(P$.PointMass$2.$init$,[this, null]));
fp=this.getAccelerationFootprints$();
for (var i=0; i < fp.length; i++) {
var stroke=fp[i].getStroke$();
fp[i].setStroke$java_awt_BasicStroke(Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, null, 0],$I$(17,1).c$$F$I$I$F$FA$F));
item=Clazz.new_([fp[i].getDisplayName$(), fp[i].getIcon$I$I(21, 16)],$I$(34,1).c$$S$javax_swing_Icon);
if (fp[i] === this.aFootprint ) {
item.setBorder$javax_swing_border_Border($I$(35,"createLineBorder$java_awt_Color",[item.getBackground$().darker$()]));
}item.setActionCommand$S(fp[i].getName$());
item.addActionListener$java_awt_event_ActionListener(aFootprintListener);
this.aFootprintMenu.add$javax_swing_JMenuItem(item);
fp[i].setStroke$java_awt_BasicStroke(stroke);
}
if (this.getClass$() === Clazz.getClass(C$) ) {
$I$(36).checkAddMenuSep$javax_swing_JMenu(menu);
this.showFilteredItem.setText$S($I$(11).getString$S("PointMass.MenuItem.Filter.Text"));
this.showFilteredItem.setSelected$Z(this.filteredPM != null  && this.filteredPM.isOpen$() );
menu.add$javax_swing_JMenuItem(this.showFilteredItem);
}if (panel.isEnabled$S("track.autotrack") && !this.isDependent$() ) {
this.autotrackItem.setText$S($I$(11).getString$S("PointMass.MenuItem.Autotrack"));
this.autotrackItem.setEnabled$Z(panel.getVideo$() != null );
var added=false;
for (var i=0; i < menu.getItemCount$(); i++) {
var next=menu.getItem$I(i);
if (next === this.showFilteredItem ) {
menu.insert$javax_swing_JMenuItem$I(this.autotrackItem, i + 1);
added=true;
}}
if (!added) menu.add$javax_swing_JMenuItem(this.autotrackItem);
}if (panel.isEnabled$S("track.autoAdvance") || panel.isEnabled$S("track.markByDefault") ) {
$I$(36).checkAddMenuSep$javax_swing_JMenu(menu);
if (panel.isEnabled$S("track.autoAdvance")) menu.add$javax_swing_JMenuItem(this.autoAdvanceItem);
if (panel.isEnabled$S("track.markByDefault")) menu.add$javax_swing_JMenuItem(this.markByDefaultItem);
}$I$(36).checkAddMenuSep$javax_swing_JMenu(menu);
this.velocityMenu.setText$S($I$(11).getString$S("PointMass.MenuItem.Velocity"));
this.accelerationMenu.setText$S($I$(11).getString$S("PointMass.MenuItem.Acceleration"));
this.vColorItem.setText$S($I$(11).getString$S("TTrack.MenuItem.Color"));
this.aColorItem.setText$S($I$(11).getString$S("TTrack.MenuItem.Color"));
this.vTailsToOriginItem.setText$S($I$(11).getString$S("Vector.MenuItem.ToOrigin"));
this.aTailsToOriginItem.setText$S($I$(11).getString$S("Vector.MenuItem.ToOrigin"));
this.vTailsToPositionItem.setText$S($I$(11).getString$S("PointMass.MenuItem.VectorsToPosition"));
this.aTailsToPositionItem.setText$S($I$(11).getString$S("PointMass.MenuItem.VectorsToPosition"));
this.vVisibleItem.setText$S($I$(11).getString$S("TTrack.MenuItem.Visible"));
this.aVisibleItem.setText$S($I$(11).getString$S("TTrack.MenuItem.Visible"));
menu.add$javax_swing_JMenuItem(this.velocityMenu);
menu.add$javax_swing_JMenuItem(this.accelerationMenu);
if (panel.isEnabled$S("track.delete")) {
$I$(36).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.deleteStepItem);
menu.add$javax_swing_JMenuItem(this.clearStepsItem);
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
}return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
list.add$O(this.massLabel);
this.massField.setEnabled$Z(!this.isLocked$());
this.massField.setValue$D(this.getMass$());
this.massField.setUnits$S(panel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[26]));
list.add$O(this.massField);
list.add$O(this.mSeparator);
return list;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (panel, point) {
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(point, panel);
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [panel, point]);
if (step == null ) return list;
var n=step.getFrameNumber$();
n=panel.getPlayer$().getVideoClip$().frameToStep$I(n);
var fields=this.getNumberFieldsForStep$org_opensourcephysics_cabrillo_tracker_Step(step);
if (Clazz.instanceOf(step, "org.opensourcephysics.cabrillo.tracker.VectorStep")) {
var xMass=panel.getToolBar$Z(true).xMassButton.isSelected$();
if (this.isVelocity$org_opensourcephysics_cabrillo_tracker_Step(step)) {
if (xMass) {
this.xLabel.setText$S(C$.dataVariables[18]);
this.yLabel.setText$S(C$.dataVariables[19]);
this.magLabel.setText$S(C$.dataVariables[20]);
this.angleLabel.setText$S(C$.dataVariables[21]);
} else {
this.xLabel.setText$S(C$.dataVariables[5]);
this.yLabel.setText$S(C$.dataVariables[6]);
this.magLabel.setText$S(C$.dataVariables[7]);
this.angleLabel.setText$S(C$.dataVariables[8]);
}} else if (this.isAcceleration$org_opensourcephysics_cabrillo_tracker_Step(step)) {
if (xMass) {
this.xLabel.setText$S(C$.fieldVariables[18]);
this.yLabel.setText$S(C$.fieldVariables[19]);
this.magLabel.setText$S(C$.fieldVariables[20]);
this.angleLabel.setText$S(C$.fieldVariables[21]);
} else {
this.xLabel.setText$S(C$.dataVariables[9]);
this.yLabel.setText$S(C$.dataVariables[10]);
this.magLabel.setText$S(C$.dataVariables[11]);
this.angleLabel.setText$S(C$.dataVariables[12]);
}}} else {
this.xLabel.setText$S(C$.dataVariables[1]);
this.yLabel.setText$S(C$.dataVariables[2]);
this.magLabel.setText$S(C$.dataVariables[3]);
this.angleLabel.setText$S(C$.dataVariables[4]);
for (var f, $f = 0, $$f = fields; $f<$$f.length&&((f=($$f[$f])),1);$f++) {
f.setEnabled$Z(!this.isLocked$());
}
}list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
list.add$O(this.xLabel);
list.add$O(fields[0]);
list.add$O(this.xSeparator);
list.add$O(this.yLabel);
list.add$O(fields[1]);
list.add$O(this.ySeparator);
list.add$O(this.magLabel);
list.add$O(fields[2]);
list.add$O(this.magSeparator);
list.add$O(this.angleLabel);
list.add$O(fields[3]);
list.add$O(this.angleSeparator);
return list;
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
if (this.numberFields.isEmpty$()) {
this.numberFields.put$O$O(C$.fieldVariables[0], Clazz.array($I$(37), -1, [this.massField]));
this.numberFields.put$O$O(C$.fieldVariables[1], Clazz.array($I$(37), -1, [this.tField]));
this.numberFields.put$O$O(C$.fieldVariables[2], Clazz.array($I$(37), -1, [this.xField]));
this.numberFields.put$O$O(C$.fieldVariables[3], Clazz.array($I$(37), -1, [this.yField]));
this.numberFields.put$O$O(C$.fieldVariables[4], Clazz.array($I$(37), -1, [this.magField]));
this.numberFields.put$O$O(C$.fieldVariables[5], Clazz.array($I$(37), -1, [this.angleField]));
this.numberFields.put$O$O(C$.fieldVariables[6], Clazz.array($I$(37), -1, [this.vectorFields[0][0]]));
this.numberFields.put$O$O(C$.fieldVariables[7], Clazz.array($I$(37), -1, [this.vectorFields[0][1]]));
this.numberFields.put$O$O(C$.fieldVariables[8], Clazz.array($I$(37), -1, [this.vectorFields[0][2]]));
this.numberFields.put$O$O(C$.fieldVariables[9], Clazz.array($I$(37), -1, [this.vectorFields[0][3]]));
this.numberFields.put$O$O(C$.fieldVariables[10], Clazz.array($I$(37), -1, [this.vectorFields[1][0]]));
this.numberFields.put$O$O(C$.fieldVariables[11], Clazz.array($I$(37), -1, [this.vectorFields[1][1]]));
this.numberFields.put$O$O(C$.fieldVariables[12], Clazz.array($I$(37), -1, [this.vectorFields[1][2]]));
this.numberFields.put$O$O(C$.fieldVariables[13], Clazz.array($I$(37), -1, [this.vectorFields[1][3]]));
this.numberFields.put$O$O(C$.fieldVariables[14], Clazz.array($I$(37), -1, [this.vectorFields[2][0]]));
this.numberFields.put$O$O(C$.fieldVariables[15], Clazz.array($I$(37), -1, [this.vectorFields[2][1]]));
this.numberFields.put$O$O(C$.fieldVariables[16], Clazz.array($I$(37), -1, [this.vectorFields[2][2]]));
this.numberFields.put$O$O(C$.fieldVariables[17], Clazz.array($I$(37), -1, [this.vectorFields[2][3]]));
this.numberFields.put$O$O(C$.fieldVariables[18], Clazz.array($I$(37), -1, [this.vectorFields[3][0]]));
this.numberFields.put$O$O(C$.fieldVariables[19], Clazz.array($I$(37), -1, [this.vectorFields[3][1]]));
this.numberFields.put$O$O(C$.fieldVariables[20], Clazz.array($I$(37), -1, [this.vectorFields[3][2]]));
this.numberFields.put$O$O(C$.fieldVariables[21], Clazz.array($I$(37), -1, [this.vectorFields[3][3]]));
}return this.numberFields;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(3)), Clazz.new_($I$(38,1))]);
return Clazz.new_($I$(39,1));
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.massLabel=Clazz.new_($I$(40,1).c$$S,[C$.dataVariables[26]]);
this.massLabel.setBorder$javax_swing_border_Border($I$(35).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.massField=Clazz.new_($I$(41,1),[this, null]);
this.massField.addActionListener$java_awt_event_ActionListener(((P$.PointMass$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rawText=this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.getText$();
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].setMass$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.getValue$()]);
p$1.checkMassUnits$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [rawText]);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getMass$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []));
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.PointMass$3.$init$,[this, null])));
this.massField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.massField.addFocusListener$java_awt_event_FocusListener(((P$.PointMass$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.getBackground$().equals$O($I$(18).yellow)) {
var rawText=this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.getText$();
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].setMass$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.getValue$()]);
p$1.checkMassUnits$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [rawText]);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].massField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getMass$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []));
}});
})()
), Clazz.new_($I$(42,1),[this, null],P$.PointMass$4)));
this.massField.setMinValue$D(1.0E-30);
this.massField.setBorder$javax_swing_border_Border(this.xField.getBorder$());
var xyListener=((P$.PointMass$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.setXY.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
});
})()
), Clazz.new_(P$.PointMass$5.$init$,[this, null]));
this.vectorFields=Clazz.array($I$(37), [4, 4]);
for (var i=0; i < 4; i++) {
for (var j=0; j < 3; j++) {
this.vectorFields[i][j]=Clazz.new_($I$(41,1),[this, null]);
this.vectorFields[i][j].setEditable$Z(false);
this.vectorFields[i][j].setBorder$javax_swing_border_Border(this.fieldBorder);
this.vectorFields[i][j].addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
}
this.vectorFields[i][3]=Clazz.new_($I$(43,1).c$$I,[this, null, 1]);
this.vectorFields[i][3].addMouseListener$java_awt_event_MouseListener(this.formatAngleMouseListener);
this.vectorFields[i][3].setEditable$Z(false);
this.vectorFields[i][3].setBorder$javax_swing_border_Border(this.fieldBorder);
}
this.xSpinner.addChangeListener$javax_swing_event_ChangeListener(xyListener);
var xyAction=((P$.PointMass$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setXY.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
(e.getSource$()).requestFocusInWindow$();
});
})()
), Clazz.new_($I$(44,1),[this, null],P$.PointMass$6));
var xyFocusListener=((P$.PointMass$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setXY.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
});
})()
), Clazz.new_($I$(42,1),[this, null],P$.PointMass$7));
var magAngleAction=((P$.PointMass$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setMagAngle.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
(e.getSource$()).requestFocusInWindow$();
});
})()
), Clazz.new_($I$(44,1),[this, null],P$.PointMass$8));
var magAngleFocusListener=((P$.PointMass$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setMagAngle.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
});
})()
), Clazz.new_($I$(42,1),[this, null],P$.PointMass$9));
this.xField.addActionListener$java_awt_event_ActionListener(xyAction);
this.yField.addActionListener$java_awt_event_ActionListener(xyAction);
this.xField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.yField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.magField.addActionListener$java_awt_event_ActionListener(magAngleAction);
this.angleField.addActionListener$java_awt_event_ActionListener(magAngleAction);
this.magField.addFocusListener$java_awt_event_FocusListener(magAngleFocusListener);
this.angleField.addFocusListener$java_awt_event_FocusListener(magAngleFocusListener);
this.mSeparator=$I$(45,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(46,1).c$$I$I,[4, 4])]);
});

Clazz.newMeth(C$, 'createMenuIfNecessary$',  function () {
if (this.vFootprintMenu != null ) {
return;
}this.autotrackItem=Clazz.new_([$I$(11).getString$S("PointMass.MenuItem.Autotrack")],$I$(34,1).c$$S);
this.autotrackItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var autotracker=this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.getAutoTracker$Z(true);
autotracker.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass']);
autotracker.getWizard$().setVisible$Z(true);
$I$(47).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp);
});
})()
), Clazz.new_(P$.PointMass$10.$init$,[this, null])));
this.vFootprintMenu=Clazz.new_($I$(48,1));
this.aFootprintMenu=Clazz.new_($I$(48,1));
this.velocityMenu=Clazz.new_($I$(48,1));
this.accelerationMenu=Clazz.new_($I$(48,1));
this.vColorItem=Clazz.new_($I$(34,1));
this.vColorItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getVelocityFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []).getColor$();
$I$(31,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[c, $I$(11).getString$S("Velocity.Dialog.Color.Title"), ((P$.PointMass$11$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PointMass$11$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor != null ) {
var control=Clazz.new_($I$(23,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.PointMass']]);
for (var footprint, $footprint = 0, $$footprint = this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getVelocityFootprints$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []); $footprint<$$footprint.length&&((footprint=($$footprint[$footprint])),1);$footprint++) {
footprint.setColor$java_awt_Color.apply(footprint, [newColor]);
}
$I$(24).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], control);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
}});
})()
), Clazz.new_(P$.PointMass$11$lambda1.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.PointMass$11.$init$,[this, null])));
this.aColorItem=Clazz.new_($I$(34,1));
this.aColorItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getAccelerationFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []).getColor$();
$I$(31,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[c, $I$(11).getString$S("Acceleration.Dialog.Color.Title"), ((P$.PointMass$12$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PointMass$12$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor != null ) {
var control=Clazz.new_($I$(23,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.PointMass']]);
for (var footprint, $footprint = 0, $$footprint = this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].getAccelerationFootprints$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []); $footprint<$$footprint.length&&((footprint=($$footprint[$footprint])),1);$footprint++) {
footprint.setColor$java_awt_Color.apply(footprint, [newColor]);
}
$I$(24).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], control);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
}});
})()
), Clazz.new_(P$.PointMass$12$lambda1.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.PointMass$12.$init$,[this, null])));
this.vTailsToOriginItem=Clazz.new_($I$(34,1));
this.aTailsToOriginItem=Clazz.new_($I$(34,1));
this.vTailsToPositionItem=Clazz.new_($I$(34,1));
this.aTailsToPositionItem=Clazz.new_($I$(34,1));
this.vVisibleItem=Clazz.new_($I$(49,1));
this.aVisibleItem=Clazz.new_($I$(49,1));
this.velocityMenu.add$javax_swing_JMenuItem(this.vColorItem);
this.velocityMenu.add$javax_swing_JMenuItem(this.vFootprintMenu);
this.velocityMenu.addSeparator$();
this.velocityMenu.add$javax_swing_JMenuItem(this.vTailsToOriginItem);
this.velocityMenu.add$javax_swing_JMenuItem(this.vTailsToPositionItem);
this.accelerationMenu.add$javax_swing_JMenuItem(this.aColorItem);
this.accelerationMenu.add$javax_swing_JMenuItem(this.aFootprintMenu);
this.accelerationMenu.addSeparator$();
this.accelerationMenu.add$javax_swing_JMenuItem(this.aTailsToOriginItem);
this.accelerationMenu.add$javax_swing_JMenuItem(this.aTailsToPositionItem);
this.vVisibleItem.addItemListener$java_awt_event_ItemListener(((P$.PointMass$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
for (var j=0; j < this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.andWorld.size$(); j++) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].panel$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.andWorld.get$I(j)]);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].setVVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [panel, this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].vVisibleItem.isSelected$()]);
panel.repaint$();
}
});
})()
), Clazz.new_(P$.PointMass$13.$init$,[this, null])));
this.aVisibleItem.addItemListener$java_awt_event_ItemListener(((P$.PointMass$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
for (var j=0; j < this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.andWorld.size$(); j++) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].panel$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.andWorld.get$I(j)]);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].setAVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [panel, this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].aVisibleItem.isSelected$()]);
panel.repaint$();
}
});
})()
), Clazz.new_(P$.PointMass$14.$init$,[this, null])));
this.vTailsToOriginItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.snapToOrigin$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], ["v"]);
});
})()
), Clazz.new_(P$.PointMass$15.$init$,[this, null])));
this.aTailsToOriginItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.snapToOrigin$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], ["a"]);
});
})()
), Clazz.new_(P$.PointMass$16.$init$,[this, null])));
this.vTailsToPositionItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.snapToPosition$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], ["v"]);
});
})()
), Clazz.new_(P$.PointMass$17.$init$,[this, null])));
this.aTailsToPositionItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.snapToPosition$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], ["a"]);
});
})()
), Clazz.new_(P$.PointMass$18.$init$,[this, null])));
this.showFilteredItem=Clazz.new_($I$(49,1));
this.showFilteredItem.addActionListener$java_awt_event_ActionListener(((P$.PointMass$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointMass$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp == null ) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].showFilteredItem.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].showFilteredPointMass$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], [this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].filter == null ]);
} else {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].filteredPM == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].filteredPM);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].tp.getFilterDialog$().setVisible$Z(false);
}});
})()
), Clazz.new_(P$.PointMass$19.$init$,[this, null])));
});

Clazz.newMeth(C$, 'showFilteredPointMass$Z',  function (showDialog) {
if (this.filteredPM == null ) {
this.filteredPM=Clazz.new_($I$(50,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$org_opensourcephysics_cabrillo_tracker_MotionFilter,[this, this.filter]);
}if (this.filteredFootprintName != null ) {
this.filteredPM.setFootprint$S(this.filteredFootprintName);
this.filteredPM.setColor$java_awt_Color(Clazz.new_($I$(18,1).c$$I,[this.filteredColor]));
this.filteredFootprintName=null;
}this.filteredPM.setTrailLength$I(this.getTrailLength$());
this.filteredPM.setVisible$Z(true);
this.tp.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this.filteredPM);
this.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this.filteredPM);
this.filteredPM.refreshPositions$Z(true);
this.filteredPM.updateDerivatives$();
this.filteredPM.fireStepsChanged$();
var dialog=this.tp.getFilterDialog$();
dialog.setTargetMass$org_opensourcephysics_cabrillo_tracker_FilteredPointMass(this.filteredPM);
if (showDialog) dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getVArray$Integer',  function (panelID) {
var v=this.panelVMap.get$O(panelID);
return (v == null  ? p$1.createMaps$Integer$I.apply(this, [panelID, 1]) : v);
});

Clazz.newMeth(C$, 'getAArray$Integer',  function (panelID) {
var a=this.panelAMap.get$O(panelID);
return (a == null  ? p$1.createMaps$Integer$I.apply(this, [panelID, 2]) : a);
});

Clazz.newMeth(C$, 'createMaps$Integer$I',  function (panelID, retType) {
this.tList.add$O(panelID);
var v=Clazz.new_($I$(51,1),[this, null]);
this.panelVMap.put$O$O(panelID, v);
var a=Clazz.new_($I$(51,1),[this, null]);
this.panelAMap.put$O$O(panelID, a);
p$1.updatePanelDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [this.panel$Integer(panelID)]);
return (retType == 1 ? v : a);
}, p$1);

Clazz.newMeth(C$, 'setXY',  function () {
var xValue=this.xField.getValue$();
var yValue=this.yField.getValue$();
var p=this.tp.getSelectedPoint$();
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this.tp);
if (step != null ) {
var coords=this.tp.getCoords$();
var x=coords.worldToImageX$I$D$D(this.tp.getFrameNumber$(), xValue, yValue);
var y=coords.worldToImageY$I$D$D(this.tp.getFrameNumber$(), xValue, yValue);
p.setXY$D$D(x, y);
var worldPt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
this.xField.setValue$D(worldPt.getX$());
this.yField.setValue$D(worldPt.getY$());
this.magField.setValue$D(worldPt.distance$D$D(0, 0));
var theta=Math.atan2(worldPt.getY$(), worldPt.getX$());
this.angleField.setValue$D(theta);
p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.tp);
}}, p$1);

Clazz.newMeth(C$, 'setMagAngle',  function () {
var theta=this.angleField.getValue$();
var xval=this.magField.getValue$() * Math.cos(theta);
var yval=this.magField.getValue$() * Math.sin(theta);
var p=this.tp.getSelectedPoint$();
var step=this.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this.tp);
if (step != null ) {
var coords=this.tp.getCoords$();
var x=coords.worldToImageX$I$D$D(this.tp.getFrameNumber$(), xval, yval);
var y=coords.worldToImageY$I$D$D(this.tp.getFrameNumber$(), xval, yval);
p.setXY$D$D(x, y);
var worldPt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
this.xField.setValue$D(worldPt.getX$());
this.yField.setValue$D(worldPt.getY$());
this.magField.setValue$D(worldPt.distance$D$D(0, 0));
theta=Math.atan2(worldPt.getY$(), worldPt.getX$());
this.angleField.setValue$D(theta);
p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.tp);
}}, p$1);

Clazz.newMeth(C$, 'checkMassUnits$S',  function (rawText) {
var split=rawText.split$S(" ");
if (split.length > 1) {
for (var i=1; i < split.length; i++) {
if (!"".equals$O(split[i])) {
if (split[i].equals$O(this.tp.getMassUnit$())) {
this.tp.setUnitsVisible$Z(true);
} else {
var response=$I$(52,"showConfirmDialog$java_awt_Component$O$S$I",[this.tframe, $I$(11).getString$S("PointMass.Dialog.ChangeMassUnit.Message") + " \"" + split[i] + "\" ?" , $I$(11).getString$S("PointMass.Dialog.ChangeMassUnit.Title"), 0]);
if (response == 0) {
this.tp.setMassUnit$S$Z(split[i], true);
this.tp.setUnitsVisible$Z(true);
}}break;
}}
}}, p$1);

Clazz.newMeth(C$, 'snapToOrigin$S',  function (type) {
var p=this.tp.getSnapPoint$();
var steps=null;
var panelID=this.tp.getID$();
if (type.equals$O("v")) steps=this.getVelocities$Integer(panelID);
 else steps=this.getAccelerations$Integer(panelID);
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) {
var a=steps[i];
if (a.chain != null ) a.chain.clear$();
a.attach$org_opensourcephysics_media_core_TPoint(null);
a.attach$org_opensourcephysics_media_core_TPoint(p);
}}
this.repaintAll$();
if (type.equals$O("v")) this.vAtOrigin=true;
 else this.aAtOrigin=true;
}, p$1);

Clazz.newMeth(C$, 'snapToPosition$S',  function (type) {
var steps=null;
var panelID=this.tp.getID$();
if (type.equals$O("v")) steps=this.getVelocities$Integer(panelID);
 else steps=this.getAccelerations$Integer(panelID);
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) {
var v=steps[i];
var p=this.getStep$I(v.n);
if (v.chain != null ) v.chain.clear$();
v.attach$org_opensourcephysics_media_core_TPoint(null);
v.attach$org_opensourcephysics_media_core_TPoint(p.getPosition$());
}}
this.repaintAll$();
if (type.equals$O("v")) this.vAtOrigin=false;
 else this.aAtOrigin=false;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.vDeriv=Clazz.new_($I$(5,1));
C$.aDeriv=Clazz.new_($I$(6,1));
C$.bounceDerivs=Clazz.new_($I$(7,1));
C$.dataVariables=Clazz.array(String, -1, ["t", "x", "y", "r", $I$(8).THETA + "_{r}", "v_{x}", "v_{y}", "v", $I$(8).THETA + "_{v}", "a_{x}", "a_{y}", "a", $I$(8).THETA + "_{a}", $I$(8).THETA, $I$(9).parseTeX$S("$\\omega$"), $I$(9).parseTeX$S("$\\alpha$"), "step", "frame", "p_{x}", "p_{y}", "p", $I$(8).THETA + "_{p}", "pixel_{x}", "pixel_{y}", "L", "K", "m"]);
C$.fieldVariables=Clazz.array(String, -1, [C$.dataVariables[26], C$.dataVariables[0], C$.dataVariables[1], C$.dataVariables[2], C$.dataVariables[3], C$.dataVariables[4], C$.dataVariables[5], C$.dataVariables[6], C$.dataVariables[7], C$.dataVariables[8], C$.dataVariables[9], C$.dataVariables[10], C$.dataVariables[11], C$.dataVariables[12], C$.dataVariables[18], C$.dataVariables[19], C$.dataVariables[20], C$.dataVariables[21], "ma_{x}", "ma_{y}", "ma", $I$(8).THETA + "_{ma}"]);
C$.formatVariables=Clazz.array(String, -1, ["m", "t", "xy", "v", "a", "p", "ma", $I$(8).THETA, $I$(9).parseTeX$S("$\\omega$"), $I$(9).parseTeX$S("$\\alpha$"), "pixel", "K"]);
C$.footprintNames=Clazz.array(String, -1, ["Footprint.Diamond", "Footprint.Triangle", "CircleFootprint.Circle", "Footprint.VerticalLine", "Footprint.HorizontalLine", "Footprint.PositionVector", "Footprint.Spot", "Footprint.BoldDiamond", "Footprint.BoldTriangle", "Footprint.BoldVerticalLine", "Footprint.BoldHorizontalLine", "Footprint.BoldPositionVector"]);
{
C$.formatMap=Clazz.new_($I$(10,1));
C$.formatMap.put$O$O(C$.formatVariables[0], Clazz.array(String, -1, [C$.dataVariables[26]]));
C$.formatMap.put$O$O(C$.formatVariables[1], Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O(C$.formatVariables[2], Clazz.array(String, -1, [C$.dataVariables[1], C$.dataVariables[2], C$.dataVariables[3], C$.dataVariables[24]]));
C$.formatMap.put$O$O(C$.formatVariables[3], Clazz.array(String, -1, [C$.dataVariables[5], C$.dataVariables[6], C$.dataVariables[7]]));
C$.formatMap.put$O$O(C$.formatVariables[4], Clazz.array(String, -1, [C$.dataVariables[9], C$.dataVariables[10], C$.dataVariables[11]]));
C$.formatMap.put$O$O(C$.formatVariables[5], Clazz.array(String, -1, [C$.dataVariables[18], C$.dataVariables[19], C$.dataVariables[20]]));
C$.formatMap.put$O$O(C$.formatVariables[6], Clazz.array(String, -1, [C$.fieldVariables[18], C$.fieldVariables[19], C$.fieldVariables[20]]));
C$.formatMap.put$O$O(C$.formatVariables[7], Clazz.array(String, -1, [C$.dataVariables[4], C$.dataVariables[8], C$.dataVariables[12], C$.dataVariables[13], C$.dataVariables[21], C$.fieldVariables[21]]));
C$.formatMap.put$O$O(C$.formatVariables[8], Clazz.array(String, -1, [C$.dataVariables[14]]));
C$.formatMap.put$O$O(C$.formatVariables[9], Clazz.array(String, -1, [C$.dataVariables[14]]));
C$.formatMap.put$O$O(C$.formatVariables[10], Clazz.array(String, -1, [C$.dataVariables[22], C$.dataVariables[23]]));
C$.formatMap.put$O$O(C$.formatVariables[11], Clazz.array(String, -1, [C$.dataVariables[25]]));
C$.formatDescriptionMap=Clazz.new_($I$(10,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(11).getString$S("PointMass.Description.Mass"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(11).getString$S("PointMass.Data.Description.0"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[2], $I$(11).getString$S("PointMass.Position.Name"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[3], $I$(11).getString$S("PointMass.Velocity.Name"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[4], $I$(11).getString$S("PointMass.Acceleration.Name"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[5], $I$(11).getString$S("PointMass.Description.Momentum"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[6], $I$(11).getString$S("PointMass.Description.NetForce"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[7], $I$(11).getString$S("Vector.Data.Description.4"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[8], $I$(11).getString$S("PointMass.Data.Description.14"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[9], $I$(11).getString$S("PointMass.Data.Description.15"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[10], $I$(11).getString$S("PointMass.Description.Pixel"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[11], $I$(11).getString$S("PointMass.Data.Description.22"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, C$.fieldVariables);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PointMass, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
control.setValue$S$D("mass", p.getMass$());
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var fp=p.getVelocityFootprint$();
if (!fp.getColor$().equals$O(p.getColor$())) {
control.setValue$S$O("velocity_color", fp.getColor$());
}if (!fp.getName$().equals$O(p.getVelocityFootprints$()[0].getName$())) {
control.setValue$S$O("velocity_footprint", fp.getName$());
}fp=p.getAccelerationFootprint$();
if (!fp.getColor$().equals$O(p.getColor$())) {
control.setValue$S$O("acceleration_color", fp.getColor$());
}if (!fp.getName$().equals$O(p.getAccelerationFootprints$()[0].getName$())) {
control.setValue$S$O("acceleration_footprint", fp.getName$());
}if (!p.isDependent$()) {
var steps=p.getSteps$();
var data=Clazz.array($I$(3), [steps.length]);
for (var n=0; n < steps.length; n++) {
if (steps[n] == null ) continue;
data[n]=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_PositionStep,[steps[n]]);
}
control.setValue$S$O("framedata", data);
}var keys=Clazz.array(Integer.TYPE, [p.keyFrames.size$()]);
var i=0;
for (var n, $n = p.keyFrames.iterator$(); $n.hasNext$()&&((n=($n.next$())),1);) {
keys[i]=(n).$c();
++i;
}
control.setValue$S$O("keyFrames", keys);
if (p.filteredPM != null  && p.filteredPM.$filter != null  ) {
control.setValue$S$O("filtered_filter", p.filteredPM.$filter);
control.setValue$S$I("filtered_colorRGB", p.filteredPM.getColor$().getRGB$());
control.setValue$S$O("filtered_footprint", p.filteredPM.getFootprintName$());
control.setValue$S$Z("filtered_open", p.filteredPM.isOpen$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=p.isLocked$();
p.setLocked$Z(false);
var m=control.getDouble$S("mass");
if (m != NaN ) {
p.setMass$D(m);
}var c=control.getObject$S("velocity_color");
if (c != null ) p.setVelocityColor$java_awt_Color(c);
 else p.setVelocityColor$java_awt_Color(p.getColor$());
var s=control.getString$S("velocity_footprint");
if (s != null ) p.setVelocityFootprint$S(s);
 else p.setVelocityFootprint$S(p.getVelocityFootprints$()[0].getName$());
c=control.getObject$S("acceleration_color");
if (c != null ) p.setAccelerationColor$java_awt_Color(c);
 else p.setAccelerationColor$java_awt_Color(p.getColor$());
s=control.getString$S("acceleration_footprint");
if (s != null ) p.setAccelerationFootprint$S(s);
 else p.setAccelerationFootprint$S(p.getAccelerationFootprints$()[0].getName$());
var data=control.getObject$S("framedata");
if (data != null ) {
p.loading=true;
for (var n=0; n < data.length; n++) {
if (data[n] == null ) {
p.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
continue;
}var step=p.getStep$I(n);
if (step != null ) {
step.getPosition$().setLocation$D$D(data[n].x, data[n].y);
step.erase$();
} else {
p.createStep$I$D$D(n, data[n].x, data[n].y);
}}
if (!p.isDependent$()) {
var steps=p.getSteps$();
for (var n=data.length; n < steps.length; n++) {
p.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
}
}p.updateDerivatives$();
p$1.fireDataButDontInvalidateIt.apply(p, []);
p.loading=false;
}p.keyFrames.clear$();
var keys=control.getObject$S("keyFrames");
if (keys != null  && keys.length > 0 ) {
for (var i, $i = 0, $$i = keys; $i<$$i.length&&((i=($$i[$i])),1);$i++) {
p.keyFrames.add$O(Integer.valueOf$I(i));
}
} else {
var steps=p.getSteps$();
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) p.keyFrames.add$O(Integer.valueOf$I(i));
}
}s=control.getString$S("filtered_footprint");
if (s != null ) {
p.filter=control.getObject$S("filtered_filter");
p.filteredColor=control.getInt$S("filtered_colorRGB");
p.filteredFootprintName=s;
p.filteredOpen=control.getBoolean$S("filtered_open");
}p.setLocked$Z(locked);
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PointMass, "FrameData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PositionStep',  function (p) {
;C$.$init$.apply(this);
this.x=p.getPosition$().getX$();
this.y=p.getPosition$().getY$();
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PointMass, "FrameDataLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$D("x", data.x);
control.setValue$S$D("y", data.y);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
data.x=control.getDouble$S("x");
data.y=control.getDouble$S("y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
