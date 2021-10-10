const addBtn = document.getElementById("addnote");
getNoteLS();

addBtn.addEventListener("click",() =>{
    addNewNote();
})

function getNoteLS(){
    const notes = JSON.parse(localStorage.getItem("notes"));
    if(notes){
        notes.forEach(note => {
            addNewNote(note);
        })
    }
}

function addNewNote(text = ''){
    const notediv = document.createElement("div");
    notediv.classList.add("note-container");
    notediv.innerHTML = `
         <div class="note-toolbar">
             <button class="edit"><i class="fas fa-edit"></i></button>
             <button class="delete"><i class="fas fa-trash-alt"></i></button>
         </div>
         <div class="note-body ${text?'':'hidden'}">
             <!--Marked Text Display here! -->
         </div>
         <textarea class="note-body ${text?'hidden':''}"></textarea>
    `;
 
     const editBtn = notediv.querySelector('.edit');
     const deleteBtn = notediv.querySelector('.delete');
 
     const body = notediv.querySelector('.note-body');
     const textarea = notediv.querySelector('textarea');

     textarea.value = text;
     body.innerHTML = marked(text);
 
     editBtn.addEventListener('click',()=>{
         body.classList.toggle('hidden')
         textarea.classList.toggle('hidden')
     })
 
     deleteBtn.addEventListener('click',() => {
         notediv.remove();
     })
 
     textarea.addEventListener('input',(e) =>{
         const {value} = e.target;
         body.innerHTML = marked(value);
         updateToLS();
     })
 
     document.body.appendChild(notediv);
}

function updateToLS(){
    const note = document.querySelectorAll("textarea");
    const notes = [];

    note.forEach(note =>{
        notes.push(note.value);
    })

    localStorage.setItem("notes",JSON.stringify(notes));
}



