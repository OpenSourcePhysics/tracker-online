(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.event.MouseAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPButton", null, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['heightComponent','javax.swing.JComponent']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(false);
this.setBorderPainted$Z(false);
this.addMouseListener$java_awt_event_MouseListener(((P$.OSPButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.OSPButton$1)));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (action) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(action);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$.apply(this, []);
this.setIcon$javax_swing_Icon(icon);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$javax_swing_Icon',  function (off, on) {
C$.c$.apply(this, []);
this.setIcon$javax_swing_Icon(off);
this.setSelectedIcon$javax_swing_Icon(on);
}, 1);

Clazz.newMeth(C$, 'setHeightComponent$javax_swing_JComponent',  function (comp) {
this.heightComponent=comp;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
if (this.heightComponent != null ) dim.height=this.heightComponent.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
if (this.heightComponent != null ) dim.height=this.heightComponent.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
if (this.heightComponent != null ) dim.height=this.heightComponent.getPreferredSize$().height;
return dim;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
