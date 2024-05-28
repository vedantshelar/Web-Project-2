console.log("hello delta course ved... ");

let addBtn = document.querySelector(".addBtn");
let container = document.querySelector(".container");

addBtn.addEventListener("click", () => {

    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<textarea placeholder="enter note" name="note" id="" cols="30" rows="10" class="note"></textarea>
<button type="button" class="editBtn btn">save</button>
<button type="button" class="deleteBtn btn">delete</button>`;

    container.append(item); 

    let itemNode = document.querySelectorAll(".item");

    for (let currNode of itemNode) {
        let note = currNode.querySelector('.note');
        let editBtn = currNode.querySelector(".editBtn");
        let deleteBtn = currNode.querySelector(".deleteBtn");

        editBtn.addEventListener("click", () => {
            let newNote = note.value;
            if (newNote == "") {
                alert("Please enter some value...")
            } else {
                note.value = newNote;
                note.style.color = "green";
                alert("note has been saved successfully...")
            }
        })
        deleteBtn.addEventListener("click", () => {
            currNode.remove();
        })
    }

}); 
