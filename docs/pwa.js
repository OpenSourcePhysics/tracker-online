/* Tracker Online installation, updates, and OS file launches. */
(function () {
  'use strict';
  let installPrompt;
  const standaloneMode = matchMedia('(display-mode: standalone)');
  let standalone = standaloneMode.matches || navigator.standalone === true;
  if (standalone) document.documentElement.classList.add('pwa-standalone');
  const appleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
  const macSafari = !appleMobile && /Macintosh/.test(navigator.userAgent)
    && /Safari\//.test(navigator.userAgent)
    && !/Chrome|Chromium|Edg|OPR|Firefox/.test(navigator.userAgent);
  let dockBanner;
  let dockBannerDismissed = false;
  function dockInstructions() {
    if (!macSafari || standalone || dockBannerDismissed) {
      if (dockBanner) dockBanner.remove();
      dockBanner = null;
      return;
    }
    if (dockBanner) return;
    dockBanner = toast('To install Tracker on your Mac, choose File → Add to Dock in Safari.', true);
    dockBanner.id = 'pwa-dock-instructions';
    const dismiss = document.createElement('button');
    dismiss.type = 'button';
    dismiss.textContent = 'Dismiss';
    dismiss.onclick = () => {
      dockBannerDismissed = true;
      dockInstructions();
    };
    dockBanner.append(dismiss);
  }
  function toast(message, persistent = false) {
    const item = document.createElement('div');
    item.className = 'pwa-toast pwa-toast-info';
    item.setAttribute('role', 'status');
    item.append(document.createTextNode(message));
    document.body.append(item);
    if (!persistent) setTimeout(() => item.remove(), 6000);
    return item;
  }
  function installButton() {
    const button = document.getElementById('pwa-install-btn');
    if (!button) return;
    if (standalone) { button.style.display = 'none'; return; }
    button.style.display = 'none';
    button.title = '';
    button.setAttribute('aria-label', 'Install Tracker App');
    const label = button.querySelector('span:last-child');
    if (label) label.textContent = 'Install App';
    if (macSafari) {
      button.style.display = 'inline-flex';
      button.title = 'Choose File → Add to Dock in Safari';
      button.setAttribute('aria-label', 'Show Safari installation instructions');
      if (label) label.textContent = 'How to Install';
      button.onclick = () => {
        dockBannerDismissed = false;
        dockInstructions();
      };
      return;
    }
    if (installPrompt || appleMobile) {
      button.style.display = 'inline-flex';
      button.onclick = async () => {
        if (!installPrompt) {
          toast('To install Tracker: open the Share menu, choose Add to Home Screen, and enable Open as Web App if shown.');
          return;
        }
        const prompt = installPrompt;
        installPrompt = null;
        try { await prompt.prompt(); await prompt.userChoice; } catch (error) { console.warn('[PWA] Install:', error); }
        button.style.display = 'none';
      };
    }
  }
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; installButton(); });
  window.addEventListener('appinstalled', () => { installPrompt = null; const button = document.getElementById('pwa-install-btn'); if (button) button.style.display = 'none'; });
  function networkStatus() {
    const badge = document.getElementById('pwa-network-badge');
    if (!badge) return;
    badge.textContent = navigator.onLine ? 'Online' : 'Offline';
    badge.className = 'pwa-badge ' + (navigator.onLine ? 'pwa-badge-online' : 'pwa-badge-offline');
    badge.title = navigator.onLine ? 'Internet connection available' : 'Local files and installed app resources are available; online libraries require internet';
  }
  window.addEventListener('online', networkStatus);
  window.addEventListener('offline', networkStatus);
  let narrativeMode;
  function launchNarrative() {
    standalone = standaloneMode.matches || navigator.standalone === true;
    document.documentElement.classList.toggle('pwa-standalone', standalone);
    const browserWelcome = document.getElementById('pwa-browser-welcome');
    const installedWelcome = document.getElementById('pwa-installed-welcome');
    if (browserWelcome && installedWelcome) {
      browserWelcome.hidden = standalone;
      installedWelcome.hidden = !standalone;
      const mobile = appleMobile || navigator.userAgentData?.mobile === true || /Android|iPod|Mobile/.test(navigator.userAgent);
      document.getElementById('pwa-desktop-guidance').hidden = mobile;
      document.getElementById('pwa-mobile-guidance').hidden = !mobile;
      // Preserve the reader's choice until the launch mode actually changes.
      if (narrativeMode !== standalone) document.getElementById('pwa-about').open = !standalone;
      narrativeMode = standalone;
    }
    const guidance = document.getElementById('pwa-install-guidance');
    if (guidance && macSafari) {
      guidance.textContent = 'To give Tracker its own app window on your Mac, choose File → Add to Dock in Safari (macOS Sonoma or later).';
    }
    installButton();
    dockInstructions();
  }
  if (standaloneMode.addEventListener) standaloneMode.addEventListener('change', launchNarrative);
  else if (standaloneMode.addListener) standaloneMode.addListener(launchNarrative);
  window.addEventListener('pageshow', launchNarrative);
  document.addEventListener('DOMContentLoaded', () => { networkStatus(); launchNarrative(); });

  if ('serviceWorker' in navigator && window.isSecureContext) {
    window.addEventListener('load', async () => {
      const hadController = !!navigator.serviceWorker.controller;
      let updating = false;
      let offeredWorker;
      function offerUpdate(worker) {
        if (!worker || worker === offeredWorker) return;
        offeredWorker = worker;
        const item = toast('Tracker update ready. Save your work before updating.', true);
        const button = document.createElement('button');
        button.textContent = 'Update and reload';
        button.onclick = () => { updating = true; button.disabled = true; worker.postMessage({action: 'skipWaiting'}); };
        item.append(button);
      }
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (updating) location.reload();
        else if (hadController) toast('Tracker was updated in another window. Save your work and reopen it to use the update.', true);
        // First installation takes control without reloading an active project.
      });
      try {
        const registration = await navigator.serviceWorker.register('./service-worker.js', {updateViaCache: 'none'});
        offerUpdate(registration.waiting);
        registration.addEventListener('updatefound', () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller) offerUpdate(registration.waiting || worker);
            if (worker.state === 'redundant') toast('Offline installation or update failed. Reconnect and reopen Tracker to retry.');
          });
        });
        navigator.serviceWorker.ready.then(() => console.log('[PWA] Offline installation ready'));
      } catch (error) { console.warn('[PWA] Service worker:', error); toast('Offline installation could not start. Use HTTPS or localhost and try again.'); }
    });
  }

  async function waitForTracker() {
    const started = Date.now();
    while (!window.Tracker?.app?.getMainFrame$?.()) {
      if (Date.now() - started > 90000) throw new Error('Tracker did not become ready to open the file');
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return window.Tracker.app.getMainFrame$();
  }
  async function openLaunchFile(handle) {
    const file = await handle.getFile();
    if (!/\.(trz|trk)$/i.test(file.name)) throw new Error('Unsupported Tracker file: ' + file.name);
    const frame = await waitForTracker();
    const fileClass = Clazz.load('java.io.File');
    const local = Clazz.new_(fileClass.c$$S, ['/TEMP/OPEN/' + file.name.replace(/[\\/]/g, '_')]);
    const bytes = J2S._toBytes(await file.arrayBuffer());
    swingjs.JSUtil.setFileBytesStatic$O$O(local, bytes);
    org.opensourcephysics.display.OSPRuntime.cacheJSFile$java_io_File$Z(local, true);
    const io = Clazz.load('org.opensourcephysics.cabrillo.tracker.TrackerIO');
    if (io.$load$) Clazz.load(io, 2); // Initialize file filters before a first OS launch.
    // Use Tracker's existing asynchronous file loader and wait before the next file.
    await new Promise(resolve => {
      io.openFileFromDialog$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable(local, frame, {run$: resolve});
    });
  }
  if ('launchQueue' in window) {
    window.launchQueue.setConsumer(async params => {
      for (const handle of params.files || []) {
        try { await openLaunchFile(handle); }
        catch (error) { console.error('[PWA] File launch:', error); toast('Could not open the Tracker file. Use File > Open File to try again.'); }
      }
    });
  }
})();
