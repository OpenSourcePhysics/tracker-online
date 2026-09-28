(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'javax.swing.JMenuItem','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.media.core.TPoint',['org.opensourcephysics.cabrillo.tracker.FilteredPointMass','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FilteredPointMass", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.PointMass', 'java.beans.PropertyChangeListener');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sourceName="";
this.isOpen=false;
},1);

C$.$fields$=[['Z',['isOpen'],'D',['rmsDevX','rmsDevY'],'I',['sourceID'],'S',['sourceName'],'O',['$filter','org.opensourcephysics.cabrillo.tracker.MotionFilter','motionFilterItem','javax.swing.JMenuItem','+closeItem']]
,['O',['panelEventsParticleModel','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PointMass$org_opensourcephysics_cabrillo_tracker_MotionFilter',  function (pointMass, motionFilter) {
;C$.superclazz.c$$D.apply(this,[pointMass.getMass$()]);C$.$init$.apply(this);
this.sourceID=pointMass.getID$();
this.$filter=motionFilter;
pointMass.addPropertyChangeListenerSafely$java_beans_PropertyChangeListener(this);
this.setColor$java_awt_Color(pointMass.getColor$().darker$());
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
C$.superclazz.prototype.createGUI$.apply(this, []);
this.motionFilterItem=Clazz.new_($I$(1,1));
this.motionFilterItem.addActionListener$java_awt_event_ActionListener(((P$.FilteredPointMass$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FilteredPointMass$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var source=$I$(2).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.FilteredPointMass'].sourceID);
if (source == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.FilteredPointMass'].refreshPositions$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.FilteredPointMass'], [false]);
var dialog=source.tp.getFilterDialog$();
dialog.setTargetMass$org_opensourcephysics_cabrillo_tracker_FilteredPointMass(this.b$['org.opensourcephysics.cabrillo.tracker.FilteredPointMass']);
$I$(3,"setFonts$O$I",[dialog, $I$(3).getLevel$()]);
dialog.pack$();
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.FilteredPointMass$1.$init$,[this, null])));
this.closeItem=Clazz.new_($I$(1,1));
this.closeItem.addActionListener$java_awt_event_ActionListener(((P$.FilteredPointMass$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FilteredPointMass$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var source=$I$(2).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.FilteredPointMass'].sourceID);
if (source == null  || source.tp == null  ) return;
var dialog=source.tp.getFilterDialog$();
dialog.setVisible$Z(false);
source.tp.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.FilteredPointMass']);
});
})()
), Clazz.new_(P$.FilteredPointMass$2.$init$,[this, null])));
});

Clazz.newMeth(C$, 'setMotionFilter$org_opensourcephysics_cabrillo_tracker_MotionFilter',  function (motionFilter) {
this.$filter=motionFilter;
var source=$I$(2).getTrack$I(this.sourceID);
if (source != null ) {
source.filter=this.$filter;
if (source.tp != null ) {
source.tp.changed=true;
}}this.refreshPositions$Z(true);
this.repaint$();
this.refreshDataLater=false;
this.updateDerivatives$();
this.fireStepsChanged$();
});

Clazz.newMeth(C$, 'getMotionFilter$',  function () {
return this.$filter;
});

Clazz.newMeth(C$, 'isDependent$',  function () {
return true;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.removePanelEvents$SA(C$.panelEventsParticleModel);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.addPanelEvents$SA(C$.panelEventsParticleModel);
}});

Clazz.newMeth(C$, 'delete$',  function () {
this.isOpen=this.isOpen$();
var source=$I$(2).getTrack$I(this.sourceID);
if (source == null ) return;
source.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.removePanelEvents$SA(C$.panelEventsParticleModel);
this.delete$Z(false);
});

Clazz.newMeth(C$, 'getName$',  function () {
var source=$I$(2).getTrack$I(this.sourceID);
if (source != null ) this.sourceName=source.getName$();
this.name=$I$(4).getString$S("FilteredPointMass.Name.Prefix") + " " + this.sourceName ;
return this.name;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (panel, point) {
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [panel, point]);
this.xField.setEnabled$Z(false);
this.yField.setEnabled$Z(false);
this.magField.setEnabled$Z(false);
this.angleField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
this.massField.setEnabled$Z(false);
return list;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (panel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [panel, menu0]);
menu.remove$javax_swing_JMenuItem(this.dataBuilderItem);
menu.remove$javax_swing_JMenuItem(this.nameItem);
menu.remove$javax_swing_JMenuItem(this.descriptionItem);
menu.remove$javax_swing_JMenuItem(this.autoAdvanceItem);
menu.remove$javax_swing_JMenuItem(this.markByDefaultItem);
menu.remove$javax_swing_JMenuItem(this.lockedItem);
menu.remove$javax_swing_JMenuItem(this.deleteStepItem);
menu.remove$javax_swing_JMenuItem(this.clearStepsItem);
menu.remove$javax_swing_JMenuItem(this.showFilteredItem);
menu.remove$javax_swing_JMenuItem(this.deleteTrackItem);
this.motionFilterItem.setText$S($I$(4).getString$S("FilteredPointMass.MenuItem.SetFilter.Text"));
menu.insert$javax_swing_JMenuItem$I(this.motionFilterItem, 0);
menu.insertSeparator$I(1);
this.closeItem.setText$S($I$(4).getString$S("FilteredPointMass.MenuItem.Close.Text"));
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.closeItem);
var doAgain=true;
while (doAgain){
doAgain=false;
var isSeparator=false;
var i=menu.getItemCount$() - 1;
for (; i >= 0; i--) {
var next=menu.getMenuComponent$I(i);
if (Clazz.instanceOf(next, "javax.swing.JMenuItem")) {
isSeparator=false;
continue;
}if (isSeparator) {
doAgain=true;
menu.remove$java_awt_Component(menu.getMenuComponent$I(i));
break;
}isSeparator=true;
}
}
return menu;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (!this.isOpen$()) return;
var prop=e.getPropertyName$();
if (prop.equals$O("step") || prop.equals$O("steps") ) {
this.refreshPositions$Z(true);
this.repaint$();
this.refreshDataLater=false;
this.updateDerivatives$();
this.fireStepsChanged$();
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
var refresh=true;
switch (prop) {
case "transform":
refresh=e.getNewValue$() != null ;
case "startframe":
case "stepcount":
case "stepsize":
if (refresh) {
this.refreshPositions$Z(true);
this.refreshDataLater=false;
this.updateDerivatives$();
this.fireStepsChanged$();
}}
});

Clazz.newMeth(C$, 'isOpen$',  function () {
var source=$I$(2).getTrack$I(this.sourceID);
if (source == null  || source.tp == null  ) return false;
return this.isOpen || source.tp.getTrack$S(this.getName$()) != null  ;
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'refreshPositions$Z',  function (full) {
if (!this.isOpen$()) return;
var source=$I$(2).getTrack$I(this.sourceID);
if (source == null  || source.tp == null   || this.steps == null  ) return;
var clip=source.tp.getPlayer$().getVideoClip$();
var stepArray=source.getSteps$();
var len=stepArray.length;
var stepCount=clip.getStepCount$();
var dataX=Clazz.array(Double.TYPE, [stepCount]);
var dataY=Clazz.array(Double.TYPE, [stepCount]);
var valid=Clazz.array(Boolean.TYPE, [stepCount]);
for (var i=0; i < len; i++) {
if (!clip.includesFrame$I(i)) continue;
if (i >= stepArray.length) break;
var n=clip.frameToStep$I(i);
var curStep=stepArray[i];
valid[n]=curStep != null  ? true : false;
if (curStep != null ) {
var p=curStep.getPosition$();
var wp=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(source.tp);
dataX[n]=wp.getX$();
dataY[n]=wp.getY$();
if (Double.isNaN$D(dataX[n]) || Double.isNaN$D(dataY[n]) ) {
valid[n]=false;
}}}
var filteredX=this.$filter == null  ? dataX : this.$filter.apply$DA$ZA(dataX, valid);
var filteredY=this.$filter == null  ? dataY : this.$filter.apply$DA$ZA(dataY, valid);
var sumOfSquaresX=0;
var sumOfSquaresY=0;
var dev=0;
var count=0;
for (var n=0; n < filteredX.length; n++) {
if (!valid[n]) continue;
++count;
dev=filteredX[n] - dataX[n];
sumOfSquaresX+=dev * dev;
dev=filteredY[n] - dataY[n];
sumOfSquaresY+=dev * dev;
}
this.rmsDevX=count == 0 ? 0 : Math.sqrt(sumOfSquaresX / count);
this.rmsDevY=count == 0 ? 0 : Math.sqrt(sumOfSquaresY / count);
if (full) {
this.loading=true;
this.steps.setLength$I(len);
var mySteps=this.getSteps$();
var p=Clazz.new_($I$(5,1));
for (var i=0; i < stepCount; i++) {
var frame=clip.stepToFrame$I(i);
if (frame >= mySteps.length) break;
var myStep=mySteps[frame];
if (valid[i]) {
p.setWorldPosition$D$D$org_opensourcephysics_media_core_VideoPanel$I(filteredX[i], filteredY[i], source.tp, frame);
if (myStep == null ) {
myStep=this.createStep$I$D$D(frame, p.x, p.y);
} else {
myStep.getPosition$().setPosition$java_awt_geom_Point2D_Double(p);
}} else {
mySteps[frame]=null;
}}
}this.loading=false;
this.refreshDataLater=false;
this.dataValid=false;
this.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
});

Clazz.newMeth(C$, 'getRMSDev$',  function () {
return Math.sqrt(this.rmsDevX * this.rmsDevX + this.rmsDevY * this.rmsDevY);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.panelEventsParticleModel=Clazz.array(String, -1, ["startframe", "stepcount"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FilteredPointMass, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
