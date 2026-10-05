(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Style", function(){
});
C$.$classes$=[['Loader',1033]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.Style, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var style=obj;
control.setValue$S$O("line color", style.getLineColor$());
control.setValue$S$D("line width", style.getLineWidth$());
control.setValue$S$O("fill color", style.getFillColor$());
control.setValue$S$O("resolution", style.getResolution$());
control.setValue$S$Z("drawing fill", style.isDrawingFill$());
control.setValue$S$Z("drawing lines", style.isDrawingLines$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var style=obj;
style.setLineColor$java_awt_Color(control.getObject$S("line color"));
style.setLineWidth$F(control.getDouble$S("line width"));
style.setFillColor$java_awt_Color(control.getObject$S("fill color"));
style.setResolution$org_opensourcephysics_display3d_core_Resolution(control.getObject$S("resolution"));
style.setDrawingFill$Z(control.getBoolean$S("drawing fill"));
style.setDrawingLines$Z(control.getBoolean$S("drawing lines"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
