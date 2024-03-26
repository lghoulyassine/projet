let title=document.getElementById("title");
let price=document.getElementById('price');
let taxes=document.getElementById("taxes");
let ads=document.getElementById("ads");
let discount=document.getElementById("discount");
let total=document.getElementById("total");
let count=document.getElementById("count");
let category=document.getElementById("category");

function getTotal(){
    if((document.getElementById('price').value) !=''){
        let result = (Number(document.getElementById('price').value) + Number(document.getElementById("taxes").value) + Number(document.getElementById("ads").value))-Number(document.getElementById("discount").value);
        document.getElementById("total").innerHTML=result;
        
    }

}