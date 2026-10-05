(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),p$1={},I$=[[0,'java.awt.Toolkit',['org.opensourcephysics.ejs.control.EjsControlFrame','.EjsFrame'],'javax.swing.JFrame','org.opensourcephysics.ejs.EjsRes','java.awt.TextArea','javax.swing.event.SwingPropertyChangeSupport','org.opensourcephysics.display.OSPRuntime','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','org.opensourcephysics.display.DisplayRes','javax.swing.KeyStroke','org.opensourcephysics.display.PrintUtils','org.opensourcephysics.controls.ControlUtils','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.Tool','org.opensourcephysics.tools.SnapshotTool','org.opensourcephysics.tools.ToolsRes','javax.swing.AbstractAction','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.tools.FontSizer','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.display.Dataset','org.opensourcephysics.display.DatasetManager','javax.swing.JOptionPane','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.OSPApplication','org.opensourcephysics.display.GUIUtils','java.io.File','javax.swing.JDialog','org.opensourcephysics.controls.XMLTreePanel','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EjsControlFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.ejs.control.ParsedEjsControl', ['javax.swing.RootPaneContainer', 'org.opensourcephysics.controls.MainFrame']);
C$.$classes$=[['EjsFrame',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mainFrame=Clazz.new_($I$(2,1),[this, null]);
this.messageFrame=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Messages_frame_title")],$I$(3,1).c$$S);
this.$messageArea=Clazz.new_($I$(5,1).c$$I$I,[20, 20]);
this.xmlDefault=null;
this.support=Clazz.new_($I$(6,1).c$$O,[this]);
},1);

C$.$fields$=[['O',['reply','org.opensourcephysics.tools.Tool','languageItems','javax.swing.JMenuItem[]','translateItem','javax.swing.JMenuItem','+snapshotItem','+videoItem','+clearItem','languageMenu','javax.swing.JMenu','mainFrame','org.opensourcephysics.ejs.control.EjsControlFrame.EjsFrame','defaultDrawingPanel','org.opensourcephysics.display.DrawingPanel','messageFrame','javax.swing.JFrame','$messageArea','java.awt.TextArea','model','java.lang.Object','menuBar','javax.swing.JMenuBar','xmlDefault','org.opensourcephysics.controls.XMLControlElement','support','java.beans.PropertyChangeSupport','app','org.opensourcephysics.controls.OSPApplication']]
,['I',['MENU_SHORTCUT_KEY_MASK']]]

Clazz.newMeth(C$, 'c$$O',  function (_simulation) {
C$.c$$O$S.apply(this, [_simulation, "name=controlFrame;title=Control Frame;location=400,0;layout=border;exit=false; visible=true"]);
}, 1);

Clazz.newMeth(C$, 'c$$O$S',  function (_simulation, param) {
;C$.superclazz.c$$O.apply(this,[_simulation]);C$.$init$.apply(this);
this.mainFrame.addChildFrame$javax_swing_JFrame(this.messageFrame);
this.model=_simulation;
this.mainFrame.setName$S("controlFrame");
this.addObject$O$S$S(this.mainFrame, "Frame", param);
p$1.createMenuBar.apply(this, []);
if ($I$(7).appletMode) {
this.mainFrame.setDefaultCloseOperation$I(1);
}this.messageFrame.getContentPane$().add$java_awt_Component(this.$messageArea);
this.messageFrame.setSize$I$I(300, 175);
this.reply=((P$.EjsControlFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.tools.Tool', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, noReply) {
if (this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel != null ) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.receiveToolReply$org_opensourcephysics_tools_Job(job);
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.EjsControlFrame$1.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'addChildFrame$javax_swing_JFrame',  function (child) {
if ((this.mainFrame == null ) || (child == null ) ) {
return;
}this.mainFrame.addChildFrame$javax_swing_JFrame(child);
});

Clazz.newMeth(C$, 'clearChildFrames$',  function () {
if (this.mainFrame == null ) {
return;
}this.mainFrame.clearChildFrames$();
});

Clazz.newMeth(C$, 'getChildFrames$',  function () {
return this.mainFrame.getChildFrames$();
});

Clazz.newMeth(C$, ['getMainFrame$','getMainFrame'],  function () {
return this.mainFrame;
});

Clazz.newMeth(C$, ['getMainFrameSize$','getMainFrameSize'],  function () {
var d=this.mainFrame.getSize$();
return Clazz.array(Integer.TYPE, -1, [d.width, d.height]);
});

Clazz.newMeth(C$, 'getFrame$',  function () {
return this.mainFrame;
});

Clazz.newMeth(C$, 'createMenuBar',  function () {
this.menuBar=Clazz.new_($I$(8,1));
this.mainFrame.setJMenuBar$javax_swing_JMenuBar(this.menuBar);
var fileMenu=Clazz.new_([$I$(4).getString$S("EjsControlFrame.File_menu")],$I$(9,1).c$$S);
if (!$I$(7).isApplet) {
this.menuBar.add$javax_swing_JMenu(fileMenu);
}var readItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Read_menu_item")],$I$(10,1).c$$S);
this.clearItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Clear_menu_item")],$I$(10,1).c$$S);
this.clearItem.setEnabled$Z(false);
var saveAsItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.SaveAs_menu_item")],$I$(10,1).c$$S);
var inspectItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Inspect_menu_item")],$I$(10,1).c$$S);
var printFrameItem=Clazz.new_([$I$(11).getString$S("DrawingFrame.PrintFrame_menu_item")],$I$(10,1).c$$S);
var saveFrameAsEPSItem=Clazz.new_([$I$(11).getString$S("DrawingFrame.SaveFrameAsEPS_menu_item")],$I$(10,1).c$$S);
var printMenu=Clazz.new_([$I$(11).getString$S("DrawingFrame.Print_menu_title")],$I$(9,1).c$$S);
fileMenu.add$javax_swing_JMenuItem(readItem);
fileMenu.add$javax_swing_JMenuItem(saveAsItem);
fileMenu.add$javax_swing_JMenuItem(inspectItem);
fileMenu.add$javax_swing_JMenuItem(this.clearItem);
if (!$I$(7).isJS) fileMenu.add$javax_swing_JMenuItem(printMenu);
printMenu.add$javax_swing_JMenuItem(printFrameItem);
printMenu.add$javax_swing_JMenuItem(saveFrameAsEPSItem);
readItem.setAccelerator$javax_swing_KeyStroke($I$(12,"getKeyStroke$I$I",["R".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
readItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].loadXML$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].support.firePropertyChange$S$O$O("xmlDefault", null, this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].xmlDefault);
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].mainFrame.repaint$();
});
})()
), Clazz.new_(P$.EjsControlFrame$2.$init$,[this, null])));
this.clearItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].clearDefaultXML$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});
})()
), Clazz.new_(P$.EjsControlFrame$3.$init$,[this, null])));
saveAsItem.setAccelerator$javax_swing_KeyStroke($I$(12,"getKeyStroke$I$I",["S".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].saveXML$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});
})()
), Clazz.new_(P$.EjsControlFrame$4.$init$,[this, null])));
inspectItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].inspectXML$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});
})()
), Clazz.new_(P$.EjsControlFrame$5.$init$,[this, null])));
printFrameItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(13).printComponent$java_awt_Component(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].mainFrame);
});
})()
), Clazz.new_(P$.EjsControlFrame$6.$init$,[this, null])));
saveFrameAsEPSItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(13).saveComponentAsEPS$java_awt_Component(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].mainFrame);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.EjsControlFrame$7.$init$,[this, null])));
this.loadDisplayMenu$();
this.loadToolsMenu$();
var helpMenu=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Help_menu")],$I$(9,1).c$$S);
this.menuBar.add$javax_swing_JMenu(helpMenu);
var aboutItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.About_menu_item")],$I$(10,1).c$$S);
aboutItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7,"showAboutDialog$java_awt_Component",[this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].getMainFrame$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], [])]);
});
})()
), Clazz.new_(P$.EjsControlFrame$8.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(aboutItem);
var sysItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.System_menu_item")],$I$(10,1).c$$S);
sysItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(14).showSystemProperties$Z(true);
});
})()
), Clazz.new_(P$.EjsControlFrame$9.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(sysItem);
helpMenu.addSeparator$();
var logItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.MessageLog_menu_item")],$I$(10,1).c$$S);
logItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15).showLog$();
});
})()
), Clazz.new_(P$.EjsControlFrame$10.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(logItem);
this.menuBar.add$javax_swing_JMenu(helpMenu);
}, p$1);

Clazz.newMeth(C$, 'loadToolsMenu$',  function () {
if ($I$(7).isJS) {
return null;
}var menuBar=this.mainFrame.getJMenuBar$();
if (menuBar == null ) {
return null;
}var toolsMenu=Clazz.new_([$I$(11).getString$S("DrawingFrame.Tools_menu_title")],$I$(9,1).c$$S);
menuBar.add$javax_swing_JMenu(toolsMenu);
var datasetItem=Clazz.new_([$I$(11).getString$S("DrawingFrame.DatasetTool_menu_item")],$I$(10,1).c$$S);
toolsMenu.add$javax_swing_JMenuItem(datasetItem);
if ($I$(7).loadDataTool) {
if (!$I$(16).setSendAction$javax_swing_JMenuItem$S$O$org_opensourcephysics_tools_Tool$Z(datasetItem, "DataTool", this.defaultDrawingPanel, this.reply, true)) {
$I$(7).loadDataTool=false;
datasetItem.setEnabled$Z(false);
}}this.snapshotItem=Clazz.new_([$I$(11).getString$S("DisplayPanel.Snapshot_menu_item")],$I$(10,1).c$$S);
this.snapshotItem.setEnabled$Z(false);
if (!$I$(7).isApplet) {
toolsMenu.add$javax_swing_JMenuItem(this.snapshotItem);
}this.snapshotItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tool=$I$(17).getTool$();
if (this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel != null ) {
tool.saveImage$S$java_awt_Component(null, this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel);
} else {
tool.saveImage$S$java_awt_Component(null, this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].getContentPane$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []));
}});
})()
), Clazz.new_(P$.EjsControlFrame$11.$init$,[this, null])));
return toolsMenu;
});

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
var displayMenu=Clazz.new_($I$(9,1));
displayMenu.setText$S($I$(4).getString$S("EjsControlFrame.Display_menu"));
this.menuBar.add$javax_swing_JMenu(displayMenu);
this.languageMenu=Clazz.new_($I$(9,1));
this.languageMenu.setText$S($I$(4).getString$S("EjsControlFrame.Language"));
this.translateItem=Clazz.new_($I$(10,1));
this.translateItem.setText$S($I$(4).getString$S("EjsControlFrame.Translate"));
if ($I$(7).loadTranslatorTool) {
this.translateItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).getTranslator$().showProperties$Class(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].model.getClass$());
});
})()
), Clazz.new_(P$.EjsControlFrame$12.$init$,[this, null])));
}this.translateItem.setEnabled$Z($I$(7).getTranslator$() != null );
if (!$I$(7).isJS) this.languageMenu.add$java_awt_Component$I(this.translateItem, 0);
var locales=$I$(7).getInstalledLocales$();
var languageAction=((P$.EjsControlFrame$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var language=e.getActionCommand$();
$I$(15).finest$S("setting language to " + language);
for (var i=0; i < this.$finals$.locales.length; i++) {
if (language.equals$O(this.$finals$.locales[i].getDisplayName$())) {
$I$(18).setLocale$java_util_Locale(this.$finals$.locales[i]);
return;
}}
});
})()
), Clazz.new_($I$(19,1),[this, {locales:locales}],P$.EjsControlFrame$13));
var languageGroup=Clazz.new_($I$(20,1));
this.languageItems=Clazz.array($I$(10), [locales.length]);
for (var i=0; i < locales.length; i++) {
this.languageItems[i]=Clazz.new_([locales[i].getDisplayName$java_util_Locale(locales[i])],$I$(21,1).c$$S);
this.languageItems[i].setActionCommand$S(locales[i].getDisplayName$());
this.languageItems[i].addActionListener$java_awt_event_ActionListener(languageAction);
this.languageMenu.add$javax_swing_JMenuItem(this.languageItems[i]);
languageGroup.add$javax_swing_AbstractButton(this.languageItems[i]);
}
for (var i=0; i < locales.length; i++) {
if (locales[i].getLanguage$().equals$O($I$(18).getLanguage$())) {
this.languageItems[i].setSelected$Z(true);
}}
if (!$I$(7).isJS) displayMenu.add$javax_swing_JMenuItem(this.languageMenu);
var fontMenu=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Font_menu")],$I$(9,1).c$$S);
displayMenu.add$javax_swing_JMenuItem(fontMenu);
var sizeUpItem=Clazz.new_($I$(10,1));
sizeUpItem.setText$S($I$(4).getString$S("EjsControlFrame.IncreaseFontSize_menu_item"));
sizeUpItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(22).levelUp$();
});
})()
), Clazz.new_(P$.EjsControlFrame$14.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeUpItem);
var sizeDownItem=Clazz.new_($I$(10,1));
sizeDownItem.setText$S($I$(4).getString$S("EjsControlFrame.DecreaseFontSize_menu_item"));
sizeDownItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(22).levelDown$();
});
})()
), Clazz.new_(P$.EjsControlFrame$15.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeDownItem);
var aliasMenu=Clazz.new_([$I$(4).getString$S("EjsControlFrame.AntiAlias_menu")],$I$(9,1).c$$S);
if (!$I$(7).isJS) displayMenu.add$javax_swing_JMenuItem(aliasMenu);
var textAliasItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Text_check_box"), false],$I$(23,1).c$$S$Z);
textAliasItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.setAntialiasTextOn$Z(this.$finals$.textAliasItem.isSelected$());
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.repaint$();
});
})()
), Clazz.new_(P$.EjsControlFrame$16.$init$,[this, {textAliasItem:textAliasItem}])));
aliasMenu.add$javax_swing_JMenuItem(textAliasItem);
var shapeAliasItem=Clazz.new_([$I$(4).getString$S("EjsControlFrame.Drawing_check_box"), false],$I$(23,1).c$$S$Z);
shapeAliasItem.addActionListener$java_awt_event_ActionListener(((P$.EjsControlFrame$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.setAntialiasShapeOn$Z(this.$finals$.shapeAliasItem.isSelected$());
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.repaint$();
});
})()
), Clazz.new_(P$.EjsControlFrame$17.$init$,[this, {shapeAliasItem:shapeAliasItem}])));
fontMenu.addChangeListener$javax_swing_event_ChangeListener(((P$.EjsControlFrame$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.$finals$.sizeDownItem.setEnabled$Z($I$(22).getLevel$() > 0);
});
})()
), Clazz.new_(P$.EjsControlFrame$18.$init$,[this, {sizeDownItem:sizeDownItem}])));
if (!$I$(7).isJS) aliasMenu.addChangeListener$javax_swing_event_ChangeListener(((P$.EjsControlFrame$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel == null ) {
this.$finals$.textAliasItem.setEnabled$Z(false);
this.$finals$.shapeAliasItem.setEnabled$Z(false);
} else {
this.$finals$.textAliasItem.setEnabled$Z(true);
this.$finals$.textAliasItem.setEnabled$Z(true);
this.$finals$.textAliasItem.setSelected$Z(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.isAntialiasTextOn$());
this.$finals$.shapeAliasItem.setSelected$Z(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.isAntialiasShapeOn$());
}});
})()
), Clazz.new_(P$.EjsControlFrame$19.$init$,[this, {textAliasItem:textAliasItem,shapeAliasItem:shapeAliasItem}])));
aliasMenu.add$javax_swing_JMenuItem(shapeAliasItem);
this.menuBar.add$javax_swing_JMenu(displayMenu);
$I$(18,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.EjsControlFrame$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].refreshGUI$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});
})()
), Clazz.new_(P$.EjsControlFrame$20.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'printToGraphics$java_awt_Graphics$java_awt_print_PageFormat$I',  function (g, pageFormat, pageIndex) {
if (pageIndex >= 1) {
return 1;
}if (g == null ) {
return 1;
}var g2=g;
var scalex=pageFormat.getImageableWidth$() / this.mainFrame.getWidth$();
var scaley=pageFormat.getImageableHeight$() / this.mainFrame.getHeight$();
var scale=Math.min(scalex, scaley);
g2.translate$I$I((pageFormat.getImageableX$()|0), (pageFormat.getImageableY$()|0));
g2.scale$D$D(scale, scale);
this.mainFrame.paint$java_awt_Graphics(g);
return 0;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
p$1.createMenuBar.apply(this, []);
this.mainFrame.pack$();
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.support.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.support.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'println$S',  function (s) {
this.print$S(s + "\n");
});

Clazz.newMeth(C$, 'println$',  function () {
this.print$S("\n");
});

Clazz.newMeth(C$, 'print$S',  function (s) {
if (s == null ) {
return;
}this.messageFrame.setVisible$Z(true);
$I$(7,"postEvent$Runnable",[((P$.EjsControlFrame$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EjsControlFrame$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].$messageArea.append$S.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].$messageArea, [this.$finals$.s]);
});
})()
), Clazz.new_(P$.EjsControlFrame$lambda1.$init$,[this, {s:s}]))]);
});

Clazz.newMeth(C$, 'clearMessages$',  function () {
$I$(7,"postEvent$Runnable",[((P$.EjsControlFrame$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EjsControlFrame$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].$messageArea.setText$S.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].$messageArea, [""]);
});
})()
), Clazz.new_(P$.EjsControlFrame$lambda2.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
if ((message == null ) || message.trim$().equals$O("") ) {
return;
}C$.superclazz.prototype.calculationDone$S.apply(this, [message]);
});

Clazz.newMeth(C$, 'render$',  function () {
});

Clazz.newMeth(C$, 'addObject$O$S$S',  function (object, classname, propList) {
if (Clazz.instanceOf(object, "org.opensourcephysics.display.DrawingPanel")) {
this.defaultDrawingPanel=object;
if (this.snapshotItem != null ) {
this.snapshotItem.setEnabled$Z(true);
}if (this.videoItem != null ) {
this.videoItem.setEnabled$Z(true);
}}return C$.superclazz.prototype.addObject$O$S$S.apply(this, [object, classname, propList]);
});

Clazz.newMeth(C$, 'clearData$',  function () {
if (this.defaultDrawingPanel != null ) {
var list=this.defaultDrawingPanel.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(Clazz.getClass($I$(24)), null);
for (var i=0, n=list.size$(); i < n; i++) (list.get$I(i)).clear$();

list=this.defaultDrawingPanel.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(Clazz.getClass($I$(25)), null);
for (var i=0, n=list.size$(); i < n; i++) (list.get$I(i)).clear$();

this.defaultDrawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'clearDataAndRepaint$',  function () {
this.clearData$();
if (this.defaultDrawingPanel != null ) {
this.defaultDrawingPanel.repaint$();
}});

Clazz.newMeth(C$, 'getTopLevelAncestor$',  function () {
return this.mainFrame;
});

Clazz.newMeth(C$, 'getRootPane$',  function () {
return this.mainFrame.getRootPane$();
});

Clazz.newMeth(C$, 'getContentPane$',  function () {
return this.mainFrame.getContentPane$();
});

Clazz.newMeth(C$, 'setContentPane$java_awt_Container',  function (contentPane) {
this.mainFrame.setContentPane$java_awt_Container(contentPane);
});

Clazz.newMeth(C$, 'getLayeredPane$',  function () {
return this.mainFrame.getLayeredPane$();
});

Clazz.newMeth(C$, 'setLayeredPane$javax_swing_JLayeredPane',  function (layeredPane) {
this.mainFrame.setLayeredPane$javax_swing_JLayeredPane(layeredPane);
});

Clazz.newMeth(C$, 'getGlassPane$',  function () {
return this.mainFrame.getGlassPane$();
});

Clazz.newMeth(C$, 'setGlassPane$java_awt_Component',  function (glassPane) {
this.mainFrame.setGlassPane$java_awt_Component(glassPane);
});

Clazz.newMeth(C$, 'parseXMLMenu$S',  function (xmlMenu) {
System.out.println$S("The parseXMLMenu method has been disabled to reduce the size OSP jar files.");
});

Clazz.newMeth(C$, 'saveXML$',  function () {
var chooser=$I$(7).getChooser$();
var result=chooser.showSaveDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
if (file.exists$()) {
var selected=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(4).getString$S("EjsControlFrame.ReplaceExisting_dialog") + file.getName$() + $I$(4).getString$S("EjsControlFrame.question_mark") , $I$(4).getString$S("EjsControlFrame.RepalceFile_dialog_message"), 1]);
if (selected != 0) {
return;
}}$I$(7).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=$I$(27,"getRelativePath$S",[file.getAbsolutePath$()]);
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(".xml");
if (i != fileName.length$() - 4) {
fileName+=".xml";
}var xml=Clazz.new_([this.getOSPApp$()],$I$(28,1).c$$O);
xml.write$S(fileName);
}});

Clazz.newMeth(C$, 'getOSPApp$',  function () {
if (this.app == null ) {
this.app=Clazz.new_($I$(29,1).c$$org_opensourcephysics_controls_Control$O,[this, this.model]);
}return this.app;
});

Clazz.newMeth(C$, 'loadDefaultXML$',  function () {
if (this.xmlDefault != null ) {
this.xmlDefault.loadObject$O(this.getOSPApp$());
this.clearItem.setEnabled$Z(true);
}});

Clazz.newMeth(C$, 'clearDefaultXML$',  function () {
if ((this.xmlDefault == null ) || (this.model == null ) ) {
return;
}this.xmlDefault=null;
this.clearItem.setEnabled$Z(false);
if (Clazz.instanceOf(this.model, "org.opensourcephysics.controls.Calculation")) {
(this.model).resetCalculation$();
(this.model).calculate$();
} else if (Clazz.instanceOf(this.model, "org.opensourcephysics.controls.Animation")) {
(this.model).stopAnimation$();
(this.model).resetAnimation$();
(this.model).initializeAnimation$();
}$I$(30).repaintOSPFrames$();
});

Clazz.newMeth(C$, 'loadXML$S',  function (fileName) {
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
this.loadXML$();
return;
}var xml=null;
try {
xml=Clazz.new_([Clazz.new_($I$(31,1).c$$S,[fileName])],$I$(28,1).c$$java_io_File);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("XML file not loaded: " + fileName);
System.out.println$S("EjsControlFrame Exception: " + ex);
return;
} else {
throw ex;
}
}
this.loadXML$org_opensourcephysics_controls_XMLControlElement$Z(xml, false);
});

Clazz.newMeth(C$, 'loadXML$org_opensourcephysics_controls_XMLControlElement$Z',  function (xml, compatibleModel) {
if (xml == null ) {
$I$(15).finer$S("XML not found in EjsControlFrame loadXML method.");
return;
}if (Clazz.getClass($I$(29)).isAssignableFrom$Class(xml.getObjectClass$())) {
var mControl=xml.getChildControl$S("model");
if (mControl == null ) {
$I$(26).showMessageDialog$java_awt_Component$O$S$I(this.mainFrame, "XML Control not found.", "Data not loaded.", 2);
return;
}var modelClass=mControl.getObjectClass$();
if (modelClass == null ) {
$I$(26).showMessageDialog$java_awt_Component$O$S$I(this.mainFrame, "Model specified in file not found.", "Data not loaded.", 2);
return;
}var loaderMatch=$I$(27).getLoader$Class(modelClass).getClass$() === $I$(27,"getLoader$Class",[this.model.getClass$()]).getClass$() ;
compatibleModel=compatibleModel || (modelClass === this.model.getClass$() ) || (modelClass.isAssignableFrom$Class(this.model.getClass$()) && loaderMatch )  ;
if (!compatibleModel) {
$I$(26).showMessageDialog$java_awt_Component$O$S$I(this.mainFrame, "Data not loaded. Data was created by: " + modelClass + "." , "Incompatible data file.", 2);
return;
}this.app=this.getOSPApp$();
this.app.setCompatibleModel$Z(compatibleModel);
xml.loadObject$O(this.getOSPApp$());
this.app.setCompatibleModel$Z(false);
if (this.model.getClass$() === this.app.getLoadedModelClass$() ) {
this.xmlDefault=xml;
this.clearItem.setEnabled$Z(true);
} else if (this.app.getLoadedModelClass$() != null ) {
this.xmlDefault=Clazz.new_([this.getOSPApp$()],$I$(28,1).c$$O);
this.clearItem.setEnabled$Z(true);
} else {
this.xmlDefault=null;
this.clearItem.setEnabled$Z(false);
}} else {
$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[this.mainFrame, "Data for: " + xml.getObjectClass$() + "." , "OSP Application data not found.", 2]);
}});

Clazz.newMeth(C$, 'loadXML$',  function () {
var chooser=$I$(7).getChooser$();
System.err.println$S("Loading xml");
var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S("Load XML Data");
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, ((P$.EjsControlFrame$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(7).chooserDir=this.$finals$.chooser.getCurrentDirectory$().toString();
var file=this.$finals$.chooser.getSelectedFile$();
$I$(15,"fine$S",["reading file=" + file]);
var xml=Clazz.new_($I$(28,1).c$$java_io_File,[file]);
this.$finals$.chooser.setDialogTitle$S(this.$finals$.oldTitle);
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].loadXML$org_opensourcephysics_controls_XMLControlElement$Z.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], [xml, false]);
});
})()
), Clazz.new_(P$.EjsControlFrame$21.$init$,[this, {chooser:chooser,oldTitle:oldTitle}])), ((P$.EjsControlFrame$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsControlFrame$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.chooser.setDialogTitle$S(this.$finals$.oldTitle);
});
})()
), Clazz.new_(P$.EjsControlFrame$22.$init$,[this, {chooser:chooser,oldTitle:oldTitle}])));
});

Clazz.newMeth(C$, 'inspectXML$',  function () {
var xml=Clazz.new_([this.getOSPApp$()],$I$(28,1).c$$O);
var dialog=Clazz.new_($I$(32,1).c$$java_awt_Frame$Z,[null, true]);
var treePanel=Clazz.new_($I$(33,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
dialog.setTitle$S("XML Inspector");
dialog.setContentPane$java_awt_Container(treePanel);
dialog.setSize$java_awt_Dimension(Clazz.new_($I$(34,1).c$$I$I,[600, 300]));
dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'loadXML$SA',  function (args) {
if (args != null ) {
for (var i=0; i < args.length; i++) {
this.loadXML$S(args[i]);
}
}});

C$.$static$=function(){C$.$static$=0;
C$.MENU_SHORTCUT_KEY_MASK=$I$(1).getDefaultToolkit$().getMenuShortcutKeyMask$();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.EjsControlFrame, "EjsFrame", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.OSPFrame', 'org.opensourcephysics.controls.MainFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMainFrame$',  function () {
return this;
});

Clazz.newMeth(C$, 'render$',  function () {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].render$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].clearData$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});

Clazz.newMeth(C$, 'clearDataAndRepaint$',  function () {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].clearDataAndRepaint$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].messageFrame.setVisible$Z(false);
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].messageFrame.dispose$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'invalidateImage$',  function () {
if (this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel != null ) {
this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].defaultDrawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'getOSPApp$',  function () {
return this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'].getOSPApp$.apply(this.b$['org.opensourcephysics.ejs.control.EjsControlFrame'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
