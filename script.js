// display number

let inputDisplay = document.getElementById('inputDisplay');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e)=> {
        switch(e.target.innerText){
            case 'C':
                inputDisplay.value = '';
                break;
            case '<':
                inputDisplay.value = inputDisplay.value.slice(0, -1);  
                break;  

            default:
                inputDisplay.value += e.target.innerText;
        }

    })
})

// generate pin

let pinDisplay = document.getElementById('pinDisplay');
let pinButton = document.getElementById("pinButton");

pinButton.addEventListener('click', ()=>{
    pinDisplay.value = Math.round(Math.random()*10000);
    location.reload();
})

//pin match
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', ()=>{
    let pinOk = document.getElementById('pinOk');
    let pinNotOk = document.getElementById('pinNotOk');
    let tryLeft = document.getElementById('tryLeft');

    if(inputDisplay.value === pinDisplay.value){
        pinOk.style.display = 'block'
        pinNotOk.style.display = 'none';
    }
    else{
        pinNotOk.style.display = 'block';
        pinOk.style.display = 'none'
        tryLeft.innerText = tryLeft.innerText - 1;
        
    }
    
})



