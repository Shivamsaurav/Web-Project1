console.log("This is Project 1.");
ShowNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    ShowNotes();
});

// Function to show Notes from localStorage
function ShowNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Notes ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
                    </div>
                </div>
                `;
    });

    let noteElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElem.innerHTML = html;
    }
    else {
        noteElem.innerHTML = `Nothing to display use "Add Notes" Section.`;
    }
}


// Function to delete note
function deleteNote(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    ShowNotes();
}


// To search in notes
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputval = search.value;
    let noteCards = document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})