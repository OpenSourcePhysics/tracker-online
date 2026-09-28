(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.geom.GeneralPath','org.opensourcephysics.tools.FontSizer','java.awt.BasicStroke','java.awt.Rectangle','java.awt.Color','java.awt.RenderingHints','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.DataTrackClipControl','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.BorderFactory',['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl','.MySpinner'],'javax.swing.SpinnerNumberModel','org.opensourcephysics.cabrillo.tracker.TFrame',['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl','.GraphicPanel'],['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl','.MappingGraphic'],'javax.swing.JPanel','java.awt.GridLayout','org.opensourcephysics.numerics.Util']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataTrackClipControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');
C$.$classes$=[['MappingGraphic',0],['MySpinner',0],['GraphicPanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawVideoClip=false;
},1);

C$.$fields$=[['Z',['refreshing','drawVideoClip'],'O',['dataTrack','org.opensourcephysics.media.core.DataTrack','drawingPanel','org.opensourcephysics.display.DrawingPanel','spinnerPanel','javax.swing.JPanel','mappingGraphic','org.opensourcephysics.display.Interactive','videoInLabel','javax.swing.JLabel','+dataInLabel','+dataClipLengthLabel','+dataStrideLabel','videoInSpinner','javax.swing.JSpinner','+dataInSpinner','+dataClipLengthSpinner','+dataStrideSpinner','particleDT','org.opensourcephysics.cabrillo.tracker.ParticleDataTrack']]
,['I',['graphicHeight'],'O',['videoColor','java.awt.Color','+dataColor','+dataClipColor','+unavailableDataColor','+availableDataColor']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_DataTrack',  function (model) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(9,1))]);C$.$init$.apply(this);
this.dataTrack=model;
if (Clazz.instanceOf(this.dataTrack, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
this.particleDT=this.dataTrack;
this.particleDT.addPropertyChangeListener$S$java_beans_PropertyChangeListener("dataclip", this);
this.particleDT.addPropertyChangeListener$S$java_beans_PropertyChangeListener("videoclip", this);
}this.createGUI$();
this.refreshSpinners$();
this.refreshGUI$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.videoInLabel=Clazz.new_($I$(10,1));
this.videoInLabel.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$());
this.dataInLabel=Clazz.new_($I$(10,1));
this.dataInLabel.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$());
this.dataClipLengthLabel=Clazz.new_($I$(10,1));
this.dataClipLengthLabel.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$());
this.dataStrideLabel=Clazz.new_($I$(10,1));
this.dataStrideLabel.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$());
this.videoInSpinner=Clazz.new_([this, null, Clazz.new_($I$(13,1).c$$I$I$I$I,[0, 0, 20, 1])],$I$(12,1).c$$javax_swing_SpinnerModel);
this.videoInSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DataTrackClipControl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTrackClipControl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].refreshing) return;
var vidPanel=this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getVideoPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []);
if (vidPanel == null ) return;
var clip=vidPanel.getPlayer$.apply(vidPanel, []).getVideoClip$.apply(vidPanel.getPlayer$.apply(vidPanel, []), []);
var cur=clip.frameToStep$I.apply(clip, [this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getStartFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, [])]);
var $in=(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].videoInSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].videoInSpinner, [])).$c();
if ($in == cur) {
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.setStartStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, [$in]);
$I$(14).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl']);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].videoInSpinner.requestFocusInWindow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].videoInSpinner, []);
});
})()
), Clazz.new_(P$.DataTrackClipControl$lambda1.$init$,[this, null])));
this.dataInSpinner=Clazz.new_([this, null, Clazz.new_($I$(13,1).c$$I$I$I$I,[0, 0, 20, 1])],$I$(12,1).c$$javax_swing_SpinnerModel);
this.dataInSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DataTrackClipControl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTrackClipControl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].refreshing) return;
var $in=(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataInSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataInSpinner, [])).$c();
if ($in == this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).getStartIndex$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), [])) {
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).setStartIndex$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), [$in]);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataInSpinner.setValue$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataInSpinner, [Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).getStartIndex$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), []))]);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataInSpinner.requestFocusInWindow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataInSpinner, []);
$I$(14).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl']);
});
})()
), Clazz.new_(P$.DataTrackClipControl$lambda2.$init$,[this, null])));
this.dataClipLengthSpinner=Clazz.new_([this, null, Clazz.new_($I$(13,1).c$$I$I$I$I,[1, 1, 20, 1])],$I$(12,1).c$$javax_swing_SpinnerModel);
this.dataClipLengthSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DataTrackClipControl$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTrackClipControl$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].refreshing) return;
var length=(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataClipLengthSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataClipLengthSpinner, [])).$c();
if (length == this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).getClipLength$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), [])) {
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).setClipLength$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), [length]);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataClipLengthSpinner.setValue$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataClipLengthSpinner, [Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).getClipLength$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), []))]);
$I$(14).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl']);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataClipLengthSpinner.requestFocusInWindow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataClipLengthSpinner, []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].particleDT != null  && this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].particleDT.tp != null  ) this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].particleDT.tp.getModelBuilder$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].particleDT.tp, []).refreshSpinners$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].particleDT.tp.getModelBuilder$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].particleDT.tp, []), []);
});
})()
), Clazz.new_(P$.DataTrackClipControl$lambda3.$init$,[this, null])));
this.dataStrideSpinner=Clazz.new_([this, null, Clazz.new_($I$(13,1).c$$I$I$I$I,[1, 1, 10, 1])],$I$(12,1).c$$javax_swing_SpinnerModel);
this.dataStrideSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DataTrackClipControl$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTrackClipControl$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].refreshing) return;
var n=(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataStrideSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataStrideSpinner, [])).$c();
if (n == this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).getStride$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), [])) {
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).setStride$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), [n]);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataStrideSpinner.setValue$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataStrideSpinner, [Integer.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []).getStride$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, []), []))]);
$I$(14).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl']);
this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataStrideSpinner.requestFocusInWindow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataStrideSpinner, []);
});
})()
), Clazz.new_(P$.DataTrackClipControl$lambda4.$init$,[this, null])));
this.drawingPanel=Clazz.new_($I$(15,1),[this, null]);
this.drawingPanel.setBorder$javax_swing_border_Border($I$(11).createEtchedBorder$());
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(Clazz.new_($I$(16,1),[this, null]));
this.add$java_awt_Component$O(this.drawingPanel, "Center");
this.spinnerPanel=Clazz.new_([Clazz.new_($I$(18,1).c$$I$I,[1, 4])],$I$(17,1).c$$java_awt_LayoutManager);
this.add$java_awt_Component$O(this.spinnerPanel, "South");
var singleSpinnerPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(17,1).c$$java_awt_LayoutManager);
var panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.videoInSpinner);
singleSpinnerPanel.add$java_awt_Component$O(panel, "North");
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.videoInLabel);
singleSpinnerPanel.add$java_awt_Component$O(panel, "South");
this.spinnerPanel.add$java_awt_Component(singleSpinnerPanel);
singleSpinnerPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(17,1).c$$java_awt_LayoutManager);
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.dataClipLengthSpinner);
singleSpinnerPanel.add$java_awt_Component$O(panel, "North");
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.dataClipLengthLabel);
singleSpinnerPanel.add$java_awt_Component$O(panel, "South");
this.spinnerPanel.add$java_awt_Component(singleSpinnerPanel);
singleSpinnerPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(17,1).c$$java_awt_LayoutManager);
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.dataInSpinner);
singleSpinnerPanel.add$java_awt_Component$O(panel, "North");
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.dataInLabel);
singleSpinnerPanel.add$java_awt_Component$O(panel, "South");
this.spinnerPanel.add$java_awt_Component(singleSpinnerPanel);
singleSpinnerPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(17,1).c$$java_awt_LayoutManager);
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.dataStrideSpinner);
singleSpinnerPanel.add$java_awt_Component$O(panel, "North");
panel=Clazz.new_($I$(17,1));
panel.add$java_awt_Component(this.dataStrideLabel);
singleSpinnerPanel.add$java_awt_Component$O(panel, "South");
this.spinnerPanel.add$java_awt_Component(singleSpinnerPanel);
});

Clazz.newMeth(C$, 'refreshSpinners$',  function () {
var vidPanel=this.dataTrack.getVideoPanel$();
if (vidPanel == null ) return;
var dataClip=this.dataTrack.getDataClip$();
var videoClip=vidPanel.getPlayer$().getVideoClip$();
var clipLength=dataClip.getClipLength$();
var dataLength=dataClip.getDataLength$();
var max=Math.max(0, dataLength - 1);
$I$(19,"newSpinnerNumberModel$javax_swing_JSpinner$I$I$I$I",[this.dataInSpinner, dataClip.getStartIndex$(), 0, max, 1]);
max=Math.max(1, dataLength - 1);
max=Math.max(max, dataClip.getStride$());
$I$(19,"newSpinnerNumberModel$javax_swing_JSpinner$I$I$I$I",[this.dataStrideSpinner, dataClip.getStride$(), 1, max, 1]);
if (videoClip != null ) {
var first=0;
var last=videoClip.getStepCount$() - 1;
var startStep=this.dataTrack.getStartStep$();
startStep=Math.max(startStep, first);
startStep=Math.min(startStep, last);
$I$(19).newSpinnerNumberModel$javax_swing_JSpinner$I$I$I$I(this.videoInSpinner, startStep, first, last, 1);
}max=Math.max(1, dataLength);
$I$(19).newSpinnerNumberModel$javax_swing_JSpinner$I$I$I$I(this.dataClipLengthSpinner, clipLength, 1, max, 1);
var c=this.getTopLevelAncestor$();
if (Clazz.instanceOf(c, "org.opensourcephysics.cabrillo.tracker.ModelBuilder")) {
(c).refreshSpinners$();
}});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setBorder$javax_swing_border_Border($I$(11,"createTitledBorder$S",[$I$(7).getString$S("DataTrackClipControl.Border.Title")]));
this.videoInLabel.setText$S($I$(7).getString$S("DataTrackClipControl.Label.VideoStart"));
this.dataClipLengthLabel.setText$S($I$(7).getString$S("DataTrackClipControl.Label.FrameCount"));
this.dataInLabel.setText$S($I$(7).getString$S("DataTrackClipControl.Label.DataStart"));
this.dataStrideLabel.setText$S($I$(7).getString$S("DataTrackClipControl.Label.Stride"));
});

Clazz.newMeth(C$, 'addMouseListenerToAll$java_awt_event_MouseListener',  function (listener) {
this.addMouseListener$java_awt_event_MouseListener(listener);
this.drawingPanel.addMouseListener$java_awt_event_MouseListener(listener);
this.spinnerPanel.addMouseListener$java_awt_event_MouseListener(listener);
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.refreshSpinners$();
$I$(14).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'getLastDisplayedClipIndex',  function () {
var stepCount=this.dataTrack.getDataClip$().getClipLength$();
var vidPanel=this.dataTrack.getVideoPanel$();
if (vidPanel == null ) return stepCount;
var clip=vidPanel.getPlayer$().getVideoClip$();
var last=clip.getLastFrameNumber$();
for (var i=stepCount - 1; i > 0; i--) {
var frame=this.dataTrack.getStartFrame$() + (i * clip.getStepSize$());
var index=this.dataTrack.getDataClip$().stepToIndex$I(i);
if (frame <= last && index < this.dataTrack.getDataClip$().getDataLength$() ) {
return index;
}}
return this.dataTrack.getDataClip$().stepToIndex$I(0);
}, p$1);

Clazz.newMeth(C$, 'setGraphic$org_opensourcephysics_display_Interactive',  function (graphic) {
if (graphic == null ) return;
if (this.mappingGraphic != null ) {
this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.mappingGraphic);
}this.mappingGraphic=graphic;
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.mappingGraphic);
});

C$.$static$=function(){C$.$static$=0;
C$.videoColor=$I$(5).WHITE;
C$.dataColor=C$.videoColor;
C$.dataClipColor=Clazz.new_($I$(5,1).c$$I$I$I,[51, 200, 51]);
C$.unavailableDataColor=Clazz.new_($I$(5,1).c$$I$I$I$I,[51, 200, 51, 127]);
C$.availableDataColor=C$.unavailableDataColor;
C$.graphicHeight=100;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTrackClipControl, "MappingGraphic", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.display.Interactive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.path=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['path','java.awt.geom.GeneralPath']]]

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var vidPanel=this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getVideoPanel$();
if (vidPanel == null ) return;
var g2=g;
var mag=$I$(2).getFactor$();
var strokeWidth=((8 * mag)|0);
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(3,1).c$$F$I$I,[strokeWidth, 0, 1]));
var rect=Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].drawingPanel.getSize$()],$I$(4,1).c$$java_awt_Dimension);
g2.setColor$java_awt_Color(Clazz.new_($I$(5,1).c$$I$I$I,[200, 200, 200]));
g2.fill$java_awt_Shape(rect);
var yClipLine=((30 * mag)|0);
var yDataLine=((70 * mag)|0);
var yVideoFrame=yClipLine + ((3 * g2.getFontMetrics$().getHeight$()/4|0));
g2.setColor$java_awt_Color($I$(5).DARK_GRAY);
g2.setFont$java_awt_Font(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].videoInLabel.getFont$());
var rh=g2.getRenderingHints$();
rh.put$O$O($I$(6).KEY_TEXT_ANTIALIASING, $I$(6).VALUE_TEXT_ANTIALIAS_ON);
rh.put$O$O($I$(6).KEY_ANTIALIASING, $I$(6).VALUE_ANTIALIAS_ON);
var largeGap=10;
var smallGap=4;
var fontDrop=(g2.getFontMetrics$().getHeight$()/4|0);
var s=$I$(7).getString$S("DataTrackClipControl.Label.Video");
var labelSpace=g2.getFontMetrics$().stringWidth$S(s);
g2.drawString$S$I$I(s, largeGap, yClipLine + fontDrop);
s=$I$(7).getString$S("DataTrackClipControl.Label.Data");
labelSpace=Math.max(labelSpace, g2.getFontMetrics$().stringWidth$S(s));
g2.drawString$S$I$I(s, largeGap, yDataLine + fontDrop);
s=$I$(7).getString$S("DataTrackClipControl.Label.Frame");
labelSpace=Math.max(labelSpace, g2.getFontMetrics$().stringWidth$S(s));
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I(0));
g2.drawString$S$I$I(s, largeGap, yVideoFrame + fontDrop);
labelSpace+=6;
var videoClip=vidPanel.getPlayer$().getVideoClip$();
var dataClip=this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$();
s="0";
var frontSpace=g2.getFontMetrics$().stringWidth$S(s);
s=String.valueOf$I(videoClip.getStepCount$() - 1);
var endSpace=g2.getFontMetrics$().stringWidth$S(s);
s=String.valueOf$I(dataClip.getDataLength$() - 1);
endSpace=Math.max(endSpace, g2.getFontMetrics$().stringWidth$S(s));
var videoClipFrames=videoClip.getStepCount$();
var dataClipFrames=dataClip.getDataLength$();
var maxFrames=Math.max(videoClipFrames, dataClipFrames);
var maxLength=panel.getWidth$() - labelSpace - frontSpace - endSpace - 3 * largeGap  - 2 * smallGap;
var lengthPerFrame=maxLength / maxFrames;
var lineLength=maxLength * videoClipFrames / maxFrames;
var leftEnd=labelSpace + 2 * largeGap + frontSpace;
var rightVideoEnd=leftEnd + lineLength;
this.path.reset$();
this.path.moveTo$D$D(leftEnd, yClipLine);
this.path.lineTo$D$D(rightVideoEnd, yClipLine);
g2.setColor$java_awt_Color($I$(8).videoColor);
g2.draw$java_awt_Shape(this.path);
var fullClipLength=lengthPerFrame * (dataClip.getClipLength$());
var startStep=this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getStartStep$();
var videoStartClip=leftEnd + lengthPerFrame * (startStep);
var videoEndClip=videoStartClip + fullClipLength;
videoStartClip=Math.max(videoStartClip, leftEnd);
videoEndClip=Math.min(videoEndClip, leftEnd + lineLength);
this.path.reset$();
this.path.moveTo$D$D(videoStartClip, yClipLine);
this.path.lineTo$D$D(videoEndClip, yClipLine);
g2.setColor$java_awt_Color($I$(8).unavailableDataColor);
g2.draw$java_awt_Shape(this.path);
var clipLength=lengthPerFrame * (dataClip.getAvailableClipLength$());
videoEndClip=videoStartClip + clipLength;
videoStartClip=Math.max(videoStartClip, leftEnd);
videoEndClip=Math.min(videoEndClip, leftEnd + lineLength);
clipLength=videoEndClip - videoStartClip;
this.path.reset$();
this.path.moveTo$D$D(videoStartClip, yClipLine);
this.path.lineTo$D$D(videoEndClip, yClipLine);
g2.setColor$java_awt_Color($I$(8).dataClipColor);
g2.draw$java_awt_Shape(this.path);
lineLength=maxLength * dataClipFrames / maxFrames;
var rightDataEnd=leftEnd + lineLength;
this.path.reset$();
this.path.moveTo$D$D(leftEnd, yDataLine);
this.path.lineTo$D$D(rightDataEnd, yDataLine);
g2.setColor$java_awt_Color($I$(8).dataColor);
g2.draw$java_awt_Shape(this.path);
if (dataClip.getStride$() > 1) {
var frameWidth=Math.max(1, lengthPerFrame);
g2.setStroke$java_awt_Stroke(Clazz.new_([strokeWidth, 0, 1, 8, Clazz.array(Float.TYPE, -1, [frameWidth, frameWidth * (dataClip.getStride$() - 1)]), 0],$I$(3,1).c$$F$I$I$F$FA$F));
}var dataStartClip=leftEnd + lengthPerFrame * dataClip.getStartIndex$();
var dataEndClip=dataStartClip + fullClipLength * dataClip.getStride$();
dataEndClip=Math.min(dataEndClip, leftEnd + lineLength);
this.path.reset$();
this.path.moveTo$D$D(dataStartClip, yDataLine);
this.path.lineTo$D$D(dataEndClip, yDataLine);
g2.setColor$java_awt_Color($I$(8).availableDataColor);
g2.draw$java_awt_Shape(this.path);
dataEndClip=dataStartClip + clipLength * dataClip.getStride$();
this.path.reset$();
this.path.moveTo$D$D(dataStartClip, yDataLine);
this.path.lineTo$D$D(dataEndClip, yDataLine);
g2.setColor$java_awt_Color($I$(8).dataClipColor);
g2.draw$java_awt_Shape(this.path);
dataEndClip=dataEndClip - (dataClip.getStride$() - 1) * lengthPerFrame;
g2.setColor$java_awt_Color($I$(5).BLACK);
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(3,1).c$$F$I$I,[1, 0, 1]));
this.path.reset$();
this.path.moveTo$D$D(dataStartClip, yDataLine - (strokeWidth/2|0));
this.path.lineTo$D$D(videoStartClip, yClipLine + (strokeWidth/2|0));
g2.draw$java_awt_Shape(this.path);
this.path.reset$();
this.path.moveTo$D$D(dataEndClip, yDataLine - (strokeWidth/2|0));
this.path.lineTo$D$D(videoEndClip, yClipLine + (strokeWidth/2|0));
g2.draw$java_awt_Shape(this.path);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I(1));
var verticalOffset=fontDrop;
s="0";
g2.drawString$S$I$I(s, ((leftEnd - frontSpace - smallGap )|0), yDataLine + verticalOffset);
g2.drawString$S$I$I(s, ((leftEnd - frontSpace - smallGap )|0), yClipLine + verticalOffset);
s=String.valueOf$I(dataClipFrames - 1);
g2.drawString$S$I$I(s, ((rightDataEnd + smallGap)|0), yDataLine + verticalOffset);
s=String.valueOf$I(videoClip.getStepCount$() - 1);
g2.drawString$S$I$I(s, ((rightVideoEnd + smallGap)|0), yClipLine + verticalOffset);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I(0));
s=String.valueOf$I(videoClip.getStartFrameNumber$());
frontSpace=g2.getFontMetrics$().stringWidth$S(s);
g2.drawString$S$I$I(s, ((leftEnd - frontSpace - smallGap )|0), yVideoFrame + verticalOffset);
s=String.valueOf$I(videoClip.getEndFrameNumber$());
g2.drawString$S$I$I(s, ((rightVideoEnd + smallGap)|0), yVideoFrame + verticalOffset);
s=String.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getStartFrame$());
g2.drawString$S$I$I(s, ((videoStartClip)|0), yVideoFrame + verticalOffset);
verticalOffset=-2 - (strokeWidth/2|0);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I(1));
s=String.valueOf$I(startStep);
g2.drawString$S$I$I(s, ((videoStartClip)|0), yClipLine + verticalOffset);
var n=startStep + dataClip.getAvailableClipLength$() - 1;
n=Math.min(n, videoClip.getStepCount$() - 1);
if (startStep != n) {
s=String.valueOf$I(n);
var space=g2.getFontMetrics$().stringWidth$S(s);
g2.drawString$S$I$I(s, ((videoEndClip - space)|0), yClipLine + verticalOffset);
s=String.valueOf$I(videoClip.stepToFrame$I(n));
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I(0));
space=g2.getFontMetrics$().stringWidth$S(s);
verticalOffset=fontDrop;
g2.drawString$S$I$I(s, ((videoEndClip - space)|0), yVideoFrame + verticalOffset);
}verticalOffset=fontDrop + strokeWidth + 3 ;
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I(1));
s=String.valueOf$I(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$().getStartIndex$());
g2.drawString$S$I$I(s, ((dataStartClip)|0), yDataLine + verticalOffset);
n=p$1.getLastDisplayedClipIndex.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'], []);
if (n - this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack.getDataClip$().getStartIndex$() > 0) {
s=String.valueOf$I(n);
var space=g2.getFontMetrics$().stringWidth$S(s);
g2.drawString$S$I$I(s, ((dataEndClip - space)|0), yDataLine + verticalOffset);
}});

Clazz.newMeth(C$, 'getHitShapes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getMark$java_awt_PointA',  function (points) {
return ((P$.DataTrackClipControl$MappingGraphic$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTrackClipControl$MappingGraphic$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
});
})()
), Clazz.new_(P$.DataTrackClipControl$MappingGraphic$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return 100;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return 100;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, _xpix, _ypix) {
return null;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTrackClipControl, "MySpinner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JSpinner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerModel',  function (model) {
;C$.superclazz.c$$javax_swing_SpinnerModel.apply(this,[model]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
if (Clazz.instanceOf(this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
var pdt=this.b$['org.opensourcephysics.cabrillo.tracker.DataTrackClipControl'].dataTrack;
dim.height=pdt.tp.getModelBuilder$().getSpinnerHeight$();
} else {
dim.height+=6;
}dim.width+=6;
return dim;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTrackClipControl, "GraphicPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.DrawingPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.removeMouseListener$java_awt_event_MouseListener(this.mouseController);
this.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var mag=$I$(2).getFactor$();
dim.height=((mag * $I$(8).graphicHeight)|0);
return dim;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
