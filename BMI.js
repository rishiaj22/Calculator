let weight = document.getElementById("weight");
let height = document.getElementById("height");
let button = document.getElementById("cal");
let display = document.getElementById("display");



button.addEventListener("click",function(){
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);
    display.innerText = calculation(w,h);
});

function calculation(w,h){
    let bmi = w/(h/100)**2;
    let result = "";
    if(parseFloat(bmi)<=18.4){
        result = "Your BMI is " + bmi.toFixed(2) + " which means you are Underweight";
        display.style.color = 'red';
        display.style.marginTop = "0";
    }
    else if(parseFloat(bmi)>=18.5 && parseFloat(bmi)<=24.9){
        result = "Your BMI is " + bmi.toFixed(2) + " which means you weight is Normal";
        display.style.color = 'green';
        display.style.marginTop= "1px"
    }
    else if(parseFloat(bmi)>=25 && parseFloat(bmi)<=29.9){
        result = "Your BMI is " + bmi.toFixed(2) + " which means you are Overweighted";
        display.style.color = 'red';

    }
    else if(parseFloat(bmi)>=30){
        result = "Your BMI is " + bmi.toFixed(2) + " which means you are Obese";
        display.style.marginTop = "10px";
        display.style.color = "black";
    }
    return result;
}