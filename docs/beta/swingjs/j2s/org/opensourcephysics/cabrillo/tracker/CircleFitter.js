(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.CircleFitter',['org.opensourcephysics.cabrillo.tracker.CircleFitterStep','.DataPoint'],'org.opensourcephysics.cabrillo.tracker.TrackerRes','java.util.HashMap','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.CircleFitterFootprint','org.opensourcephysics.cabrillo.tracker.CircleFitterStep',['org.opensourcephysics.cabrillo.tracker.TTrack','.StepArray'],'javax.swing.JCheckBoxMenuItem','javax.swing.JMenuItem','javax.swing.JLabel','javax.swing.AbstractAction','java.awt.event.FocusAdapter','org.opensourcephysics.media.core.NumberField','javax.swing.Box','java.awt.Dimension','javax.swing.JMenu','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','javax.swing.JPopupMenu','StringBuffer','org.opensourcephysics.media.core.VideoIO','java.text.NumberFormat','org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','java.awt.Toolkit','java.awt.datatransfer.StringSelection','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TFrame','Thread','java.util.TreeSet','javajs.async.AsyncDialog',['org.opensourcephysics.cabrillo.tracker.CircleFitter','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CircleFitter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TTrack');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedPosition=true;
this.attachToSteps=false;
this.isRelativeFrameNumbers=false;
this.absoluteStart=0;
this.relativeStart=-2;
this.attachmentFrameCount=5;
},1);

C$.$fields$=[['Z',['fixedPosition','attachToSteps','isRelativeFrameNumbers','refreshingAttachments','abortRefreshAttachments','loadingAttachments'],'I',['absoluteStart','relativeStart','attachmentFrameCount'],'S',['stepAttachmentName'],'O',['clickToMarkLabel','javax.swing.JLabel','+xDataPointLabel','+yDataPointLabel','xDataField','org.opensourcephysics.media.core.NumberField','+yDataField','xDataPointSeparator','java.awt.Component','+yDataPointSeparator','clearPointsItem','javax.swing.JMenuItem','+setRadiusItem','+setRadiusAllItem','+originToCenterItem','+originToCenterAllItem','originToCenterMenu','javax.swing.JMenu','+setRadiusMenu','attachmentItem','javax.swing.JMenuItem','pointCountButton','javax.swing.JButton','attachmentForSteps','org.opensourcephysics.cabrillo.tracker.TTrack[]']]
,['O',['dataVariables','String[]','+fieldVariables','+formatVariables','formatMap','java.util.Map','+formatDescriptionMap','allVariables','java.util.ArrayList','panelEventsCircleFitter','String[]']]]

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
return "CircleFitter";
});

Clazz.newMeth(C$, 'getVarDimsImpl$S',  function (variable) {
var vars=C$.dataVariables;
var names=C$.formatVariables;
if (names[1].equals$O(variable) || names[2].equals$O(variable) || vars[1].equals$O(variable) || vars[2].equals$O(variable) || vars[3].equals$O(variable) || vars[6].equals$O(variable) || vars[7].equals$O(variable)  ) {
return "L";
}if (vars[4].equals$O(variable) || vars[5].equals$O(variable) || vars[8].equals$O(variable)  ) {
return "I";
}return null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[1]);C$.$init$.apply(this);
this.defaultColors=Clazz.array($I$(8), -1, [Clazz.new_($I$(8,1).c$$I$I$I,[0, 140, 40])]);
this.setName$S($I$(6).getString$S("CircleFitter.New.Name"));
this.setFootprints$org_opensourcephysics_cabrillo_tracker_FootprintA(Clazz.array($I$(9), -1, [$I$(10).getFootprint$S("CircleFitterFootprint.Circle4"), $I$(10).getFootprint$S("CircleFitterFootprint.Circle7"), $I$(10).getFootprint$S("CircleFitterFootprint.Circle4Bold"), $I$(10).getFootprint$S("CircleFitterFootprint.Circle7Bold"), $I$(10).getFootprint$S("CircleFitterFootprint.Circle4.PointsOnly")]));
this.defaultFootprint=this.getFootprint$();
this.setColor$java_awt_Color(this.defaultColors[0]);
this.setProperty$S$O("tableVar0", "0");
this.setProperty$S$O("tableVar1", "1");
this.setProperty$S$O("tableVar2", "2");
this.setProperty$S$O("xVarPlot0", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot0", C$.dataVariables[3]);
this.setProperty$S$O("xVarPlot1", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot1", C$.dataVariables[1]);
this.setProperty$S$O("xVarPlot2", C$.dataVariables[0]);
this.setProperty$S$O("yVarPlot2", C$.dataVariables[2]);
this.partName=$I$(6).getString$S("TTrack.Selected.Hint");
this.hint=$I$(6).getString$S("CircleFitter.Hint.Mark3");
var step=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_CircleFitter$I,[this, 0]);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps=Clazz.new_($I$(12,1).c$$org_opensourcephysics_cabrillo_tracker_Step,[this, null, step]);
this.keyFrames.add$O(Integer.valueOf$I(0));
this.fixedItem=Clazz.new_([$I$(6).getString$S("TapeMeasure.MenuItem.Fixed")],$I$(13,1).c$$S);
this.fixedItem.addItemListener$java_awt_event_ItemListener(((P$.CircleFitter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].setFixed$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].fixedItem.isSelected$()]);
});
})()
), Clazz.new_(P$.CircleFitter$1.$init$,[this, null])));
this.attachmentItem=Clazz.new_([$I$(6).getString$S("MeasuringTool.MenuItem.Attach")],$I$(14,1).c$$S);
this.attachmentItem.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getAttachmentDialog$org_opensourcephysics_cabrillo_tracker_TTrack(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter']);
control.setVisible$Z(true);
});
})()
), Clazz.new_(P$.CircleFitter$2.$init$,[this, null])));
this.clickToMarkLabel=Clazz.new_($I$(15,1));
this.clickToMarkLabel.setForeground$java_awt_Color($I$(8).red.darker$());
var dataPointAction=((P$.CircleFitter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp == null ) return;
if (e != null  && e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].xDataField   && this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].xDataField.getBackground$() !== $I$(8).yellow  ) return;
if (e != null  && e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].yDataField   && this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].yDataField.getBackground$() !== $I$(8).yellow  ) return;
var p=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getSelectedPoint$();
if (!(Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint"))) return;
if (p.isAttached$()) return;
var xValue=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].xDataField.getValue$();
var yValue=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].yDataField.getValue$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getFrameNumber$();
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getCoords$();
var x=coords.worldToImageX$I$D$D(n, xValue, yValue);
var y=coords.worldToImageY$I$D$D(n, xValue, yValue);
p.setXY$D$D(x, y);
p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp);
if (e != null  && Clazz.instanceOf(e.getSource$(), "org.opensourcephysics.media.core.NumberField") ) {
(e.getSource$()).requestFocusInWindow$();
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.CircleFitter$3));
var dataFieldFocusListener=((P$.CircleFitter$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].xDataField  && this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].xDataField.getBackground$() !== $I$(8).yellow  ) return;
if (e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].yDataField  && this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].yDataField.getBackground$() !== $I$(8).yellow  ) return;
this.$finals$.dataPointAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(17,1),[this, {dataPointAction:dataPointAction}],P$.CircleFitter$4));
this.xDataPointLabel=Clazz.new_($I$(15,1));
this.xDataPointLabel.setBorder$javax_swing_border_Border(this.tLabel.getBorder$());
this.xDataField=Clazz.new_($I$(18,1).c$$I,[5]);
this.xDataField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.xDataField.addActionListener$java_awt_event_ActionListener(dataPointAction);
this.xDataField.addFocusListener$java_awt_event_FocusListener(dataFieldFocusListener);
this.xDataField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.yDataPointLabel=Clazz.new_($I$(15,1));
this.yDataPointLabel.setBorder$javax_swing_border_Border(this.tLabel.getBorder$());
this.yDataField=Clazz.new_($I$(18,1).c$$I,[5]);
this.yDataField.setBorder$javax_swing_border_Border(this.fieldBorder);
this.yDataField.addActionListener$java_awt_event_ActionListener(dataPointAction);
this.yDataField.addFocusListener$java_awt_event_FocusListener(dataFieldFocusListener);
this.yDataField.addMouseListener$java_awt_event_MouseListener(this.formatMouseListener);
this.xDataPointSeparator=$I$(19,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(20,1).c$$I$I,[4, 4])]);
this.yDataPointSeparator=$I$(19,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(20,1).c$$I$I,[4, 4])]);
this.xLabel.setText$S("center x");
this.xField.setPatterns$SA(Clazz.array(String, -1, ["0.000E0", "0.000", "0.00", "0.0", "0.000E0"]));
this.xField.setEnabled$Z(false);
this.yField.setPatterns$SA(Clazz.array(String, -1, ["0.000E0", "0.000", "0.00", "0.0", "0.000E0"]));
this.yField.setEnabled$Z(false);
this.magField.setPatterns$SA(Clazz.array(String, -1, ["0.000E0", "0.000", "0.00", "0.0", "0.000E0"]));
this.magField.setEnabled$Z(false);
this.xDataField.setPatterns$SA(Clazz.array(String, -1, ["0.000E0", "0.000", "0.00", "0.0", "0.000E0"]));
this.yDataField.setPatterns$SA(Clazz.array(String, -1, ["0.000E0", "0.000", "0.00", "0.0", "0.000E0"]));
this.originToCenterMenu=Clazz.new_($I$(21,1));
this.originToCenterItem=Clazz.new_($I$(14,1));
this.originToCenterItem.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].setCoordsOriginToCenter$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [false]);
});
})()
), Clazz.new_(P$.CircleFitter$5.$init$,[this, null])));
this.originToCenterAllItem=Clazz.new_($I$(14,1));
this.originToCenterAllItem.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].setCoordsOriginToCenter$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [true]);
});
})()
), Clazz.new_(P$.CircleFitter$6.$init$,[this, null])));
this.setRadiusMenu=Clazz.new_($I$(21,1));
this.setRadiusItem=Clazz.new_($I$(14,1));
this.setRadiusItem.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].setCoordsScaleFromRadius$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [false]);
});
})()
), Clazz.new_(P$.CircleFitter$7.$init$,[this, null])));
this.setRadiusAllItem=Clazz.new_($I$(14,1));
this.setRadiusAllItem.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].setCoordsScaleFromRadius$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [true]);
});
})()
), Clazz.new_(P$.CircleFitter$8.$init$,[this, null])));
this.clearPointsItem=Clazz.new_($I$(14,1));
this.clearPointsItem.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=Clazz.new_($I$(22,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter']]);
var changed=false;
for (var step, $step = 0, $$step = this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getSteps$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
var next=step;
if (next.dataPoints.length == 0) continue;
changed=true;
next.dataPoints=Clazz.array($I$(5), [2, 0]);
next.refreshCircle$();
}
if (changed) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].invalidateData$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], [this]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.changed=true;
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.refreshTrackBar$();
}$I$(23).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], control);
}});
})()
), Clazz.new_(P$.CircleFitter$9.$init$,[this, null])));
this.pointCountButton=((P$.CircleFitter$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
var selected=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getSelectedPoint$();
var popup=Clazz.new_($I$(24,1));
var n=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getFrameNumber$();
var step=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].getStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [n]);
var pts=step.getValidDataPoints$();
var clip=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getPlayer$().getVideoClip$();
var selector=((P$.CircleFitter$10$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$10$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
var p=this.$finals$.pts.get$I(i);
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(p);
});
})()
), Clazz.new_(P$.CircleFitter$10$1.$init$,[this, {pts:pts}]));
var buf=Clazz.new_($I$(25,1));
buf.append$S(step.getTrack$().getName$() + "_" + this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].stepLabel.getText$() + "_" + this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.getStepNumber$() );
buf.append$S($I$(1).NEW_LINE);
buf.append$S("x" + $I$(26).getDelimiter$() + "y" );
buf.append$S($I$(1).NEW_LINE);
for (var i=0; i < pts.size$(); i++) {
var p=pts.get$I(i);
var worldPt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp);
var nf=$I$(27).getInstance$();
nf.applyPattern$S("0.000000E0");
nf.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(28).getDecimalFormatSymbols$());
var formattedX=nf.format$D(worldPt.getX$());
var formattedY=nf.format$D(worldPt.getY$());
buf.append$S(formattedX + $I$(26).getDelimiter$() + formattedY );
if (i < pts.size$() - 1) {
buf.append$S($I$(1).NEW_LINE);
}var s="";
if (i < step.dataPoints[0].length) {
s=$I$(6).getString$S("CircleFitter.MenuItem.MarkedPoint");
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].attachments != null ) {
var targetStep=p.getAttachedStep$();
s=targetStep.getTrack$().getName$() + " ";
s+=$I$(6).getString$S("TTrack.Label.Step") + " ";
var frame=targetStep.getFrameNumber$();
s+=clip.frameToStep$I(frame);
}s+=" (" + this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].xDataField.format$D(worldPt.getX$()) + ", " + this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].yDataField.format$D(worldPt.getY$()) + ")" ;
var item=Clazz.new_($I$(14,1).c$$S,[s]);
item.setActionCommand$S(String.valueOf$I(i));
item.addActionListener$java_awt_event_ActionListener(selector);
var index=i;
item.addMouseListener$java_awt_event_MouseListener(((P$.CircleFitter$10$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$10$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
var p=this.$finals$.pts.get$I(this.$finals$.index);
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(p);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(this.$finals$.selected);
});
})()
), Clazz.new_($I$(29,1),[this, {pts:pts,index:index,selected:selected}],P$.CircleFitter$10$2)));
popup.add$javax_swing_JMenuItem(item);
}
var item=Clazz.new_([$I$(6).getString$S("CircleFitter.MenuItem.CopyToClipboard.Text")],$I$(14,1).c$$S);
item.setToolTipText$S($I$(6).getString$S("CircleFitter.MenuItem.CopyToClipboard.Tooltip"));
item.addActionListener$java_awt_event_ActionListener(((P$.CircleFitter$10$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$10$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var clipboard=$I$(30).getDefaultToolkit$().getSystemClipboard$();
var stringSelection=Clazz.new_([this.$finals$.buf.toString()],$I$(31,1).c$$S);
clipboard.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(stringSelection, stringSelection);
});
})()
), Clazz.new_(P$.CircleFitter$10$3.$init$,[this, {buf:buf}])));
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(item);
$I$(32,"setFonts$O$I",[popup, $I$(32).getLevel$()]);
return popup;
});
})()
), Clazz.new_($I$(33,1),[this, null],P$.CircleFitter$10));
this.pointCountButton.setOpaque$Z(false);
var space=$I$(34).createEmptyBorder$I$I$I$I(1, 4, 1, 4);
var line=$I$(34,"createLineBorder$java_awt_Color",[$I$(8).GRAY]);
this.pointCountButton.setBorder$javax_swing_border_Border($I$(34).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, space));
}, 1);

Clazz.newMeth(C$, 'setFixed$Z',  function (fixed) {
if (this.fixedPosition == fixed ) return;
var control=Clazz.new_($I$(22,1).c$$O,[this]);
if (this.tp != null ) {
this.tp.changed=true;
var n=this.tp.getFrameNumber$();
var source=this.getStep$I(n);
var target=this.getStep$I(0);
target.copy$org_opensourcephysics_cabrillo_tracker_CircleFitterStep(source);
$I$(35).repaintT$java_awt_Component(this.tp);
}this.fixedPosition=fixed;
if (fixed) {
this.keyFrames.clear$();
this.keyFrames.add$O(Integer.valueOf$I(0));
this.invalidateData$O(null);
$I$(23).postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
}});

Clazz.newMeth(C$, 'isFixed$',  function () {
return this.fixedPosition;
});

Clazz.newMeth(C$, 'isValidCircle$I',  function (frame) {
var step=this.getStep$I(frame);
return step != null  && step.isValidCircle$() ;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var isSelectedTrack=(this.tp.getSelectedTrack$() === this );
switch (e.getPropertyName$()) {
case "stepnumber":
if (isSelectedTrack) {
this.tp.refreshTrackBar$();
}break;
case "transform":
if (isSelectedTrack) {
this.refreshFields$I(this.tp.getFrameNumber$());
}break;
case "startframe":
case "stepcount":
case "stepsize":
case "step":
case "steps":
if (this.attachments != null ) {
this.refreshAttachments$();
}break;
case "adjusting":
this.refreshDataLater=(e.getNewValue$()).valueOf();
if (!this.refreshDataLater) {
this.firePropertyChange$S$O$O("data", null, null);
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setTrailVisible$Z',  function (visible) {
});

Clazz.newMeth(C$, 'createStep$I$D$D',  function (n, x, y) {
if (!this.isFixed$()) {
this.keyFrames.add$O(Integer.valueOf$I(n));
var step=this.steps.getStep$I(n);
step.addDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z(Clazz.new_($I$(5,1).c$$D$D,[step, null, x, y]), true);
return step;
}this.keyFrames.add$O(Integer.valueOf$I(0));
var step=this.steps.getStep$I(0);
step.addDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z(Clazz.new_($I$(5,1).c$$D$D,[step, null, x, y]), true);
return this.getStep$I(n);
});

Clazz.newMeth(C$, 'deleteStep$I',  function (n) {
if (this.isLocked$()) {
return null;
}var p=this.tp.getSelectedPoint$();
if (p != null  && !(Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint")) ) return null;
var data=p;
var step=this.steps.getStep$I(n);
if (!this.isFixed$()) {
step.removeDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z$Z(data, true, true);
} else {
var row=-1;
var column=0;
for (var i=0; i < step.dataPoints.length; i++) {
var points=step.dataPoints[i];
for (var j=0; j < points.length; j++) {
if (data === points[j] ) {
column=i;
row=j;
break;
}}
}
if (row > -1) {
step=this.steps.getStep$I(0);
data=step.dataPoints[column][row];
step.removeDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$Z$Z(data, true, true);
}}return null;
});

Clazz.newMeth(C$, 'getStep$I',  function (n) {
var step=this.steps.getStep$I(n);
this.refreshStep$org_opensourcephysics_cabrillo_tracker_CircleFitterStep(step);
return step;
});

Clazz.newMeth(C$, 'getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (point, trackerPanel) {
if (point == null ) return null;
var stepArray=this.steps.array;
for (var step, $step = 0, $$step = stepArray; $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step == null ) continue;
var points=step.getPoints$();
for (var i=0; i < points.length; i++) {
if (points[i] === point ) return step;
}
var circleStep=step;
for (var pts, $pts = 0, $$pts = circleStep.dataPoints; $pts<$$pts.length&&((pts=($$pts[$pts])),1);$pts++) {
for (var p, $p = 0, $$p = pts; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p === point ) return step;
}
}
}
return null;
});

Clazz.newMeth(C$, 'getStepLength$',  function () {
return $I$(11).getLength$();
});

Clazz.newMeth(C$, 'getFootprintLength$',  function () {
return 3;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
var objectsToSize=Clazz.array(java.lang.Object, -1, [this.clickToMarkLabel, this.xDataPointLabel, this.yDataPointLabel, this.pointCountButton, this.xDataField, this.yDataField]);
$I$(32).setFonts$O$I(objectsToSize, level);
});

Clazz.newMeth(C$, 'dispose$',  function () {
for (var t, $t = $I$(2).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeStepListener$java_beans_PropertyChangeListener(this);
}
if (this.attachmentForSteps != null ) {
for (var i=0; i < this.attachmentForSteps.length; i++) {
this.attachmentForSteps[i]=null;
}
}if (this.attachments != null ) {
for (var i=0; i < this.attachments.length; i++) {
this.attachments[i]=null;
}
}var steps=this.getSteps$();
for (var next, $next = 0, $$next = steps; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next == null ) continue;
var step=next;
for (var i=0; i <= step.dataPoints[1].length; i++) {
var p=step.getDataPoint$I$I(1, i);
if (p != null ) {
p.detach$();
}}
}
this.attachmentNames=null;
this.properties.clear$();
this.datasetManager=null;
this.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(null);
});

Clazz.newMeth(C$, 'isNoPoints$I',  function (frameNumber) {
if (!this.isRelativeFrameNumbers) return false;
var start=frameNumber + this.relativeStart;
var end=frameNumber + this.relativeStart + this.attachmentFrameCount  - 1;
return end < 0 || start > this.tp.getPlayer$().getVideoClip$().getLastFrameNumber$() ;
});

Clazz.newMeth(C$, 'setAttachmentStartFrame$I',  function (n) {
if (this.isRelativeFrameNumbers) {
var count=this.tp.getPlayer$().getVideoClip$().getFrameCount$();
n=Math.max(n, 1 - count);
n=Math.min(n, count - 1);
this.relativeStart=n;
} else {
var min=this.tp.getPlayer$().getVideoClip$().getFirstFrameNumber$();
var max=this.tp.getPlayer$().getVideoClip$().getLastFrameNumber$();
n=Math.max(n, min);
n=Math.min(n, max);
this.absoluteStart=n;
}});

Clazz.newMeth(C$, 'getAttachmentStartFrame$I',  function (frameNumber) {
if (this.isRelativeFrameNumbers) {
var n=Math.max(0, frameNumber + this.relativeStart);
n=Math.min(n, this.tp.getPlayer$().getVideoClip$().getLastFrameNumber$());
return n;
}return this.absoluteStart;
});

Clazz.newMeth(C$, 'setAttachmentFrameCount$I',  function (n) {
n=Math.min(n, 50);
n=Math.max(n, 1);
this.attachmentFrameCount=n;
});

Clazz.newMeth(C$, 'getAttachmentFrameCount$',  function () {
return this.attachmentFrameCount;
});

Clazz.newMeth(C$, 'getAttachmentEndFrame$I',  function (frameNumber) {
var n=Math.max(0, this.absoluteStart + this.attachmentFrameCount - 1);
if (this.isRelativeFrameNumbers) {
n=Math.max(0, frameNumber + this.relativeStart + this.attachmentFrameCount  - 1);
}n=Math.min(n, this.tp.getPlayer$().getVideoClip$().getLastFrameNumber$());
return n;
});

Clazz.newMeth(C$, 'getAttachmentLength$',  function () {
return (this.attachments == null  || this.attachments.length == 0  || this.attachToSteps  ? 1 : this.attachments.length);
});

Clazz.newMeth(C$, 'getAttachments$',  function () {
C$.superclazz.prototype.getAttachments$.apply(this, []);
if (this.attachToSteps) {
if (this.attachmentForSteps == null ) {
this.attachmentForSteps=Clazz.array($I$(2), -1, [this.attachments[0]]);
}return this.attachmentForSteps;
}var ready=true;
for (var i=this.attachments.length, inew=i - 1; --i >= 0; ) {
if ((i < inew) == (this.attachments[i] == null ) ) {
ready=false;
break;
}}
if (ready) return this.attachments;
for (var i=this.attachments.length; --i >= 0; ) {
if (this.attachments[i] == null ) {
var newAttachments=Clazz.array($I$(2), [this.attachments.length - 1]);
System.arraycopy$O$I$O$I$I(this.attachments, 0, newAttachments, 0, i);
System.arraycopy$O$I$O$I$I(this.attachments, i + 1, newAttachments, i, this.attachments.length - i - 1 );
this.attachments=newAttachments;
}}
if (this.attachments.length == 0) {
this.attachments=Clazz.array($I$(2), [1]);
} else if (!this.attachToSteps) {
var newAttachments=Clazz.array($I$(2), [this.attachments.length + 1]);
System.arraycopy$O$I$O$I$I(this.attachments, 0, newAttachments, 0, this.attachments.length);
this.attachments=newAttachments;
}return this.attachments;
});

Clazz.newMeth(C$, 'getAttachmentDescription$I',  function (n) {
if (this.attachToSteps) {
return this.attachmentForSteps[0] == null  ? $I$(6).getString$S("CircleFitter.Label.NewPoint") : $I$(6).getString$S("CircleFitter.Label.Points");
}return n == this.attachments.length - 1 ? $I$(6).getString$S("CircleFitter.Label.NewPoint") : $I$(6).getString$S("CircleFitter.Label.Point");
});

Clazz.newMeth(C$, 'refreshAttachments$',  function () {
if (this.refreshingAttachments) {
this.abortRefreshAttachments=true;
while (this.refreshingAttachments){
try {
$I$(36).sleep$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
}var runner=((P$.CircleFitter$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitter$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].refreshAttachmentsAync$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], []);
});
})()
), Clazz.new_(P$.CircleFitter$11.$init$,[this, null]));
Clazz.new_($I$(36,1).c$$Runnable,[runner]).start$();
});

Clazz.newMeth(C$, 'refreshAttachmentsAync$',  function () {
this.abortRefreshAttachments=false;
this.refreshingAttachments=true;
var attachments=this.getAttachments$();
var hasAttachments=false;
for (var i=0; i < attachments.length; i++) {
if (attachments[i] != null ) {
hasAttachments=true;
attachments[i].removeStepListener$java_beans_PropertyChangeListener(this);
attachments[i].addStepListener$java_beans_PropertyChangeListener(this);
}}
if (hasAttachments) {
var change=this.tp.changed;
this.setFixed$Z(false);
this.tp.changed=change;
}var clip=this.tp.getPlayer$().getVideoClip$();
$I$(11).doRefresh=false;
var framesToRefresh=Clazz.new_($I$(37,1));
if (!this.attachToSteps) {
for (var n=clip.getStartFrameNumber$(); n <= clip.getEndFrameNumber$(); n++) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var step=this.steps.getStep$I(n);
if (step.trimAttachedPointsToLength$I(attachments.length - 1)) {
framesToRefresh.add$O(Integer.valueOf$I(n));
}}
for (var i=0; i < attachments.length; i++) {
var targetTrack=attachments[i];
if (targetTrack != null ) {
for (var n=clip.getStartFrameNumber$(); n <= clip.getEndFrameNumber$(); n++) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var targetStep=targetTrack.getStep$I(n);
var step=this.steps.getStep$I(n);
var p=step.getDataPoint$I$I(1, i);
if (targetStep == null ) {
if (p != null ) {
p.detach$();
p=null;
step.setDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$I$I$Z$Z(null, 1, i, false, false);
framesToRefresh.add$O(Integer.valueOf$I(n));
}} else {
var target=targetStep.getPoints$()[0];
if (p == null ) {
p=Clazz.new_($I$(5,1).c$$D$D,[step, null, target.x, target.y]);
step.setDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$I$I$Z$Z(p, 1, i, false, false);
}if (p.attachTo$org_opensourcephysics_media_core_TPoint(target)) {
framesToRefresh.add$O(Integer.valueOf$I(n));
}}}
} else {
for (var n=clip.getStartFrameNumber$(); n <= clip.getEndFrameNumber$(); n++) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var step=this.steps.getStep$I(n);
var p=step.getDataPoint$I$I(1, i);
if (p != null ) {
p.detach$();
step.setDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$I$I$Z$Z(null, 1, i, false, true);
framesToRefresh.add$O(Integer.valueOf$I(n));
}}
}}
} else {
var targetTrack=attachments[0];
if (targetTrack != null ) {
var stepCount=this.isRelativeFrameNumbers ? clip.getStepCount$() : 0;
for (var stepNum=0; stepNum <= stepCount; stepNum++) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var n=clip.stepToFrame$I(stepNum);
var circleStep=this.steps.getStep$I(n);
var $in=this.getAttachmentStartFrame$I(n);
var out=this.getAttachmentEndFrame$I(n);
var noPoints=$in < out ? false : this.isNoPoints$I(n);
for (var frame=$in; frame <= out; frame++) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var targetStep=targetTrack.getStep$I(frame);
var dataPointIndex=frame - $in;
var p=circleStep.getDataPoint$I$I(1, dataPointIndex);
if (targetStep == null  || noPoints ) {
if (p != null ) {
p.detach$();
p=null;
framesToRefresh.add$O(Integer.valueOf$I(n));
}} else {
var target=targetStep.getPoints$()[0];
if (p == null ) {
p=Clazz.new_($I$(5,1).c$$D$D,[circleStep, null, target.x, target.y]);
}if (p.attachTo$org_opensourcephysics_media_core_TPoint(target)) {
framesToRefresh.add$O(Integer.valueOf$I(n));
}}circleStep.setDataPoint$org_opensourcephysics_cabrillo_tracker_CircleFitterStep_DataPoint$I$I$Z$Z(p, 1, dataPointIndex, false, false);
}
var existingPts=circleStep.dataPoints[1];
if (existingPts.length > out - $in + 1) {
var newPts=Clazz.array($I$(5), [out - $in + 1]);
System.arraycopy$O$I$O$I$I(existingPts, 0, newPts, 0, newPts.length);
circleStep.dataPoints[1]=newPts;
for (var k=newPts.length; k < existingPts.length; k++) {
if (existingPts[k] != null ) {
framesToRefresh.add$O(Integer.valueOf$I(n));
}}
}}
} else {
for (var stepNum=0; stepNum <= clip.getStepCount$(); stepNum++) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var n=clip.stepToFrame$I(stepNum);
var step=this.steps.getStep$I(n);
for (var i=0; i <= step.dataPoints[1].length; i++) {
var p=step.getDataPoint$I$I(1, i);
if (p != null ) {
p.detach$();
framesToRefresh.add$O(Integer.valueOf$I(n));
}}
step.dataPoints[1]=Clazz.array($I$(5), [0]);
}
}}$I$(11).doRefresh=true;
for (var n, $n = framesToRefresh.iterator$(); $n.hasNext$()&&((n=($n.next$()).intValue$()),1);) {
if (this.abortRefreshAttachments) {
this.refreshingAttachments=false;
return;
}var step=this.steps.getStep$I(n);
step.refreshCircle$();
}
this.tp.refreshTrackBar$();
this.erase$();
this.invalidateData$O(this);
this.refreshingAttachments=false;
if (this.loadingAttachments) {
this.tp.changed=false;
this.loadingAttachments=false;
}});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
if (menu0 == null ) return menu;
this.originToCenterItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.OriginToCenter"));
this.originToCenterMenu.setText$S($I$(6).getString$S("CircleFitter.MenuItem.OriginToCenter"));
this.originToCenterAllItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.AllFrames"));
this.setRadiusItem.setText$S($I$(6).getString$S("CircleFitter.Dialog.SetRadius.Title") + "...");
this.setRadiusMenu.setText$S($I$(6).getString$S("CircleFitter.Dialog.SetRadius.Title"));
this.setRadiusAllItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.AllFrames"));
this.deleteStepItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.DeletePoint"));
this.clearPointsItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.ClearPoints"));
this.clearPointsItem.setEnabled$Z(!this.isLocked$());
this.fixedItem.setText$S($I$(6).getString$S("TapeMeasure.MenuItem.Fixed"));
this.fixedItem.setSelected$Z(this.isFixed$());
this.fixedItem.setEnabled$Z(this.attachments == null  || !this.isAttached$() );
menu.insert$javax_swing_JMenuItem$I(this.attachmentItem, 0);
menu.insertSeparator$I(1);
this.addFixedItem$javax_swing_JMenu(menu);
this.removeDeleteTrackItem$javax_swing_JMenu(menu);
menu.addSeparator$();
var fixedOrigin=trackerPanel.getCoords$().isFixedOrigin$();
var fixedScale=trackerPanel.getCoords$().isFixedScale$();
var step=this.getStep$I(trackerPanel.getFrameNumber$());
var valid=step != null  && step.isValidCircle$() ;
if (fixedOrigin) {
this.originToCenterItem.setEnabled$Z(!trackerPanel.getCoords$().isLocked$() && valid );
menu.add$javax_swing_JMenuItem(this.originToCenterItem);
} else {
this.originToCenterMenu.setEnabled$Z(!trackerPanel.getCoords$().isLocked$() && valid );
menu.add$javax_swing_JMenuItem(this.originToCenterMenu);
this.originToCenterItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.ThisFrame"));
this.originToCenterMenu.add$javax_swing_JMenuItem(this.originToCenterItem);
this.originToCenterMenu.add$javax_swing_JMenuItem(this.originToCenterAllItem);
}if (fixedScale) {
this.setRadiusItem.setEnabled$Z(!trackerPanel.getCoords$().isLocked$() && valid );
menu.add$javax_swing_JMenuItem(this.setRadiusItem);
} else {
this.setRadiusMenu.setEnabled$Z(!trackerPanel.getCoords$().isLocked$() && valid );
menu.add$javax_swing_JMenuItem(this.setRadiusMenu);
this.setRadiusItem.setText$S($I$(6).getString$S("CircleFitter.MenuItem.ThisFrame"));
this.setRadiusMenu.add$javax_swing_JMenuItem(this.setRadiusItem);
this.setRadiusMenu.add$javax_swing_JMenuItem(this.setRadiusAllItem);
}menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.deleteStepItem);
menu.add$javax_swing_JMenuItem(this.clearPointsItem);
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
return menu;
});

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var n=trackerPanel.getFrameNumber$();
this.refreshFields$I(n);
var step=this.getStep$I(n);
var pts=step.getValidDataPoints$();
var dataCount=pts.size$();
this.pointCountButton.setText$S(dataCount + " " + $I$(6).getString$S("CircleFitter.Button.DataPoints") );
this.stepLabel.setText$S($I$(6).getString$S("TTrack.Label.Step"));
this.stepValueLabel.setText$S(trackerPanel.getStepNumber$() + ":");
var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
list.add$O(this.stepLabel);
list.add$O(this.stepValueLabel);
list.add$O(this.tSeparator);
list.add$O(this.pointCountButton);
list.add$O(this.stepSeparator);
if (dataCount > 2) {
this.xLabel.setText$S(C$.dataVariables[1]);
this.yLabel.setText$S(C$.dataVariables[2]);
this.xField.setToolTipText$S($I$(6).getString$S("CircleFitter.Field.CenterX.Tooltip"));
this.yField.setToolTipText$S($I$(6).getString$S("CircleFitter.Field.CenterY.Tooltip"));
this.magLabel.setText$S($I$(6).getString$S("CircleFitter.Label.Radius"));
this.magField.setToolTipText$S($I$(6).getString$S("CircleFitter.Field.Radius.Tooltip"));
this.xField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[1]));
this.yField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[2]));
this.magField.setUnits$S(trackerPanel.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(this, C$.dataVariables[3]));
list.add$O(this.magLabel);
list.add$O(this.magField);
list.add$O(this.magSeparator);
list.add$O(this.xLabel);
list.add$O(this.xField);
list.add$O(this.xSeparator);
list.add$O(this.yLabel);
list.add$O(this.yField);
list.add$O(this.ySeparator);
} else if (trackerPanel.getSelectedPoint$() == null ) {
this.clickToMarkLabel.setText$S($I$(6).getString$S("CircleFitter.Label.MarkPoint"));
list.add$O(this.clickToMarkLabel);
}return list;
});

Clazz.newMeth(C$, 'getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint',  function (trackerPanel, point) {
var list=C$.superclazz.prototype.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint.apply(this, [trackerPanel, point]);
if (!(Clazz.instanceOf(point, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint"))) {
return list;
}var n=trackerPanel.getFrameNumber$();
this.refreshFields$I(n);
this.stepValueLabel.setText$S(trackerPanel.getStepNumber$() + ":");
var step=this.getStep$I(n);
this.xDataPointLabel.setText$S("x");
this.yDataPointLabel.setText$S("y");
list.add$O(this.xDataPointLabel);
list.add$O(this.xDataField);
list.add$O(this.xDataPointSeparator);
list.add$O(this.yDataPointLabel);
list.add$O(this.yDataField);
list.add$O(this.yDataPointSeparator);
var pts=step.getValidDataPoints$();
var dataCount=pts.size$();
if (dataCount < 3) {
this.clickToMarkLabel.setText$S($I$(6).getString$S("CircleFitter.Label.MarkPoint"));
list.add$O(this.clickToMarkLabel);
}return list;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) || !this.isVisible$() ) return null;
var trackerPanel=panel;
var n=trackerPanel.getFrameNumber$();
if (trackerPanel.getPlayer$().getVideoClip$().includesFrame$I(n)) {
var step=this.steps.getStep$I(n);
var ia=step.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(trackerPanel, xpix, ypix);
if (ia == null ) {
this.partName=$I$(6).getString$S("TTrack.Selected.Hint");
this.hint=$I$(6).getString$S("CircleFitter.Hint.Mark3");
return null;
}if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint")) {
this.partName=$I$(6).getString$S("CircleFitter.DataPoint.Name");
this.hint=$I$(6).getString$S("CircleFitter.DataPoint.Hint");
} else if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.CenterPoint")) {
this.partName=$I$(6).getString$S("CircleFitter.Center.Name");
this.hint=$I$(6).getString$S("CircleFitter.Center.Hint");
} else if (ia === step.edge ) {
this.partName=$I$(6).getString$S("CircleFitter.Circle.Name");
this.hint=$I$(6).getString$S("CircleFitter.Circle.Hint");
ia=step.center;
}return ia;
}return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(6).getString$S("CircleFitter.Name");
});

Clazz.newMeth(C$, 'getNumberFields$',  function () {
this.numberFields.clear$();
this.numberFields.put$O$O(C$.dataVariables[0], Clazz.array($I$(18), -1, [this.tField]));
this.numberFields.put$O$O(C$.dataVariables[1], Clazz.array($I$(18), -1, [this.xField]));
this.numberFields.put$O$O(C$.dataVariables[2], Clazz.array($I$(18), -1, [this.yField]));
this.numberFields.put$O$O(C$.dataVariables[3], Clazz.array($I$(18), -1, [this.magField]));
this.numberFields.put$O$O(C$.dataVariables[6], Clazz.array($I$(18), -1, [this.xDataField]));
this.numberFields.put$O$O(C$.dataVariables[7], Clazz.array($I$(18), -1, [this.yDataField]));
return this.numberFields;
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) this.removePanelEvents$SA(C$.panelEventsCircleFitter);
C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
if (this.tp != null ) {
this.addPanelEvents$SA(C$.panelEventsCircleFitter);
this.setFixed$Z(this.isFixed$());
}});

Clazz.newMeth(C$, 'setAnglesInRadians$Z',  function (radians) {
C$.superclazz.prototype.setAnglesInRadians$Z.apply(this, [radians]);
var step=this.getStep$I(this.tp.getFrameNumber$());
step.repaint$();
});

Clazz.newMeth(C$, 'getTargetDescription$I',  function (pointIndex) {
if (pointIndex == 0) return $I$(6).getString$S("Protractor.Vertex.Name");
var s=$I$(6).getString$S("Protractor.End.Name");
return s + " " + (pointIndex) ;
});

Clazz.newMeth(C$, 'getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var frameCount=panel.getPlayer$().getVideoClip$().getFrameCount$();
if (this.getSteps$().length < frameCount) {
this.steps.setLength$I(frameCount);
this.dataValid=false;
}return C$.superclazz.prototype.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
if (this.refreshDataLater || trackerPanel == null   || data == null  ) return;
var count=6;
var time=C$.dataVariables[0];
if (!data.getDataset$I(0).getColumnName$I(0).equals$O(time)) {
data.setXYColumnNames$I$S$S(0, time, C$.dataVariables[1]);
data.setXYColumnNames$I$S$S(1, time, C$.dataVariables[2]);
data.setXYColumnNames$I$S$S(2, time, C$.dataVariables[3]);
data.setXYColumnNames$I$S$S(3, time, C$.dataVariables[8]);
data.setXYColumnNames$I$S$S(4, time, C$.dataVariables[4]);
data.setXYColumnNames$I$S$S(5, time, C$.dataVariables[5]);
}var player=trackerPanel.getPlayer$();
var clip=player.getVideoClip$();
var len=clip.getStepCount$();
var validData=Clazz.array(Double.TYPE, [count + 1, len]);
this.dataFrames.clear$();
for (var i=0; i < len; i++) {
var frame=clip.stepToFrame$I(i);
var step=this.getStep$I(frame);
step.dataVisible=true;
var t=player.getStepTime$I(i) / 1000.0;
var center=step.getWorldCenter$();
validData[0][i]=center == null  ? NaN : center.getX$();
validData[1][i]=center == null  ? NaN : center.getY$();
validData[2][i]=step.getWorldRadius$();
validData[3][i]=step.getValidDataPoints$().size$();
validData[4][i]=i;
validData[5][i]=frame;
validData[6][i]=t;
this.dataFrames.add$O(Integer.valueOf$I(frame));
}
this.clearColumns$org_opensourcephysics_display_DatasetManager$I$SA$S$DAA$I(data, count, null, "CircleFitter.Data.Description.", validData, len);
});

Clazz.newMeth(C$, 'refreshStep$org_opensourcephysics_cabrillo_tracker_CircleFitterStep',  function (step) {
var changed=false;
if (this.attachToSteps && !this.isRelativeFrameNumbers && this.isAttached$()  ) {
var firstFrame=this.tp.getPlayer$().getVideoClip$().stepToFrame$I(0);
var keyStep=this.steps.getStep$I(firstFrame);
if (keyStep !== step ) {
var keyPts=keyStep.dataPoints[1];
var pts=step.dataPoints[1];
if (keyPts.length != pts.length) {
changed=true;
pts=Clazz.array($I$(5), [keyPts.length]);
for (var i=0; i < pts.length; i++) {
var next=keyPts[i];
pts[i]=next == null  ? null : Clazz.new_($I$(5,1).c$$D$D,[step, null, next.x, next.y]);
}
step.dataPoints[1]=pts;
} else {
for (var i=0; i < pts.length; i++) {
if (keyPts[i] == null ) {
changed=changed || pts[i] != null  ;
pts[i]=null;
} else {
if (pts[i] == null ) {
changed=true;
pts[i]=Clazz.new_($I$(5,1).c$$D$D,[step, null, 0, 0]);
}changed=changed || keyPts[i].x != pts[i].x   || keyPts[i].y != pts[i].y  ;
pts[i].setLocation$java_awt_geom_Point2D(keyPts[i]);
}}
}}}var keyStep=this.getKeyStep$org_opensourcephysics_cabrillo_tracker_CircleFitterStep(step);
if (keyStep === step ) {
if (changed) {
step.refreshCircle$();
}return;
}var different=keyStep.dataPoints.length != step.dataPoints.length;
if (!different) {
different=keyStep.dataPoints[0].length != step.dataPoints[0].length;
}if (!different) {
var keyPts=keyStep.dataPoints[0];
var pts=step.dataPoints[0];
for (var i=0; i < keyPts.length; i++) {
var p1=keyPts[i];
var p2=pts[i];
if (p1 != null  && p2 != null  ) {
if (p1.x != p2.x  || p1.y != p2.y  ) {
different=true;
break;
}} else if (p1 != null  || p2 != null  ) {
different=true;
break;
}}
}if (different) {
step.copy$org_opensourcephysics_cabrillo_tracker_CircleFitterStep(keyStep);
} else if (changed) {
step.refreshCircle$();
}});

Clazz.newMeth(C$, 'refreshFields$I',  function (frameNumber) {
if (this.tp == null ) return;
var step=this.getStep$I(frameNumber);
this.magField.setValue$D(step.getWorldRadius$());
var worldPt=step.getWorldCenter$();
this.xField.setValue$D(worldPt == null  ? NaN : worldPt.getX$());
this.yField.setValue$D(worldPt == null  ? NaN : worldPt.getY$());
var p=this.tp.getSelectedPoint$();
if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.CircleFitterStep.DataPoint")) {
worldPt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(this.tp);
this.xDataField.setValue$D(worldPt.getX$());
this.yDataField.setValue$D(worldPt.getY$());
this.xDataField.setEnabled$Z(!p.isAttached$() && !this.isLocked$() );
this.yDataField.setEnabled$Z(!p.isAttached$() && !this.isLocked$() );
}});

Clazz.newMeth(C$, 'getKeyStep$org_opensourcephysics_cabrillo_tracker_CircleFitterStep',  function (step) {
var key=0;
if (!this.isFixed$()) {
for (var i, $i = this.keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= step.n) key=i;
}
}return this.steps.getStep$I(key);
});

Clazz.newMeth(C$, 'loadAttachmentsFromNames$Z',  function (refresh) {
var loaded=C$.superclazz.prototype.loadAttachmentsFromNames$Z.apply(this, [false]);
if (!loaded && this.stepAttachmentName == null  ) return false;
this.loadingAttachments=true;
var track=this.tp.getTrack$S(this.stepAttachmentName);
if (track != null ) {
loaded=true;
this.attachmentForSteps=Clazz.array($I$(2), -1, [track]);
this.stepAttachmentName=null;
}if (loaded && refresh ) {
this.refreshAttachmentsLater$();
} else {
this.loadingAttachments=false;
}return loaded;
});

Clazz.newMeth(C$, 'setCoordsOriginToCenter$Z',  function (all) {
if (this.tp.getCoords$().isLocked$()) {
return;
}var control=Clazz.new_([this.tp.getCoords$()],$I$(22,1).c$$O);
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null  || !step.isValidCircle$() ) {
return;
}var pt=step.center;
if (this.tp.getCoords$().isFixedOrigin$()) {
this.tp.getCoords$().setOriginXY$I$D$D(0, pt.x, pt.y);
} else if (all) {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
step=steps[i];
if (step != null  && step.isValidCircle$()  && (this.keyFrames.contains$O(Integer.valueOf$I(i)) || this.tp.getCoords$().getKeyFrames$().contains$O(Integer.valueOf$I(i)) ) ) {
pt=step.center;
}this.tp.getCoords$().setOriginXY$I$D$D(i, pt.x, pt.y);
}
} else {
this.tp.getCoords$().setOriginXY$I$D$D(n, pt.x, pt.y);
}this.tp.getAxes$().setVisible$Z(true);
$I$(23).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this.tp, control);
});

Clazz.newMeth(C$, 'setCoordsScaleFromRadius$Z',  function (all) {
if (this.tp.getCoords$().isLocked$()) {
return;
}var control=Clazz.new_([this.tp.getCoords$()],$I$(22,1).c$$O);
var n=this.tp.getFrameNumber$();
var step=this.getStep$I(n);
if (step == null  || !step.isValidCircle$() ) {
return;
}var r=step.getWorldRadius$();
var init=this.magField.getText$();
if (init.contains$CharSequence(" ")) {
init=init.substring$I$I(0, init.indexOf$S(" "));
}var targetR=Clazz.array(Double.TYPE, -1, [r]);
Clazz.new_($I$(38,1)).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(null, $I$(6).getString$S("CircleFitter.Dialog.SetRadius.Message"), $I$(6).getString$S("CircleFitter.Dialog.SetRadius.Title"), -1, null, null, init, ((P$.CircleFitter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CircleFitter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var s=e.getActionCommand$.apply(e, []);
if (s != null ) {
if (s.contains$CharSequence.apply(s, [" "])) {
s=s.substring$I$I.apply(s, [0, s.indexOf$S.apply(s, [" "])]);
}try {
this.$finals$.targetR[0]=(Double.valueOf$S(s)).valueOf();
} catch (e1) {
if (Clazz.exceptionOf(e1,"NumberFormatException")){
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'].setCoordsScaleFromRadius$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitter'], [this.$finals$.all]);
} else {
throw e1;
}
}
}});
})()
), Clazz.new_(P$.CircleFitter$lambda1.$init$,[this, {all:all,targetR:targetR}])));
if (r == targetR[0] ) return;
var scale=this.tp.getCoords$().getScaleX$I(n) * r / targetR[0];
if (this.tp.getCoords$().isFixedScale$()) {
this.tp.getCoords$().setScaleXY$I$D$D(0, scale, scale);
} else if (all) {
var steps=this.getSteps$();
for (var i=0; i < steps.length; i++) {
step=steps[i];
if (step != null  && step.isValidCircle$()  && (this.keyFrames.contains$O(Integer.valueOf$I(i)) || this.tp.getCoords$().getKeyFrames$().contains$O(Integer.valueOf$I(i)) ) ) {
r=step.getWorldRadius$();
scale=this.tp.getCoords$().getScaleX$I(i) * r / targetR[0];
}this.tp.getCoords$().setScaleXY$I$D$D(i, scale, scale);
}
} else {
this.tp.getCoords$().setScaleXY$I$D$D(n, scale, scale);
}$I$(23).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this.tp, control);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(39,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
var center=$I$(6).getString$S("CircleFitter.Data.Center") + "}";
var selected=$I$(6).getString$S("TTrack.Selected.Hint") + "}";
var points=$I$(6).getString$S("CircleFitter.Data.PointCount");
C$.dataVariables=Clazz.array(String, -1, ["t", "x_{" + center, "y_{" + center, "R", "step", "frame", "x_{" + selected, "y_{" + selected, points]);
C$.fieldVariables=Clazz.array(String, -1, ["t", "x_{" + center, "y_{" + center, "R", "x_{" + selected, "y_{" + selected]);
C$.formatVariables=Clazz.array(String, -1, ["t", "xy", "R"]);
C$.formatMap=Clazz.new_($I$(7,1));
C$.formatMap.put$O$O("t", Clazz.array(String, -1, ["t"]));
C$.formatMap.put$O$O("xy", Clazz.array(String, -1, ["x_{" + center, "y_{" + center, "x_{" + selected, "y_{" + selected]));
C$.formatMap.put$O$O("R", Clazz.array(String, -1, ["R"]));
C$.formatDescriptionMap=Clazz.new_($I$(7,1));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[0], $I$(6).getString$S("PointMass.Data.Description.0"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[1], $I$(6).getString$S("CircleFitter.Description.Positions"));
C$.formatDescriptionMap.put$O$O(C$.formatVariables[2], $I$(6).getString$S("CircleFitter.Label.Radius"));
};
C$.allVariables=$I$(2).createAllVariables$SA$SA(C$.dataVariables, null);
C$.panelEventsCircleFitter=Clazz.array(String, -1, ["transform", "startframe", "stepcount", "stepsize"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CircleFitter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var circleFitter=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$Z("fixed", circleFitter.isFixed$());
var steps=circleFitter.getSteps$();
var dataList=Clazz.new_($I$(3,1));
for (var n=0; n < steps.length; n++) {
if (steps[n] == null  || !circleFitter.keyFrames.contains$O(Integer.valueOf$I(n)) ) continue;
var step=steps[n];
var pts=step.dataPoints[0];
var len=pts.length;
if (len == 0) {
dataList.add$O(Clazz.array(Double.TYPE, -1, [n]));
continue;
}var stepData=Clazz.array(Double.TYPE, [2 * len + 1]);
stepData[0]=n;
for (var i=0; i < len; i++) {
var p=pts[i];
stepData[2 * i + 1]=p.x;
stepData[2 * i + 2]=p.y;
}
dataList.add$O(stepData);
}
var data=dataList.toArray$OA(Clazz.array(Double.TYPE, [dataList.size$(), null]));
control.setValue$S$O("framedata", data);
if (circleFitter.attachToSteps) {
control.setValue$S$Z("attach_to_steps", true);
}if (circleFitter.isRelativeFrameNumbers) {
control.setValue$S$Z("relative_frames", true);
}control.setValue$S$I("absolute_start", circleFitter.absoluteStart);
control.setValue$S$I("attachment_framecount", circleFitter.attachmentFrameCount);
control.setValue$S$I("relative_start", circleFitter.relativeStart);
if (circleFitter.attachmentForSteps != null  && circleFitter.attachmentForSteps.length > 0  && circleFitter.attachmentForSteps[0] != null  ) {
control.setValue$S$O("step_attachment", circleFitter.attachmentForSteps[0].getName$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var version=4.91;
var parent=control.getParentProperty$();
while (parent != null ){
if (parent.getPropertyName$().equals$O("TrackerPanel") && Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl") ) {
var trackerControl=parent;
version=trackerControl.getDouble$S("version");
}parent=parent.getParentProperty$();
}
var circleFitter=obj;
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var locked=circleFitter.isLocked$();
circleFitter.setLocked$Z(false);
circleFitter.fixedPosition=control.getBoolean$S("fixed");
circleFitter.attachToSteps=control.getBoolean$S("attach_to_steps");
circleFitter.isRelativeFrameNumbers=control.getBoolean$S("relative_frames");
if (control.getPropertyNamesRaw$().contains$O("absolute_start")) circleFitter.absoluteStart=control.getInt$S("absolute_start");
if (control.getPropertyNamesRaw$().contains$O("attachment_framecount")) circleFitter.attachmentFrameCount=control.getInt$S("attachment_framecount");
if (control.getPropertyNamesRaw$().contains$O("relative_start")) circleFitter.relativeStart=control.getInt$S("relative_start");
var name=control.getString$S("step_attachment");
if (name != null ) {
circleFitter.stepAttachmentName=name;
}circleFitter.keyFrames.clear$();
circleFitter.keyFrames.add$O(Integer.valueOf$I(0));
var data=control.getObject$S("framedata");
for (var i=0; i < data.length; i++) {
if (data[i] == null  || data[i].length < 1 ) continue;
var n=(data[i][0]|0);
circleFitter.keyFrames.add$O(Integer.valueOf$I(n));
if (n > 0) {
circleFitter.fixedPosition=false;
}var step=circleFitter.steps.getStep$I(n);
var prevCount=step.dataPoints[0].length;
if (data[i].length == 1) {
step.dataPoints[0]=Clazz.array($I$(5), [0]);
if (prevCount > 0) {
step.refreshCircle$();
}continue;
}var pointCount=version < 4.92  ? ((data[i].length - 3)/2|0) : ((data[i].length - 1)/2|0);
var loadedPoints=Clazz.array($I$(5), [pointCount]);
for (var j=0; j < pointCount; j++) {
loadedPoints[j]=Clazz.new_($I$(5,1).c$$D$D,[step, null, data[i][2 * j + 1], data[i][2 * j + 2]]);
}
step.dataPoints[0]=loadedPoints;
step.refreshCircle$();
}
circleFitter.setLocked$Z(locked);
circleFitter.invalidateData$O(circleFitter);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
