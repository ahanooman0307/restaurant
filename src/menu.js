function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add("menu");

    menu.appendChild(createItem("Fries", "$0.47", "These delicious fries made with our secret ingredient will have you coming back for more", "./images/fries.jpeg"));
    menu.appendChild(createItem("Burger", "FREE", "This burger was aged like wine so that you can enjoy the richness of time", "./images/burger.jpeg"))
    menu.appendChild(createItem("Chicken Wings", "$8.03", "These chicken wings were specially cut by our chefs to make for a more enjoyable meal", "./images/chicken.jpeg"))
    menu.appendChild(createItem("Milkshake", "$200.00", "This award winning milkshake was made with a special but secret ingredient that gives it it's rich creamy flavor", "./images/milkshake.jpeg"))
    return menu;
}

function createItem(item, cost, text, pic){

    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const name = document.createElement("div");
    name.classList.add("foodName");
    name.textContent = item;


    const price = document.createElement("div");
    price.classList.add("price")
    price.textContent = cost;    


    const foodPic = document.createElement("img");
    foodPic.src = pic;

    newItem.appendChild(name);
    newItem.appendChild(foodPic);
    newItem.appendChild(price);
    newItem.appendChild(createParagraph(text));

    return newItem;
}

function createParagraph(text) {
    const paragraph = document.createElement("div");
    paragraph.classList.add("description");
    paragraph.textContent = text;
    
    return paragraph;

}

function addMenu(){
    const content = document.getElementById("content");
    content.appendChild(createMenu());

}

export default addMenu;
