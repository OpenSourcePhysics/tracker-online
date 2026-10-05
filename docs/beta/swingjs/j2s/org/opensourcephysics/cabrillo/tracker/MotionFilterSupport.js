(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.ArrayList',['org.opensourcephysics.cabrillo.tracker.MotionFilterSupport','.Segment']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MotionFilterSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Segment',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'contiguousValidSegments$ZA',  function (valid) {
var result=Clazz.new_($I$(1,1));
var i=0;
while (i < valid.length){
while (i < valid.length && !valid[i] )++i;

var start=i;
while (i < valid.length && valid[i] )++i;

if (i > start) result.add$O(Clazz.new_($I$(2,1).c$$I$I,[start, i]));
}
return result;
}, 1);

Clazz.newMeth(C$, 'reflectPad$DA$I$I$I',  function (src, start, end, pad) {
var n=end - start;
var out=Clazz.array(Double.TYPE, [n + 2 * pad]);
for (var i=0; i < n; i++) out[pad + i]=src[start + i];

var s0=src[start];
var sN=src[end - 1];
for (var k=0; k < pad; k++) {
var srcIdx=Math.min(n - 1, k + 1);
out[pad - 1 - k ]=2 * s0 - src[start + srcIdx];
var srcIdx2=Math.max(0, n - 2 - k );
out[pad + n + k ]=2 * sN - src[start + srcIdx2];
}
return out;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MotionFilterSupport, "Segment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end']]]

Clazz.newMeth(C$, 'c$$I$I',  function (start, end) {
;C$.$init$.apply(this);
this.start=start;
this.end=end;
}, 1);

Clazz.newMeth(C$, 'length$',  function () {
return this.end - this.start;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
