// Regenerate the responsive /brand-system page from the pristine Claude Design
// bundle. The export ("LineHaul Station Brand System.html") is a self-rendering
// dc-runtime bundle that swaps the whole document for its template at runtime, so
// a plain <style>/<meta> in <head> is discarded. Instead we append a tiny outer
// <script> that polls for the rendered #dc-root and injects a responsive <style>
// into the live DOM (the JS realm survives the bundler's document swap). This
// never mutates the integrity-sensitive bundler template.
//
// Run from the project root after re-exporting the bundle:
//   node scripts/brand-system-responsive.mjs
import fs from 'fs';
const SRC = 'LineHaul Station Brand System.html';        // pristine bundle at project root
const OUT = 'public/brand-system/index.html';            // served at /brand-system (see next.config rewrite)

let file = fs.readFileSync(SRC, 'utf8'); // pristine original — discards any prior edits

const CSS = `
/* LHS responsive layer — injected at runtime into the rendered #dc-root doc.
   The export is a fixed desktop layout: a 236px position:fixed <aside> table of
   contents + a margin-left:236px content column, clamp() type, auto-fit grids. */
html, body { margin: 0; background: #0B0B0B; max-width: 100%; }
body { overflow-x: hidden; }
#dc-root, #dc-root *, #dc-root *::before, #dc-root *::after { box-sizing: border-box; }
#dc-root { overflow-wrap: break-word; }
#dc-root img, #dc-root svg, #dc-root video, #dc-root canvas, #dc-root table { max-width: 100% !important; height: auto; }

@media (max-width: 820px) {
  #dc-root aside[style*="position: fixed"], #dc-root [style*="position: fixed"][style*="height: 100vh"] {
    position: static !important; width: 100% !important; height: auto !important;
    max-height: 58vh !important; border-right: none !important;
    border-bottom: 1px solid rgba(176,176,176,0.18) !important;
  }
  #dc-root [style*="margin-left: 236px"] { margin-left: 0 !important; }
}

@media (max-width: 1024px) {
  #dc-root [style*="width:"]    { max-width: 100% !important; }
  #dc-root [style*="min-width"] { min-width: 0 !important; }
  #dc-root [style*="flex"]      { flex-wrap: wrap !important; min-width: 0 !important; }
  #dc-root [style*="flex: 0 0"], #dc-root [style*="flex:0 0"] { flex-shrink: 1 !important; }
  #dc-root [style*="grid-template-columns"] {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)) !important;
  }
}

@media (max-width: 760px) {
  #dc-root [style*="padding: 96px"], #dc-root [style*="padding:96px"] {
    padding-left: 22px !important; padding-right: 22px !important;
  }
  #dc-root [style*="grid-template-columns"] {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr)) !important; gap: 14px !important;
  }
  #dc-root [style*="grid-template-rows"] {
    grid-template-rows: none !important; grid-template-columns: 1fr !important; grid-auto-flow: row !important;
  }
}

@media (max-width: 480px) {
  #dc-root [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
}`;

const bootstrap = `<script>/* LHS-RESPONSIVE bootstrap */(function(){var css=${JSON.stringify(CSS)};function add(){var root=document.getElementById('dc-root');if(!root)return false;if(document.getElementById('lhs-responsive-style'))return true;var s=document.createElement('style');s.id='lhs-responsive-style';s.textContent=css;(document.head||document.documentElement).appendChild(s);return true;}if(!add()){var iv=setInterval(function(){if(add())clearInterval(iv);},80);setTimeout(function(){clearInterval(iv);},20000);}})();</script>`;

// insert before the final </body> of the OUTER document
const idx = file.lastIndexOf('</body>');
if (idx === -1) throw new Error('no </body> in outer file');
file = file.slice(0, idx) + bootstrap + '\n' + file.slice(idx);
fs.writeFileSync(OUT, file);
console.log('bootstrap injected before </body>. output bytes:', Buffer.byteLength(file));
