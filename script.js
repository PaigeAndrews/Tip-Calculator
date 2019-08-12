let bill = document.querySelector(".bill")
let service = document.querySelector(".service")
let people = document.querySelector(".people")
let calculate = document.querySelector(".calculateBtn")
let outcome = document.querySelector(".outcome")
  
let billInput = null
let servicePercent = null
let peopleInput = null


function getValues(){ 
  let total = null
  billInput = bill.value
  peopleInput = people.value
  
  if(service.value == "Above Average"){
     servicePercent = 1.2
  } else if (service.value == "Average"){
     servicePercent = 1.15        
  } else {servicePercent = 1.1
  }
  
  total = (billInput * servicePercent) / peopleInput
  console.log(total)
  outcome.innerHTML = `$${total}`
  

}


calculate.addEventListener('click', getValues)
