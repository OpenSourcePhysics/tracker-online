(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorChain", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_VectorStep',  function (start) {
Clazz.super_(C$, this);
if (this.isAllowed$org_opensourcephysics_cabrillo_tracker_VectorStep(start)) {
start.chain=this;
C$.superclazz.prototype.add$O.apply(this, [start]);
}}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_VectorStep$org_opensourcephysics_cabrillo_tracker_VectorStep',  function (start, end) {
Clazz.super_(C$, this);
if (this.isAllowed$org_opensourcephysics_cabrillo_tracker_VectorStep(start) && this.isAllowed$org_opensourcephysics_cabrillo_tracker_VectorStep(end) ) {
start.chain=this;
C$.superclazz.prototype.add$O.apply(this, [start]);
this.add$org_opensourcephysics_cabrillo_tracker_VectorStep(end);
}}, 1);

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.get$I(this.size$() - 1);
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.get$I(0);
});

Clazz.newMeth(C$, 'removeEnd$',  function () {
if (this.size$() == 0) return null;
var end=this.getEnd$();
end.chain=null;
end.attach$org_opensourcephysics_media_core_TPoint(null);
C$.superclazz.prototype.remove$I.apply(this, [this.size$() - 1]);
return end;
});

Clazz.newMeth(C$, 'breakAt$org_opensourcephysics_cabrillo_tracker_VectorStep',  function (vector) {
if (vector.chain !== this  || vector === this.getStart$()  ) {
return null;
}if (vector === this.getEnd$() ) {
this.removeEnd$();
return null;
}var list=this.remove$org_opensourcephysics_cabrillo_tracker_VectorStep(vector);
var chain=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_VectorStep,[vector]);
for (var i=1; i < list.size$(); i++) {
chain.add$org_opensourcephysics_cabrillo_tracker_VectorStep(list.get$I(i));
}
return chain;
});

Clazz.newMeth(C$, 'clear$',  function () {
var it=this.iterator$();
while (it.hasNext$()){
var link=it.next$();
link.chain=null;
link.attach$org_opensourcephysics_media_core_TPoint(null);
}
C$.superclazz.prototype.clear$.apply(this, []);
});

Clazz.newMeth(C$, ['add$org_opensourcephysics_cabrillo_tracker_VectorStep','add$O'],  function (vector) {
if (vector.getChain$() != null ) {
return this.add$org_opensourcephysics_cabrillo_tracker_VectorChain(vector.getChain$());
}if (this.isAllowed$org_opensourcephysics_cabrillo_tracker_VectorStep(vector)) {
var end=this.getEnd$();
vector.attach$org_opensourcephysics_media_core_TPoint(end.getVisibleTip$());
vector.chain=this;
C$.superclazz.prototype.add$O.apply(this, [vector]);
return true;
}return false;
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_cabrillo_tracker_VectorChain',  function (chain) {
if (chain === this ) return false;
var vectors=chain.remove$org_opensourcephysics_cabrillo_tracker_VectorStep(chain.getStart$());
this.addAll$java_util_Collection(vectors);
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
var added=false;
var it=c.iterator$();
while (it.hasNext$()){
added=this.add$org_opensourcephysics_cabrillo_tracker_VectorStep(it.next$()) || added ;
}
return added;
});

Clazz.newMeth(C$, ['add$I$org_opensourcephysics_cabrillo_tracker_VectorStep','add$I$O'],  function (index, v) {
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'remove$O',  function (obj) {
return false;
});

Clazz.newMeth(C$, 'removeRange$I$I',  function (from, to) {
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection',  function (c) {
return false;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
return false;
});

Clazz.newMeth(C$, ['set$I$org_opensourcephysics_cabrillo_tracker_VectorStep','set$I$O'],  function (index, obj) {
return null;
});

Clazz.newMeth(C$, 'isAllowed$org_opensourcephysics_cabrillo_tracker_VectorStep',  function (vector) {
if (vector.getChain$() != null ) return false;
if (this.size$() == 0) return true;
var endClass=this.getEnd$().getTrack$().getClass$();
return endClass.equals$O(vector.getTrack$().getClass$());
});

Clazz.newMeth(C$, 'remove$org_opensourcephysics_cabrillo_tracker_VectorStep',  function (vector) {
var list=Clazz.new_($I$(1,1));
var length=this.size$();
for (var i=this.indexOf$O(vector); i < length; i++) {
list.add$I$O(0, this.removeEnd$());
}
return list;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
