const termStart = new Date('2025-01-20T12:00:00Z');
const termEnd = new Date('2029-01-20T12:00:00Z');

function updateClocks() {
  const now = new Date();
  const timeInOffice = now - termStart;
  const timeLeft = termEnd - now;
  document.getElementById('timeInOffice').innerText = formatDuration(timeInOffice);
  document.getElementById('timeLeft').innerText = formatDuration(timeLeft);
}

function formatDuration(ms) {
  if (ms < 0) return "0y 0d 0h 0m 0s";
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / (1000 * 60)) % 60;
  const h = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const d = Math.floor(ms / (1000 * 60 * 60 * 24)) % 365;
  const y = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  return `${y}y ${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateClocks, 1000);

// Google Sheets placeholders — these will connect to your sheet later
document.getElementById("costTracker").innerHTML = `
  <p>Golf: $150,000,000</p>
  <p>Properties: $17,100,000</p>
  <p>Other: $11,000,000</p>
`;

document.getElementById("profitsTable").innerHTML = `
  <tr><th>Source</th><th>Amount</th><th>Date</th></tr>
  <tr><td>Mar-a-Lago</td><td>$400,000+</td><td>2017–2021</td></tr>
  <tr><td>Trump Tower</td><td>$1,200,000</td><td>2016–2020</td></tr>
  <tr><td>Trump D.C. Hotel</td><td>$3,000,000+</td><td>2017–2021</td></tr>
`;

document.getElementById("promisesTable").innerHTML = `
  <tr><th>Promise</th><th>Status</th><th>Notes</th></tr>
  <tr><td>Build the wall</td><td>Partially Fulfilled</td><td>Incomplete coverage</td></tr>
  <tr><td>Repeal Obamacare</td><td>Not Fulfilled</td><td>Senate blocked repeal</td></tr>
`;
