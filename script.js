fetch('data.json')
  .then(response => response.json())
  .then(data => {
    function search() {
		// Get the value of the search input
		const searchValue = document.getElementById('search-input').value;
		const tagValue = []
		for(i=0;i<document.getElementsByClassName('tag').length;i++){
			if(document.getElementsByClassName('tag')[i].checked == true){
				tagValue.push(document.getElementsByClassName('tag')[i].value)
			}
		}
		
		// Filter the data array based on the search value, or display all of the data if the search input is empty
		let filteredData;
		if (searchValue === '' && tagValue.length == 0) {
		  filteredData = data;
		} 
		if(tagValue.length == 0) {
		  filteredData = data.filter(item => {
			return item.name.toLowerCase().includes(searchValue.toLowerCase());
		  });
		}
		if(tagValue.length > 0){

			if(searchValue === ''){
			filteredData = data.filter(item => {
				console.log(item.tags.toString().toLowerCase());
				console.log(tagValue.toString().toLowerCase())
				return item.tags.toString().toLowerCase().includes(tagValue.toString().toLowerCase());
		
			  });
			} 
			else {
				filteredData = data.filter(item => {
					
					return item.name.toLowerCase().includes(searchValue.toLowerCase());
				  });
				  console.table(filteredData)
				 
				 
				  filteredData = filteredData.filter(item => {
					
					return item.tags.toString().toLowerCase().includes(tagValue.toString().toLowerCase())
				  });

				
			}
		}
	
		// Clear the results container
		document.getElementById('results').innerHTML = '';
	  
		// Add the filtered data to the results container
		filteredData.forEach(item => {
		  const resultElement = document.createElement('div');
		  resultElement.innerHTML = 
		  `<img src="${item.photoUrl}" alt="${item.name}"><p>${item.name}</p>`;
		  document.getElementById('results').appendChild(resultElement);
		});
	  }
	  

    // Attach an event listener to the search input that calls the search function when the input value changes
    document.getElementById('search-input').addEventListener('input', search);
	for(i=0;i<document.getElementsByClassName('tag').length;i++){
		document.getElementsByClassName('tag')[i].addEventListener('change', search);
	}
	
	search();  
});
