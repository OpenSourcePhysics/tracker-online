(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VidCartesianCoordinateStringBuilder", null, 'org.opensourcephysics.display.axes.CartesianCoordinateStringBuilder', 'org.opensourcephysics.media.core.XYCoordinateStringBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (xLabel, yLabel) {
;C$.superclazz.c$$S$S.apply(this,[xLabel, yLabel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent',  function (panel, e) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return C$.superclazz.prototype.getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent.apply(this, [panel, e]);
}var vidPanel=panel;
var pt=vidPanel.getWorldMousePoint$();
return this.getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D(vidPanel, pt.getX$(), pt.getY$());
});

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D',  function (panel, x, y) {
var msg;
if ((Math.abs(x) > 100 ) || (Math.abs(x) < 0.01 ) || (Math.abs(y) > 100 ) || (Math.abs(y) < 0.01 )  ) {
this.scientificFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(1).getDecimalFormatSymbols$());
msg=this.xLabel + this.scientificFormat.format$D(x) + this.yLabel + this.scientificFormat.format$D(y) ;
} else {
this.decimalFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(1).getDecimalFormatSymbols$());
msg=this.xLabel + this.decimalFormat.format$D(x) + this.yLabel + this.decimalFormat.format$D(y) ;
}return msg;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
