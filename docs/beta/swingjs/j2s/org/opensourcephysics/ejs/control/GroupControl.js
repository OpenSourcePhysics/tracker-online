(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),p$1={},I$=[[0,'org.opensourcephysics.ejs.control.GroupControl','java.util.Vector','java.util.Hashtable','org.opensourcephysics.ejs.control.value.BooleanValue','org.opensourcephysics.ejs.control.value.IntegerValue','org.opensourcephysics.ejs.control.value.DoubleValue','org.opensourcephysics.ejs.control.value.StringValue','org.opensourcephysics.ejs.control.value.ObjectValue','org.opensourcephysics.ejs.control.GroupVariable','org.opensourcephysics.ejs.control.MethodWithOneParameter',['org.opensourcephysics.ejs.control.GroupControl','.GroupControlLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GroupControl", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['GroupControlLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debugLevel=0;
this.debugPrefix="";
this.replaceOwnerName=null;
this.ownerFrame=null;
this.replaceOwnerFrame=null;
this.prefixList=Clazz.new_($I$(2,1));
this.mySimulation=null;
this.targetTable=Clazz.new_($I$(3,1));
this.elementTable=Clazz.new_($I$(3,1));
this.variableTable=Clazz.new_($I$(3,1));
this.elementList=Clazz.new_($I$(2,1));
this.updateList=Clazz.new_($I$(2,1));
this.methodTriggerVariable=null;
this.booleanValue=Clazz.new_($I$(4,1).c$$Z,[false]);
this.integerValue=Clazz.new_($I$(5,1).c$$I,[0]);
this.doubleValue=Clazz.new_($I$(6,1).c$$D,[0.0]);
this.stringValue=Clazz.new_($I$(7,1).c$$S,[""]);
this.objectValue=Clazz.new_($I$(8,1).c$$O,[null]);
},1);

C$.$fields$=[['I',['debugLevel'],'S',['debugPrefix','replaceOwnerName'],'O',['ownerFrame','java.awt.Frame','+replaceOwnerFrame','prefixList','java.util.Vector','mySimulation','org.opensourcephysics.ejs.Simulation','targetTable','java.util.Hashtable','+elementTable','+variableTable','elementList','java.util.Vector','+updateList','methodTriggerVariable','org.opensourcephysics.ejs.control.GroupVariable','booleanValue','org.opensourcephysics.ejs.control.value.BooleanValue','integerValue','org.opensourcephysics.ejs.control.value.IntegerValue','doubleValue','org.opensourcephysics.ejs.control.value.DoubleValue','stringValue','org.opensourcephysics.ejs.control.value.StringValue','objectValue','org.opensourcephysics.ejs.control.value.ObjectValue']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.debugPrefix=this.getClass$().getName$();
var index=this.debugPrefix.lastIndexOf$S(".");
if (index >= 0) {
this.debugPrefix=this.debugPrefix.substring$I(index + 1);
}this.appendPrefixPath$S("org.opensourcephysics.ejs.control.swing.Control");
this.appendPrefixPath$S("org.opensourcephysics.ejs.control.drawables.Control");
this.appendPrefixPath$S("org.opensourcephysics.ejs.control.displayejs.Control");
this.setValue$S$org_opensourcephysics_ejs_control_value_Value("_expr_", Clazz.new_($I$(4,1).c$$Z,[false]));
this.methodTriggerVariable=this.variableTable.get$O("_expr_");
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (_target) {
C$.c$.apply(this, []);
this.addTarget$S$O("_default_", _target);
if (Clazz.instanceOf(_target, "org.opensourcephysics.ejs.Simulation")) {
this.setSimulation$org_opensourcephysics_ejs_Simulation(_target);
}}, 1);

Clazz.newMeth(C$, 'c$$O$S$java_awt_Frame',  function (_simulation, _replaceName, _replaceOwnerFrame) {
C$.c$$O.apply(this, [_simulation]);
this.replaceOwnerFrame$S$java_awt_Frame(_replaceName, _replaceOwnerFrame);
}, 1);

Clazz.newMeth(C$, 'setOwnerFrame$java_awt_Frame',  function (_frame) {
this.ownerFrame=_frame;
});

Clazz.newMeth(C$, 'getOwnerFrame$',  function () {
return this.ownerFrame;
});

Clazz.newMeth(C$, 'replaceOwnerFrame$S$java_awt_Frame',  function (_replaceName, _replaceOwnerFrame) {
this.replaceOwnerName=_replaceName;
this.replaceOwnerFrame=_replaceOwnerFrame;
});

Clazz.newMeth(C$, 'getReplaceOwnerName$',  function () {
return this.replaceOwnerName;
});

Clazz.newMeth(C$, 'getReplaceOwnerFrame$',  function () {
return this.replaceOwnerFrame;
});

Clazz.newMeth(C$, 'clearPrefixPath$',  function () {
this.prefixList.clear$();
});

Clazz.newMeth(C$, 'appendPrefixPath$S',  function (_prefix) {
this.prefixList.add$O(_prefix);
});

Clazz.newMeth(C$, 'getDefaultPrefixList$',  function () {
return this.prefixList;
});

Clazz.newMeth(C$, 'setSimulation$org_opensourcephysics_ejs_Simulation',  function (_sim) {
this.mySimulation=_sim;
});

Clazz.newMeth(C$, 'getSimulation$',  function () {
return this.mySimulation;
});

Clazz.newMeth(C$, 'setDebugLevel$I',  function (_level) {
this.debugLevel=_level;
});

Clazz.newMeth(C$, 'getDebugLevel$',  function () {
return this.debugLevel;
});

Clazz.newMeth(C$, 'getTarget$S',  function (_name) {
return this.targetTable.get$O(_name);
});

Clazz.newMeth(C$, 'addTarget$S$O',  function (_name, _target) {
this.targetTable.put$O$O(_name, _target);
});

Clazz.newMeth(C$, 'removeTarget$S',  function (_name) {
this.targetTable.remove$O(_name);
});

Clazz.newMeth(C$, 'setValue$S$org_opensourcephysics_ejs_control_value_Value',  function (_name, _value) {
var variable=this.variableTable.get$O(_name);
if (variable == null ) {
variable=Clazz.new_($I$(9,1).c$$S$org_opensourcephysics_ejs_control_value_Value,[_name, _value]);
this.variableTable.put$O$O(_name, variable);
} else {
variable.setValue$org_opensourcephysics_ejs_control_value_Value(_value);
variable.propagateValue$org_opensourcephysics_ejs_control_ControlElement(null);
}});

Clazz.newMeth(C$, 'getValue$S',  function (_name) {
var variable=this.variableTable.get$O(_name);
if (variable == null ) {
return null;
}return variable.getValue$();
});

Clazz.newMeth(C$, 'registerVariable$S$org_opensourcephysics_ejs_control_ControlElement$I$org_opensourcephysics_ejs_control_value_Value',  function (_name, _element, _index, _value) {
if (_name == null ) {
return null;
}var variable=this.variableTable.get$O(_name);
if (variable == null ) {
variable=Clazz.new_($I$(9,1).c$$S$org_opensourcephysics_ejs_control_value_Value,[_name, _value]);
this.variableTable.put$O$O(_name, variable);
if ((this.debugLevel & 1) > 0) {
System.out.print$S("   Created new variable <" + _name + "> with value = <" + _value + "> ..." );
}}if ((this.debugLevel & 1) > 0) {
System.out.println$S("   Variable <" + _name + "> registered for element <" + _element + ">" );
}variable.addElementListener$org_opensourcephysics_ejs_control_ControlElement$I(_element, _index);
variable.propagateValue$org_opensourcephysics_ejs_control_ControlElement(null);
return variable;
});

Clazz.newMeth(C$, 'isVariableRegistered$S',  function (_name) {
if (_name == null ) {
return false;
}return (this.variableTable.get$O(_name) != null );
});

Clazz.newMeth(C$, 'variableChanged$org_opensourcephysics_ejs_control_GroupVariable$org_opensourcephysics_ejs_control_ControlElement$org_opensourcephysics_ejs_control_value_Value',  function (_variable, _element, _value) {
if (_variable == null ) {
return;
}_variable.setValue$org_opensourcephysics_ejs_control_value_Value(_value);
_variable.propagateValue$org_opensourcephysics_ejs_control_ControlElement(_element);
_variable.invokeListeners$org_opensourcephysics_ejs_control_ControlElement(_element);
});

Clazz.newMeth(C$, 'addListener$S$S',  function (_name, _method) {
this.addListener$S$S$O(_name, _method, null);
});

Clazz.newMeth(C$, 'addListener$S$S$O',  function (_name, _method, _anObject) {
if ((this.debugLevel & 1) > 0) {
System.out.print$S(this.debugPrefix + ": Adding listener for variable <" + _name + "> to <" + _method + "> ..." );
}if (_name == null ) {
return;
}var parts=$I$(10).splitMethodName$S(_method);
if (parts == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Listener <" + _method + "> not assigned" );
return;
}if (parts[0] == null ) {
parts[0]="_default_";
}var target=this.getTarget$S(parts[0]);
if (target == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Target <" + parts[0] + "> not assigned" );
return;
} else if ((this.debugLevel & 1) > 0) {
System.out.print$S(this.debugPrefix + ": Target <" + parts[0] + "> found. Method is <" + _method + "> ..." );
}var variable=this.variableTable.get$O(_name);
if (variable == null ) {
variable=Clazz.new_($I$(9,1).c$$S$org_opensourcephysics_ejs_control_value_Value,[_name, this.doubleValue]);
this.variableTable.put$O$O(_name, variable);
if ((this.debugLevel & 1) > 0) {
System.out.print$S("   Created new variable <" + _name + "> for listener <" + _method + "> ..." );
}}if (parts[2] == null ) {
variable.addListener$O$S$O(target, parts[1] + "()", _anObject);
} else {
variable.addListener$O$S$O(target, parts[1] + "(" + parts[2] + ")" , _anObject);
}});

Clazz.newMeth(C$, 'rename$org_opensourcephysics_ejs_control_ControlElement$S',  function (_element, _name) {
var oldName=_element.getProperty$S("name");
if (oldName != null ) {
this.elementTable.remove$O(oldName);
}if (_name != null ) {
this.elementTable.put$O$O(_name, _element);
}});

Clazz.newMeth(C$, 'addNamed$S$S',  function (_type, _name) {
var propertyList="name=" + _name;
if ((this.replaceOwnerName == null ) || !this.replaceOwnerName.equals$O(_name) ) {
return this.addObject$O$S$S(null, _type, propertyList);
}if (_type.endsWith$S("ControlFrame") || _type.endsWith$S("ControlDrawingFrame") ) {
this.setOwnerFrame$java_awt_Frame(this.replaceOwnerFrame);
return this.addObject$O$S$S(null, "org.opensourcephysics.ejs.control.swing.ControlPanel", propertyList);
}return this.addObject$O$S$S(null, _type, propertyList);
});

Clazz.newMeth(C$, 'add$S',  function (_type) {
return this.addObject$O$S$S(null, _type, null);
});

Clazz.newMeth(C$, 'add$S$S',  function (_type, _propertyList) {
return this.addObject$O$S$S(null, _type, _propertyList);
});

Clazz.newMeth(C$, 'addObject$O$S',  function (_object, _type) {
return this.addObject$O$S$S(_object, _type, null);
});

Clazz.newMeth(C$, 'addObject$O$S$S',  function (_object, _type, _propertyList) {
var element=null;
if ((this.debugLevel & 2) > 0) {
System.err.println$S(this.getClass$().getName$() + " Adding element of type <" + _type + "> with properties <" + _propertyList + ">" );
if (_object != null ) {
System.err.println$S(this.getClass$().getName$() + " using element " + _object );
}}if (_type.indexOf$S(".") < 0) {
for (var e=this.prefixList.elements$(); e.hasMoreElements$() && (element == null ) ; ) {
element=p$1.instantiateClass$O$S$Z.apply(this, [_object, e.nextElement$() + _type, false]);
}
}if (element == null ) {
element=p$1.instantiateClass$O$S$Z.apply(this, [_object, _type, true]);
}if (element == null ) {
return null;
}if (Clazz.instanceOf(element, "org.opensourcephysics.ejs.control.swing.ControlFrame")) {
this.setOwnerFrame$java_awt_Frame((element).getComponent$());
}if ((Clazz.instanceOf(element, "org.opensourcephysics.ejs.control.swing.ControlDialog")) && (this.ownerFrame != null ) ) {
((element).getComponent$()).dispose$();
(element).replaceVisual$java_awt_Frame(this.ownerFrame);
}element.setGroup$org_opensourcephysics_ejs_control_GroupControl(this);
this.elementList.add$O(element);
if (Clazz.instanceOf(element, "org.opensourcephysics.ejs.control.NeedsUpdate")) {
this.updateList.add$O(element);
}if ((this.debugLevel & 2) > 0) {
System.err.println$S(this.getClass$().getName$() + " Setting properties to <" + _propertyList + ">" );
}if (_propertyList != null ) {
element.setProperties$S(_propertyList);
}if (Clazz.instanceOf(element, "org.opensourcephysics.ejs.control.swing.ControlWindow")) {
if (element.getProperty$S("visible") == null ) {
element.setProperty$S$S("visible", "true");
}}return element;
});

Clazz.newMeth(C$, 'instantiateClass$O$S$Z',  function (_object, _classname, _verbose) {
if ((this.debugLevel & 2) > 0) {
System.err.println$S(this.getClass$().getName$() + ": Trying to instantiate element of class " + _classname );
if (_object != null ) {
System.err.println$S(this.getClass$().getName$() + " using element " + _object );
}}try {
var aClass=Clazz.forName(_classname);
var c=Clazz.array(Class, -1, [Clazz.getClass(java.lang.Object)]);
var o=Clazz.array(java.lang.Object, -1, [_object]);
var constructor=aClass.getDeclaredConstructor$ClassA(c);
return constructor.newInstance$OA(o);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
if (_verbose) {
_exc.printStackTrace$();
return null;
}} else {
throw _exc;
}
}
try {
var aClass=Clazz.forName(_classname);
return aClass.newInstance$();
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
if (_verbose) {
_exc.printStackTrace$();
}return null;
} else {
throw _exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'getElement$S',  function (_name) {
if (_name == null ) {
return null;
}var element=this.elementTable.get$O(_name);
if (element == null ) {
return null;
}return element;
});

Clazz.newMeth(C$, 'getControl$S',  function (_name) {
return this.getElement$S(_name);
});

Clazz.newMeth(C$, 'getVisual$S',  function (_name) {
var element=this.getElement$S(_name);
if (element == null ) {
return null;
}return element.getVisual$();
});

Clazz.newMeth(C$, 'getComponent$S',  function (_name) {
var element=this.getElement$S(_name);
if (element == null ) {
return null;
}return element.getComponent$();
});

Clazz.newMeth(C$, 'getContainer$S',  function (_name) {
var element=this.getElement$S(_name);
if (Clazz.instanceOf(element, "org.opensourcephysics.ejs.control.swing.ControlContainer")) {
return (element).getContainer$();
}return null;
});

Clazz.newMeth(C$, 'destroy$S',  function (_name) {
p$1.destroy$org_opensourcephysics_ejs_control_ControlElement$Z.apply(this, [this.getElement$S(_name), true]);
});

Clazz.newMeth(C$, 'destroy$org_opensourcephysics_ejs_control_ControlElement',  function (_element) {
p$1.destroy$org_opensourcephysics_ejs_control_ControlElement$Z.apply(this, [_element, true]);
});

Clazz.newMeth(C$, 'reset$',  function () {
for (var e=this.elementList.elements$(); e.hasMoreElements$(); ) {
e.nextElement$().reset$();
}
});

Clazz.newMeth(C$, 'initialize$',  function () {
for (var e=this.elementList.elements$(); e.hasMoreElements$(); ) {
e.nextElement$().initialize$();
}
});

Clazz.newMeth(C$, 'update$',  function () {
this.methodTriggerVariable.propagateValue$org_opensourcephysics_ejs_control_ControlElement(null);
for (var e=this.updateList.elements$(); e.hasMoreElements$(); ) {
(e.nextElement$()).update$();
}
});

Clazz.newMeth(C$, 'setActive$Z',  function (_active) {
for (var e=this.elementList.elements$(); e.hasMoreElements$(); ) {
e.nextElement$().setActive$Z(_active);
}
});

Clazz.newMeth(C$, 'clearVariables$',  function () {
this.variableTable.clear$();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.variableTable.clear$();
this.setOwnerFrame$java_awt_Frame(null);
for (var e=this.elementList.elements$(); e.hasMoreElements$(); ) {
var element=e.nextElement$();
var parent=element.getProperty$S("parent");
if (parent == null ) {
p$1.destroy$org_opensourcephysics_ejs_control_ControlElement$Z.apply(this, [element, false]);
}}
if ((this.debugLevel & 2) > 0) {
System.err.println$S(this.getClass$().getName$() + " Warning!: All element were destroyed!");
System.err.println$S("  List of remaining elements follows: ");
for (var e=this.elementList.elements$(); e.hasMoreElements$(); ) {
var element=e.nextElement$();
System.err.println$S("    " + element.toString() + "(class is " + element.getClass$().getName$() + ")" );
}
}});

Clazz.newMeth(C$, 'destroy$org_opensourcephysics_ejs_control_ControlElement$Z',  function (_element, _informMyParent) {
if (_element == null ) {
return;
}if (_informMyParent) {
var parent=this.getElement$S(_element.getProperty$S("parent"));
if (parent != null ) {
if (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) {
(parent).remove$org_opensourcephysics_ejs_control_ControlElement(_element);
}} else {
var cont=_element.getComponent$().getParent$();
if (cont != null ) {
cont.remove$java_awt_Component(_element.getComponent$());
cont.validate$();
cont.repaint$();
}}}_element.variablePropertiesClear$();
var name=_element.getProperty$S("name");
if (name != null ) {
this.elementTable.remove$O(name);
}this.elementList.remove$O(_element);
if (Clazz.instanceOf(_element, "org.opensourcephysics.ejs.control.NeedsUpdate")) {
this.updateList.remove$O(_element);
}if (Clazz.instanceOf(_element, "org.opensourcephysics.ejs.control.swing.ControlContainer")) {
for (var e=(_element).getChildren$().elements$(); e.hasMoreElements$(); ) {
var child=e.nextElement$();
p$1.destroy$org_opensourcephysics_ejs_control_ControlElement$Z.apply(this, [child, false]);
}
}if (Clazz.instanceOf(_element, "org.opensourcephysics.ejs.control.swing.ControlWindow")) {
(_element).dispose$();
}}, p$1);

Clazz.newMeth(C$, 'getTopLevelAncestor$S',  function (_name) {
if (_name != null ) {
var element=this.getElement$S(_name);
var comp=element.getComponent$();
if (Clazz.instanceOf(comp, "javax.swing.JComponent")) {
return (comp).getTopLevelAncestor$();
}} else {
for (var e=this.elementList.elements$(); e.hasMoreElements$(); ) {
var element=e.nextElement$();
var comp=element.getComponent$();
if (Clazz.instanceOf(comp, "java.awt.Window")) {
return comp;
}}
}return null;
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (_name, _value) {
this.booleanValue.setValue$Z(_value);
this.setValue$S$org_opensourcephysics_ejs_control_value_Value(_name, this.booleanValue);
});

Clazz.newMeth(C$, 'setValue$S$I',  function (_name, _value) {
this.integerValue.value=_value;
this.setValue$S$org_opensourcephysics_ejs_control_value_Value(_name, this.integerValue);
});

Clazz.newMeth(C$, 'setValue$S$D',  function (_name, _value) {
this.doubleValue.value=_value;
this.setValue$S$org_opensourcephysics_ejs_control_value_Value(_name, this.doubleValue);
});

Clazz.newMeth(C$, 'setValue$S$S',  function (_name, _value) {
this.stringValue.value=_value;
this.setValue$S$org_opensourcephysics_ejs_control_value_Value(_name, this.stringValue);
});

Clazz.newMeth(C$, 'setValue$S$O',  function (_name, _value) {
if (Clazz.instanceOf(_value, "java.lang.String")) {
this.setValue$S$S(_name, _value);
} else {
this.objectValue.value=_value;
this.setValue$S$org_opensourcephysics_ejs_control_value_Value(_name, this.objectValue);
}});

Clazz.newMeth(C$, 'getBoolean$S',  function (_name) {
var value=this.getValue$S(_name);
if (value == null ) {
return false;
}return value.getBoolean$();
});

Clazz.newMeth(C$, 'getInt$S',  function (_name) {
var value=this.getValue$S(_name);
if (value == null ) {
return 0;
}return value.getInteger$();
});

Clazz.newMeth(C$, 'getDouble$S',  function (_name) {
var value=this.getValue$S(_name);
if (value == null ) {
return 0.0;
}return value.getDouble$();
});

Clazz.newMeth(C$, 'getString$S',  function (_name) {
var value=this.getValue$S(_name);
if (value == null ) {
return "";
}return value.getString$();
});

Clazz.newMeth(C$, 'getObject$S',  function (_name) {
var value=this.getValue$S(_name);
if (value == null ) {
return null;
}return value.getObject$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(11,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupControl, "GroupControlLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var groupcontrol=obj;
var table=groupcontrol.variableTable;
var it=table.keySet$().iterator$();
while (it.hasNext$()){
var name=it.next$();
if (!name.startsWith$S("_")) {
if (groupcontrol.getObject$S(name).getClass$().isArray$()) {
control.setValue$S$O(name, groupcontrol.getObject$S(name));
} else {
control.setValue$S$O(name, groupcontrol.getString$S(name));
}}}
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$O,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var groupcontrol=obj;
var table=groupcontrol.variableTable;
var it=table.keySet$().iterator$();
while (it.hasNext$()){
var name=it.next$();
if (control.getString$S(name) != null ) {
groupcontrol.setValue$S$S(name, control.getString$S(name));
} else if (control.getObject$S(name) != null ) {
var namedObj=control.getObject$S(name);
if (Clazz.instanceOf(namedObj, "java.awt.Color")) {
groupcontrol.setValue$S$O(name, namedObj);
}if (namedObj.getClass$().isArray$()) {
groupcontrol.setValue$S$O(name, namedObj);
} else {
groupcontrol.setValue$S$S(name, namedObj.toString());
}}}
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
