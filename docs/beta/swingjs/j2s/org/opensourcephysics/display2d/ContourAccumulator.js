(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.display2d.LineRecord']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ContourAccumulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['accumulator','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.accumulator=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addLine$I$I$I$I',  function (x1, y1, x2, y2) {
this.accumulator.add$O(Clazz.new_($I$(2,1).c$$I$I$I$I,[x1, y1, x2, y2]));
});

Clazz.newMeth(C$, 'clearAccumulator$',  function () {
this.accumulator.clear$();
});

Clazz.newMeth(C$, 'drawAll$java_awt_Graphics',  function (g) {
var tempList=null;
{
tempList=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.accumulator]);
}var it=tempList.iterator$();
while (it.hasNext$()){
var line=it.next$();
g.drawLine$I$I$I$I(line.x1, line.y1, line.x2, line.y2);
}
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
