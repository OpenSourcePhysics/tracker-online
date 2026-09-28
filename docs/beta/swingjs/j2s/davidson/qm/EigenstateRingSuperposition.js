(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.display.Dataset','org.opensourcephysics.display.ComplexDataset']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EigenstateRingSuperposition", null, null, 'davidson.qm.QMSuperposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.recoef=Clazz.array(Double.TYPE, [0]);
this.imcoef=Clazz.array(Double.TYPE, [0]);
this.energyScale=1;
},1);

C$.$fields$=[['D',['L','energyScale'],'O',['recoef','double[]','+imcoef','eigenstates','double[][]','x','double[]','+rePsi','+imPsi','+rho','+zeroArray']]]

Clazz.newMeth(C$, 'c$$I$D$D',  function (numpts, xmin, xmax) {
;C$.$init$.apply(this);
this.L=Math.abs(xmax - xmin);
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
 else dataset.clear$();
for (var j=0, n=this.x.length; j < n; j++) {
this.rho[j]=this.rePsi[j] * this.rePsi[j] + this.imPsi[j] * this.imPsi[j];
}
dataset.append$D$D(this.x[0], 0);
dataset.append$DA$DA(this.x, this.rho);
dataset.append$D$D(this.x[this.x.length - 1], 0);
return dataset;
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
}var n=re.length + 1;
n+=n % 2;
var numpts=this.x.length;
this.recoef=Clazz.array(Double.TYPE, [n]);
this.imcoef=Clazz.array(Double.TYPE, [n]);
System.arraycopy$O$I$O$I$I(re, 0, this.recoef, 1, re.length);
System.arraycopy$O$I$O$I$I(im, 0, this.imcoef, 1, im.length);
this.eigenstates=Clazz.array(Double.TYPE, [2 * n, numpts]);
var norm=Math.sqrt(1.0 / this.L);
for (var i=0; i < n; i+=2) {
var rePlus=this.eigenstates[2 * i];
var imPlus=this.eigenstates[2 * i + 1];
var reMinus=this.eigenstates[2 * i + 2];
var imMinus=this.eigenstates[2 * i + 3];
var k=((i/2|0)) * 2 * 3.141592653589793  / this.L;
for (var j=0; j < numpts; j++) {
var phase=k * this.x[j];
rePlus[j]=norm * Math.cos(phase);
imPlus[j]=norm * Math.sin(phase);
reMinus[j]=(i == 0) ? 0 : norm * Math.cos(-phase);
imMinus[j]=(i == 0) ? 0 : norm * Math.sin(-phase);
}
}
this.recoef[0]+=this.recoef[1];
this.imcoef[0]+=this.imcoef[1];
this.recoef[1]=0;
this.imcoef[1]=0;
return true;
});

Clazz.newMeth(C$, 'getEigenValue$I',  function (i) {
return ((i/2|0)) * ((i/2|0)) * 4 * this.energyScale * 9.869604401089358  / this.L / this.L;
});

Clazz.newMeth(C$, 'update$D',  function (time) {
System.arraycopy$O$I$O$I$I(this.zeroArray, 0, this.rePsi, 0, this.rePsi.length);
System.arraycopy$O$I$O$I$I(this.zeroArray, 0, this.imPsi, 0, this.imPsi.length);
if (this.eigenstates.length == 0) return;
var kk=-4 * time * this.energyScale * 9.869604401089358  / this.L / this.L;
for (var i=0, ns=this.recoef.length; i < ns; i++) {
var re=this.recoef[i];
var im=this.imcoef[i];
var phase=kk * ((i/2|0)) * ((i/2|0)) ;
var sin=Math.sin(phase);
var cos=Math.cos(phase);
var reArray=this.eigenstates[2 * i];
var imArray=this.eigenstates[2 * i + 1];
for (var j=0, n=this.x.length; j < n; j++) {
var a=(re * cos - im * sin);
var b=(im * cos + re * sin);
this.rePsi[j]+=(a * reArray[j] - b * imArray[j]);
this.imPsi[j]+=(b * reArray[j] + a * imArray[j]);
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
