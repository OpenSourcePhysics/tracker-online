(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DoubleValue", null, 'org.opensourcephysics.ejs.control.value.Value');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['value']]]

Clazz.newMeth(C$, 'c$$D',  function (_val) {
;C$.superclazz.c$$I.apply(this,[2]);C$.$init$.apply(this);
this.value=_val;
}, 1);

Clazz.newMeth(C$, 'getBoolean$',  function () {
return (this.value != 0.0 );
});

Clazz.newMeth(C$, 'getInteger$',  function () {
return Long.$ival(Math.round$D(this.value));
});

Clazz.newMeth(C$, 'getDouble$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getString$',  function () {
return String.valueOf$D(this.value);
});

Clazz.newMeth(C$, 'getObject$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
