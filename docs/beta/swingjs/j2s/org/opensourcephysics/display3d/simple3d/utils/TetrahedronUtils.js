(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d.utils"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TetrahedronUtils", null, 'org.opensourcephysics.display3d.simple3d.utils.ShapeUtils');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['D',['SQRT3','HEIGHT','XCENTER','ZCENTER']]]

Clazz.newMeth(C$, 'createStandardTetrahedron$Z$Z$D',  function (top, bottom, height) {
var totalN=4;
var pointsN=4;
if (!Double.isNaN$D(height)) {
pointsN+=2;
if (top && bottom ) {
totalN=5;
} else if (!top && bottom ) {
totalN=4;
} else if (!top && !bottom ) {
totalN=3;
} else {
totalN=4;
}}if (!bottom && Double.isNaN$D(height) ) {
totalN=3;
}var data=Clazz.array(Double.TYPE, [totalN, 4, 3]);
var points=Clazz.array(Double.TYPE, [pointsN, 3]);
points[0][0]=C$.XCENTER;
points[0][1]=0.5;
points[0][2]=-C$.ZCENTER;
points[1][0]=C$.XCENTER;
points[1][1]=-0.5;
points[1][2]=-C$.ZCENTER;
points[2][0]=-C$.XCENTER * 2.0;
points[2][1]=0.0;
points[2][2]=-C$.ZCENTER;
if (Double.isNaN$D(height)) {
points[3][0]=0.0;
points[3][1]=0.0;
points[3][2]=C$.HEIGHT - C$.ZCENTER;
if (bottom) {
var serie=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 3, 0, 3, 2, 2, 1, 2, 3, 3, 0, 2, 1, 1]);
for (var i=0; i < totalN; i++) {
for (var j=0; j < 3; j++) {
data[i][0][j]=points[serie[i * 4]][j];
data[i][1][j]=points[serie[i * 4 + 1]][j];
data[i][2][j]=points[serie[i * 4 + 2]][j];
data[i][3][j]=points[serie[i * 4 + 3]][j];
}
}
} else {
var serie=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 3, 0, 3, 2, 2, 1, 2, 3, 3]);
for (var i=0; i < totalN; i++) {
for (var j=0; j < 3; j++) {
data[i][0][j]=points[serie[i * 4]][j];
data[i][1][j]=points[serie[i * 4 + 1]][j];
data[i][2][j]=points[serie[i * 4 + 2]][j];
data[i][3][j]=points[serie[i * 4 + 3]][j];
}
}
}}if (!Double.isNaN$D(height)) {
points[3][0]=C$.XCENTER * (1 - height);
points[3][1]=0.5 - 0.5 * height;
points[3][2]=C$.HEIGHT * height - C$.ZCENTER;
points[4][0]=C$.XCENTER * (1 - height);
points[4][1]=-0.5 + 0.5 * height;
points[4][2]=C$.HEIGHT * height - C$.ZCENTER;
points[5][0]=-C$.XCENTER * 2.0 * (1 - height) ;
points[5][1]=0.0;
points[5][2]=C$.HEIGHT * height - C$.ZCENTER;
if (top && bottom ) {
var serie=Clazz.array(Integer.TYPE, -1, [0, 3, 4, 1, 2, 5, 3, 0, 1, 4, 5, 2, 0, 1, 2, 2, 3, 5, 4, 4]);
for (var i=0; i < totalN; i++) {
for (var j=0; j < 3; j++) {
data[i][0][j]=points[serie[i * 4]][j];
data[i][1][j]=points[serie[i * 4 + 1]][j];
data[i][2][j]=points[serie[i * 4 + 2]][j];
data[i][3][j]=points[serie[i * 4 + 3]][j];
}
}
}if (!top && bottom ) {
var serie=Clazz.array(Integer.TYPE, -1, [0, 3, 4, 1, 2, 5, 3, 0, 1, 4, 5, 2, 0, 1, 2, 2]);
for (var i=0; i < totalN; i++) {
for (var j=0; j < 3; j++) {
data[i][0][j]=points[serie[i * 4]][j];
data[i][1][j]=points[serie[i * 4 + 1]][j];
data[i][2][j]=points[serie[i * 4 + 2]][j];
data[i][3][j]=points[serie[i * 4 + 3]][j];
}
}
}if (!top && !bottom ) {
var serie=Clazz.array(Integer.TYPE, -1, [0, 3, 4, 1, 2, 5, 3, 0, 1, 4, 5, 2]);
for (var i=0; i < totalN; i++) {
for (var j=0; j < 3; j++) {
data[i][0][j]=points[serie[i * 4]][j];
data[i][1][j]=points[serie[i * 4 + 1]][j];
data[i][2][j]=points[serie[i * 4 + 2]][j];
data[i][3][j]=points[serie[i * 4 + 3]][j];
}
}
}if (top && !bottom ) {
var serie=Clazz.array(Integer.TYPE, -1, [0, 3, 4, 1, 2, 5, 3, 0, 1, 4, 5, 2, 3, 5, 4, 4]);
for (var i=0; i < totalN; i++) {
for (var j=0; j < 3; j++) {
data[i][0][j]=points[serie[i * 4]][j];
data[i][1][j]=points[serie[i * 4 + 1]][j];
data[i][2][j]=points[serie[i * 4 + 2]][j];
data[i][3][j]=points[serie[i * 4 + 3]][j];
}
}
}}return data;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.SQRT3=Math.sqrt(3.0);
C$.HEIGHT=Math.sqrt(6.0) / 3.0;
C$.XCENTER=C$.SQRT3 / 6.0;
C$.ZCENTER=C$.HEIGHT / 3.0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
