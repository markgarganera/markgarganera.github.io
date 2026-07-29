/*=========================================
PORTFOLIO FILTER
=========================================*/

const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

function animateShow(item, delay = 0) {

    setTimeout(() => {

        item.style.display = "block";

        requestAnimationFrame(() => {

            item.classList.remove("hide");

            item.classList.add("show");

        });

    }, delay);

}

function animateHide(item) {

    item.classList.remove("show");

    item.classList.add("hide");

    setTimeout(() => {

        item.style.display = "none";

    }, 350);

}

function showPreview() {

    let delay = 0;

    items.forEach(item => {

        if (item.classList.contains("preview-hidden")) {

            animateHide(item);

        } else {

            animateShow(item, delay);

            delay += 50;

        }

    });

}

function showCategory(category) {

    let delay = 0;

    items.forEach(item => {

        if (item.classList.contains(category)) {

            animateShow(item, delay);

            delay += 50;

        } else {

            animateHide(item);

        }

    });

}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".filter-btn.active")
            ?.classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        const update = () => {

            if (filter === "all") {

                showPreview();

            } else {

                showCategory(filter);

            }

        };

        if (document.startViewTransition) {

            document.startViewTransition(update);

        } else {

            update();

        }

    });

});

showPreview();

/*=========================================
LIGHTBOX
=========================================*/

GLightbox({

    selector: ".glightbox",

    touchNavigation: true,

    loop: true,

    zoomable: true,

    autoplayVideos: true

});
