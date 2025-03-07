const list = document.querySelectorAll(".item");
const numberOfCategories = list.length;
console.log(`Number of categories: ${numberOfCategories}`);

list.forEach((categorie) => {
  const nameOfCategorie = categorie.querySelector("h2");
  console.log(`Category: ${nameOfCategorie.textContent}`);

  const elementsofCategorie = categorie.querySelectorAll("li");
  console.log(`Elements: ${elementsofCategorie.length}`);
});
