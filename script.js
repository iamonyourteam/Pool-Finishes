fetch('data.json')
  .then(response => response.json())
  .then(data => {
    function search() {
		// Get the value of the search input
		const searchValue = document.getElementById('search-input').value;
	  
		// Filter the data array based on the search value, or display all of the data if the search input is empty
		let filteredData;
		if (searchValue === '') {
		  filteredData = data;
		} else {
		  filteredData = data.filter(item => {
			return item.name.toLowerCase().includes(searchValue.toLowerCase());
		  });
		}
	  
		// Clear the results container
		document.getElementById('results').innerHTML = '';
	  
		// Add the filtered data to the results container
		filteredData.forEach(item => {
		  const resultElement = document.createElement('div');
		  resultElement.innerHTML = `<img src="${item.photoUrl}" alt="${item.name}"><p>${item.name}</p>`;
		  document.getElementById('results').appendChild(resultElement);
		});
	  }
	  

    // Attach an event listener to the search input that calls the search function when the input value changes
    document.getElementById('search-input').addEventListener('input', search);
	search();  
});
