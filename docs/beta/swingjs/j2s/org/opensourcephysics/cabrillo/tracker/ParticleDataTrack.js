(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.media.core.ClipControl','org.opensourcephysics.cabrillo.tracker.ParticleDataTrack','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.Tracker','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.Footprint','org.opensourcephysics.cabrillo.tracker.TrackerRes',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.cabrillo.tracker.ParticleModel','org.opensourcephysics.cabrillo.tracker.MultiLineFootprint','javax.swing.JMenu','javax.swing.JMenuItem','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.TrackProperties','org.opensourcephysics.cabrillo.tracker.Undo','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.BorderFactory','org.opensourcephysics.display.ResizableIcon',['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack','.ComboIcon'],'javax.swing.JButton','javax.swing.JCheckBox','org.opensourcephysics.display.DataClip','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.DataTool','org.opensourcephysics.cabrillo.tracker.ParticleDataTrackFunctionPanel','org.opensourcephysics.cabrillo.tracker.MultiPositionStep','org.opensourcephysics.cabrillo.tracker.PositionStep','javax.swing.JOptionPane','java.awt.Toolkit',['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParticleDataTrack", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.ParticleModel', 'org.opensourcephysics.media.core.DataTrack');
C$.$classes$=[['ComboIcon',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$xData=Clazz.array(Double.TYPE, -1, [0]);
this.$yData=Clazz.array(Double.TYPE, -1, [0]);
this.tData=Clazz.array(Double.TYPE, -1, [0]);
this.pointName="";
this.modelName="";
this.morePoints=Clazz.new_($I$(7,1));
this.modelFootprints=Clazz.array($I$(8), [0]);
this.modelFootprintVisible=false;
this.autoPasteEnabled=false;
this.startStep=-1;
this.startFrameTemp=-1;
},1);

C$.$fields$=[['Z',['useDataTime','modelFootprintVisible','autoPasteEnabled','requiresConversion'],'I',['stepCounter','startStep','startFrameTemp'],'S',['pointName','modelName','pendingDataString','prevDataString'],'O',['dataClip','org.opensourcephysics.display.DataClip','sourceData','org.opensourcephysics.display.DatasetManager','$xData','double[]','+$yData','+tData','dataSource','java.lang.Object','morePoints','java.util.ArrayList','pointsMenu','javax.swing.JMenu','+linesMenu','+allFootprintsMenu','reloadButton','javax.swing.JButton','allColorItem','javax.swing.JMenuItem','+lineColorItem','modelFootprint','org.opensourcephysics.cabrillo.tracker.Footprint','modelFootprints','org.opensourcephysics.cabrillo.tracker.Footprint[]','linesVisibleCheckbox','javax.swing.JCheckBoxMenuItem','+linesClosedCheckbox','+linesBoldCheckbox','autoPasteCheckbox','javax.swing.JCheckBox','allFootprintsListener','java.awt.event.ActionListener','+allCircleFootprintsListener']]
,['S',['startupFootprint']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DatasetManager$O',  function (data, source) {
C$.c$$O.apply(this, [source]);
this.getDataClip$().addPropertyChangeListener$java_beans_PropertyChangeListener(this);
var name=data.getName$();
if (name == null  || name.trim$().equals$O("") ) {
name=$I$(9).getString$S("ParticleDataTrack.New.Name");
}name=name.replaceAll$S$S("_", " ");
this.setName$S(name);
this.setData$org_opensourcephysics_display_DatasetManager(data);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (source) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.dataSource=source;
this.$points=Clazz.array($I$(10), -1, [Clazz.new_($I$(10,1))]);
$I$(11).tracePtsPerStep=1;
this.autoPasteEnabled=!$I$(5).isJS;
this.setFootprint$S(C$.startupFootprint);
this.defaultFootprint=this.getFootprint$();
if (!(Clazz.instanceOf(source, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack"))) {
this.modelFootprints=Clazz.array($I$(8), -1, [$I$(12).getFootprint$S("Footprint.MultiLine"), $I$(12).getFootprint$S("Footprint.BoldMultiLine")]);
this.modelFootprint=this.modelFootprints[0];
}this.pointsMenu=Clazz.new_($I$(13,1));
this.linesMenu=Clazz.new_($I$(13,1));
this.allFootprintsListener=((P$.ParticleDataTrack$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].doAllFoot$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], [e.getActionCommand$()]);
});
})()
), Clazz.new_(P$.ParticleDataTrack$1.$init$,[this, null]));
this.allCircleFootprintsListener=((P$.ParticleDataTrack$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].doAllCircle$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], [e.getActionCommand$()]);
});
})()
), Clazz.new_(P$.ParticleDataTrack$2.$init$,[this, null]));
this.allColorItem=Clazz.new_($I$(14,1));
this.allColorItem.addActionListener$java_awt_event_ActionListener(((P$.ParticleDataTrack$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (de) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].doAllColor$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []);
});
})()
), Clazz.new_(P$.ParticleDataTrack$3.$init$,[this, null])));
this.lineColorItem=Clazz.new_($I$(14,1));
this.lineColorItem.addActionListener$java_awt_event_ActionListener(((P$.ParticleDataTrack$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var color=this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'].getColor$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrack'], []);
$I$(5,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[color, $I$(9).getString$S("TTrack.Dialog.Color.Title"), ((P$.ParticleDataTrack$4$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ParticleDataTrack$4$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor !== this.$finals$.color ) {
var control=Clazz.new_([Clazz.new_($I$(16,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack']])],$I$(15,1).c$$O);
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getLeader$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []).setLineColor$java_awt_Color.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getLeader$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []), [newColor]);
$I$(17).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], control);
}});
})()
), Clazz.new_(P$.ParticleDataTrack$4$lambda1.$init$,[this, {color:color}]))]);
});
})()
), Clazz.new_(P$.ParticleDataTrack$4.$init$,[this, null])));
this.linesVisibleCheckbox=Clazz.new_($I$(18,1));
this.linesVisibleCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ParticleDataTrack$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].refreshing) return;
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].modelFootprintVisible=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].linesVisibleCheckbox.isSelected$();
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
$I$(19).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].tp);
});
})()
), Clazz.new_(P$.ParticleDataTrack$5.$init$,[this, null])));
this.linesClosedCheckbox=Clazz.new_($I$(18,1));
this.linesClosedCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ParticleDataTrack$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].refreshing) return;
var f=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getModelFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []);
if (Clazz.instanceOf(f, "org.opensourcephysics.cabrillo.tracker.MultiLineFootprint")) {
(f).setClosed$Z(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].linesClosedCheckbox.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
$I$(19).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].tp);
}});
})()
), Clazz.new_(P$.ParticleDataTrack$6.$init$,[this, null])));
this.linesBoldCheckbox=Clazz.new_($I$(18,1));
this.linesBoldCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ParticleDataTrack$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].refreshing) return;
var mlf=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getModelFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []);
var c=mlf.getColor$();
var closed=mlf.isClosed$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].linesBoldCheckbox.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getLeader$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []).setModelFootprint$S("Footprint.BoldMultiLine" + "#" + closed );
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getLeader$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []).setModelFootprint$S("Footprint.MultiLine" + "#" + closed );
}this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getModelFootprint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []).setColor$java_awt_Color(c);
this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PointMass'], []);
$I$(19).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].tp);
});
})()
), Clazz.new_(P$.ParticleDataTrack$7.$init$,[this, null])));
this.allFootprintsMenu=Clazz.new_($I$(13,1));
}, 1);

Clazz.newMeth(C$, 'c$$OA$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack',  function (data, parent) {
C$.c$$O.apply(this, [parent]);
parent.morePoints.add$O(this);
this.dataClip=parent.getDataClip$();
this.getDataClip$().addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.setPointName$S(data[0].toString());
this.setColor$java_awt_Color(parent.getColor$());
var f=parent.getFootprint$();
var fname=f.getName$();
this.setFootprint$S(fname);
if (Clazz.instanceOf(f, "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
var cf=f;
var cfnew=this.getFootprint$();
cfnew.setProperties$S(cf.getProperties$());
}var xyData=data[1];
p$2.setCoreData$DAA$Z.apply(this, [xyData, true]);
}, 1);

Clazz.newMeth(C$, 'c$$DAA$java_util_ArrayList',  function (coreData, pointData) {
C$.c$$O.apply(this, [null]);
this.getDataClip$().addPropertyChangeListener$java_beans_PropertyChangeListener(this);
try {
p$2.setCoreData$DAA$Z.apply(this, [coreData, true]);
this.setMoreData$java_util_ArrayList(pointData);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setMoreData$java_util_ArrayList',  function (pointData) {
var empty=this.morePoints.isEmpty$();
for (var i=0; i < pointData.size$(); i++) {
var next=pointData.get$I(i);
var name=next[0];
var xyArray=next[1];
var target=null;
if (empty) {
target=Clazz.new_(C$.c$$OA$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack,[next, this]);
target.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
if (this.tp != null ) {
this.tp.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(target);
}p$2.setCoreData$DAA$Z.apply(target, [xyArray, true]);
} else {
for (var j=0; j < this.morePoints.size$(); j++) {
var p=this.morePoints.get$I(j);
if (p != null  && p.getName$S(null) != null   && p.getName$S(null).equals$O(name) ) {
target=p;
p$2.setCoreData$DAA$Z.apply(target, [xyArray, true]);
break;
}}
}}
});

Clazz.newMeth(C$, 'doAllColor$',  function () {
var color=this.getColor$();
$I$(5,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[color, $I$(9).getString$S("TTrack.Dialog.Color.Title"), ((P$.ParticleDataTrack$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ParticleDataTrack$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor !== this.$finals$.color ) {
var control=Clazz.new_([Clazz.new_($I$(16,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack']])],$I$(15,1).c$$O);
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], [newColor]);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setColor$java_awt_Color.apply(next, [newColor]);
}
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getLeader$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []).setLineColor$java_awt_Color.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getLeader$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []), [newColor]);
$I$(17).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], control);
}});
})()
), Clazz.new_(P$.ParticleDataTrack$lambda1.$init$,[this, {color:color}]))]);
});

Clazz.newMeth(C$, 'doAllCircle$S',  function (footprintName) {
var control=Clazz.new_([Clazz.new_($I$(16,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this])],$I$(15,1).c$$O);
this.setFootprint$S(footprintName);
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setFootprint$S(footprintName);
}
var cfp=this.getFootprint$();
cfp.showProperties$org_opensourcephysics_cabrillo_tracker_TTrack(this);
this.erase$();
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var cf=next.getFootprint$();
cf.setProperties$S(cfp.getProperties$());
next.erase$();
}
$I$(17).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
$I$(19).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'doAllFoot$S',  function (footprintName) {
if (this.getFootprint$().getName$().equals$O(footprintName)) return;
var control=Clazz.new_([Clazz.new_($I$(16,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this])],$I$(15,1).c$$O);
this.setFootprint$S(footprintName);
this.erase$();
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setFootprint$S(footprintName);
next.erase$();
}
$I$(17).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(this, control);
$I$(19).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'delete$Z',  function (postEdit) {
if (this.isLocked$() && !this.isDependent$() ) return;
if (this.tp != null ) {
this.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.tp.selectedSteps.clear$();
this.tframe.removePropertyChangeListener$S$java_beans_PropertyChangeListener("windowfocus", this);
var coords=this.tp.getCoords$();
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && (coords).getOriginTrack$() === this  ) {
coords=(coords).getCoords$();
this.tp.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(coords);
}}if (postEdit) {
$I$(17).postTrackDelete$org_opensourcephysics_cabrillo_tracker_TTrack(this);
}for (var track, $track = this.morePoints.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.delete$Z(false);
}
this.morePoints.clear$();
C$.superclazz.prototype.delete$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'setModelFootprint$S',  function (name) {
if (this !== this.getLeader$() ) {
this.getLeader$().setModelFootprint$S(name);
return;
}var props=null;
var n=name.indexOf$S("#");
if (n > -1) {
props=name.substring$I(n + 1);
name=name.substring$I$I(0, n);
}for (var i=0; i < this.modelFootprints.length; i++) {
if (name.equals$O(this.modelFootprints[i].getName$())) {
this.modelFootprint=this.modelFootprints[i];
if (props != null  && Clazz.instanceOf(this.modelFootprint, "org.opensourcephysics.cabrillo.tracker.MultiLineFootprint") ) {
var mlf=this.modelFootprint;
try {
var closed=Boolean.parseBoolean$S(props);
mlf.setClosed$Z(closed);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}break;
}}
});

Clazz.newMeth(C$, 'getModelFootprint$',  function () {
return this.getLeader$().modelFootprint;
});

Clazz.newMeth(C$, 'getModelFootprintName$',  function () {
var s=this.getModelFootprint$().getName$();
if (Clazz.instanceOf(this.getModelFootprint$(), "org.opensourcephysics.cabrillo.tracker.MultiLineFootprint")) {
var mlf=this.getModelFootprint$();
s+="#" + mlf.isClosed$();
}return s;
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, menu0) {
if (this.getLeader$() !== this ) {
return this.getPointMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}var menu=C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu0]);
menu.setIcon$javax_swing_Icon(this.getIcon$I$I$S(21, 16, "model"));
menu.removeAll$();
this.pointsMenu.setText$S($I$(9).getString$S("ParticleDataTrack.Menu.Points"));
this.pointsMenu.removeAll$();
this.pointsMenu.add$javax_swing_JMenuItem(this.getPointMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel));
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.pointsMenu.add$javax_swing_JMenuItem(next.getPointMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel));
}
this.refreshing=true;
if (this.morePoints.size$() > 0) {
this.lineColorItem.setText$S($I$(9).getString$S("TTrack.MenuItem.Color"));
this.linesVisibleCheckbox.setText$S(this.visibleItem.getText$());
this.linesVisibleCheckbox.setSelected$Z(this.modelFootprintVisible);
this.linesClosedCheckbox.setText$S($I$(9).getString$S("ParticleDataTrack.Checkbox.Closed"));
this.linesClosedCheckbox.setSelected$Z(Clazz.instanceOf(this.getModelFootprint$(), "org.opensourcephysics.cabrillo.tracker.MultiLineFootprint") && (this.getModelFootprint$()).isClosed$() );
this.linesMenu.setText$S($I$(9).getString$S("ParticleDataTrack.Menu.Lines"));
this.linesBoldCheckbox.setText$S($I$(9).getString$S("CircleFootprint.Dialog.Checkbox.Bold"));
this.linesBoldCheckbox.setSelected$Z(this.getModelFootprint$().getName$().indexOf$S("Bold") > -1);
this.linesMenu.removeAll$();
this.linesMenu.add$javax_swing_JMenuItem(this.lineColorItem);
this.linesMenu.addSeparator$();
this.linesMenu.add$javax_swing_JMenuItem(this.linesVisibleCheckbox);
this.linesMenu.add$javax_swing_JMenuItem(this.linesBoldCheckbox);
if (this.morePoints.size$() > 1) {
this.linesMenu.add$javax_swing_JMenuItem(this.linesClosedCheckbox);
}}this.refreshing=false;
this.allFootprintsMenu.setText$S($I$(9).getString$S("TTrack.MenuItem.Footprint"));
this.allFootprintsMenu.removeAll$();
var fp=this.getFootprints$();
var item;
for (var i=0; i < fp.length; i++) {
item=Clazz.new_([fp[i].getDisplayName$(), fp[i].getIcon$I$I(21, 16)],$I$(14,1).c$$S$javax_swing_Icon);
item.setActionCommand$S(fp[i].getName$());
if (Clazz.instanceOf(fp[i], "org.opensourcephysics.cabrillo.tracker.CircleFootprint")) {
item.setText$S(fp[i].getDisplayName$() + "...");
item.addActionListener$java_awt_event_ActionListener(this.allCircleFootprintsListener);
} else {
item.addActionListener$java_awt_event_ActionListener(this.allFootprintsListener);
}if (fp[i] === this.footprint ) {
item.setBorder$javax_swing_border_Border($I$(20,"createLineBorder$java_awt_Color",[item.getBackground$().darker$()]));
}this.allFootprintsMenu.add$javax_swing_JMenuItem(item);
}
this.allColorItem.setText$S($I$(9).getString$S("TTrack.MenuItem.Color"));
menu.add$javax_swing_JMenuItem(this.modelBuilderItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.descriptionItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.allColorItem);
menu.add$javax_swing_JMenuItem(this.allFootprintsMenu);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.pointsMenu);
if (this.morePoints.size$() > 0) {
menu.add$javax_swing_JMenuItem(this.linesMenu);
}menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.visibleItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.deleteTrackItem);
return menu;
});

Clazz.newMeth(C$, 'getPointMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
this.createMenuIfNecessary$();
var menu=Clazz.new_($I$(13,1));
if (this.getLeader$() !== this ) {
C$.superclazz.prototype.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu.apply(this, [trackerPanel, menu]);
}if (this.colorItem == null ) this.getMenuItems$();
this.colorItem.setText$S($I$(9).getString$S("TTrack.MenuItem.Color"));
this.footprintMenu.setText$S($I$(9).getString$S("TTrack.MenuItem.Footprint"));
this.velocityMenu.setText$S($I$(9).getString$S("PointMass.MenuItem.Velocity"));
this.accelerationMenu.setText$S($I$(9).getString$S("PointMass.MenuItem.Acceleration"));
menu.setText$S(this.getPointName$());
menu.setIcon$javax_swing_Icon(this.getFootprint$().getIcon$I$I(21, 16));
menu.removeAll$();
menu.add$javax_swing_JMenuItem(this.colorItem);
menu.add$javax_swing_JMenuItem(this.footprintMenu);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.velocityMenu);
menu.add$javax_swing_JMenuItem(this.accelerationMenu);
if (trackerPanel.isEnabled$S("model.stamp")) {
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.stampItem);
}return menu;
});

Clazz.newMeth(C$, 'getIcon$I$I$S',  function (w, h, context) {
if (context.contains$CharSequence("point")) {
return this.getFootprint$().getIcon$I$I(w, h);
}var shapeIcons=Clazz.new_($I$(7,1));
var l=this.getLeader$();
p$2.addShapeIcons$org_opensourcephysics_cabrillo_tracker_TTrack$java_util_ArrayList$I$I.apply(this, [l, shapeIcons, w, h]);
for (var track, $track = l.morePoints.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
p$2.addShapeIcons$org_opensourcephysics_cabrillo_tracker_TTrack$java_util_ArrayList$I$I.apply(this, [track, shapeIcons, w, h]);
}
return Clazz.new_([Clazz.new_($I$(22,1).c$$java_util_ArrayList,[this, null, shapeIcons])],$I$(21,1).c$$javax_swing_Icon);
});

Clazz.newMeth(C$, 'addShapeIcons$org_opensourcephysics_cabrillo_tracker_TTrack$java_util_ArrayList$I$I',  function (track, shapeIcons, w, h) {
shapeIcons.add$O(track.getFootprint$().getIcon$I$I(w, h).getBaseIcon$());
}, p$2);

Clazz.newMeth(C$, 'getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (this.getLeader$().reloadButton == null ) {
this.tframe.checkClipboardListener$();
var h=trackerPanel.getTrackBar$Z(true).toolbarComponentHeight;
this.getLeader$().reloadButton=((P$.ParticleDataTrack$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.$finals$.h;
return dim;
});
})()
), Clazz.new_($I$(23,1),[this, {h:h}],P$.ParticleDataTrack$8));
this.tframe.addPropertyChangeListener$S$java_beans_PropertyChangeListener("windowfocus", this.getLeader$());
}if (this.autoPasteCheckbox == null  && $I$(5).allowAutopaste ) {
this.autoPasteCheckbox=Clazz.new_($I$(24,1));
this.autoPasteCheckbox.setOpaque$Z(false);
this.autoPasteCheckbox.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.autoPasteCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ParticleDataTrack$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].doAutoPaste$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], [this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].autoPasteCheckbox.isSelected$()]);
});
})()
), Clazz.new_(P$.ParticleDataTrack$9.$init$,[this, null])));
}var list=C$.superclazz.prototype.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
if (trackerPanel.getSelectedPoint$() == null ) {
list.remove$O(this.massLabel);
list.remove$O(this.massField);
var autoloadable=this.getSource$() == null  || Clazz.instanceOf(this.getSource$(), "java.lang.String") ;
if (autoloadable && $I$(5).allowAutopaste ) {
this.autoPasteCheckbox.setText$S(this.getSource$() == null  ? $I$(9).getString$S("TMenuBar.MenuItem.AutoPasteData.Text") : $I$(9).getString$S("ParticleDataTrack.Checkbox.Autoload.Text"));
this.autoPasteCheckbox.setSelected$Z(this.isAutoPasteEnabled$());
list.add$O(this.autoPasteCheckbox);
list.add$O(this.mSeparator);
}}this.massField.setEnabled$Z(true);
return list;
});

Clazz.newMeth(C$, 'doAutoPaste$Z',  function (tf) {
this.setAutoPasteEnabled$Z(tf);
if (this.tp == null ) return;
if (this.tframe == null ) return;
if (this.isAutoPasteEnabled$()) {
if (this.getSource$() == null ) {
var clipboardListener=this.tframe.getClipboardListener$();
var s=$I$(5).paste$java_util_function_Consumer(null);
if (s != null ) {
if (C$.getImportableDataName$S(s) != null ) {
try {
clipboardListener.processContents$S(s);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
}}} else if (Clazz.instanceOf(this.getSource$(), "java.lang.String")) {
this.tp.importDataAsync$S$O$Runnable(this.getSource$().toString(), null, null);
}}if (this.tp.getSelectedTrack$() === this ) {
this.tp.refreshTrackBar$();
}this.tframe.checkClipboardListener$();
});

Clazz.newMeth(C$, 'isAutoPasteEnabled$',  function () {
return this.autoPasteEnabled;
});

Clazz.newMeth(C$, 'setAutoPasteEnabled$Z',  function (enable) {
this.getLeader$().autoPasteEnabled=enable;
});

Clazz.newMeth(C$, 'getPointName$',  function () {
if (this.pointName == null  || this.pointName.length$() == 0 ) {
this.pointName=p$2.getPointChar$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack.apply(this.getLeader$(), [this]);
}var l=this.getLeader$();
var count=(this.pointName.equals$O(l.pointName) ? 1 : 0);
var i=(count == 1 && l === this   ? 1 : 0);
if (l.morePoints == null ) {
} else {
for (var next, $next = l.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (this.pointName.equals$O(next.pointName) && (++count > 0) && next === this   ) {
i=count;
}}
}return (count > 1 ? this.pointName + " " + i  : this.pointName);
});

Clazz.newMeth(C$, 'setPointName$S',  function (newName) {
if (newName == null ) newName="";
var n=newName.indexOf$S("(");
if (n > -1) {
newName=newName.substring$I$I(0, n).trim$();
} else {
n=newName.indexOf$S("[");
if (n > -1) {
newName=newName.substring$I$I(0, n).trim$();
}}this.pointName=newName;
var l=this.getLeader$();
var fullName=l.getFullName$();
var changed=!fullName.equals$O(l.name);
l.name=fullName;
for (var next, $next = l.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
fullName=next.getFullName$();
changed=!!(changed|(!fullName.equals$O(next.name)));
next.name=fullName;
}
if (changed) {
this.firePropertyChange$S$O$O("name", null, null);
}});

Clazz.newMeth(C$, 'getPointChar$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack',  function (track) {
return (track === this  ? "A" : String.valueOf$C(String.fromCharCode((66 + this.morePoints.indexOf$O(track)))));
}, p$2);

Clazz.newMeth(C$, 'setAllColors$java_awt_ColorA',  function (colors) {
var len=Math.min(this.morePoints.size$() + 1, colors.length - 1);
this.setColor$java_awt_Color(colors[0]);
for (var i=0; i < len; i++) {
this.morePoints.get$I(i).setColor$java_awt_Color(colors[i + 1]);
}
var c=colors[colors.length - 1];
for (var i=0; i < this.modelFootprints.length; i++) {
this.modelFootprints[i].setColor$java_awt_Color(c);
}
this.erase$();
$I$(19).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'setAllFootprints$SA',  function (footprints) {
var len=Math.min(this.morePoints.size$() + 1, footprints.length - 1);
this.setFootprint$S(footprints[0]);
for (var i=0; i < len; i++) {
this.morePoints.get$I(i).setFootprint$S(footprints[i + 1]);
}
this.setModelFootprint$S(footprints[footprints.length - 1]);
this.erase$();
$I$(19).repaintT$java_awt_Component(this.tp);
});

Clazz.newMeth(C$, 'getFullName$',  function () {
return this.getLeader$().modelName + " " + this.getPointName$() ;
});

Clazz.newMeth(C$, 'getName$S',  function (context) {
if (context == null ) {
var mod=this.getLeader$().modelName;
var fullName=this.getName$();
if (fullName.startsWith$S(mod)) return fullName.substring$I$I(mod.length$(), fullName.length$()).trim$();
} else if (context.contains$CharSequence("point")) {
return this.getName$();
}return this.getLeader$().modelName;
});

Clazz.newMeth(C$, 'setName$S',  function (newName) {
if (this.morePoints == null ) return;
if (this.getLeader$() === this ) {
if (this.getFullName$().equals$O(newName)) return;
this.modelName=newName;
this.name=this.getFullName$();
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.name=next.getFullName$();
}
}});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
C$.superclazz.prototype.setColor$java_awt_Color.apply(this, [color]);
if (this.getLeader$() !== this ) {
this.getLeader$().firePropertyChange$S$O$O("color", null, color);
}});

Clazz.newMeth(C$, 'setLineColor$java_awt_Color',  function (color) {
if (this.getLeader$() === this ) {
this.modelFootprint.setColor$java_awt_Color(color);
this.firePropertyChange$S$O$O("color", null, color);
this.erase$();
if (this.tp != null ) {
$I$(19).repaintT$java_awt_Component(this.tp);
}}});

Clazz.newMeth(C$, 'setFootprint$S',  function (name) {
C$.superclazz.prototype.setFootprint$S.apply(this, [name]);
if (this.getLeader$() !== this ) {
this.getLeader$().firePropertyChange$S$O$O("footprint", null, this.getLeader$().footprint);
}});

Clazz.newMeth(C$, 'getLeader$',  function () {
return (this.dataSource != null  && Clazz.instanceOf(this.dataSource, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")  ? this.dataSource : this);
});

Clazz.newMeth(C$, 'setData$org_opensourcephysics_display_DatasetManager',  function (manager) {
var pointData=C$.getPointData$org_opensourcephysics_display_DatasetManager$I(manager, 1);
this.sourceData=manager;
var tPrev=this.tData;
var nextPointData=pointData.get$I(0);
this.setPointName$S(nextPointData[0]);
var xyData=nextPointData[1];
var xData=xyData[0];
var yData=xyData[1];
var timeArray=C$.getTimeData$org_opensourcephysics_display_DatasetManager(manager);
if (timeArray != null  && xData.length != timeArray.length ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Time data has incorrect array length"]);
}p$2.setCoreData$DAA$Z.apply(this, [Clazz.array(Double.TYPE, -2, [xData, yData, timeArray]), true]);
for (var i=1; i < pointData.size$(); i++) {
nextPointData=pointData.get$I(i);
xyData=nextPointData[1];
xData=xyData[0];
yData=xyData[1];
if (i > this.morePoints.size$()) {
var target=Clazz.new_(C$.c$$OA$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack,[nextPointData, this]);
target.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
if (this.tp != null ) {
this.tp.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(target);
}} else {
var target=this.morePoints.get$I(i - 1);
p$2.setCoreData$DAA$Z.apply(target, [Clazz.array(Double.TYPE, -2, [xData, yData]), true]);
target.setPointName$S(nextPointData[0]);
}}
for (var i=this.morePoints.size$() - 1; i >= pointData.size$() - 1; i--) {
var next=this.morePoints.remove$I(i);
next.delete$Z(false);
}
this.setPointName$S(this.pointName);
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setPointName$S(next.pointName);
}
if (this.tData != null  && this.tData.length > 1  && tPrev != null   && tPrev.length > 1  && this.getVideoPanel$() != null  ) {
var changed=this.tData[0] != tPrev[0]  || (this.tData[1] - this.tData[0]) != (tPrev[1] - tPrev[0])  ;
var player=this.getVideoPanel$().getPlayer$();
var isDataTime=player.getClipControl$().getTimeSource$() === this ;
if (changed && isDataTime && this.functionPanel != null   ) {
var dtPanel=this.functionPanel;
dtPanel.refreshTimeSource$();
}}});

Clazz.newMeth(C$, 'getData$',  function () {
return this.sourceData;
});

Clazz.newMeth(C$, 'getSource$',  function () {
return this.dataSource;
});

Clazz.newMeth(C$, 'setSource$O',  function (source) {
this.dataSource=source;
});

Clazz.newMeth(C$, 'getDataClip$',  function () {
if (this.dataClip == null ) {
this.dataClip=Clazz.new_($I$(25,1));
}return this.dataClip;
});

Clazz.newMeth(C$, 'invalidateData$O',  function (newValue) {
this.dataValid=false;
if (this.getLeader$() === this ) {
for (var i=0; i < this.morePoints.size$(); i++) {
this.morePoints.get$I(i).invalidateData$O(newValue);
}
if (newValue !== Boolean.FALSE ) this.firePropertyChange$S$O$O("data", null, newValue === Boolean.TRUE  ? null : newValue);
}});

Clazz.newMeth(C$, 'getVideoClip$',  function () {
if (this.tp == null ) {
return null;
}return this.tp.getPlayer$().getVideoClip$();
});

Clazz.newMeth(C$, 'isVisible$',  function () {
if (this.getLeader$() !== this ) {
return this.getLeader$().isVisible$();
}return C$.superclazz.prototype.isVisible$.apply(this, []);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (this.getLeader$() !== this  && vis != this.getLeader$().isVisible$()  ) {
this.getLeader$().setVisible$Z(vis);
}for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setVisible$Z(vis);
}
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
var stepCount=this.getEndFrame$() - this.getStartFrame$();
var index=this.dataClip.getStartIndex$() + stepCount * this.dataClip.getStride$();
return Math.min(index, this.dataClip.getDataLength$() - 1);
});

Clazz.newMeth(C$, 'getStepTime$I',  function (step) {
if (this.tData == null ) return NaN;
var index=this.getDataClip$().stepToIndex$I(step);
if (index < this.tData.length) return this.tData[index];
return NaN;
});

Clazz.newMeth(C$, 'isTimeDataAvailable$',  function () {
if (this.dataClip == null  || this.getVideoClip$() == null  ) return false;
var n=Math.max(this.dataClip.getStride$(), this.dataClip.getStartIndex$());
return this.tData != null  && this.tData.length > n ;
});

Clazz.newMeth(C$, 'getVideoStartTime$',  function () {
if (!this.isTimeDataAvailable$()) return NaN;
var t0=this.tData[this.getDataClip$().getStartIndex$()];
var duration=this.getFrameDuration$();
return t0 - duration * (this.getStartFrame$() - this.getVideoClip$().getStartFrameNumber$());
});

Clazz.newMeth(C$, 'getFrameDuration$',  function () {
if (!this.isTimeDataAvailable$()) return NaN;
return this.tData[this.getDataClip$().getStride$()] - this.tData[0];
});

Clazz.newMeth(C$, 'setStartFrame$I',  function (n) {
if (n == this.getStartFrame$()) return;
n=Math.max(n, 0);
var clip=this.tp.getPlayer$().getVideoClip$();
var end=clip.getLastFrameNumber$();
n=Math.min(n, end);
this.startFrame=n;
this.startStep=clip.frameToStep$I(this.startFrame);
this.refreshInitialTime$();
p$2.adjustVideoClip.apply(this, []);
this.setLastValidFrame$I(-1);
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setLastValidFrame$I(-1);
}
$I$(19).repaintT$java_awt_Component(this.tp);
this.firePropertyChange$S$O$O("startframe", null, Integer.valueOf$I(this.getStartFrame$()));
if (this.tp != null  && !this.requiresConversion ) {
this.tp.getModelBuilder$().refreshSpinners$();
var stepNum=clip.frameToStep$I(this.startFrame);
this.tp.getPlayer$().setStepNumber$I(stepNum);
}});

Clazz.newMeth(C$, 'setStartStep$I',  function (start) {
var clip=this.tp.getPlayer$().getVideoClip$();
var frame=clip.stepToFrame$I(start);
this.setStartFrame$I(frame);
});

Clazz.newMeth(C$, 'getStartStep$',  function () {
if (this.getLeader$() !== this ) {
return this.getLeader$().getStartStep$();
}if (this.startStep < 0 && this.tp != null  ) {
var clip=this.tp.getPlayer$().getVideoClip$();
this.startStep=clip.frameToStep$I(this.startFrame);
}return this.startStep;
});

Clazz.newMeth(C$, 'setEndFrame$I',  function (n) {
this.tp.getModelBuilder$().refreshSpinners$();
});

Clazz.newMeth(C$, 'refreshInitialTime$',  function () {
if (this.tp == null  || this.tp.getPlayer$() == null  ) {
C$.superclazz.prototype.refreshInitialTime$.apply(this, []);
return;
}if (!$I$(3).isTimeSource$org_opensourcephysics_media_core_DataTrack(this) || !this.isTimeDataAvailable$() ) {
C$.superclazz.prototype.refreshInitialTime$.apply(this, []);
return;
}var clipControl=this.tp.getPlayer$().getClipControl$();
clipControl.setTimeSource$org_opensourcephysics_media_core_DataTrack(this);
var param=this.getInitEditor$().getObject$S("t");
var tZero=this.tData[this.getDataClip$().getStartIndex$()];
var t=$I$(11).timeFormat.format$D(tZero);
if (!$I$(11).timeFormat.format$D(param.getValue$()).equals$O(t)) {
var prev=this.refreshing;
this.refreshing=true;
this.getInitEditor$().setExpression$S$S$Z("t", t, false);
this.refreshing=prev;
}});

Clazz.newMeth(C$, 'getStartFrame$',  function () {
if (this.getLeader$() !== this ) {
return this.getLeader$().getStartFrame$();
}var clip=this.tp.getPlayer$().getVideoClip$();
return clip.stepToFrame$I(this.getStartStep$());
});

Clazz.newMeth(C$, 'getEndFrame$',  function () {
var stepSize=this.tp.getPlayer$().getVideoClip$().getStepSize$();
var finalStep=this.getDataClip$().getClipLength$() - 1;
var clipEnd=this.getStartFrame$() + stepSize * finalStep;
var videoEnd=this.tp.getPlayer$().getVideoClip$().getLastFrameNumber$();
while (videoEnd < clipEnd){
clipEnd-=stepSize;
}
return clipEnd;
});

Clazz.newMeth(C$, 'getNextTracePositions$',  function () {
++this.stepCounter;
var index=this.getDataIndexAtVideoStepNumber$I(this.stepCounter);
if (index < 0 || index >= this.$xData.length  || index >= this.$yData.length ) {
return false;
}this.$points[this.myPoint].setLocation$D$D(this.$xData[index], this.$yData[index]);
return true;
});

Clazz.newMeth(C$, 'getDataIndexAtVideoStepNumber$I',  function (videoStepNumber) {
var dataClip=this.getDataClip$();
var len=dataClip.getAvailableClipLength$();
var dataStepNumber=videoStepNumber - this.getStartStep$();
var validData=dataStepNumber >= 0 && dataStepNumber < len ;
var index=this.getDataClip$().stepToIndex$I(dataStepNumber);
return validData ? index : -1;
});

Clazz.newMeth(C$, 'setColorToDefault$I',  function (index) {
C$.superclazz.prototype.setColorToDefault$I.apply(this, [index]);
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setColor$java_awt_Color(this.getColor$());
}
this.getModelFootprint$().setColor$java_awt_Color(this.getColor$());
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (this.tp != null ) {
this.tp.removePropertyChangeListener$S$java_beans_PropertyChangeListener("video", this);
if (panel == null ) this.tframe.checkClipboardListener$();
}C$.superclazz.prototype.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [panel]);
for (var next, $next = this.morePoints.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
}
if (this.tp != null ) {
this.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("video", this);
if (this.requiresConversion) {
p$2.convertFrameToStepParameters.apply(this, []);
}if (panel != null ) {
var videoClip=panel.getPlayer$().getVideoClip$();
var length=videoClip.getLastFrameNumber$() - videoClip.getFirstFrameNumber$() + 1;
this.dataClip.setClipLength$I(Math.min(length, this.dataClip.getClipLength$()));
this.firePropertyChange$S$O$O("videoclip", null, null);
if (this.useDataTime) {
panel.getPlayer$().getClipControl$().setTimeSource$org_opensourcephysics_media_core_DataTrack(this);
this.firePropertyChange$S$O$O("timedata", null, null);
}}}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
switch (e.getPropertyName$()) {
case "stepsize":
case "startframe":
case "stepcount":
case "clip_length":
case "clip_start":
case "clip_stride":
case "clip_adjusting":
this.refreshInitialTime$();
p$2.adjustVideoClip.apply(this, []);
this.firePropertyChange$S$O$O("dataclip", null, null);
break;
case "video":
this.firePropertyChange$S$O$O("videoclip", null, null);
break;
case "windowfocus":
if (!$I$(5).allowAutopaste || !this.isAutoPasteEnabled$() ) return;
if (this.tp != null  && this.tp === this.tframe.getSelectedPanel$()   && this === this.getLeader$()  ) {
var dataString=null;
if (this.dataSource == null ) {
dataString=$I$(5).paste$java_util_function_Consumer(null);
} else if (Clazz.instanceOf(this.dataSource, "java.lang.String")) {
dataString=$I$(26,"getString$S",[this.dataSource.toString()]);
}if (dataString != null ) {
try {
var datasetManager=$I$(27).parseData$S$S(dataString, null);
if (datasetManager != null ) {
var dataName=datasetManager[0].getName$().replaceAll$S$S("_", " ");
var trackName=this.getName$S("model");
if (trackName.equals$O(dataName) || ("".equals$O(dataName) && trackName.equals$O($I$(9).getString$S("ParticleDataTrack.New.Name")) ) ) {
this.setData$org_opensourcephysics_display_DatasetManager(datasetManager[0]);
this.prevDataString=dataString;
}}} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
}}return;
case "tab":
if (this.tframe.getState$() == 0 && this.tp != null   && this.tframe != null   && this.tp === e.getNewValue$()  ) {
this.tframe.getClipboardListener$().processContents$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.tp);
}return;
default:
return;
}
this.setLastValidFrame$I(-1);
this.repaint$();
});

Clazz.newMeth(C$, 'initializeFunctionPanel$',  function () {
this.functionPanel=Clazz.new_($I$(28,1).c$$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack,[this]);
p$2.createTimeParameter.apply(this, []);
});

Clazz.newMeth(C$, 'reset$',  function () {
for (var i=0; i < this.steps.array.length; i++) {
var step=this.steps.getStep$I(i);
if (step != null ) {
step.erase$();
}this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(i, null);
}
var coords=this.tp.getCoords$();
var useDefault=this.isUseDefaultReferenceFrame$();
while (useDefault && Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") ){
coords=(coords).getCoords$();
}
var point=this.$points[this.myPoint];
var vidClip=this.getVideoClip$();
var firstFrameInVideoClip=vidClip.getStartFrameNumber$();
var index=this.getDataIndexAtVideoStepNumber$I(0);
if (index > -1) {
point.setLocation$D$D(this.$xData[index], this.$yData[index]);
var transform=coords.getToImageTransform$I(firstFrameInVideoClip);
transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(point, point);
}this.steps.setLength$I(firstFrameInVideoClip + 1);
for (var i=0; i < this.steps.array.length; i++) {
if (i < firstFrameInVideoClip || index == -1 ) this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(i, null);
 else {
var step=this.createPositionStep$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D(this, i, point.x, point.y);
step.setFootprint$org_opensourcephysics_cabrillo_tracker_Footprint(this.getFootprint$());
this.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(i, step);
this.refreshData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I(this.datasetManager, this.tp, firstFrameInVideoClip, 1);
}}
this.getVArray$Integer(this.tp.getID$()).setLength$I(0);
this.getAArray$Integer(this.tp.getID$()).setLength$I(0);
this.traceX=Clazz.array(Double.TYPE, -1, [point.x]);
this.traceY=Clazz.array(Double.TYPE, -1, [point.y]);
this.setLastValidFrame$I(firstFrameInVideoClip);
this.stepCounter=0;
});

Clazz.newMeth(C$, 'setData$org_opensourcephysics_display_Data$O',  function (data, source) {
this.setData$org_opensourcephysics_display_DatasetManager(data);
this.setSource$O(source);
});

Clazz.newMeth(C$, 'getVideoPanel$',  function () {
return this.tp;
});

Clazz.newMeth(C$, 'createPositionStep$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D',  function (track, n, x, y) {
var dt=track;
var newStep;
if (track === this.getLeader$() ) newStep=Clazz.new_($I$(29,1).c$$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack$I$D$D,[dt, n, x, y]);
 else newStep=Clazz.new_($I$(30,1).c$$org_opensourcephysics_cabrillo_tracker_PointMass$I$D$D,[dt, n, x, y]);
newStep.valid=!Double.isNaN$D(x) && !Double.isNaN$D(y) ;
return newStep;
});

Clazz.newMeth(C$, 'getDataArray$',  function () {
return Clazz.array(Double.TYPE, -2, [this.$xData, this.$yData, this.tData]);
});

Clazz.newMeth(C$, 'appendData$org_opensourcephysics_display_DatasetManager',  function (manager) {
this.sourceData=manager;
var pointData=C$.getPointData$org_opensourcephysics_display_DatasetManager$I(manager, 1);
var nextPointData=pointData.get$I(0);
var xyData=nextPointData[1];
var x=xyData[0];
var y=xyData[1];
var oldData=this.getDataArray$();
var n=oldData[0].length;
if (x.length <= n) {
$I$(31,"showMessageDialog$java_awt_Component$O$S$I",[this.tframe, $I$(9).getString$S("ParticleDataTrack.Dialog.NoNewData.Message"), $I$(9).getString$S("ParticleDataTrack.Dialog.NoNewData.Title"), 2]);
return;
}var timeArray=C$.getTimeData$org_opensourcephysics_display_DatasetManager(manager);
var newData=Clazz.array(Double.TYPE, -2, [x, y, timeArray]);
for (var i=0; i < 3; i++) {
if (newData[i] != null  && oldData[i] != null  ) {
System.arraycopy$O$I$O$I$I(oldData[i], 0, newData[i], 0, n);
}}
p$2.setCoreData$DAA$Z.apply(this, [newData, false]);
var len=Math.min(pointData.size$() - 1, this.morePoints.size$());
for (var i=0; i < len; i++) {
nextPointData=pointData.get$I(i + 1);
p$2.setCoreData$DAA$Z.apply(this.morePoints.get$I(i), [Clazz.array(Double.TYPE, -2, [nextPointData[1], nextPointData[2]]), true]);
}
});

Clazz.newMeth(C$, 'getTimeData$org_opensourcephysics_display_DatasetManager',  function (data) {
var datasets=data.getDatasetsRaw$();
for (var dataset, $dataset = datasets.iterator$(); $dataset.hasNext$()&&((dataset=($dataset.next$())),1);) {
var s=dataset.getXColumnName$().toLowerCase$();
var n=s.indexOf$S("(");
if (n > -1) {
s=s.substring$I$I(0, n).trim$();
} else {
n=s.indexOf$S("[");
if (n > -1) {
s=s.substring$I$I(0, n).trim$();
}}if (s.equals$O("t") || s.equals$O("time") ) return dataset.getXPoints$();
s=dataset.getYColumnName$().toLowerCase$();
n=s.indexOf$S("(");
if (n > -1) {
s=s.substring$I$I(0, n).trim$();
} else {
n=s.indexOf$S("[");
if (n > -1) {
s=s.substring$I$I(0, n).trim$();
}}if (s.equals$O("t") || s.equals$O("time") ) return dataset.getYPoints$();
}
return null;
}, 1);

Clazz.newMeth(C$, 'getImportableDataName$S',  function (s) {
var manager=$I$(27).parseData$S$S(s, null);
if (manager == null ) return null;
try {
if (C$.getPointData$org_opensourcephysics_display_DatasetManager$I(manager[0], 0) != null ) {
var name=manager[0].getName$();
if (name.trim$().equals$O("")) {
name=$I$(9).getString$S("ParticleDataTrack.New.Name");
}name=name.replaceAll$S$S("_", " ");
return name;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getTrackForDataString$S$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (dataString, trackerPanel) {
if (dataString == null ) return null;
var list=trackerPanel.getDrawablesTemp$Class(Clazz.getClass(C$));
var ret=null;
for (var m=0, n=list.size$(); m < n; m++) {
var track=list.get$I(m);
if (dataString.equals$O(track.prevDataString)) {
ret=track;
break;
}}
list.clear$();
return ret;
}, 1);

Clazz.newMeth(C$, 'getTrackForData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (data, trackerPanel) {
var name=data.getName$();
if (name == null  || name.trim$().equals$O("") ) {
name=$I$(9).getString$S("ParticleDataTrack.New.Name");
}name=name.replaceAll$S$S("_", " ");
var tracks=trackerPanel.getTracksTemp$();
var track=trackerPanel.getTrack$S$java_util_ArrayList(name, tracks);
var i=1;
while (track != null  && track.getClass$() !== Clazz.getClass(C$)  ){
var nextName=C$.getNextName$S$I(name, i++);
track=trackerPanel.getTrack$S$java_util_ArrayList(nextName, tracks);
if (track == null  || track.getClass$() === Clazz.getClass(C$)  ) {
var type=data.getClass$();
var method;
try {
method=type.getMethod$S$ClassA("setName", Clazz.array(Class, -1, [Clazz.getClass(String)]));
method.invoke$O$OA(data, Clazz.array(java.lang.Object, -1, [nextName]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
tracks.clear$();
if (track == null ) {
var id=data.getID$();
var list=trackerPanel.getDrawablesTemp$Class(Clazz.getClass(C$));
for (var m=0, n=list.size$(); m < n; m++) {
var model=list.get$I(m);
var existingData=model.getData$();
if (existingData != null  && id == existingData.getID$() ) {
track=model;
break;
}}
list.clear$();
}return track;
}, 1);

Clazz.newMeth(C$, 'getNextName$S$I',  function (original, increment) {
if (original.lastIndexOf$S(" ") == original.length$() - 2) {
var core=original.substring$I$I(0, original.length$() - 2);
var coreChar=original.charAt$I(original.length$() - 1);
for (var c="0"; c <= "9"; c=String.fromCharCode(c.$c()+1)) {
if (c == coreChar) {
var newChar=String.fromCharCode((c.$c() + increment));
return core + " " + newChar ;
}}
for (var c="a"; c <= "z"; c=String.fromCharCode(c.$c()+1)) {
if (c == coreChar) {
var newChar=String.fromCharCode((c.$c() + increment));
return core + " " + newChar ;
}}
for (var c="A"; c <= "Z"; c=String.fromCharCode(c.$c()+1)) {
if (c == coreChar) {
var newChar=String.fromCharCode((c.$c() + increment));
return core + " " + newChar ;
}}
}return original + increment;
}, 1);

Clazz.newMeth(C$, 'getPointData$org_opensourcephysics_display_DatasetManager$I',  function (data, mode) {
var results=Clazz.new_($I$(7,1));
if (data == null ) {
if (mode == 0) return null;
throw Clazz.new_(Clazz.load('Exception').c$$S,["Data is null"]);
}var datasets=data.getDatasetsRaw$();
if (datasets == null ) {
if (mode == 0) return null;
throw Clazz.new_(Clazz.load('Exception').c$$S,["Data contains no datasets"]);
}var xIsX=true;
var yIsY=true;
var xColName;
var yColName;
var colName=null;
var xset=null;
var yset=null;
var x="x";
var y="y";
for (var dataset, $dataset = datasets.iterator$(); $dataset.hasNext$()&&((dataset=($dataset.next$())),1);) {
var xname=dataset.getXColumnName$();
var yname=dataset.getYColumnName$();
var xlc=xname.toLowerCase$();
var ylc=yname.toLowerCase$();
xColName=yColName=null;
if (xlc.startsWith$S("x")) {
xColName=xname.substring$I(1).trim$();
} else if (ylc.startsWith$S("x")) {
xColName=yname.substring$I(1).trim$();
xIsX=false;
} else if (xlc.endsWith$S("x")) {
xColName=xname.substring$I$I(0, xname.length$() - 1).trim$();
} else if (ylc.endsWith$S("x")) {
xColName=yname.substring$I$I(0, yname.length$() - 1).trim$();
xIsX=false;
}if (xlc.startsWith$S("y")) {
yColName=xname.substring$I(1).trim$();
yIsY=false;
} else if (ylc.startsWith$S("y")) {
yColName=yname.substring$I(1).trim$();
} else if (xlc.endsWith$S("y")) {
yColName=xname.substring$I$I(0, xname.length$() - 1).trim$();
yIsY=false;
} else if (ylc.endsWith$S("y") && xIsX ) {
yColName=yname.substring$I$I(0, yname.length$() - 1).trim$();
}if (xColName == null  && yColName == null  ) continue;
if (colName == null ) {
if (xColName != null ) {
if (yColName == null ) {
colName=xColName;
xset=dataset;
x=xIsX ? "x" : "y";
} else if (xColName.equals$O(yColName)) {
colName=xColName;
xset=dataset;
yset=dataset;
x=xIsX ? "x" : "y";
y=yIsY ? "y" : "x";
} else {
colName=yColName;
yset=dataset;
y=yIsY ? "y" : "x";
}} else if (yColName != null ) {
colName=yColName;
yset=dataset;
y=yIsY ? "y" : "x";
}} else {
if (xset == null  && colName.equals$O(xColName) ) {
xset=dataset;
x=xIsX ? "x" : "y";
} else if (yset == null  && colName.equals$O(yColName) ) {
yset=dataset;
y=yIsY ? "y" : "x";
} else {
xset=yset=null;
if (xColName != null ) {
colName=xColName;
xset=dataset;
x=xIsX ? "x" : "y";
} else {
colName=yColName;
yset=dataset;
y=yIsY ? "y" : "x";
}}}if (xset == null  || yset == null   || colName == null  ) {
continue;
}colName=colName.replace$C$C("_", " ").trim$();
if (xset.getIndex$() != yset.getIndex$()) {
if (mode == 0) return null;
throw Clazz.new_(Clazz.load('Exception').c$$S,["X and Y data have different array lengths"]);
}if (mode == 0) return results;
var xyData=Clazz.array(Double.TYPE, [2, null]);
xyData[0]=(x == "x" ? xset.getXPoints$() : xset.getYPoints$());
xyData[1]=(y == "x" ? yset.getXPoints$() : yset.getYPoints$());
results.add$O(Clazz.array(java.lang.Object, -1, [colName, xyData]));
xset=yset=null;
colName=null;
}
if (results.isEmpty$()) {
xset=yset=null;
for (var dataset, $dataset = datasets.iterator$(); $dataset.hasNext$()&&((dataset=($dataset.next$())),1);) {
if (!dataset.getYColumnName$().equals$O("?")) continue;
if (xset == null ) {
xset=dataset;
} else {
yset=dataset;
break;
}}
if (xset != null  && yset != null  ) {
if (xset.getIndex$() != yset.getIndex$()) {
if (mode == 0) return null;
throw Clazz.new_(Clazz.load('Exception').c$$S,["X and Y data have different array lengths"]);
}if (mode == 0) return results;
var xyData=Clazz.array(Double.TYPE, [2, null]);
xyData[0]=xset.getYPoints$();
xyData[1]=yset.getYPoints$();
results.add$O(Clazz.array(java.lang.Object, -1, [colName, xyData]));
}}if (results.isEmpty$()) {
if (mode == 0) return null;
throw Clazz.new_(Clazz.load('Exception').c$$S,["Position data (x, y) not defined"]);
}return results;
}, 1);

Clazz.newMeth(C$, 'createTimeParameter',  function () {
this.functionPanel.getInitEditor$().addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z($I$(11).newTimeParam$(), false);
this.getInitEditor$().addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.ParticleDataTrack$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParticleDataTrack$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].refreshing) return;
if ("t".equals$O(e.getOldValue$()) && this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].tp != null  ) {
var param=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'].getInitEditor$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleModel'], []).getObject$S("t");
var clip=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].tp.getPlayer$().getVideoClip$();
var timeOffset=param.getValue$() * 1000 - clip.getStartTime$();
var dt=this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].tp.getPlayer$().getMeanStepDuration$();
var n=clip.getStartFrameNumber$();
var mustRound=timeOffset % dt > 0 ;
n+=clip.getStepSize$() * Long.$ival(Math.round$D(timeOffset / dt));
this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].setStartStep$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], [n]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'].getStartFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ParticleDataTrack'], []) != n || mustRound ) $I$(32).getDefaultToolkit$().beep$();
}});
})()
), Clazz.new_(P$.ParticleDataTrack$10.$init$,[this, null])));
}, p$2);

Clazz.newMeth(C$, 'setCoreData$DAA$Z',  function (data, reset) {
this.$xData=data[0];
this.$yData=data[1];
this.tData=data.length > 2 ? data[2] : null;
this.getDataClip$().setDataLength$I(data[0].length);
this.firePropertyChange$S$O$O("dataclip", null, this.dataClip);
p$2.adjustVideoClip.apply(this, []);
if (reset) {
this.setLastValidFrame$I(-1);
this.refreshSteps$S("ParticleDataTrack");
this.fireStepsChanged$();
}this.invalidWarningShown=true;
this.repaint$();
}, p$2);

Clazz.newMeth(C$, 'adjustVideoClip',  function () {
if (this.tp == null ) return;
var vidClip=this.tp.getPlayer$().getVideoClip$();
var videoEndFrame=vidClip.getEndFrameNumber$();
var isLast=videoEndFrame == vidClip.getLastFrameNumber$();
var dataEndFrame=this.getStartFrame$() + this.getDataClip$().getAvailableClipLength$() - 1;
if (isLast && dataEndFrame > videoEndFrame ) {
vidClip.extendEndFrameNumber$I(dataEndFrame);
} else if (dataEndFrame < videoEndFrame && vidClip.getExtraFrames$() > 0 ) {
var needed=vidClip.getExtraFrames$() - (videoEndFrame - dataEndFrame);
vidClip.setExtraFrames$I(needed);
}}, p$2);

Clazz.newMeth(C$, 'convertFrameToStepParameters',  function () {
if (this.tp == null ) return;
var dataStartStep=-1;
var dataStepCount=-1;
var dataStartFrame=this.startFrameTemp >= 0 ? this.startFrameTemp : this.getStartFrame$();
var vidClip=this.tp.getPlayer$().getVideoClip$();
var clipStepSize=vidClip.getStepSize$();
var clipStepCount=vidClip.getStepCount$();
var data=this.getDataClip$();
var dataFrameCount=data.getClipLength$();
var frameCount=Math.min(dataFrameCount, clipStepCount * clipStepSize);
for (var i=0; i < frameCount; i++) {
if (vidClip.includesFrame$I(dataStartFrame + i)) {
dataStartStep=vidClip.frameToStep$I(dataStartFrame + i);
dataStartFrame=dataStartFrame + i;
break;
}}
for (var i=0; i < frameCount; i++) {
var frame=dataStartFrame + dataFrameCount - i - 1;
if (vidClip.includesFrame$I(frame)) {
var dataEndStep=vidClip.frameToStep$I(frame);
dataStepCount=dataEndStep - dataStartStep + 1;
break;
}}
if (dataStartStep == -1 || dataStepCount == -1 ) {
this.requiresConversion=false;
return;
}var dataStartIndex=data.stepToIndex$I(dataStartFrame - Math.max(0, this.startFrameTemp));
data.setStride$I(data.getStride$() * clipStepSize);
data.setClipLength$I(dataStepCount);
data.setStartIndex$I(dataStartIndex);
this.setStartStep$I(dataStartStep);
var stepNum=this.tp.getPlayer$().getClipControl$().loadedStepNumber;
if (stepNum > -1) this.tp.getPlayer$().setStepNumber$I(stepNum);
this.requiresConversion=false;
}, p$2);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(33,1));
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.startupFootprint="CircleFootprint.FilledCircle#5 outline";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParticleDataTrack, "ComboIcon", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['shapeIcons','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList',  function (icons) {
;C$.$init$.apply(this);
this.shapeIcons=icons;
}, 1);

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
if (this.shapeIcons.size$() == 1) {
this.shapeIcons.get$I(0).paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, x, y);
} else {
var g2=g;
var restoreTransform=g2.getTransform$();
var w=this.getIconWidth$();
var h=this.getIconHeight$();
g2.scale$D$D(0.7, 0.7);
var n=this.shapeIcons.size$();
for (var i=0; i < n; i++) {
if (i % 2 == 0) {
this.shapeIcons.get$I(i).paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, x + (i * w/(n)|0), y);
} else {
this.shapeIcons.get$I(i).paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, x + (i * w/(n)|0), y + (h/2|0));
}}
g2.setTransform$java_awt_geom_AffineTransform(restoreTransform);
}});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.shapeIcons.get$I(0).getIconWidth$();
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.shapeIcons.get$I(0).getIconHeight$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParticleDataTrack, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dataTrack=obj;
control.setValue$S$D("mass", dataTrack.getMass$());
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
control.setValue$S$O("name", dataTrack.modelName);
control.setValue$S$O("x", dataTrack.$xData);
control.setValue$S$O("y", dataTrack.$yData);
control.setValue$S$O("t", dataTrack.tData);
control.setValue$S$O("pointname", dataTrack.pointName);
for (var i=0; i < dataTrack.morePoints.size$(); i++) {
var pointTrack=dataTrack.morePoints.get$I(i);
control.setValue$S$O("x" + i, pointTrack.$xData);
control.setValue$S$O("y" + i, pointTrack.$yData);
control.setValue$S$D("mass" + i, pointTrack.getMass$());
control.setValue$S$O("pointname" + i, pointTrack.pointName);
control.setValue$S$O("color" + i, pointTrack.getColor$());
control.setValue$S$O("footprint" + i, pointTrack.getFootprintName$());
}
control.setValue$S$O("dataclip", dataTrack.getDataClip$());
if (dataTrack.getStartFrame$() > 0) control.setValue$S$I("start_frame", dataTrack.getStartFrame$());
control.setValue$S$Z("use_data_time", $I$(3).isTimeSource$org_opensourcephysics_media_core_DataTrack(dataTrack));
control.setValue$S$O("model_footprint", dataTrack.getModelFootprintName$());
control.setValue$S$O("model_footprint_color", dataTrack.getModelFootprint$().getColor$());
if (dataTrack.modelFootprintVisible) {
control.setValue$S$Z("model_footprint_visible", true);
}if (dataTrack.modelBuilder != null  && dataTrack.tp != null   && dataTrack.tframe != null  ) {
var frame=dataTrack.tframe;
var x=dataTrack.modelBuilder.getLocation$().x - frame.getLocation$().x;
var y=dataTrack.modelBuilder.getLocation$().y - frame.getLocation$().y;
control.setValue$S$I("inspector_x", x);
control.setValue$S$I("inspector_y", y);
control.setValue$S$I("inspector_h", dataTrack.modelBuilder.getHeight$());
control.setValue$S$Z("inspector_visible", dataTrack.modelBuilder.isVisible$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var coreData=p$1.getCoreData$org_opensourcephysics_controls_XMLControl.apply(this, [control]);
var pointData=p$1.getMoreData$org_opensourcephysics_controls_XMLControl.apply(this, [control]);
return Clazz.new_($I$(4,1).c$$DAA$java_util_ArrayList,[coreData, pointData]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dataTrack=obj;
if (dataTrack.getPointName$().equals$O(control.getString$S("pointname"))) {
p$2.setCoreData$DAA$Z.apply(dataTrack, [p$1.getCoreData$org_opensourcephysics_controls_XMLControl.apply(this, [control]), true]);
dataTrack.setMoreData$java_util_ArrayList(p$1.getMoreData$org_opensourcephysics_controls_XMLControl.apply(this, [control]));
}$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
dataTrack.mass=control.getDouble$S("mass");
dataTrack.setPointName$S(control.getString$S("pointname"));
var dataClipControl=control.getChildControl$S("dataclip");
if (dataClipControl != null ) {
dataClipControl.loadObject$O(dataTrack.getDataClip$());
var fileVersion=control.getString$S("semantic_version");
var parent=control;
while (fileVersion == null  && parent.getParentProperty$() != null  ){
parent=parent.getParentProperty$();
if (Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl")) {
fileVersion=(parent).getString$S("semantic_version");
}}
if (fileVersion != null  && !$I$(5).isJS ) {
var result=0;
try {
result=$I$(6).compareVersions$S$S(fileVersion, "6.0.9");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (result < 0) {
dataTrack.requiresConversion=true;
}}}for (var i=0; i < dataTrack.morePoints.size$(); i++) {
var child=dataTrack.morePoints.get$I(i);
child.setMass$D(control.getDouble$S("mass" + i));
child.setColor$java_awt_Color(control.getObject$S("color" + i));
child.setFootprint$S(control.getString$S("footprint" + i));
}
dataTrack.useDataTime=control.getBoolean$S("use_data_time");
var n=control.getInt$S("start_frame");
if (n != -2147483648) dataTrack.startFrame=dataTrack.startFrameTemp=n;
 else {
dataTrack.startFrameUndefined=true;
}if (control.getPropertyNamesRaw$().contains$O("model_footprint")) {
dataTrack.setModelFootprint$S(control.getString$S("model_footprint"));
dataTrack.modelFootprintVisible=control.getBoolean$S("model_footprint_visible");
dataTrack.modelFootprint.setColor$java_awt_Color(control.getObject$S("model_footprint_color"));
} else {
dataTrack.modelFootprint.setColor$java_awt_Color(dataTrack.getColor$());
}if (dataTrack.inspectorX == -2147483648) {
dataTrack.inspectorX=control.getInt$S("inspector_x");
dataTrack.inspectorY=control.getInt$S("inspector_y");
dataTrack.inspectorH=control.getInt$S("inspector_h");
dataTrack.showModelBuilder=control.getBoolean$S("inspector_visible");
}return dataTrack;
});

Clazz.newMeth(C$, 'getCoreData$org_opensourcephysics_controls_XMLControl',  function (control) {
var coreData=Clazz.array(Double.TYPE, [3, null]);
coreData[0]=control.getObject$S("x");
coreData[1]=control.getObject$S("y");
coreData[2]=control.getObject$S("t");
return coreData;
}, p$1);

Clazz.newMeth(C$, 'getMoreData$org_opensourcephysics_controls_XMLControl',  function (control) {
var i=0;
var pointData=Clazz.new_($I$(7,1));
var next=Clazz.array(Double.TYPE, [2, null]);
next[0]=control.getObject$S("x" + i);
while (next[0] != null ){
next[1]=control.getObject$S("y" + i);
var name=control.getString$S("pointname" + i);
pointData.add$O(Clazz.array(java.lang.Object, -1, [name, next]));
++i;
next=Clazz.array(Double.TYPE, [2, null]);
next[0]=control.getObject$S("x" + i);
}
return pointData;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
