(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,['org.opensourcephysics.media.core.ImageCoordSystem','.FrameData'],'org.opensourcephysics.media.core.ImageCoordSystem',['java.awt.geom.Point2D','.Double'],'java.util.TreeSet','org.opensourcephysics.media.core.TransformArray','org.opensourcephysics.media.core.DoubleArray','org.opensourcephysics.controls.XML',['org.opensourcephysics.media.core.ImageCoordSystem','.FrameDataLoader'],['org.opensourcephysics.media.core.ImageCoordSystem','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageCoordSystem", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported']);
C$.$classes$=[['Loader',9],['FrameData',9],['FrameDataLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.point=Clazz.new_($I$(3,1));
this.keyFrames=Clazz.new_($I$(4,1));
this.firePropChange=true;
this.isAdjusting=false;
this.fixedOrigin=true;
this.fixedAngle=true;
this.fixedScale=true;
this.locked=false;
this.updateToKeyFrames=true;
},1);

C$.$fields$=[['Z',['ignoreUpdateRequests','firePropChange','isAdjusting','fixedOrigin','fixedAngle','fixedScale','locked','updateToKeyFrames'],'I',['length'],'O',['point','java.awt.geom.Point2D','toImage','org.opensourcephysics.media.core.TransformArray','+toWorld','scaleX','org.opensourcephysics.media.core.DoubleArray','+scaleY','+originX','+originY','+cosine','+sine','keyFrames','java.util.TreeSet']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (length) {
Clazz.super_(C$, this);
this.length=length;
this.toImage=Clazz.new_($I$(5,1).c$$I,[length]);
this.toWorld=Clazz.new_($I$(5,1).c$$I,[length]);
this.scaleX=Clazz.new_($I$(6,1).c$$I$D,[length, 1]);
this.scaleY=Clazz.new_($I$(6,1).c$$I$D,[length, 1]);
this.originX=Clazz.new_($I$(6,1).c$$I$D,[length, 0]);
this.originY=Clazz.new_($I$(6,1).c$$I$D,[length, 0]);
this.cosine=Clazz.new_($I$(6,1).c$$I$D,[length, 1]);
this.sine=Clazz.new_($I$(6,1).c$$I$D,[length, 0]);
this.updateAllTransforms$();
}, 1);

Clazz.newMeth(C$, 'c$$I$org_opensourcephysics_media_core_Video',  function (frameCount, adapter) {
C$.c$$I.apply(this, [frameCount]);
this.addPropertyChangeListener$java_beans_PropertyChangeListener(adapter);
}, 1);

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
this.locked=locked;
this.firePropertyChange$S$O$O("locked", null, Boolean.valueOf$Z(locked));
});

Clazz.newMeth(C$, 'isLocked$',  function () {
return this.locked;
});

Clazz.newMeth(C$, 'setAllValuesToFrame$I',  function (n) {
this.setAllOriginsXY$D$D(this.getOriginX$I(n), this.getOriginY$I(n));
this.setAllCosineSines$D$D(this.getCosine$I(n), this.getSine$I(n));
this.setAllScalesXY$D$D(this.getScaleX$I(n), this.getScaleY$I(n));
this.keyFrames.clear$();
});

Clazz.newMeth(C$, 'setFixedOrigin$Z',  function (fixed) {
this.setFixedOrigin$Z$I(fixed, 0);
});

Clazz.newMeth(C$, 'setFixedOrigin$Z$I',  function (fixed, n) {
if (fixed && this.fixedAngle && this.fixedScale  ) {
this.keyFrames.clear$();
}if (this.fixedOrigin == fixed ) {
return;
}this.fixedOrigin=fixed;
if (fixed) {
this.setAllOriginsXY$D$D(this.getOriginX$I(n), this.getOriginY$I(n));
}this.firePropertyChange$S$O$O("fixed_origin", Boolean.valueOf$Z(!fixed), Boolean.valueOf$Z(fixed));
});

Clazz.newMeth(C$, 'isFixedOrigin$',  function () {
return this.fixedOrigin;
});

Clazz.newMeth(C$, 'setFixedAngle$Z',  function (fixed) {
this.setFixedAngle$Z$I(fixed, 0);
});

Clazz.newMeth(C$, 'setFixedAngle$Z$I',  function (fixed, n) {
if (fixed && this.fixedOrigin && this.fixedScale  ) {
this.keyFrames.clear$();
}if (this.fixedAngle == fixed ) {
return;
}this.fixedAngle=fixed;
if (fixed) {
this.setAllCosineSines$D$D(this.getCosine$I(n), this.getSine$I(n));
}this.firePropertyChange$S$O$O("fixed_angle", Boolean.valueOf$Z(!fixed), Boolean.valueOf$Z(fixed));
});

Clazz.newMeth(C$, 'isFixedAngle$',  function () {
return this.fixedAngle;
});

Clazz.newMeth(C$, 'setFixedScale$Z',  function (fixed) {
this.fixedScale=fixed;
});

Clazz.newMeth(C$, 'setFixedScale$Z$I',  function (fixed, n) {
if (fixed && this.fixedOrigin && this.fixedAngle  ) {
this.keyFrames.clear$();
}if (this.fixedScale == fixed ) {
return;
}this.fixedScale=fixed;
if (fixed) {
this.setAllScalesXY$D$D(this.getScaleX$I(n), this.getScaleY$I(n));
}this.firePropertyChange$S$O$O("fixed_scale", Boolean.valueOf$Z(!fixed), Boolean.valueOf$Z(fixed));
});

Clazz.newMeth(C$, 'isFixedScale$',  function () {
return this.fixedScale;
});

Clazz.newMeth(C$, 'getScaleX$I',  function (n) {
return this.scaleX.get$I(n);
});

Clazz.newMeth(C$, 'getScaleY$I',  function (n) {
return this.scaleY.get$I(n);
});

Clazz.newMeth(C$, 'setScaleX$I$D',  function (n, value) {
if (this.isLocked$()) {
return;
}if (this.isFixedScale$()) {
this.setAllScalesX$D(value);
return;
}if (n >= this.length) {
this.setLength$I(n + 1);
}if (this.updateToKeyFrames) {
var end=this.length - 1;
for (var next, $next = this.keyFrames.iterator$(); $next.hasNext$()&&((next=($next.next$()).intValue$()),1);) {
if (next > n) {
end=next - 1;
break;
}}
this.setScalesX$I$I$D(n, end, value);
this.keyFrames.add$O(Integer.valueOf$I(n));
return;
}if (this.scaleX.set$I$D(n, value)) {
try {
p$1.updateTransforms$I.apply(this, [n]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'setAllScalesX$D',  function (value) {
if (this.isLocked$()) {
return;
}if (this.scaleX.fill$D(value)) {
this.updateAllTransforms$();
}});

Clazz.newMeth(C$, 'setScalesX$I$I$D',  function (start, end, value) {
if (this.isLocked$()) {
return;
}if (this.scaleX.fill$D$I$I(value, start, end)) {
p$1.updateTransforms$I$I.apply(this, [start, end]);
}});

Clazz.newMeth(C$, 'setScaleY$I$D',  function (n, value) {
if (this.isLocked$()) {
return;
}if (this.isFixedScale$()) {
this.setAllScalesY$D(value);
return;
}if (n >= this.length) {
this.setLength$I(n + 1);
}if (this.updateToKeyFrames) {
var end=this.length - 1;
for (var next, $next = this.keyFrames.iterator$(); $next.hasNext$()&&((next=($next.next$()).intValue$()),1);) {
if (next > n) {
end=next - 1;
break;
}}
this.setScalesY$I$I$D(n, end, value);
this.keyFrames.add$O(Integer.valueOf$I(n));
return;
}if (this.scaleY.set$I$D(n, value)) {
try {
p$1.updateTransforms$I.apply(this, [n]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'setAllScalesY$D',  function (value) {
if (this.isLocked$()) {
return;
}if (this.scaleY.fill$D(value)) {
this.updateAllTransforms$();
}});

Clazz.newMeth(C$, 'setScalesY$I$I$D',  function (start, end, value) {
if (this.isLocked$()) {
return;
}if (this.scaleY.fill$D$I$I(value, start, end)) {
p$1.updateTransforms$I$I.apply(this, [start, end]);
}});

Clazz.newMeth(C$, 'setScaleXY$I$D$D',  function (n, valueX, valueY) {
if (this.isLocked$()) {
return false;
}if (this.isFixedScale$()) {
this.setAllScalesXY$D$D(valueX, valueY);
return false;
}if (n >= this.length) {
this.setLength$I(n + 1);
}if (this.updateToKeyFrames) {
var end=this.length - 1;
for (var next, $next = this.keyFrames.iterator$(); $next.hasNext$()&&((next=($next.next$()).intValue$()),1);) {
if (next > n) {
end=next - 1;
break;
}}
this.setScalesXY$I$I$D$D(n, end, valueX, valueY);
this.keyFrames.add$O(Integer.valueOf$I(n));
return true;
}var changed=this.scaleX.set$I$D(n, valueX);
changed=this.scaleY.set$I$D(n, valueY) || changed ;
if (changed) {
try {
p$1.updateTransforms$I.apply(this, [n]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
return false;
} else {
throw ex;
}
}
}return true;
});

Clazz.newMeth(C$, 'setAllScalesXY$D$D',  function (valueX, valueY) {
if (this.isLocked$()) {
return;
}var changed=this.scaleX.fill$D(valueX);
changed=this.scaleY.fill$D(valueY) || changed ;
if (changed) {
this.updateAllTransforms$();
}});

Clazz.newMeth(C$, 'setScalesXY$I$I$D$D',  function (start, end, valueX, valueY) {
if (this.isLocked$()) {
return;
}var changed=this.scaleX.fill$D$I$I(valueX, start, end);
changed=this.scaleY.fill$D$I$I(valueY, start, end) || changed ;
if (changed) {
p$1.updateTransforms$I$I.apply(this, [start, end]);
}});

Clazz.newMeth(C$, 'getOriginX$I',  function (n) {
return this.originX.get$I(n);
});

Clazz.newMeth(C$, 'getOriginY$I',  function (n) {
return this.originY.get$I(n);
});

Clazz.newMeth(C$, 'setOriginXY$I$D$D',  function (n, valueX, valueY) {
if (this.isLocked$()) {
return;
}if (this.isFixedOrigin$()) {
this.setAllOriginsXY$D$D(valueX, valueY);
return;
}if (n >= this.length) {
this.setLength$I(n + 1);
}if (this.updateToKeyFrames) {
var end=this.length - 1;
for (var next, $next = this.keyFrames.iterator$(); $next.hasNext$()&&((next=($next.next$()).intValue$()),1);) {
if (next > n) {
end=next - 1;
break;
}}
this.setOriginsXY$I$I$D$D(n, end, valueX, valueY);
this.keyFrames.add$O(Integer.valueOf$I(n));
return;
}var changed=this.originX.set$I$D(n, valueX);
changed=this.originY.set$I$D(n, valueY) || changed ;
if (changed) {
try {
p$1.updateTransforms$I.apply(this, [n]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'setAllOriginsXY$D$D',  function (valueX, valueY) {
if (this.isLocked$()) {
return;
}var changed=this.originX.fill$D(valueX);
changed=this.originY.fill$D(valueY) || changed ;
if (changed) {
this.updateAllTransforms$();
}});

Clazz.newMeth(C$, 'setOriginsXY$I$I$D$D',  function (start, end, valueX, valueY) {
if (this.isLocked$()) {
return;
}var changed=this.originX.fill$D$I$I(valueX, start, end);
changed=this.originY.fill$D$I$I(valueY, start, end) || changed ;
if (changed) {
p$1.updateTransforms$I$I.apply(this, [start, end]);
}});

Clazz.newMeth(C$, 'getCosine$I',  function (n) {
return this.cosine.get$I(n);
});

Clazz.newMeth(C$, 'getSine$I',  function (n) {
return this.sine.get$I(n);
});

Clazz.newMeth(C$, 'setCosineSine$I$D$D',  function (n, cos, sin) {
if (this.isLocked$()) {
return;
}if (this.isFixedAngle$()) {
this.setAllCosineSines$D$D(cos, sin);
return;
}if (n >= this.length) {
this.setLength$I(n + 1);
}if (this.updateToKeyFrames) {
var end=this.length - 1;
for (var next, $next = this.keyFrames.iterator$(); $next.hasNext$()&&((next=($next.next$()).intValue$()),1);) {
if (next > n) {
end=next - 1;
break;
}}
this.setCosineSines$I$I$D$D(n, end, cos, sin);
this.keyFrames.add$O(Integer.valueOf$I(n));
return;
}var d=Math.sqrt(cos * cos + sin * sin);
var changed;
if (d == 0 ) {
changed=this.cosine.set$I$D(n, 1);
changed=this.sine.set$I$D(n, 0) || changed ;
} else {
changed=this.cosine.set$I$D(n, cos / d);
changed=this.sine.set$I$D(n, sin / d) || changed ;
}if (changed) {
try {
p$1.updateTransforms$I.apply(this, [n]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'setAllCosineSines$D$D',  function (cos, sin) {
if (this.isLocked$()) {
return;
}var d=Math.sqrt(cos * cos + sin * sin);
var changed;
if (d == 0 ) {
changed=this.cosine.fill$D(1);
changed=this.sine.fill$D(0) || changed ;
} else {
changed=this.cosine.fill$D(cos / d);
changed=this.sine.fill$D(sin / d) || changed ;
}if (changed) {
this.updateAllTransforms$();
}});

Clazz.newMeth(C$, 'setCosineSines$I$I$D$D',  function (start, end, cos, sin) {
if (this.isLocked$()) {
return;
}var d=Math.sqrt(cos * cos + sin * sin);
var changed;
if (d == 0 ) {
changed=this.cosine.fill$D$I$I(1, start, end);
changed=this.sine.fill$D$I$I(0, start, end) || changed ;
} else {
changed=this.cosine.fill$D$I$I(cos / d, start, end);
changed=this.sine.fill$D$I$I(sin / d, start, end) || changed ;
}if (changed) {
p$1.updateTransforms$I$I.apply(this, [start, end]);
}});

Clazz.newMeth(C$, 'getAngle$I',  function (n) {
return Math.atan2(this.getSine$I(n), this.getCosine$I(n));
});

Clazz.newMeth(C$, 'setAngle$I$D',  function (n, theta) {
if (this.isLocked$()) {
return;
}this.setCosineSine$I$D$D(n, Math.cos(theta), Math.sin(theta));
});

Clazz.newMeth(C$, 'setAllAngles$D',  function (theta) {
if (this.isLocked$()) {
return;
}this.setAllCosineSines$D$D(Math.cos(theta), Math.sin(theta));
});

Clazz.newMeth(C$, 'setLength$I',  function (count) {
if (this.isLocked$()) {
return;
}this.length=count;
this.toImage.setLength$I(this.length);
this.toWorld.setLength$I(this.length);
this.scaleX.setLength$I(this.length);
this.scaleY.setLength$I(this.length);
this.originX.setLength$I(this.length);
this.originY.setLength$I(this.length);
this.cosine.setLength$I(this.length);
this.sine.setLength$I(this.length);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'imageToWorldX$I$D$D',  function (n, imageX, imageY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(imageX, imageY);
this.toWorld.get$I(n).transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getX$();
});

Clazz.newMeth(C$, 'imageToWorldY$I$D$D',  function (n, imageX, imageY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(imageX, imageY);
this.toWorld.get$I(n).transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getY$();
});

Clazz.newMeth(C$, 'worldToImageX$I$D$D',  function (n, worldX, worldY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(worldX, worldY);
this.toImage.get$I(n).transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getX$();
});

Clazz.newMeth(C$, 'worldToImageY$I$D$D',  function (n, worldX, worldY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(worldX, worldY);
this.toImage.get$I(n).transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getY$();
});

Clazz.newMeth(C$, 'imageToWorldXComponent$I$D$D',  function (n, imageX, imageY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(imageX, imageY);
this.toWorld.get$I(n).deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getX$();
});

Clazz.newMeth(C$, 'imageToWorldYComponent$I$D$D',  function (n, imageX, imageY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(imageX, imageY);
this.toWorld.get$I(n).deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getY$();
});

Clazz.newMeth(C$, 'worldToImageXComponent$I$D$D',  function (n, worldX, worldY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(worldX, worldY);
this.toImage.get$I(n).deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getX$();
});

Clazz.newMeth(C$, 'worldToImageYComponent$I$D$D',  function (n, worldX, worldY) {
if (n >= this.length) {
this.setLength$I(n + 1);
}this.point.setLocation$D$D(worldX, worldY);
this.toImage.get$I(n).deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.point, this.point);
return this.point.getY$();
});

Clazz.newMeth(C$, 'getToImageTransform$I',  function (n) {
if (n >= this.length) {
this.setLength$I(n + 1);
}return this.toImage.get$I(n).clone$();
});

Clazz.newMeth(C$, 'getToWorldTransform$I',  function (n) {
if (n >= this.length) {
this.setLength$I(n + 1);
}return this.toWorld.get$I(n).clone$();
});

Clazz.newMeth(C$, 'setAdjusting$Z',  function (adjusting) {
if (this.isAdjusting == adjusting ) return;
this.isAdjusting=adjusting;
this.firePropertyChange$S$O$O("adjusting", this, Boolean.valueOf$Z(adjusting));
});

Clazz.newMeth(C$, 'isAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'getKeyFrames$',  function () {
return this.keyFrames;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
$I$(7,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(1)), Clazz.new_($I$(8,1))]);
return Clazz.new_($I$(9,1));
}, 1);

Clazz.newMeth(C$, 'updateAllTransforms$',  function () {
try {
this.firePropChange=false;
for (var i=0; i < this.length; i++) {
p$1.updateTransforms$I.apply(this, [i]);
}
this.firePropChange=true;
this.firePropertyChange$S$O$O("transform", null, null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'updateTransforms$I',  function (n) {
var at=this.toImage.get$I(n);
var tx=this.originX.get$I(n);
var ty=this.originY.get$I(n);
var sx=this.scaleX.get$I(n);
var sy=this.scaleY.get$I(n);
var cos=this.cosine.get$I(n);
var sin=this.sine.get$I(n);
at.setTransform$D$D$D$D$D$D(sx * cos, -sy * sin, -sx * sin, -sy * cos, tx, ty);
this.toWorld.get$I(n).setTransform$java_awt_geom_AffineTransform(at.createInverse$());
if (this.firePropChange) {
this.firePropertyChange$S$O$O("transform", null, Integer.valueOf$I(n));
}}, p$1);

Clazz.newMeth(C$, 'updateTransforms$I$I',  function (start, end) {
try {
this.firePropChange=false;
for (var i=start; i < this.length; i++) {
p$1.updateTransforms$I.apply(this, [i]);
}
this.firePropChange=true;
this.firePropertyChange$S$O$O("transform", null, null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'addPropertyChangeListenerSafely$java_beans_PropertyChangeListener',  function (listener) {
C$.superclazz.prototype.addPropertyChangeListener$java_beans_PropertyChangeListener.apply(this, [listener]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageCoordSystem, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var coords=obj;
control.setValue$S$Z("fixedorigin", coords.isFixedOrigin$());
control.setValue$S$Z("fixedangle", coords.isFixedAngle$());
control.setValue$S$Z("fixedscale", coords.isFixedScale$());
control.setValue$S$Z("locked", coords.isLocked$());
var count=coords.getLength$();
if (coords.isFixedAngle$() && coords.isFixedOrigin$() && coords.isFixedScale$()  ) {
count=1;
}var data=Clazz.array($I$(1), [count]);
for (var n=0; n < count; n++) {
if (n == 0 || coords.keyFrames.contains$O(Integer.valueOf$I(n)) ) {
data[n]=Clazz.new_($I$(1,1).c$$org_opensourcephysics_media_core_ImageCoordSystem$I,[coords, n]);
}}
control.setValue$S$O("framedata", data);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var coords=obj;
coords.setLocked$Z(false);
coords.setFixedOrigin$Z(control.getBoolean$S("fixedorigin"));
coords.setFixedAngle$Z(control.getBoolean$S("fixedangle"));
var isFixed=control.getBoolean$S("fixedscale");
coords.setFixedScale$Z(isFixed);
var data=control.getObject$S("framedata");
coords.setLength$I(Math.max(coords.getLength$(), data.length));
var doScale=true;
for (var n=0; n < data.length; n++) {
if (data[n] == null ) continue;
coords.setOriginXY$I$D$D(n, data[n].xo, data[n].yo);
coords.setAngle$I$D(n, data[n].an * 3.141592653589793 / 180);
doScale=doScale && coords.setScaleXY$I$D$D(n, data[n].xs, data[n].ys) ;
}
coords.setLocked$Z(control.getBoolean$S("locked"));
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageCoordSystem, "FrameData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['xo','yo','an','xs','ys']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_ImageCoordSystem$I',  function (coords, n) {
;C$.$init$.apply(this);
this.xo=coords.getOriginX$I(n);
this.yo=coords.getOriginY$I(n);
this.an=coords.getAngle$I(n) * 180 / 3.141592653589793;
this.xs=coords.getScaleX$I(n);
this.ys=coords.getScaleY$I(n);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageCoordSystem, "FrameDataLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$D("xorigin", data.xo);
control.setValue$S$D("yorigin", data.yo);
control.setValue$S$D("angle", data.an);
control.setValue$S$D("xscale", data.xs);
control.setValue$S$D("yscale", data.ys);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
data.xo=control.getDouble$S("xorigin");
data.yo=control.getDouble$S("yorigin");
data.an=control.getDouble$S("angle");
data.xs=control.getDouble$S("xscale");
data.ys=control.getDouble$S("yscale");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
