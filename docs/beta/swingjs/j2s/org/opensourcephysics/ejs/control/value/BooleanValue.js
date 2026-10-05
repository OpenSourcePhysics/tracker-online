(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BooleanValue", null, 'org.opensourcephysics.ejs.control.value.Value');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['value']]]

Clazz.newMeth(C$, 'c$$Z',  function (_val) {
;C$.superclazz.c$$I.apply(this,[1]);C$.$init$.apply(this);
this.value=_val;
}, 1);

Clazz.newMeth(C$, 'setValue$Z',  function (_value) {
this.value=_value;
});

Clazz.newMeth(C$, 'setValue$org_opensourcephysics_ejs_control_value_Value',  function (_value) {
return this.value=_value.getBoolean$();
});

Clazz.newMeth(C$, 'getBoolean$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getInteger$',  function () {
if (this.value) {
return 1;
}return 0;
});

Clazz.newMeth(C$, 'getDouble$',  function () {
if (this.value) {
return 1.0;
}return 0.0;
});

Clazz.newMeth(C$, 'getString$',  function () {
if (this.value) {
return "true";
}return "false";
});

Clazz.newMeth(C$, 'getObject$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
