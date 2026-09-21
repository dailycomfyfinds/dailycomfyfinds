// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // Select the affiliate buttons
    const usButton = document.getElementById("btn-us");
    const egButton = document.getElementById("btn-eg");

    // Example function to log clicks for analytics before redirecting
    function trackClick(event, region) {
        // Here you could send an event to Google Analytics or Meta Pixel
        console.log(`Link clicked: ${region} store`);
    }

    if (usButton) {
        usButton.addEventListener("click", (e) => {
            trackClick(e, "US");
            // e.preventDefault(); // Uncomment this if you want to test the click without redirecting
        });
    }

    if (egButton) {
        egButton.addEventListener("click", (e) => {
            trackClick(e, "Egypt");
        });
    }
});
