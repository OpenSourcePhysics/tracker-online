(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javajs.async.Assets',['javajs.async.Assets','.Asset']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Assets", null, 'test.Test_');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
if ($I$(1).isJS) {

javajs.async.Assets.add$O({name:"test",zipPath:"test/assetTest.zip",classPath:"xl"});
} else {
$I$(1,"add$O",[Clazz.new_($I$(2,1).c$$S$S$S,["test", "src/test/assetTest.zip", "xl"])]);
}var worksheet=$I$(1).getAssetStringFromZip$S("xl/worksheets/sheet1.xml");
System.out.println$S(worksheet.substring$I$I(0, 100) + "...(" + worksheet.length$() + " bytes)" );
Clazz.assert(C$, this, function(){return (worksheet.length$() == 86144)});
System.out.println$S("Test_Assets OK");
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
