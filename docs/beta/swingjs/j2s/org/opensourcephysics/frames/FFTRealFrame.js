(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.analysis.FourierSinCosAnalysis','java.awt.Color','org.opensourcephysics.display.DisplayRes','javax.swing.JPanel','javax.swing.border.EtchedBorder','org.opensourcephysics.ejs.control.GroupControl','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FFTRealFrame", null, 'org.opensourcephysics.frames.PlotFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.domainType=1;
this.gutter=0;
this.fft=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['domainType','gutter'],'O',['fft','org.opensourcephysics.analysis.FourierSinCosAnalysis','connectedItem','javax.swing.JMenuItem','+postItem','gui','org.opensourcephysics.ejs.control.GroupControl','$x','double[]','+data']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, title) {
;C$.superclazz.c$$S$S$S.apply(this,[xlabel, ylabel, title]);C$.$init$.apply(this);
this.setConnected$Z(false);
this.setMarkerShape$I$I(0, 8);
this.setMarkerColor$I$java_awt_Color(0, $I$(2).DARK_GRAY);
this.limitAutoscaleY$D$D(-1.0E-5, 1.0E-5);
this.setXYColumnNames$I$S$S$S(0, $I$(3).getString$S("FourierAnalysis.Column.Frequency"), $I$(3).getString$S("FourierSinCosAnalysis.Column.Power"), $I$(3).getString$S("FourierSinCosAnalysis.PowerSpectrum"));
this.setMarkerShape$I$I(1, 8);
this.setMarkerColor$I$java_awt_Color(1, $I$(2).RED);
this.setXYColumnNames$I$S$S$S(1, $I$(3).getString$S("FourierAnalysis.Column.Frequency"), $I$(3).getString$S("FourierAnalysis.Column.Real"), $I$(3).getString$S("FourierAnalysis.RealCoefficients"));
this.setMarkerShape$I$I(2, 8);
this.setMarkerColor$I$java_awt_Color(2, $I$(2).BLUE);
this.setXYColumnNames$I$S$S$S(2, $I$(3).getString$S("FourierAnalysis.Column.Frequency"), $I$(3).getString$S("FourierAnalysis.Column.Imaginary"), $I$(3).getString$S("FourierAnalysis.ImaginaryCoefficients"));
this.getDataTable$().setRowNumberVisible$Z(true);
this.buildUserInterface$();
this.showPower$();
}, 1);

Clazz.newMeth(C$, 'buildUserInterface$',  function () {
this.setSize$I$I(350, 300);
var inputPanel=Clazz.new_($I$(4,1));
inputPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(5,1)));
this.gui=Clazz.new_($I$(6,1).c$$O,[this]);
this.gui.addObject$O$S$S(inputPanel, "Panel", "name=inputPanel;layout=flow");
this.gui.add$S$S("Panel", "name=radioPanel;parent=inputPanel");
this.gui.add$S$S("RadioButton", "parent=radioPanel;text= sin;action=showSin()");
this.gui.add$S$S("RadioButton", "parent=radioPanel;text= cos;action=showCos()");
this.gui.add$S$S("RadioButton", "parent=radioPanel;text= power;action=showPower();selected=true");
this.gui.add$S$S("Panel", "name=numberPanel; parent= inputPanel; layout=flow");
this.gui.add$S$S("Label", "parent=numberPanel; text=added points=");
this.gui.add$S$S("NumberField", "parent=numberPanel; variable=gutter; format=000; action=setGutter();size=40,16");
this.getContentPane$().add$java_awt_Component$O(inputPanel, "South");
});

Clazz.newMeth(C$, 'showSin$',  function () {
this.getDataset$I(0).setVisible$Z(false);
this.getDataset$I(1).setVisible$Z(false);
this.getDataset$I(2).setVisible$Z(true);
this.invalidateImage$();
this.repaint$();
});

Clazz.newMeth(C$, 'showCos$',  function () {
this.getDataset$I(0).setVisible$Z(false);
this.getDataset$I(1).setVisible$Z(true);
this.getDataset$I(2).setVisible$Z(false);
this.invalidateImage$();
this.repaint$();
});

Clazz.newMeth(C$, 'showPower$',  function () {
this.getDataset$I(0).setVisible$Z(true);
this.getDataset$I(1).setVisible$Z(false);
this.getDataset$I(2).setVisible$Z(false);
this.invalidateImage$();
this.repaint$();
});

Clazz.newMeth(C$, 'setGutter$',  function () {
this.gutter=this.gui.getInt$S("gutter");
this.doFFT$();
});

Clazz.newMeth(C$, 'setGutter$I',  function (n) {
this.gutter=n;
this.gui.setValue$S$I("gutter", n);
this.doFFT$();
});

Clazz.newMeth(C$, 'setXLabel$S',  function (xlabel) {
this.setXYColumnNames$I$S$S$S(0, xlabel, $I$(3).getString$S("FourierSinCosAnalysis.Column.Power"), $I$(3).getString$S("FourierSinCosAnalysis.PowerSpectrum"));
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S(xlabel);
}});

Clazz.newMeth(C$, 'addMenuItems$',  function () {
C$.superclazz.prototype.addMenuItems$.apply(this, []);
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return;
}var menu=this.getMenu$S($I$(3).getString$S("DrawingFrame.Views_menu"));
if (menu == null ) {
menu=Clazz.new_([$I$(3).getString$S("DrawingFrame.Views_menu")],$I$(7,1).c$$S);
menuBar.add$javax_swing_JMenu(menu);
menuBar.validate$();
} else {
menu.addSeparator$();
}var menubarGroup=Clazz.new_($I$(8,1));
this.postItem=Clazz.new_([$I$(3).getString$S("ComplexPlotFrame.MenuItem.PostView")],$I$(9,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.postItem);
this.postItem.setSelected$Z(true);
var actionListener=((P$.FFTRealFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTRealFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTRealFrame'].convertToPostView$.apply(this.b$['org.opensourcephysics.frames.FFTRealFrame'], []);
});
})()
), Clazz.new_(P$.FFTRealFrame$1.$init$,[this, null]));
this.postItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.postItem);
this.connectedItem=Clazz.new_([$I$(3).getString$S("FFTRealFrame.MenuItem.ConnectedView")],$I$(9,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.connectedItem);
actionListener=((P$.FFTRealFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FFTRealFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.FFTRealFrame'].convertToConnectedView$.apply(this.b$['org.opensourcephysics.frames.FFTRealFrame'], []);
});
})()
), Clazz.new_(P$.FFTRealFrame$2.$init$,[this, null]));
this.connectedItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(this.connectedItem);
});

Clazz.newMeth(C$, 'setDomainType$I',  function (type) {
this.domainType=type;
switch (this.domainType) {
case 1:
this.fft.useRadians$Z(false);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S($I$(3).getString$S("FourierAnalysis.Column.Frequency"));
}break;
case 2:
this.fft.useRadians$Z(true);
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S("$\\omega$");
}break;
}
});

Clazz.newMeth(C$, 'convertToPostView$',  function () {
this.setConnected$Z(false);
this.setMarkerShape$I$I(0, 8);
this.setMarkerShape$I$I(1, 8);
this.setMarkerShape$I$I(2, 8);
this.drawingPanel.invalidateImage$();
this.postItem.setSelected$Z(true);
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'convertToConnectedView$',  function () {
this.setConnected$Z(true);
this.setMarkerShape$I$I(0, 0);
this.setMarkerShape$I$I(1, 0);
this.setMarkerShape$I$I(2, 0);
this.connectedItem.setSelected$Z(true);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'doFFT$DA$DA$I',  function (xNew, dataNew, gutter) {
this.$x=Clazz.array(Double.TYPE, [2 * ((xNew.length/2|0))]);
System.arraycopy$O$I$O$I$I(xNew, 0, this.$x, 0, this.$x.length);
this.data=Clazz.array(Double.TYPE, [2 * ((dataNew.length/2|0))]);
System.arraycopy$O$I$O$I$I(dataNew, 0, this.data, 0, this.data.length);
this.gutter=gutter;
this.gui.setValue$S$I("gutter", gutter);
this.doFFT$();
});

Clazz.newMeth(C$, 'doFFT$',  function () {
if (this.$x == null ) {
return;
}this.fft.doAnalysis$DA$DA$I(this.$x, this.data, this.gutter);
this.clearData$();
var arrayData=this.fft.getData2D$();
this.append$I$DA$DA(0, arrayData[0], arrayData[1]);
this.append$I$DA$DA(1, arrayData[0], arrayData[2]);
this.append$I$DA$DA(2, arrayData[0], arrayData[3]);
this.updateTable$I(1);
this.invalidateImage$();
this.repaint$();
});

Clazz.newMeth(C$, 'setLogScale$Z$Z',  function (xlog, ylog) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setLogScale$Z$Z(xlog, ylog);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
