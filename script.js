const notesContainer = document.getElementById("notes-container")
const addNote = document.getElementById("add-note")
const addList = document.getElementById("add-list")

addNote.addEventListener("click", () => {
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
    deleteBtn.id = "delete-note"
    deleteBtn.textContent = "\u00d7"
    deleteBtn.addEventListener("click", () => {
        note.remove()
    });
    note.appendChild(title)
    note.appendChild(p)
    note.appendChild(deleteBtn)
    notesContainer.appendChild(note)
});

addList.addEventListener("click", () => {
    let list = document.createElement("div");
    list.className = "list";
    let title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Title";
    title.contentEditable = true;
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete"
    deleteBtn.id = "delete-list"
    deleteBtn.textContent = "\u00d7"
    deleteBtn.addEventListener("click", () => {
        list.remove()
    });
    list.appendChild(deleteBtn);
    let span = document.createElement("span");
    span.id = "add-li";
    span.textContent = "+ list item";
    list.appendChild(title);
    list.appendChild(span);
    let ul = document.createElement("ul");
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
        const deleteItem = document.createElement("button");
        deleteItem.textContent = "\u00d7";
        deleteItem.className = "delete";
        deleteItem.addEventListener("click", () => {
            li.remove()
        });
        li.appendChild(check);
        li.appendChild(liContent);
        li.appendChild(deleteItem);
        ul.appendChild(li);
    });
    list.appendChild(ul);
    notesContainer.appendChild(list);
});

// function sauvegarde(){
//     localStorage.setItem('data', notesContainer.innerHTML);
// }

// function afficher(){
//     notesContainer.innerHTML = localStorage.getItem('data');
// }
