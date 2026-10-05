(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'org.opensourcephysics.numerics.Util']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParsedEjsControl", null, 'org.opensourcephysics.ejs.control.EjsControl', 'org.opensourcephysics.controls.SimControl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$O',  function (simulation) {
;C$.superclazz.c$$O.apply(this,[simulation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDouble$S',  function ($var) {
var value=this.getValue$S($var);
if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.DoubleValue")) {
return C$.superclazz.prototype.getDouble$S.apply(this, [$var]);
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.IntegerValue")) {
return C$.superclazz.prototype.getInt$S.apply(this, [$var]);
} else {
var str=C$.superclazz.prototype.getString$S.apply(this, [$var]);
try {
return Double.parseDouble$S(str);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
return $I$(1).evalMath$S(str);
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'getObject$S',  function ($var) {
var value=this.getValue$S($var);
if (value == null ) {
return null;
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.IntegerValue")) {
return Integer.valueOf$I(C$.superclazz.prototype.getInt$S.apply(this, [$var]));
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.DoubleValue")) {
return  new Double(C$.superclazz.prototype.getDouble$S.apply(this, [$var]));
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.BooleanValue")) {
return Boolean.valueOf$Z(C$.superclazz.prototype.getBoolean$S.apply(this, [$var]));
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.StringValue")) {
return C$.superclazz.prototype.getString$S.apply(this, [$var]);
}return C$.superclazz.prototype.getObject$S.apply(this, [$var]);
});

Clazz.newMeth(C$, 'getInt$S',  function ($var) {
var value=this.getValue$S($var);
if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.IntegerValue")) {
return C$.superclazz.prototype.getInt$S.apply(this, [$var]);
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.DoubleValue")) {
return (C$.superclazz.prototype.getDouble$S.apply(this, [$var])|0);
} else {
var str=C$.superclazz.prototype.getString$S.apply(this, [$var]);
try {
return Integer.parseInt$S(str);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
return ($I$(1).evalMath$S(str)|0);
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'removeParameter$S',  function (name) {
this.setValue$S$O(name, null);
this.variableTable.remove$O(name);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$Z',  function (name, val) {
this.setValue$S$Z(name, val);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$D',  function (name, val) {
this.setValue$S$D(name, val);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$I',  function (name, val) {
this.setValue$S$I(name, val);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$O',  function (name, val) {
this.setValue$S$O(name, val);
});

Clazz.newMeth(C$, 'setParameterToFixed$S$Z',  function (name, fixed) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
