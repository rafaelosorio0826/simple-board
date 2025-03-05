const add__student = document.querySelector("#add__student")
const dialog__add_student =document.querySelector("#dialog__add_student")
const dialog_close = document.querySelector("#dialog_close")
const form__student = document.querySelector("#form__student")


add__student.addEventListener("click", ()=>{
    dialog__add_student.showModal();
})

dialog_close.addEventListener("click", ()=> dialog__add_student.close)