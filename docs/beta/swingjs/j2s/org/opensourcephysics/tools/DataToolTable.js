(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.display.DrawingPanel','org.opensourcephysics.display.DrawableTextLine','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.TeXParser','javax.swing.UIManager','org.opensourcephysics.tools.DataToolTable','javax.swing.BorderFactory','java.awt.Color','java.awt.BasicStroke',['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Ellipse2D','.Double'],'org.opensourcephysics.display.DataTable','java.util.HashMap',['org.opensourcephysics.tools.DataToolTable','.TableEdit'],'javax.swing.JTextField','java.awt.event.KeyAdapter','javax.swing.SwingUtilities','java.awt.event.FocusAdapter','java.awt.event.MouseAdapter','org.opensourcephysics.display.HighlightableDataset',['org.opensourcephysics.tools.DataToolTable','.LabelRenderer'],['org.opensourcephysics.tools.DataToolTable','.DataCellRenderer'],['org.opensourcephysics.tools.DataToolTable','.DataEditor'],'java.awt.Rectangle','javax.swing.JPopupMenu',['org.opensourcephysics.tools.DataToolTable','.DataToolTableModel'],['org.opensourcephysics.tools.DataToolTable','.HeaderRenderer'],'javax.swing.AbstractAction','javax.swing.JOptionPane','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.DataTool','javax.swing.event.MouseInputAdapter','java.awt.Toolkit','javax.swing.KeyStroke','javax.swing.JMenuItem','javax.swing.JMenu','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.tools.FontSizer',['org.opensourcephysics.tools.DataToolTable','.WorkingDataset'],'java.util.BitSet','java.util.ArrayList','javax.swing.event.TableModelEvent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataToolTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.DataTable');
C$.$classes$=[['HeaderRenderer',0],['WorkingDataset',0],['DataCellRenderer',0],['LabelRenderer',0],['DataToolTableModel',4],['DataEditor',0],['TableEdit',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.workingMap=Clazz.new_($I$(13,1));
this.selectedData=Clazz.new_($I$(20,1));
this.labelRenderer=Clazz.new_($I$(21,1),[this, null]);
this.dataRenderer=Clazz.new_($I$(22,1),[this, null]);
this.editor=Clazz.new_($I$(23,1),[this, null]);
this.leadCol=0;
this.leadRow=0;
this.pasteValues=Clazz.new_($I$(13,1));
this.pasteData=null;
this.workingRowToModelRow=Clazz.new_($I$(13,1));
this.rect=Clazz.new_($I$(24,1));
this.clearing=false;
},1);

C$.$fields$=[['Z',['clearing'],'I',['focusRow','focusCol','mouseRow','mouseCol','leadCol','leadRow','prevSortedColumn','pasteW','pasteH'],'O',['dataToolTab','org.opensourcephysics.tools.DataToolTab','dataManager','org.opensourcephysics.display.DatasetManager','workingData','org.opensourcephysics.tools.DataToolTable.WorkingDataset','workingMap','java.util.HashMap','selectedData','org.opensourcephysics.display.HighlightableDataset','headerRenderer','org.opensourcephysics.tools.DataToolTable.HeaderRenderer','labelRenderer','org.opensourcephysics.tools.DataToolTable.LabelRenderer','dataRenderer','org.opensourcephysics.tools.DataToolTable.DataCellRenderer','editor','org.opensourcephysics.tools.DataToolTable.DataEditor','popup','javax.swing.JPopupMenu','renameColumnItem','javax.swing.JMenuItem','+copyColumnsItem','+cutColumnsItem','+pasteColumnsItem','+cloneColumnsItem','+numberFormatItem','+insertRowItem','+pasteRowsItem','+copyRowsItem','+cutRowsItem','+insertCellsItem','+deleteCellsItem','copyCellsMenu','javax.swing.JMenu','+setDelimiterMenu','copyCellsAsFormattedItem','javax.swing.JMenuItem','+copyCellsRawItem','+cutCellsItem','+pasteInsertCellsItem','+pasteCellsItem','+addEndRowItem','+trimRowsItem','+selectAllItem','+selectNoneItem','+clearContentsItem','clearCellsAction','javax.swing.Action','+pasteCellsAction','+pasteInsertCellsAction','+cantPasteCellsAction','+cantPasteRowsAction','+getPasteDataAction','tableMouseListener','java.awt.event.MouseAdapter','selectedBG','java.awt.Color','+selectedFG','+unselectedBG','+selectedHeaderFG','+selectedHeaderBG','+rowBG','pasteValues','java.util.HashMap','pasteData','org.opensourcephysics.display.DatasetManager','workingRowToModelRow','java.util.HashMap','rect','java.awt.Rectangle']]
,['O',['editTypes','String[]','xAxisColor','java.awt.Color','+yAxisColor']]]

Clazz.newMeth(C$, 'getPopup$',  function () {
return (this.popup == null  ? (this.popup=Clazz.new_($I$(25,1))) : this.popup);
});

Clazz.newMeth(C$, 'createTableModel$',  function () {
return Clazz.new_($I$(26,1),[this, null]);
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DataToolTab',  function (tab) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.init$();
(this.getModel$()).tab=tab;
this.dataToolTab=tab;
this.dataManager=tab.dataManager;
this.add$javax_swing_table_TableModel(this.dataManager.model);
this.setRowNumberVisible$Z(true);
this.setSelectionMode$I(2);
this.headerRenderer=Clazz.new_([this, null, this.getTableHeader$().getDefaultRenderer$()],$I$(27,1).c$$javax_swing_table_TableCellRenderer);
this.getTableHeader$().setDefaultRenderer$javax_swing_table_TableCellRenderer(this.headerRenderer);
var selectionModel=this.getSelectionModel$();
selectionModel.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.DataToolTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (e.getFirstIndex$() == -1) {
return;
}if (!e.getValueIsAdjusting$()) {
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
this.b$['org.opensourcephysics.display.DataTable'].addColumnSelectionInterval$I$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [labelCol, labelCol]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.setSelectedData$org_opensourcephysics_display_Dataset$Z(this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedData$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []), true);
}});
})()
), Clazz.new_(P$.DataToolTable$1.$init$,[this, null])));
selectionModel=this.getTableHeader$().getColumnModel$().getSelectionModel$();
selectionModel.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.DataToolTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (e.getValueIsAdjusting$()) return;
this.b$['javax.swing.JTable'].getTableHeader$.apply(this.b$['javax.swing.JTable'], []).repaint$();
});
})()
), Clazz.new_(P$.DataToolTable$2.$init$,[this, null])));
p$1.installActions.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'installActions',  function () {
this.clearCellsAction=((P$.DataToolTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.isUserEditable$()) return;
var values=Clazz.new_($I$(13,1));
var it=this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedColumnNames$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []).iterator$();
while (it.hasNext$()){
values.put$O$O(it.next$(), null);
}
var rows=this.b$['org.opensourcephysics.display.DataTable'].getSelectedModelRows$.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
var prev=this.b$['org.opensourcephysics.tools.DataToolTable'].replaceCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
var edit=Clazz.new_([this, null, 5, null, rows, Clazz.array($I$(13), -1, [prev, values])],$I$(14,1).c$$I$S$O$O);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$3));
this.pasteCellsAction=((P$.DataToolTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rows=this.b$['org.opensourcephysics.display.DataTable'].getSelectedModelRows$.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
if (!this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues.isEmpty$() && ((rows.length == 1) || (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH == rows.length) ) ) {
var pasteRows=Clazz.array(Integer.TYPE, [this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH]);
if (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH == rows.length) {
pasteRows=rows;
} else {
pasteRows[0]=rows[0];
var vRow=this.b$['org.opensourcephysics.display.DataTable'].getViewRow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [rows[0]]);
for (var i=1; i < this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH; i++) {
while (vRow + i >= this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])){
var row=Clazz.array(Integer.TYPE, -1, [this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])]);
this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [row, null]);
}
pasteRows[i]=this.b$['org.opensourcephysics.display.DataTable'].getModelRow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [vRow + i]);
}
}var prev=this.b$['org.opensourcephysics.tools.DataToolTable'].replaceCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [pasteRows, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues]);
var edit=Clazz.new_([this, null, 5, null, pasteRows, Clazz.array($I$(13), -1, [prev, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues])],$I$(14,1).c$$I$S$O$O);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
} else {
this.b$['org.opensourcephysics.tools.DataToolTable'].cantPasteCellsAction.actionPerformed$java_awt_event_ActionEvent(e);
}});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$4));
this.pasteInsertCellsAction=((P$.DataToolTable$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rows=this.b$['org.opensourcephysics.display.DataTable'].getSelectedModelRows$.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
if (!this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues.isEmpty$() && ((rows.length == 1) || (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH == rows.length) ) ) {
var pasteRows=Clazz.array(Integer.TYPE, [this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH]);
if (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH == rows.length) {
pasteRows=rows;
} else {
pasteRows[0]=rows[0];
var vRow=this.b$['org.opensourcephysics.display.DataTable'].getViewRow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [rows[0]]);
for (var i=1; i < this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH; i++) {
while (vRow + i >= this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])){
var row=Clazz.array(Integer.TYPE, -1, [this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])]);
this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [row, null]);
}
pasteRows[i]=this.b$['org.opensourcephysics.display.DataTable'].getModelRow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [vRow + i]);
}
}this.b$['org.opensourcephysics.tools.DataToolTable'].insertCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [pasteRows, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 3, null, pasteRows, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
} else {
this.b$['org.opensourcephysics.tools.DataToolTable'].cantPasteCellsAction.actionPerformed$java_awt_event_ActionEvent(e);
}});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$5));
this.cantPasteCellsAction=((P$.DataToolTable$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(29,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab, $I$(30).getString$S("DataToolTable.Dialog.CantPasteCells.Message1") + " " + this.b$['org.opensourcephysics.tools.DataToolTable'].pasteW + " x " + this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH + "\n" + $I$(30).getString$S("DataToolTable.Dialog.CantPasteCells.Message2") , $I$(30).getString$S("DataToolTable.Dialog.CantPaste.Title"), 2]);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$6));
this.cantPasteRowsAction=((P$.DataToolTable$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(29,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab, $I$(30).getString$S("DataToolTable.Dialog.CantPasteRows.Message1") + " " + this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH + "\n" + $I$(30).getString$S("DataToolTable.Dialog.CantPasteRows.Message2") , $I$(30).getString$S("DataToolTable.Dialog.CantPaste.Title"), 2]);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$7));
this.getPasteDataAction=((P$.DataToolTable$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues.clear$();
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData=null;
$I$(3,"paste$java_util_function_Consumer",[((P$.DataToolTable$8$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTable$8$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (dataString) /*block*/{
if (dataString != null ) {
var colNames=this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedColumnNames$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
var temp=$I$(31).parseData$S$S(dataString, null);
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData=temp == null  ? null : temp[0];
if (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData != null ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteW=this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData.getDatasetsRaw$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData, []).size$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData.getDatasetsRaw$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData, []), []);
if ((this.b$['org.opensourcephysics.tools.DataToolTable'].pasteW > 0) && (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteW == colNames.size$.apply(colNames, [])) ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH=this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData.getDataset$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData, [0]).getIndex$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData.getDataset$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData, [0]), []);
if (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH > 0) {
for (var i=0; i < this.b$['org.opensourcephysics.tools.DataToolTable'].pasteW; i++) {
var vals=this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData.getDataset$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData, [i]).getYPoints$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData.getDataset$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteData, [i]), []);
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues.put$O$O.apply(this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues, [colNames.get$I.apply(colNames, [i]), vals]);
}
}}}}});
})()
), Clazz.new_(P$.DataToolTable$8$lambda1.$init$,[this, null]))]);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$8));
this.getTableHeader$().addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DataToolTable$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var n=this.b$['javax.swing.JTable'].getTableHeader$.apply(this.b$['javax.swing.JTable'], []).columnAtPoint$java_awt_Point(e.getPoint$());
n=this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [n]);
if (n == 0) {
this.b$['javax.swing.JTable'].getTableHeader$.apply(this.b$['javax.swing.JTable'], []).setToolTipText$S($I$(30).getString$S("DataToolTable.Header.Deselect.Tooltip"));
} else {
this.b$['javax.swing.JTable'].getTableHeader$.apply(this.b$['javax.swing.JTable'], []).setToolTipText$S($I$(30).getString$S("DataToolTable.Header.Tooltip"));
}});
})()
), Clazz.new_($I$(32,1),[this, null],P$.DataToolTable$9)));
this.getTableHeader$().addMouseListener$java_awt_event_MouseListener(((P$.DataToolTable$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].doHeaderMouseClicked$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [e]);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.DataToolTable$10)));
this.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DataToolTable$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTable'].popup == null  || !this.b$['org.opensourcephysics.tools.DataToolTable'].popup.isVisible$() ) {
var row=this.b$['javax.swing.JTable'].rowAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var col=this.b$['javax.swing.JTable'].columnAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
this.b$['org.opensourcephysics.tools.DataToolTable'].mouseRow=row;
this.b$['org.opensourcephysics.tools.DataToolTable'].mouseCol=col;
this.b$['org.opensourcephysics.tools.DataToolTable'].dataRenderer.showFocus=(col == labelCol);
this.b$['org.opensourcephysics.tools.DataToolTable'].dorepaint$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [2]);
if (col == labelCol) {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataRenderer.showFocus=true;
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [$I$(30).getString$S("DataToolTable.Deselect.Tooltip")]);
} else {
var obj=this.b$['javax.swing.JTable'].getValueAt$I$I.apply(this.b$['javax.swing.JTable'], [row, col]);
var name=this.b$['javax.swing.JTable'].getColumnName$I.apply(this.b$['javax.swing.JTable'], [col]);
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [name + " = " + obj ]);
$I$(12).defaultDoubleRenderer.setToolTipText$S(name + " = " + obj );
}}this.b$['javax.swing.JComponent'].requestFocusInWindow$.apply(this.b$['javax.swing.JComponent'], []);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
var col=this.b$['javax.swing.JTable'].columnAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var row=this.b$['javax.swing.JTable'].rowAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
if (this.b$['org.opensourcephysics.tools.DataToolTable'].mouseRow == row && this.b$['org.opensourcephysics.tools.DataToolTable'].mouseCol == col ) return;
this.b$['org.opensourcephysics.tools.DataToolTable'].mouseRow=row;
this.b$['org.opensourcephysics.tools.DataToolTable'].mouseCol=col;
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
if (col == labelCol) {
if (this.b$['org.opensourcephysics.tools.DataToolTable'].leadRow < this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])) {
this.b$['javax.swing.JTable'].setRowSelectionInterval$I$I.apply(this.b$['javax.swing.JTable'], [this.b$['org.opensourcephysics.tools.DataToolTable'].leadRow, row]);
}this.b$['javax.swing.JTable'].setColumnSelectionInterval$I$I.apply(this.b$['javax.swing.JTable'], [this.b$['javax.swing.JTable'].getColumnCount$.apply(this.b$['javax.swing.JTable'], []) - 1, 0]);
}this.b$['org.opensourcephysics.tools.DataToolTable'].dataRenderer.showFocus=false;
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.setSelectedData$org_opensourcephysics_display_Dataset$Z(this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedData$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []), false);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.refreshFit$();
});
})()
), Clazz.new_($I$(32,1),[this, null],P$.DataToolTable$11)));
this.tableMouseListener=((P$.DataToolTable$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTable'].popup == null  || !this.b$['org.opensourcephysics.tools.DataToolTable'].popup.isVisible$() ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].mouseRow=-1;
this.b$['org.opensourcephysics.tools.DataToolTable'].dataRenderer.showFocus=true;
this.b$['org.opensourcephysics.tools.DataToolTable'].dorepaint$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [1]);
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].doTableMousePressed$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [e]);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.DataToolTable$12));
this.addMouseListener$java_awt_event_MouseListener(this.tableMouseListener);
var im=this.getInputMap$I(1);
var am=this.getActionMap$();
var mask=$I$(33).getDefaultToolkit$().getMenuShortcutKeyMask$();
var enter=$I$(34).getKeyStroke$I$I(10, 0);
$I$(3,"setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action",[im, enter, "enter", am, ((P$.DataToolTable$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].editor.editAction$java_util_EventObject$Z(e, false);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$13))]);
var copy=$I$(34).getKeyStroke$I$I(67, mask);
$I$(3,"setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action",[im, copy, "copy", am, ((P$.DataToolTable$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.copyTableDataToClipboard$Z(true);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$14))]);
var paste=$I$(34).getKeyStroke$I$I(86, mask);
$I$(3,"setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action",[im, paste, "paste", this.getActionMap$(), ((P$.DataToolTable$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].getPasteDataAction.actionPerformed$java_awt_event_ActionEvent(e);
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteCellsAction.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.DataToolTable$15))]);
var $delete=$I$(34).getKeyStroke$I$I(127, 0);
$I$(3,"setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action",[im, $delete, "delete", this.getActionMap$(), this.clearCellsAction]);
}, p$1);

Clazz.newMeth(C$, 'updateRowSelection$I$Z',  function (firstIndex, isAdjusting) {
if (firstIndex == -1) {
return;
}this.dataTableModel.setSelectedRowsFromJTable$();
if (!isAdjusting) {
var labelCol=this.convertColumnIndexToView$I(0);
this.addColumnSelectionInterval$I$I(labelCol, labelCol);
this.dataToolTab.setSelectedData$org_opensourcephysics_display_Dataset$Z(this.getSelectedData$(), true);
}});

Clazz.newMeth(C$, 'doTableMousePressed$java_awt_event_MouseEvent',  function (e) {
var col=this.columnAtPoint$java_awt_Point(e.getPoint$());
var row=this.rowAtPoint$java_awt_Point(e.getPoint$());
var labelCol=this.convertColumnIndexToView$I(0);
if ($I$(3).isPopupTrigger$java_awt_event_InputEvent(e)) {
p$1.getTablePopup$I$I$I.apply(this, [row, col, labelCol]);
this.popup.show$java_awt_Component$I$I(this, e.getX$(), e.getY$() + 8);
return;
}this.dataRenderer.showFocus=true;
if (col == labelCol) {
if (e.getClickCount$() == 2) {
this.leadRow=row;
this.setRowSelectionInterval$I$I(row, row);
this.setColumnSelectionInterval$I$I(0, this.getColumnCount$() - 1);
} else if (e.isShiftDown$() && (this.leadRow < this.getRowCount$()) ) {
this.setRowSelectionInterval$I$I(this.leadRow, row);
this.setColumnSelectionInterval$I$I(0, this.getColumnCount$() - 1);
} else if (e.isControlDown$() || e.isShiftDown$() ) {
} else {
this.leadRow=row;
this.leadCol=1;
}} else if (!e.isControlDown$() && !e.isShiftDown$() ) {
this.leadRow=row;
this.leadCol=col;
}this.addColumnSelectionInterval$I$I(labelCol, labelCol);
this.dataTableModel.setColumnSelectionFromJTable$();
this.getSelectedData$();
this.dataToolTab.plot.repaint$();
});

Clazz.newMeth(C$, 'getTablePopup$I$I$I',  function (row, col, labelCol) {
this.getPopup$();
this.editor.stopCellEditing$();
if (col == labelCol) {
if (!this.isRowSelected$I(row)) {
this.setRowSelectionInterval$I$I(row, row);
}this.setColumnSelectionInterval$I$I(0, this.getColumnCount$() - 1);
} else if (!this.isCellSelected$I$I(row, col)) {
this.setRowSelectionInterval$I$I(row, row);
this.setColumnSelectionInterval$I$I(col, col);
this.leadCol=col;
this.leadRow=row;
}this.dorepaint$I(3);
if (!$I$(3).isJS) {
this.getPasteDataAction.actionPerformed$java_awt_event_ActionEvent(null);
}var rows=this.getSelectedModelRows$();
var isEmptyCells=true;
var selectedRows=this.getSelectedRows$();
var selectedColumns=this.getSelectedColumnNames$();
for (var i=0; i < selectedRows.length; i++) {
if (!this.isEmptyCells$I$java_util_ArrayList(selectedRows[i], selectedColumns)) {
isEmptyCells=false;
break;
}}
this.popup.removeAll$();
var text;
if (col != labelCol) {
var index=this.convertColumnIndexToModel$I(col) - 1;
var data=this.dataManager.getDataset$I(index);
this.mouseRow=row;
this.mouseCol=col;
this.dorepaint$I(4);
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.SelectAll");
this.selectAllItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.selectAllItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].selectAllCells$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$16.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.selectAllItem);
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.SelectNone");
this.selectNoneItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.selectNoneItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].clearSelection$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$17.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.selectNoneItem);
if (this.dataToolTab.isUserEditable$() && !(Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction")) ) {
this.popup.addSeparator$();
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.InsertCells");
this.insertCellsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.insertCellsItem.setActionCommand$S(String.valueOf$I(col));
this.insertCellsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var emptyRow=Clazz.new_($I$(13,1));
var it=this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedColumnNames$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []).iterator$();
while (it.hasNext$()){
emptyRow.put$O$O(it.next$(), null);
}
this.b$['org.opensourcephysics.tools.DataToolTable'].insertCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.$finals$.rows, emptyRow]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 3, null, this.$finals$.rows, emptyRow]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$18.$init$,[this, {rows:rows}])));
this.popup.add$javax_swing_JMenuItem(this.insertCellsItem);
if (this.pasteData != null ) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.PasteInsertCells");
this.pasteInsertCellsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.pasteInsertCellsItem.setActionCommand$S(String.valueOf$I(col));
this.pasteInsertCellsItem.addActionListener$java_awt_event_ActionListener(this.pasteInsertCellsAction);
this.popup.add$javax_swing_JMenuItem(this.pasteInsertCellsItem);
}text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.DeleteCells");
this.deleteCellsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.deleteCellsItem.setActionCommand$S(String.valueOf$I(col));
this.deleteCellsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var it=this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedColumnNames$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []).iterator$();
while (it.hasNext$()){
this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues.put$O$O(it.next$(), null);
}
var prev=this.b$['org.opensourcephysics.tools.DataToolTable'].deleteCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.$finals$.rows, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 4, null, this.$finals$.rows, prev]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$19.$init$,[this, {rows:rows}])));
this.popup.add$javax_swing_JMenuItem(this.deleteCellsItem);
}if (!isEmptyCells || (this.pasteData != null ) ) {
if (this.popup.getComponentCount$() > 0 && !this.dataToolTab.originShiftEnabled ) {
this.popup.addSeparator$();
}if (!isEmptyCells) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CopyCells");
this.copyCellsMenu=Clazz.new_($I$(36,1).c$$S,[text]);
this.popup.add$javax_swing_JMenuItem(this.copyCellsMenu);
this.copyCellsAsFormattedItem=Clazz.new_([$I$(30).getString$S("DataTool.MenuItem.Formatted")],$I$(35,1).c$$S);
this.copyCellsAsFormattedItem.setActionCommand$S(String.valueOf$I(col));
this.copyCellsAsFormattedItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.copyTableDataToClipboard$Z(true);
});
})()
), Clazz.new_(P$.DataToolTable$20.$init$,[this, null])));
this.copyCellsMenu.add$javax_swing_JMenuItem(this.copyCellsAsFormattedItem);
this.copyCellsRawItem=Clazz.new_([$I$(30).getString$S("DataTool.MenuItem.Unformatted")],$I$(35,1).c$$S);
this.copyCellsRawItem.setActionCommand$S(String.valueOf$I(col));
this.copyCellsRawItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.copyTableDataToClipboard$Z(false);
});
})()
), Clazz.new_(P$.DataToolTable$21.$init$,[this, null])));
this.copyCellsMenu.add$javax_swing_JMenuItem(this.copyCellsRawItem);
this.setDelimiterMenu=Clazz.new_([$I$(30).getString$S("DataTool.Menu.SetDelimiter")],$I$(36,1).c$$S);
this.setDelimiterMenu.addMenuListener$javax_swing_event_MenuListener(((P$.DataToolTable$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.dataTool != null ) this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.dataTool.setupDelimiterMenu$javax_swing_JMenu(this.b$['org.opensourcephysics.tools.DataToolTable'].setDelimiterMenu);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.DataToolTable$22.$init$,[this, null])));
this.copyCellsMenu.addSeparator$();
this.copyCellsMenu.add$javax_swing_JMenuItem(this.setDelimiterMenu);
if (this.dataToolTab.isUserEditable$() && !(Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction")) ) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CutCells");
this.cutCellsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.cutCellsItem.setActionCommand$S(String.valueOf$I(col));
this.cutCellsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].copyCellsAsFormattedItem.doClick$();
this.b$['org.opensourcephysics.tools.DataToolTable'].clearCellsAction.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.DataToolTable$23.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.cutCellsItem);
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.DeleteContents");
this.clearContentsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.clearContentsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].clearCellsAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.DataToolTable$24.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.clearContentsItem);
}}if (this.dataToolTab.isUserEditable$() && this.pasteData != null  ) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.PasteCells");
this.pasteCellsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.pasteCellsItem.setActionCommand$S(String.valueOf$I(col));
this.pasteCellsItem.addActionListener$java_awt_event_ActionListener(this.pasteCellsAction);
this.popup.add$javax_swing_JMenuItem(this.pasteCellsItem);
}}} else {
this.leadRow=row;
if (this.dataToolTab.isUserEditable$()) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.InsertRows");
this.insertRowItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.insertRowItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prev=this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.$finals$.rows, null]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 6, null, this.$finals$.rows, prev]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$25.$init$,[this, {rows:rows}])));
this.popup.add$javax_swing_JMenuItem(this.insertRowItem);
var hasRows=!this.pasteValues.isEmpty$();
if (hasRows) {
var it=this.pasteValues.keySet$().iterator$();
while (it.hasNext$()){
var next=it.next$();
hasRows=hasRows && (this.pasteData.getDatasetIndex$S(next) > -1) ;
}
}if (hasRows) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.PasteInsertRows");
this.pasteRowsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.pasteRowsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ((this.$finals$.rows.length != 1) && (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH != this.$finals$.rows.length) ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].cantPasteRowsAction.actionPerformed$java_awt_event_ActionEvent(e);
return;
}var pasteRows=Clazz.array(Integer.TYPE, [this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH]);
if (this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH == this.$finals$.rows.length) {
pasteRows=this.$finals$.rows;
} else if (this.$finals$.rows.length == 1) {
pasteRows[0]=this.$finals$.rows[0];
for (var i=1; i < this.b$['org.opensourcephysics.tools.DataToolTable'].pasteH; i++) {
pasteRows[i]=this.$finals$.rows[0] + i;
}
}this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [pasteRows, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 6, null, pasteRows, this.b$['org.opensourcephysics.tools.DataToolTable'].pasteValues]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$26.$init$,[this, {rows:rows}])));
this.popup.add$javax_swing_JMenuItem(this.pasteRowsItem);
}this.popup.addSeparator$();
}text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CopyRows");
this.copyRowsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.copyRowsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(37).finest$S("copying rows");
$I$(3,"copy$S$java_awt_datatransfer_ClipboardOwner",[this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.getSelectedTableData$Z$S(false, $I$(38).getDelimiter$()), null]);
});
})()
), Clazz.new_(P$.DataToolTable$27.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.copyRowsItem);
if (this.dataToolTab.isUserEditable$()) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CutRows");
this.cutRowsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.cutRowsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].copyRowsItem.doClick$();
var rows=this.b$['org.opensourcephysics.display.DataTable'].getSelectedModelRows$.apply(this.b$['org.opensourcephysics.display.DataTable'], []);
var removed=this.b$['org.opensourcephysics.tools.DataToolTable'].deleteRows$IA.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 7, null, rows, removed]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTable'].refreshUndoItems$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$28.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.cutRowsItem);
this.popup.addSeparator$();
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.AddEndRow");
this.addEndRowItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.addEndRowItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [Clazz.array(Integer.TYPE, -1, [this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])]), null]);
});
})()
), Clazz.new_(P$.DataToolTable$29.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.addEndRowItem);
if (this.isEmptyRow$I(this.getRowCount$() - 1)) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.TrimRows");
this.trimRowsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.trimRowsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTable'].trimEmptyRows$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [0])) this.b$['org.opensourcephysics.tools.DataToolTable'].refreshTable$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [16896]);
});
})()
), Clazz.new_(P$.DataToolTable$30.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.trimRowsItem);
}}}$I$(39,"setFonts$O$I",[this.popup, $I$(39).getLevel$()]);
}, p$1);

Clazz.newMeth(C$, 'doHeaderMouseClicked$java_awt_event_MouseEvent',  function (e) {
if (this.getRowCount$() == 0) return;
var mousePt=e.getPoint$();
var col=this.columnAtPoint$java_awt_Point(mousePt);
if (col == -1) {
return;
}var labelCol=this.convertColumnIndexToView$I(0);
var cols=this.getSelectedColumnNames$();
if ($I$(3).isPopupTrigger$java_awt_event_InputEvent(e)) {
if (col == labelCol) {
return;
}var colName=this.getColumnName$I(col);
if (!cols.contains$O(colName)) {
this.setColumnSelectionInterval$I$I(col, col);
this.leadCol=col;
}this.createHeaderPopup$I(col);
this.popup.show$java_awt_Component$I$I(this.getTableHeader$(), e.getX$(), e.getY$() + 8);
} else if (e.getClickCount$() == 2) {
if (col == labelCol) {
this.selectAllCells$();
} else {
this.setRowSelectionInterval$I$I(0, this.getRowCount$() - 1);
this.setColumnSelectionInterval$I$I(col, col);
this.leadCol=col;
}this.sort$I(0);
} else if (col == labelCol && this.dataTableModel.getSortedColumn$() == col ) {
if (col != this.prevSortedColumn) {
var rows=this.getSelectedModelRows$();
this.selectModelRows$IA(rows);
this.prevSortedColumn=col;
}} else if (e.isControlDown$()) {
if (col != labelCol && this.isColumnSelected$I(col) ) {
this.removeColumnSelectionInterval$I$I(col, col);
} else {
if (this.haveSelectedRows$()) this.addColumnSelectionInterval$I$I(col, col);
if (this.getSelectedColumns$().length == 1) {
this.leadCol=col;
}}} else if (e.isShiftDown$() && this.haveSelectedRows$() ) {
if (this.leadCol < this.getColumnCount$()) {
this.setColumnSelectionInterval$I$I(col, this.leadCol);
}} else {
if (col != this.prevSortedColumn) {
var rows=this.getSelectedModelRows$();
this.selectModelRows$IA(rows);
this.prevSortedColumn=col;
}}this.getSelectedData$();
this.addColumnSelectionInterval$I$I(labelCol, labelCol);
});

Clazz.newMeth(C$, 'createHeaderPopup$I',  function (col) {
this.getPopup$();
this.setRowSelectionInterval$I$I(0, this.getRowCount$() - 1);
this.popup.removeAll$();
var text;
var cols=this.getSelectedColumnNames$();
if ((cols.size$() == 1) && this.dataToolTab.isUserEditable$() ) {
var index=this.convertColumnIndexToModel$I(col) - 1;
var data=this.dataManager.getDataset$I(index);
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.RenameColumn");
this.renameColumnItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.renameColumnItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (Clazz.instanceOf(this.$finals$.data, "org.opensourcephysics.display.DataFunction")) {
this.b$['org.opensourcephysics.tools.DataToolTable'].showDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
return;
}var prevName=this.$finals$.data.getYColumnName$();
var newName=this.b$['org.opensourcephysics.tools.DataToolTable'].dataManager.getUniqueYColumnName$java_awt_Component$org_opensourcephysics_display_Dataset$S(this.b$['org.opensourcephysics.tools.DataToolTable'], this.$finals$.data, prevName);
if (newName == null ) {
return;
}var n=newName.indexOf$S("}");
if (n == 0) return;
if (n > -1) {
newName=newName.substring$I$I(0, n + 1);
}this.b$['org.opensourcephysics.tools.DataToolTable'].renameColumn$S$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [prevName, newName]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 0, newName, null, prevName]);
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
});
})()
), Clazz.new_(P$.DataToolTable$31.$init$,[this, {data:data}])));
this.popup.add$javax_swing_JMenuItem(this.renameColumnItem);
this.popup.addSeparator$();
}text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CopyColumns");
this.copyColumnsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.copyColumnsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.copyTableDataToClipboard$Z(false);
});
})()
), Clazz.new_(P$.DataToolTable$32.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.copyColumnsItem);
var addCutItem=true;
for (var name, $name = cols.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (!this.dataToolTab.isDeletable$org_opensourcephysics_display_Dataset(this.getDataset$S(name))) {
addCutItem=false;
}}
if (addCutItem) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CutColumns");
this.cutColumnsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.cutColumnsItem.setActionCommand$S(String.valueOf$I(col));
this.cutColumnsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].copyColumnsItem.doClick$();
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteSelectedColumns$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [true]);
});
})()
), Clazz.new_(P$.DataToolTable$33.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.cutColumnsItem);
}if ((this.dataToolTab != null ) && (this.dataToolTab.dataTool != null ) && this.dataToolTab.dataTool.hasPastableData$() && this.dataToolTab.dataTool.hasPastableColumns$org_opensourcephysics_tools_DataToolTab(this.dataToolTab)  ) {
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.PasteColumns");
this.pasteColumnsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.pasteColumnsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.dataTool.pasteColumnsItem.doClick$I(0);
});
})()
), Clazz.new_(P$.DataToolTable$34.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.pasteColumnsItem);
}this.popup.addSeparator$();
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.CloneColumns");
this.cloneColumnsItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.cloneColumnsItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var colNames=this.b$['org.opensourcephysics.tools.DataToolTable'].getSelectedColumnNames$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
for (var i=0; i < colNames.size$(); i++) {
var data=this.b$['org.opensourcephysics.tools.DataToolTable'].getDataset$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [colNames.get$I(i)]);
if (data == null ) {
continue;
}var clone=$I$(31).copyDataset$org_opensourcephysics_display_Dataset$org_opensourcephysics_display_Dataset$Z(data, null, false);
var x=data.getXPoints$();
var y=data.getYPoints$();
clone.append$DA$DA(x, y);
var name=data.getYColumnName$();
var postfix="_" + $I$(30).getString$S("DataTool.Clone.Subscript");
var n=name.indexOf$S(postfix);
if (n > -1) {
name=name.substring$I$I(0, n);
}name=name + postfix;
name=this.b$['org.opensourcephysics.tools.DataToolTable'].dataManager.uniquifyColumnName$org_opensourcephysics_display_Dataset$S(clone, name);
clone.setXYColumnNames$S$S(data.getXColumnName$(), name);
var loadedColumns=this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.loadData$org_opensourcephysics_display_Data$Z(clone, false);
if (!loadedColumns.isEmpty$()) {
for (var next, $next = loadedColumns.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.deletable=true;
}
}}
});
})()
), Clazz.new_(P$.DataToolTable$35.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.cloneColumnsItem);
this.popup.addSeparator$();
text=$I$(30).getString$S("DataToolTable.Popup.MenuItem.NumberFormat");
this.numberFormatItem=Clazz.new_($I$(35,1).c$$S,[text]);
this.numberFormatItem.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.numberFormatAction.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
});
})()
), Clazz.new_(P$.DataToolTable$36.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.numberFormatItem);
$I$(39,"setFonts$O$I",[this.popup, $I$(39).getLevel$()]);
});

Clazz.newMeth(C$, 'numberFormatAction',  function () {
var colCount=this.getColumnCount$();
var names=Clazz.array(String, [colCount - 1]);
var labelCol=this.convertColumnIndexToView$I(0);
var index=0;
for (var i=0; i < colCount; i++) {
if (i == labelCol) continue;
var name=this.getColumnName$I(i);
names[index]=name;
++index;
}
var selected=this.getSelectedColumnNames$();
var selectedNames=Clazz.array(String, [selected.size$()]);
for (var i=0; i < selectedNames.length; i++) {
selectedNames[i]=selected.get$I(i);
}
var dialog=this.getFormatDialog$SA$SA(names, selectedNames);
dialog.setVisible$Z(true);
this.dataToolTab.refreshPlot$();
}, p$1);

Clazz.newMeth(C$, 'dorepaint$I',  function (i) {
switch (i) {
case 1:
case 2:
case 3:
case 4:
case 5:
default:
if (!$I$(3).isJS) this.repaint$();
}
});

Clazz.newMeth(C$, 'getWorkingData$S',  function (colName) {
if (colName == null ) {
return null;
}var working=this.workingMap.get$O(colName);
if (working == null  && this.dataToolTab.originShiftEnabled ) {
var unshifted=$I$(12).unshiftName$S(colName);
if (unshifted != colName) working=this.workingMap.get$O(unshifted);
}if (working == null ) {
var ySource=this.getDataset$S(colName);
if (ySource == null ) {
return null;
}working=Clazz.new_($I$(40,1).c$$org_opensourcephysics_display_Dataset,[this, null, ySource]);
if (ySource.getMarkerShape$() == 0) {
ySource.setMarkerShape$I(2);
working.setMarkersVisible$Z(false);
}this.workingMap.put$O$O(colName, working);
}var labelCol=this.convertColumnIndexToView$I(0);
var col=(labelCol == 0 ? 1 : 0);
var xSource=this.getDataset$S(col < this.getColumnCount$() ? this.getColumnName$I(col) : null);
if (xSource == null ) {
return null;
}if (!working.isUpToDate$org_opensourcephysics_display_Dataset(xSource)) working.setXSource$org_opensourcephysics_display_Dataset(xSource);
var ySource=working.getYSource$();
working.setMarkerColor$java_awt_Color$java_awt_Color(ySource.getFillColor$(), ySource.getEdgeColor$());
working.setMarkerSize$I(ySource.getMarkerSize$());
working.markerType=ySource.getMarkerShape$();
working.setLineColor$java_awt_Color(ySource.getLineColor$());
working.setConnected$Z(ySource.isConnected$());
return working;
});

Clazz.newMeth(C$, 'getWorkingData$',  function () {
if (this.dataManager.getDatasetsRaw$().size$() < 2) {
this.workingData=null;
} else {
var labelCol=this.convertColumnIndexToView$I(0);
var yCol=(labelCol < 2) ? 2 : 1;
var yName=this.getColumnName$I(yCol);
this.workingData=this.getWorkingData$S(yName);
}return this.workingData;
});

Clazz.newMeth(C$, 'removeWorkingData$S',  function (colName) {
if (colName == null ) {
return;
}this.workingMap.remove$O(colName);
this.setFormatPattern$S$S(colName, null);
this.refreshTable$I(16640);
});

Clazz.newMeth(C$, 'deleteSelectedColumns$Z',  function (postEdit) {
var colNames=this.getSelectedColumnNames$();
var cols=this.getSelectedColumns$();
for (var i=colNames.size$() - 1; i > -1; i--) {
var name=colNames.get$I(i);
var target=this.getDataset$S(name);
if (!this.dataToolTab.isDeletable$org_opensourcephysics_display_Dataset(target)) {
continue;
}var deleted=this.deleteColumn$S(name);
if (deleted == null ) {
continue;
}if (postEdit) {
var colInt=Integer.valueOf$I(cols[i]);
var edit=Clazz.new_($I$(14,1).c$$I$S$O$O,[this, null, 2, name, colInt, deleted]);
this.dataToolTab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}}
this.refreshUndoItems$();
});

Clazz.newMeth(C$, 'clearWorkingData$',  function () {
for (var it=this.workingMap.keySet$().iterator$(); it.hasNext$(); ) {
var colName=it.next$().toString();
this.setFormatPattern$S$S(colName, null);
}
this.workingMap.clear$();
this.refreshTable$I(2);
});

Clazz.newMeth(C$, 'getDataset$S',  function (colName) {
if (colName == null ) return null;
var index=this.dataManager.getDatasetIndex$S(colName);
var unshifted;
if (index >= 0 || (unshifted=$I$(12).unshiftName$S(colName)) != colName && (index=this.dataManager.getDatasetIndex$S(unshifted)) >= 0  ) {
return this.dataManager.getDataset$I(index);
}var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
if (next.getYColumnName$().equals$O(colName) || unshifted != colName && next.getYColumnName$().equals$O(unshifted)  ) {
return next;
}}
return null;
});

Clazz.newMeth(C$, 'getSelectedData$',  function () {
if (this.getWorkingData$() == null ) {
return null;
}var xValues;
var yValues;
var x=this.workingData.getXSource$().getYPoints$();
var y=this.workingData.getYSource$().getYPoints$();
var workingIndex=0;
this.workingData.clearHighlights$();
for (var i=0; i < x.length; i++) {
if (Double.isNaN$D(x[i])) {
continue;
}this.workingRowToModelRow.put$O$O(Integer.valueOf$I(workingIndex++), Integer.valueOf$I(i));
}
var labelCol=this.convertColumnIndexToView$I(0);
var xCol=(labelCol == 0) ? 1 : 0;
var yCol=(labelCol < 2) ? 2 : 1;
var cols=this.getSelectedColumns$();
var colSelected=false;
for (var k=0; k < cols.length; k++) {
colSelected=colSelected || (cols[k] == xCol) || (cols[k] == yCol)  ;
}
var bs=this.getSelectedModelRowsBS$().clone$();
var nsel=bs.cardinality$();
if (!colSelected || nsel == 0 ) {
xValues=x;
yValues=Clazz.array(Double.TYPE, [x.length]);
for (var i=0; i < yValues.length; i++) {
yValues[i]=(i < y.length ? y[i] : NaN);
}
bs.clear$();
} else {
xValues=Clazz.array(Double.TYPE, [nsel]);
yValues=Clazz.array(Double.TYPE, [nsel]);
var bsNew=Clazz.new_($I$(41,1));
bsNew.set$I$I(0, nsel);
for (var i=0, row=bs.nextSetBit$I(0); row >= 0; row=bs.nextSetBit$I(row + 1), i++) {
xValues[i]=(row >= x.length) ? NaN : x[row];
yValues[i]=(row >= y.length) ? NaN : y[row];
var ignore=Double.isNaN$D(xValues[i]);
if (ignore) {
bsNew.clear$I(i);
} else {
this.workingData.setHighlighted$I$Z(row, true);
if (Double.isNaN$D(yValues[i])) bsNew.clear$I(i);
}}
bs=bsNew;
}$I$(31).copyDataset$org_opensourcephysics_display_Dataset$org_opensourcephysics_display_Dataset$Z(this.workingData, this.selectedData, false);
this.selectedData.clear$();
this.selectedData.setHighlights$java_util_BitSet(bs);
this.selectedData.append$DA$DA(xValues, yValues);
return this.selectedData;
});

Clazz.newMeth(C$, 'getSelectedColumnNames$',  function () {
var columns=this.getSelectedColumns$();
var names=Clazz.new_($I$(42,1));
for (var i=0; i < columns.length; i++) {
var index=this.convertColumnIndexToModel$I(columns[i]) - 1;
if (index < 0) {
continue;
}var name=this.dataManager.getDataset$I(index).getYColumnName$();
names.add$O(name);
}
return names;
});

Clazz.newMeth(C$, 'setSelectedColumnNames$java_util_Collection',  function (names) {
if (this.getColumnCount$() < 1) {
return;
}this.removeColumnSelectionInterval$I$I(0, this.getColumnCount$() - 1);
var it=names.iterator$();
while (it.hasNext$()){
var colName=it.next$();
var index=this.dataManager.getDatasetIndex$S(colName);
if (index == -1) {
continue;
}var col=this.convertColumnIndexToView$I(index + 1);
this.addColumnSelectionInterval$I$I(col, col);
}
});

Clazz.newMeth(C$, 'insertColumn$org_opensourcephysics_display_Dataset$I',  function (data, col) {
var rows=this.getSelectedModelRowsBS$();
var cols=this.getSelectedColumnNames$();
this.clearSelection$();
data.setXColumnVisible$Z(false);
var index=this.dataManager.getDatasetsRaw$().size$();
if (index == 0) {
this.dataToolTab.originatorID=data.getID$();
}if (Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction")) {
var tool=this.dataToolTab.getDataBuilder$();
var panel=tool.getPanel$S(this.dataToolTab.getName$());
var presentation=panel.undoManager.getPresentationName$();
if (panel.undoManager.canUndo$() && presentation.equals$O("Deletion") ) {
panel.undoManager.undo$();
}} else {
this.dataManager.addDataset$org_opensourcephysics_display_Dataset(data);
this.getWorkingData$S(data.getYColumnName$());
}this.updateColumnModel$();
if (rows.cardinality$() == 0) {
this.setRowSelectionInterval$I$I(0, this.getRowCount$() - 1);
} else {
this.setSelectedModelRowsBS$java_util_BitSet(rows);
}cols.add$O(data.getYColumnName$());
this.setSelectedColumnNames$java_util_Collection(cols);
this.refreshTable$I(16640);
this.refreshDataFunctions$();
this.dataToolTab.statsTable.refreshStatistics$();
this.dataToolTab.propsTable.refreshTable$();
this.dataToolTab.refreshGUI$();
this.dataToolTab.refreshPlot$();
this.dataToolTab.tabChanged$Z(true);
this.refreshUndoItems$();
});

Clazz.newMeth(C$, 'deleteColumn$S',  function (colName) {
var index=this.dataManager.getDatasetIndex$S(colName);
var deletedCol=this.convertColumnIndexToView$I(index + 1);
var data=this.dataManager.getDataset$I(index);
var sortColDeleted=this.dataTableModel.getSortedColumn$() == index + 1;
if (sortColDeleted) {
this.sort$I(0);
}var rows=this.getSelectedModelRowsBS$();
var cols=this.getSelectedColumnNames$();
this.clearSelection$();
var model=this.getModel$();
var modelColumns=Clazz.array(Integer.TYPE, [model.getColumnCount$() - 1]);
var viewCol=-1;
for (var j=0; j < model.getColumnCount$(); j++) {
if (j == deletedCol) {
continue;
}++viewCol;
var modelCol=this.convertColumnIndexToModel$I(j);
if (modelCol > index + 1) {
--modelCol;
}modelColumns[viewCol]=modelCol;
}
if (Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction")) {
var tool=this.dataToolTab.getDataBuilder$();
var panel=tool.getPanel$S(this.dataToolTab.getName$());
panel.functionEditor.removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(data, true);
} else {
this.dataManager.removeDataset$I(index);
this.workingMap.remove$O(colName);
}if (this.dataManager.getDatasetsRaw$().isEmpty$()) {
this.dataToolTab.originatorID=0;
this.tableChanged$javax_swing_event_TableModelEvent(Clazz.new_([this.getModel$(), -1],$I$(43,1).c$$javax_swing_table_TableModel$I));
this.dataToolTab.refreshGUI$();
} else {
this.updateColumnModel$();
if (!((cols.size$() == 1) && cols.contains$O(colName) )) {
this.setSelectedModelRowsBS$java_util_BitSet(rows);
this.setSelectedColumnNames$java_util_Collection(cols);
}}this.refreshTable$I(16640);
this.refreshDataFunctions$();
this.dataToolTab.refreshPlot$();
this.dataToolTab.propsTable.refreshTable$();
this.dataToolTab.refreshGUI$();
this.dataToolTab.tabChanged$Z(true);
this.refreshUndoItems$();
this.dataToolTab.varPopup=null;
return data;
});

Clazz.newMeth(C$, 'insertCells$IA$java_util_HashMap',  function (rows, values) {
var count=this.getRowCount$();
var fillRows=Clazz.array(Integer.TYPE, [rows.length]);
for (var i=0; i < rows.length; i++) {
fillRows[i]=count + i;
}
var cols=Clazz.array(Integer.TYPE, [values.keySet$().size$()]);
var k=0;
var inserted=Clazz.new_($I$(13,1));
var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
var colName=next.getYColumnName$();
if (values.keySet$().contains$O(colName)) {
var vals=values.get$O(colName);
vals=this.insertPoints$org_opensourcephysics_display_Dataset$IA$DA(next, rows, vals);
inserted.put$O$O(colName, vals);
var index=this.dataManager.getDatasetIndex$S(colName);
cols[k++]=this.convertColumnIndexToView$I(index + 1);
} else {
this.insertPoints$org_opensourcephysics_display_Dataset$IA$DA(next, fillRows, null);
}}
this.refreshDataFunctions$();
this.refreshTable$I(16896);
this.selectModelRows$IA(rows);
this.setSelectedColumnNames$java_util_Collection(values.keySet$());
this.dataToolTab.refreshPlot$();
this.refreshUndoItems$();
return inserted;
});

Clazz.newMeth(C$, 'deleteCells$IA$java_util_HashMap',  function (rows, values) {
var startFillRow=this.getRowCount$() - rows.length;
var deleted=Clazz.new_($I$(13,1));
var it=values.keySet$().iterator$();
while (it.hasNext$()){
var colName=it.next$();
var index=this.dataManager.getDatasetIndex$S(colName);
var dataset=this.dataManager.getDataset$I(index);
var removed=this.deletePoints$org_opensourcephysics_display_Dataset$IA(dataset, rows);
deleted.put$O$O(colName, removed);
var fillRows=Clazz.array(Integer.TYPE, [rows.length]);
for (var i=0; i < rows.length; i++) {
fillRows[i]=startFillRow + i;
}
this.insertPoints$org_opensourcephysics_display_Dataset$IA$DA(dataset, fillRows, null);
}
this.trimEmptyRows$I(startFillRow - 1);
this.refreshDataFunctions$();
this.refreshTable$I(16896);
this.setSelectedColumnNames$java_util_Collection(values.keySet$());
this.selectModelRows$IA(rows);
this.dataToolTab.refreshPlot$();
this.refreshUndoItems$();
return deleted;
});

Clazz.newMeth(C$, 'replaceCells$IA$java_util_HashMap',  function (rows, values) {
var cols=Clazz.array(Integer.TYPE, [values.keySet$().size$()]);
var replaced=Clazz.new_($I$(13,1));
var it=values.keySet$().iterator$();
var i=0;
while (it.hasNext$()){
var colName=it.next$();
var vals=values.get$O(colName);
var index=this.dataManager.getDatasetIndex$S(colName);
var data=this.dataManager.getDataset$I(index);
var pts=this.replacePoints$org_opensourcephysics_display_Dataset$IA$DA(data, rows, vals);
replaced.put$O$O(colName, pts);
cols[i++]=this.convertColumnIndexToView$I(index + 1);
}
this.refreshDataFunctions$();
this.refreshTable$I(32768);
this.selectModelRows$IA(rows);
this.setSelectedColumnNames$java_util_Collection(values.keySet$());
this.refreshUndoItems$();
this.dataToolTab.refreshPlot$();
return replaced;
});

Clazz.newMeth(C$, 'insertRows$IA$java_util_HashMap',  function (rows, values) {
if (values == null ) {
values=Clazz.new_($I$(13,1));
}var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
var name=next.getYColumnName$();
if (!values.keySet$().contains$O(name)) {
values.put$O$O(name, null);
}}
values=this.insertCells$IA$java_util_HashMap(rows, values);
var endRow=this.getModelRow$I(this.getRowCount$() - 1);
for (var i=0; i < rows.length; i++) {
if (endRow == rows[i]) {
this.computeVisibleRect$java_awt_Rectangle(this.rect);
this.rect.y=this.getSize$().height - this.rect.height + this.getRowHeight$();
this.scrollRectToVisible$java_awt_Rectangle(this.rect);
break;
}}
return values;
});

Clazz.newMeth(C$, 'deleteRows$IA',  function (rows) {
var removed=Clazz.new_($I$(13,1));
var dataSets=this.dataManager.getDatasetsRaw$();
for (var i=dataSets.size$(); --i >= 0; ) {
var ds=dataSets.get$I(i);
removed.put$O$O(ds.getYColumnName$(), this.deletePoints$org_opensourcephysics_display_Dataset$IA(ds, rows));
}
this.refreshTable$I(8960);
this.refreshDataFunctions$();
this.clearSelection$();
this.setSelectedColumnNames$java_util_Collection(removed.keySet$());
this.selectModelRows$IA(rows);
this.refreshUndoItems$();
this.dataToolTab.refreshPlot$();
return removed;
});

Clazz.newMeth(C$, 'isEmptyRow$I',  function (row) {
var empty=true;
var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var data=datasets.get$I(i);
if (Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction")) {
continue;
}var y=data.getYPoints$();
if (row >= y.length) {
return false;
}empty=empty && Double.isNaN$D(y[row]) ;
}
return empty;
});

Clazz.newMeth(C$, 'isEmptyCells$I$java_util_ArrayList',  function (row, columnNames) {
var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var data=datasets.get$I(i);
if ((Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction")) || !columnNames.contains$O(data.getYColumnName$()) ) {
continue;
}if (row >= data.getIndex$()) {
return false;
}if (Double.isNaN$D(data.getYShifted$I(row))) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getXColumn$',  function () {
if (this.getColumnCount$() < 2) {
return -1;
}var labelCol=this.convertColumnIndexToView$I(0);
return (labelCol == 0) ? 1 : 0;
});

Clazz.newMeth(C$, 'getYColumn$',  function () {
if (this.getColumnCount$() < 3) {
return -1;
}var labelCol=this.convertColumnIndexToView$I(0);
return (labelCol < 2) ? 2 : 1;
});

Clazz.newMeth(C$, 'replacePoints$org_opensourcephysics_display_Dataset$IA$DA',  function (dataset, rows, vals) {
var replaced=Clazz.array(Double.TYPE, [rows.length]);
var column=null;
var shifted=false;
if (Clazz.instanceOf(dataset, "org.opensourcephysics.tools.DataColumn")) {
column=dataset;
shifted=column.isShifted$();
column.setShifted$Z(false);
}var count=dataset.getIndex$();
for (var i=0; i < rows.length; i++) {
count=Math.max(count, rows[i] + 1);
}
for (var len=dataset.getIndex$(); count > len; len=dataset.getIndex$()) {
var row=Clazz.array(Integer.TYPE, -1, [len]);
this.insertRows$IA$java_util_HashMap(row, null);
}
var x=dataset.getXPoints$();
var y=dataset.getYPoints$();
for (var i=0; i < rows.length; i++) {
replaced[i]=y[rows[i]];
y[rows[i]]=(vals == null ) ? NaN : vals[i];
}
dataset.clear$();
dataset.append$DA$DA(x, y);
if (column != null ) {
column.setShifted$Z(shifted);
}this.dataToolTab.tabChanged$Z(true);
return replaced;
});

Clazz.newMeth(C$, 'insertPoints$org_opensourcephysics_display_Dataset$IA$DA',  function (dataset, rows, vals) {
if (vals == null ) {
vals=Clazz.array(Double.TYPE, [rows.length]);
for (var i=0; i < vals.length; i++) {
vals[i]=NaN;
}
}if (Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction")) {
return vals;
}var y=dataset.getYPoints$();
for (var i=0; i < rows.length; i++) {
var n=y.length;
var newy=Clazz.array(Double.TYPE, [n + 1]);
System.arraycopy$O$I$O$I$I(y, 0, newy, 0, rows[i]);
System.arraycopy$O$I$O$I$I(y, rows[i], newy, rows[i] + 1, n - rows[i]);
newy[rows[i]]=vals[i];
y=newy;
}
var x=$I$(31).getRowArray$I(y.length);
dataset.clear$();
dataset.append$DA$DA(x, y);
this.dataToolTab.tabChanged$Z(true);
return vals;
});

Clazz.newMeth(C$, 'deletePoints$org_opensourcephysics_display_Dataset$IA',  function (dataset, rows) {
var removed=Clazz.array(Double.TYPE, [rows.length]);
if (Clazz.instanceOf(dataset, "org.opensourcephysics.display.DataFunction")) {
return removed;
}var y=dataset.getYPoints$();
for (var i=rows.length - 1; i > -1; i--) {
var n=y.length;
var newy=Clazz.array(Double.TYPE, [n - 1]);
System.arraycopy$O$I$O$I$I(y, rows[i], removed, i, 1);
if (rows[i] > 0) {
System.arraycopy$O$I$O$I$I(y, 0, newy, 0, rows[i]);
}if (rows[i] < n - 1) {
System.arraycopy$O$I$O$I$I(y, rows[i] + 1, newy, rows[i], n - rows[i] - 1 );
}y=newy;
}
var x=$I$(31).getRowArray$I(y.length);
dataset.clear$();
dataset.append$DA$DA(x, y);
this.dataToolTab.tabChanged$Z(true);
return removed;
});

Clazz.newMeth(C$, 'trimEmptyRows$I',  function (minSize) {
var trimmed=false;
this.clearSelection$();
var endRow=this.getRowCount$() - 1;
var empty=true;
var rows=Clazz.array(Integer.TYPE, [1]);
while (empty && (endRow > minSize) ){
empty=this.isEmptyRow$I(endRow);
if (empty) {
rows[0]=endRow;
this.deleteRows$IA(rows);
trimmed=true;
--endRow;
}}
if (this.getSelectedRows$().length == 0) {
this.removeColumnSelectionInterval$I$I(0, this.getColumnCount$() - 1);
}return trimmed;
});

Clazz.newMeth(C$, 'clearSelectionIfEmptyEndRow$',  function () {
var n=this.getRowCount$();
if (n < 2) {
return;
}var selectedRows=this.getSelectedRows$();
if ((selectedRows.length == 1) && (selectedRows[0] == n - 1) && this.isEmptyRow$I(n - 1)  ) {
this.clearSelection$();
}});

Clazz.newMeth(C$, 'showDataBuilder$',  function () {
var tool=this.dataToolTab.getDataBuilder$();
tool.setSelectedPanel$S(this.dataToolTab.getName$());
tool.setVisible$Z(true);
});

Clazz.newMeth(C$, 'renameColumn$S$S',  function (oldName, newName) {
var index=this.dataManager.getDatasetIndex$S(oldName);
var data=this.dataManager.getDataset$I(index);
data.setXYColumnNames$S$S(data.getXColumnName$(), newName);
this.refreshDataFunctions$();
this.dataToolTab.columnNameChanged$S$S(oldName, newName);
this.refreshTable$I(33554432);
this.refreshUndoItems$();
});

Clazz.newMeth(C$, 'refreshUndoItems$',  function () {
if (this.dataToolTab != null ) {
this.dataToolTab.refreshUndoItems$();
}});

Clazz.newMeth(C$, 'refreshDataFunctions$',  function () {
var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
if (Clazz.instanceOf(next, "org.opensourcephysics.display.DataFunction")) {
(next).refreshFunctionData$();
}}
});

Clazz.newMeth(C$, 'selectAllCells$',  function () {
this.selectAll$();
if (this.getSelectedRows$().length == 0) {
this.selectAll$();
}this.requestFocusInWindow$();
});

Clazz.newMeth(C$, 'clearSelection$',  function () {
if (this.clearing) {
return;
}this.clearing=true;
if (this.workingData != null ) {
this.workingData.clearHighlights$();
}if (this.selectedData != null ) {
this.selectedData.clearHighlights$();
}C$.superclazz.prototype.clearSelection$.apply(this, []);
this.leadCol=0;
this.repaint$();
this.clearing=false;
});

Clazz.newMeth(C$, 'refreshTable$I',  function (mode) {
if (mode == 16896) {
C$.superclazz.prototype.refreshTable$I.apply(this, [mode]);
this.updateColumnModel$();
return;
}var noView=this.convertColumnIndexToView$I(0) == -1;
if (noView) {
this.updateColumnModel$();
return;
}var rows=this.getSelectedModelRows$();
var cols=this.getSelectedColumnNames$();
this.updateColumnModel$();
var changed=this.dataToolTab.tabChanged;
this.dataToolTab.tabChanged$Z(changed);
this.sort$I(this.dataTableModel.getSortedColumn$());
if (!cols.isEmpty$()) {
this.setSelectedColumnNames$java_util_Collection(cols);
}if (rows.length > 0) {
this.selectModelRows$IA(rows);
}C$.superclazz.prototype.refreshTable$I.apply(this, [mode]);
});

Clazz.newMeth(C$, 'getFormatDialog$SA$SA',  function (names, selected) {
for (var i=0; i < names.length; i++) {
names[i]=$I$(12).unshiftName$S(names[i]);
}
return C$.superclazz.prototype.getFormatDialog$SA$SA.apply(this, [names, selected]);
});

Clazz.newMeth(C$, 'getHiddenMarkers$',  function () {
var list=Clazz.new_($I$(42,1));
for (var i=0; i < this.getColumnCount$(); i++) {
var name=this.getColumnName$I(i);
var next=this.getWorkingData$S(name);
if ((next != null ) && !next.isMarkersVisible$() ) {
list.add$O(name);
}}
return list.toArray$OA(Clazz.array(String, [list.size$()]));
});

Clazz.newMeth(C$, 'hideMarkers$SA',  function (hiddenColumns) {
if (hiddenColumns == null ) {
return;
}for (var i=0; i < hiddenColumns.length; i++) {
var name=hiddenColumns[i];
var next=this.getWorkingData$S(name);
if (next != null ) {
next.setMarkersVisible$Z(false);
}}
});

Clazz.newMeth(C$, 'setWorkingColumns$S$S',  function (xColName, yColName) {
var labelCol=this.convertColumnIndexToView$I(0);
this.getColumnModel$().moveColumn$I$I(labelCol, 0);
var model=this.getModel$();
for (var i=1; i < model.getColumnCount$(); i++) {
if (xColName.equals$O(this.getColumnName$I(i))) {
this.getColumnModel$().moveColumn$I$I(i, 1);
break;
}}
for (var i=2; i < model.getColumnCount$(); i++) {
if (yColName.equals$O(this.getColumnName$I(i))) {
this.getColumnModel$().moveColumn$I$I(i, 2);
break;
}}
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.labelRenderer != null ) {
var labelFont=this.labelRenderer.getFont$();
labelFont=labelFont.deriveFont$F(font.getSize2D$());
this.labelRenderer.setFont$java_awt_Font(labelFont);
this.headerRenderer.headerFont=labelFont;
this.rowNumberRenderer.setFont$java_awt_Font(labelFont);
}this.setRowHeight$I(font.getSize$() + 4);
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, col) {
var renderer=C$.superclazz.prototype.getCellRenderer$I$I.apply(this, [row, col]);
if (renderer === this.rowNumberRenderer ) {
return this.labelRenderer;
}this.dataRenderer.renderer=renderer;
return this.dataRenderer;
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, col) {
this.editor.setColumn$I(col);
return this.editor;
});

Clazz.newMeth(C$, 'isFitFittable$org_opensourcephysics_tools_KnownFunction$Z',  function (fit, allowNone) {
var n=this.selectedData.getHighlightCount$();
return (n == 0 ? allowNone : n >= fit.getParameterCount$());
});

Clazz.newMeth(C$, 'moveColumn$S$I',  function ($var, col) {
for (var i=0, n=this.dataTableModel.getColumnCount$(); i < n; i++) {
if ($var.equals$O(this.getColumnName$I(i))) {
if (i != col) {
this.getColumnModel$().moveColumn$I$I(i, col);
}return;
}}
});

C$.$static$=function(){C$.$static$=0;
C$.editTypes=Clazz.array(String, -1, ["rename column", "insert column", "delete column", "insert cells", "delete cells", "replace cells", "insert rows", "delete rows", "delimited text"]);
C$.xAxisColor=Clazz.new_($I$(8,1).c$$I$I$I,[255, 255, 153]);
C$.yAxisColor=Clazz.new_($I$(8,1).c$$I$I$I,[204, 255, 204]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "HeaderRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_($I$(1,1));
this.textLine=Clazz.new_($I$(2,1).c$$S$D$D,["", 0, -6]);
},1);

C$.$fields$=[['O',['renderer','javax.swing.table.TableCellRenderer','headerFont','java.awt.Font','panel','org.opensourcephysics.display.DrawingPanel','textLine','org.opensourcephysics.display.DrawableTextLine']]]

Clazz.newMeth(C$, 'c$$javax_swing_table_TableCellRenderer',  function (renderer) {
;C$.$init$.apply(this);
this.renderer=renderer;
this.textLine.setJustification$I(0);
this.panel.addDrawable$org_opensourcephysics_display_Drawable(this.textLine);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
var realname=(value == null ) ? "" : value.toString();
var name=realname;
if ($I$(3).isMac$()) {
name=$I$(4).removeSubscripting$S(name);
}var c=this.renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, name, isSelected, hasFocus, row, col);
if (this.headerFont == null ) this.headerFont=c.getFont$();
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
var xCol=(labelCol == 0) ? 1 : 0;
var yCol=(labelCol < 2) ? 2 : 1;
if (this.b$['org.opensourcephysics.tools.DataToolTable'].unselectedBG == null ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].unselectedBG=c.getBackground$();
}if (this.b$['org.opensourcephysics.tools.DataToolTable'].unselectedBG == null ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].unselectedBG=$I$(5).getColor$O("Panel.background");
}this.b$['org.opensourcephysics.tools.DataToolTable'].rowBG=this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.plot.getBackground$();
var bgColor=(col == xCol) ? $I$(6).xAxisColor : (col == yCol) ? $I$(6).yAxisColor : this.b$['org.opensourcephysics.tools.DataToolTable'].rowBG;
if (!(Clazz.instanceOf(c, "javax.swing.JComponent"))) {
return c;
}var comp=c;
var dim=comp.getPreferredSize$();
dim.height+=1;
dim.height=Math.max(this.b$['javax.swing.JTable'].getRowHeight$.apply(this.b$['javax.swing.JTable'], []) + 2, dim.height);
this.panel.setPreferredSize$java_awt_Dimension(dim);
var border=comp.getBorder$();
if (Clazz.instanceOf(border, "javax.swing.border.EmptyBorder")) {
border=$I$(7,"createLineBorder$java_awt_Color",[$I$(8).LIGHT_GRAY]);
}this.panel.setBorder$javax_swing_border_Border(border);
var font;
var data=this.b$['org.opensourcephysics.tools.DataToolTable'].getDataset$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [realname]);
if (!this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.isDeletable$org_opensourcephysics_display_Dataset(data)) {
font=this.b$['org.opensourcephysics.tools.DataToolTable'].dataTableModel.getSortedColumn$() != this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [col]) ? this.headerFont.deriveFont$I(2) : this.headerFont.deriveFont$I(3);
} else {
font=this.b$['org.opensourcephysics.tools.DataToolTable'].dataTableModel.getSortedColumn$() != this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [col]) ? this.headerFont.deriveFont$I(0) : this.headerFont.deriveFont$I(1);
}var cols=this.b$['javax.swing.JTable'].getSelectedColumns$.apply(this.b$['javax.swing.JTable'], []);
var selected=false;
for (var i=0; i < cols.length; i++) {
if (cols[i] == col) {
selected=true;
break;
}}
selected=!!(selected&((this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [col]) > 0)));
bgColor=selected ? this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderBG : bgColor;
if ($I$(3).isMac$()) {
comp.setFont$java_awt_Font(font);
comp.setBackground$java_awt_Color(bgColor);
comp.setForeground$java_awt_Color(selected ? this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderFG : comp.getForeground$());
if (Clazz.instanceOf(comp, "javax.swing.JLabel")) {
(comp).setHorizontalAlignment$I(0);
}return comp;
}this.textLine.setText$S(name);
this.textLine.setFont$java_awt_Font(font);
this.textLine.setColor$java_awt_Color(selected ? this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderFG : comp.getForeground$());
this.textLine.setBackground$java_awt_Color(bgColor);
this.panel.setBackground$java_awt_Color(bgColor);
return this.panel;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "WorkingDataset", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.HighlightableDataset');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['markersVisible'],'I',['markerType'],'O',['yData','org.opensourcephysics.display.Dataset','+xData']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Dataset',  function (yDataset) {
Clazz.super_(C$, this);
this.yData=yDataset;
this.setColor$java_awt_Color$java_awt_Color(this.yData.getFillColor$(), this.yData.getLineColor$());
this.markerType=this.yData.getMarkerShape$();
this.setMarkerShape$I(this.markerType);
this.markersVisible=(this.markerType != 0);
if (this.markerType == 0) {
this.markerType=1;
}this.setMarkerSize$I(this.yData.getMarkerSize$());
this.setConnected$Z(this.yData.isConnected$());
}, 1);

Clazz.newMeth(C$, 'isUpToDate$org_opensourcephysics_display_Dataset',  function (xSource) {
return (this.xData != null  && xSource.update == this.xData.update );
});

Clazz.newMeth(C$, 'isWorkingYColumn$',  function () {
return this.getYColumnName$().equals$O(this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.plot.yVar);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var workingY=this.isWorkingYColumn$();
if (workingY) {
this.drawSurrounds$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g);
}var vis=this.markersVisible;
if (workingY && !vis ) {
this.setMarkersVisible$Z(true);
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [drawingPanel, g]);
if (workingY && !vis ) {
this.setMarkersVisible$Z(false);
}});

Clazz.newMeth(C$, 'drawSurrounds$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
var c=g2.getColor$();
var s=g2.getStroke$();
g2.setColor$java_awt_Color(Clazz.new_($I$(8,1).c$$I$I$I$I,[51, 255, 51, 153]));
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(9,1).c$$F,[2]));
var shape=null;
var radius=this.getMarkerSize$() + 2;
var marker=this.getMarkerShape$();
if (marker == 0 || marker == 6 ) {
radius=3;
}var size=radius * 2 + 1;
var xpoints=this.getXPointsRaw$();
var ypoints=this.getYPointsRaw$();
for (var i=0; i < this.index; i++) {
var yp=ypoints[i];
if (Double.isNaN$D(yp)) {
continue;
}var xp=xpoints[i];
if (drawingPanel.isLogScaleX$() && (xp <= 0 ) ) {
continue;
}if (drawingPanel.isLogScaleY$() && (yp <= 0 ) ) {
continue;
}xp=drawingPanel.xToPix$D(xp);
yp=drawingPanel.yToPix$D(yp);
if (marker == 2 || marker == 8  || marker == 7 ) {
shape=Clazz.new_($I$(10,1).c$$D$D$D$D,[xp - radius, yp - radius, size, size]);
} else shape=Clazz.new_($I$(11,1).c$$D$D$D$D,[xp - radius, yp - radius, size, size]);
g2.draw$java_awt_Shape(shape);
}
g2.setColor$java_awt_Color(c);
g2.setStroke$java_awt_Stroke(s);
});

Clazz.newMeth(C$, 'isMarkersVisible$',  function () {
return this.markersVisible || this.isWorkingYColumn$() ;
});

Clazz.newMeth(C$, 'setMarkersVisible$Z',  function (visible) {
if (!visible && this.markersVisible ) {
this.markerType=this.getMarkerShape$();
this.setMarkerShape$I(0);
} else if (visible) {
this.setMarkerShape$I(this.markerType);
}this.markersVisible=visible;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color$java_awt_Color',  function (edgeColor, lineColor) {
var fill=Clazz.new_([edgeColor.getRed$(), edgeColor.getGreen$(), edgeColor.getBlue$(), 100],$I$(8,1).c$$I$I$I$I);
this.setMarkerColor$java_awt_Color$java_awt_Color(fill, edgeColor);
this.setLineColor$java_awt_Color(lineColor);
this.yData.setMarkerColor$java_awt_Color$java_awt_Color(fill, edgeColor);
this.yData.setLineColor$java_awt_Color(lineColor);
});

Clazz.newMeth(C$, 'setConnected$Z',  function (connected) {
C$.superclazz.prototype.setConnected$Z.apply(this, [connected]);
this.yData.setConnected$Z(connected);
});

Clazz.newMeth(C$, 'setMarkerSize$I',  function (size) {
C$.superclazz.prototype.setMarkerSize$I.apply(this, [size]);
this.yData.setMarkerSize$I(size);
});

Clazz.newMeth(C$, 'setMarkerShape$I',  function (shape) {
C$.superclazz.prototype.setMarkerShape$I.apply(this, [shape]);
if (shape != 0) {
this.yData.setMarkerShape$I(shape);
this.markerType=shape;
}});

Clazz.newMeth(C$, 'getYSource$',  function () {
return this.yData;
});

Clazz.newMeth(C$, 'getXSource$',  function () {
return this.xData;
});

Clazz.newMeth(C$, 'setXSource$org_opensourcephysics_display_Dataset',  function (xDataset) {
this.xData=xDataset;
this.clear$();
var x=this.xData.isShifted$() ? this.xData.getYPoints$() : this.xData.getYPointsRaw$();
var y=this.yData.isShifted$() ? this.yData.getYPoints$() : this.yData.getYPointsRaw$();
this.append$DA$DA$I(x, y, Math.min(this.xData.getIndex$(), this.yData.getIndex$()));
this.setXYColumnNames$S$S(this.xData.getYColumnName$(), this.yData.getYColumnName$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "DataCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showFocus=false;
this.unlockedBG=$I$(8).WHITE;
this.lockedBG=Clazz.new_($I$(8,1).c$$I$I$I$I,[255, 220, 0, 30]);
this.hsb=Clazz.array(Float.TYPE, [3]);
},1);

C$.$fields$=[['Z',['showFocus'],'O',['renderer','javax.swing.table.TableCellRenderer','unlockedBG','java.awt.Color','+lockedBG','hsb','float[]']]]

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
var modelCol=this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [col]);
if ((hasFocus || isSelected ) && modelCol > 0 ) {
this.b$['org.opensourcephysics.tools.DataToolTable'].focusRow=row;
this.b$['org.opensourcephysics.tools.DataToolTable'].focusCol=col;
}if (this.b$['org.opensourcephysics.tools.DataToolTable'].selectedBG == null ) {
var c=this.renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, true, false, row, col);
this.b$['org.opensourcephysics.tools.DataToolTable'].selectedBG=c.getBackground$();
this.b$['org.opensourcephysics.tools.DataToolTable'].selectedFG=c.getForeground$();
this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderFG=this.b$['org.opensourcephysics.tools.DataToolTable'].selectedFG.darker$();
$I$(8,"RGBtoHSB$I$I$I$FA",[this.b$['org.opensourcephysics.tools.DataToolTable'].selectedBG.getRed$(), this.b$['org.opensourcephysics.tools.DataToolTable'].selectedBG.getGreen$(), this.b$['org.opensourcephysics.tools.DataToolTable'].selectedBG.getBlue$(), this.hsb]);
var darker=$I$(8).HSBtoRGB$F$F$F(this.hsb[0], this.hsb[1], this.hsb[2] * 0.85);
this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderBG=Clazz.new_($I$(8,1).c$$I,[darker]);
}if (!this.showFocus) {
hasFocus=((col == this.b$['org.opensourcephysics.tools.DataToolTable'].mouseCol) && (row == this.b$['org.opensourcephysics.tools.DataToolTable'].mouseRow) );
}var c=this.renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, isSelected, hasFocus, row, col);
var data=this.b$['org.opensourcephysics.tools.DataToolTable'].dataManager.getDataset$I(modelCol - 1);
if (!isSelected) {
c.setBackground$java_awt_Color(this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.isDeletable$org_opensourcephysics_display_Dataset(data) ? this.unlockedBG : this.lockedBG);
}return c;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "LabelRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.setHorizontalAlignment$I(4);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
this.setText$S((value == null ) ? null : value.toString());
this.setEnabled$Z(true);
var selected=false;
if (table === this.b$['org.opensourcephysics.tools.DataToolTable'] ) {
this.setEnabled$Z((row < this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], []) - 1) || !this.b$['org.opensourcephysics.tools.DataToolTable'].isEmptyRow$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [row]) );
var rows=this.b$['javax.swing.JTable'].getSelectedRows$.apply(this.b$['javax.swing.JTable'], []);
for (var i=0; i < rows.length; i++) {
if (rows[i] == row) {
selected=true;
break;
}}
}this.setForeground$java_awt_Color(selected ? this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderFG : $I$(8).black);
this.setBackground$java_awt_Color(selected ? this.b$['org.opensourcephysics.tools.DataToolTable'].selectedHeaderBG : this.b$['org.opensourcephysics.tools.DataToolTable'].unselectedBG);
return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "DataToolTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataTable','.OSPDataTableModel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tab','org.opensourcephysics.tools.DataToolTab']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return (this.columnCount >= 0 ? this.columnCount : (this.columnCount=1 + this.b$['org.opensourcephysics.tools.DataToolTable'].dataManager.getColumnCount$()));
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (col) {
return (col == 0 ? Clazz.getClass(Integer) : Clazz.getClass(Double));
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
return (column >= this.getColumnCount$() ? null : column == 0 ? Integer.valueOf$I(this.getModelRow$I(row)) : C$.superclazz.prototype.getValueAt$I$I.apply(this, [row, column]));
});

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
if (col >= this.getColumnCount$()) {
return "unknown";
}if (col == 0) {
return $I$(12).rowName;
}var name=this.tab.dataManager.getColumnName$I(col - 1);
if (this.tab.originShiftEnabled && this.tab.plot != null  ) {
name=name + "`";
}return name;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
if (value == null ) {
return;
}var data=this.b$['org.opensourcephysics.tools.DataToolTable'].dataManager.getDataset$I(col - 1);
var y=data.getYPoints$();
var val=NaN;
if (value !== "" ) {
try {
val=Double.parseDouble$S(value.toString());
if (y[row] == val ) {
return;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}if (Double.isNaN$D(val) && Double.isNaN$D(y[row]) ) {
return;
}var name=data.getYColumnName$();
var rows=Clazz.array(Integer.TYPE, -1, [row]);
var map=Clazz.new_($I$(13,1));
map.put$O$O(name, Clazz.array(Double.TYPE, -1, [val]));
var old=this.b$['org.opensourcephysics.tools.DataToolTable'].replaceCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, map]);
var edit=Clazz.new_([this, null, 5, name, rows, Clazz.array($I$(13), -1, [old, map])],$I$(14,1).c$$I$S$O$O);
this.tab.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
});

Clazz.newMeth(C$, 'isElementEditable$I$I',  function (row, col) {
return (col > 0 && this.tab.isUserEditable$() );
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "DataEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.field=Clazz.new_($I$(15,1));
},1);

C$.$fields$=[['Z',['isFunction'],'I',['column'],'O',['field','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.field.setHorizontalAlignment$I(4);
this.field.setBorder$javax_swing_border_Border($I$(7).createEmptyBorder$I$I$I$I(0, 1, 1, 0));
this.field.setSelectionColor$java_awt_Color(Clazz.new_($I$(8,1).c$$I$I$I,[204, 255, 255]));
this.field.setCaretColor$java_awt_Color($I$(8).red);
this.field.addKeyListener$java_awt_event_KeyListener(((P$.DataToolTable$DataEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$DataEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
} else if (this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].field.isEnabled$()) {
this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].field.setBackground$java_awt_Color($I$(8).yellow);
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.DataToolTable$DataEditor$1)));
this.field.addActionListener$java_awt_event_ActionListener(((P$.DataToolTable$DataEditor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTable$DataEditor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(17,"invokeLater$Runnable",[((P$.DataToolTable$DataEditor$lambda1$2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTable$DataEditor$lambda1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].editAction$java_util_EventObject$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'], [this.$finals$.e, true]);
});
})()
), Clazz.new_(P$.DataToolTable$DataEditor$lambda1$2.$init$,[this, {e:e}]))]);
});
})()
), Clazz.new_(P$.DataToolTable$DataEditor$lambda1.$init$,[this, null])));
this.field.addFocusListener$java_awt_event_FocusListener(((P$.DataToolTable$DataEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$DataEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].field.getBackground$() !== $I$(8).white ) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].field.selectAll$();
});
})()
), Clazz.new_($I$(18,1),[this, null],P$.DataToolTable$DataEditor$2)));
this.field.addMouseListener$java_awt_event_MouseListener(((P$.DataToolTable$DataEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTable$DataEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(3).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['javax.swing.AbstractCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
this.b$['org.opensourcephysics.tools.DataToolTable'].tableMouseListener.mousePressed$java_awt_event_MouseEvent(e);
}});
})()
), Clazz.new_($I$(19,1),[this, null],P$.DataToolTable$DataEditor$3)));
}, 1);

Clazz.newMeth(C$, 'editAction$java_util_EventObject$Z',  function (e, isEnd) {
var row=(isEnd ? this.b$['org.opensourcephysics.display.DataTable'].getModelRow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [this.b$['org.opensourcephysics.tools.DataToolTable'].focusRow]) + 1 : this.b$['org.opensourcephysics.tools.DataToolTable'].focusRow);
if (isEnd) {
this.stopCellEditing$();
if (row == this.b$['org.opensourcephysics.display.DataTable'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DataTable'], [])) {
this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [Clazz.array(Integer.TYPE, -1, [row]), null]);
}row=this.b$['org.opensourcephysics.display.DataTable'].getViewRow$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [row]);
this.b$['javax.swing.JTable'].changeSelection$I$I$Z$Z.apply(this.b$['javax.swing.JTable'], [row, this.column, false, false]);
}var r=row;
$I$(17,"invokeLater$Runnable",[((P$.DataToolTable$DataEditor$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTable$DataEditor$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['javax.swing.JTable'].editCellAt$I$I$java_util_EventObject.apply(this.b$['javax.swing.JTable'], [this.$finals$.r, this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].column, this.$finals$.e]);
this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].field.requestFocus$.apply(this.b$['org.opensourcephysics.tools.DataToolTable.DataEditor'].field, []);
});
})()
), Clazz.new_(P$.DataToolTable$DataEditor$lambda2.$init$,[this, {e:e,r:r}]))]);
});

Clazz.newMeth(C$, 'setColumn$I',  function (col) {
this.column=col;
var modelCol=this.b$['org.opensourcephysics.display.DataTable'].convertColumnIndexToModel$I.apply(this.b$['org.opensourcephysics.display.DataTable'], [col]);
var data=this.b$['org.opensourcephysics.tools.DataToolTable'].dataManager.getDataset$I(modelCol - 1);
this.isFunction=(Clazz.instanceOf(data, "org.opensourcephysics.display.DataFunction"));
});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, col) {
if (this.isFunction) {
this.b$['org.opensourcephysics.tools.DataToolTable'].showDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
return null;
}this.b$['org.opensourcephysics.tools.DataToolTable'].focusRow=row;
this.b$['org.opensourcephysics.tools.DataToolTable'].focusCol=col;
if (Clazz.instanceOf(value, "java.lang.Double") && Double.isNaN$D((value).doubleValue$()) ) value=null;
this.field.setText$S((value == null ) ? "" : String.valueOf$O(value));
this.field.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.DataToolTable'].getFont$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []));
return this.field;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
if ((Clazz.instanceOf(e, "java.awt.event.MouseEvent")) && (e).getClickCount$() == 2 ) {
return true;
}if (Clazz.instanceOf(e, "java.awt.event.ActionEvent")) {
return true;
}if (Clazz.instanceOf(e, "java.awt.event.KeyEvent")) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
this.b$['org.opensourcephysics.tools.DataToolTable'].requestFocusInWindow$.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], []);
this.field.setBackground$java_awt_Color($I$(8).white);
return this.field.getText$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTable, "TableEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['editType'],'S',['columnName'],'O',['target','java.lang.Object','+value','map','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$I$S$O$O',  function (type, colName, target, value) {
Clazz.super_(C$, this);
this.editType=type;
this.columnName=colName;
this.target=target;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
switch (this.editType) {
case 8:
{
try {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.setDelimitedData$S$S(this.target.toString(), null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
break;
}case 0:
{
this.b$['org.opensourcephysics.tools.DataToolTable'].renameColumn$S$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.columnName, this.value.toString()]);
break;
}case 1:
{
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteColumn$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.columnName]);
break;
}case 2:
{
var data=this.value;
var col=(this.target).intValue$();
this.b$['org.opensourcephysics.tools.DataToolTable'].insertColumn$org_opensourcephysics_display_Dataset$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [data, col]);
break;
}case 3:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
break;
}case 4:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].insertCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
break;
}case 6:
{
var rows=this.target;
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteRows$IA.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows]);
break;
}case 7:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
break;
}case 5:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].replaceCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values[0]]);
break;
}}
if (this.b$['org.opensourcephysics.tools.DataToolTable'].trimEmptyRows$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [0])) this.b$['org.opensourcephysics.tools.DataToolTable'].refreshTable$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [16896]);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
switch (this.editType) {
case 8:
{
try {
this.b$['org.opensourcephysics.tools.DataToolTable'].dataToolTab.setDelimitedData$S$S(this.value.toString(), null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
break;
}case 0:
{
this.b$['org.opensourcephysics.tools.DataToolTable'].renameColumn$S$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.value.toString(), this.columnName]);
break;
}case 1:
{
var data=this.value;
var col=(this.target).intValue$();
this.b$['org.opensourcephysics.tools.DataToolTable'].insertColumn$org_opensourcephysics_display_Dataset$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [data, col]);
break;
}case 2:
{
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteColumn$S.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [this.columnName]);
break;
}case 3:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].insertCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
break;
}case 4:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
break;
}case 6:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].insertRows$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values]);
break;
}case 7:
{
var rows=this.target;
this.b$['org.opensourcephysics.tools.DataToolTable'].deleteRows$IA.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows]);
break;
}case 5:
{
var rows=this.target;
var values=this.value;
this.b$['org.opensourcephysics.tools.DataToolTable'].replaceCells$IA$java_util_HashMap.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [rows, values[1]]);
break;
}}
if (this.b$['org.opensourcephysics.tools.DataToolTable'].trimEmptyRows$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [0])) this.b$['org.opensourcephysics.tools.DataToolTable'].refreshTable$I.apply(this.b$['org.opensourcephysics.tools.DataToolTable'], [16896]);
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return "Edit";
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
