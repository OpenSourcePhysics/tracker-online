(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'org.opensourcephysics.numerics.LUPDecomposition','org.opensourcephysics.numerics.ArrayLib']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HessianMinimize");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['rmsd_tmp','rmsd'],'I',['Iterations'],'O',['H','double[][]','xp','double[]','+xm','+xpp','+xpm','+xmp','+xmm','+xtmp']]]

Clazz.newMeth(C$, 'minimize$org_opensourcephysics_numerics_MultiVarFunction$DA$I$D',  function (Veq, x, max, tol) {
var m=x.length;
var xxn=Clazz.array(Double.TYPE, [m]);
var D=Clazz.array(Double.TYPE, [m]);
var dx=Clazz.array(Double.TYPE, [m]);
this.xtmp=Clazz.array(Double.TYPE, [m]);
System.arraycopy$O$I$O$I$I(x, 0, this.xtmp, 0, m);
this.rmsd_tmp=Veq.evaluate$DA(x);
this.rmsd=0;
this.crudeGuess$org_opensourcephysics_numerics_MultiVarFunction$DA(Veq, x);
this.check_rmsd$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$I(Veq, this.xtmp, x, m);
for (var i=0; i < m; i++) {
dx[i]=(Math.abs(x[i]) + 1.0) / 100000.0;
}
var err;
var relerr;
err=9999.0;
relerr=9999.0;
this.Iterations=0;
while ((err > tol * 1.0E-6 ) && (relerr > tol * 1.0E-6 ) && (this.Iterations < max)  ){
++this.Iterations;
var lu=Clazz.new_([this.getHessian$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$DA(Veq, x, D, dx)],$I$(1,1).c$$DAA);
xxn=lu.solve$DA(D);
for (var i=0; i < m; i++) {
xxn[i]=xxn[i] + x[i];
}
err=(x[0] - xxn[0]) * (x[0] - xxn[0]);
relerr=x[0] * x[0];
x[0]=xxn[0];
for (var i=1; i < m; i++) {
err=err + (x[i] - xxn[i]) * (x[i] - xxn[i]);
relerr=relerr + x[i] * x[i];
x[i]=xxn[i];
}
err=Math.sqrt(err);
relerr=err / (relerr + tol);
}
this.check_rmsd$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$I(Veq, this.xtmp, x, m);
return err;
});

Clazz.newMeth(C$, 'allocateArrays$I',  function (m) {
this.H=Clazz.array(Double.TYPE, [m, m]);
this.xp=Clazz.array(Double.TYPE, [m]);
this.xm=Clazz.array(Double.TYPE, [m]);
this.xpp=Clazz.array(Double.TYPE, [m]);
this.xpm=Clazz.array(Double.TYPE, [m]);
this.xmp=Clazz.array(Double.TYPE, [m]);
this.xmm=Clazz.array(Double.TYPE, [m]);
}, p$1);

Clazz.newMeth(C$, 'crudeGuess$org_opensourcephysics_numerics_MultiVarFunction$DA',  function (Veq, x) {
var sp;
var s0;
var sm;
var m=x.length;
var Nc=5;
var f=0.35;
var n=0;
var xp=Clazz.array(Double.TYPE, [m]);
var xm=Clazz.array(Double.TYPE, [m]);
var dx=Clazz.array(Double.TYPE, [m]);
for (var i=0; i < m; i++) {
dx[i]=(Math.abs(x[i]) + 1.0) / 1000.0;
}
while (n < Nc){
++n;
for (var i=0; i < m; i++) {
for (var k=0; k < m; k++) {
if (k == i) {
xp[i]=x[i] + dx[i];
xm[i]=x[i] - dx[i];
} else {
xp[k]=x[k];
xm[k]=x[k];
}}
sp=Veq.evaluate$DA(xp);
s0=Veq.evaluate$DA(x);
sm=Veq.evaluate$DA(xm);
x[i]=x[i] - f * 0.5 * dx[i] * (sp - sm)  / (sp - 2.0 * s0 + sm);
dx[i]=0.5 * dx[i];
}
}
});

Clazz.newMeth(C$, 'check_rmsd$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$I',  function (Veq, xtmp, xx, mx) {
if (java.lang.Double.isNaN$D($I$(2).sum$DA(xx))) {
this.rmsd=this.rmsd_tmp;
System.arraycopy$O$I$O$I$I(xtmp, 0, xx, 0, mx);
} else {
this.rmsd=Veq.evaluate$DA(xx);
if (this.rmsd <= this.rmsd_tmp ) {
this.rmsd_tmp=this.rmsd;
System.arraycopy$O$I$O$I$I(xx, 0, xtmp, 0, mx);
} else {
this.rmsd=this.rmsd_tmp;
System.arraycopy$O$I$O$I$I(xtmp, 0, xx, 0, mx);
}}});

Clazz.newMeth(C$, 'getIterations$',  function () {
return this.Iterations;
});

Clazz.newMeth(C$, 'getHessian$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$DA',  function (Veq, x, D, dx) {
var m=x.length;
if ((this.xp == null ) || (this.xp.length != m) ) {
p$1.allocateArrays$I.apply(this, [m]);
}for (var i=0; i < m; i++) {
for (var j=i; j < m; j++) {
if (i == j) {
for (var k=0; k < m; k++) {
this.xp[k]=x[k];
this.xm[k]=x[k];
}
this.xp[i]=x[i] + dx[i];
this.xm[i]=x[i] - dx[i];
this.H[i][i]=(Veq.evaluate$DA(this.xp) - 2.0 * Veq.evaluate$DA(x) + Veq.evaluate$DA(this.xm)) / (dx[i] * dx[i]);
} else {
for (var k=0; k < m; k++) {
this.xpp[k]=x[k];
this.xpm[k]=x[k];
this.xmp[k]=x[k];
this.xmm[k]=x[k];
}
this.xpp[i]=x[i] + dx[i];
this.xpp[j]=x[j] + dx[j];
this.xpm[i]=x[i] + dx[i];
this.xpm[j]=x[j] - dx[j];
this.xmp[i]=x[i] - dx[i];
this.xmp[j]=x[j] + dx[j];
this.xmm[i]=x[i] - dx[i];
this.xmm[j]=x[j] - dx[j];
this.H[i][j]=((Veq.evaluate$DA(this.xpp) - Veq.evaluate$DA(this.xpm)) / (2.0 * dx[j]) - (Veq.evaluate$DA(this.xmp) - Veq.evaluate$DA(this.xmm)) / (2.0 * dx[j])) / (2.0 * dx[i]);
this.H[j][i]=this.H[i][j];
}}
}
for (var i=0; i < m; i++) {
for (var k=0; k < m; k++) {
this.xp[k]=x[k];
this.xm[k]=x[k];
}
this.xp[i]=x[i] + dx[i];
this.xm[i]=x[i] - dx[i];
D[i]=-(Veq.evaluate$DA(this.xp) - Veq.evaluate$DA(this.xm)) / (2.0 * dx[i]);
}
return this.H;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
