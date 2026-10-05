(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.Calibration','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Component','javax.swing.JLabel','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','org.opensourcephysics.cabrillo.tracker.CalibrationStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],['org.opensourcephysics.cabrillo.tracker.CalibrationStep','.Position'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.tools.FontSizer','javax.swing.JComboBox','javax.swing.BorderFactory','java.awt.Color','org.opensourcephysics.media.core.NumberField','java.awt.event.FocusAdapter',['org.opensourcephysics.cabrillo.tracker.TTrack','.TextLineLabel'],['org.opensourcephysics.cabrillo.tracker.TTrack','.TrackNumberField'],'javax.swing.Box','java.awt.Dimension','javax.swing.JOptionPane',['org.opensourcephysics.cabrillo.tracker.Calibration','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Calibration", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack', 'org.opensourcephysics.cabrillo.tracker.MarkingRequired');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fieldSeparators=Clazz.array($I$(6), [3]);
this.axisLabel=Clazz.new_($I$(7,1));
this.axes=0;
this.isWorldDataValid=Clazz.array(Boolean.TYPE, -1, [false, false]);
this.fixedCoordinates=true;
},1);

C$.$fields$=[['Z',['fixedCoordinates'],'I',['axes'],'O',['x1Field','org.opensourcephysics.media.core.NumberField','+y1Field','point1MissingLabel','javax.swing.JLabel','+point2MissingLabel','x1Label','org.opensourcephysics.cabrillo.tracker.TTrack.TextLineLabel','+y1Label','fieldSeparators','java.awt.Component[]','axisSeparator','java.awt.Component','axisDropdown','javax.swing.JComboBox','axisDropdownAction','java.awt.event.ActionListener','axisLabel','javax.swing.JLabel','isWorldDataValid','boolean[]']]
,['O',['dataVariables','String[]','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getFormatVariables$',  function () {
return C$.formatVariables;
});

Clazz.newMeth(C$, 'getFormatMap$',  function () {
return C$.formatMap;
});

Clazz.newMeth(C$, 'getFormatDescMap$',  function () {
return C$.formatDescriptionMap;
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
return "L";
});

Clazz.newMeth(C$, 'getBaseType$',  function () {
return "Calibration";
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(8), -1, [$I$(9).getFootprint$S("Footprint.BoldCrosshair"), $I$(9).getFootprint$S("Footprint.Crosshair")]));
this.setName$S($I$(5).getString$S("Calibration.New.Name"));
this.setColor$java_awt_Color(this.defaultColors[0]);
this.viewable=false;
this.partName=$I$(5).getString$S("TTrack.Selected.Hint");
this.hint=$I$(5).getString$S("Calibration.Unmarked.Hint");
this.keyFrames.add$O(Integer.valueOf$I(0));
p$1.createGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setAxisType$I',  function (axis) {
if (axis == 1 || axis == 2  || axis == 0 ) {
this.axes=axis;
}});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
if (this.isLocked$()) return null;
var success=true;
var step=this.getStep$I(n);
if (step == null ) {
step=Clazz.new_($I$(10,1).c$$org_opensourcephysics_cabrillo_tracker_Calibration$I$D$D,[this, n, x, y]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
} else if (step.getPoints$()[1] == null ) {
if (this.tp != null  && this.tp.getSelectedPoint$() === step.getPoints$()[0]  ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.tp.selectedSteps.clear$();
}var p=step.addSecondPoint$D$D(x, y);
if (this.isFixedCoordinates$()) {
this.steps=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
} else if (p != null ) {
for (var next, $next = 0, $$next = this.getSteps$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next != null  && next.getPoints$()[1] == null  ) {
var nextStep=next;
next.getPoints$()[1]=Clazz.new_($I$(12,1).c$$D$D,[nextStep, null, p.x, p.y]);
}}
}} else if (this.tp != null ) {
var p=this.tp.getSelectedPoint$();
if (p == null ) {
p=step.getPosition$I(1);
}if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.CalibrationStep.Position")) {
var state=Clazz.new_($I$(13,1).c$$O,[step]);
p.setLocation$D$D(x, y);
var pt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
if (step.points[0] === p ) {
success=step.setWorldCoordinates$D$D$D$D(pt.getX$(), pt.getY$(), step.worldX1, step.worldY1);
} else {
success=step.setWorldCoordinates$D$D$D$D(step.worldX0, step.worldY0, pt.getX$(), pt.getY$());
}if (success) {
$I$(14).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(step, state);
} else {
state.loadObject$O(step);
}}}if (success) {
this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(n));
}return step;
});

Clazz.newMeth(C$, 'createStep$I$D$D$D$D',  function (n, x1, y1, x2, y2) {
this.createStep$I$D$D(n, x1, y1);
var step=this.createStep$I$D$D(n, x2, y2);
return step;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
var step=this.getStep$I(n);
var index=this.getTargetIndex$();
var coords=this.tp.getCoords$();
coords.setFixedOrigin$Z(false);
coords.setFixedAngle$Z(false);
coords.setFixedScale$Z(false);
if (step == null ) {
step=this.createStep$I$D$D(n, x, y);
return step == null  ? null : step.getPoints$()[index];
} else {
var p=step.getPoints$()[index];
if (p == null ) {
if (this.tp != null  && this.tp.getSelectedPoint$() === step.getPoints$()[0]  ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.tp.selectedSteps.clear$();
}p=step.addSecondPoint$D$D(x, y);
if (this.isFixedCoordinates$()) {
this.steps=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
} else if (p != null ) {
for (var next, $next = 0, $$next = this.getSteps$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next != null  && next.getPoints$()[1] == null  ) {
var nextStep=next;
next.getPoints$()[1]=Clazz.new_($I$(12,1).c$$D$D,[nextStep, null, p.x, p.y]);
}}
}return step.getPoints$()[index];
}var mark=step.panelMarks.get$O(this.tp.getID$());
if (mark == null ) {
var worldX=index == 0 ? step.worldX0 : step.worldX1;
var worldY=index == 0 ? step.worldY0 : step.worldY1;
var xx=coords.worldToImageX$I$D$D(n, worldX, worldY);
var yy=coords.worldToImageY$I$D$D(n, worldX, worldY);
p.setLocation$D$D(xx, yy);
}p.setAdjusting$Z$java_awt_event_MouseEvent(true, null);
p.setXY$D$D(x, y);
p.setAdjusting$Z$java_awt_event_MouseEvent(false, null);
return p;
}});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
if (this.tp != null ) {
var frameCount=this.tp.getPlayer$().getVideoClip$().getFrameCount$();
if (this.getSteps$().length < frameCount) {
this.steps.setLength$I(frameCount);
}}var step=this.steps.getStep$I(n);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_CalibrationStep(step);
return step;
});

Clazz.newMeth(C$, 'isLocked$',  function () {
var locked=C$.superclazz.prototype.isLocked$.apply(this, []);
if (this.tp != null ) {
locked=locked || this.tp.getCoords$().isLocked$() ;
}return locked;
});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(10).getLength$();
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isFixedCoordinates$',  function () {
return this.fixedCoordinates;
});

Clazz.newMeth(C$, 'setFixedCoordinates$Z',  function (fixed) {
if (this.fixedCoordinates == fixed ) return;
var control=Clazz.new_($I$(13,1).c$$O,[this]);
if (this.tp != null ) {
this.tp.changed=true;
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) {
this.steps=Clazz.new_([this, null, this.getStep$I(n)],$I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_Step);
}$I$(15).repaintT$java_awt_Component(this.tp);
}if (fixed) {
this.keyFrames.clear$();
this.keyFrames.add$O(Integer.valueOf$I(0));
}this.fixedCoordinates=fixed;
$I$(14).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
});

Clazz.newMeth(C$, 'setFootprint$S',  function (name) {
C$.superclazz.prototype.setFootprint$S.apply(this, [name]);
this.setAxisType$I(this.axes);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.isVisible$() || !this.isEnabled$()  ) return null;
var trackerPanel=panel;
var ia=null;
var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null ) {
this.partName=null;
this.hint=$I$(5).getString$S("Calibration.Unmarked.Hint") + " 1";
return null;
}if (trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n)) {
ia=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
}if (step.getPoints$()[1] == null ) {
this.partName=null;
this.hint=$I$(5).getString$S("Calibration.Unmarked.Hint") + " 2";
} else if (ia != null ) {
this.partName=$I$(5).getString$S("Calibration.Point.Name");
this.hint=$I$(5).getString$S("Calibration.Point.Hint");
} else {
this.partName=$I$(5).getString$S("TTrack.Selected.Hint");
this.hint=$I$(5).getString$S("Calibration.Halfmarked.Hint");
}return ia;
});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
C$.superclazz.prototype.setLocked$Z.apply(this, [locked]);
var enabled=!this.isLocked$();
this.xField.setEnabled$Z(enabled);
this.yField.setEnabled$Z(enabled);
this.x1Field.setEnabled$Z(enabled);
this.y1Field.setEnabled$Z(enabled);
if (this.axisDropdown != null ) this.axisDropdown.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.lockedItem.setEnabled$Z(!trackerPanel.getCoords$().isLocked$());
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
var fixedCoordinatesItem=Clazz.new_([$I$(5).getString$S("OffsetOrigin.MenuItem.Fixed")],$I$(16,1).c$$S);
$I$(17).setFont$javax_swing_AbstractButton(fixedCoordinatesItem);
fixedCoordinatesItem.addItemListener$java_awt_event_ItemListener(((P$.Calibration$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Calibration$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].setFixedCoordinates$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'], [this.$finals$.fixedCoordinatesItem.isSelected$()]);
});
})()
), Clazz.new_(P$.Calibration$1.$init$,[this, {fixedCoordinatesItem:fixedCoordinatesItem}])));
fixedCoordinatesItem.setText$S($I$(5).getString$S("OffsetOrigin.MenuItem.Fixed"));
fixedCoordinatesItem.setSelected$Z(this.isFixedCoordinates$());
menu.add$javax_swing_JMenuItem(fixedCoordinatesItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
this.axisDropdown=Clazz.new_($I$(18,1));
this.axisDropdown.setEditable$Z(false);
this.axisDropdown.addItem$O($I$(5).getString$S("Calibration.Axes.XY"));
this.axisDropdown.addItem$O($I$(5).getString$S("Calibration.Axes.XOnly"));
this.axisDropdown.addItem$O($I$(5).getString$S("Calibration.Axes.YOnly"));
this.axisDropdown.setSelectedIndex$I(this.axes);
this.axisDropdown.addActionListener$java_awt_event_ActionListener(this.axisDropdownAction);
$I$(17,"setFonts$O$I",[this.axisDropdown, $I$(17).getLevel$()]);
this.xLabel.setText$S(C$.dataVariables[0]);
this.yLabel.setText$S(C$.dataVariables[1]);
this.x1Label.setText$S(C$.dataVariables[2]);
this.y1Label.setText$S(C$.dataVariables[3]);
this.xField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[0]));
this.yField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
this.x1Field.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[2]));
this.y1Field.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[3]));
this.axisLabel.setText$S($I$(5).getString$S("Calibration.Label.Axes"));
var empty=$I$(19).createEmptyBorder$I$I$I$I(0, 4, 0, 4);
this.axisLabel.setBorder$javax_swing_border_Border(empty);
list.add$O(this.axisLabel);
list.add$O(this.axisDropdown);
list.add$O(this.axisSeparator);
var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
var exists=(step != null );
var complete=(step != null  && step.getPoints$()[1] != null  );
var s=$I$(5).getString$S("Calibration.Label.Point");
var unmarked=$I$(5).getString$S("TTrack.Label.Unmarked");
if (!exists) {
this.point1MissingLabel.setText$S(s + " 1: " + unmarked );
this.point1MissingLabel.setForeground$java_awt_Color($I$(20).red.darker$());
list.add$O(this.point1MissingLabel);
} else if (!complete) {
this.point2MissingLabel.setText$S(s + " 2: " + unmarked );
this.point2MissingLabel.setForeground$java_awt_Color($I$(20).red.darker$());
}if (exists) {
this.stepLabel.setText$S($I$(5).getString$S("TTrack.Label.Step"));
var clip=trackerPanel.getPlayer$().getVideoClip$();
n=clip.frameToStep$I(n);
this.stepValueLabel.setText$S(n + ":");
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
}if (this.axes == 2) {
if (exists) {
list.add$O(this.yLabel);
list.add$O(this.yField);
list.add$O(this.fieldSeparators[1]);
if (complete) {
list.add$O(this.y1Label);
list.add$O(this.y1Field);
} else {
list.add$O(this.point2MissingLabel);
}}} else if (this.axes == 1) {
if (exists) {
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.fieldSeparators[1]);
if (complete) {
list.add$O(this.x1Label);
list.add$O(this.x1Field);
} else {
list.add$O(this.point2MissingLabel);
}}} else {
if (exists) {
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.fieldSeparators[0]);
list.add$O(this.yLabel);
list.add$O(this.yField);
list.add$O(this.fieldSeparators[1]);
if (complete) {
list.add$O(this.x1Label);
list.add$O(this.x1Field);
list.add$O(this.fieldSeparators[2]);
list.add$O(this.y1Label);
list.add$O(this.y1Field);
} else {
list.add$O(this.point2MissingLabel);
}}}var locked=trackerPanel.getCoords$().isLocked$() || C$.superclazz.prototype.isLocked$.apply(this, []) ;
this.xField.setEnabled$Z(!locked);
this.yField.setEnabled$Z(!locked);
this.x1Field.setEnabled$Z(!locked);
this.y1Field.setEnabled$Z(!locked);
this.axisDropdown.setEnabled$Z(!locked);
this.displayWorldCoordinates$();
return list;
});

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_CalibrationStep',  function (step) {
if (step == null ) return;
var key=0;
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) key=i;
}
var keyStep=this.steps.getStep$I(key);
var different=keyStep.worldX0 != step.worldX0  || keyStep.worldY0 != step.worldY0   || keyStep.worldX1 != step.worldX1   || keyStep.worldY1 != step.worldY1  ;
if (different) {
step.worldX0=keyStep.worldX0;
step.worldY0=keyStep.worldY0;
step.worldX1=keyStep.worldX1;
step.worldY1=keyStep.worldY1;
}step.erase$();
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.point1MissingLabel, this.point2MissingLabel, this.x1Label, this.y1Label, this.x1Field, this.y1Field, this.axisLabel]);
$I$(17).setFonts$O$I(objectsToSize, level);
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(5).getString$S("Calibration.Name");
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
this.numberFields.clear$();
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(21), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(21), -1, [this.yField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(21), -1, [this.x1Field]));
this.numberFields.put$O$O(C$.dataVariables[3], Clazz.array($I$(21), -1, [this.y1Field]));
return this.numberFields;
});

Clazz.newMeth(C$, 'isMarkByDefault$',  function () {
return this.requiresMarking$() || C$.superclazz.prototype.isMarkByDefault$.apply(this, []) ;
});

Clazz.newMeth(C$, 'requiresMarking$',  function () {
var step=this.getStep$I(0);
return step == null  || step.getPoints$()[1] == null  ;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "stepnumber":
if (this.tp.getSelectedTrack$() === this ) {
this.displayWorldCoordinates$();
this.stepValueLabel.setText$S(e.getNewValue$() + ":");
}break;
case "locked":
var enabled=!this.isLocked$();
this.xField.setEnabled$Z(enabled);
this.yField.setEnabled$Z(enabled);
this.x1Field.setEnabled$Z(enabled);
this.y1Field.setEnabled$Z(enabled);
this.axisDropdown.setEnabled$Z(enabled);
break;
default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
}
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}});

Clazz.newMeth(C$, 'getTargetIndex$',  function () {
return C$.superclazz.prototype.getTargetIndex$.apply(this, []);
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
var s=$I$(5).getString$S("Calibration.Point.Name");
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null  && pointIndex == 1 ) {
return null;
}return s + " " + (pointIndex + 1) ;
});

Clazz.newMeth(C$, 'setWorldCoordinatesFromFields',  function () {
if (this.tp == null ) return;
var x1=this.xField.getValue$();
var y1=this.yField.getValue$();
var x2=this.x1Field.getValue$();
var y2=this.y1Field.getValue$();
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
var different=step.worldX0 != x1  || step.worldY0 != y1   || step.worldX1 != x2   || step.worldY1 != y2  ;
if (different) {
var trackControl=Clazz.new_($I$(13,1).c$$O,[this]);
var coordsControl=Clazz.new_([this.tp.getCoords$()],$I$(13,1).c$$O);
var success=step.setWorldCoordinates$D$D$D$D(x1, y1, x2, y2);
if (success) {
$I$(14).postTrackAndCoordsEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_XMLControl(this, trackControl, coordsControl);
} else {
this.displayWorldCoordinates$();
}}}, p$1);

Clazz.newMeth(C$, 'displayWorldCoordinates$',  function () {
var n=this.tp == null  ? 0 : this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null ) {
this.xField.setText$S(null);
this.yField.setText$S(null);
this.x1Field.setText$S(null);
this.y1Field.setText$S(null);
} else if (step.getPoints$()[1] == null ) {
this.xField.setValue$D(step.worldX0);
this.yField.setValue$D(step.worldY0);
this.x1Field.setText$S(null);
this.y1Field.setText$S(null);
} else {
this.xField.setValue$D(step.worldX0);
this.yField.setValue$D(step.worldY0);
this.x1Field.setValue$D(step.worldX1);
this.y1Field.setValue$D(step.worldY1);
}});

Clazz.newMeth(C$, 'createGUI',  function () {
var xyAction=((P$.Calibration$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Calibration$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var field=e.getSource$();
if (field.getBackground$().equals$O($I$(20).YELLOW)) {
p$1.setWorldCoordinatesFromFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'], []);
}field.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.Calibration$2.$init$,[this, null]));
var xyFocusListener=((P$.Calibration$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Calibration$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
if (field.getBackground$().equals$O($I$(20).YELLOW)) {
p$1.setWorldCoordinatesFromFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'], []);
}});
})()
), Clazz.new_($I$(22,1),[this, null],P$.Calibration$3));
this.x1Label=Clazz.new_($I$(23,1));
this.y1Label=Clazz.new_($I$(23,1));
this.x1Field=Clazz.new_($I$(24,1),[this, null]);
this.x1Field.setBorder$javax_swing_border_Border(this.fieldBorder);
this.y1Field=Clazz.new_($I$(24,1),[this, null]);
this.y1Field.setBorder$javax_swing_border_Border(this.fieldBorder);
this.x1Field.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.y1Field.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.xField.addActionListener$java_awt_event_ActionListener(xyAction);
this.xField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.yField.addActionListener$java_awt_event_ActionListener(xyAction);
this.yField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.x1Field.addActionListener$java_awt_event_ActionListener(xyAction);
this.x1Field.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.y1Field.addActionListener$java_awt_event_ActionListener(xyAction);
this.y1Field.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.point1MissingLabel=Clazz.new_($I$(7,1));
this.point2MissingLabel=Clazz.new_($I$(7,1));
this.point1MissingLabel.setBorder$javax_swing_border_Border(this.xLabel.getBorder$());
this.point2MissingLabel.setBorder$javax_swing_border_Border(this.yLabel.getBorder$());
this.x1Label.setBorder$javax_swing_border_Border(this.xLabel.getBorder$());
this.y1Label.setBorder$javax_swing_border_Border(this.yLabel.getBorder$());
this.fieldSeparators[0]=$I$(25,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(26,1).c$$I$I,[4, 4])]);
this.fieldSeparators[1]=$I$(25,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(26,1).c$$I$I,[8, 4])]);
this.fieldSeparators[2]=$I$(25,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(26,1).c$$I$I,[4, 4])]);
this.axisSeparator=$I$(25,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(26,1).c$$I$I,[8, 4])]);
this.axisDropdownAction=((P$.Calibration$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Calibration$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].axisDropdown.getSelectedIndex$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].axes == i) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].tp != null ) {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'], [n]);
var isComplete=(step != null  && step.getPoints$()[1] != null  );
if (isComplete && step != null  ) {
if (i == 1 && step.worldX0 == step.worldX1  ) {
$I$(27,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].tp, $I$(5).getString$S("Calibration.Dialog.InvalidXCoordinates.Message"), $I$(5).getString$S("Calibration.Dialog.InvalidCoordinates.Title"), 2]);
this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].axisDropdown.setSelectedIndex$I(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].axes);
return;
} else if (i == 2 && step.worldY0 == step.worldY1  ) {
$I$(27,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].tp, $I$(5).getString$S("Calibration.Dialog.InvalidYCoordinates.Message"), $I$(5).getString$S("Calibration.Dialog.InvalidCoordinates.Title"), 2]);
this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].axisDropdown.setSelectedIndex$I(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].axes);
return;
}}}this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].setAxisType$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'], [i]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].tp != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.Calibration'].tp.refreshTrackBar$();
}});
})()
), Clazz.new_(P$.Calibration$4.$init$,[this, null]));
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(28,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.dataVariables=Clazz.array(String, -1, ["x_{1}", "y_{1}", "x_{2}", "y_{2}"]);
C$.formatVariables=Clazz.array(String, -1, ["xy"]);
C$.formatMap=Clazz.new_($I$(4,1));
C$.formatMap.put$O$O("xy", C$.dataVariables);
C$.formatDescriptionMap=Clazz.new_($I$(4,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(5).getString$S("CircleFitter.Description.Positions"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Calibration, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cal=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$Z("fixed_coordinates", cal.isFixedCoordinates$());
if (!cal.steps.isEmpty$()) {
var steps=cal.getSteps$();
var stepData=Clazz.array(Double.TYPE, [steps.length, null]);
for (var i=0; i < steps.length; i++) {
if (steps[i] == null  || !cal.keyFrames.contains$O(Integer.valueOf$I(i)) ) continue;
var step=steps[i];
stepData[i]=Clazz.array(Double.TYPE, -1, [step.worldX0, step.worldY0, step.worldX1, step.worldY1]);
if (!control.getPropertyNamesRaw$().contains$O("worldX0")) {
control.setValue$S$D("worldX0", step.worldX0);
control.setValue$S$D("worldY0", step.worldY0);
control.setValue$S$D("worldX1", step.worldX1);
control.setValue$S$D("worldY1", step.worldY1);
}}
control.setValue$S$O("world_coordinates", stepData);
}var type=cal.axes == 1 ? "X" : cal.axes == 2 ? "Y" : "XY";
control.setValue$S$O("axes", type);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cal=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=cal.isLocked$();
cal.setLocked$Z(false);
var type=control.getString$S("axes");
if (type != null ) {
cal.setAxisType$I(type.equals$O("X") ? 1 : type.equals$O("Y") ? 2 : 0);
}if (control.getPropertyNamesRaw$().contains$O("fixed_coordinates")) cal.fixedCoordinates=control.getBoolean$S("fixed_coordinates");
cal.keyFrames.clear$();
if (cal.steps.isEmpty$()) cal.createStep$I$D$D$D$D(0, 0, 0, 1, 0);
var stepData=control.getObject$S("world_coordinates");
if (stepData != null ) {
for (var i=0; i < stepData.length; i++) {
if (stepData[i] != null ) {
var step=cal.getStep$I(i);
step.worldX0=stepData[i][0];
step.worldY0=stepData[i][1];
step.worldX1=stepData[i][2];
step.worldY1=stepData[i][3];
cal.keyFrames.add$O(Integer.valueOf$I(i));
}}
} else {
var step=cal.getStep$I(0);
step.worldX0=control.getDouble$S("worldX0");
step.worldY0=control.getDouble$S("worldY0");
step.worldX1=control.getDouble$S("worldX1");
step.worldY1=control.getDouble$S("worldY1");
cal.keyFrames.add$O(Integer.valueOf$I(0));
}cal.setLocked$Z(locked);
cal.displayWorldCoordinates$();
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
