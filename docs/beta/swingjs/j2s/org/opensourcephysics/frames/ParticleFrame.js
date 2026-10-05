(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display.InteractiveCircle','java.util.ArrayList','org.opensourcephysics.display.PlottingPanel',['org.opensourcephysics.frames.ParticleFrame','.Particles'],'org.opensourcephysics.display.DisplayColors']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParticleFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.DrawingFrame');
C$.$classes$=[['Particles',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.partlist=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['partlist','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(3,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'checkIndex$I',  function (index) {
while (index >= this.partlist.size$()){
var p=Clazz.new_($I$(4,1),[this, null]);
this.partlist.add$O(p);
(p.shape).color=$I$(5,"getLineColor$I",[this.partlist.indexOf$O(p)]);
this.addDrawable$org_opensourcephysics_display_Drawable(p);
}
return this.partlist.get$I(index);
});

Clazz.newMeth(C$, 'addParticle$I$java_awt_geom_Point2D',  function (i, point) {
this.checkIndex$I(i).addParticle$java_awt_geom_Point2D(point);
});

Clazz.newMeth(C$, 'addParicle$I$java_awt_geom_Point2DA',  function (i, points) {
this.checkIndex$I(i).addParticles$java_awt_geom_Point2DA(points);
});

Clazz.newMeth(C$, 'setDrawingShape$I$org_opensourcephysics_display_Interactive',  function (i, shape) {
this.checkIndex$I(i).shape=shape;
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.clearData$();
this.drawingPanel.clear$();
});

Clazz.newMeth(C$, 'clearData$',  function () {
var it=this.partlist.iterator$();
while (it.hasNext$()){
var p=it.next$();
(p).clear$();
this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(p);
}
this.partlist.clear$();
this.drawingPanel.invalidateImage$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParticleFrame, "Particles", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.display.Measurable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.shape=Clazz.new_($I$(1,1));
this.pointList=Clazz.new_($I$(2,1));
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
},1);

C$.$fields$=[['D',['xmin','xmax','ymin','ymax'],'O',['shape','org.opensourcephysics.display.Interactive','pointList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.shape.setEnabled$Z(false);
}, 1);

Clazz.newMeth(C$, 'addParticle$java_awt_geom_Point2D',  function (point) {
{
this.xmax=Math.max(this.xmax, point.getX$());
this.xmin=Math.min(this.xmin, point.getX$());
this.ymax=Math.max(this.ymax, point.getY$());
this.ymin=Math.min(this.ymin, point.getY$());
this.pointList.add$O(point);
}});

Clazz.newMeth(C$, 'addParticles$java_awt_geom_Point2DA',  function (points) {
if (points == null ) {
return;
}for (var i=0, n=points.length; i < n; i++) {
this.xmax=Math.max(this.xmax, points[i].getX$());
this.xmin=Math.min(this.xmin, points[i].getX$());
this.ymax=Math.max(this.ymax, points[i].getY$());
this.ymin=Math.min(this.ymin, points[i].getY$());
}
{
for (var i=0, n=points.length; i < n; i++) {
this.pointList.add$O(points[i]);
}
}});

Clazz.newMeth(C$, 'clear$',  function () {
{
this.pointList.clear$();
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
{
var it=this.pointList.iterator$();
while (it.hasNext$()){
var point=(it.next$());
this.shape.setXY$D$D(point.getX$(), point.getY$());
this.shape.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}
}});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
{
return (this.pointList.size$() > 0) ? true : false;
}});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
