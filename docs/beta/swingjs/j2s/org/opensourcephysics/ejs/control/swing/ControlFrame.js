(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'javax.swing.JFrame','java.awt.BorderLayout','org.opensourcephysics.ejs.control.value.BooleanValue','java.awt.event.WindowAdapter','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlFrame", null, 'org.opensourcephysics.ejs.control.swing.ControlWindow');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['frame','javax.swing.JFrame']]
,['O',['$infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
this.startingup=true;
if (Clazz.instanceOf(_visual, "javax.swing.JFrame")) {
this.frame=_visual;
} else {
this.frame=Clazz.new_($I$(1,1));
this.frame.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
}this.frame.setDefaultCloseOperation$I(1);
this.internalValue=Clazz.new_($I$(3,1).c$$Z,[true]);
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.ControlFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (evt) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlFrame'].internalValue.setValue$Z(false);
this.b$['org.opensourcephysics.ejs.control.ControlElement'].variableChanged$I$org_opensourcephysics_ejs_control_value_Value.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], [11, this.b$['org.opensourcephysics.ejs.control.swing.ControlFrame'].internalValue]);
if (this.b$['org.opensourcephysics.ejs.control.swing.ControlFrame'].frame.getDefaultCloseOperation$() == 3) {
this.b$['org.opensourcephysics.ejs.control.ControlElement'].invokeActions$.apply(this.b$['org.opensourcephysics.ejs.control.ControlElement'], []);
}});
})()
), Clazz.new_($I$(4,1),[this, null],P$.ControlFrame$1)));
return this.frame.getContentPane$();
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.frame;
});

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.frame.getContentPane$();
});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.$infoList == null ) {
C$.$infoList=Clazz.new_($I$(5,1));
C$.$infoList.add$O("title");
C$.$infoList.add$O("resizable");
C$.$infoList.add$O("exit");
C$.$infoList.add$O("onExit");
C$.$infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.$infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("title")) {
return "String TRANSLATABLE";
}if (_property.equals$O("resizable")) {
return "boolean BASIC";
}if (_property.equals$O("exit")) {
return "boolean CONSTANT HIDDEN";
}if (_property.equals$O("onExit")) {
return "Action CONSTANT HIDDEN";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
var ejsWindow=this.getProperty$S("_ejs_window_");
if (ejsWindow != null ) {
this.frame.setTitle$S(_value.getString$() + " " + ejsWindow );
} else {
this.frame.setTitle$S(_value.getString$());
}break;
case 1:
this.frame.setResizable$Z(_value.getBoolean$());
break;
case 2:
if (this.getProperty$S("_ejs_") == null ) {
if (_value.getBoolean$()) {
this.frame.setDefaultCloseOperation$I(3);
} else {
this.frame.setDefaultCloseOperation$I(1);
}}break;
case 3:
this.removeAction$I$S(0, this.getProperty$S("onExit"));
this.addAction$I$S(0, _value.getString$());
break;
case 7:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [3, _value]);
if ((this.getGroup$() != null ) && (this.getGroup$().getOwnerFrame$() === this.getComponent$() ) ) {
var replacement=this.getGroup$().getReplaceOwnerName$();
if ((replacement != null ) && replacement.equals$O(_value.getString$()) ) {
this.getGroup$().setOwnerFrame$java_awt_Frame(this.getGroup$().getReplaceOwnerFrame$());
} else {
this.getGroup$().setOwnerFrame$java_awt_Frame(this.frame);
}}break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 4, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
var ejsWindow=this.getProperty$S("_ejs_window_");
if (ejsWindow != null ) {
this.frame.setTitle$S(ejsWindow);
} else {
this.frame.setTitle$S("");
}break;
case 1:
this.frame.setResizable$Z(true);
break;
case 2:
if (this.getProperty$S("_ejs_") == null ) {
this.frame.setDefaultCloseOperation$I(1);
}break;
case 3:
this.removeAction$I$S(0, this.getProperty$S("onExit"));
break;
case 7:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [3]);
if ((this.getGroup$() != null ) && (this.getGroup$().getOwnerFrame$() === this.getComponent$() ) ) {
this.getGroup$().setOwnerFrame$java_awt_Frame(this.frame);
}break;
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
C$.$infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
