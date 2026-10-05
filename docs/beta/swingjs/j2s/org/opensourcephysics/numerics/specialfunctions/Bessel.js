(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'org.opensourcephysics.numerics.specialfunctions.Bessel','java.util.HashMap','org.opensourcephysics.numerics.specialfunctions.Messages',['org.opensourcephysics.numerics.specialfunctions.Bessel','.BesselFunction'],['org.opensourcephysics.numerics.specialfunctions.Bessel','.BesselDerivative']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bessel", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['BesselFunction',8],['BesselDerivative',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['functionMap','java.util.Map','+derivativeMap']]]

Clazz.newMeth(C$, 'getFunction$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).getString$S("Bessel.0.neg_order")]);
}var f=C$.functionMap.get$O(Integer.valueOf$I(n));
if (f != null ) {
return f;
}f=Clazz.new_($I$(4,1).c$$I,[n]);
C$.functionMap.put$O$O(Integer.valueOf$I(n), f);
return f;
}, 1);

Clazz.newMeth(C$, 'getDerivative$I',  function (n) {
if (n < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).getString$S("Bessel.1.neg_order")]);
}var f=C$.derivativeMap.get$O(Integer.valueOf$I(n));
if (f != null ) {
return f;
}f=Clazz.new_($I$(5,1).c$$I,[n]);
C$.derivativeMap.put$O$O(Integer.valueOf$I(n), f);
return f;
}, 1);

Clazz.newMeth(C$, 'besseln$I$D',  function (n, x) {
var sg;
var k;
var y;
var tmp;
var pk;
var xk;
var pkm1;
var r;
var pkm2;
if (n < 0) {
n=-n;
if (n % 2 == 0) {
sg=1;
} else {
sg=-1;
}} else {
sg=1;
}if (x < 0 ) {
if (n % 2 != 0) {
sg=-sg;
}x=-x;
}if (n == 0) {
y=sg * C$.bessel0$D(x);
return y;
}if (n == 1) {
y=sg * C$.bessel1$D(x);
return y;
}if (n == 2) {
if (x == 0 ) {
y=0;
} else {
y=sg * (2.0 * C$.bessel1$D(x) / x - C$.bessel0$D(x));
}return y;
}if (x < 1.0E-12 ) {
y=0;
return y;
}k=53;
pk=2 * (n + k);
tmp=pk;
xk=x * x;
while (k != 0){
pk=pk - 2.0;
tmp=pk - xk / tmp;
k=k - 1;
}
tmp=x / tmp;
pk=1.0;
pkm1=1.0 / tmp;
k=n - 1;
r=2 * k;
while (k != 0){
pkm2=(pkm1 * r - pk * x) / x;
pk=pkm1;
pkm1=pkm2;
r=r - 2.0;
k=k - 1;
}
if (Math.abs(pk) > Math.abs(pkm1) ) {
tmp=C$.bessel1$D(x) / pk;
} else {
tmp=C$.bessel0$D(x) / pkm1;
}return sg * tmp;
}, 1);

Clazz.newMeth(C$, 'besselnDerivative$I$D',  function (n, x) {
var m;
var qm;
var qp;
var nm;
var np;
var bjn;
var bjnm;
var bjnp;
m=n;
if (n == 0) {
bjn=C$.besseln$I$D(1, x);
return -bjn;
}qm=1;
qp=1;
nm=m - 1;
np=m + 1;
if (m < 0) {
if (nm < 0) {
nm=-nm;
qm=-1;
}if (np < 0) {
np=-np;
qp=-1;
}}bjnm=C$.besseln$I$D(nm, x);
bjnp=C$.besseln$I$D(np, x);
bjnm=Math.pow(qm, nm) * bjnm;
bjnp=Math.pow(qp, np) * bjnp;
return (bjnm - bjnp) / 2.0;
}, 1);

Clazz.newMeth(C$, 'besselnZeros$I$I',  function (n, nt) {
var l;
var x;
var x0;
var bjn;
var djn;
var rj0=Clazz.array(Double.TYPE, [nt]);
if (n < 0) {
n=-n;
}if (n <= 20) {
x=2.82141 + 1.15859 * n;
} else {
x=n + 1.85576 * Math.pow(n, 0.33333) + 1.03315 / Math.pow(n, 0.33333);
}l=0;
while (true){
while (true){
x0=x;
bjn=C$.besseln$I$D(n, x);
djn=C$.besselnDerivative$I$D(n, x);
x=x - bjn / djn;
if (!(Math.abs(x - x0) > 1.0E-6 )) {
break;
}}
rj0[l]=x;
l=l + 1;
x=x + 3.141592653589793 + (0.0972 + 0.0679 * n - 3.54E-4 * Math.pow(n, 2)) / l ;
if (!(l < nt)) {
break;
}}
return rj0;
}, 1);

Clazz.newMeth(C$, 'bessel0$D',  function (x) {
var nn;
var pzero;
var qzero;
var xsq;
var p1;
var q1;
var y;
var zz=Clazz.array(Double.TYPE, [2]);
var p=Clazz.array(Double.TYPE, -1, [26857.86856980015, -4.050412371833133E7, 2.507158285536882E10, -8.085222034853794E12, 1.434354939140344E15, -1.3676203530881714E17, 6.382059341072356E18, -1.1791576291076106E20, 4.9337872517941336E20]);
var q=Clazz.array(Double.TYPE, -1, [1.0, 1363.0636523289706, 1114636.0984629854, 6.69998767298224E8, 3.1230431149412134E11, 1.1277567396797984E14, 3.0246356167094628E16, 5.428918384092285E18, 4.9337872517941336E20]);
if (x < 0 ) {
x=-x;
}if (x > 8.0 ) {
zz=C$.besselasympt0$D(x);
pzero=zz[0];
qzero=zz[1];
nn=x - 0.7853981633974483;
y=Math.sqrt(2 / 3.141592653589793 / x ) * (pzero * Math.cos(nn) - qzero * Math.sin(nn));
return y;
}xsq=x * x;
p1=p[0];
for (var i=1; i < 9; i++) {
p1=p[i] + p1 * xsq;
}
q1=q[0];
for (var i=1; i < 9; i++) {
q1=q[i] + q1 * xsq;
}
return p1 / q1;
}, 1);

Clazz.newMeth(C$, 'bessel1$D',  function (x) {
var s;
var pzero;
var qzero;
var nn;
var p1;
var q1;
var y;
var xsq;
var zz=Clazz.array(Double.TYPE, [2]);
var p=Clazz.array(Double.TYPE, -1, [2701.1227108923235, -4695753.530642996, 3.4132341823017006E9, -1.3229834803321265E12, 2.9087952638347756E14, -3.588817569910106E16, 2.3164335806340024E18, -6.672106568924916E19, 5.811993540016061E20]);
var q=Clazz.array(Double.TYPE, -1, [1.0, 1606.9315734814877, 1501793.5949985855, 1.013863514358674E9, 5.2437102621676495E11, 2.0816612213076075E14, 6.092061398917522E16, 1.185770712190321E19, 1.1623987080032122E21]);
s=Math.signum(x);
if (x < 0 ) {
x=-x;
}if (x > 8.0 ) {
zz=C$.besselasympt1$D(x);
pzero=zz[0];
qzero=zz[1];
nn=x - 2.356194490192345;
y=Math.sqrt(2 / 3.141592653589793 / x ) * (pzero * Math.cos(nn) - qzero * Math.sin(nn));
if (s < 0 ) {
y=-y;
}return y;
}xsq=x * x;
p1=p[0];
for (var i=1; i < 9; i++) {
p1=p[i] + p1 * xsq;
}
q1=q[0];
for (var i=1; i < 9; i++) {
q1=q[i] + q1 * xsq;
}
return s * x * p1  / q1;
}, 1);

Clazz.newMeth(C$, 'besselasympt0$D',  function (x) {
var xsq;
var p2;
var q2;
var p3;
var q3;
var pzero;
var qzero;
var zz=Clazz.array(Double.TYPE, [2]);
var p=Clazz.array(Double.TYPE, -1, [0.0, 2485.271928957404, 153982.65326239113, 2016135.2830499837, 8413041.45655044, 1.233238476817638E7, 5393485.083869439]);
var q=Clazz.array(Double.TYPE, -1, [1.0, 2615.7007369208395, 156001.7276940031, 2025066.801570134, 8426449.050629796, 1.233831022786325E7, 5393485.083869439]);
var pp=Clazz.array(Double.TYPE, -1, [0.0, -4.887199395841262, -226.2630641933704, -2365.956170779108, -8239.066313485606, -10381.416987484641, -3984.6173575952225]);
var qq=Clazz.array(Double.TYPE, -1, [1.0, 408.7714673983499, 15704.891915153956, 156021.32066792916, 533291.3634216897, 666745.4239319827, 255015.51088609424]);
xsq=64.0 / x / x ;
p2=p[0];
for (var i=1; i < 7; i++) {
p2=p[i] + p2 * xsq;
}
q2=q[0];
for (var i=1; i < 7; i++) {
q2=q[i] + q2 * xsq;
}
p3=pp[0];
for (var i=1; i < 7; i++) {
p3=pp[i] + p3 * xsq;
}
q3=qq[0];
for (var i=1; i < 7; i++) {
q3=qq[i] + q3 * xsq;
}
pzero=p2 / q2;
qzero=8 * p3 / q3 / x;
zz[0]=pzero;
zz[1]=qzero;
return zz;
}, 1);

Clazz.newMeth(C$, 'besselasympt1$D',  function (x) {
var xsq;
var p2;
var q2;
var p3;
var q3;
var pzero;
var qzero;
var zz=Clazz.array(Double.TYPE, [2]);
var p=Clazz.array(Double.TYPE, -1, [-1611.6166443246102, -109824.05543459347, -1523529.3511811374, -6603373.248364939, -9942246.505077641, -4435757.816794128]);
var q=Clazz.array(Double.TYPE, -1, [1.0, -1455.0094401904962, -107263.8599110382, -1511809.5066341609, -6585339.4797230875, -9934124.389934586, -4435757.816794128]);
var pp=Clazz.array(Double.TYPE, -1, [35.26513384663603, 1706.375429020768, 18494.262873223866, 66178.83658127084, 85145.1606753357, 33220.913409857225]);
var qq=Clazz.array(Double.TYPE, -1, [1.0, 863.8367769604992, 37890.2297457722, 400294.43582266977, 1419460.669603721, 1819458.0422439973, 708712.8194102874]);
xsq=64.0 / x / x ;
p2=p[0];
for (var i=1; i < 6; i++) {
p2=p[i] + p2 * xsq;
}
q2=q[0];
for (var i=1; i < 7; i++) {
q2=q[i] + q2 * xsq;
}
p3=pp[0];
for (var i=1; i < 6; i++) {
p3=pp[i] + p3 * xsq;
}
q3=qq[0];
for (var i=1; i < 7; i++) {
q3=qq[i] + q3 * xsq;
}
pzero=p2 / q2;
qzero=8 * p3 / q3 / x;
zz[0]=pzero;
zz[1]=qzero;
return zz;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.functionMap=Clazz.new_($I$(2,1));
C$.derivativeMap=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bessel, "BesselFunction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.n=n;
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
if (this.n == 0) {
return $I$(1).bessel0$D(x);
}if (this.n == 1) {
return $I$(1).bessel1$D(x);
}return $I$(1).besseln$I$D(this.n, x);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bessel, "BesselDerivative", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.n=n;
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return $I$(1).besselnDerivative$I$D(this.n, x);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
