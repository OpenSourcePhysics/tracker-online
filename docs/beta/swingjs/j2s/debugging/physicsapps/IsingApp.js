(function(){var P$=Clazz.newPackage("debugging.physicsapps"),p$1={},I$=[[0,'org.opensourcephysics.display.DrawingPanel','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.Stripchart','java.text.DecimalFormat','org.opensourcephysics.display2d.BinaryLattice','org.opensourcephysics.numerics.Util','org.opensourcephysics.controls.AnimationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsingApp", null, 'debugging.applets.AbstractEmbeddableAnimation', 'org.opensourcephysics.controls.Animation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawingPanel=Clazz.new_($I$(1,1));
this.drawingFrame=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display_DrawingPanel,[this.drawingPanel]);
this.magPanel=Clazz.new_(["Time", "Magnetization", "<M> ="],$I$(3,1).c$$S$S$S);
this.magFrame=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display_DrawingPanel,[this.magPanel]);
this.enPanel=Clazz.new_(["Time", "Energy", "<E> ="],$I$(3,1).c$$S$S$S);
this.enFrame=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display_DrawingPanel,[this.enPanel]);
this.enData=Clazz.new_($I$(4,1).c$$D$D,[10, 100]);
this.magData=Clazz.new_($I$(4,1).c$$D$D,[10, 100]);
this.format=Clazz.new_($I$(5,1).c$$S,["0.00E0"]);
this.size=32;
this.J=1;
this.flipsPerStep=1;
this.H=0;
this.time_counter=0;
this.fieldChanged=false;
},1);

C$.$fields$=[['Z',['fieldChanged'],'D',['E','T','H','newH'],'I',['size','J','M','flipsPerStep','time_counter'],'O',['drawingPanel','org.opensourcephysics.display.DrawingPanel','drawingFrame','org.opensourcephysics.display.DrawingFrame','magPanel','org.opensourcephysics.display.PlottingPanel','magFrame','org.opensourcephysics.display.DrawingFrame','enPanel','org.opensourcephysics.display.PlottingPanel','enFrame','org.opensourcephysics.display.DrawingFrame','enData','org.opensourcephysics.display.Stripchart','+magData','format','java.text.DecimalFormat','lattice','org.opensourcephysics.display2d.BinaryLattice','spinData','int[][]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.spinData=Clazz.array(Integer.TYPE, [this.size, this.size]);
this.lattice=Clazz.new_($I$(6,1).c$$I$I,[this.size, this.size]);
this.drawingPanel.setBuffered$Z(true);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.drawingPanel.setAutoscaleX$Z(true);
this.drawingPanel.setAutoscaleY$Z(true);
this.drawingPanel.setSquareAspect$Z(true);
this.enData.setConnected$Z(true);
this.enData.setMarkerShape$I(0);
this.enPanel.addDrawable$org_opensourcephysics_display_Drawable(this.enData);
this.enFrame.setTitle$S("Ising Energy");
this.magData.setConnected$Z(true);
this.magData.setMarkerShape$I(0);
this.magPanel.addDrawable$org_opensourcephysics_display_Drawable(this.magData);
this.magFrame.setTitle$S("Ising Magnetization");
}, 1);

Clazz.newMeth(C$, 'setControl$org_opensourcephysics_controls_Control',  function (control) {
this.stopAnimation$();
this.control=control;
if (control == null ) {
return;
}this.initMyControl$();
});

Clazz.newMeth(C$, 'initMyControl$',  function () {
this.control.setValue$S$I("grid size", this.size);
this.control.setValue$S$D("T", this.T);
this.control.setValue$S$D("H", this.H);
this.initializeAnimation$();
p$1.randomizeCells.apply(this, []);
this.resetAnimation$();
});

Clazz.newMeth(C$, 'resetAnimation$',  function () {
this.stopAnimation$();
this.control.clearMessages$();
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
this.enPanel.repaint$();
this.magPanel.repaint$();
});

Clazz.newMeth(C$, 'randomize$',  function () {
var isRunning=this.animationThread != null ;
this.stopAnimation$();
p$1.randomizeCells.apply(this, []);
if (isRunning) {
this.startAnimation$();
} else {
this.enData.clear$();
this.magData.clear$();
this.time_counter=0;
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
this.enPanel.repaint$();
this.magPanel.repaint$();
}});

Clazz.newMeth(C$, 'randomizeCells',  function () {
for (var i=0; i < this.size; i++) {
for (var j=0; j < this.size; j++) {
if (Math.random() > 0.5 ) {
this.spinData[i][j]=1;
} else {
this.spinData[i][j]=-1;
}}
}
this.lattice.setBlock$I$I$IAA(0, 0, this.spinData);
this.getME$();
}, p$1);

Clazz.newMeth(C$, 'initializeAnimation$',  function () {
this.stopAnimation$();
var newSize=this.control.getInt$S("grid size");
if (newSize != this.size) {
this.size=newSize;
this.spinData=Clazz.array(Integer.TYPE, [this.size, this.size]);
this.lattice=Clazz.new_($I$(6,1).c$$I$I,[this.size, this.size]);
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
p$1.randomizeCells.apply(this, []);
}this.flipsPerStep=this.size * this.size;
if (this.T < 0 ) {
System.out.println$S("\nTemperature is negative, automatically negated!");
this.T*=-1;
}this.T=this.control.getDouble$S("T");
this.H=this.control.getDouble$S("H");
this.time_counter=0;
this.getME$();
this.enData.clear$();
this.magData.clear$();
this.enData.append$D$D(this.time_counter / 10.0, this.E);
this.magData.append$D$D(this.time_counter / 10.0, this.M);
var ave=$I$(7,"computeAverage$DA$I$I",[this.magData.getYPoints$(), 0, this.magData.getIndex$()]);
this.magPanel.setTitle$S("<M> = " + this.format.format$D(ave));
ave=$I$(7,"computeAverage$DA$I$I",[this.enData.getYPoints$(), 0, this.enData.getIndex$()]);
this.enPanel.setTitle$S("<E> = " + this.format.format$D(ave));
this.enPanel.repaint$();
this.magPanel.repaint$();
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'getME$',  function () {
this.newH=this.H;
this.fieldChanged=false;
var nn_sum=0;
this.M=0;
for (var i=0; i < this.size; i++) {
for (var j=0; j < this.size; j++) {
this.M+=this.spinData[i][j];
if (this.spinData[i][(j + 1) % this.size] == this.spinData[i][j]) {
++nn_sum;
} else {
--nn_sum;
}if (this.spinData[(i + 1) % this.size][j] == this.spinData[i][j]) {
++nn_sum;
} else {
--nn_sum;
}}
}
this.E=-this.J * nn_sum - this.H * this.M;
});

Clazz.newMeth(C$, 'adjustE$',  function () {
this.E-=(this.newH - this.H) * this.M;
this.H=this.newH;
this.fieldChanged=false;
});

Clazz.newMeth(C$, 'flip',  function () {
var x=((Math.random() * this.size)|0);
var y=((Math.random() * this.size)|0);
var delta_M=-2 * this.spinData[x][y];
var delta_nn_sum=this.spinData[(x - 1 + this.size) % this.size][y] + this.spinData[(x + 1) % this.size][y] + this.spinData[x][(y - 1 + this.size) % this.size] + this.spinData[x][(y + 1) % this.size] ;
delta_nn_sum=-2 * this.spinData[x][y] * delta_nn_sum ;
var delta_E=-this.J * delta_nn_sum - this.H * delta_M;
if ((delta_E <= 0 ) || (Math.random() < Math.exp(-delta_E / this.T) ) ) {
this.spinData[x][y]*=-1;
this.M+=delta_M;
this.E+=delta_E;
return true;
} else {
return false;
}}, p$1);

Clazz.newMeth(C$, 'stepIsingModel$',  function () {
if (this.fieldChanged) {
this.adjustE$();
}for (var i=0; i < this.flipsPerStep; i++) {
p$1.flip.apply(this, []);
}
++this.time_counter;
this.lattice.setBlock$I$I$IAA(0, 0, this.spinData);
if (this.fieldChanged) {
this.adjustE$();
}this.enData.append$D$D(this.time_counter / 10.0, this.E);
this.magData.append$D$D(this.time_counter / 10.0, this.M);
var ave=$I$(7,"computeAverage$DA$I$I",[this.magData.getYPoints$(), 0, this.magData.getIndex$()]);
this.magPanel.setTitle$S("<M> = " + this.format.format$D(ave));
ave=$I$(7,"computeAverage$DA$I$I",[this.enData.getYPoints$(), 0, this.enData.getIndex$()]);
this.enPanel.setTitle$S("<E> = " + this.format.format$D(ave));
});

Clazz.newMeth(C$, 'doStep$',  function () {
this.stepIsingModel$();
this.drawingPanel.render$();
this.enPanel.render$();
this.magPanel.render$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var model=Clazz.new_(C$);
var control=Clazz.new_($I$(8,1).c$$org_opensourcephysics_controls_Animation,[model]);
control.addButton$S$S("randomize", "Randomize");
model.setControl$org_opensourcephysics_controls_Control(control);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
