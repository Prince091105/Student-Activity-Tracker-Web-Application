// Predefined list of student activities (JSON-based approach)
const studentActivities = [
    { id: 1, name: "Data Structures", desc: "Study Linked Lists and Stacks", status: "Pending" },
    { id: 2, name: "Front-end Hackathon", desc: "Complete Level-1 Ideation", status: "Pending" },
    { id: 3, name: "React Basics", desc: "Learn about props and state", status: "Pending" },
    { id: 4, name: "API Integration", desc: "Fetch data using Fetch API", status: "Pending" }
];

// Function to render the UI components
function renderUI() {
    const listContainer = document.getElementById('activity-list');
    const summaryHeader = document.getElementById('progress-summary');
    
    listContainer.innerHTML = ''; // Clear current list
    let completedCount = 0;

    studentActivities.forEach(activity => {
        if (activity.status === "Completed") completedCount++;

        // Create card element
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <div class="info">
                <h3>${activity.name}</h3>
                <p>${activity.desc}</p>
                <span class="badge ${activity.status.toLowerCase()}">${activity.status}</span>
            </div>
            <button onclick="markAsDone(${activity.id})" 
                    ${activity.status === 'Completed' ? 'disabled' : ''}>
                ${activity.status === 'Completed' ? 'Finished' : 'Mark Completed'}
            </button>
        `;
        listContainer.appendChild(card);
    });

    // Update Progress Summary (e.g., "3 out of 6 activities completed")
    summaryHeader.innerText = `${completedCount} out of ${studentActivities.length} activities completed`;
}

// Logic to mark activity as Completed
function markAsDone(id) {
    const task = studentActivities.find(item => item.id === id);
    if (task) {
        task.status = "Completed"; // Update local state
        renderUI(); // Refresh the view
    }
}

// Initial render on page load
window.onload = renderUI;
