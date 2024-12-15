// Step - 1: set event handler 
document.getElementById('button-login').addEventListener('click',function(event){
    // Step - 2 : preventDefault behavior (prevent reloading the browser)
    event.preventDefault()
    // Step - 3 : Get the phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;

    console.log(phoneNumber, pinNumber)
    // Step - 4 : Validate phone and Pin
    // This is temporary. You should do like this
    if(phoneNumber === '5' & pinNumber === '1234'){
        console.log('You are logged in')
        // Step - 5 : Allow user to browse the website
        hideShow('front', 'home')
    }
    else{
        alert('Wrong phone number or Pin')
    }
    
});
document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    //  Valid pin
    const pin = document.getElementById('amount-pin').value;
    const amount = document.getElementById('add-amount').value;
    const balance = document.getElementById('balance').innerText;

    if(pin === '1234'){
        const addMoneyNumber = parseFloat(amount);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('balance').innerText= newBalance;
    }
    else{
        alert('Wrong Pin')
    }

})

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    //  Valid pin
    const pin = document.getElementById('cash-out-pin').value;
    const amount = document.getElementById('cash-out').value;
    const balance = document.getElementById('balance').innerText;


    if(pin === '1234'){
        const addMoneyNumber = parseFloat(amount);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addMoneyNumber;
        document.getElementById('balance').innerText= newBalance;
    }
    else{
        alert('Wrong Pin')
    }

})

document.getElementById('out').addEventListener('click', function(){
    const showPage = document.getElementById("cOut").classList.remove('hidden');
    const hidePage = document.getElementById("cAdd").classList.add('hidden');
    console.log('Pai')
})
document.getElementById('add').addEventListener('click', function(){
    const showPage = document.getElementById("cAdd").classList.remove('hidden');
    const hidePage = document.getElementById("cOut").classList.add('hidden');
    console.log('Pai')
})

function hideShow(hide, show){
    const hidePage = document.getElementById(hide).classList.add('hidden');
    const showPage = document.getElementById(show).classList.remove('hidden')
    return {hidePage, showPage }
}

