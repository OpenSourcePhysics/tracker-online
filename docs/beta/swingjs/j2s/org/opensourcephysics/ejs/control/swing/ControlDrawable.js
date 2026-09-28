(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlDrawable", null, 'org.opensourcephysics.ejs.control.ControlElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myDrawable=null;
},1);

C$.$fields$=[['O',['myParent','org.opensourcephysics.ejs.control.swing.ControlDrawablesParent','myDrawable','org.opensourcephysics.display.Drawable']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_drawable) {
;C$.superclazz.c$$O.apply(this,[_drawable]);C$.$init$.apply(this);
this.myDrawable=this.createDrawable$O(_drawable);
this.myObject=this.myDrawable;
}, 1);

Clazz.newMeth(C$, 'getDrawable$',  function () {
return this.myDrawable;
});

Clazz.newMeth(C$, 'setDrawable$org_opensourcephysics_display_Drawable',  function (_dr) {
this.myDrawable=_dr;
});

Clazz.newMeth(C$, 'setParent$org_opensourcephysics_ejs_control_swing_ControlDrawablesParent',  function (_dp) {
if (this.myParent != null ) {
(this.myParent.getVisual$()).removeDrawable$org_opensourcephysics_display_Drawable(this.myDrawable);
if (Clazz.instanceOf(this, "org.opensourcephysics.ejs.control.swing.NeedsPreUpdate")) {
this.myParent.removeFromPreupdateList$org_opensourcephysics_ejs_control_swing_NeedsPreUpdate(this);
}}if (_dp != null ) {
(_dp.getVisual$()).addDrawable$org_opensourcephysics_display_Drawable(this.myDrawable);
(_dp.getVisual$()).render$();
if (Clazz.instanceOf(this, "org.opensourcephysics.ejs.control.swing.NeedsPreUpdate")) {
_dp.addToPreupdateList$org_opensourcephysics_ejs_control_swing_NeedsPreUpdate(this);
}this.myParent=_dp;
}});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.myParent;
});

Clazz.newMeth(C$, 'destroy$',  function () {
C$.superclazz.prototype.destroy$.apply(this, []);
if (this.myParent != null ) {
(this.myParent.getVisual$()).render$();
}});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(1,1));
C$.infoList.add$O("name");
C$.infoList.add$O("parent");
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("name")) {
return "String         CONSTANT HIDDEN";
}if (_property.equals$O("parent")) {
return "ControlElement CONSTANT HIDDEN";
}return null;
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [0, _value]);
break;
case 1:
{
var parent=this.myGroup.getElement$S(this.getProperty$S("parent"));
if (parent != null ) {
this.setParent$org_opensourcephysics_ejs_control_swing_ControlDrawablesParent(null);
}parent=this.myGroup.getElement$S(_value.toString());
if (parent == null ) {
System.err.println$S(this.getClass$().getName$() + " : Error! Parent <" + _value + "> not found for " + this.toString() );
} else {
if (Clazz.instanceOf(parent, "org.opensourcephysics.ejs.control.swing.ControlDrawablesParent")) {
this.setParent$org_opensourcephysics_ejs_control_swing_ControlDrawablesParent(parent);
} else {
System.err.println$S(this.getClass$().getName$() + " : Error! Parent <" + _value + "> is not a ControlDrawablesParent" );
}}}break;
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
if (parent != null ) {
this.setParent$org_opensourcephysics_ejs_control_swing_ControlDrawablesParent(null);
}}break;
default:
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
default:
return null;
}
});

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
