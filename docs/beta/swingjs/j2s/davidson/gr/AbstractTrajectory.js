(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'org.opensourcephysics.display.Trail','java.awt.Color','java.util.ArrayList','java.text.DecimalFormat','org.opensourcephysics.display.InteractiveLabel',['davidson.gr.AbstractTrajectory','.AbstractTrajectoryLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractTrajectory", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractiveCircle', 'davidson.gr.Trajectory');
C$.$classes$=[['AbstractTrajectoryLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.id=0;
this.M=1.0;
this.minR=0;
this.trackPoints=0;
this.tau=0;
this.tol=1.0E-5;
this.showTau=false;
this.trail=Clazz.new_($I$(1,1));
this.showTrail=true;
this.highlight=false;
this.dragPosition=true;
this.highlightColor=$I$(2).PINK.darker$();
this.colNames=Clazz.new_($I$(3,1));
this.f=Clazz.new_($I$(4,1).c$$S,["#0.00"]);
this.tauBox=Clazz.new_(["$\\tau$=" + this.f.format$J(0)],$I$(5,1).c$$S);
this.cluster=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['showTau','showTrail','highlight','dragPosition'],'D',['M','minR','tau','tol'],'I',['id','trackPoints'],'S',['label'],'O',['state','double[]','+stateInitial','ode_solver','org.opensourcephysics.numerics.ODEAdaptiveSolver','trail','org.opensourcephysics.display.Trail','highlightColor','java.awt.Color','colNames','java.util.ArrayList','f','java.text.DecimalFormat','tauBox','org.opensourcephysics.display.InteractiveLabel','cluster','java.util.ArrayList']]
,['I',['nextID']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.id=C$.nextID;
++C$.nextID;
this.cluster.add$O(this);
this.tauBox.setConnectionPoint$I(1);
this.tauBox.setOffsetY$I(-16 - this.pixRadius);
}, 1);

Clazz.newMeth(C$, 'setTau$D',  function (tau) {
this.tau=tau;
});

Clazz.newMeth(C$, 'getTau$',  function () {
return this.tau;
});

Clazz.newMeth(C$, 'setId$I',  function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'getCluster$',  function () {
return this.cluster;
});

Clazz.newMeth(C$, 'setCluster$java_util_ArrayList',  function (cluster) {
this.cluster=cluster;
});

Clazz.newMeth(C$, 'initialize$DA',  function (initialState) {
if ((this.state == null ) || (this.state.length != initialState.length) ) {
throw (Clazz.new_(Clazz.load('IllegalArgumentException')));
}if (initialState !== this.state ) {
System.arraycopy$O$I$O$I$I(initialState, 0, this.state, 0, initialState.length);
}System.arraycopy$O$I$O$I$I(initialState, 0, this.stateInitial, 0, initialState.length);
this.trail.clear$();
this.computeTrail$();
this.setMeasured$Z(true);
});

Clazz.newMeth(C$, 'resetInitial$',  function () {
this.initialize$DA(this.stateInitial);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var r=Math.sqrt(x * x + y * y);
if (r == 0  && this.minR > 0  ) {
C$.superclazz.prototype.setXY$D$D.apply(this, [this.minR, 0]);
} else if (r < this.minR ) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x * this.minR / r, y * this.minR / r]);
} else {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
}});

Clazz.newMeth(C$, 'setMinR$D',  function (r) {
this.minR=r;
});

Clazz.newMeth(C$, 'appendDataToTable$',  function () {
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.ode_solver.getErrorCode$();
});

Clazz.newMeth(C$, 'computeTrail$',  function () {
this.trail.clear$();
this.trail.moveToPoint$D$D(this.x, this.y);
if (this.trackPoints > 0) {
for (var i=this.trackPoints; i > 0; i--) {
this.stepTime$();
}
System.arraycopy$O$I$O$I$I(this.stateInitial, 0, this.state, 0, this.state.length);
this.x=this.state[0] * Math.cos(this.state[2]);
this.y=this.state[0] * Math.sin(this.state[2]);
this.trail.moveToPoint$D$D(this.x, this.y);
}});

Clazz.newMeth(C$, 'setStepSize$D',  function (dt) {
this.ode_solver.setStepSize$D(dt);
});

Clazz.newMeth(C$, 'setTolerance$D',  function (tol) {
this.tol=tol;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getInitialState$',  function () {
return this.stateInitial;
});

Clazz.newMeth(C$, 'setHighlight$Z',  function (b) {
this.highlight=b;
});

Clazz.newMeth(C$, 'setEnableDrag$Z',  function (drag) {
this.dragPosition=drag;
});

Clazz.newMeth(C$, 'isEnableDrag$',  function () {
return this.dragPosition;
});

Clazz.newMeth(C$, 'isHighlight$',  function () {
return this.highlight;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.dragPosition) {
var interactive=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (interactive != null ) return interactive;
}return this.tauBox.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.showTrail) {
this.trail.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}if (this.highlight) {
var xpix=panel.xToPix$D(this.x) - this.pixRadius;
var ypix=panel.yToPix$D(this.y) - this.pixRadius;
g.setColor$java_awt_Color(this.highlightColor);
g.fillOval$I$I$I$I(xpix - 2, ypix - 2, 2 * this.pixRadius + 4, 2 * this.pixRadius + 4);
g.setColor$java_awt_Color(this.color);
g.fillOval$I$I$I$I(xpix, ypix, 2 * this.pixRadius, 2 * this.pixRadius);
} else {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
}this.paintLabel$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
this.paintTau$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'paintLabel$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if ((this.label != null ) && !this.label.trim$().equals$O("") ) {
g.setColor$java_awt_Color($I$(2).BLACK);
var xpix=panel.xToPix$D(this.x) - (g.getFontMetrics$java_awt_Font(g.getFont$()).stringWidth$S(this.label)/2|0);
var ypix=(this.showTau) ? panel.yToPix$D(this.y) - this.pixRadius - 4  : panel.yToPix$D(this.y) + this.pixRadius + g.getFontMetrics$java_awt_Font(g.getFont$()).getHeight$() + 1 ;
g.drawString$S$I$I(this.label, xpix, ypix);
}});

Clazz.newMeth(C$, 'setShowTau$Z',  function (show) {
this.showTau=show;
});

Clazz.newMeth(C$, 'setShowTrail$Z',  function (show) {
this.showTrail=show;
});

Clazz.newMeth(C$, 'paintTau$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.showTau) {
return;
}this.tauBox.setText$S$D$D("$\\tau$=" + this.f.format$D(this.tau), this.x, this.y);
this.tauBox.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return Math.min(C$.superclazz.prototype.getXMin$.apply(this, []), this.trail.getXMin$());
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return Math.max(C$.superclazz.prototype.getXMax$.apply(this, []), this.trail.getXMax$());
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return Math.min(C$.superclazz.prototype.getYMin$.apply(this, []), this.trail.getYMin$());
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return Math.max(C$.superclazz.prototype.getYMax$.apply(this, []), this.trail.getYMax$());
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.nextID=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractTrajectory, "AbstractTrajectoryLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.InteractiveCircle','.InteractiveCircleLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var trajectory=obj;
control.setValue$S$D("M", trajectory.M);
control.setValue$S$D("tolerance", trajectory.tol);
control.setValue$S$Z("show_trail", trajectory.showTrail);
control.setValue$S$Z("show_tau", trajectory.showTau);
control.setValue$S$Z("highlight", trajectory.highlight);
control.setValue$S$I("track_points", trajectory.trackPoints);
control.setValue$S$D("minimum_r", trajectory.minR);
control.setValue$S$O("label", trajectory.label);
control.setValue$S$I("id", trajectory.id);
control.setValue$S$D("ode_step_size", trajectory.ode_solver.getStepSize$());
control.setValue$S$O("state", trajectory.state);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var trajectory=obj;
trajectory.M=control.getDouble$S("M");
trajectory.id=control.getInt$S("id");
trajectory.tol=control.getDouble$S("tolerance");
trajectory.showTau=control.getBoolean$S("show_tau");
trajectory.showTrail=control.getBoolean$S("show_trail");
trajectory.highlight=control.getBoolean$S("highlight");
trajectory.trackPoints=control.getInt$S("track_points");
trajectory.minR=control.getDouble$S("minimum_r");
trajectory.label=control.getString$S("label");
trajectory.ode_solver.setStepSize$D(control.getDouble$S("ode_step_size"));
trajectory.initialize$DA(control.getObject$S("state"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
