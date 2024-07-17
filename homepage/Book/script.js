document.addEventListener('DOMContentLoaded', function () {
    const clock = document.getElementById('clock');
    const laughter = document.getElementById('laughter');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    setTimeout(() => {
        laughter.play();
    }, 3000);
});
