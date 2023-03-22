export const filteredByCategory = (list, key, value) =>
  list.filter((item) => item[key] === value);

export const ingredientsArray = (x) => {
  const ingredients = [
    x.strIngredient1,
    x.strIngredient2,
    x.strIngredient3,
    x.strIngredient4,
    x.strIngredient5,
    x.strIngredient6,
    x.strIngredient7,
    x.strIngredient8,
    x.strIngredient9,
    x.strIngredient10,
    x.strIngredient11,
    x.strIngredient12,
    x.strIngredient13,
    x.strIngredient14,
    x.strIngredient15,
  ].filter((ingredient) => ingredient !== null);
  return ingredients;
};

export const heroDataArr = {
  ordinary: "Don't escape the ordinary, drink it!",
  ordinaryImg:
    "https://png2.cleanpng.com/sh/91fd010286fb9104ce78751d4063f8d1/L0KzQYm3VsI1N5NoeZH0aYP2gLBuTf1we5R0j592dXzoPbP8gBsua5DogAZqaXywd7r1hBVzNZNqfeQ2dnBne7K0VfIzbpdpeatrMEm1c4G1UMI1QWc4Sqo6NUK8SIi4V8g2P2M4S5D5bne=/kisspng-moscow-mule-buck-cocktail-ginger-beer-vodka-5b2ffda9b092c0.0249632815298717857233.png",
  cocktail: "Save water, drink to KALAKALA instead!",
  cocktailImg:
    "https://png2.cleanpng.com/sh/14ebe85950c2a18167aa754fdfef9801/L0KzQYq4UcA2N5Z2kpH9cnHxg8HokvVvfF5yh9xydHAwc7FqiCRicZ06fNU7OUC6R7K7gfU5PF8AUKk9OUK8SIK8V8MxO2M1TacBN0S4PsH1h5==/transparent-mojito-cocktail5dc29077a4ae84.9874929815730320556745.png",
  shake: "When life get though, SHAKE IT!",
  shakeImg:
    "https://png2.cleanpng.com/sh/0710c0bba75d622dbc598c8329f73898/L0KzQYm3U8A2N6Z2fZH0aYP2gLBuTgNud5D5gNtuLXr4ebTsTf1qdJx4gNN0ZT3mf7TylPFqdF51hNN3dD3web3yTgdifJZ3e9H1b4KwesbwgBUuPZIAfKU6MkPpQ4HtUcAvPmc1SKQAMEG0RYO3UsUyOWg2UasANj7zfri=/kisspng-smoothie-juice-milkshake-cocktail-plant-milk-watercolor-juice-5a9d3123f30f10.6600250115202511719956.png",
  cocoa: "Life happens, Chocolate helps!",
  cocoaImg:
    "https://png2.cleanpng.com/sh/8b4f742c58fbec913b10c896c20e2552/L0KzQYq3WcIyN6hAiJH9cnHxg8HokvVvfF5ygd50c3jke7a0VfQ5PpI4e6gAYkC3SIK1Vcg3P2g2Uao6NUa8QYG7WMM5O2g3UJD5bne=/transparent-milkshake-5d86a3c65b0481.5867719815691048383728.png",
  shot: "Alcohol may not be the answer, but it's worth a SHOT",
  shotImg:
    "https://png2.cleanpng.com/sh/c56123af731a0a8b0231c67b887303a2/L0KzQYm3U8I5N6NqiZH0aYP2gLBuTgdpcaRwfes2ZHn2hLrzjPVlNZNqjtd7YXfoPbPshgIue5R0jNVxLYfrecTymb1kdJp1RdN1Y3Brf720VfFjamYAe6s6YUfmQ4m1U8I2O2kAS6c6NUK1QoOAVsU4OWE9TZD5bne=/kisspng-whiskey-distilled-beverage-beer-scotch-whisky-clip-alcohol-5abb59c91a7c38.3253893515222276571085.png",
  liqueur: "Candy is dandy but liqueur is quicker",
  liqueurImg:
    "https://png2.cleanpng.com/sh/5172b951e4bc56ef539a386badb84d49/L0KzQYm3U8A1N5VpfZH0aYP2gLBuTgdpcaRwkZ92b3Bxg7nwjvUubJp4jNt1bHXnPbPslvVzaZhqRdH1ZD3pccTvif9vbZUyjtdsdHB1PcjwjvUuPZIAe9NqY0nnQIe4WMMvOWo5TKIAOUa0RYO3UsE3P2g8UKc8NT7zfri=/kisspng-whisky-moonshine-distilled-beverage-old-fashioned-vector-wine-5a9caac9d06183.1944059615202167778535.png",
  beer: "Beer is good, but BEERS are better",
  beerImg:
    "https://png2.cleanpng.com/sh/b3a34230bb0a9ff937170b0033e758f6/L0KzQYm3VsI3N5l6eZH0aYP2gLBuTfJmbaMyiAZuaX6wfcbuTfNtcaEyeeR9LUXlQ4OAg8M4OJVmedc7LkK1Qoq4VcM1OWY4SKI8NUK4RYG8Vr5xdpg=/kisspng-beer-stein-mug-clip-art-5b327c370daae2.222915341530035255056.png",
  softDrink: "A soft drink, on a hot day, is a miracle",
  softDrinkImg:
    "https://png2.cleanpng.com/sh/a50bf368d883853b857d740c1cf187f1/L0KzQYm3UsI0N6J1fZH0aYP2gLBuTf9zaZ9sfZ9zdXnmdX76jBZ1NZV3gdD0LX3sfLy0gBFzfJD0hp9zdXnmdX68gckxOWk2TdYAZXO1QnA6VsU4Omk2T6MAMUm2SYOAWMk5P2c3RuJ3Zx==/kisspng-orange-juice-soft-drink-milk-cartoon-juice-5a901815d5ec22.3657281715193927898762.png",
  punch: "Time flies when you are having a PUNCH!",
  punchImg:
    "https://png2.cleanpng.com/sh/50fb4b59fff94b9e12bdc9989431fc02/L0KzQYm3UsA5N6twj5H0aYP2gLBuTgNidph3gdM2Y3Bme8XoifwucqZue9c2c4D1ecXDTf1idplmjOZqbj3zcbr1lPVlNZ1qhdH3YXToPYboVBNiamg5T9U6Y0izPoa7VcQ4OWM1Sac6OEG0SYiCVsUxQGUziNDw/kisspng-sangria-cocktail-juice-spritz-manhattan-painted-lemonade-5a7cab747c1c80.5454712015181197965084.png",
  coffeeTea: "Life begins after COFFE! Be positiviTEA!",
  coffeeTeaImg:
    "https://png2.cleanpng.com/sh/2664ffdea6fb3da82e56f30f0280c647/L0KzQYm3UsE0N6R4j5H0aYP2gLBuTgdifJZ3e9H1b4KwgLLwjwRqdpgyfORqd3nxd37okwQucZ1xjeV9cnH3ebF1TfNwbpdqfZ8AYUi2QIiBhMVkapJrT5CEMEW0SIa8V8E2OWk6S6gAOEm2R4qBTwBvbz==/kisspng-watercolor-painting-drawing-art-illustration-coffee-5a83078d5cbaf7.9051855715185365893798.png",
};
