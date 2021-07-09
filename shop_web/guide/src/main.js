const HIDDEN_CLASSNAME = 'hidden';

// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
  <img src="${item.img}" alt="${item.category}" class="item__thumbnail">
    <span class="item__description">${item.target}, ${item.size}</span>
  </li>
  `;
}

// // Method 1. (guide code) filter items by "filter" if onButtonClick.
// function onButtonClick(event, items) {
//   const dataset = event.target.dataset;
//   const key = dataset.key;
//   const value = dataset.value;
//   if (key == null || value == null) {
//     return;
//   }
//   const filtered = items.filter(item => item[key] === value);
//   displayItems(filtered);
// }

// // Method 2. (guide + my code) filter items using "classList" hidden, using 2 functions.
// function onButtonClick(event, items) {
//   const dataset = event.target.dataset;
//   const key = dataset.key;
//   const value = dataset.value;
//   if (key == null || value == null) {
//     return;
//   }
//   updateItems(items, key, value);
// }

// function updateItems(items, key, value) {
//   let n = 1;
//   while(n <= items.length){
//     items.forEach(item => {
//       const theItem = document.body.querySelector(`.item:nth-child(${n})`);
//       if (item[key] === value) {
//         theItem.classList.remove(HIDDEN_CLASSNAME);
//       } else {
//         theItem.classList.add(HIDDEN_CLASSNAME);
//       }
//       n++;
//     });
//   }
// }

// Method 3. (my code) filter using "classList" hidden, using 1 function.
function onButtonHide(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (key == null || value == null) {
    return;
  }
  let i = 1;
  while(i <= items.length) {
    items.forEach(item => {
      const theItem = document.body.querySelector(`.item:nth-child(${i})`);
        if (item[key] === value) {
          theItem.classList.remove(HIDDEN_CLASSNAME);
        } else {
          theItem.classList.add(HIDDEN_CLASSNAME);
        }
        i++;
    });  
  }
}

// Event Listener
function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", () => onButtonHide(event, items));
  // buttons.addEventListener("click", () => onButtonClick(event, items)); // the Guide Code
}

// Main
loadItems()
  .then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items)
  })
  .catch(console.log);