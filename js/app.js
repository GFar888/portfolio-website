const downloadCv = document.querySelector(".btn-cv");
const ul = document.querySelector("ul");
const allNavLinks = ul.querySelectorAll("a");

downloadCv.addEventListener("click", () => {
  const filePath = "./CV/Farid_Gulahmadov_Front_end_Web_Developer.pdf";
  const save = document.createElement("a");
  save.href = filePath;
  save.download = "Farid_Gulahmadov_CV";
  save.target = "_blank";
  document.body.appendChild(save);
  save.click();
  document.body.removeChild(save);
});

ul.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.matches("a")) {
    allNavLinks.forEach((link) => link.classList.remove("selected"));
    e.target.classList.add("selected");
  }
}

var elem1 = document.querySelector(".main-carousel-1");
var elem2 = document.querySelector(".main-carousel-2");
var flkty = new Flickity(elem1, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: true,
  // autoPlay: true,
  // autoPlay: 1500,
  wrapAround: true,
});
var flkty = new Flickity(elem2, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: true,
  // autoPlay: true,
  // autoPlay: 1500,
  wrapAround: true,
});

const copyBtn = document.querySelector(".copy-btn");

copyBtn.addEventListener("click", () => {
  copyContent();
});

const copyContent = async () => {
  var text = "farid.gulaxmedov238@gmail.com";
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
