(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.numerics.VectorMath','org.opensourcephysics.display3d.simple3d.Camera',['org.opensourcephysics.display3d.simple3d.Camera','.Projection'],'org.opensourcephysics.numerics.Quaternion',['org.opensourcephysics.display3d.simple3d.Camera','.CameraLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Camera", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display3d.core.Camera');
C$.$classes$=[['Projection',2],['CameraLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.projectionMode=11;
this.rotationAngle=0;
this.alpha=0.0;
this.beta=0.0;
this.cosAlpha=1;
this.sinAlpha=0;
this.cosBeta=1;
this.sinBeta=0;
this.cosRot=1;
this.sinRot=0;
this.projection=Clazz.new_($I$(3,1),[this, null]);
this.rotation=Clazz.new_($I$(4,1).c$$D$D$D$D,[1, 0, 0, 0]);
},1);

C$.$fields$=[['D',['posX','posY','posZ','focusX','focusY','focusZ','distanceToScreen','rotationAngle','alpha','beta','distanceToFocus','panelMaxSizeConstant','cosAlpha','sinAlpha','cosBeta','sinBeta','cosRot','sinRot'],'I',['projectionMode'],'O',['+e1','+e2','+e3','projection','org.opensourcephysics.display3d.simple3d.Camera.Projection','rotation','org.opensourcephysics.numerics.Quaternion','panel','org.opensourcephysics.display3d.simple3d.DrawingPanel3D']]
,['O',['vertical','double[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (aPanel) {
;C$.$init$.apply(this);
this.panel=aPanel;
}, 1);

Clazz.newMeth(C$, 'setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (aPanel) {
this.panel=aPanel;
});

Clazz.newMeth(C$, 'setProjectionMode$I',  function (mode) {
this.projectionMode=mode;
if (this.panel != null ) {
this.panelMaxSizeConstant=this.panel.getMaximum3DSize$() * 0.01;
this.panel.cameraChanged$I(1);
}});

Clazz.newMeth(C$, 'getProjectionMode$',  function () {
return this.projectionMode;
});

Clazz.newMeth(C$, 'reset$',  function () {
var center=this.panel.getCenter$();
this.focusX=center[0];
this.focusY=center[1];
this.focusZ=center[2];
this.panelMaxSizeConstant=this.panel.getMaximum3DSize$();
this.rotationAngle=0;
this.cosRot=1;
this.sinRot=0;
this.distanceToScreen=2.5 * this.panelMaxSizeConstant;
this.distanceToFocus=2.0 * this.panelMaxSizeConstant;
this.posX=center[0] + this.distanceToFocus;
this.posY=center[1];
this.posZ=center[2];
this.alpha=0;
this.cosAlpha=1;
this.sinAlpha=0;
this.beta=0;
this.cosBeta=1;
this.sinBeta=0;
this.e1=Clazz.array(Double.TYPE, -1, [-1, 0, 0]);
this.e2=Clazz.array(Double.TYPE, -1, [0, 1, 0]);
this.e3=Clazz.array(Double.TYPE, -1, [0, 0, 1]);
this.panelMaxSizeConstant*=0.01;
this.panel.cameraChanged$I(0);
});

Clazz.newMeth(C$, 'setXYZ$D$D$D',  function (x, y, z) {
this.posX=x;
this.posY=y;
this.posZ=z;
p$1.updateCamera$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'setXYZ$DA',  function (point) {
this.setXYZ$D$D$D(point[0], point[1], point[2]);
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.posX;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.posY;
});

Clazz.newMeth(C$, 'getZ$',  function () {
return this.posZ;
});

Clazz.newMeth(C$, 'setFocusXYZ$D$D$D',  function (x, y, z) {
this.focusX=x;
this.focusY=y;
this.focusZ=z;
p$1.updateCamera$I.apply(this, [3]);
});

Clazz.newMeth(C$, 'setFocusXYZ$DA',  function (point) {
this.setFocusXYZ$D$D$D(point[0], point[1], point[2]);
});

Clazz.newMeth(C$, 'getFocusX$',  function () {
return this.focusX;
});

Clazz.newMeth(C$, 'getFocusY$',  function () {
return this.focusY;
});

Clazz.newMeth(C$, 'getFocusZ$',  function () {
return this.focusZ;
});

Clazz.newMeth(C$, 'setRotation$D',  function (angle) {
this.rotationAngle=angle;
this.cosRot=Math.cos(this.rotationAngle / 2);
this.sinRot=Math.sin(this.rotationAngle / 2);
p$1.updateCamera$I.apply(this, [4]);
});

Clazz.newMeth(C$, 'getRotation$',  function () {
return this.rotationAngle;
});

Clazz.newMeth(C$, 'setDistanceToScreen$D',  function (distance) {
this.distanceToScreen=distance;
if (this.panel != null ) {
this.panel.cameraChanged$I(5);
}});

Clazz.newMeth(C$, 'getDistanceToScreen$',  function () {
return this.distanceToScreen;
});

Clazz.newMeth(C$, 'setAzimuth$D',  function (angle) {
this.alpha=angle;
this.cosAlpha=Math.cos(this.alpha);
this.sinAlpha=Math.sin(this.alpha);
p$1.updateCamera$I.apply(this, [6]);
});

Clazz.newMeth(C$, 'getAzimuth$',  function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setAltitude$D',  function (angle) {
this.beta=angle;
if (this.beta < -1.5707963267948966 ) {
this.beta=-1.5707963267948966;
} else if (this.beta > 1.5707963267948966 ) {
this.beta=1.5707963267948966;
}this.cosBeta=Math.cos(this.beta);
this.sinBeta=Math.sin(this.beta);
p$1.updateCamera$I.apply(this, [6]);
});

Clazz.newMeth(C$, 'getAltitude$',  function () {
return this.beta;
});

Clazz.newMeth(C$, 'setAzimuthAndAltitude$D$D',  function (azimuth, altitude) {
this.alpha=azimuth;
this.beta=altitude;
if (this.beta < -1.5707963267948966 ) {
this.beta=-1.5707963267948966;
} else if (this.beta > 1.5707963267948966 ) {
this.beta=1.5707963267948966;
}this.cosAlpha=Math.cos(this.alpha);
this.sinAlpha=Math.sin(this.alpha);
this.cosBeta=Math.cos(this.beta);
this.sinBeta=Math.sin(this.beta);
p$1.updateCamera$I.apply(this, [6]);
});

Clazz.newMeth(C$, 'getTransformation$',  function () {
return this.projection;
});

Clazz.newMeth(C$, 'copyFrom$org_opensourcephysics_display3d_core_Camera',  function (camera) {
this.projectionMode=camera.getProjectionMode$();
if (this.panel != null ) {
this.panelMaxSizeConstant=this.panel.getMaximum3DSize$() * 0.01;
}this.posX=camera.getX$();
this.posY=camera.getY$();
this.posZ=camera.getZ$();
this.focusX=camera.getFocusX$();
this.focusY=camera.getFocusY$();
this.focusZ=camera.getFocusZ$();
this.rotationAngle=camera.getRotation$();
this.cosRot=Math.cos(this.rotationAngle / 2);
this.sinRot=Math.sin(this.rotationAngle / 2);
this.distanceToScreen=camera.getDistanceToScreen$();
p$1.updateCamera$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'updateCamera$I',  function (change) {
switch (change) {
case 2:
case 3:
this.distanceToFocus=p$1.computeCameraVectors.apply(this, []);
this.alpha=Math.atan2(-this.e1[1], -this.e1[0]);
this.beta=Math.atan2(-this.e1[2], Math.abs(this.e1[0]));
this.cosAlpha=Math.cos(this.alpha);
this.sinAlpha=Math.sin(this.alpha);
this.cosBeta=Math.cos(this.beta);
this.sinBeta=Math.sin(this.beta);
break;
case 4:
p$1.computeCameraVectors.apply(this, []);
break;
case 6:
this.posX=this.focusX + this.distanceToFocus * this.cosBeta * this.cosAlpha ;
this.posY=this.focusY + this.distanceToFocus * this.cosBeta * this.sinAlpha ;
this.posZ=this.focusZ + this.distanceToFocus * this.sinBeta;
p$1.computeCameraVectors.apply(this, []);
break;
case 0:
this.distanceToFocus=p$1.computeCameraVectors.apply(this, []);
this.alpha=Math.atan2(-this.e1[1], -this.e1[0]);
this.beta=Math.atan2(-this.e1[2], Math.abs(this.e1[0]));
this.cosAlpha=Math.cos(this.alpha);
this.sinAlpha=Math.sin(this.alpha);
this.cosBeta=Math.cos(this.beta);
this.sinBeta=Math.sin(this.beta);
p$1.computeCameraVectors.apply(this, []);
break;
}
if (this.panel != null ) {
this.panel.cameraChanged$I(change);
}}, p$1);

Clazz.newMeth(C$, 'computeCameraVectors',  function () {
this.e1=Clazz.array(Double.TYPE, -1, [this.focusX - this.posX, this.focusY - this.posY, this.focusZ - this.posZ]);
var magnitudeE1=$I$(1).magnitude$DA(this.e1);
for (var i=0; i < this.e1.length; i++) {
this.e1[i]/=magnitudeE1;
}
this.e2=$I$(1).cross3D$DA$DA(this.e1, C$.vertical);
var magnitude=$I$(1).magnitude$DA(this.e2);
for (var i=0; i < this.e2.length; i++) {
this.e2[i]/=magnitude;
}
this.e3=$I$(1).cross3D$DA$DA(this.e2, this.e1);
magnitude=$I$(1).magnitude$DA(this.e3);
for (var i=0; i < this.e3.length; i++) {
this.e3[i]/=magnitude;
}
this.rotation.setCoordinates$D$D$D$D(this.cosRot, this.e1[0] * this.sinRot, this.e1[1] * this.sinRot, this.e1[2] * this.sinRot);
this.rotation.direct$DA(this.e2);
this.rotation.direct$DA(this.e3);
return magnitudeE1;
}, p$1);

Clazz.newMeth(C$, 'is3dMode$',  function () {
switch (this.projectionMode) {
case 0:
case 1:
case 2:
return false;
default:
return true;
}
});

Clazz.newMeth(C$, 'projectSize$DA$DA$DA',  function (p, size, pixelSize) {
switch (this.projectionMode) {
case 0:
pixelSize[0]=size[0];
pixelSize[1]=size[1];
return pixelSize;
case 1:
pixelSize[0]=size[0];
pixelSize[1]=size[2];
return pixelSize;
case 2:
pixelSize[0]=size[1];
pixelSize[1]=size[2];
return pixelSize;
case 10:
case 3:
pixelSize[0]=Math.max(size[0], size[1]);
pixelSize[1]=size[2];
return pixelSize;
default:
case 11:
case 4:
var factor=(p[0] - this.posX) * this.e1[0] + (p[1] - this.posY) * this.e1[1] + (p[2] - this.posZ) * this.e1[2];
if (Math.abs(factor) < this.panelMaxSizeConstant ) {
factor=this.panelMaxSizeConstant;
}factor=this.distanceToScreen / factor;
pixelSize[0]=Math.max(size[0], size[1]) * factor;
pixelSize[1]=size[2] * factor;
return pixelSize;
}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.vertical=Clazz.array(Double.TYPE, -1, [0, 0, 1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Camera, "Projection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.Transformation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (exc) {
if (Clazz.exceptionOf(exc,"CloneNotSupportedException")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'direct$DA',  function (p) {
switch (this.b$['org.opensourcephysics.display3d.simple3d.Camera'].projectionMode) {
case 0:
p[0]=p[0] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusX;
p[1]=p[1] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusY;
p[2]=1.0 - (p[2] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusZ) / this.b$['org.opensourcephysics.display3d.simple3d.Camera'].distanceToFocus;
return p;
case 1:
{
var aux=p[1];
p[0]=p[0] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusX;
p[1]=p[2] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusZ;
p[2]=1.0 - (aux - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusY) / this.b$['org.opensourcephysics.display3d.simple3d.Camera'].distanceToFocus;
return p;
}case 2:
{
var aux=p[0];
p[0]=p[1] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusY;
p[1]=p[2] - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusZ;
p[2]=1.0 - (aux - this.b$['org.opensourcephysics.display3d.simple3d.Camera'].focusX) / this.b$['org.opensourcephysics.display3d.simple3d.Camera'].distanceToFocus;
return p;
}case 10:
case 3:
{
p[0]-=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].posX;
p[1]-=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].posY;
p[2]-=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].posZ;
var aux1=$I$(1).dot$DA$DA(p, this.b$['org.opensourcephysics.display3d.simple3d.Camera'].e1);
var aux2=$I$(1).dot$DA$DA(p, this.b$['org.opensourcephysics.display3d.simple3d.Camera'].e2);
p[1]=$I$(1).dot$DA$DA(p, this.b$['org.opensourcephysics.display3d.simple3d.Camera'].e3);
p[0]=aux2;
p[2]=aux1 / this.b$['org.opensourcephysics.display3d.simple3d.Camera'].distanceToFocus;
return p;
}default:
case 11:
case 4:
{
p[0]-=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].posX;
p[1]-=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].posY;
p[2]-=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].posZ;
var factor=$I$(1).dot$DA$DA(p, this.b$['org.opensourcephysics.display3d.simple3d.Camera'].e1);
var aux1=factor;
if (Math.abs(factor) < this.b$['org.opensourcephysics.display3d.simple3d.Camera'].panelMaxSizeConstant ) {
factor=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].panelMaxSizeConstant;
}factor=this.b$['org.opensourcephysics.display3d.simple3d.Camera'].distanceToScreen / factor;
var aux2=$I$(1).dot$DA$DA(p, this.b$['org.opensourcephysics.display3d.simple3d.Camera'].e2) * factor;
p[1]=$I$(1).dot$DA$DA(p, this.b$['org.opensourcephysics.display3d.simple3d.Camera'].e3) * factor;
p[0]=aux2;
p[2]=aux1 / this.b$['org.opensourcephysics.display3d.simple3d.Camera'].distanceToFocus;
return p;
}}
});

Clazz.newMeth(C$, 'inverse$DA',  function (point) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Camera, "CameraLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Camera','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D,[null]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
