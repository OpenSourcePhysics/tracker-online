(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.geom.GeneralPath',['java.awt.geom.Line2D','.Double'],'java.awt.geom.AffineTransform',['org.opensourcephysics.media.core.TVector','.LineEnd'],'java.awt.Rectangle','java.awt.BasicStroke','org.opensourcephysics.media.core.TShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TVector", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.TShape');
C$.$classes$=[['LineEnd',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.path=Clazz.new_($I$(1,1));
this.line=Clazz.new_($I$(2,1));
this.length=16;
this.width=4;
this.rotation=Clazz.new_($I$(3,1));
this.tail=Clazz.new_($I$(4,1),[this, null]);
this.tip=Clazz.new_($I$(4,1),[this, null]);
this.tipRect=Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 0, 8, 8]);
this.tipEnabled=true;
},1);

C$.$fields$=[['Z',['tipEnabled'],'I',['length','width'],'O',['path','java.awt.geom.GeneralPath','line','java.awt.geom.Line2D','head','java.awt.Shape','+shaft','rotation','java.awt.geom.AffineTransform','tail','org.opensourcephysics.media.core.TPoint','+tip','tipRect','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(6,1).c$$F,[1]));
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (xt, yt, xc, yc) {
Clazz.super_(C$, this);
this.tail.setXY$D$D(xt, yt);
this.tip.setXY$D$D(xt + xc, yt + yc);
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(6,1).c$$F,[1]));
}, 1);

Clazz.newMeth(C$, 'getTip$',  function () {
return this.tip;
});

Clazz.newMeth(C$, 'getTail$',  function () {
return this.tail;
});

Clazz.newMeth(C$, 'setXComponent$D',  function (x) {
this.tip.setX$D(this.tail.getX$() + x);
});

Clazz.newMeth(C$, 'setYComponent$D',  function (y) {
this.tip.setY$D(this.tail.getY$() + y);
});

Clazz.newMeth(C$, 'setXYComponents$D$D',  function (x, y) {
this.tip.setXY$D$D(this.tail.getX$() + x, this.tail.getY$() + y);
});

Clazz.newMeth(C$, 'getXComponent$',  function () {
return this.tip.getX$() - this.tail.getX$();
});

Clazz.newMeth(C$, 'getYComponent$',  function () {
return this.tip.getY$() - this.tail.getY$();
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var dx=x - this.getX$();
var dy=y - this.getY$();
this.tip.translate$D$D(dx, dy);
this.tail.translate$D$D(dx, dy);
});

Clazz.newMeth(C$, 'setTipEnabled$Z',  function (enabled) {
this.tipEnabled=enabled;
});

Clazz.newMeth(C$, 'isTipEnabled$',  function () {
return this.tipEnabled;
});

Clazz.newMeth(C$, 'setTipLength$I',  function (tipLength) {
tipLength=Math.max(8, tipLength);
this.width=(tipLength/4|0);
this.length=4 * this.width;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke == null ) {
return;
}this.stroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, stroke.getDashArray$(), stroke.getDashPhase$()],$I$(6,1).c$$F$I$I$F$FA$F);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return null;
}if (!this.isEnabled$() || !this.isVisible$() ) {
return null;
}this.setHitRectCenter$I$I(xpix, ypix);
if ((this.shaft != null ) && this.shaft.intersects$java_awt_geom_Rectangle2D($I$(7).hitRect) ) {
return this;
}if (this.tipEnabled && (this.head != null ) && this.head.intersects$java_awt_geom_Rectangle2D($I$(7).hitRect)  ) {
return this.tip;
}return null;
});

Clazz.newMeth(C$, 'getShape$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
this.center$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(this.tip, this.tail);
var p1=this.tail.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var p2=this.tip.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var theta=Math.atan2(p2.y - p1.y, p2.x - p1.x);
this.rotation.setToRotation$D$D$D(theta, p1.x, p1.y);
this.rotation.translate$D$D(p1.x, p1.y);
var d=p1.distance$java_awt_geom_Point2D(p2);
this.path.reset$();
this.path.moveTo$F$F(d - 4, 0);
this.path.lineTo$F$F(d - 6, -2);
this.path.lineTo$F$F(d, 0);
this.path.lineTo$F$F(d - 6, 2);
this.path.closePath$();
this.head=this.rotation.createTransformedShape$java_awt_Shape(this.path);
var w=this.stroke.getLineWidth$();
d=d - 1.58 * w;
this.line.setLine$D$D$D$D(0, 0, d - this.length, 0);
this.shaft=this.rotation.createTransformedShape$java_awt_Shape(this.line);
this.path.reset$();
this.path.moveTo$F$F(0, 0);
this.path.lineTo$F$F(d - this.length + this.width, 0);
this.path.lineTo$F$F(d - this.length, -this.width);
this.path.lineTo$F$F(d, 0);
this.path.lineTo$F$F(d - this.length, this.width);
this.path.lineTo$F$F(d - this.length + this.width, 0);
var vector=this.rotation.createTransformedShape$java_awt_Shape(this.path);
return this.stroke.createStrokedShape$java_awt_Shape(vector);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TVector, "LineEnd", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getBounds$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.media.core.TVector'].getBounds$org_opensourcephysics_media_core_VideoPanel.apply(this.b$['org.opensourcephysics.media.core.TVector'], [vidPanel]);
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.media.core.TVector'].getFrameNumber$org_opensourcephysics_media_core_VideoPanel.apply(this.b$['org.opensourcephysics.media.core.TVector'], [vidPanel]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
