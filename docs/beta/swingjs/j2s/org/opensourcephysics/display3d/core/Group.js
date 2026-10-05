(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Group", function(){
}, null, ['org.opensourcephysics.display3d.core.Element', 'org.opensourcephysics.display.Data']);
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.Group, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Element','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var group=obj;
control.setValue$S$O("elements", group.getElements$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var group=obj;
var elements=control.getObject$S("elements");
if (elements != null ) {
group.removeAllElements$();
var it=elements.iterator$();
while (it.hasNext$()){
group.addElement$org_opensourcephysics_display3d_core_Element(it.next$());
}
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
