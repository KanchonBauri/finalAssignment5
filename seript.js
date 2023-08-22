let total = 0;

function handleClick(target) {
    const selectedItemsContainer = document.getElementById("selected.items");
    // console.log(target.childNodes[7].innerText)
    const itemName = target.childNodes[7].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    // console.log(li);
    selectedItemsContainer.appendChild(li);
    // console.log(target.childNodes[9].childNodes[0].innerText)
    const price = target.childNodes[9].childNodes[0].innerText;

    total = parseInt(total) + parseInt(price);
    // console.log(total);
    document.getElementById("total-price").innerText = total;

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // document.getElementById


}

document.getElementById('my-btn').addEventListener('click', function () {
    // console.log('hello');
    const applyConfirm = document.getElementById("apply-confirm");
    const inputItemString = applyConfirm.value ;
    
   if(inputItemString==="SELL200" && total>200){
    const discountAmount = (total * 0.2).toFixed(2);
    const newPrice =total - discountAmount; 
   
    document.getElementById("total").innerText = newPrice;  
    document.getElementById("discount").innerText = discountAmount;
   }
    console.log(discount);

})