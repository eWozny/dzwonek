function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
