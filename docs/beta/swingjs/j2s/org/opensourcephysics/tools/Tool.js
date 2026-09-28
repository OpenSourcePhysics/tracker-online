(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.LocalJob','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Tool");

Clazz.newMeth(C$, 'setSendAction$javax_swing_JMenuItem$S$O$org_opensourcephysics_tools_Tool$Z',  function (item, toolName, data, replyTo, andDisplay) {
try {
var toolClass=Clazz.forName("org.opensourcephysics.tools." + toolName);
item.addActionListener$java_awt_event_ActionListener(((P$.Tool$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tool$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
try {
var m=this.$finals$.toolClass.getMethod$S$ClassA.apply(this.$finals$.toolClass, ["getTool", null]);
var tool=m.invoke$O$OA.apply(m, [null, null]);
tool.send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool.apply(tool, [Clazz.new_($I$(1,1).c$$O,[this.$finals$.data]), this.$finals$.replyTo]);
if (this.$finals$.andDisplay) {
if (Clazz.instanceOf(tool, "org.opensourcephysics.display.OSPFrame")) {
(tool).setKeepHidden$Z.apply((tool), [false]);
}(tool).setVisible$Z.apply((tool), [true]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$.apply(ex, []);
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Tool$lambda1.$init$,[this, {andDisplay:andDisplay,data:data,replyTo:replyTo,toolClass:toolClass}])));
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
$I$(2,"finest$S",["Cannot instantiate " + toolName + ":\n" + ex.getMessage$() ]);
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'reply$org_opensourcephysics_tools_Tool$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_display_Data',  function (replyTo, job, from, reply) {
job.setXML$S(Clazz.new_($I$(3,1).c$$O,[reply]).toXML$());
replyTo.send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(job, from);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
