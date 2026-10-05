(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[[0,'org.opensourcephysics.display.DrawingFrame']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DrawingFrame3D", function(){
});
C$.$classes$=[['Loader',9]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingFrame3D, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var frame=Clazz.new_($I$(1,1));
frame.setTitle$S(control.getString$S("title"));
frame.setLocation$I$I(control.getInt$S("location x"), control.getInt$S("location y"));
frame.setSize$I$I(control.getInt$S("width"), control.getInt$S("height"));
if (control.getBoolean$S("showing")) {
frame.setVisible$Z(true);
}return frame;
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var frame3D=obj;
var frame=frame3D.getJFrame$();
control.setValue$S$O("title", frame.getTitle$());
control.setValue$S$Z("showing", frame.isShowing$());
control.setValue$S$I("location x", frame.getLocation$().x);
control.setValue$S$I("location y", frame.getLocation$().y);
control.setValue$S$I("width", frame.getSize$().width);
control.setValue$S$I("height", frame.getSize$().height);
control.setValue$S$O("drawing panel", frame3D.getDrawingPanel3D$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var frame3D=(obj);
var frame=frame3D.getJFrame$();
var panel=frame3D.getDrawingPanel3D$();
panel.removeAllElements$();
var panelControl=control.getChildControl$S("drawing panel");
panelControl.loadObject$O(panel);
panel.repaint$();
frame.setTitle$S(control.getString$S("title"));
frame.setLocation$I$I(control.getInt$S("location x"), control.getInt$S("location y"));
frame.setSize$I$I(control.getInt$S("width"), control.getInt$S("height"));
if (control.getBoolean$S("showing")) {
frame.setVisible$Z(true);
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
