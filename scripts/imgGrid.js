//Changes the style of the image grid when there are few images
window.onload = function() {
    let numImages = document.getElementsByClassName("album-link").length;

    console.log(`Number of images: ${numImages}`);

    if (numImages < 4) {
        let imgContainer = document.getElementById("img-container");

        imgContainer.style.gridTemplateColumns = "1fr 1fr";
        imgContainer.style.width = "32%";
        

        console.log("Changed style");
        
    }
}