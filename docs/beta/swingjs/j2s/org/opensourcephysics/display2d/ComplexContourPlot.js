(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.display2d.ContourPlot','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexContourPlot", null, 'org.opensourcephysics.display2d.ComplexInterpolatedPlot');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showContours=true;
},1);

C$.$fields$=[['Z',['showContours'],'O',['contour','org.opensourcephysics.display2d.ContourPlot']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$org_opensourcephysics_display2d_GridData.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (griddata) {
;C$.superclazz.c$$org_opensourcephysics_display2d_GridData.apply(this,[griddata]);C$.$init$.apply(this);
this.contour=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display2d_GridData,[griddata]);
this.contour.setPaletteType$I(7);
this.contour.setShowColorLevels$Z(false);
this.contour.setGridLineColor$java_awt_Color($I$(2).lightGray);
this.contour.update$();
}, 1);

Clazz.newMeth(C$, 'getContour$',  function () {
return this.contour;
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
C$.superclazz.prototype.setAutoscaleZ$Z$D.apply(this, [isAutoscale, ceil]);
this.contour.setAutoscaleZ$Z$D$D(isAutoscale, floor, ceil);
});

Clazz.newMeth(C$, 'update$',  function () {
C$.superclazz.prototype.update$.apply(this, []);
if ((this.contour != null ) && this.showContours ) {
this.contour.update$();
}});

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (griddata) {
C$.superclazz.prototype.setGridData$org_opensourcephysics_display2d_GridData.apply(this, [griddata]);
C$.superclazz.prototype.setShowGridLines$Z.apply(this, [false]);
this.contour.setGridData$org_opensourcephysics_display2d_GridData(griddata);
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
C$.superclazz.prototype.setIndexes$IA.apply(this, [indexes]);
this.contour.setIndexes$IA(indexes);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.colorMap.showLegend$();
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (show) {
this.contour.setShowGridLines$Z(show);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
C$.superclazz.prototype.setFloorCeilColor$java_awt_Color$java_awt_Color.apply(this, [floorColor, ceilColor]);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (color) {
this.contour.setGridLineColor$java_awt_Color(color);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
if (this.showContours) {
this.contour.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
