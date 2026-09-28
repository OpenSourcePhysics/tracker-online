(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JButton','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlButton", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageFile=null;
},1);

C$.$fields$=[['S',['imageFile'],'O',['button','javax.swing.JButton']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JButton")) {
this.button=_visual;
} else {
this.button=Clazz.new_($I$(1,1));
}this.button.addActionListener$java_awt_event_ActionListener(((P$.ControlButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
this.b$['org.opensourcephysics.ejs.control.ControlElement'].invokeActions$.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], []);
});
})()
), Clazz.new_(P$.ControlButton$1.$init$,[this, null])));
return this.button;
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(2,1));
C$.infoList.add$O("text");
C$.infoList.add$O("image");
C$.infoList.add$O("alignment");
C$.infoList.add$O("action");
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
}if (_property.equals$O("action")) {
return "Action CONSTANT";
}if (_property.equals$O("enabled")) {
return "boolean";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
this.button.setText$S(_value.getString$());
break;
case 1:
if (_value.getString$().equals$O(this.imageFile)) {
return;
}this.button.setIcon$javax_swing_Icon(this.getIcon$S(this.imageFile=_value.getString$()));
break;
case 2:
this.button.setHorizontalAlignment$I(_value.getInteger$());
break;
case 3:
this.removeAction$I$S(0, this.getProperty$S("action"));
this.addAction$I$S(0, _value.getString$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 4, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.button.setText$S("");
break;
case 1:
this.imageFile=null;
this.button.setIcon$javax_swing_Icon(null);
break;
case 2:
this.button.setHorizontalAlignment$I(0);
break;
case 3:
this.removeAction$I$S(0, this.getProperty$S("action"));
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 4]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
case 1:
case 2:
case 3:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 4]);
}
});

C$.$static$=function(){C$.$static$=0;
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
