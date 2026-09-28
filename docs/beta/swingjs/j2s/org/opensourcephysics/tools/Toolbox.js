(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.HashMap','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Toolbox");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['tools','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addTool$S$org_opensourcephysics_tools_Tool',  function (name, tool) {
if ($I$(2).isJS) {
return;
}if (C$.tools.get$O(name) == null ) {
C$.tools.put$O$O(name, tool);
$I$(3).fine$S("Added to toolbox: " + name);
}}, 1);

Clazz.newMeth(C$, 'getTool$S',  function (name) {
if (C$.tools.containsKey$O(name)) {
var tool=C$.tools.get$O(name);
$I$(3).fine$S("Found local tool: " + name);
return tool;
}return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.tools=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
