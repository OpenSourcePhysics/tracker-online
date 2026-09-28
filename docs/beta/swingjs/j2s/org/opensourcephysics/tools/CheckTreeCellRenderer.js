(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.TristateCheckBox','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CheckTreeCellRenderer", null, 'javax.swing.JPanel', 'javax.swing.tree.TreeCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.checkBox=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['selectionModel','org.opensourcephysics.tools.CheckTreeSelectionModel','delegate','javax.swing.tree.TreeCellRenderer','checkBox','org.opensourcephysics.tools.TristateCheckBox']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeCellRenderer$org_opensourcephysics_tools_CheckTreeSelectionModel',  function (delegate, selectionModel) {
Clazz.super_(C$, this);
this.delegate=delegate;
this.selectionModel=selectionModel;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
this.setOpaque$Z(false);
this.checkBox.setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z',  function (tree, value, selected, expanded, leaf, row, hasFocus) {
var renderer=this.delegate.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z(tree, value, selected, expanded, leaf, row, hasFocus);
var path=tree.getPathForRow$I(row);
if (path != null ) {
if (this.selectionModel.isPathOrAncestorSelected$javax_swing_tree_TreePath(path)) {
this.checkBox.setState$org_opensourcephysics_tools_TristateCheckBox_State($I$(1).SELECTED);
} else {
this.checkBox.setState$org_opensourcephysics_tools_TristateCheckBox_State(this.selectionModel.isPathUnselected$javax_swing_tree_TreePath(path) ? $I$(1).NOT_SELECTED : $I$(1).PART_SELECTED);
}}this.removeAll$();
this.add$java_awt_Component$O(this.checkBox, "West");
this.add$java_awt_Component$O(renderer, "Center");
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
