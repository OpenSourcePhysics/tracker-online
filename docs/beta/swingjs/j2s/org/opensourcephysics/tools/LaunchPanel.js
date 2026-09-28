(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.util.HashMap','java.util.TreeMap','javax.swing.tree.TreePath','java.util.ArrayList','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.LaunchRes','javax.swing.SwingUtilities','java.util.Scanner','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.Dimension','java.awt.BorderLayout','javax.swing.JSplitPane','javax.swing.JPanel','org.opensourcephysics.display.GUIUtils','javax.swing.JScrollPane','javax.swing.JTabbedPane',['org.opensourcephysics.tools.LauncherUndo','.NavEdit'],'java.awt.event.MouseAdapter',['org.opensourcephysics.tools.LaunchPanel','.VisibleNode'],['org.opensourcephysics.tools.LaunchPanel','.LaunchTreeModel'],'javax.swing.JTree']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['LaunchTreeModel',0],['VisibleNode',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visibleNodeMap=Clazz.new_($I$(1,1));
this.htmlSubstitutions=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['showAllNodes','rebuildingTabs','isSelectingNode'],'S',['noTitle'],'O',['tree','javax.swing.JTree','treeModel','javax.swing.tree.DefaultTreeModel','splitPane','javax.swing.JSplitPane','dataPanel','javax.swing.JPanel','tabbedPane','javax.swing.JTabbedPane','descriptionPane','javax.swing.JEditorPane','descriptionScroller','javax.swing.JScrollPane','visibleNodeMap','java.util.Map','launcher','org.opensourcephysics.tools.Launcher','htmlSubstitutions','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchNode$org_opensourcephysics_tools_Launcher',  function (rootNode, launcher) {
Clazz.super_(C$, this);
this.showAllNodes=Clazz.instanceOf(launcher, "org.opensourcephysics.tools.LaunchBuilder");
this.launcher=launcher;
this.createGUI$();
this.createTree$org_opensourcephysics_tools_LaunchNode(rootNode);
this.setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(rootNode);
}, 1);

Clazz.newMeth(C$, 'setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (node == null ) {
return;
}if (node === this.getSelectedNode$() ) {
this.rebuildAndDisplayTabs$org_opensourcephysics_tools_LaunchNode(node);
} else {
this.tree.setSelectionPath$javax_swing_tree_TreePath(Clazz.new_([node.getPath$()],$I$(3,1).c$$OA));
}});

Clazz.newMeth(C$, 'setTreeSelectionPaths$java_util_ArrayList',  function (nodes) {
if (nodes == null  || nodes.size$() == 0 ) {
return;
}var paths=Clazz.array($I$(3), [nodes.size$()]);
var i=0;
for (var node, $node = nodes.iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
paths[i++]=Clazz.new_([node.getPath$()],$I$(3,1).c$$OA);
}
this.tree.setSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'setSelectedNode$org_opensourcephysics_tools_LaunchNode$I',  function (node, tabNumber) {
this.setSelectedNode$org_opensourcephysics_tools_LaunchNode$I$java_net_URL(node, tabNumber, null);
});

Clazz.newMeth(C$, 'setSelectedNode$org_opensourcephysics_tools_LaunchNode$I$java_net_URL',  function (node, tabNumber, url) {
node.tabNumber=(url == null  && node.getDisplayTabCount$() == 0  ? -1 : tabNumber);
var htmlData=null;
var prevURL=null;
var node0=this.getSelectedNode$();
if (node.tabNumber >= 0) {
htmlData=node.tabData.get$I(node.tabNumber);
}if (htmlData != null ) {
prevURL=htmlData.url;
}if (url != null ) {
node.setURL$java_net_URL(url);
if (htmlData != null ) {
htmlData.url=url;
}}var scrollRef=(node0 === node  && url != null   && prevURL != null   && url.getPath$().equals$O(prevURL.getPath$())  ? "#" : null);
if (scrollRef == null ) {
this.setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(node);
} else if (url != null ) {
this.setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(node);
}if (htmlData != null ) {
htmlData.url=prevURL;
}});

Clazz.newMeth(C$, 'getSelectedNode$',  function () {
var path=this.tree.getSelectionPath$();
if (path == null ) {
return null;
}return path.getLastPathComponent$();
});

Clazz.newMeth(C$, 'getSelectedNodes$',  function () {
var paths=this.tree.getSelectionPaths$();
if (paths == null ) {
return null;
}var temp=Clazz.new_($I$(4,1));
for (var i=0; i < paths.length; i++) {
temp.add$O(paths[i].getLastPathComponent$());
}
var nodes=Clazz.new_($I$(4,1));
var e=this.getRootNode$().preorderEnumeration$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
if (temp.contains$O(next)) nodes.add$O(next);
}
return nodes;
});

Clazz.newMeth(C$, 'getSelectedDisplayTab$',  function () {
return this.tabbedPane.getSelectedIndex$();
});

Clazz.newMeth(C$, 'getRootNode$',  function () {
return this.treeModel.getRoot$();
});

Clazz.newMeth(C$, 'getHTMLSubstitutionMap$',  function () {
return this.htmlSubstitutions;
});

Clazz.newMeth(C$, 'getClone$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (node.getFileName$() == null ) {
return null;
}var e=this.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
if (node.getFileName$().equals$O(next.getFileName$())) {
return next;
}}
return null;
});

Clazz.newMeth(C$, 'rebuildAndDisplayTabs$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (node == null ) return;
$I$(5,"finer$S",[$I$(6).getString$S("Log.Message.NodeSelected") + " " + node ]);
var isBuilder=Clazz.instanceOf(this.launcher, "org.opensourcephysics.tools.LaunchBuilder");
var url=(node.isDisplayable ? node.getURL$() : null);
var tabNumber=node.tabNumber;
var hasModel=false;
if (url == null  && node.getDisplayTabCount$() > 0 ) {
var k=0;
for (var i=tabNumber; i < node.getDisplayTabCount$(); i++, k++) {
var tab=node.getDisplayTab$I(i);
if (tab == null  || tab.isDisplayable ) break;
}
tabNumber=Math.max(0, tabNumber);
var displayTab=node.getDisplayTab$I(tabNumber + k);
if (displayTab == null ) {
} else if (displayTab.url == null ) {
hasModel=displayTab.getModelClass$() != null ;
} else if (displayTab.isDisplayable) {
url=displayTab.url;
}}this.rebuildingTabs=true;
var tabCount=0;
if (!isBuilder) {
this.tabbedPane.removeAll$();
}this.noTitle=$I$(6).getString$S("HTMLTab.Title.Untitled");
var it=node.tabData.iterator$();
while (it.hasNext$()){
var displayTab=it.next$();
if (displayTab.isDisplayable) {
if (displayTab.urlExists$()) {
var html=this.launcher.getHTMLTab$I(tabCount);
var theURL=(tabNumber == tabCount && url != null   ? url : displayTab.url);
$I$(7,"invokeLater$Runnable",[((P$.LaunchPanel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchPanel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.LaunchPanel'].launchHtml$org_opensourcephysics_tools_Launcher_HTMLPane$java_net_URL$Z.apply(this.b$['org.opensourcephysics.tools.LaunchPanel'], [this.$finals$.html, this.$finals$.theURL, this.$finals$.displayTab.hyperlinksEnabled && this.$finals$.node.enabled ]);
});
})()
), Clazz.new_(P$.LaunchPanel$lambda1.$init$,[this, {theURL:theURL,node:node,html:html,displayTab:displayTab}]))]);
if (!isBuilder) {
p$1.addTab$org_opensourcephysics_tools_LaunchNode_DisplayTab$javax_swing_JScrollPane.apply(this, [displayTab, html.scroller]);
++tabCount;
}} else {
$I$(5,"fine$S",[$I$(6).getString$S("Log.Message.BadURL") + " " + displayTab.url ]);
}} else if (displayTab.getModelScroller$() != null ) {
if (!isBuilder) {
p$1.addTab$org_opensourcephysics_tools_LaunchNode_DisplayTab$javax_swing_JScrollPane.apply(this, [displayTab, displayTab.getModelScroller$()]);
++tabCount;
}}}
if (!isBuilder) {
if (url != null  || hasModel ) {
if (this.tabbedPane.getTabCount$() == 1 && this.tabbedPane.getTitleAt$I(0).equals$O(this.noTitle) ) {
this.splitPane.setRightComponent$java_awt_Component(this.tabbedPane.getComponentAt$I(0));
} else if (this.tabbedPane.getTabCount$() > 0) {
this.splitPane.setRightComponent$java_awt_Component(this.tabbedPane);
if (this.tabbedPane.getTabCount$() > tabNumber) {
this.tabbedPane.setSelectedIndex$I(tabNumber);
}}} else {
var launchPane=node.getLaunchModelScroller$();
if (launchPane != null ) {
this.splitPane.setRightComponent$java_awt_Component(launchPane);
} else {
this.descriptionPane.setText$S(node.description);
this.splitPane.setRightComponent$java_awt_Component(this.descriptionScroller);
}}}this.tabbedPane.setVisible$Z(this.tabbedPane.getTabCount$() > 1);
this.rebuildingTabs=false;
this.launcher.refreshGUI$();
});

Clazz.newMeth(C$, 'addTab$org_opensourcephysics_tools_LaunchNode_DisplayTab$javax_swing_JScrollPane',  function (displayTab, scroller) {
var title=(displayTab.getTitle$() == null ) ? this.noTitle : displayTab.getTitle$();
this.tabbedPane.addTab$S$java_awt_Component(title, scroller);
}, p$1);

Clazz.newMeth(C$, 'launchHtml$org_opensourcephysics_tools_Launcher_HTMLPane$java_net_URL$Z',  function (html, theURL, nodeEnabled) {
try {
if (this.htmlSubstitutions.isEmpty$()) {
html.editorPane.setPage$java_net_URL(theURL);
} else {
var scanner=Clazz.new_([$I$(9).openStream$java_net_URL(theURL), "UTF-8"],$I$(8,1).c$$java_io_InputStream$S);
var text=scanner.useDelimiter$S("\\A").next$();
scanner.close$();
for (var target, $target = this.htmlSubstitutions.keySet$().iterator$(); $target.hasNext$()&&((target=($target.next$())),1);) {
var newValue=this.htmlSubstitutions.get$O(target);
text=text.replaceAll$S$S(target, newValue);
}
var doc=html.editorPane.getDocument$();
doc.setBase$java_net_URL(theURL);
doc.putProperty$O$O("IgnoreCharsetDirective", Boolean.TRUE);
html.editorPane.setText$S(text);
html.editorPane.setCaretPosition$I(0);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (theURL.getRef$() != null ) {
html.editorPane.scrollToReference$S(theURL.getRef$());
if ($I$(10).getLevel$() > 0) {
$I$(11,"trigger$I$java_awt_event_ActionListener",[100, ((P$.LaunchPanel$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LaunchPanel$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.html.editorPane.scrollToReference$S.apply(this.$finals$.html.editorPane, [this.$finals$.theURL.getRef$.apply(this.$finals$.theURL, [])]);
});
})()
), Clazz.new_(P$.LaunchPanel$lambda2.$init$,[this, {theURL:theURL,html:html}]))]);
}}this.launcher.setLinksEnabled$javax_swing_JEditorPane$Z(html.editorPane, nodeEnabled);
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[400, 200]));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
this.splitPane=Clazz.new_($I$(14,1));
this.add$java_awt_Component$O(this.splitPane, "Center");
this.dataPanel=Clazz.new_([Clazz.new_($I$(13,1))],$I$(15,1).c$$java_awt_LayoutManager);
this.descriptionPane=$I$(16).newJTextPane$();
this.descriptionPane.setEditable$Z(false);
this.descriptionPane.setContentType$S("text");
this.descriptionScroller=Clazz.new_($I$(17,1).c$$java_awt_Component,[this.descriptionPane]);
this.tabbedPane=Clazz.new_($I$(18,1).c$$I,[1]);
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.LaunchPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LaunchPanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchPanel'], []);
if (node != null  && node === this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.selectedNode  ) {
var htmlURL=node.getURL$();
if (this.b$['org.opensourcephysics.tools.LaunchPanel'].rebuildingTabs && htmlURL != null  ) return;
node.prevTabNumber=node.tabNumber;
node.prevURL=htmlURL;
var n=Math.max(0, this.b$['org.opensourcephysics.tools.LaunchPanel'].tabbedPane.getSelectedIndex$());
node.tabNumber=node.tabData.isEmpty$() ? -1 : n;
if (node.tabNumber > -1) {
var displayTab=node.getDisplayTab$I(node.tabNumber);
if (displayTab.url != null ) {
node.setURL$java_net_URL(displayTab.url);
} else {
var tab=this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.getHTMLTab$I(node.tabNumber);
node.setURL$java_net_URL(tab.editorPane.getPage$());
}}}});
})()
), Clazz.new_(P$.LaunchPanel$1.$init$,[this, null])));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(((P$.LaunchPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LaunchPanel'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchPanel'], []);
if ((node != null ) && this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.postEdits ) {
var nodePath=node.getPathString$();
var undoPage=Integer.valueOf$I(node.prevTabNumber);
var redoPage=Integer.valueOf$I(node.tabNumber);
var undoData=Clazz.array(java.lang.Object, -1, [null, nodePath, undoPage, node.prevURL]);
var redoData=Clazz.array(java.lang.Object, -1, [null, nodePath, redoPage, node.getURL$()]);
var edit=Clazz.new_($I$(19,1).c$$OA$OA,[this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.undoManager, null, undoData, redoData]);
this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}});
})()
), Clazz.new_($I$(20,1),[this, null],P$.LaunchPanel$2)));
this.splitPane.setRightComponent$java_awt_Component(this.dataPanel);
this.splitPane.setDividerLocation$I(160);
});

Clazz.newMeth(C$, 'createTree$org_opensourcephysics_tools_LaunchNode',  function (rootNode) {
if (!this.showAllNodes) {
var visibleRoot=Clazz.new_($I$(21,1).c$$org_opensourcephysics_tools_LaunchNode,[this, null, rootNode]);
this.visibleNodeMap.put$O$O(rootNode, visibleRoot);
p$1.addVisibleNodes$org_opensourcephysics_tools_LaunchPanel_VisibleNode.apply(this, [visibleRoot]);
}this.treeModel=Clazz.new_($I$(22,1).c$$org_opensourcephysics_tools_LaunchNode,[this, null, rootNode]);
this.tree=Clazz.new_($I$(23,1).c$$javax_swing_tree_TreeModel,[this.treeModel]);
this.tree.setToolTipText$S("");
this.tree.setRootVisible$Z(!rootNode.hiddenWhenRoot);
if (Clazz.instanceOf(this.launcher, "org.opensourcephysics.tools.LaunchBuilder")) this.tree.getSelectionModel$().setSelectionMode$I(4);
 else this.tree.getSelectionModel$().setSelectionMode$I(1);
this.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(((P$.LaunchPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TreeSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.getSelectedNode$();
if (this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.postEdits) {
var treePath=e.getOldLeadSelectionPath$();
if ((treePath != null ) && (node != null ) ) {
var prevNode=treePath.getLastPathComponent$();
if (!node.tabData.isEmpty$()) {
var page=Math.max(0, node.tabNumber);
var htmlData=node.tabData.get$I(page);
node.setURL$java_net_URL(htmlData.url);
node.tabNumber=page;
}var edit=Clazz.new_($I$(19,1).c$$org_opensourcephysics_tools_LaunchNode$org_opensourcephysics_tools_LaunchNode,[this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.undoManager, null, prevNode, node]);
this.b$['org.opensourcephysics.tools.LaunchPanel'].launcher.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}}this.b$['org.opensourcephysics.tools.LaunchPanel'].rebuildAndDisplayTabs$org_opensourcephysics_tools_LaunchNode.apply(this.b$['org.opensourcephysics.tools.LaunchPanel'], [node]);
});
})()
), Clazz.new_(P$.LaunchPanel$3.$init$,[this, null])));
var treeScroller=Clazz.new_($I$(17,1).c$$java_awt_Component,[this.tree]);
this.splitPane.setLeftComponent$java_awt_Component(treeScroller);
});

Clazz.newMeth(C$, 'getExpandedNodes$',  function () {
var list=Clazz.new_($I$(4,1));
var path=Clazz.new_([this.getRootNode$()],$I$(3,1).c$$O);
var en=this.tree.getExpandedDescendants$javax_swing_tree_TreePath(path);
while ((en != null ) && en.hasMoreElements$() ){
var next=en.nextElement$();
var node=next.getLastPathComponent$();
list.add$O(node.getPathString$());
}
return list;
});

Clazz.newMeth(C$, 'setExpandedNodes$java_util_Collection',  function (expanded) {
var it=expanded.iterator$();
while (it.hasNext$()){
var path=it.next$().toString();
var e=this.getRootNode$().breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
if (path.equals$O(node.getPathString$())) {
var treePath=Clazz.new_([node.getPath$()],$I$(3,1).c$$OA);
this.tree.expandPath$javax_swing_tree_TreePath(treePath);
}}
}
});

Clazz.newMeth(C$, 'addVisibleNodes$org_opensourcephysics_tools_LaunchPanel_VisibleNode',  function (visibleParent) {
var n=visibleParent.node.getChildCount$();
for (var i=0; i < n; i++) {
var child=visibleParent.node.getChildAt$I(i);
if (child.isHiddenInLauncher$()) {
continue;
}var visibleChild=Clazz.new_($I$(21,1).c$$org_opensourcephysics_tools_LaunchNode,[this, null, child]);
this.visibleNodeMap.put$O$O(child, visibleChild);
visibleParent.add$javax_swing_tree_MutableTreeNode(visibleChild);
p$1.addVisibleNodes$org_opensourcephysics_tools_LaunchPanel_VisibleNode.apply(this, [visibleChild]);
}
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchPanel, "LaunchTreeModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultTreeModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchNode',  function (root) {
;C$.superclazz.c$$javax_swing_tree_TreeNode.apply(this,[root]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getChild$O$I',  function (parent, index) {
if (this.b$['org.opensourcephysics.tools.LaunchPanel'].showAllNodes) {
return C$.superclazz.prototype.getChild$O$I.apply(this, [parent, index]);
}var visibleParent=this.b$['org.opensourcephysics.tools.LaunchPanel'].visibleNodeMap.get$O(parent);
if (visibleParent != null ) {
var visibleChild=visibleParent.getChildAt$I(index);
if (visibleChild != null ) {
return visibleChild.node;
}}return null;
});

Clazz.newMeth(C$, 'getChildCount$O',  function (parent) {
if (this.b$['org.opensourcephysics.tools.LaunchPanel'].showAllNodes) {
return C$.superclazz.prototype.getChildCount$O.apply(this, [parent]);
}var visibleParent=this.b$['org.opensourcephysics.tools.LaunchPanel'].visibleNodeMap.get$O(parent);
if (visibleParent != null ) {
return visibleParent.getChildCount$();
}return 0;
});

Clazz.newMeth(C$, 'getIndexOfChild$O$O',  function (parent, child) {
if (this.b$['org.opensourcephysics.tools.LaunchPanel'].showAllNodes) {
return C$.superclazz.prototype.getIndexOfChild$O$O.apply(this, [parent, child]);
}var visibleParent=this.b$['org.opensourcephysics.tools.LaunchPanel'].visibleNodeMap.get$O(parent);
var visibleChild=this.b$['org.opensourcephysics.tools.LaunchPanel'].visibleNodeMap.get$O(child);
if ((visibleParent != null ) && (visibleChild != null ) ) {
return visibleParent.getIndex$javax_swing_tree_TreeNode(visibleChild);
}return -1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchPanel, "VisibleNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['node','org.opensourcephysics.tools.LaunchNode']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchNode',  function (node) {
Clazz.super_(C$, this);
this.node=node;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
