(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.display2d.ComplexCarpet','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display2d.ArrayData','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BandedSampleTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.carpet=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display2d_GridData,[null]);
this.plottingPanel=Clazz.new_($I$(2,1).c$$S$S$S,["x", "t", null]);
this.drawingFrame=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display_DrawingPanel,[this.plottingPanel]);
this.numpts=128;
this.numdt=64;
this.griddata=Clazz.new_($I$(4,1).c$$I$I$I,[this.numpts, this.numdt, 3]);
},1);

C$.$fields$=[['I',['numpts','numdt'],'O',['carpet','org.opensourcephysics.display2d.ComplexCarpet','plottingPanel','org.opensourcephysics.display.PlottingPanel','drawingFrame','org.opensourcephysics.display.DrawingFrame','griddata','org.opensourcephysics.display2d.ArrayData']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.carpet);
this.plottingPanel.setAutoscaleX$Z(true);
this.plottingPanel.setAutoscaleY$Z(true);
this.griddata.setScale$D$D$D$D(0, this.numpts, 0, this.numdt);
this.carpet.setAutoscaleZ$Z$D(false, 1);
this.carpet.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
this.carpet.clearData$();
this.drawingFrame.setVisible$Z(true);
Clazz.new_([((P$.BandedSampleTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BandedSampleTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['test.BandedSampleTest'].initCarpet$.apply(this.b$['test.BandedSampleTest'], []);
this.b$['test.BandedSampleTest'].plottingPanel.repaint$();
});
})()
), Clazz.new_(P$.BandedSampleTest$1.$init$,[this, null]))],$I$(5,1).c$$Runnable).start$();
}, 1);

Clazz.newMeth(C$, 'initCarpet$',  function () {
var row=Clazz.array(Double.TYPE, [3, this.numpts]);
for (var i=0; i < (this.numdt/2|0); i++) {
for (var j=0; j < this.numpts; j++) {
row[0][j]=Math.random();
row[1][j]=0;
row[2][j]=1;
}
this.carpet.setTopRow$DAA(row);
this.plottingPanel.render$();
}
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
