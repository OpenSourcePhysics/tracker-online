(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Color','org.opensourcephysics.display2d.GridDataTable','javax.swing.UIManager','javax.swing.Timer',['org.opensourcephysics.display2d.GridDataTable','.RowNumberRenderer'],'org.opensourcephysics.display2d.GridTableModel','javax.swing.event.TableModelEvent','javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridDataTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable', 'java.awt.event.ActionListener');
C$.$classes$=[['RowNumberRenderer',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.refreshDelay=0;
this.refreshTimer=Clazz.new_($I$(4,1).c$$I$java_awt_event_ActionListener,[this.refreshDelay, this]);
this.rowNumberRenderer=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['I',['refreshDelay'],'O',['refreshTimer','javax.swing.Timer','tableModel','org.opensourcephysics.display2d.GridTableModel','rowNumberRenderer','org.opensourcephysics.display2d.GridDataTable.RowNumberRenderer']]
,['O',['PANEL_BACKGROUND','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData$I',  function (griddata, component) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.refreshTimer.setRepeats$Z(false);
this.refreshTimer.setCoalesce$Z(true);
this.tableModel=Clazz.new_($I$(6,1).c$$org_opensourcephysics_display2d_GridData$I,[griddata, component]);
this.setModel$javax_swing_table_TableModel(this.tableModel);
this.setAutoResizeMode$I(0);
var name=this.getColumnName$I(0);
var column=this.getColumn$O(name);
var width=20;
column.setMinWidth$I(width);
column.setResizable$Z(true);
column.setWidth$I(width);
width=60;
for (var i=1, n=this.getColumnCount$(); i < n; i++) {
name=this.getColumnName$I(i);
column=this.getColumn$O(name);
column.setMinWidth$I(width);
column.setWidth$I(width);
column.setResizable$Z(true);
}
this.sizeColumnsToFit$I(0);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.tableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(7,1).c$$javax_swing_table_TableModel$I,[this.tableModel, -1]));
});

Clazz.newMeth(C$, 'refreshTable$',  function () {
if (this.refreshDelay > 0) {
this.refreshTimer.start$();
} else {
$I$(8,"invokeLater$Runnable",[((P$.GridDataTable$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "GridDataTable$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['javax.swing.JTable'].tableChanged$javax_swing_event_TableModelEvent.apply(this.b$['javax.swing.JTable'], [Clazz.new_($I$(7,1).c$$javax_swing_table_TableModel$I,[this.b$['org.opensourcephysics.display2d.GridDataTable'].tableModel, -1])]);
});
})()
), Clazz.new_(P$.GridDataTable$lambda1.$init$,[this, null]))]);
}});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var i=this.convertColumnIndexToModel$I(column);
if (i == 0) {
return this.rowNumberRenderer;
}return this.getDefaultRenderer$Class(this.getColumnClass$I(column));
});

C$.$static$=function(){C$.$static$=0;
C$.PANEL_BACKGROUND=$I$(3).getColor$O("Panel.background");
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.GridDataTable, "RowNumberRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(4);
this.setOpaque$Z(true);
this.setForeground$java_awt_Color($I$(1).BLACK);
this.setBackground$java_awt_Color($I$(2).PANEL_BACKGROUND);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
if (column == 0) {
this.setBackground$java_awt_Color($I$(2).PANEL_BACKGROUND);
}this.setText$S(value.toString());
return this;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
