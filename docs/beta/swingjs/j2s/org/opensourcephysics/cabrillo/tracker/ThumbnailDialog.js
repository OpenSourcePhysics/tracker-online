(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TFrame','java.awt.Dimension','org.opensourcephysics.media.core.VideoFileFilter','java.awt.geom.AffineTransform','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.ThumbnailDialog','org.opensourcephysics.controls.XML','javax.swing.SwingUtilities','org.opensourcephysics.media.core.VideoIO','java.io.File','org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.cabrillo.tracker.ExportZipDialog','java.awt.Toolkit','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.Box','javax.swing.BorderFactory','java.awt.GridLayout','java.util.HashMap','javax.swing.JComboBox','javax.swing.DefaultComboBoxModel','javax.swing.JButton','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThumbnailDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transform=Clazz.new_($I$(4,1));
this.fullSize=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['isRefreshing'],'S',['savedFilePath'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','saveAsButton','javax.swing.JButton','+closeButton','sizePanel','javax.swing.JComponent','+viewPanel','+formatPanel','formatDropdown','javax.swing.JComboBox','+viewDropdown','+sizeDropdown','formatModel','javax.swing.DefaultComboBoxModel','+viewModel','transform','java.awt.geom.AffineTransform','sizedImage','java.awt.image.BufferedImage','sizes','java.util.HashMap','fullSize','java.awt.Dimension','+thumbSize','buttonbar','javax.swing.JPanel']]
,['Z',['settingsOnly'],'O',['thumbnailDialog','org.opensourcephysics.cabrillo.tracker.ThumbnailDialog','viewNames','String[]','+formatNames','defaultSize','java.awt.Dimension','fileFilters','org.opensourcephysics.media.core.VideoFileFilter[]','fileChooserListener','java.beans.PropertyChangeListener','chooserField','javax.swing.text.JTextComponent']]]

Clazz.newMeth(C$, 'getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (panel, withSaveButton) {
if (C$.thumbnailDialog == null ) {
C$.thumbnailDialog=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
$I$(5,"setFonts$O$I",[C$.thumbnailDialog, $I$(5).getLevel$()]);
C$.fileChooserListener=((P$.ThumbnailDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThumbnailDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if ($I$(6).chooserField != null  && e.getNewValue$() != null  ) {
var filter=e.getNewValue$();
var ext=filter.getDefaultExtension$();
var runner=((P$.ThumbnailDialog$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThumbnailDialog$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var name=$I$(7,"stripExtension$S",[$I$(6).chooserField.getText$()]) + "." + this.$finals$.ext ;
$I$(6).chooserField.setText$S(name);
});
})()
), Clazz.new_(P$.ThumbnailDialog$1$1.$init$,[this, {ext:ext}]));
$I$(8).invokeLater$Runnable(runner);
}});
})()
), Clazz.new_(P$.ThumbnailDialog$1.$init$,[this, null]));
for (var i=0; i < C$.formatNames.length; i++) {
var type=$I$(9).getVideoType$S$S(null, C$.formatNames[i]);
for (var filter, $filter = 0, $$filter = type.getFileFilters$(); $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if (filter.getDefaultExtension$().equals$O(C$.formatNames[i])) {
C$.fileFilters[i]=filter;
break;
}}
}
var chooser=$I$(9).getChooser$();
var temp="untitled.tmp";
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(10,1).c$$S,[temp]));
C$.chooserField=C$.getTextComponent$java_awt_Container$S(chooser, temp);
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(10,1).c$$S,[""]));
}C$.settingsOnly=!withSaveButton;
C$.thumbnailDialog.panelID=panel.getID$();
C$.thumbnailDialog.frame=panel.getTFrame$();
C$.thumbnailDialog.refreshGUI$();
return C$.thumbnailDialog;
}, 1);

Clazz.newMeth(C$, 'saveThumbnail$S',  function (filePath) {
var i=this.formatDropdown.getSelectedIndex$();
var format=C$.formatNames[i];
if (filePath == null ) {
var chooser=$I$(9).getChooser$();
for (var filter, $filter = 0, $$filter = chooser.getChoosableFileFilters$(); $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter(filter);

for (var filter, $filter = 0, $$filter = C$.fileFilters; $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(filter);
}
chooser.setFileFilter$javax_swing_filechooser_FileFilter(C$.fileFilters[i]);
chooser.addPropertyChangeListener$S$java_beans_PropertyChangeListener("fileFilterChanged", C$.fileChooserListener);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var tabName=$I$(7,"stripExtension$S",[trackerPanel.getTitle$()]);
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(10,1).c$$S,[tabName + "_thumbnail." + format ]));
var files=$I$(11).getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function(this.frame, "save thumbnail", null);
chooser.removePropertyChangeListener$S$java_beans_PropertyChangeListener("fileFilterChanged", C$.fileChooserListener);
if (files == null  || files.length == 0 ) return null;
filePath=files[0].getAbsolutePath$();
var selectedFilter=chooser.getFileFilter$();
chooser.resetChoosableFileFilters$();
var ext=selectedFilter.getDefaultExtension$();
this.setFormat$S(ext);
if (!selectedFilter.accept$java_io_File(files[0])) {
filePath=$I$(7).stripExtension$S(filePath) + "." + ext ;
if (!$I$(9,"canWrite$java_io_File",[Clazz.new_($I$(10,1).c$$S,[filePath])])) return null;
}}if ($I$(7).getExtension$S(filePath) == null ) filePath=$I$(7).stripExtension$S(filePath) + "." + format ;
var size=this.sizes.get$O(this.sizeDropdown.getSelectedItem$());
var thumb=p$1.getThumbnailImage$java_awt_Dimension.apply(this, [size]);
var thumbnail=$I$(9).writeImageFile$java_awt_image_BufferedImage$S(thumb, filePath);
return thumbnail;
});

Clazz.newMeth(C$, 'getThumbnail$',  function () {
var size=this.sizes.get$O(this.sizeDropdown.getSelectedItem$());
return p$1.getThumbnailImage$java_awt_Dimension.apply(this, [size]);
});

Clazz.newMeth(C$, 'getThumbnailSize$',  function () {
return this.sizes.get$O(this.sizeDropdown.getSelectedItem$());
});

Clazz.newMeth(C$, 'setFormat$S',  function (format) {
for (var i=0; i < C$.formatNames.length; i++) {
if (format != null  && C$.formatNames[i].equals$O(format.toLowerCase$()) ) {
this.formatDropdown.setSelectedIndex$I(i);
break;
}}
});

Clazz.newMeth(C$, 'getFormat$',  function () {
return C$.formatNames[this.formatDropdown.getSelectedIndex$()];
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (!vis && $I$(1).haveExportDialog ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
$I$(12).thumbnailDialogClosed$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.refreshGUI$();
var dim=$I$(13).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var settingsPanel=$I$(16).createVerticalBox$();
settingsPanel.setBorder$javax_swing_border_Border($I$(17).createEmptyBorder$I$I$I$I(2, 2, 0, 2));
contentPane.add$java_awt_Component$O(settingsPanel, "Center");
var upper=Clazz.new_([Clazz.new_($I$(18,1).c$$I$I,[1, 1])],$I$(14,1).c$$java_awt_LayoutManager);
var lower=Clazz.new_([Clazz.new_($I$(18,1).c$$I$I,[1, 2])],$I$(14,1).c$$java_awt_LayoutManager);
this.sizes=Clazz.new_($I$(19,1));
this.sizePanel=$I$(16).createVerticalBox$();
this.sizeDropdown=Clazz.new_($I$(20,1));
this.sizePanel.add$java_awt_Component(this.sizeDropdown);
this.viewPanel=$I$(16).createVerticalBox$();
this.viewModel=Clazz.new_($I$(21,1));
this.viewDropdown=Clazz.new_($I$(20,1).c$$javax_swing_ComboBoxModel,[this.viewModel]);
this.viewPanel.add$java_awt_Component(this.viewDropdown);
this.viewDropdown.addItemListener$java_awt_event_ItemListener(((P$.ThumbnailDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThumbnailDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (e.getStateChange$() == 1) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'].isRefreshing) p$1.refreshSizeDropdown.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'], []);
}});
})()
), Clazz.new_(P$.ThumbnailDialog$2.$init$,[this, null])));
this.formatPanel=$I$(16).createVerticalBox$();
this.formatModel=Clazz.new_($I$(21,1));
this.formatDropdown=Clazz.new_($I$(20,1).c$$javax_swing_ComboBoxModel,[this.formatModel]);
this.formatPanel.add$java_awt_Component(this.formatDropdown);
settingsPanel.add$java_awt_Component(upper);
settingsPanel.add$java_awt_Component(lower);
upper.add$java_awt_Component(this.viewPanel);
lower.add$java_awt_Component(this.sizePanel);
lower.add$java_awt_Component(this.formatPanel);
this.saveAsButton=Clazz.new_($I$(22,1));
this.saveAsButton.setForeground$java_awt_Color(Clazz.new_($I$(23,1).c$$I$I$I,[0, 0, 102]));
this.saveAsButton.addActionListener$java_awt_event_ActionListener(((P$.ThumbnailDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThumbnailDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'], [false]);
this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'].saveThumbnail$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'], [null]);
});
})()
), Clazz.new_(P$.ThumbnailDialog$3.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(22,1));
this.closeButton.setForeground$java_awt_Color(Clazz.new_($I$(23,1).c$$I$I$I,[0, 0, 102]));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.ThumbnailDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThumbnailDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ThumbnailDialog'], [false]);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["accepted", null, null]);
});
})()
), Clazz.new_(P$.ThumbnailDialog$4.$init$,[this, null])));
this.buttonbar=Clazz.new_($I$(14,1));
contentPane.add$java_awt_Component$O(this.buttonbar, "South");
this.buttonbar.add$java_awt_Component(this.saveAsButton);
this.buttonbar.add$java_awt_Component(this.closeButton);
}, p$1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
var resource=C$.settingsOnly ? "ThumbnailDialog.Settings.Title" : "ThumbnailDialog.Title";
var title=$I$(24).getString$S(resource);
this.setTitle$S(title);
title=$I$(24).getString$S("ExportVideoDialog.Subtitle.Size");
var space=$I$(17).createEmptyBorder$I$I$I$I(0, 4, 6, 4);
var titled=$I$(17).createTitledBorder$S(title);
var fontLevel=$I$(5).getLevel$();
$I$(5).setFonts$O$I(titled, fontLevel);
this.sizePanel.setBorder$javax_swing_border_Border($I$(17).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(24).getString$S("ThumbnailDialog.Subtitle.Image");
titled=$I$(17).createTitledBorder$S(title);
$I$(5).setFonts$O$I(titled, fontLevel);
this.viewPanel.setBorder$javax_swing_border_Border($I$(17).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
title=$I$(24).getString$S("ExportVideoDialog.Subtitle.Format");
titled=$I$(17).createTitledBorder$S(title);
$I$(5).setFonts$O$I(titled, fontLevel);
this.formatPanel.setBorder$javax_swing_border_Border($I$(17).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(titled, space));
this.saveAsButton.setText$S($I$(24).getString$S("ExportVideoDialog.Button.SaveAs"));
if (C$.settingsOnly) {
this.buttonbar.remove$java_awt_Component(this.saveAsButton);
this.closeButton.setText$S($I$(24).getString$S("Dialog.Button.OK"));
} else {
this.buttonbar.add$java_awt_Component$I(this.saveAsButton, 0);
this.closeButton.setText$S($I$(24).getString$S("Dialog.Button.Close"));
}this.isRefreshing=true;
var index=this.formatDropdown.getSelectedIndex$();
index=Math.max(index, 0);
this.formatModel.removeAllElements$();
for (var i=0; i < C$.formatNames.length; i++) {
var format=$I$(24,"getString$S",["ThumbnailDialog.Format." + C$.formatNames[i].toUpperCase$()]);
this.formatModel.addElement$O(format);
}
this.formatDropdown.setSelectedIndex$I(index);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var lastIndex=trackerPanel.getVideo$() == null  ? C$.viewNames.length - 2 : C$.viewNames.length - 1;
index=Math.min(this.viewDropdown.getSelectedIndex$(), lastIndex);
index=Math.max(index, 0);
this.viewModel.removeAllElements$();
for (var i=0; i <= lastIndex; i++) {
var view=$I$(24).getString$S("ThumbnailDialog.View." + C$.viewNames[i]);
this.viewModel.addElement$O(view);
}
this.viewDropdown.setSelectedIndex$I(index);
this.isRefreshing=false;
p$1.refreshSizeDropdown.apply(this, []);
this.pack$();
});

Clazz.newMeth(C$, 'refreshSizeDropdown',  function () {
this.isRefreshing=true;
var selectedItem=this.sizeDropdown.getSelectedItem$();
this.sizeDropdown.removeAllItems$();
this.sizes.clear$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
switch (this.viewDropdown.getSelectedIndex$()) {
case 1:
var bounds=trackerPanel.getMatBounds$();
this.fullSize.setSize$D$D(bounds.getWidth$(), bounds.getHeight$());
this.thumbSize=p$1.getFullThumbnailSize$java_awt_Dimension.apply(this, [this.fullSize]);
break;
case 2:
var d=trackerPanel.getVideo$().getImageSize$Z(true);
this.fullSize.setSize$I$I(d.width, d.height);
this.thumbSize=p$1.getFullThumbnailSize$java_awt_Dimension.apply(this, [this.fullSize]);
break;
default:
this.fullSize.setSize$java_awt_Dimension(trackerPanel.getTFrame$().getSize$());
this.thumbSize=p$1.getFullThumbnailSize$java_awt_Dimension.apply(this, [this.fullSize]);
}
if (p$1.isAcceptedDimension$I$I.apply(this, [this.fullSize.width, this.fullSize.height])) {
var s=this.fullSize.width + "x" + this.fullSize.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, this.fullSize);
}var dim=Clazz.new_([(this.fullSize.width/2|0), (this.fullSize.height/2|0)],$I$(2,1).c$$I$I);
if (dim.width > this.thumbSize.width && dim.height > this.thumbSize.height  && p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height]) ) {
var s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}var s=this.thumbSize.width + "x" + this.thumbSize.height ;
var defaultItem=s;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, this.thumbSize);
var factor=Clazz.array(Double.TYPE, -1, [0.75, 0.5, 0.375, 0.25]);
for (var i=0; i < factor.length; i++) {
dim=Clazz.new_([((this.thumbSize.width * factor[i])|0), ((this.thumbSize.height * factor[i])|0)],$I$(2,1).c$$I$I);
if (p$1.isAcceptedDimension$I$I.apply(this, [dim.width, dim.height])) {
s=dim.width + "x" + dim.height ;
this.sizeDropdown.addItem$O(s);
this.sizes.put$O$O(s, dim);
}}
this.sizeDropdown.setSelectedItem$O(this.sizes.keySet$().contains$O(selectedItem) ? selectedItem : defaultItem);
this.isRefreshing=false;
}, p$1);

Clazz.newMeth(C$, 'getFullThumbnailSize$java_awt_Dimension',  function (imageSize) {
var widthFactor=C$.defaultSize.getWidth$() / imageSize.width;
var heightFactor=C$.defaultSize.getHeight$() / imageSize.height;
var factor=Math.min(widthFactor, heightFactor);
var w=((imageSize.width * factor)|0);
var h=((imageSize.height * factor)|0);
return Clazz.new_($I$(2,1).c$$I$I,[w, h]);
}, p$1);

Clazz.newMeth(C$, 'isAcceptedDimension$I$I',  function (w, h) {
if (w >= 80 || h >= 60 ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'getThumbnailImage$java_awt_Dimension',  function (size) {
var rawImage;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
switch (this.viewDropdown.getSelectedIndex$()) {
case 1:
rawImage=trackerPanel.getMattedImage$();
break;
case 2:
rawImage=trackerPanel.getVideo$().getImage$();
break;
default:
rawImage=this.frame.createImage$I$I(this.fullSize.width, this.fullSize.height);
var g2=rawImage.createGraphics$();
this.frame.paint$java_awt_Graphics(g2);
g2.dispose$();
}
return p$1.getResizedImage$java_awt_image_BufferedImage$java_awt_Dimension.apply(this, [rawImage, size]);
}, p$1);

Clazz.newMeth(C$, 'getResizedImage$java_awt_image_BufferedImage$java_awt_Dimension',  function (source, size) {
if (size.width == source.getWidth$() && size.height == source.getHeight$() ) return source;
if (this.sizedImage == null  || this.sizedImage.getWidth$() != size.width  || this.sizedImage.getHeight$() != size.height ) {
this.sizedImage=Clazz.new_([size.width, size.height, source.getType$()],$I$(25,1).c$$I$I$I);
}var g2=this.sizedImage.createGraphics$();
g2.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(source, 0, 0, size.width, size.height, 0, 0, source.getWidth$(), source.getHeight$(), null);
g2.dispose$();
return this.sizedImage;
}, p$1);

Clazz.newMeth(C$, 'getTextComponent$java_awt_Container$S',  function (c, toMatch) {
var comps=c.getComponents$();
for (var i=0; i < comps.length; i++) {
if ((Clazz.instanceOf(comps[i], "javax.swing.text.JTextComponent")) && toMatch.equals$O((comps[i]).getText$()) ) {
return comps[i];
}if (Clazz.instanceOf(comps[i], "java.awt.Container")) {
var tc=C$.getTextComponent$java_awt_Container$S(comps[i], toMatch);
if (tc != null ) {
return tc;
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'clear$',  function () {
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1).haveThumbnailDialog=true;
};
C$.viewNames=Clazz.array(String, -1, ["WholeFrame", "MainView", "VideoOnly"]);
C$.formatNames=Clazz.array(String, -1, ["png", "jpg"]);
C$.defaultSize=Clazz.new_($I$(2,1).c$$I$I,[320, 240]);
C$.fileFilters=Clazz.array($I$(3), [C$.formatNames.length]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
