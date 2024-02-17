// Accordian
var action = "click";
var speed = "500";

$(document).ready(function(){
    // Question handler
    $('li.question').on(action, function(){
        // Get next element
        $(this).next()
            .slideToggle(speed)
            // Select all other answers
            .siblings('li.answer')
            .slideUp();
        // Get image for active question
        var img = $(this).children('img');
        // Remove the rotate class for all images except the active
        $('img').not(img).removeClass('rotate');
        // Toggle rotate class
        img.toggleClass('rotate');
    });
});
// Get the current year for footer info
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;