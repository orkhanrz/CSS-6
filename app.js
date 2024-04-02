const categoryItems = document.querySelectorAll(".category-item");
const productItems = document.querySelector(".our-product-items");

let productsHtml = "";
let productsActive = [];

const products = {
	fruits: [
		{
			title: "Rich May",
			img: "./images/rich-may.png",
		},
		{
			title: "Summer Sweat",
			img: "./images/summer-sweet.png",
		},
		{
			title: "White Fresh",
			img: "./images/white-fresh.png",
		},
		{
			title: "Peach Flat",
			img: "./images/peach-flat.png",
		},
	],
	vegetables: [
		{
			title: "Tomato",
			img: "./images/tomato.jpg",
		},
		{
			title: "Basilica",
			img: "./images/basilica.jpg",
		},
		{
			title: "Garlic",
			img: "./images/garlic.jpg",
		},
		{
			title: "Dill",
			img: "./images/dill.jpg",
		},
	],
	driedFruits: [
		{
			title: "Dried Apricot",
			img: "./images/dried-apricot.jpg",
		},
		{
			title: "Nut",
			img: "./images/nut.jpg",
		},
		{
			title: "Walnut",
			img: "./images/walnut.jpg",
		},
		{
			title: "Dried Apple",
			img: "./images/dried-apple.jpg",
		},
	],
	driedVegetables: [
		{
			title: "Dried Spinach",
			img: "./images/dried-spinach.jpg",
		},
		{
			title: "Dried Dill",
			img: "./images/dried-dill.jpg",
		},
		{
			title: "Dried Mint",
			img: "./images/dried-mint.jpg",
		},
		{
			title: "Dried Parsley",
			img: "./images/dried-parsley.jpg",
		},
	],
};

function renderProducts(c) {
    removeActiveClass();
	c.classList.add("active");
	productsActive = products[c.id];
	productsHtml = "";

	productsActive.forEach((p) => {
		productsHtml += `
            <div class="our-product-item">
                <div class="our-product-item-img">
                    <div class="our-product-item-img-bg">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <img src="${p.img}" alt=""/>
                </div>
                <h3>${p.title}</h3>
            </div>
            `;
	});


    productItems.innerHTML = productsHtml;
}

function removeActiveClass(){
    categoryItems.forEach((c) => {
        c.classList.remove('active');
    })
}

categoryItems.forEach((c) => {
	c.addEventListener("click", function () {
        renderProducts(c);
	});
});