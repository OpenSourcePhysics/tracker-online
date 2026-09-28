(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.display.DataTable','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.DataToolTable','java.awt.Color','org.opensourcephysics.display.CellBorder','javax.swing.JPanel','java.awt.GridLayout','org.opensourcephysics.display.DrawingPanel','org.opensourcephysics.display.Dataset','javax.swing.SpinnerListModel','org.opensourcephysics.display.TeXParser',['org.opensourcephysics.tools.DataToolPropsTable','.MarkerEditor'],'java.util.HashMap',['org.opensourcephysics.tools.DataToolPropsTable','.PropsTableModel'],'javax.swing.event.MouseInputAdapter','javax.swing.SwingUtilities','javax.swing.event.TableModelEvent','javax.swing.JLabel',['org.opensourcephysics.tools.DataToolPropsTable','.PropsRenderer'],'javax.swing.JOptionPane','javax.swing.JDialog','javax.swing.JButton','javax.swing.JSpinner','javax.swing.SpinnerNumberModel','javax.swing.JCheckBox','javax.swing.BorderFactory','javax.swing.JColorChooser','java.awt.BorderLayout','javax.swing.Box','org.opensourcephysics.tools.FontSizer','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataToolPropsTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTable');
C$.$classes$=[['PropsTableModel',0],['PropsRenderer',0],['MarkerEditor',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.markerEditor=Clazz.new_($I$(12,1),[this, null]);
this.markerDataset=Clazz.new_($I$(9,1));
this.lineDataset=Clazz.new_($I$(9,1));
this.markerRow=0;
this.lineRow=1;
this.styleRow=2;
this.axisRow=3;
this.htCellRenderers=Clazz.new_($I$(13,1));
},1);

C$.$fields$=[['Z',['labelDrawn'],'I',['markerRow','lineRow','styleRow','axisRow'],'O',['dataTable','org.opensourcephysics.tools.DataToolTable','propsModel','org.opensourcephysics.tools.DataToolPropsTable.PropsTableModel','labelRenderer','org.opensourcephysics.tools.DataToolTable.LabelRenderer','markerEditor','org.opensourcephysics.tools.DataToolPropsTable.MarkerEditor','styleDialog','javax.swing.JDialog','markerDataset','org.opensourcephysics.display.Dataset','+lineDataset','closeButton','javax.swing.JButton','shapeNames','String[]','shapeNumbers','int[]','shapeLabel','javax.swing.JLabel','+sizeLabel','markerVisCheckbox','javax.swing.JCheckBox','+lineVisCheckbox','markerColorButton','javax.swing.JButton','+lineColorButton','colorPopup','javax.swing.JDialog','shapeSpinner','javax.swing.JSpinner','+sizeSpinner','htCellRenderers','java.util.HashMap']]
,['O',['LIGHT_RED','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DataToolTable',  function (table) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.dataTable=table;
this.propsModel=Clazz.new_($I$(14,1),[this, null]);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DataToolPropsTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var col=this.b$['javax.swing.JTable'].columnAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
var labelCol=this.b$['javax.swing.JTable'].convertColumnIndexToView$I.apply(this.b$['javax.swing.JTable'], [0]);
var xCol=(labelCol == 0) ? 1 : 0;
var row=this.b$['javax.swing.JTable'].rowAtPoint$java_awt_Point.apply(this.b$['javax.swing.JTable'], [e.getPoint$()]);
if (col == labelCol || col == xCol  || row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].axisRow ) {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [null]);
} else {
if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerRow) {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [$I$(2).getString$S("DataToolPropsTable.Markers.Tooltip")]);
} else if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineRow) {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [$I$(2).getString$S("DataToolPropsTable.Lines.Tooltip")]);
} else if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleRow) {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [$I$(2).getString$S("DataToolPropsTable.Style.Tooltip")]);
}}});
})()
), Clazz.new_($I$(15,1),[this, null],P$.DataToolPropsTable$1)));
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.dataTable.getColumnModel$().addColumnModelListener$javax_swing_event_TableColumnModelListener(((P$.DataToolPropsTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableColumnModelListener', 1);

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
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].refreshTable$.apply(this.b$['org.opensourcephysics.tools.DataToolPropsTable'], []);
});

Clazz.newMeth(C$, 'columnMoved$javax_swing_event_TableColumnModelEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].refreshTable$.apply(this.b$['org.opensourcephysics.tools.DataToolPropsTable'], []);
});
})()
), Clazz.new_(P$.DataToolPropsTable$2.$init$,[this, null])));
this.setModel$javax_swing_table_TableModel(this.propsModel);
this.setGridColor$java_awt_Color($I$(4).blue);
this.setTableHeader$javax_swing_table_JTableHeader(null);
this.labelRenderer=this.dataTable.labelRenderer;
this.setAutoResizeMode$I(0);
this.refreshCellWidths$();
});

Clazz.newMeth(C$, 'getPropLabels',  function () {
return Clazz.array(String, -1, [$I$(2).getString$S("DataToolPropsTable.Label.Markers"), $I$(2).getString$S("DataToolPropsTable.Label.Lines"), $I$(2).getString$S("DataToolPropsTable.Label.Style"), $I$(2).getString$S("DataToolPropsTable.Label.Axis")]);
}, p$1);

Clazz.newMeth(C$, 'refreshTable$',  function () {
$I$(16,"invokeLater$Runnable",[((P$.DataToolPropsTable$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolPropsTable$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['javax.swing.JTable'].tableChanged$javax_swing_event_TableModelEvent.apply(this.b$['javax.swing.JTable'], [Clazz.new_($I$(17,1).c$$javax_swing_table_TableModel$I,[this.b$['org.opensourcephysics.tools.DataToolPropsTable'].propsModel, -1])]);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].refreshCellWidths$.apply(this.b$['org.opensourcephysics.tools.DataToolPropsTable'], []);
});
})()
), Clazz.new_(P$.DataToolPropsTable$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'addColumn$javax_swing_table_TableColumn',  function (aColumn) {
var modelColumn=aColumn.getModelIndex$();
if (aColumn.getHeaderValue$() == null ) {
var columnName=this.getModel$().getColumnName$I(modelColumn);
aColumn.setHeaderValue$O(columnName);
}var m=this.getColumnModel$();
for (var i=m.getColumnCount$(); --i >= 0; ) {
if (m.getColumn$I(i).getModelIndex$() == modelColumn) return;
}
m.addColumn$javax_swing_table_TableColumn(aColumn);
});

Clazz.newMeth(C$, 'refreshCellWidths$',  function () {
if (this.getColumnCount$() != this.dataTable.getColumnCount$()) {
return;
}this.refreshLabelColumnWidth$();
this.htCellRenderers.clear$();
for (var i=0; i < this.getColumnCount$(); i++) {
var propColumn=this.getColumnModel$().getColumn$I(i);
var w=this.dataTable.getColumnModel$().getColumn$I(i).getWidth$();
propColumn.setMaxWidth$I(w);
propColumn.setMinWidth$I(w);
propColumn.setWidth$I(w);
}
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshLabelColumnWidth$();
this.tableChanged$javax_swing_event_TableModelEvent(null);
this.refreshTable$();
});

Clazz.newMeth(C$, 'refreshLabelColumnWidth$',  function () {
var w=40;
var labels=p$1.getPropLabels.apply(this, []);
for (var i=0; i < labels.length; i++) {
var label=Clazz.new_($I$(18,1).c$$S,[labels[i]]);
label.setFont$java_awt_Font(this.labelRenderer.getFont$());
var lw=label.getMinimumSize$().width;
w=Math.max(w, lw);
}
this.dataTable.setLabelColumnWidth$I(w + 5);
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var i=this.dataTable.convertColumnIndexToModel$I(column);
if (i == 0) {
return this.labelRenderer;
}var c=this.dataTable.getColumnModel$().getColumn$I(column);
var name=row + " " + c.getHeaderValue$().toString() ;
var pr=this.htCellRenderers.get$O(name);
if (pr == null  || pr.width != c.getWidth$() ) this.htCellRenderers.put$O$O(name, pr=Clazz.new_($I$(19,1),[this, null]));
return (row < 2 && column > 1  ? this.getDefaultRenderer$Class(Clazz.getClass(Boolean)) : pr);
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, column) {
if (row == this.styleRow) {
return this.markerEditor;
}return this.getDefaultEditor$Class(Clazz.getClass(Boolean));
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
this.setRowHeight$I(font.getSize$() + 4);
if (this.dataTable != null ) {
this.refreshLabelColumnWidth$();
}});

Clazz.newMeth(C$, 'getStyleDialog$',  function () {
if (this.styleDialog != null ) return this.styleDialog;
var frame=$I$(20).getFrameForComponent$java_awt_Component(this.dataTable);
this.styleDialog=Clazz.new_($I$(21,1).c$$java_awt_Frame$Z,[frame, true]);
this.closeButton=Clazz.new_($I$(22,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolPropsTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.setVisible$Z(false);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerEditor.stopCellEditing$();
});
})()
), Clazz.new_(P$.DataToolPropsTable$3.$init$,[this, null])));
this.shapeNames=Clazz.array(String, -1, [$I$(2).getString$S("Shape.Circle"), $I$(2).getString$S("Shape.Square"), $I$(2).getString$S("Shape.Pixel"), $I$(2).getString$S("Shape.Bar"), $I$(2).getString$S("Shape.Post")]);
this.shapeNumbers=Clazz.array(Integer.TYPE, -1, [1, 2, 6, 7, 8]);
var model=Clazz.new_($I$(10,1).c$$OA,[this.shapeNames]);
this.shapeSpinner=((P$.DataToolPropsTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSpinner'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerColorButton.getPreferredSize$().height;
dim.width+=2;
return dim;
});
})()
), Clazz.new_($I$(23,1).c$$javax_swing_SpinnerModel,[this, null, model],P$.DataToolPropsTable$4));
this.shapeSpinner.setToolTipText$S($I$(2).getString$S("Spinner.MarkerShape.ToolTip"));
this.shapeSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DataToolPropsTable$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var shape=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeSpinner.getValue$().toString();
for (var i=0; i < this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNames.length; i++) {
if (this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNames[i].equals$O(shape)) {
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.getName$());
if (working != null ) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.dataToolTab.tabChanged=true;
working.setMarkerShape$I(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNumbers[i]);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerDataset.setMarkerShape$I(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNumbers[i]);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.repaint$();
this.$finals$.frame.repaint$();
}}}
});
})()
), Clazz.new_(P$.DataToolPropsTable$5.$init$,[this, {frame:frame}])));
this.sizeSpinner=((P$.DataToolPropsTable$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSpinner'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeSpinner.getPreferredSize$();
});
})()
), Clazz.new_([this, null, Clazz.new_($I$(24,1).c$$I$I$I$I,[2, 1, 6, 1])],$I$(23,1).c$$javax_swing_SpinnerModel,P$.DataToolPropsTable$6));
this.sizeSpinner.setToolTipText$S($I$(2).getString$S("Spinner.MarkerSize.ToolTip"));
this.sizeSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DataToolPropsTable$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var size=(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].sizeSpinner.getValue$()).intValue$();
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.getName$());
if (working != null ) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.dataToolTab.tabChanged=true;
working.setMarkerSize$I(size);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerDataset.setMarkerSize$I(size);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.repaint$();
this.$finals$.frame.repaint$();
}});
})()
), Clazz.new_(P$.DataToolPropsTable$7.$init$,[this, {frame:frame}])));
this.markerVisCheckbox=Clazz.new_([$I$(2).getString$S("DataToolPropsTable.Dialog.Checkbox.Visible")],$I$(25,1).c$$S);
this.markerVisCheckbox.setHorizontalAlignment$I(0);
this.markerVisCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolPropsTable$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.getName$());
if (working != null ) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.dataToolTab.tabChanged$Z(true);
working.setMarkersVisible$Z(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerVisCheckbox.isSelected$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.repaint$();
this.$finals$.frame.repaint$();
}this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_(P$.DataToolPropsTable$8.$init$,[this, {frame:frame}])));
this.lineVisCheckbox=Clazz.new_([$I$(2).getString$S("DataToolPropsTable.Dialog.Checkbox.Visible")],$I$(25,1).c$$S);
this.lineVisCheckbox.setHorizontalAlignment$I(0);
this.lineVisCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolPropsTable$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.getName$());
if (working != null ) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.dataToolTab.tabChanged$Z(true);
working.setConnected$Z(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineVisCheckbox.isSelected$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.repaint$();
this.$finals$.frame.repaint$();
}this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_(P$.DataToolPropsTable$9.$init$,[this, {frame:frame}])));
var markerPlot=((P$.DataToolPropsTable$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display.DrawingPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerColorButton.getPreferredSize$();
dim.width-=20;
return dim;
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.DataToolPropsTable$10));
markerPlot.setShowCoordinates$Z(false);
markerPlot.setBorder$javax_swing_border_Border($I$(26).createEtchedBorder$());
markerPlot.setBackground$java_awt_Color($I$(4).white);
markerPlot.setAntialiasShapeOn$Z(true);
this.markerDataset.append$D$D(0, 0);
this.markerDataset.setName$S("marker");
markerPlot.addDrawable$org_opensourcephysics_display_Drawable(this.markerDataset);
var linePlot=((P$.DataToolPropsTable$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display.DrawingPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.$finals$.markerPlot.getPreferredSize$();
});
})()
), Clazz.new_($I$(8,1),[this, {markerPlot:markerPlot}],P$.DataToolPropsTable$11));
linePlot.setShowCoordinates$Z(false);
linePlot.setBorder$javax_swing_border_Border($I$(26).createEtchedBorder$());
linePlot.setBackground$java_awt_Color($I$(4).white);
linePlot.setAntialiasShapeOn$Z(true);
this.lineDataset.append$D$D(-1, 1);
this.lineDataset.append$D$D(1, -1);
this.lineDataset.setMarkerShape$I(0);
this.lineDataset.setConnected$Z(true);
linePlot.addDrawable$org_opensourcephysics_display_Drawable(this.lineDataset);
this.shapeLabel=Clazz.new_([$I$(2).getString$S("DataToolPropsTable.Dialog.Label.Shape")],$I$(18,1).c$$S);
this.sizeLabel=Clazz.new_([$I$(2).getString$S("DataToolPropsTable.Dialog.Label.Size")],$I$(18,1).c$$S);
var cc=Clazz.new_($I$(27,1));
cc.getSelectionModel$().addChangeListener$javax_swing_event_ChangeListener(((P$.DataToolPropsTable$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var color=this.$finals$.cc.getColor$();
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.getName$());
if (working != null ) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.dataToolTab.tabChanged=true;
if (this.b$['org.opensourcephysics.tools.DataToolPropsTable'].colorPopup.getName$().equals$O("marker")) {
working.setColor$java_awt_Color$java_awt_Color(color, working.getLineColor$());
} else {
working.setColor$java_awt_Color$java_awt_Color(working.getEdgeColor$(), color);
}this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerDataset.setMarkerColor$java_awt_Color$java_awt_Color(working.getFillColor$(), working.getEdgeColor$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineDataset.setLineColor$java_awt_Color(working.getLineColor$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].colorPopup.setVisible$Z(false);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].styleDialog.repaint$();
this.$finals$.frame.repaint$();
}});
})()
), Clazz.new_(P$.DataToolPropsTable$12.$init$,[this, {frame:frame,cc:cc}])));
this.colorPopup=Clazz.new_($I$(21,1).c$$java_awt_Dialog$Z,[this.styleDialog, true]);
this.colorPopup.setUndecorated$Z(true);
this.colorPopup.getContentPane$().add$java_awt_Component(cc.getChooserPanels$()[0]);
this.colorPopup.pack$();
var colorAction=((P$.DataToolPropsTable$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var b=e.getSource$();
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].colorPopup.setName$S((b === this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerColorButton ) ? "marker" : "line");
var loc=b.getLocationOnScreen$();
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].colorPopup.setLocation$I$I(loc.x, loc.y + b.getSize$().height);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].colorPopup.setVisible$Z(true);
});
})()
), Clazz.new_(P$.DataToolPropsTable$13.$init$,[this, null]));
this.markerColorButton=Clazz.new_([$I$(2).getString$S("DataToolPropsTable.Dialog.Button.Color")],$I$(22,1).c$$S);
this.markerColorButton.addActionListener$java_awt_event_ActionListener(colorAction);
this.lineColorButton=Clazz.new_([$I$(2).getString$S("DataToolPropsTable.Dialog.Button.Color")],$I$(22,1).c$$S);
this.lineColorButton.addActionListener$java_awt_event_ActionListener(colorAction);
var contentPane=Clazz.new_([Clazz.new_($I$(28,1))],$I$(6,1).c$$java_awt_LayoutManager);
var box=$I$(29).createVerticalBox$();
contentPane.add$java_awt_Component(box);
var markerBox=$I$(29).createVerticalBox$();
box.add$java_awt_Component(markerBox);
markerBox.setBorder$javax_swing_border_Border($I$(26,"createTitledBorder$S",[$I$(2).getString$S("DataToolPropsTable.Dialog.Label.Markers")]));
var markerNorth=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
markerBox.add$java_awt_Component(markerNorth);
var markerPlotPanel=Clazz.new_($I$(6,1));
markerPlotPanel.add$java_awt_Component(markerPlot);
markerNorth.add$java_awt_Component(markerPlotPanel);
var markerButtonPanel=Clazz.new_($I$(6,1));
markerButtonPanel.add$java_awt_Component(this.markerColorButton);
markerNorth.add$java_awt_Component(markerButtonPanel);
markerNorth.add$java_awt_Component(this.markerVisCheckbox);
var markerCenter=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
markerBox.add$java_awt_Component(markerCenter);
var sizePanel=Clazz.new_($I$(6,1));
sizePanel.add$java_awt_Component(this.sizeLabel);
sizePanel.add$java_awt_Component(this.sizeSpinner);
markerCenter.add$java_awt_Component(sizePanel);
var shapePanel=Clazz.new_($I$(6,1));
shapePanel.add$java_awt_Component(this.shapeLabel);
shapePanel.add$java_awt_Component(this.shapeSpinner);
markerCenter.add$java_awt_Component(shapePanel);
var lineBox=$I$(29).createVerticalBox$();
box.add$java_awt_Component(lineBox);
lineBox.setBorder$javax_swing_border_Border($I$(26,"createTitledBorder$S",[$I$(2).getString$S("DataToolPropsTable.Dialog.Label.Lines")]));
var lineNorth=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
lineBox.add$java_awt_Component(lineNorth);
var linePlotPanel=Clazz.new_($I$(6,1));
linePlotPanel.add$java_awt_Component(linePlot);
lineNorth.add$java_awt_Component(linePlotPanel);
var lineButtonPanel=Clazz.new_($I$(6,1));
lineButtonPanel.add$java_awt_Component(this.lineColorButton);
lineNorth.add$java_awt_Component(lineButtonPanel);
lineNorth.add$java_awt_Component(this.lineVisCheckbox);
var buttonPanel=Clazz.new_($I$(6,1));
buttonPanel.add$java_awt_Component(this.closeButton);
box.add$java_awt_Component(buttonPanel);
this.styleDialog.setContentPane$java_awt_Container(contentPane);
$I$(30,"setFonts$O$I",[this.styleDialog, $I$(30).getLevel$()]);
this.styleDialog.pack$();
var dim=$I$(31).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.styleDialog.getWidth$())/2|0);
var p=this.getLocationOnScreen$();
var y=Math.max(0, p.y - this.styleDialog.getHeight$());
this.styleDialog.setLocation$I$I(x, y);
return this.styleDialog;
});

Clazz.newMeth(C$, 'dispose$',  function () {
for (var r, $r = this.htCellRenderers.values$().iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
if (r != null ) r.dispose$();
}
});

C$.$static$=function(){C$.$static$=0;
C$.LIGHT_RED=Clazz.new_($I$(4,1).c$$I$I$I,[255, 153, 153]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolPropsTable, "PropsTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return $I$(1,"unshiftName$S",[this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.getColumnName$I(col)]);
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return 4;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.getModel$().getColumnCount$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
var labelCol=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.convertColumnIndexToView$I(0);
if (col == labelCol) {
return p$1.getPropLabels.apply(this.b$['org.opensourcephysics.tools.DataToolPropsTable'], [])[row];
}var xCol=(labelCol == 0) ? 1 : 0;
var yCol=(labelCol < 2) ? 2 : 1;
if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].axisRow) {
if (col == xCol) {
return $I$(2).getString$S("DataToolPropsTable.Axis.Horizontal");
}return $I$(2).getString$S("DataToolPropsTable.Axis.Vertical");
}var name=this.getColumnName$I(col);
var data=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(name);
if (data == null ) {
data=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.getWorkingData$S(name);
}if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerRow) {
if ((col == yCol) && (data != null ) ) {
return Boolean.TRUE;
}if (col == 0) {
return Boolean.FALSE;
}return Boolean.valueOf$Z(data != null  && data.isMarkersVisible$() );
}if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineRow) {
if (col == 0) {
return Boolean.FALSE;
}return Boolean.valueOf$Z(data != null  && data.isConnected$() );
}if (col == xCol) {
return null;
}return data;
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].axisRow) {
return false;
}var labelCol=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.convertColumnIndexToView$I(0);
var xCol=(labelCol == 0) ? 1 : 0;
var yCol=(labelCol < 2) ? 2 : 1;
if ((col == labelCol) || (col == xCol) ) {
return false;
}if ((col == yCol) && (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerRow) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
if (Clazz.instanceOf(value, "java.lang.Boolean")) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.dataToolTab.tabChanged$Z(true);
var selected=(value).booleanValue$();
var name=this.getColumnName$I(col);
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(name);
if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerRow) {
working.setMarkersVisible$Z(selected);
} else if (row == this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineRow) {
working.setConnected$Z(selected);
}var labelCol=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.convertColumnIndexToView$I(0);
var xCol=(labelCol == 0) ? 1 : 0;
var xName=this.getColumnName$I(xCol);
if ((working.getXSource$() == null ) || !working.getXSource$().getYColumnName$().equals$O(xName) ) {
working.setXSource$org_opensourcephysics_display_Dataset((this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(xName)).getYSource$());
}this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["display", null, name]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolPropsTable, "PropsRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width'],'O',['panel','javax.swing.JPanel','plot','org.opensourcephysics.display.DrawingPanel','markerset','org.opensourcephysics.display.Dataset','+lineset']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
var labelCol=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.convertColumnIndexToView$I(0);
var xCol=(labelCol == 0) ? 1 : 0;
var yCol=(labelCol < 2) ? 2 : 1;
var color=(col == xCol) ? $I$(3).xAxisColor : (col == yCol) ? $I$(3).yAxisColor : $I$(4).white;
if (value == null ) {
return null;
}if (Clazz.instanceOf(value, "java.lang.String")) {
var c=this.b$['javax.swing.JTable'].getDefaultRenderer$Class.apply(this.b$['javax.swing.JTable'], [Clazz.getClass(String)]).getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.b$['org.opensourcephysics.tools.DataToolPropsTable'], value, false, false, 0, 0);
var label=c;
label.setHorizontalAlignment$I(0);
label.setBackground$java_awt_Color(color);
label.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(4,1).c$$I$I$I,[240, 240, 240])],$I$(5,1).c$$java_awt_Color));
return label;
}if (Clazz.instanceOf(value, "org.opensourcephysics.tools.DataToolTable.WorkingDataset")) {
if (this.panel == null ) {
this.width=this.b$['javax.swing.JTable'].getColumnModel$.apply(this.b$['javax.swing.JTable'], []).getColumn$I(col).getWidth$();
this.panel=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.panel.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(4,1).c$$I$I$I,[240, 240, 240])],$I$(5,1).c$$java_awt_Color));
this.panel.setBackground$java_awt_Color((row != this.b$['org.opensourcephysics.tools.DataToolPropsTable'].axisRow) ? $I$(4).white : color);
this.plot=Clazz.new_($I$(8,1)).dref$O(this);
this.plot.setBackground$java_awt_Color($I$(4).white);
this.plot.setAntialiasShapeOn$Z(true);
this.plot.setPreferredMinMax$D$D$D$D(-1, 1, 0, 2);
this.markerset=Clazz.new_($I$(9,1));
this.markerset.append$D$D(0, 1);
this.lineset=Clazz.new_($I$(9,1));
this.lineset.setMarkerShape$I(0);
this.lineset.setConnected$Z(true);
this.lineset.append$D$D(-1, 2);
this.lineset.append$D$D(1, 0);
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.markerset);
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.lineset);
this.panel.add$java_awt_Component(this.plot);
}var working=value;
this.markerset.setMarkerColor$java_awt_Color$java_awt_Color(working.getFillColor$(), working.getEdgeColor$());
this.markerset.setMarkerSize$I(working.getMarkerSize$());
this.markerset.setMarkerShape$I(working.markerType);
this.lineset.setLineColor$java_awt_Color(working.getLineColor$());
var markerVis=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].propsModel.getValueAt$I$I(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerRow, col);
var lineVis=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].propsModel.getValueAt$I$I(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineRow, col);
this.plot.clear$();
if (markerVis.booleanValue$()) {
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.markerset);
}if (lineVis.booleanValue$()) {
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.lineset);
}return this.panel;
}return null;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.plot != null ) this.plot.dispose$();
this.plot=null;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolPropsTable, "MarkerEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, col) {
var dialog=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].getStyleDialog$.apply(this.b$['org.opensourcephysics.tools.DataToolPropsTable'], []);
var name=this.b$['javax.swing.JTable'].getColumnName$I.apply(this.b$['javax.swing.JTable'], [col]);
var working=this.b$['org.opensourcephysics.tools.DataToolPropsTable'].dataTable.workingMap.get$O(name);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerDataset.setMarkerColor$java_awt_Color$java_awt_Color(working.getFillColor$(), working.getEdgeColor$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerDataset.setMarkerSize$I(working.getMarkerSize$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerDataset.setMarkerShape$I(working.markerType);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineDataset.setLineColor$java_awt_Color(working.getLineColor$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].closeButton.setText$S($I$(2).getString$S("Button.OK"));
dialog.setName$S(null);
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].sizeSpinner.setToolTipText$S($I$(2).getString$S("Spinner.MarkerSize.ToolTip"));
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].sizeSpinner.setValue$O(Integer.valueOf$I(working.getMarkerSize$()));
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeSpinner.setToolTipText$S($I$(2).getString$S("Spinner.MarkerShape.ToolTip"));
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNames=Clazz.array(String, -1, [$I$(2).getString$S("Shape.Circle"), $I$(2).getString$S("Shape.Square"), $I$(2).getString$S("Shape.Pixel"), $I$(2).getString$S("Shape.Bar"), $I$(2).getString$S("Shape.Post")]);
var model=((P$.DataToolPropsTable$MarkerEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolPropsTable$MarkerEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.SpinnerListModel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getNextValue$',  function () {
var value=C$.superclazz.prototype.getNextValue$.apply(this, []);
if ((value == null ) && (this.getList$().size$() > 0) ) {
value=this.getList$().get$I(0);
}return value;
});

Clazz.newMeth(C$, 'getPreviousValue$',  function () {
var value=C$.superclazz.prototype.getPreviousValue$.apply(this, []);
var n=this.getList$().size$();
if ((value == null ) && (n > 0) ) {
value=this.getList$().get$I(n - 1);
}return value;
});
})()
), Clazz.new_($I$(10,1).c$$OA,[this, null, this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNames],P$.DataToolPropsTable$MarkerEditor$1));
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeSpinner.setModel$javax_swing_SpinnerModel(model);
for (var i=0; i < this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNumbers.length; i++) {
if (this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNumbers[i] == working.markerType) {
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeSpinner.setValue$O(this.b$['org.opensourcephysics.tools.DataToolPropsTable'].shapeNames[i]);
}}
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerVisCheckbox.setSelected$Z(working.isMarkersVisible$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].markerVisCheckbox.setEnabled$Z(!working.isWorkingYColumn$());
this.b$['org.opensourcephysics.tools.DataToolPropsTable'].lineVisCheckbox.setSelected$Z(working.isConnected$());
dialog.setName$S(name);
var $var=$I$(11).removeSubscripting$S(name);
var title=$I$(2).getString$S("DataToolPropsTable.Dialog.Title");
dialog.setTitle$S(title + " \"" + $var + "\"" );
dialog.pack$();
var dim=dialog.getSize$();
dim.width+=6;
dialog.setSize$java_awt_Dimension(dim);
dialog.setVisible$Z(true);
return null;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return null;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
