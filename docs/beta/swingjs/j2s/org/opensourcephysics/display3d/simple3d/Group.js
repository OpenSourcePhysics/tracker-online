(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.Group','java.util.ArrayList','org.opensourcephysics.display3d.simple3d.Object3D','java.awt.Color','org.opensourcephysics.display.DisplayColors',['org.opensourcephysics.display3d.simple3d.Group','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Group", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.Group');
C$.$classes$=[['Loader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementList=Clazz.new_($I$(2,1));
this.list3D=Clazz.new_($I$(2,1));
this.minimalObjects=Clazz.array($I$(3), [1]);
this.datasetID=this.hashCode$();
},1);

C$.$fields$=[['I',['datasetID'],'O',['elementList','java.util.ArrayList','+list3D','minimalObjects','org.opensourcephysics.display3d.simple3d.Object3D[]']]]

Clazz.newMeth(C$, 'addElement$org_opensourcephysics_display3d_core_Element',  function (element) {
if (!(Clazz.instanceOf(element, "org.opensourcephysics.display3d.simple3d.Element"))) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Can\'t add element to group (incorrect implementation)"]);
}if (!this.elementList.contains$O(element)) {
this.elementList.add$O(element);
}(element).setGroup$org_opensourcephysics_display3d_simple3d_Group(this);
});

Clazz.newMeth(C$, 'addElements$java_util_Collection',  function (elements) {
if (elements != null ) {
var it=elements.iterator$();
while (it.hasNext$()){
var obj=it.next$();
if (Clazz.instanceOf(obj, "org.opensourcephysics.display3d.simple3d.Element")) {
this.addElement$org_opensourcephysics_display3d_core_Element(obj);
}}
}});

Clazz.newMeth(C$, 'removeElement$org_opensourcephysics_display3d_core_Element',  function (element) {
this.elementList.remove$O(element);
});

Clazz.newMeth(C$, 'removeAllElements$',  function () {
this.elementList.clear$();
});

Clazz.newMeth(C$, 'getElements$',  function () {
return Clazz.new_($I$(2,1).c$$java_util_Collection,[this.elementList]);
});

Clazz.newMeth(C$, 'getElement$I',  function (index) {
try {
return this.elementList.get$I(index);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IndexOutOfBoundsException")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$()) {
return null;
}this.list3D.clear$();
for (var it=this.elementList.iterator$(); it.hasNext$(); ) {
var objects=(it.next$()).getObjects3D$();
if (objects != null ) {
for (var i=0, n=objects.length; i < n; i++) {
this.list3D.add$O(objects[i]);
}
}}
this.setElementChanged$Z(false);
if (this.list3D.size$() == 0) {
return null;
}return this.list3D.toArray$OA(this.minimalObjects);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
System.out.println$S("Group draw (i): I should not be called!");
});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
for (var it=this.elementList.iterator$(); it.hasNext$(); ) {
(it.next$()).drawQuickly$java_awt_Graphics2D(_g2);
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'setNeedToProject$Z',  function (_need) {
for (var it=this.elementList.iterator$(); it.hasNext$(); ) {
(it.next$()).setNeedToProject$Z(_need);
}
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
var minX=Infinity;
var maxX=-Infinity;
var minY=Infinity;
var maxY=-Infinity;
var minZ=Infinity;
var maxZ=-Infinity;
var firstPoint=Clazz.array(Double.TYPE, [3]);
var secondPoint=Clazz.array(Double.TYPE, [3]);
var it=this.getElements$().iterator$();
while (it.hasNext$()){
(it.next$()).getExtrema$DA$DA(firstPoint, secondPoint);
minX=Math.min(Math.min(minX, firstPoint[0]), secondPoint[0]);
maxX=Math.max(Math.max(maxX, firstPoint[0]), secondPoint[0]);
minY=Math.min(Math.min(minY, firstPoint[1]), secondPoint[1]);
maxY=Math.max(Math.max(maxY, firstPoint[1]), secondPoint[1]);
minZ=Math.min(Math.min(minZ, firstPoint[2]), secondPoint[2]);
maxZ=Math.max(Math.max(maxZ, firstPoint[2]), secondPoint[2]);
}
min[0]=minX;
max[0]=maxX;
min[1]=minY;
max[1]=maxY;
min[2]=minZ;
max[2]=maxZ;
});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
if (!this.isReallyVisible$()) {
return null;
}var it=this.getElements$().iterator$();
while (it.hasNext$()){
var target=(it.next$()).getTargetHit$I$I(x, y);
if (target != null ) {
return target;
}}
return null;
});

Clazz.newMeth(C$, 'getElementChanged$',  function () {
for (var it=this.elementList.iterator$(); it.hasNext$(); ) {
if ((it.next$()).getElementChanged$()) {
return true;
}}
return C$.superclazz.prototype.getElementChanged$.apply(this, []);
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.datasetID=id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.datasetID;
});

Clazz.newMeth(C$, 'getData2D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
for (var el, $el = this.elementList.iterator$(); $el.hasNext$()&&((el=($el.next$())),1);) {
if (Clazz.instanceOf(el, "org.opensourcephysics.display.Data")) {
return (el).getColumnNames$();
}}
return null;
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return Clazz.array($I$(4), -1, [$I$(5).getLineColor$I(0), $I$(5).getLineColor$I(1), $I$(5).getLineColor$I(2)]);
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return Clazz.array($I$(4), -1, [this.getStyle$().getFillColor$(), this.getStyle$().getFillColor$(), this.getStyle$().getFillColor$()]);
});

Clazz.newMeth(C$, 'getDataList$',  function () {
var list=Clazz.new_($I$(2,1));
for (var el, $el = this.elementList.iterator$(); $el.hasNext$()&&((el=($el.next$())),1);) {
if (Clazz.instanceOf(el, "org.opensourcephysics.display.Data")) {
list.add$O(el);
}}
return list;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Group, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Group','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
