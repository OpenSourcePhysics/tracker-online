(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PBC");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'position$D$D',  function (r, size) {
return (r < 0 ) ? r % size + size : r % size;
}, 1);

Clazz.newMeth(C$, 'position$I$I',  function (r, size) {
return (r < 0) ? (r + 1) % size + size - 1 : r % size;
}, 1);

Clazz.newMeth(C$, 'separation$D$D',  function (dr, size) {
return dr - size * Math.floor(dr / size + 0.5);
}, 1);

Clazz.newMeth(C$, 'separation$I$I',  function (dr, size) {
if (dr < 0) {
return dr + size * (((-2 * dr + size)/(2 * size)|0));
}return dr - size * (((2 * dr + size - 1)/(2 * size)|0));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
