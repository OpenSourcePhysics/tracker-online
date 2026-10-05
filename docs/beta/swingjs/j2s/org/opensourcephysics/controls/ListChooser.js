(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'javax.swing.JPanel','javax.swing.JOptionPane','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JButton','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.tools.ToolsRes','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.tools.FontSizer','javax.swing.BoxLayout','javax.swing.Box','java.awt.Color','javax.swing.JScrollPane','java.awt.Dimension','java.awt.BorderLayout','java.awt.Toolkit','java.awt.Rectangle','javax.swing.JCheckBox','java.util.ArrayList','java.awt.event.ActionEvent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ListChooser", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.checkPane=Clazz.new_($I$(1,1));
this.separator=":  ";
},1);

C$.$fields$=[['Z',['applyChanges'],'I',['fontLevel'],'S',['separator'],'O',['checkPane','javax.swing.JPanel','objects','Object[]','selections','boolean[]','checkBoxes','javax.swing.JCheckBox[]','instructions','javax.swing.JLabel','lightFont','java.awt.Font','actionListener','java.awt.event.ActionListener','choices','java.util.Collection','buttonPane','javax.swing.JPanel','cancelButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$S$S$java_awt_event_ActionListener',  function (title, text, listener) {
C$.c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener.apply(this, [title, text, null, listener]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_awt_Component$java_awt_event_ActionListener',  function (title, text, owner, listener) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(2).getFrameForComponent$java_awt_Component(owner), true]);C$.$init$.apply(this);
p$1.init$S$S$java_awt_event_ActionListener.apply(this, [title, text, listener]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener',  function (title, text, owner, listener) {
;C$.superclazz.c$$java_awt_Dialog$Z.apply(this,[owner, true]);C$.$init$.apply(this);
p$1.init$S$S$java_awt_event_ActionListener.apply(this, [title, text, listener]);
}, 1);

Clazz.newMeth(C$, 'init$S$S$java_awt_event_ActionListener',  function (title, text, listener) {
this.actionListener=listener;
this.setTitle$S(title);
this.instructions=Clazz.new_($I$(3,1).c$$S,[" " + text]);
this.instructions.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 0, 0, 6));
p$1.createGUI.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.lightFont=Clazz.new_($I$(3,1)).getFont$().deriveFont$I(0);
this.cancelButton=Clazz.new_([$I$(6).getString$S("Chooser.Button.Cancel")],$I$(5,1).c$$S);
var okButton=Clazz.new_([$I$(6).getString$S("Chooser.Button.OK")],$I$(5,1).c$$S);
var selectButton=Clazz.new_([$I$(7).getString$S("LibraryTreePanel.FileChooser.Button.Select")],$I$(5,1).c$$S);
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.ListChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ListChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.ListChooser'].applyChanges=false;
this.b$['org.opensourcephysics.controls.ListChooser'].setVisible$Z.apply(this.b$['org.opensourcephysics.controls.ListChooser'], [false]);
});
})()
), Clazz.new_(P$.ListChooser$1.$init$,[this, null])));
okButton.addActionListener$java_awt_event_ActionListener(((P$.ListChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ListChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var i=0; i < this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes.length; i++) {
this.b$['org.opensourcephysics.controls.ListChooser'].selections[i]=this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes[i].isSelected$();
}
this.b$['org.opensourcephysics.controls.ListChooser'].applyChanges=true;
this.b$['org.opensourcephysics.controls.ListChooser'].setVisible$Z.apply(this.b$['org.opensourcephysics.controls.ListChooser'], [false]);
});
})()
), Clazz.new_(P$.ListChooser$2.$init$,[this, null])));
selectButton.addActionListener$java_awt_event_ActionListener(((P$.ListChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ListChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var popup=Clazz.new_($I$(8,1));
var item=Clazz.new_([$I$(6).getString$S("Chooser.Button.Select.All")],$I$(9,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.ListChooser$3$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ListChooser$3$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
for (var i=0; i < this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes.length; i++) {
this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes[i].setSelected$Z.apply(this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes[i], [true]);
}
});
})()
), Clazz.new_(P$.ListChooser$3$lambda1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(10).getString$S("Filter.Rotate.Button.None")],$I$(9,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.ListChooser$3$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ListChooser$3$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
for (var i=0; i < this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes.length; i++) {
this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes[i].setSelected$Z.apply(this.b$['org.opensourcephysics.controls.ListChooser'].checkBoxes[i], [false]);
}
});
})()
), Clazz.new_(P$.ListChooser$3$lambda2.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
$I$(11).setFonts$java_awt_Container(popup);
popup.show$java_awt_Component$I$I(this.$finals$.selectButton, 0, this.$finals$.selectButton.getHeight$());
});
})()
), Clazz.new_(P$.ListChooser$3.$init$,[this, {selectButton:selectButton}])));
this.getRootPane$().setDefaultButton$javax_swing_JButton(okButton);
var headerPane=Clazz.new_($I$(1,1));
headerPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$java_awt_Container$I,[headerPane, 0]));
headerPane.add$java_awt_Component(this.instructions);
headerPane.add$java_awt_Component($I$(13).createHorizontalGlue$());
headerPane.add$java_awt_Component(selectButton);
headerPane.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(10, 10, 0, 10));
this.checkPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$java_awt_Container$I,[this.checkPane, 1]));
this.checkPane.setBackground$java_awt_Color($I$(14).white);
var scroller=Clazz.new_($I$(15,1).c$$java_awt_Component,[this.checkPane]);
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[250, 180]));
var scrollPane=Clazz.new_([Clazz.new_($I$(17,1))],$I$(1,1).c$$java_awt_LayoutManager);
scrollPane.add$java_awt_Component$O(scroller, "Center");
scrollPane.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(10, 10, 10, 10));
this.buttonPane=Clazz.new_($I$(1,1));
this.buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$java_awt_Container$I,[this.buttonPane, 0]));
this.buttonPane.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 10, 10, 10));
this.buttonPane.add$java_awt_Component($I$(13).createHorizontalGlue$());
this.buttonPane.add$java_awt_Component(okButton);
this.buttonPane.add$java_awt_Component($I$(13,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(16,1).c$$I$I,[10, 0])]));
this.buttonPane.add$java_awt_Component(this.cancelButton);
var contentPane=this.getContentPane$();
contentPane.add$java_awt_Component$O(headerPane, "North");
contentPane.add$java_awt_Component$O(scrollPane, "Center");
contentPane.add$java_awt_Component$O(this.buttonPane, "South");
this.pack$();
var dim=$I$(18).getDefaultToolkit$().getScreenSize$();
var rect=Clazz.new_($I$(19,1).c$$java_awt_Dimension,[dim]);
if (this.getOwner$() != null ) {
rect=this.getOwner$().getBounds$();
}var x=rect.x + ((rect.width - this.getBounds$().width)/2|0);
var y=rect.y + ((rect.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, p$1);

Clazz.newMeth(C$, 'setSeparator$S',  function (separator) {
if (separator != null ) {
this.separator=separator;
}});

Clazz.newMeth(C$, 'includeCancelButton$Z',  function (b) {
if (!b) {
this.buttonPane.remove$java_awt_Component(this.cancelButton);
} else {
this.buttonPane.add$java_awt_Component(this.cancelButton);
}});

Clazz.newMeth(C$, 'choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA',  function (choices, names, values, descriptions, selected, disabled) {
var pack=this.objects == null  || this.objects.length != choices.size$()  || this.fontLevel != $I$(11).getLevel$() ;
this.fontLevel=$I$(11).getLevel$();
this.checkPane.removeAll$();
this.choices=choices;
this.checkBoxes=Clazz.array($I$(20), [choices.size$()]);
this.selections=Clazz.array(Boolean.TYPE, [choices.size$()]);
this.objects=Clazz.array(java.lang.Object, [choices.size$()]);
var nameList=Clazz.new_($I$(21,1));
if (names != null ) {
nameList.addAll$java_util_Collection(names);
}var valueList=Clazz.new_($I$(21,1));
if (values != null ) {
valueList.addAll$java_util_Collection(values);
}var descriptionList=Clazz.new_($I$(21,1));
if (descriptions != null ) {
descriptionList.addAll$java_util_Collection(descriptions);
}var it=choices.iterator$();
var i=0;
while (it.hasNext$()){
this.objects[i]=it.next$();
this.selections[i]=false;
if ((nameList.size$() <= i) || (nameList.get$I(i) == null ) ) {
this.checkBoxes[i]=Clazz.new_([this.objects[i].toString()],$I$(20,1).c$$S);
} else {
var text=nameList.get$I(i);
if (valueList.size$() > i && valueList.get$I(i) != null  ) {
text+=this.separator + valueList.get$I(i);
}this.checkBoxes[i]=Clazz.new_($I$(20,1).c$$S,[text]);
}this.checkBoxes[i].setSelected$Z(selected != null  && selected[i] );
this.checkBoxes[i].setEnabled$Z(disabled == null  || !disabled[i] );
this.checkBoxes[i].setBackground$java_awt_Color($I$(14).white);
this.checkBoxes[i].setFont$java_awt_Font(this.lightFont);
this.checkBoxes[i].setIconTextGap$I(10);
var box=$I$(13).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 4, 0, 8));
box.add$java_awt_Component(this.checkBoxes[i]);
box.add$java_awt_Component($I$(13).createHorizontalGlue$());
this.checkPane.add$java_awt_Component(box);
if (descriptionList.size$() > i && descriptionList.get$I(i) != null  ) {
var label=Clazz.new_([descriptionList.get$I(i)],$I$(3,1).c$$S);
label.setFont$java_awt_Font(this.lightFont);
box.add$java_awt_Component(label);
}++i;
}
$I$(11,"setFonts$O$I",[this, $I$(11).getLevel$()]);
if (pack) this.pack$();
this.setVisible$Z(true);
return (this.actionListener == null  ? p$1.doAction.apply(this, []) : false);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (!b) {
p$1.doAction.apply(this, []);
}});

Clazz.newMeth(C$, 'wasCanceled$',  function () {
return !this.applyChanges;
});

Clazz.newMeth(C$, 'doAction',  function () {
if (this.applyChanges) {
for (var i=0; i < this.objects.length; i++) {
if (!this.selections[i]) {
this.choices.remove$O(this.objects[i]);
}}
}if (this.actionListener == null ) return this.applyChanges;
 else this.actionListener.actionPerformed$java_awt_event_ActionEvent(Clazz.new_($I$(22,1).c$$O$I$S,[this, this.applyChanges ? 1001 : 0, ""]));
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
