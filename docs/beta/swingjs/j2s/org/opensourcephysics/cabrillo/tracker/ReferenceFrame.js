(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker");
/*c*/var C$=Clazz.newClass(P$, "ReferenceFrame", null, 'org.opensourcephysics.media.core.ImageCoordSystem', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lockEnabled=false;
},1);

C$.$fields$=[['Z',['lockEnabled','originLocked'],'O',['originTrack','org.opensourcephysics.cabrillo.tracker.PointMass','coords','org.opensourcephysics.media.core.ImageCoordSystem']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_ImageCoordSystem$org_opensourcephysics_cabrillo_tracker_PointMass',  function (coords, originTrack) {
;C$.superclazz.c$$I.apply(this,[coords.getLength$()]);C$.$init$.apply(this);
this.originTrack=originTrack;
this.coords=coords;
this.ignoreUpdateRequests=true;
this.setFixedOrigin$Z(false);
this.setFixedScale$Z(coords.isFixedScale$());
coords.addPropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
originTrack.addStepListener$java_beans_PropertyChangeListener(this);
var doScale=true;
for (var i=0, n=coords.getLength$(); i < n; i++) {
doScale=doScale && this.setScaleXY$I$D$D(i, coords.getScaleX$I(i), coords.getScaleY$I(i)) ;
this.setCosineSine$I$D$D(i, coords.getCosine$I(i), coords.getSine$I(i));
}
this.setOrigins$();
this.lockEnabled=true;
this.ignoreUpdateRequests=false;
this.updateAllTransforms$();
}, 1);

Clazz.newMeth(C$, 'setFixedOrigin$Z$I',  function (fixed, n) {
C$.superclazz.prototype.setFixedOrigin$Z$I.apply(this, [false, n]);
});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
if (locked) {
this.originLocked=this.originTrack.isLocked$();
this.originTrack.setLocked$Z(true);
} else {
this.originTrack.setLocked$Z(this.originLocked);
}this.coords.setLocked$Z(locked);
C$.superclazz.prototype.setLocked$Z.apply(this, [locked]);
});

Clazz.newMeth(C$, 'isLocked$',  function () {
return this.lockEnabled && this.coords.isLocked$() ;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "step":
case "steps":
this.setOrigins$();
break;
case "transform":
var integer=e.getNewValue$();
if (integer != null ) {
var n=integer.intValue$();
this.setScaleXY$I$D$D(n, this.coords.getScaleX$I(n), this.coords.getScaleY$I(n));
this.setCosineSine$I$D$D(n, this.coords.getCosine$I(n), this.coords.getSine$I(n));
if (this.originTrack.isEmpty$() && n == 0 ) this.setOrigins$();
} else {
for (var n=0; n < this.coords.getLength$(); n++) {
this.setScaleXY$I$D$D(n, this.coords.getScaleX$I(n), this.coords.getScaleY$I(n));
this.setCosineSine$I$D$D(n, this.coords.getCosine$I(n), this.coords.getSine$I(n));
}
if (this.originTrack.isEmpty$()) this.setOrigins$();
}break;
}
});

Clazz.newMeth(C$, 'updateAllTransforms$',  function () {
if (this.ignoreUpdateRequests) return;
C$.superclazz.prototype.updateAllTransforms$.apply(this, []);
});

Clazz.newMeth(C$, 'getCoords$',  function () {
this.coords.removePropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
this.coords.setFixedAngle$Z(this.isFixedAngle$());
this.coords.setFixedScale$Z(this.isFixedScale$());
var doScale=true;
for (var n=0; n < this.coords.getLength$(); n++) {
doScale=doScale && this.coords.setScaleXY$I$D$D(n, this.getScaleX$I(n), this.getScaleY$I(n)) ;
this.coords.setCosineSine$I$D$D(n, this.getCosine$I(n), this.getSine$I(n));
}
this.coords.addPropertyChangeListener$S$java_beans_PropertyChangeListener("transform", this);
return this.coords;
});

Clazz.newMeth(C$, 'getOriginTrack$',  function () {
return this.originTrack;
});

Clazz.newMeth(C$, 'setOrigins$',  function () {
this.firePropChange=false;
var x=this.coords.getOriginX$I(0);
var y=this.coords.getOriginY$I(0);
var n=this.coords.getLength$();
for (var i=0; i < n; i++) {
var step=this.originTrack.getStep$I(i);
if (step != null ) {
var p=(step).getPosition$();
x=p.getX$();
y=p.getY$();
break;
}}
for (var i=0; i < n; i++) {
var step=this.originTrack.getStep$I(i);
if (step != null ) {
var p=(step).getPosition$();
x=p.getX$();
y=p.getY$();
}this.setOriginXY$I$D$D(i, x, y);
}
this.firePropChange=true;
this.firePropertyChange$S$O$O("transform", null, null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
