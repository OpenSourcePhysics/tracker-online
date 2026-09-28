(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.FontSizer','org.opensourcephysics.controls.ConsoleLevel','StringBuffer','org.opensourcephysics.controls.OSPLog','java.io.StringWriter','java.io.PrintWriter','java.util.logging.LogRecord','org.opensourcephysics.display.OSPRuntime','java.util.logging.Level','java.awt.Color','java.util.ArrayList','org.opensourcephysics.controls.MessageFrame','javax.swing.JFrame','javax.swing.SwingUtilities','java.awt.Toolkit','java.awt.EventQueue','java.io.BufferedWriter','java.io.FileWriter','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.XML','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Dimension','org.opensourcephysics.display.GUIUtils','javax.swing.JScrollPane','javax.swing.text.StyleContext','javax.swing.text.StyleConstants','java.awt.event.MouseAdapter','java.util.logging.Logger',['org.opensourcephysics.controls.OSPLog','.OSPLogHandler'],['org.opensourcephysics.controls.OSPLog','.ConsoleFormatter'],'java.util.logging.FileHandler','java.util.logging.XMLFormatter','javax.swing.JPopupMenu','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.AbstractAction','javax.swing.JMenuBar','javax.swing.JCheckBoxMenuItem','javax.swing.JFileChooser','java.io.File','java.io.BufferedReader','java.io.FileReader',['org.opensourcephysics.controls.OSPLog','.OSPFrame'],['org.opensourcephysics.controls.OSPLog','.LoggerOutputStream'],['org.opensourcephysics.controls.OSPLog','.LoggerPrintStream'],'org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPLog", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['OSPFrame',0],['LoggerPrintStream',9],['ConsoleFormatter',0],['LoggerOutputStream',0],['OSPLogHandler',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logBuffer=Clazz.new_($I$(3,1));
this.logRecords=Clazz.new_($I$(11,1));
this.hasPermission=true;
},1);

C$.$fields$=[['Z',['hasPermission'],'I',['myPopupFontLevel'],'S',['logFileName','tempFileName','pkgName','bundleName'],'O',['frame','org.opensourcephysics.controls.OSPLog.OSPFrame','logBuffer','StringBuffer','logRecords','java.util.List','logger','java.util.logging.Logger','fileHandler','java.util.logging.Handler','logHandler','org.opensourcephysics.controls.OSPLog.OSPLogHandler','logPane','javax.swing.JTextPane','logPanel','javax.swing.JPanel','popup','javax.swing.JPopupMenu','popupGroup','javax.swing.ButtonGroup','+menubarGroup','logToFileItem','javax.swing.JMenuItem']]
,['Z',['logConsole','useFrame'],'I',['nLog','messageIndex'],'S',['eol','logdir','slash'],'O',['realSysout','java.io.PrintStream','OSPLOG','org.opensourcephysics.controls.OSPLog','chooser','javax.swing.JFileChooser','black','javax.swing.text.Style','+red','+blue','+green','+magenta','+gray','DARK_GREEN','java.awt.Color','+DARK_BLUE','+DARK_RED','levels','java.util.logging.Level[]','defaultLevel','java.util.logging.Level','messageStorage','java.util.logging.LogRecord[]']]]

Clazz.newMeth(C$, 'useMessageFrame$',  function () {
return ($I$(8).appletMode || $I$(8).isApplet );
}, 1);

Clazz.newMeth(C$, 'getOSPLog$',  function () {
if (C$.OSPLOG == null  && !C$.useMessageFrame$() ) {
C$.OSPLOG=Clazz.new_(C$.c$$S$S,["org.opensourcephysics", null]);
}return C$.OSPLOG;
}, 1);

Clazz.newMeth(C$, 'getOSPLog$Z',  function (useFrame) {
C$.useFrame=useFrame;
C$.getOSPLog$();
}, 1);

Clazz.newMeth(C$, 'setLogDir$S',  function (dir) {
C$.logdir=dir;
});

Clazz.newMeth(C$, 'getLogDir$',  function () {
return C$.logdir;
});

Clazz.newMeth(C$, 'isLogVisible$',  function () {
if (C$.useMessageFrame$() && $I$(12).APPLET_MESSAGEFRAME != null  ) {
return $I$(12).APPLET_MESSAGEFRAME.isVisible$();
} else if (C$.OSPLOG != null ) {
return C$.OSPLOG.isVisible$();
}return false;
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
if (visible) {
var p=Clazz.new_($I$(13,1)).getLocation$();
var log=C$.getFrame$();
if (log.getLocation$().x == p.x && log.getLocation$().y == p.y ) {
$I$(14,"invokeLater$Runnable",[((P$.OSPLog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "OSPLog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var dim=$I$(15).getDefaultToolkit$().getScreenSize$.apply($I$(15).getDefaultToolkit$(), []);
var x=((dim.width - this.$finals$.log.getBounds$.apply(this.$finals$.log, []).width)/2|0);
var y=((dim.height - this.$finals$.log.getBounds$.apply(this.$finals$.log, []).height)/2|0);
this.$finals$.log.setLocation$I$I.apply(this.$finals$.log, [x, y]);
});
})()
), Clazz.new_(P$.OSPLog$lambda1.$init$,[this, {log:log}]))]);
}}try {
if (visible) {
this.createGUI$();
if (this.logPane == null ) {
this.logPane=p$2.getTextPane.apply(this, []);
p$2.postAllRecords.apply(this, []);
$I$(1,"setFonts$O$I",[this, $I$(1).getLevel$()]);
this.frame.pack$();
}}if (C$.useMessageFrame$()) {
$I$(12).showLog$Z(visible);
} else {
this.frame.setVisible$Z(visible);
}} catch (t) {
C$.realSysout.println$S("OSPLog???" + t);
}
});

Clazz.newMeth(C$, 'postAllRecords',  function () {
for (var i=0, n=this.logRecords.size$(); i < n; i++) {
this.logHandler.publish$java_util_logging_LogRecord(this.logRecords.get$I(i));
}
this.logRecords.clear$();
}, p$2);

Clazz.newMeth(C$, 'isVisible$',  function () {
if (C$.useMessageFrame$()) {
return $I$(12).isLogVisible$();
}return this.frame.isVisible$();
});

Clazz.newMeth(C$, 'showLog$',  function () {
if (C$.useMessageFrame$()) {
return $I$(12).showLog$Z(true);
}C$.getOSPLog$().setVisible$Z(true);
var logger=C$.OSPLOG.getLogger$();
for (var i=0, n=C$.messageStorage.length; i < n; i++) {
var record=C$.messageStorage[(i + C$.messageIndex) % n];
if (record != null ) {
logger.log$java_util_logging_LogRecord(record);
}}
C$.messageIndex=0;
return C$.getOSPLog$().frame;
}, 1);

Clazz.newMeth(C$, 'showLogInvokeLater$',  function () {
var doLater=((P$.OSPLog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(4).showLog$();
});
})()
), Clazz.new_(P$.OSPLog$1.$init$,[this, null]));
$I$(16).invokeLater$Runnable(doLater);
}, 1);

Clazz.newMeth(C$, 'getLevelValue$',  function () {
if (C$.useMessageFrame$()) {
return $I$(12).getLevelValue$();
}try {
var level=C$.getOSPLog$().getLogger$().getLevel$();
if (level != null ) return level.intValue$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return -1;
}, 1);

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level',  function (level) {
if (C$.useMessageFrame$()) {
$I$(12).setLevel$java_util_logging_Level(level);
} else {
C$.setLevel$java_util_logging_Level$org_opensourcephysics_controls_OSPLog(level, C$.getOSPLog$());
}}, 1);

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level$org_opensourcephysics_controls_OSPLog',  function (level, ospLog) {
try {
ospLog.getLogger$().setLevel$java_util_logging_Level(level);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if ((ospLog == null ) || (ospLog.menubarGroup == null ) ) {
return;
}for (var i=0; i < 2; i++) {
var e=ospLog.menubarGroup.getElements$();
if (i == 1) {
e=ospLog.popupGroup.getElements$();
}while (e.hasMoreElements$()){
var item=e.nextElement$();
if (ospLog.getLogger$().getLevel$().toString().equals$O(item.getActionCommand$())) {
item.setSelected$Z(true);
break;
}}
}
}, 1);

Clazz.newMeth(C$, 'parseLevel$S',  function (level) {
for (var i=0; i < C$.levels.length; i++) {
if (C$.levels[i].getName$().equals$O(level)) {
return C$.levels[i];
}}
return null;
}, 1);

Clazz.newMeth(C$, 'severe$S',  function (msg) {
if (C$.useMessageFrame$()) {
$I$(12).severe$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).SEVERE, msg);
}}, 1);

Clazz.newMeth(C$, 'warning$S',  function (msg) {
if (C$.useMessageFrame$()) {
$I$(12).warning$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).WARNING, msg);
}}, 1);

Clazz.newMeth(C$, 'info$S',  function (msg) {
if (C$.useMessageFrame$()) {
$I$(12).info$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).INFO, msg);
}}, 1);

Clazz.newMeth(C$, 'config$S',  function (msg) {
if (C$.useMessageFrame$()) {
$I$(12).config$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).CONFIG, msg);
}}, 1);

Clazz.newMeth(C$, 'fine$S',  function (msg) {
if (C$.useMessageFrame$()) {
$I$(12).fine$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).FINE, msg);
}}, 1);

Clazz.newMeth(C$, 'clearLog$',  function () {
C$.messageIndex=0;
if (C$.useMessageFrame$()) {
$I$(12).clear$();
} else {
C$.OSPLOG.clear$();
}}, 1);

Clazz.newMeth(C$, 'finer$S',  function (msg) {
System.gc$();
System.out.println$S("OSPLog.finer " + msg);
if (C$.useMessageFrame$()) {
$I$(12).finer$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).FINER, msg);
}}, 1);

Clazz.newMeth(C$, 'finest$S',  function (msg) {
if (C$.useMessageFrame$()) {
$I$(12).finest$S(msg);
} else {
C$.log$java_util_logging_Level$S($I$(9).FINEST, msg);
}}, 1);

Clazz.newMeth(C$, 'setConsoleMessagesLogged$Z',  function (log) {
C$.logConsole=log;
}, 1);

Clazz.newMeth(C$, 'isConsoleMessagesLogged$',  function () {
return C$.logConsole;
}, 1);

Clazz.newMeth(C$, 'c$$Package',  function (pkg) {
C$.c$$S$S.apply(this, [pkg.getName$(), null]);
}, 1);

Clazz.newMeth(C$, 'c$$Package$S',  function (pkg, resourceBundleName) {
C$.c$$S$S.apply(this, [pkg.getName$(), resourceBundleName]);
}, 1);

Clazz.newMeth(C$, 'c$$Class',  function (type) {
C$.c$$Class$S.apply(this, [type, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Class$S',  function (type, resourceBundleName) {
C$.c$$S$S.apply(this, [type.getPackage$().getName$(), resourceBundleName]);
}, 1);

Clazz.newMeth(C$, 'getLogPanel$',  function () {
this.createGUI$();
return this.logPanel;
});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.logPane != null ) this.logPane.setText$S(null);
this.logBuffer.setLength$I(0);
});

Clazz.newMeth(C$, 'saveLog$S',  function (fileName) {
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return this.saveLogAs$();
}try {
var out=Clazz.new_([Clazz.new_($I$(18,1).c$$S,[fileName])],$I$(17,1).c$$java_io_Writer);
out.write$S(p$2.getText.apply(this, []));
out.flush$();
out.close$();
return fileName;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getText',  function () {
return this.logPane == null  ? this.logBuffer.toString() : this.logPane.getText$();
}, p$2);

Clazz.newMeth(C$, 'saveLogAs$',  function () {
var result=C$.getChooser$().showSaveDialog$java_awt_Component(null);
if (result == 0) {
var file=C$.getChooser$().getSelectedFile$();
if (file.exists$()) {
var selected=$I$(19,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(20).getString$S("OSPLog.ReplaceExisting_dialog_message") + file.getName$() + $I$(20).getString$S("OSPLog.question_mark") , $I$(20).getString$S("OSPLog.ReplaceFile_dialog_title"), 1]);
if (selected != 0) {
return null;
}}var fileName=$I$(21,"getRelativePath$S",[file.getAbsolutePath$()]);
return this.saveLog$S(fileName);
}return null;
});

Clazz.newMeth(C$, 'saveXML$S',  function (fileName) {
if (C$.useMessageFrame$()) {
this.logger.log$java_util_logging_Level$S($I$(9).FINE, "Cannot save XML file when running as an applet.");
return null;
}if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return this.saveXMLAs$();
}var xml=this.read$S(this.tempFileName);
var fileHandler=this.getFileHandler$();
var tail=fileHandler.getFormatter$().getTail$java_util_logging_Handler(fileHandler);
xml=xml + tail;
try {
var out=Clazz.new_([Clazz.new_($I$(18,1).c$$S,[fileName])],$I$(17,1).c$$java_io_Writer);
out.write$S(xml);
out.flush$();
out.close$();
return fileName;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'saveXMLAs$',  function () {
var result=C$.getChooser$().showSaveDialog$java_awt_Component(null);
if (result == 0) {
var file=C$.getChooser$().getSelectedFile$();
if (file.exists$()) {
var selected=$I$(19,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(20).getString$S("OSPLog.ReplaceExisting_dialog_message") + file.getName$() + $I$(20).getString$S("OSPLog.question_mark") , $I$(20).getString$S("OSPLog.ReplaceFile_dialog_title"), 1]);
if (selected != 0) {
return null;
}}this.logFileName=$I$(21,"getRelativePath$S",[file.getAbsolutePath$()]);
return this.saveXML$S(this.logFileName);
}return null;
});

Clazz.newMeth(C$, 'open$',  function () {
$I$(8).getChooser$().showOpenDialog$java_awt_Component$Runnable$Runnable(null, ((P$.OSPLog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=$I$(8).getChooser$().getSelectedFile$();
var fileName=$I$(21,"getRelativePath$S",[file.getAbsolutePath$()]);
fileName=$I$(21).getRelativePath$S(fileName);
this.b$['org.opensourcephysics.controls.OSPLog'].open$S.apply(this.b$['org.opensourcephysics.controls.OSPLog'], [fileName]);
});
})()
), Clazz.new_(P$.OSPLog$2.$init$,[this, null])), null);
});

Clazz.newMeth(C$, 'open$S',  function (fileName) {
var data=this.read$S(fileName);
this.logBuffer.setLength$I(0);
this.logBuffer.append$S(data);
if (this.logPane != null ) {
this.logPane.setText$S(data);
}});

Clazz.newMeth(C$, 'getLogger$',  function () {
return this.logger;
});

Clazz.newMeth(C$, 'setLogToFileAction$Z',  function (enable) {
if (C$.useMessageFrame$()) {
this.logger.log$java_util_logging_Level$S($I$(9).FINE, "Cannot log to file when running as an applet.");
return;
}if (enable && this.fileHandler == null  ) {
this.logToFileItem.setSelected$Z(true);
this.logger.addHandler$java_util_logging_Handler(this.getFileHandler$());
} else if (this.fileHandler != null ) {
this.logToFileItem.setSelected$Z(false);
this.logger.removeHandler$java_util_logging_Handler(this.fileHandler);
this.fileHandler.close$();
this.fileHandler=null;
this.logger.log$java_util_logging_Level$S($I$(9).INFO, this.tempFileName + " closed");
}});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
this.frame.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
});

Clazz.newMeth(C$, 'createGUI$',  function () {
if (this.logPanel != null  || this.frame == null  ) return;
this.logPanel=Clazz.new_([Clazz.new_($I$(23,1))],$I$(22,1).c$$java_awt_LayoutManager);
this.logPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(24,1).c$$I$I,[480, 240]));
this.frame.setContentPane$java_awt_Container(this.logPanel);
this.createMenus$();
this.frame.setDefaultCloseOperation$I(1);
});

Clazz.newMeth(C$, 'getTextPane',  function () {
var textPane=$I$(25).newJTextPane$();
textPane.setEditable$Z(false);
textPane.setAutoscrolls$Z(true);
var textScroller=Clazz.new_($I$(26,1).c$$java_awt_Component,[textPane]);
textScroller.setWheelScrollingEnabled$Z(true);
this.logPanel.add$java_awt_Component$O(textScroller, "Center");
C$.black=$I$(27).getDefaultStyleContext$().getStyle$S("default");
C$.red=textPane.addStyle$S$javax_swing_text_Style("red", C$.black);
$I$(28).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(C$.red, C$.DARK_RED);
C$.blue=textPane.addStyle$S$javax_swing_text_Style("blue", C$.black);
$I$(28).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(C$.blue, C$.DARK_BLUE);
C$.green=textPane.addStyle$S$javax_swing_text_Style("green", C$.black);
$I$(28).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(C$.green, C$.DARK_GREEN);
C$.magenta=textPane.addStyle$S$javax_swing_text_Style("magenta", C$.black);
$I$(28,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[C$.magenta, Clazz.new_($I$(10,1).c$$I$I$I,[155, 0, 155])]);
C$.gray=textPane.addStyle$S$javax_swing_text_Style("gray", C$.black);
$I$(28,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[C$.gray, $I$(10).GRAY]);
textPane.addMouseListener$java_awt_event_MouseListener(((P$.OSPLog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
try {
if ($I$(8).isPopupTrigger$java_awt_event_InputEvent(e)) {
if (this.b$['org.opensourcephysics.controls.OSPLog'].popup != null ) {
$I$(1).setFonts$java_awt_Container(this.b$['org.opensourcephysics.controls.OSPLog'].popup);
this.b$['org.opensourcephysics.controls.OSPLog'].popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.controls.OSPLog'].logPane, e.getX$(), e.getY$() + 8);
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Error in mouse action.");
System.err.println$S(ex.toString());
ex.printStackTrace$();
} else {
throw ex;
}
}
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.OSPLog$3)));
return textPane;
}, p$2);

Clazz.newMeth(C$, 'createLogger$',  function () {
if (this.bundleName != null ) {
try {
this.logger=$I$(30).getLogger$S$S(this.pkgName, this.bundleName);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.logger=$I$(30).getLogger$S(this.pkgName);
} else {
throw ex;
}
}
} else {
this.logger=$I$(30).getLogger$S(this.pkgName);
}try {
this.logger.setLevel$java_util_logging_Level(C$.defaultLevel);
this.logHandler=Clazz.new_($I$(31,1).c$$javax_swing_JTextPane$org_opensourcephysics_controls_OSPLog,[this, null, null, this]);
this.logHandler.setFormatter$java_util_logging_Formatter(Clazz.new_($I$(32,1),[this, null]));
this.logHandler.setLevel$java_util_logging_Level($I$(9).ALL);
Clazz.getClass($I$(8)).getClass$();
this.logger.setUseParentHandlers$Z(false);
this.logger.addHandler$java_util_logging_Handler(this.logHandler);
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
this.hasPermission=false;
} else {
throw ex;
}
}
return this.logger;
});

Clazz.newMeth(C$, 'getFileHandler$',  function () {
if (this.fileHandler != null ) {
return this.fileHandler;
}try {
var i=this.pkgName.lastIndexOf$S(".");
if (i > -1) {
this.pkgName=this.pkgName.substring$I(i + 1);
}if (C$.logdir.endsWith$S(C$.slash)) {
this.tempFileName=C$.logdir + this.pkgName + ".log" ;
} else {
this.tempFileName=C$.logdir + C$.slash + this.pkgName + ".log" ;
}this.fileHandler=Clazz.new_($I$(33,1).c$$S,[this.tempFileName]);
this.fileHandler.setFormatter$java_util_logging_Formatter(Clazz.new_($I$(34,1)));
this.fileHandler.setLevel$java_util_logging_Level($I$(9).ALL);
this.logger.addHandler$java_util_logging_Handler(this.fileHandler);
this.logger.log$java_util_logging_Level$S($I$(9).INFO, "Logging to file enabled. File = " + this.tempFileName);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return this.fileHandler;
});

Clazz.newMeth(C$, 'createMenus$',  function () {
if (!this.hasPermission || this.frame == null  ) {
return;
}this.popup=Clazz.new_($I$(35,1));
var menu=Clazz.new_([$I$(20).getString$S("OSPLog.Level_menu")],$I$(36,1).c$$S);
this.popup.add$javax_swing_JMenuItem(menu);
this.popupGroup=Clazz.new_($I$(37,1));
for (var i=0; i < C$.levels.length; i++) {
var item=Clazz.new_([C$.levels[i].getName$()],$I$(38,1).c$$S);
menu.add$java_awt_Component$I(item, 0);
this.popupGroup.add$javax_swing_AbstractButton(item);
if (this.logger.getLevel$().toString().equals$O(C$.levels[i].toString())) {
item.setSelected$Z(true);
}item.setActionCommand$S(C$.levels[i].getName$());
item.addActionListener$java_awt_event_ActionListener(((P$.OSPLog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.OSPLog'].logger.setLevel$java_util_logging_Level($I$(9,"parse$S",[e.getActionCommand$()]));
var e2=this.b$['org.opensourcephysics.controls.OSPLog'].menubarGroup.getElements$();
while (e2.hasMoreElements$()){
var item=e2.nextElement$();
if (this.b$['org.opensourcephysics.controls.OSPLog'].logger.getLevel$().toString().equals$O(item.getActionCommand$())) {
item.setSelected$Z(true);
break;
}}
});
})()
), Clazz.new_(P$.OSPLog$4.$init$,[this, null])));
}
this.popup.addSeparator$();
var openAction=((P$.OSPLog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.OSPLog'].open$.apply(this.b$['org.opensourcephysics.controls.OSPLog'], []);
});
})()
), Clazz.new_([this, null, $I$(20).getString$S("OSPLog.Open_popup")],$I$(39,1).c$$S,P$.OSPLog$5));
openAction.setEnabled$Z(!C$.useMessageFrame$());
this.popup.add$javax_swing_Action(openAction);
var saveAsAction=((P$.OSPLog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.OSPLog'].saveLogAs$.apply(this.b$['org.opensourcephysics.controls.OSPLog'], []);
});
})()
), Clazz.new_([this, null, $I$(20).getString$S("OSPLog.SaveAs_popup")],$I$(39,1).c$$S,P$.OSPLog$6));
saveAsAction.setEnabled$Z(!C$.useMessageFrame$());
this.popup.add$javax_swing_Action(saveAsAction);
this.popup.addSeparator$();
var clearAction=((P$.OSPLog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.OSPLog'].clear$.apply(this.b$['org.opensourcephysics.controls.OSPLog'], []);
});
})()
), Clazz.new_([this, null, $I$(20).getString$S("OSPLog.Clear_popup")],$I$(39,1).c$$S,P$.OSPLog$7));
this.popup.add$javax_swing_Action(clearAction);
var menubar=Clazz.new_($I$(40,1));
this.frame.setJMenuBar$javax_swing_JMenuBar(menubar);
menu=Clazz.new_([$I$(20).getString$S("OSPLog.File_menu")],$I$(36,1).c$$S);
menubar.add$javax_swing_JMenu(menu);
menu.add$javax_swing_Action(openAction);
menu.add$javax_swing_Action(saveAsAction);
menu=Clazz.new_([$I$(20).getString$S("OSPLog.Edit_menu")],$I$(36,1).c$$S);
menubar.add$javax_swing_JMenu(menu);
menu.add$javax_swing_Action(clearAction);
menu=Clazz.new_([$I$(20).getString$S("OSPLog.Level_menu")],$I$(36,1).c$$S);
menubar.add$javax_swing_JMenu(menu);
this.menubarGroup=Clazz.new_($I$(37,1));
for (var i=0; i < C$.levels.length; i++) {
var item=Clazz.new_([C$.levels[i].getName$()],$I$(38,1).c$$S);
menu.add$java_awt_Component$I(item, 0);
this.menubarGroup.add$javax_swing_AbstractButton(item);
if (this.logger.getLevel$().toString().equals$O(C$.levels[i].toString())) {
item.setSelected$Z(true);
}item.setActionCommand$S(C$.levels[i].getName$());
item.addActionListener$java_awt_event_ActionListener(((P$.OSPLog$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.OSPLog'].logger.setLevel$java_util_logging_Level($I$(9,"parse$S",[e.getActionCommand$()]));
var e2=this.b$['org.opensourcephysics.controls.OSPLog'].popupGroup.getElements$();
while (e2.hasMoreElements$()){
var item=e2.nextElement$();
if (this.b$['org.opensourcephysics.controls.OSPLog'].logger.getLevel$().toString().equals$O(item.getActionCommand$())) {
item.setSelected$Z(true);
break;
}}
});
})()
), Clazz.new_(P$.OSPLog$8.$init$,[this, null])));
}
var prefMenu=Clazz.new_([$I$(20).getString$S("OSPLog.Options_menu")],$I$(36,1).c$$S);
menubar.add$javax_swing_JMenu(prefMenu);
this.logToFileItem=Clazz.new_([$I$(20).getString$S("OSPLog.LogToFile_check_box")],$I$(41,1).c$$S);
this.logToFileItem.setSelected$Z(false);
this.logToFileItem.setEnabled$Z(!C$.useMessageFrame$());
this.logToFileItem.addActionListener$java_awt_event_ActionListener(((P$.OSPLog$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPLog$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.OSPLog'].setLogToFileAction$Z.apply(this.b$['org.opensourcephysics.controls.OSPLog'], [(e.getSource$()).isSelected$()]);
});
})()
), Clazz.new_(P$.OSPLog$9.$init$,[this, null])));
prefMenu.add$javax_swing_JMenuItem(this.logToFileItem);
});

Clazz.newMeth(C$, 'getChooser$',  function () {
if (C$.chooser == null ) {
C$.chooser=Clazz.new_([Clazz.new_([$I$(8).chooserDir],$I$(43,1).c$$S)],$I$(42,1).c$$java_io_File);
}$I$(1).setFonts$java_awt_Container(C$.chooser);
return C$.chooser;
}, 1);

Clazz.newMeth(C$, 'read$S',  function (fileName) {
var file=Clazz.new_($I$(43,1).c$$S,[fileName]);
var buffer=null;
try {
var $in=Clazz.new_([Clazz.new_($I$(45,1).c$$java_io_File,[file])],$I$(44,1).c$$java_io_Reader);
buffer=Clazz.new_($I$(3,1));
var line=$in.readLine$();
while (line != null ){
buffer.append$S(line + $I$(21).NEW_LINE);
line=$in.readLine$();
}
$in.close$();
return buffer.toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
this.logger.warning$S(ex.toString());
return "";
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'c$$S$S',  function (name, resourceBundleName) {
;C$.$init$.apply(this);
if (C$.useFrame) {
this.frame=Clazz.new_([this, null, $I$(20).getString$S("OSPLog.DefaultTitle")],$I$(46,1).c$$S);
this.frame.setName$S("LogTool");
}this.bundleName=resourceBundleName;
this.pkgName=name;
Clazz.getClass($I$(2)).getName$();
this.createLogger$();
var loggerOut=Clazz.new_([this, null, $I$(2).OUT_CONSOLE, System.out],$I$(47,1).c$$org_opensourcephysics_controls_ConsoleLevel$java_io_OutputStream);
var loggerErr=Clazz.new_([this, null, $I$(2).ERR_CONSOLE, System.err],$I$(47,1).c$$org_opensourcephysics_controls_ConsoleLevel$java_io_OutputStream);
var loggerOutPrint=Clazz.new_($I$(48,1).c$$org_opensourcephysics_controls_OSPLog_LoggerOutputStream$Z,[loggerOut, false]);
var loggerErrPrint=Clazz.new_($I$(48,1).c$$org_opensourcephysics_controls_OSPLog_LoggerOutputStream$Z,[loggerErr, true]);
try {
if (false) {
System.err.println$S("OSPLog installed in System.out and System.err");
System.setOut$java_io_PrintStream(loggerOutPrint);
System.setErr$java_io_PrintStream(loggerErrPrint);
} else {
System.err.println$S("OSPLog divertSysOut = false -- bypassing OSPLog.setOut");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
C$.setLevel$java_util_logging_Level$org_opensourcephysics_controls_OSPLog(C$.defaultLevel, this);
}, 1);

Clazz.newMeth(C$, 'log$java_util_logging_Level$S',  function (level, msg) {
if ($I$(8).dontLog) return;
var record=Clazz.new_($I$(7,1).c$$java_util_logging_Level$S,[level, msg]);
var className=null;
var methodName=null;
if ($I$(8).isJS) {
$I$(8).showStatus$S("OSPLog[" + level + "] " + msg );
try {

var o = arguments.callee.caller.caller; methodName = o && o.exName; className = o && o.exClazz && o.exClazz.__CLASS_NAME__;
} catch (t) {
}
} else {
var stack=(Clazz.new_(Throwable)).getStackTrace$();
for (var i=0; i < stack.length; i++) {
var el=stack[i];
className=el.getClassName$();
if (!className.equals$O("org.opensourcephysics.controls.OSPLog")) {
methodName=el.getMethodName$();
break;
}}
}if (methodName != null ) {
record.setSourceClassName$S(className);
record.setSourceMethodName$S(methodName);
}if (C$.OSPLOG != null ) {
C$.OSPLOG.getLogger$().log$java_util_logging_LogRecord(record);
} else {
C$.messageStorage[C$.messageIndex++]=record;
C$.messageIndex=C$.messageIndex % C$.messageStorage.length;
}}, 1);

Clazz.newMeth(C$, 'debug$S',  function (msg) {
C$.realSysout.println$S("OSPLog.debug " + msg);
}, 1);

Clazz.newMeth(C$, 'setFonts$I',  function (level) {
var log=C$.getOSPLog$();
$I$(1).setFonts$java_awt_Container(log.frame);
}, 1);

Clazz.newMeth(C$, 'finalized$O',  function (c) {
C$.notify$O$S(c, "finalized");
}, 1);

Clazz.newMeth(C$, 'notify$O$S',  function (c, msg) {
if (false) C$.finer$S((Clazz.instanceOf(c, "java.lang.String") ? c : c.getClass$().getSimpleName$()) + " " + msg );
}, 1);

Clazz.newMeth(C$, 'getFrame$',  function () {
return C$.getOSPLog$().frame;
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (propertyChangeListener) {
if (C$.getFrame$() != null ) C$.getFrame$().addPropertyChangeListener$java_beans_PropertyChangeListener(propertyChangeListener);
}, 1);

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (propertyChangeListener) {
if (C$.getFrame$() != null ) C$.getFrame$().removePropertyChangeListener$java_beans_PropertyChangeListener(propertyChangeListener);
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (name, propertyChangeListener) {
if (C$.getFrame$() != null ) C$.getFrame$().addPropertyChangeListener$S$java_beans_PropertyChangeListener(name, propertyChangeListener);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.realSysout=System.out;
C$.DARK_GREEN=Clazz.new_($I$(10,1).c$$I$I$I,[0, 128, 0]);
C$.DARK_BLUE=Clazz.new_($I$(10,1).c$$I$I$I,[0, 0, 128]);
C$.DARK_RED=Clazz.new_($I$(10,1).c$$I$I$I,[128, 0, 0]);
C$.levels=Clazz.array($I$(9), -1, [$I$(9).OFF, $I$(9).SEVERE, $I$(9).WARNING, $I$(9).INFO, $I$(2).ERR_CONSOLE, $I$(2).OUT_CONSOLE, $I$(9).CONFIG, $I$(9).FINE, $I$(9).FINER, $I$(9).FINEST, $I$(9).ALL]);
C$.defaultLevel=$I$(2).OUT_CONSOLE;
C$.logConsole=true;
C$.messageStorage=Clazz.array($I$(7), [128]);
C$.messageIndex=0;
C$.eol="\n";
C$.logdir=".";
C$.slash="/";
C$.useFrame=true;
{
try {
C$.eol=System.getProperty$S$S("line.separator", C$.eol);
C$.logdir=System.getProperty$S$S("user.dir", C$.logdir);
C$.slash=System.getProperty$S$S("file.separator", "/");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPLog, "OSPFrame", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (string) {
;C$.superclazz.c$$S.apply(this,[string]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
C$.superclazz.prototype.firePropertyChange$S$O$O.apply(this, [propertyName, oldValue, newValue]);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
$I$(1,"setFonts$O$I",[this, $I$(1).getLevel$()]);
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPLog, "LoggerPrintStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.PrintStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isErr']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_OSPLog_LoggerOutputStream$Z',  function (out, isErr) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
this.isErr=isErr;
}, 1);

Clazz.newMeth(C$, 'println$S',  function (msg) {
(this.out).println$S(msg);
});

Clazz.newMeth(C$, 'print$S',  function (msg) {
(this.out).print$S(msg);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPLog, "ConsoleFormatter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.logging.SimpleFormatter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'format$java_util_logging_LogRecord',  function (record) {
var message=this.formatMessage$java_util_logging_LogRecord(record);
if ((record.getLevel$().intValue$() == $I$(2).OUT_CONSOLE.intValue$()) || (record.getLevel$().intValue$() == $I$(2).ERR_CONSOLE.intValue$()) ) {
var sb=Clazz.new_($I$(3,1));
if ((message.length$() > 0) && (message.charAt$I(0) == "\t") ) {
message=message.replaceFirst$S$S("\t", "    ");
} else {
sb.append$S("CONSOLE: ");
}sb.append$S(message);
sb.append$S($I$(4).eol);
if (record.getThrown$() != null ) {
try {
var sw=Clazz.new_($I$(5,1));
var pw=Clazz.new_($I$(6,1).c$$java_io_Writer,[sw]);
record.getThrown$().printStackTrace$java_io_PrintWriter(pw);
pw.close$();
sb.append$S(sw.toString());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return sb.toString();
}return C$.superclazz.prototype.format$java_util_logging_LogRecord.apply(this, [record]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPLog, "LoggerOutputStream", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['buffer','StringBuffer','level','org.opensourcephysics.controls.ConsoleLevel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_ConsoleLevel$java_io_OutputStream',  function (level, oldStream) {
Clazz.super_(C$, this);
this.level=level;
}, 1);

Clazz.newMeth(C$, 'print$S',  function (msg) {
this.buffer.append$S(msg);
});

Clazz.newMeth(C$, 'println$S',  function (msg) {
this.buffer.append$S(msg);
p$1.logMsg.apply(this, []);
});

Clazz.newMeth(C$, 'write$I',  function (c) {
if (c == 10 ) {
p$1.logMsg.apply(this, []);
} else {
this.buffer.append$C(String.fromCharCode(c));
}});

Clazz.newMeth(C$, 'logMsg',  function () {
var record=Clazz.new_([this.level, this.buffer.toString()],$I$(7,1).c$$java_util_logging_Level$S);
$I$(4).getOSPLog$().getLogger$().log$java_util_logging_LogRecord(record);
this.buffer=Clazz.new_($I$(3,1));
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPLog, "OSPLogHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.logging.Handler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ospLog','org.opensourcephysics.controls.OSPLog']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTextPane$org_opensourcephysics_controls_OSPLog',  function (textPane, log) {
Clazz.super_(C$, this);
this.b$['org.opensourcephysics.controls.OSPLog'].logPane=textPane;
this.ospLog=log;
}, 1);

Clazz.newMeth(C$, 'setTextPane$javax_swing_JTextPane',  function (textPane) {
this.b$['org.opensourcephysics.controls.OSPLog'].logPane=textPane;
});

Clazz.newMeth(C$, 'publish$java_util_logging_LogRecord',  function (record) {
if (!this.isLoggable$java_util_logging_LogRecord(record)) {
return;
}if (this.b$['org.opensourcephysics.controls.OSPLog'].logPane == null ) {
this.b$['org.opensourcephysics.controls.OSPLog'].logRecords.add$O(record);
return;
}var msg=this.getFormatter$().format$java_util_logging_LogRecord(record);
var style=$I$(4).green;
var val=record.getLevel$().intValue$();
if (val == $I$(2).ERR_CONSOLE.intValue$()) {
if (msg.indexOf$S("OutOfMemory") > -1) this.ospLog.firePropertyChange$S$O$O("error", null, $I$(8).OUT_OF_MEMORY_ERROR);
if (!$I$(4).logConsole) return;
style=$I$(4).magenta;
} else if (val == $I$(2).OUT_CONSOLE.intValue$()) {
if (msg.indexOf$S("ERROR org.ffmpeg") > -1) this.ospLog.firePropertyChange$S$O$O("ffmpeg_error", null, msg);
 else if (msg.indexOf$S("JNILibraryLoader") > -1) {
this.ospLog.firePropertyChange$S$O$O("xuggle_error", null, msg);
}if (!$I$(4).logConsole) return;
style=$I$(4).gray;
} else if (val >= $I$(9).WARNING.intValue$()) {
style=$I$(4).red;
} else if (val >= $I$(9).INFO.intValue$()) {
style=$I$(4).black;
} else if (val >= $I$(9).CONFIG.intValue$()) {
style=$I$(4).green;
} else if (val >= $I$(9).FINEST.intValue$()) {
style=$I$(4).blue;
}try {
var doc=this.b$['org.opensourcephysics.controls.OSPLog'].logPane.getDocument$();
doc.insertString$I$S$javax_swing_text_AttributeSet(doc.getLength$(), msg + '\n', style);
var rect=this.b$['org.opensourcephysics.controls.OSPLog'].logPane.getBounds$();
rect.y=rect.height;
this.b$['org.opensourcephysics.controls.OSPLog'].logPane.scrollRectToVisible$java_awt_Rectangle(rect);
} catch (ex) {
if (Clazz.exceptionOf(ex,"javax.swing.text.BadLocationException")){
System.err.println$O(ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
