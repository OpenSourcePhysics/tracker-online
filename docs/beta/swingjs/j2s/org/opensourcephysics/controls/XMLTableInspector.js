(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.XMLTable','org.opensourcephysics.controls.XML','java.awt.event.WindowAdapter','org.opensourcephysics.controls.OSPControlTable','org.opensourcephysics.controls.XMLControlElement','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTableInspector", null, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['changed'],'O',['table','org.opensourcephysics.controls.XMLTable']]
,['S',['frameTitle']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
C$.c$$org_opensourcephysics_controls_XMLControl$Z$Z.apply(this, [control, true, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl$Z',  function (control, editable) {
C$.c$$org_opensourcephysics_controls_XMLControl$Z$Z.apply(this, [control, editable, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl$Z$Z',  function (control, editable, modal) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[null, modal]);C$.$init$.apply(this);
p$1.createGUI.apply(this, []);
var table=Clazz.new_($I$(2,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
table.setEditable$Z(editable);
this.setTable$org_opensourcephysics_controls_XMLTable(table);
var s=$I$(3,"getExtension$S",[control.getObjectClassName$()]);
this.setTitle$S(C$.frameTitle + " " + s + " \"" + control.getPropertyName$() + "\" " );
this.addWindowListener$java_awt_event_WindowListener(((P$.XMLTableInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTableInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
if (this.b$['org.opensourcephysics.controls.XMLTableInspector'].changed) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["xmlData", null, null]);
this.b$['org.opensourcephysics.controls.XMLTableInspector'].changed=false;
}});
})()
), Clazz.new_($I$(4,1),[this, null],P$.XMLTableInspector$1)));
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z',  function (editable, modal) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[null, modal]);C$.$init$.apply(this);
this.table=Clazz.new_([Clazz.new_($I$(6,1))],$I$(5,1).c$$org_opensourcephysics_controls_XMLControlElement);
this.table.setEditable$Z(editable);
this.table.addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.table.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tableData", this);
p$1.createGUI.apply(this, []);
var s=$I$(3,"getExtension$S",[this.getXMLControl$().getObjectClassName$()]);
this.setTitle$S(C$.frameTitle + " " + s + " \"" + this.getXMLControl$().getPropertyName$() + "\" " );
}, 1);

Clazz.newMeth(C$, 'getControl$',  function () {
return (Clazz.instanceOf(this.table, "org.opensourcephysics.controls.Control")) ? this.table : this.table.tableModel.control;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.changed=true;
this.firePropertyChange$S$O$O(e.getPropertyName$(), e.getOldValue$(), e.getNewValue$());
});

Clazz.newMeth(C$, 'getTable$',  function () {
return this.table;
});

Clazz.newMeth(C$, 'setTable$org_opensourcephysics_controls_XMLTable',  function (xmlTable) {
if (this.table != null ) {
this.table.removePropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.table.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tableData", this);
xmlTable.setEditable$Z(this.table.isEditable$());
}this.table=xmlTable;
this.table.addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.table.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tableData", this);
var scrollpane=Clazz.new_($I$(7,1).c$$java_awt_Component,[this.table]);
scrollpane.createHorizontalScrollBar$();
this.getContentPane$().add$java_awt_Component$O(scrollpane, "Center");
});

Clazz.newMeth(C$, 'getXMLControl$',  function () {
return this.table.tableModel.control;
});

Clazz.newMeth(C$, 'createGUI',  function () {
this.setSize$I$I(400, 300);
this.setContentPane$java_awt_Container(Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$java_awt_LayoutManager));
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.frameTitle=$I$(1).getString$S("XMLTableInspector.Title");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
