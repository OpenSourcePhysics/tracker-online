(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.ExportZipDialog','org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.controls.XML','java.io.File','org.opensourcephysics.controls.XMLControlElement','java.util.TreeMap',['org.opensourcephysics.media.core.ImageCoordSystem','.FrameData'],'java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.PointMass',['org.opensourcephysics.cabrillo.tracker.PointMass','.FrameData'],'org.opensourcephysics.cabrillo.tracker.Vector',['org.opensourcephysics.cabrillo.tracker.Vector','.FrameData'],'org.opensourcephysics.cabrillo.tracker.ParticleModel','org.opensourcephysics.cabrillo.tracker.Calibration','org.opensourcephysics.cabrillo.tracker.OffsetOrigin','org.opensourcephysics.cabrillo.tracker.CircleFitter','org.opensourcephysics.cabrillo.tracker.TapeMeasure',['org.opensourcephysics.cabrillo.tracker.TapeMeasure','.FrameData'],'org.opensourcephysics.cabrillo.tracker.Protractor','org.opensourcephysics.media.core.VideoIO','javax.swing.JTextField','java.awt.Color',['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.EntryField'],['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.DocumentAdapter'],'java.awt.event.FocusAdapter','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TFrame','java.util.IdentityHashMap','Thread','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.FontSizer','java.util.zip.ZipInputStream','java.io.FileInputStream','javax.swing.DefaultComboBoxModel','java.awt.Dimension','java.awt.Toolkit','org.opensourcephysics.cabrillo.tracker.Tracker','javax.swing.UIManager',['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.VideoListener'],'javax.swing.JPanel','java.awt.BorderLayout','javax.swing.Box','javax.swing.JLabel','org.opensourcephysics.cabrillo.tracker.TButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JTextArea','javax.swing.JCheckBox','javax.swing.JComboBox',['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.FormatRenderer'],'javax.swing.DefaultListModel','javax.swing.JList','org.opensourcephysics.tools.LaunchBuilder','javax.swing.JScrollPane','javax.swing.JButton','javax.swing.JToolBar','org.opensourcephysics.cabrillo.tracker.ThumbnailDialog','java.awt.event.MouseAdapter','org.opensourcephysics.tools.ResourceLoader','java.net.URL','javax.swing.ImageIcon','org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.tools.LibraryBrowser','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog',['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.Export'],'javax.swing.JOptionPane','org.opensourcephysics.media.BrowserZipExport','org.opensourcephysics.tools.LibraryResource','java.io.FileWriter','org.opensourcephysics.media.core.ImageVideo','javax.swing.SwingUtilities','java.util.Random']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExportZipDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');
C$.$classes$=[['Export',2],['VideoListener',4],['EntryField',12],['DocumentAdapter',12],['FormatRenderer',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabTitleFields=Clazz.new_($I$(9,1));
this.tabCheckboxes=Clazz.new_($I$(9,1));
this.labels=Clazz.new_($I$(9,1));
this.addedFiles=Clazz.new_($I$(9,1));
this.fileNames=Clazz.new_($I$(9,1));
this.addThumbnail=true;
this.lastTRZ=Clazz.new_($I$(5,1).c$$S,[""]);
},1);

C$.$fields$=[['Z',['addThumbnail','isVisible','isOpenInTracker'],'S',['targetName','targetDirectory','targetVideo','targetExtension','videoIOPreferredExtension','tempDir'],'O',['videoExporter','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','openIcon','javax.swing.Icon','titlePanel','javax.swing.JPanel','+descriptionPanel','+tabsPanel','+videoPanel','+metaPanel','+thumbnailPanel','+supportFilesPanel','+advancedPanel','+thumbnailImagePanel','titleTitleBox','javax.swing.Box','+descriptionTitleBox','+tabsTitleBox','+videoTitleBox','+metaTitleBox','+thumbTitleBox','+supportFilesTitleBox','+advancedTitleBox','+metaFieldsBox','+advancedFieldsBox','+supportFilesBox','titleLabel','javax.swing.JLabel','+descriptionLabel','+descriptionInfoLabel','+tabsLabel','+tabsInfoLabel','+videoLabel','+videoInfoLabel','+metaLabel','+metaInfoLabel','+thumbLabel','+thumbInfoLabel','+supportFilesLabel','+supportFilesInfoLabel','+advancedLabel','+advancedInfoLabel','descriptionButton','javax.swing.JButton','+tabsButton','+videoButton','+metaButton','+thumbButton','+supportFilesButton','+advancedButton','+saveButton','+closeButton','+thumbnailButton','+loadHTMLButton','+helpButton','formatDropdown','javax.swing.JComboBox','tabTitleFields','java.util.ArrayList','+tabCheckboxes','authorLabel','javax.swing.JLabel','+contactLabel','+keywordsLabel','+thumbnailDisplay','+urlLabel','+htmlLabel','clipCheckbox','javax.swing.JCheckBox','+showThumbnailCheckbox','labels','java.util.ArrayList','titleField','org.opensourcephysics.cabrillo.tracker.ExportZipDialog.EntryField','+authorField','+contactField','+keywordsField','+urlField','+htmlField','filelistPane','javax.swing.JTextArea','+descriptionPane','addedFiles','java.util.ArrayList','+fileNames','fileList','javax.swing.JList','addButton','javax.swing.JButton','+removeButton','fileListModel','javax.swing.DefaultListModel','recentAddFilesFilter','javax.swing.filechooser.FileFilter','videoExportListener','org.opensourcephysics.cabrillo.tracker.ExportZipDialog.VideoListener','control','org.opensourcephysics.controls.XMLControl','badModels','java.util.ArrayList','exportIterator','java.util.Iterator','lastTRZ','java.io.File']]
,['Z',['trimToClip'],'I',['maxLineLength','minWidth'],'S',['videoSubdirectory','htmlSubdirectory','imageSubdirectory','preferredExtension'],'O',['zipDialogs','java.util.Map','labelColor','java.awt.Color']]]

Clazz.newMeth(C$, 'setNewFrameNumbersCoord$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map',  function (realClip, array, newFrameNumbers) {
newFrameNumbers.clear$();
var newFrameNum=0;
for (var i=0; i < array.length; i++) {
if (array[i] == null ) continue;
if (i >= realClip.getEndFrameNumber$()) break;
newFrameNum=Math.max(realClip.frameToStep$I(i), 0);
if (i > realClip.getStartFrameNumber$() && !realClip.includesFrame$I(i) ) ++newFrameNum;
newFrameNumbers.put$O$O(Integer.valueOf$I(newFrameNum), Integer.valueOf$I(i));
}
return newFrameNum;
}, 1);

Clazz.newMeth(C$, 'setNewFrameNumbersPointVector$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map',  function (realClip, array, newFrameNumbers) {
newFrameNumbers.clear$();
var newFrameNum=0;
for (var i=0; i < array.length; i++) {
if (array[i] == null  || !realClip.includesFrame$I(i) ) continue;
newFrameNum=realClip.frameToStep$I(i);
newFrameNumbers.put$O$O(Integer.valueOf$I(newFrameNum), Integer.valueOf$I(i));
}
return newFrameNum;
}, 1);

Clazz.newMeth(C$, 'setNewFrameNumbersCalibration$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map',  function (realClip, array, newFrameNumbers) {
newFrameNumbers.clear$();
var newFrameNum=0;
for (var i=0; i < array.length; i++) {
if (array[i] == null ) continue;
newFrameNum=realClip.frameToStep$I(i);
newFrameNum=Math.max(0, newFrameNum);
newFrameNumbers.put$O$O(Integer.valueOf$I(newFrameNum), Integer.valueOf$I(i));
}
return newFrameNum;
}, 1);

Clazz.newMeth(C$, 'setNewFrameNumbersTape$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map',  function (realClip, array, newFrameNumbers) {
newFrameNumbers.clear$();
var newFrameNum=0;
var nonNullIndex=0;
for (var i=0; i <= realClip.getEndFrameNumber$(); i++) {
if (i < array.length && array[i] != null  ) {
nonNullIndex=i;
}if (!realClip.includesFrame$I(i)) continue;
var n=realClip.frameToStep$I(i);
if (nonNullIndex > -1) {
newFrameNumbers.put$O$O(Integer.valueOf$I(n), Integer.valueOf$I(nonNullIndex));
newFrameNum=n;
nonNullIndex=-1;
} else if (i < array.length) {
newFrameNumbers.put$O$O(Integer.valueOf$I(n), Integer.valueOf$I(i));
newFrameNum=n;
}}
return newFrameNum;
}, 1);

Clazz.newMeth(C$, 'updateRange$org_opensourcephysics_media_core_VideoClip$org_opensourcephysics_controls_XMLControl$S$S',  function (realClip, trackControl, start, end) {
var frameNum=trackControl.getInt$S(start);
if (frameNum > 0) {
var newStartFrameNum=realClip.frameToStep$I(frameNum);
if (frameNum > realClip.getStartFrameNumber$() && !realClip.includesFrame$I(frameNum) ) ++newStartFrameNum;
trackControl.setValue$S$I(start, newStartFrameNum);
}frameNum=trackControl.getInt$S(end);
if (frameNum > 0) {
var newEndFrameNum=realClip.frameToStep$I(frameNum);
trackControl.setValue$S$I(end, newEndFrameNum);
}}, 1);

Clazz.newMeth(C$, 'nextExport$java_util_ArrayList',  function (zipList) {
if (this.exportIterator != null  && this.exportIterator.hasNext$() ) {
Clazz.new_([((P$.ExportZipDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].exportIterator.next$().export$();
});
})()
), Clazz.new_(P$.ExportZipDialog$1.$init$,[this, null]))],$I$(30,1).c$$Runnable).start$();
return;
}this.exportIterator=null;
p$1.addFiles$java_util_ArrayList.apply(this, [zipList]);
p$1.saveZip$java_util_ArrayList.apply(this, [zipList]);
});

Clazz.newMeth(C$, 'exportCanceled$',  function () {
this.exportIterator=null;
$I$(31).debug$S("Export canceled");
});

Clazz.newMeth(C$, 'getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var dialog=C$.zipDialogs.get$O(panel.getID$());
if (dialog == null ) {
dialog=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
C$.zipDialogs.put$O$O(panel.getID$(), dialog);
dialog.setResizable$Z(false);
dialog.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", dialog);
dialog.setFontLevel$I($I$(32).getLevel$());
dialog.control=Clazz.new_($I$(6,1).c$$O,[panel]);
dialog.addThumbnail=true;
dialog.htmlField.setText$S(dialog.htmlField.getDefaultText$());
dialog.htmlField.setForeground$java_awt_Color(dialog.htmlField.getEmptyForeground$());
dialog.htmlField.setBackground$java_awt_Color($I$(23).white);
if (panel.openedFromPath != null ) {
var htmlFile=Clazz.new_($I$(5,1).c$$S,[panel.openedFromPath]);
if ($I$(21).trzFileFilter.accept$java_io_File(htmlFile)) {
var baseName=$I$(4,"stripExtension$S",[$I$(4).getName$S(panel.openedFromPath)]);
try {
var zipFile=Clazz.new_([Clazz.new_($I$(34,1).c$$S,[panel.openedFromPath])],$I$(33,1).c$$java_io_InputStream);
var nextEntry;
while ((nextEntry=zipFile.getNextEntry$()) != null ){
System.out.println$S("EZD " + nextEntry);
var name=$I$(4,"forwardSlash$S",[nextEntry.getName$()]);
if (name.contains$CharSequence("/")) {
if (nextEntry.isDirectory$() || !name.contains$CharSequence("html/") || name.contains$CharSequence("_info.")  ) {
continue;
}}if (name.contains$CharSequence("_thumbnail")) {
continue;
}var path=panel.openedFromPath + "!/" + name ;
var file=Clazz.new_($I$(5,1).c$$S,[path]);
if ($I$(21).trkFileFilter.accept$java_io_File(file)) {
continue;
}if (!dialog.addedFiles.contains$O(file)) {
dialog.addedFiles.add$O(file);
}}
p$1.refreshFileList.apply(dialog, []);
p$1.refreshSupportFilesGUI.apply(dialog, []);
zipFile.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
var htmlPath=panel.openedFromPath + "!/html/" + baseName + "_info.html" ;
htmlFile=Clazz.new_($I$(5,1).c$$S,[htmlPath]);
p$1.refreshFieldsFromHTML$java_io_File.apply(dialog, [htmlFile]);
}}var currentTabTitle="";
for (var i=0; i < dialog.frame.getTabCount$(); i++) {
var next=dialog.frame.getTabTitle$I(i);
if (dialog.frame.getTrackerPanelForTab$I(i) === panel ) {
currentTabTitle=next;
}}
if ("".equals$O(dialog.titleField.getText$())) {
dialog.titleField.setText$S($I$(4).stripExtension$S(currentTabTitle));
}dialog.titleField.requestFocusInWindow$();
p$1.refreshFormatDropdown.apply(dialog, []);
}return dialog;
}, 1);

Clazz.newMeth(C$, 'hasDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
return C$.zipDialogs.get$O(panel.getID$()) != null ;
}, 1);

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(32).setFonts$O$I(this, level);
var n=this.formatDropdown.getSelectedIndex$();
var items=Clazz.array(java.lang.Object, [this.formatDropdown.getItemCount$()]);
for (var i=0; i < items.length; i++) {
items[i]=this.formatDropdown.getItemAt$I(i);
}
var model=Clazz.new_($I$(35,1).c$$OA,[items]);
this.formatDropdown.setModel$javax_swing_ComboBoxModel(model);
this.formatDropdown.setSelectedItem$O(Integer.valueOf$I(n));
var font=this.titleLabel.getFont$();
var w=0;
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", $I$(1).frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
var h=this.titleField.getMinimumSize$().height;
var labelSize=Clazz.new_($I$(36,1).c$$I$I,[w, h]);
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setPreferredSize$java_awt_Dimension(labelSize);
}
this.pack$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (this.panelID == null ) return;
if (vis) {
p$1.refreshGUI.apply(this, []);
}this.isVisible=vis;
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=Math.max(dim.width, ((((1 + ($I$(32).getFactor$() - 1) * 0.6) * C$.minWidth))|0));
return dim;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("tab")) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (!this.frame.isRemovingAll$()) {
if (e.getNewValue$() === trackerPanel ) {
this.setVisible$Z(this.isVisible);
return;
}if (e.getNewValue$() == null  && e.getOldValue$() === trackerPanel  ) {
C$.clear$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return;
}}var vis=this.isVisible;
this.setVisible$Z(false);
this.isVisible=vis;
}});

Clazz.newMeth(C$, 'clear$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var dialog=C$.zipDialogs.remove$O(panel.getID$());
if (dialog != null ) {
dialog.setVisible$Z(false);
dialog.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", dialog);
dialog.panelID=null;
dialog.frame=null;
}}, 1);

Clazz.newMeth(C$, 'setFontLevels$I',  function (level) {
for (var d, $d = C$.zipDialogs.values$().iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
d.setFontLevel$I(level);
}
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), false]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
p$1.createGUI.apply(this, []);
p$1.refreshGUI.apply(this, []);
var dim=$I$(37).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.openIcon=$I$(38).getResourceIcon$S$Z("open.gif", true);
var color=$I$(39).getColor$O("Label.disabledForeground");
if (color != null ) $I$(39).put$O$O("ComboBox.disabledForeground", color);
this.videoExportListener=Clazz.new_($I$(40,1),[this, null]);
var contentPane=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var toolbarBorder=$I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 4);
this.titlePanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.titleTitleBox=$I$(43).createHorizontalBox$();
this.titleLabel=Clazz.new_($I$(44,1));
this.titleLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.titleTitleBox.add$java_awt_Component(this.titleLabel);
this.titleField=Clazz.new_($I$(24,1).c$$I,[30]);
var space=$I$(43).createHorizontalBox$();
space.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 2, 2, 4));
space.add$java_awt_Component(this.titleField);
this.titleTitleBox.add$java_awt_Component(space);
this.titlePanel.add$java_awt_Component$O(this.titleTitleBox, "North");
this.descriptionPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.descriptionTitleBox=$I$(43).createHorizontalBox$();
this.descriptionLabel=Clazz.new_($I$(44,1));
this.descriptionLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.descriptionTitleBox.add$java_awt_Component(this.descriptionLabel);
this.descriptionInfoLabel=Clazz.new_($I$(44,1));
this.descriptionInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.descriptionInfoLabel.setFont$java_awt_Font(this.descriptionInfoLabel.getFont$().deriveFont$I(0));
this.descriptionTitleBox.add$java_awt_Component(this.descriptionInfoLabel);
this.descriptionTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.descriptionButton=Clazz.new_($I$(45,1));
this.descriptionButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.descriptionButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$2.$init$,[this, null])));
this.descriptionButton.setContentAreaFilled$Z(false);
this.descriptionTitleBox.add$java_awt_Component(this.descriptionButton);
this.descriptionPanel.add$java_awt_Component$O(this.descriptionTitleBox, "North");
this.descriptionPane=Clazz.new_($I$(47,1));
this.descriptionPane.setLineWrap$Z(true);
this.descriptionPane.setWrapStyleWord$Z(true);
this.descriptionPane.getDocument$().putProperty$O$O("parent", this.descriptionPane);
this.descriptionPane.getDocument$().addDocumentListener$javax_swing_event_DocumentListener($I$(24).documentListener);
this.descriptionPane.addFocusListener$java_awt_event_FocusListener(((P$.ExportZipDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionPane.setBackground$java_awt_Color($I$(23).white);
p$1.refreshDescriptionGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
});
})()
), Clazz.new_($I$(26,1),[this, null],P$.ExportZipDialog$3)));
this.tabsPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.tabsTitleBox=$I$(43).createHorizontalBox$();
this.tabsLabel=Clazz.new_($I$(44,1));
this.tabsLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.tabsTitleBox.add$java_awt_Component(this.tabsLabel);
this.tabsInfoLabel=Clazz.new_($I$(44,1));
this.tabsInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.tabsInfoLabel.setFont$java_awt_Font(this.tabsInfoLabel.getFont$().deriveFont$I(0));
this.tabsTitleBox.add$java_awt_Component(this.tabsInfoLabel);
this.tabsTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.tabsButton=Clazz.new_($I$(45,1));
this.tabsButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.tabsButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].tabsPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].tabsPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].tabsButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$4.$init$,[this, null])));
this.tabsButton.setContentAreaFilled$Z(false);
this.tabsTitleBox.add$java_awt_Component(this.tabsButton);
this.tabsPanel.add$java_awt_Component$O(this.tabsTitleBox, "North");
this.videoPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.clipCheckbox=Clazz.new_($I$(48,1));
this.clipCheckbox.setSelected$Z(C$.trimToClip);
this.clipCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshVideosGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].clipCheckbox.requestFocusInWindow$();
$I$(2).trimToClip=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].clipCheckbox.isSelected$();
});
})()
), Clazz.new_(P$.ExportZipDialog$5.$init$,[this, null])));
this.formatDropdown=((P$.ExportZipDialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].titleField.getPreferredSize$().height;
return dim;
});
})()
), Clazz.new_([this, null, $I$(3).getVideoFormats$()],$I$(49,1).c$$OA,P$.ExportZipDialog$6));
this.formatDropdown.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshVideosGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].formatDropdown.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$7.$init$,[this, null])));
this.formatDropdown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(50,1),[this, null]));
this.videoTitleBox=$I$(43).createHorizontalBox$();
this.videoLabel=Clazz.new_($I$(44,1));
this.videoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.videoTitleBox.add$java_awt_Component(this.videoLabel);
this.videoInfoLabel=Clazz.new_($I$(44,1));
this.videoInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.videoInfoLabel.setFont$java_awt_Font(this.videoInfoLabel.getFont$().deriveFont$I(0));
this.videoTitleBox.add$java_awt_Component(this.videoInfoLabel);
this.videoTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.videoButton=Clazz.new_($I$(45,1));
this.videoButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.videoButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$8.$init$,[this, null])));
this.videoButton.setContentAreaFilled$Z(false);
this.videoTitleBox.add$java_awt_Component(this.videoButton);
this.videoPanel.add$java_awt_Component$O(this.videoTitleBox, "North");
this.metaPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.metaTitleBox=$I$(43).createHorizontalBox$();
this.metaLabel=Clazz.new_($I$(44,1));
this.metaLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.metaTitleBox.add$java_awt_Component(this.metaLabel);
this.metaInfoLabel=Clazz.new_($I$(44,1));
this.metaInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.metaInfoLabel.setFont$java_awt_Font(this.metaInfoLabel.getFont$().deriveFont$I(0));
this.metaTitleBox.add$java_awt_Component(this.metaInfoLabel);
this.metaTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.metaButton=Clazz.new_($I$(45,1));
this.metaButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.metaButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].metaPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].metaPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].metaButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$9.$init$,[this, null])));
this.metaButton.setContentAreaFilled$Z(false);
this.metaTitleBox.add$java_awt_Component(this.metaButton);
this.thumbnailPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.thumbTitleBox=$I$(43).createHorizontalBox$();
this.thumbLabel=Clazz.new_($I$(44,1));
this.thumbLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.thumbTitleBox.add$java_awt_Component(this.thumbLabel);
this.thumbInfoLabel=Clazz.new_($I$(44,1));
this.thumbInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.thumbInfoLabel.setFont$java_awt_Font(this.thumbInfoLabel.getFont$().deriveFont$I(0));
this.thumbTitleBox.add$java_awt_Component(this.thumbInfoLabel);
this.thumbTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.thumbButton=Clazz.new_($I$(45,1));
this.thumbButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.thumbButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$10.$init$,[this, null])));
this.thumbButton.setContentAreaFilled$Z(false);
this.thumbTitleBox.add$java_awt_Component(this.thumbButton);
this.supportFilesPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.supportFilesTitleBox=$I$(43).createHorizontalBox$();
this.supportFilesLabel=Clazz.new_($I$(44,1));
this.supportFilesLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.supportFilesTitleBox.add$java_awt_Component(this.supportFilesLabel);
this.supportFilesInfoLabel=Clazz.new_($I$(44,1));
this.supportFilesInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.supportFilesInfoLabel.setFont$java_awt_Font(this.supportFilesInfoLabel.getFont$().deriveFont$I(0));
this.supportFilesTitleBox.add$java_awt_Component(this.supportFilesInfoLabel);
this.supportFilesTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.supportFilesButton=Clazz.new_($I$(45,1));
this.supportFilesButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.supportFilesButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].supportFilesPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].supportFilesPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].supportFilesButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$11.$init$,[this, null])));
this.supportFilesButton.setContentAreaFilled$Z(false);
this.supportFilesTitleBox.add$java_awt_Component(this.supportFilesButton);
this.fileListModel=Clazz.new_($I$(51,1));
this.fileList=Clazz.new_($I$(52,1).c$$javax_swing_ListModel,[this.fileListModel]);
this.fileList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.ExportZipDialog$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].removeButton.setEnabled$Z(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].fileList.getSelectedValue$() != null );
});
})()
), Clazz.new_(P$.ExportZipDialog$12.$init$,[this, null])));
this.addButton=((P$.ExportZipDialog$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getPreferredSize$();
});
})()
), Clazz.new_($I$(45,1),[this, null],P$.ExportZipDialog$13));
this.addButton.setContentAreaFilled$Z(false);
this.addButton.setForeground$java_awt_Color(C$.labelColor);
this.addButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(21).getChooser$();
chooser.setDialogTitle$S($I$(46).getString$S("ZipResourceDialog.FileChooser.AddFile.Title"));
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(53).getPDFFilter$());
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(53).getHTMLFilter$());
if (this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].recentAddFilesFilter != null ) {
chooser.setFileFilter$javax_swing_filechooser_FileFilter(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].recentAddFilesFilter);
} else {
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(53).getPDFFilter$());
}$I$(3,"getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function",[this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame, "open any", ((P$.ExportZipDialog$14$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$14$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].recentAddFilesFilter=this.$finals$.chooser.getFileFilter$();
this.$finals$.chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(53).getHTMLFilter$());
this.$finals$.chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(53).getPDFFilter$());
if (files == null ) {
return null;
}if (!this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].addedFiles.contains$O(files[0])) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].addedFiles.add$O(files[0]);
p$1.refreshFileList.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
p$1.refreshSupportFilesGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
}return null;
});
})()
), Clazz.new_(P$.ExportZipDialog$14$1.$init$,[this, {chooser:chooser}]))]);
});
})()
), Clazz.new_(P$.ExportZipDialog$14.$init$,[this, null])));
this.removeButton=Clazz.new_($I$(45,1));
this.removeButton.setContentAreaFilled$Z(false);
this.removeButton.setForeground$java_awt_Color(C$.labelColor);
this.removeButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].fileList.getSelectedValue$();
if (name != null ) {
for (var it=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].addedFiles.iterator$(); it.hasNext$(); ) {
var next=it.next$();
if (name.equals$O(next.getName$())) {
it.remove$();
break;
}}
p$1.refreshFileList.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
p$1.refreshSupportFilesGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
}});
})()
), Clazz.new_(P$.ExportZipDialog$15.$init$,[this, null])));
var buttonbox=$I$(43).createVerticalBox$();
buttonbox.add$java_awt_Component$O(this.addButton, "North");
buttonbox.add$java_awt_Component$O(this.removeButton, "South");
var scroller=((P$.ExportZipDialog$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var h=this.$finals$.buttonbox.getPreferredSize$().height;
return Clazz.new_($I$(36,1).c$$I$I,[10, h]);
});
})()
), Clazz.new_($I$(54,1).c$$java_awt_Component,[this, {buttonbox:buttonbox}, this.fileList],P$.ExportZipDialog$16));
var box=$I$(43).createHorizontalBox$();
box.add$java_awt_Component(scroller);
box.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 0, 2, 4));
this.supportFilesBox=$I$(43).createHorizontalBox$();
this.supportFilesBox.add$java_awt_Component(buttonbox);
this.supportFilesBox.add$java_awt_Component(box);
this.advancedPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
this.advancedTitleBox=$I$(43).createHorizontalBox$();
this.advancedLabel=Clazz.new_($I$(44,1));
this.advancedLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 6, 2, 2));
this.advancedTitleBox.add$java_awt_Component(this.advancedLabel);
this.advancedInfoLabel=Clazz.new_($I$(44,1));
this.advancedInfoLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.advancedInfoLabel.setFont$java_awt_Font(this.advancedInfoLabel.getFont$().deriveFont$I(0));
this.advancedTitleBox.add$java_awt_Component(this.advancedInfoLabel);
this.advancedTitleBox.add$java_awt_Component($I$(43).createHorizontalGlue$());
this.advancedButton=Clazz.new_($I$(45,1));
this.advancedButton.setToolTipText$S($I$(46).getString$S("ExportZipDialog.Button.Expand.Tooltip"));
this.advancedButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].advancedPanel.getName$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].advancedPanel.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].advancedButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$17.$init$,[this, null])));
this.advancedButton.setContentAreaFilled$Z(false);
this.advancedTitleBox.add$java_awt_Component(this.advancedButton);
this.advancedPanel.add$java_awt_Component$O(this.advancedTitleBox, "North");
var buttonbar=Clazz.new_($I$(41,1));
this.helpButton=Clazz.new_($I$(55,1));
this.helpButton.setForeground$java_awt_Color(Clazz.new_($I$(23,1).c$$I$I$I,[0, 0, 102]));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.showHelp$S$I("zip", 0);
});
})()
), Clazz.new_(P$.ExportZipDialog$18.$init$,[this, null])));
this.saveButton=Clazz.new_($I$(55,1));
this.saveButton.setForeground$java_awt_Color(C$.labelColor);
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].saveZipAs$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
});
})()
), Clazz.new_(P$.ExportZipDialog$19.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(55,1));
this.closeButton.setForeground$java_awt_Color(C$.labelColor);
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [false]);
});
})()
), Clazz.new_(P$.ExportZipDialog$20.$init$,[this, null])));
buttonbar.add$java_awt_Component(this.helpButton);
buttonbar.add$java_awt_Component(this.saveButton);
buttonbar.add$java_awt_Component(this.closeButton);
this.metaFieldsBox=$I$(43).createVerticalBox$();
this.advancedFieldsBox=$I$(43).createVerticalBox$();
this.htmlLabel=Clazz.new_($I$(44,1));
this.htmlField=Clazz.new_($I$(24,1).c$$I,[30]);
this.htmlField.setAlignmentY$F(0.0);
this.htmlField.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshAdvancedGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].htmlField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$21.$init$,[this, null])));
this.loadHTMLButton=Clazz.new_($I$(45,1).c$$javax_swing_Icon,[this.openIcon]);
this.loadHTMLButton.setContentAreaFilled$Z(false);
this.loadHTMLButton.setAlignmentY$F(0.0);
this.loadHTMLButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(21).getChooser$();
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.setDialogTitle$S($I$(46).getString$S("ZipResourceDialog.FileChooser.OpenHTML.Title"));
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(53).getHTMLFilter$());
var files=$I$(3,"getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function",[this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame, "open any", ((P$.ExportZipDialog$22$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$22$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) {
if (files == null ) {
return null;
}this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].htmlField.setText$S($I$(4,"getRelativePath$S",[files[0].getPath$()]));
p$1.refreshFieldsFromHTML$java_io_File.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [files[0]]);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
return null;
});
})()
), Clazz.new_(P$.ExportZipDialog$22$1.$init$,[this, null]))]);
chooser.removeChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(53).getHTMLFilter$());
if (files == null ) return;
});
})()
), Clazz.new_(P$.ExportZipDialog$22.$init$,[this, null])));
var htmlbar=Clazz.new_($I$(56,1));
htmlbar.setBorder$javax_swing_border_Border(toolbarBorder);
htmlbar.setFloatable$Z(false);
htmlbar.setOpaque$Z(false);
htmlbar.add$java_awt_Component(this.htmlLabel);
htmlbar.add$java_awt_Component(this.htmlField);
htmlbar.add$java_awt_Component(this.loadHTMLButton);
this.authorLabel=Clazz.new_($I$(44,1));
this.authorField=Clazz.new_($I$(24,1).c$$I,[30]);
this.authorField.setText$S(panel.author);
this.authorField.setBackground$java_awt_Color($I$(23).white);
this.authorField.setAlignmentY$F(0.0);
this.authorField.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshMetadataGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].panelID).author=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].authorField.getText$().trim$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].authorField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$23.$init$,[this, null])));
var authorbar=Clazz.new_($I$(56,1));
authorbar.setBorder$javax_swing_border_Border(toolbarBorder);
authorbar.setFloatable$Z(false);
authorbar.setOpaque$Z(false);
authorbar.add$java_awt_Component(this.authorLabel);
authorbar.add$java_awt_Component(this.authorField);
this.contactLabel=Clazz.new_($I$(44,1));
this.contactField=Clazz.new_($I$(24,1).c$$I,[30]);
this.contactField.setText$S(panel.contact);
this.contactField.setBackground$java_awt_Color($I$(23).white);
this.contactField.setAlignmentY$F(0.0);
this.contactField.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshMetadataGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].panelID).contact=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].contactField.getText$().trim$();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].contactField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$24.$init$,[this, null])));
var contactbar=Clazz.new_($I$(56,1));
contactbar.setBorder$javax_swing_border_Border(toolbarBorder);
contactbar.setFloatable$Z(false);
contactbar.setOpaque$Z(false);
contactbar.add$java_awt_Component(this.contactLabel);
contactbar.add$java_awt_Component(this.contactField);
this.keywordsLabel=Clazz.new_($I$(44,1));
this.keywordsField=Clazz.new_($I$(24,1).c$$I,[30]);
this.keywordsField.setAlignmentY$F(0.0);
this.keywordsField.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshMetadataGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].keywordsField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$25.$init$,[this, null])));
var keywordsbar=Clazz.new_($I$(56,1));
keywordsbar.setBorder$javax_swing_border_Border(toolbarBorder);
keywordsbar.setFloatable$Z(false);
keywordsbar.setOpaque$Z(false);
keywordsbar.add$java_awt_Component(this.keywordsLabel);
keywordsbar.add$java_awt_Component(this.keywordsField);
this.urlLabel=Clazz.new_($I$(44,1));
this.urlField=Clazz.new_($I$(24,1).c$$I,[30]);
this.urlField.setAlignmentY$F(0.0);
this.urlField.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshAdvancedGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].urlField.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$26.$init$,[this, null])));
var urlbar=Clazz.new_($I$(56,1));
urlbar.setBorder$javax_swing_border_Border(toolbarBorder);
urlbar.setFloatable$Z(false);
urlbar.setOpaque$Z(false);
urlbar.add$java_awt_Component(this.urlLabel);
urlbar.add$java_awt_Component(this.urlField);
this.metaFieldsBox.add$java_awt_Component(authorbar);
this.metaFieldsBox.add$java_awt_Component(contactbar);
this.metaFieldsBox.add$java_awt_Component(keywordsbar);
this.advancedFieldsBox.add$java_awt_Component(urlbar);
this.advancedFieldsBox.add$java_awt_Component(htmlbar);
this.thumbnailDisplay=Clazz.new_($I$(44,1));
var line=$I$(27,"createLineBorder$java_awt_Color",[$I$(23).black]);
var empty=$I$(27).createEmptyBorder$I$I$I$I(0, 2, 0, 2);
this.thumbnailDisplay.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, line));
this.thumbnailButton=Clazz.new_($I$(55,1));
this.thumbnailButton.setForeground$java_awt_Color(C$.labelColor);
this.thumbnailButton.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(57,"getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z",[this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].panelID), false]).setVisible$Z(true);
});
})()
), Clazz.new_(P$.ExportZipDialog$27.$init$,[this, null])));
this.thumbnailImagePanel=Clazz.new_($I$(41,1));
this.thumbnailImagePanel.add$java_awt_Component(this.thumbnailDisplay);
this.showThumbnailCheckbox=Clazz.new_($I$(48,1));
this.showThumbnailCheckbox.setSelected$Z(false);
this.showThumbnailCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].showThumbnailCheckbox.isSelected$()) {
p$1.refreshThumbnailImage.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailPanel.add$java_awt_Component$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailImagePanel, "South");
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailPanel.remove$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailImagePanel);
}this.b$['java.awt.Window'].pack$.apply(this.b$['java.awt.Window'], []);
$I$(28).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog']);
});
})()
), Clazz.new_(P$.ExportZipDialog$28.$init$,[this, null])));
if (this.showThumbnailCheckbox.isSelected$()) {
this.thumbnailPanel.add$java_awt_Component$O(this.thumbnailImagePanel, "South");
}var dialog=$I$(57).getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(panel, false);
dialog.addPropertyChangeListener$S$java_beans_PropertyChangeListener("accepted", ((P$.ExportZipDialog$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$1.refreshThumbnailImage.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
});
})()
), Clazz.new_(P$.ExportZipDialog$29.$init$,[this, null])));
var northCenterPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
var northUpper=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
var northLower=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
northCenterPanel.add$java_awt_Component$O(northUpper, "North");
northCenterPanel.add$java_awt_Component$O(northLower, "South");
var southCenterPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
var southUpper=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
var southLower=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
southCenterPanel.add$java_awt_Component$O(southUpper, "North");
southCenterPanel.add$java_awt_Component$O(southLower, "Center");
var centerPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
centerPanel.add$java_awt_Component$O(northCenterPanel, "North");
centerPanel.add$java_awt_Component$O(southCenterPanel, "Center");
contentPane.add$java_awt_Component$O(this.titlePanel, "North");
contentPane.add$java_awt_Component$O(centerPanel, "Center");
contentPane.add$java_awt_Component$O(buttonbar, "South");
northUpper.add$java_awt_Component$O(this.descriptionPanel, "North");
northUpper.add$java_awt_Component$O(this.tabsPanel, "South");
northLower.add$java_awt_Component$O(this.videoPanel, "North");
northLower.add$java_awt_Component$O(this.metaPanel, "South");
southUpper.add$java_awt_Component$O(this.thumbnailPanel, "North");
southUpper.add$java_awt_Component$O(this.supportFilesPanel, "South");
southLower.add$java_awt_Component$O(this.advancedPanel, "North");
this.labels.add$O(this.authorLabel);
this.labels.add$O(this.contactLabel);
this.labels.add$O(this.keywordsLabel);
this.labels.add$O(this.urlLabel);
this.labels.add$O(this.htmlLabel);
var etch=$I$(27).createEtchedBorder$();
this.titlePanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.descriptionPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.tabsPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.videoPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.thumbnailPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.metaPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.supportFilesPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
this.advancedPanel.setBorder$javax_swing_border_Border($I$(27).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, etch));
var openCloseListener=((P$.ExportZipDialog$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
var source=e.getSource$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionLabel ) source=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionPanel;
var name=source.getName$();
source.setName$S(name == null  ? "expanded" : null);
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].descriptionButton.requestFocusInWindow$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].tabsPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].tabsButton.requestFocusInWindow$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoButton.requestFocusInWindow$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].metaPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].metaButton.requestFocusInWindow$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbnailPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].thumbButton.requestFocusInWindow$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].supportFilesPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].supportFilesButton.requestFocusInWindow$();
if (source === this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].advancedPanel ) this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].advancedButton.requestFocusInWindow$();
});
})()
), Clazz.new_($I$(58,1),[this, null],P$.ExportZipDialog$30));
this.descriptionPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.descriptionLabel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.tabsPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.videoPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.thumbnailPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.metaPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.supportFilesPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
this.advancedPanel.addMouseListener$java_awt_event_MouseListener(openCloseListener);
}, p$1);

Clazz.newMeth(C$, 'refreshGUI',  function () {
var title=$I$(46).getString$S("ZipResourceDialog.Title");
this.setTitle$S(title);
this.clipCheckbox.setText$S($I$(46).getString$S("ZipResourceDialog.Checkbox.TrimVideo"));
this.helpButton.setText$S($I$(46).getString$S("Dialog.Button.Help"));
this.saveButton.setText$S($I$(46).getString$S("ExportZipDialog.Button.SaveZip.Text") + "...");
this.closeButton.setText$S($I$(46).getString$S("Dialog.Button.Cancel"));
this.thumbnailButton.setText$S($I$(46).getString$S("ZipResourceDialog.Button.ThumbnailSettings") + "...");
this.showThumbnailCheckbox.setText$S($I$(46).getString$S("ZipResourceDialog.Checkbox.PreviewThumbnail"));
this.addButton.setText$S($I$(46).getString$S("Dialog.Button.Add") + "...");
this.removeButton.setText$S($I$(46).getString$S("Dialog.Button.Remove"));
this.removeButton.setEnabled$Z(this.fileList.getSelectedValue$() != null );
this.htmlLabel.setText$S($I$(46).getString$S("ZipResourceDialog.Label.HTML"));
this.titleLabel.setText$S($I$(46).getString$S("ZipResourceDialog.Label.Title") + ":");
this.descriptionLabel.setText$S($I$(46).getString$S("ZipResourceDialog.Label.Description"));
this.authorLabel.setText$S($I$(46).getString$S("PropertiesDialog.Label.Author"));
this.contactLabel.setText$S($I$(46).getString$S("PropertiesDialog.Label.Contact"));
this.keywordsLabel.setText$S($I$(46).getString$S("ZipResourceDialog.Label.Keywords"));
this.urlLabel.setText$S($I$(46).getString$S("ZipResourceDialog.Label.Link"));
this.htmlLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.HTML") + ": ");
this.htmlField.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.HTML") + ": ");
this.titleLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Title"));
this.titleField.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Title"));
this.descriptionLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Description"));
this.descriptionPane.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Description"));
this.authorLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Author"));
this.authorField.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Author"));
this.contactLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Contact"));
this.contactField.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Contact"));
this.keywordsLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Keywords"));
this.keywordsField.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Keywords"));
this.urlLabel.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Link"));
this.urlField.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.Link"));
this.clipCheckbox.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.TrimVideo"));
this.thumbnailButton.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.ThumbnailSettings"));
this.loadHTMLButton.setToolTipText$S($I$(46).getString$S("ZipResourceDialog.Tooltip.LoadHTML"));
var font=this.titleLabel.getFont$();
var w=0;
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
$I$(32,"setFonts$O$I",[next, $I$(32).getLevel$()]);
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", $I$(1).frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
var h=this.authorField.getMinimumSize$().height;
var labelSize=Clazz.new_($I$(36,1).c$$I$I,[w, h]);
for (var it=this.labels.iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(0, 0, 0, 2));
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setHorizontalAlignment$I(11);
next.setAlignmentY$F(0.0);
}
var path=this.htmlField.getText$().trim$();
var res=null;
if (!path.equals$O(this.htmlField.getDefaultText$()) && !path.equals$O("") ) {
res=$I$(59).getResource$S(path);
this.htmlField.setForeground$java_awt_Color(res == null  ? $I$(23).red : $I$(24).defaultForeground);
}this.htmlField.setBackground$java_awt_Color($I$(23).white);
path=this.urlField.getText$().trim$();
if (!path.equals$O("")) {
try {
Clazz.new_($I$(60,1).c$$S,[path]);
this.urlField.setForeground$java_awt_Color($I$(24).defaultForeground);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
this.urlField.setForeground$java_awt_Color($I$(23).red);
} else {
throw e;
}
}
}this.urlField.setEnabled$Z(res == null );
this.urlLabel.setEnabled$Z(res == null );
this.descriptionPane.setEnabled$Z(res == null );
if (this.panelID != null ) {
p$1.refreshDescriptionGUI.apply(this, []);
p$1.refreshTabsGUI.apply(this, []);
p$1.refreshVideosGUI.apply(this, []);
p$1.refreshMetadataGUI.apply(this, []);
this.refreshThumbnailGUI$();
p$1.refreshSupportFilesGUI.apply(this, []);
p$1.refreshAdvancedGUI.apply(this, []);
}this.pack$();
$I$(28).repaintT$java_awt_Component(this);
}, p$1);

Clazz.newMeth(C$, 'refreshThumbnailImage',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var thumbnailDialog=$I$(57).getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(trackerPanel, false);
var image=thumbnailDialog.getThumbnail$();
this.thumbnailDisplay.setIcon$javax_swing_Icon(Clazz.new_($I$(61,1).c$$java_awt_Image,[image]));
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'refreshDescriptionGUI',  function () {
var title=$I$(46).getString$S("ZipResourceDialog.Label.Description");
this.descriptionLabel.setText$S(title + ":");
var info=this.descriptionPane.getText$().trim$();
if ("".equals$O(info)) {
info=$I$(46).getString$S("ExportZipDialog.Border.Title.None");
} else if (info.length$() > C$.maxLineLength) {
info=info.substring$I$I(0, C$.maxLineLength) + "...";
}this.descriptionInfoLabel.setText$S(info);
this.descriptionPanel.removeAll$();
this.descriptionPanel.add$java_awt_Component$O(this.descriptionTitleBox, "North");
if (this.descriptionPanel.getName$() != null ) {
this.descriptionButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
$I$(32,"setFonts$O$I",[this.descriptionPane, $I$(32).getLevel$()]);
var scroller=((P$.ExportZipDialog$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var w=C$.superclazz.prototype.getPreferredSize$.apply(this, []).width;
return Clazz.new_($I$(36,1).c$$I$I,[w, 60]);
});
})()
), Clazz.new_($I$(54,1).c$$java_awt_Component,[this, null, this.descriptionPane],P$.ExportZipDialog$31));
var box=$I$(43).createHorizontalBox$();
box.add$java_awt_Component(scroller);
box.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 2, 4));
this.descriptionPanel.add$java_awt_Component$O(box, "South");
} else {
this.descriptionButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}}, p$1);

Clazz.newMeth(C$, 'refreshTabsGUI',  function () {
var title=$I$(46).getString$S("ExportZipDialog.Border.Title.Tabs");
this.tabsLabel.setText$S(title + ":");
var currentTabTitle=null;
var currentTabNumber=0;
var currentTabs=Clazz.new_($I$(9,1));
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
for (var i=0; i < this.frame.getTabCount$(); i++) {
var next=this.frame.getTabTitle$I(i);
currentTabs.add$O(next);
if (this.frame.getTrackerPanelForTab$I(i) === trackerPanel ) {
currentTabTitle=next;
currentTabNumber=i;
}}
var equalsign=" =";
if (this.tabCheckboxes.size$() > currentTabs.size$()) {
var tempboxes=Clazz.new_($I$(9,1));
var tempfields=Clazz.new_($I$(9,1));
for (var i=0; i < this.tabCheckboxes.size$(); i++) {
var s=this.tabCheckboxes.get$I(i).getText$();
if (s.endsWith$S(" =")) {
s=s.substring$I$I(0, " =".length$());
}if (currentTabs.contains$O(s)) {
tempboxes.add$O(this.tabCheckboxes.get$I(i));
tempfields.add$O(this.tabTitleFields.get$I(i));
}}
this.tabCheckboxes=tempboxes;
this.tabTitleFields=tempfields;
}if (this.tabCheckboxes.size$() < currentTabs.size$()) {
for (var i=0; i < this.tabCheckboxes.size$(); i++) {
var existing=this.tabCheckboxes.get$I(i);
if (!existing.getText$().equals$O(currentTabs.get$I(i) + " =")) {
var field=this.tabTitleFields.get$I(i);
var s=$I$(4,"stripExtension$S",[currentTabs.get$I(i)]);
if (!s.equals$O($I$(46).getString$S("TrackerPanel.NewTab.Name"))) {
field.setText$S(s);
}field.setBackground$java_awt_Color($I$(23).WHITE);
}}
for (var i=this.tabCheckboxes.size$(); i < this.frame.getTabCount$(); i++) {
var cb=Clazz.new_($I$(48,1));
cb.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
var cb=e.getSource$();
cb.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$32.$init$,[this, null])));
if (i == this.frame.getSelectedTab$()) {
cb.setSelected$Z(true);
}this.tabCheckboxes.add$O(cb);
var field=((P$.ExportZipDialog$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.EntryField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].titleField.getPreferredSize$().height;
return dim;
});
})()
), Clazz.new_($I$(24,1),[this, null],P$.ExportZipDialog$33));
field.addActionListener$java_awt_event_ActionListener(((P$.ExportZipDialog$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.refreshGUI.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
var field=e.getSource$();
field.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.ExportZipDialog$34.$init$,[this, null])));
var s=$I$(4,"stripExtension$S",[currentTabs.get$I(i)]);
if (!s.equals$O($I$(46).getString$S("TrackerPanel.NewTab.Name"))) {
field.setText$S(s);
}this.tabTitleFields.add$O(field);
field.setBackground$java_awt_Color($I$(23).WHITE);
}
}this.tabsPanel.removeAll$();
this.tabsPanel.add$java_awt_Component$O(this.tabsTitleBox, "North");
var stack=$I$(43).createVerticalBox$();
var selectedCount=0;
for (var i=0; i < this.frame.getTabCount$(); i++) {
var box=$I$(43).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 4, 0, 4));
stack.add$java_awt_Component(box);
var label=Clazz.new_([currentTabs.get$I(i)],$I$(44,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(0, 0, 0, 4));
var checkbox=this.tabCheckboxes.get$I(i);
checkbox.setEnabled$Z(i != currentTabNumber);
var field=this.tabTitleFields.get$I(i);
field.setEnabled$Z(checkbox.isSelected$());
box.add$java_awt_Component(checkbox);
box.add$java_awt_Component(label);
if (checkbox.isSelected$()) {
label.setText$S(label.getText$() + " =");
box.add$java_awt_Component(field);
} else {
box.add$java_awt_Component($I$(43).createHorizontalGlue$());
}if (checkbox.isSelected$()) {
++selectedCount;
var tabName=this.tabTitleFields.get$I(i).getText$().trim$();
if (tabName.length$() == 0) {
tabName=currentTabs.get$I(i);
}}}
var strippedTabTitle=$I$(4).stripExtension$S(currentTabTitle);
this.tabsInfoLabel.setText$S(selectedCount > 1 ? strippedTabTitle + " + " + (selectedCount - 1)  : strippedTabTitle);
if (this.tabsPanel.getName$() != null ) {
this.tabsButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
$I$(32,"setFonts$O$I",[stack, $I$(32).getLevel$()]);
this.tabsPanel.add$java_awt_Component$O(stack, "South");
} else {
this.tabsButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}}, p$1);

Clazz.newMeth(C$, 'refreshVideosGUI',  function () {
var title=$I$(46).getString$S("ZipResourceDialog.Border.Title.Video");
this.videoLabel.setText$S(title + ":");
var info="";
if (!this.clipCheckbox.isEnabled$()) {
info=$I$(46).getString$S("ExportZipDialog.Border.Title.None");
} else {
var format=$I$(3).videoFormats.get$O(this.formatDropdown.getSelectedItem$());
if (format != null ) {
var ext=format.getDefaultExtension$();
info=(this.clipCheckbox.isSelected$() ? $I$(46).getString$S("ExportZipDialog.Border.Title.TrimToClip") + " " + ext  : $I$(46).getString$S("ExportZipDialog.Border.Title.CopyOriginal"));
}}this.videoInfoLabel.setText$S(info);
var hasVideo=this.frame.getTrackerPanelForID$Integer(this.panelID).getVideo$() != null ;
for (var i=0; i < this.frame.getTabCount$(); i++) {
hasVideo=hasVideo || (this.frame.getTrackerPanelForTab$I(i) != null  && this.frame.getTrackerPanelForTab$I(i).getVideo$() != null  ) ;
}
this.clipCheckbox.setEnabled$Z(hasVideo);
if (!hasVideo) {
this.clipCheckbox.setSelected$Z(false);
}this.formatDropdown.setEnabled$Z(this.clipCheckbox.isSelected$());
this.videoPanel.removeAll$();
this.videoPanel.add$java_awt_Component$O(this.videoTitleBox, "North");
if (this.videoPanel.getName$() != null ) {
this.videoButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
var panel=$I$(43).createHorizontalBox$();
panel.add$java_awt_Component(this.clipCheckbox);
panel.add$java_awt_Component(this.formatDropdown);
panel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 2, 4, 4));
$I$(32,"setFonts$O$I",[panel, $I$(32).getLevel$()]);
this.videoPanel.add$java_awt_Component$O(panel, "South");
} else {
this.videoButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}}, p$1);

Clazz.newMeth(C$, 'refreshMetadataGUI',  function () {
var title=$I$(46).getString$S("ExportZipDialog.Label.Metadata.Text");
this.metaLabel.setText$S(title + ":");
var info="";
if (this.authorField.getText$().trim$().length$() > 0) {
info+=$I$(46).getString$S("PropertiesDialog.Label.Author") + ", ";
}if (this.contactField.getText$().trim$().length$() > 0) {
info+=$I$(46).getString$S("PropertiesDialog.Label.Contact") + ", ";
}if (this.keywordsField.getText$().trim$().length$() > 0) {
info+=$I$(46).getString$S("ZipResourceDialog.Label.Keywords") + ", ";
}if (info.length$() == 0) {
info=$I$(46).getString$S("ExportZipDialog.Border.Title.None");
} else {
info=info.substring$I$I(0, info.length$() - 2);
}this.metaInfoLabel.setText$S(info);
this.metaPanel.removeAll$();
this.metaPanel.add$java_awt_Component$O(this.metaTitleBox, "North");
if (this.metaPanel.getName$() != null ) {
this.metaButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
$I$(32,"setFonts$O$I",[this.metaFieldsBox, $I$(32).getLevel$()]);
this.metaPanel.add$java_awt_Component$O(this.metaFieldsBox, "South");
} else {
this.metaButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}}, p$1);

Clazz.newMeth(C$, 'refreshThumbnailGUI$',  function () {
var title=$I$(46).getString$S("ZipResourceDialog.Border.Title.Thumbnail");
this.thumbLabel.setText$S(title + ":");
var dim=$I$(57,"getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z",[this.frame.getTrackerPanelForID$Integer(this.panelID), false]).getThumbnailSize$();
var info=dim.width + " x " + dim.height ;
this.thumbInfoLabel.setText$S(info);
this.thumbnailPanel.removeAll$();
this.thumbnailPanel.add$java_awt_Component$O(this.thumbTitleBox, "North");
if (this.thumbnailPanel.getName$() != null ) {
this.thumbButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
var panel=Clazz.new_($I$(41,1));
panel.add$java_awt_Component(this.thumbnailButton);
panel.add$java_awt_Component(this.showThumbnailCheckbox);
$I$(32,"setFonts$O$I",[panel, $I$(32).getLevel$()]);
this.thumbnailPanel.add$java_awt_Component$O(panel, "Center");
if (this.showThumbnailCheckbox.isSelected$()) {
p$1.refreshThumbnailImage.apply(this, []);
this.thumbnailPanel.add$java_awt_Component$O(this.thumbnailImagePanel, "South");
}} else {
this.thumbButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}});

Clazz.newMeth(C$, 'refreshSupportFilesGUI',  function () {
var title=$I$(46).getString$S("ExportZipDialog.Border.Title.SupportFiles");
this.supportFilesLabel.setText$S(title + ":");
var info=this.fileNames.size$() + "";
if (this.fileNames.size$() == 0) {
info=$I$(46).getString$S("ExportZipDialog.Border.Title.None");
}this.supportFilesInfoLabel.setText$S(info);
this.supportFilesPanel.removeAll$();
this.supportFilesPanel.add$java_awt_Component$O(this.supportFilesTitleBox, "North");
if (this.supportFilesPanel.getName$() != null ) {
this.supportFilesButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
$I$(32,"setFonts$O$I",[this.supportFilesBox, $I$(32).getLevel$()]);
this.supportFilesPanel.add$java_awt_Component$O(this.supportFilesBox, "South");
} else {
this.supportFilesButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}}, p$1);

Clazz.newMeth(C$, 'refreshAdvancedGUI',  function () {
var title=$I$(46).getString$S("ExportZipDialog.Label.Advanced.Text");
this.advancedLabel.setText$S(title + ":");
var info="";
if (this.urlField.getText$().trim$().length$() > 0) {
info+=$I$(46).getString$S("ZipResourceDialog.Label.Link") + ", ";
}if (this.htmlField.getText$().trim$().length$() > 0) {
info+=$I$(46).getString$S("ZipResourceDialog.Label.HTML") + ", ";
}if (info.length$() == 0) {
info=$I$(46).getString$S("ExportZipDialog.Border.Title.None");
} else {
info=info.substring$I$I(0, info.length$() - 2);
}this.advancedInfoLabel.setText$S(info);
this.advancedPanel.removeAll$();
this.advancedPanel.add$java_awt_Component$O(this.advancedTitleBox, "North");
if (this.advancedPanel.getName$() != null ) {
this.advancedButton.setIcon$javax_swing_Icon($I$(62).MAXIMIZE_ICON);
$I$(32,"setFonts$O$I",[this.advancedFieldsBox, $I$(32).getLevel$()]);
this.advancedPanel.add$java_awt_Component$O(this.advancedFieldsBox, "South");
} else {
this.advancedButton.setIcon$javax_swing_Icon($I$(62).RESTORE_ICON);
}}, p$1);

Clazz.newMeth(C$, 'refreshFileList',  function () {
this.fileListModel.clear$();
this.fileNames.clear$();
for (var next, $next = this.addedFiles.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.fileNames.add$O(next.getName$());
}
for (var next, $next = this.fileNames.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.fileListModel.addElement$O(next);
}
}, p$1);

Clazz.newMeth(C$, 'refreshFormatDropdown',  function () {
$I$(3).refreshVideoFormats$();
var selected=$I$(3).getVideoFormat$S(C$.preferredExtension);
this.formatDropdown.removeAllItems$();
var zipped=$I$(63).getString$S("ZipImageVideoType.Description.Zipped");
for (var format, $format = 0, $$format = $I$(3).getVideoFormats$(); $format<$$format.length&&((format=($$format[$format])),1);$format++) {
var desc=format;
if (!desc.startsWith$S(zipped)) this.formatDropdown.addItem$O(format);
}
this.formatDropdown.setSelectedItem$O(selected);
}, p$1);

Clazz.newMeth(C$, 'refreshFieldsFromHTML$java_io_File',  function (htmlFile) {
var html=$I$(59,"getString$S",[htmlFile.getAbsolutePath$()]);
if (html == null ) return;
var title=$I$(59).getTitleFromHTMLCode$S(html);
if (title != null ) {
this.titleField.setText$S(title);
this.titleField.setBackground$java_awt_Color($I$(23).white);
}var metadata=$I$(64).getMetadataFromHTML$S(html);
for (var i=metadata.size$() - 1; i >= 0; i--) {
var next=metadata.get$I(i);
var key=next[0];
var value=next[1];
if ("Author".toLowerCase$().contains$CharSequence(key.toLowerCase$())) {
if ("".equals$O(this.authorField.getText$().trim$())) {
this.authorField.setText$S(value);
this.authorField.setBackground$java_awt_Color($I$(23).white);
}} else if ("Contact".toLowerCase$().contains$CharSequence(key.toLowerCase$())) {
if ("".equals$O(this.contactField.getText$().trim$())) {
this.contactField.setText$S(value);
this.contactField.setBackground$java_awt_Color($I$(23).white);
}} else if ("Keywords".toLowerCase$().contains$CharSequence(key.toLowerCase$())) {
this.keywordsField.setText$S(value);
this.keywordsField.setBackground$java_awt_Color($I$(23).white);
} else if ("description".contains$CharSequence(key.toLowerCase$())) {
this.descriptionPane.setText$S(value);
this.descriptionPane.setBackground$java_awt_Color($I$(23).white);
} else if ("url".contains$CharSequence(key.toLowerCase$())) {
this.urlField.setText$S(value);
this.urlField.setBackground$java_awt_Color($I$(23).white);
}}
}, p$1);

Clazz.newMeth(C$, 'addVideosAndTRKs$java_util_ArrayList',  function (zipList) {
this.videoIOPreferredExtension=$I$(21).getPreferredExportExtension$();
var nTabs=0;
for (var i=0; i < this.tabCheckboxes.size$(); i++) {
if (this.tabCheckboxes.get$I(i).isSelected$()) ++nTabs;
}
var trkPaths=Clazz.new_($I$(9,1));
var exports=Clazz.new_($I$(9,1));
for (var i=0; i < this.tabCheckboxes.size$(); i++) {
var box=this.tabCheckboxes.get$I(i);
if (!box.isSelected$()) continue;
var panel=this.frame.getTrackerPanelForTab$I(i);
if (panel == null ) return;
var tabTitle=(i >= this.tabTitleFields.size$() ? null : this.tabTitleFields.get$I(i).getText$().trim$());
if ("".equals$O(tabTitle) && nTabs == 1 ) {
tabTitle=this.titleField.getText$().trim$();
}var trkPath=p$1.getTRKTarget$S$java_util_ArrayList.apply(this, [tabTitle, trkPaths]);
var originalPath=null;
var exporter=null;
var videoPath=null;
var vid=panel.getVideo$();
if (vid != null ) {
originalPath=vid.getProperty$S("absolutePath");
if (this.clipCheckbox.isSelected$()) {
if (this.videoExporter == null ) this.videoExporter=$I$(65).getVideoDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
exporter=this.videoExporter;
} else if (originalPath != null ) {
videoPath=C$.videoSubdirectory + $I$(5).separator + $I$(4).getName$S(originalPath) ;
var tempPath=p$1.getTempDirectory.apply(this, []) + videoPath;
var videoexists=Clazz.new_($I$(5,1).c$$S,[tempPath]).exists$();
var imagePaths=$I$(21).getZippedImagePaths$S(originalPath);
if (imagePaths != null ) {
videoexists=Clazz.new_($I$(5,1).c$$S,[imagePaths[0]]).exists$();
}if (!videoexists) {
Clazz.new_([p$1.getTempDirectory.apply(this, []) + C$.videoSubdirectory],$I$(5,1).c$$S).mkdirs$();
if (imagePaths != null ) {
originalPath=imagePaths[0];
for (var k=0; k < imagePaths.length; k++) {
var vidPath=C$.videoSubdirectory + $I$(5).separator + $I$(4).getName$S(imagePaths[k]) ;
tempPath=p$1.getTempDirectory.apply(this, []) + vidPath;
if (k == 0) videoPath=tempPath;
if (!this.createTarget$S$java_io_File(imagePaths[k], Clazz.new_($I$(5,1).c$$S,[tempPath]))) return;
}
} else if (!this.createTarget$S$java_io_File(originalPath, Clazz.new_($I$(5,1).c$$S,[tempPath]))) return;
}}}exports.add$O(Clazz.new_($I$(66,1).c$$java_util_ArrayList$S$S$S$S$org_opensourcephysics_cabrillo_tracker_ExportVideoDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this, null, zipList, tabTitle, originalPath, trkPath, videoPath, exporter, panel]));
}
this.exportIterator=exports.iterator$();
}, p$1);

Clazz.newMeth(C$, 'createTarget$S$java_io_File',  function (path, target) {
if (p$1.copyOrExtractFile$S$java_io_File.apply(this, [path, target])) return true;
$I$(67,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(46).getString$S("ZipResourceDialog.Dialog.ExportFailed.Message"), $I$(46).getString$S("ZipResourceDialog.Dialog.ExportFailed.Title"), 0]);
return false;
});

Clazz.newMeth(C$, 'addFiles$java_util_ArrayList',  function (zipList) {
for (var file, $file = this.addedFiles.iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
var path=file.getAbsolutePath$();
var isHTML=$I$(4).getExtension$S(path).startsWith$S("htm");
if (isHTML) {
p$1.copyAndAddHTMLPage$S$java_util_ArrayList.apply(this, [path, zipList]);
} else {
var dir=p$1.getTempDirectory.apply(this, []);
var targetFile=Clazz.new_([dir, $I$(4).getName$S(path)],$I$(5,1).c$$S$S);
if (p$1.copyOrExtractFile$S$java_io_File.apply(this, [path, targetFile])) {
zipList.add$O(targetFile);
}}}
}, p$1);

Clazz.newMeth(C$, 'saveZipAs$',  function () {
var description=this.descriptionPane.getText$().trim$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (!"".equals$O(description) && "".equals$O(trackerPanel.getDescription$()) ) {
trackerPanel.setDescription$S(description);
trackerPanel.hideDescriptionWhenLoaded=true;
}if (this.clipCheckbox.isSelected$()) {
this.badModels=p$1.getModelsNotInClips.apply(this, []);
if (!this.badModels.isEmpty$()) {
var names="";
for (var next, $next = this.badModels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!"".equals$O(names)) {
names+=", ";
}names+="'" + next.getName$() + "'" ;
}
var response=$I$(67,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.frame, $I$(46).getString$S("ZipResourceDialog.BadModels.Message1") + "\n" + $I$(46).getString$S("ZipResourceDialog.BadModels.Message2") + "\n" + $I$(46).getString$S("ZipResourceDialog.BadModels.Message3") + "\n\n" + names + "\n\n" + $I$(46).getString$S("ZipResourceDialog.BadModels.Question") , $I$(46).getString$S("ZipResourceDialog.BadModels.Title"), 0, 2]);
if (response != 0) {
return;
}}} else {
var badImageVideoTabs=p$1.getTabsWithUnexportableImages.apply(this, []);
if (badImageVideoTabs.length > 0) {
var names="";
for (var next, $next = 0, $$next = badImageVideoTabs; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (!"".equals$O(names)) {
names+=", ";
}names+="'" + this.frame.getTabTitle$I((next).$c()) + "'" ;
}
var response=$I$(67,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.frame, $I$(46).getString$S("ExportZipDialog.BadImageVideos.Message1") + "\n" + $I$(46).getString$S("ExportZipDialog.BadImageVideos.Message2") + "\n" + $I$(46).getString$S("ExportZipDialog.BadImageVideos.Message3") + "\n\n" + names + "\n\n" + $I$(46).getString$S("ExportZipDialog.BadImageVideos.Question") , $I$(46).getString$S("ExportZipDialog.BadImageVideos.Title"), 0, 2]);
if (response != 0) {
return;
}}}this.setVisible$Z(false);
var zipList=this.defineTarget$();
if (zipList == null ) return;
Clazz.new_([((P$.ExportZipDialog$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.saveZipAction$java_util_ArrayList.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [this.$finals$.zipList]);
});
})()
), Clazz.new_(P$.ExportZipDialog$35.$init$,[this, {zipList:zipList}]))],$I$(30,1).c$$Runnable).start$();
});

Clazz.newMeth(C$, 'saveZip$java_util_ArrayList',  function (zipList) {
var target=Clazz.new_([p$1.getZIPTarget.apply(this, [])],$I$(5,1).c$$S);
if ($I$(68).compress$java_util_ArrayList$java_io_File(zipList, target)) {
$I$(59,"removeFromZipCache$S",[target.getPath$()]);
p$1.openNewZip$S.apply(this, [target.getAbsolutePath$()]);
if (!$I$(1).isJS) {
$I$(1,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.ExportZipDialog$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExportZipDialog$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(59,"deleteFile$java_io_File",[Clazz.new_([p$1.getTempDirectory.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [])],$I$(5,1).c$$S)]);
});
})()
), Clazz.new_(P$.ExportZipDialog$lambda1.$init$,[this, null]))]);
}}}, p$1);

Clazz.newMeth(C$, 'writeHTMLInfo$S$S',  function (thumbPath, redirectPath) {
var htmlTarget=Clazz.new_([p$1.getHTMLDirectory.apply(this, [])],$I$(5,1).c$$S);
htmlTarget.mkdirs$();
htmlTarget=Clazz.new_($I$(5,1).c$$java_io_File$S,[htmlTarget, this.targetName + "_info.html"]);
thumbPath=$I$(4,"getPathRelativeTo$S$S",[thumbPath, p$1.getHTMLDirectory.apply(this, [])]);
var title=this.titleField.getText$().trim$();
var description=this.descriptionPane.getText$().trim$();
var author=this.authorField.getText$().trim$();
var contact=this.contactField.getText$().trim$();
var keywords=this.keywordsField.getText$().trim$();
var uri=this.urlField.getText$().trim$();
var metadata=Clazz.new_($I$(7,1));
if (!"".equals$O(author)) metadata.put$O$O("author", author);
if (!"".equals$O(contact)) metadata.put$O$O("contact", contact);
if (!"".equals$O(keywords)) metadata.put$O$O("keywords", keywords);
if (!"".equals$O(description)) metadata.put$O$O("description", description);
if (!"".equals$O(uri)) metadata.put$O$O("URL", uri);
var htmlCode=$I$(69).getHTMLCode$S$S$S$S$S$S$S$org_opensourcephysics_tools_LibraryResource_Attachment$java_util_Map(title, "Tracker", thumbPath, description, author, contact, uri, null, metadata);
if (redirectPath != null ) {
var comment="\n<!--redirect: " + redirectPath + "-->" ;
var n=htmlCode.indexOf$S("<html>");
htmlCode=htmlCode.substring$I$I(0, n + 6) + comment + htmlCode.substring$I(n + 6) ;
}return p$1.writeFile$S$java_io_File.apply(this, [htmlCode, htmlTarget]);
}, p$1);

Clazz.newMeth(C$, 'writeFile$S$java_io_File',  function (text, target) {
try {
var fout=Clazz.new_($I$(70,1).c$$java_io_File,[target]);
fout.write$S(text);
fout.close$();
return target;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'saveZipAction$java_util_ArrayList',  function (zipList) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var dialog=$I$(57).getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(trackerPanel, false);
var ext=dialog.getFormat$();
var thumbPath=p$1.getTempDirectory.apply(this, []) + this.targetName + "_thumbnail." + ext ;
var thumbnail=dialog.saveThumbnail$S(thumbPath);
if (thumbnail != null ) {
zipList.add$O(thumbnail);
p$1.addHTMLInfo$S$java_util_ArrayList.apply(this, [thumbPath, zipList]);
}p$1.addVideosAndTRKs$java_util_ArrayList.apply(this, [zipList]);
this.nextExport$java_util_ArrayList(zipList);
}, p$1);

Clazz.newMeth(C$, 'copyOrExtractFile$S$java_io_File',  function (filePath, targetFile) {
var lowercase=filePath.toLowerCase$();
if ($I$(59).isHTTP$S(filePath)) {
targetFile=$I$(59).download$S$java_io_File$Z(filePath, targetFile, false);
} else if (lowercase.contains$CharSequence("trz!") || lowercase.contains$CharSequence("jar!") || lowercase.contains$CharSequence("zip!")  ) {
targetFile=$I$(59).extract$S$java_io_File(filePath, targetFile);
} else $I$(59,"copyFile$java_io_File$java_io_File$I",[Clazz.new_($I$(5,1).c$$S,[filePath]), targetFile, 100000]);
return targetFile.exists$();
}, p$1);

Clazz.newMeth(C$, 'addHTMLInfo$S$java_util_ArrayList',  function (thumbPath, zipList) {
var res=$I$(59,"getResource$S",[this.htmlField.getText$().trim$()]);
if (res == null  && !$I$(1).isJS ) {
var files=Clazz.new_($I$(5,1).c$$S,[this.targetDirectory]).listFiles$();
var added=false;
for (var next, $next = 0, $$next = files; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var name=$I$(4,"stripExtension$S",[next.getName$()]);
var ext=$I$(4,"getExtension$S",[next.getName$()]);
if ("html".equals$O(ext) || "htm".equals$O(ext) ) {
if (name.equals$O(this.targetName) || name.equals$O(this.targetName + "_info") ) {
for (var file, $file = this.addedFiles.iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
added=added || file.getName$().equals$O(next.getName$()) ;
}
if (!added) {
var response=$I$(67,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.frame, $I$(46).getString$S("ZipResourceDialog.AddHTMLInfo.Message1") + " \"" + next.getName$() + "\"\n" + $I$(46).getString$S("ZipResourceDialog.AddHTMLInfo.Message2") , $I$(46).getString$S("ZipResourceDialog.AddHTMLInfo.Title"), 0, 3]);
if (response == 0) {
res=$I$(59,"getResource$S",[next.getAbsolutePath$()]);
}}}}}
}var redirect=null;
if (res != null ) {
if (res.getFile$() != null ) {
var html=res.getString$();
if (html != null  && html.trim$().startsWith$S("<!DOCTYPE html") ) {
var htmlTarget=p$1.writeTempHTMLTarget$S$org_opensourcephysics_tools_Resource.apply(this, [html, res]);
if (htmlTarget != null ) {
var path=p$1.copyAndAddHTMLPage$S$java_util_ArrayList.apply(this, [htmlTarget.getAbsolutePath$(), zipList]);
if (!htmlTarget.equals$O(res.getFile$())) htmlTarget.delete$();
return path != null ;
}}} else {
redirect=res.getAbsolutePath$();
}}var empty="".equals$O(this.titleField.getText$().trim$());
if (empty) {
this.titleField.setText$S(this.targetName);
}var htmlTarget=p$1.writeHTMLInfo$S$S.apply(this, [thumbPath, redirect]);
if (empty) {
this.titleField.setText$S("");
this.titleField.setBackground$java_awt_Color($I$(23).white);
}if (htmlTarget == null ) return false;
if (!"".equals$O(C$.htmlSubdirectory)) {
htmlTarget=htmlTarget.getParentFile$();
}zipList.add$O(htmlTarget);
return true;
}, p$1);

Clazz.newMeth(C$, 'getModelsNotInClips',  function () {
var allModels=Clazz.new_($I$(9,1));
for (var i=0; i < this.tabCheckboxes.size$(); i++) {
var box=this.tabCheckboxes.get$I(i);
if (!box.isSelected$()) continue;
var panel=this.frame.getTrackerPanelForTab$I(i);
if (panel == null ) continue;
var clip=panel.getPlayer$().getVideoClip$();
var models=panel.getDrawablesTemp$Class(Clazz.getClass($I$(14)));
for (var it=models.iterator$(); it.hasNext$(); ) {
var model=it.next$();
if (clip.includesFrame$I(model.getStartFrame$())) {
it.remove$();
}}
models.clear$();
allModels.addAll$java_util_Collection(models);
}
return allModels;
}, p$1);

Clazz.newMeth(C$, 'getTabsWithUnexportableImages',  function () {
var tabs=Clazz.new_($I$(9,1));
for (var i=0; i < this.tabCheckboxes.size$(); i++) {
var box=this.tabCheckboxes.get$I(i);
if (!box.isSelected$()) continue;
var panel=this.frame.getTrackerPanelForTab$I(i);
if (panel == null ) continue;
var video=panel.getVideo$();
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")) {
var iv=video;
if (!iv.isFileBased$()) {
if (!iv.saveInvalidImages$()) {
tabs.add$O(Integer.valueOf$I(i));
continue;
}}var paths=iv.getValidPaths$();
if (paths.length > 1) {
var imagePath=paths[0];
for (var k=1; k < paths.length; k++) {
var next=$I$(71).getNextImagePathInSequence$S(imagePath);
if (!paths[k].equals$O(next)) {
tabs.add$O(Integer.valueOf$I(i));
break;
}imagePath=paths[k];
}
}}}
return tabs.toArray$OA(Clazz.array(Integer, [tabs.size$()]));
}, p$1);

Clazz.newMeth(C$, 'getHTMLPaths$org_opensourcephysics_controls_XMLControl',  function (control) {
var pageViews=Clazz.new_($I$(9,1));
var xml=control.toXML$();
var j=xml.indexOf$S("PageTView$TabView");
while (j > -1){
xml=xml.substring$I(j + 17);
var s="<property name=\"text\" type=\"string\">";
j=xml.indexOf$S(s);
if (j > -1) {
xml=xml.substring$I(j + s.length$());
j=xml.indexOf$S("</property>");
var text=xml.substring$I$I(0, j);
var res=$I$(59).getResource$S(text);
if (res != null  && res.getFile$() != null  ) {
pageViews.add$O(text);
}}j=xml.indexOf$S("PageTView$TabView");
}
return pageViews;
}, p$1);

Clazz.newMeth(C$, 'getImagePaths$S$S$S$S',  function (html, basePath, pre, post) {
var images=Clazz.new_($I$(9,1));
var j=html.indexOf$S(pre);
while (j > -1){
html=html.substring$I(j + pre.length$());
j=html.indexOf$S(post);
if (j > -1) {
var text=html.substring$I$I(0, j);
var path=$I$(4).getResolvedPath$S$S(text, basePath);
var res=$I$(59).getResource$S(path);
if (res != null  && res.getFile$() != null  ) {
images.add$O(text);
}}j=html.indexOf$S(pre);
}
return images;
}, p$1);

Clazz.newMeth(C$, 'copyAndAddHTMLPage$S$java_util_ArrayList',  function (htmlPath, zipList) {
var html=null;
var res=$I$(59).getResource$S(htmlPath);
if (res != null ) {
html=res.getString$();
}if (html != null ) {
var htmlBasePath=$I$(4).getDirectoryPath$S(htmlPath);
var htmlTarget=Clazz.new_([p$1.getHTMLDirectory.apply(this, [])],$I$(5,1).c$$S);
htmlTarget.mkdirs$();
var pre="<img src=\"";
var post="\"";
var imagePaths=p$1.getImagePaths$S$S$S$S.apply(this, [html, htmlBasePath, pre, post]);
if (!imagePaths.isEmpty$()) {
var imageDir=Clazz.new_([p$1.getImageDirectory.apply(this, [])],$I$(5,1).c$$S);
imageDir.mkdirs$();
for (var next, $next = imagePaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var path=$I$(4).getResolvedPath$S$S(next, htmlBasePath);
res=$I$(59).getResource$S(path);
var imageTarget=Clazz.new_([imageDir, $I$(4).getName$S(next)],$I$(5,1).c$$java_io_File$S);
if (res.getFile$() != null ) {
$I$(59,"copyFile$java_io_File$java_io_File",[res.getFile$(), imageTarget]);
}path=$I$(4,"getPathRelativeTo$S$S",[imageTarget.getAbsolutePath$(), p$1.getHTMLDirectory.apply(this, [])]);
html=p$1.substitutePathInText$S$S$S$S$S.apply(this, [html, next, path, pre, post]);
}
zipList.add$O(imageDir);
}var css=$I$(59).getStyleSheetFromHTMLCode$S(html);
if (css != null  && !$I$(59).isHTTP$S(css) ) {
res=$I$(59,"getResource$S",[$I$(4).getResolvedPath$S$S(css, htmlBasePath)]);
if (res != null ) {
var cssName=$I$(4).getName$S(css);
var cssTarget=Clazz.new_([htmlTarget, $I$(4).getName$S(cssName)],$I$(5,1).c$$java_io_File$S);
$I$(59,"copyFile$java_io_File$java_io_File",[res.getFile$(), cssTarget]);
html=p$1.substitutePathInText$S$S$S$S$S.apply(this, [html, css, cssName, "\"", "\""]);
}}htmlTarget=Clazz.new_([htmlTarget, $I$(4).getName$S(htmlPath)],$I$(5,1).c$$java_io_File$S);
try {
var fout=Clazz.new_($I$(70,1).c$$java_io_File,[htmlTarget]);
fout.write$S(html);
fout.close$();
var relPath=$I$(4,"getPathRelativeTo$S$S",[htmlTarget.getAbsolutePath$(), p$1.getTempDirectory.apply(this, [])]);
if (!"".equals$O(C$.htmlSubdirectory)) {
htmlTarget=htmlTarget.getParentFile$();
}zipList.add$O(htmlTarget);
return relPath;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
exc.printStackTrace$();
} else {
throw exc;
}
}
}return null;
}, p$1);

Clazz.newMeth(C$, 'substitutePathInText$S$S$S$S$S',  function (text, prevPath, newPath, pre, post) {
if (prevPath.equals$O(newPath)) return text;
var i=text.indexOf$S(pre + prevPath + post );
while (i > 0){
text=text.substring$I$I(0, i + pre.length$()) + newPath + text.substring$I(i + pre.length$() + prevPath.length$() ) ;
i=text.indexOf$S(pre + prevPath + post );
}
return text;
}, p$1);

Clazz.newMeth(C$, 'openNewZip$S',  function (path) {
if ($I$(1).isJS) return;
var runner1=((P$.ExportZipDialog$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var response=$I$(67,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame, $I$(46).getString$S("ZipResourceDialog.Complete.Message1") + " \"" + $I$(4).getName$S(this.$finals$.path) + "\".\n" + $I$(46).getString$S("ZipResourceDialog.Complete.Message2") , $I$(46).getString$S("ZipResourceDialog.Complete.Title"), 0, 3]);
if (response == 0) {
var runner=((P$.ExportZipDialog$36$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$36$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.doOpenExportedAndUpdateLibrary$S(this.$finals$.path);
});
})()
), Clazz.new_(P$.ExportZipDialog$36$1.$init$,[this, {path:this.$finals$.path}]));
$I$(72).invokeLater$Runnable(runner);
}});
})()
), Clazz.new_(P$.ExportZipDialog$36.$init$,[this, {path:path}]));
$I$(72).invokeLater$Runnable(runner1);
}, p$1);

Clazz.newMeth(C$, 'defineTarget$',  function () {
if (this.lastTRZ == null  || this.lastTRZ.getName$().trim$().length$() < 2 ) {
var title=this.titleField.getText$().trim$();
if (!"".equals$O(title)) {
this.lastTRZ=Clazz.new_($I$(5,1).c$$S,[title]);
} else {
var tabtitle=this.frame.getTabTitle$I(this.frame.getSelectedTab$());
if (!"".equals$O(tabtitle)) {
this.lastTRZ=Clazz.new_($I$(5,1).c$$S,[tabtitle]);
} else this.lastTRZ=Clazz.new_($I$(5,1).c$$S,[""]);
}}var chooser=$I$(21).getChooser$();
chooser.setDialogTitle$S($I$(46).getString$S("ZipResourceDialog.FileChooser.SaveZip.Title"));
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(21).trzFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(21).trzFileFilter);
chooser.setAccessory$javax_swing_JComponent(null);
chooser.setMultiSelectionEnabled$Z(false);
chooser.setSelectedFile$java_io_File(this.lastTRZ);
var result=chooser.showSaveDialog$java_awt_Component(null);
if (result != 0) {
chooser.setSelectedFile$java_io_File(this.lastTRZ=Clazz.new_($I$(5,1).c$$S,[""]));
chooser.resetChoosableFileFilters$();
return null;
}var chooserFile=this.lastTRZ=chooser.getSelectedFile$();
this.isOpenInTracker=false;
if (!$I$(1).isJS && chooserFile.exists$() ) {
for (var i=0; i < this.frame.getTabCount$(); i++) {
var path=this.frame.getTrackerPanelForTab$I(i).openedFromPath;
if (path != null  && path.equals$O($I$(4,"forwardSlash$S",[chooserFile.getPath$()])) ) {
this.isOpenInTracker=true;
}}
}if (!$I$(21).canWrite$java_io_File(chooserFile)) {
return null;
}chooser.resetChoosableFileFilters$();
this.targetName=$I$(4,"stripExtension$S",[chooserFile.getName$()]);
var reserved=Clazz.array(String, -1, ["/", "\\", "?", "<", ">", "\"", "|", ":", "*", "%"]);
for (var next, $next = 0, $$next = reserved; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (this.targetName.indexOf$S(next) > -1) {
var list="";
for (var i=1; i < reserved.length; i++) {
list+="    " + reserved[i];
}
$I$(67,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(46).getString$S("ZipResourceDialog.Dialog.BadFileName.Message") + "\n" + list , $I$(46).getString$S("ZipResourceDialog.Dialog.BadFileName.Title"), 2]);
return null;
}}
this.targetDirectory=chooserFile.getParent$() + "/";
this.targetExtension="trz";
var ext=$I$(4,"getExtension$S",[chooserFile.getName$()]);
if (!this.targetExtension.equals$O(ext)) {
var file=Clazz.new_([$I$(4,"stripExtension$S",[chooserFile.getAbsolutePath$()]) + "." + this.targetExtension ],$I$(5,1).c$$S);
if (!$I$(21).canWrite$java_io_File(file)) return null;
}this.targetVideo=null;
return ((P$.ExportZipDialog$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.ArrayList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['add$java_io_File','add$O'],  function (f) {
if (!this.contains$O(f)) C$.superclazz.prototype.add$O.apply(this, [f]);
return true;
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.ExportZipDialog$37));
});

Clazz.newMeth(C$, 'getTRKTarget$S$java_util_ArrayList',  function (tabTitle, existingTabTitles) {
var path=null;
var tempDir=p$1.getTempDirectory.apply(this, []);
if (tabTitle == null  || "".equals$O(tabTitle.trim$()) ) {
path=tempDir + this.targetName;
} else {
path=tempDir + this.targetName + "_" + tabTitle ;
}var append=0;
var len=path.length$();
while (existingTabTitles.contains$O(path)){
++append;
path=path.substring$I$I(0, len) + append;
}
existingTabTitles.add$O(path);
return path + ".trk";
}, p$1);

Clazz.newMeth(C$, 'getVideoTarget$S$S',  function (trkName, extension) {
var vidDir=p$1.getTempDirectory.apply(this, []) + C$.videoSubdirectory;
Clazz.new_($I$(5,1).c$$S,[vidDir]).mkdirs$();
var videoName=$I$(4).stripExtension$S(trkName) + "." + extension ;
return vidDir + $I$(5).separator + videoName ;
}, p$1);

Clazz.newMeth(C$, 'getZIPTarget',  function () {
return this.targetDirectory + this.targetName + "." + this.targetExtension ;
}, p$1);

Clazz.newMeth(C$, 'getHTMLDirectory',  function () {
return p$1.getTempDirectory.apply(this, []) + C$.htmlSubdirectory + "/" ;
}, p$1);

Clazz.newMeth(C$, 'getImageDirectory',  function () {
return p$1.getTempDirectory.apply(this, []) + C$.imageSubdirectory + "/" ;
}, p$1);

Clazz.newMeth(C$, 'getTempDirectory',  function () {
if (this.tempDir == null ) this.tempDir=Clazz.new_([System.getProperty$S("java.io.tmpdir"), "tracker" + Clazz.new_($I$(73,1)).nextInt$()],$I$(5,1).c$$S$S).toString() + $I$(5).separator;
return this.tempDir;
}, p$1);

Clazz.newMeth(C$, 'writeTempHTMLTarget$S$org_opensourcephysics_tools_Resource',  function (htmlCode, res) {
if (htmlCode == null  || res.getFile$() == null  ) return null;
var title=$I$(59).getTitleFromHTMLCode$S(htmlCode);
var newTitle=this.titleField.getText$().trim$();
if (!"".equals$O(newTitle) && !newTitle.equals$O(title) ) {
title="<title>" + title + "</title>" ;
newTitle="<title>" + newTitle + "</title>" ;
htmlCode=htmlCode.replace$CharSequence$CharSequence(title, newTitle);
}var metadata=$I$(64).getMetadataFromHTML$S(htmlCode);
for (var type, $type = 0, $$type = $I$(69).META_TYPES; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
var newValue=type.equals$O("Author") ? this.authorField.getText$().trim$() : type.equals$O("Contact") ? this.contactField.getText$().trim$() : type.equals$O("Keywords") ? this.keywordsField.getText$().trim$() : null;
var prevValue=null;
var key=null;
var found=false;
for (var next, $next = metadata.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (found) break;
key=next[0];
if (type.toLowerCase$().contains$CharSequence(key.toLowerCase$())) {
found=true;
prevValue=next[1];
}}
if (!found) key=type.toLowerCase$();
htmlCode=p$1.replaceMetadataInHTML$S$S$S$S.apply(this, [htmlCode, key, prevValue, newValue]);
}
var htmlTarget=res.getFile$().getParentFile$();
htmlTarget=Clazz.new_($I$(5,1).c$$java_io_File$S,[htmlTarget, this.targetName + "_info.html"]);
htmlTarget=p$1.writeFile$S$java_io_File.apply(this, [htmlCode, htmlTarget]);
return htmlTarget;
}, p$1);

Clazz.newMeth(C$, 'replaceMetadataInHTML$S$S$S$S',  function (htmlCode, name, prevValue, newValue) {
if (newValue == null  || newValue.trim$().equals$O("") ) return htmlCode;
if (prevValue == null ) {
var n=htmlCode.indexOf$S("<meta name=");
if (n < 0) n=htmlCode.indexOf$S("</head");
if (n > -1) {
var newCode="<meta name=\"" + name + "\" content=\"" + newValue + "\">\n" ;
htmlCode=htmlCode.substring$I$I(0, n) + newCode + htmlCode.substring$I$I(n, htmlCode.length$()) ;
}} else if (!"".equals$O(newValue) && !newValue.equals$O(prevValue) ) {
prevValue="meta name=\"" + name + "\" content=\"" + prevValue + "\"" ;
newValue="meta name=\"" + name + "\" content=\"" + newValue + "\"" ;
htmlCode=htmlCode.replace$CharSequence$CharSequence(prevValue, newValue);
}return htmlCode;
}, p$1);

Clazz.newMeth(C$, 'thumbnailDialogClosed$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var d=C$.getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (d.isVisible) {
d.refreshThumbnailGUI$();
}}, 1);

C$.$static$=function(){C$.$static$=0;
{
$I$(28).haveExportDialog=true;
};
C$.zipDialogs=Clazz.new_($I$(29,1));
C$.videoSubdirectory="videos";
C$.htmlSubdirectory="html";
C$.imageSubdirectory="images";
C$.labelColor=Clazz.new_($I$(23,1).c$$I$I$I,[0, 0, 102]);
C$.preferredExtension="jpg";
C$.trimToClip=false;
C$.maxLineLength=30;
C$.minWidth=350;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportZipDialog, "Export", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tabID'],'S',['name','originalVideoPath','videoTarget','trkPath','vidDir'],'O',['zipList','java.util.ArrayList','exporter','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog','listener','java.beans.PropertyChangeListener']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList$S$S$S$S$org_opensourcephysics_cabrillo_tracker_ExportVideoDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (zipList, name, originalPath, trkPath, videoTarget, exporter, panel) {
;C$.$init$.apply(this);
this.name=name;
this.zipList=zipList;
this.originalVideoPath=originalPath;
this.videoTarget=videoTarget;
this.trkPath=trkPath;
this.exporter=exporter;
this.tabID=(panel.getID$()).$c();
}, 1);

Clazz.newMeth(C$, 'export$',  function () {
$I$(1,"showStatus$S",["Exporting  " + (this.name == null  ? "tab" : this.name)]);
this.vidDir=p$1.getTempDirectory.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []) + $I$(2).videoSubdirectory;
if (this.exporter != null ) {
var vidType=$I$(3).videoFormats.get$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].formatDropdown.getSelectedItem$());
var zipType=Clazz.instanceOf(vidType, "org.opensourcephysics.media.core.VideoIO.ZipImageVideoType") ? vidType : null;
if (zipType != null ) {
vidType=zipType.getImageVideoType$();
}var extension=vidType.getDefaultExtension$();
this.videoTarget=p$1.getVideoTarget$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [$I$(4).getName$S(this.trkPath), extension]);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(Integer.valueOf$I(this.tabID));
this.exporter.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
this.exporter.setFormat$S(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].formatDropdown.getSelectedItem$());
this.listener=((P$.ExportZipDialog$Export$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$Export$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].videoTarget=null;
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].exporter.removePropertyChangeListener$S$java_beans_PropertyChangeListener("video_saved", this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].listener);
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].exporter.removePropertyChangeListener$S$java_beans_PropertyChangeListener("video_cancelled", this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].listener);
if (e.getPropertyName$().equals$O("video_saved")) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].videoTarget=e.getNewValue$().toString();
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'].finalizeExport$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog.Export'], []);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].exportCanceled$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
}});
})()
), Clazz.new_(P$.ExportZipDialog$Export$1.$init$,[this, null]));
this.exporter.addPropertyChangeListener$S$java_beans_PropertyChangeListener("video_saved", this.listener);
this.exporter.addPropertyChangeListener$S$java_beans_PropertyChangeListener("video_cancelled", this.listener);
this.exporter.exportFullSizeVideo$S$S(this.videoTarget, this.trkPath);
return;
}var panel=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(Integer.valueOf$I(this.tabID));
var vid=panel.getVideo$();
if (Clazz.instanceOf(vid, "org.opensourcephysics.media.core.ImageVideo")) {
var imageVid=vid;
var paths=imageVid.getValidPaths$();
var n=this.originalVideoPath.indexOf$S($I$(4).getName$S(paths[0]));
if (n > 0) {
var base=this.originalVideoPath.substring$I$I(0, n);
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
var name=$I$(4).getName$S(path);
path=base + name;
var vidPath=this.vidDir + $I$(5).separator + name ;
var target=Clazz.new_($I$(5,1).c$$S,[vidPath]);
if (path.equals$O(this.originalVideoPath)) {
this.videoTarget=$I$(2).videoSubdirectory + $I$(5).separator + name ;
} else if (!this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].createTarget$S$java_io_File.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [path, target])) {
return;
}this.zipList.add$O(target);
}
}}this.finalizeExport$();
});

Clazz.newMeth(C$, 'finalizeExport$',  function () {
if (this.videoTarget != null ) {
var vidFile=Clazz.new_($I$(5,1).c$$S,[this.videoTarget]);
if (vidFile.exists$()) this.zipList.add$O(vidFile);
if (!"".equals$O($I$(2).videoSubdirectory)) {
var xmlFile=null;
for (var next, $next = 0, $$next = Clazz.new_($I$(5,1).c$$S,[this.vidDir]).listFiles$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next.getName$().endsWith$S(".xml") && next.getName$().startsWith$S(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].targetName) ) {
xmlFile=next;
}if (!next.equals$O(vidFile) && !next.equals$O(xmlFile) ) this.zipList.add$O(next);
}
if (xmlFile != null ) {
xmlFile.delete$();
}}}var panel=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(Integer.valueOf$I(this.tabID));
var control=Clazz.new_($I$(6,1).c$$O,[panel]);
if (this.exporter != null ) {
p$2.modifyControlForClip$org_opensourcephysics_controls_XMLControl.apply(this, [control]);
} else if (panel.getVideo$() != null ) {
var videoControl=control.getChildControl$S("videoclip").getChildControl$S("video");
if (videoControl != null ) {
var vidPath=$I$(4).forwardSlash$S(this.videoTarget);
videoControl.setValue$S$O("path", vidPath);
videoControl.setValue$S$O("paths", null);
}}var htmlPaths=p$1.getHTMLPaths$org_opensourcephysics_controls_XMLControl.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [control]);
if (!htmlPaths.isEmpty$()) {
var xml=control.toXML$();
for (var nextHTMLPath, $nextHTMLPath = htmlPaths.iterator$(); $nextHTMLPath.hasNext$()&&((nextHTMLPath=($nextHTMLPath.next$())),1);) {
var path=p$1.copyAndAddHTMLPage$S$java_util_ArrayList.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [nextHTMLPath, this.zipList]);
if (path != null ) {
xml=p$1.substitutePathInText$S$S$S$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [xml, nextHTMLPath, path, ">", "<"]);
}}
control=Clazz.new_($I$(6,1).c$$S,[xml]);
}this.zipList.add$O(Clazz.new_([control.write$S(this.trkPath)],$I$(5,1).c$$S));
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].nextExport$java_util_ArrayList.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], [this.zipList]);
});

Clazz.newMeth(C$, 'modifyControlForClip$org_opensourcephysics_controls_XMLControl',  function (control) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].frame.getTrackerPanelForID$Integer(Integer.valueOf$I(this.tabID));
var player=panel.getPlayer$();
var clipXMLControl=control.getChildControl$S("videoclip");
var realClip=player.getVideoClip$();
clipXMLControl.setValue$S$I("video_framecount", clipXMLControl.getInt$S("stepcount"));
clipXMLControl.setValue$S$I("startframe", 0);
clipXMLControl.setValue$S$I("stepsize", 1);
if (this.videoTarget != null ) {
var videoType=$I$(3).videoFormats.get$O(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].formatDropdown.getSelectedItem$());
var trkDir=p$1.getTempDirectory.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'], []);
var relPath=$I$(4).getPathRelativeTo$S$S(this.videoTarget, trkDir);
var videoControl=videoType.getVideoControlForExportOnly$S$S$org_opensourcephysics_controls_XMLControl(this.videoTarget, this.vidDir, clipXMLControl);
if (videoControl != null ) {
videoControl.setValue$S$O("path", relPath);
videoControl.setValue$S$O("filters", null);
if (Clazz.instanceOf(videoType, "org.opensourcephysics.media.core.ImageVideoType")) {
videoControl.setValue$S$O("paths", null);
videoControl.setValue$S$D("delta_t", player.getMeanStepDuration$());
}}}var clipControlControl=control.getChildControl$S("clipcontrol");
clipControlControl.setValue$S$D("delta_t", player.getMeanStepDuration$());
clipControlControl.setValue$S$I("frame", 0);
var coordsControl=control.getChildControl$S("coords");
var array=coordsControl.getObject$S("framedata");
var newFrameNumbers=Clazz.new_($I$(7,1));
var newFrameNum=$I$(2).setNewFrameNumbersCoord$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map(realClip, array, newFrameNumbers);
var newKeyFrames=Clazz.array($I$(8), [newFrameNum + 1]);
for (var k, $k = newFrameNumbers.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
newKeyFrames[(k).$c()]=array[(newFrameNumbers.get$O(k)).$c()];
}
coordsControl.setValue$S$O("framedata", newKeyFrames);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].badModels.isEmpty$()) {
var tracks=Clazz.getClass($I$(9)).cast$O(control.getObject$S("tracks"));
for (var it=tracks.iterator$(); it.hasNext$(); ) {
var track=it.next$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].badModels.contains$O(track)) {
it.remove$();
}}
control.setValue$S$O("tracks", tracks);
}for (var next, $next = control.getPropsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var prop=next;
if (prop.getPropertyName$().equals$O("tracks")) {
for (var obj, $obj = prop.getPropertyContent$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
var item=obj;
var trackControl=item.getPropertyContent$().get$I(0);
var trackType=trackControl.getObjectClass$();
if (Clazz.getClass($I$(10)).equals$O(trackType)) {
array=trackControl.getObject$S("framedata");
newFrameNum=$I$(2).setNewFrameNumbersPointVector$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map(realClip, array, newFrameNumbers);
var newData=Clazz.array($I$(11), [newFrameNum + 1]);
var keys=Clazz.array(Integer.TYPE, [newFrameNumbers.size$()]);
var index=0;
for (var k, $k = newFrameNumbers.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
keys[index]=(k).$c();
newData[(k).$c()]=array[(newFrameNumbers.get$O(k)).$c()];
++index;
}
trackControl.setValue$S$O("framedata", newData);
trackControl.setValue$S$O("keyFrames", keys);
} else if (Clazz.getClass($I$(12)).isAssignableFrom$Class(trackType)) {
array=trackControl.getObject$S("framedata");
newFrameNum=$I$(2).setNewFrameNumbersPointVector$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map(realClip, array, newFrameNumbers);
var newKeys=Clazz.array($I$(13), [newFrameNum + 1]);
for (var k, $k = newFrameNumbers.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
newKeys[(k).$c()]=array[(newFrameNumbers.get$O(k)).$c()];
newKeys[(k).$c()].independent=newKeys[(k).$c()].xc != 0  || newKeys[(k).$c()].yc != 0  ;
}
trackControl.setValue$S$O("framedata", newKeys);
} else if (Clazz.getClass($I$(14)).isAssignableFrom$Class(trackType)) {
$I$(2).updateRange$org_opensourcephysics_media_core_VideoClip$org_opensourcephysics_controls_XMLControl$S$S(realClip, trackControl, "start_frame", "end_frame");
} else if (Clazz.getClass($I$(15)).equals$O(trackType) || Clazz.getClass($I$(16)).equals$O(trackType) ) {
array=trackControl.getObject$S("world_coordinates");
newFrameNum=$I$(2).setNewFrameNumbersCalibration$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map(realClip, array, newFrameNumbers);
var newKeys=Clazz.array(Double.TYPE, [newFrameNum + 1, null]);
for (var k, $k = newFrameNumbers.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
newKeys[(k).$c()]=array[(newFrameNumbers.get$O(k)).$c()];
}
trackControl.setValue$S$O("world_coordinates", newKeys);
} else if (Clazz.getClass($I$(17)).equals$O(trackType)) {
$I$(2).updateRange$org_opensourcephysics_media_core_VideoClip$org_opensourcephysics_controls_XMLControl$S$S(realClip, trackControl, "absolute_start", "absolute_end");
array=trackControl.getObject$S("framedata");
var newKeyFrameData=Clazz.new_($I$(9,1));
newFrameNumbers.clear$();
newFrameNum=0;
for (var i=0; i < array.length; i++) {
if (array[i] == null ) continue;
var stepData=array[i];
var keyFrameNum=(stepData[0]|0);
newFrameNum=realClip.frameToStep$I(keyFrameNum);
if (newFrameNum > realClip.getLastFrameNumber$() || newFrameNum < realClip.getFirstFrameNumber$() ) continue;
stepData[0]=newFrameNum;
newKeyFrameData.add$O(stepData);
}
var newKeyData=newKeyFrameData.toArray$OA(Clazz.array(Double.TYPE, [newKeyFrameData.size$(), null]));
trackControl.setValue$S$O("framedata", newKeyData);
} else if (Clazz.getClass($I$(18)).equals$O(trackType)) {
array=trackControl.getObject$S("framedata");
if (array.length > 0) {
newFrameNum=$I$(2).setNewFrameNumbersTape$org_opensourcephysics_media_core_VideoClip$OA$java_util_Map(realClip, array, newFrameNumbers);
var newKeys=Clazz.array($I$(19), [newFrameNum + 1]);
for (var k, $k = newFrameNumbers.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
newKeys[(k).$c()]=array[(newFrameNumbers.get$O(k)).$c()];
}
trackControl.setValue$S$O("framedata", newKeys);
}} else if (Clazz.getClass($I$(20)).equals$O(trackType)) {
array=trackControl.getObject$S("framedata");
newFrameNumbers.clear$();
newFrameNum=0;
var nonNullIndex=0;
for (var i=0; i < array.length; i++) {
if (i > realClip.getEndFrameNumber$()) break;
if (array[i] != null ) {
nonNullIndex=i;
}if (!realClip.includesFrame$I(i)) continue;
newFrameNum=realClip.frameToStep$I(i);
if (nonNullIndex > -1) {
newFrameNumbers.put$O$O(Integer.valueOf$I(newFrameNum), Integer.valueOf$I(nonNullIndex));
nonNullIndex=-1;
} else {
newFrameNumbers.put$O$O(Integer.valueOf$I(newFrameNum), Integer.valueOf$I(i));
}}
var newKeys=Clazz.array(Double.TYPE, [newFrameNum + 1, null]);
for (var k, $k = newFrameNumbers.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
newKeys[(k).$c()]=array[(newFrameNumbers.get$O(k)).$c()];
}
trackControl.setValue$S$O("framedata", newKeys);
}}
}}
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportZipDialog, "VideoListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['target','java.util.ArrayList','dialog','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog']]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("video_saved") && this.target != null  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].targetVideo=e.getNewValue$().toString();
$I$(2).preferredExtension=$I$(4).getExtension$S(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].targetVideo);
$I$(21).setPreferredExportExtension$S(this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoIOPreferredExtension);
}if (this.dialog != null ) {
this.dialog.removePropertyChangeListener$S$java_beans_PropertyChangeListener("video_saved", this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoExportListener);
this.dialog.removePropertyChangeListener$S$java_beans_PropertyChangeListener("video_cancelled", this.b$['org.opensourcephysics.cabrillo.tracker.ExportZipDialog'].videoExportListener);
}});

Clazz.newMeth(C$, 'setTargetList$java_util_ArrayList',  function (list) {
this.target=list;
});

Clazz.newMeth(C$, 'setDialog$org_opensourcephysics_cabrillo_tracker_ExportVideoDialog',  function (evd) {
this.dialog=evd;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportZipDialog, "EntryField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['defaultForeground','java.awt.Color','documentListener','javax.swing.event.DocumentListener','$focusListener','java.awt.event.FocusListener','actionListener','java.awt.event.ActionListener']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.getDocument$().putProperty$O$O("parent", this);
this.addFocusListener$java_awt_event_FocusListener(C$.$focusListener);
this.addActionListener$java_awt_event_ActionListener(C$.actionListener);
this.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(C$.documentListener);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (width) {
;C$.superclazz.c$$I.apply(this,[width]);C$.$init$.apply(this);
this.getDocument$().putProperty$O$O("parent", this);
this.addFocusListener$java_awt_event_FocusListener(C$.$focusListener);
this.addActionListener$java_awt_event_ActionListener(C$.actionListener);
this.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(C$.documentListener);
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=Math.max(dim.width, 25);
dim.width=Math.min(dim.width, 100);
dim.width+=4;
return dim;
});

Clazz.newMeth(C$, 'getDefaultText$',  function () {
return null;
});

Clazz.newMeth(C$, 'getEmptyForeground$',  function () {
return $I$(23).gray;
});

C$.$static$=function(){C$.$static$=0;
C$.defaultForeground=Clazz.new_($I$(22,1)).getForeground$();
C$.documentListener=((P$.ExportZipDialog$EntryField$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$EntryField$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.ExportZipDialog','.DocumentAdapter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'documentChanged$javax_swing_event_DocumentEvent',  function (e) {
var field=e.getDocument$().getProperty$O("parent");
field.setBackground$java_awt_Color($I$(23).yellow);
field.setForeground$java_awt_Color($I$(24).defaultForeground);
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.ExportZipDialog$EntryField$1));
C$.$focusListener=((P$.ExportZipDialog$EntryField$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$EntryField$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
if (field.getDefaultText$() != null  && field.getText$().equals$O(field.getDefaultText$()) ) {
field.setText$S(null);
field.setForeground$java_awt_Color($I$(24).defaultForeground);
}field.setBackground$java_awt_Color($I$(23).white);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
var fire=field.getBackground$() === $I$(23).yellow ;
if (field.getDefaultText$() != null  && "".equals$O(field.getText$()) ) {
field.setText$S(field.getDefaultText$());
field.setForeground$java_awt_Color(field.getEmptyForeground$());
} else {
field.setForeground$java_awt_Color($I$(24).defaultForeground);
}field.setBackground$java_awt_Color($I$(23).white);
if (fire) field.fireActionPerformed$();
});
})()
), Clazz.new_($I$(26,1),[this, null],P$.ExportZipDialog$EntryField$2));
C$.actionListener=((P$.ExportZipDialog$EntryField$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportZipDialog$EntryField$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var field=e.getSource$();
field.setBackground$java_awt_Color($I$(23).white);
field.setForeground$java_awt_Color($I$(24).defaultForeground);
});
})()
), Clazz.new_(P$.ExportZipDialog$EntryField$3.$init$,[this, null]));
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportZipDialog, "DocumentAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.event.DocumentListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.documentChanged$javax_swing_event_DocumentEvent(e);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.documentChanged$javax_swing_event_DocumentEvent(e);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.documentChanged$javax_swing_event_DocumentEvent(e);
});

Clazz.newMeth(C$, 'documentChanged$javax_swing_event_DocumentEvent',  function (e) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExportZipDialog, "FormatRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(3, 4, 3, 0));
}, 1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, val, index, selected, hasFocus) {
if (selected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}if (val != null  && Clazz.instanceOf(val, "java.lang.String") ) {
var s=val;
var i=s.indexOf$S("(");
if (i > -1) {
s=s.substring$I$I(0, i - 1);
}this.setText$S(s);
}return this;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
