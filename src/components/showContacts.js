export function showContact() {
  const dynamic = document.querySelector("#dynamic-content");
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

  dynamic.appendChild(contactInfo);
}
