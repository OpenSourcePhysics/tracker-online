(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorIcon", null, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineWidth=1;
},1);

C$.$fields$=[['I',['w','h','lineWidth'],'O',['color','java.awt.Color','+outline']]]

Clazz.newMeth(C$, 'c$$java_awt_Color$I$I',  function (color, width, height) {
;C$.$init$.apply(this);
this.w=width;
this.h=height;
this.setColor$java_awt_Color(color);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$I$I',  function (fillColor, outlineColor, width, height) {
;C$.$init$.apply(this);
this.w=width;
this.h=height;
this.outline=outlineColor;
this.setColor$java_awt_Color(fillColor);
}, 1);

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.color=color;
});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.w;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.h;
});

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, _g, x, y) {
var g=_g;
var rect=Clazz.new_($I$(1,1).c$$I$I$I$I,[x, y, this.w, this.h]);
var gPaint=g.getPaint$();
if (this.outline != null ) {
g.setPaint$java_awt_Paint(this.outline);
g.fill$java_awt_Shape(rect);
rect.setFrame$D$D$D$D(x + this.lineWidth, y + this.lineWidth, this.w - 2 * this.lineWidth, this.h - 2 * this.lineWidth);
}g.setPaint$java_awt_Paint(this.color);
g.fill$java_awt_Shape(rect);
g.setPaint$java_awt_Paint(gPaint);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
