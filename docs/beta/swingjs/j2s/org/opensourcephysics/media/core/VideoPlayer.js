(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},p$2={},I$=[[0,'java.util.HashMap','java.awt.Color','javax.swing.JOptionPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JButton','org.opensourcephysics.display.DisplayRes','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','javax.swing.JTextField','javax.swing.JLabel','javax.swing.Box','org.opensourcephysics.media.core.MediaRes','java.util.ArrayList','org.opensourcephysics.display.OSPRuntime','java.awt.Dimension','javax.swing.BorderFactory','org.opensourcephysics.media.core.VideoPlayer','org.opensourcephysics.tools.FontSizer','java.text.NumberFormat','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.media.core.ClipControl','org.opensourcephysics.media.core.VideoClip','java.util.TreeMap','javax.swing.SwingUtilities','javax.swing.JToolBar','org.opensourcephysics.display.OSPButton','java.awt.event.MouseAdapter','javax.swing.SpinnerNumberModel','javax.swing.JSpinner',['javax.swing.JSpinner','.NumberEditor'],'java.awt.Font','javax.swing.JSlider','javax.swing.border.EmptyBorder','java.util.Hashtable','java.awt.Cursor','javax.swing.event.MouseInputAdapter','javax.swing.KeyStroke','javax.swing.Timer','javax.swing.JPopupMenu','javax.swing.JMenuItem','java.awt.Frame','java.awt.Toolkit','javax.swing.JMenu','javax.swing.JCheckBoxMenuItem',['org.opensourcephysics.media.core.VideoPlayer','.GoToDialog'],'org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoPlayer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JLabel', 'java.beans.PropertyChangeListener');
C$.$classes$=[['GoToDialog',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inspectorButtonVisible=true;
this.$height=54;
this.disabled=false;
this.stepSizeBtnListener=((P$.VideoPlayer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var frameNumber=this.b$['org.opensourcephysics.media.core.VideoPlayer'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
var clip=this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
try {
clip.setStepSize$I.apply(clip, [Integer.parseInt$S(e.getActionCommand$.apply(e, []))]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
var cur=String.valueOf$I(this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []).getStepSize$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []), []));
var input=$I$(22,"showInputDialog$java_awt_Component$S$S$I$S",[this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel, $I$(13).getString$S("VideoPlayer.Dialog.StepSize.Message"), $I$(13).getString$S("VideoPlayer.Dialog.StepSize.Title"), -1, cur]);
if (input != null ) {
var n=Integer.parseInt$S(input);
clip.setStepSize$I.apply(clip, [n]);
}} else {
throw ex;
}
}
this.b$['org.opensourcephysics.media.core.VideoPlayer'].setStepNumber$I.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [clip.frameToStep$I.apply(clip, [frameNumber])]);
if (clip.inspector != null  && clip.inspector.isVisible$.apply(clip.inspector, []) ) {
clip.inspector.stepSizeField.setValue$D.apply(clip.inspector.stepSizeField, [clip.getStepSize$.apply(clip, [])]);
}});
})()
), Clazz.new_(P$.VideoPlayer$lambda1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['inspectorButtonVisible','disabled','playStarted','ignoreRateSpinner'],'D',['measuredRate'],'I',['$height','mouseX','maxEndFrame','sliderInset'],'S',['readoutType','sliderCaret'],'O',['vidPanel','org.opensourcephysics.media.core.VideoPanel','clipControl','org.opensourcephysics.media.core.ClipControl','readoutTypes','String[]','toolbar','javax.swing.JToolBar','readout','org.opensourcephysics.display.OSPButton','+playButton','+resetButton','rateSpinner','javax.swing.JSpinner','stepButton','org.opensourcephysics.display.OSPButton','+stepSizeButton','+backButton','+loopButton','+inspectorButton','slider','javax.swing.JSlider','sliderLabels','java.util.Hashtable','inLabel','javax.swing.JLabel','+outLabel','readoutListener','java.awt.event.ActionListener','+timeSetListener','+goToListener','+popupItemListener','slowRateTimer','javax.swing.Timer','defaultSpinnerColor','java.awt.Color','stepSizeBtnListener','java.awt.event.ActionListener']]
,['I',['ntest'],'O',['inOutIcon','javax.swing.Icon','+playIcon','+grayPlayIcon','+pauseIcon','+resetIcon','+loopIcon','+noloopIcon','+videoClipIcon','+stepIcon','+grayStepIcon','+backIcon','+grayBackIcon','goToDialog','org.opensourcephysics.media.core.VideoPlayer.GoToDialog','timeFormat','java.text.NumberFormat','slowSpinnerColor','java.awt.Color','+cautionSpinnerColor']]]

Clazz.newMeth(C$, 'addActionListener$java_beans_PropertyChangeListener',  function (c) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("backbutton", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("playing", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("slider", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepbutton", c);
});

Clazz.newMeth(C$, 'removeActionListener$java_beans_PropertyChangeListener',  function (c) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("backbutton", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("playing", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("slider", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepbutton", c);
});

Clazz.newMeth(C$, 'addFrameListener$java_beans_PropertyChangeListener',  function (c) {
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("frameduration", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", c);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("videoclip", c);
});

Clazz.newMeth(C$, 'removeFrameListener$java_beans_PropertyChangeListener',  function (c) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("frameduration", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", c);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("videoclip", c);
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoPanel$org_opensourcephysics_media_core_VideoClip',  function (panel, clip) {
C$.c$$org_opensourcephysics_media_core_VideoPanel.apply(this, [panel]);
this.setVideoClip$org_opensourcephysics_media_core_VideoClip(clip);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoPanel',  function (panel) {
Clazz.super_(C$, this);
this.vidPanel=panel;
C$.timeFormat.setMinimumIntegerDigits$I(1);
C$.timeFormat.setMaximumFractionDigits$I(3);
C$.timeFormat.setMinimumFractionDigits$I(3);
if (Clazz.instanceOf(C$.timeFormat, "java.text.DecimalFormat")) {
(C$.timeFormat).setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(15).getDecimalFormatSymbols$());
}p$2.createGUI.apply(this, []);
this.clipControl=$I$(23,"getControl$org_opensourcephysics_media_core_VideoClip",[Clazz.new_($I$(24,1).c$$org_opensourcephysics_media_core_Video,[null])]);
this.clipControl.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.getVideoClip$().addPropertyChangeListener$java_beans_PropertyChangeListener(this);
p$2.updatePlayButtonsLater$Z.apply(this, [false]);
p$2.updateSlider$S$O.apply(this, ["refresh", null]);
}, 1);

Clazz.newMeth(C$, 'setVideoClip$org_opensourcephysics_media_core_VideoClip',  function (clip) {
var playing=this.clipControl.isPlaying$();
this.stop$();
if (this.getVideoClip$() === clip ) {
var looping=this.clipControl.isLooping$();
var rate=this.clipControl.getRate$();
var duration=this.clipControl.getMeanFrameDuration$();
this.clipControl.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.clipControl.dispose$();
this.clipControl=$I$(23).getControl$org_opensourcephysics_media_core_VideoClip(clip);
this.clipControl.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.clipControl.setLooping$Z(looping);
this.clipControl.setRate$D(rate);
this.clipControl.setFrameDuration$D(duration);
if (playing) {
this.clipControl.play$();
}var inspector=this.getVideoClip$().inspector;
if (inspector != null ) {
inspector.clipControl=this.clipControl;
}} else {
var oldClip=this.getVideoClip$();
oldClip.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
oldClip.hideClipInspector$();
oldClip.dispose$();
var video=oldClip.getVideo$();
if (video != null ) {
video.dispose$();
}oldClip.video=null;
oldClip.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
if (clip == null ) {
clip=Clazz.new_($I$(24,1).c$$org_opensourcephysics_media_core_Video,[null]);
}clip.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.clipControl.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.clipControl.dispose$();
this.clipControl=$I$(23).getControl$org_opensourcephysics_media_core_VideoClip(clip);
this.clipControl.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.setReadoutTypes$S$S("frame time step", clip.readoutType);
p$2.updateLoopButton$Z.apply(this, [this.clipControl.isLooping$()]);
p$2.updateValueAndPlayButtons.apply(this, []);
p$2.updateSlider$S$O.apply(this, ["newClip", oldClip]);
System.gc$();
}});

Clazz.newMeth(C$, 'getVideoClip$',  function () {
return (this.clipControl == null  ? null : this.clipControl.getVideoClip$());
});

Clazz.newMeth(C$, 'getClipControl$',  function () {
return this.clipControl;
});

Clazz.newMeth(C$, 'setReadoutTypes$S$S',  function (types, typeToSelect) {
var map=Clazz.new_($I$(25,1));
var list=types.toLowerCase$();
var i=list.indexOf$S("time");
if (i >= 0) {
map.put$O$O(Integer.valueOf$I(i), "time");
}i=list.indexOf$S("step");
if (i >= 0) {
map.put$O$O(Integer.valueOf$I(i), "step");
}i=list.indexOf$S("frame");
if (i >= 0) {
map.put$O$O(Integer.valueOf$I(i), "frame");
}if (map.isEmpty$()) {
return;
}this.readoutTypes=map.values$().toArray$OA(Clazz.array(String, [0]));
if (typeToSelect == null ) typeToSelect=this.readoutTypes[0];
this.setReadoutType$S(typeToSelect);
});

Clazz.newMeth(C$, 'setReadoutType$S',  function (type) {
var name=type.toLowerCase$();
var tip=" " + $I$(13).getString$S("VideoPlayer.Readout.ToolTip");
if (name.indexOf$S("time") >= 0) {
this.readoutType="time";
var t=this.vidPanel.getTimeUnit$();
t=$I$(13).getString$S("VideoPlayer.Readout.ToolTip.Time") + " " + t ;
this.readout.setToolTipText$S(t + tip);
} else if (name.indexOf$S("step") >= 0) {
this.readoutType="step";
this.readout.setToolTipText$S($I$(13).getString$S("VideoPlayer.Readout.ToolTip.Step") + tip);
} else if (name.indexOf$S("frame") >= 0) {
this.readoutType="frame";
this.readout.setToolTipText$S($I$(13).getString$S("VideoPlayer.Readout.ToolTip.Frame") + tip);
}var isListed=false;
for (var i=0; i < this.readoutTypes.length; i++) {
isListed=isListed || (this.readoutTypes[i].equals$O(this.readoutType)) ;
}
if (!isListed) {
var newList=Clazz.array(String, [this.readoutTypes.length + 1]);
newList[0]=this.readoutType;
for (var i=0; i < this.readoutTypes.length; i++) {
newList[i + 1]=this.readoutTypes[i];
}
this.readoutTypes=newList;
}this.getVideoClip$().readoutType=this.readoutType;
p$2.updateValue.apply(this, []);
});

Clazz.newMeth(C$, 'play$',  function () {
this.clipControl.play$();
});

Clazz.newMeth(C$, 'stop$',  function () {
this.clipControl.stop$();
});

Clazz.newMeth(C$, 'step$',  function () {
this.stop$();
this.clipControl.step$();
});

Clazz.newMeth(C$, 'back$',  function () {
this.stop$();
this.clipControl.back$();
});

Clazz.newMeth(C$, 'setRate$D',  function (rate) {
var editor=this.rateSpinner.getEditor$();
var caution=this.measuredRate < rate * 0.9  && this.measuredRate > 0  ;
editor.getTextField$().setForeground$java_awt_Color(caution ? C$.cautionSpinnerColor : this.defaultSpinnerColor);
this.clipControl.setRate$D(rate);
});

Clazz.newMeth(C$, 'getRate$',  function () {
return this.clipControl.getRate$();
});

Clazz.newMeth(C$, 'setLooping$Z',  function (looping) {
if (this.isEnabled$()) this.clipControl.setLooping$Z(looping);
});

Clazz.newMeth(C$, 'isLooping$',  function () {
return this.clipControl.isLooping$();
});

Clazz.newMeth(C$, 'setStepNumber$I',  function (n) {
this.clipControl.setStepNumber$I(n);
});

Clazz.newMeth(C$, 'getStepNumber$',  function () {
return this.clipControl.getStepNumber$();
});

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return this.clipControl.getFrameNumber$();
});

Clazz.newMeth(C$, 'getTime$',  function () {
return this.clipControl.getTime$() + this.clipControl.clip.getStartTime$();
});

Clazz.newMeth(C$, 'getStepTime$I',  function (stepNumber) {
if (stepNumber < 0 || stepNumber >= this.clipControl.clip.getStepCount$() ) return NaN;
return this.clipControl.getStepTime$I(stepNumber) + this.clipControl.clip.getStartTime$();
});

Clazz.newMeth(C$, 'getFrameTime$I',  function (frameNumber) {
return this.clipControl.clip.getStartTime$() + (frameNumber - this.clipControl.clip.getStartFrameNumber$()) * this.clipControl.getMeanFrameDuration$();
});

Clazz.newMeth(C$, 'getMeanStepDuration$',  function () {
var duration=this.getClipControl$().getMeanFrameDuration$() * this.getVideoClip$().getStepSize$();
return duration;
});

Clazz.newMeth(C$, 'setInspectorButtonVisible$Z',  function (visible) {
if (visible == this.inspectorButtonVisible ) {
return;
}this.inspectorButtonVisible=visible;
var runner=((P$.VideoPlayer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar == null ) return;
if (this.$finals$.visible) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.VideoPlayer'].inspectorButton);
} else {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.media.core.VideoPlayer'].inspectorButton);
}this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar.revalidate$();
});
})()
), Clazz.new_(P$.VideoPlayer$1.$init$,[this, {visible:visible}]));
if ($I$(15).isJS) runner.run$();
 else $I$(26).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'setLoopingButtonVisible$Z',  function (visible) {
var runner=((P$.VideoPlayer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.visible) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.VideoPlayer'].loopButton);
} else {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.media.core.VideoPlayer'].loopButton);
}this.b$['org.opensourcephysics.media.core.VideoPlayer'].toolbar.revalidate$();
});
})()
), Clazz.new_(P$.VideoPlayer$2.$init$,[this, {visible:visible}]));
if ($I$(15).isJS) runner.run$();
 else $I$(26).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "stepnumber":
p$2.updateValueAndPlayButtons.apply(this, []);
this.firePropertyChange$S$O$O("stepnumber", null, e.getNewValue$());
return;
case "frameduration":
p$2.updateValue.apply(this, []);
this.firePropertyChange$S$O$O("frameduration", null, e.getNewValue$());
return;
case "playing":
if ((!((e.getNewValue$()).$c())) && this.playStarted ) {
this.playStarted=false;
this.measuredRate=this.clipControl.getMeasuredRate$();
var editor=this.rateSpinner.getEditor$();
if (this.measuredRate / this.getRate$() < 0.9 ) {
this.ignoreRateSpinner=true;
this.rateSpinner.setValue$O(Double.valueOf$D(this.measuredRate));
editor.getTextField$().setForeground$java_awt_Color(C$.slowSpinnerColor);
this.slowRateTimer.restart$();
} else {
this.measuredRate=0;
editor.getTextField$().setForeground$java_awt_Color(this.defaultSpinnerColor);
}}p$2.updatePlayButtonsLater$Z.apply(this, [(e.getNewValue$()).valueOf()]);
this.firePropertyChange$S$O$O("playing", null, e.getNewValue$());
return;
case "looping":
p$2.updateLoopButton$Z.apply(this, [(e.getNewValue$()).valueOf()]);
return;
case "rate":
this.rateSpinner.setValue$O(Double.valueOf$D(this.getRate$()));
return;
case "starttime":
p$2.updateValue.apply(this, []);
return;
default:
return;
case "startframe":
case "framecount":
break;
case "stepsize":
p$2.updateValue.apply(this, []);
break;
case "stepcount":
p$2.updateValueAndPlayButtons.apply(this, []);
break;
}
p$2.updateSlider$S$O.apply(this, ["property", e.getPropertyName$()]);
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.readoutType == null ) return;
this.stepButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.StepForward.ToolTip"));
this.backButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.StepBack.ToolTip"));
this.resetButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.Reset.ToolTip"));
this.inspectorButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.ClipSettings.ToolTip"));
this.loopButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.Looping.ToolTip"));
this.setReadoutType$S(this.readoutType);
p$2.updatePlayButtonsLater$Z.apply(this, [this.clipControl.isPlaying$()]);
p$2.updateLoopButton$Z.apply(this, [this.clipControl.isLooping$()]);
if (this.getVideoClip$().inspector != null ) {
this.getVideoClip$().inspector.refresh$();
}});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
C$.timeFormat=$I$(20).getNumberInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [enabled]);
this.rateSpinner.setEnabled$Z(enabled);
this.slider.setEnabled$Z(enabled);
this.disabled=!enabled;
});

Clazz.newMeth(C$, 'paintChildren$java_awt_Graphics',  function (g) {
if (!$I$(15).isJS) C$.superclazz.prototype.paintChildren$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'createGUI',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
this.toolbar=Clazz.new_($I$(27,1));
this.toolbar.setFloatable$Z(false);
this.add$java_awt_Component$O(this.toolbar, "South");
this.setBorder$javax_swing_border_Border($I$(17).createEtchedBorder$());
this.playButton=Clazz.new_($I$(28,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.playIcon, C$.pauseIcon]);
this.playButton.setDisabledIcon$javax_swing_Icon(C$.grayPlayIcon);
this.playButton.addMouseListener$java_awt_event_MouseListener(((P$.VideoPlayer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].doPlay$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.VideoPlayer$3)));
this.playButton.addKeyListener$java_awt_event_KeyListener(((P$.VideoPlayer$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 32) this.b$['org.opensourcephysics.media.core.VideoPlayer'].doPlay$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.VideoPlayer$4)));
this.resetButton=Clazz.new_($I$(28,1).c$$javax_swing_Icon,[C$.resetIcon]);
this.resetButton.setPressedIcon$javax_swing_Icon(C$.resetIcon);
this.resetButton.addMouseListener$java_awt_event_MouseListener(((P$.VideoPlayer$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].doReset$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.VideoPlayer$5)));
var minRate=0.1;
var maxRate=10;
var model=Clazz.new_($I$(30,1).c$$D$D$D$D,[1, 0.1, 10.0, 0.2]);
this.rateSpinner=((P$.VideoPlayer$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSpinner'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.getMinimumSize$();
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
dim.height=Math.max(this.b$['org.opensourcephysics.media.core.VideoPlayer'].playButton.getPreferredSize$().height, dim.height);
dim.width=5 * this.getFont$().getSize$() - 10 * $I$(19).getLevel$();
return dim;
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getMinimumSize$();
});
})()
), Clazz.new_($I$(31,1).c$$javax_swing_SpinnerModel,[this, null, model],P$.VideoPlayer$6));
var editor=Clazz.new_($I$(32,1).c$$javax_swing_JSpinner$S,[this.rateSpinner, "0%"]);
editor.getTextField$().setHorizontalAlignment$I(2);
editor.getTextField$().setFont$java_awt_Font(Clazz.new_($I$(33,1).c$$S$I$I,["Dialog", 0, 12]));
this.defaultSpinnerColor=editor.getTextField$().getForeground$();
this.rateSpinner.setEditor$javax_swing_JComponent(editor);
this.rateSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.VideoPlayer$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.VideoPlayer'].ignoreRateSpinner) return;
var rate=this.b$['org.opensourcephysics.media.core.VideoPlayer'].rateSpinner.getValue$();
rate=Double.valueOf$D((rate).$c() < 0.18000000000000002  ? 0.1 : (rate).$c() > 7.142857142857143  ? 10.0 : (rate).valueOf());
this.b$['org.opensourcephysics.media.core.VideoPlayer'].setRate$D.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [(rate).valueOf()]);
this.$finals$.model.setStepSize$Number(Double.valueOf$D((rate).$c() >= 4  ? 1 : (rate).$c() >= 2  ? 0.5 : (rate).$c() > 0.9  ? 0.2 : 0.1));
});
})()
), Clazz.new_(P$.VideoPlayer$7.$init$,[this, {model:model}])));
editor.getTextField$().addKeyListener$java_awt_event_KeyListener(((P$.VideoPlayer$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
var prev=(this.b$['org.opensourcephysics.media.core.VideoPlayer'].rateSpinner.getValue$()).doubleValue$();
try {
var s=this.$finals$.editor.getTextField$().getText$();
if (s.endsWith$S("%")) s=s.substring$I$I(0, s.length$() - 1);
var i=Integer.parseInt$S(s);
var rate=Math.max(i / 100.0, 0.1);
rate=Math.min(rate, 10.0);
if (rate != prev ) this.b$['org.opensourcephysics.media.core.VideoPlayer'].rateSpinner.setValue$O(Double.valueOf$D(rate));
 else {
var r=((prev * 100)|0);
this.$finals$.editor.getTextField$().setText$S(String.valueOf$I(r) + "%");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
var r=((prev * 100)|0);
this.$finals$.editor.getTextField$().setText$S(String.valueOf$I(r) + "%");
} else {
throw ex;
}
}
this.$finals$.editor.getTextField$().selectAll$();
}});
})()
), Clazz.new_($I$(8,1),[this, {editor:editor}],P$.VideoPlayer$8)));
this.stepButton=Clazz.new_($I$(28,1).c$$javax_swing_Icon,[C$.stepIcon]);
this.stepButton.setDisabledIcon$javax_swing_Icon(C$.grayStepIcon);
this.stepButton.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.doStepButton$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [(e.getModifiers$.apply(e, []) & 1) == 1]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda2.$init$,[this, null])));
this.backButton=Clazz.new_($I$(28,1).c$$javax_swing_Icon,[C$.backIcon]);
this.backButton.setDisabledIcon$javax_swing_Icon(C$.grayBackIcon);
this.backButton.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.doBackButton$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [(e.getModifiers$.apply(e, []) & 1) == 1]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda3.$init$,[this, null])));
var stepListener=((P$.VideoPlayer$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].fireButtonEvent$S$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e.getSource$() === this.b$['org.opensourcephysics.media.core.VideoPlayer'].stepButton  ? "stepbutton" : "backbutton", true]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].fireButtonEvent$S$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e.getSource$() === this.b$['org.opensourcephysics.media.core.VideoPlayer'].stepButton  ? "stepbutton" : "backbutton", false]);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.VideoPlayer$9));
this.stepButton.addMouseListener$java_awt_event_MouseListener(stepListener);
this.backButton.addMouseListener$java_awt_event_MouseListener(stepListener);
this.readoutListener=((P$.VideoPlayer$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].setReadoutType$S.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e.getActionCommand$()]);
});
})()
), Clazz.new_(P$.VideoPlayer$10.$init$,[this, null]));
this.goToListener=((P$.VideoPlayer$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].showGoToDialog$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_(P$.VideoPlayer$11.$init$,[this, null]));
this.timeSetListener=((P$.VideoPlayer$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var clip=this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
var time=" (" + this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel.getTimeUnit$() + "):" ;
var response=$I$(22,"showInputDialog$java_awt_Component$S$S$I$S",[this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel, $I$(13).getString$S("VideoPlayer.Dialog.SetTime.Message") + time, $I$(13).getString$S("VideoPlayer.Dialog.SetTime.Title") + " " + this.b$['org.opensourcephysics.media.core.VideoPlayer'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []) , -1, "" + (new Double(this.b$['org.opensourcephysics.media.core.VideoPlayer'].getTime$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []) / 1000).toString())]);
if (response != null ) {
if (response.equals$O("")) clip.setStartTime$D(NaN);
 else try {
var t=Double.parseDouble$S(response);
var t0=t * 1000 - this.b$['org.opensourcephysics.media.core.VideoPlayer'].clipControl.getTime$();
clip.setStartTime$D(t0);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
}var inspector=clip.inspector;
if (inspector != null  && inspector.isVisible$() ) {
inspector.t0Field.setValue$D(clip.getStartTime$() / 1000);
}});
})()
), Clazz.new_(P$.VideoPlayer$12.$init$,[this, null]));
this.slider=Clazz.new_($I$(34,1).c$$I$I$I,[0, 9, 0]);
this.slider.setName$S("slider" + ++C$.ntest);
this.slider.setOpaque$Z(false);
this.slider.setMinorTickSpacing$I(1);
this.slider.setSnapToTicks$Z(true);
this.slider.setBorder$javax_swing_border_Border($I$(17).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.slider.addChangeListener$javax_swing_event_ChangeListener(((P$.VideoPlayer$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
p$2.doSliderChanged.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda4.$init$,[this, null])));
this.inLabel=Clazz.new_($I$(11,1).c$$S,["\u25b2"]);
this.inLabel.setFont$java_awt_Font(Clazz.new_($I$(33,1).c$$S$I$I,[null, 0, 14]));
this.inLabel.setBorder$javax_swing_border_Border(Clazz.new_($I$(35,1).c$$I$I$I$I,[-4, -2, 0, -2]));
this.outLabel=Clazz.new_($I$(11,1).c$$S,["\u25b2"]);
this.outLabel.setFont$java_awt_Font(Clazz.new_($I$(33,1).c$$S$I$I,[null, 0, 14]));
this.outLabel.setBorder$javax_swing_border_Border(Clazz.new_($I$(35,1).c$$I$I$I$I,[-4, -2, 0, -2]));
this.sliderLabels=Clazz.new_($I$(36,1));
this.sliderLabels.put$O$O(Integer.valueOf$I(0), this.inLabel);
this.sliderLabels.put$O$O(Integer.valueOf$I(9), this.outLabel);
this.slider.setLabelTable$java_util_Dictionary(this.sliderLabels);
this.slider.setPaintLabels$Z(true);
var defaultUIMouseListener=this.slider.getMouseListeners$()[0];
var defaultUIMouseMotionListener=this.slider.getMouseMotionListeners$()[0];
this.slider.removeMouseListener$java_awt_event_MouseListener(defaultUIMouseListener);
this.slider.removeMouseMotionListener$java_awt_event_MouseMotionListener(defaultUIMouseMotionListener);
var inOutSetter=((P$.VideoPlayer$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].sliderMovedAction$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].sliderPressedAction$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].sliderDraggedAction$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].sliderReleasedAction$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel.setMouseCursor$java_awt_Cursor($I$(37).getDefaultCursor$());
this.b$['org.opensourcephysics.media.core.VideoPlayer'].fireButtonEvent$S$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], ["slider", false]);
});
})()
), Clazz.new_($I$(38,1),[this, null],P$.VideoPlayer$13));
this.slider.addMouseListener$java_awt_event_MouseListener(inOutSetter);
this.slider.addMouseMotionListener$java_awt_event_MouseMotionListener(inOutSetter);
if (defaultUIMouseListener != null ) this.slider.addMouseListener$java_awt_event_MouseListener(defaultUIMouseListener);
if (defaultUIMouseMotionListener != null ) this.slider.addMouseMotionListener$java_awt_event_MouseMotionListener(defaultUIMouseMotionListener);
var im=this.slider.getInputMap$I(0);
var am=$I$(26).getUIActionMap$javax_swing_JComponent(this.slider);
if (am != null ) {
am.put$O$javax_swing_Action(im.get$javax_swing_KeyStroke($I$(39).getKeyStroke$I$I(33, 0)), null);
am.put$O$javax_swing_Action(im.get$javax_swing_KeyStroke($I$(39).getKeyStroke$I$I(34, 0)), null);
}this.slider.addKeyListener$java_awt_event_KeyListener(((P$.VideoPlayer$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].doSliderKey$I.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [e.getKeyCode$()]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.VideoPlayer$14)));
this.readout=Clazz.new_($I$(28,1));
this.readout.setHeightComponent$javax_swing_JComponent(this.rateSpinner);
this.readout.setText$S("0.00");
this.readout.setForeground$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[204, 51, 51]));
this.readout.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.doReadoutPopup.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda5.$init$,[this, null])));
this.readout.addMouseListener$java_awt_event_MouseListener(((P$.VideoPlayer$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(15).isPopupTrigger$java_awt_event_InputEvent(e)) this.b$['org.opensourcephysics.media.core.VideoPlayer'].readout.doClick$I(0);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.VideoPlayer$15)));
this.stepSizeButton=Clazz.new_($I$(28,1));
this.stepSizeButton.setHeightComponent$javax_swing_JComponent(this.rateSpinner);
this.stepSizeButton.setText$S("1");
this.stepSizeButton.setForeground$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[204, 51, 51]));
this.stepSizeButton.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.doStepSize.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda6.$init$,[this, null])));
this.stepSizeButton.addMouseListener$java_awt_event_MouseListener(((P$.VideoPlayer$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(15).isPopupTrigger$java_awt_event_InputEvent(e)) this.b$['org.opensourcephysics.media.core.VideoPlayer'].stepSizeButton.doClick$I(0);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.VideoPlayer$16)));
this.inspectorButton=Clazz.new_($I$(28,1).c$$javax_swing_Icon,[C$.videoClipIcon]);
this.inspectorButton.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$2.doInspector.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda7.$init$,[this, null])));
this.loopButton=Clazz.new_($I$(28,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.noloopIcon, C$.loopIcon]);
this.loopButton.addMouseListener$java_awt_event_MouseListener(((P$.VideoPlayer$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].setLooping$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [!this.b$['org.opensourcephysics.media.core.VideoPlayer'].loopButton.isSelected$()]);
});
})()
), Clazz.new_($I$(29,1),[this, null],P$.VideoPlayer$17)));
this.loopButton.addKeyListener$java_awt_event_KeyListener(((P$.VideoPlayer$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 32) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].setLooping$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [!this.b$['org.opensourcephysics.media.core.VideoPlayer'].loopButton.isSelected$()]);
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.VideoPlayer$18)));
this.toolbar.add$java_awt_Component(this.readout);
this.toolbar.add$java_awt_Component(this.rateSpinner);
this.toolbar.add$java_awt_Component(this.resetButton);
this.toolbar.add$java_awt_Component(this.playButton);
this.toolbar.add$java_awt_Component(this.slider);
this.toolbar.add$java_awt_Component(this.backButton);
this.toolbar.add$java_awt_Component(this.stepSizeButton);
this.toolbar.add$java_awt_Component(this.stepButton);
this.toolbar.add$java_awt_Component(this.loopButton);
if (this.inspectorButtonVisible) {
this.toolbar.add$java_awt_Component(this.inspectorButton);
}this.slowRateTimer=Clazz.new_([1000, ((P$.VideoPlayer$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.b$['org.opensourcephysics.media.core.VideoPlayer'].rateSpinner.getEditor$();
editor.getTextField$().setForeground$java_awt_Color($I$(18).cautionSpinnerColor);
this.b$['org.opensourcephysics.media.core.VideoPlayer'].rateSpinner.setValue$O(Double.valueOf$D(this.b$['org.opensourcephysics.media.core.VideoPlayer'].getRate$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [])));
this.b$['org.opensourcephysics.media.core.VideoPlayer'].ignoreRateSpinner=false;
});
})()
), Clazz.new_(P$.VideoPlayer$19.$init$,[this, null]))],$I$(40,1).c$$I$java_awt_event_ActionListener);
this.slowRateTimer.setRepeats$Z(false);
}, p$2);

Clazz.newMeth(C$, 'doSliderKey$I',  function (keyCode) {
if (this.disabled) return;
switch (keyCode) {
case 33:
this.back$();
break;
case 34:
this.step$();
break;
}
});

Clazz.newMeth(C$, 'doPlay$',  function () {
if (this.disabled || !this.playButton.isEnabled$() ) return;
if (this.playButton.isSelected$()) {
this.stop$();
} else {
this.playStarted=true;
this.play$();
}});

Clazz.newMeth(C$, 'doReset$',  function () {
if (this.disabled) return;
this.stop$();
this.clipControl.setStepNumber$I(0);
p$2.updatePlayButtonsLater$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'fireButtonEvent$S$Z',  function (name, b) {
if (this.disabled) return;
this.firePropertyChange$S$O$O(name, null, Boolean.valueOf$Z(b));
});

Clazz.newMeth(C$, 'doBackButton$Z',  function (isShiftDown) {
if (this.disabled) return;
if (isShiftDown) {
this.stop$();
this.setStepNumber$I(this.getStepNumber$() - 5);
} else this.back$();
}, p$2);

Clazz.newMeth(C$, 'doStepButton$Z',  function (isShiftDown) {
if (this.disabled) return;
if (isShiftDown) {
this.stop$();
this.setStepNumber$I(this.getStepNumber$() + 5);
} else this.step$();
}, p$2);

Clazz.newMeth(C$, 'doStepSize',  function () {
if (this.disabled) return;
var popup=Clazz.new_($I$(41,1));
for (var i=1; i < 6; i++) {
var item=Clazz.new_([String.valueOf$I(i)],$I$(42,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(this.stepSizeBtnListener);
popup.add$javax_swing_JMenuItem(item);
}
popup.addSeparator$();
var item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Button.StepSize.Other")],$I$(42,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(this.stepSizeBtnListener);
popup.add$javax_swing_JMenuItem(item);
$I$(19).setFonts$java_awt_Container(popup);
popup.show$java_awt_Component$I$I(this.stepSizeButton, 0, this.stepSizeButton.getHeight$());
}, p$2);

Clazz.newMeth(C$, 'doInspector',  function () {
if (this.disabled) return;
var frame=null;
var c=this.vidPanel.getTopLevelAncestor$();
if (Clazz.instanceOf(c, "java.awt.Frame")) {
frame=c;
}var inspector=this.getVideoClip$().getClipInspector$org_opensourcephysics_media_core_ClipControl$java_awt_Frame(this.clipControl, frame);
if (inspector.isVisible$()) {
return;
}var p0=Clazz.new_($I$(43,1)).getLocation$();
var loc=inspector.getLocation$();
if ((loc.x == p0.x) && (loc.y == p0.y) ) {
var dim=$I$(44).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - inspector.getBounds$().width)/2|0);
var y=((dim.height - inspector.getBounds$().height)/2|0);
inspector.setLocation$I$I(x, y);
}inspector.initialize$();
inspector.setVisible$Z(true);
}, p$2);

Clazz.newMeth(C$, 'doReadoutPopup',  function () {
if (this.disabled || this.readoutTypes.length < 2 ) {
return;
}var popup=Clazz.new_($I$(41,1));
var displayMenu=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.Menu.Display")],$I$(45,1).c$$S);
popup.add$javax_swing_JMenuItem(displayMenu);
var item;
for (var i=0; i < this.readoutTypes.length; i++) {
var type=this.readoutTypes[i];
if (type.equals$O("step")) {
item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.MenuItem.Step")],$I$(46,1).c$$S);
item.setSelected$Z(type.equals$O(this.readoutType));
item.setActionCommand$S(type);
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
displayMenu.add$javax_swing_JMenuItem(item);
} else if (type.equals$O("time")) {
item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.MenuItem.Time")],$I$(46,1).c$$S);
item.setSelected$Z(type.equals$O(this.readoutType));
item.setActionCommand$S(type);
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
displayMenu.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
if (this.getTime$() != 0 ) {
var s=$I$(13).getString$S("VideoPlayer.Popup.Menu.SetTimeToZero");
item=Clazz.new_($I$(42,1).c$$S,[s]);
item.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.VideoPlayer'].disabled) return;
var t0=-this.b$['org.opensourcephysics.media.core.VideoPlayer'].clipControl.getTime$();
this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []).setStartTime$D(t0);
});
})()
), Clazz.new_(P$.VideoPlayer$20.$init$,[this, null])));
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
popup.add$javax_swing_JMenuItem(item);
}item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.Menu.SetTime")],$I$(42,1).c$$S);
item.setActionCommand$S(type);
item.addActionListener$java_awt_event_ActionListener(this.timeSetListener);
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.Menu.GoTo") + "..."],$I$(42,1).c$$S);
item.setActionCommand$S(type);
item.addActionListener$java_awt_event_ActionListener(this.goToListener);
popup.add$javax_swing_JMenuItem(item);
} else {
item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.MenuItem.Frame")],$I$(46,1).c$$S);
item.setSelected$Z(type.equals$O(this.readoutType));
item.setActionCommand$S(type);
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
displayMenu.add$javax_swing_JMenuItem(item);
}}
$I$(19).setFonts$java_awt_Container(popup);
popup.show$java_awt_Component$I$I(this.readout, 0, this.readout.getHeight$());
}, p$2);

Clazz.newMeth(C$, 'doSliderChanged',  function () {
if (this.clipControl.isPlaying$()) {
return;
}var clip=this.getVideoClip$();
var i=this.slider.getValue$();
if (i < clip.getStartFrameNumber$()) {
this.slider.setValue$I(clip.getStartFrameNumber$());
return;
}if (i > clip.getEndFrameNumber$()) {
this.slider.setValue$I(clip.getEndFrameNumber$());
return;
}$I$(15,"setTimeout$S$I$Z$Runnable",["VP-sliderState", 25, true, ((P$.VideoPlayer$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var stepNo=this.$finals$.clip.frameToStep$I.apply(this.$finals$.clip, [this.$finals$.i]);
var frameNo=this.$finals$.clip.stepToFrame$I.apply(this.$finals$.clip, [stepNo]);
var currentStep=this.b$['org.opensourcephysics.media.core.VideoPlayer'].getStepNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
var isIncluded=this.$finals$.clip.includesFrame$I.apply(this.$finals$.clip, [this.$finals$.i]);
if (stepNo != currentStep && !this.b$['org.opensourcephysics.media.core.VideoPlayer'].disabled ) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].setStepNumber$I.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [stepNo]);
return;
}if (!isIncluded) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].slider.setValue$I.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].slider, [frameNo]);
return;
}});
})()
), Clazz.new_(P$.VideoPlayer$lambda8.$init$,[this, {clip:clip,i:i}]))]);
}, p$2);

Clazz.newMeth(C$, 'sliderMovedAction$java_awt_event_MouseEvent',  function (e) {
this.sliderCaret=null;
if (this.disabled) return;
var yMin=this.slider.getHeight$() - this.inLabel.getHeight$() - 2 ;
if (this.sliderInset == 0) this.sliderInset=this.slider.getInsets$().left + 7;
if (e.getY$() > yMin) {
var x=e.getX$();
var clip=this.getVideoClip$();
var pixPerFrame=(this.slider.getWidth$() - 2.0 * this.sliderInset) / (clip.getFrameCount$() - 1);
var hint=" " + $I$(13).getString$S("VideoPlayer.InOutMarker.ToolTip");
var start=this.getVideoClip$().getStartFrameNumber$();
var end=this.getVideoClip$().getEndFrameNumber$();
var xend=((this.sliderInset + end * pixPerFrame)|0);
var xstart=((this.sliderInset + start * pixPerFrame)|0);
if ((xstart != xend || start == 0 ) && x < xend + 8  && x > xend - 8 ) {
this.sliderCaret="out";
this.slider.setToolTipText$S($I$(13).getString$S("VideoPlayer.OutMarker.ToolTip") + ": " + end + hint );
} else if (x < xstart + 8 && x > xstart - 8 ) {
this.sliderCaret="in";
this.slider.setToolTipText$S($I$(13).getString$S("VideoPlayer.InMarker.ToolTip") + ": " + start + hint );
}}if (this.sliderCaret == null ) {
this.vidPanel.setMouseCursor$java_awt_Cursor($I$(37).getDefaultCursor$());
this.slider.setToolTipText$S($I$(13).getString$S("VideoPlayer.Slider.ToolTip"));
} else {
this.vidPanel.setMouseCursor$java_awt_Cursor($I$(37).getPredefinedCursor$I(12));
e.consume$();
}});

Clazz.newMeth(C$, 'sliderPressedAction$java_awt_event_MouseEvent',  function (e) {
if (this.disabled) return;
this.stop$();
var frameNum=this.clipControl.getFrameNumber$();
this.maxEndFrame=this.getVideoClip$().getEndFrameNumber$();
var start=this.getVideoClip$().getStartFrameNumber$();
var end=this.getVideoClip$().getEndFrameNumber$();
if (this.sliderCaret === "out"  && frameNum < start ) this.sliderCaret="in";
 else if (this.sliderCaret === "in"  && frameNum > end ) this.sliderCaret="out";
if ($I$(15).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=Clazz.new_($I$(41,1));
var item=Clazz.new_([$I$(13).getString$S("ClipInspector.Title") + "..."],$I$(42,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ea) /*block*/{
if (this.b$['org.opensourcephysics.media.core.VideoPlayer'].disabled) return;
var frame=null;
var c=this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel.getTopLevelAncestor$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel, []);
if (Clazz.instanceOf(c, "java.awt.Frame")) {
frame=c;
}var inspector=this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []).getClipInspector$org_opensourcephysics_media_core_ClipControl$java_awt_Frame.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []), [this.b$['org.opensourcephysics.media.core.VideoPlayer'].clipControl, frame]);
if (inspector.isVisible$.apply(inspector, [])) {
return;
}var p0=Clazz.new_($I$(43,1)).getLocation$.apply(Clazz.new_($I$(43,1)), []);
var loc=inspector.getLocation$.apply(inspector, []);
if ((loc.x == p0.x) && (loc.y == p0.y) ) {
var dim=$I$(44).getDefaultToolkit$().getScreenSize$.apply($I$(44).getDefaultToolkit$(), []);
var x=((dim.width - inspector.getBounds$.apply(inspector, []).width)/2|0);
var y=((dim.height - inspector.getBounds$.apply(inspector, []).height)/2|0);
inspector.setLocation$I$I.apply(inspector, [x, y]);
}inspector.initialize$.apply(inspector, []);
inspector.setVisible$Z.apply(inspector, [true]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda9.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
var showTrim=false;
if (this.getVideoClip$().getVideo$() == null  || this.getVideoClip$().getVideo$().getFrameCount$() == 1 ) {
if (this.getVideoClip$().getFrameCount$() > this.getVideoClip$().getEndFrameNumber$() + 1) {
showTrim=true;
}}if (showTrim) {
var s=$I$(13).getString$S("VideoPlayer.Slider.Popup.Menu.TrimFrames");
item=Clazz.new_($I$(42,1).c$$S,[s]);
item.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []).trimFrameCount$();
});
})()
), Clazz.new_(P$.VideoPlayer$21.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
}if (this.popupItemListener == null ) this.popupItemListener=((P$.VideoPlayer$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var clip=this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
var val=this.b$['org.opensourcephysics.media.core.VideoPlayer'].clipControl.getFrameNumber$();
if ("in".equals$O(e.getActionCommand$())) {
clip.setStartFrameNumber$I$I(val, this.b$['org.opensourcephysics.media.core.VideoPlayer'].maxEndFrame);
if (clip.inspector != null  && clip.inspector.isVisible$() ) {
clip.inspector.startField.setValue$D(clip.getStartFrameNumber$());
}} else {
clip.setEndFrameNumber$I(val);
if (clip.inspector != null  && clip.inspector.isVisible$() ) {
clip.inspector.endField.setValue$D(clip.getEndFrameNumber$());
}}this.b$['org.opensourcephysics.media.core.VideoPlayer'].refresh$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []);
});
})()
), Clazz.new_(P$.VideoPlayer$22.$init$,[this, null]));
var isIn=("in".equals$O(this.sliderCaret));
if (this.sliderCaret == null  || isIn ) {
var s=$I$(13).getString$S("VideoPlayer.Slider.Popup.Menu.SetIn");
s+=" (" + frameNum + ")" ;
item=Clazz.new_($I$(42,1).c$$S,[s]);
item.setActionCommand$S("in");
item.addActionListener$java_awt_event_ActionListener(this.popupItemListener);
popup.add$javax_swing_JMenuItem(item);
}if (!isIn) {
this.sliderCaret="out";
var s=$I$(13).getString$S("VideoPlayer.Slider.Popup.Menu.SetOut");
s+=" (" + frameNum + ")" ;
item=Clazz.new_($I$(42,1).c$$S,[s]);
item.setActionCommand$S("out");
item.addActionListener$java_awt_event_ActionListener(this.popupItemListener);
popup.add$javax_swing_JMenuItem(item);
}this.sliderCaret=null;
var includeTimeItems=false;
for (var type, $type = 0, $$type = this.readoutTypes; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
if (type.equals$O("time")) includeTimeItems=true;
}
if (includeTimeItems) {
popup.addSeparator$();
if (this.getTime$() != 0 ) {
var s=$I$(13).getString$S("VideoPlayer.Popup.Menu.SetTimeToZero");
item=Clazz.new_($I$(42,1).c$$S,[s]);
item.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.VideoPlayer'].disabled) return;
var t0=-this.b$['org.opensourcephysics.media.core.VideoPlayer'].clipControl.getTime$();
this.b$['org.opensourcephysics.media.core.VideoPlayer'].getVideoClip$.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], []).setStartTime$D(t0);
});
})()
), Clazz.new_(P$.VideoPlayer$23.$init$,[this, null])));
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
popup.add$javax_swing_JMenuItem(item);
}item=Clazz.new_([$I$(13).getString$S("VideoPlayer.Readout.Menu.SetTime")],$I$(42,1).c$$S);
item.setActionCommand$S("time");
item.addActionListener$java_awt_event_ActionListener(this.timeSetListener);
item.addActionListener$java_awt_event_ActionListener(this.readoutListener);
popup.add$javax_swing_JMenuItem(item);
}$I$(19).setFonts$java_awt_Container(popup);
popup.show$java_awt_Component$I$I(this.slider, e.getX$(), e.getY$());
return;
}if (this.sliderCaret != null ) {
this.stop$();
this.mouseX=e.getX$();
switch (this.sliderCaret) {
case "in":
this.vidPanel.setMessage$S($I$(13).getString$S("VideoPlayer.InMarker.ToolTip") + ": " + start );
if (start != frameNum) $I$(26,"invokeLater$Runnable",[((P$.VideoPlayer$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.VideoPlayer'].slider.setValue$I.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].slider, [this.$finals$.start]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda10.$init$,[this, {start:start}]))]);
break;
case "out":
this.vidPanel.setMessage$S($I$(13).getString$S("VideoPlayer.OutMarker.ToolTip") + ": " + end );
if (end != frameNum) $I$(26,"invokeLater$Runnable",[((P$.VideoPlayer$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.VideoPlayer'].slider.setValue$I.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].slider, [this.$finals$.end]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda11.$init$,[this, {end:end}]))]);
break;
}
e.consume$();
}});

Clazz.newMeth(C$, 'sliderDraggedAction$java_awt_event_MouseEvent',  function (e) {
if (this.disabled || this.sliderCaret == null  ) {
return;
}var clip=this.getVideoClip$();
clip.setAdjusting$Z(true);
var start=clip.getStartFrameNumber$();
var end=clip.getEndFrameNumber$();
var increasing=e.getX$() > this.mouseX;
this.mouseX=e.getX$();
var lastFrame=clip.getFrameCount$() - 1;
var val=Math.round((lastFrame * (e.getX$() - this.sliderInset)/(this.slider.getWidth$() - 2 * this.sliderInset)|0));
if (start == end) this.sliderCaret=(increasing ? "out" : "in");
if (increasing) {
val=Math.min(val, lastFrame + this.getVideoClip$().getStepSize$());
} else {
val=Math.min(val, lastFrame);
}val=Math.max(val, 0);
switch (this.sliderCaret) {
case "in":
if (clip.setStartFrameNumber$I$I(val, this.maxEndFrame)) {
var newStart=clip.getStartFrameNumber$();
$I$(26,"invokeLater$Runnable",[((P$.VideoPlayer$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel.setMessage$S.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'].vidPanel, [$I$(13).getString$S("VideoPlayer.InMarker.ToolTip") + ": " + this.$finals$.newStart ]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda12.$init$,[this, {newStart:newStart}]))]);
if (!clip.isDefaultStartTime) {
var startTime=clip.getStartTime$();
startTime+=(newStart - start) * this.clipControl.getMeanFrameDuration$();
clip.setStartTime$D(startTime);
}this.clipControl.setStepNumber$I(0);
if (clip.inspector != null  && clip.inspector.isVisible$() ) {
clip.inspector.startField.setValue$D(newStart);
clip.inspector.t0Field.setValue$D(clip.getStartTime$() / 1000);
}p$2.updateValue.apply(this, []);
}break;
case "out":
if (clip.setEndFrameNumber$I(val)) {
this.vidPanel.setMessage$S($I$(13).getString$S("VideoPlayer.OutMarker.ToolTip") + ": " + end );
this.clipControl.setStepNumber$I(clip.getStepCount$() - 1);
if (clip.inspector != null  && clip.inspector.isVisible$() ) {
clip.inspector.endField.setValue$D(clip.getEndFrameNumber$());
}}break;
}
e.consume$();
});

Clazz.newMeth(C$, 'sliderReleasedAction$java_awt_event_MouseEvent',  function (e) {
if (this.disabled) return;
if (this.sliderCaret == null ) {
} else {
this.vidPanel.setMessage$S(null);
e.consume$();
}this.getVideoClip$().setAdjusting$Z(false);
});

Clazz.newMeth(C$, 'updatePlayButtonsLater$Z',  function (playing) {
$I$(26,"invokeLater$Runnable",[((P$.VideoPlayer$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "VideoPlayer$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.VideoPlayer'].updatePlayButtonsPosted$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [this.$finals$.playing]);
});
})()
), Clazz.new_(P$.VideoPlayer$lambda13.$init$,[this, {playing:playing}]))]);
}, p$2);

Clazz.newMeth(C$, 'updatePlayButtonsPosted$Z',  function (playing) {
if (this.getVideoClip$() == null ) return;
var stepCount=this.getVideoClip$().getStepCount$();
var canPlay=stepCount > 1;
this.playButton.setEnabled$Z(canPlay && (playing || this.getStepNumber$() < stepCount - 1 ) );
this.stepButton.setEnabled$Z(canPlay && (playing || this.getStepNumber$() < stepCount - 1 ) );
this.backButton.setEnabled$Z(canPlay && (playing || this.getStepNumber$() > 0 ) );
this.playButton.setSelected$Z(playing);
if (playing) {
this.playButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.Pause.ToolTip"));
this.playButton.setPressedIcon$javax_swing_Icon(C$.pauseIcon);
this.playButton.setIcon$javax_swing_Icon(C$.pauseIcon);
} else {
this.playButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.Play.ToolTip"));
this.playButton.setPressedIcon$javax_swing_Icon(C$.playIcon);
this.playButton.setIcon$javax_swing_Icon(C$.playIcon);
}});

Clazz.newMeth(C$, 'updateLoopButton$Z',  function (looping) {
if (looping == this.loopButton.isSelected$() ) {
return;
}this.loopButton.setSelected$Z(looping);
if (looping) {
this.loopButton.setPressedIcon$javax_swing_Icon(C$.loopIcon);
this.loopButton.setIcon$javax_swing_Icon(C$.loopIcon);
} else {
this.loopButton.setPressedIcon$javax_swing_Icon(C$.noloopIcon);
this.loopButton.setIcon$javax_swing_Icon(C$.noloopIcon);
}}, p$2);

Clazz.newMeth(C$, 'updateValueAndPlayButtons',  function () {
p$2.updateValue.apply(this, []);
p$2.updatePlayButtonsLater$Z.apply(this, [this.clipControl.isPlaying$()]);
}, p$2);

Clazz.newMeth(C$, 'updateValue',  function () {
var frameNumber=this.clipControl.getFrameNumber$();
var startFrame=this.getVideoClip$().getStartFrameNumber$();
var endFrame=this.getVideoClip$().getEndFrameNumber$();
if (frameNumber < startFrame) this.clipControl.setStepNumber$I(0);
 else if (frameNumber > endFrame) this.clipControl.setStepNumber$I(this.getVideoClip$().getStepCount$());
this.slider.setValue$I(this.clipControl.getFrameNumber$());
var stepNumber=this.clipControl.getStepNumber$();
var display;
if ("step".equals$O(this.readoutType)) {
if (stepNumber < 10) {
display="00" + stepNumber;
} else if (stepNumber < 100) {
display="0" + stepNumber;
} else {
display="" + stepNumber;
}} else if ("frame".equals$O(this.readoutType)) {
var n=this.clipControl.getFrameNumber$();
if (n < 10) {
display="00" + n;
} else if (n < 100) {
display="0" + n;
} else {
display="" + n;
}} else {
if (Clazz.instanceOf(C$.timeFormat, "java.text.DecimalFormat")) {
var format=C$.timeFormat;
var dur=this.getMeanStepDuration$();
if (dur < 10 ) {
format.applyPattern$S("0.00E0");
} else if (dur < 100 ) {
format.applyPattern$S("0.000");
} else if (dur < 1000 ) {
format.applyPattern$S("0.00");
} else if (dur < 10000 ) {
format.applyPattern$S("0.0");
} else {
format.applyPattern$S("0.00E0");
}}display=C$.timeFormat.format$D(this.getTime$() / 1000.0);
}this.readout.setText$S(display);
if (!this.ignoreRateSpinner) this.rateSpinner.setValue$O(Double.valueOf$D(this.getRate$()));
this.stepSizeButton.setText$S("" + this.getVideoClip$().getStepSize$());
this.stepSizeButton.setToolTipText$S($I$(13).getString$S("VideoPlayer.Button.StepSize.ToolTip"));
this.rateSpinner.setToolTipText$S($I$(13).getString$S("VideoPlayer.Spinner.Rate.ToolTip"));
if (stepNumber == this.getVideoClip$().getStepCount$() - 1) p$2.updatePlayButtonsLater$Z.apply(this, [this.clipControl.isPlaying$()]);
$I$(19).setFonts$java_awt_Container(this.toolbar);
}, p$2);

Clazz.newMeth(C$, 'updateSlider$S$O',  function (option, o) {
var r=((P$.VideoPlayer$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.media.core.VideoPlayer'].updateSliderAsync$S$O.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer'], [this.$finals$.option, this.$finals$.o]);
});
})()
), Clazz.new_(P$.VideoPlayer$24.$init$,[this, {o:o,option:option}]));
if (o == null  || o === "stepcount"  ) {
$I$(15,"setTimeout$S$I$Z$Runnable",["VP-updateSlider", 200, o != null , r]);
} else {
r.run$();
}}, p$2);

Clazz.newMeth(C$, 'updateSliderAsync$S$O',  function (option, o) {
var clip=this.getVideoClip$();
clip.setAdjusting$Z(false);
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(this.slider.getMinimum$() + clip.getFrameCount$() - 1);
this.sliderLabels.clear$();
this.sliderLabels.put$O$O(Integer.valueOf$I(clip.getStartFrameNumber$()), this.inLabel);
this.sliderLabels.put$O$O(Integer.valueOf$I(clip.getEndFrameNumber$()), this.outLabel);
this.slider.repaint$();
switch (option) {
case "newClip":
this.measuredRate=0;
this.firePropertyChange$S$O$O("videoclip", o, clip);
System.gc$();
break;
case "refresh":
this.setReadoutTypes$S$S("frame time step", "frame");
this.refresh$();
break;
case "property":
break;
}
});

Clazz.newMeth(C$, 'showGoToDialog$',  function () {
if (C$.goToDialog == null ) {
C$.goToDialog=Clazz.new_($I$(47,1).c$$org_opensourcephysics_media_core_VideoPlayer,[this]);
var c=this.getParent$();
while (c != null ){
if (Clazz.instanceOf(c, "javax.swing.JSplitPane")) {
var dim=c.getSize$();
var p=c.getLocationOnScreen$();
var x=((dim.width - C$.goToDialog.getBounds$().width)/2|0);
var y=((dim.height - C$.goToDialog.getBounds$().height)/2|0);
C$.goToDialog.setLocation$I$I(p.x + x, p.y + y);
break;
}c=c.getParent$();
}
} else {
C$.goToDialog.setPlayer$org_opensourcephysics_media_core_VideoPlayer(this);
}C$.goToDialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.clipControl.dispose$();
this.clipControl=null;
if (this.toolbar != null ) this.toolbar.removeAll$();
this.toolbar=null;
this.vidPanel=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(48).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.timeFormat=$I$(20).getNumberInstance$();
{
var path="/org/opensourcephysics/resources/media/images/in_out.gif";
C$.inOutIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/play.gif";
C$.playIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/play_gray.gif";
C$.grayPlayIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/pause.gif";
C$.pauseIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/reset.gif";
C$.resetIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/looping_on.gif";
C$.loopIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/looping_off.gif";
C$.noloopIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/video_clip.gif";
C$.videoClipIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/step.gif";
C$.stepIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/step_gray.gif";
C$.grayStepIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/back.gif";
C$.backIcon=$I$(21).getResizableIcon$S(path);
path="/org/opensourcephysics/resources/media/images/back_gray.gif";
C$.grayBackIcon=$I$(21).getResizableIcon$S(path);
};
C$.slowSpinnerColor=$I$(2).red;
C$.cautionSpinnerColor=Clazz.new_($I$(2,1).c$$I$I$I,[200, 80, 60]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoPlayer, "GoToDialog", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.error_red=Clazz.new_($I$(2,1).c$$I$I$I,[255, 140, 160]);
},1);

C$.$fields$=[['S',['prevFrame','prevTime','prevStep'],'O',['player','org.opensourcephysics.media.core.VideoPlayer','okButton','javax.swing.JButton','+cancelButton','frameLabel','javax.swing.JLabel','+timeLabel','+stepLabel','frameField','javax.swing.JTextField','+timeField','+stepField','$keyListener','java.awt.event.KeyAdapter','$focusListener','java.awt.event.FocusAdapter','error_red','java.awt.Color']]
,['O',['prev','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoPlayer',  function (vidPlayer) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(3).getFrameForComponent$java_awt_Component(vidPlayer.vidPanel), true]);C$.$init$.apply(this);
this.setPlayer$org_opensourcephysics_media_core_VideoPlayer(vidPlayer);
var contentPane=Clazz.new_([Clazz.new_($I$(5,1))],$I$(4,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.okButton=Clazz.new_([$I$(7).getString$S("GUIUtils.Ok")],$I$(6,1).c$$S);
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$GoToDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$GoToDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var input=this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'].stepField.getText$();
if (input != null  && !input.equals$O("") ) try {
var n=Integer.parseInt$S(input);
this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'].player.clipControl.setStepNumber$I(n);
this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'].player.refresh$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'], [false]);
});
})()
), Clazz.new_(P$.VideoPlayer$GoToDialog$1.$init$,[this, null])));
this.cancelButton=Clazz.new_([$I$(7).getString$S("GUIUtils.Cancel")],$I$(6,1).c$$S);
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.VideoPlayer$GoToDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$GoToDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'], [false]);
});
})()
), Clazz.new_(P$.VideoPlayer$GoToDialog$2.$init$,[this, null])));
this.$keyListener=((P$.VideoPlayer$GoToDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$GoToDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var field=e.getSource$();
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'].okButton.doClick$I(0);
} else {
field.setBackground$java_awt_Color($I$(2).white);
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
var field=e.getSource$();
if (e.getKeyCode$() != 10) {
p$1.setValues$javax_swing_JTextField.apply(this.b$['org.opensourcephysics.media.core.VideoPlayer.GoToDialog'], [field]);
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.VideoPlayer$GoToDialog$3));
this.$focusListener=((P$.VideoPlayer$GoToDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoPlayer$GoToDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
field.setBackground$java_awt_Color($I$(2).white);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.VideoPlayer$GoToDialog$4));
this.frameField=Clazz.new_($I$(10,1).c$$I,[6]);
this.frameField.addKeyListener$java_awt_event_KeyListener(this.$keyListener);
this.frameField.addFocusListener$java_awt_event_FocusListener(this.$focusListener);
this.timeField=Clazz.new_($I$(10,1).c$$I,[6]);
this.timeField.addKeyListener$java_awt_event_KeyListener(this.$keyListener);
this.timeField.addFocusListener$java_awt_event_FocusListener(this.$focusListener);
this.stepField=Clazz.new_($I$(10,1).c$$I,[6]);
this.stepField.addKeyListener$java_awt_event_KeyListener(this.$keyListener);
this.stepField.addFocusListener$java_awt_event_FocusListener(this.$focusListener);
this.frameLabel=Clazz.new_($I$(11,1));
this.timeLabel=Clazz.new_($I$(11,1));
this.stepLabel=Clazz.new_($I$(11,1));
var box=$I$(12).createVerticalBox$();
var framePanel=Clazz.new_($I$(4,1));
framePanel.add$java_awt_Component(this.frameLabel);
framePanel.add$java_awt_Component(this.frameField);
box.add$java_awt_Component(framePanel);
var timePanel=Clazz.new_($I$(4,1));
timePanel.add$java_awt_Component(this.timeLabel);
timePanel.add$java_awt_Component(this.timeField);
box.add$java_awt_Component(timePanel);
var stepPanel=Clazz.new_($I$(4,1));
stepPanel.add$java_awt_Component(this.stepLabel);
stepPanel.add$java_awt_Component(this.stepField);
box.add$java_awt_Component(stepPanel);
contentPane.add$java_awt_Component$O(box, "Center");
var buttonPanel=Clazz.new_($I$(4,1));
buttonPanel.add$java_awt_Component(this.okButton);
buttonPanel.add$java_awt_Component(this.cancelButton);
contentPane.add$java_awt_Component$O(buttonPanel, "South");
this.refreshGUI$();
this.pack$();
}, 1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(13).getString$S("VideoPlayer.GoToDialog.Title"));
this.okButton.setText$S($I$(7).getString$S("GUIUtils.Ok"));
this.cancelButton.setText$S($I$(7).getString$S("GUIUtils.Cancel"));
this.frameLabel.setText$S($I$(13).getString$S("VideoPlayer.Readout.MenuItem.Frame") + ":");
var t=this.player.vidPanel.getTimeUnit$();
this.timeLabel.setText$S($I$(13).getString$S("VideoPlayer.Readout.MenuItem.Time") + " (" + t + "):" );
this.stepLabel.setText$S($I$(13).getString$S("VideoPlayer.Readout.MenuItem.Step") + ":");
var labels=Clazz.new_($I$(14,1));
labels.add$O(this.frameLabel);
labels.add$O(this.timeLabel);
labels.add$O(this.stepLabel);
var font=this.frameLabel.getFont$();
var w=0;
for (var it=labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", $I$(15).frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
var labelSize=Clazz.new_($I$(16,1).c$$I$I,[w, 20]);
for (var it=labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setBorder$javax_swing_border_Border($I$(17).createEmptyBorder$I$I$I$I(0, 0, 0, 2));
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setHorizontalAlignment$I(11);
}
});

Clazz.newMeth(C$, 'setPlayer$org_opensourcephysics_media_core_VideoPlayer',  function (vidPlayer) {
if (this.player != null  && this.player !== vidPlayer  ) {
C$.prev.put$O$O(this.player, Clazz.array(String, -1, [this.prevFrame, this.prevTime, this.prevStep]));
var former=C$.prev.get$O(vidPlayer);
if (former != null ) {
this.prevFrame=former[0];
this.prevTime=former[1];
this.prevStep=former[2];
this.frameField.setText$S(this.prevFrame);
this.timeField.setText$S(this.prevTime);
this.stepField.setText$S(this.prevStep);
}}this.player=vidPlayer;
});

Clazz.newMeth(C$, 'setValues$javax_swing_JTextField',  function (inputField) {
var input=inputField.getText$();
if ("".equals$O(input)) {
this.prevFrame="";
this.prevTime="";
this.prevStep="";
} else {
var clip=this.player.getVideoClip$();
if (inputField === this.frameField ) {
this.prevFrame=input;
try {
var frameNum=Integer.parseInt$S(input);
var entered=frameNum;
frameNum=Math.max(clip.getFirstFrameNumber$(), frameNum);
frameNum=Math.min(clip.getEndFrameNumber$(), frameNum);
var stepNum=clip.frameToStep$I(frameNum);
frameNum=clip.stepToFrame$I(stepNum);
var t=this.player.getStepTime$I(stepNum) / 1000;
this.prevTime=$I$(18).timeFormat.format$D(t);
this.prevStep=String.valueOf$I(stepNum);
if (frameNum != entered) {
this.frameField.setBackground$java_awt_Color(this.error_red);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.prevTime="";
this.prevStep="";
this.frameField.setBackground$java_awt_Color(this.error_red);
} else {
throw ex;
}
}
} else if (inputField === this.timeField ) {
this.prevTime=input;
try {
input=input.replaceAll$S$S(",", ".");
var t=(Double.valueOf$S(input)).$c() * 1000;
var dt=this.player.getMeanStepDuration$();
var n=(((t - clip.getStartTime$()) / dt)|0);
var stepNum=Math.max(0, n);
stepNum=Math.min(stepNum, clip.getStepCount$() - 1);
var frameNum=clip.stepToFrame$I(stepNum);
var tmin=this.player.getFrameTime$I(clip.getFirstFrameNumber$());
var tmax=this.player.getFrameTime$I(clip.getLastFrameNumber$());
if (t < tmin  || t > tmax  ) {
this.timeField.setBackground$java_awt_Color(this.error_red);
}this.prevFrame=String.valueOf$I(frameNum);
this.prevStep=String.valueOf$I(stepNum);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.prevFrame="";
this.prevStep="";
this.timeField.setBackground$java_awt_Color(this.error_red);
} else {
throw ex;
}
}
} else {
try {
var stepNum=Integer.parseInt$S(input);
stepNum=Math.max(0, stepNum);
stepNum=Math.min(clip.getStepCount$() - 1, stepNum);
var frameNum=clip.stepToFrame$I(stepNum);
var t=this.player.getStepTime$I(stepNum) / 1000;
this.prevFrame=String.valueOf$I(frameNum);
this.prevTime=$I$(18).timeFormat.format$D(t);
this.prevStep=String.valueOf$I(stepNum);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
}}this.frameField.setText$S(this.prevFrame);
this.timeField.setText$S(this.prevTime);
this.stepField.setText$S(this.prevStep);
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
this.prevFrame="";
this.prevTime="";
this.prevStep="";
this.frameField.setText$S(this.prevFrame);
this.timeField.setText$S(this.prevTime);
this.stepField.setText$S(this.prevStep);
this.frameField.setBackground$java_awt_Color($I$(2).white);
this.timeField.setBackground$java_awt_Color($I$(2).white);
this.stepField.setBackground$java_awt_Color($I$(2).white);
$I$(19,"setFonts$O$I",[this, $I$(19).getLevel$()]);
this.refreshGUI$();
this.pack$();
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

C$.$static$=function(){C$.$static$=0;
C$.prev=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
