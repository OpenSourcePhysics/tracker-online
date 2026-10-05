(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.ArrayList','java.awt.AlphaComposite','java.awt.geom.GeneralPath','org.opensourcephysics.media.core.TPoint','java.util.HashMap',['org.opensourcephysics.cabrillo.tracker.RGBStep','.Position'],'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer','java.awt.BasicStroke','java.awt.Shape','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','org.opensourcephysics.cabrillo.tracker.RGBStep','java.awt.geom.AffineTransform',['java.awt.geom.Ellipse2D','.Double'],['org.opensourcephysics.cabrillo.tracker.RGBStep','.Polygon2D'],['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.cabrillo.tracker.RGBRegion',['org.opensourcephysics.cabrillo.tracker.RGBStep','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RGBStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Position',4],['Polygon2D',12],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.width=20;
this.height=20;
this.panelHitShapes=Clazz.new_($I$(5,1));
this.polygonHitShapes=Clazz.new_($I$(5,1));
this.rgbData=Clazz.array(Double.TYPE, [8]);
this.dataValid=false;
},1);

C$.$fields$=[['Z',['dataValid'],'I',['width','height'],'O',['position','org.opensourcephysics.cabrillo.tracker.RGBStep.Position','rgbRegion','org.opensourcephysics.cabrillo.tracker.RGBRegion','panelHitShapes','java.util.Map','+polygonHitShapes','rgbData','double[]','stroke','java.awt.BasicStroke','rgbShape','java.awt.Shape','polygon','org.opensourcephysics.cabrillo.tracker.RGBStep.Polygon2D']]
,['O',['crosshair','java.awt.geom.GeneralPath','composite','java.awt.AlphaComposite','marker','org.opensourcephysics.media.core.TPoint']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_RGBRegion$I$D$D$I$I',  function (track, n, x, y, w, h) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.width=w;
this.height=h;
this.rgbRegion=track;
this.position=Clazz.new_($I$(6,1).c$$D$D,[this, null, x, y]);
this.position.setStepEditTrigger$Z(true);
this.points=Clazz.array($I$(4), -1, [this.position, track.vertexHandle]);
this.screenPoints=Clazz.array($I$(7), [$I$(8).getLength$()]);
this.valid=true;
}, 1);

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var trackerPanel=panel;
this.setHitRectCenter$I$I(xpix, ypix);
var hitShape=this.panelHitShapes.get$O(trackerPanel.getID$());
if (hitShape != null  && hitShape.intersects$java_awt_geom_Rectangle2D($I$(8).hitRect) ) return this.position;
if (!this.isPolygonClosed$()) {
var polyshapes=this.polygonHitShapes.get$O(trackerPanel.getID$());
if (polyshapes != null ) {
for (var i=0; i < polyshapes.length; i++) {
if (polyshapes[i].intersects$java_awt_geom_Rectangle2D($I$(8).hitRect)) {
this.rgbRegion.prepareVertexHandle$org_opensourcephysics_cabrillo_tracker_RGBStep$I(this, i);
return this.rgbRegion.vertexHandle;
}}
}}return null;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
var trackerPanel=panel;
var g=_g;
var mark=this.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (mark != null ) {
mark.draw$java_awt_Graphics2D$Z(g, false);
}this.getRGBData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
});

Clazz.newMeth(C$, 'getDefaultPoint$',  function () {
if (this.rgbRegion.shapeType == 2 && this.polygon != null   && !this.polygon.isClosed$()  && this.polygon.vertices.size$() > 1 ) {
return this.rgbRegion.vertexHandle;
}return this.points[this.defaultIndex];
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var baseStroke=this.footprint.getStroke$();
var scale=$I$(9).getIntegerFactor$();
var size=Math.min(this.width, this.height);
var lineWidth=Math.min(scale * baseStroke.getLineWidth$(), size / 3);
lineWidth=Math.max(lineWidth, baseStroke.getLineWidth$());
if (this.stroke == null  || this.stroke.getLineWidth$() != lineWidth  ) {
this.stroke=Clazz.new_($I$(10,1).c$$F,[lineWidth]);
}var mark=this.panelMarks.get$O(trackerPanel.getID$());
if (mark == null ) {
trackerPanel.getPixelTransform$java_awt_geom_AffineTransform($I$(8).transform);
if (!trackerPanel.isDrawingInImageSpace$()) {
$I$(8).transform.concatenate$java_awt_geom_AffineTransform(trackerPanel.getCoords$().getToWorldTransform$I(this.n));
}var region=this.getRGBShape$org_opensourcephysics_media_core_TPoint(this.position);
var rgn=$I$(8).transform.createTransformedShape$java_awt_Shape(region);
this.polygonHitShapes.remove$O(trackerPanel.getID$());
if (this.rgbRegion.shapeType == 2 && this.polygon != null  ) {
var n=this.polygon.vertices.size$() - (this.polygon.isClosed$() ? 2 : 1);
if (n > 0) {
var polyshapes=Clazz.array($I$(11), [n]);
for (var i=0; i < n; i++) {
var pt=this.polygon.vertices.get$I(i + 1);
C$.marker.setLocation$D$D(this.position.getX$() + pt.getX$(), this.position.getY$() + pt.getY$());
var p=C$.marker.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
$I$(8).transform.setToTranslation$D$D(p.x, p.y);
polyshapes[i]=$I$(8).transform.createTransformedShape$java_awt_Shape(C$.crosshair);
}
this.polygonHitShapes.put$O$O(trackerPanel.getID$(), polyshapes);
}}var p=this.position.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
$I$(8).transform.setToTranslation$D$D(p.x, p.y);
var cross=$I$(8).transform.createTransformedShape$java_awt_Shape(C$.crosshair);
$I$(8).transform.scale$D$D(scale, scale);
var square=this.position === trackerPanel.getSelectedPoint$()  ? $I$(8).transform.createTransformedShape$java_awt_Shape($I$(8).selectionShape) : null;
if (this.rgbRegion.vertexHandle === trackerPanel.getSelectedPoint$() ) {
p=this.rgbRegion.vertexHandle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
$I$(8).transform.setToTranslation$D$D(p.x, p.y);
$I$(8).transform.scale$D$D(scale, scale);
square=$I$(8).transform.createTransformedShape$java_awt_Shape($I$(8).selectionShape);
}var selection=square;
mark=((P$.RGBStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].footprint.getColor$());
if ($I$(12).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(13).KEY_ANTIALIASING, $I$(13).VALUE_ANTIALIAS_ON);
if (this.$finals$.selection != null ) {
g.setStroke$java_awt_Stroke($I$(8).selectionStroke);
g.draw$java_awt_Shape(this.$finals$.selection);
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].stroke);
} else {
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].stroke);
g.draw$java_awt_Shape(this.$finals$.cross);
}if (this.$finals$.rgn != null ) {
g.draw$java_awt_Shape(this.$finals$.rgn);
if (this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.shapeType == 2 && !this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].isPolygonClosed$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'], []) ) {
g.setComposite$java_awt_Composite($I$(14).composite);
g.fill$java_awt_Shape(this.$finals$.rgn);
}}g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.RGBStep$1.$init$,[this, {selection:selection,rgn:rgn,cross:cross}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
this.panelHitShapes.put$O$O(trackerPanel.getID$(), cross);
}return mark;
});

Clazz.newMeth(C$, 'setShapeSize$D$D',  function (w, h) {
this.height=(h|0);
this.width=(w|0);
this.rgbShape=null;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
if (step != null ) {
step.panelHitShapes=Clazz.new_($I$(5,1));
step.polygonHitShapes=Clazz.new_($I$(5,1));
step.points[0]=step.position=Clazz.new_([step, null, this.position.getX$(), this.position.getY$()],$I$(6,1).c$$D$D);
step.points[1]=this.rgbRegion.vertexHandle;
step.position.setStepEditTrigger$Z(true);
step.rgbData=Clazz.array(Double.TYPE, [8]);
step.dataValid=false;
}return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "RGBStep " + this.n + " [" + $I$(8).format.format$D(this.position.x) + ", " + $I$(8).format.format$D(this.position.y) + "]" ;
});

Clazz.newMeth(C$, 'getRGBShape$org_opensourcephysics_media_core_TPoint',  function (pt) {
if (this.rgbShape == null ) {
p$1.createRGBShape$org_opensourcephysics_media_core_TPoint.apply(this, [pt]);
}var transform=$I$(15,"getTranslateInstance$D$D",[pt.getX$(), pt.getY$()]);
return transform.createTransformedShape$java_awt_Shape(this.rgbShape);
});

Clazz.newMeth(C$, 'createRGBShape$org_opensourcephysics_media_core_TPoint',  function (pt) {
if (this.rgbRegion.shapeType == 0) this.rgbShape=Clazz.new_([(-this.width/2|0), (-this.height/2|0), this.width, this.height],$I$(16,1).c$$D$D$D$D);
 else if (this.rgbRegion.shapeType == 2) {
if (this.polygon == null ) {
this.polygon=Clazz.new_($I$(17,1));
this.append$D$D(pt.x, pt.y);
}this.rgbShape=this.polygon;
} else this.rgbShape=Clazz.new_([(-this.width/2|0), (-this.height/2|0), this.width, this.height],$I$(18,1).c$$D$D$D$D);
}, p$1);

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
if (this.polygon == null ) this.polygon=Clazz.new_($I$(17,1));
this.polygon.add$D$D(x - this.position.x, y - this.position.y);
if (this.polygon.vertices.size$() < 4 && this.rgbRegion.tp != null  ) {
this.rgbRegion.tp.getTrackBar$Z(false).refresh$();
}});

Clazz.newMeth(C$, 'isPolygonClosed$',  function () {
return this.polygon != null  && this.polygon.isClosed$() ;
});

Clazz.newMeth(C$, 'getPolygonVertexCount$',  function () {
return this.polygon == null  ? 0 : this.polygon.vertices.size$();
});

Clazz.newMeth(C$, 'getPolygonVertices$',  function () {
if (this.polygon == null ) return null;
return this.polygon.getVertices$();
});

Clazz.newMeth(C$, 'setPolygonVertices$DAA',  function (vertices) {
if (this.polygon == null ) this.polygon=Clazz.new_($I$(17,1));
 else {
this.polygon.reset$();
this.polygon.vertices.clear$();
}for (var i=0; i < vertices.length; i++) {
if (vertices[i] == null ) continue;
this.polygon.add$D$D(vertices[i][0], vertices[i][1]);
}
});

Clazz.newMeth(C$, 'getRGBData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var vid=trackerPanel.getVideo$();
if (vid == null  || !vid.isVisible$() ) return null;
if (!this.dataValid && trackerPanel.getFrameNumber$() == this.n ) {
var image=vid.getImage$();
if (image != null  && image.getType$() == 1 ) {
var step=this.rgbRegion.isFixedPosition$() ? this.rgbRegion.getStep$I(0) : this;
var pt=step.getPosition$();
var region=this.getRGBShape$org_opensourcephysics_media_core_TPoint(pt);
if (region == null ) return null;
var rect=region.getBounds$();
var h=rect.height;
var w=rect.width;
var x0=rect.x;
var y0=rect.y;
var centerPt=Clazz.new_($I$(19,1));
try {
var pixels=Clazz.array(Integer.TYPE, [h * w]);
var n=0;
var r=0;
var g=0;
var b=0;
var r2=0;
var g2=0;
var b2=0;
image.getRaster$().getDataElements$I$I$I$I$O(x0, y0, w, h, pixels);
for (var i=0; i < w; i++) {
for (var j=0; j < h; j++) {
centerPt.setLocation$D$D(x0 + i + 0.5 , y0 + j + 0.5 );
if (vid.getTypeName$().equals$O("Image")) {
var iVid=vid;
var wid=iVid.getRGBSize$().width;
var ht=iVid.getRGBSize$().height;
if (wid < centerPt.getX$()  || ht < centerPt.getY$()  ) return null;
}if (region.contains$java_awt_geom_Point2D(centerPt)) {
var pixel=pixels[i + j * w];
++n;
var rp=(pixel >> 16) & 255;
r+=rp;
r2+=rp * rp;
var gp=(pixel >> 8) & 255;
g+=gp;
g2+=gp * gp;
var bp=(pixel) & 255;
b+=bp;
b2+=bp * bp;
}}
}
if (n == 0) return null;
var rMean=1.0 * r / n;
var rSD=n == 1 ? NaN : Math.sqrt((r2 - r * rMean) / (n - 1));
var gMean=1.0 * g / n;
var gSD=n == 1 ? NaN : Math.sqrt((g2 - g * gMean) / (n - 1));
var bMean=1.0 * b / n;
var bSD=n == 1 ? NaN : Math.sqrt((b2 - b * bMean) / (n - 1));
this.rgbData[0]=rMean;
this.rgbData[1]=gMean;
this.rgbData[2]=bMean;
this.rgbData[3]=$I$(20).getLuma$D$D$D(rMean, gMean, bMean);
this.rgbData[4]=n;
this.rgbData[5]=rSD;
this.rgbData[6]=gSD;
this.rgbData[7]=bSD;
this.dataValid=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
return null;
} else {
throw ex;
}
}
}}this.dataVisible=true;
return this.rgbData;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(21,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.composite=$I$(2).getInstance$I$F(3, 0.1);
{
C$.crosshair=Clazz.new_($I$(3,1));
C$.crosshair.moveTo$F$F(0, -3);
C$.crosshair.lineTo$F$F(0, 3);
C$.crosshair.moveTo$F$F(-3, 0);
C$.crosshair.lineTo$F$F(3, 0);
C$.marker=Clazz.new_($I$(4,1));
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBStep, "Position", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (track.isLocked$()) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.isFixedPosition$()) {
var step=this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.steps.getStep$I(0);
step.getPosition$().setLocation$D$D(x, y);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.refreshStep$org_opensourcephysics_cabrillo_tracker_RGBStep(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep']);
this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.clearData$();
} else {
this.setLocation$D$D(x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.keyFrames.add$O(Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].n));
this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].dataValid=false;
}this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
track.firePropertyChange$S$O$O("step", null,  new Integer(this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].n));
});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
var p=this.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
track.xField.setValue$D(p.getX$());
track.yField.setValue$D(p.getY$());
C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].n;
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
if (!adjusting) this.b$['org.opensourcephysics.cabrillo.tracker.RGBStep'].rgbRegion.checkPolygonEditing$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBStep, "Polygon2D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.geom.Path2D','.Double']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vertices=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['vertices','java.util.ArrayList']]
,['O',['pts','double[]']]]

Clazz.newMeth(C$, 'copy$',  function () {
var copy=Clazz.new_(C$);
var it=this.getPathIterator$java_awt_geom_AffineTransform(null);
while (!it.isDone$()){
it.currentSegment$DA(C$.pts);
copy.add$D$D(C$.pts[0], C$.pts[1]);
it.next$();
}
return copy;
});

Clazz.newMeth(C$, 'getVertices$',  function () {
var it=this.getPathIterator$java_awt_geom_AffineTransform(null);
var result=Clazz.array(Double.TYPE, [this.vertices.size$(), null]);
var i=0;
while (!it.isDone$()){
it.currentSegment$DA(C$.pts);
result[i]=Clazz.array(Double.TYPE, -1, [C$.pts[0], C$.pts[1]]);
it.next$();
++i;
}
return result;
});

Clazz.newMeth(C$, 'remove$I',  function (vertex) {
if (this.vertices.size$() < 2 || this.vertices.size$() < vertex + 1 ) return;
this.reset$();
this.vertices.remove$I(vertex + 1);
var array=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.vertices]);
this.vertices.clear$();
var n=array.size$();
for (var i=0; i < n; i++) {
var next=array.get$I(i);
this.add$D$D(next.getX$(), next.getY$());
}
});

Clazz.newMeth(C$, 'isClosed$',  function () {
if (this.vertices.size$() < 3) return false;
var pt=this.vertices.get$I(this.vertices.size$() - 1);
return pt.getX$() == 0  && pt.getY$() == 0  ;
});

Clazz.newMeth(C$, 'modify$',  function () {
var array=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.vertices]);
this.reset$();
this.vertices.clear$();
var n=array.size$();
for (var i=0; i < n; i++) {
var next=array.get$I(i);
this.add$D$D(next.getX$(), next.getY$());
}
});

Clazz.newMeth(C$, 'setClosed$Z',  function (close) {
if (close && (this.isClosed$() || this.vertices.size$() < 3 ) ) return;
if (!close && this.vertices.size$() <= 1 ) return;
if (close) this.add$D$D(0, 0);
 else {
this.reset$();
var array=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.vertices]);
this.vertices.clear$();
var n=array.size$() - 1;
for (var i=0; i < n; i++) {
var next=array.get$I(i);
this.add$D$D(next.getX$(), next.getY$());
}
}});

Clazz.newMeth(C$, 'add$D$D',  function (x, y) {
if (this.getCurrentPoint$() == null ) this.moveTo$D$D(x, y);
 else this.lineTo$D$D(x, y);
this.vertices.add$O(this.getCurrentPoint$());
});

C$.$static$=function(){C$.$static$=0;
C$.pts=Clazz.array(Double.TYPE, [6]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
control.setValue$S$O("position", Clazz.array(Double.TYPE, -1, [step.position.x, step.position.y]));
control.setValue$S$O("size", Clazz.array(Integer.TYPE, -1, [step.width, step.height]));
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var position=control.getObject$S("position");
step.position.setXY$D$D(position[0], position[1]);
var size=control.getObject$S("size");
step.setShapeSize$D$D(size[0], size[1]);
step.dataValid=false;
step.rgbRegion.firePropertyChange$S$O$O("step", null,  new Integer(step.n));
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
