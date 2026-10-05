(function(){var P$=Clazz.newPackage("demo"),I$=[[0,'org.opensourcephysics.ejs.control.value.Value','org.opensourcephysics.frames.PlotFrame','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FirstPlotApp");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['v','org.opensourcephysics.ejs.control.value.Value']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var frame=Clazz.new_($I$(2,1).c$$S$S$S,["position", "amplitude", "First Plot"]);
frame.setSize$I$I(400, 400);
for (var x=-10, dx=0.1; x < 10 ; x+=dx) {
frame.append$I$D$D(0, x, Math.sin(x));
}
frame.setVisible$Z(true);
frame.setDefaultCloseOperation$I(3);
$I$(3).info$S("FirstPlotApp running.");
if ($I$(4).isJS) {
frame.setLocation$I$I(0, 0);
$I$(4).setAppClass$O(frame);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.v=$I$(1).VALUE_NULL;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
