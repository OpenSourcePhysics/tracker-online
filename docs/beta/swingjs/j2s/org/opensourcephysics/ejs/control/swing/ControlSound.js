(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),p$1={},I$=[[0,'java.net.URL','java.applet.Applet','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlSound", null, 'org.opensourcephysics.ejs.control.swing.ControlCheckBox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.clip=null;
this.audioFile=null;
this.playing=false;
},1);

C$.$fields$=[['Z',['playing'],'S',['audioFile'],'O',['clip','java.applet.AudioClip']]
,['O',['$infoList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
this.checkbox.addActionListener$java_awt_event_ActionListener(((P$.ControlSound$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ControlSound$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
if (this.b$['org.opensourcephysics.ejs.control.swing.ControlSound'].checkbox.isSelected$()) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlSound'].play$.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlSound'], []);
} else {
this.b$['org.opensourcephysics.ejs.control.swing.ControlSound'].stop$.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlSound'], []);
}});
})()
), Clazz.new_(P$.ControlSound$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'setAudioClip$S$S',  function (_codebase, _audioFile) {
if (_audioFile == null ) {
this.stop$();
this.clip=null;
return;
}try {
var prefix="";
if (_codebase == null ) {
prefix="file:";
} else {
prefix=_codebase.toString();
if (prefix.startsWith$S("file:")) {
prefix="file:///" + prefix.substring$I(6);
}if (!prefix.endsWith$S("/")) {
prefix+="/";
}}var filename=prefix + _audioFile;
var url=Clazz.new_($I$(1,1).c$$S,[filename]);
this.clip=$I$(2).newAudioClip$java_net_URL(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
this.clip=null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'destroy$',  function () {
if (this.clip != null ) {
this.clip.stop$();
}this.clip=null;
C$.superclazz.prototype.destroy$.apply(this, []);
});

Clazz.newMeth(C$, 'play$',  function () {
if (this.clip == null ) {
return;
}this.clip.loop$();
});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.clip != null ) {
this.clip.stop$();
}});

Clazz.newMeth(C$, 'getPropertyList$',  function () {
if (C$.$infoList == null ) {
C$.$infoList=Clazz.new_($I$(3,1));
C$.$infoList.add$O("audiofile");
C$.$infoList.addAll$java_util_Collection(C$.superclazz.prototype.getPropertyList$.apply(this, []));
}return C$.$infoList;
});

Clazz.newMeth(C$, 'getPropertyInfo$S',  function (_property) {
if (_property.equals$O("audiofile")) {
return "File|String";
}return C$.superclazz.prototype.getPropertyInfo$S.apply(this, [_property]);
});

Clazz.newMeth(C$, 'setValue$I$org_opensourcephysics_ejs_control_value_Value',  function (_index, _value) {
switch (_index) {
case 0:
p$1.setAudioFile$S.apply(this, [_value.getString$()]);
break;
case 5:
if (_value.getBoolean$() != this.playing ) {
this.playing=_value.getBoolean$();
if (this.playing) {
this.play$();
} else {
this.stop$();
}}C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [4, _value]);
break;
default:
C$.superclazz.prototype.setValue$I$org_opensourcephysics_ejs_control_value_Value.apply(this, [_index - 1, _value]);
break;
}
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (_index) {
switch (_index) {
case 0:
this.setAudioClip$S$S(null, null);
this.audioFile=null;
break;
default:
C$.superclazz.prototype.setDefaultValue$I.apply(this, [_index - 1]);
break;
}
});

Clazz.newMeth(C$, 'getValue$I',  function (_index) {
switch (_index) {
case 0:
return null;
default:
return C$.superclazz.prototype.getValue$I.apply(this, [_index - 1]);
}
});

Clazz.newMeth(C$, 'setAudioFile$S',  function (_audio) {
if ((this.audioFile != null ) && this.audioFile.equals$O(_audio) ) {
return;
}this.audioFile=_audio;
if (this.getProperty$S("_ejs_codebase") != null ) {
this.setAudioClip$S$S(this.getProperty$S("_ejs_codebase"), _audio);
} else if ((this.getSimulation$() != null ) && (this.getSimulation$().getCodebase$() != null ) ) {
this.setAudioClip$S$S(this.getSimulation$().getCodebase$().toString(), _audio);
} else {
this.setAudioClip$S$S(null, _audio);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$infoList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
