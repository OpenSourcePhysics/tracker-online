(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'java.awt.Color','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.FunctionEditor','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.display.GUIUtils','java.awt.event.MouseAdapter','java.awt.event.FocusAdapter','javax.swing.AbstractAction','javax.swing.KeyStroke','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTextField','javax.swing.BorderFactory','java.awt.event.KeyAdapter','org.opensourcephysics.tools.FontSizer','javax.swing.SwingUtilities','java.awt.Dimension','javax.swing.text.StyleContext','javax.swing.text.StyleConstants','java.awt.event.MouseMotionAdapter','javax.swing.JLabel',['org.opensourcephysics.tools.FunctionEditor','.ValueMouseControl'],'org.opensourcephysics.tools.ResourceLoader','javax.swing.JButton','javax.swing.JOptionPane','javax.swing.JDialog','org.opensourcephysics.tools.FitBuilder','java.awt.Cursor','org.opensourcephysics.display.TeXParser','javax.swing.UIManager','java.text.DecimalFormat','org.opensourcephysics.numerics.Util','java.util.ArrayList','java.util.HashSet','java.util.BitSet',['org.opensourcephysics.tools.FunctionEditor','.TableModel'],['org.opensourcephysics.tools.FunctionEditor','.CellEditor'],['org.opensourcephysics.tools.FunctionEditor','.CellRenderer'],'java.awt.FlowLayout',['org.opensourcephysics.tools.FunctionEditor','.DefaultEdit'],'org.opensourcephysics.tools.UserFunction','org.opensourcephysics.tools.Parameter',['org.opensourcephysics.tools.FunctionEditor','.Table'],'javax.swing.JScrollPane','StringBuffer','org.opensourcephysics.controls.XMLControlElement',['org.opensourcephysics.tools.FunctionEditor','.FObject'],'org.opensourcephysics.tools.FunctionTool']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FunctionEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');
C$.$classes$=[['FObject',9],['Table',1],['TableModel',4],['CellEditor',2],['CellRenderer',2],['ValueMouseControl',2],['DefaultEdit',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.objects=Clazz.new_($I$(35,1));
this.names=Clazz.array(String, [0]);
this.forbiddenNames=Clazz.new_($I$(36,1));
this.removablesAtTop=false;
this.circularErrors=Clazz.new_($I$(37,1));
this.errors=Clazz.new_($I$(37,1));
this.evaluate=Clazz.new_($I$(35,1));
this.referencesChecked=Clazz.new_($I$(36,1));
this.confirmChanges=true;
this.tableModel=Clazz.new_($I$(38,1),[this, null]);
this.tableCellEditor=Clazz.new_($I$(39,1),[this, null]);
this.tableCellRenderer=Clazz.new_($I$(40,1),[this, null]);
this.addButtonPanel=true;
this.tableFocuser=((P$.FunctionEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.requestFocusInWindow$();
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.clearSelection$();
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.FunctionEditor$1));
},1);

C$.$fields$=[['Z',['removablesAtTop','anglesInDegrees','confirmChanges','addButtonPanel','haveGUI'],'I',['selectedRow','selectedCol'],'S',['skipAllName','newButtonTipText','titledBorderText','lang'],'O',['paramEditor','org.opensourcephysics.tools.ParamEditor','functionPanel','org.opensourcephysics.tools.FunctionPanel','objects','java.util.ArrayList','names','String[]','forbiddenNames','java.util.HashSet','circularErrors','java.util.BitSet','+errors','evaluate','java.util.List','referencesChecked','java.util.HashSet','table','org.opensourcephysics.tools.FunctionEditor.Table','tableModel','org.opensourcephysics.tools.FunctionEditor.TableModel','tableCellEditor','org.opensourcephysics.tools.FunctionEditor.CellEditor','tableCellRenderer','org.opensourcephysics.tools.FunctionEditor.CellRenderer','newButton','javax.swing.JButton','+cutButton','+copyButton','+pasteButton','buttonPanel','javax.swing.JPanel','dragLabel','javax.swing.JLabel','titledBorder','javax.swing.border.TitledBorder','customButtons','javax.swing.AbstractButton[]','tableFocuser','java.awt.event.MouseListener','popupEditor','javax.swing.JDialog']]
,['Z',['allowPopopFieldTooltip','undoEditsEnabled'],'S',['THETA','OMEGA'],'O',['LIGHT_BLUE','java.awt.Color','+MEDIUM_RED','+LIGHT_RED','+LIGHT_GRAY','+DARK_RED','decimalFormat','java.text.DecimalFormat','+sciFormat0000','editTypes','String[]','tempRange','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(13,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'checkGUI$',  function () {
if (!this.haveGUI) {
this.createGUI$();
this.refreshGUI$();
if (this.functionPanel != null ) this.functionPanel.checkGUI$();
if (this.paramEditor != null ) this.paramEditor.checkGUI$();
}});

Clazz.newMeth(C$, 'getTable$',  function () {
this.checkGUI$();
return this.table;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
this.checkGUI$();
var dim=this.table.getPreferredSize$();
dim.height+=this.table.getTableHeader$().getHeight$();
if (this.buttonPanel != null  && this.buttonPanel.getParent$() === this  ) dim.height+=this.buttonPanel.getPreferredSize$().height;
dim.height=(dim.height+(1.25 * this.table.getRowHeight$() + 14)|0);
return dim;
});

Clazz.newMeth(C$, 'setObjects$java_util_List',  function (newObjects) {
this.objects.clear$();
this.objects.addAll$java_util_Collection(newObjects);
this.evaluateAll$();
});

Clazz.newMeth(C$, 'updateTable$',  function () {
this.selectedRow=this.table.getSelectedRow$();
this.selectedCol=this.table.getSelectedColumn$();
this.tableModel.fireTableStructureChanged$();
if (this.selectedRow < this.table.getRowCount$()) {
this.table.rowToSelect=this.selectedRow;
this.table.columnToSelect=this.selectedCol;
}this.table.requestFocusInWindow$();
this.refreshGUI$();
});

Clazz.newMeth(C$, 'getObjects$',  function () {
return Clazz.new_($I$(35,1).c$$java_util_Collection,[this.objects]);
});

Clazz.newMeth(C$, 'getNames$',  function () {
return this.names;
});

Clazz.newMeth(C$, 'setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, desc) {
if (Clazz.instanceOf(obj, "org.opensourcephysics.tools.Parameter")) {
this.firePropertyChange$S$O$O("param_description", null, null);
}this.firePropertyChange$S$O$O("description", null, null);
});

Clazz.newMeth(C$, 'getObject$S',  function (name) {
if ((name == null ) || name.equals$O("") ) {
return null;
}for (var i=this.objects.size$(); --i >= 0; ) {
if (name.equals$O(this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.objects.get$I(i)))) return this.objects.get$I(i);
}
return null;
});

Clazz.newMeth(C$, 'setExpression$S$S$Z',  function (name, expression, postEdit) {
if ((name == null ) || name.equals$O("") ) {
return;
}for (var row=0; row < this.objects.size$(); row++) {
var obj=this.objects.get$I(row);
var prev;
if (!name.equals$O(this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj)) || (prev=this.getExpression$org_opensourcephysics_tools_FunctionEditor_FObject(obj)).equals$O(expression) ) {
continue;
}obj=this.createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject(name, expression, obj);
this.objects.remove$I(row);
this.objects.add$I$O(row, obj);
this.evaluateAll$();
this.tableModel.fireTableStructureChanged$();
if (this.table != null  && row >= 0 ) {
this.table.changeSelection$I$I$Z$Z(row, 1, false, false);
}var edit=null;
if (postEdit && C$.undoEditsEnabled ) {
edit=this.getUndoableEdit$I$O$I$I$O$I$I$S(3, expression, row, 1, prev, row, 1, this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj));
}this.firePropertyChange$S$O$O("edit", this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj), edit);
break;
}
});

Clazz.newMeth(C$, 'getConfirmChanges$',  function () {
return this.confirmChanges;
});

Clazz.newMeth(C$, 'setConfirmChanges$Z',  function (confirm) {
this.confirmChanges=confirm;
});

Clazz.newMeth(C$, 'addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z',  function (obj, postEdit) {
if (obj == null ) {
return null;
}var row=this.objects.size$();
if (this.isRemovable$org_opensourcephysics_tools_FunctionEditor_FObject(obj)) {
if (this.removablesAtTop) {
row=p$2.getRemovableRowCount.apply(this, []);
}} else if (!this.removablesAtTop) {
row=row - p$2.getRemovableRowCount.apply(this, []);
}return this.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z(obj, row, postEdit, true);
});

Clazz.newMeth(C$, 'addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z',  function (obj, row, postEdit, firePropertyChange) {
obj=this.createUniqueObject$org_opensourcephysics_tools_FunctionEditor_FObject$S$Z(obj, this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj), this.confirmChanges);
if (obj == null ) {
return null;
}var newObjects=Clazz.new_($I$(35,1).c$$java_util_Collection,[this.objects]);
newObjects.add$I$O(row, obj);
this.setObjects$java_util_List(newObjects);
if (!this.haveGUI) return obj;
this.updateTable$();
this.table.columnToSelect=0;
this.table.rowToSelect=row;
this.table.selectOnFocus=true;
this.table.requestFocusInWindow$();
var edit=null;
if (postEdit && C$.undoEditsEnabled ) {
edit=this.getUndoableEdit$I$O$I$I$O$I$I$S(0, obj, row, 0, obj, this.selectedRow, this.selectedCol, this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj));
}if (firePropertyChange) {
this.firePropertyChange$S$O$O("edit", this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj), edit);
}this.refreshGUI$();
return obj;
});

Clazz.newMeth(C$, 'removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z',  function (obj, postEdit) {
if ((obj == null ) || !this.isRemovable$org_opensourcephysics_tools_FunctionEditor_FObject(obj) ) {
return null;
}var undoCol=this.table.getSelectedColumn$();
for (var undoRow=0; undoRow < this.objects.size$(); undoRow++) {
var next=this.objects.get$I(undoRow);
if (!next.equals$O(obj)) continue;
this.objects.remove$O(obj);
this.tableModel.fireTableStructureChanged$();
var row=(undoRow == this.objects.size$()) ? undoRow - 1 : undoRow;
if (row >= 0) {
this.table.changeSelection$I$I$Z$Z(row, 0, false, false);
}var edit=null;
if (postEdit) {
edit=this.getUndoableEdit$I$O$I$I$O$I$I$S(1, obj, row, 0, obj, undoRow, undoCol, this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj));
}this.evaluateAll$();
this.firePropertyChange$S$O$O("edit", this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj), edit);
this.refreshGUI$();
return obj;
}
return null;
});

Clazz.newMeth(C$, 'refreshStrings$',  function () {
this.refreshGUI$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "focus":
case "edit":
if (this.haveGUI) {
this.table.clearSelection$();
this.table.rowToSelect=0;
this.table.columnToSelect=0;
this.table.selectOnFocus=false;
}this.enableMenuButtons$();
break;
case "clipboard":
this.enableMenuButtons$();
break;
}
});

Clazz.newMeth(C$, 'setCustomButtons$javax_swing_AbstractButtonA',  function (buttons) {
this.customButtons=buttons;
if ((buttons == null ) || (buttons.length == 0) ) {
this.remove$java_awt_Component(this.buttonPanel);
return;
}if (this.buttonPanel == null ) {
this.buttonPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(12,1).c$$java_awt_LayoutManager);
} else {
this.buttonPanel.removeAll$();
}for (var i=0; i < buttons.length; i++) {
this.buttonPanel.add$java_awt_Component(buttons[i]);
}
this.add$java_awt_Component$O(this.buttonPanel, "North");
});

Clazz.newMeth(C$, 'getButtonPanel$',  function () {
this.checkGUI$();
return this.buttonPanel;
});

Clazz.newMeth(C$, 'getUndoableEdit$I$O$I$I$O$I$I$S',  function (type, redo, redoRow, redoCol, undo, undoRow, undoCol, name) {
if (type == 3) {
var selectedButtons=Clazz.new_($I$(35,1));
undo=Clazz.array(java.lang.Object, -1, [undo, selectedButtons]);
redo=Clazz.array(java.lang.Object, -1, [redo, selectedButtons]);
if (this.customButtons != null ) {
for (var b, $b = 0, $$b = this.customButtons; $b<$$b.length&&((b=($$b[$b])),1);$b++) {
if (b.isSelected$()) {
selectedButtons.add$O(b);
}}
}}return Clazz.new_($I$(42,1).c$$I$O$I$I$O$I$I$S,[this, null, type, redo, redoRow, redoCol, undo, undoRow, undoCol, name]);
});

Clazz.newMeth(C$, 'isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return true;
});

Clazz.newMeth(C$, 'isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return true;
});

Clazz.newMeth(C$, 'isRemovable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return !this.isImportant$org_opensourcephysics_tools_FunctionEditor_FObject(obj) && this.isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject(obj) && this.isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject(obj)  ;
});

Clazz.newMeth(C$, 'setAnglesInDegrees$Z',  function (degrees) {
this.anglesInDegrees=degrees;
if (!this.haveGUI$()) return;
this.table.repaint$();
});

Clazz.newMeth(C$, 'setArrays$',  function () {
this.evaluate.clear$();
this.circularErrors.clear$();
this.errors.clear$();
var nObj=this.objects.size$();
if (this.names.length != nObj) {
this.names=Clazz.array(String, [nObj]);
}for (var i=0; i < this.names.length; i++) {
this.names[i]=this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.objects.get$I(i));
}
if (nObj == 0) return;
for (var i=0; i < nObj; i++) {
if (this.hasReference$I$I(i, i)) {
this.circularErrors.set$I(i);
}}
if (!this.circularErrors.isEmpty$()) {
for (var j=this.circularErrors.nextSetBit$I(0); j >= 0; j=this.circularErrors.nextSetBit$I(j + 1)) {
for (var i=0; i < nObj; i++) {
if (this.hasReference$I$I(i, j)) {
this.errors.set$I(i);
}}
}
}var temp=Clazz.new_($I$(37,1).c$$I,[nObj]);
temp.set$I$I(0, nObj);
temp.andNot$java_util_BitSet(this.errors);
var names=Clazz.new_($I$(37,1).c$$I,[nObj]);
while (!temp.isEmpty$()){
for (var i=temp.nextSetBit$I(0); i >= 0; i=temp.nextSetBit$I(i + 1)) {
var next=this.objects.get$I(i);
var references=p$2.getReferences$I$java_util_BitSet.apply(this, [i, null]);
var n=references.cardinality$();
if (n > 0) references.or$java_util_BitSet(names);
if (n == 0 || references.cardinality$() == names.cardinality$() ) {
this.evaluate.add$O(next);
names.set$I(i);
temp.clear$I(i);
}}
}
});

Clazz.newMeth(C$, 'hasReference$I$I',  function (i1, i2) {
return p$2.getReferences$I$java_util_BitSet.apply(this, [i1, null]).get$I(i2);
});

Clazz.newMeth(C$, 'getReferences$I$java_util_BitSet',  function (iObj, references) {
var obj=this.objects.get$I(iObj);
var nObj=this.objects.size$();
if (references == null ) {
references=Clazz.new_($I$(37,1).c$$I,[nObj]);
}var eqn=$I$(43,"padNames$S",[this.getExpression$org_opensourcephysics_tools_FunctionEditor_FObject(obj)]);
var directReferences=Clazz.new_($I$(37,1));
for (var i=0; i < nObj; i++) {
if (i == iObj) continue;
if ($I$(43,"containsWord$S$S",[eqn, this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.objects.get$I(i))])) {
directReferences.set$I(i);
if (!references.get$I(i)) {
references.set$I(i);
references.or$java_util_BitSet(p$2.getReferences$I$java_util_BitSet.apply(this, [i, references]));
}}}
this.setReferences$org_opensourcephysics_tools_FunctionEditor_FObject$java_util_BitSet(obj, directReferences);
return references;
}, p$2);

Clazz.newMeth(C$, 'isValidExpression$S',  function (expression) {
var p=Clazz.new_($I$(44,1).c$$S$S,["xxzz", expression]);
var s=this.getVariablesString$S("");
var start=$I$(6).getString$S("FunctionPanel.Instructions.ValueCell");
if (!s.startsWith$S(start)) {
return !Double.isNaN$D(p.evaluate$org_opensourcephysics_tools_ParameterA(Clazz.array($I$(44), [0])));
}var names=s.substring$I(start.length$()).split$S(" ");
var temp=Clazz.new_($I$(35,1));
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
var next=Clazz.new_($I$(44,1).c$$S$S,[name, "1"]);
temp.add$O(next);
}
var result=p.evaluate$java_util_List(temp);
return !Double.isNaN$D(result);
});

Clazz.newMeth(C$, 'references$S$java_util_HashSet',  function (name, checked) {
if (checked.contains$O(name)) return false;
var obj=this.getObject$S(name);
if (obj == null ) return false;
checked.add$O(name);
var eqn=$I$(43,"padNames$S",[this.getExpression$org_opensourcephysics_tools_FunctionEditor_FObject(obj)]);
for (var i=0, n=this.objects.size$(); i < n; i++) {
var next=this.objects.get$I(i);
if (next === obj ) {
continue;
}name=this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(next);
if ($I$(43).containsWord$S$S(eqn, name) || this.references$S$java_util_HashSet(name, checked) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'haveGUI$',  function () {
return this.haveGUI;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.titledBorder=$I$(15).createTitledBorder$S("");
this.setBorder$javax_swing_border_Border(this.titledBorder);
this.table=Clazz.new_($I$(45,1).c$$org_opensourcephysics_tools_FunctionEditor_TableModel,[this, null, this.tableModel]);
var tableScroller=Clazz.new_($I$(46,1).c$$java_awt_Component,[this.table]);
tableScroller.createHorizontalScrollBar$();
this.add$java_awt_Component$O(tableScroller, "Center");
if (this.addButtonPanel) {
this.buttonPanel=Clazz.new_([Clazz.new_($I$(41,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.newButton=Clazz.new_($I$(26,1));
this.newButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.tools.FunctionEditor'].getDefaultName$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createUniqueObject$org_opensourcephysics_tools_FunctionEditor_FObject$S$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [null, name, false]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj, true]);
});
})()
), Clazz.new_(P$.FunctionEditor$2.$init$,[this, null])));
this.cutButton=Clazz.new_($I$(26,1));
this.cutButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var array=this.b$['org.opensourcephysics.tools.FunctionEditor'].getSelectedObjects$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
p$2.copy$OA.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [array]);
for (var i=array.length; i > 0; i--) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [array[i - 1], true]);
}
this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
});
})()
), Clazz.new_(P$.FunctionEditor$3.$init$,[this, null])));
this.copyButton=Clazz.new_($I$(26,1));
this.copyButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionEditor$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$2.copy$OA.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.b$['org.opensourcephysics.tools.FunctionEditor'].getSelectedObjects$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [])]);
});
})()
), Clazz.new_(P$.FunctionEditor$4.$init$,[this, null])));
this.pasteButton=Clazz.new_($I$(26,1));
this.pasteButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionEditor$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].pasteAction$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
});
})()
), Clazz.new_(P$.FunctionEditor$5.$init$,[this, null])));
this.buttonPanel.add$java_awt_Component(this.newButton);
this.buttonPanel.add$java_awt_Component(this.copyButton);
this.buttonPanel.add$java_awt_Component(this.cutButton);
this.buttonPanel.add$java_awt_Component(this.pasteButton);
this.add$java_awt_Component$O(this.buttonPanel, "North");
this.buttonPanel.addMouseListener$java_awt_event_MouseListener(this.tableFocuser);
}this.table.getTableHeader$().addMouseListener$java_awt_event_MouseListener(this.tableFocuser);
tableScroller.addMouseListener$java_awt_event_MouseListener(this.tableFocuser);
this.addMouseListener$java_awt_event_MouseListener(this.tableFocuser);
this.haveGUI=true;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI) return;
if (this.lang == $I$(6).getLanguage$()) return;
this.lang=$I$(6).getLanguage$();
this.setTitles$();
this.titledBorder.setTitle$S(this.titledBorderText == null  ? $I$(6).getString$S("FunctionEditor.Border.Title") : this.titledBorderText);
if (this.addButtonPanel) {
this.cutButton.setText$S($I$(6).getString$S("FunctionEditor.Button.Cut"));
this.cutButton.setToolTipText$S($I$(6).getString$S("FunctionEditor.Button.Cut.Tooltip"));
this.copyButton.setText$S($I$(6).getString$S("FunctionEditor.Button.Copy"));
this.copyButton.setToolTipText$S($I$(6).getString$S("FunctionEditor.Button.Copy.Tooltip"));
this.pasteButton.setText$S($I$(6).getString$S("FunctionEditor.Button.Paste"));
this.pasteButton.setToolTipText$S($I$(6).getString$S("FunctionEditor.Button.Paste.Tooltip"));
this.newButton.setText$S($I$(6).getString$S("FunctionEditor.Button.New"));
this.newButton.setToolTipText$S(this.newButtonTipText == null  ? $I$(6).getString$S("FunctionEditor.Button.New.Tooltip") : this.newButtonTipText);
}C$.sciFormat0000.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(2).getDecimalFormatSymbols$());
C$.decimalFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(2).getDecimalFormatSymbols$());
for (var i=2; --i >= 0; ) this.table.getColumnModel$().getColumn$I(i).setHeaderValue$O(this.tableModel.getColumnName$I(i));

this.repaint$();
if (this.popupEditor != null  && this.popupEditor.isVisible$() ) {
this.tableCellEditor.stopCellEditing$();
}this.popupEditor=null;
});

Clazz.newMeth(C$, 'setBorderTitle$S',  function (title) {
this.checkGUI$();
this.titledBorder.setTitle$S(title);
});

Clazz.newMeth(C$, 'enableMenuButtons$',  function () {
if (!this.addButtonPanel || !this.haveGUI ) return;
var o=this.getSelectedObject$();
this.copyButton.setEnabled$Z(o != null );
this.cutButton.setEnabled$Z(o != null  && this.isRemovable$org_opensourcephysics_tools_FunctionEditor_FObject(this.getSelectedObject$()) );
this.getClipboardContentsAsync$java_util_function_Consumer(((P$.FunctionEditor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FunctionEditor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$org_opensourcephysics_controls_XMLControlA','accept$O'],  function (contents) /*block*/{
this.b$['org.opensourcephysics.tools.FunctionEditor'].pasteButton.setEnabled$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'].pasteButton, [contents != null ]);
});
})()
), Clazz.new_(P$.FunctionEditor$lambda1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
if (visible) this.enableMenuButtons$();
});

Clazz.newMeth(C$, 'getParamEditor$',  function () {
return this.paramEditor;
});

Clazz.newMeth(C$, 'setParamEditor$org_opensourcephysics_tools_ParamEditor',  function (editor) {
if ((this.paramEditor == null ) && (editor != null ) ) {
this.paramEditor=editor;
this.evaluateAll$();
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'getFunctionPanel$',  function () {
return this.functionPanel;
});

Clazz.newMeth(C$, 'setFunctionPanel$org_opensourcephysics_tools_FunctionPanel',  function (panel) {
this.functionPanel=panel;
});

Clazz.newMeth(C$, 'getDefaultName$',  function () {
return $I$(6).getString$S("FunctionEditor.New.Name.Default");
});

Clazz.newMeth(C$, 'getVariablesString$S',  function (separator) {
var selectedName=this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.getSelectedObject$());
var vars=Clazz.new_($I$(47,1).c$$S,[""]);
if (this.skipAllName == null  || !this.skipAllName.equals$O(selectedName) ) {
for (var i=0; i < this.names.length; i++) {
if (this.names[i].equals$O(selectedName)) {
continue;
}vars.append$S(" ");
vars.append$S(this.names[i]);
}
}return this.getVariablesString$StringBuffer$S(vars, separator);
});

Clazz.newMeth(C$, 'getVariablesString$StringBuffer$S',  function (vars, separator) {
return (vars.length$() == 0 ? $I$(6).getString$S("FunctionPanel.Instructions.Help") : $I$(6).getString$S("FunctionPanel.Instructions.ValueCell") + separator + vars.substring$I(1) );
});

Clazz.newMeth(C$, 'getRemovableRowCount',  function () {
var n=0;
for (var i=this.objects.size$(); --i >= 0; ) {
if (this.isRemovable$org_opensourcephysics_tools_FunctionEditor_FObject(this.objects.get$I(i))) ++n;
}
return n;
}, p$2);

Clazz.newMeth(C$, 'getPartlyEditableRowCount$',  function () {
var n=0;
for (var i=this.objects.size$(); --i >= 0; ) {
var obj=this.objects.get$I(i);
if (this.isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject(obj) || this.isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject(obj) ) {
++n;
}}
return n;
});

Clazz.newMeth(C$, 'containsInvalidExpressions$',  function () {
for (var i=this.objects.size$(); --i >= 0; ) {
if (this.isInvalidExpression$org_opensourcephysics_tools_FunctionEditor_FObject(this.objects.get$I(i))) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'copy$OA',  function (array) {
if ((array != null ) && (array.length > 0) ) {
var control=Clazz.new_($I$(48,1).c$$O,[this]);
control.setValue$S$O("selected", array);
$I$(2,"copy$S$java_awt_datatransfer_ClipboardOwner",[control.toXML$(), null]);
this.pasteButton.setEnabled$Z(true);
this.firePropertyChange$S$O$O("clipboard", null, null);
}}, p$2);

Clazz.newMeth(C$, 'pasteAction$',  function () {
this.getClipboardContentsAsync$java_util_function_Consumer(((P$.FunctionEditor$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "FunctionEditor$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$org_opensourcephysics_controls_XMLControlA','accept$O'],  function (controls) /*block*/{
if (controls == null ) {
return;
}for (var i=0; i < controls.length; i++) {
var obj=controls[i].loadObject$O.apply(controls[i], [null]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj, true]);
}
this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
});
})()
), Clazz.new_(P$.FunctionEditor$lambda2.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getClipboardContentsAsync$java_util_function_Consumer',  function (c) {
$I$(2,"paste$java_util_function_Consumer",[((P$.FunctionEditor$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "FunctionEditor$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (dataString) /*block*/{
if (dataString != null ) {
var control=Clazz.new_($I$(48,1));
control.readXML$S.apply(control, [dataString]);
if (control.getObjectClass$.apply(control, []) === this.b$['org.opensourcephysics.tools.FunctionEditor'].getClass$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []) ) {
var list=control.getPropsRaw$.apply(control, []);
for (var i=0, n=list.size$.apply(list, []); i < n; i++) {
var prop=list.get$I.apply(list, [i]);
if (prop.getPropertyName$.apply(prop, []).equals$O.apply(prop.getPropertyName$.apply(prop, []), ["selected"])) {
this.$finals$.c.accept$O(prop.getChildControls$.apply(prop, []));
return;
}}
}}this.$finals$.c.accept$O(null);
});
})()
), Clazz.new_(P$.FunctionEditor$lambda3.$init$,[this, {c:c}]))]);
});

Clazz.newMeth(C$, 'getSelectedObject$',  function () {
if (this.table == null ) return null;
var row=this.table.getSelectedRow$();
if (row == -1) {
return null;
}return this.objects.get$I(row);
});

Clazz.newMeth(C$, 'getSelectedObjects$',  function () {
if (this.table == null ) return null;
var rows=this.table.getSelectedRows$();
var selected=Clazz.array($I$(49), [rows.length]);
for (var i=0; i < rows.length; i++) {
selected[i]=this.objects.get$I(rows[i]);
}
return selected;
});

Clazz.newMeth(C$, 'isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, name) {
if (this.forbiddenNames.contains$O(name)) {
return true;
}var it=this.objects.iterator$();
while (it.hasNext$()){
var next=it.next$();
if (next === obj ) {
continue;
}if (name.equals$O(this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(next))) {
return true;
}}
if ((this.paramEditor != null ) && (this.paramEditor !== this ) ) {
var params=this.paramEditor.getParameters$();
for (var i=0; i < params.length; i++) {
if ((params[i] !== obj ) && name.equals$O(params[i].getName$()) ) {
return true;
}}
}return !Double.isNaN$D(C$.getNumber$S(name));
});

Clazz.newMeth(C$, 'getNumber$S',  function (name) {
if (C$.couldBeNumber$S(name)) {
try {
return Double.parseDouble$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}return NaN;
}, 1);

Clazz.newMeth(C$, 'couldBeNumber$S',  function (n) {
return (n.length$() > 0 && "+-.I0123456789".indexOf$I(n.charAt$I(0)) >= 0 );
}, 1);

Clazz.newMeth(C$, 'getValidName$S',  function (proposedName) {
if (proposedName == null  || proposedName.trim$().equals$O("") ) {
return "";
}var name=proposedName;
var invalid=p$2.getInvalidTokens$S.apply(this, [name]);
while (!invalid.isEmpty$()){
for (var it=invalid.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var n=name.indexOf$S(next);
while (n > -1){
name=(n == 0) ? name.substring$I(next.length$()) : name.substring$I$I(0, n) + name.substring$I(n + next.length$());
n=name.indexOf$S(next);
}
}
var input=$I$(7,"showInputDialog$java_awt_Component$S$S$I$S",[this, $I$(6).getString$S("FunctionEditor.Dialog.InvalidName.Message"), $I$(6).getString$S("FunctionEditor.Dialog.InvalidName.Title"), 2, name]);
if (input == null ) {
return null;
}if (input.equals$O(name)) {
break;
}name=input;
invalid=p$2.getInvalidTokens$S.apply(this, [name]);
}
if (name.length$() > 0 && Character.isDigit$C(name.charAt$I(0)) ) {
$I$(27,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(6).getString$S("FunctionEditor.Dialog.InvalidNumberInName.Text"), $I$(6).getString$S("FunctionEditor.Dialog.InvalidName.Title"), 2]);
return "";
}return name;
}, p$2);

Clazz.newMeth(C$, 'getInvalidTokens$S',  function (name) {
var invalid=Clazz.new_($I$(35,1));
if (name.indexOf$S(" ") > -1) {
invalid.add$O(" ");
}var suspects=$I$(50).parserOperators;
for (var i=0; i < suspects.length; i++) {
if (name.indexOf$S(suspects[i]) > -1) {
invalid.add$O(suspects[i]);
}}
return invalid;
}, p$2);

Clazz.newMeth(C$, 'createUniqueObject$org_opensourcephysics_tools_FunctionEditor_FObject$S$Z',  function (obj, proposedName, confirmChanges) {
proposedName=p$2.getValidName$S.apply(this, [proposedName]);
if (proposedName == null  || proposedName.trim$().equals$O("") ) {
return null;
}var name=proposedName;
while (this.isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S(obj, proposedName)){
var i=0;
while (this.isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S(obj, name)){
++i;
name=proposedName + i;
}
if (!confirmChanges) {
break;
}var input=$I$(7,"showInputDialog$java_awt_Component$S$S$I$S",[this, "\"" + proposedName + "\" " + $I$(6).getString$S("FunctionEditor.Dialog.DuplicateName.Message") , $I$(6).getString$S("FunctionEditor.Dialog.DuplicateName.Title"), 2, name]);
if (input == null ) {
return null;
}if (input.equals$O("") || input.equals$O(name) ) {
break;
}name=proposedName=input;
}
var expression=(obj == null ) ? "0" : this.getExpression$org_opensourcephysics_tools_FunctionEditor_FObject(obj);
return this.createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject(name, expression, obj);
});

Clazz.newMeth(C$, 'getVariablePoints$javax_swing_JTextPane$java_awt_Point$IA',  function (variablesPane, pt, ret) {
var text=variablesPane.getText$();
var pt0=text.indexOf$S(":\n") + 2;
if (pt0 < 2) {
return false;
}var doc=variablesPane.getStyledDocument$();
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(0, text.length$(), doc.getStyle$S("blue"), false);
var ptvar=variablesPane.viewToModel$java_awt_Point(pt);
if (ptvar < pt0 || ptvar == text.length$() ) {
return false;
}while (ptvar > pt0){
var s=text.substring$I$I(pt0, ptvar);
if (s.endsWith$S(" ")) break;
--ptvar;
}
var s=text.substring$I(ptvar);
var len=s.indexOf$S(",");
if (len < 0) len=s.indexOf$S(" ");
if (len < 0) len=s.length$();
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(ptvar, len, doc.getStyle$S("red"), false);
ret[0]=ptvar;
ret[1]=ptvar + len;
return true;
}, 1);

Clazz.newMeth(C$, 'format$D$D',  function (value, zeroLevel) {
if (Math.abs(value) < zeroLevel ) {
value=0;
}var rounded=Long.$ival(Math.round$D(value));
if (Math.abs(value - rounded) < zeroLevel ) {
value=rounded;
}var absVal=Math.abs(value);
var scientific=((absVal < 0.01 ) && (value != 0 ) ) || (absVal >= 1000 ) ;
var s=scientific ? C$.sciFormat0000.format$D(value) : C$.decimalFormat.format$D(value);
var n=s.indexOf$S("E");
var tail=(n > -1) ? s.substring$I(n) : "";
s=(n > -1) ? s.substring$I$I(0, n) : s;
n=s.indexOf$S("0000");
if (n > 1) {
s=s.substring$I$I(0, n + 1);
}n=s.indexOf$S("9999");
if (n > 1) {
s=s.substring$I$I(0, n);
var symbols=C$.sciFormat0000.getDecimalFormatSymbols$();
var separator=symbols.getDecimalSeparator$();
var m=s.indexOf$I(separator);
if (m == s.length$() - 1) {
var i=Integer.parseInt$S(s.substring$I$I(0, m)) + 1;
s=Integer.toString$I(i) + separator + "0" ;
} else {
var i=Integer.parseInt$S(s.substring$I(n - 1)) + 1;
s=s.substring$I$I(0, n - 1) + i;
}}return s + tail;
}, 1);

Clazz.newMeth(C$, 'round$D$I',  function (value, sigfigs) {
if (value == 0 ) return value;
var multiplier=value < 0  ? -1 : 1;
value=Math.abs(value);
var limit=Math.pow(10, sigfigs - 1);
var power=0;
while (value < limit ){
value*=10;
++power;
}
while (value > 10 * limit ){
value/=10;
--power;
}
value=Long.$dval(Math.round$D(value));
return multiplier * value / Math.pow(10, power);
}, 1);

Clazz.newMeth(C$, 'tabToNext$',  function () {
this.newButton.requestFocusInWindow$();
});

C$.$static$=function(){C$.$static$=0;
C$.THETA=$I$(31).parseTeX$S("$\\theta$");
C$.OMEGA=$I$(31).parseTeX$S("$\\omega$");
C$.LIGHT_BLUE=Clazz.new_($I$(1,1).c$$I$I$I,[204, 204, 255]);
C$.MEDIUM_RED=Clazz.new_($I$(1,1).c$$I$I$I,[255, 160, 180]);
C$.LIGHT_RED=Clazz.new_($I$(1,1).c$$I$I$I,[255, 180, 200]);
C$.LIGHT_GRAY=$I$(32).getColor$O("Panel.background");
C$.DARK_RED=Clazz.new_($I$(1,1).c$$I$I$I,[220, 0, 0]);
C$.allowPopopFieldTooltip=!$I$(2).isJS;
{
C$.decimalFormat=Clazz.new_($I$(33,1));
C$.decimalFormat.setMaximumFractionDigits$I(4);
C$.decimalFormat.setMinimumFractionDigits$I(0);
C$.decimalFormat.setMaximumIntegerDigits$I(3);
C$.decimalFormat.setMinimumIntegerDigits$I(1);
C$.sciFormat0000=$I$(34).newDecimalFormat$S("0.0000E0");
};
C$.undoEditsEnabled=true;
C$.editTypes=Clazz.array(String, -1, ["add row", "delete row", "edit name", "edit expression"]);
C$.tempRange=Clazz.array(Integer.TYPE, [2]);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.FunctionEditor, "FObject", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionEditor, "Table", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectOnFocus=true;
},1);

C$.$fields$=[['Z',['selectOnFocus'],'I',['rowToSelect','columnToSelect']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_FunctionEditor_TableModel',  function (model) {
Clazz.super_(C$, this);
this.setModel$javax_swing_table_TableModel(model);
this.setSelectionMode$I(2);
this.setColumnSelectionAllowed$Z(false);
this.getTableHeader$().setReorderingAllowed$Z(false);
this.setGridColor$java_awt_Color($I$(1).BLACK);
this.addMouseListener$java_awt_event_MouseListener(((P$.FunctionEditor$Table$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$Table$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var row=this.b$['javax.swing.JTable'].rowAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var col=this.b$['javax.swing.JTable'].columnAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var name=this.b$['javax.swing.JTable'].getValueAt$I$I.apply(this.b$['javax.swing.JTable'], [row, 0]).toString();
if (name.contains$CharSequence($I$(3).THETA) || name.contains$CharSequence($I$(3).OMEGA) ) {
var popup=Clazz.new_($I$(4,1));
var item=Clazz.new_($I$(5,1));
item.setText$S(this.b$['org.opensourcephysics.tools.FunctionEditor'].anglesInDegrees ? $I$(6).getString$S("FunctionEditor.Popup.MenuItem.SwitchToRadians") : $I$(6).getString$S("FunctionEditor.Popup.MenuItem.SwitchToDegrees"));
item.addActionListener$java_awt_event_ActionListener(((P$.FunctionEditor$Table$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$Table$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].setAnglesInDegrees$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [!this.b$['org.opensourcephysics.tools.FunctionEditor'].anglesInDegrees]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], ["angles_in_radians", null, Boolean.valueOf$Z(!this.b$['org.opensourcephysics.tools.FunctionEditor'].anglesInDegrees)]);
});
})()
), Clazz.new_(P$.FunctionEditor$Table$1$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.FunctionEditor'].table, e.getX$(), e.getY$());
}}this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect=row;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect=col;
if (!this.b$['org.opensourcephysics.tools.FunctionEditor'].tableModel.isCellEditable$I$I(row, col)) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.clearSelection$();
this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].selectOnFocus=false;
} else if (e.getClickCount$() == 1) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(this.b$['org.opensourcephysics.tools.FunctionEditor'], col);
this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].selectOnFocus=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.hasFocus$();
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var col=this.b$['javax.swing.JTable'].columnAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
if (col != 0) return;
var row=this.b$['javax.swing.JTable'].rowAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].tableModel.isCellEditable$I$I(row, col)) {
var name=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getValueAt$I$I(row, col);
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].getObject$S.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [name]);
var desc=this.b$['org.opensourcephysics.tools.FunctionEditor'].getDescription$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
var message=$I$(6).getString$S("FunctionEditor.Dialog.SetDescription.Message");
message+=" \"" + name + "\"" ;
var input=$I$(7,"showInputDialog$java_awt_Component$S$S$I$S",[this.b$['org.opensourcephysics.tools.FunctionEditor'], message, $I$(6).getString$S("FunctionEditor.Dialog.SetDescription.Title"), -1, desc]);
if (input == null  || input.equals$O(desc) ) {
return;
}desc=input;
this.b$['org.opensourcephysics.tools.FunctionEditor'].setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj, desc]);
}}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.FunctionEditor$Table$1)));
this.addFocusListener$java_awt_event_FocusListener(((P$.FunctionEditor$Table$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$Table$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["focus", null, null]);
if (this.b$['javax.swing.JTable'].getRowCount$.apply(this.b$['javax.swing.JTable'], []) == 0) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.tabToNext$org_opensourcephysics_tools_FunctionEditor(this.b$['org.opensourcephysics.tools.FunctionEditor']);
return;
}if (this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].selectOnFocus && (this.b$['javax.swing.JTable'].getRowCount$.apply(this.b$['javax.swing.JTable'], []) > 0) ) {
this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].selectCell$I$I.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.Table'], [this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].rowToSelect, this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].columnToSelect]);
var col=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getSelectedColumn$();
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(this.b$['org.opensourcephysics.tools.FunctionEditor'], col);
}this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].selectOnFocus=true;
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].rowToSelect=Math.max(0, this.b$['javax.swing.JTable'].getSelectedRow$.apply(this.b$['javax.swing.JTable'], []));
this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].columnToSelect=Math.max(0, this.b$['javax.swing.JTable'].getSelectedColumn$.apply(this.b$['javax.swing.JTable'], []));
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.FunctionEditor$Table$2)));
var im=this.getInputMap$I(1);
var enterAction=((P$.FunctionEditor$Table$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$Table$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var table=e.getSource$();
var row=table.getSelectedRow$();
var column=table.getSelectedColumn$();
table.editCellAt$I$I$java_util_EventObject(row, column, e);
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.field.requestFocus$();
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.field.selectAll$();
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.FunctionEditor$Table$3));
var enter=$I$(11).getKeyStroke$I$I(10, 0);
$I$(2,"setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action",[im, enter, "enter", this.getActionMap$(), enterAction]);
var tab=$I$(11).getKeyStroke$I$I(9, 0);
var tabAction=((P$.FunctionEditor$Table$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$Table$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rowCount=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getRowCount$();
var row=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect;
var col=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect;
var atEnd=((col == 1) && (row == rowCount - 1) );
col=(col == 0) ? 1 : 0;
row=(col == 0) ? ((row == this.b$['javax.swing.JTable'].getRowCount$.apply(this.b$['javax.swing.JTable'], []) - 1) ? 0 : row + 1) : row;
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].table.isEditing$()) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect=row;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect=col;
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.stopCellEditing$();
}if (atEnd) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.tabToNext$org_opensourcephysics_tools_FunctionEditor(this.b$['org.opensourcephysics.tools.FunctionEditor']);
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.clearSelection$();
} else {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.requestFocusInWindow$();
this.b$['org.opensourcephysics.tools.FunctionEditor.Table'].selectCell$I$I.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.Table'], [row, col]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(this.b$['org.opensourcephysics.tools.FunctionEditor'], col);
}});
})()
), Clazz.new_($I$(10,1),[this, null],P$.FunctionEditor$Table$4));
this.getActionMap$().put$O$javax_swing_Action(im.get$javax_swing_KeyStroke(tab), tabAction);
}, 1);

Clazz.newMeth(C$, 'selectCell$I$I',  function (row, col) {
if (row == this.getRowCount$()) {
row=this.getRowCount$() - 1;
col=0;
}if (row == -1) {
return;
}while (!this.isCellEditable$I$I(row, col)){
if (col == 0) {
col=1;
} else {
col=0;
row+=1;
}if (row == this.getRowCount$()) {
row=0;
}if ((row == this.getSelectedRow$()) && (col == this.getSelectedColumn$()) ) {
break;
}}
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect=row;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect=col;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.changeSelection$I$I$Z$Z(row, col, false, false);
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, column) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.isExpression=column == 1;
return this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor;
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
return this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellRenderer;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
this.getTableHeader$().setFont$java_awt_Font(font);
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellRenderer.$font=font;
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.field.setFont$java_awt_Font(font);
var size=Math.max(font.getSize$(), 24);
this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.popupField.setFont$java_awt_Font(font.deriveFont$F(size));
this.setRowHeight$I(font.getSize$() + 4);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionEditor, "TableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.settingValue=false;
},1);

C$.$fields$=[['Z',['settingValue']]]

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.size$();
});

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return (col == 0) ? $I$(6).getString$S("FunctionEditor.Table.Column.Name") : $I$(6).getString$S("FunctionEditor.Table.Column.Value");
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(row);
var name=this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
if (col == 0) return name;
var expression=this.b$['org.opensourcephysics.tools.FunctionEditor'].getExpression$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].anglesInDegrees && (name.indexOf$S($I$(3).THETA) >= 0 || name.indexOf$S($I$(3).OMEGA) >= 0 ) ) {
var express=expression;
if (express.indexOf$S("if") == -1) {
express=express.replaceAll$S$S(",", ".");
}var value=$I$(3).getNumber$S(express);
if (Double.isNaN$D(value)) return expression;
var s=$I$(3).format$D$D(value * 180 / 3.141592653589793, 1.0E-4);
var isOmega=(name.indexOf$S($I$(3).OMEGA) >= 0);
if (isOmega || name.indexOf$S($I$(3).THETA) >= 0 ) s+="\u00b0";
return s;
}if (expression.indexOf$S("if") == -1) {
var isComma=$I$(2).getCurrentDecimalSeparator$() == ",";
var express=expression;
if (isComma) express=express.replaceAll$S$S("\\.", ",");
 else express=express.replaceAll$S$S(",", ".");
return express;
}return expression;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
if (this.settingValue) {
return;
}if (Clazz.instanceOf(value, "java.lang.String")) {
var val=value;
var n=val.indexOf$S("\u00b0");
if (n >= 0) val=val.substring$I$I(0, n);
var prev=null;
var type=0;
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(row);
if (col == 0) {
prev=this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
type=2;
this.settingValue=true;
if (!val.equals$O(prev)) {
obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createUniqueObject$org_opensourcephysics_tools_FunctionEditor_FObject$S$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj, val, true]);
val=this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
}this.settingValue=false;
if (obj == null  || val.equals$O(prev) ) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(this.b$['org.opensourcephysics.tools.FunctionEditor'], 0);
return;
}this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(row);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(row, obj);
} else {
prev=this.b$['org.opensourcephysics.tools.FunctionEditor'].getExpression$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
type=3;
if (val.equals$O(prev)) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(this.b$['org.opensourcephysics.tools.FunctionEditor'], 1);
return;
}if (val.equals$O("")) {
val="0";
}var name=this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].anglesInDegrees && (name.indexOf$S($I$(3).THETA) >= 0 || name.indexOf$S($I$(3).OMEGA) >= 0 ) ) {
var d=$I$(3).getNumber$S(val);
if (!Double.isNaN$D(d)) val=String.valueOf$D(d * 3.141592653589793 / 180);
}obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]), val, obj]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(row);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(row, obj);
}this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.repaint$();
var edit=null;
if ($I$(3).undoEditsEnabled) {
edit=this.b$['org.opensourcephysics.tools.FunctionEditor'].getUndoableEdit$I$O$I$I$O$I$I$S.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [type, val, row, col, prev, row, col, this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj])]);
}this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["edit", this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]), edit]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(this.b$['org.opensourcephysics.tools.FunctionEditor'], col);
}});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(row);
return (col == 0 ? this.b$['org.opensourcephysics.tools.FunctionEditor'].isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]) : this.b$['org.opensourcephysics.tools.FunctionEditor'].isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionEditor, "CellEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.field=Clazz.new_($I$(14,1));
this.keyPressed=false;
this.mouseClicked=false;
this.popupField=Clazz.new_($I$(14,1));
},1);

C$.$fields$=[['Z',['keyPressed','mouseClicked','isExpression'],'I',['minPopupWidth','varBegin','varEnd'],'S',['prevName','prevExpression'],'O',['panel','javax.swing.JPanel','field','javax.swing.JTextField','editorPane','javax.swing.JPanel','+dragPane','popupField','javax.swing.JTextField','variablesPane','javax.swing.JTextPane','revertButton','javax.swing.JButton','valueMouseController','org.opensourcephysics.tools.FunctionEditor.ValueMouseControl','prevObject','org.opensourcephysics.tools.FunctionEditor.FObject']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.panel.setFocusable$Z(false);
this.panel.add$java_awt_Component$O(this.field, "Center");
this.panel.setOpaque$Z(false);
this.panel.setBorder$javax_swing_border_Border($I$(15).createEmptyBorder$I$I$I$I(0, 1, 1, 2));
this.field.setBorder$javax_swing_border_Border(null);
this.field.setEditable$Z(true);
this.field.setFont$java_awt_Font(this.field.getFont$().deriveFont$F(18.0));
this.field.addKeyListener$java_awt_event_KeyListener(((P$.FunctionEditor$CellEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].keyPressed=true;
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
} else {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].field.setBackground$java_awt_Color($I$(1).yellow);
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.FunctionEditor$CellEditor$1)));
this.field.addFocusListener$java_awt_event_FocusListener(((P$.FunctionEditor$CellEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
$I$(3).undoEditsEnabled=true;
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].mouseClicked=false;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.clearSelection$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].mouseClicked) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
}if (this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].keyPressed) {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].keyPressed=false;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.requestFocusInWindow$();
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.FunctionEditor$CellEditor$2)));
}, 1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (atable, value, isSelected, row, column) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect=row;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect=column;
$I$(3).undoEditsEnabled=false;
var popup=p$1.getPopupEditor.apply(this, []);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.functionTool != null ) {
var level=this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.functionTool.getFontLevel$();
$I$(17).setFonts$O$I(popup, level);
}this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.setText$S($I$(6).getString$S("FunctionEditor.DragLabel.Text"));
this.prevObject=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(row);
if (this.prevObject != null ) {
this.prevName=this.b$['org.opensourcephysics.tools.FunctionEditor'].getName$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.prevObject]);
this.prevExpression=this.b$['org.opensourcephysics.tools.FunctionEditor'].getExpression$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.prevObject]);
}var val=value.toString();
if (this.prevObject != null  && column > 0 ) {
var n=val.indexOf$S("\u00b0");
if (n >= 0) {
val=val.substring$I$I(0, n);
} else {
val=this.prevExpression;
}}this.popupField.setText$S(val);
this.popupField.requestFocusInWindow$();
this.setInitialValues$();
this.popupField.selectAll$();
this.popupField.setBackground$java_awt_Color($I$(1).WHITE);
if (column == 1) {
this.variablesPane.setText$S(this.b$['org.opensourcephysics.tools.FunctionEditor'].getVariablesString$S.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [":\n"]));
var doc=this.variablesPane.getStyledDocument$();
var blue=doc.getStyle$S("blue");
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(0, this.variablesPane.getText$().length$(), blue, false);
popup.getContentPane$().add$java_awt_Component$O(this.variablesPane, "Center");
} else {
popup.getContentPane$().remove$java_awt_Component(this.variablesPane);
}var cell=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getCellRect$I$I$Z(row, column, true);
this.minPopupWidth=cell.width + 2;
var b=this.dragPane.isVisible$();
this.dragPane.setVisible$Z(true);
var dim=p$1.resizePopupEditor.apply(this, []);
this.dragPane.setVisible$Z(b);
var p=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getLocationOnScreen$();
popup.setLocation$I$I(p.x + cell.x + (cell.width/2|0)  - (dim.width/2|0), p.y + cell.y + (cell.height/2|0)  - (dim.height/2|0));
popup.setVisible$Z(true);
return this.panel;
});

Clazz.newMeth(C$, 'setInitialValueAsync$',  function () {
$I$(18,"invokeLater$Runnable",[((P$.FunctionEditor$CellEditor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].setInitialValues$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'], []);
});
})()
), Clazz.new_(P$.FunctionEditor$CellEditor$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'setInitialValues$',  function () {
var val=this.popupField.getText$().replaceAll$S$S(",", ".");
if ("".equals$O(val)) val="0";
var value=$I$(3).getNumber$S(val);
if (Double.isNaN$D(value)) {
this.dragPane.setVisible$Z(false);
} else {
this.valueMouseController.prevValue=value;
this.popupField.setToolTipText$S($I$(6).getString$S("FunctionEditor.PopupField.Tooltip"));
this.revertButton.setToolTipText$S($I$(6).getString$S("FunctionEditor.Button.Revert.Tooltip"));
this.variablesPane.setToolTipText$S($I$(6).getString$S("FunctionEditor.VariablesPane.Tooltip"));
var row=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect;
var tooltip=$I$(6).getString$S("FunctionEditor.DragLabel.Tooltip");
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.setToolTipText$S(tooltip);
var name=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getValueAt$I$I(row, 0);
if (!name.equals$O("t")) {
this.dragPane.setVisible$Z(true);
} else {
this.dragPane.setVisible$Z(false);
}}});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
if ((e == null ) || (Clazz.instanceOf(e, "java.awt.event.ActionEvent")) ) {
return true;
}if (Clazz.instanceOf(e, "java.awt.event.MouseEvent")) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["focus", null, null]);
if ((e).getClickCount$() == 2) {
this.mouseClicked=true;
$I$(18,"invokeLater$Runnable",[((P$.FunctionEditor$CellEditor$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].field.selectAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].field, []);
});
})()
), Clazz.new_(P$.FunctionEditor$CellEditor$lambda2.$init$,[this, null]))]);
return true;
}}return false;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
this.popupField.setBackground$java_awt_Color($I$(1).WHITE);
this.field.setBackground$java_awt_Color($I$(1).WHITE);
$I$(18,"invokeLater$Runnable",[((P$.FunctionEditor$CellEditor$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.revalidate$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'].table, []);
});
})()
), Clazz.new_(P$.FunctionEditor$CellEditor$lambda3.$init$,[this, null]))]);
return this.field.getText$();
});

Clazz.newMeth(C$, 'resizePopupEditor',  function () {
var s=this.popupField.getText$();
var font=this.popupField.getFont$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(s, $I$(2).frc).getBounds$();
var h=rect.height;
var w=Math.max(this.minPopupWidth, rect.width + 32);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect == 1) {
s=this.variablesPane.getText$();
var n=s.indexOf$S("\n");
s=s.substring$I(n + 1);
font=this.variablesPane.getFont$().deriveFont$I(1);
rect=font.getStringBounds$S$java_awt_font_FontRenderContext(s, $I$(2).frc).getBounds$();
w=Math.max(w, rect.width);
}var dim=Clazz.new_($I$(19,1).c$$I$I,[w, h]);
this.editorPane.setPreferredSize$java_awt_Dimension(dim);
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.pack$();
dim.width=this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.getWidth$();
return dim;
}, p$1);

Clazz.newMeth(C$, 'getPopupEditor',  function () {
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor != null ) return this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor;
this.popupField.setEditable$Z(true);
var font=this.popupField.getFont$().deriveFont$F(24.0);
var level=this.b$['org.opensourcephysics.tools.FunctionEditor'].functionPanel.functionTool.getFontLevel$();
font=$I$(17).getResizedFont$java_awt_Font$I(font, level);
this.popupField.setFont$java_awt_Font(font);
this.popupField.addKeyListener$java_awt_event_KeyListener(((P$.FunctionEditor$CellEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].getPopupValue$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'], []);
} else {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].popupField.setBackground$java_awt_Color($I$(1).yellow);
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) return;
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].setInitialValueAsync$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'], []);
});
})()
), Clazz.new_($I$(16,1),[this, null],P$.FunctionEditor$CellEditor$3)));
this.variablesPane=$I$(7).newJTextPane$();
this.variablesPane.setEditable$Z(false);
this.variablesPane.setFocusable$Z(false);
this.variablesPane.setBorder$javax_swing_border_Border(this.popupField.getBorder$());
font=this.popupField.getFont$().deriveFont$F(14.0);
font=$I$(17).getResizedFont$java_awt_Font$I(font, level);
this.variablesPane.setFont$java_awt_Font(font);
var doc=this.variablesPane.getStyledDocument$();
var def=$I$(20).getDefaultStyleContext$().getStyle$S("default");
$I$(21).setFontFamily$javax_swing_text_MutableAttributeSet$S(def, "SansSerif");
var blue=doc.addStyle$S$javax_swing_text_Style("blue", def);
$I$(21).setBold$javax_swing_text_MutableAttributeSet$Z(blue, false);
$I$(21,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[blue, $I$(1).blue]);
var red=doc.addStyle$S$javax_swing_text_Style("red", blue);
$I$(21).setBold$javax_swing_text_MutableAttributeSet$Z(red, true);
$I$(21,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[red, $I$(1).red]);
this.varBegin=this.varEnd=0;
this.variablesPane.addMouseListener$java_awt_event_MouseListener(((P$.FunctionEditor$CellEditor$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varEnd > 0) {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].variablesPane.setCaretPosition$I(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varBegin);
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].variablesPane.moveCaretPosition$I(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varEnd);
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].popupField.replaceSelection$S(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].variablesPane.getSelectedText$());
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].popupField.setBackground$java_awt_Color($I$(1).yellow);
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].setInitialValueAsync$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'], []);
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
var doc=this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].variablesPane.getStyledDocument$();
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(0, this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].variablesPane.getText$().length$(), doc.getStyle$S("blue"), false);
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varBegin=this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varEnd=0;
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.FunctionEditor$CellEditor$4)));
this.variablesPane.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.FunctionEditor$CellEditor$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varBegin=this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varEnd=0;
var ret=$I$(3).tempRange;
if ($I$(3,"getVariablePoints$javax_swing_JTextPane$java_awt_Point$IA",[this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].variablesPane, e.getPoint$(), ret])) {
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varBegin=ret[0];
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].varEnd=ret[1];
}});
})()
), Clazz.new_($I$(22,1),[this, null],P$.FunctionEditor$CellEditor$5)));
this.dragPane=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.dragPane.setBackground$java_awt_Color(Clazz.new_($I$(1,1).c$$I$I$I,[240, 255, 240]));
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel=Clazz.new_($I$(23,1));
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.setHorizontalAlignment$I(0);
var line=$I$(15,"createLineBorder$java_awt_Color",[$I$(3).LIGHT_BLUE]);
var space=$I$(15).createEmptyBorder$I$I$I$I(2, 3, 2, 3);
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.setBorder$javax_swing_border_Border($I$(15).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, space));
font=this.popupField.getFont$().deriveFont$F(12.0);
font=$I$(17).getResizedFont$java_awt_Font$I(font, level);
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.setFont$java_awt_Font(font);
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.setForeground$java_awt_Color($I$(1).green.darker$().darker$());
this.dragPane.add$java_awt_Component$O(this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel, "Center");
this.valueMouseController=Clazz.new_($I$(24,1).c$$org_opensourcephysics_tools_FunctionEditor_CellEditor,[this, null, this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.addMouseListener$java_awt_event_MouseListener(this.valueMouseController);
this.b$['org.opensourcephysics.tools.FunctionEditor'].dragLabel.addMouseMotionListener$java_awt_event_MouseMotionListener(this.valueMouseController);
var imageFile="/org/opensourcephysics/resources/tools/images/close.gif";
var icon=$I$(25).getImageIcon$S(imageFile);
this.revertButton=Clazz.new_($I$(26,1).c$$javax_swing_Icon,[icon]);
line=$I$(15,"createLineBorder$java_awt_Color",[$I$(1).LIGHT_GRAY]);
space=$I$(15).createEmptyBorder$I$I$I$I(0, 2, 0, 2);
this.revertButton.setBorder$javax_swing_border_Border($I$(15).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, space));
this.revertButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionEditor$CellEditor$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionEditor$CellEditor$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].prevObject != null ) {
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect == 1) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.setValueAt$O$I$I(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].prevExpression, this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect, 1);
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].field.setText$S(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].prevExpression);
} else {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.setValueAt$O$I$I(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].prevName, this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect, 0);
this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].field.setText$S(this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].prevName);
}this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
$I$(3).undoEditsEnabled=true;
}this.b$['org.opensourcephysics.tools.FunctionEditor.CellEditor'].popupField.setBackground$java_awt_Color($I$(1).WHITE);
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.setVisible$Z(false);
});
})()
), Clazz.new_(P$.FunctionEditor$CellEditor$6.$init$,[this, null])));
var frame=$I$(27).getFrameForComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.FunctionEditor']);
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor=Clazz.new_($I$(28,1).c$$java_awt_Frame$Z,[frame, true]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.setUndecorated$Z(true);
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.getRootPane$().setWindowDecorationStyle$I(0);
var contentPane=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.setContentPane$java_awt_Container(contentPane);
this.editorPane=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.editorPane.setBackground$java_awt_Color($I$(1).WHITE);
this.editorPane.add$java_awt_Component$O(this.popupField, "Center");
this.editorPane.add$java_awt_Component$O(this.revertButton, "East");
contentPane.add$java_awt_Component$O(this.editorPane, "North");
contentPane.add$java_awt_Component$O(this.dragPane, "South");
return this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor;
}, p$1);

Clazz.newMeth(C$, 'getPopupValue$',  function () {
var text=this.popupField.getText$().trim$();
var separator=$I$(3).sciFormat0000.getDecimalFormatSymbols$().getDecimalSeparator$();
if (separator == "," && this.b$['org.opensourcephysics.tools.FunctionEditor'].tableCellEditor.isExpression ) {
if (!this.b$['org.opensourcephysics.tools.FunctionEditor'].isValidExpression$S.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [text])) {
if (text.contains$CharSequence("if(") || text.contains$CharSequence("if (") ) {
$I$(27,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.FunctionEditor'], $I$(6).getString$S("FunctionEditor.Dialog.IfStatementError.Message1") + "\n" + $I$(6).getString$S("FunctionEditor.Dialog.IfStatementError.Message2") , $I$(6).getString$S("FunctionEditor.Dialog.IfStatementError.Title"), 0]);
return;
}}}var row=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect;
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(row);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(row, this.prevObject);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect == 1) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.setValueAt$O$I$I(this.prevExpression, row, 1);
}this.field.setText$S(text);
$I$(3).undoEditsEnabled=true;
this.keyPressed=true;
this.b$['org.opensourcephysics.tools.FunctionEditor'].popupEditor.setVisible$Z(false);
if (this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect == 1) {
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.setValueAt$O$I$I(text, row, 1);
}this.field.requestFocusInWindow$();
this.field.selectAll$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionEditor, "CellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$font=Clazz.new_($I$(14,1)).getFont$();
},1);

C$.$fields$=[['O',['$font','java.awt.Font']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setFont$java_awt_Font(this.$font);
this.setHorizontalAlignment$I(2);
this.setBorder$javax_swing_border_Border($I$(15).createEmptyBorder$I$I$I$I(2, 1, 2, 2));
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
var val=value.toString();
if (col == 0 && (Clazz.instanceOf(this.b$['org.opensourcephysics.tools.FunctionEditor'], "org.opensourcephysics.tools.UserFunctionEditor")) ) {
val=$I$(29).localize$S(val);
}this.setText$S(val);
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(row);
var tooltip=this.b$['org.opensourcephysics.tools.FunctionEditor'].getTooltip$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
var tooltipText=(col == 0 && tooltip != null  ) ? tooltip : (col == 0) ? $I$(6).getString$S("FunctionEditor.Table.Cell.Name.Tooltip") : $I$(6).getString$S("FunctionEditor.Table.Cell.Value.Tooltip");
if (tooltip == null  && col == 0 ) {
tooltipText+=" (" + $I$(6).getString$S("FunctionEditor.Tooltip.HowToEdit") + ")" ;
}this.setToolTipText$S(tooltipText);
if ((col == 1) && this.b$['org.opensourcephysics.tools.FunctionEditor'].circularErrors.get$I(row) ) {
this.setToolTipText$S($I$(6).getString$S("FunctionEditor.Table.Cell.CircularErrors.Tooltip"));
this.setForeground$java_awt_Color($I$(3).DARK_RED);
if (isSelected) {
this.setBackground$java_awt_Color($I$(3).MEDIUM_RED);
} else {
this.setBackground$java_awt_Color($I$(3).LIGHT_RED);
}} else if ((col == 1) && this.b$['org.opensourcephysics.tools.FunctionEditor'].isInvalidExpression$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]) ) {
this.setToolTipText$S($I$(6).getString$S("FunctionEditor.Table.Cell.Invalid.Tooltip"));
this.setForeground$java_awt_Color($I$(3).DARK_RED);
if (isSelected) {
this.setBackground$java_awt_Color($I$(3).MEDIUM_RED);
} else {
this.setBackground$java_awt_Color($I$(3).LIGHT_RED);
}} else if (((col == 0) && !this.b$['org.opensourcephysics.tools.FunctionEditor'].isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]) ) || ((col == 1) && !this.b$['org.opensourcephysics.tools.FunctionEditor'].isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]) ) ) {
this.setForeground$java_awt_Color($I$(1).BLACK);
this.setBackground$java_awt_Color($I$(3).LIGHT_GRAY);
} else {
if (isSelected) {
this.setForeground$java_awt_Color(hasFocus ? $I$(1).BLUE : $I$(1).BLACK);
this.setBackground$java_awt_Color($I$(3).LIGHT_BLUE);
} else {
this.setForeground$java_awt_Color($I$(1).BLACK);
this.setBackground$java_awt_Color($I$(1).WHITE);
}}this.setFont$java_awt_Font(((col == 0) && this.b$['org.opensourcephysics.tools.FunctionEditor'].isImportant$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]) ) ? this.$font.deriveFont$I(1) : this.$font);
this.b$['org.opensourcephysics.tools.FunctionEditor'].enableMenuButtons$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionEditor, "ValueMouseControl", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['prevValue','newValue'],'I',['logDelta'],'O',['cellEditor','org.opensourcephysics.tools.FunctionEditor.CellEditor','startingPoint','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_FunctionEditor_CellEditor',  function (editor) {
Clazz.super_(C$, this);
this.cellEditor=editor;
}, 1);

Clazz.newMeth(C$, 'getLogDelta$S$D',  function (val, relativeX) {
if ("".equals$O(val)) return 0;
var digits=val.length$();
var powerOfTen=0;
var decimal=val.replaceAll$S$S(",", ".").indexOf$S(".");
if (decimal > -1) {
--digits;
}var minus=val.indexOf$S("-");
if (minus > -1) {
--digits;
--decimal;
}var exp=val.indexOf$S("E");
if (exp > -1) {
var exponent=val.substring$I(exp + 1);
digits-=exponent.length$() + 1;
powerOfTen=Integer.parseInt$S(exponent);
}var selectableDigits=exp > -1 ? digits : digits + 1;
var selectedDigit=(Math.floor(relativeX * selectableDigits)|0);
var integerDigits=decimal > -1 ? decimal : digits;
powerOfTen+=integerDigits - selectedDigit - 1 ;
return powerOfTen;
});

Clazz.newMeth(C$, 'getSelectionIndex$S',  function (val) {
var powerOfTen=this.logDelta;
var digits=val.length$();
var offset=0;
var decimal=val.replaceAll$S$S(",", ".").indexOf$S(".");
if (decimal > -1) {
--digits;
}var minus=val.indexOf$S("-");
if (minus > -1) {
--digits;
offset=1;
--decimal;
}var exp=val.indexOf$S("E");
if (exp > -1) {
var exponent=val.substring$I(exp + 1);
digits-=exponent.length$() + 1;
powerOfTen-=Integer.parseInt$S(exponent);
}var integerDigits=decimal > -1 ? decimal : digits;
var selectedDigit=integerDigits - powerOfTen - 1 ;
offset+=decimal > -1 && selectedDigit >= decimal  ? 1 : 0;
var selectionIndex=selectedDigit + offset;
return selectionIndex;
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var row=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect;
var name=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.getValueAt$I$I(row, 0);
if (name.equals$O("t")) {
this.startingPoint=null;
return;
}this.startingPoint=e.getPoint$();
this.newValue=this.prevValue;
var level=1.0 * this.startingPoint.x / this.cellEditor.dragPane.getWidth$();
this.logDelta=this.getLogDelta$S$D(this.cellEditor.popupField.getText$(), level);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (this.startingPoint == null ) return;
this.prevValue=this.newValue;
this.startingPoint=null;
var val=this.cellEditor.popupField.getText$();
this.cellEditor.popupField.select$I$I(val.length$(), val.length$());
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if (this.startingPoint == null  || Double.isNaN$D(this.prevValue) ) return;
var pixelsPerStep=e.isShiftDown$() ? 1 : 10;
var d=((e.getPoint$().x - this.startingPoint.x)/pixelsPerStep|0);
var delta=Math.pow(10, this.logDelta);
this.newValue=this.prevValue + d * delta;
var s=$I$(3).format$D$D(this.newValue, 0);
var row=this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.setValueAt$O$I$I(s, row, 1);
this.cellEditor.popupField.setText$S(s);
this.cellEditor.popupField.setBackground$java_awt_Color($I$(1).yellow);
this.cellEditor.popupField.requestFocusInWindow$();
var val=this.cellEditor.popupField.getText$();
var index=this.getSelectionIndex$S(val);
this.cellEditor.popupField.select$I$I(index, index + 1);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var level=1.0 * e.getPoint$().x / this.cellEditor.dragPane.getWidth$();
var val=this.cellEditor.popupField.getText$();
this.logDelta=this.getLogDelta$S$D(val, level);
var index=this.getSelectionIndex$S(val);
this.cellEditor.popupField.select$I$I(index, index + 1);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.cellEditor.dragPane.setCursor$java_awt_Cursor($I$(30).getPredefinedCursor$I(10));
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.cellEditor.dragPane.setCursor$java_awt_Cursor($I$(30).getDefaultCursor$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionEditor, "DefaultEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isNew=true;
},1);

C$.$fields$=[['Z',['isNew'],'I',['redoRow','redoCol','undoRow','undoCol','editType'],'S',['name'],'O',['redoObj','java.lang.Object','+undoObj']]]

Clazz.newMeth(C$, 'c$$I$O$I$I$O$I$I$S',  function (type, newVal, newRow, newCol, prevVal, prevRow, prevCol, name) {
Clazz.super_(C$, this);
this.editType=type;
this.redoObj=newVal;
this.undoObj=prevVal;
this.redoRow=newRow;
this.redoCol=newCol;
this.undoRow=prevRow;
this.undoCol=prevCol;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
this.isNew=false;
C$.superclazz.prototype.undo$.apply(this, []);
$I$(3).undoEditsEnabled=false;
switch (this.editType) {
case 0:
{
this.b$['org.opensourcephysics.tools.FunctionEditor'].removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.undoObj, false]);
break;
}case 1:
{
this.b$['org.opensourcephysics.tools.FunctionEditor'].addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.undoObj, this.undoRow, false, true]);
break;
}case 2:
{
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(this.undoRow);
var expression=this.b$['org.opensourcephysics.tools.FunctionEditor'].getExpression$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
this.name=this.undoObj.toString();
var prevName=this.redoObj.toString();
obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.name, expression, obj]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(this.undoRow);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(this.undoRow, obj);
this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["edit", this.name, prevName]);
break;
}case 3:
{
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(this.undoRow);
var undoArray=this.undoObj;
obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.name, undoArray[0].toString(), obj]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(this.undoRow);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(this.undoRow, obj);
this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["edit", this.name, this]);
}}
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect=this.undoRow;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect=this.undoCol;
this.b$['org.opensourcephysics.tools.FunctionEditor'].getTable$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []).selectOnFocus=true;
this.b$['org.opensourcephysics.tools.FunctionEditor'].getTable$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []).requestFocusInWindow$();
this.b$['org.opensourcephysics.tools.FunctionEditor'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
$I$(3).undoEditsEnabled=true;
});

Clazz.newMeth(C$, 'redo$',  function () {
this.isNew=false;
C$.superclazz.prototype.redo$.apply(this, []);
$I$(3).undoEditsEnabled=false;
switch (this.editType) {
case 0:
{
this.b$['org.opensourcephysics.tools.FunctionEditor'].addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.redoObj, this.redoRow, false, true]);
break;
}case 1:
{
this.b$['org.opensourcephysics.tools.FunctionEditor'].removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.redoObj, false]);
break;
}case 2:
{
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(this.redoRow);
var expression=this.b$['org.opensourcephysics.tools.FunctionEditor'].getExpression$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj]);
this.name=this.redoObj.toString();
var prevName=this.undoObj.toString();
obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.name, expression, obj]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(this.redoRow);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(this.redoRow, obj);
this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["edit", this.name, prevName]);
break;
}case 3:
{
var obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.get$I(this.redoRow);
var redoArray=this.redoObj;
var buttons=redoArray[1];
for (var next, $next = buttons.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var b=next;
if (!b.isSelected$()) {
b.doClick$I(0);
}}
obj=this.b$['org.opensourcephysics.tools.FunctionEditor'].createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [this.name, redoArray[0].toString(), obj]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.remove$I(this.redoRow);
this.b$['org.opensourcephysics.tools.FunctionEditor'].objects.add$I$O(this.redoRow, obj);
this.b$['org.opensourcephysics.tools.FunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["edit", this.name, this]);
}}
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.rowToSelect=this.redoRow;
this.b$['org.opensourcephysics.tools.FunctionEditor'].table.columnToSelect=this.redoCol;
this.b$['org.opensourcephysics.tools.FunctionEditor'].getTable$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []).selectOnFocus=true;
this.b$['org.opensourcephysics.tools.FunctionEditor'].getTable$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []).requestFocusInWindow$();
this.b$['org.opensourcephysics.tools.FunctionEditor'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], []);
$I$(3).undoEditsEnabled=true;
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
if (this.editType == 1) {
return "Deletion";
}return "Edit";
});

Clazz.newMeth(C$, 'isNew$',  function () {
return this.isNew;
});

Clazz.newMeth(C$, 'getEditType$',  function () {
return this.editType;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
