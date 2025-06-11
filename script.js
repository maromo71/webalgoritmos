// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Função para aplicar o tema (claro/escuro)
    const applyTheme = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        }
    };

    // Verifica a preferência salva no localStorage ou a preferência do sistema
    const isDarkModePreferred = localStorage.getItem('color-theme') === 'dark' || 
                                (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Aplica o tema inicial
    applyTheme(isDarkModePreferred);

    // Adiciona o evento de clique ao botão
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        applyTheme(isDark);
    });
});