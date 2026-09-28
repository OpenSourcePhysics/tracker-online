(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JTabbedPane','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlTabbedPanel", null, 'org.opensourcephysics.ejs.control.swing.ControlContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tabbedpanel','javax.swing.JTabbedPane']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JTabbedPane")) {
this.tabbedpanel=_visual;
} else {
this.tabbedpanel=Clazz.new_($I$(1,1).c$$I,[1]);
}return this.tabbedpanel;
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_ejs_control_ControlElement',  function (_child) {
var header=_child.getProperty$S("name");
if (header != null ) {
this.tabbedpanel.add$java_awt_Component$O(_child.getComponent$(), header);
} else {
this.tabbedpanel.add$java_awt_Component$O(_child.getComponent$(), "   ");
}if (Clazz.instanceOf(_child, "org.opensourcephysics.ejs.control.swing.ControlRadioButton")) {
this.radioButtons.add$O(_child);
(_child).setParent$org_opensourcephysics_ejs_control_swing_ControlContainer(this);
}});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(2,1));
C$.infoList.add$O("placement");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("placement")) {
return "Placement|int";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (this.tabbedpanel.getTabPlacement$() != _value.getInteger$()) {
this.tabbedpanel.setTabPlacement$I(_value.getInteger$());
}break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 1, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.tabbedpanel.setTabPlacement$I(1);
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 1]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 1]);
}
});

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
