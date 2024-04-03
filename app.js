const categoryItems = document.querySelectorAll(".category-item");
const productItems = document.querySelectorAll(".our-product-items > div");

function renderProducts(c) {
	c.classList.add("active");
	const targetProducts = document.getElementById(`${c.id}-data`);
	targetProducts.classList.add('active');
}

function removeActiveClasses(items) {
	items.forEach((i) => {
		i.classList.remove("active");
	});
}

categoryItems.forEach((categoryItem) => {
	categoryItem.addEventListener("click", function () {
		removeActiveClasses(categoryItems);
		removeActiveClasses(productItems);
		renderProducts(categoryItem);
	});
});
