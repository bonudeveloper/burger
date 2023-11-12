let products = document.querySelectorAll(".toggles");
let total = 2;

let deleteMaxsulot = document.querySelectorAll(".del");
let btnsMaxsulotlar = document.querySelectorAll(".maxsulot");
let deleteAll = document.querySelector(".delAll");
let harid =document.querySelector(".harid");

let order = document.querySelector(".order");

function zakaz() {
  order.addEventListener("click", (e) => {
    e.preventDefault();
    let random = Math.floor(Math.random() *(35-10+1)+10);
    document.querySelector(".numZakaz").textContent = random;
    harid.classList.add("visible");
  });
}
zakaz();


function umumiyNarx() {
    document.querySelector(".total").textContent = total;
};

btnsMaxsulotlar.forEach((m) =>{
    m.addEventListener("click", (e)=>{
      let li = e.target;
      while ( li.tagName !="LI"){
        li = e.target.parentElement;
      }
        let price = + li.getAttribute("data-price");
        let target = document.querySelector(li.getAttribute("data-target"));
        // let image = document.createElement("img");
        // image.src = li.getAttribute("data-image");
        // target.appendChild(image);
        //  image.style.display = "block"; 
        
        

        total += price;
       target.classList.add("show");

       umumiyNarx();
    })
})

deleteMaxsulot.forEach((m) => {
  m.addEventListener("click", (e) => {
    let li = e.target;
    while (li.tagName != "LI") {
      li = e.target.parentElement;
    }
    let price = +li.getAttribute("data-price");
    let target = document.querySelector(li.getAttribute("data-target"));

    total -= price;
    target.classList.remove("show");
    

    umumiyNarx();
    if (total < 2) {
      total = 2;
    }
  });
});


// deleteAll.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector(".total").innerHTML = 2;

// });