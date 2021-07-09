// Fetch the items from the JSON file
function loadItems() {
  return fetch('data.json')
  .then(response => response.json())
  .then(json => json.items);
}

function insertItems(items){
  return `<li class="item">
  <img src=${item.img} alt=${item.category} class="item_image"></img>
  <span class="item_description">${item.target}, ${item.size}</span>
  </li>`;
}

function showItems(items){
  items.forEach(item => {
    insertItems(item);
  });
}


// loadItems()
//   .then(items => {
//   })
//   .catch(console.log);