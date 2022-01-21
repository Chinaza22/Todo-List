let ourList = document.getElementById("ourList")
let textfield= document.getElementById("textfield")
let list = document.getElementById("list")

ourList.addEventListener("submit", (e)=>{
  e.preventDefault()
  createItems(textfield.value)
})

function createItems(x){
   
  let ourHTML = `<li>${x} <button onClick = "deleteItems(this)">Delete</button> </li>`
  
  list.insertAdjacentHTML("beforeend", ourHTML)
  
  textfield.value = ""
  textfield.focus()
}

function deleteItems(elementToDelete){
  elementToDelete.parentElement.remove()
}

