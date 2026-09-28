(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.tools.FontSizer','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTextArea','javax.swing.BorderFactory','java.awt.Color','java.awt.Font','javax.swing.JScrollPane','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TrackerRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PasteDataDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','okButton','javax.swing.JButton','+cancelButton','messageArea','javax.swing.JTextArea','+textArea','label','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
p$1.createGUI.apply(this, []);
this.setFontLevel$I($I$(1).getLevel$());
this.pack$();
this.setLocationRelativeTo$java_awt_Component(panel);
this.okButton.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(1).setFonts$O$I(this, level);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.messageArea=Clazz.new_($I$(4,1));
this.messageArea.setEditable$Z(false);
var empty=$I$(5).createEmptyBorder$I$I$I$I(2, 4, 2, 4);
var etched=$I$(5).createEtchedBorder$();
this.messageArea.setBorder$javax_swing_border_Border($I$(5).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.messageArea.setBackground$java_awt_Color(contentPane.getBackground$());
this.messageArea.setForeground$java_awt_Color($I$(6).black);
contentPane.add$java_awt_Component$O(this.messageArea, "North");
this.textArea=Clazz.new_($I$(4,1).c$$I$I,[15, 30]);
this.textArea.setBorder$javax_swing_border_Border(empty);
this.textArea.setFont$java_awt_Font(Clazz.new_(["monospaced", 0, this.textArea.getFont$().getSize$()],$I$(7,1).c$$S$I$I));
var scroller=Clazz.new_($I$(8,1).c$$java_awt_Component,[this.textArea]);
contentPane.add$java_awt_Component$O(scroller, "Center");
this.okButton=Clazz.new_($I$(9,1));
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.PasteDataDialog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PasteDataDialog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var data=this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].textArea.getText$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].textArea, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].frame.getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].panelID]).doPaste$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].frame.getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.PasteDataDialog'].panelID]), [data]);
});
})()
), Clazz.new_(P$.PasteDataDialog$lambda1.$init$,[this, null])));
this.cancelButton=Clazz.new_($I$(9,1));
this.cancelButton.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.PasteDataDialog$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PasteDataDialog$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.PasteDataDialog$lambda2.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(2,1));
buttonbar.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
buttonbar.add$java_awt_Component(this.okButton);
buttonbar.add$java_awt_Component(this.cancelButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
this.refreshGUI$();
}, p$1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(10).getString$S("PasteDataDialog.Title"));
this.okButton.setText$S($I$(10).getString$S("Dialog.Button.Apply"));
this.cancelButton.setText$S($I$(10).getString$S("Dialog.Button.Close"));
var s=$I$(10).getString$S("PasteDataDialog.Message1");
s+="\n" + $I$(10).getString$S("PasteDataDialog.Message2");
this.messageArea.setText$S(s);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
