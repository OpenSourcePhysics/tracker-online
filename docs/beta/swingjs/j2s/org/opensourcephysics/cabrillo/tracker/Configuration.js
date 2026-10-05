(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.Configuration','java.util.TreeSet','java.util.Collection',['org.opensourcephysics.cabrillo.tracker.Configuration','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Configuration", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['enabled','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set',  function (enabled) {
;C$.$init$.apply(this);
this.enabled=enabled;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
;C$.$init$.apply(this);
this.enabled=trackerPanel.getEnabled$();
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Configuration, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var config=obj;
control.setValue$S$O("enabled", config.enabled);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var config=obj;
var set=control.getObject$S("enabled");
if (set != null ) {
var enabled=Clazz.new_($I$(2,1));
for (var next, $next = Clazz.getClass($I$(3),['add$O','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$OA','toArray$java_util_function_IntFunction']).cast$O(set).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
enabled.add$O(next);
}
config.enabled=enabled;
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
