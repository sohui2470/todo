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
  for (var i = 0, copy; count - 1; i++){
    copy = node.cloneNode(deep);
    node.parentNode.insertBefore(copy, node);
    console.log("now working...");
  }
}

function insertItems(input){
  for (let i = 0; i < input; i++){
    multiplyNode(document.querySelector(".roundBox span"), 1, false);
    const item = document.querySelector(`.roundBox span:nth-child(${i+1})`);
    let getItem = items[i];
    theImg = getItem.img;
    theTarget = getItem.target;
    theSize = getItem.size;
    theColor = getItem.color;
    theCate = getItem.category;
    item.innerText = theTarget+",  "+theSize;
    const itemIcon = document.createElement("img");
    itemIcon.classList.add("icon");
    itemIcon.src = theImg;
    item.appendChild(itemIcon);
    item.appendChild("br");
  }
}
// multiplyNode(document.querySelector(".roundBox span"), items.length, true);
insertItems(items.length);

