(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Color','java.util.ArrayList','org.opensourcephysics.media.core.TPoint','java.awt.geom.Point2D','java.awt.BasicStroke',['java.awt.geom.Line2D','.Double'],'java.awt.geom.Line2D','java.awt.Stroke','java.util.Arrays','org.opensourcephysics.cabrillo.tracker.MultiShape','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WorldGrid", null, null, 'org.opensourcephysics.media.core.Trackable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dashedLines=Clazz.new_($I$(2,1));
this.dottedLines=Clazz.new_($I$(2,1));
this.viewCorners=Clazz.array($I$(3), -1, [Clazz.new_($I$(3,1)), Clazz.new_($I$(3,1)), Clazz.new_($I$(3,1)), Clazz.new_($I$(3,1))]);
this.worldCorners=Clazz.array($I$(4), [4]);
this.lineEnds=Clazz.array($I$(3), -1, [Clazz.new_($I$(3,1)), Clazz.new_($I$(3,1))]);
this.minMaxWorldValues=Clazz.array(Double.TYPE, [4]);
this.minMaxIndices=Clazz.array(Integer.TYPE, [4]);
this.showMajorX=true;
this.showMinorX=true;
this.showMajorY=true;
this.showMinorY=true;
this.alpha=C$.defaultAlpha;
this.lineColor=C$.defaultColor;
},1);

C$.$fields$=[['Z',['showMajorX','showMinorX','showMajorY','showMinorY','visible'],'I',['alpha'],'O',['dashedLines','java.util.ArrayList','+dottedLines','viewCorners','org.opensourcephysics.media.core.TPoint[]','worldCorners','java.awt.geom.Point2D[]','lineEnds','org.opensourcephysics.media.core.TPoint[]','minMaxWorldValues','double[]','minMaxIndices','int[]','lineColor','java.awt.Color']]
,['I',['defaultAlpha'],'O',['DASHED_LINE','float[]','+DOTTED_LINE','dashed','java.awt.Stroke','+dotted','defaultColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
C$.dashed=Clazz.new_($I$(5,1).c$$F$I$I$F$FA$F,[2, 0, 0, 8, C$.DASHED_LINE, 0]);
C$.dotted=Clazz.new_($I$(5,1).c$$F$I$I$F$FA$F,[2, 0, 0, 8, C$.DOTTED_LINE, 0]);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || (!this.showMajorX && !this.showMajorY ) ) return;
var g2=g;
var trackerPanel=panel;
this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).draw$java_awt_Graphics2D$Z(g2, false);
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var n=trackerPanel.getFrameNumber$();
var xOrigin=trackerPanel.getCoords$().getOriginX$I(n);
var yOrigin=trackerPanel.getCoords$().getOriginY$I(n);
var xWorldOrigin=trackerPanel.getCoords$().imageToWorldX$I$D$D(n, xOrigin, yOrigin);
var yWorldOrigin=trackerPanel.getCoords$().imageToWorldY$I$D$D(n, xOrigin, yOrigin);
var rect=trackerPanel.getVisibleRect$();
for (var i=0; i < 4; i++) {
switch (i) {
case 0:
this.viewCorners[i].setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(rect.x, rect.y, trackerPanel);
break;
case 1:
this.viewCorners[i].setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(rect.x + rect.width, rect.y, trackerPanel);
break;
case 2:
this.viewCorners[i].setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(rect.x, rect.y + rect.height, trackerPanel);
break;
default:
this.viewCorners[i].setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(rect.x + rect.width, rect.y + rect.height, trackerPanel);
}
this.worldCorners[i]=this.viewCorners[i].getWorldPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (i == 0) {
this.minMaxWorldValues[0]=this.minMaxWorldValues[1]=this.worldCorners[i].getX$();
this.minMaxWorldValues[2]=this.minMaxWorldValues[3]=this.worldCorners[i].getY$();
} else {
this.minMaxWorldValues[0]=Math.min(this.minMaxWorldValues[0], this.worldCorners[i].getX$());
this.minMaxWorldValues[1]=Math.max(this.minMaxWorldValues[1], this.worldCorners[i].getX$());
this.minMaxWorldValues[2]=Math.min(this.minMaxWorldValues[2], this.worldCorners[i].getY$());
this.minMaxWorldValues[3]=Math.max(this.minMaxWorldValues[3], this.worldCorners[i].getY$());
}}
var lineCount=Math.min(60, (rect.width/25|0));
var delta=(this.minMaxWorldValues[1] - this.minMaxWorldValues[0]) / lineCount;
var pow=1;
while (pow * 10 < delta )pow*=10;

while (pow > delta )pow/=10;

var significand=delta / pow;
var minorSpacing=10;
var majorSpacing=100;
if (significand < 2 ) {
minorSpacing=2;
majorSpacing=10;
} else if (significand < 5 ) {
minorSpacing=5;
majorSpacing=10;
}delta=minorSpacing * pow;
for (var i=0; i < 4; i++) {
this.minMaxIndices[i]=((this.minMaxWorldValues[i] / delta)|0);
}
this.dashedLines.clear$();
this.dottedLines.clear$();
if (this.showMajorX) {
for (var i=this.minMaxIndices[0] - 1; i < this.minMaxIndices[1] + 1; i++) {
var isMajor=(i * minorSpacing) % majorSpacing == 0;
if (!isMajor && !this.showMinorX ) continue;
var lines=isMajor ? this.dottedLines : this.dashedLines;
var x=i * delta;
var line=Clazz.new_($I$(6,1));
lines.add$O(line);
this.lineEnds[0].setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(x, yWorldOrigin, trackerPanel);
this.lineEnds[1].setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(x, this.minMaxWorldValues[3], trackerPanel);
line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(this.lineEnds[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel), this.lineEnds[1].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
line=Clazz.new_($I$(6,1));
lines.add$O(line);
this.lineEnds[1].setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(x, this.minMaxWorldValues[2], trackerPanel);
line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(this.lineEnds[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel), this.lineEnds[1].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
}
}if (this.showMajorY) {
for (var i=this.minMaxIndices[2] - 1; i < this.minMaxIndices[3] + 1; i++) {
var isMajor=(i * minorSpacing) % majorSpacing == 0;
if (!isMajor && !this.showMinorY ) continue;
var lines=isMajor ? this.dottedLines : this.dashedLines;
var y=i * delta;
var line=Clazz.new_($I$(6,1));
lines.add$O(line);
this.lineEnds[0].setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(xWorldOrigin, y, trackerPanel);
this.lineEnds[1].setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(this.minMaxWorldValues[0], y, trackerPanel);
line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(this.lineEnds[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel), this.lineEnds[1].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
line=Clazz.new_($I$(6,1));
lines.add$O(line);
this.lineEnds[1].setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel(this.minMaxWorldValues[1], y, trackerPanel);
line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(this.lineEnds[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel), this.lineEnds[1].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
}
}var dashLines=this.dashedLines.toArray$OA(Clazz.array($I$(7), [this.dashedLines.size$()]));
var dashStrokes=Clazz.array($I$(8), [dashLines.length]);
$I$(9).fill$OA$O(dashStrokes, C$.dashed);
var dashMultiShape=Clazz.new_($I$(10,1).c$$java_awt_ShapeA,[dashLines]).andStroke$java_awt_StrokeA(dashStrokes);
var dotLines=this.dottedLines.toArray$OA(Clazz.array($I$(7), [this.dottedLines.size$()]));
var dotStrokes=Clazz.array($I$(8), [dotLines.length]);
$I$(9).fill$OA$O(dotStrokes, C$.dotted);
var dotMultiShape=Clazz.new_($I$(10,1).c$$java_awt_ShapeA,[dotLines]).andStroke$java_awt_StrokeA(dotStrokes);
return ((P$.WorldGrid$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldGrid$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var g2=g.create$();
g2.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.WorldGrid'].lineColor);
if ($I$(11).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(12).KEY_ANTIALIASING, $I$(12).VALUE_ANTIALIAS_ON);
this.$finals$.dashMultiShape.draw$java_awt_Graphics2D(g2);
this.$finals$.dotMultiShape.draw$java_awt_Graphics2D(g2);
g2.dispose$();
});
})()
), Clazz.new_(P$.WorldGrid$1.$init$,[this, {dashMultiShape:dashMultiShape,dotMultiShape:dotMultiShape}]));
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
if (color != null ) {
this.lineColor=Clazz.new_([color.getRed$(), color.getGreen$(), color.getBlue$(), this.alpha],$I$(1,1).c$$I$I$I$I);
}});

Clazz.newMeth(C$, 'getAlpha$',  function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setAlpha$I',  function (alpha) {
alpha=Math.min(alpha, 255);
alpha=Math.max(alpha, 0);
this.alpha=alpha;
this.setColor$java_awt_Color(this.lineColor);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'isCustom$',  function () {
return !C$.defaultColor.equals$O(this.lineColor);
});

Clazz.newMeth(C$, 'setMajorXGridVisible$Z',  function (visible) {
this.showMajorX=visible;
});

Clazz.newMeth(C$, 'setMinorXGridVisible$Z',  function (visible) {
this.showMinorX=visible;
});

Clazz.newMeth(C$, 'setMajorYGridVisible$Z',  function (visible) {
this.showMajorY=visible;
});

Clazz.newMeth(C$, 'setMinorYGridVisible$Z',  function (visible) {
this.showMinorY=visible;
});

C$.$static$=function(){C$.$static$=0;
C$.DASHED_LINE=Clazz.array(Float.TYPE, -1, [1, 8]);
C$.DOTTED_LINE=Clazz.array(Float.TYPE, -1, [2, 2]);
C$.defaultAlpha=128;
C$.defaultColor=Clazz.new_($I$(1,1).c$$I$I$I$I,[128, 128, 128, C$.defaultAlpha]);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
