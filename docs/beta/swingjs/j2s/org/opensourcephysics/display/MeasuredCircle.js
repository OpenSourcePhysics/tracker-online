(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.CircleLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeasuredCircle", null, 'org.opensourcephysics.display.Circle', 'org.opensourcephysics.display.Measurable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enableMeasure=true;
},1);

C$.$fields$=[['Z',['enableMeasure']]]

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMeasured$Z',  function (_enableMeasure) {
this.enableMeasure=_enableMeasure;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.enableMeasure;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
