function createContact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phone = document.createElement("div");
    phone.classList.add("phone")
    phone.textContent = "(123) - 456 - 7890"

    const email = document.createElement("div");
    email.classList.add("email");
    email.textContent = "valideats123@yahoo.com"

    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
}

function addContact(){ 
    const content = document.getElementById("content");
    content.appendChild(createContact());

}

export default addContact;