(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SurfacePlotProjector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.DEGTORAD=0.017453292519943295;
},1);

C$.$fields$=[['D',['scale_x','scale_y','scale_z','distance','_2D_scale','rotation','elevation','sin_rotation','cos_rotation','sin_elevation','cos_elevation','factor','sx_cos','sy_cos','sz_cos','sx_sin','sy_sin','sz_sin','DEGTORAD'],'I',['_2D_trans_x','_2D_trans_y','x1','x2','y1','y2','center_x','center_y','trans_x','trans_y']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setScaling$D(1);
this.setRotationAngle$D(0);
this.setElevationAngle$D(0);
this.setDistance$D(10);
this.set2DScaling$D(1);
this.set2DTranslation$I$I(0, 0);
}, 1);

Clazz.newMeth(C$, 'setProjectionArea$java_awt_Rectangle',  function (r) {
this.x1=r.x;
this.x2=this.x1 + r.width;
this.y1=r.y;
this.y2=this.y1 + r.height;
this.center_x=((this.x1 + this.x2)/2|0);
this.center_y=((this.y1 + this.y2)/2|0);
this.trans_x=this.center_x + this._2D_trans_x;
this.trans_y=this.center_y + this._2D_trans_y;
});

Clazz.newMeth(C$, 'setRotationAngle$D',  function (angle) {
this.rotation=angle;
this.sin_rotation=Math.sin(angle * 0.017453292519943295);
this.cos_rotation=Math.cos(angle * 0.017453292519943295);
this.sx_cos=-this.scale_x * this.cos_rotation;
this.sx_sin=-this.scale_x * this.sin_rotation;
this.sy_cos=-this.scale_y * this.cos_rotation;
this.sy_sin=this.scale_y * this.sin_rotation;
});

Clazz.newMeth(C$, 'getRotationAngle$',  function () {
return this.rotation;
});

Clazz.newMeth(C$, 'getSinRotationAngle$',  function () {
return this.sin_rotation;
});

Clazz.newMeth(C$, 'getCosRotationAngle$',  function () {
return this.cos_rotation;
});

Clazz.newMeth(C$, 'setElevationAngle$D',  function (angle) {
this.elevation=angle;
this.sin_elevation=Math.sin(angle * 0.017453292519943295);
this.cos_elevation=Math.cos(angle * 0.017453292519943295);
this.sz_cos=this.scale_z * this.cos_elevation;
this.sz_sin=this.scale_z * this.sin_elevation;
});

Clazz.newMeth(C$, 'getElevationAngle$',  function () {
return this.elevation;
});

Clazz.newMeth(C$, 'getSinElevationAngle$',  function () {
return this.sin_elevation;
});

Clazz.newMeth(C$, 'getCosElevationAngle$',  function () {
return this.cos_elevation;
});

Clazz.newMeth(C$, 'setDistance$D',  function (new_distance) {
this.distance=new_distance;
this.factor=this.distance * this._2D_scale;
});

Clazz.newMeth(C$, 'getDistance$',  function () {
return this.distance;
});

Clazz.newMeth(C$, 'setXScaling$D',  function (scaling) {
this.scale_x=scaling;
this.sx_cos=-this.scale_x * this.cos_rotation;
this.sx_sin=-this.scale_x * this.sin_rotation;
});

Clazz.newMeth(C$, 'getXScaling$',  function () {
return this.scale_x;
});

Clazz.newMeth(C$, 'setYScaling$D',  function (scaling) {
this.scale_y=scaling;
this.sy_cos=-this.scale_y * this.cos_rotation;
this.sy_sin=this.scale_y * this.sin_rotation;
});

Clazz.newMeth(C$, 'getYScaling$',  function () {
return this.scale_y;
});

Clazz.newMeth(C$, 'setZScaling$D',  function (scaling) {
this.scale_z=scaling;
this.sz_cos=this.scale_z * this.cos_elevation;
this.sz_sin=this.scale_z * this.sin_elevation;
});

Clazz.newMeth(C$, 'getZScaling$',  function () {
return this.scale_z;
});

Clazz.newMeth(C$, 'setScaling$D$D$D',  function (x, y, z) {
this.scale_x=x;
this.scale_y=y;
this.scale_z=z;
this.sx_cos=-this.scale_x * this.cos_rotation;
this.sx_sin=-this.scale_x * this.sin_rotation;
this.sy_cos=-this.scale_y * this.cos_rotation;
this.sy_sin=this.scale_y * this.sin_rotation;
this.sz_cos=this.scale_z * this.cos_elevation;
this.sz_sin=this.scale_z * this.sin_elevation;
});

Clazz.newMeth(C$, 'setScaling$D',  function (scaling) {
this.scale_x=this.scale_y=this.scale_z=scaling;
this.sx_cos=-this.scale_x * this.cos_rotation;
this.sx_sin=-this.scale_x * this.sin_rotation;
this.sy_cos=-this.scale_y * this.cos_rotation;
this.sy_sin=this.scale_y * this.sin_rotation;
this.sz_cos=this.scale_z * this.cos_elevation;
this.sz_sin=this.scale_z * this.sin_elevation;
});

Clazz.newMeth(C$, 'set2DScaling$D',  function (scaling) {
this._2D_scale=scaling;
this.factor=this.distance * this._2D_scale;
});

Clazz.newMeth(C$, 'get2DScaling$',  function () {
return this._2D_scale;
});

Clazz.newMeth(C$, 'set2DTranslation$I$I',  function (x, y) {
this._2D_trans_x=x;
this._2D_trans_y=y;
this.trans_x=this.center_x + this._2D_trans_x;
this.trans_y=this.center_y + this._2D_trans_y;
});

Clazz.newMeth(C$, 'set2D_xTranslation$I',  function (x) {
this._2D_trans_x=x;
this.trans_x=this.center_x + this._2D_trans_x;
});

Clazz.newMeth(C$, 'get2D_xTranslation$',  function () {
return this._2D_trans_x;
});

Clazz.newMeth(C$, 'set2D_yTranslation$I',  function (y) {
this._2D_trans_y=y;
this.trans_y=this.center_y + this._2D_trans_y;
});

Clazz.newMeth(C$, 'get2D_yTranslation$',  function () {
return this._2D_trans_y;
});

Clazz.newMeth(C$, 'project$D$D$D',  function (x, y, z) {
var temp;
temp=x;
x=x * this.sx_cos + y * this.sy_sin;
y=temp * this.sx_sin + y * this.sy_cos;
temp=this.factor / (y * this.cos_elevation - z * this.sz_sin + this.distance);
return Clazz.new_([Long.$ival((Long.$add(Math.round$D(x * temp),this.trans_x))), Long.$ival((Long.$add(Math.round$D((y * this.sin_elevation + z * this.sz_cos) * -temp),this.trans_y)))],$I$(1,1).c$$I$I);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
