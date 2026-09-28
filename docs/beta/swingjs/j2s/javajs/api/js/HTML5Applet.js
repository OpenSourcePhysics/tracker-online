(function(){var P$=Clazz.newPackage("javajs.api.js"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "HTML5Applet", function(){

eval("Promise.prototype.$then = function(resolve,reject){return this.then(function(value) {return resolve ? resolve.apply$O(value) : value},function(reason){return reject ? reject.apply$O(reason) : reason})};");
eval("Promise.prototype.$finally = function(r){this.finally(function(){r.run$()})};");
eval("Promise.prototype.$catch = function(err){this.catch(function(){err.accept$S('' + err)})};");
});
C$.$classes$=[['JSFunction',9],['Promise',9]];
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HTML5Applet, "JSFunction", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HTML5Applet, "Promise", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-24 09:30:21 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
