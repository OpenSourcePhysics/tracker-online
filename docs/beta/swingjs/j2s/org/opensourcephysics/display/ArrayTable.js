(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color','org.opensourcephysics.display.CellBorder','javax.swing.BorderFactory','javax.swing.UIManager','java.awt.Dimension','javax.swing.Timer',['org.opensourcephysics.display.ArrayTable','.ArrayIndexRenderer'],['org.opensourcephysics.display.ArrayTable','.ArrayCellRenderer'],'java.util.Hashtable','org.opensourcephysics.numerics.Util','org.opensourcephysics.display.ArrayTableModel','javax.swing.KeyStroke','javax.swing.AbstractAction','javax.swing.event.TableModelEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable', 'java.awt.event.ActionListener');
C$.$classes$=[['ArrayCellRenderer',8],['ArrayIndexRenderer',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.refreshDelay=300;
this.refreshTimer=Clazz.new_($I$(6,1).c$$I$java_awt_event_ActionListener,[this.refreshDelay, this]);
this.indexRenderer=Clazz.new_($I$(7,1));
this.cellRenderer=Clazz.new_($I$(8,1));
this.formatDictionary=Clazz.new_($I$(9,1));
this.formatPattern="0.000";
this.defaultFormat=$I$(10).newDecimalFormat$S(this.formatPattern);
},1);

C$.$fields$=[['I',['refreshDelay'],'S',['formatPattern'],'O',['refreshTimer','javax.swing.Timer','tableModel','org.opensourcephysics.display.ArrayTableModel','indexRenderer','org.opensourcephysics.display.ArrayTable.ArrayIndexRenderer','cellRenderer','org.opensourcephysics.display.ArrayTable.ArrayCellRenderer','formatDictionary','java.util.Dictionary','defaultFormat','java.text.DecimalFormat','prevValue','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$IA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$IA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$IAA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$IAA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$DA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$DAA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$DAA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$SA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$SA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$SAA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$SAA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$ZA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$ZA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$ZAA',  function (array) {
Clazz.super_(C$, this);
this.tableModel=Clazz.new_($I$(11,1).c$$ZAA,[array]);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.refreshTimer.setRepeats$Z(false);
this.refreshTimer.setCoalesce$Z(true);
this.setModel$javax_swing_table_TableModel(this.tableModel);
this.tableModel.addTableModelListener$javax_swing_event_TableModelListener(((P$.ArrayTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
var row=e.getFirstRow$();
var col=this.b$['org.opensourcephysics.display.ArrayTable'].tableModel.showRowNumber ? e.getColumn$() + 1 : e.getColumn$();
var value=this.b$['javax.swing.JTable'].getValueAt$I$I.apply(this.b$['javax.swing.JTable'], [row, col]);
if ((value != null ) && !value.equals$O(this.b$['org.opensourcephysics.display.ArrayTable'].prevValue) ) {
this.b$['org.opensourcephysics.display.ArrayTable'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.ArrayTable'], ["cell", null, e]);
}});
})()
), Clazz.new_(P$.ArrayTable$1.$init$,[this, null])));
this.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(java.lang.Object), this.cellRenderer);
this.setColumnSelectionAllowed$Z(true);
this.getTableHeader$().setReorderingAllowed$Z(false);
this.getTableHeader$().setDefaultRenderer$javax_swing_table_TableCellRenderer(this.indexRenderer);
this.setAutoResizeMode$I(0);
this.setGridColor$java_awt_Color($I$(1).BLACK);
var width=24;
var name;
var column;
if (this.getColumnCount$() > 0) {
name=this.getColumnName$I(0);
column=this.getColumn$O(name);
column.setMinWidth$I(width);
column.setMaxWidth$I(2 * width);
column.setWidth$I(width);
}(this.formatDictionary).clear$();
width=60;
for (var i=1, n=this.getColumnCount$(); i < n; i++) {
name=this.getColumnName$I(i);
column=this.getColumn$O(name);
column.setMinWidth$I(width);
column.setMaxWidth$I(3 * width);
column.setWidth$I(width);
}
var im=this.getInputMap$I(1);
var tab=$I$(12).getKeyStroke$I$I(9, 0);
var prevTabAction=this.getActionMap$().get$O(im.get$javax_swing_KeyStroke(tab));
var tabAction=((P$.ArrayTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

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
), Clazz.new_($I$(13,1),[this, {prevTabAction:prevTabAction}],P$.ArrayTable$2));
this.getActionMap$().put$O$javax_swing_Action(im.get$javax_swing_KeyStroke(tab), tabAction);
var enterAction=((P$.ArrayTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var table=e.getSource$();
var row=table.getSelectedRow$();
var column=table.getSelectedColumn$();
table.editCellAt$I$I$java_util_EventObject(row, column, e);
var comp=table.getEditorComponent$();
if (Clazz.instanceOf(comp, "javax.swing.JTextField")) {
var field=comp;
field.requestFocus$();
field.selectAll$();
}});
})()
), Clazz.new_($I$(13,1),[this, null],P$.ArrayTable$3));
var enter=$I$(12).getKeyStroke$I$I(10, 0);
this.getActionMap$().put$O$javax_swing_Action(im.get$javax_swing_KeyStroke(enter), enterAction);
});

Clazz.newMeth(C$, 'editCellAt$I$I$java_util_EventObject',  function (row, column, e) {
var editing=C$.superclazz.prototype.editCellAt$I$I$java_util_EventObject.apply(this, [row, column, e]);
if (editing) {
this.prevValue=this.getValueAt$I$I(row, column);
}return editing;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.tableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(14,1).c$$javax_swing_table_TableModel$I,[this.tableModel, -1]));
});

Clazz.newMeth(C$, 'setRefreshDelay$I',  function (delay) {
this.refreshTimer.setInitialDelay$I(delay);
});

Clazz.newMeth(C$, 'refreshTable$',  function () {
this.refreshTimer.start$();
});

Clazz.newMeth(C$, 'setNumericFormat$S',  function (str) {
if ((str != null ) && !str.equals$O(this.formatPattern) ) {
this.formatPattern=str;
this.defaultFormat=$I$(10).newDecimalFormat$S(str);
this.refreshTable$();
}});

Clazz.newMeth(C$, 'setNumericFormat$SA',  function (str) {
(this.formatDictionary).clear$();
for (var i=0, n=str.length; i < n; i++) {
this.formatDictionary.put$O$O(Integer.valueOf$I(i), $I$(10).newDecimalFormat$S(str[i]));
}
this.refreshTable$();
});

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
if (index == this.tableModel.firstRow) {
return;
}this.tableModel.setFirstRowIndex$I(index);
this.refreshTable$();
});

Clazz.newMeth(C$, 'setFirstColIndex$I',  function (index) {
if (index == this.tableModel.firstCol) {
return;
}this.tableModel.setFirstColIndex$I(index);
this.refreshTable$();
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
if (vis == this.tableModel.showRowNumber ) {
return;
}this.tableModel.setRowNumberVisible$Z(vis);
this.refreshTable$();
});

Clazz.newMeth(C$, 'setEditable$Z',  function (editable) {
if (editable == this.tableModel.editable ) {
return;
}this.tableModel.setEditable$Z(editable);
this.refreshTable$();
});

Clazz.newMeth(C$, 'isTransposed$',  function () {
return this.tableModel.isTransposed$();
});

Clazz.newMeth(C$, 'setTransposed$Z',  function (transposed) {
if (transposed == this.tableModel.transposed ) {
return;
}this.tableModel.transposed=transposed;
this.refreshTable$();
});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
if (this.tableModel.setColumnNames$SA(names)) {
this.refreshTable$();
}});

Clazz.newMeth(C$, 'setColumnLock$I$Z',  function (columnIndex, locked) {
if (this.tableModel.setColumnLock$I$Z(columnIndex, locked)) {
this.refreshTable$();
}});

Clazz.newMeth(C$, 'setColumnLocks$ZA',  function (locked) {
if (this.tableModel.setColumnLocks$ZA(locked)) {
this.refreshTable$();
}});

Clazz.newMeth(C$, 'getFont$',  function () {
if (this.indexRenderer == null ) {
this.indexRenderer=Clazz.new_($I$(7,1));
}return this.indexRenderer.getFont$();
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.indexRenderer == null ) {
this.indexRenderer=Clazz.new_($I$(7,1));
}if (this.cellRenderer == null ) {
this.cellRenderer=Clazz.new_($I$(8,1));
}this.indexRenderer.setFont$java_awt_Font(font);
this.cellRenderer.setFont$java_awt_Font(font);
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (color) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [color]);
if (this.indexRenderer == null ) {
this.indexRenderer=Clazz.new_($I$(7,1));
}this.indexRenderer.setForeground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'setDataForeground$java_awt_Color',  function (color) {
if (this.cellRenderer == null ) {
this.cellRenderer=Clazz.new_($I$(8,1));
}this.cellRenderer.setForeground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (color) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [color]);
if (this.indexRenderer == null ) {
this.indexRenderer=Clazz.new_($I$(7,1));
}this.indexRenderer.setBackground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'setDataBackground$java_awt_Color',  function (color) {
if (this.cellRenderer == null ) {
this.cellRenderer=Clazz.new_($I$(8,1));
}this.cellRenderer.setBackground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var i=this.convertColumnIndexToModel$I(column);
if ((i == 0) && this.tableModel.showRowNumber ) {
return this.indexRenderer;
}return this.getDefaultRenderer$Class(this.getColumnClass$I(column));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayTable, "ArrayCellRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setForeground$java_awt_Color($I$(1).BLACK);
this.setHorizontalAlignment$I(4);
this.setBackground$java_awt_Color($I$(1).WHITE);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
C$.superclazz.prototype.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I.apply(this, [table, value, isSelected, hasFocus, row, column]);
var editable=table.isCellEditable$I$I(row, column);
this.setEnabled$Z(editable);
var arrayTable=table;
var cellFormat=arrayTable.formatDictionary.get$O(Integer.valueOf$I(column));
if (cellFormat == null ) {
cellFormat=arrayTable.defaultFormat;
}if (value == null ) {
this.setText$S("");
} else if (cellFormat == null ) {
this.setText$S(value.toString());
} else {
try {
this.setText$S(cellFormat.format$O(value));
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
this.setText$S(value.toString());
} else {
throw ex;
}
}
}this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(1,1).c$$I$I$I,[224, 224, 224])],$I$(2,1).c$$java_awt_Color));
return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayTable, "ArrayIndexRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setBorder$javax_swing_border_Border($I$(3).createEtchedBorder$());
this.setOpaque$Z(true);
this.setForeground$java_awt_Color($I$(1).BLACK);
this.setBackground$java_awt_Color($I$(4).getColor$O("Panel.background"));
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
if (column == 0) {
this.setHorizontalAlignment$I(4);
} else {
this.setHorizontalAlignment$I(0);
}if (value == null ) {
this.setText$S("");
} else {
this.setText$S(value.toString());
}this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[20, 18]));
return this;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
