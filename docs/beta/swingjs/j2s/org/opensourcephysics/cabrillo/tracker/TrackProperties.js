(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackProperties','java.awt.Color',['org.opensourcephysics.cabrillo.tracker.TrackProperties','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackProperties", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['footprints','String[]','colors','java.awt.Color[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
;C$.$init$.apply(this);
this.name=track.getName$();
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
var dt=track;
var mpoints=dt.morePoints;
var np=mpoints.size$();
this.colors=Clazz.array($I$(2), [np + 2]);
this.colors[0]=dt.getColor$();
this.colors[this.colors.length - 1]=dt.getModelFootprint$().getColor$();
for (var i=0; i < np; i++) {
this.colors[i + 1]=mpoints.get$I(i).getColor$();
}
this.footprints=Clazz.array(String, [np + 2]);
this.footprints[0]=dt.getFootprintName$();
this.footprints[this.footprints.length - 1]=dt.getModelFootprintName$();
for (var i=0; i < np; i++) {
this.footprints[i + 1]=mpoints.get$I(i).getFootprintName$();
}
} else {
this.footprints=Clazz.array(String, -1, [track.getFootprintName$()]);
this.colors=Clazz.array($I$(2), -1, [track.getColor$()]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$SA$java_awt_ColorA',  function (name, footprints, colors) {
;C$.$init$.apply(this);
this.name=name;
this.footprints=footprints;
this.colors=colors;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackProperties, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var props=obj;
control.setValue$S$O("name", props.name);
control.setValue$S$O("footprints", props.footprints);
control.setValue$S$O("colors", props.colors);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var name=control.getString$S("name");
var footprints=control.getObject$S("footprints");
var colors=control.getObject$S("colors");
return Clazz.new_($I$(1,1).c$$S$SA$java_awt_ColorA,[name, footprints, colors]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
