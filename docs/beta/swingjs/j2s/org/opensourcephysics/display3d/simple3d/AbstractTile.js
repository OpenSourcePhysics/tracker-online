(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'java.awt.Color','org.opensourcephysics.display3d.simple3d.Object3D']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractTile", null, 'org.opensourcephysics.display3d.simple3d.Element');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numberOfTiles=0;
this.corners=null;
this.drawQuickInterior=false;
this.interiorTransparency=128;
this.levelBelowWhenEqual=true;
this.levelx=0.0;
this.levely=0.0;
this.levelz=0.0;
this.leveldx=0.0;
this.leveldy=0.0;
this.leveldz=1.0;
this.levelZ=null;
this.levelColors=null;
this.a=(null|0);
this.b=(null|0);
this.pixel=Clazz.array(Double.TYPE, [3]);
this.center=Clazz.array(Double.TYPE, [3]);
this.pixelOrigin=Clazz.array(Double.TYPE, [3]);
this.objects=null;
},1);

C$.$fields$=[['Z',['drawQuickInterior','levelBelowWhenEqual'],'D',['levelx','levely','levelz','leveldx','leveldy','leveldz'],'I',['numberOfTiles','interiorTransparency'],'O',['corners','double[][][]','levelZ','double[]','levelColors','java.awt.Color[]','a','int[][]','+b','pixel','double[]','+center','+pixelOrigin','objects','org.opensourcephysics.display3d.simple3d.Object3D[]']]]

Clazz.newMeth(C$, 'setDrawQuickInterior$Z$I',  function (draw, transparency) {
this.drawQuickInterior=draw;
this.interiorTransparency=Math.max(0, Math.min(transparency, 255));
});

Clazz.newMeth(C$, 'setColorBelowWhenEqual$Z',  function (belowWhenEqual) {
this.levelBelowWhenEqual=belowWhenEqual;
});

Clazz.newMeth(C$, 'setColorOriginAndDirection$DA$DA',  function (origin, direction) {
this.levelx=origin[0];
this.levely=origin[1];
this.levelz=origin[2];
this.leveldx=direction[0];
this.leveldy=direction[1];
this.leveldz=direction[2];
});

Clazz.newMeth(C$, 'setColorRegions$DA$java_awt_ColorA',  function (thresholds, colors) {
if ((thresholds == null ) || (colors == null ) ) {
this.levelZ=null;
this.levelColors=null;
return;
}this.levelZ=Clazz.array(Double.TYPE, [thresholds.length]);
this.levelColors=Clazz.array($I$(1), [thresholds.length + 1]);
for (var i=0; i < thresholds.length; i++) {
this.levelZ[i]=thresholds[i];
}
for (var i=0; i < thresholds.length + 1; i++) {
if (i < colors.length) {
this.levelColors[i]=colors[i];
} else {
this.levelColors[i]=colors[colors.length - 1];
}}
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$()) {
this.computeCorners$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}if (this.numberOfTiles < 1) {
return null;
}return this.objects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
if (this.levelZ != null ) {
p$1.drawColorCoded$java_awt_Graphics2D$I.apply(this, [_g2, _index]);
return;
}var sides=this.corners[_index].length;
if (this.getRealStyle$().isDrawingFill$()) {
_g2.setPaint$java_awt_Paint(this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getFillColor$(), this.objects[_index].getDistance$()));
_g2.fillPolygon$IA$IA$I(this.a[_index], this.b[_index], sides);
}if (this.getRealStyle$().isDrawingLines$()) {
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[_index].getDistance$()));
_g2.drawPolygon$IA$IA$I(this.a[_index], this.b[_index], sides);
}});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$()) {
return;
}if (this.hasChanged$()) {
this.computeCorners$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}if (this.numberOfTiles < 1) {
return;
}_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
if (this.getRealStyle$().isDrawingFill$() || this.drawQuickInterior ) {
var fillColor=this.getRealStyle$().getFillColor$();
if (this.drawQuickInterior && (fillColor.getAlpha$() > this.interiorTransparency) ) {
fillColor=Clazz.new_([fillColor.getRed$(), fillColor.getGreen$(), fillColor.getBlue$(), this.interiorTransparency],$I$(1,1).c$$I$I$I$I);
}_g2.setPaint$java_awt_Paint(fillColor);
for (var i=0; i < this.numberOfTiles; i++) {
_g2.fillPolygon$IA$IA$I(this.a[i], this.b[i], this.corners[i].length);
}
}if (this.getRealStyle$().isDrawingLines$()) {
_g2.setColor$java_awt_Color(this.getRealStyle$().getLineColor$());
for (var i=0; i < this.numberOfTiles; i++) {
_g2.drawPolygon$IA$IA$I(this.a[i], this.b[i], this.corners[i].length);
}
}});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$()) {
this.computeCorners$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}if (this.numberOfTiles < 1) {
return null;
}if (this.targetPosition.isEnabled$() && (Math.abs(this.pixelOrigin[0] - x) < 5 ) && (Math.abs(this.pixelOrigin[1] - y) < 5 )  ) {
return this.targetPosition;
}return null;
});

Clazz.newMeth(C$, 'setCorners$DAAA',  function (_data) {
this.corners=_data;
if (this.corners == null ) {
this.numberOfTiles=0;
this.a=null;
this.b=null;
return;
}this.numberOfTiles=this.corners.length;
this.a=Clazz.array(Integer.TYPE, [this.numberOfTiles, null]);
this.b=Clazz.array(Integer.TYPE, [this.numberOfTiles, null]);
this.objects=Clazz.array($I$(2), [this.numberOfTiles]);
for (var i=0; i < this.numberOfTiles; i++) {
var sides=this.corners[i].length;
this.a[i]=Clazz.array(Integer.TYPE, [sides]);
this.b[i]=Clazz.array(Integer.TYPE, [sides]);
this.objects[i]=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, i]);
}
});

Clazz.newMeth(C$, 'projectPoints$',  function () {
for (var i=0; i < this.numberOfTiles; i++) {
var sides=this.corners[i].length;
for (var k=0; k < 3; k++) {
this.center[k]=0.0;
}
for (var j=0; j < sides; j++) {
this.getDrawingPanel3D$().project$DA$DA(this.corners[i][j], this.pixel);
this.a[i][j]=(this.pixel[0]|0);
this.b[i][j]=(this.pixel[1]|0);
for (var k=0; k < 3; k++) {
this.center[k]+=this.corners[i][j][k];
}
}
for (var k=0; k < 3; k++) {
this.center[k]/=sides;
}
this.getDrawingPanel3D$().project$DA$DA(this.center, this.pixel);
this.objects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
this.getDrawingPanel3D$().project$DA$DA(this.getHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget(this.targetPosition), this.pixelOrigin);
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'levelScalarProduct$DA',  function (point) {
return (point[0] - this.levelx) * this.leveldx + (point[1] - this.levely) * this.leveldy + (point[2] - this.levelz) * this.leveldz;
}, p$1);

Clazz.newMeth(C$, 'drawColorCoded$java_awt_Graphics2D$I',  function (_g2, _index) {
var sides=this.corners[_index].length;
var region=Clazz.array(Integer.TYPE, [sides]);
if (this.levelBelowWhenEqual) {
for (var j=0; j < sides; j++) {
region[j]=0;
var level=p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][j]]);
for (var k=this.levelZ.length - 1; k >= 0; k--) {
if (level > this.levelZ[k] ) {
region[j]=k + 1;
break;
}}
}
} else {
for (var j=0; j < sides; j++) {
region[j]=this.levelZ.length;
var level=p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][j]]);
for (var k=0, l=this.levelZ.length; k < l; k++) {
if (level < this.levelZ[k] ) {
region[j]=k;
break;
}}
}
}var newCornersA=Clazz.array(Integer.TYPE, [sides * 2]);
var newCornersB=Clazz.array(Integer.TYPE, [sides * 2]);
for (var k=0, l=this.levelZ.length; k <= l; k++) {
var newCornersCounter=0;
for (var j=0; j < sides; j++) {
var next=(j + 1) % sides;
if ((region[j] <= k) && (region[next] >= k) ) {
if (region[j] == k) {
newCornersA[newCornersCounter]=this.a[_index][j];
newCornersB[newCornersCounter]=this.b[_index][j];
++newCornersCounter;
} else {
var t=p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][j]]);
t=(this.levelZ[k - 1] - t) / (p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][next]]) - t);
newCornersA[newCornersCounter]=Long.$ival(Math.round$D(this.a[_index][j] + t * (this.a[_index][next] - this.a[_index][j])));
newCornersB[newCornersCounter]=Long.$ival(Math.round$D(this.b[_index][j] + t * (this.b[_index][next] - this.b[_index][j])));
++newCornersCounter;
}if (region[next] > k) {
var t=p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][j]]);
t=(this.levelZ[k] - t) / (p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][next]]) - t);
newCornersA[newCornersCounter]=Long.$ival(Math.round$D(this.a[_index][j] + t * (this.a[_index][next] - this.a[_index][j])));
newCornersB[newCornersCounter]=Long.$ival(Math.round$D(this.b[_index][j] + t * (this.b[_index][next] - this.b[_index][j])));
++newCornersCounter;
}} else if ((region[j] >= k) && (region[next] <= k) ) {
if (region[j] == k) {
newCornersA[newCornersCounter]=this.a[_index][j];
newCornersB[newCornersCounter]=this.b[_index][j];
++newCornersCounter;
} else {
var t=p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][j]]);
t=(this.levelZ[k] - t) / (p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][next]]) - t);
newCornersA[newCornersCounter]=Long.$ival(Math.round$D(this.a[_index][j] + t * (this.a[_index][next] - this.a[_index][j])));
newCornersB[newCornersCounter]=Long.$ival(Math.round$D(this.b[_index][j] + t * (this.b[_index][next] - this.b[_index][j])));
++newCornersCounter;
}if (region[next] < k) {
var t=p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][j]]);
t=(this.levelZ[k - 1] - t) / (p$1.levelScalarProduct$DA.apply(this, [this.corners[_index][next]]) - t);
newCornersA[newCornersCounter]=Long.$ival(Math.round$D(this.a[_index][j] + t * (this.a[_index][next] - this.a[_index][j])));
newCornersB[newCornersCounter]=Long.$ival(Math.round$D(this.b[_index][j] + t * (this.b[_index][next] - this.b[_index][j])));
++newCornersCounter;
}}}
if (newCornersCounter > 0) {
var theFillColor=this.levelColors[k];
_g2.setPaint$java_awt_Paint(theFillColor);
_g2.fillPolygon$IA$IA$I(newCornersA, newCornersB, newCornersCounter);
}}
_g2.setColor$java_awt_Color(this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[_index].getDistance$()));
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.drawPolygon$IA$IA$I(this.a[_index], this.b[_index], sides);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
