(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},I$=[[0,'javax.swing.JSlider','javax.swing.border.EtchedBorder','javax.swing.border.TitledBorder','org.opensourcephysics.ejs.control.value.DoubleValue',['org.opensourcephysics.ejs.control.swing.ControlSlider','.MyChangeListener'],['org.opensourcephysics.ejs.control.swing.ControlSlider','.MyMouseListener'],'java.util.ArrayList','java.util.Hashtable','javax.swing.JLabel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlSlider", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');
C$.$classes$=[['MyChangeListener',2],['MyMouseListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.recalculate=true;
this.ticks=0;
this.minimum=0.0;
this.maximum=1.0;
this.format=null;
this.ticksFormat=null;
},1);

C$.$fields$=[['Z',['recalculate','defaultValueSet'],'D',['defaultValue','scale','minimum','maximum'],'I',['ticks'],'O',['slider','javax.swing.JSlider','internalValue','org.opensourcephysics.ejs.control.value.DoubleValue','titledBorder','javax.swing.border.TitledBorder','etchedBorder','javax.swing.border.EtchedBorder','format','java.text.DecimalFormat','+ticksFormat']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JSlider")) {
this.slider=_visual;
} else {
this.slider=Clazz.new_($I$(1,1));
this.slider.setPaintLabels$Z(false);
this.slider.setPaintTicks$Z(false);
this.slider.setPaintTrack$Z(true);
}this.slider.setMinimum$I(0);
this.slider.setMaximum$I(100000);
this.slider.setValue$I(0);
this.etchedBorder=Clazz.new_($I$(2,1).c$$I,[1]);
this.titledBorder=Clazz.new_($I$(3,1).c$$javax_swing_border_Border$S,[this.etchedBorder, ""]);
this.titledBorder.setTitleJustification$I(2);
this.slider.setBorder$javax_swing_border_Border(this.etchedBorder);
this.defaultValue=0.0;
this.defaultValueSet=false;
this.internalValue=Clazz.new_($I$(4,1).c$$D,[this.defaultValue]);
this.minimum=0.0;
this.maximum=1.0;
this.scale=100000 * (this.maximum - this.minimum);
p$1.setMaximum$D.apply(this, [this.maximum]);
this.internalValue.value=this.minimum + this.slider.getValue$() / this.scale;
this.slider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5,1),[this, null]));
this.slider.addMouseListener$java_awt_event_MouseListener(Clazz.new_($I$(6,1),[this, null]));
return this.slider;
});

Clazz.newMeth(C$, 'setTheValue$D',  function (val) {
this.internalValue.value=val;
this.recalculate=false;
this.slider.setValue$I((((this.internalValue.value - this.minimum) * this.scale)|0));
this.recalculate=true;
if (this.format != null ) {
this.titledBorder.setTitle$S(this.format.format$D(this.internalValue.value));
this.slider.repaint$();
}}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
if (this.defaultValueSet) {
p$1.setTheValue$D.apply(this, [this.defaultValue]);
this.variableChanged$I$org_opensourcephysics_ejs_control_value_Value(0, this.internalValue);
}});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(7,1));
C$.infoList.add$O("variable");
C$.infoList.add$O("value");
C$.infoList.add$O("minimum");
C$.infoList.add$O("maximum");
C$.infoList.add$O("pressaction");
C$.infoList.add$O("dragaction");
C$.infoList.add$O("action");
C$.infoList.add$O("format");
C$.infoList.add$O("ticks");
C$.infoList.add$O("ticksFormat");
C$.infoList.add$O("closest");
C$.infoList.add$O("orientation");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("variable")) {
return "int|double";
}if (_property.equals$O("value")) {
return "int|double";
}if (_property.equals$O("minimum")) {
return "int|double";
}if (_property.equals$O("maximum")) {
return "int|double";
}if (_property.equals$O("pressaction")) {
return "Action CONSTANT";
}if (_property.equals$O("dragaction")) {
return "Action CONSTANT";
}if (_property.equals$O("action")) {
return "Action CONSTANT";
}if (_property.equals$O("format")) {
return "Format|Object TRANSLATABLE";
}if (_property.equals$O("ticks")) {
return "int    BASIC";
}if (_property.equals$O("ticksFormat")) {
return "Format|Object BASIC TRANSLATABLE";
}if (_property.equals$O("closest")) {
return "boolean BASIC";
}if (_property.equals$O("orientation")) {
return "Orientation|int BASIC";
}if (_property.equals$O("enabled")) {
return "boolean";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (this.internalValue.value != _value.getDouble$() ) {
p$1.setTheValue$D.apply(this, [_value.getDouble$()]);
}break;
case 1:
this.defaultValueSet=true;
this.defaultValue=_value.getDouble$();
this.setActive$Z(false);
this.reset$();
this.setActive$Z(true);
break;
case 2:
p$1.setMinimum$D.apply(this, [_value.getDouble$()]);
break;
case 3:
p$1.setMaximum$D.apply(this, [_value.getDouble$()]);
break;
case 4:
this.removeAction$I$S(10, this.getProperty$S("pressaction"));
this.addAction$I$S(10, _value.getString$());
break;
case 5:
this.removeAction$I$S(1, this.getProperty$S("dragaction"));
this.addAction$I$S(1, _value.getString$());
break;
case 6:
this.removeAction$I$S(0, this.getProperty$S("action"));
this.addAction$I$S(0, _value.getString$());
break;
case 7:
if (Clazz.instanceOf(_value.getObject$(), "java.text.DecimalFormat")) {
if (this.format === _value.getObject$() ) {
return;
}this.format=_value.getObject$();
this.titledBorder.setTitle$S(this.format.format$D(this.internalValue.value));
this.slider.setBorder$javax_swing_border_Border(this.titledBorder);
}break;
case 8:
if (_value.getInteger$() != this.ticks) {
this.ticks=_value.getInteger$();
p$1.setTicks.apply(this, []);
}break;
case 9:
if (Clazz.instanceOf(_value.getObject$(), "java.text.DecimalFormat")) {
if (this.ticksFormat === _value.getObject$() ) {
return;
}this.ticksFormat=_value.getObject$();
this.slider.setPaintLabels$Z(true);
p$1.setTicks.apply(this, []);
}break;
case 10:
this.slider.setSnapToTicks$Z(_value.getBoolean$());
break;
case 11:
if (this.slider.getOrientation$() != _value.getInteger$()) {
this.slider.setOrientation$I(_value.getInteger$());
}break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 12, _value]);
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
p$1.setMinimum$D.apply(this, [0.0]);
break;
case 3:
p$1.setMaximum$D.apply(this, [1.0]);
break;
case 4:
this.removeAction$I$S(10, this.getProperty$S("pressaction"));
break;
case 5:
this.removeAction$I$S(1, this.getProperty$S("dragaction"));
break;
case 6:
this.removeAction$I$S(0, this.getProperty$S("action"));
break;
case 7:
this.format=null;
this.slider.setBorder$javax_swing_border_Border(this.etchedBorder);
break;
case 8:
this.ticks=0;
p$1.setTicks.apply(this, []);
break;
case 9:
this.ticksFormat=null;
this.slider.setPaintLabels$Z(false);
p$1.setTicks.apply(this, []);
break;
case 10:
this.slider.setSnapToTicks$Z(false);
break;
case 11:
this.slider.setOrientation$I(0);
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 12]);
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
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 12]);
}
});

Clazz.newMeth(C$, 'setTicks',  function () {
if (this.ticks < 2) {
this.slider.setPaintTicks$Z(false);
return;
}var spacing=(100000/(this.ticks - 1)|0);
this.slider.setMinorTickSpacing$I(spacing);
this.slider.setMajorTickSpacing$I(2 * spacing);
this.slider.setPaintTicks$Z(true);
if (this.ticksFormat != null ) {
var table=Clazz.new_($I$(8,1));
for (var i=0; i <= 100000; i+=2 * spacing) {
table.put$O$O(Integer.valueOf$I(i), Clazz.new_([this.ticksFormat.format$D(this.minimum + i / this.scale)],$I$(9,1).c$$S));
}
this.slider.setLabelTable$java_util_Dictionary(table);
}}, p$1);

Clazz.newMeth(C$, 'setMinimum$D',  function (val) {
if (val == this.minimum ) {
return;
}this.minimum=val;
if (this.minimum >= this.maximum ) {
this.maximum=this.minimum + 1.0;
}this.scale=100000.0 / (this.maximum - this.minimum);
p$1.setTicks.apply(this, []);
p$1.setTheValue$D.apply(this, [this.internalValue.value]);
}, p$1);

Clazz.newMeth(C$, 'setMaximum$D',  function (val) {
if (val == this.maximum ) {
return;
}this.maximum=val;
if (this.minimum >= this.maximum ) {
this.minimum=this.maximum - 1.0;
}this.scale=100000.0 / (this.maximum - this.minimum);
p$1.setTicks.apply(this, []);
p$1.setTheValue$D.apply(this, [this.internalValue.value]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlSlider, "MyChangeListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].recalculate) {
var value=this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].minimum + this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].slider.getValue$() / this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].scale;
this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].internalValue.value=value;
if (this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].format != null ) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].titledBorder.setTitle$S(this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].format.format$D(this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].internalValue.value));
this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].slider.repaint$();
}this.b$['org.opensourcephysics.ejs.control.ControlElement'].variableChanged$I$org_opensourcephysics_ejs_control_value_Value.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], [0, this.b$['org.opensourcephysics.ejs.control.swing.ControlSlider'].internalValue]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlSlider, "MyMouseListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
this.b$['org.opensourcephysics.ejs.control.ControlElement'].invokeActions$I.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], [10]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
this.b$['org.opensourcephysics.ejs.control.ControlElement'].invokeActions$I.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], [0]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
