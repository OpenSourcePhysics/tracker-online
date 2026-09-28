(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'org.opensourcephysics.display.TeXParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Trajectory", null, null, 'org.opensourcephysics.numerics.ODE');

C$.$clinit$=2;

C$.$fields$=[[]
,['D',['SQRTTWO'],'S',['PHIRATE','PHI']]]

C$.$static$=function(){C$.$static$=0;
C$.SQRTTWO=Math.sqrt(2);
C$.PHIRATE=$I$(1).parseTeX$S("d$\\phi$/dt");
C$.PHI=$I$(1).parseTeX$S("$\\phi$");
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
