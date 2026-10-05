(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'org.opensourcephysics.controls.ParsableTextArea','java.util.LinkedHashMap','java.awt.Font','java.awt.EventQueue','java.util.HashMap','StringBuffer','java.util.StringTokenizer',['org.opensourcephysics.controls.ParsableTextArea','.ParsableTextAreaLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParsableTextArea", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTextArea');
C$.$classes$=[['ParsableTextAreaLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pendingMap=Clazz.new_($I$(2,1));
this.currentMap=Clazz.new_($I$(2,1));
this.lockedMap=Clazz.new_($I$(2,1));
this.locked=false;
},1);

C$.$fields$=[['Z',['locked'],'O',['pendingMap','java.util.HashMap','+currentMap','+lockedMap']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I$I.apply(this,[10, 10]);C$.$init$.apply(this);
this.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Monospaced", 0, 12]));
}, 1);

Clazz.newMeth(C$, 'getValue$S',  function (variable) {
if (this.locked) {
{
var val=this.lockedMap.get$O(variable);
if (val != null ) {
return this.lockedMap.get$O(variable);
}throw Clazz.new_(Clazz.load('org.opensourcephysics.controls.VariableNotFoundException').c$$S,["Variable " + variable + " not found." ]);
}}{
p$1.updateCurrentMap.apply(this, []);
{
this.currentMap.putAll$java_util_Map(this.pendingMap);
}var val=this.currentMap.get$O(variable);
if (val != null ) {
return val;
}}throw Clazz.new_(Clazz.load('org.opensourcephysics.controls.VariableNotFoundException').c$$S,["Variable " + variable + " not found." ]);
});

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
if (this.locked == lock ) {
return;
}this.locked=lock;
if (this.locked) {
{
this.lockedMap.clear$();
{
p$1.updateCurrentMap.apply(this, []);
this.lockedMap.putAll$java_util_Map(this.currentMap);
}{
this.lockedMap.putAll$java_util_Map(this.pendingMap);
}}} else {
this.setValue$S$S(null, null);
}});

Clazz.newMeth(C$, 'setValue$S$S',  function (variable, val) {
var doLater=((P$.ParsableTextArea$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParsableTextArea$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.updateText.apply(this.b$['org.opensourcephysics.controls.ParsableTextArea'], []);
});
})()
), Clazz.new_(P$.ParsableTextArea$1.$init$,[this, null]));
if (variable != null ) {
{
this.pendingMap.put$O$O(variable, val);
}}if (this.locked && (variable != null ) ) {
{
this.lockedMap.put$O$O(variable, val);
}}if (!this.locked) {
$I$(4).invokeLater$Runnable(doLater);
}});

Clazz.newMeth(C$, 'getCurrentMap$',  function () {
{
p$1.updateCurrentMap.apply(this, []);
{
this.currentMap.putAll$java_util_Map(this.pendingMap);
}return Clazz.new_($I$(5,1).c$$java_util_Map,[this.currentMap]);
}});

Clazz.newMeth(C$, 'updateText',  function () {
{
{
if (this.pendingMap.size$() == 0) {
return;
}p$1.updateCurrentMap.apply(this, []);
this.currentMap.putAll$java_util_Map(this.pendingMap);
this.pendingMap.clear$();
}var set=this.currentMap.keySet$();
var it=set.iterator$();
var newText=Clazz.new_([set.size$() * 25],$I$(6,1).c$$I);
while (it.hasNext$()){
var variable=it.next$();
newText.append$S(variable);
newText.append$C("=");
newText.append$CharSequence(this.currentMap.get$O(variable));
newText.append$C("\n");
}
this.setText$S(newText.toString());
}}, p$1);

Clazz.newMeth(C$, 'updateCurrentMap',  function () {
this.currentMap.clear$();
var text=this.getText$();
var st=Clazz.new_($I$(7,1).c$$S$S,[text, "\n"]);
while (st.hasMoreTokens$()){
var aLine=st.nextToken$().trim$();
var index=aLine.indexOf$S("=");
if (index != -1) {
this.currentMap.put$O$O(aLine.subSequence$I$I(0, index), aLine.subSequence$I$I(index + 1, aLine.length$()));
}}
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(8,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParsableTextArea, "ParsableTextAreaLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var map=(obj).getCurrentMap$();
var it=map.keySet$().iterator$();
while (it.hasNext$()){
var variable=it.next$();
control.setValue$S$O(variable, map.get$O(variable));
}
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var pta=obj;
var it=control.getPropertyNamesRaw$().iterator$();
pta.setLockValues$Z(true);
while (it.hasNext$()){
var variable=it.next$();
pta.setValue$S$S(variable, control.getString$S(variable));
}
pta.setLockValues$Z(false);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
