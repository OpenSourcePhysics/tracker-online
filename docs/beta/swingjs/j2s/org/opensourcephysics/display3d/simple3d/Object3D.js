(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Object3D", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Comparator3D',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.distance=NaN;
},1);

C$.$fields$=[['D',['distance'],'I',['index'],'O',['element','org.opensourcephysics.display3d.simple3d.Element']]]

Clazz.newMeth(C$, 'getElement$',  function () {
return this.element;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'setIndex$I',  function (_index) {
this.index=_index;
});

Clazz.newMeth(C$, 'setDistance$D',  function (aDistance) {
this.distance=aDistance;
});

Clazz.newMeth(C$, 'getDistance$',  function () {
return this.distance;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_simple3d_Element$I',  function (_element, _index) {
;C$.$init$.apply(this);
this.element=_element;
this.index=_index;
this.distance=NaN;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Object3D, "Comparator3D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_opensourcephysics_display3d_simple3d_Object3D$org_opensourcephysics_display3d_simple3d_Object3D','compare$O$O'],  function (o1, o2) {
if (o1.distance > o2.distance ) {
return -1;
} else if (o1.distance < o2.distance ) {
return 1;
} else {
return 0;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
