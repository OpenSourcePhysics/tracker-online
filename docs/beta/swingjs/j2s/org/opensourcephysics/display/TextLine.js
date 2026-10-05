(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.util.Vector','java.awt.geom.AffineTransform','org.opensourcephysics.display.TeXParser',['java.awt.geom.Rectangle2D','.Float'],'org.opensourcephysics.display.TextState','java.util.Stack','java.awt.image.BufferedImage','java.awt.Color','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','java.awt.Font','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextLine");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.script_fraction=0.8;
this.sup_offset=0.6;
this.sub_offset=0.7;
this.font=null;
this.color=null;
this.background=null;
this.text=null;
this.fontname="TimesRoman";
this.fontsize=0;
this.fontstyle=0;
this.justification=1;
this.width=0;
this.ascent=0;
this.maxAscent=0;
this.descent=0;
this.maxDescent=0;
this.height=0;
this.leading=0;
this.parse=true;
this.lg=null;
this.list=Clazz.new_($I$(1,1).c$$I$I,[8, 4]);
this.vec=Clazz.new_($I$(1,1));
this.trTL=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['parse'],'D',['script_fraction','sup_offset','sub_offset'],'I',['fontsize','fontstyle','justification','width','ascent','maxAscent','descent','maxDescent','height','leading'],'S',['text','fontname'],'O',['font','java.awt.Font','color','java.awt.Color','+background','lg','java.awt.Graphics','list','java.util.Vector','+vec','trTL','java.awt.geom.AffineTransform','image','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.text=$I$(3).parseTeX$S(s);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_Font',  function (s, f) {
C$.c$$S.apply(this, [s]);
this.font=f;
if (this.font == null ) {
return;
}this.fontname=f.getName$();
this.fontstyle=f.getStyle$();
this.fontsize=f.getSize$();
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_Font$java_awt_Color$I',  function (s, f, c, j) {
C$.c$$S$java_awt_Font.apply(this, [s, f]);
this.color=c;
this.justification=j;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_Color',  function (s, c) {
C$.c$$S.apply(this, [s]);
this.color=c;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$java_awt_Color$I',  function (f, c, j) {
;C$.$init$.apply(this);
this.font=f;
this.color=c;
this.justification=j;
if (this.font == null ) {
return;
}this.fontname=f.getName$();
this.fontstyle=f.getStyle$();
this.fontsize=f.getSize$();
}, 1);

Clazz.newMeth(C$, 'copyState$',  function () {
return Clazz.new_(C$.c$$java_awt_Font$java_awt_Color$I,[this.font, this.color, this.justification]);
});

Clazz.newMeth(C$, 'copyState$org_opensourcephysics_display_TextLine',  function (t) {
if (t == null ) {
return;
}this.font=t.getFont$();
this.color=t.getColor$();
this.justification=t.getJustification$();
if (this.font == null ) {
return;
}this.fontname=this.font.getName$();
this.fontstyle=this.font.getStyle$();
this.fontsize=this.font.getSize$();
this.parse=true;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
if (f == null ) {
return;
}this.font=f;
this.fontname=f.getName$();
this.fontstyle=f.getStyle$();
this.fontsize=f.getSize$();
this.parse=true;
});

Clazz.newMeth(C$, 'setText$S',  function (s) {
this.text=$I$(3).parseTeX$S(s);
this.parse=true;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
this.color=c;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
this.background=c;
});

Clazz.newMeth(C$, 'setJustification$I',  function (i) {
switch (i) {
case 0:
this.justification=0;
break;
case 1:
default:
this.justification=1;
break;
case 2:
this.justification=2;
break;
}
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'getBackground$',  function () {
return this.background;
});

Clazz.newMeth(C$, 'getJustification$',  function () {
return this.justification;
});

Clazz.newMeth(C$, 'getFM$java_awt_Graphics',  function (g) {
if (g == null ) {
return null;
}if (this.font == null ) {
return g.getFontMetrics$();
}return g.getFontMetrics$java_awt_Font(this.font);
});

Clazz.newMeth(C$, 'charWidth$java_awt_Graphics$C',  function (g, ch) {
var fm;
if (g == null ) {
return 0;
}if (this.font == null ) {
fm=g.getFontMetrics$();
} else {
fm=g.getFontMetrics$java_awt_Font(this.font);
}return fm.charWidth$C(ch);
});

Clazz.newMeth(C$, 'getStringBounds$java_awt_Graphics',  function (g) {
this.parseText$java_awt_Graphics(g);
return Clazz.new_($I$(4,1).c$$F$F$F$F,[0, 0, this.width, this.height]);
});

Clazz.newMeth(C$, 'getWidth$java_awt_Graphics',  function (g) {
this.parseText$java_awt_Graphics(g);
return this.width;
});

Clazz.newMeth(C$, 'getHeight$java_awt_Graphics',  function (g) {
this.parseText$java_awt_Graphics(g);
return this.height;
});

Clazz.newMeth(C$, 'getAscent$java_awt_Graphics',  function (g) {
if (g == null ) {
return 0;
}this.parseText$java_awt_Graphics(g);
return this.ascent;
});

Clazz.newMeth(C$, 'getMaxAscent$java_awt_Graphics',  function (g) {
if (g == null ) {
return 0;
}this.parseText$java_awt_Graphics(g);
return this.maxAscent;
});

Clazz.newMeth(C$, 'getDescent$java_awt_Graphics',  function (g) {
if (g == null ) {
return 0;
}this.parseText$java_awt_Graphics(g);
return this.descent;
});

Clazz.newMeth(C$, 'getMaxDescent$java_awt_Graphics',  function (g) {
if (g == null ) {
return 0;
}this.parseText$java_awt_Graphics(g);
return this.maxDescent;
});

Clazz.newMeth(C$, 'getLeading$java_awt_Graphics',  function (g) {
if (g == null ) {
return 0;
}this.parseText$java_awt_Graphics(g);
return this.leading;
});

Clazz.newMeth(C$, 'parseText$java_awt_Graphics',  function (g) {
var w=0;
if (this.lg !== g ) {
this.parse=true;
}this.lg=g;
if (!this.parse) {
return;
}this.parse=false;
this.width=0;
this.leading=0;
this.ascent=0;
this.descent=0;
this.height=0;
this.maxAscent=0;
this.maxDescent=0;
if (this.text == null  || g == null   || this.text.length$() == 0 ) {
return;
}if (p$1.keepItSimple$S.apply(this, [this.text])) {
var prevFont=g.getFont$();
g.setFont$java_awt_Font(this.font);
var fm=g.getFontMetrics$();
this.width=fm.stringWidth$S(this.text);
this.ascent=fm.getAscent$();
this.descent=fm.getDescent$();
this.leading=fm.getLeading$();
this.maxDescent=fm.getMaxDescent$();
this.maxAscent=fm.getMaxAscent$();
g.setFont$java_awt_Font(prevFont);
} else {
var current=Clazz.new_($I$(5,1));
var ch;
var state=Clazz.new_($I$(6,1));
this.list.removeAllElements$();
if (this.font == null ) {
current.f=g.getFont$();
} else {
current.f=this.font;
}state.push$O(current);
this.list.addElement$O(current);
for (var i=0, n=this.text.length$(); i < n; i++) {
ch=this.text.charAt$I(i);
switch (ch.$c()) {
case 36:
++i;
if (i < this.text.length$()) {
current.s.append$C(this.text.charAt$I(i));
}break;
case 123:
w=current.getWidth$java_awt_Graphics(g);
if (!current.isEmpty$()) {
current=current.copyState$();
this.list.addElement$O(current);
}state.push$O(current);
current.x+=w;
break;
case 125:
w=current.x + current.getWidth$java_awt_Graphics(g);
state.pop$();
current=state.peek$().copyState$();
this.list.addElement$O(current);
current.x=w;
break;
case 94:
w=current.getWidth$java_awt_Graphics(g);
if (!current.isEmpty$()) {
current=current.copyState$();
this.list.addElement$O(current);
}current.f=this.getScriptFont$java_awt_Font(current.f);
current.x+=w;
current.y-=(((current.getAscent$java_awt_Graphics(g)) * this.sup_offset + 0.5)|0);
break;
case 95:
w=current.getWidth$java_awt_Graphics(g);
if (!current.isEmpty$()) {
current=current.copyState$();
this.list.addElement$O(current);
}current.f=this.getScriptFont$java_awt_Font(current.f);
current.x+=w;
current.y+=(((current.getDescent$java_awt_Graphics(g)) * this.sub_offset + 0.5)|0);
break;
default:
current.s.append$C(ch);
break;
}
}
{
this.vec=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.list]);
}for (var i=0; i < this.vec.size$(); i++) {
current=(this.vec.elementAt$I(i));
if (!current.isEmpty$()) {
this.width+=current.getWidth$java_awt_Graphics(g);
this.ascent=Math.max(this.ascent, Math.abs(current.y) + current.getAscent$java_awt_Graphics(g));
this.descent=Math.max(this.descent, Math.abs(current.y) + current.getDescent$java_awt_Graphics(g));
this.leading=Math.max(this.leading, current.getLeading$java_awt_Graphics(g));
this.maxDescent=Math.max(this.maxDescent, Math.abs(current.y) + current.getMaxDescent$java_awt_Graphics(g));
this.maxAscent=Math.max(this.maxAscent, Math.abs(current.y) + current.getMaxAscent$java_awt_Graphics(g));
}}
}this.height=this.ascent + this.descent + this.leading ;
return;
});

Clazz.newMeth(C$, 'keepItSimple$S',  function (text) {
for (var i=text.length$(); --i >= 0; ) {
switch ((text.charCodeAt$I(i))) {
case 36:
case 123:
case 125:
case 94:
case 95:
return false;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'isNull$',  function () {
return (this.text == null );
});

Clazz.newMeth(C$, 'drawText$java_awt_Graphics$I$I$I',  function (g, x, y, j) {
this.justification=j;
if (g == null ) {
return;
}this.drawText$java_awt_Graphics$I$I(g, x, y);
});

Clazz.newMeth(C$, 'drawText$java_awt_Graphics$I$I',  function (g, x, y) {
var ts;
var xoffset=x;
var yoffset=y;
if ((g == null ) || (this.text == null ) ) {
return;
}var lg=g.create$();
if (lg == null ) {
return;
}this.parseText$java_awt_Graphics(g);
if (this.justification == 0) {
xoffset=x - (this.width/2|0);
} else if (this.justification == 2) {
xoffset=x - this.width;
}if (this.background != null ) {
lg.setColor$java_awt_Color(this.background);
lg.fillRect$I$I$I$I(xoffset, yoffset - this.ascent, this.width, this.height);
lg.setColor$java_awt_Color(g.getColor$());
}if (this.font != null ) {
lg.setFont$java_awt_Font(this.font);
}if (this.color != null ) {
lg.setColor$java_awt_Color(this.color);
}if (p$1.keepItSimple$S.apply(this, [this.text])) {
lg.drawString$S$I$I(this.text, 0 + xoffset, 0 + yoffset);
} else {
{
this.vec.clear$();
this.vec.addAll$java_util_Collection(this.list);
for (var i=0; i < this.vec.size$(); i++) {
ts=(this.vec.elementAt$I(i));
if (ts.f != null ) {
lg.setFont$java_awt_Font(ts.f);
}if (ts.s != null ) {
lg.drawString$S$I$I(ts.toString(), ts.x + xoffset, ts.y + yoffset);
}}
}}lg.dispose$();
lg=null;
});

Clazz.newMeth(C$, 'drawRotatedText$D$D$D$java_awt_Graphics',  function (theta, x, y, g) {
this.trTL.setToRotation$D$D$D(-theta, x, y);
(g).transform$java_awt_geom_AffineTransform(this.trTL);
this.drawText$java_awt_Graphics$I$I(g, (x|0), (y|0));
this.trTL.setToRotation$D$D$D(theta, x, y);
(g).transform$java_awt_geom_AffineTransform(this.trTL);
});

Clazz.newMeth(C$, 'drawTextImageRotated$java_awt_image_ImageObserver$java_awt_Graphics$D$D$D',  function (panel, g, theta, x, y) {
var w=g.getFontMetrics$().stringWidth$S(this.text) + 7;
var h=g.getFontMetrics$().getHeight$() + 10;
if (this.image == null  || this.image.getWidth$() != w  || this.image.getHeight$() != h ) {
this.image=Clazz.new_($I$(7,1).c$$I$I$I,[w, h, 2]);
}var imageGraphics=this.image.createGraphics$();
imageGraphics.setFont$java_awt_Font(g.getFont$());
imageGraphics.setColor$java_awt_Color($I$(8).BLACK);
this.drawText$java_awt_Graphics$I$I(imageGraphics, (w/2|0) - 2, h - 5);
imageGraphics.dispose$();
var g2d=g;
g2d.translate$D$D(x - h - 2 , y + (w/2|0));
this.trTL.setToRotation$D$D$D(-theta, 0, 0);
if ($I$(9).setRenderingHints) g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_INTERPOLATION, $I$(10).VALUE_INTERPOLATION_BICUBIC);
g2d.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(this.image, this.trTL, panel);
g2d.translate$D$D(-x + h + 2 , -y - (w/2|0));
});

Clazz.newMeth(C$, 'getFontName$',  function () {
return this.fontname;
});

Clazz.newMeth(C$, 'getFontStyle$',  function () {
return this.fontstyle;
});

Clazz.newMeth(C$, 'getFontSize$',  function () {
return this.fontsize;
});

Clazz.newMeth(C$, 'setFontName$S',  function (s) {
if (s == null ) {
return;
}this.fontname=s;
p$1.rebuildFont.apply(this, []);
});

Clazz.newMeth(C$, 'setFontStyle$I',  function (i) {
this.fontstyle=i;
p$1.rebuildFont.apply(this, []);
});

Clazz.newMeth(C$, 'setFontSize$I',  function (i) {
this.fontsize=i;
p$1.rebuildFont.apply(this, []);
});

Clazz.newMeth(C$, 'rebuildFont',  function () {
this.parse=true;
if ((this.fontsize <= 0) || (this.fontname == null ) ) {
this.font=null;
} else {
this.font=Clazz.new_($I$(11,1).c$$S$I$I,[this.fontname, this.fontstyle, this.fontsize]);
}}, p$1);

Clazz.newMeth(C$, 'getScriptFont$java_awt_Font',  function (f) {
var size;
if (f == null ) {
return f;
}size=f.getSize$();
if (size <= 6) {
return f;
}size=(((f.getSize$()) * this.script_fraction + 0.5)|0);
if (size <= 6) {
return f;
}return Clazz.new_([f.getName$(), f.getStyle$(), size],$I$(11,1).c$$S$I$I);
});

Clazz.newMeth(C$, 'parseDouble$D',  function (d) {
return this.parseDouble$D$I$I$I(d, 7, 6, 2);
});

Clazz.newMeth(C$, 'parseDouble$D$I',  function (d, p) {
return this.parseDouble$D$I$I$I(d, p + 1, p, 2);
});

Clazz.newMeth(C$, 'parseDouble$D$I$I$I',  function (d, n, p, f) {
var x=d;
var left=n - p;
var right=0;
var power;
var exponent;
var i;
var s=Clazz.new_($I$(12,1).c$$I,[n + 4]);
if (left < 0) {
System.out.println$S("TextLine.parseDouble: Precision > significant figures!");
return false;
}if (d < 0.0 ) {
x=-d;
s.append$S("-");
}if (d == 0.0 ) {
exponent=0;
} else {
exponent=((Math.floor(C$.log10$D(x)))|0);
}power=exponent - (left - 1);
if (power < 0) {
for (i=power; i < 0; i++) {
x*=10.0;
}
} else {
for (i=0; i < power; i++) {
x/=10.0;
}
}left=(x|0);
s.append$I(left);
if (p > 0) {
s.append$C(".");
right=x - left;
for (i=0; i < p; i++) {
right*=10;
var digit=Long.$ival(Math.round$D(right));
s.append$I(digit);
right-=digit;
}
}if (power != 0) {
if (f == 1) {
s.append$C("E");
if (power < 0) {
s.append$C("-");
} else {
s.append$C("+");
}power=Math.abs(power);
if (power > 9) {
s.append$I(power);
} else {
s.append$C("0");
s.append$I(power);
}} else {
s.append$S("x10{^");
s.append$I(power);
s.append$S("}");
}}this.setText$S(s.toString());
return true;
});

Clazz.newMeth(C$, 'log10$D',  function (x) {
if (x <= 0.0 ) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["range exception"]);
}return Math.log(x) / 2.302585092994046;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
