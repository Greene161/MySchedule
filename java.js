document.addEventListener("DOMContentLoaded", function() {
    // Replace this data with your actual exam timetable
    const timetableData = [
        { course: "Math", date: "2023-12-01", time: "10:00 AM" },
        { course: "History", date: "2023-12-02", time: "02:00 PM" },
        // Add more entries as needed
    ];

    const timetableContainer = document.getElementById("timetable");

    // Dynamically generate timetable HTML using Bootstrap classes
    timetableData.forEach(entry => {
        const entryHtml = `<div class="card mb-3">
                                <div class="card-body">
                                    <h2 class="card-title">${entry.course}</h2>
                                    <p class="card-text">Date: ${entry.date}</p>
                                    <p class="card-text">Time: ${entry.time}</p>
                                </div>
                            </div>`;
        timetableContainer.innerHTML += entryHtml;
    });

    // Add interactivity using Bootstrap's collapse component
    const timetableEntries = document.querySelectorAll('.card');

    timetableEntries.forEach(entry => {
        entry.addEventListener('click', function() {
            // Toggle the collapse class when a timetable entry is clicked
            this.classList.toggle('collapsed');
        });
    });
});
