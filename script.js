document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        }
    });
});
