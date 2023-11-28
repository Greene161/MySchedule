document.addEventListener("DOMContentLoaded", function() {
    // Sample timetable data
    const timetableData = [
      { course: "Electricity & Magnetism", time: "09:00 AM - 12:00 PM", room: "HL&LR2", day: "Thursday, 14/12/2023" },
      { course: "Higher Mathematics II", time: "09:00 AM - 12:00 PM", room: "EHL", day: "Friday, 15/12/2023" },
      { course: "Electronics for Computing I", time: "09:00 AM - 12:00 PM", room: "HL", day: "Tuesday, 19/12/2023" },
      { course: "Operating Systems", time: "02:00 PM - 05:00 PM", room: "HL", day: "Wednesday, 20/12/2023" },
      { course: "Basic Electronics I", time: "02:00 PM - 05:00 PM", room: "LR1", day: "Friday, 22/12/2023" }
    ];
  
    // Get the timetable container
    const timetableContainer = document.getElementById("timetable");
  
    // Populate the timetable
    timetableData.forEach(course => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";

    card.classList.add("animated", "fadeInUp");
  
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${course.course}</h5>
            <p class="card-text">${course.time}</p>
            <p class="card-text">${course.room}</p>
            <p class="card-text">${course.day}</p>
          </div>
        </div>
      `;

        card.style.animationDelay = `${index * 0.2}s`;
  
      timetableContainer.appendChild(card);
    });

  });
  
