const navbarElements = document.querySelector(".navbar");
const bottomContainerElements = document.querySelector(".bottom-container");

// console.log(bottomContainerElements, bottomContainerElements.offsetTop);
// console.log(navbarElements.offsetHeight);

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > bottomContainerElements.offsetTop - navbarElements.offsetHeight - 50) {
        /*
         notes: scrollY is 0 at top and maximum at 
         bottom, maxValue of scrollY changes according 
         to size and zoom level of browser */
        //* we added a margin of 50px in "text" class
        // see line 62-66 of style.css for details
        navbarElements.classList.add("active");
        // add the class "active" to navbar
    }
    else {
        navbarElements.classList.remove("active");
    }
});