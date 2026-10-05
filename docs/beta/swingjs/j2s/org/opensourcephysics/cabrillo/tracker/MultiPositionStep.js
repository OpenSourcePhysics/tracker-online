(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Point','org.opensourcephysics.cabrillo.tracker.Step',['org.opensourcephysics.cabrillo.tracker.MultiPositionStep','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiPositionStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.PositionStep');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataTrack','org.opensourcephysics.cabrillo.tracker.ParticleDataTrack']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack$I$D$D',  function (track, n, x, y) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D.apply(this,[track, n, x, y]);C$.$init$.apply(this);
this.dataTrack=track;
}, 1);

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
if (mark == null ) {
var aMark=null;
if (this.dataTrack.modelFootprintVisible) {
var tracks=this.dataTrack.morePoints;
var n=tracks.size$() + 1;
var screenPoints=Clazz.array($I$(1), [n]);
var fn=this.getFrameNumber$();
screenPoints[0]=C$.getScreenPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack(trackerPanel, fn, this.dataTrack);
for (var i=1; i < n; i++) {
screenPoints[i]=C$.getScreenPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack(trackerPanel, fn, tracks.get$I(i - 1));
}
aMark=this.dataTrack.getModelFootprint$().getMark$java_awt_PointA(screenPoints);
}var modelMark=aMark;
var positionMark=C$.superclazz.prototype.getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
mark=((P$.MultiPositionStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MultiPositionStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.MultiPositionStep'].valid) {
return;
}if (this.$finals$.modelMark != null ) this.$finals$.modelMark.draw$java_awt_Graphics2D$Z(g, highlighted);
this.$finals$.positionMark.draw$java_awt_Graphics2D$Z(g, highlighted);
});
})()
), Clazz.new_(P$.MultiPositionStep$1.$init$,[this, {modelMark:modelMark,positionMark:positionMark}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
}return mark;
});

Clazz.newMeth(C$, 'getScreenPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack',  function (panel, n, next) {
var step=next.getStep$I(n);
var p=(step == null  ? null : step.getPoints$()[0]);
return (p == null  || Double.isNaN$D(p.x)  || Double.isNaN$D(p.y)  ? null : p.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(panel));
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
return step;
});

Clazz.newMeth(C$, 'toString',  function () {
return "MultiPositionStep " + this.n + " [" + $I$(2).format.format$D(this.p.x) + ", " + $I$(2).format.format$D(this.p.y) + "]" ;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MultiPositionStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
control.setValue$S$D("x", step.p.x);
control.setValue$S$D("y", step.p.y);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
step.p.setXY$D$D(x, y);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
