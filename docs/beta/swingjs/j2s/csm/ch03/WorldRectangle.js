(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WorldRectangle", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['left','top','width','height']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (left, top, width, height) {
;C$.$init$.apply(this);
this.left=left;
this.top=top;
this.width=width;
this.height=height;
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
g.setColor$java_awt_Color($I$(1).RED);
var leftPixels=panel.xToPix$D(this.left);
var topPixels=panel.yToPix$D(this.top);
var widthPixels=((panel.getXPixPerUnit$() * this.width)|0);
var heightPixels=((panel.getYPixPerUnit$() * this.height)|0);
g.fillRect$I$I$I$I(leftPixels, topPixels, widthPixels, heightPixels);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
