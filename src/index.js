import "./style.css";
import "./slider.css";
import "./portfolio.css";
import Comma from "./comma.png";
import Globe from "./globe.png";
import Dots from "./dots.png";
import Github from "./github.png";

const rowContainer = document.querySelector(".row-container");
const boxCentral = document.querySelector(".row5");

const para = document.querySelector(".row1");
para.addEventListener("click", changePage);

const realisation = document.querySelector(".row2");
realisation.addEventListener("click", showPortfolio);

const moreInfo = document.querySelector(".row3");
moreInfo.addEventListener("click", showMoreInfo);

function showMoreInfo() {
  //if content clear content
  //create div and content to show my contact info (I will use animations)
}

//needs to update or change the way we manage remove/hide etc.
function changePage() {
  titlePortolio.remove();
  ImagePortfolio1.remove();

  ImagePortfolio2.remove();
  ImagePortfolio3.remove();
  img1.remove();
  img2.remove();
  img3.remove();

  rowContainer.style.display = "block";
  console.log("hello");
}

const wrapperPortfolio = document.createElement("div");
wrapperPortfolio.classList.add("wrapper-portfolio");

const titlePortolio = document.createElement("div");
titlePortolio.classList.add("title-portfolio");

const ImagePortfolio1 = document.createElement("div");
const img1 = document.createElement("img");
ImagePortfolio1.classList.add("image-portfolio1");

const ImagePortfolio2 = document.createElement("div");
const img2 = document.createElement("img");
ImagePortfolio2.classList.add("image-portfolio2");

const ImagePortfolio3 = document.createElement("div");
const img3 = document.createElement("img");
ImagePortfolio3.classList.add("image-portfolio3");

function showPortfolio() {
  rowContainer.style.display = "none";

  // Clear existing content
  wrapperPortfolio.innerHTML = "";
  titlePortolio.textContent = "PROJECTS";

  // Creating and adding images to ImagePortfolio1
  img1.src = "https://placehold.co/400x400";
  ImagePortfolio1.innerHTML = ""; // Clear existing content
  ImagePortfolio1.appendChild(img1);
  ImagePortfolio1.appendChild(document.createTextNode("Restaurant website"));

  // Creating and adding images to ImagePortfolio2
  img2.src = "https://placehold.co/400x400";
  ImagePortfolio2.innerHTML = ""; // Clear existing content
  ImagePortfolio2.appendChild(img2);
  ImagePortfolio2.appendChild(document.createTextNode("Activity Tracker"));

  // Creating and adding images to ImagePortfolio3
  img3.src = "https://placehold.co/400x400";
  ImagePortfolio3.innerHTML = ""; // Clear existing content
  ImagePortfolio3.appendChild(img3);
  ImagePortfolio3.appendChild(document.createTextNode("Henlo"));

  // Check if elements are already appended
  if (!boxCentral.contains(wrapperPortfolio)) {
    boxCentral.appendChild(wrapperPortfolio);
  }
  if (!boxCentral.contains(titlePortolio)) {
    boxCentral.appendChild(titlePortolio);
  }
  if (!wrapperPortfolio.contains(ImagePortfolio1)) {
    wrapperPortfolio.appendChild(ImagePortfolio1);
  }
  if (!wrapperPortfolio.contains(ImagePortfolio2)) {
    wrapperPortfolio.appendChild(ImagePortfolio2);
  }
  if (!wrapperPortfolio.contains(ImagePortfolio3)) {
    wrapperPortfolio.appendChild(ImagePortfolio3);
  }
}
