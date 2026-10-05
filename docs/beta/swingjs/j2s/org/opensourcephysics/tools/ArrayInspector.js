(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'javax.swing.JTabbedPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JScrollPane','javax.swing.JSpinner','javax.swing.SpinnerNumberModel',['javax.swing.JSpinner','.NumberEditor'],'javax.swing.JToolBar','javax.swing.JLabel','javax.swing.Box','java.awt.event.WindowAdapter','org.opensourcephysics.display.ArrayTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayInspector", null, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabbedPane=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['changed'],'O',['tabbedPane','javax.swing.JTabbedPane','tables','org.opensourcephysics.display.ArrayTable[]','spinner','javax.swing.JSpinner','scrollpane','javax.swing.JScrollPane','array','java.lang.Object']]]

Clazz.newMeth(C$, 'getInspector$org_opensourcephysics_controls_XMLProperty',  function (arrayProp) {
if (arrayProp.getPropertyType$() != 4) {
return null;
}var type=arrayProp.getPropertyClass$();
while (type.getComponentType$() != null ){
type=type.getComponentType$();
}
if (type === Double.TYPE  || type === Integer.TYPE   || type === Boolean.TYPE   || type === Clazz.getClass(String)  ) {
var name=arrayProp.getPropertyName$();
var parent=arrayProp.getParentProperty$();
while (!(Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl"))){
name=parent.getPropertyName$();
arrayProp=parent;
parent=parent.getParentProperty$();
}
var arrayControl=parent;
var arrayObj=arrayControl.getObject$S(name);
if (arrayObj == null ) {
return null;
}return C$.getInspector$O$S(arrayObj, name);
}return null;
}, 1);

Clazz.newMeth(C$, 'getInspector$O$S',  function (arrayObj, name) {
var inspector=null;
if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -1))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$DA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -2))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$DAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -3))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$DAAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -1))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$IA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -2))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$IAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -3))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$IAAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -1))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$SA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -2))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$SAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -3))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$SAAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -1))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$ZA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -2))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$ZAA$S,[array, name]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -3))) {
var array=arrayObj;
inspector=Clazz.new_(C$.c$$ZAAA$S,[array, name]);
}if (inspector != null ) {
inspector.array=arrayObj;
}return inspector;
}, 1);

Clazz.newMeth(C$, 'canInspect$org_opensourcephysics_controls_XMLProperty',  function (arrayProp) {
if (arrayProp.getPropertyType$() != 4) {
return false;
}var name=arrayProp.getPropertyName$();
var parent=arrayProp.getParentProperty$();
while (!(Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl"))){
name=parent.getPropertyName$();
arrayProp=parent;
parent=parent.getParentProperty$();
}
var arrayControl=parent;
var arrayObj=arrayControl.getObject$S(name);
return C$.canInspect$O(arrayObj);
}, 1);

Clazz.newMeth(C$, 'canInspect$O',  function (obj) {
if (obj == null ) {
return false;
}if ((Clazz.instanceOf(obj, Clazz.array(Double.TYPE, -1))) || (Clazz.instanceOf(obj, Clazz.array(Double.TYPE, -2))) || (Clazz.instanceOf(obj, Clazz.array(Double.TYPE, -3))) || (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) || (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -2))) || (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -3))) || (Clazz.instanceOf(obj, Clazz.array(Boolean.TYPE, -1))) || (Clazz.instanceOf(obj, Clazz.array(Boolean.TYPE, -2))) || (Clazz.instanceOf(obj, Clazz.array(Boolean.TYPE, -3))) || (Clazz.instanceOf(obj, Clazz.array(String, -1))) || (Clazz.instanceOf(obj, Clazz.array(String, -2))) || (Clazz.instanceOf(obj, Clazz.array(String, -3)))  ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getArray$',  function () {
return this.array;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.changed=true;
this.firePropertyChange$S$O$O(e.getPropertyName$(), e.getOldValue$(), e.getNewValue$());
});

Clazz.newMeth(C$, 'setEditable$Z',  function (editable) {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setEditable$Z(editable);
}
});

Clazz.newMeth(C$, 'refreshTable$',  function () {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].refreshTable$();
}
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.setSize$I$I(400, 300);
this.setContentPane$java_awt_Container(Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager));
this.scrollpane=Clazz.new_($I$(4,1).c$$java_awt_Component,[this.tables[0]]);
if (this.tables.length > 1) {
this.spinner=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I$I$I,[0, 0, this.tables.length - 1, 1])],$I$(5,1).c$$javax_swing_SpinnerModel);
var editor=Clazz.new_($I$(7,1).c$$javax_swing_JSpinner,[this.spinner]);
editor.getTextField$().setFont$java_awt_Font(this.tables[0].getFont$());
this.spinner.setEditor$javax_swing_JComponent(editor);
this.spinner.addChangeListener$javax_swing_event_ChangeListener(((P$.ArrayInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=(this.b$['org.opensourcephysics.tools.ArrayInspector'].spinner.getValue$()).intValue$();
this.b$['org.opensourcephysics.tools.ArrayInspector'].scrollpane.setViewportView$java_awt_Component(this.b$['org.opensourcephysics.tools.ArrayInspector'].tables[i]);
});
})()
), Clazz.new_(P$.ArrayInspector$1.$init$,[this, null])));
var dim=this.spinner.getMinimumSize$();
this.spinner.setMaximumSize$java_awt_Dimension(dim);
this.getContentPane$().add$java_awt_Component$O(this.scrollpane, "Center");
var toolbar=Clazz.new_($I$(8,1));
toolbar.setFloatable$Z(false);
toolbar.add$java_awt_Component(Clazz.new_($I$(9,1).c$$S,[" index "]));
toolbar.add$java_awt_Component(this.spinner);
toolbar.add$java_awt_Component($I$(10).createHorizontalGlue$());
this.getContentPane$().add$java_awt_Component$O(toolbar, "North");
} else {
this.scrollpane.createHorizontalScrollBar$();
this.getContentPane$().add$java_awt_Component$O(this.scrollpane, "Center");
}});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[null, true]);C$.$init$.apply(this);
this.addWindowListener$java_awt_event_WindowListener(((P$.ArrayInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.ArrayInspector'].changed) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["arrayData", null, null]);
}});
})()
), Clazz.new_($I$(11,1),[this, null],P$.ArrayInspector$2)));
}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$IA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: int[row]");
}, 1);

Clazz.newMeth(C$, 'c$$IA$S',  function (array, arrayName) {
C$.c$$IA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": int[row]" );
}, 1);

Clazz.newMeth(C$, 'c$$IAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$IAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: int[row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$IAA$S',  function (array, arrayName) {
C$.c$$IAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": int[row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$IAAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(12,1).c$$IAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
}
this.createGUI$();
this.setTitle$S("Array: int[index][row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$IAAA$S',  function (array, arrayName) {
C$.c$$IAAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": int[index][row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$DA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: double[row]");
}, 1);

Clazz.newMeth(C$, 'c$$DA$S',  function (array, arrayName) {
C$.c$$DA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": double[row]" );
}, 1);

Clazz.newMeth(C$, 'c$$DAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$DAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: double[row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$DAA$S',  function (array, arrayName) {
C$.c$$DAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": double[row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$DAAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(12,1).c$$DAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
}
this.createGUI$();
this.setTitle$S("Array: double[index][row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$DAAA$S',  function (array, arrayName) {
C$.c$$DAAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": double[index][row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$SA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$SA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: String[row]");
}, 1);

Clazz.newMeth(C$, 'c$$SA$S',  function (array, arrayName) {
C$.c$$SA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": String[row]" );
}, 1);

Clazz.newMeth(C$, 'c$$SAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$SAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: String[row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$SAA$S',  function (array, arrayName) {
C$.c$$SAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": String[row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$SAAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(12,1).c$$SAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
}
this.createGUI$();
this.setTitle$S("Array: String[index][row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$SAAA$S',  function (array, arrayName) {
C$.c$$SAAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": String[index][row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$ZA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$ZA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: boolean[row]");
}, 1);

Clazz.newMeth(C$, 'c$$ZA$S',  function (array, arrayName) {
C$.c$$ZA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": boolean[row]" );
}, 1);

Clazz.newMeth(C$, 'c$$ZAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [1]);
this.tables[0]=Clazz.new_($I$(12,1).c$$ZAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.createGUI$();
this.setTitle$S("Array: boolean[row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$ZAA$S',  function (array, arrayName) {
C$.c$$ZAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": boolean[row][column]" );
}, 1);

Clazz.newMeth(C$, 'c$$ZAAA',  function (array) {
C$.c$.apply(this, []);
this.tables=Clazz.array($I$(12), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(12,1).c$$ZAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
}
this.createGUI$();
this.setTitle$S("Array: boolean[index][row][column]");
}, 1);

Clazz.newMeth(C$, 'c$$ZAAA$S',  function (array, arrayName) {
C$.c$$ZAAA.apply(this, [array]);
this.setTitle$S("Array \"" + arrayName + "\": boolean[index][row][column]" );
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
