(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementArrow',['org.opensourcephysics.display3d.simple3d.ElementArrow','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementArrow", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.ElementSegment', 'org.opensourcephysics.display3d.core.ElementArrow');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.headPoints=0;
this.headA=Clazz.array(Integer.TYPE, [10]);
this.headB=Clazz.array(Integer.TYPE, [10]);
},1);

C$.$fields$=[['I',['headPoints'],'O',['headA','int[]','+headB']]]

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[_index].getDistance$());
if (_index < (this.div - 1)) {
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(theColor);
_g2.drawLine$I$I$I$I(this.aCoord[_index], this.bCoord[_index], this.aCoord[_index + 1], this.bCoord[_index + 1]);
} else {
var theFillColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getFillColor$(), this.objects[_index].getDistance$());
p$1.drawHead$java_awt_Graphics2D$I$I$java_awt_Color$java_awt_Color.apply(this, [_g2, this.aCoord[_index], this.bCoord[_index], theColor, theFillColor]);
}});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$()) {
return;
}if (this.hasChanged$()) {
this.computeDivisions$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}p$1.drawHead$java_awt_Graphics2D$I$I$java_awt_Color$java_awt_Color.apply(this, [_g2, this.aCoord[0], this.bCoord[0], this.getRealStyle$().getLineColor$(), this.getRealStyle$().getFillColor$()]);
});

Clazz.newMeth(C$, 'projectPoints$',  function () {
C$.superclazz.prototype.projectPoints$.apply(this, []);
var a=this.aCoord[this.div] - this.aCoord[0];
var b=this.bCoord[this.div] - this.bCoord[0];
var h=Math.sqrt(a * a + b * b);
if (h == 0.0 ) {
this.headPoints=0;
return;
}a=0.35 * a / h;
b=0.35 * b / h;
if (h > 25.0 ) {
a*=25.0 / h;
b*=25.0 / h;
}var p0=((this.aCoord[this.div] - a * h)|0);
var q0=((this.bCoord[this.div] - b * h)|0);
a*=h / 2.0;
b*=h / 2.0;
this.headPoints=6;
this.headA[0]=p0;
this.headB[0]=q0;
this.headA[1]=p0 - (b|0);
this.headB[1]=q0 + (a|0);
this.headA[2]=this.aCoord[this.div];
this.headB[2]=this.bCoord[this.div];
this.headA[3]=p0 + (b|0);
this.headB[3]=q0 - (a|0);
this.headA[4]=p0;
this.headB[4]=q0;
});

Clazz.newMeth(C$, 'drawHead$java_awt_Graphics2D$I$I$java_awt_Color$java_awt_Color',  function (_g2, a1, b1, _color, _fill) {
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
if (this.headPoints == 0) {
_g2.setColor$java_awt_Color(_color);
_g2.drawLine$I$I$I$I(a1, b1, this.aCoord[this.div], this.bCoord[this.div]);
return;
}var n=this.headPoints - 1;
this.headA[n]=a1;
this.headB[n]=b1;
if ((_fill != null ) && this.getRealStyle$().isDrawingFill$() ) {
_g2.setPaint$java_awt_Paint(_fill);
_g2.fillPolygon$IA$IA$I(this.headA, this.headB, n);
}_g2.setColor$java_awt_Color(_color);
_g2.drawPolyline$IA$IA$I(this.headA, this.headB, this.headPoints);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementArrow, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementArrow','.Loader']);

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
