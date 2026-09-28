(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.awt.BorderLayout','java.awt.Insets','javax.swing.JPanel','javax.swing.BoxLayout','java.awt.Dimension','javax.swing.JLabel','javax.swing.Box','javax.swing.JProgressBar','java.awt.Toolkit','java.awt.Cursor','org.opensourcephysics.tools.ResourceLoader','java.util.HashMap','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.Toolbox',['org.opensourcephysics.tools.JarTool','.OverwriteValue'],'java.io.File','org.opensourcephysics.controls.XML','javax.swing.JOptionPane','org.opensourcephysics.display.DisplayRes','Thread','java.text.SimpleDateFormat','java.util.Calendar','StringBuffer','java.io.ByteArrayInputStream','java.util.jar.Manifest','java.util.zip.ZipInputStream','java.io.FileInputStream','java.util.zip.ZipFile','java.io.FileOutputStream','java.util.jar.JarOutputStream','java.util.zip.ZipOutputStream','java.util.jar.JarEntry','java.util.zip.ZipEntry','java.util.ArrayList','javax.swing.filechooser.FileSystemView','java.util.HashSet','javax.swing.JDialog','java.awt.event.MouseAdapter','javax.swing.JButton','java.awt.FlowLayout','javax.swing.border.EmptyBorder','java.awt.event.WindowAdapter','java.io.BufferedInputStream',['org.opensourcephysics.tools.JarTool','.ProgressDialog']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarTool", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.opensourcephysics.tools.Tool', 'Runnable']);
C$.$classes$=[['OverwriteValue',10],['ProgressDialog',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['instanceSources','java.util.ArrayList','instanceParent','java.io.File','+instanceTarget','instanceManifest','java.util.jar.Manifest','instancePolicy','org.opensourcephysics.tools.JarTool.OverwriteValue','instanceOwnerFrame','java.awt.Frame']]
,['I',['overwritePolicy'],'O',['res','org.opensourcephysics.tools.ResourceLoader.Bundle','instance','org.opensourcephysics.tools.JarTool','chooser','javax.swing.JFileChooser','ownerFrame','java.awt.Frame','jarContents','java.util.Map']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var name="JarTool";
C$.chooser=$I$(13,"createChooser$S$SA",["JAR, ZIP", Clazz.array(String, -1, ["zip", "jar", "trz"])]);
$I$(14).addTool$S$org_opensourcephysics_tools_Tool(name, this);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
C$.compressList$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest$org_opensourcephysics_tools_JarTool_OverwriteValue$java_awt_Frame(this.instanceSources, this.instanceParent, this.instanceTarget, this.instanceManifest, this.instancePolicy, this.instanceOwnerFrame);
});

Clazz.newMeth(C$, 'c$$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest$org_opensourcephysics_tools_JarTool_OverwriteValue$java_awt_Frame',  function (aSources, aParent, aTarget, aManifest, aPolicy, _anOwner) {
C$.c$.apply(this, []);
this.instanceSources=aSources;
this.instanceParent=aParent;
this.instanceTarget=aTarget;
this.instanceManifest=aManifest;
this.instancePolicy=aPolicy;
this.instanceOwnerFrame=_anOwner;
}, 1);

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
});

Clazz.newMeth(C$, 'disableWarning$',  function () {
C$.alwaysOverwrite$();
}, 1);

Clazz.newMeth(C$, 'neverOverwrite$',  function () {
C$.overwritePolicy=3;
}, 1);

Clazz.newMeth(C$, 'alwaysOverwrite$',  function () {
C$.overwritePolicy=2;
}, 1);

Clazz.newMeth(C$, 'setOwnerFrame$java_awt_Frame',  function (owner) {
C$.ownerFrame=owner;
}, 1);

Clazz.newMeth(C$, 'create$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest',  function (sources, parent, target, manifest) {
var policy=Clazz.new_($I$(15,1).c$$I,[C$.overwritePolicy]);
C$.overwritePolicy=1;
if (sources.size$() <= 0) {
return null;
}try {
var warnBeforeOverwritting=true;
if (target != null ) {
C$.chooser.setCurrentDirectory$java_io_File(target.getParentFile$());
C$.chooser.setSelectedFile$java_io_File(target);
} else {
C$.chooser.setSelectedFile$java_io_File(Clazz.new_($I$(16,1).c$$S,["default.jar"]));
}var targetName=$I$(13).chooseFilename$javax_swing_JFileChooser(C$.chooser);
if (targetName == null ) {
return null;
}if (!(targetName.toLowerCase$().endsWith$S(".jar") || targetName.toLowerCase$().endsWith$S(".trz") || targetName.toLowerCase$().endsWith$S(".zip")  )) {
targetName=targetName + ".jar";
} else {
warnBeforeOverwritting=false;
}target=Clazz.new_($I$(16,1).c$$S,[targetName]);
if ($I$(17,"forwardSlash$S",[target.getAbsolutePath$()]).equals$O($I$(13).getLaunchJarPath$())) {
var message=Clazz.array(String, -1, [C$.res.getString$S("JarTool.JarNotCreated"), C$.res.getString$S("JarTool.FileIsForbidden") + " " + target ]);
$I$(18,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("JarTool.Error"), 2]);
return this.create$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest(sources, parent, target, manifest);
}if (warnBeforeOverwritting && target.exists$() ) {
var selected=$I$(18,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(19).getString$S("DrawingFrame.ReplaceExisting_message") + " " + target.getName$() + $I$(19).getString$S("DrawingFrame.QuestionMark") , $I$(19).getString$S("DrawingFrame.ReplaceFile_option_title"), 1]);
if (selected != 0) {
return null;
}}if ($I$(13).isJS) {
System.err.println$S("Warning:  JarTool not supported in JavaScript.");
} else {
var builder=Clazz.new_(C$.c$$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest$org_opensourcephysics_tools_JarTool_OverwriteValue$java_awt_Frame,[sources, parent, target, manifest, policy, C$.ownerFrame]);
var thread=Clazz.new_($I$(20,1).c$$Runnable,[builder]);
thread.setPriority$I(5);
thread.start$();
}return target;
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
exception.printStackTrace$();
return null;
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'createManifest$S$S',  function (classpath, mainclass) {
var sdf=Clazz.new_($I$(21,1).c$$S,["dd MMM yyyy"]);
var cal=$I$(22).getInstance$();
var date=sdf.format$java_util_Date(cal.getTime$());
try {
var manifestStr=Clazz.new_($I$(23,1));
manifestStr.append$S("Manifest-Version: 1.0\n");
manifestStr.append$S("Built-By: Open Source Physics JarTool\n");
manifestStr.append$S("Build-Date: " + date + "\n" );
if (classpath != null ) {
classpath=classpath.replace$C$C(";", " ");
classpath=classpath.replace$C$C(",", " ");
classpath=classpath.replace$C$C(":", " ");
manifestStr.append$S("Class-Path: " + classpath + "\n" );
}if (mainclass != null ) {
manifestStr.append$S("Main-Class: " + mainclass + "\n" );
}manifestStr.append$S("\n");
var mis=Clazz.new_([manifestStr.toString().getBytes$S("UTF-8")],$I$(24,1).c$$BA);
return (Clazz.new_($I$(25,1).c$$java_io_InputStream,[mis]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'extract$java_io_File$S$S',  function (source, filename, destination) {
return C$.extract0$java_io_File$S$java_io_File(source, filename, Clazz.new_($I$(16,1).c$$S,[destination]));
}, 1);

Clazz.newMeth(C$, 'extract0$java_io_File$S$java_io_File',  function (source, filename, target) {
if ((source.exists$() == false ) || (filename == null ) || (filename.trim$().length$() < 1) || (target == null )  ) {
return null;
}var isDirectory=filename.endsWith$S("/");
try {
var contents=C$.jarContents.get$O(source.getPath$());
if (contents == null ) {
contents=Clazz.new_($I$(12,1));
C$.jarContents.put$O$O(source.getPath$(), contents);
$I$(13).addJSCachedBytes$O(source);
var input=Clazz.new_([Clazz.new_($I$(27,1).c$$java_io_File,[source])],$I$(26,1).c$$java_io_InputStream);
var zipEntry=null;
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$()) {
continue;
}contents.put$O$O(zipEntry.getName$(), zipEntry);
}
input.close$();
}if (isDirectory) {
var it=contents.keySet$().iterator$();
while (it.hasNext$()){
var next=it.next$();
if (next.startsWith$S(filename)) {
var zipEntry=contents.get$O(next);
var n=filename.length$();
var newTarget=Clazz.new_([target, zipEntry.getName$().substring$I(n)],$I$(16,1).c$$java_io_File$S);
C$.extract0$java_io_File$S$java_io_File(source, next, newTarget);
}}
return target;
}var entry=contents.get$O(filename);
var input=Clazz.new_($I$(28,1).c$$java_io_File,[source]);
var $in=input.getInputStream$java_util_zip_ZipEntry(entry);
var parent=target.getParentFile$();
if (parent != null ) {
parent.mkdirs$();
}var bytesRead;
var buffer=Clazz.array(Byte.TYPE, [1024]);
var output=Clazz.new_($I$(29,1).c$$java_io_File,[target]);
while ((bytesRead=$in.read$BA(buffer)) != -1){
output.write$BA$I$I(buffer, 0, bytesRead);
}
output.close$();
input.close$();
return target;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'copy$java_io_File$java_io_File',  function (source, target) {
try {
if (!source.exists$()) {
return false;
}target.getParentFile$().mkdirs$();
var input=Clazz.new_($I$(27,1).c$$java_io_File,[source]);
var output=Clazz.new_($I$(29,1).c$$java_io_File,[target]);
var buf=Clazz.array(Byte.TYPE, [1024]);
var len;
while ((len=input.read$BA(buf)) > 0){
output.write$BA$I$I(buf, 0, len);
}
input.close$();
output.close$();
return true;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return false;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'compress$java_io_File$java_io_File$java_util_jar_Manifest',  function (source, target, manifest) {
try {
if (!(!!(source.exists$() & source.isDirectory$()))) {
return false;
}if (target.exists$()) {
target.delete$();
}var output=null;
var isJar=target.getName$().toLowerCase$().endsWith$S(".jar");
if (isJar) {
var manifestDir=Clazz.new_($I$(16,1).c$$java_io_File$S,[source, "META-INF"]);
C$.remove$java_io_File(manifestDir);
if (manifest != null ) {
output=Clazz.new_([Clazz.new_($I$(29,1).c$$java_io_File,[target]), manifest],$I$(30,1).c$$java_io_OutputStream$java_util_jar_Manifest);
} else {
output=Clazz.new_([Clazz.new_($I$(29,1).c$$java_io_File,[target])],$I$(30,1).c$$java_io_OutputStream);
}} else {
output=Clazz.new_([Clazz.new_($I$(29,1).c$$java_io_File,[target])],$I$(31,1).c$$java_io_OutputStream);
}var list=C$.getContents$java_io_File(source);
var baseDir=source.getAbsolutePath$().replace$C$C("\\", "/");
if (!baseDir.endsWith$S("/")) {
baseDir=baseDir + "/";
}var baseDirLength=baseDir.length$();
var buffer=Clazz.array(Byte.TYPE, [1024]);
var bytesRead;
for (var file, $file = list.iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
var f_in=Clazz.new_($I$(27,1).c$$java_io_File,[file]);
var filename=file.getAbsolutePath$().replace$C$C("\\", "/");
if (filename.startsWith$S(baseDir)) {
filename=filename.substring$I(baseDirLength);
}if (isJar) {
output.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(32,1).c$$S,[filename]));
} else {
output.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(33,1).c$$S,[filename]));
}while ((bytesRead=f_in.read$BA(buffer)) != -1){
output.write$BA$I$I(buffer, 0, bytesRead);
}
f_in.close$();
output.closeEntry$();
}
output.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return false;
} else {
throw exc;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'compress$java_util_ArrayList$java_io_File$java_util_jar_Manifest',  function (sources, target, manifest) {
if ((sources == null ) || (sources.size$() == 0) ) {
return false;
}var output=null;
try {
if (!$I$(13).isJS && target.exists$() ) {
target.delete$();
}var isJar=target.getName$().toLowerCase$().endsWith$S(".jar");
if (isJar) {
if (manifest != null ) {
output=Clazz.new_([Clazz.new_($I$(29,1).c$$java_io_File,[target]), manifest],$I$(30,1).c$$java_io_OutputStream$java_util_jar_Manifest);
} else {
output=Clazz.new_([Clazz.new_($I$(29,1).c$$java_io_File,[target])],$I$(30,1).c$$java_io_OutputStream);
}} else {
output=Clazz.new_([Clazz.new_($I$(29,1).c$$java_io_File,[target])],$I$(31,1).c$$java_io_OutputStream);
}var baseDir=sources.get$I(0).getParentFile$().getAbsolutePath$().replace$C$C("\\", "/");
if (!baseDir.endsWith$S("/")) {
baseDir=baseDir + "/";
}var baseDirLength=baseDir.length$();
var list=Clazz.new_($I$(34,1));
for (var it=sources.iterator$(); it.hasNext$(); ) {
var fileOrDir=it.next$();
if (isJar && (manifest != null ) && fileOrDir.getName$().equals$O("META-INF")  ) {
continue;
}if (fileOrDir.isDirectory$()) {
list.addAll$java_util_Collection(C$.getContents$java_io_File(fileOrDir));
} else {
list.add$O(fileOrDir);
}}
var buffer=Clazz.array(Byte.TYPE, [1024]);
var bytesRead;
for (var i=0, n=list.size$(); i < n; i++) {
var file=list.get$I(i);
var f_in=Clazz.new_($I$(27,1).c$$java_io_File,[file]);
var filename=file.getAbsolutePath$().replace$C$C("\\", "/");
if (filename.startsWith$S(baseDir)) {
filename=filename.substring$I(baseDirLength);
}if (isJar) {
output.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(32,1).c$$S,[filename]));
} else {
output.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(33,1).c$$S,[filename]));
}while ((bytesRead=f_in.read$BA(buffer)) != -1){
output.write$BA$I$I(buffer, 0, bytesRead);
}
f_in.close$();
output.closeEntry$();
}
return true;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return false;
} else {
throw exc;
}
} finally {
if (output != null ) {
try {
output.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}, 1);

Clazz.newMeth(C$, 'remove$java_io_File',  function (directory) {
if (directory.exists$() && directory.isDirectory$() ) {
return C$.recursiveClearDirectory$java_io_File$javax_swing_filechooser_FileSystemView(directory, $I$(35).getFileSystemView$());
}return false;
}, 1);

Clazz.newMeth(C$, 'getContents$java_io_File',  function (directory) {
if (directory.exists$() && directory.isDirectory$() ) {
return C$.recursiveGetDirectory$java_io_File$javax_swing_filechooser_FileSystemView(directory, $I$(35).getFileSystemView$());
}return Clazz.new_($I$(36,1));
}, 1);

Clazz.newMeth(C$, 'unzip$java_io_File$java_io_File',  function (source, targetDirectory) {
return C$.unzipWithWarning$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue(source, targetDirectory, Clazz.new_($I$(15,1).c$$I,[2]));
}, 1);

Clazz.newMeth(C$, 'unzipNoOverwrite$java_io_File$java_io_File',  function (source, targetDirectory) {
return C$.unzipWithWarning$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue(source, targetDirectory, Clazz.new_($I$(15,1).c$$I,[3]));
}, 1);

Clazz.newMeth(C$, 'unzipWithAWarning$java_io_File$java_io_File',  function (source, targetDirectory) {
return C$.unzipWithWarning$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue(source, targetDirectory, Clazz.new_($I$(15,1).c$$I,[1]));
}, 1);

Clazz.newMeth(C$, 'confirmOverwrite$S',  function (filename) {
return C$.confirmOverwrite$S$Z(filename, false);
}, 1);

Clazz.newMeth(C$, 'confirmOverwrite$S$Z',  function (filename, canCancel) {
var dialog=Clazz.new_($I$(37,1));
var returnValue=Clazz.new_($I$(15,1).c$$I,[1]);
var mouseListener=((P$.JarTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var button=(evt.getSource$());
var aCmd=button.getActionCommand$();
if (aCmd.equals$O("yes")) {
this.$finals$.returnValue.value=0;
} else if (aCmd.equals$O("no")) {
this.$finals$.returnValue.value=1;
} else if (aCmd.equals$O("yesToAll")) {
this.$finals$.returnValue.value=2;
} else if (aCmd.equals$O("noToAll")) {
this.$finals$.returnValue.value=3;
} else if (aCmd.equals$O("cancel")) {
this.$finals$.returnValue.value=4;
}this.$finals$.dialog.setVisible$Z(false);
});
})()
), Clazz.new_($I$(38,1),[this, {dialog:dialog,returnValue:returnValue}],P$.JarTool$1));
var yesButton=Clazz.new_([C$.res.getString$S("JarTool.Yes")],$I$(39,1).c$$S);
yesButton.setActionCommand$S("yes");
yesButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var noButton=Clazz.new_([C$.res.getString$S("JarTool.No")],$I$(39,1).c$$S);
noButton.setActionCommand$S("no");
noButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var yesToAllButton=Clazz.new_([C$.res.getString$S("JarTool.YesToAll")],$I$(39,1).c$$S);
yesToAllButton.setActionCommand$S("yesToAll");
yesToAllButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var noToAllButton=Clazz.new_([C$.res.getString$S("JarTool.NoToAll")],$I$(39,1).c$$S);
noToAllButton.setActionCommand$S("noToAll");
noToAllButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var cancelButton=Clazz.new_([C$.res.getString$S("JarTreeDialog.Button.Cancel")],$I$(39,1).c$$S);
cancelButton.setActionCommand$S("cancel");
cancelButton.addMouseListener$java_awt_event_MouseListener(mouseListener);
var buttonPanel=Clazz.new_([Clazz.new_($I$(40,1).c$$I,[1])],$I$(3,1).c$$java_awt_LayoutManager);
buttonPanel.add$java_awt_Component(yesButton);
buttonPanel.add$java_awt_Component(yesToAllButton);
buttonPanel.add$java_awt_Component(noButton);
buttonPanel.add$java_awt_Component(noToAllButton);
if (canCancel) buttonPanel.add$java_awt_Component(cancelButton);
var label=Clazz.new_([$I$(19).getString$S("DrawingFrame.ReplaceExisting_message") + " " + filename + $I$(19).getString$S("DrawingFrame.QuestionMark") ],$I$(6,1).c$$S);
label.setHorizontalAlignment$I(0);
label.setBorder$javax_swing_border_Border(Clazz.new_($I$(41,1).c$$I$I$I$I,[10, 10, 10, 10]));
dialog.setTitle$S($I$(19).getString$S("DrawingFrame.ReplaceFile_option_title"));
dialog.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1).c$$I$I,[5, 0]));
dialog.getContentPane$().add$java_awt_Component$O(label, "Center");
dialog.getContentPane$().add$java_awt_Component$O(buttonPanel, "South");
dialog.addWindowListener$java_awt_event_WindowListener(((P$.JarTool$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarTool$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (event) {
this.$finals$.returnValue.value=1;
});
})()
), Clazz.new_($I$(42,1),[this, {returnValue:returnValue}],P$.JarTool$2)));
dialog.validate$();
dialog.pack$();
dialog.setLocationRelativeTo$java_awt_Component(null);
dialog.setModal$Z(true);
dialog.setVisible$Z(true);
return returnValue.value;
}, 1);

Clazz.newMeth(C$, 'unzipWithWarning$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue',  function (source, targetDirectory, policy) {
try {
if (!source.exists$()) {
return false;
}var input=Clazz.new_([Clazz.new_($I$(27,1).c$$java_io_File,[source])],$I$(26,1).c$$java_io_InputStream);
var zipEntry=null;
var buffer=Clazz.array(Byte.TYPE, [1024]);
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$()) {
continue;
}var newFile=Clazz.new_([targetDirectory, zipEntry.getName$()],$I$(16,1).c$$java_io_File$S);
if (newFile.exists$()) {
switch (policy.value) {
case 3:
continue;
case 2:
break;
default:
switch (policy.value=C$.confirmOverwrite$S(zipEntry.getName$())) {
case 3:
case 1:
continue;
default:
}
}
}newFile.getParentFile$().mkdirs$();
var bytesRead;
var output=Clazz.new_($I$(29,1).c$$java_io_File,[newFile]);
while ((bytesRead=input.read$BA(buffer)) != -1){
output.write$BA$I$I(buffer, 0, bytesRead);
}
output.close$();
input.closeEntry$();
}
input.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return false;
} else {
throw exc;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'unzipWithWarning$java_io_InputStream$java_io_File$javax_swing_JLabel$S',  function (zipStream, targetDirectory, label, prefix) {
try {
var policy=Clazz.new_($I$(15,1).c$$I,[1]);
var bufIn=Clazz.new_($I$(43,1).c$$java_io_InputStream,[zipStream]);
var input=Clazz.new_($I$(26,1).c$$java_io_InputStream,[bufIn]);
var zipEntry=null;
var fileSet=Clazz.new_($I$(34,1));
var buffer=Clazz.array(Byte.TYPE, [1024]);
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$()) continue;
if (label != null ) label.setText$S(prefix + zipEntry.getName$());
var newFile=Clazz.new_([targetDirectory, zipEntry.getName$()],$I$(16,1).c$$java_io_File$S);
if (newFile.exists$()) {
switch (policy.value) {
case 3:
continue;
case 2:
break;
default:
switch (policy.value=C$.confirmOverwrite$S$Z(zipEntry.getName$(), true)) {
case 3:
case 1:
continue;
case 4:
return null;
default:
}
}
}newFile.getParentFile$().mkdirs$();
var bytesRead;
var output=Clazz.new_($I$(29,1).c$$java_io_File,[newFile]);
while ((bytesRead=input.read$BA(buffer)) != -1){
output.write$BA$I$I(buffer, 0, bytesRead);
}
output.close$();
input.closeEntry$();
fileSet.add$O(newFile);
}
input.close$();
return fileSet;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'compressList$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest$org_opensourcephysics_tools_JarTool_OverwriteValue$java_awt_Frame',  function (sources, parent, target, manifest, policy, owner) {
var temporaryDirectory=null;
try {
temporaryDirectory=$I$(16,"createTempFile$S$S$java_io_File",["JarTool", ".tmp", target.getParentFile$()]);
temporaryDirectory.delete$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
temporaryDirectory=null;
} else {
throw exc;
}
}
if ((temporaryDirectory == null ) || !temporaryDirectory.mkdirs$() ) {
var message=Clazz.array(String, -1, [C$.res.getString$S("JarTool.JarNotCreated"), C$.res.getString$S("JarTool.CantCreateTemp")]);
$I$(18,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("JarTool.Error"), 2]);
return null;
}var errorMessage=Clazz.new_($I$(23,1));
var steps=sources.size$();
var interval=1;
var counter=0;
if (steps > 10) {
interval=Math.round(steps / 10.0);
steps=10;
}var pD=Clazz.new_([owner, steps + 2, "JarTool", Clazz.new_($I$(5,1).c$$I$I,[350, 150])],$I$(44,1).c$$java_awt_Frame$I$S$java_awt_Dimension);
var pdMessage=C$.res.getString$S("JarTool.ProcessingFile");
for (var it=sources.iterator$(); it.hasNext$(); ) {
if (counter % interval == 0) {
pD.reportProgress$S(pdMessage);
}++counter;
var filename=it.next$().toString();
if (filename != null ) {
errorMessage.append$StringBuffer(C$.processFile$S$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue(filename, Clazz.new_($I$(16,1).c$$java_io_File$S,[parent, filename]), temporaryDirectory, policy));
}}
var success=false;
var error=errorMessage.toString().trim$();
if (error.length$() > 0) {
var message=Clazz.array(String, -1, [C$.res.getString$S("JarTool.JarNotCreated"), error]);
$I$(18,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("JarTool.Error"), 2]);
} else {
pD.reportProgress$S(C$.res.getString$S("JarTool.CompressingFile"));
if (C$.compress$java_io_File$java_io_File$java_util_jar_Manifest(temporaryDirectory, target, manifest)) {
success=true;
} else {
var message=Clazz.array(String, -1, [C$.res.getString$S("JarTool.JarNotCreated"), C$.res.getString$S("JarTool.CantCompress") + " " + target.getAbsolutePath$() ]);
$I$(18,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("JarTool.Error"), 2]);
}}pD.reportProgress$S(C$.res.getString$S("JarTool.CleaningTempFile"));
C$.remove$java_io_File(temporaryDirectory);
pD.dispose$();
if (success) {
return target;
}return null;
}, 1);

Clazz.newMeth(C$, 'processFile$S$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue',  function (filename, file, targetDirectory, policy) {
if (!file.exists$() && (filename.indexOf$S("!") == -1) ) {
return Clazz.new_([C$.res.getString$S("JarTool.FileDoesntExist") + " " + file.getAbsolutePath$() + ".\n" ],$I$(23,1).c$$S);
}if (file.isDirectory$()) {
var errorMessage=Clazz.new_($I$(23,1));
var fsView=$I$(35).getFileSystemView$();
var filesInDir=fsView.getFiles$java_io_File$Z(file, false);
for (var i=0, n=filesInDir.length; i < n; i++) {
errorMessage.append$StringBuffer(C$.processFile$S$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue(filename + "/" + filesInDir[i].getName$() , filesInDir[i], targetDirectory, policy));
}
return errorMessage;
}var filenameLowerCase=file.getName$().toLowerCase$();
if (filenameLowerCase.endsWith$S(".jar") || filenameLowerCase.endsWith$S(".zip") || filenameLowerCase.endsWith$S(".trz")  ) {
if (C$.unzipWithWarning$java_io_File$java_io_File$org_opensourcephysics_tools_JarTool_OverwriteValue(file, targetDirectory, policy)) {
return Clazz.new_($I$(23,1));
}return Clazz.new_([C$.res.getString$S("JarTool.CantUncompress") + " " + file.getAbsolutePath$() + ".\n" ],$I$(23,1).c$$S);
}var n=filename.indexOf$S("!");
if (n > -1) {
var entry=filename.substring$I(n + 2);
var filepath=file.getAbsolutePath$();
var zipFile=Clazz.new_([filepath.substring$I$I(0, filepath.indexOf$S("!"))],$I$(16,1).c$$S);
var target=Clazz.new_($I$(16,1).c$$java_io_File$S,[targetDirectory, entry]);
if (C$.extract0$java_io_File$S$java_io_File(zipFile, entry, target) != null ) {
return Clazz.new_($I$(23,1));
}return Clazz.new_([C$.res.getString$S("JarTool.CantCopy") + " " + filename + " --> " + targetDirectory.getName$() + ".\n" ],$I$(23,1).c$$S);
}while (filename.startsWith$S("../")){
filename=filename.substring$I(3);
}
var target=Clazz.new_($I$(16,1).c$$java_io_File$S,[targetDirectory, filename]);
if (target.exists$()) {
switch (policy.value) {
case 3:
return Clazz.new_($I$(23,1));
case 2:
break;
default:
switch (policy.value=C$.confirmOverwrite$S(filename)) {
case 3:
case 1:
return Clazz.new_($I$(23,1));
default:
}
}
}if (C$.copy$java_io_File$java_io_File(file, target)) {
return Clazz.new_($I$(23,1));
}return Clazz.new_([C$.res.getString$S("JarTool.CantCopy") + " " + filename + " --> " + targetDirectory.getName$() + ".\n" ],$I$(23,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'recursiveClearDirectory$java_io_File$javax_swing_filechooser_FileSystemView',  function (directory, fsView) {
var files=fsView.getFiles$java_io_File$Z(directory, false);
for (var i=0; i < files.length; i++) {
if (files[i].isDirectory$()) {
if (!C$.recursiveClearDirectory$java_io_File$javax_swing_filechooser_FileSystemView(files[i], fsView)) {
return false;
}} else if (!files[i].delete$()) {
return false;
}}
return directory.delete$();
}, 1);

Clazz.newMeth(C$, 'recursiveGetDirectory$java_io_File$javax_swing_filechooser_FileSystemView',  function (directory, fsView) {
var files=fsView.getFiles$java_io_File$Z(directory, false);
var list=Clazz.new_($I$(34,1));
for (var i=0; i < files.length; i++) {
if (files[i].isDirectory$()) {
list.addAll$java_util_Collection(C$.recursiveGetDirectory$java_io_File$javax_swing_filechooser_FileSystemView(files[i], fsView));
} else {
list.add$O(files[i]);
}}
return list;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.res=$I$(11).getBundle$S$java_util_Locale(null, null);
C$.overwritePolicy=1;
C$.ownerFrame=null;
C$.jarContents=Clazz.new_($I$(12,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarTool, "OverwriteValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.value=1;
},1);

C$.$fields$=[['I',['value']]]

Clazz.newMeth(C$, 'c$$I',  function (val) {
;C$.$init$.apply(this);
this.value=val;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarTool, "ProgressDialog", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentStep=0;
this.progressLabel=null;
this.progressBar=null;
},1);

C$.$fields$=[['I',['totalSteps','currentStep'],'O',['progressLabel','javax.swing.JLabel','progressBar','javax.swing.JProgressBar']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$I$S$java_awt_Dimension',  function (_owner, _steps, _title, _size) {
;C$.superclazz.c$$java_awt_Frame.apply(this,[_owner]);C$.$init$.apply(this);
this.totalSteps=_steps;
this.setTitle$S(_title);
this.setSize$java_awt_Dimension(_size);
this.setModal$Z(false);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
var progressPanel=((P$.JarTool$ProgressDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarTool$ProgressDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInsets$',  function () {
return Clazz.new_($I$(2,1).c$$I$I$I$I,[15, 10, 5, 10]);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.JarTool$ProgressDialog$1));
progressPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1).c$$java_awt_Container$I,[progressPanel, 1]));
this.getContentPane$().add$java_awt_Component$O(progressPanel, "Center");
var d=Clazz.new_($I$(5,1).c$$I$I,[_size.width, 20]);
this.progressLabel=Clazz.new_($I$(6,1).c$$S,[_title]);
this.progressLabel.setAlignmentX$F(0.5);
this.progressLabel.setMaximumSize$java_awt_Dimension(d);
this.progressLabel.setPreferredSize$java_awt_Dimension(d);
progressPanel.add$java_awt_Component(this.progressLabel);
progressPanel.add$java_awt_Component($I$(7,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(5,1).c$$I$I,[1, 20])]));
this.progressBar=Clazz.new_($I$(8,1).c$$I$I,[0, this.totalSteps]);
this.progressBar.setStringPainted$Z(true);
this.progressLabel.setLabelFor$java_awt_Component(this.progressBar);
this.progressBar.setAlignmentX$F(0.5);
progressPanel.add$java_awt_Component(this.progressBar);
var screenSize=$I$(9).getDefaultToolkit$().getScreenSize$();
this.setLocation$I$I(((screenSize.width - _size.width)/2|0), ((screenSize.height - _size.width)/2|0));
this.getContentPane$().add$java_awt_Component$O(progressPanel, "Center");
this.setCursor$java_awt_Cursor(Clazz.new_($I$(10,1).c$$I,[3]));
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'reportProgress$S',  function (_process) {
++this.currentStep;
this.progressBar.setValue$I(this.currentStep);
this.progressLabel.setText$S(_process);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
