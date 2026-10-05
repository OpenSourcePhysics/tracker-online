(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.Launcher','org.opensourcephysics.tools.LaunchRes','org.opensourcephysics.controls.XML','java.util.Collection','java.util.ArrayList','javax.swing.SwingUtilities','java.awt.Toolkit','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.display.OSPRuntime','javax.swing.JPopupMenu','javax.swing.JMenuItem','java.awt.event.MouseAdapter','javax.swing.text.html.HTMLEditorKit','javax.swing.JScrollPane','java.util.HashSet','javax.swing.Box',['org.opensourcephysics.tools.Launcher','.LaunchSet'],'Runtime','Thread','org.opensourcephysics.tools.FontSizer','java.net.URL',['org.opensourcephysics.tools.Launcher','.HTMLPane'],'org.opensourcephysics.controls.XMLControlElement','javax.swing.JOptionPane','java.awt.Color','org.opensourcephysics.tools.LaunchNode','org.opensourcephysics.tools.LaunchPanel',['org.opensourcephysics.tools.Launcher','.LaunchRenderer'],'java.awt.event.ComponentAdapter','javax.swing.JPanel',['org.opensourcephysics.tools.LauncherUndo','.LoadEdit'],'javax.swing.AbstractAction','javax.swing.JButton','javax.swing.JMenu','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.PrintUtils','java.awt.Frame','org.opensourcephysics.tools.LauncherUndo','javax.swing.undo.UndoableEditSupport',['org.opensourcephysics.tools.Launcher','.LauncherFrame'],'javax.swing.JDialog','java.awt.Dimension','org.opensourcephysics.controls.XMLTableInspector','java.awt.BorderLayout','javax.swing.JToolBar','javax.swing.BorderFactory','java.lang.management.ManagementFactory','java.awt.Component','javax.swing.JTextPane','javax.swing.JTabbedPane',['org.opensourcephysics.tools.LauncherUndo','.NavEdit'],'javax.swing.JMenuBar','javax.swing.KeyStroke','org.opensourcephysics.controls.Password','org.opensourcephysics.tools.LaunchBuilder','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.UIManager','org.opensourcephysics.controls.XMLTreePanel','org.opensourcephysics.tools.Diagnostics','java.awt.event.WindowAdapter','javax.swing.JFrame','org.opensourcephysics.tools.EjsTool',['javax.swing.event.HyperlinkEvent','.EventType'],'java.io.File','org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.controls.Cryptic','org.opensourcephysics.tools.LaunchClassChooser','javax.swing.JLabel','javax.swing.Timer','java.util.Vector','java.io.BufferedInputStream','StringBuffer','javax.swing.filechooser.FileFilter','javax.swing.JFileChooser','org.opensourcephysics.controls.XMLTable',['org.opensourcephysics.tools.Launcher','.FrameCloser'],'org.opensourcephysics.display.ResizableIcon']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Launcher", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LauncherFrame',1],['LaunchRenderer',2],['LaunchSet',1],['FrameCloser',8],['HTMLPane',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.canExit=true;
this.divider=160;
this.popupEnabled=true;
this.postEdits=true;
this.navigationVisible=true;
this.navSpacer=$I$(18).createHorizontalGlue$();
this.showText=true;
this.htmlTabList=Clazz.new_($I$(6,1));
this.popup=Clazz.new_($I$(12,1));
this.openPaths=Clazz.new_($I$(17,1));
this.previewing=false;
this.editorEnabled=true;
this.changedFiles=Clazz.new_($I$(17,1));
this.newNodeSelected=false;
this.selfContained=false;
this.jarBasePath=null;
this.tabs=Clazz.new_($I$(6,1));
this.saveState=true;
},1);

C$.$fields$=[['Z',['canExit','popupEnabled','postEdits','navigationVisible','showText','previewing','editorEnabled','newNodeSelected','selfContained','pwRequiredToLoad','saveState'],'I',['divider','xsetMemorySize'],'S',['tabSetName','jarBasePath','title','password','lookAndFeel','selectedPath'],'O',['xmlInspector','javax.swing.JDialog','+tableInspector','frame','org.opensourcephysics.tools.Launcher.LauncherFrame','contentPane','javax.swing.JPanel','tabbedPane','javax.swing.JTabbedPane','navbar','javax.swing.JToolBar','navButton','javax.swing.JButton','+backButton','+forwardButton','navSpacer','java.awt.Component','navbarAddOns','java.awt.Component[]','singleAppItem','javax.swing.JMenuItem','selectedNode','org.opensourcephysics.tools.LaunchNode','+previousNode','textPane','javax.swing.JTextPane','textScroller','javax.swing.JScrollPane','htmlTabList','java.util.ArrayList','fileMenu','javax.swing.JMenu','+displayMenu','+helpMenu','openItem','javax.swing.JMenuItem','openFromJarMenu','javax.swing.JMenu','passwordItem','javax.swing.JMenuItem','+closeTabItem','+closeAllItem','+editItem','+exitItem','+inspectItem','+hideItem','+backItem','languageMenu','javax.swing.JMenu','sizeUpItem','javax.swing.JMenuItem','+sizeDownItem','lookFeelMenu','javax.swing.JMenu','specificLFGroup','javax.swing.ButtonGroup','+genericLFGroup','javaLFItem','javax.swing.JMenuItem','+systemLFItem','+defaultLFItem','+lookFeelItem','+logItem','+aboutItem','+authorInfoItem','diagnosticMenu','javax.swing.JMenu','languageItems','javax.swing.JMenuItem[]','classChooser','org.opensourcephysics.tools.LaunchClassChooser','popup','javax.swing.JPopupMenu','openPaths','java.util.Set','spawner','org.opensourcephysics.tools.Launcher','changedFiles','java.util.Set','tabListener','java.awt.event.MouseListener','tabs','java.util.ArrayList','undoManager','org.opensourcephysics.tools.LauncherUndo','undoSupport','javax.swing.undo.UndoableEditSupport','linkListener','javax.swing.event.HyperlinkListener','expansions','java.util.Collection[]','memoryButton','javax.swing.JButton']]
,['Z',['singleAppMode','newVMAllowed'],'F',['baseMenuFontSize'],'I',['wInit','hInit'],'S',['defaultFileName','resourcesPath','classPath','tabSetBasePath','releaseDate'],'O',['defaultIcon','org.opensourcephysics.display.ResizableIcon','mainLauncher','org.opensourcephysics.tools.Launcher','chooser','javax.swing.JFileChooser','xmlFileFilter','javax.swing.filechooser.FileFilter','+xsetFileFilter','+launcherFileFilter','splashDialog','javax.swing.JDialog','creditsLabel','javax.swing.JLabel','+splashTitleLabel','+splashPathLabel','splashTimer','javax.swing.Timer','launchIcon','org.opensourcephysics.display.ResizableIcon','+launchedIcon','+singletonIcon','+whiteFolderIcon','+redFileIcon','+greenFileIcon','+magentaFileIcon','+yellowFileIcon','+whiteFileIcon','+noFileIcon','+ghostFileIcon','+redFolderIcon','+greenFolderIcon','+yellowFolderIcon','+linkIcon','+htmlIcon','+launchEmptyIcon','+ejsIcon','+navOpenIcon','+navClosedIcon','+backIcon','+forwardIcon','+backDisabledIcon','+forwardDisabledIcon','frameFinder','javax.swing.Timer','existingFrames','java.util.ArrayList','extractExtensions','String[]','passwords','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (splash) {
;C$.$init$.apply(this);
this.createGUI$Z(splash);
$I$(4,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(19)), Clazz.new_($I$(19,1),[this, null])]);
if (!$I$(11).isJS && !$I$(11).isApplet ) {
var launchRunner=((P$.Launcher$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(11).isVista$() || $I$(11).isLinux$() ) {
return;
}try {
var proc=$I$(20).getRuntime$().exec$S("java");
$I$(2).newVMAllowed=true;
proc.destroy$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Launcher$1.$init$,[this, null]));
try {
var thread=Clazz.new_($I$(21,1).c$$Runnable,[launchRunner]);
thread.start$();
if (!$I$(11).isJS) thread.join$J(5000);
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
} else {
throw ex;
}
}
}if ($I$(22).getLevel$() != 0) {
this.setFontLevel$I($I$(22).getLevel$());
} else {
this.refreshStringResources$();
this.refreshGUI$();
}var dim=$I$(8).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.frame.getBounds$().width)/2|0);
var y=((dim.height - this.frame.getBounds$().height)/2|0);
this.frame.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fileName) {
C$.c$$S$Z.apply(this, [fileName, (fileName == null ) || !fileName.startsWith$S("<?xml") ]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (help_path, splash) {
C$.c$$S$Z$javax_swing_JPanel.apply(this, [help_path, splash, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$javax_swing_JPanel',  function (fileName, splash, contentPane) {
;C$.$init$.apply(this);
this.contentPane=contentPane;
this.createGUI$Z(splash);
$I$(4,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(19)), Clazz.new_($I$(19,1),[this, null])]);
var path=null;
if (fileName == null ) {
if ($I$(11).getLaunchJarName$() != null ) {
fileName=$I$(4,"stripExtension$S",[$I$(11).getLaunchJarName$()]) + ".xset";
path=this.open$S(fileName);
}if (path == null ) {
fileName=C$.defaultFileName + ".xset";
path=this.open$S(fileName);
}if (path == null ) {
fileName=C$.defaultFileName + ".xml";
path=this.open$S(fileName);
}} else {
path=this.open$S(fileName);
}if ($I$(22).getLevel$() != 0) {
this.setFontLevel$I($I$(22).getLevel$());
} else {
this.refreshStringResources$();
this.refreshGUI$();
}if (this.frame == null ) {
} else {
var dim=$I$(8).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.frame.getBounds$().width)/2|0);
var y=((dim.height - this.frame.getBounds$().height)/2|0);
this.frame.setLocation$I$I(x, y);
}}, 1);

Clazz.newMeth(C$, 'setCanExit$Z',  function (_can) {
this.canExit=_can;
});

Clazz.newMeth(C$, 'getContentPane$',  function () {
return this.contentPane;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return (this.frame == null  ? this.contentPane.getPreferredSize$() : this.contentPane.getSize$());
});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (dim) {
this.contentPane.setPreferredSize$java_awt_Dimension(dim);
if (this.frame == null ) {
} else {
this.frame.pack$();
}});

Clazz.newMeth(C$, 'getDivider$',  function () {
return this.divider;
});

Clazz.newMeth(C$, 'setDivider$I',  function (loc) {
this.divider=loc;
this.refreshGUI$();
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.frame.isVisible$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.frame.setVisible$Z(visible);
});

Clazz.newMeth(C$, 'setNavigationVisible$Z',  function (vis) {
this.navigationVisible=vis;
var node=this.getSelectedNode$();
if ((node != null ) && node.isButtonView$() ) {
this.showButtonView$org_opensourcephysics_tools_LaunchNode(node);
} else {
this.showTabbedPaneView$();
}});

Clazz.newMeth(C$, 'clearHistory$',  function () {
this.undoManager.discardAllEdits$();
this.backButton.setEnabled$Z(false);
this.forwardButton.setEnabled$Z(false);
});

Clazz.newMeth(C$, 'setEditorEnabled$Z',  function (enabled) {
this.editorEnabled=enabled;
});

Clazz.newMeth(C$, 'setHyperlinksEnabled$Z',  function (enabled) {
for (var i=0; i < this.getTabCount$(); i++) {
var tab=this.getTab$I(i);
var e=tab.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
this.setHyperlinksEnabled$org_opensourcephysics_tools_LaunchNode$Z(next, enabled);
}
}
});

Clazz.newMeth(C$, 'setHyperlinksEnabled$org_opensourcephysics_tools_LaunchNode$Z',  function (node, enabled) {
for (var i=0; i < node.getDisplayTabCount$(); i++) {
var html=node.getDisplayTab$I(i);
html.hyperlinksEnabled=enabled;
}
});

Clazz.newMeth(C$, 'getSelectedTab$',  function () {
return this.tabbedPane.getSelectedComponent$();
});

Clazz.newMeth(C$, 'setSelectedTab$S',  function (path) {
if (path == null ) {
return null;
}var rootName=path;
var n=path.indexOf$S("/");
if (n > -1) {
rootName=path.substring$I$I(0, n);
}for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var tab=this.getTab$I(i);
if (rootName.equals$O(tab.getRootNode$().name)) {
tab.isSelectingNode=true;
this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
tab.isSelectingNode=false;
return tab;
}}
return null;
});

Clazz.newMeth(C$, 'setSelectedTab$org_opensourcephysics_tools_LaunchPanel',  function (tab) {
this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
return (tab === this.tabbedPane.getSelectedComponent$() ) ? tab : null;
});

Clazz.newMeth(C$, 'getSelectedNode$',  function () {
if (this.getSelectedTab$() == null ) {
this.selectedNode=null;
} else {
this.selectedNode=this.getSelectedTab$().getSelectedNode$();
}return this.selectedNode;
});

Clazz.newMeth(C$, 'setSelectedNode$S',  function (path) {
return this.setSelectedNode$S$I$java_net_URL(path, 0, null);
});

Clazz.newMeth(C$, 'setSelectedNode$S$I',  function (path, tabNumber) {
return this.setSelectedNode$S$I$java_net_URL(path, tabNumber, null);
});

Clazz.newMeth(C$, 'setSelectedNode$S$I$java_net_URL',  function (path, tabNumber, url) {
if (path == null ) {
return null;
}path=$I$(4).forwardSlash$S(path);
this.setSelectedTab$S(path);
var tab=this.getSelectedTab$();
if (tab == null ) {
return null;
}var e=tab.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
if (path.equals$O(node.getPathString$())) {
tab.setSelectedNode$org_opensourcephysics_tools_LaunchNode$I$java_net_URL(node, tabNumber, url);
return node;
}}
return null;
});

Clazz.newMeth(C$, 'setSelectedNodeByKey$S$I',  function (keywords, tabNumber) {
if ((keywords == null ) || keywords.equals$O("") ) {
return null;
}var anchor=null;
var n=keywords.indexOf$S("#");
if (n > -1) {
anchor=keywords.substring$I(n);
keywords=keywords.substring$I$I(0, n);
}for (var i=0; i < this.getTabCount$(); i++) {
var tab=this.getTab$I(i);
var e=tab.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
if (keywords.equals$O(node.keywords)) {
this.setSelectedTab$org_opensourcephysics_tools_LaunchPanel(tab);
var url=node.getDisplayTab$I(tabNumber).url;
if (url != null  && anchor != null  ) {
try {
url=Clazz.new_($I$(23,1).c$$java_net_URL$S,[url, anchor]);
tab.setSelectedNode$org_opensourcephysics_tools_LaunchNode$I$java_net_URL(node, tabNumber, url);
return node;
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.net.MalformedURLException")){
} else {
throw e1;
}
}
}tab.setSelectedNode$org_opensourcephysics_tools_LaunchNode$I(node, tabNumber);
return node;
}}
}
return null;
});

Clazz.newMeth(C$, 'getRootNode$',  function () {
if (this.getSelectedTab$() == null ) {
return null;
}return this.getSelectedTab$().getRootNode$();
});

Clazz.newMeth(C$, 'getTabCount$',  function () {
return this.tabbedPane.getTabCount$();
});

Clazz.newMeth(C$, 'getTab$I',  function (i) {
if (i >= this.tabbedPane.getTabCount$()) {
return null;
}return this.tabbedPane.getComponentAt$I(i);
});

Clazz.newMeth(C$, 'getHTMLTab$I',  function (i) {
while (i >= this.htmlTabList.size$()){
this.htmlTabList.add$O(Clazz.new_($I$(24,1),[this, null]));
}
return this.htmlTabList.get$I(i);
});

Clazz.newMeth(C$, 'getHTMLTabCount$',  function () {
return this.htmlTabList.size$();
});

Clazz.newMeth(C$, 'open$SA',  function (args) {
if ((args == null ) || (args.length == 0) ) {
return null;
}var path=this.open$S(args[0]);
if ((args.length > 1) && (args[1] != null ) ) {
this.setSelectedNode$S(args[1]);
}return path;
});

Clazz.newMeth(C$, 'open$S',  function (name) {
if ((name == null ) || name.equals$O("") ) {
return null;
}$I$(1).addSearchPath$S(C$.resourcesPath);
$I$(1).addSearchPath$S(C$.tabSetBasePath);
var path=name;
var absolutePath="";
var control=Clazz.new_($I$(25,1));
if (name.startsWith$S("<?xml")) {
control.readXML$S(name);
if (control.failedToRead$()) {
return null;
}}if (control.getObjectClassName$().equals$O(Clazz.getClass(java.lang.Object).getName$())) {
var jarBase=$I$(11).getLaunchJarDirectory$();
absolutePath=control.read$S($I$(4).getResolvedPath$S$S(path, jarBase));
if (control.failedToRead$()) {
absolutePath=control.read$S(path);
}}if (control.failedToRead$()) {
var jar=$I$(4,"stripExtension$S",[$I$(11).getLaunchJarName$()]);
if (!name.startsWith$S(C$.defaultFileName) && (jar != null ) && !name.startsWith$S(jar)  ) {
$I$(9,"info$S",[$I$(3).getString$S("Log.Message.InvalidXML") + " " + name ]);
$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(3).getString$S("Dialog.InvalidXML.Message") + " \"" + name + "\"" , $I$(3).getString$S("Dialog.InvalidXML.Title"), 2]);
}return null;
}$I$(9).fine$S(name);
var returnPath=$I$(4).forwardSlash$S(absolutePath);
var jarName=$I$(3).getString$S("Splash.Label.Internal");
var zip=Math.max(returnPath.indexOf$S("jar!"), returnPath.indexOf$S("zip!"));
zip=Math.max(zip, returnPath.indexOf$S("trz!"));
if (zip > -1) {
jarName=$I$(4,"getName$S",[returnPath.substring$I$I(0, zip + 3)]);
var s=$I$(4,"getDirectoryPath$S",[returnPath.substring$I$I(0, zip + 3)]);
this.jarBasePath=s.equals$O("") ? $I$(4,"forwardSlash$S",[System.getProperty$S$S("user.dir", "")]) : s;
returnPath=returnPath.substring$I(zip + 5);
} else {
this.jarBasePath=null;
}var type=control.getObjectClass$();
if (Clazz.getClass($I$(19)).equals$O(type)) {
if (!returnPath.equals$O("") && (C$.splashDialog != null ) && C$.splashDialog.isVisible$()  ) {
var res=$I$(1).getResource$S(path);
var loading=$I$(3).getString$S("Log.Message.Loading") + ": ";
if (res.getFile$() != null ) {
$I$(9,"info$S",[loading + res.getAbsolutePath$()]);
C$.splashDialog.getContentPane$().setBackground$java_awt_Color(Clazz.new_($I$(27,1).c$$I$I$I,[242, 242, 255]));
C$.splashPathLabel.setIcon$javax_swing_Icon(C$.magentaFileIcon);
C$.splashPathLabel.setText$S(loading + name);
} else {
loading=$I$(3).getString$S("Log.Message.LoadingFrom") + " " + jarName + ": " + name ;
var internal=jarName.equals$O($I$(3).getString$S("Splash.Label.Internal")) || jarName.equals$O($I$(11).getLaunchJarName$()) ;
if (internal) {
C$.splashDialog.getContentPane$().setBackground$java_awt_Color(Clazz.new_($I$(27,1).c$$I$I$I,[255, 255, 228]));
C$.splashPathLabel.setIcon$javax_swing_Icon(C$.greenFileIcon);
} else {
C$.splashDialog.getContentPane$().setBackground$java_awt_Color(Clazz.new_($I$(27,1).c$$I$I$I,[242, 242, 255]));
C$.splashPathLabel.setIcon$javax_swing_Icon(C$.magentaFileIcon);
}C$.splashPathLabel.setText$S(loading);
loading=$I$(3).getString$S("Log.Message.Loading") + ": ";
$I$(9,"info$S",[loading + res.getAbsolutePath$()]);
}}if (!this.removeAllTabs$()) {
return null;
}this.tabSetName=$I$(4).getName$S(returnPath);
if (!returnPath.equals$O("")) {
if (this.jarBasePath != null ) {
C$.tabSetBasePath="";
} else {
C$.tabSetBasePath=$I$(4).getDirectoryPath$S(returnPath);
}}$I$(9,"finest$S",[$I$(3).getString$S("Log.Message.Loading") + ": " + returnPath ]);
var post=this.postEdits;
this.postEdits=false;
var tabset=Clazz.new_($I$(19,1).c$$org_opensourcephysics_tools_Launcher$S,[this, null, this, this.tabSetName]);
control.loadObject$O(tabset);
if (tabset.failedToLoad) {
if (this.tabSetName.equals$O($I$(4).getName$S(returnPath))) {
this.tabSetName=null;
}returnPath=null;
} else if ((C$.splashDialog != null ) && C$.splashDialog.isVisible$() ) {
var root=this.getRootNode$();
if ((root != null ) && !root.getAuthor$().trim$().equals$O("") ) {
var by=$I$(3).getString$S("Label.Author") + ": ";
C$.creditsLabel.setText$S(by + root.getAuthor$());
}}this.changedFiles.clear$();
$I$(9).fine$S("returning " + returnPath);
this.postEdits=post;
return returnPath;
} else if (Clazz.getClass($I$(28)).equals$O(type)) {
$I$(9,"finest$S",[$I$(3).getString$S("Log.Message.Loading") + ": " + path ]);
var node=Clazz.new_([$I$(3).getString$S("NewNode.Name")],$I$(28,1).c$$S);
node.setFileName$S($I$(4).getPathRelativeTo$S$S(returnPath, C$.tabSetBasePath));
control.loadObject$O(node);
var tabName=C$.getDisplayName$S(returnPath);
for (var i=0; i < this.tabbedPane.getComponentCount$(); i++) {
if (this.tabbedPane.getTitleAt$I(i).equals$O(tabName)) {
var root=(this.tabbedPane.getComponent$I(i)).getRootNode$();
if (root.matches$org_opensourcephysics_tools_LaunchNode(node)) {
this.tabbedPane.setSelectedIndex$I(i);
return null;
}}}
this.postEdits=false;
if (this.tabSetName == null ) {
this.tabSetName=$I$(3).getString$S("Tabset.Name.New");
this.title=null;
C$.tabSetBasePath=$I$(4).getDirectoryPath$S(returnPath);
this.editorEnabled=true;
}this.addTab$org_opensourcephysics_tools_LaunchNode(node);
var e=node.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
next.setLaunchClass$S(next.launchClassName);
}
this.postEdits=true;
return returnPath;
} else {
$I$(9,"info$S",[$I$(3).getString$S("Log.Message.NotLauncherFile")]);
if (name.length$() > 20) {
name=name.substring$I$I(0, 20) + "...";
}$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(3).getString$S("Dialog.NotLauncherFile.Message") + " \"" + name + "\"" , $I$(3).getString$S("Dialog.NotLauncherFile.Title"), 2]);
}return null;
});

Clazz.newMeth(C$, 'setNavbarRightEndComponents$java_awt_ComponentA',  function (comps) {
if ((this.navbar.getComponentCount$() > 1) && (this.navbarAddOns != null ) ) {
this.navbar.remove$java_awt_Component(this.navSpacer);
for (var c, $c = 0, $$c = this.navbarAddOns; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c != null ) {
this.navbar.remove$java_awt_Component(c);
}}
}this.navbarAddOns=comps;
if ((this.navbar.getComponentCount$() > 1) && (this.navbarAddOns != null ) ) {
this.navbar.add$java_awt_Component(this.navSpacer);
for (var c, $c = 0, $$c = this.navbarAddOns; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c != null ) {
this.navbar.add$java_awt_Component(c);
}}
}this.navbar.revalidate$();
});

Clazz.newMeth(C$, 'addTab$org_opensourcephysics_tools_LaunchNode',  function (root) {
var tab=Clazz.new_($I$(29,1).c$$org_opensourcephysics_tools_LaunchNode$org_opensourcephysics_tools_Launcher,[root, this]);
this.tabs.add$O(tab);
if (root.isHiddenInLauncher$() && !(Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) ) {
return false;
}tab.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(Clazz.new_($I$(30,1),[this, null]));
tab.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(((P$.Launcher$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TreeSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].newNodeSelected=true;
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$2.$init$,[this, null])));
tab.tree.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).splashDialog != null ) {
$I$(2).splashDialog.dispose$();
}this.$finals$.tab.tree.removeMouseListener$java_awt_event_MouseListener(this);
});
})()
), Clazz.new_($I$(14,1),[this, {tab:tab}],P$.Launcher$3)));
tab.tree.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].popup.removeAll$();
this.b$['org.opensourcephysics.tools.Launcher'].handleMousePressed$java_awt_event_MouseEvent$org_opensourcephysics_tools_LaunchPanel.apply(this.b$['org.opensourcephysics.tools.Launcher'], [e, this.$finals$.tab]);
});
})()
), Clazz.new_($I$(14,1),[this, {tab:tab}],P$.Launcher$4)));
this.tabbedPane.addTab$S$java_awt_Component(root.toString(), tab);
this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
tab.setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(root);
if (!root.tooltip.equals$O("")) {
this.tabbedPane.setToolTipTextAt$I$S(this.tabbedPane.getSelectedIndex$(), root.tooltip);
}tab.dataPanel.addComponentListener$java_awt_event_ComponentListener(((P$.Launcher$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].divider=this.$finals$.tab.splitPane.getDividerLocation$();
});
})()
), Clazz.new_($I$(31,1),[this, {tab:tab}],P$.Launcher$5)));
return true;
});

Clazz.newMeth(C$, 'showButtonView$org_opensourcephysics_tools_LaunchNode',  function (node) {
var tab=node.getDisplayTab$I(0);
if ((tab != null ) && (tab.url != null ) ) {
this.setLinksEnabled$javax_swing_JEditorPane$Z(this.textPane, node.enabled && tab.hyperlinksEnabled );
if (tab.urlExists$()) {
var url=tab.url;
$I$(7,"invokeLater$Runnable",[((P$.Launcher$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Launcher$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
this.b$['org.opensourcephysics.tools.Launcher'].textPane.setPage$java_net_URL.apply(this.b$['org.opensourcephysics.tools.Launcher'].textPane, [this.$finals$.url]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(9,"fine$S",[$I$(3).getString$S("Log.Message.BadURL") + " " + this.$finals$.url ]);
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Launcher$lambda1.$init$,[this, {url:url}]))]);
} else {
$I$(9,"finest$S",[$I$(3).getString$S("Log.Message.BadURL") + " " + tab.url ]);
if (this.showText) {
this.textPane.setContentType$S("text");
this.textPane.setText$S(node.description);
}}} else if (this.showText) {
this.textPane.setContentType$S("text");
this.textPane.setText$S(node.description);
}this.contentPane.removeAll$();
if (this.navigationVisible && !(Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) ) {
this.contentPane.add$java_awt_Component$O(this.navbar, "North");
}this.contentPane.add$java_awt_Component$O(this.textScroller, "Center");
var box=Clazz.new_($I$(32,1));
this.contentPane.add$java_awt_Component$O(box, "South");
var openAction=((P$.Launcher$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
var child=this.$finals$.node.getChildAt$I(i);
if (child.getLaunchClass$() == null ) {
var prevArgs=this.b$['org.opensourcephysics.tools.Launcher'].undoManager.getLauncherState$();
if (this.b$['org.opensourcephysics.tools.Launcher'].open$SA.apply(this.b$['org.opensourcephysics.tools.Launcher'], [child.args]) != null ) {
if (prevArgs != null ) {
var edit=Clazz.new_($I$(33,1).c$$SA$SA,[this.b$['org.opensourcephysics.tools.Launcher'].undoManager, null, child.args, prevArgs]);
this.b$['org.opensourcephysics.tools.Launcher'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
}} else {
child.launch$();
}});
})()
), Clazz.new_($I$(34,1),[this, {node:node}],P$.Launcher$6));
for (var i=0; i < node.getChildCount$(); i++) {
var child=node.getChildAt$I(i);
var button=Clazz.new_($I$(35,1).c$$S,[child.name]);
button.addActionListener$java_awt_event_ActionListener(openAction);
button.setActionCommand$S(String.valueOf$I(i));
button.setToolTipText$S(child.tooltip);
button.setEnabled$Z(node.enabled);
box.add$java_awt_Component(button);
}
this.frame.validate$();
this.refreshGUI$();
this.frame.repaint$();
});

Clazz.newMeth(C$, 'showTabbedPaneView$',  function () {
this.contentPane.removeAll$();
if (this.navigationVisible && !(Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) ) {
this.contentPane.add$java_awt_Component$O(this.navbar, "North");
}this.contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
if (this.frame == null ) {
return;
}this.frame.validate$();
this.refreshGUI$();
this.frame.repaint$();
});

Clazz.newMeth(C$, 'open$',  function () {
C$.getXMLChooser$().setFileFilter$javax_swing_filechooser_FileFilter(C$.launcherFileFilter);
var result=C$.getXMLChooser$().showOpenDialog$java_awt_Component(null);
if (result == 0) {
var file=C$.getXMLChooser$().getSelectedFile$();
var fileName=$I$(4,"forwardSlash$S",[file.getAbsolutePath$()]);
$I$(11).chooserDir=$I$(4).getDirectoryPath$S(fileName);
return this.open$S(fileName);
}return null;
});

Clazz.newMeth(C$, 'removeSelectedTab$',  function () {
var i=this.tabbedPane.getSelectedIndex$();
if (i < 0) {
return false;
}var prevArgs=this.undoManager.getLauncherState$();
this.tabs.remove$O(this.getTab$I(i));
this.tabbedPane.removeTabAt$I(i);
this.previousNode=this.selectedNode;
this.newNodeSelected=true;
if (this.tabbedPane.getTabCount$() == 0) {
this.tabSetName=null;
this.title=null;
if (prevArgs != null ) {
var edit=Clazz.new_($I$(33,1).c$$SA$SA,[this.undoManager, null, null, prevArgs]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}}this.refreshGUI$();
return true;
});

Clazz.newMeth(C$, 'removeAllTabs$',  function () {
var n=this.tabbedPane.getTabCount$();
if (n == 0) {
return true;
}var post=this.postEdits;
this.postEdits=false;
for (var i=n - 1; i >= 0; i--) {
this.tabbedPane.removeTabAt$I(i);
}
if (this.tabbedPane.getTabCount$() == 0) {
this.tabSetName=null;
this.title=null;
this.password=null;
} else {
this.previousNode=this.selectedNode;
this.newNodeSelected=true;
}this.refreshGUI$();
this.tabs.clear$();
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
this.tabs.add$O(this.tabbedPane.getComponentAt$I(i));
}
this.postEdits=post;
return this.tabbedPane.getTabCount$() == 0;
});

Clazz.newMeth(C$, 'refreshStringResources$',  function () {
if (this.frame == null ) return;
this.fileMenu.setText$S($I$(3).getString$S("Menu.File"));
this.displayMenu.setText$S($I$(3).getString$S("Menu.Display"));
this.openItem.setText$S($I$(3).getString$S("Menu.File.Open"));
this.passwordItem.setText$S($I$(3).getString$S("Launcher.MenuItem.EnterPassword"));
this.closeTabItem.setText$S($I$(3).getString$S("Menu.File.CloseTab"));
this.closeAllItem.setText$S($I$(3).getString$S("Menu.File.CloseAll"));
this.editItem.setText$S($I$(3).getString$S("Menu.File.Edit"));
this.backItem.setText$S($I$(3).getString$S("Menu.File.Back"));
this.helpMenu.setText$S($I$(3).getString$S("Menu.Help"));
this.logItem.setText$S($I$(3).getString$S("Menu.Help.MessageLog"));
this.inspectItem.setText$S($I$(3).getString$S("Menu.Help.Inspect"));
var s=$I$(4,"getSimpleClassName$Class",[this.getClass$()]);
var about=$I$(3).getString$S("Menu.Help.About") + " " + s + "..." ;
this.aboutItem.setText$S(about);
var authorInfo=$I$(3).getString$S("Menu.Help.AuthorInfo") + "...";
var node=this.getSelectedNode$();
if (node != null ) {
authorInfo=$I$(3).getString$S("Help.About.Title") + " \"" + node.getName$() + "\"..." ;
}this.authorInfoItem.setText$S(authorInfo);
this.diagnosticMenu.setText$S($I$(3).getString$S("Menu.Help.Diagnostics"));
if (this.exitItem != null ) {
this.exitItem.setText$S($I$(3).getString$S("Menu.File.Exit"));
}this.languageMenu.setText$S($I$(3).getString$S("Menu.Display.Language"));
this.sizeUpItem.setText$S($I$(3).getString$S("Menu.Display.IncreaseFontSize"));
this.sizeDownItem.setText$S($I$(3).getString$S("Menu.Display.DecreaseFontSize"));
this.lookFeelMenu.setText$S($I$(3).getString$S("Menu.Display.LookFeel"));
this.javaLFItem.setText$S($I$(3).getString$S("MenuItem.JavaLookFeel"));
this.systemLFItem.setText$S($I$(3).getString$S("MenuItem.SystemLookFeel"));
this.defaultLFItem.setText$S($I$(3).getString$S("MenuItem.DefaultLookFeel"));
if (this.openFromJarMenu != null ) {
this.openFromJarMenu.setText$S($I$(3).getString$S("Menu.File.OpenFromJar"));
}var locales=$I$(11).getInstalledLocales$();
for (var i=0; i < locales.length; i++) {
if (locales[i].getLanguage$().equals$O($I$(3).resourceLocale.getLanguage$())) {
this.languageItems[i].setSelected$Z(true);
}}
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshMemoryButton$();
var tab=this.getSelectedTab$();
var rootDisabled=tab != null  && !tab.getRootNode$().enabled ;
if (tab != null ) {
tab.tree.setEnabled$Z(tab.getRootNode$().enabled);
this.tabbedPane.setEnabled$Z(tab.getRootNode$().enabled);
tab.splitPane.setDividerLocation$I(this.divider);
}this.backButton.setEnabled$Z(this.undoManager.canUndo$());
this.forwardButton.setEnabled$Z(this.undoManager.canRedo$());
var name;
if (this.frame != null ) {
name=(this.title == null ) ? this.tabSetName : this.title;
if (name == null ) {
name=$I$(3).getString$S("Frame.Title");
} else {
name=$I$(3).getString$S("Frame.Title") + ": " + name ;
}if (rootDisabled) {
name+=" " + $I$(3).getString$S("Launcher.Title.NeedsPassword");
}this.frame.setTitle$S(name);
this.fileMenu.removeAll$();
if (this.undoManager.canReload$()) {
this.fileMenu.add$javax_swing_JMenuItem(this.backItem);
}if (!$I$(11).isApplet) {
if (this.fileMenu.getItemCount$() > 0) {
this.fileMenu.addSeparator$();
}this.fileMenu.add$javax_swing_JMenuItem(this.openItem);
}if (this.openFromJarMenu != null ) {
this.fileMenu.add$javax_swing_JMenuItem(this.openFromJarMenu);
}if (rootDisabled) {
this.fileMenu.add$javax_swing_JMenuItem(this.passwordItem);
}if ($I$(11).isApplet) {
this.fileMenu.add$javax_swing_JMenuItem(this.hideItem);
return;
}if (tab != null ) {
if (this.fileMenu.getItemCount$() > 0) {
this.fileMenu.addSeparator$();
}var showCloseTab=true;
if (this.getClass$() === Clazz.getClass(C$) ) {
if (tab.getRootNode$().isButtonView$()) {
showCloseTab=false;
name=$I$(3).getString$S("Frame.Title") + ": " + tab.getRootNode$().name ;
} else if (this.tabbedPane.getTabCount$() == 1) {
showCloseTab=false;
}}if (showCloseTab) {
this.fileMenu.add$javax_swing_JMenuItem(this.closeTabItem);
this.closeAllItem.setText$S($I$(3).getString$S("Menu.File.CloseAll"));
} else {
this.closeAllItem.setText$S($I$(3).getString$S("MenuItem.Close"));
}this.fileMenu.add$javax_swing_JMenuItem(this.closeAllItem);
}if (this.editorEnabled && !$I$(11).isWebStart$() && !rootDisabled  ) {
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.editItem);
}var printMenu=Clazz.new_([$I$(37).getString$S("DrawingFrame.Print_menu_title")],$I$(36,1).c$$S);
var printFrameItem=Clazz.new_([$I$(37).getString$S("DrawingFrame.PrintFrame_menu_item")],$I$(13,1).c$$S);
var saveFrameAsEPSItem=Clazz.new_([$I$(37).getString$S("DrawingFrame.SaveFrameAsEPS_menu_item")],$I$(13,1).c$$S);
printMenu.add$javax_swing_JMenuItem(printFrameItem);
printMenu.add$javax_swing_JMenuItem(saveFrameAsEPSItem);
this.fileMenu.add$javax_swing_JMenuItem(printMenu);
printFrameItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(38).printComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].frame);
});
})()
), Clazz.new_(P$.Launcher$7.$init$,[this, null])));
saveFrameAsEPSItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(38).saveComponentAsEPS$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].frame);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Launcher$8.$init$,[this, null])));
this.fileMenu.addSeparator$();
if (this.exitItem != null ) {
this.fileMenu.add$javax_swing_JMenuItem(this.exitItem);
}var rootEnabled=this.getRootNode$() != null  && this.getRootNode$().enabled ;
this.inspectItem.setEnabled$Z(rootEnabled && (this.password == null  || (Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) ) );
this.sizeDownItem.setEnabled$Z(this.fileMenu.getFont$().getSize$() > C$.baseMenuFontSize );
}});

Clazz.newMeth(C$, 'appletGUI',  function () {
this.hideItem=Clazz.new_([$I$(3).getString$S("Menu.File.Hide")],$I$(13,1).c$$S);
this.hideItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].exit$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$9.$init$,[this, null])));
}, p$1);

Clazz.newMeth(C$, 'createGUI$Z',  function (splash) {
p$1.appletGUI.apply(this, []);
var frames=$I$(39).getFrames$();
for (var i=0, n=frames.length; i < n; i++) {
C$.existingFrames.add$O(frames[i]);
}
$I$(9).getOSPLog$();
$I$(11).getTranslator$();
this.undoManager=Clazz.new_($I$(40,1).c$$org_opensourcephysics_tools_Launcher,[this]);
this.undoSupport=Clazz.new_($I$(41,1));
this.undoSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(this.undoManager);
if (this.contentPane == null ) {
this.frame=Clazz.new_($I$(42,1),[this, null]);
C$.existingFrames.add$O(this.frame);
if (splash && !$I$(11).isApplet ) {
p$1.splash.apply(this, []);
}this.xmlInspector=Clazz.new_($I$(43,1).c$$java_awt_Frame$Z,[this.frame, false]);
this.xmlInspector.setSize$java_awt_Dimension(Clazz.new_($I$(44,1).c$$I$I,[600, 300]));
this.tableInspector=Clazz.new_($I$(45,1).c$$Z$Z,[true, false]);
var dim=$I$(8).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.xmlInspector.getBounds$().width)/2|0);
var y=((dim.height - this.xmlInspector.getBounds$().height)/2|0);
this.xmlInspector.setLocation$I$I(x, y);
x=((dim.width - this.tableInspector.getBounds$().width)/2|0);
y=((dim.height - this.tableInspector.getBounds$().height)/2|0);
this.tableInspector.setLocation$I$I(x, y);
this.contentPane=Clazz.new_([Clazz.new_($I$(46,1))],$I$(32,1).c$$java_awt_LayoutManager);
this.contentPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(44,1).c$$I$I,[C$.wInit, C$.hInit]));
this.frame.setContentPane$java_awt_Container(this.contentPane);
this.frame.setDefaultCloseOperation$I(1);
}this.navbar=Clazz.new_($I$(47,1));
this.navbar.setFloatable$Z(false);
this.navbar.setBorder$javax_swing_border_Border($I$(48).createEtchedBorder$());
this.navButton=Clazz.new_($I$(35,1).c$$javax_swing_Icon,[C$.navOpenIcon]);
this.navButton.setBorder$javax_swing_border_Border($I$(48).createEmptyBorder$());
this.navButton.setBorderPainted$Z(false);
this.navButton.setOpaque$Z(false);
this.navButton.addActionListener$java_awt_event_ActionListener(((P$.Launcher$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.Launcher'].navbar.getComponentCount$() > 1) {
this.b$['org.opensourcephysics.tools.Launcher'].navbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].backButton);
this.b$['org.opensourcephysics.tools.Launcher'].navbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].forwardButton);
this.b$['org.opensourcephysics.tools.Launcher'].navbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].navSpacer);
if (this.b$['org.opensourcephysics.tools.Launcher'].navbarAddOns != null ) {
for (var c, $c = 0, $$c = this.b$['org.opensourcephysics.tools.Launcher'].navbarAddOns; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c != null ) {
this.b$['org.opensourcephysics.tools.Launcher'].navbar.remove$java_awt_Component(c);
}}
}this.b$['org.opensourcephysics.tools.Launcher'].navButton.setIcon$javax_swing_Icon($I$(2).navClosedIcon);
} else {
this.b$['org.opensourcephysics.tools.Launcher'].navbar.add$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].backButton);
this.b$['org.opensourcephysics.tools.Launcher'].navbar.add$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].forwardButton);
if (this.b$['org.opensourcephysics.tools.Launcher'].navbarAddOns != null ) {
this.b$['org.opensourcephysics.tools.Launcher'].navbar.add$java_awt_Component(this.b$['org.opensourcephysics.tools.Launcher'].navSpacer);
for (var c, $c = 0, $$c = this.b$['org.opensourcephysics.tools.Launcher'].navbarAddOns; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c != null ) {
this.b$['org.opensourcephysics.tools.Launcher'].navbar.add$java_awt_Component(c);
}}
}this.b$['org.opensourcephysics.tools.Launcher'].navButton.setIcon$javax_swing_Icon($I$(2).navOpenIcon);
}this.b$['org.opensourcephysics.tools.Launcher'].navbar.revalidate$();
});
})()
), Clazz.new_(P$.Launcher$10.$init$,[this, null])));
this.navbar.add$java_awt_Component(this.navButton);
this.backButton=Clazz.new_($I$(35,1).c$$javax_swing_Icon,[C$.backIcon]);
this.backButton.setDisabledIcon$javax_swing_Icon(C$.backDisabledIcon);
this.backButton.addActionListener$java_awt_event_ActionListener(((P$.Launcher$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].undoManager.undo$();
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$11.$init$,[this, null])));
this.navbar.add$java_awt_Component(this.backButton);
this.forwardButton=Clazz.new_($I$(35,1).c$$javax_swing_Icon,[C$.forwardIcon]);
this.forwardButton.setDisabledIcon$javax_swing_Icon(C$.forwardDisabledIcon);
this.forwardButton.addActionListener$java_awt_event_ActionListener(((P$.Launcher$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].undoManager.redo$();
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$12.$init$,[this, null])));
this.navbar.add$java_awt_Component(this.forwardButton);
this.backButton.setEnabled$Z(false);
this.forwardButton.setEnabled$Z(false);
this.memoryButton=Clazz.new_($I$(35,1));
this.memoryButton.setOpaque$Z(false);
this.memoryButton.setBorderPainted$Z(false);
var space=$I$(48).createEmptyBorder$I$I$I$I(2, 4, 2, 3);
var line=$I$(48,"createLineBorder$java_awt_Color",[$I$(27).GRAY]);
this.memoryButton.setBorder$javax_swing_border_Border($I$(48).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, space));
var font=this.memoryButton.getFont$();
this.memoryButton.setFont$java_awt_Font(font.deriveFont$I$F(0, font.getSize$() - 1));
this.memoryButton.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].refreshMemoryButton$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
this.b$['org.opensourcephysics.tools.Launcher'].memoryButton.setBorderPainted$Z(true);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].memoryButton.setBorderPainted$Z(false);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var popup=Clazz.new_($I$(12,1));
var menu=Clazz.new_([$I$(3).getString$S("Launcher.Button.Memory.Popup.Relaunch")],$I$(36,1).c$$S);
var relauncher=((P$.Launcher$13$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$13$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=e.getSource$();
var text=item.getText$();
text=text.substring$I$I(0, text.length$() - 2);
var memorySize=Long.parseLong$S(text);
$I$(2).relaunch$SA$J$java_awt_Component(null, memorySize, this.b$['org.opensourcephysics.tools.Launcher'].frame);
});
})()
), Clazz.new_(P$.Launcher$13$1.$init$,[this, null]));
var memSize=512;
if (!$I$(11).isJS) {
var memory=$I$(49).getMemoryMXBean$();
memSize=Long.$div(memory.getHeapMemoryUsage$().getMax$(),(1048576));
}var sizes=Clazz.array(Integer.TYPE, -1, [64, 125, 250, 500, 1000]);
for (var next, $next = 0, $$next = sizes; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (this.b$['org.opensourcephysics.tools.Launcher'].xsetMemorySize < (9 * next/10|0) && (Long.$lt(memSize,(9 * next/10|0) ) || Long.$gt(memSize,(11 * next/10|0) ) ) ) {
var item=Clazz.new_($I$(13,1).c$$S,[next + "MB"]);
item.addActionListener$java_awt_event_ActionListener(relauncher);
menu.add$javax_swing_JMenuItem(item);
}}
if (menu.getItemCount$() > 0) {
popup.add$javax_swing_JMenuItem(menu);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.Launcher'].memoryButton, 0, this.b$['org.opensourcephysics.tools.Launcher'].memoryButton.getHeight$());
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$13)));
var comps=Clazz.array($I$(50), -1, [$I$(18).createHorizontalGlue$(), this.memoryButton, $I$(18).createHorizontalStrut$I(2)]);
this.setNavbarRightEndComponents$java_awt_ComponentA(comps);
this.textPane=Clazz.new_($I$(51,1));
this.textPane.setEditable$Z(false);
this.textScroller=Clazz.new_($I$(16,1).c$$java_awt_Component,[this.textPane]);
this.tabbedPane=Clazz.new_($I$(52,1).c$$I,[3]);
this.contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.Launcher$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].previousNode=this.b$['org.opensourcephysics.tools.Launcher'].selectedNode;
this.b$['org.opensourcephysics.tools.Launcher'].selectedNode=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
this.b$['org.opensourcephysics.tools.Launcher'].newNodeSelected=true;
this.b$['org.opensourcephysics.tools.Launcher'].refreshSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if ((this.b$['org.opensourcephysics.tools.Launcher'].previousNode != null ) && (this.b$['org.opensourcephysics.tools.Launcher'].selectedNode != null ) ) {
if ((this.b$['org.opensourcephysics.tools.Launcher'].selectedNode.getURL$() == null ) && !this.b$['org.opensourcephysics.tools.Launcher'].selectedNode.tabData.isEmpty$() ) {
var page=Math.max(0, this.b$['org.opensourcephysics.tools.Launcher'].selectedNode.tabNumber);
var htmlData=this.b$['org.opensourcephysics.tools.Launcher'].selectedNode.tabData.get$I(page);
this.b$['org.opensourcephysics.tools.Launcher'].selectedNode.setURL$java_net_URL(htmlData.url);
this.b$['org.opensourcephysics.tools.Launcher'].selectedNode.tabNumber=page;
}if (this.b$['org.opensourcephysics.tools.Launcher'].postEdits) {
var edit=Clazz.new_($I$(53,1).c$$org_opensourcephysics_tools_LaunchNode$org_opensourcephysics_tools_LaunchNode,[this.b$['org.opensourcephysics.tools.Launcher'].undoManager, null, this.b$['org.opensourcephysics.tools.Launcher'].previousNode, this.b$['org.opensourcephysics.tools.Launcher'].selectedNode]);
this.b$['org.opensourcephysics.tools.Launcher'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}}this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$14.$init$,[this, null])));
this.tabListener=((P$.Launcher$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.Launcher'].frame == null ) {
return;
}if ($I$(11).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=Clazz.new_($I$(12,1));
var item=Clazz.new_([$I$(3).getString$S("MenuItem.Close")],$I$(13,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.Launcher$15$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$15$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].removeSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$15$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.Launcher'].tabbedPane, e.getX$(), e.getY$() + 8);
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$15));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(this.tabListener);
if (this.frame != null ) {
var menubar=Clazz.new_($I$(54,1));
this.fileMenu=Clazz.new_($I$(36,1));
this.fileMenu.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).splashDialog != null ) {
$I$(2).splashDialog.dispose$();
}this.b$['org.opensourcephysics.tools.Launcher'].fileMenu.removeMouseListener$java_awt_event_MouseListener(this);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$16)));
menubar.add$javax_swing_JMenu(this.fileMenu);
this.openItem=Clazz.new_($I$(13,1));
var mask=$I$(8).getDefaultToolkit$().getMenuShortcutKeyMask$();
this.openItem.setAccelerator$javax_swing_KeyStroke($I$(55,"getKeyStroke$I$I",["O".$c(), mask]));
this.openItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prevArgs=this.b$['org.opensourcephysics.tools.Launcher'].undoManager.getLauncherState$();
if (prevArgs != null ) {
var fileName=this.b$['org.opensourcephysics.tools.Launcher'].open$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if (fileName != null ) {
var args=Clazz.array(String, -1, [fileName]);
var edit=Clazz.new_($I$(33,1).c$$SA$SA,[this.b$['org.opensourcephysics.tools.Launcher'].undoManager, null, args, prevArgs]);
this.b$['org.opensourcephysics.tools.Launcher'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
}} else {
this.b$['org.opensourcephysics.tools.Launcher'].open$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
}});
})()
), Clazz.new_(P$.Launcher$17.$init$,[this, null])));
this.passwordItem=Clazz.new_($I$(13,1));
this.passwordItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(56).verify$S$S(this.b$['org.opensourcephysics.tools.Launcher'].password, this.b$['org.opensourcephysics.tools.Launcher'].tabSetName)) {
$I$(2).passwords.add$O(this.b$['org.opensourcephysics.tools.Launcher'].password);
this.b$['org.opensourcephysics.tools.Launcher'].getRootNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []).enabled=true;
if (this.b$['org.opensourcephysics.tools.Launcher'].expansions != null ) {
for (var i=0; i < this.b$['org.opensourcephysics.tools.Launcher'].expansions.length; i++) {
this.b$['org.opensourcephysics.tools.Launcher'].getTab$I.apply(this.b$['org.opensourcephysics.tools.Launcher'], [i]).setExpandedNodes$java_util_Collection(this.b$['org.opensourcephysics.tools.Launcher'].expansions[i]);
}
}if (this.b$['org.opensourcephysics.tools.Launcher'].selectedPath != null ) this.b$['org.opensourcephysics.tools.Launcher'].setSelectedNode$S.apply(this.b$['org.opensourcephysics.tools.Launcher'], [this.b$['org.opensourcephysics.tools.Launcher'].selectedPath]);
this.b$['org.opensourcephysics.tools.Launcher'].changedFiles.clear$();
this.b$['org.opensourcephysics.tools.Launcher'].refreshSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
this.b$['org.opensourcephysics.tools.Launcher'].frame.validate$();
}});
})()
), Clazz.new_(P$.Launcher$18.$init$,[this, null])));
this.closeTabItem=Clazz.new_($I$(13,1));
this.closeTabItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].removeSelectedTab$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$19.$init$,[this, null])));
this.closeAllItem=Clazz.new_($I$(13,1));
this.closeAllItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prevArgs=this.b$['org.opensourcephysics.tools.Launcher'].undoManager.getLauncherState$();
if (this.b$['org.opensourcephysics.tools.Launcher'].removeAllTabs$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []) && (prevArgs != null ) ) {
var edit=Clazz.new_($I$(33,1).c$$SA$SA,[this.b$['org.opensourcephysics.tools.Launcher'].undoManager, null, null, prevArgs]);
this.b$['org.opensourcephysics.tools.Launcher'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$20.$init$,[this, null])));
this.editItem=Clazz.new_($I$(13,1));
this.editItem.setAccelerator$javax_swing_KeyStroke($I$(55,"getKeyStroke$I$I",["E".$c(), mask]));
if ($I$(11).isWebStart$()) {
this.editItem.setEnabled$Z(false);
}this.editItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ((this.b$['org.opensourcephysics.tools.Launcher'].password != null ) && !this.b$['org.opensourcephysics.tools.Launcher'].pwRequiredToLoad && !$I$(56).verify$S$S(this.b$['org.opensourcephysics.tools.Launcher'].password, this.b$['org.opensourcephysics.tools.Launcher'].tabSetName)  ) {
return;
}if (this.b$['org.opensourcephysics.tools.Launcher'].previewing) {
this.b$['org.opensourcephysics.tools.Launcher'].previewing=false;
if (this.b$['org.opensourcephysics.tools.Launcher'].spawner != null ) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if (node != null ) {
this.b$['org.opensourcephysics.tools.Launcher'].spawner.setSelectedNode$S(node.getPathString$());
}}this.b$['org.opensourcephysics.tools.Launcher'].exit$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
} else {
var builder;
if (this.b$['org.opensourcephysics.tools.Launcher'].tabSetName == null ) {
builder=Clazz.new_($I$(57,1).c$$Z,[false]);
builder.newItem.doClick$();
} else {
var tabset=Clazz.new_($I$(19,1).c$$org_opensourcephysics_tools_Launcher$S,[this, null, this.b$['org.opensourcephysics.tools.Launcher'], this.b$['org.opensourcephysics.tools.Launcher'].tabSetName]);
var control=Clazz.new_($I$(25,1).c$$O,[tabset]);
control.setPassword$S(null);
builder=Clazz.new_([control.toXML$()],$I$(57,1).c$$S);
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if (node != null ) {
builder.setSelectedNode$S(node.getPathString$());
}builder.tabSetName=this.b$['org.opensourcephysics.tools.Launcher'].tabSetName;
builder.password=this.b$['org.opensourcephysics.tools.Launcher'].password;
}builder.spawner=this.b$['org.opensourcephysics.tools.Launcher'];
builder.jarBasePath=this.b$['org.opensourcephysics.tools.Launcher'].jarBasePath;
var p=this.b$['org.opensourcephysics.tools.Launcher'].frame.getLocation$();
builder.frame.setLocation$I$I(p.x + 24, p.y + 24);
builder.frame.setVisible$Z(true);
builder.frame.pack$();
builder.frame.setDefaultCloseOperation$I(0);
}});
})()
), Clazz.new_(P$.Launcher$21.$init$,[this, null])));
this.backItem=Clazz.new_($I$(13,1));
this.backItem.setAccelerator$javax_swing_KeyStroke($I$(55).getKeyStroke$I$I(37, mask));
this.backItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].undoManager.undo$();
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$22.$init$,[this, null])));
this.displayMenu=Clazz.new_($I$(36,1));
menubar.add$javax_swing_JMenu(this.displayMenu);
$I$(3,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.Launcher$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].refreshStringResources$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$23.$init$,[this, null]))]);
this.languageMenu=Clazz.new_($I$(36,1));
var locales=$I$(11).getInstalledLocales$();
var languageAction=((P$.Launcher$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var language=e.getActionCommand$();
$I$(9).finest$S("setting language to " + language);
for (var i=0; i < this.$finals$.locales.length; i++) {
if (language.equals$O(this.$finals$.locales[i].getDisplayName$())) {
$I$(3).setLocale$java_util_Locale(this.$finals$.locales[i]);
return;
}}
});
})()
), Clazz.new_($I$(34,1),[this, {locales:locales}],P$.Launcher$24));
var languageGroup=Clazz.new_($I$(58,1));
this.languageItems=Clazz.array($I$(13), [locales.length]);
for (var i=0; i < locales.length; i++) {
this.languageItems[i]=Clazz.new_([$I$(11).getDisplayLanguage$java_util_Locale(locales[i])],$I$(59,1).c$$S);
this.languageItems[i].setActionCommand$S(locales[i].getDisplayName$());
this.languageItems[i].addActionListener$java_awt_event_ActionListener(languageAction);
this.languageMenu.add$javax_swing_JMenuItem(this.languageItems[i]);
languageGroup.add$javax_swing_AbstractButton(this.languageItems[i]);
}
this.displayMenu.add$javax_swing_JMenuItem(this.languageMenu);
this.displayMenu.addSeparator$();
$I$(22,"addListener$S$java_beans_PropertyChangeListener",["level", ((P$.Launcher$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var level=(e.getNewValue$()).intValue$();
this.b$['org.opensourcephysics.tools.Launcher'].setFontLevel$I.apply(this.b$['org.opensourcephysics.tools.Launcher'], [level]);
});
})()
), Clazz.new_(P$.Launcher$25.$init$,[this, null]))]);
this.sizeUpItem=Clazz.new_($I$(13,1));
this.sizeUpItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(22).levelUp$();
});
})()
), Clazz.new_(P$.Launcher$26.$init$,[this, null])));
this.displayMenu.add$javax_swing_JMenuItem(this.sizeUpItem);
this.sizeDownItem=Clazz.new_($I$(13,1));
this.sizeDownItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(22).levelDown$();
});
})()
), Clazz.new_(P$.Launcher$27.$init$,[this, null])));
this.displayMenu.add$javax_swing_JMenuItem(this.sizeDownItem);
this.displayMenu.addSeparator$();
this.lookFeelMenu=Clazz.new_($I$(36,1));
this.displayMenu.add$javax_swing_JMenuItem(this.lookFeelMenu);
var lfAction=((P$.Launcher$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].setLookAndFeel$S$Z.apply(this.b$['org.opensourcephysics.tools.Launcher'], [e.getActionCommand$(), false]);
});
})()
), Clazz.new_($I$(34,1),[this, null],P$.Launcher$28));
var currentLF=$I$(60).getLookAndFeel$().getClass$().getName$();
this.specificLFGroup=Clazz.new_($I$(58,1));
var lfInfo=$I$(60).getInstalledLookAndFeels$();
for (var i=0; i < lfInfo.length; i++) {
var next=lfInfo[i].getClassName$();
var command=(next.indexOf$S("Nimbus") > -1) ? "NIMBUS" : (next.indexOf$S("GTK") > -1) ? "GTK" : (next.indexOf$S("Motif") > -1) ? "MOTIF" : (next.indexOf$S("WindowsClassic") > -1) ? null : (next.indexOf$S("Windows") > -1) ? "WINDOWS" : (next.indexOf$S("Metal") > -1) ? "METAL" : null;
if (command == null ) {
continue;
}var name=$I$(4,"getName$S",[lfInfo[i].getName$()]);
var item=Clazz.new_($I$(59,1).c$$S,[name]);
this.specificLFGroup.add$javax_swing_AbstractButton(item);
item.setActionCommand$S(command);
item.addActionListener$java_awt_event_ActionListener(lfAction);
this.lookFeelMenu.add$javax_swing_JMenuItem(item);
if (currentLF.equals$O(next)) {
item.setSelected$Z(true);
}}
this.genericLFGroup=Clazz.new_($I$(58,1));
this.defaultLFItem=Clazz.new_($I$(59,1));
this.defaultLFItem.setSelected$Z(true);
this.defaultLFItem.setActionCommand$S("DEFAULT");
this.defaultLFItem.addActionListener$java_awt_event_ActionListener(lfAction);
this.genericLFGroup.add$javax_swing_AbstractButton(this.defaultLFItem);
this.javaLFItem=Clazz.new_($I$(59,1));
this.javaLFItem.setActionCommand$S("CROSS_PLATFORM");
this.javaLFItem.addActionListener$java_awt_event_ActionListener(lfAction);
this.genericLFGroup.add$javax_swing_AbstractButton(this.javaLFItem);
this.systemLFItem=Clazz.new_($I$(59,1));
this.systemLFItem.setActionCommand$S("SYSTEM");
this.systemLFItem.addActionListener$java_awt_event_ActionListener(lfAction);
this.genericLFGroup.add$javax_swing_AbstractButton(this.systemLFItem);
this.lookFeelMenu.addSeparator$();
this.lookFeelMenu.add$javax_swing_JMenuItem(this.javaLFItem);
this.lookFeelMenu.add$javax_swing_JMenuItem(this.systemLFItem);
this.lookFeelMenu.add$javax_swing_JMenuItem(this.defaultLFItem);
this.helpMenu=Clazz.new_($I$(36,1));
this.helpMenu.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).splashDialog != null ) {
$I$(2).splashDialog.dispose$();
}this.b$['org.opensourcephysics.tools.Launcher'].helpMenu.removeMouseListener$java_awt_event_MouseListener(this);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$29)));
this.helpMenu.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.Launcher'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
if (node != null ) {
this.b$['org.opensourcephysics.tools.Launcher'].helpMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.Launcher'].authorInfoItem);
} else {
this.b$['org.opensourcephysics.tools.Launcher'].helpMenu.remove$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.Launcher'].authorInfoItem);
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$30)));
menubar.add$javax_swing_JMenu(this.helpMenu);
this.logItem=Clazz.new_($I$(13,1));
this.logItem.setAccelerator$javax_swing_KeyStroke($I$(55,"getKeyStroke$I$I",["L".$c(), mask]));
this.logItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!$I$(11).isApplet) {
var p0=Clazz.new_($I$(39,1)).getLocation$();
var log=$I$(9).getFrame$();
if ((log.getLocation$().x == p0.x) && (log.getLocation$().y == p0.y) ) {
var p=this.b$['org.opensourcephysics.tools.Launcher'].frame.getLocation$();
log.setLocation$I$I(p.x + 28, p.y + 28);
}}$I$(9).showLog$();
});
})()
), Clazz.new_(P$.Launcher$31.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.logItem);
this.inspectItem=Clazz.new_($I$(13,1));
this.helpMenu.add$javax_swing_JMenuItem(this.inspectItem);
this.inspectItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tabSet=Clazz.new_($I$(19,1).c$$org_opensourcephysics_tools_Launcher$S,[this, null, this.b$['org.opensourcephysics.tools.Launcher'], this.b$['org.opensourcephysics.tools.Launcher'].tabSetName]);
tabSet.showHiddenNodes=Clazz.instanceOf(this.b$['org.opensourcephysics.tools.Launcher'], "org.opensourcephysics.tools.LaunchBuilder");
var xml=Clazz.new_($I$(25,1).c$$O,[tabSet]);
var treePanel=Clazz.new_($I$(61,1).c$$org_opensourcephysics_controls_XMLControl$Z,[xml, false]);
this.b$['org.opensourcephysics.tools.Launcher'].xmlInspector.setContentPane$java_awt_Container(treePanel);
this.b$['org.opensourcephysics.tools.Launcher'].xmlInspector.setTitle$S($I$(3).getString$S("Inspector.Title.TabSet") + " \"" + $I$(2).getDisplayName$S(this.b$['org.opensourcephysics.tools.Launcher'].tabSetName) + "\"" );
this.b$['org.opensourcephysics.tools.Launcher'].xmlInspector.setVisible$Z(true);
});
})()
), Clazz.new_(P$.Launcher$32.$init$,[this, null])));
this.diagnosticMenu=Clazz.new_($I$(36,1));
this.helpMenu.add$javax_swing_JMenuItem(this.diagnosticMenu);
var jarItem=Clazz.new_($I$(13,1).c$$S,["Jar"]);
jarItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(62).aboutLaunchJar$();
});
})()
), Clazz.new_(P$.Launcher$33.$init$,[this, null])));
this.diagnosticMenu.add$javax_swing_JMenuItem(jarItem);
var vmItem=Clazz.new_($I$(13,1).c$$S,["Java VM"]);
vmItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(62).aboutJava$();
});
})()
), Clazz.new_(P$.Launcher$34.$init$,[this, null])));
this.diagnosticMenu.add$javax_swing_JMenuItem(vmItem);
var OSItem=Clazz.new_($I$(13,1).c$$S,["OS"]);
OSItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(62).aboutOS$();
});
})()
), Clazz.new_(P$.Launcher$35.$init$,[this, null])));
this.diagnosticMenu.add$javax_swing_JMenuItem(OSItem);
var j3dItem=Clazz.new_($I$(13,1).c$$S,["Java 3D"]);
j3dItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(62).aboutJava3D$();
});
})()
), Clazz.new_(P$.Launcher$36.$init$,[this, null])));
this.diagnosticMenu.add$javax_swing_JMenuItem(j3dItem);
var joglItem=Clazz.new_($I$(13,1).c$$S,["JOGL"]);
joglItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(62).aboutJOGL$();
});
})()
), Clazz.new_(P$.Launcher$37.$init$,[this, null])));
this.diagnosticMenu.add$javax_swing_JMenuItem(joglItem);
this.helpMenu.addSeparator$();
this.aboutItem=Clazz.new_($I$(13,1));
this.aboutItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].showAboutDialog$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$38.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.aboutItem);
this.authorInfoItem=Clazz.new_($I$(13,1));
this.authorInfoItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].showAuthorInformation$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$39.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.authorInfoItem);
if (this.frame != null  && !$I$(11).isApplet ) {
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.Launcher$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].exit$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (e) {
$I$(11).setAuthorMode$Z(false);
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
$I$(11).setAuthorMode$Z(false);
});
})()
), Clazz.new_($I$(63,1),[this, null],P$.Launcher$40)));
this.fileMenu.addSeparator$();
this.exitItem=Clazz.new_($I$(13,1));
this.exitItem.setAccelerator$javax_swing_KeyStroke($I$(55,"getKeyStroke$I$I",["Q".$c(), mask]));
this.exitItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].exit$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
});
})()
), Clazz.new_(P$.Launcher$41.$init$,[this, null])));
}if (!$I$(11).isJS && $I$(11).getLaunchJarPath$() == null  ) {
$I$(1).getResource$S("/org/opensourcephysics/tools/Launcher.class");
}if (!$I$(11).isJS && $I$(11).getLaunchJarPath$() != null  ) {
var jar=$I$(11).getLaunchJar$();
if (jar != null ) {
var action=((P$.Launcher$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fileName=(e.getSource$()).getText$();
fileName=$I$(11).getLaunchJarName$() + "!/" + fileName ;
var prevArgs=this.b$['org.opensourcephysics.tools.Launcher'].undoManager.getLauncherState$();
if ((prevArgs != null ) && (this.b$['org.opensourcephysics.tools.Launcher'].open$S.apply(this.b$['org.opensourcephysics.tools.Launcher'], [fileName]) != null ) ) {
var args=Clazz.array(String, -1, [fileName]);
var edit=Clazz.new_($I$(33,1).c$$SA$SA,[this.b$['org.opensourcephysics.tools.Launcher'].undoManager, null, args, prevArgs]);
this.b$['org.opensourcephysics.tools.Launcher'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
} else {
this.b$['org.opensourcephysics.tools.Launcher'].open$S.apply(this.b$['org.opensourcephysics.tools.Launcher'], [fileName]);
this.b$['org.opensourcephysics.tools.Launcher'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.Launcher'], []);
}});
})()
), Clazz.new_($I$(34,1),[this, null],P$.Launcher$42));
for (var e=jar.entries$(); e.hasMoreElements$(); ) {
var entry=e.nextElement$();
var name=entry.getName$();
if (name.endsWith$S(".xset") && !name.startsWith$S(C$.resourcesPath.substring$I(1)) ) {
if (name.startsWith$S(C$.defaultFileName)) {
continue;
}if (this.openFromJarMenu == null ) {
this.openFromJarMenu=Clazz.new_($I$(36,1));
}var item=Clazz.new_($I$(13,1).c$$S,[name]);
item.addActionListener$java_awt_event_ActionListener(action);
this.openFromJarMenu.add$javax_swing_JMenuItem(item);
}}
}}C$.baseMenuFontSize=this.fileMenu.getFont$().getSize$();
this.frame.setJMenuBar$javax_swing_JMenuBar(menubar);
this.frame.pack$();
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (this.frame != null ) {
$I$(22,"setFonts$O$I",[this.frame.getJMenuBar$(), level]);
}$I$(22).setFonts$O$I(this.contentPane, level);
var lp=this.getSelectedTab$();
$I$(22).setFonts$O$I(lp.splitPane, level);
this.refreshStringResources$();
for (var i=0; i < this.getTabCount$(); i++) {
var tab=this.getTab$I(i);
var en=tab.getRootNode$().breadthFirstEnumeration$();
while (en.hasMoreElements$()){
var node=en.nextElement$();
tab.treeModel.nodeChanged$javax_swing_tree_TreeNode(node);
}
tab.repaint$();
}
this.refreshGUI$();
});

Clazz.newMeth(C$, 'getOpenPaths$',  function () {
this.openPaths.clear$();
this.openPaths.add$O(this.tabSetName);
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var panel=this.tabbedPane.getComponentAt$I(i);
var nodes=panel.getRootNode$().getAllOwnedNodes$();
for (var j=0; j < nodes.length; j++) {
this.openPaths.add$O(nodes[j].getFileName$());
}
this.openPaths.add$O(panel.getRootNode$().getFileName$());
}
return this.openPaths;
});

Clazz.newMeth(C$, 'setLookAndFeel$S$Z',  function (lf, always) {
if (lf == null ) {
return null;
}this.lookAndFeel=lf;
var newDecorations=true;
var currentDecorations=$I$(64).isDefaultLookAndFeelDecorated$();
if (lf.equals$O("SYSTEM")) {
this.systemLFItem.setSelected$Z(true);
} else if (lf.equals$O("CROSS_PLATFORM")) {
this.javaLFItem.setSelected$Z(true);
} else if (lf.equals$O("DEFAULT")) {
newDecorations=$I$(11).DEFAULT_LOOK_AND_FEEL_DECORATIONS;
this.defaultLFItem.setSelected$Z(true);
} else if (this.genericLFGroup.getSelection$() != null ) {
this.genericLFGroup.remove$javax_swing_AbstractButton(this.systemLFItem);
this.genericLFGroup.remove$javax_swing_AbstractButton(this.javaLFItem);
this.genericLFGroup.remove$javax_swing_AbstractButton(this.defaultLFItem);
this.systemLFItem.setSelected$Z(false);
this.javaLFItem.setSelected$Z(false);
this.defaultLFItem.setSelected$Z(false);
this.genericLFGroup.add$javax_swing_AbstractButton(this.systemLFItem);
this.genericLFGroup.add$javax_swing_AbstractButton(this.javaLFItem);
this.genericLFGroup.add$javax_swing_AbstractButton(this.defaultLFItem);
}var lfType=$I$(11).LOOK_AND_FEEL_TYPES.get$O(lf);
var currentLF=$I$(60).getLookAndFeel$();
if (!always && (newDecorations == currentDecorations ) && currentLF.getClass$().getName$().equals$O(lfType)  ) {
return null;
}if (!this.isVisible$()) {
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.Launcher$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].setLookAndFeel$S$Z.apply(this.b$['org.opensourcephysics.tools.Launcher'], [this.$finals$.lf, this.$finals$.always]);
this.b$['org.opensourcephysics.tools.Launcher'].frame.removeWindowListener$java_awt_event_WindowListener(this);
});
})()
), Clazz.new_($I$(63,1),[this, {lf:lf,always:always}],P$.Launcher$43)));
return null;
}$I$(11).setLookAndFeel$Z$S(newDecorations, lf);
if (this.spawner != null ) {
this.spawner=this.spawner.setLookAndFeel$S$Z(lf, true);
}p$1.exitCurrentApps.apply(this, []);
var undoManager=this.undoManager;
var undoSupport=this.undoSupport;
var node=this.getSelectedNode$();
var loc=this.frame.getLocation$();
this.frame.dispose$();
var launcher;
var tabset=Clazz.new_($I$(19,1).c$$org_opensourcephysics_tools_Launcher$S,[this, null, this, this.tabSetName]);
var control=Clazz.new_($I$(25,1).c$$O,[tabset]);
control.setPassword$S(null);
if (Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) {
launcher=Clazz.new_([control.toXML$()],$I$(57,1).c$$S);
} else {
launcher=Clazz.new_(C$.c$$S,[control.toXML$()]);
}launcher.setSelectedNode$S(node.getPathString$());
undoManager.setLauncher$org_opensourcephysics_tools_Launcher(launcher);
launcher.undoManager=undoManager;
launcher.undoSupport=undoSupport;
launcher.tabSetName=this.tabSetName;
launcher.password=this.password;
launcher.spawner=this.spawner;
launcher.jarBasePath=this.jarBasePath;
launcher.frame.setDefaultCloseOperation$I(this.frame.getDefaultCloseOperation$());
launcher.refreshGUI$();
launcher.frame.setLocation$java_awt_Point(loc);
launcher.setVisible$Z(true);
launcher.frame.pack$();
$I$(7,"updateComponentTreeUI$java_awt_Component",[$I$(9).getFrame$()]);
return launcher;
});

Clazz.newMeth(C$, 'showAboutDialog$',  function () {
var newline=$I$(4).NEW_LINE;
var vers="6.3.5.260922";
var date=$I$(11).getLaunchJarBuildDate$();
if ("".equals$O(date)) date="22 Sep 2026";
vers=vers + "   " + date ;
var name=this.getClass$().getSimpleName$();
var aboutString=name + " " + vers + newline + "Copyright (c) 2026 Wolfgang Christian" + newline + "Open Source Physics Project" + newline + "www.opensourcephysics.org" + newline + newline + $I$(3).getString$S("Label.CodeAuthor") + ": Douglas Brown" ;
var translator=$I$(3).getString$S("Launcher.About.Translator");
if (!translator.equals$O("")) {
var loc=$I$(3).resourceLocale;
var language=$I$(11).getDisplayLanguage$java_util_Locale(loc);
aboutString+=newline + newline + $I$(3).getString$S("Launcher.About.Language") + ": " + language + newline ;
aboutString+=$I$(3).getString$S("Launcher.About.TranslationBy") + ": " + translator + newline ;
}$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, aboutString, $I$(3).getString$S("Help.About.Title") + " " + name , 1]);
});

Clazz.newMeth(C$, 'showAuthorInformation$',  function () {
var node=this.getSelectedNode$();
if (node != null ) {
var line=$I$(4).NEW_LINE;
var info="";
if (!node.getAuthor$().trim$().equals$O("")) {
info+=$I$(3).getString$S("Label.Author") + ": ";
info+=node.getAuthor$() + line;
}if (!node.getKeywords$().trim$().equals$O("")) {
info+=$I$(3).getString$S("Label.Keywords") + ": ";
info+=node.getKeywords$() + line;
}if (!node.getCourseLevel$().trim$().equals$O("")) {
info+=$I$(3).getString$S("Label.Level") + ": ";
info+=node.getCourseLevel$() + line;
}if (!node.getLanguages$().trim$().equals$O("")) {
info+=$I$(3).getString$S("Label.Languages") + ": ";
info+=node.getLanguages$() + line;
}if (!node.getComment$().trim$().equals$O("")) {
info+=$I$(3).getString$S("Label.Comments") + ": ";
info+=node.getComment$() + line;
}if (info.equals$O("")) {
info=$I$(3).getString$S("Dialog.AuthorInfo.NoInfo");
}$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, info, $I$(3).getString$S("Help.About.Title") + " \"" + node.getName$() + "\"" , 1]);
}});

Clazz.newMeth(C$, 'isLink$org_opensourcephysics_tools_LaunchNode',  function (node) {
if ((node == null ) || !node.isLeaf$() || ((node.launchClassName != null ) && !node.launchClassName.equals$O("") )  ) {
return false;
}return (!node.args[0].equals$O("") || ((node.args.length > 1) && !node.args[1].equals$O("") ) || ((node.args.length > 2) && !node.args[2].equals$O("") )  );
});

Clazz.newMeth(C$, 'hasEJSModel$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (!$I$(11).launcherAllowEJSModel || (node == null ) || !node.isLeaf$()  ) {
return false;
}return node.getLaunchClass$() == null  ? false : $I$(65,"hasEjsModel$Class",[node.getLaunchClass$()]);
});

Clazz.newMeth(C$, 'isLaunchable$org_opensourcephysics_tools_LaunchNode',  function (node) {
if ((node == null ) || !node.isLeaf$() ) {
return false;
}return C$.isLaunchable$Class(node.getLaunchClass$());
});

Clazz.newMeth(C$, 'setLinksEnabled$javax_swing_JEditorPane$Z',  function (textPane, enabled) {
if ((this.linkListener == null ) && enabled ) {
this.linkListener=((P$.Launcher$44||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['event','javax.swing.event.HyperlinkEvent']]]

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(66).ACTIVATED ) {
if (this.event === e ) {
return;
}this.event=e;
var url=e.getURL$();
this.b$['org.opensourcephysics.tools.Launcher'].handleHyperLink$java_net_URL.apply(this.b$['org.opensourcephysics.tools.Launcher'], [url]);
}});
})()
), Clazz.new_(P$.Launcher$44.$init$,[this, null]));
}if (enabled) {
textPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(this.linkListener);
} else {
textPane.removeHyperlinkListener$javax_swing_event_HyperlinkListener(this.linkListener);
}});

Clazz.newMeth(C$, 'handleHyperLink$java_net_URL',  function (url) {
var path=url.toString();
var extracted=!C$.isDisplayable$S(path);
var browseExternally=!url.getHost$().equals$O("") || extracted ;
if (browseExternally) {
if (extracted && path.indexOf$S("jar!") >= 0 ) {
var j=path.indexOf$S("jar!/");
var fileName=path.substring$I(j + 5);
var target=Clazz.new_($I$(67,1).c$$S,[fileName]);
if (target.exists$()) {
path=target.toURI$().toString();
} else {
var res=$I$(1).getResource$S(path);
if (res != null ) {
path=res.getURL$().toString();
var tempFile=res.getFile$();
var shutdownHook=((P$.Launcher$45||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.tempFile.deleteOnExit$();
});
})()
), Clazz.new_($I$(21,1),[this, {tempFile:tempFile}],P$.Launcher$45));
$I$(20).getRuntime$().addShutdownHook$Thread(shutdownHook);
}}}if (!$I$(68).displayURL$S(path)) {
$I$(9).warning$S("unable to open in browser: " + path);
}} else {
var undoPath=this.selectedNode.getPathString$();
var undoPage=Integer.valueOf$I(this.selectedNode.tabNumber);
var prev=this.selectedNode.getURL$();
if (prev.equals$O(url)) {
if (url.getRef$() != null ) {
this.setSelectedNode$S$I$java_net_URL(undoPath, (undoPage).$c(), url);
}return;
}var undoData=Clazz.array(java.lang.Object, -1, [null, undoPath, undoPage, prev]);
var redoData=null;
var nodeData=(prev.getPath$().equals$O(url.getPath$()) ? null : this.getNodeAndPage$java_net_URL(url));
if (nodeData != null ) {
undoPath=nodeData[0];
undoPage=Integer.valueOf$I((nodeData[1]).intValue$());
}redoData=Clazz.array(java.lang.Object, -1, [null, undoPath, undoPage, url]);
if (this.postEdits) {
var edit=Clazz.new_($I$(53,1).c$$OA$OA,[this.undoManager, null, undoData, redoData]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}this.postEdits=false;
this.setSelectedNode$S$I$java_net_URL(undoPath, (undoPage).$c(), url);
this.postEdits=true;
}});

Clazz.newMeth(C$, 'isDisplayable$S',  function (path) {
if (path.indexOf$S("#") < 0) {
for (var ext, $ext = 0, $$ext = C$.extractExtensions; $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
if (path.endsWith$S(ext)) return false;
}
}return true;
}, 1);

Clazz.newMeth(C$, 'getNodeAndPage$java_net_URL',  function (html) {
var urlPath=html.getFile$();
for (var i=0; i < this.getTabCount$(); i++) {
var tab=this.getTab$I(i);
var e=tab.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
for (var j=0; j < node.getDisplayTabCount$(); j++) {
var next=node.getDisplayTab$I(j).getURL$();
if (next == null ) {
continue;
}var nextPath=next.getFile$();
if (nextPath.equals$O(urlPath)) {
var nodePath=node.getPathString$();
return Clazz.array(java.lang.Object, -1, [nodePath, Integer.valueOf$I(j)]);
}}
}
}
return null;
});

Clazz.newMeth(C$, 'isLaunchable$Class',  function (type) {
if (type == null ) {
return false;
}try {
type.getMethod$S$ClassA("main", Clazz.array(Class, -1, [Clazz.array(String, -1)]));
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'isModel$Class',  function (type) {
if (type == null ) {
return false;
}try {
type.getMethod$S$ClassA("getModelPane", Clazz.array(Class, -1, [Clazz.array(String, -1), Clazz.getClass($I$(64))]));
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getModelPane$Class$SA',  function (type, args) {
if (type == null ) {
return null;
}var frame=null;
for (var next, $next = 0, $$next = $I$(39).getFrames$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (Clazz.instanceOf(next, "org.opensourcephysics.tools.Launcher.LauncherFrame")) {
frame=next;
break;
}}
try {
var m=type.getMethod$S$ClassA("getModelPane", Clazz.array(Class, -1, [Clazz.array(String, -1), Clazz.getClass($I$(64))]));
return m.invoke$O$OA(type, Clazz.array(java.lang.Object, -1, [args, frame]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'handleMousePressed$java_awt_event_MouseEvent$org_opensourcephysics_tools_LaunchPanel',  function (e, tab) {
var selectedNode=this.getSelectedNode$();
if ($I$(11).isPopupTrigger$java_awt_event_InputEvent(e)) {
if (!this.popupEnabled) return;
var path=tab.tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}tab.tree.setSelectionPath$javax_swing_tree_TreePath(path);
var node=this.getSelectedNode$();
if (node == null ) {
return;
}var inspectItem=Clazz.new_([$I$(3).getString$S("MenuItem.Inspect")],$I$(13,1).c$$S);
inspectItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$46||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.inspect$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.Launcher'], [this.$finals$.node]);
});
})()
), Clazz.new_(P$.Launcher$46.$init$,[this, {node:node}])));
inspectItem.setEnabled$Z((this.password == null ) || (Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) );
this.popup.add$javax_swing_JMenuItem(inspectItem);
if (node.getLaunchClass$() != null ) {
if (node.launchCount == 0) {
this.popup.addSeparator$();
var launchItem=Clazz.new_([$I$(3).getString$S("MenuItem.Launch")],$I$(13,1).c$$S);
this.popup.add$javax_swing_JMenuItem(launchItem);
launchItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$47||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.node.launch$org_opensourcephysics_tools_LaunchPanel(this.$finals$.tab);
});
})()
), Clazz.new_(P$.Launcher$47.$init$,[this, {node:node,tab:tab}])));
} else {
this.popup.addSeparator$();
var terminateItem=Clazz.new_([$I$(3).getString$S("MenuItem.Terminate")],$I$(13,1).c$$S);
this.popup.add$javax_swing_JMenuItem(terminateItem);
terminateItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$48||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.node.terminateAll$();
});
})()
), Clazz.new_(P$.Launcher$48.$init$,[this, {node:node}])));
if (node.launchCount > 1) {
terminateItem.setText$S($I$(3).getString$S("MenuItem.TerminateAll"));
}if (!node.isSingleton$()) {
var launchItem=Clazz.new_([$I$(3).getString$S("MenuItem.Relaunch")],$I$(13,1).c$$S);
this.popup.add$javax_swing_JMenuItem(launchItem);
launchItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$49||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.node.launch$org_opensourcephysics_tools_LaunchPanel(this.$finals$.tab);
});
})()
), Clazz.new_(P$.Launcher$49.$init$,[this, {node:node,tab:tab}])));
}}if (this.hasEJSModel$org_opensourcephysics_tools_LaunchNode(node)) {
this.popup.addSeparator$();
var ejsItem=Clazz.new_([$I$(3).getString$S("Popup.MenuItem.EjsModel")],$I$(13,1).c$$S);
this.popup.add$javax_swing_JMenuItem(ejsItem);
ejsItem.addActionListener$java_awt_event_ActionListener(((P$.Launcher$50||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var quit=$I$(65,"runEjs$Class$S",[this.$finals$.node.getLaunchClass$(), Clazz.new_($I$(69,1).c$$S,[this.b$['org.opensourcephysics.tools.Launcher'].password]).getCryptic$()]);
if (quit) {
this.$finals$.node.terminateAll$();
}});
})()
), Clazz.new_(P$.Launcher$50.$init$,[this, {node:node}])));
}}if (this.getClass$().equals$O(Clazz.getClass(C$))) {
this.popup.show$java_awt_Component$I$I(tab, e.getX$() + 4, e.getY$() + 12);
}} else if (e.getClickCount$() == 2) {
if (this.isLaunchable$org_opensourcephysics_tools_LaunchNode(selectedNode)) {
if (selectedNode.launchCount == 0) {
selectedNode.launch$org_opensourcephysics_tools_LaunchPanel(tab);
} else if (selectedNode.isSingleton$() || (selectedNode.isSingleVM$() && selectedNode.isSingleApp$() ) ) {
$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(3).getString$S("Dialog.Singleton.Message") + " \"" + selectedNode.toString() + "\"" , $I$(3).getString$S("Dialog.Singleton.Title"), 1]);
} else {
var selected=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(3).getString$S("Dialog.Relaunch.Message"), $I$(3).getString$S("Dialog.Relaunch.Title"), 0]);
if (selected == 0) {
selectedNode.launch$org_opensourcephysics_tools_LaunchPanel(tab);
}}if (selectedNode.launchPanel != null ) {
selectedNode.launchPanel.repaint$();
}} else if (this.isLink$org_opensourcephysics_tools_LaunchNode(selectedNode)) {
var prevArgs=this.undoManager.getLauncherState$();
if ((this.open$SA(selectedNode.args) != null ) && (prevArgs != null ) ) {
var edit=Clazz.new_($I$(33,1).c$$SA$SA,[this.undoManager, null, selectedNode.args, prevArgs]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}this.refreshGUI$();
} else if (!selectedNode.getPDFPaths$().isEmpty$()) {
for (var path, $path = selectedNode.getPDFPaths$().iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var base=C$.tabSetBasePath.equals$O("") ? this.jarBasePath : C$.tabSetBasePath;
var target=$I$(4).getResolvedPath$S$S(path, base);
target=$I$(1).getURIPath$S(target);
$I$(9).finer$S("opening PDF target: " + target);
$I$(68).displayURL$S(target);
}
} else if (selectedNode.getLaunchClass$() == null  && selectedNode.launchClassName != null   && !selectedNode.launchClassName.equals$O("") ) {
var jars=$I$(70,"parsePath$S",[selectedNode.getClassPath$()]);
var jarList="";
for (var i=0; i < jars.length; i++) {
if (!jarList.equals$O("")) {
if (jars[i].equals$O($I$(11).getLaunchJarName$())) {
continue;
}jarList+=", ";
}jarList+=jars[i];
}
$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(3).getString$S("Dialog.ClassNotFound.Message1") + selectedNode.launchClassName + $I$(4).NEW_LINE + $I$(3).getString$S("Dialog.ClassNotFound.Message2") + $I$(4).NEW_LINE + jarList , $I$(3).getString$S("Dialog.ClassNotFound.Title"), 2]);
}}});

Clazz.newMeth(C$, 'exitCurrentApps',  function () {
var prevFrames=$I$(39).getFrames$();
for (var i=0, n=prevFrames.length; i < n; i++) {
if (C$.existingFrames.contains$O(prevFrames[i])) {
continue;
}if (!(Clazz.instanceOf(prevFrames[i], "org.opensourcephysics.tools.Launcher.LauncherFrame"))) {
var listeners=prevFrames[i].getWindowListeners$();
for (var j=0; j < listeners.length; j++) {
listeners[j].windowClosing$java_awt_event_WindowEvent(null);
}
if (prevFrames[i].isVisible$()) {
prevFrames[i].dispose$();
}}}
}, p$1);

Clazz.newMeth(C$, 'splash',  function () {
var w=360;
var h=120;
if (C$.splashDialog == null ) {
C$.splashDialog=Clazz.new_($I$(43,1).c$$java_awt_Frame$Z,[this.frame, false]);
if (!$I$(11).isJS) {
C$.splashDialog.setUndecorated$Z(true);
}var darkred=Clazz.new_($I$(27,1).c$$I$I$I,[128, 0, 0]);
var splash=Clazz.new_([Clazz.new_($I$(46,1))],$I$(32,1).c$$java_awt_LayoutManager);
splash.setBackground$java_awt_Color($I$(27).white);
splash.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(44,1).c$$I$I,[w, h]));
splash.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$51||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
$I$(2).splashDialog.dispose$();
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$51)));
this.frame.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$52||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
$I$(2).splashDialog.dispose$();
this.b$['org.opensourcephysics.tools.Launcher'].frame.removeMouseListener$java_awt_event_MouseListener(this);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$52)));
var etch=$I$(48).createEtchedBorder$();
splash.setBorder$javax_swing_border_Border(etch);
C$.splashDialog.setContentPane$java_awt_Container(splash);
var labels=$I$(18).createVerticalBox$();
var titleLabel=Clazz.new_($I$(71,1).c$$S,["OSP Launcher"]);
if (Clazz.instanceOf(this, "org.opensourcephysics.tools.LaunchBuilder")) {
titleLabel.setText$S("OSP Launch Builder");
}var font=titleLabel.getFont$().deriveFont$I(1);
titleLabel.setFont$java_awt_Font(font.deriveFont$F(24.0));
titleLabel.setForeground$java_awt_Color(darkred);
titleLabel.setAlignmentX$F(0.5);
titleLabel.setHorizontalAlignment$I(0);
C$.creditsLabel=Clazz.new_($I$(71,1).c$$S,[" "]);
font=font.deriveFont$I(0);
font=font.deriveFont$F(12.0);
C$.creditsLabel.setFont$java_awt_Font(font);
C$.creditsLabel.setBorder$javax_swing_border_Border($I$(48).createEmptyBorder$I$I$I$I(2, 2, 10, 2));
C$.creditsLabel.setHorizontalAlignment$I(0);
C$.creditsLabel.setAlignmentX$F(0.5);
C$.splashPathLabel=((P$.Launcher$53||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JLabel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setText$S',  function (s) {
var max=80;
if ((s != null ) && (s.length$() > max) ) {
s=s.substring$I$I(0, max - 4) + "...";
}C$.superclazz.prototype.setText$S.apply(this, [s]);
});
})()
), Clazz.new_($I$(71,1).c$$S,[this, null, " "],P$.Launcher$53));
C$.splashPathLabel.setFont$java_awt_Font(font);
C$.splashPathLabel.setBorder$javax_swing_border_Border($I$(48).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
C$.splashPathLabel.setHorizontalAlignment$I(0);
C$.splashPathLabel.setAlignmentX$F(0.5);
labels.add$java_awt_Component($I$(18).createGlue$());
labels.add$java_awt_Component(titleLabel);
labels.add$java_awt_Component($I$(18).createGlue$());
labels.add$java_awt_Component(C$.splashPathLabel);
labels.add$java_awt_Component(C$.creditsLabel);
splash.add$java_awt_Component$O(labels, "Center");
C$.splashDialog.pack$();
C$.splashTimer=Clazz.new_([4000, ((P$.Launcher$54||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.Launcher'].frame.isShowing$()) {
$I$(2).splashDialog.dispose$();
$I$(2).splashTimer.stop$();
}});
})()
), Clazz.new_(P$.Launcher$54.$init$,[this, null]))],$I$(72,1).c$$I$java_awt_event_ActionListener);
}var dim=$I$(8).getDefaultToolkit$().getScreenSize$();
var x=(dim.width/2|0);
var y=(dim.height/2|0);
C$.splashDialog.setLocation$I$I(x - (w/2|0), y - (h/2|0));
C$.splashDialog.setVisible$Z(true);
C$.splashTimer.start$();
}, p$1);

Clazz.newMeth(C$, 'exit$',  function () {
if (!this.terminateApps$()) {
var op=this.frame.getDefaultCloseOperation$();
this.frame.setDefaultCloseOperation$I(0);
$I$(7,"invokeLater$Runnable",[((P$.Launcher$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Launcher$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.Launcher'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.tools.Launcher'].frame, [this.$finals$.op]);
});
})()
), Clazz.new_(P$.Launcher$lambda2.$init$,[this, {op:op}]))]);
return;
}if (!$I$(11).isApplet && (this.frame.getDefaultCloseOperation$() == 1) ) {
if (this.canExit) System.exit$I(0);
 else {
p$1.exitCurrentApps.apply(this, []);
this.frame.setVisible$Z(false);
}} else {
p$1.exitCurrentApps.apply(this, []);
this.frame.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'terminateApps$',  function () {
if (this.frame.getDefaultCloseOperation$() == 1) {
var approved=false;
var frames=$I$(39).getFrames$();
for (var i=0, n=frames.length; i < n; i++) {
if (!approved && frames[i].isVisible$() && !(Clazz.instanceOf(frames[i], "org.opensourcephysics.tools.Launcher.LauncherFrame")) && !(frames[i] !== $I$(9).getFrame$() ) && !(Clazz.instanceOf(frames[i], "org.opensourcephysics.tools.EncryptionTool"))  ) {
if (C$.existingFrames.contains$O(frames[i])) {
continue;
}var selected=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(3).getString$S("Dialog.Terminate.Message") + $I$(4).NEW_LINE + $I$(3).getString$S("Dialog.Terminate.Question") , $I$(3).getString$S("Dialog.Terminate.Title"), 0]);
if (selected == 0) {
approved=true;
} else {
return false;
}}}
approved=false;
var declined=false;
var comps=this.tabbedPane.getComponents$();
for (var i=0; i < comps.length; i++) {
var tab=comps[i];
var e=tab.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
if (!node.processes.isEmpty$()) {
if (!approved && !declined ) {
var selected=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I",[this.frame, $I$(3).getString$S("Dialog.TerminateSeparateVM.Message") + $I$(4).NEW_LINE + $I$(3).getString$S("Dialog.TerminateSeparateVM.Question") , $I$(3).getString$S("Dialog.TerminateSeparateVM.Title"), 0]);
approved=(selected == 0);
declined=!approved;
}if (approved) {
for (var it=node.processes.iterator$(); it.hasNext$(); ) {
var proc=it.next$();
it.remove$();
proc.destroy$();
}
} else {
return false;
}}}
}
}return true;
});

Clazz.newMeth(C$, 'getFileIcon$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (node.getFileName$().length$() == 0) {
return null;
}var file=node.getFile$();
var res=node.getResource$();
var changed=this.changedFiles.contains$O(node.getFileName$());
if (changed) {
return C$.yellowFileIcon;
} else if ((res == null ) || node.isParentSelfContained$() ) {
return C$.ghostFileIcon;
} else if ((file != null ) && file.canWrite$() ) {
return C$.whiteFileIcon;
} else if (file == null ) {
return C$.magentaFileIcon;
}return C$.redFileIcon;
});

Clazz.newMeth(C$, 'launch$Class',  function (type) {
C$.launch$Class$SA$org_opensourcephysics_tools_LaunchNode(type, null, null);
}, 1);

Clazz.newMeth(C$, 'launch$Class$SA',  function (type, args) {
C$.launch$Class$SA$org_opensourcephysics_tools_LaunchNode(type, args, null);
}, 1);

Clazz.newMeth(C$, 'launch$Class$SA$org_opensourcephysics_tools_LaunchNode',  function (type, args, node) {
if (type == null ) {
$I$(9,"info$S",[$I$(3).getString$S("Log.Message.NoClass")]);
$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(3).getString$S("Dialog.NoLaunchClass.Message"), $I$(3).getString$S("Dialog.NoLaunchClass.Title"), 2]);
return;
}var desc=$I$(3).getString$S("Log.Message.Launching") + " " + type + ", args " ;
if (args == null ) {
desc+=args;
} else {
desc+="{";
for (var i=0; i < args.length; i++) {
desc+=args[i];
if (i < args.length - 1) {
desc+=", ";
}}
desc+="}";
}$I$(9).fine$S(desc);
if ($I$(11).launchingInSingleVM || !C$.newVMAllowed ) {
$I$(11).launchingInSingleVM=true;
$I$(9,"finer$S",[$I$(3).getString$S("Log.Message.LaunchCurrentVM")]);
var prevFrames=$I$(39).getFrames$();
if (C$.singleAppMode) {
$I$(9,"finer$S",[$I$(3).getString$S("Log.Message.LaunchSingleApp")]);
var vis=$I$(9).isLogVisible$();
for (var i=0, n=prevFrames.length; i < n; i++) {
if (C$.existingFrames.contains$O(prevFrames[i])) {
continue;
}if (!(Clazz.instanceOf(prevFrames[i], "org.opensourcephysics.tools.Launcher.LauncherFrame"))) {
var listeners=prevFrames[i].getWindowListeners$();
for (var j=0; j < listeners.length; j++) {
listeners[j].windowClosing$java_awt_event_WindowEvent(null);
}
prevFrames[i].dispose$();
}}
if (vis) {
$I$(9).showLog$();
}}if (node != null ) {
var classPath=node.getClassPath$();
$I$(4,"setClassLoader$ClassLoader",[$I$(70).getClassLoader$S(classPath)]);
}if (node != null  && node.launchPanel != null   && node.launchPanel.launcher != null  ) {
var pw=node.launchPanel.launcher.password;
var encrypted=pw == null  ? null : Clazz.new_($I$(69,1).c$$S,[pw]).getCryptic$();
try {
System.setProperty$S$S("launcher.password", encrypted);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}var launchArgs=args;
var launchRunner=((P$.Launcher$55||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(11).activeNode=this.$finals$.node;
try {
var m=this.$finals$.type.getMethod$S$ClassA("main", Clazz.array(Class, -1, [Clazz.array(String, -1)]));
m.invoke$O$OA(this.$finals$.type, Clazz.array(java.lang.Object, -1, [this.$finals$.launchArgs]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (this.$finals$.node != null ) this.$finals$.node.threads.remove$O(this);
$I$(11).activeNode=null;
if ($I$(2).frameFinder != null ) {
$I$(2).findFramesFor$org_opensourcephysics_tools_LaunchNode$java_awt_FrameA$Runnable(this.$finals$.node, this.$finals$.prevFrames, this);
if ($I$(2).frameFinder != null ) {
$I$(2).frameFinder.stop$();
$I$(2).frameFinder=null;
}}});
})()
), Clazz.new_(P$.Launcher$55.$init$,[this, {type:type,node:node,prevFrames:prevFrames,launchArgs:launchArgs}]));
if (C$.frameFinder != null ) {
C$.frameFinder.stop$();
}C$.frameFinder=Clazz.new_([1000, ((P$.Launcher$56||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(2).findFramesFor$org_opensourcephysics_tools_LaunchNode$java_awt_FrameA$Runnable(this.$finals$.node, this.$finals$.prevFrames, this.$finals$.launchRunner);
});
})()
), Clazz.new_(P$.Launcher$56.$init$,[this, {node:node,prevFrames:prevFrames,launchRunner:launchRunner}]))],$I$(72,1).c$$I$java_awt_event_ActionListener);
var launchThread=Clazz.new_($I$(21,1).c$$Runnable,[launchRunner]);
launchThread.setDaemon$Z(true);
if (node != null ) node.threads.put$O$O(launchRunner, launchThread);
launchThread.start$();
C$.frameFinder.start$();
return;
}$I$(9,"finer$S",[$I$(3).getString$S("Log.Message.LaunchSeparateVM")]);
var cmd=Clazz.new_($I$(73,1));
cmd.add$O("java");
cmd.add$O("-Dorg.osp.launcher=true");
if (node != null  && node.launchPanel != null   && node.launchPanel.launcher != null   && node.launchPanel.launcher.password != null  ) {
var encrypted=Clazz.new_($I$(69,1).c$$S,[node.launchPanel.launcher.password]).getCryptic$();
cmd.add$O("-Dlauncher.password=" + encrypted);
}if ((C$.classPath != null ) && !C$.classPath.equals$O("") ) {
var jar=C$.getDefaultJar$();
if ((jar != null ) && (C$.classPath.indexOf$S(jar) == -1) ) {
C$.classPath+=";" + jar;
}var i=C$.classPath.indexOf$S(":");
while (i != -1){
C$.classPath=C$.classPath.substring$I$I(0, i) + ";" + C$.classPath.substring$I(i + 1) ;
i=C$.classPath.indexOf$S(":");
}
var pathSeparator=System.getProperty$S("path.separator").charAt$I(0);
C$.classPath=C$.classPath.replace$C$C(";", pathSeparator);
cmd.add$O("-classpath");
cmd.add$O(C$.classPath);
}cmd.add$O(type.getName$());
if (args != null ) {
for (var i=0; i < args.length; i++) {
if (args[i] != null ) {
cmd.add$O(args[i]);
}}
}var launchRunner=((P$.Launcher$57||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(9,"finer$S",[$I$(3).getString$S("Log.Message.Command") + " " + this.$finals$.cmd.toString() ]);
var cmdarray=this.$finals$.cmd.toArray$OA(Clazz.array(String, [0]));
var envVars=Clazz.array(String, -1, ["osp_launcher=true"]);
try {
var proc=$I$(20).getRuntime$().exec$SA$SA(cmdarray, envVars);
if (this.$finals$.node != null ) {
this.$finals$.node.processes.add$O(proc);
}var errStream=Clazz.new_([proc.getErrorStream$()],$I$(74,1).c$$java_io_InputStream);
var buff=Clazz.new_($I$(75,1));
while (true){
var datum=errStream.read$();
if (datum == -1) {
break;
}buff.append$C(String.fromCharCode(datum));
}
var msg=buff.toString().trim$();
if (msg.length$() > 0) {
$I$(9,"warning$S",["error when launching node " + this.$finals$.node + ": " + buff.toString() ]);
}errStream.close$();
proc.waitFor$();
if (this.$finals$.node != null ) {
this.$finals$.node.threadRunning$Z(false);
this.$finals$.node.processes.remove$O(proc);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(9,"info$S",[ex.toString()]);
if (this.$finals$.node != null ) {
this.$finals$.node.threadRunning$Z(false);
}} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Launcher$57.$init$,[this, {cmd:cmd,node:node}]));
if (node != null ) {
node.threadRunning$Z(true);
}Clazz.new_($I$(21,1).c$$Runnable,[launchRunner]).start$();
}, 1);

Clazz.newMeth(C$, 'setJarsOnly$Z',  function (onlyJars) {
$I$(70).jarsOnly=onlyJars;
}, 1);

Clazz.newMeth(C$, 'start$SA$J',  function (args, desiredMemorySize) {
if (!$I$(11).isJS) {
var memory=$I$(49).getMemoryMXBean$();
var memorySize=Long.$div(memory.getHeapMemoryUsage$().getMax$(),(1048576));
if (Long.$lt(memorySize,Long.$div(Long.$mul(9,desiredMemorySize),10) )) {
C$.relaunch$SA$J$java_awt_Component(args, desiredMemorySize, null);
return;
}}C$.mainLauncher=Clazz.new_(C$);
if ((args != null ) && (args.length > 0) ) {
C$.mainLauncher.open$SA(args);
} else {
var path=null;
if ($I$(11).getLaunchJarName$() != null ) {
path=C$.mainLauncher.open$S($I$(4,"stripExtension$S",[$I$(11).getLaunchJarName$()]) + ".xset");
}if (path == null ) {
path=C$.mainLauncher.open$S(C$.defaultFileName + ".xset");
}if (path == null ) {
path=C$.mainLauncher.open$S(C$.defaultFileName + ".xml");
}}C$.mainLauncher.refreshGUI$();
var dim=$I$(8).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.mainLauncher.frame.getBounds$().width)/2|0);
var y=((dim.height - C$.mainLauncher.frame.getBounds$().height)/2|0);
C$.mainLauncher.frame.setLocation$I$I(x, y);
C$.mainLauncher.frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'relaunch$SA$J$java_awt_Component',  function (args, memorySize, comp) {
var jarPath=$I$(11).getLaunchJarPath$();
var cmd=Clazz.new_($I$(73,1));
cmd.add$O("java");
cmd.add$O("-Xms32m");
cmd.add$O("-Xmx" + Long.$s(memorySize) + "m" );
cmd.add$O("-jar");
cmd.add$O(jarPath);
if (args != null ) {
for (var next, $next = 0, $$next = args; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
cmd.add$O(next);
}
}var timer=$I$(11,"trigger$I$java_awt_event_ActionListener",[500, (P$.Launcher$lambda3$||(P$.Launcher$lambda3$=(((P$.Launcher$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Launcher$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
System.exit$I(0);
});
})()
), Clazz.new_(P$.Launcher$lambda3.$init$,[this, null])))))]);
var launchRunner=((P$.Launcher$58||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var cmdarray=this.$finals$.cmd.toArray$OA(Clazz.array(String, [0]));
try {
var proc=$I$(20).getRuntime$().exec$SA(cmdarray);
var errStream=Clazz.new_([proc.getErrorStream$()],$I$(74,1).c$$java_io_InputStream);
errStream.read$();
this.$finals$.timer.stop$();
errStream.close$();
$I$(26,"showMessageDialog$java_awt_Component$O$S$I",[this.$finals$.comp, $I$(3).getString$S("Launcher.Dialog.InsufficientMemory.Message") + " " + Long.$s(this.$finals$.memorySize) + "MB." , $I$(3).getString$S("Launcher.Dialog.InsufficientMemory.Title"), 2]);
if ($I$(2).mainLauncher == null ) {
if (!$I$(11).isJS) {
var memory=$I$(49).getMemoryMXBean$();
var memorySize=Long.$div(memory.getHeapMemoryUsage$().getMax$(),(1048576));
$I$(2).start$SA$J(this.$finals$.args, memorySize);
} else {
$I$(2).start$SA$J(this.$finals$.args, 512);
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Launcher$58.$init$,[this, {args:args,timer:timer,cmd:cmd,comp:comp,memorySize:memorySize}]));
Clazz.new_($I$(21,1).c$$Runnable,[launchRunner]).start$();
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var memorySize=512;
if (!$I$(11).isJS) {
var memory=$I$(49).getMemoryMXBean$();
memorySize=Long.$div(memory.getHeapMemoryUsage$().getMax$(),(1048576));
}if ($I$(11).getLaunchJarName$() != null ) {
var xset=$I$(4,"stripExtension$S",[$I$(11).getLaunchJarName$()]) + ".xset";
var jarBase=$I$(11).getLaunchJarDirectory$();
var path=$I$(4).getResolvedPath$S$S(xset, jarBase);
var control=Clazz.new_($I$(25,1).c$$S,[path]);
if (!control.failedToRead$() && control.getPropertyNamesRaw$().contains$O("memory_size") ) {
memorySize=control.getInt$S("memory_size");
}}C$.start$SA$J(args, memorySize);
}, 1);

Clazz.newMeth(C$, 'getClassChooser$',  function () {
if (this.classChooser == null ) {
this.classChooser=Clazz.new_($I$(70,1).c$$java_awt_Component,[this.contentPane]);
}return this.classChooser;
});

Clazz.newMeth(C$, 'getXMLFilter$',  function () {
if (C$.xmlFileFilter == null ) {
C$.xmlFileFilter=((P$.Launcher$59||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

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
}if ((extension != null ) && extension.equals$O("xml") ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(3).getString$S("FileChooser.XMLFilter.Description");
});
})()
), Clazz.new_($I$(76,1),[this, null],P$.Launcher$59));
}return C$.xmlFileFilter;
}, 1);

Clazz.newMeth(C$, 'getXMLChooser$',  function () {
if (C$.chooser != null ) {
$I$(22,"setFonts$O$I",[C$.chooser, $I$(22).getLevel$()]);
return C$.chooser;
}C$.chooser=Clazz.new_([Clazz.new_([$I$(11).chooserDir],$I$(67,1).c$$S)],$I$(77,1).c$$java_io_File);
C$.launcherFileFilter=((P$.Launcher$60||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

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
}if ((extension != null ) && (extension.equals$O("xset") || extension.equals$O("xml") || extension.equals$O("zip") || extension.equals$O("trz")  ) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(3).getString$S("FileChooser.LauncherFilter.Description");
});
})()
), Clazz.new_($I$(76,1),[this, null],P$.Launcher$60));
C$.xsetFileFilter=((P$.Launcher$61||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

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
}if ((extension != null ) && extension.equals$O("xset") ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(3).getString$S("FileChooser.XSETFilter.Description");
});
})()
), Clazz.new_($I$(76,1),[this, null],P$.Launcher$61));
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.getXMLFilter$());
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.xsetFileFilter);
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.launcherFileFilter);
$I$(22,"setFonts$O$I",[C$.chooser, $I$(22).getLevel$()]);
return C$.chooser;
}, 1);

Clazz.newMeth(C$, 'refreshSelectedTab$',  function () {
var root=this.getRootNode$();
if ((root != null ) && root.isButtonView$() && (this.getClass$() === Clazz.getClass(C$) )  ) {
this.showButtonView$org_opensourcephysics_tools_LaunchNode(root);
} else {
this.showTabbedPaneView$();
var tab=this.getSelectedTab$();
if (tab != null  && !tab.isSelectingNode ) {
tab.rebuildAndDisplayTabs$org_opensourcephysics_tools_LaunchNode(this.getSelectedNode$() == null  ? root : this.selectedNode);
}}});

Clazz.newMeth(C$, 'refreshMemoryButton$',  function () {
var cur=0;
var max=512;
if (!$I$(11).isJS) {
System.gc$();
var memory=$I$(49).getMemoryMXBean$();
cur=Long.$div(memory.getHeapMemoryUsage$().getUsed$(),(1048576));
max=Long.$div(memory.getHeapMemoryUsage$().getMax$(),(1048576));
}var mem=$I$(3).getString$S("Launcher.Button.Memory") + ": ";
var of=$I$(3).getString$S("Launcher.Of") + " ";
this.memoryButton.setText$S(mem + Long.$s(cur) + "MB " + of + Long.$s(max) + "MB" );
var used=(Long.$dval(cur)) / max;
this.memoryButton.setForeground$java_awt_Color(used > 0.8  ? $I$(27).red : $I$(27).black);
});

Clazz.newMeth(C$, 'getDisplayName$S',  function (fileName) {
fileName=$I$(4).getName$S(fileName);
var i=fileName.lastIndexOf$S(".");
if (i != -1) {
return fileName.substring$I$I(0, i);
}return fileName;
}, 1);

Clazz.newMeth(C$, 'getDefaultJar$',  function () {
var url=ClassLoader.getSystemResource$S(C$.defaultFileName + ".xset");
if (url == null ) {
url=ClassLoader.getSystemResource$S(C$.defaultFileName + ".xml");
}if (url == null ) {
return null;
}var path=url.getPath$();
var i=path.indexOf$S("/" + C$.defaultFileName);
if (i == -1) {
return null;
}path=path.substring$I$I(0, i);
i=path.lastIndexOf$S("!");
if (i == -1) {
return null;
}return path.substring$I$I(path.lastIndexOf$S("/") + 1, i);
}, 1);

Clazz.newMeth(C$, 'inspect$org_opensourcephysics_tools_LaunchNode',  function (node) {
var xml=Clazz.new_($I$(25,1).c$$O,[node]);
if (this.hasEJSModel$org_opensourcephysics_tools_LaunchNode(node)) {
var name=$I$(4,"getSimpleClassName$Class",[node.getLaunchClass$()]);
xml.setValue$S$O("EJS_model", name + ".xml");
}var table=Clazz.new_($I$(78,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
this.tableInspector.setContentPane$java_awt_Container(Clazz.new_($I$(16,1).c$$java_awt_Component,[table]));
this.tableInspector.setTitle$S($I$(3).getString$S("Inspector.Title.Node") + " \"" + node.name + "\"" );
this.tableInspector.setVisible$Z(true);
}, p$1);

Clazz.newMeth(C$, 'findFramesFor$org_opensourcephysics_tools_LaunchNode$java_awt_FrameA$Runnable',  function (node, prevFrames, runner) {
var frames=$I$(39).getFrames$();
var newFrames=Clazz.new_($I$(6,1));
for (var i=0; i < frames.length; i++) {
if (Clazz.instanceOf(frames[i], "javax.swing.JFrame")) {
var frame=frames[i];
if ((frame.getDefaultCloseOperation$() == 0) || (Clazz.instanceOf(frame, "org.opensourcephysics.controls.MessageFrame")) || (Clazz.instanceOf(frame, "org.opensourcephysics.tools.Launcher.LauncherFrame"))  ) {
continue;
}}if ((frames[i].getClass$().getName$().indexOf$S("SharedOwnerFrame") > -1)) {
continue;
}newFrames.add$O(frames[i]);
}
for (var i=0; i < prevFrames.length; i++) {
newFrames.remove$O(prevFrames[i]);
}
if (newFrames.isEmpty$()) {
return;
}frames=newFrames.toArray$OA(Clazz.array($I$(39), [0]));
newFrames.clear$();
var frameCloser=Clazz.new_($I$(79,1).c$$org_opensourcephysics_tools_LaunchNode$java_util_Collection$Runnable,[node, newFrames, runner]);
for (var i=0; i < frames.length; i++) {
if (Clazz.instanceOf(frames[i], "javax.swing.JFrame")) {
var frame=frames[i];
if (((Clazz.instanceOf(frame, "org.opensourcephysics.display.AppFrame")) && (frame).wishesToExit$() ) || (frame.getDefaultCloseOperation$() == 3) ) {
if (frame.getDefaultCloseOperation$() == 3) {
frame.setDefaultCloseOperation$I(2);
}frame.addWindowListener$java_awt_event_WindowListener(frameCloser);
}newFrames.add$O(frame);
}}
if (node != null ) {
node.frames.addAll$java_util_Collection(newFrames);
++node.launchCount;
if (C$.frameFinder != null ) {
C$.frameFinder.stop$();
C$.frameFinder=null;
}if (node.launchPanel != null ) {
node.launchPanel.repaint$();
}}}, 1);

Clazz.newMeth(C$, 'loadIcon$S',  function (imageName) {
var icon=$I$(1).getResizableIcon$S("/org/opensourcephysics/resources/tools/images/" + imageName);
if (icon != null ) return icon;
if (C$.defaultIcon == null ) {
C$.defaultIcon=Clazz.new_([((P$.Launcher$62||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.Icon', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
var prev=g.getColor$();
g.setColor$java_awt_Color($I$(27).BLUE);
g.drawOval$I$I$I$I(x + 3, y + 3, 10, 10);
g.setColor$java_awt_Color(prev);
});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return 16;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return 16;
});
})()
), Clazz.new_(P$.Launcher$62.$init$,[this, null]))],$I$(80,1).c$$javax_swing_Icon);
}return C$.defaultIcon;
}, 1);

Clazz.newMeth(C$, 'log$S',  function (key) {
$I$(9,"finest$S",[$I$(3).getString$S(key)]);
}, 1);

Clazz.newMeth(C$, 'urlExists$java_net_URL',  function (url) {
try {
var stream;
stream=url.getContent$();
if (stream != null ) {
stream.close$();
return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return false;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.defaultFileName="launcher_default";
C$.resourcesPath="/org/opensourcephysics/resources/tools/";
C$.tabSetBasePath="";
C$.releaseDate="July 2007";
C$.wInit=480;
C$.hInit=400;
C$.singleAppMode=false;
C$.newVMAllowed=false;
C$.existingFrames=Clazz.new_($I$(6,1));
C$.extractExtensions=Clazz.array(String, -1, ["pdf", "txt", "doc"]);
C$.passwords=Clazz.new_($I$(17,1));
{
$I$(11).setAuthorMode$Z(false);
$I$(11).setLauncherMode$Z(true);
for (var ext, $ext = 0, $$ext = C$.extractExtensions; $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
$I$(1).addExtractExtension$S(ext);
}
C$.launchIcon=C$.loadIcon$S("launch.gif");
C$.launchIcon=C$.loadIcon$S("launch.gif");
C$.launchedIcon=C$.loadIcon$S("launched.gif");
C$.singletonIcon=C$.loadIcon$S("singleton.gif");
C$.noFileIcon=C$.loadIcon$S("nofile.gif");
C$.greenFileIcon=C$.loadIcon$S("greenfile.gif");
C$.magentaFileIcon=C$.loadIcon$S("magentafile.gif");
C$.linkIcon=C$.loadIcon$S("link.gif");
C$.htmlIcon=C$.loadIcon$S("html.gif");
C$.launchEmptyIcon=C$.loadIcon$S("launchempty.gif");
C$.ejsIcon=C$.loadIcon$S("launchEJS.gif");
C$.whiteFolderIcon=C$.loadIcon$S("whitefolder.gif");
C$.navOpenIcon=C$.loadIcon$S("nav_open.gif");
C$.navClosedIcon=C$.loadIcon$S("nav_closed.gif");
C$.backIcon=C$.loadIcon$S("undo.gif");
C$.forwardIcon=C$.loadIcon$S("redo.gif");
C$.backDisabledIcon=C$.loadIcon$S("undodisabled.gif");
C$.forwardDisabledIcon=C$.loadIcon$S("redodisabled.gif");
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "LauncherFrame", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setName$S("LauncherTool");
try {
this.setIconImage$java_awt_Image($I$(1).getImageIcon$S("/org/opensourcephysics/resources/controls/images/osp_icon.gif").getImage$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "LaunchRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z',  function (tree, value, sel, expanded, leaf, row, hasFocus) {
C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
var node=value;
this.setToolTipText$S(node.tooltip.equals$O("") ? null : node.tooltip);
var icon=$I$(2).whiteFolderIcon;
if ((node.getFileName$() != null ) && (Clazz.instanceOf(this.b$['org.opensourcephysics.tools.Launcher'], "org.opensourcephysics.tools.LaunchBuilder")) ) {
this.setToolTipText$S($I$(3).getString$S("ToolTip.FileName") + " \"" + node.getFileName$() + "\"" );
icon=this.b$['org.opensourcephysics.tools.Launcher'].getFileIcon$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.Launcher'], [node]);
} else if (node.launchCount > 0) {
if (node.isSingleton$()) {
icon=$I$(2).singletonIcon;
} else if (node.isSingleVM$() && node.isSingleApp$() ) {
icon=$I$(2).singletonIcon;
} else {
icon=$I$(2).launchedIcon;
}} else if (this.b$['org.opensourcephysics.tools.Launcher'].hasEJSModel$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.Launcher'], [node])) {
icon=$I$(2).ejsIcon;
} else if (this.b$['org.opensourcephysics.tools.Launcher'].isLaunchable$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.Launcher'], [node])) {
icon=$I$(2).launchIcon;
} else if (this.b$['org.opensourcephysics.tools.Launcher'].isLink$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.Launcher'], [node])) {
icon=$I$(2).linkIcon;
} else if (node.isLeaf$()) {
if ((node.getLaunchClass$() == null ) && (node.launchClassName != null ) && !node.launchClassName.equals$O("")  ) {
icon=$I$(2).launchEmptyIcon;
} else if (node.getDisplayTabCount$() > 0) {
var count=0;
for (var it=node.tabData.iterator$(); it.hasNext$(); ) {
var html=it.next$();
if ((html.url != null ) || (html.getModelClass$() != null ) ) {
++count;
}}
if (count > 0) {
icon=$I$(2).htmlIcon;
} else {
icon=$I$(2).noFileIcon;
}} else {
icon=$I$(2).noFileIcon;
}}this.setIcon$javax_swing_Icon(icon);
return this;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "LaunchSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.failedToLoad=false;
this.showHiddenNodes=true;
},1);

C$.$fields$=[['Z',['failedToLoad','showHiddenNodes'],'S',['name'],'O',['launcher','org.opensourcephysics.tools.Launcher']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.launcher=this.b$['org.opensourcephysics.tools.Launcher'];
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_Launcher$S',  function (launcher, path) {
;C$.$init$.apply(this);
this.launcher=launcher;
this.name=$I$(4,"getName$S",[$I$(4).forwardSlash$S(path)]);
}, 1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tabset=obj;
var launcher=tabset.launcher;
control.setValue$S$O("classpath", $I$(2).classPath);
control.setValue$S$O("title", launcher.title);
var dim=launcher.getSize$();
control.setValue$S$I("width", dim.width);
control.setValue$S$I("height", dim.height);
control.setValue$S$I("divider", launcher.divider);
control.setValue$S$O("look_and_feel", launcher.lookAndFeel);
control.setValue$S$Z("editor_enabled", launcher.editorEnabled);
if (this.b$['org.opensourcephysics.tools.Launcher'].saveState) {
var node=launcher.getSelectedNode$();
control.setValue$S$O("selected_node", node.getPathString$());
var n=launcher.tabbedPane.getTabCount$();
var expansions=Clazz.array($I$(5), [n]);
for (var i=0; i < n; i++) {
var tab=launcher.getTab$I(i);
expansions[i]=tab.getExpandedNodes$();
}
control.setValue$S$O("expanded", expansions);
}var nodes=Clazz.new_($I$(6,1));
for (var i=0; i < launcher.tabs.size$(); i++) {
var root=(launcher.tabs.get$I(i)).getRootNode$();
if (root.isHiddenInLauncher$() && !tabset.showHiddenNodes ) {
continue;
}root.parentSelfContained=false;
root.previewing=false;
root.saveHiddenNodes=tabset.showHiddenNodes;
if (launcher.selfContained) {
root.setSelfContained$Z(false);
root.parentSelfContained=true;
nodes.add$O(root);
} else if (launcher.previewing) {
root.previewing=true;
nodes.add$O(root);
} else if ((root.getFileName$() == null ) || root.getFileName$().equals$O("") ) {
nodes.add$O(root);
} else {
nodes.add$O(root.getFileName$());
}}
control.setValue$S$O("launch_nodes", nodes);
var hasPW=(launcher.password != null ) && !launcher.password.equals$O("") ;
if (hasPW && this.b$['org.opensourcephysics.tools.Launcher'].pwRequiredToLoad ) {
control.setValue$S$Z("pw_required_by_launcher", true);
}control.setValue$S$O("xml_password", launcher.password);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tabset=obj;
var launcher=tabset.launcher;
if (control.getPropertyNamesRaw$().contains$O("launchset")) {
var path=launcher.open$S(control.getString$S("launchset"));
tabset.failedToLoad=path == null ;
return obj;
}if (control.getPropertyNamesRaw$().contains$O("classpath")) {
$I$(2).classPath=control.getString$S("classpath");
}var lookAndFeel=control.getString$S("look_and_feel");
if (lookAndFeel != null ) {
$I$(7,"invokeLater$Runnable",[((P$.Launcher$LaunchSet$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Launcher$LaunchSet$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.launcher.setLookAndFeel$S$Z.apply(this.$finals$.launcher, [this.$finals$.lookAndFeel, false]);
});
})()
), Clazz.new_(P$.Launcher$LaunchSet$lambda1.$init$,[this, {lookAndFeel:lookAndFeel,launcher:launcher}]))]);
}if (control.getPropertyNamesRaw$().contains$O("memory_size")) launcher.xsetMemorySize=control.getInt$S("memory_size");
 else launcher.xsetMemorySize=0;
var selectedPath=control.getString$S("selected_node");
launcher.saveState=selectedPath != null ;
var rootEnabled=true;
var nodes=Clazz.getClass($I$(5),['add$O','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$OA','toArray$java_util_function_IntFunction']).cast$O(control.getObject$S("launch_nodes"));
if ((nodes != null ) && !nodes.isEmpty$() ) {
var i=launcher.tabbedPane.getSelectedIndex$();
var it=nodes.iterator$();
var tabAdded=false;
var buttonNode=null;
while (it.hasNext$()){
var next=it.next$();
if ((tabset.name != null ) && tabset.name.equals$O(next) ) {
continue;
}if (Clazz.instanceOf(next, "java.lang.String")) {
var path=$I$(4,"getResolvedPath$S$S",[next, $I$(2).tabSetBasePath]);
if (launcher.open$S(path) != null ) {
tabAdded=true;
}} else if (Clazz.instanceOf(next, "org.opensourcephysics.tools.LaunchNode")) {
var node=next;
if (!tabAdded) {
if ($I$(2).splashDialog != null  && $I$(2).splashDialog.isVisible$() ) {
if (!node.getAuthor$().trim$().equals$O("")) {
var by=$I$(3).getString$S("Label.Author") + ": ";
$I$(2).creditsLabel.setText$S(by + node.getAuthor$());
}}if (Clazz.instanceOf(control, "org.opensourcephysics.controls.XMLControlElement")) {
var element=control;
var pw=element.getPassword$();
if (pw != null  && !$I$(2).passwords.contains$O(pw) ) {
var pwRequired=control.getBoolean$S("pw_required_by_launcher");
if ((Clazz.instanceOf(this.b$['org.opensourcephysics.tools.Launcher'], "org.opensourcephysics.tools.LaunchBuilder")) || pwRequired ) {
node.enabled=false;
rootEnabled=false;
}}}}if ((launcher.getClass$() === Clazz.getClass($I$(2)) ) && node.isButtonView$() && (buttonNode == null )  ) {
buttonNode=node;
}tabAdded=launcher.addTab$org_opensourcephysics_tools_LaunchNode(node) || tabAdded ;
}}
if (!launcher.saveState || !rootEnabled ) {
if (buttonNode != null ) {
for (var j=0; j < launcher.tabbedPane.getTabCount$(); j++) {
if (launcher.getTab$I(j).getRootNode$() === buttonNode ) {
launcher.tabbedPane.setSelectedIndex$I(j);
}}
} else if (tabAdded) {
launcher.tabbedPane.setSelectedIndex$I(i + 1);
}}}if (launcher.saveState) {
var expansions=Clazz.array($I$(5), -1).cast$O(control.getObject$S("expanded"));
if (expansions != null ) {
if (rootEnabled) {
for (var i=0; i < expansions.length; i++) {
var tab=launcher.getTab$I(i);
tab.setExpandedNodes$java_util_Collection(expansions[i]);
}
} else launcher.expansions=expansions;
}if (rootEnabled) launcher.setSelectedNode$S(selectedPath);
 else launcher.selectedPath=selectedPath;
}launcher.title=control.getString$S("title");
if (control.getPropertyNamesRaw$().contains$O("editor_enabled")) {
launcher.editorEnabled=control.getBoolean$S("editor_enabled");
}launcher.password=control.getString$S("xml_password");
launcher.pwRequiredToLoad=control.getBoolean$S("pw_required_by_launcher");
if (control.getPropertyNamesRaw$().contains$O("width") && control.getPropertyNamesRaw$().contains$O("height") ) {
var dim=$I$(8).getDefaultToolkit$().getScreenSize$();
dim.width=Math.min(((8 * dim.width)/10|0), control.getInt$S("width"));
dim.height=Math.min(((8 * dim.height)/10|0), control.getInt$S("height"));
launcher.setSize$java_awt_Dimension(dim);
}if (control.getPropertyNamesRaw$().contains$O("divider")) {
launcher.divider=control.getInt$S("divider");
launcher.refreshGUI$();
}if (launcher.getRootNode$() != null  && !launcher.getRootNode$().enabled ) {
var launchr=launcher;
$I$(7,"invokeLater$Runnable",[((P$.Launcher$LaunchSet$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Launcher$LaunchSet$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.launchr.passwordItem.doClick$I.apply(this.$finals$.launchr.passwordItem, [0]);
});
})()
), Clazz.new_(P$.Launcher$LaunchSet$lambda2.$init$,[this, {launchr:launchr}]))]);
}return obj;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "FrameCloser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['node','org.opensourcephysics.tools.LaunchNode','frames','java.util.Collection','runner','Runnable']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchNode$java_util_Collection$Runnable',  function (node, newFrames, runner) {
Clazz.super_(C$, this);
this.frames=newFrames;
this.node=node;
this.runner=runner;
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
$I$(9).fine$S("Closing frames for node " + this.node);
var it=this.frames.iterator$();
while (it.hasNext$()){
var frame=it.next$();
frame.removeWindowListener$java_awt_event_WindowListener(this);
frame.dispose$();
}
if (this.node != null ) {
var thread=this.node.threads.get$O(this.runner);
if (thread != null ) {
thread.interrupt$();
this.node.threads.put$O$O(this.runner, null);
}this.node.frames.removeAll$java_util_Collection(this.frames);
this.node.launchCount=Math.max(0, --this.node.launchCount);
if (this.node.launchPanel != null ) {
this.node.launchPanel.repaint$();
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "HTMLPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['editorPane','javax.swing.JTextPane','scroller','javax.swing.JScrollPane']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.editorPane=$I$(10).newJTextPane$();
this.editorPane.setEditable$Z(false);
this.editorPane.addMouseListener$java_awt_event_MouseListener(((P$.Launcher$HTMLPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$HTMLPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.Launcher'].undoManager.canUndo$()) {
return;
}if ($I$(11).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=Clazz.new_($I$(12,1));
var item=Clazz.new_([$I$(3).getString$S("Popup.MenuItem.Back")],$I$(13,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.Launcher$HTMLPane$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$HTMLPane$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.Launcher'].undoManager.undo$();
});
})()
), Clazz.new_(P$.Launcher$HTMLPane$1$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.Launcher.HTMLPane'].editorPane, e.getX$(), e.getY$() + 8);
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.Launcher$HTMLPane$1)));
var editorKit=Clazz.new_($I$(15,1));
this.editorPane.setEditorKit$javax_swing_text_EditorKit(editorKit);
this.scroller=Clazz.new_($I$(16,1).c$$java_awt_Component,[this.editorPane]);
}, 1);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
