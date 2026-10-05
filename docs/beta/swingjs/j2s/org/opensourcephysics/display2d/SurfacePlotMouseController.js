(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SurfacePlotMouseController", null, null, ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['surfacePlot','java.lang.Object','drawingPanel','org.opensourcephysics.display.DrawingPanel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel$O',  function (drawingPanel, surfacePlot) {
;C$.$init$.apply(this);
this.surfacePlot=surfacePlot;
this.drawingPanel=drawingPanel;
}, 1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (Clazz.instanceOf(this.surfacePlot, "org.opensourcephysics.display2d.SurfacePlot")) {
(this.surfacePlot).mouseReleased$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel(e, this.drawingPanel);
} else if (Clazz.instanceOf(this.surfacePlot, "org.opensourcephysics.display2d.ComplexSurfacePlot")) {
(this.surfacePlot).mouseReleased$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel(e, this.drawingPanel);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (Clazz.instanceOf(this.surfacePlot, "org.opensourcephysics.display2d.SurfacePlot")) {
(this.surfacePlot).mousePressed$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel(e, this.drawingPanel);
} else if (Clazz.instanceOf(this.surfacePlot, "org.opensourcephysics.display2d.ComplexSurfacePlot")) {
(this.surfacePlot).mousePressed$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel(e, this.drawingPanel);
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if (Clazz.instanceOf(this.surfacePlot, "org.opensourcephysics.display2d.SurfacePlot")) {
(this.surfacePlot).mouseDragged$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel(e, this.drawingPanel);
} else if (Clazz.instanceOf(this.surfacePlot, "org.opensourcephysics.display2d.ComplexSurfacePlot")) {
(this.surfacePlot).mouseDragged$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel(e, this.drawingPanel);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
