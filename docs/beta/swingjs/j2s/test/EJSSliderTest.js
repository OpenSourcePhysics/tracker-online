(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.ejs.control.EjsControlFrame','javax.swing.border.EtchedBorder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EJSSliderTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.ejs.control.EjsControlFrame']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.frame=Clazz.new_([this, "name=controlFrame;title=Flow Lines;location=100,100;size=300,300;layout=border;exit=true; visible=true"],$I$(1,1).c$$O$S);
this.frame.add$S$S("Panel", "name=contentPanel; parent=controlFrame; layout=border; position=center");
this.frame.add$S$S("Panel", "name=controlPanel; layout=vbox; parent=contentPanel;position=south");
(this.frame.getElement$S("controlPanel").getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_($I$(2,1)));
this.frame.add$S$S("Slider", "position=center;parent=controlPanel;variable=size;minimum=2;maximum=64;ticks=0;action=sliderMoved; format=grid size=0");
}, 1);

Clazz.newMeth(C$, 'sliderMoved$',  function () {
System.out.println$S("Slider moved.");
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
