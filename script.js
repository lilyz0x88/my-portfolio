// Console message for visitors
console.log("👾 Hello hacker. Welcome to Aliya Lily's portfolio.");

// Glitch animation effect
function startGlitchEffect(selector, frequency = 3000, duration = 300) {
    const element = document.querySelector(selector);

    if (!element) return;

    setInterval(() => {
        element.classList.add('glitch');

        setTimeout(() => {
            element.classList.remove('glitch');
        }, duration);
    }, frequency + Math.random() * 1000); // randomize glitch interval slightly
}

// Apply glitch to header and h2s
document.addEventListener("DOMContentLoaded", () => {
    startGlitchEffect('header h1', 2500, 200);
    document.querySelectorAll('h2').forEach((el, i) => {
        setTimeout(() => startGlitchEffect(`#${el.parentElement.id} h2`, 5000 + i * 1000, 150), 500);
    });
});
