(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.display.Dataset','org.opensourcephysics.tools.DataColumn','org.opensourcephysics.tools.DataTool',['org.opensourcephysics.tools.DataColumn','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataColumn", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.Dataset');
C$.$classes$=[['Loader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.deletable=false;
this.shifted=false;
},1);

C$.$fields$=[['Z',['deletable','shifted'],'D',['prevShift']]
,['O',['ZERO','Double']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
C$.superclazz.prototype.setXColumnVisible$Z.apply(this, [false]);
C$.superclazz.prototype.setXYColumnNames$S$S.apply(this, ["row", this.getYColumnName$()]);
}, 1);

Clazz.newMeth(C$, 'setPoints$DA$I',  function (yPoints, len) {
this.clear$();
var rows=$I$(3).getRowArray$I(len);
this.append$DA$DA(rows, yPoints);
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S',  function (xName, yName) {
C$.superclazz.prototype.setXYColumnNames$S$S.apply(this, ["row", yName]);
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S$S',  function (xName, yName, name) {
C$.superclazz.prototype.setXYColumnNames$S$S$S.apply(this, ["row", yName, name]);
});

Clazz.newMeth(C$, 'setXColumnVisible$Z',  function (b) {
});

Clazz.newMeth(C$, 'getYPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
for (var i=0; i < this.index; i++) {
temp[i]=this.isShifted$() ? this.ypoints[i] + this.shift : this.ypoints[i];
}
return temp;
});

Clazz.newMeth(C$, 'getY$I',  function (i) {
return (this.isShifted$() ? this.ypoints[i] + this.shift : this.ypoints[i]);
});

Clazz.newMeth(C$, 'setShifted$Z',  function (shift) {
this.shifted=shift;
});

Clazz.newMeth(C$, 'isShifted$',  function () {
return this.shifted;
});

Clazz.newMeth(C$, 'setShift$D',  function (shift) {
if (this.shift == shift ) return false;
if (shift != (Double.valueOf$S("-0")).$c()  && shift != (C$.ZERO).$c()  ) {
this.prevShift=shift;
}this.shift=shift;
return true;
});

Clazz.newMeth(C$, 'getShift$',  function () {
return this.shifted ? this.shift : 0;
});

Clazz.newMeth(C$, 'getPreviousShift$',  function () {
return this.prevShift;
});

Clazz.newMeth(C$, 'setShiftedValue$I$D',  function (i, value) {
if (i < 0 || i >= this.getIndex$() ) return false;
var d=value - this.ypoints[i];
if (!Double.isNaN$D(d)) {
return this.setShift$D(d);
}return false;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ZERO=Double.valueOf$D(0);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataColumn, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var column=obj;
var shift=column.getShift$();
if (shift != 0 ) {
control.setValue$S$D("shift", shift);
column.shift=0;
}$I$(1).getLoader$().saveObject$org_opensourcephysics_controls_XMLControl$O(control, column);
column.shift=shift;
if (column.deletable) {
control.setValue$S$Z("deletable", true);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var column=obj;
$I$(1).getLoader$().loadObject$org_opensourcephysics_controls_XMLControl$O(control, column);
if (control.getPropertyNamesRaw$().contains$O("shift")) {
column.shift=control.getDouble$S("shift");
}column.deletable=control.getBoolean$S("deletable");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
