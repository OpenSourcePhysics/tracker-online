(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.Trail','java.awt.geom.GeneralPath',['org.opensourcephysics.display.Trail','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Trail", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.AbstractTrail', 'org.opensourcephysics.display.LogMeasurable');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.generalPath=Clazz.new_($I$(2,1));
this.connected=true;
},1);

C$.$fields$=[['Z',['connected'],'O',['generalPath','java.awt.geom.GeneralPath']]]

Clazz.newMeth(C$, 'addPoint$D$D',  function (x, y) {
if (this.closed) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot add points to a closed trail."]);
}if (!this.connected || (this.numpts == 0) ) {
this.generalPath.moveTo$F$F(x, y);
}this.generalPath.lineTo$F$F(x, y);
this.xmin=Math.min(this.xmin, x);
this.xmax=Math.max(this.xmax, x);
if (x > 0 ) {
this.xminLogscale=Math.min(this.xminLogscale, x);
this.xmaxLogscale=Math.max(this.xmaxLogscale, x);
}this.ymin=Math.min(this.ymin, y);
this.ymax=Math.max(this.ymax, y);
if (y > 0 ) {
this.yminLogscale=Math.min(this.yminLogscale, y);
this.ymaxLogscale=Math.max(this.ymaxLogscale, y);
}++this.numpts;
});

Clazz.newMeth(C$, 'moveToPoint$D$D',  function (x, y) {
this.generalPath.moveTo$F$F(x, y);
this.xmin=Math.min(this.xmin, x);
this.xmax=Math.max(this.xmax, x);
if (x > 0 ) {
this.xminLogscale=Math.min(this.xminLogscale, x);
this.xmaxLogscale=Math.max(this.xmaxLogscale, x);
}this.ymin=Math.min(this.ymin, y);
this.ymax=Math.max(this.ymax, y);
if (y > 0 ) {
this.yminLogscale=Math.min(this.yminLogscale, y);
this.ymaxLogscale=Math.max(this.ymaxLogscale, y);
}++this.numpts;
});

Clazz.newMeth(C$, 'closeTrail$',  function () {
this.closed=true;
this.generalPath.closePath$();
});

Clazz.newMeth(C$, 'setConnected$Z',  function (connected) {
this.connected=connected;
});

Clazz.newMeth(C$, 'isConnected$',  function () {
return this.connected;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.closed=false;
this.numpts=0;
this.xmax=this.xmaxLogscale=-1.7976931348623157E308;
this.ymax=this.ymaxLogscale=-1.7976931348623157E308;
this.xmin=this.xminLogscale=1.7976931348623157E308;
this.ymin=this.yminLogscale=1.7976931348623157E308;
this.generalPath.reset$();
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.numpts == 0) {
return;
}var g2=g;
g2.setColor$java_awt_Color(this.color);
var s=panel.transformPath$java_awt_geom_GeneralPath(this.generalPath);
if (this.drawingStroke != null ) {
var stroke=g2.getStroke$();
g2.setStroke$java_awt_Stroke(this.drawingStroke);
g2.draw$java_awt_Shape(s);
g2.setStroke$java_awt_Stroke(stroke);
} else {
g2.draw$java_awt_Shape(s);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Trail, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trail=obj;
control.setValue$S$Z("connected", trail.connected);
control.setValue$S$O("color", trail.color);
control.setValue$S$I("number of pts", trail.numpts);
control.setValue$S$O("general path", trail.generalPath);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trail=obj;
trail.connected=control.getBoolean$S("connected");
trail.color=control.getObject$S("color");
trail.numpts=control.getInt$S("number of pts");
trail.generalPath=control.getObject$S("general path");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
