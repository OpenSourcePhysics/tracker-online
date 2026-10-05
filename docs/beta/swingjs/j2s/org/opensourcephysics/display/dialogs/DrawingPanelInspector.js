(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.dialogs"),I$=[[0,'org.opensourcephysics.numerics.Util','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTabbedPane','javax.swing.JTextPane','javax.swing.JTextField','javax.swing.JLabel','javax.swing.JCheckBox','javax.swing.JButton','javax.swing.BoxLayout','org.opensourcephysics.display.DisplayRes','StringBuffer','java.awt.Dimension','java.awt.Font']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingPanelInspector", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.format=$I$(1).newDecimalFormat$S("0.00000E00");
this.panel1=Clazz.new_($I$(2,1));
this.borderLayout1=Clazz.new_($I$(3,1));
this.jTabbedPane1=Clazz.new_($I$(4,1));
this.scalePanel=Clazz.new_($I$(2,1));
this.contentPanel=Clazz.new_($I$(2,1));
this.borderLayout3=Clazz.new_($I$(3,1));
this.contentTextPane=Clazz.new_($I$(5,1));
this.ymaxField=Clazz.new_($I$(6,1));
this.yminmaxpanel=Clazz.new_($I$(2,1));
this.yminField=Clazz.new_($I$(6,1));
this.jLabel4=Clazz.new_($I$(7,1));
this.jLabel3=Clazz.new_($I$(7,1));
this.jPanel3=Clazz.new_($I$(2,1));
this.zoomenableBox=Clazz.new_($I$(8,1));
this.autoscaleyBox=Clazz.new_($I$(8,1));
this.autoscalexBox=Clazz.new_($I$(8,1));
this.xmaxField=Clazz.new_($I$(6,1));
this.xminField=Clazz.new_($I$(6,1));
this.jLabel5=Clazz.new_($I$(7,1));
this.jLabel6=Clazz.new_($I$(7,1));
this.xminmaxpanel=Clazz.new_($I$(2,1));
this.jPanel1=Clazz.new_($I$(2,1));
this.applyButton=Clazz.new_($I$(9,1));
this.cancelButton=Clazz.new_($I$(9,1));
this.okButton=Clazz.new_($I$(9,1));
this.jPanel4=Clazz.new_($I$(2,1));
this.measureButton=Clazz.new_($I$(9,1));
this.snapButton=Clazz.new_($I$(9,1));
this.scaleLayout=Clazz.new_($I$(10,1).c$$java_awt_Container$I,[this.scalePanel, 1]);
},1);

C$.$fields$=[['O',['drawingPanel','org.opensourcephysics.display.DrawingPanel','format','java.text.DecimalFormat','panel1','javax.swing.JPanel','borderLayout1','java.awt.BorderLayout','jTabbedPane1','javax.swing.JTabbedPane','scalePanel','javax.swing.JPanel','+contentPanel','borderLayout3','java.awt.BorderLayout','contentTextPane','javax.swing.JTextPane','ymaxField','javax.swing.JTextField','yminmaxpanel','javax.swing.JPanel','yminField','javax.swing.JTextField','jLabel4','javax.swing.JLabel','+jLabel3','jPanel3','javax.swing.JPanel','zoomenableBox','javax.swing.JCheckBox','+autoscaleyBox','+autoscalexBox','xmaxField','javax.swing.JTextField','+xminField','jLabel5','javax.swing.JLabel','+jLabel6','xminmaxpanel','javax.swing.JPanel','+jPanel1','applyButton','javax.swing.JButton','+cancelButton','+okButton','jPanel4','javax.swing.JPanel','measureButton','javax.swing.JButton','+snapButton','scaleLayout','javax.swing.BoxLayout']]
,['O',['inspector','org.opensourcephysics.display.dialogs.DrawingPanelInspector']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z',  function (frame, title, modal) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[frame, title, modal]);C$.$init$.apply(this);
try {
this.jbInit$();
this.pack$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (dp) {
C$.c$$java_awt_Frame$S$Z.apply(this, [null, $I$(11).getString$S("DrawingPanelInspector.Title"), false]);
this.drawingPanel=dp;
this.getValues$();
this.getContent$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Frame$S$Z.apply(this, [null, "", false]);
}, 1);

Clazz.newMeth(C$, 'getValues$',  function () {
this.xminField.setText$S("" + this.format.format$D(this.drawingPanel.getXMin$()));
this.xmaxField.setText$S("" + this.format.format$D(this.drawingPanel.getXMax$()));
this.yminField.setText$S("" + this.format.format$D(this.drawingPanel.getYMin$()));
this.ymaxField.setText$S("" + this.format.format$D(this.drawingPanel.getYMax$()));
this.zoomenableBox.setSelected$Z(this.drawingPanel.isZoom$());
this.autoscalexBox.setSelected$Z(this.drawingPanel.isAutoscaleX$());
this.autoscaleyBox.setSelected$Z(this.drawingPanel.isAutoscaleY$());
});

Clazz.newMeth(C$, 'getContent$',  function () {
var buffer=Clazz.new_($I$(12,1));
var list=this.drawingPanel.getDrawablesNoClone$();
for (var i=0, n=list.size$(); i < n; i++) {
buffer.append$S(list.get$I(i).toString());
buffer.append$C("\n");
}
this.contentTextPane.setText$S(buffer.toString());
});

Clazz.newMeth(C$, 'applyValues$',  function () {
var newXMin=this.drawingPanel.getXMin$();
try {
newXMin=Double.parseDouble$S(this.xminField.getText$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var newXMax=this.drawingPanel.getXMax$();
try {
newXMax=Double.parseDouble$S(this.xmaxField.getText$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var newYMin=this.drawingPanel.getYMin$();
try {
newYMin=Double.parseDouble$S(this.yminField.getText$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var newYMax=this.drawingPanel.getYMax$();
try {
newYMax=Double.parseDouble$S(this.ymaxField.getText$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.drawingPanel.setAutoscaleX$Z(this.autoscalexBox.isSelected$());
this.drawingPanel.setAutoscaleY$Z(this.autoscaleyBox.isSelected$());
this.drawingPanel.setZoom$Z(this.zoomenableBox.isSelected$());
if (!this.drawingPanel.isAutoscaleX$() && !this.drawingPanel.isAutoscaleY$() ) {
this.drawingPanel.setPreferredMinMax$D$D$D$D(newXMin, newXMax, newYMin, newYMax);
} else if (!this.drawingPanel.isAutoscaleX$()) {
this.drawingPanel.setPreferredMinMaxX$D$D(newXMin, newXMax);
} else if (!this.drawingPanel.isAutoscaleY$()) {
this.drawingPanel.setPreferredMinMaxY$D$D(newYMin, newYMax);
}this.drawingPanel.scale$();
this.getValues$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.applyValues$();
});

Clazz.newMeth(C$, 'measureButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.drawingPanel.measure$();
this.getValues$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'snapButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.drawingPanel.snapshot$();
});

Clazz.newMeth(C$, 'cancelButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'okButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.applyValues$();
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'jbInit$',  function () {
this.panel1.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.scalePanel.setToolTipText$S($I$(11).getString$S("DrawingPanelInspector.ScalePanel.Tooltip"));
this.scalePanel.setLayout$java_awt_LayoutManager(this.scaleLayout);
this.contentPanel.setLayout$java_awt_LayoutManager(this.borderLayout3);
this.contentTextPane.setText$S("JTextPane1");
this.ymaxField.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[100, 21]));
this.ymaxField.setText$S("0");
this.yminField.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[100, 21]));
this.yminField.setText$S("0");
this.jLabel4.setText$S("  ymax =");
this.jLabel3.setText$S("ymin =");
this.zoomenableBox.setText$S($I$(11).getString$S("DrawingPanelInspector.EnableZoomBox.Text"));
this.autoscaleyBox.setText$S($I$(11).getString$S("DrawingPanelInspector.AutoscaleYBox.Text"));
this.autoscalexBox.setText$S($I$(11).getString$S("DrawingPanelInspector.AutoscaleXBox.Text"));
this.xmaxField.setText$S("0");
this.xmaxField.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[100, 21]));
this.xminField.setText$S("0");
this.xminField.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[100, 21]));
this.jLabel5.setText$S("  xmax =");
this.jLabel6.setText$S("xmin =");
this.xminmaxpanel.setToolTipText$S($I$(11).getString$S("DrawingPanelInspector.ScalePanel.Tooltip"));
this.applyButton.setText$S($I$(11).getString$S("DrawingPanelInspector.ApplyButton.Text"));
this.applyButton.addActionListener$java_awt_event_ActionListener(((P$.DrawingPanelInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanelInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'].applyButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'], [e]);
});
})()
), Clazz.new_(P$.DrawingPanelInspector$1.$init$,[this, null])));
this.cancelButton.setText$S($I$(11).getString$S("GUIUtils.Cancel"));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.DrawingPanelInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanelInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'].cancelButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'], [e]);
});
})()
), Clazz.new_(P$.DrawingPanelInspector$2.$init$,[this, null])));
this.okButton.setText$S($I$(11).getString$S("GUIUtils.Ok"));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.DrawingPanelInspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanelInspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'].okButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'], [e]);
});
})()
), Clazz.new_(P$.DrawingPanelInspector$3.$init$,[this, null])));
this.measureButton.setFont$java_awt_Font(Clazz.new_($I$(14,1).c$$S$I$I,["Dialog", 0, 10]));
this.measureButton.setText$S($I$(11).getString$S("DrawingPanelInspector.MeasureButton.Text"));
this.measureButton.addActionListener$java_awt_event_ActionListener(((P$.DrawingPanelInspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanelInspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'].measureButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'], [e]);
});
})()
), Clazz.new_(P$.DrawingPanelInspector$4.$init$,[this, null])));
this.snapButton.setFont$java_awt_Font(Clazz.new_($I$(14,1).c$$S$I$I,["Dialog", 0, 10]));
this.snapButton.setText$S($I$(11).getString$S("DrawingPanelInspector.SnapshotButton.Text"));
this.snapButton.addActionListener$java_awt_event_ActionListener(((P$.DrawingPanelInspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingPanelInspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'].snapButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.display.dialogs.DrawingPanelInspector'], [e]);
});
})()
), Clazz.new_(P$.DrawingPanelInspector$5.$init$,[this, null])));
this.getContentPane$().add$java_awt_Component(this.panel1);
this.panel1.add$java_awt_Component$O(this.jTabbedPane1, "Center");
this.jPanel3.add$java_awt_Component$O(this.zoomenableBox, null);
this.jPanel3.add$java_awt_Component$O(this.autoscalexBox, null);
this.jPanel3.add$java_awt_Component$O(this.autoscaleyBox, null);
this.xminmaxpanel.add$java_awt_Component$O(this.jLabel6, null);
this.xminmaxpanel.add$java_awt_Component$O(this.xminField, null);
this.xminmaxpanel.add$java_awt_Component$O(this.jLabel5, null);
this.xminmaxpanel.add$java_awt_Component$O(this.xmaxField, null);
this.scalePanel.add$java_awt_Component$O(this.xminmaxpanel, null);
this.scalePanel.add$java_awt_Component$O(this.yminmaxpanel, null);
this.yminmaxpanel.add$java_awt_Component$O(this.jLabel3, null);
this.yminmaxpanel.add$java_awt_Component$O(this.yminField, null);
this.yminmaxpanel.add$java_awt_Component$O(this.jLabel4, null);
this.yminmaxpanel.add$java_awt_Component$O(this.ymaxField, null);
this.scalePanel.add$java_awt_Component$O(this.jPanel4, null);
this.jPanel4.add$java_awt_Component$O(this.measureButton, null);
this.jPanel4.add$java_awt_Component$O(this.snapButton, null);
this.scalePanel.add$java_awt_Component$O(this.jPanel3, null);
this.jTabbedPane1.add$java_awt_Component$O(this.scalePanel, "scale");
this.jTabbedPane1.add$java_awt_Component$O(this.contentPanel, "content");
this.contentPanel.add$java_awt_Component$O(this.contentTextPane, "Center");
this.scalePanel.add$java_awt_Component$O(this.jPanel1, null);
this.jPanel1.add$java_awt_Component$O(this.okButton, null);
this.jPanel1.add$java_awt_Component$O(this.cancelButton, null);
this.jPanel1.add$java_awt_Component$O(this.applyButton, null);
});

Clazz.newMeth(C$, 'getInspector$org_opensourcephysics_display_DrawingPanel',  function (dp) {
if (C$.inspector == null ) {
C$.inspector=Clazz.new_(C$.c$$org_opensourcephysics_display_DrawingPanel,[dp]);
} else {
C$.inspector.drawingPanel=dp;
C$.inspector.getValues$();
C$.inspector.getContent$();
C$.inspector.setVisible$Z(true);
}return C$.inspector;
}, 1);

Clazz.newMeth(C$, 'hideInspector$',  function () {
if (C$.inspector != null ) {
C$.inspector.setVisible$Z(false);
}}, 1);

Clazz.newMeth(C$, 'updateValues$org_opensourcephysics_display_DrawingPanel',  function (dp) {
if ((C$.inspector == null ) || (C$.inspector.drawingPanel !== dp ) || !C$.inspector.isShowing$()  ) {
return;
}C$.inspector.drawingPanel.scale$();
C$.inspector.getValues$();
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
