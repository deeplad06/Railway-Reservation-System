// Sample train data for demonstration
const trains = [
    {
        number: "12951",
        name: "Mumbai Rajdhani Express",
        source: "Mumbai",
        destination: "Delhi",
        seats: 45
    },
    {
        number: "12902",
        name: "Gujarat Mail",
        source: "Ahmedabad",
        destination: "Mumbai",
        seats: 32
    },
    {
        number: "19034",
        name: "Gujarat Express",
        source: "Ahmedabad",
        destination: "Vadodara",
        seats: 60
    },
    {
        number: "12009",
        name: "Shatabdi Express",
        source: "Ahmedabad",
        destination: "Mumbai",
        seats: 25
    }
];

const sourceInput = document.getElementById("source");
const destinationInput = document.getElementById("destination");
const searchBtn = document.getElementById("searchBtn");
const trainResults = document.getElementById("trainResults");
const message = document.getElementById("message");

function searchTrains() {
    const source = sourceInput.value.trim().toLowerCase();
    const destination = destinationInput.value.trim().toLowerCase();

    trainResults.replaceChildren();

    if (!source || !destination) {
        message.textContent = "Please enter both source and destination.";
        return;
    }

    const matchingTrains = trains.filter(train =>
        train.source.toLowerCase() === source &&
        train.destination.toLowerCase() === destination
    );

    if (matchingTrains.length === 0) {
        message.textContent = "No trains found. Please check the station names.";
        return;
    }

    message.textContent = `${matchingTrains.length} train(s) found.`;

    matchingTrains.forEach(train => {
        const card = document.createElement("div");
        card.className = "train-card";

        const heading = document.createElement("h3");
        heading.textContent = train.name;

        const details = document.createElement("p");
        details.textContent =
            `Train No: ${train.number} | ${train.source} to ${train.destination}`;

        const seats = document.createElement("p");
        seats.textContent = `Sample available seats: ${train.seats}`;

        card.append(heading, details, seats);
        trainResults.appendChild(card);
    });
}

searchBtn.addEventListener("click", searchTrains);
console.log("Feature branch: Booking status functionality");
console.log("Feature branch: Train search functionality");
