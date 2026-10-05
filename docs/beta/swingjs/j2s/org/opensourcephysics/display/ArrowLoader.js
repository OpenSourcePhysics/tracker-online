(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.Arrow']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrowLoader", null, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var arrow=obj;
control.setValue$S$D("x", arrow.x);
control.setValue$S$D("y", arrow.y);
control.setValue$S$D("a", arrow.a);
control.setValue$S$D("b", arrow.b);
control.setValue$S$D("head size", arrow.headSize);
control.setValue$S$O("color", arrow.color);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$D$D$D$D,[0, 0, 0, 0]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var arrow=obj;
arrow.x=control.getDouble$S("x");
arrow.y=control.getDouble$S("y");
arrow.a=control.getDouble$S("a");
arrow.b=control.getDouble$S("b");
arrow.headSize=control.getDouble$S("head size");
arrow.color=control.getObject$S("color");
return obj;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
