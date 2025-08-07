const charities = [
  {
    name: "Save the Children",
    description: "Providing education and relief to children in need worldwide.",
    image: "https://www.savethechildren.org/content/dam/usa/images/logos/stc-og-logo.jpg",
    website: "https://www.savethechildren.org"
  },
  {
    name: "Red Cross",
    description: "Providing emergency assistance and disaster relief globally.",
    image: "https://www.redcross.org/content/dam/redcross/about-us/media-assets/Red-Cross-Logo.png",
    website: "https://www.redcross.org"
  },
  {
    name: "World Wildlife Fund",
    description: "Conserving nature and protecting wildlife globally.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HZg7BodVuVj9ThMezbn5rptxReWjZ8lKiA&s",
    website: "https://www.worldwildlife.org"
  },
  {
    name: "Habitat for Humanity",
    description: "Helping families build and improve places they can call home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qTYGkpJUpTNx4hH5G-qAFYIHPsz9RaZP3Q&s",
    website: "https://www.habitat.org"
  },
  {
    name: "Doctors Without Borders",
    description: "Delivering impartial aid regardless of race, religion, or politics in over 70 countries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2DT9CdnPa5A17WhnLGU2XUrdUwUbBPmuZQ&s",
    website: "https://give.doctorswithoutborders.org"
  },
  {
    name: "Heifer International",
    description: "Helping communities fight hunger and poverty through sustainable agriculture and livestock.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrECeMg9jXHFZbJ8UG3WBXJb8nCRL5Nu8gA&s",
    website: "https://www.heifer.org"
  },
  {
    name: "Charity: Water",
    description: "Bringing clean and safe drinking water to people in developing countries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9umWwnN8EsxijISn5PPXtc9SfsJ0raGABA&s",
    website: "https://www.charitywater.org"
  }
];

const charityList = document.getElementById('charityList');
const searchInput = document.getElementById('searchInput');

function displayCharities(filteredCharities) {
  charityList.innerHTML = '';
  filteredCharities.forEach(charity => {
    const card = document.createElement('div');
    card.className = 'charity-card';
    card.innerHTML = `
      <img src="${charity.image}" alt="${charity.name}">
      <div class="charity-card-content">
        <h2>${charity.name}</h2>
        <p>${charity.description}</p>
        <a href="${charity.website}" target="_blank">Visit Website</a>
      </div>
    `;
    charityList.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = charities.filter(charity =>
    charity.name.toLowerCase().includes(query) ||
    charity.description.toLowerCase().includes(query)
  );
  displayCharities(filtered);
});

displayCharities(charities);
