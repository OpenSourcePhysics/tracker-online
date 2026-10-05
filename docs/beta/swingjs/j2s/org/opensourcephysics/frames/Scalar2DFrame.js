(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display2d.GridPlot','org.opensourcephysics.display.PlottingPanel','java.awt.Dimension','org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.DisplayRes','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display2d.ContourPlot','org.opensourcephysics.display2d.InterpolatedPlot','org.opensourcephysics.display2d.GrayscalePlot','org.opensourcephysics.display2d.SurfacePlot','org.opensourcephysics.display2d.SurfacePlotMouseController','org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display2d.GridTableFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Scalar2DFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.plotType="";
this.paletteType=0;
this.expanded=false;
this.expansionFactor=1.0;
this.showGrid=true;
this.plot=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display2d_GridData,[null]);
},1);

C$.$fields$=[['Z',['expanded','showGrid'],'D',['expansionFactor'],'I',['paletteType'],'S',['plotType'],'O',['gridData','org.opensourcephysics.display2d.GridData','plot','org.opensourcephysics.display2d.Plot2D','surfacePlotMC','org.opensourcephysics.display2d.SurfacePlotMouseController','surfaceItem','javax.swing.JMenuItem','+contourItem','+gridItem','+interpolatedItem','+grayscaleItem','tableFrame','org.opensourcephysics.display2d.GridTableFrame']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(2,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.drawingPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[350, 350]));
this.setTitle$S(frameTitle);
(this.drawingPanel).getAxes$().setShowMajorXGrid$Z(false);
(this.drawingPanel).getAxes$().setShowMajorYGrid$Z(false);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.addMenuItems$();
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(4,1))]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.addMenuItems$();
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
if (this.gridData == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.gridData.indexToX$I(i);
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
if (this.gridData == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.gridData.xToIndex$D(x);
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
if (this.gridData == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.gridData.yToIndex$D(y);
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
if (this.gridData == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.gridData.indexToY$I(i);
});

Clazz.newMeth(C$, 'getNx$',  function () {
if (this.gridData == null ) {
return 0;
}return this.gridData.getNx$();
});

Clazz.newMeth(C$, 'getNy$',  function () {
if (this.gridData == null ) {
return 0;
}return this.gridData.getNy$();
});

Clazz.newMeth(C$, 'setZRange$Z$D$D',  function (isAutoscale, floor, ceil) {
this.plot.setAutoscaleZ$Z$D$D(isAutoscale, floor, ceil);
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.plot.getCeiling$();
});

Clazz.newMeth(C$, 'getFloor$',  function () {
return this.plot.getFloor$();
});

Clazz.newMeth(C$, 'isAutoscaleZ$',  function () {
return this.plot.isAutoscaleZ$();
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
this.expansionFactor=expansionFactor;
this.expanded=expanded;
this.plot.setExpandedZ$Z$D(expanded, expansionFactor);
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
this.paletteType=type;
this.plot.setPaletteType$I(type);
});

Clazz.newMeth(C$, 'setBuffered$Z',  function (b) {
this.drawingPanel.setBuffered$Z(b);
});

Clazz.newMeth(C$, 'setShowGrid$Z',  function (show) {
this.showGrid=show;
this.plot.setShowGridLines$Z(show);
});

Clazz.newMeth(C$, 'isShowGrid$',  function () {
return this.showGrid;
});

Clazz.newMeth(C$, 'addMenuItems$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return;
}var helpMenu=this.removeMenu$S($I$(5).getString$S("DrawingFrame.Help_menu_item"));
var menu=this.getMenu$S($I$(5).getString$S("DrawingFrame.Views_menu"));
if (menu == null ) {
menu=Clazz.new_([$I$(5).getString$S("DrawingFrame.Views_menu")],$I$(6,1).c$$S);
menuBar.add$javax_swing_JMenu(menu);
menuBar.validate$();
} else {
menu.addSeparator$();
}if (helpMenu != null ) {
menuBar.add$javax_swing_JMenu(helpMenu);
}var menubarGroup=Clazz.new_($I$(7,1));
this.gridItem=Clazz.new_([$I$(5).getString$S("2DFrame.MenuItem.GridPlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.gridItem);
this.gridItem.setSelected$Z(true);
var tableListener=((P$.Scalar2DFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scalar2DFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.Scalar2DFrame'].convertToGridPlot$.apply(this.b$['org.opensourcephysics.frames.Scalar2DFrame'], []);
});
})()
), Clazz.new_(P$.Scalar2DFrame$1.$init$,[this, null]));
this.gridItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.gridItem);
this.contourItem=Clazz.new_([$I$(5).getString$S("2DFrame.MenuItem.ContourPlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.contourItem);
tableListener=((P$.Scalar2DFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scalar2DFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.Scalar2DFrame'].convertToContourPlot$.apply(this.b$['org.opensourcephysics.frames.Scalar2DFrame'], []);
});
})()
), Clazz.new_(P$.Scalar2DFrame$2.$init$,[this, null]));
this.contourItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.contourItem);
this.surfaceItem=Clazz.new_([$I$(5).getString$S("2DFrame.MenuItem.SurfacePlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.surfaceItem);
tableListener=((P$.Scalar2DFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scalar2DFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.Scalar2DFrame'].convertToSurfacePlot$.apply(this.b$['org.opensourcephysics.frames.Scalar2DFrame'], []);
});
})()
), Clazz.new_(P$.Scalar2DFrame$3.$init$,[this, null]));
this.surfaceItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.surfaceItem);
this.interpolatedItem=Clazz.new_([$I$(5).getString$S("2DFrame.MenuItem.InterpolatedPlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.interpolatedItem);
tableListener=((P$.Scalar2DFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scalar2DFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.Scalar2DFrame'].convertToInterpolatedPlot$.apply(this.b$['org.opensourcephysics.frames.Scalar2DFrame'], []);
});
})()
), Clazz.new_(P$.Scalar2DFrame$4.$init$,[this, null]));
this.interpolatedItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.interpolatedItem);
this.grayscaleItem=Clazz.new_([$I$(5).getString$S("2DFrame.MenuItem.GrayscalePlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.grayscaleItem);
tableListener=((P$.Scalar2DFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scalar2DFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.Scalar2DFrame'].convertToGrayscalePlot$.apply(this.b$['org.opensourcephysics.frames.Scalar2DFrame'], []);
});
})()
), Clazz.new_(P$.Scalar2DFrame$5.$init$,[this, null]));
this.grayscaleItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.grayscaleItem);
menu.addSeparator$();
var tableItem=Clazz.new_([$I$(5).getString$S("DrawingFrame.DataTable_menu_item")],$I$(9,1).c$$S);
tableItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["T".$c(), $I$(11).MENU_SHORTCUT_KEY_MASK]));
var actionListener=((P$.Scalar2DFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scalar2DFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.Scalar2DFrame'].showDataTable$Z.apply(this.b$['org.opensourcephysics.frames.Scalar2DFrame'], [true]);
});
})()
), Clazz.new_(P$.Scalar2DFrame$6.$init$,[this, null]));
tableItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(tableItem);
if ((this.drawingPanel != null ) && (this.drawingPanel.getPopupMenu$() != null ) ) {
var item=Clazz.new_([$I$(5).getString$S("DrawingFrame.DataTable_menu_item")],$I$(9,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(actionListener);
this.drawingPanel.getPopupMenu$().add$javax_swing_JMenuItem(item);
}});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.plot);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.plot]);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.plot);
});

Clazz.newMeth(C$, 'clearData$',  function () {
if (this.gridData != null ) {
this.setAll$DAA(Clazz.array(Double.TYPE, [this.gridData.getNx$(), this.gridData.getNy$()]));
}this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'setPlotType$S',  function (type) {
this.plotType=type;
if (type.toLowerCase$().equals$O("contour")) {
this.convertToContourPlot$();
this.surfaceItem.setEnabled$Z(false);
this.contourItem.setEnabled$Z(true);
this.gridItem.setEnabled$Z(false);
this.interpolatedItem.setEnabled$Z(false);
this.grayscaleItem.setEnabled$Z(false);
} else if (type.toLowerCase$().equals$O("grayscale")) {
this.convertToGrayscalePlot$();
this.surfaceItem.setEnabled$Z(false);
this.contourItem.setEnabled$Z(false);
this.gridItem.setEnabled$Z(false);
this.interpolatedItem.setEnabled$Z(false);
this.grayscaleItem.setEnabled$Z(true);
} else if (type.toLowerCase$().equals$O("grid")) {
this.convertToGridPlot$();
this.surfaceItem.setEnabled$Z(false);
this.contourItem.setEnabled$Z(false);
this.gridItem.setEnabled$Z(true);
this.interpolatedItem.setEnabled$Z(false);
this.grayscaleItem.setEnabled$Z(false);
} else if (type.toLowerCase$().equals$O("interpolated")) {
this.convertToInterpolatedPlot$();
this.surfaceItem.setEnabled$Z(false);
this.contourItem.setEnabled$Z(false);
this.gridItem.setEnabled$Z(false);
this.interpolatedItem.setEnabled$Z(true);
this.grayscaleItem.setEnabled$Z(false);
} else if (type.toLowerCase$().equals$O("surface")) {
this.convertToSurfacePlot$();
this.surfaceItem.setEnabled$Z(true);
this.contourItem.setEnabled$Z(false);
this.gridItem.setEnabled$Z(false);
this.interpolatedItem.setEnabled$Z(false);
this.grayscaleItem.setEnabled$Z(false);
} else {
this.plotType="";
this.surfaceItem.setEnabled$Z(true);
this.contourItem.setEnabled$Z(true);
this.gridItem.setEnabled$Z(true);
this.interpolatedItem.setEnabled$Z(true);
this.grayscaleItem.setEnabled$Z(true);
}});

Clazz.newMeth(C$, 'convertToContourPlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.ContourPlot"))) {
if (this.surfacePlotMC != null ) {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfacePlotMC=null;
this.drawingPanel.resetGutters$();
this.drawingPanel.setClipAtGutter$Z(true);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).getAxes$().setVisible$Z(true);
}this.drawingPanel.setShowCoordinates$Z(true);
}var isAutoscaleZ=this.plot.isAutoscaleZ$();
var floor=this.plot.getFloor$();
var ceil=this.plot.getCeiling$();
var oldPlot=this.plot;
this.plot=Clazz.new_($I$(12,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
this.plot.setPaletteType$I(this.paletteType);
if (this.expanded) {
this.plot.setExpandedZ$Z$D(this.expanded, this.expansionFactor);
}this.plot.setAutoscaleZ$Z$D$D(isAutoscaleZ, floor, ceil);
this.drawingPanel.replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable(oldPlot, this.plot);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.repaint$();
this.contourItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'convertToInterpolatedPlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.InterpolatedPlot"))) {
if (this.surfacePlotMC != null ) {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfacePlotMC=null;
this.drawingPanel.resetGutters$();
this.drawingPanel.setClipAtGutter$Z(true);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).getAxes$().setVisible$Z(true);
}this.drawingPanel.setShowCoordinates$Z(true);
}var isAutoscaleZ=this.plot.isAutoscaleZ$();
var floor=this.plot.getFloor$();
var ceil=this.plot.getCeiling$();
var oldPlot=this.plot;
this.plot=Clazz.new_($I$(13,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
this.plot.setPaletteType$I(this.paletteType);
if (this.expanded) {
this.plot.setExpandedZ$Z$D(this.expanded, this.expansionFactor);
}this.plot.setAutoscaleZ$Z$D$D(isAutoscaleZ, floor, ceil);
this.drawingPanel.replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable(oldPlot, this.plot);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.repaint$();
this.interpolatedItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'convertToGridPlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.GridPlot"))) {
if (this.surfacePlotMC != null ) {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfacePlotMC=null;
this.drawingPanel.resetGutters$();
this.drawingPanel.setClipAtGutter$Z(true);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).getAxes$().setVisible$Z(true);
}this.drawingPanel.setShowCoordinates$Z(true);
}var isAutoscaleZ=this.plot.isAutoscaleZ$();
var floor=this.plot.getFloor$();
var ceil=this.plot.getCeiling$();
var oldPlot=this.plot;
this.plot=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
if (this.expanded) {
this.plot.setExpandedZ$Z$D(this.expanded, this.expansionFactor);
}this.plot.setShowGridLines$Z(this.showGrid);
this.plot.setPaletteType$I(this.paletteType);
this.plot.setAutoscaleZ$Z$D$D(isAutoscaleZ, floor, ceil);
this.drawingPanel.replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable(oldPlot, this.plot);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.repaint$();
this.gridItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'convertToGrayscalePlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.GrayscalePlot"))) {
if (this.surfacePlotMC != null ) {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfacePlotMC=null;
this.drawingPanel.resetGutters$();
this.drawingPanel.setClipAtGutter$Z(true);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).getAxes$().setVisible$Z(true);
}this.drawingPanel.setShowCoordinates$Z(true);
}var isAutoscaleZ=this.plot.isAutoscaleZ$();
var floor=this.plot.getFloor$();
var ceil=this.plot.getCeiling$();
var oldPlot=this.plot;
this.plot=Clazz.new_($I$(14,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
if (this.expanded) {
this.plot.setExpandedZ$Z$D(this.expanded, this.expansionFactor);
}this.plot.setPaletteType$I(this.paletteType);
this.plot.setAutoscaleZ$Z$D$D(isAutoscaleZ, floor, ceil);
this.drawingPanel.replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable(oldPlot, this.plot);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.repaint$();
this.grayscaleItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'convertToSurfacePlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.SurfacePlot"))) {
var oldPlot=this.plot;
try {
var newPlot=Clazz.new_($I$(15,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
var xLabel=(this.drawingPanel).getAxes$().getXLabel$();
var yLabel=(this.drawingPanel).getAxes$().getYLabel$();
newPlot.setAxisLabels$S$S$S(xLabel, yLabel, null);
}this.plot=newPlot;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
this.surfaceItem.setEnabled$Z(false);
this.gridItem.setSelected$Z(true);
this.convertToGridPlot$();
return;
} else {
throw ex;
}
}
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).getAxes$().setVisible$Z(false);
}this.drawingPanel.setShowCoordinates$Z(false);
this.drawingPanel.setGutters$I$I$I$I(0, 0, 0, 0);
this.drawingPanel.setClipAtGutter$Z(false);
var isAutoscaleZ=oldPlot.isAutoscaleZ$();
var floor=oldPlot.getFloor$();
var ceil=oldPlot.getCeiling$();
this.plot.setPaletteType$I(this.paletteType);
if (this.expanded) {
this.plot.setExpandedZ$Z$D(this.expanded, this.expansionFactor);
}this.plot.setAutoscaleZ$Z$D$D(isAutoscaleZ, floor, ceil);
this.drawingPanel.replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable(oldPlot, this.plot);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.repaint$();
if (this.surfacePlotMC == null ) {
this.surfacePlotMC=Clazz.new_($I$(16,1).c$$org_opensourcephysics_display_DrawingPanel$O,[this.drawingPanel, this.plot]);
}this.drawingPanel.addMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfaceItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'resizeGrid$I$I',  function (nx, ny) {
var xmin;
var xmax;
var ymin;
var ymax;
var cellScale=false;
if (this.gridData == null ) {
xmin=this.drawingPanel.getPreferredXMin$();
xmax=this.drawingPanel.getPreferredXMax$();
ymin=this.drawingPanel.getPreferredYMin$();
ymax=this.drawingPanel.getPreferredYMax$();
} else {
xmin=this.gridData.getLeft$();
xmax=this.gridData.getRight$();
ymin=this.gridData.getBottom$();
ymax=this.gridData.getTop$();
cellScale=this.gridData.isCellData$();
}this.gridData=Clazz.new_($I$(17,1).c$$I$I$I,[nx, ny, 1]);
this.gridData.setComponentName$I$S(0, "Amp");
if (nx != ny) {
this.surfaceItem.setEnabled$Z(false);
if (Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.SurfacePlot")) {
this.convertToGridPlot$();
}} else {
if (this.plotType.equals$O("")) {
this.surfaceItem.setEnabled$Z(true);
}}if (cellScale) {
this.gridData.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
} else {
this.gridData.setScale$D$D$D$D(xmin, xmax, ymin, ymax);
}this.plot.setGridData$org_opensourcephysics_display2d_GridData(this.gridData);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'setRow$I$DA',  function (row, vals) {
if (this.gridData.getNx$() != vals.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row data length does not match grid size."]);
}var rowData=this.gridData.getData$()[0][row];
System.arraycopy$O$I$O$I$I(vals, 0, rowData, 0, vals.length);
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'setAll$DAA$D$D$D$D',  function (vals, xmin, xmax, ymin, ymax) {
this.setAll$DAA(vals);
if (this.gridData.isCellData$()) {
this.gridData.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
} else {
this.gridData.setScale$D$D$D$D(xmin, xmax, ymin, ymax);
}});

Clazz.newMeth(C$, 'setAll$DAA',  function (vals) {
if ((this.gridData == null ) || (this.gridData.getNx$() != vals.length) || (this.gridData.getNy$() != vals[0].length)  ) {
this.resizeGrid$I$I(vals.length, vals[0].length);
}var data=this.gridData.getData$()[0];
var ny=vals[0].length;
for (var i=0, nx=data.length; i < nx; i++) {
System.arraycopy$O$I$O$I$I(vals[i], 0, data[i], 0, ny);
}
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'setAll$DA',  function (vals) {
if (this.gridData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Grid size must be set before using row-major format."]);
}var nx=this.gridData.getNx$();
var ny=this.gridData.getNy$();
if (vals.length != nx * ny) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Grid does not have the correct size."]);
}var mag=this.gridData.getData$()[0];
for (var j=0; j < ny; j++) {
var offset=j * nx;
for (var i=0; i < nx; i++) {
mag[i][j]=vals[offset + i];
}
}
this.plot.update$();
if ((this.tableFrame != null ) && this.tableFrame.isShowing$() ) {
this.tableFrame.refreshTable$();
}this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'showDataTable$Z',  function (show) {
if (show) {
if ((this.tableFrame == null ) || !this.tableFrame.isDisplayable$() ) {
if (this.gridData == null ) {
return;
}this.tableFrame=Clazz.new_($I$(18,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
this.tableFrame.setTitle$S($I$(5).getString$S("Scalar2DFrame.Table.Title"));
this.tableFrame.setDefaultCloseOperation$I(2);
}this.tableFrame.refreshTable$();
this.tableFrame.setVisible$Z(true);
} else {
this.tableFrame.setVisible$Z(false);
this.tableFrame.dispose$();
this.tableFrame=null;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
