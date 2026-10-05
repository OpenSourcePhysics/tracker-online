(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.media.core.NumberField']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TCoordinateStringBuilder", null, 'org.opensourcephysics.display.axes.CoordinateStringBuilder', 'org.opensourcephysics.media.core.XYCoordinateStringBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xField','org.opensourcephysics.media.core.NumberField','+yField']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.xField=Clazz.new_($I$(1,1).c$$I,[0]);
this.yField=Clazz.new_($I$(1,1).c$$I,[0]);
}, 1);

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent',  function (panel, e) {
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=panel;
var pt=trackerPanel.getWorldMousePoint$();
return this.getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D(trackerPanel, pt.getX$(), pt.getY$());
}var x=panel.pixToX$I(e.getPoint$().x);
var y=panel.pixToY$I(e.getPoint$().y);
return this.getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D(null, x, y);
});

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D',  function (vidPanel, x, y) {
this.xField.setFormatFor$D(x);
var xStr=this.xField.format$D(x);
if (this.xField.getUnits$() != null ) xStr+=this.xField.getUnits$();
this.yField.setFormatFor$D(y);
var yStr=this.yField.format$D(y);
if (this.yField.getUnits$() != null ) yStr+=this.yField.getUnits$();
return this.xLabel + xStr + this.yLabel + yStr ;
});

Clazz.newMeth(C$, 'setUnitsAndPatterns$org_opensourcephysics_cabrillo_tracker_TTrack$S$S',  function (track, xVar, yVar) {
if (track == null  || track.tp == null  ) return;
this.xField.setUnits$S(track.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, xVar));
this.yField.setUnits$S(track.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, yVar));
this.xField.setFixedPattern$S(track.getVarFormatPattern$S(xVar));
this.yField.setFixedPattern$S(track.getVarFormatPattern$S(yVar));
});

Clazz.newMeth(C$, 'setCoordinateLabels$S$S',  function (xLabel, yLabel) {
this.xLabel=xLabel;
this.yLabel=yLabel;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
this.xField.refreshDecimalSeparators$Z(true);
this.yField.refreshDecimalSeparators$Z(true);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
