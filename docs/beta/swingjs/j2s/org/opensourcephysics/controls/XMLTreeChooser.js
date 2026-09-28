(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'javax.swing.SwingUtilities','javax.swing.JOptionPane','javax.swing.JLabel','javax.swing.JButton','org.opensourcephysics.controls.ControlsRes','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.Box','javax.swing.BorderFactory','java.awt.BorderLayout','java.awt.Dimension','java.awt.Toolkit','org.opensourcephysics.controls.XMLTree','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTreeChooser", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.applyChanges=false;
},1);

C$.$fields$=[['Z',['applyChanges'],'O',['scrollPane','javax.swing.JPanel','tree','org.opensourcephysics.controls.XMLTree','textLabel','javax.swing.JLabel','classType','Class','whenClosed','Runnable']]]

Clazz.newMeth(C$, 'c$$S$S',  function (title, text) {
C$.c$$S$S$java_awt_Component.apply(this, [title, text, null]);
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (!b) {
this.dispose$();
if (this.whenClosed != null ) $I$(1).invokeLater$Runnable(this.whenClosed);
}});

Clazz.newMeth(C$, 'c$$S$S$java_awt_Component',  function (title, text, comp) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(2).getFrameForComponent$java_awt_Component(comp), true]);C$.$init$.apply(this);
this.setTitle$S(title);
this.textLabel=Clazz.new_($I$(3,1).c$$S,[" " + text]);
this.textLabel.setHorizontalTextPosition$I(2);
var cancelButton=Clazz.new_([$I$(5).getString$S("Chooser.Button.Cancel")],$I$(4,1).c$$S);
var okButton=Clazz.new_([$I$(5).getString$S("Chooser.Button.OK")],$I$(4,1).c$$S);
var selectAllButton=Clazz.new_([$I$(5).getString$S("Chooser.Button.SelectAll")],$I$(4,1).c$$S);
cancelButton.addActionListener$java_awt_event_ActionListener(((P$.XMLTreeChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreeChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.XMLTreeChooser'].setVisible$Z.apply(this.b$['org.opensourcephysics.controls.XMLTreeChooser'], [false]);
});
})()
), Clazz.new_(P$.XMLTreeChooser$1.$init$,[this, null])));
okButton.addActionListener$java_awt_event_ActionListener(((P$.XMLTreeChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreeChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.XMLTreeChooser'].applyChanges=true;
this.b$['org.opensourcephysics.controls.XMLTreeChooser'].setVisible$Z.apply(this.b$['org.opensourcephysics.controls.XMLTreeChooser'], [false]);
});
})()
), Clazz.new_(P$.XMLTreeChooser$2.$init$,[this, null])));
selectAllButton.addActionListener$java_awt_event_ActionListener(((P$.XMLTreeChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreeChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.XMLTreeChooser'].tree.selectHighlightedProperties$();
});
})()
), Clazz.new_(P$.XMLTreeChooser$3.$init$,[this, null])));
this.getRootPane$().setDefaultButton$javax_swing_JButton(okButton);
var headerPane=Clazz.new_($I$(6,1));
headerPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$java_awt_Container$I,[headerPane, 0]));
headerPane.add$java_awt_Component(this.textLabel);
headerPane.add$java_awt_Component($I$(8).createHorizontalGlue$());
headerPane.add$java_awt_Component(selectAllButton);
headerPane.setBorder$javax_swing_border_Border($I$(9).createEmptyBorder$I$I$I$I(10, 10, 0, 10));
this.scrollPane=Clazz.new_([Clazz.new_($I$(10,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.scrollPane.setBorder$javax_swing_border_Border($I$(9).createEmptyBorder$I$I$I$I(10, 10, 10, 10));
var buttonPane=Clazz.new_($I$(6,1));
buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$java_awt_Container$I,[buttonPane, 0]));
buttonPane.setBorder$javax_swing_border_Border($I$(9).createEmptyBorder$I$I$I$I(0, 10, 10, 10));
buttonPane.add$java_awt_Component($I$(8).createHorizontalGlue$());
buttonPane.add$java_awt_Component(okButton);
buttonPane.add$java_awt_Component($I$(8,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(11,1).c$$I$I,[10, 0])]));
buttonPane.add$java_awt_Component(cancelButton);
var contentPane=Clazz.new_([Clazz.new_($I$(10,1))],$I$(6,1).c$$java_awt_LayoutManager);
contentPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[340, 340]));
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(headerPane, "North");
contentPane.add$java_awt_Component$O(this.scrollPane, "Center");
contentPane.add$java_awt_Component$O(buttonPane, "South");
this.pack$();
var dim=$I$(12).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'choose$org_opensourcephysics_controls_XMLControl$Class',  function (control, type) {
this.tree=Clazz.new_($I$(13,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
this.tree.setHighlightedClass$Class(type);
this.tree.selectHighlightedProperties$();
this.textLabel.setIcon$javax_swing_Icon($I$(13).hiliteIcon);
this.scrollPane.removeAll$();
this.scrollPane.add$java_awt_Component$O(this.tree.getScrollPane$(), "Center");
this.validate$();
this.applyChanges=false;
this.classType=type;
this.whenClosed=null;
this.setVisible$Z(true);
return this.getList$();
});

Clazz.newMeth(C$, 'chooseAsync$org_opensourcephysics_controls_XMLControl$Class$Runnable',  function (control, type, whenClosed) {
this.tree=Clazz.new_($I$(13,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
this.tree.setHighlightedClass$Class(type);
this.tree.selectHighlightedProperties$();
this.textLabel.setIcon$javax_swing_Icon($I$(13).hiliteIcon);
this.scrollPane.removeAll$();
this.scrollPane.add$java_awt_Component$O(this.tree.getScrollPane$(), "Center");
this.validate$();
this.applyChanges=false;
this.classType=type;
this.whenClosed=whenClosed;
this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getList$',  function () {
var list=Clazz.new_($I$(14,1));
if (this.applyChanges) {
var props=this.tree.getSelectedProperties$();
var it=props.iterator$();
while (it.hasNext$()){
var prop=it.next$();
var propClass=prop.getPropertyClass$();
if ((propClass != null ) && this.classType.isAssignableFrom$Class(propClass) ) {
list.add$O(prop);
}}
}return list;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
