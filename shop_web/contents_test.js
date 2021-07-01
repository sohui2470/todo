const items = [
  {
  img: "assets/0.png",
  target: "female",
  size: "large size",
  color: "pink",
  category: "shirt"
},{
  img: "assets/1.png",
  target: "man",
  size: "small size",
  color: "blue",
  category: "pants"
},{
  img: "assets/2.png",
  target: "man",
  size: "large size",
  color: "yellow",
  category: "pants"
},{
  img: "assets/3.png",
  target: "man",
  size: "large size",
  color: "yellow",
  category: "skirt"
},{
  img: "assets/4.png",
  target: "female",
  size: "small size",
  color: "blue",
  category: "skirt"
},{
  img: "assets/5.png",
  target: "male",
  size: "large size",
  color: "blue",
  category: "shirt"
},{
  img: "assets/6.png",
  target: "male",
  size: "large size",
  color: "yellow",
  category: "shirt"
},{
  img: "assets/7.png",
  target: "female",
  size: "small size",
  color: "pink",
  category: "skirt"
},
];

function multiplyNode(node, count, deep){
  for (var i = 0; count - 1; i++){
    let copy = node.cloneNode(deep);
    node.parentNode.insertBefore(copy, node);
    console.log("now working...");
  }
}

// multiplyNode(document.querySelector(".roundBox span"), 1, false);

const br = document.createElement("br");

function insertItems(){
  for (let i = 0; i < items.length; i++){
    const item = document.querySelector(`.items li:nth-child(${i+1})`);
    let getItem = items[i];
    theImg = getItem.img;
    theTarget = getItem.target;
    theSize = getItem.size; 
    theColor = getItem.color;
    theCate = getItem.category;
    item.innerText = theTarget+",  "+theSize;
    item.classList.add(theColor);
    item.classList.add(theCate);
    const itemIcon = document.createElement("img");
    itemIcon.classList.add("icon");
    itemIcon.src = theImg;
    item.appendChild(itemIcon);
    console.log(i);
  }
}

insertItems();