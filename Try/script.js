window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY; // How much user has scrolled
    let docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    let scrollPercent = (scrollTop / docHeight) * 100; // Scroll percentage

    let progressBar = document.getElementById("progress-bar");
    progressBar.style.width = scrollPercent + "%"; // Update the progress bar width
});
