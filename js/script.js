//current date 

const todayLeague = document.getElementById("todayLeague");

function getCurrentDateTimeInIST() {
    // Create a new Date object
    const now = new Date();

    // Calculate the IST offset (UTC + 5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;

    // Get the UTC time in milliseconds
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);

    // Create a new Date object for IST
    const istTime = new Date(utcTime + istOffset);

    // Format the date and time
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    return istTime.toLocaleString('en-IN', options);
}

// Display the current date and time in IST
todayLeague.textContent = getCurrentDateTimeInIST();


//Next Date
function getNextDateTimeInIST() {
    // Create a new Date object
    const now = new Date();

    // Calculate the IST offset (UTC + 5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;

    // Get the UTC time in milliseconds
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);

    // Create a new Date object for IST
    const istTime = new Date(utcTime + istOffset);

    // Add one day to the IST time
    istTime.setDate(istTime.getDate() + 1);

    // Format the date and time
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',

    };

    return istTime.toLocaleString('en-IN', options);
}

// Display the next date and time in IST
document.getElementById('nextDateTime').innerText = getNextDateTimeInIST();


// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Display the random number between 15 and 25
document.getElementById('seatLeftToday').innerText = getRandomNumber(15, 25);

// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Display the random number between 40 and 60
document.getElementById('seatLeftTommrow').innerText = getRandomNumber(40, 60);