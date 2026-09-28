(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.ejs.control.swing.ConstantParser','org.opensourcephysics.ejs.control.Utils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlSwingElement", null, 'org.opensourcephysics.ejs.control.ControlElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myDefaultBkgd=null;
this.myDefaultFrgd=null;
this.myDefaultFont=null;
this.mySize=null;
},1);

C$.$fields$=[['O',['myVisual','java.awt.Component','myDefaultBkgd','java.awt.Color','+myDefaultFrgd','myDefaultFont','java.awt.Font','mySize','java.awt.Dimension']]
,['O',['myInfoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
this.myVisual=this.createVisual$O(_visual);
this.myObject=this.myVisual;
this.myDefaultFrgd=this.myVisual.getForeground$();
this.myDefaultBkgd=this.myVisual.getBackground$();
this.myDefaultFont=this.myVisual.getFont$();
if (Clazz.instanceOf(this.myVisual, "javax.swing.JComponent")) {
this.mySize=(this.myVisual).getPreferredSize$();
}}, 1);

Clazz.newMeth(C$, 'getVisual$',  function () {
return this.myVisual;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.myVisual;
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.myInfoList == null ) {
C$.myInfoList=Clazz.new_($I$(1,1));
C$.myInfoList.add$O("name");
C$.myInfoList.add$O("position");
C$.myInfoList.add$O("parent");
C$.myInfoList.add$O("enabled");
C$.myInfoList.add$O("visible");
C$.myInfoList.add$O("size");
C$.myInfoList.add$O("foreground");
C$.myInfoList.add$O("background");
C$.myInfoList.add$O("font");
C$.myInfoList.add$O("tooltip");
}return C$.myInfoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("name")) {
return "String         CONSTANT HIDDEN";
}if (_property.equals$O("position")) {
return "Position       CONSTANT PREVIOUS HIDDEN ";
}if (_property.equals$O("parent")) {
return "ControlElement CONSTANT HIDDEN";
}if (_property.equals$O("enabled")) {
return "boolean          BASIC HIDDEN";
}if (_property.equals$O("visible")) {
return "boolean          BASIC HIDDEN";
}if (_property.equals$O("size")) {
return "Dimension|Object BASIC";
}if (_property.equals$O("foreground")) {
return "Color|Object     BASIC";
}if (_property.equals$O("background")) {
return "Color|Object     BASIC";
}if (_property.equals$O("font")) {
return "Font|Object      BASIC";
}if (_property.equals$O("tooltip")) {
return "String           BASIC TRANSLATABLE";
}return null;
});

Clazz.newMeth(C$, 'parseConstant$S$S',  function (_propertyType, _value) {
if (_value == null ) {
return null;
}var constantValue;
if (_propertyType.indexOf$S("Alignment") >= 0) {
constantValue=$I$(2).alignmentConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Dimension") >= 0) {
constantValue=$I$(2).dimensionConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Layout") >= 0) {
constantValue=$I$(2,"layoutConstant$java_awt_Container$S",[(this).getContainer$(), _value]);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Orientation") >= 0) {
constantValue=$I$(2).orientationConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Placement") >= 0) {
constantValue=$I$(2).placementConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}if (_propertyType.indexOf$S("Point") >= 0) {
constantValue=$I$(2).pointConstant$S(_value);
if (constantValue != null ) {
return constantValue;
}}return C$.superclazz.prototype.parseConstant$S$S.apply(this, [_propertyType, _value]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [0, _value]);
this.getComponent$().setName$S(_value.toString());
break;
case 1:
{
var parent=this.myGroup.getElement$S(this.getProperty$S("parent"));
if ((parent != null ) && (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) ) {
(parent).remove$org_opensourcephysics_ejs_control_ControlElement(this);
}this.myPropertiesTable.put$O$O("position", _value.toString());
if ((parent != null ) && (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) ) {
(parent).add$org_opensourcephysics_ejs_control_ControlElement(this);
}}break;
case 2:
{
var parent=this.myGroup.getElement$S(this.getProperty$S("parent"));
if ((parent != null ) && (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) ) {
(parent).remove$org_opensourcephysics_ejs_control_ControlElement(this);
}parent=this.myGroup.getElement$S(_value.toString());
if (parent == null ) {
if (!(Clazz.instanceOf(this, "org.opensourcephysics.ejs.control.swing.ControlWindow"))) {
System.err.println$S(this.getClass$().getName$() + " : Error! Parent <" + _value + "> not found for " + this.toString() );
}} else {
if (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) {
(parent).add$org_opensourcephysics_ejs_control_ControlElement(this);
} else {
System.err.println$S(this.getClass$().getName$() + " : Error! Parent <" + _value + "> is not a ControlContainer" );
}}}break;
case 3:
this.getVisual$().setEnabled$Z(_value.getBoolean$());
break;
case 4:
this.getVisual$().setVisible$Z(_value.getBoolean$());
break;
case 5:
if (Clazz.instanceOf(this.getComponent$(), "javax.swing.JComponent")) {
var size=_value.getObject$();
if ((size.width == this.mySize.width) && (size.height == this.mySize.height) ) {
return;
}(this.getComponent$()).setPreferredSize$java_awt_Dimension(this.mySize=size);
if (Clazz.instanceOf(this, "org.opensourcephysics.ejs.control.swing.ControlContainer")) {
(this).getContainer$().validate$();
}var parentElement=this.myGroup.getElement$S(this.getProperty$S("parent"));
if (parentElement != null ) {
(parentElement).adjustSize$();
}}break;
case 6:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Color")) {
this.getVisual$().setForeground$java_awt_Color(_value.getObject$());
}break;
case 7:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Color")) {
this.getVisual$().setBackground$java_awt_Color(_value.getObject$());
}break;
case 8:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Font")) {
this.getVisual$().setFont$java_awt_Font(_value.getObject$());
}break;
case 9:
if (Clazz.instanceOf(this.getVisual$(), "javax.swing.JComponent")) {
(this.getVisual$()).setToolTipText$S(_value.toString());
}break;
default:
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [0]);
break;
case 1:
{
var parent=this.myGroup.getElement$S(this.getProperty$S("parent"));
if ((parent != null ) && (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) ) {
(parent).remove$org_opensourcephysics_ejs_control_ControlElement(this);
}this.myPropertiesTable.remove$O("position");
if ((parent != null ) && (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) ) {
(parent).add$org_opensourcephysics_ejs_control_ControlElement(this);
}}break;
case 2:
{
var parent=this.myGroup.getElement$S(this.getProperty$S("parent"));
if ((parent != null ) && (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlContainer")) ) {
(parent).remove$org_opensourcephysics_ejs_control_ControlElement(this);
}}break;
case 3:
this.getVisual$().setEnabled$Z(true);
break;
case 4:
this.getVisual$().setVisible$Z(true);
break;
case 5:
if (Clazz.instanceOf(this.getComponent$(), "javax.swing.JComponent")) {
(this.getComponent$()).setPreferredSize$java_awt_Dimension(null);
if (Clazz.instanceOf(this, "org.opensourcephysics.ejs.control.swing.ControlContainer")) {
(this).getContainer$().validate$();
}var parentElement=this.myGroup.getElement$S(this.getProperty$S("parent"));
if (parentElement != null ) {
(parentElement).adjustSize$();
}}break;
case 6:
this.getVisual$().setForeground$java_awt_Color(this.myDefaultFrgd);
break;
case 7:
this.getVisual$().setBackground$java_awt_Color(this.myDefaultBkgd);
break;
case 8:
this.getVisual$().setFont$java_awt_Font(this.myDefaultFont);
break;
case 9:
if (Clazz.instanceOf(this.getComponent$(), "javax.swing.JComponent")) {
(this.getVisual$()).setToolTipText$S(null);
}break;
default:
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
return null;
});

Clazz.newMeth(C$, 'getIcon$S',  function (_iconFile) {
var icon;
if (this.getProperty$S("_ejs_codebase") != null ) {
icon=$I$(3,"icon$S$S",[this.getProperty$S("_ejs_codebase"), _iconFile]);
} else if ((this.getSimulation$() != null ) && (this.getSimulation$().getCodebase$() != null ) ) {
icon=$I$(3,"icon$S$S",[this.getSimulation$().getCodebase$().toString(), _iconFile]);
} else {
icon=$I$(3).icon$S$S(null, _iconFile);
}return icon;
});

C$.$static$=function(){C$.$static$=0;
C$.myInfoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
