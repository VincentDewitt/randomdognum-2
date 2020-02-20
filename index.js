'use strict';
function getDogImage(numphotos){
    fetch(`https://dog.ceo/api/breeds/image/random/${numphotos}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}
function submitButton(){
$(".submitform").on("submit", event =>{
    event.preventDefault();
    let numphotos = $(".numvalue").val()
    console.log(numphotos);
    if (numphotos > 50){
       alert("Number needs to be less than 50") 
    }
    getDogImage(numphotos);
})
}

submitButton();