document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    document.querySelector('header').classList.toggle('dark-mode');
});