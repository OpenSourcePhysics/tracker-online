(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.frames.Scalar2DFrame','org.opensourcephysics.analysis.FourierAnalysis','java.text.DecimalFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WignerISW");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wignerFrame=Clazz.new_($I$(1,1).c$$S$S$S,["x", "p", "Wigner Distribution"]);
this.gutterpts=0;
this.zmax=0;
this.time=0;
this.prange=4;
this.analysis=Clazz.new_($I$(2,1));
this.decimalFormat=Clazz.new_($I$(3,1).c$$S,["0.00"]);
this.showTime=false;
},1);

C$.$fields$=[['Z',['showTime'],'D',['zmax','time','prange'],'I',['gutterpts'],'O',['wignerFrame','org.opensourcephysics.frames.Scalar2DFrame','fvec','double[]','+fftvec','+zerovec','fieldData','double[][]','analysis','org.opensourcephysics.analysis.FourierAnalysis','decimalFormat','java.text.DecimalFormat','wignerPanel','org.opensourcephysics.display.DrawingPanel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.wignerFrame.setPaletteType$I(2);
this.wignerFrame.setExpandedZ$Z$D(true, 1.5);
this.wignerPanel=this.wignerFrame.getDrawingPanel$();
}, 1);

Clazz.newMeth(C$, 'initialize$davidson_qm_QMWavefunction$I',  function (superposition, gutterpts) {
var rePsi=superposition.getRePsi$();
var imPsi=superposition.getImPsi$();
var xvec=superposition.getX$();
var numpts=rePsi.length;
this.gutterpts=gutterpts;
this.fvec=Clazz.array(Double.TYPE, [2 * numpts]);
this.zerovec=Clazz.array(Double.TYPE, [2 * numpts]);
this.fieldData=Clazz.array(Double.TYPE, [xvec.length, xvec.length]);
var xmin=superposition.getXMin$();
var xmax=superposition.getXMax$();
this.fftvec=this.analysis.doAnalysis$DA$DA$I(xvec, this.fvec, gutterpts);
var omega=this.analysis.getNaturalOmega$();
if (numpts % 2 == 0) {
var shift=(omega[gutterpts + 1] - omega[gutterpts]) / 4;
this.wignerFrame.setAll$DAA$D$D$D$D(this.fieldData, xmin, xmax, omega[gutterpts] / 2 + shift, -omega[gutterpts] / 2 + shift);
} else {
this.wignerFrame.setAll$DAA$D$D$D$D(this.fieldData, xmin, xmax, omega[gutterpts] / 2, -omega[gutterpts] / 2);
}for (var i=0, nx=this.fieldData.length; i < nx; i++) {
this.getWignerSlice$DA$DA$DA$I(rePsi, imPsi, this.fvec, i - (nx/2|0));
var fftData=this.analysis.repeatAnalysis$DA(this.fvec);
for (var j=0, ny=this.fieldData[0].length; j < ny; j++) {
this.fieldData[i][j]=fftData[2 * (j + gutterpts)];
if (this.zmax < this.fieldData[i][j] ) {
this.zmax=this.fieldData[i][j];
}}
}
this.wignerFrame.setAutoscaleX$Z(false);
this.wignerFrame.setPreferredMinMaxX$D$D(xmin, xmax);
this.wignerFrame.setAutoscaleY$Z(false);
this.wignerFrame.setPreferredMinMaxY$D$D(-this.prange, this.prange);
this.wignerFrame.setZRange$Z$D$D(false, -this.zmax, this.zmax);
this.wignerFrame.setShowGrid$Z(false);
this.wignerFrame.setAll$DAA(this.fieldData);
if (this.showTime) {
this.wignerFrame.setMessage$S("t=" + this.decimalFormat.format$D(this.time));
} else {
this.wignerFrame.setMessage$S(null);
}this.wignerFrame.render$();
});

Clazz.newMeth(C$, 'doStep$davidson_qm_QMWavefunction',  function (superposition) {
var rePsi=superposition.getRePsi$();
var imPsi=superposition.getImPsi$();
for (var i=0, nx=this.fieldData.length; i < nx; i++) {
this.getWignerSlice$DA$DA$DA$I(rePsi, imPsi, this.fvec, i - (nx/2|0));
var fftData=this.analysis.repeatAnalysis$DA(this.fvec);
for (var j=0, ny=this.fieldData[0].length; j < ny; j++) {
this.fieldData[i][j]=fftData[2 * (j + this.gutterpts)];
if (this.zmax < this.fieldData[i][j] ) {
this.zmax=this.fieldData[i][j];
}}
}
this.wignerFrame.setZRange$Z$D$D(false, -this.zmax, this.zmax);
this.wignerFrame.setAll$DAA(this.fieldData);
if (this.showTime) {
this.wignerFrame.setMessage$S("t=" + this.decimalFormat.format$D(this.time));
} else {
this.wignerFrame.setMessage$S(null);
}this.wignerPanel.repaint$();
});

Clazz.newMeth(C$, 'getWignerSlice$DA$DA$DA$I',  function (rePsi, imPsi, fvec, shift) {
System.arraycopy$O$I$O$I$I(this.zerovec, 0, fvec, 0, this.zerovec.length);
for (var i=0, n=rePsi.length; i < n; i++) {
var ip=shift + i;
var im=shift + n - 1 - i;
if ((ip < 0) || (im < 0) || (ip >= n) || (im >= n)  ) {
continue;
}var re1=rePsi[ip];
var im1=imPsi[ip];
var re2=rePsi[im];
var im2=imPsi[im];
fvec[2 * i]=re1 * re2 + im1 * im2;
fvec[2 * i + 1]=-re2 * im1 + re1 * im2;
}
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
