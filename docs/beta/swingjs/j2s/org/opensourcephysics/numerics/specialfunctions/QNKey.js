(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "QNKey");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n','k']]]

Clazz.newMeth(C$, 'c$$I$I',  function (n, k) {
;C$.$init$.apply(this);
this.n=n;
this.k=k;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (key) {
if (key == null ) {
return false;
}return ((key).n == this.n) && ((key).k == this.k) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return 1031 * this.n + this.k;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
