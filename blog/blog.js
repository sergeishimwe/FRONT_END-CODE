
 //document.getElementById('item').innerHTML=localStorage.setItem('students');



 const cardStorage= JSON.parse(localStorage.getItem('students')) 
 

 var i,x =""

 for(i in cardStorage){
    
    x +="<h2>"+cardStorage[i].title+"</h2>",
    x +="<h4>"+cardStorage[i].detail+"</h4>",
    x +="<h5>"+cardStorage[i].date+"</h5>",
    x +="<h6>"+cardStorage[i].name+"</h6>"
 }
 document.getElementById('item').innerHTML=x;


 var newDiv = document.createElement('div');
 newDiv.className = "flashcard";

 newDiv.appendChild(x)

 











