document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Optionally, you can validate form inputs here before proceeding

        // Call your function to create the thank you message
        createThanksMessage();
    });

    function createThanksMessage() {
        document.getElementById("contact").style.display = "none";
        var h2 = document.createElement("h2");
        h2.innerHTML = "Thanks for contacting me! I'll get back to you soon";

        h2.style.color = "white";
        h2.style.textAlign = "center";
        h2.style.fontSize = "2rem";
        h2.style.margin = "20px";
        document.body.appendChild(h2);
    }
});