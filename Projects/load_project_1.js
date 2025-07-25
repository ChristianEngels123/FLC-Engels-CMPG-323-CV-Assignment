document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("proj-1");
	if (typeof proj1Text !== "undefined" && container) {
		container.innerHTML = proj1Text;
	} else {
		container.innerText = "Failed to load About Me content.";
  }
});