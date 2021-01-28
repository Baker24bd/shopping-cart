// iPhone 11 Silicone Case - Black কবার এর জন্য করা হয়েছে,,,


// document.getElementById('case-increase').addEventListener('click', function(){
//     handleProductChange(true);
// });
// document.getElementById('case-decrease').addEventListener('click', function(){
//     handleProductChange(false);
// });
function handleProductChange(isIncrease) {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 1) {
        caseNewCount = caseCount -1;
    }
    caseInput.value = (caseNewCount);
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + caseTotal;
}