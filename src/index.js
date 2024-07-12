import "./style.css";
import "./slider.css";
import "./portfolio.css";
import "./contact.css";
import Comma from "./assets/comma.png";
import Globe from "./assets/globe.png";
import Globe2 from "./assets/globe2.png";
import Dots from "./assets/dots.png";
import Github from "./assets/github.png";
import Call from "./assets/call.png";
import Quote from "./assets/quote.png";

const rowContainer = document.querySelector(".row-container");
const boxCentral = document.querySelector(".row5");
const dynamicContent = document.createElement("div");
dynamicContent.id = "dynamic-content";
boxCentral.appendChild(dynamicContent);

const para = document.querySelector(".row1");
para.addEventListener("click", () => showSection("home"));

const realisation = document.querySelector(".row2");
realisation.addEventListener("click", () => showSection("portfolio"));

const moreInfo = document.querySelector(".row3");
moreInfo.addEventListener("click", () => showSection("contact"));

const githubLink = document.querySelector(".row4");
githubLink.addEventListener("click", () => showGithub());

function showGithub() {
  open("https://github.com/ledjob");
}

function showSection(section) {
  // Clear existing content
  dynamicContent.innerHTML = "";

  // Hide row container for all sections except home
  rowContainer.style.display = section === "home" ? "block" : "none";

  // Show appropriate content
  switch (section) {
    case "home":
      showHome();
      break;
    case "portfolio":
      showPortfolio();
      break;
    case "contact":
      showContact();
      break;
  }
}

function showHome() {
  // Add any specific home content here if needed
  console.log("Showing home");
}

function showPortfolio() {
  const wrapperPortfolio = document.createElement("div");
  wrapperPortfolio.classList.add("wrapper-portfolio");

  const titlePortfolio = document.createElement("div");
  titlePortfolio.classList.add("title-portfolio");
  titlePortfolio.textContent = "PROJECTS";

  const portfolioItems = document.createElement("div");
  portfolioItems.classList.add("portfolio-items");

  wrapperPortfolio.appendChild(titlePortfolio);
  wrapperPortfolio.appendChild(portfolioItems);

  const projects = [
    { title: "Restaurant website", img: "https://placehold.co/400x400" },
    { title: "Activity Tracker", img: "https://placehold.co/400x400" },
    { title: "Henlo App", img: "https://placehold.co/400x400" },
  ];

  projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add(`image-portfolio${index + 1}`);

    const img = document.createElement("img");
    img.src = project.img;

    const title = document.createElement("p");
    title.textContent = project.title;

    projectDiv.appendChild(img);
    projectDiv.appendChild(title);

    portfolioItems.appendChild(projectDiv);
  });

  dynamicContent.appendChild(wrapperPortfolio);
}

function showContact() {
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");

  const leftPart = document.createElement("div");
  leftPart.classList.add("left");

  const rightPart = document.createElement("div");
  rightPart.classList.add("right");

  const ticketWrapper = document.createElement("div");
  ticketWrapper.classList.add("ticket-content-wrapper");

  const ticketVisualProfile = document.createElement("div");
  ticketVisualProfile.classList.add("ticket-visual-profile");

  const myEmail = document.createElement("div");
  myEmail.classList.add("my-email");
  myEmail.textContent = "ex@example.com";

  const devTitle = document.createElement("div");
  devTitle.classList.add("dev-title");
  devTitle.textContent = "Full-stack";

  const dev = document.createElement("div");
  dev.classList.add("dev");
  dev.textContent = "dev";

  const ticketVisual = document.createElement("div");
  ticketVisual.classList.add("ticket-profile-profile");

  const ticketImg = document.createElement("img");
  ticketImg.classList.add("ticket-profile-image");
  ticketImg.src = "https://github.com/ledjob.png";

  const ticketProfileText = document.createElement("div");
  ticketProfileText.classList.add("ticket-profile-text");

  const ticketPorfileName = document.createElement("p");
  ticketPorfileName.classList.add("ticket-profile-name");
  ticketPorfileName.textContent = "Sasha Daxler";

  const ticketVisualNumberWrapper = document.createElement("div");
  ticketVisualNumberWrapper.classList.add("ticket-visual-number-wrapper");

  const ticketVisualNumber = document.createElement("div");
  ticketVisualNumber.classList.add("ticket-visual-number");
  ticketVisualNumber.textContent = "№ 888888";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const title = document.createElement("h2");
  title.textContent = "CONTACT INFORMATION";

  const email = document.createElement("p");
  email.textContent = "Email: ex@example.com";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";

  contactInfo.appendChild(title);
  ticketWrapper.appendChild(ticketVisualProfile);
  ticketVisualProfile.appendChild(ticketVisual);
  ticketVisual.appendChild(ticketImg);
  ticketVisual.appendChild(ticketProfileText);
  ticketProfileText.appendChild(ticketPorfileName);
  ticketWrapper.appendChild(ticketVisualNumberWrapper);
  ticketVisualNumberWrapper.appendChild(ticketVisualNumber);
  ticketVisualNumberWrapper.appendChild(myEmail);
  ticketWrapper.appendChild(devTitle);
  ticketWrapper.appendChild(dev);

  // ticketWrapper.appendChild(phone);

  ticket.appendChild(leftPart);
  ticket.appendChild(rightPart);
  ticket.appendChild(ticketWrapper);

  contactInfo.appendChild(ticket);

  // Add animation class
  contactInfo.classList.add("fade-in");

  dynamicContent.appendChild(contactInfo);
}

//uncomment for api call

// async function fetchGitHubData(username) {
//   try {
//     // Fetch user profile data
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${username}`
//     );

//     if (profileResponse.status === 403) {
//       displayErrorMessage(
//         "Sorry, API rate limit reached. Please try again later."
//       );
//       return;
//     }

//     const profileData = await profileResponse.json();

//     // Fetch user repositories data
//     const reposResponse = await fetch(profileData.repos_url);

//     if (reposResponse.status === 403) {
//       displayErrorMessage(
//         "Sorry, API rate limit reached. Please try again later."
//       );
//       return;
//     }

//     const reposData = await reposResponse.json();

//     // Display the fetched data
//     displayGitHubData(profileData, reposData);
//   } catch (error) {
//     console.error("Error fetching GitHub data:", error);
//     displayErrorMessage(
//       "An error occurred while fetching data. Please try again later."
//     );
//   }
// }

// function displayGitHubData(profileData, reposData) {
//   const githubInfoDiv = document.getElementById("github-info");

//   // Create and append profile data
//   const profileDiv = document.createElement("div");
//   profileDiv.innerHTML = `

//     <p>Followers: ${profileData.followers} - Following: ${profileData.following}</p>
//     <p>Public Repos: ${profileData.public_repos}</p>
//   `;
//   githubInfoDiv.appendChild(profileDiv);

//   // Create and append repositories data
//   // const reposDiv = document.createElement("div");
//   // reposDiv.innerHTML = "<h3>Repositories</h3>";
//   // reposData.slice(0, 5).forEach((repo) => {
//   //   const repoElement = document.createElement("p");
//   //   repoElement.innerHTML = `<a href="${repo.html_url}" target="_blank">${
//   //     repo.name
//   //   }</a>: ${repo.description || "No description"}`;
//   //   reposDiv.appendChild(repoElement);
//   // });
//   // githubInfoDiv.appendChild(reposDiv);
// }

// function displayErrorMessage(message) {
//   const githubInfoDiv = document.getElementById("github-info");
//   githubInfoDiv.innerHTML = `<p>${message}</p>`;
// }

// // Call the function with your GitHub username
// fetchGitHubData("ledjob");

// Initial load
showSection("home");
