// Subscribing the verticalOffset method to the onscroll event from window
// When user scrolls the following event will be raised yay! kill mee
// window.onscroll = function() { verticalOffset() };

// .ready is called as soon as the page (DOM) is ready and safe to maniplute
// https://api.jquery.com/ready/
// Here we attach event handlers to elements we are interacting with 
$(document).ready(function() {

    // Binding event handler for the main dropdowns' click event
    $(".main-dropdown").click(ToggleFirstLevelDropdowns);   
    $(".icon").click(HamburgerClicked);
});


///
/// Handler for hamburger icon that toggles the display states of the main dropdowns
///
function HamburgerClicked() {
    // Getting references to elements
    var mainNavContainer = document.getElementById("topnav");
    var mainDropdown = document.querySelectorAll(".main-dropdown");

    // Changes the nav's display to show all the dropdown options
    if (mainNavContainer.className === "main-nav-container") {
        // Opens the hamburger menu when clicked
        mainNavContainer.className += " active";

        // Every instance of an element with the class title "main-dropdown" needs to become "main-dropdown .active"
        // Iterating through all dropdowns so that the user can click on the nested dropdowns next
        mainDropdown.forEach(function(element) {
            element.className += " active";
        });

        //console.log("Main Nav Container, class name: " + mainNavContainer.className);                     
    }
    // Changes the nav's dispaly back to the default by changing the classname
    else {
        // Re-naming the dropdown to the original title; therefore all main dropdowns will close
        mainNavContainer.className = "main-nav-container";
        // Iterating through all dropdowns and assigning the new name
        mainDropdown.forEach(function(element) {
            element.className = "main-dropdown";
        });
        //console.log("Main Nav Container, class name: " + mainNavContainer.className);
    }
}

///
/// Handler for main dropdowns that toggle the display states of the first level dropdowns
/// 
function ToggleFirstLevelDropdowns(event){
    // Getting the "sender" from the click event and then traversing the DOM on element down to our UL
    // Once a reference to the UL is made we set it to display its contents (bunch of il)
    let ul = event.target.nextElementSibling;

    // When display is none, switch to block
    if ($(ul).css("display") === "none") {
        $(ul).css("display", "block");
    }      
    // When display block, switch to none 
    else {
        $(ul).css("display", "none");
    }    
}