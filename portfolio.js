// Self-executing function to avoid polluting global namespace
(() => {
    // Initialize state
    const state = {};
  
    // DOM elements references
    const navLinks = document.querySelectorAll("header nav ul li");
  
    // Add event listeners to navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.textContent?.toLowerCase() || "";
  
        // Scroll to section based on nav item clicked
        if (target) {
          const section = document.querySelector(
            `section[data-section="${target}"]`,
          );
          section?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const href = this.getAttribute("href");
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    // Add responsive menu toggle for mobile
    const setupResponsiveMenu = () => {
      const menuButton = document.querySelector(".menu-toggle");
      const navMenu = document.querySelector("header nav ul");
  
      menuButton?.addEventListener("click", () => {
        navMenu?.classList.toggle("active");
      });
    };
  
    // Initialize any functionality
    const init = () => {
      setupResponsiveMenu();
  
      // Add any additional initialization here
    };
  
    // Run initialization when DOM is fully loaded
    document.addEventListener("DOMContentLoaded", init);
  })();
  