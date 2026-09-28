(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementTetrahedron','org.opensourcephysics.display3d.simple3d.utils.TetrahedronUtils',['org.opensourcephysics.display3d.simple3d.ElementTetrahedron','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementTetrahedron", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.AbstractTile', 'org.opensourcephysics.display3d.core.ElementTetrahedron');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closedBottom=true;
this.closedTop=true;
this.truncationHeight=NaN;
this.changeNTiles=true;
this.standardTetra=null;
},1);

C$.$fields$=[['Z',['closedBottom','closedTop','changeNTiles'],'D',['truncationHeight'],'O',['standardTetra','double[][][]']]]

Clazz.newMeth(C$, 'setTruncationHeight$D',  function (height) {
if (height < 0 ) {
height=NaN;
}this.truncationHeight=height;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getTruncationHeight$',  function () {
return this.truncationHeight;
});

Clazz.newMeth(C$, 'setClosedBottom$Z',  function (close) {
this.closedBottom=close;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'isClosedBottom$',  function () {
return this.closedBottom;
});

Clazz.newMeth(C$, 'setClosedTop$Z',  function (close) {
this.closedTop=close;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'isClosedTop$',  function () {
return this.closedTop;
});

Clazz.newMeth(C$, 'computeCorners$',  function () {
if (this.changeNTiles) {
this.changeNTiles=false;
var height=this.truncationHeight / this.getSizeZ$();
if (!Double.isNaN$D(height)) {
height=Math.min(height, 1.0);
}this.standardTetra=$I$(2).createStandardTetrahedron$Z$Z$D(this.closedTop, this.closedBottom, height);
this.setCorners$DAAA(Clazz.array(Double.TYPE, [this.standardTetra.length, 4, 3]));
}for (var i=0; i < this.numberOfTiles; i++) {
for (var j=0, sides=this.corners[i].length; j < sides; j++) {
System.arraycopy$O$I$O$I$I(this.standardTetra[i][j], 0, this.corners[i][j], 0, 3);
this.sizeAndToSpaceFrame$DA(this.corners[i][j]);
}
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementTetrahedron, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementTetrahedron','.Loader']);

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
