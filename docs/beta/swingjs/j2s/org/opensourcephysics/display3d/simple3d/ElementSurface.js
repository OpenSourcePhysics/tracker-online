(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementSurface',['org.opensourcephysics.display3d.simple3d.ElementSurface','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementSurface", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.AbstractTile', 'org.opensourcephysics.display3d.core.ElementSurface');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nu=-1;
this.nv=-1;
{
this.setXYZ$D$D$D(0.0, 0.0, 0.0);
this.setSizeXYZ$D$D$D(1.0, 1.0, 1.0);
}
},1);

C$.$fields$=[['I',['nu','nv'],'O',['data','double[][][]']]]

Clazz.newMeth(C$, 'setData$DAAA',  function (data) {
this.data=data;
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
var minX=Infinity;
var maxX=-Infinity;
var minY=Infinity;
var maxY=-Infinity;
var minZ=Infinity;
var maxZ=-Infinity;
var aPoint=Clazz.array(Double.TYPE, [3]);
for (var i=0, n1=this.data.length; i < n1; i++) {
for (var j=0, n2=this.data[0].length; j < n2; j++) {
System.arraycopy$O$I$O$I$I(this.data[i][j], 0, aPoint, 0, 3);
this.sizeAndToSpaceFrame$DA(aPoint);
minX=Math.min(minX, aPoint[0]);
maxX=Math.max(maxX, aPoint[0]);
minY=Math.min(minY, aPoint[1]);
maxY=Math.max(maxY, aPoint[1]);
minZ=Math.min(minZ, aPoint[2]);
maxZ=Math.max(maxZ, aPoint[2]);
}
}
min[0]=minX;
max[0]=maxX;
min[1]=minY;
max[1]=maxY;
min[2]=minZ;
max[2]=maxZ;
});

Clazz.newMeth(C$, 'computeCorners$',  function () {
if (this.data == null ) {
return;
}var theNu=this.data.length - 1;
var theNv=this.data[0].length - 1;
if ((this.nu == theNu) && (this.nv == theNv) ) {
} else {
this.nu=theNu;
this.nv=theNv;
this.setCorners$DAAA(Clazz.array(Double.TYPE, [this.nu * this.nv, 4, 3]));
}var tile=0;
for (var v=0; v < this.nv; v++) {
for (var u=0; u < this.nu; u++, tile++) {
for (var k=0; k < 3; k++) {
this.corners[tile][0][k]=this.data[u][v][k];
this.corners[tile][1][k]=this.data[u + 1][v][k];
this.corners[tile][2][k]=this.data[u + 1][v + 1][k];
this.corners[tile][3][k]=this.data[u][v + 1][k];
}
}
}
for (var i=0; i < this.numberOfTiles; i++) {
for (var j=0, sides=this.corners[i].length; j < sides; j++) {
this.sizeAndToSpaceFrame$DA(this.corners[i][j]);
}
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementSurface, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementSurface','.Loader']);

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
