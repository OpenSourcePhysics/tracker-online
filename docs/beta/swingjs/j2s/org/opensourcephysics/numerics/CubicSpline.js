(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'org.opensourcephysics.numerics.Util','org.opensourcephysics.numerics.Interpolation',['org.opensourcephysics.numerics.CubicSpline','.splineFirstDerivate'],['org.opensourcephysics.numerics.CubicSpline','.splineSecondDerivate']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CubicSpline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.numerics.Function');
C$.$classes$=[['splineFirstDerivate',0],['splineSecondDerivate',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.startDerivative=NaN;
this.endDerivative=NaN;
this.guessIndex=1;
},1);

C$.$fields$=[['D',['startDerivative','endDerivative'],'I',['guessIndex','sign'],'O',['xd','double[]','+yd','+coefficients']]]

Clazz.newMeth(C$, 'c$$DA$DA',  function (xdata, ydata) {
;C$.$init$.apply(this);
this.update$DA$DA(xdata, ydata);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$D$D',  function (xdata, ydata, startDyDx, endDyDx) {
;C$.$init$.apply(this);
this.startDerivative=startDyDx;
this.endDerivative=endDyDx;
this.update$DA$DA(xdata, ydata);
}, 1);

Clazz.newMeth(C$, 'update$DA$DA$D$D',  function (xdata, ydata, startDyDx, endDyDx) {
this.startDerivative=startDyDx;
this.endDerivative=endDyDx;
this.update$DA$DA(xdata, ydata);
});

Clazz.newMeth(C$, 'update$DA$DA',  function (xdata, ydata) {
if ((this.xd == null ) || (this.xd.length != xdata.length) ) {
this.xd=xdata.clone$();
} else {
System.arraycopy$O$I$O$I$I(xdata, 0, this.xd, 0, this.xd.length);
}if ((this.yd == null ) || (this.yd.length != ydata.length) ) {
this.yd=ydata.clone$();
} else {
System.arraycopy$O$I$O$I$I(ydata, 0, this.yd, 0, this.yd.length);
}if (this.xd.length != this.yd.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Arrays must be of equal length."]);
}this.sign=$I$(1).checkSorting$DA(this.xd);
if (this.sign == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["X array must be sorted in either increasing or decreasing order."]);
}if (this.xd.length > 2) {
p$1.computeSecondDerivatives.apply(this, []);
}});

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
var n1=0;
var n2=this.xd.length - 1;
if (n2 < 1) {
return this.yd[0];
}if (n2 == 1) {
return $I$(2).linear$D$D$D$D$D(x, this.xd[0], this.xd[1], this.yd[0], this.yd[1]);
}if (this.sign * x < this.sign * this.xd[1] ) {
n2=1;
} else if (this.sign * x > this.sign * this.xd[n2 - 1] ) {
n1=n2 - 1;
} else {
if ((this.guessIndex > 0) && (this.sign * x > this.sign * this.xd[this.guessIndex - 1] ) ) {
n1=this.guessIndex - 1;
}if ((this.guessIndex < n2) && (this.sign * x < this.sign * this.xd[this.guessIndex + 1] ) ) {
n2=this.guessIndex + 1;
}}while (n2 - n1 > 1){
var n=((n1 + n2)/2|0);
if (this.sign * this.xd[n] > this.sign * x ) {
n2=n;
} else {
n1=n;
}}
this.guessIndex=n1;
var step=this.xd[n2] - this.xd[n1];
var a=(this.xd[n2] - x) / step;
var b=(x - this.xd[n1]) / step;
return a * this.yd[n1] + b * this.yd[n2] + (a * (a * a - 1) * this.coefficients[n1]  + b * (b * b - 1) * this.coefficients[n2] ) * step * step  / 6;
});

Clazz.newMeth(C$, 'firstDerivative$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'secondDerivative$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'computeSecondDerivatives',  function () {
var n=this.xd.length;
var w;
var s;
var u=Clazz.array(Double.TYPE, [n - 1]);
this.coefficients=Clazz.array(Double.TYPE, [n]);
if (Double.isNaN$D(this.startDerivative)) {
this.coefficients[0]=u[0]=0;
} else {
this.coefficients[0]=-0.5;
u[0]=3.0 / (this.xd[1] - this.xd[0]) * ((this.yd[1] - this.yd[0]) / (this.xd[1] - this.xd[0]) - this.startDerivative);
}for (var i=1; i < n - 1; i++) {
var invStep2=1 / (this.xd[i + 1] - this.xd[i - 1]);
s=(this.xd[i] - this.xd[i - 1]) * invStep2;
w=1 / (s * this.coefficients[i - 1] + 2);
this.coefficients[i]=(s - 1) * w;
u[i]=(6 * invStep2 * ((this.yd[i + 1] - this.yd[i]) / (this.xd[i + 1] - this.xd[i]) - (this.yd[i] - this.yd[i - 1]) / (this.xd[i] - this.xd[i - 1]))  - s * u[i - 1]) * w;
}
if (Double.isNaN$D(this.endDerivative)) {
w=s=0;
} else {
w=-0.5;
s=3.0 / (this.xd[n - 1] - this.xd[n - 2]) * (this.endDerivative - (this.yd[n - 1] - this.yd[n - 2]) / (this.xd[n - 1] - this.xd[n - 2]));
}this.coefficients[n - 1]=(s - w * u[n - 2]) / (w * this.coefficients[n - 2] + 1);
for (var i=n - 2; i >= 0; i--) {
this.coefficients[i]=this.coefficients[i] * this.coefficients[i + 1] + u[i];
}
return;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CubicSpline, "splineFirstDerivate", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
var n1=0;
var n2=this.b$['org.opensourcephysics.numerics.CubicSpline'].xd.length - 1;
if (n2 < 1) {
return 0;
}if (n2 == 1) {
return (this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[1] - this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[0]) == 0  ? Infinity : (this.b$['org.opensourcephysics.numerics.CubicSpline'].yd[1] - this.b$['org.opensourcephysics.numerics.CubicSpline'].yd[0]) / (this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[1] - this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[0]);
}if (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x < this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[1] ) {
n2=1;
} else if (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x > this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n2 - 1] ) {
n1=n2 - 1;
} else {
if ((this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex > 0) && (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x > this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex - 1] ) ) {
n1=this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex - 1;
}if ((this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex < n2) && (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x < this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex + 1] ) ) {
n2=this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex + 1;
}}while (n2 - n1 > 1){
var n=((n1 + n2)/2|0);
if (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n] > this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x ) {
n2=n;
} else {
n1=n;
}}
this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex=n1;
var step=this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n2] - this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n1];
var a=(this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n2] - x) / step;
var b=(x - this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n1]) / step;
return (this.b$['org.opensourcephysics.numerics.CubicSpline'].yd[n2] - this.b$['org.opensourcephysics.numerics.CubicSpline'].yd[n1]) / step + ((1 - 3 * a * a ) * this.b$['org.opensourcephysics.numerics.CubicSpline'].coefficients[n1] + (3 * b * b  - 1) * this.b$['org.opensourcephysics.numerics.CubicSpline'].coefficients[n2]) * step / 6;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CubicSpline, "splineSecondDerivate", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
var n1=0;
var n2=this.b$['org.opensourcephysics.numerics.CubicSpline'].xd.length - 1;
if (n2 <= 1) {
return 0;
}if (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x < this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[1] ) {
n2=1;
} else if (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x > this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n2 - 1] ) {
n1=n2 - 1;
} else {
if ((this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex > 0) && (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x > this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex - 1] ) ) {
n1=this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex - 1;
}if ((this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex < n2) && (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x < this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex + 1] ) ) {
n2=this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex + 1;
}}while (n2 - n1 > 1){
var n=((n1 + n2)/2|0);
if (this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n] > this.b$['org.opensourcephysics.numerics.CubicSpline'].sign * x ) {
n2=n;
} else {
n1=n;
}}
this.b$['org.opensourcephysics.numerics.CubicSpline'].guessIndex=n1;
var step=this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n2] - this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n1];
var a=(this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n2] - x) / step;
var b=(x - this.b$['org.opensourcephysics.numerics.CubicSpline'].xd[n1]) / step;
return a * this.b$['org.opensourcephysics.numerics.CubicSpline'].coefficients[n1] + b * this.b$['org.opensourcephysics.numerics.CubicSpline'].coefficients[n2];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
