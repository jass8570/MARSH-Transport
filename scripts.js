// scripts.js - Custom Interactivity

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Sticky Navbar with Shadow
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm");
    } else {
        navbar.classList.remove("shadow-sm");
    }
});

// Flip Cards on Hover (Mobile-Friendly)
document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        const inner = card.querySelector(".flip-card-inner");
        if (inner) {
            if (inner.style.transform === "rotateY(180deg)") {
                inner.style.transform = "rotateY(0deg)";
            } else {
                inner.style.transform = "rotateY(180deg)";
            }
        }
    });
});

// Cost Calculator Logic
function calculateCost() {
    const distance = document.getElementById("distance").value;
    const weight = document.getElementById("weight").value;
    const service = document.getElementById("service").value;
    const result = document.getElementById("cost-result");

    // Validate input
    if (!distance || !weight || service === "Choose...") {
        result.innerText = "Please fill in all fields.";
        result.style.color = "red";
        return;
    }

    // Basic Cost Calculation
    let cost = distance * weight * 0.05; // Example base cost calculation
    if (service === "luxury") cost *= 1.5; // Premium cost for luxury vehicles

    // Show the result
    result.innerText = `Estimated Cost: ₹${cost.toFixed(2)}`;
    result.style.color = "green";
}

// Form Validation
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
        const requiredFields = this.querySelectorAll("[required]");
        let valid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.classList.add("is-invalid");
            } else {
                field.classList.remove("is-invalid");
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
});
