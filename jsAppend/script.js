let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

count = localStorage.getItem("Count");
if(count == null){
    localStorage.setItem("Count", "0");
}

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

    
})
beforeCount = localStorage.getItem("Count");
localStorage.removeItem("Count");
console.log(beforeCount * 2 + 10);