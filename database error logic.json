let history = '';
const predictions = {};

document.getElementById('searchInput').addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  if (value.length > history.length) {
    const lastChar = value[value.length - 1];
    const prefix = value.slice(-2, -1);
    if (!predictions[prefix]) predictions[prefix] = {};
    if (!predictions[prefix][lastChar]) predictions[prefix][lastChar] = 0;
    predictions[prefix][lastChar]++;
  }
  history = value;

  const predictFrom = value.slice(-1);
  const nextChar = predictions[predictFrom] ? Object.entries(predictions[predictFrom]).sort((a, b) => b[1] - a[1])[0]?.[0] : '';
  console.log('Prediction:', nextChar || 'No prediction');
});
