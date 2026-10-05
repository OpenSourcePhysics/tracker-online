(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.numerics.DoubleArray','org.opensourcephysics.display.ComplexDataset','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.numerics.Util','davidson.qm.EigenstateRingSuperposition','davidson.qm.EigenstateWellSuperposition','davidson.qm.EigenstateSHOSuperposition','org.opensourcephysics.numerics.ParsedFunction','davidson.qm.EigenstateShootingSuperposition','davidson.qm.QMSuperpositionLoader','org.opensourcephysics.controls.XMLControlElement','davidson.qm.QMSuperpositionWRApp','davidson.qm.QMSuperpositionStyleControl','org.opensourcephysics.display.GUIUtils','Thread','javax.swing.JMenuItem','org.opensourcephysics.controls.AnimationControl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMSuperpositionApp", null, 'org.opensourcephysics.controls.AbstractAnimation', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.intialRe="{0.707,0.707,0,0,0,0}";
this.intialIm="{0,0,0,0,0,0}";
this.potentialStr="x*x/2";
this.psiPanel=Clazz.new_(["x", "|Psi|", "Psi(x)"],$I$(1,1).c$$S$S$S);
this.psiFrame=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display_DrawingPanel,[this.psiPanel]);
this.recoef=Clazz.new_($I$(3,1).c$$S,[this.intialRe]);
this.imcoef=Clazz.new_($I$(3,1).c$$S,[this.intialIm]);
this.psiDataset=Clazz.new_($I$(4,1));
this.time=0;
this.showDataPanelTime=true;
this.centeredPhase=false;
this.parseError=false;
},1);

C$.$fields$=[['Z',['showDataPanelTime','centeredPhase','parseError'],'D',['time','dt'],'S',['intialRe','intialIm','potentialStr'],'O',['potential','org.opensourcephysics.numerics.Function','dataPanel','org.opensourcephysics.display.PlottingPanel','+psiPanel','psiFrame','org.opensourcephysics.display.DrawingFrame','dataFrame','org.opensourcephysics.display.OSPFrame','recoef','org.opensourcephysics.numerics.DoubleArray','+imcoef','psiDataset','org.opensourcephysics.display.ComplexDataset','superposition','davidson.qm.QMSuperposition']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
$I$(5).setAppClass$O(this);
this.psiFrame.setTitle$S("QM Position Space Wave Function");
this.psiPanel.limitAutoscaleY$D$D(-0.05, 0.05);
this.psiPanel.addDrawable$org_opensourcephysics_display_Drawable(this.psiDataset);
this.psiFrame.setLocation$I$I(0, 0);
this.psiDataset.setXYColumnNames$S$S$S$S("x", "Re[$\\Psi$]", "Im[$\\Psi$]", "$\\Psi$(x,t)");
}, 1);

Clazz.newMeth(C$, ['startStopAnimation$Z','startStopAnimation'],  function (start) {
if (start) this.startAnimation$();
 else this.stopAnimation$();
});

Clazz.newMeth(C$, 'initializeAnimation$',  function () {
C$.superclazz.prototype.initializeAnimation$.apply(this, []);
if (this.control.getBoolean$S("hide frame")) {
this.psiFrame.setKeepHidden$Z(true);
} else {
if (this.psiFrame.getDrawingPanel$() != null ) {
this.psiFrame.setKeepHidden$Z(false);
}}if (this.control.getObject$S("time") == null ) {
this.time=0;
} else {
this.time=this.control.getDouble$S("time");
}if (this.control.getObject$S("psi title") == null ) {
this.psiPanel.setTitle$S("");
} else {
this.psiPanel.setTitle$S(this.control.getString$S("psi title"));
}if (this.control.getObject$S("data title") == null ) {
if (this.dataPanel != null ) this.dataPanel.setTitle$S("");
} else {
if (this.dataPanel != null ) this.dataPanel.setTitle$S(this.control.getString$S("psi title"));
}var str=this.control.getString$S("dt");
var tformat=this.control.getString$S("time format");
this.sciFormat=$I$(6).newDecimalFormat$S(tformat);
var val=$I$(6).evalMath$S(str);
if (Double.isNaN$D(val)) {
this.control.println$S("Error reading dt.");
} else {
this.dt=val;
}var xmin=this.psiPanel.getPreferredXMin$();
str=this.control.getString$S("x min");
val=$I$(6).evalMath$S(str);
if (Double.isNaN$D(val)) {
this.control.println$S("Error reading xmin.");
} else {
xmin=val;
}var xmax=this.psiPanel.getPreferredXMax$();
str=this.control.getString$S("x max");
val=$I$(6).evalMath$S(str);
if (Double.isNaN$D(val)) {
this.control.println$S("Error reading xmax.");
} else {
xmax=val;
}str=this.control.getString$S("energy scale");
val=$I$(6).evalMath$S(str);
var energyScale=1;
if (Double.isNaN$D(val)) {
this.control.println$S("Error reading energy scale.");
} else {
energyScale=val;
}var numpts=this.control.getInt$S("numpts");
var newCoef;
try {
newCoef=Clazz.new_([this.control.getString$S("re coef")],$I$(3,1).c$$S);
this.recoef=newCoef;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.control.println$S("Invalid real coefficient values.");
this.control.setValue$S$O("re coef", this.recoef.getDefault$());
} else {
throw ex;
}
}
try {
newCoef=Clazz.new_([this.control.getString$S("im coef")],$I$(3,1).c$$S);
this.imcoef=newCoef;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.control.println$S("Invalid imaginary coefficient values.");
this.control.setValue$S$O("im coef", this.imcoef.getDefault$());
} else {
throw ex;
}
}
this.parseError=false;
if (this.control.getString$S("V(x)").trim$().equals$O("ring")) {
this.superposition=Clazz.new_($I$(7,1).c$$I$D$D,[numpts, xmin, xmax]);
} else if (this.control.getString$S("V(x)").trim$().equals$O("well")) {
this.superposition=Clazz.new_($I$(8,1).c$$I$D$D,[numpts, xmin, xmax]);
} else if (this.control.getString$S("V(x)").trim$().equals$O("sho")) {
this.superposition=Clazz.new_($I$(9,1).c$$I$D$D,[numpts, xmin, xmax]);
} else {
try {
this.potential=Clazz.new_([this.control.getString$S("V(x)")],$I$(10,1).c$$S);
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
this.parseError=true;
this.control.println$S("Error parsing potential function. Potential set to zero.");
this.potential=$I$(6).constantFunction$D(0);
} else {
throw ex;
}
}
if (this.control.getObject$S("shooting tolerance") != null ) {
var tol=this.control.getDouble$S("shooting tolerance");
this.superposition=Clazz.new_($I$(11,1).c$$org_opensourcephysics_numerics_Function$I$D$D$D$D,[this.potential, numpts, xmin, xmax, tol, tol]);
} else {
this.superposition=Clazz.new_($I$(11,1).c$$org_opensourcephysics_numerics_Function$I$D$D,[this.potential, numpts, xmin, xmax]);
}}if (!this.superposition.setCoef$DA$DA(this.recoef.getArray$(), this.imcoef.getArray$())) {
this.control.println$S("Eigenfunction did not converge.");
}this.superposition.setEnergyScale$D(energyScale);
this.superposition.update$D(this.time);
this.psiDataset.setCentered$Z(true);
var dy=this.control.getDouble$S("psi range");
this.psiPanel.limitAutoscaleY$D$D(-dy, dy);
this.centeredPhase=false;
var style=this.control.getString$S("style").toLowerCase$();
if ((style != null ) && style.equals$O("reim") ) {
this.psiDataset.setMarkerShape$I(1);
this.psiPanel.setYLabel$S("Re(Psi) & Im(Psi)");
} else if ((style != null ) && style.equals$O("ampwithphase") ) {
this.psiDataset.setMarkerShape$I(2);
this.psiDataset.setCentered$Z(false);
this.psiPanel.limitAutoscaleY$D$D(0, dy);
this.psiPanel.setYLabel$S("|Psi|");
} else {
this.psiDataset.setMarkerShape$I(2);
this.psiPanel.setYLabel$S("|Psi|");
this.psiPanel.limitAutoscaleY$D$D(-dy / 2, dy / 2);
this.centeredPhase=true;
}this.superposition.getPsi$org_opensourcephysics_display_ComplexDataset(this.psiDataset);
this.psiPanel.setMessage$S("t=" + this.sciFormat.format$D(this.time));
if (this.dataPanel != null  && this.showDataPanelTime ) {
this.dataPanel.setMessage$S("t=" + this.sciFormat.format$D(this.time));
}});

Clazz.newMeth(C$, 'normCoef$',  function () {
var reCoef=this.superposition.getReCoef$();
var imCoef=this.superposition.getImCoef$();
var norm=0;
for (var i=0, n=reCoef.length; i < n; i++) {
norm+=(reCoef[i] * reCoef[i] + imCoef[i] * imCoef[i]);
}
if (norm == 0 ) {
norm=1;
reCoef[0]=1;
imCoef[0]=0;
return;
}norm=1 / Math.sqrt(norm);
for (var i=0, n=reCoef.length; i < n; i++) {
reCoef[i]*=norm;
imCoef[i]*=norm;
}
});

Clazz.newMeth(C$, 'doStep$',  function () {
this.time+=this.dt;
this.superposition.update$D(this.time);
this.superposition.getPsi$org_opensourcephysics_display_ComplexDataset(this.psiDataset);
this.psiPanel.setMessage$S("t=" + this.sciFormat.format$D(this.time));
if (this.dataPanel != null  && this.showDataPanelTime ) {
this.dataPanel.setMessage$S("t=" + this.sciFormat.format$D(this.time));
}this.psiPanel.render$();
if (this.time >= 3.4028235E38 ) {
this.control.calculationDone$S("Done");
}});

Clazz.newMeth(C$, 'resetAnimation$',  function () {
C$.superclazz.prototype.resetAnimation$.apply(this, []);
this.setValues$();
if (Clazz.instanceOf(this.control, "org.opensourcephysics.ejs.control.EjsControlFrame")) {
(this.control).loadDefaultXML$();
}this.initializeAnimation$();
});

Clazz.newMeth(C$, 'setValues$',  function () {
this.control.setValue$S$I("numpts", 300);
this.control.setValue$S$I("psi range", 1);
this.control.setValue$S$D("dt", 0.1);
this.control.setValue$S$I("x min", -5);
this.control.setValue$S$I("x max", 5);
this.control.setValue$S$O("re coef", this.intialRe);
this.control.setValue$S$O("im coef", this.intialIm);
this.control.setValue$S$O("V(x)", "x*x/2");
this.control.setValue$S$I("energy scale", 1);
this.control.setValue$S$O("time format", "0.00");
this.control.setValue$S$D("shooting tolerance", 1.0E-4);
this.control.setValue$S$O("style", "ampwithphase");
this.centeredPhase=false;
this.control.setValue$S$Z("hide frame", false);
this.control.setValue$S$O("psi title", "Harmonic Oscillator");
this.control.setValue$S$O("data title", "");
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var running=this.isRunning$();
if (running) {
this.stopAnimation$();
}this.initializeAnimation$();
if (running) {
this.startAnimation$();
}});

Clazz.newMeth(C$, 'switchGUI$',  function () {
this.stopAnimation$();
var runner=((P$.QMSuperpositionApp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionApp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(5).disableAllDrawing=true;
var controlFrame=(this.b$['davidson.qm.QMSuperpositionApp'].control);
var xml=Clazz.new_([controlFrame.getOSPApp$()],$I$(13,1).c$$O);
var listeners=controlFrame.getWindowListeners$();
var closeOperation=controlFrame.getDefaultCloseOperation$();
controlFrame.setDefaultCloseOperation$I(2);
controlFrame.setKeepHidden$Z(true);
controlFrame.dispose$();
var app=Clazz.new_($I$(14,1));
var c=Clazz.new_($I$(15,1).c$$davidson_qm_QMSuperpositionWRApp$SA,[app, null]);
c.getMainFrame$().setDefaultCloseOperation$I(closeOperation);
for (var i=0, n=listeners.length; i < n; i++) {
if (listeners[i].getClass$().getName$().equals$O("org.opensourcephysics.tools.Launcher$FrameCloser")) {
c.getMainFrame$().addWindowListener$java_awt_event_WindowListener(listeners[i]);
}}
c.loadXML$org_opensourcephysics_controls_XMLControlElement$Z(xml, true);
app.customize$();
if (c.getString$S("style").toLowerCase$().equals$O("reim")) {
c.getControl$S("checkBox").setProperty$S$S("selected", "false");
} else {
c.getControl$S("checkBox").setProperty$S$S("selected", "true");
}System.gc$();
$I$(5).disableAllDrawing=false;
$I$(16).repaintOSPFrames$();
});
})()
), Clazz.new_(P$.QMSuperpositionApp$1.$init$,[this, null]));
var t=Clazz.new_($I$(17,1).c$$Runnable,[runner]);
t.start$();
});

Clazz.newMeth(C$, 'customize$',  function () {
var f=this.getMainFrame$();
if (f == null  || !f.isDisplayable$() ) return;
var menu=f.getMenu$S("Display");
var item=Clazz.new_($I$(18,1).c$$S,["Switch GUI"]);
item.addActionListener$java_awt_event_ActionListener(((P$.QMSuperpositionApp$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "QMSuperpositionApp$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['davidson.qm.QMSuperpositionApp'].switchGUI$.apply(this.b$['davidson.qm.QMSuperpositionApp'], []);
});
})()
), Clazz.new_(P$.QMSuperpositionApp$2.$init$,[this, null])));
menu.add$javax_swing_JMenuItem(item);
this.addChildFrame$javax_swing_JFrame(this.psiFrame);
this.addChildFrame$javax_swing_JFrame(this.dataFrame);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var app=Clazz.new_(C$);
$I$(19).createApp$org_opensourcephysics_controls_Animation$SA(app, args);
app.customize$();
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
