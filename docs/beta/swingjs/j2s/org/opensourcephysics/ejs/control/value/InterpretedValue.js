(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InterpretedValue", null, 'org.opensourcephysics.ejs.control.value.Value');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['expression'],'O',['myEjsPropertyEditor','org.opensourcephysics.ejs.control.PropertyEditor']]]

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_ejs_control_PropertyEditor',  function (_expression, _editor) {
;C$.superclazz.c$$I.apply(this,[3]);C$.$init$.apply(this);
this.myEjsPropertyEditor=_editor;
this.expression= String.instantialize(_expression.trim$());
}, 1);

Clazz.newMeth(C$, 'getBoolean$',  function () {
try {
return (this.getObject$()).booleanValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return false;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getInteger$',  function () {
try {
return (this.getObject$()).intValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
try {
return Long.$ival(Math.round$D((this.getObject$()).doubleValue$()));
} catch (exc2) {
if (Clazz.exceptionOf(exc2,"Exception")){
return 0;
} else {
throw exc2;
}
}
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getDouble$',  function () {
try {
return (this.getObject$()).doubleValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return 0.0;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getString$',  function () {
return this.getObject$().toString();
});

Clazz.newMeth(C$, 'getObject$',  function () {
return this.myEjsPropertyEditor.evaluateExpression$S(this.expression);
});

Clazz.newMeth(C$, 'copyValue$org_opensourcephysics_ejs_control_value_Value',  function (_source) {
if (Clazz.instanceOf(_source, "org.opensourcephysics.ejs.control.value.InterpretedValue")) this.expression= String.instantialize((_source).expression);
 else this.expression= String.instantialize(_source.getString$());
});

Clazz.newMeth(C$, 'cloneValue$',  function () {
return Clazz.new_(C$.c$$S$org_opensourcephysics_ejs_control_PropertyEditor,[this.expression, this.myEjsPropertyEditor]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
