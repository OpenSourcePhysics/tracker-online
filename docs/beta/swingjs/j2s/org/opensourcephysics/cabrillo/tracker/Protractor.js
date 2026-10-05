(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.Protractor','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.display.TeXParser','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.ProtractorFootprint','org.opensourcephysics.cabrillo.tracker.ProtractorStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'javax.swing.JCheckBoxMenuItem','javax.swing.JMenuItem','java.awt.event.FocusAdapter','java.awt.event.FocusEvent','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.media.core.NumberField','javax.swing.JPopupMenu','org.opensourcephysics.cabrillo.tracker.NumberFormatDialog','org.opensourcephysics.cabrillo.tracker.AngleRuler',['org.opensourcephysics.cabrillo.tracker.Protractor','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Protractor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.InputTrack');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.firstDerivSpill=1;
this.secondDerivSpill=2;
this.params=Clazz.array(Integer.TYPE, [4]);
this.rotationAngle=Clazz.array(Double.TYPE, [5]);
this.validData=Clazz.array(Boolean.TYPE, [5]);
this.derivData=Clazz.array(java.lang.Object, -1, [this.params, this.rotationAngle, null, this.validData]);
},1);

C$.$fields$=[['Z',['needsRotationData'],'I',['firstDerivSpill','secondDerivSpill'],'O',['attachmentItem','javax.swing.JMenuItem','params','int[]','rotationAngle','double[]','validData','boolean[]','derivData','Object[]']]
,['O',['dataVariables','String[]','+fieldVariables','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList','panelEventsProtractor','String[]']]]

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
return "Protractor";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (names[1].equals$O(variable) || vars[2].equals$O(variable) || vars[3].equals$O(variable)  ) {
return "L";
}if (vars[4].equals$O(variable) || vars[5].equals$O(variable) ) {
return "I";
}if (vars[7].equals$O(variable)) {
return "A/T";
}if (vars[8].equals$O(variable)) {
return "A/TT";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[6]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(8), -1, [Clazz.new_($I$(8,1).c$$I$I$I,[0, 140, 40])]);
this.setName$S($I$(7).getString$S("Protractor.New.Name"));
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(9), -1, [$I$(10).getFootprint$S("ProtractorFootprint.Circle3"), $I$(10).getFootprint$S("ProtractorFootprint.Circle5"), $I$(10).getFootprint$S("ProtractorFootprint.Circle3Bold"), $I$(10).getFootprint$S("ProtractorFootprint.Circle5Bold")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.setProperty$S$O("tableVar0", "0");
this.keyFrames.add$O(Integer.valueOf$I(0));
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("Protractor.Hint");
var step=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_Protractor$I$D$D$D$D,[this, 0, 100, 150, 200, 150]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(12,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
this.fixedItem=Clazz.new_([$I$(7).getString$S("TapeMeasure.MenuItem.Fixed")],$I$(13,1).c$$S);
this.fixedItem.addItemListener$java_awt_event_ItemListener(((P$.Protractor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].setFixedPosition$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].fixedItem.isSelected$()]);
});
})()
), Clazz.new_(P$.Protractor$1.$init$,[this, null])));
this.attachmentItem=Clazz.new_([$I$(7).getString$S("MeasuringTool.MenuItem.Attach")],$I$(14,1).c$$S);
this.attachmentItem.addActionListener$java_awt_event_ActionListener(((P$.Protractor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp.getAttachmentDialog$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.Protractor']);
control.setVisible$Z(true);
});
})()
), Clazz.new_(P$.Protractor$2.$init$,[this, null])));
var arcFocusListener=((P$.Protractor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].angleField.getBackground$() === $I$(8).yellow ) {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].isFixedPosition$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].keyFrames.add$O(Integer.valueOf$I(n));
}step=this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].getKeyStep$org_opensourcephysics_cabrillo_tracker_Step.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [step]);
var theta=this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].angleField.getValue$();
if (theta != step.getProtractorAngle$Z(false) ) {
step.setProtractorAngle$D(theta);
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].dataValid=false;
if (this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].isFixedPosition$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [])) this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].fireStepsChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
 else this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["step", null,  new Integer(n)]);
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp.repaint$();
}}});
})()
), Clazz.new_($I$(15,1),[this, null],P$.Protractor$3));
this.angleField.addFocusListener$java_awt_event_FocusListener(arcFocusListener);
this.angleField.addActionListener$java_awt_event_ActionListener(((P$.Protractor$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.arcFocusListener.focusLost$java_awt_event_FocusEvent(null);
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].angleField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.Protractor$4.$init$,[this, {arcFocusListener:arcFocusListener}])));
var lengthFocusListener=((P$.Protractor$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].isFixedPosition$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].keyFrames.add$O(Integer.valueOf$I(n));
}step=this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].getKeyStep$org_opensourcephysics_cabrillo_tracker_Step.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [step]);
var length=field.getValue$();
var end=field === this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].xField  ? step.end1 : step.end2;
if (length != step.getArmLength$org_opensourcephysics_media_core_TPoint(end) ) {
step.setArmLength$org_opensourcephysics_media_core_TPoint$D(end, length);
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].dataValid=false;
if (this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].isFixedPosition$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [])) this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].fireStepsChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
 else this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["step", null,  new Integer(n)]);
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp.repaint$();
}});
})()
), Clazz.new_($I$(15,1),[this, null],P$.Protractor$5));
var lengthAction=((P$.Protractor$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var field=e.getSource$();
this.$finals$.lengthFocusListener.focusLost$java_awt_event_FocusEvent(Clazz.new_($I$(16,1).c$$java_awt_Component$I,[field, 1005]));
field.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.Protractor$6.$init$,[this, {lengthFocusListener:lengthFocusListener}]));
this.xField.addFocusListener$java_awt_event_FocusListener(lengthFocusListener);
this.xField.addActionListener$java_awt_event_ActionListener(lengthAction);
this.yField.addFocusListener$java_awt_event_FocusListener(lengthFocusListener);
this.yField.addActionListener$java_awt_event_ActionListener(lengthAction);
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var isSelectedTrack=(this.tp.getSelectedTrack$() === this );
switch (e.getPropertyName$()) {
case "stepnumber":
if (isSelectedTrack) {
var step=this.getStep$I(this.tp.getFrameNumber$());
step.getProtractorAngle$Z(true);
step.getFormattedLength$org_opensourcephysics_media_core_TPoint(step.end1);
step.getFormattedLength$org_opensourcephysics_media_core_TPoint(step.end2);
this.stepValueLabel.setText$S(e.getNewValue$() + ":");
}break;
case "adjusting":
if (Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
this.refreshDataLater=(e.getNewValue$()).valueOf();
if (!this.refreshDataLater) {
this.firePropertyChange$S$O$O("data", null, null);
}}break;
case "step":
case "steps":
this.refreshAttachments$();
break;
case "selectedtrack":
if (e.getOldValue$() === this  && e.getNewValue$() !== this  ) {
this.repaint$();
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
var step=this.steps.getStep$I(n);
var pts=step.getPoints$();
var p=this.tp == null  ? null : this.tp.getSelectedPoint$();
if (p == null ) {
p=pts[2];
}if (p === pts[0]  || p === pts[1]   || p === pts[2]  ) {
p.setXY$D$D(x, y);
if (this.tp != null ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(p);
step.defaultIndex=p === pts[0]  ? 0 : p === pts[1]  ? 1 : 2;
}}return step;
});

Clazz.newMeth(C$, 'createStep$I$D$D$D$D',  function (n, x1, y1, x2, y2) {
var step=this.steps.getStep$I(n);
step.end1.setLocation$D$D(x1, y1);
step.end2.setLocation$D$D(x2, y2);
this.keyFrames.add$O(Integer.valueOf$I(n));
return step;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
this.setFixedPosition$Z(false);
var step=this.steps.getStep$I(n);
var i=this.getTargetIndex$();
if (i == 0) {
step.vertex.setLocation$D$D(x, y);
} else if (i == 1) {
step.end1.setLocation$D$D(x, y);
} else {
step.end2.setLocation$D$D(x, y);
}this.keyFrames.add$O(Integer.valueOf$I(n));
step.repaint$();
return this.getMarkedPoint$I$I(n, i);
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(11).getLength$();
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
if (pointIndex == 0) return $I$(7).getString$S("Protractor.Vertex.Name");
if (pointIndex == 1) return $I$(7).getString$S("Protractor.Base.Name");
return $I$(7).getString$S("Protractor.End.Name");
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 3;
});

Clazz.newMeth(C$, 'needsRotationData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var views=this.tframe.getTViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(trackerPanel, false);
for (var i=0; i < views.length; i++) {
if (views[i] == null ) continue;
for (var j=0; j < views[i].length; j++) {
if (views[i][j] == null ) continue;
if (views[i][j] != null  && Clazz.instanceOf(views[i][j], "org.opensourcephysics.cabrillo.tracker.TableTView") ) {
var tableView=views[i][j];
var track=tableView.getSelectedTrack$();
if (track != null  && Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.Protractor") ) {
var trackView=tableView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var cols=trackView.getVisibleColumns$();
for (var k=0; k < cols.length; k++) {
for (var m=6; m < 9; m++) {
if (C$.dataVariables[m].equals$O(cols[k])) {
return true;
}}
}
}} else if (views[i][j] != null  && Clazz.instanceOf(views[i][j], "org.opensourcephysics.cabrillo.tracker.PlotTView") ) {
var plotview=views[i][j];
var track=plotview.getSelectedTrack$();
if (track != null  && Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.Protractor") ) {
var trackView=plotview.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var plots=trackView.getPlots$();
for (var k=0; k < plots.length; k++) {
if (plots[k] == null ) continue;
for (var m=6; m < 9; m++) {
var $var=$I$(5).removeSubscripting$S(C$.dataVariables[m]);
if ((plots[k].getXVariable$() != null  && plots[k].getXVariable$().startsWith$S($var) ) || (plots[k].getYVariable$() != null  && plots[k].getYVariable$().startsWith$S($var) ) ) {
return true;
}}
}
}}}
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var rot=p$1.needsRotationData$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (rot && !this.needsRotationData ) {
this.dataValid=false;
}this.needsRotationData=rot;
var frameCount=panel.getPlayer$().getVideoClip$().getFrameCount$();
if (this.getSteps$().length < frameCount) {
this.steps.setLength$I(frameCount);
this.dataValid=false;
}return C$.superclazz.prototype.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
if (this.refreshDataLater || trackerPanel == null   || data == null  ) return;
var count=C$.dataVariables.length - 1;
this.dataFrames.clear$();
var player=trackerPanel.getPlayer$();
var clip=player.getVideoClip$();
var len=clip.getStepCount$();
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
for (var i=0; i < len; i++) {
var frame=clip.stepToFrame$I(i);
var next=this.getStep$I(frame);
next.dataVisible=true;
var theta=next.getProtractorAngle$Z(false);
var t=player.getStepTime$I(i) / 1000.0;
validData[0][i]=theta;
validData[1][i]=next.getArmLength$org_opensourcephysics_media_core_TPoint(next.end1);
validData[2][i]=next.getArmLength$org_opensourcephysics_media_core_TPoint(next.end2);
validData[3][i]=i;
validData[4][i]=frame;
validData[8][i]=t;
this.dataFrames.add$O(Integer.valueOf$I(frame));
}
if (this.needsRotationData) {
var rotationData=this.getRotationData$();
var theta=rotationData[0];
var omega=rotationData[1];
var alpha=rotationData[2];
var dt=player.getMeanStepDuration$() / 1000;
for (var i=0; i < len; i++) {
validData[5][i]=theta[clip.stepToFrame$I(i)];
validData[6][i]=omega[clip.stepToFrame$I(i)] / dt;
validData[7][i]=alpha[clip.stepToFrame$I(i)] / (dt * dt);
}
}this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.dataVariables, "Protractor.Data.Description.", validData, len);
});

Clazz.newMeth(C$, 'getRotationData$',  function () {
if (this.rotationAngle.length < this.steps.array.length) {
this.derivData[1]=this.rotationAngle=Clazz.array(Double.TYPE, [this.steps.array.length + 5]);
this.derivData[3]=this.validData=Clazz.array(Boolean.TYPE, [this.steps.array.length + 5]);
}for (var i=0; i < this.validData.length; i++) this.validData[i]=false;

var clip=this.tp.getPlayer$().getVideoClip$();
this.params[1]=clip.getStartFrameNumber$();
this.params[2]=clip.getStepSize$();
this.params[3]=clip.getStepCount$();
var stepArray=this.steps.array;
var rotation=0;
var prevAngle=0;
for (var n=0; n < stepArray.length; n++) {
if (stepArray[n] != null  && clip.includesFrame$I(n) ) {
var next=stepArray[n];
var theta=next.getProtractorAngle$Z(false);
var delta=theta - prevAngle;
if (delta < -3.141592653589793 ) delta+=6.283185307179586;
 else if (delta > 3.141592653589793 ) delta-=6.283185307179586;
rotation+=delta;
prevAngle=theta;
this.rotationAngle[n]=rotation;
this.validData[n]=true;
} else this.rotationAngle[n]=NaN;
}
var isLocked=this.locked;
this.locked=false;
this.params[0]=this.firstDerivSpill;
var result=$I$(17).vDeriv.evaluate$OA(this.derivData);
var omega=result[0];
this.params[0]=this.secondDerivSpill;
result=$I$(17).aDeriv.evaluate$OA(this.derivData);
var alpha=result[2];
this.locked=isLocked;
return Clazz.array(java.lang.Object, -1, [this.rotationAngle, omega, alpha]);
});

Clazz.newMeth(C$, 'getAttachmentDescription$I',  function (n) {
return $I$(7,"getString$S",[n == 0 ? "AttachmentInspector.Label.Vertex" : n == 1 ? "Protractor.Attachment.Base" : "Protractor.Attachment.Arm"]);
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.fixedItem.setText$S($I$(7).getString$S("TapeMeasure.MenuItem.Fixed"));
this.fixedItem.setSelected$Z(this.isFixedPosition$());
this.fixedItem.setEnabled$Z(!this.isAttached$());
this.addFixedItem$javax_swing_JMenu(menu);
this.attachmentItem.setText$S($I$(7).getString$S("MeasuringTool.MenuItem.Attach"));
menu.insert$javax_swing_JMenuItem$I(this.attachmentItem, 0);
menu.insertSeparator$I(1);
return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
this.stepLabel.setText$S($I$(7).getString$S("TTrack.Label.Step"));
this.angleLabel.setText$S($I$(7).getString$S("Protractor.Label.Angle"));
this.angleField.setToolTipText$S($I$(7).getString$S("Protractor.Field.Angle.Tooltip"));
this.xLabel.setText$S(C$.dataVariables[2]);
this.yLabel.setText$S(C$.dataVariables[3]);
this.xField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[2]));
this.yField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[3]));
var step=this.getStep$I(trackerPanel.getFrameNumber$());
this.xField.setEnabled$Z(!step.end1.isAttached$() || !step.vertex.isAttached$() );
this.yField.setEnabled$Z(!step.end2.isAttached$() || !step.vertex.isAttached$() );
var clip=trackerPanel.getPlayer$().getVideoClip$();
var n=clip.frameToStep$I(trackerPanel.getFrameNumber$());
this.stepValueLabel.setText$S(n + ":");
this.angleField.setEnabled$Z(!this.isFullyAttached$() && !this.isLocked$() );
this.rulerCheckbox.setText$S($I$(7).getString$S("InputTrack.Checkbox.Ruler"));
this.rulerCheckbox.setToolTipText$S($I$(7).getString$S("InputTrack.Checkbox.Ruler.Tooltip"));
this.rulerCheckbox.setSelected$Z(this.ruler != null  && this.ruler.isVisible$() );
list.add$O(this.rulerCheckbox);
list.add$O(this.stepSeparator);
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
list.add$O(this.angleLabel);
list.add$O(this.angleField);
list.add$O(this.xSeparator);
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.ySeparator);
list.add$O(this.yLabel);
list.add$O(this.yField);
return list;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.isVisible$() ) return null;
var trackerPanel=panel;
var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
if (trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n)) {
var ia=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (ia == null ) {
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("Protractor.Hint");
return null;
}if (ia === step.vertex ) {
this.partName=$I$(7).getString$S("Protractor.Vertex.Name");
this.hint=$I$(7).getString$S("Protractor.Vertex.Hint");
} else if (ia === step.end1 ) {
this.partName=$I$(7).getString$S("Protractor.Base.Name");
this.hint=$I$(7).getString$S("Protractor.Base.Hint");
} else if (ia === step.end2 ) {
this.partName=$I$(7).getString$S("Protractor.End.Name");
this.hint=$I$(7).getString$S("Protractor.End.Hint");
} else if (ia === step.handle ) {
this.partName=$I$(7).getString$S("Protractor.Handle.Name");
this.hint=$I$(7).getString$S("Protractor.Handle.Hint");
} else if (ia === step.rotator ) {
this.partName=$I$(7).getString$S("Protractor.Rotator.Name");
this.hint=$I$(7).getString$S("Protractor.Rotator.Hint");
} else if (ia === this ) {
this.partName=$I$(7).getString$S("Protractor.Readout.Name");
this.hint=$I$(7).getString$S("Protractor.Readout.Hint");
trackerPanel.setMessage$S(this.getMessage$());
}return this.isLocked$() ? null : ia;
}return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(7).getString$S("Protractor.Name");
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
if (this.numberFields.isEmpty$()) {
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(18), -1, [this.tField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(18), -1, [this.angleField, this.inputField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(18), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[3], Clazz.array($I$(18), -1, [this.yField]));
}return this.numberFields;
});

Clazz.newMeth(C$, 'getInputFieldPopup$',  function () {
var popup=Clazz.new_($I$(19,1));
var item=Clazz.new_($I$(14,1));
var radians=this.angleField.getConversionFactor$() == 1 ;
item.addActionListener$java_awt_event_ActionListener(((P$.Protractor$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp.anglesInRadians=!this.$finals$.radians;
});
})()
), Clazz.new_(P$.Protractor$7.$init$,[this, {radians:radians}])));
item.setText$S(radians ? $I$(7).getString$S("TTrack.AngleField.Popup.Degrees") : $I$(7).getString$S("TTrack.AngleField.Popup.Radians"));
popup.add$javax_swing_JMenuItem(item);
if (this.tp.isEnabled$S("number.formats")) {
popup.addSeparator$();
item=Clazz.new_($I$(14,1));
var selected=Clazz.array(String, -1, [$I$(4).THETA]);
item.addActionListener$java_awt_event_ActionListener(((P$.Protractor$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(20).getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA(this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'].tp, this.b$['org.opensourcephysics.cabrillo.tracker.Protractor'], this.$finals$.selected).setVisible$Z(true);
});
})()
), Clazz.new_(P$.Protractor$8.$init$,[this, {selected:selected}])));
item.setText$S($I$(7).getString$S("TTrack.MenuItem.NumberFormat"));
popup.add$javax_swing_JMenuItem(item);
}return popup;
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) this.removePanelEvents$SA(C$.panelEventsProtractor);
C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (panel != null ) {
this.setFixedPosition$Z(this.isFixedPosition$());
this.addPanelEvents$SA(C$.panelEventsProtractor);
}});

Clazz.newMeth(C$, 'setAnglesInRadians$Z',  function (radians) {
C$.superclazz.prototype.setAnglesInRadians$Z.apply(this, [radians]);
this.inputField.setConversionFactor$D(radians ? 1.0 : 57.29577951308232);
var step=this.getStep$I(this.tp.getFrameNumber$());
step.repaint$();
});

Clazz.newMeth(C$, 'getRuler$',  function () {
if (this.ruler == null ) this.ruler=Clazz.new_($I$(21,1).c$$org_opensourcephysics_cabrillo_tracker_Protractor,[this]);
return this.ruler;
});

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
var p=step;
var k=this.getKeyStep$org_opensourcephysics_cabrillo_tracker_Step(p);
var different=k.vertex.getX$() != p.vertex.getX$()  || k.vertex.getY$() != p.vertex.getY$()   || k.end1.getX$() != p.end1.getX$()   || k.end1.getY$() != p.end1.getY$()   || k.end2.getX$() != p.end2.getX$()   || k.end2.getY$() != p.end2.getY$()  ;
if (different) {
p.vertex.setLocation$java_awt_geom_Point2D(k.vertex);
p.end1.setLocation$java_awt_geom_Point2D(k.end1);
p.end2.setLocation$java_awt_geom_Point2D(k.end2);
p.erase$();
}});

Clazz.newMeth(C$, 'createInputField$',  function () {
return ((P$.Protractor$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Protractor$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.media.core.NumberField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setFixedPattern$S',  function (pattern) {
C$.superclazz.prototype.setFixedPattern$S.apply(this, [pattern]);
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].setMagValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], []);
});
})()
), Clazz.new_($I$(18,1).c$$I,[this, null, 9],P$.Protractor$9));
});

Clazz.newMeth(C$, 'getLayoutBounds$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
return (step).panelLayoutBounds.get$O(this.tp.getID$());
});

Clazz.newMeth(C$, 'checkKeyFrame$',  function () {
return !this.editing;
});

Clazz.newMeth(C$, 'endEditing$org_opensourcephysics_cabrillo_tracker_Step$S',  function (step, rawText) {
var p=step;
p.drawLayoutBounds=false;
p.setProtractorAngle$D(this.inputField.getValue$());
this.inputField.setSigFigs$I(4);
});

Clazz.newMeth(C$, 'setInputValue$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
this.inputField.setValue$D((step).getProtractorAngle$Z(false));
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(22,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.dataVariables=Clazz.array(String, -1, ["t", $I$(4).THETA, "L_{1}", "L_{2}", "step", "frame", $I$(4).THETA + "_{rot}", $I$(5).parseTeX$S("$\\omega$"), $I$(5).parseTeX$S("$\\alpha$")]);
C$.fieldVariables=C$.dataVariables;
C$.formatVariables=Clazz.array(String, -1, ["t", "L", $I$(4).THETA, $I$(5).parseTeX$S("$\\omega$"), $I$(5).parseTeX$S("$\\alpha$")]);
C$.formatMap=Clazz.new_($I$(6,1));
C$.formatMap.put$O$O("t", Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O("L", Clazz.array(String, -1, ["L_{1}", "L_{2}"]));
C$.formatMap.put$O$O($I$(4).THETA, Clazz.array(String, -1, [$I$(4).THETA, $I$(4).THETA + "_{rot}"]));
C$.formatDescriptionMap=Clazz.new_($I$(6,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(7).getString$S("PointMass.Data.Description.0"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(7).getString$S("TapeMeasure.Label.Length"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[2], $I$(7).getString$S("Vector.Data.Description.4"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
C$.panelEventsProtractor=Clazz.array(String, -1, ["selectedtrack"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Protractor, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var protractor=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$Z("fixed", protractor.isFixedPosition$());
var steps=protractor.getSteps$();
var count=steps.length;
if (protractor.isFixedPosition$()) count=1;
var data=Clazz.array(Double.TYPE, [count, null]);
for (var n=0; n < count; n++) {
if (steps[n] == null  || !protractor.keyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
var pStep=steps[n];
var stepData=Clazz.array(Double.TYPE, [6]);
stepData[0]=pStep.end1.getX$();
stepData[1]=pStep.end1.getY$();
stepData[2]=pStep.end2.getX$();
stepData[3]=pStep.end2.getY$();
stepData[4]=pStep.vertex.getX$();
stepData[5]=pStep.vertex.getY$();
data[n]=stepData;
}
control.setValue$S$O("framedata", data);
control.setValue$S$Z("ruler_visible", protractor.ruler != null  && protractor.ruler.isVisible$() );
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var protractor=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=protractor.isLocked$();
protractor.setLocked$Z(false);
protractor.fixedPosition=control.getBoolean$S("fixed");
protractor.keyFrames.clear$();
var data=control.getObject$S("framedata");
for (var n=0; n < data.length; n++) {
if (data[n] == null ) continue;
var step=protractor.createStep$I$D$D$D$D(n, data[n][0], data[n][1], data[n][2], data[n][3]);
var tapeStep=step;
tapeStep.vertex.setLocation$D$D(data[n][4], data[n][5]);
tapeStep.erase$();
}
if (control.getPropertyNamesRaw$().contains$O("ruler_visible")) {
protractor.getRuler$().setVisible$Z(control.getBoolean$S("ruler_visible"));
}protractor.setLocked$Z(locked);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
