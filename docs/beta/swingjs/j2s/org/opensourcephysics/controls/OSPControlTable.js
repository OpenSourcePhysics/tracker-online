(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.numerics.DoubleArray','org.opensourcephysics.numerics.IntegerArray','org.opensourcephysics.controls.OSPControlTable','java.awt.Color','java.util.HashMap','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.numerics.Util','org.opensourcephysics.controls.OSPCombo','org.opensourcephysics.controls.Control',['org.opensourcephysics.controls.OSPControlTable','.OSPControlTableLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPControlTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.XMLTable', 'org.opensourcephysics.controls.Control');
C$.$classes$=[['OSPControlTableLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.valueCache=Clazz.new_($I$(5,1));
this.lockValues=false;
},1);

C$.$fields$=[['Z',['lockValues'],'O',['valueCache','java.util.HashMap','format','java.text.DecimalFormat']]
,['O',['ERROR_COLOR','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_controls_XMLControlElement.apply(this, [Clazz.new_($I$(6,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControlElement',  function (control) {
;C$.superclazz.c$$org_opensourcephysics_controls_XMLControl.apply(this,[control]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
this.tableModel.control.setLockValues$Z(lock);
this.lockValues=lock;
if (!this.lockValues) {
this.refresh$();
}});

Clazz.newMeth(C$, 'setValue$S$O',  function (par, val) {
if (this.getBackgroundColor$S(par) === C$.ERROR_COLOR ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
}this.tableModel.control.setValue$S$O(par, val);
if (!this.lockValues) {
this.refresh$();
}});

Clazz.newMeth(C$, 'setDecimalFormat$S',  function (pattern) {
if (pattern == null ) {
this.format=null;
} else {
this.format=$I$(7).newDecimalFormat$S(pattern);
}});

Clazz.newMeth(C$, 'setValue$S$D',  function (par, val) {
if (this.format == null ) {
this.setValue$S$O(par, Double.toString$D(val));
} else {
this.setValue$S$O(par, this.format.format$D(val));
}if (!Double.isNaN$D(val)) {
this.valueCache.put$O$O(par,  new Double(val));
}});

Clazz.newMeth(C$, 'setValue$S$I',  function (par, val) {
this.setValue$S$O(par, Integer.toString$I(val));
this.valueCache.put$O$O(par,  new Double(val));
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (par, val) {
if (this.getBackgroundColor$S(par) === C$.ERROR_COLOR ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
}this.tableModel.control.setValue$S$Z(par, val);
});

Clazz.newMeth(C$, 'getInt$S',  function (par) {
var str=this.tableModel.control.getString$S(par);
if (str == null ) {
str=this.getObject$S(par).toString();
}if (this.tableModel.control.getPropertyType$S(par) == 6) {
var c=this.tableModel.control.getChildControl$S(par);
if (c.getObjectClass$() === Clazz.getClass($I$(8)) ) {
var combo=c.loadObject$O(null);
return combo.getSelectedIndex$();
}}if (str == null ) {
this.setBackgroundColor$S$java_awt_Color(par, C$.ERROR_COLOR);
this.refresh$();
if (this.valueCache.containsKey$O(par)) {
return (this.valueCache.get$O(par).doubleValue$()|0);
}return 0;
}var color=this.cellColors.get$O(par);
var editable=this.isEditable$S(par);
try {
var val=Integer.parseInt$S(par);
if (editable && (color !== $I$(4).WHITE ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
this.refresh$();
} else if (!editable && (color !== $I$(9).NOT_EDITABLE_BACKGROUND ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(9).NOT_EDITABLE_BACKGROUND);
this.refresh$();
}this.valueCache.put$O$O(par,  new Double(val));
return val;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
try {
var val=(Double.parseDouble$S(par)|0);
if (editable && (color !== $I$(4).WHITE ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
this.refresh$();
} else if (!editable && (color !== $I$(9).NOT_EDITABLE_BACKGROUND ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(9).NOT_EDITABLE_BACKGROUND);
this.refresh$();
}this.valueCache.put$O$O(par,  new Double(val));
return val;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
var dval=$I$(7).evalMath$S(str);
if (Double.isNaN$D(dval) && (color !== C$.ERROR_COLOR ) ) {
this.setBackgroundColor$S$java_awt_Color(par, C$.ERROR_COLOR);
this.refresh$();
if (this.valueCache.containsKey$O(par)) {
return (this.valueCache.get$O(par).doubleValue$()|0);
}return 0;
}if (editable && (color !== $I$(4).WHITE ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
this.refresh$();
} else if (!editable && (color !== $I$(9).NOT_EDITABLE_BACKGROUND ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(9).NOT_EDITABLE_BACKGROUND);
this.refresh$();
}this.valueCache.put$O$O(par,  new Double(dval));
return (dval|0);
});

Clazz.newMeth(C$, 'inputError$S',  function (par) {
return this.getBackgroundColor$S(par) === C$.ERROR_COLOR ;
});

Clazz.newMeth(C$, 'getDouble$S',  function (par) {
var str=this.tableModel.control.getString$S(par);
if (str == null ) {
str=this.getObject$S(par).toString();
}if (str == null ) {
this.setBackgroundColor$S$java_awt_Color(par, C$.ERROR_COLOR);
this.refresh$();
if (this.valueCache.containsKey$O(par)) {
return this.valueCache.get$O(par).doubleValue$();
}return 0;
}var color=this.cellColors.get$O(par);
var editable=this.isEditable$S(par);
try {
var val=Double.parseDouble$S(str);
if (editable && (color !== $I$(4).WHITE ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
this.refresh$();
} else if (!editable && (color !== $I$(9).NOT_EDITABLE_BACKGROUND ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(9).NOT_EDITABLE_BACKGROUND);
this.refresh$();
}this.valueCache.put$O$O(par,  new Double(val));
return val;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
var val=$I$(7).evalMath$S(str);
if (Double.isNaN$D(val) && (color !== C$.ERROR_COLOR ) ) {
this.setBackgroundColor$S$java_awt_Color(par, C$.ERROR_COLOR);
this.refresh$();
} else if (editable && (color !== $I$(4).WHITE ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
this.refresh$();
} else if (!editable && (color !== $I$(9).NOT_EDITABLE_BACKGROUND ) ) {
this.setBackgroundColor$S$java_awt_Color(par, $I$(9).NOT_EDITABLE_BACKGROUND);
this.refresh$();
}if (Double.isNaN$D(val) && this.valueCache.containsKey$O(par) ) {
val=this.valueCache.get$O(par).doubleValue$();
} else {
this.valueCache.put$O$O(par,  new Double(val));
}return val;
});

Clazz.newMeth(C$, 'getObject$S',  function (par) {
return this.tableModel.control.getObject$S(par);
});

Clazz.newMeth(C$, 'getString$S',  function (par) {
return this.tableModel.control.getString$S(par);
});

Clazz.newMeth(C$, 'getBoolean$S',  function (par) {
return this.tableModel.control.getBoolean$S(par);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.tableModel.control.getPropertyNames$();
});

Clazz.newMeth(C$, 'getPropertyNamesRaw$',  function () {
return this.tableModel.control.getPropertyNamesRaw$();
});

Clazz.newMeth(C$, 'removeParameter$S',  function (par) {
this.tableModel.control.setValue$S$O(par, null);
this.setBackgroundColor$S$java_awt_Color(par, $I$(4).WHITE);
});

Clazz.newMeth(C$, 'println$S',  function (s) {
this.tableModel.control.println$S(s);
});

Clazz.newMeth(C$, 'println$',  function () {
this.tableModel.control.println$();
});

Clazz.newMeth(C$, 'print$S',  function (s) {
this.tableModel.control.print$S(s);
});

Clazz.newMeth(C$, 'clearMessages$',  function () {
this.tableModel.control.clearMessages$();
});

Clazz.newMeth(C$, 'clearValues$',  function () {
this.tableModel.control.clearValues$();
});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
if (message != null ) {
this.tableModel.control.calculationDone$S(message);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ERROR_COLOR=$I$(4).PINK;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPControlTable, "OSPControlTableLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (xmlControl, obj) {
var controlTable=obj;
var it=controlTable.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var name=it.next$();
var val=controlTable.getObject$S(name);
if (val.getClass$() === Clazz.getClass($I$(1)) ) {
xmlControl.setValue$S$O(name, (val).getArray$());
} else if (val.getClass$() === Clazz.getClass($I$(2)) ) {
xmlControl.setValue$S$O(name, (val).getArray$());
} else if (val.getClass$() === Clazz.getClass(Boolean) ) {
xmlControl.setValue$S$Z(name, (val).booleanValue$());
} else if (val.getClass$() === Clazz.getClass(Double) ) {
xmlControl.setValue$S$D(name, (val).doubleValue$());
} else if (val.getClass$() === Clazz.getClass(Integer) ) {
xmlControl.setValue$S$I(name, (val).intValue$());
} else if (val.getClass$().isArray$()) {
xmlControl.setValue$S$O(name, val);
} else {
xmlControl.setValue$S$O(name, val);
}}
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var controlTable=obj;
var it=control.getPropertyNamesRaw$().iterator$();
controlTable.setLockValues$Z(true);
while (it.hasNext$()){
var name=it.next$();
switch (control.getPropertyType$S(name)) {
case 3:
controlTable.setValue$S$O(name, control.getString$S(name));
break;
case 0:
controlTable.setValue$S$I(name, control.getInt$S(name));
break;
case 1:
controlTable.setValue$S$D(name, control.getDouble$S(name));
break;
case 2:
controlTable.setValue$S$Z(name, control.getBoolean$S(name));
break;
default:
controlTable.setValue$S$O(name, control.getObject$S(name));
break;
}
}
controlTable.setLockValues$Z(false);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
