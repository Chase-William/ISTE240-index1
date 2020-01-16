// Subscribing the verticalOffset method to the onscroll event from window
// When user scrolls the following event will be raised yay! kill mee
window.onscroll = function() { verticalOffset() };

// Handles the highest level of the dropdown being displayed
function displayMainDropdown() {    
    let mainNavContainer = document.getElementById("topnav");
    let x = document.querySelectorAll(".main-dropdown");

    // Changes the nav's display to show all the dropdown options
    if (mainNavContainer.className === "nav-ul-container") {
        // Opens the hamburger menu when clicked
        mainNavContainer.className += " active";

        x.forEach(function(element) {
            element.className += " active";
        });
        //console.log("Main Nav Container, class name: " + mainNavContainer.className);                     
    }
    // Changes the nav's dispaly back to the default by changing the classname
    else {
        mainNavContainer.className = "nav-ul-container";
         x.forEach(function(element) {
            element.className = "main-dropdown";
        });
        //console.log("Main Nav Container, class name: " + mainNavContainer.className);
    }
}

// Controls the left-vertical-nav movement when scrolling
function verticalOffset()
{    
    let x = document.getElementById("nav-container");                                
    // console.log("x.style.top - was assigned a value of: " + x.style.top);
    // console.log("window.pageXOffset - was assigned a value of: " + window.pageYOffset);

    // Check to prevent nav from going negative (so high up we cant see it as we scroll down)
    if (window.pageYOffset < 152){                         
        // IMPORTANT - need to have the "px" otherwise dumb thing won't assign unless 0
        x.style.top = (152 - window.pageYOffset + "px");        
    }
}

// .ready is called as soon as the page (DOM) is ready and safe to maniplute
// https://api.jquery.com/ready/
// Here we attach event handlers to elements we are interacting with 
$(document).ready(function() {

    // When spans nested within the nav are clicked -- TODO: FIX THIS ---------------------------------------
    $("nav span").click(function(event){ 
        // Check the first child element of the object sender 
        if ($(this).children().is(":visible"))  { 
            $(this).children().hide(); // Hide the child ul
            $(this).prev().attr("class", "nav-arrow");
        } else { // Runs if the child element of object sender "ul" is hidden   
            $(this).children().show(); // Show the child ul
            $(this).prev().attr("class", "nav-arrow active");            
        }        
        // Stops event bubbling, or traveling up the element hierarchy
        event.stopPropagation();    
        console.log($(this).prev().attr("class"));
        // First we are get the attribute 'class' which displays its className
        // Then we append the same objects
        //https://api.jquery.com/visible-selector/
        console.log($(this).attr('class') + " visibility property is: " + $(this).children().is(":visible"));
    });    
});