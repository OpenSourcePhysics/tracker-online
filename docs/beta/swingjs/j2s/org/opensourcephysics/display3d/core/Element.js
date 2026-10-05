(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Element", function(){
}, null, 'org.opensourcephysics.display3d.core.interaction.InteractionSource');
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.Element, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var element=obj;
if (element.getName$().length$() > 0) {
control.setValue$S$O("name", element.getName$());
}control.setValue$S$D("x", element.getX$());
control.setValue$S$D("y", element.getY$());
control.setValue$S$D("z", element.getZ$());
control.setValue$S$D("x size", element.getSizeX$());
control.setValue$S$D("y size", element.getSizeY$());
control.setValue$S$D("z size", element.getSizeZ$());
control.setValue$S$Z("visible", element.isVisible$());
control.setValue$S$O("style", element.getStyle$());
control.setValue$S$O("transformation", element.getTransformation$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var element=obj;
var name=control.getString$S("name");
if (name != null ) {
element.setName$S(name);
}element.setXYZ$D$D$D(control.getDouble$S("x"), control.getDouble$S("y"), control.getDouble$S("z"));
element.setSizeXYZ$D$D$D(control.getDouble$S("x size"), control.getDouble$S("y size"), control.getDouble$S("z size"));
element.setVisible$Z(control.getBoolean$S("visible"));
element.setTransformation$org_opensourcephysics_numerics_Transformation(control.getObject$S("transformation"));
element.loadUnmutableObjects$org_opensourcephysics_controls_XMLControl(control);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
