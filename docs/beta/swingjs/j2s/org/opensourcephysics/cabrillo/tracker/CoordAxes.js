(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.CoordAxes','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Tracker','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','org.opensourcephysics.cabrillo.tracker.CoordAxesStep','java.awt.event.FocusAdapter','javax.swing.JLabel','javax.swing.AbstractAction','org.opensourcephysics.cabrillo.tracker.WorldGrid','javax.swing.Box','java.awt.Dimension','javax.swing.JCheckBox','javax.swing.BorderFactory','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.display.OSPRuntime','javax.swing.JSlider','javax.swing.JOptionPane','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TButton',['org.opensourcephysics.cabrillo.tracker.CoordAxes','.OriginPoint'],['org.opensourcephysics.cabrillo.tracker.CoordAxes','.AnglePoint'],'org.opensourcephysics.media.core.NumberField',['org.opensourcephysics.cabrillo.tracker.CoordAxes','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoordAxes", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack');
C$.$classes$=[['AnglePoint',4],['OriginPoint',4],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.notyetShown=true;
},1);

C$.$fields$=[['Z',['notyetShown','gridVisible'],'O',['originLabel','javax.swing.JLabel','grid','org.opensourcephysics.cabrillo.tracker.WorldGrid','gridCheckbox','javax.swing.JCheckBox','gridButton','org.opensourcephysics.cabrillo.tracker.TButton','gridSeparator','java.awt.Component']]
,['O',['gridOptionsIcon','javax.swing.Icon','dataVariables','String[]','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getFormatVariables$',  function () {
return C$.formatVariables;
});

Clazz.newMeth(C$, 'getFormatMap$',  function () {
return C$.formatMap;
});

Clazz.newMeth(C$, 'getFormatDescMap$',  function () {
return C$.formatDescriptionMap;
});

Clazz.newMeth(C$, 'getBaseType$',  function () {
return "CoordAxes";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
return "P";
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[2]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(4), -1, [Clazz.new_($I$(4,1).c$$I$I$I,[200, 0, 200])]);
this.setName$S($I$(7).getString$S("CoordAxes.New.Name"));
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(8), -1, [$I$(9).getFootprint$S("Footprint.BoldSimpleAxes"), $I$(9).getFootprint$S("Footprint.SimpleAxes")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.setViewable$Z(false);
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("CoordAxes.Hint");
var step=Clazz.new_($I$(10,1).c$$org_opensourcephysics_cabrillo_tracker_CoordAxes$I,[this, 0]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(0, step);
this.angleField.addActionListener$java_awt_event_ActionListener(((P$.CoordAxes$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp == null ) return;
var theta=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].angleField.getValue$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'], [n]);
var origin=step.getOrigin$();
var handle=step.getHandle$();
var d=origin.distance$java_awt_geom_Point2D(handle);
var x=origin.getX$() + d * Math.cos(theta);
var y=origin.getY$() - d * Math.sin(theta);
handle.setXY$D$D(x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].angleField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getCoords$().getAngle$I(n));
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].angleField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.CoordAxes$1.$init$,[this, null])));
this.angleField.addFocusListener$java_awt_event_FocusListener(((P$.CoordAxes$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp == null ) return;
var theta=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].angleField.getValue$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'], [n]);
var origin=step.getOrigin$();
var handle=step.getHandle$();
var d=origin.distance$java_awt_geom_Point2D(handle);
var x=origin.getX$() + d * Math.cos(theta);
var y=origin.getY$() - d * Math.sin(theta);
handle.setXY$D$D(x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].angleField.setValue$D(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getCoords$().getAngle$I(n));
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.CoordAxes$2)));
this.originLabel=Clazz.new_($I$(12,1));
var setOriginAction=((P$.CoordAxes$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp == null ) return;
var x=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].xField.getValue$();
var y=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].yField.getValue$();
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getCoords$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getFrameNumber$();
coords.setOriginXY$I$D$D(n, x, y);
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].xField.setValue$D(coords.getOriginX$I(n));
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].yField.setValue$D(coords.getOriginY$I(n));
var step=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'], [n]);
var handle=step.getHandle$();
if (handle === this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getSelectedPoint$() ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.selectedSteps.clear$();
}});
})()
), Clazz.new_($I$(13,1),[this, null],P$.CoordAxes$3));
this.xField.addActionListener$java_awt_event_ActionListener(setOriginAction);
this.yField.addActionListener$java_awt_event_ActionListener(setOriginAction);
this.xField.addFocusListener$java_awt_event_FocusListener(((P$.CoordAxes$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.setOriginAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(11,1),[this, {setOriginAction:setOriginAction}],P$.CoordAxes$4)));
this.yField.addFocusListener$java_awt_event_FocusListener(((P$.CoordAxes$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.setOriginAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(11,1),[this, {setOriginAction:setOriginAction}],P$.CoordAxes$5)));
this.grid=Clazz.new_($I$(14,1));
this.grid.setVisible$Z(this.gridVisible);
this.gridSeparator=$I$(15,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(16,1).c$$I$I,[4, 4])]);
this.gridCheckbox=Clazz.new_($I$(17,1));
this.gridCheckbox.setBorder$javax_swing_border_Border($I$(18).createEmptyBorder$());
this.gridCheckbox.setOpaque$Z(false);
this.gridCheckbox.addActionListener$java_awt_event_ActionListener(((P$.CoordAxes$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].setGridVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'], [this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].gridCheckbox.isSelected$()]);
});
})()
), Clazz.new_(P$.CoordAxes$6.$init$,[this, null])));
this.gridButton=((P$.CoordAxes$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getTrackBar$Z(true).toolbarComponentHeight;
return dim;
});

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(19,1));
var colorItem=Clazz.new_([$I$(7).getString$S("CoordAxes.MenuItem.GridColor")],$I$(20,1).c$$S);
colorItem.addActionListener$java_awt_event_ActionListener(((P$.CoordAxes$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.isVisible$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].gridCheckbox.doClick$I(0);
}var color=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.getColor$();
$I$(21,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[color, $I$(7).getString$S("CoordAxes.Dialog.GridColor.Title"), ((P$.CoordAxes$7$1$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CoordAxes$7$1$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor !== this.$finals$.color ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid, [newColor]);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaintAll$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
}});
})()
), Clazz.new_(P$.CoordAxes$7$1$lambda1.$init$,[this, {color:color}]))]);
});
})()
), Clazz.new_(P$.CoordAxes$7$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(colorItem);
var transparencyItem=Clazz.new_([$I$(7).getString$S("CoordAxes.MenuItem.GridOpacity")],$I$(20,1).c$$S);
transparencyItem.addActionListener$java_awt_event_ActionListener(((P$.CoordAxes$7$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$7$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.isVisible$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].gridCheckbox.doClick$I(0);
}var alpha=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.getAlpha$();
var slider=Clazz.new_($I$(22,1).c$$I$I$I,[0, 255, alpha]);
slider.setMaximum$I(255);
slider.setMinimum$I(0);
slider.setBorder$javax_swing_border_Border($I$(18).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
slider.addChangeListener$javax_swing_event_ChangeListener(((P$.CoordAxes$7$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoordAxes$7$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.setAlpha$I(this.$finals$.slider.getValue$());
for (var i=0; i < this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.andWorld.size$(); i++) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].panel$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.andWorld.get$I(i)]).repaint$();
}
});
})()
), Clazz.new_(P$.CoordAxes$7$2$1.$init$,[this, {slider:slider}])));
var response=$I$(23,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp, slider, $I$(7).getString$S("CoordAxes.Dialog.GridOpacity.Title"), 2, -1]);
if (response == 2) {
this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].grid.setAlpha$I(alpha);
for (var i=0; i < this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.andWorld.size$(); i++) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].panel$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.andWorld.get$I(i)]).repaint$();
}
}});
})()
), Clazz.new_(P$.CoordAxes$7$2.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(transparencyItem);
$I$(24,"setFonts$O$I",[popup, $I$(24).getLevel$()]);
return popup;
});
})()
), Clazz.new_($I$(25,1).c$$javax_swing_Icon,[this, null, C$.gridOptionsIcon],P$.CoordAxes$7));
}, 1);

Clazz.newMeth(C$, 'getOrigin$',  function () {
return (this.getStep$I(0)).getOrigin$();
});

Clazz.newMeth(C$, 'isLocked$',  function () {
var locked=C$.superclazz.prototype.isLocked$.apply(this, []);
if (this.tp != null ) {
locked=locked || this.tp.getCoords$().isLocked$() ;
}return locked;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
if (visible) {
this.notyetShown=false;
if (this.grid != null ) this.grid.setVisible$Z(this.gridVisible);
if (this.tp != null  && this.tp.autoTracker != null   && this.tp.autoTracker.getTrack$() == null  ) {
this.tp.autoTracker.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(this);
}} else if (this.grid != null ) {
this.grid.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'setGridVisible$Z',  function (visible) {
if (this.gridVisible == visible ) return;
this.gridVisible=visible;
this.grid.setVisible$Z(this.gridVisible);
this.gridCheckbox.setSelected$Z(this.gridVisible);
if (this.tp != null ) {
this.repaintAll$();
}});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
var step=this.getStep$I(0);
if (Clazz.instanceOf(this.tp.getSelectedPoint$(), "org.opensourcephysics.cabrillo.tracker.CoordAxesStep.Handle")) {
(step).getHandle$().setXY$D$D(x, y);
;} else (step).getOrigin$().setXY$D$D(x, y);
return step;
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
var step=this.steps.getStep$I(0);
step.erase$();
return step;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(10).getLength$();
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'isAutoTrackable$I',  function (pointIndex) {
return true;
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
if (pointIndex == 0) {
return $I$(7).getString$S("CoordAxes.Origin.Name");
}return $I$(7).getString$S("CoordAxes.Handle.Name");
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
var coords=this.tp.getCoords$();
if (this.getTargetIndex$() == 0) {
if (coords.isFixedOrigin$()) {
coords.setFixedOrigin$Z(false);
}this.getOrigin$().setXY$D$D(x, y);
} else {
if (coords.isFixedAngle$()) {
coords.setFixedAngle$Z(false);
}var handle=(this.getStep$I(0)).getHandle$();
handle.setXY$D$D(x, y);
}this.firePropertyChange$S$O$O("step", null, Integer.valueOf$I(n));
return this.getMarkedPoint$I$I(n, this.getTargetIndex$());
});

Clazz.newMeth(C$, 'getMarkedPoint$I$I',  function (n, index) {
if (index == 0) {
return Clazz.new_($I$(26,1).c$$I,[this, null, n]);
}var handle=(this.getStep$I(0)).getHandle$();
return Clazz.new_([this, null, handle.getX$(), handle.getY$(), n],$I$(27,1).c$$D$D$I);
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.isVisible$() || !this.isEnabled$()  ) return null;
var coords=(panel).getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame")) return null;
var ia=this.getStep$I(0).findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this.tp, xpix, ypix);
if (ia == null ) {
this.partName=$I$(7).getString$S("TTrack.Selected.Hint");
this.hint=$I$(7).getString$S("CoordAxes.Hint");
return null;
}if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.CoordAxesStep.Handle")) {
this.partName=$I$(7).getString$S("CoordAxes.Handle.Name");
this.hint=$I$(7).getString$S("CoordAxes.Handle.Hint");
} else {
this.partName=$I$(7).getString$S("CoordAxes.Origin.Name");
this.hint=$I$(7).getString$S("CoordAxes.Origin.Hint");
}return ia;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
this.lockedItem.setEnabled$Z(!trackerPanel.getCoords$().isLocked$());
return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
var n=trackerPanel.getFrameNumber$();
var coords=trackerPanel.getCoords$();
this.originLabel.setText$S($I$(7).getString$S("CoordAxes.Origin.Label"));
this.xLabel.setText$S(C$.dataVariables[0]);
this.yLabel.setText$S(C$.dataVariables[1]);
this.xField.setToolTipText$S($I$(7).getString$S("CoordAxes.Origin.Field.Tooltip"));
this.yField.setToolTipText$S($I$(7).getString$S("CoordAxes.Origin.Field.Tooltip"));
this.gridCheckbox.setText$S($I$(7).getString$S("CoordAxes.Checkbox.Grid"));
this.gridCheckbox.setToolTipText$S($I$(7).getString$S("CoordAxes.Checkbox.Grid.Tooltip"));
this.gridButton.setToolTipText$S($I$(7).getString$S("CoordAxes.Button.Grid.Tooltip"));
list.add$O(this.gridSeparator);
list.add$O(this.gridCheckbox);
list.add$O(this.gridButton);
list.add$O(this.magSeparator);
list.add$O(this.originLabel);
list.add$O(this.xSeparator);
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.ySeparator);
list.add$O(this.yLabel);
list.add$O(this.yField);
this.xField.setValue$D(coords.getOriginX$I(n));
this.yField.setValue$D(coords.getOriginY$I(n));
this.angleLabel.setText$S($I$(7).getString$S("CoordAxes.Label.Angle"));
list.add$O(this.stepSeparator);
list.add$O(this.angleLabel);
list.add$O(this.angleField);
this.angleField.setValue$D(coords.getAngle$I(n));
this.xField.setEnabled$Z(!this.isLocked$());
this.yField.setEnabled$Z(!this.isLocked$());
this.angleField.setEnabled$Z(!this.isLocked$());
return list;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "stepnumber":
var n=this.tp.getFrameNumber$();
var coords=this.tp.getCoords$();
this.angleField.setValue$D(coords.getAngle$I(n));
this.xField.setValue$D(coords.getOriginX$I(n));
this.yField.setValue$D(coords.getOriginY$I(n));
break;
case "transform":
if (this.tp.getSelectedTrack$() === this ) {
n=this.tp.getFrameNumber$();
coords=this.tp.getCoords$();
this.angleField.setValue$D(coords.getAngle$I(n));
this.xField.setValue$D(coords.getOriginX$I(n));
this.yField.setValue$D(coords.getOriginY$I(n));
}default:
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
break;
}
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
$I$(24).setFont$java_awt_Component(this.originLabel);
$I$(24).setFont$javax_swing_AbstractButton(this.gridCheckbox);
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
this.numberFields.clear$();
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(28), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(28), -1, [this.yField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(28), -1, [this.angleField]));
return this.numberFields;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(29,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.gridOptionsIcon=$I$(5).getResourceIcon$S$Z("restore.gif", true);
{
C$.dataVariables=Clazz.array(String, -1, ["x", "y", $I$(5).THETA]);
C$.formatVariables=Clazz.array(String, -1, ["pixel", $I$(5).THETA]);
C$.formatMap=Clazz.new_($I$(6,1));
C$.formatMap.put$O$O("pixel", Clazz.array(String, -1, ["x", "y"]));
C$.formatMap.put$O$O($I$(5).THETA, Clazz.array(String, -1, [$I$(5).THETA]));
C$.formatDescriptionMap=Clazz.new_($I$(6,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(7).getString$S("CoordAxes.Origin.Label"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(7).getString$S("CoordAxes.Label.Angle"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoordAxes, "AnglePoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['frameNum']]]

Clazz.newMeth(C$, 'c$$D$D$I',  function (x, y, n) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.frameNum=n;
}, 1);

Clazz.newMeth(C$, 'getAngle$',  function () {
return -this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].getOrigin$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'], []).angle$java_awt_geom_Point2D_Double(this);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoordAxes, "OriginPoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['frameNum']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
Clazz.super_(C$, this);
this.frameNum=n;
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getCoords$();
return coords.getOriginX$I(this.frameNum);
});

Clazz.newMeth(C$, 'getY$',  function () {
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.CoordAxes'].tp.getCoords$();
return coords.getOriginY$I(this.frameNum);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoordAxes, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var axes=obj;
if (axes.gridVisible) {
control.setValue$S$Z("grid_visible", true);
}if (axes.grid.isCustom$()) {
control.setValue$S$I("grid_alpha", axes.grid.getAlpha$());
control.setValue$S$I("grid_RGB", axes.grid.getColor$().getRGB$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var axes=obj;
axes.notyetShown=false;
if (control.getPropertyNamesRaw$().contains$O("grid_visible")) {
axes.setGridVisible$Z(control.getBoolean$S("grid_visible"));
}if (control.getPropertyNamesRaw$().contains$O("grid_alpha")) {
axes.grid.setAlpha$I(control.getInt$S("grid_alpha"));
}if (control.getPropertyNamesRaw$().contains$O("grid_RGB")) {
var color=Clazz.new_([control.getInt$S("grid_RGB")],$I$(4,1).c$$I);
axes.grid.setColor$java_awt_Color(color);
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
