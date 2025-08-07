const charities = [
  {
    name: "Save the Children",
    description: "Providing education and relief to children in need worldwide.",
    image: "data:image/png;base64,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",
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
