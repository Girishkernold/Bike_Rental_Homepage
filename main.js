const bikeData = [
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 140,
    image: "images/bike-1.png",
    tag: "New model",
  },
  {
    name: "BMW 300GS",
    type: "RIDER",
    price: 240,
    image: "images/bike-2.png",
    tag: "Free 1 hour",
  },
  {
    name: "TVS RTS250",
    type: "SPORT",
    price: 100,
    image: "images/bike-3.png",
    tag: "Free Cancellation",
  },
  {
    name: "SUZUKI ACER",
    type: "Scooter",
    price: 200,
    image: "images/bike-4.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 200,
    image: "images/bike-5.png",
    tag: "At your door",
  },
  {
    name: "RE HIMA500",
    type: "MOUNTAINER",
    price: 150,
    image: "images/bike-6.png",
    tag: "At your door",
  },
  {
    name: "YAMAHA VR280",
    type: "Scooter",
    price: 150,
    image: "images/bike-7.png",
    tag: "Free Cancellation",
  },
  {
    name: "BAJAJ X PULS",
    type: "ADVENTURE",
    price: 120,
    image: "images/bike-8.png",
    tag: "New launch",
  },
];
// fucntion to create bike box element
const createbikebox = (bike) => `
            <div class="bike-box">
              <img src="${bike.image}" alt="" class="box-img"/>
              <div class="title-price">
               <div class="title-data">
                <h2>${bike.name}</h2>
                <p>${bike.type}</p>
                </div>
                <h3 class="bike-price">Rs.${bike.price}<span>/hr</span></h3>
              </div>
              <a href="#" class="book-btn">Book Bike</a>
              <span class="tag">${bike.tag}</span>
            </div> `;

const bikecontent = document.querySelector(".bikes-content");
//create bike box and show in bikecontent div
bikeData.forEach((bike) => {
  const bikeBoxHtml = createbikebox(bike);
  bikecontent.insertAdjacentHTML("beforeend", bikeBoxHtml);
});

//menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu")
  menu.classList.toggle("move");
};

//menu click.

