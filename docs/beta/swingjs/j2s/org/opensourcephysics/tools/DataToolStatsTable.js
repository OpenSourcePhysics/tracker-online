(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.text.NumberFormat','org.opensourcephysics.display.CellBorder','java.awt.Color',['org.opensourcephysics.tools.DataToolStatsTable','.NumberRenderer'],['org.opensourcephysics.tools.DataToolStatsTable','.StatsTableModel'],'javax.swing.event.MouseInputAdapter','org.opensourcephysics.tools.ToolsRes','javax.swing.SwingUtilities','javax.swing.event.TableModelEvent','java.util.BitSet','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataToolStatsTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable');
C$.$classes$=[['StatsTableModel',0],['NumberRenderer',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numberRenderer=Clazz.new_($I$(4,1).c$$I,[this, null, 3]);
},1);

C$.$fields$=[['O',['dataTable','org.opensourcephysics.tools.DataToolTable','statsModel','org.opensourcephysics.tools.DataToolStatsTable.StatsTableModel','labelRenderer','org.opensourcephysics.tools.DataToolTable.LabelRenderer','numberRenderer','org.opensourcephysics.tools.DataToolStatsTable.NumberRenderer','statsData','Object[][]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DataToolTable',  function (table) {
Clazz.super_(C$, this);
this.dataTable=table;
this.statsModel=Clazz.new_($I$(5,1),[this, null]);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DataToolStatsTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolStatsTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var col=this.b$['javax.swing.JTable'].columnAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
if (col == labelCol) {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [null]);
} else {
var row=this.b$['javax.swing.JTable'].rowAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var val=this.b$['javax.swing.JTable'].getValueAt$I$I.apply(this.b$['javax.swing.JTable'], [row, col]);
var stat=this.b$['javax.swing.JTable'].getValueAt$I$I.apply(this.b$['javax.swing.JTable'], [row, labelCol]);
var name=this.b$['org.opensourcephysics.tools.DataToolStatsTable'].dataTable.getColumnName$I(col);
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [stat + "_" + name + " = " + val ]);
}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.DataToolStatsTable$1)));
this.addMouseListener$java_awt_event_MouseListener(((P$.DataToolStatsTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolStatsTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolStatsTable'].dataTable.dataToolTab.refreshStatusBar$S(this.b$['org.opensourcephysics.tools.DataToolStatsTable'].dataTable.dataToolTab.getCorrelationString$());
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.DataToolStatsTable$2)));
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.dataTable.getColumnModel$().addColumnModelListener$javax_swing_event_TableColumnModelListener(((P$.DataToolStatsTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolStatsTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableColumnModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'columnAdded$javax_swing_event_TableColumnModelEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnRemoved$javax_swing_event_TableColumnModelEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnSelectionChanged$javax_swing_event_ListSelectionEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnMarginChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolStatsTable'].refreshTable$.apply(this.b$['org.opensourcephysics.tools.DataToolStatsTable'], []);
});

Clazz.newMeth(C$, 'columnMoved$javax_swing_event_TableColumnModelEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolStatsTable'].refreshTable$.apply(this.b$['org.opensourcephysics.tools.DataToolStatsTable'], []);
});
})()
), Clazz.new_(P$.DataToolStatsTable$3.$init$,[this, null])));
this.refreshStatistics$();
this.setModel$javax_swing_table_TableModel(this.statsModel);
this.setGridColor$java_awt_Color($I$(3).blue);
this.setTableHeader$javax_swing_table_JTableHeader(null);
this.labelRenderer=this.dataTable.labelRenderer;
this.setAutoResizeMode$I(0);
var selectionModel=this.dataTable.getSelectionModel$();
selectionModel.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.DataToolStatsTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolStatsTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (e.getFirstIndex$() > -1) {
this.b$['org.opensourcephysics.tools.DataToolStatsTable'].refreshStatistics$.apply(this.b$['org.opensourcephysics.tools.DataToolStatsTable'], []);
}});
})()
), Clazz.new_(P$.DataToolStatsTable$4.$init$,[this, null])));
this.refreshCellWidths$();
});

Clazz.newMeth(C$, 'getStatLabels',  function () {
return Clazz.array(String, -1, [$I$(7).getString$S("Table.Entry.Max"), $I$(7).getString$S("Table.Entry.Min"), $I$(7).getString$S("Table.Entry.Mean"), $I$(7).getString$S("Table.Entry.StandardDev"), $I$(7).getString$S("Table.Entry.StandardError"), $I$(7).getString$S("Table.Entry.Count")]);
}, p$1);

Clazz.newMeth(C$, 'getStatistics$DA',  function (data) {
var max=-1.7976931348623157E308;
var min=1.7976931348623157E308;
var sum=0.0;
var squareSum=0.0;
var count=0;
for (var i=data.length; --i >= 0; ) {
var d=data[i];
if (Double.isNaN$D(d)) {
continue;
}++count;
max=Math.max(max, d);
min=Math.min(min, d);
sum+=d;
squareSum+=d * d;
}
var mean=sum / count;
var sd=(count < 2) ? NaN : Math.sqrt((squareSum - count * mean * mean ) / (count - 1));
if (max == -1.7976931348623157E308 ) {
max=NaN;
}if (min == 1.7976931348623157E308 ) {
min=NaN;
}return Clazz.array(java.lang.Object, -1, [Double.valueOf$D(max), Double.valueOf$D(min), Double.valueOf$D(mean), Double.valueOf$D(sd), Double.valueOf$D(sd / Math.sqrt(count)), Integer.valueOf$I(count)]);
}, p$1);

Clazz.newMeth(C$, 'refreshTable$',  function () {
$I$(8,"invokeLater$Runnable",[((P$.DataToolStatsTable$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolStatsTable$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['javax.swing.JTable'].tableChanged$javax_swing_event_TableModelEvent.apply(this.b$['javax.swing.JTable'], [Clazz.new_($I$(9,1).c$$javax_swing_table_TableModel$I,[this.b$['org.opensourcephysics.tools.DataToolStatsTable'].statsModel, -1])]);
this.b$['org.opensourcephysics.tools.DataToolStatsTable'].refreshCellWidths$.apply(this.b$['org.opensourcephysics.tools.DataToolStatsTable'], []);
});
})()
), Clazz.new_(P$.DataToolStatsTable$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshStatistics$',  function () {
var model=this.dataTable.getModel$();
var data=this.dataTable.getSelectedColumns$();
var selcols=C$.getBS$IA(data);
data=this.dataTable.getSelectedRows$();
var nselrows=data.length;
var nrows=model.getRowCount$();
var ncols=model.getColumnCount$();
this.statsData=Clazz.array(java.lang.Object, [ncols, 0]);
this.statsData[0]=p$1.getStatLabels.apply(this, []);
for (var j=1; j < ncols; j++) {
var selected=null;
if (nselrows > 0) {
if (selcols.get$I(this.dataTable.convertColumnIndexToView$I(j))) {
selected=Clazz.array(Double.TYPE, [nselrows]);
for (var i=0; i < nselrows; i++) {
var d=model.getValueAt$I$I(data[i], j);
selected[i]=(d == null  ? NaN : d.doubleValue$());
}
}}if (selected == null ) {
selected=Clazz.array(Double.TYPE, [nrows]);
for (var i=0; i < nrows; i++) {
var d=model.getValueAt$I$I(i, j);
selected[i]=(d == null  ? NaN : d.doubleValue$());
}
}this.statsData[j]=p$1.getStatistics$DA.apply(this, [selected]);
}
this.refreshTable$();
});

Clazz.newMeth(C$, 'getBS$IA',  function (selectedRows) {
var bs=Clazz.new_($I$(10,1));
for (var i=0; i < selectedRows.length; i++) bs.set$I(selectedRows[i]);

return bs;
}, 1);

Clazz.newMeth(C$, 'refreshCellWidths$',  function () {
if (this.getColumnCount$() != this.dataTable.getColumnCount$()) {
return;
}for (var i=0; i < this.getColumnCount$(); i++) {
var propColumn=this.getColumnModel$().getColumn$I(i);
var dataColumn=this.dataTable.getColumnModel$().getColumn$I(i);
propColumn.setMaxWidth$I(dataColumn.getWidth$());
propColumn.setMinWidth$I(dataColumn.getWidth$());
propColumn.setWidth$I(dataColumn.getWidth$());
}
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.numberRenderer.format.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(11).getDecimalFormatSymbols$());
this.refreshStatistics$();
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var i=this.dataTable.convertColumnIndexToModel$I(column);
if (i == 0) {
return this.labelRenderer;
}return this.numberRenderer;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.numberRenderer != null ) {
this.numberRenderer.$font=font;
}this.setRowHeight$I(font.getSize$() + 4);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolStatsTable, "StatsTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return this.b$['org.opensourcephysics.tools.DataToolStatsTable'].dataTable.getColumnName$I(col);
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolStatsTable'].statsData[0].length;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolStatsTable'].dataTable.getModel$().getColumnCount$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
var i=this.b$['org.opensourcephysics.tools.DataToolStatsTable'].dataTable.convertColumnIndexToModel$I(col);
return this.b$['org.opensourcephysics.tools.DataToolStatsTable'].statsData[i][row];
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
return false;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolStatsTable, "NumberRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.format=$I$(1).getInstance$();
},1);

C$.$fields$=[['O',['format','java.text.DecimalFormat','$font','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$I',  function (sigfigs) {
Clazz.super_(C$, this);
sigfigs=Math.min(sigfigs, 6);
if (Clazz.instanceOf(this.format, "java.text.DecimalFormat")) {
var pattern="0.0";
for (var i=0; i < sigfigs - 1; i++) {
pattern+="0";
}
pattern+="E0";
this.format.applyPattern$S(pattern);
}}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
if (this.$font == null ) {
this.$font=this.b$['javax.swing.JTable'].getDefaultRenderer$Class.apply(this.b$['javax.swing.JTable'], [Clazz.getClass(String)]).getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.b$['org.opensourcephysics.tools.DataToolStatsTable'], "", false, false, 0, 0).getFont$();
}this.setFont$java_awt_Font(this.$font);
this.setHorizontalAlignment$I(11);
this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(3,1).c$$I$I$I,[240, 240, 240])],$I$(2,1).c$$java_awt_Color));
if (Clazz.instanceOf(value, "java.lang.Integer")) {
this.setText$S(String.valueOf$O(value));
} else {
this.setText$S(this.format.format$O(value));
}return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
