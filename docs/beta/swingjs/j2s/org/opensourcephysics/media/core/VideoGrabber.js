(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.Color','java.awt.Dimension','java.util.HashMap','java.awt.image.BufferedImage','org.opensourcephysics.media.core.ImageVideo','java.awt.Image','javax.swing.SwingUtilities','javax.swing.JOptionPane','javax.swing.JButton','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JComboBox','org.opensourcephysics.media.core.VideoIO','javax.swing.JFrame','java.awt.event.WindowAdapter','javax.swing.JPanel','java.awt.BorderLayout',['org.opensourcephysics.media.core.VideoGrabber','.FixedSizeVideoPanel'],'javax.swing.JToolBar','javax.swing.Box','java.awt.Toolkit','javax.swing.AbstractAction','org.opensourcephysics.media.core.VideoFrame','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.controls.XML']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoGrabber", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.VideoCaptureTool');
C$.$classes$=[['FixedSizeVideoPanel',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.recording=true;
this.saved=false;
this.frameCount=0;
this.pixels=Clazz.array(Integer.TYPE, [1]);
this.vidTypes=Clazz.new_($I$(3,1));
this.previewAll=false;
},1);

C$.$fields$=[['Z',['recording','saved','previewAll'],'I',['frameCount'],'S',['playerFileName'],'O',['scratch','java.awt.image.BufferedImage','recorder','org.opensourcephysics.media.core.VideoRecorder','videoType','org.opensourcephysics.media.core.VideoType','recorderPanel','org.opensourcephysics.media.core.VideoPanel','+playerPanel','recorderFrame','javax.swing.JFrame','+playerFrame','clearAction','javax.swing.Action','+saveAsAction','+recordAction','+vidTypeAction','+fpsAction','clearButton','javax.swing.JButton','+saveAsButton','recordCheckBox','javax.swing.JCheckBox','+loopCheckBox','vidTypeDropDown','javax.swing.JComboBox','fpsLabel','javax.swing.JLabel','fpsDropDown','javax.swing.JComboBox','imageSize','java.awt.Dimension','pixels','int[]','vidTypes','java.util.Map']]
,['O',['VIDEO_CAPTURE_TOOL','org.opensourcephysics.media.core.VideoGrabber','defaultSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Dimension.apply(this, [C$.defaultSize]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dimension',  function (dim) {
;C$.superclazz.c$$Z.apply(this,[false]);C$.$init$.apply(this);
this.imageSize=dim;
this.createGUI$();
this.vidTypeAction.actionPerformed$java_awt_event_ActionEvent(null);
this.setRecording$Z(false);
}, 1);

Clazz.newMeth(C$, 'getTool$',  function () {
if (C$.VIDEO_CAPTURE_TOOL == null ) {
C$.VIDEO_CAPTURE_TOOL=Clazz.new_(C$);
}return C$.VIDEO_CAPTURE_TOOL;
}, 1);

Clazz.newMeth(C$, 'getTool$java_awt_Dimension',  function (dim) {
if (C$.VIDEO_CAPTURE_TOOL == null ) {
C$.VIDEO_CAPTURE_TOOL=Clazz.new_(C$.c$$java_awt_Dimension,[dim]);
} else {
C$.VIDEO_CAPTURE_TOOL.imageSize=dim;
C$.VIDEO_CAPTURE_TOOL.recorderPanel.setPreferredSize$java_awt_Dimension(dim);
C$.VIDEO_CAPTURE_TOOL.recorderFrame.pack$();
}return C$.VIDEO_CAPTURE_TOOL;
}, 1);

Clazz.newMeth(C$, 'clear$',  function () {
this.clearAction.actionPerformed$java_awt_event_ActionEvent(null);
});

Clazz.newMeth(C$, 'addFrame$java_awt_image_BufferedImage',  function (image) {
if (this.isRecording$()) {
try {
var w=image.getWidth$();
var h=image.getHeight$();
var remainderW=(w % 16);
var remainderH=(h % 16);
if (remainderW != 0 || remainderH != 0 ) {
image=image.getSubimage$I$I$I$I((remainderW/2|0), (remainderH/2|0), w - remainderW, h - remainderH);
w=image.getWidth$();
h=image.getHeight$();
}if (this.pixels.length != w * h) {
this.pixels=Clazz.array(Integer.TYPE, [w * h]);
}var newScratch=false;
if (this.previewAll) {
this.scratch=null;
} else if ((this.scratch == null ) || (this.scratch.getWidth$() != w) || (this.scratch.getHeight$() != h)  ) {
this.scratch=Clazz.new_($I$(4,1).c$$I$I$I,[w, h, 1]);
newScratch=true;
}var copy=this.previewAll ? Clazz.new_($I$(4,1).c$$I$I$I,[w, h, 1]) : this.scratch;
image.getRaster$().getDataElements$I$I$I$I$O(0, 0, w, h, this.pixels);
copy.getRaster$().setDataElements$I$I$I$I$O(0, 0, w, h, this.pixels);
var video=this.recorderPanel.getVideo$();
if (video == null ) {
this.recorderPanel.setVideo$org_opensourcephysics_media_core_Video(Clazz.new_($I$(5,1).c$$java_awt_Image,[copy]));
this.recorderPanel.getPlayer$().setReadoutTypes$S$S("frame", null);
if (Clazz.instanceOf(this.recorder, "org.opensourcephysics.media.gif.GifVideoRecorder")) {
var i=this.loopCheckBox.isSelected$() ? 0 : 1;
(this.recorder).getGifEncoder$().setRepeat$I(i);
}} else if (this.previewAll) {
var imageVid=video;
imageVid.insert$java_awt_ImageA$I$SA(Clazz.array($I$(6), -1, [copy]), imageVid.getFrameCount$(), null);
} else if (newScratch) {
this.recorderPanel.setVideo$org_opensourcephysics_media_core_Video(Clazz.new_($I$(5,1).c$$java_awt_Image,[copy]));
this.recorderPanel.getPlayer$().setReadoutTypes$S$S("frame", null);
}this.recorder.addFrame$java_awt_Image(copy);
++this.frameCount;
var item=this.fpsDropDown.getSelectedItem$();
var dt=1000.0 / Double.parseDouble$S(item);
this.recorderPanel.getPlayer$().getClipControl$().setFrameDuration$D(dt);
this.recorderPanel.getPlayer$().getVideoClip$().setStepCount$I(this.frameCount);
this.recorderPanel.getPlayer$().setStepNumber$I(this.frameCount - 1);
if (video == null ) {
this.imageSize=Clazz.new_([image.getWidth$(), image.getHeight$()],$I$(2,1).c$$I$I);
var dim=Clazz.new_([image.getWidth$() + 4, image.getHeight$() + 4],$I$(2,1).c$$I$I);
var runner=((P$.VideoGrabber$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.setPreferredSize$java_awt_Dimension(this.$finals$.dim);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderFrame.pack$();
});
})()
), Clazz.new_(P$.VideoGrabber$1.$init$,[this, {dim:dim}]));
$I$(7).invokeLater$Runnable(runner);
this.refreshGUI$();
}return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return false;
} else {
throw ex;
}
}
}return false;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.recorderFrame.setVisible$Z(visible);
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.recorderFrame.isVisible$();
});

Clazz.newMeth(C$, 'setRecording$Z',  function (record) {
this.recording=record;
this.refreshGUI$();
});

Clazz.newMeth(C$, 'isRecording$',  function () {
return this.recording && (this.recorder != null ) ;
});

Clazz.newMeth(C$, 'setVideoType$org_opensourcephysics_media_core_VideoType',  function (type) {
if ((type == null ) || (type === this.videoType ) ) {
return;
}this.videoType=type;
this.recorder=type.getRecorder$();
this.clearAction.actionPerformed$java_awt_event_ActionEvent(null);
});

Clazz.newMeth(C$, 'setFrameRate$D',  function (fps) {
fps=Math.max(fps, 1);
fps=Math.min(fps, 60);
fps=Long.$dval(Long.$div(Math.round$D(100 * fps),100));
var n=this.fpsDropDown.getItemCount$();
for (var i=0; i < n; i++) {
var item=this.fpsDropDown.getItemAt$I(i);
var dropdownValue=Double.parseDouble$S(item);
if (fps == dropdownValue ) {
this.fpsDropDown.setSelectedIndex$I(i);
return;
}if (fps > dropdownValue ) {
var s=String.valueOf$D(fps);
this.fpsDropDown.insertItemAt$O$I(s, i);
this.fpsDropDown.setSelectedItem$O(s);
return;
}}
});

Clazz.newMeth(C$, 'saveVideoAs$',  function () {
if (this.recorder != null ) {
try {
return this.recorder.saveVideoAs$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(8,"showMessageDialog$java_awt_Component$O$S$I",[null, ex.getMessage$(), "File Not Saved", 2]);
} else {
throw ex;
}
}
}return null;
});

Clazz.newMeth(C$, 'getRecorder$',  function () {
return this.recorder;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.createActions$();
this.clearButton=Clazz.new_($I$(9,1).c$$javax_swing_Action,[this.clearAction]);
this.saveAsButton=Clazz.new_($I$(9,1).c$$javax_swing_Action,[this.saveAsAction]);
this.recordCheckBox=Clazz.new_($I$(10,1).c$$javax_swing_Action,[this.recordAction]);
this.recordCheckBox.setOpaque$Z(false);
this.loopCheckBox=Clazz.new_($I$(10,1));
this.loopCheckBox.setOpaque$Z(false);
this.fpsLabel=Clazz.new_($I$(11,1));
var rates=Clazz.array(String, -1, ["30", "29.97", "25", "20", "15", "12", "10", "8", "6", "5", "4", "3", "2", "1"]);
this.fpsDropDown=((P$.VideoGrabber$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getMinimumSize$();
});
})()
), Clazz.new_($I$(12,1).c$$SA,[this, null, rates],P$.VideoGrabber$2));
this.fpsDropDown.addActionListener$java_awt_event_ActionListener(this.fpsAction);
this.vidTypeDropDown=((P$.VideoGrabber$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getMinimumSize$();
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.VideoGrabber$3));
for (var next, $next = $I$(13).getVideoTypes$Z(true).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var desc=next.getDescription$();
this.vidTypes.put$O$O(desc, next);
this.vidTypeDropDown.addItem$O(desc);
}
this.vidTypeDropDown.addActionListener$java_awt_event_ActionListener(this.vidTypeAction);
this.recorderFrame=Clazz.new_($I$(14,1));
this.recorderFrame.setDefaultCloseOperation$I(1);
this.recorderFrame.setName$S("VideoCaptureTool");
this.recorderFrame.addWindowListener$java_awt_event_WindowListener(((P$.VideoGrabber$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
if (Clazz.instanceOf(this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder, "org.opensourcephysics.media.core.ScratchVideoRecorder")) {
var svr=this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder;
if (svr.scratchFile != null ) {
try {
svr.saveScratch$();
svr.scratchFile.delete$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}}});
})()
), Clazz.new_($I$(15,1),[this, null],P$.VideoGrabber$4)));
var contentPane=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
this.recorderFrame.setContentPane$java_awt_Container(contentPane);
this.recorderPanel=Clazz.new_($I$(18,1),[this, null]);
this.recorderPanel.setPreferredSize$java_awt_Dimension(this.imageSize);
var bottomPanel=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(bottomPanel, "South");
var playerBar=Clazz.new_($I$(19,1));
playerBar.setFloatable$Z(false);
this.recorderPanel.getPlayer$().setBorder$javax_swing_border_Border(null);
this.recorderPanel.setPlayerVisible$Z(false);
this.recorderPanel.getPlayer$().setLoopingButtonVisible$Z(false);
contentPane.add$java_awt_Component$O(this.recorderPanel, "Center");
var buttonBar=Clazz.new_($I$(19,1));
buttonBar.setFloatable$Z(false);
if (this.previewAll) {
playerBar.add$java_awt_Component(this.recorderPanel.getPlayer$());
bottomPanel.add$java_awt_Component$O(playerBar, "Center");
} else {
buttonBar.add$java_awt_Component(this.recorderPanel.getPlayer$().readout);
}bottomPanel.add$java_awt_Component$O(buttonBar, "South");
buttonBar.add$java_awt_Component(this.recordCheckBox);
buttonBar.add$java_awt_Component($I$(20).createHorizontalGlue$());
buttonBar.add$java_awt_Component(this.clearButton);
buttonBar.add$java_awt_Component(this.saveAsButton);
var topBar=Clazz.new_($I$(19,1));
topBar.setFloatable$Z(false);
contentPane.add$java_awt_Component$O(topBar, "North");
topBar.add$java_awt_Component(this.vidTypeDropDown);
topBar.addSeparator$();
topBar.add$java_awt_Component(this.fpsLabel);
topBar.add$java_awt_Component(this.fpsDropDown);
topBar.addSeparator$();
topBar.add$java_awt_Component(this.loopCheckBox);
topBar.add$java_awt_Component($I$(20).createHorizontalGlue$());
this.recorderFrame.pack$();
var dim=$I$(21).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.recorderFrame.getBounds$().width)/2|0);
this.recorderFrame.setLocation$I$I(x, 0);
});

Clazz.newMeth(C$, 'createActions$',  function () {
this.clearAction=((P$.VideoGrabber$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.setVideo$org_opensourcephysics_media_core_Video(null);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.getPlayer$().getVideoClip$().setStepCount$I(1);
if (this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder != null ) {
var item=this.b$['org.opensourcephysics.media.core.VideoGrabber'].fpsDropDown.getSelectedItem$();
var dt=1000.0 / Double.parseDouble$S(item);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder.setFrameDuration$D(dt);
try {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder.createVideo$();
this.b$['org.opensourcephysics.media.core.VideoGrabber'].frameCount=0;
this.b$['org.opensourcephysics.media.core.VideoGrabber'].saved=false;
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.setVideo$org_opensourcephysics_media_core_Video(null);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.getPlayer$().setReadoutTypes$S$S("frame", null);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.getPlayer$().getVideoClip$().setStepCount$I(1);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].refreshGUI$.apply(this.b$['org.opensourcephysics.media.core.VideoGrabber'], []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}System.gc$();
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.VideoGrabber$5));
this.saveAsAction=((P$.VideoGrabber$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder != null ) {
try {
var name=this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorder.saveVideoAs$();
if (name != null ) {
var video=this.b$['org.opensourcephysics.media.core.VideoGrabber'].videoType.getVideo$S(name);
if (this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel == null ) {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel=Clazz.new_($I$(18,1),[this, null]);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerFrame=Clazz.new_($I$(23,1).c$$org_opensourcephysics_media_core_VideoPanel,[this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel]);
var w=this.b$['org.opensourcephysics.media.core.VideoGrabber'].imageSize.width + 4;
var h=this.b$['org.opensourcephysics.media.core.VideoGrabber'].imageSize.height + this.b$['org.opensourcephysics.media.core.VideoGrabber'].recorderPanel.getPlayer$().$height + 4 ;
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[w, h]));
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerFrame.pack$();
}this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel.setVideo$org_opensourcephysics_media_core_Video(video);
if (this.b$['org.opensourcephysics.media.core.VideoGrabber'].loopCheckBox.isVisible$() && this.b$['org.opensourcephysics.media.core.VideoGrabber'].loopCheckBox.isSelected$() ) {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel.getPlayer$().setLooping$Z(true);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerPanel.getPlayer$().play$();
}this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerFrame.setVisible$Z(true);
this.b$['org.opensourcephysics.media.core.VideoGrabber'].saved=true;
this.b$['org.opensourcephysics.media.core.VideoGrabber'].playerFileName=name;
this.b$['org.opensourcephysics.media.core.VideoGrabber'].clearAction.actionPerformed$java_awt_event_ActionEvent(null);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});
})()
), Clazz.new_($I$(22,1),[this, null],P$.VideoGrabber$6));
this.recordAction=((P$.VideoGrabber$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].recording=!this.b$['org.opensourcephysics.media.core.VideoGrabber'].recording;
this.b$['org.opensourcephysics.media.core.VideoGrabber'].refreshGUI$.apply(this.b$['org.opensourcephysics.media.core.VideoGrabber'], []);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.VideoGrabber$7));
this.vidTypeAction=((P$.VideoGrabber$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var desc=this.b$['org.opensourcephysics.media.core.VideoGrabber'].vidTypeDropDown.getSelectedItem$();
var vidType=this.b$['org.opensourcephysics.media.core.VideoGrabber'].vidTypes.get$O(desc);
if (vidType != null ) {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].setVideoType$org_opensourcephysics_media_core_VideoType.apply(this.b$['org.opensourcephysics.media.core.VideoGrabber'], [vidType]);
}});
})()
), Clazz.new_($I$(22,1),[this, null],P$.VideoGrabber$8));
this.fpsAction=((P$.VideoGrabber$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoGrabber$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.VideoGrabber'].clearAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.VideoGrabber$9));
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.recordCheckBox.setSelected$Z(this.isRecording$());
this.clearButton.setEnabled$Z(this.frameCount != 0);
this.saveAsButton.setEnabled$Z(this.frameCount != 0);
this.vidTypeDropDown.setEnabled$Z(this.frameCount == 0);
this.vidTypeDropDown.setSelectedItem$O(this.videoType.getDescription$());
this.fpsDropDown.setEnabled$Z(this.frameCount == 0);
this.fpsDropDown.setVisible$Z(!(Clazz.instanceOf(this.videoType, "org.opensourcephysics.media.core.ImageVideoType")));
this.fpsLabel.setVisible$Z(!(Clazz.instanceOf(this.videoType, "org.opensourcephysics.media.core.ImageVideoType")));
this.loopCheckBox.setEnabled$Z(this.frameCount == 0);
this.recorderPanel.getPlayer$().readout.setEnabled$Z(this.frameCount != 0);
this.recordCheckBox.setText$S($I$(24).getString$S("VideoGrabber.Action.Capture"));
this.loopCheckBox.setText$S($I$(24).getString$S("VideoGrabber.Action.Loop"));
this.loopCheckBox.setVisible$Z(this.videoType.getClass$().getSimpleName$().equals$O("GifVideoType"));
this.fpsLabel.setText$S($I$(24).getString$S("VideoGrabber.Label.PlayRate") + " ");
this.clearButton.setText$S($I$(24).getString$S("VideoGrabber.Action.Clear"));
this.saveAsButton.setText$S($I$(24).getString$S("VideoGrabber.Action.SaveAs"));
if (this.recordCheckBox.isSelected$()) {
this.recorderFrame.setTitle$S($I$(24).getString$S("VideoGrabber.Title.Capturing") + this.videoType.getDescription$());
} else {
this.recorderFrame.setTitle$S(this.videoType.getDescription$());
}if ((this.playerFrame != null ) && this.playerFrame.isVisible$() ) {
this.playerFrame.setTitle$S($I$(24).getString$S("VideoGrabber.Title.Saved") + $I$(25).getName$S(this.playerFileName));
}});

C$.$static$=function(){C$.$static$=0;
C$.VIDEO_CAPTURE_TOOL=null;
C$.defaultSize=Clazz.new_($I$(2,1).c$$I$I,[320, 240]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VideoGrabber, "FixedSizeVideoPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.VideoPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setBackground$java_awt_Color($I$(1).black);
this.setDrawingInImageSpace$Z(true);
this.setShowCoordinates$Z(false);
}, 1);

Clazz.newMeth(C$, 'scale$java_util_ArrayList',  function (drawables) {
var w=this.imageWidth;
var wBorder=(this.getWidth$() - w - 1 ) * 0.5 / w;
var h=this.imageHeight;
var hBorder=(this.getHeight$() - h - 1 ) * 0.5 / h;
var border=Math.min(wBorder, hBorder);
C$.superclazz.prototype.setImageBorder$D.apply(this, [border]);
C$.superclazz.prototype.scale$java_util_ArrayList.apply(this, [drawables]);
});
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
