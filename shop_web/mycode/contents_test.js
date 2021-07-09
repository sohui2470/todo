// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}

function multiplyNode(node, count, deep){
  for (var i = 0; count - 1; i++){
    let copy = node.cloneNode(deep);
    node.parentNode.insertBefore(copy, node);
    console.log("now working...");
  }
}

const br = document.createElement("br");

function insertItems(item){
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

loadItems();
insertItems();