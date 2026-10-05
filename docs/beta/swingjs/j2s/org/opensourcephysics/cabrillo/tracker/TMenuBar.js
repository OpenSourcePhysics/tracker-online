(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'javax.swing.SwingUtilities','org.opensourcephysics.cabrillo.tracker.Tracker','java.awt.Toolkit','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JMenuItem','javax.swing.KeyStroke','javax.swing.AbstractAction','javax.swing.MenuSelectionManager','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog','org.opensourcephysics.cabrillo.tracker.ThumbnailDialog','org.opensourcephysics.cabrillo.tracker.ExportDataDialog',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.ComponentImage'],'org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.display.OSPRuntime','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.NumberFormatDialog','org.opensourcephysics.controls.XMLControlElement','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.media.core.ImageVideo','org.opensourcephysics.cabrillo.tracker.TToolBar','org.opensourcephysics.controls.OSPLog','java.awt.image.DataBuffer','javax.swing.JOptionPane','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.media.core.Filter','org.opensourcephysics.cabrillo.tracker.TrackControl','org.opensourcephysics.tools.DataTool','java.awt.datatransfer.DataFlavor','org.opensourcephysics.tools.FontSizer','java.awt.Color','org.opensourcephysics.cabrillo.tracker.FilteredPointMass','org.opensourcephysics.cabrillo.tracker.TapeMeasure','org.opensourcephysics.cabrillo.tracker.ParticleDataTrack','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.media.core.ImageCoordSystem','org.opensourcephysics.media.core.VideoClip','org.opensourcephysics.desktop.OSPDesktop','java.util.Locale','org.opensourcephysics.controls.XML','Thread','java.util.TreeMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TMenuBar", null, ['org.opensourcephysics.cabrillo.tracker.TFrame','.DeactivatingMenuBar'], [['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable'], 'java.beans.PropertyChangeListener', 'javax.swing.event.MenuListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.status=0;
this.allowRefresh=true;
this.fileMenuStructure=-1;
this.enabledNewTrackCount=0;
},1);

C$.$fields$=[['Z',['refreshing','allowRefresh'],'I',['status','fileMenuStructure','enabledNewTrackCount'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','actions','java.util.Map','fileMenu','javax.swing.JMenu','file_newTabItem','javax.swing.JMenuItem','+file_replaceTabItem','file_openMenu','javax.swing.JMenu','file_openItem','javax.swing.JMenuItem','+file_openBrowserItem','file_openRecentMenu','javax.swing.JMenu','file_reloadItem','javax.swing.JMenuItem','+file_closeItem','+file_closeAllItem','file_saveMenu','javax.swing.JMenu','file_saveItem','javax.swing.JMenuItem','+file_saveTabAsItem','+file_saveProjectAsItem','+file_saveVideoAsItem','+file_saveTabsetAsItem','file_importMenu','javax.swing.JMenu','file_import_videoItem','javax.swing.JMenuItem','+file_import_TRKItem','+file_import_dataItem','file_exportMenu','javax.swing.JMenu','file_export_zipItem','javax.swing.JMenuItem','+file_export_videoItem','+file_export_thumbnailItem','+file_export_dataItem','+file_propertiesItem','+file_printFrameItem','+file_exitItem','editMenu','javax.swing.JMenu','edit_undoItem','javax.swing.JMenuItem','+edit_redoItem','edit_copyDataMenu','javax.swing.JMenu','+edit_copyImageMenu','edit_copyMainViewImageItem','javax.swing.JMenuItem','+edit_copyFrameImageItem','edit_copyViewImageItems','javax.swing.JMenuItem[]','edit_copyObjectMenu','javax.swing.JMenu','edit_pasteItem','javax.swing.JMenuItem','edit_autopasteCheckbox','javax.swing.JCheckBoxMenuItem','edit_deleteTracksMenu','javax.swing.JMenu','edit_delTracks_deleteSelectedPointItem','javax.swing.JMenuItem','+edit_clearTracksItem','edit_numberMenu','javax.swing.JMenu','edit_formatsItem','javax.swing.JMenuItem','+edit_unitsItem','+edit_configItem','edit_matSizeMenu','javax.swing.JMenu','matSizeGroup','javax.swing.ButtonGroup','matSizeAction','javax.swing.Action','edit_fontSizeMenu','javax.swing.JMenu','edit_matsize_videoSizeItem','javax.swing.JRadioButtonMenuItem','+edit_matsize_matSizeItem','edit_languageMenu','javax.swing.JMenu','+videoMenu','video_videoVisibleItem','javax.swing.JCheckBoxMenuItem','video_goToItem','javax.swing.JMenuItem','video_filtersMenu','javax.swing.JMenu','+video_filter_newFilterMenu','video_pasteFilterItem','javax.swing.JMenuItem','+video_clearFiltersItem','+video_openVideoItem','+video_closeVideoItem','+video_clipSettingsItem','video_pasteImageMenu','javax.swing.JMenu','video_pasteImageItem','javax.swing.JMenuItem','+video_pasteReplaceItem','+video_pasteImageAfterItem','+video_pasteImageBeforeItem','video_importImageMenu','javax.swing.JMenu','addImageAfterItem','javax.swing.JMenuItem','+addImageBeforeItem','+video_removeImageItem','+video_editVideoItem','+video_playAllStepsItem','+video_playXuggleSmoothlyItem','+video_aboutVideoItem','+video_checkDurationsItem','+video_emptyVideoItem','trackMenu','javax.swing.JMenu','+track_createMenu','+track_cloneMenu','+popupTracksMenu','+popupVideoFiltersMenu','+track_measuringToolsMenu','videoFiltersMenuItems','java.awt.Component[]','+tracksMenuItems','track_newPointMassItem','javax.swing.JMenuItem','+track_newCMItem','+track_newVectorItem','+track_newVectorSumItem','+track_newLineProfileItem','+track_newRGBRegionItem','+track_newProtractorItem','+track_newTapeItem','+track_newCircleFitterItem','track_axesVisibleItem','javax.swing.JCheckBoxMenuItem','track_newAnalyticParticleItem','javax.swing.JMenuItem','track_newDynamicParticleMenu','javax.swing.JMenu','track_newDynamicParticleCartesianItem','javax.swing.JMenuItem','+track_newDynamicParticlePolarItem','+track_newDynamicSystemItem','track_newDataTrackMenu','javax.swing.JMenu','track_newDataTrackPasteItem','javax.swing.JMenuItem','+track_newDataTrackFromFileItem','+track_dataTrackHelpItem','+track_emptyTracksItem','coordsMenu','javax.swing.JMenu','coords_lockedCoordsItem','javax.swing.JCheckBoxMenuItem','+coords_fixedOriginItem','+coords_fixedAngleItem','+coords_fixedScaleItem','coords_refFrameMenu','javax.swing.JMenu','coords_refFrameGroup','javax.swing.ButtonGroup','coords_defaultRefFrameItem','javax.swing.JRadioButtonMenuItem','coords_showUnitDialogItem','javax.swing.JMenuItem','+coords_emptyCoordsItem','viewMenu','javax.swing.JMenu','+view_singleViewMenu','view_mainItem','javax.swing.JMenuItem','+view_1Item','+view_2Item','+view_3Item','+view_4Item','+view_restoreItem','view_rightPaneItem','javax.swing.JCheckBoxMenuItem','+view_bottomPaneItem','view_trackControlItem','javax.swing.JMenuItem','+view_notesItem','+view_dataBuilderItem','+view_dataToolItem','view_TabsMenu','javax.swing.JMenu','tabItems','javax.swing.JMenuItem[]','view_mobileLayoutItem','javax.swing.JCheckBoxMenuItem','video_captureItem','javax.swing.JMenuItem','helpMenu','javax.swing.JMenu','panelID','Integer']]
,['Z',['testing'],'O',['panelProps','String[]','+baseMatSizes']]]

Clazz.newMeth(C$, 'isTainted$I',  function (id) {
return ((this.status & id) == id);
}, p$1);

Clazz.newMeth(C$, 'setMenuTainted$I$Z',  function (id, taint) {
if (taint) {
if (id == 127) this.status=127;
 else this.status|=id;
} else {
if (id == 127) this.status=0;
 else this.status&=~id;
}});

Clazz.newMeth(C$, 'setAllowRefresh$Z',  function (b) {
this.allowRefresh=b;
});

Clazz.newMeth(C$, 'panel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
});

Clazz.newMeth(C$, 'loadVideoMenu$javax_swing_JMenu',  function (vidMenu) {
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
Clazz.super_(C$, this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
System.out.println$S("creating TMenuBar for " + panel);
panel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.actions=panel.getActions$();
this.createGUI$();
this.setMenuTainted$I$Z(127, true);
}, 1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
switch ((e.getSource$()).getName$()) {
case "file":
this.refreshFileMenu$Z(true);
break;
case "edit":
this.refreshEditMenu$Z(true);
break;
case "edit_font":
this.rebuildEditFontSizeMenu$();
break;
case "edit_lang":
C$.setLangMenu$javax_swing_JMenu$org_opensourcephysics_cabrillo_tracker_TFrame(this.edit_languageMenu, this.frame);
break;
case "edit_size":
this.rebuildEditMatSizeMenu$();
break;
case "edit_copyData":
this.rebuildEditCopyMenu$S("data");
break;
case "edit_copyImage":
this.rebuildEditCopyMenu$S("image");
break;
case "edit_copyObject":
this.rebuildEditCopyMenu$S("object");
break;
case "video":
this.refreshVideoMenu$Z(true);
break;
case "coords":
this.refreshCoordsMenu$Z(true);
break;
case "tracks":
this.refreshTrackMenu$Z$javax_swing_JPopupMenu(true, this.trackMenu.getPopupMenu$());
break;
case "window":
this.refreshViewMenu$Z(true);
break;
case "help":
this.refreshHelpMenu$Z(true);
break;
}
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'getMenuItem$S',  function (name) {
switch (name) {
case "file_newTabItem":
return this.file_newTabItem;
case "file_openRecentMenu":
return this.file_openRecentMenu;
case "file_closeItem":
return this.file_closeItem;
case "file_saveTabAsItem":
return this.file_saveTabAsItem;
case "file_importMenu":
return this.file_importMenu;
case "file_exportMenu":
return this.file_exportMenu;
case "file_printFrameItem":
return this.file_printFrameItem;
case "file_propertiesItem":
return this.file_propertiesItem;
case "editMenu":
return this.editMenu;
case "coordsMenu":
return this.coordsMenu;
case "coords_lockedCoordsItem":
return this.coords_lockedCoordsItem;
case "coords_fixedOriginItem":
return this.coords_fixedOriginItem;
case "coords_fixedAngleItem":
return this.coords_fixedAngleItem;
case "coords_fixedScaleItem":
return this.coords_fixedScaleItem;
case "coords_refFrameMenu":
return this.coords_refFrameMenu;
case "coords_showUnitDialogItem":
return this.coords_showUnitDialogItem;
case "video_videoVisibleItem":
return this.video_videoVisibleItem;
case "video_goToItem":
return this.video_goToItem;
case "video_openVideoItem":
return this.video_openVideoItem;
case "video_closeVideoItem":
return this.video_closeVideoItem;
case "video_clipSettingsItem":
return this.video_clipSettingsItem;
case "video_filtersMenu":
return this.video_filtersMenu;
case "video_aboutVideoItem":
return this.video_aboutVideoItem;
case "video_captureItem":
return this.video_captureItem;
case "file_saveVideoAsItem":
return this.file_saveVideoAsItem;
case "view_singleViewMenu":
return this.view_singleViewMenu;
case "view_mainItem":
return this.view_mainItem;
case "view_1Item":
return this.view_1Item;
case "view_2Item":
return this.view_2Item;
case "view_3Item":
return this.view_3Item;
case "view_4Item":
return this.view_4Item;
case "view_restoreItem":
return this.view_restoreItem;
case "view_rightPaneItem":
return this.view_rightPaneItem;
case "view_bottomPaneItem":
return this.view_bottomPaneItem;
case "view_notesItem":
return this.view_notesItem;
case "view_dataBuilderItem":
return this.view_dataBuilderItem;
case "view_dataToolItem":
return this.view_dataToolItem;
case "view_TabsMenu":
return this.view_TabsMenu;
case "view_mobileLayoutItem":
return this.view_mobileLayoutItem;
case "helpMenu":
return this.helpMenu;
}
return null;
});

Clazz.newMeth(C$, 'refresh$S',  function (whereFrom) {
if (!this.allowRefresh || this.frame != null  && this.frame.hasPaintHold$()  ) {
return;
}$I$(1,"invokeLater$Runnable",[((P$.TMenuBar$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refreshAll$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [this.$finals$.whereFrom]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda1.$init$,[this, {whereFrom:whereFrom}]))]);
});

Clazz.newMeth(C$, 'refreshAll$S',  function (whereFrom) {
if ($I$(2).timeLogEnabled) $I$(2,"logTime$S",[this.getClass$().getSimpleName$() + this.hashCode$() + " refresh" ]);
if (!$I$(2).allowMenuRefresh) return;
this.refreshing=true;
try {
switch (whereFrom) {
case "TrackerPanel.setTrackName":
case "TFrame.openRecent":
case "PrefsDialog.clearRecent":
this.refreshing=false;
return;
case "TrackerIO.save":
case "TrackerIO.saveTabset":
case "TrackerIO.saveVideoOK":
case "property:?":
case "TActions.openVideo":
case "TrackerIO.aferOpenFrame":
case "TrackerIO.beforeSetVideo":
break;
case "PrefsDialog.applyPrefs":
case "Undo.refreshMenus":
case "TFrame.locale":
case "TFrame.refresh":
default:
this.setMenuTainted$I$Z(127, true);
}
} catch (t) {
System.out.println$O(t);
}
this.refreshing=false;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var keyMask=$I$(3).getDefaultToolkit$().getMenuShortcutKeyMask$();
p$1.createFileMenu$I.apply(this, [keyMask]);
p$1.createEditMenu$I.apply(this, [keyMask]);
p$1.createVideoMenu$I.apply(this, [keyMask]);
p$1.createTracksMenu$I.apply(this, [keyMask]);
p$1.createCoordsMenu$I.apply(this, [keyMask]);
p$1.createViewMenu$I.apply(this, [keyMask]);
this.helpMenu=C$.getTrackerHelpMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(this.panel$(), null);
this.helpMenu.setName$S("help");
this.add$javax_swing_JMenu(this.helpMenu);
});

Clazz.newMeth(C$, 'createFileMenu$I',  function (keyMask) {
this.fileMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.File")],$I$(4,1).c$$S);
this.fileMenu.setName$S("file");
this.fileMenu.addMenuListener$javax_swing_event_MenuListener(this);
if (C$.testing) {
this.file_replaceTabItem=Clazz.new_($I$(6,1).c$$S,["Replace Tab"]);
this.file_replaceTabItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.loadExperimentURL$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [null]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda2.$init$,[this, null])));
}this.file_newTabItem=Clazz.new_([$I$(5).getString$S("TActions.Action.NewTab")],$I$(6,1).c$$S);
this.file_newTabItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("newTab"));
this.file_newTabItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["N".$c(), keyMask]));
this.file_openMenu=Clazz.new_([$I$(5).getString$S("TrackerIO.Dialog.Open.Title")],$I$(4,1).c$$S);
this.file_openMenu.setIcon$javax_swing_Icon($I$(2).getResourceIcon$S$Z("open.gif", true));
this.file_openItem=Clazz.new_([this.actions.get$O("open")],$I$(6,1).c$$javax_swing_Action);
this.file_openItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["O".$c(), keyMask]));
this.file_openItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.FileChooser") + "...");
this.file_openItem.setIcon$javax_swing_Icon(null);
this.file_openBrowserItem=Clazz.new_([this.actions.get$O("openBrowser")],$I$(6,1).c$$javax_swing_Action);
this.file_openBrowserItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.LibraryBrowser") + "...");
this.file_openBrowserItem.setIcon$javax_swing_Icon(null);
this.file_openRecentMenu=Clazz.new_($I$(4,1));
this.file_importMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Import")],$I$(4,1).c$$S);
this.file_import_videoItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Video")],$I$(6,1).c$$S);
this.file_import_videoItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("openVideo"));
this.file_import_videoItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["I".$c(), keyMask]));
this.file_import_TRKItem=Clazz.new_([this.actions.get$O("import")],$I$(6,1).c$$javax_swing_Action);
this.file_import_dataItem=Clazz.new_([this.actions.get$O("importData")],$I$(6,1).c$$javax_swing_Action);
this.file_importMenu.add$javax_swing_JMenuItem(this.file_import_videoItem);
this.file_importMenu.add$javax_swing_JMenuItem(this.file_import_TRKItem);
this.file_importMenu.add$javax_swing_JMenuItem(this.file_import_dataItem);
this.file_reloadItem=Clazz.new_([((P$.TMenuBar$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).reload$();
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TMenuBar$1))],$I$(6,1).c$$javax_swing_Action);
this.file_reloadItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["R".$c(), keyMask]));
this.file_closeItem=Clazz.new_([this.actions.get$O("close")],$I$(6,1).c$$javax_swing_Action);
this.file_closeAllItem=Clazz.new_([$I$(5).getString$S("TActions.Action.CloseAll")],$I$(6,1).c$$S);
this.file_closeAllItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("closeAll"));
this.file_exportMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Export")],$I$(4,1).c$$S);
this.file_export_zipItem=Clazz.new_([this.actions.get$O("saveZip")],$I$(6,1).c$$javax_swing_Action);
this.file_export_zipItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.ExportZIP") + "...");
this.file_export_videoItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.VideoClip") + "..."],$I$(6,1).c$$S);
this.file_export_videoItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []);
$I$(1,"invokeLater$Runnable",[((P$.TMenuBar$lambda3$4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda3$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(9).defaultManager$().clearSelectedPath$.apply($I$(9).defaultManager$(), []);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].file_exportMenu.getPopupMenu$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].file_exportMenu, []).setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].file_exportMenu.getPopupMenu$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].file_exportMenu, []), [false]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].fileMenu.getPopupMenu$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].fileMenu, []).setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].fileMenu.getPopupMenu$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].fileMenu, []), [false]);
var exporter=$I$(10).getVideoDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.trackerPanel);
exporter.setVisible$Z.apply(exporter, [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda3$4.$init$,[this, {trackerPanel:trackerPanel}]))]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda3.$init$,[this, null])));
this.file_exportMenu.add$javax_swing_JMenuItem(this.file_export_videoItem);
Clazz.new_([this.actions.get$O("export")],$I$(6,1).c$$javax_swing_Action);
this.file_export_thumbnailItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Thumbnail") + "..."],$I$(6,1).c$$S);
this.file_export_thumbnailItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(11,"getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), true]).setVisible$Z.apply($I$(11,"getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), true]), [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda4.$init$,[this, null])));
this.file_exportMenu.add$javax_swing_JMenuItem(this.file_export_thumbnailItem);
this.file_export_dataItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Data")],$I$(6,1).c$$S);
this.file_export_dataItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var exporter=$I$(12,"getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
exporter.setVisible$Z.apply(exporter, [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda5.$init$,[this, null])));
this.file_exportMenu.add$javax_swing_JMenuItem(this.file_export_dataItem);
this.file_saveMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Save")],$I$(4,1).c$$S);
this.file_saveItem=Clazz.new_([this.actions.get$O("save")],$I$(6,1).c$$javax_swing_Action);
this.file_saveItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["S".$c(), keyMask]));
var file=this.panel$().getDataFile$();
var path=file == null  ? "..." : " \"" + file.getName$() + "\"" ;
this.file_saveItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.Tab") + path);
this.file_saveMenu.setIcon$javax_swing_Icon(this.file_saveItem.getIcon$());
this.file_saveItem.setIcon$javax_swing_Icon(null);
this.file_saveTabAsItem=Clazz.new_([$I$(5).getString$S("TActions.Action.SaveAs")],$I$(6,1).c$$S);
this.file_saveTabAsItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("saveAs"));
this.file_saveProjectAsItem=Clazz.new_([this.actions.get$O("saveZip")],$I$(6,1).c$$javax_swing_Action);
this.file_saveProjectAsItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.Project") + "...");
this.file_saveProjectAsItem.setIcon$javax_swing_Icon(null);
this.file_saveVideoAsItem=Clazz.new_([this.actions.get$O("saveVideo")],$I$(6,1).c$$javax_swing_Action);
this.file_saveVideoAsItem.setText$S($I$(5).getString$S("TActions.Action.SaveVideoAs"));
this.file_saveTabsetAsItem=Clazz.new_([this.actions.get$O("saveTabsetAs")],$I$(6,1).c$$javax_swing_Action);
this.file_saveTabsetAsItem.setText$S($I$(5).getString$S("TActions.Action.SaveFrame"));
this.file_propertiesItem=Clazz.new_([this.actions.get$O("properties")],$I$(6,1).c$$javax_swing_Action);
this.file_propertiesItem.setText$S($I$(5).getString$S("TActions.Action.Properties"));
this.file_printFrameItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.PrintFrame")],$I$(6,1).c$$S);
this.file_printFrameItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["P".$c(), keyMask]));
this.file_printFrameItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getTFrame$();
Clazz.new_($I$(13,1).c$$java_awt_Component,[c]).print$();
});
})()
), Clazz.new_(P$.TMenuBar$2.$init$,[this, null])));
this.file_exitItem=Clazz.new_([this.actions.get$O("exit")],$I$(6,1).c$$javax_swing_Action);
this.file_exitItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["Q".$c(), keyMask]));
this.refreshFileMenu$Z(false);
this.add$javax_swing_JMenu(this.fileMenu);
}, p$1);

Clazz.newMeth(C$, 'createEditMenu$I',  function (keyMask) {
this.editMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Edit")],$I$(4,1).c$$S);
this.editMenu.setName$S("edit");
this.editMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.edit_undoItem=Clazz.new_($I$(6,1));
this.edit_undoItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["Z".$c(), keyMask]));
this.edit_undoItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).selectedSteps.clear$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).selectedSteps, []);
if ($I$(14,"canUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])])) $I$(14,"undo$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda6.$init$,[this, null])));
this.edit_redoItem=Clazz.new_($I$(6,1));
this.edit_redoItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["Y".$c(), keyMask]));
this.edit_redoItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if ($I$(14,"canRedo$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])])) $I$(14,"redo$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).selectedSteps.clear$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).selectedSteps, []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda7.$init$,[this, null])));
this.edit_pasteItem=this.editMenu.add$javax_swing_Action(this.actions.get$O("paste"));
if (!$I$(15).isJS) {
this.edit_pasteItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["V".$c(), keyMask]));
}this.editMenu.addSeparator$();
this.edit_autopasteCheckbox=Clazz.new_([$I$(5).getString$S("TMenuBar.Checkbox.Autopaste")],$I$(16,1).c$$S);
this.edit_autopasteCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.setAlwaysListenToClipboard$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].edit_autopasteCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].edit_autopasteCheckbox, [])]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda8.$init$,[this, null])));
this.edit_copyDataMenu=Clazz.new_($I$(4,1));
this.edit_copyDataMenu.setName$S("edit_copyData");
this.edit_copyDataMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.edit_copyImageMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.CopyImage")],$I$(4,1).c$$S);
this.edit_copyImageMenu.setName$S("edit_copyImage");
this.edit_copyImageMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.edit_copyObjectMenu=Clazz.new_($I$(4,1));
this.edit_copyObjectMenu.setName$S("edit_copyObject");
this.edit_copyObjectMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.edit_delTracks_deleteSelectedPointItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.DeleteSelectedPoint")],$I$(6,1).c$$S);
this.edit_delTracks_deleteSelectedPointItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).deletePoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getSelectedPoint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [])]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda9.$init$,[this, null])));
this.edit_deleteTracksMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.DeleteTrack")],$I$(4,1).c$$S);
this.editMenu.add$javax_swing_JMenuItem(this.edit_deleteTracksMenu);
this.editMenu.addSeparator$();
this.edit_clearTracksItem=this.edit_deleteTracksMenu.add$javax_swing_Action(this.actions.get$O("clearTracks"));
this.edit_configItem=this.editMenu.add$javax_swing_Action(this.actions.get$O("config"));
this.edit_configItem.setAccelerator$javax_swing_KeyStroke($I$(7).getKeyStroke$I$I(10, keyMask));
this.edit_numberMenu=Clazz.new_([$I$(5).getString$S("Popup.Menu.Numbers")],$I$(4,1).c$$S);
this.edit_formatsItem=Clazz.new_([$I$(5).getString$S("Popup.MenuItem.Formats") + "..."],$I$(6,1).c$$S);
this.edit_formatsItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(17,"getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getSelectedTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []), null]).setVisible$Z.apply($I$(17,"getNumberFormatDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack$SA",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getSelectedTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []), null]), [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda10.$init$,[this, null])));
this.edit_unitsItem=Clazz.new_([$I$(5).getString$S("Popup.MenuItem.Units") + "..."],$I$(6,1).c$$S);
this.edit_unitsItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getUnitsDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
dialog.setVisible$Z.apply(dialog, [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda11.$init$,[this, null])));
this.edit_matSizeMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.MatSize")],$I$(4,1).c$$S);
this.edit_matSizeMenu.setName$S("edit_size");
this.edit_matSizeMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.edit_fontSizeMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.FontSize")],$I$(4,1).c$$S);
this.edit_fontSizeMenu.setName$S("edit_font");
this.edit_fontSizeMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.edit_languageMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Language")],$I$(4,1).c$$S);
this.edit_languageMenu.setName$S("edit_lang");
this.edit_languageMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.editMenu.add$javax_swing_JMenuItem(this.edit_languageMenu);
this.add$javax_swing_JMenu(this.editMenu);
}, p$1);

Clazz.newMeth(C$, 'createCoordsMenu$I',  function (keyMask) {
this.coordsMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Coords")],$I$(4,1).c$$S);
this.coordsMenu.setName$S("coords");
this.coordsMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.coords_showUnitDialogItem=Clazz.new_([$I$(5).getString$S("Popup.MenuItem.Units") + "..."],$I$(6,1).c$$S);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_showUnitDialogItem);
this.coordsMenu.addSeparator$();
this.coords_showUnitDialogItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getUnitsDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
dialog.setVisible$Z.apply(dialog, [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda12.$init$,[this, null])));
this.coords_lockedCoordsItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CoordsLocked")],$I$(16,1).c$$S);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_lockedCoordsItem);
this.coords_lockedCoordsItem.addItemListener$java_awt_event_ItemListener(((P$.TMenuBar$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$O'],  function (e) /*block*/{
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
coords.setLocked$Z.apply(coords, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_lockedCoordsItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_lockedCoordsItem, [])]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda13.$init$,[this, null])));
this.coordsMenu.addSeparator$();
this.coords_fixedOriginItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CoordsFixedOrigin")],$I$(16,1).c$$S);
this.coords_fixedOriginItem.setSelected$Z(true);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_fixedOriginItem);
this.coords_fixedOriginItem.addItemListener$java_awt_event_ItemListener(((P$.TMenuBar$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$O'],  function (e) /*block*/{
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var currentState=Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [])],$I$(18,1).c$$O);
coords.setFixedOrigin$Z$I.apply(coords, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_fixedOriginItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_fixedOriginItem, []), n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refreshing) $I$(14,"postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), currentState]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda14.$init$,[this, null])));
this.coords_fixedAngleItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CoordsFixedAngle")],$I$(16,1).c$$S);
this.coords_fixedAngleItem.setSelected$Z(true);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_fixedAngleItem);
this.coords_fixedAngleItem.addItemListener$java_awt_event_ItemListener(((P$.TMenuBar$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$O'],  function (e) /*block*/{
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var currentState=Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [])],$I$(18,1).c$$O);
coords.setFixedAngle$Z$I.apply(coords, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_fixedAngleItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_fixedAngleItem, []), n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refreshing) $I$(14,"postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), currentState]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda15.$init$,[this, null])));
this.coords_fixedScaleItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CoordsFixedScale")],$I$(16,1).c$$S);
this.coords_fixedScaleItem.setSelected$Z(true);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_fixedScaleItem);
this.coords_fixedScaleItem.addItemListener$java_awt_event_ItemListener(((P$.TMenuBar$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$O'],  function (e) /*block*/{
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var currentState=Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [])],$I$(18,1).c$$O);
coords.setFixedScale$Z$I.apply(coords, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_fixedScaleItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].coords_fixedScaleItem, []), n]);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refreshing) $I$(14,"postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), currentState]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda16.$init$,[this, null])));
this.coordsMenu.addSeparator$();
this.coordsMenu.addSeparator$();
this.coords_refFrameMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CoordsRefFrame")],$I$(4,1).c$$S);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_refFrameMenu);
this.coords_refFrameGroup=Clazz.new_($I$(19,1));
this.coords_defaultRefFrameItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CoordsDefault"), true],$I$(20,1).c$$S$Z);
this.coords_defaultRefFrameItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("refFrame"));
this.coords_emptyCoordsItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Empty")],$I$(6,1).c$$S);
this.coords_emptyCoordsItem.setEnabled$Z(false);
this.add$javax_swing_JMenu(this.coordsMenu);
}, p$1);

Clazz.newMeth(C$, 'createVideoMenu$I',  function (keyMask) {
this.videoMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Video")],$I$(4,1).c$$S);
this.videoMenu.setName$S("video");
this.videoMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.video_pasteImageMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.PasteImage")],$I$(4,1).c$$S);
var pasteImageAction=((P$.TMenuBar$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var image=$I$(21).getClipboardImage$();
if (image != null ) {
var video=Clazz.new_($I$(22,1).c$$java_awt_Image,[image]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).setVideo$org_opensourcephysics_media_core_Video(video);
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().getVideoClip$().getStepCount$();
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().getVideoClip$().setStepCount$I(n);
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TMenuBar$3));
this.video_pasteImageItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.PasteImage")],$I$(6,1).c$$S);
this.video_pasteImageItem.addActionListener$java_awt_event_ActionListener(pasteImageAction);
this.video_editVideoItem=Clazz.new_([((P$.TMenuBar$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var video=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$();
if (video != null  && Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo") ) {
var edit=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_editVideoItem.isSelected$();
var iVideo=video;
if (!edit) {
try {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$();
iVideo.setEditable$Z(false);
iVideo.setFrameNumber$I(n);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], ["menuItem.editVideoFrames !edit"]);
$I$(23,"refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
$I$(3).getDefaultToolkit$().beep$();
$I$(24).finer$S("exception occurred: " + e1);
} else {
throw e1;
}
}
} else {
var image=iVideo.getImage$();
var buff=image.getRaster$().getDataBuffer$();
var bytes=(buff.getSize$() * $I$(25,"getDataTypeSize$I",[buff.getDataType$()])/8|0);
bytes=(Long.$div(Long.$mul(bytes,iVideo.getFrameCount$()),(1048576)));
var memory=$I$(15).getMemory$();
var availableMemory=Long.$sub(memory[1],memory[0]);
var response=0;
if (Long.$gt(bytes,availableMemory )) {
var mem=" (" + Long.$s(bytes) + "MB needed, " ;
var message=$I$(5).getString$S("TMenuBar.Dialog.RequiresMemory.Message1") + mem + Long.$s(availableMemory) + "MB available)" ;
message+="\n" + $I$(5).getString$S("TMenuBar.Dialog.RequiresMemory.Message2");
response=$I$(26,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, message, $I$(5).getString$S("TMenuBar.Dialog.RequiresMemory.Title"), 2, 1]);
}if (response == 0) {
var error=false;
try {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$();
iVideo.setEditable$Z(true);
iVideo.setFrameNumber$I(n);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], ["memory_issue"]);
$I$(23,"refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(3).getDefaultToolkit$().beep$();
error=true;
$I$(24).finer$S("exception occurred: " + ex);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
$I$(3).getDefaultToolkit$().beep$();
error=true;
$I$(24).finer$S("error occurred: " + er);
throw (er);
}
} else {
throw e$$;
}
} finally {
if (error) {
try {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$();
iVideo.setEditable$Z(false);
iVideo.setFrameNumber$I(n);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
}
} else {
throw e$$;
}
}
System.gc$();
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], ["memory error"]);
$I$(23,"refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
}}
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_editVideoItem.setSelected$Z(false);
}}}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TMenuBar.MenuItem.EditVideoFrames")],$I$(8,1).c$$S,P$.TMenuBar$4))],$I$(16,1).c$$javax_swing_Action);
this.video_pasteReplaceItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.PasteReplace")],$I$(6,1).c$$S);
this.video_pasteReplaceItem.addActionListener$java_awt_event_ActionListener(pasteImageAction);
this.video_pasteImageAfterItem=Clazz.new_([((P$.TMenuBar$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var image=$I$(21).getClipboardImage$();
if (image != null ) {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$();
var imageVid=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$();
imageVid.insert$java_awt_Image$I(image, n + 1);
var clip=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().getVideoClip$();
clip.setStepCount$I(imageVid.getFrameCount$());
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().setStepNumber$I(clip.frameToStep$I(n + 1));
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], ["menuItem.pageInsertAfter"]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].checkMatSize$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TMenuBar.MenuItem.PasteAfter")],$I$(8,1).c$$S,P$.TMenuBar$5))],$I$(6,1).c$$javax_swing_Action);
this.video_pasteImageBeforeItem=Clazz.new_([((P$.TMenuBar$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var image=$I$(21).getClipboardImage$();
if (image != null ) {
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$();
var imageVid=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$();
imageVid.insert$java_awt_Image$I(image, n);
var clip=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().getVideoClip$();
clip.setStepCount$I(imageVid.getFrameCount$());
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().setStepNumber$I(clip.frameToStep$I(n));
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], ["menuItem.pastImageBefore"]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].checkMatSize$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TMenuBar.MenuItem.PasteBefore")],$I$(8,1).c$$S,P$.TMenuBar$6))],$I$(6,1).c$$javax_swing_Action);
this.video_pasteImageMenu.add$javax_swing_JMenuItem(this.video_pasteReplaceItem);
this.video_openVideoItem=this.videoMenu.add$javax_swing_Action(this.actions.get$O("openVideo"));
this.video_openVideoItem.setIcon$javax_swing_Icon($I$(2).getResourceIcon$S$Z("open.gif", true));
this.video_closeVideoItem=this.videoMenu.add$javax_swing_Action(this.actions.get$O("closeVideo"));
this.video_clipSettingsItem=Clazz.new_([$I$(27).getString$S("ClipInspector.Title") + "..."],$I$(6,1).c$$S);
this.video_clipSettingsItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).setClipSettingsVisible$Boolean.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [Boolean.valueOf$Z(true)]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda17.$init$,[this, null])));
this.video_clipSettingsItem.setIcon$javax_swing_Icon($I$(23).clipOffIcon);
this.video_goToItem=Clazz.new_([$I$(27).getString$S("VideoPlayer.Readout.Menu.GoTo") + "..."],$I$(6,1).c$$S);
this.video_goToItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["G".$c(), keyMask]));
this.video_goToItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var player=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
player.showGoToDialog$.apply(player, []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda18.$init$,[this, null])));
this.video_importImageMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.AddImage")],$I$(4,1).c$$S);
this.addImageAfterItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.AddAfter")],$I$(6,1).c$$S);
this.addImageAfterItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(21,"insertImagesIntoVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []) + 1]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].checkMatSize$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda19.$init$,[this, null])));
this.addImageBeforeItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.AddBefore")],$I$(6,1).c$$S);
this.addImageBeforeItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(21,"insertImagesIntoVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].checkMatSize$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda20.$init$,[this, null])));
this.video_importImageMenu.add$javax_swing_JMenuItem(this.addImageBeforeItem);
this.video_importImageMenu.add$javax_swing_JMenuItem(this.addImageAfterItem);
this.video_removeImageItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.RemoveImage")],$I$(6,1).c$$S);
this.video_removeImageItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["R".$c(), keyMask]));
this.video_removeImageItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var imageVid=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var n=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getFrameNumber$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var path=imageVid.remove$I.apply(imageVid, [n]);
var len=imageVid.getFrameCount$.apply(imageVid, []);
var clip=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []).getVideoClip$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []), []);
clip.setStepCount$I.apply(clip, [len]);
var step=Math.min(n, len - 1);
step=clip.frameToStep$I.apply(clip, [step]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []).setStepNumber$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []), [step]);
if (path != null  && !path.equals$O.apply(path, [""]) ) $I$(14,"postImageVideoEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$SA$I$I$Z",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), Clazz.array(String, -1, [path]), n, step, false]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], ["menuItem.removeImage"]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda21.$init$,[this, null])));
this.video_playAllStepsItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.PlayAllSteps"), true],$I$(16,1).c$$S$Z);
var clip=this.panel$().getPlayer$().getVideoClip$();
this.video_playAllStepsItem.setSelected$Z(clip.isPlayAllSteps$());
this.video_playAllStepsItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var player=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var c=player.getVideoClip$.apply(player, []);
c.setPlayAllSteps$Z.apply(c, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_playAllStepsItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_playAllStepsItem, [])]);
player.setVideoClip$org_opensourcephysics_media_core_VideoClip.apply(player, [c]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda22.$init$,[this, null])));
this.video_videoVisibleItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.VideoVisible")],$I$(16,1).c$$S);
this.video_videoVisibleItem.setSelected$Z(true);
this.video_videoVisibleItem.addItemListener$java_awt_event_ItemListener(((P$.TMenuBar$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$O'],  function (e) /*block*/{
var video=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
if (e.getStateChange$.apply(e, []) != 1 && e.getStateChange$.apply(e, []) != 2  || video == null  ) return;
var visible=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_videoVisibleItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_videoVisibleItem, []);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).setVideoVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [visible]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda23.$init$,[this, null])));
this.video_playXuggleSmoothlyItem=Clazz.new_([$I$(5).getString$S("XuggleVideo.MenuItem.SmoothPlay")],$I$(16,1).c$$S);
this.video_playXuggleSmoothlyItem.addItemListener$java_awt_event_ItemListener(((P$.TMenuBar$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$O'],  function (e) /*block*/{
var video=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
if (Clazz.instanceOf(video, "org.opensourcephysics.media.mov.SmoothPlayable")) {
if (e.getStateChange$.apply(e, []) == 1 || e.getStateChange$.apply(e, []) == 2 ) {
(video).setSmoothPlay$Z.apply((video), [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_playXuggleSmoothlyItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_playXuggleSmoothlyItem, [])]);
}}});
})()
), Clazz.new_(P$.TMenuBar$lambda24.$init$,[this, null])));
this.video_checkDurationsItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CheckFrameDurations") + "..."],$I$(6,1).c$$S);
this.video_checkDurationsItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(21,"findBadVideoFrames$org_opensourcephysics_cabrillo_tracker_TrackerPanel$D$Z$Z$Z",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), $I$(21).defaultBadFrameTolerance, true, false, false]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda25.$init$,[this, null])));
this.video_aboutVideoItem=this.videoMenu.add$javax_swing_Action(this.actions.get$O("aboutVideo"));
this.video_filtersMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.VideoFilters")],$I$(4,1).c$$S);
this.popupVideoFiltersMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.VideoFilters")],$I$(4,1).c$$S);
this.video_filter_newFilterMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.NewVideoFilter")],$I$(4,1).c$$S);
this.video_filtersMenu.add$javax_swing_JMenuItem(this.video_filter_newFilterMenu);
this.video_filtersMenu.addSeparator$();
this.video_pasteFilterItem=Clazz.new_([$I$(5).getString$S("TActions.Action.Paste")],$I$(6,1).c$$S);
this.video_pasteFilterItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(15,"paste$java_util_function_Consumer",[((P$.TMenuBar$lambda26$27||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda26$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (s) /*block*/{
if (s != null  && this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []) != null  ) {
var control=Clazz.new_($I$(18,1).c$$S,[s]);
var type=control.getObjectClass$.apply(control, []);
if (control.failedToRead$.apply(control, []) || type == null   || !Clazz.getClass($I$(28)).isAssignableFrom$Class.apply(Clazz.getClass($I$(28)), [type]) ) return;
var filter=control.loadObject$O.apply(control, [null]);
if (filter == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []).getFilterStack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []), []).addFilter$org_opensourcephysics_media_core_Filter.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []).getFilterStack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []), []), [filter]);
filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel.apply(filter, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
}});
})()
), Clazz.new_(P$.TMenuBar$lambda26$27.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda26.$init$,[this, null])));
this.video_clearFiltersItem=this.video_filtersMenu.add$javax_swing_Action(this.actions.get$O("clearFilters"));
this.video_emptyVideoItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Empty")],$I$(6,1).c$$S);
this.video_emptyVideoItem.setEnabled$Z(false);
this.video_captureItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Capture") + "..."],$I$(6,1).c$$S);
this.video_captureItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("captureVideo"));
this.video_captureItem.setIcon$javax_swing_Icon($I$(23).cameraIcon);
this.add$javax_swing_JMenu(this.videoMenu);
}, p$1);

Clazz.newMeth(C$, 'createTracksMenu$I',  function (keyMask) {
this.trackMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Tracks")],$I$(4,1).c$$S);
this.popupTracksMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Tracks")],$I$(4,1).c$$S);
this.trackMenu.setName$S("tracks");
this.trackMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.trackMenu.addSeparator$();
this.track_axesVisibleItem=Clazz.new_([this.actions.get$O("axesVisible")],$I$(16,1).c$$javax_swing_Action);
this.track_newAnalyticParticleItem=Clazz.new_([$I$(5).getString$S("AnalyticParticle.Name")],$I$(6,1).c$$S);
this.track_newAnalyticParticleItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("analyticParticle"));
this.track_newDynamicParticleMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.DynamicParticle")],$I$(4,1).c$$S);
this.track_newDynamicParticleCartesianItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Cartesian")],$I$(6,1).c$$S);
this.track_newDynamicParticleCartesianItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("dynamicParticle"));
this.track_newDynamicParticlePolarItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Polar")],$I$(6,1).c$$S);
this.track_newDynamicParticlePolarItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("dynamicParticlePolar"));
this.track_newDynamicSystemItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.TwoBody")],$I$(6,1).c$$S);
this.track_newDynamicSystemItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("dynamicSystem"));
this.track_newDataTrackMenu=Clazz.new_([$I$(5).getString$S("ParticleDataTrack.Name")],$I$(4,1).c$$S);
this.track_newDataTrackFromFileItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.DataFile") + "..."],$I$(6,1).c$$S);
this.track_newDataTrackFromFileItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("dataTrack"));
this.track_newDataTrackPasteItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Clipboard")],$I$(6,1).c$$S);
this.track_newDataTrackPasteItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("paste"));
this.track_dataTrackHelpItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.DataTrackHelp")],$I$(6,1).c$$S);
this.track_dataTrackHelpItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.showHelp$S$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, ["datatrack", 0]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda27.$init$,[this, null])));
this.track_createMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.NewTrack")],$I$(4,1).c$$S);
this.track_newPointMassItem=Clazz.new_([$I$(5).getString$S("PointMass.Name")],$I$(6,1).c$$S);
this.track_newPointMassItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("pointMass"));
this.track_newCMItem=Clazz.new_([$I$(5).getString$S("CenterOfMass.Name")],$I$(6,1).c$$S);
this.track_newCMItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("cm"));
this.track_newVectorItem=Clazz.new_([$I$(5).getString$S("Vector.Name")],$I$(6,1).c$$S);
this.track_newVectorItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("vector"));
this.track_newVectorSumItem=Clazz.new_([$I$(5).getString$S("VectorSum.Name")],$I$(6,1).c$$S);
this.track_newVectorSumItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("vectorSum"));
this.track_newLineProfileItem=Clazz.new_([$I$(5).getString$S("LineProfile.Name")],$I$(6,1).c$$S);
this.track_newLineProfileItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("lineProfile"));
this.track_newRGBRegionItem=Clazz.new_([$I$(5).getString$S("RGBRegion.Name")],$I$(6,1).c$$S);
this.track_newRGBRegionItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("rgbRegion"));
this.track_newProtractorItem=Clazz.new_([$I$(5).getString$S("Protractor.Name")],$I$(6,1).c$$S);
this.track_newProtractorItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("protractor"));
this.track_newTapeItem=Clazz.new_([$I$(5).getString$S("TapeMeasure.Name")],$I$(6,1).c$$S);
this.track_newTapeItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("tape"));
this.track_newCircleFitterItem=Clazz.new_([$I$(5).getString$S("CircleFitter.Name")],$I$(6,1).c$$S);
this.track_newCircleFitterItem.addActionListener$java_awt_event_ActionListener(this.actions.get$O("circleFitter"));
this.track_cloneMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Clone")],$I$(4,1).c$$S);
this.track_measuringToolsMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.MeasuringTools")],$I$(4,1).c$$S);
this.track_emptyTracksItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Empty")],$I$(6,1).c$$S);
this.track_emptyTracksItem.setEnabled$Z(false);
this.add$javax_swing_JMenu(this.trackMenu);
}, p$1);

Clazz.newMeth(C$, 'maximizeView$I',  function (view) {
this.frame.maximizeView$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(this.panel$(), view);
}, p$1);

Clazz.newMeth(C$, 'createViewMenu$I',  function (keyMask) {
this.viewMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Window")],$I$(4,1).c$$S);
this.viewMenu.setName$S("window");
this.viewMenu.addMenuListener$javax_swing_event_MenuListener(this);
this.view_singleViewMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.SingleView.Text")],$I$(4,1).c$$S);
this.view_mainItem=Clazz.new_([$I$(5).getString$S("TFrame.View.Main")],$I$(6,1).c$$S);
this.view_mainItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$1.maximizeView$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [4]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda28.$init$,[this, null])));
this.view_1Item=Clazz.new_($I$(6,1));
this.view_1Item.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$1.maximizeView$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [0]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda29.$init$,[this, null])));
this.view_2Item=Clazz.new_($I$(6,1));
this.view_2Item.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$1.maximizeView$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [1]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda30.$init$,[this, null])));
this.view_3Item=Clazz.new_($I$(6,1));
this.view_3Item.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$1.maximizeView$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [2]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda31.$init$,[this, null])));
this.view_4Item=Clazz.new_($I$(6,1));
this.view_4Item.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
p$1.maximizeView$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [3]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda32.$init$,[this, null])));
this.view_restoreItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Restore")],$I$(6,1).c$$S);
this.view_restoreItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).restoreViews$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda33.$init$,[this, null])));
this.view_rightPaneItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.WindowRight"), false],$I$(16,1).c$$S$Z);
this.view_rightPaneItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["R".$c(), keyMask]));
this.view_rightPaneItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame != null ) {
var pane=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), 0]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_rightPaneItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_rightPaneItem, [])) {
pane.setDividerLocation$D.apply(pane, [0.67]);
} else {
pane.setDividerLocation$D.apply(pane, [1.0]);
}}});
})()
), Clazz.new_(P$.TMenuBar$lambda34.$init$,[this, null])));
this.view_bottomPaneItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.WindowBottom"), false],$I$(16,1).c$$S$Z);
this.view_bottomPaneItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["B".$c(), keyMask]));
this.view_bottomPaneItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame != null ) {
var pane=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), 2]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_bottomPaneItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_bottomPaneItem, [])) {
pane.setDividerLocation$D.apply(pane, [0.57]);
} else {
pane.setDividerLocation$D.apply(pane, [1.0]);
}}});
})()
), Clazz.new_(P$.TMenuBar$lambda35.$init$,[this, null])));
this.view_mobileLayoutItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Mobile"), false],$I$(16,1).c$$S$Z);
this.view_mobileLayoutItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var compact=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_mobileLayoutItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_mobileLayoutItem, []);
var popup=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_mobileLayoutItem.getParent$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].view_mobileLayoutItem, []);
$I$(1,"invokeLater$Runnable",[((P$.TMenuBar$lambda36$37||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda36$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame != null ) {
$I$(9).defaultManager$().clearSelectedPath$.apply($I$(9).defaultManager$(), []);
if (Clazz.instanceOf(this.$finals$.popup, "javax.swing.JPopupMenu")) {
(this.$finals$.popup).setVisible$Z.apply((this.$finals$.popup), [false]);
}$I$(15).preferMobile=this.$finals$.compact;
$I$(15).neverMobile=!this.$finals$.compact;
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).taintEnabled$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
var toolbar=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getToolBar$Integer$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panelID, false]);
toolbar.refresh$S.apply(toolbar, ["refresh action"]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.currentMenuBar != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.currentMenuBar.setMenuTainted$I$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.currentMenuBar, [127, true]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.currentMenuBar.refreshHelpMenu$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.currentMenuBar, [false]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.setJMenuBar$javax_swing_JMenuBar.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.currentMenuBar]);
}}});
})()
), Clazz.new_(P$.TMenuBar$lambda36$37.$init$,[this, {compact:compact,popup:popup}]))]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda36.$init$,[this, null])));
this.view_trackControlItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.TrackControl")],$I$(16,1).c$$S);
this.view_trackControlItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tc=$I$(29,"getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])]);
tc.setVisible$Z.apply(tc, [!tc.isVisible$.apply(tc, [])]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda37.$init$,[this, null])));
this.view_notesItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Description")],$I$(16,1).c$$S);
this.view_notesItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame != null ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.notesVisible$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getNotesDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, []).setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getNotesDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, []), [false]);
} else this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getToolBar$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [true]).doNotesAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getToolBar$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), [true]), []);
}});
})()
), Clazz.new_(P$.TMenuBar$lambda38.$init$,[this, null])));
var s=$I$(5).getString$S("TMenuBar.MenuItem.DataFunctionTool");
s+=" (" + $I$(5).getString$S("TView.Menuitem.Define") + ")" ;
this.view_dataBuilderItem=Clazz.new_($I$(16,1).c$$S,[s]);
this.view_dataBuilderItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var builder=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getDataBuilder$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
if (builder.isVisible$.apply(builder, [])) builder.setVisible$Z.apply(builder, [false]);
 else {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getSelectedTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []), []);
if (track != null ) builder.setSelectedPanel$S.apply(builder, [track.getName$.apply(track, [])]);
builder.setVisible$Z.apply(builder, [true]);
}});
})()
), Clazz.new_(P$.TMenuBar$lambda39.$init$,[this, null])));
s=$I$(5).getString$S("TMenuBar.MenuItem.DatasetTool");
s+=" (" + $I$(5).getString$S("TableTrackView.Popup.MenuItem.Analyze") + ")" ;
this.view_dataToolItem=Clazz.new_($I$(16,1).c$$S,[s]);
this.view_dataToolItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tool=$I$(30).getTool$Z(true);
if (tool.isVisible$.apply(tool, [])) {
tool.setVisible$Z.apply(tool, [false]);
return;
}var sent=false;
var views=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getTViews$Integer$I$java_util_List.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panelID, 0, null]);
for (var i=0; i < views.size$.apply(views, []); i++) {
var v=views.get$I.apply(views, [i]);
var view=v.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack.apply(v, [v.getSelectedTrack$.apply(v, [])]);
if (view != null ) {
for (var plot, $plot = 0, $$plot = view.getPlots$.apply(view, []); $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.showDataTool$.apply(plot, []);
sent=true;
}
}}
if (!sent) {
views.clear$.apply(views, []);
views=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.getTViews$Integer$I$java_util_List.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panelID, 1, views]);
for (var i=0; i < views.size$.apply(views, []); i++) {
var v=views.get$I.apply(views, [i]);
var tableView=v.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack.apply(v, [v.getSelectedTrack$.apply(v, [])]);
if (tableView != null ) {
tableView.dataToolAction$.apply(tableView, []);
}}
}tool.setDefaultCloseOperation$I.apply(tool, [1]);
tool.setVisible$Z.apply(tool, [true]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda40.$init$,[this, null])));
this.viewMenu.addSeparator$();
this.refreshViewMenu$Z(false);
this.add$javax_swing_JMenu(this.viewMenu);
}, p$1);

Clazz.newMeth(C$, 'setupVideoMenu$',  function () {
if (this.video_filtersMenu.getComponentCount$() == 0) {
p$1.addItems$javax_swing_JMenu$java_awt_ComponentA.apply(this, [this.video_filtersMenu, this.videoFiltersMenuItems]);
}if ($I$(15).isJS) {
this.video_pasteImageMenu.setEnabled$Z(true);
this.video_pasteImageItem.setEnabled$Z(true);
this.video_pasteFilterItem.setEnabled$Z(true);
this.video_pasteFilterItem.setText$S($I$(5).getString$S("TActions.Action.Paste"));
} else {
var clipboard=$I$(3).getDefaultToolkit$().getSystemClipboard$();
var data=clipboard.getContents$O(null);
var b=data != null  && data.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(31).imageFlavor) ;
this.video_pasteImageMenu.setEnabled$Z(b);
this.video_pasteImageItem.setEnabled$Z(b);
this.video_pasteFilterItem.setEnabled$Z(false);
$I$(15,"paste$java_util_function_Consumer",[((P$.TMenuBar$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (xml) /*block*/{
var filterOnClipboard=false;
var pasteFilterText=$I$(5).getString$S("TActions.Action.Paste");
if (xml != null  && xml.contains$CharSequence.apply(xml, ["<?xml"]) ) {
var control=Clazz.new_($I$(18,1).c$$S,[xml]);
filterOnClipboard=Clazz.getClass($I$(28)).isAssignableFrom$Class.apply(Clazz.getClass($I$(28)), [control.getObjectClass$.apply(control, [])]);
if (filterOnClipboard) {
var filterName=control.getObjectClass$.apply(control, []).getSimpleName$.apply(control.getObjectClass$.apply(control, []), []);
var i=filterName.indexOf$S.apply(filterName, ["Filter"]);
if (i > 0 && i < filterName.length$.apply(filterName, []) - 1 ) {
filterName=filterName.substring$I$I.apply(filterName, [0, i]);
}filterName=$I$(27).getString$S("VideoFilter." + filterName);
pasteFilterText+=" " + filterName;
}}this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_pasteFilterItem.setEnabled$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_pasteFilterItem, [filterOnClipboard]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_pasteFilterItem.setText$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].video_pasteFilterItem, [pasteFilterText]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda41.$init$,[this, null]))]);
}var video=this.panel$().getVideo$();
if (video != null ) {
var vis=this.panel$().getPlayer$().getClipControl$().videoVisible;
this.video_videoVisibleItem.setSelected$Z(video.isVisible$() || vis );
var showFiltersMenu=this.panel$().isEnabled$S("video.filters");
var hasNoFiltersMenu=true;
for (var i=0; i < this.videoMenu.getItemCount$(); i++) {
var item=this.videoMenu.getItem$I(i);
if (item === this.video_filtersMenu ) hasNoFiltersMenu=false;
}
if (hasNoFiltersMenu && showFiltersMenu ) {
this.videoMenu.remove$javax_swing_JMenuItem(this.video_checkDurationsItem);
this.videoMenu.remove$javax_swing_JMenuItem(this.video_aboutVideoItem);
var i=this.videoMenu.getItemCount$() - 1;
for (; i >= 0; i--) {
var next=this.videoMenu.getMenuComponent$I(i);
if (Clazz.instanceOf(next, "javax.swing.JMenuItem")) break;
this.videoMenu.remove$java_awt_Component(next);
}
this.videoMenu.addSeparator$();
this.videoMenu.add$javax_swing_JMenuItem(this.video_filtersMenu);
this.videoMenu.addSeparator$();
this.videoMenu.remove$javax_swing_JMenuItem(this.video_checkDurationsItem);
this.videoMenu.add$javax_swing_JMenuItem(this.video_aboutVideoItem);
}}});

Clazz.newMeth(C$, 'setupEditMenu$',  function () {
this.refreshTracks$I(2);
var step=this.panel$().getSelectedStep$();
var track=this.panel$().getSelectedTrack$();
var cantDeleteSteps=track == null  || track.isLocked$()  || track.isDependent$() ;
this.edit_delTracks_deleteSelectedPointItem.setEnabled$Z(!cantDeleteSteps && step != null  );
this.refreshPasteItem$();
var dataViews=this.getDataViews$();
this.edit_copyDataMenu.setEnabled$Z(!dataViews.isEmpty$());
});

Clazz.newMeth(C$, 'createTrackMenu$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var menu=track.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(this.panel$(), null);
menu.setName$S("track");
var coords=this.panel$().getCoords$();
if (coords.isLocked$() && Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && track === (coords).getOriginTrack$()   ) {
for (var i=0; i < menu.getItemCount$(); i++) {
var item=menu.getItem$I(i);
if (item != null  && item.getText$().equals$O($I$(5).getString$S("TMenuBar.MenuItem.CoordsLocked")) ) {
menu.getItem$I(i).setEnabled$Z(false);
break;
}}
}if (track === this.panel$().getAxes$() ) {
var i=0;
for (; i < menu.getItemCount$(); i++) {
var item=menu.getItem$I(i);
if (item != null  && item.getText$().equals$O($I$(5).getString$S("TTrack.MenuItem.Visible")) ) {
menu.remove$I(i);
break;
}}
this.track_axesVisibleItem.setSelected$Z(track.isVisible$());
menu.insert$javax_swing_JMenuItem$I(this.track_axesVisibleItem, i);
}$I$(32).setMenuFonts$javax_swing_JMenu(menu);
return menu;
});

Clazz.newMeth(C$, 'refreshFileMenu$Z',  function (opening) {
var newtabEnabled=this.panel$().isEnabled$S("file.new");
var openEnabled=this.panel$().isEnabled$S("file.open");
var closeEnabled=this.panel$().isEnabled$S("file.close");
var importEnabled=this.panel$().isEnabled$S("file.import");
var exportEnabled=this.panel$().isEnabled$S("file.export");
var showLib=(this.panel$().isEnabled$S("file.library") && (openEnabled || exportEnabled ) );
var saveEnabled=(this.panel$().isEnabled$S("file.save"));
var saveAsEnabled=this.panel$().isEnabled$S("file.saveAs");
var printEnabled=this.panel$().isEnabled$S("file.print");
var structure=(newtabEnabled ? 1 : 0) | (openEnabled ? 2 : 0) | (closeEnabled ? 4 : 0) | (importEnabled ? 8 : 0) | (exportEnabled ? 16 : 0) | (showLib ? 32 : 0) | (saveEnabled ? 64 : 0) | (saveAsEnabled ? 128 : 0) | (printEnabled ? 256 : 0) | (this.panel$().getDataFile$() != null  ? 512 : 0) | (this.panel$().getVideo$() != null  ? 1024 : 0) | (this.frame != null  && this.frame.getTabCount$() > 1  ? 2048 : 0) ;
if (!opening || structure != this.fileMenuStructure ) {
this.fileMenuStructure=structure;
this.setMenuTainted$I$Z(1, true);
this.fileMenu.removeAll$();
if (newtabEnabled) {
this.fileMenu.add$javax_swing_JMenuItem(this.file_newTabItem);
if (this.file_replaceTabItem != null ) {
this.fileMenu.add$javax_swing_JMenuItem(this.file_replaceTabItem);
}this.fileMenu.addSeparator$();
}this.file_openMenu.removeAll$();
if (openEnabled) {
this.file_openMenu.add$javax_swing_JMenuItem(this.file_openItem);
if (showLib) this.file_openMenu.add$javax_swing_JMenuItem(this.file_openBrowserItem);
this.fileMenu.add$javax_swing_JMenuItem(this.file_openMenu);
}if (openEnabled && !$I$(15).isJS ) {
this.fileMenu.add$javax_swing_JMenuItem(this.file_openRecentMenu);
}if (openEnabled && this.panel$().getDataFile$() != null  ) {
C$.checkAddMenuSep$javax_swing_JMenu(this.fileMenu);
this.fileMenu.add$javax_swing_JMenuItem(this.file_reloadItem);
}if (closeEnabled) {
C$.checkAddMenuSep$javax_swing_JMenu(this.fileMenu);
this.fileMenu.add$javax_swing_JMenuItem(this.file_closeItem);
this.fileMenu.add$javax_swing_JMenuItem(this.file_closeAllItem);
}if (saveEnabled || saveAsEnabled ) {
C$.checkAddMenuSep$javax_swing_JMenu(this.fileMenu);
}if (saveEnabled) {
this.fileMenu.add$javax_swing_JMenuItem(this.file_saveMenu);
}if (saveAsEnabled) {
this.file_saveMenu.add$javax_swing_JMenuItem(this.file_saveItem);
this.fileMenu.add$javax_swing_JMenuItem(this.file_saveTabAsItem);
this.file_saveMenu.add$javax_swing_JMenuItem(this.file_saveProjectAsItem);
if (this.frame != null  && this.frame.getTabCount$() > 1 ) this.fileMenu.add$javax_swing_JMenuItem(this.file_saveTabsetAsItem);
}if (importEnabled || exportEnabled ) {
C$.checkAddMenuSep$javax_swing_JMenu(this.fileMenu);
if (importEnabled) this.fileMenu.add$javax_swing_JMenuItem(this.file_importMenu);
if (exportEnabled) this.fileMenu.add$javax_swing_JMenuItem(this.file_exportMenu);
}C$.checkAddMenuSep$javax_swing_JMenu(this.fileMenu);
this.fileMenu.add$javax_swing_JMenuItem(this.file_propertiesItem);
this.fileMenu.addSeparator$();
if (printEnabled) this.fileMenu.add$javax_swing_JMenuItem(this.file_printFrameItem);
this.fileMenu.add$javax_swing_JMenuItem(this.file_exitItem);
}if (opening && p$1.isTainted$I.apply(this, [1]) ) {
this.file_newTabItem.setEnabled$Z(newtabEnabled);
p$1.checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z.apply(this, [this.fileMenu, this.file_openItem, openEnabled]);
this.file_openItem.setEnabled$Z(openEnabled);
p$1.checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z.apply(this, [this.fileMenu, this.file_openBrowserItem, showLib]);
this.file_openBrowserItem.setEnabled$Z(showLib && openEnabled );
p$1.checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z.apply(this, [this.fileMenu, this.file_closeItem, closeEnabled]);
this.file_closeItem.setEnabled$Z(closeEnabled);
this.file_closeAllItem.setEnabled$Z(closeEnabled);
p$1.checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z.apply(this, [this.fileMenu, this.file_saveItem, saveEnabled || saveAsEnabled ]);
this.file_saveItem.setEnabled$Z(saveEnabled);
this.file_saveTabAsItem.setEnabled$Z(saveAsEnabled);
this.file_saveVideoAsItem.setEnabled$Z(saveAsEnabled && this.panel$().getVideo$() != null  );
this.file_saveProjectAsItem.setEnabled$Z(saveAsEnabled);
this.file_saveTabsetAsItem.setEnabled$Z(saveAsEnabled && this.frame != null   && this.frame.getTabCount$() > 1 );
p$1.checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z.apply(this, [this.fileMenu, this.file_importMenu, importEnabled || exportEnabled ]);
this.file_importMenu.setEnabled$Z(importEnabled);
this.file_exportMenu.setEnabled$Z(exportEnabled);
p$1.checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z.apply(this, [this.fileMenu, this.file_printFrameItem, printEnabled]);
this.file_printFrameItem.setEnabled$Z(printEnabled);
var name=" \"" + this.panel$().getTitle$() + "\"" ;
this.file_closeItem.setText$S($I$(5).getString$S("TActions.Action.Close") + name);
this.file_reloadItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.Reload") + name);
this.file_export_dataItem.setEnabled$Z(!this.panel$().getExportableTracks$().isEmpty$());
$I$(32).setMenuFonts$javax_swing_JMenu(this.fileMenu);
this.setMenuTainted$I$Z(1, false);
}if (opening && !$I$(15).isJS ) {
if (this.frame != null ) {
System.out.println$S("TMenuBar mem test " + $I$(15).getMemoryStr$());
this.frame.refreshOpenRecentMenu$javax_swing_JMenu(this.file_openRecentMenu);
}}});

Clazz.newMeth(C$, 'checkShowMenuSep$javax_swing_JMenu$javax_swing_JMenuItem$Z',  function (menu, item, isEnabled) {
}, p$1);

Clazz.newMeth(C$, 'rebuildEditFontSizeMenu$',  function () {
this.edit_fontSizeMenu.removeAll$();
for (var i=0; i <= $I$(2).maxFontLevel; i++) {
var s=$I$(5).getString$S("TMenuBar.MenuItem.Font");
var icon=$I$(2).getResourceIcon$S$Z("zoom.gif", true);
icon.setFixedSizeFactor$I($I$(32).getIntegerFactor$I(i));
var item=Clazz.new_($I$(6,1).c$$S$javax_swing_Icon,[s, icon]);
$I$(32).setFonts$O$I(item, i);
var n=i;
item.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(32).setLevel$I(this.$finals$.n);
});
})()
), Clazz.new_(P$.TMenuBar$lambda42.$init$,[this, {n:n}])));
this.edit_fontSizeMenu.add$javax_swing_JMenuItem(item);
if (i == $I$(32).getLevel$()) {
item.setForeground$java_awt_Color($I$(33).green.darker$());
}}
});

Clazz.newMeth(C$, 'rebuildEditMatSizeMenu$',  function () {
if (this.matSizeAction == null ) {
this.matSizeAction=((P$.TMenuBar$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=e.getActionCommand$();
var size=c.split$S("x");
var w=Double.parseDouble$S(size[0]);
var h=Double.parseDouble$S(size[1]);
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).setImageSize$D$D(w, h);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TMenuBar$7));
this.matSizeGroup=Clazz.new_($I$(19,1));
this.edit_matsize_videoSizeItem=Clazz.new_($I$(20,1));
this.edit_matsize_videoSizeItem.setActionCommand$S("0x0");
this.edit_matsize_videoSizeItem.addActionListener$java_awt_event_ActionListener(this.matSizeAction);
this.matSizeGroup.add$javax_swing_AbstractButton(this.edit_matsize_videoSizeItem);
for (var i=0; i < C$.baseMatSizes.length; i++) {
var size=C$.baseMatSizes[i];
var item=Clazz.new_($I$(20,1).c$$S,[size]);
item.setActionCommand$S(size);
item.addActionListener$java_awt_event_ActionListener(this.matSizeAction);
this.matSizeGroup.add$javax_swing_AbstractButton(item);
}
this.edit_matsize_matSizeItem=Clazz.new_($I$(20,1));
}this.edit_matSizeMenu.removeAll$();
this.matSizeGroup.remove$javax_swing_AbstractButton(this.edit_matsize_matSizeItem);
var vidWidth=1;
var vidHeight=1;
var panel=this.panel$();
var video=panel.getVideo$();
var mat=panel.getMatBounds$();
var dimensionString=mat.width + "x" + mat.height ;
this.edit_matsize_matSizeItem.setText$S(dimensionString);
this.edit_matsize_matSizeItem.setActionCommand$S(dimensionString);
if (video != null ) {
var d=video.getImageSize$Z(true);
vidWidth=d.width;
vidHeight=d.height;
var s=$I$(5).getString$S("TMenuBar.Menu.Video");
var description=" (" + s.toLowerCase$() + ")" ;
dimensionString=vidWidth + "x" + vidHeight ;
this.edit_matsize_videoSizeItem.setText$S(dimensionString + description);
this.edit_matsize_videoSizeItem.setActionCommand$S(dimensionString);
var maxW=0;
var maxH=0;
for (var e=this.matSizeGroup.getElements$(); e.hasMoreElements$(); ) {
var next=e.nextElement$();
var size=next.getActionCommand$().split$S("x");
maxW=Math.max(maxW, Integer.parseInt$S(size[0]));
maxH=Math.max(maxH, Integer.parseInt$S(size[1]));
}
for (var i=0; maxW < 2 * vidWidth || maxH < 2 * vidHeight ; i++) {
var multiplier=(Math.pow(2, i)|0);
var w=multiplier * 3200;
maxW=Math.max(maxW, w);
var h=multiplier * 2400;
maxH=Math.max(maxH, h);
dimensionString=w + "x" + h ;
if (!p$1.matSizeGroupContains$S.apply(this, [dimensionString])) {
var item=Clazz.new_($I$(20,1).c$$S,[dimensionString]);
item.setActionCommand$S(dimensionString);
item.addActionListener$java_awt_event_ActionListener(this.matSizeAction);
this.matSizeGroup.add$javax_swing_AbstractButton(item);
}if (maxW < 2 * vidWidth || maxH < 2 * vidHeight ) {
w=((w * 1.5)|0);
maxW=Math.max(maxW, w);
h=((h * 1.5)|0);
maxH=Math.max(maxH, h);
dimensionString=w + "x" + h ;
if (!p$1.matSizeGroupContains$S.apply(this, [dimensionString])) {
var item=Clazz.new_($I$(20,1).c$$S,[dimensionString]);
item.setActionCommand$S(dimensionString);
item.addActionListener$java_awt_event_ActionListener(this.matSizeAction);
this.matSizeGroup.add$javax_swing_AbstractButton(item);
}}}
} else {
this.edit_matsize_videoSizeItem.setActionCommand$S("0x0");
}var imageWidth=(this.panel$().getImageWidth$()|0);
var imageHeight=(this.panel$().getImageHeight$()|0);
var matIndex=0;
for (var e=this.matSizeGroup.getElements$(); e.hasMoreElements$(); ) {
var next=e.nextElement$();
var size=next.getActionCommand$().split$S("x");
var w=Integer.parseInt$S(size[0]);
var h=Integer.parseInt$S(size[1]);
var matIsWider=w < mat.width;
var matIsHigher=h < mat.height;
if (w >= vidWidth && h >= vidHeight ) {
if (matIsWider || matIsHigher ) ++matIndex;
this.edit_matSizeMenu.add$java_awt_Component(next);
if (next !== this.edit_matsize_videoSizeItem  && next.getActionCommand$().equals$O(this.edit_matsize_videoSizeItem.getActionCommand$()) ) {
this.edit_matSizeMenu.remove$java_awt_Component(next);
--matIndex;
}}if (w == vidWidth && h == vidHeight ) {
this.edit_matsize_videoSizeItem.setSelected$Z(true);
} else if (w == imageWidth && h == imageHeight ) {
next.setSelected$Z(true);
}}
if (!p$1.matSizeGroupContains$S.apply(this, [this.edit_matsize_matSizeItem.getActionCommand$()])) {
this.matSizeGroup.add$javax_swing_AbstractButton(this.edit_matsize_matSizeItem);
this.edit_matsize_matSizeItem.setSelected$Z(true);
this.edit_matSizeMenu.insert$javax_swing_JMenuItem$I(this.edit_matsize_matSizeItem, matIndex);
}$I$(32).setMenuFonts$javax_swing_JMenu(this.edit_matSizeMenu);
});

Clazz.newMeth(C$, 'matSizeGroupContains$S',  function (actionCommand) {
for (var e=this.matSizeGroup.getElements$(); e.hasMoreElements$(); ) {
var next=e.nextElement$();
if (next.getActionCommand$().equals$O(actionCommand)) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'rebuild$',  function () {
this.removeAll$();
this.add$javax_swing_JMenu(this.fileMenu);
this.add$javax_swing_JMenu(this.editMenu);
this.add$javax_swing_JMenu(this.videoMenu);
this.add$javax_swing_JMenu(this.trackMenu);
this.add$javax_swing_JMenu(this.coordsMenu);
this.add$javax_swing_JMenu(this.viewMenu);
this.add$javax_swing_JMenu(this.helpMenu);
});

Clazz.newMeth(C$, 'rebuildEditCopyMenu$S',  function (type) {
switch (type) {
case "data":
this.edit_copyDataMenu.removeAll$();
var dataViews=this.getDataViews$();
if (dataViews.isEmpty$()) {
this.edit_copyDataMenu.setText$S($I$(5).getString$S("TableTrackView.Action.CopyData"));
} else if (dataViews.size$() == 1) {
var key=dataViews.firstKey$();
var view=dataViews.get$O(key);
view.refreshCopyDataMenu$javax_swing_JMenu(this.edit_copyDataMenu);
var text=this.edit_copyDataMenu.getText$();
this.edit_copyDataMenu.setText$S(text + " (" + key + ")" );
} else {
this.edit_copyDataMenu.setText$S($I$(5).getString$S("TableTrackView.Action.CopyData"));
for (var key, $key = dataViews.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$()).intValue$()),1);) {
var view=dataViews.get$O(Integer.valueOf$I(key));
var menu=Clazz.new_($I$(4,1));
this.edit_copyDataMenu.add$javax_swing_JMenuItem(view.refreshCopyDataMenu$javax_swing_JMenu(menu));
var text=menu.getText$();
menu.setText$S(text + " (" + key + ")" );
}
}$I$(32).setMenuFonts$javax_swing_JMenu(this.edit_copyDataMenu);
break;
case "image":
var choosers=this.frame.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.panel$());
if (this.edit_copyFrameImageItem == null ) {
this.edit_copyFrameImageItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CopyFrame")],$I$(6,1).c$$S);
this.edit_copyFrameImageItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var c=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame;
Clazz.new_($I$(13,1).c$$java_awt_Component,[c]).copyToClipboard$.apply(Clazz.new_($I$(13,1).c$$java_awt_Component,[c]), []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda43.$init$,[this, null])));
this.edit_copyMainViewImageItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CopyMainView") + " (0)"],$I$(6,1).c$$S);
this.edit_copyMainViewImageItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])],$I$(13,1).c$$java_awt_Component).copyToClipboard$.apply(Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], [])],$I$(13,1).c$$java_awt_Component), []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda44.$init$,[this, null])));
var copyView=((P$.TMenuBar$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
Clazz.new_($I$(13,1).c$$java_awt_Component,[this.$finals$.choosers[i]]).copyToClipboard$();
});
})()
), Clazz.new_($I$(8,1),[this, {choosers:choosers}],P$.TMenuBar$8));
this.edit_copyViewImageItems=Clazz.array($I$(6), [choosers.length]);
for (var i=0; i < choosers.length; i++) {
this.edit_copyViewImageItems[i]=Clazz.new_($I$(6,1));
this.edit_copyViewImageItems[i].setActionCommand$S(String.valueOf$I(i));
this.edit_copyViewImageItems[i].setAction$javax_swing_Action(copyView);
}
}this.edit_copyImageMenu.removeAll$();
this.edit_copyImageMenu.add$javax_swing_JMenuItem(this.edit_copyMainViewImageItem);
var vchoosers=this.frame.getVisibleChoosers$Integer(this.panel$().getID$());
for (var i=0; i < choosers.length; i++) {
if (vchoosers[i] != null ) {
var viewname=null;
var tview=vchoosers[i].getSelectedView$();
viewname=tview == null  ? $I$(5).getString$S("TFrame.View.Unknown") : tview.getViewName$();
this.edit_copyViewImageItems[i].setText$S(viewname + " (" + (i + 1) + ")" );
var command=String.valueOf$I(i);
this.edit_copyViewImageItems[i].setActionCommand$S(command);
this.edit_copyImageMenu.add$javax_swing_JMenuItem(this.edit_copyViewImageItems[i]);
} else {
this.edit_copyImageMenu.remove$javax_swing_JMenuItem(this.edit_copyViewImageItems[i]);
}}
this.edit_copyImageMenu.add$javax_swing_JMenuItem(this.edit_copyFrameImageItem);
$I$(32).setMenuFonts$javax_swing_JMenu(this.edit_copyImageMenu);
break;
case "object":
this.edit_copyObjectMenu.removeAll$();
var copyObjectAction=((P$.TMenuBar$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var s=(e.getSource$()).getActionCommand$();
if ("coords".equals$O(s)) {
$I$(21,"copyXML$O",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getCoords$()]);
} else if ("clip".equals$O(s)) {
$I$(21,"copyXML$O",[this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getPlayer$().getVideoClip$()]);
} else {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'], []).getTrack$S(s);
if (track != null ) $I$(21).copyXML$O(track);
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TMenuBar$9));
var item=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.Coords")],$I$(6,1).c$$S);
item.setActionCommand$S("coords");
item.addActionListener$java_awt_event_ActionListener(copyObjectAction);
this.edit_copyObjectMenu.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.VideoClip")],$I$(6,1).c$$S);
item.setActionCommand$S("clip");
item.addActionListener$java_awt_event_ActionListener(copyObjectAction);
this.edit_copyObjectMenu.add$javax_swing_JMenuItem(item);
for (var next, $next = this.panel$().getTracksTemp$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next === this.panel$().getAxes$()  || Clazz.instanceOf(next, "org.opensourcephysics.cabrillo.tracker.PerspectiveTrack")  || Clazz.instanceOf(next, "org.opensourcephysics.cabrillo.tracker.FilteredPointMass") ) continue;
item=Clazz.new_([next.getName$()],$I$(6,1).c$$S);
item.setActionCommand$S(next.getName$());
item.addActionListener$java_awt_event_ActionListener(copyObjectAction);
this.edit_copyObjectMenu.add$javax_swing_JMenuItem(item);
}
this.panel$().clearTemp$();
$I$(32).setMenuFonts$javax_swing_JMenu(this.edit_copyObjectMenu);
break;
}
});

Clazz.newMeth(C$, 'refreshEditMenu$Z',  function (opening) {
if (p$1.isTainted$I.apply(this, [2])) {
var tracks=this.panel$().getUserTracks$();
tracks.removeAll$java_util_Collection(this.panel$().getDrawablesTemp$Class(Clazz.getClass($I$(34))));
var hasTracks=!tracks.isEmpty$();
var undoEnabled=this.panel$().isEnabled$S("edit.undoRedo");
var copyDataEnabled=this.panel$().isEnabled$S("edit.copyData");
var copyImageEnabled=this.panel$().isEnabled$S("edit.copyImage");
var copyObjectEnabled=this.panel$().isEnabled$S("edit.copyObject");
var pasteEnabled=this.panel$().isEnabled$S("edit.paste");
var deleteEnabled=this.panel$().isEnabled$S("track.delete");
var formatsEnabled=this.panel$().isEnabled$S("number.formats");
var unitsEnabled=this.panel$().isEnabled$S("number.units");
var matSizeEnabled=this.panel$().isEnabled$S("edit.matSize");
this.editMenu.removeAll$();
if (undoEnabled) {
this.edit_undoItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.Undo"));
this.edit_undoItem.setText$S($I$(14,"getUndoDescription$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]));
this.editMenu.add$javax_swing_JMenuItem(this.edit_undoItem);
this.edit_undoItem.setEnabled$Z($I$(14,"canUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]));
this.edit_redoItem.setText$S($I$(5).getString$S("TMenuBar.MenuItem.Redo"));
this.edit_redoItem.setText$S($I$(14,"getRedoDescription$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]));
this.editMenu.add$javax_swing_JMenuItem(this.edit_redoItem);
this.edit_redoItem.setEnabled$Z($I$(14,"canRedo$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]));
}if (copyImageEnabled || copyDataEnabled || copyObjectEnabled  ) {
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
if (copyDataEnabled) {
this.editMenu.add$javax_swing_JMenuItem(this.edit_copyDataMenu);
var dataViews=this.getDataViews$();
this.edit_copyDataMenu.setEnabled$Z(!dataViews.isEmpty$());
if (dataViews.isEmpty$()) {
this.edit_copyDataMenu.setText$S($I$(5).getString$S("TableTrackView.Action.CopyData"));
} else {
var key=dataViews.firstKey$();
var view=dataViews.get$O(key);
view.refreshCopyDataMenu$javax_swing_JMenu(this.edit_copyDataMenu);
var text=this.edit_copyDataMenu.getText$();
this.edit_copyDataMenu.setText$S(text + " (" + key + ")" );
}}if (copyImageEnabled) {
this.editMenu.add$javax_swing_JMenuItem(this.edit_copyImageMenu);
}if (copyObjectEnabled) {
this.editMenu.add$javax_swing_JMenuItem(this.edit_copyObjectMenu);
this.edit_copyObjectMenu.setText$S($I$(5).getString$S("TMenuBar.Menu.CopyObject"));
}}if (pasteEnabled) {
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
this.editMenu.add$javax_swing_JMenuItem(this.edit_pasteItem);
}this.edit_deleteTracksMenu.setEnabled$Z(hasTracks);
if (deleteEnabled) {
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
if (deleteEnabled || hasTracks ) {
this.editMenu.add$javax_swing_JMenuItem(this.edit_deleteTracksMenu);
}}if (formatsEnabled || unitsEnabled ) {
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
this.editMenu.add$javax_swing_JMenuItem(this.edit_numberMenu);
this.edit_numberMenu.removeAll$();
if (formatsEnabled) this.edit_numberMenu.add$javax_swing_JMenuItem(this.edit_formatsItem);
if (unitsEnabled) this.edit_numberMenu.add$javax_swing_JMenuItem(this.edit_unitsItem);
}if (matSizeEnabled) {
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
this.editMenu.add$javax_swing_JMenuItem(this.edit_matSizeMenu);
}C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
this.editMenu.add$javax_swing_JMenuItem(this.edit_fontSizeMenu);
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
this.editMenu.add$javax_swing_JMenuItem(this.edit_languageMenu);
if (!$I$(15).isJS) {
C$.checkAddMenuSep$javax_swing_JMenu(this.editMenu);
this.editMenu.add$javax_swing_JMenuItem(this.edit_configItem);
}$I$(32).setMenuFonts$javax_swing_JMenu(this.editMenu);
this.setMenuTainted$I$Z(2, false);
}if (opening) {
this.setupEditMenu$();
p$1.refreshTrackNames$I.apply(this, [2]);
}});

Clazz.newMeth(C$, 'refreshCoordsMenu$Z',  function (opening) {
if (p$1.isTainted$I.apply(this, [8])) {
this.coordsMenu.removeAll$();
if (this.panel$().isEnabled$S("number.units")) this.coordsMenu.add$javax_swing_JMenuItem(this.coords_showUnitDialogItem);
if (this.panel$().isEnabled$S("coords.locked")) {
C$.checkAddMenuSep$javax_swing_JMenu(this.coordsMenu);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_lockedCoordsItem);
}if (this.panel$().isEnabled$S("coords.origin") || this.panel$().isEnabled$S("coords.angle") || this.panel$().isEnabled$S("coords.scale")  ) {
C$.checkAddMenuSep$javax_swing_JMenu(this.coordsMenu);
if (this.panel$().isEnabled$S("coords.origin")) this.coordsMenu.add$javax_swing_JMenuItem(this.coords_fixedOriginItem);
if (this.panel$().isEnabled$S("coords.angle")) this.coordsMenu.add$javax_swing_JMenuItem(this.coords_fixedAngleItem);
if (this.panel$().isEnabled$S("coords.scale")) this.coordsMenu.add$javax_swing_JMenuItem(this.coords_fixedScaleItem);
}if (this.panel$().isEnabled$S("coords.refFrame")) {
C$.checkAddMenuSep$javax_swing_JMenu(this.coordsMenu);
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_refFrameMenu);
}this.refreshTracks$I(8);
if (this.coordsMenu.getItemCount$() == 0) {
this.coordsMenu.add$javax_swing_JMenuItem(this.coords_emptyCoordsItem);
}this.setMenuTainted$I$Z(8, false);
}if (opening) {
p$1.refreshTrackNames$I.apply(this, [8]);
var coords=this.panel$().getCoords$();
var defaultCoords=!(Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame"));
this.coords_lockedCoordsItem.setSelected$Z(coords.isLocked$());
this.coords_fixedOriginItem.setSelected$Z(coords.isFixedOrigin$());
this.coords_fixedAngleItem.setSelected$Z(coords.isFixedAngle$());
this.coords_fixedScaleItem.setSelected$Z(coords.isFixedScale$());
this.coords_fixedOriginItem.setEnabled$Z(defaultCoords && !coords.isLocked$() );
this.coords_fixedAngleItem.setEnabled$Z(defaultCoords && !coords.isLocked$() );
var stickAttached=false;
var tapes=this.panel$().getDrawablesTemp$Class(Clazz.getClass($I$(35)));
for (var i=0, n=tapes.size$(); i < n; i++) {
var tape=tapes.get$I(i);
if (tape.isStickMode$() && tape.isAttached$() ) {
stickAttached=true;
break;
}}
tapes.clear$();
this.coords_fixedScaleItem.setEnabled$Z(defaultCoords && !coords.isLocked$() && !stickAttached  );
this.coords_refFrameMenu.setEnabled$Z(!coords.isLocked$());
}$I$(32).setMenuFonts$javax_swing_JMenu(this.coordsMenu);
});

Clazz.newMeth(C$, 'getOriginTrack',  function () {
var coords=this.panel$().getCoords$();
return (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") ? (coords).getOriginTrack$() : null);
}, p$1);

Clazz.newMeth(C$, 'refreshVideoMenu$Z',  function (opening) {
if (p$1.isTainted$I.apply(this, [4])) {
var video=this.panel$().getVideo$();
var hasVideo=(video != null );
this.videoMenu.removeAll$();
var importEnabled=this.panel$().isEnabled$S("video.import") || this.panel$().isEnabled$S("video.open") ;
if (importEnabled) {
this.video_openVideoItem.setText$S($I$(5).getString$S("TActions.Action.ImportVideo"));
this.videoMenu.add$javax_swing_JMenuItem(this.video_openVideoItem);
if ($I$(15).isJS) this.videoMenu.add$javax_swing_JMenuItem(this.video_captureItem);
}if (hasVideo) {
if (this.panel$().isEnabled$S("video.close")) this.videoMenu.add$javax_swing_JMenuItem(this.video_closeVideoItem);
}C$.checkAddMenuSep$javax_swing_JMenu(this.videoMenu);
if (this.panel$().isEnabled$S("button.clipSettings")) {
this.videoMenu.add$javax_swing_JMenuItem(this.video_clipSettingsItem);
}this.videoMenu.add$javax_swing_JMenuItem(this.video_goToItem);
C$.checkAddMenuSep$javax_swing_JMenu(this.videoMenu);
if (importEnabled && Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo") ) {
var editable=(video).isEditable$();
this.video_editVideoItem.setSelected$Z(editable);
var tip=editable ? $I$(5).getString$S("TMenuBar.MenuItem.StopEditVideoFrames.Tooltip") : $I$(5).getString$S("TMenuBar.MenuItem.EditVideoFrames.Tooltip");
this.video_editVideoItem.setToolTipText$S(tip);
this.videoMenu.add$javax_swing_JMenuItem(this.video_editVideoItem);
this.videoMenu.addSeparator$();
}if (importEnabled) this.videoMenu.add$javax_swing_JMenuItem(hasVideo ? this.video_pasteImageMenu : this.video_pasteImageItem);
if (video != null ) {
var isEditableVideo=importEnabled && Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo") && (video).isEditable$()  ;
if (isEditableVideo && importEnabled ) {
this.video_pasteImageMenu.add$javax_swing_JMenuItem(this.video_pasteImageBeforeItem);
this.video_pasteImageMenu.add$javax_swing_JMenuItem(this.video_pasteImageAfterItem);
this.videoMenu.add$javax_swing_JMenuItem(this.video_importImageMenu);
this.videoMenu.add$javax_swing_JMenuItem(this.video_removeImageItem);
this.video_removeImageItem.setEnabled$Z(video.getFrameCount$() > 1);
} else {
this.video_pasteImageMenu.remove$javax_swing_JMenuItem(this.video_pasteImageBeforeItem);
this.video_pasteImageMenu.remove$javax_swing_JMenuItem(this.video_pasteImageAfterItem);
}if (this.panel$().isEnabled$S("video.visible")) {
C$.checkAddMenuSep$javax_swing_JMenu(this.videoMenu);
this.videoMenu.add$javax_swing_JMenuItem(this.video_videoVisibleItem);
}var clip=this.panel$().getPlayer$().getVideoClip$();
this.video_playAllStepsItem.setSelected$Z(clip.isPlayAllSteps$());
this.videoMenu.add$javax_swing_JMenuItem(this.video_playAllStepsItem);
if (Clazz.instanceOf(video, "org.opensourcephysics.media.mov.SmoothPlayable")) {
this.video_playXuggleSmoothlyItem.setSelected$Z((video).isSmoothPlay$());
this.videoMenu.add$javax_swing_JMenuItem(this.video_playXuggleSmoothlyItem);
}if (this.panel$().isEnabled$S("video.filters")) {
this.video_filtersMenu.removeAll$();
this.video_filtersMenu.add$javax_swing_JMenuItem(this.video_filter_newFilterMenu);
this.video_filter_newFilterMenu.removeAll$();
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.panel$().getFilters$());
{
for (var name, $name = this.panel$().getFilters$().keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var shortName=name;
var i=shortName.lastIndexOf$I(".");
if (i > 0 && i < shortName.length$() - 1 ) {
shortName=shortName.substring$I(i + 1);
}i=shortName.indexOf$S("Filter");
if (i > 0 && i < shortName.length$() - 1 ) {
shortName=shortName.substring$I$I(0, i);
}shortName=$I$(27).getString$S("VideoFilter." + shortName);
var item=Clazz.new_($I$(6,1).c$$S,[shortName]);
item.setActionCommand$S(name);
item.addActionListener$java_awt_event_ActionListener(this.actions.get$O("videoFilter"));
this.video_filter_newFilterMenu.add$javax_swing_JMenuItem(item);
}
}var stack=video.getFilterStack$();
stack.removePropertyChangeListener$S$java_beans_PropertyChangeListener("filter", this);
stack.addPropertyChangeListener$S$java_beans_PropertyChangeListener("filter", this);
if (!stack.getFilters$().isEmpty$()) {
this.video_filtersMenu.addSeparator$();
var it2=stack.getFilters$().iterator$();
while (it2.hasNext$()){
var filter=it2.next$();
this.video_filtersMenu.add$javax_swing_JMenuItem(filter.getMenu$org_opensourcephysics_media_core_Video(video));
}
}if (this.video_pasteFilterItem.isEnabled$()) {
this.video_filtersMenu.addSeparator$();
this.video_filtersMenu.add$javax_swing_JMenuItem(this.video_pasteFilterItem);
}if (!stack.getFilters$().isEmpty$()) {
this.video_filtersMenu.addSeparator$();
this.video_filtersMenu.add$javax_swing_JMenuItem(this.video_clearFiltersItem);
}C$.checkAddMenuSep$javax_swing_JMenu(this.videoMenu);
this.videoMenu.add$javax_swing_JMenuItem(this.video_filtersMenu);
this.videoMenu.addSeparator$();
this.videoMenu.add$javax_swing_JMenuItem(this.video_aboutVideoItem);
}}var n=this.videoMenu.getMenuComponentCount$();
if (n > 0 && Clazz.instanceOf(this.videoMenu.getMenuComponent$I(n - 1), "javax.swing.JSeparator") ) {
this.videoMenu.remove$I(n - 1);
}if (this.videoMenu.getItemCount$() == 0) {
this.videoMenu.add$javax_swing_JMenuItem(this.video_emptyVideoItem);
}this.setMenuTainted$I$Z(4, false);
this.videoFiltersMenuItems=this.video_filtersMenu.getMenuComponents$();
}if (opening) {
this.setupVideoMenu$();
}$I$(32).setMenuFonts$javax_swing_JMenu(this.videoMenu);
});

Clazz.newMeth(C$, 'refreshPasteItem$',  function () {
var paste=this.actions.get$O("paste").getValue$S("Name").toString();
this.edit_pasteItem.setText$S(paste);
if ($I$(15).isJS) {
this.edit_pasteItem.setEnabled$Z(true);
return;
}this.edit_pasteItem.setEnabled$Z(false);
var s=$I$(15).paste$java_util_function_Consumer(null);
if (s == null ) return;
var type=null;
var control=null;
if (s.startsWith$S("<?xml")) {
control=Clazz.new_($I$(18,1).c$$S,[s]);
type=(control.failedToRead$() ? null : control.getObjectClass$());
}if (type == null ) {
if ($I$(36).getImportableDataName$S(s) != null ) {
paste=$I$(5).getString$S("ParticleDataTrack.Button.Paste.Text");
this.edit_pasteItem.setEnabled$Z(true);
this.edit_pasteItem.setText$S(paste);
}} else if (control != null  && Clazz.getClass($I$(37)).isAssignableFrom$Class(type) ) {
var name=control.getString$S("name");
this.edit_pasteItem.setEnabled$Z(true);
this.edit_pasteItem.setText$S(paste + " " + name );
} else if (Clazz.getClass($I$(38)).isAssignableFrom$Class(type)) {
this.edit_pasteItem.setEnabled$Z(true);
this.edit_pasteItem.setText$S(paste + " " + $I$(5).getString$S("TMenuBar.MenuItem.Coords") );
} else if (Clazz.getClass($I$(39)).isAssignableFrom$Class(type)) {
this.edit_pasteItem.setEnabled$Z(true);
this.edit_pasteItem.setText$S(paste + " " + $I$(5).getString$S("TMenuBar.MenuItem.VideoClip") );
}});

Clazz.newMeth(C$, 'refreshTracks$I',  function (menu) {
var userTracks=this.panel$().getUserTracks$();
var n=userTracks.size$();
var originTrack=null;
switch (menu) {
case 8:
originTrack=p$1.getOriginTrack.apply(this, []);
this.coords_refFrameMenu.removeAll$();
var e=this.coords_refFrameGroup.getElements$();
while (e.hasMoreElements$()){
this.coords_refFrameGroup.remove$javax_swing_AbstractButton(e.nextElement$());
}
this.coords_refFrameMenu.add$javax_swing_JMenuItem(this.coords_defaultRefFrameItem);
this.coords_refFrameGroup.add$javax_swing_AbstractButton(this.coords_defaultRefFrameItem);
this.coords_defaultRefFrameItem.setSelected$Z(originTrack == null );
break;
case 2:
this.edit_deleteTracksMenu.removeAll$();
this.edit_deleteTracksMenu.add$javax_swing_JMenuItem(this.edit_delTracks_deleteSelectedPointItem);
this.edit_deleteTracksMenu.addSeparator$();
this.edit_clearTracksItem.setEnabled$Z(n > 0);
break;
}
for (var i=0; i < n; i++) {
var track=userTracks.get$I(i);
var trackName=track.getName$S("track");
switch (menu) {
case 8:
if (track.ttype == 5 && !track.getClass$().getSimpleName$().endsWith$S("DataTrack")  && !track.getClass$().getSimpleName$().startsWith$S("Filtered") ) {
var item=Clazz.new_($I$(20,1).c$$S,[trackName]);
item.addActionListener$java_awt_event_ActionListener(this.actions.get$O("refFrame"));
this.coords_refFrameGroup.add$javax_swing_AbstractButton(item);
this.coords_refFrameMenu.add$javax_swing_JMenuItem(item);
if (track === originTrack ) item.setSelected$Z(true);
}break;
case 2:
var item=Clazz.new_($I$(6,1).c$$S,[trackName]);
item.setName$S("track");
item.setIcon$javax_swing_Icon(track.getIcon$I$I$S(21, 16, "track"));
item.addActionListener$java_awt_event_ActionListener(this.actions.get$O("deleteTrack"));
item.setEnabled$Z(!track.isLocked$() || track.isDependent$() );
this.edit_deleteTracksMenu.add$javax_swing_JMenuItem(item);
break;
}
}
switch (menu) {
case 8:
$I$(32).setMenuFonts$javax_swing_JMenu(this.coords_refFrameMenu);
break;
case 2:
this.edit_clearTracksItem.setEnabled$Z(n > 0);
if (!!(this.panel$().isEnabled$S("edit.clear") & n > 0)) {
this.edit_deleteTracksMenu.addSeparator$();
this.edit_deleteTracksMenu.add$javax_swing_JMenuItem(this.edit_clearTracksItem);
}$I$(32).setMenuFonts$javax_swing_JMenu(this.edit_deleteTracksMenu);
break;
}
});

Clazz.newMeth(C$, 'refreshTrackMenu$Z$javax_swing_JPopupMenu',  function (opening, target) {
var userTracks=this.panel$().getUserTracks$();
userTracks.removeAll$java_util_Collection(this.panel$().getDrawablesTemp$Class(Clazz.getClass($I$(34))));
var hasTracks=!userTracks.isEmpty$();
if (p$1.isTainted$I.apply(this, [16])) {
var axes=this.panel$().getAxes$();
var track=this.panel$().getSelectedTrack$();
this.trackMenu.removeAll$();
this.track_cloneMenu.removeAll$();
this.enabledNewTrackCount=p$1.refreshTracksCreateMenu$javax_swing_JMenu$I$Z.apply(this, [this.track_createMenu, this.enabledNewTrackCount, false]);
if (this.track_createMenu.getItemCount$() > 0) this.trackMenu.add$javax_swing_JMenuItem(this.track_createMenu);
if (hasTracks && this.panel$().isEnabled$S("new.clone") ) this.trackMenu.add$javax_swing_JMenuItem(this.track_cloneMenu);
if (hasTracks) C$.checkAddMenuSep$javax_swing_JMenu(this.trackMenu);
for (var i=0, n=userTracks.size$(); i < n; i++) {
track=userTracks.get$I(i);
var trackName=track.getName$S("track");
var item=Clazz.new_($I$(6,1).c$$S,[trackName]);
item.setName$S("track");
item.setIcon$javax_swing_Icon(track.getIcon$I$I$S(21, 16, "track"));
item.addActionListener$java_awt_event_ActionListener(this.actions.get$O("cloneTrack"));
this.track_cloneMenu.add$javax_swing_JMenuItem(item);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
this.trackMenu.add$javax_swing_JMenuItem(this.createTrackMenu$org_opensourcephysics_cabrillo_tracker_TTrack(track));
}
if (this.panel$().isEnabled$S("button.axes") || this.panel$().isEnabled$S("calibration.stick") || this.panel$().isEnabled$S("calibration.tape") || this.panel$().isEnabled$S("calibration.points") || this.panel$().isEnabled$S("calibration.offsetOrigin")  ) {
if (axes != null  && this.panel$().isEnabled$S("button.axes") ) {
track=axes;
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}}if (this.trackMenu.getItemCount$() == 0) {
this.trackMenu.add$javax_swing_JMenuItem(this.track_emptyTracksItem);
}this.setMenuTainted$I$Z(16, false);
this.tracksMenuItems=this.trackMenu.getMenuComponents$();
}if (opening) {
if (this.trackMenu.getItemCount$() == 0) {
for (var i=0; i < this.tracksMenuItems.length; i++) {
this.trackMenu.add$java_awt_Component(this.tracksMenuItems[i]);
}
}if (this.track_createMenu.getParent$() !== target ) {
if (this.track_createMenu.getItemCount$() > 0) target.add$java_awt_Component$I(this.track_createMenu, 0);
if (hasTracks && this.panel$().isEnabled$S("new.clone") ) this.trackMenu.add$java_awt_Component$I(this.track_cloneMenu, 1);
}this.track_newDataTrackPasteItem.setEnabled$Z($I$(15).isJS);
if (!$I$(15).isJS) {
var s=$I$(15).paste$java_util_function_Consumer(null);
if (s != null ) this.track_newDataTrackPasteItem.setEnabled$Z($I$(36).getImportableDataName$S(s) != null );
}p$1.refreshTrackNames$I.apply(this, [16]);
}$I$(32).setMenuFonts$javax_swing_JMenu(this.trackMenu);
});

Clazz.newMeth(C$, 'refreshTrackNames$I',  function (type) {
var userTracks=this.panel$().getUserTracks$();
for (var i=0, jd=0, jc=0, jt=0, jp=0, n=userTracks.size$(); i < n; i++) {
var track=userTracks.get$I(i);
var trackName=track.getName$S("track");
switch (type) {
case 2:
jd=p$1.setNextTrackMenuText$javax_swing_JMenu$I$S.apply(this, [this.edit_deleteTracksMenu, jd, trackName]);
break;
case 16:
jc=p$1.setNextTrackMenuText$javax_swing_JMenu$I$S.apply(this, [this.track_cloneMenu, jc, trackName]);
jt=p$1.setNextTrackMenuText$javax_swing_JMenu$I$S.apply(this, [this.trackMenu, jt, trackName]);
break;
case 8:
if (track.ttype == 5) {
jp=p$1.setNextTrackMenuText$javax_swing_JMenu$I$S.apply(this, [this.coords_refFrameMenu, jp, trackName]);
}break;
}
}
}, p$1);

Clazz.newMeth(C$, 'setNextTrackMenuText$javax_swing_JMenu$I$S',  function (menu, j, trackName) {
var c=null;
var n=menu.getItemCount$();
while (j < n && !("track".equals$O((c=menu.getMenuComponent$I(j)).getName$())) ){
if (++j >= n) return j;
}
if (c != null ) (c).setText$S(trackName);
return ++j;
}, p$1);

Clazz.newMeth(C$, 'refreshTracksCreateMenu$javax_swing_JMenu$I$Z',  function (menu, enabledCount, userTracksOnly) {
var p=this.panel$();
if (p.getEnabledCount$() != enabledCount || menu.getComponentCount$() == 0 ) {
enabledCount=p.getEnabledCount$();
menu.removeAll$();
if (p.isEnabled$S("new.pointMass") || p.isEnabled$S("new.cm") ) {
if (p.isEnabled$S("new.pointMass")) menu.add$javax_swing_JMenuItem(this.track_newPointMassItem);
if (p.isEnabled$S("new.cm")) menu.add$javax_swing_JMenuItem(this.track_newCMItem);
}if (p.isEnabled$S("new.vector") || p.isEnabled$S("new.vectorSum") ) {
C$.checkAddMenuSep$javax_swing_JMenu(menu);
if (p.isEnabled$S("new.vector")) menu.add$javax_swing_JMenuItem(this.track_newVectorItem);
if (p.isEnabled$S("new.vectorSum")) menu.add$javax_swing_JMenuItem(this.track_newVectorSumItem);
}if (p.isEnabled$S("new.lineProfile") || p.isEnabled$S("new.RGBRegion") ) {
C$.checkAddMenuSep$javax_swing_JMenu(menu);
if (p.isEnabled$S("new.lineProfile")) menu.add$javax_swing_JMenuItem(this.track_newLineProfileItem);
if (p.isEnabled$S("new.RGBRegion")) menu.add$javax_swing_JMenuItem(this.track_newRGBRegionItem);
}if (p.isEnabled$S("new.analyticParticle") || p.isEnabled$S("new.dynamicParticle") || p.isEnabled$S("new.dynamicTwoBody") || p.isEnabled$S("new.dataTrack")  ) {
C$.checkAddMenuSep$javax_swing_JMenu(menu);
if (p.isEnabled$S("new.analyticParticle")) menu.add$javax_swing_JMenuItem(this.track_newAnalyticParticleItem);
if (p.isEnabled$S("new.dynamicParticle") || p.isEnabled$S("new.dynamicTwoBody") ) {
menu.add$javax_swing_JMenuItem(this.track_newDynamicParticleMenu);
this.track_newDynamicParticleMenu.removeAll$();
if (p.isEnabled$S("new.dynamicParticle")) {
this.track_newDynamicParticleMenu.add$javax_swing_JMenuItem(this.track_newDynamicParticleCartesianItem);
this.track_newDynamicParticleMenu.add$javax_swing_JMenuItem(this.track_newDynamicParticlePolarItem);
}if (p.isEnabled$S("new.dynamicTwoBody")) this.track_newDynamicParticleMenu.add$javax_swing_JMenuItem(this.track_newDynamicSystemItem);
}if (p.isEnabled$S("new.dataTrack")) {
menu.add$javax_swing_JMenuItem(this.track_newDataTrackMenu);
this.track_newDataTrackMenu.removeAll$();
this.track_newDataTrackMenu.add$javax_swing_JMenuItem(this.track_newDataTrackFromFileItem);
this.track_newDataTrackMenu.add$javax_swing_JMenuItem(this.track_newDataTrackPasteItem);
this.track_newDataTrackMenu.addSeparator$();
this.track_newDataTrackMenu.add$javax_swing_JMenuItem(this.track_dataTrackHelpItem);
}}if (!userTracksOnly) {
if (p.isEnabled$S("new.tapeMeasure") || p.isEnabled$S("new.protractor") || p.isEnabled$S("new.circleFitter")  ) {
C$.checkAddMenuSep$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.track_measuringToolsMenu);
p$1.refreshMeasuringToolsMenu$javax_swing_JMenu.apply(this, [this.track_measuringToolsMenu]);
}if (p.isEnabled$S("calibration.stick") || p.isEnabled$S("calibration.tape") || p.isEnabled$S("calibration.points") || p.isEnabled$S("calibration.offsetOrigin")  ) {
C$.checkAddMenuSep$javax_swing_JMenu(menu);
var toolbar=this.panel$().getToolBar$Z(true);
var calibrationButton=toolbar.calibrationButton;
var calibrationToolsMenu=calibrationButton.getCalibrationToolsMenu$();
calibrationToolsMenu.setText$S($I$(5).getString$S("TMenuBar.Menu.CalibrationTools"));
menu.add$javax_swing_JMenuItem(calibrationToolsMenu);
}}}return enabledCount;
}, p$1);

Clazz.newMeth(C$, 'refreshViewMenu$Z',  function (opening) {
var panel=this.panel$();
if (!opening) {
this.viewMenu.add$javax_swing_JMenuItem(this.view_rightPaneItem);
this.viewMenu.add$javax_swing_JMenuItem(this.view_bottomPaneItem);
return;
}var choosers=this.frame.getViewChoosers$Integer(this.panelID);
var viewNames=Clazz.array(String, [4]);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null  || i > viewNames.length ) continue;
var viewType=choosers[i].getSelectedViewType$();
viewNames[i]=viewType == 0 ? $I$(5).getString$S("PlotTView.Name") : viewType == 1 ? $I$(5).getString$S("TableTView.Name") : viewType == 2 ? $I$(5).getString$S("WorldTView.Button.World") : viewType == 3 ? $I$(5).getString$S("PageTView.Name") : null;
}
this.view_1Item.setText$S($I$(5).getString$S("TMenuBar.Menu.Window") + " 1 (" + viewNames[0] + ")" );
this.view_2Item.setText$S($I$(5).getString$S("TMenuBar.Menu.Window") + " 2 (" + viewNames[1] + ")" );
this.view_3Item.setText$S($I$(5).getString$S("TMenuBar.Menu.Window") + " 3 (" + viewNames[2] + ")" );
this.view_4Item.setText$S($I$(5).getString$S("TMenuBar.Menu.Window") + " 4 (" + viewNames[3] + ")" );
var pane=this.frame.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(this.panel$(), 0);
var max=pane.getMaximumDividerLocation$();
var cur=pane.getDividerLocation$();
var loc=1.0 * cur / max;
this.view_rightPaneItem.setSelected$Z(loc < 0.99 );
var rp=$I$(5).getString$S("TMenuBar.MenuItem.WindowRight");
this.view_rightPaneItem.setText$S(rp + " (" + viewNames[0] + ", " + viewNames[1] + ")" );
pane=this.frame.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(panel, 2);
max=pane.getMaximumDividerLocation$();
cur=pane.getDividerLocation$();
loc=1.0 * cur / max;
this.view_bottomPaneItem.setSelected$Z(loc < 0.95 );
var bp=$I$(5).getString$S("TMenuBar.MenuItem.WindowBottom");
this.view_bottomPaneItem.setText$S(bp + " (" + viewNames[3] + ", " + viewNames[2] + ")" );
var tc=$I$(29).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
this.view_trackControlItem.setSelected$Z(tc.isVisible$());
this.view_trackControlItem.setEnabled$Z(!tc.isEmpty$());
this.view_notesItem.setSelected$Z(this.frame.notesVisible$());
this.view_dataBuilderItem.setSelected$Z(panel.dataBuilder != null  && panel.dataBuilder.isVisible$() );
var tool=$I$(30).getTool$Z(false);
this.view_dataToolItem.setSelected$Z(tool != null  && tool.isVisible$() );
if (p$1.isTainted$I.apply(this, [32])) {
for (var i=this.viewMenu.getItemCount$(); --i > -1; ) {
this.viewMenu.remove$I(i);
}
this.viewMenu.add$javax_swing_JMenuItem(this.view_singleViewMenu);
this.view_singleViewMenu.add$javax_swing_JMenuItem(this.view_mainItem);
this.view_singleViewMenu.add$javax_swing_JMenuItem(this.view_1Item);
this.view_singleViewMenu.add$javax_swing_JMenuItem(this.view_2Item);
this.view_singleViewMenu.add$javax_swing_JMenuItem(this.view_3Item);
this.view_singleViewMenu.add$javax_swing_JMenuItem(this.view_4Item);
this.viewMenu.addSeparator$();
if (this.panel$().getMaximizedView$() != -1) {
this.viewMenu.add$javax_swing_JMenuItem(this.view_restoreItem);
} else {
this.viewMenu.add$javax_swing_JMenuItem(this.view_rightPaneItem);
this.viewMenu.add$javax_swing_JMenuItem(this.view_bottomPaneItem);
}this.viewMenu.addSeparator$();
this.viewMenu.add$javax_swing_JMenuItem(this.view_trackControlItem);
this.viewMenu.add$javax_swing_JMenuItem(this.view_notesItem);
if (panel.isEnabled$S("data.builder") || panel.isEnabled$S("data.tool") ) {
this.viewMenu.addSeparator$();
if (panel.isEnabled$S("data.builder")) this.viewMenu.add$javax_swing_JMenuItem(this.view_dataBuilderItem);
if (panel.isEnabled$S("data.tool")) this.viewMenu.add$javax_swing_JMenuItem(this.view_dataToolItem);
}this.view_mobileLayoutItem.setSelected$Z($I$(15).isMobile$());
this.viewMenu.addSeparator$();
this.viewMenu.add$javax_swing_JMenuItem(this.view_mobileLayoutItem);
this.view_TabsMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.TabMenu.Text")],$I$(4,1).c$$S);
this.viewMenu.addSeparator$();
this.viewMenu.add$javax_swing_JMenuItem(this.view_TabsMenu);
this.tabItems=Clazz.array($I$(6), [this.frame.getTabCount$()]);
for (var i=0; i < this.tabItems.length; i++) {
this.tabItems[i]=Clazz.new_([this.frame.getTabTitle$I(i)],$I$(20,1).c$$S);
this.tabItems[i].setActionCommand$S(String.valueOf$I(i));
this.tabItems[i].setSelected$Z(i == this.frame.getSelectedTab$());
this.tabItems[i].addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var j=Integer.parseInt$S(e.getActionCommand$.apply(e, []));
this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame.setSelectedTab$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TMenuBar'].frame, [j]);
});
})()
), Clazz.new_(P$.TMenuBar$lambda45.$init$,[this, null])));
this.view_TabsMenu.add$javax_swing_JMenuItem(this.tabItems[i]);
}
if (this.frame.getTabCount$() == 1) {
this.tabItems[0].setEnabled$Z(false);
}$I$(32).setMenuFonts$javax_swing_JMenu(this.viewMenu);
this.setMenuTainted$I$Z(32, false);
}for (var i=0; i < this.tabItems.length; i++) {
this.tabItems[i].setSelected$Z(i == this.frame.getSelectedTab$());
}
});

Clazz.newMeth(C$, 'refreshHelpMenu$Z',  function (opening) {
if (p$1.isTainted$I.apply(this, [64])) {
C$.getTrackerHelpMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(this.panel$(), this.helpMenu);
this.setMenuTainted$I$Z(64, false);
}});

Clazz.newMeth(C$, 'getTrackerHelpMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (trackerPanel, hMenu) {
var keyMask=$I$(3).getDefaultToolkit$().getMenuShortcutKeyMask$();
if (hMenu == null ) hMenu=Clazz.new_($I$(4,1));
 else hMenu.removeAll$();
hMenu.setText$S($I$(5).getString$S("TMenuBar.Menu.Help"));
var helpMenu=hMenu;
var startItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.GettingStarted") + "..."],$I$(6,1).c$$S);
startItem.addActionListener$java_awt_event_ActionListener((P$.TMenuBar$lambda46$||(P$.TMenuBar$lambda46$=(((P$.TMenuBar$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var quickStartURL="https://www.youtube.com/watch?v=n4Eqy60yYUY";
$I$(40).displayURL$S(quickStartURL);
});
})()
), Clazz.new_(P$.TMenuBar$lambda46.$init$,[this, null]))))));
helpMenu.add$javax_swing_JMenuItem(startItem);
if (!$I$(15).isJS) {
var helpItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.TrackerHelp")],$I$(6,1).c$$S);
helpItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["H".$c(), keyMask]));
helpItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var c=this.$finals$.helpMenu.getTopLevelAncestor$.apply(this.$finals$.helpMenu, []);
if (Clazz.instanceOf(c, "org.opensourcephysics.cabrillo.tracker.TFrame")) {
var frame=c;
frame.showHelp$S$I.apply(frame, [null, 0]);
}});
})()
), Clazz.new_(P$.TMenuBar$lambda47.$init$,[this, {helpMenu:helpMenu}])));
helpMenu.add$javax_swing_JMenuItem(helpItem);
}var onlineHelpItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.OnlineHelp") + "..."],$I$(6,1).c$$S);
onlineHelpItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var lang=$I$(5).locale.getLanguage$.apply($I$(5).locale, []);
if ("en".equals$O.apply("en", [lang])) {
$I$(40,"displayURL$S",["https://" + $I$(2).trackerWebsite + "/help/frameset.html" ]);
} else {
var english=$I$(41).ENGLISH.getDisplayLanguage$java_util_Locale.apply($I$(41).ENGLISH, [$I$(5).locale]);
var language=$I$(5).locale.getDisplayLanguage$java_util_Locale.apply($I$(5).locale, [$I$(5).locale]);
var message=$I$(5).getString$S("TMenuBar.Dialog.Translate.Message1") + "\n" + $I$(5).getString$S("TMenuBar.Dialog.Translate.Message2") + " " + language + "." + "\n" + $I$(5).getString$S("TMenuBar.Dialog.Translate.Message3") ;
var frame=this.$finals$.trackerPanel == null  ? null : this.$finals$.trackerPanel.getTFrame$.apply(this.$finals$.trackerPanel, []);
var response=$I$(26,"showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[frame, message, $I$(5).getString$S("TMenuBar.Dialog.Translate.Title"), 1, 3, null, Clazz.array(String, -1, [english, language, $I$(5).getString$S("Dialog.Button.Cancel")]), language]);
if (response == 1) {
var helpURL="https://translate.google.com/translate?hl=en&sl=en&tl=" + lang + "&u=https://opensourcephysics.github.io/tracker-website/help/frameset.html" ;
$I$(40).displayURL$S(helpURL);
} else if (response == 0) {
$I$(40,"displayURL$S",["https://" + $I$(2).trackerWebsite + "/help/frameset.html" ]);
}}});
})()
), Clazz.new_(P$.TMenuBar$lambda48.$init$,[this, {trackerPanel:trackerPanel}])));
helpMenu.add$javax_swing_JMenuItem(onlineHelpItem);
var discussionHelpItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.ForumHelp") + "..."],$I$(6,1).c$$S);
discussionHelpItem.addActionListener$java_awt_event_ActionListener((P$.TMenuBar$lambda49$||(P$.TMenuBar$lambda49$=(((P$.TMenuBar$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var helpURL="https://www.compadre.org/osp/bulletinboard/ForumDetails.cfm?FID=57";
$I$(40).displayURL$S(helpURL);
});
})()
), Clazz.new_(P$.TMenuBar$lambda49.$init$,[this, null]))))));
helpMenu.add$javax_swing_JMenuItem(discussionHelpItem);
if (!$I$(15).isJS && $I$(2).trackerHome != null   && $I$(2).readmeAction != null  ) helpMenu.add$javax_swing_Action($I$(2).readmeAction);
var hintsItem=Clazz.new_([$I$(5).getString$S("Tracker.MenuItem.Hints")],$I$(16,1).c$$S);
hintsItem.setSelected$Z($I$(2).showHints);
hintsItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(2).showHints=this.$finals$.hintsItem.isSelected$.apply(this.$finals$.hintsItem, []);
$I$(2).startupHintShown=false;
if (this.$finals$.trackerPanel == null ) return;
var frame=this.$finals$.trackerPanel.getTFrame$.apply(this.$finals$.trackerPanel, []);
frame.getTrackBar$Integer$Z.apply(frame, [this.$finals$.trackerPanel.getID$.apply(this.$finals$.trackerPanel, []), true]).rebuild$.apply(frame.getTrackBar$Integer$Z.apply(frame, [this.$finals$.trackerPanel.getID$.apply(this.$finals$.trackerPanel, []), true]), []);
this.$finals$.trackerPanel.setCursorForMarking$Z$java_awt_event_InputEvent.apply(this.$finals$.trackerPanel, [false, null]);
var views=frame.getTViews$Integer$I$java_util_List.apply(frame, [this.$finals$.trackerPanel.getID$.apply(this.$finals$.trackerPanel, []), 0, null]);
for (var i=0; i < views.size$.apply(views, []); i++) {
var v=views.get$I.apply(views, [i]);
var trackView=v.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack.apply(v, [v.getSelectedTrack$.apply(v, [])]);
var plotView=trackView;
if (plotView != null ) {
for (var plot, $plot = 0, $$plot = plotView.getPlots$.apply(plotView, []); $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.plotData$.apply(plot, []);
}
}}
});
})()
), Clazz.new_(P$.TMenuBar$lambda50.$init$,[this, {hintsItem:hintsItem,trackerPanel:trackerPanel}])));
if (!$I$(15).isMac$()) {
helpMenu.addSeparator$();
helpMenu.add$javax_swing_JMenuItem(hintsItem);
}if (!$I$(15).isJS) {
var trackerOnlineItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.TrackerOnline")],$I$(6,1).c$$S);
trackerOnlineItem.addActionListener$java_awt_event_ActionListener((P$.TMenuBar$lambda51$||(P$.TMenuBar$lambda51$=(((P$.TMenuBar$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var uRL="https://opensourcephysics.github.io/tracker-online/";
$I$(40).displayURL$S(uRL);
});
})()
), Clazz.new_(P$.TMenuBar$lambda51.$init$,[this, null]))))));
helpMenu.addSeparator$();
helpMenu.add$javax_swing_JMenuItem(trackerOnlineItem);
} else {
var trackerHomeItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.TrackerHome")],$I$(6,1).c$$S);
trackerHomeItem.addActionListener$java_awt_event_ActionListener((P$.TMenuBar$lambda52$||(P$.TMenuBar$lambda52$=(((P$.TMenuBar$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var uRL="https://opensourcephysics.github.io/tracker-website/";
$I$(40).displayURL$S(uRL);
});
})()
), Clazz.new_(P$.TMenuBar$lambda52.$init$,[this, null]))))));
helpMenu.addSeparator$();
helpMenu.add$javax_swing_JMenuItem(trackerHomeItem);
}var showDiagnostics=trackerPanel == null  ? $I$(2).getDefaultConfig$().contains$O("help.diagnostics") : trackerPanel.isEnabled$S("help.diagnostics");
if (showDiagnostics) {
helpMenu.addSeparator$();
var diagMenu=Clazz.new_([$I$(5).getString$S("TMenuBar.Menu.Diagnostics")],$I$(4,1).c$$S);
helpMenu.add$javax_swing_JMenuItem(diagMenu);
var logItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.MessageLog")],$I$(6,1).c$$S);
logItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["L".$c(), keyMask]));
logItem.addActionListener$java_awt_event_ActionListener((P$.TMenuBar$lambda53$||(P$.TMenuBar$lambda53$=(((P$.TMenuBar$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(24).showLogInvokeLater$();
});
})()
), Clazz.new_(P$.TMenuBar$lambda53.$init$,[this, null]))))));
diagMenu.add$javax_swing_JMenuItem(logItem);
if ($I$(2).startLogAction != null ) {
var item=diagMenu.add$javax_swing_Action($I$(2).startLogAction);
item.setToolTipText$S(System.getenv$S("START_LOG"));
}if ($I$(2).trackerPrefsAction != null ) {
var item=diagMenu.add$javax_swing_Action($I$(2).trackerPrefsAction);
item.setToolTipText$S($I$(42,"forwardSlash$S",[$I$(2).prefsPath]));
}diagMenu.addSeparator$();
if ($I$(2).aboutJavaAction != null ) diagMenu.add$javax_swing_Action($I$(2).aboutJavaAction);
if ($I$(2).aboutXuggleAction != null ) diagMenu.add$javax_swing_Action($I$(2).aboutXuggleAction);
if ($I$(2).aboutThreadsAction != null ) diagMenu.add$javax_swing_Action($I$(2).aboutThreadsAction);
}helpMenu.addSeparator$();
if (!$I$(15).isJS) {
var checkForUpgradeItem=Clazz.new_([$I$(5).getString$S("TMenuBar.MenuItem.CheckForUpgrade.Text")],$I$(6,1).c$$S);
checkForUpgradeItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
Clazz.new_([((P$.TMenuBar$lambda54$55||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda54$55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(2).showUpgradeStatus$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.trackerPanel);
});
})()
), Clazz.new_(P$.TMenuBar$lambda54$55.$init$,[this, {trackerPanel:this.$finals$.trackerPanel}]))],$I$(43,1).c$$Runnable).start$.apply(Clazz.new_([((P$.TMenuBar$lambda54$56||
(function(){/*m*/var C$=Clazz.newClass(P$, "TMenuBar$lambda54$56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(2).showUpgradeStatus$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.trackerPanel);
});
})()
), Clazz.new_(P$.TMenuBar$lambda54$56.$init$,[this, {trackerPanel:this.$finals$.trackerPanel}]))],$I$(43,1).c$$Runnable), []);
});
})()
), Clazz.new_(P$.TMenuBar$lambda54.$init$,[this, {trackerPanel:trackerPanel}])));
helpMenu.add$javax_swing_JMenuItem(checkForUpgradeItem);
}if ($I$(2).aboutTrackerAction != null ) helpMenu.add$javax_swing_Action($I$(2).aboutTrackerAction);
$I$(32).setMenuFonts$javax_swing_JMenu(helpMenu);
return helpMenu;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
var panel=this.panel$();
panel.removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
var video=panel.getVideo$();
if (video != null ) {
video.getFilterStack$().removePropertyChangeListener$S$java_beans_PropertyChangeListener("filter", this);
}for (var t, $t = $I$(37).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}
this.actions=null;
if (this.edit_copyViewImageItems != null ) for (var i=0; i < this.edit_copyViewImageItems.length; i++) {
this.edit_copyViewImageItems[i]=null;
}
this.panelID=null;
this.frame=null;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "selectedtrack":
case "datafile":
case "selectedpoint":
case "video":
case "size":
case "locked":
case "loaded":
break;
case "filter":
if (this.refreshing) {
return;
}var filter=e.getOldValue$();
if (filter != null ) {
$I$(14,"postFilterDelete$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter",[this.panel$(), filter]);
}break;
case "track":
if (Clazz.instanceOf(e.getOldValue$(), "org.opensourcephysics.cabrillo.tracker.TTrack")) {
var track=e.getOldValue$();
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
this.panel$().setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}break;
case "clear":
for (var t, $t = $I$(37).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}
break;
default:
return;
}
this.refresh$S("property:?" + " " + e.getPropertyName$() );
});

Clazz.newMeth(C$, 'getDataViews$',  function () {
var dataViews=Clazz.new_($I$(44,1));
if (this.frame == null ) return dataViews;
var choosers=this.frame.getVisibleChoosers$Integer(this.panel$().getID$());
for (var i=0; i < choosers.length; i++) {
if (choosers[i] != null ) {
var tview=choosers[i].getSelectedView$();
if (tview != null  && tview.getViewType$() == 1 ) {
var tableView=tview;
var track=tableView.getSelectedTrack$();
if (track != null ) {
for (var step, $step = 0, $$step = track.getSteps$(); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step != null ) {
var trackView=tableView.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (trackView != null ) dataViews.put$O$O(Integer.valueOf$I(i + 1), trackView);
}}
}}}}
return dataViews;
});

Clazz.newMeth(C$, 'refreshPopup$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S$javax_swing_JPopupMenu',  function (panel, item, menu) {
var menubar=panel.getMenuBar$Z(false);
if (menubar != null ) {
switch (item) {
case "TToolBar.tracks":
menubar.refreshTracksPopup$javax_swing_JPopupMenu(menu);
return;
case "TrackControl.tracks":
menubar.refreshTrackControlPopup$javax_swing_JPopupMenu(menu);
menubar.setMenuTainted$I$Z(16, true);
return;
case "MainTView.popup":
p$1.refreshMainTViewPopup$javax_swing_JPopupMenu.apply(menubar, [menu]);
}
}}, 1);

Clazz.newMeth(C$, 'refreshMeasuringToolsMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu',  function (panel, menu) {
var menubar=panel.getMenuBar$Z(false);
if (menubar != null ) p$1.refreshMeasuringToolsMenu$javax_swing_JMenu.apply(menubar, [menu]);
}, 1);

Clazz.newMeth(C$, 'refreshTrackControlPopup$javax_swing_JPopupMenu',  function (popup) {
var menu=Clazz.new_($I$(4,1));
var noTools=false;
p$1.refreshTracksCreateMenu$javax_swing_JMenu$I$Z.apply(this, [menu, this.enabledNewTrackCount, noTools]);
$I$(32).setMenuFonts$javax_swing_JMenu(menu);
var n=menu.getPopupMenu$().getComponentCount$();
popup.removeAll$();
for (var i=0; i < n; i++) {
var item=menu.getPopupMenu$().getComponent$I(0);
if (item != null ) popup.add$java_awt_Component(item);
}
return popup;
});

Clazz.newMeth(C$, 'refreshTracksPopup$javax_swing_JPopupMenu',  function (newPopup) {
this.refreshTrackMenu$Z$javax_swing_JPopupMenu(true, newPopup);
newPopup.removeAll$();
newPopup.add$javax_swing_JMenuItem(this.track_createMenu);
if (this.track_cloneMenu.getItemCount$() > 0) newPopup.add$javax_swing_JMenuItem(this.track_cloneMenu);
return newPopup;
});

Clazz.newMeth(C$, 'refreshMainTViewPopup$javax_swing_JPopupMenu',  function (popup) {
if (this.panel$().getVideo$() != null  && this.panel$().isEnabled$S("video.filters") ) {
this.refreshVideoMenu$Z(true);
if (this.videoFiltersMenuItems.length > 0) {
popup.addSeparator$();
this.popupVideoFiltersMenu.removeAll$();
p$1.addItems$javax_swing_JMenu$java_awt_ComponentA.apply(this, [this.popupVideoFiltersMenu, this.videoFiltersMenuItems]);
popup.add$javax_swing_JMenuItem(this.popupVideoFiltersMenu);
}}this.refreshTrackMenu$Z$javax_swing_JPopupMenu(true, this.trackMenu.getPopupMenu$());
this.popupTracksMenu.removeAll$();
p$1.addItems$javax_swing_JMenu$java_awt_ComponentA.apply(this, [this.popupTracksMenu, this.tracksMenuItems]);
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(this.popupTracksMenu);
}, p$1);

Clazz.newMeth(C$, 'refreshMeasuringToolsMenu$javax_swing_JMenu',  function (menu) {
menu.removeAll$();
var panel=this.panel$();
if (panel.isEnabled$S("new.tapeMeasure")) menu.add$javax_swing_JMenuItem(this.track_newTapeItem);
if (panel.isEnabled$S("new.protractor")) menu.add$javax_swing_JMenuItem(this.track_newProtractorItem);
if (panel.isEnabled$S("new.circleFitter")) menu.add$javax_swing_JMenuItem(this.track_newCircleFitterItem);
}, p$1);

Clazz.newMeth(C$, 'addItems$javax_swing_JMenu$java_awt_ComponentA',  function (menu, items) {
for (var i=0; i < items.length; i++) menu.add$java_awt_Component(items[i]);

}, p$1);

Clazz.newMeth(C$, 'checkMatSize$',  function () {
var panel=this.panel$();
var isVideoSize=panel.getVideo$() != null  && this.edit_matSizeMenu.getMenuComponents$().length == 0 ;
if (!isVideoSize) {
for (var c, $c = 0, $$c = this.edit_matSizeMenu.getMenuComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c === this.edit_matsize_videoSizeItem  && this.edit_matsize_videoSizeItem.isSelected$() ) isVideoSize=true;
}
}var mat=panel.getMatBounds$();
if (mat != null ) {
if (isVideoSize) {
var dim=mat.getSize$();
var vidWidth=panel.getVideo$().getImage$().getWidth$();
var vidHeight=panel.getVideo$().getImage$().getHeight$();
if (vidWidth != dim.width || vidHeight != dim.height ) {
panel.setImageSize$D$D(vidWidth, vidHeight);
}} else {
this.panel$().setImageSize$D$D(mat.width, mat.height);
}var toolbar=panel.getToolBar$Z(false);
if (toolbar != null ) toolbar.refreshZoomButton$();
}});

Clazz.newMeth(C$, 'setLangMenu$javax_swing_JMenu$org_opensourcephysics_cabrillo_tracker_TFrame',  function (menu, frame) {
var languageAction=((P$.TMenuBar$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.frame.setLanguage$S(e.getActionCommand$());
});
})()
), Clazz.new_($I$(8,1),[this, {frame:frame}],P$.TMenuBar$10));
menu.removeAll$();
var languageGroup=Clazz.new_($I$(19,1));
var selected=null;
var locales=$I$(2).getLocales$();
for (var i=0; i < locales.length; i++) {
var loc=locales[i];
var lang=$I$(15).getDisplayLanguage$java_util_Locale(loc);
var co=loc.getCountry$();
if (co != null  && co !== ""  ) {
lang+=" (" + co + ")" ;
} else if (!$I$(15).isJS && loc.getLanguage$().equals$O("ko") ) {
lang="Korean";
}var item=Clazz.new_($I$(20,1).c$$S,[lang]);
item.setActionCommand$S(loc.toString());
item.addActionListener$java_awt_event_ActionListener(languageAction);
menu.add$javax_swing_JMenuItem(item);
languageGroup.add$javax_swing_AbstractButton(item);
if (loc.equals$O($I$(5).locale)) {
selected=item;
}}
var otherLanguageItem=Clazz.new_($I$(6,1).c$$S,["Other"]);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(otherLanguageItem);
otherLanguageItem.addActionListener$java_awt_event_ActionListener(((P$.TMenuBar$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TMenuBar$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(26).showMessageDialog$java_awt_Component$O$S$I(this.$finals$.frame, "Do you speak a language not yet available in Tracker?\nTo learn more about translating Tracker into your language\nplease contact Douglas Brown at dobrown@cabrillo.edu.", "New Translation", 1);
});
})()
), Clazz.new_(P$.TMenuBar$11.$init$,[this, {frame:frame}])));
(selected == null  ? menu.getItem$I(0) : selected).setSelected$Z(true);
$I$(32).setMenuFonts$javax_swing_JMenu(menu);
}, 1);

Clazz.newMeth(C$, 'checkAddMenuSep$javax_swing_JMenu',  function (menu) {
var n=menu.getItemCount$();
if (n > 0 && menu.getItem$I(n - 1) != null  ) menu.addSeparator$();
}, 1);

Clazz.newMeth(C$, 'dispose$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
System.out.println$S("TMenuBar.dispose " + this.panelID);
this.panelID=null;
this.frame=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(24).finalized$O(this);
});

Clazz.newMeth(C$, 'toString',  function () {
return "[TMenuBar " + this.panelID + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.panelProps=Clazz.array(String, -1, ["loaded", "locked", "track", "clear", "selectedtrack", "selectedpoint", "video", "size", "datafile"]);
C$.testing=false;
C$.baseMatSizes=Clazz.array(String, -1, ["480x360", "640x480", "960x720", "1280x960", "1600x1200", "2400x1800"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
