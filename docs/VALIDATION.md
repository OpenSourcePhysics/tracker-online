# PWA sync validation — November 1, 2026

Source: `/Users/wochristian/J2SProjects/GitHubOSP/tracker-online/docs`, tracked commit `83b05f8` (October 31, 2026), including local website files.

## Changes

Updated `swingjs/swingjs2.js`, `swingjs/j2s/core/core_tracker.z.js`, and `swingjs/j2s/tracker-assets.zip`. Also copied the website's local `swingjs/swingjs2.txt`. Preserved all six PWA launch wrappers, manifest identity, icons, startup bridge, service worker, and supplemental resources. No source files were removed. Regenerated the content-versioned precache list (838 files, 48.4 MiB).

Excluded `TrackerPWA.zip` from precaching: creating a distribution inside the project must not cause subsequent builds to cache an old distribution recursively. Added a regression assertion for this. Documentation is excluded from offline assets.

## Results

- Static checks passed: both manifests agree; launch scope, icons, HTML dependencies, inline JavaScript, and every precache path validated.
- Service-worker regression tests passed under Node 24: failed installations, update consent, scoped cache cleanup, offline URL normalization, video byte ranges, missing scripts, and external requests.
- macOS / native Chrome headless: Tracker main frame and menus initialized; service worker installed; all 838 assets cached; updated core present. An independent tab started Tracker with networking disabled and remained controlled by the service worker.
- iOS 27 / iPhone 18 Pro simulator / Safari: smoke-test page reported service-worker installation, Tracker main-frame readiness, 838 cached assets, and updated core cached. Screenshot showed Tracker's mobile UI and keyboard-selection dialog. Safari displayed “This webpage was reloaded because a problem occurred.” This is a stability concern, not a clean native-device qualification. Offline relaunch, installation to Home Screen, and device interactions remain unverified.
- Android: available ADB target `emulator-5566` was offline; no native Android pass is claimed.
- Windows: no native Windows test host was available; native testing remains outstanding.
- Unix/Linux: no native Linux/Unix test host was available; native testing remains outstanding. macOS testing does not substitute for Linux testing.

## Remaining device acceptance

On each target OS, serve the extracted distribution over HTTPS, install through the browser, allow initial caching to finish, then quit and reopen offline. Open a bundled TRZ example and a local MP4; verify playback, seeking, project editing, save/export, and reopening the saved project. Check camera permissions, touch/keyboard interaction, background/resume, and an update with an unsaved project. These behaviors are not certified by a browser user-agent profile or static manifest checks.

## Runtime SHA-256

- SwingJS: `a0e2b65ce100641f40b18cb5dd57f6afbe25acfff3c4f89cdadcc51632aca6a1`
- Tracker core: `7986e5ecfabc9697d95edbea6de90044890c884ba64e8ed5ab76079934b342d0`
- Tracker asset ZIP: `2ae6340efc952c49b3c9c3bdc75806fdebc52779a15499a6283983b89abb8003`

## Chromium profile checks

All profiles ran on the macOS Chrome engine with network access disabled and the service worker controlling the page. macOS, Windows, and Linux profiles initialized Tracker and displayed the desktop Coordinate System menu. iPhone and Android profiles initialized Tracker's main-frame API; the desktop menu assertion did not match the mobile UI. These results establish limited offline startup coverage, not native iOS/Android/Windows/Linux qualification. Native mobile interaction and completion of the mobile keyboard-selection prompt remain manual checks.

## Launch narrative update — November 1, 2026

Updated the home-page narrative, PWA controller, and CSS. Browser tabs show introduction, installation, and first-download guidance. Standalone desktop launches show compact file-opening and saving instructions; standalone mobile launches show touch and camera guidance. The existing full narrative remains available in a details section. Display-mode changes update the text and installation button without resetting an already-open details section on repeated events.

Chrome DOM checks passed for browser desktop, standalone desktop, Apple standalone iPhone, iPad with desktop user agent, and standalone Android inputs. Browser-to-standalone and return transitions passed, including preserving the reader's expansion choice. These checks used controlled media-query/navigator inputs with the heavyweight Tracker runtime omitted to isolate text selection. They do not constitute new physical-device testing. Existing static PWA checks and service-worker regression tests passed after the change; the precache was regenerated and the ZIP rebuilt.

## Recheck after distribution rename and file removal — November 1, 2026

The initial check failed because the precache still listed the removed `swingjs/swingjs2.txt`. The distribution had been renamed to `Tracker-PWA.zip`, which the build's original exact-name exclusion did not cover. Regenerated the precache from the current files and broadened the root distribution exclusion to cover TrackerPWA, Tracker-PWA, and Tracker_PWA archive names, including release suffixes. Runtime asset ZIPs under `swingjs` remain cached.

The corrected build contains 837 offline assets (47.8 MiB). Static checks and service-worker regression tests passed. Adding temporary archive files with all three naming variants left the generated manifest and build hash unchanged. Fresh native macOS Chrome installed the service worker, cached all 837 assets, and initialized Tracker; a separate tab with networking disabled initialized the real main frame, rendered desktop menus, and displayed browser guidance under service-worker control. Controlled launch-mode checks passed again for desktop browser, standalone desktop, iPhone, iPad desktop user agent, Android, and live mode transitions. No new physical mobile/Windows/Linux device qualification was performed. Rebuilt the current `Tracker-PWA.zip` distribution from the corrected files.

## Library Browser BallToss loading fix — November 1, 2026

Reproduced failure using the actual localhost server on port 5500 and the Library Browser record-loading entry point with `https://opensourcephysics.github.io/resources/CAB/experiments/BallToss.zip`. The archive downloaded correctly and allowed CORS. Extraction succeeded, but embedded MP4 metadata initialization stalled: MediaInfo requested `MediaInfoModule.wasm` at the launch-page root (404), and its callback factory did not finish.

Fixed both compiled JSImagekit metadata-factory call sites to supply a launch-page-relative `swingjs/j2s/core/ES6/` locator. Restored the bundled MediaInfo module's `locateFile` hook, which was explicitly disabled with `0&n.locateFile`. Kept the actual WebAssembly file unchanged. Added `tests/library-project.html` as an online end-to-end regression using the Library Browser's actual record-opening callback.

A fresh Chrome session against the staged local server successfully opened BallToss, decoded its 32-frame embedded MP4, and loaded all 3 tracks. The WebAssembly request used the correct `swingjs/j2s/core/ES6/MediaInfoModule.wasm` path. This is a project/video loading test, not just startup or ZIP download verification.

After applying the fix, repeated the regression in a clean Chrome profile using the user's existing server at `http://127.0.0.1:5500/tests/library-project.html`. Passed: BallToss title, 32 video frames, and 3 tracks. The extracted distribution also passed static and service-worker regression checks.

## iPad installed loading-splash fix — November 1, 2026

Compared the deployed https://physlets.org/swingjs2/ startup files and compiled runtime with the local PWA; they matched. The reported installed-app symptom is a loading splash. The old startup bridge waited for 390 files/43.35 MiB, including duplicate bundled sample archives, a sample MP4, and WebAssembly, before releasing the Java startup queue. Requests and response-body reads had no timeout. Thus an unnecessary media request could hold the startup splash indefinitely. Desktop WebKit with iPad settings did not reproduce the physical-device hang in a normal online run.

Changed startup to prepare 384 synchronous runtime resources/20.32 MiB, read matching resources directly from the scope-and-build-specific CacheStorage cache, and use three concurrent reads. Samples and WebAssembly remain fully precached by the worker for later asynchronous/offline loads. The large core buffer is released after being handed to SwingJS. Cache reads have bounded fallback; required download/body reads have a 30-second deadline, abort the startup batch on failure, and show a usable retry button. Added preparation progress to the splash. Added bootstrap regression tests to npm test.

Validation: static PWA and service-worker tests passed; bootstrap tests passed for cache-only startup with no network, avoiding optional media/WASM requests, correct binary ZIP bytes, one applet start, a stalled required request, and the retry UI. Native macOS WebKit with iPad settings passed cold/browser and controlled installed-mode launches. Chrome with iPad launch settings passed offline startup and opened the bundled CarInLoop TRZ offline (53 video frames, four tracks).

Limits: navigator.standalone was simulated in desktop WebKit/Chrome; this is not a physical Home Screen installation. iPad simulator Safari loaded the deployed page, but Home Screen installation could not be completed through the simulator's UI automation. The downloaded WebKit test browser returned an internal error on offline navigation; an independent minimal service-worker control did the same, so no WebKit offline qualification is claimed from that harness. The local fix requires uploading the new distribution and confirmation on the user's actual iPad. No changes were published to physlets.org during this work.

## Marker long-press popup persistence — November 4, 2026

The deployed `swingjs/swingjs2.js` matched the local PWA when investigation began. Found two release problems: a one-second cleanup timer discarded context-gesture ownership while the finger could still be held down; multiple SwingJS listeners could also process one release, with a later listener generating an ordinary Java click that closed the menu. Duplicate touchend/mouseup events could additionally reach document-level dismissal handlers.

Changed the touch bridge to retain a triggered gesture until its release or a new press, preserve it across pointer/touch cancellation, mark a consumed native context release so it cannot be processed twice, stop duplicate release events from reaching document handlers, and suppress the originating compatibility click using the physical release time. The existing new-press behavior still dismisses menus on a touch/click in the video; menu-item input remains on its normal path. No forced reopening or popup dismissal timer is used.

Added tests against the actual event-bridge functions covering long pointer/touch holds, repeated listeners for one release, compatibility mouse/touch releases, cancellation, missing releases, subsequent video presses, and ordinary taps. The original code failed the retained-release regression. Browser testing opened a BallToss marker's context menu, held for 4.5 seconds, released, checked continued visibility after the compatibility click and an idle interval, and dismissed it with a video touch. Passed in native macOS WebKit with iPad settings and in Chrome using native browser touch events. These tests are not a physical iPad/Pencil qualification. Static PWA, startup-bridge, and service-worker regression checks passed. The ZIP and generated precache list were rebuilt; physlets.org was not modified by this local change.

Desktop regression also passed: after the touch sequence, an ordinary right-click reopened the marker context menu and a normal video click dismissed it.

## Latest tracker-online sync — November 4, 2026

Synced from `/Users/wochristian/J2SProjects/GitHubOSP/tracker-online/docs`, HEAD `5f19fee`, including the newer uncommitted working-tree core. Source core SHA-256: `e418e0d7c75706be1fa50c155667bd48594a6c5c348f68dba976d35507c4184d`.

Updated the compiled Tracker core and both shared MANIFEST.MF files. Preserved PWA wrappers and browser/installed launch narratives, icons and manifest identity, offline startup improvements, supplemental assets, touch-bridge corrections, and metadata-reader fixes. The new core contains the Java marker-popup guard confirmed on Tracker Online. Reapplied only the two required PWA MediaInfo locator arguments to the incoming core; restoring those arguments to their upstream form reproduces the source core exactly. The upstream metadata library's disabled locateFile hook remains corrected in the PWA. No source-only deletions were propagated to supplemental PWA resources.

Validation passed: static PWA checks; service-worker, bootstrap, and touch-context regression tests; cold installed-mode startup and full worker installation; offline reopening; offline CarInLoop project loading (53 frames/four tracks); remote BallToss project loading and marker-menu persistence after a 4.5-second hold, release, compatibility click, and idle interval; dismissal by the next video touch; desktop right-click and click-away behavior. Marker tests passed in macOS WebKit with iPad settings and Chrome native touch input. These are browser-profile tests, not new physical-device qualification. Regenerated the precache and rebuilt `Tracker-PWA.zip`. No live hosting deployment was changed.
