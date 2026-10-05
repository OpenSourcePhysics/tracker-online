(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},p$2={},I$=[[0,'java.text.DecimalFormat','javax.swing.JTextField','org.opensourcephysics.ejs.control.value.DoubleValue',['org.opensourcephysics.ejs.control.swing.ControlNumberField','.MyActionListener'],['org.opensourcephysics.ejs.control.swing.ControlNumberField','.MyKeyListener'],'java.util.ArrayList','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlNumberField", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');
C$.$classes$=[['MyActionListener',2],['MyKeyListener',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['defaultValueSet'],'D',['defaultValue'],'O',['textfield','javax.swing.JTextField','internalValue','org.opensourcephysics.ejs.control.value.DoubleValue','format','java.text.DecimalFormat','defaultColor','java.awt.Color','+editingColor','+errorColor']]
,['O',['defaultFormat','java.text.DecimalFormat','infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JTextField")) {
this.textfield=_visual;
} else {
this.textfield=Clazz.new_($I$(2,1));
}this.format=C$.defaultFormat;
this.defaultValue=0.0;
this.defaultValueSet=false;
this.internalValue=Clazz.new_($I$(3,1).c$$D,[this.defaultValue]);
this.textfield.setText$S(this.format.format$D(this.internalValue.value));
this.textfield.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(4,1),[this, null]));
this.textfield.addKeyListener$java_awt_event_KeyListener(Clazz.new_($I$(5,1),[this, null]));
this.decideColors$java_awt_Color(this.textfield.getBackground$());
return this.textfield;
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.defaultValueSet) {
p$2.setTheValue$D.apply(this, [this.defaultValue]);
this.setInternalValue$D(this.defaultValue);
}});

Clazz.newMeth(C$, 'setTheValue$D',  function (_value) {
if (_value != this.internalValue.value ) {
this.internalValue.value=_value;
this.textfield.setText$S(this.format.format$D(_value));
this.setColor$java_awt_Color(this.defaultColor);
}}, p$2);

Clazz.newMeth(C$, 'setInternalValue$D',  function (_value) {
this.internalValue.value=_value;
this.variableChanged$I$org_opensourcephysics_ejs_control_value_Value(0, this.internalValue);
this.invokeActions$();
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(6,1));
C$.infoList.add$O("variable");
C$.infoList.add$O("value");
C$.infoList.add$O("editable");
C$.infoList.add$O("format");
C$.infoList.add$O("action");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("variable")) {
return "int|double";
}if (_property.equals$O("value")) {
return "int|double";
}if (_property.equals$O("editable")) {
return "boolean";
}if (_property.equals$O("format")) {
return "Format|Object TRANSLATABLE";
}if (_property.equals$O("action")) {
return "Action CONSTANT";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
p$2.setTheValue$D.apply(this, [_value.getDouble$()]);
break;
case 1:
this.defaultValueSet=true;
this.defaultValue=_value.getDouble$();
this.setActive$Z(false);
this.reset$();
this.setActive$Z(true);
break;
case 2:
this.textfield.setEditable$Z(_value.getBoolean$());
break;
case 3:
if (Clazz.instanceOf(_value.getObject$(), "java.text.DecimalFormat")) {
if (this.format === _value.getObject$() ) {
return;
}this.format=_value.getObject$();
this.setActive$Z(false);
try {
this.setInternalValue$D(this.format.parse$S(this.textfield.getText$()).doubleValue$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
this.setActive$Z(true);
this.textfield.setText$S(this.format.format$D(this.internalValue.value));
}break;
case 4:
this.removeAction$I$S(0, this.getProperty$S("action"));
this.addAction$I$S(0, _value.getString$());
break;
case 12:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [7, _value]);
this.decideColors$java_awt_Color(this.getVisual$().getBackground$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 5, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
break;
case 1:
this.defaultValueSet=false;
break;
case 2:
this.textfield.setEditable$Z(true);
break;
case 3:
this.format=C$.defaultFormat;
this.setActive$Z(false);
try {
this.setInternalValue$D(this.format.parse$S(this.textfield.getText$()).doubleValue$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
this.setActive$Z(true);
this.textfield.setText$S(this.format.format$D(this.internalValue.value));
break;
case 4:
this.removeAction$I$S(0, this.getProperty$S("action"));
break;
case 12:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [7]);
this.decideColors$java_awt_Color(this.getVisual$().getBackground$());
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 5]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
return this.internalValue;
case 1:
case 2:
case 3:
case 4:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 5]);
}
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (aColor) {
if (this.textfield.isEditable$()) {
this.getVisual$().setBackground$java_awt_Color(aColor);
}});

Clazz.newMeth(C$, 'decideColors$java_awt_Color',  function (aColor) {
if (aColor == null ) {
return;
}this.defaultColor=aColor;
if (this.defaultColor.equals$O($I$(7).yellow)) {
this.editingColor=$I$(7).orange;
} else {
this.editingColor=$I$(7).yellow;
}if (this.defaultColor.equals$O($I$(7).red)) {
this.errorColor=$I$(7).magenta;
} else {
this.errorColor=$I$(7).red;
}});

C$.$static$=function(){C$.$static$=0;
C$.defaultFormat=Clazz.new_($I$(1,1).c$$S,["0.000;-0.000"]);
C$.infoList=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlNumberField, "MyActionListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].defaultColor]);
try {
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setInternalValue$D.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].format.parse$S(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].textfield.getText$()).doubleValue$()]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].errorColor]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlNumberField, "MyKeyListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.KeyListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (_e) {
p$1.processKeyEvent$java_awt_event_KeyEvent$I.apply(this, [_e, 0]);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (_e) {
p$1.processKeyEvent$java_awt_event_KeyEvent$I.apply(this, [_e, 1]);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (_e) {
p$1.processKeyEvent$java_awt_event_KeyEvent$I.apply(this, [_e, 2]);
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$I',  function (_e, _n) {
if (!this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].textfield.isEditable$()) {
return;
}if (_e.getKeyChar$() != "\n") {
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].editingColor]);
}if (_e.getKeyCode$() == 27) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [0, this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].internalValue]);
}}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
