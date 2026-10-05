(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'java.awt.Toolkit','java.awt.event.KeyAdapter','test.Test_Event','java.awt.KeyboardFocusManager','java.util.logging.ConsoleHandler','java.util.logging.Level','java.util.logging.Logger','java.awt.DefaultKeyboardFocusManager','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Dimension','java.awt.Color','javax.swing.JDesktopPane','javax.swing.JInternalFrame','javax.swing.Timer','java.awt.event.KeyEvent','java.awt.event.MouseEvent','java.awt.event.InputEvent','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','java.awt.TextArea','javax.swing.JButton','java.awt.TextField','java.awt.Button','javax.swing.JTextField','javax.swing.text.JTextComponent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Event", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.asInternalFrame=false;
this.test="  34567890\n1234567890\n  345\n     ";
this.kl=((P$.Test_Event$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['test.Test_Event'].showKeyEvent$java_awt_event_KeyEvent.apply(this.b$['test.Test_Event'], [e]);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
this.b$['test.Test_Event'].showKeyEvent$java_awt_event_KeyEvent.apply(this.b$['test.Test_Event'], [e]);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
this.b$['test.Test_Event'].showKeyEvent$java_awt_event_KeyEvent.apply(this.b$['test.Test_Event'], [e]);
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.Test_Event$1));
this.al=((P$.Test_Event$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("Test_Event action for " + e.getActionCommand$() + " " + e.getSource$() );
if (e.getSource$() === this.b$['test.Test_Event'].btnj ) {
this.b$['test.Test_Event'].tarea.setCaretPosition$I(((Math.random() * this.b$['test.Test_Event'].tarea.getText$().length$())|0));
}});
})()
), Clazz.new_(P$.Test_Event$2.$init$,[this, null]));
this.ml=((P$.Test_Event$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['test.Test_Event'].showMouseEvent$java_awt_event_MouseEvent.apply(this.b$['test.Test_Event'], [e]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['test.Test_Event'].showMouseEvent$java_awt_event_MouseEvent.apply(this.b$['test.Test_Event'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['test.Test_Event'].showMouseEvent$java_awt_event_MouseEvent.apply(this.b$['test.Test_Event'], [e]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['test.Test_Event'].showMouseEvent$java_awt_event_MouseEvent.apply(this.b$['test.Test_Event'], [e]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['test.Test_Event'].showMouseEvent$java_awt_event_MouseEvent.apply(this.b$['test.Test_Event'], [e]);
});
})()
), Clazz.new_(P$.Test_Event$3.$init$,[this, null]));
this.fl=((P$.Test_Event$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("focus gained");
if ($I$(3).logging) System.out.println$S("Test_Editor focus GAINED " + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getSource$()]) + " opp:" + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getOppositeComponent$()]) );
if ($I$(3).logging) System.out.println$S("Test_Editor Active = " + $I$(4).getCurrentKeyboardFocusManager$().getActiveWindow$());
if ($I$(3).logging) System.out.println$S("Test_Editor Focused = " + $I$(4).getCurrentKeyboardFocusManager$().getFocusedWindow$());
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("Test_Editor focus LOST " + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getSource$()]) + " opp:" + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getOppositeComponent$()]) );
});
})()
), Clazz.new_(P$.Test_Event$4.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['asInternalFrame'],'I',['n'],'S',['test'],'O',['kl','java.awt.event.KeyListener','al','java.awt.event.ActionListener','btnj','javax.swing.JButton','btn','java.awt.Button','tarea','java.awt.TextArea','field','java.awt.TextField','fieldj','javax.swing.JTextField','ml','java.awt.event.MouseListener','fl','java.awt.event.FocusListener']]
,['Z',['logging','allowLogging','allowEventInfo']]]

Clazz.newMeth(C$, 'logClass$S',  function (name) {
var consoleHandler=Clazz.new_($I$(5,1));
consoleHandler.setLevel$java_util_logging_Level($I$(6).ALL);
var logger=$I$(7).getLogger$S(name);
logger.setLevel$java_util_logging_Level($I$(6).ALL);
logger.addHandler$java_util_logging_Handler(consoleHandler);
}, 1);

Clazz.newMeth(C$, 'setLogging',  function () {
if ((false &&C$.allowLogging)) {
var rootLogger=$I$(7).getLogger$S("");
rootLogger.setLevel$java_util_logging_Level($I$(6).ALL);
C$.logClass$S("java.awt.EventDispatchThread");
C$.logClass$S("java.awt.EventQueue");
C$.logClass$S("java.awt.Component");
C$.logClass$S("java.awt.focus.Component");
C$.logClass$S("java.awt.focus.DefaultKeyboardFocusManager");
}}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(4,"setCurrentKeyboardFocusManager$java_awt_KeyboardFocusManager",[((P$.Test_Event$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.DefaultKeyboardFocusManager'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'dispatchEvent$java_awt_AWTEvent',  function (e) {
if ($I$(3).allowEventInfo && e.getID$() != 503 ) {
if (e.getID$() == 501) {
if ($I$(3).logging) System.out.println$S("FocusMan mousepressed event");
}if ($I$(3).logging) System.out.println$S("FocusMan dispatching activeElement=" + (document.activeElement.id ||this.getFocusOwner$()));
if ($I$(3).logging) System.out.println$S("FocusMan dispatching event Source " + e.getSource$());
if (e.toString().indexOf$S("WINDOW_OPENED") >= 0) {
if ($I$(3).logging) System.out.println$S("???");
}if ($I$(3).logging) System.out.println$S("FocusMan dispatching event " + e);
}return C$.superclazz.prototype.dispatchEvent$java_awt_AWTEvent.apply(this, [e]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.Test_Event$5))]);
Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
$I$(1).getDefaultToolkit$().addAWTEventListener$java_awt_event_AWTEventListener$J(((P$.Test_Event$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.AWTEventListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'eventDispatched$java_awt_AWTEvent',  function (event) {
});
})()
), Clazz.new_(P$.Test_Event$6.$init$,[this, null])), -1);
this.setContentPane$java_awt_Container(((P$.Test_Event$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
})()
), Clazz.new_($I$(9,1),[this, null],P$.Test_Event$7)));
p$1.setLogging.apply(this, []);
this.setTitle$S("testing editor");
this.setLocation$I$I(100, 100);
var ptop=p$1.getTopPanel.apply(this, []);
var mb=p$1.getMenuBar$javax_swing_JPanel.apply(this, [ptop]);
var full=Clazz.new_([Clazz.new_($I$(10,1))],$I$(9,1).c$$java_awt_LayoutManager);
full.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[300, 300]));
full.setBackground$java_awt_Color($I$(12).green);
full.add$java_awt_Component$O(ptop, "North");
ptop.setBackground$java_awt_Color($I$(12).magenta);
full.setName$S("full");
ptop.setName$S("ptop");
if (this.asInternalFrame) {
var d=Clazz.new_($I$(13,1));
this.add$java_awt_Component(d);
this.getRootPane$().putClientProperty$O$O("swingjs.overflow.hidden", "false");
d.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[800, 600]));
var main=Clazz.new_($I$(14,1));
main.setName$S("main-frame");
main.setBackground$java_awt_Color($I$(12).blue);
main.getRootPane$().setBackground$java_awt_Color($I$(12).RED);
main.getContentPane$().setBackground$java_awt_Color($I$(12).CYAN);
main.getContentPane$().setName$S("main.content");
main.getRootPane$().setName$S("main.root");
main.setJMenuBar$javax_swing_JMenuBar(mb);
var mlmain=((P$.Test_Event$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("main listener mousePressed " + e);
var c=this.b$['java.awt.Container'].getComponentAt$I$I.apply(this.b$['java.awt.Container'], [e.getX$(), e.getY$()]);
if ($I$(3).logging) System.out.println$S("requesting focus for " + c);
if (c != null ) c.requestFocus$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});
})()
), Clazz.new_(P$.Test_Event$8.$init$,[this, null]));
var a=(mb.getComponent$I(0)).getRegisteredKeyStrokes$();
if (C$.logging) System.out.println$S("menubar menu registration: " + a.length);
a=(mb.getComponent$I(0)).getRegisteredKeyStrokes$();
if (C$.logging) System.out.println$S("menubar menu registration: " + a.length);
main.add$java_awt_Component(full);
main.setTitle$S("main");
main.pack$();
if (C$.logging) System.out.print$S("full size:" + full.getSize$());
main.setVisible$Z(true);
d.add$java_awt_Component(main);
var main2=Clazz.new_($I$(14,1));
var p=Clazz.new_($I$(9,1));
p.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[100, 300]));
p.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[100, 300]));
main2.add$java_awt_Component(p);
main2.setTitle$S("main2");
main2.pack$();
main2.setVisible$Z(true);
d.add$java_awt_Component(main2);
this.pack$();
this.setVisible$Z(true);
System.out.println$O(main.getRootPane$().getBounds$());
System.out.println$O(main.getLayeredPane$().getBounds$());
System.out.println$O(main.getContentPane$().getBounds$());
} else {
this.setJMenuBar$javax_swing_JMenuBar(mb);
this.add$java_awt_Component(full);
this.pack$();
this.setVisible$Z(true);
System.out.println$O(this.getRootPane$().getBounds$());
System.out.println$O(this.getLayeredPane$().getBounds$());
System.out.println$O(this.getContentPane$().getBounds$());
}System.out.println$O(full.getBounds$());
System.out.println$O(ptop.getBounds$());
System.out.println$O(mb.getBounds$());
System.out.println$S("");
}, 1);

Clazz.newMeth(C$, 'showFocusTimer',  function () {
var t=Clazz.new_([100, ((P$.Test_Event$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var s=document.activeElement.id ||null;
s+=" " + (++this.b$['test.Test_Event'].n);

document.title = s;
});
})()
), Clazz.new_(P$.Test_Event$9.$init$,[this, null]))],$I$(15,1).c$$I$java_awt_event_ActionListener);
t.setRepeats$Z(true);
if (true ||false) t.start$();
}, p$1);

Clazz.newMeth(C$, 'showKeyEvent$java_awt_event_KeyEvent',  function (e) {
var source=(xxx = e).bdata.jqevent.originalEvent.target.id ||"";
if (C$.logging) System.out.println$S("Test_Editor keyEvent id=" + e.getID$() + " " + " src=" + (e.getSource$()).getName$() + " " + (e.getSource$()).getClass$().getName$() + " " + source + " char=" + e.getKeyChar$() + " code=" + e.getKeyCode$() + " loc=" + e.getKeyLocation$() + "\n mod=" + e.getModifiers$() + " " + $I$(16,"getKeyModifiersText$I",[e.getModifiers$()]) + " modx=" + e.getModifiersEx$() + " " + $I$(16,"getKeyModifiersText$I",[e.getModifiersEx$()]) );
});

Clazz.newMeth(C$, 'showMouseEvent$java_awt_event_MouseEvent',  function (e) {
var c=$I$(4).getCurrentKeyboardFocusManager$().getFocusOwner$();
if (C$.logging) System.out.println$S("Test_Editor  mouse event " + C$.getIdString$I(e.getID$()) + " " + e.getX$() + "," + e.getY$() + " " + Integer.toHexString$I(e.getModifiers$()) + " " + $I$(17,"getMouseModifiersText$I",[e.getModifiers$()]) + " " + $I$(18,"getModifiersExText$I",[e.getModifiersEx$()]) + "\n  trigger? " + e.isPopupTrigger$() + " focus owner was " + (c == null  ? null : c.getName$() + " " + c.getClass$().getName$() ) );
});

Clazz.newMeth(C$, 'getIdString$I',  function (id) {
switch (id) {
case 501:
return "MOUSE_PRESSED";
case 502:
return "MOUSE_RELEASED";
case 500:
return "MOUSE_CLICKED";
case 504:
return "MOUSE_ENTERED";
case 505:
return "MOUSE_EXITED";
case 503:
return "MOUSE_MOVED";
case 506:
return "MOUSE_DRAGGED";
case 507:
return "MOUSE_WHEEL";
default:
return "unknown type";
}
}, 1);

Clazz.newMeth(C$, 'action$java_awt_Event$O',  function (ae, s) {
if (C$.logging) System.out.println$S("AWT action " + s + " " + ae );
return false;
});

Clazz.newMeth(C$, 'getMenuBar$javax_swing_JPanel',  function (ptop) {
var mb=((P$.Test_Event$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenuBar'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (e, path, m) {
if ($I$(3).logging) System.out.println$S("Test_Editor path length=" + path.length);
C$.superclazz.prototype.processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager.apply(this, [e, path, m]);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.Test_Event$10));
var mb1=((P$.Test_Event$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenu'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (e, path, m) {
if ($I$(3).logging) System.out.println$S("Test_Editor JMenu path length=" + path.length);
C$.superclazz.prototype.processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager.apply(this, [e, path, m]);
});

Clazz.newMeth(C$, 'addNotify$',  function () {
if ($I$(3).logging) System.out.println$S("Test_Editor JMenu addNotify");
C$.superclazz.prototype.addNotify$.apply(this, []);
});
})()
), Clazz.new_($I$(20,1).c$$S,[this, null, "Test"],P$.Test_Event$11));
var mb1a=Clazz.new_($I$(21,1).c$$S,["test-1"]);
var mb1b=Clazz.new_($I$(21,1).c$$S,["test-2"]);
var mb1c=Clazz.new_($I$(20,1).c$$S,["test-3"]);
var mb1c1=Clazz.new_($I$(21,1).c$$S,["test-4"]);
var mb1c2=Clazz.new_($I$(21,1).c$$S,["test-5"]);
mb1.setMnemonic$C("t");
mb1.add$javax_swing_JMenuItem(mb1a);
mb1.add$javax_swing_JMenuItem(mb1b);
mb1.add$javax_swing_JMenuItem(mb1c);
mb1c.add$javax_swing_JMenuItem(mb1c1);
mb1c.add$javax_swing_JMenuItem(mb1c2);
var a=mb1.getRegisteredKeyStrokes$();
if (C$.logging) System.out.println$S("menubar menu registration: " + a.length);
for (var i=0; i < a.length; i++) {
if (C$.logging) System.out.println$O(a[i]);
}
mb.add$javax_swing_JMenu(mb1);
a=mb1.getRegisteredKeyStrokes$();
if (C$.logging) System.out.println$S("menubar menu registration: " + a.length);
var al=((P$.Test_Event$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("Test_Editor action " + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getSource$()]));
this.$finals$.ptop.setBackground$java_awt_Color($I$(12).red);
this.b$['test.Test_Event'].btnj.setText$S(e.getActionCommand$());
});
})()
), Clazz.new_(P$.Test_Event$12.$init$,[this, {ptop:ptop}]));
mb1a.addActionListener$java_awt_event_ActionListener(al);
mb1a.setMnemonic$C("1");
mb1a.setAccelerator$javax_swing_KeyStroke($I$(22).getKeyStroke$I$I(82, 8));
mb1b.addActionListener$java_awt_event_ActionListener(((P$.Test_Event$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("Test_Editor action " + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getSource$()]));
this.$finals$.ptop.setBackground$java_awt_Color($I$(12).YELLOW);
this.b$['test.Test_Event'].btnj.setText$S(e.getActionCommand$());
});
})()
), Clazz.new_(P$.Test_Event$13.$init$,[this, {ptop:ptop}])));
mb1b.setAccelerator$javax_swing_KeyStroke($I$(22).getKeyStroke$I$I(89, 11));
var a2=((P$.Test_Event$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(3).logging) System.out.println$S("Test_Editor action " + this.b$['test.Test_Event'].getID$O.apply(this.b$['test.Test_Event'], [e.getSource$()]));
this.$finals$.ptop.setBackground$java_awt_Color($I$(12).white);
this.b$['test.Test_Event'].btnj.setText$S(e.getActionCommand$());
});
})()
), Clazz.new_(P$.Test_Event$14.$init$,[this, {ptop:ptop}]));
mb1c.addActionListener$java_awt_event_ActionListener(al);
mb1c.setMnemonic$C("3");
mb1c1.addActionListener$java_awt_event_ActionListener(al);
mb1c1.setMnemonic$C("4");
mb1c1.setAccelerator$javax_swing_KeyStroke($I$(22).getKeyStroke$I$I(67, 2));
mb1c2.addActionListener$java_awt_event_ActionListener(a2);
mb1c2.setMnemonic$C("5");
mb1c2.setAccelerator$javax_swing_KeyStroke($I$(22).getKeyStroke$I$I(86, 2));
return mb;
}, p$1);

Clazz.newMeth(C$, 'getID$O',  function (jc) {
return (jc == null  ? null : Clazz.instanceOf(jc, "javax.swing.JComponent") ? jc.ui.id ||(jc).getUIClassID$() : jc.getClass$().getName$());
});

Clazz.newMeth(C$, 'getTopPanel',  function () {
var ptop=Clazz.new_($I$(9,1));
ptop.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[300, 300]));
ptop.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[400, 400]));
ptop.setBackground$java_awt_Color($I$(12).LIGHT_GRAY);
ptop.setOpaque$Z(true);
this.tarea=((P$.Test_Event$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Event$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.TextArea'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFocusTraversalKeysEnabled$',  function () {
if ($I$(3).logging) System.out.println$S("checking textarea traversalkeys " + C$.superclazz.prototype.getFocusTraversalKeysEnabled$.apply(this, []));
return C$.superclazz.prototype.getFocusTraversalKeysEnabled$.apply(this, []);
});
})()
), Clazz.new_($I$(23,1).c$$I$I,[this, null, 2, 15],P$.Test_Event$15));
this.tarea.setFocusTraversalKeysEnabled$Z(false);
this.tarea.addFocusListener$java_awt_event_FocusListener(this.fl);
ptop.add$java_awt_Component(this.tarea);
this.btnj=Clazz.new_($I$(24,1).c$$S,["btnj"]);
this.btnj.setName$S("btnj");
this.btnj.setOpaque$Z(true);
this.btnj.setBackground$java_awt_Color($I$(12).white);
this.btnj.addMouseListener$java_awt_event_MouseListener(this.ml);
this.btnj.addActionListener$java_awt_event_ActionListener(this.al);
this.btnj.addKeyListener$java_awt_event_KeyListener(this.kl);
ptop.add$java_awt_Component(this.btnj);
this.field=Clazz.new_($I$(25,1).c$$S,["field"]);
this.field.setName$S("field");
this.field.addMouseListener$java_awt_event_MouseListener(this.ml);
this.field.addActionListener$java_awt_event_ActionListener(this.al);
this.field.addKeyListener$java_awt_event_KeyListener(this.kl);
this.btn=Clazz.new_($I$(26,1).c$$S,["test"]);
this.btn.setName$S("btn");
this.btn.setBackground$java_awt_Color($I$(12).orange);
this.btn.addMouseListener$java_awt_event_MouseListener(this.ml);
this.btn.addActionListener$java_awt_event_ActionListener(this.al);
this.btn.addKeyListener$java_awt_event_KeyListener(this.kl);
ptop.add$java_awt_Component(this.btn);
ptop.add$java_awt_Component(this.field);
this.fieldj=Clazz.new_($I$(27,1).c$$S,["fieldj"]);
var m=$I$(28).getKeymap$S("TextFieldUI");
this.fieldj.setName$S("fieldj");
this.fieldj.addMouseListener$java_awt_event_MouseListener(this.ml);
this.fieldj.addActionListener$java_awt_event_ActionListener(this.al);
this.fieldj.addKeyListener$java_awt_event_KeyListener(this.kl);
ptop.add$java_awt_Component(this.fieldj);
return ptop;
}, p$1);

Clazz.newMeth(C$, 'updateTitle$',  function () {
var c=$I$(4).getCurrentKeyboardFocusManager$().getFocusOwner$();
if (C$.logging) System.out.println$S("Test_Editor focus owner is " + (c == null  ? null : c.getClass$().getName$()));
this.setTitle$S((++this.n) + "  " + (c == null  ? null : c.getClass$().getName$()) );
});

C$.$static$=function(){C$.$static$=0;
C$.logging=true;
{
if (C$.logging) System.out.println$S("os:" + System.getProperty$S("os.name"));
if (C$.logging) System.out.println$S("dpr:" + $I$(1).getDefaultToolkit$().getScreenResolution$());
};
C$.allowLogging=true;
C$.allowEventInfo=true;
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
