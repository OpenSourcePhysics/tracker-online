(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'java.awt.Toolkit','javax.swing.JMenuBar','org.opensourcephysics.display.OSPRuntime','javax.swing.JMenu','org.opensourcephysics.controls.ControlsRes','javax.swing.JMenuItem','org.opensourcephysics.display.DisplayRes','javax.swing.KeyStroke','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.display.PrintUtils','org.opensourcephysics.controls.ControlUtils','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.ToolsRes','javax.swing.AbstractAction','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.tools.FontSizer','java.io.File','javax.swing.JOptionPane','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.OSPApplication','javax.swing.JDialog','org.opensourcephysics.controls.XMLTreePanel','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlFrame", null, 'org.opensourcephysics.display.OSPFrame', 'org.opensourcephysics.controls.Control');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['model','java.lang.Object','languageItems','javax.swing.JMenuItem[]','languageMenu','javax.swing.JMenu','+fileMenu','+editMenu','+displayMenu','readItem','javax.swing.JMenuItem','+clearItem','+printFrameItem','+saveFrameAsEPSItem','+saveAsItem','+copyItem','+inspectItem','+sizeUpItem','+sizeDownItem','ospApp','org.opensourcephysics.controls.OSPApplication','xmlDefault','org.opensourcephysics.controls.XMLControlElement']]
,['I',['MENU_SHORTCUT_KEY_MASK']]]

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
p$1.createMenuBar.apply(this, []);
this.setName$S("controlFrame");
}, 1);

Clazz.newMeth(C$, 'createMenuBar',  function () {
var menuBar=Clazz.new_($I$(2,1));
if (!$I$(3).appletMode) {
this.setJMenuBar$javax_swing_JMenuBar(menuBar);
}this.fileMenu=Clazz.new_([$I$(5).getString$S("ControlFrame.File")],$I$(4,1).c$$S);
this.editMenu=Clazz.new_([$I$(5).getString$S("ControlFrame.Edit")],$I$(4,1).c$$S);
menuBar.add$javax_swing_JMenu(this.fileMenu);
menuBar.add$javax_swing_JMenu(this.editMenu);
this.readItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Load_XML")],$I$(6,1).c$$S);
this.saveAsItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Save_XML")],$I$(6,1).c$$S);
this.inspectItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Inspect_XML")],$I$(6,1).c$$S);
this.clearItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Clear_XML")],$I$(6,1).c$$S);
this.clearItem.setEnabled$Z(false);
this.copyItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Copy")],$I$(6,1).c$$S);
this.printFrameItem=Clazz.new_([$I$(7).getString$S("DrawingFrame.PrintFrame_menu_item")],$I$(6,1).c$$S);
this.saveFrameAsEPSItem=Clazz.new_([$I$(7).getString$S("DrawingFrame.SaveFrameAsEPS_menu_item")],$I$(6,1).c$$S);
var printMenu=Clazz.new_([$I$(7).getString$S("DrawingFrame.Print_menu_title")],$I$(4,1).c$$S);
if (!$I$(3).isApplet) {
this.fileMenu.add$javax_swing_JMenuItem(this.readItem);
}if (!$I$(3).isApplet) {
this.fileMenu.add$javax_swing_JMenuItem(this.saveAsItem);
}this.fileMenu.add$javax_swing_JMenuItem(this.inspectItem);
this.fileMenu.add$javax_swing_JMenuItem(this.clearItem);
if (!$I$(3).isApplet) {
this.fileMenu.add$javax_swing_JMenuItem(printMenu);
}printMenu.add$javax_swing_JMenuItem(this.printFrameItem);
printMenu.add$javax_swing_JMenuItem(this.saveFrameAsEPSItem);
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.copyItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["C".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.ControlFrame'].copy$.apply(this.b$['org.opensourcephysics.controls.ControlFrame'], []);
});
})()
), Clazz.new_(P$.ControlFrame$1.$init$,[this, null])));
this.saveAsItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["S".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
this.saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.ControlFrame'].saveXML$.apply(this.b$['org.opensourcephysics.controls.ControlFrame'], []);
});
})()
), Clazz.new_(P$.ControlFrame$2.$init$,[this, null])));
this.inspectItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.ControlFrame'].inspectXML$.apply(this.b$['org.opensourcephysics.controls.ControlFrame'], []);
});
})()
), Clazz.new_(P$.ControlFrame$3.$init$,[this, null])));
this.readItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["L".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
this.readItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.ControlFrame'].loadXML$S.apply(this.b$['org.opensourcephysics.controls.ControlFrame'], [null]);
});
})()
), Clazz.new_(P$.ControlFrame$4.$init$,[this, null])));
this.clearItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ((this.b$['org.opensourcephysics.controls.ControlFrame'].xmlDefault == null ) || (this.b$['org.opensourcephysics.controls.ControlFrame'].model == null ) ) {
return;
}this.b$['org.opensourcephysics.controls.ControlFrame'].xmlDefault=null;
this.b$['org.opensourcephysics.controls.ControlFrame'].clearItem.setEnabled$Z(false);
if (Clazz.instanceOf(this.b$['org.opensourcephysics.controls.ControlFrame'].model, "org.opensourcephysics.controls.Calculation")) {
(this.b$['org.opensourcephysics.controls.ControlFrame'].model).resetCalculation$();
(this.b$['org.opensourcephysics.controls.ControlFrame'].model).calculate$();
} else if (Clazz.instanceOf(this.b$['org.opensourcephysics.controls.ControlFrame'].model, "org.opensourcephysics.controls.Animation")) {
(this.b$['org.opensourcephysics.controls.ControlFrame'].model).stopAnimation$();
(this.b$['org.opensourcephysics.controls.ControlFrame'].model).resetAnimation$();
(this.b$['org.opensourcephysics.controls.ControlFrame'].model).initializeAnimation$();
}$I$(9).repaintOSPFrames$();
});
})()
), Clazz.new_(P$.ControlFrame$5.$init$,[this, null])));
this.printFrameItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(10).printComponent$java_awt_Component(this.b$['org.opensourcephysics.controls.ControlFrame']);
});
})()
), Clazz.new_(P$.ControlFrame$6.$init$,[this, null])));
this.saveFrameAsEPSItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(10).saveComponentAsEPS$java_awt_Component(this.b$['org.opensourcephysics.controls.ControlFrame']);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.ControlFrame$7.$init$,[this, null])));
this.loadDisplayMenu$();
var helpMenu=Clazz.new_([$I$(5).getString$S("ControlFrame.Help")],$I$(4,1).c$$S);
menuBar.add$javax_swing_JMenu(helpMenu);
var aboutItem=Clazz.new_([$I$(5).getString$S("ControlFrame.About")],$I$(6,1).c$$S);
aboutItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(3).showAboutDialog$java_awt_Component(this.b$['org.opensourcephysics.controls.ControlFrame']);
});
})()
), Clazz.new_(P$.ControlFrame$8.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(aboutItem);
var sysItem=Clazz.new_([$I$(5).getString$S("ControlFrame.System")],$I$(6,1).c$$S);
sysItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(11).showSystemProperties$Z(true);
});
})()
), Clazz.new_(P$.ControlFrame$9.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(sysItem);
var showItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Display_All_Frames")],$I$(6,1).c$$S);
showItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9).showDrawingAndTableFrames$();
});
})()
), Clazz.new_(P$.ControlFrame$10.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(showItem);
helpMenu.addSeparator$();
var logItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Message_Log")],$I$(6,1).c$$S);
logItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(12).showLog$();
});
})()
), Clazz.new_(P$.ControlFrame$11.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(logItem);
this.validate$();
}, p$1);

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}this.displayMenu=C$.superclazz.prototype.loadDisplayMenu$.apply(this, []);
if (this.displayMenu == null ) {
this.displayMenu=Clazz.new_($I$(4,1));
this.displayMenu.setText$S($I$(5).getString$S("ControlFrame.Display"));
menuBar.add$javax_swing_JMenu(this.displayMenu);
}this.languageMenu=Clazz.new_($I$(4,1));
this.languageMenu.setText$S($I$(5).getString$S("ControlFrame.Language"));
var languageAction=((P$.ControlFrame$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var language=e.getActionCommand$();
$I$(12).finest$S("setting language to " + language);
var locales=$I$(3).getInstalledLocales$();
for (var i=0; i < locales.length; i++) {
if (language.equals$O(locales[i].getDisplayName$())) {
$I$(13).setLocale$java_util_Locale(locales[i]);
return;
}}
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.ControlFrame$12));
var locales=$I$(3).getInstalledLocales$();
var languageGroup=Clazz.new_($I$(15,1));
this.languageItems=Clazz.array($I$(6), [locales.length]);
for (var i=0; i < locales.length; i++) {
this.languageItems[i]=Clazz.new_([locales[i].getDisplayName$java_util_Locale(locales[i])],$I$(16,1).c$$S);
this.languageItems[i].setActionCommand$S(locales[i].getDisplayName$());
this.languageItems[i].addActionListener$java_awt_event_ActionListener(languageAction);
this.languageMenu.add$javax_swing_JMenuItem(this.languageItems[i]);
languageGroup.add$javax_swing_AbstractButton(this.languageItems[i]);
}
for (var i=0; i < locales.length; i++) {
if (locales[i].getLanguage$().equals$O($I$(13).getLanguage$())) {
this.languageItems[i].setSelected$Z(true);
}}
if ($I$(3).isAuthorMode$() || !$I$(3).isLauncherMode$() ) {
this.displayMenu.add$javax_swing_JMenuItem(this.languageMenu);
}var fontMenu=Clazz.new_([$I$(7).getString$S("DrawingFrame.Font_menu_title")],$I$(4,1).c$$S);
this.displayMenu.add$javax_swing_JMenuItem(fontMenu);
var sizeUpItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Increase_Font_Size")],$I$(6,1).c$$S);
sizeUpItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(17).levelUp$();
});
})()
), Clazz.new_(P$.ControlFrame$13.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeUpItem);
var sizeDownItem=Clazz.new_([$I$(5).getString$S("ControlFrame.Decrease_Font_Size")],$I$(6,1).c$$S);
sizeDownItem.addActionListener$java_awt_event_ActionListener(((P$.ControlFrame$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(17).levelDown$();
});
})()
), Clazz.new_(P$.ControlFrame$14.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeDownItem);
fontMenu.addChangeListener$javax_swing_event_ChangeListener(((P$.ControlFrame$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.$finals$.sizeDownItem.setEnabled$Z($I$(17).getLevel$() > 0);
});
})()
), Clazz.new_(P$.ControlFrame$15.$init$,[this, {sizeDownItem:sizeDownItem}])));
return this.displayMenu;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
C$.superclazz.prototype.refreshGUI$.apply(this, []);
p$1.createMenuBar.apply(this, []);
});

Clazz.newMeth(C$, 'save$',  function () {
$I$(11).saveToFile$O$java_awt_Component(this, this);
});

Clazz.newMeth(C$, 'readParameters$',  function () {
$I$(11).loadParameters$org_opensourcephysics_controls_Control$java_awt_Component(this, this);
});

Clazz.newMeth(C$, 'copy$',  function () {
$I$(3,"copy$S$java_awt_datatransfer_ClipboardOwner",[this.toString(), null]);
});

Clazz.newMeth(C$, 'saveXML$',  function () {
var chooser=$I$(3).getChooser$();
if (chooser == null ) {
return;
}var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S($I$(5).getString$S("ControlFrame.Save_XML_Data"));
chooser.setDialogTitle$S(oldTitle);
var result=-1;
try {
result=chooser.showSaveDialog$java_awt_Component(null);
} catch (e) {
System.err.println$S("InterruptedException in saveXML()().");
e.printStackTrace$();
}
chooser.setDialogTitle$S(oldTitle);
if (result == 0) {
var file=chooser.getSelectedFile$();
$I$(3).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(".xml");
if (i != fileName.length$() - 4) {
fileName+=".xml";
file=Clazz.new_($I$(18,1).c$$S,[fileName]);
}if (!$I$(3).isJS && file.exists$() ) {
var selected=$I$(19,"showConfirmDialog$java_awt_Component$O$S$I",[null, "Replace existing " + file.getName$() + "?" , "Replace File", 1]);
if (selected != 0) {
return;
}}var xml=Clazz.new_([this.getOSPApp$()],$I$(20,1).c$$O);
xml.write$S(fileName);
}});

Clazz.newMeth(C$, 'loadXML$SA',  function (args) {
if (args != null ) {
for (var i=0; i < args.length; i++) {
this.loadXML$S(args[i]);
}
}});

Clazz.newMeth(C$, 'loadXML$org_opensourcephysics_controls_XMLControlElement$Z',  function (xml, compatibleModel) {
if (xml == null ) {
$I$(12).finer$S("XML data not found in ControlFrame loadXML method.");
return;
}if (Clazz.getClass($I$(21)).isAssignableFrom$Class(xml.getObjectClass$())) {
this.ospApp=this.getOSPApp$();
this.ospApp.compatibleModel=compatibleModel;
xml.loadObject$O(this.getOSPApp$());
this.ospApp.compatibleModel=false;
if (this.model.getClass$() === this.ospApp.getLoadedModelClass$() ) {
this.xmlDefault=xml;
this.clearItem.setEnabled$Z(true);
} else if (this.ospApp.getLoadedModelClass$() != null ) {
this.xmlDefault=Clazz.new_([this.getOSPApp$()],$I$(20,1).c$$O);
this.clearItem.setEnabled$Z(true);
} else {
this.xmlDefault=null;
this.clearItem.setEnabled$Z(false);
$I$(19).showMessageDialog$java_awt_Component$O$S$I(this, "Model specified in file not found.", "Data not loaded.", 2);
}} else {
$I$(19,"showMessageDialog$java_awt_Component$O$S$I",[this, "Data for: " + xml.getObjectClass$() + "." , "OSP Application data not found.", 2]);
}});

Clazz.newMeth(C$, 'loadXML$S',  function (fileName) {
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
this.loadXML$();
return;
}this.loadXML$org_opensourcephysics_controls_XMLControlElement$Z(Clazz.new_($I$(20,1).c$$S,[fileName]), false);
});

Clazz.newMeth(C$, 'loadXML$',  function () {
var fc=$I$(3).getChooser$();
if (fc == null ) return;
var oldTitle=fc.getDialogTitle$();
fc.showOpenDialog$java_awt_Component$Runnable$Runnable(this, ((P$.ControlFrame$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.fc.setDialogTitle$S(this.$finals$.oldTitle);
var file=this.$finals$.fc.getSelectedFile$();
if (file != null ) this.b$['org.opensourcephysics.controls.ControlFrame'].loadXML$org_opensourcephysics_controls_XMLControlElement$Z.apply(this.b$['org.opensourcephysics.controls.ControlFrame'], [Clazz.new_($I$(20,1).c$$java_io_File,[file]), false]);
});
})()
), Clazz.new_(P$.ControlFrame$16.$init$,[this, {oldTitle:oldTitle,fc:fc}])), null);
});

Clazz.newMeth(C$, 'inspectXML$',  function () {
var xml=Clazz.new_([this.getOSPApp$()],$I$(20,1).c$$O);
var dialog=Clazz.new_($I$(22,1).c$$java_awt_Frame$Z,[null, true]);
dialog.setTitle$S("XML Inspector");
var treePanel=Clazz.new_($I$(23,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
dialog.setContentPane$java_awt_Container(treePanel);
dialog.setSize$java_awt_Dimension(Clazz.new_($I$(24,1).c$$I$I,[600, 300]));
dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getOSPApp$',  function () {
if (this.ospApp == null ) {
this.ospApp=Clazz.new_($I$(21,1).c$$org_opensourcephysics_controls_Control$O,[this, this.model]);
}return this.ospApp;
});

C$.$static$=function(){C$.$static$=0;
C$.MENU_SHORTCUT_KEY_MASK=$I$(1).getDefaultToolkit$().getMenuShortcutKeyMask$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
