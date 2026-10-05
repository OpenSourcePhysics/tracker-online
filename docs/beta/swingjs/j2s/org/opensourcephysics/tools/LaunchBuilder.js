(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,['org.opensourcephysics.tools.LaunchBuilder','.NodeSet'],'java.util.ArrayList',['org.opensourcephysics.tools.LaunchBuilder','.NodeSet','.Loader'],'java.awt.Color','javax.swing.UIManager','org.opensourcephysics.tools.LaunchSaver','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.Launcher','java.io.File','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.LaunchRes','javax.swing.JOptionPane',['org.opensourcephysics.tools.Launcher','.LaunchSet'],['org.opensourcephysics.tools.LauncherUndo','.LoadEdit'],'java.awt.font.FontRenderContext','java.awt.Dimension','javax.swing.BorderFactory','javax.swing.SwingUtilities','org.opensourcephysics.tools.ResourceLoader','javax.swing.JMenu','org.opensourcephysics.display.DisplayRes','javax.swing.JMenuItem','org.opensourcephysics.display.PrintUtils','java.awt.event.WindowAdapter','java.awt.event.ComponentAdapter','javax.swing.JTextField','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','javax.swing.JPopupMenu','org.opensourcephysics.tools.EncryptionTool','java.awt.event.MouseAdapter','org.opensourcephysics.display.GUIUtils','javax.swing.JScrollPane','javax.swing.JTextPane','java.awt.Point','javax.swing.JSplitPane','javax.swing.JCheckBox','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JToolBar','javax.swing.JLabel','javax.swing.SpinnerNumberModel','javax.swing.JSpinner',['javax.swing.JSpinner','.NumberEditor'],'javax.swing.JButton','javax.swing.JDialog','java.awt.Frame','javax.swing.JComboBox','javax.swing.Box','javax.swing.JTabbedPane','java.awt.Toolkit','javax.swing.KeyStroke','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.tools.LaunchBuilder','javax.swing.AbstractAction','org.opensourcephysics.tools.JarTreeDialog','org.opensourcephysics.tools.JarTool','org.opensourcephysics.tools.LaunchNode','javax.swing.tree.TreePath','java.util.HashMap','javax.swing.JFileChooser','javax.swing.filechooser.FileFilter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.Launcher');
C$.$classes$=[['NodeSet',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.saver=Clazz.new_($I$(6,1).c$$org_opensourcephysics_tools_LaunchBuilder,[this]);
},1);

C$.$fields$=[['S',['previousClassPath'],'O',['newTabSetAction','javax.swing.Action','+changeAction','+newTabAction','+addAction','+cutAction','+copyAction','+pasteAction','+importAction','+saveAsAction','+saveAction','+saveAllAction','+saveSetAsAction','+moveUpAction','+moveDownAction','+openJarAction','+searchJarAction','+saveJarAction','+openArgAction','+openModelArgAction','+openURLAction','+openPDFAction','+searchJarForModelAction','+openTabAction','openIcon','javax.swing.Icon','editorTabs','javax.swing.JTabbedPane','focusListener','java.awt.event.FocusListener','keyListener','java.awt.event.KeyListener','displayPanel','javax.swing.JPanel','+launchPanel','+authorPanel','labels','java.util.ArrayList','titleField','javax.swing.JTextField','titleLabel','javax.swing.JLabel','passwordEditor','javax.swing.JTextField','passwordLabel','javax.swing.JLabel','nameField','javax.swing.JTextField','nameLabel','javax.swing.JLabel','tooltipField','javax.swing.JTextField','tooltipLabel','javax.swing.JLabel','displayTitle','javax.swing.border.TitledBorder','classField','javax.swing.JTextField','classLabel','javax.swing.JLabel','argField','javax.swing.JTextField','argLabel','javax.swing.JLabel','argSpinner','javax.swing.JSpinner','jarField','javax.swing.JTextField','jarLabel','javax.swing.JLabel','displayBar','javax.swing.JToolBar','displayLabel','javax.swing.JLabel','displaySpinnerModel','javax.swing.SpinnerNumberModel','displaySpinner','javax.swing.JSpinner','pathLabel','javax.swing.JLabel','pathField','javax.swing.JTextField','openDisplayChooserButton','javax.swing.JButton','+showModelArgsButton','modelArgsDialog','javax.swing.JDialog','modelArgField','javax.swing.JTextField','modelArgLabel','javax.swing.JLabel','modelArgSpinner','javax.swing.JSpinner','modelArgCloseButton','javax.swing.JButton','+modelArgClearButton','tabTitleLabel','javax.swing.JLabel','tabTitleField','javax.swing.JTextField','urlPanel','javax.swing.JPanel','descriptionPane','javax.swing.JTextPane','descriptionScroller','javax.swing.JScrollPane','descriptionTitle','javax.swing.border.TitledBorder','htmlPane','javax.swing.JEditorPane','htmlScroller','javax.swing.JScrollPane','displaySplitPane','javax.swing.JSplitPane','authorField','javax.swing.JTextField','authorLabel','javax.swing.JLabel','keywordField','javax.swing.JTextField','keywordLabel','javax.swing.JLabel','levelField','javax.swing.JTextField','levelLabel','javax.swing.JLabel','languagesField','javax.swing.JTextField','languagesLabel','javax.swing.JLabel','commentPane','javax.swing.JTextPane','commentScroller','javax.swing.JScrollPane','commentTitle','javax.swing.border.TitledBorder','+optionsTitle','+securityTitle','editorEnabledCheckBox','javax.swing.JCheckBox','+encryptCheckBox','+onEditCheckBox','+onLoadCheckBox','+hideRootCheckBox','+hiddenCheckBox','+buttonViewCheckBox','+singleVMCheckBox','+showLogCheckBox','+clearLogCheckBox','+singletonCheckBox','+singleAppCheckBox','levelDropDown','javax.swing.JComboBox','newTabButton','javax.swing.JButton','+addButton','+cutButton','+copyButton','+pasteButton','+moveUpButton','+moveDownButton','newItem','javax.swing.JMenuItem','+previewItem','+saveNodeItem','+saveNodeAsItem','+saveSetAsItem','+saveAllItem','+saveJarItem','+importItem','+openTabItem','toolsMenu','javax.swing.JMenu','encryptionToolItem','javax.swing.JMenuItem','toolbar','javax.swing.JToolBar','saver','org.opensourcephysics.tools.LaunchSaver']]
,['I',['maxArgs'],'O',['RED','java.awt.Color','fileChooser','javax.swing.JFileChooser','jarFileFilter','javax.swing.filechooser.FileFilter','+htmlFileFilter','+pdfFileFilter','+allFileFilter','ospJarFolder','java.io.File','enabledColor','java.awt.Color','+disabledColor']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
$I$(7).setAuthorMode$Z(true);
$I$(8,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(1)), Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fileName) {
;C$.superclazz.c$$S.apply(this,[fileName]);C$.$init$.apply(this);
$I$(7).setAuthorMode$Z(true);
$I$(8,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(1)), Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (splash) {
;C$.superclazz.c$$Z.apply(this,[splash]);C$.$init$.apply(this);
$I$(7).setAuthorMode$Z(true);
$I$(8,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(1)), Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (fileName, splash) {
;C$.superclazz.c$$S$Z.apply(this,[fileName, splash]);C$.$init$.apply(this);
$I$(7).setAuthorMode$Z(true);
$I$(8,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(1)), Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var fileName=null;
if ((args != null ) && (args.length != 0) ) {
fileName=args[0];
}var builder=Clazz.new_(C$.c$$S,[fileName]);
builder.frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'save$org_opensourcephysics_tools_LaunchNode$S',  function (node, fileName) {
if (node == null ) {
return null;
}if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return this.saveAs$org_opensourcephysics_tools_LaunchNode(node);
}if ($I$(8).getExtension$S(fileName) == null ) {
while (fileName.endsWith$S(".")){
fileName=fileName.substring$I$I(0, fileName.length$() - 1);
}
fileName+=".xml";
}if (!this.saveOwnedNodes$org_opensourcephysics_tools_LaunchNode(node)) {
return null;
}var filepath=fileName;
if (!$I$(9).tabSetBasePath.equals$O("")) {
filepath=$I$(8,"getResolvedPath$S$S",[fileName, $I$(9).tabSetBasePath]);
} else {
var jarBase=$I$(7).getLaunchJarDirectory$();
filepath=$I$(8).getResolvedPath$S$S(fileName, jarBase);
}var file=Clazz.new_($I$(10,1).c$$S,[filepath]);
$I$(11,"fine$S",[fileName + " = " + file.getAbsolutePath$() ]);
var fullName=$I$(8,"forwardSlash$S",[file.getAbsolutePath$()]);
var path=$I$(8).getDirectoryPath$S(fullName);
$I$(8).createFolders$S(path);
var control=Clazz.new_($I$(12,1).c$$O,[node]);
control.write$S(fullName);
if (!control.canWrite) {
$I$(11,"info$S",[$I$(13).getString$S("Dialog.SaveFailed.Message") + " " + fullName ]);
$I$(14,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(13).getString$S("Dialog.SaveFailed.Message") + " " + fileName , $I$(13).getString$S("Dialog.SaveFailed.Title"), 2]);
return null;
}node.setFileName$S(fileName);
this.changedFiles.remove$O(node.getFileName$());
return fileName;
});

Clazz.newMeth(C$, 'saveAs$org_opensourcephysics_tools_LaunchNode',  function (node) {
$I$(9).getXMLChooser$().setFileFilter$javax_swing_filechooser_FileFilter($I$(9).xmlFileFilter);
if (node.getFileName$() != null ) {
var name=$I$(8,"getResolvedPath$S$S",[node.getFileName$(), $I$(9).tabSetBasePath]);
$I$(9).getXMLChooser$().setSelectedFile$java_io_File(Clazz.new_($I$(10,1).c$$S,[name]));
} else {
var name=node.name;
if (name.equals$O($I$(13).getString$S("NewNode.Name")) || name.equals$O($I$(13).getString$S("NewTab.Name")) ) {
name=$I$(13).getString$S("NewFile.Name");
}var path=$I$(8,"getResolvedPath$S$S",[name + ".xml", $I$(9).tabSetBasePath]);
$I$(9).getXMLChooser$().setSelectedFile$java_io_File(Clazz.new_($I$(10,1).c$$S,[path]));
}var result=$I$(9).getXMLChooser$().showDialog$java_awt_Component$S(null, $I$(13).getString$S("FileChooser.SaveAs.Title"));
if (result == 0) {
var file=$I$(9).getXMLChooser$().getSelectedFile$();
var path=$I$(8,"forwardSlash$S",[file.getParent$()]);
$I$(8).createFolders$S(path);
if (file.exists$()) {
var name=$I$(8,"forwardSlash$S",[file.getAbsolutePath$()]);
name=$I$(8,"getPathRelativeTo$S$S",[name, $I$(9).tabSetBasePath]);
if (this.getOpenPaths$().contains$O(name)) {
$I$(14,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(13).getString$S("Dialog.DuplicateFileName.Message") + " \"" + name + "\"" , $I$(13).getString$S("Dialog.DuplicateFileName.Title"), 2]);
return null;
}var selected=$I$(14,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(13).getString$S("Dialog.ReplaceFile.Message") + " " + file.getName$() + $I$(8).NEW_LINE + $I$(13).getString$S("Dialog.ReplaceFile.Question") , $I$(13).getString$S("Dialog.ReplaceFile.Title"), 0]);
if (selected != 0) {
return null;
}}path=$I$(8,"forwardSlash$S",[file.getAbsolutePath$()]);
var fileName=$I$(8,"getPathRelativeTo$S$S",[path, $I$(9).tabSetBasePath]);
$I$(7).chooserDir=$I$(8).getDirectoryPath$S(path);
var clones=this.getClones$org_opensourcephysics_tools_LaunchNode(node);
path=this.save$org_opensourcephysics_tools_LaunchNode$S(node, fileName);
if (path != null ) {
if (node.isRoot$()) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var tab=this.tabbedPane.getComponentAt$I(i);
if (tab.getRootNode$() === node ) {
this.tabbedPane.setTitleAt$I$S(i, node.toString());
break;
}}
}for (var it=clones.keySet$().iterator$(); it.hasNext$(); ) {
var cloneTab=it.next$();
var clone=clones.get$O(cloneTab);
clone.setFileName$S(node.getFileName$());
if (clone === cloneTab.getRootNode$() ) {
var n=this.tabbedPane.indexOfComponent$java_awt_Component(cloneTab);
this.tabbedPane.setTitleAt$I$S(n, node.toString());
}}
if (this.tabSetName != null ) {
this.changedFiles.add$O(this.tabSetName);
}}return path;
}return null;
});

Clazz.newMeth(C$, 'saveOwnedNodes$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (node == null ) {
return false;
}if (node.isSelfContained$()) {
return true;
}var nodes=node.getChildOwnedNodes$();
for (var i=0; i < nodes.length; i++) {
if (nodes[i].getChildOwnedNodes$().length > 1) {
if (!this.saveOwnedNodes$org_opensourcephysics_tools_LaunchNode(nodes[i])) {
return false;
}}if (this.save$org_opensourcephysics_tools_LaunchNode$S(nodes[i], nodes[i].getFileName$()) == null ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'saveTabSetAs$',  function () {
this.saver.setBuilder$org_opensourcephysics_tools_LaunchBuilder(this);
this.saver.setVisible$Z(true);
if (!this.saver.isApproved$()) {
return null;
}var fileName=$I$(8,"getResolvedPath$S$S",[this.tabSetName, $I$(9).tabSetBasePath]);
var file=Clazz.new_($I$(10,1).c$$S,[fileName]);
if (file.exists$()) {
var selected=$I$(14,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(13).getString$S("Dialog.ReplaceFile.Message") + " " + file.getName$() + $I$(8).NEW_LINE + $I$(13).getString$S("Dialog.ReplaceFile.Question") , $I$(13).getString$S("Dialog.ReplaceFile.Title"), 0]);
if (selected != 0) {
return null;
}}this.saveState=this.saver.saveStateCheckBox.isSelected$();
return this.saveTabSet$();
});

Clazz.newMeth(C$, 'saveTabSet$',  function () {
if (this.tabSetName == null ) {
return null;
}if (this.tabSetName.trim$().equals$O("")) {
return this.saveTabSetAs$();
}if (!this.isTabSetWritable$()) {
return this.saveTabSetAs$();
}if (!this.selfContained && !this.saveTabs$() ) {
return null;
}var fileName=this.tabSetName;
if (!$I$(9).tabSetBasePath.equals$O("")) {
fileName=$I$(8,"getResolvedPath$S$S",[this.tabSetName, $I$(9).tabSetBasePath]);
} else {
var jarBase=$I$(7).getLaunchJarDirectory$();
fileName=$I$(8).getResolvedPath$S$S(this.tabSetName, jarBase);
}$I$(11).fine$S(fileName);
var file=Clazz.new_($I$(10,1).c$$S,[fileName]);
fileName=$I$(8,"forwardSlash$S",[file.getAbsolutePath$()]);
var path=$I$(8).getDirectoryPath$S(fileName);
$I$(8).createFolders$S(path);
var tabset=Clazz.new_($I$(15,1).c$$org_opensourcephysics_tools_Launcher$S,[this, null, this, this.tabSetName]);
var control=Clazz.new_($I$(12,1).c$$O,[tabset]);
if (control.write$S(fileName) == null ) {
return null;
}this.changedFiles.clear$();
this.jarBasePath=null;
if (this.spawner != null ) {
this.spawner.open$S(fileName);
this.spawner.refreshGUI$();
}return fileName;
});

Clazz.newMeth(C$, 'saveTabs$',  function () {
var tabs=this.tabbedPane.getComponents$();
for (var i=0; i < tabs.length; i++) {
var tab=tabs[i];
var root=tab.getRootNode$();
if ((root.getFileName$() == null ) || root.getFileName$().equals$O("") ) {
continue;
}this.save$org_opensourcephysics_tools_LaunchNode$S(root, $I$(8,"getResolvedPath$S$S",[root.getFileName$(), $I$(9).tabSetBasePath]));
}
return true;
});

Clazz.newMeth(C$, 'refreshSelectedNode$',  function () {
this.refreshNode$org_opensourcephysics_tools_LaunchNode(this.getSelectedNode$());
});

Clazz.newMeth(C$, 'refreshNode$org_opensourcephysics_tools_LaunchNode',  function (node) {
var changed=false;
if (node != null ) {
if (node.isSingleVM$() != this.singleVMCheckBox.isSelected$() ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeVM")]);
var parent=node.getParent$();
if ((parent != null ) && parent.isSingleVM$() ) {
node.singleVM=false;
node.singleVMOff=!this.singleVMCheckBox.isSelected$();
} else {
node.singleVM=this.singleVMCheckBox.isSelected$();
node.singleVMOff=false;
}if (node.isSingleVM$()) {
this.showLogCheckBox.setSelected$Z(node.showLog);
this.clearLogCheckBox.setSelected$Z(node.clearLog);
this.singleAppCheckBox.setSelected$Z(node.isSingleApp$());
} else {
this.singletonCheckBox.setSelected$Z(node.singleton);
}changed=true;
}if (node.isSingleVM$() && (node.showLog != this.showLogCheckBox.isSelected$() ) ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeShowLog")]);
node.showLog=this.showLogCheckBox.isSelected$();
changed=true;
}if (node.isSingleVM$() && node.isShowLog$() && (node.clearLog != this.clearLogCheckBox.isSelected$() )  ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeClearLog")]);
node.clearLog=this.clearLogCheckBox.isSelected$();
changed=true;
}if (node.isSingleVM$() && (node.isSingleApp$() != this.singleAppCheckBox.isSelected$() ) ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeSingleApp")]);
var parent=node.getParent$();
if ((parent != null ) && parent.isSingleApp$() ) {
node.singleApp=false;
node.singleAppOff=!this.singleAppCheckBox.isSelected$();
} else {
node.singleApp=this.singleAppCheckBox.isSelected$();
node.singleAppOff=false;
}changed=true;
}if (node.singleton != this.singletonCheckBox.isSelected$() ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeSingleton")]);
node.singleton=this.singletonCheckBox.isSelected$();
changed=true;
}if (node.hiddenInLauncher != this.hiddenCheckBox.isSelected$() ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeHidden")]);
node.hiddenInLauncher=this.hiddenCheckBox.isSelected$();
changed=true;
}if (node.isButtonView$() != this.buttonViewCheckBox.isSelected$() ) {
$I$(9,"log$S",[("Log.Message.ChangeButtonView")]);
node.setButtonView$Z(this.buttonViewCheckBox.isSelected$());
changed=true;
}if (!node.name.equals$O(this.nameField.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeName")]);
node.name=this.nameField.getText$();
changed=true;
}if (!node.tooltip.equals$O(this.tooltipField.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeTooltip")]);
node.tooltip=this.tooltipField.getText$();
changed=true;
}if (!node.description.equals$O(this.descriptionPane.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeDesc")]);
node.description=this.descriptionPane.getText$();
changed=true;
}var n=(this.argSpinner.getValue$()).intValue$();
var arg=this.argField.getText$();
if (!arg.equals$O("")) {
node.setMinimumArgLength$I(n + 1);
}if ((node.args.length > n) && !arg.equals$O(node.args[n]) ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeArgs") + " " + n ]);
node.args[n]=arg;
if (arg.equals$O("")) {
node.setMinimumArgLength$I(1);
}changed=true;
}var jarPath=this.jarField.getText$();
if ((jarPath.equals$O("") && (node.classPath != null ) ) || (!jarPath.equals$O("") && !jarPath.equals$O(node.classPath) ) ) {
$I$(9,"log$S",[("Log.Message.ChangeNodePath")]);
node.setClassPath$S(jarPath.equals$O("") ? null : jarPath);
changed=true;
}n=(this.displaySpinner.getValue$()).intValue$();
var displayTab=node.getDisplayTab$I(n);
var input=this.pathField.getText$();
var path=(displayTab == null  ? null : displayTab.getPath$());
if (displayTab == null  || (path != null  ? !path.equals$O(input) : input != null  ? !input.equals$O(path) : false) ) {
var title=(displayTab == null  ? null : displayTab.getTitle$());
var args=(displayTab == null  ? null : displayTab.getModelArgs$());
node.setDisplayTab$I$S$S$SA(n, title, input, args);
$I$(9,"log$S",[("Log.Message.ChangeNodeURL")]);
changed=true;
}if (displayTab != null  && displayTab.modelClass != null   && this.modelArgsDialog.isVisible$() ) {
n=(this.modelArgSpinner.getValue$()).intValue$();
arg=this.modelArgField.getText$();
if (!arg.equals$O("")) {
displayTab.setMinimumModelArgLength$I(n + 1);
}var args=displayTab.getModelArgs$();
if (args.length > n && !arg.equals$O(args[n]) ) {
$I$(9,"log$S",[("Log.Message.ChangeModelArgs") + " " + n ]);
args[n]=arg.equals$O("") ? null : arg;
displayTab.setModelArgs$SA(args);
if (arg.equals$O("")) {
displayTab.setMinimumModelArgLength$I(0);
}changed=true;
}}input=this.tabTitleField.getText$();
if (input.equals$O("")) {
input=null;
}var title=(displayTab == null  ? null : displayTab.getTitle$());
if (displayTab != null  && (title != null  ? !title.equals$O(input) : input != null  ? !input.equals$O(title) : false) ) {
$I$(9,"log$S",[("Log.Message.ChangeNodeHTMLTabTitle")]);
node.setDisplayTab$I$S$S$SA(n, input, displayTab.getPath$(), displayTab.getModelArgs$());
changed=true;
}var className=this.classField.getText$();
if (className.equals$O("")) {
if (node.launchClassName != null ) {
node.launchClassName=null;
node.launchClass=null;
node.launchModelScroller=null;
$I$(9,"log$S",[("Log.Message.ChangeNodeLaunchClass")]);
changed=true;
}} else if (!className.equals$O(node.launchClassName) || (!className.equals$O("") && (node.getLaunchClass$() == null ) ) ) {
var change=node.setLaunchClass$S(className);
if (change) {
$I$(9,"log$S",[("Log.Message.ChangeNodeLaunchClass")]);
changed=true;
}}if (!node.getAuthor$().equals$O(this.authorField.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeAuthor")]);
node.author=this.authorField.getText$();
changed=true;
}if (!node.keywords.equals$O(this.keywordField.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeKeywords")]);
node.keywords=this.keywordField.getText$();
changed=true;
}if (!node.level.equals$O(this.levelField.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeLevel")]);
node.level=this.levelField.getText$();
changed=true;
}if (!node.languages.equals$O(this.languagesField.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeLanguages")]);
node.languages=this.languagesField.getText$();
changed=true;
}if (!node.comment.equals$O(this.commentPane.getText$())) {
$I$(9,"log$S",[("Log.Message.ChangeNodeComment")]);
node.comment=this.commentPane.getText$();
changed=true;
}var root=node.getRoot$();
if (root != null ) {
var hide=this.hideRootCheckBox.isSelected$();
if (hide != root.hiddenWhenRoot ) {
root.hiddenWhenRoot=hide;
$I$(9,"log$S",[("Log.Message.ChangeNodeRootHidden")]);
changed=true;
}var edit=this.editorEnabledCheckBox.isSelected$();
if (edit != this.editorEnabled ) {
this.editorEnabled=edit;
$I$(9,"log$S",[("Log.Message.ChangeNodeEditorEnabled")]);
if (this.tabSetName != null ) {
this.changedFiles.add$O(this.tabSetName);
}this.refreshGUI$();
}}if (changed) {
$I$(11,"fine$S",[$I$(13).getString$S("Log.Message.ChangeNode") + " \"" + node.toString() + "\"" ]);
var tab=this.getSelectedTab$();
if (tab != null ) {
tab.treeModel.nodeChanged$javax_swing_tree_TreeNode(node);
}if (node.getOwner$() != null ) {
this.changedFiles.add$O(node.getOwner$().getFileName$());
} else {
this.changedFiles.add$O(this.tabSetName);
}this.refreshClones$org_opensourcephysics_tools_LaunchNode(node);
this.refreshGUI$();
}}});

Clazz.newMeth(C$, 'addTab$org_opensourcephysics_tools_LaunchNode',  function (root) {
if (root == null ) {
return false;
}$I$(11,"finest$S",[root.toString()]);
var added=C$.superclazz.prototype.addTab$org_opensourcephysics_tools_LaunchNode.apply(this, [root]);
if (added) {
if (this.tabSetName == null ) {
this.tabSetName=$I$(13).getString$S("Tabset.Name.New");
}this.changedFiles.add$O(this.tabSetName);
this.refreshGUI$();
}return added;
});

Clazz.newMeth(C$, 'removeSelectedTab$',  function () {
if (this.tabbedPane.getTabCount$() == 1) {
var prevArgs=this.undoManager.getLauncherState$();
var removed=this.removeAllTabs$();
if (removed && (prevArgs != null ) ) {
var edit=Clazz.new_($I$(16,1).c$$SA$SA,[this.undoManager, null, null, prevArgs]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}return removed;
}var tab=this.tabbedPane.getSelectedComponent$();
if (tab != null ) {
if (!this.saveChanges$org_opensourcephysics_tools_LaunchPanel(tab)) {
return false;
}}var removed=C$.superclazz.prototype.removeSelectedTab$.apply(this, []);
if ((this.tabSetName != null ) && removed ) {
this.changedFiles.add$O(this.tabSetName);
this.refreshGUI$();
}return removed;
});

Clazz.newMeth(C$, 'saveChanges$org_opensourcephysics_tools_LaunchPanel',  function (tab) {
var root=tab.getRootNode$();
var n=this.tabbedPane.indexOfComponent$java_awt_Component(tab);
var name=(n > -1) ? this.tabbedPane.getTitleAt$I(n) : $I$(9,"getDisplayName$S",[root.getFileName$()]);
var changed=this.changedFiles.contains$O(root.getFileName$());
var nodes=root.getAllOwnedNodes$();
for (var i=0; i < nodes.length; i++) {
changed=changed || this.changedFiles.contains$O(nodes[i].getFileName$()) ;
}
if (changed) {
var selected=$I$(14,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(13).getString$S("Dialog.SaveChanges.Tab.Message") + " \"" + name + "\"" + $I$(8).NEW_LINE + $I$(13).getString$S("Dialog.SaveChanges.Question") , $I$(13).getString$S("Dialog.SaveChanges.Title"), 1]);
if (selected == 2) {
return false;
}if (selected == 0) {
this.save$org_opensourcephysics_tools_LaunchNode$S(root, root.getFileName$());
}}return true;
});

Clazz.newMeth(C$, 'removeAllTabs$',  function () {
if (!this.saveAllChanges$()) {
return false;
}return C$.superclazz.prototype.removeAllTabs$.apply(this, []);
});

Clazz.newMeth(C$, 'saveAllChanges$',  function () {
if (!this.changedFiles.isEmpty$() && (this.tabbedPane.getTabCount$() > 0) ) {
var message=$I$(13).getString$S("Dialog.SaveChanges.Tabset.Message");
var selected=$I$(14,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, message + "\"" + this.tabSetName + "\"" + $I$(8).NEW_LINE + $I$(13).getString$S("Dialog.SaveChanges.Question") , $I$(13).getString$S("Dialog.SaveChanges.Title"), 1]);
if (selected == 2) {
return false;
}if (selected == 0) {
if (this.tabSetName.equals$O($I$(13).getString$S("Tabset.Name.New")) || !this.saveAllItem.isEnabled$() ) {
this.saveTabSetAs$();
} else {
this.saveTabSet$();
}}}return true;
});

Clazz.newMeth(C$, 'refreshStringResources$',  function () {
C$.superclazz.prototype.refreshStringResources$.apply(this, []);
this.saver=Clazz.new_($I$(6,1).c$$org_opensourcephysics_tools_LaunchBuilder,[this]);
this.editorTabs.setTitleAt$I$S(0, $I$(13).getString$S("Tab.Display"));
this.editorTabs.setTitleAt$I$S(1, $I$(13).getString$S("Tab.Launch"));
this.editorTabs.setTitleAt$I$S(2, $I$(13).getString$S("Tab.Author"));
this.displayTitle.setTitle$S($I$(13).getString$S("Label.DisplayPane"));
this.commentTitle.setTitle$S($I$(13).getString$S("Label.Comments"));
this.descriptionTitle.setTitle$S($I$(13).getString$S("Label.Description"));
this.optionsTitle.setTitle$S($I$(13).getString$S("Label.Options"));
this.hiddenCheckBox.setText$S($I$(13).getString$S("Checkbox.Hidden"));
this.buttonViewCheckBox.setText$S($I$(13).getString$S("Checkbox.ButtonView"));
this.nameLabel.setText$S($I$(13).getString$S("Label.Name"));
this.tooltipLabel.setText$S($I$(13).getString$S("Label.Tooltip"));
this.displayLabel.setText$S($I$(13).getString$S("Label.Display"));
this.tabTitleLabel.setText$S($I$(13).getString$S("Label.TabTitle"));
this.pathLabel.setText$S($I$(13).getString$S("Label.Path"));
this.jarLabel.setText$S($I$(13).getString$S("Label.Jar"));
this.classLabel.setText$S($I$(13).getString$S("Label.Class"));
this.argLabel.setText$S($I$(13).getString$S("Label.Args"));
this.singleVMCheckBox.setText$S($I$(13).getString$S("Checkbox.SingleVM"));
this.showLogCheckBox.setText$S($I$(13).getString$S("Checkbox.ShowLog"));
this.clearLogCheckBox.setText$S($I$(13).getString$S("Checkbox.ClearLog"));
this.singletonCheckBox.setText$S($I$(13).getString$S("Checkbox.Singleton"));
this.singleAppCheckBox.setText$S($I$(13).getString$S("Checkbox.SingleApp"));
this.authorLabel.setText$S($I$(13).getString$S("Label.Author"));
this.keywordLabel.setText$S($I$(13).getString$S("Label.Keywords"));
this.levelLabel.setText$S($I$(13).getString$S("Label.Level"));
this.languagesLabel.setText$S($I$(13).getString$S("Label.Languages"));
this.securityTitle.setTitle$S($I$(13).getString$S("Label.Security"));
this.editorEnabledCheckBox.setText$S($I$(13).getString$S("Checkbox.EditorEnabled"));
this.encryptCheckBox.setText$S($I$(13).getString$S("Checkbox.Encrypted"));
this.passwordLabel.setText$S($I$(13).getString$S("Label.Password"));
this.onLoadCheckBox.setText$S($I$(13).getString$S("Checkbox.PWLoad"));
this.titleLabel.setText$S($I$(13).getString$S("Label.Title"));
this.hideRootCheckBox.setText$S($I$(13).getString$S("Checkbox.HideRoot"));
this.previewItem.setText$S($I$(13).getString$S("Menu.File.Preview"));
this.encryptionToolItem.setText$S($I$(13).getString$S("MenuItem.EncryptionTool"));
this.newItem.setText$S($I$(13).getString$S("Menu.File.New"));
this.importItem.setText$S($I$(13).getString$S("Action.Import"));
this.saveNodeItem.setText$S($I$(13).getString$S("Action.SaveNode"));
this.saveNodeAsItem.setText$S($I$(13).getString$S("Action.SaveNodeAs"));
this.saveAllItem.setText$S($I$(13).getString$S("Action.SaveAll"));
this.openTabItem.setText$S($I$(13).getString$S("Action.OpenTab"));
this.saveSetAsItem.setText$S($I$(13).getString$S("Action.SaveSetAs"));
this.toolsMenu.setText$S($I$(13).getString$S("Menu.Tools"));
this.newTabButton.setText$S($I$(13).getString$S("Action.New"));
this.addButton.setText$S($I$(13).getString$S("Action.Add"));
this.cutButton.setText$S($I$(13).getString$S("Action.Cut"));
this.copyButton.setText$S($I$(13).getString$S("Action.Copy"));
this.pasteButton.setText$S($I$(13).getString$S("Action.Paste"));
this.moveUpButton.setText$S($I$(13).getString$S("Action.Up"));
this.moveDownButton.setText$S($I$(13).getString$S("Action.Down"));
this.showModelArgsButton.setText$S($I$(13).getString$S("Button.ModelArgs"));
this.modelArgsDialog.setTitle$S($I$(13).getString$S("Dialog.ModelArgs.Title"));
this.modelArgCloseButton.setText$S($I$(13).getString$S("Dialog.Button.Close"));
this.modelArgClearButton.setText$S($I$(13).getString$S("Dialog.Button.Clear"));
this.modelArgLabel.setText$S($I$(13).getString$S("Label.Args"));
this.pathField.setToolTipText$S($I$(13).getString$S("Display.Path.Tooltip"));
this.tabTitleField.setToolTipText$S($I$(13).getString$S("Display.Tab.Title.Tooltip"));
this.displaySpinner.setToolTipText$S($I$(13).getString$S("Display.Tab.Number.Tooltip"));
this.openDisplayChooserButton.setToolTipText$S($I$(13).getString$S("Button.OpenDisplay.Tooltip"));
this.showModelArgsButton.setToolTipText$S($I$(13).getString$S("Button.ModelArgs.Tooltip"));
this.labels.clear$();
this.labels.add$O(this.nameLabel);
this.labels.add$O(this.tooltipLabel);
this.labels.add$O(this.displayLabel);
var frc=Clazz.new_($I$(17,1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
var font=this.nameLabel.getFont$();
var w=0;
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
var labelSize=Clazz.new_($I$(18,1).c$$I$I,[w, 20]);
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 0, 0, 2));
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setHorizontalAlignment$I(11);
}
this.labels.clear$();
this.labels.add$O(this.jarLabel);
this.labels.add$O(this.classLabel);
this.labels.add$O(this.argLabel);
w=0;
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
labelSize=Clazz.new_($I$(18,1).c$$I$I,[w, 20]);
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 0, 0, 2));
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setHorizontalAlignment$I(11);
}
this.labels.clear$();
this.labels.add$O(this.authorLabel);
this.labels.add$O(this.keywordLabel);
this.labels.add$O(this.levelLabel);
this.labels.add$O(this.languagesLabel);
w=0;
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
labelSize=Clazz.new_($I$(18,1).c$$I$I,[w, 20]);
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 0, 0, 2));
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setHorizontalAlignment$I(11);
}
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (this.previousNode != null ) {
var prev=this.previousNode;
this.previousNode=null;
this.refreshNode$org_opensourcephysics_tools_LaunchNode(prev);
}if (this.newNodeSelected) {
this.argSpinner.setValue$O(Integer.valueOf$I(0));
this.displaySpinner.setValue$O(Integer.valueOf$I(0));
this.newNodeSelected=false;
}var root=this.getRootNode$();
var rootEnabled=root == null  || root.enabled ;
if (!rootEnabled) this.editorTabs.setSelectedIndex$I(0);
this.titleField.setText$S(this.title);
this.titleField.setBackground$java_awt_Color($I$(4).white);
C$.superclazz.prototype.refreshGUI$.apply(this, []);
var theTitle=this.frame.getTitle$();
if (this.title != null ) {
if (!this.changedFiles.isEmpty$()) {
theTitle+=" [" + this.tabSetName + "*]" ;
} else {
theTitle+=" [" + this.tabSetName + "]" ;
}} else if (!this.changedFiles.isEmpty$()) {
if (this.tabbedPane.getTabCount$() == 0) {
this.changedFiles.clear$();
} else {
theTitle+="*";
}}this.frame.setTitle$S(theTitle);
var node=this.getSelectedNode$();
if (node != null ) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
root=this.getTab$I(i).getRootNode$();
this.tabbedPane.setTitleAt$I$S(i, root.toString());
}
this.hiddenCheckBox.setSelected$Z(node.isHiddenInLauncher$());
var parentHidden=(node.getParent$() != null ) && (node.getParent$()).isHiddenInLauncher$() ;
this.hiddenCheckBox.setEnabled$Z(!parentHidden && rootEnabled );
this.nameField.setText$S(node.toString());
this.nameField.setBackground$java_awt_Color($I$(4).white);
this.tooltipField.setText$S(node.tooltip);
this.tooltipField.setBackground$java_awt_Color($I$(4).white);
this.descriptionPane.setText$S(node.description);
this.descriptionPane.setBackground$java_awt_Color($I$(4).white);
var n=(this.displaySpinner.getValue$()).intValue$();
var displayTab=node.getDisplayTab$I(n);
var urlPath=(displayTab == null  ? null : displayTab.getPath$());
var badURL=(urlPath != null  && displayTab != null   && displayTab.url == null   && displayTab.modelClass == null  );
this.pathField.setText$S(urlPath);
this.pathField.setBackground$java_awt_Color(badURL ? C$.RED : $I$(4).white);
this.displaySpinnerModel.setMaximum$Comparable(Integer.valueOf$I(node.getDisplayTabCount$()));
this.displaySpinner.setVisible$Z(node.getDisplayTab$I(0) != null );
var hasHTML=(displayTab != null  && $I$(9,"isDisplayable$S",[displayTab.getPath$()]) );
this.tabTitleLabel.setVisible$Z(hasHTML);
this.tabTitleField.setVisible$Z(hasHTML);
this.tabTitleField.setText$S((displayTab != null ) ? displayTab.getTitle$() : null);
this.tabTitleField.setBackground$java_awt_Color($I$(4).white);
this.displayBar.remove$java_awt_Component(this.showModelArgsButton);
if (displayTab != null  && (displayTab.url != null  && $I$(9,"isDisplayable$S",[displayTab.url.getPath$()])  || displayTab.getModelScroller$() != null  ) ) {
if (displayTab.url != null ) {
this.displaySplitPane.setTopComponent$java_awt_Component(this.htmlScroller);
if (!displayTab.url.equals$O(this.htmlPane.getPage$())) {
if (displayTab.urlExists$()) {
var url=displayTab.url;
$I$(20,"invokeLater$Runnable",[((P$.LaunchBuilder$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchBuilder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].htmlPane.setPage$java_net_URL.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'].htmlPane, [this.$finals$.url]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(11,"fine$S",[$I$(13).getString$S("Log.Message.BadURL") + " " + this.$finals$.url ]);
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.LaunchBuilder$lambda1.$init$,[this, {url:url}]))]);
} else {
this.htmlPane.setText$S(null);
}}} else if (displayTab.getModelScroller$() != null ) {
var scroller=displayTab.getModelScroller$();
scroller.setBorder$javax_swing_border_Border(this.displayTitle);
this.displaySplitPane.setTopComponent$java_awt_Component(scroller);
this.displayBar.add$java_awt_Component(this.showModelArgsButton);
n=(this.modelArgSpinner.getValue$()).intValue$();
this.modelArgField.setText$S(displayTab.modelArgs.length > n ? displayTab.modelArgs[n] : "");
this.modelArgField.setBackground$java_awt_Color(this.modelArgField.getText$().endsWith$S(".xml") && $I$(21,"getResource$S",[this.modelArgField.getText$()]) == null   ? C$.RED : $I$(4).WHITE);
}} else if (n == 0 && node.getLaunchModelScroller$() != null  ) {
var scroller=node.getLaunchModelScroller$();
scroller.setBorder$javax_swing_border_Border(this.displayTitle);
this.displaySplitPane.setTopComponent$java_awt_Component(scroller);
} else {
this.displaySplitPane.setTopComponent$java_awt_Component(this.htmlScroller);
this.htmlPane.setContentType$S("text");
this.htmlPane.setText$S(null);
}this.displayBar.validate$();
var path=node.getClassPath$();
if (!path.equals$O(this.previousClassPath)) {
var success=this.getClassChooser$().setPath$S(path);
this.searchJarAction.setEnabled$Z(success);
this.searchJarForModelAction.setEnabled$Z(success);
}this.previousClassPath=node.getClassPath$();
this.jarField.setText$S(node.classPath);
this.jarField.setBackground$java_awt_Color(((node.classPath != null ) && !this.getClassChooser$().isLoaded$S(node.classPath) ) ? C$.RED : $I$(4).white);
this.classField.setText$S(node.launchClassName);
this.classField.setBackground$java_awt_Color(((node.getLaunchClass$() == null ) && (node.launchClassName != null ) ) ? C$.RED : $I$(4).white);
n=(this.argSpinner.getValue$()).intValue$();
if (node.args.length > n) {
this.argField.setText$S(node.args[n]);
} else {
this.argField.setText$S("");
}var xmlArg=this.argField.getText$().endsWith$S(".xml");
var res=null;
if (xmlArg) {
res=$I$(21,"getResource$S",[this.argField.getText$()]);
this.argField.setBackground$java_awt_Color((res == null ) ? C$.RED : $I$(4).white);
} else {
this.argField.setBackground$java_awt_Color($I$(4).white);
}var parent=node.getParent$();
this.singletonCheckBox.setEnabled$Z((parent == null ) || !parent.isSingleton$() );
this.singletonCheckBox.setSelected$Z(node.isSingleton$());
this.singleVMCheckBox.setSelected$Z(node.isSingleVM$());
if (node.isSingleVM$()) {
this.showLogCheckBox.setEnabled$Z((parent == null ) || !parent.isShowLog$() );
this.showLogCheckBox.setSelected$Z(node.isShowLog$());
this.clearLogCheckBox.setEnabled$Z((parent == null ) || !parent.isClearLog$() );
this.clearLogCheckBox.setSelected$Z(node.isClearLog$());
this.singleAppCheckBox.setEnabled$Z(true);
this.singleAppCheckBox.setSelected$Z(node.isSingleApp$());
} else {
this.showLogCheckBox.setEnabled$Z(false);
this.showLogCheckBox.setSelected$Z(false);
this.clearLogCheckBox.setEnabled$Z(false);
this.clearLogCheckBox.setSelected$Z(false);
this.singleAppCheckBox.setEnabled$Z(false);
this.singleAppCheckBox.setSelected$Z(false);
}this.levelDropDown.setVisible$Z(node.isShowLog$());
this.clearLogCheckBox.setVisible$Z(node.isShowLog$());
if (this.levelDropDown.isVisible$()) {
var useAll=(parent == null  || !parent.isShowLog$() );
this.levelDropDown.setEnabled$Z(false);
this.levelDropDown.removeAllItems$();
for (var i=0; i < $I$(11).levels.length; i++) {
if (useAll || parent != null  && ($I$(11).levels[i].intValue$() <= parent.getLogLevel$().intValue$())  ) {
this.levelDropDown.addItem$O($I$(11).levels[i]);
}}
this.levelDropDown.setSelectedItem$O(node.getLogLevel$());
this.levelDropDown.setEnabled$Z(true);
}this.authorField.setText$S(node.getAuthor$());
this.authorField.setBackground$java_awt_Color($I$(4).white);
this.keywordField.setText$S(node.keywords);
this.keywordField.setBackground$java_awt_Color($I$(4).white);
this.levelField.setText$S(node.level);
this.levelField.setBackground$java_awt_Color($I$(4).white);
this.languagesField.setText$S(node.languages);
this.languagesField.setBackground$java_awt_Color($I$(4).white);
this.commentPane.setText$S(node.comment);
this.commentPane.setBackground$java_awt_Color($I$(4).white);
var hasPW=(this.password != null ) && !this.password.equals$O("") ;
this.onLoadCheckBox.setEnabled$Z(hasPW);
this.onLoadCheckBox.setSelected$Z(hasPW && this.pwRequiredToLoad );
this.encryptCheckBox.setSelected$Z(this.password != null );
this.passwordEditor.setEnabled$Z(this.encryptCheckBox.isSelected$());
this.passwordLabel.setEnabled$Z(this.encryptCheckBox.isSelected$());
this.passwordEditor.setText$S(this.password);
this.passwordEditor.setBackground$java_awt_Color($I$(4).white);
}this.fileMenu.removeAll$();
this.fileMenu.add$javax_swing_JMenuItem(this.newItem);
if (this.undoManager.canReload$()) {
this.fileMenu.add$javax_swing_JMenuItem(this.backItem);
}this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.openItem);
if (this.openFromJarMenu != null ) {
this.fileMenu.add$javax_swing_JMenuItem(this.openFromJarMenu);
}var tab=this.getSelectedTab$();
if (tab != null  && !tab.getRootNode$().enabled ) {
this.fileMenu.add$javax_swing_JMenuItem(this.passwordItem);
}var isZipped=(this.jarBasePath != null ) && !this.jarBasePath.equals$O("") ;
this.saveAllItem.setEnabled$Z(!isZipped && this.isTabSetWritable$() );
if (tab != null ) {
if (rootEnabled) this.fileMenu.add$javax_swing_JMenuItem(this.importItem);
this.fileMenu.addSeparator$();
if (rootEnabled) this.fileMenu.add$javax_swing_JMenuItem(this.closeTabItem);
this.fileMenu.add$javax_swing_JMenuItem(this.closeAllItem);
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.previewItem);
if (rootEnabled) {
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.saveAllItem);
this.fileMenu.add$javax_swing_JMenuItem(this.saveSetAsItem);
if ($I$(7).getLaunchJarName$() != null ) {
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.saveJarItem);
}}var printMenu=Clazz.new_([$I$(23).getString$S("DrawingFrame.Print_menu_title")],$I$(22,1).c$$S);
var printFrameItem=Clazz.new_([$I$(23).getString$S("DrawingFrame.PrintFrame_menu_item")],$I$(24,1).c$$S);
var saveFrameAsEPSItem=Clazz.new_([$I$(23).getString$S("DrawingFrame.SaveFrameAsEPS_menu_item")],$I$(24,1).c$$S);
printMenu.add$javax_swing_JMenuItem(printFrameItem);
printMenu.add$javax_swing_JMenuItem(saveFrameAsEPSItem);
this.fileMenu.add$javax_swing_JMenuItem(printMenu);
printFrameItem.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(25).printComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame);
});
})()
), Clazz.new_(P$.LaunchBuilder$1.$init$,[this, null])));
saveFrameAsEPSItem.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(25).saveComponentAsEPS$java_awt_Component(this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.LaunchBuilder$2.$init$,[this, null])));
this.frame.getContentPane$().add$java_awt_Component$O(this.toolbar, "North");
tab.dataPanel.add$java_awt_Component$O(this.editorTabs, "Center");
if (this.getRootNode$().getChildCount$() == 0) {
this.getRootNode$().hiddenWhenRoot=false;
this.hideRootCheckBox.setEnabled$Z(false);
} else {
this.hideRootCheckBox.setEnabled$Z((node == null ) || !node.isButtonView$() );
}if (!rootEnabled) this.hideRootCheckBox.setEnabled$Z(false);
var rootVisible=!this.getRootNode$().hiddenWhenRoot;
this.hideRootCheckBox.setSelected$Z(!rootVisible);
tab.tree.setRootVisible$Z(rootVisible);
if ((this.getSelectedNode$() == null ) && !rootVisible ) {
tab.setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(this.getRootNode$().getChildAt$I(0));
}this.buttonViewCheckBox.setSelected$Z((node != null ) && node.isButtonView$() );
this.buttonViewCheckBox.setEnabled$Z(rootVisible && rootEnabled );
this.editorEnabledCheckBox.setSelected$Z(this.editorEnabled);
this.editorTabs.setEnabled$Z(rootEnabled);
this.nameField.setEnabled$Z(rootEnabled);
this.tooltipField.setEnabled$Z(rootEnabled);
this.descriptionPane.setEnabled$Z(rootEnabled);
this.pathField.setEnabled$Z(rootEnabled);
this.titleField.setEnabled$Z(rootEnabled);
this.displaySpinner.setEnabled$Z(rootEnabled);
this.openDisplayChooserButton.setEnabled$Z(rootEnabled);
this.titleLabel.setEnabled$Z(rootEnabled);
this.nameLabel.setEnabled$Z(rootEnabled);
this.tooltipLabel.setEnabled$Z(rootEnabled);
this.displayLabel.setEnabled$Z(rootEnabled);
this.pathLabel.setEnabled$Z(rootEnabled);
this.newTabButton.setEnabled$Z(rootEnabled);
this.addButton.setEnabled$Z(rootEnabled);
this.cutButton.setEnabled$Z(rootEnabled);
this.copyButton.setEnabled$Z(rootEnabled);
this.pasteButton.setEnabled$Z(rootEnabled);
this.moveUpButton.setEnabled$Z(rootEnabled);
this.moveDownButton.setEnabled$Z(rootEnabled);
this.tabTitleField.setEnabled$Z(rootEnabled);
this.htmlScroller.setEnabled$Z(rootEnabled);
this.showModelArgsButton.setEnabled$Z(rootEnabled);
this.displayTitle.setTitleColor$java_awt_Color(rootEnabled ? C$.enabledColor : C$.disabledColor);
this.descriptionTitle.setTitleColor$java_awt_Color(rootEnabled ? C$.enabledColor : C$.disabledColor);
} else {
this.frame.getContentPane$().remove$java_awt_Component(this.toolbar);
}if (this.exitItem != null ) {
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.exitItem);
}for (var k=0; k < this.tabbedPane.getTabCount$(); k++) {
root=this.getTab$I(k).getRootNode$();
if (root.getFileName$() != null ) {
this.tabbedPane.setIconAt$I$javax_swing_Icon(k, this.getFileIcon$org_opensourcephysics_tools_LaunchNode(root));
this.tabbedPane.setToolTipTextAt$I$S(k, $I$(13).getString$S("ToolTip.FileName") + " \"" + root.getFileName$() + "\"" );
} else {
this.tabbedPane.setIconAt$I$javax_swing_Icon(k, null);
this.tabbedPane.setToolTipTextAt$I$S(k, null);
}}
});

Clazz.newMeth(C$, 'createGUI$Z',  function (splash) {
$I$(9).wInit=600;
$I$(9).hInit=540;
this.labels=Clazz.new_($I$(2,1));
C$.superclazz.prototype.createGUI$Z.apply(this, [splash]);
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.LaunchBuilder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (e) {
$I$(7).setAuthorMode$Z(true);
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
$I$(7).setAuthorMode$Z(true);
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []) != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].htmlPane.setContentType$S("text");
this.b$['org.opensourcephysics.tools.LaunchBuilder'].htmlPane.setText$S(null);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(26,1),[this, null],P$.LaunchBuilder$3)));
this.tabbedPane.addComponentListener$java_awt_event_ComponentListener(((P$.LaunchBuilder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(27,1),[this, null],P$.LaunchBuilder$4)));
$I$(9).whiteFileIcon=$I$(9).loadIcon$S("whitefile.gif");
$I$(9).ghostFileIcon=$I$(9).loadIcon$S("ghostfile.gif");
$I$(9).redFileIcon=$I$(9).loadIcon$S("redfile.gif");
$I$(9).yellowFileIcon=$I$(9).loadIcon$S("yellowfile.gif");
$I$(9).redFolderIcon=$I$(9).loadIcon$S("redfolder.gif");
$I$(9).greenFolderIcon=$I$(9).loadIcon$S("greenfolder.gif");
$I$(9).yellowFolderIcon=$I$(9).loadIcon$S("yellowfolder.gif");
this.createActions$();
this.titleField=Clazz.new_($I$(28,1));
this.titleField.addKeyListener$java_awt_event_KeyListener(((P$.LaunchBuilder$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
var text=this.b$['org.opensourcephysics.tools.LaunchBuilder'].titleField.getText$();
if (text.equals$O("")) {
text=null;
}if (text != this.b$['org.opensourcephysics.tools.LaunchBuilder'].title) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].title=text;
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].titleField.setBackground$java_awt_Color($I$(4).yellow);
}});
})()
), Clazz.new_($I$(29,1),[this, null],P$.LaunchBuilder$5)));
this.titleField.addFocusListener$java_awt_event_FocusListener(((P$.LaunchBuilder$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var text=this.b$['org.opensourcephysics.tools.LaunchBuilder'].titleField.getText$();
if (text.equals$O("")) {
text=null;
}if (text != this.b$['org.opensourcephysics.tools.LaunchBuilder'].title) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].title=text;
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LaunchBuilder$6)));
this.nameField=Clazz.new_($I$(28,1));
this.nameField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.nameField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.tooltipField=Clazz.new_($I$(28,1));
this.tooltipField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.tooltipField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.displayTitle=$I$(19,"createTitledBorder$S",[$I$(13).getString$S("Label.DisplayPane")]);
this.classField=Clazz.new_($I$(28,1));
this.classField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.classField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.argField=Clazz.new_($I$(28,1));
this.argField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.argField.addMouseListener$java_awt_event_MouseListener(((P$.LaunchBuilder$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(7).isPopupTrigger$java_awt_event_InputEvent(e)) {
var control=Clazz.new_($I$(12,1));
if (control.read$S(this.b$['org.opensourcephysics.tools.LaunchBuilder'].argField.getText$()) != null ) {
var popup=Clazz.new_($I$(31,1));
var item=Clazz.new_([$I$(13).getString$S("MenuItem.EncryptionTool")],$I$(24,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tool=$I$(32).getTool$();
tool.open$S(this.b$['org.opensourcephysics.tools.LaunchBuilder'].argField.getText$());
tool.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LaunchBuilder$7$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LaunchBuilder'].argField, e.getX$(), e.getY$() + 8);
}}});
})()
), Clazz.new_($I$(33,1),[this, null],P$.LaunchBuilder$7)));
this.argField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.modelArgField=Clazz.new_($I$(28,1));
this.modelArgField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.modelArgField.addMouseListener$java_awt_event_MouseListener(((P$.LaunchBuilder$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(7).isPopupTrigger$java_awt_event_InputEvent(e)) {
var control=Clazz.new_($I$(12,1));
if (control.read$S(this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgField.getText$()) != null ) {
var popup=Clazz.new_($I$(31,1));
var item=Clazz.new_([$I$(13).getString$S("MenuItem.EncryptionTool")],$I$(24,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$8$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tool=$I$(32).getTool$();
tool.open$S(this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgField.getText$());
tool.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LaunchBuilder$8$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgField, e.getX$(), e.getY$() + 8);
}}});
})()
), Clazz.new_($I$(33,1),[this, null],P$.LaunchBuilder$8)));
this.modelArgField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.jarField=Clazz.new_($I$(28,1));
this.jarField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.jarField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.pathField=Clazz.new_($I$(28,1));
this.pathField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.pathField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.tabTitleField=Clazz.new_($I$(28,1));
this.tabTitleField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.tabTitleField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.keywordField=Clazz.new_($I$(28,1));
this.keywordField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.keywordField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.authorField=Clazz.new_($I$(28,1));
this.authorField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.authorField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.levelField=Clazz.new_($I$(28,1));
this.levelField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.levelField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.languagesField=Clazz.new_($I$(28,1));
this.languagesField.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.languagesField.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.commentPane=$I$(34).newJTextPane$();
this.commentPane.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.commentPane.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.commentScroller=Clazz.new_($I$(35,1).c$$java_awt_Component,[this.commentPane]);
this.commentTitle=$I$(19,"createTitledBorder$S",[$I$(13).getString$S("Label.Comments")]);
this.commentScroller.setBorder$javax_swing_border_Border(this.commentTitle);
this.descriptionPane=Clazz.new_($I$(36,1));
this.descriptionPane.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.descriptionPane.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.descriptionScroller=Clazz.new_($I$(35,1).c$$java_awt_Component,[this.descriptionPane]);
this.descriptionTitle=$I$(19,"createTitledBorder$S",[$I$(13).getString$S("Label.Description")]);
this.descriptionScroller.setBorder$javax_swing_border_Border(this.descriptionTitle);
this.displaySplitPane=((P$.LaunchBuilder$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSplitPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setDividerLocation$I',  function (loc) {
C$.superclazz.prototype.setDividerLocation$I.apply(this, [loc]);
var divider=this.getDividerLocation$();
divider/=this.getHeight$() - this.getDividerSize$();
this.setName$S("" + new Double(divider).toString());
});

Clazz.newMeth(C$, 'setTopComponent$java_awt_Component',  function (comp) {
if (comp === this.getTopComponent$() ) return;
var prev=this.getLastDividerLocation$();
var divider=this.getName$();
C$.superclazz.prototype.setTopComponent$java_awt_Component.apply(this, [comp]);
if (divider != null ) {
var loc=Double.parseDouble$S(divider);
loc=Math.max(0.0, loc);
loc=Math.min(1.0, loc);
this.setDividerLocation$D(loc);
this.setLastDividerLocation$I(prev);
$I$(20,"invokeLater$Runnable",[((P$.LaunchBuilder$9$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchBuilder$9$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var view=this.b$['org.opensourcephysics.tools.LaunchBuilder'].descriptionScroller.getViewport$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'].descriptionScroller, []);
view.setViewPosition$java_awt_Point.apply(view, [Clazz.new_($I$(37,1).c$$I$I,[0, 0])]);
});
})()
), Clazz.new_(P$.LaunchBuilder$9$lambda2.$init$,[this, null]))]);
}});
})()
), Clazz.new_($I$(38,1).c$$I,[this, null, 0],P$.LaunchBuilder$9));
this.displaySplitPane.setBottomComponent$java_awt_Component(this.descriptionScroller);
this.displaySplitPane.setOneTouchExpandable$Z(true);
this.displaySplitPane.setResizeWeight$D(1);
this.htmlPane=$I$(34).newJTextPane$();
this.htmlPane.setEditable$Z(false);
this.htmlScroller=Clazz.new_($I$(35,1).c$$java_awt_Component,[this.htmlPane]);
this.htmlScroller.setBorder$javax_swing_border_Border(this.displayTitle);
this.displaySplitPane.setTopComponent$java_awt_Component(this.htmlScroller);
this.hiddenCheckBox=Clazz.new_($I$(39,1));
this.hiddenCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.hiddenCheckBox.setContentAreaFilled$Z(false);
this.hiddenCheckBox.setAlignmentX$F(0.0);
this.buttonViewCheckBox=Clazz.new_($I$(39,1));
this.buttonViewCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.buttonViewCheckBox.setContentAreaFilled$Z(false);
this.buttonViewCheckBox.setAlignmentX$F(0.0);
var displayPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
var nameBar=Clazz.new_($I$(42,1));
nameBar.setFloatable$Z(false);
this.nameLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.nameLabel);
nameBar.add$java_awt_Component(this.nameLabel);
nameBar.add$java_awt_Component(this.nameField);
nameBar.add$java_awt_Component(this.hiddenCheckBox);
displayPanel.add$java_awt_Component$O(nameBar, "North");
var tooltipPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
displayPanel.add$java_awt_Component$O(tooltipPanel, "Center");
var tooltipBar=Clazz.new_($I$(42,1));
tooltipBar.setFloatable$Z(false);
this.tooltipLabel=Clazz.new_($I$(43,1));
tooltipBar.add$java_awt_Component(this.tooltipLabel);
tooltipBar.add$java_awt_Component(this.tooltipField);
tooltipPanel.add$java_awt_Component$O(tooltipBar, "North");
this.urlPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
tooltipPanel.add$java_awt_Component$O(this.urlPanel, "Center");
this.displayBar=Clazz.new_($I$(42,1));
this.displayBar.setFloatable$Z(false);
this.displayLabel=Clazz.new_($I$(43,1));
this.pathLabel=Clazz.new_($I$(43,1));
this.pathLabel.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.tabTitleLabel=Clazz.new_($I$(43,1));
this.tabTitleLabel.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.displaySpinnerModel=Clazz.new_($I$(44,1).c$$I$I$I$I,[0, 0, 1, 1]);
this.displaySpinner=Clazz.new_($I$(45,1).c$$javax_swing_SpinnerModel,[this.displaySpinnerModel]);
var editor=Clazz.new_($I$(46,1).c$$javax_swing_JSpinner,[this.displaySpinner]);
this.displaySpinner.setEditor$javax_swing_JComponent(editor);
this.displaySpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.LaunchBuilder$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].pathField.getBackground$() === $I$(4).yellow ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_(P$.LaunchBuilder$10.$init$,[this, null])));
this.displayBar.add$java_awt_Component(this.displayLabel);
this.displayBar.add$java_awt_Component(this.displaySpinner);
this.displayBar.add$java_awt_Component(this.pathLabel);
this.displayBar.add$java_awt_Component(this.pathField);
this.openDisplayChooserButton=Clazz.new_($I$(47,1).c$$javax_swing_Icon,[this.openIcon]);
this.openDisplayChooserButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var openPopup=Clazz.new_($I$(31,1));
openPopup.add$javax_swing_Action(this.b$['org.opensourcephysics.tools.LaunchBuilder'].openURLAction);
openPopup.add$javax_swing_Action(this.b$['org.opensourcephysics.tools.LaunchBuilder'].openPDFAction);
openPopup.add$javax_swing_Action(this.b$['org.opensourcephysics.tools.LaunchBuilder'].searchJarForModelAction);
openPopup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LaunchBuilder'].openDisplayChooserButton, 0, this.b$['org.opensourcephysics.tools.LaunchBuilder'].openDisplayChooserButton.getHeight$());
});
})()
), Clazz.new_(P$.LaunchBuilder$11.$init$,[this, null])));
this.displayBar.add$java_awt_Component(this.openDisplayChooserButton);
this.modelArgsDialog=Clazz.new_($I$(48,1).c$$java_awt_Frame$Z,[this.frame, true]);
var modelArgBar=Clazz.new_($I$(42,1));
modelArgBar.setFloatable$Z(false);
modelArgBar.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(6, 6, 6, 10));
this.modelArgLabel=Clazz.new_($I$(43,1));
this.modelArgLabel.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 0, 0, 3));
this.modelArgSpinner=Clazz.new_([Clazz.new_($I$(44,1).c$$I$I$I$I,[0, 0, C$.maxArgs - 1, 1])],$I$(45,1).c$$javax_swing_SpinnerModel);
editor=Clazz.new_($I$(46,1).c$$javax_swing_JSpinner,[this.modelArgSpinner]);
this.modelArgSpinner.setEditor$javax_swing_JComponent(editor);
this.modelArgSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.LaunchBuilder$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].argField.getBackground$() === $I$(4).yellow ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_(P$.LaunchBuilder$12.$init$,[this, null])));
modelArgBar.add$java_awt_Component(this.modelArgLabel);
modelArgBar.add$java_awt_Component(this.modelArgSpinner);
modelArgBar.add$java_awt_Component(this.modelArgField);
modelArgBar.add$javax_swing_Action(this.openModelArgAction);
this.modelArgCloseButton=Clazz.new_([$I$(13).getString$S("Dialog.Button.Close")],$I$(47,1).c$$S);
this.modelArgCloseButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgsDialog.setVisible$Z(false);
});
})()
), Clazz.new_(P$.LaunchBuilder$13.$init$,[this, null])));
this.modelArgClearButton=Clazz.new_([$I$(13).getString$S("Dialog.Button.Clear")],$I$(47,1).c$$S);
this.modelArgClearButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var n=(this.b$['org.opensourcephysics.tools.LaunchBuilder'].displaySpinner.getValue$()).intValue$();
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
var tab=node.getDisplayTab$I(n);
if (tab != null ) {
tab.setModelArgs$SA(Clazz.array(String, [0]));
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_(P$.LaunchBuilder$14.$init$,[this, null])));
var buttonPanel=Clazz.new_($I$(40,1));
buttonPanel.add$java_awt_Component(this.modelArgClearButton);
buttonPanel.add$java_awt_Component(this.modelArgCloseButton);
this.modelArgsDialog.add$java_awt_Component$O(modelArgBar, "Center");
this.modelArgsDialog.add$java_awt_Component$O(buttonPanel, "South");
this.modelArgsDialog.pack$();
var dim=this.modelArgsDialog.getSize$();
var w=Math.max(dim.width, 240);
this.modelArgsDialog.setSize$I$I(w, dim.height);
this.showModelArgsButton=Clazz.new_($I$(47,1));
this.showModelArgsButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p0=Clazz.new_($I$(49,1)).getLocation$();
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgsDialog.getLocation$().x == p0.x) this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgsDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.tools.LaunchBuilder'].showModelArgsButton);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgsDialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LaunchBuilder$15.$init$,[this, null])));
this.displayBar.add$java_awt_Component(this.tabTitleLabel);
this.displayBar.add$java_awt_Component(this.tabTitleField);
this.urlPanel.add$java_awt_Component$O(this.displayBar, "North");
this.urlPanel.add$java_awt_Component$O(this.displaySplitPane, "Center");
var launchPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
var jarBar=Clazz.new_($I$(42,1));
jarBar.setFloatable$Z(false);
this.jarLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.jarLabel);
jarBar.add$java_awt_Component(this.jarLabel);
jarBar.add$java_awt_Component(this.jarField);
jarBar.add$javax_swing_Action(this.openJarAction);
launchPanel.add$java_awt_Component$O(jarBar, "North");
var classPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
launchPanel.add$java_awt_Component$O(classPanel, "Center");
var classBar=Clazz.new_($I$(42,1));
classBar.setFloatable$Z(false);
this.classLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.classLabel);
classBar.add$java_awt_Component(this.classLabel);
classBar.add$java_awt_Component(this.classField);
classBar.add$javax_swing_Action(this.searchJarAction);
classPanel.add$java_awt_Component$O(classBar, "North");
var argPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
classPanel.add$java_awt_Component$O(argPanel, "Center");
var argBar=Clazz.new_($I$(42,1));
argBar.setFloatable$Z(false);
this.argLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.argLabel);
argBar.add$java_awt_Component(this.argLabel);
this.argSpinner=Clazz.new_([Clazz.new_($I$(44,1).c$$I$I$I$I,[0, 0, C$.maxArgs - 1, 1])],$I$(45,1).c$$javax_swing_SpinnerModel);
editor=Clazz.new_($I$(46,1).c$$javax_swing_JSpinner,[this.argSpinner]);
this.argSpinner.setEditor$javax_swing_JComponent(editor);
this.argSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.LaunchBuilder$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].argField.getBackground$() === $I$(4).yellow ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_(P$.LaunchBuilder$16.$init$,[this, null])));
argBar.add$java_awt_Component(this.argSpinner);
argBar.add$java_awt_Component(this.argField);
argBar.add$javax_swing_Action(this.openArgAction);
argPanel.add$java_awt_Component$O(argBar, "North");
var optionsPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
argPanel.add$java_awt_Component$O(optionsPanel, "Center");
var optionsBar=Clazz.new_($I$(42,1));
optionsBar.setFloatable$Z(false);
this.singleVMCheckBox=Clazz.new_($I$(39,1));
this.singleVMCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.singleVMCheckBox.setContentAreaFilled$Z(false);
this.singleVMCheckBox.setAlignmentX$F(0.0);
this.showLogCheckBox=Clazz.new_($I$(39,1));
this.showLogCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.showLogCheckBox.setContentAreaFilled$Z(false);
this.showLogCheckBox.setAlignmentX$F(0.0);
this.clearLogCheckBox=Clazz.new_($I$(39,1));
this.clearLogCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.clearLogCheckBox.setContentAreaFilled$Z(false);
this.clearLogCheckBox.setAlignmentX$F(0.0);
this.singletonCheckBox=Clazz.new_($I$(39,1));
this.singletonCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.singletonCheckBox.setContentAreaFilled$Z(false);
this.singletonCheckBox.setAlignmentX$F(0.0);
this.singleAppCheckBox=Clazz.new_($I$(39,1));
this.singleAppCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.singleAppCheckBox.setContentAreaFilled$Z(false);
this.singleAppCheckBox.setAlignmentX$F(0.0);
this.levelDropDown=Clazz.new_([$I$(11).levels],$I$(50,1).c$$OA);
this.levelDropDown.setMaximumSize$java_awt_Dimension(this.levelDropDown.getMinimumSize$());
this.levelDropDown.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].levelDropDown.isEnabled$()) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if (node != null ) {
node.setLogLevel$java_util_logging_Level(this.b$['org.opensourcephysics.tools.LaunchBuilder'].levelDropDown.getSelectedItem$());
}}});
})()
), Clazz.new_(P$.LaunchBuilder$17.$init$,[this, null])));
var checkBoxPanel=$I$(51).createVerticalBox$();
var bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.setAlignmentX$F(0.0);
bar.add$java_awt_Component(this.singletonCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
checkBoxPanel.add$java_awt_Component(bar);
bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.setAlignmentX$F(0.0);
bar.add$java_awt_Component(this.singleVMCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
checkBoxPanel.add$java_awt_Component(bar);
bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.setAlignmentX$F(0.0);
bar.add$java_awt_Component(this.singleAppCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
checkBoxPanel.add$java_awt_Component(bar);
bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.add$java_awt_Component(this.showLogCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalStrut$I(4));
bar.add$java_awt_Component(this.levelDropDown);
bar.add$java_awt_Component($I$(51).createHorizontalStrut$I(4));
bar.add$java_awt_Component(this.clearLogCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
bar.setAlignmentX$F(0.0);
checkBoxPanel.add$java_awt_Component(bar);
this.optionsTitle=$I$(19,"createTitledBorder$S",[$I$(13).getString$S("Label.Options")]);
var recess=$I$(19).createLoweredBevelBorder$();
optionsBar.setBorder$javax_swing_border_Border($I$(19).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(recess, this.optionsTitle));
optionsBar.add$java_awt_Component(checkBoxPanel);
optionsPanel.add$java_awt_Component$O(optionsBar, "North");
var authorPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
var authorBar=Clazz.new_($I$(42,1));
authorPanel.add$java_awt_Component$O(authorBar, "North");
authorBar.setFloatable$Z(false);
this.authorLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.authorLabel);
authorBar.add$java_awt_Component(this.authorLabel);
authorBar.add$java_awt_Component(this.authorField);
var keywordPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
authorPanel.add$java_awt_Component$O(keywordPanel, "Center");
var keywordBar=Clazz.new_($I$(42,1));
keywordPanel.add$java_awt_Component$O(keywordBar, "North");
keywordBar.setFloatable$Z(false);
this.keywordLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.keywordLabel);
keywordBar.add$java_awt_Component(this.keywordLabel);
keywordBar.add$java_awt_Component(this.keywordField);
var levelPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
keywordPanel.add$java_awt_Component$O(levelPanel, "Center");
var levelBar=Clazz.new_($I$(42,1));
levelPanel.add$java_awt_Component$O(levelBar, "North");
levelBar.setFloatable$Z(false);
this.levelLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.levelLabel);
levelBar.add$java_awt_Component(this.levelLabel);
levelBar.add$java_awt_Component(this.levelField);
var languagesPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
levelPanel.add$java_awt_Component$O(languagesPanel, "Center");
var languagesBar=Clazz.new_($I$(42,1));
languagesPanel.add$java_awt_Component$O(languagesBar, "North");
languagesBar.setFloatable$Z(false);
this.languagesLabel=Clazz.new_($I$(43,1));
this.labels.add$O(this.languagesLabel);
languagesBar.add$java_awt_Component(this.languagesLabel);
languagesBar.add$java_awt_Component(this.languagesField);
var securityPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(40,1).c$$java_awt_LayoutManager);
languagesPanel.add$java_awt_Component$O(securityPanel, "Center");
var securityBar=Clazz.new_($I$(42,1));
securityBar.setFloatable$Z(false);
securityPanel.add$java_awt_Component$O(securityBar, "North");
this.securityTitle=$I$(19,"createTitledBorder$S",[$I$(13).getString$S("Label.Security")]);
securityBar.setBorder$javax_swing_border_Border($I$(19).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(recess, this.securityTitle));
var securityBox=$I$(51).createVerticalBox$();
securityBar.add$java_awt_Component(securityBox);
bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.setAlignmentX$F(0.0);
this.editorEnabledCheckBox=Clazz.new_($I$(39,1));
this.editorEnabledCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.editorEnabledCheckBox.setContentAreaFilled$Z(false);
this.editorEnabledCheckBox.setAlignmentX$F(0.0);
bar.add$java_awt_Component(this.editorEnabledCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
securityBox.add$java_awt_Component(bar);
bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.setAlignmentX$F(0.0);
this.encryptCheckBox=Clazz.new_($I$(39,1));
this.encryptCheckBox.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].encryptCheckBox.isSelected$() && (this.b$['org.opensourcephysics.tools.LaunchBuilder'].password == null ) ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].password="";
} else if (!this.b$['org.opensourcephysics.tools.LaunchBuilder'].encryptCheckBox.isSelected$()) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].password=null;
}$I$(9,"log$S",[("Log.Message.ChangeEncrypted")]);
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_(P$.LaunchBuilder$18.$init$,[this, null])));
this.encryptCheckBox.setContentAreaFilled$Z(false);
bar.add$java_awt_Component(this.encryptCheckBox);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
securityBox.add$java_awt_Component(bar);
bar=Clazz.new_($I$(42,1));
bar.setFloatable$Z(false);
bar.setAlignmentX$F(0.0);
this.passwordLabel=Clazz.new_($I$(43,1));
this.passwordLabel.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
bar.add$java_awt_Component(this.passwordLabel);
this.passwordEditor=Clazz.new_($I$(28,1));
this.passwordEditor.addKeyListener$java_awt_event_KeyListener(((P$.LaunchBuilder$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
var text=this.b$['org.opensourcephysics.tools.LaunchBuilder'].passwordEditor.getText$();
if (text.equals$O("") && (!this.b$['org.opensourcephysics.tools.LaunchBuilder'].encryptCheckBox.isSelected$() || !this.b$['org.opensourcephysics.tools.LaunchBuilder'].encryptCheckBox.isEnabled$() ) ) {
text=null;
}if (text != this.b$['org.opensourcephysics.tools.LaunchBuilder'].password) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].password=text;
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].passwordEditor.setBackground$java_awt_Color($I$(4).yellow);
}});
})()
), Clazz.new_($I$(29,1),[this, null],P$.LaunchBuilder$19)));
bar.add$java_awt_Component(this.passwordEditor);
bar.add$java_awt_Component($I$(51).createHorizontalGlue$());
this.onLoadCheckBox=Clazz.new_($I$(39,1));
this.onLoadCheckBox.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].pwRequiredToLoad=this.b$['org.opensourcephysics.tools.LaunchBuilder'].onLoadCheckBox.isSelected$();
$I$(9,"log$S",[("Log.Message.ChangePWRequirement")]);
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_(P$.LaunchBuilder$20.$init$,[this, null])));
this.onLoadCheckBox.setContentAreaFilled$Z(false);
bar.add$java_awt_Component(this.onLoadCheckBox);
securityBox.add$java_awt_Component(bar);
securityPanel.add$java_awt_Component$O(this.commentScroller, "Center");
this.editorTabs=Clazz.new_($I$(52,1).c$$I,[1]);
this.editorTabs.addTab$S$java_awt_Component($I$(13).getString$S("Tab.Display"), displayPanel);
this.editorTabs.addTab$S$java_awt_Component($I$(13).getString$S("Tab.Launch"), launchPanel);
this.editorTabs.addTab$S$java_awt_Component($I$(13).getString$S("Tab.Author"), authorPanel);
this.toolbar=Clazz.new_($I$(42,1));
this.toolbar.setFloatable$Z(false);
this.toolbar.setRollover$Z(true);
this.toolbar.setBorder$javax_swing_border_Border($I$(19,"createLineBorder$java_awt_Color",[$I$(4).gray]));
this.frame.getContentPane$().add$java_awt_Component$O(this.toolbar, "North");
this.newTabButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.newTabAction]);
this.toolbar.add$java_awt_Component(this.newTabButton);
this.addButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.addAction]);
this.toolbar.add$java_awt_Component(this.addButton);
this.cutButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.cutAction]);
this.toolbar.add$java_awt_Component(this.cutButton);
this.copyButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.copyAction]);
this.toolbar.add$java_awt_Component(this.copyButton);
this.pasteButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.pasteAction]);
this.toolbar.add$java_awt_Component(this.pasteButton);
this.moveUpButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.moveUpAction]);
this.toolbar.add$java_awt_Component(this.moveUpButton);
this.moveDownButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.moveDownAction]);
this.toolbar.add$java_awt_Component(this.moveDownButton);
this.titleLabel=Clazz.new_([$I$(13).getString$S("Label.Title")],$I$(43,1).c$$S);
this.titleLabel.setBorder$javax_swing_border_Border($I$(19).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.toolbar.add$java_awt_Component(this.titleLabel);
this.toolbar.add$java_awt_Component(this.titleField);
this.toolbar.add$java_awt_Component(this.buttonViewCheckBox);
this.hideRootCheckBox=Clazz.new_($I$(39,1));
this.hideRootCheckBox.addActionListener$java_awt_event_ActionListener(this.changeAction);
this.hideRootCheckBox.setContentAreaFilled$Z(false);
this.toolbar.add$java_awt_Component(this.hideRootCheckBox);
var mask=$I$(53).getDefaultToolkit$().getMenuShortcutKeyMask$();
this.newItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.newTabSetAction]);
this.newItem.setAccelerator$javax_swing_KeyStroke($I$(54,"getKeyStroke$I$I",["N".$c(), mask]));
this.previewItem=Clazz.new_($I$(24,1));
this.previewItem.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var base=$I$(9).tabSetBasePath;
this.b$['org.opensourcephysics.tools.LaunchBuilder'].previewing=true;
var set=Clazz.new_($I$(15,1).c$$org_opensourcephysics_tools_Launcher$S,[this, null, this.b$['org.opensourcephysics.tools.LaunchBuilder'], this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName]);
var control=Clazz.new_($I$(12,1).c$$O,[set]);
control.setValue$S$O("filename", this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
var launcher=Clazz.new_([control.toXML$()],$I$(9,1).c$$S);
var node=this.b$['org.opensourcephysics.tools.LaunchBuilder'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
if (node != null ) {
launcher.setSelectedNode$S(node.getPathString$());
}var p=this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame.getLocation$();
launcher.frame.setLocation$I$I(p.x + 24, p.y + 24);
launcher.frame.setVisible$Z(true);
launcher.frame.setDefaultCloseOperation$I(2);
$I$(9).tabSetBasePath=base;
this.b$['org.opensourcephysics.tools.LaunchBuilder'].previewing=false;
launcher.password=this.b$['org.opensourcephysics.tools.LaunchBuilder'].password;
launcher.previewing=true;
launcher.spawner=this.b$['org.opensourcephysics.tools.LaunchBuilder'];
launcher.refreshGUI$();
});
})()
), Clazz.new_(P$.LaunchBuilder$21.$init$,[this, null])));
this.importItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.importAction]);
this.saveJarItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.saveJarAction]);
this.saveNodeItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.saveAction]);
this.saveNodeAsItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.saveAsAction]);
this.saveAllItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.saveAllAction]);
this.openTabItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.openTabAction]);
this.saveAllItem.setAccelerator$javax_swing_KeyStroke($I$(54,"getKeyStroke$I$I",["S".$c(), mask]));
this.saveSetAsItem=Clazz.new_($I$(24,1).c$$javax_swing_Action,[this.saveSetAsAction]);
this.toolsMenu=Clazz.new_($I$(22,1));
this.frame.getJMenuBar$().add$java_awt_Component$I(this.toolsMenu, 2);
this.encryptionToolItem=Clazz.new_($I$(24,1));
this.toolsMenu.add$javax_swing_JMenuItem(this.encryptionToolItem);
this.encryptionToolItem.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(32).getTool$().setVisible$Z(true);
});
})()
), Clazz.new_(P$.LaunchBuilder$22.$init$,[this, null])));
this.tabbedPane.removeMouseListener$java_awt_event_MouseListener(this.tabListener);
this.tabListener=((P$.LaunchBuilder$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].contentPane.getTopLevelAncestor$() !== this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame ) {
return;
}if ($I$(7).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=Clazz.new_($I$(31,1));
var item=Clazz.new_([$I$(13).getString$S("MenuItem.Close")],$I$(24,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$23$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$23$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].removeSelectedTab$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_(P$.LaunchBuilder$23$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
item=Clazz.new_([$I$(13).getString$S("Menu.File.SaveAs")],$I$(24,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$23$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$23$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).getRootNode$();
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].saveAs$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [node]) != null ) {
var i=this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.getSelectedIndex$();
this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.setTitleAt$I$S(i, node.toString());
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_(P$.LaunchBuilder$23$2.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
var i=this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.getSelectedIndex$();
if ((i > 0) || (i < this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.getTabCount$() - 1) ) {
popup.addSeparator$();
}if (i < this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.getTabCount$() - 1) {
item=Clazz.new_([$I$(13).getString$S("Popup.MenuItem.MoveUp")],$I$(24,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$23$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$23$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].move$I.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [this.$finals$.i + 1]);
});
})()
), Clazz.new_(P$.LaunchBuilder$23$3.$init$,[this, {i:i}])));
popup.add$javax_swing_JMenuItem(item);
}if (i > 0) {
item=Clazz.new_([$I$(13).getString$S("Popup.MenuItem.MoveDown")],$I$(24,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchBuilder$23$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$23$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].move$I.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [this.$finals$.i - 1]);
});
})()
), Clazz.new_(P$.LaunchBuilder$23$4.$init$,[this, {i:i}])));
popup.add$javax_swing_JMenuItem(item);
}popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane, e.getX$(), e.getY$() + 8);
}});
})()
), Clazz.new_($I$(33,1),[this, null],P$.LaunchBuilder$23));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(this.tabListener);
this.frame.pack$();
this.displaySplitPane.setDividerLocation$D(0.7);
});

Clazz.newMeth(C$, 'move$I',  function (newPos) {
var tab=this.getSelectedTab$();
var root=tab.getRootNode$();
C$.superclazz.prototype.removeSelectedTab$.apply(this, []);
this.tabbedPane.insertTab$S$javax_swing_Icon$java_awt_Component$S$I($I$(9,"getDisplayName$S",[root.getFileName$()]), null, tab, null, newPos);
this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
this.tabs.add$I$O(newPos, tab);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
var prev=this.displaySplitPane.getLastDividerLocation$();
var divider=this.displaySplitPane.getName$();
$I$(55).setFonts$O$I(this.displayTitle, level);
$I$(55).setFonts$O$I(this.commentTitle, level);
$I$(55).setFonts$O$I(this.descriptionTitle, level);
$I$(55).setFonts$O$I(this.optionsTitle, level);
$I$(55).setFonts$O$I(this.securityTitle, level);
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
if (divider != null ) {
$I$(20,"invokeLater$Runnable",[((P$.LaunchBuilder$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchBuilder$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var loc=Double.parseDouble$S(this.$finals$.divider);
loc=Math.max(0.0, loc);
loc=Math.min(1.0, loc);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].displaySplitPane.setDividerLocation$D.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'].displaySplitPane, [loc]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].displaySplitPane.setLastDividerLocation$I.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'].displaySplitPane, [this.$finals$.prev]);
});
})()
), Clazz.new_(P$.LaunchBuilder$lambda2.$init$,[this, {divider:divider,prev:prev}]))]);
}});

Clazz.newMeth(C$, 'createActions$',  function () {
this.openIcon=$I$(9).loadIcon$S("open.gif");
this.openJarAction=((P$.LaunchBuilder$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(56).getJARChooser$();
var result=chooser.showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
var newJar=$I$(8,"getRelativePath$S",[file.getPath$()]);
var jars=this.b$['org.opensourcephysics.tools.LaunchBuilder'].jarField.getText$();
if (jars.indexOf$S(newJar) > -1) {
newJar=null;
}if (!jars.equals$O("")) {
jars+=";";
}if (newJar != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].jarField.setText$S(jars + newJar);
}$I$(7).chooserDir=$I$(8,"getDirectoryPath$S",[file.getPath$()]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].searchJarAction.setEnabled$Z(true);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_($I$(57,1).c$$S$javax_swing_Icon,[this, null, null, this.openIcon],P$.LaunchBuilder$24));
this.searchJarAction=((P$.LaunchBuilder$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if ((node != null ) && this.b$['org.opensourcephysics.tools.Launcher'].getClassChooser$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).chooseClassFor$org_opensourcephysics_tools_LaunchNode(node) ) {
if (node.getOwner$() != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(node.getOwner$().getFileName$());
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshClones$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [node]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_($I$(57,1).c$$S$javax_swing_Icon,[this, null, null, this.openIcon],P$.LaunchBuilder$25));
this.searchJarAction.setEnabled$Z(false);
this.saveJarAction=((P$.LaunchBuilder$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var base=Clazz.new_([$I$(8,"getDirectoryPath$S",[$I$(7).getLaunchJarPath$()])],$I$(10,1).c$$S);
var jarName=$I$(8).stripExtension$S(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName) + ".jar";
var target=Clazz.new_($I$(10,1).c$$java_io_File$S,[base, jarName]);
var source=Clazz.new_($I$(2,1));
var jarChooser=Clazz.new_($I$(58,1).c$$java_awt_Frame$java_io_File,[this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame, base]);
source.add$O($I$(7).getLaunchJarName$());
base.listFiles$java_io_FileFilter(((P$.LaunchBuilder$26$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$26$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FileFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f.getName$().endsWith$S(".jar") || f.getName$().endsWith$S(".zip") || f.getName$().endsWith$S(".trz") || f.getName$().endsWith$S(".DS_Store") || f.getName$().endsWith$S(".localized") || f.getName$().endsWith$S(".tmp")  ) {
return false;
}this.$finals$.source.add$O(f.getName$());
return true;
});
})()
), Clazz.new_(P$.LaunchBuilder$26$1.$init$,[this, {source:source}])));
jarChooser.setSelectionRelativePaths$SA(source.toArray$OA(Clazz.array(String, [0])));
jarChooser.setVisible$Z(true);
var paths=jarChooser.getSelectionRelativePaths$();
if (paths == null ) {
return;
}source.clear$();
for (var i=0; i < paths.length; i++) {
if (paths[i].equals$O($I$(7).getLaunchJarName$())) {
source.add$I$O(0, paths[i]);
} else {
source.add$O(paths[i]);
}}
var manifest=$I$(59).createManifest$S$S("", "org.opensourcephysics.tools.Launcher");
$I$(59).alwaysOverwrite$();
$I$(59).setOwnerFrame$java_awt_Frame(this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame);
$I$(59).getInstance$().create$java_util_ArrayList$java_io_File$java_io_File$java_util_jar_Manifest(source, base, target, manifest);
});
})()
), Clazz.new_([this, null, $I$(13).getString$S("LaunchBuilder.Action.CreateJar.Name")],$I$(57,1).c$$S,P$.LaunchBuilder$26));
this.openArgAction=((P$.LaunchBuilder$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(56).getFileChooser$();
var result=chooser.showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
this.b$['org.opensourcephysics.tools.LaunchBuilder'].argField.setText$S($I$(8,"getRelativePath$S",[file.getPath$()]));
$I$(7).chooserDir=$I$(8,"getDirectoryPath$S",[file.getPath$()]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_($I$(57,1).c$$S$javax_swing_Icon,[this, null, null, this.openIcon],P$.LaunchBuilder$27));
this.openModelArgAction=((P$.LaunchBuilder$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(56).getFileChooser$();
var result=chooser.showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
this.b$['org.opensourcephysics.tools.LaunchBuilder'].modelArgField.setText$S($I$(8,"getRelativePath$S",[file.getPath$()]));
$I$(7).chooserDir=$I$(8,"getDirectoryPath$S",[file.getPath$()]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_($I$(57,1).c$$S$javax_swing_Icon,[this, null, null, this.openIcon],P$.LaunchBuilder$28));
this.openURLAction=((P$.LaunchBuilder$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(56).getHTMLChooser$();
var result=chooser.showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
this.b$['org.opensourcephysics.tools.LaunchBuilder'].pathField.setText$S($I$(8,"getRelativePath$S",[file.getPath$()]));
$I$(7).chooserDir=$I$(8,"getDirectoryPath$S",[file.getPath$()]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_([this, null, $I$(13).getString$S("Popup.MenuItem.OpenHTML")],$I$(57,1).c$$S,P$.LaunchBuilder$29));
this.openPDFAction=((P$.LaunchBuilder$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(56).getPDFChooser$();
var result=chooser.showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
this.b$['org.opensourcephysics.tools.LaunchBuilder'].pathField.setText$S($I$(8,"getRelativePath$S",[file.getPath$()]));
$I$(7).chooserDir=$I$(8,"getDirectoryPath$S",[file.getPath$()]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_([this, null, $I$(13).getString$S("Popup.MenuItem.OpenPDF")],$I$(57,1).c$$S,P$.LaunchBuilder$30));
this.searchJarForModelAction=((P$.LaunchBuilder$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var type=this.b$['org.opensourcephysics.tools.Launcher'].getClassChooser$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).chooseModel$S(this.b$['org.opensourcephysics.tools.LaunchBuilder'].pathField.getText$());
if (type != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].pathField.setText$S(type.getName$());
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_([this, null, $I$(13).getString$S("Popup.MenuItem.OpenModel")],$I$(57,1).c$$S,P$.LaunchBuilder$31));
this.searchJarForModelAction.setEnabled$Z(false);
this.openTabAction=((P$.LaunchBuilder$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
var tabName=node.toString();
for (var i=0; i < this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.getComponentCount$(); i++) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.getTitleAt$I(i).equals$O(tabName)) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabbedPane.setSelectedIndex$I(i);
return;
}}
var control=Clazz.new_($I$(12,1).c$$O,[node]);
var cloneControl=Clazz.new_($I$(12,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
var clone=cloneControl.loadObject$O(null);
clone.setFileName$S(node.getFileName$());
this.b$['org.opensourcephysics.tools.LaunchBuilder'].addTab$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [clone]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$32));
this.changeAction=((P$.LaunchBuilder$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$33));
this.newTabSetAction=((P$.LaunchBuilder$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prevArgs=this.b$['org.opensourcephysics.tools.LaunchBuilder'].undoManager.getLauncherState$();
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].removeAllTabs$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [])) {
if (prevArgs != null ) {
var edit=Clazz.new_($I$(16,1).c$$SA$SA,[this.b$['org.opensourcephysics.tools.LaunchBuilder'].undoManager, null, null, prevArgs]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}var root=Clazz.new_([$I$(13).getString$S("NewTab.Name")],$I$(60,1).c$$S);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].addTab$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [root]);
}});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$34));
this.addAction=((P$.LaunchBuilder$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var newNode=Clazz.new_([$I$(13).getString$S("NewNode.Name")],$I$(60,1).c$$S);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].addChildToSelectedNode$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [newNode]);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$35));
this.newTabAction=((P$.LaunchBuilder$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var root=Clazz.new_([$I$(13).getString$S("NewTab.Name")],$I$(60,1).c$$S);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].addTab$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [root]);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$36));
this.cutAction=((P$.LaunchBuilder$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].copyAction.actionPerformed$java_awt_event_ActionEvent(null);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].removeSelectedNodes$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$37));
this.copyAction=((P$.LaunchBuilder$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []) != null ) {
var nodes=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).getSelectedNodes$();
if (nodes != null ) {
$I$(7,"copy$S$java_awt_datatransfer_ClipboardOwner",[Clazz.new_([Clazz.new_($I$(1,1).c$$java_util_ArrayList,[nodes])],$I$(12,1).c$$O).toXML$(), null]);
}}});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$38));
this.pasteAction=((P$.LaunchBuilder$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7,"paste$java_util_function_Consumer",[((P$.LaunchBuilder$39$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchBuilder$39$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (dataString) /*block*/{
if (dataString != null ) {
var control=Clazz.new_($I$(12,1));
control.readXML$S.apply(control, [dataString]);
if (control.getObjectClass$.apply(control, []) === Clazz.getClass($I$(1)) ) {
var nodeSet=control.loadObject$O.apply(control, [null]);
for (var next, $next = nodeSet.nodes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var node=next[0];
if (next.length > 1 && next[1] != null  ) node.setFileName$S.apply(node, [next[1].toString.apply(next[1], [])]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].addChildToSelectedNode$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [node]);
}
}}});
})()
), Clazz.new_(P$.LaunchBuilder$39$lambda3.$init$,[this, null]))]);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$39));
this.importAction=((P$.LaunchBuilder$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9).getXMLChooser$().setFileFilter$javax_swing_filechooser_FileFilter($I$(9).xmlFileFilter);
var result=$I$(9).getXMLChooser$().showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=$I$(9).getXMLChooser$().getSelectedFile$();
var fileName=file.getAbsolutePath$();
$I$(7).chooserDir=$I$(8,"getDirectoryPath$S",[file.getPath$()]);
var control=Clazz.new_($I$(12,1).c$$java_io_File,[file]);
if (control.failedToRead$()) {
$I$(11,"info$S",[$I$(13).getString$S("Log.Message.InvalidXML") + " " + fileName ]);
$I$(14,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(13).getString$S("Dialog.InvalidXML.Message") + " \"" + $I$(8).getName$S(fileName) + "\"" , $I$(13).getString$S("Dialog.InvalidXML.Title"), 2]);
return;
}if (control.getObjectClass$() === Clazz.getClass($I$(60)) ) {
var child=control.loadObject$O(null);
child.setFileName$S(fileName);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].addChildToSelectedNode$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [child]);
} else {
$I$(11,"info$S",[$I$(13).getString$S("Log.Message.NotLauncherFile") + " " + fileName ]);
$I$(14,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(13).getString$S("Dialog.NotLauncherFile.Message") + " \"" + $I$(8).getName$S(fileName) + "\"" , $I$(13).getString$S("Dialog.NotLauncherFile.Title"), 2]);
}}});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$40));
this.saveAction=((P$.LaunchBuilder$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if (node.getFileName$() != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].save$org_opensourcephysics_tools_LaunchNode$S.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [node, node.getFileName$()]);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$41));
this.saveAsAction=((P$.LaunchBuilder$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
var parent=node.getParent$();
var fileName=this.b$['org.opensourcephysics.tools.LaunchBuilder'].saveAs$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [node]);
if (fileName != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].selfContained=false;
var en=node.pathFromAncestorEnumeration$javax_swing_tree_TreeNode(node.getRoot$());
while (en.hasMoreElements$()){
var next=en.nextElement$();
next.setSelfContained$Z(false);
next.parentSelfContained=false;
}
if (parent != null ) {
if (parent.getOwner$() != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(parent.getOwner$().getFileName$());
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshClones$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], [parent]);
}}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$42));
this.saveAllAction=((P$.LaunchBuilder$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName.equals$O($I$(13).getString$S("Tabset.Name.New"))) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].saveTabSetAs$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].saveTabSet$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
}this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$43));
this.saveSetAsAction=((P$.LaunchBuilder$44||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].saveTabSetAs$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$44));
this.moveUpAction=((P$.LaunchBuilder$45||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var nodes=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).getSelectedNodes$();
if (nodes == null ) return;
for (var node, $node = nodes.iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
var parent=node.getParent$();
if (parent == null ) {
continue;
}var i=parent.getIndex$javax_swing_tree_TreeNode(node);
if (i > 0 && !nodes.contains$O(parent.getChildBefore$javax_swing_tree_TreeNode(node)) ) {
this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(node, parent, i - 1);
if (parent.getOwner$() != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(parent.getOwner$().getFileName$());
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}}}
this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).setTreeSelectionPaths$java_util_ArrayList(nodes);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$45));
this.moveDownAction=((P$.LaunchBuilder$46||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var nodes=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).getSelectedNodes$();
if (nodes == null ) return;
for (var j=nodes.size$() - 1; j > -1; j--) {
var node=nodes.get$I(j);
var parent=node.getParent$();
if (parent == null ) {
continue;
}var i=parent.getIndex$javax_swing_tree_TreeNode(node);
var end=parent.getChildCount$();
if (i < end - 1 && !nodes.contains$O(parent.getChildAfter$javax_swing_tree_TreeNode(node)) ) {
this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(node, parent, i + 1);
if (parent.getOwner$() != null ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(parent.getOwner$().getFileName$());
} else {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].changedFiles.add$O(this.b$['org.opensourcephysics.tools.LaunchBuilder'].tabSetName);
}}}
this.b$['org.opensourcephysics.tools.Launcher'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).setTreeSelectionPaths$java_util_ArrayList(nodes);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(57,1),[this, null],P$.LaunchBuilder$46));
this.focusListener=((P$.LaunchBuilder$47||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LaunchBuilder$47));
this.keyListener=((P$.LaunchBuilder$48||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var comp=e.getSource$();
if ((e.getKeyCode$() == 10) && (((comp !== this.b$['org.opensourcephysics.tools.LaunchBuilder'].descriptionPane ) && (comp !== this.b$['org.opensourcephysics.tools.LaunchBuilder'].commentPane ) ) || e.isControlDown$() || e.isShiftDown$()  ) ) {
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
this.b$['org.opensourcephysics.tools.LaunchBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'], []);
} else {
comp.setBackground$java_awt_Color($I$(4).yellow);
}});
})()
), Clazz.new_($I$(29,1),[this, null],P$.LaunchBuilder$48));
});

Clazz.newMeth(C$, 'removeSelectedNode$',  function () {
var node=this.getSelectedNode$();
if ((node == null ) || (node.getParent$() == null ) ) {
return;
}var parent=node.getParent$();
this.getSelectedTab$().treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
this.getSelectedTab$().setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(parent);
if (parent.getOwner$() != null ) {
this.changedFiles.add$O(parent.getOwner$().getFileName$());
} else {
this.changedFiles.add$O(this.tabSetName);
}this.refreshClones$org_opensourcephysics_tools_LaunchNode(parent);
this.refreshGUI$();
});

Clazz.newMeth(C$, 'removeSelectedNodes$',  function () {
if (this.getSelectedTab$() == null ) return;
var nodes=this.getSelectedTab$().getSelectedNodes$();
if (nodes == null ) return;
var toSelect=null;
for (var node, $node = nodes.iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if ((node.getParent$() == null ) || node.getRoot$() !== this.getRootNode$()  ) {
continue;
}var parent=node.getParent$();
if (toSelect == null ) toSelect=parent;
this.getSelectedTab$().treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
if (parent.getOwner$() != null ) {
this.changedFiles.add$O(parent.getOwner$().getFileName$());
} else {
this.changedFiles.add$O(this.tabSetName);
}this.refreshClones$org_opensourcephysics_tools_LaunchNode(parent);
}
if (toSelect != null ) {
this.getSelectedTab$().setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(toSelect);
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'addChildToSelectedNode$org_opensourcephysics_tools_LaunchNode',  function (child) {
var parent=this.getSelectedNode$();
if ((parent != null ) && (child != null ) ) {
var nodes=child.getAllOwnedNodes$();
for (var i=0; i < nodes.length; i++) {
var node=this.getSelectedTab$().getClone$org_opensourcephysics_tools_LaunchNode(nodes[i]);
if (node != null ) {
this.getSelectedTab$().setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(node);
$I$(14,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(13).getString$S("Dialog.DuplicateNode.Message") + " \"" + node + "\"" , $I$(13).getString$S("Dialog.DuplicateNode.Title"), 2]);
return;
}}
this.getSelectedTab$().treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(child, parent, parent.getChildCount$());
this.getSelectedTab$().tree.scrollPathToVisible$javax_swing_tree_TreePath(Clazz.new_([child.getPath$()],$I$(61,1).c$$OA));
child.setLaunchClass$S(child.launchClassName);
if (parent.getOwner$() != null ) {
this.changedFiles.add$O(parent.getOwner$().getFileName$());
} else {
this.changedFiles.add$O(this.tabSetName);
}this.refreshClones$org_opensourcephysics_tools_LaunchNode(parent);
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'refreshClones$org_opensourcephysics_tools_LaunchNode',  function (node) {
var clones=this.getClones$org_opensourcephysics_tools_LaunchNode(node);
this.replaceClones$org_opensourcephysics_tools_LaunchNode$java_util_Map(node, clones);
});

Clazz.newMeth(C$, 'replaceClones$org_opensourcephysics_tools_LaunchNode$java_util_Map',  function (node, clones) {
if (clones.isEmpty$()) {
return;
}var control=Clazz.new_([node.getOwner$()],$I$(12,1).c$$O);
var it=clones.keySet$().iterator$();
while (it.hasNext$()){
var tab=it.next$();
var clone=clones.get$O(tab);
var parent=clone.getParent$();
var expanded=tab.tree.isExpanded$javax_swing_tree_TreePath(Clazz.new_([clone.getPath$()],$I$(61,1).c$$OA));
if (parent != null ) {
var index=parent.getIndex$javax_swing_tree_TreeNode(clone);
tab.treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(clone);
clone=Clazz.new_($I$(12,1).c$$org_opensourcephysics_controls_XMLControl,[control]).loadObject$O(null);
clone.setFileName$S(node.getFileName$());
tab.treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(clone, parent, index);
} else {
clone=Clazz.new_($I$(12,1).c$$org_opensourcephysics_controls_XMLControl,[control]).loadObject$O(null);
clone.setFileName$S(node.getFileName$());
tab.treeModel.setRoot$javax_swing_tree_TreeNode(clone);
}if (expanded) {
tab.tree.expandPath$javax_swing_tree_TreePath(Clazz.new_([clone.getPath$()],$I$(61,1).c$$OA));
}}
});

Clazz.newMeth(C$, 'getClones$org_opensourcephysics_tools_LaunchNode',  function (node) {
var clones=Clazz.new_($I$(62,1));
node=node.getOwner$();
if (node == null ) {
return clones;
}var tabs=this.tabbedPane.getComponents$();
for (var i=0; i < tabs.length; i++) {
var tab=tabs[i];
var clone=tab.getClone$org_opensourcephysics_tools_LaunchNode(node);
if ((clone != null ) && (clone !== node ) ) {
clones.put$O$O(tab, clone);
}}
return clones;
});

Clazz.newMeth(C$, 'getJARChooser$',  function () {
C$.getFileChooser$().setFileFilter$javax_swing_filechooser_FileFilter(C$.jarFileFilter);
return C$.fileChooser;
}, 1);

Clazz.newMeth(C$, 'getHTMLChooser$',  function () {
C$.getFileChooser$().setFileFilter$javax_swing_filechooser_FileFilter(C$.htmlFileFilter);
return C$.fileChooser;
}, 1);

Clazz.newMeth(C$, 'getPDFChooser$',  function () {
C$.getFileChooser$().setFileFilter$javax_swing_filechooser_FileFilter(C$.pdfFileFilter);
return C$.fileChooser;
}, 1);

Clazz.newMeth(C$, 'getFileChooser$',  function () {
if (C$.fileChooser == null ) {
C$.fileChooser=Clazz.new_([Clazz.new_([$I$(7).chooserDir],$I$(10,1).c$$S)],$I$(63,1).c$$java_io_File);
C$.allFileFilter=C$.fileChooser.getFileFilter$();
C$.jarFileFilter=((P$.LaunchBuilder$49||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

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
}if ((extension != null ) && extension.equals$O("jar") ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(13).getString$S("FileChooser.JarFilter.Description");
});
})()
), Clazz.new_($I$(64,1),[this, null],P$.LaunchBuilder$49));
C$.htmlFileFilter=((P$.LaunchBuilder$50||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

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
}if ((extension != null ) && (extension.equals$O("htm") || extension.equals$O("html") ) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(13).getString$S("FileChooser.HTMLFilter.Description");
});
})()
), Clazz.new_($I$(64,1),[this, null],P$.LaunchBuilder$50));
C$.pdfFileFilter=((P$.LaunchBuilder$51||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchBuilder$51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
if (f.isDirectory$()) return true;
var extension=$I$(8,"getExtension$S",[f.getName$()]);
return (extension != null  && extension.equals$O("pdf") );
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(13).getString$S("FileChooser.PDFFilter.Description");
});
})()
), Clazz.new_($I$(64,1),[this, null],P$.LaunchBuilder$51));
}C$.fileChooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.jarFileFilter);
C$.fileChooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.htmlFileFilter);
C$.fileChooser.setFileFilter$javax_swing_filechooser_FileFilter(C$.allFileFilter);
$I$(55,"setFonts$O$I",[C$.fileChooser, $I$(55).getLevel$()]);
return C$.fileChooser;
}, 1);

Clazz.newMeth(C$, 'getHTMLFilter$',  function () {
if (C$.htmlFileFilter == null ) {
C$.getFileChooser$();
}return C$.htmlFileFilter;
}, 1);

Clazz.newMeth(C$, 'getPDFFilter$',  function () {
if (C$.pdfFileFilter == null ) {
C$.getFileChooser$();
}return C$.pdfFileFilter;
}, 1);

Clazz.newMeth(C$, 'handleMousePressed$java_awt_event_MouseEvent$org_opensourcephysics_tools_LaunchPanel',  function (e, tab) {
C$.superclazz.prototype.handleMousePressed$java_awt_event_MouseEvent$org_opensourcephysics_tools_LaunchPanel.apply(this, [e, tab]);
if ($I$(7).isPopupTrigger$java_awt_event_InputEvent(e)) {
var path=tab.tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}var node=this.getSelectedNode$();
if (node == null ) {
return;
}var fileName=node.getFileName$();
if ((fileName != null ) && this.changedFiles.contains$O(fileName) ) {
if (this.popup.getComponentCount$() != 0) {
this.popup.addSeparator$();
}this.popup.add$javax_swing_JMenuItem(this.saveNodeItem);
}if (this.popup.getComponentCount$() != 0) {
this.popup.addSeparator$();
}this.popup.add$javax_swing_JMenuItem(this.saveNodeAsItem);
if (!node.isRoot$()) {
this.popup.addSeparator$();
this.openTabItem.setText$S($I$(13).getString$S("Action.OpenTab"));
this.popup.add$javax_swing_JMenuItem(this.openTabItem);
}this.popup.show$java_awt_Component$I$I(tab, e.getX$() + 4, e.getY$() + 12);
}});

Clazz.newMeth(C$, 'exit$',  function () {
$I$(7).setAuthorMode$Z(false);
if (!this.saveAllChanges$()) {
var op=this.frame.getDefaultCloseOperation$();
this.frame.setDefaultCloseOperation$I(0);
$I$(20,"invokeLater$Runnable",[((P$.LaunchBuilder$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchBuilder$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.tools.LaunchBuilder'].frame, [this.$finals$.op]);
});
})()
), Clazz.new_(P$.LaunchBuilder$lambda3.$init$,[this, {op:op}]))]);
return;
}C$.superclazz.prototype.exit$.apply(this, []);
});

Clazz.newMeth(C$, 'isTabSetWritable$',  function () {
var path=$I$(8,"getResolvedPath$S$S",[this.tabSetName, $I$(9).tabSetBasePath]);
var res=$I$(21).getResource$S(path);
var file=(res == null ) ? null : res.getFile$();
var writable=(file == null ) ? true : file.canWrite$();
if (!this.selfContained) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var root=this.getTab$I(i).getRootNode$();
writable=writable && this.isNodeWritable$org_opensourcephysics_tools_LaunchNode(root) ;
}
}return writable;
});

Clazz.newMeth(C$, 'isNodeWritable$org_opensourcephysics_tools_LaunchNode',  function (node) {
var file=node.getFile$();
var writable=(file == null ) ? true : file.canWrite$();
if (!node.isSelfContained$()) {
var nodes=node.getChildOwnedNodes$();
for (var i=0; i < nodes.length; i++) {
writable=writable && this.isNodeWritable$org_opensourcephysics_tools_LaunchNode(nodes[i]) ;
}
}return writable;
});

C$.$static$=function(){C$.$static$=0;
C$.RED=Clazz.new_($I$(4,1).c$$I$I$I,[255, 102, 102]);
C$.maxArgs=4;
{
C$.enabledColor=$I$(5).getColor$O("Label.foreground");
if (C$.enabledColor == null ) C$.enabledColor=$I$(4).BLACK;
C$.disabledColor=$I$(5).getColor$O("Label.disabledForeground");
if (C$.disabledColor == null ) C$.disabledColor=$I$(5).getColor$O("Label.disabledText");
if (C$.disabledColor == null ) C$.disabledColor=$I$(4).LIGHT_GRAY;
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchBuilder, "NodeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nodes','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList',  function (list) {
;C$.$init$.apply(this);
this.nodes=Clazz.new_($I$(2,1));
for (var next, $next = list.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var data=Clazz.array(java.lang.Object, -1, [next, next.getFileName$()]);
this.nodes.add$O(data);
}
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
;C$.$init$.apply(this);
this.nodes=Clazz.new_($I$(2,1));
var input=control.getObject$S("nodes");
if (input != null ) {
for (var next, $next = input.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.nodes.add$O(next);
}
}}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchBuilder.NodeSet, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var nodeSet=obj;
control.setValue$S$O("nodes", nodeSet.nodes);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
