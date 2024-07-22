const CLIENT_ID = 'yours//'; // Replace with your actual Client ID
const API_KEY = 'yours//'; // Replace with your actual API Key

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

function handleCredentialResponse(response) {
    const token = response.credential;
    gapi.load('client:auth2', () => {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }).catch((error) => {
            console.error('Error initializing Google API client:', error);
        });
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        listUpcomingEvents();
    }
}

function listUpcomingEvents() {
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then((response) => {
        const events = response.result.items;
        let output = '<h2>Upcoming Events:</h2>';
        if (events.length > 0) {
            events.forEach(event => {
                const start = event.start.dateTime || event.start.date;
                output += `<p>${start} - ${event.summary}</p>`;
            });
        } else {
            output += '<p>No upcoming events found.</p>';
        }
        document.getElementById('calendar-events').innerHTML = output;
    }).catch((error) => {
        console.error('Error fetching events:', error);
    });
}

// To-Do List Management
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list').querySelector('ul');
    const timestampSection = document.getElementById('timestamp-section');
    const addTimestamp = document.getElementById('add-timestamp');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const timestamp = document.getElementById('task-timestamp').value;

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${title}</strong><p>${description}</p>${timestamp ? `<p><small>Timestamp: ${timestamp}</small></p>` : ''}`;
        todoList.appendChild(li);

        form.reset();
        timestampSection.classList.add('d-none');
    });

    addTimestamp.addEventListener('change', function() {
        if (this.value === 'yes') {
            timestampSection.classList.remove('d-none');
        } else {
            timestampSection.classList.add('d-none');
        }
    });

    // Theme Toggle
    document.getElementById('toggle-theme').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
