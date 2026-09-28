(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},I$=[[0,'javax.swing.JProgressBar','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlBar", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minimum=0.0;
this.maximum=1.0;
this.variable=0.0;
},1);

C$.$fields$=[['D',['scale','minimum','maximum','variable'],'O',['bar','javax.swing.JProgressBar','format','java.text.DecimalFormat']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JProgressBar")) {
this.bar=_visual;
} else {
this.bar=Clazz.new_($I$(1,1).c$$I,[0]);
this.bar.setBorderPainted$Z(true);
this.bar.setStringPainted$Z(false);
}this.bar.setMinimum$I(0);
this.bar.setMaximum$I(100000);
this.minimum=0.0;
this.maximum=1.0;
this.variable=this.bar.getValue$();
this.scale=100000 * (this.maximum - this.minimum);
this.format=null;
this.bar.setValue$I((((this.variable - this.minimum) * this.scale)|0));
return this.bar;
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(2,1));
C$.infoList.add$O("variable");
C$.infoList.add$O("minimum");
C$.infoList.add$O("maximum");
C$.infoList.add$O("format");
C$.infoList.add$O("orientation");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("variable")) {
return "int|double";
}if (_property.equals$O("minimum")) {
return "int|double";
}if (_property.equals$O("maximum")) {
return "int|double";
}if (_property.equals$O("format")) {
return "Format|Object TRANSLATABLE";
}if (_property.equals$O("orientation")) {
return "Orientation|int";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
p$1.setValue$D.apply(this, [_value.getDouble$()]);
break;
case 1:
p$1.setMinimum$D.apply(this, [_value.getDouble$()]);
break;
case 2:
p$1.setMaximum$D.apply(this, [_value.getDouble$()]);
break;
case 3:
{
var newFormat;
if (Clazz.instanceOf(_value.getObject$(), "java.text.DecimalFormat")) {
newFormat=_value.getObject$();
} else {
newFormat=null;
}if (this.format === newFormat ) {
return;
}this.format=newFormat;
if (this.format != null ) {
this.bar.setString$S(this.format.format$D(this.variable));
this.bar.setStringPainted$Z(true);
} else {
this.bar.setStringPainted$Z(false);
}}break;
case 4:
if (this.bar.getOrientation$() != _value.getInteger$()) {
this.bar.setOrientation$I(_value.getInteger$());
}break;
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
p$1.setMinimum$D.apply(this, [0.0]);
break;
case 2:
p$1.setMaximum$D.apply(this, [1.0]);
break;
case 3:
this.format=null;
this.bar.setStringPainted$Z(false);
break;
case 4:
this.bar.setOrientation$I(0);
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 5]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
case 1:
case 2:
case 3:
case 4:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 5]);
}
});

Clazz.newMeth(C$, 'setValue$D',  function (val) {
if (val == this.variable ) {
return;
}this.variable=val;
this.bar.setValue$I((((this.variable - this.minimum) * this.scale)|0));
if (this.format != null ) {
this.bar.setString$S(this.format.format$D(this.variable));
}}, p$1);

Clazz.newMeth(C$, 'setMinimum$D',  function (val) {
if (val == this.minimum ) {
return;
}this.minimum=val;
if (this.minimum >= this.maximum ) {
this.maximum=this.minimum + 1.0;
}this.scale=100000.0 / (this.maximum - this.minimum);
this.bar.setValue$I((((this.variable - this.minimum) * this.scale)|0));
if (this.format != null ) {
this.bar.setString$S(this.format.format$D(this.variable));
}}, p$1);

Clazz.newMeth(C$, 'setMaximum$D',  function (val) {
if (val == this.maximum ) {
return;
}this.maximum=val;
if (this.minimum >= this.maximum ) {
this.minimum=this.maximum - 1.0;
}this.scale=100000.0 / (this.maximum - this.minimum);
this.bar.setValue$I((((this.variable - this.minimum) * this.scale)|0));
if (this.format != null ) {
this.bar.setString$S(this.format.format$D(this.variable));
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
