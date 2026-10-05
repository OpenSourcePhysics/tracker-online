(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "ElementTrail", function(){
}, null, ['org.opensourcephysics.display3d.core.Element', 'org.opensourcephysics.display.Data']);
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementTrail, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Element','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var element=obj;
control.setValue$S$I("maximum", element.getMaximumPoints$());
control.setValue$S$Z("connected", element.isConnected$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var element=obj;
element.setMaximumPoints$I(control.getInt$S("maximum"));
element.setConnected$Z(control.getBoolean$S("connected"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
