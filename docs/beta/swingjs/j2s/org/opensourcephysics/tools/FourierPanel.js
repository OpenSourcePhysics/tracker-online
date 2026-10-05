(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.awt.Color','org.opensourcephysics.display.ColorIcon','java.awt.BorderLayout','org.opensourcephysics.display.DatasetManager','org.opensourcephysics.display.DataTable','org.opensourcephysics.display.PlottingPanel','javax.swing.JPanel','javax.swing.JSplitPane','javax.swing.JScrollPane','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.display.TeXParser','org.opensourcephysics.display.Dataset','javax.swing.JCheckBox',['org.opensourcephysics.tools.FourierPanel','.PlotCheckBox'],'org.opensourcephysics.analysis.FourierSinCosAnalysis']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FourierPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['PlotCheckBox',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sourceData','org.opensourcephysics.display.Dataset','plot','org.opensourcephysics.display.PlottingPanel','table','org.opensourcephysics.display.DataTable','fourierManager','org.opensourcephysics.display.DatasetManager','splitPane','javax.swing.JSplitPane','buttons','javax.swing.JCheckBox[]','plotPanel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(3,1))]);C$.$init$.apply(this);
this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.fourierManager=Clazz.new_($I$(4,1));
this.fourierManager.setXPointsLinked$Z(true);
this.table=Clazz.new_($I$(5,1));
this.table.add$javax_swing_table_TableModel(this.fourierManager.model);
this.plot=Clazz.new_($I$(6,1).c$$S$S$S,["", "", ""]);
this.plotPanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.plotPanel.add$java_awt_Component$O(this.plot, "Center");
this.splitPane=Clazz.new_($I$(8,1).c$$I,[1]);
this.splitPane.setResizeWeight$D(1);
var scroller=Clazz.new_($I$(9,1).c$$java_awt_Component,[this.table]);
this.splitPane.setRightComponent$java_awt_Component(scroller);
this.splitPane.setLeftComponent$java_awt_Component(this.plotPanel);
this.add$java_awt_Component$O(this.splitPane, "Center");
});

Clazz.newMeth(C$, 'refreshFourierData$org_opensourcephysics_display_Dataset$S',  function (data, name) {
var dialog=this.getTopLevelAncestor$();
dialog.setTitle$S($I$(10).getString$S("DataToolTab.Dialog.Fourier.Title"));
this.fourierManager.removeDatasets$();
var fourierData=C$.createFourierData$org_opensourcephysics_display_Dataset(data);
if (fourierData == null ) return;
var datasets=fourierData.getDatasets$();
this.createButtons$java_util_ArrayList(datasets);
for (var next, $next = datasets.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.fourierManager.addDataset$org_opensourcephysics_display_Dataset(next);
}
this.table.refreshTable$I(1);
name=$I$(11).removeSubscripting$S(name);
var x=$I$(11,"removeSubscripting$S",[data.getXColumnName$()]);
var y=$I$(11,"removeSubscripting$S",[data.getYColumnName$()]);
this.plot.setTitle$S(name + " [" + x + ", " + y + "]" );
this.refreshPlot$();
});

Clazz.newMeth(C$, 'refreshPlot$',  function () {
this.plot.removeDrawables$Class(Clazz.getClass($I$(12)));
var s="";
for (var i=0; i < this.buttons.length; i++) {
if (this.buttons[i].isSelected$()) {
var data=this.fourierManager.getDataset$I(i);
this.plot.addDrawable$org_opensourcephysics_display_Drawable(data);
this.plot.setXLabel$S(data.getXColumnName$());
if (s.length$() > 0) s+=", ";
s+=data.getYColumnName$();
}}
this.plot.setYLabel$S(s);
this.plot.repaint$();
});

Clazz.newMeth(C$, 'createButtons$java_util_ArrayList',  function (datasets) {
if (this.buttons == null ) {
this.buttons=Clazz.array($I$(13), [datasets.size$()]);
var buttonPanel=Clazz.new_($I$(7,1));
this.plotPanel.add$java_awt_Component$O(buttonPanel, "South");
for (var i=0; i < this.buttons.length; i++) {
var next=datasets.get$I(i);
this.buttons[i]=Clazz.new_([this, null, next.getYColumnName$(), next.getFillColor$()],$I$(14,1).c$$S$java_awt_Color);
buttonPanel.add$java_awt_Component(this.buttons[i]);
}
this.buttons[0].setSelected$Z(true);
}});

Clazz.newMeth(C$, 'createFourierData$org_opensourcephysics_display_Dataset',  function (dataset) {
if (dataset == null ) return null;
var x=dataset.getXPoints$();
var y=dataset.getYPoints$();
var n=dataset.getIndex$();
if (n < 2) return null;
if (n % 2 == 1) {
var xnew=Clazz.array(Double.TYPE, [n - 1]);
var ynew=Clazz.array(Double.TYPE, [n - 1]);
System.arraycopy$O$I$O$I$I(x, 0, xnew, 0, n - 1);
System.arraycopy$O$I$O$I$I(y, 0, ynew, 0, n - 1);
dataset.clear$();
dataset.append$DA$DA(xnew, ynew);
x=xnew;
y=ynew;
}var fft=Clazz.new_($I$(15,1));
fft.doAnalysis$DA$DA$I(x, y, 0);
return fft;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FourierPanel, "PlotCheckBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JCheckBox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fillColor=$I$(1).WHITE;
},1);

C$.$fields$=[['O',['icon','org.opensourcephysics.display.ColorIcon','outlineColor','java.awt.Color','+fillColor']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Color',  function (text, color) {
;C$.superclazz.c$$S.apply(this,[text]);C$.$init$.apply(this);
this.outlineColor=color;
this.icon=Clazz.new_($I$(2,1).c$$java_awt_Color$java_awt_Color$I$I,[this.fillColor, this.outlineColor, 13, 13]);
this.setIcon$javax_swing_Icon(this.icon);
this.addActionListener$java_awt_event_ActionListener(((P$.FourierPanel$PlotCheckBox$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FourierPanel$PlotCheckBox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var checkBox=e.getSource$();
this.b$['org.opensourcephysics.tools.FourierPanel.PlotCheckBox'].setSelected$Z.apply(this.b$['org.opensourcephysics.tools.FourierPanel.PlotCheckBox'], [checkBox.isSelected$()]);
this.b$['org.opensourcephysics.tools.FourierPanel'].refreshPlot$.apply(this.b$['org.opensourcephysics.tools.FourierPanel'], []);
});
})()
), Clazz.new_(P$.FourierPanel$PlotCheckBox$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'setSelected$Z',  function (select) {
this.icon.setColor$java_awt_Color(select ? this.outlineColor : this.fillColor);
C$.superclazz.prototype.setSelected$Z.apply(this, [select]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
