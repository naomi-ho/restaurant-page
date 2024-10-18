export function addMenuElement() {
  // create new div
  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu';

  // drinks heading
  const drinksHeader = document.createElement('h1');
  drinksHeader.textContent = 'Drinks';
  drinksHeader.className = 'drinks-header';

  // drinks content div
  const drinksContent = document.createElement('div');
  drinksContent.className = 'drinks';

  // create list with 6 drink items
  const drinksList = document.createElement('ul');
  drinksList.innerHTML = `
    <li>Matcha</li>
    <li>Matcha Latte</li>
    <li>Matcha Frappe</li>
    <li>Matcha Tea Float</li>
    <li>Matcha Lemonade</li>
    <li>Matcha Bubble Tea</li>
  `;
  drinksContent.appendChild(drinksList);

  // desserts heading
  const dessertsHeader = document.createElement('h1');
  dessertsHeader.textContent = 'Desserts';
  dessertsHeader.className = 'desserts-header';

  // desserts content div
  const dessertsContent = document.createElement('div');
  dessertsContent.className = 'desserts';

  // create list with 6 dessert items
  const dessertsList = document.createElement('ul');
  dessertsList.innerHTML = `
    <li>Matcha Soft Serve</li>
    <li>Matcha Shaved Ice</li>
    <li>Matcha Brownie</li>
    <li>Matcha Tiramisu</li>
    <li>Matcha Mochi</li>
    <li>Matcha Cheesecake</li>
  `;
  dessertsContent.appendChild(dessertsList);

  // add elements to new div
  menuDiv.appendChild(drinksHeader);
  menuDiv.appendChild(drinksContent);
  menuDiv.appendChild(dessertsHeader);
  menuDiv.appendChild(dessertsContent);

  // add div into the DOM
  document.getElementById('content').appendChild(menuDiv);
}
