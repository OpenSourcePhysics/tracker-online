(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.XML','java.awt.Toolkit','java.awt.GridBagLayout','javax.swing.JPanel','javax.swing.JLabel','javax.swing.JPasswordField','java.awt.event.KeyAdapter','javax.swing.JButton','java.awt.GridBagConstraints','java.awt.Insets','javax.swing.BoxLayout','javax.swing.BorderFactory','javax.swing.Box','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Password", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['pass'],'S',['password'],'O',['messageLabel','javax.swing.JLabel','passwordField','javax.swing.JPasswordField']]]

Clazz.newMeth(C$, 'verify$S$S',  function (password, fileName) {
if ((password == null ) || password.equals$O("") ) {
return true;
}var dialog=Clazz.new_(C$);
dialog.password=password;
if ((fileName == null ) || fileName.equals$O("") ) {
dialog.messageLabel.setText$S($I$(1).getString$S("Password.Message.Short"));
} else {
dialog.messageLabel.setText$S($I$(1).getString$S("Password.Message.File") + " \"" + $I$(2).getName$S(fileName) + "\"." );
}dialog.pack$();
var dim=$I$(3).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - dialog.getBounds$().width)/2|0);
var y=((dim.height - dialog.getBounds$().height)/2|0);
dialog.setLocation$I$I(x, y);
dialog.pass=false;
dialog.passwordField.setText$S("");
dialog.setVisible$Z(true);
dialog.dispose$();
return dialog.pass;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[null, true]);C$.$init$.apply(this);
this.setTitle$S($I$(1).getString$S("Password.Title"));
p$1.createGUI.apply(this, []);
this.setResizable$Z(false);
this.passwordField.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var gridbag=Clazz.new_($I$(4,1));
var inputPanel=Clazz.new_($I$(5,1).c$$java_awt_LayoutManager,[gridbag]);
this.messageLabel=Clazz.new_($I$(6,1));
var fieldLabel=Clazz.new_([$I$(1).getString$S("Password.Label")],$I$(6,1).c$$S);
this.passwordField=Clazz.new_($I$(7,1).c$$I,[20]);
this.passwordField.setToolTipText$S($I$(1).getString$S("Password.Tooltip"));
this.passwordField.addActionListener$java_awt_event_ActionListener(((P$.Password$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Password$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var input=String.copyValueOf$CA(this.b$['org.opensourcephysics.controls.Password'].passwordField.getPassword$());
if ((this.b$['org.opensourcephysics.controls.Password'].password != null ) && !input.equals$O(this.b$['org.opensourcephysics.controls.Password'].password) ) {
$I$(3).getDefaultToolkit$().beep$();
this.b$['org.opensourcephysics.controls.Password'].passwordField.setText$S("");
} else {
this.b$['org.opensourcephysics.controls.Password'].pass=true;
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
}});
})()
), Clazz.new_(P$.Password$1.$init$,[this, null])));
this.passwordField.addKeyListener$java_awt_event_KeyListener(((P$.Password$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Password$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 27) {
this.b$['org.opensourcephysics.controls.Password'].passwordField.requestFocusInWindow$();
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.Password$2)));
var cancelButton=Clazz.new_([$I$(1).getString$S("Password.Button.Cancel")],$I$(9,1).c$$S);
cancelButton.addActionListener$java_awt_event_ActionListener(((P$.Password$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Password$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.Password'].passwordField.requestFocusInWindow$();
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.Password$3.$init$,[this, null])));
var okButton=Clazz.new_([$I$(1).getString$S("Password.Button.Enter")],$I$(9,1).c$$S);
okButton.addActionListener$java_awt_event_ActionListener(((P$.Password$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Password$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var input=String.copyValueOf$CA(this.b$['org.opensourcephysics.controls.Password'].passwordField.getPassword$());
if ((this.b$['org.opensourcephysics.controls.Password'].password != null ) && !input.equals$O(this.b$['org.opensourcephysics.controls.Password'].password) ) {
$I$(3).getDefaultToolkit$().beep$();
this.b$['org.opensourcephysics.controls.Password'].passwordField.setText$S("");
this.b$['org.opensourcephysics.controls.Password'].passwordField.requestFocusInWindow$();
} else {
this.b$['org.opensourcephysics.controls.Password'].pass=true;
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
}});
})()
), Clazz.new_(P$.Password$4.$init$,[this, null])));
var contentPane=this.getContentPane$();
contentPane.add$java_awt_Component$O(inputPanel, "Center");
var c=Clazz.new_($I$(10,1));
c.insets=Clazz.new_($I$(11,1).c$$I$I$I$I,[20, 15, 10, 15]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.messageLabel, c);
inputPanel.add$java_awt_Component(this.messageLabel);
var entry=Clazz.new_($I$(5,1));
entry.add$java_awt_Component(fieldLabel);
entry.add$java_awt_Component(this.passwordField);
c.gridy=1;
c.insets=Clazz.new_($I$(11,1).c$$I$I$I$I,[0, 10, 10, 10]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(entry, c);
inputPanel.add$java_awt_Component(entry);
var buttonPane=Clazz.new_($I$(5,1));
contentPane.add$java_awt_Component$O(buttonPane, "South");
buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$java_awt_Container$I,[buttonPane, 0]));
buttonPane.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(0, 10, 4, 4));
buttonPane.add$java_awt_Component($I$(14).createHorizontalGlue$());
buttonPane.add$java_awt_Component(okButton);
buttonPane.add$java_awt_Component($I$(14,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(15,1).c$$I$I,[4, 0])]));
buttonPane.add$java_awt_Component(cancelButton);
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
