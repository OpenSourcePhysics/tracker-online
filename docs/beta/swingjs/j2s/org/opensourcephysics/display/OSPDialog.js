(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'Thread','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.constructorThreadGroup=$I$(1).currentThread$().getThreadGroup$();
this.keepHidden=false;
},1);

C$.$fields$=[['Z',['keepHidden'],'O',['constructorThreadGroup','ThreadGroup','strategy','java.awt.image.BufferStrategy']]
,['Z',['appletMode'],'I',['topx','topy'],'O',['applet','javax.swing.JApplet']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z',  function (owner, title, modal) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
if (C$.appletMode) {
this.keepHidden=true;
}this.setLocation$I$I(C$.topx, C$.topy);
var d=$I$(2).getDefaultToolkit$().getScreenSize$();
C$.topx=Math.min(C$.topx + 20, (d.getWidth$()|0) - 100);
C$.topy=Math.min(C$.topy + 20, (d.getHeight$()|0) - 100);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$$java_awt_Frame$S$Z.apply(this, [null, title, false]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [""]);
}, 1);

Clazz.newMeth(C$, 'setSize$I$I',  function (width, height) {
C$.superclazz.prototype.setSize$I$I.apply(this, [width, height]);
this.validate$();
});

Clazz.newMeth(C$, 'show$',  function () {
if (!this.keepHidden) {
C$.superclazz.prototype.show$.apply(this, []);
}});

Clazz.newMeth(C$, 'setKeepHidden$Z',  function (_keepHidden) {
this.keepHidden=_keepHidden;
if (this.keepHidden) {
this.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'isKeepHidden$',  function () {
return this.keepHidden;
});

Clazz.newMeth(C$, 'getConstructorThreadGroup$',  function () {
return this.constructorThreadGroup;
});

Clazz.newMeth(C$, 'createBufferStrategy$',  function () {
this.createBufferStrategy$I(2);
this.strategy=this.getBufferStrategy$();
});

Clazz.newMeth(C$, 'render$',  function () {
if ((this.strategy) == null ) {
this.createBufferStrategy$();
}var g=this.strategy.getDrawGraphics$();
this.paintComponents$java_awt_Graphics(g);
g.dispose$();
this.strategy.show$();
});

C$.$static$=function(){C$.$static$=0;
C$.topx=10;
C$.topy=100;
C$.appletMode=false;
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
