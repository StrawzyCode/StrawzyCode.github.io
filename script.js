document.getElementById('searchBtn').addEventListener('click', function() {
    searchPostcode();
});

document.getElementById('inpt_search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchPostcode();
    }
});

function searchPostcode() {
    const postcode = document.getElementById('inpt_search').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Searching...';

    fetch(`https://your-backend-api.fly.dev/search?postcode=${encodeURIComponent(postcode)}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultsDiv.innerHTML = 'No postcode found.';
            } else {
                let resultHTML = `<h2>Nearby Stadiums</h2>`;
                data.stadiums.forEach(stadium => {
                    resultHTML += `<p>${stadium.team_name} - ${stadium.stadium} (${stadium.distance.toFixed(2)} km away)</p>`;
                });
                resultsDiv.innerHTML = resultHTML;
            }
        })
        .catch(err => {
            resultsDiv.innerHTML = 'Error fetching data. Please try again later.';
        });
}
