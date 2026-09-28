(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "LagrangeInterpolator", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['hornerCoef','double[]','+xd','+yd']]]

Clazz.newMeth(C$, 'c$$DA$DA',  function (xdata, ydata) {
;C$.$init$.apply(this);
this.hornerCoef=Clazz.array(Double.TYPE, [xdata.length]);
this.xd=xdata;
this.yd=ydata;
p$1.computeCoefficients$DA$DA.apply(this, [xdata, ydata]);
}, 1);

Clazz.newMeth(C$, 'computeCoefficients$DA$DA',  function (xd, yd) {
var n=xd.length;
for (var i=0; i < n; i++) {
this.hornerCoef[i]=yd[i];
}
n-=1;
for (var i=0; i < n; i++) {
for (var k=n; k > i; k--) {
var k1=k - 1;
var kn=k - (i + 1);
this.hornerCoef[k]=(this.hornerCoef[k] - this.hornerCoef[k1]) / (xd[k] - xd[kn]);
}
}
}, p$1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
var n=this.hornerCoef.length;
var answer=this.hornerCoef[--n];
while (--n >= 0){
answer=answer * (x - this.xd[n]) + this.hornerCoef[n];
}
return answer;
});

Clazz.newMeth(C$, 'getCoefficients$',  function () {
var n=this.xd.length;
var temp=Clazz.array(Double.TYPE, [n]);
var coef=Clazz.array(Double.TYPE, [n]);
temp[n - 1]=-this.xd[0];
for (var i=1; i < n; i++) {
for (var j=n - i - 1 ; j < n - 1; j++) {
temp[j]-=this.xd[i] * temp[j + 1];
}
temp[n - 1]-=this.xd[i];
}
for (var j=0; j < n; j++) {
var a=n;
for (var k=n - 1; k >= 1; k--) {
a=k * temp[k] + this.xd[j] * a;
}
var b=this.yd[j] / a;
var c=1.0;
for (var k=n - 1; k >= 0; k--) {
coef[k]+=c * b;
c=temp[k] + this.xd[j] * c;
}
}
return coef;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
