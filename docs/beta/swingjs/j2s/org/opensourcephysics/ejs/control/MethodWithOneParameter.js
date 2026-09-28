(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'org.opensourcephysics.ejs.control.value.Value','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.ejs.control.value.DoubleValue','org.opensourcephysics.ejs.control.value.IntegerValue','org.opensourcephysics.ejs.control.value.StringValue','org.opensourcephysics.ejs.control.value.ObjectValue']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MethodWithOneParameter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.targetObject=null;
this.parameterList=Clazz.array(java.lang.Object, -1, []);
this.secondMethod=null;
this.returnValue=null;
},1);

C$.$fields$=[['I',['methodType'],'S',['methodName'],'O',['targetObject','java.lang.Object','parameterList','Object[]','methodToCall','java.lang.reflect.Method','secondMethod','org.opensourcephysics.ejs.control.MethodWithOneParameter','returnValue','org.opensourcephysics.ejs.control.value.Value']]]

Clazz.newMeth(C$, 'c$$I$O$S$S$org_opensourcephysics_ejs_control_MethodWithOneParameter$O',  function (_type, _target, _name, _returnType, _secondMethod, _anObject) {
;C$.$init$.apply(this);
var classList=Clazz.array(Class, -1, []);
var parameter=null;
var parameterClass=null;
this.methodName=_name;
this.methodType=_type;
this.targetObject=_target;
this.secondMethod=_secondMethod;
var parts=C$.splitMethodName$S(_name.trim$());
if (parts[2].equals$O("#CONTROL#") && (_anObject != null ) ) {
parameter=_anObject;
parameterClass=_anObject.getClass$();
} else {
var value=$I$(1).parseConstant$S$Z(parts[2], false);
if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.StringValue")) {
parameter=value.getString$();
parameterClass=_name.getClass$();
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.BooleanValue")) {
parameter=Boolean.valueOf$Z(value.getBoolean$());
parameterClass=Boolean.TYPE;
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.DoubleValue")) {
parameter= new Double(value.getDouble$());
parameterClass=Double.TYPE;
} else if (Clazz.instanceOf(value, "org.opensourcephysics.ejs.control.value.IntegerValue")) {
parameter=Integer.valueOf$I(value.getInteger$());
parameterClass=Integer.TYPE;
}}if (parameter != null ) {
classList=Clazz.array(Class, [1]);
classList[0]=parameterClass;
this.parameterList=Clazz.array(java.lang.Object, [1]);
this.parameterList[0]=parameter;
}this.methodToCall=C$.resolveMethod$O$S$ClassA(this.targetObject, parts[1], classList);
if (this.methodToCall == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Unable to find a suitable method " + this.methodName + " in class " + this.targetObject.getClass$().getName$() );
}if ($I$(2).isJS || _returnType == null  ) {
this.returnValue=null;
} else {
_returnType=_returnType.trim$().toLowerCase$();
if (_returnType.equals$O("double")) this.returnValue=Clazz.new_($I$(3,1).c$$D,[0.0]);
 else if (_returnType.equals$O("int")) this.returnValue=Clazz.new_($I$(4,1).c$$I,[0]);
 else if (_returnType.equals$O("string")) this.returnValue=Clazz.new_($I$(5,1).c$$S,[""]);
 else if (_returnType.equals$O("boolean")) this.returnValue=$I$(1).VALUE_FALSE;
 else if (_returnType.equals$O("object")) this.returnValue=Clazz.new_($I$(6,1).c$$O,[null]);
 else this.returnValue=null;
}}, 1);

Clazz.newMeth(C$, 'inferType$O',  function (val) {
var c=val.getClass$();
if (c === Clazz.getClass(String) ) return Clazz.new_($I$(5,1).c$$S,[null]);
if (c === Clazz.getClass(Float)  || c === Clazz.getClass(Double)  ) return Clazz.new_($I$(3,1).c$$D,[0]);
if (c === Clazz.getClass(Integer) ) return Clazz.new_($I$(4,1).c$$I,[0]);
if (c === Clazz.getClass(Boolean) ) return $I$(1).VALUE_FALSE;
return Clazz.new_($I$(6,1).c$$O,[null]);
}, 1);

Clazz.newMeth(C$, 'invoke$I$O',  function (_type, _callingObject) {
if (this.methodType != _type) return null;
var ret=this.returnValue;
try {
var val=this.methodToCall.invoke$O$OA(this.targetObject, this.parameterList);
if (val == null ) {
ret=$I$(1).VALUE_NULL;
} else {
if (ret == null ) ret=C$.inferType$O(val);
switch (ret.getType$()) {
default:
case 0:
(ret).value=val;
break;
case 1:
ret=((val).booleanValue$() ? $I$(1).VALUE_TRUE : $I$(1).VALUE_FALSE);
break;
case 2:
(ret).value=(val).doubleValue$();
break;
case 3:
break;
case 4:
(ret).value=(val).intValue$();
break;
case 5:
(ret).value=val.toString();
break;
}
}if (this.secondMethod != null ) {
this.secondMethod.invoke$I$O(_type, _callingObject);
}} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$java_io_PrintStream(System.err);
return null;
} else {
throw exc;
}
}
return ret;
});

Clazz.newMeth(C$, 'equals$I$O$S',  function (_type, _target, _name) {
if (this.methodType != _type) {
return false;
}if (this.targetObject !== _target ) {
return false;
}return this.methodName.equals$O(_name);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.methodName;
});

Clazz.newMeth(C$, 'resolveMethod$O$S$ClassA',  function (_target, _name, _classList) {
var allMethods=_target.getClass$().getMethods$();
for (var i=0; i < allMethods.length; i++) {
var jsName=_name;
if ($I$(2).isJS && allMethods[i].getName$().endsWith$S("$") && !_name.endsWith$S("$")  ) {
jsName=_name + "$";
}if (!allMethods[i].getName$().equals$O(jsName)) {
continue;
}var parameters=allMethods[i].getParameterTypes$();
if (parameters.length != _classList.length) {
continue;
}var fits=true;
for (var j=0; j < parameters.length; j++) {
if (!parameters[j].isAssignableFrom$Class(_classList[j])) {
fits=false;
break;
}}
if (fits) {
if ($I$(2).isJS) {
var m=null;
try {
m=_target.getClass$().getMethod$S$ClassA(_name, parameters);
} catch (nsme) {
if (Clazz.exceptionOf(nsme,"NoSuchMethodException")){
System.err.println$S("Error resolving method" + _name);
} else {
throw nsme;
}
}
return m;
}return allMethods[i];
}}
return null;
}, 1);

Clazz.newMeth(C$, 'splitMethodName$S',  function (_inputName) {
var part=Clazz.array(String, [3]);
var restOfIt=_inputName;
var index1=_inputName.indexOf$I(".");
var index2=_inputName.indexOf$I("(");
if ((index1 > 0) && ((index2 < 0) || (index2 > index1) ) ) {
part[0]=_inputName.substring$I$I(0, index1);
restOfIt=_inputName.substring$I(index1 + 1);
} else {
part[0]=null;
}index1=restOfIt.indexOf$S("(");
if (index1 <= 0) {
part[1]=restOfIt;
part[2]=null;
} else {
part[1]=restOfIt.substring$I$I(0, index1).trim$();
restOfIt=restOfIt.substring$I(index1);
index2=restOfIt.lastIndexOf$I(")");
if (index2 < 0) {
System.err.println$S(" : Error! Incorrect method description " + _inputName);
return null;
}part[2]=restOfIt.substring$I$I(1, index2).trim$();
}return part;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
