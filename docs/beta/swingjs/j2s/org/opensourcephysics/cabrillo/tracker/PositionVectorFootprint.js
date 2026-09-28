(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Point',['java.awt.geom.Ellipse2D','.Double'],'org.opensourcephysics.cabrillo.tracker.LineFootprint']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PositionVectorFootprint", null, 'org.opensourcephysics.cabrillo.tracker.PointShapeFootprint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.onePoint=Clazz.array($I$(1), [1]);
},1);

C$.$fields$=[['O',['arrow','org.opensourcephysics.cabrillo.tracker.LineFootprint','onePoint','java.awt.Point[]']]]

Clazz.newMeth(C$, 'c$$S$I',  function (name, w) {
;C$.superclazz.c$$S$java_awt_Shape.apply(this,[name, Clazz.new_($I$(2,1).c$$D$D$D$D,[-2, -2, 4, 4])]);C$.$init$.apply(this);
this.arrow=$I$(3).getFootprint$S("Footprint.Arrow");
this.arrow.setLineWidth$D(w);
this.baseStroke=null;
}, 1);

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
C$.superclazz.prototype.getShape$java_awt_PointA$I.apply(this, [points, scale]);
return this.arrow.getShape$java_awt_PointA$I(points, scale);
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
this.arrow.setColor$java_awt_Color(this.color);
return this.arrow.getIcon$I$I(w, h);
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
this.arrow.setStroke$java_awt_BasicStroke(stroke);
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.arrow.getStroke$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
