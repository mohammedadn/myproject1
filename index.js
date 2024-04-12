const cars = document.getElementById("cars");

fetch('http://localhost:3000/vehicles')
  .then(response => response.json())
  .then(data => {
  data.forEach(vehicle =>{
    const div = document.createElement("div");
    div.className = "automade";
    div.innerHTML = `
    <img src="${vehicle.photo}"/>
     <p> ${vehicle.make}   ${vehicle.model}</p>
     <p>year: ${vehicle.year}</p>
     <p>color: ${vehicle.color}</p>
     <p>price: ${vehicle.price}</p>
     <p>mileage: ${vehicle.mileage}</p>
     <button id="press" >BUY NOW</button>
    `;
    div.style.color = "white"
    div.style.width = "30%"
    
    cars.appendChild(div);
  })
  })
  .catch(error => console.error('Error fetching data:', error));

  const press = document.getElementById("press");
  press.addEventListener("click", () => {
    
  })



