(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SurfaceVertex");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','z'],'I',['project_index'],'O',['surface','org.opensourcephysics.display2d.SurfacePlot','projection','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$D$D$D$org_opensourcephysics_display2d_SurfacePlot',  function (ix, iy, iz, sp) {
;C$.$init$.apply(this);
this.surface=sp;
this.x=ix;
this.y=iy;
this.z=iz;
this.project_index=sp.master_project_indexV - 1;
}, 1);

Clazz.newMeth(C$, 'isInvalid$',  function () {
return Double.isNaN$D(this.z);
});

Clazz.newMeth(C$, 'projection$',  function () {
if (this.project_index != this.surface.master_project_indexV) {
this.projection=this.surface.projector.project$D$D$D(this.x, this.y, ((this.z - this.surface.zminV) * this.surface.zfactorV - 10));
this.project_index=this.surface.master_project_indexV;
}return this.projection;
});

Clazz.newMeth(C$, 'project$',  function () {
this.projection=this.surface.projector.project$D$D$D(this.x, this.y, ((this.z - this.surface.zminV) * this.surface.zfactorV - 10));
});

Clazz.newMeth(C$, 'transform$',  function () {
this.x=this.x / this.surface.projector.getXScaling$();
this.y=this.y / this.surface.projector.getYScaling$();
this.z=((this.surface.zmaxV - this.surface.zminV) * (this.z / this.surface.projector.getZScaling$() + 10) / 20 + this.surface.zminV);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
