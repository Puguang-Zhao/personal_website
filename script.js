// script.js
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('expanded');
    });
});
