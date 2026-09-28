(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.event.FocusAdapter','java.awt.event.MouseAdapter','javax.swing.JCheckBox','javax.swing.BorderFactory','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.controls.XMLControlElement',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'org.opensourcephysics.cabrillo.tracker.Undo','java.awt.EventQueue']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputTrack", null, 'org.opensourcephysics.cabrillo.tracker.TTrack');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedPosition=true;
},1);

C$.$fields$=[['Z',['editing','fixedPosition'],'O',['inputField','org.opensourcephysics.media.core.NumberField','editListener','java.awt.event.MouseListener','ruler','org.opensourcephysics.cabrillo.tracker.Ruler','rulerCheckbox','javax.swing.JCheckBox']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
this.inputField=this.createInputField$();
this.inputField.setBorder$javax_swing_border_Border(null);
this.inputField.addActionListener$java_awt_event_ActionListener(((P$.InputTrack$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "InputTrack$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].stopEditing$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], []);
});
})()
), Clazz.new_(P$.InputTrack$1.$init$,[this, null])));
this.inputField.addFocusListener$java_awt_event_FocusListener(((P$.InputTrack$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "InputTrack$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].inputField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].stopEditing$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], []);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.InputTrack$2)));
this.editListener=((P$.InputTrack$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "InputTrack$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].stopEditing$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], []);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].mouseClickedAction$java_awt_Point.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [e.getPoint$()]);
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.InputTrack$3));
this.rulerCheckbox=Clazz.new_($I$(3,1));
this.rulerCheckbox.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$());
this.rulerCheckbox.setOpaque$Z(false);
this.rulerCheckbox.addActionListener$java_awt_event_ActionListener(((P$.InputTrack$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "InputTrack$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].getRuler$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], []).setVisible$Z(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].rulerCheckbox.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
});
})()
), Clazz.new_(P$.InputTrack$4.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removeMouseListener$java_awt_event_MouseListener(this.editListener);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addMouseListener$java_awt_event_MouseListener(this.editListener);
}});

Clazz.newMeth(C$, 'setFootprint$S',  function (name) {
C$.superclazz.prototype.setFootprint$S.apply(this, [name]);
if (this.ruler != null  && this.ruler.isVisible$() ) {
this.ruler.setStrokeWidth$F(this.footprint.getStroke$().getLineWidth$());
}});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
C$.superclazz.prototype.setColor$java_awt_Color.apply(this, [color]);
if (this.ruler != null ) this.ruler.setColor$java_awt_Color(this.getColor$());
});

Clazz.newMeth(C$, 'getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (point, trackerPanel) {
if (point == null ) return null;
var step=C$.superclazz.prototype.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [point, trackerPanel]);
if (step == null  && this.ruler != null   && this.ruler.isVisible$()  && point === this.ruler.getHandle$()  ) {
step=this.getStep$I(trackerPanel.getFrameNumber$());
}return step;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
$I$(5).setFont$javax_swing_AbstractButton(this.rulerCheckbox);
});

Clazz.newMeth(C$, 'getRuler$',  function () {
return null;
});

Clazz.newMeth(C$, 'setEditAction$org_opensourcephysics_cabrillo_tracker_Step$java_awt_Point$S',  function (step, pt, rawText) {
if (this.editing) {
this.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
$I$(5,"setFonts$O$I",[this.inputField, $I$(5).getLevel$()]);
this.inputField.setForeground$java_awt_Color(this.footprint.getColor$());
this.inputField.setValue$D(this.magField.getValue$());
var d=this.inputField.getPreferredSize$();
var bounds=this.getLayoutBounds$org_opensourcephysics_cabrillo_tracker_Step(step);
var wid=Math.max(40, bounds.width + 7);
this.inputField.setBounds$I$I$I$I(bounds.x - 2, bounds.y - 5, wid, d.height);
this.tp.add$java_awt_Component(this.inputField);
var space=$I$(4).createEmptyBorder$I$I$I$I(0, 1, 1, 0);
var color=this.getFootprint$().getColor$();
var line=$I$(4).createLineBorder$java_awt_Color(color);
this.inputField.setBorder$javax_swing_border_Border($I$(4).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, space));
this.setInputValue$org_opensourcephysics_cabrillo_tracker_Step(step);
this.inputField.requestFocus$();
} else {
this.endEditing$org_opensourcephysics_cabrillo_tracker_Step$S(step, rawText);
this.tp.remove$java_awt_Component(this.inputField);
this.invalidateData$O(null);
$I$(6).repaintT$java_awt_Component(this.tp);
this.tp.refreshTrackBar$();
}});

Clazz.newMeth(C$, 'isFixedPosition$',  function () {
return this.fixedPosition;
});

Clazz.newMeth(C$, 'setFixedPosition$Z',  function (fixed) {
if (this.fixedPosition == fixed ) return;
if (this.tp == null ) return;
this.tp.changed=true;
var control=Clazz.new_($I$(7,1).c$$O,[this]);
if (!fixed) {
this.fixedPosition=false;
return;
}var n=this.tp.getFrameNumber$();
this.steps=Clazz.new_([this, null, this.getStep$I(n)],$I$(8,1).c$$org_opensourcephysics_cabrillo_tracker_Step);
this.erase$();
this.fixedPosition=true;
this.keyFrames.clear$();
this.keyFrames.add$O(Integer.valueOf$I(0));
$I$(9).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
this.dataValid=false;
this.firePropertyChange$S$O$O("steps", null, null);
this.erase$();
$I$(6).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'getKeyStep$org_opensourcephysics_cabrillo_tracker_Step',  function (step) {
var key=0;
if (!this.isFixedPosition$()) {
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) key=i;
}
}return C$.superclazz.prototype.getStep$I.apply(this, [key]);
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
var step=this.steps.getStep$I(n);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_Step(step);
return step;
});

Clazz.newMeth(C$, 'setEditing$Z$org_opensourcephysics_cabrillo_tracker_Step$java_awt_Point',  function (edit, target, pt) {
this.editing=edit;
var rawText=this.inputField.getText$();
if (this.checkKeyFrame$()) {
if (!this.isFixedPosition$()) this.keyFrames.add$O(Integer.valueOf$I(target.n));
target=this.getKeyStep$org_opensourcephysics_cabrillo_tracker_Step(target);
}var step=target;
var runner=((P$.InputTrack$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "InputTrack$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'].setEditAction$org_opensourcephysics_cabrillo_tracker_Step$java_awt_Point$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.InputTrack'], [this.$finals$.step, this.$finals$.pt, this.$finals$.rawText]);
});
})()
), Clazz.new_(P$.InputTrack$5.$init$,[this, {pt:pt,rawText:rawText,step:step}]));
$I$(10).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'stopEditing$',  function () {
if (this.editing) this.setEditing$Z$org_opensourcephysics_cabrillo_tracker_Step$java_awt_Point(false, this.getStep$I(this.tp.getFrameNumber$()), null);
});

Clazz.newMeth(C$, 'mouseClickedAction$java_awt_Point',  function (pt) {
if (this.isLocked$()) return;
var n=this.tp.getFrameNumber$();
if (this.ttype == 8) {
var step=this.getStep$I(n);
if (step == null ) return;
var bounds=step.panelLayoutBounds.get$O(this.tp.getID$());
if (bounds != null  && bounds.contains$java_awt_Point(pt) ) {
if (this.isFullyAttached$()) {
this.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
return;
}this.setEditing$Z$org_opensourcephysics_cabrillo_tracker_Step$java_awt_Point(true, step, pt);
}} else if (this.ttype == 6) {
var step=this.getStep$I(n);
if (step == null ) return;
var bounds=step.panelLayoutBounds.get$O(this.tp.getID$());
if (bounds != null  && bounds.contains$java_awt_Point(pt) ) {
if (this.isFullyAttached$()) {
this.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
return;
}this.setEditing$Z$org_opensourcephysics_cabrillo_tracker_Step$java_awt_Point(true, step, pt);
}}});

Clazz.newMeth(C$, 'setMagValue$',  function () {
this.inputField.setValue$D(this.magField.getValue$());
var n=this.tp.getFrameNumber$();
var tape=this.getStep$I(n);
if (tape != null ) {
tape.repaint$();
}});

Clazz.newMeth(C$, 'getAttachmentLength$',  function () {
return this.getFootprintLength$();
});

Clazz.newMeth(C$, 'isAutoTrackable$I',  function (pointIndex) {
return this.isAutoTrackable$() && pointIndex < this.getAttachmentLength$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
