(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.TreeSet','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.TTrack','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.Vector','javax.swing.Box','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlotGuestDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allTracks=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['allTracksSelected'],'O',['plot','org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','okButton','javax.swing.JButton','+selectAllButton','checkboxPanel','javax.swing.JPanel','listener','java.awt.event.ActionListener','instructions','javax.swing.border.TitledBorder','allTracks','java.util.TreeSet']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(2).getFrameForComponent$java_awt_Component(panel), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
this.listener=((P$.PlotGuestDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotGuestDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var checkbox=e.getSource$();
var id=Integer.parseInt$S(checkbox.getActionCommand$());
var track=$I$(3).getTrack$I(id);
if (checkbox.isSelected$()) this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.addGuest$org_opensourcephysics_cabrillo_tracker_TTrack(track);
 else this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.removeGuest$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.plotData$();
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.repaint$();
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].updateDisplay$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'], []);
});
})()
), Clazz.new_(P$.PlotGuestDialog$1.$init$,[this, null]));
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.pack$();
}, 1);

Clazz.newMeth(C$, 'setPlot$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel',  function (plot) {
this.plot=plot;
this.updateDisplay$();
});

Clazz.newMeth(C$, 'createGUI',  function () {
var inspectorPanel=Clazz.new_([Clazz.new_($I$(5,1))],$I$(4,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(inspectorPanel);
this.checkboxPanel=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[0, 2])],$I$(4,1).c$$java_awt_LayoutManager);
var etched=$I$(7).createEtchedBorder$();
this.instructions=$I$(7).createTitledBorder$javax_swing_border_Border$S(etched, "");
this.checkboxPanel.setBorder$javax_swing_border_Border(this.instructions);
inspectorPanel.add$java_awt_Component$O(this.checkboxPanel, "Center");
this.okButton=Clazz.new_([$I$(9).getString$S("Dialog.Button.OK")],$I$(8,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(10,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.PlotGuestDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotGuestDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.PlotGuestDialog$2.$init$,[this, null])));
this.selectAllButton=Clazz.new_([$I$(9).getString$S("PlotGuestDialog.Button.SelectAll.Text")],$I$(8,1).c$$S);
this.selectAllButton.setForeground$java_awt_Color(Clazz.new_($I$(10,1).c$$I$I$I,[0, 0, 102]));
this.selectAllButton.addActionListener$java_awt_event_ActionListener(((P$.PlotGuestDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotGuestDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var id, $id = this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].allTracks.iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var track=$I$(3,"getTrack$I",[(id).$c()]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].allTracksSelected) {
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.removeGuest$org_opensourcephysics_cabrillo_tracker_TTrack(track);
} else this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.addGuest$org_opensourcephysics_cabrillo_tracker_TTrack(track);
}
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.plotData$();
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].plot.repaint$();
this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'].updateDisplay$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PlotGuestDialog'], []);
});
})()
), Clazz.new_(P$.PlotGuestDialog$3.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(4,1));
buttonbar.setBorder$javax_swing_border_Border($I$(7).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
inspectorPanel.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.selectAllButton);
buttonbar.add$java_awt_Component(this.okButton);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
var track=$I$(3).getTrack$I(this.plot.trackID);
this.setTitle$S(track.getName$());
this.instructions.setTitle$S($I$(9).getString$S("PlotGuestDialog.Instructions"));
var type=(track.ttype == 5 ? Clazz.getClass($I$(11)) : track.ttype == 9 ? Clazz.getClass($I$(12)) : track.getClass$());
var tracks=this.frame.getTrackerPanelForID$Integer(this.panelID).getDrawablesTemp$Class(type);
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
tracks.removeAll$java_util_Collection(panel.calibrationTools);
tracks.remove$O(track);
var tracksPerColumn=8;
var cols=1 + ((tracks.size$() - 1)/tracksPerColumn|0);
this.checkboxPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1).c$$I$I,[0, cols]));
this.checkboxPanel.removeAll$();
var counter=0;
var h=0;
var box=$I$(13).createVerticalBox$();
this.allTracks.clear$();
this.allTracksSelected=true;
for (var next, $next = tracks.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.allTracks.add$O(Integer.valueOf$I(next.getID$()));
var checkbox=Clazz.new_([next.getName$(), next.getFootprint$().getIcon$I$I(21, 16)],$I$(14,1).c$$S$javax_swing_Icon);
checkbox.setBorderPainted$Z(false);
checkbox.setSelected$Z(this.plot.guests.contains$O(next));
this.allTracksSelected=this.allTracksSelected && checkbox.isSelected$() ;
checkbox.setActionCommand$S(String.valueOf$I(next.getID$()));
checkbox.addActionListener$java_awt_event_ActionListener(this.listener);
box.add$java_awt_Component(checkbox);
h=checkbox.getPreferredSize$().height;
++counter;
if (counter % tracksPerColumn == 0) {
this.checkboxPanel.add$java_awt_Component(box);
counter=0;
if (this.checkboxPanel.getComponentCount$() < cols) {
box=$I$(13).createVerticalBox$();
}}}
tracks.clear$();
if (this.checkboxPanel.getComponentCount$() < cols) {
if (this.checkboxPanel.getComponentCount$() > 0) {
var n=tracksPerColumn - box.getComponentCount$();
box.add$java_awt_Component($I$(13).createVerticalStrut$I(n * h));
}this.checkboxPanel.add$java_awt_Component(box);
}if (this.allTracksSelected) {
}this.selectAllButton.setText$S(this.allTracksSelected ? $I$(9).getString$S("PlotGuestDialog.Button.SelectNone.Text") : $I$(9).getString$S("PlotGuestDialog.Button.SelectAll.Text"));
$I$(15,"setFonts$O$I",[this.checkboxPanel, $I$(15).getLevel$()]);
this.pack$();
$I$(16).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
