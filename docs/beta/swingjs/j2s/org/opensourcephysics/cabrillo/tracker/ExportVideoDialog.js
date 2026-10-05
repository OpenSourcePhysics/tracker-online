(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.geom.AffineTransform','org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.tools.FontSizer','java.awt.Toolkit','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.Box','java.awt.GridLayout','java.util.HashMap','javax.swing.JComboBox','javax.swing.JRadioButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.ButtonGroup','javax.swing.JOptionPane','javax.swing.JButton','java.awt.Color','org.opensourcephysics.display.OSPRuntime','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.media.core.MediaRes','java.awt.Dimension','javax.swing.DefaultComboBoxModel','org.opensourcephysics.controls.XML','org.opensourcephysics.media.BrowserZipExport','javax.swing.ProgressMonitor','java.awt.EventQueue','java.io.File','javax.swing.SwingUtilities','java.awt.image.BufferedImage','org.opensourcephysics.media.core.DeinterlaceFilter','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExportVideoDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transform=Clazz.new_($I$(1,1));
this.oddFirst=true;
},1);

C$.$fields$=[['Z',['isRefreshing','oddFirst'],'I',['mainViewContentIndex','worldViewContentIndex'],'S',['savedFilePath'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','saveAsButton','javax.swing.JButton','+closeButton','sizePanel','javax.swing.JComponent','+viewPanel','+contentPanel','+formatPanel','formatDropdown','javax.swing.JComboBox','+viewDropdown','+sizeDropdown','+contentDropdown','clipPropertiesLabel','javax.swing.JLabel','transform','java.awt.geom.AffineTransform','sizedImage','java.awt.image.BufferedImage','views','java.util.HashMap','+sizes','fullSize','java.awt.Dimension','listener','java.beans.PropertyChangeListener','prevContentItem','java.lang.Object']]
,['O',['videoExporter','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog']]]

Clazz.newMeth(C$, 'getVideoDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
$I$(2).refreshVideoFormats$();
if (C$.videoExporter == null ) {
C$.videoExporter=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
}C$.videoExporter.refreshFormatDropdown$S($I$(3).getPreferredExportExtension$());
C$.videoExporter.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
C$.videoExporter.setFontLevel$I($I$(4).getLevel$());
return C$.videoExporter;
}, 1);

Clazz.newMeth(C$, 'setFormat$S',  function (format) {
if (format != null ) {
this.formatDropdown.setSelectedItem$O(format);
$I$(2).selectedVideoFormat=format;
}});

Clazz.newMeth(C$, 'getFormat$',  function () {
return this.formatDropdown.getSelectedItem$();
});

Clazz.newMeth(C$, 'exportFullSizeVideo$S$S',  function (filePath, trkPath) {
if (this.frame.getTrackerPanelForID$Integer(this.panelID).getVideo$() == null ) {
return null;
}this.viewDropdown.setSelectedIndex$I(0);
try {
this.contentDropdown.setSelectedIndex$I(1);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.contentDropdown.setSelectedIndex$I(0);
} else {
throw e;
}
}
this.sizeDropdown.setSelectedIndex$I(0);
var videoType=$I$(2).videoFormats.get$O(this.formatDropdown.getSelectedItem$());
var size=this.sizes.get$O(this.sizeDropdown.getSelectedItem$());
p$1.render$org_opensourcephysics_media_core_VideoType$java_awt_Dimension$Z$S$S.apply(this, [videoType, size, false, filePath, trkPath]);
return this.savedFilePath;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
p$1.refreshGUI.apply(this, []);
var dim=$I$(5).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var settingsPanel=$I$(8).createVerticalBox$();
contentPane.add$java_awt_Component$O(settingsPanel, "Center");
var upper=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[1, 2])],$I$(6,1).c$$java_awt_LayoutManager);
var lower=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[1, 2])],$I$(6,1).c$$java_awt_LayoutManager);
this.sizes=Clazz.new_($I$(10,1));
this.sizePanel=$I$(8).createVerticalBox$();
this.sizeDropdown=Clazz.new_($I$(11,1));
this.sizeDropdown.setName$S("ExportVideo.size");
this.sizePanel.add$java_awt_Component(this.sizeDropdown);
this.views=Clazz.new_($I$(10,1));
this.viewPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[0, 1])],$I$(6,1).c$$java_awt_LayoutManager);
this.viewDropdown=Clazz.new_($I$(11,1));
this.viewDropdown.setName$S("ExportVideo.view");
this.viewPanel.add$java_awt_Component(this.viewDropdown);
this.viewDropdown.addItemListener$java_awt_event_ItemListener(((P$.ExportVideoDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (e.getStateChange$() == 1) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].isRefreshing) p$1.refreshDropdowns.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'], []);
}});
})()
), Clazz.new_(P$.ExportVideoDialog$1.$init$,[this, null])));
this.contentPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[0, 1])],$I$(6,1).c$$java_awt_LayoutManager);
this.contentDropdown=Clazz.new_($I$(11,1));
this.contentDropdown.setName$S("ExportVideo.content");
this.contentPanel.add$java_awt_Component(this.contentDropdown);
this.contentDropdown.addItemListener$java_awt_event_ItemListener(((P$.ExportVideoDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].isRefreshing) return;
if (e.getStateChange$() == 2) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].prevContentItem=e.getItem$();
}if (e.getStateChange$() == 1) {
var view=this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].views.get$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].viewDropdown.getSelectedItem$());
if (view === this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].panelID) ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].mainViewContentIndex=this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].contentDropdown.getSelectedIndex$();
 else if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.WorldTView")) this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].worldViewContentIndex=this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].contentDropdown.getSelectedIndex$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].contentDropdown.getSelectedIndex$() == 3) {
var odd=Clazz.new_([$I$(13).getString$S("ExportVideoDialog.Deinterlace.OddFirst")],$I$(12,1).c$$S);
odd.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].oddFirst);
var even=Clazz.new_([$I$(13).getString$S("ExportVideoDialog.Deinterlace.EvenFirst")],$I$(12,1).c$$S);
even.setSelected$Z(!this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].oddFirst);
var group=Clazz.new_($I$(14,1));
group.add$javax_swing_AbstractButton(odd);
group.add$javax_swing_AbstractButton(even);
var panel=Clazz.new_($I$(6,1));
panel.add$java_awt_Component(odd);
panel.add$java_awt_Component(even);
var result=$I$(15,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'], panel, $I$(13).getString$S("ExportVideoDialog.Deinterlace.Dialog.Title"), 2, -1]);
if (result == 2 && this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].prevContentItem != null  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].contentDropdown.setSelectedItem$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].prevContentItem);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].prevContentItem=null;
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].oddFirst=odd.isSelected$();
}p$1.refreshDropdowns.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'], []);
}});
})()
), Clazz.new_(P$.ExportVideoDialog$2.$init$,[this, null])));
this.formatPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[0, 1])],$I$(6,1).c$$java_awt_LayoutManager);
this.formatDropdown=Clazz.new_($I$(11,1));
this.formatDropdown.setName$S("ExportVideo.format");
this.formatDropdown.setMaximumRowCount$I($I$(2).videoFormatDescriptions.size$());
this.formatPanel.add$java_awt_Component(this.formatDropdown);
settingsPanel.add$java_awt_Component(upper);
settingsPanel.add$java_awt_Component(lower);
upper.add$java_awt_Component(this.viewPanel);
upper.add$java_awt_Component(this.contentPanel);
lower.add$java_awt_Component(this.sizePanel);
lower.add$java_awt_Component(this.formatPanel);
this.saveAsButton=Clazz.new_($I$(16,1));
this.saveAsButton.setForeground$java_awt_Color(Clazz.new_($I$(17,1).c$$I$I$I,[0, 0, 102]));
this.saveAsButton.addActionListener$java_awt_event_ActionListener(((P$.ExportVideoDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var format=$I$(2).videoFormats.get$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].formatDropdown.getSelectedItem$());
var size=this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].sizes.get$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].sizeDropdown.getSelectedItem$());
p$1.render$org_opensourcephysics_media_core_VideoType$java_awt_Dimension$Z$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'], [format, size, !$I$(18).isJS, null, null]);
$I$(2).selectedVideoFormat=this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].formatDropdown.getSelectedItem$();
});
})()
), Clazz.new_(P$.ExportVideoDialog$3.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(16,1));
this.closeButton.setForeground$java_awt_Color(Clazz.new_($I$(17,1).c$$I$I$I,[0, 0, 102]));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.ExportVideoDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.ExportVideoDialog$4.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(6,1));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.saveAsButton);
buttonbar.add$java_awt_Component(this.closeButton);
this.clipPropertiesLabel=Clazz.new_($I$(19,1));
this.clipPropertiesLabel.setHorizontalAlignment$I(0);
this.clipPropertiesLabel.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(4, 8, 2, 8));
contentPane.add$java_awt_Component$O(this.clipPropertiesLabel, "North");
}, p$1);

Clazz.newMeth(C$, 'refreshGUI',  function () {
var title=$I$(13).getString$S("ExportVideoDialog.Title");
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.setTitle$S(title);
var clip=panel.getPlayer$().getClipControl$().getVideoClip$();
var framecount=$I$(21).getString$S("Filter.Sum.Label.FrameCount").toLowerCase$();
if (framecount.endsWith$S(":")) framecount=framecount.substring$I$I(0, framecount.length$() - 1);
var startframe=$I$(21).getString$S("ClipInspector.Label.StartFrame").toLowerCase$();
if (startframe.endsWith$S(":")) startframe=startframe.substring$I$I(0, startframe.length$() - 1);
var stepsize=$I$(21).getString$S("ClipInspector.Label.StepSize").toLowerCase$();
if (stepsize.endsWith$S(":")) stepsize=stepsize.substring$I$I(0, stepsize.length$() - 1);
title=$I$(13).getString$S("ExportVideoDialog.Label.ClipSettings") + ": " + framecount + " " + clip.getStepCount$() + ", " + startframe + " " + clip.getStartFrameNumber$() + ", " + stepsize + " " + clip.getStepSize$() ;
this.clipPropertiesLabel.setText$S(title);
title=$I$(13).getString$S("ExportVideoDialog.Subtitle.Size");
var space=$I$(20).createEmptyBorder$I$I$I$I(0, 4, 6, 4);
var titled=$I$(20).createTitledBorder$S(title);
var fontLevel=$I$(4).getLevel$();
$I$(4).setFonts$O$I(titled, fontLevel);
this.sizePanel.setBorder$javax_swing_border_Border($I$(20).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(13).getString$S("ExportVideoDialog.Subtitle.View");
titled=$I$(20).createTitledBorder$S(title);
$I$(4).setFonts$O$I(titled, fontLevel);
this.viewPanel.setBorder$javax_swing_border_Border($I$(20).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(13).getString$S("ExportVideoDialog.Subtitle.Content");
titled=$I$(20).createTitledBorder$S(title);
$I$(4).setFonts$O$I(titled, fontLevel);
this.contentPanel.setBorder$javax_swing_border_Border($I$(20).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(13).getString$S("ExportVideoDialog.Subtitle.Format");
titled=$I$(20).createTitledBorder$S(title);
$I$(4).setFonts$O$I(titled, fontLevel);
this.formatPanel.setBorder$javax_swing_border_Border($I$(20).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
this.saveAsButton.setText$S($I$(13).getString$S("ExportVideoDialog.Button.SaveAs"));
this.closeButton.setText$S($I$(13).getString$S("Dialog.Button.Cancel"));
var selectedView=this.viewDropdown.getSelectedItem$();
this.viewDropdown.removeAllItems$();
var s=$I$(13).getString$S("TFrame.View.Main");
s+=" (0)";
this.views.put$O$O(s, panel);
this.viewDropdown.addItem$O(s);
var choosers=this.frame.getVisibleChoosers$Integer(this.panelID);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] != null ) {
var number=" (" + (i + 1) + ")" ;
var tview=choosers[i].getSelectedView$();
if (tview != null  && tview.getViewType$() == 2 ) {
s=tview.getViewName$() + number;
var worldView=tview;
this.views.put$O$O(s, worldView);
this.viewDropdown.addItem$O(s);
} else if (tview != null  && tview.getViewType$() == 0 ) {
s=tview.getViewName$() + number;
var plotView=tview;
var track=plotView.getSelectedTrack$();
if (track != null ) {
var trackView=plotView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.views.put$O$O(s, trackView);
this.viewDropdown.addItem$O(s);
}}}}
s=$I$(13).getString$S("TMenuBar.MenuItem.CopyFrame");
this.views.put$O$O(s, this.frame.getContentPane$());
this.viewDropdown.addItem$O(s);
if (selectedView != null ) this.viewDropdown.setSelectedItem$O(selectedView);
this.pack$();
p$1.refreshDropdowns.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'refreshDropdowns',  function () {
this.isRefreshing=true;
var view=this.views.get$O(this.viewDropdown.getSelectedItem$());
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var video=panel.getVideo$();
var s=null;
this.contentDropdown.removeAllItems$();
if (view === panel ) {
if (video != null ) {
s=$I$(13).getString$S("ExportVideoDialog.Content.VideoAndGraphics");
this.contentDropdown.addItem$O(s);
s=$I$(13).getString$S("ExportVideoDialog.Content.VideoOnly");
this.contentDropdown.addItem$O(s);
}s=$I$(13).getString$S("ExportVideoDialog.Content.GraphicsOnly");
this.contentDropdown.addItem$O(s);
if (video != null ) {
if (panel.getPlayer$().getClipControl$().getVideoClip$().getStepCount$() > 1) {
s=$I$(13).getString$S("ExportVideoDialog.Content.DeinterlacedVideo");
this.contentDropdown.addItem$O(s);
}this.contentDropdown.setSelectedIndex$I(this.mainViewContentIndex);
}} else if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.WorldTView")) {
if (video != null ) {
s=$I$(13).getString$S("ExportVideoDialog.Content.VideoAndGraphics");
this.contentDropdown.addItem$O(s);
}s=$I$(13).getString$S("ExportVideoDialog.Content.GraphicsOnly");
this.contentDropdown.addItem$O(s);
if (video != null ) this.contentDropdown.setSelectedIndex$I(this.worldViewContentIndex);
} else {
s=$I$(13).getString$S("ExportVideoDialog.Content.GraphicsOnly");
this.contentDropdown.addItem$O(s);
}var selectedItem=this.sizeDropdown.getSelectedItem$();
this.sizeDropdown.removeAllItems$();
if (view === panel ) {
var contentIndex=this.contentDropdown.getSelectedIndex$();
if (contentIndex == 1 || contentIndex == 3 ) {
var d=panel.getVideo$().getImageSize$Z(true);
var w=d.width;
var h=d.height;
this.fullSize=p$1.getAcceptedDimension$I$I.apply(this, [w, h]);
s=this.fullSize.width + "x" + this.fullSize.height ;
s+=" (" + $I$(13).getString$S("ExportVideoDialog.VideoSize") + ")" ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, this.fullSize);
} else {
var bounds=panel.getMatBounds$();
this.fullSize=p$1.getAcceptedDimension$I$I.apply(this, [bounds.width, bounds.height]);
s=this.fullSize.width + "x" + this.fullSize.height ;
s+=" (" + $I$(13).getString$S("ExportVideoDialog.MatSize") + ")" ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, this.fullSize);
}var dim=Clazz.new_([(this.fullSize.width * 8/10|0), (this.fullSize.height * 8/10|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width * 3/4|0), (this.fullSize.height * 3/4|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width * 6/10|0), (this.fullSize.height * 6/10|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width/2|0), (this.fullSize.height/2|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width * 4/10|0), (this.fullSize.height * 4/10|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width * 3/8|0), (this.fullSize.height * 3/8|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width * 3/10|0), (this.fullSize.height * 3/10|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width/4|0), (this.fullSize.height/4|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}dim=Clazz.new_([(this.fullSize.width * 2/10|0), (this.fullSize.height * 2/10|0)],$I$(22,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}} else if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.PlotTrackView")) {
var dim=(view).getPanelSize$();
this.fullSize=p$1.getAcceptedDimension$I$I.apply(this, [dim.width, dim.height]);
s=this.fullSize.width + "x" + this.fullSize.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, this.fullSize);
} else {
var dim=view.getSize$();
this.fullSize=p$1.getAcceptedDimension$I$I.apply(this, [dim.width, dim.height]);
s=this.fullSize.width + "x" + this.fullSize.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, this.fullSize);
}if (this.sizes.keySet$().contains$O(selectedItem)) this.sizeDropdown.setSelectedItem$O(selectedItem);
this.isRefreshing=false;
}, p$1);

Clazz.newMeth(C$, 'refreshFormatDropdown$S',  function (preferredExtension) {
var selected=$I$(2).getVideoFormat$S(preferredExtension);
this.formatDropdown.removeAllItems$();
for (var format, $format = $I$(2).videoFormatDescriptions.iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
this.formatDropdown.addItem$O(format);
}
if (selected != null ) this.setFormat$S(selected);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(4).setFonts$O$I(this, level);
var dropdowns=Clazz.array($I$(11), -1, [this.formatDropdown, this.viewDropdown, this.sizeDropdown, this.contentDropdown]);
for (var cb, $cb = 0, $$cb = dropdowns; $cb<$$cb.length&&((cb=($$cb[$cb])),1);$cb++) {
var next=cb;
var n=next.getSelectedIndex$();
var items=Clazz.array(String, [next.getItemCount$()]);
for (var i=0; i < items.length; i++) {
items[i]=next.getItemAt$I(i);
}
var model=Clazz.new_($I$(23,1).c$$OA,[items]);
next.setModel$javax_swing_ComboBoxModel(model);
next.setSelectedIndex$I(n);
}
p$1.refreshGUI.apply(this, []);
this.pack$();
});

Clazz.newMeth(C$, 'setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
p$1.refreshGUI.apply(this, []);
});

Clazz.newMeth(C$, 'getAcceptedDimension$I$I',  function (w, h) {
if (!p$1.isAcceptedDimension$I$I.apply(this, [w, h])) {
while (w % 16 != 0)++w;

while (h % 16 != 0)++h;

}return Clazz.new_($I$(22,1).c$$I$I,[w, h]);
}, p$1);

Clazz.newMeth(C$, 'isAcceptedDimension$I$I',  function (w, h) {
if (w < 160 || h < 120 ) return false;
if (w % 4 != 0 || h % 4 != 0 ) return false;
if (1.0 * h / w == 0.75 ) return true;
if (1.0 * w / h == 1.5 ) return true;
if (16.0 * h / w == 9.0 ) return true;
if (w % 16 == 0 && h % 16 == 0 ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'setVideoVisible$Z',  function (visible) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.setVideoVisible$Z(visible);
}, p$1);

Clazz.newMeth(C$, 'render$org_opensourcephysics_media_core_VideoType$java_awt_Dimension$Z$S$S',  function (videoType, size, showOpenDialog, filePath, trkPath) {
this.setVisible$Z(false);
this.savedFilePath=null;
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var video=panel.getVideo$();
var videoIsVisible=video != null  && video.isVisible$() ;
var magnification=panel.getMagnification$();
var view=this.views.get$O(this.viewDropdown.getSelectedItem$());
if (view === panel  && this.contentDropdown.getSelectedIndex$() != 1 ) {
var zoom=size.getWidth$() / this.fullSize.getWidth$();
if (zoom != magnification ) {
panel.setMagnification$D(zoom);
}if (this.contentDropdown.getSelectedIndex$() == 0) p$1.setVideoVisible$Z.apply(this, [true]);
 else if (this.contentDropdown.getSelectedIndex$() == 2) p$1.setVideoVisible$Z.apply(this, [false]);
} else if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.WorldTView")) {
p$1.setVideoVisible$Z.apply(this, [this.contentDropdown.getSelectedIndex$() == 0]);
} else if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.PlotTrackView")) {
var trackView=view;
var extent=trackView.getViewport$().getExtentSize$();
var full=trackView.getViewport$().getView$().getSize$();
if (!extent.equals$O(full)) {
$I$(15,"showMessageDialog$java_awt_Component$O$S$I",[panel, $I$(13).getString$S("ExportVideo.Dialog.HiddenPlots.Message"), $I$(13).getString$S("ExportVideo.Dialog.HiddenPlots.Title"), 2]);
this.setVisible$Z(true);
return;
}}var player=panel.getPlayer$();
player.stop$();
player.setEnabled$Z(false);
var playControl=player.getClipControl$();
var clip=playControl.getVideoClip$();
var taskLength=clip.getStepCount$() + 1;
var recorder=videoType.getRecorder$();
var duration=player.getMeanStepDuration$();
if (this.contentDropdown.getSelectedIndex$() == 3) duration=duration / 2;
recorder.setFrameDuration$D(duration);
if (Clazz.instanceOf(recorder, "org.opensourcephysics.media.core.ScratchVideoRecorder")) {
var svr=recorder;
var tabName=$I$(24,"stripExtension$S",[panel.getTitle$()]).trim$();
var viewName=this.viewDropdown.getSelectedItem$().toString().trim$().toLowerCase$();
var n=viewName.indexOf$S(" ");
if (n > -1) viewName=viewName.substring$I$I(0, n);
svr.suggestFileName$S(tabName + "-" + viewName );
}if (Clazz.instanceOf(recorder, "org.opensourcephysics.media.core.ImageVideoRecorder")) {
var ivr=recorder;
ivr.setExpectedFrameCount$I(clip.getStepCount$());
}try {
recorder.createVideo$S(filePath);
this.savedFilePath=recorder.getFileName$();
if (this.savedFilePath == null ) {
panel.setMagnification$D(magnification);
p$1.setVideoVisible$Z.apply(this, [videoIsVisible]);
this.setVisible$Z(true);
player.setEnabled$Z(true);
recorder.reset$();
return;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(15).showMessageDialog$java_awt_Component$O$S$I(panel, ex, "Exception error creating video", 2);
} else {
throw ex;
}
}
if (clip.getStepCount$() == 1) {
try {
for (var image, $image = 0, $$image = p$1.getNextImages$java_awt_Dimension.apply(this, [size]); $image<$$image.length&&((image=($$image[$image])),1);$image++) {
recorder.addFrame$java_awt_Image(image);
}
this.savedFilePath=$I$(25).saveVideo$org_opensourcephysics_media_core_VideoRecorder(recorder);
if (this.savedFilePath == null ) {
recorder.reset$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(15).showMessageDialog$java_awt_Component$O$S$I(panel, ex, "Exception error ading frame", 2);
} else {
throw ex;
}
}
} else {
var description=$I$(24,"getName$S",[recorder.getFileName$()]);
var monitor=Clazz.new_([this.frame, $I$(13).getString$S("TActions.SaveClipAs.ProgressMonitor.Message") + " " + description , "", 0, taskLength],$I$(26,1).c$$java_awt_Component$O$S$I$I);
monitor.setMillisToPopup$I(2000);
monitor.setProgress$I(1);
this.listener=((P$.ExportVideoDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var progress=(e.getNewValue$()).intValue$() + 1;
var runner=((P$.ExportVideoDialog$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var done=(this.$finals$.playControl.getStepNumber$() == this.$finals$.clip.getStepCount$() - 1);
if (!this.$finals$.monitor.isCanceled$()) {
this.$finals$.monitor.setNote$S(String.format$S$OA($I$(13).getString$S("TActions.SaveClipAs.ProgressMonitor.Progress") + " %d%%.\n", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I((this.$finals$.progress * 100/this.$finals$.taskLength|0))])));
this.$finals$.monitor.setProgress$I(done ? this.$finals$.progress + 1 : this.$finals$.progress);
}this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].setProgress$javax_swing_ProgressMonitor$org_opensourcephysics_media_core_ClipControl$org_opensourcephysics_media_core_VideoPlayer$org_opensourcephysics_media_core_VideoRecorder$Z$org_opensourcephysics_media_core_VideoClip$java_awt_Dimension$D$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'], [this.$finals$.monitor, this.$finals$.playControl, this.$finals$.player, this.$finals$.recorder, this.$finals$.videoIsVisible, this.$finals$.clip, this.$finals$.size, this.$finals$.magnification, done, this.$finals$.showOpenDialog]);
});
})()
), Clazz.new_(P$.ExportVideoDialog$5$1.$init$,[this, {playControl:this.$finals$.playControl,videoIsVisible:this.$finals$.videoIsVisible,showOpenDialog:this.$finals$.showOpenDialog,taskLength:this.$finals$.taskLength,progress:progress,magnification:this.$finals$.magnification,monitor:this.$finals$.monitor,player:this.$finals$.player,size:this.$finals$.size,clip:this.$finals$.clip,recorder:this.$finals$.recorder}]));
$I$(27).invokeLater$Runnable(runner);
});
})()
), Clazz.new_(P$.ExportVideoDialog$5.$init$,[this, {playControl:playControl,videoIsVisible:videoIsVisible,showOpenDialog:showOpenDialog,taskLength:taskLength,magnification:magnification,monitor:monitor,player:player,size:size,clip:clip,recorder:recorder}]));
playControl.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.listener);
if (playControl.getStepNumber$() == 0) {
var message=String.format$S$OA($I$(13).getString$S("TActions.SaveClipAs.ProgressMonitor.Progress") + " %d%%.\n", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I((100/taskLength|0))]));
monitor.setNote$S(message);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.paintImmediately$java_awt_Rectangle(trackerPanel.getBounds$());
try {
for (var image, $image = 0, $$image = p$1.getNextImages$java_awt_Dimension.apply(this, [size]); $image<$$image.length&&((image=($$image[$image])),1);$image++) {
recorder.addFrame$java_awt_Image(image);
}
System.gc$();
playControl.step$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(15).showMessageDialog$java_awt_Component$O$S$I(panel, ex, "Exception error adding image", 2);
monitor.close$();
panel.setMagnification$D(magnification);
p$1.setVideoVisible$Z.apply(this, [videoIsVisible]);
player.setEnabled$Z(true);
recorder.reset$();
return;
} else {
throw ex;
}
}
} else playControl.setStepNumber$I(0);
}}, p$1);

Clazz.newMeth(C$, 'setProgress$javax_swing_ProgressMonitor$org_opensourcephysics_media_core_ClipControl$org_opensourcephysics_media_core_VideoPlayer$org_opensourcephysics_media_core_VideoRecorder$Z$org_opensourcephysics_media_core_VideoClip$java_awt_Dimension$D$Z$Z',  function (monitor, playControl, player, recorder, videoIsVisible, clip, size, magnification, done, showOpenDialog) {
if (monitor.isCanceled$()) {
this.firePropertyChange$S$O$O("video_cancelled", null, null);
monitor.close$();
playControl.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.listener);
this.frame.getTrackerPanelForID$Integer(this.panelID).setMagnification$D(magnification);
p$1.setVideoVisible$Z.apply(this, [videoIsVisible]);
player.setEnabled$Z(true);
recorder.reset$();
return;
}if (done) playControl.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.listener);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
try {
for (var image, $image = 0, $$image = p$1.getNextImages$java_awt_Dimension.apply(this, [size]); $image<$$image.length&&((image=($$image[$image])),1);$image++) {
recorder.addFrame$java_awt_Image(image);
}
System.gc$();
if (done) {
this.savedFilePath=$I$(25).saveVideo$org_opensourcephysics_media_core_VideoRecorder(recorder);
recorder.reset$();
trackerPanel.setMagnification$D(magnification);
p$1.setVideoVisible$Z.apply(this, [videoIsVisible]);
player.setEnabled$Z(true);
var imageExt=$I$(24).getExtension$S(this.savedFilePath);
if ("zip".equals$O(imageExt)) {
var videoType=$I$(2).videoFormats.get$O(this.formatDropdown.getSelectedItem$());
if (Clazz.instanceOf(videoType, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType")) {
var zvt=videoType;
imageExt+=" " + zvt.getImageExtension$();
}}if (imageExt != null ) $I$(3).setPreferredExportExtension$S(imageExt);
if (showOpenDialog) {
var response=$I$(15,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.frame, $I$(13).getString$S("ExportVideoDialog.Complete.Message1") + " " + $I$(24).getName$S(this.savedFilePath) + (recorder.getCodec$() == null  ? "" : " (codec=" + recorder.getCodec$() + ")" ) + $I$(24).NEW_LINE + $I$(13).getString$S("ExportVideoDialog.Complete.Message2") , $I$(13).getString$S("ExportVideoDialog.Complete.Title"), 0, 3]);
if (response == 0) {
this.frame.loadedFiles.remove$O(this.savedFilePath);
var file=Clazz.new_($I$(28,1).c$$S,[this.savedFilePath]);
var runner=((P$.ExportVideoDialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportVideoDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2,"openFileFromDialog$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable",[this.$finals$.file, this.b$['org.opensourcephysics.cabrillo.tracker.ExportVideoDialog'].frame, $I$(2).NULL_RUNNABLE]);
});
})()
), Clazz.new_(P$.ExportVideoDialog$6.$init$,[this, {file:file}]));
$I$(29).invokeLater$Runnable(runner);
}}this.firePropertyChange$S$O$O("video_saved", null, this.savedFilePath);
} else {
playControl.step$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.savedFilePath=null;
$I$(15,"showMessageDialog$java_awt_Component$O$S$I",[trackerPanel, ex.toString(), "Exception saving video: ", 2]);
monitor.close$();
playControl.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.listener);
trackerPanel.setMagnification$D(magnification);
p$1.setVideoVisible$Z.apply(this, [videoIsVisible]);
player.setEnabled$Z(true);
recorder.reset$();
return;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getNextImages$java_awt_Dimension',  function (size) {
var view=this.views.get$O(this.viewDropdown.getSelectedItem$());
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (view === trackerPanel ) {
if (this.contentDropdown.getSelectedIndex$() == 1) {
var img=trackerPanel.getVideo$().getImage$();
return Clazz.array($I$(30), -1, [p$1.getResizedImage$java_awt_image_BufferedImage$java_awt_Dimension.apply(this, [img, size])]);
}if (this.contentDropdown.getSelectedIndex$() == 3) {
var filter=trackerPanel.getVideo$().getFilterStack$().getFilter$Class(Clazz.getClass($I$(31)));
if (filter == null ) {
filter=Clazz.new_($I$(31,1));
trackerPanel.getVideo$().getFilterStack$().addFilter$org_opensourcephysics_media_core_Filter(filter);
}var odd=filter.isOdd$();
if (odd != this.oddFirst ) filter.setOdd$Z(this.oddFirst);
var img=trackerPanel.getVideo$().getImage$();
var img1=p$1.getResizedCopy$java_awt_image_BufferedImage$java_awt_Dimension.apply(this, [img, size]);
filter.setOdd$Z(!this.oddFirst);
img=trackerPanel.getVideo$().getImage$();
var img2=p$1.getResizedCopy$java_awt_image_BufferedImage$java_awt_Dimension.apply(this, [img, size]);
return Clazz.array($I$(30), -1, [img1, img2]);
}return Clazz.array($I$(30), -1, [p$1.getResizedImage$java_awt_image_BufferedImage$java_awt_Dimension.apply(this, [trackerPanel.getMattedImage$(), size])]);
}if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.WorldTView")) {
var wtv=view;
var dim=wtv.scrollPane.getViewport$().getView$().getSize$();
var image=view.createImage$I$I(dim.width, dim.height);
image=(view).render$java_awt_image_BufferedImage(image);
var rect=wtv.scrollPane.getViewport$().getViewRect$();
return Clazz.array($I$(30), -1, [p$1.getClippedImage$java_awt_image_BufferedImage$java_awt_Rectangle.apply(this, [image, rect])]);
}if (Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.PlotTrackView")) {
var image=(view).exportImage$I$I(size.width, size.height);
return Clazz.array($I$(30), -1, [image]);
}var image=view.createImage$I$I(size.width, size.height);
var g2=image.createGraphics$();
view.paint$java_awt_Graphics(g2);
g2.dispose$();
return Clazz.array($I$(30), -1, [image]);
}, p$1);

Clazz.newMeth(C$, 'getClippedImage$java_awt_image_BufferedImage$java_awt_Rectangle',  function (source, rect) {
if (rect.width == source.getWidth$() && rect.height == source.getHeight$() ) return source;
if (this.sizedImage == null  || this.sizedImage.getWidth$() != rect.width  || this.sizedImage.getHeight$() != rect.height ) {
this.sizedImage=Clazz.new_([rect.width, rect.height, source.getType$()],$I$(30,1).c$$I$I$I);
}var img=source.getSubimage$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
var g2=this.sizedImage.createGraphics$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(32).KEY_INTERPOLATION, $I$(32).VALUE_INTERPOLATION_BILINEAR);
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img, 0, 0, null);
g2.dispose$();
return this.sizedImage;
}, p$1);

Clazz.newMeth(C$, 'getResizedImage$java_awt_image_BufferedImage$java_awt_Dimension',  function (source, size) {
if (size.width == source.getWidth$() && size.height == source.getHeight$() ) return source;
if (this.sizedImage == null  || this.sizedImage.getWidth$() != size.width  || this.sizedImage.getHeight$() != size.height ) {
this.sizedImage=Clazz.new_([size.width, size.height, source.getType$()],$I$(30,1).c$$I$I$I);
}var g2=this.sizedImage.createGraphics$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(32).KEY_INTERPOLATION, $I$(32).VALUE_INTERPOLATION_BILINEAR);
g2.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(source, 0, 0, size.width, size.height, 0, 0, source.getWidth$(), source.getHeight$(), null);
g2.dispose$();
return this.sizedImage;
}, p$1);

Clazz.newMeth(C$, 'getResizedCopy$java_awt_image_BufferedImage$java_awt_Dimension',  function (source, size) {
var newImage=Clazz.new_([size.width, size.height, source.getType$()],$I$(30,1).c$$I$I$I);
var g2=newImage.createGraphics$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(32).KEY_INTERPOLATION, $I$(32).VALUE_INTERPOLATION_BILINEAR);
g2.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(source, 0, 0, size.width, size.height, 0, 0, source.getWidth$(), source.getHeight$(), null);
g2.dispose$();
return newImage;
}, p$1);

Clazz.newMeth(C$, 'clear$',  function () {
this.frame=null;
this.panelID=null;
this.views.clear$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
