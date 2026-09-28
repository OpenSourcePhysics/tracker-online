(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'swingjs.api.js.HTML5Video','java.util.Arrays','javax.swing.JOptionPane','javax.swing.JLabel','java.util.ArrayList','javajs.util.VideoReader',['test.Test_Video','.VideoFrame'],'org.opensourcephysics.tools.FileDropHandler','java.net.URL','java.awt.Dimension','java.awt.image.BufferedImage','javax.swing.ImageIcon','java.io.File','javax.swing.BoxLayout','java.nio.file.Files','javax.swing.JLayeredPane','java.awt.Color','javax.swing.JPanel','java.awt.Point','java.awt.event.MouseAdapter','javax.swing.JCheckBox','javax.swing.JButton',['test.Test_Video','.RateCalc']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Video", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['VideoFrame',1],['RateCalc',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isJS=true ||false;
this.label=Clazz.new_($I$(4,1).c$$S,[null]);
this.t0=0;
this.frameCount=0;
this.delay=33334;
this.points=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['isJS','isDiscrete','playing'],'D',['vt','vt0','vt1','duration'],'I',['w','h','vw','vh','totalTime','frameCount','delay'],'J',['t0'],'O',['jsvideo','swingjs.api.js.HTML5Video','imageLabel','javax.swing.JLabel','image','java.awt.image.BufferedImage','dialog','javax.swing.JDialog','main','test.Test_Video.VideoFrame','label','javax.swing.JLabel','timer','javax.swing.Timer','playListener','Object[]','layerPane','javax.swing.JLayeredPane','drawLayer','javax.swing.JPanel','points','java.util.List','cbCapture','javax.swing.JCheckBox','+cbDiscrete','rc','test.Test_Video.RateCalc']]
,['O',['allprops','String[]']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
if (args.length > 0) {
System.out.println$S(C$.getMP4Codec$S$S(args[0], null));
} else {
Clazz.new_(C$);
}}, 1);

Clazz.newMeth(C$, 'getMP4Codec$S$S',  function (fname, name) {
try {
var vr=Clazz.new_($I$(6,1).c$$S,[fname]);
vr.getContents$Z(true);
var info=vr.getFileType$() + "|" + vr.getCodec$() ;
return (name == null  ? fname : name) + ": " + info ;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return fname + "?";
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.main=Clazz.new_($I$(7,1),[this, null]);
this.main.setDefaultCloseOperation$I(3);
this.main.setTransferHandler$javax_swing_TransferHandler(Clazz.new_($I$(8,1).c$$org_opensourcephysics_tools_FileDropHandler_FileImporter,[this.main]));
var testRemote=false;
this.isDiscrete=true;
var video=("test/duet.mp4");
var videoURL=null;
if (testRemote) try {
videoURL=Clazz.new_($I$(9,1).c$$S,["https://chemapps.stolaf.edu/test/duet.mp4"]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.net.MalformedURLException")){
} else {
throw e1;
}
}
this.vw=1920;
this.vh=(this.vw * 9/16|0);
this.w=480;
this.h=(this.w * 9/16|0);
var dim=Clazz.new_([this.w, (this.w * 9/16|0)],$I$(10,1).c$$I$I);
this.imageLabel=Clazz.new_($I$(4,1));
this.imageLabel.setAlignmentX$F(0.5);
var type=(this.isJS ? -6 : 6);
this.image=Clazz.new_($I$(11,1).c$$I$I$I,[this.w, this.h, type]);
var imageicon=Clazz.new_($I$(12,1).c$$java_awt_Image,[this.image]);
this.imageLabel.setIcon$javax_swing_Icon(imageicon);
var file=Clazz.new_($I$(13,1).c$$S,[video]);
p$1.createVideoLabel$java_io_File$java_net_URL$S.apply(this, [file, videoURL, video]);
p$1.createDialog.apply(this, []);
var cp=this.main.getContentPane$();
cp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$java_awt_Container$I,[cp, 1]));
var videoPanel=p$1.getLayerPane$java_awt_Dimension.apply(this, [dim]);
cp.add$java_awt_Component(videoPanel);
videoPanel.setAlignmentX$F(0.5);
var controls=p$1.getControls.apply(this, []);
controls.setAlignmentX$F(0.5);
cp.add$java_awt_Component(controls);
cp.add$java_awt_Component(this.imageLabel);
this.main.pack$();
this.main.setVisible$Z(true);
$I$(1,"setProperty",[this.jsvideo, "currentTime", Integer.valueOf$I(0)]);
p$1.showAllProperties.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createDialog',  function () {
if (this.dialog != null ) {
this.dialog.dispose$();
}this.dialog=$I$(1,"createDialog",[null, this.label, 500, ((P$.Test_Video$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$swingjs_api_js_HTML5Video','apply$O'],  function (video) {
this.b$['test.Test_Video'].dialog.setVisible$Z(true);
return null;
});
})()
), Clazz.new_(P$.Test_Video$1.$init$,[this, null]))]);
}, p$1);

Clazz.newMeth(C$, 'createVideoLabel$java_io_File$java_net_URL$S',  function (file, videoURL, video) {
var asBytes=(file != null );
var icon;
if (!this.isJS && file != null  ) {
icon=Clazz.new_($I$(12,1).c$$S,["test/video_image.png"]);
if (!(file.toString().equals$O(file.getAbsolutePath$()))) {
file=Clazz.new_(["site/swingjs/j2s/" + file.toString()],$I$(13,1).c$$S);
}System.out.println$S(file.getAbsolutePath$());
System.out.println$S(C$.getMP4Codec$S$S(file.getAbsolutePath$(), file.getName$()));
return;
} else if (asBytes) {
try {
var bytes;
bytes=$I$(15,"readAllBytes$java_nio_file_Path",[file.toPath$()]);
icon=Clazz.new_($I$(12,1).c$$BA$S,[bytes, "jsvideo"]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
icon=null;
} else {
throw e1;
}
}
} else if (videoURL != null ) {
icon=Clazz.new_($I$(12,1).c$$java_net_URL$S,[videoURL, "jsvideo"]);
} else {
icon=Clazz.new_($I$(12,1).c$$S$S,[video, "jsvideo"]);
}this.label.setIcon$javax_swing_Icon(icon);
this.jsvideo=this.label.getClientProperty$O("jsvideo");
var info=this.label.getClientProperty$O("jsvideoinfo");
if (info != null ) {
System.out.println$O(info);
}$I$(1,"addActionListener",[this.jsvideo, ((P$.Test_Video$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var event=e.getActionCommand$();
System.out.println$S(event + " " + new Double($I$(1).getCurrentTime(this.b$['test.Test_Video'].jsvideo)).toString() );
if (this.b$['test.Test_Video'].cbCapture != null  && this.b$['test.Test_Video'].cbCapture.isSelected$()  && event.equals$O("canplaythrough") ) {
this.b$['test.Test_Video'].grabImage$.apply(this.b$['test.Test_Video'], []);
}});
})()
), Clazz.new_(P$.Test_Video$2.$init$,[this, null])), []]);
}, p$1);

Clazz.newMeth(C$, 'loadVideo$java_net_URL',  function (url) {
var bounds=this.label.getBounds$();
this.layerPane.remove$java_awt_Component(this.label);
p$1.createVideoLabel$java_io_File$java_net_URL$S.apply(this, [null, url, null]);
if (!this.isJS) {
return;
}p$1.createDialog.apply(this, []);
this.layerPane.add$java_awt_Component$O(this.label, $I$(16).DEFAULT_LAYER);
this.label.setBounds$java_awt_Rectangle(bounds);
this.label.setVisible$Z(true);
});

Clazz.newMeth(C$, 'loadVideo$java_io_File',  function (file) {
var bounds=this.label.getBounds$();
this.layerPane.remove$java_awt_Component(this.label);
p$1.createVideoLabel$java_io_File$java_net_URL$S.apply(this, [file, null, null]);
if (!this.isJS) {
return;
}p$1.createDialog.apply(this, []);
this.layerPane.add$java_awt_Component$O(this.label, $I$(16).DEFAULT_LAYER);
this.label.setBounds$java_awt_Rectangle(bounds);
this.label.setVisible$Z(true);
});

Clazz.newMeth(C$, 'describeVideo$S$S',  function (resource, name) {
var vr=Clazz.new_($I$(6,1).c$$S,[resource]);
System.out.println$S("codec = " + vr.getCodec$());
this.main.setTitle$S(name + " " + vr.getFileType$() + "|" + vr.getCodec$() );
}, p$1);

Clazz.newMeth(C$, 'showProperty$S',  function (key) {
System.out.println$S(key + "=" + $I$(1).getProperty(this.jsvideo, key) );
}, p$1);

Clazz.newMeth(C$, 'showAllProperties',  function () {
if (!this.isJS) return;
for (var i=0; i < C$.allprops.length; i++) p$1.showProperty$S.apply(this, [C$.allprops[i]]);

}, p$1);

Clazz.newMeth(C$, 'setTimes$DA',  function (htmlRequstTimes) {
var n=(htmlRequstTimes[0]|0) + 1;
htmlRequstTimes[0]=htmlRequstTimes[1];
if (n < 2) {
return;
}var t0=0;
var dt;
var nFrames=1;
for (var i=1; i < n; i++) {
dt=htmlRequstTimes[i] - htmlRequstTimes[i - 1];
if (dt > 0 ) {
if (t0 == 0 ) t0=htmlRequstTimes[i - 1];
System.out.println$S("htmlTime[" + nFrames + "]\t" + new Double((htmlRequstTimes[i] - t0)).toString() + "\t" + new Double(dt).toString() );
++nFrames;
}}
dt=this.duration / (nFrames + 1);
System.out.println$S("duration " + new Double(this.duration).toString() + " for " + nFrames + " frames; ave dt = " + new Double(dt).toString() + " for nframes + 1 or " + new Double((this.duration / nFrames)).toString() + " for nframes" );
});

Clazz.newMeth(C$, 'playVideoDiscretely$swingjs_api_js_HTML5Video',  function (v) {
this.vt0=this.vt=$I$(1).getCurrentTime(v);
if (this.vt0 == 0 ) this.frameCount=0;
this.t0=Long.$sub(System.currentTimeMillis$(),((this.vt * 1000)|0));
if (this.vt >= this.duration ) {
this.vt=0;
this.playing=false;
}var listener=((P$.Test_Video$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].cbCapture.isSelected$()) {
this.b$['test.Test_Video'].grabImage$.apply(this.b$['test.Test_Video'], []);
}System.out.print$S("\u0000");
this.b$['test.Test_Video'].vt+=this.b$['test.Test_Video'].delay / 1000000.0;
System.out.println$S("setting time to " + new Double(this.b$['test.Test_Video'].vt).toString() + " duration=" + this.b$['test.Test_Video'].delay );
$I$(1).setCurrentTime(this.$finals$.v, this.b$['test.Test_Video'].vt);
var dt=Long.$sub(System.currentTimeMillis$(),this.b$['test.Test_Video'].t0);
var dtv=this.b$['test.Test_Video'].vt - this.b$['test.Test_Video'].vt0;
System.out.println$S((new Double(dtv - dt / 1000.0).toString()) + " " + $I$(1).getProperty(this.b$['test.Test_Video'].jsvideo, "paused") + " " + $I$(1).getProperty(this.b$['test.Test_Video'].jsvideo, "seeking") + " " + ++this.b$['test.Test_Video'].frameCount );
if (this.b$['test.Test_Video'].vt >= this.b$['test.Test_Video'].duration ) {
this.b$['test.Test_Video'].playing=false;
this.b$['test.Test_Video'].removePlayListener$swingjs_api_js_HTML5Video.apply(this.b$['test.Test_Video'], [this.$finals$.v]);
}});
})()
), Clazz.new_(P$.Test_Video$3.$init$,[this, {v:v}]));
this.playListener=$I$(1).addActionListener(v, listener, ["canplaythrough"]);
this.t0=System.currentTimeMillis$();
listener.actionPerformed$java_awt_event_ActionEvent(null);
}, p$1);

Clazz.newMeth(C$, 'grabImage$',  function () {
var img=$I$(1).getImage(this.jsvideo, -2147483648);
var g=this.image.getGraphics$();
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img, 0, 0, this.w, this.h, 0, 0, this.vw, this.vh, null);
g.dispose$();
this.imageLabel.repaint$();
});

Clazz.newMeth(C$, 'removePlayListener$swingjs_api_js_HTML5Video',  function (v) {
if (this.playListener != null ) $I$(1).removeActionListener(v, this.playListener);
this.playListener=null;
});

Clazz.newMeth(C$, 'getLayerPane$java_awt_Dimension',  function (dim) {
p$1.lockDim$javax_swing_JComponent$java_awt_Dimension.apply(this, [this.label, dim]);
this.label.setBounds$I$I$I$I(0, 0, dim.width, dim.height);
this.drawLayer=((P$.Test_Video$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
g.setColor$java_awt_Color($I$(17).red);
for (var i=0, n=this.b$['test.Test_Video'].points.size$(); i < n; i++) {
var p=this.b$['test.Test_Video'].points.get$I(i);
g.drawLine$I$I$I$I(p.x - 5, p.y, p.x + 5, p.y);
g.drawLine$I$I$I$I(p.x, p.y - 5, p.x, p.y + 5);
}
});
})()
), Clazz.new_($I$(18,1),[this, null],P$.Test_Video$4));
this.drawLayer.setBounds$I$I$I$I(0, 0, dim.width, dim.height);
this.drawLayer.setOpaque$Z(false);
this.drawLayer.putClientProperty$O$O("jscanvas", "true");
this.drawLayer.addMouseListener$java_awt_event_MouseListener(((P$.Test_Video$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
System.out.println$S("Draw layer mouse click " + e.getX$() + " " + e.getY$() );
this.b$['test.Test_Video'].points.add$O(Clazz.new_([e.getX$(), e.getY$()],$I$(19,1).c$$I$I));
this.b$['test.Test_Video'].drawLayer.repaint$();
});
})()
), Clazz.new_($I$(20,1),[this, null],P$.Test_Video$5)));
this.layerPane=Clazz.new_($I$(16,1));
p$1.lockDim$javax_swing_JComponent$java_awt_Dimension.apply(this, [this.layerPane, dim]);
this.layerPane.add$java_awt_Component$O(this.drawLayer, $I$(16).PALETTE_LAYER);
this.layerPane.add$java_awt_Component$O(this.label, $I$(16).DEFAULT_LAYER);
var p=Clazz.new_($I$(18,1));
p.add$java_awt_Component$O(this.layerPane, "Center");
p$1.lockDim$javax_swing_JComponent$java_awt_Dimension.apply(this, [p, dim]);
return p;
}, p$1);

Clazz.newMeth(C$, 'lockDim$javax_swing_JComponent$java_awt_Dimension',  function (c, dim) {
c.setPreferredSize$java_awt_Dimension(dim);
c.setMinimumSize$java_awt_Dimension(dim);
c.setMaximumSize$java_awt_Dimension(dim);
}, p$1);

Clazz.newMeth(C$, 'getControls',  function () {
this.cbCapture=Clazz.new_($I$(21,1).c$$S,["capture"]);
this.cbCapture.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['test.Test_Video'].grabImage$.apply(this.b$['test.Test_Video'], []);
});
})()
), Clazz.new_(P$.Test_Video$6.$init$,[this, null])));
this.cbDiscrete=Clazz.new_($I$(21,1).c$$S,["discrete"]);
var play=Clazz.new_($I$(22,1).c$$S,["play"]);
play.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].playing || this.b$['test.Test_Video'].jsvideo == null  ) return;
this.b$['test.Test_Video'].duration=($I$(1).getProperty(this.b$['test.Test_Video'].jsvideo, "duration")).doubleValue$();
this.b$['test.Test_Video'].isDiscrete=this.b$['test.Test_Video'].cbDiscrete.isSelected$();
try {
this.b$['test.Test_Video'].playing=true;
if (this.b$['test.Test_Video'].isDiscrete) {
p$1.playVideoDiscretely$swingjs_api_js_HTML5Video.apply(this.b$['test.Test_Video'], [this.b$['test.Test_Video'].jsvideo]);
} else {
$I$(1,"requestVideoFrameCallback",[this.b$['test.Test_Video'].jsvideo, ((P$.Test_Video$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$O',  function (metadata) {
System.out.println$S("metata=" + (JSON.stringify(metadata) ||0));
});
})()
), Clazz.new_(P$.Test_Video$7$1.$init$,[this, null]))]);
this.b$['test.Test_Video'].jsvideo.play();
}} catch (e1) {
e1.printStackTrace$();
}
});
})()
), Clazz.new_(P$.Test_Video$7.$init$,[this, null])));
var pause=Clazz.new_($I$(22,1).c$$S,["pause"]);
pause.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].jsvideo == null ) return;
try {
this.b$['test.Test_Video'].playing=false;
this.b$['test.Test_Video'].duration=0;
this.b$['test.Test_Video'].jsvideo.pause();
this.b$['test.Test_Video'].removePlayListener$swingjs_api_js_HTML5Video.apply(this.b$['test.Test_Video'], [this.b$['test.Test_Video'].jsvideo]);
} catch (e1) {
e1.printStackTrace$();
}
});
})()
), Clazz.new_(P$.Test_Video$8.$init$,[this, null])));
if (this.isJS) {
var canSeek=$I$(1).getProperty(this.jsvideo, "seekToNextFrame") != null ;
System.out.println$S("canSeek = " + canSeek);
}var next=Clazz.new_($I$(22,1).c$$S,["next"]);
next.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].playing || this.b$['test.Test_Video'].jsvideo == null  ) return;
var t=$I$(1).getCurrentTime(this.b$['test.Test_Video'].jsvideo);
System.out.println$S(new Double(t).toString() + "  " + new Double((t - this.b$['test.Test_Video'].vt0)).toString() );
this.b$['test.Test_Video'].vt0=t;
$I$(1).nextFrame(this.b$['test.Test_Video'].jsvideo, 0.01);
});
})()
), Clazz.new_(P$.Test_Video$9.$init$,[this, null])));
var reset=Clazz.new_($I$(22,1).c$$S,["reset"]);
reset.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].jsvideo == null ) return;
this.b$['test.Test_Video'].vt0=0;
try {
$I$(1).setCurrentTime(this.b$['test.Test_Video'].jsvideo, 0);
} catch (e1) {
e1.printStackTrace$();
}
});
})()
), Clazz.new_(P$.Test_Video$10.$init$,[this, null])));
var clear=Clazz.new_($I$(22,1).c$$S,["clear"]);
clear.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['test.Test_Video'].points.clear$();
this.b$['test.Test_Video'].drawLayer.repaint$();
});
})()
), Clazz.new_(P$.Test_Video$11.$init$,[this, null])));
var undo=Clazz.new_($I$(22,1).c$$S,["undo"]);
undo.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].points.size$() > 0) this.b$['test.Test_Video'].points.remove$I(this.b$['test.Test_Video'].points.size$() - 1);
this.b$['test.Test_Video'].drawLayer.repaint$();
});
})()
), Clazz.new_(P$.Test_Video$12.$init$,[this, null])));
var show=Clazz.new_($I$(22,1).c$$S,["show"]);
show.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.showAllProperties.apply(this.b$['test.Test_Video'], []);
$I$(1).cancelVideoFrameCallback(this.b$['test.Test_Video'].jsvideo);
});
})()
), Clazz.new_(P$.Test_Video$13.$init$,[this, null])));
var getRate=Clazz.new_($I$(22,1).c$$S,["rate"]);
getRate.addActionListener$java_awt_event_ActionListener(((P$.Test_Video$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Video$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['test.Test_Video'].rc != null  || this.b$['test.Test_Video'].playing  || this.b$['test.Test_Video'].jsvideo == null  ) return;
this.b$['test.Test_Video'].rc=Clazz.new_($I$(23,1),[this, null]);
this.b$['test.Test_Video'].rc.getRate$I(5);
});
})()
), Clazz.new_(P$.Test_Video$14.$init$,[this, null])));
var controls=Clazz.new_($I$(18,1));
controls.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["click to mark     "]));
controls.add$java_awt_Component(this.cbDiscrete);
controls.add$java_awt_Component(this.cbCapture);
controls.add$java_awt_Component(play);
controls.add$java_awt_Component(pause);
controls.add$java_awt_Component(next);
controls.add$java_awt_Component(reset);
controls.add$java_awt_Component(undo);
controls.add$java_awt_Component(clear);
controls.add$java_awt_Component(show);
controls.add$java_awt_Component(getRate);
return controls;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.allprops=Clazz.array(String, -1, ["audioTracks", "autoplay", "buffered", "controller", "controls", "controlsList", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "disableRemotePlayback", "duration", "ended", "error", "loop", "mediaGroup", "mediaKeys", "mozAudioCaptured", "mozFragmentEnd", "mozFrameBufferLength", "mozSampleRate", "muted", "networkState", "paused", "playbackRate", "played", "preload", "preservesPitch", "readyState", "seekable", "seeking", "sinkId", "src", "srcObject", "textTracks", "videoTracks", "volume", "initialTime", "mozChannels"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Test_Video, "VideoFrame", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JFrame', [['org.opensourcephysics.tools.FileDropHandler','org.opensourcephysics.tools.FileDropHandler.FileImporter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'importData$O$java_awt_Component',  function (data, component) {
if (Clazz.instanceOf(data, "java.util.List")) {
this.b$['test.Test_Video'].loadVideo$java_io_File.apply(this.b$['test.Test_Video'], [(data).get$I(0)]);
return true;
}if (Clazz.instanceOf(data, "java.net.URL")) {
return true;
}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Test_Video, "RateCalc", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.curTime0=0;
this.curTime=0;
this.ds=0.01;
this.tolerance=1.0E-5;
this.frameDur=0;
this.expanding=true;
},1);

C$.$fields$=[['Z',['expanding'],'D',['curTime0','curTime','ds','tolerance','frameDur'],'I',['pt'],'O',['results','double[]','buffer','byte[]','+buffer0','listener','Object[]']]]

Clazz.newMeth(C$, 'getRate$I',  function (n) {
this.results=Clazz.array(Double.TYPE, [n]);
this.pt=0;
this.buffer=null;
this.expanding=true;
this.curTime0=this.curTime=$I$(1).getCurrentTime(this.b$['test.Test_Video'].jsvideo);
this.ds=this.frameDur / 2 + 0.001;
this.frameDur=0;
this.listener=$I$(1).addActionListener(this.b$['test.Test_Video'].jsvideo, this, ["canplaythrough"]);
$I$(1).setCurrentTime(this.b$['test.Test_Video'].jsvideo, this.curTime);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var img=$I$(1).getImage(this.b$['test.Test_Video'].jsvideo, -2147483648);
var b=(img.getRaster$().getDataBuffer$()).getData$();
if (this.buffer == null ) {
this.buffer=Clazz.array(Byte.TYPE, [img.getWidth$() * img.getHeight$() * 4 ]);
}System.arraycopy$O$I$O$I$I(b, 0, this.buffer, 0, b.length);
if (this.buffer0 == null ) {
this.buffer0=Clazz.array(Byte.TYPE, [img.getWidth$() * img.getHeight$() * 4 ]);
System.arraycopy$O$I$O$I$I(this.buffer, 0, this.buffer0, 0, this.buffer.length);
} else {
if ($I$(2).equals$BA$BA(this.buffer, this.buffer0)) {
if (this.expanding) {
this.ds*=1.4;
}} else if (this.ds < 0  || Math.abs(this.ds) >= this.tolerance  ) {
this.expanding=false;
this.ds/=-2;
this.buffer0=this.buffer;
this.buffer=null;
} else {
this.buffer=this.buffer0=null;
this.frameDur=this.curTime - this.curTime0;
this.curTime0=this.curTime;
this.results[this.pt++]=this.frameDur;
if (this.pt < this.results.length) {
this.ds=this.frameDur / 2;
} else {
$I$(1).removeActionListener(this.b$['test.Test_Video'].jsvideo, this.listener);
$I$(3,"showMessageDialog$java_awt_Component$O",[null, "frame Duration is " + $I$(2).toString$DA(this.results)]);
this.b$['test.Test_Video'].rc=null;
return;
}}}this.curTime+=this.ds;
$I$(1).setCurrentTime(this.b$['test.Test_Video'].jsvideo, this.curTime);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
