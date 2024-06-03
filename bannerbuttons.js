// buttons.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.search-options .button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.style.backgroundColor = '#ddd')
            buttons.forEach(btn => btn.style.color = 'black'); // Reset color
            this.style.backgroundColor = '#3a5199';
            this.style.color = "white" // Highlight clicked button
        });
    });
});