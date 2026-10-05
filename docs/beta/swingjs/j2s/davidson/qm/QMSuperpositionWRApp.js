(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLControlElement','davidson.qm.QMSuperpositionApp','org.opensourcephysics.controls.AnimationControl','org.opensourcephysics.display.GUIUtils','Thread','javax.swing.JMenuItem','davidson.qm.QMSuperpositionStyleControl','javax.swing.JPanel','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMSuperpositionWRApp", null, 'davidson.qm.QMSuperpositionApp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'resetAnimation$',  function () {
C$.superclazz.prototype.resetAnimation$.apply(this, []);
if (Clazz.instanceOf(this.control, "org.opensourcephysics.ejs.control.EjsControlFrame")) {
(this.control).loadDefaultXML$();
}this.initializeAnimation$();
if (!(Clazz.instanceOf(this.control, "org.opensourcephysics.ejs.control.EjsControlFrame"))) return;
if (this.control.getString$S("style").toLowerCase$().equals$O("reim")) {
(this.control).getControl$S("checkBox").setProperty$S$S("selected", "false");
} else {
(this.control).getControl$S("checkBox").setProperty$S$S("selected", "true");
}});

Clazz.newMeth(C$, 'switchGUI$',  function () {
this.stopAnimation$();
var runner=((P$.QMSuperpositionWRApp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionWRApp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(1).disableAllDrawing=true;
var ejsFrame=(this.b$['davidson.qm.QMSuperpositionWRApp'].control);
var xml=Clazz.new_([ejsFrame.getOSPApp$()],$I$(2,1).c$$O);
var listeners=ejsFrame.getMainFrame$().getWindowListeners$();
var closeOperation=ejsFrame.getMainFrame$().getDefaultCloseOperation$();
ejsFrame.getMainFrame$().setDefaultCloseOperation$I(2);
ejsFrame.getMainFrame$().setKeepHidden$Z(true);
ejsFrame.getMainFrame$().dispose$();
var app=Clazz.new_($I$(3,1));
var c=$I$(4).createApp$org_opensourcephysics_controls_Animation(app);
c.setDefaultCloseOperation$I(closeOperation);
for (var i=0, n=listeners.length; i < n; i++) {
if (listeners[i].getClass$().getName$().equals$O("org.opensourcephysics.tools.Launcher$FrameCloser")) {
c.addWindowListener$java_awt_event_WindowListener(listeners[i]);
}}
c.loadXML$org_opensourcephysics_controls_XMLControlElement$Z(xml, true);
app.customize$();
System.gc$();
$I$(1).disableAllDrawing=false;
$I$(5).repaintOSPFrames$();
});
})()
), Clazz.new_(P$.QMSuperpositionWRApp$1.$init$,[this, null]));
var t=Clazz.new_($I$(6,1).c$$Runnable,[runner]);
t.start$();
});

Clazz.newMeth(C$, 'customize$',  function () {
var c=this.control;
var menu=c.getMainFrame$().getMenu$S("Display");
var item=Clazz.new_($I$(7,1).c$$S,["Switch GUI"]);
menu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.QMSuperpositionWRApp$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionWRApp$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['davidson.qm.QMSuperpositionWRApp'].switchGUI$.apply(this.b$['davidson.qm.QMSuperpositionWRApp'], []);
});
})()
), Clazz.new_(P$.QMSuperpositionWRApp$2.$init$,[this, null])));
});

Clazz.newMeth(C$, 'changeOn$',  function () {
var dy=this.control.getDouble$S("psi range");
this.psiDataset.setCentered$Z(this.centeredPhase);
if (this.centeredPhase) {
this.psiPanel.limitAutoscaleY$D$D(-dy / 2, dy / 2);
this.control.setValue$S$O("style", "phase");
} else {
this.psiPanel.limitAutoscaleY$D$D(0, dy);
this.control.setValue$S$O("style", "ampwithphase");
}this.psiDataset.setMarkerShape$I(2);
this.psiPanel.setYLabel$S("|Psi|");
this.psiPanel.repaint$();
});

Clazz.newMeth(C$, 'changeOff$',  function () {
this.psiDataset.setCentered$Z(true);
this.psiDataset.setMarkerShape$I(1);
this.control.setValue$S$O("style", "reim");
this.psiPanel.setYLabel$S("Re(Psi) & Im(Psi)");
var dy=this.control.getDouble$S("psi range");
this.psiPanel.limitAutoscaleY$D$D(-dy, dy);
this.psiPanel.repaint$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var val=1;
if (args.length == 0) {
switch (val) {
case 1:
args=Clazz.array(String, -1, ["wigner/isw_wigner_p0_10pi_dav.xml"]);
break;
case 2:
args=Clazz.array(String, -1, ["wigner/sho_wigner_dav.xml"]);
break;
case 3:
args=Clazz.array(String, -1, ["wigner/isw_wigner_5_dav.xml"]);
break;
case 4:
args=Clazz.array(String, -1, ["isw_wigner_p0_10pi.xml"]);
break;
}
}var app=Clazz.new_(C$);
Clazz.new_($I$(8,1).c$$davidson_qm_QMSuperpositionWRApp$SA,[app, args]);
app.customize$();
}, 1);

Clazz.newMeth(C$, 'getModelPane$SA$javax_swing_JFrame',  function (args, parent) {
var model=Clazz.new_(C$);
var frame=model.getMainFrame$();
var pane=frame.getContentPane$();
frame.setDefaultCloseOperation$I(2);
frame.setContentPane$java_awt_Container(Clazz.new_($I$(9,1)));
frame.setVisible$Z(false);
pane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[300, 300]));
return pane;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
