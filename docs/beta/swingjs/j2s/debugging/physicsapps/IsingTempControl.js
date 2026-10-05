(function(){var P$=Clazz.newPackage("debugging.physicsapps"),I$=[[0,'debugging.applets.EmptyPanel','javax.swing.border.EtchedBorder','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsingTempControl", null, 'org.opensourcephysics.ejs.control.EjsControlFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$debugging_physicsapps_IsingWRApp',  function (model) {
;C$.superclazz.c$$O$S.apply(this,[model, "name=controlFrame;title=Control Frame;location=400,0;layout=border;exit=true; visible=false"]);C$.$init$.apply(this);
this.add$S$S("Panel", "name=contentPanel; parent=controlFrame; layout=border; position=center");
var cont=this.getElement$S("contentPanel").getComponent$();
cont.add$java_awt_Component$O(model.drawingPanel, "Center");
model.drawingFrame.setKeepHidden$Z(true);
model.drawingFrame.setContentPane$java_awt_Container(Clazz.new_($I$(1,1)));
this.add$S$S("Panel", "name=controlPanel; parent=contentPanel; layout=border; position=south");
(this.getElement$S("controlPanel").getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_($I$(2,1)));
this.add$S$S("Panel", "name=sliderPanel;position=north;parent=controlPanel;layout=border");
this.add$S$S("Slider", "position=center;parent=sliderPanel;variable=T;minimum=0;maximum=5;ticks=11;ticksFormat=0;action=sliderMoved");
this.add$S$S("Label", "position=north; parent=sliderPanel;text=Temperature;font=italic,12;foreground=blue;horizontalAlignment=center");
this.add$S$S("Panel", "name=buttonPanel;position=south;parent=controlPanel;layout=flow");
this.add$S$S("Button", "parent=buttonPanel; text=Run; action=startAnimation");
this.add$S$S("Button", "parent=buttonPanel; text=Stop; action=stopAnimation");
this.add$S$S("Button", "parent=buttonPanel; text=Randomize; action=randomize");
this.getControl$S("controlFrame").setProperties$S("size=pack");
model.viewManager.clearViews$();
cont=this.getElement$S("controlPanel").getComponent$();
model.viewManager.addView$S$java_awt_Container("controlPanel", cont);
cont=this.getElement$S("contentPanel").getComponent$();
model.viewManager.addView$S$java_awt_Container("contentPanel", cont);
cont=this.getElement$S("controlFrame").getComponent$();
model.viewManager.addView$S$java_awt_Container("controlFrame", cont);
if (!$I$(3).appletMode) {
cont.setVisible$Z(true);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
