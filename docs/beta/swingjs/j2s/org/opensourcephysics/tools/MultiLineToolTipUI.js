(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'javax.swing.CellRendererPane','java.awt.Dimension','javax.swing.JTextArea','javax.swing.BorderFactory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiLineToolTipUI", null, 'javax.swing.plaf.basic.BasicToolTipUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rendererPane','javax.swing.CellRendererPane']]
,['O',['$sharedInstance','org.opensourcephysics.tools.MultiLineToolTipUI','textArea','javax.swing.JTextArea']]]

Clazz.newMeth(C$, 'createUI$javax_swing_JComponent',  function (c) {
return C$.$sharedInstance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [c]);
this.rendererPane=Clazz.new_($I$(1,1));
c.add$java_awt_Component(this.rendererPane);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.uninstallUI$javax_swing_JComponent.apply(this, [c]);
c.remove$java_awt_Component(this.rendererPane);
this.rendererPane=null;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
var size=c.getSize$();
C$.textArea.setBackground$java_awt_Color(c.getBackground$());
this.rendererPane.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, C$.textArea, c, 1, 1, size.width - 1, size.height - 1, true);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
var tipText=(c).getTipText$();
if (tipText == null ) return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
C$.textArea=Clazz.new_($I$(3,1).c$$S,[tipText]);
C$.textArea.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 2, 2, 2));
this.rendererPane.removeAll$();
this.rendererPane.add$java_awt_Component(C$.textArea);
C$.textArea.setWrapStyleWord$Z(true);
C$.textArea.setLineWrap$Z(false);
var dim=C$.textArea.getPreferredSize$();
dim.height+=2;
dim.width+=2;
return dim;
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (c) {
return this.getPreferredSize$javax_swing_JComponent(c);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (c) {
return this.getPreferredSize$javax_swing_JComponent(c);
});

C$.$static$=function(){C$.$static$=0;
C$.$sharedInstance=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
