//Smooth Scroll Function
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
//Handle form submission (simulated)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
});