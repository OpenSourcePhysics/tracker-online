(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.ButterworthFilter','org.opensourcephysics.cabrillo.tracker.MotionFilterSupport','org.opensourcephysics.cabrillo.tracker.TrackerRes',['org.opensourcephysics.cabrillo.tracker.ButterworthFilter','.Biquad'],['org.opensourcephysics.cabrillo.tracker.ButterworthFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ButterworthFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.cabrillo.tracker.MotionFilter');
C$.$classes$=[['Biquad',26],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['cutoffHz','sampleRateHz'],'I',['order']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$D$D.apply(this, [4, 6.0, 30.0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$D$D',  function (order, cutoffHz, sampleRateHz) {
;C$.$init$.apply(this);
this.setOrder$I(order);
this.setCutoffHz$D(cutoffHz);
this.setSampleRateHz$D(sampleRateHz);
}, 1);

Clazz.newMeth(C$, 'getOrder$',  function () {
return this.order;
});

Clazz.newMeth(C$, 'setOrder$I',  function (n) {
if (n < 1) n=1;
if (n > 8) n=8;
this.order=n;
});

Clazz.newMeth(C$, 'getCutoffHz$',  function () {
return this.cutoffHz;
});

Clazz.newMeth(C$, 'setCutoffHz$D',  function (fc) {
if (fc <= 0 ) fc=1.0;
this.cutoffHz=fc;
});

Clazz.newMeth(C$, 'getSampleRateHz$',  function () {
return this.sampleRateHz;
});

Clazz.newMeth(C$, 'setSampleRateHz$D',  function (fs) {
if (fs <= 0 ) fs=1.0;
this.sampleRateHz=fs;
});

Clazz.newMeth(C$, 'apply$DA$ZA',  function (data, valid) {
var out=data.clone$();
var nyquist=this.sampleRateHz / 2.0;
if (this.cutoffHz >= nyquist ) {
return out;
}var sections=C$.designBiquads$I$D$D(this.order, this.cutoffHz, this.sampleRateHz);
var minLen=3 * (sections.length * 2 + 1);
for (var seg, $seg = $I$(2).contiguousValidSegments$ZA(valid).iterator$(); $seg.hasNext$()&&((seg=($seg.next$())),1);) {
if (seg.length$() < 3) continue;
var pad=Math.min(seg.length$() - 1, Math.max(minLen, sections.length * 6));
var padded=$I$(2).reflectPad$DA$I$I$I(data, seg.start, seg.end, pad);
var forward=C$.filterCascade$org_opensourcephysics_cabrillo_tracker_ButterworthFilter_BiquadA$DA(sections, padded);
var reversed=C$.reverse$DA(forward);
var backward=C$.filterCascade$org_opensourcephysics_cabrillo_tracker_ButterworthFilter_BiquadA$DA(sections, reversed);
var result=C$.reverse$DA(backward);
for (var i=0; i < seg.length$(); i++) {
out[seg.start + i]=result[pad + i];
}
}
return out;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(3).getString$S("FilterDialog.Butterworth.Name") + " (order=" + this.order + ", cutoff=" + new Double(this.cutoffHz).toString() + " Hz" + ", fs=" + new Double(this.sampleRateHz).toString() + " Hz)" ;
});

Clazz.newMeth(C$, 'copy$',  function () {
return Clazz.new_(C$.c$$I$D$D,[this.order, this.cutoffHz, this.sampleRateHz]);
});

Clazz.newMeth(C$, 'reverse$DA',  function (x) {
var r=Clazz.array(Double.TYPE, [x.length]);
for (var i=0; i < x.length; i++) r[i]=x[x.length - 1 - i ];

return r;
}, 1);

Clazz.newMeth(C$, 'filterCascade$org_opensourcephysics_cabrillo_tracker_ButterworthFilter_BiquadA$DA',  function (sections, x) {
var y=x;
for (var s, $s = 0, $$s = sections; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
y=s.filter$DA(y);
}
return y;
}, 1);

Clazz.newMeth(C$, 'designBiquads$I$D$D',  function (order, fc, fs) {
var omegaPrewarped=2.0 * fs * Math.tan(3.141592653589793 * fc / fs) ;
var k2=2.0 * fs;
var nSections=((order + 1)/2|0);
var sections=Clazz.array($I$(4), [nSections]);
var idx=0;
if (order % 2 == 1) {
var pole=-omegaPrewarped;
var zPole=(k2 + pole) / (k2 - pole);
var a1=-zPole;
var b0=(1.0 + a1) / 2.0;
sections[idx++]=Clazz.new_($I$(4,1).c$$D$D$D$D$D,[b0, b0, 0.0, a1, 0.0]);
}var pairs=(order/2|0);
for (var k=1; k <= pairs; k++) {
var theta=3.141592653589793 * (2 * k - 1 + order) / (2.0 * order);
var pr=omegaPrewarped * Math.cos(theta);
var pi=omegaPrewarped * Math.sin(theta);
var aReal=k2 - pr;
var aImag=-pi;
var bReal=k2 + pr;
var bImag=pi;
var denomMag=aReal * aReal + aImag * aImag;
var zReal=(bReal * aReal + bImag * aImag) / denomMag;
var zImag=(bImag * aReal - bReal * aImag) / denomMag;
var a1=-2.0 * zReal;
var a2=zReal * zReal + zImag * zImag;
var b0=(1.0 + a1 + a2 ) / 4.0;
var b1=2.0 * b0;
var b2=b0;
sections[idx++]=Clazz.new_($I$(4,1).c$$D$D$D$D$D,[b0, b1, b2, a1, a2]);
}
return sections;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ButterworthFilter, "Biquad", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['b0','b1','b2','a1','a2']]]

Clazz.newMeth(C$, 'c$$D$D$D$D$D',  function (b0, b1, b2, a1, a2) {
;C$.$init$.apply(this);
this.b0=b0;
this.b1=b1;
this.b2=b2;
this.a1=a1;
this.a2=a2;
}, 1);

Clazz.newMeth(C$, 'filter$DA',  function (x) {
if (x.length == 0) return x.clone$();
var v=x[0];
var s1=v * (1.0 - this.b0);
var s2=v * (this.b2 - this.a2);
var y=Clazz.array(Double.TYPE, [x.length]);
for (var i=0; i < x.length; i++) {
var xi=x[i];
var yi=this.b0 * xi + s1;
s1=this.b1 * xi - this.a1 * yi + s2;
s2=this.b2 * xi - this.a2 * yi;
y[i]=yi;
}
return y;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ButterworthFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
control.setValue$S$I("order", f.order);
control.setValue$S$D("cutoff_hz", f.cutoffHz);
control.setValue$S$D("sample_rate_hz", f.sampleRateHz);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
if (control.getPropertyNamesRaw$().contains$O("order")) f.setOrder$I(control.getInt$S("order"));
if (control.getPropertyNamesRaw$().contains$O("cutoff_hz")) f.setCutoffHz$D(control.getDouble$S("cutoff_hz"));
if (control.getPropertyNamesRaw$().contains$O("sample_rate_hz")) f.setSampleRateHz$D(control.getDouble$S("sample_rate_hz"));
return f;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
