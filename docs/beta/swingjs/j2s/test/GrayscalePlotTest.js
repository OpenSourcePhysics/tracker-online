(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javax.swing.JTextField','org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display2d.GrayscalePlot','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DrawingFrame']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GrayscalePlotTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numpts=128;
this.griddata=Clazz.new_($I$(2,1).c$$I$I$I,[this.numpts, this.numpts, 3]);
this.grayscalePlot=((P$.GrayscalePlotTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GrayscalePlotTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.GrayscalePlot'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.b$['test.GrayscalePlotTest'].setRandomVals$.apply(this.b$['test.GrayscalePlotTest'], []);
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
});
})()
), Clazz.new_($I$(3,1).c$$org_opensourcephysics_display2d_GridData,[this, null, this.griddata],P$.GrayscalePlotTest$1));
this.plottingPanel=Clazz.new_($I$(4,1).c$$S$S$S,["x", "t", null]);
this.drawingFrame=Clazz.new_($I$(5,1).c$$org_opensourcephysics_display_DrawingPanel,[this.plottingPanel]);
},1);

C$.$fields$=[['I',['numpts'],'O',['griddata','org.opensourcephysics.display2d.ArrayData','grayscalePlot','org.opensourcephysics.display2d.GrayscalePlot','plottingPanel','org.opensourcephysics.display.PlottingPanel','drawingFrame','org.opensourcephysics.display.DrawingFrame']]
,['O',['textLayoutFont','java.awt.Font']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.griddata.setScale$D$D$D$D(-1.0, 1.0, 0, 1.0);
this.grayscalePlot.setAutoscaleZ$Z$D$D(true, 0, 1);
this.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.grayscalePlot);
this.plottingPanel.setAutoscaleX$Z(true);
this.plottingPanel.setAutoscaleY$Z(true);
this.griddata.setScale$D$D$D$D(0, this.numpts, 0, this.numpts);
this.drawingFrame.setVisible$Z(true);
this.plottingPanel.repaint$();
}, 1);

Clazz.newMeth(C$, 'setRandomVals$',  function () {
System.out.println$S("GSPlotTest.setRandomVals");
var data=this.griddata.getData$();
var dataR=data[0];
var r=Math.random();
for (var i=0; i < this.numpts; i++) {
for (var j=0; j < this.numpts; j++) {
dataR[i][j]=(r > 0.7  ? 255.0 * i / this.numpts : r > 0.5  ? 255.0 * j / this.numpts : 255.0 * i / this.numpts * j / this.numpts);
}
}
this.grayscalePlot.update$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.textLayoutFont=Clazz.new_($I$(1,1)).getFont$();
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
