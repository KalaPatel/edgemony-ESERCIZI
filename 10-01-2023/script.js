const heroArguments = {
  title: "shirty",
  img: "./img/hero1.jpg",
  subTitle: "BUY NOW OR CRY LATER",
  description: "Approfitta degli sconti e dai un'occhiata al nostro shop ; ",
};

const createHero = (heroArguments) => {
  const bodyEl = document.body;
  const heroSectEl = document.createElement("section");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h1");
  const heroSubTitleEl = document.createElement("h3");
  const heroDescEl = document.createElement("p");

  titleEl.className = "hero__title";
  titleEl.textContent = heroArguments.title;

  heroSectEl.className = "hero";

  imgEl.className = "hero__img";
  imgEl.setAttribute("src", heroArguments.img);
  imgEl.setAttribute("alt", "Hero");

  heroSubTitleEl.className = "hero__subTitle";
  heroSubTitleEl.textContent = heroArguments.subTitle;

  heroDescEl.className = "hero__description";
  heroDescEl.textContent = heroArguments.description;

  heroSectEl.append(imgEl, titleEl, heroSubTitleEl, heroDescEl);
  bodyEl.appendChild(heroSectEl);
};

createHero(heroArguments);
