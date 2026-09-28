(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display2d.CellLatticeOSX','org.opensourcephysics.display2d.CellLatticePC']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CellLattice", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display2d.ByteLattice');
C$.$classes$=[['OSLattice',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lattice=null;
},1);

C$.$fields$=[['O',['lattice','org.opensourcephysics.display2d.CellLattice.OSLattice']]
,['Z',['isMac']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [1, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (nx, ny) {
;C$.$init$.apply(this);
this.lattice=(C$.isMac ? Clazz.new_($I$(2,1).c$$I$I,[nx, ny]) : Clazz.new_($I$(3,1).c$$I$I,[nx, ny]));
}, 1);

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.lattice.getXMin$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.lattice.getXMax$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.lattice.getYMin$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.lattice.getYMax$();
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.lattice.isMeasured$();
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.lattice.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'getNx$',  function () {
return this.lattice.getNx$();
});

Clazz.newMeth(C$, 'getNy$',  function () {
return this.lattice.getNy$();
});

Clazz.newMeth(C$, 'indexFromPoint$D$D',  function (x, y) {
return this.lattice.indexFromPoint$D$D(x, y);
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
return this.lattice.xToIndex$D(x);
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
return this.lattice.yToIndex$D(y);
});

Clazz.newMeth(C$, 'getValue$I$I',  function (ix, iy) {
return this.lattice.getValue$I$I(ix, iy);
});

Clazz.newMeth(C$, 'setValue$I$I$B',  function (ix, iy, val) {
this.lattice.setValue$I$I$B(ix, iy, val);
});

Clazz.newMeth(C$, 'randomize$',  function () {
this.lattice.randomize$();
});

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (nx, ny) {
this.lattice.resizeLattice$I$I(nx, ny);
});

Clazz.newMeth(C$, 'setAll$BAA$D$D$D$D',  function (val, xmin, xmax, ymin, ymax) {
this.lattice.setAll$BAA$D$D$D$D(val, xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setBlock$I$I$BAA',  function (ix_offset, iy_offset, val) {
this.lattice.setBlock$I$I$BAA(ix_offset, iy_offset, val);
});

Clazz.newMeth(C$, 'setBlock$BAA',  function (val) {
this.lattice.setBlock$BAA(val);
});

Clazz.newMeth(C$, 'setCol$I$I$BA',  function (ix, iy_offset, val) {
this.lattice.setCol$I$I$BA(ix, iy_offset, val);
});

Clazz.newMeth(C$, 'setRow$I$I$BA',  function (iy, ix_offset, val) {
this.lattice.setRow$I$I$BA(iy, ix_offset, val);
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (show) {
this.lattice.setShowGridLines$Z(show);
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.lattice.setGridLineColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'showLegend$',  function () {
return this.lattice.showLegend$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.lattice.setVisible$Z(isVisible);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
this.lattice.setColorPalette$java_awt_ColorA(colors);
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (i, color) {
this.lattice.setIndexedColor$I$java_awt_Color(i, color);
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
this.lattice.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'createSiteLattice$',  function () {
return this.lattice.createSiteLattice$();
});

Clazz.newMeth(C$, 'setBlock$I$I$IAA',  function (ix_offset, iy_offset, val) {
this.lattice.setBlock$I$I$IAA(ix_offset, iy_offset, val);
});

Clazz.newMeth(C$, 'setXMin$D',  function (xmin) {
this.lattice.setXMin$D(xmin);
});

Clazz.newMeth(C$, 'setXMax$D',  function (xmax) {
this.lattice.setXMax$D(xmax);
});

Clazz.newMeth(C$, 'setYMin$D',  function (ymin) {
this.lattice.setYMin$D(ymin);
});

Clazz.newMeth(C$, 'setYMax$D',  function (ymax) {
this.lattice.setYMax$D(ymax);
});

Clazz.newMeth(C$, 'createDefaultColors$',  function () {
this.lattice.createDefaultColors$();
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.isMac=(($I$(1).isJS ? "" : System.getProperty$S$S("os.name", "")).indexOf$S("Mac") >= 0);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
};
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.CellLattice, "OSLattice", function(){
}, null, 'org.opensourcephysics.display2d.ByteLattice');

C$.$clinit$=2;
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
