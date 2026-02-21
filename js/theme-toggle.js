(function () {
    "use strict";

    var STORAGE_KEY = "theme";
    var root = document.documentElement;
    var toggle = document.getElementById("theme-toggle");
    var icon = document.getElementById("theme-icon");
    var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function resolveInitialTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") {
            return stored;
        }
        return mediaQuery.matches ? "dark" : "light";
    }

    function updateThemeMeta(theme) {
        var color = theme === "dark" ? "#020617" : "#0f766e";
        var metas = document.querySelectorAll('meta[name="theme-color"]');
        metas.forEach(function (meta) {
            if (!meta.media) {
                meta.setAttribute("content", color);
            }
        });
    }

    function updateToggleUi(theme) {
        if (!toggle || !icon) {
            return;
        }

        var isDark = theme === "dark";
        icon.textContent = isDark ? "L" : "D";
        toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
        toggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    }

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        root.style.colorScheme = theme;
        updateThemeMeta(theme);
        updateToggleUi(theme);
    }

    function setTheme(theme, persist) {
        applyTheme(theme);
        if (persist) {
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }

    function onToggleClick() {
        var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = current === "dark" ? "light" : "dark";
        setTheme(next, true);
    }

    function registerServiceWorker() {
        if (!("serviceWorker" in navigator)) {
            return;
        }

        window.addEventListener("load", function () {
            navigator.serviceWorker.register("/sw.js").catch(function (error) {
                console.warn("Service worker registration failed", error);
            });
        });
    }

    applyTheme(resolveInitialTheme());

    if (toggle) {
        toggle.addEventListener("click", onToggleClick);
    }

    function onSystemThemeChange(event) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(event.matches ? "dark" : "light");
        }
    }

    if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onSystemThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onSystemThemeChange);
    }

    registerServiceWorker();
})();
