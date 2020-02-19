'use strict';
function getDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}
function submitButton(){
$(.numvalue).value
}