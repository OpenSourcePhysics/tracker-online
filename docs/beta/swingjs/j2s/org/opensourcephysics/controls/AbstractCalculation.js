(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.numerics.Util',['org.opensourcephysics.controls.AbstractCalculation','.OSPCalculationLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractCalculation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.controls.Calculation');
C$.$classes$=[['OSPCalculationLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decimalFormat=$I$(1).newDecimalFormat$S("0.00E0");
},1);

C$.$fields$=[['O',['mainFrame','org.opensourcephysics.display.OSPFrame','control','org.opensourcephysics.controls.Control','decimalFormat','java.text.DecimalFormat']]]

Clazz.newMeth(C$, 'setControl$org_opensourcephysics_controls_Control',  function (control) {
this.control=control;
this.mainFrame=null;
if (control != null ) {
if (Clazz.instanceOf(control, "org.opensourcephysics.controls.MainFrame")) {
this.mainFrame=(control).getMainFrame$();
}control.setLockValues$Z(true);
this.resetCalculation$();
control.setLockValues$Z(false);
if (Clazz.instanceOf(control, "java.awt.Frame")) {
(control).pack$();
}}});

Clazz.newMeth(C$, ['getMainFrame$','getMainFrame'],  function () {
return this.mainFrame;
});

Clazz.newMeth(C$, ['getMainFrameSize$','getMainFrameSize'],  function () {
var d=this.mainFrame.getSize$();
return Clazz.array(Integer.TYPE, -1, [d.width, d.height]);
});

Clazz.newMeth(C$, 'addChildFrame$javax_swing_JFrame',  function (frame) {
if ((this.mainFrame == null ) || (frame == null ) ) {
return;
}this.mainFrame.addChildFrame$javax_swing_JFrame(frame);
});

Clazz.newMeth(C$, 'getOSPApp$',  function () {
if (Clazz.instanceOf(this.control, "org.opensourcephysics.controls.MainFrame")) {
return (this.control).getOSPApp$();
}return null;
});

Clazz.newMeth(C$, 'clearChildFrames$',  function () {
if (this.mainFrame == null ) {
return;
}this.mainFrame.clearChildFrames$();
});

Clazz.newMeth(C$, 'getChildFrames$',  function () {
return this.mainFrame.getChildFrames$();
});

Clazz.newMeth(C$, 'resetCalculation$',  function () {
this.control.clearMessages$();
this.reset$();
});

Clazz.newMeth(C$, 'reset$',  function () {
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractCalculation, "OSPCalculationLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
(obj).calculate$();
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
