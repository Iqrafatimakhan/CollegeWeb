function learnMore() {
    alert("Welcome to IQRA College! Explore our courses and opportunities.");
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been received.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});