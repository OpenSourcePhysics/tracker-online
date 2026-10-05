(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.RGBRegion',['org.opensourcephysics.cabrillo.tracker.RGBRegion','.FrameData'],'java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.util.ArrayList','java.util.TreeSet','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TButton','java.awt.event.FocusAdapter','org.opensourcephysics.media.core.IntegerField','javax.swing.JComboBox','javax.swing.JCheckBoxMenuItem','javax.swing.AbstractAction',['org.opensourcephysics.cabrillo.tracker.RGBRegion','.VertexHandle'],'org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo',['java.awt.geom.Ellipse2D','.Double'],'java.awt.Rectangle','java.awt.Polygon','java.awt.Dimension','org.opensourcephysics.cabrillo.tracker.RGBStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.media.core.NumberField','javax.swing.SwingUtilities',['org.opensourcephysics.cabrillo.tracker.RGBRegion','.FrameDataLoader'],['org.opensourcephysics.cabrillo.tracker.RGBRegion','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RGBRegion", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack', 'org.opensourcephysics.cabrillo.tracker.MarkingRequired');
C$.$classes$=[['VertexHandle',4],['Loader',8],['FrameData',10],['FrameDataLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedPosition=true;
this.fixedShape=true;
this.maxEdgeLength=200;
this.shapeType=0;
this.validSteps=Clazz.new_($I$(7,1));
this.dataHidden=false;
this.shapeKeyFrames=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['Z',['fixedPosition','fixedShape','dataHidden','loading'],'I',['maxEdgeLength','shapeType'],'O',['fixedPositionItem','javax.swing.JCheckBoxMenuItem','+fixedShapeItem','widthLabel','javax.swing.JLabel','+heightLabel','+helpLabel','editPolygonButton','org.opensourcephysics.cabrillo.tracker.TButton','unmarkedLabel','javax.swing.JLabel','shapeTypeDropdown','javax.swing.JComboBox','widthField','org.opensourcephysics.media.core.IntegerField','+heightField','validSteps','java.util.ArrayList','shapeKeyFrames','java.util.TreeSet','currentState','org.opensourcephysics.controls.XMLControl','vertexHandle','org.opensourcephysics.cabrillo.tracker.RGBRegion.VertexHandle']]
,['O',['dataVariables','String[]','+fieldVariables','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList']]]

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
return "RGBRegion";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (names[1].equals$O(variable) || vars[1].equals$O(variable) || vars[2].equals$O(variable)  ) {
return "L";
}if (vars[7].equals$O(variable) || vars[8].equals$O(variable) || vars[9].equals$O(variable)  ) {
return "I";
}if (names[2].equals$O(variable) || vars[3].equals$O(variable) || vars[4].equals$O(variable) || vars[5].equals$O(variable) || vars[6].equals$O(variable) || vars[10].equals$O(variable) || vars[11].equals$O(variable) || vars[12].equals$O(variable)  ) {
return "C";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[7]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(9), -1, [$I$(9).magenta]);
this.setName$S($I$(6).getString$S("RGBRegion.New.Name"));
this.setProperty$S$O("yVarPlot0", C$.dataVariables[6]);
this.setProperty$S$O("yMinPlot0", Double.valueOf$D(0));
this.setProperty$S$O("yMaxPlot0", Double.valueOf$D(255));
this.setProperty$S$O("tableVar0", "0");
this.setProperty$S$O("tableVar1", "1");
this.setProperty$S$O("tableVar2", "5");
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(10), -1, [$I$(11).getFootprint$S("Footprint.Shape"), $I$(11).getFootprint$S("Footprint.BoldShape")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.partName=$I$(6).getString$S("TTrack.Selected.Hint");
this.hint=$I$(6).getString$S("RGBRegion.Unmarked.Hint");
this.widthLabel=Clazz.new_($I$(12,1));
this.widthLabel.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.heightLabel=Clazz.new_($I$(12,1).c$$S,["h"]);
this.heightLabel.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.helpLabel=Clazz.new_($I$(12,1));
this.helpLabel.setForeground$java_awt_Color($I$(9).red.darker$());
this.helpLabel.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.editPolygonButton=((P$.RGBRegion$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getTrackBar$Z(true).toolbarComponentHeight;
return dim;
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.RGBRegion$1));
this.editPolygonButton.addActionListener$java_awt_event_ActionListener(((P$.RGBRegion$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RGBRegion$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var n=this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, []);
var step=this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].isFixedShape$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], []) && !this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames.contains$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames, [Integer.valueOf$I(n)]) ) {
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames.add$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames, [Integer.valueOf$I(n)]);
step.rgbShape=step.polygon=step.polygon.copy$.apply(step.polygon, []);
}step.polygon.setClosed$Z.apply(step.polygon, [false]);
step.repaint$.apply(step, []);
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getTrackBar$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, [false]).refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getTrackBar$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, [false]), []);
});
})()
), Clazz.new_(P$.RGBRegion$lambda1.$init$,[this, null])));
var sizeFocusListener=((P$.RGBRegion$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.refreshShapeSize$org_opensourcephysics_media_core_IntegerField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [e.getSource$()]);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.RGBRegion$2));
var sizeActionListener=((P$.RGBRegion$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var field=e.getSource$();
p$1.refreshShapeSize$org_opensourcephysics_media_core_IntegerField.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [field]);
field.selectAll$();
field.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.RGBRegion$3.$init$,[this, null]));
this.widthField=Clazz.new_($I$(16,1).c$$I,[2]);
this.widthField.setMinValue$D(1);
this.widthField.addFocusListener$java_awt_event_FocusListener(sizeFocusListener);
this.widthField.addActionListener$java_awt_event_ActionListener(sizeActionListener);
this.widthField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.heightField=Clazz.new_($I$(16,1).c$$I,[2]);
this.heightField.setMinValue$D(1);
this.heightField.addFocusListener$java_awt_event_FocusListener(sizeFocusListener);
this.heightField.addActionListener$java_awt_event_ActionListener(sizeActionListener);
this.heightField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.shapeTypeDropdown=Clazz.new_($I$(17,1));
this.shapeTypeDropdown.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(0, 4, 0, 4));
this.shapeTypeDropdown.setOpaque$Z(false);
this.shapeTypeDropdown.setEditable$Z(false);
this.shapeTypeDropdown.addItem$O($I$(6).getString$S("RGBRegion.ShapeType.Ellipse"));
this.shapeTypeDropdown.addItem$O($I$(6).getString$S("RGBRegion.ShapeType.Rectangle"));
this.shapeTypeDropdown.addItem$O($I$(6).getString$S("RGBRegion.ShapeType.Polygon"));
this.shapeTypeDropdown.addActionListener$java_awt_event_ActionListener(((P$.RGBRegion$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RGBRegion$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].setShapeType$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeTypeDropdown.getSelectedIndex$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeTypeDropdown, [])]);
});
})()
), Clazz.new_(P$.RGBRegion$lambda2.$init$,[this, null])));
this.fixedPositionItem=Clazz.new_([$I$(6).getString$S("RGBRegion.MenuItem.Fixed")],$I$(18,1).c$$S);
this.fixedPositionItem.addItemListener$java_awt_event_ItemListener(((P$.RGBRegion$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].setFixedPosition$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].fixedPositionItem.isSelected$()]);
});
})()
), Clazz.new_(P$.RGBRegion$4.$init$,[this, null])));
this.fixedShapeItem=Clazz.new_([$I$(6).getString$S("RGBRegion.MenuItem.FixedShape")],$I$(18,1).c$$S);
this.fixedShapeItem.addItemListener$java_awt_event_ItemListener(((P$.RGBRegion$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].setFixedShape$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].fixedShapeItem.isSelected$()]);
});
})()
), Clazz.new_(P$.RGBRegion$5.$init$,[this, null])));
var positionAction=((P$.RGBRegion$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var field=e.getSource$();
if (field.getBackground$() === $I$(9).yellow ) p$1.setPositionFromFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], []);
field.selectAll$();
field.requestFocusInWindow$();
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.RGBRegion$6));
var positionFocusListener=((P$.RGBRegion$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "RGBRegion$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
if (field.getBackground$() === $I$(9).yellow ) p$1.setPositionFromFields.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], []);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.RGBRegion$7));
this.xField.addActionListener$java_awt_event_ActionListener(positionAction);
this.yField.addActionListener$java_awt_event_ActionListener(positionAction);
this.xField.addFocusListener$java_awt_event_FocusListener(positionFocusListener);
this.yField.addFocusListener$java_awt_event_FocusListener(positionFocusListener);
this.vertexHandle=Clazz.new_($I$(20,1),[this, null]);
this.unmarkedLabel=Clazz.new_($I$(12,1));
this.unmarkedLabel.setForeground$java_awt_Color($I$(9).red.darker$());
}, 1);

Clazz.newMeth(C$, 'refreshShapeSize$org_opensourcephysics_media_core_IntegerField',  function (field) {
if (field.getBackground$() === $I$(9).yellow ) {
this.setShapeSize$I$I$I(this.tp.getFrameNumber$(), this.widthField.getIntValue$(), this.heightField.getIntValue$());
}}, p$1);

Clazz.newMeth(C$, 'setFixedPosition$Z',  function (fixed) {
if (this.fixedPosition == fixed ) return;
if (this.steps.isEmpty$()) {
this.fixedPosition=fixed;
return;
}var control=Clazz.new_($I$(21,1).c$$O,[this]);
if (this.tp != null ) {
this.tp.changed=true;
var n=this.tp.getFrameNumber$();
var keyStep=this.getStep$I(n);
for (var next, $next = 0, $$next = this.steps.array; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next == null ) continue;
var step=next;
step.getPosition$().setLocation$java_awt_geom_Point2D(keyStep.getPosition$());
}
}this.fixedPosition=fixed;
if (fixed) {
this.keyFrames.clear$();
this.keyFrames.add$O(Integer.valueOf$I(0));
this.clearData$();
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.datasetManager, this.tp);
this.firePropertyChange$S$O$O("data", null, null);
}if (!this.loading) {
$I$(22).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
}this.repaint$();
});

Clazz.newMeth(C$, 'isFixedPosition$',  function () {
return this.fixedPosition;
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
return $I$(6).getString$S("PointMass.Position.Name");
});

Clazz.newMeth(C$, 'setShapeType$I',  function (type) {
if (this.shapeType == type) return;
this.shapeType=type;
for (var i=0; i < this.steps.array.length; i++) {
var step=this.steps.getStep$I(i);
if (step != null ) {
step.rgbShape=null;
step.dataValid=false;
}}
var shape=this.shapeType == 0 ? Clazz.new_($I$(23,1).c$$D$D$D$D,[-5, -5, 10, 10]) : this.shapeType == 1 ? Clazz.new_($I$(24,1).c$$I$I$I$I,[-5, -5, 10, 10]) : Clazz.new_([Clazz.array(Integer.TYPE, -1, [-6, 0, 5, 0, -2]), Clazz.array(Integer.TYPE, -1, [-1, -5, -1, 1, 6]), 5],$I$(25,1).c$$IA$IA$I);
for (var i=0; i < this.getFootprints$().length; i++) {
(this.getFootprints$()[i]).setShape$java_awt_Shape(shape);
}
this.erase$();
if (this.tp != null ) {
var trackBar=this.tp.getTrackBar$Z(false);
if (trackBar != null ) trackBar.refresh$();
this.tp.changed=true;
this.tp.refreshTrackData$I(134217728);
}this.firePropertyChange$S$O$O("footprint", null, this.footprint);
});

Clazz.newMeth(C$, 'setFixedShape$Z',  function (fixed) {
if (this.fixedShape == fixed ) return;
if (this.steps.isEmpty$()) {
this.fixedShape=fixed;
return;
}var control=Clazz.new_($I$(21,1).c$$O,[this]);
if (this.tp != null ) {
this.tp.changed=true;
var n=this.tp.getFrameNumber$();
var keyStep=this.getStep$I(n);
for (var next, $next = 0, $$next = this.steps.array; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next == null ) continue;
var step=next;
step.setShapeSize$D$D(keyStep.width, keyStep.height);
}
}this.fixedShape=fixed;
if (fixed) {
this.shapeKeyFrames.clear$();
this.shapeKeyFrames.add$O(Integer.valueOf$I(0));
this.clearData$();
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.datasetManager, this.tp);
this.firePropertyChange$S$O$O("data", null, null);
}if (!this.loading) {
$I$(22).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
}this.repaint$();
});

Clazz.newMeth(C$, 'isFixedShape$',  function () {
return this.fixedShape;
});

Clazz.newMeth(C$, 'setShapeSize$I$I$I',  function (n, width, height) {
if (this.isLocked$() || height == -2147483648  || width == -2147483648  || this.tp == null  ) return;
width=Math.max(width, 0);
width=Math.min(width, this.maxEdgeLength);
this.widthField.setIntValue$I(width);
height=Math.max(height, 0);
height=Math.min(height, this.maxEdgeLength);
this.heightField.setIntValue$I(height);
var step=this.getStep$I(n);
var keyStep=step;
if (step != null  && (step.height != height || step.width != width ) ) {
var selection=this.tp.getSelectedPoint$();
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.tp.selectedSteps.clear$();
var state=Clazz.new_($I$(21,1).c$$O,[step]);
if (this.isFixedShape$()) {
keyStep=this.steps.getStep$I(0);
this.clearData$();
keyStep.setShapeSize$D$D(width, height);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_RGBStep(step);
} else {
this.shapeKeyFrames.add$O(Integer.valueOf$I(n));
step.setShapeSize$D$D(width, height);
step.dataValid=false;
}$I$(22).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(step, state);
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(selection);
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.datasetManager, this.tp);
step.repaint$();
this.tp.changed=true;
this.firePropertyChange$S$O$O("step", null,  new Integer(n));
}});

Clazz.newMeth(C$, 'getShapeSize$',  function () {
if (this.isFixedShape$()) {
var step=this.getStep$I(0);
if (step != null ) return Clazz.new_($I$(26,1).c$$I$I,[step.width, step.height]);
} else if (this.tp != null  && !this.fixedShape ) {
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) return Clazz.new_($I$(26,1).c$$I$I,[step.width, step.height]);
}return Clazz.new_($I$(26,1).c$$I$I,[20, 20]);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, _g) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, _g]);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
if (ia != null ) {
this.partName=$I$(6).getString$S("RGBRegion.Position.Name");
this.hint=$I$(6).getString$S("RGBRegion.Position.Hint");
} else {
this.partName=$I$(6).getString$S("TTrack.Selected.Hint");
if (this.getStep$I(this.tp.getFrameNumber$()) == null ) {
this.hint=$I$(6).getString$S("RGBRegion.Unmarked.Hint");
} else this.hint=$I$(6).getString$S("RGBRegion.Hint");
if (this.tp.getVideo$() == null ) {
this.hint+=", " + $I$(6).getString$S("TTrack.ImportVideo.Hint");
}}return ia;
});

Clazz.newMeth(C$, 'setMarking$Z',  function (marking) {
C$.superclazz.prototype.setMarking$Z.apply(this, [marking]);
this.repaint$Integer(this.tp.getID$());
});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
});

Clazz.newMeth(C$, 'setLocked$Z',  function (lock) {
C$.superclazz.prototype.setLocked$Z.apply(this, [lock]);
if (this.tp != null ) this.tp.getTrackBar$Z(false).refresh$();
});

Clazz.newMeth(C$, 'isAutoAdvance$',  function () {
return !this.isFixedPosition$() && !p$1.isPolygonEditing.apply(this, []) ;
});

Clazz.newMeth(C$, 'isMarkByDefault$',  function () {
return this.requiresMarking$() || C$.superclazz.prototype.isMarkByDefault$.apply(this, []) ;
});

Clazz.newMeth(C$, 'requiresMarking$',  function () {
var step=this.getStep$I(0);
return step == null  && this.shapeType != 2 ;
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
if (this.isLocked$()) return null;
var frame=this.isFixedPosition$() && this.isFixedShape$()  ? 0 : n;
var step=this.steps.getStep$I(frame);
if (step == null ) {
var w=this.widthField.getIntValue$();
var h=this.heightField.getIntValue$();
if (w == 0) w=h=20;
step=Clazz.new_($I$(27,1).c$$org_opensourcephysics_cabrillo_tracker_RGBRegion$I$D$D$I$I,[this, 0, x, y, w, h]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(28,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
this.keyFrames.add$O(Integer.valueOf$I(0));
this.shapeKeyFrames.add$O(Integer.valueOf$I(0));
} else {
if (this.currentState == null ) {
this.currentState=Clazz.new_($I$(21,1).c$$O,[this]);
}if (!this.loading && this.shapeType == 2  && !step.isPolygonClosed$() ) {
step=this.getStep$I(n);
step.append$D$D(x, y);
if (!this.isFixedShape$()) this.shapeKeyFrames.add$O(Integer.valueOf$I(n));
if (step.polygon.vertices.size$() > 1) {
this.prepareVertexHandle$org_opensourcephysics_cabrillo_tracker_RGBStep$I(step, step.polygon.vertices.size$() - 2);
}} else {
if (this.isFixedPosition$()) (this.steps.getStep$I(0)).getPosition$().setLocation$D$D(x, y);
 else {
step.getPosition$().setLocation$D$D(x, y);
this.keyFrames.add$O(Integer.valueOf$I(n));
}if (!this.loading) {
$I$(22).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, this.currentState);
this.currentState=null;
}}}this.firePropertyChange$S$O$O("step", $I$(2).HINT_STEP_ADDED_OR_REMOVED, Integer.valueOf$I(n));
return this.getStep$I(n);
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
if (this.shapeType != 2 || this.tp.getSelectedPoint$() !== this.vertexHandle  ) return null;
var step=this.steps.getStep$I(n);
if (step != null  && step.getPolygonVertexCount$() > 1 ) {
if (!this.isFixedShape$() && !this.shapeKeyFrames.contains$O(Integer.valueOf$I(n)) ) {
this.shapeKeyFrames.add$O(Integer.valueOf$I(n));
step.rgbShape=step.polygon=step.polygon.copy$();
}step.polygon.remove$I(this.vertexHandle.vertex);
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(step.position);
if (step.polygon.vertices.size$() > this.vertexHandle.vertex) this.prepareVertexHandle$org_opensourcephysics_cabrillo_tracker_RGBStep$I(step, this.vertexHandle.vertex);
step.repaint$();
}return null;
});

Clazz.newMeth(C$, 'getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (point, trackerPanel) {
if (point == null ) return null;
var stepArray=this.steps.array;
if (point === this.vertexHandle ) {
return stepArray[this.vertexHandle.n];
}for (var j=0; j < stepArray.length; j++) if (stepArray[j] != null ) {
var points=stepArray[j].getPoints$();
if (points[0] === point ) return stepArray[j];
}
return null;
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
var step=this.steps.getStep$I(n);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_RGBStep(step);
return step;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(29).getLength$();
});

Clazz.newMeth(C$, 'autoMarkAt$I$D$D',  function (n, x, y) {
this.setFixedPosition$Z(false);
return C$.superclazz.prototype.autoMarkAt$I$D$D.apply(this, [n, x, y]);
});

Clazz.newMeth(C$, 'isAutoTrackable$',  function () {
return true;
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'clearData$',  function () {
if (this.datasetManager == null ) return;
for (var i=0; i < 7; i++) {
var next=this.datasetManager.getDataset$I(i);
next.clear$();
}
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
if (steps[i] == null ) continue;
steps[i].dataVisible=false;
(steps[i]).dataValid=false;
}
});

Clazz.newMeth(C$, 'hideData$',  function () {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
if (steps[i] == null ) continue;
steps[i].dataVisible=false;
}
this.dataHidden=true;
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
if (this.refreshDataLater || trackerPanel == null   || data == null  ) return;
this.dataFrames.clear$();
var frame=trackerPanel.getFrameNumber$();
var step=this.getStep$I(frame);
if (step != null ) {
(step).getRGBData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}var count=12;
var stepArray=this.getSteps$();
this.validSteps.clear$();
var player=trackerPanel.getPlayer$();
var clip=player.getVideoClip$();
for (var n=0; n < stepArray.length; n++) {
var next=stepArray[n];
if (next == null  || !next.dataValid  || next.getRGBData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel) == null  ) continue;
var p=next.getPosition$();
var stepFrame=p.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (clip.includesFrame$I(stepFrame)) {
this.validSteps.add$O(next);
} else next.dataVisible=false;
}
var valid=this.validSteps.toArray$OA(Clazz.array($I$(27), [0]));
var len=valid.length;
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
for (var i=0; i < len; i++) {
var rgb=valid[i].getRGBData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var p=valid[i].getPosition$();
var stepFrame=p.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
this.dataFrames.add$O( new Integer(stepFrame));
var stepNumber=clip.frameToStep$I(stepFrame);
var t=player.getStepTime$I(stepNumber) / 1000.0;
var pt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
validData[0][i]=pt.getX$();
validData[1][i]=pt.getY$();
for (var j=2; j < 7; j++) {
validData[j][i]=rgb[j - 2];
}
validData[7][i]=stepNumber;
validData[8][i]=stepFrame;
for (var j=9; j < 12; j++) {
validData[j][i]=rgb[j - 4];
}
validData[12][i]=t;
}
this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, C$.dataVariables, "RGBRegion.Data.Description.", validData, len);
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.fixedPositionItem.setText$S($I$(6).getString$S("RGBRegion.MenuItem.Fixed"));
this.fixedPositionItem.setSelected$Z(this.isFixedPosition$());
this.fixedPositionItem.setEnabled$Z(!this.isLocked$());
this.fixedShapeItem.setText$S($I$(6).getString$S("RGBRegion.MenuItem.FixedShape"));
this.fixedShapeItem.setSelected$Z(this.isFixedShape$());
this.fixedShapeItem.setEnabled$Z(!this.isLocked$());
menu.remove$javax_swing_JMenuItem(this.deleteTrackItem);
$I$(30).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.fixedPositionItem);
menu.add$javax_swing_JMenuItem(this.fixedShapeItem);
if (trackerPanel.isEnabled$S("track.delete")) {
$I$(30).checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
}return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
if (!this.isLocked$()) {
this.shapeTypeDropdown.setSelectedIndex$I(this.shapeType);
$I$(31,"setFonts$O$I",[this.shapeTypeDropdown, $I$(31).getLevel$()]);
list.add$O(this.shapeTypeDropdown);
}var n=trackerPanel.getFrameNumber$();
var step=this.getStep$I(n);
if (this.shapeType == 2) {
if (!this.isLocked$()) {
this.editPolygonButton.setText$S($I$(6).getString$S("RGBRegion.Button.Edit.Text"));
$I$(31,"setFonts$O$I",[this.editPolygonButton, $I$(31).getLevel$()]);
if (step == null  || !step.isPolygonClosed$() ) {
this.helpLabel.setText$S($I$(6).getString$S("RGBRegion.Label.MarkPolygon.Text"));
$I$(31,"setFonts$O$I",[this.helpLabel, $I$(31).getLevel$()]);
list.add$O(this.helpLabel);
} else {
list.add$O(this.editPolygonButton);
}}} else {
this.widthLabel.setText$S("w");
list.add$O(this.widthLabel);
var dim=this.getShapeSize$();
this.widthField.setIntValue$I(dim.width);
this.widthField.setEnabled$Z(!this.isLocked$());
list.add$O(this.widthField);
list.add$O(this.heightLabel);
this.heightField.setIntValue$I(dim.height);
this.heightField.setEnabled$Z(!this.isLocked$());
list.add$O(this.heightField);
}if (step == null ) {
if (this.shapeType != 2) {
list.add$O(this.magSeparator);
this.unmarkedLabel.setText$S($I$(6).getString$S("RGBRegion.Unmarked.Hint"));
list.add$O(this.unmarkedLabel);
}return list;
}if (this.shapeType == 2 && !step.isPolygonClosed$() ) {
return list;
}this.stepLabel.setText$S($I$(6).getString$S("TTrack.Label.Step"));
this.xLabel.setText$S(C$.dataVariables[1]);
this.yLabel.setText$S(C$.dataVariables[2]);
this.xField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
this.yField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[2]));
this.xField.setEnabled$Z(!this.isLocked$());
this.yField.setEnabled$Z(!this.isLocked$());
this.stepLabel.setText$S($I$(6).getString$S("TTrack.Label.Step"));
var clip=trackerPanel.getPlayer$().getVideoClip$();
n=clip.frameToStep$I(n);
this.stepValueLabel.setText$S(n + ":");
list.add$O(this.stepSeparator);
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.xSeparator);
list.add$O(this.yLabel);
list.add$O(this.yField);
list.add$O(this.ySeparator);
return list;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, point]);
return list;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.unmarkedLabel, this.widthLabel]);
$I$(31).setFonts$O$I(objectsToSize, level);
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("image", this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.tp != null ) {
if (this.maxEdgeLength == 200 && this.tp.getVideo$() != null  ) {
p$1.setMaxEdgeLength$org_opensourcephysics_media_core_Video.apply(this, [this.tp.getVideo$()]);
}switch (e.getPropertyName$()) {
case "stepnumber":
this.invalidateData$O(Boolean.FALSE);
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) {
this.widthField.setIntValue$I(step.width);
this.heightField.setIntValue$I(step.height);
var p=step.position.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
this.xField.setValue$D(p.getX$());
this.yField.setValue$D(p.getY$());
}this.stepValueLabel.setText$S(e.getNewValue$() + ":");
this.checkPolygonEditing$();
if (!this.isFixedShape$() && this.shapeType == 2 ) {
this.tp.getTrackBar$Z(false).refresh$();
}break;
case "image":
this.invalidateData$O(Boolean.FALSE);
var vid=this.tp.getVideo$();
if (vid == null ) this.clearData$();
 else if (!vid.isVisible$()) this.hideData$();
 else if (!this.dataHidden && vid.isVisible$() ) this.clearData$();
 else this.dataHidden=false;
if (vid != null ) {
p$1.setMaxEdgeLength$org_opensourcephysics_media_core_Video.apply(this, [vid]);
}this.firePropertyChange$java_beans_PropertyChangeEvent(e);
break;
}
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setMaxEdgeLength$org_opensourcephysics_media_core_Video',  function (video) {
var d=video.getImageSize$Z(true);
this.maxEdgeLength=Math.min(d.height, d.width) - 1;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return $I$(6).getString$S("RGBRegion.Name");
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
if (this.numberFields.isEmpty$()) {
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(32), -1, [this.tField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(32), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(32), -1, [this.yField]));
}return this.numberFields;
});

Clazz.newMeth(C$, 'setPositionFromFields',  function () {
var xValue=this.xField.getValue$();
var yValue=this.yField.getValue$();
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step != null ) {
var p=step.position;
var coords=this.tp.getCoords$();
var x=coords.worldToImageX$I$D$D(n, xValue, yValue);
var y=coords.worldToImageY$I$D$D(n, xValue, yValue);
p.setXY$D$D(x, y);
var worldPt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
this.xField.setValue$D(worldPt.getX$());
this.yField.setValue$D(worldPt.getY$());
}}, p$1);

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_RGBStep',  function (step) {
if (step == null ) return;
var key=0;
if (!this.isFixedPosition$()) {
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) key=i;
}
}var shapeKey=0;
if (!this.isFixedShape$()) {
for (var i, $i = this.shapeKeyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) shapeKey=i;
}
}var positionKeyStep=this.steps.getStep$I(key);
var x=positionKeyStep.getPosition$().getX$();
var y=positionKeyStep.getPosition$().getY$();
var differentPosition=x != step.getPosition$().getX$()  || y != step.getPosition$().getY$()  ;
if (differentPosition) {
step.getPosition$().setLocation$D$D(x, y);
step.erase$();
step.dataValid=false;
}var shapeKeyStep=this.steps.getStep$I(shapeKey);
if (this.shapeType == 2 && shapeKeyStep.polygon == null  ) {
for (var i=0; i < this.steps.array.length; i++) {
var aStep=this.steps.getStep$I(i);
if (aStep.polygon != null ) {
shapeKeyStep.rgbShape=shapeKeyStep.polygon=aStep.polygon.copy$();
break;
}}
}if (p$1.isDifferentShape$org_opensourcephysics_cabrillo_tracker_RGBStep$org_opensourcephysics_cabrillo_tracker_RGBStep.apply(this, [step, shapeKeyStep])) {
if (this.shapeType == 2) {
step.rgbShape=step.polygon=shapeKeyStep.polygon;
} else {
step.setShapeSize$D$D(shapeKeyStep.width, shapeKeyStep.height);
}step.erase$();
step.dataValid=false;
}});

Clazz.newMeth(C$, 'isDifferentShape$org_opensourcephysics_cabrillo_tracker_RGBStep$org_opensourcephysics_cabrillo_tracker_RGBStep',  function (step, keyStep) {
if (this.shapeType == 2) {
return step.polygon !== keyStep.polygon ;
}return keyStep.width != step.width || keyStep.height != step.height ;
}, p$1);

Clazz.newMeth(C$, 'isPolygonEditing',  function () {
if (this.shapeType != 2) return false;
var step=this.steps.getStep$I(this.tp.getFrameNumber$());
return step != null  && !step.isPolygonClosed$() ;
}, p$1);

Clazz.newMeth(C$, 'prepareVertexHandle$org_opensourcephysics_cabrillo_tracker_RGBStep$I',  function (step, i) {
this.vertexHandle.vertex=i;
this.vertexHandle.n=step.n;
var pt=step.polygon.vertices.get$I(i + 1);
this.vertexHandle.setLocation$D$D(step.position.getX$() + pt.getX$(), step.position.getY$() + pt.getY$());
});

Clazz.newMeth(C$, 'checkPolygonEditing$',  function () {
if (this.shapeType != 2 || this.tp == null  ) return;
var step=this.steps.getStep$I(this.tp.getFrameNumber$());
if (!step.isPolygonClosed$() && step.getPolygonVertexCount$() > 2 ) $I$(33,"invokeLater$Runnable",[((P$.RGBRegion$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RGBRegion$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getSelectedPoint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, []) !== this.$finals$.step.position  && this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getSelectedPoint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, []) !== this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].vertexHandle  ) {
this.$finals$.step.polygon.setClosed$Z.apply(this.$finals$.step.polygon, [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getTrackBar$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, [false]).refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getTrackBar$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp, [false]), []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].currentState != null ) {
$I$(22).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].currentState);
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].currentState=null;
}}});
})()
), Clazz.new_(P$.RGBRegion$lambda3.$init$,[this, {step:step}]))]);
});

Clazz.newMeth(C$, 'getLuma$D$D$D',  function (r, g, b) {
return 0.299 * r + 0.587 * g + 0.114 * b;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(4)), Clazz.new_($I$(34,1))]);
return Clazz.new_($I$(35,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.dataVariables=Clazz.array(String, -1, ["t", "x", "y", "R", "G", "B", "luma", "pixels", "step", "frame", "Rsd", "Gsd", "Bsd"]);
C$.fieldVariables=Clazz.array(String, -1, ["t", "x", "y"]);
C$.formatVariables=Clazz.array(String, -1, ["t", "xy", "RGB"]);
C$.formatMap=Clazz.new_($I$(5,1));
C$.formatMap.put$O$O("t", Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O("xy", Clazz.array(String, -1, ["x", "y"]));
C$.formatMap.put$O$O("RGB", Clazz.array(String, -1, ["R", "G", "B", "luma", "Rsd", "Gsd", "Bsd"]));
C$.formatDescriptionMap=Clazz.new_($I$(5,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(6).getString$S("PointMass.Data.Description.0"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(6).getString$S("PointMass.Position.Name"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[2], $I$(6).getString$S("LineProfile.Description.RGB"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBRegion, "VertexHandle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['vertex','n']]]

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].isLocked$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [])) return;
this.setLocation$D$D(x, y);
var n=this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].isFixedShape$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], []) && !this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames.contains$O(Integer.valueOf$I(n)) ) {
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames.add$O(Integer.valueOf$I(n));
step.rgbShape=step.polygon=step.polygon.copy$();
}var pt=step.polygon.vertices.get$I(this.vertex + 1);
pt.setLocation$D$D(x - step.position.x, y - step.position.y);
step.polygon.modify$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].isFixedShape$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].clearData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], []);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].shapeKeyFrames.add$O(Integer.valueOf$I(n));
step.dataValid=false;
}this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["step", null,  new Integer(n)]);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjusting, e) {
if (!adjusting) {
this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'].checkPolygonEditing$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.RGBRegion'], []);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBRegion, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var region=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$Z("fixed", region.isFixedPosition$());
control.setValue$S$Z("fixed_shape", region.isFixedShape$());
control.setValue$S$I("shape_type", region.shapeType);
if (!region.steps.isEmpty$()) {
var steps=region.getSteps$();
var count=region.isFixedPosition$() ? 1 : steps.length;
var positions=Clazz.array(Double.TYPE, [count, null]);
for (var n=0; n < count; n++) {
if (steps[n] == null  || !region.keyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
var next=(steps[n]).position;
positions[n]=Clazz.array(Double.TYPE, -1, [next.x, next.y]);
}
control.setValue$S$O("positions", positions);
count=region.isFixedShape$() ? 1 : steps.length;
var shapes=Clazz.array(Double.TYPE, [count, null, null]);
for (var n=0; n < count; n++) {
if (steps[n] == null  || !region.shapeKeyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
var step=steps[n];
if (region.shapeType == 2) shapes[n]=step.getPolygonVertices$();
 else shapes[n]=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [step.width, step.height])]);
}
control.setValue$S$O("shapes", shapes);
count=steps.length;
var first=0;
var last=count - 1;
if (region.tp != null ) {
first=region.tp.getPlayer$().getVideoClip$().getStartFrameNumber$();
last=region.tp.getPlayer$().getVideoClip$().getEndFrameNumber$();
}var rgb=Clazz.array(Double.TYPE, [last + 1, null]);
var stepRGB;
for (var n=first; n <= last; n++) {
if (n > steps.length - 1 || steps[n] == null  ) continue;
if ((steps[n]).dataValid) {
stepRGB=(steps[n]).rgbData;
rgb[n]=Clazz.array(Double.TYPE, [7]);
System.arraycopy$O$I$O$I$I(stepRGB, 0, rgb[n], 0, 3);
System.arraycopy$O$I$O$I$I(stepRGB, 4, rgb[n], 3, 4);
}}
control.setValue$S$O("rgb", rgb);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var region=Clazz.new_($I$(3,1));
return region;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var region=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=region.isLocked$();
region.setLocked$Z(false);
region.loading=true;
region.fixedPosition=control.getBoolean$S("fixed");
if (control.getPropertyNamesRaw$().contains$O("fixed_radius")) region.fixedShape=control.getBoolean$S("fixed_radius");
 else region.fixedShape=control.getBoolean$S("fixed_shape");
var type=control.getInt$S("shape_type");
region.setShapeType$I(type == -2147483648 ? 0 : type);
region.keyFrames.clear$();
region.shapeKeyFrames.clear$();
var positions=control.getObject$S("positions");
if (positions != null ) {
for (var n=0; n < positions.length; n++) {
if (positions[n] == null ) continue;
region.createStep$I$D$D(n, positions[n][0], positions[n][1]);
}
}var shapes=control.getObject$S("shapes");
if (shapes != null ) {
region.shapeKeyFrames.clear$();
for (var n=0; n < shapes.length; n++) {
if (shapes[n] == null ) continue;
var step=region.steps.getStep$I(n);
step.rgbShape=null;
step.dataValid=false;
if (region.shapeType == 2) step.setPolygonVertices$DAA(shapes[n]);
 else step.setShapeSize$D$D(shapes[n][0][0], shapes[n][0][1]);
region.shapeKeyFrames.add$O(Integer.valueOf$I(n));
}
} else {
for (var i=0; i < region.steps.array.length; i++) {
var step=region.steps.getStep$I(i);
if (step != null ) {
step.rgbShape=null;
step.dataValid=false;
}}
}if (control.getPropertyNamesRaw$().contains$O("framedata")) {
var dataObj=control.getObject$S("framedata");
var data=null;
if (Clazz.instanceOf(dataObj, "org.opensourcephysics.cabrillo.tracker.RGBRegion.FrameData")) {
data=Clazz.array($I$(4), -1, [dataObj]);
} else {
data=dataObj;
}if (data != null ) {
for (var n=0; n < data.length; n++) {
if (data[n] == null ) continue;
var step=region.createStep$I$D$D(n, data[n].x, data[n].y);
if (data[n].r != -2147483648) {
step.setShapeSize$D$D(2 * data[n].r, 2 * data[n].r);
region.shapeKeyFrames.add$O(Integer.valueOf$I(n));
}}
}}var radii=control.getObject$S("radii");
if (radii != null ) {
region.shapeKeyFrames.clear$();
for (var n=0; n < radii.length; n++) {
if (radii[n] == null ) continue;
var step=region.steps.getStep$I(n);
var side=(2 * (radii[n]).$c())|0;
step.setShapeSize$D$D(side, side);
region.shapeKeyFrames.add$O(Integer.valueOf$I(n));
}
}var rgb=control.getObject$S("rgb");
if (rgb != null ) {
for (var n=0; n < rgb.length; n++) {
if (rgb[n] == null ) continue;
var step=region.steps.getStep$I(n);
System.arraycopy$O$I$O$I$I(rgb[n], 0, step.rgbData, 0, 3);
System.arraycopy$O$I$O$I$I(rgb[n], 3, step.rgbData, 4, rgb[n].length >= 7 ? 4 : 1);
step.rgbData[3]=$I$(3).getLuma$D$D$D(rgb[n][0], rgb[n][1], rgb[n][2]);
region.refreshStep$org_opensourcephysics_cabrillo_tracker_RGBStep(step);
step.dataValid=true;
}
}region.setLocked$Z(locked);
region.loading=false;
region.repaint$();
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBRegion, "FrameData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y'],'I',['r']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RGBRegion, "FrameDataLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
data.x=control.getDouble$S("x");
data.y=control.getDouble$S("y");
data.r=control.getInt$S("r");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
