(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ComplexGridPlot','org.opensourcephysics.display.PlottingPanel','java.awt.Dimension','org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.DisplayRes','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.JMenuItem','org.opensourcephysics.display2d.ComplexColorMapper','org.opensourcephysics.display2d.ComplexInterpolatedPlot','org.opensourcephysics.display2d.ComplexSurfacePlot','org.opensourcephysics.display2d.SurfacePlotMouseController','org.opensourcephysics.numerics.FFT2D','org.opensourcephysics.display2d.ArrayData']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FFT2DFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.domainType=3;
this.plot=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display2d_GridData,[null]);
},1);

C$.$fields$=[['I',['domainType'],'O',['gridData','org.opensourcephysics.display2d.GridData','fft','org.opensourcephysics.numerics.FFT2D','fftData','double[]','plot','org.opensourcephysics.display2d.Plot2D','surfacePlotMC','org.opensourcephysics.display2d.SurfacePlotMouseController','gridItem','javax.swing.JMenuItem','+interpolatedItem','+surfaceItem']]]

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
this.gridItem=Clazz.new_([$I$(5).getString$S("Scalar2DFrame.MenuItem.GridPlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.gridItem);
this.gridItem.setSelected$Z(true);
var actionListener=((P$.FFT2DFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFT2DFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFT2DFrame'].convertToGridPlot$.apply(this.b$['org.opensourcephysics.frames.FFT2DFrame'], []);
});
})()
), Clazz.new_(P$.FFT2DFrame$1.$init$,[this, null]));
this.gridItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.gridItem);
this.surfaceItem=Clazz.new_([$I$(5).getString$S("Scalar2DFrame.MenuItem.SurfacePlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.surfaceItem);
actionListener=((P$.FFT2DFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFT2DFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFT2DFrame'].convertToSurfacePlot$.apply(this.b$['org.opensourcephysics.frames.FFT2DFrame'], []);
});
})()
), Clazz.new_(P$.FFT2DFrame$2.$init$,[this, null]));
this.surfaceItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.surfaceItem);
this.interpolatedItem=Clazz.new_([$I$(5).getString$S("Scalar2DFrame.MenuItem.InterpolatedPlot")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.interpolatedItem);
actionListener=((P$.FFT2DFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFT2DFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFT2DFrame'].convertToInterpolatedPlot$.apply(this.b$['org.opensourcephysics.frames.FFT2DFrame'], []);
});
})()
), Clazz.new_(P$.FFT2DFrame$3.$init$,[this, null]));
this.interpolatedItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.interpolatedItem);
menu.addSeparator$();
var phaseItem=Clazz.new_([$I$(5).getString$S("GUIUtils.PhaseLegend")],$I$(9,1).c$$S);
actionListener=((P$.FFT2DFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFT2DFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(10).showPhaseLegend$();
});
})()
), Clazz.new_(P$.FFT2DFrame$4.$init$,[this, null]));
phaseItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(phaseItem);
});

Clazz.newMeth(C$, 'convertToInterpolatedPlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.ComplexInterpolatedPlot"))) {
if (this.surfacePlotMC != null ) {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfacePlotMC=null;
}this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.plot=Clazz.new_($I$(11,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.drawingPanel.repaint$();
this.interpolatedItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'convertToGridPlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.ComplexGridPlot"))) {
if (this.surfacePlotMC != null ) {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfacePlotMC=null;
}this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.plot=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
this.gridItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'convertToSurfacePlot$',  function () {
if (!(Clazz.instanceOf(this.plot, "org.opensourcephysics.display2d.ComplexSurfacePlot"))) {
this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.plot=Clazz.new_($I$(12,1).c$$org_opensourcephysics_display2d_GridData,[this.gridData]);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.plot);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
if (this.surfacePlotMC == null ) {
this.surfacePlotMC=Clazz.new_($I$(13,1).c$$org_opensourcephysics_display_DrawingPanel$O,[this.drawingPanel, this.plot]);
}this.drawingPanel.addMouseListener$java_awt_event_MouseListener(this.surfacePlotMC);
this.drawingPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(this.surfacePlotMC);
this.surfaceItem.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'resizeGrid$I$I',  function (nx, ny) {
this.fftData=Clazz.array(Double.TYPE, [2 * nx * ny ]);
this.fft=Clazz.new_($I$(14,1).c$$I$I,[nx, ny]);
this.gridData=Clazz.new_($I$(15,1).c$$I$I$I,[nx, ny, 3]);
this.plot.setGridData$org_opensourcephysics_display2d_GridData(this.gridData);
this.plot.update$();
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
}, p$1);

Clazz.newMeth(C$, 'setDomainType$I',  function (type) {
this.domainType=type;
switch (this.domainType) {
case 0:
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S("x mode");
}if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setYLabel$S("y mode");
}break;
case 1:
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S("x frequency");
}if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setYLabel$S("y frequency");
}break;
case 2:
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S("x omega");
}if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setYLabel$S("y omega");
}break;
case 3:
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S("k_x");
}if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setYLabel$S("k_y");
}break;
case 4:
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S("p_x");
}if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setYLabel$S("p_y");
}break;
}
});

Clazz.newMeth(C$, 'doFFT$DAAA$D$D$D$D',  function (data, xmin, xmax, ymin, ymax) {
if (this.gridData == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Grid must be set before using row-major format."]);
}var nx=this.gridData.getNx$();
var ny=this.gridData.getNy$();
if ((data[0].length != nx) || (data[0][0].length != ny) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Grid does not have the correct size."]);
}var reData=data[0];
var imData=data[1];
var offX=((nx * xmin / (xmax - xmin))|0);
offX=Math.abs(offX);
var offY=((ny * ymin / (ymax - ymin))|0);
offY=Math.abs(offY);
for (var i=0; i < nx; i++) {
var ii=(offX + i) % nx;
var offset=2 * ii * nx ;
for (var j=0; j < ny; j++) {
var jj=(offX + j) % ny;
this.fftData[offset + 2 * jj]=reData[i][j];
this.fftData[offset + 2 * jj + 1]=imData[i][j];
}
}
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
var a1=(-nx/2|0);
var a2=((nx + 1)/2|0) - 1;
var b1=(-ny/2|0);
var b2=((ny + 1)/2|0) - 1;
switch (this.domainType) {
case 0:
break;
case 1:
a2=this.fft.getFreqMax$D$D$I(xmin, xmax, nx);
a1=this.fft.getFreqMin$D$D$I(xmin, xmax, nx);
b2=this.fft.getFreqMax$D$D$I(ymin, ymax, ny);
b1=this.fft.getFreqMin$D$D$I(ymin, ymax, ny);
break;
case 2:
case 4:
case 3:
a2=6.283185307179586 * this.fft.getFreqMax$D$D$I(xmin, xmax, nx);
a1=6.283185307179586 * this.fft.getFreqMin$D$D$I(xmin, xmax, nx);
b2=6.283185307179586 * this.fft.getFreqMax$D$D$I(ymin, ymax, ny);
b1=6.283185307179586 * this.fft.getFreqMin$D$D$I(ymin, ymax, ny);
break;
}
this.gridData.setCenteredCellScale$D$D$D$D(a1, a2, b2, b1);
p$1.fillGrid$I$I$DA.apply(this, [nx, ny, this.fftData]);
this.plot.update$();
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'doFFT$DA$I$D$D$D$D',  function (data, nx, xmin, xmax, ymin, ymax) {
if (((data.length/2|0)) % nx != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of values in grid (nx*ny) must match number of values."]);
}var ny=(data.length/nx / 2 |0);
p$1.resizeGrid$I$I.apply(this, [nx, ny]);
if (data.length != 2 * nx * ny ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Grid does not have the correct size."]);
}var offX=((nx * xmin / (xmax - xmin))|0);
offX=Math.abs(offX);
var offY=((ny * ymin / (ymax - ymin))|0);
offY=Math.abs(offY);
for (var j=0; j < ny; j++) {
var jj=(offY + j) % ny;
var offset=2 * j * nx ;
var offset2=2 * jj * nx ;
for (var i=0; i < nx; i++) {
var ii=(offX + i) % nx;
this.fftData[offset + 2 * ii]=data[offset2 + 2 * i];
this.fftData[offset + 2 * ii + 1]=data[offset2 + 2 * i + 1];
}
}
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
var a1=(-nx/2|0);
var a2=((nx + 1)/2|0) - 1;
var b1=(-ny/2|0);
var b2=((ny + 1)/2|0) - 1;
switch (this.domainType) {
case 0:
break;
case 1:
a2=this.fft.getFreqMax$D$D$I(xmin, xmax, nx);
a1=this.fft.getFreqMin$D$D$I(xmin, xmax, nx);
b2=this.fft.getFreqMax$D$D$I(ymin, ymax, ny);
b1=this.fft.getFreqMin$D$D$I(ymin, ymax, ny);
break;
case 2:
case 4:
case 3:
a2=6.283185307179586 * this.fft.getFreqMax$D$D$I(xmin, xmax, nx);
a1=6.283185307179586 * this.fft.getFreqMin$D$D$I(xmin, xmax, nx);
b2=6.283185307179586 * this.fft.getFreqMax$D$D$I(ymin, ymax, ny);
b1=6.283185307179586 * this.fft.getFreqMin$D$D$I(ymin, ymax, ny);
break;
}
this.gridData.setCenteredCellScale$D$D$D$D(a1, a2, b2, b1);
p$1.fillGrid$I$I$DA.apply(this, [nx, ny, this.fftData]);
this.plot.update$();
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

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

Clazz.newMeth(C$, 'fillGrid$I$I$DA',  function (nx, ny, vals) {
var mag=this.gridData.getData$()[0];
var reData=this.gridData.getData$()[1];
var imData=this.gridData.getData$()[2];
for (var j=0; j < ny; j++) {
var offset=2 * j * nx ;
for (var i=0; i < nx; i++) {
var re=vals[offset + 2 * i];
var im=vals[offset + 2 * i + 1];
mag[i][j]=Math.sqrt(re * re + im * im);
reData[i][j]=re;
imData[i][j]=im;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
