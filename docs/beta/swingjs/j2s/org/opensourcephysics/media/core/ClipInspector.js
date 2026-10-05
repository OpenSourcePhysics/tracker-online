(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.media.core.MediaRes','javax.swing.BorderFactory','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','java.awt.Color','java.awt.Font','org.opensourcephysics.media.core.IntegerField','org.opensourcephysics.media.core.NumberField','javax.swing.Box','java.awt.GridBagConstraints','java.awt.GridBagLayout','javax.swing.JButton']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClipInspector", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dtMin=1.0E-18;
this.fpsMin=1.0E-18;
this.timeUnit="s";
this.isPositioned=false;
},1);

C$.$fields$=[['Z',['prevDefault','isPositioned'],'D',['prevDt','prevRate','prevStartTime','dtMin','fpsMin'],'I',['prevFrame','prevStart','prevEnd','prevSize','prevCount','currentStart','currentCount'],'S',['timeUnit'],'O',['clip','org.opensourcephysics.media.core.VideoClip','clipControl','org.opensourcephysics.media.core.ClipControl','startLabel','javax.swing.JLabel','+stepSizeLabel','+t0Label','+endLabel','+dtLabel','+fpsLabel','startField','org.opensourcephysics.media.core.IntegerField','+stepSizeField','+endField','t0Field','org.opensourcephysics.media.core.NumberField','+dtField','+fpsField','okButton','javax.swing.JButton','+cancelButton','frameBox','javax.swing.Box','+timeBox']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$org_opensourcephysics_media_core_VideoClip$org_opensourcephysics_media_core_ClipControl',  function (frame, videoClip, control) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[frame, false]);C$.$init$.apply(this);
this.setResizable$Z(false);
this.clip=videoClip;
this.clipControl=control;
p$1.createGUI.apply(this, []);
this.refresh$();
this.initialize$();
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
this.prevStart=this.clip.getStartFrameNumber$();
this.prevEnd=this.clip.getEndFrameNumber$();
this.prevSize=this.clip.getStepSize$();
this.prevCount=this.clip.getStepCount$();
this.prevStartTime=this.clip.getStartTime$();
this.prevDefault=this.clip.isDefaultStartTime;
this.prevDt=this.clipControl.getMeanFrameDuration$();
this.prevRate=this.clipControl.getRate$();
this.prevFrame=this.clipControl.getFrameNumber$();
this.currentStart=this.clip.getStartFrameNumber$();
this.currentCount=this.clip.getStepCount$();
});

Clazz.newMeth(C$, 'refresh$',  function () {
this.setTitle$S($I$(1).getString$S("ClipInspector.Title"));
this.startLabel.setText$S($I$(1).getString$S("ClipInspector.Label.StartFrame"));
this.stepSizeLabel.setText$S($I$(1).getString$S("ClipInspector.Label.StepSize"));
this.t0Label.setText$S($I$(1).getString$S("ClipInspector.Label.StartTime"));
this.endLabel.setText$S($I$(1).getString$S("ClipInspector.Label.EndFrame"));
this.cancelButton.setText$S($I$(1).getString$S("Dialog.Button.Cancel"));
this.okButton.setText$S($I$(1).getString$S("Dialog.Button.OK"));
this.dtLabel.setText$S($I$(1).getString$S("ClipInspector.Label.FrameDt"));
this.fpsLabel.setText$S($I$(1).getString$S("ClipInspector.Label.FPS"));
this.frameBox.setBorder$javax_swing_border_Border($I$(2,"createTitledBorder$S",[$I$(1).getString$S("ClipInspector.Title.Frames")]));
this.timeBox.setBorder$javax_swing_border_Border($I$(2,"createTitledBorder$S",[$I$(1).getString$S("ClipInspector.Title.FrameTimes")]));
this.pack$();
});

Clazz.newMeth(C$, 'setTimeUnit$S',  function (unit) {
if (unit != null ) {
this.timeUnit=unit;
this.t0Field.setUnits$S(" " + this.timeUnit);
this.dtField.setUnits$S(" " + this.timeUnit);
this.fpsField.setUnits$S(" /" + this.timeUnit);
this.updateDisplay$();
}});

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var labelBorder=$I$(2).createEmptyBorder$I$I$I$I(3, 2, 3, 2);
this.startLabel=Clazz.new_($I$(5,1));
this.startLabel.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.startLabel.setFont$java_awt_Font(Clazz.new_($I$(7,1).c$$S$I$I,["Dialog", 0, 12]));
this.startLabel.setBorder$javax_swing_border_Border(labelBorder);
this.startField=Clazz.new_($I$(8,1).c$$I,[5]);
this.startField.setMaximumSize$java_awt_Dimension(this.startField.getPreferredSize$());
var startListener=((P$.ClipInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prevStart=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStartFrameNumber$();
if (!this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStartFrameNumber$I$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].startField.getIntValue$(), this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getEndFrameNumber$())) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].startField.selectAll$();
return;
}this.b$['org.opensourcephysics.media.core.ClipInspector'].currentStart=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStartFrameNumber$();
if (!this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.isDefaultStartTime) {
var startTime=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStartTime$();
startTime+=(this.b$['org.opensourcephysics.media.core.ClipInspector'].currentStart - prevStart) * this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.getMeanFrameDuration$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStartTime$D(startTime);
}this.b$['org.opensourcephysics.media.core.ClipInspector'].currentCount=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStepCount$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].startField.selectAll$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setStepNumber$I(0);
});
})()
), Clazz.new_(P$.ClipInspector$1.$init$,[this, null]));
this.startField.addActionListener$java_awt_event_ActionListener(startListener);
this.startField.addFocusListener$java_awt_event_FocusListener(((P$.ClipInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].startField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.$finals$.startListener.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.ClipInspector$2.$init$,[this, {startListener:startListener}])));
this.stepSizeLabel=Clazz.new_($I$(5,1));
this.stepSizeLabel.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.stepSizeLabel.setFont$java_awt_Font(Clazz.new_($I$(7,1).c$$S$I$I,["Dialog", 0, 12]));
this.stepSizeLabel.setBorder$javax_swing_border_Border(labelBorder);
this.stepSizeField=Clazz.new_($I$(8,1).c$$I,[5]);
this.stepSizeField.setMaximumSize$java_awt_Dimension(this.stepSizeField.getPreferredSize$());
this.stepSizeField.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var frameNumber=this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.getFrameNumber$();
if (!this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStepSize$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].stepSizeField.getIntValue$())) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].stepSizeField.selectAll$();
return;
}this.b$['org.opensourcephysics.media.core.ClipInspector'].currentCount=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStepCount$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].stepSizeField.selectAll$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setStepNumber$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.frameToStep$I(frameNumber));
});
})()
), Clazz.new_(P$.ClipInspector$3.$init$,[this, null])));
this.stepSizeField.addFocusListener$java_awt_event_FocusListener(((P$.ClipInspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].stepSizeField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var frameNumber=this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.getFrameNumber$();
if (!this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStepSize$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].stepSizeField.getIntValue$())) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].stepSizeField.selectAll$();
return;
}this.b$['org.opensourcephysics.media.core.ClipInspector'].currentCount=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStepCount$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setStepNumber$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.frameToStep$I(frameNumber));
});
})()
), Clazz.new_(P$.ClipInspector$4.$init$,[this, null])));
this.endLabel=Clazz.new_($I$(5,1));
this.endLabel.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.endLabel.setFont$java_awt_Font(Clazz.new_($I$(7,1).c$$S$I$I,["Dialog", 0, 12]));
this.endLabel.setBorder$javax_swing_border_Border(labelBorder);
this.endField=Clazz.new_($I$(8,1).c$$I,[5]);
this.endField.setMaximumSize$java_awt_Dimension(this.endField.getPreferredSize$());
this.endField.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setEndFrameNumber$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].endField.getIntValue$())) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].endField.selectAll$();
return;
}this.b$['org.opensourcephysics.media.core.ClipInspector'].currentCount=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStepCount$();
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].endField.selectAll$();
var video=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getVideo$();
if (video != null  && video.getFrameCount$() > 1 ) this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setStepNumber$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStepCount$() - 1);
});
})()
), Clazz.new_(P$.ClipInspector$5.$init$,[this, null])));
this.endField.addFocusListener$java_awt_event_FocusListener(((P$.ClipInspector$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].endField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (!this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setEndFrameNumber$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].endField.getIntValue$())) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].endField.selectAll$();
return;
}this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
var video=this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getVideo$();
if (video != null  && video.getFrameCount$() > 1 ) this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setStepNumber$I(this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.getStepCount$() - 1);
});
})()
), Clazz.new_(P$.ClipInspector$6.$init$,[this, null])));
this.t0Label=Clazz.new_($I$(5,1));
this.t0Label.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.t0Label.setFont$java_awt_Font(Clazz.new_($I$(7,1).c$$S$I$I,["Dialog", 0, 12]));
this.t0Label.setBorder$javax_swing_border_Border(labelBorder);
this.t0Field=Clazz.new_($I$(9,1).c$$I,[5]);
var exp="0.00E0";
var fixed="0.000";
var limits=Clazz.array(Double.TYPE, -1, [0.01, 0.1, 1, 10]);
this.t0Field.setPatterns$SA$DA(Clazz.array(String, -1, [fixed, fixed, fixed, fixed, exp]), limits);
this.t0Field.setUnits$S(" " + this.timeUnit);
this.t0Field.setMaximumSize$java_awt_Dimension(this.t0Field.getPreferredSize$());
this.t0Field.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.ClipInspector'].t0Field.getText$().equals$O("")) this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStartTime$D(NaN);
 else this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStartTime$D(this.b$['org.opensourcephysics.media.core.ClipInspector'].t0Field.getValue$() * 1000);
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].t0Field.selectAll$();
});
})()
), Clazz.new_(P$.ClipInspector$7.$init$,[this, null])));
this.t0Field.addFocusListener$java_awt_event_FocusListener(((P$.ClipInspector$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].t0Field.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.ClipInspector'].t0Field.getText$().equals$O("")) this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStartTime$D(NaN);
 else this.b$['org.opensourcephysics.media.core.ClipInspector'].clip.setStartTime$D(this.b$['org.opensourcephysics.media.core.ClipInspector'].t0Field.getValue$() * 1000);
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
});
})()
), Clazz.new_(P$.ClipInspector$8.$init$,[this, null])));
this.dtLabel=Clazz.new_($I$(5,1));
this.dtLabel.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.dtLabel.setFont$java_awt_Font(Clazz.new_($I$(7,1).c$$S$I$I,["Dialog", 0, 12]));
this.dtLabel.setBorder$javax_swing_border_Border(labelBorder);
this.dtField=Clazz.new_($I$(9,1).c$$I,[5]);
this.dtField.setPatterns$SA$DA(Clazz.array(String, -1, [exp, fixed, fixed, fixed, exp]), limits);
this.dtField.setMaxValue$D(1 / this.fpsMin);
this.dtField.setMinValue$D(this.dtMin);
this.dtField.setUnits$S(" " + this.timeUnit);
this.dtField.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setFrameDuration$D(this.b$['org.opensourcephysics.media.core.ClipInspector'].dtField.getValue$() * 1000);
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].dtField.selectAll$();
});
})()
), Clazz.new_(P$.ClipInspector$9.$init$,[this, null])));
this.dtField.addFocusListener$java_awt_event_FocusListener(((P$.ClipInspector$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].dtField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setFrameDuration$D(this.b$['org.opensourcephysics.media.core.ClipInspector'].dtField.getValue$() * 1000);
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
});
})()
), Clazz.new_(P$.ClipInspector$10.$init$,[this, null])));
this.fpsLabel=Clazz.new_($I$(5,1));
this.fpsLabel.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.fpsLabel.setFont$java_awt_Font(Clazz.new_($I$(7,1).c$$S$I$I,["Dialog", 0, 12]));
this.fpsLabel.setBorder$javax_swing_border_Border(labelBorder);
this.fpsField=Clazz.new_($I$(9,1).c$$I,[5]);
exp="0.0E0";
fixed="0.00";
this.fpsField.setPatterns$SA(Clazz.array(String, -1, [exp, fixed, fixed, fixed, exp]));
this.fpsField.setMaxValue$D(1 / this.dtMin);
this.fpsField.setMinValue$D(this.fpsMin);
this.fpsField.setUnits$S(" /" + this.timeUnit);
this.fpsField.setMaximumSize$java_awt_Dimension(this.fpsField.getPreferredSize$());
this.fpsField.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setFrameDuration$D(1000 / this.b$['org.opensourcephysics.media.core.ClipInspector'].fpsField.getValue$());
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['org.opensourcephysics.media.core.ClipInspector'].fpsField.selectAll$();
});
})()
), Clazz.new_(P$.ClipInspector$11.$init$,[this, null])));
this.fpsField.addFocusListener$java_awt_event_FocusListener(((P$.ClipInspector$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].fpsField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ClipInspector'].clipControl.setFrameDuration$D(1000 / this.b$['org.opensourcephysics.media.core.ClipInspector'].fpsField.getValue$());
this.b$['org.opensourcephysics.media.core.ClipInspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
});
})()
), Clazz.new_(P$.ClipInspector$12.$init$,[this, null])));
var dataBox=$I$(10).createVerticalBox$();
var lined=$I$(2,"createLineBorder$java_awt_Color",[$I$(6).GRAY]);
var empty=$I$(2).createEmptyBorder$I$I$I$I(2, 4, 2, 4);
dataBox.setBorder$javax_swing_border_Border($I$(2).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(lined, empty));
contentPane.add$java_awt_Component$O(dataBox, "Center");
this.frameBox=$I$(10).createVerticalBox$();
this.timeBox=$I$(10).createVerticalBox$();
dataBox.add$java_awt_Component(this.frameBox);
dataBox.add$java_awt_Component(this.timeBox);
var c=Clazz.new_($I$(11,1));
var startPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(3,1).c$$java_awt_LayoutManager);
c.weightx=0.5;
c.anchor=22;
startPane.add$java_awt_Component$O(this.startLabel, c);
c.weightx=0.0;
c.anchor=21;
startPane.add$java_awt_Component$O(this.startField, c);
this.frameBox.add$java_awt_Component(startPane);
var sizePane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(3,1).c$$java_awt_LayoutManager);
c.weightx=0.5;
c.anchor=22;
sizePane.add$java_awt_Component$O(this.stepSizeLabel, c);
c.weightx=0.0;
c.anchor=21;
sizePane.add$java_awt_Component$O(this.stepSizeField, c);
this.frameBox.add$java_awt_Component(sizePane);
var endPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(3,1).c$$java_awt_LayoutManager);
c.weightx=0.5;
c.anchor=22;
endPane.add$java_awt_Component$O(this.endLabel, c);
c.weightx=0.0;
c.anchor=21;
endPane.add$java_awt_Component$O(this.endField, c);
this.frameBox.add$java_awt_Component(endPane);
var t0Pane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(3,1).c$$java_awt_LayoutManager);
c.weightx=0.5;
c.anchor=22;
t0Pane.add$java_awt_Component$O(this.t0Label, c);
c.weightx=0.0;
c.anchor=21;
t0Pane.add$java_awt_Component$O(this.t0Field, c);
this.timeBox.add$java_awt_Component(t0Pane);
var fpsPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(3,1).c$$java_awt_LayoutManager);
c.weightx=0.5;
c.anchor=22;
fpsPane.add$java_awt_Component$O(this.fpsLabel, c);
c.weightx=0.0;
c.anchor=21;
fpsPane.add$java_awt_Component$O(this.fpsField, c);
this.timeBox.add$java_awt_Component(fpsPane);
var dtPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(3,1).c$$java_awt_LayoutManager);
c.weightx=0.5;
c.anchor=22;
dtPane.add$java_awt_Component$O(this.dtLabel, c);
c.weightx=0.0;
c.anchor=21;
dtPane.add$java_awt_Component$O(this.dtField, c);
this.timeBox.add$java_awt_Component(dtPane);
this.cancelButton=Clazz.new_($I$(13,1));
this.cancelButton.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.revert.apply(this.b$['org.opensourcephysics.media.core.ClipInspector'], []);
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.ClipInspector$13.$init$,[this, null])));
this.okButton=Clazz.new_($I$(13,1));
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.ClipInspector$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClipInspector$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.ClipInspector$14.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(3,1));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.okButton);
buttonbar.add$java_awt_Component(this.cancelButton);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.startField.setIntValue$I(this.clip.getStartFrameNumber$());
this.stepSizeField.setIntValue$I(this.clip.getStepSize$());
this.t0Field.setValue$D(this.clip.getStartTime$() / 1000);
this.t0Field.setToolTipText$S(new Double(this.t0Field.getValue$()).toString() + this.t0Field.getUnits$());
this.endField.setIntValue$I(this.clip.getEndFrameNumber$());
var duration=this.clipControl.getMeanFrameDuration$();
if (duration > 0 ) {
this.dtField.setValue$D(duration / 1000);
this.dtField.setToolTipText$S((new Double(duration / 1000).toString()) + this.dtField.getUnits$());
this.fpsField.setValue$D(1000 / duration);
this.fpsField.setToolTipText$S((new Double(1000 / duration).toString()) + this.fpsField.getUnits$());
} else {
this.dtField.setText$S(null);
this.dtField.setToolTipText$S(null);
this.fpsField.setText$S(null);
this.fpsField.setToolTipText$S(null);
}this.repaint$();
});

Clazz.newMeth(C$, 'revert',  function () {
this.clip.setStartFrameNumber$I(this.prevStart);
this.clip.setStepSize$I(this.prevSize);
this.clip.setStepCount$I(this.prevCount);
if (this.prevDefault) this.clip.setStartTime$D(NaN);
 else this.clip.setStartTime$D(this.prevStartTime);
this.clipControl.setRate$D(this.prevRate);
this.clipControl.setFrameDuration$D(this.prevDt);
this.clipControl.setStepNumber$I(this.clip.frameToStep$I(this.prevFrame));
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
this.clip=null;
this.clipControl=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
