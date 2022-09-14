const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


const menuarea = document.querySelector("#menuarea");
const allbtn = document.querySelector("#allbtn");
const koreabtn = document.querySelector("#korebtn");
const jpnbtn = document.querySelector("#jpnbtn");
const chinabtn = document.querySelector("#chinabtn");


window.addEventListener('load', function(){
  for (let index = 0; index < menu.length; index++) {
    const menuTitle = `<div class="menu-title"><h4>${menu[index].title}</h4><div class="menu-text"><h4>${menu[index].price}</h4></div></div>`;
    const menuItems = `<div class="menu-items">
    <img class="photo" src="${menu[index].img}" alt="">
       <div class="menu-info">${menu[index].desc}</div>
      </div>`
    menuarea.innerHTML += menuTitle+menuItems;
   
  
  }
});

allbtn.addEventListener('click', function (){
  menuarea.innerHTML = "";
  jpnbtn.classList.remove("active");
  chinabtn.classList.remove("active");
  koreabtn.classList.remove("active");
  allbtn.classList.add("active");

  for (let index = 0; index < menu.length; index++) {
    const menuTitle = `<div class="menu-title"><h4>${menu[index].title}</h4><div class="menu-text"><h4>${menu[index].price}</h4></div></div>`;
    const menuItems = `<div class="menu-items">
    <img class="photo" src="${menu[index].img}" alt="">
       <div class="menu-info">${menu[index].desc}</div>
      </div>`
    menuarea.innerHTML += menuTitle+menuItems;
   
  
  }

});


let Korea = menu.filter(item => item.category == "Korea");


koreabtn.addEventListener('click', function () {
  menuarea.innerHTML = "";
  allbtn.classList.remove("active");
  jpnbtn.classList.remove("active");
  chinabtn.classList.remove("active");
  koreabtn.classList.add("active");

  for (let index = 0; index < Korea.length; index++) {
    const koreTitle = `<div class="menu-title"><h4>${Korea[index].title}</h4><div class="menu-text"><h4>${Korea[index].price}</h4></div></div>`;
  const koreItems = `<div class="menu-items">
  <img class="photo" src="${Korea[index].img}" alt="">
     <div class="menu-info">${Korea[index].desc}</div>
    </div>`
  menuarea.innerHTML += koreTitle+koreItems;
  }
});

let Japan = menu.filter(item => item.category == "Japan");


jpnbtn.addEventListener('click', function () {
  menuarea.innerHTML = "";
  allbtn.classList.remove("active");
  chinabtn.classList.remove("active");
  koreabtn.classList.remove("active");
  jpnbtn.classList.add("active");

  for (let index = 0; index < Japan.length; index++) {
    const japanTitle = `<div class="menu-title"><h4>${Japan[index].title}</h4><div class="menu-text"><h4>${Japan[index].price}</h4></div></div>`;
  const japanItems = `<div class="menu-items">
  <img class="photo" src="${Japan[index].img}" alt="">
     <div class="menu-info">${Japan[index].desc}</div>
    </div>`
  menuarea.innerHTML += japanTitle+japanItems;
  }
});


let China = menu.filter(item => item.category == "China");


chinabtn.addEventListener('click', function () {
  menuarea.innerHTML = "";
  allbtn.classList.remove("active");
  jpnbtn.classList.remove("active");
  koreabtn.classList.remove("active");
  chinabtn.classList.add("active");

  for (let index = 0; index < Japan.length; index++) {
    const chinaTitle = `<div class="menu-title"><h4>${China[index].title}</h4><div class="menu-text"><h4>${China[index].price}</h4></div></div>`;
  const chinaItems = `<div class="menu-items">
  <img class="photo" src="${China[index].img}" alt="">
     <div class="menu-info">${China[index].desc}</div>
    </div>`
  menuarea.innerHTML += chinaTitle+chinaItems;
  }
});