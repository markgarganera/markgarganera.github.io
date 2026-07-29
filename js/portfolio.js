/*==============================
PORTFOLIO FILTER
==============================*/

const filterButtons =
document.querySelectorAll(".filter-btn");

const portfolioItems =
document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

setTimeout(()=>{
item.classList.add("show");
},10);

return;

}

if(item.classList.contains(filter)){

item.style.display="block";

setTimeout(()=>{
item.classList.add("show");
},10);

}else{

item.classList.remove("show");

setTimeout(()=>{
item.style.display="none";
},300);

}

});

});

});

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