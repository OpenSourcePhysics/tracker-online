(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.Box','javax.swing.ButtonGroup','org.opensourcephysics.media.core.RotateFilter','javax.swing.JRadioButtonMenuItem','javax.swing.BorderFactory','javax.swing.JCheckBox','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','org.opensourcephysics.tools.ResourceLoader',['org.opensourcephysics.media.core.RotateFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.RotateFilter','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RotateFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buttons=Clazz.array($I$(4), [4]);
},1);

C$.$fields$=[['Z',['reverse'],'O',['inspector','org.opensourcephysics.media.core.RotateFilter.Inspector','buttons','javax.swing.JRadioButtonMenuItem[]','buttonGroup','javax.swing.ButtonGroup','reverseCheckbox','javax.swing.JCheckBox','rotationPanel','javax.swing.JComponent','+reversePanel']]
,['O',['types','int[]','typeNames','String[]','cwIcon','javax.swing.Icon','+ccwIcon']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.refresh$();
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'setRotationType$I',  function (type) {
if (type != this.rotationType) {
this.rotationType=type;
this.source=null;
this.firePropertyChange$S$O$O("rotate", null, null);
}}, p$1);

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(11,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.rotationPanel.setBorder$javax_swing_border_Border($I$(5,"createTitledBorder$S",[$I$(12).getString$S("Filter.Rotate.Label.Rotate")]));
for (var i=0; i < this.buttons.length; i++) {
this.buttons[i].setEnabled$Z(this.isEnabled$());
this.buttons[i].setText$S($I$(12).getString$S("Filter.Rotate.Button." + C$.typeNames[i]));
}
this.reverseCheckbox.setText$S($I$(12).getString$S("Filter.Rotate.Checkbox.Reverse"));
this.reverseCheckbox.setSelected$Z(this.reverse);
this.inspector.setTitle$S($I$(12).getString$S("Filter.Rotate.Title"));
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
var pixels=(this.pixelsIn === this.pixelsOut  ? Clazz.array(Integer.TYPE, [this.nPixelsIn]) : this.pixelsOut);
var last=this.w * this.h - 1;
if (this.rotationType == -1 && !this.reverse ) {
if (this.pixelsOut === this.pixelsIn ) return;
System.arraycopy$O$I$O$I$I(this.pixelsIn, 0, pixels, 0, this.nPixelsIn);
} else {
if (this.rotationType == -1) {
for (var i=0; i < this.nPixelsIn; i++) {
var row=(i/this.w|0);
var col=this.w - (i % this.w) - 1 ;
pixels[this.w * row + col]=this.pixelsIn[i];
}
} else if (this.rotationType == 1) {
if (this.reverse) {
for (var i=0; i < this.nPixelsIn; i++) {
var col=this.h - ((i/this.w|0)) - 1 ;
var row=this.w - (i % this.w) - 1 ;
pixels[this.h * row + col]=this.pixelsIn[i];
}
} else {
for (var i=0; i < this.nPixelsIn; i++) {
var col=this.h - ((i/this.w|0)) - 1 ;
var row=i % this.w;
pixels[this.h * row + col]=this.pixelsIn[i];
}
}} else if (this.rotationType == 0) {
if (this.reverse) {
for (var i=0; i < this.nPixelsIn; i++) {
var col=(i/this.w|0);
var row=i % this.w;
pixels[this.h * row + col]=this.pixelsIn[i];
}
} else {
for (var i=0; i < this.nPixelsIn; i++) {
var col=(i/this.w|0);
var row=this.w - (i % this.w) - 1 ;
pixels[this.h * row + col]=this.pixelsIn[i];
}
}} else {
if (this.reverse) {
for (var i=0; i < this.nPixelsIn; i++) {
var row=this.h - ((i/this.w|0)) - 1 ;
var col=i % this.w;
pixels[this.w * row + col]=this.pixelsIn[i];
}
} else for (var i=0; i < this.nPixelsIn; i++) {
pixels[last - i]=this.pixelsIn[i];
}
}if (this.pixelsOut === this.pixelsIn ) {
System.arraycopy$O$I$O$I$I(pixels, 0, this.pixelsIn, 0, this.nPixelsIn);
}}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(13,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.types=Clazz.array(Integer.TYPE, -1, [-1, 0, 1, 2]);
C$.typeNames=Clazz.array(String, -1, ["None", "CCW", "CW", "180"]);
{
var path="/org/opensourcephysics/resources/media/images/cw.gif";
C$.cwIcon=$I$(10).getImageIcon$S(path);
path="/org/opensourcephysics/resources/media/images/ccw.gif";
C$.ccwIcon=$I$(10).getImageIcon$S(path);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RotateFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Rotate.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
var leftBorder=40;
this.b$['org.opensourcephysics.media.core.RotateFilter'].rotationPanel=$I$(1).createVerticalBox$();
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttonGroup=Clazz.new_($I$(2,1));
var selector=((P$.RotateFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RotateFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var i=0; i < this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons.length; i++) {
if (this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].isSelected$()) {
p$1.setRotationType$I.apply(this.b$['org.opensourcephysics.media.core.RotateFilter'], [$I$(3).types[i]]);
break;
}}
});
})()
), Clazz.new_(P$.RotateFilter$Inspector$1.$init$,[this, null]));
for (var i=0; i < this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons.length; i++) {
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i]=Clazz.new_($I$(4,1));
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].setSelected$Z(this.b$['org.opensourcephysics.media.core.RotateFilter'].rotationType == $I$(3).types[i]);
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].addActionListener$java_awt_event_ActionListener(selector);
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(2, leftBorder, 2, 2));
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].setHorizontalTextPosition$I(2);
if ($I$(3).types[i] == 1) this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].setIcon$javax_swing_Icon($I$(3).cwIcon);
 else if ($I$(3).types[i] == 0) this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i].setIcon$javax_swing_Icon($I$(3).ccwIcon);
this.b$['org.opensourcephysics.media.core.RotateFilter'].buttonGroup.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i]);
this.b$['org.opensourcephysics.media.core.RotateFilter'].rotationPanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.RotateFilter'].buttons[i]);
}
this.b$['org.opensourcephysics.media.core.RotateFilter'].reversePanel=$I$(1).createVerticalBox$();
this.b$['org.opensourcephysics.media.core.RotateFilter'].reverseCheckbox=Clazz.new_($I$(6,1));
this.b$['org.opensourcephysics.media.core.RotateFilter'].reverseCheckbox.addActionListener$java_awt_event_ActionListener(((P$.RotateFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "RotateFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.RotateFilter'].reverse=this.b$['org.opensourcephysics.media.core.RotateFilter'].reverseCheckbox.isSelected$();
this.b$['org.opensourcephysics.media.core.RotateFilter'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.media.core.RotateFilter'], ["rotate", null, null]);
});
})()
), Clazz.new_(P$.RotateFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.RotateFilter'].reversePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.RotateFilter'].reverseCheckbox);
this.b$['org.opensourcephysics.media.core.RotateFilter'].reverseCheckbox.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(2, leftBorder + 7, 2, 2));
var contentPane=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(this.b$['org.opensourcephysics.media.core.RotateFilter'].rotationPanel, "North");
contentPane.add$java_awt_Component$O(this.b$['org.opensourcephysics.media.core.RotateFilter'].reversePanel, "Center");
var buttonbar=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.RotateFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.RotateFilter'].closeButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.b$['org.opensourcephysics.media.core.RotateFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.RotateFilter'], []);
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RotateFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (filter.rotationType > -1) control.setValue$S$O("rotation", $I$(3).typeNames[filter.rotationType + 1]);
control.setValue$S$Z("reverse", filter.reverse);
if ((filter.getFrame$() != null ) && (filter.inspector != null ) && filter.inspector.isVisible$()  ) {
var x=filter.inspector.getLocation$().x - filter.frame.getLocation$().x;
var y=filter.inspector.getLocation$().y - filter.frame.getLocation$().y;
control.setValue$S$I("inspector_x", x);
control.setValue$S$I("inspector_y", y);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
var typeName=control.getString$S("rotation");
for (var i=0; i < $I$(3).typeNames.length; i++) {
if ($I$(3).typeNames[i].equals$O(typeName)) filter.rotationType=$I$(3).types[i];
}
filter.reverse=control.getBoolean$S("reverse");
filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
