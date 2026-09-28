(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.awt.Color','java.util.logging.Level','java.util.ArrayList','javax.swing.JTextPane','org.opensourcephysics.controls.ControlsRes','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Dimension','javax.swing.text.StyleContext','javax.swing.text.StyleConstants','javax.swing.JScrollPane','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','org.opensourcephysics.controls.MessageFrame','javax.swing.ButtonGroup','org.opensourcephysics.controls.OSPLog','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textPane=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['textPane','javax.swing.JTextPane']]
,['I',['levelOSP','SEVERE','WARNING','INFO','CONFIG','FINE','FINER','FINEST'],'O',['DARK_GREEN','java.awt.Color','+DARK_BLUE','+DARK_RED','black','javax.swing.text.Style','+red','+blue','+green','+magenta','+gray','APPLET_MESSAGEFRAME','org.opensourcephysics.controls.MessageFrame','buttonList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setTitle$S($I$(5).getString$S("MessageFrame.DefaultTitle"));
var logPanel=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
logPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[480, 240]));
this.setContentPane$java_awt_Container(logPanel);
logPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[200, 300]));
logPanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[100, 100]));
this.textPane.setEditable$Z(false);
this.textPane.setAutoscrolls$Z(true);
C$.black=$I$(9).getDefaultStyleContext$().getStyle$S("default");
C$.red=this.textPane.addStyle$S$javax_swing_text_Style("red", C$.black);
$I$(10).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(C$.red, C$.DARK_RED);
C$.blue=this.textPane.addStyle$S$javax_swing_text_Style("blue", C$.black);
$I$(10).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(C$.blue, C$.DARK_BLUE);
C$.green=this.textPane.addStyle$S$javax_swing_text_Style("green", C$.black);
$I$(10).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(C$.green, C$.DARK_GREEN);
C$.magenta=this.textPane.addStyle$S$javax_swing_text_Style("magenta", C$.black);
$I$(10,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[C$.magenta, $I$(1).MAGENTA]);
C$.gray=this.textPane.addStyle$S$javax_swing_text_Style("gray", C$.black);
$I$(10,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[C$.gray, $I$(1).GRAY]);
var textScroller=Clazz.new_($I$(11,1).c$$java_awt_Component,[this.textPane]);
textScroller.setWheelScrollingEnabled$Z(true);
logPanel.add$java_awt_Component$O(textScroller, "Center");
this.pack$();
}, 1);

Clazz.newMeth(C$, 'showLog$Z',  function (b) {
if ((C$.APPLET_MESSAGEFRAME == null ) || !C$.APPLET_MESSAGEFRAME.isDisplayable$() ) {
C$.createAppletMessageFrame$();
}C$.APPLET_MESSAGEFRAME.setVisible$Z(b);
return C$.APPLET_MESSAGEFRAME;
}, 1);

Clazz.newMeth(C$, 'createAppletMessageFrame$',  function () {
C$.APPLET_MESSAGEFRAME=Clazz.new_(C$);
C$.APPLET_MESSAGEFRAME.setSize$I$I(300, 200);
C$.APPLET_MESSAGEFRAME.setDefaultCloseOperation$I(1);
var menuBar=Clazz.new_($I$(12,1));
C$.APPLET_MESSAGEFRAME.setJMenuBar$javax_swing_JMenuBar(menuBar);
var editMenu=Clazz.new_([$I$(5).getString$S("MessageFrame.Edit_menu")],$I$(13,1).c$$S);
menuBar.add$javax_swing_JMenu(editMenu);
var clearItem=Clazz.new_([$I$(5).getString$S("MessageFrame.Clear_menu_item")],$I$(14,1).c$$S);
editMenu.add$javax_swing_JMenuItem(clearItem);
clearItem.addActionListener$java_awt_event_ActionListener(((P$.MessageFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MessageFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15).APPLET_MESSAGEFRAME.textPane.setText$S("");
});
})()
), Clazz.new_(P$.MessageFrame$1.$init$,[this, null])));
var levelMenu=Clazz.new_([$I$(5).getString$S("MessageFrame.Level_menu")],$I$(13,1).c$$S);
menuBar.add$javax_swing_JMenu(levelMenu);
var menubarGroup=Clazz.new_($I$(16,1));
for (var i=0; i < $I$(17).levels.length; i++) {
var item=Clazz.new_([$I$(17).levels[i].getName$()],$I$(18,1).c$$S);
C$.buttonList.add$O(item);
levelMenu.add$java_awt_Component$I(item, 0);
menubarGroup.add$javax_swing_AbstractButton(item);
if (C$.levelOSP == $I$(17).levels[i].intValue$()) {
item.setSelected$Z(true);
}item.setActionCommand$S($I$(17).levels[i].getName$());
item.addActionListener$java_awt_event_ActionListener(((P$.MessageFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MessageFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15,"setLevel$java_util_logging_Level",[$I$(2,"parse$S",[e.getActionCommand$()])]);
});
})()
), Clazz.new_(P$.MessageFrame$2.$init$,[this, null])));
}
$I$(19,"setFonts$O$I",[C$.APPLET_MESSAGEFRAME, $I$(19).getLevel$()]);
$I$(19,"addListener$S$java_beans_PropertyChangeListener",["level", ((P$.MessageFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MessageFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
$I$(19,"setFonts$java_awt_Container",[$I$(15).APPLET_MESSAGEFRAME]);
});
})()
), Clazz.new_(P$.MessageFrame$3.$init$,[this, null]))]);
$I$(20,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.MessageFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MessageFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
$I$(15).APPLET_MESSAGEFRAME.setTitle$S($I$(5).getString$S("MessageFrame.DefaultTitle"));
this.$finals$.editMenu.setText$S($I$(5).getString$S("MessageFrame.Edit_menu"));
this.$finals$.clearItem.setText$S($I$(5).getString$S("MessageFrame.Clear_menu"));
this.$finals$.levelMenu.setText$S($I$(5).getString$S("MessageFrame.Level_menu"));
});
})()
), Clazz.new_(P$.MessageFrame$4.$init$,[this, {editMenu:editMenu,clearItem:clearItem,levelMenu:levelMenu}]))]);
}, 1);

Clazz.newMeth(C$, 'isLogVisible$',  function () {
if (C$.APPLET_MESSAGEFRAME == null ) {
return false;
}return C$.APPLET_MESSAGEFRAME.isVisible$();
}, 1);

Clazz.newMeth(C$, 'clear$',  function () {
if (C$.APPLET_MESSAGEFRAME != null ) {
C$.APPLET_MESSAGEFRAME.textPane.setText$S("");
}}, 1);

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level',  function (level) {
C$.levelOSP=level.intValue$();
for (var i=0, n=Math.min($I$(17).levels.length, C$.buttonList.size$()); i < n; i++) {
if (C$.levelOSP == $I$(17).levels[i].intValue$()) {
(C$.buttonList.get$I(i)).setSelected$Z(true);
}}
}, 1);

Clazz.newMeth(C$, 'getLevelValue$',  function () {
return C$.levelOSP;
}, 1);

Clazz.newMeth(C$, 'severe$S',  function (msg) {
if (C$.levelOSP <= C$.SEVERE) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.red);
}}, 1);

Clazz.newMeth(C$, 'warning$S',  function (msg) {
if (C$.levelOSP <= C$.WARNING) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.red);
}}, 1);

Clazz.newMeth(C$, 'info$S',  function (msg) {
if (C$.levelOSP <= C$.INFO) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.black);
}}, 1);

Clazz.newMeth(C$, 'config$S',  function (msg) {
if (C$.levelOSP <= C$.CONFIG) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.green);
}}, 1);

Clazz.newMeth(C$, 'fine$S',  function (msg) {
if (C$.levelOSP <= C$.FINE) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.blue);
}}, 1);

Clazz.newMeth(C$, 'finer$S',  function (msg) {
if (C$.levelOSP <= C$.FINER) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.blue);
}}, 1);

Clazz.newMeth(C$, 'finest$S',  function (msg) {
if (C$.levelOSP <= C$.FINEST) {
C$.appletLog$S$javax_swing_text_Style(msg, C$.blue);
}}, 1);

Clazz.newMeth(C$, 'appletLog$S$javax_swing_text_Style',  function (msg, style) {
if ((C$.APPLET_MESSAGEFRAME == null ) || !C$.APPLET_MESSAGEFRAME.isDisplayable$() ) {
C$.createAppletMessageFrame$();
}$I$(21,"postEvent$Runnable",[((P$.MessageFrame$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "MessageFrame$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
var doc=$I$(15).APPLET_MESSAGEFRAME.textPane.getDocument$.apply($I$(15).APPLET_MESSAGEFRAME.textPane, []);
doc.insertString$I$S$javax_swing_text_AttributeSet.apply(doc, [doc.getLength$.apply(doc, []), this.$finals$.msg + '\n', this.$finals$.style]);
var rect=$I$(15).APPLET_MESSAGEFRAME.textPane.getBounds$.apply($I$(15).APPLET_MESSAGEFRAME.textPane, []);
rect.y=rect.height;
$I$(15).APPLET_MESSAGEFRAME.textPane.scrollRectToVisible$java_awt_Rectangle.apply($I$(15).APPLET_MESSAGEFRAME.textPane, [rect]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"javax.swing.text.BadLocationException")){
System.err.println$O.apply(System.err, [ex]);
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.MessageFrame$lambda1.$init$,[this, {style:style,msg:msg}]))]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DARK_GREEN=Clazz.new_($I$(1,1).c$$I$I$I,[0, 128, 0]);
C$.DARK_BLUE=Clazz.new_($I$(1,1).c$$I$I$I,[0, 0, 128]);
C$.DARK_RED=Clazz.new_($I$(1,1).c$$I$I$I,[128, 0, 0]);
C$.levelOSP=$I$(2).CONFIG.intValue$();
C$.SEVERE=$I$(2).SEVERE.intValue$();
C$.WARNING=$I$(2).WARNING.intValue$();
C$.INFO=$I$(2).INFO.intValue$();
C$.CONFIG=$I$(2).CONFIG.intValue$();
C$.FINE=$I$(2).FINE.intValue$();
C$.FINER=$I$(2).FINER.intValue$();
C$.FINEST=$I$(2).FINEST.intValue$();
C$.buttonList=Clazz.new_($I$(3,1));
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
