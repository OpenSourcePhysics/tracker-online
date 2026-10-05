(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core");
/*i*/var C$=Clazz.newInterface(P$, "ElementEllipsoid", function(){
}, null, 'org.opensourcephysics.display3d.core.Element');
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementEllipsoid, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Element','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var element=obj;
control.setValue$S$Z("closed top", element.isClosedTop$());
control.setValue$S$Z("closed bottom", element.isClosedBottom$());
control.setValue$S$Z("closed left", element.isClosedLeft$());
control.setValue$S$Z("closed right", element.isClosedRight$());
control.setValue$S$I("minimum u angle", element.getMinimumAngleU$());
control.setValue$S$I("maximum u angle", element.getMaximumAngleU$());
control.setValue$S$I("minimum v angle", element.getMinimumAngleV$());
control.setValue$S$I("maximum v angle", element.getMaximumAngleV$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var element=obj;
element.setClosedTop$Z(control.getBoolean$S("closed top"));
element.setClosedBottom$Z(control.getBoolean$S("closed bottom"));
element.setClosedLeft$Z(control.getBoolean$S("closed left"));
element.setClosedRight$Z(control.getBoolean$S("closed right"));
element.setMinimumAngleU$I(control.getInt$S("minimum u angle"));
element.setMaximumAngleU$I(control.getInt$S("maximum u angle"));
element.setMinimumAngleV$I(control.getInt$S("minimum v angle"));
element.setMaximumAngleV$I(control.getInt$S("maximum v angle"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
