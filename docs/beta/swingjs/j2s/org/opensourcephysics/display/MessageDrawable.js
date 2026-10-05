(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'javax.swing.JLabel','java.awt.Font','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.TeXParser','org.opensourcephysics.display.OSPRuntime','java.awt.Color','javax.swing.border.EmptyBorder','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageDrawable", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tlStr=null;
this.trStr=null;
this.blStr=null;
this.brStr=null;
this.fontname="TimesRoman";
this.fontsize=12;
this.fontstyle=0;
this.ignoreRepaint=false;
},1);

C$.$fields$=[['Z',['ignoreRepaint'],'I',['fontsize','fontstyle','index'],'S',['tlStr','trStr','blStr','brStr','fontname','panelStr'],'O',['font','java.awt.Font','labels','javax.swing.JLabel[]','listener','java.awt.event.ComponentListener']]
,['I',['mcount']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_display_DrawingPanel.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (panel) {
;C$.$init$.apply(this);
this.index=++C$.mcount;
if (panel != null ) {
this.panelStr=panel.toString();
this.labels=Clazz.array($I$(1), [4]);
panel.addComponentListener$java_awt_event_ComponentListener(this.listener=((P$.MessageDrawable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MessageDrawable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ComponentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.display.MessageDrawable'].moveToView$org_opensourcephysics_display_DrawingPanel.apply(this.b$['org.opensourcephysics.display.MessageDrawable'], [e.getComponent$()]);
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.display.MessageDrawable'].moveToView$org_opensourcephysics_display_DrawingPanel.apply(this.b$['org.opensourcephysics.display.MessageDrawable'], [e.getComponent$()]);
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
});
})()
), Clazz.new_(P$.MessageDrawable$1.$init$,[this, null])));
}this.font=Clazz.new_($I$(2,1).c$$S$I$I,[this.fontname, this.fontstyle, this.fontsize]);
$I$(3,"addListener$S$java_beans_PropertyChangeListener",["level", ((P$.MessageDrawable$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "MessageDrawable$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$O'],  function (e) /*block*/{
if (e.getPropertyName$.apply(e, []).equals$O.apply(e.getPropertyName$.apply(e, []), ["level"])) {
var level=(e.getNewValue$.apply(e, [])).intValue$.apply((e.getNewValue$.apply(e, [])), []);
this.b$['org.opensourcephysics.display.MessageDrawable'].setFontLevel$I.apply(this.b$['org.opensourcephysics.display.MessageDrawable'], [level]);
}});
})()
), Clazz.new_(P$.MessageDrawable$lambda1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'setIgnoreRepaint$Z',  function (ignore) {
this.ignoreRepaint=ignore;
});

Clazz.newMeth(C$, 'setMessageFont$java_awt_Font',  function (aFont) {
if (aFont != null ) this.font=aFont;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
this.font=$I$(3).getResizedFont$java_awt_Font$I(this.font, level);
});

Clazz.newMeth(C$, 'setFontFactor$D',  function (factor) {
this.font=$I$(3).getResizedFont$java_awt_Font$D(this.font, factor);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (this.labels != null ) for (var i=0; i < 4; i++) {
this.labels[i]=null;
}
});

Clazz.newMeth(C$, 'setMessage$org_opensourcephysics_display_DrawingPanel$S$I',  function (panel, msg, location) {
if (msg != null ) {
if (msg.length$() == 0) msg=null;
 else msg=$I$(4).parseTeX$S(msg);
}switch (location) {
case 0:
this.blStr=msg;
break;
case 1:
this.brStr=msg;
break;
case 2:
this.trStr=msg;
break;
case 3:
this.tlStr=msg;
break;
}
if (panel != null ) this.moveToView$org_opensourcephysics_display_DrawingPanel(panel);
});

Clazz.newMeth(C$, 'moveToView$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var port=panel.findViewRect$();
var d;
var l;
l=p$1.getLabel$org_opensourcephysics_display_DrawingPanel$I$S.apply(this, [panel, 3, this.tlStr]);
if (l != null ) {
d=l.getPreferredSize$();
l.setBounds$I$I$I$I(port.x, port.y, d.width, d.height);
l.setVisible$Z(true);
}l=p$1.getLabel$org_opensourcephysics_display_DrawingPanel$I$S.apply(this, [panel, 2, this.trStr]);
if (l != null ) {
d=l.getPreferredSize$();
l.setBounds$I$I$I$I(port.x + port.width - d.width, port.y, d.width, d.height);
l.setVisible$Z(true);
}l=p$1.getLabel$org_opensourcephysics_display_DrawingPanel$I$S.apply(this, [panel, 0, this.blStr]);
if (l != null ) {
d=l.getPreferredSize$();
l.setBounds$I$I$I$I(port.x, port.y + port.height - d.height, d.width, d.height);
l.setVisible$Z(true);
if ($I$(5).isJS) l.setEnabled$Z(false);
}l=p$1.getLabel$org_opensourcephysics_display_DrawingPanel$I$S.apply(this, [panel, 1, this.brStr]);
if (l != null ) {
d=l.getPreferredSize$();
l.setBounds$I$I$I$I(port.x + port.width - d.width, port.y + port.height - d.height, d.width, d.height);
l.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'getLabel$org_opensourcephysics_display_DrawingPanel$I$S',  function (panel, location, msg) {
var l=this.labels[location];
if (l == null  && msg != null  ) {
l=this.labels[location]=Clazz.new_($I$(1,1).c$$S,[msg]);
panel.add$java_awt_Component(l);
l.setOpaque$Z(true);
l.setBackground$java_awt_Color($I$(6).yellow);
l.setBorder$javax_swing_border_Border(Clazz.new_($I$(7,1).c$$I$I$I$I,[0, 2, 0, 2]));
$I$(3).setFont$java_awt_Component(l);
}if (msg != null ) {
if (l != null ) {
l.setText$S(msg);
}return l;
}if (l != null ) {
l.setVisible$Z(false);
}return null;
}, p$1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.ignoreRepaint) return;
var port=panel.findViewRect$();
g=g.create$();
var oldFont=g.getFont$();
g.setFont$java_awt_Font(this.font);
var fm=g.getFontMetrics$();
var vertOffset=fm.getDescent$();
var height=fm.getAscent$() + 1 + vertOffset ;
var width=0;
g.setClip$I$I$I$I(0, 0, panel.getWidth$(), panel.getHeight$());
if (this.tlStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.tlStr) + 6;
var x=port.x;
var y=port.y;
g.fillRect$I$I$I$I(x, y, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x, y, width, height);
g.drawString$S$I$I(this.tlStr, x + 4, y + height - vertOffset);
}if (this.trStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.trStr) + 8;
var x=port.x + port.width - width;
var y=port.y;
g.fillRect$I$I$I$I(x - 1, y, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x - 1, y, width, height);
g.drawString$S$I$I(this.trStr, x + 4, y + height - vertOffset);
}if (this.blStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.blStr) + 14;
var x=port.x;
var y=port.y + port.height - height;
g.fillRect$I$I$I$I(x, y - 1, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x, y - 1, width, height);
g.drawString$S$I$I(this.blStr, x + 4, y + height - vertOffset - 1);
}if (this.brStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.brStr) + 8;
var x=port.x + port.width - width;
var y=port.y + port.height - height;
g.fillRect$I$I$I$I(x - 1, y - 1, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x - 1, y - 1, width, height);
g.drawString$S$I$I(this.brStr, x + 4, y + height - vertOffset - 1);
}g.setFont$java_awt_Font(oldFont);
g.dispose$();
});

Clazz.newMeth(C$, 'drawOn3D$java_awt_Component$java_awt_Graphics',  function (panel, g) {
if (this.ignoreRepaint) return;
var port=null;
if (Clazz.instanceOf(panel.getParent$(), "javax.swing.JViewport")) {
port=(panel.getParent$()).getViewRect$();
}g=g.create$();
var oldFont=g.getFont$();
g.setFont$java_awt_Font(this.font);
var fm=g.getFontMetrics$();
var vertOffset=fm.getDescent$();
var height=fm.getAscent$() + 1 + vertOffset ;
var width=0;
g.setClip$I$I$I$I(0, 0, panel.getWidth$(), panel.getHeight$());
if (this.tlStr != null  && !this.tlStr.equals$O("") ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.tlStr) + 6;
var x=port == null  ? 0 : port.x;
var y=port == null  ? 0 : port.y;
g.fillRect$I$I$I$I(x, y, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x, y, width, height);
g.drawString$S$I$I(this.tlStr, x + 4, y + height - vertOffset);
}if (this.trStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.trStr) + 8;
var x=port == null  ? panel.getWidth$() - width : port.x + port.width - width;
var y=port == null  ? 0 : port.y;
g.fillRect$I$I$I$I(x - 1, y, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x - 1, y, width, height);
g.drawString$S$I$I(this.trStr, x + 4, y + height - vertOffset);
}if (this.blStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.blStr) + 6;
var x=port == null  ? 0 : port.x;
var y=port == null  ? panel.getHeight$() - height : port.y + port.height - height;
g.fillRect$I$I$I$I(x, y - 1, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x, y - 1, width, height);
g.drawString$S$I$I(this.blStr, x + 4, y + height - vertOffset - 1);
}if (this.brStr != null ) {
g.setColor$java_awt_Color($I$(6).YELLOW);
width=fm.stringWidth$S(this.brStr) + 8;
var x=port == null  ? panel.getWidth$() - width : port.x + port.width - width;
var y=port == null  ? panel.getHeight$() - height : port.y + port.height - height;
g.fillRect$I$I$I$I(x - 1, y - 1, width, height);
g.setColor$java_awt_Color($I$(6).BLACK);
g.drawRect$I$I$I$I(x - 1, y - 1, width, height);
g.drawString$S$I$I(this.brStr, x + 4, y + height - vertOffset - 1);
}g.setFont$java_awt_Font(oldFont);
g.dispose$();
});

Clazz.newMeth(C$, 'dispose$org_opensourcephysics_display_DrawingPanel',  function (panel) {
if (panel != null ) {
panel.removeComponentListener$java_awt_event_ComponentListener(this.listener);
}this.listener=null;
this.labels=null;
this.font=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(8).finalized$O(this);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
