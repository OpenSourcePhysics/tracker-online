(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ParserException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['errorcode']]]

Clazz.newMeth(C$, 'c$$I',  function (code) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.errorcode=code;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
this.errorcode=1;
}, 1);

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.errorcode;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
