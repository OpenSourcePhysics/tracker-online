(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.HashMap','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.FontSizer',['java.awt.geom.Line2D','.Double'],'org.opensourcephysics.cabrillo.tracker.LineFootprint','org.opensourcephysics.cabrillo.tracker.TapeMeasure',['org.opensourcephysics.cabrillo.tracker.Ruler','.Label'],'java.awt.geom.Line2D','java.awt.Stroke','java.util.Arrays','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.geom.AffineTransform','java.awt.RenderingHints','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WorldRuler", null, 'org.opensourcephysics.cabrillo.tracker.Ruler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hitLines=Clazz.new_($I$(1,1));
this.dropEndSize=12;
},1);

C$.$fields$=[['I',['dropEndSize'],'O',['hitLines','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TapeMeasure',  function (tape) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_InputTrack.apply(this,[tape]);C$.$init$.apply(this);
this.setLineSpacing$D(8.0);
}, 1);

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (trackerPanel, n) {
if (trackerPanel.isWorldPanel$()) return null;
this.refreshStrokes$();
this.format.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(2).getDecimalFormatSymbols$());
var pt0=this.track.getStep$I(n).getPoints$()[0];
var pt1=this.track.getStep$I(n).getPoints$()[1];
var length=pt0.distance$java_awt_geom_Point2D(pt1);
var tapeSin=pt0.sin$java_awt_geom_Point2D_Double(pt1);
var tapeCos=pt0.cos$java_awt_geom_Point2D_Double(pt1);
var screen0=pt0.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var screen1=pt1.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var screenLength=screen0.distance$java_awt_geom_Point2D(screen1);
var world0=pt0.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var world1=pt1.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var worldLength=world0.distance$java_awt_geom_Point2D(world1);
var zoomFactor=trackerPanel.getXPixPerUnit$();
var delta=this.rulerLineSpacing / (zoomFactor * this.track.tp.getCoords$().getScaleX$I(n));
var power=1;
while (power * 10 < delta )power*=10;

while (power > delta )power/=10;

var significand=delta / power;
var spacing=significand <= 2  ? 2 : significand <= 5  ? 5 : 10;
delta=spacing * power;
var majorSpacing=spacing == 2 ? 25 : 10;
var halfSpacing=spacing == 5 ? 2 : 5;
for (var i=0; i < this.lines.size$(); i++) {
this.lines.get$I(i).clear$();
}
this.labelMarks.clear$();
var inset=this.rulerSize > 0  ? this.insetPerLevel : -this.insetPerLevel;
var gap=this.rulerSize > 0  ? this.lineGap : -this.lineGap;
var formatMinValue=majorSpacing * delta;
var coordsCos=this.track.tp.getCoords$().getCosine$I(n);
var coordsSin=this.track.tp.getCoords$().getSine$I(n);
var prevLabelIndex=0;
var factor=$I$(3).getFactor$();
var lineCount=Long.$ival(Math.round$D(worldLength / delta)) + 1;
for (var i=0; i < lineCount; i++) {
var level=i % majorSpacing == 0 ? 0 : i % halfSpacing == 0 ? 1 : 2;
if (lineCount - 1 < majorSpacing && level > 0 ) {
--level;
formatMinValue=halfSpacing * delta;
}var drawLines=this.lines.get$I(level);
var lineLength=this.rulerSize - inset * level;
var x=world0.getX$() + i * delta * coordsCos ;
var y=world0.getY$() - i * delta * coordsSin ;
var line=Clazz.new_($I$(4,1));
drawLines.add$O(line);
this.utilityPoint.setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(x, y, trackerPanel);
var base=this.utilityPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var isLineFootprint=this.track.getFootprint$().getClass$() === Clazz.getClass($I$(5)) ;
var drop=this.rulerSize > 0  ? this.dropEndSize : -this.dropEndSize;
var bottom=i == 0 && isLineFootprint  ? base.y + drop : base.y - gap;
line.setLine$D$D$D$D(base.x, bottom, base.x, base.y - gap - lineLength );
if (level == 0) {
var screenDelta=(i - prevLabelIndex) * delta * screenLength  / worldLength;
if (i == 0 || screenDelta > factor * 50  ) {
var s=this.getFormattedValue$D$D(i * delta, formatMinValue);
s+=trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this.track, $I$(6).dataVariables[1]);
var offset=this.rulerSize > 0  ? gap + lineLength + factor * this.labelGap  : gap + lineLength - factor * this.labelGap;
var label=Clazz.new_($I$(7,1).c$$S$D$D,[this, null, s, base.x, base.y - offset]);
label.rotation=tapeCos < 0  ? Double.valueOf$D(3.141592653589793) : null;
this.labelMarks.add$O(label);
prevLabelIndex=i;
}}if (i == lineCount - 1 && isLineFootprint ) {
line=Clazz.new_($I$(4,1));
this.lines.get$I(0).add$O(line);
x=world0.getX$() + worldLength * coordsCos;
y=world0.getY$() - worldLength * coordsSin;
this.utilityPoint.setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(x, y, trackerPanel);
base=this.utilityPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
line.setLine$D$D$D$D(base.x, base.y + drop, base.x, base.y);
}}
var hitLine=p$1.getHitLine$I.apply(this, [n]);
var hitDistScreen=this.rulerSize >= 0  ? this.lineGap + this.rulerSize : this.rulerSize - this.lineGap;
this.utilityPoint.setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(world0.getX$(), world0.getY$(), trackerPanel);
var base=this.utilityPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
hitLine.setLine$D$D$D$D(base.x, base.y - hitDistScreen, base.x + screenLength, base.y - hitDistScreen);
var hitDrawShape=hitLine.clone$();
var p=pt0.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var theta=pt0.angle$java_awt_geom_Point2D_Double(pt1);
this.transform.setToRotation$D$D$D(theta, p.x, p.y);
var hitDist=hitDistScreen * length / screenLength;
this.utilityPoint.setLocation$D$D(pt0.x - hitDist * tapeSin, pt0.y - hitDist * tapeCos);
p.setLocation$java_awt_Point(this.utilityPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
this.utilityPoint.setLocation$D$D(pt1.x - hitDist * tapeSin, pt1.y - hitDist * tapeCos);
hitLine.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p, this.utilityPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
for (var i=0; i < this.lines.size$(); i++) {
var drawLines=this.lines.get$I(i);
var lineArray=drawLines.toArray$OA(Clazz.array($I$(8), [drawLines.size$()]));
var lineStrokes=Clazz.array($I$(9), [lineArray.length]);
$I$(10).fill$OA$O(lineStrokes, this.strokes[i]);
this.multiShapes[i]=Clazz.new_($I$(11,1).c$$java_awt_ShapeA,[lineArray]).andStroke$java_awt_StrokeA(lineStrokes).transform$java_awt_geom_AffineTransform(this.transform);
}
var hitMultiShape=Clazz.new_([Clazz.array($I$(12), -1, [hitDrawShape])],$I$(11,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(9), -1, [this.dashedStroke])).transform$java_awt_geom_AffineTransform(this.transform);
var myShapes=$I$(10).copyOf$OA$I(this.multiShapes, this.multiShapes.length);
var myTransform=Clazz.new_($I$(13,1).c$$java_awt_geom_AffineTransform,[this.transform]);
var myLabels=this.labelMarks.toArray$OA(Clazz.array($I$(7), [this.labelMarks.size$()]));
return ((P$.WorldRuler$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldRuler$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var g2=g.create$();
if ($I$(2).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(14).KEY_ANTIALIASING, $I$(14).VALUE_ANTIALIAS_ON);
for (var i=0; i < this.$finals$.myShapes.length; i++) {
g2.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.WorldRuler'].colors[i]);
this.$finals$.myShapes[i].draw$java_awt_Graphics2D(g2);
}
g2.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.WorldRuler'].colors[0]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.WorldRuler'].hitShapeVisible) {
this.$finals$.hitMultiShape.draw$java_awt_Graphics2D(g2);
}var t=g2.getTransform$();
t.concatenate$java_awt_geom_AffineTransform(this.$finals$.myTransform);
g2.setTransform$java_awt_geom_AffineTransform(t);
for (var i=0; i < this.$finals$.myLabels.length; i++) {
this.$finals$.myLabels[i].draw$java_awt_Graphics2D(g2);
}
g2.dispose$();
});
})()
), Clazz.new_(P$.WorldRuler$1.$init$,[this, {myShapes:myShapes,myLabels:myLabels,myTransform:myTransform,hitMultiShape:hitMultiShape}]));
});

Clazz.newMeth(C$, 'getHitLine$I',  function (frameNumber) {
var hitLine=this.hitLines.get$O(Integer.valueOf$I(frameNumber));
if (hitLine == null ) {
hitLine=Clazz.new_($I$(4,1));
this.hitLines.put$O$O(Integer.valueOf$I(frameNumber), hitLine);
}return hitLine;
}, p$1);

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_Rectangle',  function (trackerPanel, hitRect) {
var hit=null;
var n=trackerPanel.getFrameNumber$();
if (p$1.getHitLine$I.apply(this, [n]).intersects$java_awt_geom_Rectangle2D(hitRect)) {
hit=this.getHandle$();
}return hit;
});

Clazz.newMeth(C$, 'setHandleXY$D$D',  function (x, y) {
var handle=this.getHandle$();
handle.setLocation$D$D(x, y);
if (this.track.tp != null  && this.track.tp.getSelectedPoint$() === handle  ) {
var n=this.track.tp.getFrameNumber$();
var p=Clazz.new_([handle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this.track.tp)],$I$(15,1).c$$java_awt_Point);
var dist=this.getScreenDistanceToBase$java_awt_Point(p);
var isLeft=this.isLeft$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(this.track.getStep$I(n).getPoints$()[0], this.track.getStep$I(this.track.tp.getFrameNumber$()).getPoints$()[1], handle);
this.setRulerSize$D(isLeft ? this.lineGap - dist : dist - this.lineGap);
var end=p$1.getHitLine$I.apply(this, [n]).getP1$();
dist=p.distance$java_awt_geom_Point2D(end);
if (this.previousDistFromLineEnd == null ) {
this.previousDistFromLineEnd=Double.valueOf$D(dist);
this.previousLineSpacing=this.rulerLineSpacing;
this.previousAngle=Math.atan2(p.y - end.getY$(), p.x - end.getX$());
} else {
var delta=dist - (this.previousDistFromLineEnd).$c();
var angle=Math.atan2(p.y - end.getY$(), p.x - end.getX$());
if (Math.abs(angle - this.previousAngle) > 1 ) delta=-delta;
this.setLineSpacing$D(this.previousLineSpacing + ((delta / 3)|0));
}this.track.repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
