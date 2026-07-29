/*==============================
PORTFOLIO FILTER
==============================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Number of projects to show in the "All" view
const previewLimit = {
    development: 4,
    design: 3,
    graphics: 5
};

// Show only the preview items for each category
function showPreview() {

    // Hide everything first
    portfolioItems.forEach(item => {
        item.classList.remove("show");
        item.style.display = "none";
    });

    Object.keys(previewLimit).forEach(category => {

        let count = 0;

        document
            .querySelectorAll(`.portfolio-item.${category}`)
            .forEach(item => {

                if (count < previewLimit[category]) {

                    item.style.display = "block";

                    setTimeout(() => {
                        item.classList.add("show");
                    }, 10);

                    count++;

                }

            });

    });

}

// Show every project in the selected category
function showCategory(category) {

    portfolioItems.forEach(item => {

        if (item.classList.contains(category)) {

            item.style.display = "block";

            setTimeout(() => {
                item.classList.add("show");
            }, 10);

        } else {

            item.classList.remove("show");

            setTimeout(() => {
                item.style.display = "none";
            }, 300);

        }

    });

}

// Filter button events
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".filter-btn.active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        if (filter === "all") {

            showPreview();

        } else {

            showCategory(filter);

        }

    });

});

// Initial portfolio display
showPreview();

/*==============================
LIGHTBOX
==============================*/

const lightbox = GLightbox({

selector:'.glightbox',

touchNavigation:true,

loop:true,

zoomable:true,

autoplayVideos:true

});
