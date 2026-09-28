(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'davidson.qm.WignerISW','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLControlElement','davidson.qm.QMSuperpositionWignerWRApp','davidson.qm.QMWignerControl','org.opensourcephysics.display.GUIUtils','Thread','org.opensourcephysics.controls.AnimationControl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMSuperpositionWignerApp", null, 'davidson.qm.QMSuperpositionApp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wigner=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['wigner','davidson.qm.WignerISW']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.wigner.wignerFrame.setTitle$S("Wigner Function");
}, 1);

Clazz.newMeth(C$, 'setValues$',  function () {
this.control.setValue$S$I("numpts", 48);
this.control.setValue$S$I("gutter points", 24);
this.control.setValue$S$D("psi range", 1.0);
this.control.setValue$S$I("p range", 4);
this.control.setValue$S$D("dt", 0.1);
this.control.setValue$S$O("x min", "-pi");
this.control.setValue$S$O("x max", "pi");
this.control.setValue$S$O("re coef", this.intialRe);
this.control.setValue$S$O("im coef", this.intialIm);
this.control.setValue$S$O("V(x)", "well");
this.control.setValue$S$I("energy scale", 1);
this.control.setValue$S$O("time", "0.00");
this.control.setValue$S$O("time format", "0.00");
this.control.setValue$S$D("shooting tolerance", 1.0E-4);
this.control.setValue$S$O("style", "phase");
this.control.setValue$S$Z("hide frame", false);
this.control.setValue$S$O("psi title", "");
this.control.setValue$S$O("data title", "");
});

Clazz.newMeth(C$, 'initializeAnimation$',  function () {
C$.superclazz.prototype.initializeAnimation$.apply(this, []);
this.wigner.decimalFormat=this.sciFormat;
this.wigner.prange=this.control.getDouble$S("p range");
this.wigner.time=this.time;
this.wigner.initialize$davidson_qm_QMWavefunction$I(this.superposition, this.control.getInt$S("gutter points"));
});

Clazz.newMeth(C$, 'doStep$',  function () {
C$.superclazz.prototype.doStep$.apply(this, []);
if (this.dataPanel != null  && this.showDataPanelTime ) {
this.dataPanel.setMessage$S("t=" + this.sciFormat.format$D(this.time));
}this.wigner.time=this.time;
this.wigner.doStep$davidson_qm_QMWavefunction(this.superposition);
});

Clazz.newMeth(C$, 'switchGUI$',  function () {
this.stopAnimation$();
var runner=((P$.QMSuperpositionWignerApp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionWignerApp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).disableAllDrawing=true;
var controlFrame=(this.b$['davidson.qm.QMSuperpositionWignerApp'].control);
var xml=Clazz.new_([controlFrame.getOSPApp$()],$I$(3,1).c$$O);
var listeners=controlFrame.getWindowListeners$();
var closeOperation=controlFrame.getDefaultCloseOperation$();
controlFrame.setDefaultCloseOperation$I(2);
controlFrame.setKeepHidden$Z(true);
controlFrame.dispose$();
var app=Clazz.new_($I$(4,1));
var c=Clazz.new_($I$(5,1).c$$davidson_qm_QMSuperpositionWignerApp$SA,[app, null]);
c.getMainFrame$().setDefaultCloseOperation$I(closeOperation);
for (var i=0, n=listeners.length; i < n; i++) {
if (listeners[i].getClass$().getName$().equals$O("org.opensourcephysics.tools.Launcher$FrameCloser")) {
c.getMainFrame$().addWindowListener$java_awt_event_WindowListener(listeners[i]);
}}
c.loadXML$org_opensourcephysics_controls_XMLControlElement$Z(xml, true);
app.customize$();
System.gc$();
$I$(2).disableAllDrawing=false;
$I$(6).repaintOSPFrames$();
});
})()
), Clazz.new_(P$.QMSuperpositionWignerApp$1.$init$,[this, null]));
var t=Clazz.new_($I$(7,1).c$$Runnable,[runner]);
t.start$();
});

Clazz.newMeth(C$, 'customize$',  function () {
C$.superclazz.prototype.customize$.apply(this, []);
this.addChildFrame$javax_swing_JFrame(this.wigner.wignerFrame);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var app=Clazz.new_(C$);
$I$(8).createApp$org_opensourcephysics_controls_Animation$SA(app, args);
app.customize$();
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
