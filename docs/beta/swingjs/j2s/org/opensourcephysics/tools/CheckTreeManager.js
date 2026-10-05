(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'javax.swing.JTree','javax.swing.JCheckBox','org.opensourcephysics.tools.CheckTreeSelectionModel','org.opensourcephysics.tools.CheckTreeCellRenderer','java.awt.Cursor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CheckTreeManager", null, 'java.awt.event.MouseAdapter', ['javax.swing.event.TreeSelectionListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tree=Clazz.new_($I$(1,1));
this.hotspot=Clazz.new_($I$(2,1)).getPreferredSize$().width;
this.ignoreEvents=false;
},1);

C$.$fields$=[['Z',['ignoreEvents'],'I',['hotspot'],'O',['selectionModel','org.opensourcephysics.tools.CheckTreeSelectionModel','tree','javax.swing.JTree']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTree',  function (tree) {
Clazz.super_(C$, this);
this.tree=tree;
this.selectionModel=Clazz.new_([tree.getModel$()],$I$(3,1).c$$javax_swing_tree_TreeModel);
tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(Clazz.new_([tree.getCellRenderer$(), this.selectionModel],$I$(4,1).c$$javax_swing_tree_TreeCellRenderer$org_opensourcephysics_tools_CheckTreeSelectionModel));
tree.addMouseListener$java_awt_event_MouseListener(this);
tree.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.selectionModel.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this);
}, 1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var path=this.tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}if ((e.getX$() > this.tree.getPathBounds$javax_swing_tree_TreePath(path).x + this.hotspot - 3) || (e.getX$() < this.tree.getPathBounds$javax_swing_tree_TreePath(path).x + 2) ) {
this.tree.setCursor$java_awt_Cursor($I$(5).getDefaultCursor$());
} else {
this.tree.setCursor$java_awt_Cursor($I$(5).getPredefinedCursor$I(12));
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
var path=this.tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}if (e.getX$() > this.tree.getPathBounds$javax_swing_tree_TreePath(path).x + this.hotspot) {
return;
}var selected=this.selectionModel.isPathOrAncestorSelected$javax_swing_tree_TreePath(path);
try {
this.ignoreEvents=true;
if (selected) {
this.selectionModel.removeSelectionPath$javax_swing_tree_TreePath(path);
} else {
this.selectionModel.addSelectionPath$javax_swing_tree_TreePath(path);
}} finally {
this.ignoreEvents=false;
this.tree.treeDidChange$();
}
});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.selectionModel;
});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
if (!this.ignoreEvents) {
this.tree.treeDidChange$();
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
