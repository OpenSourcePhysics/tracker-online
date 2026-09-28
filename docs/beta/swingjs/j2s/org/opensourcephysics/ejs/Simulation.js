(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs"),p$1={},I$=[[0,'java.util.Hashtable','Thread','org.opensourcephysics.display.OSPRuntime',['javajs.async.SwingJSUtils','.StateHelper'],'java.lang.reflect.Array','java.util.StringTokenizer','java.io.ByteArrayOutputStream','java.io.FileOutputStream','java.io.BufferedOutputStream','java.io.ObjectOutputStream','java.io.ByteArrayInputStream','org.opensourcephysics.tools.ResourceLoader','java.net.URL','java.io.FileInputStream','java.io.BufferedInputStream','java.io.ObjectInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Simulation", null, null, ['Runnable', ['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.model=null;
this.view=null;
this.thread=null;
this.autoplay=false;
this.isPlaying=false;
this.delay=0;
this.codebase=null;
this.delayJS=(delay ||this.delay);
},1);

C$.$fields$=[['Z',['autoplay','isPlaying'],'I',['delay','delayJS'],'O',['model','org.opensourcephysics.ejs.Model','view','org.opensourcephysics.ejs.View','thread','Thread','codebase','java.net.URL','stateHelper','javajs.async.SwingJSUtils.StateHelper']]
,['O',['strClass','Class','memory','java.util.Hashtable']]]

Clazz.newMeth(C$, 'errorMessage$S',  function (_text) {
System.err.println$S(this.getClass$().getName$() + ": " + _text );
}, p$1);

Clazz.newMeth(C$, 'errorMessage$Exception',  function (_exc) {
System.err.println$S(this.getClass$().getName$() + ": Exception caught! Text follows:");
_exc.printStackTrace$java_io_PrintStream(System.err);
}, p$1);

Clazz.newMeth(C$, 'getModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'setModel$org_opensourcephysics_ejs_Model',  function (_aModel) {
this.model=_aModel;
});

Clazz.newMeth(C$, 'getView$',  function () {
return this.view;
});

Clazz.newMeth(C$, 'setView$org_opensourcephysics_ejs_View',  function (_aView) {
this.view=_aView;
});

Clazz.newMeth(C$, 'setCodebase$java_net_URL',  function (_codebase) {
this.codebase=_codebase;
});

Clazz.newMeth(C$, 'getCodebase$',  function () {
return this.codebase;
});

Clazz.newMeth(C$, 'play$',  function () {
if (this.thread != null ) {
return;
}this.thread=Clazz.new_($I$(2,1).c$$Runnable,[this]);
this.thread.setPriority$I(1);
this.thread.start$();
this.isPlaying=true;
});

Clazz.newMeth(C$, 'pause$',  function () {
this.thread=null;
this.isPlaying=false;
if ($I$(3).isJS) {
if (this.stateHelper != null ) this.stateHelper.setState$I(2);
return;
}});

Clazz.newMeth(C$, 'stateLoop$',  function () {
while (this.thread != null  && !this.thread.isInterrupted$()  && this.stateHelper.isAlive$() ){
switch (this.stateHelper.getState$()) {
default:
case 0:
this.stateHelper.setState$I(1);
this.stateHelper.sleep$I(this.delayJS);
return true;
case 1:
this.step$();
this.stateHelper.sleep$I(this.delayJS);
return true;
case 2:
return false;
}
}
return false;
});

Clazz.newMeth(C$, 'run$',  function () {
this.stateHelper=Clazz.new_($I$(4,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.stateHelper.setState$I(0);
this.stateHelper.sleep$I(0);
});

Clazz.newMeth(C$, 'setFPS$I',  function (_fps) {
if (_fps <= 1) {
this.delay=1000;
} else if (_fps >= 25) {
this.delay=0;
} else {
this.delay=((1000.0 / _fps)|0);
}});

Clazz.newMeth(C$, 'setDelay$I',  function (_aDelay) {
if (_aDelay < 0) {
this.delay=0;
} else {
this.delay=_aDelay;
}});

Clazz.newMeth(C$, 'setAutoplay$Z',  function (_play) {
this.autoplay=_play;
});

Clazz.newMeth(C$, 'isPlaying$',  function () {
return this.isPlaying;
});

Clazz.newMeth(C$, 'isPaused$',  function () {
return !this.isPlaying;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.pause$();
if (this.model != null ) {
this.model.reset$();
this.model.initialize$();
this.model.update$();
}if (this.view != null ) {
this.view.reset$();
this.view.initialize$();
this.view.update$();
}System.gc$();
if (this.autoplay) {
this.play$();
}});

Clazz.newMeth(C$, 'initialize$',  function () {
if (this.view != null ) {
this.view.read$();
}if (this.model != null ) {
this.model.initialize$();
this.model.update$();
}if (this.view != null ) {
this.view.initialize$();
this.view.update$();
}});

Clazz.newMeth(C$, 'apply$',  function () {
if (this.view != null ) {
this.view.read$();
}this.update$();
});

Clazz.newMeth(C$, 'applyAll$',  function () {
this.view.read$();
this.update$();
});

Clazz.newMeth(C$, 'apply$S',  function (_variable) {
if (this.view != null ) {
this.view.read$S(_variable);
}});

Clazz.newMeth(C$, 'update$',  function () {
if (this.model != null ) {
this.model.update$();
}if (this.view != null ) {
this.view.update$();
}});

Clazz.newMeth(C$, 'step$',  function () {
this.model.step$();
this.update$();
});

Clazz.newMeth(C$, 'updateAfterModelAction$',  function () {
this.update$();
});

Clazz.newMeth(C$, 'getVariable$S',  function (_name) {
return this.getVariable$S$S(_name, ",");
});

Clazz.newMeth(C$, 'getVariable$S$S',  function (_name, _sep) {
if (this.model == null ) {
return null;
}try {
var field=this.model.getClass$().getField$S(_name);
if (field.getType$().isArray$()) {
var txt="";
var array=field.get$O(this.model);
var l=$I$(5).getLength$O(array);
for (var i=0; i < l; i++) {
if (i > 0) {
txt+=_sep + $I$(5).get$O$I(array, i).toString();
} else {
txt+=$I$(5).get$O$I(array, i).toString();
}}
return txt;
}return field.get$O(this.model).toString();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
p$1.errorMessage$Exception.apply(this, [exc]);
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'setVariable$S$S',  function (_name, _value) {
return this.setVariable$S$S$S(_name, _value, ",");
});

Clazz.newMeth(C$, 'setVariable$S$S$S',  function (_variable, _value, _sep) {
if (this.model == null ) {
return false;
}try {
var field=this.model.getClass$().getField$S(_variable);
if (field.getType$().isArray$()) {
var result=true;
var array=field.get$O(this.model);
var i=0;
var l=$I$(5).getLength$O(array);
var type=field.getType$().getComponentType$();
var line=Clazz.new_($I$(6,1).c$$S$S,[_value, _sep]);
if (l < line.countTokens$()) {
p$1.errorMessage$S.apply(this, ["Warning: there are less elements in the array than values provided!"]);
} else if (l > line.countTokens$()) {
p$1.errorMessage$S.apply(this, ["Warning: there are more elements in the array than values provided!"]);
}while (line.hasMoreTokens$() && (i < l) ){
var token=line.nextToken$();
if (type.equals$O(Double.TYPE)) {
$I$(5,"setDouble$O$I$D",[array, i, Double.parseDouble$S(token)]);
} else if (type.equals$O(Float.TYPE)) {
$I$(5,"setFloat$O$I$F",[array, i, Float.parseFloat$S(token)]);
} else if (type.equals$O(Byte.TYPE)) {
$I$(5,"setByte$O$I$B",[array, i, Byte.parseByte$S(token)]);
} else if (type.equals$O(Short.TYPE)) {
$I$(5,"setShort$O$I$H",[array, i, Short.parseShort$S(token)]);
} else if (type.equals$O(Integer.TYPE)) {
$I$(5,"setInt$O$I$I",[array, i, Integer.parseInt$S(token)]);
} else if (type.equals$O(Long.TYPE)) {
$I$(5,"setLong$O$I$J",[array, i, Long.parseLong$S(token)]);
} else if (type.equals$O(Boolean.TYPE)) {
if (token.trim$().toLowerCase$().equals$O("true")) {
$I$(5).setBoolean$O$I$Z(array, i, true);
} else {
$I$(5).setBoolean$O$I$Z(array, i, false);
}} else if (type.equals$O(Character.TYPE)) {
$I$(5,"setChar$O$I$C",[array, i, token.charAt$I(0)]);
} else if (type.equals$O(C$.strClass)) {
$I$(5).set$O$I$O(array, i, token);
} else {
result=false;
}++i;
}
return result;
}var type=field.getType$();
if (type.equals$O(Double.TYPE)) {
field.setDouble$O$D(this.model, Double.parseDouble$S(_value));
} else if (type.equals$O(Float.TYPE)) {
field.setFloat$O$F(this.model, Float.parseFloat$S(_value));
} else if (type.equals$O(Byte.TYPE)) {
field.setByte$O$B(this.model, Byte.parseByte$S(_value));
} else if (type.equals$O(Short.TYPE)) {
field.setShort$O$H(this.model, Short.parseShort$S(_value));
} else if (type.equals$O(Integer.TYPE)) {
field.setInt$O$I(this.model, Integer.parseInt$S(_value));
} else if (type.equals$O(Long.TYPE)) {
field.setLong$O$J(this.model, Long.parseLong$S(_value));
} else if (type.equals$O(Boolean.TYPE)) {
if (_value.trim$().toLowerCase$().equals$O("true")) {
field.setBoolean$O$Z(this.model, true);
} else {
field.setBoolean$O$Z(this.model, false);
}} else if (type.equals$O(Character.TYPE)) {
field.setChar$O$C(this.model, _value.charAt$I(0));
} else if (type.equals$O(C$.strClass)) {
field.set$O$O(this.model, _value);
} else {
return false;
}return true;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
p$1.errorMessage$Exception.apply(this, [exc]);
return false;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'setVariables$S',  function (_valueList) {
return this.setVariables$S$S$S(_valueList, ";", ",");
});

Clazz.newMeth(C$, 'setVariables$S$S$S',  function (_valueList, _sep, _arraySep) {
var result=true;
var name="";
var value="";
var line=Clazz.new_($I$(6,1).c$$S$S,[_valueList, _sep]);
while (line.hasMoreTokens$()){
var token=line.nextToken$();
var index=token.indexOf$I("=");
if (index < 0) {
result=false;
continue;
}name=token.substring$I$I(0, index).trim$();
value=token.substring$I(index + 1).trim$();
var partial=this.setVariable$S$S$S(name, value, _arraySep);
if (partial == false ) {
result=false;
}}
this.update$();
return result;
});

Clazz.newMeth(C$, 'saveState$S',  function (_filename) {
if (this.model == null ) {
return false;
}try {
var out;
if (_filename.startsWith$S("ejs:")) {
out=Clazz.new_($I$(7,1));
} else {
out=Clazz.new_($I$(8,1).c$$S,[_filename]);
}var bout=Clazz.new_($I$(9,1).c$$java_io_OutputStream,[out]);
var dout=Clazz.new_($I$(10,1).c$$java_io_OutputStream,[bout]);
var fields=this.model.getClass$().getFields$();
for (var i=0; i < fields.length; i++) {
if (Clazz.instanceOf(fields[i].get$O(this.model), "java.io.Serializable")) {
dout.writeObject$O(fields[i].get$O(this.model));
}}
dout.close$();
if (_filename.startsWith$S("ejs:")) {
C$.memory.put$O$O(_filename, (out).toByteArray$());
}return true;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"Exception")){
p$1.errorMessage$S.apply(this, ["Error when trying to save" + _filename]);
ioe.printStackTrace$java_io_PrintStream(System.err);
return false;
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'readState$S',  function (_filename) {
return this.readState$S$java_net_URL(_filename, null);
});

Clazz.newMeth(C$, 'readState$S$java_net_URL',  function (_filename, _codebase) {
if (this.model == null ) {
return false;
}try {
var $in;
if (_filename.startsWith$S("ejs:")) {
$in=Clazz.new_([C$.memory.get$O(_filename)],$I$(11,1).c$$BA);
} else if (_filename.startsWith$S("url:")) {
var url=_filename.substring$I(4);
if ((_codebase == null ) || $I$(12).isHTTP$S(url) ) {
} else {
url=_codebase + url;
}$in=(Clazz.new_($I$(13,1).c$$S,[url])).openStream$();
} else {
$in=Clazz.new_($I$(14,1).c$$S,[_filename]);
}var bin=Clazz.new_($I$(15,1).c$$java_io_InputStream,[$in]);
var din=Clazz.new_($I$(16,1).c$$java_io_InputStream,[bin]);
var fields=this.model.getClass$().getFields$();
for (var i=0; i < fields.length; i++) {
if (Clazz.instanceOf(fields[i].get$O(this.model), "java.io.Serializable")) {
fields[i].set$O$O(this.model, din.readObject$());
}}
din.close$();
if (this.view != null ) {
this.view.initialize$();
}this.update$();
return true;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"Exception")){
p$1.errorMessage$S.apply(this, ["Error when trying to read " + _filename]);
ioe.printStackTrace$java_io_PrintStream(System.err);
return false;
} else {
throw ioe;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.strClass="".getClass$();
C$.memory=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
