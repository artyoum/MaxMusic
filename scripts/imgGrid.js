//Changes the style of the image grid when there are few images
window.onload = function() {
    //gets number of album images
    let numImages = document.getElementsByClassName("image").length;
    //gets the albums' container
    let imgContainer = document.getElementById("img-container");

    console.log(`Number of images: ${numImages}`);
    
    var x = window.matchMedia("(max-width: 700px)");
    
    // Call listener function at run time
    resizeImg(x);
    
    // Attach listener function on state changes
    x.addListener(resizeImg);
    
    //if the user is on mobile && there are less than 4 images in the grid
    function resizeImg(x) {
        if (x.matches) { // If media query matches (mobile view)
            imgContainer.style.gridTemplateColumns = "1fr";
            imgContainer.style.width = "65%";
        
            console.log("Mobile View");
        } 
        else { //no match (desktop view)
            imgContainer.style.gridTemplateColumns = "1fr 1fr";
            imgContainer.style.width = "50%";
        
            console.log("Desktop View");
        }
    }    
}
