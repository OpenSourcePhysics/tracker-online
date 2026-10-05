(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.media.core.TPoint','java.util.HashMap','java.util.TreeSet','java.util.ArrayList',['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.Intersection'],'java.awt.Point',['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.LineEnd'],['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.Handle'],['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.Corner'],['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.GridIntersection'],'org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke','java.awt.geom.AffineTransform','java.awt.Rectangle',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.cabrillo.tracker.RGBRegion',['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.GridSegment'],['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.GridVertex'],'java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LineProfileStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Handle',0],['LineEnd',0],['Intersection',0],['Corner',0],['GridIntersection',0],['GridSegment',0],['GridVertex',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.endsEnabled=true;
this.panelEnd0Shapes=Clazz.new_($I$(2,1));
this.panelEnd1Shapes=Clazz.new_($I$(2,1));
this.panelShaftShapes=Clazz.new_($I$(2,1));
this.sorter=Clazz.new_($I$(3,1));
this.vertices=Clazz.new_($I$(4,1));
this.xSegments=Clazz.new_($I$(3,1));
this.ySegments=Clazz.new_($I$(3,1));
this.polygon=Clazz.array($I$(5), [8]);
this.polyLoc=Clazz.new_($I$(6,1));
this.quadAreas=Clazz.array(Double.TYPE, [4]);
},1);

C$.$fields$=[['Z',['endsEnabled'],'D',['sin','cos','xMin','xMax','yMin','yMax'],'I',['leadingIndex'],'O',['+lineEnd0','+lineEnd1','handle','org.opensourcephysics.cabrillo.tracker.LineProfileStep.Handle','panelEnd0Shapes','java.util.Map','+panelEnd1Shapes','+panelShaftShapes','line','org.opensourcephysics.cabrillo.tracker.LineProfile','corners','org.opensourcephysics.cabrillo.tracker.LineProfileStep.Corner[][]','endX','org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridIntersection[]','+endY','sweepX','org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridIntersection[][]','+sweepY','sorter','java.util.TreeSet','vertices','java.util.ArrayList','xSegments','java.util.TreeSet','+ySegments','polygon','org.opensourcephysics.cabrillo.tracker.LineProfileStep.Intersection[]','polyLoc','java.awt.Point','quadAreas','double[]','profileData','double[][]']]
,['O',['center','org.opensourcephysics.media.core.TPoint']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_LineProfile$I$D$D$D$D',  function (track, n, x1, y1, x2, y2) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.line=track;
this.lineEnd0=Clazz.new_($I$(7,1).c$$D$D,[this, null, x1, y1]);
this.lineEnd0.setTrackEditTrigger$Z(false);
this.lineEnd1=Clazz.new_($I$(7,1).c$$D$D,[this, null, x2, y2]);
this.handle=Clazz.new_([this, null, (x1 + x2) / 2, (y1 + y2) / 2],$I$(8,1).c$$D$D);
this.points=Clazz.array($I$(1), -1, [this.lineEnd0, this.lineEnd1, this.handle]);
this.screenPoints=Clazz.array($I$(6), [C$.getLength$()]);
this.corners=Clazz.array($I$(9), [2, 2]);
this.endX=Clazz.array($I$(10), [2]);
this.endY=Clazz.array($I$(10), [2]);
for (var i=0; i < 2; i++) {
this.corners[0][i]=Clazz.new_($I$(9,1),[this, null]);
this.corners[1][i]=Clazz.new_($I$(9,1),[this, null]);
this.endX[i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, true]);
this.endY[i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, false]);
}
}, 1);

Clazz.newMeth(C$, 'getLineEnd0$',  function () {
return this.lineEnd0;
});

Clazz.newMeth(C$, 'getLineEnd1$',  function () {
return this.lineEnd1;
});

Clazz.newMeth(C$, 'getHandle$',  function () {
return this.handle;
});

Clazz.newMeth(C$, 'setEndsEnabled$Z',  function (enabled) {
this.endsEnabled=enabled;
});

Clazz.newMeth(C$, 'isEndsEnabled$',  function () {
return this.endsEnabled;
});

Clazz.newMeth(C$, 'setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint',  function (footprint) {
if (footprint.getLength$() >= 2) C$.superclazz.prototype.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint.apply(this, [footprint]);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
var hitShape;
if (this.endsEnabled) {
hitShape=this.panelEnd0Shapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) return this.lineEnd0;
hitShape=this.panelEnd1Shapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) return this.lineEnd1;
}hitShape=this.panelShaftShapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(11).hitRect) ) {
return this.handle;
}return null;
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
if (Clazz.instanceOf(this.footprint, "org.opensourcephysics.cabrillo.tracker.OutlineFootprint")) {
var outline=this.footprint;
var profile=this.getTrack$();
var spread=profile.getSpread$();
var factor=trackerPanel.getXPixPerUnit$();
if (!trackerPanel.isDrawingInImageSpace$()) {
var n=trackerPanel.getFrameNumber$();
factor=factor / trackerPanel.getCoords$().getScaleX$I(n);
}var i=((factor * (0.5 + spread))|0);
outline.setSpread$I(i);
}selection=trackerPanel.getSelectedPoint$();
var pointNumber=0;
var p=null;
var s=null;
for (var i=0; i < this.points.length; i++) {
this.screenPoints[i]=this.points[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[i] ) {
p=this.screenPoints[i];
pointNumber=i;
}}
mark=this.footprint.getMark$java_awt_PointA(this.screenPoints);
if (p != null ) {
$I$(11).transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(12).getIntegerFactor$();
if (scale > 1) {
$I$(11).transform.scale$D$D(scale, scale);
}s=$I$(11).transform.createTransformedShape$java_awt_Shape($I$(11).selectionShape);
var color=this.footprint.getColor$();
var stepMark=mark;
var selectedShape=Clazz.new_([Clazz.array($I$(14), -1, [s])],$I$(13,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(15), -1, [$I$(11).selectionStroke]));
mark=((P$.LineProfileStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LineProfileStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
this.$finals$.stepMark.draw$java_awt_Graphics2D$Z(g, false);
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.$finals$.color);
this.$finals$.selectedShape.draw$java_awt_Graphics2D(g);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.LineProfileStep$1.$init$,[this, {selectedShape:selectedShape,stepMark:stepMark,color:color}]));
}this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
var shapes=this.footprint.getHitShapes$();
this.panelEnd0Shapes.put$O$O(trackerPanel.getID$(), shapes[0]);
this.panelEnd1Shapes.put$O$O(trackerPanel.getID$(), shapes[1]);
if (s != null  && pointNumber == 2 ) {
this.panelShaftShapes.put$O$O(trackerPanel.getID$(), s);
} else {
this.panelShaftShapes.put$O$O(trackerPanel.getID$(), shapes[2]);
}}return mark;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.profileData=null;
step.points[0]=step.lineEnd0=Clazz.new_([step, null, this.lineEnd0.getX$(), this.lineEnd0.getY$()],$I$(7,1).c$$D$D);
step.points[1]=step.lineEnd1=Clazz.new_([step, null, this.lineEnd1.getX$(), this.lineEnd1.getY$()],$I$(7,1).c$$D$D);
step.points[2]=step.handle=Clazz.new_([step, null, this.handle.getX$(), this.handle.getY$()],$I$(8,1).c$$D$D);
step.panelEnd0Shapes=Clazz.new_($I$(2,1));
step.panelEnd1Shapes=Clazz.new_($I$(2,1));
step.panelShaftShapes=Clazz.new_($I$(2,1));
step.endX=Clazz.array($I$(10), [2]);
step.endY=Clazz.array($I$(10), [2]);
for (var i=0; i < 2; i++) {
step.endX[i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, true]);
step.endY[i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, false]);
}
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "LineProfileStep " + this.n + " [" + $I$(11).format.format$D(this.lineEnd0.x) + ", " + $I$(11).format.format$D(this.lineEnd0.y) + ", " + $I$(11).format.format$D(this.lineEnd1.x) + ", " + $I$(11).format.format$D(this.lineEnd1.y) + "]" ;
});

Clazz.newMeth(C$, 'getProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (this.n != trackerPanel.getFrameNumber$() || this.profileData != null  ) {
return this.profileData;
}this.profileData=(trackerPanel.getVideo$() == null  ? null : (this.getTrack$()).isHorizontal || Math.abs(Math.sin(trackerPanel.getCoords$().getAngle$I(trackerPanel.getFrameNumber$()))) < 1.0E-5   ? p$1.getHorizontalProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]) : p$1.getTiltedProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]));
return this.profileData;
});

Clazz.newMeth(C$, 'rotate$',  function () {
if (this.line.tp == null ) return;
var theta_x=this.line.tp.getCoords$().getAngle$I(this.n);
if (this.line.isHorizontal) theta_x=0;
var theta_step=this.lineEnd0.angle$java_awt_geom_Point2D_Double(this.lineEnd1);
if (theta_step > 1.5707963267948966  || theta_step < -1.5707963267948966  ) {
theta_step=this.lineEnd1.angle$java_awt_geom_Point2D_Double(this.lineEnd0);
}var theta=theta_x + theta_step;
if (Math.abs(theta) > 1.0E-7 ) {
C$.center.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.lineEnd0, this.lineEnd1);
var transform=$I$(16).getRotateInstance$D$D$D(-theta, C$.center.x, C$.center.y);
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.lineEnd0, this.lineEnd0);
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.lineEnd1, this.lineEnd1);
this.erase$();
}});

Clazz.newMeth(C$, 'getTiltedProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var length=this.lineEnd0.distance$java_awt_geom_Point2D(this.lineEnd1);
if (length < 1 ) return null;
var image=trackerPanel.getVideo$().getImage$();
if (image == null  || image.getType$() != 1 ) return null;
var bounds=Clazz.new_([image.getWidth$(), image.getHeight$()],$I$(17,1).c$$I$I);
if (trackerPanel.getVideo$().getTypeName$().equals$O("Image")) {
var iVid=trackerPanel.getVideo$();
bounds=Clazz.new_([iVid.getRGBSize$().width, iVid.getRGBSize$().height],$I$(17,1).c$$I$I);
}var width=1 + 2 * this.line.getSpread$();
var len=(Math.floor(length)|0);
var theta=this.lineEnd0.angle$java_awt_geom_Point2D_Double(this.lineEnd1);
this.cos=Math.cos(theta);
this.sin=Math.sin(theta);
var dx=width * this.sin / 2.0;
var dy=width * this.cos / 2.0;
this.corners[0][0].x=this.lineEnd0.x - dx;
this.corners[0][0].y=this.lineEnd0.y + dy;
this.corners[0][1].x=this.lineEnd0.x + dx;
this.corners[0][1].y=this.lineEnd0.y - dy;
while (len > 0 && (!bounds.contains$java_awt_geom_Point2D(this.corners[0][0]) || !bounds.contains$java_awt_geom_Point2D(this.corners[0][1]) ) ){
--len;
this.corners[0][0].x+=this.cos;
this.corners[0][0].y+=this.sin;
this.corners[0][1].x+=this.cos;
this.corners[0][1].y+=this.sin;
}
this.corners[1][0].x=this.lineEnd1.x - dx;
this.corners[1][0].y=this.lineEnd1.y + dy;
this.corners[1][1].x=this.lineEnd1.x + dx;
this.corners[1][1].y=this.lineEnd1.y - dy;
while (len > 0 && (!bounds.contains$java_awt_geom_Point2D(this.corners[1][0]) || !bounds.contains$java_awt_geom_Point2D(this.corners[1][1]) ) ){
--len;
this.corners[1][0].x-=this.cos;
this.corners[1][0].y-=this.sin;
this.corners[1][1].x-=this.cos;
this.corners[1][1].y-=this.sin;
}
if (len < 1) return null;
this.xMin=this.xMax=this.corners[0][0].x;
this.yMin=this.yMax=this.corners[0][0].y;
for (var i=0; i < 2; i++) {
for (var j=0; j < 2; j++) {
this.xMin=Math.min(this.xMin, this.corners[i][j].x);
this.yMin=Math.min(this.yMin, this.corners[i][j].y);
this.xMax=Math.max(this.xMax, this.corners[i][j].x);
this.yMax=Math.max(this.yMax, this.corners[i][j].y);
}
}
var values=Clazz.array(Double.TYPE, [8, len]);
var pixXMin=(Math.floor(this.xMin)|0);
var pixYMin=(Math.floor(this.yMin)|0);
var pixXMax=(Math.ceil(this.xMax)|0);
var pixYMax=(Math.ceil(this.yMax)|0);
var w=pixXMax - pixXMin;
var h=pixYMax - pixYMin;
var pixels=Clazz.array(Integer.TYPE, [w * h]);
if (this.sweepX == null  || this.sweepX[0].length < width ) {
this.sweepX=Clazz.array($I$(10), [2, width]);
this.sweepY=Clazz.array($I$(10), [2, width]);
for (var i=0; i < width; i++) {
this.sweepX[0][i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, true]);
this.sweepX[1][i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, true]);
this.sweepY[0][i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, false]);
this.sweepY[1][i]=Clazz.new_($I$(10,1).c$$D$D$Z,[this, null, 0, 0, false]);
}
}this.leadingIndex=0;
p$1.findLeadingIntersections.apply(this, []);
var imagePixel=Clazz.new_($I$(18,1));
var worldPixel=Clazz.new_($I$(18,1));
try {
var n=trackerPanel.getFrameNumber$();
var at=trackerPanel.getCoords$().getToWorldTransform$I(n);
image.getRaster$().getDataElements$I$I$I$I$O(pixXMin, pixYMin, w, h, pixels);
for (var i=0; i < len; i++) {
var end0=this.corners[this.leadingIndex][0];
var end1=this.corners[this.leadingIndex][1];
this.leadingIndex=this.leadingIndex == 0 ? 1 : 0;
this.corners[this.leadingIndex][0].x=end0.x + this.cos;
this.corners[this.leadingIndex][0].y=end0.y + this.sin;
this.corners[this.leadingIndex][1].x=end1.x + this.cos;
this.corners[this.leadingIndex][1].y=end1.y + this.sin;
this.xMin=this.xMax=this.corners[0][0].x;
this.yMin=this.yMax=this.corners[0][0].y;
for (var k=0; k < 2; k++) {
for (var j=0; j < 2; j++) {
this.xMin=Math.min(this.xMin, this.corners[k][j].x);
this.yMin=Math.min(this.yMin, this.corners[k][j].y);
this.xMax=Math.max(this.xMax, this.corners[k][j].x);
this.yMax=Math.max(this.yMax, this.corners[k][j].y);
}
}
imagePixel.setLocation$D$D((this.xMax + this.xMin) / 2, (this.yMax + this.yMin) / 2);
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(imagePixel, worldPixel);
values[0][i]=worldPixel.getX$();
values[1][i]=worldPixel.getY$();
var minCol=(Math.floor(this.xMin)|0);
var minRow=(Math.floor(this.yMin)|0);
var colCount=(Math.ceil(this.xMax)|0) - minCol;
var rowCount=(Math.ceil(this.yMax)|0) - minRow;
var areas=Clazz.array(Double.TYPE, [colCount, rowCount]);
p$1.findLeadingIntersections.apply(this, []);
p$1.findEndIntersections.apply(this, []);
p$1.findGridSegments.apply(this, []);
p$1.findGridVertices.apply(this, []);
var area=0;
var red=0;
var green=0;
var blue=0;
var a;
var column;
var row;
if (!this.vertices.isEmpty$()) {
var it=this.vertices.iterator$();
while (it.hasNext$()){
var next=it.next$();
column=(next.x|0) - minCol;
row=(next.y|0) - minRow;
this.quadAreas[0]=areas[column][row];
this.quadAreas[1]=column > 0 ? areas[column - 1][row] : 1;
this.quadAreas[2]=row > 0 && column > 0  ? areas[column - 1][row - 1] : 1;
this.quadAreas[3]=row > 0 ? areas[column][row - 1] : 1;
p$1.getAreas$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridVertex$DA.apply(this, [next, this.quadAreas]);
areas[column][row]=this.quadAreas[0];
if (column > 0) areas[column - 1][row]=this.quadAreas[1];
if (row > 0) {
areas[column][row - 1]=this.quadAreas[3];
if (column > 0) areas[column - 1][row - 1]=this.quadAreas[2];
}}
} else {
var seg=this.xSegments.iterator$().next$();
a=p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [seg.lower, seg.higher]);
column=this.polyLoc.x - minCol;
row=this.polyLoc.y - minRow;
if (a > 0 ) areas[column][row]=a;
a=p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [seg.higher, seg.lower]);
column=this.polyLoc.x - minCol;
row=this.polyLoc.y - minRow;
if (a > 0 ) areas[column][row]=a;
}for (var j=0; j < 2; j++) {
for (var k=0; k < 2; k++) {
a=p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Corner.apply(this, [this.corners[j][k]]);
column=this.polyLoc.x - minCol;
row=this.polyLoc.y - minRow;
if (a > 0 ) areas[column][row]=a;
}
}
for (var ro=0; ro < areas[0].length; ro++) {
for (var col=0; col < areas.length; col++) {
var pixCol=col + minCol - pixXMin;
var pixRow=ro + minRow - pixYMin;
var pixIndex=pixCol + pixRow * w;
var pixel=pixels[pixIndex];
var r=(pixel >> 16) & 255;
var g=(pixel >> 8) & 255;
var b=(pixel) & 255;
a=areas[col][ro];
red+=a * r;
green+=a * g;
blue+=a * b;
area+=a;
}
}
if (area == 0 ) return null;
values[2][i]=red=red / area;
values[3][i]=green=green / area;
values[4][i]=blue=blue / area;
values[5][i]=$I$(19).getLuma$D$D$D(red, green, blue);
values[6][i]=width;
values[7][i]=i;
}
return values;
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
ex.printStackTrace$();
return null;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'findLeadingIntersections',  function () {
this.sorter.clear$();
this.sorter.add$O(this.corners[this.leadingIndex][0]);
this.sorter.add$O(this.corners[this.leadingIndex][1]);
var it=this.sorter.iterator$();
var minXCorner=it.next$();
var maxXCorner=it.next$();
minXCorner.lowerX=null;
maxXCorner.higherX=null;
var slope=-this.cos / this.sin;
var y0=this.corners[this.leadingIndex][0].y - slope * this.corners[this.leadingIndex][0].x;
var n=0;
for (var i=(Math.ceil(minXCorner.x)|0); i <= (Math.floor(maxXCorner.x)|0); i++) {
var y=slope * i + y0;
this.sweepX[this.leadingIndex][n].setLocation$D$D(i, y);
this.sorter.add$O(this.sweepX[this.leadingIndex][n]);
++n;
}
for (; n < this.sweepX[this.leadingIndex].length; n++) this.sweepX[this.leadingIndex][n].setLocation$D$D(NaN, NaN);

var ymin=Math.min(minXCorner.y, maxXCorner.y);
var ymax=Math.max(minXCorner.y, maxXCorner.y);
n=0;
for (var i=(Math.ceil(ymin)|0); i <= (Math.floor(ymax)|0); i++) {
var x=(i - y0) / slope;
this.sweepY[this.leadingIndex][n].setLocation$D$D(x, i);
this.sorter.add$O(this.sweepY[this.leadingIndex][n]);
++n;
}
for (; n < this.sweepY[this.leadingIndex].length; n++) this.sweepY[this.leadingIndex][n].setLocation$D$D(NaN, NaN);

it=this.sorter.iterator$();
var prev=null;
while (it.hasNext$()){
var next=it.next$();
if (prev != null ) {
prev.higherX=next;
next.lowerX=prev;
}prev=next;
}
}, p$1);

Clazz.newMeth(C$, 'findGridSegments',  function () {
this.xSegments.clear$();
this.sorter.clear$();
for (var i=0; i < 2; i++) {
if (!Double.isNaN$D(this.endX[i].x)) this.sorter.add$O(this.endX[i]);
}
for (var i=0; i < this.sweepX[0].length; i++) {
for (var j=0; j < 2; j++) {
if (!Double.isNaN$D(this.sweepX[j][i].x)) this.sorter.add$O(this.sweepX[j][i]);
}
}
var end0=null;
for (var it=this.sorter.iterator$(); it.hasNext$(); ) {
var next=it.next$();
if (end0 == null ) end0=next;
 else {
this.xSegments.add$O(Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, next, end0]));
end0=null;
}}
this.ySegments.clear$();
this.sorter.clear$();
for (var i=0; i < 2; i++) {
if (!Double.isNaN$D(this.endY[i].y)) {
var val=this.endY[i].y;
this.endY[i].setLocation$D$D(val, this.endY[i].x);
this.sorter.add$O(this.endY[i]);
}}
for (var i=0; i < this.sweepY[0].length; i++) {
for (var j=0; j < 2; j++) {
if (!Double.isNaN$D(this.sweepY[j][i].y)) {
var val=this.sweepY[j][i].y;
this.sweepY[j][i].setLocation$D$D(val, this.sweepY[j][i].x);
this.sorter.add$O(this.sweepY[j][i]);
}}
}
end0=null;
for (var it=this.sorter.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var val=next.y;
next.setLocation$D$D(val, next.x);
if (end0 == null ) {
end0=next;
} else {
this.ySegments.add$O(Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, next, end0]));
end0=null;
}}
}, p$1);

Clazz.newMeth(C$, 'findGridVertices',  function () {
this.vertices.clear$();
var xIt=this.xSegments.iterator$();
while (xIt.hasNext$()){
var nextX=xIt.next$();
var yIt=this.ySegments.iterator$();
while (yIt.hasNext$()){
var nextY=yIt.next$();
if (nextY.higher.x < nextX.value ) continue;
if (nextY.lower.x > nextX.value ) break;
if (nextX.lower.y < nextY.value  && nextX.higher.y > nextY.value  ) {
this.vertices.add$O(Clazz.new_($I$(21,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment,[this, null, nextX, nextY]));
}}
}
$I$(22).sort$java_util_List(this.vertices);
var it=this.vertices.iterator$();
var prev=null;
while (it.hasNext$()){
var next=it.next$();
if (prev != null ) {
if (prev.distance$java_awt_geom_Point2D(next) == 1 ) {
if (prev.x == next.x ) {
prev.isVertical=next.isVertical=true;
if (next.y - prev.y > 0 ) {
var segment=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, prev.vert.lower, next]);
prev.setVerticalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(segment);
segment=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, next.vert.higher, prev]);
next.setVerticalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(segment);
} else {
var segment=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, prev.vert.higher, next]);
prev.setVerticalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(segment);
segment=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, next.vert.lower, prev]);
next.setVerticalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(segment);
}} else {
prev.isVertical=next.isVertical=false;
var segment=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, prev.horz.lower, next]);
prev.setHorizontalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(segment);
segment=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection,[this, null, next.horz.higher, prev]);
next.setHorizontalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(segment);
}}}prev=next;
}
}, p$1);

Clazz.newMeth(C$, 'findEndIntersections',  function () {
var trailingIndex=this.leadingIndex == 0 ? 1 : 0;
for (var j=0; j < 2; j++) {
this.sorter.clear$();
this.sorter.add$O(this.corners[0][j]);
this.sorter.add$O(this.corners[1][j]);
var intercept=this.corners[trailingIndex][j].y - this.sin * this.corners[trailingIndex][j].x / this.cos;
var grid=this.cos > 0  ? Math.ceil(this.corners[trailingIndex][j].x) : Math.ceil(this.corners[this.leadingIndex][j].x);
var larger=this.cos > 0  ? this.corners[this.leadingIndex][j].x : this.corners[trailingIndex][j].x;
if (grid < larger ) {
var y=(this.sin * grid / this.cos) + intercept;
this.endX[j].setLocation$D$D(grid, y);
this.sorter.add$O(this.endX[j]);
} else this.endX[j].setLocation$D$D(NaN, NaN);
grid=this.sin > 0  ? Math.ceil(this.corners[trailingIndex][j].y) : Math.ceil(this.corners[this.leadingIndex][j].y);
larger=this.sin > 0  ? this.corners[this.leadingIndex][j].y : this.corners[trailingIndex][j].y;
if (grid < larger ) {
var x=(grid - intercept) * this.cos / this.sin;
this.endY[j].setLocation$D$D(x, grid);
this.sorter.add$O(this.endY[j]);
} else this.endY[j].setLocation$D$D(NaN, NaN);
var it=this.sorter.iterator$();
var prev=null;
while (it.hasNext$()){
var next=it.next$();
if (prev != null ) {
if (Clazz.instanceOf(prev, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.Corner")) {
var corner=prev;
corner.end=next;
if (corner.higherX == null  || Double.isNaN$D(corner.higherX.x) ) {
corner.higherX=next;
}} else {
prev.higherX=next;
}if (Clazz.instanceOf(next, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.Corner")) {
var corner=next;
corner.end=prev;
if (corner.lowerX == null  || Double.isNaN$D(corner.lowerX.x) ) corner.lowerX=prev;
} else {
next.lowerX=prev;
}}prev=next;
}
}
}, p$1);

Clazz.newMeth(C$, 'getNext$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection',  function (current, prev) {
var next=null;
if (Clazz.instanceOf(current, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridVertex")) {
var vertex=current;
if (prev === vertex.horz.lower ) return vertex.vert.higher;
if (prev === vertex.horz.higher ) return vertex.vert.lower;
if (prev === vertex.vert.lower ) return vertex.horz.lower;
next=vertex.horz.higher;
}if (Clazz.instanceOf(current, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.Corner")) {
var corner=current;
if (prev.compareTo$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection(corner.end) == 0) {
if (corner.higherX != null  && !Double.isNaN$D(corner.higherX.x)  && corner.higherX.compareTo$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection(corner) > 0 ) next=corner.higherX;
 else if (corner.lowerX != null  && !Double.isNaN$D(corner.lowerX.x)  && corner.lowerX.compareTo$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection(corner) < 0 ) next=corner.lowerX;
} else {
next=corner.end;
}}if (next == null  && Clazz.instanceOf(current, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridIntersection") ) {
var grid=current;
if (prev === grid.segment.vertex ) {
var vertex=prev;
if (grid === vertex.vert.higher ) next=grid.lowerX;
 else if (grid === vertex.vert.lower ) next=grid.higherX;
 else if (grid === vertex.horz.higher ) {
if (grid.higherX.y > grid.y ) next=grid.higherX;
 else next=grid.lowerX;
} else if (grid.higherX.y < grid.y ) next=grid.higherX;
 else next=grid.lowerX;
} else if (grid.segment.vertex == null ) {
if (prev === grid.segment.lower ) {
if (grid.isVertical) next=grid.lowerX;
 else next=grid.higherX.y > grid.y  ? grid.higherX : grid.lowerX;
} else if (prev === grid.segment.higher ) {
if (grid.isVertical) next=grid.higherX;
 else next=grid.higherX.y < grid.y  ? grid.higherX : grid.lowerX;
} else next=grid === grid.segment.higher  ? grid.segment.lower : grid.segment.higher;
} else next=grid.segment.vertex;
}if (next == null ) return null;
var thetaPrev=Math.atan2(current.getY$() - prev.getY$(), current.getX$() - prev.getX$());
var thetaNext=Math.atan2(next.getY$() - current.getY$(), next.getX$() - current.getX$());
var delta=thetaNext - thetaPrev;
if ((delta > 0  && delta < 3.141592653589793  ) || delta < -3.141592653589793  ) return next;
return null;
}, p$1);

Clazz.newMeth(C$, 'getAreas$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridVertex$DA',  function (vertex, knownValues) {
for (var i=0; i < 4; i++) {
var area=knownValues[i];
if (area == 0 ) knownValues[i]=p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridVertex$I.apply(this, [vertex, i]);
}
return knownValues;
}, p$1);

Clazz.newMeth(C$, 'getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridVertex$I',  function (vertex, quadrant) {
var current=vertex.horz.higher;
switch (quadrant) {
case 1:
{
current=vertex.vert.higher;
break;
}case 2:
{
current=vertex.horz.lower;
break;
}case 3:
{
current=vertex.vert.lower;
break;
}}
return p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [vertex, current]);
}, p$1);

Clazz.newMeth(C$, 'getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Corner',  function (corner) {
var a=p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [corner, corner.end]);
if (a == 0 ) {
p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [corner.end, corner]);
}return a > 0  ? a : p$1.getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [corner.end, corner]);
}, p$1);

Clazz.newMeth(C$, 'getArea$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection',  function (start, next) {
this.polygon[0]=start;
var prev=start;
var n=1;
while (next != null  && next !== start  ){
this.polygon[n++]=next;
var ondeck=p$1.getNext$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection.apply(this, [next, prev]);
prev=next;
next=ondeck;
}
var area=0;
var col=(this.polygon[0].x|0);
var row=(this.polygon[0].y|0);
var noCorner=true;
for (var i=0; i < n; i++) {
var below=i - 1 < 0 ? n - 1 : i - 1;
var above=i + 1 > n - 1 ? 0 : i + 1;
area+=this.polygon[i].x * (this.polygon[above].y - this.polygon[below].y);
if (Clazz.instanceOf(this.polygon[i], "org.opensourcephysics.cabrillo.tracker.LineProfileStep.Corner")) {
var corner=this.polygon[i];
col=(corner.x|0);
row=(corner.y|0);
noCorner=false;
}if (noCorner) {
col=Math.min(col, (this.polygon[i].x|0));
row=Math.min(row, (this.polygon[i].y|0));
}}
area/=2;
this.polyLoc.setLocation$I$I(col, row);
return area;
}, p$1);

Clazz.newMeth(C$, 'getHorizontalProfileData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var vid=trackerPanel.getVideo$();
if (vid == null ) return null;
var image=trackerPanel.getVideo$().getImage$();
var spread=this.line.getSpread$();
var x0=Math.min((this.lineEnd0.getX$()|0), (this.lineEnd1.getX$()|0));
x0=Math.max(x0, 0);
var x1=Math.max((this.lineEnd0.getX$()|0), (this.lineEnd1.getX$()|0));
var w=(trackerPanel.getImageWidth$()|0);
if (vid.getTypeName$().equals$O("Image")) {
var iVid=vid;
w=iVid.getRGBSize$().width;
}x1=Math.min(x1, w);
var length=x1 - x0;
if (length <= 0) return null;
var width=1 + 2 * spread;
var npix=length * width;
var pixels=Clazz.array(Integer.TYPE, [npix]);
var r=Clazz.array(Integer.TYPE, [width]);
var g=Clazz.array(Integer.TYPE, [width]);
var b=Clazz.array(Integer.TYPE, [width]);
var values=Clazz.array(Double.TYPE, [8, length]);
var imagePixel=Clazz.new_($I$(18,1));
var worldPixel=Clazz.new_($I$(18,1));
if (image != null  && image.getType$() == 1 ) {
try {
var y=(this.lineEnd0.getY$()|0);
var y0=y - spread;
var n=trackerPanel.getFrameNumber$();
var at=trackerPanel.getCoords$().getToWorldTransform$I(n);
image.getRGB$I$I(0, 0);
image.getRaster$().getDataElements$I$I$I$I$O(x0, y0, length, width, pixels);
var isOK=false;
for (var i=0; i < npix; i++) {
if (pixels[i] != 0) {
isOK=true;
break;
}}
if (!isOK) {
System.err.println$S("LineProfileStep image failed");
image.getRaster$().getDataElements$I$I$I$I$O(x0, y0, length, width, pixels);
return null;
}for (var i=0; i < length; i++) {
for (var j=0; j < width; j++) {
imagePixel.setLocation$D$D(x0 + i + 0.5 , y + 0.5);
if (vid.getTypeName$().equals$O("Image")) {
var iVid=vid;
var wid=iVid.getRGBSize$().width;
var ht=iVid.getRGBSize$().height;
if (wid < imagePixel.getX$()  || ht < imagePixel.getY$()  ) return null;
}if (j == spread) {
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(imagePixel, worldPixel);
values[0][i]=worldPixel.getX$();
values[1][i]=worldPixel.getY$();
}var pixel=pixels[i + j * length];
r[j]=(pixel >> 16) & 255;
g[j]=(pixel >> 8) & 255;
b[j]=(pixel) & 255;
}
var rMean=0;
var gMean=0;
var bMean=0;
var total=0;
for (var j=0; j < r.length; j++) {
rMean+=r[j];
gMean+=g[j];
bMean+=b[j];
++total;
}
values[2][i]=rMean=rMean / total;
values[3][i]=gMean=gMean / total;
values[4][i]=bMean=bMean / total;
values[5][i]=$I$(19).getLuma$D$D$D(rMean, gMean, bMean);
values[6][i]=total;
values[7][i]=i;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
return null;
} else {
throw ex;
}
}
}return values;
}, p$1);

Clazz.newMeth(C$, 'getLength$',  function () {
return 3;
}, 1);

Clazz.newMeth(C$, 'clearData$',  function () {
this.profileData=null;
});

C$.$static$=function(){C$.$static$=0;
C$.center=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Step','.Handle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setTrackEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track.isLocked$()) return;
if (!this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.isFixed$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n));
}var dx=x - this.getX$();
var dy=y - this.getY$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.isFixed$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.steps.getStep$I(0);
step.lineEnd0.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0.getY$() + dy);
step.lineEnd1.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd1.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd1.getY$() + dy);
step.handle.setLocation$D$D(x, y);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.refreshStep$org_opensourcephysics_cabrillo_tracker_LineProfileStep(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep']);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd1.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd1.getX$() + dx, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd1.getY$() + dy);
this.setLocation$D$D(x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.clearStepData$();
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
track.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n));
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n;
});

Clazz.newMeth(C$, 'setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xScreen, yScreen, trackerPanel) {
this.setPositionOnLine$I$I$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(xScreen, yScreen, trackerPanel, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0, this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd1);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "LineEnd", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.setTrackEditTrigger$Z(true);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track.isLocked$()) return;
if (track.tp == null ) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
return;
}var dx=x - this.getX$();
var dy=y - this.getY$();
var hyp=Math.sqrt(dx * dx + dy * dy);
var theta1=-track.tp.getCoords$().getAngle$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n);
var profile=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (profile.isHorizontal) theta1=0;
var theta2=Math.atan2(dy, dx);
var theta=theta1 - theta2;
var d=hyp * Math.cos(theta);
dx=d * Math.cos(theta1);
dy=d * Math.sin(theta1);
if (this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.isFixed$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.steps.getStep$I(0);
var target=this === this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].lineEnd0  ? step.lineEnd0 : step.lineEnd1;
target.setLocation$D$D(this.getX$() + dx, this.getY$() + dy);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.refreshStep$org_opensourcephysics_cabrillo_tracker_LineProfileStep(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep']);
} else {
this.setLocation$D$D(this.getX$() + dx, this.getY$() + dy);
this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n));
}this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].line.clearStepData$();
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
track.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n));
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].n;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "Intersection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.awt.geom.Point2D','.Double'], 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lowerX','org.opensourcephysics.cabrillo.tracker.LineProfileStep.Intersection','+higherX']]]

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_cabrillo_tracker_LineProfileStep_Intersection','compareTo$O'],  function (other) {
var dx=this.x - other.x;
if (dx == 0 ) {
var dy=this.y - other.y;
if (this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].cos / this.b$['org.opensourcephysics.cabrillo.tracker.LineProfileStep'].sin < 0 ) return dy == 0  ? 0 : dy > 0  ? 1 : -1;
return dy == 0  ? 0 : dy < 0  ? 1 : -1;
}return dx > 0  ? 1 : -1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "Corner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.Intersection']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['end','org.opensourcephysics.cabrillo.tracker.LineProfileStep.Intersection']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$D$D.apply(this,[0, 0]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "GridIntersection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.Intersection']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isVertical'],'O',['segment','org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridSegment']]]

Clazz.newMeth(C$, 'c$$D$D$Z',  function (x, y, vert) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.isVertical=vert;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "GridSegment", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['value'],'O',['lower','org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridIntersection','+higher','vertex','org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridVertex']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridIntersection',  function (end0, end1) {
;C$.$init$.apply(this);
var vert=end0.isVertical;
if (vert) {
this.value=end0.x;
var end0Smaller=end0.y < end1.y ;
this.lower=end0Smaller ? end0 : end1;
this.higher=end0Smaller ? end1 : end0;
} else {
this.value=end0.y;
var end0Smaller=end0.x < end1.x ;
this.lower=end0Smaller ? end0 : end1;
this.higher=end0Smaller ? end1 : end0;
}this.lower.segment=this;
this.higher.segment=this;
}, 1);

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment','compareTo$O'],  function (other) {
if (this.lower.isVertical) return ((this.value - other.value)|0);
var dx=this.lower.x - other.lower.x;
return dx == 0  ? 0 : dx > 0  ? 1 : -1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineProfileStep, "GridVertex", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.LineProfileStep','.GridIntersection']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vert','org.opensourcephysics.cabrillo.tracker.LineProfileStep.GridSegment','+horz']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment',  function (xSegment, ySegment) {
;C$.superclazz.c$$D$D$Z.apply(this,[xSegment.value, ySegment.value, true]);C$.$init$.apply(this);
this.setVerticalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(xSegment);
this.setHorizontalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment(ySegment);
}, 1);

Clazz.newMeth(C$, 'setVerticalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment',  function (segment) {
this.vert=segment;
this.vert.vertex=this;
});

Clazz.newMeth(C$, 'setHorizontalSegment$org_opensourcephysics_cabrillo_tracker_LineProfileStep_GridSegment',  function (segment) {
this.horz=segment;
this.horz.vertex=this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
