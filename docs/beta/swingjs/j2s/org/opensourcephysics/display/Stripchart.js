(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,['org.opensourcephysics.display.Stripchart','.StripchartLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Stripchart", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.Dataset');
C$.$classes$=[['StripchartLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rightToLeft=true;
this.enabled=true;
},1);

C$.$fields$=[['Z',['rightToLeft','enabled'],'D',['xrange','yrange','lastx']]]

Clazz.newMeth(C$, 'c$$D$D',  function (_xrange, _yrange) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.xrange=Math.abs(_xrange);
this.yrange=Math.abs(_yrange);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D.apply(this, [1, 10]);
}, 1);

Clazz.newMeth(C$, 'setRange$D$D',  function (_xrange, _yrange) {
this.xrange=Math.abs(_xrange);
this.yrange=Math.abs(_yrange);
});

Clazz.newMeth(C$, 'enable$Z',  function (enabled) {
this.enabled=enabled;
});

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
if (!this.enabled) {
C$.superclazz.prototype.append$D$D.apply(this, [x, y]);
return;
}if ((this.index != 0) && (x < this.lastx ) ) {
this.clear$();
}this.lastx=x;
C$.superclazz.prototype.append$D$D.apply(this, [x, y]);
p$1.trim.apply(this, []);
});

Clazz.newMeth(C$, 'append$DA$DA',  function (_xpoints, _ypoints) {
if (!this.enabled) {
C$.superclazz.prototype.append$DA$DA.apply(this, [_xpoints, _ypoints]);
return;
}if ((this.index != 0) && (_xpoints[0] < this.lastx ) ) {
this.clear$();
}for (var i=1, n=_xpoints.length; i < n; i++) {
if (_xpoints[i] < _xpoints[i - 1] ) {
this.clear$();
return;
}}
this.lastx=_xpoints[_xpoints.length - 1];
C$.superclazz.prototype.append$DA$DA.apply(this, [_xpoints, _ypoints]);
p$1.trim.apply(this, []);
});

Clazz.newMeth(C$, 'clear$',  function () {
C$.superclazz.prototype.clear$.apply(this, []);
this.lastx=this.xpoints[0];
});

Clazz.newMeth(C$, 'trim',  function () {
if ((this.index > 0) && (this.xpoints[0] < this.lastx - this.xrange ) ) {
var counter=0;
while ((counter < this.index) && (this.xpoints[counter] < this.lastx - this.xrange ) ){
++counter;
}
System.arraycopy$O$I$O$I$I(this.xpoints, counter, this.xpoints, 0, this.index - counter);
System.arraycopy$O$I$O$I$I(this.ypoints, counter, this.ypoints, 0, this.index - counter);
this.index=this.index - counter;
}if (this.rightToLeft) {
this.xmin=this.lastx - this.xrange;
} else {
this.xmin=this.lastx;
}if (this.rightToLeft) {
this.xmax=this.lastx;
} else {
this.xmax=this.lastx - this.xrange;
}this.ymin=this.ymax=this.ypoints[0];
for (var i=1; i < this.index; i++) {
this.ymin=Math.min(this.ymin, this.ypoints[i]);
this.ymax=Math.max(this.ymax, this.ypoints[i]);
}
if (this.ymax - this.ymin < this.yrange ) {
this.ymin=(this.ymax + this.ymin - this.yrange) / 2.0;
this.ymax=(this.ymax + this.ymin + this.yrange ) / 2.0;
}this.recalculatePath$();
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(1,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Stripchart, "StripchartLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.Dataset','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var dataset=obj;
control.setValue$S$D("x_range", dataset.xrange);
control.setValue$S$D("y_range", dataset.yrange);
control.setValue$S$D("last_x", dataset.lastx);
control.setValue$S$Z("right_to_left", dataset.rightToLeft);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dataset=obj;
dataset.xrange=control.getDouble$S("x_range");
dataset.yrange=control.getDouble$S("y_range");
dataset.lastx=control.getDouble$S("last_x");
dataset.rightToLeft=control.getBoolean$S("right_to_left");
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
