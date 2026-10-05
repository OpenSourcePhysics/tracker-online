(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.simple3d.Style','java.util.ArrayList','org.opensourcephysics.display3d.simple3d.InteractionTarget','org.opensourcephysics.numerics.Quaternion']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Element", null, null, 'org.opensourcephysics.display3d.core.Element');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.x=0.0;
this.y=0.0;
this.z=0.0;
this.sizeX=1.0;
this.sizeY=1.0;
this.sizeZ=1.0;
this.name="";
this.transformation=null;
this.style=Clazz.new_($I$(1,1).c$$org_opensourcephysics_display3d_simple3d_Element,[this]);
this.group=null;
this.factorX=1.0;
this.factorY=1.0;
this.factorZ=1.0;
this.elementChanged=true;
this.needsToProject=true;
this.listeners=Clazz.new_($I$(2,1));
this.targetPosition=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, 0]);
this.targetSize=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, 1]);
},1);

C$.$fields$=[['Z',['visible','elementChanged','needsToProject'],'D',['x','y','z','sizeX','sizeY','sizeZ','factorX','factorY','factorZ'],'S',['name'],'O',['transformation','org.opensourcephysics.numerics.Transformation','style','org.opensourcephysics.display3d.simple3d.Style','group','org.opensourcephysics.display3d.simple3d.Group','panel','org.opensourcephysics.display3d.simple3d.DrawingPanel3D','listeners','java.util.ArrayList','targetPosition','org.opensourcephysics.display3d.simple3d.InteractionTarget','+targetSize']]]

Clazz.newMeth(C$, 'getDrawingPanel3D$',  function () {
var el=this;
while (el.group != null ){
el=el.group;
}
return el.panel;
});

Clazz.newMeth(C$, 'setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (_panel) {
this.panel=_panel;
this.factorX=_panel.getScaleFactorX$();
this.factorY=_panel.getScaleFactorY$();
this.factorZ=_panel.getScaleFactorZ$();
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getGroup$',  function () {
return this.group;
});

Clazz.newMeth(C$, 'setGroup$org_opensourcephysics_display3d_simple3d_Group',  function (_group) {
this.group=_group;
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getAxesMode$',  function () {
if (this.panel != null ) {
return this.panel.getAxesMode$();
}return 0;
});

Clazz.newMeth(C$, 'setName$S',  function (aName) {
this.name=aName;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
switch (this.getAxesMode$()) {
case 1:
this.y=x * this.factorX;
break;
case 3:
this.z=x * this.factorZ;
break;
case 5:
this.y=x * this.factorY;
break;
case 4:
this.z=x * this.factorZ;
break;
default:
this.x=x * this.factorX;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x / this.factorX;
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
switch (this.getAxesMode$()) {
case 2:
this.z=y * this.factorZ;
break;
case 1:
this.x=y * this.factorX;
break;
case 3:
this.x=y * this.factorX;
break;
case 5:
this.z=y * this.factorZ;
break;
default:
this.y=y * this.factorY;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y / this.factorY;
});

Clazz.newMeth(C$, 'setZ$D',  function (z) {
switch (this.getAxesMode$()) {
case 2:
this.y=z * this.factorY;
break;
case 3:
this.y=z * this.factorY;
break;
case 5:
this.x=z * this.factorX;
break;
case 4:
this.x=z * this.factorX;
break;
default:
this.z=z * this.factorZ;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getZ$',  function () {
return this.z / this.factorZ;
});

Clazz.newMeth(C$, 'setXYZ$D$D$D',  function (x, y, z) {
switch (this.getAxesMode$()) {
case 2:
this.x=x * this.factorX;
this.z=y * this.factorZ;
this.y=z * this.factorY;
break;
case 1:
this.y=x;
this.x=y;
this.z=z;
break;
case 3:
this.z=x * this.factorZ;
this.x=y * this.factorX;
this.y=z * this.factorY;
break;
case 5:
this.y=x * this.factorY;
this.z=y * this.factorZ;
this.x=z * this.factorX;
break;
case 4:
this.z=x * this.factorZ;
this.y=y * this.factorY;
this.x=z * this.factorX;
break;
default:
this.x=x * this.factorX;
this.y=y * this.factorY;
this.z=z * this.factorZ;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'setXYZ$DA',  function (pos) {
switch (this.getAxesMode$()) {
case 2:
this.x=pos[0] * this.factorX;
this.z=pos[1] * this.factorZ;
if (pos.length >= 3) {
this.y=pos[2] * this.factorY;
}break;
case 1:
this.y=pos[0] * this.factorY;
this.x=pos[1] * this.factorX;
if (pos.length >= 3) {
this.z=pos[2] * this.factorZ;
}break;
case 3:
this.z=pos[0] * this.factorZ;
this.x=pos[1] * this.factorX;
if (pos.length >= 3) {
this.y=pos[2] * this.factorY;
}break;
case 5:
this.y=pos[0] * this.factorY;
this.z=pos[1] * this.factorZ;
if (pos.length >= 3) {
this.x=pos[2] * this.factorX;
}break;
case 4:
this.z=pos[0] * this.factorZ;
this.y=pos[1] * this.factorY;
if (pos.length >= 3) {
this.x=pos[2] * this.factorX;
}break;
default:
this.x=pos[0] * this.factorX;
this.y=pos[1] * this.factorY;
if (pos.length >= 3) {
this.z=pos[2] * this.factorZ;
}}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
min[0]=min[1]=min[2]=-0.5;
max[0]=max[1]=max[2]=0.5;
this.sizeAndToSpaceFrame$DA(min);
this.sizeAndToSpaceFrame$DA(max);
});

Clazz.newMeth(C$, 'setSizeX$D',  function (sizeX) {
switch (this.getAxesMode$()) {
case 1:
this.sizeY=sizeX * this.factorY;
break;
case 3:
this.sizeZ=sizeX * this.factorZ;
break;
case 5:
this.sizeY=sizeX * this.factorY;
break;
case 4:
this.sizeZ=sizeX * this.factorZ;
break;
default:
this.sizeX=sizeX * this.factorY;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getSizeX$',  function () {
return this.sizeX;
});

Clazz.newMeth(C$, 'setSizeY$D',  function (sizeY) {
switch (this.getAxesMode$()) {
case 2:
this.sizeZ=sizeY * this.factorZ;
break;
case 1:
this.sizeX=sizeY * this.factorX;
break;
case 3:
this.sizeX=sizeY * this.factorX;
break;
case 5:
this.sizeZ=sizeY * this.factorZ;
break;
default:
this.sizeY=sizeY * this.factorY;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getSizeY$',  function () {
return this.sizeY;
});

Clazz.newMeth(C$, 'setSizeZ$D',  function (sizeZ) {
switch (this.getAxesMode$()) {
case 2:
this.sizeY=sizeZ * this.factorY;
break;
case 3:
this.sizeY=sizeZ * this.factorY;
break;
case 5:
this.sizeX=sizeZ * this.factorX;
break;
case 4:
this.sizeX=sizeZ * this.factorX;
break;
default:
this.sizeZ=sizeZ * this.factorZ;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getSizeZ$',  function () {
return this.sizeZ;
});

Clazz.newMeth(C$, 'setSizeXYZ$D$D$D',  function (sizeX, sizeY, sizeZ) {
switch (this.getAxesMode$()) {
case 2:
this.sizeX=sizeX * this.factorX;
this.sizeZ=sizeY * this.factorY;
this.sizeY=sizeZ * this.factorZ;
break;
case 1:
this.sizeY=sizeX * this.factorY;
this.sizeX=sizeY * this.factorX;
this.sizeZ=sizeZ * this.factorZ;
break;
case 3:
this.sizeZ=sizeX * this.factorZ;
this.sizeX=sizeY * this.factorX;
this.sizeY=sizeZ * this.factorY;
break;
case 5:
this.sizeY=sizeX * this.factorY;
this.sizeZ=sizeY * this.factorZ;
this.sizeX=sizeZ * this.factorX;
break;
case 4:
this.sizeZ=sizeX * this.factorZ;
this.sizeY=sizeY * this.factorY;
this.sizeX=sizeZ * this.factorX;
break;
default:
this.sizeX=sizeX * this.factorX;
this.sizeY=sizeY * this.factorY;
this.sizeZ=sizeZ * this.factorZ;
}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'setSizeXYZ$DA',  function (size) {
switch (this.getAxesMode$()) {
case 2:
this.sizeX=size[0] * this.factorX;
this.sizeZ=size[1] * this.factorZ;
if (size.length >= 3) {
this.sizeY=size[2] * this.factorY;
}break;
case 1:
this.sizeY=size[0] * this.factorY;
this.sizeX=size[1] * this.factorX;
if (size.length >= 3) {
this.sizeZ=size[2] * this.factorZ;
}break;
case 3:
this.sizeZ=size[0] * this.factorZ;
this.sizeX=size[1] * this.factorX;
if (size.length >= 3) {
this.sizeY=size[2] * this.factorY;
}break;
case 5:
this.sizeY=size[0] * this.factorY;
this.sizeZ=size[1] * this.factorZ;
if (size.length >= 3) {
this.sizeX=size[2] * this.factorX;
}break;
case 4:
this.sizeZ=size[0] * this.factorZ;
this.sizeY=size[1] * this.factorY;
if (size.length >= 3) {
this.sizeX=size[2] * this.factorX;
}break;
default:
this.sizeX=size[0] * this.factorX;
this.sizeY=size[1] * this.factorY;
if (size.length >= 3) {
this.sizeZ=size[2] * this.factorZ;
}}
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getDiagonalSize$',  function () {
return Math.sqrt(this.sizeX * this.sizeX + this.sizeY * this.sizeY + this.sizeZ * this.sizeZ);
});

Clazz.newMeth(C$, 'hasChanged$',  function () {
var el=this;
while (el != null ){
if (el.elementChanged) {
return true;
}el=el.group;
}
return false;
});

Clazz.newMeth(C$, 'getElementChanged$',  function () {
return this.elementChanged;
});

Clazz.newMeth(C$, 'setElementChanged$Z',  function (change) {
this.elementChanged=change;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (_visible) {
this.visible=_visible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'isReallyVisible$',  function () {
var el=this.group;
while (el != null ){
if (!el.visible) {
return false;
}el=el.group;
}
return this.visible;
});

Clazz.newMeth(C$, 'getStyle$',  function () {
return this.style;
});

Clazz.newMeth(C$, 'getRealStyle$',  function () {
return this.style;
});

Clazz.newMeth(C$, 'styleChanged$I',  function (styleThatChanged) {
this.elementChanged=true;
});

Clazz.newMeth(C$, 'getTransformation$',  function () {
if (this.transformation == null ) {
return null;
}return this.transformation.clone$();
});

Clazz.newMeth(C$, 'setTransformation$org_opensourcephysics_numerics_Transformation',  function (transformation) {
if (transformation == null ) {
this.transformation=null;
} else {
this.transformation=transformation.clone$();
if (Clazz.instanceOf(transformation, "org.opensourcephysics.numerics.Quaternion")) {
var q=this.transformation;
var coordsBuffer=q.getCoordinates$();
switch (this.getAxesMode$()) {
case 0:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[1], coordsBuffer[2], coordsBuffer[3]);
break;
case 2:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[1], coordsBuffer[3], coordsBuffer[2]);
break;
case 1:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[2], coordsBuffer[1], coordsBuffer[3]);
break;
case 3:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[2], coordsBuffer[3], coordsBuffer[1]);
break;
case 5:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[3], coordsBuffer[1], coordsBuffer[2]);
break;
case 4:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[3], coordsBuffer[2], coordsBuffer[1]);
break;
default:
q.setCoordinates$D$D$D$D(coordsBuffer[0], coordsBuffer[1], coordsBuffer[2], coordsBuffer[3]);
}
this.transformation=Clazz.new_($I$(4,1).c$$org_opensourcephysics_numerics_Quaternion,[q]);
} else {
var mt=this.transformation;
var q=Clazz.array(Double.TYPE, [4]);
mt.toQuaternion$DA(q);
var qf=Clazz.new_($I$(4,1).c$$DA,[q]);
switch (this.getAxesMode$()) {
case 0:
qf.setCoordinates$D$D$D$D(q[0], q[1], q[2], q[3]);
break;
case 2:
qf.setCoordinates$D$D$D$D(q[0], q[1], q[3], q[2]);
break;
case 1:
qf.setCoordinates$D$D$D$D(q[0], q[2], q[1], q[3]);
break;
case 3:
qf.setCoordinates$D$D$D$D(q[0], q[2], q[3], q[1]);
break;
case 5:
qf.setCoordinates$D$D$D$D(q[0], q[3], q[1], q[2]);
break;
case 4:
qf.setCoordinates$D$D$D$D(q[0], q[3], q[2], q[1]);
break;
default:
qf.setCoordinates$D$D$D$D(q[0], q[1], q[2], q[3]);
}
this.transformation=Clazz.new_($I$(4,1).c$$org_opensourcephysics_numerics_Quaternion,[qf]);
}}this.elementChanged=true;
});

Clazz.newMeth(C$, 'toSpaceFrame$DA',  function (vector) {
if (this.transformation != null ) {
this.transformation.direct$DA(vector);
}vector[0]+=this.x;
vector[1]+=this.y;
vector[2]+=this.z;
var el=this.group;
while (el != null ){
vector[0]*=el.sizeX;
vector[1]*=el.sizeY;
vector[2]*=el.sizeZ;
if (el.transformation != null ) {
el.transformation.direct$DA(vector);
}vector[0]+=el.x;
vector[1]+=el.y;
vector[2]+=el.z;
el=el.group;
}
return vector;
});

Clazz.newMeth(C$, 'toBodyFrame$DA',  function (vector) {
var elList=Clazz.new_($I$(2,1));
var el=this;
do {
elList.add$O(el);
el=el.group;
} while (el != null );
for (var i=elList.size$() - 1; i >= 0; i--) {
el=elList.get$I(i);
vector[0]-=el.x;
vector[1]-=el.y;
vector[2]-=el.z;
if (el.transformation != null ) {
el.transformation.inverse$DA(vector);
}if (el !== this ) {
if (el.sizeX != 0.0 ) {
vector[0]/=el.sizeX;
}if (el.sizeY != 0.0 ) {
vector[1]/=el.sizeY;
}if (el.sizeZ != 0.0 ) {
vector[2]/=el.sizeZ;
}}}
return vector;
});

Clazz.newMeth(C$, 'sizeAndToSpaceFrame$DA',  function (vector) {
vector[0]*=this.sizeX;
vector[1]*=this.sizeY;
vector[2]*=this.sizeZ;
this.toSpaceFrame$DA(vector);
});

Clazz.newMeth(C$, 'setNeedToProject$Z',  function (_need) {
this.needsToProject=_need;
});

Clazz.newMeth(C$, 'needsToProject$',  function () {
return this.needsToProject;
});

Clazz.newMeth(C$, 'getInteractionTarget$I',  function (target) {
switch (target) {
case 0:
return this.targetPosition;
case 1:
return this.targetSize;
}
return null;
});

Clazz.newMeth(C$, 'addInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener',  function (listener) {
if ((listener == null ) || this.listeners.contains$O(listener) ) {
return;
}this.listeners.add$O(listener);
});

Clazz.newMeth(C$, 'removeInteractionListener$org_opensourcephysics_display3d_core_interaction_InteractionListener',  function (listener) {
this.listeners.remove$O(listener);
});

Clazz.newMeth(C$, 'invokeActions$org_opensourcephysics_display3d_core_interaction_InteractionEvent',  function (event) {
var it=this.listeners.iterator$();
while (it.hasNext$()){
it.next$().interactionPerformed$org_opensourcephysics_display3d_core_interaction_InteractionEvent(event);
}
});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
return null;
});

Clazz.newMeth(C$, 'getHotSpotBodyCoordinates$org_opensourcephysics_display3d_simple3d_InteractionTarget',  function (target) {
if (target === this.targetPosition ) {
return Clazz.array(Double.TYPE, -1, [0, 0, 0]);
}if (target === this.targetSize ) {
var c=Clazz.array(Double.TYPE, -1, [1, 1, 1]);
if (this.sizeX == 0 ) {
c[0]=0.0;
}if (this.sizeY == 0 ) {
c[1]=0.0;
}if (this.sizeZ == 0 ) {
c[2]=0.0;
}return c;
}return null;
});

Clazz.newMeth(C$, 'getHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget',  function (target) {
var coordinates=this.getHotSpotBodyCoordinates$org_opensourcephysics_display3d_simple3d_InteractionTarget(target);
if (coordinates != null ) {
this.sizeAndToSpaceFrame$DA(coordinates);
}return coordinates;
});

Clazz.newMeth(C$, 'updateHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget$DA',  function (target, point) {
var gr=this.group;
switch (target.getType$()) {
case 0:
if (target.getAffectsGroup$() && (gr != null ) ) {
var origin=this.getHotSpot$org_opensourcephysics_display3d_simple3d_InteractionTarget(target);
gr.setXYZ$D$D$D(gr.x + point[0] - origin[0], gr.y + point[1] - origin[1], gr.z + point[2] - origin[2]);
} else {
var coordinates=Clazz.array(Double.TYPE, -1, [point[0], point[1], point[2]]);
p$1.groupInverseTransformations$DA.apply(this, [coordinates]);
var origin=this.getHotSpotBodyCoordinates$org_opensourcephysics_display3d_simple3d_InteractionTarget(target);
origin[0]*=this.sizeX;
origin[1]*=this.sizeY;
origin[2]*=this.sizeZ;
if (this.transformation != null ) {
this.transformation.direct$DA(origin);
}this.setXYZ$D$D$D(coordinates[0] - origin[0], coordinates[1] - origin[1], coordinates[2] - origin[2]);
}break;
case 1:
if (target.getAffectsGroup$() && (gr != null ) ) {
var coordinates=Clazz.array(Double.TYPE, -1, [point[0], point[1], point[2]]);
coordinates[0]-=gr.x;
coordinates[1]-=gr.y;
coordinates[2]-=gr.z;
if (gr.transformation != null ) {
gr.transformation.inverse$DA(coordinates);
}var origin=this.getHotSpotBodyCoordinates$org_opensourcephysics_display3d_simple3d_InteractionTarget(target);
p$1.elementDirectTransformations$DA.apply(this, [origin]);
if (origin[0] != 0 ) {
coordinates[0]/=origin[0];
} else {
coordinates[0]=gr.sizeX;
}if (origin[1] != 0 ) {
coordinates[1]/=origin[1];
} else {
coordinates[1]=gr.sizeY;
}if (origin[2] != 0 ) {
coordinates[2]/=origin[2];
} else {
coordinates[2]=gr.sizeZ;
}gr.setSizeXYZ$DA(coordinates);
} else {
var coordinates=Clazz.array(Double.TYPE, -1, [point[0], point[1], point[2]]);
p$1.groupInverseTransformations$DA.apply(this, [coordinates]);
coordinates[0]-=this.x;
coordinates[1]-=this.y;
coordinates[2]-=this.z;
if (this.transformation != null ) {
this.transformation.inverse$DA(coordinates);
}var origin=this.getHotSpotBodyCoordinates$org_opensourcephysics_display3d_simple3d_InteractionTarget(target);
for (var i=0; i < 3; i++) {
if (origin[i] != 0 ) {
coordinates[i]/=origin[i];
}}
this.setSizeXYZ$DA(coordinates);
}}
});

Clazz.newMeth(C$, 'groupInverseTransformations$DA',  function (vector) {
var elList=Clazz.new_($I$(2,1));
var el=this.group;
while (el != null ){
elList.add$O(el);
el=el.group;
}
for (var i=elList.size$() - 1; i >= 0; i--) {
el=elList.get$I(i);
vector[0]-=el.x;
vector[1]-=el.y;
vector[2]-=el.z;
if (el.transformation != null ) {
el.transformation.inverse$DA(vector);
}if (el.sizeX != 0.0 ) {
vector[0]/=el.sizeX;
}if (el.sizeY != 0.0 ) {
vector[1]/=el.sizeY;
}if (el.sizeZ != 0.0 ) {
vector[2]/=el.sizeZ;
}}
}, p$1);

Clazz.newMeth(C$, 'elementDirectTransformations$DA',  function (vector) {
var el=this;
do {
if (el.sizeX != 0 ) {
vector[0]*=el.sizeX;
}if (el.sizeY != 0 ) {
vector[1]*=el.sizeY;
}if (el.sizeZ != 0 ) {
vector[2]*=el.sizeZ;
}if (el.transformation != null ) {
el.transformation.direct$DA(vector);
}vector[0]+=el.x;
vector[1]+=el.y;
vector[2]+=el.z;
el=el.group;
} while ((el != null ) && (el.group != null ) );
}, p$1);

Clazz.newMeth(C$, 'loadUnmutableObjects$org_opensourcephysics_controls_XMLControl',  function (control) {
this.style=control.getObject$S("style");
this.style.setElement$org_opensourcephysics_display3d_simple3d_Element(this);
this.elementChanged=true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
