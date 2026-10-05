(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},I$=[[0,'javax.swing.JCheckBox','org.opensourcephysics.ejs.control.value.BooleanValue','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlCheckBox", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageFile=null;
this.selectedimageFile=null;
},1);

C$.$fields$=[['Z',['defaultState','defaultStateSet'],'S',['imageFile','selectedimageFile'],'O',['checkbox','javax.swing.JCheckBox','internalValue','org.opensourcephysics.ejs.control.value.BooleanValue']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JCheckBox")) {
this.checkbox=_visual;
} else {
this.checkbox=Clazz.new_($I$(1,1));
}this.defaultStateSet=false;
this.internalValue=Clazz.new_([this.defaultState=this.checkbox.isSelected$()],$I$(2,1).c$$Z);
this.checkbox.addActionListener$java_awt_event_ActionListener(((P$.ControlCheckBox$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlCheckBox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
p$1.setInternalValue$Z.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlCheckBox'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlCheckBox'].checkbox.isSelected$()]);
});
})()
), Clazz.new_(P$.ControlCheckBox$1.$init$,[this, null])));
return this.checkbox;
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.defaultStateSet) {
this.checkbox.setSelected$Z(this.defaultState);
p$1.setInternalValue$Z.apply(this, [this.defaultState]);
}});

Clazz.newMeth(C$, 'setInternalValue$Z',  function (_state) {
this.internalValue.setValue$Z(_state);
this.variableChanged$I$org_opensourcephysics_ejs_control_value_Value(4, this.internalValue);
this.invokeActions$();
if (this.internalValue.getBoolean$()) {
this.invokeActions$I(20);
} else {
this.invokeActions$I(21);
}}, p$1);

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(3,1));
C$.infoList.add$O("text");
C$.infoList.add$O("image");
C$.infoList.add$O("selectedimage");
C$.infoList.add$O("alignment");
C$.infoList.add$O("variable");
C$.infoList.add$O("selected");
C$.infoList.add$O("action");
C$.infoList.add$O("actionon");
C$.infoList.add$O("actionoff");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("text")) {
return "String NotTrimmed TRANSLATABLE";
}if (_property.equals$O("image")) {
return "File|String";
}if (_property.equals$O("selectedimage")) {
return "File|String";
}if (_property.equals$O("alignment")) {
return "Alignment|int";
}if (_property.equals$O("variable")) {
return "boolean";
}if (_property.equals$O("selected")) {
return "boolean CONSTANT POSTPROCESS";
}if (_property.equals$O("action")) {
return "Action  CONSTANT";
}if (_property.equals$O("actionon")) {
return "Action  CONSTANT";
}if (_property.equals$O("actionoff")) {
return "Action  CONSTANT";
}if (_property.equals$O("enabled")) {
return "boolean BASIC";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
this.checkbox.setText$S(_value.getString$());
break;
case 1:
if (_value.getString$().equals$O(this.imageFile)) {
return;
}this.checkbox.setIcon$javax_swing_Icon(this.getIcon$S(this.imageFile=_value.getString$()));
break;
case 2:
if (_value.getString$().equals$O(this.selectedimageFile)) {
return;
}this.checkbox.setSelectedIcon$javax_swing_Icon(this.getIcon$S(this.selectedimageFile=_value.getString$()));
break;
case 3:
this.checkbox.setHorizontalAlignment$I(_value.getInteger$());
break;
case 4:
this.checkbox.setSelected$Z(this.internalValue.setValue$org_opensourcephysics_ejs_control_value_Value(_value));
break;
case 5:
this.defaultStateSet=true;
this.defaultState=_value.getBoolean$();
this.setActive$Z(false);
this.reset$();
this.setActive$Z(true);
break;
case 6:
this.removeAction$I$S(0, this.getProperty$S("action"));
this.addAction$I$S(0, _value.getString$());
break;
case 7:
this.removeAction$I$S(20, this.getProperty$S("actionon"));
this.addAction$I$S(20, _value.getString$());
break;
case 8:
this.removeAction$I$S(21, this.getProperty$S("actionoff"));
this.addAction$I$S(21, _value.getString$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 9, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.checkbox.setText$S("");
break;
case 1:
this.checkbox.setIcon$javax_swing_Icon(null);
this.imageFile=null;
break;
case 2:
this.checkbox.setSelectedIcon$javax_swing_Icon(null);
this.selectedimageFile=null;
break;
case 3:
this.checkbox.setHorizontalAlignment$I(0);
break;
case 4:
break;
case 5:
this.defaultStateSet=false;
break;
case 6:
this.removeAction$I$S(0, this.getProperty$S("action"));
break;
case 7:
this.removeAction$I$S(20, this.getProperty$S("actionon"));
break;
case 8:
this.removeAction$I$S(21, this.getProperty$S("actionoff"));
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 9]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 4:
return this.internalValue;
case 0:
case 1:
case 2:
case 3:
case 5:
case 6:
case 7:
case 8:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 9]);
}
});

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
