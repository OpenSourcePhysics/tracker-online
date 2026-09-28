(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','org.opensourcephysics.cabrillo.tracker.PropertiesDialog',['org.opensourcephysics.cabrillo.tracker.PropertiesDialog','.PropertyCellRenderer'],'java.util.ArrayList','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTabbedPane','org.opensourcephysics.controls.XML',['org.opensourcephysics.cabrillo.tracker.PropertiesDialog','.TRKTableModel'],'org.opensourcephysics.tools.ResourceLoader','javax.swing.JTable','javax.swing.ToolTipManager','javax.swing.JButton','java.awt.Toolkit','java.awt.datatransfer.StringSelection','java.text.NumberFormat','org.opensourcephysics.cabrillo.tracker.TrackerIO',['org.opensourcephysics.cabrillo.tracker.PropertiesDialog','.VideoTableModel'],'javax.swing.JLabel','javax.swing.JTextField','javax.swing.JToolBar','javax.swing.BorderFactory','javax.swing.Box','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PropertiesDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['VideoTableModel',0],['TRKTableModel',0],['PropertyCellRenderer',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cellRenderer=Clazz.new_($I$(4,1),[this, null]);
this.vidProps=Clazz.array(String, [6]);
this.vidValues=Clazz.array(String, [6]);
this.trkProps=Clazz.new_($I$(5,1));
this.trkValues=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['hasVid'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','okButton','javax.swing.JButton','+cancelButton','authorField','javax.swing.JTextField','+contactField','authorLabel','javax.swing.JLabel','+contactLabel','tabbedPane','javax.swing.JTabbedPane','metaPanel','javax.swing.JPanel','+videoPanel','+trkPanel','videoTable','javax.swing.JTable','+trkTable','cellRenderer','org.opensourcephysics.cabrillo.tracker.PropertiesDialog.PropertyCellRenderer','vidProps','String[]','+vidValues','trkProps','java.util.ArrayList','+trkValues']]
,['O',['DARK_RED','java.awt.Color','+MEDIUM_RED','+LIGHT_RED']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
p$1.createGUI.apply(this, []);
this.setFontLevel$I($I$(6).getLevel$());
p$1.setLabelSizes.apply(this, []);
this.pack$();
this.okButton.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(6).setFonts$O$I(this, level);
var font=this.cellRenderer.getFont$();
font=$I$(6).getResizedFont$java_awt_Font$I(font, level);
if (this.videoTable != null ) {
this.videoTable.setRowHeight$I(font.getSize$() + 4);
}if (this.trkTable != null ) {
this.trkTable.setRowHeight$I(font.getSize$() + 4);
}});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (!vis && !$I$(7).isJS ) this.dispose$();
});

Clazz.newMeth(C$, 'createGUI',  function () {
this.setTitle$S($I$(1).getString$S("PropertiesDialog.Title"));
var contentPane=Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.tabbedPane=Clazz.new_($I$(10,1));
contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var path=$I$(11).forwardSlash$S(trackerPanel.openedFromPath);
var name=$I$(11).getName$S(path);
var model=null;
var button=null;
var buttonPanel=Clazz.new_($I$(8,1));
if (path != null  && path.length$() > 0 ) {
model=Clazz.new_($I$(12,1),[this, null]);
this.trkPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$java_awt_LayoutManager);
this.tabbedPane.addTab$S$java_awt_Component($I$(1).getString$S("PropertiesDialog.Tab.TrackerFile"), this.trkPanel);
this.trkProps.add$O($I$(1).getString$S("TActions.Dialog.AboutVideo.Name"));
this.trkProps.add$O($I$(1).getString$S("TActions.Dialog.AboutVideo.Path"));
path=$I$(13).getNonURIPath$S(path);
this.trkValues.add$O(name);
this.trkValues.add$O(path);
this.trkTable=Clazz.new_($I$(14,1).c$$javax_swing_table_TableModel,[model]);
this.trkTable.setBackground$java_awt_Color(this.trkPanel.getBackground$());
this.trkTable.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(String), this.cellRenderer);
this.trkTable.setSelectionMode$I(0);
this.trkTable.setColumnSelectionAllowed$Z(true);
this.trkTable.getColumnModel$().getColumn$I(0).setPreferredWidth$I(50);
this.trkTable.getColumnModel$().getColumn$I(1).setPreferredWidth$I(250);
this.trkPanel.add$java_awt_Component$O(this.trkTable.getTableHeader$(), "North");
this.trkPanel.add$java_awt_Component$O(this.trkTable, "Center");
$I$(15).sharedInstance$().setInitialDelay$I(0);
$I$(15).sharedInstance$().setDismissDelay$I(20000);
$I$(15).sharedInstance$().registerComponent$javax_swing_JComponent(this.trkTable);
button=Clazz.new_([$I$(1).getString$S("PropertiesDialog.Button.CopyFilePath")],$I$(16,1).c$$S);
button.setForeground$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[0, 0, 102]));
button.addActionListener$java_awt_event_ActionListener(((P$.PropertiesDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PropertiesDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].trkTable.setRowSelectionInterval$I$I(1, 1);
this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].trkTable.setColumnSelectionInterval$I$I(1, 1);
var s=this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].trkTable.getValueAt$I$I(1, 1).toString();
var clipboard=$I$(17).getDefaultToolkit$().getSystemClipboard$();
var stringSelection=Clazz.new_($I$(18,1).c$$S,[s]);
clipboard.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(stringSelection, stringSelection);
});
})()
), Clazz.new_(P$.PropertiesDialog$1.$init$,[this, null])));
button.setEnabled$Z(trackerPanel.openedFromPath != null );
buttonPanel.add$java_awt_Component(button);
this.trkPanel.add$java_awt_Component$O(buttonPanel, "South");
}var video=trackerPanel.getVideo$();
this.hasVid=(video != null );
var clip=trackerPanel.getPlayer$().getVideoClip$();
if (this.hasVid || clip.getVideoPath$() != null  ) {
this.videoPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$java_awt_LayoutManager);
this.tabbedPane.addTab$S$java_awt_Component($I$(1).getString$S("TMenuBar.Menu.Video"), this.videoPanel);
var format=$I$(19).getNumberInstance$();
format.setMinimumIntegerDigits$I(1);
format.setMinimumFractionDigits$I(1);
format.setMaximumFractionDigits$I(1);
name=(video == null  ? null : $I$(11,"getName$S",[video.getProperty$S("name")]));
path=clip.getVideoPath$();
path=$I$(11).forwardSlash$S(path);
path=$I$(13).getNonURIPath$S(path);
var type=null;
var size=null;
var length=null;
var fps=null;
if (video != null ) {
var videoType=video.getProperty$S("video_type");
type=videoType == null  ? video.getClass$().getSimpleName$() : videoType.getDescription$();
var n=type.lastIndexOf$S("(");
if (n > -1) {
if (Clazz.instanceOf(video, "org.opensourcephysics.media.mov.MovieVideo")) {
type=type.substring$I$I(0, n);
type+=$I$(7).isJS ? "(JS)" : "(Xuggle)";
} else if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo") && video.getProperty$S("ext") != null  ) {
var ext=video.getProperty$S("ext");
type=type.substring$I$I(0, n);
type+="(" + ext.toUpperCase$() + ")" ;
}}var d=video.getImageSize$Z(false);
var w=d.width;
var h=d.height;
size=w + " x " + h ;
length=video.getFrameCount$() + " ";
length+=$I$(1).getString$S("TActions.Dialog.AboutVideo.Frames");
var dt=trackerPanel.getPlayer$().getClipControl$().getMeanFrameDuration$();
var frameRate=video.getFrameCount$() <= 1 ? 0 : 1000 / dt;
fps=frameRate == 0  ? "" : format.format$D(frameRate) + " ";
if (frameRate > 0 ) fps+=$I$(1).getString$S("TActions.Dialog.AboutVideo.FramesPerSecond");
var badFrames=$I$(20,"findBadVideoFrames$org_opensourcephysics_cabrillo_tracker_TrackerPanel$D$Z$Z$Z",[trackerPanel, $I$(20).defaultBadFrameTolerance, false, false, false]);
if (!badFrames.isEmpty$()) {
fps+=" (" + $I$(1).getString$S("TActions.Dialog.AboutVideo.FramesPerSecond.NotConstant") + ")" ;
}}this.vidProps[0]=$I$(1).getString$S("TActions.Dialog.AboutVideo.Name");
this.vidProps[1]=$I$(1).getString$S("TActions.Dialog.AboutVideo.Path");
this.vidProps[2]=$I$(1).getString$S("TActions.Dialog.AboutVideo.Type");
this.vidProps[3]=$I$(1).getString$S("TActions.Dialog.AboutVideo.Size");
this.vidProps[4]=$I$(1).getString$S("TActions.Dialog.AboutVideo.Length");
this.vidProps[5]=$I$(1).getString$S("TActions.Dialog.AboutVideo.FrameRate");
this.vidValues[0]=name;
this.vidValues[1]=path;
this.vidValues[2]=type;
this.vidValues[3]=size;
this.vidValues[4]=length;
this.vidValues[5]=fps;
model=Clazz.new_($I$(21,1),[this, null]);
this.videoTable=Clazz.new_($I$(14,1).c$$javax_swing_table_TableModel,[model]);
this.videoTable.setBackground$java_awt_Color(this.videoPanel.getBackground$());
this.videoTable.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(String), this.cellRenderer);
this.videoTable.setSelectionMode$I(0);
this.videoTable.setColumnSelectionAllowed$Z(true);
this.videoTable.getColumnModel$().getColumn$I(0).setPreferredWidth$I(50);
this.videoTable.getColumnModel$().getColumn$I(1).setPreferredWidth$I(250);
this.videoPanel.add$java_awt_Component$O(this.videoTable.getTableHeader$(), "North");
this.videoPanel.add$java_awt_Component$O(this.videoTable, "Center");
$I$(15).sharedInstance$().registerComponent$javax_swing_JComponent(this.videoTable);
button=Clazz.new_([$I$(1).getString$S("PropertiesDialog.Button.CopyVideoPath")],$I$(16,1).c$$S);
button.setForeground$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[0, 0, 102]));
button.addActionListener$java_awt_event_ActionListener(((P$.PropertiesDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PropertiesDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].videoTable.setRowSelectionInterval$I$I(1, 1);
this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].videoTable.setColumnSelectionInterval$I$I(1, 1);
var s=this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].videoTable.getValueAt$I$I(1, 1).toString();
var clipboard=$I$(17).getDefaultToolkit$().getSystemClipboard$();
var stringSelection=Clazz.new_($I$(18,1).c$$S,[s]);
clipboard.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(stringSelection, stringSelection);
});
})()
), Clazz.new_(P$.PropertiesDialog$2.$init$,[this, null])));
button.setEnabled$Z(!path.equals$O(""));
buttonPanel=Clazz.new_($I$(8,1));
buttonPanel.add$java_awt_Component(button);
this.videoPanel.add$java_awt_Component$O(buttonPanel, "South");
}this.metaPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$java_awt_LayoutManager);
this.tabbedPane.addTab$S$java_awt_Component($I$(1).getString$S("PropertiesDialog.Tab.Metadata"), this.metaPanel);
this.authorLabel=Clazz.new_([$I$(1).getString$S("PropertiesDialog.Label.Author")],$I$(22,1).c$$S);
this.authorField=Clazz.new_($I$(23,1).c$$I,[30]);
this.authorField.setText$S(trackerPanel.author);
var authorbar=Clazz.new_($I$(24,1));
authorbar.setBorder$javax_swing_border_Border($I$(25).createEmptyBorder$I$I$I$I(6, 4, 2, 4));
authorbar.setFloatable$Z(false);
authorbar.setOpaque$Z(false);
authorbar.add$java_awt_Component(this.authorLabel);
authorbar.add$java_awt_Component(this.authorField);
this.contactLabel=Clazz.new_([$I$(1).getString$S("PropertiesDialog.Label.Contact")],$I$(22,1).c$$S);
this.contactField=Clazz.new_($I$(23,1).c$$I,[30]);
this.contactField.setText$S(trackerPanel.contact);
var contactbar=Clazz.new_($I$(24,1));
contactbar.setBorder$javax_swing_border_Border($I$(25).createEmptyBorder$I$I$I$I(2, 4, 2, 4));
contactbar.setFloatable$Z(false);
contactbar.setOpaque$Z(false);
contactbar.add$java_awt_Component(this.contactLabel);
contactbar.add$java_awt_Component(this.contactField);
var box=$I$(26).createVerticalBox$();
box.add$java_awt_Component(authorbar);
box.add$java_awt_Component(contactbar);
this.metaPanel.add$java_awt_Component$O(box, "North");
this.okButton=Clazz.new_([$I$(1).getString$S("Dialog.Button.OK")],$I$(16,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.PropertiesDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PropertiesDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var s=this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].authorField.getText$();
this.$finals$.trackerPanel.author="".equals$O(s) ? null : s;
s=this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].contactField.getText$();
this.$finals$.trackerPanel.contact="".equals$O(s) ? null : s;
this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'], [false]);
});
})()
), Clazz.new_(P$.PropertiesDialog$3.$init$,[this, {trackerPanel:trackerPanel}])));
this.cancelButton=Clazz.new_([$I$(1).getString$S("Dialog.Button.Cancel")],$I$(16,1).c$$S);
this.cancelButton.setForeground$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[0, 0, 102]));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.PropertiesDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PropertiesDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'], [false]);
});
})()
), Clazz.new_(P$.PropertiesDialog$4.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(8,1));
buttonbar.setBorder$javax_swing_border_Border($I$(25).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.okButton);
buttonbar.add$java_awt_Component(this.cancelButton);
}, p$1);

Clazz.newMeth(C$, 'setLabelSizes',  function () {
var labels=Clazz.new_($I$(5,1));
labels.add$O(this.authorLabel);
labels.add$O(this.contactLabel);
var font=this.authorLabel.getFont$();
var w=0;
for (var next, $next = labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$() + " ", $I$(7).frc);
w=Math.max(w, (rect.getWidth$()|0) + 1);
}
var labelSize=Clazz.new_($I$(27,1).c$$I$I,[w, 20]);
for (var next, $next = labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setBorder$javax_swing_border_Border($I$(25).createEmptyBorder$I$I$I$I(1, 1, 1, 2));
next.setPreferredSize$java_awt_Dimension(labelSize);
next.setHorizontalAlignment$I(11);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.DARK_RED=Clazz.new_($I$(2,1).c$$I$I$I,[220, 0, 0]);
C$.MEDIUM_RED=Clazz.new_($I$(2,1).c$$I$I$I,[255, 120, 140]);
C$.LIGHT_RED=Clazz.new_($I$(2,1).c$$I$I$I,[255, 180, 200]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertiesDialog, "VideoTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].vidProps.length;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
return col == 0 ? this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].vidProps[row] : this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].vidValues[row];
});

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return col == 0 ? $I$(1).getString$S("PropertiesDialog.Header.Property") : $I$(1).getString$S("PropertiesDialog.Header.Value");
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (col) {
return Clazz.getClass(String);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertiesDialog, "TRKTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].trkProps.size$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
return col == 0 ? this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].trkProps.get$I(row) : this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].trkValues.get$I(row);
});

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return col == 0 ? $I$(1).getString$S("PropertiesDialog.Header.Property") : $I$(1).getString$S("PropertiesDialog.Header.Value");
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (col) {
return Clazz.getClass(String);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertiesDialog, "PropertyCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, val, selected, hasFocus, row, col) {
this.setToolTipText$S(row == 1 && col == 1  && val != null   ? val.toString() : null);
this.setBackground$java_awt_Color($I$(2).white);
var c=C$.superclazz.prototype.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I.apply(this, [table, val, selected, hasFocus, row, col]);
var red=col == 1 && table === this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].videoTable   && !this.b$['org.opensourcephysics.cabrillo.tracker.PropertiesDialog'].hasVid  && val != null  ;
this.setForeground$java_awt_Color(red ? $I$(3).DARK_RED : $I$(2).black);
if (red) {
this.setBackground$java_awt_Color(selected ? $I$(3).MEDIUM_RED : $I$(3).LIGHT_RED);
}return c;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
