(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JTextArea','javax.swing.JScrollPane','javax.swing.border.EtchedBorder','javax.swing.border.TitledBorder','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlTextArea", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['textarea','javax.swing.JTextArea','panel','javax.swing.JScrollPane','titledBorder','javax.swing.border.TitledBorder','etchedBorder','javax.swing.border.EtchedBorder']]
,['S',['_RETURN_'],'O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JTextArea")) {
this.textarea=_visual;
} else {
this.textarea=Clazz.new_($I$(1,1).c$$I$I,[5, 5]);
this.textarea.setEditable$Z(false);
}this.panel=Clazz.new_($I$(2,1).c$$java_awt_Component,[this.textarea]);
this.etchedBorder=Clazz.new_($I$(3,1).c$$I,[1]);
this.titledBorder=Clazz.new_($I$(4,1).c$$javax_swing_border_Border$S,[this.etchedBorder, ""]);
this.titledBorder.setTitleJustification$I(2);
this.panel.setBorder$javax_swing_border_Border(this.etchedBorder);
return this.textarea;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.panel;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.textarea.setText$S("");
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
if (!_value.getString$().equals$O(this.titledBorder.getTitle$())) {
this.titledBorder.setTitle$S(_value.getString$());
this.panel.setBorder$javax_swing_border_Border(this.titledBorder);
this.panel.repaint$();
}break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 1, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.panel.setBorder$javax_swing_border_Border(this.etchedBorder);
this.panel.repaint$();
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

Clazz.newMeth(C$, 'clear$',  function () {
this.textarea.setText$S("");
this.textarea.setCaretPosition$I(this.textarea.getText$().length$());
});

Clazz.newMeth(C$, 'println$S',  function (s) {
this.print$S(s + C$._RETURN_);
});

Clazz.newMeth(C$, 'print$S',  function (s) {
this.textarea.append$S(s);
this.textarea.setCaretPosition$I(this.textarea.getText$().length$());
});

C$.$static$=function(){C$.$static$=0;
C$._RETURN_=System.getProperty$S("line.separator");
C$.infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
