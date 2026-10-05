(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.EigenvalueDecomposition','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Polynomial", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['coefficients','double[]']]]

Clazz.newMeth(C$, 'c$$DA',  function (coef) {
;C$.$init$.apply(this);
this.coefficients=coef;
}, 1);

Clazz.newMeth(C$, 'getCoefficients$',  function () {
return this.coefficients.clone$();
});

Clazz.newMeth(C$, 'c$$SA',  function (coef) {
;C$.$init$.apply(this);
this.coefficients=Clazz.array(Double.TYPE, [coef.length]);
for (var i=0, n=coef.length; i < n; i++) {
try {
this.coefficients[i]=Double.parseDouble$S(coef[i]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.coefficients[i]=0;
} else {
throw ex;
}
}
}
}, 1);

Clazz.newMeth(C$, 'evalPolynomial$D$DA',  function (x, coeff) {
var n=coeff.length - 1;
var y=coeff[n];
for (var i=n - 1; i >= 0; i--) {
y=coeff[i] + (y * x);
}
return y;
}, 1);

Clazz.newMeth(C$, 'add$D',  function (r) {
var n=this.coefficients.length;
var coef=Clazz.array(Double.TYPE, [n]);
coef[0]=this.coefficients[0] + r;
for (var i=1; i < n; i++) {
coef[i]=this.coefficients[i];
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_Polynomial',  function (p) {
var n=Math.max(p.degree$(), this.degree$()) + 1;
var coef=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
coef[i]=this.coefficient$I(i) + p.coefficient$I(i);
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'coefficient$I',  function (n) {
return (n < this.coefficients.length) ? this.coefficients[n] : 0;
});

Clazz.newMeth(C$, 'deflate$D',  function (r) {
var n=this.degree$();
var remainder=this.coefficients[n];
var coef=Clazz.array(Double.TYPE, [n]);
for (var k=n - 1; k >= 0; k--) {
coef[k]=remainder;
remainder=remainder * r + this.coefficients[k];
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'degree$',  function () {
return this.coefficients.length - 1;
});

Clazz.newMeth(C$, 'derivative$',  function () {
var n=this.degree$();
if (n == 0) {
var coef=Clazz.array(Double.TYPE, -1, [0]);
return Clazz.new_(C$.c$$DA,[coef]);
}var coef=Clazz.array(Double.TYPE, [n]);
for (var i=1; i <= n; i++) {
coef[i - 1]=this.coefficients[i] * i;
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'divide$D',  function (r) {
return this.multiply$D(1 / r);
});

Clazz.newMeth(C$, 'divide$org_opensourcephysics_numerics_Polynomial',  function (p) {
return this.divideWithRemainder$org_opensourcephysics_numerics_Polynomial(p)[0];
});

Clazz.newMeth(C$, 'divideWithRemainder$org_opensourcephysics_numerics_Polynomial',  function (p) {
var answer=Clazz.array(C$, [2]);
var m=this.degree$();
var n=p.degree$();
if (m < n) {
var q=Clazz.array(Double.TYPE, -1, [0]);
answer[0]=Clazz.new_(C$.c$$DA,[q]);
answer[1]=p;
return answer;
}var quotient=Clazz.array(Double.TYPE, [m - n + 1]);
var coef=Clazz.array(Double.TYPE, [m + 1]);
for (var k=0; k <= m; k++) {
coef[k]=this.coefficients[k];
}
var norm=1 / p.coefficient$I(n);
for (var k=m - n; k >= 0; k--) {
quotient[k]=coef[n + k] * norm;
for (var j=n + k - 1; j >= k; j--) {
coef[j]-=quotient[k] * p.coefficient$I(j - k);
}
}
var remainder=Clazz.array(Double.TYPE, [n]);
for (var k=0; k < n; k++) {
remainder[k]=coef[k];
}
answer[0]=Clazz.new_(C$.c$$DA,[quotient]);
answer[1]=Clazz.new_(C$.c$$DA,[remainder]);
return answer;
});

Clazz.newMeth(C$, 'integral$',  function () {
return this.integral$D(0);
});

Clazz.newMeth(C$, 'integral$D',  function (value) {
var n=this.coefficients.length + 1;
var coef=Clazz.array(Double.TYPE, [n]);
coef[0]=value;
for (var i=1; i < n; i++) {
coef[i]=this.coefficients[i - 1] / i;
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'multiply$D',  function (r) {
var n=this.coefficients.length;
var coef=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
coef[i]=this.coefficients[i] * r;
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'multiply$org_opensourcephysics_numerics_Polynomial',  function (p) {
var n=p.degree$() + this.degree$();
var coef=Clazz.array(Double.TYPE, [n + 1]);
for (var i=0; i <= n; i++) {
coef[i]=0;
for (var k=0; k <= i; k++) {
coef[i]+=p.coefficient$I(k) * this.coefficient$I(i - k);
}
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'roots$',  function () {
var highest=this.coefficients.length - 1;
for (var i=highest; i > 0; i--) {
if (this.coefficients[highest] != 0 ) {
break;
}highest=i;
}
if (highest == 0) return Clazz.array(Double.TYPE, [2, 0]);
var ch=this.coefficients[highest];
var companion=Clazz.array(Double.TYPE, [highest, highest]);
companion[0][highest - 1]=-this.coefficients[0] / ch;
for (var i=0; i < highest - 1; i++) {
companion[0][i]=-this.coefficients[highest - i - 1 ] / ch;
companion[i + 1][i]=1;
}
var eigen=Clazz.new_($I$(1,1).c$$DAA,[companion]);
var roots=Clazz.array(Double.TYPE, [2, null]);
roots[0]=eigen.getRealEigenvalues$();
roots[1]=eigen.getImagEigenvalues$();
return roots;
});

Clazz.newMeth(C$, 'rootsReal$',  function () {
var roots=this.roots$();
var n=roots[0].length;
var temp=Clazz.array(Double.TYPE, [n]);
var count=0;
for (var i=0; i < n; i++) {
var magSquared=roots[0][i] * roots[0][i] + roots[1][i] * roots[1][i];
if (roots[1][i] * roots[1][i] / magSquared < 1.0E-12 ) {
temp[count]=roots[0][i];
++count;
}}
var re=Clazz.array(Double.TYPE, [count]);
System.arraycopy$O$I$O$I$I(temp, 0, re, 0, count);
return re;
});

Clazz.newMeth(C$, 'subtract$D',  function (r) {
return this.add$D(-r);
});

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_Polynomial',  function (p) {
var n=Math.max(p.degree$(), this.degree$()) + 1;
var coef=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
coef[i]=this.coefficient$I(i) - p.coefficient$I(i);
}
return Clazz.new_(C$.c$$DA,[coef]);
});

Clazz.newMeth(C$, 'toString',  function () {
if ((this.coefficients == null ) || (this.coefficients.length < 1) ) {
return "Polynomial coefficients are undefined.";
}var sb=Clazz.new_($I$(2,1));
var firstNonZeroCoefficientPrinted=false;
for (var n=0, m=this.coefficients.length; n < m; n++) {
if (this.coefficients[n] != 0 ) {
if (firstNonZeroCoefficientPrinted) {
sb.append$S((this.coefficients[n] > 0 ) ? " + " : " ");
} else {
firstNonZeroCoefficientPrinted=true;
}if ((n == 0) || (this.coefficients[n] != 1 ) ) {
sb.append$S(Double.toString$D(this.coefficients[n]));
}if (n > 0) {
sb.append$S(" x^" + n);
}}}
var str=sb.toString();
if (str.equals$O("")) {
return "0";
}return str;
});

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
var n=this.coefficients.length;
var answer=this.coefficients[--n];
while (n > 0){
answer=answer * x + this.coefficients[--n];
}
return answer;
});

Clazz.newMeth(C$, 'valueAndDerivative$D',  function (x) {
var n=this.coefficients.length;
var answer=Clazz.array(Double.TYPE, [2]);
answer[0]=this.coefficients[--n];
answer[1]=0;
while (n > 0){
answer[1]=answer[1] * x + answer[0];
answer[0]=answer[0] * x + this.coefficients[--n];
}
return answer;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
