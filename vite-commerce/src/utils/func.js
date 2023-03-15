export const shortDescription = (str) =>
  str.split(" ").splice(0, 6).join(" ") + "...";

export const idCategoryValue = (category, Catpath) => {
  if (category === "smartphones" || category === "laptops") {
    return Catpath("#technologySection");
  } else if (category === "fragrances" || category === "skincare") {
    return Catpath("#selfCareSection");
  }
};
