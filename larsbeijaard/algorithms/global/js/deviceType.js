function showMessageOnTooSmallDevices() {
    const isSmallDevice = window.matchMedia('only screen and (max-width: 530px)').matches;
    
    // Show the user a message when their screen is too small to view the algorithms.
    if (isSmallDevice) {
        const mobileAlert = document.getElementById('mobile-alert');
        mobileAlert.style.display = 'block';
    }
}

showMessageOnTooSmallDevices();
