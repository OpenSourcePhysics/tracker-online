(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'org.opensourcephysics.numerics.Util','org.opensourcephysics.display2d.SurfaceVertex','java.awt.Color','org.opensourcephysics.display2d.SurfacePlotProjector','org.opensourcephysics.display2d.ArrayData','java.awt.Rectangle','org.opensourcephysics.display2d.ZExpansion','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display2d.GridPointData','org.opensourcephysics.display2d.GridPlot','org.opensourcephysics.display.axes.XAxis','org.opensourcephysics.display2d.SurfacePlot','org.opensourcephysics.display2d.Plot2DLoader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SurfacePlot", null, null, ['org.opensourcephysics.display2d.Plot2D', 'org.opensourcephysics.display.False3D']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.labelFormat=$I$(1).newDecimalFormat$S("0.00");
this.calc_divisions=33;
this.disp_divisions=33;
this.plot_mode=0;
this.zmin=-2;
this.zmax=2;
this.autoscaleZ=true;
this.symmetricZ=false;
this.values1=Clazz.array($I$(2), [4]);
this.line_color=$I$(3).black;
this.invalidProjection=true;
this.iwidth=0;
this.iheight=0;
this.ampIndex=0;
this.master_project_indexV=0;
this.xLabel="x";
this.yLabel="y";
this.zLabel="z";
this.poly_x=Clazz.array(Integer.TYPE, [9]);
this.poly_y=Clazz.array(Integer.TYPE, [9]);
this.minmax=Clazz.array(Double.TYPE, [2]);
},1);

C$.$fields$=[['Z',['visible','isBoxed','isMesh','isScaleBox','isDisplayXY','isDisplayZ','isDisplayGrids','autoscaleZ','symmetricZ','invalidProjection'],'D',['zmin','zmax','color_factor','xmin','xmax','ymin','ymax','zminV','zmaxV','zfactorV'],'I',['calc_divisions','disp_divisions','plot_mode','factor_x','factor_y','t_x','t_y','t_z','click_x','click_y','iwidth','iheight','ampIndex','master_project_indexV'],'S',['xLabel','yLabel','zLabel'],'O',['labelFormat','java.text.DecimalFormat','griddata','org.opensourcephysics.display2d.GridData','projection','java.awt.Point','cop','org.opensourcephysics.display2d.SurfaceVertex','vertexArray','org.opensourcephysics.display2d.SurfaceVertex[]','+values1','line_color','java.awt.Color','projector','org.opensourcephysics.display2d.SurfacePlotProjector','legendFrame','javax.swing.JFrame','zMap','org.opensourcephysics.display2d.ZExpansion','poly_x','int[]','+poly_y','minmax','double[]','colors','java.awt.Color[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_display2d_GridData.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (_griddata) {
;C$.$init$.apply(this);
this.griddata=_griddata;
p$1.defaultVariables.apply(this, []);
this.autoscaleZ=true;
this.projector=Clazz.new_($I$(4,1));
this.projector.setDistance$D(200);
this.projector.set2DScaling$D(8);
this.projector.setRotationAngle$D(125);
this.projector.setElevationAngle$D(10);
this.update$();
}, 1);

Clazz.newMeth(C$, 'indexToX$I',  function (i) {
return this.griddata.indexToX$I(i);
});

Clazz.newMeth(C$, 'indexToY$I',  function (i) {
return this.griddata.indexToY$I(i);
});

Clazz.newMeth(C$, 'xToIndex$D',  function (x) {
return this.griddata.xToIndex$D(x);
});

Clazz.newMeth(C$, 'yToIndex$D',  function (y) {
return this.griddata.yToIndex$D(y);
});

Clazz.newMeth(C$, 'setAll$O',  function (obj) {
var val=obj;
p$1.copyData$DAA.apply(this, [val]);
this.update$();
});

Clazz.newMeth(C$, 'setAll$O$D$D$D$D',  function (obj, xmin, xmax, ymin, ymax) {
var val=obj;
p$1.copyData$DAA.apply(this, [val]);
if (this.griddata.isCellData$()) {
this.griddata.setCellScale$D$D$D$D(xmin, xmax, ymin, ymax);
} else {
this.griddata.setScale$D$D$D$D(xmin, xmax, ymin, ymax);
}this.update$();
});

Clazz.newMeth(C$, 'copyData$DAA',  function (val) {
if ((this.griddata != null ) && !(Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["SetAll only supports ArrayData for data storage."]);
}if ((this.griddata == null ) || (this.griddata.getNx$() != val.length) || (this.griddata.getNy$() != val[0].length)  ) {
this.griddata=Clazz.new_($I$(5,1).c$$I$I$I,[val.length, val[0].length, 1]);
this.setGridData$org_opensourcephysics_display2d_GridData(this.griddata);
}var data=this.griddata.getData$()[0];
var ny=data[0].length;
for (var i=0, nx=data.length; i < nx; i++) {
System.arraycopy$O$I$O$I$I(val[i], 0, data[i], 0, ny);
}
}, p$1);

Clazz.newMeth(C$, 'getGridData$',  function () {
return this.griddata;
});

Clazz.newMeth(C$, 'setGridData$org_opensourcephysics_display2d_GridData',  function (_griddata) {
this.griddata=_griddata;
});

Clazz.newMeth(C$, 'generateVerticesFromArray$org_opensourcephysics_display2d_ArrayData',  function (griddata) {
var data=griddata.getData$()[0];
var numRows=data.length;
var numCols=data[0].length;
if (numRows != numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Surface Plots require square datasets."]);
}this.calc_divisions=numRows - 1;
var xfactor=20 / (this.xmax - this.xmin);
var yfactor=20 / (this.ymax - this.ymin);
if ((this.vertexArray == null ) || (this.vertexArray.length != numRows * numCols) ) {
this.vertexArray=Clazz.array($I$(2), [numRows * numCols]);
}var dx=Math.abs(griddata.getDx$());
var dy=Math.abs(griddata.getDy$());
var x=this.xmin;
for (var ix=0; ix < numCols; ix++) {
var y=this.ymin;
for (var iy=0; iy < numRows; iy++) {
var iyd=(griddata.getDy$() > 0 ) ? iy : numCols - iy - 1 ;
var ixd=(griddata.getDx$() > 0 ) ? ix : numCols - ix - 1 ;
var zval=data[ixd][iyd];
if (this.zMap != null ) {
zval=this.zMap.evaluate$D(zval);
}this.vertexArray[ix * numRows + iy]=Clazz.new_([-10 + (x - this.xmin) * xfactor, -10 + (y - this.ymin) * yfactor, zval, this],$I$(2,1).c$$D$D$D$org_opensourcephysics_display2d_SurfacePlot);
y+=dy;
}
x+=dx;
}
data=null;
}, p$1);

Clazz.newMeth(C$, 'generateVerticesFromPoints$org_opensourcephysics_display2d_GridPointData',  function (griddata) {
var data=griddata.getData$();
var numRows=data.length;
var numCols=data[0].length;
if (numRows != numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Surface Plots require square datasets."]);
}this.calc_divisions=numRows - 1;
var xfactor=20 / (this.xmax - this.xmin);
var yfactor=20 / (this.ymax - this.ymin);
if ((this.vertexArray == null ) || (this.vertexArray.length != numRows * numCols) ) {
this.vertexArray=Clazz.array($I$(2), [numRows * numCols]);
}var dx=Math.abs(griddata.getDx$());
var dy=Math.abs(griddata.getDy$());
var x=this.xmin;
for (var ix=0; ix < numCols; ix++) {
var y=this.ymin;
for (var iy=0; iy < numRows; iy++) {
var iyd=(griddata.getDy$() > 0 ) ? iy : numCols - iy - 1 ;
var ixd=(griddata.getDx$() > 0 ) ? ix : numCols - ix - 1 ;
var zval=data[ixd][iyd][2];
if (this.zMap != null ) {
zval=this.zMap.evaluate$D(zval);
}this.vertexArray[ix * numRows + iy]=Clazz.new_([-10 + (x - this.xmin) * xfactor, -10 + (y - this.ymin) * yfactor, zval, this],$I$(2,1).c$$D$D$D$org_opensourcephysics_display2d_SurfacePlot);
y+=dy;
}
x+=dx;
}
data=null;
}, p$1);

Clazz.newMeth(C$, 'projectVertexArray$',  function () {
var tempArray=this.vertexArray;
if (tempArray == null ) {
return;
}for (var i=0, num=tempArray.length; i < num; i++) {
tempArray[i].project$();
}
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.griddata == null ) {
return;
}this.projector.setProjectionArea$java_awt_Rectangle(Clazz.new_([0, 0, panel.getBounds$().width, panel.getBounds$().height],$I$(6,1).c$$I$I$I$I));
if (this.invalidProjection || (this.iwidth != panel.getWidth$()) || (this.iheight != panel.getHeight$())  ) {
++this.master_project_indexV;
this.invalidProjection=false;
this.projectVertexArray$();
this.iwidth=panel.getWidth$();
this.iheight=panel.getHeight$();
}p$1.plotSurface$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'defaultVariables',  function () {
this.plot_mode=0;
this.isBoxed=true;
this.isMesh=true;
this.isScaleBox=false;
this.isDisplayXY=true;
this.isDisplayZ=true;
this.isDisplayGrids=false;
}, p$1);

Clazz.newMeth(C$, 'plottable$org_opensourcephysics_display2d_SurfaceVertexA',  function (values) {
try {
return (!values[0].isInvalid$() && !values[1].isInvalid$() && !values[2].isInvalid$() && !values[3].isInvalid$()  );
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return false;
}, p$1);

Clazz.newMeth(C$, 'setAxesScale',  function () {
var scale_x;
var scale_y;
var scale_z;
var divisor;
var longest;
if (!this.isScaleBox) {
this.projector.setScaling$D(1);
this.t_x=this.t_y=this.t_z=4;
return;
}scale_x=this.xmax - this.xmin;
scale_y=this.ymax - this.ymin;
scale_z=this.zmax - this.zmin;
if (scale_x < scale_y ) {
if (scale_y < scale_z ) {
longest=3;
divisor=scale_z;
} else {
longest=2;
divisor=scale_y;
}} else {
if (scale_x < scale_z ) {
longest=3;
divisor=scale_z;
} else {
longest=1;
divisor=scale_x;
}}scale_x/=divisor;
scale_y/=divisor;
scale_z/=divisor;
if ((scale_x < 0.2 ) || (scale_y < 0.2 ) && (scale_z < 0.2 )  ) {
switch (longest) {
case 1:
if (scale_y < scale_z ) {
scale_y/=scale_z;
scale_z=1.0;
} else {
scale_z/=scale_y;
scale_y=1.0;
}break;
case 2:
if (scale_x < scale_z ) {
scale_x/=scale_z;
scale_z=1.0;
} else {
scale_z/=scale_x;
scale_x=1.0;
}break;
case 3:
if (scale_y < scale_x ) {
scale_y/=scale_x;
scale_x=1.0;
} else {
scale_x/=scale_y;
scale_y=1.0;
}break;
}
}if (scale_x < 0.2 ) {
scale_x=1.0;
}this.projector.setXScaling$D(scale_x);
if (scale_y < 0.2 ) {
scale_y=1.0;
}this.projector.setYScaling$D(scale_y);
if (scale_z < 0.2 ) {
scale_z=1.0;
}this.projector.setZScaling$D(scale_z);
if (scale_x < 0.5 ) {
this.t_x=8;
} else {
this.t_x=4;
}if (scale_y < 0.5 ) {
this.t_y=8;
} else {
this.t_y=4;
}if (scale_z < 0.5 ) {
this.t_z=8;
} else {
this.t_z=4;
}}, p$1);

Clazz.newMeth(C$, 'getDispDivisions',  function () {
var plot_density;
plot_density=this.disp_divisions;
if (plot_density > this.calc_divisions) {
plot_density=this.calc_divisions;
}while ((this.calc_divisions % plot_density) != 0){
++plot_density;
}
return plot_density;
}, p$1);

Clazz.newMeth(C$, 'plotSurface$java_awt_Graphics',  function (g) {
var zi;
var zx;
var sx;
var sy;
var start_lx;
var end_lx;
var start_ly;
var end_ly;
zi=this.zmin;
zx=this.zmax;
var plot_density=p$1.getDispDivisions.apply(this, []);
var multiple_factor=(this.calc_divisions/plot_density|0);
this.disp_divisions=plot_density;
this.zmin=zi;
this.zmax=zx;
this.color_factor=0.8 / (this.zmax - this.zmin);
if ((this.plot_mode == 2) || (this.plot_mode == 3) || (this.plot_mode == 4) || (this.plot_mode == 5)  ) {
this.color_factor*=0.7499999999999999;
}if (this.vertexArray == null ) {
p$1.drawBoxGridsTicksLabels$java_awt_Graphics$Z.apply(this, [g, false]);
p$1.drawBoundingBox$java_awt_Graphics.apply(this, [g]);
return;
}if (this.plot_mode == 8) {
p$1.drawBoxGridsTicksLabels$java_awt_Graphics$Z.apply(this, [g, true]);
p$1.drawBoundingBox$java_awt_Graphics.apply(this, [g]);
return;
}p$1.drawBoxGridsTicksLabels$java_awt_Graphics$Z.apply(this, [g, false]);
this.zmaxV=this.zmax;
this.zminV=this.zmin;
this.zfactorV=20 / (this.zmaxV - this.zminV);
var distance=this.projector.getDistance$() * this.projector.getCosElevationAngle$();
this.cop=Clazz.new_([distance * this.projector.getSinRotationAngle$(), distance * this.projector.getCosRotationAngle$(), this.projector.getDistance$() * this.projector.getSinElevationAngle$(), this],$I$(2,1).c$$D$D$D$org_opensourcephysics_display2d_SurfacePlot);
this.cop.transform$();
var inc_x=this.cop.x > 0 ;
var inc_y=this.cop.y > 0 ;
if (inc_x) {
start_lx=0;
end_lx=this.calc_divisions;
sx=multiple_factor;
} else {
start_lx=this.calc_divisions;
end_lx=0;
sx=-multiple_factor;
}if (inc_y) {
start_ly=0;
end_ly=this.calc_divisions;
sy=multiple_factor;
} else {
start_ly=this.calc_divisions;
end_ly=0;
sy=-multiple_factor;
}if ((this.cop.x > 10 ) || (this.cop.x < -10 ) ) {
if ((this.cop.y > 10 ) || (this.cop.y < -10 ) ) {
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, start_lx, start_ly, end_lx, end_ly, sx, sy]);
} else {
var split_y=(((this.cop.y + 10) * plot_density / 20)|0) * multiple_factor;
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, start_lx, 0, end_lx, split_y, sx, multiple_factor]);
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, start_lx, this.calc_divisions, end_lx, split_y, sx, -multiple_factor]);
}} else {
if ((this.cop.y > 10 ) || (this.cop.y < -10 ) ) {
var split_x=(((this.cop.x + 10) * plot_density / 20)|0) * multiple_factor;
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, 0, start_ly, split_x, end_ly, multiple_factor, sy]);
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, this.calc_divisions, start_ly, split_x, end_ly, -multiple_factor, sy]);
} else {
var split_x=(((this.cop.x + 10) * plot_density / 20)|0) * multiple_factor;
var split_y=(((this.cop.y + 10) * plot_density / 20)|0) * multiple_factor;
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, 0, 0, split_x, split_y, multiple_factor, multiple_factor]);
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, 0, this.calc_divisions, split_x, split_y, multiple_factor, -multiple_factor]);
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, this.calc_divisions, 0, split_x, split_y, -multiple_factor, multiple_factor]);
p$1.plotArea$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, this.calc_divisions, this.calc_divisions, split_x, split_y, -multiple_factor, -multiple_factor]);
}}if (this.isBoxed) {
p$1.drawBoundingBox$java_awt_Graphics.apply(this, [g]);
}}, p$1);

Clazz.newMeth(C$, 'plotPlane$java_awt_Graphics$org_opensourcephysics_display2d_SurfaceVertexA$I',  function (g, vertex, verticescount) {
var count;
var loop;
var index;
var z;
var result;
var low1;
var low2;
var valid1;
var valid2;
if (verticescount < 3) {
return;
}count=0;
z=0.0;
this.line_color=$I$(3).black;
low1=(vertex[0].z < this.zmin );
valid1=!low1 && (vertex[0].z <= this.zmax ) ;
index=1;
for (loop=0; loop < verticescount; loop++) {
low2=(vertex[index].z < this.zmin );
valid2=!low2 && (vertex[index].z <= this.zmax ) ;
if ((valid1 || valid2 ) || (!!(low1 ^ low2)) ) {
if (!valid1) {
if (low1) {
result=this.zmin;
} else {
result=this.zmax;
}var ratio=(result - vertex[index].z) / (vertex[loop].z - vertex[index].z);
var new_x=ratio * (vertex[loop].x - vertex[index].x) + vertex[index].x;
var new_y=ratio * (vertex[loop].y - vertex[index].y) + vertex[index].y;
if (low1) {
this.projection=this.projector.project$D$D$D(new_x, new_y, -10);
} else {
this.projection=this.projector.project$D$D$D(new_x, new_y, 10);
}this.poly_x[count]=this.projection.x;
this.poly_y[count]=this.projection.y;
++count;
z+=result;
}if (valid2) {
this.projection=vertex[index].projection$();
this.poly_x[count]=this.projection.x;
this.poly_y[count]=this.projection.y;
++count;
z+=vertex[index].z;
} else {
if (low2) {
result=this.zmin;
} else {
result=this.zmax;
}var ratio=(result - vertex[loop].z) / (vertex[index].z - vertex[loop].z);
var new_x=ratio * (vertex[index].x - vertex[loop].x) + vertex[loop].x;
var new_y=ratio * (vertex[index].y - vertex[loop].y) + vertex[loop].y;
if (low2) {
this.projection=this.projector.project$D$D$D(new_x, new_y, -10);
} else {
this.projection=this.projector.project$D$D$D(new_x, new_y, 10);
}this.poly_x[count]=this.projection.x;
this.poly_y[count]=this.projection.y;
++count;
z+=result;
}}if (++index == verticescount) {
index=0;
}valid1=valid2;
low1=low2;
}
if (count > 0) {
switch (this.plot_mode) {
case 0:
z=0.8 - (z / count - this.zmin) * this.color_factor;
g.setColor$java_awt_Color($I$(3).getHSBColor$F$F$F(z, 1.0, 1.0));
break;
case 1:
z=(z / count - this.zmin) * this.color_factor;
g.setColor$java_awt_Color($I$(3).getHSBColor$F$F$F(0, 0, z));
if (z < 0.3 ) {
this.line_color=Clazz.new_($I$(3,1).c$$F$F$F,[0.6, 0.6, 0.6]);
}break;
case 2:
z=(z / count - this.zmin) * this.color_factor + 0.4;
g.setColor$java_awt_Color($I$(3,"getHSBColor$F$F$F",[(1 - z), 0.7, z]));
break;
case 3:
z=(z / count - this.zmin) * this.color_factor + 0.4;
g.setColor$java_awt_Color($I$(3).getHSBColor$F$F$F(0.0, 0.7, z));
break;
case 4:
z=(z / count - this.zmin) * this.color_factor + 0.4;
g.setColor$java_awt_Color($I$(3).getHSBColor$F$F$F(0.3, 0.7, z));
break;
case 5:
z=(z / count - this.zmin) * this.color_factor + 0.4;
g.setColor$java_awt_Color($I$(3).getHSBColor$F$F$F(0.65, 0.7, z));
break;
case 8:
default:
g.setColor$java_awt_Color($I$(3).lightGray);
}
g.fillPolygon$IA$IA$I(this.poly_x, this.poly_y, count);
g.setColor$java_awt_Color(this.line_color);
if (this.isMesh) {
this.poly_x[count]=this.poly_x[0];
this.poly_y[count]=this.poly_y[0];
++count;
g.drawPolygon$IA$IA$I(this.poly_x, this.poly_y, count);
}}}, p$1);

Clazz.newMeth(C$, 'plotArea$java_awt_Graphics$I$I$I$I$I$I',  function (g, start_lx, start_ly, end_lx, end_ly, sx, sy) {
start_lx*=this.calc_divisions + 1;
sx*=this.calc_divisions + 1;
end_lx*=this.calc_divisions + 1;
var lx=start_lx;
var ly=start_ly;
while (ly != end_ly){
this.values1[1]=this.vertexArray[lx + ly];
this.values1[2]=this.vertexArray[lx + ly + sy ];
while (lx != end_lx){
this.values1[0]=this.values1[1];
this.values1[1]=this.vertexArray[lx + sx + ly ];
this.values1[3]=this.values1[2];
this.values1[2]=this.vertexArray[lx + sx + ly + sy ];
if (p$1.plottable$org_opensourcephysics_display2d_SurfaceVertexA.apply(this, [this.values1])) {
p$1.plotPlane$java_awt_Graphics$org_opensourcephysics_display2d_SurfaceVertexA$I.apply(this, [g, this.values1, 4]);
}lx+=sx;
}
ly+=sy;
lx=start_lx;
}
}, p$1);

Clazz.newMeth(C$, 'drawBoxGridsTicksLabels$java_awt_Graphics$Z',  function (g, draw_axes) {
var projection;
var tickpos;
var x_left=false;
var y_left=false;
var x;
var y;
var i;
x=Clazz.array(Integer.TYPE, [5]);
y=Clazz.array(Integer.TYPE, [5]);
if (this.projector == null ) {
return;
}if (draw_axes) {
p$1.drawBase$java_awt_Graphics$IA$IA.apply(this, [g, x, y]);
projection=this.projector.project$D$D$D(0, 0, -10);
x[0]=projection.x;
y[0]=projection.y;
projection=this.projector.project$D$D$D(10.5, 0, -10);
g.drawLine$I$I$I$I(x[0], y[0], projection.x, projection.y);
if (projection.x < x[0]) {
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, ((1.05 * (projection.x - x[0]))|0) + x[0], ((1.05 * (projection.y - y[0]))|0) + y[0], this.xLabel, 2, 0]);
} else {
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, ((1.05 * (projection.x - x[0]))|0) + x[0], ((1.05 * (projection.y - y[0]))|0) + y[0], this.xLabel, 0, 0]);
}projection=this.projector.project$D$D$D(0, 11.5, -10);
g.drawLine$I$I$I$I(x[0], y[0], projection.x, projection.y);
if (projection.x < x[0]) {
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, ((1.05 * (projection.x - x[0]))|0) + x[0], ((1.05 * (projection.y - y[0]))|0) + y[0], this.yLabel, 2, 0]);
} else {
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, ((1.05 * (projection.x - x[0]))|0) + x[0], ((1.05 * (projection.y - y[0]))|0) + y[0], this.yLabel, 0, 0]);
}projection=this.projector.project$D$D$D(0, 0, 10.5);
g.drawLine$I$I$I$I(x[0], y[0], projection.x, projection.y);
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, ((1.05 * (projection.x - x[0]))|0) + x[0], ((1.05 * (projection.y - y[0]))|0) + y[0], this.zLabel, 1, 1]);
} else {
this.factor_x=this.factor_y=1;
projection=this.projector.project$D$D$D(0, 0, -10);
x[0]=projection.x;
projection=this.projector.project$D$D$D(10.5, 0, -10);
y_left=projection.x > x[0];
i=projection.y;
projection=this.projector.project$D$D$D(-10.5, 0, -10);
if (projection.y > i) {
this.factor_x=-1;
y_left=projection.x > x[0];
}projection=this.projector.project$D$D$D(0, 10.5, -10);
x_left=projection.x > x[0];
i=projection.y;
projection=this.projector.project$D$D$D(0, -10.5, -10);
if (projection.y > i) {
this.factor_y=-1;
x_left=projection.x > x[0];
}p$1.setAxesScale.apply(this, []);
p$1.drawBase$java_awt_Graphics$IA$IA.apply(this, [g, x, y]);
if (this.isBoxed) {
projection=this.projector.project$D$D$D(-this.factor_x * 10, -this.factor_y * 10, -10);
x[0]=projection.x;
y[0]=projection.y;
projection=this.projector.project$D$D$D(-this.factor_x * 10, -this.factor_y * 10, 10);
x[1]=projection.x;
y[1]=projection.y;
projection=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, 10);
x[2]=projection.x;
y[2]=projection.y;
projection=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, -10);
x[3]=projection.x;
y[3]=projection.y;
x[4]=x[0];
y[4]=y[0];
if (this.plot_mode != 7) {
if (this.plot_mode == 8) {
g.setColor$java_awt_Color($I$(3).lightGray);
} else {
g.setColor$java_awt_Color(Clazz.new_($I$(3,1).c$$I$I$I,[192, 220, 192]));
}g.fillPolygon$IA$IA$I(x, y, 4);
}g.setColor$java_awt_Color($I$(3).black);
g.drawPolygon$IA$IA$I(x, y, 5);
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, 10);
x[2]=projection.x;
y[2]=projection.y;
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, -10);
x[3]=projection.x;
y[3]=projection.y;
x[4]=x[0];
y[4]=y[0];
if (this.plot_mode != 7) {
if (this.plot_mode == 8) {
g.setColor$java_awt_Color($I$(3).lightGray);
} else {
g.setColor$java_awt_Color(Clazz.new_($I$(3,1).c$$I$I$I,[192, 220, 192]));
}g.fillPolygon$IA$IA$I(x, y, 4);
}g.setColor$java_awt_Color($I$(3).black);
g.drawPolygon$IA$IA$I(x, y, 5);
} else if (this.isDisplayZ) {
projection=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, -10);
x[0]=projection.x;
y[0]=projection.y;
projection=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, 10);
g.drawLine$I$I$I$I(x[0], y[0], projection.x, projection.y);
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, -10);
x[0]=projection.x;
y[0]=projection.y;
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, 10);
g.drawLine$I$I$I$I(x[0], y[0], projection.x, projection.y);
}for (i=-9; i <= 9; i++) {
if (this.isDisplayXY || this.isDisplayGrids ) {
if (!this.isDisplayGrids || (i % ((this.t_y/2|0)) == 0) || this.isDisplayXY  ) {
if (this.isDisplayGrids && (i % this.t_y == 0) ) {
projection=this.projector.project$D$D$D(-this.factor_x * 10, i, -10);
} else {
if (i % this.t_y != 0) {
projection=this.projector.project$D$D$D(this.factor_x * 9.8, i, -10);
} else {
projection=this.projector.project$D$D$D(this.factor_x * 9.5, i, -10);
}}tickpos=this.projector.project$D$D$D(this.factor_x * 10, i, -10);
g.drawLine$I$I$I$I(projection.x, projection.y, tickpos.x, tickpos.y);
if ((i % this.t_y == 0) && this.isDisplayXY ) {
tickpos=this.projector.project$D$D$D(this.factor_x * 10.5, i, -10);
if (y_left) {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.ymax - this.ymin) + this.ymin, 0, 0]);
} else {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.ymax - this.ymin) + this.ymin, 2, 0]);
}}}if (!this.isDisplayGrids || (i % ((this.t_x/2|0)) == 0) || this.isDisplayXY  ) {
if (this.isDisplayGrids && (i % this.t_x == 0) ) {
projection=this.projector.project$D$D$D(i, -this.factor_y * 10, -10);
} else {
if (i % this.t_x != 0) {
projection=this.projector.project$D$D$D(i, this.factor_y * 9.8, -10);
} else {
projection=this.projector.project$D$D$D(i, this.factor_y * 9.5, -10);
}}tickpos=this.projector.project$D$D$D(i, this.factor_y * 10, -10);
g.drawLine$I$I$I$I(projection.x, projection.y, tickpos.x, tickpos.y);
if ((i % this.t_x == 0) && this.isDisplayXY ) {
tickpos=this.projector.project$D$D$D(i, this.factor_y * 10.5, -10);
if (x_left) {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.xmax - this.xmin) + this.xmin, 0, 0]);
} else {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.xmax - this.xmin) + this.xmin, 2, 0]);
}}}}if (this.isDisplayXY) {
tickpos=this.projector.project$D$D$D(0, this.factor_y * 14, -10);
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, tickpos.x, tickpos.y, this.xLabel, 1, 0]);
tickpos=this.projector.project$D$D$D(this.factor_x * 14, 0, -10);
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, tickpos.x, tickpos.y, this.yLabel, 1, 0]);
}if (this.isDisplayZ || (this.isDisplayGrids && this.isBoxed ) ) {
if (!this.isDisplayGrids || (i % ((this.t_z/2|0)) == 0) || this.isDisplayZ  ) {
if (this.isBoxed && this.isDisplayGrids && (i % this.t_z == 0)  ) {
projection=this.projector.project$D$D$D(-this.factor_x * 10, -this.factor_y * 10, i);
tickpos=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, i);
} else {
if (i % this.t_z == 0) {
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 9.5, i);
} else {
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 9.8, i);
}tickpos=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, i);
}g.drawLine$I$I$I$I(projection.x, projection.y, tickpos.x, tickpos.y);
if (this.isDisplayZ) {
tickpos=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10.5, i);
if (i % this.t_z == 0) {
if (x_left) {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.zmax - this.zmin) + this.zmin, 0, 1]);
} else {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.zmax - this.zmin) + this.zmin, 2, 1]);
}}}if (this.isDisplayGrids && this.isBoxed && (i % this.t_z == 0)  ) {
projection=this.projector.project$D$D$D(-this.factor_x * 10, -this.factor_y * 10, i);
tickpos=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, i);
} else {
if (i % this.t_z == 0) {
projection=this.projector.project$D$D$D(this.factor_x * 9.5, -this.factor_y * 10, i);
} else {
projection=this.projector.project$D$D$D(this.factor_x * 9.8, -this.factor_y * 10, i);
}tickpos=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, i);
}g.drawLine$I$I$I$I(projection.x, projection.y, tickpos.x, tickpos.y);
if (this.isDisplayZ) {
tickpos=this.projector.project$D$D$D(this.factor_x * 10.5, -this.factor_y * 10, i);
if (i % this.t_z == 0) {
if (y_left) {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.zmax - this.zmin) + this.zmin, 0, 1]);
} else {
p$1.outFloat$java_awt_Graphics$I$I$D$I$I.apply(this, [g, tickpos.x, tickpos.y, (i + 10) / 20 * (this.zmax - this.zmin) + this.zmin, 2, 1]);
}}}if (this.isDisplayGrids && this.isBoxed ) {
if (i % this.t_y == 0) {
projection=this.projector.project$D$D$D(-this.factor_x * 10, i, -10);
tickpos=this.projector.project$D$D$D(-this.factor_x * 10, i, 10);
g.drawLine$I$I$I$I(projection.x, projection.y, tickpos.x, tickpos.y);
}if (i % this.t_x == 0) {
projection=this.projector.project$D$D$D(i, -this.factor_y * 10, -10);
tickpos=this.projector.project$D$D$D(i, -this.factor_y * 10, 10);
g.drawLine$I$I$I$I(projection.x, projection.y, tickpos.x, tickpos.y);
}}}}}
}}, p$1);

Clazz.newMeth(C$, 'drawBase$java_awt_Graphics$IA$IA',  function (g, x, y) {
var projection=this.projector.project$D$D$D(-10, -10, -10);
x[0]=projection.x;
y[0]=projection.y;
projection=this.projector.project$D$D$D(-10, 10, -10);
x[1]=projection.x;
y[1]=projection.y;
projection=this.projector.project$D$D$D(10, 10, -10);
x[2]=projection.x;
y[2]=projection.y;
projection=this.projector.project$D$D$D(10, -10, -10);
x[3]=projection.x;
y[3]=projection.y;
x[4]=x[0];
y[4]=y[0];
if (this.plot_mode != 7) {
if (this.plot_mode == 8) {
g.setColor$java_awt_Color($I$(3).lightGray);
} else {
g.setColor$java_awt_Color(Clazz.new_($I$(3,1).c$$I$I$I,[192, 220, 192]));
}g.fillPolygon$IA$IA$I(x, y, 4);
}g.setColor$java_awt_Color($I$(3).black);
g.drawPolygon$IA$IA$I(x, y, 5);
}, p$1);

Clazz.newMeth(C$, 'drawBoundingBox$java_awt_Graphics',  function (g) {
var startingpoint;
var projection;
startingpoint=this.projector.project$D$D$D(this.factor_x * 10, this.factor_y * 10, 10);
g.setColor$java_awt_Color($I$(3).black);
projection=this.projector.project$D$D$D(-this.factor_x * 10, this.factor_y * 10, 10);
g.drawLine$I$I$I$I(startingpoint.x, startingpoint.y, projection.x, projection.y);
projection=this.projector.project$D$D$D(this.factor_x * 10, -this.factor_y * 10, 10);
g.drawLine$I$I$I$I(startingpoint.x, startingpoint.y, projection.x, projection.y);
projection=this.projector.project$D$D$D(this.factor_x * 10, this.factor_y * 10, -10);
g.drawLine$I$I$I$I(startingpoint.x, startingpoint.y, projection.x, projection.y);
}, p$1);

Clazz.newMeth(C$, 'outString$java_awt_Graphics$I$I$S$I$I',  function (g, x, y, s, x_align, y_align) {
if ((s == null ) || s.trim$().equals$O("") ) {
return;
}switch (y_align) {
case 0:
y+=g.getFontMetrics$java_awt_Font(g.getFont$()).getAscent$();
break;
case 1:
y+=(g.getFontMetrics$java_awt_Font(g.getFont$()).getAscent$()/2|0);
break;
}
switch (x_align) {
case 0:
g.drawString$S$I$I(s, x, y);
break;
case 2:
g.drawString$S$I$I(s, x - g.getFontMetrics$java_awt_Font(g.getFont$()).stringWidth$S(s), y);
break;
case 1:
g.drawString$S$I$I(s, x - (g.getFontMetrics$java_awt_Font(g.getFont$()).stringWidth$S(s)/2|0), y);
break;
}
}, p$1);

Clazz.newMeth(C$, 'outFloat$java_awt_Graphics$I$I$D$I$I',  function (g, x, y, f, x_align, y_align) {
var s=this.labelFormat.format$D(f);
p$1.outString$java_awt_Graphics$I$I$S$I$I.apply(this, [g, x, y, s, x_align, y_align]);
}, p$1);

Clazz.newMeth(C$, 'setPaletteType$I',  function (type) {
this.plot_mode=type;
});

Clazz.newMeth(C$, 'setIndexes$IA',  function (indexes) {
this.ampIndex=indexes[0];
});

Clazz.newMeth(C$, 'setLabelFormat$S',  function (_format) {
this.labelFormat=$I$(1).newDecimalFormat$S(_format);
});

Clazz.newMeth(C$, 'setAxisLabels$S$S$S',  function (xLabel, yLabel, zLabel) {
this.xLabel=xLabel;
this.yLabel=yLabel;
this.zLabel=zLabel;
});

Clazz.newMeth(C$, 'setAutoscaleZ$Z$D$D',  function (isAutoscale, floor, ceil) {
this.autoscaleZ=isAutoscale;
if (this.autoscaleZ) {
this.update$();
} else {
this.zmax=ceil;
this.zmin=floor;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
}}});

Clazz.newMeth(C$, 'setSymmetricZ$Z',  function (symmetric) {
this.symmetricZ=symmetric;
});

Clazz.newMeth(C$, 'isSymmetricZ$',  function () {
return this.symmetricZ;
});

Clazz.newMeth(C$, 'isAutoscaleZ$',  function () {
return this.autoscaleZ;
});

Clazz.newMeth(C$, 'getFloor$',  function () {
return this.zmin;
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.zmax;
});

Clazz.newMeth(C$, 'setExpandedZ$Z$D',  function (expanded, expansionFactor) {
if (expanded && (expansionFactor > 0 ) ) {
this.zMap=Clazz.new_($I$(7,1).c$$D,[expansionFactor]);
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
} else {
this.zMap=null;
}});

Clazz.newMeth(C$, 'update$',  function () {
if (this.griddata == null ) {
return;
}if (this.autoscaleZ) {
this.griddata.getZRange$I$DA(this.ampIndex, this.minmax);
if (this.symmetricZ) {
this.zmax=Math.max(Math.abs(this.minmax[1]), Math.abs(this.minmax[0]));
this.zmin=-this.zmax;
} else {
this.zmax=this.minmax[1];
this.zmin=this.minmax[0];
}if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.zmin, this.zmax);
}}var left=this.griddata.getLeft$();
var right=this.griddata.getRight$();
var top=this.griddata.getTop$();
var bottom=this.griddata.getBottom$();
this.xmin=Math.min(left, right);
this.xmax=Math.max(left, right);
this.ymin=Math.min(bottom, top);
this.ymax=Math.max(bottom, top);
if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.ArrayData")) {
p$1.generateVerticesFromArray$org_opensourcephysics_display2d_ArrayData.apply(this, [this.griddata]);
} else if (Clazz.instanceOf(this.griddata, "org.opensourcephysics.display2d.GridPointData")) {
p$1.generateVerticesFromPoints$org_opensourcephysics_display2d_GridPointData.apply(this, [this.griddata]);
}this.updateLegend$();
});

Clazz.newMeth(C$, 'setTranslation$I$I',  function (xpix, ypix) {
this.projector.set2DTranslation$I$I(xpix, ypix);
});

Clazz.newMeth(C$, 'setRotationAngle$D',  function (angle) {
this.projector.setRotationAngle$D(angle);
});

Clazz.newMeth(C$, 'setElevationAngle$D',  function (angle) {
this.projector.setElevationAngle$D(angle);
});

Clazz.newMeth(C$, 'setDistance$D',  function (distance) {
this.projector.setDistance$D(distance);
});

Clazz.newMeth(C$, 'set2DScaling$D',  function (scale) {
this.projector.set2DScaling$D(scale);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel',  function (e, drawingPanel) {
this.click_x=e.getX$();
this.click_y=e.getY$();
return true;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel',  function (e, drawingPanel) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent$org_opensourcephysics_display_DrawingPanel',  function (e, drawingPanel) {
var new_value=0.0;
var x=e.getX$();
var y=e.getY$();
if (e.isControlDown$()) {
this.projector.set2D_xTranslation$I(this.projector.get2D_xTranslation$() + (x - this.click_x));
this.projector.set2D_yTranslation$I(this.projector.get2D_yTranslation$() + (y - this.click_y));
} else if (e.isShiftDown$()) {
new_value=this.projector.get2DScaling$() + (y - this.click_y) * 0.5;
if (new_value > 60.0 ) {
new_value=60.0;
}if (new_value < 2.0 ) {
new_value=2.0;
}this.projector.set2DScaling$D(new_value);
} else {
new_value=this.projector.getRotationAngle$() + (x - this.click_x);
while (new_value > 360 ){
new_value-=360;
}
while (new_value < 0 ){
new_value+=360;
}
this.projector.setRotationAngle$D(new_value);
new_value=this.projector.getElevationAngle$() + (y - this.click_y);
if (new_value > 90 ) {
new_value=90;
} else if (new_value < 0 ) {
new_value=0;
}this.projector.setElevationAngle$D(new_value);
}this.click_x=x;
this.click_y=y;
this.invalidProjection=true;
drawingPanel.render$();
});

Clazz.newMeth(C$, 'setShowGridLines$Z',  function (show) {
this.isMesh=show;
});

Clazz.newMeth(C$, 'setGridLineColor$java_awt_Color',  function (c) {
this.line_color=c;
});

Clazz.newMeth(C$, 'updateLegend$',  function () {
if ((this.legendFrame != null ) && this.legendFrame.isVisible$() && this.legendFrame.isDisplayable$()  ) {
this.showLegend$();
}});

Clazz.newMeth(C$, 'showLegend$',  function () {
var dp=Clazz.new_($I$(8,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(11).getString$S("GUIUtils.Legend")],$I$(10,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(true);
this.legendFrame.setContentPane$java_awt_Container(dp);
var numColors=256;
var pointdata=Clazz.new_($I$(12,1).c$$I$I$I,[numColors + 2, 1, 1]);
var data=pointdata.getData$();
var delta=(this.zmax - this.zmin) / (numColors);
var cval=this.zmin - delta / 2;
for (var i=0, n=data.length; i < n; i++) {
var z=cval;
if (this.zMap != null ) {
z=this.zMap.evaluate$D(z);
}data[i][0][2]=z;
cval+=delta;
}
pointdata.setScale$D$D$D$D(this.zmin - delta, this.zmax + delta, 0, 1);
var cb=Clazz.new_($I$(13,1).c$$org_opensourcephysics_display2d_GridData,[pointdata]);
cb.setShowGridLines$Z(false);
cb.setAutoscaleZ$Z$D$D(false, this.zmin, this.zmax);
if (this.colors == null ) {
this.colors=Clazz.array($I$(3), [numColors]);
}this.computeColors$();
cb.setColorPalette$java_awt_ColorA(this.colors);
cb.update$();
dp.addDrawable$org_opensourcephysics_display_Drawable(cb);
var xaxis=Clazz.new_($I$(14,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'computeColors$',  function () {
if (this.colors == null ) {
return;
}var n=this.colors.length;
var z=0;
var dz=1.0 / n;
for (var i=0; i < n; i++) {
this.colors[i]=this.getZColor$D(z);
z+=dz;
}
});

Clazz.newMeth(C$, 'getZColor$D',  function (z) {
switch (this.plot_mode) {
case 0:
z=0.8 - z * 0.8;
return $I$(3).getHSBColor$F$F$F(z, 1.0, 1.0);
case 1:
z=z * 0.8;
return $I$(3).getHSBColor$F$F$F(0, 0, z);
case 2:
z=z * 0.6 + 0.4;
return $I$(3,"getHSBColor$F$F$F",[(1 - z), 0.7, z]);
case 3:
z=z * 0.6 + 0.4;
return $I$(3).getHSBColor$F$F$F(0.0, 0.7, z);
case 4:
z=z * 0.6 + 0.4;
return $I$(3).getHSBColor$F$F$F(0.3, 0.7, z);
case 5:
z=z * 0.6 + 0.4;
return $I$(3).getHSBColor$F$F$F(0.65, 0.7, z);
case 8:
default:
return $I$(3).lightGray;
}
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (colors) {
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (floorColor, ceilColor) {
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return ((P$.SurfacePlot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SurfacePlot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.display2d.Plot2DLoader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(15,1).c$$org_opensourcephysics_display2d_GridData,[null]);
});
})()
), Clazz.new_($I$(16,1),[this, null],P$.SurfacePlot$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
