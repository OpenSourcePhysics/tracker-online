(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JLabel','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlLabel", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageFile=null;
},1);

C$.$fields$=[['S',['imageFile'],'O',['label','javax.swing.JLabel']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JLabel")) {
this.label=_visual;
} else {
this.label=Clazz.new_($I$(1,1));
}return this.label;
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(2,1));
C$.infoList.add$O("text");
C$.infoList.add$O("image");
C$.infoList.add$O("alignment");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("text")) {
return "String NotTrimmed TRANSLATABLE";
}if (_property.equals$O("image")) {
return "File|String";
}if (_property.equals$O("alignment")) {
return "Alignment|int";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
this.label.setText$S(_value.getString$());
break;
case 1:
if (_value.getString$().equals$O(this.imageFile)) {
return;
}this.label.setIcon$javax_swing_Icon(this.getIcon$S(this.imageFile=_value.getString$()));
break;
case 2:
this.label.setHorizontalAlignment$I(_value.getInteger$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 3, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.label.setText$S("");
break;
case 1:
this.label.setIcon$javax_swing_Icon(null);
this.imageFile=null;
break;
case 2:
this.label.setHorizontalAlignment$I(0);
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 3]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
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
