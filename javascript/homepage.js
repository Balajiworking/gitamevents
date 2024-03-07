function elevate(element) {
    element.style.transform = "translateY(-10px)";
}

function resetElevation(element) {
    element.style.transform = "translateY(0)";
}

function openPlaceholder() {
    alert("Placeholder opened!"); // Replace this with the actual functionality you need
}
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    index = (index + step + totalSlides) % totalSlides;

    const offset = -index * 100;
    for (let slide of slides) {
        slide.style.transform = `translateX(${offset}%)`;
    }
}

// Optional: Implement auto-slide functionality
setInterval(() => moveSlide(1), 3000); // Move to the next slide every 3 seconds


// Assume this array is dynamically populated with upcoming event data
var upcomingEvents = [
    /* { title: "Event 1", date: "YYYY-MM-DD", description: "Description here", imageUrl: "path/to/image" },
    { title: "Event 2", date: "YYYY-MM-DD", description: "Description here", imageUrl: "path/to/image" }, */
    // Add more event objects as needed
];

function displayEvents() {
    const container = document.getElementById('upcomingEventsContainer');

    if (upcomingEvents.length > 0) {
        upcomingEvents.forEach(function(event) {
            container.innerHTML += `
                <div class="event-block">
                    <img src="${event.imageUrl}" alt="${event.title}" />
                    <h3>${event.title}</h3>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                </div>
            `;
        });
    } else {
        container.innerHTML = '<div class="no-events">No events available</div>';
    }
}

// Call the function to display events
displayEvents();
