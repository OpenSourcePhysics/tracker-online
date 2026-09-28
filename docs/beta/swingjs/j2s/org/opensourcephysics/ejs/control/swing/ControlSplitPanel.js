(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JSplitPane','java.util.ArrayList','org.opensourcephysics.ejs.control.value.IntegerValue']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlSplitPanel", null, 'org.opensourcephysics.ejs.control.swing.ControlContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasOne=false;
},1);

C$.$fields$=[['Z',['hasOne'],'O',['splitpanel','javax.swing.JSplitPane']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JSplitPane")) {
this.splitpanel=_visual;
} else {
this.splitpanel=Clazz.new_($I$(1,1));
this.splitpanel.setOneTouchExpandable$Z(true);
this.splitpanel.setDividerLocation$I(-1);
}return this.splitpanel;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.splitpanel.setDividerLocation$I(-1);
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_ejs_control_ControlElement',  function (_child) {
if (this.hasOne) {
this.splitpanel.setBottomComponent$java_awt_Component(_child.getComponent$());
this.splitpanel.setDividerLocation$I(-1);
} else {
this.splitpanel.setTopComponent$java_awt_Component(_child.getComponent$());
this.splitpanel.setDividerLocation$I(-1);
this.hasOne=true;
}if (Clazz.instanceOf(_child, "org.opensourcephysics.ejs.control.swing.ControlRadioButton")) {
this.radioButtons.add$O(_child);
(_child).setParent$org_opensourcephysics_ejs_control_swing_ControlContainer(this);
}});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(2,1));
C$.infoList.add$O("orientation");
C$.infoList.add$O("expandable");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("orientation")) {
return "Orientation|int";
}if (_property.equals$O("expandable")) {
return "boolean";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'parseConstant$S$S',  function (_propertyType, _value) {
if (_value == null ) {
return null;
}if (_propertyType.indexOf$S("Orientation") >= 0) {
_value=_value.trim$().toLowerCase$();
if (_value.equals$O("vertical")) {
return Clazz.new_($I$(3,1).c$$I,[0]);
} else if (_value.equals$O("horizontal")) {
return Clazz.new_($I$(3,1).c$$I,[1]);
}}return C$.superclazz.prototype.parseConstant$S$S.apply(this, [_propertyType, _value]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (this.splitpanel.getOrientation$() != _value.getInteger$()) {
this.splitpanel.setOrientation$I(_value.getInteger$());
}break;
case 1:
this.splitpanel.setOneTouchExpandable$Z(_value.getBoolean$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 2, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.splitpanel.setOrientation$I(1);
break;
case 1:
this.splitpanel.setOneTouchExpandable$Z(true);
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 2]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
case 1:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 2]);
}
});

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
