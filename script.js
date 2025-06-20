document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.getElementById('site-logo');

    const preloadImage = (src) => {
        const img = new Image();
        img.src = src;
    };

    // Preload both logos
    preloadImage('img/nm_black.png');
    preloadImage('img/nm_white.png');

    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            if (logo) logo.src = 'img/nm_white.png';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            if (logo) logo.src = 'img/nm_black.png';
        }
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // Load theme on page load
   /* OS theme preference logic
   const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
  */

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme('light'); // Always load light mode unless user chose dark before
}
});
