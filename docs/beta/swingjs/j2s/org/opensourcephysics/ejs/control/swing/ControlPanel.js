(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JPanel','java.util.ArrayList','javax.swing.border.EmptyBorder','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlPanel", null, 'org.opensourcephysics.ejs.control.swing.ControlContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myLayout=null;
this.myBorder=null;
},1);

C$.$fields$=[['O',['panel','javax.swing.JPanel','myLayout','java.awt.LayoutManager','myBorder','java.awt.Rectangle']]
,['O',['infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JPanel")) {
this.panel=_visual;
} else {
this.panel=Clazz.new_($I$(1,1));
}return this.panel;
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.infoList == null ) {
C$.infoList=Clazz.new_($I$(2,1));
C$.infoList.add$O("layout");
C$.infoList.add$O("border");
C$.infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("layout")) {
return "Layout|Object";
}if (_property.equals$O("border")) {
return "Margins|Object";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.LayoutManager")) {
var layout=_value.getObject$();
if (layout !== this.myLayout ) {
this.getContainer$().setLayout$java_awt_LayoutManager(this.myLayout=layout);
this.panel.validate$();
}}break;
case 1:
if (Clazz.instanceOf(_value.getObject$(), "java.awt.Rectangle")) {
var rect=_value.getObject$();
if (rect !== this.myBorder ) {
this.panel.setBorder$javax_swing_border_Border(Clazz.new_($I$(3,1).c$$I$I$I$I,[rect.x, rect.y, rect.width, rect.height]));
this.myBorder=rect;
}}break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 2, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.getContainer$().setLayout$java_awt_LayoutManager(this.myLayout=Clazz.new_($I$(4,1)));
this.panel.validate$();
break;
case 1:
this.panel.setBorder$javax_swing_border_Border(null);
this.myBorder=null;
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
