const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main')
addBtn.addEventListener('click', () => {
        addNote();
    })


// const addNote = () => {
// const note = document.createElement('div');
// note.classList.add('note');
// note.innerHTML = `<div class="tool">
// <i class="saves fas fa-save"></i>
// <i class="remove fas fa-trash"></i>
// </div>
// <textarea></textarea>`;
// note.querySelector(".remove").addEventListener("click", () =>{
//     note.remove()
// });
// // note.querySelector('.save').addEventListener("click", () => {
// //     saveNote();
// // })
// main.appendChild(note)
// };