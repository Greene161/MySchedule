document.addEventListener("DOMContentLoaded", function() {
    // Replace this data with your actual exam timetable
    const timetableData = [
        { course: "Math", date: "2023-12-01", time: "10:00 AM" },
        { course: "History", date: "2023-12-02", time: "02:00 PM" },
        // Add more entries as needed
    ];

    const timetableContainer = document.getElementById("timetable");

    // Dynamically generate timetable HTML
    timetableData.forEach(entry => {
        const entryHtml = `<div class="timetable-entry">
                                <h2>${entry.course}</h2>
                                <p>Date: ${entry.date}</p>
                                <p>Time: ${entry.time}</p>
                            </div>`;
        timetableContainer.innerHTML += entryHtml;
    });
});
