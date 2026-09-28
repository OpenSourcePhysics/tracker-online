(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Point','java.awt.Dimension','javax.swing.SwingUtilities','org.opensourcephysics.cabrillo.tracker.LibraryBrowserDragHandler','org.opensourcephysics.js.AIPatch','java.awt.event.ContainerAdapter','java.awt.event.ComponentAdapter','org.opensourcephysics.display.OSPRuntime','java.awt.Color','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.LibraryBrowser','java.awt.event.WindowAdapter',['org.opensourcephysics.cabrillo.tracker.LibraryBrowserDragHandler','.DragMouseAdapter']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['DragMouseAdapter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'openLibraryBrowser$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
if (frame == null ) return;
try {
var browser=frame.getLibraryBrowser$();
if (browser != null ) {
browser.setVisible$Z(true);
C$.ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(browser, "open");
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'install$org_opensourcephysics_tools_LibraryBrowser',  function (browser) {
if (browser == null ) return;
C$.attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(browser, browser);
C$.attachToWindow$org_opensourcephysics_tools_LibraryBrowser(browser);
C$.attachTabListeners$java_awt_Container$org_opensourcephysics_tools_LibraryBrowser(browser, browser);
C$.ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(browser, "install");
browser.addContainerListener$java_awt_event_ContainerListener(((P$.LibraryBrowserDragHandler$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ContainerAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent',  function (e) {
$I$(4,"attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser",[e.getChild$(), this.$finals$.browser]);
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});
})()
), Clazz.new_($I$(6,1),[this, {browser:browser}],P$.LibraryBrowserDragHandler$1)));
browser.addComponentListener$java_awt_event_ComponentListener(((P$.LibraryBrowserDragHandler$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});
})()
), Clazz.new_($I$(7,1),[this, {browser:browser}],P$.LibraryBrowserDragHandler$2)));
browser.addHierarchyListener$java_awt_event_HierarchyListener(((P$.LibraryBrowserDragHandler$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hierarchyChanged$java_awt_event_HierarchyEvent',  function (e) {
var flags=Long.$ival(e.getChangeFlags$());
$I$(4).attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(this.$finals$.browser, this.$finals$.browser);
$I$(4).attachToWindow$org_opensourcephysics_tools_LibraryBrowser(this.$finals$.browser);
$I$(4).attachTabListeners$java_awt_Container$org_opensourcephysics_tools_LibraryBrowser(this.$finals$.browser, this.$finals$.browser);
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});
})()
), Clazz.new_(P$.LibraryBrowserDragHandler$3.$init$,[this, {browser:browser}])));
browser.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.LibraryBrowserDragHandler$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
$I$(4).attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(this.$finals$.browser, this.$finals$.browser);
$I$(4).attachToWindow$org_opensourcephysics_tools_LibraryBrowser(this.$finals$.browser);
$I$(4).attachTabListeners$java_awt_Container$org_opensourcephysics_tools_LibraryBrowser(this.$finals$.browser, this.$finals$.browser);
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, evt);
});
})()
), Clazz.new_(P$.LibraryBrowserDragHandler$4.$init$,[this, {browser:browser}])));
}, 1);

Clazz.newMeth(C$, 'ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O',  function (browser, e) {
if (true) {
System.err.println$S("LBDH skipping ensureWelcome " + e);
return;
}if (browser == null  || browser.getTabCount$() > 0 ) {
return;
}if (Clazz.instanceOf(e, "java.beans.PropertyChangeEvent")) {
System.err.println$S("LBDH skipping property change " + e);
return;
}if (Clazz.instanceOf(e, "java.awt.event.HierarchyEvent")) {
System.err.println$S("LBDH skipping heirarchy event " + e);
return;
}if (Clazz.instanceOf(e, "java.lang.String")) {
}browser.refreshGUI$();
var ep=C$.findEditorPane$org_opensourcephysics_tools_LibraryBrowser(browser);
if (ep != null ) {
C$.refreshWelcomePane$javax_swing_JEditorPane(ep);
}if ($I$(8).isJS) {
$I$(5,"hackUIDOMNodeStyle$javax_swing_JComponent$SA",[browser, Clazz.array(String, -1, ["display", "block", "backgroundColor", "#ffffff"])]);
}C$.attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(browser, browser);
C$.attachToWindow$org_opensourcephysics_tools_LibraryBrowser(browser);
}, 1);

Clazz.newMeth(C$, 'findEditorPane$org_opensourcephysics_tools_LibraryBrowser',  function (browser) {
if (browser == null ) return null;
if (browser.htmlAboutPane != null ) return browser.htmlAboutPane;
return C$.findEditorPaneInHierarchy$java_awt_Component(browser);
}, 1);

Clazz.newMeth(C$, 'findEditorPaneInHierarchy$java_awt_Component',  function (comp) {
if (Clazz.instanceOf(comp, "javax.swing.JEditorPane")) {
return comp;
}if (Clazz.instanceOf(comp, "java.awt.Container")) {
var cont=comp;
for (var child, $child = 0, $$child = cont.getComponents$(); $child<$$child.length&&((child=($$child[$child])),1);$child++) {
var ep=C$.findEditorPaneInHierarchy$java_awt_Component(child);
if (ep != null ) return ep;
}
}return null;
}, 1);

Clazz.newMeth(C$, 'refreshWelcomePane$javax_swing_JEditorPane',  function (ep) {
if (ep == null ) return;
var welcomeHtml=C$.getWelcomeHTML$();
try {
ep.setContentType$S("text/html");
ep.setEditable$Z(false);
ep.setFocusable$Z(false);
ep.setOpaque$Z(true);
ep.setBackground$java_awt_Color($I$(9).WHITE);
ep.setForeground$java_awt_Color($I$(9).BLACK);
ep.setText$S(welcomeHtml);
ep.setCaretPosition$I(0);
ep.revalidate$();
ep.repaint$();
} catch (t) {
}
$I$(3,"invokeLater$Runnable",[((P$.LibraryBrowserDragHandler$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
this.$finals$.ep.setText$S.apply(this.$finals$.ep, [this.$finals$.welcomeHtml]);
this.$finals$.ep.setCaretPosition$I.apply(this.$finals$.ep, [0]);
this.$finals$.ep.revalidate$.apply(this.$finals$.ep, []);
this.$finals$.ep.repaint$.apply(this.$finals$.ep, []);
} catch (t) {
}
});
})()
), Clazz.new_(P$.LibraryBrowserDragHandler$lambda1.$init$,[this, {welcomeHtml:welcomeHtml,ep:ep}]))]);
$I$(5).hackWelcomePane$javax_swing_JEditorPane$S(ep, welcomeHtml);
}, 1);

Clazz.newMeth(C$, 'getWelcomeHTML$',  function () {
var bannerUrl=null;
try {
var res=$I$(10).getResource$S("/org/opensourcephysics/resources/tools/images/compadre_banner.jpg");
if (res != null  && res.getURL$() != null  ) {
bannerUrl=res.getURL$().toString();
}} catch (t) {
}
if (bannerUrl == null ) {
bannerUrl="https://opensourcephysics.github.io/tracker-website/images/compadre_banner.jpg";
}return "<html><head><style>body { font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #222222; background-color: #ffffff; padding: 15px; font-size: 14px; line-height: 1.6; }\nh1 { color: #003366; font-size: 20px; text-align: center; margin-top: 10px; margin-bottom: 16px; font-weight: bold; }\np { color: #333333; margin-bottom: 12px; font-size: 14px; }\nul { margin-left: 24px; margin-bottom: 15px; padding-left: 0; }\nli { color: #333333; margin-bottom: 6px; font-size: 14px; }\na { color: #0066cc; text-decoration: underline; }\n</style></head><body><div style=\"max-width: 800px; margin: 0 auto; color: #222222;\"><div style=\"text-align: center; margin-bottom: 18px;\"><img src=\"" + bannerUrl + "\" alt=\"ComPADRE Banner\" style=\"max-width: 100%; height: auto; border-radius: 4px;\" onerror=\"this.style.display='none'\"></div>" + "<h1 style=\"color: #003366; font-size: 20px; text-align: center; margin-top: 10px; margin-bottom: 16px; font-weight: bold;\">Open Source Physics Library Browser</h1>" + "<p style=\"color: #333333; margin-bottom: 12px; font-size: 14px;\">Use the OSP Library Browser to browse online collections of Tracker projects, EJS simulations and other learning resources.</p>" + "<ul style=\"margin-left: 24px; margin-bottom: 15px;\">" + "<li style=\"color: #333333; margin-bottom: 6px; font-size: 14px;\">Open a collection by choosing from the <strong>Collections</strong> menu or entering a URL directly in the toolbar as with a web browser.</li>" + "<li style=\"color: #333333; margin-bottom: 6px; font-size: 14px;\">Collections are organized and displayed in a tree. Each tree node is a resource or sub-collection. Click a node to learn about the resource or double-click to download and/or open it in Tracker, EJS, DataTool or your web browser.</li>" + "<li style=\"color: #333333; margin-bottom: 6px; font-size: 14px;\">To build your own collection choose <strong>File | New Collection</strong>. Add your own resources or copy and paste from other collections. Collections are saved as xml documents that contain references to the actual resource files. For more information, choose Help.</li>" + "</ul>" + "<p style=\"color: #333333; margin-bottom: 12px; font-size: 14px;\"><strong>ComPADRE</strong> is a network of online resource collections and community web sites supporting physics education with content, tools, and expert advice. Open a ComPADRE collection by choosing from the <strong>Collections | ComPADRE Library</strong> menu.</p>" + "<p style=\"color: #333333; margin-bottom: 12px; font-size: 14px;\">You can help build the ComPADRE collection by reviewing resources, participating in discussions, and adding your own OSP resources. For more information, see <a href=\"https://www.compadre.org/osp/\" target=\"_blank\" style=\"color: #0066cc; text-decoration: underline;\">https://www.compadre.org/osp/</a>. " + "To recommend a resource for ComPADRE, visit <a href=\"https://www.compadre.org/osp/items/suggest.cfm\" target=\"_blank\" style=\"color: #0066cc; text-decoration: underline;\">Suggest a Resource</a>. Contact Wolfgang Christian, the OSP Collection editor, for more information.</p>" + "</div></body></html>" ;
}, 1);

Clazz.newMeth(C$, 'attachToWindow$org_opensourcephysics_tools_LibraryBrowser',  function (browser) {
if (browser == null ) return;
var w=$I$(3).getWindowAncestor$java_awt_Component(browser);
if (w == null  && Clazz.instanceOf(browser.getTopLevelAncestor$(), "java.awt.Window") ) {
w=browser.getTopLevelAncestor$();
}if (w == null  && $I$(11).frame != null  ) {
w=$I$(11).frame;
}if (w != null ) {
$I$(5).installResizeHandler$java_awt_Window(w);
C$.attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(w, browser);
if (Clazz.instanceOf(w, "javax.swing.RootPaneContainer")) {
var rp=(w).getRootPane$();
if (rp != null ) {
if (rp.getClientProperty$O("LibraryBrowser_WindowListener_Attached") != null ) {
return;
}rp.putClientProperty$O$O("LibraryBrowser_WindowListener_Attached", Boolean.TRUE);
C$.attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(rp, browser);
if (rp.getLayeredPane$() != null ) {
C$.attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(rp.getLayeredPane$(), browser);
}if (rp.getContentPane$() != null ) {
C$.attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(rp.getContentPane$(), browser);
}}}w.addComponentListener$java_awt_event_ComponentListener(((P$.LibraryBrowserDragHandler$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});
})()
), Clazz.new_($I$(7,1),[this, {browser:browser}],P$.LibraryBrowserDragHandler$5)));
w.addWindowListener$java_awt_event_WindowListener(((P$.LibraryBrowserDragHandler$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
$I$(4).ensureWelcomeScreen$org_opensourcephysics_tools_LibraryBrowser$O(this.$finals$.browser, e);
});
})()
), Clazz.new_($I$(12,1),[this, {browser:browser}],P$.LibraryBrowserDragHandler$6)));
}}, 1);

Clazz.newMeth(C$, 'attachTabListeners$java_awt_Container$org_opensourcephysics_tools_LibraryBrowser',  function (root, browser) {
if (root == null ) return;
if (Clazz.instanceOf(root, "javax.swing.JTabbedPane")) {
var tabbedPane=root;
if (tabbedPane.getClientProperty$O("LibraryBrowserDragListener_Installed") == null ) {
tabbedPane.putClientProperty$O$O("LibraryBrowserDragListener_Installed", Boolean.TRUE);
tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.LibraryBrowserDragHandler$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
$I$(4,"attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser",[this.$finals$.tabbedPane.getSelectedComponent$(), this.$finals$.browser]);
});
})()
), Clazz.new_(P$.LibraryBrowserDragHandler$7.$init$,[this, {browser:browser,tabbedPane:tabbedPane}])));
tabbedPane.addContainerListener$java_awt_event_ContainerListener(((P$.LibraryBrowserDragHandler$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryBrowserDragHandler$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ContainerAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent',  function (e) {
$I$(4,"attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser",[e.getChild$(), this.$finals$.browser]);
});
})()
), Clazz.new_($I$(6,1),[this, {browser:browser}],P$.LibraryBrowserDragHandler$8)));
}}for (var child, $child = 0, $$child = root.getComponents$(); $child<$$child.length&&((child=($$child[$child])),1);$child++) {
if (Clazz.instanceOf(child, "java.awt.Container")) {
C$.attachTabListeners$java_awt_Container$org_opensourcephysics_tools_LibraryBrowser(child, browser);
}}
}, 1);

Clazz.newMeth(C$, 'attachToHierarchy$java_awt_Component',  function (comp) {
C$.attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(comp, null);
}, 1);

Clazz.newMeth(C$, 'attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser',  function (comp, browser) {
if (comp == null ) return;
C$.attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(comp, browser);
if (Clazz.instanceOf(comp, "javax.swing.JScrollPane")) {
var sp=comp;
if (sp.getViewport$() != null ) {
C$.attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(sp.getViewport$(), browser);
if (sp.getViewport$().getView$() != null ) {
C$.attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(sp.getViewport$().getView$(), browser);
}}}if (Clazz.instanceOf(comp, "java.awt.Container")) {
var cont=comp;
for (var child, $child = 0, $$child = cont.getComponents$(); $child<$$child.length&&((child=($$child[$child])),1);$child++) {
C$.attachToHierarchy$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(child, browser);
}
}}, 1);

Clazz.newMeth(C$, 'isEligibleForDrag$java_awt_Component',  function (comp) {
if (comp == null ) return false;
if (Clazz.instanceOf(comp, "javax.swing.AbstractButton")) return false;
if (Clazz.instanceOf(comp, "javax.swing.JComboBox")) return false;
if (Clazz.instanceOf(comp, "javax.swing.JScrollBar")) return false;
if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent") && (comp).isEditable$() ) {
return false;
}if (comp.getClass$().getName$().contains$CharSequence("Divider")) return false;
return true;
}, 1);

Clazz.newMeth(C$, 'attachDragAdapter$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser',  function (comp, browser) {
if (!C$.isEligibleForDrag$java_awt_Component(comp)) return;
if (Clazz.instanceOf(comp, "javax.swing.JComponent")) {
var jc=comp;
if (jc.getClientProperty$O("LibraryBrowserDragListener_Installed") != null ) {
return;
}jc.putClientProperty$O$O("LibraryBrowserDragListener_Installed", Boolean.TRUE);
}var adapter=Clazz.new_($I$(13,1).c$$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser,[comp, browser]);
comp.addMouseListener$java_awt_event_MouseListener(adapter);
comp.addMouseMotionListener$java_awt_event_MouseMotionListener(adapter);
}, 1);

Clazz.newMeth(C$, 'getWindowForBrowser$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser',  function (component, browser) {
var w=$I$(3).getWindowAncestor$java_awt_Component(component);
if (w == null  && browser != null  ) {
w=$I$(3).getWindowAncestor$java_awt_Component(browser);
}if (w == null  && browser != null   && Clazz.instanceOf(browser.getTopLevelAncestor$(), "java.awt.Window") ) {
w=browser.getTopLevelAncestor$();
}if (w == null  && $I$(11).frame != null  ) {
w=$I$(11).frame;
}return w;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryBrowserDragHandler, "DragMouseAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mouseLoc=Clazz.new_($I$(1,1));
this.windowLoc=Clazz.new_($I$(1,1));
this.windowDim=Clazz.new_($I$(2,1));
this.isDragging=false;
this.isResizing=false;
},1);

C$.$fields$=[['Z',['isDragging','isResizing'],'O',['component','java.awt.Component','browser','org.opensourcephysics.tools.LibraryBrowser','mouseLoc','java.awt.Point','+windowLoc','windowDim','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser',  function (comp, browser) {
Clazz.super_(C$, this);
this.component=comp;
this.browser=browser;
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.isDragging=false;
if ($I$(3).isRightMouseButton$java_awt_event_MouseEvent(e) || $I$(3).isMiddleMouseButton$java_awt_event_MouseEvent(e) ) {
return;
}if (Clazz.instanceOf(this.component, "javax.swing.JTree")) {
var tree=this.component;
var path=tree.getPathForLocation$I$I(e.getX$(), e.getY$());
if (path != null ) {
return;
}var row=tree.getClosestRowForLocation$I$I(e.getX$(), e.getY$());
if (row >= 0) {
var bounds=tree.getRowBounds$I(row);
if (bounds != null  && e.getY$() >= bounds.y  && e.getY$() <= bounds.y + bounds.height  && e.getX$() <= bounds.x + bounds.width ) {
return;
}}}var w=$I$(4).getWindowForBrowser$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(this.component, this.browser);
if (w != null ) {
var startPt=$I$(5).getScreenLocation$java_awt_event_MouseEvent$java_awt_Component$S(e, this.component, "LB mouse pressed");
if (startPt != null ) {
var ptInWindow=$I$(3,"convertPoint$java_awt_Component$java_awt_Point$java_awt_Component",[this.component, e.getPoint$(), w]);
var cornerSize=20;
if (ptInWindow.x >= w.getWidth$() - cornerSize && ptInWindow.y >= w.getHeight$() - cornerSize ) {
this.mouseLoc.setLocation$java_awt_Point(startPt);
this.windowDim.setSize$java_awt_Dimension(w.getSize$());
this.isResizing=true;
this.isDragging=false;
} else {
this.mouseLoc.setLocation$java_awt_Point(startPt);
this.windowLoc.setLocation$java_awt_Point(w.getLocation$());
this.isDragging=true;
this.isResizing=false;
}}}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if (!this.isDragging && !this.isResizing ) return;
var w=$I$(4).getWindowForBrowser$java_awt_Component$org_opensourcephysics_tools_LibraryBrowser(this.component, this.browser);
if (w != null ) {
var curPt=$I$(5).getScreenLocation$java_awt_event_MouseEvent$java_awt_Component$S(e, this.component, "LB mouseDragged");
if (curPt != null ) {
var dx=curPt.x - this.mouseLoc.x;
var dy=curPt.y - this.mouseLoc.y;
if (this.isResizing) {
var newW=Math.max(400, this.windowDim.width + dx);
var newH=Math.max(300, this.windowDim.height + dy);
w.setSize$I$I(newW, newH);
w.validate$();
w.repaint$();
$I$(5).setupResizer$java_awt_Window(w);
} else {
w.setLocation$I$I(this.windowLoc.x + dx, this.windowLoc.y + dy);
w.repaint$();
}}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.isDragging=false;
this.isResizing=false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
