(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.media.core.TPoint',['org.opensourcephysics.cabrillo.tracker.PerspectiveStep','.Corner'],'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PerspectiveStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Corner',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PerspectiveTrack$I$D$D',  function (track, n, x, y) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.points=Clazz.array($I$(1), -1, [Clazz.new_($I$(2,1),[this, null]), Clazz.new_($I$(2,1),[this, null]), Clazz.new_($I$(2,1),[this, null]), Clazz.new_($I$(2,1),[this, null])]);
this.screenPoints=Clazz.array($I$(3), [$I$(4).getLength$()]);
}, 1);

Clazz.newMeth(C$, 'getPointIndex$org_opensourcephysics_media_core_TPoint',  function (p) {
if (Clazz.instanceOf(p, "org.opensourcephysics.media.core.PerspectiveFilter.Corner")) {
var corner=p;
var ptrack=this.getTrack$();
var i=ptrack.filter.getCornerIndex$org_opensourcephysics_media_core_PerspectiveFilter_Corner(corner);
if (i < 4) return i;
}for (var i=0; i < this.points.length; i++) {
if (p === this.points[i] ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'getDefaultPoint$',  function () {
var ptrack=this.getTrack$();
var index=ptrack.getTargetIndex$();
return ptrack.filter.getCorner$I(index);
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
if (mark == null ) {
mark=this.footprint.getMark$java_awt_PointA(this.screenPoints);
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
}return mark;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
step.points=Clazz.array($I$(1), -1, [Clazz.new_($I$(2,1),[this, null]), Clazz.new_($I$(2,1),[this, null]), Clazz.new_($I$(2,1),[this, null]), Clazz.new_($I$(2,1),[this, null])]);
return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "PerspectiveStep";
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerspectiveStep, "Corner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
C$.superclazz.prototype.setLocation$D$D.apply(this, [x, y]);
var ptrack=this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
if (ptrack.tp != null ) {
var n=ptrack.tp.getFrameNumber$();
ptrack.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(n));
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
