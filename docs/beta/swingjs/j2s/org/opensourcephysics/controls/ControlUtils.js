(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.numerics.Util','org.opensourcephysics.display.TextFrame','StringBuffer','javax.swing.JFileChooser','java.io.File','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.FontSizer','java.io.BufferedReader','java.io.FileReader','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','java.io.FileWriter','java.io.PrintWriter','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XMLControlElement','javax.swing.filechooser.FileFilter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['format2','java.text.DecimalFormat','+format3','+format4','+format_E2','+format_E3','+format_E4','chooser','javax.swing.JFileChooser','sysPropFrame','org.opensourcephysics.display.TextFrame']]]

Clazz.newMeth(C$, 'f2$D',  function (d) {
return C$.format2.format$D(d);
}, 1);

Clazz.newMeth(C$, 'f3$D',  function (d) {
return C$.format3.format$D(d);
}, 1);

Clazz.newMeth(C$, 'e2$D',  function (d) {
return C$.format_E2.format$D(d);
}, 1);

Clazz.newMeth(C$, 'e3$D',  function (d) {
return C$.format_E3.format$D(d);
}, 1);

Clazz.newMeth(C$, 'e4$D',  function (d) {
return C$.format_E4.format$D(d);
}, 1);

Clazz.newMeth(C$, 'f4$D',  function (d) {
return C$.format4.format$D(d);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'showSystemProperties$Z',  function (vis) {
if (C$.sysPropFrame == null ) {
C$.sysPropFrame=Clazz.new_($I$(2,1).c$$S$Class,[null, null]);
C$.sysPropFrame.getTextPane$().setText$S(C$.getSystemProperties$());
C$.sysPropFrame.setSize$I$I(300, 400);
}C$.sysPropFrame.setVisible$Z(vis);
return C$.sysPropFrame;
}, 1);

Clazz.newMeth(C$, 'getSystemProperties$',  function () {
var buffer=Clazz.new_($I$(3,1));
try {
var sysProps=System.getProperties$();
var i=0;
var names=sysProps.propertyNames$();
while (names.hasMoreElements$()){
var key=names.nextElement$();
++i;
buffer.append$S(i + ". " + key + " = " + sysProps.getProperty$S(key) + "\n" );
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var key=Clazz.array(String, -1, ["java.version", "java.vendor", "java.class.version", "os.name", "os.arch", "os.version", "file.separator", "path.separator", "line.separator"]);
for (var i=0; i < key.length; i++) {
buffer.append$S(i + ". " + key[i] + " = " + System.getProperty$S(key[i]) + "\n" );
}
} else {
throw e;
}
}
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'loadParameters$org_opensourcephysics_controls_Control$java_awt_Component',  function (control, parent) {
var chooser=Clazz.new_([Clazz.new_([$I$(6).chooserDir],$I$(5,1).c$$S)],$I$(4,1).c$$java_io_File);
$I$(7,"setFonts$O$I",[chooser, $I$(7).getLevel$()]);
var result=chooser.showOpenDialog$java_awt_Component(parent);
if (result == 0) {
try {
var inFile=Clazz.new_([Clazz.new_([chooser.getSelectedFile$()],$I$(9,1).c$$java_io_File)],$I$(8,1).c$$java_io_Reader);
C$.readFile$org_opensourcephysics_controls_Control$java_io_BufferedReader(control, inFile);
inFile.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S(ex.getMessage$());
} else {
throw ex;
}
}
}}, 1);

Clazz.newMeth(C$, 'saveToFile$O$java_awt_Component',  function (object, parent) {
var fileChooser=Clazz.new_([Clazz.new_([$I$(6).chooserDir],$I$(5,1).c$$S)],$I$(4,1).c$$java_io_File);
$I$(7,"setFonts$O$I",[C$.chooser, $I$(7).getLevel$()]);
var result=fileChooser.showSaveDialog$java_awt_Component(parent);
if (result != 0) {
return;
}var file=fileChooser.getSelectedFile$();
if (file.exists$()) {
var selected=$I$(10,"showConfirmDialog$java_awt_Component$O$S$I",[parent, $I$(11).getString$S("OSPLog.ReplaceExisting_dialog_message") + " " + file.getName$() + $I$(11).getString$S("OSPLog.question_mark") , $I$(11).getString$S("OSPLog.ReplaceFile_dialog_title"), 1]);
if (selected != 0) {
return;
}}try {
var fw=Clazz.new_($I$(12,1).c$$java_io_File,[file]);
var pw=Clazz.new_($I$(13,1).c$$java_io_Writer,[fw]);
pw.print$S(object.toString());
pw.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(10,"showMessageDialog$java_awt_Component$O$S$I",[parent, $I$(11).getString$S("Dialog.SaveError.Message"), $I$(11).getString$S("Dialog.SaveError.Title"), 0]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'saveXML$O',  function (obj) {
var result=C$.getXMLFileChooser$().showSaveDialog$java_awt_Component(null);
if (result == 0) {
var file=C$.chooser.getSelectedFile$();
if (file.exists$()) {
var selected=$I$(10,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(11).getString$S("OSPLog.ReplaceExisting_dialog_message") + " " + file.getName$() + $I$(11).getString$S("OSPLog.question_mark") , $I$(11).getString$S("OSPLog.ReplaceFile_dialog_title"), 1]);
if (selected != 0) {
return;
}}var fileName=$I$(14,"getRelativePath$S",[file.getAbsolutePath$()]);
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(".xml");
if (i != fileName.length$() - 4) {
fileName+=".xml";
}var xml=Clazz.new_($I$(15,1).c$$O,[obj]);
xml.write$S(fileName);
}}, 1);

Clazz.newMeth(C$, 'getXMLFileChooser$',  function () {
if (C$.chooser != null ) {
$I$(7,"setFonts$O$I",[C$.chooser, $I$(7).getLevel$()]);
return C$.chooser;
}C$.chooser=Clazz.new_([Clazz.new_([$I$(6).chooserDir],$I$(5,1).c$$S)],$I$(4,1).c$$java_io_File);
var filter=((P$.ControlUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) {
return false;
}if (f.isDirectory$()) {
return true;
}var extension=null;
var name=f.getName$();
var i=name.lastIndexOf$I(".");
if ((i > 0) && (i < name.length$() - 1) ) {
extension=name.substring$I(i + 1).toLowerCase$();
}if ((extension != null ) && (extension.equals$O("xml") || extension.equals$O("osp") ) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return "XML files";
});
})()
), Clazz.new_($I$(16,1),[this, null],P$.ControlUtils$1));
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(filter);
$I$(7,"setFonts$O$I",[C$.chooser, $I$(7).getLevel$()]);
return C$.chooser;
}, 1);

Clazz.newMeth(C$, 'readFile$org_opensourcephysics_controls_Control$java_io_BufferedReader',  function (control, inFile) {
var nextLine=inFile.readLine$();
while (nextLine != null ){
var par=C$.parseParameter$S(nextLine);
if ((par != null ) && !par.equals$O("") ) {
control.setValue$S$O(par, C$.parseValue$S(nextLine));
}nextLine=inFile.readLine$();
}
}, 1);

Clazz.newMeth(C$, 'parseParameter$S',  function (aLine) {
var index=aLine.indexOf$I("=");
if (index < 1) {
return null;
}return aLine.substring$I$I(0, index).trim$();
}, 1);

Clazz.newMeth(C$, 'parseValue$S',  function (aLine) {
var index=aLine.indexOf$I("=");
if (index >= aLine.length$() - 1) {
return "";
}return aLine.substring$I(index + 1).trim$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.format2=$I$(1).newDecimalFormat$S("#0.00");
C$.format3=$I$(1).newDecimalFormat$S("#0.000");
C$.format4=$I$(1).newDecimalFormat$S("#0.0000");
C$.format_E2=$I$(1).newDecimalFormat$S("0.00E0");
C$.format_E3=$I$(1).newDecimalFormat$S("0.000E0");
C$.format_E4=$I$(1).newDecimalFormat$S("0.0000E0");
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
