(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},I$=[[0,'javax.swing.JDialog','java.awt.BorderLayout','org.opensourcephysics.ejs.control.value.BooleanValue','java.awt.event.WindowAdapter','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlDialog", null, 'org.opensourcephysics.ejs.control.swing.ControlWindow');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dialog','javax.swing.JDialog']]
,['O',['$infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
return p$1.createDialog$O$java_awt_Frame.apply(this, [_visual, null]);
});

Clazz.newMeth(C$, 'replaceVisual$java_awt_Frame',  function (_owner) {
this.myVisual=p$1.createDialog$O$java_awt_Frame.apply(this, [null, _owner]);
});

Clazz.newMeth(C$, 'createDialog$O$java_awt_Frame',  function (_visual, _owner) {
this.startingup=true;
if (Clazz.instanceOf(_visual, "javax.swing.JDialog")) {
this.dialog=_visual;
} else {
if (_owner != null ) {
this.dialog=Clazz.new_($I$(1,1).c$$java_awt_Frame,[_owner]);
} else {
this.dialog=Clazz.new_($I$(1,1));
}this.dialog.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
}this.internalValue=Clazz.new_($I$(3,1).c$$Z,[true]);
this.dialog.addWindowListener$java_awt_event_WindowListener(((P$.ControlDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (evt) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlDialog'].internalValue.setValue$Z(false);
this.b$['org.opensourcephysics.ejs.control.ControlElement'].variableChanged$I$org_opensourcephysics_ejs_control_value_Value.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], [9, this.b$['org.opensourcephysics.ejs.control.swing.ControlDialog'].internalValue]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.ControlDialog$1)));
return this.dialog.getContentPane$();
}, p$1);

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.dialog;
});

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.dialog.getContentPane$();
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.$infoList == null ) {
C$.$infoList=Clazz.new_($I$(5,1));
C$.$infoList.add$O("title");
C$.$infoList.add$O("resizable");
C$.$infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.$infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("title")) {
return "String TRANSLATABLE";
}if (_property.equals$O("resizable")) {
return "boolean BASIC";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
var ejsWindow=this.getProperty$S("_ejs_window_");
if (ejsWindow != null ) {
this.dialog.setTitle$S(_value.getString$() + " " + ejsWindow );
} else {
this.dialog.setTitle$S(_value.getString$());
}break;
case 1:
this.dialog.setResizable$Z(_value.getBoolean$());
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 2, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
var ejsWindow=this.getProperty$S("_ejs_window_");
if (ejsWindow != null ) {
this.dialog.setTitle$S(ejsWindow);
} else {
this.dialog.setTitle$S("");
}break;
case 1:
this.dialog.setResizable$Z(true);
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
C$.$infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
