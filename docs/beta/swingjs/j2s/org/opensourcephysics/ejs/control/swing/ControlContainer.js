(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},I$=[[0,'org.opensourcephysics.ejs.control.value.BooleanValue','java.util.Vector','org.opensourcephysics.ejs.control.swing.ConstantParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlContainer", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.radioButtons=Clazz.new_($I$(2,1));
this.children=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['radioButtons','java.util.Vector','+children']]
,['O',['falseValue','org.opensourcephysics.ejs.control.value.BooleanValue']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.getVisual$();
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_ejs_control_ControlElement',  function (_child) {
this.children.add$O(_child);
var container=this.getContainer$();
var layout=container.getLayout$();
var indexInParent=_child.getProperty$S("_ejs_indexInParent_");
var index=-1;
if (indexInParent != null ) {
index=Integer.parseInt$S(indexInParent);
}_child.setProperty$S$S("_ejs_indexInParent_", null);
if (Clazz.instanceOf(layout, "java.awt.BorderLayout")) {
var pos=_child.getProperty$S("position");
if (pos != null ) {
container.add$java_awt_Component$O$I(_child.getComponent$(), $I$(3).constraintsConstant$S(pos).getString$(), index);
} else {
container.add$java_awt_Component$O$I(_child.getComponent$(), "Center", index);
}} else {
container.add$java_awt_Component$I(_child.getComponent$(), index);
}this.adjustSize$();
if (Clazz.instanceOf(_child, "org.opensourcephysics.ejs.control.swing.ControlRadioButton")) {
this.radioButtons.add$O(_child);
(_child).setParent$org_opensourcephysics_ejs_control_swing_ControlContainer(this);
}p$1.propagateProperty$org_opensourcephysics_ejs_control_ControlElement$S$S.apply(this, [_child, "font", this.getProperty$S("font")]);
p$1.propagateProperty$org_opensourcephysics_ejs_control_ControlElement$S$S.apply(this, [_child, "foreground", this.getProperty$S("foreground")]);
p$1.propagateProperty$org_opensourcephysics_ejs_control_ControlElement$S$S.apply(this, [_child, "background", this.getProperty$S("background")]);
});

Clazz.newMeth(C$, 'adjustSize$',  function () {
this.getContainer$().validate$();
this.getContainer$().repaint$();
C$.resizeContainer$java_awt_Container(this.getContainer$());
C$.resizeContainer$java_awt_Container(this.getComponent$().getParent$());
});

Clazz.newMeth(C$, 'resizeContainer$java_awt_Container',  function (_container) {
if (_container == null ) {
return;
}var b=_container.getBounds$();
_container.setBounds$I$I$I$I(b.x, b.y, b.width + 1, b.height + 1);
_container.setBounds$I$I$I$I(b.x, b.y, b.width, b.height);
_container.validate$();
_container.repaint$();
}, 1);

Clazz.newMeth(C$, 'getChildren$',  function () {
return this.children;
});

Clazz.newMeth(C$, 'remove$org_opensourcephysics_ejs_control_ControlElement',  function (_child) {
this.children.remove$O(_child);
var container=this.getContainer$();
container.remove$java_awt_Component(_child.getComponent$());
container.validate$();
container.repaint$();
if (Clazz.instanceOf(_child, "org.opensourcephysics.ejs.control.swing.ControlRadioButton")) {
this.radioButtons.remove$O(_child);
(_child).setParent$org_opensourcephysics_ejs_control_swing_ControlContainer(null);
}});

Clazz.newMeth(C$, 'informRadioGroup$org_opensourcephysics_ejs_control_swing_ControlRadioButton$Z',  function (_source, _state) {
if (_state == false ) {
return;
}for (var e=this.radioButtons.elements$(); e.hasMoreElements$(); ) {
var rb=e.nextElement$();
if (rb !== _source ) {
var wasActive=rb.isActive$();
rb.setActive$Z(false);
rb.setValue$I$org_opensourcephysics_ejs_control_value_Value(4, C$.falseValue);
rb.reportChanges$();
rb.setActive$Z(wasActive);
}}
});

Clazz.newMeth(C$, 'propagateProperty$org_opensourcephysics_ejs_control_ControlElement$S$S',  function (_child, _property, _value) {
if (_child.getProperty$S(_property) == null ) {
_child.setProperty$S$S(_property, _value);
}}, p$1);

Clazz.newMeth(C$, 'propagateProperty$S$S',  function (_property, _value) {
for (var i=0; i < this.children.size$(); i++) {
p$1.propagateProperty$org_opensourcephysics_ejs_control_ControlElement$S$S.apply(this, [this.children.elementAt$I(i), _property, _value]);
}
}, p$1);

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("visible")) {
return "boolean";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setProperty$S$S',  function (_property, _value) {
var returnValue=C$.superclazz.prototype.setProperty$S$S.apply(this, [_property, _value]);
if (_property.equals$O("font") || _property.equals$O("foreground") || _property.equals$O("background")  ) {
p$1.propagateProperty$S$S.apply(this, [_property, _value]);
}return returnValue;
});

C$.$static$=function(){C$.$static$=0;
C$.falseValue=Clazz.new_($I$(1,1).c$$Z,[false]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
