(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.controls.OSPApplication','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XML','org.opensourcephysics.display.GUIUtils',['org.opensourcephysics.controls.OSPApplication','.OSPAppLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPApplication", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['OSPAppLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compatibleModel=false;
},1);

C$.$fields$=[['Z',['compatibleModel'],'O',['control','org.opensourcephysics.controls.Control','model','java.lang.Object','loadedControlClass','Class','+loadedModelClass']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Control$O',  function (control, model) {
;C$.$init$.apply(this);
this.control=control;
this.model=model;
}, 1);

Clazz.newMeth(C$, 'setCompatibleModel$Z',  function (b) {
this.compatibleModel=b;
});

Clazz.newMeth(C$, 'getLoadedModelClass$',  function () {
return this.loadedModelClass;
});

Clazz.newMeth(C$, 'getLoadedControlClass$',  function () {
return this.loadedControlClass;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPApplication, "OSPAppLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (xmlControl, obj) {
var app=obj;
xmlControl.setValue$S$O("control", app.control);
xmlControl.setValue$S$O("model", app.model);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (xmlControl) {
var model=xmlControl.getObject$S("model");
var control=xmlControl.getObject$S("control");
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_controls_Control$O,[control, model]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (xmlControl, obj) {
var app=obj;
app.loadedControlClass=null;
app.loadedModelClass=null;
var cControl=xmlControl.getChildControl$S("control");
var mControl=xmlControl.getChildControl$S("model");
if ((cControl == null ) || (mControl == null ) ) {
$I$(2).fine$S("OSP Application not loaded. An OSP application must have a model and a control.");
return app;
}var modelClass=mControl.getObjectClass$();
var controlClass=cControl.getObjectClass$();
if ((modelClass == null ) || (controlClass == null ) ) {
if (controlClass == null ) {
$I$(2).fine$S("Object not loaded. Cannot find class for control.");
}if (modelClass == null ) {
$I$(2).fine$S("Object not loaded. Cannot find class for model.");
}return app;
}var compatibleModels=app.compatibleModel;
if (app.model != null ) {
var loaderMatch=$I$(3).getLoader$Class(modelClass).getClass$() === $I$(3,"getLoader$Class",[app.model.getClass$()]).getClass$() ;
compatibleModels=compatibleModels || (modelClass === app.model.getClass$() ) || (modelClass.isAssignableFrom$Class(app.model.getClass$()) && loaderMatch )  ;
}app.loadedControlClass=controlClass;
if ((app.control != null ) && (controlClass === app.control.getClass$() ) ) {
cControl.loadObject$O(app.control);
} else {
cControl.loadObject$O$Z$Z(app.control, true, compatibleModels);
}var appNames=app.control.getPropertyNamesRaw$();
var it=cControl.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var name=it.next$();
if (!appNames.contains$O(name)) {
app.control.setValue$S$O(name, null);
}}
app.loadedModelClass=modelClass;
if ((app.model != null ) && (modelClass === app.model.getClass$() ) ) {
mControl.loadObject$O(app.model);
} else {
mControl.loadObject$O$Z$Z(app.model, true, false);
}$I$(4).repaintOSPFrames$();
return app;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
