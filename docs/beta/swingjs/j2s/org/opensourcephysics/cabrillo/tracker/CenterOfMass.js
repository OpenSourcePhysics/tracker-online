(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.ArrayList','org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.CenterOfMass','java.util.Collection','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','org.opensourcephysics.cabrillo.tracker.PositionStep','javax.swing.JMenuItem',['org.opensourcephysics.cabrillo.tracker.CenterOfMass','.Loader'],'org.opensourcephysics.cabrillo.tracker.CenterOfMassInspector']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CenterOfMass", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.PointMass');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.massNames=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['masses','org.opensourcephysics.cabrillo.tracker.PointMass[]','massNames','java.util.ArrayList','inspectorItem','javax.swing.JMenuItem','inspector','org.opensourcephysics.cabrillo.tracker.CenterOfMassInspector']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_cabrillo_tracker_PointMassA.apply(this, [Clazz.array($I$(3), [0])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PointMassA',  function (masses) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(6), -1, [Clazz.new_($I$(6,1).c$$I$I$I,[51, 204, 51])]);
this.massField.setMinValue$D(0);
this.setName$S($I$(7).getString$S("CenterOfMass.New.Name"));
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(8), -1, [$I$(9).getFootprint$S("Footprint.Spot"), $I$(9).getFootprint$S("Footprint.SolidDiamond"), $I$(9).getFootprint$S("Footprint.SolidTriangle"), $I$(9).getFootprint$S("Footprint.SolidCircle"), $I$(9).getFootprint$S("Footprint.BoldVerticalLine"), $I$(9).getFootprint$S("Footprint.BoldHorizontalLine"), $I$(9).getFootprint$S("Footprint.BoldPositionVector")]));
this.defaultFootprint=this.getFootprint$();
this.masses=masses;
this.setColor$java_awt_Color(this.defaultColors[0]);
for (var i=0; i < masses.length; i++) {
masses[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
masses[i].addStepListener$java_beans_PropertyChangeListener(this);
}
this.locked=true;
if (masses.length == 0) this.hint=$I$(7).getString$S("CenterOfMass.Empty.Hint");
p$1.update.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (!this.initialized && Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel") ) this.initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
});

Clazz.newMeth(C$, 'initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.initialized) return;
panel=panel.getMainPanel$();
var isChanged=panel.changed;
var masses=panel.getDrawablesTemp$Class(Clazz.getClass($I$(3)));
for (var i=0, n=this.massNames.size$(); i < n; i++) {
var name=this.massNames.get$I(i);
for (var m=0, nm=masses.size$(); m < nm; m++) {
var mass=masses.get$I(m);
if (mass.getName$().equals$O(name)) this.addMass$org_opensourcephysics_cabrillo_tracker_PointMass(mass);
}
}
masses.clear$();
this.massNames.clear$();
panel.changed=isChanged;
this.initialized=true;
});

Clazz.newMeth(C$, 'addMass$org_opensourcephysics_cabrillo_tracker_PointMass',  function (m) {
{
for (var i=0; i < this.masses.length; i++) {
if (this.masses[i] === m ) return;
}
var newMasses=Clazz.array($I$(3), [this.masses.length + 1]);
System.arraycopy$O$I$O$I$I(this.masses, 0, newMasses, 0, this.masses.length);
newMasses[this.masses.length]=m;
this.masses=newMasses;
m.addPropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
m.addStepListener$java_beans_PropertyChangeListener(this);
}p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'removeMass$org_opensourcephysics_cabrillo_tracker_PointMass',  function (m) {
{
for (var i=0; i < this.masses.length; i++) if (this.masses[i] === m ) {
m.removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
m.removeStepListener$java_beans_PropertyChangeListener(this);
var newMasses=Clazz.array($I$(3), [this.masses.length - 1]);
System.arraycopy$O$I$O$I$I(this.masses, 0, newMasses, 0, i);
System.arraycopy$O$I$O$I$I(this.masses, i + 1, newMasses, i, newMasses.length - i);
this.masses=newMasses;
break;
}
}p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'getMasses$',  function () {
{
return this.masses.clone$();
}});

Clazz.newMeth(C$, 'containsMass$org_opensourcephysics_cabrillo_tracker_PointMass',  function (m) {
{
for (var i=0; i < this.masses.length; i++) {
if (this.masses[i] === m ) return true;
}
return false;
}});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.PositionStep.Position")) {
this.hint=$I$(7).getString$S("PointMass.Position.Locked.Hint");
} else if (this.masses.length == 0) {
this.hint=$I$(7).getString$S("CenterOfMass.Empty.Hint");
} else this.hint=null;
return ia;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
if (this.inspector != null  && this.inspector.isVisible$() ) {
this.inspector.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
});

Clazz.newMeth(C$, 'setMass$D',  function (mass) {
});

Clazz.newMeth(C$, 'isStepComplete$I',  function (n) {
return true;
});

Clazz.newMeth(C$, 'isDependent$',  function () {
return true;
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return false;
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "track":
if (e.getOldValue$() != null ) {
var track=e.getOldValue$();
if (track.ttype == 5) this.removeMass$org_opensourcephysics_cabrillo_tracker_PointMass(track);
}break;
default:
if (Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.cabrillo.tracker.PointMass")) {
switch (e.getPropertyName$()) {
case "mass":
p$1.update.apply(this, []);
break;
case "step":
var n=(e.getNewValue$()).intValue$();
p$1.update$I$Z.apply(this, [n, true]);
break;
case "steps":
p$1.update.apply(this, []);
break;
}
return;
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
for (var i=0, n=this.masses.length; i < n; i++) {
var m=this.masses[i];
if (m != null ) {
m.removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this);
m.removeStepListener$java_beans_PropertyChangeListener(this);
}}
this.masses=Clazz.array($I$(3), [0]);
if (this.inspector != null ) this.inspector.dispose$();
});

Clazz.newMeth(C$, 'update',  function () {
this.mass=0;
var length=this.getSteps$().length;
for (var i=0; i < this.masses.length; i++) {
this.mass+=this.masses[i].getMass$();
length=Math.max(length, this.masses[i].getSteps$().length);
}
for (var n=0; n < length; n++) p$1.update$I$Z.apply(this, [n, false]);

this.updateDerivatives$();
this.fireStepsChanged$();
if (this.inspector != null  && this.inspector.isVisible$() ) {
this.inspector.updateDisplay$();
}this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'update$I$Z',  function (n, firePropertyChange) {
if (this.mass == 0 ) {
if (firePropertyChange) {
this.locked=false;
this.deleteStep$I(n);
} else {
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
}this.locked=true;
return;
}var x=0;
var y=0;
for (var i=0; i < this.masses.length; i++) {
var step=this.masses[i].getStep$I(n);
if (step == null  || !step.valid ) {
if (this.getStep$I(n) != null ) {
if (firePropertyChange) {
this.locked=false;
var deletedStep=this.deleteStep$I(n);
this.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(deletedStep);
} else {
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
}this.locked=true;
}return;
}var m=this.masses[i].getMass$();
x+=m * step.getPosition$().getX$();
y+=m * step.getPosition$().getY$();
}
x/=this.mass;
y/=this.mass;
var cmStep=this.getStep$I(n);
if (cmStep == null ) {
if (firePropertyChange) {
this.locked=false;
cmStep=this.createStep$I$D$D(n, x, y);
this.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(cmStep);
} else {
cmStep=Clazz.new_($I$(10,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[this, n, x, y]);
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, cmStep);
cmStep.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
}} else {
if (firePropertyChange) {
this.locked=false;
cmStep.getPosition$().setXY$D$D(x, y);
} else {
this.points[0].setLocation$D$D(x, y);
cmStep.getPosition$().setPosition$java_awt_geom_Point2D_Double(this.points[0]);
}}this.locked=true;
}, p$1);

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
this.inspectorItem=Clazz.new_([$I$(7).getString$S("CenterOfMass.MenuItem.Inspector")],$I$(11,1).c$$S);
this.inspectorItem.addActionListener$java_awt_event_ActionListener(((P$.CenterOfMass$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CenterOfMass$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var inspector=this.b$['org.opensourcephysics.cabrillo.tracker.CenterOfMass'].getInspector$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CenterOfMass'], []);
inspector.updateDisplay$();
inspector.setVisible$Z(true);
});
})()
), Clazz.new_(P$.CenterOfMass$1.$init$,[this, null])));
return this.assembleMenu$javax_swing_JMenu$javax_swing_JMenuItem(C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]), this.inspectorItem);
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
this.massField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, point]);
this.xField.setEnabled$Z(false);
this.yField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(7).getString$S("CenterOfMass.Name");
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'getInspector$',  function () {
if (this.inspector == null ) {
this.inspector=Clazz.new_($I$(13,1).c$$org_opensourcephysics_cabrillo_tracker_CenterOfMass,[this]);
this.inspector.setLocation$I$I(200, 200);
}return this.inspector;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CenterOfMass, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cm=obj;
var list=Clazz.new_($I$(1,1));
var masses=cm.getMasses$();
for (var i=0; i < masses.length; i++) {
list.add$O(masses[i].getName$());
}
control.setValue$S$O("masses", list);
$I$(2,"getLoader$Class",[Clazz.getClass($I$(3))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cm=obj;
$I$(2,"getLoader$Class",[Clazz.getClass($I$(3))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var names=Clazz.getClass($I$(5),['add$O','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$OA','toArray$java_util_function_IntFunction']).cast$O(control.getObject$S("masses"));
var it=names.iterator$();
while (it.hasNext$()){
cm.massNames.add$O(it.next$());
cm.initialized=false;
}
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
