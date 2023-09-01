'use strict';

const btn = document.getElementById("calc");

btn.addEventListener("click", function () {
    let percent = document.querySelector('.tipValue:checked').value;
    let bill = document.querySelector('#BillVallue').value;

    let tip = (Number(percent) / 100) * bill; 
    
    tip = tip.toFixed(2)

    let finalVal =  Number(bill) + Number(tip); 


    console.log(percent, bill, tip, finalVal)
    
    document.querySelector("#result").innerHTML =  `Your tip is: ${tip}. Final value to pay is ${finalVal}!`

})

