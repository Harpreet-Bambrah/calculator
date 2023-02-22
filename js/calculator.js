
function saveval(buttonvalue)
{
    let inputvalue = document.getElementById('calculator-display').value;
    let inputvalue1 =   document.getElementById('calculator-display').value;

    let inputvaluelen3 = inputvalue1.length;

    let inputvaluelen1 = inputvalue1[inputvaluelen3-1];
    
    if(inputvalue == 0){
        document.getElementById('calculator-display').value= " ";
        document.getElementById('calculator-display').value+= buttonvalue; 
    
    }else{
        document.getElementById('calculator-display').value+= buttonvalue; 
      }
    }



    function operator(buttonvalue){
        let inputvalue1 =   document.getElementById('calculator-display').value;

        let inputvaluelen3 = inputvalue1.length;

        let inputvaluelen1 = inputvalue1[inputvaluelen3-1];
        // let inputvaluelen2 = inputvalue1[inputvaluelen3-2];
    
      
        
         if(inputvalue1 == 0 || inputvalue1 == ""){
            document.getElementById('calculator-display').value="";} 
         else if(inputvaluelen1==buttonvalue){
            
            document.getElementById('calculator-display').value+=""; 
         }else if(inputvaluelen1 == "+" || inputvaluelen1 == "-" || inputvaluelen1 == "*" || inputvaluelen1 == "/" || inputvaluelen1 == "%"){
            
            let inputvaluelen2 = inputvalue1.substring(0, inputvaluelen3-1)+buttonvalue;
            document.getElementById('calculator-display').value =inputvaluelen2; 
         }else{ document.getElementById('calculator-display').value+= buttonvalue; 
    }
}


    function buttonshadow(a){
        document.getElementsByTagName('button')[a].style.boxShadow='0px 1px 2px 2px darkgrey';
    }



    function buttonshadow1(a){
        document.getElementsByTagName('button')[a].style.boxShadow='2px 4px 5px 5px darkgrey';
    }



function result(){
let inputvalue1 =   document.getElementById('calculator-display').value;

let inputvaluelen3 = inputvalue1.length;

let inputvaluelen1 = inputvalue1[inputvaluelen3-1];
if(inputvaluelen1 == "+" || inputvaluelen1 == "-" || inputvaluelen1 == "*" || inputvaluelen1 == "/" || inputvaluelen1 == "%"){
   

let inputvaluelen2 = inputvalue1.substring(0,inputvaluelen3-1);
document.getElementById('calculator-display').value = eval(inputvaluelen2);
 }else{ let resultval = document.getElementById('calculator-display').value;
document.getElementById('calculator-display').value = eval(resultval);
}
}


function backspacevalue(){
let inputvalue =   document.getElementById('calculator-display').value;
let inputvaluelen = inputvalue.length;

let inputvaluelen2 = inputvalue.substring(0,inputvaluelen-1);
document.getElementById('calculator-display').value = inputvaluelen2;
}




function calend(buttonvalue){
  
    document.getElementById('calculator-display').value = buttonvalue; 
}

