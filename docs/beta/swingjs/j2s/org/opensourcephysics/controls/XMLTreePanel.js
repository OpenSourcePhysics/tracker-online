(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.tree.TreePath','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.controls.ControlsRes','javax.swing.JToolBar','javax.swing.JLabel','javax.swing.JTextField','java.awt.Color','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','org.opensourcephysics.display.GUIUtils','java.awt.Dimension','javax.swing.JPanel','javax.swing.JSplitPane','org.opensourcephysics.controls.XMLTreeNode','javax.swing.JTree',['org.opensourcephysics.controls.XMLTreePanel','.XMLRenderer'],'org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','org.opensourcephysics.tools.ArrayInspector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTreePanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['XMLRenderer',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.treeScroller=Clazz.new_($I$(1,1));
this.maxStringLength=24;
},1);

C$.$fields$=[['Z',['editable'],'I',['maxStringLength'],'O',['label','javax.swing.JLabel','input','javax.swing.JTextField','xmlPane','javax.swing.JTextPane','tree','javax.swing.JTree','treeScroller','javax.swing.JScrollPane','valueIcon','javax.swing.Icon','+inspectIcon','+inspectFolderIcon','+folderIcon','control','org.opensourcephysics.controls.XMLControl','property','org.opensourcephysics.controls.XMLProperty','popup','javax.swing.JPopupMenu']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
C$.c$$org_opensourcephysics_controls_XMLControl$Z.apply(this, [control, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl$Z',  function (control, editable) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(2,1))]);C$.$init$.apply(this);
this.control=control;
this.editable=editable;
this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'refresh$',  function () {
var root=p$1.createTree$org_opensourcephysics_controls_XMLControl.apply(this, [this.control]);
this.displayProperty$org_opensourcephysics_controls_XMLTreeNode$Z(root, this.editable);
});

Clazz.newMeth(C$, 'getControl$',  function () {
return this.control;
});

Clazz.newMeth(C$, 'setSelectedNode$S',  function (propertyName) {
var root=this.tree.getModel$().getRoot$();
var e=root.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
var prop=node.getProperty$();
if (prop.getPropertyName$().equals$O(propertyName)) {
var path=Clazz.new_([node.getPath$()],$I$(3,1).c$$OA);
this.tree.setSelectionPath$javax_swing_tree_TreePath(path);
this.tree.scrollPathToVisible$javax_swing_tree_TreePath(path);
p$1.showInspector$org_opensourcephysics_controls_XMLTreeNode.apply(this, [node]);
return node;
}}
return null;
});

Clazz.newMeth(C$, 'setSelectedNode$javax_swing_tree_TreePath',  function (treePath) {
var elements=treePath.getPath$();
var root=this.tree.getModel$().getRoot$();
var node=null;
for (var i=0; i < elements.length; i++) {
node=this.getChildNode$org_opensourcephysics_controls_XMLTreeNode$S(root, elements[i].toString());
if (node == null ) break;
root=node;
}
if (node != null ) {
var path=Clazz.new_([node.getPath$()],$I$(3,1).c$$OA);
this.tree.setSelectionPath$javax_swing_tree_TreePath(path);
this.tree.scrollPathToVisible$javax_swing_tree_TreePath(path);
p$1.showInspector$org_opensourcephysics_controls_XMLTreeNode.apply(this, [node]);
return node;
}return null;
});

Clazz.newMeth(C$, 'getChildNode$org_opensourcephysics_controls_XMLTreeNode$S',  function (root, name) {
var e=root.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var node=e.nextElement$();
if (node.toString().equals$O(name)) {
return node;
}}
return null;
});

Clazz.newMeth(C$, 'displayProperty$org_opensourcephysics_controls_XMLTreeNode$Z',  function (node, editable) {
this.input.setVisible$Z(false);
var prop=node.getProperty$();
this.label.setText$S(prop.getPropertyType$() + " " + prop.getPropertyName$() );
if (!prop.getPropertyContent$().isEmpty$()) {
var value=prop.getPropertyContent$().get$I(0);
if (Clazz.instanceOf(value, "java.lang.String")) {
this.property=prop;
var content=$I$(4).removeCDATA$S(value);
this.input.setText$S(content);
this.input.setEditable$Z(editable);
this.input.setVisible$Z(true);
}}var xml=prop.toString();
this.xmlPane.setText$S(this.getDisplay$S(xml));
this.xmlPane.setCaretPosition$I(0);
});

Clazz.newMeth(C$, 'getDisplay$S',  function (xml) {
var newXML="";
var preArray="name=\"array\" type=\"string\">";
var postArray="</property>";
var array;
var i=xml.indexOf$S(preArray);
while (i > 0){
i+=preArray.length$();
newXML+=xml.substring$I$I(0, i);
xml=xml.substring$I(i);
i=xml.indexOf$S(postArray);
array=xml.substring$I$I(0, i);
xml=xml.substring$I$I(i, xml.length$());
if (array.length$() > this.maxStringLength) {
array=array.substring$I$I(0, this.maxStringLength - 3) + "...";
}newXML+=array;
i=xml.indexOf$S(preArray);
}
newXML+=xml;
return newXML;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var imageFile="/org/opensourcephysics/resources/controls/images/inspect.gif";
this.inspectIcon=$I$(5).getImageIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/controls/images/value.gif";
this.valueIcon=$I$(5).getImageIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/controls/images/folder.gif";
this.folderIcon=$I$(5).getImageIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/controls/images/inspectfolder.gif";
this.inspectFolderIcon=$I$(5).getImageIcon$S(imageFile);
this.popup=Clazz.new_($I$(6,1));
var item=Clazz.new_([$I$(8).getString$S("XMLTreePanel.Popup.MenuItem.Inspect")],$I$(7,1).c$$S);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.XMLTreePanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.getLastSelectedPathComponent$();
if (node != null ) {
p$1.showInspector$org_opensourcephysics_controls_XMLTreeNode.apply(this.b$['org.opensourcephysics.controls.XMLTreePanel'], [node]);
}});
})()
), Clazz.new_(P$.XMLTreePanel$1.$init$,[this, null])));
var root=p$1.createTree$org_opensourcephysics_controls_XMLControl.apply(this, [this.control]);
var toolbar=Clazz.new_($I$(9,1));
toolbar.setFloatable$Z(false);
this.label=Clazz.new_($I$(10,1));
toolbar.add$java_awt_Component(this.label);
this.input=Clazz.new_($I$(11,1).c$$I,[20]);
this.input.setVisible$Z(false);
this.input.addActionListener$java_awt_event_ActionListener(((P$.XMLTreePanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.XMLTreePanel'].property.setValue$S(this.b$['org.opensourcephysics.controls.XMLTreePanel'].input.getText$());
var obj=this.b$['org.opensourcephysics.controls.XMLTreePanel'].control.loadObject$O(null);
if (Clazz.instanceOf(obj, "java.awt.Component")) {
(obj).repaint$();
}this.b$['org.opensourcephysics.controls.XMLTreePanel'].input.setText$S(this.b$['org.opensourcephysics.controls.XMLTreePanel'].property.getPropertyContent$().get$I(0));
this.b$['org.opensourcephysics.controls.XMLTreePanel'].input.selectAll$();
var node=this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.getLastSelectedPathComponent$();
if (node != null ) {
this.b$['org.opensourcephysics.controls.XMLTreePanel'].displayProperty$org_opensourcephysics_controls_XMLTreeNode$Z.apply(this.b$['org.opensourcephysics.controls.XMLTreePanel'], [node, this.b$['org.opensourcephysics.controls.XMLTreePanel'].editable]);
}});
})()
), Clazz.new_(P$.XMLTreePanel$2.$init$,[this, null])));
this.input.addKeyListener$java_awt_event_KeyListener(((P$.XMLTreePanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (!this.b$['org.opensourcephysics.controls.XMLTreePanel'].editable) {
return;
}var comp=e.getSource$();
if (e.getKeyCode$() == 10) {
comp.setBackground$java_awt_Color($I$(12).white);
} else {
comp.setBackground$java_awt_Color($I$(12).yellow);
}});
})()
), Clazz.new_($I$(13,1),[this, null],P$.XMLTreePanel$3)));
this.input.addFocusListener$java_awt_event_FocusListener(((P$.XMLTreePanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var comp=e.getSource$();
comp.setBackground$java_awt_Color($I$(12).white);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.XMLTreePanel$4)));
toolbar.add$java_awt_Component(this.input);
this.xmlPane=$I$(15).newJTextPane$();
this.xmlPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[360, 200]));
this.xmlPane.setEditable$Z(false);
var xmlScroller=Clazz.new_($I$(1,1).c$$java_awt_Component,[this.xmlPane]);
var dataPanel=Clazz.new_([Clazz.new_($I$(2,1))],$I$(17,1).c$$java_awt_LayoutManager);
dataPanel.add$java_awt_Component$O(toolbar, "North");
dataPanel.add$java_awt_Component$O(xmlScroller, "Center");
var splitPane=Clazz.new_($I$(18,1).c$$I$java_awt_Component$java_awt_Component,[1, this.treeScroller, dataPanel]);
this.add$java_awt_Component$O(splitPane, "Center");
this.treeScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[140, 200]));
splitPane.setDividerLocation$I(140);
this.displayProperty$org_opensourcephysics_controls_XMLTreeNode$Z(root, this.editable);
});

Clazz.newMeth(C$, 'createTree$org_opensourcephysics_controls_XMLControl',  function (control) {
var root=Clazz.new_($I$(19,1).c$$org_opensourcephysics_controls_XMLProperty,[control]);
this.tree=Clazz.new_($I$(20,1).c$$javax_swing_tree_TreeNode,[root]);
this.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(Clazz.new_($I$(21,1),[this, null]));
this.tree.getSelectionModel$().setSelectionMode$I(1);
this.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(((P$.XMLTreePanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TreeSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
var node=this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.getLastSelectedPathComponent$();
if (node != null ) {
this.b$['org.opensourcephysics.controls.XMLTreePanel'].displayProperty$org_opensourcephysics_controls_XMLTreeNode$Z.apply(this.b$['org.opensourcephysics.controls.XMLTreePanel'], [node, this.b$['org.opensourcephysics.controls.XMLTreePanel'].editable]);
}});
})()
), Clazz.new_(P$.XMLTreePanel$5.$init$,[this, null])));
this.tree.addMouseListener$java_awt_event_MouseListener(this.getMouseListener$());
this.treeScroller.setViewportView$java_awt_Component(this.tree);
return root;
}, p$1);

Clazz.newMeth(C$, 'getMouseListener$',  function () {
return ((P$.XMLTreePanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(22).isPopupTrigger$java_awt_event_InputEvent(e)) {
var path=this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.setSelectionPath$javax_swing_tree_TreePath(path);
var node=this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.getLastSelectedPathComponent$();
if (node.isInspectable$()) {
this.b$['org.opensourcephysics.controls.XMLTreePanel'].popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree, e.getX$(), e.getY$() + 8);
}}});
})()
), Clazz.new_($I$(23,1),[this, null],P$.XMLTreePanel$6));
});

Clazz.newMeth(C$, 'showInspector$org_opensourcephysics_controls_XMLTreeNode',  function (node) {
if (node == null ) {
return;
}if (node.getProperty$().getPropertyType$() == 4) {
var arrayProp=node.getProperty$();
var inspector=$I$(24).getInspector$org_opensourcephysics_controls_XMLProperty(arrayProp);
if (inspector != null ) {
var name=arrayProp.getPropertyName$();
var parent=arrayProp.getParentProperty$();
while (!(Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl"))){
name=parent.getPropertyName$();
arrayProp=parent;
parent=parent.getParentProperty$();
}
var arrayControl=parent;
var arrayName=name;
var arrayObj=inspector.getArray$();
var parentNode=node.getParent$();
inspector.setEditable$Z(this.editable);
inspector.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.XMLTreePanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTreePanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("cell")) {
this.$finals$.arrayControl.setValue$S$O(this.$finals$.arrayName, this.$finals$.arrayObj);
this.b$['org.opensourcephysics.controls.XMLTreePanel'].control.loadObject$O(null);
var it=this.$finals$.arrayControl.getPropertyContent$().iterator$();
while (it.hasNext$()){
var next=it.next$();
if (next.getPropertyName$().equals$O(this.$finals$.arrayName)) {
for (var i=0; i < this.$finals$.parentNode.getChildCount$(); i++) {
var node=this.$finals$.parentNode.getChildAt$I(i);
if (node.getProperty$().getPropertyName$().equals$O(this.$finals$.arrayName)) {
var child=Clazz.new_($I$(19,1).c$$org_opensourcephysics_controls_XMLProperty,[next]);
var model=this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.getModel$();
if (Clazz.instanceOf(model, "javax.swing.tree.DefaultTreeModel")) {
var treeModel=model;
treeModel.removeNodeFromParent$javax_swing_tree_MutableTreeNode(node);
treeModel.insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I(child, this.$finals$.parentNode, i);
var path=Clazz.new_([child.getPath$()],$I$(3,1).c$$OA);
this.b$['org.opensourcephysics.controls.XMLTreePanel'].tree.setSelectionPath$javax_swing_tree_TreePath(path);
}break;
}}
break;
}}
}});
})()
), Clazz.new_(P$.XMLTreePanel$7.$init$,[this, {parentNode:parentNode,arrayControl:arrayControl,arrayObj:arrayObj,arrayName:arrayName}])));
var cont=this.getTopLevelAncestor$();
var p=cont.getLocationOnScreen$();
inspector.setLocation$I$I(p.x + 30, p.y + 30);
inspector.setVisible$Z(true);
}}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLTreePanel, "XMLRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z',  function (tree, value, sel, expanded, leaf, row, hasFocus) {
C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
var node=value;
if (node.isLeaf$()) {
if (node.isInspectable$()) {
this.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.controls.XMLTreePanel'].inspectIcon);
} else {
this.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.controls.XMLTreePanel'].valueIcon);
}} else if (node.isInspectable$()) {
this.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.controls.XMLTreePanel'].inspectFolderIcon);
} else {
this.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.controls.XMLTreePanel'].folderIcon);
}return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
