(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Util',['org.opensourcephysics.numerics.Integral','.FunctionRate'],'org.opensourcephysics.numerics.RK45MultiStep','org.opensourcephysics.numerics.ODEMultistepSolver']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Integral", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FunctionRate',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trapezoidal$org_opensourcephysics_numerics_Function$D$D$I$D',  function (f, start, stop, n, tol) {
var step=stop - start;
var sign=(step < 0 ) ? -1 : 1;
if (sign < 1) {
step=-step;
var temp=start;
start=stop;
stop=temp;
}var iterations=0;
var sum=(f.evaluate$D(stop) + f.evaluate$D(start)) * step * 0.5 ;
var oldSum;
do {
oldSum=sum;
var x=start + 0.5 * step;
var newSum=0;
while (x < stop ){
newSum+=f.evaluate$D(x);
x+=step;
}
sum=(step * newSum + sum) * 0.5;
step*=0.5;
++iterations;
n=(n/(2)|0);
} while ((n > 0) || ((iterations < 15) && ($I$(1,"relativePrecision$D$D",[Math.abs(sum - oldSum), sum]) > tol ) ) );
return sign * sum;
}, 1);

Clazz.newMeth(C$, 'simpson$org_opensourcephysics_numerics_Function$D$D$I',  function (f, start, stop, n) {
if (n % 2 != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of partitions must be even in Simpson\'s method."]);
}var sumOdd=0.0;
var sumEven=0.0;
var x=start;
var h=(stop - start) / (2 * n);
for (var i=0; i < n - 1; i++) {
sumOdd+=f.evaluate$D(x + h);
sumEven+=f.evaluate$D(x + 2 * h);
x+=2.0 * h;
}
sumOdd+=f.evaluate$D(x + h);
return h / 3.0 * (f.evaluate$D(start) + 4.0 * sumOdd + 2.0 * sumEven + f.evaluate$D(stop));
}, 1);

Clazz.newMeth(C$, 'simpson$org_opensourcephysics_numerics_Function$D$D$I$D',  function (f, start, stop, n, tol) {
var step=stop - start;
var sign=(step < 0 ) ? -1 : 1;
if (sign < 1) {
step=-step;
var temp=start;
start=stop;
stop=temp;
}var iterations=0;
var sum=(f.evaluate$D(stop) + f.evaluate$D(start)) * step * 0.5 ;
var result=sum;
var oldSum;
var oldResult=result;
do {
var x=start + 0.5 * step;
oldSum=sum;
var newSum=0;
while (x < stop ){
newSum+=f.evaluate$D(x);
x+=step;
}
sum=(step * newSum + sum) * 0.5;
step*=0.5;
++iterations;
oldResult=result;
result=(4 * sum - oldSum) / 3.0;
n=(n/(2)|0);
} while ((n > 0) || ((iterations < 15) && ($I$(1,"relativePrecision$D$D",[Math.abs(result - oldResult), result]) > tol ) ) );
return sign * result;
}, 1);

Clazz.newMeth(C$, 'romberg$org_opensourcephysics_numerics_Function$D$D$I$D',  function (f, a, b, n, tol) {
if (a == b ) {
return (0);
}if (tol <= 0 ) {
return NaN;
}var coef=Clazz.array(Double.TYPE, [15]);
var h=(b - a) / n;
coef[0]=0.5 * (f.evaluate$D(a) + f.evaluate$D(b));
for (var k=1; k < n; k++) {
coef[0]+=f.evaluate$D(a + k * h);
}
coef[0]*=h;
for (var j=1; j < 15; j++) {
h/=2;
var c0=coef[0];
coef[0]=coef[j]=0;
for (var k=0; k < n; k++) {
coef[0]+=f.evaluate$D(a + (2 * k + 1) * h);
}
coef[0]=0.5 * c0 + h * coef[0];
var inc=1;
for (var k=1; k <= j; k++) {
inc*=4;
var Lk=coef[k];
coef[k]=(inc * coef[k - 1] - c0) / (inc - 1);
c0=Lk;
}
if ($I$(1,"relativePrecision$D$D",[Math.abs(coef[j] - coef[j - 1]), coef[j]]) < tol ) {
return coef[j];
}n*=2;
}
return NaN;
}, 1);

Clazz.newMeth(C$, 'simpson$DA$D',  function (f, h) {
var ip=f.length;
var sumOdd=0.0;
var sumEven=0.0;
for (var i=1; i < ip - 1; i+=2) {
sumOdd+=f[i];
sumEven+=f[i + 1];
}
return (4.0 * sumOdd + 2.0 * sumEven + f[0] - f[ip - 1]) * h / 3.0;
}, 1);

Clazz.newMeth(C$, 'ode$org_opensourcephysics_numerics_Function$D$D$D',  function (f, start, stop, tol) {
var ode=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_Function$D,[f, start]);
var ode_method=Clazz.new_($I$(3,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
ode_method.setTolerance$D(tol);
ode_method.initialize$D(stop - start);
ode_method.step$();
return ode.getState$()[0];
}, 1);

Clazz.newMeth(C$, 'fillArray$org_opensourcephysics_numerics_Function$D$D$D$I',  function (f, start, stop, tol, n) {
var data=Clazz.array(Double.TYPE, [2, n]);
return C$.fillArray$org_opensourcephysics_numerics_Function$D$D$D$DAA(f, start, stop, tol, data);
}, 1);

Clazz.newMeth(C$, 'fillArray$org_opensourcephysics_numerics_Function$D$D$D$DAA',  function (f, start, stop, tol, data) {
var ode=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_Function$D,[f, start]);
var ode_method=Clazz.new_($I$(4,1).c$$org_opensourcephysics_numerics_ODE,[ode]);
ode_method.setTolerance$D(tol);
var dx=1;
var n=data[0].length;
if (n > 1) {
dx=(stop - start) / (n - 1);
}ode_method.setStepSize$D(dx);
for (var i=0; i < n; i++) {
data[0][i]=ode.getState$()[1];
data[1][i]=ode.getState$()[0];
ode_method.step$();
}
return data;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Integral, "FunctionRate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.opensourcephysics.numerics.ODE');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['state','double[]','f','org.opensourcephysics.numerics.Function']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Function$D',  function (_f, start) {
;C$.$init$.apply(this);
this.state=Clazz.array(Double.TYPE, [2]);
this.state[0]=0;
this.state[1]=start;
this.f=_f;
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
rate[0]=this.f.evaluate$D(state[1]);
rate[1]=1;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
