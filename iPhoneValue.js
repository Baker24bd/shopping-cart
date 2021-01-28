
function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 1) {
        phoneNewCount = phoneCount -1;
    }
    phoneInput.value = (phoneNewCount);
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;
}