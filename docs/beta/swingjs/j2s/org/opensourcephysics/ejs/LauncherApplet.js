(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs"),p$1={},I$=[[0,'java.net.URL','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LauncherApplet", null, 'javax.swing.JApplet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._parentFrame=null;
this._model=null;
this._simulation=null;
this._view=null;
},1);

C$.$fields$=[['O',['_parentFrame','javax.swing.JFrame','_model','org.opensourcephysics.ejs.Model','_simulation','org.opensourcephysics.ejs.Simulation','_view','org.opensourcephysics.ejs.View']]]

Clazz.newMeth(C$, ['getParameter$S$S','getParameter'],  function (key, def) {
return ((this.getParameter$S(key) != null ) ? this.getParameter$S(key) : def);
});

Clazz.newMeth(C$, ['_play$','_play'],  function () {
this._simulation.play$();
});

Clazz.newMeth(C$, ['_pause$','_pause'],  function () {
this._simulation.pause$();
});

Clazz.newMeth(C$, ['_step$','_step'],  function () {
this._simulation.step$();
});

Clazz.newMeth(C$, ['_setFPS$I','_setFPS'],  function (_fps) {
this._simulation.setFPS$I(_fps);
});

Clazz.newMeth(C$, ['_setDelay$I','_setDelay'],  function (_delay) {
this._simulation.setDelay$I(_delay);
});

Clazz.newMeth(C$, ['_reset$','_reset'],  function () {
this._simulation.reset$();
});

Clazz.newMeth(C$, ['_initialize$','_initialize'],  function () {
this._simulation.initialize$();
});

Clazz.newMeth(C$, ['_saveState$S','_saveState'],  function (_filename) {
return this._simulation.saveState$S(_filename);
});

Clazz.newMeth(C$, ['_readState$S','_readState'],  function (_filename) {
return this._simulation.readState$S$java_net_URL(_filename, this.getCodeBase$());
});

Clazz.newMeth(C$, ['_setVariables$S$S$S','_setVariables'],  function (_command, _delim, _arrayDelim) {
return this._simulation.setVariables$S$S$S(_command, _delim, _arrayDelim);
});

Clazz.newMeth(C$, ['_setVariables$S','_setVariables'],  function (_command) {
return this._simulation.setVariables$S(_command);
});

Clazz.newMeth(C$, ['_getVariable$S','_getVariable'],  function (_varName) {
return this._simulation.getVariable$S(_varName);
});

Clazz.newMeth(C$, ['_resetView$','_resetView'],  function () {
this._view.reset$();
});

Clazz.newMeth(C$, ['init$','init'],  function () {
var simClass=null;
var windowToCapture=null;
try {
simClass=this.getParameter$S$S("simulation", null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
try {
windowToCapture=this.getParameter$S$S("capture", null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if ((windowToCapture != null ) && (p$1.getParentFrame.apply(this, []) != null ) && (p$1.getParentFrame.apply(this, []) != null )  ) {
this._model=C$.createModel$S$S$java_awt_Frame$java_net_URL(simClass, windowToCapture, p$1.getParentFrame.apply(this, []), this.getCodeBase$());
this._simulation=this._model.getSimulation$();
this._view=this._model.getView$();
p$1.captureWindow$org_opensourcephysics_ejs_View$S.apply(this, [this._model.getView$(), windowToCapture]);
} else {
this._model=C$.createModel$S$S$java_awt_Frame$java_net_URL(simClass, null, null, this.getCodeBase$());
this._simulation=this._model.getSimulation$();
this._view=this._model.getView$();
}});

Clazz.newMeth(C$, ['getParameterInfo$','getParameterInfo'],  function () {
var pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["simulation", "String", "The simulation"]), Clazz.array(String, -1, ["capture", "String", "The name of the component to be captured"])]);
return pinfo;
});

Clazz.newMeth(C$, 'getParentFrame',  function () {
var parent=this.getParent$();
while (parent != null ){
if (Clazz.instanceOf(parent, "java.awt.Frame")) {
return parent;
}parent=parent.getParent$();
}
return null;
}, p$1);

Clazz.newMeth(C$, 'createModel$S$S$java_awt_Frame$java_net_URL',  function (simClass, _ownerName, _ownerFrame, _codebase) {
var aModel=null;
if (_ownerName != null  || _codebase != null  ) {
try {
var c=Clazz.forName(simClass);
var constructors=c.getConstructors$();
for (var i=0; i < constructors.length; i++) {
var parameters=constructors[i].getParameterTypes$();
if ((parameters.length == 3) && parameters[0].isAssignableFrom$Class(Clazz.getClass(String)) && parameters[1].isAssignableFrom$Class(_ownerFrame.getClass$()) && parameters[2].isAssignableFrom$Class(Clazz.getClass($I$(1)))  ) {
aModel=constructors[i].newInstance$OA(Clazz.array(java.lang.Object, -1, [_ownerName, _ownerFrame, _codebase]));
break;
}}
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
aModel=null;
} else {
throw exc;
}
}
}if (aModel == null ) {
try {
var aClass=Clazz.forName(simClass);
aModel=aClass.newInstance$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
return null;
} else {
throw exc;
}
}
}return aModel;
}, 1);

Clazz.newMeth(C$, 'captureWindow$org_opensourcephysics_ejs_View$S',  function (_aView, _aWindow) {
if (_aWindow == null ) {
return;
}var root;
if (this._parentFrame != null ) {
root=this._parentFrame;
} else {
root=this;
}var comp=_aView.getComponent$S(_aWindow);
if (comp == null ) {
return;
}if (Clazz.instanceOf(comp, "org.opensourcephysics.display.DrawingFrame")) {
comp.setVisible$Z(true);
var contentPane=(comp).getContentPane$();
contentPane.setVisible$Z(true);
root.setContentPane$java_awt_Container(contentPane);
var glassPane=(comp).getGlassPane$();
root.setGlassPane$java_awt_Component(glassPane);
glassPane.setVisible$Z(true);
(comp).setKeepHidden$Z(true);
(comp).setDefaultCloseOperation$I(2);
} else if (Clazz.instanceOf(comp, "javax.swing.JDialog")) {
comp.setVisible$Z(true);
var contentPane=(comp).getContentPane$();
contentPane.setVisible$Z(true);
root.setContentPane$java_awt_Container(contentPane);
var glassPane=(comp).getGlassPane$();
root.setGlassPane$java_awt_Component(glassPane);
glassPane.setVisible$Z(true);
(comp).dispose$();
} else {
root.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
root.getContentPane$().add$java_awt_Component$O(comp, "Center");
root.getContentPane$().validate$();
var oldParent=comp.getParent$();
if (oldParent != null ) {
oldParent.validate$();
}}if (this._parentFrame != null ) {
this._parentFrame.pack$();
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
