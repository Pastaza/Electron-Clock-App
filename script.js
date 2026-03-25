function updateCalendar() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = now.getDate();
    
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const day = dayNames[now.getDay()];
    const timeString = `${hours}:${minutes}:${seconds}`;

    if(document.getElementById('day')) document.getElementById('day').textContent = day;
    if(document.getElementById('date')) document.getElementById('date').textContent = date;
    if(document.getElementById('time')) document.getElementById('time').textContent = timeString;
}

updateCalendar();
setInterval(updateCalendar, 1000); 
