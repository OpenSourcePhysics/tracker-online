(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[[0,'java.text.DecimalFormat','java.util.ArrayList','org.opensourcephysics.display3d.core.CameraInspectorFrame','org.opensourcephysics.tools.ToolsRes','java.awt.event.ActionEvent','java.awt.BorderLayout','javax.swing.JPanel','java.awt.GridLayout','javax.swing.border.TitledBorder','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.JButton','javax.swing.JLabel','javax.swing.border.EmptyBorder','javax.swing.JTextField']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CameraInspector", null, 'javax.swing.JPanel', 'org.opensourcephysics.display3d.core.interaction.InteractionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=null;
this.camera=null;
this.format=Clazz.new_($I$(1,1).c$$S,["0.000"]);
this.listeners=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['panel','org.opensourcephysics.display3d.core.DrawingPanel3D','camera','org.opensourcephysics.display3d.core.Camera','format','java.text.NumberFormat','xField','javax.swing.JTextField','+yField','+zField','+focusxField','+focusyField','+focuszField','+azimuthField','+altitudeField','+rotationField','+distanceField','perspectiveRB','javax.swing.JRadioButton','+noperspectiveRB','+planarxyRB','+planarxzRB','+planaryzRB','listeners','java.util.AbstractList']]]

Clazz.newMeth(C$, 'createFrame$org_opensourcephysics_display3d_core_DrawingPanel3D',  function (panel) {
return Clazz.new_([$I$(4).getString$S("CameraInspector.FrameTitle"), Clazz.new_(C$.c$$org_opensourcephysics_display3d_core_DrawingPanel3D,[panel])],$I$(3,1).c$$S$org_opensourcephysics_display3d_core_CameraInspector);
}, 1);

Clazz.newMeth(C$, 'createFrame$org_opensourcephysics_display3d_core_CameraInspector',  function (inspector) {
return Clazz.new_([$I$(4).getString$S("CameraInspector.FrameTitle"), inspector],$I$(3,1).c$$S$org_opensourcephysics_display3d_core_CameraInspector);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_core_DrawingPanel3D',  function (panel) {
Clazz.super_(C$, this);
this.panel=panel;
this.camera=panel.getCamera$();
panel.addInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener(this);
var fieldListener=((P$.CameraInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CameraInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
var cmd=evt.getActionCommand$();
var field=evt.getSource$();
var value=0.0;
try {
value=this.b$['org.opensourcephysics.display3d.core.CameraInspector'].format.parse$S(field.getText$()).doubleValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.text.ParseException")){
value=0.0;
} else {
throw exc;
}
}
if (cmd.equals$O("x")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setXYZ$D$D$D(value, this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getY$(), this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getZ$());
} else if (cmd.equals$O("y")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setXYZ$D$D$D(this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getX$(), value, this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getZ$());
} else if (cmd.equals$O("z")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setXYZ$D$D$D(this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getX$(), this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getY$(), value);
} else if (cmd.equals$O("focusx")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setFocusXYZ$D$D$D(value, this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getFocusY$(), this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getFocusZ$());
} else if (cmd.equals$O("focusy")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setFocusXYZ$D$D$D(this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getFocusX$(), value, this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getFocusZ$());
} else if (cmd.equals$O("focusz")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setFocusXYZ$D$D$D(this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getFocusX$(), this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.getFocusY$(), value);
} else if (cmd.equals$O("azimuth")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setAzimuth$D(value);
} else if (cmd.equals$O("altitude")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setAltitude$D(value);
} else if (cmd.equals$O("rotation")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setRotation$D(value);
} else if (cmd.equals$O("screen")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setDistanceToScreen$D(value);
}this.b$['org.opensourcephysics.display3d.core.CameraInspector'].panel.repaint$();
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].updateFields$.apply(this.b$['org.opensourcephysics.display3d.core.CameraInspector'], []);
var event=Clazz.new_($I$(5,1).c$$O$I$S,[this.b$['org.opensourcephysics.display3d.core.CameraInspector'], 1001, "FieldChange"]);
for (var it=this.b$['org.opensourcephysics.display3d.core.CameraInspector'].listeners.iterator$(); it.hasNext$(); ) {
(it.next$()).actionPerformed$java_awt_event_ActionEvent(event);
}
});
})()
), Clazz.new_(P$.CameraInspector$1.$init$,[this, null]));
var buttonListener=((P$.CameraInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CameraInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
var cmd=evt.getActionCommand$();
if (cmd.equals$O("reset")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.reset$();
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].panel.repaint$();
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].updateFields$.apply(this.b$['org.opensourcephysics.display3d.core.CameraInspector'], []);
} else if (cmd.equals$O("perspective")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(11);
} else if (cmd.equals$O("perspective_on")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(4);
} else if (cmd.equals$O("no_perspective")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(10);
} else if (cmd.equals$O("perspective_off")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(3);
} else if (cmd.equals$O("planarXY")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(0);
} else if (cmd.equals$O("planarXZ")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(1);
} else if (cmd.equals$O("planarYZ")) {
this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.setProjectionMode$I(2);
}this.b$['org.opensourcephysics.display3d.core.CameraInspector'].camera.reset$();
var event=Clazz.new_($I$(5,1).c$$O$I$S,[this.b$['org.opensourcephysics.display3d.core.CameraInspector'], 1001, "ButtonChange"]);
for (var it=this.b$['org.opensourcephysics.display3d.core.CameraInspector'].listeners.iterator$(); it.hasNext$(); ) {
(it.next$()).actionPerformed$java_awt_event_ActionEvent(event);
}
});
})()
), Clazz.new_(P$.CameraInspector$2.$init$,[this, null]));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
var projectionPanel=Clazz.new_([Clazz.new_($I$(8,1).c$$I$I,[2, 3])],$I$(7,1).c$$java_awt_LayoutManager);
projectionPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).getString$S("CameraInspector.ProjectionMode")],$I$(9,1).c$$S));
var group=Clazz.new_($I$(10,1));
this.perspectiveRB=Clazz.new_([$I$(4).getString$S("CameraInspector.Perspective")],$I$(11,1).c$$S);
this.perspectiveRB.setActionCommand$S("perspective");
this.perspectiveRB.addActionListener$java_awt_event_ActionListener(buttonListener);
projectionPanel.add$java_awt_Component(this.perspectiveRB);
group.add$javax_swing_AbstractButton(this.perspectiveRB);
this.planarxyRB=Clazz.new_([$I$(4).getString$S("CameraInspector.PlanarXY")],$I$(11,1).c$$S);
this.planarxyRB.setActionCommand$S("planarXY");
this.planarxyRB.addActionListener$java_awt_event_ActionListener(buttonListener);
projectionPanel.add$java_awt_Component(this.planarxyRB);
group.add$javax_swing_AbstractButton(this.planarxyRB);
this.planaryzRB=Clazz.new_([$I$(4).getString$S("CameraInspector.PlanarYZ")],$I$(11,1).c$$S);
this.planaryzRB.setActionCommand$S("planarYZ");
this.planaryzRB.addActionListener$java_awt_event_ActionListener(buttonListener);
projectionPanel.add$java_awt_Component(this.planaryzRB);
group.add$javax_swing_AbstractButton(this.planaryzRB);
this.noperspectiveRB=Clazz.new_([$I$(4).getString$S("CameraInspector.NoPerspective")],$I$(11,1).c$$S);
this.noperspectiveRB.setActionCommand$S("no_perspective");
this.noperspectiveRB.addActionListener$java_awt_event_ActionListener(buttonListener);
projectionPanel.add$java_awt_Component(this.noperspectiveRB);
group.add$javax_swing_AbstractButton(this.noperspectiveRB);
this.planarxzRB=Clazz.new_([$I$(4).getString$S("CameraInspector.PlanarXZ")],$I$(11,1).c$$S);
this.planarxzRB.setActionCommand$S("planarXZ");
this.planarxzRB.addActionListener$java_awt_event_ActionListener(buttonListener);
projectionPanel.add$java_awt_Component(this.planarxzRB);
group.add$javax_swing_AbstractButton(this.planarxzRB);
var topPanel=Clazz.new_([Clazz.new_($I$(6,1))],$I$(7,1).c$$java_awt_LayoutManager);
topPanel.add$java_awt_Component$O(projectionPanel, "Center");
this.add$java_awt_Component$O(projectionPanel, "North");
var labelPanel=Clazz.new_([Clazz.new_($I$(8,1).c$$I$I,[0, 1])],$I$(7,1).c$$java_awt_LayoutManager);
var fieldPanel=Clazz.new_([Clazz.new_($I$(8,1).c$$I$I,[0, 1])],$I$(7,1).c$$java_awt_LayoutManager);
var label2Panel=Clazz.new_([Clazz.new_($I$(8,1).c$$I$I,[0, 1])],$I$(7,1).c$$java_awt_LayoutManager);
var field2Panel=Clazz.new_([Clazz.new_($I$(8,1).c$$I$I,[0, 1])],$I$(7,1).c$$java_awt_LayoutManager);
this.xField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(labelPanel, fieldPanel, "X", fieldListener);
this.yField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(labelPanel, fieldPanel, "Y", fieldListener);
this.zField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(labelPanel, fieldPanel, "Z", fieldListener);
this.focusxField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(label2Panel, field2Panel, "FocusX", fieldListener);
this.focusyField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(label2Panel, field2Panel, "FocusY", fieldListener);
this.focuszField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(label2Panel, field2Panel, "FocusZ", fieldListener);
this.azimuthField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(labelPanel, fieldPanel, "Azimuth", fieldListener);
this.altitudeField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(labelPanel, fieldPanel, "Altitude", fieldListener);
this.rotationField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(label2Panel, field2Panel, "Rotation", fieldListener);
this.distanceField=C$.createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener(label2Panel, field2Panel, "Screen", fieldListener);
var leftPanel=Clazz.new_([Clazz.new_($I$(6,1))],$I$(7,1).c$$java_awt_LayoutManager);
leftPanel.add$java_awt_Component$O(labelPanel, "West");
leftPanel.add$java_awt_Component$O(fieldPanel, "Center");
var rightPanel=Clazz.new_([Clazz.new_($I$(6,1))],$I$(7,1).c$$java_awt_LayoutManager);
rightPanel.add$java_awt_Component$O(label2Panel, "West");
rightPanel.add$java_awt_Component$O(field2Panel, "Center");
var centerPanel=Clazz.new_([Clazz.new_($I$(8,1).c$$I$I,[1, 0])],$I$(7,1).c$$java_awt_LayoutManager);
centerPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).getString$S("CameraInspector.CameraParameters")],$I$(9,1).c$$S));
centerPanel.add$java_awt_Component(leftPanel);
centerPanel.add$java_awt_Component(rightPanel);
this.add$java_awt_Component$O(centerPanel, "Center");
var resetButton=Clazz.new_([$I$(4).getString$S("CameraInspector.ResetCamera")],$I$(12,1).c$$S);
resetButton.setActionCommand$S("reset");
resetButton.addActionListener$java_awt_event_ActionListener(buttonListener);
this.add$java_awt_Component$O(resetButton, "South");
this.updateFields$();
}, 1);

Clazz.newMeth(C$, 'setFormat$java_text_NumberFormat',  function (format) {
this.format=format;
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (listener) {
this.listeners.add$O(listener);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (listener) {
this.listeners.remove$O(listener);
});

Clazz.newMeth(C$, 'interactionPerformed$org_opensourcephysics_display3d_core_interaction_InteractionEvent',  function (_event) {
if (_event.getSource$() !== this.panel ) {
return;
}if (_event.getInfo$() != null ) {
return;
}this.updateFields$();
});

Clazz.newMeth(C$, 'updateFields$',  function () {
switch (this.camera.getProjectionMode$()) {
default:
case 11:
case 4:
this.perspectiveRB.setSelected$Z(true);
break;
case 10:
case 3:
this.noperspectiveRB.setSelected$Z(true);
break;
case 0:
this.planarxyRB.setSelected$Z(true);
break;
case 1:
this.planarxzRB.setSelected$Z(true);
break;
case 2:
this.planaryzRB.setSelected$Z(true);
break;
}
this.xField.setText$S(this.format.format$D(this.camera.getX$()));
this.yField.setText$S(this.format.format$D(this.camera.getY$()));
this.zField.setText$S(this.format.format$D(this.camera.getZ$()));
this.focusxField.setText$S(this.format.format$D(this.camera.getFocusX$()));
this.focusyField.setText$S(this.format.format$D(this.camera.getFocusY$()));
this.focuszField.setText$S(this.format.format$D(this.camera.getFocusZ$()));
this.azimuthField.setText$S(this.format.format$D(this.camera.getAzimuth$()));
this.altitudeField.setText$S(this.format.format$D(this.camera.getAltitude$()));
this.rotationField.setText$S(this.format.format$D(this.camera.getRotation$()));
this.distanceField.setText$S(this.format.format$D(this.camera.getDistanceToScreen$()));
});

Clazz.newMeth(C$, 'createRow$javax_swing_JPanel$javax_swing_JPanel$S$java_awt_event_ActionListener',  function (labelParent, fieldParent, labelText, listener) {
if (labelText == null ) {
labelParent.add$java_awt_Component(Clazz.new_($I$(13,1)));
fieldParent.add$java_awt_Component(Clazz.new_($I$(13,1)));
return null;
}var label=Clazz.new_([$I$(4).getString$S("CameraInspector." + labelText)],$I$(13,1).c$$S);
label.setHorizontalAlignment$I(0);
label.setBorder$javax_swing_border_Border(Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 3, 0, 3]));
var field=Clazz.new_($I$(15,1).c$$I,[4]);
field.setActionCommand$S(labelText.toLowerCase$());
field.addActionListener$java_awt_event_ActionListener(listener);
labelParent.add$java_awt_Component(label);
fieldParent.add$java_awt_Component(field);
return field;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
