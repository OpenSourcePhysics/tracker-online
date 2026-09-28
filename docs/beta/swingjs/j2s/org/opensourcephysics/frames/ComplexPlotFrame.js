(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),p$1={},I$=[[0,'org.opensourcephysics.frames.ComplexPlotFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.ComplexDataset','org.opensourcephysics.display.DataTable','org.opensourcephysics.display.PlottingPanel','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.DataTableFrame',['org.opensourcephysics.frames.ComplexPlotFrame','.ComplexPlotFrameLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexPlotFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.DrawingFrame');
C$.$classes$=[['ComplexPlotFrameLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.complexDataset=Clazz.new_($I$(3,1));
this.dataTable=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['complexDataset','org.opensourcephysics.display.ComplexDataset','dataTable','org.opensourcephysics.display.DataTable','ampPhaseItem','javax.swing.JMenuItem','+reImItem','+postItem','+barItem','tableFrame','org.opensourcephysics.display.DataTableFrame']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(5,1).c$$S$S$S,[xlabel, ylabel, frameTitle])]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.complexDataset);
this.dataTable.add$javax_swing_table_TableModel(this.complexDataset.model);
this.addMenuItems$();
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'getComplexDataset$',  function () {
return this.complexDataset;
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
}var menubarGroup=Clazz.new_($I$(7,1));
this.ampPhaseItem=Clazz.new_([$I$(2).getString$S("ComplexPlotFrame.MenuItem.AmpPhase")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.ampPhaseItem);
this.ampPhaseItem.setSelected$Z(true);
var actionListener=((P$.ComplexPlotFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexPlotFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.ComplexPlotFrame'].convertToAmpAndPhaseView$.apply(this.b$['org.opensourcephysics.frames.ComplexPlotFrame'], []);
});
})()
), Clazz.new_(P$.ComplexPlotFrame$1.$init$,[this, null]));
this.ampPhaseItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.ampPhaseItem);
this.postItem=Clazz.new_([$I$(2).getString$S("ComplexPlotFrame.MenuItem.PostView")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.postItem);
actionListener=((P$.ComplexPlotFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexPlotFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.ComplexPlotFrame'].convertToPostView$.apply(this.b$['org.opensourcephysics.frames.ComplexPlotFrame'], []);
});
})()
), Clazz.new_(P$.ComplexPlotFrame$2.$init$,[this, null]));
this.postItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.postItem);
this.barItem=Clazz.new_([$I$(2).getString$S("ComplexPlotFrame.MenuItem.BarView")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.barItem);
actionListener=((P$.ComplexPlotFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexPlotFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.ComplexPlotFrame'].convertToPhaseBarView$.apply(this.b$['org.opensourcephysics.frames.ComplexPlotFrame'], []);
});
})()
), Clazz.new_(P$.ComplexPlotFrame$3.$init$,[this, null]));
this.barItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.barItem);
this.reImItem=Clazz.new_([$I$(2).getString$S("ComplexPlotFrame.MenuItem.RealImaginary")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.reImItem);
actionListener=((P$.ComplexPlotFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexPlotFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.ComplexPlotFrame'].convertToReImView$.apply(this.b$['org.opensourcephysics.frames.ComplexPlotFrame'], []);
});
})()
), Clazz.new_(P$.ComplexPlotFrame$4.$init$,[this, null]));
this.reImItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.reImItem);
menu.addSeparator$();
var tableItem=Clazz.new_([$I$(2).getString$S("DrawingFrame.DataTable_menu_item")],$I$(9,1).c$$S);
tableItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["T".$c(), $I$(11).MENU_SHORTCUT_KEY_MASK]));
actionListener=((P$.ComplexPlotFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexPlotFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.ComplexPlotFrame'].showDataTable$Z.apply(this.b$['org.opensourcephysics.frames.ComplexPlotFrame'], [true]);
});
})()
), Clazz.new_(P$.ComplexPlotFrame$5.$init$,[this, null]));
tableItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(tableItem);
var legendItem=Clazz.new_([$I$(2).getString$S("GUIUtils.PhaseLegend")],$I$(9,1).c$$S);
actionListener=((P$.ComplexPlotFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComplexPlotFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.ComplexPlotFrame'].complexDataset.showLegend$();
});
})()
), Clazz.new_(P$.ComplexPlotFrame$6.$init$,[this, null]));
legendItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(legendItem);
if ((this.drawingPanel != null ) && (this.drawingPanel.getPopupMenu$() != null ) ) {
var item=Clazz.new_([$I$(2).getString$S("DrawingFrame.DataTable_menu_item")],$I$(9,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(actionListener);
this.drawingPanel.getPopupMenu$().add$javax_swing_JMenuItem(item);
}});

Clazz.newMeth(C$, 'setCentered$Z',  function (centered) {
this.complexDataset.setCentered$Z(centered);
});

Clazz.newMeth(C$, 'convertToPostView$',  function () {
this.complexDataset.setMarkerShape$I(4);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
this.postItem.setSelected$Z(true);
});

Clazz.newMeth(C$, 'convertToAmpAndPhaseView$',  function () {
this.complexDataset.setMarkerShape$I(2);
this.complexDataset.setCentered$Z(true);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
this.ampPhaseItem.setSelected$Z(true);
});

Clazz.newMeth(C$, 'convertToPhaseBarView$',  function () {
this.complexDataset.setMarkerShape$I(3);
this.complexDataset.setCentered$Z(false);
this.drawingPanel.invalidateImage$();
this.barItem.setSelected$Z(true);
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'convertToReImView$',  function () {
this.complexDataset.setMarkerShape$I(1);
this.drawingPanel.invalidateImage$();
this.reImItem.setSelected$Z(true);
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'append$D$D$D',  function (x, re, im) {
this.complexDataset.append$D$D$D(x, re, im);
p$1.updateTableAppend.apply(this, []);
});

Clazz.newMeth(C$, 'updateTableAppend',  function () {
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.dataTable.refreshTable$I(8448);
}}, p$1);

Clazz.newMeth(C$, 'append$DA$DA',  function (x, z) {
this.complexDataset.append$DA$DA(x, z);
});

Clazz.newMeth(C$, 'append$DA$DA$DA',  function (xpoints, re, im) {
this.complexDataset.append$DA$DA$DA(xpoints, re, im);
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.dataTable.refreshTable$I(8448);
}});

Clazz.newMeth(C$, 'setConnected$Z',  function (connected) {
this.complexDataset.setConnected$Z(connected);
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.complexDataset);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.complexDataset]);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.complexDataset);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.complexDataset.clear$();
if (this.dataTable != null ) {
this.dataTable.refreshTable$I(2);
}if (this.drawingPanel != null ) {
this.drawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'showDataTable$Z',  function (show) {
if (show) {
if ((this.tableFrame == null ) || !this.tableFrame.isDisplayable$() ) {
this.tableFrame=Clazz.new_([this.getTitle$() + " " + $I$(2).getString$S("TableFrame.TitleAddOn.Data") , this.dataTable],$I$(12,1).c$$S$org_opensourcephysics_display_DataTable);
this.tableFrame.setDefaultCloseOperation$I(2);
}this.dataTable.refreshTable$I(67108864);
this.tableFrame.setVisible$Z(true);
} else {
this.tableFrame.setVisible$Z(false);
this.tableFrame.dispose$();
this.tableFrame=null;
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(13,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ComplexPlotFrame, "ComplexPlotFrameLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.DrawingFrame','.DrawingFrameLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var frame=Clazz.new_(["x", "y", $I$(2).getString$S("ComplexPlotFrame.Title")],$I$(1,1).c$$S$S$S);
return frame;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var frame=(obj);
var list=frame.getObjectOfClass$Class(Clazz.getClass($I$(3)));
if (list.size$() > 0) {
frame.complexDataset=list.get$I(0);
frame.dataTable.clear$();
frame.dataTable.add$javax_swing_table_TableModel(frame.complexDataset.model);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
