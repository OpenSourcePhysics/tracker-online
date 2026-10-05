(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.LaunchRes','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JTextField','javax.swing.BorderFactory','org.opensourcephysics.tools.FontSizer','java.awt.Color','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','javax.swing.JOptionPane','java.util.HashMap','java.util.ArrayList',['org.opensourcephysics.tools.LaunchSaver','.Editor'],'org.opensourcephysics.display.OSPRuntime','java.awt.Toolkit','javax.swing.tree.TreePath','org.opensourcephysics.tools.Launcher','org.opensourcephysics.controls.XML',['org.opensourcephysics.tools.Launcher','.LaunchSet'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XMLTreePanel','javax.swing.JDialog','java.awt.Dimension','java.awt.GridLayout','javax.swing.JToolBar','javax.swing.JButton','javax.swing.JCheckBox','javax.swing.Box','java.awt.event.WindowAdapter',['org.opensourcephysics.tools.LaunchSaver','.Node'],'javax.swing.tree.DefaultTreeModel','javax.swing.JTree',['org.opensourcephysics.tools.LaunchSaver','.Renderer'],'java.awt.event.MouseAdapter',['org.opensourcephysics.tools.LaunchSaver','.ExpansionListener'],'java.awt.font.FontRenderContext','javax.swing.JScrollPane','java.io.File','org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchSaver", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['Node',2],['Renderer',0],['Editor',2],['ExpansionListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.prevNodeNames=Clazz.new_($I$(12,1));
this.prevNodeSelfContains=Clazz.new_($I$(12,1));
this.treePaths=Clazz.new_($I$(13,1));
this.approved=false;
this.editor=Clazz.new_($I$(14,1),[this, null]);
},1);

C$.$fields$=[['Z',['prevTabSetSelfContained','approved','active'],'S',['prevTabSetName','prevTabSetBasePath'],'O',['prevNodeNames','java.util.Map','+prevNodeSelfContains','builder','org.opensourcephysics.tools.LaunchBuilder','treeModel','javax.swing.tree.DefaultTreeModel','tree','javax.swing.JTree','treePaths','java.util.ArrayList','pathField','javax.swing.JTextField','saveStateCheckBox','javax.swing.JCheckBox','chooseButton','javax.swing.JButton','+inspectButton','root','org.opensourcephysics.tools.LaunchSaver.Node','treeScroller','javax.swing.JScrollPane','editor','org.opensourcephysics.tools.LaunchSaver.Editor','inspector','javax.swing.JDialog']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchBuilder',  function (builder) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[builder.frame, true]);C$.$init$.apply(this);
p$1.createGUI.apply(this, []);
this.setBuilder$org_opensourcephysics_tools_LaunchBuilder(builder);
if ($I$(7).getLevel$() != 0) {
$I$(7,"setFonts$O$I",[this.getContentPane$(), $I$(7).getLevel$()]);
}if (!$I$(15).isJS) this.pack$();
var dim=$I$(16).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'setBuilder$org_opensourcephysics_tools_LaunchBuilder',  function (builder) {
this.builder=builder;
p$1.createTree.apply(this, []);
p$1.refresh.apply(this, []);
this.approved=false;
});

Clazz.newMeth(C$, 'setSelectedNode$org_opensourcephysics_tools_LaunchSaver_Node',  function (node) {
if (node == null ) {
return;
}this.tree.setSelectionPath$javax_swing_tree_TreePath(Clazz.new_([node.getPath$()],$I$(17,1).c$$OA));
});

Clazz.newMeth(C$, 'getSelectedNode$',  function () {
var path=this.tree.getSelectionPath$();
if (path == null ) {
return null;
}return path.getLastPathComponent$();
});

Clazz.newMeth(C$, 'isApproved$',  function () {
return this.approved;
});

Clazz.newMeth(C$, 'refresh',  function () {
this.inspectButton.setEnabled$Z(this.getSelectedNode$() != null );
var path=null;
if (!$I$(18).tabSetBasePath.equals$O("")) {
path=$I$(18).tabSetBasePath;
} else if (this.builder.jarBasePath != null ) {
path=this.builder.jarBasePath;
} else {
path=$I$(19,"forwardSlash$S",[$I$(19).getUserDirectory$()]);
}if (path.indexOf$S("javaws") > -1) {
path=$I$(19,"forwardSlash$S",[$I$(15).getUserHome$()]);
$I$(18).tabSetBasePath=path;
}this.pathField.setText$S(path + "/");
this.pathField.setBackground$java_awt_Color($I$(8).white);
this.treeModel.nodeChanged$javax_swing_tree_TreeNode(this.root);
this.tree.repaint$();
}, p$1);

Clazz.newMeth(C$, 'inspectSelectedNode',  function () {
var node=this.getSelectedNode$();
if (node == null ) {
node=this.root;
}var obj=node.node;
if (obj == null ) {
obj=Clazz.new_($I$(20,1).c$$org_opensourcephysics_tools_Launcher$S,[this.builder, null, this.builder, this.builder.tabSetName]);
}var xml=Clazz.new_($I$(21,1).c$$O,[obj]);
var treePanel=Clazz.new_($I$(22,1).c$$org_opensourcephysics_controls_XMLControl$Z,[xml, false]);
this.inspector.setContentPane$java_awt_Container(treePanel);
var name=(node !== this.root ) ? node.node.getFileName$() : this.builder.tabSetName;
name=$I$(19,"getResolvedPath$S$S",[name, $I$(18).tabSetBasePath]);
this.inspector.setTitle$S($I$(1).getString$S("Inspector.Title.File") + " \"" + name + "\"" );
this.inspector.setVisible$Z(true);
}, p$1);

Clazz.newMeth(C$, 'revert',  function () {
$I$(18).tabSetBasePath=this.prevTabSetBasePath;
this.builder.tabSetName=this.prevTabSetName;
this.builder.selfContained=this.prevTabSetSelfContained;
for (var i=0; i < this.builder.tabbedPane.getTabCount$(); i++) {
var root=this.builder.getTab$I(i).getRootNode$();
root.parentSelfContained=this.prevTabSetSelfContained;
}
var it=this.prevNodeNames.keySet$().iterator$();
while (it.hasNext$()){
var node=it.next$();
var path=this.prevNodeNames.get$O(node);
node.node.setFileName$S(path);
var bool=this.prevNodeSelfContains.get$O(node);
node.node.setSelfContained$Z(bool.booleanValue$());
}
}, p$1);

Clazz.newMeth(C$, 'setTabSetBasePath$S',  function (path) {
path=$I$(19).forwardSlash$S(path);
var leadingSlash=false;
while (path.startsWith$S("/")){
leadingSlash=true;
path=path.substring$I(1);
}
if (leadingSlash) {
path="/" + path;
}while (path.endsWith$S("/")){
path=path.substring$I$I(0, path.length$() - 1);
}
if (!path.startsWith$S("/") && (path.indexOf$S(":") == -1) ) {
var base=$I$(19,"forwardSlash$S",[$I$(19).getUserDirectory$()]);
if (this.builder.jarBasePath != null ) {
base=this.builder.jarBasePath;
}if (!path.equals$O("")) {
base+="/";
}path=base + path;
}$I$(18).tabSetBasePath=path;
p$1.refresh.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setTabSetName$S',  function (proposed) {
var name=$I$(19).getName$S(proposed);
if (!"xset".equals$O($I$(19).getExtension$S(name))) {
while (name.indexOf$S(".") > -1){
name=name.substring$I$I(0, name.length$() - 1);
}
name+=".xset";
}this.builder.tabSetName=name;
p$1.refresh.apply(this, []);
return name;
}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.inspector=Clazz.new_($I$(23,1).c$$java_awt_Dialog$Z,[this, false]);
this.inspector.setSize$java_awt_Dimension(Clazz.new_($I$(24,1).c$$I$I,[600, 300]));
var dim=$I$(16).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.inspector.getBounds$().width)/2|0);
var y=((dim.height - this.inspector.getBounds$().height)/2|0);
this.inspector.setLocation$I$I(x, y);
this.setTitle$S($I$(1).getString$S("Saver.Title"));
var panel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
panel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(24,1).c$$I$I,[600, 300]));
this.setContentPane$java_awt_Container(panel);
var legend=Clazz.new_([Clazz.new_($I$(25,1).c$$I$I,[1, 4])],$I$(2,1).c$$java_awt_LayoutManager);
panel.add$java_awt_Component$O(legend, "North");
var label=Clazz.new_([$I$(1).getString$S("Saver.Legend.New"), $I$(18).greenFileIcon, 0],$I$(4,1).c$$S$javax_swing_Icon$I);
label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
legend.add$java_awt_Component(label);
label=Clazz.new_([$I$(1).getString$S("Saver.Legend.Replace"), $I$(18).yellowFileIcon, 0],$I$(4,1).c$$S$javax_swing_Icon$I);
label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
legend.add$java_awt_Component(label);
label=Clazz.new_([$I$(1).getString$S("Saver.Legend.ReadOnly"), $I$(18).redFileIcon, 0],$I$(4,1).c$$S$javax_swing_Icon$I);
label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
legend.add$java_awt_Component(label);
label=Clazz.new_([$I$(1).getString$S("Saver.Legend.SelfContained"), $I$(18).whiteFolderIcon, 0],$I$(4,1).c$$S$javax_swing_Icon$I);
label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
legend.add$java_awt_Component(label);
legend.setBorder$javax_swing_border_Border($I$(6).createLoweredBevelBorder$());
var lower=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
panel.add$java_awt_Component$O(lower, "South");
var toolbar=Clazz.new_($I$(26,1));
toolbar.setFloatable$Z(false);
lower.add$java_awt_Component$O(toolbar, "North");
label=Clazz.new_([$I$(1).getString$S("Saver.Label.Base")],$I$(4,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 2, 0, 4));
toolbar.add$java_awt_Component(label);
this.pathField=Clazz.new_($I$(5,1));
this.pathField.addKeyListener$java_awt_event_KeyListener(((P$.LaunchSaver$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
p$1.setTabSetBasePath$S.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], [this.b$['org.opensourcephysics.tools.LaunchSaver'].pathField.getText$()]);
} else {
this.b$['org.opensourcephysics.tools.LaunchSaver'].pathField.setBackground$java_awt_Color($I$(8).yellow);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.LaunchSaver$1)));
this.pathField.addFocusListener$java_awt_event_FocusListener(((P$.LaunchSaver$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setTabSetBasePath$S.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], [this.b$['org.opensourcephysics.tools.LaunchSaver'].pathField.getText$()]);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.LaunchSaver$2)));
toolbar.add$java_awt_Component(this.pathField);
this.chooseButton=Clazz.new_([$I$(1).getString$S("Saver.Button.Choose")],$I$(27,1).c$$S);
this.chooseButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchSaver$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.chooseTabSet.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
});
})()
), Clazz.new_(P$.LaunchSaver$3.$init$,[this, null])));
this.inspectButton=Clazz.new_([$I$(1).getString$S("MenuItem.Inspect")],$I$(27,1).c$$S);
this.inspectButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchSaver$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.inspectSelectedNode.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
});
})()
), Clazz.new_(P$.LaunchSaver$4.$init$,[this, null])));
this.saveStateCheckBox=Clazz.new_([$I$(1).getString$S("Saver.Checkbox.SaveState")],$I$(28,1).c$$S);
this.saveStateCheckBox.setOpaque$Z(false);
var buttonbar=Clazz.new_($I$(26,1));
buttonbar.setFloatable$Z(false);
buttonbar.add$java_awt_Component($I$(29).createHorizontalGlue$());
buttonbar.add$java_awt_Component($I$(29).createHorizontalGlue$());
buttonbar.add$java_awt_Component($I$(29).createHorizontalGlue$());
var buttons=Clazz.new_($I$(2,1));
buttons.setOpaque$Z(false);
buttonbar.add$java_awt_Component(buttons);
buttons.add$java_awt_Component(this.saveStateCheckBox);
buttons.add$java_awt_Component(this.inspectButton);
buttons.add$java_awt_Component(this.chooseButton);
lower.add$java_awt_Component$O(buttonbar, "South");
var saveButton=Clazz.new_([$I$(1).getString$S("Saver.Button.Save")],$I$(27,1).c$$S);
buttons.add$java_awt_Component(saveButton);
saveButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchSaver$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchSaver'].approved=true;
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.LaunchSaver$5.$init$,[this, null])));
var cancelButton=Clazz.new_([$I$(1).getString$S("Saver.Button.Cancel")],$I$(27,1).c$$S);
buttons.add$java_awt_Component(cancelButton);
cancelButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchSaver$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.revert.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.LaunchSaver$6.$init$,[this, null])));
this.addWindowListener$java_awt_event_WindowListener(((P$.LaunchSaver$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.LaunchSaver'].isApproved$.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], [])) {
p$1.revert.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
}});
})()
), Clazz.new_($I$(30,1),[this, null],P$.LaunchSaver$7)));
}, p$1);

Clazz.newMeth(C$, 'createTree',  function () {
this.active=false;
this.treePaths.clear$();
this.prevNodeNames.clear$();
this.prevNodeSelfContains.clear$();
this.prevTabSetName=this.builder.tabSetName;
this.prevTabSetBasePath=$I$(18).tabSetBasePath;
this.prevTabSetSelfContained=this.builder.selfContained;
this.root=Clazz.new_($I$(31,1),[this, null]);
this.treePaths.add$O(Clazz.new_([this.root.getPath$()],$I$(17,1).c$$OA));
var n=this.builder.tabbedPane.getTabCount$();
for (var i=0; i < n; i++) {
var tab=Clazz.new_([this, null, this.builder.getTab$I(i).getRootNode$()],$I$(31,1).c$$org_opensourcephysics_tools_LaunchNode);
if (tab.node.getFileName$() != null ) {
this.root.add$javax_swing_tree_MutableTreeNode(tab);
p$1.addChildren$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [tab]);
} else {
var nodes=tab.node.getChildOwnedNodes$();
for (var k=0; k < nodes.length; k++) {
var node=Clazz.new_($I$(31,1).c$$org_opensourcephysics_tools_LaunchNode,[this, null, nodes[k]]);
this.root.add$javax_swing_tree_MutableTreeNode(node);
p$1.addChildren$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [node]);
}
}}
this.treeModel=Clazz.new_($I$(32,1).c$$javax_swing_tree_TreeNode,[this.root]);
this.tree=Clazz.new_($I$(33,1).c$$javax_swing_tree_TreeModel,[this.treeModel]);
this.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(Clazz.new_($I$(34,1),[this, null]));
this.tree.setCellEditor$javax_swing_tree_TreeCellEditor(this.editor);
this.tree.setEditable$Z(true);
this.tree.setShowsRootHandles$Z(true);
this.tree.getSelectionModel$().setSelectionMode$I(1);
this.tree.addMouseListener$java_awt_event_MouseListener(((P$.LaunchSaver$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var path=this.b$['org.opensourcephysics.tools.LaunchSaver'].tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
this.b$['org.opensourcephysics.tools.LaunchSaver'].editor.stopCellEditing$();
}});
})()
), Clazz.new_($I$(35,1),[this, null],P$.LaunchSaver$8)));
this.tree.addTreeWillExpandListener$javax_swing_event_TreeWillExpandListener(Clazz.new_($I$(36,1),[this, null]));
this.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(((P$.LaunchSaver$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TreeSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LaunchSaver'].inspector.isVisible$()) {
p$1.inspectSelectedNode.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
}});
})()
), Clazz.new_(P$.LaunchSaver$9.$init$,[this, null])));
var frc=Clazz.new_($I$(37,1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
var font=this.editor.field.getFont$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext("A", frc);
var h=(rect.getHeight$()|0);
this.tree.setRowHeight$I(h + 3);
this.tree.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(4, 0, 2, 0));
if (this.treeScroller != null ) {
this.getContentPane$().remove$java_awt_Component(this.treeScroller);
}this.treeScroller=Clazz.new_($I$(38,1).c$$java_awt_Component,[this.tree]);
this.getContentPane$().add$java_awt_Component$O(this.treeScroller, "Center");
this.setSelectedNode$org_opensourcephysics_tools_LaunchSaver_Node(this.root);
var it=this.treePaths.listIterator$();
while (it.hasNext$()){
var path=it.next$();
this.tree.expandPath$javax_swing_tree_TreePath(path);
}
while (it.hasPrevious$()){
var path=it.previous$();
var node=path.getLastPathComponent$();
if (p$1.isFolder$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [node])) {
this.tree.collapsePath$javax_swing_tree_TreePath(path);
}}
this.active=true;
}, p$1);

Clazz.newMeth(C$, 'addChildren$org_opensourcephysics_tools_LaunchSaver_Node',  function (node) {
this.prevNodeNames.put$O$O(node, node.node.getFileName$());
this.prevNodeSelfContains.put$O$O(node, Boolean.valueOf$Z(node.node.selfContained));
this.treePaths.add$O(Clazz.new_([node.getPath$()],$I$(17,1).c$$OA));
var nodes=node.node.getChildOwnedNodes$();
for (var k=0; k < nodes.length; k++) {
var child=Clazz.new_($I$(31,1).c$$org_opensourcephysics_tools_LaunchNode,[this, null, nodes[k]]);
node.add$javax_swing_tree_MutableTreeNode(child);
p$1.addChildren$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [child]);
}
}, p$1);

Clazz.newMeth(C$, 'isFolder$org_opensourcephysics_tools_LaunchSaver_Node',  function (node) {
if (node === this.root ) {
return this.builder.selfContained;
}return node.node.selfContained && !node.isLeaf$() ;
}, p$1);

Clazz.newMeth(C$, 'chooseTabSet',  function () {
var fileName=$I$(19,"getResolvedPath$S$S",[this.builder.tabSetName, $I$(18).tabSetBasePath]);
var chooser=$I$(18).getXMLChooser$();
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(39,1).c$$S,[fileName]));
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(18).xsetFileFilter);
var result=chooser.showDialog$java_awt_Component$S(this, $I$(1).getString$S("Saver.FileChooser.Title"));
if (result == 0) {
var file=chooser.getSelectedFile$();
fileName=file.getAbsolutePath$();
p$1.setTabSetName$S.apply(this, [fileName]);
p$1.setTabSetBasePath$S.apply(this, [$I$(19).getDirectoryPath$S(fileName)]);
}p$1.refresh.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getIcon$org_opensourcephysics_tools_LaunchSaver_Node',  function (node) {
var file;
if (node === this.root ) {
var path=$I$(19,"getResolvedPath$S$S",[this.builder.tabSetName, $I$(18).tabSetBasePath]);
var res=$I$(40).getResource$S(path);
file=((res == null ) ? null : res.getFile$());
} else {
file=node.node.getFile$();
}if (file == null ) {
if (p$1.isFolder$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [node])) {
return $I$(18).greenFolderIcon;
}return $I$(18).greenFileIcon;
} else if (file.canWrite$()) {
if (p$1.isFolder$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [node])) {
return $I$(18).yellowFolderIcon;
}return $I$(18).yellowFileIcon;
} else {
if (p$1.isFolder$org_opensourcephysics_tools_LaunchSaver_Node.apply(this, [node])) {
return $I$(18).redFolderIcon;
}return $I$(18).redFileIcon;
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchSaver, "Node", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['node','org.opensourcephysics.tools.LaunchNode']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchNode',  function (node) {
Clazz.super_(C$, this);
this.node=node;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
if (this.node == null ) {
return $I$(1).getString$S("Saver.Tree.TabSet") + ":";
} else if (this.node.isRoot$()) {
return $I$(1).getString$S("Saver.Tree.Tab") + " \"" + this.node.name + "\":" ;
} else {
return $I$(1).getString$S("Saver.Tree.Node") + " \"" + this.node.name + "\":" ;
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchSaver, "Renderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.tree.TreeCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.label=Clazz.new_($I$(4,1));
this.field=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['panel','javax.swing.JPanel','label','javax.swing.JLabel','field','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.panel.add$java_awt_Component$O(this.label, "West");
this.panel.add$java_awt_Component$O(this.field, "Center");
this.panel.setOpaque$Z(false);
this.label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 0, 0, 5));
this.field.setBorder$javax_swing_border_Border(null);
this.field.setBackground$java_awt_Color(this.field.getSelectionColor$());
}, 1);

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z',  function (tree, value, selected, expanded, leaf, row, hasFocus) {
var node=value;
var name=(node !== this.b$['org.opensourcephysics.tools.LaunchSaver'].root ) ? node.node.getFileName$() : this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.tabSetName;
this.field.setText$S(name);
this.label.setIcon$javax_swing_Icon(p$1.getIcon$org_opensourcephysics_tools_LaunchSaver_Node.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], [node]));
this.label.setText$S(node.toString());
if ($I$(7).getLevel$() != 0) {
$I$(7,"setFonts$O$I",[this.panel, $I$(7).getLevel$()]);
}this.field.setOpaque$Z(selected ? true : false);
return this.panel;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchSaver, "Editor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.tree.TreeCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.field=Clazz.new_($I$(5,1));
this.label=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['panel','javax.swing.JPanel','field','javax.swing.JTextField','label','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.panel.add$java_awt_Component$O(this.label, "West");
this.panel.add$java_awt_Component$O(this.field, "Center");
this.panel.setOpaque$Z(false);
this.label.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(0, 0, 0, 4));
this.field.setBorder$javax_swing_border_Border($I$(6,"createLineBorder$java_awt_Color",[$I$(8).black]));
this.field.setEditable$Z(true);
this.field.setColumns$I(30);
this.field.addActionListener$java_awt_event_ActionListener(((P$.LaunchSaver$Editor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$Editor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
});
})()
), Clazz.new_(P$.LaunchSaver$Editor$1.$init$,[this, null])));
this.field.addKeyListener$java_awt_event_KeyListener(((P$.LaunchSaver$Editor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$Editor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
} else {
this.b$['org.opensourcephysics.tools.LaunchSaver.Editor'].field.setBackground$java_awt_Color($I$(8).yellow);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.LaunchSaver$Editor$2)));
this.field.addFocusListener$java_awt_event_FocusListener(((P$.LaunchSaver$Editor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchSaver$Editor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.LaunchSaver$Editor$3)));
}, 1);

Clazz.newMeth(C$, 'getTreeCellEditorComponent$javax_swing_JTree$O$Z$Z$Z$I',  function (tree, value, selected, expanded, leaf, row) {
var node=value;
var name=(node !== this.b$['org.opensourcephysics.tools.LaunchSaver'].root ) ? node.node.getFileName$() : this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.tabSetName;
this.field.setText$S(name);
this.label.setIcon$javax_swing_Icon(p$1.getIcon$org_opensourcephysics_tools_LaunchSaver_Node.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], [node]));
this.label.setText$S(node.toString());
if ($I$(7).getLevel$() != 0) {
$I$(7,"setFonts$O$I",[this.panel, $I$(7).getLevel$()]);
}return this.panel;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
if (Clazz.instanceOf(e, "java.awt.event.MouseEvent")) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
this.field.setBackground$java_awt_Color($I$(8).white);
var node=this.b$['org.opensourcephysics.tools.LaunchSaver'].getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
var name=this.field.getText$();
var prev;
if (node.node != null ) {
prev=node.node.getFileName$();
} else {
prev=this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.tabSetName;
}if (this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.getOpenPaths$().contains$O(name) && !prev.equals$O(name) ) {
$I$(11,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.LaunchSaver'], $I$(1).getString$S("Dialog.DuplicateFileName.Message") + " \"" + name + "\"" , $I$(1).getString$S("Dialog.DuplicateFileName.Title"), 2]);
p$1.refresh.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
return null;
}if (node.node != null ) {
node.node.setFileName$S(name);
} else {
name=p$1.setTabSetName$S.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], [name]);
}return name;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchSaver, "ExpansionListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TreeWillExpandListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'treeWillExpand$javax_swing_event_TreeExpansionEvent',  function (e) {
var path=e.getPath$();
p$2.set$javax_swing_tree_TreePath$Z.apply(this, [path, false]);
});

Clazz.newMeth(C$, 'treeWillCollapse$javax_swing_event_TreeExpansionEvent',  function (e) {
var path=e.getPath$();
p$2.set$javax_swing_tree_TreePath$Z.apply(this, [path, true]);
});

Clazz.newMeth(C$, 'set$javax_swing_tree_TreePath$Z',  function (path, selfContained) {
if (this.b$['org.opensourcephysics.tools.LaunchSaver'].active) {
var node=path.getLastPathComponent$();
if (node === this.b$['org.opensourcephysics.tools.LaunchSaver'].root ) {
this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.selfContained=selfContained;
for (var i=0; i < this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.tabbedPane.getTabCount$(); i++) {
var root=this.b$['org.opensourcephysics.tools.LaunchSaver'].builder.getTab$I(i).getRootNode$();
root.parentSelfContained=selfContained;
}
} else {
node.node.setSelfContained$Z(selfContained);
}if (this.b$['org.opensourcephysics.tools.LaunchSaver'].inspector.isVisible$()) {
p$1.inspectSelectedNode.apply(this.b$['org.opensourcephysics.tools.LaunchSaver'], []);
}}}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
