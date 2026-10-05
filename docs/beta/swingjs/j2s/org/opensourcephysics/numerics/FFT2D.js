(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.FFT']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FFT2D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nrows','ncols'],'O',['rowFFT','org.opensourcephysics.numerics.FFT','+colFFT','acol','double[]','+ccol']]]

Clazz.newMeth(C$, 'c$$I$I',  function (nrows, ncols) {
;C$.$init$.apply(this);
if ((nrows <= 0) || (ncols <= 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The array dimensions >=0 : " + nrows + "," + ncols ]);
}this.nrows=nrows;
this.ncols=ncols;
this.acol=Clazz.array(Double.TYPE, [2 * nrows]);
if (nrows % 2 == 1) {
this.ccol=Clazz.array(Double.TYPE, [2 * nrows]);
}this.rowFFT=Clazz.new_($I$(1,1).c$$I,[ncols]);
this.colFFT=((nrows == ncols) ? this.rowFFT : Clazz.new_($I$(1,1).c$$I,[nrows]));
}, 1);

Clazz.newMeth(C$, 'checkData$DA$I',  function (data, rowspan) {
if (rowspan < 2 * this.ncols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The row span " + rowspan + "is shorter than the row length " + 2 * this.ncols ]);
}if (this.nrows * rowspan > data.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The data array is too small for " + this.nrows + "x" + rowspan + " data.length=" + data.length ]);
}});

Clazz.newMeth(C$, 'transform$DA',  function (data) {
this.transform_internal$DA$I(data, 2 * this.ncols);
});

Clazz.newMeth(C$, 'transform_internal$DA$I',  function (data, rowspan) {
this.checkData$DA$I(data, rowspan);
for (var i=0; i < this.nrows; i++) {
this.rowFFT.transform_internal$DA$I$I$I(data, i * rowspan, 2, -1);
}
for (var j=0; j < this.ncols; j++) {
this.colFFT.transform_internal$DA$I$I$I(data, 2 * j, rowspan, -1);
}
});

Clazz.newMeth(C$, 'backtransform$DA',  function (data) {
this.backtransform_internal$DA$I(data, 2 * this.ncols);
});

Clazz.newMeth(C$, 'backtransform_internal$DA$I',  function (data, rowspan) {
this.checkData$DA$I(data, rowspan);
for (var j=0; j < this.ncols; j++) {
this.colFFT.transform_internal$DA$I$I$I(data, 2 * j, rowspan, 1);
}
for (var i=0; i < this.nrows; i++) {
this.rowFFT.transform_internal$DA$I$I$I(data, i * rowspan, 2, 1);
}
});

Clazz.newMeth(C$, 'inverse$DA',  function (data) {
this.inverse_internal$DA$I(data, 2 * this.ncols);
});

Clazz.newMeth(C$, 'inverse_internal$DA$I',  function (data, rowspan) {
this.backtransform_internal$DA$I(data, rowspan);
var norm=1.0 / (this.nrows * this.ncols);
for (var i=0; i < this.nrows; i++) {
data[i]*=norm;
}
});

Clazz.newMeth(C$, 'getNaturalFreq$D$I',  function (delta, n) {
var freq=Clazz.array(Double.TYPE, [n]);
var f=-0.5 / delta;
var df=-2 * f / (n - n % 2);
for (var i=0; i < n; i++) {
freq[i]=f;
f+=df;
}
return freq;
});

Clazz.newMeth(C$, 'getFreqMin$D$D$I',  function (min, max, n) {
return -((n/2|0)) / (max - min);
});

Clazz.newMeth(C$, 'getFreqMax$D$D$I',  function (min, max, n) {
return (((n + 1)/2|0) - 1) / (max - min);
});

Clazz.newMeth(C$, 'getNaturalModes$I',  function (n) {
var bins=Clazz.array(Double.TYPE, [n]);
var w=(-(n - n % 2)/2|0);
for (var i=0; i < n; i++) {
bins[i]=w;
++w;
}
return bins;
});

Clazz.newMeth(C$, 'getWrappedModes$I',  function (n) {
var bins=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
bins[i]=(i < ((n + 1)/2|0)) ? i : (i - n);
}
return bins;
});

Clazz.newMeth(C$, 'getWrappedOmegaX$D$D',  function (xmin, xmax) {
return this.getWrappedFreq$D$I((xmax - xmin) / (this.nrows - this.nrows % 2) / 6.283185307179586 , this.nrows);
});

Clazz.newMeth(C$, 'getWrappedOmegaY$D$D',  function (ymin, ymax) {
return this.getWrappedFreq$D$I((ymax - ymin) / (this.ncols - this.ncols % 2) / 6.283185307179586 , this.ncols);
});

Clazz.newMeth(C$, 'getWrappedFreq$D$I',  function (delta, n) {
var freq=Clazz.array(Double.TYPE, [n]);
var f=-0.5 / delta;
var df=-2 * f / (n - n % 2);
for (var i=0; i < n; i++) {
freq[i]=(i < ((n + 1)/2|0)) ? i * df : (i - n) * df;
}
return freq;
});

Clazz.newMeth(C$, 'getNaturalFreqX$D',  function (delta) {
return this.getNaturalFreq$D$I(delta, this.nrows);
});

Clazz.newMeth(C$, 'getNaturalFreqX$D$D',  function (xmin, xmax) {
return this.getNaturalFreq$D$I((xmax - xmin) / (this.nrows - this.nrows % 2), this.nrows);
});

Clazz.newMeth(C$, 'getNaturalOmegaX$D',  function (delta) {
return this.getNaturalFreq$D$I(delta / 6.283185307179586, this.nrows);
});

Clazz.newMeth(C$, 'getNaturalOmegaX$D$D',  function (xmin, xmax) {
return this.getNaturalFreq$D$I((xmax - xmin) / (this.nrows - this.nrows % 2) / 6.283185307179586 , this.nrows);
});

Clazz.newMeth(C$, 'getNaturalFreqY$D',  function (delta) {
return this.getNaturalFreq$D$I(delta, this.ncols);
});

Clazz.newMeth(C$, 'getNaturalFreqY$D$D',  function (ymin, ymax) {
return this.getNaturalFreq$D$I((ymax - ymin) / (this.ncols - this.ncols % 2), this.ncols);
});

Clazz.newMeth(C$, 'getNaturalOmegaY$D',  function (delta) {
return this.getNaturalFreq$D$I(delta / 6.283185307179586, this.ncols);
});

Clazz.newMeth(C$, 'getNaturalOmegaY$D$D',  function (ymin, ymax) {
return this.getNaturalFreq$D$I((ymax - ymin) / (this.ncols - this.ncols % 2) / 6.283185307179586 , this.ncols);
});

Clazz.newMeth(C$, 'toNaturalOrder$DA',  function (data) {
if (this.ccol != null ) {
System.arraycopy$O$I$O$I$I(data, ((this.ncols/2|0)) * this.acol.length, this.ccol, 0, this.ccol.length);
}for (var i=0; i < (this.ncols/2|0); i++) {
var offset=i * this.acol.length;
System.arraycopy$O$I$O$I$I(data, offset, this.acol, 0, this.acol.length);
System.arraycopy$O$I$O$I$I(data, ((this.ncols/2|0) + i + this.ncols % 2) * this.acol.length, data, offset, this.acol.length);
System.arraycopy$O$I$O$I$I(this.acol, 0, data, ((this.ncols/2|0) + i) * this.acol.length, this.acol.length);
}
if (this.ccol != null ) {
System.arraycopy$O$I$O$I$I(this.ccol, 0, data, data.length - this.ccol.length, this.ccol.length);
}for (var i=0; i < this.ncols; i++) {
var n=(this.acol.length/2|0);
var offset=i * this.acol.length;
System.arraycopy$O$I$O$I$I(data, offset, this.acol, 0, this.acol.length);
System.arraycopy$O$I$O$I$I(this.acol, n + n % 2, data, offset, n - n % 2);
System.arraycopy$O$I$O$I$I(this.acol, 0, data, offset + n - n % 2, n + n % 2);
}
var norm=1.0 / (this.nrows * this.ncols);
for (var i=0, n=data.length; i < n; i++) {
data[i]*=norm;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
