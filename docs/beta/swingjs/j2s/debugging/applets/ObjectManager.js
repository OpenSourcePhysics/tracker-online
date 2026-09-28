(function(){var P$=Clazz.newPackage("debugging.applets"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ObjectManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myObjects=Clazz.new_($I$(1,1));
this.myViews=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['myObjects','java.util.Map','+myViews']]]

Clazz.newMeth(C$, 'addObject$S$O',  function (key, obj) {
this.myObjects.put$O$O(key, obj);
});

Clazz.newMeth(C$, 'getObject$S',  function (key) {
var obj=this.myObjects.get$O(key);
if (obj == null ) obj=this.myViews.get$O(key);
return obj;
});

Clazz.newMeth(C$, 'addView$S$java_awt_Container',  function (key, view) {
this.myViews.put$O$O(key, view);
});

Clazz.newMeth(C$, 'clearAll$',  function () {
this.myObjects.clear$();
this.myViews.clear$();
});

Clazz.newMeth(C$, 'clearObjects$',  function () {
this.myObjects.clear$();
});

Clazz.newMeth(C$, 'clearViews$',  function () {
this.myViews.clear$();
});

Clazz.newMeth(C$, 'containsView$java_awt_Container',  function (view) {
return this.myViews.containsValue$O(view);
});

Clazz.newMeth(C$, 'getView$S',  function (key) {
return this.myViews.get$O(key);
});

Clazz.newMeth(C$, 'getViews$',  function () {
return this.myViews.values$();
});

Clazz.newMeth(C$, 'getObjects$Class',  function (c) {
var map=Clazz.new_($I$(1,1).c$$java_util_Map,[this.myObjects]);
var it=map.values$().iterator$();
while (it.hasNext$()){
var obj=it.next$();
if (!c.isInstance$O(obj)) {
it.remove$();
}}
return map.values$();
});

Clazz.newMeth(C$, 'getObjects$',  function () {
return this.myObjects.values$();
});

Clazz.newMeth(C$, 'removeObjects$Class',  function (c) {
var map=Clazz.new_($I$(1,1).c$$java_util_Map,[this.myObjects]);
var it=map.values$().iterator$();
while (it.hasNext$()){
var obj=it.next$();
if (!c.isInstance$O(obj)) {
it.remove$();
}}
});

Clazz.newMeth(C$, 'removeObject$O',  function (obj) {
this.myObjects.remove$O(obj);
});

Clazz.newMeth(C$, 'printObjectsAndViews$',  function () {
var it=this.myObjects.keySet$().iterator$();
System.out.println$S("Objects");
while (it.hasNext$()){
System.out.println$S(it.next$().toString());
}
it=this.myViews.keySet$().iterator$();
System.out.println$S("Views");
while (it.hasNext$()){
System.out.println$S(it.next$().toString());
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
