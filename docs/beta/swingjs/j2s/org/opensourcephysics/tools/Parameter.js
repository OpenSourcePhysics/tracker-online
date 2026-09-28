(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.Parameter','org.opensourcephysics.numerics.ParsedMultiVarFunction',['org.opensourcephysics.tools.Parameter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Parameter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, [['org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.tools.FunctionEditor.FObject']]);
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.value=NaN;
this.expressionEditable=true;
this.nameEditable=true;
this.synced=false;
},1);

C$.$fields$=[['Z',['expressionEditable','nameEditable','synced'],'D',['value'],'S',['paramName','expression','description']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, $function) {
;C$.$init$.apply(this);
this.paramName=name;
this.expression=$function;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (name, $function, desc) {
C$.c$$S$S.apply(this, [name, $function]);
this.setDescription$S(desc);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.paramName;
});

Clazz.newMeth(C$, 'getExpression$',  function () {
return this.expression;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'isExpressionEditable$',  function () {
return this.expressionEditable;
});

Clazz.newMeth(C$, 'setExpressionEditable$Z',  function (edit) {
this.expressionEditable=edit;
});

Clazz.newMeth(C$, 'isNameEditable$',  function () {
return this.nameEditable;
});

Clazz.newMeth(C$, 'setNameEditable$Z',  function (edit) {
this.nameEditable=edit;
});

Clazz.newMeth(C$, 'isSynced$',  function () {
return this.synced;
});

Clazz.newMeth(C$, 'setSynced$Z',  function (sync) {
this.synced=sync;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "org.opensourcephysics.tools.Parameter")) {
var p=obj;
return p.getName$().equals$O(this.paramName) && p.getExpression$().equals$O(this.expression) && (p.isExpressionEditable$() == this.expressionEditable ) && (p.isNameEditable$() == this.nameEditable )  ;
}return false;
});

Clazz.newMeth(C$, 'evaluate$java_util_List',  function (parameters) {
var n=parameters.contains$O(this) ? parameters.size$() - 1 : parameters.size$();
var array=Clazz.array(C$, [n]);
var j=0;
for (var i=0; i < parameters.size$(); i++) {
var next=parameters.get$I(i);
if (next === this ) {
continue;
}array[j++]=next;
}
return this.evaluate$org_opensourcephysics_tools_ParameterA(array);
});

Clazz.newMeth(C$, 'evaluate$org_opensourcephysics_tools_ParameterA',  function (parameters) {
var n=parameters.length;
var names=Clazz.array(String, [n]);
var values=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
names[i]=parameters[i].paramName;
values[i]=parameters[i].value;
}
try {
var express=this.expression;
var temp=Clazz.array(String, -1, ["if", "atan2", "min", "max", "mod"]);
var replace=true;
for (var i=0; i < temp.length; i++) replace=replace && express.indexOf$S(temp[i]) == -1 ;

if (replace) {
express=express.replaceAll$S$S(",", ".");
}var f=Clazz.new_($I$(2,1).c$$S$SA$Z,[express, names, false]);
this.value=f.evaluate$DA(values);
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
this.value=NaN;
} else {
throw ex;
}
}
return this.value;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[Parameter " + this.paramName + "=" + this.expression + " = " + new Double(this.value).toString() + "]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Parameter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
control.setValue$S$O("name", p.getName$());
control.setValue$S$O("function", p.getExpression$());
control.setValue$S$Z("editable", p.isExpressionEditable$());
control.setValue$S$Z("name_editable", p.isNameEditable$());
control.setValue$S$O("description", p.getDescription$());
control.setValue$S$Z("synced", p.isSynced$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var name=control.getString$S("name");
var f=control.getString$S("function");
return Clazz.new_($I$(1,1).c$$S$S,[name, f]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
if (control.getPropertyNamesRaw$().contains$O("editable")) {
p.setExpressionEditable$Z(control.getBoolean$S("editable"));
}if (control.getPropertyNamesRaw$().contains$O("name_editable")) {
p.setNameEditable$Z(control.getBoolean$S("name_editable"));
}if (control.getPropertyNamesRaw$().contains$O("synced")) {
p.setSynced$Z(control.getBoolean$S("synced"));
}p.setDescription$S(control.getString$S("description"));
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
