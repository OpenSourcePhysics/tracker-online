(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.util.HashSet','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.tools.ArrayInspector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.editable=true;
this.uneditablePropNames=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['editable'],'O',['control','org.opensourcephysics.controls.XMLControl','uneditablePropNames','java.util.Collection']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
Clazz.super_(C$, this);
this.control=control;
}, 1);

Clazz.newMeth(C$, 'getColumnCount$',  function () {
if (this.control == null ) return 0;
return 2;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
return (column == 0) ? $I$(2).XML_NAME : $I$(2).XML_VALUE;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
if (this.control == null ) return 0;
return this.control.getPropsRaw$().size$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
try {
var val=this.control.getPropsRaw$().get$I(row);
var content=val.getPropertyContent$().get$I(0);
if (content.toString().indexOf$S("![CDATA[") > -1) {
content=this.control.getString$S(val.getPropertyName$());
}return (column == 0) ? val.getPropertyName$() : content;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
if (col == 0) {
return false;
}var propName=this.getValueAt$I$I(row, 0);
if (this.uneditablePropNames.contains$O(propName)) {
return false;
}var value=this.getValueAt$I$I(row, col);
if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLControl")) {
return true;
} else if (Clazz.instanceOf(value, "org.opensourcephysics.controls.XMLProperty")) {
var prop=value;
var parent=prop.getParentProperty$();
switch (parent.getPropertyType$()) {
case 4:
return $I$(3).canInspect$org_opensourcephysics_controls_XMLProperty(parent);
case 5:
return true;
default:
return false;
}
}return true;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
if (value == null ) {
return;
}var changed=false;
if (Clazz.instanceOf(value, "java.lang.String")) {
var s=value;
var prop=this.control.getPropsRaw$().get$I(row);
changed=!s.equals$O(this.control.getString$S(prop.getPropertyName$()));
switch (prop.getPropertyType$()) {
case 3:
this.control.setValue$S$O(prop.getPropertyName$(), s);
break;
case 0:
try {
this.control.setValue$S$I(prop.getPropertyName$(), Integer.parseInt$S(s));
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
break;
case 1:
try {
this.control.setValue$S$D(prop.getPropertyName$(), Double.parseDouble$S(s));
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
break;
case 2:
var bool=s.toLowerCase$().startsWith$S("t");
changed=bool != this.control.getBoolean$S(prop.getPropertyName$()) ;
this.control.setValue$S$Z(prop.getPropertyName$(), bool);
break;
case 6:
var childControl=this.control.getChildControl$S(prop.getPropertyName$());
if ((childControl.getObjectClass$() === Clazz.getClass(Character) ) && (s.length$() == 1) ) {
var c=Clazz.new_(Character.c$$C,[s.charAt$I(0)]);
changed=!c.equals$O(this.control.getObject$S(prop.getPropertyName$()));
this.control.setValue$S$O(prop.getPropertyName$(), c);
}break;
}
}if (changed) {
this.fireTableCellUpdated$I$I(row, col);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
