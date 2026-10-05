(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.tools.UserFunctionEditor','java.awt.event.MouseAdapter','org.opensourcephysics.cabrillo.tracker.DataTrackClipControl','org.opensourcephysics.cabrillo.tracker.DataTrackTimeControl','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.BorderFactory','javax.swing.JPanel','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParticleDataTrackFunctionPanel", null, 'org.opensourcephysics.cabrillo.tracker.ModelFunctionPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['clipControl','org.opensourcephysics.cabrillo.tracker.DataTrackClipControl','timeControl','org.opensourcephysics.cabrillo.tracker.DataTrackTimeControl','customControl','javax.swing.JPanel','+customTitle']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack',  function (track) {
;C$.superclazz.c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_ParticleModel.apply(this,[Clazz.new_($I$(1,1)), track]);C$.$init$.apply(this);
this.model=track;
this.setName$S(track.getName$());
var listener=((P$.ParticleDataTrackFunctionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrackFunctionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ModelFunctionPanel'].clearSelection$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ModelFunctionPanel'], []);
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.ParticleDataTrackFunctionPanel$1));
this.clipControl=Clazz.new_($I$(3,1).c$$org_opensourcephysics_media_core_DataTrack,[track]);
this.clipControl.addMouseListenerToAll$java_awt_event_MouseListener(listener);
this.timeControl=Clazz.new_($I$(4,1).c$$org_opensourcephysics_media_core_DataTrack,[track]);
this.timeControl.addMouseListener$java_awt_event_MouseListener(listener);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
C$.superclazz.prototype.createGUI$.apply(this, []);
this.box.remove$java_awt_Component(this.paramEditor);
this.box.remove$java_awt_Component(this.functionEditor);
this.box.add$java_awt_Component$I(this.clipControl, 1);
this.box.add$java_awt_Component$I(this.timeControl, 2);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.model != null ) {
var dataTrack=this.model;
var dataSource=dataTrack.getSource$();
if (dataSource != null  && Clazz.instanceOf(dataSource, "javax.swing.JPanel") ) {
this.setCustomControl$javax_swing_JPanel(dataSource);
}}if (this.customControl != null ) {
var title=$I$(5).getString$S("ParticleDataTrackFunctionPanel.Border.Title");
this.customTitle.setBorder$javax_swing_border_Border($I$(6).createTitledBorder$S(title));
}this.timeControl.refreshGUI$();
});

Clazz.newMeth(C$, 'setCustomControl$javax_swing_JPanel',  function (panel) {
if (panel === this.customControl ) return;
if (this.customControl != null ) {
this.customTitle.remove$java_awt_Component(this.customControl);
this.box.remove$java_awt_Component(this.customTitle);
}this.customControl=panel;
if (this.customControl != null ) {
if (this.customTitle == null ) {
this.customTitle=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
}this.customTitle.add$java_awt_Component$O(this.customControl, "Center");
this.box.add$java_awt_Component$I(this.customTitle, 3);
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'refreshTimeSource$',  function () {
this.timeControl.setTimeSourceToDataTrack$Z(this.timeControl.isTimeSourceDataTrack$());
});

Clazz.newMeth(C$, 'getCustomInstructions$org_opensourcephysics_tools_FunctionEditor$I',  function (source, selectedColumn) {
return $I$(5).getString$S("ParticleDataTrackFunctionPanel.Instructions.General");
});

Clazz.newMeth(C$, 'tabToNext$org_opensourcephysics_tools_FunctionEditor',  function (editor) {
this.clipControl.requestFocusInWindow$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
