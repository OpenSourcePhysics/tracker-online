(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'org.opensourcephysics.controls.ParsableTextArea','javax.swing.JScrollPane','javax.swing.border.EtchedBorder','javax.swing.border.TitledBorder','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlInputArea", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['inputarea','org.opensourcephysics.controls.ParsableTextArea','pane','javax.swing.JScrollPane','titledBorder','javax.swing.border.TitledBorder','etchedBorder','javax.swing.border.EtchedBorder']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "org.opensourcephysics.controls.ParsableTextArea")) {
this.inputarea=_visual;
} else {
this.inputarea=Clazz.new_($I$(1,1));
this.inputarea.setEditable$Z(true);
}this.pane=Clazz.new_($I$(2,1).c$$java_awt_Component,[this.inputarea]);
this.etchedBorder=Clazz.new_($I$(3,1).c$$I,[1]);
this.titledBorder=Clazz.new_($I$(4,1).c$$javax_swing_border_Border$S,[this.etchedBorder, ""]);
this.titledBorder.setTitleJustification$I(2);
this.pane.setBorder$javax_swing_border_Border(this.etchedBorder);
return this.inputarea;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.pane;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.inputarea.setText$S("");
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(5,1));
C$.infoList.add$O("title");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("title")) {
return "String TRANSLATABLE";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (this.titledBorder.getTitle$() == _value.getString$()) {
return;
}this.titledBorder.setTitle$S(_value.getString$());
this.pane.setBorder$javax_swing_border_Border(this.titledBorder);
this.pane.repaint$();
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 1, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.pane.setBorder$javax_swing_border_Border(this.etchedBorder);
this.pane.repaint$();
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
