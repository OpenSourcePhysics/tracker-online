(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StringValue", null, 'org.opensourcephysics.ejs.control.value.Value');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value']]]

Clazz.newMeth(C$, 'c$$S',  function (_val) {
;C$.superclazz.c$$I.apply(this,[5]);C$.$init$.apply(this);
this.value=_val;
}, 1);

Clazz.newMeth(C$, 'getBoolean$',  function () {
return this.value.equals$O("true");
});

Clazz.newMeth(C$, 'getInteger$',  function () {
return Long.$ival(Math.round$D(this.getDouble$()));
});

Clazz.newMeth(C$, 'getDouble$',  function () {
try {
return Double.valueOf$S(this.value).doubleValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
return 0.0;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getString$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getObject$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
