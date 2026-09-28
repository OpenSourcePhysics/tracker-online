(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Set", null, 'org.opensourcephysics.display3d.simple3d.Group', 'org.opensourcephysics.display3d.core.Set');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xLabel="x";
this.yLabel="y";
this.zLabel="z";
},1);

C$.$fields$=[['S',['xLabel','yLabel','zLabel']]]

Clazz.newMeth(C$, 'setXLabel$S',  function (label) {
this.xLabel=label;
});

Clazz.newMeth(C$, 'setYLabel$S',  function (label) {
this.yLabel=label;
});

Clazz.newMeth(C$, 'setZLabel$S',  function (label) {
this.zLabel=label;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
for (var el, $el = this.getElements$().iterator$(); $el.hasNext$()&&((el=($el.next$())),1);) {
if (Clazz.instanceOf(el, "org.opensourcephysics.display.Data")) {
return (el).getColumnNames$();
}}
return Clazz.array(String, -1, [this.xLabel, this.yLabel, this.zLabel]);
});

Clazz.newMeth(C$, 'getData2D$',  function () {
var list=this.getElements$();
var data=Clazz.array(Double.TYPE, [list.size$(), 2]);
var index=0;
for (var el, $el = list.iterator$(); $el.hasNext$()&&((el=($el.next$())),1);) {
data[0][index]=el.getX$();
data[1][index]=el.getY$();
++index;
}
return data;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
var index=1;
var list=Clazz.new_($I$(1,1));
for (var el, $el = this.getElements$().iterator$(); $el.hasNext$()&&((el=($el.next$())),1);) {
if (Clazz.instanceOf(el, "org.opensourcephysics.display.Data")) {
el.setName$S(this.getName$() + "_" + index );
list.add$O(el);
++index;
}}
return list;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
