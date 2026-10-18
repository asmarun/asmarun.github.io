(function () {
  var root = document.documentElement;

  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  var toggle = document.getElementById("theme");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Email is assembled at runtime so it isn't sitting in the HTML for scrapers.
  var addr = ["aruns291194", "gmail.com"].join("@");
  ["email-btn", "email-btn-2"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", "mailto:" + addr);
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
