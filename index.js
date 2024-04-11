function getData(){
    fetch("https://api.api-ninjas.com/v1/cars?limit=2&make=toyota",{
        headers: { 'X-Api-Key': 'jPLNqpRuplsUcjW1P5dEQg==o0oK6spnw2wecCcQ'}
    })
    .then(res=>console.log(res.json()) )
}
getData()   