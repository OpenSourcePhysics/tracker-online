(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,['java.awt.geom.Line2D','.Double'],['org.opensourcephysics.media.core.TLine','.LineEnd'],'java.awt.Rectangle','org.opensourcephysics.media.core.TShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TLine", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.TShape');
C$.$classes$=[['LineEnd',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.line=Clazz.new_($I$(1,1));
this.end1=Clazz.new_($I$(2,1),[this, null]);
this.end2=Clazz.new_($I$(2,1),[this, null]);
this.end1Rect=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 8, 8]);
this.end2Rect=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 8, 8]);
},1);

C$.$fields$=[['O',['line','java.awt.geom.Line2D','end1','org.opensourcephysics.media.core.TPoint','+end2','end1Rect','java.awt.Rectangle','+end2Rect']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (x1, y1, x2, y2) {
Clazz.super_(C$, this);
this.end1.setXY$D$D(x1, y1);
this.end2.setXY$D$D(x2, y2);
}, 1);

Clazz.newMeth(C$, 'getEnd1$',  function () {
return this.end1;
});

Clazz.newMeth(C$, 'getEnd2$',  function () {
return this.end2;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke != null ) {
this.stroke=stroke;
}});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var dx=x - this.getX$();
var dy=y - this.getY$();
this.end1.translate$D$D(dx, dy);
this.end2.translate$D$D(dx, dy);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.end1Rect.contains$I$I(xpix, ypix)) {
return this.end1;
}if (this.end2Rect.contains$I$I(xpix, ypix)) {
return this.end2;
}this.setHitRectCenter$I$I(xpix, ypix);
if (this.line.intersects$java_awt_geom_Rectangle2D($I$(4).hitRect)) {
return this;
}return null;
});

Clazz.newMeth(C$, 'getShape$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
this.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.end1, this.end2);
var p1=this.end1.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var p2=this.end2.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1, p2);
this.end1Rect.setLocation$I$I(p1.x - 4, p1.y - 4);
this.end2Rect.setLocation$I$I(p2.x - 4, p2.y - 4);
return this.stroke.createStrokedShape$java_awt_Shape(this.line);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLine, "LineEnd", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getBounds$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.media.core.TLine'].getBounds$org_opensourcephysics_media_core_VideoPanel.apply(this.b$['org.opensourcephysics.media.core.TLine'], [vidPanel]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
