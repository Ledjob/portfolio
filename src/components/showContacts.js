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

  const ticketElm = document.querySelector(".ticket");
  const contentWrapperElm = document.querySelector(".ticket-content-wrapper");

  if (ticketElm && contentWrapperElm) {
    const updateTransform = (e) => {
      const { left, top, width, height } = ticketElm.getBoundingClientRect();
      const centerPoint = { x: left + width / 2, y: top + height / 2 };

      const degreeX = (e.clientY - centerPoint.y) * 0.04;
      const degreeY = (e.clientX - centerPoint.x) * -0.04;

      const gradientAngle =
        Math.atan2(e.clientY - centerPoint.y, e.clientX - centerPoint.x) *
        (180 / Math.PI);

      ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg) translateX(-150px)`;

      contentWrapperElm.style.background = `linear-gradient(${gradientAngle}deg, #1d1e20, #121212, #1d1e20)`;

      const beforeElm = contentWrapperElm.querySelector("::before");
      if (beforeElm) {
        beforeElm.style.transform = `rotate(${gradientAngle}deg)`;
      }
    };

    window.addEventListener("mousemove", updateTransform);

    window.addEventListener("resize", () => {
      const { left, top, width, height } = ticketElm.getBoundingClientRect();
      centerPoint = { x: left + width / 2, y: top + height / 2 };
    });
  }
}
