(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.OffsetOrigin','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','org.opensourcephysics.cabrillo.tracker.OffsetOriginStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.media.core.NumberField','javax.swing.JLabel','javax.swing.JCheckBoxMenuItem','java.awt.event.FocusAdapter','javax.swing.Box','java.awt.Dimension',['org.opensourcephysics.cabrillo.tracker.OffsetOrigin','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OffsetOrigin", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack', 'org.opensourcephysics.cabrillo.tracker.MarkingRequired');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedCoordinates=true;
},1);

C$.$fields$=[['Z',['fixedCoordinates'],'O',['separator','java.awt.Component','fixedCoordinatesItem','javax.swing.JCheckBoxMenuItem','unmarkedLabel','javax.swing.JLabel']]
,['O',['dataVariables','String[]','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getFormatMap$',  function () {
return C$.formatMap;
});

Clazz.newMeth(C$, 'getFormatVariables$',  function () {
return C$.formatVariables;
});

Clazz.newMeth(C$, 'getFormatDescMap$',  function () {
return C$.formatDescriptionMap;
});

Clazz.newMeth(C$, 'getBaseType$',  function () {
return "OffsetOrigin";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
return "L";
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[4]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(6), -1, [$I$(6).cyan, $I$(6).magenta, $I$(6).yellow.darker$()]);
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(7), -1, [$I$(8).getFootprint$S("Footprint.BoldCrosshair"), $I$(8).getFootprint$S("Footprint.Crosshair")]));
this.defaultFootprint=this.getFootprint$();
this.setName$S($I$(5).getString$S("OffsetOrigin.New.Name"));
this.setColor$java_awt_Color(this.defaultColors[0]);
this.viewable=false;
this.partName=$I$(5).getString$S("TTrack.Selected.Hint");
this.hint=$I$(5).getString$S("OffsetOrigin.Unmarked.Hint");
this.keyFrames.add$O(Integer.valueOf$I(0));
p$1.createGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
if (this.isLocked$()) return null;
var step=this.getStep$I(n);
if (step == null ) {
step=Clazz.new_($I$(9,1).c$$org_opensourcephysics_cabrillo_tracker_OffsetOrigin$I$D$D,[this, n, x, y]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(10,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
this.firePropertyChange$S$O$O("step", null,  new Integer(n));
} else if (this.tp != null ) {
var currentState=Clazz.new_($I$(11,1).c$$O,[this]);
var p=step.getPosition$();
p.setLocation$D$D(x, y);
var pt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
step.worldX=pt.getX$();
step.worldY=pt.getY$();
this.keyFrames.add$O(Integer.valueOf$I(n));
$I$(12).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, currentState);
}return step;
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
var step=this.getStep$I(n);
var coords=this.tp.getCoords$();
coords.setFixedOrigin$Z(false);
if (step == null ) {
step=this.createStep$I$D$D(n, x, y);
if (step != null ) {
return step.getPoints$()[0];
}} else {
var p=step.getPoints$()[0];
if (p != null ) {
var mark=step.panelMarks.get$O(this.tp.getID$());
if (mark == null ) {
var xx=coords.worldToImageX$I$D$D(n, step.worldX, step.worldY);
var yy=coords.worldToImageY$I$D$D(n, step.worldX, step.worldY);
p.setLocation$D$D(xx, yy);
}p.setAdjusting$Z$java_awt_event_MouseEvent(true, null);
p.setXY$D$D(x, y);
p.setAdjusting$Z$java_awt_event_MouseEvent(false, null);
this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(n));
return p;
}}return null;
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'isFixedCoordinates$',  function () {
return this.fixedCoordinates;
});

Clazz.newMeth(C$, 'setFixedCoordinates$Z',  function (fixed) {
if (this.fixedCoordinates == fixed ) return;
var control=Clazz.new_($I$(11,1).c$$O,[this]);
if (this.tp != null ) {
this.tp.changed=true;
var n=this.tp.getFrameNumber$();
this.steps=Clazz.new_([this, null, this.getStep$I(n)],$I$(10,1).c$$org_opensourcephysics_cabrillo_tracker_Step);
$I$(13).repaintT$java_awt_Component(this.tp);
}if (fixed) {
this.keyFrames.clear$();
this.keyFrames.add$O(Integer.valueOf$I(0));
}this.fixedCoordinates=fixed;
$I$(12).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
if (this.tp != null ) {
var frameCount=this.tp.getPlayer$().getVideoClip$().getFrameCount$();
if (this.getSteps$().length < frameCount) {
this.steps.setLength$I(frameCount);
}}var step=this.steps.getStep$I(n);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_OffsetOriginStep(step);
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

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(14).getLength$();
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.isVisible$() || !this.isEnabled$()  ) return null;
var trackerPanel=panel;
var ia=null;
var step=this.getStep$I(trackerPanel.getFrameNumber$());
if (step != null ) ia=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (ia != null ) {
this.partName=$I$(5).getString$S("OffsetOrigin.Position.Name");
this.hint=$I$(5).getString$S("OffsetOrigin.Position.Hint");
} else {
this.partName=$I$(5).getString$S("TTrack.Selected.Hint");
this.hint=$I$(5).getString$S("OffsetOrigin.Unmarked.Hint");
}return ia;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.lockedItem.setEnabled$Z(!trackerPanel.getCoords$().isLocked$());
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
this.fixedCoordinatesItem.setText$S($I$(5).getString$S("OffsetOrigin.MenuItem.Fixed"));
this.fixedCoordinatesItem.setSelected$Z(this.isFixedCoordinates$());
menu.add$javax_swing_JMenuItem(this.fixedCoordinatesItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
list.add$O(this.stepSeparator);
if (step == null ) {
this.unmarkedLabel.setText$S($I$(5).getString$S("TTrack.Label.Unmarked"));
list.add$O(this.unmarkedLabel);
} else {
this.stepLabel.setText$S($I$(5).getString$S("TTrack.Label.Step"));
var clip=trackerPanel.getPlayer$().getVideoClip$();
n=clip.frameToStep$I(n);
this.stepValueLabel.setText$S(n + ":");
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
this.xLabel.setText$S(C$.dataVariables[0]);
this.yLabel.setText$S(C$.dataVariables[1]);
this.xField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[0]));
this.yField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
var locked=trackerPanel.getCoords$().isLocked$() || C$.superclazz.prototype.isLocked$.apply(this, []) ;
this.xField.setEnabled$Z(!locked);
this.yField.setEnabled$Z(!locked);
p$1.displayWorldCoordinates.apply(this, []);
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.separator);
list.add$O(this.yLabel);
list.add$O(this.yField);
}return list;
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "stepnumber":
if (this.tp.getSelectedTrack$() === this ) {
p$1.displayWorldCoordinates.apply(this, []);
this.stepValueLabel.setText$S(e.getNewValue$() + ":");
}return;
case "locked":
this.xField.setEnabled$Z(!this.isLocked$());
this.yField.setEnabled$Z(!this.isLocked$());
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
C$.superclazz.prototype.setLocked$Z.apply(this, [locked]);
this.xField.setEnabled$Z(!this.isLocked$());
this.yField.setEnabled$Z(!this.isLocked$());
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.unmarkedLabel, this.fixedCoordinatesItem]);
$I$(15).setFonts$O$I(objectsToSize, level);
});

Clazz.newMeth(C$, 'isMarkByDefault$',  function () {
return this.requiresMarking$() || C$.superclazz.prototype.isMarkByDefault$.apply(this, []) ;
});

Clazz.newMeth(C$, 'requiresMarking$',  function () {
return this.getStep$I(0) == null ;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(5).getString$S("OffsetOrigin.Name");
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
this.numberFields.clear$();
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(16), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(16), -1, [this.yField]));
return this.numberFields;
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
return $I$(5).getString$S("OffsetOrigin.Position.Name");
});

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_OffsetOriginStep',  function (step) {
if (step == null ) return;
var key=0;
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) key=i;
}
var keyStep=this.steps.getStep$I(key);
var different=keyStep.worldX != step.worldX  || keyStep.worldY != step.worldY  ;
if (different) {
step.worldX=keyStep.worldX;
step.worldY=keyStep.worldY;
}step.erase$();
});

Clazz.newMeth(C$, 'setWorldCoordinatesFromFields',  function () {
if (this.tp == null ) return;
var step=this.getStep$I(this.tp.getFrameNumber$());
var different=step.worldX != this.xField.getValue$()  || step.worldY != this.yField.getValue$()  ;
if (different) {
var trackControl=Clazz.new_($I$(11,1).c$$O,[this]);
var coordsControl=Clazz.new_([this.tp.getCoords$()],$I$(11,1).c$$O);
step.setWorldXY$D$D(this.xField.getValue$(), this.yField.getValue$());
step.getPosition$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.tp);
$I$(12).postTrackAndCoordsEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_XMLControl(this, trackControl, coordsControl);
}}, p$1);

Clazz.newMeth(C$, 'displayWorldCoordinates',  function () {
var n=this.tp == null  ? 0 : this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null ) {
this.xField.setText$S(null);
this.yField.setText$S(null);
} else {
this.xField.setValue$D(step.worldX);
this.yField.setValue$D(step.worldY);
}}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.unmarkedLabel=Clazz.new_($I$(17,1));
this.unmarkedLabel.setForeground$java_awt_Color($I$(6).red.darker$());
this.fixedCoordinatesItem=Clazz.new_([$I$(5).getString$S("OffsetOrigin.MenuItem.Fixed")],$I$(18,1).c$$S);
this.fixedCoordinatesItem.addItemListener$java_awt_event_ItemListener(((P$.OffsetOrigin$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OffsetOrigin$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOrigin'].setFixedCoordinates$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOrigin'], [this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOrigin'].fixedCoordinatesItem.isSelected$()]);
});
})()
), Clazz.new_(P$.OffsetOrigin$1.$init$,[this, null])));
var xyAction=((P$.OffsetOrigin$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "OffsetOrigin$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setWorldCoordinatesFromFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOrigin'], []);
(e.getSource$()).requestFocusInWindow$();
});
})()
), Clazz.new_(P$.OffsetOrigin$2.$init$,[this, null]));
var xyFocusListener=((P$.OffsetOrigin$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "OffsetOrigin$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setWorldCoordinatesFromFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.OffsetOrigin'], []);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.OffsetOrigin$3));
this.xField.addActionListener$java_awt_event_ActionListener(xyAction);
this.xField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.yField.addActionListener$java_awt_event_ActionListener(xyAction);
this.yField.addFocusListener$java_awt_event_FocusListener(xyFocusListener);
this.separator=$I$(20,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(21,1).c$$I$I,[4, 4])]);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(22,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.dataVariables=Clazz.array(String, -1, ["x", "y"]);
C$.formatVariables=Clazz.array(String, -1, ["xy"]);
C$.formatMap=Clazz.new_($I$(4,1));
C$.formatMap.put$O$O("xy", C$.dataVariables);
C$.formatDescriptionMap=Clazz.new_($I$(4,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(5).getString$S("PointMass.Position.Name"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.OffsetOrigin, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var offset=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$Z("fixed_coordinates", offset.isFixedCoordinates$());
if (!offset.steps.isEmpty$()) {
var steps=offset.getSteps$();
var stepData=Clazz.array(Double.TYPE, [steps.length, null]);
for (var i=0; i < steps.length; i++) {
if (steps[i] == null  || !offset.keyFrames.contains$O(Integer.valueOf$I(i)) ) continue;
var step=steps[i];
stepData[i]=Clazz.array(Double.TYPE, -1, [step.worldX, step.worldY]);
if (!control.getPropertyNamesRaw$().contains$O("worldX")) {
control.setValue$S$D("worldX", step.worldX);
control.setValue$S$D("worldY", step.worldY);
}}
control.setValue$S$O("world_coordinates", stepData);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var offset=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=offset.isLocked$();
offset.setLocked$Z(false);
if (control.getPropertyNamesRaw$().contains$O("fixed_coordinates")) offset.fixedCoordinates=control.getBoolean$S("fixed_coordinates");
offset.keyFrames.clear$();
if (offset.steps.isEmpty$()) offset.createStep$I$D$D(0, 0, 0);
offset.keyFrames.clear$();
var stepData=control.getObject$S("world_coordinates");
if (stepData != null ) {
for (var i=0; i < stepData.length; i++) {
if (stepData[i] != null ) {
var step=offset.getStep$I(i);
step.worldX=stepData[i][0];
step.worldY=stepData[i][1];
offset.keyFrames.add$O(Integer.valueOf$I(i));
}}
} else {
var step=offset.getStep$I(0);
step.worldX=control.getDouble$S("worldX");
step.worldY=control.getDouble$S("worldY");
offset.keyFrames.add$O(Integer.valueOf$I(0));
}offset.setLocked$Z(locked);
p$1.displayWorldCoordinates.apply(offset, []);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
