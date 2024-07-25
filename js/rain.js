// js/rain.js

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        body.appendChild(drop);
    }
});
