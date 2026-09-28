(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.frames.PlotFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.DatasetManager','org.opensourcephysics.display.DataTable','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.TeXParser','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.dialogs.ScaleInspector','org.opensourcephysics.display.dialogs.LogAxesInspector','org.opensourcephysics.display.DataTableFrame',['org.opensourcephysics.frames.PlotFrame','.PlotFrameLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlotFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.DrawingFrame');
C$.$classes$=[['PlotFrameLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.datasetManager=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['datasetManager','org.opensourcephysics.display.DatasetManager','tableFrame','org.opensourcephysics.display.DataTableFrame','dataTable','org.opensourcephysics.display.DataTable']]]

Clazz.newMeth(C$, 'getDataTable$',  function () {
if (this.dataTable != null ) return this.dataTable;
this.dataTable=Clazz.new_($I$(4,1));
this.dataTable.add$javax_swing_table_TableModel(this.datasetManager.model);
return this.dataTable;
});

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(5,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.datasetManager);
this.datasetManager.setXPointsLinked$Z(true);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
this.addMenuItems$();
}, 1);

Clazz.newMeth(C$, 'setName$S',  function (name) {
name=$I$(6).parseTeX$S(name);
C$.superclazz.prototype.setName$S.apply(this, [name]);
this.datasetManager.setName$S(name);
});

Clazz.newMeth(C$, 'addMenuItems$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return;
}var helpMenu=this.removeMenu$S($I$(2).getString$S("DrawingFrame.Help_menu_item"));
var menu=this.getMenu$S($I$(2).getString$S("DrawingFrame.Views_menu"));
if (menu == null ) {
menu=Clazz.new_([$I$(2).getString$S("DrawingFrame.Views_menu")],$I$(7,1).c$$S);
menuBar.add$javax_swing_JMenu(menu);
menuBar.validate$();
} else {
menu.addSeparator$();
}if (helpMenu != null ) {
menuBar.add$javax_swing_JMenu(helpMenu);
}var scaleItem=Clazz.new_([$I$(2).getString$S("DrawingFrame.Scale_menu_item")],$I$(8,1).c$$S);
var actionListener=((P$.PlotFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.PlotFrame'].scale$.apply(this.b$['org.opensourcephysics.frames.PlotFrame'], []);
});
})()
), Clazz.new_(P$.PlotFrame$1.$init$,[this, null]));
scaleItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(scaleItem);
var logItem=Clazz.new_([$I$(2).getString$S("DrawingFrame.LogAxes_menu_item")],$I$(8,1).c$$S);
actionListener=((P$.PlotFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.PlotFrame'].logAxes$.apply(this.b$['org.opensourcephysics.frames.PlotFrame'], []);
});
})()
), Clazz.new_(P$.PlotFrame$2.$init$,[this, null]));
logItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(logItem);
menu.addSeparator$();
var tableItem=Clazz.new_([$I$(2).getString$S("DrawingFrame.DataTable_menu_item")],$I$(8,1).c$$S);
tableItem.setAccelerator$javax_swing_KeyStroke($I$(9,"getKeyStroke$I$I",["T".$c(), $I$(10).MENU_SHORTCUT_KEY_MASK]));
actionListener=((P$.PlotFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.PlotFrame'].showDataTable$Z.apply(this.b$['org.opensourcephysics.frames.PlotFrame'], [true]);
});
})()
), Clazz.new_(P$.PlotFrame$3.$init$,[this, null]));
tableItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(tableItem);
if ((this.drawingPanel != null ) && (this.drawingPanel.getPopupMenu$() != null ) ) {
var item=Clazz.new_([$I$(2).getString$S("DrawingFrame.DataTable_menu_item")],$I$(8,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(actionListener);
this.drawingPanel.getPopupMenu$().addSeparator$();
this.drawingPanel.getPopupMenu$().add$javax_swing_JMenuItem(item);
}});

Clazz.newMeth(C$, 'setLogScaleX$Z',  function (log) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setLogScaleX$Z(log);
}});

Clazz.newMeth(C$, 'setLogScaleY$Z',  function (log) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setLogScaleY$Z(log);
}});

Clazz.newMeth(C$, 'scale$',  function () {
var plotInspector=Clazz.new_($I$(11,1).c$$org_opensourcephysics_display_DrawingPanel,[this.drawingPanel]);
plotInspector.setLocationRelativeTo$java_awt_Component(this.drawingPanel);
plotInspector.updateDisplay$();
plotInspector.setVisible$Z(true);
});

Clazz.newMeth(C$, 'logAxes$',  function () {
if (!(Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel"))) {
return;
}var logAxesInspector=Clazz.new_($I$(12,1).c$$org_opensourcephysics_display_PlottingPanel,[this.drawingPanel]);
logAxesInspector.setLocationRelativeTo$java_awt_Component(this.drawingPanel);
logAxesInspector.updateDisplay$();
logAxesInspector.setVisible$Z(true);
});

Clazz.newMeth(C$, 'append$I$D$D',  function (datasetIndex, x, y) {
this.datasetManager.append$I$D$D(datasetIndex, x, y);
this.updateTable$I(8448);
});

Clazz.newMeth(C$, 'append$I$D$D$D$D',  function (datasetIndex, x, y, delx, dely) {
this.datasetManager.append$I$D$D$D$D(datasetIndex, x, y, delx, dely);
this.updateTable$I(8448);
});

Clazz.newMeth(C$, 'append$I$DA$DA',  function (datasetIndex, xpoints, ypoints) {
this.datasetManager.append$I$DA$DA(datasetIndex, xpoints, ypoints);
this.updateTable$I(8448);
});

Clazz.newMeth(C$, 'append$I$DA$DA$DA$DA',  function (datasetIndex, xpoints, ypoints, delx, dely) {
this.datasetManager.append$I$DA$DA$DA$DA(datasetIndex, xpoints, ypoints, delx, dely);
this.updateTable$I(8448);
});

Clazz.newMeth(C$, 'setConnected$Z',  function (connected) {
this.datasetManager.setConnected$Z(connected);
});

Clazz.newMeth(C$, 'setMaximumPoints$I$I',  function (datasetIndex, maxPoints) {
this.datasetManager.getDataset$I(datasetIndex).setMaximumPoints$I(maxPoints);
});

Clazz.newMeth(C$, 'setCustomMarker$I$java_awt_Shape',  function (datasetIndex, marker) {
this.datasetManager.setCustomMarker$I$java_awt_Shape(datasetIndex, marker);
});

Clazz.newMeth(C$, 'setMarkerShape$I$I',  function (datasetIndex, markerShape) {
this.datasetManager.setMarkerShape$I$I(datasetIndex, markerShape);
});

Clazz.newMeth(C$, 'setMarkerSize$I$I',  function (datasetIndex, markerSize) {
this.datasetManager.setMarkerSize$I$I(datasetIndex, markerSize);
});

Clazz.newMeth(C$, 'setMarkerColor$I$java_awt_Color',  function (datasetIndex, color) {
this.datasetManager.setMarkerColor$I$java_awt_Color(datasetIndex, color);
});

Clazz.newMeth(C$, 'setLineColor$I$java_awt_Color',  function (datasetIndex, color) {
this.datasetManager.setLineColor$I$java_awt_Color(datasetIndex, color);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (color) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [color]);
if (this.drawingPanel != null ) {
this.drawingPanel.setBackground$java_awt_Color(color);
}});

Clazz.newMeth(C$, 'setMarkerColor$I$java_awt_Color$java_awt_Color',  function (datasetIndex, fillColor, edgeColor) {
this.datasetManager.setMarkerColor$I$java_awt_Color$java_awt_Color(datasetIndex, fillColor, edgeColor);
});

Clazz.newMeth(C$, 'setConnected$I$Z',  function (datasetIndex, connected) {
this.datasetManager.setConnected$I$Z(datasetIndex, connected);
});

Clazz.newMeth(C$, 'setXPointsLinked$Z',  function (linked) {
this.datasetManager.setXPointsLinked$Z(linked);
});

Clazz.newMeth(C$, 'setXYColumnNames$I$S$S$S',  function (datasetIndex, xColumnName, yColumnName, datasetName) {
this.datasetManager.setXYColumnNames$I$S$S$S(datasetIndex, xColumnName, yColumnName, datasetName);
});

Clazz.newMeth(C$, 'setXYColumnNames$I$S$S',  function (datasetIndex, xColumnName, yColumnName) {
this.datasetManager.setXYColumnNames$I$S$S(datasetIndex, xColumnName, yColumnName);
});

Clazz.newMeth(C$, 'setMaximumFractionDigits$I',  function (maximumFractionDigits) {
this.getDataTable$().setMaximumFractionDigits$I(maximumFractionDigits);
});

Clazz.newMeth(C$, 'setMaximumFractionDigits$S$I',  function (columnName, maximumFractionDigits) {
this.getDataTable$().setMaximumFractionDigits$S$I(columnName, maximumFractionDigits);
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
this.getDataTable$().setRowNumberVisible$Z(vis);
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
if (this.drawingPanel != null ) {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.datasetManager);
}});

Clazz.newMeth(C$, 'getDataset$I',  function (index) {
return this.datasetManager.getDataset$I(index);
});

Clazz.newMeth(C$, 'getDatasetManager$',  function () {
return this.datasetManager;
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.datasetManager]);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.datasetManager);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.datasetManager.clear$();
this.updateTable$I(2);
if (this.drawingPanel != null ) {
this.drawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'removeDatasets$',  function () {
this.datasetManager.removeDatasets$();
this.updateTable$I(2);
if (this.drawingPanel != null ) {
this.drawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'showDataTable$Z',  function (show) {
if (show) {
if (this.tableFrame == null  || !this.tableFrame.isDisplayable$() ) {
this.tableFrame=Clazz.new_([this.getTitle$() + " " + $I$(2).getString$S("TableFrame.TitleAddOn.Data") , this.getDataTable$()],$I$(13,1).c$$S$org_opensourcephysics_display_DataTable);
this.tableFrame.setDefaultCloseOperation$I(2);
}this.updateTable$I(67108864);
this.tableFrame.setVisible$Z(true);
} else {
this.tableFrame.setVisible$Z(false);
this.tableFrame.dispose$();
this.tableFrame=null;
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(14,1));
}, 1);

Clazz.newMeth(C$, 'updateTable$I',  function (mode) {
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.getDataTable$().refreshTable$I(mode);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlotFrame, "PlotFrameLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.DrawingFrame','.DrawingFrameLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var frame=Clazz.new_(["x", "y", $I$(2).getString$S("PlotFrame.Title")],$I$(1,1).c$$S$S$S);
return frame;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var frame=(obj);
var list=frame.getObjectOfClass$Class(Clazz.getClass($I$(3)));
if (list.size$() > 0) {
frame.datasetManager=list.get$I(0);
frame.dataTable=null;
frame.getDataTable$();
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
