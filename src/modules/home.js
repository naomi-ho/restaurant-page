export function addHomeElement() {
  // create new div
  const homeDiv = document.createElement('div');

  // restaurant name
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Grass';
  restaurantName.className = 'restaurant';

  // tagline
  const tagLine = document.createElement('p');
  tagLine.textContent =
    'Just another matcha cafe incorporating ceremonial-grade matcha powder into tasty items.';

  // address
  const address = document.createElement('p');
  address.textContent = '420 Green St, New York, NY 10008';

  // add elements to new div
  homeDiv.appendChild(restaurantName);
  homeDiv.appendChild(tagLine);
  homeDiv.appendChild(address);

  // add div into the DOM
  document.getElementById('content').appendChild(homeDiv);
}
