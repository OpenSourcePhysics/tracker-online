(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'java.util.ArrayList','java.awt.Toolkit','java.awt.BorderLayout','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlWindow", null, 'org.opensourcephysics.ejs.control.swing.ControlContainer', 'org.opensourcephysics.ejs.control.NeedsUpdate');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myLayout=null;
this.myLocation=null;
this.$mySize=null;
this.waitForReset=false;
this.startingup=true;
this.shouldShow=true;
},1);

C$.$fields$=[['Z',['waitForReset','startingup','shouldShow'],'O',['internalValue','org.opensourcephysics.ejs.control.value.BooleanValue','myLayout','java.awt.LayoutManager','myLocation','java.awt.Point','$mySize','java.awt.Dimension']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
(this.getComponent$()).dispose$();
});

Clazz.newMeth(C$, 'show$',  function () {
if (this.startingup) {
this.shouldShow=true;
if (this.waitForReset) {
return;
}}var w=this.getComponent$();
if (w.isShowing$()) {
} else {
w.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'hide$',  function () {
if (this.startingup) {
this.shouldShow=false;
if (this.waitForReset) {
return;
}}var w=this.getComponent$();
if (w.isShowing$()) {
w.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'destroy$',  function () {
this.dispose$();
C$.superclazz.prototype.destroy$.apply(this, []);
});

Clazz.newMeth(C$, 'setWaitForReset$Z',  function (_option) {
this.waitForReset=_option;
if (this.waitForReset) {
(this.getComponent$()).setVisible$Z(false);
}});

Clazz.newMeth(C$, 'reset$',  function () {
this.startingup=false;
if (this.shouldShow) {
this.show$();
} else {
this.hide$();
}C$.superclazz.prototype.reset$.apply(this, []);
});

Clazz.newMeth(C$, 'update$',  function () {
this.startingup=false;
});

Clazz.newMeth(C$, 'adjustSize$',  function () {
var size=this.getProperty$S("size");
(this.getComponent$()).validate$();
if ((size != null ) && size.trim$().toLowerCase$().equals$O("pack") ) {
(this.getComponent$()).pack$();
} else {
C$.superclazz.prototype.adjustSize$.apply(this, []);
}});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(1,1));
C$.infoList.add$O("layout");
C$.infoList.add$O("location");
C$.infoList.add$O("waitForReset");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("location")) {
return "Point|Object";
}if (_property.equals$O("layout")) {
return "Layout|Object";
}if (_property.equals$O("waitForReset")) {
return "boolean HIDDEN";
}if (_property.equals$O("tooltip")) {
return "String HIDDEN";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.LayoutManager")) {
var layout=_value.getObject$();
if (layout !== this.myLayout ) {
this.getContainer$().setLayout$java_awt_LayoutManager(this.myLayout=layout);
}(this.getComponent$()).validate$();
}break;
case 1:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Point")) {
var pos=_value.getObject$();
if (pos.equals$O(this.myLocation)) {
return;
}this.getComponent$().setLocation$java_awt_Point(this.myLocation=pos);
}break;
case 2:
this.setWaitForReset$Z(_value.getBoolean$());
break;
case 7:
this.internalValue.setValue$org_opensourcephysics_ejs_control_value_Value(_value);
if (this.internalValue.getBoolean$()) {
this.show$();
} else {
this.hide$();
}break;
case 8:
var size=null;
if ((Clazz.instanceOf(_value, "org.opensourcephysics.ejs.control.value.StringValue")) && "pack".equals$O(_value.getString$()) ) {
(this.getComponent$()).pack$();
size=this.getComponent$().getSize$();
} else if (Clazz.instanceOf(_value.getObject$(), "java.awt.Dimension")) {
size=_value.getObject$();
if (size.equals$O(this.$mySize)) {
return;
}(this.getContainer$()).setPreferredSize$java_awt_Dimension(this.$mySize=size);
(this.getComponent$()).validate$();
(this.getComponent$()).pack$();
} else {
return;
}var loc=this.getProperty$S("location");
if ((loc != null ) && (loc.trim$().toLowerCase$().equals$O("center")) ) {
var dim=$I$(2).getDefaultToolkit$().getScreenSize$();
this.getComponent$().setLocation$I$I(((dim.width - size.width)/2|0), ((dim.height - size.height)/2|0));
}break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 3, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.getContainer$().setLayout$java_awt_LayoutManager(this.myLayout=Clazz.new_($I$(3,1)));
(this.getComponent$()).validate$();
break;
case 1:
this.getComponent$().setLocation$java_awt_Point(this.myLocation=Clazz.new_($I$(4,1).c$$I$I,[0, 0]));
break;
case 2:
this.setWaitForReset$Z(false);
break;
case 7:
this.internalValue.setValue$Z(true);
this.show$();
break;
case 8:
(this.getComponent$()).pack$();
var size=this.getComponent$().getSize$();
var loc=this.getProperty$S("location");
if ((loc != null ) && (loc.trim$().toLowerCase$().equals$O("center")) ) {
var dim=$I$(2).getDefaultToolkit$().getScreenSize$();
this.getComponent$().setLocation$I$I(((dim.width - size.width)/2|0), ((dim.height - size.height)/2|0));
}break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 3]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
return this.internalValue;
case 1:
case 2:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 3]);
}
});

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
