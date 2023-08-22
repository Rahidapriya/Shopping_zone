let cartTotal = 0;
let orderNumber = 1;
let discount =0;


// card all fuction
function addToCart(name, price){
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");
    const afterDiscountprice = document.getElementById("after-discount-price");
    const totalDiscount = document.getElementById("total-dicount");

    // item list show with order
    const listItem = document.createElement("li");
    listItem.classList.add('font-bold');
    listItem.textContent = `${orderNumber}.${name} `;
    cartList.appendChild(listItem);
    cartTotal += price;
    totalPrice.textContent = `${cartTotal.toFixed(2)} TK`;
    showHr1();
    orderNumber++;
    // end

    if(cartTotal>0){
        btnPurchaseEnable();

        // show total after discount 
      total();

    if(cartTotal>=200)
        {
            // showInfo();
            btnPurchaseDisable();
            btnApplyEnable();
            const applyDiscountButton = document.getElementById("apply-btn");
            applyDiscountButton.addEventListener("click", applyDiscount);
            function applyDiscount() { 
                cuponCodeMatch();
            }
        }
        else{
            btnApplyDisable()
        }  

    }//if-carttotal>0
    function discountf(){
        discount = cartTotal*0.2;
        
            totalDiscount.textContent = ` ${discount.toFixed(2)} TK`;
       }
    
   function total(){
    const totalPayment = parseFloat(cartTotal)-parseFloat(discount);
    afterDiscountprice.classList.add("text-gray-400")
    // console.log(afterDiscountprice)
    showHr2();
    afterDiscountprice.textContent = ` ${totalPayment .toFixed(2)} TK`;
          
   }
   // show horizontal line
function showHr1(){
    const hr= document.getElementById('hr-line');
    hr.style.display='block';
}
function showHr2(){
    const hr2= document.getElementById('hr-line2');
    hr2.style.display='block';
}
function btnPurchaseEnable(){
    const puchasebtn=document.getElementById('purchase-btn');
    puchasebtn.removeAttribute('disabled');
}
function btnPurchaseDisable(){
    const puchasebtn=document.getElementById('purchase-btn');
    puchasebtn.setAttribute('disabled',true);
}
function btnApplyEnable(){
    const applyDiscountButton = document.getElementById("apply-btn");
    applyDiscountButton.removeAttribute('disabled');
  
}
function btnApplyDisable(){
    const applyDiscountButton = document.getElementById("apply-btn");
    applyDiscountButton.setAttribute('disabled',true);
}


function showSuccess(){
    const successMessage = document.getElementById("success");
    successMessage.classList.remove("hidden");
    console.log('Show success')
}
function hideSuccess(){
    const successMessage = document.getElementById("success");
    successMessage.classList.add("hidden");
    console.log(' hide success')
}
function showInfo(){
    const Infomassage = document.getElementById("showInfo");
    Infomassage.classList.remove('hidden');
}
function hideInfo(){
    const Infomassage = document.getElementById("showInfo");
    Infomassage.classList.add('hidden');
}
// refresh button "GO HOme"
var refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload(); // Reload the page
});
// end
function cuponCodeMatch(){
    const discountCodeInput = document.getElementById("cuponcode");
    
    const discountCode = discountCodeInput.value;
    // discountCodeInput.value = "";
    const warningMessage = document.getElementById("warning");
    // function showWarning(){
      
      
    //     console.log(' show warning')
    // }
    // function hideWarning(){
    //     const warningMessage = document.getElementById("warning");
       
    //     console.log(' hide warning')
    // }ismailjosim99@gmail.com
   if(discountCode !== "SELL200"){
    warningMessage.classList.remove("hidden");
   }
    else  {
        console.log(discountCode);
       
        warningMessage.classList.add("hidden");
        hideInfo();
        
        console.log('if er vitore')
       
       
        btnPurchaseEnable();
        // hidden();
        discountf();        
        total();
        btnApplyDisable();
        console.log(discountCode);
        showSuccess();
        discountCodeInput.value = "";
    
    }
    // else{
    //     console.log(discountCode);
    //     showWarning();
    //     console.log('else eer vitor')
    //     hideSuccess();
    //     hideInfo()
        
    // }
    
     
    
}

}



