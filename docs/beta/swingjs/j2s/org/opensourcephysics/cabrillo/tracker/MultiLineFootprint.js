(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.HashSet','java.awt.BasicStroke','java.awt.Shape','org.opensourcephysics.cabrillo.tracker.LineFootprint','org.opensourcephysics.cabrillo.tracker.MultiShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiLineFootprint", null, 'org.opensourcephysics.cabrillo.tracker.LineFootprint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['closed']]
,['O',['$footprints','java.util.Collection','MULTILINE','org.opensourcephysics.cabrillo.tracker.MultiLineFootprint','+BOLD_MULTILINE']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.hitShapes=Clazz.array($I$(3), [0]);
}, 1);

Clazz.newMeth(C$, 'getFootprint$S',  function (name) {
return $I$(4).getFootprint$java_util_Collection$S(C$.$footprints, name);
}, 1);

Clazz.newMeth(C$, 'getLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isClosed$',  function () {
return this.closed;
});

Clazz.newMeth(C$, 'setClosed$Z',  function (closed) {
this.closed=closed;
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
if (this.stroke == null  || this.stroke.getLineWidth$() != scale * this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([scale * this.baseStroke.getLineWidth$()],$I$(2,1).c$$F);
}var drawShape=Clazz.new_([Clazz.array($I$(3), -1, [])],$I$(5,1).c$$java_awt_ShapeA);
for (var i=0; i < points.length - 1; i++) {
var p1=points[i];
var p2=points[i + 1];
if (p1 == null  || p2 == null  ) continue;
this.line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1, p2);
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(this.line.clone$(), null);
}
if (this.closed && points.length > 2  && points[0] != null   && points[points.length - 1] != null  ) {
this.line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(points[points.length - 1], points[0]);
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(this.line.clone$(), null);
}return drawShape;
});

C$.$static$=function(){C$.$static$=0;
C$.$footprints=Clazz.new_($I$(1,1));
{
C$.MULTILINE=Clazz.new_(C$.c$$S,["Footprint.MultiLine"]);
C$.$footprints.add$O(C$.MULTILINE);
C$.BOLD_MULTILINE=Clazz.new_(C$.c$$S,["Footprint.BoldMultiLine"]);
C$.BOLD_MULTILINE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(2,1).c$$F,[2]));
C$.$footprints.add$O(C$.BOLD_MULTILINE);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
