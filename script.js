const add = document.querySelector(".add");
const inputText =document.querySelector(".inputText");
const toDoList= document.querySelector(".toDoList");
const allClear = document.querySelector(".allClear");
const taskInfo = document.querySelector(".taskInfo");




const completed = document.querySelector(".completed");
const waiting = document.querySelector(".waiting");


const compdiv = document.querySelector(".compdiv");
const waitdiv = document.querySelector(".waitdiv");



compdiv.classList.add("d-none");
waitdiv.classList.add("d-flex");



completed.addEventListener("click",function(){

    waiting.classList.remove("active");
    completed.classList.add("active");

    compdiv.classList.add("d-flex");
    compdiv.classList.remove("d-none");
    waitdiv.classList.add("d-none");
    waitdiv.classList.remove("d-flex");

});

waiting.addEventListener("click",function(){
    
    waiting.classList.add("active");
    completed.classList.remove("active");

    compdiv.classList.add("d-none");
    compdiv.classList.remove("d-flex");
     waitdiv.classList.remove("d-none");
    waitdiv.classList.add("d-flex");
    
});
    

checkCount();

function checkCount(){

    if(compdiv.childElementCount===0 && waitdiv.childElementCount===0) {
        taskInfo.innerHTML=`<p> Task list is empty</p>`;    
    }
    else {
        taskInfo.innerHTML="";
    }

}



inputText.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".add").click();
        console.log(event.target.value);
      }
})

add.addEventListener("click",addFunc);




function addFunc(){    
if(inputText.value!=="") {
    createDivTask(inputText.value);
    inputText.value="";
    checkCount();
}


}



function createDivTask(inputText){
const div = document.createElement("div");
const inputTask = document.createElement("input");
const inputCheck = document.createElement("input");
const taskControl = document.createElement("div");
const buttonEdit = document.createElement("button");
const buttonClear = document.createElement("button");
const buttonSave = document.createElement("button");

div.classList.add("task");
inputTask.setAttribute("readonly","readonly");
inputTask.setAttribute("value",inputText);
inputCheck.setAttribute("type","checkbox");
inputCheck.classList.add("checkbox");
taskControl.classList.add("taskControl");
buttonEdit.classList.add("edit");
buttonEdit.innerText="Edit";
buttonClear.classList.add("clear");
buttonClear.innerText="Clear";
buttonSave.classList.add("d-none");
buttonSave.innerText="Save";


div.appendChild(inputCheck);
taskControl.appendChild(buttonEdit);
taskControl.appendChild(buttonSave);
taskControl.appendChild(buttonClear);


div.appendChild(inputTask);
div.appendChild(taskControl);

inputCheckFunc(inputCheck,div);
waitdiv.appendChild(div);

editSaveFunc(buttonEdit,inputTask,buttonSave);
clear(buttonClear,div);

}

function inputCheckFunc(inputCheck,div){

inputCheck.addEventListener("click",function(){

    if(inputCheck.checked===true) {
       
        compdiv.appendChild(div);
    }
    else {
        waitdiv.appendChild(div);
    }

});
}


function editSaveFunc(editBtn,inputTask,saveBtn){

editBtn.addEventListener("click",function(){

    const end = inputTask.value.length;
    inputTask.setSelectionRange(end,end);
    inputTask.focus();

saveBtn.classList.remove("d-none");
editBtn.classList.add("d-none");
inputTask.removeAttribute("readonly");

});

saveBtn.addEventListener("click",function(){
    
    editBtn.classList.remove("d-none");
    saveBtn.classList.add("d-none");
    inputTask.setAttribute("readonly","readonly");
});

}


function clear(clearBtn,div){
clearBtn.addEventListener("click",function(){
div.remove();
checkCount()
});
}

allClear.addEventListener("click",function(){
compdiv.innerHTML="";
waitdiv.innerHTML="";
taskInfo.innerHTML=`<p> Task list is empty</p>`;  

});
