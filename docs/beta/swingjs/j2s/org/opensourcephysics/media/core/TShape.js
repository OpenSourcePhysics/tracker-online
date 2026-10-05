(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.Rectangle','java.awt.Color','java.awt.BasicStroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TShape", null, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(2).black;
this.visible=true;
this.fillShape=C$.hitRect;
this.stroke=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['visible'],'O',['color','java.awt.Color','fillShape','java.awt.Shape','stroke','java.awt.BasicStroke']]
,['O',['hitRect','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double',  function (point) {
;C$.superclazz.c$$java_awt_geom_Point2D_Double.apply(this,[point]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.color=color;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
this.stroke=stroke;
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.stroke;
});

Clazz.newMeth(C$, 'getBounds$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.getShape$org_opensourcephysics_media_core_VideoPanel(vidPanel).getBounds$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.visible=visible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel")) || !this.isVisible$() ) {
return;
}var vidPanel=panel;
this.fillShape=this.getShape$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var g=_g;
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.color);
g.fill$java_awt_Shape(this.fillShape);
g.setPaint$java_awt_Paint(gpaint);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return null;
}var vidPanel=panel;
if (!this.isEnabled$() || !this.isVisible$() ) {
return null;
}this.setHitRectCenter$I$I(xpix, ypix);
if (C$.hitRect.contains$java_awt_Point(this.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel))) {
return this;
}return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return "TShape [" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + "]" ;
});

Clazz.newMeth(C$, 'getShape$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
var p=this.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.setHitRectCenter$I$I(p.x, p.y);
if (this.stroke == null ) {
return C$.hitRect.clone$();
}return this.stroke.createStrokedShape$java_awt_Shape(C$.hitRect);
});

Clazz.newMeth(C$, 'setHitRectCenter$I$I',  function (xpix, ypix) {
C$.hitRect.setLocation$I$I(xpix - (C$.hitRect.width/2|0), ypix - (C$.hitRect.height/2|0));
});

C$.$static$=function(){C$.$static$=0;
C$.hitRect=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 8, 8]);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
