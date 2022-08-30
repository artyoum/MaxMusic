//Changes the style of the image grid when there are few images
window.onload = function() {
    //gets number of album images
    let numImages = document.getElementsByClassName("image").length;
    console.log(`Number of images: ${numImages}`);
    
    //gets the albums' container
    let imgContainer = document.getElementById("img-container");
    
    var x = window.matchMedia("(max-width: 700px)");
    console.log(`Does window.matchMedia? ${x.matches}`);
    
    //imgGrid resizing listener code starts here
    adjustMenuDesign();
    window.addEventListener("resize", adjustMenuDesign);
    
    function adjustMenuDesign() {
        const width = window.matchMedia("all and (max-width: 980px)");
        if (width.matches) { // If media query matches (mobile view)
            imgContainer.style.gridTemplateColumns = "1fr";
            imgContainer.style.width = "50%";
        
            console.log("resized");
            console.log("Mobile View");
        } 
        else { //no match (desktop view)
            imgContainer.style.gridTemplateColumns = "1fr 1fr";
            imgContainer.style.width = "65%";
        
            console.log("you fucked up again/no resize");
            console.log("Desktop View");
        }
    }
    
    /*
    // Call listener function at run time
    resizeImg(x);
    
    // Attach listener function on state changes
    x.addListener(resizeImg);
        
    //if the user is on mobile, show 1 img per row, else 2
    function resizeImg(x) {
        // If media query matches (mobile view)
        if (x.matches) { 
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
    */  
}
