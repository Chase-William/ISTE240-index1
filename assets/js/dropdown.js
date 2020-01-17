// .ready is called as soon as the page (DOM) is ready and safe to maniplute
// https://api.jquery.com/ready/
// Here we attach event handlers to elements we are interacting with 

// a reference to the media object so we can handle media viewport size changes
var mql = window.matchMedia('(min-width: 900px)');

$(document).ready(function() {

    $(".main-dropdown").click(FirstLevelDropdownClicked); 
    $(".icon").click(HamburgerClicked);    
});

// When the window changes size this is called.
// When the view is outside mobile view we need to ensure the main-dropdowns are visible
mql.addListener(function(mq) {
    if (mq.matches){
        let mainDropdowns = document.querySelectorAll(".main-dropdown");
        ToggleMainDropdownsDisplay(mainDropdowns, "block");
    }
});

///
/// Handler for hamburger icon that toggles the display states of the main dropdowns
///
function HamburgerClicked(event) {
    // Getting references to elements
    let mainDropdowns = document.querySelectorAll(".main-dropdown");

    if ($(mainDropdowns).css("display") === "none") {
        ToggleMainDropdownsDisplay(mainDropdowns, "block");
    }
    else {
        ToggleMainDropdownsDisplay(mainDropdowns, "none");
    }
}

///
/// Handler for main dropdowns that toggle the display states of the first level dropdowns
/// 
function FirstLevelDropdownClicked(event){

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

///
/// Utility function for managing a collection of main dropdowns 
///
function ToggleMainDropdownsDisplay(_mainDropdowns , value) {
    _mainDropdowns.forEach((element) => {
        // Setting the main dropdowns' to display as a block so the user can see them
        $(element).css("display", value);
    });
}