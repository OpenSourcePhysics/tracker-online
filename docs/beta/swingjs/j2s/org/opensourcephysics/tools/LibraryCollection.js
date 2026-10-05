(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.tools.LibraryResource','org.opensourcephysics.tools.LibraryCollection','java.util.ArrayList',['org.opensourcephysics.tools.LibraryCollection','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryCollection", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.LibraryResource');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resources=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['resources','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return "Collection";
});

Clazz.newMeth(C$, 'setType$S',  function (type) {
return false;
});

Clazz.newMeth(C$, 'setTarget$S',  function (path) {
path=(path == null  ? "" : path.trim$());
if (path.equals$O(this.target)) return false;
this.target=path;
return true;
});

Clazz.newMeth(C$, 'addResource$org_opensourcephysics_tools_LibraryResource',  function (resource) {
if (resource == null ) return;
this.resources.add$O(resource);
resource.parent=this;
});

Clazz.newMeth(C$, 'insertResource$org_opensourcephysics_tools_LibraryResource$I',  function (resource, index) {
if (!this.resources.contains$O(resource)) {
this.resources.add$I$O(index, resource);
resource.parent=this;
return true;
}return false;
});

Clazz.newMeth(C$, 'removeResource$org_opensourcephysics_tools_LibraryResource',  function (resource) {
this.resources.remove$O(resource);
});

Clazz.newMeth(C$, 'getResources$',  function () {
return this.resources.toArray$OA(Clazz.array($I$(2), [this.resources.size$()]));
});

Clazz.newMeth(C$, 'clearResources$',  function () {
this.resources.clear$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryCollection, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var collection=obj;
if (!collection.resources.isEmpty$()) {
control.setValue$S$O("resources", collection.getResources$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var name=control.getString$S("name");
return Clazz.new_($I$(3,1).c$$S,[name]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var collection=obj;
collection.resources.clear$();
var resources=control.getObject$S("resources");
if (resources != null ) {
for (var next, $next = 0, $$next = resources; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
collection.addResource$org_opensourcephysics_tools_LibraryResource(next);
}
} else {
var target=control.getString$S("target");
collection.setTarget$S(target);
}return collection;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
