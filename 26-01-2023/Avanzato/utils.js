const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

// const cardCreator = (data) => {
//     const userCardBoxEl = cE ("div");
//     userCardBoxEl.className ="card_Box";
//     const userImg = cE ("img");
//     userImg.setAttribute("src", data.image)
//     userImg.setAttribute("alt", "user profile picture");
//     const bioInfoEl = cE ("div");
//     bioInfoEl.className = "bio_Info"

//     const nameAgeBoxEl = cE ("div");
//     nameAgeBoxEl.className = "nameAgeInfo";
//     const nameBoxEl = cE ("div");
//     const ageBoxEl = cE ("div");
//     ageBoxEl.className = "ageBoxEl"

//    const userNameEl= cE("h1")
//    userNameEl.textContent = data.username
//    const fullNameEl= cE("h2")
//    fullNameEl.textContent= data.firstName + " " + data.lastName;
//    userNameEl.className = "userName"
//    fullNameEl.className = "firstlastName";

//    const ageEl = cE("p");
//    ageEl.textContent= "Anni: " + data.age
//     const birthDateEl= cE("p") 
//     birthDateEl.textContent= "Birthdate: " +  data.birthDate

//     const EmailEl= cE("p")
//     EmailEl.textContent= "Email: " +  data.email;
//     const AdressEl= cE("p")
//     AdressEl.textContent = "Address: " + data.address.address + ", " + data.address.city

//     ageBoxEl.append(ageEl, birthDateEl)
//     nameBoxEl.append(userNameEl, fullNameEl)
//     nameAgeBoxEl.append(nameBoxEl, ageBoxEl)
//     bioInfoEl.append(nameAgeBoxEl, EmailEl, AdressEl)
//     userCardBoxEl.append(userImg, bioInfoEl)
//     return userCardBoxEl;
// }

export{ cE, qS};
