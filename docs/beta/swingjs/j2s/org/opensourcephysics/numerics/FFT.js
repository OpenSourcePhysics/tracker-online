(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FFT");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.norm=1;
this.available_factors=Clazz.array(Integer.TYPE, -1, [7, 6, 5, 4, 3, 2]);
},1);

C$.$fields$=[['D',['norm'],'I',['n'],'O',['scratch','double[]','factors','int[]','twiddle','double[][][]','available_factors','int[]','scratch1','double[]']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.setN$I(n);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setN$I(1);
}, 1);

Clazz.newMeth(C$, 'setN$I',  function (n) {
if (n <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The transform length must be >0 : " + n]);
}this.n=n;
this.norm=n;
if (this.scratch == null  || this.scratch.length < 2 * n ) this.scratch=Clazz.array(Double.TYPE, [2 * n]);
p$1.setup_wavetable$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'getN$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'setNormalization$D',  function (norm) {
this.norm=norm;
});

Clazz.newMeth(C$, 'getNormalization$',  function () {
return this.norm;
});

Clazz.newMeth(C$, 'transform$DA',  function (data) {
if (data.length != 2 * this.n) {
if (data.length % 2 != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of points in array is not even"]);
}this.setN$I((data.length/2|0));
}this.transform_internal$DA$I$I$I(data, 0, 2, -1);
return data;
});

Clazz.newMeth(C$, 'backtransform$DA',  function (data) {
if (data.length != 2 * this.n) {
if (data.length % 2 != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of points in array is not even"]);
}this.setN$I((data.length/2|0));
}this.transform_internal$DA$I$I$I(data, 0, 2, 1);
return data;
});

Clazz.newMeth(C$, 'inverse$DA',  function (data) {
this.backtransform$DA(data);
for (var i=0, m=2 * this.n; i < m; i++) {
data[i]/=this.n;
}
return data;
});

Clazz.newMeth(C$, 'toNaturalOrder$DA',  function (data) {
System.arraycopy$O$I$O$I$I(data, 0, this.scratch, 0, 2 * this.n);
System.arraycopy$O$I$O$I$I(this.scratch, this.n + this.n % 2, data, 0, this.n - this.n % 2);
System.arraycopy$O$I$O$I$I(this.scratch, 0, data, this.n - this.n % 2, this.n + this.n % 2);
if (this.norm == 1 ) {
return data;
}for (var i=0, m=2 * this.n; i < m; i++) {
data[i]/=this.norm;
}
return data;
});

Clazz.newMeth(C$, 'toWrapAroundOrder$DA',  function (data) {
System.arraycopy$O$I$O$I$I(data, 0, this.scratch, 0, 2 * this.n);
System.arraycopy$O$I$O$I$I(this.scratch, this.n + this.n % 2, data, 0, this.n - this.n % 2);
System.arraycopy$O$I$O$I$I(this.scratch, 0, data, this.n - this.n % 2, this.n + this.n % 2);
if (this.norm == 1 ) {
return data;
}for (var i=0, m=2 * this.n; i < m; i++) {
data[i]*=this.n;
}
return data;
});

Clazz.newMeth(C$, 'getWrappedModes$',  function () {
var bins=Clazz.array(Double.TYPE, [this.n]);
for (var i=0; i < this.n; i++) {
bins[i]=(i < ((this.n + 1)/2|0)) ? i : (i - this.n);
}
return bins;
});

Clazz.newMeth(C$, 'getWrappedOmega$D',  function (delta) {
return this.getWrappedFreq$D(delta / 6.283185307179586);
});

Clazz.newMeth(C$, 'getWrappedOmega$D$D',  function (xmin, xmax) {
return this.getWrappedFreq$D((xmax - xmin) / (this.n - this.n % 2) / 6.283185307179586 );
});

Clazz.newMeth(C$, 'getWrappedFreq$D',  function (delta) {
var freq=Clazz.array(Double.TYPE, [this.n]);
var f=-0.5 / delta;
var df=-2 * f / (this.n - this.n % 2);
for (var i=0; i < this.n; i++) {
freq[i]=(i < ((this.n + 1)/2|0)) ? i * df : (i - this.n) * df;
}
return freq;
});

Clazz.newMeth(C$, 'getWrappedFreq$D$D',  function (xmin, xmax) {
return this.getNaturalFreq$D((xmax - xmin) / (this.n - this.n % 2));
});

Clazz.newMeth(C$, 'getNaturalFreq$D',  function (delta) {
var freq=Clazz.array(Double.TYPE, [this.n]);
var f=-0.5 / delta;
var df=-2 * f / (this.n - this.n % 2);
for (var i=0; i < this.n; i++) {
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

Clazz.newMeth(C$, 'getNaturalModes$',  function () {
var bins=Clazz.array(Double.TYPE, [this.n]);
var w=(-(this.n - this.n % 2)/2|0);
for (var i=0; i < this.n; i++) {
bins[i]=w;
++w;
}
return bins;
});

Clazz.newMeth(C$, 'setup_wavetable$I',  function (n) {
if (n <= 0) {
throw Clazz.new_($I$(1,1).c$$S,["length must be positive integer : " + n]);
}this.n=n;
this.factors=C$.factor$I$IA(n, this.available_factors);
var d_theta=-6.283185307179586 / (n);
var product=1;
this.twiddle=Clazz.array(Double.TYPE, [this.factors.length, null, null]);
for (var i=0; i < this.factors.length; i++) {
var factor=this.factors[i];
var product_1=product;
product*=factor;
var q=(n/product|0);
this.twiddle[i]=Clazz.array(Double.TYPE, [q + 1, 2 * (factor - 1)]);
var twid=this.twiddle[i];
for (var j=1; j < factor; j++) {
twid[0][2 * (j - 1)]=1.0;
twid[0][2 * (j - 1) + 1]=0.0;
}
for (var k=1; k <= q; k++) {
var m=0;
for (var j=1; j < factor; j++) {
m+=k * product_1;
m%=n;
var theta=d_theta * m;
twid[k][2 * (j - 1)]=Math.cos(theta);
twid[k][2 * (j - 1) + 1]=Math.sin(theta);
}
}
}
}, p$1);

Clazz.newMeth(C$, 'transform_internal$DA$I$I$I',  function (data, i0, stride, sign) {
if (this.n == 1) {
return;
}if (this.scratch1 == null  || this.scratch1.length < 2 * this.n ) this.scratch1=Clazz.array(Double.TYPE, [2 * this.n]);
var product=1;
var state=0;
var $in;
var out;
var istride;
var ostride;
var in0;
var out0;
for (var i=0; i < this.factors.length; i++) {
var factor=this.factors[i];
product*=factor;
if (state == 0) {
$in=data;
in0=i0;
istride=stride;
out=this.scratch1;
out0=0;
ostride=2;
state=1;
} else {
$in=this.scratch1;
in0=0;
istride=2;
out=data;
out0=i0;
ostride=stride;
state=0;
}switch (factor) {
case 2:
this.pass_2$I$DA$I$I$DA$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, product);
break;
case 3:
this.pass_3$I$DA$I$I$DA$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, product);
break;
case 4:
this.pass_4$I$DA$I$I$DA$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, product);
break;
case 5:
this.pass_5$I$DA$I$I$DA$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, product);
break;
case 6:
this.pass_6$I$DA$I$I$DA$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, product);
break;
case 7:
this.pass_7$I$DA$I$I$DA$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, product);
break;
default:
this.pass_n$I$DA$I$I$DA$I$I$I$I$I(i, $in, in0, istride, out, out0, ostride, sign, factor, product);
}
}
if (state == 1) {
for (var i=0; i < this.n; i++) {
data[i0 + stride * i]=this.scratch1[2 * i];
data[i0 + stride * i + 1]=this.scratch1[2 * i + 1];
}
}});

Clazz.newMeth(C$, 'pass_2$I$DA$I$I$DA$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, product) {
var k;
var k1;
var factor=2;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var product_1=(product/factor|0);
var di=istride * m;
var dj=ostride * product_1;
var i=in0;
var j=out0;
var x_real;
var x_imag;
for (k=0; k < q; k++) {
var twids=this.twiddle[fi][k];
var w_real=twids[0];
var w_imag=-sign * twids[1];
for (k1=0; k1 < product_1; k1++) {
var z0_real=$in[i];
var z0_imag=$in[i + 1];
var z1_real=$in[i + di];
var z1_imag=$in[i + di + 1 ];
i+=istride;
out[j]=z0_real + z1_real;
out[j + 1]=z0_imag + z1_imag;
x_real=z0_real - z1_real;
x_imag=z0_imag - z1_imag;
out[j + dj]=w_real * x_real - w_imag * x_imag;
out[j + dj + 1 ]=w_real * x_imag + w_imag * x_real;
j+=ostride;
}
j+=(factor - 1) * dj;
}
});

Clazz.newMeth(C$, 'pass_3$I$DA$I$I$DA$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, product) {
var k;
var k1;
var factor=3;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var product_1=(product/factor|0);
var tau=sign * Math.sqrt(3.0) / 2.0;
var di=istride * m;
var dj=ostride * product_1;
var i=in0;
var j=out0;
var x_real;
var x_imag;
for (k=0; k < q; k++) {
var twids=this.twiddle[fi][k];
var w1_real=twids[0];
var w1_imag=-sign * twids[1];
var w2_real=twids[2];
var w2_imag=-sign * twids[3];
for (k1=0; k1 < product_1; k1++) {
var z0_real=$in[i];
var z0_imag=$in[i + 1];
var z1_real=$in[i + di];
var z1_imag=$in[i + di + 1 ];
var z2_real=$in[i + 2 * di];
var z2_imag=$in[i + 2 * di + 1];
i+=istride;
var t1_real=z1_real + z2_real;
var t1_imag=z1_imag + z2_imag;
var t2_real=z0_real - t1_real / 2.0;
var t2_imag=z0_imag - t1_imag / 2.0;
var t3_real=tau * (z1_real - z2_real);
var t3_imag=tau * (z1_imag - z2_imag);
out[j]=z0_real + t1_real;
out[j + 1]=z0_imag + t1_imag;
x_real=t2_real - t3_imag;
x_imag=t2_imag + t3_real;
out[j + dj]=w1_real * x_real - w1_imag * x_imag;
out[j + dj + 1 ]=w1_real * x_imag + w1_imag * x_real;
x_real=t2_real + t3_imag;
x_imag=t2_imag - t3_real;
out[j + 2 * dj]=w2_real * x_real - w2_imag * x_imag;
out[j + 2 * dj + 1]=w2_real * x_imag + w2_imag * x_real;
j+=ostride;
}
j+=(factor - 1) * dj;
}
});

Clazz.newMeth(C$, 'pass_4$I$DA$I$I$DA$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, product) {
var k;
var k1;
var factor=4;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var p_1=(product/factor|0);
var i=in0;
var j=out0;
var di=istride * m;
var dj=ostride * p_1;
var x_real;
var x_imag;
for (k=0; k < q; k++) {
var twids=this.twiddle[fi][k];
var w1_real=twids[0];
var w1_imag=-sign * twids[1];
var w2_real=twids[2];
var w2_imag=-sign * twids[3];
var w3_real=twids[4];
var w3_imag=-sign * twids[5];
for (k1=0; k1 < p_1; k1++) {
var z0_real=$in[i];
var z0_imag=$in[i + 1];
var z1_real=$in[i + di];
var z1_imag=$in[i + di + 1 ];
var z2_real=$in[i + 2 * di];
var z2_imag=$in[i + 2 * di + 1];
var z3_real=$in[i + 3 * di];
var z3_imag=$in[i + 3 * di + 1];
i+=istride;
var t1_real=z0_real + z2_real;
var t1_imag=z0_imag + z2_imag;
var t2_real=z1_real + z3_real;
var t2_imag=z1_imag + z3_imag;
var t3_real=z0_real - z2_real;
var t3_imag=z0_imag - z2_imag;
var t4_real=sign * (z1_real - z3_real);
var t4_imag=sign * (z1_imag - z3_imag);
out[j]=t1_real + t2_real;
out[j + 1]=t1_imag + t2_imag;
x_real=t3_real - t4_imag;
x_imag=t3_imag + t4_real;
out[j + dj]=w1_real * x_real - w1_imag * x_imag;
out[j + dj + 1 ]=w1_real * x_imag + w1_imag * x_real;
x_real=t1_real - t2_real;
x_imag=t1_imag - t2_imag;
out[j + 2 * dj]=w2_real * x_real - w2_imag * x_imag;
out[j + 2 * dj + 1]=w2_real * x_imag + w2_imag * x_real;
x_real=t3_real + t4_imag;
x_imag=t3_imag - t4_real;
out[j + 3 * dj]=w3_real * x_real - w3_imag * x_imag;
out[j + 3 * dj + 1]=w3_real * x_imag + w3_imag * x_real;
j+=ostride;
}
j+=(factor - 1) * dj;
}
});

Clazz.newMeth(C$, 'pass_5$I$DA$I$I$DA$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, product) {
var k;
var k1;
var factor=5;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var p_1=(product/factor|0);
var tau=(Math.sqrt(5.0) / 4.0);
var sin_2pi_by_5=sign * Math.sin(1.2566370614359172);
var sin_2pi_by_10=sign * Math.sin(0.6283185307179586);
var i=in0;
var j=out0;
var di=istride * m;
var dj=ostride * p_1;
var x_real;
var x_imag;
for (k=0; k < q; k++) {
var twids=this.twiddle[fi][k];
var w1_real=twids[0];
var w1_imag=-sign * twids[1];
var w2_real=twids[2];
var w2_imag=-sign * twids[3];
var w3_real=twids[4];
var w3_imag=-sign * twids[5];
var w4_real=twids[6];
var w4_imag=-sign * twids[7];
for (k1=0; k1 < p_1; k1++) {
var z0_real=$in[i];
var z0_imag=$in[i + 1];
var z1_real=$in[i + di];
var z1_imag=$in[i + di + 1 ];
var z2_real=$in[i + 2 * di];
var z2_imag=$in[i + 2 * di + 1];
var z3_real=$in[i + 3 * di];
var z3_imag=$in[i + 3 * di + 1];
var z4_real=$in[i + 4 * di];
var z4_imag=$in[i + 4 * di + 1];
i+=istride;
var t1_real=z1_real + z4_real;
var t1_imag=z1_imag + z4_imag;
var t2_real=z2_real + z3_real;
var t2_imag=z2_imag + z3_imag;
var t3_real=z1_real - z4_real;
var t3_imag=z1_imag - z4_imag;
var t4_real=z2_real - z3_real;
var t4_imag=z2_imag - z3_imag;
var t5_real=t1_real + t2_real;
var t5_imag=t1_imag + t2_imag;
var t6_real=tau * (t1_real - t2_real);
var t6_imag=tau * (t1_imag - t2_imag);
var t7_real=z0_real - t5_real / 4.0;
var t7_imag=z0_imag - t5_imag / 4.0;
var t8_real=t7_real + t6_real;
var t8_imag=t7_imag + t6_imag;
var t9_real=t7_real - t6_real;
var t9_imag=t7_imag - t6_imag;
var t10_real=sin_2pi_by_5 * t3_real + sin_2pi_by_10 * t4_real;
var t10_imag=sin_2pi_by_5 * t3_imag + sin_2pi_by_10 * t4_imag;
var t11_real=sin_2pi_by_10 * t3_real - sin_2pi_by_5 * t4_real;
var t11_imag=sin_2pi_by_10 * t3_imag - sin_2pi_by_5 * t4_imag;
out[j]=z0_real + t5_real;
out[j + 1]=z0_imag + t5_imag;
x_real=t8_real - t10_imag;
x_imag=t8_imag + t10_real;
out[j + dj]=w1_real * x_real - w1_imag * x_imag;
out[j + dj + 1 ]=w1_real * x_imag + w1_imag * x_real;
x_real=t9_real - t11_imag;
x_imag=t9_imag + t11_real;
out[j + 2 * dj]=w2_real * x_real - w2_imag * x_imag;
out[j + 2 * dj + 1]=w2_real * x_imag + w2_imag * x_real;
x_real=t9_real + t11_imag;
x_imag=t9_imag - t11_real;
out[j + 3 * dj]=w3_real * x_real - w3_imag * x_imag;
out[j + 3 * dj + 1]=w3_real * x_imag + w3_imag * x_real;
x_real=t8_real + t10_imag;
x_imag=t8_imag - t10_real;
out[j + 4 * dj]=w4_real * x_real - w4_imag * x_imag;
out[j + 4 * dj + 1]=w4_real * x_imag + w4_imag * x_real;
j+=ostride;
}
j+=(factor - 1) * dj;
}
});

Clazz.newMeth(C$, 'pass_6$I$DA$I$I$DA$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, product) {
var k;
var k1;
var factor=6;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var p_1=(product/factor|0);
var tau=sign * Math.sqrt(3.0) / 2.0;
var i=in0;
var j=out0;
var di=istride * m;
var dj=ostride * p_1;
var x_real;
var x_imag;
for (k=0; k < q; k++) {
var twids=this.twiddle[fi][k];
var w1_real=twids[0];
var w1_imag=-sign * twids[1];
var w2_real=twids[2];
var w2_imag=-sign * twids[3];
var w3_real=twids[4];
var w3_imag=-sign * twids[5];
var w4_real=twids[6];
var w4_imag=-sign * twids[7];
var w5_real=twids[8];
var w5_imag=-sign * twids[9];
for (k1=0; k1 < p_1; k1++) {
var z0_real=$in[i];
var z0_imag=$in[i + 1];
var z1_real=$in[i + di];
var z1_imag=$in[i + di + 1 ];
var z2_real=$in[i + 2 * di];
var z2_imag=$in[i + 2 * di + 1];
var z3_real=$in[i + 3 * di];
var z3_imag=$in[i + 3 * di + 1];
var z4_real=$in[i + 4 * di];
var z4_imag=$in[i + 4 * di + 1];
var z5_real=$in[i + 5 * di];
var z5_imag=$in[i + 5 * di + 1];
i+=istride;
var ta1_real=z2_real + z4_real;
var ta1_imag=z2_imag + z4_imag;
var ta2_real=z0_real - ta1_real / 2;
var ta2_imag=z0_imag - ta1_imag / 2;
var ta3_real=tau * (z2_real - z4_real);
var ta3_imag=tau * (z2_imag - z4_imag);
var a0_real=z0_real + ta1_real;
var a0_imag=z0_imag + ta1_imag;
var a1_real=ta2_real - ta3_imag;
var a1_imag=ta2_imag + ta3_real;
var a2_real=ta2_real + ta3_imag;
var a2_imag=ta2_imag - ta3_real;
var tb1_real=z5_real + z1_real;
var tb1_imag=z5_imag + z1_imag;
var tb2_real=z3_real - tb1_real / 2;
var tb2_imag=z3_imag - tb1_imag / 2;
var tb3_real=tau * (z5_real - z1_real);
var tb3_imag=tau * (z5_imag - z1_imag);
var b0_real=z3_real + tb1_real;
var b0_imag=z3_imag + tb1_imag;
var b1_real=tb2_real - tb3_imag;
var b1_imag=tb2_imag + tb3_real;
var b2_real=tb2_real + tb3_imag;
var b2_imag=tb2_imag - tb3_real;
out[j]=a0_real + b0_real;
out[j + 1]=a0_imag + b0_imag;
x_real=a1_real - b1_real;
x_imag=a1_imag - b1_imag;
out[j + dj]=w1_real * x_real - w1_imag * x_imag;
out[j + dj + 1 ]=w1_real * x_imag + w1_imag * x_real;
x_real=a2_real + b2_real;
x_imag=a2_imag + b2_imag;
out[j + 2 * dj]=w2_real * x_real - w2_imag * x_imag;
out[j + 2 * dj + 1]=w2_real * x_imag + w2_imag * x_real;
x_real=a0_real - b0_real;
x_imag=a0_imag - b0_imag;
out[j + 3 * dj]=w3_real * x_real - w3_imag * x_imag;
out[j + 3 * dj + 1]=w3_real * x_imag + w3_imag * x_real;
x_real=a1_real + b1_real;
x_imag=a1_imag + b1_imag;
out[j + 4 * dj]=w4_real * x_real - w4_imag * x_imag;
out[j + 4 * dj + 1]=w4_real * x_imag + w4_imag * x_real;
x_real=a2_real - b2_real;
x_imag=a2_imag - b2_imag;
out[j + 5 * dj]=w5_real * x_real - w5_imag * x_imag;
out[j + 5 * dj + 1]=w5_real * x_imag + w5_imag * x_real;
j+=ostride;
}
j+=(factor - 1) * dj;
}
});

Clazz.newMeth(C$, 'pass_7$I$DA$I$I$DA$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, product) {
var k;
var k1;
var factor=7;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var p_1=(product/factor|0);
var c1=Math.cos(0.8975979010256552);
var c2=Math.cos(1.7951958020513104);
var c3=Math.cos(2.6927937030769655);
var s1=(-sign) * Math.sin(0.8975979010256552);
var s2=(-sign) * Math.sin(1.7951958020513104);
var s3=(-sign) * Math.sin(2.6927937030769655);
var i=in0;
var j=out0;
var di=istride * m;
var dj=ostride * p_1;
var x_real;
var x_imag;
for (k=0; k < q; k++) {
var twids=this.twiddle[fi][k];
var w1_real=twids[0];
var w1_imag=-sign * twids[1];
var w2_real=twids[2];
var w2_imag=-sign * twids[3];
var w3_real=twids[4];
var w3_imag=-sign * twids[5];
var w4_real=twids[6];
var w4_imag=-sign * twids[7];
var w5_real=twids[8];
var w5_imag=-sign * twids[9];
var w6_real=twids[10];
var w6_imag=-sign * twids[11];
for (k1=0; k1 < p_1; k1++) {
var z0_real=$in[i];
var z0_imag=$in[i + 1];
var z1_real=$in[i + di];
var z1_imag=$in[i + di + 1 ];
var z2_real=$in[i + 2 * di];
var z2_imag=$in[i + 2 * di + 1];
var z3_real=$in[i + 3 * di];
var z3_imag=$in[i + 3 * di + 1];
var z4_real=$in[i + 4 * di];
var z4_imag=$in[i + 4 * di + 1];
var z5_real=$in[i + 5 * di];
var z5_imag=$in[i + 5 * di + 1];
var z6_real=$in[i + 6 * di];
var z6_imag=$in[i + 6 * di + 1];
i+=istride;
var t0_real=z1_real + z6_real;
var t0_imag=z1_imag + z6_imag;
var t1_real=z1_real - z6_real;
var t1_imag=z1_imag - z6_imag;
var t2_real=z2_real + z5_real;
var t2_imag=z2_imag + z5_imag;
var t3_real=z2_real - z5_real;
var t3_imag=z2_imag - z5_imag;
var t4_real=z4_real + z3_real;
var t4_imag=z4_imag + z3_imag;
var t5_real=z4_real - z3_real;
var t5_imag=z4_imag - z3_imag;
var t6_real=t2_real + t0_real;
var t6_imag=t2_imag + t0_imag;
var t7_real=t5_real + t3_real;
var t7_imag=t5_imag + t3_imag;
var b0_real=z0_real + t6_real + t4_real ;
var b0_imag=z0_imag + t6_imag + t4_imag ;
var b1_real=(((c1 + c2 + c3 ) / 3.0 - 1.0) * (t6_real + t4_real));
var b1_imag=(((c1 + c2 + c3 ) / 3.0 - 1.0) * (t6_imag + t4_imag));
var b2_real=(((2.0 * c1 - c2 - c3) / 3.0) * (t0_real - t4_real));
var b2_imag=(((2.0 * c1 - c2 - c3) / 3.0) * (t0_imag - t4_imag));
var b3_real=(((c1 - 2.0 * c2 + c3) / 3.0) * (t4_real - t2_real));
var b3_imag=(((c1 - 2.0 * c2 + c3) / 3.0) * (t4_imag - t2_imag));
var b4_real=(((c1 + c2 - 2.0 * c3) / 3.0) * (t2_real - t0_real));
var b4_imag=(((c1 + c2 - 2.0 * c3) / 3.0) * (t2_imag - t0_imag));
var b5_real=((s1 + s2 - s3) / 3.0) * (t7_real + t1_real);
var b5_imag=((s1 + s2 - s3) / 3.0) * (t7_imag + t1_imag);
var b6_real=((2.0 * s1 - s2 + s3) / 3.0) * (t1_real - t5_real);
var b6_imag=((2.0 * s1 - s2 + s3) / 3.0) * (t1_imag - t5_imag);
var b7_real=((s1 - 2.0 * s2 - s3) / 3.0) * (t5_real - t3_real);
var b7_imag=((s1 - 2.0 * s2 - s3) / 3.0) * (t5_imag - t3_imag);
var b8_real=((s1 + s2 + 2.0 * s3 ) / 3.0) * (t3_real - t1_real);
var b8_imag=((s1 + s2 + 2.0 * s3 ) / 3.0) * (t3_imag - t1_imag);
var T0_real=b0_real + b1_real;
var T0_imag=b0_imag + b1_imag;
var T1_real=b2_real + b3_real;
var T1_imag=b2_imag + b3_imag;
var T2_real=b4_real - b3_real;
var T2_imag=b4_imag - b3_imag;
var T3_real=-b2_real - b4_real;
var T3_imag=-b2_imag - b4_imag;
var T4_real=b6_real + b7_real;
var T4_imag=b6_imag + b7_imag;
var T5_real=b8_real - b7_real;
var T5_imag=b8_imag - b7_imag;
var T6_real=-b8_real - b6_real;
var T6_imag=-b8_imag - b6_imag;
var T7_real=T0_real + T1_real;
var T7_imag=T0_imag + T1_imag;
var T8_real=T0_real + T2_real;
var T8_imag=T0_imag + T2_imag;
var T9_real=T0_real + T3_real;
var T9_imag=T0_imag + T3_imag;
var T10_real=T4_real + b5_real;
var T10_imag=T4_imag + b5_imag;
var T11_real=T5_real + b5_real;
var T11_imag=T5_imag + b5_imag;
var T12_real=T6_real + b5_real;
var T12_imag=T6_imag + b5_imag;
out[j]=b0_real;
out[j + 1]=b0_imag;
x_real=T7_real + T10_imag;
x_imag=T7_imag - T10_real;
out[j + dj]=w1_real * x_real - w1_imag * x_imag;
out[j + dj + 1 ]=w1_real * x_imag + w1_imag * x_real;
x_real=T9_real + T12_imag;
x_imag=T9_imag - T12_real;
out[j + 2 * dj]=w2_real * x_real - w2_imag * x_imag;
out[j + 2 * dj + 1]=w2_real * x_imag + w2_imag * x_real;
x_real=T8_real - T11_imag;
x_imag=T8_imag + T11_real;
out[j + 3 * dj]=w3_real * x_real - w3_imag * x_imag;
out[j + 3 * dj + 1]=w3_real * x_imag + w3_imag * x_real;
x_real=T8_real + T11_imag;
x_imag=T8_imag - T11_real;
out[j + 4 * dj]=w4_real * x_real - w4_imag * x_imag;
out[j + 4 * dj + 1]=w4_real * x_imag + w4_imag * x_real;
x_real=T9_real - T12_imag;
x_imag=T9_imag + T12_real;
out[j + 5 * dj]=w5_real * x_real - w5_imag * x_imag;
out[j + 5 * dj + 1]=w5_real * x_imag + w5_imag * x_real;
x_real=T7_real - T10_imag;
x_imag=T7_imag + T10_real;
out[j + 6 * dj]=w6_real * x_real - w6_imag * x_imag;
out[j + 6 * dj + 1]=w6_real * x_imag + w6_imag * x_real;
j+=ostride;
}
j+=(factor - 1) * dj;
}
});

Clazz.newMeth(C$, 'pass_n$I$DA$I$I$DA$I$I$I$I$I',  function (fi, $in, in0, istride, out, out0, ostride, sign, factor, product) {
var i=0;
var j=0;
var k;
var k1;
var m=(this.n/factor|0);
var q=(this.n/product|0);
var p_1=(product/factor|0);
var jump=(factor - 1) * p_1;
var e;
var e1;
for (i=0; i < m; i++) {
out[out0 + ostride * i]=$in[in0 + istride * i];
out[out0 + ostride * i + 1]=$in[in0 + istride * i + 1];
}
for (e=1; e < ((factor - 1)/2|0) + 1; e++) {
for (i=0; i < m; i++) {
var idx=i + e * m;
var idxc=i + (factor - e) * m;
out[out0 + ostride * idx]=$in[in0 + istride * idx] + $in[in0 + istride * idxc];
out[out0 + ostride * idx + 1]=$in[in0 + istride * idx + 1] + $in[in0 + istride * idxc + 1];
out[out0 + ostride * idxc]=$in[in0 + istride * idx] - $in[in0 + istride * idxc];
out[out0 + ostride * idxc + 1]=$in[in0 + istride * idx + 1] - $in[in0 + istride * idxc + 1];
}
}
for (i=0; i < m; i++) {
$in[in0 + istride * i]=out[out0 + ostride * i];
$in[in0 + istride * i + 1]=out[out0 + ostride * i + 1];
}
for (e1=1; e1 < ((factor - 1)/2|0) + 1; e1++) {
for (i=0; i < m; i++) {
$in[in0 + istride * i]+=out[out0 + ostride * (i + e1 * m)];
$in[in0 + istride * i + 1]+=out[out0 + ostride * (i + e1 * m) + 1];
}
}
var twiddl=this.twiddle[fi][q];
for (e=1; e < ((factor - 1)/2|0) + 1; e++) {
var idx=e;
var w_real;
var w_imag;
var em=e * m;
var ecm=(factor - e) * m;
for (i=0; i < m; i++) {
$in[in0 + istride * (i + em)]=out[out0 + ostride * i];
$in[in0 + istride * (i + em) + 1]=out[out0 + ostride * i + 1];
$in[in0 + istride * (i + ecm)]=out[out0 + ostride * i];
$in[in0 + istride * (i + ecm) + 1]=out[out0 + ostride * i + 1];
}
for (e1=1; e1 < ((factor - 1)/2|0) + 1; e1++) {
if (idx == 0) {
w_real=1;
w_imag=0;
} else {
w_real=twiddl[2 * (idx - 1)];
w_imag=-sign * twiddl[2 * (idx - 1) + 1];
}for (i=0; i < m; i++) {
var ap=w_real * out[out0 + ostride * (i + e1 * m)];
var am=w_imag * out[out0 + ostride * (i + (factor - e1) * m) + 1];
var bp=w_real * out[out0 + ostride * (i + e1 * m) + 1];
var bm=w_imag * out[out0 + ostride * (i + (factor - e1) * m)];
$in[in0 + istride * (i + em)]+=(ap - am);
$in[in0 + istride * (i + em) + 1]+=(bp + bm);
$in[in0 + istride * (i + ecm)]+=(ap + am);
$in[in0 + istride * (i + ecm) + 1]+=(bp - bm);
}
idx+=e;
idx%=factor;
}
}
i=0;
j=0;
for (k1=0; k1 < p_1; k1++) {
out[out0 + ostride * k1]=$in[in0 + istride * k1];
out[out0 + ostride * k1 + 1]=$in[in0 + istride * k1 + 1];
}
for (e1=1; e1 < factor; e1++) {
for (k1=0; k1 < p_1; k1++) {
out[out0 + ostride * (k1 + e1 * p_1)]=$in[in0 + istride * (k1 + e1 * m)];
out[out0 + ostride * (k1 + e1 * p_1) + 1]=$in[in0 + istride * (k1 + e1 * m) + 1];
}
}
i=p_1;
j=product;
for (k=1; k < q; k++) {
for (k1=0; k1 < p_1; k1++) {
out[out0 + ostride * j]=$in[in0 + istride * i];
out[out0 + ostride * j + 1]=$in[in0 + istride * i + 1];
++i;
++j;
}
j+=jump;
}
i=p_1;
j=product;
for (k=1; k < q; k++) {
twiddl=this.twiddle[fi][k];
for (k1=0; k1 < p_1; k1++) {
for (e1=1; e1 < factor; e1++) {
var x_real=$in[in0 + istride * (i + e1 * m)];
var x_imag=$in[in0 + istride * (i + e1 * m) + 1];
var w_real=twiddl[2 * (e1 - 1)];
var w_imag=-sign * twiddl[2 * (e1 - 1) + 1];
out[out0 + ostride * (j + e1 * p_1)]=w_real * x_real - w_imag * x_imag;
out[out0 + ostride * (j + e1 * p_1) + 1]=w_real * x_imag + w_imag * x_real;
}
++i;
++j;
}
j+=jump;
}
});

Clazz.newMeth(C$, 'factor$I$IA',  function (n, fromfactors) {
var factors=Clazz.array(Integer.TYPE, [64]);
var nf=0;
var ntest=n;
var factor;
if (n <= 0) {
throw Clazz.new_(["Number (" + n + ") must be positive integer" ],$I$(1,1).c$$S);
}for (var i=0; (i < fromfactors.length) && (ntest != 1) ; i++) {
factor=fromfactors[i];
while ((ntest % factor) == 0){
ntest=(ntest/(factor)|0);
factors[nf++]=factor;
}
}
factor=2;
while ((ntest % factor) == 0 && (ntest != 1) ){
ntest=(ntest/(factor)|0);
factors[nf++]=factor;
}
factor=3;
while (ntest != 1){
while ((ntest % factor) != 0){
factor+=2;
}
ntest=(ntest/(factor)|0);
factors[nf++]=factor;
}
var product=1;
for (var i=0; i < nf; i++) {
product*=factors[i];
}
if (product != n) {
throw Clazz.new_($I$(1,1).c$$S,["factorization failed for " + n]);
}var f=Clazz.array(Integer.TYPE, [nf]);
System.arraycopy$O$I$O$I$I(factors, 0, f, 0, nf);
return f;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
