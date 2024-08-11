var myIn = document.querySelector('.myInput'); //Result input
var myAllBtn = document.querySelectorAll('.btn'); //All Buuttons
var myResult = document.querySelector('.final');
var mydivid = document.querySelector('.divide');

for( i =0; i < myAllBtn.length; i++){
  myAllBtn[i].addEventListener("click",(A)=>{
   myIn.value+= A.target.dataset.number;
     myResult.addEventListener('click',(A)=>{
       myIn.value =  eval( myIn.value);
      });
})};
function clearAll(){
  myIn.value =" ";
}



