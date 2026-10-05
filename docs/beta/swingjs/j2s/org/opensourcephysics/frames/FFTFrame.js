(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display.ComplexDataset','org.opensourcephysics.display.DataTable','org.opensourcephysics.numerics.FFT','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DisplayRes','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.DataTableFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FFTFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.domainType=1;
this.complexDataset=Clazz.new_($I$(1,1));
this.dataTable=Clazz.new_($I$(2,1));
this.fftData=Clazz.array(Double.TYPE, [1]);
this.fft=Clazz.new_($I$(3,1).c$$I,[1]);
},1);

C$.$fields$=[['I',['domainType'],'O',['complexDataset','org.opensourcephysics.display.ComplexDataset','dataTable','org.opensourcephysics.display.DataTable','tableFrame','org.opensourcephysics.display.DataTableFrame','fftData','double[]','fft','org.opensourcephysics.numerics.FFT','ampPhaseItem','javax.swing.JMenuItem','+postItem','+barItem']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, title) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(4,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.complexDataset.setMarkerShape$I(4);
this.complexDataset.setXYColumnNames$S$S$S(xlabel, "re", "im");
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.complexDataset);
this.setTitle$S(title);
this.dataTable.add$javax_swing_table_TableModel(this.complexDataset.model);
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
this.postItem=Clazz.new_([$I$(5).getString$S("ComplexPlotFrame.MenuItem.PostView")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.postItem);
this.postItem.setSelected$Z(true);
var actionListener=((P$.FFTFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTFrame'].convertToPostView$.apply(this.b$['org.opensourcephysics.frames.FFTFrame'], []);
});
})()
), Clazz.new_(P$.FFTFrame$1.$init$,[this, null]));
this.postItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.postItem);
this.barItem=Clazz.new_([$I$(5).getString$S("ComplexPlotFrame.MenuItem.BarView")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.barItem);
actionListener=((P$.FFTFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTFrame'].convertToPhaseBarView$.apply(this.b$['org.opensourcephysics.frames.FFTFrame'], []);
});
})()
), Clazz.new_(P$.FFTFrame$2.$init$,[this, null]));
this.barItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.barItem);
this.ampPhaseItem=Clazz.new_([$I$(5).getString$S("ComplexPlotFrame.MenuItem.AmpPhase")],$I$(8,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.ampPhaseItem);
actionListener=((P$.FFTFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTFrame'].convertToAmpAndPhaseView$.apply(this.b$['org.opensourcephysics.frames.FFTFrame'], []);
});
})()
), Clazz.new_(P$.FFTFrame$3.$init$,[this, null]));
this.ampPhaseItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.ampPhaseItem);
menu.addSeparator$();
var tableItem=Clazz.new_([$I$(5).getString$S("DrawingFrame.DataTable_menu_item")],$I$(9,1).c$$S);
tableItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["T".$c(), $I$(11).MENU_SHORTCUT_KEY_MASK]));
var tableListener=((P$.FFTFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTFrame'].showDataTable$Z.apply(this.b$['org.opensourcephysics.frames.FFTFrame'], [true]);
});
})()
), Clazz.new_(P$.FFTFrame$4.$init$,[this, null]));
tableItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(tableItem);
var item=Clazz.new_([$I$(5).getString$S("DrawingFrame.DataTable_menu_item")],$I$(9,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(tableListener);
if ((this.drawingPanel != null ) && (this.drawingPanel.getPopupMenu$() != null ) ) {
this.drawingPanel.getPopupMenu$().add$javax_swing_JMenuItem(item);
}menu.addSeparator$();
tableItem=Clazz.new_([$I$(5).getString$S("GUIUtils.PhaseLegend")],$I$(9,1).c$$S);
tableListener=((P$.FFTFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTFrame'].complexDataset.showLegend$();
});
})()
), Clazz.new_(P$.FFTFrame$5.$init$,[this, null]));
tableItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(tableItem);
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S$S',  function (xlabel, reLabel, imLabel) {
this.complexDataset.setXYColumnNames$S$S$S(xlabel, reLabel, imLabel);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S(xlabel);
}});

Clazz.newMeth(C$, 'setDomainType$I',  function (type) {
this.domainType=type;
switch (this.domainType) {
case 0:
this.complexDataset.setXYColumnNames$S$S$S("mode", "re", "im");
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S($I$(5).getString$S("FFTFrame.Plot.XLabel.Mode"));
}break;
case 1:
this.complexDataset.setXYColumnNames$S$S$S("f", "re", "im");
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S($I$(5).getString$S("FFTFrame.Plot.XLabel.Frequency"));
}break;
case 2:
this.complexDataset.setXYColumnNames$S$S$S("omega", "re", "im");
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S($I$(5).getString$S("FFTFrame.Plot.XLabel.Omega"));
}break;
case 3:
this.complexDataset.setXYColumnNames$S$S$S("k", "re", "im");
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S($I$(5).getString$S("FFTFrame.Plot.XLabel.WaveNumber"));
}break;
case 4:
this.complexDataset.setXYColumnNames$S$S$S("p", "re", "im");
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S($I$(5).getString$S("FFTFrame.Plot.XLabel.Momentum"));
}break;
}
});

Clazz.newMeth(C$, 'convertToPostView$',  function () {
this.complexDataset.setMarkerShape$I(4);
this.drawingPanel.invalidateImage$();
this.postItem.setSelected$Z(true);
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'convertToAmpAndPhaseView$',  function () {
this.complexDataset.setMarkerShape$I(2);
this.ampPhaseItem.setSelected$Z(true);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'convertToPhaseBarView$',  function () {
this.complexDataset.setMarkerShape$I(3);
this.barItem.setSelected$Z(true);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'doFFT$org_opensourcephysics_numerics_Function$org_opensourcephysics_numerics_Function$D$D$I',  function (reF, imF, xmin, xmax, n) {
if (2 * n != this.fftData.length) {
this.fftData=Clazz.array(Double.TYPE, [2 * n]);
this.fft=Clazz.new_($I$(3,1).c$$I,[n]);
}var off=((n * xmin / (xmax - xmin))|0);
off=Math.abs(off);
var xi=xmin;
var dx=(xmax - xmin) / n;
for (var i=0; i < n; i++) {
var ii=(off + i) % n;
this.fftData[2 * ii]=(reF == null ) ? 0 : reF.evaluate$D(xi);
this.fftData[2 * ii + 1]=(imF == null ) ? 0 : imF.evaluate$D(xi);
xi+=dx;
}
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
var domain=null;
switch (this.domainType) {
case 0:
domain=this.fft.getNaturalModes$();
break;
case 1:
domain=this.fft.getNaturalFreq$D$D(xmin, xmax);
break;
case 2:
case 4:
case 3:
domain=this.fft.getNaturalOmega$D$D(xmin, xmax);
break;
}
this.complexDataset.clear$();
this.complexDataset.append$DA$DA(domain, this.fftData);
});

Clazz.newMeth(C$, 'doRealFFT$DA$D$D',  function (data, xmin, xmax) {
var n=this.fft.getN$();
if (2 * data.length != this.fftData.length) {
n=data.length;
this.fftData=Clazz.array(Double.TYPE, [2 * n]);
this.fft=Clazz.new_($I$(3,1).c$$I,[n]);
}var off=((n * xmin / (xmax - xmin))|0);
off=Math.abs(off);
for (var i=0; i < n; i++) {
var ii=(off + i) % n;
this.fftData[2 * ii]=data[i];
this.fftData[2 * ii + 1]=0;
}
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
var domain=null;
switch (this.domainType) {
case 0:
domain=this.fft.getNaturalModes$();
break;
case 1:
domain=this.fft.getNaturalFreq$D$D(xmin, xmax);
break;
case 2:
case 4:
case 3:
domain=this.fft.getNaturalOmega$D$D(xmin, xmax);
break;
}
this.complexDataset.clear$();
this.complexDataset.append$DA$DA(domain, this.fftData);
});

Clazz.newMeth(C$, 'doFFT$DA$D$D',  function (data, xmin, xmax) {
var n=this.fft.getN$();
if (data.length != this.fftData.length) {
this.fftData=Clazz.array(Double.TYPE, [data.length]);
n=(data.length/2|0);
this.fft=Clazz.new_($I$(3,1).c$$I,[n]);
}var off=((n * xmin / (xmax - xmin))|0);
off=Math.abs(off);
for (var i=0; i < n; i++) {
var ii=(off + i) % n;
this.fftData[2 * ii]=data[2 * i];
this.fftData[2 * ii + 1]=data[2 * i + 1];
}
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
var domain=null;
switch (this.domainType) {
case 0:
domain=this.fft.getNaturalModes$();
break;
case 1:
domain=this.fft.getNaturalFreq$D$D(xmin, xmax);
break;
case 2:
case 4:
case 3:
domain=this.fft.getNaturalOmega$D$D(xmin, xmax);
break;
}
this.complexDataset.clear$();
this.complexDataset.append$DA$DA(domain, this.fftData);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.complexDataset]);
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.complexDataset);
this.showDataTable$Z(false);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.complexDataset);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.complexDataset.clear$();
this.dataTable.refreshTable$I(2);
this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'setLogScale$Z$Z',  function (xlog, ylog) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setLogScale$Z$Z(xlog, ylog);
}});

Clazz.newMeth(C$, 'showLegend$',  function () {
this.complexDataset.showLegend$();
});

Clazz.newMeth(C$, 'showDataTable$Z',  function (show) {
if (show) {
if ((this.tableFrame == null ) || !this.tableFrame.isDisplayable$() ) {
this.tableFrame=Clazz.new_([this.getTitle$() + " " + $I$(5).getString$S("TableFrame.TitleAddOn.Data") , this.dataTable],$I$(12,1).c$$S$org_opensourcephysics_display_DataTable);
this.tableFrame.setDefaultCloseOperation$I(2);
}this.dataTable.refreshTable$I(67108864);
this.dataTable.sort$I(0);
this.tableFrame.setVisible$Z(true);
} else {
this.tableFrame.setVisible$Z(false);
this.tableFrame.dispose$();
this.tableFrame=null;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
