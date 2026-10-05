(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.EigenvalueDecomposition','org.opensourcephysics.numerics.Util','org.opensourcephysics.numerics.NumericsLog','org.opensourcephysics.numerics.LUPDecomposition']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Root");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'quadraticReal$D$D$D',  function (a, b, c) {
var roots=Clazz.array(Double.TYPE, [2]);
var q=-0.5 * (b + ((b < 0.0 ) ? -1.0 : 1.0) * Math.sqrt(b * b - 4.0 * a * c ));
roots[0]=q / a;
roots[1]=c / q;
return roots;
}, 1);

Clazz.newMeth(C$, 'quadratic$D$D$D',  function (a, b, c) {
var roots=Clazz.array(Double.TYPE, [2, 2]);
var disc=b * b - 4.0 * a * c ;
if (disc < 0 ) {
roots[1][0]=roots[0][0]=-b / 2 / a ;
roots[1][1]-=roots[0][1]=Math.sqrt(-disc) / 2 / a ;
return roots;
}var q=-0.5 * (b + ((b < 0.0 ) ? -1.0 : 1.0) * Math.sqrt(disc));
roots[0][0]=q / a;
roots[1][0]=c / q;
return roots;
}, 1);

Clazz.newMeth(C$, 'cubic$D$D$D$D',  function (a, b, c, d) {
var roots=Clazz.array(Double.TYPE, [3, 2]);
var A=b / a;
var B=c / a;
var C=d / a;
var A2=A * A;
var Q=(3 * B - A2) / 9;
var R=(9 * A * B  - 27 * C - 2 * A * A2 ) / 54;
var D=Q * Q * Q  + R * R;
if (D == 0 ) {
var S=(R < 0 ) ? -Math.pow(-R, 0.3333333333333333) : Math.pow(R, 0.3333333333333333);
roots[0][0]=-A / 3 + 2 * S;
roots[2][0]=roots[1][0]=-A / 3 - S;
} else if (D > 0 ) {
D=Math.sqrt(D);
var S=(R + D < 0 ) ? -Math.pow(-R - D, 0.3333333333333333) : Math.pow(R + D, 0.3333333333333333);
var T=(R - D < 0 ) ? -Math.pow(-R + D, 0.3333333333333333) : Math.pow(R - D, 0.3333333333333333);
roots[0][0]=-A / 3 + S + T;
roots[2][0]=roots[1][0]=-A / 3 - (S + T) / 2;
roots[2][1]-=roots[1][1]=Math.sqrt(3) * (S - T) / 2;
} else {
Q=-Q;
var theta=Math.acos(R / Math.sqrt(Q * Q * Q )) / 3;
Q=2 * Math.sqrt(Q);
A=A / 3;
roots[0][0]=Q * Math.cos(theta) - A;
roots[1][0]=Q * Math.cos(theta + 2.0943951023931953) - A;
roots[2][0]=Q * Math.cos(theta + 4.1887902047863905) - A;
}return roots;
}, 1);

Clazz.newMeth(C$, 'polynomial$DA',  function (c) {
var n=c.length;
var highest=n - 1;
for (var i=highest; i > 0; i--) {
if (c[highest] != 0 ) {
break;
}highest=i;
}
var ch=c[highest];
var companion=Clazz.array(Double.TYPE, [highest, highest]);
companion[0][highest - 1]=-c[0] / ch;
for (var i=0; i < highest - 1; i++) {
companion[0][i]=-c[highest - i - 1 ] / ch;
companion[i + 1][i]=1;
}
var eigen=Clazz.new_($I$(1,1).c$$DAA,[companion]);
var roots=Clazz.array(Double.TYPE, [2, null]);
roots[0]=eigen.getRealEigenvalues$();
roots[1]=eigen.getImagEigenvalues$();
return roots;
}, 1);

Clazz.newMeth(C$, 'newton$org_opensourcephysics_numerics_Function$D$D',  function (f, x, tol) {
var count=0;
while (count < 15){
var xold=x;
var df=0;
try {
df=C$.fxprime$org_opensourcephysics_numerics_Function$D$D(f, x, tol);
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.NumericMethodException")){
return NaN;
} else {
throw ex;
}
}
x-=f.evaluate$D(x) / df;
if ($I$(2,"relativePrecision$D$D",[Math.abs(x - xold), x]) < tol ) {
return x;
}++count;
}
$I$(3).fine$S(count + " newton root trials made - no convergence achieved");
return NaN;
}, 1);

Clazz.newMeth(C$, 'newton$org_opensourcephysics_numerics_Function$org_opensourcephysics_numerics_Function$D$D',  function (f, df, x, tol) {
var count=0;
while (count < 15){
var xold=x;
x-=f.evaluate$D(x) / df.evaluate$D(x);
if ($I$(2,"relativePrecision$D$D",[Math.abs(x - xold), x]) < tol ) {
return x;
}++count;
}
$I$(3).fine$S(count + " newton root trials made - no convergence achieved");
return NaN;
}, 1);

Clazz.newMeth(C$, 'bisection$org_opensourcephysics_numerics_Function$D$D$D',  function (f, x1, x2, tol) {
var count=0;
var maxCount=((Math.log(Math.abs(x2 - x1) / tol) / Math.log(2))|0);
maxCount=Math.max(15, maxCount) + 2;
var y1=f.evaluate$D(x1);
var y2=f.evaluate$D(x2);
if (y1 * y2 > 0 ) {
$I$(3).fine$S(count + " bisection root - interval endpoints must have opposite sign");
return NaN;
}while (count < maxCount){
var x=(x1 + x2) / 2;
var y=f.evaluate$D(x);
if ($I$(2,"relativePrecision$D$D",[Math.abs(x1 - x2), x]) < tol ) {
return x;
}if (y * y1 > 0 ) {
x1=x;
y1=y;
} else {
x2=x;
y2=y;
}++count;
}
$I$(3).fine$S(count + " bisection root trials made - no convergence achieved");
return NaN;
}, 1);

Clazz.newMeth(C$, 'newtonBisection$org_opensourcephysics_numerics_Function$D$D$D$I',  function (f, xleft, xright, tol, icmax) {
var rtest=10 * tol;
var xbest;
var fleft;
var fright;
var fbest;
var derfbest;
var delta;
var icount=0;
var iflag=0;
fleft=f.evaluate$D(xleft);
fright=f.evaluate$D(xright);
if (fleft * fright >= 0 ) {
iflag=1;
}switch (iflag) {
case 1:
System.out.println$S("Root: No solution possible");
break;
}
if (Math.abs(fleft) <= Math.abs(fright) ) {
xbest=xleft;
fbest=fleft;
} else {
xbest=xright;
fbest=fright;
}derfbest=C$.fxprime$org_opensourcephysics_numerics_Function$D$D(f, xbest, tol);
while ((icount < icmax) && (rtest > tol ) ){
++icount;
if ((derfbest * (xbest - xleft) - fbest) * (derfbest * (xbest - xright) - fbest) <= 0 ) {
delta=-fbest / derfbest;
xbest=xbest + delta;
} else {
delta=(xright - xleft) / 2;
xbest=(xleft + xright) / 2;
}rtest=Math.abs(delta / xbest);
if (rtest <= tol ) {
} else {
fbest=f.evaluate$D(xbest);
derfbest=C$.fxprime$org_opensourcephysics_numerics_Function$D$D(f, xbest, tol);
if (fleft * fbest <= 0 ) {
xright=xbest;
fright=fbest;
} else {
xleft=xbest;
fleft=fbest;
}}}
if ((icount > icmax) || (rtest > tol ) ) {
$I$(3).fine$S(icmax + " Newton and bisection trials made - no convergence achieved");
return NaN;
}return xbest;
}, 1);

Clazz.newMeth(C$, 'newtonMultivar$org_opensourcephysics_numerics_VectorFunction$DA$I$D',  function (feqs, xx, max, tol) {
var Ndim=xx.length;
var xxn=Clazz.array(Double.TYPE, [Ndim]);
var F=Clazz.array(Double.TYPE, [Ndim]);
var Iterations=0;
var err;
var relerr;
err=9999.0;
relerr=9999.0;
while ((err > tol * 1.0E-6 ) && (relerr > tol * 1.0E-6 ) && (Iterations < max)  ){
++Iterations;
var lu=Clazz.new_([C$.getJacobian$org_opensourcephysics_numerics_VectorFunction$I$DA$D(feqs, Ndim, xx, tol / 100.0)],$I$(4,1).c$$DAA);
F=feqs.evaluate$DA$DA(xx, F);
xxn=lu.solve$DA(F);
for (var i=0; i < Ndim; i++) {
xxn[i]=xx[i] - xxn[i];
}
err=(xx[0] - xxn[0]) * (xx[0] - xxn[0]);
relerr=xx[0] * xx[0];
xx[0]=xxn[0];
for (var i=1; i < Ndim; i++) {
err=err + (xx[i] - xxn[i]) * (xx[i] - xxn[i]);
relerr=relerr + xx[i] * xx[i];
xx[i]=xxn[i];
}
err=Math.sqrt(err);
relerr=err / (relerr + tol);
}
return err;
}, 1);

Clazz.newMeth(C$, 'getJacobian$org_opensourcephysics_numerics_VectorFunction$I$DA$D',  function (feqs, n, xx, tol) {
var J=Clazz.array(Double.TYPE, [n, n]);
var xxp=Clazz.array(Double.TYPE, [n, n]);
var xxm=Clazz.array(Double.TYPE, [n, n]);
var fp=Clazz.array(Double.TYPE, [n, n]);
var fm=Clazz.array(Double.TYPE, [n, n]);
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
xxp[i][j]=xx[j];
xxm[i][j]=xx[j];
}
xxp[i][i]=xxp[i][i] + tol;
xxm[i][i]=xxm[i][i] - tol;
}
for (var i=0; i < n; i++) {
fp[i]=feqs.evaluate$DA$DA(xxp[i], fp[i]);
fm[i]=feqs.evaluate$DA$DA(xxm[i], fm[i]);
}
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
J[i][j]=(fp[j][i] - fm[j][i]) / tol / 2.0 ;
}
}
return J;
}, 1);

Clazz.newMeth(C$, 'fxprime$org_opensourcephysics_numerics_Function$D$D',  function (f, x, tol) {
var del=tol / 10;
var der=(f.evaluate$D(x + del) - f.evaluate$D(x - del)) / del / 2.0 ;
return der;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
