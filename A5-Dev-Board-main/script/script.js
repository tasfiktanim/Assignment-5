// Data time 
function getFormattedDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const today = new Date();
    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    return {
        day: dayName,
        date: `${monthName} ${date} ${year}`
    };
}

// Update Card-3 with the dynamic date
const card3DayElement = document.querySelector('.bg-blue-50.ml-11 span p');
const card3DateElement = document.querySelector('.bg-blue-50.ml-11 span h1');

if (card3DayElement && card3DateElement) {
    const formattedDate = getFormattedDate();
    card3DayElement.textContent = formattedDate.day;
    card3DateElement.textContent = formattedDate.date;
}


// Random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add click event listener to the button
const themeButton = document.querySelector('button');
if (themeButton) {
    themeButton.addEventListener('click', () => {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });
}

// Task Assigned Count
let taskAssignedCount = 6; 
const taskAssignedElement = document.querySelector('.bg-blue-50.w-\\[210px\\].h-\\[90px\\] span h1'); 

// Navbar Count
let navbarCount = 23; 
const navbarCountElement = document.querySelector('.bg-blue-50.rounded-full.p-2.h-12.w-28 h1'); 

// Activity Log Section
const activityLogContainer = document.querySelector('.bg-white.w-\\[366px\\].p-6.rounded-md.flex-shrink-0'); 

// update Task Assigned Count
function updateTaskAssignedCount() {
    taskAssignedCount--; 
    taskAssignedElement.textContent = taskAssignedCount; 
}

// update Navbar Count
function updateNavbarCount() {
    navbarCount++; 
    navbarCountElement.textContent = navbarCount; 
}

//Activity Log
function addActivityLog(taskTitle) {
    const currentTime = new Date().toLocaleTimeString(); 
    const logEntry = document.createElement('p'); 
    logEntry.className = 'bg-gray-100 rounded-xl font-thin text-base p-4 mb-2'; 
    logEntry.textContent = `You have completed the task "${taskTitle}" at ${currentTime}`; 
    activityLogContainer.appendChild(logEntry); 
}

//"Completed" buttons
const completedButtons = document.querySelectorAll('.btn.bg-blue-500.text-white'); 
completedButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const taskCard = button.closest('.card'); 
        const taskTitle = taskCard.querySelector('.card-title').textContent; 
        button.disabled = true; 
        button.textContent = 'Completed'; 
        updateTaskAssignedCount(); 
        updateNavbarCount(); 
        addActivityLog(taskTitle); 
        alert('Board updated successfully'); 
    });
});

// Clear History Button
const clearHistoryButton = document.querySelector('.bg-blue-500.text-white.py-2.px-4.rounded-lg'); 

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', () => {
        activityLogContainer.innerHTML = ''; 
    });
}