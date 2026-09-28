(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader','java.util.HashSet','javax.swing.JOptionPane','java.io.FileWriter','org.opensourcephysics.display.OSPRuntime','java.io.FileReader','java.io.LineNumberReader','java.io.File','javax.swing.JTextArea','java.awt.Dimension','javax.swing.border.EmptyBorder','java.util.ArrayList','java.util.Collections','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JCheckBox','javax.swing.JTextField','java.util.Vector','Runtime','Thread','javax.swing.DefaultListModel','javax.swing.JList','javax.swing.JScrollPane','javax.swing.JDialog','java.awt.event.MouseAdapter','javax.swing.JButton','org.opensourcephysics.display.DisplayRes','java.awt.FlowLayout','javax.swing.JSeparator','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EjsTool");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['res','org.opensourcephysics.tools.ResourceLoader.Bundle']]]

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
C$.res=$I$(1).getBundle$S$java_util_Locale(null, locale);
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (key) {
try {
return C$.res.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return '!' + key + '!' ;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'hasEjsModel$Class',  function (_ejsClass) {
try {
var c=Clazz.array(Class, -1, []);
var getModelMethod=_ejsClass.getMethod$S$ClassA("_getEjsModel", c);
return getModelMethod != null ;
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
return false;
} else {
throw _exc;
}
}
}, 1);

Clazz.newMeth(C$, 'getEjsAppletDimension$Class',  function (_ejsClass) {
try {
var c=Clazz.array(Class, -1, []);
var getDimensionMethod=_ejsClass.getMethod$S$ClassA("_getEjsAppletDimension", c);
if (getDimensionMethod == null ) {
return null;
}var o=Clazz.array(java.lang.Object, -1, []);
return getDimensionMethod.invoke$O$OA(null, o);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
return null;
} else {
throw _exc;
}
}
}, 1);

Clazz.newMeth(C$, 'runEjs$Class',  function (_ejsClass) {
return C$.runEjs$Class$S(_ejsClass, null);
}, 1);

Clazz.newMeth(C$, 'runEjs$Class$S',  function (_ejsClass, _password) {
try {
var c=Clazz.array(Class, -1, []);
var getModelMethod=_ejsClass.getMethod$S$ClassA("_getEjsModel", c);
var getResourcesMethod=_ejsClass.getMethod$S$ClassA("_getEjsResources", c);
var o=Clazz.array(java.lang.Object, -1, []);
var model=getModelMethod.invoke$O$OA(null, o);
var list;
if (getResourcesMethod != null ) {
list=getResourcesMethod.invoke$O$OA(null, o);
} else {
list=Clazz.new_($I$(2,1));
}return C$.doRunEjs$S$java_util_Set$Class$S(model, list, _ejsClass, _password);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
_exc.printStackTrace$();
var message=Clazz.array(String, -1, [C$.res.getString$S("EjsTool.EjsNotRunning"), C$.res.getString$S("EjsTool.NoModel") + " " + _ejsClass.getName$() ]);
$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("EjsTool.Error"), 2]);
return false;
} else {
throw _exc;
}
}
}, 1);

Clazz.newMeth(C$, 'saveInformation$S$S',  function (_home, _release) {
try {
var filename=System.getProperty$S("user.home").replace$C$C("\\", "/");
if (!filename.endsWith$S("/")) {
filename=filename + "/";
}filename=filename + ".Ejs.txt";
var dir=System.getProperty$S("user.dir");
var fout=Clazz.new_($I$(4,1).c$$S,[filename]);
fout.write$S("directory = " + dir + "\n" );
fout.write$S("home = " + _home + "\n" );
fout.write$S("version = " + _release + "\n" );
fout.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'saveInformation$S$S$S',  function (_binDirectoryPath, _sourceDirectoryPath, _release) {
try {
var filename=System.getProperty$S("user.home").replace$C$C("\\", "/");
if (!filename.endsWith$S("/")) {
filename=filename + "/";
}var fout=Clazz.new_($I$(4,1).c$$S,[filename + ".Ejs.txt"]);
fout.write$S("ejs_root_directory = " + _binDirectoryPath + "\n" );
fout.write$S("source_directory = " + _sourceDirectoryPath + "\n" );
fout.write$S("version = " + _release + "\n" );
fout.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'getPath$java_io_File',  function (_file) {
var path;
try {
path=_file.getCanonicalPath$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
path=_file.getAbsolutePath$();
} else {
throw exc;
}
}
if ($I$(5).isWindows$()) {
path=path.replace$C$C("\\", "/");
var a=path.indexOf$I(":");
if (a > 0) {
path=path.substring$I$I(0, a).toUpperCase$() + path.substring$I(a);
}}if (_file.isDirectory$() && !path.endsWith$S("/") ) {
path=path + "/";
}return path;
}, 1);

Clazz.newMeth(C$, 'doRunEjs$S$java_util_Set$Class$S',  function (_model, _resources, _ejsClass, _password) {
var ejsRootDirPath=null;
var sourceDirPath=null;
var version=null;
var ejsRootDirectory=null;
var parentComponent=null;
try {
var filename=System.getProperty$S("user.home").replace$C$C("\\", "/");
if (!filename.endsWith$S("/")) {
filename=filename + "/";
}var reader=Clazz.new_($I$(6,1).c$$S,[filename + ".Ejs.txt"]);
var l=Clazz.new_($I$(7,1).c$$java_io_Reader,[reader]);
var sl=l.readLine$();
while (sl != null ){
if (sl.startsWith$S("ejs_root_directory = ")) {
ejsRootDirPath=sl.substring$I("ejs_root_directory = ".length$()).trim$();
} else if (sl.startsWith$S("source_directory = ")) {
sourceDirPath=sl.substring$I("source_directory = ".length$()).trim$();
} else if (sl.startsWith$S("version = ")) {
version=sl.substring$I("version = ".length$()).trim$();
}sl=l.readLine$();
}
reader.close$();
var major=3;
if (version != null ) {
var index=version.indexOf$I(".");
if (index >= 0) {
major=Integer.parseInt$S(version.substring$I$I(0, index));
}}if (major < 4) {
$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[parentComponent, version + " " + C$.res.getString$S("EjsTool.IncorrectVersion") , C$.res.getString$S("EjsTool.Error"), 0]);
return false;
}ejsRootDirectory=Clazz.new_($I$(8,1).c$$S,[ejsRootDirPath]);
if (!Clazz.new_($I$(8,1).c$$java_io_File$S,[ejsRootDirectory, "EjsConsole.jar"]).exists$()) {
ejsRootDirectory=null;
}} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
ejsRootDirectory=null;
} else {
throw exc;
}
}
if (ejsRootDirectory == null ) {
var chooser=$I$(5,"createChooser$S$SA",["", Clazz.array(String, -1, [])]);
chooser.setDialogTitle$S(C$.res.getString$S("EjsTool.EjsNotFound"));
chooser.setFileSelectionMode$I(1);
chooser.setMultiSelectionEnabled$Z(false);
var textArea=Clazz.new_([C$.res.getString$S("EjsTool.IndicateRootDir")],$I$(9,1).c$$S);
textArea.setWrapStyleWord$Z(true);
textArea.setLineWrap$Z(true);
textArea.setEditable$Z(false);
textArea.setFont$java_awt_Font(textArea.getFont$().deriveFont$I(1));
textArea.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[150, 60]));
textArea.setBackground$java_awt_Color(chooser.getBackground$());
textArea.setBorder$javax_swing_border_Border(Clazz.new_($I$(11,1).c$$I$I$I$I,[5, 10, 0, 0]));
chooser.setAccessory$javax_swing_JComponent(textArea);
while (ejsRootDirectory == null ){
if (chooser.showOpenDialog$java_awt_Component(null) != 0) {
return false;
}ejsRootDirectory=chooser.getSelectedFile$();
if (ejsRootDirectory == null ) {
return false;
}if (!Clazz.new_($I$(8,1).c$$java_io_File$S,[ejsRootDirectory, "EjsConsole.jar"]).exists$()) {
ejsRootDirectory=null;
}}
}var sourceDir=Clazz.new_($I$(8,1).c$$S,[sourceDirPath]);
if (!sourceDir.exists$()) {
sourceDir.mkdirs$();
}var extractList=Clazz.new_($I$(12,1));
var modelPath=_model;
var modelPathLength=0;
var index=modelPath.lastIndexOf$I("/");
if (index >= 0) {
_model="./" + modelPath.substring$I(index + 1);
modelPath=modelPath.substring$I$I(0, index + 1);
modelPathLength=modelPath.length$();
}if (!_resources.contains$O(_model)) {
_resources.add$O(_model);
}if (modelPathLength > 0) {
for (var res, $res = _resources.iterator$(); $res.hasNext$()&&((res=($res.next$())),1);) {
extractList.add$O(res.startsWith$S(modelPath) ? "./" + res.substring$I(modelPathLength) : res);
}
} else {
extractList.addAll$java_util_Collection(_resources);
}$I$(13).sort$java_util_List(extractList);
var auxPanel=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
var originalPathBox=Clazz.new_([C$.res.getString$S("EjsTool.KeepOriginalPath"), false],$I$(16,1).c$$S$Z);
var originalPathField=Clazz.new_($I$(17,1).c$$S,[modelPath]);
originalPathField.setEditable$Z(false);
var originalPathPanel=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
originalPathPanel.add$java_awt_Component$O(originalPathBox, "West");
originalPathPanel.add$java_awt_Component$O(originalPathField, "Center");
var quitCheckBox=null;
if (!$I$(5).appletMode) {
quitCheckBox=Clazz.new_([C$.res.getString$S("EjsTool.QuitSimulation"), true],$I$(16,1).c$$S$Z);
auxPanel.add$java_awt_Component$O(quitCheckBox, "North");
}auxPanel.add$java_awt_Component$O(originalPathPanel, "Center");
var finalList=C$.ejsConfirmList$java_awt_Component$java_awt_Dimension$S$S$java_util_List$javax_swing_JComponent(parentComponent, Clazz.new_($I$(10,1).c$$I$I,[400, 400]), C$.res.getString$S("EjsTool.ExtractingFiles"), C$.res.getString$S("EjsTool.Message"), extractList, auxPanel);
if (finalList == null ) {
return false;
}var destinationDirectory=null;
var relativeDir="";
if (originalPathBox.isSelected$()) {
destinationDirectory=Clazz.new_($I$(8,1).c$$java_io_File$S,[sourceDir, modelPath]);
relativeDir=modelPath;
} else {
var chooser=$I$(5,"createChooser$S$SA",["", Clazz.array(String, -1, [])]);
chooser.setDialogTitle$S(C$.res.getString$S("EjsTool.ChooseDestinationDirectory"));
chooser.setFileSelectionMode$I(1);
chooser.setMultiSelectionEnabled$Z(false);
chooser.setCurrentDirectory$java_io_File(sourceDir);
sourceDirPath=C$.getPath$java_io_File(sourceDir);
while (destinationDirectory == null ){
if (chooser.showOpenDialog$java_awt_Component(null) != 0) {
return false;
}destinationDirectory=chooser.getSelectedFile$();
if (destinationDirectory == null ) {
return false;
}var destDirPath=C$.getPath$java_io_File(destinationDirectory);
if (!destDirPath.startsWith$S(sourceDirPath)) {
$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[parentComponent, C$.res.getString$S("EjsTool.MustBeUnderSource"), C$.res.getString$S("EjsTool.Error"), 0]);
destinationDirectory=null;
} else {
relativeDir=destDirPath.substring$I(sourceDirPath.length$());
}}
}var err=$I$(1).extractFiles$S$java_io_File$java_util_List$java_io_File(modelPath, sourceDir, finalList, destinationDirectory);
if (err != null ) {
var message=Clazz.array(String, -1, [C$.res.getString$S("JarTool.FileNotExtracted"), err + " " + C$.res.getString$S("JarTool.FileNotExtractedFrom") + " " + _ejsClass.toString() ]);
$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("JarTool.Error"), 2]);
return false;
}var theModel=relativeDir + (_model.startsWith$S("./") ? _model.substring$I(2) : _model);
var theDir=ejsRootDirectory;
var runner=((P$.EjsTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var cmd=Clazz.new_($I$(18,1));
var javaHome=System.getProperty$S("java.home");
if (javaHome != null ) {
cmd.add$O(javaHome + $I$(8).separator + "bin" + $I$(8).separator + "java" );
} else {
cmd.add$O("java");
}cmd.add$O("-jar");
cmd.add$O("EjsConsole.jar");
if (this.$finals$._password != null  && this.$finals$._password.length$() > 0 ) {
cmd.add$O("-launcher.password");
cmd.add$O("\"" + this.$finals$._password + "\"" );
}cmd.add$O("-file");
cmd.add$O(this.$finals$.theModel);
var cmdarray=cmd.toArray$OA(Clazz.array(String, [0]));
var proc=$I$(19).getRuntime$().exec$SA$SA$java_io_File(cmdarray, null, this.$finals$.theDir);
proc.waitFor$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
});
})()
), Clazz.new_(P$.EjsTool$1.$init$,[this, {theDir:theDir,_password:_password,theModel:theModel}]));
if ($I$(5).isJS) {
System.err.println$S("Warning:  EJSTool not supported in JavaScript.");
} else {
var thread=Clazz.new_($I$(20,1).c$$Runnable,[runner]);
thread.setPriority$I(5);
thread.start$();
}return quitCheckBox == null  ? false : quitCheckBox.isSelected$();
}, 1);

Clazz.newMeth(C$, 'ejsConfirmList$java_awt_Component$java_awt_Dimension$S$S$java_util_List',  function (_target, _size, _message, _title, _list) {
return C$.ejsConfirmList$java_awt_Component$java_awt_Dimension$S$S$java_util_List$javax_swing_JComponent(_target, _size, _message, _title, _list, null);
}, 1);

Clazz.newMeth(C$, 'ejsConfirmList$java_awt_Component$java_awt_Dimension$S$S$java_util_List$javax_swing_JComponent',  function (_target, _size, _message, _title, _list, _bottomComponent) {
var returnValue=Clazz.new_(P$.EjsTool$1ReturnValue.$init$,[this, null]);
var listModel=Clazz.new_($I$(21,1));
for (var i=0, n=_list.size$(); i < n; i++) {
listModel.addElement$O(_list.get$I(i));
}
var list=Clazz.new_($I$(22,1).c$$javax_swing_ListModel,[listModel]);
list.setEnabled$Z(true);
list.setSelectionMode$I(2);
list.setSelectionInterval$I$I(0, listModel.getSize$() - 1);
var scrollPane=Clazz.new_($I$(23,1).c$$java_awt_Component,[list]);
scrollPane.setPreferredSize$java_awt_Dimension(_size);
var dialog=Clazz.new_($I$(24,1));
var mouseListener=((P$.EjsTool$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsTool$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var button=(evt.getSource$());
var aCmd=button.getActionCommand$();
if (aCmd.equals$O("ok")) {
this.$finals$.returnValue.value=true;
this.$finals$.dialog.setVisible$Z(false);
} else if (aCmd.equals$O("cancel")) {
this.$finals$.returnValue.value=false;
this.$finals$.dialog.setVisible$Z(false);
} else if (aCmd.equals$O("selectall")) {
this.$finals$.list.setSelectionInterval$I$I(0, this.$finals$.listModel.getSize$() - 1);
} else if (aCmd.equals$O("selectnone")) {
this.$finals$.list.removeSelectionInterval$I$I(0, this.$finals$.listModel.getSize$() - 1);
}});
})()
), Clazz.new_($I$(25,1),[this, {dialog:dialog,returnValue:returnValue,listModel:listModel,list:list}],P$.EjsTool$2));
var okButton=Clazz.new_([$I$(27).getString$S("GUIUtils.Ok")],$I$(26,1).c$$S);
okButton.setActionCommand$S("ok");
okButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var cancelButton=Clazz.new_([$I$(27).getString$S("GUIUtils.Cancel")],$I$(26,1).c$$S);
cancelButton.setActionCommand$S("cancel");
cancelButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var excludeButton=Clazz.new_([$I$(27).getString$S("GUIUtils.SelectAll")],$I$(26,1).c$$S);
excludeButton.setActionCommand$S("selectall");
excludeButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var includeButton=Clazz.new_([$I$(27).getString$S("GUIUtils.SelectNone")],$I$(26,1).c$$S);
includeButton.setActionCommand$S("selectnone");
includeButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var buttonPanel=Clazz.new_([Clazz.new_($I$(28,1).c$$I,[1])],$I$(14,1).c$$java_awt_LayoutManager);
buttonPanel.add$java_awt_Component(okButton);
buttonPanel.add$java_awt_Component(excludeButton);
buttonPanel.add$java_awt_Component(includeButton);
buttonPanel.add$java_awt_Component(cancelButton);
var topPanel=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
var textArea=Clazz.new_($I$(9,1).c$$S,[_message]);
textArea.setWrapStyleWord$Z(true);
textArea.setLineWrap$Z(true);
textArea.setEditable$Z(false);
textArea.setFont$java_awt_Font(textArea.getFont$().deriveFont$I(1));
textArea.setBackground$java_awt_Color(topPanel.getBackground$());
textArea.setBorder$javax_swing_border_Border(Clazz.new_($I$(11,1).c$$I$I$I$I,[5, 5, 10, 5]));
topPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(11,1).c$$I$I$I$I,[5, 10, 5, 10]));
topPanel.add$java_awt_Component$O(textArea, "North");
topPanel.add$java_awt_Component$O(scrollPane, "Center");
if (_bottomComponent != null ) {
topPanel.add$java_awt_Component$O(_bottomComponent, "South");
}var sep1=Clazz.new_($I$(29,1).c$$I,[0]);
var southPanel=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
southPanel.add$java_awt_Component$O(sep1, "North");
southPanel.add$java_awt_Component$O(buttonPanel, "South");
dialog.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(15,1).c$$I$I,[5, 0]));
dialog.getContentPane$().add$java_awt_Component$O(topPanel, "Center");
dialog.getContentPane$().add$java_awt_Component$O(southPanel, "South");
dialog.addWindowListener$java_awt_event_WindowListener(((P$.EjsTool$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "EjsTool$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (event) {
this.$finals$.returnValue.value=false;
});
})()
), Clazz.new_($I$(30,1),[this, {returnValue:returnValue}],P$.EjsTool$3)));
dialog.validate$();
dialog.pack$();
dialog.setTitle$S(_title);
dialog.setLocationRelativeTo$java_awt_Component(_target);
dialog.setModal$Z(true);
dialog.setVisible$Z(true);
if (!returnValue.value) {
return null;
}var selection=list.getSelectedValues$();
var newList=Clazz.new_($I$(12,1));
for (var i=0, n=selection.length; i < n; i++) {
newList.add$O(selection[i]);
}
return newList;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.setLocale$java_util_Locale(null);
};
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "EjsTool$1ReturnValue", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, null, 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.value=false;
},1);

C$.$fields$=[['Z',['value']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
