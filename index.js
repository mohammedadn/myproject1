const cars = document.getElementById("cars");
const containa = document.getElementsByClassName("containa");
fetch('http://localhost:3000/vehicles')
  .then(response => response.json())
  .then(data => {
  data.forEach(vehicle =>{
   
    const div = document.createEl]ement("div");
    div.className = "automade";
    div.innerHTML = `
    <img src="${vehicle.photo}"/>
     <p> ${vehicle.make}   ${vehicle.model} ${vehicle.year} ${vehicle.color}</p>
    
     <p>PRICE ${vehicle.price}</p>
     <p>MILEAGE ${vehicle.mileage}</p>
     <button id="press" >BUY NOW</button>
    `;
  
    div.style.color = "black"
    div.style.width = "30%"
    div.style.backgroundColor = "white"
    
    cars.appendChild(div);
  })
  })
  .catch(error => console.error('Error fetching data:', error));

  const press = document.getElementById("press");
  press.addEventListener("click", () => {
    
  })

  function scrollToAbout(){
    containa.addEventListener("onclick", () => {
  })}



