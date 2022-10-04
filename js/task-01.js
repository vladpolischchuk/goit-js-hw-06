const categoriesRefs = document.querySelectorAll('.item');

console.log("Number of categories: ", categoriesRefs.length);

categoriesRefs.forEach(category => {
    console.log(
        `Category: ${category.children[0].textContent}
        Elements: ${category.children[1].children.length}`
    );
});