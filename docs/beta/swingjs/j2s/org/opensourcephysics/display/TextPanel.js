(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Dimension','java.awt.Color','java.awt.Font','org.opensourcephysics.display.TeXParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.text="";
this.fontname="TimesRoman";
this.fontsize=14;
this.fontstyle=0;
this.textColor=$I$(2).black;
this.backgroundColor=$I$(2).yellow;
this.dim=C$.ZEROSIZE;
},1);

C$.$fields$=[['I',['fontsize','fontstyle'],'S',['text','fontname'],'O',['$font','java.awt.Font','textColor','java.awt.Color','+backgroundColor','dim','java.awt.Dimension']]
,['O',['ZEROSIZE','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setBackground$java_awt_Color(this.backgroundColor);
this.$font=Clazz.new_($I$(3,1).c$$S$I$I,[this.fontname, this.fontstyle, this.fontsize]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$.apply(this, []);
text=C$.fixText$S(text);
}, 1);

Clazz.newMeth(C$, 'fixText$S',  function (_text) {
return (_text == null  ? "" : $I$(4).parseTeX$S(_text));
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (_text) {
this.text=C$.fixText$S(_text);
var c=this.getParent$();
if (c == null ) {
return;
}c.validate$();
});

Clazz.newMeth(C$, 'setMessageFont$java_awt_Font',  function (font) {
this.$font=font;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var c=this.getParent$();
var text=this.text;
if ((c == null ) || text.equals$O("") ) {
return C$.ZEROSIZE;
}var g2=c.getGraphics$();
if (g2 == null ) {
return C$.ZEROSIZE;
}var oldFont=g2.getFont$();
g2.setFont$java_awt_Font(this.$font);
var fm=g2.getFontMetrics$();
var boxHeight=fm.getAscent$() + 4;
var boxWidth=fm.stringWidth$S(text) + 6;
g2.setFont$java_awt_Font(oldFont);
g2.dispose$();
return Clazz.new_($I$(1,1).c$$I$I,[boxWidth, boxHeight]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
var text=this.text;
if (!this.dim.equals$O(this.getPreferredSize$())) {
this.dim=this.getPreferredSize$();
this.setSize$java_awt_Dimension(this.dim);
}if (text.equals$O("") || !this.isVisible$() ) {
return;
}var g2=g;
var w=this.getWidth$();
var h=this.getHeight$();
var oldColor=g2.getColor$();
var oldFont=g2.getFont$();
g2.setColor$java_awt_Color(this.backgroundColor);
g2.fillRect$I$I$I$I(0, 0, w, h);
g2.setColor$java_awt_Color(this.textColor);
g2.setFont$java_awt_Font(this.$font);
g2.drawString$S$I$I(text, 3, h - 4);
g2.setColor$java_awt_Color($I$(2).black);
g2.drawRect$I$I$I$I(0, 0, w - 1, h - 1);
g2.setFont$java_awt_Font(oldFont);
g2.setColor$java_awt_Color(oldColor);
});

C$.$static$=function(){C$.$static$=0;
C$.ZEROSIZE=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
