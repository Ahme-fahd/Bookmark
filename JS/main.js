//select inputs and button

var firstInput=document.getElementById("first-input");
var secondInput=document.getElementById("second-input");
var Add=document.getElementById("AddWebsite");
var allwebsites=[];
var searchText=document.getElementById("searchText");
var tmp;
var website;
if(localStorage.getItem("Bookmark") !=null){
allwebsites=JSON.parse(localStorage.getItem("Bookmark"));
displayWebsites();
}
// localStorage.setItem;
// localStorage.getItem;

//function to addwebsite
 function addWebsite(){

if(validateWebsite()==true){
    var website={
        name:firstInput.value,
        Url:secondInput.value,
        }
        
        
        allwebsites.push(website);
        
        clearData();
        displayWebsites();
        localStorage.setItem("Bookmark",JSON.stringify(allwebsites));
    console.log(allwebsites);


} else{
    alert(validateWebsite());
}





     
    }


//function to diaplay website name and index
function displayWebsites(){
  
var container="";
for(var i=0;i<allwebsites.length;i++){

container +=` 

<tr>
<td>${i+1}</td>
<td>${allwebsites[i].name}</td>
<td><button onclick="openWebsite(${i})"  class="btn btn-warning text-white"> <i class="fa-solid fa-eye"></i> Visit</button>
<td> <button class="btn btn-danger" onclick="updateWebsite(${i});"> <i class="fa-solid fa-pen"> </i> Update</button></td>
<td> <button  onclick="deleteItem(${i})"; class="btn btn-primary"><i class="fa-solid fa-trash pe-1"></i>  Delete </button> </td>
<a href=${allwebsites[i].Url}></a>

</tr>






    `

}

document.getElementById("tableBody").innerHTML=container;



}


function clearData(){

    firstInput.value="";
    secondInput.value="";
    
    
    }
    

    function deleteItem(idx){
allwebsites.splice(idx,1);
localStorage.setItem("Bookmark",JSON.stringify(allwebsites));
displayWebsites();
    }


    function openWebsite(i){

open(allwebsites[i].Url);
    }



    
  
function validateWebsite(){
    var regexName=/^[a-zA-Z]{3,}$/;
var regexUrl=/^(|http|https):\/\/[^ "]+$/
if(regexName.test(firstInput.value)==false){

return "Site name must contain at least 3 characters";

}
else if(regexUrl.test(secondInput.value)==false){
return "Site URL must be a valid one";
}
return true;


}
 





function searchWebsite(){

var searchItem=searchText.value;


var container="";
for(var i=0;i<allwebsites.length;i++){

if(allwebsites[i].name.toLowerCase().includes(searchItem.toLowerCase())){

    

container +=` 

<tr>
<td>${i+1}</td>
<td>${allwebsites[i].name}</td>
<td><button onclick="openWebsite(${i})"  class="btn btn-warning text-white"> <i class="fa-solid fa-eye"></i> Visit</button> </td>
<td> <button  onclick="deleteItem(${i})"; class="btn btn-primary"><i class="fa-solid fa-trash pe-1"></i>  Delete </button> </td>
<a href=${allwebsites[i].Url}></a>

</tr>






    `

}




}
document.getElementById("tableBody").innerHTML=container;


}

function updateWebsite(i){
firstInput.value=allwebsites[i].name;
secondInput.value=allwebsites[i].Url;
tmp=i;

}


function editElement(i){

if(validateWebsite()==true){
        var website={
            name:firstInput.value,
            Url:secondInput.value,
            }
            allwebsites.splice(tmp,1,website);
            tmp=i;
            displayWebsites();
            clearData();
            localStorage.setItem("Bookmark",JSON.stringify(allwebsites));
          
    
    } else{
        alert(validateWebsite());
    }
    

}