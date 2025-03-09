// Initialization of constants by getting their id
const notesContainer = document.getElementById("notes-container")
const addNote = document.getElementById("add-note")
const addList = document.getElementById("add-list")

// this code will executes when addNote button is clicked
addNote.addEventListener("click", () => {
    // Creation of a variable called note
    let note = document.createElement("div")
    note.className = "note"
    // Creation of the h1 title element
    let title = document.createElement("h1")
    title.className = "title"
    title.textContent = "Title"
    title.contentEditable = true
    // Creation of a p element
    let p = document.createElement("p")
    p.textContent = "Type something here..."
    p.contentEditable = true
    // Creation of a delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete"
    deleteBtn.id = "delete-note"
    deleteBtn.textContent = "\u00d7"
    // When deleteBtn is clicked the whole note is deleted
    deleteBtn.addEventListener("click", () => {
        note.remove()
    });
    // We add all the elements to the note
    note.appendChild(title)
    note.appendChild(p)
    note.appendChild(deleteBtn)
    // We add the note in the notesContainer
    notesContainer.appendChild(note)
});

// When addList button is clicked this code will executes
addList.addEventListener("click", () => {
    // Creation of the list element
    let list = document.createElement("div");
    list.className = "list";
    // Creation of the title
    let title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Title";
    title.contentEditable = true;
    // Creation of a deleteBtn
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete"
    deleteBtn.id = "delete-list"
    deleteBtn.textContent = "\u00d7"
    // When deleteBtn is clicked the whole list is deleted
    deleteBtn.addEventListener("click", () => {
        list.remove()
    });
    list.appendChild(deleteBtn);
    // Creation of the add-li button : it adds an item to the list
    let span = document.createElement("span");
    span.id = "add-li";
    span.textContent = "+ list item";
    // We add the title and the span element
    list.appendChild(title);
    list.appendChild(span);
    // Creation of the ul list
    let ul = document.createElement("ul");
    // When span is clicked a new item is created
    span.addEventListener("click", () => {
        // A li element
        let li = document.createElement("li");
        // that will container a text input field
        let liContent = document.createElement("input");
        liContent.className = "li-content";
        liContent.contentEditable = true;
        // but also a check button
        let check = document.createElement("button");
        check.textContent = "✔";
        check.className = "check";
        // that changes the shape of the item
        check.addEventListener("click", () => {
            liContent.classList.toggle('checked'); 
            check.classList.toggle('checked');
        });      
        // and finally a deleteItem button
        const deleteItem = document.createElement("button");
        deleteItem.textContent = "\u00d7";
        deleteItem.className = "delete";
        // that deletes the item when is clicked
        deleteItem.addEventListener("click", () => {
            li.remove()
        });
        // We add the elements to the li element
        li.appendChild(check);
        li.appendChild(liContent);
        li.appendChild(deleteItem);
        // We add the li element to the ul element
        ul.appendChild(li);
    });
    // We add the ul element to the list
    list.appendChild(ul);
    // And we finally add the list to notesContainer
    notesContainer.appendChild(list);
});

// Functions I tried to create but don't work as I expected
// function sauvegarde(){
//     localStorage.setItem('data', notesContainer.innerHTML);
// }

// function afficher(){
//     notesContainer.innerHTML = localStorage.getItem('data');
// }
