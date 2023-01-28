import addHome from "./home";
import addMenu from "./menu";
import addContact from "./contact"

function createHeader(){

    const content = document.getElementById("content")
    const container = document.createElement("div");
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "WackDonalds"

    const tabs = document.createElement("div");
    const home = document.createElement("div");
    home.addEventListener("click", (e) => {
        content.textContent = "";
        addHome();
    })
    const menu = document.createElement("div");
    menu.addEventListener("click", (e) => {
        content.textContent = "";
        addMenu();
    })
    const contact = document.createElement("div");
    contact.addEventListener("click", (e) => {
        content.textContent = "";
        addContact();
    })

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    tabs.appendChild(home)
    tabs.appendChild(menu)
    tabs.appendChild(contact) //make function that lets tabs works when clicked

    container.appendChild(title);
    container.appendChild(tabs);

    return container;
}

function createWebsite(){
    const main = document.getElementById("main");
    const container = createHeader();
    main.appendChild(container);
    addHome();

    
}

export default createWebsite;


