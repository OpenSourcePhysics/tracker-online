(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.media.core.DecimalField','javax.swing.JSlider','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','org.opensourcephysics.media.core.StrobeFilter',['org.opensourcephysics.media.core.StrobeFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.StrobeFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StrobeFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultFade=0;
this.brightTrails=false;
},1);

C$.$fields$=[['Z',['brightTrails'],'D',['fade','defaultFade'],'O',['prevPixels','int[]','inspector','org.opensourcephysics.media.core.StrobeFilter.Inspector','fadeLabel','javax.swing.JLabel','fadeField','org.opensourcephysics.media.core.NumberField','fadeSlider','javax.swing.JSlider','darkButton','javax.swing.JRadioButton','+brightButton']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setFade$D(this.defaultFade);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'setFade$D',  function (fade) {
var prev=Double.valueOf$D(this.fade);
this.fade=Math.min(Math.abs(fade), 1);
this.firePropertyChange$S$O$O("fade", prev, Double.valueOf$D(fade));
});

Clazz.newMeth(C$, 'getFade$',  function () {
return this.fade;
});

Clazz.newMeth(C$, 'setBrightTrails$Z',  function (bright) {
this.brightTrails=bright;
this.clear$();
});

Clazz.newMeth(C$, 'isBrightTrails$',  function () {
return this.brightTrails;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
if (this.isEnabled$() == enabled ) {
return;
}this.source=null;
C$.superclazz.prototype.setEnabled$Z.apply(this, [enabled]);
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(11,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.source=null;
this.firePropertyChange$S$O$O("image", null, null);
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.fadeLabel.setText$S($I$(12).getString$S("Filter.Ghost.Label.Fade"));
this.fadeSlider.setToolTipText$S($I$(12).getString$S("Filter.Ghost.ToolTip.Fade"));
this.brightButton.setText$S($I$(12).getString$S("Filter.Strobe.RadioButton.Bright"));
this.brightButton.setToolTipText$S($I$(12).getString$S("Filter.Strobe.RadioButton.Bright.Tooltip"));
this.darkButton.setText$S($I$(12).getString$S("Filter.Strobe.RadioButton.Dark"));
this.darkButton.setToolTipText$S($I$(12).getString$S("Filter.Strobe.RadioButton.Dark.Tooltip"));
var enabled=this.isEnabled$();
this.brightButton.setEnabled$Z(enabled);
this.darkButton.setEnabled$Z(enabled);
this.fadeLabel.setEnabled$Z(enabled);
this.fadeSlider.setEnabled$Z(enabled);
this.fadeField.setEnabled$Z(enabled);
this.inspector.setTitle$S($I$(12).getString$S("Filter.Strobe.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
if (this.prevPixels == null  || this.prevPixels.length != this.nPixelsIn ) this.prevPixels=Clazz.array(Integer.TYPE, [this.nPixelsIn]);
this.getPixelsIn$();
System.arraycopy$O$I$O$I$I(this.pixelsIn, 0, this.prevPixels, 0, this.nPixelsIn);
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
var pixel;
var r;
var g;
var b;
var val;
var rprev;
var gprev;
var bprev;
var valprev;
for (var i=0; i < this.pixelsIn.length; i++) {
pixel=this.pixelsIn[i];
r=(pixel >> 16) & 255;
g=(pixel >> 8) & 255;
b=(pixel) & 255;
val=((r + g + b )/3|0);
rprev=(this.prevPixels[i] >> 16) & 255;
gprev=(this.prevPixels[i] >> 8) & 255;
bprev=(this.prevPixels[i]) & 255;
valprev=((rprev + gprev + bprev )/3|0);
if (this.brightTrails) {
valprev=(((1 - this.fade) * valprev)|0);
if (valprev > val) {
rprev=(((1 - this.fade) * rprev)|0);
gprev=(((1 - this.fade) * gprev)|0);
bprev=(((1 - this.fade) * bprev)|0);
this.pixelsOut[i]=(rprev << 16) | (gprev << 8) | bprev ;
} else {
this.pixelsOut[i]=pixel;
}} else {
valprev=((255 - (1 - this.fade) * (255 - valprev))|0);
if (val > valprev) {
rprev=((255 - (1 - this.fade) * (255 - rprev))|0);
gprev=((255 - (1 - this.fade) * (255 - gprev))|0);
bprev=((255 - (1 - this.fade) * (255 - bprev))|0);
this.pixelsOut[i]=(rprev << 16) | (gprev << 8) | bprev ;
} else {
this.pixelsOut[i]=pixel;
}}this.prevPixels[i]=this.pixelsOut[i];
}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(13,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StrobeFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Strobe.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeLabel.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 2, 0, 0));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField=Clazz.new_($I$(3,1).c$$I$I,[4, 2]);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.setMaxValue$D(0.5);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.setMinValue$D(0);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.addActionListener$java_awt_event_ActionListener(((P$.StrobeFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StrobeFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].setFade$D.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], [this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.getValue$()]);
this.b$['org.opensourcephysics.media.core.StrobeFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.selectAll$();
});
})()
), Clazz.new_(P$.StrobeFilter$Inspector$1.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.addFocusListener$java_awt_event_FocusListener(((P$.StrobeFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "StrobeFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].setFade$D.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], [this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.getValue$()]);
this.b$['org.opensourcephysics.media.core.StrobeFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.StrobeFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider=Clazz.new_($I$(4,1).c$$I$I$I,[0, 0, 0]);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider.setMaximum$I(50);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider.setMinimum$I(0);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.StrobeFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "StrobeFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider.getValue$();
if (i != ((this.b$['org.opensourcephysics.media.core.StrobeFilter'].getFade$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], []) * 100)|0)) {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].setFade$D.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], [i / 100.0]);
this.b$['org.opensourcephysics.media.core.StrobeFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter.Inspector'], []);
}});
})()
), Clazz.new_(P$.StrobeFilter$Inspector$3.$init$,[this, null])));
var group=Clazz.new_($I$(5,1));
var brightDarkAction=((P$.StrobeFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "StrobeFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].setBrightTrails$Z.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], [this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightButton.isSelected$()]);
});
})()
), Clazz.new_(P$.StrobeFilter$Inspector$4.$init$,[this, null]));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightButton=Clazz.new_($I$(6,1));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].darkButton=Clazz.new_($I$(6,1));
group.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightButton);
group.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.StrobeFilter'].darkButton);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].darkButton.setSelected$Z(!this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightTrails);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightButton.addActionListener$java_awt_event_ActionListener(brightDarkAction);
this.b$['org.opensourcephysics.media.core.StrobeFilter'].darkButton.addActionListener$java_awt_event_ActionListener(brightDarkAction);
var panel=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(panel);
var fadePanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
fadePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeLabel);
fadePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField);
fadePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider);
panel.add$java_awt_Component$O(fadePanel, "North");
var brightDarkBar=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
brightDarkBar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightButton);
brightDarkBar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].darkButton);
panel.add$java_awt_Component$O(brightDarkBar, "Center");
var buttonbar=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].clearButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.StrobeFilter'].closeButton);
panel.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
this.b$['org.opensourcephysics.media.core.StrobeFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], []);
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeField.setValue$D(this.b$['org.opensourcephysics.media.core.StrobeFilter'].getFade$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], []));
this.b$['org.opensourcephysics.media.core.StrobeFilter'].fadeSlider.setValue$I(((100 * this.b$['org.opensourcephysics.media.core.StrobeFilter'].getFade$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], []))|0));
if (this.b$['org.opensourcephysics.media.core.StrobeFilter'].isBrightTrails$.apply(this.b$['org.opensourcephysics.media.core.StrobeFilter'], [])) this.b$['org.opensourcephysics.media.core.StrobeFilter'].brightButton.setSelected$Z(true);
 else this.b$['org.opensourcephysics.media.core.StrobeFilter'].darkButton.setSelected$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StrobeFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$D("fade", filter.getFade$());
if (filter.isBrightTrails$()) {
control.setValue$S$Z("bright_trails", filter.isBrightTrails$());
}filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(10,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("fade")) {
filter.setFade$D(control.getDouble$S("fade"));
}filter.setBrightTrails$Z(control.getBoolean$S("bright_trails"));
filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
