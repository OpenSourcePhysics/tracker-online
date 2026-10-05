(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},p$3={},p$4={},I$=[[0,'org.opensourcephysics.tools.LibraryTreePanel','org.opensourcephysics.tools.LibraryResource','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','javax.swing.JTextField','javax.swing.BorderFactory','javax.swing.JLabel','org.opensourcephysics.tools.ToolsRes','java.awt.Color',['org.opensourcephysics.tools.LibraryTreePanel','.EntryField'],['org.opensourcephysics.tools.LibraryTreePanel','.MetadataEditField'],'java.util.ArrayList',['org.opensourcephysics.tools.LibraryTreePanel','.NodeLoader'],'org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.XMLControlElement','java.beans.PropertyChangeEvent','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.LibraryBrowser','org.opensourcephysics.tools.LibraryComPADRE','java.awt.Cursor','org.opensourcephysics.tools.LibraryTreeNode','javax.swing.SwingUtilities',['org.opensourcephysics.tools.LibraryTreePanel','.HTMLPane'],'java.awt.event.FocusAdapter','org.opensourcephysics.display.ResizableIcon','java.util.HashMap',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','javax.swing.JScrollPane',['org.opensourcephysics.tools.LibraryResource','.Metadata'],'java.util.HashSet','java.awt.BorderLayout','org.opensourcephysics.tools.FontSizer','java.io.File',['org.opensourcephysics.tools.LibraryTreePanel','.HTMLDisplayer'],'org.opensourcephysics.tools.LibraryCollection','javax.swing.AbstractAction','java.awt.event.MouseAdapter','javajs.async.AsyncDialog','javax.swing.JButton','javax.swing.JToolBar','javax.swing.Box','javax.swing.JPanel','javax.swing.JSplitPane','java.awt.Dimension','javax.swing.JPopupMenu','javax.swing.JMenuItem',['org.opensourcephysics.tools.LibraryTreePanel','.MetadataComboBoxModel'],'javax.swing.JComboBox',['org.opensourcephysics.tools.LibraryTreePanel','.MetadataComboBoxRenderer'],['org.opensourcephysics.tools.LibraryTreePanel','.MetadataComboBoxEditor'],'javax.swing.tree.DefaultTreeModel','org.opensourcephysics.tools.JMultiLineToolTip','javax.swing.JTree',['org.opensourcephysics.tools.LibraryTreePanel','.LibraryTreeNodeRenderer'],'javax.swing.ToolTipManager','javax.swing.JOptionPane','java.util.regex.Pattern','javax.swing.JFileChooser','javax.swing.filechooser.FileFilter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryTreePanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['HTMLPane',12],['MetadataComboBoxRenderer',4],['MetadataComboBoxModel',4],['MetadataComboBoxEditor',4],['MetadataLoader',0],['NodeLoader',0],['HTMLDisplayer',0],['EntryField',12],['MetadataEditField',4],['LibraryTreeNodeRenderer',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.AND=" AND ";
this.OR=" OR ";
this.OPENING="(";
this.CLOSING=")";
this.treeScroller=Clazz.new_($I$(29,1));
this.htmlScroller=Clazz.new_($I$(29,1));
this.labels=Clazz.new_($I$(12,1));
this.emptyMetadata=Clazz.new_($I$(30,1));
this.entryFields=Clazz.new_($I$(31,1));
},1);

C$.$fields$=[['Z',['isEditing','isChanged','isXMLPath','ignoreChanges','launchLater'],'I',['typeFieldWidth','myFontLevel'],'S',['AND','OR','OPENING','CLOSING','pathToRoot','command'],'O',['browser','org.opensourcephysics.tools.LibraryBrowser','rootResource','org.opensourcephysics.tools.LibraryResource','rootNode','org.opensourcephysics.tools.LibraryTreeNode','treeModel','javax.swing.tree.DefaultTreeModel','treeNodeRenderer','org.opensourcephysics.tools.LibraryTreePanel.LibraryTreeNodeRenderer','tree','javax.swing.JTree','treeScroller','javax.swing.JScrollPane','+htmlScroller','editorbar','javax.swing.JToolBar','cutAction','javax.swing.Action','+copyAction','+pasteAction','+addCollectionAction','+addResourceAction','+moveUpAction','+moveDownAction','+metadataAction','cutButton','javax.swing.JButton','+copyButton','+pasteButton','+addCollectionButton','+addResourceButton','+moveUpButton','+moveDownButton','+metadataButton','editorPanel','javax.swing.Box','+fileBox','displayPanel','javax.swing.JPanel','emptyHTMLPane','org.opensourcephysics.tools.LibraryTreePanel.HTMLPane','splitPane','javax.swing.JSplitPane','nameField','org.opensourcephysics.tools.LibraryTreePanel.EntryField','+htmlField','+basePathField','+targetField','nameLabel','javax.swing.JLabel','+htmlLabel','+basePathLabel','+targetLabel','metadataFieldListener','java.awt.event.ActionListener','authorField','org.opensourcephysics.tools.LibraryTreePanel.EntryField','+contactField','+keywordsField','authorLabel','javax.swing.JLabel','+contactLabel','+keywordsLabel','+metadataLabel','authorBox','javax.swing.Box','+contactBox','+keywordsBox','+metadataBox','metadataModel','org.opensourcephysics.tools.LibraryTreePanel.MetadataComboBoxModel','metadataDropdown','javax.swing.JComboBox','keyEditField','org.opensourcephysics.tools.LibraryTreePanel.MetadataEditField','+valueEditField','typeLabel','javax.swing.JLabel','+typeField','openHTMLButton','javax.swing.JButton','+openBasePathButton','+openFileButton','labels','java.util.ArrayList','popup','javax.swing.JPopupMenu','treeMouseListener','java.awt.event.MouseAdapter','+convertPathMouseListener','treeSelectionListener','javax.swing.event.TreeSelectionListener','pasteControl','org.opensourcephysics.controls.XMLControl','+revertControl','prevTreePath','javax.swing.tree.TreePath','emptyMetadata','org.opensourcephysics.tools.LibraryResource.Metadata','metadataLoader','org.opensourcephysics.tools.LibraryTreePanel.MetadataLoader','entryFields','java.util.Set','clipboardAvailable','Boolean']]
,['I',['keyFieldWidth'],'O',['lightRed','java.awt.Color','+darkRed','+lightGreen','+defaultForeground','openFileIcon','javax.swing.Icon','hyperlinkListener','javax.swing.event.HyperlinkListener','chooser','javax.swing.JFileChooser','htmlFilter','javax.swing.filechooser.FileFilter','+folderFilter','htmlPanesByURL','java.util.HashMap','+htmlPanesByNode']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LibraryBrowser',  function (browser) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(32,1))]);C$.$init$.apply(this);
this.browser=browser;
this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z',  function (resource, path, editable, pathIsXML) {
this.rootResource=resource;
this.isXMLPath=pathIsXML;
this.pathToRoot=path;
if (this.tree != null ) {
this.tree.removeTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.treeSelectionListener);
this.tree.removeMouseListener$java_awt_event_MouseListener(this.treeMouseListener);
}this.setEditing$Z(false);
if (resource != null ) {
this.ignoreChanges=true;
this.rootNode=Clazz.new_($I$(21,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[resource, this]);
this.rootNode.setEditable$Z(editable);
this.createTree$org_opensourcephysics_tools_LibraryTreeNode(this.rootNode);
this.tree.setSelectionRow$I(0);
this.splitPane.setDividerLocation$I(this.treeScroller.getPreferredSize$().width);
this.isChanged=false;
this.ignoreChanges=false;
this.refreshGUI$Z(false);
$I$(33).setFonts$java_awt_Container(this.tree);
}});

Clazz.newMeth(C$, 'getCollection$',  function () {
return this.rootResource;
});

Clazz.newMeth(C$, 'getSelectedNode$',  function () {
return (this.tree == null  ? null : this.tree.getLastSelectedPathComponent$());
});

Clazz.newMeth(C$, 'setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
this.tree.setSelectionPath$javax_swing_tree_TreePath(node == null  ? null : node.getTreePath$());
});

Clazz.newMeth(C$, 'setSelectionPath$java_util_List',  function (treePath) {
if (treePath != null  && treePath.get$I(0).equals$O(this.rootNode.toString()) ) {
var node=this.rootNode;
for (var i=1; i < treePath.size$(); i++) {
var name=treePath.get$I(i);
var n=node.getChildCount$();
 inner : for (var j=0; j < n; j++) {
if (name.equals$O(node.getChildAt$I(j).toString())) {
node=node.getChildAt$I(j);
break inner;
}}
}
this.setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode(node);
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (this.myFontLevel == level) return;
this.myFontLevel=level;
var toSize=Clazz.array(java.lang.Object, -1, [this.splitPane, this.editorPanel, this.editorbar, this.authorField, this.contactField, this.keywordsField, this.authorLabel, this.contactLabel, this.keywordsLabel, this.metadataLabel, this.metadataDropdown]);
$I$(33).setFonts$O$I(toSize, level);
$I$(10).$font=this.authorField.getFont$();
var model=this.tree.getModel$();
if (Clazz.instanceOf(model, "javax.swing.tree.DefaultTreeModel")) {
var selectedNode=this.getSelectedNode$();
var treeModel=model;
treeModel.nodeStructureChanged$javax_swing_tree_TreeNode(this.rootNode);
this.setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode(selectedNode);
}this.refreshGUI$Z(false);
});

Clazz.newMeth(C$, 'setEditing$Z',  function (edit) {
this.isEditing=edit;
if (this.isEditing) {
this.refreshGUI$Z(true);
this.displayPanel.add$java_awt_Component$O(this.editorPanel, "North");
this.add$java_awt_Component$O(this.editorbar, "North");
this.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this.getSelectedNode$(), "LibraryTreePanel.setEditing");
} else {
this.displayPanel.remove$java_awt_Component(this.editorPanel);
this.remove$java_awt_Component(this.editorbar);
}this.validate$();
if (this.isEditing) {
this.revertControl=Clazz.new_($I$(15,1).c$$O,[this.rootResource]);
}});

Clazz.newMeth(C$, 'isEditable$',  function () {
var editable=this.rootNode != null  && this.rootNode.isEditable$() ;
if (editable && !$I$(14).isHTTP$S(this.pathToRoot) ) {
var file=Clazz.new_($I$(34,1).c$$S,[this.pathToRoot]);
editable=!file.exists$() || file.canWrite$() ;
}return editable;
});

Clazz.newMeth(C$, 'isEditing$',  function () {
return this.isEditing;
});

Clazz.newMeth(C$, 'showInfo$org_opensourcephysics_tools_LibraryTreeNode$S',  function (node, why) {
if (node == null ) {
p$3.initGUI.apply(this, []);
return;
}var isCollection=Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection");
var isRoot=node.isRoot$();
var path=(isRoot ? this.pathToRoot : node.getAbsoluteTarget$());
var selected=this.browser.getSelectedTreePanel$();
this.showHTMLPane$org_opensourcephysics_tools_LibraryTreeNode(node);
if (selected === this  && !this.browser.commandField.getText$().equals$O(path) ) {
p$3.setCommandField$org_opensourcephysics_tools_LibraryTreeNode$S$Z.apply(this, [node, path, isCollection]);
}if (this.isEditing$()) {
p$3.showEditorData$org_opensourcephysics_tools_LibraryTreeNode$Z.apply(this, [node, isCollection]);
}this.tree.expandPath$javax_swing_tree_TreePath(node.getTreePath$());
});

Clazz.newMeth(C$, 'initGUI',  function () {
this.htmlScroller.setViewportView$java_awt_Component(this.emptyHTMLPane);
this.nameField.setText$S(null);
this.typeField.setText$S(" ");
this.basePathField.setText$S(null);
this.htmlField.setText$S(null);
this.targetField.setText$S(null);
this.nameField.setBackground$java_awt_Color($I$(9).white);
this.basePathField.setBackground$java_awt_Color($I$(9).white);
this.htmlField.setBackground$java_awt_Color($I$(9).white);
this.targetField.setBackground$java_awt_Color($I$(9).white);
this.nameField.setEnabled$Z(false);
this.basePathField.setEnabled$Z(false);
this.htmlField.setEnabled$Z(false);
this.targetField.setEnabled$Z(false);
this.typeField.setEnabled$Z(false);
this.nameLabel.setEnabled$Z(false);
this.htmlLabel.setEnabled$Z(false);
this.basePathLabel.setEnabled$Z(false);
this.targetLabel.setEnabled$Z(false);
this.typeLabel.setEnabled$Z(false);
this.openHTMLButton.setEnabled$Z(false);
this.openBasePathButton.setEnabled$Z(false);
this.openFileButton.setEnabled$Z(false);
}, p$3);

Clazz.newMeth(C$, 'setCommandField$org_opensourcephysics_tools_LibraryTreeNode$S$Z',  function (node, path, isCollection) {
this.browser.commandField.setText$S(path);
var available=node.isRoot$();
if (path != null  && !available ) {
if ($I$(14).isHTTP$S(path)) {
var uriPath=$I$(14).getURIPath$S(path);
available=$I$(14).isURLAvailable$S(uriPath);
if (!available) {
available=(isCollection ? $I$(14).getSearchCacheFile$S(path) : $I$(14,"getOSPCacheFile$S$S",[path, node.record.getProperty$S("download_filename")])).exists$();
}} else {
available=$I$(14,"getResourceZipURLsOK$S",[$I$(14).getURIPath$S(path)]) != null ;
}}this.browser.commandField.setForeground$java_awt_Color(available ? C$.defaultForeground : C$.darkRed);
this.browser.commandField.setCaretPosition$I(0);
if (node.isRoot$()) this.browser.openButton.setEnabled$Z(false);
 else if (available) {
this.browser.flashOpen$();
}}, p$3);

Clazz.newMeth(C$, 'showEditorData$org_opensourcephysics_tools_LibraryTreeNode$Z',  function (node, isCollection) {
if (!this.nameField.getText$().equals$O(node.getName$())) {
this.nameField.setText$S(node.getName$());
this.nameField.setCaretPosition$I(0);
}var base=this.basePathField.hasFocus$() ? node.record.getBasePath$() : node.getBasePath$();
if (!this.basePathField.getText$().equals$O(base)) {
this.basePathField.setText$S(base);
this.basePathField.setCaretPosition$I(0);
}if (!this.htmlField.getText$().equals$O(node.record.getHTMLPath$())) {
this.htmlField.setText$S(node.record.hasExternalHTML$() ? node.record.getHTMLPath$() : null);
this.htmlField.setCaretPosition$I(0);
}var isValidHTML=true;
if (!"".equals$O(node.record.getHTMLPath$())) {
isValidHTML=node.getHTMLURL$() != null ;
}this.htmlField.setForeground$java_awt_Color(isValidHTML ? C$.defaultForeground : C$.darkRed);
this.htmlField.setBackground$java_awt_Color($I$(9).white);
if (!this.targetField.getText$().equals$O(node.getTarget$())) {
this.targetField.setText$S(node.getTarget$());
this.targetField.setCaretPosition$I(0);
}var isValidTarget=true;
if (node.getTarget$() != null ) {
isValidTarget=node.getTargetURL$() != null ;
if (!isValidTarget && "EJS".equals$O(node.record.getType$()) ) {
var fullTarget=node.getTarget$();
var n=fullTarget.indexOf$S("&name=");
if (n > 0) {
node.record.setTarget$S(fullTarget.substring$I$I(0, n));
isValidTarget=node.getTargetURL$() != null ;
node.record.setTarget$S(fullTarget);
}}}this.targetField.setForeground$java_awt_Color(isValidTarget ? C$.defaultForeground : C$.darkRed);
this.targetField.setBackground$java_awt_Color($I$(9).white);
var type=node.record.getType$();
type=$I$(8).getString$S("LibraryResource.Type." + type);
this.typeField.setText$S(type);
var hasBasePath=!"".equals$O(node.record.getBasePath$());
var hasChildren=node.children$().hasMoreElements$();
this.nameField.setEnabled$Z(true);
this.basePathField.setEnabled$Z(true);
this.htmlField.setEnabled$Z(true);
this.typeField.setEnabled$Z(true);
this.targetField.setEnabled$Z(!isCollection || !hasChildren );
this.nameLabel.setEnabled$Z(true);
this.htmlLabel.setEnabled$Z(true);
this.basePathLabel.setEnabled$Z(true);
this.targetLabel.setEnabled$Z(!isCollection || !hasChildren );
this.typeLabel.setEnabled$Z(true);
this.openHTMLButton.setEnabled$Z(true);
this.openBasePathButton.setEnabled$Z(true);
this.openFileButton.setEnabled$Z(!isCollection || !hasChildren );
this.basePathField.setForeground$java_awt_Color(hasBasePath || this.basePathField.hasFocus$()  ? C$.defaultForeground : C$.lightGreen);
this.nameField.setBackground$java_awt_Color($I$(9).white);
this.basePathField.setBackground$java_awt_Color($I$(9).white);
var authors=node.getMetadataValue$S("Author");
if (authors == null ) authors="";
if (!this.authorField.getText$().equals$O(authors)) {
this.authorField.setText$S(authors);
this.authorField.setCaretPosition$I(0);
this.authorField.setBackground$java_awt_Color($I$(9).white);
}var contact=node.getMetadataValue$S("Contact");
if (contact == null ) contact="";
if (!this.contactField.getText$().equals$O(contact)) {
this.contactField.setText$S(contact);
this.contactField.setCaretPosition$I(0);
this.contactField.setBackground$java_awt_Color($I$(9).white);
}var keys=node.getMetadataValue$S("Keywords");
if (keys == null ) keys="";
if (!this.keywordsField.getText$().equals$O(keys)) {
this.keywordsField.setText$S(keys);
this.keywordsField.setCaretPosition$I(0);
this.keywordsField.setBackground$java_awt_Color($I$(9).white);
}if (node.selectedMetadata != null ) {
this.metadataDropdown.getEditor$().setItem$O(node.selectedMetadata);
} else {
this.metadataDropdown.getEditor$().setItem$O(this.emptyMetadata);
}var path=this.htmlField.getText$();
if (!path.equals$O($I$(17).getPathRelativeTo$S$S(path, base))) {
this.htmlField.setToolTipText$S($I$(8).getString$S("LibraryTreePanel.Tooltip.Relative"));
} else if (!path.equals$O($I$(17).getResolvedPath$S$S(path, base))) {
this.htmlField.setToolTipText$S($I$(8).getString$S("LibraryTreePanel.Tooltip.Absolute"));
} else this.htmlField.setToolTipText$S(null);
path=this.targetField.getText$();
if (!path.equals$O($I$(17).getPathRelativeTo$S$S(path, base))) {
this.targetField.setToolTipText$S($I$(8).getString$S("LibraryTreePanel.Tooltip.Relative"));
} else if (!path.equals$O($I$(17).getResolvedPath$S$S(path, base))) {
this.targetField.setToolTipText$S($I$(8).getString$S("LibraryTreePanel.Tooltip.Absolute"));
} else this.targetField.setToolTipText$S(null);
}, p$3);

Clazz.newMeth(C$, 'showHTMLPane$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
var htmlPane=C$.htmlPanesByNode.get$O(node);
if (htmlPane == null  || htmlPane !== this.htmlScroller.getViewport$().getView$()  ) Clazz.new_($I$(35,1).c$$org_opensourcephysics_tools_LibraryTreeNode,[this, null, node]).execute$();
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.addCollectionAction=((P$.LibraryTreePanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
$I$(1).htmlPanesByNode.remove$O(node);
var collection=node.record;
var newCollection=Clazz.new_($I$(36,1).c$$S,[null]);
collection.addResource$org_opensourcephysics_tools_LibraryResource(newCollection);
var newNode=Clazz.new_($I$(21,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[newCollection, this.b$['org.opensourcephysics.tools.LibraryTreePanel']]);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [newNode, node, node.getChildCount$()])) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].scrollToPath$javax_swing_tree_TreePath$Z.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [newNode.getTreePath$(), true]);
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$2));
this.addResourceAction=((P$.LibraryTreePanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
$I$(1).htmlPanesByNode.remove$O(node);
var collection=node.record;
var record=Clazz.new_($I$(2,1).c$$S,[null]);
collection.addResource$org_opensourcephysics_tools_LibraryResource(record);
var newNode=Clazz.new_($I$(21,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[record, this.b$['org.opensourcephysics.tools.LibraryTreePanel']]);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [newNode, node, node.getChildCount$()])) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].scrollToPath$javax_swing_tree_TreePath$Z.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [newNode.getTreePath$(), true]);
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$3));
this.copyAction=((P$.LibraryTreePanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var control=Clazz.new_($I$(15,1).c$$O,[node.record]);
var target=$I$(17,"forwardSlash$S",[node.getTarget$()]);
if (!this.b$['org.opensourcephysics.tools.LibraryTreePanel'].isEditing$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []) && !target.startsWith$S("/") && target.indexOf$S(":") == -1  ) {
control.setValue$S$O("base_path", node.getBasePath$());
}$I$(3,"copy$S$java_awt_datatransfer_ClipboardOwner",[control.toXML$(), null]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].enableButtons$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$4));
this.cutAction=((P$.LibraryTreePanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].copyAction.actionPerformed$java_awt_event_ActionEvent(null);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].removeNode$org_opensourcephysics_tools_LibraryTreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].enableButtons$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$5));
this.pasteAction=((P$.LibraryTreePanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var parent=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (parent == null  || !(Clazz.instanceOf(parent.record, "org.opensourcephysics.tools.LibraryCollection")) ) return;
$I$(3,"paste$java_util_function_Consumer",[((P$.LibraryTreePanel$6$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$6$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (dataString) /*block*/{
if (dataString != null ) {
var control=Clazz.new_($I$(15,1));
control.readXML$S.apply(control, [dataString]);
if (Clazz.getClass($I$(2)).isAssignableFrom$Class.apply(Clazz.getClass($I$(2)), [control.getObjectClass$.apply(control, [])])) {
$I$(1).htmlPanesByNode.remove$O.apply($I$(1).htmlPanesByNode, [this.$finals$.parent]);
var record=control.loadObject$O.apply(control, [null]);
var collection=this.$finals$.parent.record;
collection.addResource$org_opensourcephysics_tools_LibraryResource.apply(collection, [record]);
var newNode=Clazz.new_($I$(21,1).c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[record, this.b$['org.opensourcephysics.tools.LibraryTreePanel']]);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [newNode, this.$finals$.parent, this.$finals$.parent.getChildCount$.apply(this.$finals$.parent, [])])) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].scrollToPath$javax_swing_tree_TreePath$Z.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [newNode.getTreePath$.apply(newNode, []), true]);
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].enableButtons$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$6$lambda1.$init$,[this, {parent:parent}]))]);
});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$6));
this.moveUpAction=((P$.LibraryTreePanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var parent=node.getParent$();
if (parent != null ) {
var i=parent.getIndex$javax_swing_tree_TreeNode(node);
if (i > 0) {
$I$(1).htmlPanesByNode.remove$O(parent);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(node, parent, i - 1);
var collection=parent.record;
collection.removeResource$org_opensourcephysics_tools_LibraryResource(node.record);
collection.insertResource$org_opensourcephysics_tools_LibraryResource$I(node.record, i - 1);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].enableButtons$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}}}});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$7));
this.moveDownAction=((P$.LibraryTreePanel$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var parent=node.getParent$();
if (parent != null ) {
var i=parent.getIndex$javax_swing_tree_TreeNode(node);
var end=parent.getChildCount$();
if (i < end - 1) {
$I$(1).htmlPanesByNode.remove$O(parent);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(node, parent, i + 1);
var collection=parent.record;
collection.removeResource$org_opensourcephysics_tools_LibraryResource(node.record);
collection.insertResource$org_opensourcephysics_tools_LibraryResource$I(node.record, i + 1);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setSelectedNode$org_opensourcephysics_tools_LibraryTreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].enableButtons$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}}}});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$8));
this.metadataAction=((P$.LibraryTreePanel$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var select=!this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataButton.isSelected$();
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataButton.setSelected$Z(select);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataButton.setText$S(select ? $I$(8).getString$S("LibraryTreePanel.Button.Metadata.Hide") : $I$(8).getString$S("LibraryTreePanel.Button.Metadata.Show"));
if (select) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.add$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].authorBox);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.add$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].contactBox);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.add$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keywordsBox);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.add$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataBox);
} else {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].authorBox);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].contactBox);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keywordsBox);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].editorPanel.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataBox);
}});
})()
), Clazz.new_($I$(37,1),[this, null],P$.LibraryTreePanel$9));
this.convertPathMouseListener=((P$.LibraryTreePanel$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].doMouseClick$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [e]);
});
})()
), Clazz.new_($I$(38,1),[this, null],P$.LibraryTreePanel$10));
this.treeSelectionListener=((P$.LibraryTreePanel$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TreeSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].prevTreePath=e.getOldLeadSelectionPath$();
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata.clearData$();
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataModel.dataChanged$();
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node == null ) return;
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node, "LibraryTreePanel.treeselectionlistener"]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].enableButtons$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node.record != null  && Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection")  && node.getTarget$() != null   && node.getTarget$().startsWith$S("&") ) this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["target", "LOAD", node]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$11.$init$,[this, null]));
this.treeMouseListener=((P$.LibraryTreePanel$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
var path=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].tree.setSelectionPath$javax_swing_tree_TreePath(path);
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].tree.getLastSelectedPathComponent$();
if ($I$(3).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getPopup$org_opensourcephysics_tools_LibraryTreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node]).show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].tree, e.getX$(), e.getY$() + 8);
} else if (path.equals$O(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].prevTreePath)) {
p$4.checkLoadEvent$java_awt_event_MouseEvent$org_opensourcephysics_tools_LibraryTreeNode$Runnable.apply(this, [e, node, ((P$.LibraryTreePanel$12$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$12$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["target", "LOAD", this.$finals$.node]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$12$lambda1.$init$,[this, {node:node}]))]);
} else {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].prevTreePath=path;
}});

Clazz.newMeth(C$, 'checkLoadEvent$java_awt_event_MouseEvent$org_opensourcephysics_tools_LibraryTreeNode$Runnable',  function (e, node, load) {
var target=node.getAbsoluteTarget$();
if (target == null ) return;
if ($I$(19).isComPADREPath$S(target)) {
load.run$();
return;
}var n=e.getClickCount$();
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].launchLater=n == 1;
if (n == 2) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].launchLater=false;
load.run$();
return;
}var r=((P$.LibraryTreePanel$12$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$12$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].launchLater) {
$I$(39,"showYesNoAsync$java_awt_Component$O$S$java_awt_event_ActionListener",[$I$(18).frame, $I$(8).getString$S("LibraryTreePanel.Dialog.Open.Message") + " \"" + this.$finals$.node.getName$() + "\"?" , $I$(8).getString$S("LibraryTreePanel.Dialog.Open.Title"), ((P$.LibraryTreePanel$12$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$12$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 0) this.$finals$.load.run$();
});
})()
), Clazz.new_(P$.LibraryTreePanel$12$1$1.$init$,[this, {load:this.$finals$.load}]))]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$12$1.$init$,[this, {node:node,load:load}]));
$I$(3).setTimeout$S$I$Z$Runnable("loadEvent", 800, true, r);
}, p$4);
})()
), Clazz.new_($I$(38,1),[this, null],P$.LibraryTreePanel$12));
this.addCollectionButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.addCollectionAction]);
this.addResourceButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.addResourceAction]);
this.copyButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.copyAction]);
this.cutButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.cutAction]);
this.pasteButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.pasteAction]);
this.moveUpButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.moveUpAction]);
this.moveDownButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.moveDownAction]);
this.metadataButton=Clazz.new_($I$(40,1).c$$javax_swing_Action,[this.metadataAction]);
var buttons=Clazz.array($I$(40), -1, [this.addCollectionButton, this.addResourceButton, this.copyButton, this.cutButton, this.pasteButton, this.moveUpButton, this.moveDownButton, this.metadataButton]);
for (var next, $next = 0, $$next = buttons; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next.setOpaque$Z(false);
next.setBorder$javax_swing_border_Border($I$(18).buttonBorder);
}
this.editorbar=Clazz.new_($I$(41,1));
this.editorbar.setFloatable$Z(false);
this.editorbar.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(1, 0, 1, 0));
this.editorbar.add$java_awt_Component(this.addResourceButton);
this.editorbar.add$java_awt_Component(this.addCollectionButton);
this.editorbar.addSeparator$();
this.editorbar.add$java_awt_Component(this.copyButton);
this.editorbar.add$java_awt_Component(this.cutButton);
this.editorbar.add$java_awt_Component(this.pasteButton);
this.editorbar.addSeparator$();
this.editorbar.add$java_awt_Component(this.moveUpButton);
this.editorbar.add$java_awt_Component(this.moveDownButton);
this.editorbar.add$java_awt_Component($I$(42).createHorizontalGlue$());
this.editorbar.add$java_awt_Component(this.metadataButton);
this.emptyHTMLPane=Clazz.new_($I$(23,1));
this.displayPanel=Clazz.new_([Clazz.new_($I$(32,1))],$I$(43,1).c$$java_awt_LayoutManager);
this.displayPanel.add$java_awt_Component$O(this.htmlScroller, "Center");
this.splitPane=Clazz.new_($I$(44,1).c$$I$java_awt_Component$java_awt_Component,[1, this.treeScroller, this.displayPanel]);
this.add$java_awt_Component$O(this.splitPane, "Center");
this.treeScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(45,1).c$$I$I,[320, 500]));
this.editorPanel=$I$(42).createVerticalBox$();
this.nameField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.nameField);
this.nameField.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
$I$(1).htmlPanesByNode.remove$O(node);
var parent=node.getParent$();
if (parent != null ) $I$(1).htmlPanesByNode.remove$O(parent);
node.setName$S(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].nameField.getText$());
if (node.isRoot$()) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pathToRoot, this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootResource);
}}});
})()
), Clazz.new_(P$.LibraryTreePanel$13.$init$,[this, null])));
this.typeField=((P$.LibraryTreePanel$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JLabel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].nameField.getPreferredSize$();
dim.width=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].typeFieldWidth;
return dim;
});
})()
), Clazz.new_($I$(7,1).c$$S,[this, null, " "],P$.LibraryTreePanel$14));
this.typeField.setBorder$javax_swing_border_Border(this.nameField.getBorder$());
this.typeField.setBackground$java_awt_Color(this.nameField.getBackground$());
this.typeField.setFont$java_awt_Font(this.nameField.getFont$());
this.typeField.setOpaque$Z(true);
this.typeField.addMouseListener$java_awt_event_MouseListener(((P$.LibraryTreePanel$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null  && !(Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection")) ) {
var popup=Clazz.new_($I$(46,1));
var typeListener=((P$.LibraryTreePanel$15$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$15$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var type=e.getActionCommand$();
if (!type.equals$O(this.$finals$.node.record.getType$())) {
$I$(1).htmlPanesByNode.remove$O(this.$finals$.node);
var parent=this.$finals$.node.getParent$();
if (parent != null ) $I$(1).htmlPanesByNode.remove$O(parent);
this.$finals$.node.setType$S(type);
type=$I$(8,"getString$S",["LibraryResource.Type." + this.$finals$.node.record.getType$()]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].typeField.setText$S(type);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [this.$finals$.node, "LibraryTreePanel.typeListener"]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$15$1.$init$,[this, {node:node}]));
for (var next, $next = 0, $$next = $I$(2).RESOURCE_TYPES; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var item=((P$.LibraryTreePanel$15$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$15$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].typeField.getPreferredSize$();
dim.width-=2;
return dim;
});
})()
), Clazz.new_([this, null, $I$(8).getString$S("LibraryResource.Type." + next)],$I$(47,1).c$$S,P$.LibraryTreePanel$15$2));
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(typeListener);
item.setActionCommand$S(next);
}
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].typeField, 0, this.b$['org.opensourcephysics.tools.LibraryTreePanel'].typeField.getHeight$());
}});
})()
), Clazz.new_($I$(38,1),[this, null],P$.LibraryTreePanel$15)));
this.htmlField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.htmlField);
this.htmlField.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
node.setHTMLPath$S(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].htmlField.getText$());
}});
})()
), Clazz.new_(P$.LibraryTreePanel$16.$init$,[this, null])));
this.htmlField.addMouseListener$java_awt_event_MouseListener(this.convertPathMouseListener);
this.openHTMLButton=Clazz.new_($I$(40,1).c$$javax_swing_Icon,[C$.openFileIcon]);
this.openHTMLButton.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(1, 1, 1, 2));
this.openHTMLButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var result=1;
var chooser=$I$(1).getFileChooser$();
chooser.setDialogTitle$S(null);
chooser.setFileSelectionMode$I(0);
chooser.setAcceptAllFileFilterUsed$Z(true);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(1).htmlFilter);
result=chooser.showOpenDialog$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel']);
var file=chooser.getSelectedFile$();
chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(1).htmlFilter);
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(34,1).c$$S,[""]));
if (result == 0) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.library.chooserDir=chooser.getCurrentDirectory$().toString();
if (file != null ) {
var path=$I$(17,"forwardSlash$S",[file.getAbsolutePath$()]);
var base=node.getBasePath$();
if (!"".equals$O(base)) {
path=$I$(17).getPathRelativeTo$S$S(path, base);
}node.setHTMLPath$S(path);
}}}});
})()
), Clazz.new_(P$.LibraryTreePanel$17.$init$,[this, null])));
this.basePathField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.basePathField);
this.basePathField.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.getBackground$() !== $I$(9).yellow ) {
return;
}if (node != null ) {
if (!this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.getText$().equals$O(node.record.getBasePath$())) {
$I$(1).htmlPanesByNode.remove$O(node);
var parent=node.getParent$();
if (parent != null ) $I$(1).htmlPanesByNode.remove$O(parent);
node.setBasePath$S(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.getText$());
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
}var noBase=node.record.getBasePath$() == null ;
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setForeground$java_awt_Color(noBase ? $I$(1).lightGreen : $I$(1).defaultForeground);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$18.$init$,[this, null])));
this.basePathField.addFocusListener$java_awt_event_FocusListener(((P$.LibraryTreePanel$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if ("".equals$O(node.record.getBasePath$())) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setText$S(null);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setForeground$java_awt_Color(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].htmlField.getForeground$());
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setBackground$java_awt_Color($I$(9).white);
}});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
var base=node.getBasePath$();
if (!this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.getText$().equals$O(base)) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setText$S(base);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setCaretPosition$I(0);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setForeground$java_awt_Color(node.record.getBasePath$().equals$O(base) ? $I$(1).defaultForeground : $I$(1).lightGreen);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].basePathField.setBackground$java_awt_Color($I$(9).white);
}});
})()
), Clazz.new_($I$(24,1),[this, null],P$.LibraryTreePanel$19)));
this.openBasePathButton=Clazz.new_($I$(40,1).c$$javax_swing_Icon,[C$.openFileIcon]);
this.openBasePathButton.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(1, 1, 1, 2));
this.openBasePathButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var result=1;
var chooser=$I$(1).getFileChooser$();
chooser.setFileSelectionMode$I(1);
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(1).folderFilter);
chooser.setDialogTitle$S($I$(8).getString$S("LibraryTreePanel.FileChooser.Title.Base"));
result=chooser.showDialog$java_awt_Component$S(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], $I$(8).getString$S("LibraryTreePanel.FileChooser.Button.Select"));
var file=chooser.getSelectedFile$();
chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(1).folderFilter);
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(34,1).c$$S,[""]));
if (result == 0) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.library.chooserDir=chooser.getCurrentDirectory$().toString();
if (file != null ) {
$I$(1).htmlPanesByNode.remove$O(node);
var parent=node.getParent$();
if (parent != null ) $I$(1).htmlPanesByNode.remove$O(parent);
node.setBasePath$S($I$(17,"forwardSlash$S",[file.getAbsolutePath$()]));
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node, "LibraryTreePanel.openBasePath"]);
}}}});
})()
), Clazz.new_(P$.LibraryTreePanel$20.$init$,[this, null])));
this.targetField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.targetField);
this.targetField.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null  && !(Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection") && node.children$().hasMoreElements$() ) ) {
node.setTarget$S(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].targetField.getText$());
}});
})()
), Clazz.new_(P$.LibraryTreePanel$21.$init$,[this, null])));
this.targetField.addMouseListener$java_awt_event_MouseListener(this.convertPathMouseListener);
this.openFileButton=Clazz.new_($I$(40,1).c$$javax_swing_Icon,[C$.openFileIcon]);
this.openFileButton.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(1, 1, 1, 2));
this.openFileButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var result=1;
var chooser=$I$(1).getFileChooser$();
chooser.setDialogTitle$S(null);
chooser.setFileSelectionMode$I(0);
chooser.setAcceptAllFileFilterUsed$Z(true);
result=chooser.showOpenDialog$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel']);
var file=chooser.getSelectedFile$();
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(34,1).c$$S,[""]));
if (result == 0) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.library.chooserDir=chooser.getCurrentDirectory$().toString();
if (file != null ) {
var path=$I$(17,"forwardSlash$S",[file.getAbsolutePath$()]);
var base=node.getBasePath$();
if (!"".equals$O(base)) {
path=$I$(17).getPathRelativeTo$S$S(path, base);
}node.setTarget$S(path);
}}}});
})()
), Clazz.new_(P$.LibraryTreePanel$22.$init$,[this, null])));
this.nameLabel=Clazz.new_($I$(7,1));
this.nameLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.nameLabel.setHorizontalAlignment$I(11);
this.typeLabel=Clazz.new_($I$(7,1));
this.typeLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.typeLabel.setHorizontalAlignment$I(11);
this.htmlLabel=Clazz.new_($I$(7,1));
this.htmlLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.htmlLabel.setHorizontalAlignment$I(11);
this.basePathLabel=Clazz.new_($I$(7,1));
this.basePathLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.basePathLabel.setHorizontalAlignment$I(11);
this.targetLabel=Clazz.new_($I$(7,1));
this.targetLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.targetLabel.setHorizontalAlignment$I(11);
this.labels.add$O(this.nameLabel);
this.labels.add$O(this.htmlLabel);
this.labels.add$O(this.basePathLabel);
this.labels.add$O(this.targetLabel);
var box=$I$(42).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 0, 2));
box.add$java_awt_Component(this.nameLabel);
box.add$java_awt_Component(this.nameField);
box.add$java_awt_Component(this.typeLabel);
box.add$java_awt_Component(this.typeField);
this.editorPanel.add$java_awt_Component(box);
box=$I$(42).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 0, 2));
box.add$java_awt_Component(this.htmlLabel);
box.add$java_awt_Component(this.htmlField);
box.add$java_awt_Component(this.openHTMLButton);
this.editorPanel.add$java_awt_Component(box);
box=$I$(42).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 0, 2));
box.add$java_awt_Component(this.basePathLabel);
box.add$java_awt_Component(this.basePathField);
box.add$java_awt_Component(this.openBasePathButton);
this.editorPanel.add$java_awt_Component(box);
this.fileBox=$I$(42).createHorizontalBox$();
this.fileBox.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 2, 1));
this.fileBox.add$java_awt_Component(this.targetLabel);
this.fileBox.add$java_awt_Component(this.targetField);
this.fileBox.add$java_awt_Component(this.openFileButton);
this.editorPanel.add$java_awt_Component(this.fileBox);
this.metadataFieldListener=((P$.LibraryTreePanel$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node != null ) {
var field=e.getSource$();
var s=field.getText$().trim$();
var metadata=node.selectedMetadata;
var key=null;
var index=1;
if (field === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].authorField ) {
key="Author";
metadata=node.record.getMetadata$S(key);
} else if (field === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].contactField ) {
key="Contact";
metadata=node.record.getMetadata$S(key);
} else if (field === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keywordsField ) {
key="Keywords";
metadata=node.record.getMetadata$S(key);
} else if (field === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField ) index=0;
if (metadata != null  && s.equals$O(metadata.getData$()[index]) ) return;
if (s.length$() > 0 && (metadata == null  || metadata === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata  ) ) {
metadata=index == 0 ? Clazz.new_($I$(30,1).c$$S$S,[s, null]) : Clazz.new_($I$(30,1).c$$S$S,[key, s]);
node.record.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(metadata);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataModel.dataAdded$();
if (field === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField  || field === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField  ) node.selectedMetadata=metadata;
} else if (metadata != null ) {
if ("".equals$O(s)) {
node.record.removeMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(metadata);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataModel.dataRemoved$();
if (node.selectedMetadata === metadata ) node.selectedMetadata=null;
} else {
var data=metadata.getData$();
data[index]=s;
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataModel.dataChanged$();
}}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setChanged$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
node.tooltip=null;
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [node, "LibraryTreePanel.metadatafield"]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$23.$init$,[this, null]));
this.authorField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.authorField);
this.authorField.addActionListener$java_awt_event_ActionListener(this.metadataFieldListener);
this.contactField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.contactField);
this.contactField.addActionListener$java_awt_event_ActionListener(this.metadataFieldListener);
this.keywordsField=Clazz.new_($I$(10,1));
this.entryFields.add$O(this.keywordsField);
this.keywordsField.addActionListener$java_awt_event_ActionListener(this.metadataFieldListener);
this.metadataModel=Clazz.new_($I$(48,1),[this, null]);
this.metadataDropdown=Clazz.new_($I$(49,1).c$$javax_swing_ComboBoxModel,[this.metadataModel]);
this.metadataDropdown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(50,1),[this, null]));
this.metadataDropdown.setEditor$javax_swing_ComboBoxEditor(Clazz.new_($I$(51,1),[this, null]));
this.metadataDropdown.setEditable$Z(true);
this.authorLabel=Clazz.new_($I$(7,1));
this.authorLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.authorLabel.setHorizontalAlignment$I(11);
this.contactLabel=Clazz.new_($I$(7,1));
this.contactLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.contactLabel.setHorizontalAlignment$I(11);
this.keywordsLabel=Clazz.new_($I$(7,1));
this.keywordsLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.keywordsLabel.setHorizontalAlignment$I(11);
this.metadataLabel=Clazz.new_($I$(7,1));
this.metadataLabel.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.metadataLabel.setHorizontalAlignment$I(11);
this.labels.add$O(this.authorLabel);
this.labels.add$O(this.contactLabel);
this.labels.add$O(this.keywordsLabel);
this.labels.add$O(this.metadataLabel);
this.authorBox=$I$(42).createHorizontalBox$();
this.authorBox.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 2, 1));
this.authorBox.add$java_awt_Component(this.authorLabel);
this.authorBox.add$java_awt_Component(this.authorField);
this.contactBox=$I$(42).createHorizontalBox$();
this.contactBox.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 2, 1));
this.contactBox.add$java_awt_Component(this.contactLabel);
this.contactBox.add$java_awt_Component(this.contactField);
this.keywordsBox=$I$(42).createHorizontalBox$();
this.keywordsBox.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 0, 2, 1));
this.keywordsBox.add$java_awt_Component(this.keywordsLabel);
this.keywordsBox.add$java_awt_Component(this.keywordsField);
this.metadataBox=$I$(42).createHorizontalBox$();
this.metadataBox.add$java_awt_Component(this.metadataLabel);
this.metadataBox.add$java_awt_Component(this.metadataDropdown);
});

Clazz.newMeth(C$, 'doMouseClick$java_awt_event_MouseEvent',  function (e) {
if (!$I$(3).isPopupTrigger$java_awt_event_InputEvent(e)) return;
var node=this.getSelectedNode$();
if (node == null ) return;
var field=e.getSource$();
var path=field.getText$();
if ("".equals$O(path)) return;
var base=node.getBasePath$();
if ("".equals$O(base)) return;
var popup=Clazz.new_($I$(46,1));
var relPath=$I$(17).getPathRelativeTo$S$S(path, base);
var absPath=$I$(17).getResolvedPath$S$S(path, base);
var isTarget=(field === this.targetField );
if (!path.equals$O(relPath)) {
var item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.MenuItem.SetToRelative")],$I$(47,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
if (this.$finals$.isTarget) this.$finals$.node.setTarget$S.apply(this.$finals$.node, [this.$finals$.relPath]);
 else this.$finals$.node.setHTMLPath$S.apply(this.$finals$.node, [this.$finals$.relPath]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda1.$init$,[this, {isTarget:isTarget,relPath:relPath,node:node}])));
} else if (!path.equals$O(absPath)) {
var item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.MenuItem.SetToAbsolute")],$I$(47,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
if (this.$finals$.isTarget) this.$finals$.node.setTarget$S.apply(this.$finals$.node, [this.$finals$.absPath]);
 else this.$finals$.node.setHTMLPath$S.apply(this.$finals$.node, [this.$finals$.absPath]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda2.$init$,[this, {absPath:absPath,isTarget:isTarget,node:node}])));
}if (popup.getComponentCount$() > 0) popup.show$java_awt_Component$I$I(field, e.getX$() + 2, e.getY$() + 2);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshGUI$Z(false);
});

Clazz.newMeth(C$, 'refreshGUI$Z',  function (andRebuild) {
if (andRebuild) {
this.addCollectionButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.AddCollection"));
this.addResourceButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.AddResource"));
this.copyButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.Copy"));
this.cutButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.Cut"));
this.pasteButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.Paste"));
this.moveUpButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.Up"));
this.moveDownButton.setText$S($I$(8).getString$S("LibraryTreePanel.Button.Down"));
this.metadataButton.setText$S(this.metadataButton.isSelected$() ? $I$(8).getString$S("LibraryTreePanel.Button.Metadata.Hide") : $I$(8).getString$S("LibraryTreePanel.Button.Metadata.Show"));
this.nameLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.Name"));
this.typeLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.Type"));
this.htmlLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.HTML"));
this.basePathLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.BasePath"));
this.targetLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.TargetFile"));
this.authorLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.Author"));
this.contactLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.Contact"));
this.keywordsLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.Keywords"));
this.metadataLabel.setText$S($I$(8).getString$S("LibraryTreePanel.Label.Metadata"));
}this.browser.refreshButton.setEnabled$Z(this.getSelectedNode$() != null );
if (this.getSelectedNode$() === this.rootNode ) {
this.browser.refreshButton.setToolTipText$S($I$(8).getString$S("LibraryBrowser.Tooltip.Reload"));
} else this.browser.refreshButton.setToolTipText$S($I$(8).getString$S("LibraryBrowser.Tooltip.Refresh"));
var w=0;
var h=0;
var font=this.nameLabel.getFont$();
for (var next, $next = this.labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", $I$(3).frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
h=Math.max(h, (rect.getHeight$()|0) + 4);
}
h=Math.max(h, 20);
var labelSize=Clazz.new_($I$(45,1).c$$I$I,[w, h]);
for (var next, $next = this.labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setMinimumSize$java_awt_Dimension(labelSize);
}
this.typeFieldWidth=0;
for (var next, $next = 0, $$next = $I$(2).RESOURCE_TYPES; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next=$I$(8).getString$S("LibraryResource.Type." + next);
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next + " ", $I$(3).frc);
this.typeFieldWidth=Math.max(this.typeFieldWidth, (rect.getWidth$()|0) + 24);
}
});

Clazz.newMeth(C$, 'enableButtons$',  function () {
var node=this.getSelectedNode$();
var nodeIsCollection=node != null  && Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection") ;
this.addCollectionButton.setEnabled$Z(nodeIsCollection);
this.addResourceButton.setEnabled$Z(nodeIsCollection);
this.copyButton.setEnabled$Z(node != null );
this.cutButton.setEnabled$Z(node != null  && node !== this.rootNode  );
this.pasteButton.setEnabled$Z(false);
if (nodeIsCollection) {
this.ifClipboardPastable$Runnable(((P$.LibraryTreePanel$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pasteButton.setEnabled$Z.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pasteButton, [true]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda3.$init$,[this, null])));
}var canMoveUp=false;
var canMoveDown=false;
if (node != null  && node.getParent$() != null  ) {
var parent=node.getParent$();
var i=parent.getIndex$javax_swing_tree_TreeNode(node);
canMoveUp=i > 0;
canMoveDown=i < parent.getChildCount$() - 1;
}this.moveUpButton.setEnabled$Z(canMoveUp);
this.moveDownButton.setEnabled$Z(canMoveDown);
});

Clazz.newMeth(C$, 'revert$',  function () {
if (this.revertControl != null ) {
this.revertControl=Clazz.new_($I$(15,1).c$$org_opensourcephysics_controls_XMLControl,[this.revertControl]);
var record=this.revertControl.loadObject$O(null);
this.isChanged=false;
this.setRootResource$org_opensourcephysics_tools_LibraryResource$S$Z$Z(record, this.pathToRoot, this.rootNode.isEditable$(), this.isXMLPath);
this.browser.refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource(this.pathToRoot, this.rootResource);
}});

Clazz.newMeth(C$, 'createTree$org_opensourcephysics_tools_LibraryTreeNode',  function (root) {
this.treeModel=Clazz.new_($I$(52,1).c$$javax_swing_tree_TreeNode,[root]);
this.tree=((P$.LibraryTreePanel$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTree'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createToolTip$',  function () {
return Clazz.new_([100, Clazz.new_($I$(9,1).c$$I,[13421823])],$I$(53,1).c$$I$java_awt_Color);
});

Clazz.newMeth(C$, 'convertValueToText$O$Z$Z$Z$I$Z',  function (node, selected, expanded, leaf, row, hasFocus) {
return (node).record.getDisplayString$();
});
})()
), Clazz.new_($I$(54,1).c$$javax_swing_tree_TreeModel,[this, null, this.treeModel],P$.LibraryTreePanel$24));
if (root.createChildNodes$()) {
this.scrollToPath$javax_swing_tree_TreePath$Z((root.getLastChild$()).getTreePath$(), false);
}this.treeNodeRenderer=Clazz.new_($I$(55,1),[this, null]);
this.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(this.treeNodeRenderer);
this.tree.getSelectionModel$().setSelectionMode$I(1);
$I$(56).sharedInstance$().registerComponent$javax_swing_JComponent(this.tree);
this.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.treeSelectionListener);
this.tree.addMouseListener$java_awt_event_MouseListener(this.treeMouseListener);
this.treeScroller.setViewportView$java_awt_Component(this.tree);
});

Clazz.newMeth(C$, 'ifClipboardPastable$Runnable',  function (r) {
if (!$I$(3).allowLibClipboardPasteCheck) return;
if (this.clipboardAvailable === Boolean.TRUE ) {
r.run$();
}this.clipboardAvailable=Boolean.FALSE;
this.pasteControl=null;
$I$(3,"paste$java_util_function_Consumer",[((P$.LibraryTreePanel$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (dataString) /*block*/{
if (dataString != null ) {
var control=Clazz.new_($I$(15,1));
control.readXML$S.apply(control, [dataString]);
var type=control.getObjectClass$.apply(control, []);
if (type != null  && Clazz.getClass($I$(2)).isAssignableFrom$Class.apply(Clazz.getClass($I$(2)), [type]) ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pasteControl=control;
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].clipboardAvailable=Boolean.TRUE;
this.$finals$.r.run$.apply(this.$finals$.r, []);
}}});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda4.$init$,[this, {r:r}]))]);
});

Clazz.newMeth(C$, 'getPopup$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
if (this.popup == null ) this.popup=Clazz.new_($I$(46,1));
this.popup.removeAll$();
if (!this.isEditing$()) {
var item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.Copy")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.copyAction);
if ("".equals$O(this.pathToRoot) && node.record.getCollectionPath$() != null  ) {
item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Popup.Item.OpenCollection")],$I$(47,1).c$$S);
this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var path=this.$finals$.node.record.getCollectionPath$.apply(this.$finals$.node.record, []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.loadTab$S$java_util_List.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser, [path, this.$finals$.node.record.treePath]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda5.$init$,[this, {node:node}])));
}if (this.rootResource === this.browser.getRecentCollection$() ) {
item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Popup.Item.Remove")],$I$(47,1).c$$S);
this.popup.addSeparator$();
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.LibraryTreePanel$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].removeNode$org_opensourcephysics_tools_LibraryTreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [this.$finals$.node]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda6.$init$,[this, {node:node}])));
}$I$(33,"setFonts$O$I",[this.popup, $I$(33).getLevel$()]);
return this.popup;
}var isCollection=Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection");
var canMoveUp=false;
var canMoveDown=false;
if (node.getParent$() != null ) {
var parent=node.getParent$();
var i=parent.getIndex$javax_swing_tree_TreeNode(node);
canMoveUp=i > 0;
canMoveDown=i < parent.getChildCount$() - 1;
}if (isCollection) {
var item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.AddResource")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.addResourceAction);
item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.AddCollection")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.addCollectionAction);
this.popup.addSeparator$();
}var item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.Copy")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.copyAction);
item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.Cut")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.cutAction);
var citem=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.Paste")],$I$(47,1).c$$S);
citem.setEnabled$Z(false);
if (isCollection) {
this.ifClipboardPastable$Runnable(((P$.LibraryTreePanel$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.citem.setEnabled$Z.apply(this.$finals$.citem, [true]);
this.$finals$.citem.addActionListener$java_awt_event_ActionListener.apply(this.$finals$.citem, [this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pasteAction]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$lambda7.$init$,[this, {citem:citem}])));
}this.popup.add$javax_swing_JMenuItem(citem);
if (canMoveUp || canMoveDown ) {
this.popup.addSeparator$();
if (canMoveUp) {
item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.Up")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.moveUpAction);
}if (canMoveDown) {
item=Clazz.new_([$I$(8).getString$S("LibraryTreePanel.Button.Down")],$I$(47,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.moveDownAction);
}}$I$(33,"setFonts$O$I",[this.popup, $I$(33).getLevel$()]);
return this.popup;
});

Clazz.newMeth(C$, 'insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I',  function (child, parent, index) {
if (this.tree == null  || parent.getChildCount$() < index ) return false;
var model=this.tree.getModel$();
model.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(child, parent, index);
return true;
});

Clazz.newMeth(C$, 'removeNode$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
if (this.rootNode == null  || node === this.rootNode  ) return;
var parent=node.getParent$();
C$.htmlPanesByNode.remove$O(parent);
C$.htmlPanesByNode.remove$O(node);
var collection=parent.record;
collection.removeResource$org_opensourcephysics_tools_LibraryResource(node.record);
var model=this.tree.getModel$();
model.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
this.scrollToPath$javax_swing_tree_TreePath$Z(parent.getTreePath$(), true);
});

Clazz.newMeth(C$, 'setChanged$',  function () {
if (this.ignoreChanges) return;
this.isChanged=true;
this.firePropertyChange$S$O$O("collection_edit", null, null);
});

Clazz.newMeth(C$, 'isChanged$',  function () {
return this.isEditable$() && this.isChanged ;
});

Clazz.newMeth(C$, 'save$',  function () {
if (!this.isXMLPath) {
return this.browser.saveAs$();
} else if (this.isEditable$() || this.rootResource === this.browser.getRecentCollection$()  ) {
var control=Clazz.new_($I$(15,1).c$$O,[this.rootResource]);
control.write$S(this.pathToRoot);
this.isChanged=false;
}var cacheFile=$I$(14).getSearchCacheFile$S(this.pathToRoot);
var control=Clazz.new_($I$(15,1).c$$O,[this.rootNode.record]);
control.setValue$S$O("real_path", this.pathToRoot);
control.write$S(cacheFile.getAbsolutePath$());
return this.pathToRoot;
});

Clazz.newMeth(C$, 'saveChanges$S',  function (name) {
if (!this.isChanged$() || $I$(3).isJS || $I$(3).isApplet  ) return true;
var i=$I$(57,"showConfirmDialog$java_awt_Component$O$S$I$I",[this, $I$(8).getString$S("LibraryBrowser.Dialog.SaveChanges.Message") + " \"" + name + "\"?" , $I$(8).getString$S("LibraryBrowser.Dialog.SaveChanges.Title"), 1, 3]);
if (i == -1 || i == 2 ) {
return false;
}if (i == 0) {
if ("temp".equals$O(this.getName$())) {
this.setName$S("");
var path=this.browser.saveAs$();
return path != null ;
} else if (this.save$() == null ) return false;
} else {
if ("temp".equals$O(this.getName$())) {
var tempPath=this.pathToRoot;
if (tempPath != null ) {
var tempFile=Clazz.new_($I$(34,1).c$$S,[tempPath]);
tempFile.delete$();
}} else this.revert$();
}return true;
});

Clazz.newMeth(C$, 'getNextSplit$S',  function (phrase) {
var and=phrase.split$S$I(" AND ", 2);
var or=phrase.split$S$I(" OR ", 2);
var open=phrase.split$S$I($I$(58,"quote$S",["("]), 2);
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
var resultsAND=Clazz.new_($I$(26,1));
var keys1=results1.keySet$();
for (var node, $node = results2.keySet$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (keys1.contains$O(node)) {
var matchedTerms=Clazz.new_($I$(12,1));
matchedTerms.addAll$java_util_Collection(results1.get$O(node));
matchedTerms.addAll$java_util_Collection(results2.get$O(node));
resultsAND.put$O$O(node, matchedTerms);
}}
return resultsAND;
});

Clazz.newMeth(C$, 'applyOR$java_util_Map$java_util_Map',  function (results1, results2) {
var resultsOR=Clazz.new_($I$(26,1));
for (var node, $node = results1.keySet$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
var matchedTerms=Clazz.new_($I$(12,1));
matchedTerms.addAll$java_util_Collection(results1.get$O(node));
resultsOR.put$O$O(node, matchedTerms);
}
for (var node, $node = results2.keySet$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (resultsOR.keySet$().contains$O(node)) {
resultsOR.get$O(node).addAll$java_util_Collection(results2.get$O(node));
continue;
}var matchedTerms=Clazz.new_($I$(12,1));
matchedTerms.addAll$java_util_Collection(results2.get$O(node));
resultsOR.put$O$O(node, matchedTerms);
}
return resultsOR;
});

Clazz.newMeth(C$, 'getHTMLBody$S',  function (path) {
var code=$I$(14).getString$S(path);
if (code != null ) {
var parts=code.split$S("<body>");
parts=parts[1].split$S("</body>");
return parts[0];
}return null;
});

Clazz.newMeth(C$, 'refreshEntryFields$',  function () {
for (var next, $next = this.entryFields.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getBackground$() === $I$(9).yellow ) next.processEntry$();
}
});

Clazz.newMeth(C$, 'getRelativePath$java_util_Map$S',  function (files, baseName) {
for (var s, $s = files.keySet$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
var fileName=$I$(17).getName$S(s);
var n=fileName.indexOf$S("_thumbnail");
if (n > -1) {
baseName=fileName.substring$I$I(0, n);
}}
for (var s, $s = files.keySet$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
var fileName=$I$(17,"stripExtension$S",[$I$(17).getName$S(s)]);
if (s.toLowerCase$().contains$CharSequence(".htm") && (fileName.equals$O(baseName + "_info")) ) {
return s;
}}
for (var s, $s = files.keySet$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
if ("trk".equals$O($I$(17).getExtension$S(s))) {
var trkName=$I$(17,"stripExtension$S",[$I$(17).getName$S(s)]);
for (var ss, $ss = files.keySet$().iterator$(); $ss.hasNext$()&&((ss=($ss.next$())),1);) {
var htmlName=$I$(17,"stripExtension$S",[$I$(17).getName$S(ss)]);
if (ss.toLowerCase$().contains$CharSequence(".htm") && (htmlName.equals$O(trkName + "_info")) ) {
return ss;
}}
}}
return null;
}, 1);

Clazz.newMeth(C$, 'showHTMLDocument$org_opensourcephysics_tools_LibraryTreePanel_HTMLPane$java_net_URL$S',  function (htmlPane, url, htmlStr) {
var document=htmlPane.getDocument$();
document.setBase$java_net_URL(url);
htmlPane.setText$S($I$(14).fixHTTPS$S$java_net_URL(htmlStr, url));
document.getStyleSheet$().addRule$S($I$(2).getHTMLStyles$());
}, 1);

Clazz.newMeth(C$, 'getFileChooser$',  function () {
if (C$.chooser == null ) {
var chooserDir=$I$(18).getBrowser$().library.chooserDir;
C$.chooser=(chooserDir == null ) ? Clazz.new_($I$(59,1)) : Clazz.new_([Clazz.new_($I$(34,1).c$$S,[chooserDir])],$I$(59,1).c$$java_io_File);
C$.htmlFilter=((P$.LibraryTreePanel$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
if (f.isDirectory$()) return true;
var ext=$I$(17,"getExtension$S",[f.getName$()]);
var accept=Clazz.array(String, -1, ["html", "htm"]);
for (var next, $next = 0, $$next = accept; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next.equals$O(ext)) return true;
}
return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(8).getString$S("LibraryTreePanel.HTMLFileFilter.Description");
});
})()
), Clazz.new_($I$(60,1),[this, null],P$.LibraryTreePanel$25));
C$.folderFilter=((P$.LibraryTreePanel$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f != null  && f.isDirectory$() ) return true;
return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(8).getString$S("LibraryTreePanel.FolderFileFilter.Description");
});
})()
), Clazz.new_($I$(60,1),[this, null],P$.LibraryTreePanel$26));
}$I$(33,"setFonts$O$I",[C$.chooser, $I$(33).getLevel$()]);
return C$.chooser;
}, 1);

Clazz.newMeth(C$, 'refreshSelectedNode$',  function () {
});

Clazz.newMeth(C$, 'scrollToPath$javax_swing_tree_TreePath$Z',  function (path, andSelect) {
if ($I$(3).doScrollToPath) this.tree.scrollPathToVisible$javax_swing_tree_TreePath(path);
if (andSelect) this.tree.setSelectionPath$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'clearMaps$',  function () {
C$.htmlPanesByURL.clear$();
C$.htmlPanesByNode.clear$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.keyFieldWidth=100;
C$.lightRed=Clazz.new_($I$(9,1).c$$I$I$I,[255, 180, 200]);
C$.darkRed=Clazz.new_($I$(9,1).c$$I$I$I,[220, 0, 0]);
C$.lightGreen=Clazz.new_($I$(9,1).c$$I$I$I,[100, 200, 100]);
C$.htmlPanesByURL=Clazz.new_($I$(26,1));
C$.htmlPanesByNode=Clazz.new_($I$(26,1));
{
C$.openFileIcon=$I$(14).getImageIcon$S("resources/tools/images/open.gif");
C$.hyperlinkListener=((P$.LibraryTreePanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(27).ACTIVATED ) {
$I$(28,"displayURL$S",[e.getURL$().toString()]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$1.$init$,[this, null]));
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "HTMLPane", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JEditorPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setEditable$Z(false);
this.setFocusable$Z(false);
this.setContentType$S("text/html; charset=UTF-8");
this.addHyperlinkListener$javax_swing_event_HyperlinkListener($I$(1).hyperlinkListener);
this.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.LibraryTreePanel$HTMLPane$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$HTMLPane$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$O'],  function (e) /*block*/{
if (e.getPropertyName$.apply(e, []).equals$O.apply(e.getPropertyName$.apply(e, []), ["page"])) {
var document=this.b$['javax.swing.text.JTextComponent'].getDocument$.apply(this.b$['javax.swing.text.JTextComponent'], []);
document.getStyleSheet$.apply(document, []).addRule$S.apply(document.getStyleSheet$.apply(document, []), [$I$(2).getHTMLStyles$()]);
document.getStyleSheet$.apply(document, []).addRule$S.apply(document.getStyleSheet$.apply(document, []), [$I$(2).getBodyStyle$()]);
document.getStyleSheet$.apply(document, []).addRule$S.apply(document.getStyleSheet$.apply(document, []), [$I$(2).getH1Style$()]);
document.getStyleSheet$.apply(document, []).addRule$S.apply(document.getStyleSheet$.apply(document, []), [$I$(2).getH2Style$()]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$HTMLPane$lambda1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
if ($I$(3).antiAliasText) {
var g2=g;
var rh=g2.getRenderingHints$();
rh.put$O$O($I$(4).KEY_TEXT_ANTIALIASING, $I$(4).VALUE_TEXT_ANTIALIAS_ON);
rh.put$O$O($I$(4).KEY_ANTIALIASING, $I$(4).VALUE_ANTIALIAS_ON);
}C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "MetadataComboBoxRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.Box', 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['keyField','javax.swing.JTextField','+valueField','spacer','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
this.keyField=((P$.LibraryTreePanel$MetadataComboBoxRenderer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$MetadataComboBoxRenderer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getPreferredSize$();
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.LibraryTreePanel$MetadataComboBoxRenderer$1));
this.keyField.setHorizontalAlignment$I(4);
this.keyField.setFont$java_awt_Font(this.keyField.getFont$().deriveFont$I(1));
this.valueField=((P$.LibraryTreePanel$MetadataComboBoxRenderer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$MetadataComboBoxRenderer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.getMaximumSize$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.getMinimumSize$();
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.LibraryTreePanel$MetadataComboBoxRenderer$2));
var border=$I$(6,"createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border",[this.keyField.getBorder$(), $I$(6).createEmptyBorder$I$I$I$I(0, 1, 0, 1)]);
this.keyField.setBorder$javax_swing_border_Border(border);
this.valueField.setBorder$javax_swing_border_Border(border);
this.spacer=Clazz.new_($I$(7,1));
this.spacer.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.add$java_awt_Component(this.keyField);
this.add$java_awt_Component(this.spacer);
this.add$java_awt_Component(this.valueField);
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$org_opensourcephysics_tools_LibraryResource_Metadata$I$Z$Z','getListCellRendererComponent$javax_swing_JList$O$I$Z$Z'],  function (list, value, index, isSelected, cellHasFocus) {
var empty=false;
if (value != null  && Clazz.instanceOf(value, "org.opensourcephysics.tools.LibraryResource.Metadata") ) {
var metadata=value;
empty=metadata === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata ;
if (empty) {
this.keyField.setText$S($I$(8).getString$S("LibraryTreePanel.Metadata.Name"));
this.valueField.setText$S($I$(8).getString$S("LibraryTreePanel.Metadata.Value"));
this.keyField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getEmptyFont$());
this.valueField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.getEmptyFont$());
} else {
this.keyField.setText$S(metadata.getData$()[0]);
this.valueField.setText$S(metadata.getData$()[1]);
this.keyField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getDefaultFont$());
this.valueField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.getDefaultFont$());
}}if (isSelected) {
this.keyField.setBackground$java_awt_Color(list.getSelectionBackground$());
this.keyField.setForeground$java_awt_Color(empty ? $I$(9).gray : list.getSelectionForeground$());
this.valueField.setBackground$java_awt_Color(list.getSelectionBackground$());
this.valueField.setForeground$java_awt_Color(empty ? $I$(9).gray : list.getSelectionForeground$());
} else {
this.keyField.setBackground$java_awt_Color(list.getBackground$());
this.keyField.setForeground$java_awt_Color(empty ? $I$(9).gray : list.getForeground$());
this.valueField.setBackground$java_awt_Color(list.getBackground$());
this.valueField.setForeground$java_awt_Color(empty ? $I$(9).gray : list.getForeground$());
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "MetadataComboBoxModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractListModel', 'javax.swing.ComboBoxModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getSize$',  function () {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node == null ) return 0;
var data=node.record.getMetadata$();
if (data == null ) return 1;
return data.size$() + 1;
});

Clazz.newMeth(C$, 'getElementAt$I',  function (index) {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node == null ) return this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata;
var data=node.record.getMetadata$();
if (data == null ) return this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata;
var i=0;
for (var next, $next = data.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (index == i) return next;
++i;
}
return this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata;
});

Clazz.newMeth(C$, 'setSelectedItem$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "org.opensourcephysics.tools.LibraryResource.Metadata")) ) return;
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node == null ) return;
var metadata=obj;
node.selectedMetadata=metadata;
});

Clazz.newMeth(C$, 'getSelectedItem$',  function () {
var node=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []);
if (node == null ) return null;
var metadata=node.selectedMetadata;
return metadata;
});

Clazz.newMeth(C$, 'dataChanged$',  function () {
if (this.getSize$() > 0) this.fireContentsChanged$O$I$I(this, 0, this.getSize$() - 1);
});

Clazz.newMeth(C$, 'dataAdded$',  function () {
if (this.getSize$() > 0) this.fireIntervalAdded$O$I$I(this, 0, this.getSize$() - 1);
});

Clazz.newMeth(C$, 'dataRemoved$',  function () {
if (this.getSize$() > 0) this.fireIntervalRemoved$O$I$I(this, 0, this.getSize$() - 1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "MetadataComboBoxEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.Box', 'javax.swing.ComboBoxEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['spacer','javax.swing.JLabel','metadata','org.opensourcephysics.tools.LibraryResource.Metadata']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField=((P$.LibraryTreePanel$MetadataComboBoxEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$MetadataComboBoxEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.LibraryTreePanel','.MetadataEditField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefaultText$',  function () {
return this.b$['org.opensourcephysics.tools.LibraryTreePanel.MetadataComboBoxEditor'].metadata === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata  ? $I$(8).getString$S("LibraryTreePanel.Metadata.Name") : null;
});

Clazz.newMeth(C$, 'getEmptyFont$',  function () {
return $I$(10).$font.deriveFont$I(3);
});

Clazz.newMeth(C$, 'getDefaultFont$',  function () {
return $I$(10).$font.deriveFont$I(1);
});
})()
), Clazz.new_([this, null, $I$(1).keyFieldWidth],$I$(11,1).c$$I,P$.LibraryTreePanel$MetadataComboBoxEditor$1));
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].entryFields.add$O(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setHorizontalAlignment$I(4);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getDefaultFont$());
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField=((P$.LibraryTreePanel$MetadataComboBoxEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$MetadataComboBoxEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.LibraryTreePanel','.MetadataEditField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefaultText$',  function () {
return this.b$['org.opensourcephysics.tools.LibraryTreePanel.MetadataComboBoxEditor'].metadata === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata  ? $I$(8).getString$S("LibraryTreePanel.Metadata.Value") : null;
});

Clazz.newMeth(C$, 'getEmptyFont$',  function () {
return $I$(10).$font.deriveFont$I(2);
});

Clazz.newMeth(C$, 'getDefaultFont$',  function () {
return $I$(10).$font.deriveFont$I(0);
});
})()
), Clazz.new_($I$(11,1).c$$I,[this, null, 0],P$.LibraryTreePanel$MetadataComboBoxEditor$2));
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].entryFields.add$O(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField);
var border=$I$(6,"createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border",[this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getBorder$(), $I$(6).createEmptyBorder$I$I$I$I(0, 1, 0, 1)]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setBorder$javax_swing_border_Border(border);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setBorder$javax_swing_border_Border(border);
this.spacer=Clazz.new_($I$(7,1));
this.spacer.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.add$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField);
this.add$java_awt_Component(this.spacer);
this.add$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField);
}, 1);

Clazz.newMeth(C$, 'getEditorComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'setItem$O',  function (obj) {
if (obj == null ) return;
this.metadata=obj;
var empty=this.metadata === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].emptyMetadata ;
if (empty) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setText$S($I$(8).getString$S("LibraryTreePanel.Metadata.Name"));
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setText$S($I$(8).getString$S("LibraryTreePanel.Metadata.Value"));
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setForeground$java_awt_Color($I$(9).gray);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setForeground$java_awt_Color($I$(9).gray);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getEmptyFont$());
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.getEmptyFont$());
} else {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setText$S(this.metadata.getData$()[0]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setCaretPosition$I(0);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setText$S(this.metadata.getData$()[1]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setCaretPosition$I(0);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setForeground$java_awt_Color($I$(1).defaultForeground);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setForeground$java_awt_Color($I$(1).defaultForeground);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.getDefaultFont$());
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.getDefaultFont$());
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].keyEditField.setBackground$java_awt_Color($I$(9).white);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].valueEditField.setBackground$java_awt_Color($I$(9).white);
});

Clazz.newMeth(C$, 'getItem$',  function () {
return this.metadata;
});

Clazz.newMeth(C$, 'selectAll$',  function () {
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "MetadataLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.canceled=false;
},1);

C$.$fields$=[['Z',['canceled'],'O',['treePath','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List',  function (treePath) {
Clazz.super_(C$, this);
this.treePath=treePath;
}, 1);

Clazz.newMeth(C$, 'cancel$',  function () {
this.canceled=true;
});

Clazz.newMeth(C$, 'doInBackground$',  function () {
if (!$I$(3).isJS) {
p$1.setupAndRunLoaders.apply(this, []);
}return null;
});

Clazz.newMeth(C$, 'setupAndRunLoaders',  function () {
var nodeLoaders=Clazz.new_($I$(12,1));
var listener=((P$.LibraryTreePanel$MetadataLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$MetadataLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel.MetadataLoader'].finalizeLoader$org_opensourcephysics_tools_LibraryTreePanel_NodeLoader$java_util_ArrayList$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.MetadataLoader'], [e.getSource$(), this.$finals$.nodeLoaders, e.getPropertyName$()]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$MetadataLoader$1.$init$,[this, {nodeLoaders:nodeLoaders}]));
var e=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootNode.preorderEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
var nodeLoader=Clazz.new_($I$(13,1).c$$org_opensourcephysics_tools_LibraryTreeNode,[this, null, node]);
nodeLoaders.add$O(nodeLoader);
nodeLoader.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
}
if ($I$(3).allowBackgroundNodeLoading) nodeLoaders.get$I(0).execute$();
}, p$1);

Clazz.newMeth(C$, 'finalizeLoader$org_opensourcephysics_tools_LibraryTreePanel_NodeLoader$java_util_ArrayList$S',  function (nodeLoader, nodeLoaders, propName) {
if (nodeLoader.isDone$()) {
if (this.canceled) {
return;
}var i=nodeLoaders.indexOf$O(nodeLoader);
if (i + 1 < nodeLoaders.size$()) {
nodeLoader=nodeLoaders.get$I(i + 1);
nodeLoader.execute$();
} else {
this.canceled=true;
var cacheFile=$I$(14).getSearchCacheFile$S(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pathToRoot);
var control=Clazz.new_($I$(15,1).c$$O,[this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootNode.record]);
control.setValue$S$O("real_path", this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pathToRoot);
control.write$S(cacheFile.getAbsolutePath$());
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].setSelectionPath$java_util_List.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [this.treePath]);
var en=this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootNode.preorderEnumeration$();
while (en.hasMoreElements$()){
var node=en.nextElement$();
if (Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection")) {
node.record.setDescription$S(null);
$I$(1).htmlPanesByNode.remove$O(node);
}}
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.libraryManager != null ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.libraryManager.refreshSearchTab$();
}this.b$['org.opensourcephysics.tools.LibraryTreePanel'].showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []), "LibraryTreePanel.propChange " + propName]);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.metadataLoaderListener != null ) {
var event=Clazz.new_($I$(16,1).c$$O$S$O$O,[this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser, this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pathToRoot, null, cacheFile]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.metadataLoaderListener.propertyChange$java_beans_PropertyChangeEvent(event);
}}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "NodeLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasNewChildren=false;
},1);

C$.$fields$=[['Z',['hasNewChildren'],'O',['node','org.opensourcephysics.tools.LibraryTreeNode']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LibraryTreeNode',  function (treeNode) {
Clazz.super_(C$, this);
this.node=treeNode;
}, 1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
this.loadNodeAsync$org_opensourcephysics_tools_LibraryTreeNode(this.node);
return null;
});

Clazz.newMeth(C$, 'loadNodeAsync$org_opensourcephysics_tools_LibraryTreeNode',  function (node) {
var htmlPath=node.getHTMLPath$();
var target=node.getAbsoluteTarget$();
var isZip=target != null  && (target.toLowerCase$().endsWith$S(".zip") || target.toLowerCase$().endsWith$S(".trz") ) ;
if (isZip) {
if (node.record != null  && node.record.hasExternalHTML$() ) {
p$2.loadPathAsync$S$S.apply(this, [htmlPath, target]);
return;
}var loadzip=$I$(14).isWebConnected$() || !$I$(14).isHTTP$S(target) ;
if (loadzip && node.getTargetURL$() != null  ) {
var base=node.getBasePath$();
p$2.loadZipPathAsync$S$S$S$S.apply(this, [htmlPath, target, node.getTargetURL$().toExternalForm$(), base]);
}} else {
p$2.loadPathAsync$S$S.apply(this, [htmlPath, target]);
}});

Clazz.newMeth(C$, 'loadZipPathAsync$S$S$S$S',  function (htmlPath, target, targetURLPath, base) {
$I$(14,"getZipContentsAsync$S$java_util_function_Function",[targetURLPath, ((P$.LibraryTreePanel$NodeLoader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$NodeLoader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_Map','apply$O'],  function (files) /*block*/{
if (files == null ) return null;
var target_urlPath=$I$(17).forwardSlash$S(this.$finals$.targetURLPath);
if (target_urlPath.startsWith$S.apply(target_urlPath, ["file:/"])) {
target_urlPath=target_urlPath.substring$I$I.apply(target_urlPath, [6, target_urlPath.length$.apply(target_urlPath, [])]);
} else if (target_urlPath.startsWith$S.apply(target_urlPath, ["file::/"])) {
target_urlPath=target_urlPath.substring$I$I.apply(target_urlPath, [7, target_urlPath.length$.apply(target_urlPath, [])]);
}var targetRelativePath=$I$(17).getPathRelativeTo$S$S(target_urlPath, this.$finals$.base);
var targetName=$I$(17).stripExtension$S(targetRelativePath);
var htmlRelativePath=$I$(1).getRelativePath$java_util_Map$S(files, targetName);
if (htmlRelativePath == null ) {
p$2.loadPathAsync$S$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'], [this.$finals$.htmlPath, this.$finals$.target]);
return null;
}var htmlCodePath=this.$finals$.targetURLPath + "!/" + htmlRelativePath ;
var targetPath=targetName + "." + $I$(17).getExtension$S(this.$finals$.target) + "!/" + htmlRelativePath ;
$I$(14,"getHTMLCodeAsync$S$java_util_function_Function",[htmlCodePath, ((P$.LibraryTreePanel$NodeLoader$lambda1$2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$NodeLoader$lambda1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$S','apply$O'],  function (htmlCode) /*block*/{
this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].loadNodeFromMetadata$S$S$S$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'], [this.$finals$.htmlCodePath, htmlCode, this.$finals$.target, this.$finals$.targetPath]);
return null;
});
})()
), Clazz.new_(P$.LibraryTreePanel$NodeLoader$lambda1$2.$init$,[this, {htmlCodePath:htmlCodePath,targetPath:targetPath,target:this.$finals$.target}]))]);
return null;
});
})()
), Clazz.new_(P$.LibraryTreePanel$NodeLoader$lambda1.$init$,[this, {targetURLPath:targetURLPath,base:base,htmlPath:htmlPath,target:target}]))]);
}, p$2);

Clazz.newMeth(C$, 'loadNodeFromMetadata$S$S$S$S',  function (htmlCodePath, htmlCode, target, targetPath) {
this.node.metadataSource=htmlCode;
var redirect=$I$(18).getRedirectFromHTMLCode$S(htmlCode);
if (redirect != null ) {
this.node.record.setHTMLPath$S(redirect);
} else {
this.node.record.setHTMLPath$S(targetPath);
}var title=$I$(14).getTitleFromHTMLCode$S(htmlCode);
if (title != null ) {
this.node.record.setName$S(title);
}p$2.loadPathAsync$S$S.apply(this, [htmlCodePath, target]);
});

Clazz.newMeth(C$, 'loadPathAsync$S$S',  function (htmlPath, target) {
var reloadUrlPath=this.node.record.getProperty$S("reload_url");
if (reloadUrlPath != null ) target=reloadUrlPath;
if (!$I$(19).isComPADREPath$S(target)) {
this.processNode$S(htmlPath);
return;
}if (Clazz.instanceOf(this.node.record, "org.opensourcephysics.tools.LibraryCollection")) {
this.hasNewChildren=false;
var n=this.node;
var onSuccess=((P$.LibraryTreePanel$NodeLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$NodeLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].hasNewChildren=true;
this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].processNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'], [this.$finals$.htmlPath]);
var s="\"" + this.$finals$.n.getName$() + "\"" ;
System.out.println$S("OK - LTP " + s);
});
})()
), Clazz.new_(P$.LibraryTreePanel$NodeLoader$1.$init$,[this, {n:n,htmlPath:htmlPath}]));
var onFailure=((P$.LibraryTreePanel$NodeLoader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$NodeLoader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.setCursor$java_awt_Cursor($I$(20).getDefaultCursor$());
var s="\"" + this.$finals$.n.getName$() + "\"" ;
this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].warnNoResource$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'], [s]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$NodeLoader$2.$init$,[this, {n:n}]));
$I$(19).loadResources$org_opensourcephysics_tools_LibraryTreeNode$Runnable$Runnable(n, onSuccess, onFailure);
} else if ("".equals$O(this.node.record.getDescription$()) && reloadUrlPath != null  ) {
$I$(19,"reloadResource$org_opensourcephysics_tools_LibraryTreeNode$S$Runnable",[this.node, reloadUrlPath, ((P$.LibraryTreePanel$NodeLoader$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$NodeLoader$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].processNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'], [this.$finals$.htmlPath]);
});
})()
), Clazz.new_(P$.LibraryTreePanel$NodeLoader$lambda2.$init$,[this, {htmlPath:htmlPath}]))]);
}}, p$2);

Clazz.newMeth(C$, 'warnNoResource$S',  function (s) {
System.out.println$S("WARN - LibraryTreePanel " + s);
});

Clazz.newMeth(C$, 'processNode$S',  function (htmlPath) {
if (htmlPath != null ) {
var requiresCache=htmlPath.contains$CharSequence("!/");
if (requiresCache) {
var cachedFile=$I$(14).getOSPCacheFile$S(htmlPath);
var foundInCache=cachedFile.exists$();
if (!foundInCache) $I$(14).copyHTMLToOSPCache$S(htmlPath);
}} else if (this.node.record.getProperty$S("reload_url") == null ) {
this.node.record.setDescription$S(null);
}$I$(1).htmlPanesByNode.remove$O(this.node);
$I$(21).htmlURLs.remove$O(htmlPath);
this.node.getMetadata$();
this.doneAsync$();
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
$I$(22,"invokeLater$Runnable",[((P$.LibraryTreePanel$NodeLoader$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$NodeLoader$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(1).htmlPanesByNode.remove$O.apply($I$(1).htmlPanesByNode, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node]);
$I$(1).htmlPanesByURL.remove$O.apply($I$(1).htmlPanesByURL, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node.getHTMLURL$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node, [])]);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].hasNewChildren) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node.createChildNodes$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node, []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel.nodeStructureChanged$javax_swing_tree_TreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node]);
} else {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel.nodeChanged$javax_swing_tree_TreeNode.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].treeModel, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node]);
}if (this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], []) ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node, "LibraryTreePanel.NodeLoader.run"]);
}if (this.b$['org.opensourcephysics.tools.LibraryTreePanel.NodeLoader'].node === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootNode ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.refreshTabTitle$S$org_opensourcephysics_tools_LibraryResource.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser, [this.b$['org.opensourcephysics.tools.LibraryTreePanel'].pathToRoot, this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootResource]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$NodeLoader$lambda3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'done$',  function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "HTMLDisplayer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasNewChildren=false;
},1);

C$.$fields$=[['Z',['hasNewChildren'],'O',['node','org.opensourcephysics.tools.LibraryTreeNode']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LibraryTreeNode',  function (treeNode) {
Clazz.super_(C$, this);
this.node=treeNode;
}, 1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
try {
var htmlPane=$I$(1).htmlPanesByNode.get$O(this.node);
if (htmlPane == null ) {
var htmlStr;
var url=this.node.getHTMLURL$();
if (url == null ) {
htmlPane=Clazz.new_($I$(23,1));
htmlStr=this.node.getHTMLString$();
} else {
htmlPane=$I$(1).htmlPanesByURL.get$O(url);
if (htmlPane == null ) {
htmlPane=Clazz.new_($I$(23,1));
$I$(1).htmlPanesByURL.put$O$O(url, htmlPane);
if (!$I$(3).isJS) {
htmlStr=null;
try {
var pane=htmlPane;
var data=this.node.record.getMetadata$();
if (data == null  || data.size$() == 0 ) {
htmlPane.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.LibraryTreePanel$HTMLDisplayer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$HTMLDisplayer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$O'],  function (e) /*block*/{
if (e.getPropertyName$.apply(e, []) === "page"  && this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [])  ) {
var htmlCode=this.$finals$.pane.getText$.apply(this.$finals$.pane, []);
if (htmlCode.indexOf$S.apply(htmlCode, ["<meta name="]) > -1) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node.record.setMetadata$java_util_TreeSet.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node.record, [null]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node.metadataSource=htmlCode;
this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node.getMetadata$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node, []);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.setMessage$S$java_awt_Color.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node.getToolTip$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node, []), null]);
}}});
})()
), Clazz.new_(P$.LibraryTreePanel$HTMLDisplayer$lambda1.$init$,[this, {pane:pane}])));
}htmlPane.setPage$java_net_URL(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
} else {
htmlStr="";
}} else if (url.equals$O(htmlPane.getPage$())) {
htmlStr=null;
} else {
htmlStr="";
htmlPane.getDocument$().putProperty$O$O("stream", null);
}}if (htmlStr != null ) {
var pane=htmlPane;
if (htmlStr === "" ) {
if ($I$(3).allowAsyncURL) {
$I$(14,"getURLContentsAsync$java_net_URL$java_util_function_Function",[url, ((P$.LibraryTreePanel$HTMLDisplayer$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$HTMLDisplayer$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (bytes) /*block*/{
var s;
if (bytes == null ) s=("<h2>" + this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node + "</h2>" );
 else s= String.instantialize(bytes);
$I$(1).showHTMLDocument$org_opensourcephysics_tools_LibraryTreePanel_HTMLPane$java_net_URL$S(this.$finals$.pane, this.$finals$.url, s);
$I$(1).htmlPanesByNode.put$O$O.apply($I$(1).htmlPanesByNode, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node, this.$finals$.pane]);
this.$finals$.pane.setCaretPosition$I.apply(this.$finals$.pane, [0]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].whenDone$org_opensourcephysics_tools_LibraryTreePanel_HTMLPane.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'], [this.$finals$.pane]);
return null;
});
})()
), Clazz.new_(P$.LibraryTreePanel$HTMLDisplayer$lambda2.$init$,[this, {pane:pane,url:url}]))]);
return null;
}htmlStr= String.instantialize($I$(14).getURLContents$java_net_URL(url));
}$I$(1).showHTMLDocument$org_opensourcephysics_tools_LibraryTreePanel_HTMLPane$java_net_URL$S(htmlPane, url, htmlStr);
}$I$(1).htmlPanesByNode.put$O$O(this.node, htmlPane);
htmlPane.setCaretPosition$I(0);
}this.whenDone$org_opensourcephysics_tools_LibraryTreePanel_HTMLPane(htmlPane);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.out.println$S("LibraryTreePanel exception " + e);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'whenDone$org_opensourcephysics_tools_LibraryTreePanel_HTMLPane',  function (htmlPane) {
$I$(22,"invokeLater$Runnable",[((P$.LibraryTreePanel$HTMLDisplayer$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreePanel$HTMLDisplayer$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.$finals$.htmlPane != null  && this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'], [])  ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].htmlScroller.setViewportView$java_awt_Component.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].htmlScroller, [this.$finals$.htmlPane]);
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.setMessage$S$java_awt_Color.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser, [this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node.getToolTip$.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node, []), null]);
if (this.b$['org.opensourcephysics.tools.LibraryTreePanel.HTMLDisplayer'].node === this.b$['org.opensourcephysics.tools.LibraryTreePanel'].rootNode ) {
this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.refreshButton.setToolTipText$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.refreshButton, [$I$(8).getString$S("LibraryBrowser.Tooltip.Reload")]);
} else this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.refreshButton.setToolTipText$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].browser.refreshButton, [$I$(8).getString$S("LibraryBrowser.Tooltip.Refresh")]);
}});
})()
), Clazz.new_(P$.LibraryTreePanel$HTMLDisplayer$lambda3.$init$,[this, {htmlPane:htmlPane}]))]);
});

Clazz.newMeth(C$, 'done$',  function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "EntryField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$font','java.awt.Font','documentListener','javax.swing.event.DocumentListener','$focusListener','java.awt.event.FocusListener','actionListener','java.awt.event.ActionListener']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.getDocument$().putProperty$O$O("parent", this);
this.addFocusListener$java_awt_event_FocusListener(C$.$focusListener);
this.addActionListener$java_awt_event_ActionListener(C$.actionListener);
this.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(C$.documentListener);
}, 1);

Clazz.newMeth(C$, 'getDefaultText$',  function () {
return null;
});

Clazz.newMeth(C$, 'getEmptyFont$',  function () {
return this.getFont$();
});

Clazz.newMeth(C$, 'getDefaultFont$',  function () {
return this.getFont$();
});

Clazz.newMeth(C$, 'processEntry$',  function () {
var fire=this.getBackground$() === $I$(9).yellow ;
if (this.getDefaultText$() != null  && "".equals$O(this.getText$()) ) {
this.setText$S(this.getDefaultText$());
this.setForeground$java_awt_Color($I$(9).gray);
this.setFont$java_awt_Font(this.getEmptyFont$());
}this.setBackground$java_awt_Color($I$(9).white);
if (fire) this.fireActionPerformed$();
});

C$.$static$=function(){C$.$static$=0;
C$.$font=Clazz.new_($I$(5,1)).getFont$();
C$.documentListener=((P$.LibraryTreePanel$EntryField$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$EntryField$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
var field=e.getDocument$().getProperty$O("parent");
field.setBackground$java_awt_Color($I$(9).yellow);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
var field=e.getDocument$().getProperty$O("parent");
field.setBackground$java_awt_Color($I$(9).yellow);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
});
})()
), Clazz.new_(P$.LibraryTreePanel$EntryField$1.$init$,[this, null]));
C$.$focusListener=((P$.LibraryTreePanel$EntryField$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$EntryField$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
if (field.getDefaultText$() != null ) {
field.setText$S(null);
field.setFont$java_awt_Font(field.getDefaultFont$());
field.setForeground$java_awt_Color($I$(1).defaultForeground);
}field.selectAll$();
field.setBackground$java_awt_Color($I$(9).white);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
field.processEntry$();
});
})()
), Clazz.new_($I$(24,1),[this, null],P$.LibraryTreePanel$EntryField$2));
C$.actionListener=((P$.LibraryTreePanel$EntryField$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreePanel$EntryField$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var field=e.getSource$();
field.setBackground$java_awt_Color($I$(9).white);
});
})()
), Clazz.new_(P$.LibraryTreePanel$EntryField$3.$init$,[this, null]));
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "MetadataEditField", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.tools.LibraryTreePanel','.EntryField']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['preferredWidth']]]

Clazz.newMeth(C$, 'c$$I',  function (width) {
Clazz.super_(C$, this);
this.preferredWidth=width;
this.addActionListener$java_awt_event_ActionListener(this.b$['org.opensourcephysics.tools.LibraryTreePanel'].metadataFieldListener);
}, 1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.getPreferredSize$().height;
if (this.preferredWidth > 0) dim.width=this.preferredWidth;
return dim;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
if (this.preferredWidth > 0) dim.width=this.preferredWidth;
return dim;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
if (this.preferredWidth > 0) dim.width=this.preferredWidth;
return dim;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreePanel, "LibraryTreeNodeRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['resizableOpenIcon','org.opensourcephysics.display.ResizableIcon','+resizableClosedIcon']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.resizableOpenIcon=Clazz.new_([C$.superclazz.prototype.getOpenIcon$.apply(this, [])],$I$(25,1).c$$javax_swing_Icon);
this.resizableClosedIcon=Clazz.new_([C$.superclazz.prototype.getClosedIcon$.apply(this, [])],$I$(25,1).c$$javax_swing_Icon);
}, 1);

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z',  function (tree, value, sel, expanded, leaf, row, hasFocus) {
C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
var node=value;
var icon=node.record.getIcon$();
var c=this.getForeground$();
if (Clazz.instanceOf(node.record, "org.opensourcephysics.tools.LibraryCollection")) {
icon=expanded ? this.getOpenIcon$() : this.getClosedIcon$();
if (node.getTarget$() != null ) {
icon=$I$(2).collectionIcon;
if (node.getTarget$().contains$CharSequence("&OSPSubject=")) {
c=$I$(9).RED;
}}}this.setToolTipText$S(node.getToolTip$());
if (icon == null ) {
icon=$I$(2).unknownIcon;
}this.setIcon$javax_swing_Icon(icon);
this.setForeground$java_awt_Color(c);
return this;
});

Clazz.newMeth(C$, 'getOpenIcon$',  function () {
return this.resizableOpenIcon;
});

Clazz.newMeth(C$, 'getClosedIcon$',  function () {
return this.resizableClosedIcon;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
