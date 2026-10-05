(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.HessianMinimize','org.opensourcephysics.numerics.LUPDecomposition','org.opensourcephysics.numerics.ArrayLib']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LevenbergMarquardt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hessianMinimize=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['D',['rmsd_tmp','rmsd_tmp1','rmsd'],'I',['Iterations'],'O',['H','double[][]','xtmp','double[]','+xtmp1','hessianMinimize','org.opensourcephysics.numerics.HessianMinimize']]]

Clazz.newMeth(C$, 'minimize$org_opensourcephysics_numerics_MultiVarFunction$DA$I$D',  function (Veq, x, max, tol) {
var m=x.length;
this.H=Clazz.array(Double.TYPE, [m, m]);
var xxn=Clazz.array(Double.TYPE, [m]);
var D=Clazz.array(Double.TYPE, [m]);
var dx=Clazz.array(Double.TYPE, [m]);
this.xtmp=Clazz.array(Double.TYPE, [m]);
this.xtmp1=Clazz.array(Double.TYPE, [m]);
this.rmsd_tmp=Veq.evaluate$DA(x);
this.rmsd_tmp1=this.rmsd_tmp;
System.arraycopy$O$I$O$I$I(x, 0, this.xtmp, 0, m);
System.arraycopy$O$I$O$I$I(x, 0, this.xtmp1, 0, m);
for (var i=0; i < m; i++) {
dx[i]=(Math.abs(x[i]) + 1.0) / 100000.0;
}
var err;
var relerr;
var Lambda;
Lambda=0.001;
err=9999.0;
relerr=9999.0;
this.Iterations=0;
while ((err > tol * 1.0E-6 ) && (relerr > tol * 1.0E-6 ) && (this.Iterations < max) && (Lambda > 1.0E-6 )  ){
++this.Iterations;
this.H=this.hessianMinimize.getHessian$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$DA(Veq, x, D, dx);
for (var i=0; i < m; i++) {
this.H[i][i]=this.H[i][i] + Lambda;
}
var lu=Clazz.new_($I$(2,1).c$$DAA,[this.H]);
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
this.rmsd=Veq.evaluate$DA(x);
if (this.rmsd < this.rmsd_tmp1 ) {
Lambda=Lambda / 10.0;
this.rmsd_tmp1=this.rmsd;
System.arraycopy$O$I$O$I$I(x, 0, this.xtmp1, 0, m);
} else {
System.arraycopy$O$I$O$I$I(this.xtmp1, 0, x, 0, m);
Lambda=10.0 * Lambda;
}err=Math.sqrt(err);
relerr=err / (relerr + tol);
}
if (err > tol * 1.0E-6  && relerr > tol * 1.0E-6  ) {
return false;
}this.check_rmsd$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$I(Veq, this.xtmp, x, m);
return true;
});

Clazz.newMeth(C$, 'check_rmsd$org_opensourcephysics_numerics_MultiVarFunction$DA$DA$I',  function (Veq, xtmp, xx, mx) {
if (java.lang.Double.isNaN$D($I$(3).sum$DA(xx))) {
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
