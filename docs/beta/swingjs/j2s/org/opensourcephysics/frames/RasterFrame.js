(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),p$1={},I$=[[0,'org.opensourcephysics.display2d.ByteRaster','org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.DisplayRes','javax.swing.JMenu','javax.swing.JMenuItem','java.awt.Dimension','javax.swing.event.MouseInputAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RasterFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.raster=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.editValues=Clazz.array(Integer.TYPE, [2]);
},1);

C$.$fields$=[['I',['dragV'],'O',['raster','org.opensourcephysics.display2d.ByteRaster','mouseAdapter','javax.swing.event.MouseInputAdapter','editValues','int[]','customColors','java.awt.Color[]']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(2,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
(this.drawingPanel).getAxes$().setShowMajorXGrid$Z(false);
(this.drawingPanel).getAxes$().setShowMajorYGrid$Z(false);
this.addMenuItems$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.raster);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (frameTitle) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(3,1))]);C$.$init$.apply(this);
this.setTitle$S(frameTitle);
this.addMenuItems$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.raster);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
}, 1);

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
}var menuItem=Clazz.new_([$I$(4).getString$S("RasterFrame.MenuItem.Color")],$I$(6,1).c$$S);
var actionListener=((P$.RasterFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RasterFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.RasterFrame'].setColorPalette$.apply(this.b$['org.opensourcephysics.frames.RasterFrame'], []);
});
})()
), Clazz.new_(P$.RasterFrame$1.$init$,[this, null]));
menuItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(menuItem);
menuItem=Clazz.new_([$I$(4).getString$S("RasterFrame.MenuItem.B&W")],$I$(6,1).c$$S);
actionListener=((P$.RasterFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "RasterFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.frames.RasterFrame'].setBWPalette$.apply(this.b$['org.opensourcephysics.frames.RasterFrame'], []);
});
})()
), Clazz.new_(P$.RasterFrame$2.$init$,[this, null]));
menuItem.addActionListener$java_awt_event_ActionListener(actionListener);
menu.add$javax_swing_JMenuItem(menuItem);
});

Clazz.newMeth(C$, 'setBWPalette$',  function () {
this.raster.setBWPalette$();
this.repaint$();
});

Clazz.newMeth(C$, 'setColorPalette$',  function () {
if (this.customColors == null ) {
this.raster.createDefaultColors$();
} else {
this.raster.setColorPalette$java_awt_ColorA(this.customColors);
}this.repaint$();
});

Clazz.newMeth(C$, 'showLegend$',  function () {
this.raster.showLegend$();
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
this.customColors=colors;
this.raster.setColorPalette$java_awt_ColorA(colors);
this.repaint$();
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
this.drawingPanel.clear$();
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.raster);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
return C$.superclazz.prototype.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable.apply(this, [null, this.raster]);
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
return this.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, this.raster);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.raster.setBlock$I$I$BAA(0, 0, Clazz.array(Byte.TYPE, [this.raster.getNx$(), this.raster.getNy$()]));
this.drawingPanel.invalidateImage$();
});

Clazz.newMeth(C$, 'randomize$',  function () {
this.raster.randomize$();
});

Clazz.newMeth(C$, 'resizeRaster$I$I',  function (nx, ny) {
this.drawingPanel.setPreferredSize$java_awt_Dimension(Clazz.new_([Math.max(nx + this.drawingPanel.getLeftGutter$() + this.drawingPanel.getRightGutter$() , 50), Math.max(ny + this.drawingPanel.getTopGutter$() + this.drawingPanel.getBottomGutter$() , 50)],$I$(7,1).c$$I$I));
this.pack$();
this.raster.resizeLattice$I$I(nx, ny);
this.drawingPanel.invalidateImage$();
this.drawingPanel.repaint$();
}, p$1);

Clazz.newMeth(C$, 'setIndexedColor$I$java_awt_Color',  function (index, color) {
this.raster.setIndexedColor$I$java_awt_Color(index, color);
});

Clazz.newMeth(C$, 'setAll$BAA$D$D$D$D',  function (val, xmin, xmax, ymin, ymax) {
this.setAll$BAA(val);
this.raster.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setAll$BAA',  function (val) {
if ((val.length != this.raster.getNx$()) || (val[0].length != this.raster.getNy$()) ) {
p$1.resizeRaster$I$I.apply(this, [val.length, val[0].length]);
}this.raster.setBlock$I$I$BAA(0, 0, val);
});

Clazz.newMeth(C$, 'setAll$IAA',  function (val) {
if ((val.length != this.raster.getNx$()) || (val[0].length != this.raster.getNy$()) ) {
p$1.resizeRaster$I$I.apply(this, [val.length, val[0].length]);
}this.raster.setBlock$I$I$IAA(0, 0, val);
});

Clazz.newMeth(C$, 'setAll$IAA$D$D$D$D',  function (val, xmin, xmax, ymin, ymax) {
this.setAll$IAA(val);
this.raster.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setAll$IA$I$D$D$D$D',  function (val, nx, xmin, xmax, ymin, ymax) {
if (val.length % nx != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster dimension must match number of values."]);
}p$1.resizeRaster$I$I.apply(this, [nx, (val.length/nx|0)]);
this.setAll$IA(val);
this.raster.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
});

Clazz.newMeth(C$, 'setAll$IA',  function (v) {
if (v.length != this.raster.getNx$() * this.raster.getNy$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster size must be set before using row-major format."]);
}for (var i=0; i < v.length; i++) {
this.setAtIndex$I$I(i, v[i]);
}
});

Clazz.newMeth(C$, 'setAtIndex$I$I',  function (i, v) {
var nx=this.raster.getNx$();
this.setValue$I$I$I(i % nx, (i/nx|0), v);
});

Clazz.newMeth(C$, 'setValue$I$I$I',  function (ix, iy, v) {
this.raster.setValue$I$I$B(ix, iy, ($b$[0] = v, $b$[0]));
});

Clazz.newMeth(C$, 'getAtIndex$I',  function (i) {
var Nx=this.raster.getNx$();
return this.get$I$I(i % Nx, (i/Nx|0));
});

Clazz.newMeth(C$, 'get$I$I',  function (ix, iy) {
return (this.raster.getValue$I$I(ix, iy) + 128);
});

Clazz.newMeth(C$, 'getAll$',  function () {
var N=this.raster.getNx$() * this.raster.getNy$();
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

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
if (this.raster == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.raster.indexToX$I(i);
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
if (this.raster == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.raster.xToIndex$D(x);
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
if (this.raster == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.raster.yToIndex$D(y);
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
if (this.raster == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data has not been set.  Invoke setAll before invoking this method."]);
}return this.raster.indexToY$I(i);
});

Clazz.newMeth(C$, 'indexFromPoint$D$D',  function (x, y) {
return this.raster.indexFromPoint$D$D(x, y);
});

Clazz.newMeth(C$, 'getMouseAdapter$',  function () {
if (this.mouseAdapter == null ) {
return ((P$.RasterFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "RasterFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.frames.RasterFrame'].mouse$java_awt_event_MouseEvent$Z.apply(this.b$['org.opensourcephysics.frames.RasterFrame'], [e, true]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.frames.RasterFrame'].mouse$java_awt_event_MouseEvent$Z.apply(this.b$['org.opensourcephysics.frames.RasterFrame'], [e, false]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.RasterFrame$3));
}return this.mouseAdapter;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
