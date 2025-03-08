// TypeScript for portfolio.js

// Define types for any state or data
interface PortfolioState {
    // Add any state properties here if needed
  }
  
  // Self-executing function to avoid polluting global namespace
  (() => {
    // Initialize state
    const state: PortfolioState = {};
  
    // DOM elements references
    const navLinks = document.querySelectorAll("header nav ul li");
  
    // Add event listeners to navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e: Event) => {
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
      anchor.addEventListener("click", function (e: Event) {
        e.preventDefault();
  
        const href = (this as HTMLAnchorElement).getAttribute("href");
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    // Add responsive menu toggle for mobile
    const setupResponsiveMenu = (): void => {
      const menuButton = document.querySelector(".menu-toggle");
      const navMenu = document.querySelector("header nav ul");
  
      menuButton?.addEventListener("click", () => {
        navMenu?.classList.toggle("active");
      });
    };
  
    // Initialize any functionality
    const init = (): void => {
      setupResponsiveMenu();
  
      // Add any additional initialization here
    };
  
    // Run initialization when DOM is fully loaded
    document.addEventListener("DOMContentLoaded", init);
  })();
  
  // Export as module if needed
  export {};
  