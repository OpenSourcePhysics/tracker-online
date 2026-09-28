(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display2d.CellLattice','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.DisplayRes','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.event.MouseInputAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LatticeFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lattice=Clazz.new_($I$(1,1).c$$I$I,[4, 4]);
this.editValues=Clazz.array(Integer.TYPE, [2]);
},1);

C$.$fields$=[['I',['dragV'],'O',['cellItem','javax.swing.JMenuItem','+siteItem','lattice','org.opensourcephysics.display2d.ByteLattice','mouseAdapter','javax.swing.event.MouseInputAdapter','editValues','int[]']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(2,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
(this.drawingPanel).getAxes$().setShowMajorXGrid$Z(false);
(this.drawingPanel).getAxes$().setShowMajorYGrid$Z(false);
this.addMenuItems$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (showGridLines) {
this.lattice.setShowGridLines$Z(showGridLines);
});

Clazz.newMeth(C$, 'c$$S',  function (frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(3,1))]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
this.addMenuItems$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'showLegend$',  function () {
this.lattice.showLegend$();
});

Clazz.newMeth(C$, 'addMenuItems$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return;
}var helpMenu=this.removeMenu$S($I$(4).getString$S("DrawingFrame.Help_menu_item"));
var menu=this.getMenu$S($I$(4).getString$S("DrawingFrame.Views_menu"));
if (menu == null ) {
menu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Views_menu")],$I$(5,1).c$$S);
menuBar.add$javax_swing_JMenu(menu);
menuBar.validate$();
} else {
menu.addSeparator$();
}if (helpMenu != null ) {
menuBar.add$javax_swing_JMenu(helpMenu);
}var menubarGroup=Clazz.new_($I$(6,1));
this.cellItem=Clazz.new_([$I$(4).getString$S("LatticeFrame.MenuItem.CellLattice")],$I$(7,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.cellItem);
this.cellItem.setSelected$Z(true);
var tableListener=((P$.LatticeFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LatticeFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.LatticeFrame'].convertToCellLattice$.apply(this.b$['org.opensourcephysics.frames.LatticeFrame'], []);
});
})()
), Clazz.new_(P$.LatticeFrame$1.$init$,[this, null]));
this.cellItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.cellItem);
this.siteItem=Clazz.new_([$I$(4).getString$S("LatticeFrame.MenuItem.SiteLattice")],$I$(7,1).c$$S);
menubarGroup.add$javax_swing_AbstractButton(this.siteItem);
tableListener=((P$.LatticeFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LatticeFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.LatticeFrame'].convertToSiteLattice$.apply(this.b$['org.opensourcephysics.frames.LatticeFrame'], []);
});
})()
), Clazz.new_(P$.LatticeFrame$2.$init$,[this, null]));
this.siteItem.addActionListener$java_awt_event_ActionListener(tableListener);
menu.add$javax_swing_JMenuItem(this.siteItem);
});

Clazz.newMeth(C$, 'convertToSiteLattice$',  function () {
if (Clazz.instanceOf(this.lattice, "org.opensourcephysics.display2d.CellLattice")) {
this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.lattice=(this.lattice).createSiteLattice$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.siteItem.setSelected$Z(true);
this.drawingPanel.repaint$();
}});

Clazz.newMeth(C$, 'convertToCellLattice$',  function () {
if (Clazz.instanceOf(this.lattice, "org.opensourcephysics.display2d.SiteLattice")) {
this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.lattice=(this.lattice).createCellLattice$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
this.cellItem.setSelected$Z(true);
this.drawingPanel.repaint$();
}});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.lattice);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.lattice]);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.lattice);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.lattice.setBlock$I$I$BAA(0, 0, Clazz.array(Byte.TYPE, [this.lattice.getNx$(), this.lattice.getNy$()]));
if (this.drawingPanel != null ) {
this.drawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'setAll$BAA',  function (val) {
if ((this.lattice.getNx$() != val.length) || (this.lattice.getNy$() != val[0].length) ) {
this.lattice.resizeLattice$I$I(val.length, val[0].length);
}this.lattice.setBlock$I$I$BAA(0, 0, val);
this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'setAll$BAA$D$D$D$D',  function (val, xmin, xmax, ymin, ymax) {
this.setAll$BAA(val);
this.lattice.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'randomize$',  function () {
this.lattice.randomize$();
});

Clazz.newMeth(C$, 'resizeLattice$I$I',  function (nx, ny) {
this.lattice.resizeLattice$I$I(nx, ny);
});

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (index, color) {
this.lattice.setIndexedColor$I$java_awt_Color(index, color);
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
this.lattice.setColorPalette$java_awt_ColorA(colors);
});

Clazz.newMeth(C$, 'setAtIndex$I$I',  function (i, v) {
var Nx=this.lattice.getNx$();
this.setValue$I$I$I(i % Nx, (i/Nx|0), v);
});

Clazz.newMeth(C$, 'setValue$I$I$I',  function (ix, iy, v) {
this.lattice.setValue$I$I$B(ix, iy, ($b$[0] = v, $b$[0]));
});

Clazz.newMeth(C$, 'setAll$IA$I$D$D$D$D',  function (val, nx, xmin, xmax, ymin, ymax) {
if (val.length % nx != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of values in lattice (nx*ny) must match number of values."]);
}this.resizeLattice$I$I(nx, (val.length/nx|0));
this.setAll$IA(val);
this.lattice.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setAll$IA',  function (v) {
for (var i=0; i < v.length; i++) {
this.setAtIndex$I$I(i, v[i]);
}
});

Clazz.newMeth(C$, 'getAtIndex$I',  function (i) {
var Nx=this.lattice.getNx$();
return this.getValue$I$I(i % Nx, (i/Nx|0));
});

Clazz.newMeth(C$, 'getValue$I$I',  function (ix, iy) {
return this.lattice.getValue$I$I(ix, iy);
});

Clazz.newMeth(C$, 'getAll$',  function () {
var N=this.lattice.getNx$() * this.lattice.getNy$();
var ret=Clazz.array(Integer.TYPE, [N]);
for (var i=0; i < N; i++) {
ret[i]=this.getAtIndex$I(i);
}
return ret;
});

Clazz.newMeth(C$, 'setToggleOnClick$Z$I$I',  function (enable, v1, v2) {
this.editValues=Clazz.array(Integer.TYPE, -1, [v1, v2]);
if (enable) {
this.drawingPanel.addMouseListener$java_awt_event_MouseListener(this.getMouseAdapter$());
this.drawingPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(this.getMouseAdapter$());
} else {
this.drawingPanel.removeMouseListener$java_awt_event_MouseListener(this.getMouseAdapter$());
this.drawingPanel.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.getMouseAdapter$());
}});

Clazz.newMeth(C$, 'mouse$java_awt_event_MouseEvent$Z',  function (e, pressed) {
if (e.getButton$() == 3) {
return;
}var x=this.drawingPanel.pixToX$I(e.getX$());
var y=this.drawingPanel.pixToY$I(e.getY$());
var i=this.indexFromPoint$D$D(x, y);
if (i == -1) {
return;
}if (pressed) {
this.dragV=this.editValues[0];
var len=this.editValues.length;
for (var j=0; j < len; j++) {
if (this.getAtIndex$I(i) == this.editValues[j]) {
this.dragV=this.editValues[(j + 1) % len];
}}
}if (this.getAtIndex$I(i) != this.dragV) {
this.setAtIndex$I$I(i, this.dragV);
this.drawingPanel.render$();
}});

Clazz.newMeth(C$, 'indexFromPoint$D$D',  function (x, y) {
return this.lattice.indexFromPoint$D$D(x, y);
});

Clazz.newMeth(C$, 'getMouseAdapter$',  function () {
if (this.mouseAdapter == null ) {
return ((P$.LatticeFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LatticeFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.frames.LatticeFrame'].mouse$java_awt_event_MouseEvent$Z.apply(this.b$['org.opensourcephysics.frames.LatticeFrame'], [e, true]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.frames.LatticeFrame'].mouse$java_awt_event_MouseEvent$Z.apply(this.b$['org.opensourcephysics.frames.LatticeFrame'], [e, false]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.LatticeFrame$3));
}return this.mouseAdapter;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
