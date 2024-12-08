// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("This feature is under development. Stay tuned!");
//     });
// });


// Function for claiming an offer
function claimOffer(offerName) {
    alert(`Congratulations! You have claimed the ${offerName}.`);
}
//  ---------------------------------------


// ----Product----------------

const buyButtons = document.querySelectorAll(".buy-now");
const modal = document.getElementById("orderModal");
const closeModal = document.querySelector(".close");
const productNameField = document.getElementById("productName");
const orderForm = document.getElementById("orderForm");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productCards = document.querySelectorAll(".product-card");

// Show modal on "Buy Now" click
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product");
        productNameField.textContent = `Ordering: ${productName}`;
        modal.style.display = "block";
    });
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Search functionality
searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    productCards.forEach(card => {
        const productName = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = productName.includes(query) ? "block" : "none";
    });
});

// ------------------Contact-Page------------------------------

const contactForm = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission for validation

    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        isValid = false;
    }

    // Validate Email
    if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
        alert("Your message must be at least 10 characters long.");
        isValid = false;
    }

    if (isValid) {
        // Simulate sending a message
        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset(); // Reset the form fields
    }
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}