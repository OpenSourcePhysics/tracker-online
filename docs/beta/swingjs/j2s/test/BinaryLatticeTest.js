(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ArrayData','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display2d.BinaryLattice']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BinaryLatticeTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numpts=128;
this.griddata=Clazz.new_($I$(1,1).c$$I$I$I,[this.numpts, this.numpts, 3]);
this.size=16;
this.plottingPanel=Clazz.new_($I$(2,1).c$$S$S$S,["x", "t", null]);
this.drawingFrame=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display_DrawingPanel,[this.plottingPanel]);
},1);

C$.$fields$=[['I',['numpts','size'],'O',['griddata','org.opensourcephysics.display2d.ArrayData','lattice','org.opensourcephysics.display2d.BinaryLattice','spinData','int[][]','plottingPanel','org.opensourcephysics.display.PlottingPanel','drawingFrame','org.opensourcephysics.display.DrawingFrame']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.spinData=Clazz.array(Integer.TYPE, [this.size, this.size]);
this.lattice=Clazz.new_($I$(4,1).c$$I$I,[this.size, this.size]);
p$1.randomizeCells.apply(this, []);
this.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.plottingPanel.setAutoscaleX$Z(true);
this.plottingPanel.setAutoscaleY$Z(true);
this.griddata.setScale$D$D$D$D(0, this.numpts, 0, this.numpts);
this.drawingFrame.setVisible$Z(true);
this.plottingPanel.repaint$();
}, 1);

Clazz.newMeth(C$, 'randomizeCells',  function () {
for (var i=0; i < this.size; i++) {
for (var j=0; j < this.size; j++) {
if (j < i) {
this.spinData[i][j]=1;
} else {
this.spinData[i][j]=-1;
}}
}
this.lattice.setBlock$I$I$IAA(0, 0, this.spinData);
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
