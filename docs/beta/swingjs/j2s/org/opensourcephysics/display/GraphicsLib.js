(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.numerics.ArrayLib','java.awt.geom.GeneralPath']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphicsLib");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'intersectLineLine$java_awt_geom_Line2D$java_awt_geom_Line2D$java_awt_geom_Point2D',  function (a, b, intersect) {
var a1x=a.getX1$();
var a1y=a.getY1$();
var a2x=a.getX2$();
var a2y=a.getY2$();
var b1x=b.getX1$();
var b1y=b.getY1$();
var b2x=b.getX2$();
var b2y=b.getY2$();
return C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y, intersect);
}, 1);

Clazz.newMeth(C$, 'intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D',  function (a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y, intersect) {
var ua_t=(b2x - b1x) * (a1y - b1y) - (b2y - b1y) * (a1x - b1x);
var ub_t=(a2x - a1x) * (a1y - b1y) - (a2y - a1y) * (a1x - b1x);
var u_b=(b2y - b1y) * (a2x - a1x) - (b2x - b1x) * (a2y - a1y);
if (u_b != 0 ) {
var ua=ua_t / u_b;
var ub=ub_t / u_b;
if ((0 <= ua ) && (ua <= 1 ) && (0 <= ub ) && (ub <= 1 )  ) {
intersect.setLocation$D$D(a1x + ua * (a2x - a1x), a1y + ua * (a2y - a1y));
return 1;
}return 0;
}return (((ua_t == 0 ) || (ub_t == 0 ) ) ? -1 : -2);
}, 1);

Clazz.newMeth(C$, 'intersectLineRectangle$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Rectangle2D$java_awt_geom_Point2DA',  function (a1, a2, r, pts) {
var a1x=a1.getX$();
var a1y=a1.getY$();
var a2x=a2.getX$();
var a2y=a2.getY$();
var mxx=r.getMaxX$();
var mxy=r.getMaxY$();
var mnx=r.getMinX$();
var mny=r.getMinY$();
if (pts[0] == null ) {
pts[0]=Clazz.new_($I$(1,1));
}if (pts[1] == null ) {
pts[1]=Clazz.new_($I$(1,1));
}var i=0;
if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mnx, mny, mxx, mny, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mxx, mny, mxx, mxy, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}if (i == 2) {
return i;
}if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mxx, mxy, mnx, mxy, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}if (i == 2) {
return i;
}if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mnx, mxy, mnx, mny, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}return i;
}, 1);

Clazz.newMeth(C$, 'intersectLineRectangle$java_awt_geom_Line2D$java_awt_geom_Rectangle2D$java_awt_geom_Point2DA',  function (l, r, pts) {
var a1x=l.getX1$();
var a1y=l.getY1$();
var a2x=l.getX2$();
var a2y=l.getY2$();
var mxx=r.getMaxX$();
var mxy=r.getMaxY$();
var mnx=r.getMinX$();
var mny=r.getMinY$();
if (pts[0] == null ) {
pts[0]=Clazz.new_($I$(1,1));
}if (pts[1] == null ) {
pts[1]=Clazz.new_($I$(1,1));
}var i=0;
if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mnx, mny, mxx, mny, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mxx, mny, mxx, mxy, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}if (i == 2) {
return i;
}if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mxx, mxy, mnx, mxy, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}if (i == 2) {
return i;
}if (C$.intersectLineLine$D$D$D$D$D$D$D$D$java_awt_geom_Point2D(mnx, mxy, mnx, mny, a1x, a1y, a2x, a2y, pts[i]) > 0) {
++i;
}return i;
}, 1);

Clazz.newMeth(C$, 'convexHull$DA$I',  function (pts, len) {
if (len < 6) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input must have at least 3 points"]);
}var plen=(len/2|0) - 1;
var angles=Clazz.array(Float.TYPE, [plen]);
var idx=Clazz.array(Integer.TYPE, [plen]);
var stack=Clazz.array(Integer.TYPE, [(len/2|0)]);
return C$.convexHull$DA$I$FA$IA$IA(pts, len, angles, idx, stack);
}, 1);

Clazz.newMeth(C$, 'convexHull$DA$I$FA$IA$IA',  function (pts, len, angles, idx, stack) {
var plen=(len/2|0) - 1;
if (len < 6) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input must have at least 3 points"]);
}if ((angles.length < plen) || (idx.length < plen) || (stack.length < (len/2|0))  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pre-allocated data structure too small"]);
}var i0=0;
for (var i=2; i < len; i+=2) {
if (pts[i + 1] < pts[i0 + 1] ) {
i0=i;
} else if (pts[i + 1] == pts[i0 + 1] ) {
i0=((pts[i] < pts[i0] ) ? i : i0);
}}
for (var i=0, j=0; i < len; i+=2) {
if (i == i0) {
continue;
}angles[j]=Math.atan2(pts[i + 1] - pts[i0 + 1], pts[i] - pts[i0]);
idx[j++]=i;
}
$I$(2).sort$FA$IA$I(angles, idx, plen);
var angle=angles[0];
var ti=0;
var tj=idx[0];
for (var i=1; i < plen; i++) {
var j=idx[i];
if (angle == angles[i] ) {
var x1=pts[tj] - pts[i0];
var y1=pts[tj + 1] - pts[i0 + 1];
var x2=pts[j] - pts[i0];
var y2=pts[j + 1] - pts[i0 + 1];
var d1=x1 * x1 + y1 * y1;
var d2=x2 * x2 + y2 * y2;
if (d1 >= d2 ) {
idx[i]=-1;
} else {
idx[ti]=-1;
angle=angles[i];
ti=i;
tj=j;
}} else {
angle=angles[i];
ti=i;
tj=j;
}}
var sp=0;
stack[sp++]=i0;
var j=0;
for (var k=0; k < 2; j++) {
if (idx[j] != -1) {
stack[sp++]=idx[j];
++k;
}}
for (; j < plen; j++) {
if (idx[j] == -1) {
continue;
}while (C$.isNonLeft$I$I$I$I$DA(i0, stack[sp - 2], stack[sp - 1], idx[j], pts)){
--sp;
}
stack[sp++]=idx[j];
}
var hull=Clazz.array(Double.TYPE, [2 * sp]);
for (var i=0; i < sp; i++) {
hull[2 * i]=pts[stack[i]];
hull[2 * i + 1]=pts[stack[i] + 1];
}
return hull;
}, 1);

Clazz.newMeth(C$, 'isNonLeft$I$I$I$I$DA',  function (i0, i1, i2, i3, pts) {
var l1;
var l2;
var l4;
var l5;
var l6;
var angle1;
var angle2;
var angle;
l1=Math.sqrt(Math.pow(pts[i2 + 1] - pts[i1 + 1], 2) + Math.pow(pts[i2] - pts[i1], 2));
l2=Math.sqrt(Math.pow(pts[i3 + 1] - pts[i2 + 1], 2) + Math.pow(pts[i3] - pts[i2], 2));
l4=Math.sqrt(Math.pow(pts[i3 + 1] - pts[i0 + 1], 2) + Math.pow(pts[i3] - pts[i0], 2));
l5=Math.sqrt(Math.pow(pts[i1 + 1] - pts[i0 + 1], 2) + Math.pow(pts[i1] - pts[i0], 2));
l6=Math.sqrt(Math.pow(pts[i2 + 1] - pts[i0 + 1], 2) + Math.pow(pts[i2] - pts[i0], 2));
angle1=Math.acos(((l2 * l2) + (l6 * l6) - (l4 * l4)) / (2 * l2 * l6 ));
angle2=Math.acos(((l6 * l6) + (l1 * l1) - (l5 * l5)) / (2 * l6 * l1 ));
angle=(3.141592653589793 - angle1) - angle2;
if (angle <= 0.0 ) {
return (true);
}return (false);
}, 1);

Clazz.newMeth(C$, 'centroid$FA$I',  function (pts, len) {
var c=Clazz.array(Float.TYPE, -1, [0, 0]);
for (var i=0; i < len; i+=2) {
c[0]+=pts[i];
c[1]+=pts[i + 1];
}
c[0]/=(len/2|0);
c[1]/=(len/2|0);
return c;
}, 1);

Clazz.newMeth(C$, 'growPolygon$FA$I$F',  function (pts, len, amt) {
var c=C$.centroid$FA$I(pts, len);
for (var i=0; i < len; i+=2) {
var vx=pts[i] - c[0];
var vy=pts[i + 1] - c[1];
var norm=Math.sqrt(vx * vx + vy * vy);
pts[i]+=amt * vx / norm;
pts[i + 1]+=amt * vy / norm;
}
}, 1);

Clazz.newMeth(C$, 'cardinalSpline$FA$F$Z',  function (pts, slack, closed) {
var path=Clazz.new_($I$(3,1));
path.moveTo$F$F(pts[0], pts[1]);
return C$.cardinalSpline$java_awt_geom_GeneralPath$FA$F$Z$F$F(path, pts, slack, closed, 0.0, 0.0);
}, 1);

Clazz.newMeth(C$, 'cardinalSpline$FA$I$I$F$Z',  function (pts, start, npoints, slack, closed) {
var path=Clazz.new_($I$(3,1));
path.moveTo$F$F(pts[start], pts[start + 1]);
return C$.cardinalSpline$java_awt_geom_GeneralPath$FA$I$I$F$Z$F$F(path, pts, start, npoints, slack, closed, 0.0, 0.0);
}, 1);

Clazz.newMeth(C$, 'cardinalSpline$java_awt_geom_GeneralPath$FA$F$Z$F$F',  function (p, pts, slack, closed, tx, ty) {
var npoints=0;
for (; npoints < pts.length; ++npoints) {
if (Float.isNaN$F(pts[npoints])) {
break;
}}
return C$.cardinalSpline$java_awt_geom_GeneralPath$FA$I$I$F$Z$F$F(p, pts, 0, (npoints/2|0), slack, closed, tx, ty);
}, 1);

Clazz.newMeth(C$, 'cardinalSpline$java_awt_geom_GeneralPath$FA$I$I$F$Z$F$F',  function (p, pts, start, npoints, slack, closed, tx, ty) {
var len=2 * npoints;
var end=start + len;
if (len < 6) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["To create spline requires at least 3 points"]);
}var dx1;
var dy1;
var dx2;
var dy2;
if (closed) {
dx2=pts[start + 2] - pts[end - 2];
dy2=pts[start + 3] - pts[end - 1];
} else {
dx2=pts[start + 4] - pts[start];
dy2=pts[start + 5] - pts[start + 1];
}var i;
for (i=start + 2; i < end - 2; i+=2) {
dx1=dx2;
dy1=dy2;
dx2=pts[i + 2] - pts[i - 2];
dy2=pts[i + 3] - pts[i - 1];
p.curveTo$F$F$F$F$F$F(tx + pts[i - 2] + slack * dx1 , ty + pts[i - 1] + slack * dy1 , tx + pts[i] - slack * dx2, ty + pts[i + 1] - slack * dy2, tx + pts[i], ty + pts[i + 1]);
}
if (closed) {
dx1=dx2;
dy1=dy2;
dx2=pts[start] - pts[i - 2];
dy2=pts[start + 1] - pts[i - 1];
p.curveTo$F$F$F$F$F$F(tx + pts[i - 2] + slack * dx1 , ty + pts[i - 1] + slack * dy1 , tx + pts[i] - slack * dx2, ty + pts[i + 1] - slack * dy2, tx + pts[i], ty + pts[i + 1]);
dx1=dx2;
dy1=dy2;
dx2=pts[start + 2] - pts[end - 2];
dy2=pts[start + 3] - pts[end - 1];
p.curveTo$F$F$F$F$F$F(tx + pts[end - 2] + slack * dx1 , ty + pts[end - 1] + slack * dy1 , tx + pts[0] - slack * dx2, ty + pts[1] - slack * dy2, tx + pts[0], ty + pts[1]);
p.closePath$();
} else {
p.curveTo$F$F$F$F$F$F(tx + pts[i - 2] + slack * dx2 , ty + pts[i - 1] + slack * dy2 , tx + pts[i] - slack * dx2, ty + pts[i + 1] - slack * dy2, tx + pts[i], ty + pts[i + 1]);
}return p;
}, 1);

Clazz.newMeth(C$, 'stackSpline$java_awt_geom_GeneralPath$FA$F$F$Z$F$F',  function (p, pts, epsilon, slack, closed, tx, ty) {
var npoints=0;
for (; npoints < pts.length; ++npoints) {
if (Float.isNaN$F(pts[npoints])) {
break;
}}
return C$.stackSpline$java_awt_geom_GeneralPath$FA$I$I$F$F$Z$F$F(p, pts, 0, (npoints/2|0), epsilon, slack, closed, tx, ty);
}, 1);

Clazz.newMeth(C$, 'stackSpline$java_awt_geom_GeneralPath$FA$I$I$F$F$Z$F$F',  function (p, pts, start, npoints, epsilon, slack, closed, tx, ty) {
var len=2 * npoints;
var end=start + len;
if (len < 6) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["To create spline requires at least 3 points"]);
}var dx1;
var dy1;
var dx2;
var dy2;
if (closed) {
dx2=pts[start + 2] - pts[end - 2];
dy2=pts[start + 3] - pts[end - 1];
} else {
dx2=pts[start + 4] - pts[start];
dy2=pts[start + 5] - pts[start + 1];
}var i;
for (i=start + 2; i < end - 2; i+=2) {
dx1=dx2;
dy1=dy2;
dx2=pts[i + 2] - pts[i - 2];
dy2=pts[i + 3] - pts[i - 1];
if ((Math.abs(pts[i] - pts[i - 2]) < epsilon ) || (Math.abs(pts[i + 1] - pts[i - 1]) < epsilon ) ) {
p.lineTo$F$F(tx + pts[i], ty + pts[i + 1]);
} else {
p.curveTo$F$F$F$F$F$F(tx + pts[i - 2] + slack * dx1 , ty + pts[i - 1] + slack * dy1 , tx + pts[i] - slack * dx2, ty + pts[i + 1] - slack * dy2, tx + pts[i], ty + pts[i + 1]);
}}
dx1=dx2;
dy1=dy2;
dx2=pts[start] - pts[i - 2];
dy2=pts[start + 1] - pts[i - 1];
if ((Math.abs(pts[i] - pts[i - 2]) < epsilon ) || (Math.abs(pts[i + 1] - pts[i - 1]) < epsilon ) ) {
p.lineTo$F$F(tx + pts[i], ty + pts[i + 1]);
} else {
p.curveTo$F$F$F$F$F$F(tx + pts[i - 2] + slack * dx1 , ty + pts[i - 1] + slack * dy1 , tx + pts[i] - slack * dx2, ty + pts[i + 1] - slack * dy2, tx + pts[i], ty + pts[i + 1]);
}if (closed) {
if ((Math.abs(pts[end - 2] - pts[0]) < epsilon ) || (Math.abs(pts[end - 1] - pts[1]) < epsilon ) ) {
p.lineTo$F$F(tx + pts[0], ty + pts[1]);
} else {
dx1=dx2;
dy1=dy2;
dx2=pts[start + 2] - pts[end - 2];
dy2=pts[start + 3] - pts[end - 1];
p.curveTo$F$F$F$F$F$F(tx + pts[end - 2] + slack * dx1 , ty + pts[end - 1] + slack * dy1 , tx + pts[0] - slack * dx2, ty + pts[1] - slack * dy2, tx + pts[0], ty + pts[1]);
}p.closePath$();
}return p;
}, 1);

Clazz.newMeth(C$, 'expand$java_awt_geom_Rectangle2D$D',  function (r, amount) {
r.setRect$D$D$D$D(r.getX$() - amount, r.getY$() - amount, r.getWidth$() + 2 * amount, r.getHeight$() + 2 * amount);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
