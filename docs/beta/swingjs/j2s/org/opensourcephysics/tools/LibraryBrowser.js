(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'java.awt.Toolkit','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.ToolsRes','java.awt.Color','org.opensourcephysics.tools.LibraryBrowser','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.LibraryTreePanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.tools.LibraryComPADRE','java.awt.event.MouseAdapter','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.tools.ResourceLoader','java.util.ArrayList','java.awt.Cursor','org.opensourcephysics.controls.XML',['org.opensourcephysics.tools.LibraryTreePanel','.NodeLoader'],['org.opensourcephysics.tools.LibraryTreePanel','.MetadataLoader'],'org.opensourcephysics.media.core.VideoIO','java.awt.datatransfer.DataFlavor',['org.opensourcephysics.tools.LibraryBrowser','.TrackerDLFilter'],['org.opensourcephysics.tools.LibraryBrowser','.FilesAndFoldersFilter'],'javax.swing.JMenuBar','org.opensourcephysics.tools.Library','javax.swing.JFrame','java.io.File','org.opensourcephysics.tools.LibraryCollection','org.opensourcephysics.controls.XMLControlElement','java.awt.event.WindowAdapter','java.awt.Dimension','org.opensourcephysics.tools.LibraryResource','javax.swing.SwingUtilities','javax.swing.JMenu','javax.swing.JMenuItem',['org.opensourcephysics.tools.LibraryBrowser','.FileDropHandler'],'org.opensourcephysics.tools.LibraryManager',['org.opensourcephysics.tools.LibraryBrowser','.HTMLFilter'],'java.util.HashSet',['org.opensourcephysics.tools.LibraryBrowser','.DirectoryFilter'],['org.opensourcephysics.tools.LibraryBrowser','.TabTitle'],['org.opensourcephysics.tools.LibraryBrowser','.TabLoader'],'javax.swing.AbstractAction','javax.swing.JTextField','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','org.opensourcephysics.display.OSPButton',['org.opensourcephysics.tools.LibraryTreePanel','.EntryField'],['org.opensourcephysics.tools.LibraryTreePanel','.HTMLPane'],'javax.swing.JTabbedPane','javax.swing.JPopupMenu','javax.swing.JToolBar','javax.swing.KeyStroke','javax.swing.JScrollPane',['org.opensourcephysics.tools.LibraryBrowser','.LibraryLoader'],'javax.swing.JButton','javax.swing.Timer','javax.swing.JOptionPane','javajs.async.AsyncDialog','org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.tools.JREFinder','ProcessBuilder','java.net.URLEncoder','java.nio.charset.StandardCharsets',['org.opensourcephysics.tools.LibraryBrowser','.Searcher'],'org.opensourcephysics.tools.Launcher','org.opensourcephysics.display.GUIUtils','java.util.HashMap','java.util.TreeMap','org.opensourcephysics.controls.ListChooser','java.util.TreeSet','org.opensourcephysics.tools.LibraryTreeNode','java.util.regex.Pattern','org.opensourcephysics.display.TextFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryBrowser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['Searcher',0],['TabTitle',0],['LibraryLoader',0],['TabLoader',0],['TrackerDLFilter',8],['DirectoryFilter',8],['HTMLFilter',8],['XMLFilter',8],['FilesAndFoldersFilter',8],['FileDropHandler',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.webConnected=$I$(6).isJS;
this.localLibraryLoaded=false;
this.library=Clazz.new_($I$(25,1));
this.dlFileFilter=C$.TRACKER_FILTER;
},1);

C$.$fields$=[['Z',['webConnected','localLibraryLoaded','exitOnClose','keyPressed','textChanged','isResourcePathXML'],'I',['myFontLevel'],'S',['libraryPath'],'O',['library','org.opensourcephysics.tools.Library','toolbar','javax.swing.JToolBar','messageButton','javax.swing.JButton','commandAction','javax.swing.Action','+searchAction','+openRecentAction','+downloadAction','commandLabel','javax.swing.JLabel','+searchLabel','commandField','javax.swing.JTextField','+searchField','fileMenu','javax.swing.JMenu','+recentMenu','+collectionsMenu','+manageMenu','+helpMenu','newItem','javax.swing.JMenuItem','+openItem','+saveItem','+saveAsItem','+closeItem','+closeAllItem','+exitItem','+deleteItem','+collectionsItem','+searchItem','+cacheItem','+aboutItem','+logItem','+helpItem','openButton','javax.swing.JButton','+editButton','+refreshButton','+downloadButton','+searchTargetButton','loadCollectionAction','java.awt.event.ActionListener','tabbedPane','javax.swing.JTabbedPane','htmlScroller','javax.swing.JScrollPane','treePanelListener','java.beans.PropertyChangeListener','+metadataLoaderListener','helpFrame','org.opensourcephysics.display.TextFrame','htmlAboutPane','javax.swing.JEditorPane','dlFileFilter','org.opensourcephysics.tools.LibraryBrowser.TrackerDLFilter','libraryManager','org.opensourcephysics.tools.LibraryManager','searchTargetChooser','org.opensourcephysics.controls.ListChooser','searchResultsTreePanel','org.opensourcephysics.tools.LibraryTreePanel','searchTargetPaths','java.util.ArrayList','+searchTargetNames','searchPathMap','java.util.TreeMap']]
,['Z',['checkedWebConnection','fireHelpEvent','useOnlineOnly','isSearchMapLoaded'],'I',['maxRecentCollectionSize','wide','high'],'S',['ospPath'],'O',['browser','org.opensourcephysics.tools.LibraryBrowser','buttonBorder','javax.swing.border.Border','frame','javax.swing.JFrame','externalDialog','javax.swing.JDialog','menubar','javax.swing.JMenuBar','expandIcon','org.opensourcephysics.display.ResizableIcon','+contractIcon','+heavyExpandIcon','+heavyContractIcon','+refreshIcon','+downloadIcon','+downloadDisabledIcon','+searchTargetIcon','TRACKER_FILTER','org.opensourcephysics.tools.LibraryBrowser.TrackerDLFilter','filesAndFoldersFilter','javax.swing.filechooser.FileFilter','searchTimer','javax.swing.Timer','searchResourceMap','java.util.Map']]]

Clazz.newMeth(C$, 'getBrowser$',  function () {
if (C$.browser == null ) {
C$.browser=C$.getBrowser$javax_swing_JDialog(null);
}return C$.browser;
}, 1);

Clazz.newMeth(C$, 'getBrowser$javax_swing_JDialog',  function (dialog) {
var newFrame=false;
if (C$.frame == null  && dialog == null  ) {
newFrame=true;
C$.frame=Clazz.new_($I$(26,1));
}C$.externalDialog=dialog;
if (C$.externalDialog != null ) C$.externalDialog.setDefaultCloseOperation$I(0);
if (C$.browser == null ) {
var libraryPath=null;
if (!$I$(6).isJS) {
var ospPath=C$.getOSPPath$();
libraryPath=ospPath + "my_library.xml";
var libraryFile=Clazz.new_($I$(27,1).c$$S,[libraryPath]);
var libraryExists=libraryFile.exists$();
if (!libraryExists) {
var collectionPath=ospPath + "my_collection.xml";
var collectionFile=Clazz.new_($I$(27,1).c$$S,[collectionPath]);
if (!collectionFile.exists$()) {
var name=$I$(3).getString$S("LibraryCollection.Name.Local");
var collection=Clazz.new_($I$(28,1).c$$S,[name]);
var base=$I$(17).getDirectoryPath$S(collectionPath);
collection.setBasePath$S($I$(17).forwardSlash$S(base));
var control=Clazz.new_($I$(29,1).c$$O,[collection]);
control.write$S(collectionPath);
}var library=Clazz.new_($I$(25,1));
var name=$I$(3).getString$S("LibraryCollection.Name.Local");
library.addCollection$S$S(collectionPath, name);
library.save$S(libraryPath);
}}C$.browser=Clazz.new_(C$.c$$S,[libraryPath]);
var treePanel=C$.browser.getSelectedTreePanel$();
if (treePanel != null ) {
treePanel.setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode(treePanel.rootNode);
treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(treePanel.rootNode, "LibraryBrowser.getBrowser");
}$I$(2).getOSPLog$();
}C$.browser.setTitle$S($I$(3).getString$S("LibraryBrowser.Title"));
if (C$.externalDialog != null ) {
C$.externalDialog.setContentPane$java_awt_Container(C$.browser);
C$.externalDialog.setJMenuBar$javax_swing_JMenuBar(C$.menubar);
C$.externalDialog.addWindowListener$java_awt_event_WindowListener(((P$.LibraryBrowser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
$I$(5).browser.exit$();
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LibraryBrowser$1)));
C$.externalDialog.pack$();
} else {
C$.frame.setContentPane$java_awt_Container(C$.browser);
C$.frame.setJMenuBar$javax_swing_JMenuBar(C$.menubar);
C$.frame.setDefaultCloseOperation$I(0);
C$.frame.addWindowListener$java_awt_event_WindowListener(((P$.LibraryBrowser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
$I$(5).browser.exit$();
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LibraryBrowser$2)));
try {
C$.frame.setIconImage$java_awt_Image($I$(14).getImageIcon$S("/org/opensourcephysics/resources/controls/images/osp_icon.gif").getImage$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
C$.frame.pack$();
if (newFrame) {
if ($I$(6).isJS) {
var dh=C$.frame.getHeight$() - C$.browser.getHeight$();
var factor=1 + ($I$(13).getFactor$() - 1) * 0.5;
var w=((factor * C$.wide)|0);
var h=((factor * C$.high)|0);
C$.browser.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(31,1).c$$I$I,[w, h - dh]));
C$.frame.pack$();
}var dim=$I$(1).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.frame.getBounds$().width)/2|0);
var y=((dim.height - C$.frame.getBounds$().height)/2|0);
C$.frame.setLocation$I$I(x, y);
}}return C$.browser;
}, 1);

Clazz.newMeth(C$, 'isPopulatedCollection$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
if (Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection") && node.children$().hasMoreElements$() ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'setAlwaysOnTop$Z',  function (alwaysOnTop) {
C$.frame.setAlwaysOnTop$Z(alwaysOnTop);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (this.myFontLevel == level) return;
this.myFontLevel=$I$(13).setFonts$java_awt_Container(C$.frame);
$I$(32).bodyFont=$I$(13,"getResizedFont$java_awt_Font$I",[$I$(32).bodyFont, this.myFontLevel]);
$I$(32).h1Font=$I$(13,"getResizedFont$java_awt_Font$I",[$I$(32).h1Font, this.myFontLevel]);
$I$(32).h2Font=$I$(13,"getResizedFont$java_awt_Font$I",[$I$(32).h2Font, this.myFontLevel]);
$I$(32).h3Font=$I$(13,"getResizedFont$java_awt_Font$I",[$I$(32).h3Font, this.myFontLevel]);
$I$(7).clearMaps$();
var font=this.tabbedPane.getFont$();
this.tabbedPane.setFont$java_awt_Font($I$(13).getResizedFont$java_awt_Font$I(font, level));
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var treePanel=this.getTreePanel$I(i);
treePanel.setFontLevel$I(level);
var c=this.tabbedPane.getTabComponentAt$I(i);
if (c != null  && Clazz.instanceOf(c, "org.opensourcephysics.tools.LibraryBrowser.TabTitle") ) {
(c).refreshFontSize$();
}}
if (this.libraryManager != null ) {
this.libraryManager.setFontLevel$I(level);
}$I$(2).setFonts$I(level);
});

Clazz.newMeth(C$, 'importLibrary$S',  function (path) {
$I$(33,"invokeLater$Runnable",[((P$.LibraryBrowser$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.importLibrary$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].library, [this.$finals$.path]);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshCollectionsMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda1.$init$,[this, {path:path}]))]);
});

Clazz.newMeth(C$, 'addOSPLibrary$S',  function (path) {
var runner=((P$.LibraryBrowser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.addOSPLibrary$S(this.$finals$.path);
});
})()
), Clazz.new_(P$.LibraryBrowser$3.$init$,[this, {path:path}]));
runner.run$();
});

Clazz.newMeth(C$, 'addComPADRECollection$S',  function (path) {
this.library.addComPADRECollection$S$S(path, $I$(11).getCollectionName$S(path));
});

Clazz.newMeth(C$, 'refreshCollectionsMenu$',  function () {
var menu=this.collectionsMenu;
menu.removeAll$();
if (!$I$(6).isJS) {
var myLibraryMenu=Clazz.new_([$I$(3).getString$S("Library.Name.Local")],$I$(34,1).c$$S);
menu.add$javax_swing_JMenuItem(myLibraryMenu);
if (!this.library.pathList.isEmpty$()) {
for (var path, $path = this.library.pathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var name=this.library.pathToNameMap.get$O(path);
var item=Clazz.new_($I$(35,1).c$$S,[name]);
myLibraryMenu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.loadCollectionAction);
item.setToolTipText$S(path);
item.setActionCommand$S(path);
}
}}if (!this.library.comPADREPathList.isEmpty$()) {
var submenu=Clazz.new_([$I$(3).getString$S("Library.Name.ComPADRE")],$I$(34,1).c$$S);
menu.add$javax_swing_JMenuItem(submenu);
for (var path, $path = this.library.comPADREPathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var name=this.library.comPADREPathToNameMap.get$O(path);
var item=Clazz.new_($I$(35,1).c$$S,[name]);
submenu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.loadCollectionAction);
item.setToolTipText$S(path);
item.setActionCommand$S(path);
this.library.allPathsToNameMap.put$O$O(path, name);
}
}if (!this.library.ospLibraryPathList.isEmpty$()) {
for (var path, $path = this.library.ospLibraryPathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var lib=this.library.ospPathToLibraryMap.get$O(path);
var submenu=Clazz.new_([lib.getName$()],$I$(34,1).c$$S);
menu.add$javax_swing_JMenuItem(submenu);
p$1.populateSubMenu$javax_swing_JMenu$org_opensourcephysics_tools_Library.apply(this, [submenu, lib]);
}
}if (!this.library.importedPathList.isEmpty$()) {
menu.addSeparator$();
for (var path, $path = this.library.importedPathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var lib=this.library.importedPathToLibraryMap.get$O(path);
var submenu=Clazz.new_([lib.getName$()],$I$(34,1).c$$S);
menu.add$javax_swing_JMenuItem(submenu);
for (var next, $next = lib.pathList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var name=lib.pathToNameMap.get$O(next);
var item=Clazz.new_($I$(35,1).c$$S,[name]);
submenu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.loadCollectionAction);
item.setToolTipText$S(next);
item.setActionCommand$S(next);
this.library.allPathsToNameMap.put$O$O(next, name);
}
}
}$I$(13).setMenuFonts$javax_swing_JMenu(this.collectionsMenu);
this.searchTargetButton.setEnabled$Z(true);
});

Clazz.newMeth(C$, 'populateSubMenu$javax_swing_JMenu$org_opensourcephysics_tools_Library',  function (menu, lib) {
for (var next, $next = lib.pathList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var name=lib.pathToNameMap.get$O(next);
var item=Clazz.new_($I$(35,1).c$$S,[name]);
menu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.loadCollectionAction);
item.setToolTipText$S(next);
item.setActionCommand$S(next);
this.library.allPathsToNameMap.put$O$O(next, name);
}
if (!lib.subPathList.isEmpty$()) {
for (var path, $path = lib.subPathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (this.library.ospLibraryPathList.contains$O(path)) continue;
var sublib=lib.subPathToLibraryMap.get$O(path);
var submenu=Clazz.new_([sublib.getName$()],$I$(34,1).c$$S);
menu.add$javax_swing_JMenuItem(submenu);
p$1.populateSubMenu$javax_swing_JMenu$org_opensourcephysics_tools_Library.apply(this, [submenu, sublib]);
}
}}, p$1);

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
if (C$.frame != null ) {
C$.frame.setTitle$S(title);
} else if (C$.externalDialog != null ) {
C$.externalDialog.setTitle$S(title);
}});

Clazz.newMeth(C$, 'getDLFileFilter$',  function () {
return this.dlFileFilter;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
this.setFontLevel$I($I$(13).getLevel$());
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
var c=this.getTopLevelAncestor$();
if (c != null ) {
c.setVisible$Z(vis);
if (vis) {
$I$(33,"invokeLater$Runnable",[((P$.LibraryBrowser$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.c.toFront$.apply(this.$finals$.c, []);
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda2.$init$,[this, {c:c}]))]);
}}});

Clazz.newMeth(C$, 'exit$',  function () {
var selected=this.getSelectedTreePanel$();
if (selected != null ) selected.refreshEntryFields$();
var recentCollectionPath=($I$(6).isJS ? null : C$.getOSPPath$() + "recent_collection.xml");
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var treePanel=this.getTreePanel$I(i);
if (!treePanel.saveChanges$S(this.getTabTitle$I(i))) return false;
if (recentCollectionPath != null  && recentCollectionPath.equals$O(treePanel.rootResource.collectionPath) ) {
treePanel.save$();
}}
var tabsToSave=Clazz.new_($I$(15,1));
var n=this.tabbedPane.getTabCount$();
for (var i=0; i < n; i++) {
var path=this.getTreePanel$I(i).pathToRoot;
if (path.equals$O("")) continue;
tabsToSave.add$O(path);
}
this.library.openTabPaths=tabsToSave.isEmpty$() ? null : tabsToSave.toArray$OA(Clazz.array(String, [tabsToSave.size$()]));
if (this.localLibraryLoaded) this.library.save$S(this.libraryPath);
if (this.exitOnClose) {
System.exit$I(0);
} else {
this.refreshGUI$();
this.setVisible$Z(false);
}return true;
});

Clazz.newMeth(C$, 'cancelLoading$',  function () {
$I$(20).setCanceled$Z(true);
this.setMessage$S$java_awt_Color("Loading canceled", $I$(4).YELLOW);
$I$(6,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.LibraryBrowser$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.LibraryBrowser'].doneLoading$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'doneLoading$',  function () {
this.setComandButtonEnabled$Z(true);
var treePanel=this.getSelectedTreePanel$();
var node=(treePanel == null  ? null : treePanel.getSelectedNode$());
this.setMessage$S$java_awt_Color(node == null  ? "" : node.getToolTip$(), null);
});

Clazz.newMeth(C$, 'c$$S',  function (libraryPath) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(8,1))]);C$.$init$.apply(this);
this.libraryPath=libraryPath;
this.library.browser=this;
this.createGUI$();
this.refreshGUI$Z(true);
this.editButton.requestFocusInWindow$();
$I$(3,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.LibraryBrowser$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$Z.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [true]);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshCollectionsMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryManager != null ) this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryManager.refreshGUI$();
$I$(7).clearMaps$();
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel != null ) treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(treePanel.getSelectedNode$(), "LibraryBrowser locale change");
});
})()
), Clazz.new_(P$.LibraryBrowser$4.$init$,[this, null]))]);
var handler=Clazz.new_($I$(36,1),[this, null]);
this.setTransferHandler$javax_swing_TransferHandler(handler);
}, 1);

Clazz.newMeth(C$, 'getManager$',  function () {
if (this.libraryManager == null ) {
if (C$.externalDialog != null ) this.libraryManager=Clazz.new_($I$(37,1).c$$org_opensourcephysics_tools_LibraryBrowser$javax_swing_JDialog,[this, C$.externalDialog]);
 else this.libraryManager=Clazz.new_($I$(37,1).c$$org_opensourcephysics_tools_LibraryBrowser$javax_swing_JFrame,[this, C$.frame]);
this.libraryManager.refreshGUI$();
var dim=$I$(1).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.libraryManager.getBounds$().width)/2|0);
var y=((dim.height - this.libraryManager.getBounds$().height)/2|0);
this.libraryManager.setLocation$I$I(x, y);
}if (this.library.pathList.size$() > 0 && this.libraryManager.collectionList.getSelectedIndex$() == -1 ) {
this.libraryManager.collectionList.setSelectedIndex$I(0);
}if (this.library.importedPathList.size$() > 0 && this.libraryManager.guestList.getSelectedIndex$() == -1 ) {
this.libraryManager.guestList.setSelectedIndex$I(0);
}this.libraryManager.setFontLevel$I($I$(13).getLevel$());
return this.libraryManager;
});

Clazz.newMeth(C$, 'getSelectedTreePanel$',  function () {
return this.tabbedPane.getSelectedComponent$();
});

Clazz.newMeth(C$, 'getTreePanel$I',  function (index) {
return this.tabbedPane.getComponentAt$I(index);
});

Clazz.newMeth(C$, 'getTabTitle$S',  function (path) {
var i=this.getTabIndexFromPath$S(path);
return i > -1 ? this.getTabTitle$I(i) : null;
});

Clazz.newMeth(C$, 'getTabTitle$I',  function (index) {
var title=this.tabbedPane.getTitleAt$I(index);
if (title == null ) return null;
if (title.endsWith$S("*")) title=title.substring$I$I(0, title.length$() - 1);
return title;
});

Clazz.newMeth(C$, 'getTabIndexFromPath$S',  function (path) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var next=this.getTreePanel$I(i);
if (next.pathToRoot.equals$O(path)) return i;
}
return -1;
});

Clazz.newMeth(C$, 'getTabIndexFromTitle$S',  function (title) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var next=this.tabbedPane.getTitleAt$I(i);
if (next.equals$O(title)) return i;
}
return -1;
});

Clazz.newMeth(C$, 'loadTab$S$java_util_List',  function (path, treePath) {
if (path == null ) return;
path=$I$(17).forwardSlash$S(path);
this.library.addRecent$S$Z(path, false);
this.refreshRecentMenu$();
var i=this.getTabIndexFromPath$S(path);
if (i > -1) {
this.tabbedPane.setSelectedIndex$I(i);
var treePanel=this.getTreePanel$I(i);
treePanel.setSelectionPath$java_util_List(treePath);
return;
}this.loadTabAndListen$S$java_util_List$S(path, treePath, "LoadTab");
});

Clazz.newMeth(C$, 'loadTabAndListen$S$java_util_List$S',  function (path, treePath, mode) {
return this.addTabAndExecute$S$java_util_List$java_beans_PropertyChangeListener(path, treePath, ((P$.LibraryBrowser$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if ("progress".equals$O(e.getPropertyName$())) {
var n=e.getNewValue$();
if ((n).$c() > -1 ) {
$I$(6).showStatus$S("LibaryBrowser: " + n);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.setSelectedIndex$I((n).$c());
switch (this.$finals$.mode) {
case "LoadTab":
break;
case "OpenRecent":
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
break;
case "CreateNew":
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel == null ) break;
treePanel.setEditing$Z(true);
treePanel.setChanged$();
treePanel.setName$S("temp");
var temp=$I$(3).getString$S("LibraryBrowser.MenuItem.New");
treePanel.rootNode.setName$S(temp);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
break;
}
}}});
})()
), Clazz.new_(P$.LibraryBrowser$5.$init$,[this, {mode:mode}])));
});

Clazz.newMeth(C$, 'getRecentCollection$',  function () {
if ($I$(6).isJS) return null;
var path=C$.getOSPPath$() + "recent_collection.xml";
var i=this.getTabIndexFromPath$S(path);
if (i > -1) {
var treePanel=this.getTreePanel$I(i);
var record=treePanel.rootResource;
if (Clazz.instanceOf(record, "org.opensourcephysics.tools.LibraryCollection")) {
return record;
}}var recentCollectionFile=Clazz.new_($I$(27,1).c$$S,[path]);
if (!recentCollectionFile.exists$()) {
var name=$I$(3).getString$S("LibraryCollection.Name.Recent");
var recentCollection=Clazz.new_($I$(28,1).c$$S,[name]);
var base=$I$(17).getDirectoryPath$S(path);
recentCollection.setBasePath$S($I$(17).forwardSlash$S(base));
var control=Clazz.new_($I$(29,1).c$$O,[recentCollection]);
control.write$S(path);
}var control=Clazz.new_($I$(29,1).c$$S,[path]);
if (!control.failedToRead$() && control.getObjectClass$() != null   && Clazz.getClass($I$(28)).isAssignableFrom$Class(control.getObjectClass$()) ) {
var collection=control.loadObject$O(null);
collection.collectionPath=path;
return collection;
}return null;
});

Clazz.newMeth(C$, 'loadResourceAsync$S$java_util_function_Function',  function (path, whenDone) {
this.isResourcePathXML=false;
if ($I$(11).isComPADREPath$S(path)) {
whenDone.apply$O($I$(11).getCollection$S(path));
return;
}var targetFile=Clazz.new_($I$(27,1).c$$S,[path]);
if (targetFile.isDirectory$()) {
whenDone.apply$O(p$1.createCollectionFromDirectory$java_io_File$java_io_File$java_io_FileFilter.apply(this, [targetFile, targetFile, this.dlFileFilter]));
return;
}var control=Clazz.new_($I$(29,1));
control.readAsync$S$java_util_function_Function(path, ((P$.LibraryBrowser$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$S','apply$O'],  function (fullPath) /*block*/{
if (this.$finals$.control.failedToRead$.apply(this.$finals$.control, []) || this.$finals$.control.getObjectClass$.apply(this.$finals$.control, []) == null   || !Clazz.getClass($I$(32)).isAssignableFrom$Class.apply(Clazz.getClass($I$(32)), [this.$finals$.control.getObjectClass$.apply(this.$finals$.control, [])]) ) {
this.$finals$.whenDone.apply$O(this.b$['org.opensourcephysics.tools.LibraryBrowser'].createResource$java_io_File$java_io_File$java_io_FileFilter.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.$finals$.targetFile, this.$finals$.targetFile.getParentFile$.apply(this.$finals$.targetFile, []), this.b$['org.opensourcephysics.tools.LibraryBrowser'].dlFileFilter]));
} else {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].isResourcePathXML=true;
this.$finals$.whenDone.apply$O(this.$finals$.control.loadObject$O.apply(this.$finals$.control, [null]));
}return null;
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda4.$init$,[this, {targetFile:targetFile,control:control,whenDone:whenDone}])));
});

Clazz.newMeth(C$, 'loadResource$S',  function (path) {
this.isResourcePathXML=false;
if ($I$(11).isComPADREPath$S(path)) {
return $I$(11).getCollection$S(path);
}var isHTTP=$I$(14).isHTTP$S(path);
if (!isHTTP) path=$I$(14).getNonURIPath$S(path);
var targetFile=null;
targetFile=Clazz.new_($I$(27,1).c$$S,[path]);
if (targetFile.isDirectory$()) {
return p$1.createCollectionFromDirectory$java_io_File$java_io_File$java_io_FileFilter.apply(this, [targetFile, targetFile, this.dlFileFilter]);
}if (!this.dlFileFilter.accept$java_io_File(targetFile)) {
var control=(isHTTP ? Clazz.new_($I$(29,1).c$$S,[path]) : Clazz.new_($I$(29,1).c$$java_io_File,[targetFile]));
if (!control.failedToRead$() && control.getObjectClass$() != null   && Clazz.getClass($I$(32)).isAssignableFrom$Class(control.getObjectClass$()) ) {
this.isResourcePathXML=true;
return control.loadObject$O(null);
}}return this.createResource$java_io_File$java_io_File$java_io_FileFilter(targetFile, targetFile.getParentFile$(), this.dlFileFilter);
});

Clazz.newMeth(C$, 'createResource$java_io_File$java_io_File$java_io_FileFilter',  function (targetFile, baseDir, filter) {
if (targetFile == null  || !targetFile.exists$() ) return null;
if (!filter.accept$java_io_File(targetFile)) return null;
var fileName=targetFile.getName$();
var path=$I$(17,"forwardSlash$S",[targetFile.getAbsolutePath$()]);
var base=$I$(17,"forwardSlash$S",[baseDir.getAbsolutePath$()]);
var relPath=$I$(17).getPathRelativeTo$S$S(path, base);
var record=Clazz.new_($I$(32,1).c$$S,[fileName]);
record.setBasePath$S(base);
record.setTarget$S(relPath);
fileName=fileName.toLowerCase$();
if (fileName.indexOf$S(".htm") > -1) {
record.setHTMLPath$S(relPath);
record.setType$S("HTML");
}if (fileName.endsWith$S(".zip")) {
if (filter === C$.TRACKER_FILTER ) {
record.setType$S("Tracker");
}}if (fileName.endsWith$S(".trz")) {
record.setType$S("Tracker");
}var isTRZ=(fileName.endsWith$S(".zip") && filter === C$.TRACKER_FILTER  ) || fileName.endsWith$S(".trz") ;
if (isTRZ) {
var contents=$I$(14).getZipContents$S$Z(path, true);
if (contents != null ) {
var baseName=$I$(17,"stripExtension$S",[$I$(17).getName$S(path)]);
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.indexOf$S("_thumbnail") > -1) {
var thumb=$I$(17).getName$S(next);
baseName=thumb.substring$I$I(0, thumb.indexOf$S("_thumbnail"));
break;
}}
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.endsWith$S(".html") || next.endsWith$S(".htm") ) {
var nextName=$I$(17).getName$S(next);
if ($I$(17).stripExtension$S(nextName).equals$O(baseName + "_info")) {
var trzName=$I$(17).getName$S(path);
record.setHTMLPath$S(trzName + "!/" + next );
break;
}}}
}}return record;
});

Clazz.newMeth(C$, 'createCollectionFromDirectory$java_io_File$java_io_File$java_io_FileFilter',  function (targetDir, base, filter) {
var htmlFilter=Clazz.new_($I$(38,1));
var htmlFiles=targetDir.listFiles$java_io_FileFilter(htmlFilter);
var matchedNames=Clazz.new_($I$(39,1));
var name=targetDir.getName$();
var collection=Clazz.new_($I$(28,1).c$$S,[name]);
if (base === targetDir ) {
collection.setBasePath$S($I$(17,"forwardSlash$S",[base.getAbsolutePath$()]));
}for (var htmlFile, $htmlFile = 0, $$htmlFile = htmlFiles; $htmlFile<$$htmlFile.length&&((htmlFile=($$htmlFile[$htmlFile])),1);$htmlFile++) {
if ($I$(17,"stripExtension$S",[htmlFile.getName$()]).equals$O(name + "_info")) {
var relPath=$I$(17,"getPathRelativeTo$S$S",[htmlFile.getAbsolutePath$(), base.getAbsolutePath$()]);
collection.setHTMLPath$S(relPath);
var htmlCode=$I$(14,"getHTMLCode$S",[htmlFile.getAbsolutePath$()]);
var title=$I$(14).getTitleFromHTMLCode$S(htmlCode);
if (title != null ) {
collection.setName$S(title);
}matchedNames.add$O(htmlFile);
}}
var subdirs=targetDir.listFiles$java_io_FileFilter(Clazz.new_($I$(40,1)));
for (var dir, $dir = 0, $$dir = subdirs; $dir<$$dir.length&&((dir=($$dir[$dir])),1);$dir++) {
var subCollection=p$1.createCollectionFromDirectory$java_io_File$java_io_File$java_io_FileFilter.apply(this, [dir, base, filter]);
if (subCollection.getResources$().length > 0) collection.addResource$org_opensourcephysics_tools_LibraryResource(subCollection);
}
var resourceFiles=filter == null  ? targetDir.listFiles$() : targetDir.listFiles$java_io_FileFilter(filter);
for (var next, $next = 0, $$next = resourceFiles; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (htmlFilter.accept$java_io_File(next)) continue;
var relPath=$I$(17,"getPathRelativeTo$S$S",[next.getAbsolutePath$(), base.getAbsolutePath$()]);
var fileName=next.getName$();
var baseName=$I$(17).stripExtension$S(fileName);
var record=Clazz.new_($I$(32,1).c$$S,[fileName]);
collection.addResource$org_opensourcephysics_tools_LibraryResource(record);
record.setTarget$S(relPath);
if (fileName.toLowerCase$().endsWith$S(".zip")) {
if (filter === C$.TRACKER_FILTER ) {
record.setType$S("Tracker");
}}if (fileName.toLowerCase$().endsWith$S(".trz")) {
record.setType$S("Tracker");
}for (var htmlFile, $htmlFile = 0, $$htmlFile = htmlFiles; $htmlFile<$$htmlFile.length&&((htmlFile=($$htmlFile[$htmlFile])),1);$htmlFile++) {
var htmlName=$I$(17,"stripExtension$S",[htmlFile.getName$()]);
if (htmlName.equals$O(baseName + "_info")) {
if ("".equals$O(record.getHTMLPath$())) {
relPath=$I$(17,"getPathRelativeTo$S$S",[htmlFile.getAbsolutePath$(), base.getAbsolutePath$()]);
record.setHTMLPath$S(relPath);
var htmlCode=$I$(14,"getHTMLCode$S",[htmlFile.getAbsolutePath$()]);
var title=$I$(14).getTitleFromHTMLCode$S(htmlCode);
if (title != null ) {
record.setName$S(title);
}}matchedNames.add$O(htmlFile);
break;
}}
}
var i=0;
for (var html, $html = 0, $$html = htmlFiles; $html<$$html.length&&((html=($$html[$html])),1);$html++) {
if (matchedNames.contains$O(html) || filter != null  && !filter.accept$java_io_File(html)  ) continue;
var fileName=html.getName$();
var record=Clazz.new_($I$(32,1).c$$S,[fileName]);
var relPath=$I$(17,"getPathRelativeTo$S$S",[html.getAbsolutePath$(), base.getAbsolutePath$()]);
record.setHTMLPath$S(relPath);
record.setType$S("HTML");
collection.insertResource$org_opensourcephysics_tools_LibraryResource$I(record, i++);
}
return collection;
}, p$1);

Clazz.newMeth(C$, 'addTabAndExecute$S$java_util_List$java_beans_PropertyChangeListener',  function (path, treePath, listener) {
if (path == null ) return false;
var cachedFile=$I$(14).getSearchCacheFile$S(path);
var isCachePath=cachedFile.exists$() && this.metadataLoaderListener == null  ;
var isDialogShown=Clazz.array(Boolean.TYPE, -1, [false]);
if (!isCachePath && $I$(14).isHTTP$S(path) && !this.isWebConnected$ZA(isDialogShown) && !$I$(14).ignoreMissingWebConnection  ) {
if (!isDialogShown[0] && $I$(14).showWebConnectionDialog$() == 1 ) {
C$.checkedWebConnection=false;
$I$(14).clearWebTest$();
return this.addTabAndExecute$S$java_util_List$java_beans_PropertyChangeListener(path, treePath, listener);
}return false;
}this.loadTabAsync$S$I$java_util_List$java_beans_PropertyChangeListener(path, -1, treePath, listener);
return true;
});

Clazz.newMeth(C$, 'refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource',  function (path, collection) {
var n=this.getTabIndexFromPath$S(path);
if (n == -1) return;
var title=this.library.getNameMap$().get$O(path);
if (title == null ) title=collection.getTitle$S(path);
if (path.contains$CharSequence("https://www.compadre.org/osp/services/REST/osp_tracker.cfm?verb=Identify&OSPType=Tracker") && this.tabbedPane.getTabComponentAt$I(n) == null  ) {
var primary=path.contains$CharSequence("OSPPrimary");
var icon=primary ? C$.expandIcon : C$.contractIcon;
var heavyIcon=primary ? C$.heavyExpandIcon : C$.heavyContractIcon;
var tabTitle=Clazz.new_($I$(41,1).c$$javax_swing_Icon$javax_swing_Icon,[this, null, icon, heavyIcon]);
tabTitle.refreshFontSize$();
tabTitle.iconLabel.setToolTipText$S(primary ? $I$(3).getString$S("LibraryBrowser.Tooltip.Expand") : $I$(3).getString$S("LibraryBrowser.Tooltip.Contract"));
this.tabbedPane.setTabComponentAt$I$java_awt_Component(n, tabTitle);
}var changed=this.getTreePanel$I(n).isChanged$();
this.tabbedPane.setTitleAt$I$S(n, changed ? title + "*" : title);
this.library.getNameMap$().put$O$O(path, title);
if (n == this.tabbedPane.getSelectedIndex$()) {
var tabname=" '" + title + "'" ;
this.closeItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.CloseTab") + tabname);
}});

Clazz.newMeth(C$, 'loadTabAsync$S$I$java_util_List$java_beans_PropertyChangeListener',  function (path, index, treePath, listener) {
var loader=Clazz.new_($I$(42,1).c$$S$I$java_util_List,[this, null, path, index, treePath]);
if (listener != null ) loader.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
loader.execute$();
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var factor=1 + ($I$(13).getFactor$() - 1) * 0.5;
var w=((factor * C$.wide)|0);
var h=((factor * C$.high)|0);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(31,1).c$$I$I,[w, h]));
this.loadCollectionAction=((P$.LibraryBrowser$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].loadTab$S$java_util_List.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [e.getActionCommand$(), null]);
});
})()
), Clazz.new_(P$.LibraryBrowser$6.$init$,[this, null]));
this.commandAction=((P$.LibraryBrowser$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].doCommand$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_($I$(43,1),[this, null],P$.LibraryBrowser$7));
this.downloadAction=((P$.LibraryBrowser$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].doDownload$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_($I$(43,1),[this, null],P$.LibraryBrowser$8));
this.commandLabel=Clazz.new_($I$(9,1));
this.commandLabel.setAlignmentX$F(0.5);
this.commandLabel.setBorder$javax_swing_border_Border($I$(10).createEmptyBorder$I$I$I$I(0, 3, 0, 2));
this.commandField=((P$.LibraryBrowser$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
return dim;
});
})()
), Clazz.new_($I$(44,1),[this, null],P$.LibraryBrowser$9));
$I$(7).defaultForeground=this.commandField.getForeground$();
this.commandField.addActionListener$java_awt_event_ActionListener(this.commandAction);
this.commandField.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.LibraryBrowser$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
var text=this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.getText$();
var enable=!"".equals$O(text);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].openButton.setEnabled$Z(enable);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].downloadButton.setEnabled$Z(enable);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].textChanged=this.b$['org.opensourcephysics.tools.LibraryBrowser'].keyPressed;
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel != null ) {
treePanel.command=text;
var node=treePanel.getSelectedNode$();
if (node != null  && node.isRoot$()  && Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection")  && treePanel.pathToRoot.equals$O(text) ) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].openButton.setEnabled$Z(false);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].downloadButton.setEnabled$Z(false);
}} else {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setBackground$java_awt_Color($I$(4).yellow);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setForeground$java_awt_Color($I$(7).defaultForeground);
}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
var enable=!"".equals$O(this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.getText$());
this.b$['org.opensourcephysics.tools.LibraryBrowser'].openButton.setEnabled$Z(enable);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].downloadButton.setEnabled$Z(enable);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].textChanged=this.b$['org.opensourcephysics.tools.LibraryBrowser'].keyPressed;
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel != null ) {
treePanel.command=this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.getText$();
} else {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setBackground$java_awt_Color($I$(4).yellow);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setForeground$java_awt_Color($I$(7).defaultForeground);
}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
});
})()
), Clazz.new_(P$.LibraryBrowser$10.$init$,[this, null])));
this.commandField.addKeyListener$java_awt_event_KeyListener(((P$.LibraryBrowser$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].keyPressed=true;
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel != null  && this.b$['org.opensourcephysics.tools.LibraryBrowser'].textChanged  && e.getKeyCode$() != 10 ) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setBackground$java_awt_Color($I$(4).yellow);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setForeground$java_awt_Color($I$(7).defaultForeground);
treePanel.setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode(null);
}this.b$['org.opensourcephysics.tools.LibraryBrowser'].textChanged=this.b$['org.opensourcephysics.tools.LibraryBrowser'].keyPressed=false;
});
})()
), Clazz.new_($I$(45,1),[this, null],P$.LibraryBrowser$11)));
this.commandField.addFocusListener$java_awt_event_FocusListener(((P$.LibraryBrowser$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.selectAll$();
});
})()
), Clazz.new_($I$(46,1),[this, null],P$.LibraryBrowser$12)));
this.openButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.commandAction]);
this.downloadButton=Clazz.new_($I$(47,1).c$$javax_swing_Action,[this.downloadAction]);
this.downloadButton.setIcon$javax_swing_Icon(C$.downloadIcon);
this.downloadButton.setDisabledIcon$javax_swing_Icon(C$.downloadDisabledIcon);
this.searchAction=((P$.LibraryBrowser$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].doSearch$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_($I$(43,1),[this, null],P$.LibraryBrowser$13));
this.searchLabel=Clazz.new_($I$(9,1));
this.searchLabel.setAlignmentX$F(0.5);
this.searchLabel.setBorder$javax_swing_border_Border($I$(10).createEmptyBorder$I$I$I$I(0, 0, 0, 3));
this.searchField=((P$.LibraryBrowser$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.LibraryTreePanel','.EntryField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.width=((120 * $I$(13).getFactor$())|0);
return dim;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=((120 * $I$(13).getFactor$())|0);
return dim;
});
})()
), Clazz.new_($I$(48,1),[this, null],P$.LibraryBrowser$14));
this.searchField.addActionListener$java_awt_event_ActionListener(this.searchAction);
this.searchTargetButton=Clazz.new_($I$(47,1).c$$javax_swing_Icon,[C$.searchTargetIcon]);
this.searchTargetButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$1.chooseSearchTargets.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda5.$init$,[this, null])));
this.searchTargetButton.setToolTipText$S($I$(3).getString$S("LibraryBrowser.Dialog.SearchTargets.Text"));
this.searchTargetButton.setEnabled$Z(false);
this.refreshButton=Clazz.new_($I$(47,1).c$$javax_swing_Icon,[C$.refreshIcon]);
this.refreshButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel == null ) return;
var node=treePanel.getSelectedNode$();
if (node === treePanel.rootNode ) {
var cachedFile=$I$(14).getSearchCacheFile$S(treePanel.pathToRoot);
if (cachedFile.exists$()) {
cachedFile.delete$();
}var resource=this.b$['org.opensourcephysics.tools.LibraryBrowser'].loadResource$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [treePanel.pathToRoot]);
if (resource != null ) {
var isXML=treePanel.pathToRoot.toLowerCase$().endsWith$S(".xml");
treePanel.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(resource, treePanel.pathToRoot, treePanel.rootNode.isEditable$(), isXML);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [treePanel.pathToRoot, treePanel.rootResource]);
if (treePanel.metadataLoader != null ) {
treePanel.metadataLoader.cancel$();
}treePanel.metadataLoader=Clazz.new_($I$(19,1).c$$java_util_List,[treePanel, null, null]);
treePanel.metadataLoader.execute$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$Z.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [false]);
return;
}} else if (node != null ) {
var pane=Clazz.new_($I$(49,1));
pane.setText$S("<h2>" + $I$(3).getString$S("LibraryBrowser.Info.Refreshing") + " '" + node + "'</h2>" );
treePanel.htmlScroller.setViewportView$java_awt_Component(pane);
var url=node.getHTMLURL$();
if (url != null ) {
var cachedFile=$I$(14,"getOSPCacheFile$S",[url.toExternalForm$()]);
if (cachedFile.exists$()) {
cachedFile.delete$();
}$I$(7).htmlPanesByURL.remove$O(url);
}var target=node.getAbsoluteTarget$();
if ($I$(6).doCacheThumbnail && target != null  ) {
var thumb=node.getThumbnailFile$();
if (thumb.exists$()) {
thumb.delete$();
node.record.setThumbnail$S(null);
}}node.record.setMetadata$java_util_TreeSet(null);
node.record.setDescription$S(null);
node.tooltip=null;
node.metadataSource=null;
Clazz.new_($I$(18,1).c$$org_opensourcephysics_tools_LibraryTreeNode,[treePanel, null, node]).execute$();
}});
})()
), Clazz.new_(P$.LibraryBrowser$15.$init$,[this, null])));
this.tabbedPane=((P$.LibraryBrowser$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTabbedPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setTitleAt$I$S',  function (i, title) {
C$.superclazz.prototype.setTitleAt$I$S.apply(this, [i, title]);
var tab=this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.getTabComponentAt$I(i);
if (tab != null ) {
tab.setTitle$S(title);
}});
})()
), Clazz.new_($I$(50,1).c$$I,[this, null, 1],P$.LibraryBrowser$16));
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.LibraryBrowser$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel != null ) {
var node=treePanel.getSelectedNode$();
if (node != null ) {
var path=node.isRoot$() ? treePanel.pathToRoot : node.getAbsoluteTarget$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setText$S(path);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].setMessage$S$java_awt_Color.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [node.getToolTip$(), null]);
treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(node, "tabbedPaneChange");
} else {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setText$S(treePanel.command);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setCaretPosition$I(0);
}}this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setBackground$java_awt_Color($I$(4).white);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].commandField.setForeground$java_awt_Color($I$(7).defaultForeground);
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryManager != null  && this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryManager.isVisible$() ) this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryManager.refreshGUI$();
});
})()
), Clazz.new_(P$.LibraryBrowser$17.$init$,[this, null])));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(((P$.LibraryBrowser$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (!$I$(6).isPopupTrigger$java_awt_event_InputEvent(e)) return;
var popup=Clazz.new_($I$(51,1));
var item=Clazz.new_([$I$(3).getString$S("MenuItem.Close")],$I$(35,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$18$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$18$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.getSelectedIndex$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].closeTab$I.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [i]);
});
})()
), Clazz.new_(P$.LibraryBrowser$18$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (!"".equals$O(treePanel.pathToRoot) && !this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.containsPath$S$Z(treePanel.pathToRoot, false) ) {
item=Clazz.new_([$I$(3).getString$S("LibraryBrowser.MenuItem.AddToLibrary")],$I$(35,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$18$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$18$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].addToCollections$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.$finals$.treePanel.pathToRoot]);
});
})()
), Clazz.new_(P$.LibraryBrowser$18$2.$init$,[this, {treePanel:treePanel}])));
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(item);
}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane, e.getX$(), e.getY$() + 8);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.LibraryBrowser$18)));
this.treePanelListener=((P$.LibraryBrowser$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
default:
return;
case "collection_edit":
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
return;
case "target":
break;
}
var hint=e.getOldValue$();
var newValue=e.getNewValue$();
var node=null;
var record=null;
if (Clazz.instanceOf(newValue, "org.opensourcephysics.tools.LibraryTreeNode")) {
node=newValue;
var target=node.getTarget$();
if ($I$(5).isPopulatedCollection$org_opensourcephysics_tools_LibraryTreeNode(node) || (target != null  && target.startsWith$S("&OSPSubject=") ) ) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].processTargetCollection$org_opensourcephysics_tools_LibraryTreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [node]);
return;
}record=node.record.getClone$();
record.setBasePath$S(node.getBasePath$());
} else if (Clazz.instanceOf(newValue, "org.opensourcephysics.tools.LibraryResource")) {
record=newValue;
}this.b$['org.opensourcephysics.tools.LibraryBrowser'].processTargetSelection$org_opensourcephysics_tools_LibraryResource$O.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [record, hint]);
});
})()
), Clazz.new_(P$.LibraryBrowser$19.$init$,[this, null]));
this.editButton=Clazz.new_($I$(47,1));
this.editButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (treePanel == null ) return;
if (!treePanel.isEditing$()) {
treePanel.setEditing$Z(true);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
} else if (!treePanel.isChanged$()) {
treePanel.setEditing$Z(false);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
} else {
var popup=Clazz.new_($I$(51,1));
var item=Clazz.new_([$I$(3).getString$S("LibraryBrowser.MenuItem.SaveEdits")],$I$(35,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$20$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$20$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var path=this.b$['org.opensourcephysics.tools.LibraryBrowser'].save$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
if (path == null ) return;
this.$finals$.treePanel.setEditing$Z(false);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$20$1.$init$,[this, {treePanel:treePanel}])));
item=Clazz.new_([$I$(3).getString$S("LibraryBrowser.MenuItem.Discard")],$I$(35,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$20$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$20$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.treePanel.setEditing$Z(false);
this.$finals$.treePanel.revert$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$20$2.$init$,[this, {treePanel:treePanel}])));
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LibraryBrowser'].editButton, 0, this.b$['org.opensourcephysics.tools.LibraryBrowser'].editButton.getHeight$());
}});
})()
), Clazz.new_(P$.LibraryBrowser$20.$init$,[this, null])));
this.toolbar=Clazz.new_($I$(52,1));
this.toolbar.setFloatable$Z(false);
var empty=$I$(10).createEmptyBorder$I$I$I$I(1, 2, 1, 2);
var etched=$I$(10).createEtchedBorder$();
this.toolbar.setBorder$javax_swing_border_Border($I$(10).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.toolbar.add$java_awt_Component(this.commandLabel);
this.toolbar.add$java_awt_Component(this.commandField);
this.toolbar.add$java_awt_Component(this.openButton);
this.toolbar.add$java_awt_Component(this.downloadButton);
this.toolbar.addSeparator$();
this.toolbar.add$java_awt_Component(this.searchTargetButton);
this.toolbar.add$java_awt_Component(this.searchLabel);
this.toolbar.add$java_awt_Component(this.searchField);
this.toolbar.addSeparator$();
this.toolbar.add$java_awt_Component(this.editButton);
this.toolbar.addSeparator$();
this.toolbar.add$java_awt_Component(this.refreshButton);
this.add$java_awt_Component$O(this.toolbar, "North");
this.fileMenu=Clazz.new_($I$(34,1));
C$.menubar.add$javax_swing_JMenu(this.fileMenu);
this.newItem=Clazz.new_($I$(35,1));
var mask=$I$(1).getDefaultToolkit$().getMenuShortcutKeyMask$();
this.newItem.setAccelerator$javax_swing_KeyStroke($I$(53,"getKeyStroke$I$I",["N".$c(), mask]));
this.newItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].createNewCollection$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$21.$init$,[this, null])));
this.openItem=Clazz.new_($I$(35,1));
this.openItem.setAccelerator$javax_swing_KeyStroke($I$(53,"getKeyStroke$I$I",["O".$c(), mask]));
this.openItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].open$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$22.$init$,[this, null])));
this.closeItem=Clazz.new_($I$(35,1));
this.closeItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.getSelectedIndex$();
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].closeTab$I.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [i])) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
}});
})()
), Clazz.new_(P$.LibraryBrowser$23.$init$,[this, null])));
this.closeAllItem=Clazz.new_($I$(35,1));
this.closeAllItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var i=this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.getTabCount$() - 1; i >= 0; i--) {
if (!this.b$['org.opensourcephysics.tools.LibraryBrowser'].closeTab$I.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [i])) break;
}
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$24.$init$,[this, null])));
this.recentMenu=Clazz.new_($I$(34,1));
this.fileMenu.add$javax_swing_JMenuItem(this.recentMenu);
this.saveItem=Clazz.new_($I$(35,1));
this.saveItem.setAccelerator$javax_swing_KeyStroke($I$(53,"getKeyStroke$I$I",["S".$c(), mask]));
this.saveItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].save$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$25.$init$,[this, null])));
this.saveAsItem=Clazz.new_($I$(35,1));
this.saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var path=this.b$['org.opensourcephysics.tools.LibraryBrowser'].saveAs$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.addRecent$S$Z(path, false);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshRecentMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$26.$init$,[this, null])));
this.exitItem=Clazz.new_($I$(35,1));
this.exitItem.setAccelerator$javax_swing_KeyStroke($I$(53,"getKeyStroke$I$I",["Q".$c(), mask]));
this.exitItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].exit$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$27.$init$,[this, null])));
this.collectionsMenu=Clazz.new_($I$(34,1));
C$.menubar.add$javax_swing_JMenu(this.collectionsMenu);
this.manageMenu=Clazz.new_($I$(34,1));
if (!$I$(6).isJS) C$.menubar.add$javax_swing_JMenu(this.manageMenu);
this.collectionsItem=Clazz.new_($I$(35,1));
this.manageMenu.add$javax_swing_JMenuItem(this.collectionsItem);
this.collectionsItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var manager=$I$(5).browser.getManager$();
manager.tabbedPane.setSelectedComponent$java_awt_Component(manager.collectionsPanel);
manager.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LibraryBrowser$28.$init$,[this, null])));
this.cacheItem=Clazz.new_($I$(35,1));
this.manageMenu.add$javax_swing_JMenuItem(this.cacheItem);
this.cacheItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var manager=$I$(5).browser.getManager$();
manager.tabbedPane.setSelectedComponent$java_awt_Component(manager.cachePanel);
manager.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LibraryBrowser$29.$init$,[this, null])));
this.searchItem=Clazz.new_($I$(35,1));
this.manageMenu.add$javax_swing_JMenuItem(this.searchItem);
this.searchItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var manager=$I$(5).browser.getManager$();
manager.tabbedPane.setSelectedComponent$java_awt_Component(manager.searchPanel);
manager.setVisible$Z(true);
});
})()
), Clazz.new_(P$.LibraryBrowser$30.$init$,[this, null])));
this.helpMenu=Clazz.new_($I$(34,1));
C$.menubar.add$javax_swing_JMenu(this.helpMenu);
this.helpItem=Clazz.new_($I$(35,1));
this.helpItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].showHelp$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$31.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.helpItem);
this.helpMenu.addSeparator$();
this.logItem=Clazz.new_($I$(35,1));
this.logItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(2).showLogInvokeLater$();
});
})()
), Clazz.new_(P$.LibraryBrowser$32.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.logItem);
this.helpMenu.addSeparator$();
this.aboutItem=Clazz.new_($I$(35,1));
this.aboutItem.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].showAboutDialog$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});
})()
), Clazz.new_(P$.LibraryBrowser$33.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.aboutItem);
this.htmlAboutPane=Clazz.new_($I$(49,1));
this.htmlScroller=Clazz.new_($I$(54,1).c$$java_awt_Component,[this.htmlAboutPane]);
this.htmlAboutPane.setText$S(this.getAboutLibraryBrowserText$());
this.htmlAboutPane.setCaretPosition$I(0);
if (C$.externalDialog != null ) {
C$.externalDialog.addWindowListener$java_awt_event_WindowListener(((P$.LibraryBrowser$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
Clazz.new_($I$(55,1),[this, null]).execute$();
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LibraryBrowser$34)));
} else {
C$.frame.addWindowListener$java_awt_event_WindowListener(((P$.LibraryBrowser$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
Clazz.new_($I$(55,1),[this, null]).execute$();
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LibraryBrowser$35)));
}this.messageButton=Clazz.new_($I$(56,1));
this.messageButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryBrowser$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].messageButton.getBackground$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].messageButton, []) === $I$(4).YELLOW ) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].cancelLoading$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
}});
})()
), Clazz.new_(P$.LibraryBrowser$lambda6.$init$,[this, null])));
this.messageButton.setHorizontalAlignment$I(2);
this.messageButton.setBorder$javax_swing_border_Border($I$(10).createEmptyBorder$I$I$I$I(1, 6, 1, 6));
this.add$java_awt_Component$O(this.messageButton, "South");
this.messageButton.addKeyListener$java_awt_event_KeyListener(((P$.LibraryBrowser$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 27) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].cancelLoading$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
}});
})()
), Clazz.new_($I$(45,1),[this, null],P$.LibraryBrowser$36)));
this.setMessage$S$java_awt_Color(null, null);
});

Clazz.newMeth(C$, 'flashOpen$',  function () {
this.openButton.setForeground$java_awt_Color($I$(4).yellow);
var t=Clazz.new_([500, ((P$.LibraryBrowser$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].openButton.setForeground$java_awt_Color($I$(4).black);
});
})()
), Clazz.new_(P$.LibraryBrowser$37.$init$,[this, null]))],$I$(57,1).c$$I$java_awt_event_ActionListener);
t.setRepeats$Z(false);
t.start$();
});

Clazz.newMeth(C$, 'setMessage$S$java_awt_Color',  function (message, color) {
var isEmpty=(message == null  || "".equals$O(message.trim$()) );
this.messageButton.setText$S(isEmpty ? " " : message);
this.messageButton.setBackground$java_awt_Color(color != null  ? color : $I$(4).WHITE);
this.messageButton.setFont$java_awt_Font(color != null  ? this.openButton.getFont$() : this.commandField.getFont$());
if (color != null ) this.messageButton.requestFocusInWindow$();
});

Clazz.newMeth(C$, 'processTargetCollection$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
var onSuccess=((P$.LibraryBrowser$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.node.createChildNodes$();
$I$(7).htmlPanesByNode.remove$O(this.$finals$.node);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []).scrollToPath$javax_swing_tree_TreePath$Z((this.$finals$.node.getLastChild$()).getTreePath$(), false);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []).showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this.$finals$.node, "LibraryBrowser.processTargetCollection");
this.b$['java.awt.Component'].setCursor$java_awt_Cursor.apply(this.b$['java.awt.Component'], [$I$(16).getDefaultCursor$()]);
});
})()
), Clazz.new_(P$.LibraryBrowser$38.$init$,[this, {node:node}]));
var onFailure=((P$.LibraryBrowser$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['java.awt.Component'].setCursor$java_awt_Cursor.apply(this.b$['java.awt.Component'], [$I$(16).getDefaultCursor$()]);
var s="\"" + this.$finals$.node.getName$() + "\"" ;
$I$(58,"showMessageDialog$java_awt_Component$O$S$I",[$I$(5).browser, $I$(3).getString$S("LibraryBrowser.Dialog.NoResources.Message"), s, -1]);
});
})()
), Clazz.new_(P$.LibraryBrowser$39.$init$,[this, {node:node}]));
this.setCursor$java_awt_Cursor($I$(16).getPredefinedCursor$I(3));
$I$(11).loadResources$org_opensourcephysics_tools_LibraryTreeNode$Runnable$Runnable(node, onSuccess, onFailure);
});

Clazz.newMeth(C$, 'processTargetSelection$org_opensourcephysics_tools_LibraryResource$O',  function (record, hint) {
if (record == null ) return;
var target=record.getAbsoluteTarget$();
var uriPath=$I$(14).getURIPath$S(target);
if ($I$(14).isHTTP$S(uriPath) && !$I$(14).isURLAvailable$S(uriPath) ) {
Clazz.new_($I$(59,1)).showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(C$.frame, $I$(3).getString$S("LibraryBrowser.Dialog.NoResources.File") + " \"" + $I$(17).getName$S(target) + "\" " + $I$(3).getString$S("LibraryBrowser.Dialog.NoResources.Message") , $I$(3).getString$S("LibraryBrowser.Dialog.NoResources.Title"), 2, (P$.LibraryBrowser$lambda7$||(P$.LibraryBrowser$lambda7$=(((P$.LibraryBrowser$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda7.$init$,[this, null]))))));
return;
}if (target != null  && (target.toLowerCase$().endsWith$S(".pdf") || target.toLowerCase$().endsWith$S(".html") || target.toLowerCase$().endsWith$S(".htm") || "URL".equals$O(record.getType$())  ) ) {
this.setCursor$java_awt_Cursor($I$(16).getPredefinedCursor$I(3));
$I$(60).displayURL$S(uriPath);
this.setCursor$java_awt_Cursor($I$(16).getDefaultCursor$());
return;
}if (Clazz.instanceOf(record, "org.opensourcephysics.tools.LibraryCollection") && target != null   && target.toLowerCase$().endsWith$S(".xml") ) {
this.open$S(target);
}var listeners=this.getPropertyChangeListeners$S("target");
if (listeners.length > 0 && !"EJS".equals$O(record.getType$())  && !"URL".equals$O(record.getType$())  && !"Collection".equals$O(record.getType$()) ) {
this.firePropertyChange$S$O$O("target", hint, record);
} else {
var type=record.getType$();
if ("Unknown".equals$O(type)) {
type=$I$(32).getTypeFromPath$S$S(target, null);
}switch (type) {
case "Tracker":
case "Video":
case "Image":
var trackerHome=$I$(6).getPreference$S("TRACKER_HOME");
var launched=false;
if (trackerHome != null  && !C$.useOnlineOnly ) {
trackerHome=$I$(17).forwardSlash$S(trackerHome);
try {
var jreFinder=$I$(61).getFinder$();
var jreFile=jreFinder.getDefaultJRE$I$S$Z$S(64, trackerHome, true, "OpenJDK");
if (jreFile != null ) {
var cmd=Clazz.new_($I$(15,1));
cmd.add$O($I$(17,"forwardSlash$S",[jreFile.getAbsolutePath$()]) + "/bin/java");
cmd.add$O("-jar");
cmd.add$O(trackerHome + "/tracker_starter.jar");
cmd.add$O(target);
launched=true;
var builder=Clazz.new_($I$(62,1).c$$java_util_List,[cmd]);
var process=builder.start$();
var result=process.waitFor$();
if (result > 0) {
launched=false;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}if (!launched) {
try {
var encodedUrl=$I$(63,"encode$S$S",[target, $I$(64).UTF_8.toString()]);
$I$(60,"displayURL$S",["https://opensourcephysics.github.io/tracker-online/?j2sargs=" + encodedUrl]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}
}break;
case "EJS":
try {
var tar=target;
var name="&name=" + record.getName$();
var n=target.indexOf$S("&name=");
if (n > 0) {
name=target.substring$I(n);
tar=target.substring$I$I(0, n);
}var encodedUrl=$I$(63,"encode$S$S",[tar, $I$(64).UTF_8.toString()]);
encodedUrl+=name;
$I$(60,"displayURL$S",["https://www.um.es/fem/wikis/runwebejs/?url=" + encodedUrl]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}
break;
case "Data":
try {
var encodedUrl=$I$(63,"encode$S$S",[target, $I$(64).UTF_8.toString()]);
$I$(60,"displayURL$S",["https://opensourcephysics.github.io/tracker-online/DataTool.html?j2sargs=" + encodedUrl]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}
break;
case "URL":
try {
var encodedUrl=$I$(63,"encode$S$S",[target, $I$(64).UTF_8.toString()]);
$I$(60,"displayURL$S",["https://opensourcephysics.github.io/tracker-online/DataTool.html?j2sargs=" + encodedUrl]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}
break;
}
}if (hint === "LOAD" ) {
var recentCollectionPath=C$.getOSPPath$() + "recent_collection.xml";
var index=this.getTabIndexFromPath$S(recentCollectionPath);
var isLocalTRZ=(!$I$(14,"isHTTP$S",[record.getAbsoluteTarget$()]) && $I$(14,"isJarZipTrz$S$Z",[record.getAbsoluteTarget$().toLowerCase$(), false]) );
if (isLocalTRZ && index >= 0 ) {
var collection=this.getRecentCollection$();
var child=this.loadResource$S(record.getAbsoluteTarget$());
if (child != null ) {
var duplicate=null;
var resArray=collection.getResources$();
for (var i=0; i < resArray.length; i++) {
var next=resArray[i];
if (next.getAbsoluteTarget$().equals$O(child.getAbsoluteTarget$())) {
duplicate=next;
break;
}}
if (duplicate != null ) {
collection.removeResource$org_opensourcephysics_tools_LibraryResource(duplicate);
}collection.insertResource$org_opensourcephysics_tools_LibraryResource$I(child, 0);
var prevName=child.getName$();
var treePath=child.getTreePath$java_util_List(null);
child.setName$S(prevName);
var treePanel=this.getTreePanel$I(index);
treePanel.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(collection, treePanel.pathToRoot, false, true);
treePanel.setSelectionPath$java_util_List(treePath);
if (treePanel.metadataLoader != null ) {
treePanel.metadataLoader.cancel$();
}treePanel.metadataLoader=Clazz.new_($I$(19,1).c$$java_util_List,[treePanel, null, treePath]);
treePanel.metadataLoader.execute$();
}}}});

Clazz.newMeth(C$, 'doSearch$',  function () {
var searchTerm=this.searchField.getText$().trim$();
if (searchTerm.length$() == 0) return;
this.searchField.selectAll$();
this.searchField.setBackground$java_awt_Color($I$(4).white);
Clazz.new_($I$(65,1).c$$S,[this, null, searchTerm]).execute$();
});

Clazz.newMeth(C$, 'doDownload$',  function () {
var urlPath=this.commandField.getText$().trim$();
if (urlPath == null  || "".equals$O(urlPath) ) return;
var uriPath=$I$(14).getURIPath$S(urlPath);
var treePanel=this.getSelectedTreePanel$();
var node=(treePanel == null  ? null : treePanel.getSelectedNode$());
var record=node == null  ? null : node.record;
var name=p$1.getDownloadName$S$org_opensourcephysics_tools_LibraryResource.apply(this, [urlPath, record]);
$I$(20,"getChooserFilesAsync$S$java_util_function_Function",["save resource " + name, ((P$.LibraryBrowser$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) /*block*/{
if ($I$(20).getChooser$().getSelectedOption$.apply($I$(20).getChooser$(), []) == 0 && files != null  ) {
var file=$I$(14).downloadResourceFromDialog$S$java_io_File(this.$finals$.uriPath, files[0]);
if (file != null ) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], ["target", "DOWNLOAD", file]);
}}return null;
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda8.$init$,[this, {uriPath:uriPath}]))]);
});

Clazz.newMeth(C$, 'getDownloadName$S$org_opensourcephysics_tools_LibraryResource',  function (name, record) {
var target=(record == null  ? name : record.getAbsoluteTarget$());
if (target.indexOf$S("document/ServeFile.cfm?") >= 0) {
target=(record == null  ? null : record.getProperty$S("download_filename"));
if (target != null ) return target;
name=name + ".zip";
}return $I$(17,"getName$S",[$I$(14).getNonURIPath$S(name)]);
}, p$1);

Clazz.newMeth(C$, 'doCommand$',  function () {
if (!this.openButton.isEnabled$()) return;
this.commandField.setBackground$java_awt_Color($I$(4).white);
this.commandField.setForeground$java_awt_Color($I$(7).defaultForeground);
var record=null;
var path=this.commandField.getText$().trim$();
var tpanel=this.getSelectedTreePanel$();
var node=(tpanel == null  ? null : tpanel.getSelectedNode$());
if (node != null  && path.equals$O(node.getAbsoluteTarget$()) ) {
if (node.record != null  && !path.equals$O(node.record.getAbsoluteTarget$()) ) {
node.record.setBasePath$S(node.getBasePath$());
}this.processTargetSelection$org_opensourcephysics_tools_LibraryResource$O(node.record, "LOAD");
return;
}if (path.equals$O("")) return;
path=$I$(17).forwardSlash$S(path);
var res=null;
$I$(14).warningShown=false;
var xmlPath=$I$(14).getNonURIPath$S(path);
if ($I$(14).isHTTP$S(path)) {
path=path.replace$CharSequence$CharSequence("/OSP/", "/osp/");
if ($I$(6).isJS) {
path=path.replace$CharSequence$CharSequence("http:", "https:");
}}if (!path.startsWith$S("https://www.compadre.org/osp/") && $I$(17).getExtension$S(path) == null  ) {
while (xmlPath.endsWith$S("/"))xmlPath=xmlPath.substring$I$I(0, xmlPath.length$() - 1);

if (!xmlPath.equals$O("")) {
var name=$I$(17).getName$S(xmlPath);
xmlPath+="/" + name + ".xml" ;
res=$I$(14).getResource$S(xmlPath);
}}if (res != null ) path=xmlPath;
 else res=$I$(14).getResourceZipURLsOK$S(path);
if (res == null ) {
this.commandField.setForeground$java_awt_Color($I$(7).darkRed);
return;
}var isCollection=(res.getFile$() != null  && res.getFile$().isDirectory$() ) || !this.dlFileFilter.acceptPath$S(path) && "LibraryCollection".equals$O(res.getXMLClassName$())  ;
if (isCollection) {
this.loadTab$S$java_util_List(path, null);
this.refreshGUI$();
var treePanel=this.getSelectedTreePanel$();
if (treePanel != null  && treePanel.pathToRoot.equals$O(path) ) {
treePanel.setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode(treePanel.rootNode);
this.commandField.setBackground$java_awt_Color($I$(4).white);
this.commandField.repaint$();
}return;
}record=Clazz.new_($I$(32,1).c$$S,[""]);
record.setTarget$S(path);
record.setProperty$S$S("download_filename", p$1.getDownloadName$S$org_opensourcephysics_tools_LibraryResource.apply(this, [path, null]));
this.firePropertyChange$S$O$O("target", "LOAD", record);
});

Clazz.newMeth(C$, 'setComandButtonEnabled$Z',  function (enabled) {
var text=this.commandField.getText$();
this.openButton.setEnabled$Z(enabled && !"".equals$O(text) );
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshGUI$Z(false);
});

Clazz.newMeth(C$, 'refreshGUI$Z',  function (andRebuild) {
if (this.tabbedPane.getTabCount$() == 0) {
if (this.htmlScroller.getParent$() !== this ) {
this.remove$java_awt_Component(this.tabbedPane);
this.add$java_awt_Component$O(this.htmlScroller, "Center");
this.validate$();
}} else {
if (this.tabbedPane.getParent$() !== this ) {
this.remove$java_awt_Component(this.htmlScroller);
this.add$java_awt_Component$O(this.tabbedPane, "Center");
}}if (andRebuild) {
this.setTitle$S($I$(3).getString$S("LibraryBrowser.Title"));
this.fileMenu.setText$S($I$(3).getString$S("Menu.File"));
this.newItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.New"));
this.openItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.Open"));
this.closeAllItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.CloseAll"));
this.saveItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.Save"));
this.saveAsItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.SaveAs"));
this.exitItem.setText$S($I$(3).getString$S("MenuItem.Exit"));
this.collectionsMenu.setText$S($I$(3).getString$S("LibraryBrowser.Menu.Collections"));
this.manageMenu.setText$S($I$(3).getString$S("LibraryBrowser.Menu.Manage"));
this.collectionsItem.setText$S($I$(3).getString$S("LibraryManager.Tab.MyLibrary") + "...");
this.searchItem.setText$S($I$(3).getString$S("LibraryManager.Tab.Search") + "...");
this.cacheItem.setText$S($I$(3).getString$S("LibraryManager.Tab.Cache") + "...");
this.helpMenu.setText$S($I$(3).getString$S("Menu.Help"));
this.helpItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.Help"));
this.logItem.setText$S($I$(3).getString$S("MenuItem.Log"));
this.aboutItem.setText$S($I$(3).getString$S("MenuItem.About"));
this.commandLabel.setText$S($I$(3).getString$S("LibraryTreePanel.Label.Target"));
this.openButton.setText$S($I$(3).getString$S("LibraryTreePanel.Button.Load"));
this.commandField.setToolTipText$S($I$(3).getString$S("LibraryBrowser.Field.Command.Tooltip"));
this.searchLabel.setText$S($I$(3).getString$S("LibraryBrowser.Label.Search") + ":");
this.searchField.setToolTipText$S($I$(3).getString$S("LibraryBrowser.Field.Search.Tooltip"));
this.refreshRecentMenu$();
this.fileMenu.removeAll$();
this.fileMenu.add$javax_swing_JMenuItem(this.newItem);
this.fileMenu.add$javax_swing_JMenuItem(this.openItem);
this.fileMenu.add$javax_swing_JMenuItem(this.recentMenu);
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.closeItem);
this.fileMenu.add$javax_swing_JMenuItem(this.closeAllItem);
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.saveItem);
this.fileMenu.add$javax_swing_JMenuItem(this.saveAsItem);
this.fileMenu.addSeparator$();
this.fileMenu.add$javax_swing_JMenuItem(this.exitItem);
}var treePanel=this.getSelectedTreePanel$();
if (treePanel != null ) {
this.editButton.setText$S(!treePanel.isEditing$() ? $I$(3).getString$S("LibraryBrowser.Button.OpenEditor") : $I$(3).getString$S("LibraryBrowser.Button.CloseEditor"));
this.editButton.setEnabled$Z(treePanel.isEditable$());
var tabname=" '" + this.getTabTitle$S(treePanel.pathToRoot) + "'" ;
this.closeItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.CloseTab") + tabname);
this.closeItem.setEnabled$Z(true);
this.closeAllItem.setEnabled$Z(true);
this.saveItem.setEnabled$Z(treePanel.isChanged$());
this.saveAsItem.setEnabled$Z(true);
var i=this.tabbedPane.getSelectedIndex$();
var title=this.tabbedPane.getTitleAt$I(i);
if (treePanel.isChanged$() && !title.endsWith$S("*") ) {
this.tabbedPane.setTitleAt$I$S(i, title + "*");
} else if (!treePanel.isChanged$() && title.endsWith$S("*") ) {
this.tabbedPane.setTitleAt$I$S(i, title.substring$I$I(0, title.length$() - 1));
}treePanel.refreshGUI$Z(andRebuild);
} else {
this.refreshButton.setToolTipText$S($I$(3).getString$S("LibraryBrowser.Tooltip.Refresh"));
this.downloadButton.setToolTipText$S($I$(3).getString$S("LibraryBrowser.Button.Download.Tooltip"));
this.editButton.setText$S($I$(3).getString$S("LibraryBrowser.Button.OpenEditor"));
this.saveItem.setEnabled$Z(false);
this.closeItem.setText$S($I$(3).getString$S("LibraryBrowser.MenuItem.CloseTab"));
this.closeItem.setEnabled$Z(false);
this.closeAllItem.setEnabled$Z(false);
this.editButton.setEnabled$Z(false);
this.refreshButton.setEnabled$Z(false);
this.commandField.setText$S(null);
this.openButton.setEnabled$Z(false);
this.downloadButton.setEnabled$Z(false);
this.saveAsItem.setEnabled$Z(false);
}this.repaint$();
});

Clazz.newMeth(C$, 'refreshRecentMenu$',  function () {
{
this.recentMenu.setText$S($I$(3).getString$S("LibraryBrowser.Menu.OpenRecent"));
this.recentMenu.setEnabled$Z(!this.library.recentTabs.isEmpty$());
if (this.openRecentAction == null ) {
this.openRecentAction=((P$.LibraryBrowser$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var path=e.getActionCommand$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.addRecent$S$Z(path, false);
var i=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTabIndexFromPath$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path]);
if (i > -1) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.setSelectedIndex$I(i);
return;
}if (!this.b$['org.opensourcephysics.tools.LibraryBrowser'].loadTabAndListen$S$java_util_List$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path, null, "OpenRecent"])) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.recentTabs.remove$O(path);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshRecentMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
$I$(58,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.LibraryBrowser'], $I$(3).getString$S("LibraryBrowser.Dialog.FileNotFound.Message") + ": " + path , $I$(3).getString$S("LibraryBrowser.Dialog.FileNotFound.Title"), 2]);
}});
})()
), Clazz.new_($I$(43,1),[this, null],P$.LibraryBrowser$40));
}this.recentMenu.removeAll$();
this.recentMenu.setEnabled$Z(!this.library.recentTabs.isEmpty$());
for (var next, $next = this.library.recentTabs.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var text=this.library.getNameMap$().get$O(next);
if (text == null ) text=$I$(17).getName$S(next);
if (text.contains$CharSequence("temp_")) continue;
var item=Clazz.new_($I$(35,1).c$$S,[text]);
item.setActionCommand$S(next);
item.setToolTipText$S(next);
item.addActionListener$java_awt_event_ActionListener(this.openRecentAction);
this.recentMenu.add$javax_swing_JMenuItem(item);
}
}$I$(13).setMenuFonts$javax_swing_JMenu(this.recentMenu);
});

Clazz.newMeth(C$, 'open$',  function () {
var fileChooser=$I$(6).getChooser$();
if (fileChooser == null ) return;
for (var filter, $filter = 0, $$filter = fileChooser.getChoosableFileFilters$(); $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
fileChooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(filter);
}
fileChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.filesAndFoldersFilter);
fileChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(66).getXMLFilter$());
fileChooser.setAcceptAllFileFilterUsed$Z(false);
fileChooser.setFileSelectionMode$I(2);
fileChooser.setFileFilter$javax_swing_filechooser_FileFilter(C$.filesAndFoldersFilter);
var oldTitle=fileChooser.getDialogTitle$();
fileChooser.showOpenDialog$java_awt_Component$Runnable$Runnable(this, ((P$.LibraryBrowser$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.fileChooser.getSelectedFile$();
if (file != null ) this.b$['org.opensourcephysics.tools.LibraryBrowser'].open$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [file.getAbsolutePath$()]);
});
})()
), Clazz.new_(P$.LibraryBrowser$41.$init$,[this, {fileChooser:fileChooser}])), null);
fileChooser.setDialogTitle$S(oldTitle);
fileChooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(C$.filesAndFoldersFilter);
fileChooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(66).getXMLFilter$());
fileChooser.setAcceptAllFileFilterUsed$Z(true);
fileChooser.setFileSelectionMode$I(0);
});

Clazz.newMeth(C$, 'open$S',  function (path) {
this.loadTab$S$java_util_List(path, null);
});

Clazz.newMeth(C$, 'closeTab$I',  function (index) {
if (index < 0 || index >= this.tabbedPane.getTabCount$() ) return true;
var treePanel=this.getTreePanel$I(index);
if (!treePanel.saveChanges$S(this.getTabTitle$I(index))) return false;
if (treePanel.rootResource === this.getRecentCollection$() ) {
treePanel.save$();
}this.tabbedPane.removeTabAt$I(index);
if (treePanel.metadataLoader != null ) {
treePanel.metadataLoader.cancel$();
}return true;
});

Clazz.newMeth(C$, 'getTabCount$',  function () {
return this.tabbedPane.getTabCount$();
});

Clazz.newMeth(C$, 'save$',  function () {
var treePanel=this.getSelectedTreePanel$();
if (treePanel == null ) return null;
var path=null;
if ("temp".equals$O(treePanel.getName$())) {
treePanel.setName$S("");
var tempPath=treePanel.pathToRoot;
path=this.saveAs$();
if (path != null  && tempPath != null  ) {
var tempFile=Clazz.new_($I$(27,1).c$$S,[tempPath]);
tempFile.delete$();
this.library.addRecent$S$Z(path, false);
this.refreshRecentMenu$();
}} else {
path=treePanel.save$();
}this.refreshGUI$();
return path;
});

Clazz.newMeth(C$, 'saveAs$',  function () {
var title=$I$(3).getString$S("LibraryBrowser.FileChooser.Title.SaveAs");
var path=this.getChooserSavePath$S(title);
if (path != null ) {
path=$I$(17).forwardSlash$S(path);
var treePanel=this.getSelectedTreePanel$();
if (treePanel == null ) return null;
treePanel.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(treePanel.rootResource, path, true, true);
path=this.save$();
treePanel.setEditing$Z(true);
this.refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource(path, treePanel.rootResource);
this.refreshGUI$();
this.commandField.setForeground$java_awt_Color($I$(7).defaultForeground);
}return path;
});

Clazz.newMeth(C$, 'getChooserSavePath$S',  function (chooserTitle) {
var file=$I$(67).showSaveDialog$java_awt_Component$S(this, chooserTitle);
if (file == null ) return null;
var path=file.getAbsolutePath$();
var extension=$I$(17).getExtension$S(path);
if (extension == null ) {
path=$I$(17).stripExtension$S(path) + ".xml";
file=Clazz.new_($I$(27,1).c$$S,[path]);
if (file.exists$()) {
var response=$I$(58,"showConfirmDialog$java_awt_Component$O$S$I",[this, $I$(3).getString$S("Tool.Dialog.ReplaceFile.Message") + " " + file.getName$() + "?" , $I$(3).getString$S("Tool.Dialog.ReplaceFile.Title"), 1]);
if (response != 0) {
return null;
}}}return path;
});

Clazz.newMeth(C$, 'addSearchResource$org_opensourcephysics_tools_LibraryResource',  function (resource) {
if (C$.searchResourceMap == null ) C$.searchResourceMap=Clazz.new_($I$(68,1));
var s=resource.collectionPath;
if (s != null  && s.length$() > 0 ) {
C$.searchResourceMap.put$O$O(s, resource);
}}, 1);

Clazz.newMeth(C$, 'getSearchPathMap$',  function () {
this.loadSearchPathMap$();
return this.searchPathMap;
});

Clazz.newMeth(C$, 'loadSearchPathMap$',  function () {
if (C$.isSearchMapLoaded) return;
C$.isSearchMapLoaded=true;
var temp=($I$(6).isJS ? null : Clazz.new_($I$(15,1)));
if (this.searchPathMap == null ) this.searchPathMap=Clazz.new_($I$(69,1));
this.searchPathMap.clear$();
var paths=this.library.getAllPaths$();
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (path.contains$CharSequence("EJS") || !$I$(14).isHTTP$S(path) ) continue;
var name=this.library.getNameMap$().get$O(path);
if ($I$(11).isComPADREPath$S(path)) name="ComPADRE " + name;
this.searchPathMap.put$O$O(name, path);
if (temp != null ) temp.add$O($I$(14).getSearchCacheFile$S(path));
}
if (temp != null ) {
var files=$I$(14).getSearchFileList$();
for (var i=0; i < files.size$(); i++) {
var next=files.get$I(i);
if (!temp.contains$O(next)) {
var control=Clazz.new_([next.getPath$()],$I$(29,1).c$$S);
var name=control.getString$S("name");
if (name != null ) {
var realPath=control.getString$S("real_path");
this.searchPathMap.put$O$O(name, realPath == null  ? next.getPath$() : realPath);
}}}
}this.searchTargetPaths=Clazz.new_($I$(15,1));
this.searchTargetNames=Clazz.new_($I$(15,1));
for (var name, $name = this.searchPathMap.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var path=this.searchPathMap.get$O(name);
this.searchTargetNames.add$O(name);
this.searchTargetPaths.add$O(path);
if ($I$(6).isJS) {
if (this.getTabIndexFromPath$S(path) > -1 || name.startsWith$S("ComPADRE") ) {
this.library.noSearchSet.remove$O(path);
}}}
});

Clazz.newMeth(C$, 'chooseSearchTargets',  function () {
this.loadSearchPathMap$();
var firstTime=this.searchTargetChooser == null ;
if (firstTime) {
this.searchTargetChooser=Clazz.new_([$I$(3).getString$S("LibraryManager.Title.Search"), $I$(3).getString$S("LibraryBrowser.Dialog.SearchTargets.Text") + ":", null, ((P$.LibraryBrowser$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.noSearchSet.clear$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.noSearchSet, []);
for (var i=0; i < this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchTargetNames.size$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchTargetNames, []); i++) {
var path=this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchPathMap.get$O.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchPathMap, [this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchTargetNames.get$I.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchTargetNames, [i])]);
if (!this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchTargetPaths.contains$O.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchTargetPaths, [path])) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.noSearchSet.add$O.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.noSearchSet, [path]);
}}
});
})()
), Clazz.new_(P$.LibraryBrowser$lambda9.$init$,[this, null]))],$I$(70,1).c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener);
this.searchTargetChooser.includeCancelButton$Z(false);
this.searchTargetChooser.setIconImage$java_awt_Image((C$.searchTargetIcon.getBaseIcon$()).getImage$());
}this.searchTargetPaths.clear$();
var selected=Clazz.array(Boolean.TYPE, [this.searchPathMap.size$()]);
var i=0;
for (var name, $name = this.searchPathMap.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var path=this.searchPathMap.get$O(name);
this.searchTargetPaths.add$O(path);
selected[i]=!this.library.noSearchSet.contains$O(path);
++i;
}
this.searchTargetChooser.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(this.searchTargetPaths, this.searchTargetNames, null, null, selected, null);
}, p$1);

Clazz.newMeth(C$, 'loadSearchResourceMap',  function () {
this.loadSearchPathMap$();
if (!$I$(6).isJS) {
var cacheFiles=$I$(14).getSearchFileList$();
for (var nextPath, $nextPath = this.searchPathMap.values$().iterator$(); $nextPath.hasNext$()&&((nextPath=($nextPath.next$())),1);) {
var cacheFile=$I$(14).getSearchCacheFile$S(nextPath);
if (cacheFiles.contains$O(cacheFile) && !this.library.noSearchSet.contains$O(nextPath) && (C$.searchResourceMap == null  || !C$.searchResourceMap.keySet$().contains$O(nextPath) )  ) {
var control=Clazz.new_($I$(29,1).c$$java_io_File,[cacheFile]);
if (!control.failedToRead$() && Clazz.getClass($I$(32)).isAssignableFrom$Class(control.getObjectClass$()) ) {
var resource=control.loadObject$O(null);
resource.collectionPath=control.getString$S("real_path");
C$.addSearchResource$org_opensourcephysics_tools_LibraryResource(resource);
}}}
}var paths=this.library.getAllPaths$();
var control;
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (this.library.noSearchSet.contains$O(path) || !$I$(14).isHTTP$S(path) ) continue;
if (C$.searchResourceMap == null  || !C$.searchResourceMap.keySet$().contains$O(path) ) {
var f=$I$(14).getSearchCacheFile$S(path);
var searchPath="https://opensourcephysics.github.io/resources/Search/" + f.getName$();
control=Clazz.new_($I$(29,1).c$$S,[searchPath]);
if (!control.failedToRead$() && Clazz.getClass($I$(32)).isAssignableFrom$Class(control.getObjectClass$()) ) {
var collection=control.loadObject$O(null);
collection.collectionPath=path;
C$.addSearchResource$org_opensourcephysics_tools_LibraryResource(collection);
}}}
}, p$1);

Clazz.newMeth(C$, 'getSearchTargets$',  function () {
p$1.loadSearchResourceMap.apply(this, []);
var searchTargets=Clazz.new_($I$(71,1));
if (C$.searchResourceMap != null ) {
for (var r, $r = C$.searchResourceMap.values$().iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
var rc=r.getClone$();
var path=rc.collectionPath;
if (path != null  && !this.library.noSearchSet.contains$O(path) ) {
searchTargets.add$O(rc);
}}
} else {
var xmlFiles=$I$(14).getSearchFileList$();
for (var file, $file = xmlFiles.iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
var control=Clazz.new_($I$(29,1).c$$java_io_File,[file]);
if (!control.failedToRead$() && Clazz.getClass($I$(32)).isAssignableFrom$Class(control.getObjectClass$()) ) {
var resource=control.loadObject$O(null);
resource.collectionPath=control.getString$S("real_path");
var path=resource.collectionPath;
if (path != null  && !this.library.noSearchSet.contains$O(path) ) {
searchTargets.add$O(resource);
}}}
}return searchTargets;
});

Clazz.newMeth(C$, 'searchFor$S$java_util_Set',  function (searchPhrase, searchTargets) {
if (searchPhrase == null  || searchPhrase.trim$().equals$O("") ) return null;
var found=Clazz.new_($I$(69,1));
for (var target, $target = searchTargets.iterator$(); $target.hasNext$()&&((target=($target.next$())),1);) {
if (target == null ) continue;
if (Clazz.instanceOf(target, "org.opensourcephysics.tools.LibraryCollection")) {
var map=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(searchPhrase, target);
for (var next, $next = map.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.collectionPath=target.collectionPath;
found.put$O$O(next, map.get$O(next));
}
} else {
var results=this.searchResourceFor$S$org_opensourcephysics_tools_LibraryResource(searchPhrase, target);
if (results != null ) {
found.put$O$O(target, results);
}}}
if (found.isEmpty$()) return null;
var treePanel=p$1.getSearchResultsTreePanel.apply(this, []);
var root=treePanel.rootNode;
var rootCollection=treePanel.getCollection$();
var name="'" + searchPhrase + "'" ;
for (var j=0; j < root.getChildCount$(); j++) {
var childNode=root.getChildAt$I(j);
if (childNode.getName$().equals$O(name)) {
treePanel.removeNode$org_opensourcephysics_tools_LibraryTreeNode(childNode);
}}
var results=Clazz.new_($I$(28,1).c$$S,[name]);
rootCollection.addResource$org_opensourcephysics_tools_LibraryResource(results);
var resultsNode=Clazz.new_($I$(72,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[results, treePanel]);
treePanel.insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I(resultsNode, root, root.getChildCount$());
for (var next, $next = found.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!next.collectionPath.contains$CharSequence("compadre.org")) continue;
var clone=next.getClone$();
results.addResource$org_opensourcephysics_tools_LibraryResource(clone);
var newNode=Clazz.new_($I$(72,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[clone, treePanel]);
newNode.setBasePath$S(next.getInheritedBasePath$());
treePanel.insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I(newNode, resultsNode, resultsNode.getChildCount$());
}
for (var next, $next = found.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.collectionPath.contains$CharSequence("compadre.org")) continue;
var clone=next.getClone$();
results.addResource$org_opensourcephysics_tools_LibraryResource(clone);
var newNode=Clazz.new_($I$(72,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[clone, treePanel]);
newNode.setBasePath$S(next.getInheritedBasePath$());
treePanel.insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I(newNode, resultsNode, resultsNode.getChildCount$());
}
treePanel.scrollToPath$javax_swing_tree_TreePath$Z((resultsNode.getLastChild$()).getTreePath$(), false);
treePanel.isChanged=false;
$I$(13).setFonts$java_awt_Container(treePanel);
treePanel.setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode(resultsNode);
return resultsNode;
});

Clazz.newMeth(C$, 'getSearchResultsTreePanel',  function () {
if (this.searchResultsTreePanel == null ) {
this.searchResultsTreePanel=this.createLibraryTreePanel$();
var collection=Clazz.new_($I$(28,1).c$$S,[""]);
this.searchResultsTreePanel.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(collection, "", false, false);
}this.searchResultsTreePanel.getCollection$().setName$S($I$(3).getString$S("LibraryBrowser.SearchResults"));
return this.searchResultsTreePanel;
}, p$1);

Clazz.newMeth(C$, 'searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection',  function (searchPhrase, collection) {
var toAND=searchPhrase.split$S(" AND ");
var toOR=searchPhrase.split$S(" OR ");
if (toAND.length > 1 && toOR.length == 1 ) {
var results=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(toAND[0], collection);
$I$(2,"finer$S",["AND '" + toAND[0] + "' (found: " + results.size$() + ")" ]);
for (var i=1; i < toAND.length; i++) {
var next=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(toAND[i], collection);
$I$(2,"finer$S",["AND '" + toAND[i] + "' (found: " + results.size$() + ")" ]);
results=this.applyAND$java_util_Map$java_util_Map(results, next);
}
$I$(2,"finer$S",["AND found: " + results.size$()]);
return results;
}if (toOR.length > 1 && toAND.length == 1 ) {
var results=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(toOR[0], collection);
$I$(2,"finer$S",["OR '" + toOR[0] + "' (found: " + results.size$() + ")" ]);
for (var i=1; i < toOR.length; i++) {
var next=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(toOR[i], collection);
$I$(2,"finer$S",["OR '" + toOR[i] + "' (found: " + results.size$() + ")" ]);
results=this.applyOR$java_util_Map$java_util_Map(results, next);
}
$I$(2,"finer$S",["OR found: " + results.size$()]);
return results;
}if (toOR.length > 1 && toAND.length > 1 ) {
var split=this.getNextSplit$S(searchPhrase);
var results=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(split[0], collection);
while (split.length > 2){
var operator=split[1];
var remainder=split[2];
split=this.getNextSplit$S(remainder);
var next=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(split[0], collection);
if (operator.equals$O(" AND ")) {
results=this.applyAND$java_util_Map$java_util_Map(results, next);
} else if (operator.equals$O(" OR ")) {
results=this.applyOR$java_util_Map$java_util_Map(results, next);
}}
return results;
}var found=Clazz.new_($I$(69,1));
var results=this.searchResourceFor$S$org_opensourcephysics_tools_LibraryResource(searchPhrase, collection);
if (results != null ) {
found.put$O$O(collection, results);
}for (var record, $record = 0, $$record = collection.getResources$(); $record<$$record.length&&((record=($$record[$record])),1);$record++) {
if (record == null ) continue;
if (Clazz.instanceOf(record, "org.opensourcephysics.tools.LibraryCollection")) {
var map=this.searchCollectionFor$S$org_opensourcephysics_tools_LibraryCollection(searchPhrase, record);
for (var next, $next = map.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
found.put$O$O(next, map.get$O(next));
}
} else {
results=this.searchResourceFor$S$org_opensourcephysics_tools_LibraryResource(searchPhrase, record);
if (results != null ) {
found.put$O$O(record, results);
}}}
return found;
});

Clazz.newMeth(C$, 'searchResourceFor$S$org_opensourcephysics_tools_LibraryResource',  function (searchPhrase, record) {
var toMatch=searchPhrase.toLowerCase$();
var foundData=Clazz.new_($I$(15,1));
var name=record.getName$();
if (name.toLowerCase$().contains$CharSequence(toMatch)) {
foundData.add$O(Clazz.array(String, -1, ["name", name]));
}var type=record.getType$();
if (type.toLowerCase$().contains$CharSequence(toMatch)) {
foundData.add$O(Clazz.array(String, -1, ["type", type]));
}var metadata=record.getMetadata$();
if (metadata != null ) {
for (var next, $next = metadata.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var key=next.getData$()[0];
var value=next.getData$()[1];
if (value.toLowerCase$().indexOf$S(toMatch) > -1) {
foundData.add$O(Clazz.array(String, -1, [key, value]));
}}
}return foundData.isEmpty$() ? null : foundData;
});

Clazz.newMeth(C$, 'getNextSplit$S',  function (phrase) {
var and=phrase.split$S$I(" AND ", 2);
var or=phrase.split$S$I(" OR ", 2);
var open=phrase.split$S$I($I$(73,"quote$S",["("]), 2);
var which=and[0].length$() <= or[0].length$() ? and[0].length$() <= open[0].length$() ? 0 : 2 : or[0].length$() <= open[0].length$() ? 1 : 2;
if (which == 2 && open.length > 1 ) {
var split=this.getParenthesisSplit$S(open[1]);
if (split.length == 1) {
return Clazz.array(String, -1, [split[0]]);
}var n=split[1].indexOf$S(" AND ");
var m=split[1].indexOf$S(" OR ");
if (n == -1 && m == -1 ) {
return Clazz.array(String, -1, [open[1]]);
}if (n > -1 && (m == -1 || n < m ) ) {
return Clazz.array(String, -1, [split[0], " AND ", split[1].substring$I(n + " AND ".length$())]);
}if (m > -1 && (n == -1 || m < n ) ) {
return Clazz.array(String, -1, [split[0], " OR ", split[1].substring$I(m + " OR ".length$())]);
}}switch (which) {
case 0:
if (and.length == 1) return Clazz.array(String, -1, [and[0]]);
return Clazz.array(String, -1, [and[0], " AND ", and[1]]);
case 1:
if (or.length == 1) return Clazz.array(String, -1, [or[0]]);
return Clazz.array(String, -1, [or[0], " OR ", or[1]]);
}
return Clazz.array(String, -1, [phrase]);
});

Clazz.newMeth(C$, 'getParenthesisSplit$S',  function (phrase) {
var index=1;
var n=1;
var opening=phrase.indexOf$S$I("(", index);
var closing=phrase.indexOf$S$I(")", index);
while (n > 0){
if (opening > -1 && opening < closing ) {
++n;
index=opening + 1;
opening=phrase.indexOf$S$I("(", index);
} else if (closing > -1) {
--n;
index=closing + 1;
closing=phrase.indexOf$S$I(")", index);
} else return Clazz.array(String, -1, [phrase]);
}
var token=phrase.substring$I$I(0, index - 1);
var remainder=phrase.substring$I(index);
return remainder.trim$().equals$O("") ? Clazz.array(String, -1, [token]) : Clazz.array(String, -1, [token, remainder]);
});

Clazz.newMeth(C$, 'applyAND$java_util_Map$java_util_Map',  function (results1, results2) {
var resultsAND=Clazz.new_($I$(69,1));
var keys1=results1.keySet$();
for (var node, $node = results2.keySet$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (keys1.contains$O(node)) {
var matchedTerms=Clazz.new_($I$(15,1));
matchedTerms.addAll$java_util_Collection(results1.get$O(node));
matchedTerms.addAll$java_util_Collection(results2.get$O(node));
resultsAND.put$O$O(node, matchedTerms);
}}
return resultsAND;
});

Clazz.newMeth(C$, 'applyOR$java_util_Map$java_util_Map',  function (results1, results2) {
var resultsOR=Clazz.new_($I$(69,1));
for (var node, $node = results1.keySet$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
var matchedTerms=Clazz.new_($I$(15,1));
matchedTerms.addAll$java_util_Collection(results1.get$O(node));
resultsOR.put$O$O(node, matchedTerms);
}
for (var node, $node = results2.keySet$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (resultsOR.keySet$().contains$O(node)) {
resultsOR.get$O(node).addAll$java_util_Collection(results2.get$O(node));
continue;
}var matchedTerms=Clazz.new_($I$(15,1));
matchedTerms.addAll$java_util_Collection(results2.get$O(node));
resultsOR.put$O$O(node, matchedTerms);
}
return resultsOR;
});

Clazz.newMeth(C$, 'addToCollections$S',  function (path) {
if (this.library.containsPath$S$Z(path, true)) {
return;
}var proposed=this.getTabTitle$S(path);
if (proposed == null ) {
var collection=this.loadResource$S(path);
if (collection != null ) proposed=collection.getName$();
}if (proposed == null ) return;
if (proposed.equals$O("")) {
proposed=$I$(17).getName$S(path);
}this.library.addCollection$S$S(path, proposed);
this.refreshCollectionsMenu$();
this.refreshGUI$();
});

Clazz.newMeth(C$, 'createNewCollection$',  function () {
var osppath=C$.getOSPPath$();
var path=null;
if (osppath != null ) {
var name="temp_";
path=osppath + name + "0.xml" ;
var file=Clazz.new_($I$(27,1).c$$S,[path]);
if (file.exists$()) {
var i=1;
while (i < 100){
path=osppath + name + i + ".xml" ;
file=Clazz.new_($I$(27,1).c$$S,[path]);
if (!file.exists$()) {
break;
}++i;
}
}var collection=Clazz.new_($I$(28,1).c$$S,[null]);
var control=Clazz.new_($I$(29,1).c$$O,[collection]);
control.write$S(path);
path=$I$(17).forwardSlash$S(path);
this.loadTabAndListen$S$java_util_List$S(path, null, "CreateNew");
}return path;
});

Clazz.newMeth(C$, 'getUniqueName$S$S',  function (proposed, nameToIgnore) {
proposed=proposed.trim$();
if (this.isDuplicateName$S$S(proposed, nameToIgnore)) {
var i=2;
var s=proposed + " (" + i + ")" ;
while (this.isDuplicateName$S$S(s, nameToIgnore)){
++i;
s=proposed + " (" + i + ")" ;
}
return s;
}return proposed;
});

Clazz.newMeth(C$, 'isDuplicateName$S$S',  function (name, nameToIgnore) {
for (var next, $next = this.library.getNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(nameToIgnore)) continue;
if (name.equals$O(next)) return true;
}
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var title=this.tabbedPane.getTitleAt$I(i);
if (title.endsWith$S("*")) title=title.substring$I$I(0, title.length$() - 1);
if (title.equals$O(nameToIgnore)) continue;
if (name.equals$O(title)) return true;
}
return false;
});

Clazz.newMeth(C$, 'createLibraryTreePanel$',  function () {
var treePanel=Clazz.new_($I$(7,1).c$$org_opensourcephysics_tools_LibraryBrowser,[this]);
treePanel.addPropertyChangeListener$java_beans_PropertyChangeListener(this.treePanelListener);
return treePanel;
});

Clazz.newMeth(C$, 'showAboutDialog$',  function () {
var date=$I$(6).getLaunchJarBuildDate$();
if ("".equals$O(date)) date="22 Sep 2026";
var aboutString=$I$(3).getString$S("LibraryBrowser.Version") + " " + "6.3.5.260922" + "\nRelease date " + date + "\n" + "Open Source Physics\n" + "www.opensourcephysics.org" ;
$I$(58,"showMessageDialog$java_awt_Component$O$S$I",[this, aboutString, $I$(3).getString$S("Dialog.About.Title") + " " + $I$(3).getString$S("LibraryBrowser.Title") , 1]);
});

Clazz.newMeth(C$, 'showHelp$',  function () {
if (C$.fireHelpEvent) {
this.firePropertyChange$S$O$O("help", null, null);
return;
}var helpPath="https://opensourcephysics.github.io/tracker-website/help/library_browser.html";
if ($I$(14).getResource$S(helpPath) != null ) {
$I$(60).displayURL$S(helpPath);
} else {
var classBase="/org/opensourcephysics/resources/tools/html/";
helpPath=$I$(17).getResolvedPath$S$S("library_browser_help.html", classBase);
if ((this.helpFrame == null ) || !helpPath.equals$O(this.helpFrame.getTitle$()) ) {
this.helpFrame=Clazz.new_($I$(74,1).c$$S,[helpPath]);
this.helpFrame.enableHyperlinks$();
this.helpFrame.setSize$I$I(1000, 700);
var dim=$I$(1).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.helpFrame.getBounds$().width)/2|0);
var y=((dim.height - this.helpFrame.getBounds$().height)/2|0);
this.helpFrame.setLocation$I$I(x, y);
}this.helpFrame.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'getAboutLibraryBrowserText$',  function () {
var path="/org/opensourcephysics/resources/tools/images/compadre_banner.jpg";
var res=$I$(14).getResource$S(path);
var imageCode="";
if (res != null ) {
imageCode="<p align=\"center\"><img src=\"" + res.getURL$() + "\"></p>" ;
}var code=imageCode + "<div style=\"font-family:'Verdana'\"><h1 align=\"center\">Open Source Physics Library Browser</h1>" + "<p>Use the OSP Library Browser to browse online collections of Tracker projects, EJS simulations and other learning resources.</p><ul> <li>Open a collection by choosing from the Collections menu or entering a URL directly in the toolbar as with a web browser.</li>" + "<li>Collections are organized and displayed in a tree. Each tree node is a resource or sub-collection. Click a node to learn about the resource or double-click to download and/or open it in Tracker, EJS, DataTool or your web browser.</li>" + "<li>To build your own collection choose File|New Collection. Add your own resources or copy and paste from other collections. Collections are saved as xml documents that contain references to the actual resource files. For more information, choose Help.</li>" + "</ul><p><strong>ComPADRE</strong> is a network of online resource collections and community web sites supporting physics education with content, tools, and expert advice. Open a ComPADRE collection by choosing from the Collections|ComPADRE Library menu." + "  You can help build the ComPADRE collection by reviewing resources, participating in discussions, and adding your own OSP resources. For more information, see <a href=\"https://www.compadre.org/osp/\">http://www.compadre.org/osp/</a>. " + "To recommend a resource for ComPADRE, visit <em>Suggest a Resource</em> at <a href=\"https://www.compadre.org/osp/items/suggest.cfm\">http://www.compadre.org/osp/items/suggest.cfm</a>. Contact Wolfgang Christian, the OSP Collection editor, for more information.</p>" + "</div>" ;
return code;
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var browser=C$.getBrowser$();
browser.addOSPLibrary$S("https://opensourcephysics.github.io/resources/CAB/tracker_library.xml");
browser.addOSPLibrary$S("https://opensourcephysics.github.io/resources/CAB/shared_library.xml");
browser.addComPADRECollection$S("https://www.compadre.org/osp/services/REST/osp_jars.cfm?verb=Identify&OSPType=EJS%20Model&AttachedDocument=Source%20Code&OSPPrimary=Subject");
browser.addComPADRECollection$S("https://www.compadre.org/osp/services/REST/osp_tracker.cfm?verb=Identify&OSPType=Tracker&OSPPrimary=Subject");
if ((args != null ) && (args.length > 0) && (args[0] != null )  ) {
browser.open$S(args[0]);
}browser.exitOnClose=true;
var dim=$I$(1).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - browser.getBounds$().width)/2|0);
var y=((dim.height - browser.getBounds$().height)/2|0);
browser.setLocation$I$I(x, y);
browser.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'warnNotLoaded$S',  function (path) {
var s=$I$(3).getString$S("LibraryBrowser.Dialog.CollectionNotFound.Message") + ":\n" + path ;
System.out.println$S("WARN - LibraryBrowser " + s);
});

Clazz.newMeth(C$, 'isWebConnected$ZA',  function (isDialogShown) {
if (!C$.checkedWebConnection) {
C$.checkedWebConnection=true;
this.webConnected=$I$(14).isWebConnected$();
if (!this.webConnected) {
if (isDialogShown != null ) isDialogShown[0]=true;
if ($I$(14).showWebConnectionDialog$() == 1) {
C$.checkedWebConnection=false;
$I$(14).clearWebTest$();
return this.isWebConnected$ZA(isDialogShown);
}}}return this.webConnected;
});

Clazz.newMeth(C$, 'getRedirectFromHTMLCode$S',  function (code) {
if (code == null ) return null;
var parts=code.split$S("<!--");
if (parts.length > 1) {
for (var i=1; i < parts.length; i++) {
if (parts[i].trim$().startsWith$S("redirect:")) {
var subparts=parts[i].split$S("-->");
return subparts.length > 1 ? subparts[0].substring$I(9).trim$() : null;
}}
}return null;
}, 1);

Clazz.newMeth(C$, 'getMetadataFromHTML$S',  function (htmlCode) {
var results=Clazz.new_($I$(15,1));
if (htmlCode == null ) return results;
var parts=htmlCode.split$S("<meta name=\"");
for (var i=1; i < parts.length; i++) {
var n=parts[i].indexOf$S("\">");
if (n > -1) {
parts[i]=parts[i].substring$I$I(0, n);
var divider="\" content=\"";
var subparts=parts[i].split$S(divider);
if (subparts.length > 1) {
var name=subparts[0];
var value=subparts[1];
results.add$O(Clazz.array(String, -1, [name, value]));
}}}
return results;
}, 1);

Clazz.newMeth(C$, 'addMetadataLoaderListener$java_beans_PropertyChangeListener',  function (listener) {
this.metadataLoaderListener=listener;
});

Clazz.newMeth(C$, 'getOSPPath$',  function () {
if ($I$(6).isJS) return null;
if (C$.ospPath == null ) {
var userHome=$I$(6).getUserHome$().replace$C$C("\\", "/");
var ospFolder=$I$(6).isWindows$() ? "/My Documents/OSP/" : "/Documents/OSP/";
C$.ospPath=userHome + ospFolder;
if (!Clazz.new_($I$(27,1).c$$S,[C$.ospPath]).exists$()) {
var dirs=$I$(6).getDefaultSearchPaths$();
C$.ospPath=$I$(17,"forwardSlash$S",[dirs.get$I(0)]);
}if (!C$.ospPath.endsWith$S("/")) {
C$.ospPath+="/";
}}return C$.ospPath;
}, 1);

Clazz.newMeth(C$, 'clearCache$',  function () {
$I$(14).clearOSPCache$java_io_File$Z(null, false);
$I$(7).clearMaps$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.checkedWebConnection=$I$(6).isJS;
C$.TRACKER_FILTER=Clazz.new_($I$(22,1));
C$.filesAndFoldersFilter=Clazz.new_($I$(23,1));
C$.fireHelpEvent=false;
C$.maxRecentCollectionSize=18;
C$.wide=900;
C$.high=560;
C$.useOnlineOnly=true;
{
C$.buttonBorder=$I$(10).createEtchedBorder$();
var space=$I$(10).createEmptyBorder$I$I$I$I(1, 2, 2, 2);
C$.buttonBorder=$I$(10).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(C$.buttonBorder, space);
space=$I$(10).createEmptyBorder$I$I$I$I(0, 1, 0, 1);
C$.buttonBorder=$I$(10).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(space, C$.buttonBorder);
C$.menubar=Clazz.new_($I$(24,1));
var imageFile="/org/opensourcephysics/resources/tools/images/expand.png";
C$.expandIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/contract.png";
C$.contractIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/expand_bold.png";
C$.heavyExpandIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/contract_bold.png";
C$.heavyContractIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/refresh.gif";
C$.refreshIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/download.gif";
C$.downloadIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/downloaddisabled.gif";
C$.downloadDisabledIcon=$I$(14).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/searchtarget.gif";
C$.searchTargetIcon=$I$(14).getResizableIcon$S(imageFile);
};
C$.isSearchMapLoaded=false;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "Searcher", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['searchTerm']]]

Clazz.newMeth(C$, 'c$$S',  function (searchTerm) {
Clazz.super_(C$, this);
this.searchTerm=searchTerm;
}, 1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
var searchTargets=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getSearchTargets$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
return this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchFor$S$java_util_Set.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.searchTerm.trim$(), searchTargets]);
});

Clazz.newMeth(C$, 'done$',  function () {
try {
var resultsTreeNode=this.get$();
if (resultsTreeNode == null ) {
$I$(1).getDefaultToolkit$().beep$();
$I$(2).finer$S(this.searchTerm + "not found");
var color=this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.getForeground$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.setText$S($I$(3).getString$S("LibraryBrowser.Search.NotFound"));
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.setForeground$java_awt_Color($I$(4).RED);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.setBackground$java_awt_Color($I$(4).white);
if ($I$(5).searchTimer == null ) {
$I$(5).searchTimer=$I$(6,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.LibraryBrowser$Searcher$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowser$Searcher$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.setText$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField, [this.b$['org.opensourcephysics.tools.LibraryBrowser.Searcher'].searchTerm]);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.setForeground$java_awt_Color.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField, [this.$finals$.color]);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.selectAll$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField, []);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField.setBackground$java_awt_Color.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'].searchField, [$I$(4).white]);
});
})()
), Clazz.new_(P$.LibraryBrowser$Searcher$lambda1.$init$,[this, {color:color}]))]);
} else {
$I$(5).searchTimer.restart$();
}return;
}var treePanel=p$1.getSearchResultsTreePanel.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
var title=treePanel.getCollection$().getName$();
var i=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTabIndexFromTitle$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [title]);
{
if (i == -1) this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.addTab$S$java_awt_Component(title, treePanel);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.setSelectedComponent$java_awt_Component(treePanel);
}$I$(7).htmlPanesByNode.remove$O(resultsTreeNode);
treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(resultsTreeNode, "LibraryBrowser.Searcher.done");
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).getDefaultToolkit$().beep$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "TabTitle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['titleLabel','javax.swing.JLabel','+iconLabel','normalIcon','javax.swing.Icon','+boldIcon']]]

Clazz.newMeth(C$, 'c$$javax_swing_Icon$javax_swing_Icon',  function (lightIcon, heavyIcon) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(8,1))]);C$.$init$.apply(this);
this.setOpaque$Z(false);
this.titleLabel=Clazz.new_($I$(9,1));
this.iconLabel=Clazz.new_($I$(9,1));
this.iconLabel.setBorder$javax_swing_border_Border($I$(10).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.iconLabel.addMouseListener$java_awt_event_MouseListener(((P$.LibraryBrowser$TabTitle$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$TabTitle$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
var i=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTabIndexFromTitle$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].titleLabel.getText$()]);
if (i >= 0 && this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.getSelectedIndex$() != i ) this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.setSelectedIndex$I(i);
var primaryOnly=(this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].normalIcon === $I$(5).contractIcon );
var index=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTabIndexFromTitle$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].titleLabel.getText$()]);
if (index >= 0) {
var treePanel=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTreePanel$I.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [index]);
var path=$I$(11).getCollectionPath$S$Z(treePanel.pathToRoot, primaryOnly);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].loadTabAsync$S$I$java_util_List$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path, index, null, null]);
this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].setIcons$javax_swing_Icon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'], [primaryOnly ? $I$(5).expandIcon : $I$(5).contractIcon, primaryOnly ? $I$(5).heavyExpandIcon : $I$(5).heavyContractIcon]);
this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].iconLabel.setToolTipText$S(primaryOnly ? $I$(3).getString$S("LibraryBrowser.Tooltip.Expand") : $I$(3).getString$S("LibraryBrowser.Tooltip.Contract"));
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].iconLabel.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].boldIcon);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].iconLabel.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.tools.LibraryBrowser.TabTitle'].normalIcon);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.LibraryBrowser$TabTitle$1)));
this.add$java_awt_Component$O(this.titleLabel, "West");
this.add$java_awt_Component$O(this.iconLabel, "East");
this.setIcons$javax_swing_Icon$javax_swing_Icon(lightIcon, heavyIcon);
}, 1);

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.titleLabel.setText$S(title);
});

Clazz.newMeth(C$, 'setIcons$javax_swing_Icon$javax_swing_Icon',  function (lightIcon, heavyIcon) {
this.normalIcon=lightIcon;
this.boldIcon=heavyIcon;
this.iconLabel.setIcon$javax_swing_Icon(this.normalIcon);
});

Clazz.newMeth(C$, 'refreshFontSize$',  function () {
$I$(13).setFont$java_awt_Component(this.titleLabel);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "LibraryLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryPath == null ) return this.b$['org.opensourcephysics.tools.LibraryBrowser'].library;
var webChecker=((P$.LibraryBrowser$LibraryLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowser$LibraryLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var isDialogShown=Clazz.array(Boolean.TYPE, -1, [false]);
if (!this.b$['org.opensourcephysics.tools.LibraryBrowser'].isWebConnected$ZA.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [isDialogShown])) {
if (!isDialogShown[0] && $I$(14).showWebConnectionDialog$() == 1 ) {
$I$(5).checkedWebConnection=false;
$I$(14).clearWebTest$();
this.run$();
}}});
})()
), Clazz.new_(P$.LibraryBrowser$LibraryLoader$1.$init$,[this, null]));
if (!$I$(14).isHTTP$S(this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryPath)) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.load$S(this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryPath);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].localLibraryLoaded=true;
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.openTabPaths != null  && this.b$['org.opensourcephysics.tools.LibraryBrowser'].metadataLoaderListener == null  ) {
var unopenedTabs=Clazz.new_($I$(15,1));
var openedTabs=Clazz.new_($I$(15,1));
var paths=this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.openTabPaths;
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
var k=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTabIndexFromPath$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path]);
if (k > -1 || openedTabs.contains$O(path) ) {
continue;
}var cachedFile=$I$(14).getSearchCacheFile$S(path);
if (cachedFile.exists$()) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].addTabAndExecute$S$java_util_List$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path, null, null]);
openedTabs.add$O(path);
} else {
unopenedTabs.add$O(path);
}}
if (!unopenedTabs.isEmpty$()) {
paths=unopenedTabs.toArray$OA(Clazz.array(String, [unopenedTabs.size$()]));
unopenedTabs.clear$();
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
var res=$I$(14).getResource$S(path);
if (res != null  && !$I$(14).isHTTP$S(path) ) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].addTabAndExecute$S$java_util_List$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path, null, null]);
} else {
unopenedTabs.add$O(path);
}}
}var done=unopenedTabs.isEmpty$();
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.openTabPaths=done ? null : unopenedTabs.toArray$OA(Clazz.array(String, [unopenedTabs.size$()]));
}webChecker.run$();
} else {
webChecker.run$();
if (this.b$['org.opensourcephysics.tools.LibraryBrowser'].isWebConnected$ZA.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [null])) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.load$S(this.b$['org.opensourcephysics.tools.LibraryBrowser'].libraryPath);
}}return this.b$['org.opensourcephysics.tools.LibraryBrowser'].library;
});

Clazz.newMeth(C$, 'done$',  function () {
try {
var library=this.get$();
if (library.openTabPaths != null  && this.b$['org.opensourcephysics.tools.LibraryBrowser'].metadataLoaderListener == null  ) {
for (var path, $path = 0, $$path = library.openTabPaths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
var available=this.b$['org.opensourcephysics.tools.LibraryBrowser'].isWebConnected$ZA.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [null]) && $I$(14).isHTTP$S(path) ;
if (available) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].addTabAndExecute$S$java_util_List$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [path, null, null]);
}}
}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshCollectionsMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshRecentMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "TabLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'S',['path'],'O',['treePath','java.util.List']]]

Clazz.newMeth(C$, 'c$$S$I$java_util_List',  function (pathToAdd, tabIndex, treePath) {
Clazz.super_(C$, this);
this.path=pathToAdd;
this.index=tabIndex;
this.treePath=treePath;
}, 1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
this.b$['java.awt.Component'].setCursor$java_awt_Cursor.apply(this.b$['java.awt.Component'], [$I$(16).getPredefinedCursor$I(3)]);
var realPath=this.path;
var cachedFile=$I$(14).getSearchCacheFile$S(this.path);
if (cachedFile.exists$() && $I$(14).isHTTP$S(this.path) && this.b$['org.opensourcephysics.tools.LibraryBrowser'].metadataLoaderListener == null   ) {
realPath=cachedFile.getAbsolutePath$();
}var doCache=$I$(6).doCacheZipContents;
$I$(6).doCacheZipContents=true;
var resource=this.b$['org.opensourcephysics.tools.LibraryBrowser'].loadResource$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [realPath]);
$I$(6).doCacheZipContents=doCache;
if (!doCache) $I$(14).clearZipCache$();
var isTRZ=($I$(14,"isJarZipTrz$S$Z",[this.path.toLowerCase$(), false]));
var isLocal=(!$I$(14).isHTTP$S(realPath));
if (resource != null ) {
var treePanel=null;
if (isTRZ) {
var contents=$I$(14).getZipContents$S$Z(realPath, true);
if (contents != null ) {
var baseName=$I$(17,"stripExtension$S",[$I$(17).getName$S(realPath)]);
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.indexOf$S("_thumbnail") > -1) {
var thumb=$I$(17).getName$S(next);
baseName=thumb.substring$I$I(0, thumb.indexOf$S("_thumbnail"));
resource.setName$S(baseName);
break;
}}
for (var next, $next = contents.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.endsWith$S(".html") || next.endsWith$S(".htm") ) {
var nextName=$I$(17).getName$S(next);
if ($I$(17).stripExtension$S(nextName).equals$O(baseName + "_info")) {
var trzName=$I$(17).getName$S(realPath);
resource.setHTMLPath$S(trzName + "!/" + next );
break;
}}}
}if (isLocal) {
var recentCollectionPath=$I$(5).getOSPPath$() + "recent_collection.xml";
this.path=recentCollectionPath;
var collection=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getRecentCollection$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
var duplicate=null;
var resArray=collection.getResources$();
for (var i=0; i < resArray.length; i++) {
var next=resArray[i];
if (next.getTarget$().equals$O(resource.getTarget$())) {
duplicate=next;
break;
}}
if (collection.insertResource$org_opensourcephysics_tools_LibraryResource$I(resource, 0)) {
if (duplicate != null ) {
collection.removeResource$org_opensourcephysics_tools_LibraryResource(duplicate);
}var resources=collection.getResources$();
var n=resources.length - $I$(5).maxRecentCollectionSize;
for (var i=0; i < n; i++) {
collection.removeResource$org_opensourcephysics_tools_LibraryResource(resources[resources.length - 1 - i ]);
}
resource.collectionPath=recentCollectionPath;
}this.treePath=resource.getTreePath$java_util_List(null);
this.index=this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTabIndexFromPath$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [recentCollectionPath]);
resource=collection;
}}treePanel=this.index < 0 ? this.b$['org.opensourcephysics.tools.LibraryBrowser'].createLibraryTreePanel$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []) : this.b$['org.opensourcephysics.tools.LibraryBrowser'].getTreePanel$I.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.index]);
if (isLocal && isTRZ ) {
treePanel.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(resource, this.path, false, true);
} else {
var editable=!$I$(14).isHTTP$S(this.path) && this.path.toLowerCase$().endsWith$S(".xml") ;
if (!$I$(6).isJS) {
if (this.path.equals$O($I$(5).getOSPPath$() + "recent_collection.xml")) {
editable=false;
resource.collectionPath=this.path;
}if ($I$(14).isSearchPath$S(this.path)) editable=false;
}treePanel.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(resource, this.path, editable, this.b$['org.opensourcephysics.tools.LibraryBrowser'].isResourcePathXML);
}return treePanel;
}return null;
});

Clazz.newMeth(C$, 'done$',  function () {
try {
var treePanel=this.get$();
if (treePanel != null ) {
treePanel.setFontLevel$I($I$(13).getLevel$());
if (this.index < 0) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.addTab$S$java_awt_Component("", treePanel);
this.index=this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.getTabCount$() - 1;
}this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.path, treePanel.rootResource]);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].tabbedPane.setToolTipTextAt$I$S(this.index, this.path);
treePanel.setSelectionPath$java_util_List(this.treePath);
var node=treePanel.getSelectedNode$();
Clazz.new_($I$(18,1).c$$org_opensourcephysics_tools_LibraryTreeNode,[treePanel, null, node]).execute$();
if (treePanel.metadataLoader != null ) {
treePanel.metadataLoader.cancel$();
}treePanel.metadataLoader=Clazz.new_($I$(19,1).c$$java_util_List,[treePanel, null, this.treePath]);
treePanel.metadataLoader.execute$();
this.setProgress$I(this.index);
} else {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].warnNotLoaded$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [this.path]);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].library.removeRecent$S(this.path);
this.b$['org.opensourcephysics.tools.LibraryBrowser'].refreshRecentMenu$.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], []);
this.setProgress$I(-1);
}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
this.b$['java.awt.Component'].setCursor$java_awt_Cursor.apply(this.b$['java.awt.Component'], [$I$(16).getDefaultCursor$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "TrackerDLFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'acceptPath$S',  function (path) {
var name=$I$(17).getName$S(path);
if (name.startsWith$S("_")) return false;
if (name.indexOf$S("TrackerSet=") >= 0) return true;
var ext=("" + $I$(17).getExtension$S(name)).toLowerCase$();
switch (ext) {
case "xml":
return false;
case "zip":
if ($I$(14).isHTTP$S(path)) {
return true;
}var files=$I$(14).getZipContents$S$Z(path, true);
for (var next, $next = files.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.toLowerCase$().endsWith$S(".trk")) return true;
}
return false;
case "htm":
case "html":
case "trk":
case "pdf":
case "trz":
return true;
default:
for (var next, $next = 0, $$next = $I$(20).getVideoExtensions$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (ext.equals$O(next.toLowerCase$())) return true;
}
return false;
}
});

Clazz.newMeth(C$, 'accept$java_io_File',  function (file) {
return (file == null  || file.isDirectory$()  ? false : this.acceptPath$S(file.toString()));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "DirectoryFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (file) {
if (file.getName$().startsWith$S("_")) return false;
return file.isDirectory$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "HTMLFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (file) {
if (file == null  || file.isDirectory$() ) return false;
var name=file.getName$();
if (name.startsWith$S("_")) return false;
var ext=$I$(17).getExtension$S(name);
if (ext == null ) return false;
if (ext.toLowerCase$().startsWith$S("htm")) return true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "XMLFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (file) {
if (file == null ) return false;
if (file.isDirectory$()) return true;
var ext=$I$(17,"getExtension$S",[file.getName$()]);
if (ext == null ) return false;
if (ext.toLowerCase$().equals$O("xml")) return true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "FilesAndFoldersFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
return f != null ;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(3).getString$S("LibraryBrowser.FilesAndFoldersFilter.Description");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowser, "FileDropHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.TransferHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'canImport$javax_swing_TransferHandler_TransferSupport',  function (support) {
return true;
});

Clazz.newMeth(C$, 'importData$javax_swing_TransferHandler_TransferSupport',  function (support) {
var fileList=p$2.getFileList$java_awt_datatransfer_Transferable.apply(this, [support.getTransferable$()]);
try {
if (fileList != null ) {
var f=fileList.get$I(0);
if (f.getName$().toLowerCase$().endsWith$S(".xml")) {
this.b$['org.opensourcephysics.tools.LibraryBrowser'].open$S.apply(this.b$['org.opensourcephysics.tools.LibraryBrowser'], [f.getAbsolutePath$()]);
}return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'getFileList$java_awt_datatransfer_Transferable',  function (t) {
try {
return t.getTransferData$java_awt_datatransfer_DataFlavor($I$(21).javaFileListFlavor);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
