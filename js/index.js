"use strict";
async function insertcat() {
    const url = await getImageUrl();
    const catImage = document.getElementById("catImage");
    catImage.src = url;
}
async function getImageUrl() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    return data[0].url;
}
