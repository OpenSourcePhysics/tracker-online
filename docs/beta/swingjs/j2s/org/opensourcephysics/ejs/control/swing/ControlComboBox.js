(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},p$2={},I$=[[0,'javax.swing.JComboBox',['org.opensourcephysics.ejs.control.swing.ControlComboBox','.MyActionListener'],['org.opensourcephysics.ejs.control.swing.ControlComboBox','.MyKeyListener'],'org.opensourcephysics.ejs.control.value.StringValue','java.util.StringTokenizer','java.util.ArrayList','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlComboBox", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');
C$.$classes$=[['MyActionListener',2],['MyKeyListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doNotUpdate=false;
},1);

C$.$fields$=[['Z',['defaultValueSet','defaultEditable','doNotUpdate'],'S',['optionsString','defaultValue'],'O',['combo','javax.swing.JComboBox','editorComponent','java.awt.Component','internalValue','org.opensourcephysics.ejs.control.value.StringValue','defaultColor','java.awt.Color','+editingColor']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JComboBox")) {
this.combo=_visual;
} else {
this.combo=Clazz.new_($I$(1,1));
}this.defaultEditable=this.combo.isEditable$();
this.combo.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(2,1),[this, null]));
this.editorComponent=this.combo.getEditor$().getEditorComponent$();
this.editorComponent.addKeyListener$java_awt_event_KeyListener(Clazz.new_($I$(3,1),[this, null]));
this.defaultValue="";
this.defaultValueSet=false;
this.internalValue=Clazz.new_($I$(4,1).c$$S,[this.defaultValue]);
p$1.decideColors$java_awt_Color.apply(this, [this.editorComponent.getBackground$()]);
return this.combo;
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.defaultValueSet) {
p$1.setTheValue$S.apply(this, [this.defaultValue]);
p$1.setInternalValue$S.apply(this, [this.defaultValue]);
}});

Clazz.newMeth(C$, 'setTheValue$S',  function (_value) {
if ((this.internalValue.value != null ) && this.internalValue.value.equals$O(_value) ) {
return;
}this.combo.setSelectedItem$O(this.internalValue.value=_value);
p$1.setColor$java_awt_Color.apply(this, [this.defaultColor]);
}, p$1);

Clazz.newMeth(C$, 'setInternalValue$S',  function (_value) {
this.internalValue.value=_value;
this.variableChanged$I$org_opensourcephysics_ejs_control_value_Value(0, this.internalValue);
this.invokeActions$();
}, p$1);

Clazz.newMeth(C$, 'setTheOptions$S',  function (_options) {
if (_options == null ) {
if (this.optionsString != null ) {
this.combo.removeAllItems$();
this.optionsString=null;
}return;
}if (_options.equals$O(this.optionsString)) {
return;
}this.doNotUpdate=true;
this.combo.removeAllItems$();
var tkn=Clazz.new_($I$(5,1).c$$S$S,[_options, ";"]);
while (tkn.hasMoreTokens$()){
this.combo.addItem$O(tkn.nextToken$());
}
this.optionsString=_options;
this.doNotUpdate=false;
if (this.combo.getItemCount$() > 0) {
p$1.setTheValue$S.apply(this, [this.combo.getItemAt$I(0).toString()]);
}}, p$1);

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(6,1));
C$.infoList.add$O("variable");
C$.infoList.add$O("options");
C$.infoList.add$O("value");
C$.infoList.add$O("editable");
C$.infoList.add$O("editBackground");
C$.infoList.add$O("action");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("variable")) {
return "String VARIABLE_EXPECTED";
}if (_property.equals$O("options")) {
return "String PREVIOUS TRANSLATABLE";
}if (_property.equals$O("value")) {
return "String CONSTANT";
}if (_property.equals$O("editable")) {
return "boolean";
}if (_property.equals$O("editBackground")) {
return "Color|Object";
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
p$1.setTheOptions$S.apply(this, [_value.getString$()]);
break;
case 2:
this.defaultValueSet=true;
this.defaultValue=_value.getString$();
this.setActive$Z(false);
this.reset$();
this.setActive$Z(true);
break;
case 3:
this.combo.setEditable$Z(_value.getBoolean$());
break;
case 4:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Color")) {
this.editorComponent.setBackground$java_awt_Color(_value.getObject$());
}p$1.decideColors$java_awt_Color.apply(this, [this.editorComponent.getBackground$()]);
break;
case 5:
this.removeAction$I$S(0, this.getProperty$S("action"));
this.addAction$I$S(0, _value.getString$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 6, _value]);
break;
case 12:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [6, _value]);
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Color")) {
this.editorComponent.setForeground$java_awt_Color(_value.getObject$());
}break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
break;
case 1:
p$1.setTheOptions$S.apply(this, [null]);
break;
case 2:
this.defaultValueSet=false;
break;
case 3:
this.combo.setEditable$Z(this.defaultEditable);
break;
case 4:
this.editorComponent.setBackground$java_awt_Color($I$(7).white);
p$1.decideColors$java_awt_Color.apply(this, [this.editorComponent.getBackground$()]);
break;
case 5:
this.removeAction$I$S(0, this.getProperty$S("action"));
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 6]);
break;
case 12:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [6]);
this.editorComponent.setForeground$java_awt_Color($I$(7).black);
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
case 5:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 6]);
}
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (aColor) {
if (this.combo.isEditable$()) {
this.editorComponent.setBackground$java_awt_Color(aColor);
}}, p$1);

Clazz.newMeth(C$, 'decideColors$java_awt_Color',  function (aColor) {
if (aColor == null ) {
return;
}this.defaultColor=aColor;
if (this.defaultColor.equals$O($I$(7).yellow)) {
this.editingColor=$I$(7).orange;
} else {
this.editingColor=$I$(7).yellow;
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlComboBox, "MyActionListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
if (this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].doNotUpdate) {
return;
}p$1.setInternalValue$S.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].combo.getSelectedItem$()]);
p$1.setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].defaultColor]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlComboBox, "MyKeyListener", function(){
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
if (!this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].combo.isEditable$()) {
return;
}if (_e.getKeyChar$() != "\n") {
p$1.setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].editingColor]);
}if (_e.getKeyCode$() == 27) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'], [0, this.b$['org.opensourcephysics.ejs.control.swing.ControlComboBox'].internalValue]);
}}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
