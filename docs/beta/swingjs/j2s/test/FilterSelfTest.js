(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.MovingAverageFilter','org.opensourcephysics.cabrillo.tracker.ButterworthFilter','org.opensourcephysics.cabrillo.tracker.SavitzkyGolayFilter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FilterSelfTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['passed','failed']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.testMovingAverageReducesNoise$();
C$.testMovingAverageHandlesInvalidGap$();
C$.testButterworthAttenuatesAboveCutoff$();
C$.testButterworthPreservesDC$();
C$.testButterworthZeroPhase$();
C$.testSavitzkyGolayPreservesQuadratic$();
System.out.println$();
System.out.println$S("Passed: " + C$.passed + ", Failed: " + C$.failed );
if (C$.failed > 0) System.exit$I(1);
}, 1);

Clazz.newMeth(C$, 'testMovingAverageReducesNoise$',  function () {
var n=200;
var x=Clazz.array(Double.TYPE, [n]);
var valid=Clazz.array(Boolean.TYPE, [n]);
var seed=42;
var seedState=Long.$dval(seed);
for (var i=0; i < n; i++) {
seedState=(seedState * 1.103515245E9 + 12345.0) % (2147483648);
var noise=((seedState / 2.147483648E9) - 0.5) * 0.4;
x[i]=Math.sin(2 * 3.141592653589793 * i  / 50.0) + noise;
valid[i]=true;
}
var f=Clazz.new_($I$(1,1).c$$I,[7]);
var y=f.apply$DA$ZA(x, valid);
var rmsX=C$.rms$DA$ZA(x, valid);
var rmsY=C$.rms$DA$ZA(y, valid);
C$.check$S$Z("MovingAverage reduces RMS energy of noisy signal", rmsY < rmsX );
}, 1);

Clazz.newMeth(C$, 'testMovingAverageHandlesInvalidGap$',  function () {
var x=Clazz.array(Double.TYPE, -1, [0, 1, 2, 100, 100, 5, 6, 7]);
var v=Clazz.array(Boolean.TYPE, -1, [true, true, true, false, false, true, true, true]);
var f=Clazz.new_($I$(1,1).c$$I,[3]);
var y=f.apply$DA$ZA(x, v);
C$.check$S$Z("MovingAverage skips invalid gap (preserves invalid, edge-clamps after gap)", y[3] == 100  && y[4] == 100   && Math.abs(y[5] - 5.5) < 1.0E-9   && Math.abs(y[6] - 6.0) < 1.0E-9   && Math.abs(y[7] - 6.5) < 1.0E-9  );
}, 1);

Clazz.newMeth(C$, 'testButterworthAttenuatesAboveCutoff$',  function () {
var fs=100.0;
var fcut=5.0;
var n=1024;
var x=Clazz.array(Double.TYPE, [n]);
var v=Clazz.array(Boolean.TYPE, [n]);
for (var i=0; i < n; i++) {
x[i]=Math.sin(2 * 3.141592653589793 * 20.0 * i  / fs);
v[i]=true;
}
var f=Clazz.new_($I$(2,1).c$$I$D$D,[4, fcut, fs]);
var y=f.apply$DA$ZA(x, v);
var inAmp=C$.peakAmp$DA$I$I(x, 50, n - 50);
var outAmp=C$.peakAmp$DA$I$I(y, 50, n - 50);
C$.check$S$Z("Butterworth attenuates 20 Hz with 5 Hz cutoff (out/in < 0.05): " + String.format$S$OA("ratio=%.4f", Clazz.array(java.lang.Object, -1, [Double.valueOf$D(outAmp / inAmp)])), outAmp / inAmp < 0.05 );
}, 1);

Clazz.newMeth(C$, 'testButterworthPreservesDC$',  function () {
var n=256;
var x=Clazz.array(Double.TYPE, [n]);
var v=Clazz.array(Boolean.TYPE, [n]);
for (var i=0; i < n; i++) {
x[i]=3.7;
v[i]=true;
}
var f=Clazz.new_($I$(2,1).c$$I$D$D,[4, 5.0, 100.0]);
var y=f.apply$DA$ZA(x, v);
var maxErr=0;
for (var i=20; i < n - 20; i++) maxErr=Math.max(maxErr, Math.abs(y[i] - 3.7));

C$.check$S$Z("Butterworth preserves DC (max error < 1e-6): " + new Double(maxErr).toString(), maxErr < 1.0E-6 );
}, 1);

Clazz.newMeth(C$, 'testButterworthZeroPhase$',  function () {
var fs=100.0;
var n=512;
var x=Clazz.array(Double.TYPE, [n]);
var v=Clazz.array(Boolean.TYPE, [n]);
for (var i=0; i < n; i++) {
x[i]=Math.sin(2 * 3.141592653589793 * 2.0 * i  / fs);
v[i]=true;
}
var f=Clazz.new_($I$(2,1).c$$I$D$D,[4, 10.0, fs]);
var y=f.apply$DA$ZA(x, v);
var zeroX=-1;
var zeroY=-1;
for (var i=100; i < 200; i++) {
if (zeroX < 0 && x[i] >= 0   && x[i + 1] < 0  ) zeroX=i;
if (zeroY < 0 && y[i] >= 0   && y[i + 1] < 0  ) zeroY=i;
}
C$.check$S$Z("Butterworth zero-phase (lag < 2 samples): zeroX=" + zeroX + " zeroY=" + zeroY , zeroX > 0 && zeroY > 0  && Math.abs(zeroX - zeroY) <= 2 );
}, 1);

Clazz.newMeth(C$, 'testSavitzkyGolayPreservesQuadratic$',  function () {
var n=50;
var x=Clazz.array(Double.TYPE, [n]);
var v=Clazz.array(Boolean.TYPE, [n]);
for (var i=0; i < n; i++) {
var t=i;
x[i]=1.0 + 2.0 * t + 0.5 * t * t ;
v[i]=true;
}
var f=Clazz.new_($I$(3,1).c$$I$I,[7, 2]);
var y=f.apply$DA$ZA(x, v);
var maxErr=0;
for (var i=0; i < n; i++) maxErr=Math.max(maxErr, Math.abs(y[i] - x[i]));

C$.check$S$Z("SavitzkyGolay (poly=2) reproduces quadratic exactly: maxErr=" + new Double(maxErr).toString(), maxErr < 1.0E-6 );
}, 1);

Clazz.newMeth(C$, 'rms$DA$ZA',  function (x, v) {
var sum=0;
var count=0;
for (var i=0; i < x.length; i++) if (v[i]) {
sum+=x[i] * x[i];
++count;
}
return Math.sqrt(sum / count);
}, 1);

Clazz.newMeth(C$, 'peakAmp$DA$I$I',  function (x, from, to) {
var peak=0;
for (var i=from; i < to; i++) peak=Math.max(peak, Math.abs(x[i]));

return peak;
}, 1);

Clazz.newMeth(C$, 'check$S$Z',  function (label, cond) {
if (cond) {
++C$.passed;
System.out.println$S("[PASS] " + label);
} else {
++C$.failed;
System.out.println$S("[FAIL] " + label);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.passed=0;
C$.failed=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
