(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.geom.GeneralPath','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GeneralPathLoader", null, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var shape=obj;
var it=shape.getPathIterator$java_awt_geom_AffineTransform$D(null, 0.001);
control.setValue$S$I("winding rule", it.getWindingRule$());
control.setValue$S$O("segments", this.savePathSegments$java_awt_geom_PathIterator(it));
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'savePathSegments$java_awt_geom_PathIterator',  function (it) {
var sb=Clazz.new_($I$(2,1));
var coord=Clazz.array(Float.TYPE, [6]);
var x1=0;
var y1=0;
while (!it.isDone$()){
switch (it.currentSegment$FA(coord)) {
case 1:
x1=coord[0];
y1=coord[1];
sb.append$S("<LINETO " + new Double(x1).toString() + " " + new Double(y1).toString() + ">" );
break;
case 0:
x1=coord[0];
y1=coord[1];
sb.append$S("<MOVETO " + new Double(x1).toString() + " " + new Double(y1).toString() + ">" );
break;
case 4:
sb.append$S("<CLOSE>");
break;
default:
System.out.println$S("Segment Type not supported. Type=" + it.currentSegment$FA(coord));
}
it.next$();
}
return sb.toString();
});

Clazz.newMeth(C$, 'loadPathSegments$java_awt_geom_GeneralPath$S',  function (path, segments) {
var segs=segments.split$S(">");
for (var i=0, n=segs.length; i < n; i++) {
if (segs[i].startsWith$S("<LINETO ")) {
var vals=segs[i].split$S(" ");
path.lineTo$F$F(Float.parseFloat$S(vals[1]), Float.parseFloat$S(vals[2]));
} else if (segs[i].startsWith$S("<MOVETO ")) {
var vals=segs[i].split$S(" ");
path.moveTo$F$F(Float.parseFloat$S(vals[1]), Float.parseFloat$S(vals[2]));
} else if (segs[i].startsWith$S("<CLOSE")) {
path.closePath$();
}}
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var path=obj;
path.reset$();
path.setWindingRule$I(control.getInt$S("winding rule"));
this.loadPathSegments$java_awt_geom_GeneralPath$S(path, control.getString$S("segments"));
return path;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
