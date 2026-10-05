(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLControlElement','davidson.qm.QMSuperpositionWignerApp','org.opensourcephysics.controls.AnimationControl','org.opensourcephysics.display.GUIUtils','Thread','javax.swing.JMenuItem','davidson.qm.QMWignerControl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMSuperpositionWignerWRApp", null, 'davidson.qm.QMSuperpositionWignerApp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['frame','java.awt.Container']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.showDataPanelTime=false;
}, 1);

Clazz.newMeth(C$, 'switchGUI$',  function () {
this.stopAnimation$();
var runner=((P$.QMSuperpositionWignerWRApp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionWignerWRApp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(1).disableAllDrawing=true;
var ejsFrame=(this.b$['davidson.qm.QMSuperpositionWignerWRApp'].control);
this.b$['davidson.qm.QMSuperpositionWignerWRApp'].control.setValue$S$I("time", 0);
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
app.wigner.wignerFrame.setVisible$Z(true);
$I$(5).repaintOSPFrames$();
});
})()
), Clazz.new_(P$.QMSuperpositionWignerWRApp$1.$init$,[this, null]));
var t=Clazz.new_($I$(6,1).c$$Runnable,[runner]);
t.start$();
});

Clazz.newMeth(C$, 'customize$',  function () {
var c=this.control;
var menu=c.getMainFrame$().getMenu$S("Display");
var item=Clazz.new_($I$(7,1).c$$S,["Switch GUI"]);
item.addActionListener$java_awt_event_ActionListener(((P$.QMSuperpositionWignerWRApp$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionWignerWRApp$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['davidson.qm.QMSuperpositionWignerWRApp'].switchGUI$.apply(this.b$['davidson.qm.QMSuperpositionWignerWRApp'], []);
});
})()
), Clazz.new_(P$.QMSuperpositionWignerWRApp$2.$init$,[this, null])));
menu.add$javax_swing_JMenuItem(item);
c.addChildFrame$javax_swing_JFrame(this.dataFrame);
c.addChildFrame$javax_swing_JFrame(this.psiFrame);
var jm=this.wigner.wignerFrame.getMenu$S("Views");
c.getMainFrame$().getJMenuBar$().add$javax_swing_JMenu(jm);
c.getMainFrame$().setTitle$S("Wigner Function");
this.getMainFrame$().doLayout$();
this.getMainFrame$().setSize$I$I(400, 500);
});

Clazz.newMeth(C$, 'setTime$',  function () {
this.time=this.control.getDouble$S("time");
this.superposition.update$D(this.time);
this.superposition.getPsi$org_opensourcephysics_display_ComplexDataset(this.psiDataset);
this.dataPanel.render$();
this.wigner.time=this.time;
this.wigner.doStep$davidson_qm_QMWavefunction(this.superposition);
$I$(5).repaintOSPFrames$();
});

Clazz.newMeth(C$, 'doStep$',  function () {
C$.superclazz.prototype.doStep$.apply(this, []);
this.control.setValue$S$D("time", this.time);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var val=1;
if (args == null  || args.length == 0 ) {
switch (val) {
case 1:
args=Clazz.array(String, -1, ["wigner/isw_wigner_p0_10pi.xml"]);
break;
case 2:
args=Clazz.array(String, -1, ["wigner/sho_wigner_dav.xml"]);
break;
case 3:
args=Clazz.array(String, -1, ["wigner/isw_wigner_5_dav.xml"]);
break;
}
}$I$(1).disableAllDrawing=true;
var app=Clazz.new_(C$);
var c=Clazz.new_($I$(8,1).c$$davidson_qm_QMSuperpositionWignerApp$SA,[app, args]);
C$.frame=c.cont;
app.customize$();
if (args == null  || args.length == 0 ) {
c.loadXML$S("/davidson/qm/wigner_default.xml");
}$I$(1).disableAllDrawing=false;
$I$(5).repaintOSPFrames$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.frame=null;
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
