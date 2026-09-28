(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.media.core.ClipControl','org.opensourcephysics.tools.FontSizer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataTrackTimeControl", null, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataTrack','org.opensourcephysics.media.core.DataTrack','videoButton','javax.swing.JRadioButton','+dataButton']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_DataTrack',  function (track) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.dataTrack=track;
this.createGUI$();
this.refreshGUI$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.videoButton=Clazz.new_($I$(1,1));
this.videoButton.addActionListener$java_awt_event_ActionListener(((P$.DataTrackTimeControl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTrackTimeControl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (arg0) {
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackTimeControl'].setTimeSourceToDataTrack$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackTimeControl'], [false]);
});
})()
), Clazz.new_(P$.DataTrackTimeControl$1.$init$,[this, null])));
this.dataButton=Clazz.new_($I$(1,1));
this.dataButton.addActionListener$java_awt_event_ActionListener(((P$.DataTrackTimeControl$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTrackTimeControl$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (arg0) {
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackTimeControl'].setTimeSourceToDataTrack$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackTimeControl'], [true]);
});
})()
), Clazz.new_(P$.DataTrackTimeControl$2.$init$,[this, null])));
var group=Clazz.new_($I$(2,1));
group.add$javax_swing_AbstractButton(this.videoButton);
group.add$javax_swing_AbstractButton(this.dataButton);
this.videoButton.setSelected$Z(true);
this.add$java_awt_Component(this.videoButton);
this.add$java_awt_Component(this.dataButton);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setBorder$javax_swing_border_Border($I$(3,"createTitledBorder$S",[$I$(4).getString$S("DataTrackTimeControl.Border.Title")]));
this.videoButton.setText$S($I$(4).getString$S("DataTrackTimeControl.Button.Video"));
this.dataButton.setText$S($I$(4).getString$S("DataTrackTimeControl.Button.Data"));
this.dataButton.setEnabled$Z(this.dataTrack.isTimeDataAvailable$());
var dataSelected=$I$(5).isTimeSource$org_opensourcephysics_media_core_DataTrack(this.dataTrack);
this.dataButton.setSelected$Z(dataSelected);
this.videoButton.setSelected$Z(!dataSelected);
$I$(6,"setFonts$O$I",[this.getBorder$(), $I$(6).getLevel$()]);
});

Clazz.newMeth(C$, 'setTimeSourceToDataTrack$Z',  function (isTrackTimeSource) {
if (this.dataTrack.getVideoPanel$() == null ) return;
var player=this.dataTrack.getVideoPanel$().getPlayer$();
player.getClipControl$().setTimeSource$org_opensourcephysics_media_core_DataTrack(isTrackTimeSource ? this.dataTrack : null);
player.refresh$();
if (Clazz.instanceOf(this.dataTrack, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
(this.dataTrack).refreshInitialTime$();
}});

Clazz.newMeth(C$, 'isTimeSourceDataTrack$',  function () {
if (this.dataTrack.getVideoPanel$() == null ) return false;
var player=this.dataTrack.getVideoPanel$().getPlayer$();
return player.getClipControl$().getTimeSource$() === this.dataTrack ;
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.refreshGUI$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
