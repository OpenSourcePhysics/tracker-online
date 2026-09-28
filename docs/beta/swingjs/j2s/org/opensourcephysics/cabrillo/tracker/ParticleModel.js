(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.tools.Parameter',['java.awt.geom.Point2D','.Double'],'java.text.NumberFormat','org.opensourcephysics.media.core.TPoint','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.CircleFootprint','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.SwingUtilities','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','javax.swing.JMenuItem','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.cabrillo.tracker.Tracker','java.util.Arrays','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.PositionStep','java.awt.Toolkit',['org.opensourcephysics.cabrillo.tracker.ParticleModel','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParticleModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.PointMass');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inspectorX=-2147483648;
this.inspectorH=-2147483648;
this.refreshing=false;
this.traceX=Clazz.array(Double.TYPE, -1, []);
this.traceY=Clazz.array(Double.TYPE, -1, []);
this.tracePt=Clazz.new_($I$(6,1));
this.lastValidFrame=-1;
this.dt=0.1;
this.endFrame=2147483647;
this.myPoint=0;
this.me=Clazz.array(C$, -1, [this]);
},1);

C$.$fields$=[['Z',['showModelBuilder','refreshing','refreshDerivsLater','refreshStepsLater','invalidWarningShown','startFrameUndefined','useDefaultReferenceFrame'],'D',['t0','dt','time'],'I',['inspectorX','inspectorY','inspectorH','lastValidFrame','startFrame','endFrame','myPoint'],'O',['modelBuilder','org.opensourcephysics.cabrillo.tracker.ModelBuilder','functionPanel','org.opensourcephysics.cabrillo.tracker.ModelFunctionPanel','functionEditor','org.opensourcephysics.tools.UserFunctionEditor','traceX','double[]','+traceY','+prevX','+prevY','tracePt','org.opensourcephysics.media.core.TPoint','modelBuilderItem','javax.swing.JMenuItem','+useDefaultRefFrameItem','+stampItem','massParamListener','java.beans.PropertyChangeListener','+timeParamListener','$points','java.awt.geom.Point2D.Double[]','me','org.opensourcephysics.cabrillo.tracker.ParticleModel[]']]
,['Z',['$loading'],'D',['xLimit','yLimit'],'I',['tracePtsPerStep','nCalc'],'O',['nan','java.awt.geom.Point2D.Double','timeFormat','java.text.NumberFormat','panelEventsParticleModel','String[]']]]

Clazz.newMeth(C$, 'setLastValidFrame$I',  function (i) {
this.lastValidFrame=i;
});

Clazz.newMeth(C$, 'getLastValidFrame$',  function () {
return this.lastValidFrame;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.drawsTrace=true;
var footprints=C$.superclazz.prototype.getFootprints$.apply(this, []);
var newprints=Clazz.array($I$(7), [footprints.length + 1]);
newprints[0]=$I$(8).getFootprint$S("CircleFootprint.FilledCircle");
for (var i=0; i < footprints.length; i++) {
newprints[i + 1]=footprints[i];
}
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(newprints);
this.defaultFootprint=newprints[0];
this.setFootprint$S(this.defaultFootprint.getName$());
this.setName$S($I$(9).getString$S("ParticleModel.New.Name"));
this.initializeFunctionPanel$();
this.hint=$I$(9).getString$S("ParticleModel.Hint");
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || this.tp == null  ) return;
if (this.isVisible$() && this.tp.getFrameNumber$() > this.lastValidFrame ) {
this.refreshSteps$S("draw");
}this.drawMe$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, _g);
});

Clazz.newMeth(C$, 'drawMe$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (this.inspectorX != -2147483648 && this.tp != null   && this.tframe != null  ) {
if (this.showModelBuilder) {
$I$(10,"invokeLater$Runnable",[((P$.ParticleModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.positionModelBuilder.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].showModelBuilder=false;
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].modelBuilder.setVisible$Z(true);
});
})()
), Clazz.new_(P$.ParticleModel$1.$init$,[this, null]))]);
}}if (this.isVisible$() && this.isTraceVisible$() ) {
var tPanel=panel;
var coords=tPanel.getCoords$();
var isRefFrame=Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame");
if (isRefFrame) {
coords=(coords).getCoords$();
}var fixed=coords.isFixedAngle$() && coords.isFixedOrigin$() && coords.isFixedScale$()  ;
if (fixed && (!tPanel.isWorldPanel$() || !isRefFrame ) ) {
this.trace.reset$();
for (var i=0; i < this.traceX.length; i++) {
if (Double.isNaN$D(this.traceX[i])) continue;
this.tracePt.setLocation$D$D(this.traceX[i], this.traceY[i]);
var p=this.tracePt.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(tPanel);
if (this.trace.getCurrentPoint$() == null ) this.trace.moveTo$F$F(p.getX$(), p.getY$());
 else this.trace.lineTo$F$F(p.getX$(), p.getY$());
}
var g2=_g;
var color=g2.getColor$();
var stroke=g2.getStroke$();
g2.setColor$java_awt_Color(this.getFootprint$().getColor$());
g2.setStroke$java_awt_Stroke(this.traceStroke);
if ($I$(11).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(12).KEY_ANTIALIASING, $I$(12).VALUE_ANTIALIAS_OFF);
g2.draw$java_awt_Shape(this.trace);
g2.setColor$java_awt_Color(color);
g2.setStroke$java_awt_Stroke(stroke);
}}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
});

Clazz.newMeth(C$, 'delete$',  function () {
var modelBuilder=null;
if (this.tp != null  && this.tp.modelBuilder != null  ) {
var list=this.tp.getDrawablesTemp$Class(Clazz.getClass(C$));
if (list.size$() == 1) modelBuilder=this.tp.modelBuilder;
list.clear$();
}C$.superclazz.prototype.delete$.apply(this, []);
if (modelBuilder != null ) {
modelBuilder.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.removePanelEvents$SA(C$.panelEventsParticleModel);
if (this.tframe != null ) this.tframe.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.addPanelEvents$SA(C$.panelEventsParticleModel);
if (this.startFrameUndefined) {
var n=panel.getPlayer$().getVideoClip$().getStartFrameNumber$();
this.setStartFrame$I(n);
this.startFrameUndefined=false;
}var radians=this.tp.isAnglesInRadians$();
this.functionPanel.initEditor.setAnglesInDegrees$Z(!radians);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (this.tp == null ) return;
var dorefresh=(!this.refreshing && this.isModelsVisible$() );
var resetMe=null;
switch (e.getPropertyName$()) {
default:
return;
case "tab":
if (this.modelBuilder != null  && !this.tframe.isRemovingAll$() ) {
if (this.tp != null  && e.getNewValue$() === this.tp   && this.tp.isModelBuilderVisible ) {
this.modelBuilder.setVisible$Z(true);
} else if (this.modelBuilder.isVisible$() && e.getNewValue$() != null  ) {
this.modelBuilder.setVisible$Z(false);
this.tp.isModelBuilderVisible=true;
}}return;
case "selectedtrack":
if (e.getNewValue$() === this  && this.modelBuilder != null   && !this.modelBuilder.getSelectedName$().equals$O(this.getName$()) ) {
this.modelBuilder.setSelectedPanel$S(this.getName$());
}return;
case "stepcount":
if (dorefresh) {
this.refreshInitialTime$();
this.refreshSteps$S(this.name);
}return;
case "adjusting":
if (dorefresh) {
this.refreshStepsLater=(e.getNewValue$()).valueOf();
if (!this.refreshStepsLater) {
this.refreshSteps$S(this.name);
}}return;
case "units":
this.setAnglesInRadians$Z(this.tp.isAnglesInRadians$());
return;
case "function":
if (!C$.$loading) this.tp.changed=true;
resetMe="repaint";
break;
case "startframe":
case "starttime":
case "frameduration":
resetMe="time";
break;
case "stepsize":
resetMe="refresh";
break;
case "transform":
var coords=this.tp.getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && (coords).getOriginTrack$() === this  ) return;
resetMe="refresh";
break;
}
this.setLastValidFrame$I(-1);
if (dorefresh) {
switch (resetMe) {
case "repaint":
this.repaint$();
break;
case "refresh":
this.refreshSteps$S(this.name);
break;
case "time":
this.refreshInitialTime$();
this.refreshSteps$S(this.name);
break;
}
}});

Clazz.newMeth(C$, 'getMass$',  function () {
var massParam=this.getParamEditor$().getObject$S("m");
if (massParam != null ) return massParam.getValue$();
return C$.superclazz.prototype.getMass$.apply(this, []);
});

Clazz.newMeth(C$, 'setMass$D',  function (mass) {
C$.superclazz.prototype.setMass$D.apply(this, [mass]);
mass=C$.superclazz.prototype.getMass$.apply(this, []);
this.massField.setValue$D(mass);
var massParam=this.getParamEditor$().getObject$S("m");
if (massParam != null  && massParam.getValue$() != mass  ) {
this.functionPanel.getParamEditor$().setExpression$S$S$Z("m", String.valueOf$D(mass), false);
this.refreshSteps$S("setMass");
}});

Clazz.newMeth(C$, 'setName$S',  function (name) {
var prevName=this.getName$();
C$.superclazz.prototype.setName$S.apply(this, [name]);
if (this.modelBuilder != null ) {
this.modelBuilder.renamePanel$S$S(prevName, name);
}});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return this.getName$S("model");
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return false;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.PositionStep.Position")) {
this.hint=$I$(9).getString$S("PointMass.Position.Locked.Hint");
} else if (ia == null ) this.hint=$I$(9).getString$S("ParticleModel.Hint");
return ia;
});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
});

Clazz.newMeth(C$, 'isDependent$',  function () {
return true;
});

Clazz.newMeth(C$, 'isStepComplete$I',  function (n) {
return true;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
if (this.modelBuilderItem == null ) {
this.modelBuilderItem=Clazz.new_($I$(13,1));
this.modelBuilderItem.addActionListener$java_awt_event_ActionListener(((P$.ParticleModel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleModel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.positionModelBuilder.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getModelBuilder$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []).setVisible$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getModelBuilder$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []).setSelectedPanel$S(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []));
});
})()
), Clazz.new_(P$.ParticleModel$2.$init$,[this, null])));
this.useDefaultRefFrameItem=Clazz.new_($I$(14,1));
this.useDefaultRefFrameItem.setSelected$Z(!this.useDefaultReferenceFrame);
this.useDefaultRefFrameItem.addActionListener$java_awt_event_ActionListener(((P$.ParticleModel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleModel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].setUseDefaultReferenceFrame$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], [!this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].useDefaultRefFrameItem.isSelected$()]);
if (Clazz.instanceOf(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].tp.getCoords$(), "org.opensourcephysics.cabrillo.tracker.ReferenceFrame")) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].setLastValidFrame$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], [-1]);
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].refreshSteps$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], ["useDefRefFrameItem action"]);
}});
})()
), Clazz.new_(P$.ParticleModel$3.$init$,[this, null])));
this.stampItem=Clazz.new_($I$(13,1));
this.stampItem.addActionListener$java_awt_event_ActionListener(((P$.ParticleModel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleModel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].doStamp$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []);
});
})()
), Clazz.new_(P$.ParticleModel$4.$init$,[this, null])));
}this.modelBuilderItem.setText$S($I$(9).getString$S("ParticleModel.MenuItem.InspectModel"));
this.useDefaultRefFrameItem.setText$S($I$(9).getString$S("ParticleModel.MenuItem.UseDefaultReferenceFrame"));
var stamp=$I$(9).getString$S("ParticleModel.MenuItem.Stamp");
var pm=$I$(9).getString$S("PointMass.Name");
this.stampItem.setText$S(stamp + " " + pm );
this.stampItem.setToolTipText$S($I$(9).getString$S("ParticleModel.MenuItem.Stamp.Tooltip"));
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
menu.remove$javax_swing_JMenuItem(this.autotrackItem);
menu.remove$javax_swing_JMenuItem(this.deleteStepItem);
menu.remove$javax_swing_JMenuItem(this.clearStepsItem);
if (trackerPanel.isEnabled$S("model.stamp")) {
for (var i=menu.getItemCount$(); --i >= 0; ) {
if (menu.getMenuComponent$I(i) === this.accelerationMenu ) {
menu.insert$javax_swing_JMenuItem$I(this.stampItem, ++i);
menu.insertSeparator$I(i);
break;
}}
}return this.assembleMenu$javax_swing_JMenu$javax_swing_JMenuItem(menu, this.modelBuilderItem);
});

Clazz.newMeth(C$, 'doStamp$',  function () {
this.refreshSteps$S("stampItem action");
var pm=Clazz.new_($I$(15,1));
var proposed=this.getName$() + " " + $I$(9).getString$S("ParticleModel.Stamp.Name") + "1" ;
for (var track, $track = this.tp.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (proposed.equals$O(track.getName$())) {
try {
var n=Integer.parseInt$S(proposed.substring$I(proposed.length$() - 1));
proposed=proposed.substring$I$I(0, proposed.length$() - 1) + (n + 1);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
continue;
} else {
throw ex;
}
}
}}
this.tp.clearTemp$();
pm.setName$S(proposed);
pm.setColor$java_awt_Color(this.getColor$().darker$());
this.tp.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(pm);
for (var step, $step = 0, $$step = this.getSteps$(); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step == null ) continue;
var pt=step.getPoints$()[0];
var n=pt.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(this.tp);
pm.createStep$I$D$D(n, pt.x, pt.y);
}
$I$(16).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, point]);
this.xField.setEnabled$Z(false);
this.yField.setEnabled$Z(false);
this.magField.setEnabled$Z(false);
this.angleField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'setStartFrame$I',  function (n) {
var clip=this.tp.getPlayer$().getVideoClip$();
n=Math.max(n, clip.getFirstFrameNumber$());
var end=clip.getLastFrameNumber$();
n=Math.min(n, end);
n=Math.min(n, this.getEndFrame$());
if (n == this.startFrame) return;
this.startFrame=n;
this.refreshInitialTime$();
this.setLastValidFrame$I(-1);
this.refreshSteps$S("setStartFrame " + n);
$I$(16).repaintT$java_awt_Component(this.tp);
this.firePropertyChange$S$O$O("model_start", null, Integer.valueOf$I(this.getStartFrame$()));
});

Clazz.newMeth(C$, 'getStartFrame$',  function () {
return this.startFrame;
});

Clazz.newMeth(C$, 'setEndFrame$I',  function (n) {
var clip=this.tp.getPlayer$().getVideoClip$();
var end=clip.getLastFrameNumber$();
n=Math.max(n, 0);
n=Math.max(n, this.getStartFrame$());
if (n == this.getEndFrame$()) return;
this.endFrame=n < end ? n : 2147483647;
if (n < this.lastValidFrame) {
this.trimSteps$();
} else {
this.refreshSteps$S("setEndFrame " + this.endFrame);
}$I$(16).repaintT$java_awt_Component(this.tp);
this.firePropertyChange$S$O$O("model_end", null, Integer.valueOf$I(this.getEndFrame$()));
});

Clazz.newMeth(C$, 'getEndFrame$',  function () {
return this.endFrame;
});

Clazz.newMeth(C$, 'setAnglesInRadians$Z',  function (radians) {
C$.superclazz.prototype.setAnglesInRadians$Z.apply(this, [radians]);
this.functionPanel.initEditor.setAnglesInDegrees$Z(!radians);
var units=radians ? $I$(9).getString$S("TableTrackView.Radians.Tooltip") : $I$(9).getString$S("TableTrackView.Degrees.Tooltip");
var s=$I$(9).getString$S("DynamicParticle.Parameter.InitialTheta.Description");
s+=" " + units;
this.functionPanel.initEditor.setDescription$S$S($I$(17).THETA, s);
s=$I$(9).getString$S("DynamicParticle.Parameter.InitialOmega.Description");
s+=" " + units + "/" + this.tp.getTimeUnit$() ;
this.functionPanel.initEditor.setDescription$S$S($I$(17).OMEGA, s);
});

Clazz.newMeth(C$, 'getModels$',  function () {
return this.me;
});

Clazz.newMeth(C$, 'isModelsVisible$',  function () {
for (var model, $model = 0, $$model = this.getModels$(); $model<$$model.length&&((model=($$model[$model])),1);$model++) {
if (model.isTraceVisible$() || (model.isVisible$() && (model.isPositionVisible$() || model.isVVisible$() || model.isAVisible$()  ) ) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'refreshInitialTime$',  function () {
if (this.tp == null ) return;
var t0=this.tp.getPlayer$().getFrameTime$I(this.getStartFrame$()) / 1000;
var t=C$.timeFormat.format$D(t0);
var param=this.getInitEditor$().getObject$S("t");
if (param.getValue$() != t0 ) {
var prev=this.refreshing;
this.refreshing=true;
this.getInitEditor$().setExpression$S$S$Z("t", t, false);
this.refreshing=prev;
}});

Clazz.newMeth(C$, 'refreshSteps$S',  function (why) {
this.locked=true;
if (this.refreshStepsLater || this.tp == null   || Clazz.instanceOf(this, "org.opensourcephysics.cabrillo.tracker.DynamicSystem") && (this).particles.length == 0  ) return;
this.refreshDerivsLater=this.tp.getPlayer$().getClipControl$().isPlaying$();
var n=this.tp.getFrameNumber$();
var clip=this.tp.getPlayer$().getVideoClip$();
var end=Math.min(this.getEndFrame$(), n);
var start=this.getStartFrame$();
while (end > start && !clip.includesFrame$I(end) ){
--end;
}
if (end <= this.lastValidFrame) return;
if (this.lastValidFrame == -1) {
this.reset$();
if (this.lastValidFrame == -1 || end <= this.lastValidFrame ) return;
}this.holdPainting$Z(true);
start=this.lastValidFrame;
if ($I$(18).timeLogEnabled) $I$(18,"logTime$S",[this.getClass$().getSimpleName$() + this.hashCode$() + " refreshing steps " + start + " to " + end ]);
var singleStep=(end - start == 1);
var coords=this.tp.getCoords$();
var useDefault=this.isUseDefaultReferenceFrame$();
while (useDefault && Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") ){
coords=(coords).getCoords$();
}
var startTime=this.t0 + this.dt * C$.tracePtsPerStep * (start - this.getStartFrame$())  / clip.getStepSize$();
var stepSize=1.0 * clip.getStepSize$() / C$.tracePtsPerStep;
var stepCount=((C$.tracePtsPerStep * (end - start))/clip.getStepSize$()|0);
var models=this.getModels$();
var nmodels=models.length;
for (var i=0; i < nmodels; i++) {
var model=models[i];
model.locked=false;
var traceLength=model.traceX.length + stepCount;
model.prevX=model.traceX;
model.prevY=model.traceY;
model.traceX=$I$(19).copyOf$DA$I(model.prevX, traceLength);
model.traceY=$I$(19).copyOf$DA$I(model.prevY, traceLength);
}
for (var i=0; i < stepCount; i++) {
var stepNumber=i + 1;
var frameNumber=start + ((stepNumber * stepSize)|0);
this.time=startTime + stepNumber * this.dt;
if (!this.getNextTracePositions$()) continue;
var transform=coords.getToImageTransform$I(frameNumber);
for (var j=0; j < nmodels; j++) {
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.$points[j], this.$points[j]);
var valid=Math.abs(this.$points[j].x) < C$.xLimit  && Math.abs(this.$points[j].y) < C$.yLimit  ;
if (!valid && !this.invalidWarningShown ) {
this.invalidWarningShown=true;
$I$(10,"invokeLater$Runnable",[((P$.ParticleModel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ParticleModel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(20,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].tp, $I$(9).getString$S("ParticleModel.Dialog.Offscreen.Message1") + $I$(1).NEW_LINE + $I$(9).getString$S("ParticleModel.Dialog.Offscreen.Message2") , $I$(9).getString$S("ParticleModel.Dialog.Offscreen.Title"), 2]);
});
})()
), Clazz.new_(P$.ParticleModel$lambda1.$init$,[this, null]))]);
}models[j].traceX[models[j].prevX.length + i]=valid ? this.$points[j].x : NaN;
models[j].traceY[models[j].prevY.length + i]=valid ? this.$points[j].y : NaN;
if (stepNumber % C$.tracePtsPerStep == 0) {
this.saveState$I(frameNumber);
var step=models[j].getStep$I(frameNumber);
if (step == null ) {
step=this.createPositionStep$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D(models[j], frameNumber, 0, 0);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(models[j].getFootprint$());
models[j].steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(frameNumber, step);
}step.getPosition$().setPosition$java_awt_geom_Point2D_Double(valid ? this.$points[j] : C$.nan);
}}
}
var count=4 + (end - start);
var startUpdate=start;
if (startUpdate > clip.getStepSize$()) startUpdate-=clip.getStepSize$();
if (startUpdate > clip.getStepSize$()) startUpdate-=clip.getStepSize$();
this.setLastValidFrame$I(end);
for (var m=0; m < nmodels; m++) {
var model=models[m];
model.steps.setLength$I(end + 1);
coords=this.tp.getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && (coords).getOriginTrack$() === model  ) {
var prev=model.refreshing;
model.refreshing=true;
(coords).setOrigins$();
for (var i=0, ns=clip.getStepCount$(); i < ns; i++) {
var frameNumber=clip.stepToFrame$I(i);
var step=model.getStep$I(frameNumber);
if (step == null ) continue;
var transform=coords.getToImageTransform$I(frameNumber);
var point=model.$points[model.myPoint];
point.setLocation$D$D(0, 0);
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(point, point);
step.getPosition$().setPosition$java_awt_geom_Point2D_Double(point);
}
model.refreshing=prev;
}if (!this.refreshDerivsLater) {
model.updateDerivatives$I$I(startUpdate, count);
}if (model.vAtOrigin) model.vTailsToOriginItem.doClick$();
if (model.aAtOrigin) model.aTailsToOriginItem.doClick$();
if (!this.refreshDerivsLater && singleStep ) {
this.holdPainting$Z(false);
model.firePropertyChange$S$O$O("step", null,  new Integer(n));
}for (var i=start + 1; i <= end; i++) {
var step=model.getStep$I(i);
if (step != null ) step.erase$();
}
model.locked=true;
}
this.holdPainting$Z(false);
if (!this.refreshDerivsLater && !singleStep ) {
this.fireStepsChanged$();
}$I$(16).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'holdPainting$Z',  function (b) {
this.tframe.holdPainting$Z(b);
});

Clazz.newMeth(C$, 'fireStepsChanged$',  function () {
var models=this.getModels$();
for (var m=0, n=models.length - 1; m < n; m++) {
models[m].fireStepsChanged$();
}
C$.superclazz.prototype.fireStepsChanged$.apply(this, []);
});

Clazz.newMeth(C$, 'createPositionStep$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D',  function (track, n, x, y) {
var newStep=Clazz.new_($I$(21,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[track, n, x, y]);
newStep.valid=!Double.isNaN$D(x) && !Double.isNaN$D(y) ;
return newStep;
});

Clazz.newMeth(C$, 'refreshDerivsIfNeeded$',  function () {
if (!this.refreshDerivsLater) return;
this.refreshDerivsLater=false;
for (var part, $part = 0, $$part = this.getModels$(); $part<$$part.length&&((part=($$part[$part])),1);$part++) {
part.updateDerivatives$();
}
this.fireStepsChanged$();
});

Clazz.newMeth(C$, 'trimSteps$',  function () {
var clip=this.tp.getPlayer$().getVideoClip$();
var n=clip.getFrameCount$() - 1;
var end=this.getEndFrame$() == 2147483647 ? n : this.getEndFrame$();
while (end > this.getStartFrame$() && !clip.includesFrame$I(end) ){
--end;
}
if (end >= this.lastValidFrame) return;
var trimCount=((C$.tracePtsPerStep * (this.lastValidFrame - end))/clip.getStepSize$()|0);
var models=this.getModels$();
for (var next, $next = 0, $$next = models; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next.locked=false;
var traceLength=next.traceX.length - trimCount;
if (traceLength < 0) return;
next.prevX=next.traceX;
next.prevY=next.traceY;
next.traceX=Clazz.array(Double.TYPE, [traceLength]);
next.traceY=Clazz.array(Double.TYPE, [traceLength]);
System.arraycopy$O$I$O$I$I(next.prevX, 0, next.traceX, 0, traceLength);
System.arraycopy$O$I$O$I$I(next.prevY, 0, next.traceY, 0, traceLength);
next.steps.setLength$I(end + 1);
next.updateDerivatives$I$I(end - 2, this.lastValidFrame - end + 2);
this.restoreState$I(end);
next.locked=true;
}
this.fireStepsChanged$();
this.setLastValidFrame$I(end);
this.repaint$();
});

Clazz.newMeth(C$, 'saveState$I',  function (frameNumber) {
});

Clazz.newMeth(C$, 'restoreState$I',  function (frameNumber) {
return false;
});

Clazz.newMeth(C$, 'isUseDefaultReferenceFrame$',  function () {
var coords=this.tp.getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && (coords).getOriginTrack$() === this  ) {
return true;
}return this.useDefaultReferenceFrame;
});

Clazz.newMeth(C$, 'setUseDefaultReferenceFrame$Z',  function (useDefault) {
this.useDefaultReferenceFrame=useDefault;
});

Clazz.newMeth(C$, 'getModelBuilder$',  function () {
if (this.tp == null ) return null;
var newBuilder=this.tp.modelBuilder == null ;
if (this.modelBuilder == null ) {
this.modelBuilder=this.tp.getModelBuilder$();
this.modelBuilder.addPanel$S$org_opensourcephysics_tools_FunctionPanel(this.getName$(), this.functionPanel);
this.modelBuilder.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
if (this.tframe != null ) {
this.tframe.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}if (this.getInitEditor$().getValues$()[0] == 0 ) {
this.refreshInitialTime$();
this.getInitEditor$().getTable$().clearSelection$();
}}if (newBuilder) {
var models=this.tp.getDrawables$Class(Clazz.getClass(C$));
for (var i=0; i < models.size$(); i++) {
if (Clazz.instanceOf(models.get$I(i), "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
var model=models.get$I(i);
model=model.getLeader$();
model.getModelBuilder$();
} else {
models.get$I(i).getModelBuilder$();
}}
}return this.modelBuilder;
});

Clazz.newMeth(C$, 'createMassAndTimeParameters$',  function () {
var param=Clazz.new_(["m", String.valueOf$D(this.getMass$())],$I$(3,1).c$$S$S);
param.setNameEditable$Z(false);
param.setDescription$S($I$(9).getString$S("ParticleModel.Parameter.Mass.Description"));
this.getParamEditor$().addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(param, false);
this.functionPanel.getInitEditor$().addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(C$.newTimeParam$(), false);
this.massParamListener=((P$.ParticleModel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleModel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if ("m".equals$O(e.getOldValue$())) {
var m=(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getParamEditor$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []).getObject$S("m")).getValue$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].mass != m ) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].setMass$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], [m]);
}}});
})()
), Clazz.new_(P$.ParticleModel$5.$init$,[this, null]));
this.getParamEditor$().addPropertyChangeListener$java_beans_PropertyChangeListener(this.massParamListener);
this.timeParamListener=((P$.ParticleModel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleModel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].refreshing) return;
if ("t".equals$O(e.getOldValue$()) && this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].tp != null  ) {
var clip=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].tp.getPlayer$().getVideoClip$();
var timeOffset=(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getInitEditor$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []).getObject$S("t")).getValue$() * 1000 - clip.getStartTime$();
var dt=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].tp.getPlayer$().getMeanStepDuration$();
var n=clip.getStartFrameNumber$();
var mustRound=timeOffset % dt > 0 ;
n+=clip.getStepSize$() * Long.$ival(Math.round$D(timeOffset / dt));
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].setStartFrame$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], [n]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getStartFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []) != n || mustRound ) $I$(22).getDefaultToolkit$().beep$();
}});
})()
), Clazz.new_(P$.ParticleModel$6.$init$,[this, null]));
this.getInitEditor$().addPropertyChangeListener$java_beans_PropertyChangeListener(this.timeParamListener);
});

Clazz.newMeth(C$, 'getInitialValues$',  function () {
return this.functionPanel.getInitEditor$().getValues$();
});

Clazz.newMeth(C$, 'getParamEditor$',  function () {
return this.functionPanel.getParamEditor$();
});

Clazz.newMeth(C$, 'getInitEditor$',  function () {
return this.functionPanel.getInitEditor$();
});

Clazz.newMeth(C$, 'getFunctionEditor$',  function () {
return this.functionPanel.getUserFunctionEditor$();
});

Clazz.newMeth(C$, 'positionModelBuilder',  function () {
if (this.inspectorX != -2147483648 && this.inspectorX != 2147483647 ) {
this.refreshing=!this.showModelBuilder;
C$.$loading=true;
this.getModelBuilder$();
this.refreshing=C$.$loading=false;
var dim=$I$(22).getDefaultToolkit$().getScreenSize$();
if (this.inspectorH != -2147483648) this.modelBuilder.setSize$I$I(this.modelBuilder.getWidth$(), Math.min(this.inspectorH, dim.height));
var x=Math.max(this.tframe.getLocation$().x + this.inspectorX, 0);
x=Math.min(x, dim.width - this.modelBuilder.getWidth$());
var y=Math.max(this.tframe.getLocation$().y + this.inspectorY, 0);
y=Math.min(y, dim.height - this.modelBuilder.getHeight$());
this.modelBuilder.setLocation$I$I(x, y);
this.inspectorX=2147483647;
}}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(23,1));
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.modelBuilder != null ) {
this.getParamEditor$().removePropertyChangeListener$java_beans_PropertyChangeListener(this.massParamListener);
this.getInitEditor$().removePropertyChangeListener$java_beans_PropertyChangeListener(this.timeParamListener);
this.functionPanel.dispose$();
this.massParamListener=null;
this.timeParamListener=null;
this.modelBuilder.removePanel$S(this.getName$());
this.modelBuilder.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
if (this.modelBuilder.isEmpty$()) {
this.modelBuilder.setVisible$Z(false);
}this.modelBuilder=null;
}this.functionPanel=null;
this.functionEditor=null;
if (this.tframe != null ) this.tframe.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'newTimeParam$',  function () {
var param=Clazz.new_($I$(3,1).c$$S$S,["t", "0"]);
param.setNameEditable$Z(false);
param.setDescription$S($I$(9).getString$S("ParticleModel.Parameter.InitialTime.Description"));
return param;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.tracePtsPerStep=10;
C$.$loading=false;
C$.nan=Clazz.new_($I$(4,1).c$$D$D,[NaN, NaN]);
C$.xLimit=8000;
C$.yLimit=6000;
C$.timeFormat=$I$(5).getNumberInstance$();
{
C$.timeFormat.setMinimumIntegerDigits$I(1);
C$.timeFormat.setMaximumFractionDigits$I(3);
C$.timeFormat.setMinimumFractionDigits$I(3);
C$.timeFormat.setGroupingUsed$Z(false);
};
C$.panelEventsParticleModel=Clazz.array(String, -1, ["frameduration", "function", "starttime", "startframe", "stepcount", "selectedtrack", "units"]);
C$.nCalc=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParticleModel, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
control.setValue$S$D("mass", p.getMass$());
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var fp=p.getVelocityFootprint$();
if (!fp.getColor$().equals$O(p.getColor$())) {
control.setValue$S$O("velocity_color", fp.getColor$());
}if (!fp.getName$().equals$O(p.getVelocityFootprints$()[0].getName$())) {
control.setValue$S$O("velocity_footprint", fp.getName$());
}fp=p.getAccelerationFootprint$();
if (!fp.getColor$().equals$O(p.getColor$())) {
control.setValue$S$O("acceleration_color", fp.getColor$());
}if (!fp.getName$().equals$O(p.getAccelerationFootprints$()[0].getName$())) {
control.setValue$S$O("acceleration_footprint", fp.getName$());
}var params=p.getParamEditor$().getParameters$();
control.setValue$S$O("user_parameters", params);
var inits=p.getInitEditor$().getParameters$();
control.setValue$S$O("initial_values", inits);
var functions=p.getFunctionEditor$().getMainFunctions$();
control.setValue$S$O("main_functions", functions);
functions=p.getFunctionEditor$().getSupportFunctions$();
if (functions.length > 0) control.setValue$S$O("support_functions", functions);
if (p.startFrame > 0) control.setValue$S$I("start_frame", p.startFrame);
if (p.endFrame < 2147483647) control.setValue$S$I("end_frame", p.endFrame);
if (p.modelBuilder != null  && p.tp != null   && p.tframe != null  ) {
var x=p.modelBuilder.getLocation$().x - p.tframe.getLocation$().x;
var y=p.modelBuilder.getLocation$().y - p.tframe.getLocation$().y;
control.setValue$S$I("inspector_x", x);
control.setValue$S$I("inspector_y", y);
control.setValue$S$I("inspector_h", p.modelBuilder.getHeight$());
control.setValue$S$Z("inspector_visible", p.modelBuilder.isVisible$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var p=obj;
var m=control.getDouble$S("mass");
if (m != NaN ) {
p.mass=m;
}var c=control.getObject$S("velocity_color");
if (c != null ) p.setVelocityColor$java_awt_Color(c);
 else p.setVelocityColor$java_awt_Color(p.getColor$());
var s=control.getString$S("velocity_footprint");
if (s != null ) p.setVelocityFootprint$S(s);
 else p.setVelocityFootprint$S(p.getVelocityFootprints$()[0].getName$());
c=control.getObject$S("acceleration_color");
if (c != null ) p.setAccelerationColor$java_awt_Color(c);
 else p.setAccelerationColor$java_awt_Color(p.getColor$());
s=control.getString$S("acceleration_footprint");
if (s != null ) p.setAccelerationFootprint$S(s);
 else p.setAccelerationFootprint$S(p.getAccelerationFootprints$()[0].getName$());
if (p.inspectorX == -2147483648) {
p.inspectorX=control.getInt$S("inspector_x");
p.inspectorY=control.getInt$S("inspector_y");
p.inspectorH=control.getInt$S("inspector_h");
}p.showModelBuilder=control.getBoolean$S("inspector_visible");
var params=control.getObject$S("user_parameters");
p.getParamEditor$().setParameters$org_opensourcephysics_tools_ParameterA(params);
params=control.getObject$S("initial_values");
for (var i=0; i < params.length; i++) {
var param=params[i];
var name=param.getName$();
var n=name.lastIndexOf$S("0");
if (n > -1) {
name=name.substring$I$I(0, n);
var newParam=Clazz.new_([name, param.getExpression$()],$I$(3,1).c$$S$S);
newParam.setDescription$S(param.getDescription$());
newParam.setNameEditable$Z(false);
params[i]=newParam;
}}
p.getInitEditor$().setParameters$org_opensourcephysics_tools_ParameterA(params);
var functions=control.getObject$S("main_functions");
p.getFunctionEditor$().setMainFunctions$org_opensourcephysics_tools_UserFunctionA(functions);
var funcs=p.getFunctionEditor$().getSupportFunctions$();
for (var k=0; k < funcs.length; k++) {
p.getFunctionEditor$().removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(funcs[k], false);
}
functions=control.getObject$S("support_functions");
if (functions != null ) {
for (var i=0; i < functions.length; i++) {
p.getFunctionEditor$().addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(functions[i], false);
}
}p.functionPanel.refreshFunctions$();
var n=control.getInt$S("start_frame");
if (n != -2147483648) p.startFrame=n;
 else {
p.startFrameUndefined=true;
}n=control.getInt$S("end_frame");
if (n != -2147483648) p.endFrame=n;
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
