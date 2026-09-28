(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TView','javax.swing.Box','javax.swing.JPopupMenu','java.awt.BorderLayout','javax.swing.JPanel','java.awt.CardLayout','javax.swing.BorderFactory','javax.swing.JToolBar','org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','org.opensourcephysics.cabrillo.tracker.TButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JMenuItem','org.opensourcephysics.tools.FontSizer','java.awt.Dimension','org.opensourcephysics.cabrillo.tracker.PlotTView','org.opensourcephysics.cabrillo.tracker.TableTView','org.opensourcephysics.cabrillo.tracker.WorldTView','org.opensourcephysics.cabrillo.tracker.PageTView',['org.opensourcephysics.cabrillo.tracker.TViewChooser','.Loader'],['org.opensourcephysics.display.OSPRuntime','.Disposable'],'java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TViewChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['java.beans.PropertyChangeListener', ['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable']]);
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tViews=Clazz.array($I$(2), [4]);
this.selectedType=-1;
this.toolbarFiller=$I$(3).createHorizontalGlue$();
this.popup=Clazz.new_($I$(4,1));
this.panesPopup=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['ignoreSelectedTrack'],'I',['selectedType'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','tViews','org.opensourcephysics.cabrillo.tracker.TView[]','selectedView','org.opensourcephysics.cabrillo.tracker.TView','toolbar','javax.swing.JToolBar','toolbarFiller','java.awt.Component','maximizeButton','org.opensourcephysics.cabrillo.tracker.TButton','+chooseViewButton','viewPanel','javax.swing.JPanel','chooserButton','javax.swing.JButton','popup','javax.swing.JPopupMenu','+panesPopup']]
,['O',['MAXIMIZE_ICON','javax.swing.Icon','+RESTORE_ICON','+DOWN_ARROW_ICON','+RIGHT_ARROW_ICON']]]

Clazz.newMeth(C$, 'isMaximized$',  function () {
var panel=this.getTrackerPanel$();
return panel != null  && (panel.getMaximizedView$() != -1) ;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (panel, type) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(5,1))]);C$.$init$.apply(this);
this.setName$S("TViewChooser " + type);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
panel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
panel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("clear", this);
this.viewPanel=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.viewPanel.setBorder$javax_swing_border_Border($I$(8).createEmptyBorder$());
this.add$java_awt_Component$O(this.viewPanel, "Center");
this.toolbar=Clazz.new_($I$(9,1));
this.toolbar.setFloatable$Z(false);
this.toolbar.addMouseListener$java_awt_event_MouseListener(((P$.TViewChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TViewChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].toolbar.requestFocusInWindow$();
if (e.getClickCount$() == 2) {
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].maximizeButton.doClick$I(0);
}if ($I$(10).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].showToolbarPopup$I$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'], [e.getX$(), e.getY$()]);
}});
})()
), Clazz.new_($I$(11,1),[this, null],P$.TViewChooser$1)));
this.toolbar.setBorder$javax_swing_border_Border($I$(8).createEtchedBorder$());
this.add$java_awt_Component$O(this.toolbar, "North");
this.chooserButton=((P$.TViewChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TViewChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].getChooserPopup$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'], []);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.TViewChooser$2));
var empty=$I$(8).createEmptyBorder$I$I$I$I(7, 3, 7, 3);
var etched=$I$(8).createEtchedBorder$();
this.maximizeButton=Clazz.new_($I$(12,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.MAXIMIZE_ICON, C$.RESTORE_ICON]);
this.maximizeButton.setHorizontalTextPosition$I(2);
this.maximizeButton.setName$S(String.valueOf$I(type + 1));
this.maximizeButton.setBorder$javax_swing_border_Border($I$(8).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.maximizeButton.addActionListener$java_awt_event_ActionListener(((P$.TViewChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TViewChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].isMaximized$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].maximize$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'], []);
} else this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].restore$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'], []);
});
})()
), Clazz.new_(P$.TViewChooser$3.$init$,[this, null])));
this.chooseViewButton=((P$.TViewChooser$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TViewChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup.removeAll$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar == null ) return this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup;
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar.refreshViewMenu$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar.getMenuItem$S("view_mainItem"));
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar.getMenuItem$S("view_1Item"));
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar.getMenuItem$S("view_2Item"));
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar.getMenuItem$S("view_3Item"));
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.currentMenuBar.getMenuItem$S("view_4Item"));
return this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].panesPopup;
});
})()
), Clazz.new_($I$(12,1).c$$javax_swing_Icon,[this, null, C$.RIGHT_ARROW_ICON],P$.TViewChooser$4));
this.chooseViewButton.setBorder$javax_swing_border_Border($I$(8).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.chooseViewButton.alignPopup=4;
this.setSelectedViewType$I(type);
}, 1);

Clazz.newMeth(C$, 'refreshMaximizeButton',  function () {
var maximized=this.isMaximized$();
this.maximizeButton.setIcon$javax_swing_Icon(maximized ? C$.RESTORE_ICON : C$.MAXIMIZE_ICON);
this.maximizeButton.setToolTipText$S(maximized ? $I$(13).getString$S("TViewChooser.Restore.Tooltip") : $I$(13).getString$S("TViewChooser.Maximize.Tooltip"));
this.maximizeButton.setText$S($I$(13).getString$S("TMenuBar.Menu.Window") + " " + this.maximizeButton.getName$() );
this.chooseViewButton.setToolTipText$S($I$(13).getString$S("TViewChooser.NextView.Tooltip"));
}, p$1);

Clazz.newMeth(C$, 'showToolbarPopup$I$I',  function (x, y) {
var view=this.getSelectedView$();
if (view == null ) return;
var popup=Clazz.new_($I$(4,1));
view.refreshPopup$javax_swing_JPopupMenu(popup);
var helpItem=Clazz.new_([$I$(13).getString$S("Dialog.Button.Help") + "..."],$I$(14,1).c$$S);
helpItem.addActionListener$java_awt_event_ActionListener(((P$.TViewChooser$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TViewChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (this.$finals$.view.getViewType$()) {
case 3:
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.showHelp$S$I("textview", 0);
break;
case 1:
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.showHelp$S$I("datatable", 0);
break;
case 0:
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.showHelp$S$I("plot", 0);
break;
case 2:
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].frame.showHelp$S$I("GUI", 0);
break;
}
});
})()
), Clazz.new_(P$.TViewChooser$5.$init$,[this, {view:view}])));
popup.add$javax_swing_JMenuItem(helpItem);
$I$(15,"setFonts$O$I",[popup, $I$(15).getLevel$()]);
popup.show$java_awt_Component$I$I(this.toolbar, x, y);
});

Clazz.newMeth(C$, 'getChooserPopup$',  function () {
var listener=((P$.TViewChooser$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TViewChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'].setSelectedViewType$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TViewChooser'], [i]);
});
})()
), Clazz.new_(P$.TViewChooser$6.$init$,[this, null]));
this.popup.removeAll$();
var item;
for (var i=0; i < $I$(2).VIEW_NAMES.length; i++) {
var name=$I$(13,"getString$S",[$I$(2).VIEW_NAMES[i]]);
item=Clazz.new_([name, $I$(2).VIEW_ICONS[i]],$I$(14,1).c$$S$javax_swing_Icon);
item.setActionCommand$S("" + i);
item.addActionListener$java_awt_event_ActionListener(listener);
this.popup.add$javax_swing_JMenuItem(item);
}
$I$(15,"setFonts$O$I",[this.popup, $I$(15).getLevel$()]);
return this.popup;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return Clazz.new_($I$(16,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
});

Clazz.newMeth(C$, 'getTViews$',  function () {
return this.tViews;
});

Clazz.newMeth(C$, 'getTView$Class',  function (c) {
for (var view, $view = 0, $$view = this.tViews; $view<$$view.length&&((view=($$view[$view])),1);$view++) {
if (view != null  && view.getClass$() === c  ) return view;
}
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (c === Clazz.getClass($I$(17)) ) {
return this.tViews[0]=Clazz.new_($I$(17,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
}if (c === Clazz.getClass($I$(18)) ) {
return this.tViews[1]=Clazz.new_($I$(18,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
}if (c === Clazz.getClass($I$(19)) ) {
return this.tViews[2]=Clazz.new_($I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
}if (c === Clazz.getClass($I$(20)) ) {
return this.tViews[3]=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
}return null;
});

Clazz.newMeth(C$, 'getSelectedView$',  function () {
return this.selectedView;
});

Clazz.newMeth(C$, 'getSelectedViewType$',  function () {
return this.selectedType;
});

Clazz.newMeth(C$, 'setSelectedView$org_opensourcephysics_cabrillo_tracker_TView$Z',  function (view, newView) {
if (view == null  || this.selectedView === view  ) return;
if (newView) {
this.selectedType=Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.PlotTView") ? 0 : Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.TableTView") ? 1 : Clazz.instanceOf(view, "org.opensourcephysics.cabrillo.tracker.WorldTView") ? 2 : 3;
this.tViews[this.selectedType]=view;
p$1.refreshViewPanel.apply(this, []);
}var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.changed=true;
var selectedTrack=null;
if (this.selectedView != null ) {
this.selectedView.cleanup$();
(this.selectedView).removePropertyChangeListener$S$java_beans_PropertyChangeListener("trackview", this);
var isTrackChooser=(Clazz.instanceOf(this.selectedView, "org.opensourcephysics.cabrillo.tracker.TrackChooserTView"));
if (isTrackChooser && !this.ignoreSelectedTrack ) {
selectedTrack=(this.selectedView).getSelectedTrack$();
}this.ignoreSelectedTrack=false;
}this.selectedView=view;
view.init$();
(view).addPropertyChangeListener$S$java_beans_PropertyChangeListener("trackview", this);
if (selectedTrack != null  && Clazz.instanceOf(this.selectedView, "org.opensourcephysics.cabrillo.tracker.TrackChooserTView") ) {
(this.selectedView).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(selectedTrack);
}view.refresh$();
this.chooserButton.setIcon$javax_swing_Icon(view.getViewIcon$());
var cl=(this.viewPanel.getLayout$());
cl.show$java_awt_Container$S(this.viewPanel, $I$(2).VIEW_NAMES[this.selectedType]);
this.repaint$();
this.refreshToolbar$();
});

Clazz.newMeth(C$, 'setSelectedViewType$I',  function (type) {
if (type < 0 || type > 3 ) {
this.ignoreSelectedTrack=false;
return;
}var view=this.tViews[type];
if (type == this.selectedType) {
this.ignoreSelectedTrack=false;
if (view != null ) {
view.refresh$();
return;
}}this.selectedType=type;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (view == null ) {
switch (type) {
default:
case 0:
view=Clazz.new_($I$(17,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
break;
case 1:
view=Clazz.new_($I$(18,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
break;
case 2:
view=Clazz.new_($I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
break;
case 3:
view=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
}
this.tViews[type]=view;
p$1.refreshViewPanel.apply(this, []);
}if ((view).getParent$() == null ) p$1.refreshViewPanel.apply(this, []);
view.refresh$();
this.setSelectedView$org_opensourcephysics_cabrillo_tracker_TView$Z(view, false);
});

Clazz.newMeth(C$, 'removeViewType$I',  function (viewType) {
var view=null;
if (viewType > -1 && viewType < 4 ) {
view=this.tViews[viewType];
this.tViews[viewType]=null;
if (viewType == this.selectedType) {
this.selectedView=null;
var viewChoosers=this.frame.getViewChoosers$Integer(this.panelID);
for (var i=0; i < viewChoosers.length; i++) {
if (viewChoosers[i] === this ) {
this.setSelectedViewType$I(i);
break;
}}
}p$1.refreshViewPanel.apply(this, []);
}return view;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "track":
case "clear":
for (var view, $view = 0, $$view = this.tViews; $view<$$view.length&&((view=($$view[$view])),1);$view++) {
if (view != null ) view.propertyChange$java_beans_PropertyChangeEvent(e);
}
this.refreshToolbar$();
break;
case "trackview":
this.refreshToolbar$();
break;
}
});

Clazz.newMeth(C$, 'refresh$',  function () {
this.chooserButton.setToolTipText$S($I$(13).getString$S("TViewChooser.Button.Choose.Tooltip"));
if (this.selectedView != null ) this.selectedView.refresh$();
});

Clazz.newMeth(C$, 'refreshMenus$',  function () {
for (var i=0; i < 2; i++) {
if (this.tViews[i] != null ) {
var chooser=this.tViews[i];
chooser.refreshMenus$();
}}
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enable) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [enable]);
this.chooserButton.setEnabled$Z(enable);
this.maximizeButton.setEnabled$Z(enable);
this.chooseViewButton.setEnabled$Z(enable);
var view=this.getSelectedView$();
var comps=view.getToolBarComponents$();
for (var j=0; j < comps.size$(); j++) {
comps.get$I(j).setEnabled$Z(enable);
}
});

Clazz.newMeth(C$, 'maximize$',  function () {
if (this.isMaximized$()) {
return;
}var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var choosers=this.frame.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] === this ) {
this.frame.maximizeView$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, i);
break;
}}
this.refreshToolbar$();
});

Clazz.newMeth(C$, 'restore$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var mainView=this.frame.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var player=mainView.getPlayerBar$();
if (player.getParent$() === this ) {
mainView.add$java_awt_Component$O(player, "South");
}this.frame.restoreViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
this.refreshToolbar$();
});

Clazz.newMeth(C$, 'refreshToolbar$',  function () {
this.toolbar.removeAll$();
if (this.selectedView != null ) {
var list=this.selectedView.getToolBarComponents$();
if (list != null ) {
for (var c, $c = list.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
this.toolbar.add$java_awt_Component(c);
$I$(15).setFont$java_awt_Component(c);
}
}}this.toolbar.add$java_awt_Component(this.toolbarFiller);
p$1.refreshMaximizeButton.apply(this, []);
this.toolbar.add$java_awt_Component(this.chooserButton);
this.toolbar.add$java_awt_Component(this.maximizeButton);
if (this.isMaximized$()) {
this.toolbar.add$java_awt_Component(this.chooseViewButton);
}this.toolbar.repaint$();
});

Clazz.newMeth(C$, 'refreshViewPanel',  function () {
this.viewPanel.removeAll$();
for (var i=0; i < 4; i++) {
var view=this.tViews[i];
if (view != null ) {
this.viewPanel.add$java_awt_Component$O(view, $I$(2).VIEW_NAMES[i]);
}}
if (this.selectedView != null ) {
this.repaint$();
} else this.setSelectedViewType$I(this.selectedType);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(21,1));
}, 1);

Clazz.newMeth(C$, 'getView$I',  function (type) {
if (type >= 0 && type < this.tViews.length ) {
return this.tViews[type];
}return null;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.panelID == null  || !this.frame.getTrackerPanelForID$Integer(this.panelID).isPaintable$() ) {
return;
}C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'getChooserParent$java_awt_Container',  function (c) {
while ((c=c.getParent$()) != null  && !(Clazz.instanceOf(c, "org.opensourcephysics.cabrillo.tracker.TViewChooser")) ){
}
return c;
}, 1);

Clazz.newMeth(C$, 'getButtonMaxSize$java_awt_Container$java_awt_Dimension$I',  function (c, max, minHeight) {
c=C$.getChooserParent$java_awt_Container(c);
return (c == null  ? max : Clazz.new_([max.width, Math.max(minHeight, (c).chooserButton.getHeight$())],$I$(16,1).c$$I$I));
}, 1);

Clazz.newMeth(C$, 'isSelectedView$org_opensourcephysics_cabrillo_tracker_TView',  function (view) {
var c=C$.getChooserParent$java_awt_Container(view);
return (c != null  && view === c.getSelectedView$()  );
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
});

Clazz.newMeth(C$, 'dispose$',  function () {
var cl=this.viewPanel.getLayout$();
for (var view, $view = 0, $$view = this.tViews; $view<$$view.length&&((view=($$view[$view])),1);$view++) {
if (view != null ) {
(view).removePropertyChangeListener$S$java_beans_PropertyChangeListener("trackview", this);
cl.removeLayoutComponent$java_awt_Component(view);
$I$(22).deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(view);
}}
this.tViews=null;
this.selectedView=null;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("clear", this);
this.viewPanel.removeAll$();
this.toolbar.removeAll$();
this.panelID=null;
this.frame=null;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getName$() + " " + $I$(23).toString$OA(this.tViews) ;
});

C$.$static$=function(){C$.$static$=0;
C$.MAXIMIZE_ICON=$I$(1).getResourceIcon$S$Z("maximize.gif", true);
C$.RESTORE_ICON=$I$(1).getResourceIcon$S$Z("restore.gif", true);
C$.DOWN_ARROW_ICON=$I$(1).getResourceIcon$S$Z("triangle_down.gif", true);
C$.RIGHT_ARROW_ICON=$I$(1).getResourceIcon$S$Z("right_arrow.gif", true);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TViewChooser, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var chooser=obj;
control.setValue$S$O("selected_view", chooser.selectedView);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var chooser=obj;
var view=control.getObject$S("selected_view");
if (view != null ) {
chooser.setSelectedView$org_opensourcephysics_cabrillo_tracker_TView$Z(view, true);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
