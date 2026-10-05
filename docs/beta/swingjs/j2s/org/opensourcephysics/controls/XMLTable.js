(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'java.awt.Color','javax.swing.UIManager','javax.swing.JTextField','org.opensourcephysics.controls.XMLTable','org.opensourcephysics.display.OSPRuntime','javax.swing.BorderFactory','org.opensourcephysics.controls.XML','java.lang.reflect.Array','org.opensourcephysics.controls.OSPCombo','org.opensourcephysics.display.CellBorder','javax.swing.JPanel','java.awt.BorderLayout','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','java.awt.event.MouseAdapter','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.XMLTableInspector','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.ArrayInspector',['org.opensourcephysics.controls.XMLTable','.XMLCellRenderer'],['org.opensourcephysics.controls.XMLTable','.XMLValueEditor'],'java.util.HashMap','org.opensourcephysics.controls.XMLTableModel','javax.swing.SwingUtilities','javax.swing.event.TableModelEvent','javax.swing.KeyStroke','javax.swing.AbstractAction']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable');
C$.$classes$=[['XMLCellRenderer',0],['XMLValueEditor',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xmlRenderer=Clazz.new_($I$(20,1),[this, null]);
this.valueEditor=Clazz.new_($I$(21,1),[this, null]);
this.defaultBackgroundColor=$I$(1).white;
this.cellColors=Clazz.new_($I$(22,1));
this.selectedCellColors=Clazz.new_($I$(22,1));
this.editingCellColors=Clazz.new_($I$(22,1));
},1);

C$.$fields$=[['O',['tableModel','org.opensourcephysics.controls.XMLTableModel','xmlRenderer','org.opensourcephysics.controls.XMLTable.XMLCellRenderer','valueEditor','org.opensourcephysics.controls.XMLTable.XMLValueEditor','defaultBackgroundColor','java.awt.Color','cellColors','java.util.Map','+selectedCellColors','+editingCellColors','defaultEditingColor','java.awt.Color','comboListener','java.beans.PropertyChangeListener']]
,['O',['LIGHT_BLUE','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(23,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLTableModel',  function (model) {
Clazz.super_(C$, this);
this.tableModel=model;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getControl$',  function () {
return this.tableModel.control;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (editable) {
this.tableModel.editable=editable;
});

Clazz.newMeth(C$, 'isEditable$',  function () {
return this.tableModel.editable;
});

Clazz.newMeth(C$, 'setEditable$S$Z',  function (propName, editable) {
if (!editable) {
this.tableModel.uneditablePropNames.add$O(propName);
} else {
this.tableModel.uneditablePropNames.remove$O(propName);
}});

Clazz.newMeth(C$, 'isEditable$S',  function (propName) {
return !this.tableModel.uneditablePropNames.contains$O(propName);
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
return this.tableModel.editable && this.tableModel.isCellEditable$I$I(row, col) ;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.xmlRenderer != null ) {
this.xmlRenderer.setFont$java_awt_Font(font);
this.valueEditor.field.setFont$java_awt_Font(font);
var runner=((P$.XMLTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['javax.swing.JTable'].getTableHeader$.apply(this.b$['javax.swing.JTable'], []).getHeight$() > 0) {
this.b$['javax.swing.JTable'].setRowHeight$I.apply(this.b$['javax.swing.JTable'], [this.b$['javax.swing.JTable'].getTableHeader$.apply(this.b$['javax.swing.JTable'], []).getHeight$()]);
}});
})()
), Clazz.new_(P$.XMLTable$1.$init$,[this, null]));
$I$(24).invokeLater$Runnable(runner);
}});

Clazz.newMeth(C$, 'setSelectedColor$S$java_awt_Color',  function (propName, color) {
this.selectedCellColors.put$O$O(propName, color);
});

Clazz.newMeth(C$, 'getSelectedColor$S',  function (propName) {
var color=this.selectedCellColors.get$O(propName);
return (color == null ) ? C$.LIGHT_BLUE : color;
});

Clazz.newMeth(C$, 'setBackgroundColor$S$java_awt_Color',  function (propName, color) {
this.cellColors.put$O$O(propName, color);
});

Clazz.newMeth(C$, 'getBackgroundColor$S',  function (propName) {
var color=this.cellColors.get$O(propName);
return (color == null ) ? this.defaultBackgroundColor : color;
});

Clazz.newMeth(C$, 'setEditingColor$S$java_awt_Color',  function (propName, color) {
this.editingCellColors.put$O$O(propName, color);
});

Clazz.newMeth(C$, 'getEditingColor$S',  function (propName) {
var color=this.editingCellColors.get$O(propName);
return (color == null ) ? this.defaultEditingColor : color;
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
return this.xmlRenderer;
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, column) {
return this.valueEditor;
});

Clazz.newMeth(C$, 'refresh$',  function () {
$I$(24,"invokeLater$Runnable",[((P$.XMLTable$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "XMLTable$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.controls.XMLTable'].tableChanged$javax_swing_event_TableModelEvent.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [Clazz.new_($I$(25,1).c$$javax_swing_table_TableModel$I,[this.b$['org.opensourcephysics.controls.XMLTable'].tableModel, -1])]);
});
})()
), Clazz.new_(P$.XMLTable$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
this.firePropertyChange$S$O$O("tableData", null, e);
C$.superclazz.prototype.tableChanged$javax_swing_event_TableModelEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'addControlListener$S$O',  function (methodName, target) {
this.addControlListener$S$S$O(null, methodName, target);
});

Clazz.newMeth(C$, 'addControlListener$S$S$O',  function (parameterName, methodName, target) {
var parameters=Clazz.array(Class, -1, [Clazz.getClass(String)]);
try {
var m=target.getClass$().getMethod$S$ClassA(methodName, parameters);
this.tableModel.addTableModelListener$javax_swing_event_TableModelListener(((P$.XMLTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.par=parameterName;
},1);

C$.$fields$=[['S',['par']]]

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
if ((e.getType$() != 0) || (e.getColumn$() != 1) || (e.getFirstRow$() < 0)  ) {
return;
}var name=this.b$['javax.swing.JTable'].getValueAt$I$I.apply(this.b$['javax.swing.JTable'], [e.getFirstRow$(), 0]).toString();
if ((this.par == null ) || this.par.equals$O(name) ) {
var args=Clazz.array(java.lang.Object, -1, [name]);
try {
this.$finals$.m.invoke$O$OA(this.$finals$.target, args);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});
})()
), Clazz.new_(P$.XMLTable$2.$init$,[this, {target:target,m:m}])));
} catch (nsme) {
if (Clazz.exceptionOf(nsme,"NoSuchMethodException")){
System.err.println$S($I$(16).getString$S("XMLTable.ErrorMessage.NoMethod") + " " + methodName + "()" );
} else {
throw nsme;
}
}
});

Clazz.newMeth(C$, 'init',  function () {
this.setModel$javax_swing_table_TableModel(this.tableModel);
var header=this.getTableHeader$();
header.setReorderingAllowed$Z(false);
header.setForeground$java_awt_Color($I$(1).BLACK);
this.setGridColor$java_awt_Color($I$(1).BLACK);
var im=this.getInputMap$I(1);
var tab=$I$(26).getKeyStroke$I$I(9, 0);
var key=im.get$javax_swing_KeyStroke(tab);
if (key != null ) {
var prevTabAction=this.getActionMap$().get$O(key);
var tabAction=((P$.XMLTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.prevTabAction.actionPerformed$java_awt_event_ActionEvent(e);
var table=e.getSource$();
var rowCount=table.getRowCount$();
var row=table.getSelectedRow$();
var column=table.getSelectedColumn$();
while (!table.isCellEditable$I$I(row, column)){
if (column == 0) {
column=1;
} else {
row+=1;
}if (row == rowCount) {
row=0;
}if ((row == table.getSelectedRow$()) && (column == table.getSelectedColumn$()) ) {
break;
}}
table.changeSelection$I$I$Z$Z(row, column, false, false);
});
})()
), Clazz.new_($I$(27,1),[this, {prevTabAction:prevTabAction}],P$.XMLTable$3));
this.getActionMap$().put$O$javax_swing_Action(key, tabAction);
} else {
System.out.println$S("XMLTable No previous tab action");
}var enterAction=((P$.XMLTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var table=e.getSource$();
var row=table.getSelectedRow$();
var column=table.getSelectedColumn$();
table.editCellAt$I$I$java_util_EventObject(row, column, e);
var comp=table.getEditorComponent$();
if (Clazz.instanceOf(comp, "javax.swing.JPanel")) {
var panel=comp;
comp=panel.getComponent$I(0);
if (Clazz.instanceOf(comp, "javax.swing.JTextField")) {
var field=comp;
var combo=null;
var value=this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.getValueAt$I$I(row, column);
if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLControl")) {
var control=value;
if (control.getObjectClass$() === Clazz.getClass($I$(9)) ) {
combo=control.loadObject$O(null);
} else if (control.getObjectClass$() === Clazz.getClass(Boolean) ) {
var bool=control.loadObject$O(null);
var n=bool.booleanValue$() ? 0 : 1;
combo=Clazz.new_([Clazz.array(String, -1, ["true", "false"]), n],$I$(9,1).c$$SA$I);
combo.addPropertyChangeListener$S$java_beans_PropertyChangeListener("value", ((P$.XMLTable$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var combo=e.getSource$();
var bool=Boolean.valueOf$Z(combo.getSelectedIndex$() == 0);
this.$finals$.control.saveObject$O(bool);
});
})()
), Clazz.new_(P$.XMLTable$4$1.$init$,[this, {control:control}])));
}}if (combo == null ) {
field.requestFocus$();
field.selectAll$();
} else {
combo.row=row;
combo.column=column;
combo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("index", this.b$['org.opensourcephysics.controls.XMLTable'].comboListener);
combo.addPropertyChangeListener$S$java_beans_PropertyChangeListener("index", this.b$['org.opensourcephysics.controls.XMLTable'].comboListener);
combo.showPopup$javax_swing_JTextField(field);
}}}});
})()
), Clazz.new_($I$(27,1),[this, null],P$.XMLTable$4));
var enter=$I$(26).getKeyStroke$I$I(10, 0);
this.getActionMap$().put$O$javax_swing_Action(im.get$javax_swing_KeyStroke(enter), enterAction);
this.comboListener=((P$.XMLTable$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var combo=e.getSource$();
var n=(e.getOldValue$()).intValue$();
if (n != combo.getSelectedIndex$()) {
combo.firePropertyChange$S$I$I("value", n, combo.getSelectedIndex$());
this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.fireTableCellUpdated$I$I(combo.row, combo.column);
}combo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("index", this);
this.b$['org.opensourcephysics.controls.XMLTable'].valueEditor.stopCellEditing$();
});
})()
), Clazz.new_(P$.XMLTable$5.$init$,[this, null]));
}, p$1);

Clazz.newMeth(C$, 'isInspectable$org_opensourcephysics_controls_XMLProperty',  function (prop) {
switch (prop.getPropertyType$()) {
case 6:
case 5:
return true;
case 4:
return $I$(19).canInspect$org_opensourcephysics_controls_XMLProperty(prop);
default:
return false;
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.LIGHT_BLUE=Clazz.new_($I$(1,1).c$$I$I$I,[196, 196, 255]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLTable, "XMLCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lightGreen=Clazz.new_($I$(1,1).c$$I$I$I,[204, 255, 204]);
this.lightGray=$I$(2).getColor$O("Panel.background");
this.$font=Clazz.new_($I$(3,1)).getFont$();
},1);

C$.$fields$=[['O',['lightGreen','java.awt.Color','+lightGray','$font','java.awt.Font']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setForeground$java_awt_Color($I$(1).black);
this.setFont$java_awt_Font(this.$font);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
this.setForeground$java_awt_Color($I$(1).BLACK);
if (value == null ) {
value="";
}var propName=this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.getValueAt$I$I(row, 0);
if (column == 0) {
if (isSelected) {
this.setBackground$java_awt_Color($I$(4).LIGHT_BLUE);
} else {
this.setBackground$java_awt_Color(this.lightGray);
}this.setHorizontalAlignment$I(2);
var text=value.toString();
if ($I$(5).loadTranslatorTool) {
text=$I$(5).getTranslator$().getProperty$O$S(this.b$['org.opensourcephysics.controls.XMLTable'], text);
}this.setText$S(text);
this.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 1, 2, 2));
return this;
}var childValue=null;
if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLProperty")) {
var prop=value;
var parent=prop.getParentProperty$();
var childClass=parent.getPropertyClass$();
var className=$I$(7).getSimpleClassName$Class(childClass);
var control=parent.getParentProperty$();
var childObj=control.getObject$S(parent.getPropertyName$());
if (parent.getPropertyType$() == 4) {
var array=childObj;
var baseType=array.getClass$().getComponentType$();
var count=$I$(8).getLength$O(array);
var insert=className.indexOf$S("[]") + 1;
className=className.substring$I$I(0, insert) + count + className.substring$I(insert) ;
while (baseType.getComponentType$() != null ){
baseType=baseType.getComponentType$();
array=$I$(8).get$O$I(array, 0);
if (array == null ) {
break;
}count=$I$(8).getLength$O(array);
insert=className.indexOf$S$I("[]", insert) + 1;
className=className.substring$I$I(0, insert) + count + className.substring$I(insert) ;
}
}if (childClass !== Clazz.getClass($I$(9))  && childClass !== Clazz.getClass(Boolean)   && childClass !== Clazz.getClass(Character)  ) {
this.setText$S(className);
this.setBackground$java_awt_Color(p$1.isInspectable$org_opensourcephysics_controls_XMLProperty.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [parent]) ? this.lightGreen : this.lightGray);
this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(1,1).c$$I$I$I,[240, 240, 240])],$I$(10,1).c$$java_awt_Color));
this.setHorizontalAlignment$I(0);
if (isSelected && p$1.isInspectable$org_opensourcephysics_controls_XMLProperty.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [parent]) ) {
this.setBackground$java_awt_Color(this.b$['org.opensourcephysics.controls.XMLTable'].getSelectedColor$S.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [propName]));
this.setForeground$java_awt_Color($I$(1).RED);
}return this;
}childValue=childObj.toString();
}if (isSelected) {
this.setBackground$java_awt_Color(this.b$['org.opensourcephysics.controls.XMLTable'].getSelectedColor$S.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [propName]));
this.setForeground$java_awt_Color($I$(1).RED);
} else {
this.setBackground$java_awt_Color(this.b$['org.opensourcephysics.controls.XMLTable'].getBackgroundColor$S.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [propName]));
}this.setHorizontalAlignment$I(2);
this.setText$S(childValue == null  ? value.toString() : childValue);
this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(1,1).c$$I$I$I,[240, 240, 240])],$I$(10,1).c$$java_awt_Color));
if (!this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.editable || this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.uneditablePropNames.contains$O(propName) ) {
this.setForeground$java_awt_Color($I$(1).GRAY);
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLTable, "XMLValueEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_([Clazz.new_($I$(12,1))],$I$(11,1).c$$java_awt_LayoutManager);
this.field=Clazz.new_($I$(3,1));
this.keepFocus=-2;
},1);

C$.$fields$=[['I',['keepFocus'],'O',['panel','javax.swing.JPanel','field','javax.swing.JTextField','combo','org.opensourcephysics.controls.OSPCombo']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.b$['org.opensourcephysics.controls.XMLTable'].defaultEditingColor=this.field.getSelectionColor$();
this.panel.add$java_awt_Component$O(this.field, "Center");
this.panel.setOpaque$Z(false);
this.field.setBorder$javax_swing_border_Border($I$(6,"createLineBorder$java_awt_Color$I",[Clazz.new_($I$(1,1).c$$I$I$I,[128, 128, 128]), 1]));
this.field.addActionListener$java_awt_event_ActionListener(((P$.XMLTable$XMLValueEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].keepFocus=-2;
});
})()
), Clazz.new_(P$.XMLTable$XMLValueEditor$1.$init$,[this, null])));
this.field.addKeyListener$java_awt_event_KeyListener(((P$.XMLTable$XMLValueEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].keepFocus=-2;
} else if (this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].field.isEnabled$()) {
this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].field.setBackground$java_awt_Color($I$(1).yellow);
}});
})()
), Clazz.new_($I$(13,1),[this, null],P$.XMLTable$XMLValueEditor$2)));
this.field.addFocusListener$java_awt_event_FocusListener(((P$.XMLTable$XMLValueEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (e.isTemporary$()) {
return;
}if (this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].field.getBackground$() !== this.b$['org.opensourcephysics.controls.XMLTable'].defaultBackgroundColor ) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
}var i=this.b$['org.opensourcephysics.controls.XMLTable'].getSelectedRow$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], []);
if (this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].keepFocus == i) {
this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].keepFocus=-2;
} else {
this.b$['org.opensourcephysics.controls.XMLTable'].requestFocusInWindow$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], []);
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.XMLTable$XMLValueEditor$3)));
this.field.addMouseListener$java_awt_event_MouseListener(((P$.XMLTable$XMLValueEditor$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'].doOpenCombo$.apply(this.b$['org.opensourcephysics.controls.XMLTable.XMLValueEditor'], []);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.XMLTable$XMLValueEditor$4)));
}, 1);

Clazz.newMeth(C$, 'doOpenCombo$',  function () {
if (this.combo != null ) {
if (this.combo.getPropertyChangeListeners$S("index").length > 0) {
this.combo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("index", this.b$['org.opensourcephysics.controls.XMLTable'].comboListener);
this.combo.setVisible$Z(false);
this.stopCellEditing$();
} else {
this.combo.removePropertyChangeListener$S$java_beans_PropertyChangeListener("index", this.b$['org.opensourcephysics.controls.XMLTable'].comboListener);
this.combo.addPropertyChangeListener$S$java_beans_PropertyChangeListener("index", this.b$['org.opensourcephysics.controls.XMLTable'].comboListener);
this.combo.showPopup$javax_swing_JTextField(this.field);
}}});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.combo=null;
var propName=this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.getValueAt$I$I(row, 0);
this.field.setBackground$java_awt_Color(this.b$['org.opensourcephysics.controls.XMLTable'].defaultBackgroundColor);
this.field.setSelectionColor$java_awt_Color(this.b$['org.opensourcephysics.controls.XMLTable'].getEditingColor$S.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [propName]));
var rowNumber=row;
var colNumber=column;
if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLControl")) {
var childControl=value;
if (childControl.getObjectClass$() === Clazz.getClass($I$(1)) ) {
var color=childControl.loadObject$O(null);
var title=$I$(16).getString$S("XMLTable.ColorChooser.Title");
$I$(5,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[color, title, ((P$.XMLTable$XMLValueEditor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor != null  && !this.$finals$.color.equals$O.apply(this.$finals$.color, [newColor]) ) {
this.$finals$.childControl.saveObject$O.apply(this.$finals$.childControl, [newColor]);
this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.fireTableCellUpdated$I$I.apply(this.b$['org.opensourcephysics.controls.XMLTable'].tableModel, [this.$finals$.row, this.$finals$.column]);
}});
})()
), Clazz.new_(P$.XMLTable$XMLValueEditor$lambda1.$init$,[this, {column:column,row:row,color:color,childControl:childControl}]))]);
return null;
}if (childControl.getObjectClass$() === Clazz.getClass(Character) ) {
var c=childControl.loadObject$O(null);
this.field.setEditable$Z(true);
this.field.setText$S(c.toString());
return this.panel;
}if (childControl.getObjectClass$() === Clazz.getClass($I$(9)) ) {
this.combo=childControl.loadObject$O(null);
this.combo.row=row;
this.combo.column=column;
this.field.setText$S(this.combo.toString());
this.field.setEditable$Z(false);
return this.panel;
}if (childControl.getObjectClass$() === Clazz.getClass(Boolean) ) {
var bool=childControl.loadObject$O(null);
var n=bool.booleanValue$() ? 0 : 1;
this.combo=Clazz.new_([Clazz.array(String, -1, ["true", "false"]), n],$I$(9,1).c$$SA$I);
this.combo.row=row;
this.combo.column=column;
this.field.setText$S(bool.toString());
this.field.setEditable$Z(false);
this.combo.addPropertyChangeListener$S$java_beans_PropertyChangeListener("value", ((P$.XMLTable$XMLValueEditor$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var combo=e.getSource$();
var bool=Boolean.valueOf$Z(combo.getSelectedIndex$() == 0);
this.$finals$.childControl.saveObject$O(bool);
});
})()
), Clazz.new_(P$.XMLTable$XMLValueEditor$5.$init$,[this, {childControl:childControl}])));
return this.panel;
}var inspector=Clazz.new_([childControl, this.b$['org.opensourcephysics.controls.XMLTable'].isEditable$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], [])],$I$(17,1).c$$org_opensourcephysics_controls_XMLControl$Z);
inspector.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.XMLTable$XMLValueEditor$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("xmlData")) {
this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.fireTableCellUpdated$I$I(this.$finals$.rowNumber, this.$finals$.colNumber);
}});
})()
), Clazz.new_(P$.XMLTable$XMLValueEditor$6.$init$,[this, {rowNumber:rowNumber,colNumber:colNumber}])));
var cont=this.b$['org.opensourcephysics.controls.XMLTable'].getTopLevelAncestor$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], []);
var p=cont.getLocationOnScreen$();
inspector.setLocation$I$I(p.x + 30, p.y + 30);
inspector.setVisible$Z(true);
return null;
} else if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLProperty")) {
var prop=value;
var parent=prop.getParentProperty$();
if (parent.getPropertyType$() == 5) {
var name=parent.getPropertyName$();
parent=parent.getParentProperty$();
if (Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl")) {
var cControl=Clazz.new_($I$(18,1));
var c=(parent).getObject$S(name);
var it=c.iterator$();
var i=0;
while (it.hasNext$()){
var next=it.next$();
cControl.setValue$S$O("item_" + i, next);
++i;
}
var inspector=Clazz.new_($I$(17,1).c$$org_opensourcephysics_controls_XMLControl,[cControl]);
inspector.setTitle$S($I$(16).getString$S("XMLTable.Inspector.Title") + name + "\"" );
var cont=this.b$['org.opensourcephysics.controls.XMLTable'].getTopLevelAncestor$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], []);
var p=cont.getLocationOnScreen$();
inspector.setLocation$I$I(p.x + 30, p.y + 30);
inspector.setVisible$Z(true);
cont.transferFocus$();
}}var arrayProp=prop.getParentProperty$();
var arrayInspector=$I$(19).getInspector$org_opensourcephysics_controls_XMLProperty(arrayProp);
if (arrayInspector != null ) {
var name=arrayProp.getPropertyName$();
parent=arrayProp.getParentProperty$();
while (!(Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl"))){
name=parent.getPropertyName$();
arrayProp=parent;
parent=parent.getParentProperty$();
}
var arrayControl=parent;
var arrayName=name;
var arrayObj=arrayInspector.getArray$();
arrayInspector.setEditable$Z(this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.editable);
arrayInspector.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.XMLTable$XMLValueEditor$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLTable$XMLValueEditor$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("cell")) {
this.$finals$.arrayControl.setValue$S$O(this.$finals$.arrayName, this.$finals$.arrayObj);
} else if (e.getPropertyName$().equals$O("arrayData")) {
this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.fireTableCellUpdated$I$I(this.$finals$.rowNumber, this.$finals$.colNumber);
}});
})()
), Clazz.new_(P$.XMLTable$XMLValueEditor$7.$init$,[this, {arrayControl:arrayControl,rowNumber:rowNumber,colNumber:colNumber,arrayObj:arrayObj,arrayName:arrayName}])));
var cont=this.b$['org.opensourcephysics.controls.XMLTable'].getTopLevelAncestor$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], []);
var p=cont.getLocationOnScreen$();
arrayInspector.setLocation$I$I(p.x + 30, p.y + 30);
arrayInspector.setVisible$Z(true);
cont.transferFocus$();
}return null;
}this.field.setEditable$Z(true);
if (value != null ) {
this.field.setText$S(value.toString());
}return this.panel;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
if (Clazz.instanceOf(e, "java.awt.event.MouseEvent")) {
var me=e;
var table=me.getSource$();
var row=table.rowAtPoint$java_awt_Point(me.getPoint$());
this.keepFocus=row;
var value=this.b$['org.opensourcephysics.controls.XMLTable'].tableModel.getValueAt$I$I(row, 1);
if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLControl")) {
var childControl=value;
if ((childControl.getObjectClass$() === Clazz.getClass($I$(9)) ) || (childControl.getObjectClass$() === Clazz.getClass(Boolean) ) || (childControl.getObjectClass$() === Clazz.getClass(Character) )  ) {
return true;
}}if ((Clazz.instanceOf(value, "java.lang.String")) || (me.getClickCount$() == 2) ) {
return true;
}} else if (Clazz.instanceOf(e, "java.awt.event.ActionEvent")) {
this.keepFocus=-2;
return true;
}return false;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
this.b$['org.opensourcephysics.controls.XMLTable'].requestFocusInWindow$.apply(this.b$['org.opensourcephysics.controls.XMLTable'], []);
if (this.field.getBackground$() !== this.b$['org.opensourcephysics.controls.XMLTable'].defaultBackgroundColor ) {
this.field.setBackground$java_awt_Color(this.b$['org.opensourcephysics.controls.XMLTable'].defaultBackgroundColor);
return this.field.getText$();
}return null;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
