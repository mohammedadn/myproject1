const cars = document.getElementById("cars");

fetch('http://localhost:3000/vehicles')
  .then(response => response.json())
  .then(data => {
  data.forEach(vehicle =>{
   
    const div = document.createElement("div");
    div.className = "automade";
    div.id = vehicle.id
    div.innerHTML = `
    <img src="${vehicle.photo}"/>
     <p> ${vehicle.make}   ${vehicle.model} ${vehicle.year} ${vehicle.color}</p>
    
     <p>PRICE ${vehicle.price}</p>
     <p>MILEAGE ${vehicle.mileage}</p>
     <button id="press${vehicle.id}" >BUY NOW</button>
    `;
  
    div.style.color = "black"
    div.style.width = "30%"
    div.style.backgroundColor = "white"
    
    cars.appendChild(div);
    displayForm(vehicle)
  })
  })
  .catch(error => console.error('Error fetching data:', error));

  function displayForm(car){

  const press = document.getElementById(`press${car.id}`);
  press.addEventListener("click", () => {
    console.log(press)

    if(!document.getElementById(`F${car.id}`)){
    const form =document.createElement("form");
    form.id = `F${car.id}`
    form.className = "form"
    form.innerHTML = ` <h2>Please fill in the form below</h2>
    <input id="name" type="text" placeholder="Enter your Name">
    <input type="number" id="number" placeholder="Enter your Number">
<button  type="submit">FINISH</button>`
document.getElementById(car.id).appendChild(form)
submitForm(car)
  }})
}



function scrollToSection(sectionId) {
  const section = document.getElementById("containa");
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scroll');

  if (scrollButton) {
    scrollButton.addEventListener('click', function() {
      scrollToSection('targetSection');
    });
  }
});


function submitForm(car){
const submitForm = document.getElementById(`F${car.id}`)

submitForm.addEventListener('submit',(event)=>{ 
  event.preventDefault()
  alert(`Thank you for your interest in this${car.make} ${car.model} ! You will be contacted by one of our elite agents`)
document.getElementById(`F${car.id}`).remove()
})
}
