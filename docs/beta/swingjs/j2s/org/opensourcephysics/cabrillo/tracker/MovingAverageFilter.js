(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.MovingAverageFilter','org.opensourcephysics.cabrillo.tracker.MotionFilterSupport','org.opensourcephysics.cabrillo.tracker.TrackerRes',['org.opensourcephysics.cabrillo.tracker.MovingAverageFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MovingAverageFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.cabrillo.tracker.MotionFilter');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['window']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [5]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (window) {
;C$.$init$.apply(this);
this.setWindow$I(window);
}, 1);

Clazz.newMeth(C$, 'getWindow$',  function () {
return this.window;
});

Clazz.newMeth(C$, 'setWindow$I',  function (w) {
if (w < 1) w=1;
if (w % 2 == 0) ++w;
this.window=w;
});

Clazz.newMeth(C$, 'apply$DA$ZA',  function (data, valid) {
var out=data.clone$();
var half=(this.window/2|0);
for (var seg, $seg = $I$(2).contiguousValidSegments$ZA(valid).iterator$(); $seg.hasNext$()&&((seg=($seg.next$())),1);) {
for (var i=seg.start; i < seg.end; i++) {
var lo=Math.max(seg.start, i - half);
var hi=Math.min(seg.end - 1, i + half);
var sum=0;
var count=0;
for (var k=lo; k <= hi; k++) {
sum+=data[k];
++count;
}
out[i]=sum / count;
}
}
return out;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(3).getString$S("FilterDialog.MovingAverage.Name") + " (window=" + this.window + ")" ;
});

Clazz.newMeth(C$, 'copy$',  function () {
return Clazz.new_(C$.c$$I,[this.window]);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MovingAverageFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
control.setValue$S$I("window", f.window);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
if (control.getPropertyNamesRaw$().contains$O("window")) f.setWindow$I(control.getInt$S("window"));
return f;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
