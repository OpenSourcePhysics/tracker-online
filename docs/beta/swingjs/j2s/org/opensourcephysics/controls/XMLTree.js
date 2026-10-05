(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.controls.XMLTree','java.util.ArrayList','javax.swing.tree.TreePath','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.XMLTreeNode','javax.swing.JTree',['org.opensourcephysics.controls.XMLTree','.HighlightRenderer'],'javax.swing.JScrollPane','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTree", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['HighlightRenderer',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectedProps=Clazz.new_($I$(2,1));
this.hilite=Clazz.getClass(java.lang.Object);
},1);

C$.$fields$=[['O',['root','org.opensourcephysics.controls.XMLTreeNode','tree','javax.swing.JTree','scroller','javax.swing.JScrollPane','control','org.opensourcephysics.controls.XMLControl','selectedProps','java.util.List','hilite','Class']]
,['O',['hiliteIcon','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
;C$.$init$.apply(this);
this.control=control;
this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'getTree$',  function () {
return this.tree;
});

Clazz.newMeth(C$, 'getSelectedProperties$',  function () {
this.selectedProps.clear$();
var paths=this.tree.getSelectionPaths$();
if (paths != null ) {
for (var i=0; i < paths.length; i++) {
var node=paths[i].getLastPathComponent$();
this.selectedProps.add$O(node.getProperty$());
}
}return this.selectedProps;
});

Clazz.newMeth(C$, 'getScrollPane$',  function () {
return this.scroller;
});

Clazz.newMeth(C$, 'setHighlightedClass$Class',  function (type) {
if (type != null ) {
this.hilite=type;
this.scroller.repaint$();
}});

Clazz.newMeth(C$, 'getHighlightedClass$',  function () {
return this.hilite;
});

Clazz.newMeth(C$, 'selectHighlightedProperties$',  function () {
var e=this.root.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
var prop=node.getProperty$();
var type=prop.getPropertyClass$();
if ((type != null ) && this.hilite.isAssignableFrom$Class(type) ) {
var path=Clazz.new_([node.getPath$()],$I$(3,1).c$$OA);
this.tree.addSelectionPath$javax_swing_tree_TreePath(path);
this.tree.scrollPathToVisible$javax_swing_tree_TreePath(path);
}}
});

Clazz.newMeth(C$, 'showHighlightedProperties$',  function () {
var e=this.root.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
var prop=node.getProperty$();
var type=prop.getPropertyClass$();
if ((type != null ) && this.hilite.isAssignableFrom$Class(type) ) {
var path=Clazz.new_([node.getPath$()],$I$(3,1).c$$OA);
this.tree.scrollPathToVisible$javax_swing_tree_TreePath(path);
}}
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var imageFile="/org/opensourcephysics/resources/controls/images/hilite.gif";
C$.hiliteIcon=$I$(4).getImageIcon$S(imageFile);
this.root=Clazz.new_($I$(5,1).c$$org_opensourcephysics_controls_XMLProperty,[this.control]);
this.tree=Clazz.new_($I$(6,1).c$$javax_swing_tree_TreeNode,[this.root]);
this.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(Clazz.new_($I$(7,1),[this, null]));
this.tree.getSelectionModel$().setSelectionMode$I(4);
this.scroller=Clazz.new_($I$(8,1).c$$java_awt_Component,[this.tree]);
this.scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[200, 200]));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLTree, "HighlightRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z',  function (tree, value, sel, expanded, leaf, row, hasFocus) {
C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
var node=value;
var prop=node.getProperty$();
var type=prop.getPropertyClass$();
if ((type != null ) && this.b$['org.opensourcephysics.controls.XMLTree'].hilite.isAssignableFrom$Class(type) ) {
this.setIcon$javax_swing_Icon($I$(1).hiliteIcon);
}return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
