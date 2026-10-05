(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),p$1={},I$=[[0,'java.util.Hashtable','java.util.Vector','org.opensourcephysics.ejs.control.GroupVariable','org.opensourcephysics.ejs.control.MethodWithOneParameter','org.opensourcephysics.ejs.control.value.ExpressionValue','org.opensourcephysics.ejs.control.ConstantParser','org.opensourcephysics.ejs.control.Utils','org.opensourcephysics.ejs.control.value.StringValue','org.opensourcephysics.ejs.control.value.Value','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.ejs.control.value.DoubleValue','org.opensourcephysics.ejs.control.value.BooleanValue','org.opensourcephysics.ejs.control.value.IntegerValue','org.opensourcephysics.ejs.control.value.ObjectValue','java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlElement");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myGroup=null;
this.myPropertiesTable=Clazz.new_($I$(1,1));
this.myObject=null;
this.myActiveState=true;
this.myActionsList=Clazz.new_($I$(2,1));
this.myProperties=null;
this.myPropertiesNames=null;
this.isUnderEjs=false;
this.myMethodsForProperties=null;
this.myExpressionsForProperties=null;
},1);

C$.$fields$=[['Z',['myActiveState','isUnderEjs'],'O',['myGroup','org.opensourcephysics.ejs.control.GroupControl','myPropertiesTable','java.util.Hashtable','myObject','java.lang.Object','myActionsList','java.util.Vector','myProperties','org.opensourcephysics.ejs.control.GroupVariable[]','myPropertiesNames','String[]','myMethodsForProperties','org.opensourcephysics.ejs.control.MethodWithOneParameter[]','myExpressionsForProperties','org.opensourcephysics.ejs.control.value.ExpressionValue[]']]]

Clazz.newMeth(C$, 'c$$O',  function (_object) {
;C$.$init$.apply(this);
var info=this.getPropertyList$();
this.myObject=_object;
this.myPropertiesNames=Clazz.array(String, [info.size$()]);
this.myProperties=Clazz.array($I$(3), [info.size$()]);
this.myMethodsForProperties=Clazz.array($I$(4), [info.size$()]);
this.myExpressionsForProperties=Clazz.array($I$(5), [info.size$()]);
for (var i=0; i < info.size$(); i++) {
var property=info.get$I(i);
this.myPropertiesNames[i]=property;
this.myProperties[i]=null;
this.myMethodsForProperties[i]=null;
this.myExpressionsForProperties[i]=null;
}
}, 1);

Clazz.newMeth(C$, 'getObject$',  function () {
return this.myObject;
});

Clazz.newMeth(C$, 'parseConstant$S$S',  function (_propertyType, _value) {
if (_value == null ) {
return null;
}var constantValue;
if (_propertyType.indexOf$S("boolean") >= 0) {
constantValue=$I$(6).booleanConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Color") >= 0) {
constantValue=$I$(6).colorConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("File") >= 0) {
var codebase=null;
if (this.getProperty$S("_ejs_codebase") != null ) {
codebase=this.getProperty$S("_ejs_codebase");
} else if ((this.getSimulation$() != null ) && (this.getSimulation$().getCodebase$() != null ) ) {
codebase=this.getSimulation$().getCodebase$().toString();
}if ($I$(7).fileExists$S$S(codebase, _value)) {
return Clazz.new_($I$(8,1).c$$S,[_value]);
}}if (_propertyType.indexOf$S("Font") >= 0) {
var currentFont=null;
if (this.getVisual$() != null ) {
currentFont=this.getVisual$().getFont$();
}constantValue=$I$(6).fontConstant$java_awt_Font$S(currentFont, _value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Format") >= 0) {
constantValue=$I$(6).formatConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if ((_propertyType.indexOf$S("Margins") >= 0) || (_propertyType.indexOf$S("Rectangle") >= 0) ) {
constantValue=$I$(6).rectangleConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}return null;
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (this.myGroup != null ) {
this.myGroup.rename$org_opensourcephysics_ejs_control_ControlElement$S(this, _value.toString());
}break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
if (this.myGroup != null ) {
this.myGroup.rename$org_opensourcephysics_ejs_control_ControlElement$S(this, null);
}break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
return null;
});

Clazz.newMeth(C$, 'setProperty$S$S',  function (_property, _value) {
_property=_property.trim$();
if (_property.equals$O("_ejs_")) {
this.isUnderEjs=true;
}var index=p$1.propertyIndex$S.apply(this, [_property]);
if (index < 0) {
if (_value == null ) {
this.myPropertiesTable.remove$O(_property);
} else {
this.myPropertiesTable.put$O$O(_property, _value);
}return this;
}this.myMethodsForProperties[index]=null;
this.myExpressionsForProperties[index]=null;
if (this.myProperties[index] != null ) {
this.myProperties[index].removeElementListener$org_opensourcephysics_ejs_control_ControlElement$I(this, index);
this.myProperties[index]=null;
}if (_value == null ) {
if (this.myProperties[index] != null ) {
this.myProperties[index].removeElementListener$org_opensourcephysics_ejs_control_ControlElement$I(this, index);
this.myProperties[index]=null;
}this.setDefaultValue$I(index);
this.myPropertiesTable.remove$O(_property);
return this;
}if (!this.propertyIsTypeOf$S$S(_property, "NotTrimmed")) {
_value=_value.trim$();
}var originalValue=_value;
var constantValue=null;
if (_value.startsWith$S("%") && _value.endsWith$S("%") && (_value.length$() > 2)  ) {
_value=_value.substring$I$I(1, _value.length$() - 1);
} else if (_value.startsWith$S("@") && _value.endsWith$S("@") && (_value.length$() > 2)  ) {
} else if (_value.startsWith$S("#") && _value.endsWith$S("#") && (_value.length$() > 2)  ) {
} else {
if (_value.startsWith$S("\"") || _value.startsWith$S("\'") ) {
} else {
if (this.propertyIsTypeOf$S$S(_property, "CONSTANT")) {
constantValue=Clazz.new_($I$(8,1).c$$S,[_value]);
}if (constantValue == null ) {
if (this.propertyType$S(_property).equals$O("String") && !this.propertyIsTypeOf$S$S(_property, "VARIABLE_EXPECTED") ) {
constantValue=Clazz.new_($I$(8,1).c$$S,[_value]);
}}}if (constantValue == null ) {
constantValue=this.parseConstant$S$S(this.propertyType$S(_property), _value);
}if (constantValue == null ) {
constantValue=$I$(9).parseConstantOrArray$S$Z(_value, true);
}}if (constantValue != null ) {
if ((Clazz.instanceOf(constantValue, "org.opensourcephysics.ejs.control.value.StringValue")) && this.propertyIsTypeOf$S$S(_property, "TRANSLATABLE") && ($I$(10).loadTranslatorTool)  ) {
var target=(this.myGroup == null  ? null : this.myGroup.getTarget$S("_default_"));
var translated=(target == null  ? null : $I$(10).getTranslator$().getProperty$Class$S(target.getClass$(), constantValue.getString$()));
if (!constantValue.getString$().equals$O(translated)) {
constantValue=Clazz.new_($I$(8,1).c$$S,[translated]);
}}this.setValue$I$org_opensourcephysics_ejs_control_value_Value(index, constantValue);
} else {
if (this.myGroup != null ) {
var isNormalVariable=true;
var isExpression=false;
if (_value.startsWith$S("#") && _value.endsWith$S("#") && (_value.length$() > 2)  ) {
_value=_value.substring$I$I(1, _value.length$() - 1);
isNormalVariable=true;
} else if (_value.startsWith$S("@") && _value.endsWith$S("@") && (_value.length$() > 2)  ) {
_value=_value.substring$I$I(1, _value.length$() - 1);
originalValue=_value;
isNormalVariable=false;
isExpression=true;
} else if (_value.indexOf$I("(") >= 0) {
isNormalVariable=false;
}if (isNormalVariable) {
var newValue=null;
if (this.getProperty$S("_ejs_") == null ) {
newValue=this.getValue$I(index);
}if (newValue == null ) {
if (this.propertyIsTypeOf$S$S(_property, "double")) {
newValue=Clazz.new_($I$(11,1).c$$D,[0.0]);
} else if (this.propertyIsTypeOf$S$S(_property, "boolean")) {
newValue=Clazz.new_($I$(12,1).c$$Z,[false]);
} else if (this.propertyIsTypeOf$S$S(_property, "int")) {
newValue=Clazz.new_($I$(13,1).c$$I,[0]);
} else if (this.propertyIsTypeOf$S$S(_property, "String")) {
newValue=Clazz.new_($I$(8,1).c$$S,[_value]);
} else {
newValue=Clazz.new_($I$(14,1).c$$O,[null]);
}}this.myProperties[index]=this.myGroup.registerVariable$S$org_opensourcephysics_ejs_control_ControlElement$I$org_opensourcephysics_ejs_control_value_Value(_value, this, index, newValue);
} else if (isExpression) {
var returnType=null;
if (this.propertyIsTypeOf$S$S(_property, "double")) {
returnType="double";
} else if (this.propertyIsTypeOf$S$S(_property, "boolean")) {
returnType="boolean";
} else if (this.propertyIsTypeOf$S$S(_property, "int")) {
returnType="int";
} else if (this.propertyIsTypeOf$S$S(_property, "String")) {
returnType="String";
} else if (this.propertyIsTypeOf$S$S(_property, "Action")) {
returnType="Action";
} else {
System.out.println$S("Error for property " + _property + " of the element " + this.toString() + ". Cannot be set to : " + originalValue );
this.myPropertiesTable.put$O$O(_property, originalValue);
return this;
}if (!returnType.equals$O("Action")) {
this.myExpressionsForProperties[index]=Clazz.new_($I$(5,1).c$$S$org_opensourcephysics_ejs_control_GroupControl,[_value, this.myGroup]);
this.myGroup.methodTriggerVariable.addElementListener$org_opensourcephysics_ejs_control_ControlElement$I(this, index);
this.myProperties[index]=this.myGroup.methodTriggerVariable;
}} else {
if (this.getProperty$S("_ejs_") != null ) {
} else {
var returnType=null;
if (this.propertyIsTypeOf$S$S(_property, "double")) {
returnType="double";
} else if (this.propertyIsTypeOf$S$S(_property, "boolean")) {
returnType="boolean";
} else if (this.propertyIsTypeOf$S$S(_property, "int")) {
returnType="int";
} else if (this.propertyIsTypeOf$S$S(_property, "String")) {
returnType="String";
} else {
System.out.println$S("Error for property " + _property + " of the element " + this.toString() + ". Cannot be set to : " + originalValue );
this.myPropertiesTable.put$O$O(_property, originalValue);
return this;
}var parts=$I$(4).splitMethodName$S(_value);
if (parts == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! method <" + originalValue + "> not found" );
this.myPropertiesTable.put$O$O(_property, originalValue);
return this;
}if (parts[0] == null ) {
parts[0]="_default_";
}var target=this.myGroup.getTarget$S(parts[0]);
if (target == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Target <" + parts[0] + "> not assigned" );
this.myPropertiesTable.put$O$O(_property, originalValue);
return this;
}if (parts[2] == null ) {
_value=parts[1] + "()";
} else {
_value=parts[1] + "(" + parts[2] + ")" ;
}this.myMethodsForProperties[index]=Clazz.new_($I$(4,1).c$$I$O$S$S$org_opensourcephysics_ejs_control_MethodWithOneParameter$O,[2, target, _value, returnType, null, this]);
this.myGroup.methodTriggerVariable.addElementListener$org_opensourcephysics_ejs_control_ControlElement$I(this, index);
this.myProperties[index]=this.myGroup.methodTriggerVariable;
}}}}this.myPropertiesTable.put$O$O(_property, originalValue);
return this;
});

Clazz.newMeth(C$, 'setProperties$S',  function (_propertyList) {
var propTable=Clazz.new_($I$(1,1));
var tkn=Clazz.new_($I$(15,1).c$$S$S,[_propertyList, ";"]);
while (tkn.hasMoreTokens$()){
var token=tkn.nextToken$();
if (token.trim$().length$() <= 0) {
continue;
}var index=token.indexOf$S("=");
if (index < 0) {
System.err.println$S(this.getClass$().getName$() + " : Error! Token <" + token + "> invalid for " + this.toString() );
} else {
propTable.put$O$O(token.substring$I$I(0, index).trim$(), token.substring$I(index + 1));
}}
return p$1.setProperties$java_util_Hashtable.apply(this, [propTable]);
});

Clazz.newMeth(C$, 'preprocess$S$java_util_Hashtable',  function (_property, _propertyTable) {
var value=_propertyTable.get$O(_property);
if (value != null ) {
this.setProperty$S$S(_property, value);
_propertyTable.remove$O(_property);
}}, p$1);

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (_propertyTable) {
p$1.preprocess$S$java_util_Hashtable.apply(this, ["_ejs_", _propertyTable]);
var postTable=Clazz.new_($I$(1,1));
for (var e=_propertyTable.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
if (this.propertyIsTypeOf$S$S(key, "PREVIOUS")) {
p$1.preprocess$S$java_util_Hashtable.apply(this, [key, _propertyTable]);
} else if (this.propertyIsTypeOf$S$S(key, "POSTPROCESS")) {
var value=_propertyTable.get$O(key);
_propertyTable.remove$O(key);
postTable.put$O$O(key, value);
}}
for (var e=_propertyTable.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
this.setProperty$S$S(key, _propertyTable.get$O(key));
}
for (var e=postTable.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
this.setProperty$S$S(key, postTable.get$O(key));
}
return this;
}, p$1);

Clazz.newMeth(C$, 'getProperty$S',  function (_property) {
return this.myPropertiesTable.get$O(_property);
});

Clazz.newMeth(C$, 'propertyIsTypeOf$S$S',  function (_property, _keyword) {
var info=this.getPropertyInfo$S(_property);
if (info == null ) {
return false;
}if (info.toLowerCase$().indexOf$S(_keyword.toLowerCase$()) >= 0) {
return true;
}return false;
});

Clazz.newMeth(C$, 'propertyType$S',  function (_property) {
var info=this.getPropertyInfo$S(_property);
if (info == null ) {
return "double";
}var tkn=Clazz.new_($I$(15,1).c$$S$S,[info, " "]);
if (tkn.countTokens$() >= 1) {
return tkn.nextToken$();
}return "double";
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return null;
});

Clazz.newMeth(C$, 'getVisual$',  function () {
return null;
});

Clazz.newMeth(C$, 'reset$',  function () {
});

Clazz.newMeth(C$, 'initialize$',  function () {
});

Clazz.newMeth(C$, 'propertyIndex$S',  function (_property) {
if (this.myPropertiesNames != null ) {
for (var i=0; i < this.myPropertiesNames.length; i++) {
if (this.myPropertiesNames[i].equals$O(_property)) {
return i;
}}
}return -1;
}, p$1);

Clazz.newMeth(C$, 'implementsProperty$S',  function (_property) {
return (p$1.propertyIndex$S.apply(this, [_property]) >= 0);
});

Clazz.newMeth(C$, 'variablePropertiesClear$',  function () {
if (this.myPropertiesNames != null ) {
for (var i=0; i < this.myPropertiesNames.length; i++) {
this.setProperty$S$S(this.myPropertiesNames[i], null);
}
}});

Clazz.newMeth(C$, 'toString',  function () {
var name=this.myPropertiesTable.get$O("name");
if (name != null ) {
return name;
}var text=this.getClass$().getName$();
var index=text.lastIndexOf$S(".");
if (index >= 0) {
text=text.substring$I(index + 1);
}return "Unnamed element of type " + text;
});

Clazz.newMeth(C$, 'destroy$',  function () {
this.setProperty$S$S("parent", null);
if (this.myProperties != null ) {
for (var i=0; i < this.myProperties.length; i++) {
if (this.myProperties[i] != null ) {
this.myProperties[i].removeElementListener$org_opensourcephysics_ejs_control_ControlElement$I(this, i);
}}
}});

Clazz.newMeth(C$, 'addAction$I$O$S',  function (_type, _target, _method) {
this.myActionsList.addElement$O(Clazz.new_($I$(4,1).c$$I$O$S$S$org_opensourcephysics_ejs_control_MethodWithOneParameter$O,[_type, _target, _method, null, null, this]));
return this;
});

Clazz.newMeth(C$, 'addAction$I$O$S$org_opensourcephysics_ejs_control_MethodWithOneParameter',  function (_type, _target, _method, _secondAction) {
this.myActionsList.addElement$O(Clazz.new_($I$(4,1).c$$I$O$S$S$org_opensourcephysics_ejs_control_MethodWithOneParameter$O,[_type, _target, _method, null, _secondAction, this]));
return this;
});

Clazz.newMeth(C$, 'addAction$I$S',  function (_type, _method) {
if (this.getProperty$S("_ejs_") != null ) {
_method="_ejs_.execute(\"" + _method + "\")" ;
}var target=null;
var secondAction=null;
var parts=$I$(4).splitMethodName$S(_method);
if (parts == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Method <" + _method + "> not assigned" );
return this;
}if (parts[0] == null ) {
parts[0]="_default_";
}if (this.myGroup != null ) {
target=this.myGroup.getTarget$S(parts[0]);
if ((_type == 0) && (this.getProperty$S("_ejs_SecondAction_") != null ) && (this.myGroup.getTarget$S("_default_") != null )  ) {
secondAction=Clazz.new_([_type, this.myGroup.getTarget$S("_default_"), this.getProperty$S("_ejs_SecondAction_"), null, null, this],$I$(4,1).c$$I$O$S$S$org_opensourcephysics_ejs_control_MethodWithOneParameter$O);
}}if (target == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Target <" + parts[0] + "> not assigned" );
return this;
}if (parts[2] == null ) {
return this.addAction$I$O$S$org_opensourcephysics_ejs_control_MethodWithOneParameter(_type, target, parts[1] + "()", secondAction);
}return this.addAction$I$O$S$org_opensourcephysics_ejs_control_MethodWithOneParameter(_type, target, parts[1] + "(" + parts[2] + ")" , secondAction);
});

Clazz.newMeth(C$, 'removeAction$I$O$S',  function (_type, _target, _method) {
if (_method == null ) {
return;
}for (var e=this.myActionsList.elements$(); e.hasMoreElements$(); ) {
var meth=e.nextElement$();
if (meth.equals$I$O$S(_type, _target, _method)) {
if (!this.myActionsList.removeElement$O(meth)) {
System.err.println$S(this.getClass$().getName$() + ": Error! Action " + _method + " not removed" );
}return;
}}
});

Clazz.newMeth(C$, 'removeAction$I$S',  function (_type, _method) {
if (_method == null ) {
return;
}if (this.getProperty$S("_ejs_") != null ) {
_method="_ejs_.execute(\"" + _method + "\")" ;
}var parts=$I$(4).splitMethodName$S(_method);
if (parts == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Method <" + _method + "> not removed" );
return;
}if (parts[0] == null ) {
parts[0]="_default_";
}var target=null;
if (this.myGroup != null ) {
target=this.myGroup.getTarget$S(parts[0]);
}if (target == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Target <" + parts[0] + "> not assigned" );
return;
}this.removeAction$I$O$S(_type, target, parts[1] + "(" + parts[2] + ")" );
});

Clazz.newMeth(C$, 'invokeActions$',  function () {
this.invokeActions$I(0);
});

Clazz.newMeth(C$, 'invokeActions$I',  function (_type) {
if (this.myActiveState) {
for (var e=this.myActionsList.elements$(); e.hasMoreElements$(); ) {
(e.nextElement$()).invoke$I$O(_type, this);
}
}});

Clazz.newMeth(C$, 'variableChangedDoNotUpdate$I$org_opensourcephysics_ejs_control_value_Value',  function (_variableIndex, _value) {
if ((this.myGroup != null ) && (this.myProperties != null ) ) {
this.myGroup.variableChanged$org_opensourcephysics_ejs_control_GroupVariable$org_opensourcephysics_ejs_control_ControlElement$org_opensourcephysics_ejs_control_value_Value(this.myProperties[_variableIndex], this, _value);
}if (this.myActiveState) {
for (var e=this.myActionsList.elements$(); e.hasMoreElements$(); ) {
var method=e.nextElement$();
method.invoke$I$O(1, this);
}
}});

Clazz.newMeth(C$, 'variableChanged$I$org_opensourcephysics_ejs_control_value_Value',  function (_variableIndex, _value) {
if (this.myMethodsForProperties[_variableIndex] != null ) {
return;
}this.variableChangedDoNotUpdate$I$org_opensourcephysics_ejs_control_value_Value(_variableIndex, _value);
if ((this.myGroup != null ) && (this.myGroup.getSimulation$() != null ) ) {
this.myGroup.getSimulation$().update$();
}});

Clazz.newMeth(C$, 'variablesChanged$IA$org_opensourcephysics_ejs_control_value_ValueA',  function (_variableIndex, _value) {
var doMore=false;
if ((this.myGroup != null ) && (this.myProperties != null ) ) {
for (var i=0; i < _variableIndex.length; i++) {
if (this.myMethodsForProperties[_variableIndex[i]] == null ) {
this.myGroup.variableChanged$org_opensourcephysics_ejs_control_GroupVariable$org_opensourcephysics_ejs_control_ControlElement$org_opensourcephysics_ejs_control_value_Value(this.myProperties[_variableIndex[i]], this, _value[i]);
doMore=true;
}}
}if (!doMore) {
return;
}if (this.myActiveState) {
for (var e=this.myActionsList.elements$(); e.hasMoreElements$(); ) {
var method=e.nextElement$();
method.invoke$I$O(1, this);
}
}if ((this.myGroup != null ) && (this.myGroup.getSimulation$() != null ) ) {
this.myGroup.getSimulation$().update$();
}});

Clazz.newMeth(C$, 'setActive$Z',  function (_act) {
this.myActiveState=_act;
});

Clazz.newMeth(C$, 'isActive$',  function () {
return this.myActiveState;
});

Clazz.newMeth(C$, 'setGroup$org_opensourcephysics_ejs_control_GroupControl',  function (_group) {
this.myGroup=_group;
});

Clazz.newMeth(C$, 'getGroup$',  function () {
return this.myGroup;
});

Clazz.newMeth(C$, 'getSimulation$',  function () {
if (this.myGroup == null ) {
return null;
}return this.myGroup.getSimulation$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
