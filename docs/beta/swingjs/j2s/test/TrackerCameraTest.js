(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javax.swing.JLabel','javax.swing.SwingUtilities','test.TrackerCameraTest','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.JButton','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.TrackerCamera','javax.swing.JPanel','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerCameraTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.status=Clazz.new_($I$(1,1).c$$S,["Press Open Camera to test the camera dialog."]);
},1);

C$.$fields$=[['O',['status','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(2,"invokeLater$Runnable",[(P$.TrackerCameraTest$lambda1$||(P$.TrackerCameraTest$lambda1$=(((P$.TrackerCameraTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerCameraTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () { return (Clazz.new_($I$(3,1)));});
})()
), Clazz.new_(P$.TrackerCameraTest$lambda1.$init$,[this, null])))))]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var frame=Clazz.new_($I$(4,1));
frame.setTitle$S("Tracker Camera Test");
frame.setJMenuBar$javax_swing_JMenuBar(null);
frame.setDefaultCloseOperation$I(2);
var cameraButton=Clazz.new_($I$(5,1).c$$S,["Open Camera"]);
cameraButton.addActionListener$java_awt_event_ActionListener(((P$.TrackerCameraTest$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerCameraTest$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if ($I$(6).isJS) {
Clazz.new_($I$(7,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame,[this.$finals$.frame]);
} else {
this.b$['test.TrackerCameraTest'].status.setText$S.apply(this.b$['test.TrackerCameraTest'].status, ["Run the transpiled app in a browser to use the camera."]);
}});
})()
), Clazz.new_(P$.TrackerCameraTest$lambda2.$init$,[this, {frame:frame}])));
var panel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[10, 10])],$I$(8,1).c$$java_awt_LayoutManager);
panel.add$java_awt_Component$O(cameraButton, "North");
panel.add$java_awt_Component$O(this.status, "Center");
frame.setContentPane$java_awt_Container(panel);
frame.setSize$I$I(520, 160);
$I$(6).setAppClass$O(this);
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, ['importVideoCapture$S$BAA$D','importVideoCapture'],  function (id, data, frameRate) {
var count=data == null  ? 0 : data.length;
this.status.setText$S("Received " + count + " frames at " + new Double(frameRate).toString() + " fps." );
});

Clazz.newMeth(C$, ['importMP4Capture$S$BA','importMP4Capture'],  function (id, data) {
this.status.setText$S("Received MP4: " + (data == null  ? 0 : data.length) + " bytes." );
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
