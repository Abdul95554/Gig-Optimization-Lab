// ===============================
// WhatsApp Configuration
// ===============================

// WhatsApp Number (Country code without +)
const whatsappNumber = "923043244657";


// Default Message
const defaultMessage = "Hello, I am interested in your services at Gig Optimization Lab.";


// ===============================
// Open WhatsApp Function
// ===============================

function openWhatsApp(message = defaultMessage) {

  const url =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");

}


// ===============================
// Service Buttons (Order Now)
// ===============================

document.querySelectorAll(".card button").forEach((btn) => {

  btn.addEventListener("click", () => {

    openWhatsApp(
      "Hello, I want to order your Fiverr optimization package. Please guide me."
    );

  });

});


// ===============================
// Navbar Contact Button
// ===============================

document.querySelectorAll('a[href="#contact"]').forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    openWhatsApp(
      "Hello, I want to contact Gig Optimization Lab for Fiverr services."
    );

  });

});


// ===============================
// Hero WhatsApp Button
// ===============================

document.querySelectorAll(".primary").forEach((btn) => {

  btn.addEventListener("click", (e) => {

    e.preventDefault();

    openWhatsApp(
      "Hello, I visited your website and want Fiverr ranking and optimization services."
    );

  });

});


// ===============================
// Footer WhatsApp Click (Optional)
// ===============================

document.querySelectorAll(".footer p").forEach((text) => {

  text.addEventListener("click", () => {

    openWhatsApp();

  });

});


// ===============================
// Contact Button Fix
// ===============================

document.querySelectorAll(".contact-btn").forEach((btn) => {

  btn.addEventListener("click", (e) => {

    e.preventDefault();

    openWhatsApp(
      "Hello, I want to contact Gig Optimization Lab for Fiverr services."
    );

  });

});
