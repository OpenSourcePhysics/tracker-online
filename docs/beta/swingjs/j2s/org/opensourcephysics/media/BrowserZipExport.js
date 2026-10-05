(function(){var P$=Clazz.newPackage("org.opensourcephysics.media"),I$=[[0,'org.opensourcephysics.tools.JarTool']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BrowserZipExport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'compress$java_util_ArrayList$java_io_File',  function (files, target) {
var cleanup=C$.install$S(target.getPath$());
try {
return $I$(1).compress$java_util_ArrayList$java_io_File$java_util_jar_Manifest(files, target, null);
} finally {
C$.restore$O(cleanup);
}
}, 1);

Clazz.newMeth(C$, 'saveVideo$org_opensourcephysics_media_core_VideoRecorder',  function (recorder) {
var cleanup=C$.install$S(recorder.getFileName$());
try {
return recorder.saveVideo$();
} finally {
C$.restore$O(cleanup);
}
}, 1);

Clazz.newMeth(C$, 'install$S',  function (targetPath) {

if (!targetPath || !/\.(zip|trz)$/i.test(targetPath)) return null;
var previousSave = J2S._localFileSaveFunction;
var projectSave = null;
var ua = navigator.userAgent || "";
if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) { projectSave = function(filename, data) { if (filename !== targetPath) { return previousSave ? previousSave.apply(this, arguments) : false;
} var name = filename.substring(filename.lastIndexOf("/") + 1);
var blob = new Blob([new Uint8Array(data)], {type: "application/zip"});
var url = URL.createObjectURL(blob);
var previousFocus = document.activeElement;
var overlay = document.createElement("div");
overlay.setAttribute("role", "dialog");
overlay.setAttribute("aria-modal", "true");
overlay.setAttribute("aria-label", "Save archive");
overlay.style.cssText = "position:fixed;inset:0;z-index:1000001;display:flex;align-items:center;justify-content:center;background:#0009";
var panel = document.createElement("div");
panel.style.cssText = "background:white;color:#222;padding:24px;border-radius:10px;max-width:85vw;font:16px/1.4 sans-serif";
var message = document.createElement("p");
message.textContent = "Your archive is ready. Tap Download to save " + name + ".";
var download = document.createElement("a");
download.href = url;
download.download = name;
download.type = "application/zip";
download.textContent = "Download " + name.substring(name.lastIndexOf(".") + 1).toUpperCase();
download.style.cssText = "display:inline-block;padding:12px;margin-right:16px";
var close = document.createElement("button");
close.textContent = "Close";
close.style.cssText = "font:inherit;padding:12px";
var dismiss = function() { overlay.remove();
// Do not revoke while Safari may still be starting the download.
window.setTimeout(function() { URL.revokeObjectURL(url); }, 60000);
if (previousFocus && previousFocus.isConnected) previousFocus.focus();
};
close.addEventListener("click", dismiss);
overlay.addEventListener("keydown", function(event) { if (event.key === "Escape") { event.stopPropagation(); dismiss(); } if (event.key === "Tab") { event.preventDefault();
(document.activeElement === download ? close : download).focus();
} });
panel.appendChild(message);
panel.appendChild(download);
panel.appendChild(close);
overlay.appendChild(panel);
document.body.appendChild(overlay);
download.focus();
return true;
};
J2S._localFileSaveFunction = projectSave;
} return function() { if (projectSave && J2S._localFileSaveFunction === projectSave) J2S._localFileSaveFunction = previousSave;
};
return null;
}, 1);

Clazz.newMeth(C$, 'restore$O',  function (cleanup) {

if (cleanup) cleanup();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
