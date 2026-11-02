const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace this with the academy's WhatsApp number, including country code.
// Example: "919876543210" (do not include +, spaces or hyphens).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

document.getElementById("enrollForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    "Hello SV Mehendi Academy!",
    "",
    `Name: ${data.get("name")}`,
    `WhatsApp: ${data.get("phone")}`,
    `Course: ${data.get("course")}`,
    `Message: ${data.get("message") || "No additional message"}`
  ].join("\\n");

  if (WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("formStatus").textContent =
      "Demo form ready. Add your WhatsApp number in script.js to activate enquiry submission.";
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
