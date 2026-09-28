(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.Toolkit','org.opensourcephysics.controls.OSPLog','java.awt.Point','org.opensourcephysics.media.core.TPoint',['org.opensourcephysics.cabrillo.tracker.CalibrationStep','.Position'],'org.opensourcephysics.cabrillo.tracker.MultiShape','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.tools.FontSizer','java.awt.Shape','java.awt.Stroke','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.TrackerRes',['org.opensourcephysics.cabrillo.tracker.CalibrationStep','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalibrationStep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Step');
C$.$classes$=[['Position',1],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.worldX1=1;
},1);

C$.$fields$=[['D',['worldX0','worldY0','worldX1','worldY1'],'O',['cal','org.opensourcephysics.cabrillo.tracker.Calibration']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Calibration$I$D$D',  function (track, n, x, y) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$I.apply(this,[track, n]);C$.$init$.apply(this);
this.cal=track;
this.screenPoints=Clazz.array($I$(3), [C$.getLength$()]);
this.points=Clazz.array($I$(4), [C$.getLength$()]);
var p=Clazz.new_($I$(5,1).c$$D$D,[this, null, x, y]);
this.points[0]=p;
}, 1);

Clazz.newMeth(C$, 'addSecondPoint$D$D',  function (x, y) {
var p=Clazz.new_($I$(5,1).c$$D$D,[this, null, x, y]);
this.points[1]=p;
var track=this.getTrack$();
if (track == null ) return p;
var success=this.setWorldCoordinates$D$D$D$D(this.worldX0, this.worldY0, this.worldX1, this.worldY1);
if (success) return p;
this.points[1]=null;
return null;
});

Clazz.newMeth(C$, 'getPosition$I',  function (n) {
return this.points[n];
});

Clazz.newMeth(C$, 'getDefaultPoint$',  function () {
if (this.points[1] == null ) return this.points[0];
if (this.cal.tp.getSelectedPoint$() === this.points[0] ) return this.points[0];
return this.points[1];
});

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mark=this.panelMarks.get$O(trackerPanel.getID$());
var selection=null;
if (mark == null ) {
var coords=trackerPanel.getCoords$();
var n=trackerPanel.getFrameNumber$();
for (var i=0; i < this.points.length; i++) {
var pt=this.points[i];
if (pt == null ) continue;
var worldX=i == 0 ? this.worldX0 : this.worldX1;
var worldY=i == 0 ? this.worldY0 : this.worldY1;
var x=coords.worldToImageX$I$D$D(n, worldX, worldY);
var y=coords.worldToImageY$I$D$D(n, worldX, worldY);
pt.setLocation$D$D(x, y);
}
selection=trackerPanel.getSelectedPoint$();
var shapes=Clazz.array($I$(6), [this.points.length]);
for (var i=0; i < this.points.length; i++) {
if (this.points[i] == null ) continue;
var p=this.points[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.points[i] ) {
$I$(7).transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(8).getIntegerFactor$();
if (scale > 1) {
$I$(7).transform.scale$D$D(scale, scale);
}shapes[i]=Clazz.new_([Clazz.array($I$(9), -1, [$I$(7).transform.createTransformedShape$java_awt_Shape($I$(7).selectionShape)])],$I$(6,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(10), -1, [$I$(7).selectionStroke]));
} else {
shapes[i]=this.footprint.getShape$java_awt_PointA$I(Clazz.array($I$(3), -1, [p]), $I$(8).getIntegerFactor$());
}}
var color=this.footprint.getColor$();
mark=((P$.CalibrationStep$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CalibrationStep$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
g.setPaint$java_awt_Paint(this.$finals$.color);
if ($I$(11).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(12).KEY_ANTIALIASING, $I$(12).VALUE_ANTIALIAS_ON);
for (var i=0; i < this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points.length; i++) {
if (this.$finals$.shapes[i] != null ) this.$finals$.shapes[i].draw$java_awt_Graphics2D(g);
}
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.CalibrationStep$1.$init$,[this, {shapes:shapes,color:color}]));
this.panelMarks.put$O$O(trackerPanel.getID$(), mark);
}return mark;
});

Clazz.newMeth(C$, 'clone$',  function () {
var step=C$.superclazz.prototype.clone$.apply(this, []);
step.points[0]=Clazz.new_($I$(5,1).c$$D$D,[step, null, this.points[0].x, this.points[0].y]);
if (this.points[1] != null ) {
step.points[1]=Clazz.new_($I$(5,1).c$$D$D,[step, null, this.points[1].x, this.points[1].y]);
}return step;
});

Clazz.newMeth(C$, 'setWorldCoordinates$D$D$D$D',  function (x1, y1, x2, y2) {
var track=this.getTrack$();
if (track == null  || track.isLocked$() ) return false;
var sameX=x2 == x1 ;
var sameY=y2 == y1 ;
if ((sameX && this.cal.axes == 1 ) || (sameY && this.cal.axes == 2 ) || (sameX && sameY && this.cal.axes == 0  )  ) {
$I$(13,"showMessageDialog$java_awt_Component$O$S$I",[track.tp, $I$(14).getString$S("Calibration.Dialog.InvalidCoordinates.Message"), $I$(14).getString$S("Calibration.Dialog.InvalidCoordinates.Title"), 2]);
return false;
}if (this.cal.isFixedCoordinates$()) {
var step=this.cal.steps.getStep$I(0);
step.worldX0=x1;
step.worldY0=y1;
step.worldX1=x2;
step.worldY1=y2;
step.erase$();
this.cal.refreshStep$org_opensourcephysics_cabrillo_tracker_CalibrationStep(this);
} else {
this.worldX0=x1;
this.worldY0=y1;
this.worldX1=x2;
this.worldY1=y2;
this.cal.keyFrames.add$O(Integer.valueOf$I(this.n));
}if (this.points[1] != null ) {
p$1.updateCoords.apply(this, []);
} else if (this.cal.tp != null ) {
var coords=this.cal.tp.getCoords$();
var n=this.cal.tp.getFrameNumber$();
var x0=coords.getOriginX$I(n);
var y0=coords.getOriginY$I(n);
var x=coords.worldToImageX$I$D$D(n, this.worldX0, this.worldY0);
var y=coords.worldToImageY$I$D$D(n, this.worldX0, this.worldY0);
coords.setOriginXY$I$D$D(n, x0 + this.points[0].x - x, y0 + this.points[0].y - y);
}return true;
});

Clazz.newMeth(C$, 'toString',  function () {
var s="Calibration Points Step " + this.n + " [" + $I$(7).format.format$D(this.worldX0) + ", " + $I$(7).format.format$D(this.worldY0) ;
if (this.points[1] != null ) {
s=s + ", " + $I$(7).format.format$D(this.worldX1) + ", " + $I$(7).format.format$D(this.worldY1) + "]" ;
} else {
s=s + "]";
}return s;
});

Clazz.newMeth(C$, 'updateCoords',  function () {
if (this.points[1] == null  || this.cal.tp == null  ) return;
if (this.cal.axes == 1) {
p$1.updateCoordsXOnly.apply(this, []);
return;
} else if (this.cal.axes == 2) {
p$1.updateCoordsYOnly.apply(this, []);
return;
}var coords=this.cal.tp.getCoords$();
var n=this.cal.tp.getFrameNumber$();
var wx0=this.worldX0;
var wy0=this.worldY0;
var wx1=this.worldX1;
var wy1=this.worldY1;
var x0=this.points[0].getX$();
var y0=this.points[0].getY$();
var id=this.points[0].distance$java_awt_geom_Point2D(this.points[1]);
var itheta=this.points[0].angle$java_awt_geom_Point2D_Double(this.points[1]);
var dwx=wx1 - wx0;
var dwy=wy1 - wy0;
var wd=Math.sqrt(dwx * dwx + dwy * dwy);
var wtheta=-Math.atan2(dwy, dwx);
var factor=id / wd;
coords.setScaleXY$I$D$D(n, factor, factor);
var dtheta=wtheta - itheta;
coords.setAngle$I$D(n, dtheta);
var xOrigin=coords.getOriginX$I(n);
var yOrigin=coords.getOriginY$I(n);
var dx=coords.worldToImageX$I$D$D(n, wx0, wy0) - x0;
var dy=coords.worldToImageY$I$D$D(n, wx0, wy0) - y0;
coords.setOriginXY$I$D$D(n, xOrigin - dx, yOrigin - dy);
}, p$1);

Clazz.newMeth(C$, 'updateCoordsXOnly',  function () {
var coords=this.cal.tp.getCoords$();
var n=this.cal.tp.getFrameNumber$();
var wx0=this.worldX0;
var wy0=this.worldY0;
var wx1=this.worldX1;
var x0=this.points[0].getX$();
var y0=this.points[0].getY$();
var x1=this.points[1].getX$();
var y1=this.points[1].getY$();
var dI=this.points[0].distance$java_awt_geom_Point2D(this.points[1]);
var thetaI=-this.points[0].angle$java_awt_geom_Point2D_Double(this.points[1]);
var thetaC=coords.getAngle$I(n);
var dTheta=thetaI - thetaC;
var dxI=dI * Math.cos(dTheta);
var dxW=wx1 - wx0;
var factor=dxI / dxW;
if (factor > 0 ) coords.setScaleXY$I$D$D(n, factor, factor);
 else {
coords.setScaleXY$I$D$D(n, -factor, -factor);
coords.setAngle$I$D(n, thetaC + 3.141592653589793);
}var xOriginI=coords.getOriginX$I(n);
var yOriginI=coords.getOriginY$I(n);
var dx=coords.worldToImageX$I$D$D(n, wx0, wy0) - x0;
var dy=coords.worldToImageY$I$D$D(n, wx0, wy0) - y0;
var theta=thetaC + Math.atan2(dy, dx);
var dOrigin=Math.sqrt(dx * dx + dy * dy) * Math.cos(theta);
var dxOrigin=dOrigin * Math.cos(thetaC);
var dyOrigin=-dOrigin * Math.sin(thetaC);
coords.setOriginXY$I$D$D(n, xOriginI - dxOrigin, yOriginI - dyOrigin);
this.worldY0=coords.imageToWorldY$I$D$D(n, x0, y0);
this.worldY1=coords.imageToWorldY$I$D$D(n, x1, y1);
}, p$1);

Clazz.newMeth(C$, 'updateCoordsYOnly',  function () {
var coords=this.cal.tp.getCoords$();
var n=this.cal.tp.getFrameNumber$();
var wx0=this.worldX0;
var wy0=this.worldY0;
var wy1=this.worldY1;
var x0=this.points[0].getX$();
var y0=this.points[0].getY$();
var x1=this.points[1].getX$();
var y1=this.points[1].getY$();
var dI=this.points[0].distance$java_awt_geom_Point2D(this.points[1]);
var thetaI=-this.points[0].angle$java_awt_geom_Point2D_Double(this.points[1]);
var thetaC=coords.getAngle$I(n);
var dTheta=thetaI - thetaC;
var dyI=dI * Math.sin(dTheta);
var dyW=wy1 - wy0;
var factor=dyI / dyW;
if (factor > 0 ) coords.setScaleXY$I$D$D(n, factor, factor);
 else {
coords.setScaleXY$I$D$D(n, -factor, -factor);
coords.setAngle$I$D(n, thetaC + 3.141592653589793);
}var xOriginI=coords.getOriginX$I(n);
var yOriginI=coords.getOriginY$I(n);
var dx=coords.worldToImageX$I$D$D(n, wx0, wy0) - x0;
var dy=coords.worldToImageY$I$D$D(n, wx0, wy0) - y0;
var theta=thetaC + Math.atan2(dy, dx);
var dOrigin=Math.sqrt(dx * dx + dy * dy) * Math.sin(theta);
var dxOrigin=dOrigin * Math.sin(thetaC);
var dyOrigin=dOrigin * Math.cos(thetaC);
coords.setOriginXY$I$D$D(n, xOriginI - dxOrigin, yOriginI - dyOrigin);
this.worldX0=coords.imageToWorldX$I$D$D(n, x0, y0);
this.worldX1=coords.imageToWorldX$I$D$D(n, x1, y1);
}, p$1);

Clazz.newMeth(C$, 'getLength$',  function () {
return 2;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(15,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalibrationStep, "Position", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
Clazz.super_(C$, this);
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
this.setCoordsEditTrigger$Z(true);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.tp != null ) {
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.tp.getCoords$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.tp.getFrameNumber$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[0] == null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldX0=coords.imageToWorldX$I$D$D(n, x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldY0=coords.imageToWorldY$I$D$D(n, x, y);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldX1=coords.imageToWorldX$I$D$D(n, x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldY1=coords.imageToWorldY$I$D$D(n, x, y);
}}}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).isLocked$()) return;
var i=this === this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[0]  ? 1 : 0;
if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[i] != null  && this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[i].getX$() == x   && this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[i].getY$() == y  ) {
$I$(1).getDefaultToolkit$().beep$();
$I$(2).finer$S("calibration points cannot be identical");
return;
}if (this.isAdjusting$()) {
this.prevX=x;
this.prevY=y;
}var dx=x - this.getX$();
var dy=y - this.getY$();
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.tp.getCoords$();
coords.setAdjusting$Z(this.isAdjusting$());
if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[1] != null ) {
p$1.updateCoords.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'], []);
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.tp != null ) {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.tp.getFrameNumber$();
var x0=coords.getOriginX$I(n);
var y0=coords.getOriginY$I(n);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.axes == 0) {
coords.setOriginXY$I$D$D(n, x0 + dx, y0 + dy);
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.axes == 1) {
coords.setOriginXY$I$D$D(n, x0 + dx, y0);
} else {
coords.setOriginXY$I$D$D(n, x0, y0 + dy);
}}if (this.isAdjusting$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []);
}});

Clazz.newMeth(C$, 'showCoordinates$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].points[0] ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.xField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldX0);
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.yField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldY0);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.x1Field.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldX1);
this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].cal.y1Field.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].worldY1);
}C$.superclazz.prototype.showCoordinates$org_opensourcephysics_media_core_VideoPanel.apply(this, [vidPanel]);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
var wasAdjusting=this.isAdjusting$();
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjusting, e]);
if (wasAdjusting && !adjusting && !java.lang.Double.isNaN$D(this.prevX)  ) {
this.setXY$D$D(this.prevX, this.prevY);
this.b$['org.opensourcephysics.cabrillo.tracker.Step'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Step'], []).firePropertyChange$S$O$O("step", null, Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.CalibrationStep'].n));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalibrationStep, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var data=Clazz.array(Double.TYPE, -1, [step.worldX0, step.worldY0, step.worldX1, step.worldY1]);
control.setValue$S$O("world_coordinates", data);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var step=obj;
var data=control.getObject$S("world_coordinates");
if (data != null ) {
step.worldX0=data[0];
step.worldY0=data[1];
step.worldX1=data[2];
step.worldY1=data[3];
}if (step.cal != null ) step.cal.displayWorldCoordinates$();
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
