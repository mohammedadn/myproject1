fetch('http://localhost:3000/vehicles')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    console.log('Fetched data:', data);
  })
  .catch(error => console.error('Error fetching data:', error));
  
