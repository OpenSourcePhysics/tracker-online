(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},p$2={},p$3={},p$4={},p$5={},I$=[[0,'java.util.BitSet','java.util.Arrays','org.opensourcephysics.display.DataTable','java.util.ArrayList',['org.opensourcephysics.display.DataTable','.OSPDataTableModel','.SortDecorator'],['org.opensourcephysics.display.DataTable','.DataTableElement'],'StringBuffer',['org.opensourcephysics.display.DataTable','.DataTableColumnModel','.DataTableColumn'],'javax.swing.table.TableColumn','java.util.Vector','org.opensourcephysics.media.core.NumberField','java.awt.Color','java.text.NumberFormat','java.util.HashMap','javax.swing.JOptionPane','java.awt.BorderLayout','org.opensourcephysics.display.DisplayRes','javax.swing.JButton','javax.swing.JLabel','javax.swing.JTextField','javax.swing.AbstractAction','javax.swing.SwingUtilities','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.JPanel','java.awt.GridLayout','javax.swing.BorderFactory','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.TeXParser','javax.swing.JList','java.awt.font.TextAttribute','javax.swing.UIManager',['org.opensourcephysics.display.DataTable','.DoubleRenderer'],['org.opensourcephysics.display.DataTable','.OSPDataTableModel'],['org.opensourcephysics.display.DataTable','.DataTableColumnModel'],['org.opensourcephysics.display.DataTable','.HeaderRenderer'],'java.awt.event.MouseAdapter',['org.opensourcephysics.display.DataTable','.PrecisionRenderer'],['org.opensourcephysics.display.DataTable','.UnitRenderer'],['org.opensourcephysics.display.DataTable','.NumberFormatDialog'],'java.awt.Toolkit',['org.opensourcephysics.display.DataTable','.RowNumberRenderer'],'org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.controls.XML','java.text.DateFormat']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable');
C$.$classes$=[['DataModel',1033],['OSPTableModel',1033],['DataTableElement',10],['OSPDataTableModel',4],['DataTableColumnModel',1],['DoubleRenderer',12],['PrecisionRenderer',12],['RowNumberRenderer',12],['UnitRenderer',12],['NumberFormatDialog',1],['HeaderRenderer',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.precisionRenderersByColumnName=Clazz.new_($I$(14,1));
this.unitRenderersByColumnName=Clazz.new_($I$(14,1));
this.maximumFractionDigits=3;
this.labelColumnWidth=40;
this.minimumDataColumnWidth=24;
this.clickCountToSort=1;
this.includeHeadersInCopiedData=true;
},1);

C$.$fields$=[['Z',['tainted','includeHeadersInCopiedData'],'I',['maximumFractionDigits','labelColumnWidth','minimumDataColumnWidth','clickCountToSort','mode'],'O',['precisionRenderersByColumnName','java.util.HashMap','+unitRenderersByColumnName','dataTableModel','org.opensourcephysics.display.DataTable.OSPDataTableModel','rowNumberRenderer','org.opensourcephysics.display.DataTable.RowNumberRenderer','formatDialog','org.opensourcephysics.display.DataTable.NumberFormatDialog']]
,['I',['test'],'S',['NO_PATTERN','rowName'],'O',['PANEL_BACKGROUND','java.awt.Color','+LIGHT_BLUE','defaultDoubleRenderer','org.opensourcephysics.display.DataTable.DoubleRenderer','nCompare','java.util.Comparator','+sCompare']]]

Clazz.newMeth(C$, 'unshiftName$S',  function (name) {
var pt=name.length$() - 1;
return (pt >= 0 && name.charAt$I(pt) == "`"  ? name.substring$I$I(0, pt) : name);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.init$();
}, 1);

Clazz.newMeth(C$, 'setModel$javax_swing_table_TableModel',  function (dataModel) {
C$.superclazz.prototype.setModel$javax_swing_table_TableModel.apply(this, [this.dataTableModel=this.createTableModel$()]);
});

Clazz.newMeth(C$, 'createTableModel$',  function () {
return Clazz.new_($I$(36,1),[this, null]);
});

Clazz.newMeth(C$, 'addColumnSelectionInterval$I$I',  function (index0, index1) {
this.dataTableModel.addColumnSelectionInterval$I$I(p$2.boundColumn$I.apply(this, [index0]), p$2.boundColumn$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'init$',  function () {
this.setAutoCreateColumnsFromModel$Z(false);
this.setColumnModel$javax_swing_table_TableColumnModel(Clazz.new_($I$(37,1),[this, null]));
this.setColumnSelectionAllowed$Z(true);
this.setGridColor$java_awt_Color($I$(12).blue);
this.setSelectionBackground$java_awt_Color(C$.LIGHT_BLUE);
var header=this.getTableHeader$();
header.setForeground$java_awt_Color($I$(12).blue);
var headerRenderer=Clazz.new_([this, null, this.getTableHeader$().getDefaultRenderer$()],$I$(38,1).c$$javax_swing_table_TableCellRenderer);
this.getTableHeader$().setDefaultRenderer$javax_swing_table_TableCellRenderer(headerRenderer);
this.setSelectionForeground$java_awt_Color($I$(12).red);
this.setSelectionMode$I(1);
this.setColumnSelectionAllowed$Z(true);
header.addMouseListener$java_awt_event_MouseListener(((P$.DataTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (!$I$(30).isPopupTrigger$java_awt_event_InputEvent(e) && !e.isControlDown$() && !e.isShiftDown$() && e.getClickCount$() == this.b$['org.opensourcephysics.display.DataTable'].clickCountToSort  ) {
var vc=this.b$['javax.swing.JTable'].getColumnModel$.apply(this.b$['javax.swing.JTable'], []).getColumnIndexAtX$I(e.getX$());
var mc=this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [vc]);
if (this.b$['org.opensourcephysics.display.DataTable'].dataTableModel.getSortedColumn$() != mc) {
this.b$['org.opensourcephysics.display.DataTable'].sort$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [mc]);
}}});
})()
), Clazz.new_($I$(39,1),[this, null],P$.DataTable$3)));
this.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.DataTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTable'].updateRowSelection$I$Z.apply(this.b$['org.opensourcephysics.display.DataTable'], [e.getFirstIndex$(), e.getValueIsAdjusting$()]);
});
})()
), Clazz.new_(P$.DataTable$4.$init$,[this, null])));
});

Clazz.newMeth(C$, 'updateRowSelection$I$Z',  function (firstIndex, isAdjusting) {
this.dataTableModel.setSelectedRowsFromJTable$();
});

Clazz.newMeth(C$, 'addColumn$javax_swing_table_TableColumn',  function (c) {
C$.superclazz.prototype.addColumn$javax_swing_table_TableColumn.apply(this, [c]);
});

Clazz.newMeth(C$, 'convertColumnIndexToModel$I',  function (viewIndex) {
return (viewIndex < 0 ? viewIndex : (this.getColumnModel$()).convertColumnIndexToModel$I(viewIndex));
});

Clazz.newMeth(C$, 'setMaximumFractionDigits$S$I',  function (columnName, maximumFractionDigits) {
this.precisionRenderersByColumnName.put$O$O(columnName, Clazz.new_($I$(40,1).c$$I,[maximumFractionDigits]));
});

Clazz.newMeth(C$, 'setFormatPattern$S$S',  function (columnName, pattern) {
if ((pattern == null ) || pattern.equals$O("") ) {
this.precisionRenderersByColumnName.remove$O(columnName);
} else {
var renderer=this.precisionRenderersByColumnName.get$O(columnName);
if (renderer == null  || !pattern.equals$O(renderer.pattern) ) {
this.precisionRenderersByColumnName.put$O$O(columnName, Clazz.new_($I$(40,1).c$$S,[pattern]));
} else return;
}this.firePropertyChange$S$O$O("format", null, columnName);
});

Clazz.newMeth(C$, 'setUnits$S$S$S',  function (columnName, units, tooltip) {
if (units == null ) {
this.unitRenderersByColumnName.remove$O(columnName);
} else {
var renderer=this.precisionRenderersByColumnName.get$O(columnName);
if (renderer == null ) renderer=this.getDefaultRenderer$Class(Clazz.getClass(Double));
var unitRenderer=this.unitRenderersByColumnName.get$O(columnName);
if (unitRenderer == null ) {
unitRenderer=Clazz.new_($I$(41,1).c$$javax_swing_table_TableCellRenderer$S$S,[renderer, units, tooltip]);
this.unitRenderersByColumnName.put$O$O(columnName, unitRenderer);
} else {
unitRenderer.units=units;
unitRenderer.tooltip=tooltip;
unitRenderer.baseRenderer=renderer;
}}});

Clazz.newMeth(C$, 'getFormatPattern$S',  function (columnName) {
var r=this.precisionRenderersByColumnName.get$O(columnName);
return (r == null ) ? "" : r.pattern;
});

Clazz.newMeth(C$, 'getFormattedColumnNames$',  function () {
return this.precisionRenderersByColumnName.keySet$().toArray$OA(Clazz.array(String, [0]));
});

Clazz.newMeth(C$, 'getFormattedValueAt$I$I',  function (row, col) {
var value=this.getValueAt$I$I(row, col);
if (value == null ) return null;
var renderer=this.getCellRenderer$I$I(row, col);
var c=renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this, value, false, false, 0, col);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
var s=(c).getText$().trim$();
if (Clazz.instanceOf(renderer, "org.opensourcephysics.display.DataTable.UnitRenderer")) {
var units=(renderer).units;
if (!"".equals$O(units)) {
var n=s.lastIndexOf$S(units);
if (n > -1) s=s.substring$I$I(0, n);
}}return s;
}return value;
});

Clazz.newMeth(C$, 'getFormatDialog$SA$SA',  function (names, selected) {
if (this.formatDialog == null ) {
this.formatDialog=Clazz.new_($I$(42,1),[this, null]);
var dim=$I$(43).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.formatDialog.getBounds$().width)/2|0);
var y=((dim.height - this.formatDialog.getBounds$().height)/2|0);
this.formatDialog.setLocation$I$I(x, y);
}p$5.setColumns$SA$SA.apply(this.formatDialog, [names, selected]);
return this.formatDialog;
});

Clazz.newMeth(C$, 'setMaximumFractionDigits$I',  function (maximumFractionDigits) {
this.maximumFractionDigits=maximumFractionDigits;
this.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(Double), Clazz.new_($I$(40,1).c$$I,[maximumFractionDigits]));
});

Clazz.newMeth(C$, 'getMaximumFractionDigits$',  function () {
return this.maximumFractionDigits;
});

Clazz.newMeth(C$, 'getMinimumTableWidth$',  function () {
var n=this.getColumnCount$();
return (this.dataTableModel.rowNumberVisible ? this.labelColumnWidth - this.minimumDataColumnWidth : 0) + n * this.minimumDataColumnWidth;
});

Clazz.newMeth(C$, 'setLabelColumnWidth$I',  function (w) {
this.labelColumnWidth=w;
p$3.invalidateWidths.apply((this.getColumnModel$()), []);
});

Clazz.newMeth(C$, 'resizeAndRepaint$',  function () {
C$.superclazz.prototype.resizeAndRepaint$.apply(this, []);
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (b) {
if (this.dataTableModel.isRowNumberVisible$() != b ) {
if (b && (this.rowNumberRenderer == null ) ) {
this.rowNumberRenderer=Clazz.new_($I$(44,1).c$$javax_swing_JTable,[this]);
}this.dataTableModel.setRowNumberVisible$Z(b);
}});

Clazz.newMeth(C$, 'setColumnVisible$javax_swing_table_TableModel$I$Z',  function (model, columnIndex, b) {
this.dataTableModel.setColumnVisible$javax_swing_table_TableModel$I$Z(model, columnIndex, b);
});

Clazz.newMeth(C$, 'refreshColumnModel$',  function () {
this.dataTableModel.refreshColumnModel$();
});

Clazz.newMeth(C$, 'isRowNumberVisible$',  function () {
return this.dataTableModel.isRowNumberVisible$();
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var unitRenderer=null;
var baseRenderer=null;
try {
var tableColumn=this.getColumnModel$().getColumn$I(column);
if (tableColumn.getModelIndex$() == 0 && this.dataTableModel.isRowNumberVisible$() ) {
return this.rowNumberRenderer;
}var key=tableColumn.getHeaderValue$();
var k=key.indexOf$S("_{ ");
if (k > 0) {
key=key.substring$I$I(0, k);
}unitRenderer=this.unitRenderersByColumnName.get$O(key);
baseRenderer=tableColumn.getCellRenderer$();
if (baseRenderer == null ) {
baseRenderer=this.precisionRenderersByColumnName.get$O(key);
if (baseRenderer == null ) {
baseRenderer=this.precisionRenderersByColumnName.get$O(C$.unshiftName$S(key));
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (baseRenderer == null ) {
var c=this.getColumnClass$I(column);
baseRenderer=(c === Clazz.getClass(Double)  ? C$.defaultDoubleRenderer : this.getDefaultRenderer$Class(c));
}if (unitRenderer == null ) return baseRenderer;
p$4.setBaseRenderer$javax_swing_table_TableCellRenderer.apply(unitRenderer, [baseRenderer]);
return unitRenderer;
});

Clazz.newMeth(C$, 'getPrecisionRenderer$S',  function (columnName) {
return this.precisionRenderersByColumnName.get$O(columnName);
});

Clazz.newMeth(C$, 'setRefreshDelay$I',  function (delay) {
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.clear$();
});

Clazz.newMeth(C$, 'refreshTable$',  function () {
this.refreshTable$I(260108303);
});

Clazz.newMeth(C$, 'refreshTable$I',  function (mode) {
this.refreshTableNow$I(mode);
});

Clazz.newMeth(C$, 'refreshTableNow$I',  function (mode) {
var columnsChanged;
var rowsChanged=false;
var mask=this.mode=mode;
switch (mode) {
case 0:
return;
case 268435456:
this.dataTableModel.setTainted$();
return;
default:
case 9216:
this.dataTableModel.resetSort$();
case 1:
case 2:
case 3:
case 4:
mask=15;
columnsChanged=true;
break;
case 4352:
case 4608:
case 5632:
case 6144:
mask=4096;
columnsChanged=true;
break;
case 16640:
case 16896:
mask=16384;
columnsChanged=true;
break;
case 134217728:
columnsChanged=true;
break;
case 4864:
case 5376:
case 7168:
rowsChanged=true;
case 5888:
case 5120:
case 6912:
case 7424:
case 6400:
case 6656:
case 7680:
mask=4096;
columnsChanged=false;
break;
case 8704:
case 8960:
case 8448:
mask=8192;
rowsChanged=true;
columnsChanged=false;
break;
case 8454144:
case 8519680:
case 8585216:
case 8650752:
mode=8388608;
columnsChanged=false;
break;
case 32768:
case 16777216:
case 33554432:
case 67108864:
columnsChanged=false;
break;
}
if (this.tainted) {
columnsChanged=rowsChanged=true;
this.tainted=false;
}this.dataTableModel.refresh$I(mask);
if (columnsChanged) {
this.dataTableModel.fireTableStructureChanged$();
} else if (rowsChanged) {
this.dataTableModel.fireTableRowsInserted$I$I(this.getRowCount$() == 0 ? -1 : 0, this.getRowCount$() - 1);
} else {
if (mode == 7680) this.revalidate$();
this.repaint$();
}});

Clazz.newMeth(C$, 'add$javax_swing_table_TableModel',  function (tableModel) {
this.dataTableModel.add$org_opensourcephysics_display_DataTable_OSPTableModel(tableModel);
});

Clazz.newMeth(C$, 'remove$javax_swing_table_TableModel',  function (tableModel) {
this.dataTableModel.remove$javax_swing_table_TableModel(tableModel);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.dataTableModel.clear$();
});

Clazz.newMeth(C$, 'sort$I',  function (col) {
this.dataTableModel.sort$I(col);
});

Clazz.newMeth(C$, 'setModelColumnOrder$IA',  function (modelColumns) {
p$3.setModelColumnOrder$IA.apply((this.getColumnModel$()), [modelColumns]);
});

Clazz.newMeth(C$, 'getModelColumnOrder$',  function () {
return p$3.getModelColumnOrder.apply((this.getColumnModel$()), []);
});

Clazz.newMeth(C$, 'createDefaultColumnsFromModel$',  function () {
});

Clazz.newMeth(C$, 'updateFormats',  function () {
try {
for (var key, $key = this.precisionRenderersByColumnName.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var renderer=this.precisionRenderersByColumnName.get$O(key);
renderer.numberFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(30).getDecimalFormatSymbols$());
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$, 'getSortedRow$I',  function (i) {
return this.dataTableModel.getSortedRow$I(i);
});

Clazz.newMeth(C$, 'resetSort$',  function () {
this.dataTableModel.resetSort$();
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.dataTableModel.getRowCount$();
});

Clazz.newMeth(C$, 'refreshTable$I$Z',  function (mode, resortAndReselect) {
var col=this.dataTableModel.getSortedColumn$();
var rows=p$2.getSelectedTableRowsBS.apply(this, []);
var cols=p$2.getSelectedTableColumnsBS.apply(this, []);
this.refreshTableNow$I(mode);
if (col >= 0) {
switch (mode) {
case 4864:
break;
default:
this.dataTableModel.resetSort$();
this.sort$I(col);
this.selectTableRowsBS$java_util_BitSet$I(rows, 0);
this.selectTableColsBS$java_util_BitSet(cols);
break;
}
}});

Clazz.newMeth(C$, 'selectTableRowsBS$java_util_BitSet$I',  function (rows, nRows) {
if (nRows > 0) this.removeRowSelectionInterval$I$I(0, nRows - 1);
for (var i=rows.nextSetBit$I(0), j=0, n=this.getRowCount$(); i >= 0 && i < n ; i=rows.nextSetBit$I(j + 1)) {
j=Math.min(n, rows.nextClearBit$I(i + 1));
this.addRowSelectionInterval$I$I(i, j - 1);
}
});

Clazz.newMeth(C$, 'selectTableColsBS$java_util_BitSet',  function (cols) {
for (var i=cols.nextSetBit$I(0), j=0, n=this.getColumnCount$(); i >= 0 && i < n ; i=cols.nextSetBit$I(j + 1)) {
j=Math.min(n, cols.nextClearBit$I(i + 1));
this.addColumnSelectionInterval$I$I(i, j - 1);
}
});

Clazz.newMeth(C$, 'setSelectedColumnsFromModelBS$',  function () {
var bs=this.dataTableModel.selectedModelCols;
for (var i=bs.nextSetBit$I(0), j=0; i >= 0; i=bs.nextSetBit$I(j + 1)) {
j=bs.nextClearBit$I(i + 1);
this.addColumnSelectionInterval$I$I(this.convertColumnIndexToView$I(i), this.convertColumnIndexToView$I(j));
}
});

Clazz.newMeth(C$, 'updateColumnModel$',  function () {
this.dataTableModel.setTainted$();
p$3.updateColumnModel.apply((this.getColumnModel$()), []);
});

Clazz.newMeth(C$, 'boundColumn$I',  function (col) {
if (col < 0 || col >= this.getColumnCount$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range"]);
}return col;
}, p$2);

Clazz.newMeth(C$, 'getSelectedModelRows$',  function () {
return this.dataTableModel.getSelectedModelRows$();
});

Clazz.newMeth(C$, 'getViewRow$I',  function (modelRow) {
var col=this.convertColumnIndexToView$I(0);
for (var i=0, n=this.getRowCount$(); i < n; i++) {
if (modelRow == (this.getValueAt$I$I(i, col)).$c() ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'selectModelRows$IA',  function (modelRows) {
var n=this.getRowCount$();
if (n == 0) {
return;
}if (modelRows.length == n) {
this.addRowSelectionInterval$I$I(0, n - 1);
return;
}var bs=Clazz.new_($I$(1,1));
for (var i=0; i < modelRows.length; i++) {
var row=modelRows[i];
if (row >= n) break;
for (var j=0; j <= n; j++) {
if (row == (this.dataTableModel.getValueAt$I$I(this.convertRowIndexToModel$I(j), 0)).intValue$()) {
bs.set$I(j);
break;
}}
}
this.selectTableRowsBS$java_util_BitSet$I(bs, n);
});

Clazz.newMeth(C$, 'selectModelRowsBS$java_util_BitSet',  function (rows) {
var n=this.getRowCount$();
if (n == 0) {
return;
}if (rows.cardinality$() == n) {
this.addRowSelectionInterval$I$I(0, n - 1);
return;
}var bs=Clazz.new_($I$(1,1));
for (var i=rows.nextSetBit$I(0); i >= 0; i=rows.nextSetBit$I(i + 1)) {
for (var j=0; j <= n; j++) {
if (i == (this.dataTableModel.getValueAt$I$I(this.convertRowIndexToModel$I(j), 0)).intValue$()) {
bs.set$I(j);
break;
}}
}
this.selectTableRowsBS$java_util_BitSet$I(bs, n);
});

Clazz.newMeth(C$, 'getSelectedTableRowsBS',  function () {
return C$.getSelectedTableBS$javax_swing_ListSelectionModel(this.getSelectionModel$());
}, p$2);

Clazz.newMeth(C$, 'getSelectedTableColumnsBS',  function () {
return C$.getSelectedTableBS$javax_swing_ListSelectionModel(this.columnModel.getSelectionModel$());
}, p$2);

Clazz.newMeth(C$, 'getSelectedTableBS$javax_swing_ListSelectionModel',  function (sm) {
var bs=Clazz.new_($I$(1,1));
var min=sm.getMinSelectionIndex$();
var max=sm.getMaxSelectionIndex$();
if (min < 0 || max < 0 ) return bs;
for (var i=min; i <= max; i++) {
if (sm.isSelectedIndex$I(i)) bs.set$I(i);
}
return bs;
}, 1);

Clazz.newMeth(C$, 'haveSelectedRows$',  function () {
return !this.dataTableModel.selectedModelRows.isEmpty$();
});

Clazz.newMeth(C$, 'getSelectedModelRowsBS$',  function () {
return this.dataTableModel.selectedModelRows;
});

Clazz.newMeth(C$, 'setSelectedModelRowsBS$java_util_BitSet',  function (rows) {
this.dataTableModel.selectedModelRows=rows;
});

Clazz.newMeth(C$, 'getModelRow$I',  function (i) {
return this.dataTableModel.getModelRow$I(i);
});

Clazz.newMeth(C$, 'scrollRowToVisible$I',  function (row) {
this.scrollRectToVisible$java_awt_Rectangle(this.getCellRect$I$I$Z(row, 0, true));
});

Clazz.newMeth(C$, 'scrollColumnToVisible$I',  function (col) {
this.scrollRectToVisible$java_awt_Rectangle(this.getCellRect$I$I$Z(0, col, true));
});

Clazz.newMeth(C$, 'getData$Z',  function (asFormatted) {
var buf=Clazz.new_($I$(7,1));
var selectedRows=this.getSelectedRows$();
var selectedColumns=this.getSelectedColumns$();
var restoreRows=null;
var restoreColumns=null;
if (selectedRows.length == 0) {
this.selectAll$();
restoreRows=selectedRows;
restoreColumns=selectedColumns;
selectedRows=this.getSelectedRows$();
selectedColumns=this.getSelectedColumns$();
}if (this.includeHeadersInCopiedData) {
for (var j=0; j < selectedColumns.length; j++) {
if (this.isRowNumberVisible$() && selectedColumns[j] == 0 ) continue;
var name=this.getColumnName$I(selectedColumns[j]);
name=$I$(31).removeSubscripting$S(name);
buf.append$S(name);
if (j < selectedColumns.length - 1) buf.append$S($I$(45).getDelimiter$());
}
buf.append$S($I$(46).NEW_LINE);
}var nf=$I$(13).getInstance$();
nf.applyPattern$S("0.000000E0");
nf.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(30).getDecimalFormatSymbols$());
var df=$I$(47).getInstance$();
for (var i=0; i < selectedRows.length; i++) {
for (var j=0; j < selectedColumns.length; j++) {
var temp=this.convertColumnIndexToModel$I(selectedColumns[j]);
if (this.isRowNumberVisible$()) {
if (temp == 0) {
continue;
}}var value=null;
if (asFormatted) {
value=this.getFormattedValueAt$I$I(selectedRows[i], selectedColumns[j]);
} else {
value=this.getValueAt$I$I(selectedRows[i], selectedColumns[j]);
if (value != null ) {
if (Clazz.instanceOf(value, "java.lang.Number")) {
value=nf.format$O(value);
} else if (Clazz.instanceOf(value, "java.util.Date")) {
value=df.format$O(value);
}}if ("NaN".equals$O(value)) value="";
}if (value != null ) {
var n=value.toString().indexOf$S("\u00b0");
if (n > 0) value=value.toString().substring$I$I(0, n);
buf.append$O(value);
}if (j < selectedColumns.length - 1) buf.append$S($I$(45).getDelimiter$());
}
buf.append$S($I$(46).NEW_LINE);
}
if (restoreRows != null  && restoreColumns != null  ) {
this.clearSelection$();
for (var row, $row = 0, $$row = restoreRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) this.addRowSelectionInterval$I$I(row, row);

for (var col, $col = 0, $$col = restoreColumns; $col<$$col.length&&((col=($$col[$col])),1);$col++) this.addColumnSelectionInterval$I$I(col, col);

}return buf;
});

Clazz.newMeth(C$, 'copyTable$Z$S',  function (asFormatted, header) {
var buf=this.getData$Z(asFormatted);
header=header.replace$C$C(" ", "_");
if (!header.endsWith$S($I$(46).NEW_LINE)) header+=$I$(46).NEW_LINE;
if (this.includeHeadersInCopiedData) $I$(30).copy$S$java_awt_datatransfer_ClipboardOwner(header + buf, null);
 else $I$(30,"copy$S$java_awt_datatransfer_ClipboardOwner",[buf.toString(), null]);
});

Clazz.newMeth(C$, 'findLastAddedModelIndex$StringBuffer',  function (names) {
return -1;
});

C$.$static$=function(){C$.$static$=0;
C$.PANEL_BACKGROUND=$I$(34).getColor$O("Panel.background");
C$.LIGHT_BLUE=Clazz.new_($I$(12,1).c$$I$I$I,[204, 204, 255]);
C$.NO_PATTERN=$I$(17).getString$S("DataTable.FormatDialog.NoFormat");
C$.rowName=$I$(17).getString$S("DataTable.Header.Row");
C$.defaultDoubleRenderer=Clazz.new_($I$(35,1));
C$.test=0;
C$.nCompare=((P$.DataTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$OA$OA','compare$O$O'],  function (a, b) {
return (a[0] != null  && b[0] != null   ? Double.compare$D$D((a[0]).doubleValue$(), (b[0]).doubleValue$()) : a[0] != null  ? -1 : b[0] != null  ? 1 : 0);
});
})()
), Clazz.new_(P$.DataTable$1.$init$,[this, null]));
C$.sCompare=((P$.DataTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$OA$OA','compare$O$O'],  function (a, b) {
return (a[0] != null  && b[0] != null   ? a[0].toString().compareTo$S(b[0].toString()) : a[0] != null  ? 1 : b[0] != null  ? -1 : 0);
});
})()
), Clazz.new_(P$.DataTable$2.$init$,[this, null]));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "DataModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "OSPTableModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getStride$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isFoundOrdered$',  function () {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "DataTableElement", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.event.TableModelListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.foundColumn=-1;
this.bsColVis=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['foundColumn'],'O',['tableModel','org.opensourcephysics.display.DataTable.OSPTableModel','bsColVis','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DataTable_OSPTableModel',  function (t) {
;C$.$init$.apply(this);
this.tableModel=t;
this.bsColVis.set$I$I(0, t.getColumnCount$());
if (Clazz.instanceOf(t, "org.opensourcephysics.display.DatasetManager.Model")) {
t.addTableModelListener$javax_swing_event_TableModelListener(this);
}}, 1);

Clazz.newMeth(C$, 'setColumnVisible$I$Z',  function (columnIndex, visible) {
this.bsColVis.set$I$Z(columnIndex, visible);
});

Clazz.newMeth(C$, 'getStride$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getVisibleColumnCount$',  function () {
return this.bsColVis.cardinality$();
});

Clazz.newMeth(C$, 'toString',  function () {
return "DataTableElement " + this.tableModel.getRowCount$() + "x" + this.tableModel.getColumnCount$() + " vis=" + this.bsColVis ;
});

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
this.refresh$();
});

Clazz.newMeth(C$, 'refresh$',  function () {
this.bsColVis.clear$();
var n=this.tableModel.getColumnCount$();
this.bsColVis.set$I$I(0, n);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "OSPDataTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel', 'javax.swing.event.TableModelListener');
C$.$classes$=[['SortDecorator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.haveColumnClasses=true;
this.selectedModelRows=Clazz.new_($I$(1,1));
this.selectedModelCols=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['rowNumberVisible','haveColumnClasses'],'I',['columnCount','rowCount'],'O',['dataTableElements','java.util.ArrayList','decorator','org.opensourcephysics.display.DataTable.OSPDataTableModel.SortDecorator','lastModelEvent','javax.swing.event.TableModelEvent','selectedModelRows','java.util.BitSet','+selectedModelCols','foundModel','javax.swing.table.TableModel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.dataTableElements=Clazz.new_($I$(4,1));
this.decorator=Clazz.new_($I$(5,1),[this, null]);
this.addTableModelListener$javax_swing_event_TableModelListener(((P$.DataTable$OSPDataTableModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$OSPDataTableModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].setTainted$.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], []);
this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].decorator.reset$();
});
})()
), Clazz.new_(P$.DataTable$OSPDataTableModel$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'setTainted$',  function () {
this.columnCount=this.rowCount=-1;
this.b$['org.opensourcephysics.display.DataTable'].tainted=true;
});

Clazz.newMeth(C$, 'setColumnSelectionFromJTable$',  function () {
this.selectedModelCols.clear$();
var selected=this.b$['javax.swing.JTable'].getSelectedColumns$.apply(this.b$['javax.swing.JTable'], []);
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
for (var i=0; i < selected.length; i++) {
if (selected[i] == labelCol) {
continue;
}this.selectedModelCols.set$I(this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [selected[i]]));
}
if (this.selectedModelCols.isEmpty$() || this.selectedModelRows.isEmpty$() ) {
this.b$['javax.swing.JTable'].clearSelection$.apply(this.b$['javax.swing.JTable'], []);
}});

Clazz.newMeth(C$, 'setSelectedRowsFromJTable$',  function () {
this.selectedModelRows.clear$();
var bs=p$2.getSelectedTableRowsBS.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.selectedModelRows.set$I(this.getModelRow$I(i));
}
});

Clazz.newMeth(C$, 'getModelRow$I',  function (row) {
return this.decorator.getModelRow$I(row);
});

Clazz.newMeth(C$, 'addColumnSelectionInterval$I$I',  function (coli, colj) {
this.b$['org.opensourcephysics.display.DataTable'].columnModel.getSelectionModel$().addSelectionInterval$I$I(coli, colj);
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
this.selectedModelCols.clear$();
var selected=this.b$['javax.swing.JTable'].getSelectedColumns$.apply(this.b$['javax.swing.JTable'], []);
for (var i=0; i < selected.length; i++) {
if (selected[i] == labelCol) {
continue;
}var modelCol=this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [selected[i]]);
this.selectedModelCols.set$I(modelCol);
}
if (this.selectedModelCols.isEmpty$()) {
this.b$['javax.swing.JTable'].clearSelection$.apply(this.b$['javax.swing.JTable'], []);
}});

Clazz.newMeth(C$, 'find$I',  function (icol) {
if (this.rowNumberVisible) {
--icol;
}for (var i=0, ncol=0, n=this.dataTableElements.size$(); i < n; i++) {
var dte=this.dataTableElements.get$I(i);
var nvis=dte.getVisibleColumnCount$();
if (ncol + nvis > icol) {
i=icol - ncol;
var bs=dte.bsColVis;
for (var j=ncol; j < icol; j++) {
if (!bs.get$I(j - ncol)) {
++i;
}}
dte.foundColumn=i;
this.foundModel=dte.tableModel;
return dte;
}ncol+=nvis;
}
this.foundModel=null;
return null;
});

Clazz.newMeth(C$, 'sort$I',  function (col) {
var dte;
if (col < 0 || this.dataTableElements.size$() == 0  || (dte=this.find$I(col)) == null  ) return;
dte.tableModel.getValueAt$I$I(0, dte.foundColumn);
this.decorator.sort$org_opensourcephysics_display_DataTable_DataTableElement$I(dte, col);
});

Clazz.newMeth(C$, 'getSortedColumn$',  function () {
return this.decorator.getSortedColumn$();
});

Clazz.newMeth(C$, 'resetSort$',  function () {
this.decorator.reset$();
});

Clazz.newMeth(C$, 'getSortedRow$I',  function (j) {
return this.decorator.getSortedRow$I(j);
});

Clazz.newMeth(C$, 'setColumnVisible$javax_swing_table_TableModel$I$Z',  function (model, columnIndex, b) {
var dte=this.findElementContaining$javax_swing_table_TableModel(model);
dte.setColumnVisible$I$Z(columnIndex, b);
});

Clazz.newMeth(C$, 'refreshColumnModel$',  function () {
for (var i=this.dataTableElements.size$(); --i >= 0; ) {
this.dataTableElements.get$I(i).refresh$();
}
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (b) {
this.rowNumberVisible=b;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, rowIndex, columnIndex) {
this.decorator.setValueAt$O$I$I(value, rowIndex, columnIndex);
});

Clazz.newMeth(C$, 'setElementValue$O$I$I',  function (value, rowIndex, columnIndex) {
if (this.dataTableElements.size$() == 0 || this.rowNumberVisible && columnIndex == 0  ) {
return;
}var dte=this.find$I(columnIndex);
var stride=dte.getStride$();
rowIndex=rowIndex * stride;
if (rowIndex >= dte.tableModel.getRowCount$()) {
return;
}dte.tableModel.setValueAt$O$I$I(value, rowIndex, dte.foundColumn);
});

Clazz.newMeth(C$, 'isRowNumberVisible$',  function () {
return this.rowNumberVisible;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (columnIndex) {
if (columnIndex >= this.getColumnCount$()) {
return "unknown";
}if ((this.dataTableElements.size$() == 0) && !this.rowNumberVisible ) {
return null;
}if (this.rowNumberVisible) {
if (columnIndex == 0) {
return $I$(3).rowName;
}}var dte=this.find$I(columnIndex);
return dte.tableModel.getColumnName$I(dte.foundColumn);
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
if (this.rowCount > 0) return this.rowCount;
var n=0;
for (var i=this.dataTableElements.size$(); --i >= 0; ) {
var dte=this.dataTableElements.get$I(i);
var stride=dte.getStride$();
n=Math.max(n, ((dte.tableModel.getRowCount$() + stride - 1)/stride|0));
}
return this.rowCount=n;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
if (this.columnCount >= 0) return this.columnCount;
var n=0;
for (var i=this.dataTableElements.size$(); --i >= 0; ) {
n+=this.dataTableElements.get$I(i).getVisibleColumnCount$();
}
return this.columnCount=(this.rowNumberVisible ? n + 1 : n);
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
return this.decorator.getValueAt$I$I(rowIndex, columnIndex);
});

Clazz.newMeth(C$, 'getElementValue$I$I',  function (rowIndex, columnIndex) {
if (this.dataTableElements.size$() == 0) {
return null;
}if (this.rowNumberVisible) {
if (columnIndex == 0) {
return Integer.valueOf$I(rowIndex);
}}var dte=this.find$I(columnIndex);
var stride=dte.getStride$();
rowIndex=rowIndex * stride;
if (rowIndex >= dte.tableModel.getRowCount$()) {
return null;
}return dte.tableModel.getValueAt$I$I(rowIndex, dte.foundColumn);
});

Clazz.newMeth(C$, 'getElementValues$org_opensourcephysics_display_DataTable_DataTableElement$I$OA',  function (dte, columnIndex, objects) {
var asRow=(this.rowNumberVisible && columnIndex == 0 );
var stride=dte.getStride$();
for (var i=0, rowIndex=0, n=objects.length, nr=dte.tableModel.getRowCount$(); i < n && rowIndex < nr ; i++, rowIndex+=stride) {
objects[i]=(asRow ? Integer.valueOf$I(rowIndex) : dte.tableModel.getValueAt$I$I(i, dte.foundColumn));
}
return objects;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
if (columnIndex >= this.getColumnCount$()) {
return Clazz.getClass(java.lang.Object);
}if (!this.haveColumnClasses) {
return C$.superclazz.prototype.getColumnClass$I.apply(this, [columnIndex]);
}if (this.rowNumberVisible) {
if (columnIndex == 0) {
return Clazz.getClass(Integer);
}}var dte=this.find$I(columnIndex);
return dte.tableModel.getColumnClass$I(dte.foundColumn);
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (rowIndex, columnIndex) {
return (columnIndex < this.getColumnCount$() && this.isElementEditable$I$I(rowIndex, columnIndex) );
});

Clazz.newMeth(C$, 'isElementEditable$I$I',  function (row, col) {
return false;
});

Clazz.newMeth(C$, 'remove$javax_swing_table_TableModel',  function (tableModel) {
tableModel.removeTableModelListener$javax_swing_event_TableModelListener(this);
this.dataTableElements.remove$O(this.findElementContaining$javax_swing_table_TableModel(tableModel));
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var i=this.dataTableElements.size$(); --i >= 0; ) this.dataTableElements.get$I(i).tableModel.removeTableModelListener$javax_swing_event_TableModelListener(this);

this.dataTableElements.clear$();
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_display_DataTable_OSPTableModel',  function (tableModel) {
this.setTainted$();
this.dataTableElements.add$O(Clazz.new_($I$(6,1).c$$org_opensourcephysics_display_DataTable_OSPTableModel,[tableModel]));
tableModel.addTableModelListener$javax_swing_event_TableModelListener(this);
});

Clazz.newMeth(C$, 'findElementContaining$javax_swing_table_TableModel',  function (tableModel) {
for (var i=this.dataTableElements.size$(); --i >= 0; ) {
var dte=this.dataTableElements.get$I(i);
if (dte.tableModel === tableModel ) {
return dte;
}}
return null;
});

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
this.lastModelEvent=e;
});

Clazz.newMeth(C$, 'isFoundOrdered$',  function () {
return (this.foundModel != null  && Clazz.instanceOf(this.foundModel, "org.opensourcephysics.display.Dataset")  && (this.foundModel).model.isFoundOrdered$() );
});

Clazz.newMeth(C$, 'refresh$I',  function (mask) {
var type;
switch (mask) {
default:
case 260108303:
type="rebuild";
break;
case 15:
type="new";
break;
case 4096:
type="track";
break;
case 33554432:
type="header";
break;
case 8192:
type="row";
break;
case 16384:
type="col";
break;
case 32768:
type="values";
break;
case 8388608:
type="style";
break;
case 16777216:
type="select";
break;
case 67108864:
type="show";
break;
}
p$2.updateFormats.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
this.b$['org.opensourcephysics.display.DataTable'].updateColumnModel$.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
});

Clazz.newMeth(C$, 'getSelectedModelRows$',  function () {
var rows=Clazz.array(Integer.TYPE, [this.selectedModelRows.cardinality$()]);
for (var pt=0, i=this.selectedModelRows.nextSetBit$I(0); i >= 0; i=this.selectedModelRows.nextSetBit$I(i + 1)) {
rows[pt++]=i;
}
return rows;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable.OSPDataTableModel, "SortDecorator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.viewRowToModel=Clazz.array(Integer.TYPE, [0]);
this.modelToViewRow=Clazz.array(Integer.TYPE, [0]);
},1);

C$.$fields$=[['I',['sortedColumn'],'O',['viewRowToModel','int[]','+modelToViewRow']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getModelRow$I',  function (row) {
return this.viewRowToModel[row];
});

Clazz.newMeth(C$, 'getSortedRow$I',  function (realModelRow) {
if (realModelRow >= this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].rowCount) this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].setTainted$.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], []);
p$1.allocate$I.apply(this, [realModelRow]);
return this.modelToViewRow[realModelRow];
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (viewRow, viewCol) {
if (viewCol >= this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].getColumnCount$.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], [])) {
return null;
}p$1.allocate$I.apply(this, [viewRow]);
return this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].getElementValue$I$I.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], [this.viewRowToModel[viewRow], viewCol]);
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (aValue, viewRow, viewCol) {
p$1.allocate$I.apply(this, [viewRow]);
this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].setElementValue$O$I$I.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], [aValue, this.viewRowToModel[viewRow], viewCol]);
});

Clazz.newMeth(C$, 'sort$org_opensourcephysics_display_DataTable_DataTableElement$I',  function (dte, column) {
if (dte.tableModel.isFoundOrdered$()) {
p$1.allocate$I.apply(this, [2147483647]);
this.sortedColumn=column;
return;
}this.sortedColumn=column;
p$1.allocate$I.apply(this, [2147483647]);
try {
var data=this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].getElementValues$org_opensourcephysics_display_DataTable_DataTableElement$I$OA.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], [dte, column, Clazz.array(java.lang.Object, [this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].rowCount])]);
var sortArray=Clazz.array(java.lang.Object, [this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].rowCount, 2]);
for (var i=0; i < this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].rowCount; i++) {
sortArray[i][0]=data[i];
sortArray[i][1]=Integer.valueOf$I(this.viewRowToModel[i]);
}
var c=this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].getColumnClass$I.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], [column]);
if (Clazz.getClass(Number).isAssignableFrom$Class(c)) {
$I$(2,"sort$OA$java_util_Comparator",[sortArray, $I$(3).nCompare]);
} else {
$I$(2,"sort$OA$java_util_Comparator",[sortArray, $I$(3).sCompare]);
}for (var i=0; i < this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].rowCount; i++) {
this.viewRowToModel[i]=(sortArray[i][1]).intValue$();
}
return;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getSortedColumn$',  function () {
return this.sortedColumn;
});

Clazz.newMeth(C$, 'allocate$I',  function (min) {
if (this.viewRowToModel.length <= min) {
var n=this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable.OSPDataTableModel'], []);
this.viewRowToModel=Clazz.array(Integer.TYPE, [n]);
this.modelToViewRow=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < this.viewRowToModel.length; ++i) {
this.viewRowToModel[i]=this.modelToViewRow[i]=i;
}
}}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
p$1.allocate$I.apply(this, [2147483647]);
this.sortedColumn=-1;
});
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "DataTableColumnModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableColumnModel');
C$.$classes$=[['DataTableColumn',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'invalidateWidths',  function () {
for (var i=this.tableColumns.size$(); --i >= 0; ) {
(this.tableColumns.get$I(i)).isSizeSet=false;
}
}, p$3);

Clazz.newMeth(C$, 'updateColumnModel',  function () {
var nTableCols=this.tableColumns.size$();
var nModelCols=this.b$['org.opensourcephysics.display.DataTable'].dataTableModel.getColumnCount$();
for (var i=nTableCols; --i >= 0; ) {
var tc=this.getTableColumn$I(i);
var colName=this.b$['javax.swing.JTable'].getModel$.apply(this.b$['javax.swing.JTable'], []).getColumnName$I(tc.getModelIndex$());
if (!colName.equals$O(tc.getHeaderValue$())) {
tc.setHeaderValue$O(colName);
}}
if (nModelCols == nTableCols) return;
var names=(nModelCols > nTableCols ? Clazz.new_($I$(7,1).c$$S,[","]) : null);
for (var i=nTableCols; --i >= 0; ) {
var tc=this.getTableColumn$I(i);
var name=tc.getHeaderValue$();
if (names != null ) names.append$S(name).append$S(",");
var modelIndex=this.b$['org.opensourcephysics.display.DataTable'].dataTableModel.findColumn$S(name);
if (modelIndex >= 0) {
tc.setModelIndex$I(modelIndex);
} else {
tc.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.tableColumns.remove$I(i);
--nTableCols;
}}
for (var i=nTableCols; i < nModelCols; i++) {
var modelIndex=this.b$['org.opensourcephysics.display.DataTable'].findLastAddedModelIndex$StringBuffer.apply(this.b$['org.opensourcephysics.display.DataTable'], [names]);
var tc=Clazz.new_($I$(8,1).c$$I,[this, null, modelIndex < 0 ? i : modelIndex]);
tc.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.tableColumns.add$O(tc);
}
this.totalColumnWidth=-1;
this.selectionModel.clearSelection$();
p$3.invalidateWidths.apply(this, []);
}, p$3);

Clazz.newMeth(C$, 'convertColumnIndexToModel$I',  function (viewIndex) {
if (this.b$['org.opensourcephysics.display.DataTable'].dataTableModel.getColumnCount$() != this.tableColumns.size$()) p$3.updateColumnModel.apply(this, []);
return this.getTableColumn$I(viewIndex).getModelIndex$();
});

Clazz.newMeth(C$, 'addColumn$javax_swing_table_TableColumn',  function (c) {
C$.superclazz.prototype.addColumn$javax_swing_table_TableColumn.apply(this, [c]);
this.b$['org.opensourcephysics.display.DataTable'].dataTableModel.columnCount=-1;
});

Clazz.newMeth(C$, 'getColumn$I',  function (columnIndex) {
return (columnIndex >= 0 && columnIndex < this.tableColumns.size$()  ? p$3.updateTableColumnSize$I.apply(this, [columnIndex]) : Clazz.new_($I$(9,1).c$$I,[0]));
});

Clazz.newMeth(C$, 'updateTableColumnSize$I',  function (index) {
var tableColumn=this.getTableColumn$I(index);
if (!tableColumn.isSizeSet) {
tableColumn.isSizeSet=true;
var headerValue=tableColumn.getHeaderValue$();
if (headerValue != null ) {
if (headerValue.equals$O($I$(3).rowName) && (tableColumn.getModelIndex$() == 0) ) {
tableColumn.setMaxWidth$I(this.b$['org.opensourcephysics.display.DataTable'].labelColumnWidth);
tableColumn.setMinWidth$I(this.b$['org.opensourcephysics.display.DataTable'].labelColumnWidth);
tableColumn.setResizable$Z(false);
} else {
tableColumn.setMinWidth$I(this.b$['org.opensourcephysics.display.DataTable'].minimumDataColumnWidth);
}}}return tableColumn;
}, p$3);

Clazz.newMeth(C$, 'getTableColumn$I',  function (columnIndex) {
return C$.superclazz.prototype.getColumn$I.apply(this, [columnIndex]);
});

Clazz.newMeth(C$, 'setModelColumnOrder$IA',  function (modelColumns) {
this.selectionModel.clearSelection$();
var current=p$3.getModelColumnOrder.apply(this, []);
if ($I$(2).equals$IA$IA(current, modelColumns)) return;
var max=0;
for (var i=current.length; --i >= 0; ) {
if (current[i] > max) max=current[i];
}
var map=Clazz.array(Integer.TYPE, [max + 1]);
for (var i=current.length; --i >= 0; ) {
map[current[i]]=i + 1;
}
var newCols=Clazz.new_($I$(10,1));
var mapped=Clazz.new_($I$(1,1).c$$I,[max]);
for (var i=0, n=modelColumns.length; i < n; i++) {
var mi=modelColumns[i];
var j=(mi > max ? -1 : map[mi] - 1);
if (j >= 0) {
var tc=this.tableColumns.get$I(j);
tc.setModelIndex$I(mi);
newCols.add$O(tc);
mapped.set$I(j);
}}
for (var i=mapped.nextClearBit$I(0), n=this.tableColumns.size$(); i < n; i=mapped.nextClearBit$I(i + 1)) {
this.tableColumns.get$I(i).removePropertyChangeListener$java_beans_PropertyChangeListener(this);
}
this.tableColumns=newCols;
}, p$3);

Clazz.newMeth(C$, 'getModelColumnOrder',  function () {
var n=this.b$['javax.swing.JTable'].getModel$.apply(this.b$['javax.swing.JTable'], []).getColumnCount$();
var modelColumns=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) {
var d=this.getTableColumn$I(i).getModelIndex$();
modelColumns[i]=(d == 0 ? i : d);
}
return modelColumns;
}, p$3);

Clazz.newMeth(C$, 'toString',  function () {
var s="[DT columnModel ";
for (var i=0; i < this.tableColumns.size$(); i++) s+=this.getTableColumn$I(i).toString() + " " + "]" ;

return s;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable.DataTableColumnModel, "DataTableColumn", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.TableColumn');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSizeSet']]]

Clazz.newMeth(C$, 'c$$I',  function (modelIndex) {
;C$.superclazz.c$$I.apply(this,[modelIndex]);C$.$init$.apply(this);
this.setHeaderValue$O(this.b$['javax.swing.JTable'].getModel$.apply(this.b$['javax.swing.JTable'], []).getColumnName$I(modelIndex));
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[DT column " + this.headerValue + " " + this.modelIndex + "]" ;
});

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "DoubleRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['numberField','org.opensourcephysics.media.core.NumberField']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.numberField=Clazz.new_($I$(11,1).c$$I,[0]);
this.setHorizontalAlignment$I(4);
this.setBackground$java_awt_Color($I$(12).WHITE);
}, 1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (value == null  || Double.isNaN$D((value).valueOf()) ) {
this.setText$S("");
return;
}this.numberField.setValue$D((value).valueOf());
this.setText$S(this.numberField.getText$());
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "PrecisionRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['pattern'],'O',['numberFormat','java.text.DecimalFormat']]]

Clazz.newMeth(C$, 'c$$I',  function (precision) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.numberFormat=$I$(13).getInstance$();
this.numberFormat.setMaximumFractionDigits$I(precision);
this.setHorizontalAlignment$I(4);
this.setBackground$java_awt_Color($I$(12).WHITE);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.numberFormat=$I$(13).getInstance$();
this.numberFormat.applyPattern$S(pattern);
this.pattern=pattern;
this.setHorizontalAlignment$I(4);
}, 1);

Clazz.newMeth(C$, 'setPrecision$I',  function (precision) {
this.numberFormat.setMaximumFractionDigits$I(precision);
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.setText$S((value == null  || value.toString().equals$O("NaN") ) ? "" : this.numberFormat.format$O(value));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "RowNumberRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['table','javax.swing.JTable']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTable',  function (_table) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.table=_table;
this.setHorizontalAlignment$I(4);
this.setOpaque$Z(true);
this.setForeground$java_awt_Color($I$(12).black);
this.setBackground$java_awt_Color($I$(3).PANEL_BACKGROUND);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
if (table.isRowSelected$I(row)) {
var i=table.getSelectedColumns$();
if ((i.length == 1) && (table.convertColumnIndexToModel$I(i[0]) == 0) ) {
this.setBackground$java_awt_Color($I$(3).PANEL_BACKGROUND);
} else {
this.setBackground$java_awt_Color($I$(12).gray);
}} else {
this.setBackground$java_awt_Color($I$(3).PANEL_BACKGROUND);
}this.setText$S(value.toString());
return this;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "UnitRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['units','tooltip'],'O',['baseRenderer','javax.swing.table.TableCellRenderer']]]

Clazz.newMeth(C$, 'c$$javax_swing_table_TableCellRenderer$S$S',  function (renderer, units, tooltip) {
;C$.$init$.apply(this);
this.units=units;
this.tooltip=tooltip;
p$4.setBaseRenderer$javax_swing_table_TableCellRenderer.apply(this, [renderer]);
}, 1);

Clazz.newMeth(C$, 'setBaseRenderer$javax_swing_table_TableCellRenderer',  function (renderer) {
this.baseRenderer=renderer;
}, p$4);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
var c=this.baseRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, isSelected, hasFocus, row, column);
if (Clazz.instanceOf(c, "javax.swing.JLabel") && this.units != null  ) {
var label=c;
var s=label.getText$();
if (s != null  && !s.equals$O("") ) label.setText$S(s + this.units);
label.setToolTipText$S(this.tooltip);
}return c;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "NumberFormatDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.realNames=Clazz.new_($I$(14,1));
this.prevPatterns=Clazz.new_($I$(14,1));
},1);

C$.$fields$=[['O',['closeButton','javax.swing.JButton','+cancelButton','+helpButton','+applyButton','patternLabel','javax.swing.JLabel','+sampleLabel','patternField','javax.swing.JTextField','+sampleField','sampleFormat','java.text.DecimalFormat','displayedNames','String[]','realNames','java.util.Map','+prevPatterns','columnList','javax.swing.JList','columnScroller','javax.swing.JScrollPane']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(15).getFrameForComponent$java_awt_Component(this.b$['org.opensourcephysics.display.DataTable']), true]);C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1)));
this.setTitle$S($I$(17).getString$S("DataTable.NumberFormat.Dialog.Title"));
this.sampleFormat=$I$(13).getNumberInstance$();
this.closeButton=Clazz.new_([$I$(17).getString$S("Dialog.Button.Close.Text")],$I$(18,1).c$$S);
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.DataTable$NumberFormatDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.DataTable$NumberFormatDialog$1.$init$,[this, null])));
this.applyButton=Clazz.new_([$I$(17).getString$S("Dialog.Button.Apply.Text")],$I$(18,1).c$$S);
this.applyButton.addActionListener$java_awt_event_ActionListener(((P$.DataTable$NumberFormatDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].formatAction$.apply(this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'], []);
});
})()
), Clazz.new_(P$.DataTable$NumberFormatDialog$2.$init$,[this, null])));
this.cancelButton=Clazz.new_([$I$(17).getString$S("GUIUtils.Cancel")],$I$(18,1).c$$S);
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.DataTable$NumberFormatDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var displayedName, $displayedName = 0, $$displayedName = this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].displayedNames; $displayedName<$$displayedName.length&&((displayedName=($$displayedName[$displayedName])),1);$displayedName++) {
var name=this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].realNames.get$O(displayedName);
this.b$['org.opensourcephysics.display.DataTable'].setFormatPattern$S$S.apply(this.b$['org.opensourcephysics.display.DataTable'], [name, this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].prevPatterns.get$O(name)]);
}
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
this.b$['org.opensourcephysics.display.DataTable'].refreshTableNow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [0]);
});
})()
), Clazz.new_(P$.DataTable$NumberFormatDialog$3.$init$,[this, null])));
this.helpButton=Clazz.new_([$I$(17).getString$S("GUIUtils.Help")],$I$(18,1).c$$S);
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.DataTable$NumberFormatDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab="      ";
var nl=System.getProperty$S$S("line.separator", "/n");
$I$(15,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.display.DataTable'].formatDialog, $I$(17).getString$S("DataTable.NumberFormat.Help.Message1") + nl + nl + tab + $I$(17).getString$S("DataTable.NumberFormat.Help.Message2") + nl + tab + $I$(17).getString$S("DataTable.NumberFormat.Help.Message3") + nl + tab + $I$(17).getString$S("DataTable.NumberFormat.Help.Message4") + nl + tab + $I$(17).getString$S("DataTable.NumberFormat.Help.Message5") + nl + nl + $I$(17).getString$S("DataTable.NumberFormat.Help.Message6") + " PI." , $I$(17).getString$S("DataTable.NumberFormat.Help.Title"), 1]);
});
})()
), Clazz.new_(P$.DataTable$NumberFormatDialog$4.$init$,[this, null])));
this.patternLabel=Clazz.new_([$I$(17).getString$S("DataTable.NumberFormat.Dialog.Label.Format")],$I$(19,1).c$$S);
this.sampleLabel=Clazz.new_([$I$(17).getString$S("DataTable.NumberFormat.Dialog.Label.Sample")],$I$(19,1).c$$S);
this.patternField=Clazz.new_($I$(20,1).c$$I,[6]);
this.patternField.setAction$javax_swing_Action(((P$.DataTable$NumberFormatDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].formatAction$.apply(this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'], []);
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.DataTable$NumberFormatDialog$5)));
this.patternField.addKeyListener$java_awt_event_KeyListener(((P$.DataTable$NumberFormatDialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].patternField.setBackground$java_awt_Color($I$(12).white);
} else {
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].patternField.setBackground$java_awt_Color($I$(12).yellow);
$I$(22,"invokeLater$Runnable",[((P$.DataTable$NumberFormatDialog$6$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$6$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].updatePatternAction$.apply(this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'], []);
});
})()
), Clazz.new_(P$.DataTable$NumberFormatDialog$6$lambda1.$init$,[this, null]))]);
}});
})()
), Clazz.new_($I$(23,1),[this, null],P$.DataTable$NumberFormatDialog$6)));
this.patternField.addFocusListener$java_awt_event_FocusListener(((P$.DataTable$NumberFormatDialog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].patternField.setBackground$java_awt_Color($I$(12).white);
this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].formatAction$.apply(this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'], []);
});
})()
), Clazz.new_($I$(24,1),[this, null],P$.DataTable$NumberFormatDialog$7)));
this.sampleField=Clazz.new_($I$(20,1).c$$I,[6]);
this.sampleField.setEditable$Z(false);
this.columnScroller=Clazz.new_($I$(25,1));
this.columnScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(26,1).c$$I$I,[160, 120]));
var formatPanel=Clazz.new_([Clazz.new_($I$(28,1))],$I$(27,1).c$$java_awt_LayoutManager);
var patternPanel=Clazz.new_($I$(27,1));
patternPanel.add$java_awt_Component(this.patternLabel);
patternPanel.add$java_awt_Component(this.patternField);
formatPanel.add$java_awt_Component(patternPanel);
var samplePanel=Clazz.new_($I$(27,1));
samplePanel.add$java_awt_Component(this.sampleLabel);
samplePanel.add$java_awt_Component(this.sampleField);
formatPanel.add$java_awt_Component(samplePanel);
this.add$java_awt_Component$O(formatPanel, "North");
var columnPanel=Clazz.new_([Clazz.new_($I$(16,1))],$I$(27,1).c$$java_awt_LayoutManager);
columnPanel.setBorder$javax_swing_border_Border($I$(29,"createTitledBorder$S",[$I$(17).getString$S("DataTable.FormatDialog.ApplyTo.Title")]));
columnPanel.add$java_awt_Component$O(this.columnScroller, "Center");
this.add$java_awt_Component$O(columnPanel, "Center");
var buttonPanel=Clazz.new_($I$(27,1));
buttonPanel.add$java_awt_Component(this.helpButton);
buttonPanel.add$java_awt_Component(this.applyButton);
buttonPanel.add$java_awt_Component(this.closeButton);
buttonPanel.add$java_awt_Component(this.cancelButton);
this.add$java_awt_Component$O(buttonPanel, "South");
this.pack$();
}, 1);

Clazz.newMeth(C$, 'updatePatternAction$',  function () {
var pattern=this.patternField.getText$();
if (pattern.indexOf$S($I$(3).NO_PATTERN) > -1) pattern="";
for (var i=1; i < 10; i++) {
pattern=pattern.replaceAll$S$S(String.valueOf$I(i), "0");
}
var i=pattern.indexOf$S("0e0");
if (i > -1) {
pattern=pattern.substring$I$I(0, i) + "0E0" + pattern.substring$I(i + 3) ;
}if (pattern.equals$O("") || pattern.equals$O($I$(3).NO_PATTERN) ) {
var renderer=this.b$['org.opensourcephysics.display.DataTable'].getDefaultRenderer$Class.apply(this.b$['org.opensourcephysics.display.DataTable'], [Clazz.getClass(Double)]);
var c=renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.b$['org.opensourcephysics.display.DataTable'], Double.valueOf$D(3.141592653589793), false, false, 0, 0);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
var text=(c).getText$();
this.sampleField.setText$S(text);
}} else {
try {
this.sampleFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(30).getDecimalFormatSymbols$());
this.sampleFormat.applyPattern$S(pattern);
this.sampleField.setText$S(this.sampleFormat.format$D(3.141592653589793));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'formatAction$',  function () {
var pattern=this.patternField.getText$();
if (pattern.indexOf$S($I$(3).NO_PATTERN) > -1) pattern="";
for (var i=1; i < 10; i++) {
pattern=pattern.replaceAll$S$S("" + i, "0");
}
var i=pattern.indexOf$S("0e0");
if (i > -1) {
pattern=pattern.substring$I$I(0, i) + "0E0" + pattern.substring$I(i + 3) ;
}try {
p$5.showNumberFormatAndSample$S.apply(this, [pattern]);
var selectedColumns=this.columnList.getSelectedValuesList$();
for (var displayedName, $displayedName = selectedColumns.iterator$(); $displayedName.hasNext$()&&((displayedName=($displayedName.next$())),1);) {
var name=this.realNames.get$O(displayedName.toString());
this.b$['org.opensourcephysics.display.DataTable'].setFormatPattern$S$S.apply(this.b$['org.opensourcephysics.display.DataTable'], [name, pattern]);
}
this.b$['org.opensourcephysics.display.DataTable'].refreshTableNow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [8454144]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"RuntimeException")){
this.patternField.setBackground$java_awt_Color(Clazz.new_($I$(12,1).c$$I$I$I,[255, 153, 153]));
this.patternField.setText$S(pattern);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'showNumberFormatAndSample$IA',  function (selectedIndices) {
if (selectedIndices == null  || selectedIndices.length == 0 ) {
p$5.showNumberFormatAndSample$S.apply(this, [""]);
} else if (selectedIndices.length == 1) {
var name=this.realNames.get$O(this.displayedNames[selectedIndices[0]]);
var pattern=this.b$['org.opensourcephysics.display.DataTable'].getFormatPattern$S.apply(this.b$['org.opensourcephysics.display.DataTable'], [name]);
p$5.showNumberFormatAndSample$S.apply(this, [pattern]);
} else {
var name=this.realNames.get$O(this.displayedNames[selectedIndices[0]]);
var pattern=this.b$['org.opensourcephysics.display.DataTable'].getFormatPattern$S.apply(this.b$['org.opensourcephysics.display.DataTable'], [name]);
for (var i=1; i < selectedIndices.length; i++) {
name=this.realNames.get$O(this.displayedNames[selectedIndices[i]]);
if (!pattern.equals$O(this.b$['org.opensourcephysics.display.DataTable'].getFormatPattern$S.apply(this.b$['org.opensourcephysics.display.DataTable'], [name]))) {
pattern=null;
break;
}}
p$5.showNumberFormatAndSample$S.apply(this, [pattern]);
}}, p$5);

Clazz.newMeth(C$, 'showNumberFormatAndSample$S',  function (pattern) {
if (pattern == null ) {
this.sampleField.setText$S("");
this.patternField.setText$S("");
return;
}if (pattern.equals$O("") || pattern.equals$O($I$(3).NO_PATTERN) ) {
var renderer=this.b$['org.opensourcephysics.display.DataTable'].getDefaultRenderer$Class.apply(this.b$['org.opensourcephysics.display.DataTable'], [Clazz.getClass(Double)]);
var c=renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.b$['org.opensourcephysics.display.DataTable'], Double.valueOf$D(3.141592653589793), false, false, 0, 0);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
var text=(c).getText$();
this.sampleField.setText$S(text);
}this.patternField.setText$S($I$(3).NO_PATTERN);
} else {
this.sampleFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(30).getDecimalFormatSymbols$());
this.sampleFormat.applyPattern$S(pattern);
this.sampleField.setText$S(this.sampleFormat.format$D(3.141592653589793));
this.patternField.setText$S(pattern);
}}, p$5);

Clazz.newMeth(C$, 'setColumns$SA$SA',  function (names, selected) {
this.displayedNames=Clazz.array(String, [names.length]);
this.realNames.clear$();
for (var i=0; i < names.length; i++) {
var s=$I$(31).removeSubscripting$S(names[i]);
this.displayedNames[i]="   " + s + " " ;
this.realNames.put$O$O(this.displayedNames[i], names[i]);
if (selected != null ) {
for (var j=0; j < selected.length; j++) {
if (selected[j] != null  && selected[j].equals$O(names[i]) ) {
selected[j]=this.displayedNames[i];
}}
}}
this.prevPatterns.clear$();
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
this.prevPatterns.put$O$O(name, this.b$['org.opensourcephysics.display.DataTable'].getFormatPattern$S.apply(this.b$['org.opensourcephysics.display.DataTable'], [name]));
}
this.columnList=Clazz.new_($I$(32,1).c$$OA,[this.displayedNames]);
this.columnList.setLayoutOrientation$I(2);
this.columnList.setVisibleRowCount$I(-1);
this.columnList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.DataTable$NumberFormatDialog$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTable$NumberFormatDialog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
p$5.showNumberFormatAndSample$IA.apply(this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'], [this.b$['org.opensourcephysics.display.DataTable.NumberFormatDialog'].columnList.getSelectedIndices$()]);
});
})()
), Clazz.new_(P$.DataTable$NumberFormatDialog$8.$init$,[this, null])));
this.columnScroller.setViewportView$java_awt_Component(this.columnList);
this.pack$();
var indices=null;
if (selected != null ) {
indices=Clazz.array(Integer.TYPE, [selected.length]);
for (var j=0; j < indices.length; j++) {
 inner : for (var i=0; i < this.displayedNames.length; i++) {
if (this.displayedNames[i].equals$O(selected[j])) {
indices[j]=i;
break inner;
}}
}
this.columnList.setSelectedIndices$IA(indices);
} else p$5.showNumberFormatAndSample$IA.apply(this, [indices]);
}, p$5);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTable, "HeaderRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.text="";
},1);

C$.$fields$=[['S',['text'],'O',['renderer','javax.swing.table.TableCellRenderer']]]

Clazz.newMeth(C$, 'c$$javax_swing_table_TableCellRenderer',  function (renderer) {
;C$.$init$.apply(this);
this.renderer=renderer;
}, 1);

Clazz.newMeth(C$, 'getBaseRenderer$',  function () {
return this.renderer;
});

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
var name=(value == null ) ? "" : value.toString();
var c=this.renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, name, isSelected, hasFocus, row, col);
if (!(Clazz.instanceOf(c, "javax.swing.JComponent"))) {
return c;
}var comp=c;
var sortCol=this.b$['org.opensourcephysics.display.DataTable'].dataTableModel.getSortedColumn$();
var font=comp.getFont$();
var isSortedCol=sortCol == this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [col]);
comp.setFont$java_awt_Font(!isSortedCol ? font.deriveFont$I(0) : font.deriveFont$I(1));
if (Clazz.instanceOf(comp, "javax.swing.JLabel")) {
var label=comp;
label.setHorizontalAlignment$I(0);
if (label.getText$().indexOf$S("{") >= 0) {
var s=$I$(31,"toHTML$S",[label.getText$()]);
label.setText$S(s);
}if (isSortedCol) {
font=label.getFont$();
var attributes=Clazz.new_([font.getAttributes$()],$I$(14,1).c$$java_util_Map);
attributes.put$O$O($I$(33).UNDERLINE, $I$(33).UNDERLINE_ON);
label.setFont$java_awt_Font(font.deriveFont$java_util_Map(attributes));
}}return comp;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
