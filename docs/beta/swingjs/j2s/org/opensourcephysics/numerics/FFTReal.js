(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'org.opensourcephysics.numerics.FFT']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FFTReal");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fft=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['n'],'O',['fft','org.opensourcephysics.numerics.FFT']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setN$I(2);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.setN$I(n);
}, 1);

Clazz.newMeth(C$, 'setN$I',  function (n) {
if (n % 2 != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[n + " is not even"]);
}this.n=n;
this.fft.setN$I((n/2|0));
});

Clazz.newMeth(C$, 'getN$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'transform$DA',  function (data) {
if (data.length != this.n) {
this.setN$I(data.length);
}this.fft.transform$DA(data);
p$1.shuffle$DA$I.apply(this, [data, 1]);
return data;
});

Clazz.newMeth(C$, 'backtransform$DA',  function (data) {
if (data.length != this.n) {
this.setN$I(data.length);
}p$1.shuffle$DA$I.apply(this, [data, -1]);
this.fft.backtransform$DA(data);
return data;
});

Clazz.newMeth(C$, 'inverse$DA',  function (data) {
this.backtransform$DA(data);
var norm=2.0 / (this.n);
for (var i=0; i < this.n; i++) {
data[i]*=norm;
}
return data;
});

Clazz.newMeth(C$, 'getNaturalFreq$D',  function (delta) {
var n=(this.n/2|0);
var freq=Clazz.array(Double.TYPE, [n]);
var f=0;
var df=0.5 / n / delta ;
for (var i=0; i < n; i++) {
freq[i]=f;
f+=df;
}
return freq;
});

Clazz.newMeth(C$, 'getNaturalFreq$D$D',  function (xmin, xmax) {
return this.getNaturalFreq$D((xmax - xmin) / (this.n - this.n % 2));
});

Clazz.newMeth(C$, 'getNaturalOmega$D',  function (delta) {
return this.getNaturalFreq$D(delta / 6.283185307179586);
});

Clazz.newMeth(C$, 'getNaturalOmega$D$D',  function (xmin, xmax) {
return this.getNaturalFreq$D((xmax - xmin) / (this.n - this.n % 2) / 6.283185307179586 );
});

Clazz.newMeth(C$, 'shuffle$DA$I',  function (data, sign) {
var nh=(this.n/2|0);
var nq=(this.n/4|0);
if (this.n == 6) {
nq=2;
}var c1=0.5;
var c2=-0.5 * sign;
var theta=sign * 3.141592653589793 / nh;
var wtemp=Math.sin(0.5 * theta);
var wpr=-2.0 * wtemp * wtemp ;
var wpi=-Math.sin(theta);
var wr=1.0 + wpr;
var wi=wpi;
for (var i=1; i < nq; i++) {
var i1=2 * i;
var i3=this.n - i1;
var h1r=c1 * (data[i1] + data[i3]);
var h1i=c1 * (data[i1 + 1] - data[i3 + 1]);
var h2r=-c2 * (data[i1 + 1] + data[i3 + 1]);
var h2i=c2 * (data[i1] - data[i3]);
data[i1]=h1r + wr * h2r - wi * h2i;
data[i1 + 1]=h1i + wr * h2i + wi * h2r;
data[i3]=h1r - wr * h2r + wi * h2i;
data[i3 + 1]=-h1i + wr * h2i + wi * h2r;
wtemp=wr;
wr+=wtemp * wpr - wi * wpi;
wi+=wtemp * wpi + wi * wpr;
}
var d0=data[0];
if (sign == 1) {
data[0]=d0 + data[1];
data[1]=d0 - data[1];
} else {
data[0]=c1 * (d0 + data[1]);
data[1]=c1 * (d0 - data[1]);
}if (this.n % 4 == 0) {
data[nh + 1]*=-1;
}}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
