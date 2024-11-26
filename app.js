let deferredPrompt;
const installButton = document.getElementById('install-button');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default install prompt
    deferredPrompt = event;
    installButton.style.display = 'block'; // Show the install button
});

installButton.addEventListener('click', async () => {
    // Show the install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
    }
    deferredPrompt = null; // Reset deferredPrompt
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
        console.log('Service Worker registration failed:', error);
    });
}