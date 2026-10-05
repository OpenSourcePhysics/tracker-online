(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PolarCoordinateStringBuilder", null, 'org.opensourcephysics.display.axes.CoordinateStringBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rLabel="r=";
this.phiLabel=" phi=";
this.sin=0;
this.cos=1;
},1);

C$.$fields$=[['D',['sin','cos'],'S',['rLabel','phiLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$S.apply(this, ["r=", "  phi="]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$D',  function (rLabel, phiLabel, phiZero) {
C$.c$$S$S.apply(this, [rLabel, phiLabel]);
this.sin=-Math.sin(phiZero);
this.cos=Math.cos(phiZero);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (rLabel, phiLabel) {
Clazz.super_(C$, this);
this.rLabel=rLabel;
this.phiLabel=phiLabel;
}, 1);

Clazz.newMeth(C$, 'setCoordinateLabels$S$S',  function (rLabel, phiLabel) {
this.rLabel=rLabel;
this.phiLabel=phiLabel;
});

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent',  function (panel, e) {
var x=panel.pixToX$I(e.getPoint$().x);
var y=panel.pixToY$I(e.getPoint$().y);
if ((panel.isInteractive) && (panel).getCurrentDraggable$() != null  ) {
x=(panel).getCurrentDraggable$().getX$();
y=(panel).getCurrentDraggable$().getY$();
}var r=Math.sqrt(x * x + y * y);
var msg;
if ((r > 100 ) || (r < 0.01 ) ) {
msg=this.rLabel + this.scientificFormat.format$D(r);
} else {
msg=this.rLabel + this.decimalFormat.format$D(r);
}msg+=this.phiLabel + this.decimalFormat.format$D(180 * Math.atan2(x * this.sin + y * this.cos, x * this.cos - y * this.sin) / 3.141592653589793);
return msg;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
