var input = document.getElementById("input")
var op
var n1 =0
var init


const cl = (a)=>{
  if (Number.isInteger(a)){
    if(input.value =="0" || init){
      input.value =""
    }
    input.value = String(input.value + a)
    init=undefined
  }
  else if (a=="="){
    switch (op){
      case "+":
        input.value = parseInt(n1) + parseInt(input.value)
        break;
      case "-":
        input.value = parseInt(n1) - parseInt(input.value)
        break;
      case "×":
        input.value = parseInt(n1) * parseInt(input.value)
        break;     
      case "/":
        input.value = parseInt(n1) / parseInt(input.value)
        break;

    }
    init =1
  }
  else {
    n1 = input.value 
    switch(a){
      case "+":
        op = "+"
        break;
      case "-":
        op = "-"
        break;
      case "×":
        op = "×"
        break;

      case "/":
        op = "/"
        break;
    }

   init=1

  }
}