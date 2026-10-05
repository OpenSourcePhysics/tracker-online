(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core");
/*i*/var C$=Clazz.newInterface(P$, "ElementTetrahedron", function(){
}, null, 'org.opensourcephysics.display3d.core.Element');
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementTetrahedron, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Element','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var element=obj;
if (Double.isNaN$D(element.getTruncationHeight$())) {
control.setValue$S$D("truncation height", -1.0);
} else {
control.setValue$S$D("truncation height", element.getTruncationHeight$());
}control.setValue$S$Z("closed top", element.isClosedTop$());
control.setValue$S$Z("closed bottom", element.isClosedBottom$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var element=obj;
element.setTruncationHeight$D(control.getDouble$S("truncation height"));
element.setClosedTop$Z(control.getBoolean$S("closed top"));
element.setClosedBottom$Z(control.getBoolean$S("closed bottom"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
