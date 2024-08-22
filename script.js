document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value;
    
    // Fetch results from the backend API
    fetch(`https://footydex.fly.dev//search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultList = document.getElementById('resultList');
            resultList.innerHTML = '';
            data.results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result;
                resultList.appendChild(li);
            });
        });
});
