(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},p$2={},I$=[[0,'javax.swing.JTextField',['org.opensourcephysics.ejs.control.swing.ControlTextField','.MyActionListener'],['org.opensourcephysics.ejs.control.swing.ControlTextField','.MyKeyListener'],'org.opensourcephysics.ejs.control.value.StringValue','java.util.ArrayList','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlTextField", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');
C$.$classes$=[['MyActionListener',2],['MyKeyListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['defaultValueSet'],'S',['defaultValue'],'O',['textfield','javax.swing.JTextField','internalValue','org.opensourcephysics.ejs.control.value.StringValue','defaultColor','java.awt.Color','+editingColor']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JTextField")) {
this.textfield=_visual;
} else {
this.textfield=Clazz.new_($I$(1,1));
this.textfield.setText$S("");
}this.defaultValue=this.textfield.getText$();
this.textfield.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(2,1),[this, null]));
this.textfield.addKeyListener$java_awt_event_KeyListener(Clazz.new_($I$(3,1),[this, null]));
this.defaultValueSet=false;
this.internalValue=Clazz.new_($I$(4,1).c$$S,[this.defaultValue]);
p$1.decideColors$java_awt_Color.apply(this, [this.textfield.getBackground$()]);
return this.textfield;
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.defaultValueSet) {
p$1.setTheValue$S.apply(this, [this.defaultValue]);
p$1.setInternalValue$S.apply(this, [this.defaultValue]);
}});

Clazz.newMeth(C$, 'setTheValue$S',  function (_value) {
if (this.internalValue.value.equals$O(_value)) {
return;
}this.textfield.setText$S(this.internalValue.value=_value);
p$1.setColor$java_awt_Color.apply(this, [this.defaultColor]);
}, p$1);

Clazz.newMeth(C$, 'setInternalValue$S',  function (_value) {
this.internalValue.value=_value;
this.variableChanged$I$org_opensourcephysics_ejs_control_value_Value(0, this.internalValue);
this.invokeActions$();
}, p$1);

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(5,1));
C$.infoList.add$O("variable");
C$.infoList.add$O("value");
C$.infoList.add$O("editable");
C$.infoList.add$O("action");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("variable")) {
return "String VARIABLE_EXPECTED";
}if (_property.equals$O("value")) {
return "String CONSTANT";
}if (_property.equals$O("editable")) {
return "boolean";
}if (_property.equals$O("action")) {
return "Action CONSTANT";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
p$1.setTheValue$S.apply(this, [_value.getString$()]);
break;
case 1:
this.defaultValueSet=true;
this.defaultValue=_value.getString$();
this.setActive$Z(false);
this.reset$();
this.setActive$Z(true);
break;
case 2:
this.textfield.setEditable$Z(_value.getBoolean$());
break;
case 3:
this.removeAction$I$S(0, this.getProperty$S("action"));
this.addAction$I$S(0, _value.getString$());
break;
case 11:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [7, _value]);
p$1.decideColors$java_awt_Color.apply(this, [this.getVisual$().getBackground$()]);
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 4, _value]);
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
this.removeAction$I$S(0, this.getProperty$S("action"));
break;
case 11:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [7]);
p$1.decideColors$java_awt_Color.apply(this, [this.getVisual$().getBackground$()]);
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 4]);
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
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 4]);
}
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (aColor) {
if (this.textfield.isEditable$()) {
this.getVisual$().setBackground$java_awt_Color(aColor);
}}, p$1);

Clazz.newMeth(C$, 'decideColors$java_awt_Color',  function (aColor) {
if (aColor == null ) {
return;
}this.defaultColor=aColor;
if (this.defaultColor.equals$O($I$(6).yellow)) {
this.editingColor=$I$(6).orange;
} else {
this.editingColor=$I$(6).yellow;
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlTextField, "MyActionListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
p$1.setInternalValue$S.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'].textfield.getText$()]);
p$1.setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'].defaultColor]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlTextField, "MyKeyListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.KeyListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (_e) {
p$2.processKeyEvent$java_awt_event_KeyEvent$I.apply(this, [_e, 0]);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (_e) {
p$2.processKeyEvent$java_awt_event_KeyEvent$I.apply(this, [_e, 1]);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (_e) {
p$2.processKeyEvent$java_awt_event_KeyEvent$I.apply(this, [_e, 2]);
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$I',  function (_e, _n) {
if (!this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'].textfield.isEditable$()) {
return;
}if (_e.getKeyChar$() != "\n") {
p$1.setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'].editingColor]);
}if (_e.getKeyCode$() == 27) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'].setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'], [0, this.b$['org.opensourcephysics.ejs.control.swing.ControlTextField'].internalValue]);
}}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
