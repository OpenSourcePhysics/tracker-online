(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CartesianCoordinateStringBuilder", null, 'org.opensourcephysics.display.axes.CoordinateStringBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$S.apply(this, ["x=", "  y="]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (xLabel, yLabel) {
Clazz.super_(C$, this);
this.xLabel=xLabel;
this.yLabel=yLabel;
}, 1);

Clazz.newMeth(C$, 'setCoordinateLabels$S$S',  function (xLabel, yLabel) {
this.xLabel=xLabel;
this.yLabel=yLabel;
});

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent',  function (panel, e) {
var x=panel.pixToX$I(e.getPoint$().x);
var y=panel.pixToY$I(e.getPoint$().y);
if ((panel.isInteractive) && (panel).getCurrentDraggable$() != null  ) {
x=(panel).getCurrentDraggable$().getX$();
y=(panel).getCurrentDraggable$().getY$();
}var msg="";
if ((Math.abs(x) > 100 ) || (Math.abs(x) < 0.01 ) || (Math.abs(y) > 100 ) || (Math.abs(y) < 0.01 )  ) {
this.scientificFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(1).getDecimalFormatSymbols$());
if (this.xLabel != null ) {
msg=this.xLabel + this.scientificFormat.format$D(x);
}if (this.yLabel != null ) {
msg+=this.yLabel + this.scientificFormat.format$D(y);
}} else {
this.decimalFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(1).getDecimalFormatSymbols$());
if (this.xLabel != null ) {
msg=this.xLabel + this.decimalFormat.format$D(x);
}if (this.yLabel != null ) {
msg+=this.yLabel + this.decimalFormat.format$D(y);
}}return msg;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
