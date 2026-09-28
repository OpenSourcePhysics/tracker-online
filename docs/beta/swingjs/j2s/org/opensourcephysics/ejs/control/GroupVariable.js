(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.ejs.control.value.DoubleValue',['org.opensourcephysics.ejs.control.GroupVariable','.Item'],'org.opensourcephysics.ejs.control.MethodWithOneParameter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GroupVariable", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Item',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['value','org.opensourcephysics.ejs.control.value.Value','elementList','java.util.List','+methodList']]]

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_ejs_control_value_Value',  function (_aName, _aValue) {
;C$.$init$.apply(this);
this.name=_aName;
this.elementList=Clazz.new_($I$(1,1));
this.methodList=Clazz.new_($I$(1,1));
if (_aValue != null ) {
this.value=_aValue.cloneValue$();
} else {
this.value=Clazz.new_($I$(2,1).c$$D,[0.0]);
}}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setValue$org_opensourcephysics_ejs_control_value_Value',  function (_aValue) {
if (this.value.getClass$() !== _aValue.getClass$() ) {
this.value=_aValue.cloneValue$();
} else {
this.value.copyValue$org_opensourcephysics_ejs_control_value_Value(_aValue);
}});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'addElementListener$org_opensourcephysics_ejs_control_ControlElement$I',  function (_element, _index) {
this.elementList.add$O(Clazz.new_($I$(3,1).c$$org_opensourcephysics_ejs_control_ControlElement$I,[this, null, _element, _index]));
});

Clazz.newMeth(C$, 'removeElementListener$org_opensourcephysics_ejs_control_ControlElement$I',  function (_element, _index) {
for (var i=this.elementList.size$(); --i >= 0; ) {
var item=this.elementList.get$I(i);
if ((item.element === _element ) && (item.index == _index) ) {
this.elementList.remove$I(i);
return;
}}
});

Clazz.newMeth(C$, 'propagateValue$org_opensourcephysics_ejs_control_ControlElement',  function (_element) {
for (var i=this.elementList.size$(); --i >= 0; ) {
var item=this.elementList.get$I(i);
if (item.element !== _element ) {
item.element.setActive$Z(false);
if (item.element.myMethodsForProperties[item.index] != null ) {
item.element.setValue$I$org_opensourcephysics_ejs_control_value_Value(item.index, item.element.myMethodsForProperties[item.index].invoke$I$O(2, null));
} else if (item.element.myExpressionsForProperties[item.index] != null ) {
item.element.setValue$I$org_opensourcephysics_ejs_control_value_Value(item.index, item.element.myExpressionsForProperties[item.index]);
} else {
item.element.setValue$I$org_opensourcephysics_ejs_control_value_Value(item.index, this.value);
}item.element.setActive$Z(true);
}}
});

Clazz.newMeth(C$, 'addListener$O$S',  function (_target, _method) {
this.addListener$O$S$O(_target, _method, null);
});

Clazz.newMeth(C$, 'addListener$O$S$O',  function (_target, _method, _anObject) {
this.methodList.add$O(Clazz.new_($I$(4,1).c$$I$O$S$S$org_opensourcephysics_ejs_control_MethodWithOneParameter$O,[1, _target, _method, null, null, _anObject]));
});

Clazz.newMeth(C$, 'removeListener$O$S',  function (_target, _method) {
for (var i=this.methodList.size$(); --i >= 0; ) {
var method=this.methodList.get$I(i);
if (method.equals$I$O$S(1, _target, _method)) {
this.methodList.remove$O(method);
return;
}}
});

Clazz.newMeth(C$, 'invokeListeners$org_opensourcephysics_ejs_control_ControlElement',  function (_element) {
for (var i=0, n=this.methodList.size$(); i < n; i++) {
this.methodList.get$I(i).invoke$I$O(1, _element);
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupVariable, "Item", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['element','org.opensourcephysics.ejs.control.ControlElement']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_ejs_control_ControlElement$I',  function (_anElement, _anIndex) {
;C$.$init$.apply(this);
this.element=_anElement;
this.index=_anIndex;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
