
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 1) {
        productNewCount = productCount -1;
    }
    productInput.value = (productNewCount);
    // const productTotal = productNewCount * 59;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if (product == 'case'){
        productTotal = productNewCount * 59;
    }

    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal()
}

function calculateTotal() {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice; 

}