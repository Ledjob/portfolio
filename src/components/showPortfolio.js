export function showPortfolio() {
  const dynamic = document.querySelector("#dynamic-content");
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

  dynamic.appendChild(wrapperPortfolio);
}
