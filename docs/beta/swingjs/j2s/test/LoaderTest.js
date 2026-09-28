(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','javax.swing.JOptionPane','javax.swing.JFrame','javax.swing.JPanel','javax.swing.JTextArea','javax.swing.JScrollPane','java.util.ArrayList','java.awt.BorderLayout','java.awt.FlowLayout','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JButton','org.opensourcephysics.tools.LibraryComPADRE','org.opensourcephysics.tools.LibraryBrowser','java.awt.dnd.DropTarget','java.awt.datatransfer.DataFlavor',['test.LoaderTest','.AsyncLoader'],'java.awt.Cursor','java.io.File','org.opensourcephysics.tools.JarTool','org.opensourcephysics.display.OSPRuntime','java.io.BufferedWriter','java.io.FileWriter','org.opensourcephysics.media.core.VideoIO','javajs.async.AsyncFileChooser','javax.swing.filechooser.FileFilter','java.util.Random']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LoaderTest", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AsyncLoader',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.libraryBrowser=p$1.getLibraryBrowser.apply(this, []);
this.frame=Clazz.new_($I$(4,1).c$$S,["JFrame Example"]);
this.panel=Clazz.new_($I$(5,1));
this.topPanel=Clazz.new_($I$(5,1));
this.textArea=Clazz.new_($I$(6,1));
this.scrollPane=Clazz.new_($I$(7,1).c$$java_awt_Component,[this.textArea]);
this.xmlFiles=Clazz.new_($I$(8,1));
this.otherFiles=Clazz.new_($I$(8,1));
this.progressInit=0;
this.progress_done=100;
},1);

C$.$fields$=[['I',['progressInit','progress_done'],'S',['tempDir','zipFilePath','editedFilePath'],'O',['libraryBrowser','org.opensourcephysics.tools.LibraryBrowser','frame','javax.swing.JFrame','panel','javax.swing.JPanel','+topPanel','textArea','javax.swing.JTextArea','scrollPane','javax.swing.JScrollPane','xmlFiles','java.util.ArrayList','+otherFiles','fileChooser','javajs.async.AsyncFileChooser']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.frame.setDefaultCloseOperation$I(3);
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1)));
this.topPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
p$1.enableDragAndDrop$javax_swing_JTextArea.apply(this, [this.textArea]);
this.textArea.setEditable$Z(true);
var label=Clazz.new_($I$(11,1).c$$S,["ComPADRE"]);
label.setBorder$javax_swing_border_Border($I$(12).createEmptyBorder$I$I$I$I(0, 0, 0, 20));
var getButton=Clazz.new_($I$(13,1));
getButton.setText$S("Open Browser");
var saveButton=Clazz.new_($I$(13,1));
saveButton.setText$S("Save Model");
getButton.addActionListener$java_awt_event_ActionListener(((P$.LoaderTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['test.LoaderTest'].libraryBrowser.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LoaderTest$1.$init$,[this, null])));
saveButton.addActionListener$java_awt_event_ActionListener(((P$.LoaderTest$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!p$1.saveNewZip.apply(this.b$['test.LoaderTest'], [])) {
var msg="Failed to save file " + $I$(1).getName$S(this.b$['test.LoaderTest'].zipFilePath);
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.b$['test.LoaderTest'].frame, msg, "Error", 0);
}});
})()
), Clazz.new_(P$.LoaderTest$2.$init$,[this, null])));
this.topPanel.add$java_awt_Component(label);
this.topPanel.add$java_awt_Component(getButton);
this.topPanel.add$java_awt_Component(saveButton);
this.panel.add$java_awt_Component$O(this.scrollPane, "Center");
this.panel.add$java_awt_Component$O(this.topPanel, "North");
this.frame.add$java_awt_Component(this.panel);
this.frame.setSize$I$I(450, 300);
this.frame.setLocationRelativeTo$java_awt_Component(null);
this.frame.setDefaultCloseOperation$I(3);
this.frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'setEditorText$S',  function (text) {
this.textArea.setText$S(text);
}, p$1);

Clazz.newMeth(C$, 'showHelp',  function () {
var msg="The Lord helps those who help themselves.";
$I$(3).showMessageDialog$java_awt_Component$O(null, msg);
System.out.println$S(msg);
}, p$1);

Clazz.newMeth(C$, 'getLibraryBrowser',  function () {
if (this.libraryBrowser == null ) {
try {
$I$(14).desiredOSPType="EJS";
this.libraryBrowser=$I$(15).getBrowser$javax_swing_JDialog(null);
this.libraryBrowser.addComPADRECollection$S("https://www.compadre.org/osp/services/REST/osp_tracker.cfm?verb=Identify&OSPType=Tracker&OSPPrimary=Subject");
this.libraryBrowser.addComPADRECollection$S("https://www.compadre.org/osp/services/REST/osp_jars.cfm?verb=Identify&OSPType=EJS%20Model&AttachedDocument=Source%20Code&OSPPrimary=Subject");
this.libraryBrowser.refreshCollectionsMenu$();
this.libraryBrowser.addPropertyChangeListener$S$java_beans_PropertyChangeListener("target", ((P$.LoaderTest$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if ("LOAD" === e.getOldValue$() ) {
var record=e.getNewValue$();
this.b$['test.LoaderTest'].libraryBrowser.setComandButtonEnabled$Z(false);
p$1.openLibraryResource$org_opensourcephysics_tools_LibraryResource.apply(this.b$['test.LoaderTest'], [record]);
}});
})()
), Clazz.new_(P$.LoaderTest$3.$init$,[this, null])));
$I$(15).fireHelpEvent=true;
this.libraryBrowser.addPropertyChangeListener$S$java_beans_PropertyChangeListener("help", ((P$.LoaderTest$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$1.showHelp.apply(this.b$['test.LoaderTest'], []);
});
})()
), Clazz.new_(P$.LoaderTest$4.$init$,[this, null])));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}return this.libraryBrowser;
}, p$1);

Clazz.newMeth(C$, 'enableDragAndDrop$javax_swing_JTextArea',  function (jt) {
var dropTarget=Clazz.new_([jt, ((P$.LoaderTest$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.dnd.DropTargetListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent',  function (e) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent',  function (e) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent',  function (e) {
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent',  function (e) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent',  function (e) {
try {
e.acceptDrop$I(3);
var list=e.getTransferable$().getTransferData$java_awt_datatransfer_DataFlavor($I$(17).javaFileListFlavor);
var file=list.get$I(0);
var path=file.getAbsolutePath$();
p$1.loadIntoEditor$S.apply(this.b$['test.LoaderTest'], [path]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.LoaderTest$5.$init$,[this, null]))],$I$(16,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener);
}, p$1);

Clazz.newMeth(C$, 'openDnDResource$S$S',  function (target, fileName) {
var loadFailed=false;
try {
if (target.indexOf$S("document/ServeFile.cfm?") >= 0) {
try {
target=$I$(2).downloadToOSPCache$S$S$Z(target, fileName, false).toURI$().toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
loadFailed=true;
} else {
throw ex;
}
}
}if (target == null ) {
loadFailed=true;
}if (loadFailed) {
var name=fileName;
if (name == null  || "".equals$O(name) ) name="Unknown";
var s="No resource could be downloaded for node " + name;
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.libraryBrowser, s, "Error", 2);
return;
}if (!p$1.isZip$S.apply(this, [target])) {
var msg=$I$(1).getName$S(target) + " is not a zip file.";
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.frame, msg, "Wrong File Type", 2);
return;
} else {
var contents=$I$(2).getZipContents$S$Z(target, true);
if (contents.isEmpty$()) {
var msg=$I$(1).getName$S(target) + " is empty.";
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.frame, msg, "Empty File", 2);
return;
}Clazz.new_($I$(18,1).c$$S,[this, null, target]).executeAsync$();
return;
}} finally {
this.libraryBrowser.setCursor$java_awt_Cursor($I$(19).getDefaultCursor$());
}
}, p$1);

Clazz.newMeth(C$, 'openLibraryResource$org_opensourcephysics_tools_LibraryResource',  function (record) {
var loadFailed=false;
try {
this.libraryBrowser.setCursor$java_awt_Cursor($I$(19).getPredefinedCursor$I(3));
var target=record.getAbsoluteTarget$();
if (!$I$(2).isHTTP$S(target)) {
target=$I$(2,"getURIPath$S",[$I$(1,"getResolvedPath$S$S",[record.getTarget$(), record.getBasePath$()])]);
}if (target.indexOf$S("document/ServeFile.cfm?") >= 0) {
var fileName=record.getProperty$S("download_filename");
try {
target=$I$(2).downloadToOSPCache$S$S$Z(target, fileName, false).toURI$().toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
loadFailed=true;
} else {
throw ex;
}
}
}if (target == null ) {
loadFailed=true;
}if (loadFailed) {
var name=record.getName$();
if (name == null  || "".equals$O(name) ) name="Unknown";
var s="No resource could be downloaded for node " + name;
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.libraryBrowser, s, "Error", 2);
return;
}if (!p$1.isZip$S.apply(this, [target])) {
var msg=$I$(1).getName$S(target) + " is not a zip file.";
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.frame, msg, "Wrong File Type", 2);
return;
} else {
var contents=$I$(2).getZipContents$S$Z(target, true);
if (contents.isEmpty$()) {
var msg=$I$(1).getName$S(target) + " is empty.";
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.frame, msg, "Empty File", 2);
return;
}Clazz.new_($I$(18,1).c$$S,[this, null, target]).executeAsync$();
return;
}} finally {
this.libraryBrowser.setCursor$java_awt_Cursor($I$(19).getDefaultCursor$());
}
}, p$1);

Clazz.newMeth(C$, 'loadIntoEditor$S',  function (path) {
var contents=$I$(2).getZipContents$S$Z(path, true);
this.xmlFiles.clear$();
this.otherFiles.clear$();
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var s=$I$(2).getURIPath$S(path + "!/" + next );
if (next.endsWith$S(".trk") || next.endsWith$S(".xml") || next.endsWith$S(".ejss")  ) {
this.xmlFiles.add$O(s);
} else {
this.otherFiles.add$O(s);
}}
contents=null;
if (this.xmlFiles.isEmpty$()) {
var msg=$I$(1).getName$S(path) + " contains no editable xml files.";
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.frame, msg, "No Editable Content", 2);
return false;
}this.editedFilePath=this.xmlFiles.remove$I(0);
var text=$I$(2).getString$S(this.editedFilePath);
p$1.setEditorText$S.apply(this, [text]);
this.libraryBrowser.setVisible$Z(false);
return true;
}, p$1);

Clazz.newMeth(C$, 'isZip$S',  function (path) {
return path.toLowerCase$().endsWith$S(".zip") || path.toLowerCase$().endsWith$S(".trz") ;
}, p$1);

Clazz.newMeth(C$, 'saveNewZip',  function () {
var toBeZipped=p$1.defineZipFilePath.apply(this, []);
if (toBeZipped == null ) return false;
if (!p$1.prepareZipFiles$java_util_ArrayList.apply(this, [toBeZipped])) return false;
var target=Clazz.new_($I$(20,1).c$$S,[this.zipFilePath]);
var success=$I$(21).compress$java_util_ArrayList$java_io_File$java_util_jar_Manifest(toBeZipped, target, null);
$I$(22,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.LoaderTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LoaderTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(2,"deleteFile$java_io_File",[Clazz.new_([p$1.getTempDirectory.apply(this.b$['test.LoaderTest'], [])],$I$(20,1).c$$S)]);
});
})()
), Clazz.new_(P$.LoaderTest$lambda1.$init$,[this, null]))]);
return success;
}, p$1);

Clazz.newMeth(C$, 'saveEditorTextTo$java_io_File',  function (target) {
if (target == null ) return null;
if (!(target.getParentFile$().exists$() || target.getParentFile$().mkdirs$() )) return null;
var path=target.getAbsolutePath$();
try {
var out=Clazz.new_([Clazz.new_($I$(24,1).c$$S,[path])],$I$(23,1).c$$java_io_Writer);
out.write$S(this.textArea.getText$());
out.flush$();
out.close$();
return target;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'defineZipFilePath',  function () {
var chooser=p$1.getFileChooser.apply(this, []);
var result=chooser.showSaveDialog$java_awt_Component(this.frame);
if (result != 0) {
return null;
}var chooserFile=chooser.getSelectedFile$();
if (chooserFile.exists$()) {
}if (!$I$(25).canWrite$java_io_File(chooserFile)) {
return null;
}this.zipFilePath=chooserFile.getAbsolutePath$();
var ext=$I$(1,"getExtension$S",[chooserFile.getName$()]);
if (!"zip".equalsIgnoreCase$S(ext)) {
var newFilePath=$I$(1).stripExtension$S(this.zipFilePath) + ".zip";
if (!$I$(25,"canWrite$java_io_File",[Clazz.new_($I$(20,1).c$$S,[newFilePath])])) return null;
this.zipFilePath=newFilePath;
}return ((P$.LoaderTest$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.ArrayList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['add$java_io_File','add$O'],  function (f) {
if (!this.contains$O(f)) C$.superclazz.prototype.add$O.apply(this, [f]);
return true;
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.LoaderTest$6));
}, p$1);

Clazz.newMeth(C$, 'getFileChooser',  function () {
if (this.fileChooser == null ) {
var dir=($I$(22).chooserDir == null ) ? Clazz.new_([$I$(22).getUserHome$()],$I$(20,1).c$$S) : Clazz.new_([$I$(22).chooserDir],$I$(20,1).c$$S);
this.fileChooser=Clazz.new_($I$(26,1).c$$java_io_File,[dir]);
var zipFilter=((P$.LoaderTest$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoaderTest$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
return f.isDirectory$() || "zip".equalsIgnoreCase$S($I$(25).getExtension$java_io_File(f)) ;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return "ZIP files";
});
})()
), Clazz.new_($I$(27,1),[this, null],P$.LoaderTest$7));
this.fileChooser.setDialogTitle$S("Save As");
this.fileChooser.setAcceptAllFileFilterUsed$Z(false);
this.fileChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(zipFilter);
this.fileChooser.setFileFilter$javax_swing_filechooser_FileFilter(zipFilter);
this.fileChooser.setMultiSelectionEnabled$Z(false);
}return this.fileChooser;
}, p$1);

Clazz.newMeth(C$, 'prepareZipFiles$java_util_ArrayList',  function (zipList) {
var tmpDir=p$1.getTempDirectory.apply(this, []);
var n=this.editedFilePath.indexOf$S("!");
if (n == -1) return false;
var subPath=this.editedFilePath.substring$I$I(n + 2, this.editedFilePath.length$());
var targetFile=Clazz.new_($I$(20,1).c$$S$S,[tmpDir, subPath]);
targetFile=p$1.saveEditorTextTo$java_io_File.apply(this, [targetFile]);
if (targetFile == null  || !targetFile.exists$() ) return false;
zipList.add$O(targetFile);
for (var path, $path = this.xmlFiles.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
n=path.indexOf$S("!");
if (n == -1) return false;
subPath=path.substring$I$I(n + 2, path.length$());
targetFile=Clazz.new_($I$(20,1).c$$S$S,[tmpDir, subPath]);
if (!(targetFile.getParentFile$().exists$() || targetFile.getParentFile$().mkdirs$() )) return false;
targetFile=$I$(2).extract$S$java_io_File(path, targetFile);
if (!targetFile.exists$()) return false;
zipList.add$O(targetFile);
}
for (var path, $path = this.otherFiles.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
n=path.indexOf$S("!");
if (n == -1) return false;
subPath=path.substring$I$I(n + 2, path.length$());
targetFile=Clazz.new_($I$(20,1).c$$S$S,[tmpDir, subPath]);
if (!(targetFile.getParentFile$().exists$() || targetFile.getParentFile$().mkdirs$() )) return false;
targetFile=$I$(2).extract$S$java_io_File(path, targetFile);
if (!targetFile.exists$()) return false;
zipList.add$O(targetFile);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'getTempDirectory',  function () {
if (this.tempDir == null ) {
this.tempDir=Clazz.new_([System.getProperty$S("java.io.tmpdir"), "ejss" + Clazz.new_($I$(28,1)).nextInt$()],$I$(20,1).c$$S$S).toString() + $I$(20).separator;
}return this.tempDir;
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoaderTest, "AsyncLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.async.AsyncSwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['path']]]

Clazz.newMeth(C$, 'c$$S',  function (path) {
;C$.superclazz.c$$java_awt_Component$S$I$I$I.apply(this,[this.b$['test.LoaderTest'].frame, "Loading " + $I$(1).getName$S(path), 10, this.b$['test.LoaderTest'].progressInit, this.b$['test.LoaderTest'].progress_done]);C$.$init$.apply(this);
this.path=path;
}, 1);

Clazz.newMeth(C$, 'initAsync$',  function () {
});

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (progress) {
var contents=$I$(2).getZipContents$S$Z(this.path, true);
this.b$['test.LoaderTest'].xmlFiles.clear$();
this.b$['test.LoaderTest'].otherFiles.clear$();
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var s=$I$(2).getURIPath$S(this.path + "!/" + next );
if (next.endsWith$S(".trk") || next.endsWith$S(".xml") || next.endsWith$S(".ejss")  ) {
this.b$['test.LoaderTest'].xmlFiles.add$O(s);
} else {
this.b$['test.LoaderTest'].otherFiles.add$O(s);
}}
contents=null;
if (this.b$['test.LoaderTest'].xmlFiles.isEmpty$()) {
var msg=$I$(1).getName$S(this.path) + " contains no editable xml files.";
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this.b$['test.LoaderTest'].frame, msg, "No Editable Content", 2);
return this.b$['test.LoaderTest'].progress_done;
}this.b$['test.LoaderTest'].editedFilePath=this.b$['test.LoaderTest'].xmlFiles.remove$I(0);
var text=$I$(2).getString$S(this.b$['test.LoaderTest'].editedFilePath);
p$1.setEditorText$S.apply(this.b$['test.LoaderTest'], [text]);
return this.b$['test.LoaderTest'].progress_done;
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
this.b$['test.LoaderTest'].libraryBrowser.setVisible$Z(false);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
