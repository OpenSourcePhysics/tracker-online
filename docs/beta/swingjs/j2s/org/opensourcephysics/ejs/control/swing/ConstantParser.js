(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'java.awt.Toolkit','org.opensourcephysics.ejs.control.value.ObjectValue','java.awt.Point','java.util.StringTokenizer','org.opensourcephysics.ejs.control.value.StringValue','java.awt.Dimension','org.opensourcephysics.ejs.control.value.IntegerValue','java.awt.FlowLayout','java.awt.GridLayout','java.awt.BorderLayout','javax.swing.BoxLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConstantParser", null, 'org.opensourcephysics.ejs.control.ConstantParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'pointConstant$S',  function (_value) {
_value=_value.trim$().toLowerCase$();
if ("center".equals$O(_value)) {
var d=$I$(1).getDefaultToolkit$().getScreenSize$();
return Clazz.new_([Clazz.new_([(d.width/2|0), (d.height/2|0)],$I$(3,1).c$$I$I)],$I$(2,1).c$$O);
}if (_value.indexOf$I(",") < 0) {
return null;
}try {
var t=Clazz.new_($I$(4,1).c$$S$S,[_value, ","]);
var x=Integer.parseInt$S(t.nextToken$());
var y=Integer.parseInt$S(t.nextToken$());
return Clazz.new_([Clazz.new_($I$(3,1).c$$I$I,[x, y])],$I$(2,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'dimensionConstant$S',  function (_value) {
_value=_value.trim$().toLowerCase$();
if ("pack".equals$O(_value)) {
return Clazz.new_($I$(5,1).c$$S,["pack"]);
}if (_value.indexOf$I(",") < 0) {
return null;
}try {
var t=Clazz.new_($I$(4,1).c$$S$S,[_value, ","]);
var w=Integer.parseInt$S(t.nextToken$());
var h=Integer.parseInt$S(t.nextToken$());
return Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[w, h])],$I$(2,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'placementConstant$S',  function (_value) {
_value=_value.trim$().toLowerCase$();
if (_value.equals$O("bottom")) {
return Clazz.new_($I$(7,1).c$$I,[3]);
} else if (_value.equals$O("left")) {
return Clazz.new_($I$(7,1).c$$I,[2]);
} else if (_value.equals$O("right")) {
return Clazz.new_($I$(7,1).c$$I,[4]);
} else if (_value.equals$O("top")) {
return Clazz.new_($I$(7,1).c$$I,[1]);
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'layoutConstant$java_awt_Container$S',  function (_container, _value) {
_value=_value.trim$().toLowerCase$();
var tkn=Clazz.new_($I$(4,1).c$$S$S,[_value, ":,"]);
var type=tkn.nextToken$();
if (type.equals$O("flow")) {
if (tkn.hasMoreTokens$()) {
try {
var align;
var alignStr=tkn.nextToken$();
if (alignStr.equals$O("left")) {
align=0;
} else if (alignStr.equals$O("right")) {
align=2;
} else {
align=1;
}if (tkn.hasMoreTokens$()) {
var hgap=Integer.parseInt$S(tkn.nextToken$());
var vgap=Integer.parseInt$S(tkn.nextToken$());
return Clazz.new_([Clazz.new_($I$(8,1).c$$I$I$I,[align, hgap, vgap])],$I$(2,1).c$$O);
}return Clazz.new_([Clazz.new_($I$(8,1).c$$I,[align])],$I$(2,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
}return Clazz.new_([Clazz.new_($I$(8,1))],$I$(2,1).c$$O);
}if (type.equals$O("grid")) {
if (tkn.hasMoreTokens$()) {
try {
var rows=Integer.parseInt$S(tkn.nextToken$());
var cols=Integer.parseInt$S(tkn.nextToken$());
if (tkn.hasMoreTokens$()) {
var hgap=Integer.parseInt$S(tkn.nextToken$());
var vgap=Integer.parseInt$S(tkn.nextToken$());
return Clazz.new_([Clazz.new_($I$(9,1).c$$I$I$I$I,[rows, cols, hgap, vgap])],$I$(2,1).c$$O);
}return Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[rows, cols])],$I$(2,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
}return Clazz.new_([Clazz.new_($I$(9,1))],$I$(2,1).c$$O);
}if (type.equals$O("border")) {
if (tkn.hasMoreTokens$()) {
try {
var hgap=Integer.parseInt$S(tkn.nextToken$());
var vgap=Integer.parseInt$S(tkn.nextToken$());
return Clazz.new_([Clazz.new_($I$(10,1).c$$I$I,[hgap, vgap])],$I$(2,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
}return Clazz.new_([Clazz.new_($I$(10,1))],$I$(2,1).c$$O);
}if (type.equals$O("hbox")) {
return Clazz.new_([Clazz.new_($I$(11,1).c$$java_awt_Container$I,[_container, 0])],$I$(2,1).c$$O);
}if (type.equals$O("vbox")) {
return Clazz.new_([Clazz.new_($I$(11,1).c$$java_awt_Container$I,[_container, 1])],$I$(2,1).c$$O);
}return null;
}, 1);

Clazz.newMeth(C$, 'constraintsConstant$S',  function (_value) {
_value=_value.trim$().toLowerCase$();
if (_value.equals$O("north")) {
return Clazz.new_($I$(5,1).c$$S,["North"]);
}if (_value.equals$O("south")) {
return Clazz.new_($I$(5,1).c$$S,["South"]);
}if (_value.equals$O("east")) {
return Clazz.new_($I$(5,1).c$$S,["East"]);
}if (_value.equals$O("west")) {
return Clazz.new_($I$(5,1).c$$S,["West"]);
}if (_value.equals$O("center")) {
return Clazz.new_($I$(5,1).c$$S,["Center"]);
}return Clazz.new_($I$(5,1).c$$S,["Center"]);
}, 1);

Clazz.newMeth(C$, 'orientationConstant$S',  function (_value) {
_value=_value.trim$().toLowerCase$();
if (_value.equals$O("vertical")) {
return Clazz.new_($I$(7,1).c$$I,[1]);
}return Clazz.new_($I$(7,1).c$$I,[0]);
}, 1);

Clazz.newMeth(C$, 'alignmentConstant$S',  function (_value) {
_value=_value.trim$().toLowerCase$();
if (_value.indexOf$S("top") != -1) {
return Clazz.new_($I$(7,1).c$$I,[1]);
}if (_value.indexOf$S("center") != -1) {
return Clazz.new_($I$(7,1).c$$I,[0]);
}if (_value.indexOf$S("bottom") != -1) {
return Clazz.new_($I$(7,1).c$$I,[3]);
}if (_value.indexOf$S("left") != -1) {
return Clazz.new_($I$(7,1).c$$I,[2]);
}if (_value.indexOf$S("right") != -1) {
return Clazz.new_($I$(7,1).c$$I,[4]);
}if (_value.indexOf$S("leading") != -1) {
return Clazz.new_($I$(7,1).c$$I,[10]);
}if (_value.indexOf$S("trailing") != -1) {
return Clazz.new_($I$(7,1).c$$I,[11]);
}return Clazz.new_($I$(7,1).c$$I,[0]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
