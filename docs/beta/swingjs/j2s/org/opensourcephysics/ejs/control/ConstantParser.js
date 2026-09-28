(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'java.awt.Color','java.awt.Font','java.util.StringTokenizer','org.opensourcephysics.ejs.control.value.ObjectValue','org.opensourcephysics.ejs.control.value.BooleanValue','java.text.DecimalFormat','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConstantParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NULL_COLOR','java.awt.Color','defaultFont','java.awt.Font']]]

Clazz.newMeth(C$, 'fontConstant$java_awt_Font$S',  function (_currentFont, _value) {
if (_value.indexOf$I(",") < 0) {
return null;
}if (_currentFont == null ) {
_currentFont=C$.defaultFont;
}var style=_currentFont.getStyle$();
var size=_currentFont.getSize$();
var name=null;
var t=Clazz.new_($I$(3,1).c$$S$S$Z,[_value, ",", true]);
if (t.hasMoreTokens$()) {
name=t.nextToken$();
if (name.equals$O(",")) {
name=_currentFont.getName$();
} else if (t.hasMoreTokens$()) {
t.nextToken$();
}} else {
name=_currentFont.getName$();
}if (t.hasMoreTokens$()) {
var styleStr=t.nextToken$().toLowerCase$();
style=_currentFont.getStyle$();
if (!styleStr.equals$O(",")) {
if (styleStr.indexOf$S("plain") != -1) {
style=0;
}if (styleStr.indexOf$S("bold") != -1) {
style=1;
}if (styleStr.indexOf$S("italic") != -1) {
style=style | 2;
}if (t.hasMoreTokens$()) {
t.nextToken$();
}}}if (t.hasMoreTokens$()) {
try {
size=Integer.parseInt$S(t.nextToken$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
size=_currentFont.getSize$();
} else {
throw exc;
}
}
}return Clazz.new_([Clazz.new_($I$(2,1).c$$S$I$I,[name, style, size])],$I$(4,1).c$$O);
}, 1);

Clazz.newMeth(C$, 'booleanConstant$S',  function (_value) {
if (_value.equals$O("true")) {
return Clazz.new_($I$(5,1).c$$Z,[true]);
}if (_value.equals$O("false")) {
return Clazz.new_($I$(5,1).c$$Z,[false]);
}return null;
}, 1);

Clazz.newMeth(C$, 'colorConstant$S',  function (_value) {
if (_value.indexOf$I(",") >= 0) {
try {
var t=Clazz.new_($I$(3,1).c$$S$S,[_value, ":,"]);
var r=Integer.parseInt$S(t.nextToken$());
var g=Integer.parseInt$S(t.nextToken$());
var b=Integer.parseInt$S(t.nextToken$());
var alpha;
if (t.hasMoreTokens$()) {
alpha=Integer.parseInt$S(t.nextToken$());
} else {
alpha=255;
}if (r < 0) {
r=0;
} else if (r > 255) {
r=255;
}if (g < 0) {
g=0;
} else if (g > 255) {
g=255;
}if (b < 0) {
b=0;
} else if (b > 255) {
b=255;
}if (alpha < 0) {
alpha=0;
} else if (alpha > 255) {
alpha=255;
}return Clazz.new_([Clazz.new_($I$(1,1).c$$I$I$I$I,[r, g, b, alpha])],$I$(4,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}if (_value.equals$O("null") || _value.equals$O("none") ) {
return Clazz.new_($I$(4,1).c$$O,[C$.NULL_COLOR]);
}if (_value.equals$O("black") || _value.equals$O("Color.black") ) {
return Clazz.new_([$I$(1).black],$I$(4,1).c$$O);
}if (_value.equals$O("blue") || _value.equals$O("Color.blue") ) {
return Clazz.new_([$I$(1).blue],$I$(4,1).c$$O);
}if (_value.equals$O("cyan") || _value.equals$O("Color.cyan") ) {
return Clazz.new_([$I$(1).cyan],$I$(4,1).c$$O);
}if (_value.equals$O("darkGray") || _value.equals$O("Color.darkGray") ) {
return Clazz.new_([$I$(1).darkGray],$I$(4,1).c$$O);
}if (_value.equals$O("gray") || _value.equals$O("Color.gray") ) {
return Clazz.new_([$I$(1).gray],$I$(4,1).c$$O);
}if (_value.equals$O("green") || _value.equals$O("Color.green") ) {
return Clazz.new_([$I$(1).green],$I$(4,1).c$$O);
}if (_value.equals$O("lightGray") || _value.equals$O("Color.lightGray") ) {
return Clazz.new_([$I$(1).lightGray],$I$(4,1).c$$O);
}if (_value.equals$O("magenta") || _value.equals$O("Color.magenta") ) {
return Clazz.new_([$I$(1).magenta],$I$(4,1).c$$O);
}if (_value.equals$O("orange") || _value.equals$O("Color.orange") ) {
return Clazz.new_([$I$(1).orange],$I$(4,1).c$$O);
}if (_value.equals$O("pink") || _value.equals$O("Color.pink") ) {
return Clazz.new_([$I$(1).pink],$I$(4,1).c$$O);
}if (_value.equals$O("red") || _value.equals$O("Color.red") ) {
return Clazz.new_([$I$(1).red],$I$(4,1).c$$O);
}if (_value.equals$O("white") || _value.equals$O("Color.white") ) {
return Clazz.new_([$I$(1).white],$I$(4,1).c$$O);
}if (_value.equals$O("yellow") || _value.equals$O("Color.yellow") ) {
return Clazz.new_([$I$(1).yellow],$I$(4,1).c$$O);
}return null;
}, 1);

Clazz.newMeth(C$, 'formatConstant$S',  function (_value) {
if (_value.indexOf$S(";") == -1) {
var id1=_value.indexOf$S("0");
var id2=_value.indexOf$S("#");
var id=-1;
if ((id1 > 0) && (id2 > 0) ) {
id=(id1 < id2) ? id1 : id2;
} else if (id1 > 0) {
id=id1;
} else if (id2 > 0) {
id=id2;
}if (id > 0) {
_value=_value + ";" + _value.substring$I$I(0, id) + "-" + _value.substring$I(id) ;
}}try {
return Clazz.new_([Clazz.new_($I$(6,1).c$$S,[_value])],$I$(4,1).c$$O);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"IllegalArgumentException")){
return null;
} else {
throw _exc;
}
}
}, 1);

Clazz.newMeth(C$, 'rectangleConstant$S',  function (_value) {
if (_value.indexOf$I(",") < 0) {
return null;
}try {
var t=Clazz.new_($I$(3,1).c$$S$S,[_value, ","]);
var x=Integer.parseInt$S(t.nextToken$());
var y=Integer.parseInt$S(t.nextToken$());
var w=Integer.parseInt$S(t.nextToken$());
var h=Integer.parseInt$S(t.nextToken$());
return Clazz.new_([Clazz.new_($I$(7,1).c$$I$I$I$I,[x, y, w, h])],$I$(4,1).c$$O);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NULL_COLOR=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
C$.defaultFont=Clazz.new_($I$(2,1).c$$S$I$I,["Dialog", 12, 0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
