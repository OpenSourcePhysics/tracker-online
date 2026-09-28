(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.JPanel','java.awt.FlowLayout','java.awt.BorderLayout','org.opensourcephysics.media.core.DeinterlaceFilter',['org.opensourcephysics.media.core.DeinterlaceFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.DeinterlaceFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DeinterlaceFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isOdd'],'O',['inspector','org.opensourcephysics.media.core.DeinterlaceFilter.Inspector','odd','javax.swing.JRadioButton','+even']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'setOdd$Z',  function (odd) {
var prev=this.isOdd;
this.isOdd=odd;
this.firePropertyChange$S$O$O("odd", Boolean.valueOf$Z(prev), Boolean.valueOf$Z(odd));
});

Clazz.newMeth(C$, 'isOdd$',  function () {
return this.isOdd;
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(7,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.odd.setText$S($I$(8).getString$S("Filter.Deinterlace.Button.Odd"));
this.even.setText$S($I$(8).getString$S("Filter.Deinterlace.Button.Even"));
var enabled=this.isEnabled$();
this.odd.setEnabled$Z(enabled);
this.even.setEnabled$Z(enabled);
this.inspector.setTitle$S($I$(8).getString$S("Filter.Deinterlace.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
var off=(this.isOdd ? this.w : 0);
var p=0;
for (var i=0, n=this.h - 1; i < n; i+=2, p+=this.w) {
for (var j=0; j < this.w; j++, p++) {
this.pixelsOut[p]=this.pixelsOut[p + this.w]=this.pixelsIn[p + off];
}
}
if ((this.h % 2) != 0) {
for (var j=0; j < this.w; j++, p++) {
this.pixelsOut[p]=this.pixelsIn[p];
}
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(9,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DeinterlaceFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['group','javax.swing.ButtonGroup']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Deinterlace.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].odd=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].even=Clazz.new_($I$(1,1));
this.group=Clazz.new_($I$(2,1));
this.group.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].odd);
this.group.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].even);
var select=((P$.DeinterlaceFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DeinterlaceFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].setOdd$Z.apply(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'], [this.b$['org.opensourcephysics.media.core.DeinterlaceFilter.Inspector'].group.isSelected$javax_swing_ButtonModel(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].odd.getModel$())]);
});
})()
), Clazz.new_(P$.DeinterlaceFilter$Inspector$1.$init$,[this, null]));
this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].even.addActionListener$java_awt_event_ActionListener(select);
this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].odd.addActionListener$java_awt_event_ActionListener(select);
var panel=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].odd);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].even);
var buttonbar=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].closeButton);
var contentPane=Clazz.new_([Clazz.new_($I$(5,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(panel, "Center");
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
if (this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].isOdd) {
this.group.setSelected$javax_swing_ButtonModel$Z(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].odd.getModel$(), true);
} else {
this.group.setSelected$javax_swing_ButtonModel$Z(this.b$['org.opensourcephysics.media.core.DeinterlaceFilter'].even.getModel$(), true);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DeinterlaceFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (filter.isOdd$()) {
control.setValue$S$O("field", "odd");
} else {
control.setValue$S$O("field", "even");
}if ((filter.getFrame$() != null ) && (filter.inspector != null ) && filter.inspector.isVisible$()  ) {
var x=filter.inspector.getLocation$().x - filter.frame.getLocation$().x;
var y=filter.inspector.getLocation$().y - filter.frame.getLocation$().y;
control.setValue$S$I("inspector_x", x);
control.setValue$S$I("inspector_y", y);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("field")) {
if (control.getString$S("field").equals$O("odd")) {
filter.setOdd$Z(true);
} else {
filter.setOdd$Z(false);
}}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
