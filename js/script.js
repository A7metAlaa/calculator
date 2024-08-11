var myIn = document.querySelector('.myInput'); //Result input
// Try this myIn.value = 'aJ,ed'
var myAllBtn = document.querySelectorAll('.btn'); //All Buuttons

// console.log(myAllBtn);

var myResult = document.querySelector('.final');

var mydivid = document.querySelector('.divide');



for( i =0; i < myAllBtn.length; i++){

  myAllBtn[i].addEventListener("click",(A)=>{
      //console.log('ok keep on')
    // myIn.style.backgroundColor="red";

    //console.log(myTest.value+1)
    //myTest.value+=myAllBtn[i];
    
   myIn.value+= A.target.dataset.number;
  
  


     myResult.addEventListener('click',(A)=>{
       //console.log(eval(myIn.value))
       myIn.value =  eval( myIn.value);
       
       
       
      });
      
})};

function clearAll(){
  myIn.value =" ";
}



