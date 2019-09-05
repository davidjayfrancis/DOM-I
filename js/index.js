const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll("a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

ctaText = document.querySelector(".cta h1");
ctaText.textContent = siteContent.cta["h1"];

ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

getStartedButton = document.querySelector(".cta button");
getStartedButton.textContent = siteContent["cta"].button;

topContent = document.querySelectorAll(".top-content div");
topContent[0].querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
topContent[0].querySelector("p").textContent =
  siteContent["main-content"]["features-content"];
topContent[1].querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];
topContent[1].querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src =
  siteContent["main-content"]["middle-img-src"];

bottomContent = document.querySelectorAll(".bottom-content div");
bottomContent[0].querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector("p").textContent =
  siteContent["main-content"]["services-content"];
bottomContent[1].querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector("p").textContent =
  siteContent["main-content"]["product-content"];
bottomContent[2].querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

contactH4 = document.querySelector(".contact h4");
contactH4.innerText = siteContent["contact"]["contact-h4"];
contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
