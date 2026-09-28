(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javax.swing.JLabel','Thread','java.awt.Font','javax.swing.JTextField','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PointerTest", null, 'javax.swing.JApplet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['label','javax.swing.JLabel']]
,['I',['n']]]

Clazz.newMeth(C$, ['init$','init'],  function () {
this.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.PointerTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointerTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseMotionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['mouseDragged$java_awt_event_MouseEvent','mouseDragged'],  function (e) {
System.out.println$S(e.getX$() + " " + e.getY$() + e.getLocationOnScreen$() );
});

Clazz.newMeth(C$, ['mouseMoved$java_awt_event_MouseEvent','mouseMoved'],  function (e) {
});
})()
), Clazz.new_(P$.PointerTest$1.$init$,[this, null])));
this.label=Clazz.new_($I$(1,1).c$$S,["Goodbye, World" + C$.n++ + "!" ]);
this.label.addMouseListener$java_awt_event_MouseListener(((P$.PointerTest$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointerTest$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['mouseClicked$java_awt_event_MouseEvent','mouseClicked'],  function (e) {
});

Clazz.newMeth(C$, ['mousePressed$java_awt_event_MouseEvent','mousePressed'],  function (e) {
});

Clazz.newMeth(C$, ['mouseReleased$java_awt_event_MouseEvent','mouseReleased'],  function (e) {
System.out.println$S($I$(2).currentThread$().getName$());
System.exit$I(0);
});

Clazz.newMeth(C$, ['mouseEntered$java_awt_event_MouseEvent','mouseEntered'],  function (e) {
});

Clazz.newMeth(C$, ['mouseExited$java_awt_event_MouseEvent','mouseExited'],  function (e) {
});
})()
), Clazz.new_(P$.PointerTest$2.$init$,[this, null])));
this.label.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["SansSerif", 0, 20]));
this.add$java_awt_Component$O(this.label, "North");
var tf=Clazz.new_($I$(4,1).c$$S,["test"]);
tf.setSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[100, 30]));
tf.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[100, 30]));
tf.addKeyListener$java_awt_event_KeyListener(((P$.PointerTest$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointerTest$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['keyTyped$java_awt_event_KeyEvent','keyTyped'],  function (e) {
System.out.println$S($I$(2).currentThread$().getName$());
});

Clazz.newMeth(C$, ['keyPressed$java_awt_event_KeyEvent','keyPressed'],  function (e) {
});

Clazz.newMeth(C$, ['keyReleased$java_awt_event_KeyEvent','keyReleased'],  function (e) {
});
})()
), Clazz.new_(P$.PointerTest$3.$init$,[this, null])));
tf.addMouseListener$java_awt_event_MouseListener(((P$.PointerTest$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointerTest$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['mouseClicked$java_awt_event_MouseEvent','mouseClicked'],  function (e) {
});

Clazz.newMeth(C$, ['mousePressed$java_awt_event_MouseEvent','mousePressed'],  function (e) {
});

Clazz.newMeth(C$, ['mouseReleased$java_awt_event_MouseEvent','mouseReleased'],  function (e) {
System.out.println$S($I$(2).currentThread$().getName$());
});

Clazz.newMeth(C$, ['mouseEntered$java_awt_event_MouseEvent','mouseEntered'],  function (e) {
});

Clazz.newMeth(C$, ['mouseExited$java_awt_event_MouseEvent','mouseExited'],  function (e) {
});
})()
), Clazz.new_(P$.PointerTest$4.$init$,[this, null])));
this.add$java_awt_Component$O(tf, "South");
});

C$.$static$=function(){C$.$static$=0;
C$.n=1;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
