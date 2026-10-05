(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javax.swing.JPopupMenu','javax.swing.JMenuItem','StringBuffer','javax.swing.JOptionPane','org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','org.opensourcephysics.controls.XMLControlElement',['test.RenumberTRK','.MyXMLTreePanel'],'javax.swing.JFrame','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JButton','java.awt.Dimension','java.io.File']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RenumberTRK", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MyXMLTreePanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['filePath'],'O',['treePanel','org.opensourcephysics.controls.XMLTreePanel']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var app=Clazz.new_(C$);
app.open$();
}, 1);

Clazz.newMeth(C$, 'inspectXML$S',  function (path) {
var xml=Clazz.new_($I$(7,1).c$$S,[path]);
if (this.treePanel == null ) {
this.treePanel=Clazz.new_($I$(8,1).c$$org_opensourcephysics_controls_XMLControl,[this, null, xml]);
var frame=Clazz.new_($I$(9,1));
frame.setDefaultCloseOperation$I(3);
frame.setTitle$S("XML Inspector");
var panel=Clazz.new_([Clazz.new_($I$(11,1))],$I$(10,1).c$$java_awt_LayoutManager);
panel.add$java_awt_Component$O(this.treePanel, "Center");
var buttonbar=Clazz.new_($I$(10,1));
panel.add$java_awt_Component$O(buttonbar, "South");
var savebutton=Clazz.new_($I$(12,1).c$$S,["Save Changes"]);
savebutton.addActionListener$java_awt_event_ActionListener(((P$.RenumberTRK$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RenumberTRK$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['test.RenumberTRK'].treePanel.getControl$.apply(this.b$['test.RenumberTRK'].treePanel, []).write$S.apply(this.b$['test.RenumberTRK'].treePanel.getControl$.apply(this.b$['test.RenumberTRK'].treePanel, []), [this.b$['test.RenumberTRK'].filePath]);
});
})()
), Clazz.new_(P$.RenumberTRK$lambda1.$init$,[this, null])));
buttonbar.add$java_awt_Component(savebutton);
var openbutton=Clazz.new_($I$(12,1).c$$S,["Open TRK..."]);
openbutton.addActionListener$java_awt_event_ActionListener(((P$.RenumberTRK$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RenumberTRK$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['test.RenumberTRK'].open$.apply(this.b$['test.RenumberTRK'], []);
});
})()
), Clazz.new_(P$.RenumberTRK$lambda2.$init$,[this, null])));
buttonbar.add$java_awt_Component(openbutton);
frame.setContentPane$java_awt_Container(panel);
frame.setSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[800, 800]));
frame.setVisible$Z(true);
} else {
this.treePanel.getControl$().readXML$S(xml.toXML$());
this.treePanel.refresh$();
}this.treePanel.setSelectedNode$S("tracks");
});

Clazz.newMeth(C$, 'open$',  function () {
var chooser=$I$(5).getChooser$();
if (chooser == null ) {
return;
}var chooserPath=$I$(5).getPreference$S("file_chooser_directory");
if (chooserPath != null ) {
chooser.setCurrentDirectory$java_io_File(Clazz.new_($I$(14,1).c$$S,[chooserPath]));
}chooser.setDialogTitle$S("Open");
chooser.resetChoosableFileFilters$();
chooser.setAcceptAllFileFilterUsed$Z(true);
var ok=((P$.RenumberTRK$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RenumberTRK$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.chooser.getSelectedFile$();
$I$(5,"setPreference$S$O",["file_chooser_directory", file.getParent$()]);
$I$(5).savePreferences$();
var path=file.getAbsolutePath$();
if (path.toLowerCase$().endsWith$S(".trk")) {
this.b$['test.RenumberTRK'].filePath=file.getAbsolutePath$();
this.b$['test.RenumberTRK'].inspectXML$S.apply(this.b$['test.RenumberTRK'], [this.b$['test.RenumberTRK'].filePath]);
}});
})()
), Clazz.new_(P$.RenumberTRK$1.$init$,[this, {chooser:chooser}]));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, ok, (P$.RenumberTRK$lambda3$||(P$.RenumberTRK$lambda3$=(((P$.RenumberTRK$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RenumberTRK$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
});
})()
), Clazz.new_(P$.RenumberTRK$lambda3.$init$,[this, null]))))));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RenumberTRK, "MyXMLTreePanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.controls.XMLTreePanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
;C$.superclazz.c$$org_opensourcephysics_controls_XMLControl.apply(this,[control]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
C$.superclazz.prototype.createGUI$.apply(this, []);
this.popup=Clazz.new_($I$(1,1));
var item=Clazz.new_($I$(2,1).c$$S,["Renumber"]);
this.popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.RenumberTRK$MyXMLTreePanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RenumberTRK$MyXMLTreePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var node=this.b$['test.RenumberTRK.MyXMLTreePanel'].tree.getLastSelectedPathComponent$();
var prop=node.getProperty$();
var xml=prop.toString();
var controlXML=this.b$['org.opensourcephysics.controls.XMLTreePanel'].getControl$.apply(this.b$['org.opensourcephysics.controls.XMLTreePanel'], []).toXML$();
var insertAt=controlXML.indexOf$S(xml);
if (insertAt == -1) return;
var pre=controlXML.substring$I$I(0, insertAt);
var post=controlXML.substring$I(insertAt + xml.length$());
var k=this.b$['test.RenumberTRK.MyXMLTreePanel'].getShift$.apply(this.b$['test.RenumberTRK.MyXMLTreePanel'], []);
if (k == 0) return;
var buf=Clazz.new_($I$(3,1));
var toMatch="property name=\"[";
var n=xml.indexOf$S(toMatch);
while (n > -1){
buf.append$S(xml.substring$I$I(0, n + toMatch.length$()));
xml=xml.substring$I(n + toMatch.length$());
n=xml.indexOf$S("]");
var i=Integer.parseInt$S(xml.substring$I$I(0, n));
buf.append$S(String.valueOf$I(i + k));
xml=xml.substring$I(n);
n=xml.indexOf$S(toMatch);
}
buf.append$S(xml);
xml=buf.toString();
controlXML=pre + xml + post ;
this.b$['org.opensourcephysics.controls.XMLTreePanel'].getControl$.apply(this.b$['org.opensourcephysics.controls.XMLTreePanel'], []).readXML$S(controlXML);
var treePath=this.b$['test.RenumberTRK.MyXMLTreePanel'].tree.getSelectionPath$();
this.b$['test.RenumberTRK.MyXMLTreePanel'].refresh$javax_swing_tree_TreePath.apply(this.b$['test.RenumberTRK.MyXMLTreePanel'], [treePath]);
});
})()
), Clazz.new_(P$.RenumberTRK$MyXMLTreePanel$1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getShift$',  function () {
var shift=$I$(4).showInputDialog$O("Shift array numbering by:");
if ("".equals$O(shift.trim$())) return 0;
try {
return Integer.parseInt$S(shift);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return this.getShift$();
});

Clazz.newMeth(C$, 'refresh$javax_swing_tree_TreePath',  function (path) {
this.refresh$();
this.setSelectedNode$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'getMouseListener$',  function () {
return ((P$.RenumberTRK$MyXMLTreePanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "RenumberTRK$MyXMLTreePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(5).isPopupTrigger$java_awt_event_InputEvent(e)) {
var path=this.b$['test.RenumberTRK.MyXMLTreePanel'].tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path == null ) {
return;
}this.b$['test.RenumberTRK.MyXMLTreePanel'].tree.setSelectionPath$javax_swing_tree_TreePath(path);
var node=this.b$['test.RenumberTRK.MyXMLTreePanel'].tree.getLastSelectedPathComponent$();
var prop=node.getProperty$();
if (prop.getPropertyType$() == 4 && prop.getPropertyName$().equals$O("framedata") ) {
this.b$['test.RenumberTRK.MyXMLTreePanel'].popup.show$java_awt_Component$I$I(this.b$['test.RenumberTRK.MyXMLTreePanel'].tree, e.getX$(), e.getY$() + 8);
}}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.RenumberTRK$MyXMLTreePanel$2));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
