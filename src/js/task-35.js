const buttonSelectedAll = document.querySelector(".button");
const checkboxNode = document.querySelector(".list-cheakbox")
const checkbox =  checkboxNode.children;
buttonSelectedAll.addEventListener("click", handleSubmit);
function handleSubmit() {
   for (let i =0; i < checkbox.length; i++){
       if (checkbox[i].getAttribute('checked') !== 'checked') {
           checkbox[i].setAttribute('checked', 'checked');
       }
   
       else {
           checkbox[i].removeAttribute('checked');
       }
    }
        
}
   
