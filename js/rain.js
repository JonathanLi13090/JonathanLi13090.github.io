// js/rain.js

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const numberOfRaindrops = 100; // Number of raindrops
    const fallingSpeed = 3; // Falling speed in seconds

    for (let i = 0; i < numberOfRaindrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${fallingSpeed}s`;
        drop.style.animationDelay = `${Math.random() * fallingSpeed}s`;
        body.appendChild(drop);
    }
});
