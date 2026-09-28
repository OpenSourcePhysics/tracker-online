(function(){var P$=Clazz.newPackage("davidson.stp"),I$=[[0,'org.opensourcephysics.display2d.CellLattice','java.awt.Color','java.util.Random','java.util.HashMap','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ising2d", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.J=1.0;
},1);

C$.$fields$=[['D',['J','T','H','E','E_acc','E2_acc','M_acc','absM_acc','M2_acc'],'I',['L','N','M','mcs','acceptedMoves'],'O',['spin','int[][]','lattice','org.opensourcephysics.display2d.CellLattice']]
,['D',['criticalTemperature']]]

Clazz.newMeth(C$, 'initialize$I$D$D',  function (_L, _T, _H) {
this.L=_L;
this.N=this.L * this.L;
this.T=_T;
this.H=_H;
this.lattice=Clazz.new_($I$(1,1).c$$I$I,[this.L, this.L]);
this.lattice.setIndexedColor$I$java_awt_Color(0, $I$(2).red);
this.lattice.setIndexedColor$I$java_awt_Color(2, $I$(2).green);
this.spin=Clazz.array(Integer.TYPE, [this.L, this.L]);
for (var i=0; i < this.L; ++i) {
for (var j=0; j < this.L; ++j) {
this.spin[i][j]=1;
}
}
this.M=this.N;
this.E=-2 * this.J * this.N  - this.H * this.M;
this.resetData$();
});

Clazz.newMeth(C$, 'setTemperature$D',  function (_T) {
this.T=_T;
});

Clazz.newMeth(C$, 'setExternalField$D',  function (_H) {
this.E+=this.H * this.M - _H * this.M;
this.H=_H;
});

Clazz.newMeth(C$, 'specificHeat$',  function () {
var mcs=(this.mcs == 0) ? 1 : this.mcs;
var E2_avg=this.E2_acc / mcs;
var E_avg=this.E_acc / mcs;
return (E2_avg - E_avg * E_avg) / (this.T * this.T * this.N );
});

Clazz.newMeth(C$, 'susceptibility$',  function () {
var mcs=(this.mcs == 0) ? 1 : this.mcs;
var M2_avg=this.M2_acc / mcs;
var M_avg=this.absM_acc / mcs;
return (M2_avg - M_avg * M_avg) / (this.T * this.N);
});

Clazz.newMeth(C$, 'resetData$',  function () {
this.mcs=0;
this.E_acc=0;
this.E2_acc=0;
this.absM_acc=0;
this.M_acc=0;
this.M2_acc=0;
this.acceptedMoves=0;
});

Clazz.newMeth(C$, 'doOneMCStep$',  function () {
for (var k=0; k < this.N; ++k) {
var i=((Math.random() * this.L)|0);
var j=((Math.random() * this.L)|0);
var dE=2 * this.J * this.spin[i][j] * (this.H + this.spin[(i + 1) % this.L][j] + this.spin[(i - 1 + this.L) % this.L][j] + this.spin[i][(j + 1) % this.L] + this.spin[i][(j - 1 + this.L) % this.L] ) ;
if ((dE <= 0 ) || (Math.random() < Math.exp(-dE / this.T) ) ) {
this.spin[i][j]=-this.spin[i][j];
++this.acceptedMoves;
this.E+=dE;
this.M+=2 * this.spin[i][j];
}}
this.accumulate_EM$();
++this.mcs;
});

Clazz.newMeth(C$, 'doOneWolffStep$D',  function (bondProbability) {
var wolffCluster=this.growWolffCluster$D(bondProbability);
var size=wolffCluster.size$();
for (var i=0; i < size; i++) {
var x=((wolffCluster.get$O(Integer.valueOf$I(i))).$c() % this.L)|0;
var y=((wolffCluster.get$O(Integer.valueOf$I(i))).$c() / this.L)|0;
var spinDirection=this.spin[x][y];
this.spin[x][y]*=-1;
;var dE=2 * spinDirection * (this.J * (this.spin[(x - 1 + this.L) % this.L][y] + this.spin[(x + 1 + this.L ) % this.L][y] + this.spin[x][(y - 1 + this.L) % this.L] + this.spin[x][(y + 1 + this.L ) % this.L] )) ;
this.M+=-2 * spinDirection;
this.E+=dE;
}
this.accumulate_EM$();
++this.mcs;
});

Clazz.newMeth(C$, 'growWolffCluster$D',  function (bondProbability) {
var r=Clazz.new_($I$(3,1));
var wolffSpins=Clazz.new_($I$(4,1).c$$I,[100]);
var visit=Clazz.array(Boolean.TYPE, [this.N]);
var stackSize=0;
var stackPointer=0;
var firstSpinX=r.nextInt$I(this.L);
var firstSpinY=r.nextInt$I(this.L);
var firstSpin=firstSpinX + this.L * firstSpinY;
var direction=this.spin[firstSpinX][firstSpinY];
wolffSpins.put$O$O(Integer.valueOf$I(stackPointer), Integer.valueOf$I(firstSpin));
++stackSize;
visit[firstSpin]=true;
while (stackPointer < stackSize){
var currentSpin=(wolffSpins.get$O(Integer.valueOf$I(stackPointer))).$c();
var neighborList=Clazz.new_($I$(5,1));
var currentX=currentSpin % this.L;
var currentY=(currentSpin/this.L|0);
neighborList.add$O(Integer.valueOf$I(currentX + ((currentY - 1 + this.L) % this.L) * this.L));
neighborList.add$O(Integer.valueOf$I(currentX + ((currentY + 1 + this.L ) % this.L) * this.L));
neighborList.add$O(Integer.valueOf$I((currentX - 1 + this.L) % this.L + currentY * this.L));
neighborList.add$O(Integer.valueOf$I((currentX + 1 + this.L ) % this.L + currentY * this.L));
visit[currentSpin]=true;
for (var nextSpin, $nextSpin = neighborList.iterator$(); $nextSpin.hasNext$()&&((nextSpin=($nextSpin.next$()).intValue$()),1);) {
var visited=visit[nextSpin];
var inSameDir=(this.spin[nextSpin % this.L][(nextSpin/this.L|0)] == direction);
var occupyBond=(r.nextDouble$() < bondProbability );
if (!visited) {
if (inSameDir && occupyBond ) {
if (!wolffSpins.containsValue$O(Integer.valueOf$I(nextSpin))) {
wolffSpins.put$O$O(Integer.valueOf$I(stackSize), Integer.valueOf$I(nextSpin));
++stackSize;
}}}}
++stackPointer;
}
return wolffSpins;
});

Clazz.newMeth(C$, 'accumulate_EM$',  function () {
this.E_acc+=this.E;
this.E2_acc+=this.E * this.E;
this.M_acc+=this.M;
this.absM_acc+=Math.abs(this.M);
this.M2_acc+=this.M * this.M;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.lattice == null ) {
return;
}for (var i=0; i < this.L; i++) {
for (var j=0; j < this.L; j++) {
this.lattice.setValue$I$I$B(i, j, ($b$[0] = (this.spin[i][j] + 1), $b$[0]));
}
}
this.lattice.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

C$.$static$=function(){C$.$static$=0;
C$.criticalTemperature=2.0 / Math.log(1.0 + Math.sqrt(2.0));
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
