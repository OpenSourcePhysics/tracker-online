(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.CircleFitterStep','org.opensourcephysics.cabrillo.tracker.PointMass',['org.opensourcephysics.cabrillo.tracker.CircleFitterStep','.DataPoint'],'javax.swing.SwingUtilities','java.awt.geom.AffineTransform','org.opensourcephysics.media.core.TPoint','java.util.HashMap','java.util.ArrayList',['org.opensourcephysics.cabrillo.tracker.CircleFitterStep','.CenterPoint'],'java.awt.Point','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke',['org.opensourcephysics.cabrillo.tracker.CircleFitterStep','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CircleFitterStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['DataPoint',0],['CenterPoint',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataPoints=Clazz.array($I$(3), [2, 0]);
this.panelCircleHitShapes=Clazz.new_($I$(7,1));
this.panelCenterHitShapes=Clazz.new_($I$(7,1));
this.panelPointHitShapes=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['D',['radius'],'O',['circleFitter','org.opensourcephysics.cabrillo.tracker.CircleFitter','dataPoints','org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint[][]','center','org.opensourcephysics.cabrillo.tracker.CircleFitterStep.CenterPoint','edge','org.opensourcephysics.media.core.TPoint','panelCircleHitShapes','java.util.Map','+panelCenterHitShapes','panelPointHitShapes','java.util.ArrayList','selectedShape','org.opensourcephysics.cabrillo.tracker.MultiShape']]
,['Z',['doRefresh'],'O',['$transform','java.awt.geom.AffineTransform','endPoint1','org.opensourcephysics.media.core.TPoint','+endPoint2']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_CircleFitter$I',  function (track, n) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.circleFitter=track;
this.center=Clazz.new_($I$(9,1).c$$D$D,[this, null, 0, 0]);
this.edge=Clazz.new_($I$(6,1));
this.points=Clazz.array($I$(6), -1, [this.center, this.edge]);
this.screenPoints=Clazz.array($I$(10), [this.points.length]);
}, 1);

Clazz.newMeth(C$, 'setDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$I$I$Z$Z',  function (p, column, row, refreshAndPostEdit, reduceArrayLengthIfNull) {
if (row < 0 || column < 0  || column >= this.dataPoints.length ) return;
var control=Clazz.new_($I$(11,1).c$$O,[this]);
if (!this.circleFitter.isFixed$() && refreshAndPostEdit ) {
this.circleFitter.keyFrames.add$O(Integer.valueOf$I(this.n));
}if (row >= this.dataPoints[column].length) {
var len=this.dataPoints[column].length;
var newPoints=Clazz.array($I$(3), [row + 1]);
System.arraycopy$O$I$O$I$I(this.dataPoints[column], 0, newPoints, 0, len);
this.dataPoints[column]=newPoints;
}this.dataPoints[column][row]=p;
if (p == null  && reduceArrayLengthIfNull ) {
var newPoints=Clazz.array($I$(3), [this.dataPoints[column].length - 1]);
System.arraycopy$O$I$O$I$I(this.dataPoints[column], 0, newPoints, 0, row);
System.arraycopy$O$I$O$I$I(this.dataPoints[column], row + 1, newPoints, row, this.dataPoints[column].length - row - 1 );
this.dataPoints[column]=newPoints;
}if (refreshAndPostEdit) {
this.defaultIndex=this.dataPoints[0].length - 1;
this.refreshCircle$();
this.circleFitter.invalidateData$O(this.circleFitter);
this.circleFitter.firePropertyChange$S$O$O("dataPoint", null, this.circleFitter);
if (this.circleFitter.tp != null ) {
this.circleFitter.tp.changed=true;
}this.circleFitter.tp.refreshTrackBar$();
$I$(12).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(this, control);
}});

Clazz.newMeth(C$, 'addDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z',  function (p, refreshAndPostEdit) {
this.setDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$I$I$Z$Z(p, 0, this.dataPoints[0].length, refreshAndPostEdit, p == null );
});

Clazz.newMeth(C$, 'removeDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z$Z',  function (p, postUndoableEdit, fireEvents) {
if (p == null ) return;
var index=-1;
for (var i=0; i < this.dataPoints[0].length; i++) {
if (p === this.dataPoints[0][i] ) {
index=i;
break;
}}
var control=Clazz.new_($I$(11,1).c$$O,[this]);
if (index > -1) {
if (!this.circleFitter.isFixed$() && !p.isAttached$() ) {
this.circleFitter.keyFrames.add$O(Integer.valueOf$I(this.n));
}var newPoints=Clazz.array($I$(3), [this.dataPoints[0].length - 1]);
System.arraycopy$O$I$O$I$I(this.dataPoints[0], 0, newPoints, 0, index);
System.arraycopy$O$I$O$I$I(this.dataPoints[0], index + 1, newPoints, index, this.dataPoints[0].length - index - 1 );
this.dataPoints[0]=newPoints;
}this.refreshCircle$();
if (index > -1 && postUndoableEdit ) {
$I$(12).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(this, control);
if (this.circleFitter.tp != null ) {
this.circleFitter.tp.changed=true;
}}if (this.n == this.circleFitter.tp.getFrameNumber$()) {
this.repaint$();
this.circleFitter.refreshFields$I(this.n);
}this.circleFitter.invalidateData$O(Boolean.valueOf$Z(fireEvents));
if (fireEvents) {
this.circleFitter.firePropertyChange$S$O$O("dataPoint", null, this.circleFitter);
}this.circleFitter.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.circleFitter.tp.selectedSteps.clear$();
this.circleFitter.tp.refreshTrackBar$();
this.repaint$();
});

Clazz.newMeth(C$, 'getDataPoint$I$I',  function (column, row) {
if (row >= 0 && column >= 0  && column < this.dataPoints.length  && this.dataPoints[column].length > row ) {
return this.dataPoints[column][row];
}return null;
});

Clazz.newMeth(C$, 'getValidDataPoints$',  function () {
var validPoints=Clazz.new_($I$(8,1));
for (var col=0; col < this.dataPoints.length; col++) {
var pts=this.dataPoints[col];
for (var row=0; row < pts.length; row++) {
if (pts[row] != null ) {
validPoints.add$O(pts[row]);
}}
}
return validPoints;
});

Clazz.newMeth(C$, 'trimAttachedPointsToLength$I',  function (len) {
var changed=false;
if (len < this.dataPoints[1].length) {
var newPoints=Clazz.array($I$(3), [len]);
System.arraycopy$O$I$O$I$I(this.dataPoints[1], 0, newPoints, 0, len);
for (var i=len; i < this.dataPoints[1].length; i++) {
changed=changed || this.dataPoints[1][i] != null  ;
}
this.dataPoints[1]=newPoints;
}return changed;
});

Clazz.newMeth(C$, 'getDefaultPoint$',  function () {
if (this.defaultIndex >= 0 && this.dataPoints[0].length > this.defaultIndex ) {
return this.dataPoints[0][this.defaultIndex];
}return null;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
var hitShape;
var hit=null;
hitShape=this.panelCircleHitShapes.get$O(trackerPanel.getID$());
if (this.isValidCircle$() && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(13).hitRect) ) {
hit=this.edge;
}hitShape=this.panelCenterHitShapes.get$O(trackerPanel.getID$());
if (this.isValidCircle$() && hitShape != null   && hitShape.intersects$java_awt_geom_Rectangle2D($I$(13).hitRect) ) {
hit=this.center;
}for (var i=0; i < this.panelPointHitShapes.size$(); i++) {
var map=this.panelPointHitShapes.get$I(i);
if (map != null ) {
hitShape=map.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(13).hitRect) ) {
var validPoints=this.getValidDataPoints$();
if (i < validPoints.size$()) hit=validPoints.get$I(i);
}}}
if (hit != null  && Clazz.instanceOf(hit, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint")  && (hit).isAttached$() ) {
return null;
}return hit;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
var trackerPanel=panel;
var g=_g;
this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).draw$java_awt_Graphics2D$Z(g, false);
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
var selection=null;
if (mark == null ) {
selection=trackerPanel.getSelectedPoint$();
var pts=this.getValidDataPoints$();
var dataCount=pts.size$();
if (this.screenPoints.length != this.points.length + dataCount) {
this.screenPoints=Clazz.array($I$(10), [this.points.length + dataCount]);
}var p=null;
for (var i=0; i < this.points.length; i++) {
this.screenPoints[i]=this.points[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[i] ) p=this.screenPoints[i];
}
for (var i=0; i < dataCount; i++) {
var next=pts.get$I(i);
this.screenPoints[i + this.points.length]=next.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === next ) p=this.screenPoints[i + this.points.length];
}
var fitterFootprint=this.footprint;
fitterFootprint.setSelectedPoint$java_awt_Point(p);
fitterFootprint.setPixelRadius$D(this.radius * trackerPanel.getXPixPerUnit$());
fitterFootprint.setMarkedPointCount$I(this.dataPoints[0].length);
mark=fitterFootprint.getMark$java_awt_PointA(this.screenPoints);
if (p != null ) {
var color=this.footprint.getColor$();
var stepMark=mark;
C$.$transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(14).getIntegerFactor$();
if (scale > 1) {
C$.$transform.scale$D$D(scale, scale);
}this.selectedShape=Clazz.new_([Clazz.array($I$(16), -1, [C$.$transform.createTransformedShape$java_awt_Shape($I$(13).selectionShape)])],$I$(15,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(17), -1, [$I$(13).selectionStroke]));
mark=((P$.CircleFitterStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitterStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
this.$finals$.stepMark.draw$java_awt_Graphics2D$Z(g, false);
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.$finals$.color);
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].selectedShape.draw$java_awt_Graphics2D(g);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.CircleFitterStep$1.$init$,[this, {stepMark:stepMark,color:color}]));
}this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
var shapes=this.footprint.getHitShapes$();
this.panelCenterHitShapes.put$O$O(trackerPanel.getID$(), shapes[0]);
if (shapes.length - 1 < this.panelPointHitShapes.size$()) {
this.panelPointHitShapes.clear$();
}for (var i=1; i < shapes.length; i++) {
if (this.panelPointHitShapes.size$() <= i) {
var newMap=Clazz.new_($I$(7,1));
this.panelPointHitShapes.add$O(newMap);
}var map=this.panelPointHitShapes.get$I(i - 1);
map.put$O$O(trackerPanel.getID$(), shapes[i]);
}
}return mark;
});

Clazz.newMeth(C$, 'getWorldRadius$',  function () {
var dataCount=this.getValidDataPoints$().size$();
if (dataCount < 3 || this.circleFitter.tp == null  ) {
return NaN;
}return this.radius / this.circleFitter.tp.getCoords$().getScaleX$I(this.n);
});

Clazz.newMeth(C$, 'getWorldCenter$',  function () {
var dataCount=this.getValidDataPoints$().size$();
if (dataCount < 3 || Double.isInfinite$D(this.radius)  || this.radius > 100000   || this.circleFitter.tp == null  ) {
return null;
}return this.center.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.circleFitter.tp);
});

Clazz.newMeth(C$, 'isValidCircle$',  function () {
var dataCount=this.getValidDataPoints$().size$();
return dataCount > 2 && !Double.isInfinite$D(this.radius)  && this.radius > 0   && this.radius < 100000  ;
});

Clazz.newMeth(C$, 'refreshCircle$',  function () {
var prevR=this.radius;
var prevX=this.center.x;
var prevY=this.center.y;
var pts=this.getValidDataPoints$();
var len=pts.size$();
var p=null;
switch (len) {
case 0:
break;
case 1:
var p0=pts.get$I(0);
this.center.setLocation$java_awt_geom_Point2D(p0);
break;
case 2:
p0=pts.get$I(0);
var p1=pts.get$I(1);
this.center.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(p0, p1);
this.edge.setLocation$java_awt_geom_Point2D(p0);
break;
case 3:
p0=pts.get$I(0);
p1=pts.get$I(1);
var p2=pts.get$I(2);
p$1.refreshCircle$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint.apply(this, [p0, p1, p2]);
if (this.circleFitter.tp != null ) {
p=this.circleFitter.tp.getSelectedPoint$();
}this.edge.setLocation$java_awt_geom_Point2D(p === p1  ? p1 : p === p2  ? p2 : p0);
break;
default:
p$1.refreshCircle$java_util_ArrayList.apply(this, [pts]);
if (Double.isInfinite$D(this.radius) || this.radius > 100000  ) {
if (this.circleFitter.tp != null ) {
p=this.circleFitter.tp.getSelectedPoint$();
}p0=pts.get$I(0);
p1=pts.get$I(1);
p2=pts.get$I(2);
this.edge.setLocation$java_awt_geom_Point2D(p === p1  ? p1 : p === p2  ? p2 : p0);
} else {
this.edge.setLocation$D$D(this.center.x, this.center.y + this.radius);
}}
var isVisible=this.circleFitter.tp != null  && this.n == this.circleFitter.tp.getFrameNumber$() ;
if (this.radius != prevR  || this.center.x != prevX   || this.center.y != prevY  ) {
if (isVisible) {
this.repaint$();
} else this.erase$();
}});

Clazz.newMeth(C$, 'refreshCircle$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint',  function (p1, p2, p3) {
var xDeltaA=p2.getX$() - p1.getX$();
var yDeltaA=p2.getY$() - p1.getY$();
var xDeltaB=p3.getX$() - p2.getX$();
var yDeltaB=p3.getY$() - p2.getY$();
var slopeA=yDeltaA / xDeltaA;
var slopeB=yDeltaB / xDeltaB;
var xMidA=(p2.getX$() + p1.getX$()) / 2;
var yMidA=(p2.getY$() + p1.getY$()) / 2;
var xMidB=(p3.getX$() + p2.getX$()) / 2;
var yMidB=(p3.getY$() + p2.getY$()) / 2;
if ((xDeltaA == 0  && xDeltaB == 0  ) || slopeA == slopeB  ) {
this.radius=Infinity;
return;
}if (yDeltaA == 0 ) {
this.center.x=xMidA;
if (xDeltaB == 0 ) {
this.center.y=yMidB;
} else {
this.center.y=yMidB + (xMidB - this.center.x) / slopeB;
}} else if (yDeltaB == 0 ) {
this.center.x=xMidB;
if (xDeltaA == 0 ) {
this.center.y=yMidA;
} else {
this.center.y=yMidA + (xMidA - this.center.x) / slopeA;
}} else if (xDeltaA == 0 ) {
this.center.y=yMidA;
this.center.x=slopeB * (yMidB - this.center.y) + xMidB;
} else if (xDeltaB == 0 ) {
this.center.y=yMidB;
this.center.x=slopeA * (yMidA - this.center.y) + xMidA;
} else {
this.center.x=(slopeA * slopeB * (yMidA - yMidB)  - slopeA * xMidB + slopeB * xMidA) / (slopeB - slopeA);
this.center.y=yMidA - (this.center.x - xMidA) / slopeA;
}this.radius=this.center.distance$java_awt_geom_Point2D(p1);
}, p$1);

Clazz.newMeth(C$, 'refreshCircle$java_util_ArrayList',  function (pts) {
var deltax=Clazz.array(Double.TYPE, [pts.size$() - 1]);
var deltay=Clazz.array(Double.TYPE, [pts.size$() - 1]);
var slope=Clazz.array(Double.TYPE, [pts.size$() - 1]);
var prev=null;
var allDeltaXZero=true;
var allSameSlope=true;
for (var i=0; i < pts.size$(); i++) {
var p=pts.get$I(i);
if (prev == null ) {
prev=p;
continue;
}deltax[i - 1]=p.x - prev.x;
deltay[i - 1]=p.y - prev.y;
slope[i - 1]=deltay[i - 1] / deltax[i - 1];
if (i > 1) {
allDeltaXZero=allDeltaXZero && deltax[i - 1] == deltax[i - 2]  ;
allSameSlope=allSameSlope && slope[i - 1] == slope[i - 2]  ;
}}
if (allDeltaXZero || allSameSlope ) {
this.radius=Infinity;
return;
}var sumx=0;
var sumy=0;
var sumx2=0;
var sumy2=0;
var sumx3=0;
var sumy3=0;
var sumxy=0;
var sumxy2=0;
var sumx2y=0;
var val;
for (var p, $p = pts.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
val=p.x;
sumx+=val;
val*=p.x;
sumx2+=val;
val*=p.x;
sumx3+=val;
val=p.y;
sumy+=val;
val*=p.y;
sumy2+=val;
val*=p.y;
sumy3+=val;
val=p.x * p.y;
sumxy+=val;
sumxy2+=val * p.y;
sumx2y+=val * p.x;
}
var n=pts.size$();
var a=n * sumx2 - sumx * sumx;
var b=n * sumxy - sumx * sumy;
var c=n * sumy2 - sumy * sumy;
var d=0.5 * (n * sumxy2 - sumx * sumy2 + n * sumx3 - sumx * sumx2);
var e=0.5 * (n * sumx2y - sumy * sumx2 + n * sumy3 - sumy * sumy2);
var denom=a * c - b * b;
var x=(d * c - b * e) / denom;
var y=(a * e - b * d) / denom;
this.center.setLocation$D$D(x, y);
var r=0;
var dx;
var dy;
for (var p, $p = pts.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
dx=p.x - x;
dy=p.y - y;
r+=Math.sqrt(dx * dx + dy * dy);
}
this.radius=r / n;
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.points[0]=step.center=Clazz.new_($I$(9,1).c$$D$D,[step, null, this.center.x, this.center.y]);
step.points[1]=step.edge=Clazz.new_([this.edge.getX$(), this.edge.getY$()],$I$(6,1).c$$D$D);
step.panelCircleHitShapes=Clazz.new_($I$(7,1));
step.panelPointHitShapes=Clazz.new_($I$(8,1));
step.dataPoints=Clazz.array($I$(3), [2, 0]);
step.dataPoints[0]=Clazz.array($I$(3), [this.dataPoints[0].length]);
for (var i=0; i < this.dataPoints[0].length; i++) {
var p=this.dataPoints[0][i];
step.dataPoints[0][i]=Clazz.new_($I$(3,1).c$$D$D,[step, null, p.x, p.y]);
}
}return step;
});

Clazz.newMeth(C$, 'copy$org_opensourcephysics_cabrillo_tracker_CircleFitterStep',  function (step) {
if (this.dataPoints[0].length != step.dataPoints[0].length) {
this.dataPoints[0]=Clazz.array($I$(3), [step.dataPoints[0].length]);
for (var i=0; i < step.dataPoints[0].length; i++) {
var next=step.dataPoints[0][i];
this.dataPoints[0][i]=next == null  ? null : Clazz.new_($I$(3,1).c$$D$D,[this, null, next.x, next.y]);
}
} else {
for (var i=0; i < step.dataPoints[0].length; i++) {
if (this.dataPoints[0][i] != null  && step.dataPoints[0][i] != null  ) {
this.dataPoints[0][i].setLocation$java_awt_geom_Point2D(step.dataPoints[0][i]);
}}
}this.defaultIndex=this.dataPoints[0].length - 1;
this.refreshCircle$();
});

Clazz.newMeth(C$, 'toString',  function () {
var s="";
for (var i=0; i < this.dataPoints[0].length; i++) {
s+="\n" + i + ": " + this.dataPoints[0][i] ;
}
return "CircleFitterStep " + this.n + " [center (" + new Double(this.center.x).toString() + ", " + new Double(this.center.y).toString() + "), radius " + new Double(this.radius).toString() + "]" + s ;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 3;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.panelCenterHitShapes.clear$();
this.panelCircleHitShapes.clear$();
for (var shapes, $shapes = this.panelPointHitShapes.iterator$(); $shapes.hasNext$()&&((shapes=($shapes.next$())),1);) {
shapes.clear$();
}
this.panelPointHitShapes.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(18,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$transform=Clazz.new_($I$(5,1));
C$.endPoint1=Clazz.new_($I$(6,1));
C$.endPoint2=Clazz.new_($I$(6,1));
C$.doRefresh=true;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CircleFitterStep, "DataPoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setStepEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).locked) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.isFixed$()) {
var row=0;
for (var j=0; j < this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].dataPoints[0].length; j++) {
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].dataPoints[0][j] ) {
row=j;
break;
}}
var keyStep=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.steps.getStep$I(0);
while (keyStep.dataPoints[0].length <= row){
keyStep.addDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z(Clazz.new_(C$.c$$D$D,[keyStep, null, 0, 0]), false);
}
keyStep.dataPoints[0][row].setLocation$D$D(x, y);
if ($I$(1).doRefresh) keyStep.refreshCircle$();
if ($I$(1).doRefresh) this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.refreshStep$org_opensourcephysics_cabrillo_tracker_CircleFitterStep(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep']);
} else {
this.setLocation$D$D(x, y);
if (!this.isAttached$()) this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].n));
if ($I$(1).doRefresh) this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].refreshCircle$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'], []);
}if ($I$(1).doRefresh) this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.refreshFields$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].n);
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.dataValid=false;
if ($I$(1).doRefresh) this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.firePropertyChange$S$O$O("data", null, this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.tp != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].circleFitter.tp.changed=true;
}});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
if (!adjusting && !this.isAdjusting$() ) return;
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
var m=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (!adjusting) {
m.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].n));
}});

Clazz.newMeth(C$, 'setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent',  function (x, y, vidPanel, e) {
if (this.isAttached$()) return;
this.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(x, y, vidPanel);
});

Clazz.newMeth(C$, 'toString',  function () {
return "DataPoint " + this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterStep'].n + ": " + C$.superclazz.prototype.toString.apply(this, []) ;
});

Clazz.newMeth(C$, 'getAttachedStep$',  function () {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
var ret=null;
if (this.attachedTo != null  && track.tp != null  ) {
var masses=track.tp.getDrawablesTemp$Class(Clazz.getClass($I$(2)));
for (var i=0, n=masses.size$(); i < n; i++) {
var m=masses.get$I(i);
var step=m.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.attachedTo, track.tp);
if (step != null ) {
ret=step;
break;
}}
masses.clear$();
}return ret;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CircleFitterStep, "CenterPoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
return;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CircleFitterStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var pts=step.dataPoints[0];
var pointData=Clazz.array(Double.TYPE, [pts.length, 2]);
for (var i=0; i < pts.length; i++) {
var next=pts[i];
var position=Clazz.array(Double.TYPE, -1, [next.x, next.y]);
pointData[i]=position;
}
control.setValue$S$O("datapoints", pointData);
if (step.circleFitter != null  && !step.circleFitter.isFixed$() ) {
control.setValue$S$Z("iskey", step.circleFitter.keyFrames.contains$O(Integer.valueOf$I(step.n)));
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
if (step.circleFitter != null  && step.circleFitter.isFixed$()  && step.n != 0 ) {
step=step.circleFitter.getStep$I(0);
}if (step.circleFitter != null  && !step.circleFitter.isFixed$() ) {
var isKey=control.getBoolean$S("iskey");
if (isKey) {
step.circleFitter.keyFrames.add$O(Integer.valueOf$I(step.n));
} else {
step.circleFitter.keyFrames.remove$O(Integer.valueOf$I(step.n));
}}var pointData=control.getObject$S("datapoints");
var pts=step.dataPoints[0];
var diff=pointData.length - pts.length;
if (diff < 0) {
for (var i=0; i < -diff; i++) {
var p=pts[pts.length - 1];
step.removeDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z$Z(p, false, false);
}
pts=step.dataPoints[0];
} else if (diff > 0) {
for (var i=0; i < diff; i++) {
var position=pointData[pointData.length - 1 - i ];
step.addDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z(Clazz.new_($I$(3,1).c$$D$D,[step, null, position[0], position[1]]), false);
}
pts=step.dataPoints[0];
}for (var i=0; i < pointData.length; i++) {
var position=pointData[i];
pts[i].setLocation$D$D(position[0], position[1]);
}
step.refreshCircle$();
if (step.circleFitter != null ) {
var cstep=step;
var runner=((P$.CircleFitterStep$Loader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitterStep$Loader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.cstep.circleFitter.invalidateData$O(null);
});
})()
), Clazz.new_(P$.CircleFitterStep$Loader$1.$init$,[this, {cstep:cstep}]));
$I$(4).invokeLater$Runnable(runner);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
