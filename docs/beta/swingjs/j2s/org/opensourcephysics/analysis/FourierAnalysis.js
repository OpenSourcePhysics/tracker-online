(function(){var P$=Clazz.newPackage("org.opensourcephysics.analysis"),I$=[[0,'org.opensourcephysics.numerics.FFT','org.opensourcephysics.display.ComplexDataset','org.opensourcephysics.display.Dataset','java.util.ArrayList','org.opensourcephysics.display.DisplayRes','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FourierAnalysis", null, null, 'org.opensourcephysics.display.Data');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fft=Clazz.new_($I$(1,1));
this.complexDatasets=Clazz.array($I$(2), [1]);
this.realDatasets=Clazz.array($I$(3), [2]);
this.radians=false;
this.name="Fourier Analysis Complex Data";
this.datasetID=this.hashCode$();
},1);

C$.$fields$=[['Z',['radians'],'I',['datasetID'],'S',['name'],'O',['fft','org.opensourcephysics.numerics.FFT','fftData','double[]','+omega','+freqs','+cosVec','+sinVec','+gutterVec','complexDatasets','org.opensourcephysics.display.ComplexDataset[]','realDatasets','org.opensourcephysics.display.Dataset[]']]]

Clazz.newMeth(C$, 'doAnalysis$DA$DA$I',  function (x, z, gutter) {
this.fftData=Clazz.array(Double.TYPE, [z.length + 4 * gutter]);
this.gutterVec=Clazz.array(Double.TYPE, [2 * gutter]);
System.arraycopy$O$I$O$I$I(z, 0, this.fftData, 2 * gutter, z.length);
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
var dx=x[1] - x[0];
var xmin=x[0] - gutter * dx;
var xmax=x[x.length - 1] + (gutter + 1) * dx;
this.omega=this.fft.getNaturalOmega$D$D(xmin, xmax);
this.freqs=this.fft.getNaturalFreq$D$D(xmin, xmax);
this.cosVec=Clazz.array(Double.TYPE, [this.omega.length]);
this.sinVec=Clazz.array(Double.TYPE, [this.omega.length]);
var norm=(this.fftData.length/(z.length)|0);
for (var i=0, nOmega=this.omega.length; i < nOmega; i++) {
this.cosVec[i]=norm * Math.cos(this.omega[i] * xmin);
this.sinVec[i]=norm * Math.sin(this.omega[i] * xmin);
}
for (var i=0, nOmega=this.omega.length; i < nOmega; i++) {
var re=this.fftData[2 * i];
var im=this.fftData[2 * i + 1];
this.fftData[2 * i]=re * this.cosVec[i] + im * this.sinVec[i];
this.fftData[2 * i + 1]=im * this.cosVec[i] - re * this.sinVec[i];
}
return this.fftData;
});

Clazz.newMeth(C$, 'repeatAnalysis$DA',  function (z) {
if (this.fftData == null ) {
var n=z.length;
var x=Clazz.array(Double.TYPE, [n]);
var x0=0;
var dx=1.0 / n;
for (var i=0; i < n; i++) {
x[i]=x0;
x0+=dx;
}
return this.doAnalysis$DA$DA$I(x, z, 0);
}System.arraycopy$O$I$O$I$I(this.gutterVec, 0, this.fftData, 0, this.gutterVec.length);
System.arraycopy$O$I$O$I$I(this.gutterVec, 0, this.fftData, this.fftData.length - 1 - this.gutterVec.length , this.gutterVec.length);
System.arraycopy$O$I$O$I$I(z, 0, this.fftData, this.gutterVec.length, z.length);
this.fft.transform$DA(this.fftData);
this.fft.toNaturalOrder$DA(this.fftData);
for (var i=0, nOmega=this.omega.length; i < nOmega; i++) {
var re=this.fftData[2 * i];
var im=this.fftData[2 * i + 1];
this.fftData[2 * i]=re * this.cosVec[i] + im * this.sinVec[i];
this.fftData[2 * i + 1]=im * this.cosVec[i] - re * this.sinVec[i];
}
return this.fftData;
});

Clazz.newMeth(C$, 'getNaturalOmega$',  function () {
return this.omega;
});

Clazz.newMeth(C$, 'getNaturalFreq$',  function () {
return this.freqs;
});

Clazz.newMeth(C$, 'useRadians$Z',  function (radians) {
this.radians=radians;
});

Clazz.newMeth(C$, 'isRadians$',  function () {
return this.radians;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
var list=Clazz.new_($I$(4,1));
if (this.fftData == null ) {
return list;
}if (this.complexDatasets[0] == null ) {
this.complexDatasets[0]=Clazz.new_($I$(2,1));
this.complexDatasets[0].setXYColumnNames$S$S$S($I$(5).getString$S("FourierAnalysis.Column.Frequency"), $I$(5).getString$S("FourierAnalysis.Column.Real"), $I$(5).getString$S("FourierAnalysis.Column.Imaginary"));
} else {
this.complexDatasets[0].clear$();
}if (this.radians) {
this.complexDatasets[0].append$DA$DA(this.omega, this.fftData);
} else {
this.complexDatasets[0].append$DA$DA(this.freqs, this.fftData);
}list.add$O(this.complexDatasets[0]);
return list;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
var list=Clazz.new_($I$(4,1));
if (this.fftData == null ) {
return list;
}if (this.realDatasets[0] == null ) {
this.realDatasets[0]=Clazz.new_($I$(3,1));
this.realDatasets[0].setXYColumnNames$S$S$S($I$(5).getString$S("FourierAnalysis.Column.Frequency"), $I$(5).getString$S("FourierAnalysis.Column.Real"), $I$(5).getString$S("FourierAnalysis.RealCoefficients"));
this.realDatasets[0].setLineColor$java_awt_Color($I$(6).RED);
this.realDatasets[1]=Clazz.new_($I$(3,1));
this.realDatasets[1].setXYColumnNames$S$S$S($I$(5).getString$S("FourierAnalysis.Column.Frequency"), $I$(5).getString$S("FourierAnalysis.Column.Imaginary"), $I$(5).getString$S("FourierAnalysis.ImaginaryCoefficients"));
this.realDatasets[1].setLineColor$java_awt_Color($I$(6).BLUE);
} else {
this.realDatasets[0].clear$();
this.realDatasets[1].clear$();
}var n=(this.radians ? this.omega.length : this.freqs.length);
var re=Clazz.array(Double.TYPE, [n]);
var im=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
re[i]=this.fftData[2 * i];
im[i]=this.fftData[2 * i + 1];
}
var x=(this.radians ? this.omega : this.freqs);
this.realDatasets[0].append$DA$DA(x, re);
this.realDatasets[1].append$DA$DA(x, im);
list.add$O(this.realDatasets[0]);
list.add$O(this.realDatasets[1]);
return list;
});

Clazz.newMeth(C$, 'getData2D$',  function () {
if (this.fftData == null ) {
return null;
}var data=Clazz.array(Double.TYPE, [3, null]);
var n=(this.fftData.length/2|0);
data[1]=Clazz.array(Double.TYPE, [n]);
data[2]=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
var re=this.fftData[2 * i];
var im=this.fftData[2 * i + 1];
data[1][i]=re;
data[2][i]=im;
}
if (this.radians) {
data[0]=this.omega;
} else {
data[0]=this.freqs;
}return data;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
return Clazz.array(String, -1, [this.name]);
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.datasetID=id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.datasetID;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
