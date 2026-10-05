(function(){var P$=Clazz.newPackage("javajs.api"),I$=[[0,'java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "JSUtilI");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'alignComponentRight$javax_swing_JComponent$javax_swing_JComponent$I',  function (c, ref, off) {
var offset=this.getComponentDistanceToRightEdge$javax_swing_JComponent$javax_swing_JComponent(c, ref);
if (offset == off) return;
var r=Clazz.new_($I$(1,1));
c.getBounds$java_awt_Rectangle(r);
r.x+=offset + off;
c.setBounds$java_awt_Rectangle(r);
});
};})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-24 09:30:21 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
