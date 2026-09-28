(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'javax.swing.JTextField','javax.swing.JButton','javax.swing.UIManager','java.util.HashMap','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontSizer", null, ['org.opensourcephysics.display.OSPRuntime','.Supported']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['D',['levelFactor','factor'],'I',['level','integerFactor'],'O',['TEXT_FONT','java.awt.Font','+BUTTON_FONT','+ACCELERATOR_FONT','CHECKBOXMENUITEM_ICON','org.opensourcephysics.display.ResizableIcon','+RADIOBUTTONMENUITEM_ICON','+CHECKBOX_ICON','+RADIOBUTTON_ICON','+ARROW_ICON','levelObj','org.opensourcephysics.tools.FontSizer','fontMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setFontsIfNot$I$O',  function (oldLevel, c) {
if (C$.level != oldLevel) C$.setFonts$O$I(c, C$.level);
return C$.level;
}, 1);

Clazz.newMeth(C$, 'setMenuFonts$javax_swing_JMenu',  function (c) {
if (c.getMenuComponentCount$() > 0) {
var f=c.getMenuComponent$I(0).getFont$();
var newFont=(f == null  ? null : C$.getResizedFont$java_awt_Font$I(f, C$.level));
if (newFont != null ) {
for (var i=0; i < c.getMenuComponentCount$(); i++) {
if (newFont.getSize$() != c.getMenuComponent$I(i).getFont$().getSize$()) {
C$.setFonts$O$I(c, C$.level);
break;
}}
}}return C$.level;
}, 1);

Clazz.newMeth(C$, 'setFonts$OA',  function (objectsToSize) {
var f=(objectsToSize[0]).getFont$();
var newFont=(f == null  ? null : C$.getResizedFont$java_awt_Font$I(f, C$.level));
if (newFont != null  && newFont !== f   && !newFont.equals$O(f) ) C$.setFonts$O$I(objectsToSize, C$.level);
return C$.level;
}, 1);

Clazz.newMeth(C$, 'setFonts$java_awt_Container',  function (c) {
if (c == null ) return 12;
var f=c.getFont$();
var newFont=(f == null  ? null : C$.getResizedFont$java_awt_Font$I(f, C$.level));
if (newFont != null  && newFont !== f   && !newFont.equals$O(f) ) {
C$.setFonts$O$I(c, C$.level);
} else {
for (var i=0; i < c.getComponentCount$(); i++) {
var comp=c.getComponent$I(i);
if (Clazz.instanceOf(comp, "java.awt.Container")) {
C$.setFonts$java_awt_Container(comp);
}}
}return C$.level;
}, 1);

Clazz.newMeth(C$, 'setFont$java_awt_Component',  function (c) {
var f=c.getFont$();
var newFont=(f == null  ? null : C$.getResizedFont$java_awt_Font$I(f, C$.level));
if (newFont != null  && newFont !== f   && !newFont.equals$O(f) ) c.setFont$java_awt_Font(newFont);
return C$.level;
}, 1);

Clazz.newMeth(C$, 'setFont$javax_swing_AbstractButton',  function (button) {
var f=button.getFont$();
var newFont=(f == null  ? null : C$.getResizedFont$java_awt_Font$I(f, C$.level));
if (newFont != null  && newFont !== f   && !newFont.equals$O(f) ) {
button.setFont$java_awt_Font(newFont);
}return C$.level;
}, 1);

Clazz.newMeth(C$, 'setLevel$I',  function (n) {
n=Math.max(0, Math.min(n, 9));
if (C$.level == n) return;
C$.level=n;
C$.factor=C$.getFactor$I(C$.level);
C$.integerFactor=C$.getIntegerFactor$I(C$.level);
var font=C$.getResizedFont$java_awt_Font$I(C$.TEXT_FONT, C$.level);
$I$(3).put$O$O("OptionPane.messageFont", font);
$I$(3).put$O$O("TextField.font", font);
$I$(3).put$O$O("ToolTip.font", font);
$I$(3).put$O$O("TabbedPane.font", font);
font=C$.getResizedFont$java_awt_Font$I(C$.ACCELERATOR_FONT, C$.level);
$I$(3).put$O$O("MenuItem.acceleratorFont", font);
font=C$.getResizedFont$java_awt_Font$I(C$.BUTTON_FONT, C$.level);
$I$(3).put$O$O("OptionPane.buttonFont", font);
C$.levelObj.firePropertyChange$S$O$O("level", null, Integer.valueOf$I(C$.level));
}, 1);

Clazz.newMeth(C$, 'getLevel$',  function () {
return C$.level;
}, 1);

Clazz.newMeth(C$, 'levelUp$',  function () {
C$.setLevel$I(C$.level + 1);
}, 1);

Clazz.newMeth(C$, 'levelDown$',  function () {
C$.setLevel$I(C$.level - 1);
}, 1);

Clazz.newMeth(C$, 'getFactor$',  function () {
return C$.factor;
}, 1);

Clazz.newMeth(C$, 'getIntegerFactor$',  function () {
return C$.integerFactor;
}, 1);

Clazz.newMeth(C$, 'setFonts$O$I',  function (obj, level) {
if (obj == null  || !$I$(6).allowSetFonts ) return level;
if (Clazz.instanceOf(obj, Clazz.array(java.lang.Object, -1))) {
for (var next, $next = 0, $$next = (obj); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
C$.setFonts$O$I(next, level);
}
return level;
}if (Clazz.instanceOf(obj, "java.util.Collection")) {
for (var next, $next = (obj).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
C$.setFonts$O$I(next, level);
}
return level;
}var factor=C$.getFactor$I(level);
if (Clazz.instanceOf(obj, "java.awt.Container")) {
C$.setFontFactor$java_awt_Container$D(obj, factor);
} else if (Clazz.instanceOf(obj, "javax.swing.border.TitledBorder")) {
C$.setFontFactor$javax_swing_border_TitledBorder$D(obj, factor);
} else if (Clazz.instanceOf(obj, "java.awt.Component")) {
C$.setFontFactor$java_awt_Component$D(obj, factor);
}return level;
}, 1);

Clazz.newMeth(C$, 'getResizedFont$java_awt_Font$I',  function (font, level) {
return C$.getResizedFont$java_awt_Font$D(font, C$.getFactor$I(level));
}, 1);

Clazz.newMeth(C$, 'getResizedFont$java_awt_Font$D',  function (font, factor) {
if (font == null ) {
return font;
}var base=C$.fontMap.get$O(font);
if (base == null ) {
base=font;
C$.fontMap.put$O$O(font, base);
}var size=(base.getSize$() * factor);
font=base.deriveFont$F(size);
C$.fontMap.put$O$O(font, base);
return font;
}, 1);

Clazz.newMeth(C$, 'getFactor$I',  function (level) {
var factor=1.0;
for (var i=0; i < level; i++) {
factor*=C$.levelFactor;
}
return factor;
}, 1);

Clazz.newMeth(C$, 'getIntegerFactor$I',  function (level) {
return Math.round(Long.$fval(Math.round$D(C$.getFactor$I(level))));
}, 1);

Clazz.newMeth(C$, 'addListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
C$.levelObj.addPropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
}, 1);

Clazz.newMeth(C$, 'removeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
C$.levelObj.removePropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
}, 1);

Clazz.newMeth(C$, 'setFontFactor$java_awt_Container$D',  function (c, factor) {
if (c == null ) return;
try {
var font=C$.getResizedFont$java_awt_Font$D(c.getFont$(), factor);
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
if (Clazz.instanceOf(c, "javax.swing.JPopupMenu.Separator")) {
return;
}var jc=c;
var border=jc.getBorder$();
if (Clazz.instanceOf(border, "javax.swing.border.TitledBorder")) {
C$.setFontFactor$javax_swing_border_TitledBorder$D(border, factor);
}if (Clazz.instanceOf(c, "javax.swing.JMenu")) {
var m=c;
C$.setFontFactor$java_awt_Container$D(m.getPopupMenu$(), factor);
}}for (var i=0, n=c.getComponentCount$(); i < n; i++) {
var co=c.getComponent$I(i);
if ((Clazz.instanceOf(co, "java.awt.Container"))) {
C$.setFontFactor$java_awt_Container$D(co, factor);
} else {
C$.setFontFactor$java_awt_Component$D(co, factor);
}}
if (font != null  && !font.equals$O(c.getFont$()) ) {
c.setFont$java_awt_Font(font);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setFontFactor$java_awt_Component$D',  function (c, factor) {
var font=C$.getResizedFont$java_awt_Font$D(c.getFont$(), factor);
c.setFont$java_awt_Font(font);
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
var border=(c).getBorder$();
if (Clazz.instanceOf(border, "javax.swing.border.TitledBorder")) {
C$.setFontFactor$javax_swing_border_TitledBorder$D(border, factor);
}}}, 1);

Clazz.newMeth(C$, 'setFontFactor$javax_swing_border_TitledBorder$D',  function (b, factor) {
var font=b.getTitleFont$();
if (font == null ) {
font=$I$(3).getFont$O("TitledBorder.font");
}b.setTitleFont$java_awt_Font(C$.getResizedFont$java_awt_Font$D(font, factor));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.TEXT_FONT=Clazz.new_($I$(1,1)).getFont$();
C$.BUTTON_FONT=Clazz.new_($I$(2,1)).getFont$();
C$.ACCELERATOR_FONT=$I$(3).get$O("MenuItem.acceleratorFont");
C$.levelObj=Clazz.new_(C$);
C$.level=0;
C$.integerFactor=1;
C$.levelFactor=1.25;
C$.factor=1;
C$.fontMap=Clazz.new_($I$(4,1));
{
var baseIcon=$I$(3).get$O("CheckBoxMenuItem.checkIcon");
C$.CHECKBOXMENUITEM_ICON=Clazz.new_($I$(5,1).c$$javax_swing_Icon,[baseIcon]);
$I$(3).put$O$O("CheckBoxMenuItem.checkIcon", C$.CHECKBOXMENUITEM_ICON);
baseIcon=$I$(3).get$O("CheckBox.icon");
C$.CHECKBOX_ICON=Clazz.new_($I$(5,1).c$$javax_swing_Icon,[baseIcon]);
$I$(3).put$O$O("CheckBox.icon", C$.CHECKBOX_ICON);
baseIcon=$I$(3).get$O("RadioButtonMenuItem.checkIcon");
C$.RADIOBUTTONMENUITEM_ICON=Clazz.new_($I$(5,1).c$$javax_swing_Icon,[baseIcon]);
$I$(3).put$O$O("RadioButtonMenuItem.checkIcon", C$.RADIOBUTTONMENUITEM_ICON);
baseIcon=$I$(3).get$O("RadioButton.icon");
C$.RADIOBUTTON_ICON=Clazz.new_($I$(5,1).c$$javax_swing_Icon,[baseIcon]);
$I$(3).put$O$O("RadioButton.icon", C$.RADIOBUTTON_ICON);
baseIcon=$I$(3).get$O("Menu.arrowIcon");
C$.ARROW_ICON=Clazz.new_($I$(5,1).c$$javax_swing_Icon,[baseIcon]);
$I$(3).put$O$O("Menu.arrowIcon", C$.ARROW_ICON);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
