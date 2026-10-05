(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ElementSphere", null, 'org.opensourcephysics.display3d.simple3d.ElementEllipsoid', 'org.opensourcephysics.display3d.core.ElementSphere');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (radius) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setRadius$D(radius);
}, 1);

Clazz.newMeth(C$, 'setRadius$D',  function (radius) {
radius*=2;
C$.superclazz.prototype.setSizeXYZ$D$D$D.apply(this, [radius, radius, radius]);
});

Clazz.newMeth(C$, 'getRadius$',  function () {
return this.getSizeX$() / 2;
});

Clazz.newMeth(C$, 'setSizeX$D',  function (sizeX) {
C$.superclazz.prototype.setSizeXYZ$D$D$D.apply(this, [sizeX, sizeX, sizeX]);
});

Clazz.newMeth(C$, 'setSizeY$D',  function (sizeY) {
C$.superclazz.prototype.setSizeXYZ$D$D$D.apply(this, [sizeY, sizeY, sizeY]);
});

Clazz.newMeth(C$, 'setSizeZ$D',  function (sizeZ) {
C$.superclazz.prototype.setSizeXYZ$D$D$D.apply(this, [sizeZ, sizeZ, sizeZ]);
});

Clazz.newMeth(C$, 'setSizeXYZ$D$D$D',  function (sizeX, sizeY, sizeZ) {
var max=Math.max(Math.max(sizeX, sizeY), sizeZ);
C$.superclazz.prototype.setSizeXYZ$D$D$D.apply(this, [max, max, max]);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
