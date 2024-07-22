# To-Do-List-App-with-Google-Calendar-Integration

This project is a To-Do List application that integrates with Google Calendar. It allows users to add tasks, manage them, and view their upcoming calendar events. This guide will walk you through the setup process, including how to configure Google API credentials and run the application.

## Project Structure

- `index.html`: Main HTML file for the app.
- `styles.css`: CSS file for styling the app.
- `script.js`: JavaScript file for app functionality and Google API integration.

## Features

- Add tasks with or without timestamps.
- Toggle between light and dark themes.
- Sign in with Google and view upcoming calendar events.

## Setup and Configuration

### 1. Create a Google API Project

1. **Go to Google Cloud Console**:
   - Visit [Google Cloud Console](https://console.cloud.google.com/).

2. **Create a New Project**:
   - Click on **Select a Project** in the top navigation bar, then click **New Project**. Enter a project name and click **Create**.

3. **Enable Google Calendar API**:
   - Go to **APIs & Services** > **Library**.
   - Search for **Google Calendar API** and click **Enable**.

4. **Create OAuth 2.0 Credentials**:
   - Go to **APIs & Services** > **Credentials**.
   - Click **Create Credentials** and select **OAuth 2.0 Client ID**.
   - Configure the OAuth consent screen with required information.
   - Choose **Web application** and add authorized JavaScript origins (e.g., `http://localhost:8080`).

5. **Obtain Client ID and API Key**:
   - After creating credentials, note the **Client ID** and **API Key**. You'll need these for your app.

### 2. Update Your Application

1. **Edit `index.html`**:
   Replace `YOUR_CLIENT_ID` with your actual Google Client ID.
   ```html
   <div id="g_id_onload"
        data-client_id="YOUR_CLIENT_ID"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
        data-auto_prompt="false">
   </div>

2. **Edit `script.js`**:
Replace YOUR_CLIENT_ID and YOUR_API_KEY with your actual credentials. **

const CLIENT_ID = 'YOUR_CLIENT_ID'; // Replace with your actual Client ID
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API Key

// Google API Initialization and Other Code...

3. **Run through node.js**:

npm install -g http-server
cd /path/to/your/project
http-server or
http-server -p 8081



### Usage

1. **Save the README file** in your project root directory as `README.md`.
2. **Update placeholders** like `YOUR_CLIENT_ID` and `YOUR_API_KEY` with your actual Google API credentials.
3. **Include any additional setup or configuration details** specific to your project.

This README provides a complete tutorial for setting up and running your To-Do List App, including Google Calendar integration.

