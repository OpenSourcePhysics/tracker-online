(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'davidson.qm.EigenstateShooting','javax.swing.JOptionPane','org.opensourcephysics.display.Dataset','org.opensourcephysics.display.ComplexDataset']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EigenstateShootingSuperposition", null, null, 'davidson.qm.QMSuperposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.states=Clazz.array(Double.TYPE, [120, null]);
this.vals=Clazz.array(Double.TYPE, [120]);
this.recoef=Clazz.array(Double.TYPE, [120]);
this.imcoef=Clazz.array(Double.TYPE, [120]);
this.energyScale=1;
},1);

C$.$fields$=[['D',['energyScale'],'I',['numstates'],'O',['states','double[][]','vals','double[]','+recoef','+imcoef','qmsystem','davidson.qm.EigenstateShooting','x','double[]','+rePsi','+imPsi','+rho','+zeroArray']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Function$I$D$D',  function (potential, numpts, xmin, xmax) {
C$.c$$org_opensourcephysics_numerics_Function$I$D$D$D$D.apply(this, [potential, numpts, xmin, xmax, 1.0E-6, 0.01]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Function$I$D$D$D$D',  function (potential, numpts, xmin, xmax, odeTol, bisectionTol) {
;C$.$init$.apply(this);
this.rePsi=Clazz.array(Double.TYPE, [numpts]);
this.imPsi=Clazz.array(Double.TYPE, [numpts]);
this.rho=Clazz.array(Double.TYPE, [numpts]);
this.zeroArray=Clazz.array(Double.TYPE, [numpts]);
this.x=Clazz.array(Double.TYPE, [numpts]);
this.qmsystem=Clazz.new_($I$(1,1).c$$org_opensourcephysics_numerics_Function$I$D$D,[potential, numpts, xmin, xmax]);
this.qmsystem.setSolverTolerance$D(odeTol);
this.qmsystem.setBisectionTolerance$D(bisectionTol);
var xo=xmin;
for (var j=0, n=this.rePsi.length; j < n; j++) {
this.x[j]=xo;
xo+=this.qmsystem.dx;
}
this.setCoef$DA$DA(null, null);
}, 1);

Clazz.newMeth(C$, 'setEnergyScale$D',  function (scale) {
this.energyScale=scale;
});

Clazz.newMeth(C$, 'getEnergyScale$',  function () {
return this.energyScale;
});

Clazz.newMeth(C$, 'getReCoef$',  function () {
return this.recoef;
});

Clazz.newMeth(C$, 'getImCoef$',  function () {
return this.imcoef;
});

Clazz.newMeth(C$, 'setCoef$DA$DA',  function (re, im) {
if ((re != null  && re.length > 120 ) || (im != null  && im.length > 120 ) ) $I$(2).showMessageDialog$java_awt_Component$O$S$I(null, "The number of engenstates cannot be larger than 120. You are obviously a theorist who needs help.", "Input Error.", 0);
if (re == null ) {
re=(im == null  ? Clazz.array(Double.TYPE, [1]) : Clazz.array(Double.TYPE, [im.length]));
}if (im == null ) {
im=Clazz.array(Double.TYPE, [re.length]);
}if (re.length < im.length) {
var temp=re;
re=Clazz.array(Double.TYPE, [im.length]);
System.arraycopy$O$I$O$I$I(temp, 0, re, 0, temp.length);
}if (im.length < re.length) {
var temp=im;
im=Clazz.array(Double.TYPE, [re.length]);
System.arraycopy$O$I$O$I$I(temp, 0, im, 0, temp.length);
}var noerror=true;
var enmin=1.7976931348623157E308;
for (var j=0, n=this.x.length; j < n; j++) {
enmin=Math.min(enmin, this.qmsystem.pot.evaluate$D(this.x[j]));
}
this.numstates=Math.min(re.length, this.recoef.length);
System.arraycopy$O$I$O$I$I(re, 0, this.recoef, 0, this.numstates);
System.arraycopy$O$I$O$I$I(im, 0, this.imcoef, 0, this.numstates);
for (var i=0; i < this.numstates; i++) {
if (this.states[i] != null ) continue;
var converge;
if (i > 0) {
var enmax=this.vals[i - 1] + i;
for (var count=0; count < 32 && this.qmsystem.solve$D(enmax) < i + 1 ; count++) {
enmax+=enmax - this.vals[i - 1];
}
converge=this.qmsystem.calcEigenfunction$I$D$D(i + 1, this.vals[i - 1], enmax);
} else {
var enmax=enmin + 1;
for (var count=0; count < 32 && this.qmsystem.solve$D(enmax) < 1 ; count++) {
enmax+=enmax - enmin;
}
converge=this.qmsystem.calcEigenfunction$I$D$D(i + 1, enmin, enmax);
}if (converge) {
this.vals[i]=this.qmsystem.energy;
this.states[i]=this.qmsystem.psi.clone$();
} else {
System.out.println$S("state did not converge. n=" + i);
noerror=false;
}}
return noerror;
});

Clazz.newMeth(C$, 'getEigenValue$I',  function (i) {
return this.vals[i] * this.energyScale;
});

Clazz.newMeth(C$, 'update$D',  function (time) {
System.arraycopy$O$I$O$I$I(this.zeroArray, 0, this.rePsi, 0, this.rePsi.length);
System.arraycopy$O$I$O$I$I(this.zeroArray, 0, this.imPsi, 0, this.imPsi.length);
for (var i=0; i < this.numstates; i++) {
var state=this.states[i];
if (state == null ) continue;
var re=this.recoef[i];
var im=this.imcoef[i];
var phase=-time * this.vals[i] * this.energyScale ;
var sin=Math.sin(phase);
var cos=Math.cos(phase);
for (var j=0, n=this.rePsi.length; j < n; j++) {
this.rePsi[j]+=(re * cos - im * sin) * state[j];
this.imPsi[j]+=(im * cos + re * sin) * state[j];
}
}
this.rePsi[0]=this.rePsi[this.rePsi.length - 1]=0;
this.imPsi[0]=this.imPsi[this.imPsi.length - 1]=0;
});

Clazz.newMeth(C$, 'getRho$org_opensourcephysics_display_Dataset',  function (dataset) {
if (dataset == null ) dataset=Clazz.new_($I$(3,1));
for (var j=0, n=this.rePsi.length; j < n; j++) {
this.rho[j]=this.rePsi[j] * this.rePsi[j] + this.imPsi[j] * this.imPsi[j];
}
return dataset.set$DA$DA(this.x, this.rho);
});

Clazz.newMeth(C$, 'getNumpts$',  function () {
return this.x.length;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.x[0];
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.x[this.x.length - 1];
});

Clazz.newMeth(C$, 'getRePsi$',  function () {
return this.rePsi;
});

Clazz.newMeth(C$, 'getImPsi$',  function () {
return this.imPsi;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getEigenstates$',  function () {
return this.states;
});

Clazz.newMeth(C$, 'getPsi$org_opensourcephysics_display_ComplexDataset',  function (dataset) {
if (dataset == null ) dataset=Clazz.new_($I$(4,1));
 else dataset.clear$();
dataset.append$DA$DA$DA(this.x, this.rePsi, this.imPsi);
return dataset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
