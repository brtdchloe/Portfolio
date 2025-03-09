// We get these elements with their id
const notesContainer = document.getElementById("notes-container")
const addNote = document.getElementById("add-note")
const addList = document.getElementById("add-list")

// This code will executes when addNote button is cliked
addNote.addEventListener("click", () => {
// We create variables that will be displayed in the HTML file
    let note = document.createElement("div")
    note.className = "note"
    let title = document.createElement("h1")
    title.className = "title"
    title.textContent = "Title"
    title.contentEditable = true
    let p = document.createElement("p")
    p.textContent = "Type something here..."
    p.contentEditable = true
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete"
    deleteBtn.textContent = "\u00d7"
    // The whole note is removed/deleted
    deleteBtn.addEventListener("click", () => {
        note.remove()
    });
// We add the elements we've created before
    note.appendChild(title)
    note.appendChild(p)
    note.appendChild(deleteBtn)
    notesContainer.appendChild(note)
});

// This code will executes when addList button is clicked
addList.addEventListener("click", () => {
// Creation of some elements
    let list = document.createElement("div");
    list.className = "list";
    let title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Title";
    title.contentEditable = true;
    let span = document.createElement("span");
    span.id = "add-li";
    span.textContent = "+ list item";
    list.appendChild(title);
    list.appendChild(span);
    let ul = document.createElement("ul");
// Creation of an element in the note
    span.addEventListener("click", () => {
        let li = document.createElement("li");
        let liContent = document.createElement("input");
        liContent.className = "li-content";
        liContent.contentEditable = true;
        let check = document.createElement("button");
        check.textContent = "✔";
        check.className = "check";
        check.addEventListener("click", () => {
            liContent.classList.toggle('checked'); 
            check.classList.toggle('checked');
        });      
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "\u00d7";
        deleteBtn.className = "delete";
// When this deleteBtn is clicked one of the note's elements is deleted
        deleteBtn.addEventListener("click", () => {
            li.remove()
        });
// We add all the elements to the li element, then to the ul element
        li.appendChild(check);
        li.appendChild(liContent);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
// We add the ul element to the list
    list.appendChild(ul);
// We add the list to our notesContainer
    notesContainer.appendChild(list);
});

// I tried to create some functions but it actually didn't work...
// function sauvegarde(){
//     localStorage.setItem('data', notesContainer.innerHTML);
// }

// function afficher(){
//     notesContainer.innerHTML = localStorage.getItem('data');
// }
