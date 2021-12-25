let taskContainer = document.querySelector(".taskContainer");
appendTaskContainer();
// function to print all the tasks 
function appendTaskContainer(){
    for (let index = 0; index < localStorage.length; index++) {
        let tempKey = localStorage.key(index);
        let tempDescription = localStorage[tempKey];
        let tempClassBody = document.createElement('div');
        tempClassBody.className = "card-body";
        tempClassBody.id = `${index+1}classBody`;
        let tempHeading = document.createElement('h5');
        tempHeading.className = "card-title";
        tempHeading.innerText = tempKey;
        tempPara = document.createElement('p');
        tempPara.className = "card-text";
        tempPara.innerText = tempDescription;
        let tempDelBtn = document.createElement('button');
        tempDelBtn.className = "btn btn-danger delBtn";
        tempDelBtn.innerText = "Delete";
        tempDelBtn.id = `${index+1}del`;
        tempClassBody.appendChild(tempHeading);
        tempClassBody.appendChild(tempPara);
        tempClassBody.appendChild(tempDelBtn);
        let tempCard = document.createElement('div');
        tempCard.className = "card mx-3 my-3 text-dark bg-warning";
        tempCard.id = `${index+1}`;
        tempCard.appendChild(tempClassBody);
        taskContainer.appendChild(tempCard);       
    }
}

// adding task
let taskList = document.querySelector("#taskList"); 
let addTask = document.getElementById("addTask");
let taskName = document.getElementById("taskName");
let taskDescription = document.getElementById("taskDescription");
addTask.addEventListener("click", function(e){
    let tempName = taskName.value;
    let tempDescription = taskDescription.value;
    if(tempName != "" && tempDescription !=""){
        localStorage.setItem(tempName,tempDescription);
        let tempClassBody = document.createElement('div');
        tempClassBody.className = "card-body";
        tempClassBody.id = `${localStorage.length}classBody`;
        let tempHeading = document.createElement('h5');
        tempHeading.className = "card-title";
        tempHeading.innerText = tempName;
        tempPara = document.createElement('p');
        tempPara.className = "card-text";
        tempPara.innerText = tempDescription;
        let tempDelBtn = document.createElement('button');
        tempDelBtn.className = "btn btn-danger delBtn";
        tempDelBtn.id = `${localStorage.length}del`;
        tempDelBtn.innerText = "Delete";
        tempClassBody.appendChild(tempHeading);
        tempClassBody.appendChild(tempPara);
        tempClassBody.appendChild(tempDelBtn);
        // console.log(tempClassBody);
        let tempCard = document.createElement('div');
        tempCard.className = "card mx-3 my-3 text-dark bg-warning";
        tempCard.id = localStorage.length;
        tempCard.appendChild(tempClassBody);
        taskContainer.appendChild(tempCard);
        // console.log(tempCard);
        taskDescription.value = "";
        taskName.value = "";
    }
})

// function for delete button 
taskContainer.addEventListener("click", function(e){
    let delBtnId = e.target.id;
    let delBtn = document.getElementById(`${e.target.id}`);
    if(delBtnId.includes("del")){
        let delParent = document.getElementById(`${delBtn.parentNode.id}`);
        let tempKey = delParent.firstElementChild.innerText;
        localStorage.removeItem(tempKey);
        let parentParent = document.getElementById(`${delParent.parentNode.id}`);
        parentParent.remove();
    }
})

// function to clear all the task
let delAllBtn = document.querySelector("#delAll");
delAllBtn.addEventListener("click",function(e){
    let card = document.getElementsByClassName("card");
    Array.from(card).forEach(function(element){
        element.remove();
    })
    localStorage.clear();
})


// function to search task
let searchBar = document.querySelector("#searchBar");
// console.log(searchBar);
searchBar.addEventListener("input", function(e){
    let searchText = searchBar.value;
    // console.log(searchText);
    let result = document.querySelectorAll(".card-text");
    // let result2 = document.querySelectorAll(".card-title")
    Array.from(result).forEach(function(element){
        let parent = document.getElementById(`${element.parentNode.id}`);
            let parentParent = document.getElementById(`${parent.parentNode.id}`);
            if(element.innerText.includes(searchText) || element.previousSibling.innerHTML.includes(searchText)){
                parentParent.style.display = "block";
            }
            else{
                parentParent.style.display = "none";
            }
    })
})
