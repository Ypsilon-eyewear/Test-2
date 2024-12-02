// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Dynamic welcome message based on time of day
const welcomeMessage = document.querySelector("#welcome-section p");
const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {
    welcomeMessage.textContent = "Good morning! Start your day with the perfect eyewear.";
} else if (currentHour >= 12 && currentHour < 18) {
    welcomeMessage.textContent = "Good afternoon! Explore our exclusive collection.";
} else {
    welcomeMessage.textContent = "Good evening! Discover luxury eyewear for every occasion.";
}

// Button click effect (example for try-on glasses button)
document.querySelector("#virtual-tryon .cta-button").addEventListener("click", function() {
    alert("This feature is under development! Stay tuned.");
});

// Placeholder for language change feature
const changeLanguage = (language) => {
    alert(`Language switched to . This feature is coming soon!`);
};

// Example usage (can be linked to a dropdown in the navigation)
document.querySelector("nav").addEventListener("dblclick", () => {
    changeLanguage("Arabic"); // Replace with logic to select the desired language
});