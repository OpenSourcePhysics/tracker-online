(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[[0,'java.util.Collection']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DrawingPanel3D", function(){
}, null, 'org.opensourcephysics.display3d.core.interaction.InteractionSource');
C$.$classes$=[['Loader',1033]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingPanel3D, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
control.setValue$S$D("preferred x min", panel.getPreferredMinX$());
control.setValue$S$D("preferred x max", panel.getPreferredMaxX$());
control.setValue$S$D("preferred y min", panel.getPreferredMinY$());
control.setValue$S$D("preferred y max", panel.getPreferredMaxY$());
control.setValue$S$D("preferred z min", panel.getPreferredMinZ$());
control.setValue$S$D("preferred z max", panel.getPreferredMaxZ$());
control.setValue$S$O("visualization hints", panel.getVisualizationHints$());
control.setValue$S$O("camera", panel.getCamera$());
control.setValue$S$O("elements", panel.getElements$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
var minX=control.getDouble$S("preferred x min");
var maxX=control.getDouble$S("preferred x max");
var minY=control.getDouble$S("preferred y min");
var maxY=control.getDouble$S("preferred y max");
var minZ=control.getDouble$S("preferred z min");
var maxZ=control.getDouble$S("preferred z max");
panel.setPreferredMinMax$D$D$D$D$D$D(minX, maxX, minY, maxY, minZ, maxZ);
var elements=Clazz.getClass($I$(1),['add$O','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$OA','toArray$java_util_function_IntFunction']).cast$O(control.getObject$S("elements"));
if (elements != null ) {
panel.removeAllElements$();
var it=elements.iterator$();
while (it.hasNext$()){
panel.addElement$org_opensourcephysics_display3d_core_Element(it.next$());
}
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
