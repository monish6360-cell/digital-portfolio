document.getElementById("uploadBtn").addEventListener("change", previewPhoto);

function previewPhoto(event) {

  var reader = new FileReader();

  reader.onload = function() {

    var output = document.getElementById("profilePic");

    output.src = reader.result;

  };

  reader.readAsDataURL(event.target.files[0]);

}

// ================================

// RESPONSIVENESS WITH JAVASCRIPT

// ================================

function applyResponsiveDesign() {

  const nav = document.querySelector("nav");

  const navLinks = document.querySelectorAll("nav a");

  const sections = document.querySelectorAll("section");

  const headerImg = document.querySelector("header img");

  const headerTitle = document.querySelector("header h1");

  let width = window.innerWidth;

  if (width <= 480) {

    // Mobile styles

    nav.style.display = "flex";

    nav.style.flexDirection = "column";

    nav.style.alignItems = "center";

    nav.style.padding = "5px";

    navLinks.forEach(link => {

      link.style.margin = "8px 0";

      link.style.fontSize = "16px";

    });

    sections.forEach(sec => {

      sec.style.margin = "10px";

      sec.style.padding = "12px";

    });

    headerImg.style.width = "90px";

    headerImg.style.height = "90px";

    headerTitle.style.fontSize = "20px";

  } else if (width <= 768) {

    // Tablet styles

    nav.style.display = "flex";

    nav.style.flexWrap = "wrap";

    nav.style.justifyContent = "center";

    navLinks.forEach(link => {

      link.style.margin = "10px";

      link.style.display = "block";

    });

    sections.forEach(sec => {

      sec.style.margin = "15px";

      sec.style.padding = "15px";

    });

    headerImg.style.width = "120px";

    headerImg.style.height = "120px";

    headerTitle.style.fontSize = "24px";

  } else {

    // Desktop (reset to default CSS)

    nav.style.display = "";

    nav.style.flexDirection = "";

    nav.style.flexWrap = "";

    nav.style.justifyContent = "";

    nav.style.padding = "";

    navLinks.forEach(link => {

      link.style.margin = "";

      link.style.fontSize = "";

      link.style.display = "";

    });

    sections.forEach(sec => {

      sec.style.margin = "";

      sec.style.padding = "";

    });

    headerImg.style.width = "120px";

    headerImg.style.height = "120px";

    headerTitle.style.fontSize = "";

  }

}

// Run on page load and when resizing

window.addEventListener("load", applyResponsiveDesign);

window.addEventListener("resize", applyResponsiveDesign);