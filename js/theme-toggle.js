/**
 * Modern Theme Toggle Module
 * Handles dark/light theme switching with modern JavaScript patterns
 */

class ThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        this.html = document.documentElement;
        this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        this.init();
    }

    init() {
        // Set initial theme based on saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const initialTheme = savedTheme || (this.prefersDarkScheme.matches ? 'dark' : 'light');
        
        this.setTheme(initialTheme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.html.setAttribute('data-bs-theme', theme);
        this.updateIcon(theme);
    }

    updateIcon(theme) {
        if (theme === 'dark') {
            this.themeIcon.className = 'fas fa-sun';
            this.themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            this.themeIcon.className = 'fas fa-moon';
            this.themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    toggleTheme() {
        const currentTheme = this.html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Dispatch custom event for theme change
        window.dispatchEvent(new CustomEvent('themechange', { 
            detail: { theme: newTheme } 
        }));
    }

    bindEvents() {
        // Theme toggle button click
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        this.prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                this.setTheme(newTheme);
            }
        });

        // Keyboard accessibility
        this.themeToggle?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }
}

// Service Worker Registration with error handling
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/web-resume/sw.js');
            console.log('ServiceWorker registration successful:', registration.scope);
        } catch (error) {
            console.log('ServiceWorker registration failed:', error);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
});

// Register service worker when page loads
window.addEventListener('load', registerServiceWorker);

// Prefers reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');
}

export { ThemeToggle };