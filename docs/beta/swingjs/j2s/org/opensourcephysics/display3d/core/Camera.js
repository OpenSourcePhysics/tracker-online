(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Camera", function(){
});
C$.$classes$=[['Loader',1033]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.Camera, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var camera=obj;
control.setValue$S$I("projection mode", camera.getProjectionMode$());
control.setValue$S$D("x", camera.getX$());
control.setValue$S$D("y", camera.getY$());
control.setValue$S$D("z", camera.getZ$());
control.setValue$S$D("focus x", camera.getFocusX$());
control.setValue$S$D("focus y", camera.getFocusY$());
control.setValue$S$D("focus z", camera.getFocusZ$());
control.setValue$S$D("rotation", camera.getRotation$());
control.setValue$S$D("distance to screen", camera.getDistanceToScreen$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var camera=obj;
camera.setProjectionMode$I(control.getInt$S("projection mode"));
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
var z=control.getDouble$S("z");
camera.setXYZ$D$D$D(x, y, z);
x=control.getDouble$S("focus x");
y=control.getDouble$S("focus y");
z=control.getDouble$S("focus z");
camera.setFocusXYZ$D$D$D(x, y, z);
camera.setRotation$D(control.getDouble$S("rotation"));
camera.setDistanceToScreen$D(control.getDouble$S("distance to screen"));
return camera;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
