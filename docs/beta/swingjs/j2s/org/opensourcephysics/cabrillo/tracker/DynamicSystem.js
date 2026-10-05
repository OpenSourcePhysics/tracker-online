(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.ParticleModel','org.opensourcephysics.cabrillo.tracker.DynamicSystem','org.opensourcephysics.cabrillo.tracker.DynamicParticle','java.util.TreeMap','java.awt.Color',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','java.awt.Toolkit','javax.swing.SwingUtilities','java.util.ArrayList','StringBuffer','javax.swing.JMenuItem','javax.swing.JOptionPane',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector','org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.tools.Parameter','org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.cabrillo.tracker.DynamicFunctionPanel','org.opensourcephysics.tools.UserFunction',['org.opensourcephysics.cabrillo.tracker.DynamicSystem','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DynamicSystem", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.DynamicParticlePolar');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.particles=Clazz.array($I$(4), [0]);
this.models=Clazz.array($I$(2), [0]);
this.particleState=Clazz.array(Double.TYPE, [5]);
this.particleNames=Clazz.array(String, [0]);
this.systemInspectorX=-2147483648;
this.frameRelativeStates=Clazz.new_($I$(5,1));
this.$refreshing=false;
this.$temp=Clazz.array(Double.TYPE, [2]);
},1);

C$.$fields$=[['Z',['$refreshing'],'I',['systemInspectorX','systemInspectorY'],'O',['particles','org.opensourcephysics.cabrillo.tracker.DynamicParticle[]','models','org.opensourcephysics.cabrillo.tracker.ParticleModel[]','particleState','double[]','systemInspector','org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector','systemInspectorItem','javax.swing.JMenuItem','particleNames','String[]','realSteps','org.opensourcephysics.cabrillo.tracker.TTrack.StepArray','+noSteps','frameRelativeStates','java.util.TreeMap','$temp','double[]']]
,['O',['$dataVariables','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_cabrillo_tracker_DynamicParticleA.apply(this, [Clazz.array($I$(4), [0])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_DynamicParticleA',  function (parts) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(6), -1, [Clazz.new_($I$(6,1).c$$I$I$I,[51, 204, 51])]);
this.massField.setMinValue$D(0);
this.realSteps=this.steps;
this.noSteps=Clazz.new_($I$(7,1),[this, null]);
var massParam=this.getParamEditor$().getObject$S("m");
massParam.setExpressionEditable$Z(false);
this.setName$S($I$(8).getString$S("DynamicSystem.New.Name"));
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(9), -1, [$I$(10).getFootprint$S("Footprint.SolidDiamond"), $I$(10).getFootprint$S("Footprint.Spot"), $I$(10).getFootprint$S("Footprint.SolidTriangle"), $I$(10).getFootprint$S("Footprint.SolidCircle"), $I$(10).getFootprint$S("Footprint.BoldVerticalLine"), $I$(10).getFootprint$S("Footprint.BoldHorizontalLine"), $I$(10).getFootprint$S("Footprint.BoldPositionVector")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.locked=true;
this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(parts);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || this.tp == null  ) return;
if (!this.initialized) this.initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
this.getModelBuilder$();
if (this.systemInspectorX != -2147483648 && this.tframe != null  ) {
this.getSystemInspector$();
var dim=$I$(11).getDefaultToolkit$().getScreenSize$();
var x=Math.max(this.tframe.getLocation$().x + this.systemInspectorX, 0);
x=Math.min(x, dim.width - this.systemInspector.getWidth$());
var y=Math.max(this.tframe.getLocation$().y + this.systemInspectorY, 0);
y=Math.min(y, dim.height - this.systemInspector.getHeight$());
this.systemInspector.setLocation$I$I(x, y);
this.systemInspectorX=-2147483648;
var runner=((P$.DynamicSystem$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystem$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystem'].systemInspector.setVisible$Z(true);
});
})()
), Clazz.new_(P$.DynamicSystem$1.$init$,[this, null]));
$I$(12).invokeLater$Runnable(runner);
}if (this.particles.length == 0) {
return;
}if (this.tp.getFrameNumber$() > this.getLastValidFrame$()) {
this.refreshSteps$S("DyamSys draw");
}for (var next, $next = 0, $$next = this.getModels$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next.drawMe$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, _g);
}
});

Clazz.newMeth(C$, 'initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (this.initialized) return;
var toAdd=Clazz.new_($I$(13,1));
var parts=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(4)));
for (var i=0; i < this.particleNames.length; i++) {
for (var p, $p = parts.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.getName$().equals$O(this.particleNames[i])) {
toAdd.add$O(p);
this.particleNames[i]=null;
}}
}
parts.clear$();
this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(toAdd.toArray$OA(Clazz.array($I$(4), [0])));
var empty=true;
for (var name, $name = 0, $$name = this.particleNames; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
empty=!!(empty&((name == null )));
}
if (empty) {
this.initialized=true;
this.particleNames=Clazz.array(String, [0]);
}});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
var buf=Clazz.new_([this.getName$()],$I$(14,1).c$$S);
buf.append$S(" (");
if (this.particles == null  || this.particles.length == 0 ) {
buf.append$S($I$(8).getString$S("DynamicSystem.Empty"));
} else {
for (var i=0; i < this.particles.length; i++) {
if (i > 0) buf.append$S(" + ");
buf.append$S(this.particles[i].getName$());
}
}buf.append$S(")");
return buf.toString();
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
this.systemInspectorItem=Clazz.new_([$I$(8).getString$S("DynamicSystem.MenuItem.Inspector")],$I$(15,1).c$$S);
this.systemInspectorItem.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystem$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystem$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var inspector=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystem'].getSystemInspector$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystem'], []);
inspector.updateDisplay$();
inspector.setVisible$Z(true);
});
})()
), Clazz.new_(P$.DynamicSystem$2.$init$,[this, null])));
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
menu.add$java_awt_Component$I(this.systemInspectorItem, 1);
return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
this.massField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'getMass$',  function () {
this.mass=0;
if (this.particles == null ) return this.mass;
for (var i=0; i < this.particles.length; i++) {
this.mass+=this.particles[i].getMass$();
}
return this.mass;
});

Clazz.newMeth(C$, 'isDependent$',  function () {
return true;
});

Clazz.newMeth(C$, 'addParticle$org_opensourcephysics_cabrillo_tracker_DynamicParticle',  function (particle) {
if (this.particles.length == 2) return false;
for (var next, $next = 0, $$next = this.particles; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next === particle ) return false;
}
var newParticles=Clazz.array($I$(4), [this.particles.length + 1]);
System.arraycopy$O$I$O$I$I(this.particles, 0, newParticles, 0, this.particles.length);
newParticles[this.particles.length]=particle;
return this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(newParticles);
});

Clazz.newMeth(C$, 'removeParticle$org_opensourcephysics_cabrillo_tracker_DynamicParticle',  function (particle) {
if (this.particles.length == 1 && this.particles[0] === particle  ) {
return this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(4), [0]));
}if (this.particles.length == 2) {
if (this.particles[0] === particle ) return this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(4), -1, [this.particles[1]]));
if (this.particles[1] === particle ) return this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(4), -1, [this.particles[0]]));
}return false;
});

Clazz.newMeth(C$, 'setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA',  function (newParticles) {
if (newParticles == null  || newParticles.length > 2 ) {
return false;
}for (var next, $next = 0, $$next = newParticles; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next == null ) {
return false;
}}
if (newParticles.length == 2) {
var problem=null;
if (newParticles[0].isBoostedBy$org_opensourcephysics_cabrillo_tracker_PointMass(newParticles[1])) {
problem=newParticles[0];
} else if (newParticles[1].isBoostedBy$org_opensourcephysics_cabrillo_tracker_PointMass(newParticles[0])) {
problem=newParticles[1];
}if (problem != null ) {
var message=$I$(8).getString$S("DynamicSystem.Dialog.RemoveBooster.Message1") + "\n" + $I$(8).getString$S("DynamicSystem.Dialog.RemoveBooster.Message2") + " " + problem.getName$() + "\n" + $I$(8).getString$S("DynamicSystem.Dialog.RemoveBooster.Message3") ;
var response=$I$(16,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.tframe, message, $I$(8).getString$S("DynamicSystem.Dialog.RemoveBooster.Title"), 2, 2]);
if (response == 0) {
problem.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(null);
} else return false;
}}for (var particle, $particle = 0, $$particle = this.particles; $particle<$$particle.length&&((particle=($$particle[$particle])),1);$particle++) {
var cleanMe=true;
for (var next, $next = 0, $$next = newParticles; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next === particle ) {
cleanMe=false;
}}
if (cleanMe) {
particle.system=null;
particle.inSystem=false;
particle.refreshInitialTime$();
particle.removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
particle.removeStepListener$java_beans_PropertyChangeListener(this);
particle.setLastValidFrame$I(-1);
particle.repaint$();
if (this.systemInspector != null ) {
particle.removeListenerNCF$java_beans_PropertyChangeListener(this.systemInspector);
}}}
this.particles=Clazz.array($I$(4), [newParticles.length]);
System.arraycopy$O$I$O$I$I(newParticles, 0, this.particles, 0, newParticles.length);
this.state=Clazz.array(Double.TYPE, [this.particles.length * 4 + 1]);
this.initialState=Clazz.array(Double.TYPE, [this.particles.length * 4 + 1]);
this.models=Clazz.array($I$(2), [0]);
if (this.systemInspector != null  && this.systemInspector.isVisible$() ) {
this.systemInspector.updateDisplay$();
}var n=this.myPoint=this.particles.length;
this.$points=Clazz.array($I$(17), [n + 1]);
this.$points[n]=Clazz.new_($I$(17,1));
for (var i=0; i < n; i++) {
this.$points[i]=Clazz.new_($I$(17,1));
this.particles[i].removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
this.particles[i].removeStepListener$java_beans_PropertyChangeListener(this);
this.particles[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
this.particles[i].addStepListener$java_beans_PropertyChangeListener(this);
this.particles[i].system=this;
this.particles[i].refreshInitialTime$();
if (this.systemInspector != null ) {
this.particles[i].removeListenerNCF$java_beans_PropertyChangeListener(this.systemInspector);
this.particles[i].addListenerNCF$java_beans_PropertyChangeListener(this.systemInspector);
}}
this.refreshSystemParameters$();
if (this.modelBuilder != null ) this.modelBuilder.refreshDropdown$S(null);
if (n == 0 && this.steps !== this.noSteps  ) {
this.steps=this.noSteps;
this.fireStepsChanged$();
} else if (n > 0 && this.steps !== this.realSteps  ) {
this.steps=this.realSteps;
this.fireStepsChanged$();
}this.setLastValidFrame$I(-1);
this.repaint$();
return true;
});

Clazz.newMeth(C$, 'delete$',  function () {
this.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(4), [0]));
C$.superclazz.prototype.delete$.apply(this, []);
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
rate[rate.length - 1]=1;
if (this.particles.length == 0) {
return;
}if (this.particles.length == 1) {
var particleState=this.getState$org_opensourcephysics_cabrillo_tracker_DynamicParticle(this.particles[0]);
this.particles[0].getXYForces$DA$DA(particleState, this.$temp);
var m=this.particles[0].getMass$();
rate[0]=state[1];
rate[1]=this.$temp[0] / m;
rate[2]=state[3];
rate[3]=this.$temp[1] / m;
return;
}var f=this.getFunctionEditor$().getMainFunctions$();
var polarState=this.getRelativePolarState$DA(state);
var cos=Math.cos(polarState[2]);
var sin=Math.sin(polarState[2]);
var fr=f[0].evaluate$DA(polarState);
var ftheta=f[1].evaluate$DA(polarState);
for (var i=0; i < this.particles.length; i++) {
var particleState=this.getState$org_opensourcephysics_cabrillo_tracker_DynamicParticle(this.particles[i]);
this.particles[i].getXYForces$DA$DA(particleState, this.$temp);
var m=this.particles[i].getMass$();
var sign=i == 0 ? 1 : -1;
rate[4 * i]=state[4 * i + 1];
rate[4 * i + 1]=(this.$temp[0] + sign * fr * cos  - sign * ftheta * sin ) / m;
rate[4 * i + 2]=state[4 * i + 3];
rate[4 * i + 3]=(this.$temp[1] + sign * fr * sin  + sign * ftheta * cos ) / m;
}
});

Clazz.newMeth(C$, 'getInitialValues$',  function () {
var state=null;
if (this.initialState.length != this.particles.length * 4 + 1) this.initialState=Clazz.array(Double.TYPE, [this.particles.length * 4 + 1]);
for (var i=0; i < this.particles.length; i++) {
state=this.particles[i].getInitialState$();
System.arraycopy$O$I$O$I$I(state, 0, this.initialState, 4 * i, 4);
}
if (state != null ) this.initialState[this.initialState.length - 1]=state[state.length - 1];
 else if (this.tp != null ) {
var t0=this.tp.getPlayer$().getVideoClip$().getStartTime$();
this.initialState[this.initialState.length - 1]=t0 / 1000;
}return this.initialState;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "transform":
var coords=this.tp.getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame")) {
var track=(coords).getOriginTrack$();
if (track === this  || (this.particles.length > 0 && track === this.particles[0]  )  || (this.particles.length > 1 && track === this.particles[1]  ) ) {
return;
}}this.setLastValidFrame$I(-1);
this.refreshSteps$S("DynSys.property change transform ");
break;
case "mass":
case "function":
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
this.refreshSystemParameters$();
if (this.tp != null ) $I$(18).repaintT$java_awt_Component(this.tp);
break;
case "name":
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
this.refreshSystemParameters$();
break;
default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
break;
}
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
if (this.systemInspector != null ) {
$I$(19).setFonts$O$I(this.systemInspector, level);
this.systemInspector.updateDisplay$();
}});

Clazz.newMeth(C$, 'getSystemInspector$',  function () {
if (this.systemInspector == null ) {
this.systemInspector=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_DynamicSystem,[this]);
this.systemInspector.setLocation$I$I(200, 200);
this.addListenerNCF$java_beans_PropertyChangeListener(this.systemInspector);
}return this.systemInspector;
});

Clazz.newMeth(C$, 'getInitialState$',  function () {
return this.getInitialValues$();
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, panel) {
if (this.refreshDataLater || panel == null   || data == null  ) return;
var count=25;
var panelID=panel.getID$();
var rotationData=this.getRotationData$();
var theta_data=rotationData[0];
var omega_data=rotationData[1];
var alpha_data=rotationData[2];
var player=panel.getPlayer$();
var clip=player.getVideoClip$();
var dt=player.getMeanStepDuration$() / 1000.0;
var coords=panel.getCoords$();
var stepArray=this.getSteps$();
var pt=0;
var len=stepArray.length;
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
this.dataFrames.clear$();
for (var i=0; i < len; i++) {
if (stepArray[i] == null  || !clip.includesFrame$I(i) ) continue;
var stepNumber=clip.frameToStep$I(i);
var t=player.getStepTime$I(stepNumber) / 1000.0;
var p=(stepArray[i]).getPosition$();
var wp=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(panel);
validData[0][pt]=wp.getX$();
validData[1][pt]=wp.getY$();
validData[2][pt]=wp.distance$D$D(0, 0);
validData[3][pt]=Math.atan2(wp.getY$(), wp.getX$());
validData[12][pt]=theta_data[i];
validData[13][pt]=omega_data[i] / dt;
validData[14][pt]=alpha_data[i] / (dt * dt);
validData[15][pt]=stepNumber;
validData[16][pt]=i;
var veloc=this.getVelocity$I$Integer(i, panelID);
if (veloc == null ) {
validData[4][pt]=NaN;
validData[5][pt]=NaN;
validData[6][pt]=NaN;
validData[7][pt]=NaN;
validData[17][pt]=NaN;
validData[18][pt]=NaN;
validData[19][pt]=NaN;
validData[20][pt]=NaN;
} else {
var imageX=veloc.getXComponent$();
var imageY=veloc.getYComponent$();
var x=validData[4][pt]=coords.imageToWorldXComponent$I$D$D(i, imageX, imageY) / dt;
var y=validData[5][pt]=coords.imageToWorldYComponent$I$D$D(i, imageX, imageY) / dt;
var r=validData[6][pt]=Math.sqrt(x * x + y * y);
var slope=validData[7][pt]=Math.atan2(y, x);
var mass=this.getMass$();
validData[17][pt]=mass * x;
validData[18][pt]=mass * y;
validData[19][pt]=mass * r;
validData[20][pt]=mass * slope;
}var accel=this.getAcceleration$I$Integer(i, panelID);
if (accel == null ) {
validData[8][pt]=NaN;
validData[9][pt]=NaN;
validData[10][pt]=NaN;
validData[11][pt]=NaN;
} else {
var imageX=accel.getXComponent$();
var imageY=accel.getYComponent$();
var x=validData[8][pt]=coords.imageToWorldXComponent$I$D$D(i, imageX, imageY) / (dt * dt);
var y=validData[9][pt]=coords.imageToWorldYComponent$I$D$D(i, imageX, imageY) / (dt * dt);
validData[10][pt]=Math.sqrt(x * x + y * y);
validData[11][pt]=Math.atan2(y, x);
}var relState;
if (this.particles.length == 2 && (relState=this.frameRelativeStates.get$O(Integer.valueOf$I(i))) != null  ) {
validData[21][pt]=relState[0];
validData[22][pt]=relState[2];
validData[23][pt]=relState[1];
validData[24][pt]=relState[3];
} else {
validData[21][pt]=NaN;
validData[22][pt]=NaN;
validData[23][pt]=NaN;
validData[24][pt]=NaN;
}validData[count][pt]=t;
this.dataFrames.add$O(Integer.valueOf$I(i));
++pt;
}
this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.$dataVariables, "PointMass.Data.Description.", validData, pt);
for (var i0=count - 3, i=i0; i < count; i++) {
this.dataDescriptions[i]=$I$(8,"getString$S",["DynamicSystem.Data.Description." + (i - i0)]);
}
var m=Double.valueOf$D(this.getMass$());
var desc=$I$(8).getString$S("ParticleModel.Parameter.Mass.Description");
data.setConstant$S$D$S$S("m", (m).valueOf(), m.toString(), desc);
});

Clazz.newMeth(C$, 'dispose$',  function () {
for (var i=0; i < this.particles.length; i++) {
this.particles[i].removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
this.particles[i].removeStepListener$java_beans_PropertyChangeListener(this);
this.particles[i].system=null;
}
C$.superclazz.prototype.dispose$.apply(this, []);
if (this.systemInspector != null ) this.systemInspector.dispose$();
});

Clazz.newMeth(C$, 'refreshInitialTime$',  function () {
C$.superclazz.prototype.refreshInitialTime$.apply(this, []);
for (var next, $next = 0, $$next = this.particles; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next.refreshInitialTime$();
}
});

Clazz.newMeth(C$, 'refreshSystemParameters$',  function () {
if (this.$refreshing) return;
this.$refreshing=true;
var polarState;
if (this.particles.length == 2) {
polarState=this.getRelativePolarState$DA(this.getInitialState$());
} else {
polarState=Clazz.array(Double.TYPE, -1, [0, 0, 0, 0, 0]);
}var zeroPosition=1.0E-12;
if (this.tp != null ) {
zeroPosition=0.001 / this.tp.getCoords$().getScaleX$I(0);
}var zeroVelocity=1.0E-11;
if (this.tp != null ) {
zeroVelocity=1000 * zeroPosition / this.tp.getPlayer$().getMeanStepDuration$();
}var zeroAngle=1.0E-5;
var zeroOmega=1.0E-4;
if (this.tp != null ) {
zeroOmega=1000 * zeroAngle / this.tp.getPlayer$().getMeanStepDuration$();
}var relative="_" + $I$(8).getString$S("DynamicSystem.Parameter.Name.Relative");
var particleNames=" ";
if (this.particles.length > 0) {
particleNames+=$I$(8).getString$S("DynamicSystem.Parameter.Of") + " ";
particleNames+=this.particles[0].getName$() + " ";
particleNames+=$I$(8).getString$S("DynamicSystem.Parameter.RelativeTo") + " ";
particleNames+=this.particles.length > 1 ? this.particles[1].getName$() : this.particles[0].getName$();
}var desc=$I$(8).getString$S("DynamicSystem.Parameter.Mass.Description");
this.getParamEditor$().setExpression$S$S$Z("m", String.valueOf$D(this.getMass$()), false);
this.getParamEditor$().setDescription$S$S("m", desc);
var m1=this.getParamEditor$().getObject$S("m1");
var m2=this.getParamEditor$().getObject$S("m2");
desc=$I$(8).getString$S("DynamicSystem.Parameter.ParticleMass.Description");
if (this.particles.length == 0) {
if (m1 != null ) {
m1.setNameEditable$Z(true);
m1.setExpressionEditable$Z(true);
this.getParamEditor$().removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(m1, false);
}if (m2 != null ) {
m2.setNameEditable$Z(true);
m2.setExpressionEditable$Z(true);
this.getParamEditor$().removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(m2, false);
}} else {
var value=$I$(21,"format$D$D",[this.particles[0].getMass$(), 0]);
if (m1 == null ) {
m1=p$1.createParameter$S$S$S.apply(this, ["m1", value, desc + " " + this.particles[0].getName$() ]);
this.getParamEditor$().addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z(m1, 1, false, false);
} else this.getParamEditor$().setExpression$S$S$Z("m1", value, false);
if (this.particles.length > 1) {
value=$I$(21,"format$D$D",[this.particles[1].getMass$(), 0]);
if (m2 == null ) {
m2=p$1.createParameter$S$S$S.apply(this, ["m2", value, desc + " " + this.particles[1].getName$() ]);
this.getParamEditor$().addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z(m2, 2, false, false);
} else this.getParamEditor$().setExpression$S$S$Z("m2", value, false);
} else {
if (m2 != null ) {
m2.setNameEditable$Z(true);
m2.setExpressionEditable$Z(true);
this.getParamEditor$().removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(m2, false);
}}}for (var particle, $particle = 0, $$particle = this.particles; $particle<$$particle.length&&((particle=($$particle[$particle])),1);$particle++) {
if (particle.modelBooster != null ) {
particle.modelBooster.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(particle.modelBooster.booster);
}}
var t=this.getInitEditor$().getObject$S("t");
var value=$I$(21).format$D$D(polarState[0], zeroPosition);
desc=$I$(8).getString$S("DynamicParticle.Parameter.InitialR.Description");
var r=p$1.createParameter$S$S$S.apply(this, ["r" + relative, value, desc + particleNames]);
value=$I$(21).format$D$D(polarState[2], zeroAngle);
desc=$I$(8).getString$S("DynamicParticle.Parameter.InitialTheta.Description");
var theta=p$1.createParameter$S$S$S.apply(this, [$I$(21).THETA + relative, value, desc + particleNames]);
value=$I$(21).format$D$D(polarState[1], zeroVelocity);
desc=$I$(8).getString$S("DynamicParticle.Parameter.InitialVelocityR.Description");
var vr=p$1.createParameter$S$S$S.apply(this, ["vr" + relative, value, desc + particleNames]);
value=$I$(21).format$D$D(polarState[3], zeroOmega);
desc=$I$(8).getString$S("DynamicParticle.Parameter.InitialOmega.Description");
var omega=p$1.createParameter$S$S$S.apply(this, [$I$(21).OMEGA + relative, value, desc + particleNames]);
this.getInitEditor$().setParameters$org_opensourcephysics_tools_ParameterA(Clazz.array($I$(22), -1, [t, r, theta, vr, omega]));
this.$refreshing=false;
});

Clazz.newMeth(C$, 'setTracePositions$DA',  function (state) {
var n=this.particles.length;
if (n == 0) {
return;
}var mass=0;
var xcm=0;
var ycm=0;
for (var i=0; i < n; i++) {
this.$points[i].setLocation$D$D(state[4 * i], state[4 * i + 2]);
var m=this.particles[i].getMass$();
mass+=m;
xcm+=m * state[4 * i];
ycm+=m * state[4 * i + 2];
}
this.$points[n].setLocation$D$D(xcm / mass, ycm / mass);
});

Clazz.newMeth(C$, 'initializeFunctionPanel$',  function () {
this.functionEditor=Clazz.new_($I$(23,1));
this.functionPanel=Clazz.new_($I$(24,1).c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_DynamicParticle,[this.functionEditor, this]);
var uf=Clazz.array($I$(25), [2]);
var funcVars=Clazz.array(String, -1, ["r", "vr", $I$(21).THETA, $I$(21).OMEGA, "t"]);
var internal=$I$(8).getString$S("DynamicSystem.Force.Name.Internal");
uf[0]=Clazz.new_(["fr_" + internal, funcVars, $I$(8).getString$S("DynamicSystem.ForceFunction.R.Description")],$I$(25,1).c$$S$SA$S);
uf[1]=Clazz.new_(["f" + $I$(21).THETA + "_" + internal , funcVars, $I$(8).getString$S("DynamicSystem.ForceFunction.Theta.Description")],$I$(25,1).c$$S$SA$S);
this.functionEditor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(uf);
this.createMassAndTimeParameters$();
});

Clazz.newMeth(C$, 'getSystemState$DA',  function (state) {
var mass=0;
for (var i=0; i < this.particleState.length; i++) {
this.particleState[i]=0;
}
this.particleState[4]=state[state.length - 1];
if (this.particles.length > 0) {
for (var i=0; i < this.particles.length; i++) {
var m=this.particles[i].getMass$();
mass+=m;
this.particleState[0]+=m * state[4 * i];
this.particleState[1]+=m * state[4 * i + 1];
this.particleState[2]+=m * state[4 * i + 2];
this.particleState[3]+=m * state[4 * i + 3];
}
this.particleState[0]/=mass;
this.particleState[1]/=mass;
this.particleState[2]/=mass;
this.particleState[3]/=mass;
}return this.particleState;
});

Clazz.newMeth(C$, 'getState$org_opensourcephysics_cabrillo_tracker_DynamicParticle',  function (particle) {
for (var i=0; i < this.particles.length; i++) {
if (this.particles[i] === particle ) {
this.particleState[0]=this.state[4 * i];
this.particleState[1]=this.state[4 * i + 1];
this.particleState[2]=this.state[4 * i + 2];
this.particleState[3]=this.state[4 * i + 3];
this.particleState[4]=this.state[this.state.length - 1];
return this.particleState;
}}
return null;
});

Clazz.newMeth(C$, 'getModels$',  function () {
if (this.models.length != this.particles.length + 1) {
this.models=Clazz.array($I$(2), [this.particles.length + 1]);
for (var i=0; i < this.models.length - 1; i++) {
this.models[i]=this.particles[i];
}
this.models[this.models.length - 1]=this;
}return this.models;
});

Clazz.newMeth(C$, 'getRelativePolarState$DA',  function (state) {
var polarState=Clazz.array(Double.TYPE, [5]);
var dx=state[0] - state[4];
var dy=state[2] - state[6];
var vx=state[1] - state[5];
var vy=state[3] - state[7];
var r=Math.sqrt(dx * dx + dy * dy);
var v=Math.sqrt(vx * vx + vy * vy);
var rang=Math.atan2(dy, dx);
var vang=Math.atan2(vy, vx);
var dang=vang - rang;
polarState[0]=r;
polarState[1]=r == 0  ? v : v * Math.cos(dang);
polarState[2]=r == 0  ? vang : rang;
polarState[3]=r == 0  ? 0 : v * Math.sin(dang) / r;
polarState[4]=state[8];
var toSave=Clazz.array(Double.TYPE, [polarState.length]);
System.arraycopy$O$I$O$I$I(polarState, 0, toSave, 0, polarState.length);
var frameNum=this.tp.getFrameNumber$();
this.frameRelativeStates.put$O$O(Integer.valueOf$I(frameNum), toSave);
return polarState;
});

Clazz.newMeth(C$, 'createParameter$S$S$S',  function (name, expression, description) {
var p=Clazz.new_($I$(22,1).c$$S$S,[name, expression]);
p.setExpressionEditable$Z(false);
p.setNameEditable$Z(false);
p.setDescription$S(description);
return p;
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(26,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$dataVariables=Clazz.array(String, -1, ["t", "x", "y", "r", "$\\theta$_{r}", "v_{x}", "v_{y}", "v", "$\\theta$_{v}", "a_{x}", "a_{y}", "a", "$\\theta$_{a}", "$\\theta$", "$\\omega$", "$\\alpha$", "step", "frame", "p_{x}", "p_{y}", "p", "$\\theta$_{p}", "r_{rel}", "$\\theta$_{rel}", "vr_{rel}", "$\\omega$_{rel}"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DynamicSystem, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var system=obj;
if (system.particles.length > 0) {
var names=Clazz.array(String, [system.particles.length]);
for (var i=0; i < names.length; i++) {
names[i]=system.particles[i].getName$();
}
control.setValue$S$O("particles", names);
}if (system.systemInspector != null  && system.systemInspector.isVisible$() ) {
var p=system.systemInspector.getLocation$();
var frame=system.tframe;
control.setValue$S$I("system_inspector_x", p.x - frame.getLocation$().x);
control.setValue$S$I("system_inspector_y", p.y - frame.getLocation$().y);
}$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var system=obj;
var names=control.getObject$S("particles");
if (names != null ) {
system.particleNames=names;
system.initialized=false;
}system.systemInspectorX=control.getInt$S("system_inspector_x");
system.systemInspectorY=control.getInt$S("system_inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
