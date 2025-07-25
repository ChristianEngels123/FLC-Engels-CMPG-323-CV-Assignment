// assets/load_about_me.js

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("about-me");
  if (typeof aboutMeText !== "undefined" && container) {
    container.innerHTML = aboutMeText;

    // List styling only
    container.querySelectorAll("ul").forEach(ul => {
      ul.style.marginTop = "0.5rem";
      ul.style.marginBottom = "0.5rem";
      ul.style.paddingLeft = "1.2rem";
      ul.style.listStyleType = "disc";
    });

    container.querySelectorAll("li").forEach(li => {
      li.style.marginBottom = "0.3rem";
      li.style.lineHeight = "1.2";
    });

  } else {
    container.innerText = "Failed to load About Me content.";
  }
});
