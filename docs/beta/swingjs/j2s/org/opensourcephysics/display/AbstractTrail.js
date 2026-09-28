(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color','java.awt.BasicStroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractTrail", null, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.display.Measurable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(1).black;
this.enableMeasure=false;
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
this.xmaxLogscale=-1.7976931348623157E308;
this.ymaxLogscale=-1.7976931348623157E308;
this.xminLogscale=1.7976931348623157E308;
this.yminLogscale=1.7976931348623157E308;
this.numpts=0;
this.closed=false;
},1);

C$.$fields$=[['Z',['enableMeasure','closed'],'D',['xmin','xmax','ymin','ymax','xmaxLogscale','ymaxLogscale','xminLogscale','yminLogscale'],'I',['numpts'],'O',['color','java.awt.Color','drawingStroke','java.awt.Stroke']]]

Clazz.newMeth(C$, 'setStroke$java_awt_Stroke',  function (stroke) {
this.drawingStroke=stroke;
});

Clazz.newMeth(C$, 'setDashedStroke$I$I',  function (dashPoint, dashLength) {
if (dashLength == 0) {
this.drawingStroke=Clazz.new_($I$(2,1).c$$F$I$I$F$FA$F,[dashPoint, 0, 1, 0, null, 0]);
} else {
this.drawingStroke=Clazz.new_([dashPoint, 0, 1, 0, Clazz.array(Float.TYPE, -1, [dashLength]), 0],$I$(2,1).c$$F$I$I$F$FA$F);
}});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.drawingStroke;
});

Clazz.newMeth(C$, 'getNumberOfPoints$',  function () {
return this.numpts;
});

Clazz.newMeth(C$, 'setMeasured$Z',  function (_enableMeasure) {
this.enableMeasure=_enableMeasure;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.enableMeasure && (this.numpts > 0) ;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'getXMinLogscale$',  function () {
return this.xminLogscale;
});

Clazz.newMeth(C$, 'getXMaxLogscale$',  function () {
return this.xmaxLogscale;
});

Clazz.newMeth(C$, 'getYMinLogscale$',  function () {
return this.yminLogscale;
});

Clazz.newMeth(C$, 'getYMaxLogscale$',  function () {
return this.ymaxLogscale;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
