(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.display.Dataset','org.opensourcephysics.display.ComplexDataset','davidson.qm.EigenstateSHO']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EigenstateSHOSuperposition", null, null, 'davidson.qm.QMSuperposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.recoef=Clazz.array(Double.TYPE, [0]);
this.imcoef=Clazz.array(Double.TYPE, [0]);
this.energyScale=1;
},1);

C$.$fields$=[['D',['energyScale'],'O',['recoef','double[]','+imcoef','eigenstates','double[][]','x','double[]','+rePsi','+imPsi','+rho','+zeroArray']]]

Clazz.newMeth(C$, 'c$$I$D$D',  function (numpts, xmin, xmax) {
;C$.$init$.apply(this);
this.rePsi=Clazz.array(Double.TYPE, [numpts]);
this.imPsi=Clazz.array(Double.TYPE, [numpts]);
this.rho=Clazz.array(Double.TYPE, [numpts]);
this.x=Clazz.array(Double.TYPE, [numpts]);
this.zeroArray=Clazz.array(Double.TYPE, [numpts]);
var xo=xmin;
var dx=(xmax - xmin) / (numpts - 1);
for (var j=0, n=numpts; j < n; j++) {
this.x[j]=xo;
xo+=dx;
}
this.eigenstates=Clazz.array(Double.TYPE, [0, numpts]);
this.setCoef$DA$DA(Clazz.array(Double.TYPE, [0]), Clazz.array(Double.TYPE, [0]));
}, 1);

Clazz.newMeth(C$, 'getRho$org_opensourcephysics_display_Dataset',  function (dataset) {
if (dataset == null ) dataset=Clazz.new_($I$(1,1));
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
return this.eigenstates;
});

Clazz.newMeth(C$, 'getPsi$org_opensourcephysics_display_ComplexDataset',  function (dataset) {
if (dataset == null ) dataset=Clazz.new_($I$(2,1));
 else dataset.clear$();
dataset.append$DA$DA$DA(this.x, this.rePsi, this.imPsi);
return dataset;
});

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
}var n=re.length;
var numpts=this.x.length;
this.recoef=Clazz.array(Double.TYPE, [n]);
this.imcoef=Clazz.array(Double.TYPE, [n]);
System.arraycopy$O$I$O$I$I(re, 0, this.recoef, 0, n);
System.arraycopy$O$I$O$I$I(im, 0, this.imcoef, 0, n);
this.eigenstates=Clazz.array(Double.TYPE, [n, numpts]);
for (var i=0; i < n; i++) {
var state=this.eigenstates[i];
var sho=Clazz.new_($I$(3,1).c$$I,[i]);
for (var j=0; j < numpts; j++) {
state[j]=sho.evaluate$D(this.x[j]);
}
}
return true;
});

Clazz.newMeth(C$, 'getEigenValue$I',  function (i) {
return this.energyScale * (0.5 + i);
});

Clazz.newMeth(C$, 'update$D',  function (time) {
System.arraycopy$O$I$O$I$I(this.zeroArray, 0, this.rePsi, 0, this.rePsi.length);
System.arraycopy$O$I$O$I$I(this.zeroArray, 0, this.imPsi, 0, this.imPsi.length);
if (this.eigenstates.length == 0) return;
var kk=-time * this.energyScale;
for (var i=0, ns=this.recoef.length; i < ns; i++) {
var re=this.recoef[i];
var im=this.imcoef[i];
var phase=kk * (0.5 + i);
var sin=Math.sin(phase);
var cos=Math.cos(phase);
var state=this.eigenstates[i];
for (var j=0, n=this.x.length; j < n; j++) {
this.rePsi[j]+=(re * cos - im * sin) * state[j];
this.imPsi[j]+=(im * cos + re * sin) * state[j];
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
