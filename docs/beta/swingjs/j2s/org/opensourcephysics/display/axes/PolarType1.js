(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.display.axes.CoordinateStringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PolarType1", null, 'org.opensourcephysics.display.axes.AbstractPolarAxis', ['org.opensourcephysics.display.axes.PolarAxes', 'org.opensourcephysics.display.Dimensioned']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel$S$S$D',  function (panel, rLabel, phiLabel, phiOffset) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[panel]);C$.$init$.apply(this);
this.defaultLeftGutter=25;
this.defaultTopGutter=25;
this.defaultRightGutter=25;
this.defaultBottomGutter=25;
this.titleLine.setJustification$I(0);
this.titleLine.setFont$java_awt_Font(this.titleFont);
if (panel == null ) {
return;
}panel.setPreferredGutters$I$I$I$I(this.defaultLeftGutter, this.defaultTopGutter, this.defaultRightGutter, this.defaultBottomGutter);
panel.setAxes$org_opensourcephysics_display_axes_DrawableAxes(this);
panel.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder($I$(1).createPolar$S$S$D(rLabel, phiLabel, phiOffset));
panel.setClipAtGutter$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
C$.c$$org_opensourcephysics_display_PlottingPanel$S$S$D.apply(this, [panel, "r=", " phi=", 0]);
}, 1);

Clazz.newMeth(C$, 'getInterior$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var max=Math.abs(panel.getPreferredXMax$());
max=Math.max(max, Math.abs(panel.getPreferredXMin$()));
max=Math.max(max, Math.abs(panel.getPreferredYMax$()));
max=Math.max(max, Math.abs(panel.getPreferredYMin$()));
panel.setPreferredMinMax$D$D$D$D$Z(-max, max, -max, max, false);
return null;
});

Clazz.newMeth(C$, 'setXLabel$S$S',  function (s, font_name) {
});

Clazz.newMeth(C$, 'setYLabel$S$S',  function (s, font_name) {
});

Clazz.newMeth(C$, 'getXLabel$',  function () {
return "";
});

Clazz.newMeth(C$, 'getYLabel$',  function () {
return "";
});

Clazz.newMeth(C$, 'setXLog$Z',  function (isLog) {
});

Clazz.newMeth(C$, 'setYLog$Z',  function (isLog) {
});

Clazz.newMeth(C$, 'setShowMajorXGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMinorXGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMajorYGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMinorYGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var rmax=Math.abs(panel.getPreferredXMax$());
var dr=this.drawRings$D$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(rmax, panel, g);
this.drawSpokes$D$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(rmax, panel, g);
this.drawRAxis$D$D$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(dr, rmax, panel, g);
this.titleLine.setX$D((panel.getXMax$() + panel.getXMin$()) / 2);
if (panel.getTopGutter$() > 20) {
this.titleLine.setY$D(panel.getYMax$() + 5 / panel.getYPixPerUnit$());
} else {
this.titleLine.setY$D(panel.getYMax$() - 25 / panel.getYPixPerUnit$());
}this.titleLine.setColor$java_awt_Color(panel.getForeground$());
this.titleLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
