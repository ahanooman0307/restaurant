
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("Welcome to Mcdonalds!"))
    const picture = document.createElement("img");
    picture.src = "./images/mcdonald.jpeg";
    picture.alt = "wackdonald";
    home.appendChild(picture);
    home.appendChild(createParagraph(" This restaurant is so amazing. You won't regret coming here!"))

    return home;
}

function createParagraph(text){
    const newParagraph = document.createElement("div");
    newParagraph.textContent = text;

    return newParagraph;
}

function addHome() {
    const content = document.getElementById("content")
    content.appendChild(createHome());

}

export default addHome