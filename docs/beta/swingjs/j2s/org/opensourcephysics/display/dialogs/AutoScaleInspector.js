(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.dialogs"),p$1={},I$=[[0,'org.opensourcephysics.display.dialogs.DialogsRes','javax.swing.JCheckBox','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.Box','javax.swing.JButton','java.awt.Color']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AutoScaleInspector", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['plotPanel','org.opensourcephysics.display.DrawingPanel','dataPanel','javax.swing.JPanel','xAutoscaleCheckBox','javax.swing.JCheckBox','+yAutoscaleCheckBox','okButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[null, true]);C$.$init$.apply(this);
this.plotPanel=panel;
this.setTitle$S($I$(1).AUTOSCALE_AUTOSCALE);
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.pack$();
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.xAutoscaleCheckBox=Clazz.new_([$I$(1).AUTOSCALE_AUTO + " x"],$I$(2,1).c$$S);
this.xAutoscaleCheckBox.addActionListener$java_awt_event_ActionListener(((P$.AutoScaleInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoScaleInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].plotPanel.setAutoscaleX$Z(this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].xAutoscaleCheckBox.isSelected$());
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].plotPanel.scale$();
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'], []);
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].plotPanel.repaint$();
});
})()
), Clazz.new_(P$.AutoScaleInspector$1.$init$,[this, null])));
this.yAutoscaleCheckBox=Clazz.new_([$I$(1).AUTOSCALE_AUTO + " y"],$I$(2,1).c$$S);
this.yAutoscaleCheckBox.addActionListener$java_awt_event_ActionListener(((P$.AutoScaleInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoScaleInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].plotPanel.setAutoscaleY$Z(this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].yAutoscaleCheckBox.isSelected$());
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].plotPanel.scale$();
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'], []);
this.b$['org.opensourcephysics.display.dialogs.AutoScaleInspector'].plotPanel.repaint$();
});
})()
), Clazz.new_(P$.AutoScaleInspector$2.$init$,[this, null])));
var inspectorPanel=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(inspectorPanel);
var controlPanel=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
inspectorPanel.add$java_awt_Component$O(controlPanel, "South");
var xPanel=Clazz.new_([Clazz.new_($I$(5,1).c$$I$I,[1, 2])],$I$(3,1).c$$java_awt_LayoutManager);
xPanel.setBorder$javax_swing_border_Border($I$(6,"createTitledBorder$S",[$I$(1).AUTOSCALE_ZOOM_WARNING]));
this.dataPanel=Clazz.new_([Clazz.new_($I$(5,1).c$$I$I,[1, 1])],$I$(3,1).c$$java_awt_LayoutManager);
this.dataPanel.setBorder$javax_swing_border_Border($I$(6).createEtchedBorder$());
controlPanel.add$java_awt_Component$O(this.dataPanel, "Center");
var box;
box=$I$(7).createHorizontalBox$();
box.add$java_awt_Component($I$(7).createHorizontalGlue$());
xPanel.add$java_awt_Component(this.xAutoscaleCheckBox);
xPanel.add$java_awt_Component(box);
box=$I$(7).createHorizontalBox$();
box.add$java_awt_Component($I$(7).createHorizontalGlue$());
xPanel.add$java_awt_Component(box);
box=$I$(7).createHorizontalBox$();
box.add$java_awt_Component($I$(7).createHorizontalGlue$());
xPanel.add$java_awt_Component(this.yAutoscaleCheckBox);
this.dataPanel.add$java_awt_Component(xPanel);
this.xAutoscaleCheckBox.setAlignmentX$F(1.0);
this.yAutoscaleCheckBox.setAlignmentX$F(1.0);
this.okButton=Clazz.new_([$I$(1).AUTOSCALE_OK],$I$(8,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(9,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.AutoScaleInspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoScaleInspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.AutoScaleInspector$3.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(3,1));
controlPanel.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.okButton);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.xAutoscaleCheckBox.setSelected$Z(this.plotPanel.isAutoscaleX$());
this.yAutoscaleCheckBox.setSelected$Z(this.plotPanel.isAutoscaleY$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
