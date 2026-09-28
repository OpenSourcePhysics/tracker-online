(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.CellBorder','java.awt.Color','javax.swing.BorderFactory','org.opensourcephysics.display.DataRowTable','javax.swing.table.TableColumn','javax.swing.UIManager','org.opensourcephysics.display.DataRowModel',['org.opensourcephysics.display.DataRowTable','.RowNumberRenderer'],['org.opensourcephysics.display.DataRowTable','.CellRenderer'],'org.opensourcephysics.numerics.Util','javax.swing.Timer','java.util.Hashtable',['org.opensourcephysics.display.DataRowTable','.DataTableColumnModel'],['org.opensourcephysics.display.DataRowTable','.HeaderRenderer']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataRowTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable', 'java.awt.event.ActionListener');
C$.$classes$=[['CellRenderer',2],['HeaderRenderer',2],['RowNumberRenderer',10],['DataTableColumnModel',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.labelColumnWidth=40;
this.$rowModel=Clazz.new_($I$(7,1));
this.indexRenderer=Clazz.new_($I$(8,1));
this.cellRenderer=Clazz.new_($I$(9,1),[this, null]);
this.formatPattern="0.000";
this.defaultFormat=$I$(10).newDecimalFormat$S(this.formatPattern);
this.refreshDelay=0;
this.refreshTimer=Clazz.new_($I$(11,1).c$$I$java_awt_event_ActionListener,[this.refreshDelay, this]);
this.formats=Clazz.new_($I$(12,1));
},1);

C$.$fields$=[['I',['labelColumnWidth','refreshDelay'],'S',['formatPattern'],'O',['$rowModel','org.opensourcephysics.display.DataRowModel','indexRenderer','org.opensourcephysics.display.DataRowTable.RowNumberRenderer','cellRenderer','org.opensourcephysics.display.DataRowTable.CellRenderer','defaultFormat','java.text.DecimalFormat','refreshTimer','javax.swing.Timer','formats','java.util.Dictionary']]
,['O',['PANEL_BACKGROUND','java.awt.Color','+LIGHT_BLUE']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.refreshTimer.setRepeats$Z(false);
this.refreshTimer.setCoalesce$Z(true);
this.setModel$javax_swing_table_TableModel(this.$rowModel);
this.setColumnSelectionAllowed$Z(true);
this.setGridColor$java_awt_Color($I$(2).blue);
this.setSelectionBackground$java_awt_Color(C$.LIGHT_BLUE);
this.setSelectionForeground$java_awt_Color($I$(2).red);
this.setColumnModel$javax_swing_table_TableColumnModel(Clazz.new_($I$(13,1),[this, null]));
this.setSelectionMode$I(1);
this.setColumnSelectionAllowed$Z(true);
this.$rowModel.addTableModelListener$javax_swing_event_TableModelListener(((P$.DataRowTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataRowTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataRowTable'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.DataRowTable'], ["cell", null, e]);
});
})()
), Clazz.new_(P$.DataRowTable$1.$init$,[this, null])));
this.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(java.lang.Object), this.cellRenderer);
this.getTableHeader$().setForeground$java_awt_Color($I$(2).blue);
this.getTableHeader$().setReorderingAllowed$Z(true);
this.getTableHeader$().setDefaultRenderer$javax_swing_table_TableCellRenderer(Clazz.new_($I$(14,1),[this, null]));
this.setAutoResizeMode$I(0);
var width=24;
var name;
var column;
if (this.getColumnCount$() > 0) {
name=this.getColumnName$I(0);
column=this.getColumn$O(name);
column.setMinWidth$I(width);
column.setMaxWidth$I(2 * width);
column.setWidth$I(width);
}width=60;
for (var i=1, n=this.getColumnCount$(); i < n; i++) {
name=this.getColumnName$I(i);
column=this.getColumn$O(name);
column.setMinWidth$I(width);
column.setMaxWidth$I(3 * width);
column.setWidth$I(width);
}
});

Clazz.newMeth(C$, 'setRefreshDelay$I',  function (delay) {
if (delay > 0) {
this.refreshTimer.setDelay$I(delay);
this.refreshTimer.setInitialDelay$I(delay);
} else if (delay <= 0) {
this.refreshTimer.stop$();
}this.refreshDelay=delay;
});

Clazz.newMeth(C$, 'clearFormats$',  function () {
this.formats=Clazz.new_($I$(12,1));
});

Clazz.newMeth(C$, 'setNumericFormat$S',  function (str) {
if ((str != null ) && !str.equals$O(this.formatPattern) ) {
this.formatPattern=str;
this.defaultFormat=$I$(10).newDecimalFormat$S(str);
this.refreshTable$S("setNumericFormat " + str);
}});

Clazz.newMeth(C$, 'setColumnFormat$I$S',  function (column, format) {
var f=$I$(10).newDecimalFormat$S(format);
var val=this.formats.get$O(Integer.valueOf$I(column));
if ((val != null ) && val.equals$O(f) ) {
return;
}this.formats.put$O$O(Integer.valueOf$I(column), f);
this.refreshTable$S("columnFormat");
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.$rowModel.rowList.clear$();
this.$rowModel.colCount=0;
this.refreshTable$S("clearData");
});

Clazz.newMeth(C$, 'clear$',  function () {
this.$rowModel.rowList.clear$();
this.$rowModel.colNames.clear$();
this.$rowModel.colCount=0;
this.formats=Clazz.new_($I$(12,1));
this.refreshTable$S("clear");
});

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
stride=Math.max(1, stride);
if (this.$rowModel.stride == stride) {
return;
}this.$rowModel.setStride$I(stride);
this.refreshTable$S("setStride");
});

Clazz.newMeth(C$, 'refreshTable$S',  function (type) {
this.$rowModel.refreshModel$org_opensourcephysics_display_DataRowTable$S(this, type);
});

Clazz.newMeth(C$, 'getCellRendererOrNull$I$I$Z',  function (row, column, isScrolling) {
return (isScrolling ? null : this.$rowModel.mustPaint$I$I(row, column) ? this.getCellRenderer$I$I(row, column) : null);
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var i=this.convertColumnIndexToModel$I(column);
if ((i == 0) && this.$rowModel.rowNumberVisible ) {
return this.indexRenderer;
}return this.cellRenderer;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
});

Clazz.newMeth(C$, 'scrollToEnd$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.PANEL_BACKGROUND=$I$(6).getColor$O("Panel.background");
C$.LIGHT_BLUE=Clazz.new_($I$(2,1).c$$I$I$I,[204, 204, 255]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataRowTable, "CellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(4);
this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(2,1).c$$I$I$I,[224, 224, 224])],$I$(1,1).c$$java_awt_Color));
this.setBackground$java_awt_Color($I$(2).WHITE);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
C$.superclazz.prototype.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I.apply(this, [table, value, isSelected, hasFocus, row, column]);
if (!this.b$['org.opensourcephysics.display.DataRowTable'].$rowModel.rowNumberVisible) {
++column;
}var f=this.b$['org.opensourcephysics.display.DataRowTable'].formats.get$O(Integer.valueOf$I(column));
if (f == null ) {
f=this.b$['org.opensourcephysics.display.DataRowTable'].defaultFormat;
}if (value == null ) {
this.setText$S("");
} else if (Clazz.instanceOf(value, "java.lang.String")) {
this.setText$S(value);
} else if (f == null ) {
this.setText$S(value.toString());
} else if (Clazz.instanceOf(value, "java.lang.Double") && Double.isNaN$D((value).doubleValue$()) ) {
this.setText$S("");
} else {
try {
this.setText$S(f.format$O(value));
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
this.setText$S(value.toString());
} else {
throw ex;
}
}
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataRowTable, "HeaderRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataRowTable','.RowNumberRenderer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(0);
this.setForeground$java_awt_Color($I$(2).BLUE);
this.setBorder$javax_swing_border_Border($I$(3,"createLineBorder$java_awt_Color",[Clazz.new_($I$(2,1).c$$I$I$I,[224, 224, 224])]));
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataRowTable, "RowNumberRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(4);
this.setOpaque$Z(true);
this.setForeground$java_awt_Color($I$(2).BLACK);
this.setBackground$java_awt_Color($I$(4).PANEL_BACKGROUND);
this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(2,1).c$$I$I$I,[224, 224, 224])],$I$(1,1).c$$java_awt_Color));
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
if (table.isRowSelected$I(row)) {
var i=table.getSelectedColumns$();
if ((i.length == 1) && (table.convertColumnIndexToModel$I(i[0]) == 0) ) {
this.setBackground$java_awt_Color($I$(4).PANEL_BACKGROUND);
} else {
this.setBackground$java_awt_Color($I$(2).gray);
}} else {
this.setBackground$java_awt_Color($I$(4).PANEL_BACKGROUND);
}if (value == null ) {
this.setText$S("???");
} else {
this.setText$S(value.toString());
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataRowTable, "DataTableColumnModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableColumnModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumn$I',  function (columnIndex) {
var tableColumn;
try {
tableColumn=C$.superclazz.prototype.getColumn$I.apply(this, [columnIndex]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return Clazz.new_($I$(5,1).c$$I,[0]);
} else {
throw ex;
}
}
var headerValue=tableColumn.getHeaderValue$();
if (headerValue == null ) {
return tableColumn;
} else if (headerValue.equals$O("row")) {
tableColumn.setMaxWidth$I(this.b$['org.opensourcephysics.display.DataRowTable'].labelColumnWidth);
tableColumn.setMinWidth$I(this.b$['org.opensourcephysics.display.DataRowTable'].labelColumnWidth);
tableColumn.setResizable$Z(true);
}return tableColumn;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
