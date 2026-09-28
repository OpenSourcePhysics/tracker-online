(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display3d.simple3d.DrawingPanel3D']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Display3DFrame", null, 'org.opensourcephysics.display3d.simple3d.DrawingFrame3D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$S$org_opensourcephysics_display3d_simple3d_DrawingPanel3D.apply(this,[title, Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.setAnimated$Z(true);
}, 1);

Clazz.newMeth(C$, 'addInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener',  function (listener) {
this.drawingPanel.addInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener(listener);
});

Clazz.newMeth(C$, 'enableInteraction$Z',  function (enable) {
this.drawingPanel.getInteractionTarget$I(0).setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'setPreferredMinMax$D$D$D$D$D$D',  function (xmin, xmax, ymin, ymax, zmin, zmax) {
this.drawingPanel.setPreferredMinMax$D$D$D$D$D$D(xmin, xmax, ymin, ymax, zmin, zmax);
});

Clazz.newMeth(C$, 'getCamera$',  function () {
return this.drawingPanel.getCamera$();
});

Clazz.newMeth(C$, 'addElement$org_opensourcephysics_display3d_core_Element',  function (element) {
this.drawingPanel.addElement$org_opensourcephysics_display3d_core_Element(element);
});

Clazz.newMeth(C$, 'setSquareAspect$Z',  function (square) {
this.drawingPanel.setSquareAspect$Z(square);
});

Clazz.newMeth(C$, 'setAllowQuickRedraw$Z',  function (allow) {
this.drawingPanel.getVisualizationHints$().setAllowQuickRedraw$Z(allow);
});

Clazz.newMeth(C$, 'setIgnoreRepaint$Z',  function (ignoreRepaint) {
C$.superclazz.prototype.setIgnoreRepaint$Z.apply(this, [ignoreRepaint]);
(this.drawingPanel).setIgnoreRepaint$Z(ignoreRepaint);
});

Clazz.newMeth(C$, 'setDecorationType$I',  function (value) {
this.drawingPanel.getVisualizationHints$().setDecorationType$I(value);
});

Clazz.newMeth(C$, 'setAzimuth$D',  function (theta) {
this.drawingPanel.getCamera$().setAzimuth$D(theta);
});

Clazz.newMeth(C$, 'setAltitude$D',  function (phi) {
this.drawingPanel.getCamera$().setAltitude$D(phi);
});

Clazz.newMeth(C$, 'setProjectionMode$I',  function (mode) {
this.drawingPanel.getCamera$().setProjectionMode$I(mode);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
