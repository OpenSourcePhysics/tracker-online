(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.SavitzkyGolayFilter','org.opensourcephysics.cabrillo.tracker.MotionFilterSupport','org.opensourcephysics.cabrillo.tracker.TrackerRes',['org.opensourcephysics.cabrillo.tracker.SavitzkyGolayFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SavitzkyGolayFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.cabrillo.tracker.MotionFilter');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['window','polyOrder']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [7, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (window, polyOrder) {
;C$.$init$.apply(this);
this.setParameters$I$I(window, polyOrder);
}, 1);

Clazz.newMeth(C$, 'getWindow$',  function () {
return this.window;
});

Clazz.newMeth(C$, 'getPolyOrder$',  function () {
return this.polyOrder;
});

Clazz.newMeth(C$, 'setParameters$I$I',  function (window, polyOrder) {
if (window < 3) window=3;
if (window % 2 == 0) ++window;
if (polyOrder < 1) polyOrder=1;
if (polyOrder >= window) polyOrder=window - 1;
this.window=window;
this.polyOrder=polyOrder;
});

Clazz.newMeth(C$, 'apply$DA$ZA',  function (data, valid) {
var out=data.clone$();
for (var seg, $seg = $I$(2).contiguousValidSegments$ZA(valid).iterator$(); $seg.hasNext$()&&((seg=($seg.next$())),1);) {
var n=seg.length$();
if (n < this.polyOrder + 1) continue;
var eff=Math.min(this.window, n);
if (eff % 2 == 0) --eff;
var halfEff=(eff/2|0);
var p=Math.min(this.polyOrder, eff - 1);
var centered=C$.computeCoefficients$I$I$I(eff, p, 0);
var center=centered[0];
for (var i=halfEff; i < n - halfEff; i++) {
var sum=0;
for (var k=0; k < eff; k++) sum+=center[k] * data[seg.start + i - halfEff + k];

out[seg.start + i]=sum;
}
for (var i=0; i < halfEff; i++) {
var offsetFromLeft=i - halfEff;
var left=C$.computeCoefficients$I$I$I(eff, p, offsetFromLeft);
var coef=left[0];
var sum=0;
for (var k=0; k < eff; k++) sum+=coef[k] * data[seg.start + k];

out[seg.start + i]=sum;
}
for (var i=n - halfEff; i < n; i++) {
var offsetFromRight=(i - (n - 1)) + halfEff;
var right=C$.computeCoefficients$I$I$I(eff, p, offsetFromRight);
var coef=right[0];
var sum=0;
for (var k=0; k < eff; k++) sum+=coef[k] * data[seg.start + n - eff + k];

out[seg.start + i]=sum;
}
if (n < this.window) {
}}
return out;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(3).getString$S("FilterDialog.SavitzkyGolay.Name") + " (window=" + this.window + ", poly=" + this.polyOrder + ")" ;
});

Clazz.newMeth(C$, 'copy$',  function () {
return Clazz.new_(C$.c$$I$I,[this.window, this.polyOrder]);
});

Clazz.newMeth(C$, 'computeCoefficients$I$I$I',  function (w, p, t) {
var half=(w/2|0);
var J=Clazz.array(Double.TYPE, [w, p + 1]);
for (var i=0; i < w; i++) {
var xi=i - half;
var power=1.0;
for (var j=0; j <= p; j++) {
J[i][j]=power;
power*=xi;
}
}
var JtJ=Clazz.array(Double.TYPE, [p + 1, p + 1]);
for (var a=0; a <= p; a++) {
for (var b=0; b <= p; b++) {
var sum=0;
for (var i=0; i < w; i++) sum+=J[i][a] * J[i][b];

JtJ[a][b]=sum;
}
}
var inv=C$.invert$DAA(JtJ);
var tPow=Clazz.array(Double.TYPE, [p + 1]);
var tp=1.0;
for (var j=0; j <= p; j++) {
tPow[j]=tp;
tp*=t;
}
var eval=Clazz.array(Double.TYPE, [p + 1]);
for (var a=0; a <= p; a++) {
var sum=0;
for (var b=0; b <= p; b++) sum+=inv[a][b] * tPow[b];

eval[a]=sum;
}
var coef=Clazz.array(Double.TYPE, [w]);
for (var i=0; i < w; i++) {
var sum=0;
for (var a=0; a <= p; a++) sum+=eval[a] * J[i][a];

coef[i]=sum;
}
return Clazz.array(Double.TYPE, -2, [coef]);
}, 1);

Clazz.newMeth(C$, 'invert$DAA',  function (m) {
var n=m.length;
var a=Clazz.array(Double.TYPE, [n, 2 * n]);
for (var i=0; i < n; i++) {
System.arraycopy$O$I$O$I$I(m[i], 0, a[i], 0, n);
a[i][n + i]=1.0;
}
for (var col=0; col < n; col++) {
var pivot=col;
var pivotMag=Math.abs(a[col][col]);
for (var r=col + 1; r < n; r++) {
if (Math.abs(a[r][col]) > pivotMag ) {
pivot=r;
pivotMag=Math.abs(a[r][col]);
}}
if (pivot != col) {
var tmp=a[col];
a[col]=a[pivot];
a[pivot]=tmp;
}var diag=a[col][col];
if (diag == 0 ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Singular matrix in SG coefficient solve"]);
for (var j=0; j < 2 * n; j++) a[col][j]/=diag;

for (var r=0; r < n; r++) {
if (r == col) continue;
var factor=a[r][col];
if (factor == 0 ) continue;
for (var j=0; j < 2 * n; j++) a[r][j]-=factor * a[col][j];

}
}
var inv=Clazz.array(Double.TYPE, [n, n]);
for (var i=0; i < n; i++) System.arraycopy$O$I$O$I$I(a[i], n, inv[i], 0, n);

return inv;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SavitzkyGolayFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
control.setValue$S$I("window", f.window);
control.setValue$S$I("poly_order", f.polyOrder);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
var w=control.getPropertyNamesRaw$().contains$O("window") ? control.getInt$S("window") : f.window;
var p=control.getPropertyNamesRaw$().contains$O("poly_order") ? control.getInt$S("poly_order") : f.polyOrder;
f.setParameters$I$I(w, p);
return f;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
