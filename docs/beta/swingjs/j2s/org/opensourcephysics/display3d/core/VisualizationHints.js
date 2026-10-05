(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "VisualizationHints", function(){
});
C$.$classes$=[['Loader',1033]];

C$.$fields$=[[]
,['I',['DECORATION_NONE','DECORATION_AXES','DECORATION_CUBE','CURSOR_NONE','CURSOR_XYZ','CURSOR_CUBE','CURSOR_CROSSHAIR']]]

C$.$static$=function(){C$.$static$=0;
C$.DECORATION_NONE=0;
C$.DECORATION_AXES=1;
C$.DECORATION_CUBE=2;
C$.CURSOR_NONE=0;
C$.CURSOR_XYZ=1;
C$.CURSOR_CUBE=2;
C$.CURSOR_CROSSHAIR=3;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VisualizationHints, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var hints=obj;
control.setValue$S$I("decoration type", hints.getDecorationType$());
control.setValue$S$I("cursor type", hints.getCursorType$());
control.setValue$S$Z("remove hidden lines", hints.isRemoveHiddenLines$());
control.setValue$S$Z("allow quick redraw", hints.isAllowQuickRedraw$());
control.setValue$S$Z("use color depth", hints.isUseColorDepth$());
control.setValue$S$I("show coordinates at", hints.getShowCoordinates$());
control.setValue$S$O("x format", hints.getXFormat$());
control.setValue$S$O("y format", hints.getYFormat$());
control.setValue$S$O("z format", hints.getZFormat$());
control.setValue$S$O("axes labels", hints.getAxesLabels$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var hints=obj;
hints.setDecorationType$I(control.getInt$S("decoration type"));
hints.setCursorType$I(control.getInt$S("cursor type"));
hints.setRemoveHiddenLines$Z(control.getBoolean$S("remove hidden lines"));
hints.setAllowQuickRedraw$Z(control.getBoolean$S("allow quick redraw"));
hints.setUseColorDepth$Z(control.getBoolean$S("use color depth"));
hints.setShowCoordinates$I(control.getInt$S("show coordinates at"));
hints.setXFormat$S(control.getString$S("x format"));
hints.setYFormat$S(control.getString$S("y format"));
hints.setZFormat$S(control.getString$S("z format"));
hints.setAxesLabels$SA(control.getObject$S("axes labels"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
