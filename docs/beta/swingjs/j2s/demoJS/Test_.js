(function(){var P$=Clazz.newPackage("demoJS"),p$1={},I$=[[0,'StringBuffer','demoJS.Test_Zipout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['InnerClass',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=0;
this.test_int=3;
this.t_test="test_";
},1);

C$.$fields$=[['I',['t','test_int'],'S',['t_test']]
,['Z',['j2sHeadless'],'I',['i_']]]

Clazz.newMeth(C$, 'test123$I$I$I',  function (a, b, c) {
});

Clazz.newMeth(C$, 'showt$',  function () {
if (true && (1? test :false) ) {
}System.out.println$S("Test_.showt() " + this.t);
if (false || (test ||false) ) {
}return this.t;
});

Clazz.newMeth(C$, 'setT$I',  function (t) {
this.t=t;
});

Clazz.newMeth(C$, 'showt2$',  function () {
System.out.println$S("Test_.showt2() test_.t is " + this.t + " t_test is " + this.t_test );
return this.t_test;
});

Clazz.newMeth(C$, 'test3',  function () {
{
var j=1;
var i=3;
(j=Long.$and(j,((Long.$not((Long.$sl(1,i)))))));
j=Long.$sl(1,i);
j=8;
(j=Long.$and(j,(Long.$sl(1,i))));
j=~i;
j=(Long.$not((Long.$sl(1,i))));
}System.out.println$I("abcde".indexOf$I(99));
Clazz.assert(C$, this, function(){return ("test".contentEquals$StringBuffer(Clazz.new_($I$(1,1).c$$S,["test"])))});
var i="test\u0002ing".charAt$I(4).$c();
switch (i | 100) {
case 102:
Clazz.assert(C$, this, function(){return (true)});
break;
case 51:
case 3:
default:
Clazz.assert(C$, this, function(){return (false)});
}
var y=(1?'s':'\t').$c();
Clazz.assert(C$, this, function(){return (y == 9 || y == 115  )});
var z=(1?2:909 + y);
Clazz.assert(C$, this, function(){return (z == 918 || z == 2 )});
var x=(1?3:909);
Clazz.assert(C$, this, function(){return (x == 909 || x == 3 )});
var g="testing";
var o=(g.mark$ ? g :null);
Clazz.assert(C$, this, function(){return (o == null  || o === g  )});
return (1?4:4 + y);
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var val=p$1.test3.apply(Clazz.new_(C$), []);
Clazz.assert(C$, this, function(){return (val == 13 || val == 4 )});
$I$(2).main$SA(args);
System.out.println$S("Test_ all tests completed successfully.");
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "testing " + this.getClass$().getName$();
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.j2sHeadless=true;
C$.i_=0;
{
ClassLoader.getSystemClassLoader$().setDefaultAssertionStatus$Z(true);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Test_, "InnerClass", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'testInner$',  function () {
p$1.test3.apply(this.b$['demoJS.Test_'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
