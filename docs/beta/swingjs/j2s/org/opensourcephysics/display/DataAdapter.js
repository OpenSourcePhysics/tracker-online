(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataAdapter", null, null, 'org.opensourcephysics.display.Data');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.name="Array Data";
this.ID=this.hashCode$();
},1);

C$.$fields$=[['I',['ID'],'S',['name'],'O',['colNames','String[]','data','double[][]']]]

Clazz.newMeth(C$, 'c$$DAA',  function (array) {
;C$.$init$.apply(this);
this.data=array;
}, 1);

Clazz.newMeth(C$, 'getColumnNames$',  function () {
return this.colNames;
});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
if (names == null ) return;
this.colNames=names.clone$();
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getData2D$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
return null;
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.ID;
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.ID=id;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
