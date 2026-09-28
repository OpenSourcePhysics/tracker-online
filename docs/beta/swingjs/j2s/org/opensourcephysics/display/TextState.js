(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.util.Vector','java.awt.geom.AffineTransform','org.opensourcephysics.display.TeXParser',['java.awt.geom.Rectangle2D','.Float'],'org.opensourcephysics.display.TextState','java.util.Stack','java.awt.image.BufferedImage','java.awt.Color','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','java.awt.Font','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextState");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.f=null;
this.s=null;
this.x=0;
this.y=0;
},1);

C$.$fields$=[['I',['x','y'],'O',['f','java.awt.Font','s','StringBuffer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.s=Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'copyAll$',  function () {
var tmp=this.copyState$();
if (this.s.length$() == 0) {
return tmp;
}for (var i=0; i < this.s.length$(); i++) {
tmp.s.append$C(this.s.charAt$I(i));
}
return tmp;
});

Clazz.newMeth(C$, 'copyState$',  function () {
var tmp=Clazz.new_(C$);
tmp.f=this.f;
tmp.x=this.x;
tmp.y=this.y;
return tmp;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.s.toString();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.s.length$() == 0);
});

Clazz.newMeth(C$, 'getWidth$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) || (this.s.length$() == 0)  ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).stringWidth$S(this.s.toString());
});

Clazz.newMeth(C$, 'getHeight$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).getHeight$();
});

Clazz.newMeth(C$, 'getAscent$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).getAscent$();
});

Clazz.newMeth(C$, 'getDescent$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).getDescent$();
});

Clazz.newMeth(C$, 'getMaxAscent$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).getMaxAscent$();
});

Clazz.newMeth(C$, 'getMaxDescent$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).getMaxDescent$();
});

Clazz.newMeth(C$, 'getLeading$java_awt_Graphics',  function (g) {
if ((g == null ) || (this.f == null ) ) {
return 0;
}return g.getFontMetrics$java_awt_Font(this.f).getLeading$();
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
