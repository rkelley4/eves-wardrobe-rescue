/**
 * LOGO EASTER EGG — Eve's Wardrobe Rescue
 * --------------------------------------------------
 * Click the header logo 5 times in a row (within 3 seconds of
 * each click) to reveal a hidden personal message.
 *
 * Only ONE line needs adding to index.html — this script finds
 * the logo itself and builds its own popup.
 */

(function () {
  let clickCount = 0;
  let lastClickTime = 0;

  function showEasterEgg() {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(30,34,48,0.6); z-index:1000; display:flex; align-items:center; justify-content:center; padding:1.2rem; animation:eggFadeIn 0.3s ease;';

    const box = document.createElement('div');
    box.style.cssText = 'background:#fff; border-radius:20px; padding:2rem; max-width:380px; width:100%; text-align:center; font-family:system-ui, sans-serif; border:4px solid transparent; background-image:linear-gradient(#fff,#fff), linear-gradient(135deg, #E0533D, #F0A03A, #F2CF4A, #4A9D5F, #4A7FD4); background-origin:border-box; background-clip:padding-box, border-box; animation:eggPop 0.4s ease;';

    box.innerHTML = `
      <div style="font-size:2.2rem; margin-bottom:0.8rem;">🌈✨</div>
      <p style="font-family:'Fraunces', Georgia, serif; font-size:1.15rem; line-height:1.6; color:#1E2230; margin:0 0 1.4rem;">
        Dear Miss Day,<br><br>
        Please may I join the Elms Crew?<br><br>
        This is one of the many reasons why I can look after the library and join the Elms Crew.
      </p>
      <button id="egg-close" style="background:#1E2230; color:#fff; border:none; border-radius:999px; padding:0.7rem 1.6rem; font-weight:700; cursor:pointer; font-family:inherit;">Aww! 💛</button>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById('egg-close').addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) document.body.removeChild(overlay);
    });
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes eggFadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes eggPop { from { transform:scale(0.85); opacity:0; } to { transform:scale(1); opacity:1; } }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.brand');
    if (!logo) return;

    logo.addEventListener('click', function (e) {
      const now = Date.now();
      if (now - lastClickTime > 3000) clickCount = 0; // reset if too slow
      lastClickTime = now;
      clickCount++;

      if (clickCount >= 5) {
        e.preventDefault(); // stop it jumping to #top on the 5th click
        clickCount = 0;
        showEasterEgg();
      }
    });
  });
})();
