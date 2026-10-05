(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.frames.HistogramFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.Histogram','org.opensourcephysics.display.DataTable','org.opensourcephysics.display.PlottingPanel','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.DrawingFrame','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.Tool','org.opensourcephysics.display.DataTableFrame',['org.opensourcephysics.frames.HistogramFrame','.HistogramFrameLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HistogramFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.DrawingFrame');
C$.$classes$=[['HistogramFrameLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.histogram=Clazz.new_($I$(3,1));
this.dataTable=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['histogram','org.opensourcephysics.display.Histogram','dataTable','org.opensourcephysics.display.DataTable','tableFrame','org.opensourcephysics.display.DataTableFrame','tool','org.opensourcephysics.tools.DataTool','dataset','org.opensourcephysics.display.HistogramDataset','logItem','javax.swing.JCheckBoxMenuItem']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, title) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(5,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.histogram);
this.setTitle$S(title);
this.dataTable.add$javax_swing_table_TableModel(this.histogram.model);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
this.addMenuItems$();
}, 1);

Clazz.newMeth(C$, 'setXYColumnNames$S$S$S',  function (xColumnName, yColumnName, histogramName) {
this.histogram.setXYColumnNames$S$S$S(xColumnName, yColumnName, histogramName);
});

Clazz.newMeth(C$, 'addMenuItems$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return;
}var helpMenu=this.removeMenu$S($I$(2).getString$S("DrawingFrame.Help_menu_item"));
var menu=this.getMenu$S($I$(2).getString$S("DrawingFrame.Views_menu"));
if (menu == null ) {
menu=Clazz.new_([$I$(2).getString$S("DrawingFrame.Views_menu")],$I$(6,1).c$$S);
menuBar.add$javax_swing_JMenu(menu);
menuBar.validate$();
} else {
menu.addSeparator$();
}if (helpMenu != null ) {
menuBar.add$javax_swing_JMenu(helpMenu);
}var tableItem=Clazz.new_([$I$(2).getString$S("DrawingFrame.DataTable_menu_item")],$I$(7,1).c$$S);
tableItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["T".$c(), $I$(9).MENU_SHORTCUT_KEY_MASK]));
var tableListener=((P$.HistogramFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HistogramFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.HistogramFrame'].showDataTable$Z.apply(this.b$['org.opensourcephysics.frames.HistogramFrame'], [true]);
});
})()
), Clazz.new_(P$.HistogramFrame$1.$init$,[this, null]));
tableItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(tableItem);
menu.addSeparator$();
this.logItem=Clazz.new_([$I$(2).getString$S("HistogramFrame.MenuItem.LogScale"), false],$I$(10,1).c$$S$Z);
this.logItem.addActionListener$java_awt_event_ActionListener(((P$.HistogramFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "HistogramFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.HistogramFrame'].histogram.logScale=this.b$['org.opensourcephysics.frames.HistogramFrame'].logItem.isSelected$();
this.b$['org.opensourcephysics.frames.HistogramFrame'].drawingPanel.repaint$();
});
})()
), Clazz.new_(P$.HistogramFrame$2.$init$,[this, null])));
var item=Clazz.new_([$I$(2).getString$S("DrawingFrame.DataTable_menu_item")],$I$(7,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(tableListener);
if ((this.drawingPanel != null ) && (this.drawingPanel.getPopupMenu$() != null ) ) {
this.drawingPanel.getPopupMenu$().add$javax_swing_JMenuItem(item);
}});

Clazz.newMeth(C$, 'loadToolsMenu$',  function () {
if ($I$(11).isJS) {
return null;
}var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var toolsMenu=Clazz.new_([$I$(2).getString$S("DrawingFrame.Tools_menu_title")],$I$(6,1).c$$S);
menuBar.add$javax_swing_JMenu(toolsMenu);
var datasetItem=Clazz.new_([$I$(2).getString$S("DrawingFrame.DatasetTool_menu_item")],$I$(7,1).c$$S);
toolsMenu.add$javax_swing_JMenuItem(datasetItem);
if ($I$(11).loadDataTool) {
if (!$I$(12).setSendAction$javax_swing_JMenuItem$S$O$org_opensourcephysics_tools_Tool$Z(datasetItem, "DataTool", this.drawingPanel, this.reply, true)) {
$I$(11).loadDataTool=false;
datasetItem.setEnabled$Z(false);
}}return toolsMenu;
});

Clazz.newMeth(C$, 'getXPoints$',  function () {
return this.histogram.getXPoints$();
});

Clazz.newMeth(C$, 'getYPoints$',  function () {
return this.histogram.getYPoints$();
});

Clazz.newMeth(C$, 'getLogPoints$',  function () {
return this.histogram.getLogPoints$();
});

Clazz.newMeth(C$, 'getPoints$',  function () {
return this.histogram.getPoints$();
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.histogram);
this.showDataTable$Z(false);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.histogram]);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.histogram);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.histogram.clear$();
this.dataTable.refreshTable$I(2);
if (this.drawingPanel != null ) {
this.drawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'append$D',  function (v) {
this.histogram.append$D(v);
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.dataTable.refreshTable$I(8448);
}});

Clazz.newMeth(C$, 'append$D$D',  function (value, numberOfOccurences) {
this.histogram.append$D$D(value, numberOfOccurences);
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.dataTable.refreshTable$I(8448);
}});

Clazz.newMeth(C$, 'append$DA',  function (values) {
this.histogram.append$DA(values);
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.dataTable.refreshTable$I(8448);
}});

Clazz.newMeth(C$, 'setDiscrete$Z',  function (b) {
this.histogram.setDiscrete$Z(b);
});

Clazz.newMeth(C$, 'setLogScale$Z',  function (b) {
this.histogram.logScale=b;
this.logItem.setSelected$Z(b);
});

Clazz.newMeth(C$, 'isLogScale$',  function () {
return this.histogram.logScale;
});

Clazz.newMeth(C$, 'setBinWidth$D',  function (binWidth) {
this.histogram.setBinWidth$D(binWidth);
});

Clazz.newMeth(C$, 'getBinWidth$',  function () {
return this.histogram.getBinWidth$();
});

Clazz.newMeth(C$, 'setBinColor$java_awt_Color$java_awt_Color',  function (fillColor, edgeColor) {
this.histogram.setBinColor$java_awt_Color$java_awt_Color(fillColor, edgeColor);
});

Clazz.newMeth(C$, 'setBinStyle$H',  function (style) {
this.histogram.setBinStyle$I(style);
});

Clazz.newMeth(C$, 'setBinOffset$D',  function (binOffset) {
this.histogram.setBinOffset$D(binOffset);
});

Clazz.newMeth(C$, 'setNormalizedToOne$Z',  function (b) {
this.histogram.setNormalizedToOne$Z(b);
this.histogram.adjustForWidth=b;
});

Clazz.newMeth(C$, 'positiveX$',  function () {
var b=this.drawingPanel.isAutoscaleX$();
this.drawingPanel.setPreferredMinMaxX$D$D(0, this.drawingPanel.getPreferredXMax$());
this.drawingPanel.setAutoscaleX$Z(b);
});

Clazz.newMeth(C$, 'showDataTable$Z',  function (show) {
if (show) {
if ((this.tableFrame == null ) || !this.tableFrame.isDisplayable$() ) {
this.tableFrame=Clazz.new_([this.getTitle$() + " " + $I$(2).getString$S("TableFrame.TitleAddOn.Data") , this.dataTable],$I$(13,1).c$$S$org_opensourcephysics_display_DataTable);
this.tableFrame.setDefaultCloseOperation$I(2);
}this.dataTable.refreshTable$I(67108864);
this.dataTable.sort$I(0);
this.tableFrame.setVisible$Z(true);
} else {
this.tableFrame.setVisible$Z(false);
this.tableFrame.dispose$();
this.tableFrame=null;
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(14,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.HistogramFrame, "HistogramFrameLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.DrawingFrame','.DrawingFrameLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var frame=Clazz.new_(["x", "y", $I$(2).getString$S("HistogramFrame.Title")],$I$(1,1).c$$S$S$S);
return frame;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var frame=(obj);
var list=frame.getObjectOfClass$Class(Clazz.getClass($I$(3)));
if (list.size$() > 0) {
frame.histogram=list.get$I(0);
frame.histogram.clear$();
frame.dataTable.add$javax_swing_table_TableModel(frame.histogram.model);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
