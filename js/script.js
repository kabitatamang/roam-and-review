function changeImage(thumbnail) {
    const largeImage = document.getElementById("largeImage");
    if (largeImage) {
        largeImage.src = thumbnail.src;
        largeImage.alt = thumbnail.alt;
    }
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent successfully!");
    });
}
