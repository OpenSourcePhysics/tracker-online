(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.dialogs"),p$1={},I$=[[0,'javax.swing.JOptionPane','org.opensourcephysics.display.dialogs.DialogsRes','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.AbstractAction','javax.swing.JLabel','org.opensourcephysics.media.core.DecimalField','java.awt.event.FocusAdapter','javax.swing.JCheckBox','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.Box','javax.swing.JButton','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScaleInspector", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['drawingPanel','org.opensourcephysics.display.DrawingPanel','dataPanel','javax.swing.JPanel','xMinLabel','javax.swing.JLabel','+xMaxLabel','+yMinLabel','+yMaxLabel','xMinField','org.opensourcephysics.media.core.NumberField','+xMaxField','+yMinField','+yMaxField','xMinCheckBox','javax.swing.JCheckBox','+xMaxCheckBox','+yMinCheckBox','+yMaxCheckBox','okButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(1).getFrameForComponent$java_awt_Component(panel), $I$(1).getFrameForComponent$java_awt_Component(panel) != null ]);C$.$init$.apply(this);
this.drawingPanel=panel;
this.setTitle$S($I$(2).SCALE_SCALE);
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.pack$();
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var inspectorPanel=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(inspectorPanel);
var controlPanel=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
inspectorPanel.add$java_awt_Component$O(controlPanel, "South");
var setXAction=((P$.ScaleInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var xMin=this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].xMinCheckBox.isSelected$() ? NaN : this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].xMinField.getValue$();
var xMax=this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].xMaxCheckBox.isSelected$() ? NaN : this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].xMaxField.getValue$();
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].drawingPanel.setPreferredMinMaxX$D$D(xMin, xMax);
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].drawingPanel.paintImmediately$java_awt_Rectangle(this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].drawingPanel.getBounds$());
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'], []);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.ScaleInspector$1));
var setYAction=((P$.ScaleInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var yMin=this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].yMinCheckBox.isSelected$() ? NaN : this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].yMinField.getValue$();
var yMax=this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].yMaxCheckBox.isSelected$() ? NaN : this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].yMaxField.getValue$();
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].drawingPanel.setPreferredMinMaxY$D$D(yMin, yMax);
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].drawingPanel.paintImmediately$java_awt_Rectangle(this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].drawingPanel.getBounds$());
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'], []);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.ScaleInspector$2));
this.xMinLabel=Clazz.new_([$I$(2).SCALE_MIN],$I$(6,1).c$$S);
this.xMinField=Clazz.new_($I$(7,1).c$$I$I,[4, 2]);
this.xMinField.setMaximumSize$java_awt_Dimension(this.xMinField.getPreferredSize$());
this.xMinField.addActionListener$java_awt_event_ActionListener(((P$.ScaleInspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.setXAction.actionPerformed$java_awt_event_ActionEvent(null);
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].xMinField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ScaleInspector$3.$init$,[this, {setXAction:setXAction}])));
this.xMinField.addFocusListener$java_awt_event_FocusListener(((P$.ScaleInspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.setXAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(8,1),[this, {setXAction:setXAction}],P$.ScaleInspector$4)));
this.xMinCheckBox=Clazz.new_([$I$(2).SCALE_AUTO],$I$(9,1).c$$S);
this.xMinCheckBox.addActionListener$java_awt_event_ActionListener(setXAction);
this.xMaxLabel=Clazz.new_([$I$(2).SCALE_MAX],$I$(6,1).c$$S);
this.xMaxField=Clazz.new_($I$(7,1).c$$I$I,[4, 2]);
this.xMaxField.setMaximumSize$java_awt_Dimension(this.xMaxField.getPreferredSize$());
this.xMaxField.addActionListener$java_awt_event_ActionListener(((P$.ScaleInspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.setXAction.actionPerformed$java_awt_event_ActionEvent(null);
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].xMaxField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ScaleInspector$5.$init$,[this, {setXAction:setXAction}])));
this.xMaxField.addFocusListener$java_awt_event_FocusListener(((P$.ScaleInspector$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.setXAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(8,1),[this, {setXAction:setXAction}],P$.ScaleInspector$6)));
this.xMaxCheckBox=Clazz.new_([$I$(2).SCALE_AUTO],$I$(9,1).c$$S);
this.xMaxCheckBox.addActionListener$java_awt_event_ActionListener(setXAction);
this.yMinLabel=Clazz.new_([$I$(2).SCALE_MIN],$I$(6,1).c$$S);
this.yMinField=Clazz.new_($I$(7,1).c$$I$I,[4, 2]);
this.yMinField.setMaximumSize$java_awt_Dimension(this.yMinField.getPreferredSize$());
this.yMinField.addActionListener$java_awt_event_ActionListener(((P$.ScaleInspector$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.setYAction.actionPerformed$java_awt_event_ActionEvent(null);
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].yMinField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ScaleInspector$7.$init$,[this, {setYAction:setYAction}])));
this.yMinField.addFocusListener$java_awt_event_FocusListener(((P$.ScaleInspector$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.setYAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(8,1),[this, {setYAction:setYAction}],P$.ScaleInspector$8)));
this.yMinCheckBox=Clazz.new_([$I$(2).SCALE_AUTO],$I$(9,1).c$$S);
this.yMinCheckBox.addActionListener$java_awt_event_ActionListener(setYAction);
this.yMaxLabel=Clazz.new_([$I$(2).SCALE_MAX],$I$(6,1).c$$S);
this.yMaxField=Clazz.new_($I$(7,1).c$$I$I,[4, 2]);
this.yMaxField.setMaximumSize$java_awt_Dimension(this.yMaxField.getPreferredSize$());
this.yMaxField.addActionListener$java_awt_event_ActionListener(((P$.ScaleInspector$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.setYAction.actionPerformed$java_awt_event_ActionEvent(null);
this.b$['org.opensourcephysics.display.dialogs.ScaleInspector'].yMaxField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ScaleInspector$9.$init$,[this, {setYAction:setYAction}])));
this.yMaxField.addFocusListener$java_awt_event_FocusListener(((P$.ScaleInspector$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.setYAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(8,1),[this, {setYAction:setYAction}],P$.ScaleInspector$10)));
this.yMaxCheckBox=Clazz.new_([$I$(2).SCALE_AUTO],$I$(9,1).c$$S);
this.yMaxCheckBox.addActionListener$java_awt_event_ActionListener(setYAction);
var xPanel=Clazz.new_([Clazz.new_($I$(10,1).c$$I$I,[2, 1])],$I$(3,1).c$$java_awt_LayoutManager);
var title=$I$(2).SCALE_HORIZONTAL;
xPanel.setBorder$javax_swing_border_Border($I$(11).createTitledBorder$S(title));
var yPanel=Clazz.new_([Clazz.new_($I$(10,1).c$$I$I,[2, 1])],$I$(3,1).c$$java_awt_LayoutManager);
title=$I$(2).SCALE_VERTICAL;
yPanel.setBorder$javax_swing_border_Border($I$(11).createTitledBorder$S(title));
this.dataPanel=Clazz.new_([Clazz.new_($I$(10,1).c$$I$I,[2, 1])],$I$(3,1).c$$java_awt_LayoutManager);
this.dataPanel.setBorder$javax_swing_border_Border($I$(11).createEtchedBorder$());
controlPanel.add$java_awt_Component$O(this.dataPanel, "Center");
var box;
box=$I$(12).createHorizontalBox$();
box.add$java_awt_Component($I$(12).createHorizontalGlue$());
box.add$java_awt_Component(this.xMaxLabel);
box.add$java_awt_Component(this.xMaxField);
box.add$java_awt_Component(this.xMaxCheckBox);
xPanel.add$java_awt_Component(box);
box=$I$(12).createHorizontalBox$();
box.add$java_awt_Component($I$(12).createHorizontalGlue$());
box.add$java_awt_Component(this.xMinLabel);
box.add$java_awt_Component(this.xMinField);
box.add$java_awt_Component(this.xMinCheckBox);
xPanel.add$java_awt_Component(box);
box=$I$(12).createHorizontalBox$();
box.add$java_awt_Component($I$(12).createHorizontalGlue$());
box.add$java_awt_Component(this.yMaxLabel);
box.add$java_awt_Component(this.yMaxField);
box.add$java_awt_Component(this.yMaxCheckBox);
yPanel.add$java_awt_Component(box);
box=$I$(12).createHorizontalBox$();
box.add$java_awt_Component($I$(12).createHorizontalGlue$());
box.add$java_awt_Component(this.yMinLabel);
box.add$java_awt_Component(this.yMinField);
box.add$java_awt_Component(this.yMinCheckBox);
yPanel.add$java_awt_Component(box);
this.dataPanel.add$java_awt_Component(yPanel);
this.dataPanel.add$java_awt_Component(xPanel);
this.xMinLabel.setAlignmentX$F(1.0);
this.xMaxLabel.setAlignmentX$F(1.0);
this.yMinLabel.setAlignmentX$F(1.0);
this.yMaxLabel.setAlignmentX$F(1.0);
this.xMinField.setAlignmentX$F(1.0);
this.xMaxField.setAlignmentX$F(1.0);
this.yMinField.setAlignmentX$F(1.0);
this.yMaxField.setAlignmentX$F(1.0);
this.xMinCheckBox.setAlignmentX$F(1.0);
this.xMaxCheckBox.setAlignmentX$F(1.0);
this.yMinCheckBox.setAlignmentX$F(1.0);
this.yMaxCheckBox.setAlignmentX$F(1.0);
this.okButton=Clazz.new_([$I$(2).SCALE_OK],$I$(13,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(14,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.ScaleInspector$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScaleInspector$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.ScaleInspector$11.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(3,1));
controlPanel.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.okButton);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.xMinCheckBox.setSelected$Z(this.drawingPanel.isAutoscaleXMin$());
this.xMinField.setEnabled$Z(!this.xMinCheckBox.isSelected$());
this.xMinField.setValue$D(this.drawingPanel.getXMin$());
this.xMaxCheckBox.setSelected$Z(this.drawingPanel.isAutoscaleXMax$());
this.xMaxField.setEnabled$Z(!this.xMaxCheckBox.isSelected$());
this.xMaxField.setValue$D(this.drawingPanel.getXMax$());
this.yMinCheckBox.setSelected$Z(this.drawingPanel.isAutoscaleYMin$());
this.yMinField.setEnabled$Z(!this.yMinCheckBox.isSelected$());
this.yMinField.setValue$D(this.drawingPanel.getYMin$());
this.yMaxCheckBox.setSelected$Z(this.drawingPanel.isAutoscaleYMax$());
this.yMaxField.setEnabled$Z(!this.yMaxCheckBox.isSelected$());
this.yMaxField.setValue$D(this.drawingPanel.getYMax$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
