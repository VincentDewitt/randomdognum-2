'use strict';
function getDogImage(numphotos){
    fetch(`https://dog.ceo/api/breeds/image/random/${numphotos}`)
    .then(response => response.json())
    .then(responseJson =>
        releasetheHounds(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}
function submitButton(){
$(".submitform").on("submit", event =>{
    event.preventDefault();
    let numphotos = $(".numvalue").val()
    console.log(numphotos);
    if (numphotos > 50){
       alert("Number needs to be less than 50") 
    }
    else{
    getDogImage(numphotos);
}
$(".dog-results").empty()
})
}
function releasetheHounds(responseJson){

    for (let i=0; i<responseJson.message.length; i++){
        $('.dog-results').append(
            `<img src="${responseJson.message[i]}" class="dog-image">`
        )
    }
}
submitButton();