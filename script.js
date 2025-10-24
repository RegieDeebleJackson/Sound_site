async function startCamera() {
    try {
        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing the camera: ", error);
    }
}

// Start the camera when the document is loaded
document.addEventListener('DOMContentLoaded', startCamera);
