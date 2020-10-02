





var year =  document.querySelector('#year')
var month= document.querySelector('#month')
var day = document.querySelector('#day')
var button = document.querySelector('#submit')

button.addEventListener("click", function(){
    if (year.value > 2003)  {
        alert("enter a valid age");
    }
    else if(month.value > 12 || month.value<1){
        alert("enter a valid age");
    }
    else if(day.value > 31 || day.value<1){
        alert("enter a valid age");
    }
    else{
        window.location = "file:///C:/Users/aPex%20Predator/Desktop/learn/learning/Dead%20project/index.html"
    }
    

});

