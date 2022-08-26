//Changes the style of the image grid when there are few images
window.onload = function() {
    //gets number of album images
    let numImages = document.getElementsByClassName("img-container").length;
    //gets the albums' container
    let imgContainer = document.getElementById("img-container");

    console.log(`Number of images: ${numImages}`);
    
    let x = window.matchMedia("(max-width: 412px;)");
    
    // Call listener function at run time
    resizeImg(x);
    
    // Attach listener function on state changes
    x.addListener(resizeImg);
      
    //if the user is on mobile && there are less than 4 images in the grid
    function resizeImg(x) {
        if (x.matches) { // If media query matches (mobile view)
            if (numImages <= 4) {
                imgContainer.style.gridTemplateColumns = "1fr";
                imgContainer.style.width = "65%";
        
                console.log("Slim style (mobile)");
            } else { //resizes back to default style when 5 or more albums used
                imgContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr)";
                imgContainer.style.width = "70%";

                console.log("Default style: 5OOrMoreStyle");
            }
        } else { //no match (desktop view)
            if (numImages <= 4) {
                imgContainer.style.gridTemplateColumns = "1fr 1fr";
                imgContainer.style.width = "50%";
        
                console.log("Slim style (widescreen)");
            } else { //resizes back to default style when 5 or more albums used
                imgContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr)";
                imgContainer.style.width = "70%";

                console.log("Default style: 5OOrMoreStyle");
            }
        }
    }    
}
