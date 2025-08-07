function showTime() {
  document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(showTime, 1000);

let charities = [];

fetch('database.json')
  .then(response => response.json())
  .then(data => {
    charities = data;
    display(charities);
  })
  .catch(error => {
    console.error("Error loading charities:", error);
  });

document.getElementById('searchInput').addEventListener('input', handleSearch);

function handleSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = charities.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q)
  );
  display(filtered);
}

function display(list) {
  const out = document.getElementById('charityList');
  out.innerHTML = '';
  if (list.length === 0) {
    out.innerHTML = '<p>No results found.</p>';
    return;
  }

  list.forEach(c => {
    const el = document.createElement('div');
    el.className = 'charity-item';
    el.innerHTML = `
      <img src="${c.image}" alt="${c.name}" />
      <h3>${c.name}</h3>
      <p>${c.description}</p>
      <a href="${c.website}" target="_blank">Visit Website</a>
    `;
    out.appendChild(el);
  });
}
