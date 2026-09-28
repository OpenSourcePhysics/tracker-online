(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.OSPControlTable','org.opensourcephysics.controls.XML','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JScrollPane','javax.swing.JDialog','java.awt.FlowLayout','javax.swing.JButton']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPTableInspector", null, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['table','org.opensourcephysics.controls.OSPControlTable']]
,['S',['FRAME_TITLE']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z$Z.apply(this, [true, true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (editable) {
C$.c$$Z$Z.apply(this, [editable, true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z',  function (editable, modal) {
C$.c$$java_awt_Frame$Z$Z.apply(this, [null, editable, modal]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$Z$Z',  function (owner, editable, modal) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[owner, modal]);C$.$init$.apply(this);
var control=Clazz.new_($I$(2,1));
this.table=Clazz.new_($I$(3,1).c$$org_opensourcephysics_controls_XMLControlElement,[control]);
this.table.setEditable$Z(editable);
p$1.createGUI.apply(this, []);
var s=$I$(4,"getExtension$S",[control.getObjectClassName$()]);
this.setTitle$S(C$.FRAME_TITLE + " " + s + " \"" + control.getPropertyName$() + "\" " );
this.table.addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
}, 1);

Clazz.newMeth(C$, 'getControl$',  function () {
return this.table;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.firePropertyChange$S$O$O(e.getPropertyName$(), e.getOldValue$(), e.getNewValue$());
});

Clazz.newMeth(C$, 'getTable$',  function () {
return this.table;
});

Clazz.newMeth(C$, 'createGUI',  function () {
this.setSize$I$I(400, 300);
this.setContentPane$java_awt_Container(Clazz.new_([Clazz.new_($I$(6,1))],$I$(5,1).c$$java_awt_LayoutManager));
var scrollpane=Clazz.new_($I$(7,1).c$$java_awt_Component,[this.table]);
scrollpane.createHorizontalScrollBar$();
this.getContentPane$().add$java_awt_Component$O(scrollpane, "Center");
if (!$I$(8).isDefaultLookAndFeelDecorated$()) {
return;
}var panel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(5,1).c$$java_awt_LayoutManager);
var closeButton=Clazz.new_([$I$(1).getString$S("OSPTableInspector.OK")],$I$(10,1).c$$S);
panel.add$java_awt_Component(closeButton);
this.getContentPane$().add$java_awt_Component$O(panel, "South");
closeButton.addActionListener$java_awt_event_ActionListener(((P$.OSPTableInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPTableInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_(P$.OSPTableInspector$1.$init$,[this, null])));
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.FRAME_TITLE=$I$(1).getString$S("OSPTableInspector.Properties_of");
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
