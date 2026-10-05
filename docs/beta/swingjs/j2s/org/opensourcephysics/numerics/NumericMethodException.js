(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NumericMethodException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['error_value'],'I',['error_code']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$D',  function (msg, code, val) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
this.error_code=code;
this.error_value=val;
}, 1);

Clazz.newMeth(C$, 'getMessage$',  function () {
return C$.superclazz.prototype.getMessage$.apply(this, []) + "\n error code=" + this.error_code + "  error value=" + new Double(this.error_value).toString() ;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
