# Tracker Online PWA

This project combines the website in `../GitHubOSP/tracker-online/docs` with an installable PWA wrapper. The November 4, 2026 sync includes the latest working-tree Tracker core from tracker-online (HEAD `5f19fee`, plus its newer local core build), including the Java marker-popup guard. PWA launch text, installation controls, offline startup, touch handling, supplemental assets, and MP4 metadata fixes are preserved.

## Run and deploy

Use HTTPS in production. For local testing use `python3 -m http.server 8080` and open `http://localhost:8080/`. A phone accessing the Mac's plain HTTP LAN address is not a secure context; use an HTTPS test server for service workers and camera access on another device.

The complete app can be hosted at the domain root or in a subdirectory. Keep all files together. Serve JavaScript as JavaScript, `.webmanifest` as `application/manifest+json`, and `.wasm` as `application/wasm`. Do not redirect missing assets to index.html.

After changing website files, preserve the PWA metadata, app bar, and startup bridge in the six launch HTML files. Keep the PWA-owned files, icons, and CSS. Then run:

```sh
npm run build
npm run check
npm test
```

`build` regenerates `precache-manifest.js` and its content-based version. Commit and deploy that file with the matching service worker and all listed assets. Never publish a partial runtime update. Do not copy the website directly over the PWA HTML wrappers.

## Install

- Windows: open the HTTPS site in Edge or Chrome and use Install App or the browser's installation menu.
- Mac: use Chrome's installation menu, or Safari's File > Add to Dock.
- Android: use Chrome's Install App button or browser installation menu.
- iPhone / iPad: open in Safari, choose Share > Add to Home Screen, and enable Open as Web App when offered. The on-page Install App button explains this; Apple browsers do not expose the Chromium installation prompt.

Browser and OS support for installation prompts and file associations varies. No store package is created by this project. Ordinary File > Open File remains available when OS file associations are unsupported.

## Offline use and updates

The first visit must remain online until the service worker finishes downloading roughly 48 MiB of shipped app resources, help, and sample files. External libraries, analytics, and remote videos require internet. Files selected from the device remain available during their open session; the PWA does not persist user projects automatically. Save your work explicitly.

SwingJS performs synchronous XHR during Java startup. Such requests bypass service workers. `pwa-bootstrap.js` therefore preloads shipped runtime resources asynchronously, then supplies synchronous reads through a jQuery transport in memory before releasing SwingJS's startup queue. This is required for offline startup. All launch pages include this bridge.

A failed essential download fails installation instead of silently installing an incomplete cache. An update waits until the user chooses Update and reload. Initial installation does not reload or interrupt an active project. Caches are separated by deployment scope and build. Offline media requests support byte ranges for video seeking.

The manifest keeps its existing app identity and uses standalone display mode. The browser selects its own native installation UI. Apple touch icons, Android maskable icons, relative launch paths, and mobile safe-area CSS are included.

## Changes in this sync

- Copied updated website runtime, MP4 import helper, and help content.
- Repaired missing launch-page scripts and stylesheet references, malformed escaped markup in DataTool.html, and obsolete mobile camera initialization.
- Preserved PWA-specific metadata and controls; repaired the Library Browser self-link so it stays in this installation.
- Replaced the non-existent `Tracker.app.openFile` call with the real asynchronous Tracker loader, including loader initialization and SwingJS byte caching.
- Added complete, versioned offline assets and the asynchronous startup bridge.
- Removed forced activation/reloading and unhandled window-controls-overlay mode.
- Added static checks and service-worker regression tests.

## Validation limits

Automated browser profiles exercise Chromium and WebKit, launch pages, offline startup, and simulated file launches. Profiles are not physical Windows, Android, iPhone, or iPad devices. Confirm native installation, camera permissions, OS file associations, backgrounding, and storage behavior on the target hardware after deployment.

## License

Tracker and OSP are licensed under GPL-3.0. Tracker was developed by Douglas Brown, Wolfgang Christian, and Robert M. Hanson; SwingJS was developed by Hanson and collaborators.

## Browser and installed launch text

The home page shows introduction and installation guidance in a browser tab. A standalone launch shows a shorter welcome with desktop file-opening instructions or mobile touch/camera guidance, plus an explicit save reminder. The full instructions, supported formats, help links, and credits remain in an expandable section, initially open in the browser and collapsed in the installed app.

Launch mode is detected with the standalone display-mode media query and Apple's `navigator.standalone`. The narrative updates if display mode changes. A normal browser tab continues to show the introduction even if the app is installed; no visit history or storage permission is needed.

## Library Browser ZIP/TRZ regression

Serve the PWA on localhost or HTTPS and open `tests/library-project.html` while online. This opens the remote BallToss archive through the Library Browser's record-loading entry point and verifies that its embedded MP4 and project finish loading.

The PWA runtime includes two metadata-reader fixes: both compiled JSImagekit factory calls explicitly locate MediaInfo's WebAssembly file under `swingjs/j2s/core/ES6/`, relative to the launch page, and the bundled `mediainfo.js` honors its `locateFile` hook. Preserve these when syncing/rebuilding the runtime. Without both fixes, loading an MP4-containing project can stall after a request for `/MediaInfoModule.wasm` returns 404.

## iPad installed-app startup

The startup bridge reads matching runtime files directly from the current build's offline cache before using the network. It prepares synchronous Java dependencies only; sample projects/videos and WebAssembly remain in the service worker's offline cache and load asynchronously when opened. This reduces startup buffers from about 43.4 MiB to 20.3 MiB and releases the large compiled core buffer after evaluation.

The splash shows preparation progress. A required download that stalls for 30 seconds stops startup and offers **Retry loading** instead of leaving the loading splash indefinitely. Startup is tested with `npm test`, including cache-only startup, deferred optional media, binary reads, and failure recovery.

For an existing installed app, upload the complete updated distribution, including its generated precache manifest. Save any open work, then accept **Update and reload** if offered; otherwise close all Tracker browser tabs and app windows, reopen online, and let the update install before testing again. The live `physlets.org` deployment is managed separately from this local project.

## Marker context menus on touch screens

Hold a marker to open its context menu. Lifting the finger leaves the menu open; the next touch/click in the video dismisses it. The SwingJS touch bridge retains ownership through long holds and browser cancellation, consumes duplicate release listeners once, and suppresses the compatibility click from the original release. Preserve these changes in `swingjs/swingjs2.js` when syncing the website runtime. `npm test` includes the touch-context regression checks.
