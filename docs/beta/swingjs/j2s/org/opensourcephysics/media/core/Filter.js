(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.tools.FontSizer','java.awt.Toolkit','javax.swing.JOptionPane','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLControlElement','javax.swing.JMenu','javax.swing.AbstractAction','javax.swing.JCheckBoxMenuItem','javax.swing.JMenuItem','javax.swing.JButton','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Filter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported']);
C$.$classes$=[['InspectorDlg',1028]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rotationType=-1;
this.autoScale720x480=false;
this.widthFactor=1.0;
this.heightFactor=1.0;
this.inspectorX=-2147483648;
this.enabled=true;
this.changed=false;
this.doCreateOutput=true;
},1);

C$.$fields$=[['Z',['haveGUI','autoScale720x480','inspectorVisible','enabled','changed','hasInspector','doCreateOutput'],'D',['widthFactor','heightFactor'],'I',['rotationType','inspectorX','inspectorY','w','h','nPixelsIn'],'S',['name','previousState'],'O',['pixelsIn','int[]','+pixelsOut','source','java.awt.image.BufferedImage','+input','+output','vidPanel','org.opensourcephysics.media.core.VideoPanel','enabledAction','javax.swing.Action','stack','org.opensourcephysics.media.core.FilterStack','frame','javax.swing.JFrame','enabledItem','javax.swing.JCheckBoxMenuItem','deleteItem','javax.swing.JMenuItem','+propertiesItem','+copyItem','closeButton','javax.swing.JButton','+ableButton','+clearButton','inspectorDlg','org.opensourcephysics.media.core.Filter.InspectorDlg']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.name=this.getClass$().getSimpleName$();
var i=this.name.indexOf$S("Filter");
if ((i > 0) && (i < this.name.length$() - 1) ) {
this.name=this.name.substring$I$I(0, i);
}}, 1);

Clazz.newMeth(C$, 'getInspector$',  function () {
if (this.inspectorDlg == null ) {
this.inspectorDlg=this.newInspector$();
if (this.inspectorDlg == null ) return null;
}if (this.inspectorDlg.isModal$() && this.vidPanel != null  ) {
this.frame=this.getFrame$();
this.inspectorDlg.setVisible$Z(false);
this.inspectorDlg.dispose$();
this.inspectorDlg=this.newInspector$();
}return this.inspectorDlg;
});

Clazz.newMeth(C$, 'clear$',  function () {
});

Clazz.newMeth(C$, 'isChanged$',  function () {
return this.changed;
});

Clazz.newMeth(C$, 'setVideoPanel$org_opensourcephysics_media_core_VideoPanel',  function (panel) {
this.vidPanel=panel;
});

Clazz.newMeth(C$, 'getFrame$',  function () {
if (this.vidPanel == null ) return null;
if (this.frame == null ) {
var test=$I$(4).getFrameForComponent$java_awt_Component(this.vidPanel);
if (test != null  && Clazz.instanceOf(test, "javax.swing.JFrame") ) {
this.frame=test;
}}return this.frame;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (!this.haveGUI) return;
this.enabledItem.setText$S($I$(1).getString$S("Filter.MenuItem.Enabled"));
this.propertiesItem.setText$S($I$(1).getString$S("Filter.MenuItem.Properties"));
this.closeButton.setText$S($I$(1).getString$S("Filter.Button.Close"));
this.ableButton.setText$S(this.isEnabled$() ? $I$(1).getString$S("Filter.Button.Disable") : $I$(1).getString$S("Filter.Button.Enable"));
this.clearButton.setText$S($I$(1).getString$S("Filter.Button.Clear"));
this.clearButton.setEnabled$Z((this.isEnabled$()));
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(5).finalized$O(this);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
if (this.enabled == enabled ) {
return;
}this.enabled=enabled;
this.firePropertyChange$S$O$O("enabled", null, Boolean.valueOf$Z(enabled));
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'copy$',  function () {
$I$(6,"copy$S$java_awt_datatransfer_ClipboardOwner",[Clazz.new_($I$(7,1).c$$O,[this]).toXML$(), null]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.stack != null ) this.removePropertyChangeListener$java_beans_PropertyChangeListener(this.stack);
this.stack=null;
var inspector=this.getInspector$();
if (inspector != null ) {
inspector.setVisible$Z(false);
inspector.dispose$();
}this.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(null);
if (this.source != null ) this.source.flush$();
if (this.input != null ) this.input.flush$();
if (this.output != null ) this.output.flush$();
this.pixelsIn=this.pixelsOut=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getMenu$org_opensourcephysics_media_core_Video',  function (video) {
var menu=Clazz.new_([$I$(1).getString$S("VideoFilter." + this.name)],$I$(8,1).c$$S);
this.enabledAction=((P$.Filter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.Filter'].setEnabled$Z.apply(this.b$['org.opensourcephysics.media.core.Filter'], [this.b$['org.opensourcephysics.media.core.Filter'].enabledItem.isSelected$()]);
this.b$['org.opensourcephysics.media.core.Filter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
});
})()
), Clazz.new_([this, null, $I$(1).getString$S("Filter.MenuItem.Enabled")],$I$(9,1).c$$S,P$.Filter$1));
this.enabledItem=Clazz.new_($I$(10,1).c$$javax_swing_Action,[this.enabledAction]);
this.enabledItem.setSelected$Z(this.isEnabled$());
this.propertiesItem=Clazz.new_([$I$(1).getString$S("Filter.MenuItem.Properties")],$I$(11,1).c$$S);
this.propertiesItem.addActionListener$java_awt_event_ActionListener(((P$.Filter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var inspector=this.b$['org.opensourcephysics.media.core.Filter'].getInspector$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
if (inspector != null ) {
inspector.setVisible$Z(true);
}});
})()
), Clazz.new_(P$.Filter$2.$init$,[this, null])));
this.copyItem=Clazz.new_([$I$(1).getString$S("Filter.MenuItem.Copy")],$I$(11,1).c$$S);
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.Filter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.Filter'].copy$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
});
})()
), Clazz.new_(P$.Filter$3.$init$,[this, null])));
if (this.hasInspector) {
menu.add$javax_swing_JMenuItem(this.propertiesItem);
menu.addSeparator$();
}menu.add$javax_swing_JMenuItem(this.enabledItem);
menu.addSeparator$();
menu.add$javax_swing_JMenuItem(this.copyItem);
if (video != null ) {
menu.addSeparator$();
this.deleteItem=Clazz.new_([$I$(1).getString$S("Filter.MenuItem.Delete")],$I$(11,1).c$$S);
var filterStack=video.getFilterStack$();
this.deleteItem.addActionListener$java_awt_event_ActionListener(((P$.Filter$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.filterStack.removeFilter$org_opensourcephysics_media_core_Filter(this.b$['org.opensourcephysics.media.core.Filter']);
});
})()
), Clazz.new_(P$.Filter$4.$init$,[this, {filterStack:filterStack}])));
menu.add$javax_swing_JMenuItem(this.deleteItem);
}this.refresh$();
return menu;
});

Clazz.newMeth(C$, 'createButtons',  function () {
this.closeButton=Clazz.new_($I$(12,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.Filter$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var inspector=this.b$['org.opensourcephysics.media.core.Filter'].getInspector$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
if (inspector != null ) {
if (this.b$['org.opensourcephysics.media.core.Filter'].isChanged$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []) && this.b$['org.opensourcephysics.media.core.Filter'].previousState != null  ) {
this.b$['org.opensourcephysics.media.core.Filter'].changed=false;
this.b$['org.opensourcephysics.display.OSPRuntime.Supported'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.display.OSPRuntime.Supported'], ["filterChanged", this.b$['org.opensourcephysics.media.core.Filter'].previousState, this.b$['org.opensourcephysics.media.core.Filter']]);
this.b$['org.opensourcephysics.media.core.Filter'].previousState=null;
}inspector.setVisible$Z(false);
}});
})()
), Clazz.new_(P$.Filter$5.$init$,[this, null])));
this.ableButton=Clazz.new_($I$(12,1));
this.ableButton.addActionListener$java_awt_event_ActionListener(((P$.Filter$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.Filter'].enabledItem.setSelected$Z(!this.b$['org.opensourcephysics.media.core.Filter'].enabledItem.isSelected$());
this.b$['org.opensourcephysics.media.core.Filter'].enabledAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.Filter$6.$init$,[this, null])));
this.clearButton=Clazz.new_($I$(12,1));
this.clearButton.addActionListener$java_awt_event_ActionListener(((P$.Filter$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Filter$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.Filter'].clear$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
});
})()
), Clazz.new_(P$.Filter$7.$init$,[this, null])));
}, p$1);

Clazz.newMeth(C$, 'getRaster$java_awt_image_BufferedImage',  function (image) {
return image.getRaster$();
});

Clazz.newMeth(C$, 'getPixels$java_awt_image_BufferedImage$IA',  function (image, pixels) {
image.getRaster$().getDataElements$I$I$I$I$O(0, 0, this.w, this.h, pixels);
});

Clazz.newMeth(C$, 'getPixelsIn$',  function () {
this.pixelsIn=(this.input.getRaster$().getDataBuffer$()).getData$();
});

Clazz.newMeth(C$, 'getPixelsOut$',  function () {
this.pixelsOut=(this.output.getRaster$().getDataBuffer$()).getData$();
});

Clazz.newMeth(C$, 'initializeSource$java_awt_image_BufferedImage',  function (image) {
this.source=image;
this.w=this.source.getWidth$();
this.h=this.source.getHeight$();
this.nPixelsIn=this.w * this.h;
if (this.source.getType$() == 1) {
this.input=this.source;
} else {
this.input=Clazz.new_($I$(13,1).c$$I$I$I,[this.w, this.h, 1]);
var gIn=this.input.createGraphics$();
gIn.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.source, 0, 0, null);
gIn.dispose$();
}if (this.doCreateOutput) {
if (this.autoScale720x480 && this.w == 720  && this.h == 480  && this.widthFactor == 1.0   && this.heightFactor == 1.0  ) {
this.widthFactor=0.889;
}var wOut=((this.w * this.widthFactor)|0);
var hOut=((this.h * this.heightFactor)|0);
if (this.rotationType == 1 || this.rotationType == 0 ) {
var w0=wOut;
wOut=hOut;
hOut=w0;
}this.output=Clazz.new_($I$(13,1).c$$I$I$I,[wOut, hOut, 1]);
}});

Clazz.newMeth(C$, 'getFilteredImage$java_awt_image_BufferedImage',  function (sourceImage) {
if (!this.isEnabled$()) {
return sourceImage;
}if (sourceImage !== this.source ) {
this.initializeSource$java_awt_image_BufferedImage(sourceImage);
this.initializeSubclass$();
}this.setOutputPixels$();
return this.output;
});

Clazz.newMeth(C$, 'addLocation$org_opensourcephysics_controls_XMLControl',  function (control) {
if (this.getFrame$() != null  && this.inspectorDlg != null   && this.inspectorDlg.isVisible$() ) {
var x=this.inspectorDlg.getLocation$().x - this.frame.getLocation$().x;
var y=this.inspectorDlg.getLocation$().y - this.frame.getLocation$().y;
control.setValue$S$I("inspector_x", x);
control.setValue$S$I("inspector_y", y);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Filter, "InspectorDlg", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[this.b$['org.opensourcephysics.media.core.Filter'].getFrame$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []), !(Clazz.instanceOf(this.b$['org.opensourcephysics.media.core.Filter'].frame, "org.opensourcephysics.display.OSPFrame"))]);C$.$init$.apply(this);
this.setTitle$S($I$(1).getString$S(title));
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (b && !this.b$['org.opensourcephysics.media.core.Filter'].haveGUI ) {
this.b$['org.opensourcephysics.media.core.Filter'].haveGUI=true;
this.setResizable$Z(false);
p$1.createButtons.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
this.createGUI$();
this.b$['org.opensourcephysics.media.core.Filter'].getMenu$org_opensourcephysics_media_core_Video.apply(this.b$['org.opensourcephysics.media.core.Filter'], [null]);
this.b$['org.opensourcephysics.media.core.Filter'].initInspector$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
this.b$['org.opensourcephysics.media.core.Filter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.Filter'], []);
$I$(2,"setFonts$O$I",[this, $I$(2).getLevel$()]);
this.pack$();
var dim=$I$(3).getDefaultToolkit$().getScreenSize$();
var x=Math.max(0, ((dim.width - this.getWidth$())/2|0));
var y=Math.max(0, ((dim.height - this.getHeight$())/2|0));
this.setLocation$I$I(x, y);
}C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
