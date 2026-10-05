(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'javax.swing.JTabbedPane','org.opensourcephysics.display2d.GridDataTable','javax.swing.JScrollPane']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridTableFrame", null, 'org.opensourcephysics.display.OSPFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabbedPane=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['griddata','org.opensourcephysics.display2d.GridData','tabbedPane','javax.swing.JTabbedPane','tables','org.opensourcephysics.display2d.GridDataTable[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData',  function (griddata) {
Clazz.super_(C$, this);
this.setTitle$S("Grid-Data Table");
this.setSize$I$I(400, 300);
this.griddata=griddata;
var n=griddata.getComponentCount$();
this.tables=Clazz.array($I$(2), [n]);
for (var i=0; i < n; i++) {
this.tables[i]=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display2d_GridData$I,[griddata, i]);
var scrollpane=Clazz.new_($I$(3,1).c$$java_awt_Component,[this.tables[i]]);
scrollpane.createHorizontalScrollBar$();
if (n == 1) {
this.getContentPane$().add$java_awt_Component$O(scrollpane, "Center");
return;
}this.tabbedPane.addTab$S$java_awt_Component(griddata.getComponentName$I(i), scrollpane);
}
this.getContentPane$().add$java_awt_Component$O(this.tabbedPane, "Center");
}, 1);

Clazz.newMeth(C$, 'refreshTable$',  function () {
for (var i=0, n=this.tables.length; i < n; i++) {
this.tables[i].refreshTable$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
