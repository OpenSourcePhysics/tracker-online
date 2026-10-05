(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.ArrayList','org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.Vector','org.opensourcephysics.cabrillo.tracker.VectorSum','java.util.HashMap','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.LineFootprint','org.opensourcephysics.media.core.TPoint','javax.swing.JMenuItem',['org.opensourcephysics.cabrillo.tracker.VectorSum','.Loader'],'org.opensourcephysics.cabrillo.tracker.VectorSumInspector']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorSum", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.Vector');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vectorNames=Clazz.new_($I$(1,1));
this.tails=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['vectors','org.opensourcephysics.cabrillo.tracker.Vector[]','vectorNames','java.util.ArrayList','inspectorItem','javax.swing.JMenuItem','tails','java.util.Map','inspector','org.opensourcephysics.cabrillo.tracker.VectorSumInspector']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_cabrillo_tracker_VectorA.apply(this, [Clazz.array($I$(3), [0])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_VectorA',  function (vectors) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(6), -1, [Clazz.new_($I$(6,1).c$$I$I$I,[51, 204, 51])]);
this.setName$S($I$(7).getString$S("VectorSum.New.Name"));
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(8), -1, [$I$(9).getFootprint$S("Footprint.BoldArrow"), $I$(9).getFootprint$S("Footprint.Arrow"), $I$(9).getFootprint$S("Footprint.BigArrow")]));
this.defaultFootprint=this.getFootprint$();
var footprint=this.getFootprints$();
for (var i=0; i < footprint.length; i++) {
if (Clazz.instanceOf(footprint[i], "org.opensourcephysics.cabrillo.tracker.ArrowFootprint")) {
var arrow=footprint[i];
arrow.setDashArray$FA($I$(9).DASHED_LINE);
}}
this.vectors=vectors;
this.setColor$java_awt_Color(this.defaultColors[0]);
for (var i=0; i < vectors.length; i++) {
vectors[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
}
this.locked=true;
if (vectors.length == 0) this.hint=$I$(7).getString$S("VectorSum.Empty.Hint");
p$1.update.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
if (!this.initialized) this.initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
});

Clazz.newMeth(C$, 'initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.initialized) return;
for (var i=0, ni=this.vectorNames.size$(); i < ni; i++) {
var name=this.vectorNames.get$I(i);
var v=this.tp.getTrackByName$Class$S(Clazz.getClass($I$(3)), name);
if (v != null ) this.addVector$org_opensourcephysics_cabrillo_tracker_Vector(v);
}
this.vectorNames.clear$();
this.initialized=true;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.VectorStep.Handle")) {
this.hint=$I$(7).getString$S("Vector.Handle.Hint");
} else if (this.vectors.length == 0) {
this.hint=$I$(7).getString$S("CenterOfMass.Empty.Hint");
} else this.hint=null;
return ia;
});

Clazz.newMeth(C$, 'addVector$org_opensourcephysics_cabrillo_tracker_Vector',  function (vec) {
{
for (var i=0; i < this.vectors.length; i++) {
if (this.vectors[i] === vec ) return;
}
var newVectors=Clazz.array($I$(3), [this.vectors.length + 1]);
System.arraycopy$O$I$O$I$I(this.vectors, 0, newVectors, 0, this.vectors.length);
newVectors[this.vectors.length]=vec;
this.vectors=newVectors;
vec.addPropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
}p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'removeVector$org_opensourcephysics_cabrillo_tracker_Vector',  function (vec) {
{
for (var i=0; i < this.vectors.length; i++) if (this.vectors[i] === vec ) {
vec.removePropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
var newVectors=Clazz.array($I$(3), [this.vectors.length - 1]);
System.arraycopy$O$I$O$I$I(this.vectors, 0, newVectors, 0, i);
System.arraycopy$O$I$O$I$I(this.vectors, i + 1, newVectors, i, newVectors.length - i);
this.vectors=newVectors;
break;
}
}p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'getVectors$',  function () {
{
return this.vectors.clone$();
}});

Clazz.newMeth(C$, 'contains$org_opensourcephysics_cabrillo_tracker_Vector',  function (vec) {
{
for (var i=0; i < this.vectors.length; i++) {
if (this.vectors[i] === vec ) return true;
}
return false;
}});

Clazz.newMeth(C$, 'createStep$I$D$D$D$D',  function (n, x, y, xc, yc) {
if (this.isLocked$()) {
this.tails.put$O$O( new Integer(n), Clazz.new_($I$(10,1).c$$D$D,[x, y]));
p$1.update$I.apply(this, [n]);
return this.getStep$I(n);
}return C$.superclazz.prototype.createStep$I$D$D$D$D.apply(this, [n, x, y, xc, yc]);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
if (this.inspector != null  && this.inspector.isVisible$() ) {
this.inspector.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'setLocked$Z',  function (locked) {
});

Clazz.newMeth(C$, 'isStepComplete$I',  function (n) {
return true;
});

Clazz.newMeth(C$, 'isDependent$',  function () {
return true;
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
if (track.ttype == 9) this.removeVector$org_opensourcephysics_cabrillo_tracker_Vector(track);
}break;
case "step":
if (Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.cabrillo.tracker.Vector")) {
var n=(e.getNewValue$()).intValue$();
p$1.update$I.apply(this, [n]);
return;
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
for (var v, $v = 0, $$v = this.vectors; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
if (v != null ) {
v.removePropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
}}
this.vectors=Clazz.array($I$(3), [0]);
if (this.inspector != null ) this.inspector.dispose$();
});

Clazz.newMeth(C$, 'update',  function () {
var length=this.getSteps$().length;
for (var n=0; n < length; n++) p$1.update$I.apply(this, [n]);

}, p$1);

Clazz.newMeth(C$, 'update$I',  function (n) {
if (this.vectors.length == 0) {
this.locked=false;
var deletedStep=this.deleteStep$I(n);
if (deletedStep != null ) {
deletedStep.attach$org_opensourcephysics_media_core_TPoint(null);
this.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(deletedStep);
}this.locked=true;
return;
}var x=0;
var y=0;
for (var i=0; i < this.vectors.length; i++) {
var step=this.vectors[i].getStep$I(n);
if (step == null ) {
if (this.getStep$I(n) != null ) {
this.locked=false;
var deletedStep=this.deleteStep$I(n);
this.tails.put$O$O( new Integer(n), deletedStep.getTail$());
deletedStep.attach$org_opensourcephysics_media_core_TPoint(null);
this.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(deletedStep);
this.locked=true;
}return;
}x+=step.getXComponent$();
y+=step.getYComponent$();
}
var step=this.getStep$I(n);
if (step == null ) {
this.locked=false;
var newStep=null;
var i= new Integer(n);
var tail=this.tails.get$O(i);
if (tail != null ) {
newStep=this.createStep$I$D$D$D$D(n, tail.getX$(), tail.getY$(), x, y);
this.tails.remove$O(i);
} else {
newStep=this.createStep$I$D$D$D$D(n, 0, 0, x, y);
newStep.attach$org_opensourcephysics_media_core_TPoint(this.tp.getSnapPoint$());
}newStep.setTipEnabled$Z(false);
newStep.setDefaultPointIndex$I(2);
this.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(newStep);
this.locked=true;
} else {
this.locked=false;
step.setXYComponents$D$D(x, y);
this.locked=true;
}}, p$1);

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
this.inspectorItem=Clazz.new_([$I$(7).getString$S("VectorSum.MenuItem.Inspector")],$I$(11,1).c$$S);
this.inspectorItem.addActionListener$java_awt_event_ActionListener(((P$.VectorSum$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorSum$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var inspector=this.b$['org.opensourcephysics.cabrillo.tracker.VectorSum'].getInspector$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorSum'], []);
inspector.updateDisplay$();
inspector.setVisible$Z(true);
});
})()
), Clazz.new_(P$.VectorSum$1.$init$,[this, null])));
return this.assembleMenu$javax_swing_JMenu$javax_swing_JMenuItem(C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]), this.inspectorItem);
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, point]);
this.xField.setEnabled$Z(false);
this.yField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(7).getString$S("VectorSum.Name") + " \"" + this.name + "\"" ;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'getInspector$',  function () {
if (this.inspector == null ) {
this.inspector=Clazz.new_($I$(13,1).c$$org_opensourcephysics_cabrillo_tracker_VectorSum,[this]);
this.inspector.setLocation$I$I(200, 200);
}return this.inspector;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.VectorSum, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var sum=obj;
var list=Clazz.new_($I$(1,1));
var vectors=sum.getVectors$();
for (var i=0; i < vectors.length; i++) {
list.add$O(vectors[i].getName$());
}
control.setValue$S$O("vectors", list);
$I$(2,"getLoader$Class",[Clazz.getClass($I$(3))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var sum=obj;
$I$(2,"getLoader$Class",[Clazz.getClass($I$(3))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var names=Clazz.getClass($I$(1)).cast$O(control.getObject$S("vectors"));
var it=names.iterator$();
while (it.hasNext$()){
sum.vectorNames.add$O(it.next$().toString());
}
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
