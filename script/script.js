// Date
function getFormattedDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    return {
      day: days[today.getDay()],
      date: `${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`
    };
  }
  const { day, date } = getFormattedDate();
  document.getElementById('day').textContent = day;
  document.getElementById('date').textContent = date;
  
  // Theme button random color
  document.getElementById('themeButton').addEventListener('click', () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  });
  
  // Counters
  let taskAssigned = 6;
  let navbarCount = 23;
  
  // Select Elements
  const taskAssignedElement = document.getElementById('taskAssignedCount');
  const navbarCountElement = document.getElementById('navbarCount');
  const activityLog = document.getElementById('activityLog');
  
  // Add Activity Log
  function addActivityLog(taskTitle) {
    const p = document.createElement('p');
    p.className = 'bg-gray-100 rounded-xl font-thin text-base p-4';
    const currentTime = new Date().toLocaleTimeString();
    p.textContent = `You have completed "${taskTitle}" at ${currentTime}`;
    activityLog.appendChild(p);
  }
  
  // Complete buttons
  document.querySelectorAll('.completeBtn').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const taskTitle = card.querySelector('.card-title').textContent;
      e.target.disabled = true;
      e.target.textContent = 'Completed';
      taskAssigned--;
      navbarCount++;
      taskAssignedElement.textContent = taskAssigned;
      navbarCountElement.textContent = navbarCount;
      addActivityLog(taskTitle);
      alert('Board updated successfully!');
    });
  });
  
  // Clear History
  document.getElementById('clearHistoryButton').addEventListener('click', () => {
    activityLog.innerHTML = '';
    alert('Activity history cleared!');
  });
  