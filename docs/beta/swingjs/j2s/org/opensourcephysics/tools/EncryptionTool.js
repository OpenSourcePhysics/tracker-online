(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.awt.Dimension','javax.swing.JPanel','java.awt.BorderLayout','org.opensourcephysics.tools.JobManager','org.opensourcephysics.tools.Toolbox','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.controls.Cryptic','org.opensourcephysics.controls.XMLTreePanel','java.awt.Toolkit','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XML','java.awt.Color','javax.swing.JOptionPane','javax.swing.JToolBar','org.opensourcephysics.tools.ResourceLoader','javax.swing.JButton','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JTextField','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','javax.swing.JCheckBox','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','java.awt.Frame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EncryptionTool", null, 'javax.swing.JFrame', 'org.opensourcephysics.tools.Tool');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.contentPane=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.jobManager=Clazz.new_($I$(4,1).c$$org_opensourcephysics_tools_Tool,[this]);
},1);

C$.$fields$=[['S',['fileName'],'O',['treePanel','org.opensourcephysics.controls.XMLTreePanel','contentPane','javax.swing.JPanel','jobManager','org.opensourcephysics.tools.JobManager','passwordField','javax.swing.JTextField','encryptedCheckBox','javax.swing.JCheckBox','+previewCheckBox','openItem','javax.swing.JMenuItem','+saveItem','+saveAsItem','passwordLabel','javax.swing.JLabel','fileMenu','javax.swing.JMenu','+helpMenu','exitItem','javax.swing.JMenuItem','+logItem','+aboutItem','openIcon','javax.swing.Icon','openButton','javax.swing.JButton','saveIcon','javax.swing.Icon','saveButton','javax.swing.JButton']]
,['O',['dim','java.awt.Dimension','ENCRYPTION_TOOL','org.opensourcephysics.tools.EncryptionTool']]]

Clazz.newMeth(C$, 'getTool$',  function () {
return C$.ENCRYPTION_TOOL;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
var name="EncryptionTool";
this.setName$S(name);
p$1.createGUI.apply(this, []);
this.refreshGUI$();
$I$(5).addTool$S$org_opensourcephysics_tools_Tool(name, this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fileName) {
C$.c$.apply(this, []);
this.open$S(fileName);
}, 1);

Clazz.newMeth(C$, 'open$S',  function (fileName) {
$I$(6).fine$S("opening " + fileName);
var control=Clazz.new_($I$(7,1));
control.setDecryptPolicy$I(5);
control.read$S(fileName);
if (control.failedToRead$()) {
return null;
}var pass=control.getPassword$();
if (pass == null ) {
this.passwordField.setText$S(null);
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [control]);
this.encryptedCheckBox.setEnabled$Z(true);
} else if (this.passwordField.getText$().equals$O(pass)) {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this, [control])]);
this.encryptedCheckBox.setEnabled$Z(true);
} else {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [control]);
this.encryptedCheckBox.setEnabled$Z(false);
}this.fileName=fileName;
this.refreshGUI$();
return fileName;
});

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
var control=Clazz.new_($I$(7,1));
control.setDecryptPolicy$I(5);
control.readXML$S(job.getXML$());
if (control.failedToRead$()) {
return;
}var pass=control.getPassword$();
if (pass == null ) {
this.passwordField.setText$S(null);
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [control]);
} else if (this.passwordField.getText$().equals$O(pass)) {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this, [control])]);
} else {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [control]);
}this.fileName=null;
this.refreshGUI$();
this.jobManager.log$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(job, replyTo);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
var title=$I$(8).getString$S("EncryptionTool.Title");
if (this.fileName != null ) {
title+=": " + this.fileName;
}this.setTitle$S(title);
this.openButton.setToolTipText$S($I$(8).getString$S("EncryptionTool.Button.Open.ToolTip"));
this.saveButton.setToolTipText$S($I$(8).getString$S("EncryptionTool.Button.Save.ToolTip"));
this.passwordLabel.setText$S($I$(8).getString$S("EncryptionTool.Label.Password"));
this.passwordField.setToolTipText$S($I$(8).getString$S("EncryptionTool.PasswordField.ToolTip"));
this.encryptedCheckBox.setText$S($I$(8).getString$S("EncryptionTool.CheckBox.Encrypted"));
this.encryptedCheckBox.setToolTipText$S($I$(8).getString$S("EncryptionTool.CheckBox.Encrypted.ToolTip"));
this.previewCheckBox.setText$S($I$(8).getString$S("EncryptionTool.CheckBox.Preview"));
this.previewCheckBox.setToolTipText$S($I$(8).getString$S("EncryptionTool.CheckBox.Preview.ToolTip"));
this.fileMenu.setText$S($I$(8).getString$S("EncryptionTool.Menu.File"));
this.openItem.setText$S($I$(8).getString$S("EncryptionTool.MenuItem.Open"));
this.saveItem.setText$S($I$(8).getString$S("EncryptionTool.MenuItem.Save"));
this.saveAsItem.setText$S($I$(8).getString$S("EncryptionTool.MenuItem.SaveAs"));
this.exitItem.setText$S($I$(8).getString$S("EncryptionTool.MenuItem.Exit"));
this.helpMenu.setText$S($I$(8).getString$S("EncryptionTool.Menu.Help"));
this.logItem.setText$S($I$(8).getString$S("EncryptionTool.MenuItem.Log"));
this.aboutItem.setText$S($I$(8).getString$S("EncryptionTool.MenuItem.About"));
this.saveButton.setEnabled$Z(this.encryptedCheckBox.isEnabled$());
this.saveItem.setEnabled$Z(this.encryptedCheckBox.isEnabled$());
this.saveAsItem.setEnabled$Z(this.encryptedCheckBox.isEnabled$());
var control=p$1.getCurrentControl.apply(this, []);
this.encryptedCheckBox.setSelected$Z((control != null ) && (control.getPassword$() != null ) );
this.passwordLabel.setEnabled$Z(this.encryptedCheckBox.isSelected$());
this.passwordField.setEnabled$Z(this.encryptedCheckBox.isSelected$());
this.previewCheckBox.setEnabled$Z(this.encryptedCheckBox.isEnabled$() && this.encryptedCheckBox.isSelected$() );
this.previewCheckBox.setSelected$Z((control != null ) && (control.getObjectClass$() === Clazz.getClass($I$(9)) ) );
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var tool=C$.getTool$();
tool.setDefaultCloseOperation$I(3);
tool.open$S("Untitled.xset");
tool.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'getCurrentControl',  function () {
if (this.treePanel == null ) {
return null;
}var control=this.treePanel.getControl$();
if (Clazz.instanceOf(control, "org.opensourcephysics.controls.XMLControlElement")) {
return control;
}return null;
}, p$1);

Clazz.newMeth(C$, 'displayXML$org_opensourcephysics_controls_XMLControlElement',  function (control) {
if (this.treePanel != null ) {
this.contentPane.remove$java_awt_Component(this.treePanel);
}this.treePanel=Clazz.new_($I$(10,1).c$$org_opensourcephysics_controls_XMLControl$Z,[control, false]);
this.contentPane.add$java_awt_Component$O(this.treePanel, "Center");
this.validate$();
this.refreshGUI$();
}, p$1);

Clazz.newMeth(C$, 'setPassword$S',  function (password) {
var control=p$1.getCurrentControl.apply(this, []);
if (control == null ) {
return;
}var pass=control.getPassword$();
if (!this.encryptedCheckBox.isEnabled$()) {
var verified=password.equals$O(pass);
if (verified) {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this, [p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this, [control])]);
this.encryptedCheckBox.setEnabled$Z(true);
} else {
$I$(11).getDefaultToolkit$().beep$();
$I$(6).fine$S("Bad password: " + password);
}} else if (control.getObjectClass$() === Clazz.getClass($I$(9)) ) {
var temp=p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this, [control]);
temp.setPassword$S(password);
temp=p$1.encrypt$org_opensourcephysics_controls_XMLControlElement.apply(this, [temp]);
control.setValue$S$O("cryptic", temp.getString$S("cryptic"));
this.treePanel.refresh$();
} else {
if (password.equals$O("") && !this.encryptedCheckBox.isSelected$() ) {
password=null;
}control.setPassword$S(password);
this.treePanel.refresh$();
}this.refreshGUI$();
}, p$1);

Clazz.newMeth(C$, 'encrypt$org_opensourcephysics_controls_XMLControlElement',  function (control) {
if (control.getObjectClass$() === Clazz.getClass($I$(9)) ) {
return control;
}var xml=control.toXML$();
var cryptic=Clazz.new_($I$(9,1).c$$S,[xml]);
var encrypted=Clazz.new_($I$(7,1).c$$O,[cryptic]);
encrypted.setPassword$S(control.getPassword$());
return encrypted;
}, p$1);

Clazz.newMeth(C$, 'decrypt$org_opensourcephysics_controls_XMLControlElement',  function (control) {
if (control.getObjectClass$() !== Clazz.getClass($I$(9)) ) {
return control;
}var cryptic=control.loadObject$O(null);
var xml=cryptic.decrypt$();
var decrypted=Clazz.new_($I$(7,1).c$$S,[xml]);
return decrypted;
}, p$1);

Clazz.newMeth(C$, 'open',  function () {
$I$(12).getChooser$().showOpenDialog$java_awt_Component$Runnable$Runnable(this, ((P$.EncryptionTool$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EncryptionTool$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(12).chooserDir=$I$(12).getChooser$().getCurrentDirectory$.apply($I$(12).getChooser$(), []).toString.apply($I$(12).getChooser$().getCurrentDirectory$.apply($I$(12).getChooser$(), []), []);
this.b$['org.opensourcephysics.tools.EncryptionTool'].open$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [$I$(13,"getRelativePath$S",[$I$(12).getChooser$().getSelectedFile$.apply($I$(12).getChooser$(), []).getAbsolutePath$.apply($I$(12).getChooser$().getSelectedFile$.apply($I$(12).getChooser$(), []), [])])]);
});
})()
), Clazz.new_(P$.EncryptionTool$lambda1.$init$,[this, null])), null);
return null;
}, p$1);

Clazz.newMeth(C$, 'save$S',  function (fileName) {
if ((fileName == null ) || fileName.equals$O("") ) {
return null;
}if (this.passwordField.getBackground$() === $I$(14).yellow ) {
this.passwordField.setBackground$java_awt_Color($I$(14).white);
p$1.setPassword$S.apply(this, [this.passwordField.getText$()]);
}var control=p$1.getCurrentControl.apply(this, []);
if (control == null ) {
return null;
}if (control.getObjectClass$() === Clazz.getClass($I$(9)) ) {
control=p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this, [control]);
}if (control.write$S(fileName) == null ) {
return null;
}this.fileName=fileName;
this.refreshGUI$();
return fileName;
}, p$1);

Clazz.newMeth(C$, 'saveAs',  function () {
var result=$I$(12).getChooser$().showSaveDialog$java_awt_Component(this);
if (result == 0) {
$I$(12).chooserDir=$I$(12).getChooser$().getCurrentDirectory$().toString();
var file=$I$(12).getChooser$().getSelectedFile$();
if (file.exists$()) {
var selected=$I$(15,"showConfirmDialog$java_awt_Component$O$S$I",[this, $I$(8).getString$S("EncryptionTool.Dialog.ReplaceFile.Message") + " " + file.getName$() + "?" , $I$(8).getString$S("EncryptionTool.Dialog.ReplaceFile.Title"), 1]);
if (selected != 0) {
return null;
}}var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return null;
}return p$1.save$S.apply(this, [$I$(13).getRelativePath$S(fileName)]);
}return null;
}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.contentPane.setPreferredSize$java_awt_Dimension(C$.dim);
this.setContentPane$java_awt_Container(this.contentPane);
this.setDefaultCloseOperation$I(1);
var toolbar=Clazz.new_($I$(16,1));
toolbar.setFloatable$Z(false);
this.contentPane.add$java_awt_Component$O(toolbar, "North");
var imageFile="/org/opensourcephysics/resources/tools/images/open.gif";
this.openIcon=$I$(17).getImageIcon$S(imageFile);
this.openButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this.openIcon]);
this.openButton.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.open.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], []);
});
})()
), Clazz.new_(P$.EncryptionTool$1.$init$,[this, null])));
toolbar.add$java_awt_Component(this.openButton);
imageFile="/org/opensourcephysics/resources/tools/images/save.gif";
this.saveIcon=$I$(17).getImageIcon$S(imageFile);
this.saveButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this.saveIcon]);
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.save$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [this.b$['org.opensourcephysics.tools.EncryptionTool'].fileName]);
});
})()
), Clazz.new_(P$.EncryptionTool$2.$init$,[this, null])));
toolbar.add$java_awt_Component(this.saveButton);
toolbar.addSeparator$();
this.passwordLabel=Clazz.new_($I$(19,1));
this.passwordLabel.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(0, 3, 0, 3));
this.passwordField=Clazz.new_($I$(21,1).c$$I,[20]);
this.passwordField.addKeyListener$java_awt_event_KeyListener(((P$.EncryptionTool$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.setBackground$java_awt_Color($I$(14).white);
p$1.setPassword$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.getText$()]);
} else if (e.getKeyChar$() != "\uffff") {
this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.setBackground$java_awt_Color($I$(14).yellow);
}});
})()
), Clazz.new_($I$(22,1),[this, null],P$.EncryptionTool$3)));
this.passwordField.addFocusListener$java_awt_event_FocusListener(((P$.EncryptionTool$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.getBackground$() === $I$(14).yellow ) {
this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.setBackground$java_awt_Color($I$(14).white);
p$1.setPassword$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.getText$()]);
}});
})()
), Clazz.new_($I$(23,1),[this, null],P$.EncryptionTool$4)));
toolbar.add$java_awt_Component(this.passwordLabel);
toolbar.add$java_awt_Component(this.passwordField);
this.encryptedCheckBox=Clazz.new_($I$(24,1).c$$S,[""]);
this.encryptedCheckBox.setEnabled$Z(false);
this.encryptedCheckBox.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.EncryptionTool'].encryptedCheckBox.isSelected$()) {
p$1.setPassword$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [this.b$['org.opensourcephysics.tools.EncryptionTool'].passwordField.getText$()]);
} else {
var control=p$1.getCurrentControl.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], []);
if (control.getObjectClass$() === Clazz.getClass($I$(9)) ) {
control=p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [control]);
control.setPassword$S(null);
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [control]);
}p$1.setPassword$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [""]);
}});
})()
), Clazz.new_(P$.EncryptionTool$5.$init$,[this, null])));
this.encryptedCheckBox.setContentAreaFilled$Z(false);
toolbar.add$java_awt_Component(this.encryptedCheckBox);
this.previewCheckBox=Clazz.new_($I$(24,1).c$$S,[""]);
this.previewCheckBox.setOpaque$Z(false);
this.previewCheckBox.setEnabled$Z(false);
this.previewCheckBox.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=p$1.getCurrentControl.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], []);
if (this.b$['org.opensourcephysics.tools.EncryptionTool'].previewCheckBox.isSelected$()) {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [p$1.encrypt$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [control])]);
} else {
p$1.displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [p$1.decrypt$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [control])]);
}});
})()
), Clazz.new_(P$.EncryptionTool$6.$init$,[this, null])));
toolbar.add$java_awt_Component(this.previewCheckBox);
var keyMask=$I$(11).getDefaultToolkit$().getMenuShortcutKeyMask$();
var menubar=Clazz.new_($I$(25,1));
this.fileMenu=Clazz.new_($I$(26,1));
menubar.add$javax_swing_JMenu(this.fileMenu);
this.openItem=Clazz.new_($I$(27,1));
this.openItem.setAccelerator$javax_swing_KeyStroke($I$(28,"getKeyStroke$I$I",["O".$c(), keyMask]));
this.openItem.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.open.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], []);
});
})()
), Clazz.new_(P$.EncryptionTool$7.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.openItem);
this.fileMenu.addSeparator$();
this.saveItem=Clazz.new_($I$(27,1));
this.saveItem.setAccelerator$javax_swing_KeyStroke($I$(28,"getKeyStroke$I$I",["S".$c(), keyMask]));
this.saveItem.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.save$S.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], [this.b$['org.opensourcephysics.tools.EncryptionTool'].fileName]);
});
})()
), Clazz.new_(P$.EncryptionTool$8.$init$,[this, null])));
this.saveItem.setEnabled$Z(false);
this.fileMenu.add$javax_swing_JMenuItem(this.saveItem);
this.saveAsItem=Clazz.new_($I$(27,1));
this.saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.saveAs.apply(this.b$['org.opensourcephysics.tools.EncryptionTool'], []);
});
})()
), Clazz.new_(P$.EncryptionTool$9.$init$,[this, null])));
this.saveAsItem.setEnabled$Z(false);
this.fileMenu.add$javax_swing_JMenuItem(this.saveAsItem);
this.exitItem=Clazz.new_([$I$(8).getString$S("MenuItem.Exit")],$I$(27,1).c$$S);
this.exitItem.setAccelerator$javax_swing_KeyStroke($I$(28,"getKeyStroke$I$I",["Q".$c(), keyMask]));
this.exitItem.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
System.exit$I(0);
});
})()
), Clazz.new_(P$.EncryptionTool$10.$init$,[this, null])));
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.exitItem);
this.helpMenu=Clazz.new_($I$(26,1));
menubar.add$javax_swing_JMenu(this.helpMenu);
this.logItem=Clazz.new_($I$(27,1));
this.logItem.setAccelerator$javax_swing_KeyStroke($I$(28,"getKeyStroke$I$I",["L".$c(), keyMask]));
this.logItem.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p0=Clazz.new_($I$(29,1)).getLocation$();
var frame=$I$(6).showLog$();
if ((frame.getLocation$().x == p0.x) && (frame.getLocation$().y == p0.y) ) {
var p=this.b$['java.awt.Component'].getLocation$.apply(this.b$['java.awt.Component'], []);
frame.setLocation$I$I(p.x + 28, p.y + 28);
}});
})()
), Clazz.new_(P$.EncryptionTool$11.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.logItem);
this.helpMenu.addSeparator$();
this.aboutItem=Clazz.new_($I$(27,1));
this.aboutItem.setAccelerator$javax_swing_KeyStroke($I$(28,"getKeyStroke$I$I",["A".$c(), keyMask]));
this.aboutItem.addActionListener$java_awt_event_ActionListener(((P$.EncryptionTool$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "EncryptionTool$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var toolname=$I$(8).getString$S("EncryptionTool.About.ToolName");
var aboutString=toolname + "6.3.5.260922" + $I$(13).NEW_LINE + $I$(8).getString$S("EncryptionTool.About.OSPName") + $I$(13).NEW_LINE + "www.opensourcephysics.org" ;
$I$(15,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.EncryptionTool'], aboutString, $I$(8).getString$S("EncryptionTool.About.Title"), 1]);
});
})()
), Clazz.new_(P$.EncryptionTool$12.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.aboutItem);
this.setJMenuBar$javax_swing_JMenuBar(menubar);
this.pack$();
var dim=$I$(11).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.dim=Clazz.new_($I$(1,1).c$$I$I,[720, 500]);
C$.ENCRYPTION_TOOL=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
