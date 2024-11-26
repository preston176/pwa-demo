
# PWA Demo

This is a simple Progressive Web App (PWA) demo that showcases how to create a responsive, installable, and offline-capable web application. The app uses modern web technologies such as Service Workers, Web App Manifests, and the `beforeinstallprompt` event for a native app-like experience.

## Features

- **Responsive**: Adapts to different screen sizes (mobile, tablet, desktop).
- **Installable**: Can be installed on the user's device (home screen).
- **Offline Capabilities**: Works offline by caching resources using a Service Worker.
- **Progressive**: Demonstrates core principles of Progressive Web Apps.

## Demo

To view the demo, clone this repository, install dependencies, and run the app locally.

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pwa-demo.git
cd pwa-demo
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary dependencies.

```bash
npm install --save-dev parcel
```

### 3. Run the Application

Start the app using Parcel by running the following command:

```bash
npx parcel index.html
```

This will start a local server, and you can access the app at [http://localhost:1234](http://localhost:1234).

### 4. Open the App in Your Browser

- The app will automatically be responsive to various screen sizes.
- You can install the app on your device using the "Install" button that appears after the `beforeinstallprompt` event.
- Once installed, you can launch the app from the home screen.

## Files

- **`index.html`**: The main HTML page of the app.
- **`style.css`**: The CSS for styling the app and making it responsive.
- **`app.js`**: Handles the service worker registration and install button functionality.
- **`manifest.json`**: Defines the Web App Manifest for installability and native-like experience.
- **`service-worker.js`**: A service worker for caching resources and enabling offline functionality.

## Key Technologies Used

- **Service Workers**: For caching assets and enabling offline functionality.
- **Web App Manifest**: For providing metadata and allowing users to install the app.
- **Parcel**: A zero-config build tool to bundle and serve the app.

## Lighthouse

You can test the app using [Lighthouse](https://developers.google.com/web/tools/lighthouse). It will give you insights into performance, accessibility, and PWA compliance.

To test using Lighthouse in Chrome:

1. Open the app in Chrome DevTools.
2. Go to the **Lighthouse** tab.
3. Click **Generate Report** to see how the app is performing and where improvements can be made.

## Contributions

Feel free to fork this project and contribute by submitting pull requests. If you encounter any issues or have ideas for improvement, open an issue in the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Created by**: Preston M
**GitHub**: [Preston176](https://github.com/preston176)
