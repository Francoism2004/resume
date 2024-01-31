document.getElementById("funkButton").addEventListener("click", function() {
    // Select all elements inside the body
    var allElements = document.querySelectorAll("body *");

    // Iterate through each element
    allElements.forEach(function(element) {
        // Check if the element does not have the 'hiddenElement' class
        if (!element.classList.contains("hiddenElement")) {
            // Hide the element
            element.style.display = 'none';
        }
    });

    // Now specifically target and display hiddenElements
    var hiddenElements = document.querySelectorAll(".hiddenElement");
    hiddenElements.forEach(function(element) {
        element.style.display = 'block';
    });

    // Play the audio
    var audio = document.getElementById("myAudio");
    audio.play();
});
