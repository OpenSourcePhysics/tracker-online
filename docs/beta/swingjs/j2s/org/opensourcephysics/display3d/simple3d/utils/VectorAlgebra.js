(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d.utils"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VectorAlgebra");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'norm$DA',  function (u) {
return Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
}, 1);

Clazz.newMeth(C$, 'crossProduct$DA$DA',  function (u, v) {
return Clazz.array(Double.TYPE, -1, [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]);
}, 1);

Clazz.newMeth(C$, 'normalize$DA',  function (u) {
var r=C$.norm$DA(u);
return Clazz.array(Double.TYPE, -1, [u[0] / r, u[1] / r, u[2] / r]);
}, 1);

Clazz.newMeth(C$, 'normalTo$DA',  function (vector) {
if (vector[0] == 0.0 ) {
return Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0]);
} else if (vector[1] == 0.0 ) {
return Clazz.array(Double.TYPE, -1, [0.0, 1.0, 0.0]);
} else if (vector[2] == 0.0 ) {
return Clazz.array(Double.TYPE, -1, [0.0, 0.0, 1.0]);
} else {
var norm=Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
return Clazz.array(Double.TYPE, -1, [-vector[1] / norm, vector[0] / norm, 0.0]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
