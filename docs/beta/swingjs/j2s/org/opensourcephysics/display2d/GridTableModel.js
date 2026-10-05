(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.controls.ControlUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['component'],'O',['griddata','org.opensourcephysics.display2d.GridData']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display2d_GridData$I',  function (griddata, component) {
Clazz.super_(C$, this);
this.griddata=griddata;
this.component=component;
}, 1);

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.griddata.getNx$() + 1;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (c) {
if (c == 0) {
return "j\\i";
}return "" + (c - 1);
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.griddata.getNx$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
if (columnIndex == 0) {
return Integer.valueOf$I(rowIndex);
}return $I$(1,"f3$D",[this.griddata.getValue$I$I$I(columnIndex - 1, rowIndex, this.component)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
