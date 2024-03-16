// Display current time
function updateTime() {
    const now = new Date();
    const timeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('timeDetails').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to set the time
updateTime();
