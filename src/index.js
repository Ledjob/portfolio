import "./style.css";
import "./slider.css";
import "./portfolio.css";
import "./contact.css";
import "./responsive.css";

import { showContact } from "./components/showContacts";
import { showPortfolio } from "./components/showPortfolio";

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

showPortfolio();

showContact();

//uncomment for api call

async function fetchGitHubData(username) {
  try {
    // Fetch user profile data
    const profileResponse = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (profileResponse.status === 403) {
      displayErrorMessage(
        "Sorry, API rate limit reached. Please try again later."
      );
      return;
    }

    const profileData = await profileResponse.json();

    // Fetch user repositories data
    const reposResponse = await fetch(profileData.repos_url);

    if (reposResponse.status === 403) {
      displayErrorMessage(
        "Sorry, API rate limit reached. Please try again later."
      );
      return;
    }

    const reposData = await reposResponse.json();

    // Display the fetched data
    displayGitHubData(profileData, reposData);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    displayErrorMessage(
      "An error occurred while fetching data. Please try again later."
    );
  }
}

function displayGitHubData(profileData, reposData) {
  const githubInfoDiv = document.getElementById("github-info");

  // Create and append profile data
  const profileDiv = document.createElement("div");
  profileDiv.innerHTML = `

    <p>Github - Followers: ${profileData.followers} - Following: ${profileData.following}</p>
    <p>Public Repos: ${profileData.public_repos}</p>
  `;
  githubInfoDiv.appendChild(profileDiv);

  // Create and append repositories data
  // const reposDiv = document.createElement("div");
  // reposDiv.innerHTML = "<h3>Repositories</h3>";
  // reposData.slice(0, 5).forEach((repo) => {
  //   const repoElement = document.createElement("p");
  //   repoElement.innerHTML = `<a href="${repo.html_url}" target="_blank">${
  //     repo.name
  //   }</a>: ${repo.description || "No description"}`;
  //   reposDiv.appendChild(repoElement);
  // });
  // githubInfoDiv.appendChild(reposDiv);
}

function displayErrorMessage(message) {
  const githubInfoDiv = document.getElementById("github-info");
  githubInfoDiv.innerHTML = `<p>${message}</p>`;
}

// Call the function with your GitHub username
fetchGitHubData("ledjob");

// Initial load
showSection("contact");
